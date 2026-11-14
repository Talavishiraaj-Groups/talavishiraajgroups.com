import crypto from 'node:crypto';
import { NextResponse } from 'next/server';
import { INBOX, emailHtml, esc, header, smtpUser, transport } from '@/lib/mail';

export const runtime = 'nodejs';

/**
 * Cal.com booking webhook, ported from api/cal-webhook.js. Re-sends booking
 * events through the same Zoho SMTP inbox as the forms. Verifies Cal.com's
 * HMAC SHA256 signature over the raw body with CAL_WEBHOOK_SECRET and fails
 * closed. Subscriber URL: https://www.talavishiraajgroups.com/api/cal-webhook
 */
const LABELS: Record<string, string> = {
  BOOKING_CREATED: 'New call booked',
  BOOKING_RESCHEDULED: 'Call rescheduled',
  BOOKING_CANCELLED: 'Call cancelled',
};

function valid(raw: string, signature: string | null, secret: string) {
  if (!signature) return false;
  const expected = Buffer.from(crypto.createHmac('sha256', secret).update(raw).digest('hex'), 'utf8');
  const got = Buffer.from(signature, 'utf8');
  return expected.length === got.length && crypto.timingSafeEqual(expected, got);
}

const when = (iso?: string) => {
  if (!iso) return 'Not given';
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? String(iso) : d.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'short' });
};

export async function POST(req: Request) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: 'CAL_WEBHOOK_SECRET is not configured.' }, { status: 500 });

  const raw = await req.text();
  if (!valid(raw, req.headers.get('x-cal-signature-256'), secret)) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });

  try {
    const body = JSON.parse(raw);
    const trigger: string = body.triggerEvent || 'BOOKING_CREATED';
    const p = body.payload || {};
    const attendee = (p.attendees && p.attendees[0]) || {};
    const name = attendee.name || p.name || 'Unknown';
    const email = attendee.email || p.email || '';
    const tz = attendee.timeZone || p.timeZone || '';
    const responses = p.responses || {};
    const notes = p.additionalNotes || responses.notes?.value || '';
    const answers = Object.entries(responses)
      .filter(([k]) => !['name', 'email', 'notes', 'guests', 'location'].includes(k))
      .map(([k, v]: [string, any]) => {
        const t = v && typeof v === 'object' ? v.value : v;
        return t ? `${k}: ${Array.isArray(t) ? t.join(', ') : t}` : null;
      })
      .filter(Boolean) as string[];
    const label = LABELS[trigger] || trigger;
    const whenText = when(p.startTime);
    const { user } = smtpUser();

    await transport().sendMail({
      from: `"Bookings" <${user}>`,
      to: INBOX,
      replyTo: email || undefined,
      subject: `${label}: ${header(name)} - ${whenText}`,
      html: emailHtml(
        esc(label),
        [
          ['Who', esc(name)],
          ['Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
          ['When', `${esc(whenText)}${tz ? ` (${esc(tz)})` : ''}`],
          ['Event', esc(p.title || 'Call')],
        ],
        answers.length ? 'What they told Cal.com' : notes ? 'Notes' : undefined,
        answers.length ? esc([...answers, notes && `notes: ${notes}`].filter(Boolean).join('\n')) : notes ? esc(notes) : undefined,
        `Cal.com has already sent ${esc(name)} their own confirmation, invite and reminder. This is the internal copy.`,
      ),
      text: [label, `Who: ${name}`, `Email: ${email}`, `When: ${whenText}${tz ? ` (${tz})` : ''}`, `Event: ${p.title || 'Call'}`, answers.length ? `\n${answers.join('\n')}` : '', notes ? `\nNotes:\n${notes}` : ''].filter(Boolean).join('\n'),
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('cal-webhook failed:', error);
    return NextResponse.json({ error: 'Could not process booking' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
