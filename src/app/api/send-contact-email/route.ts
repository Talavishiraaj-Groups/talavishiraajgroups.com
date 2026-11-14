import { NextResponse } from 'next/server';
import { INBOX, MailNotConfigured, clientIp, emailHtml, esc, header, isEmail, rateLimited, smtpUser, transport } from '@/lib/mail';

export const runtime = 'nodejs';

/** Contact and booking-qualifier form. Same URL and payload as the previous site. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
  const { name, email, company, phone, service, message, website } = body as Record<string, string>;

  // Honeypot: real visitors never see or fill this field.
  if (website) return NextResponse.json({ success: true });
  if (!name || !email || !message) return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
  if (!isEmail(email)) return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
  if (String(message).length > 5000) return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
  if (rateLimited(clientIp(req))) return NextResponse.json({ error: 'Too many messages. Please email us directly.' }, { status: 429 });

  try {
    const { user } = smtpUser();
    const rows: [string, string][] = [
      ['Name', esc(name)],
      ['Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
    ];
    if (company) rows.push(['Organization', esc(company)]);
    if (phone) rows.push(['Phone', esc(phone)]);
    if (service) rows.push(['Focus area', esc(service)]);

    await transport().sendMail({
      from: `"${header(name)}" <${user}>`,
      to: INBOX,
      replyTo: String(email),
      subject: `New Contact Form Submission from ${header(name)}${company ? ` - ${header(company)}` : ''}`,
      html: emailHtml('New contact form submission', rows, 'Their situation', esc(message), `Reply to this email to reach ${esc(name)} directly.`),
      text: [`Name: ${name}`, `Email: ${email}`, company && `Organization: ${company}`, phone && `Phone: ${phone}`, service && `Focus area: ${service}`, '', String(message)].filter((x) => x !== undefined && x !== '').join('\n'),
    });
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('send-contact-email failed:', error);
    const notConfigured = error instanceof MailNotConfigured;
    return NextResponse.json({ error: notConfigured ? 'Email is not configured on the server' : 'Failed to send email' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
