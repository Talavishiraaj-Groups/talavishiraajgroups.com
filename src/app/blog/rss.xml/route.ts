import { getPosts } from '@/lib/blog';

const BASE = 'https://www.talavishiraajgroups.com';
const x = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const dynamic = 'force-static';

export function GET() {
  const items = getPosts()
    .slice(0, 50)
    .map(
      (p) => `<item><title>${x(p.title)}</title><link>${BASE}/blog/${p.slug}</link><guid>${BASE}/blog/${p.slug}</guid><pubDate>${new Date(p.date + 'T06:00:00Z').toUTCString()}</pubDate><description>${x(p.description)}</description>${p.tags.map((t) => `<category>${x(t)}</category>`).join('')}</item>`,
    )
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Talavishiraaj Groups Blog</title><link>${BASE}/blog</link><atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml"/><description>What is changing in AI, and what to do about it.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
