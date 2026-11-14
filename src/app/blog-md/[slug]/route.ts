import { getPost, getPosts, postMarkdown } from '@/lib/blog';

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

/** Served at /blog/<slug>.md through a rewrite in next.config.mjs. */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) return new Response('Not found', { status: 404 });
  return new Response(postMarkdown(p), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'X-Robots-Tag': 'noindex', Link: `<https://www.talavishiraajgroups.com/blog/${p.slug}>; rel="canonical"` },
  });
}
