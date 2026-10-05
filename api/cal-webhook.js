const crypto = require('crypto');
const nodemailer = require('nodemailer');

/**
 * Cal.com booking webhook.
 *
 * Why this exists: Cal.com sends its own confirmation emails from its own
 * infrastructure, so a booking lands in whatever inbox the Cal account uses
 * and never touches the Zoho pipeline the rest of the site runs on. That
 * splits the record of who is coming in across two systems. This endpoint
 * receives the booking event and re-sends it through the same SMTP transport
 * as the contact form, so every inbound lands in one place.
 *
 * It does not replace Cal.com's own emails. The attendee still gets their
 * confirmation, calendar invite and reminder from Cal.com, which is what they
 * expect. This is the internal copy.
 *
 * Setup:
 *   1. Cal.com > Settings > Developer > Webhooks > New.
 *   2. Subscriber URL: https://www.talavishiraajgroups.com/api/cal-webhook
 *   3. Triggers: Booking Created, Booking Rescheduled, Booking Cancelled.
 *   4. Set a secret, and put the same value in CAL_WEBHOOK_SECRET.
 *
 * Environment variables: CAL_WEBHOOK_SECRET, plus the SMTP_* variables already
 * documented in SMTP_SETUP.md.
 */

const NOTIFY_TO = process.env.BOOKING_NOTIFY_TO || 'info@talavishiraajgroups.com';

function smtpCredentials() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!user || !pass) {
    throw new Error(
      'Email is not configured: SMTP_USER and SMTP_PASSWORD must be set as environment variables.',
    );
  }
  return { user, pass };
}

/**
 * Cal.com signs the raw body with HMAC SHA256 using the webhook secret. We
 * verify it so this endpoint cannot be used by anyone who finds the URL to
 * post fake bookings into the inbox. Compared in constant time.
 */
function signatureIsValid(rawBody, signature, secret) {
  if (!secret) return false;
  if (!signature) return false;
  const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
  const a = Buffer.from(expected, 'utf8');
  const b = Buffer.from(String(signature), 'utf8');
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/** Read the exact bytes Cal.com signed. The Vercel body parser is disabled below. */
async function readRawBody(req) {
  if (Buffer.isBuffer(req.body)) return req.body;
  if (typeof req.body === 'string') return Buffer.from(req.body, 'utf8');
  if (req.body !== undefined && req.body !== null) {
    throw new Error('Raw request body is unavailable; signature verification cannot continue.');
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const formatWhen = (iso) => {
  if (!iso) return 'Not given';
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return String(iso);
  return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });
};

const TRIGGER_LABELS = {
  BOOKING_CREATED: 'New call booked',
  BOOKING_RESCHEDULED: 'Call rescheduled',
  BOOKING_CANCELLED: 'Call cancelled',
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (!secret) {
    // Fail closed. An unverified endpoint that emails us is a spam relay.
    return res.status(500).json({ error: 'CAL_WEBHOOK_SECRET is not configured.' });
  }

  let rawBodyBuffer;
  try {
    rawBodyBuffer = await readRawBody(req);
  } catch (error) {
    // The only way this throws is that something parsed the body before we saw
    // it, which means the exact bytes Cal.com signed are gone and the HMAC can
    // never match. `bodyParser: false` below is meant to prevent that, but it
    // is a platform behaviour we cannot confirm without a deployed test, so
    // the message names the cause rather than leaving a bare 400 in the logs.
    return res.status(400).json({
      error: 'Could not read the raw request body.',
      details:
        'The request body was already parsed, so the signed bytes are unavailable. Check that bodyParser is disabled for this function.',
      cause: error.message,
    });
  }
  const rawBody = rawBodyBuffer.toString('utf8');
  const signature = req.headers['x-cal-signature-256'] || req.headers['X-Cal-Signature-256'];
  if (!signatureIsValid(rawBodyBuffer, signature, secret)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  try {
    const body = typeof req.body === 'object' && req.body !== null ? req.body : JSON.parse(rawBody);
    const trigger = body.triggerEvent || 'BOOKING_CREATED';
    const payload = body.payload || {};

    const attendee = (payload.attendees && payload.attendees[0]) || {};
    const name = attendee.name || payload.name || 'Unknown';
    const email = attendee.email || payload.email || '';
    const title = payload.title || 'Call';
    const when = formatWhen(payload.startTime);
    const timezone = attendee.timeZone || payload.timeZone || '';
    // Anything the booker typed into the Cal.com booking questions.
    const responses = payload.responses || {};
    const notes = payload.additionalNotes || responses.notes?.value || '';

    const answers = Object.entries(responses)
      .filter(([key]) => !['name', 'email', 'notes', 'guests', 'location'].includes(key))
      .map(([key, value]) => {
        const text = value && typeof value === 'object' ? value.value : value;
        return text ? `${key}: ${Array.isArray(text) ? text.join(', ') : text}` : null;
      })
      .filter(Boolean);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.in',
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      requireTLS: true,
      auth: smtpCredentials(),
      tls: { minVersion: 'TLSv1.2' },
    });

    const label = TRIGGER_LABELS[trigger] || trigger;

    await transporter.sendMail({
      from: `"Bookings" <${smtpCredentials().user}>`,
      to: NOTIFY_TO,
      replyTo: email || undefined,
      subject: `${label}: ${name}${payload.organizer?.name ? '' : ''} - ${when}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111; border-bottom: 2px solid #111; padding-bottom: 10px;">${escapeHtml(label)}</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Who:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin: 10px 0;"><strong>When:</strong> ${escapeHtml(when)}${timezone ? ` (${escapeHtml(timezone)})` : ''}</p>
            <p style="margin: 10px 0;"><strong>Event:</strong> ${escapeHtml(title)}</p>
          </div>
          ${
            answers.length
              ? `<div style="margin: 20px 0;"><h3 style="color:#111;margin-bottom:10px;">What they told Cal.com</h3><p style="background:#fff;padding:15px;border-left:4px solid #111;border-radius:4px;white-space:pre-wrap;">${escapeHtml(answers.join('\n'))}</p></div>`
              : ''
          }
          ${
            notes
              ? `<div style="margin: 20px 0;"><h3 style="color:#111;margin-bottom:10px;">Notes</h3><p style="background:#fff;padding:15px;border-left:4px solid #111;border-radius:4px;white-space:pre-wrap;">${escapeHtml(notes)}</p></div>`
              : ''
          }
          <div style="margin-top:30px;padding-top:20px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px;">
            <p>Received from Cal.com on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            <p>Cal.com has already sent ${escapeHtml(name)} their own confirmation, invite and reminder. This is the internal copy.</p>
          </div>
        </div>
      `,
      text: [
        label,
        `Who: ${name}`,
        `Email: ${email}`,
        `When: ${when}${timezone ? ` (${timezone})` : ''}`,
        `Event: ${title}`,
        answers.length ? `\nWhat they told Cal.com:\n${answers.join('\n')}` : '',
        notes ? `\nNotes:\n${notes}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    // Returning 500 makes Cal.com retry, which is what we want for a transient
    // SMTP failure rather than silently losing the booking record.
    return res.status(500).json({ error: 'Could not process booking' });
  }
};

// Cal.com signatures cover the original request bytes. Do not let Vercel parse
// the JSON first, because re-serializing an object can change those bytes.
module.exports.config = {
  api: {
    bodyParser: false,
  },
};
