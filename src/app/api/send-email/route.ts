import { NextResponse } from 'next/server';
import { INBOX, MailNotConfigured, clientIp, emailHtml, esc, header, isEmail, rateLimited, smtpUser, transport } from '@/lib/mail';

export const runtime = 'nodejs';

/** Keep-in-touch form on /community. Same URL and payload as the previous site. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
  const { name, email, number, message, website } = body as Record<string, string>;
  if (website) return NextResponse.json({ success: true });
  if (!name || !email || !number || !message) return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  if (!isEmail(email)) return NextResponse.json({ error: 'Please enter a valid email address' }, { status: 400 });
  if (String(message).length > 3000) return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
  if (rateLimited(clientIp(req))) return NextResponse.json({ error: 'Too many requests. Please email us directly.' }, { status: 429 });

  try {
    const { user } = smtpUser();
    await transport().sendMail({
      from: `"${header(name)}" <${user}>`,
      to: INBOX,
      replyTo: String(email),
      subject: `New Community Form Submission from ${header(name)}`,
      html: emailHtml(
        'New keep-in-touch registration',
        [
          ['Name', esc(name)],
          ['Email', `<a href="mailto:${esc(email)}">${esc(email)}</a>`],
          ['Phone', esc(number)],
        ],
        'What they are working on',
        esc(message),
      ),
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${number}\n\n${message}`,
    });
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('send-email failed:', error);
    return NextResponse.json({ error: error instanceof MailNotConfigured ? 'Email is not configured on the server' : 'Failed to send email' }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
