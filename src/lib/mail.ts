import nodemailer from 'nodemailer';

/**
 * Zoho SMTP transport, configured from the same environment variables the
 * previous site used in Vercel (see SMTP_SETUP.md in the original repository):
 * SMTP_USER, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT, SMTP_SECURE.
 * Credentials are never defaulted in source.
 */
export const INBOX = process.env.BOOKING_NOTIFY_TO || 'info@talavishiraajgroups.com';

export class MailNotConfigured extends Error {}

export function smtpUser() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  if (!user || !pass) throw new MailNotConfigured('Email is not configured: SMTP_USER and SMTP_PASSWORD must be set.');
  return { user, pass };
}

export function transport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.zoho.in',
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    requireTLS: process.env.SMTP_SECURE !== 'true',
    auth: smtpUser(),
    tls: { minVersion: 'TLSv1.2' },
  });
}

export const esc = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** Strip characters that could break a mail header. */
export const header = (v: unknown) => String(v ?? '').replace(/[\r\n"<>]/g, ' ').trim().slice(0, 120);

export const isEmail = (v: unknown) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= 254;

export const nowIST = () => new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

/** Simple branded HTML email body. Every value passed in must already be escaped. */
export function emailHtml(title: string, rows: [string, string][], blockTitle?: string, block?: string, footer?: string) {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#0A0B0D">
    <h2 style="border-bottom:2px solid #2B55FF;padding-bottom:10px">${title}</h2>
    <div style="background:#F4F3EE;padding:20px;border-radius:12px;margin:20px 0">
      ${rows.map(([k, v]) => `<p style="margin:8px 0"><strong>${k}:</strong> ${v}</p>`).join('')}
    </div>
    ${block ? `<h3 style="margin-bottom:10px">${blockTitle}</h3><p style="background:#fff;padding:15px;border-left:4px solid #2B55FF;white-space:pre-wrap">${block}</p>` : ''}
    <div style="margin-top:30px;padding-top:16px;border-top:1px solid #e5e7eb;color:#6b7280;font-size:12px">
      <p>Received ${esc(nowIST())} IST</p>${footer ? `<p>${footer}</p>` : ''}
    </div>
  </div>`;
}

/**
 * Where the lead came from: the first page they landed on in this visit, the
 * referring site and any campaign tags, captured client side by Attribution.tsx.
 */
export function sourceInfo(b: Record<string, unknown>) {
  const clean = (v: unknown, n = 200) => String(v ?? '').replace(/[\r\n]/g, ' ').trim().slice(0, n);
  const landing = clean(b.landing);
  const referrer = clean(b.referrer, 120);
  const campaign = clean(b.campaign);
  const path = /^\/[\w\-/.]*$/.test(landing) ? landing : '';
  const r = referrer.toLowerCase();
  const channel = /google\./.test(r) ? 'Google search' : /bing\./.test(r) ? 'Bing search' : /chatgpt|openai/.test(r) ? 'ChatGPT' : /perplexity/.test(r) ? 'Perplexity' : /linkedin/.test(r) ? 'LinkedIn' : /duckduckgo/.test(r) ? 'DuckDuckGo' : !r || r === 'direct' ? 'Direct or unknown' : referrer;
  const rows: [string, string][] = [];
  if (path) rows.push(['First page', `<a href="https://www.talavishiraajgroups.com${esc(path)}">${esc(path)}</a>`]);
  rows.push(['Came from', esc(channel)]);
  if (campaign) rows.push(['Campaign', esc(campaign)]);
  const text = [path && `First page: ${path}`, `Came from: ${channel}`, campaign && `Campaign: ${campaign}`].filter(Boolean).join('\n');
  const subjectTag = path.startsWith('/blog/') ? ' (from blog)' : '';
  return { rows, text, subjectTag };
}

/** Very small in-memory rate limit per IP, enough to blunt form spam on a single instance. */
const hits = new Map<string, number[]>();
export function rateLimited(ip: string, max = 5, windowMs = 10 * 60_000) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(ip, list);
  return list.length > max;
}

export const clientIp = (req: Request) => req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
