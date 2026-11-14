import fs from 'node:fs';
import path from 'node:path';
import { getPosts } from '@/lib/blog';

export const dynamic = 'force-static';

const BASE = 'https://www.talavishiraajgroups.com';

/**
 * llms.txt: the hand-written site summary (content/llms-base.txt) plus the latest
 * blog posts, regenerated on every deploy, so assistants always see current writing.
 */
export function GET() {
  const base = fs.readFileSync(path.join(process.cwd(), 'content', 'llms-base.txt'), 'utf8').trimEnd();
  const posts = getPosts().slice(0, 30);
  const blog = posts.length
    ? `\n\n## Latest blog posts\n\nEach post is also available as plain Markdown at the same URL with .md added, and all of them together at ${BASE}/llms-full.txt.\n\n` +
      posts.map((p) => `- [${p.title}](${BASE}/blog/${p.slug}.md): ${p.answer || p.description}`).join('\n')
    : '';
  return new Response(base + blog + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
