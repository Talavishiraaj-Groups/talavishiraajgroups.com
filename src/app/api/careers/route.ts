import { NextResponse } from 'next/server';
import { INBOX, MailNotConfigured, clientIp, emailHtml, esc, header, isEmail, rateLimited, smtpUser, transport } from '@/lib/mail';
import { roles } from '@/content/careers';

export const runtime = 'nodejs';

/** Vercel caps request bodies at 4.5 MB, so keep the CV comfortably under that. */
const MAX_FILE = 4 * 1024 * 1024;
const TYPES: Record<string, string> = {
  'application/pdf': 'pdf',
  'application/msword': 'doc',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx',
};
const CAREERS_INBOX = process.env.CAREERS_NOTIFY_TO || INBOX;

/** Job applications from /careers, delivered to the inbox with the CV attached. */
export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
  const get = (k: string) => String(form.get(k) ?? '').trim();
  const name = get('name');
  const email = get('email');
  const phone = get('phone');
  const location = get('location');
  const role = get('role');
  const link = get('link');
  const note = get('note');

  if (get('website')) return NextResponse.json({ success: true });
  if (!name || !email || !phone || !location || !role) return NextResponse.json({ error: 'Name, email, phone, location and role are required' }, { status: 400 });
  if (!isEmail(email)) return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
  if (!roles.some((r) => r.title === role)) return NextResponse.json({ error: 'Please choose a role' }, { status: 400 });
  if (note.length > 3000 || name.length > 120 || location.length > 120 || link.length > 300) return NextResponse.json({ error: 'One of the fields is too long' }, { status: 400 });
  if (link && !/^https?:\/\/\S+$/i.test(link)) return NextResponse.json({ error: 'The profile link should start with https://' }, { status: 400 });

  const file = form.get('cv');
  const cv = file instanceof File && file.size > 0 ? file : null;
  if (!cv && !link) return NextResponse.json({ error: 'Attach a CV or add a LinkedIn or profile link' }, { status: 400 });
  if (cv && cv.size > MAX_FILE) return NextResponse.json({ error: 'The CV must be under 4 MB' }, { status: 400 });
  if (cv && !TYPES[cv.type]) return NextResponse.json({ error: 'The CV must be a PDF or Word file' }, { status: 400 });
  if (rateLimited(clientIp(req), 3)) return NextResponse.json({ error: 'Too many applications. Please email us directly.' }, { status: 429 });

  try {
    const { user } = smtpUser();
    const rows: [string, string][] = [
      ['Role', esc(role)],
      ['Name', esc(name)],
      ['Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
      ['Phone', esc(phone)],
      ['Based in', esc(location)],
    ];
    if (link) rows.push(['Profile', `<a href="${esc(link)}">${esc(link)}</a>`]);
    rows.push(['CV', cv ? 'Attached' : 'Not attached']);

    const attachments = cv
      ? [{ filename: `CV - ${header(name).replace(/[^\w .-]/g, '')}.${TYPES[cv.type]}`, content: Buffer.from(await cv.arrayBuffer()), contentType: cv.type }]
      : [];

    await transport().sendMail({
      from: `"${header(name)}" <${user}>`,
      to: CAREERS_INBOX,
      replyTo: email,
      subject: `Application: ${header(role)} - ${header(name)} (${header(location)})`,
      html: emailHtml('New job application', rows, note ? 'Why this role' : undefined, note ? esc(note) : undefined, `Reply to this email to reach ${esc(name)} directly.`),
      text: [`Role: ${role}`, `Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, `Based in: ${location}`, link && `Profile: ${link}`, '', note].filter(Boolean).join('\n'),
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('careers application failed:', error);
    const notConfigured = error instanceof MailNotConfigured;
    return NextResponse.json({ error: notConfigured ? 'Email is not configured on the server' : 'Failed to send application' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
