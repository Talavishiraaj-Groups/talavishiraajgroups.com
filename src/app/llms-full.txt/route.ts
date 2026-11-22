import { getPosts, postMarkdown } from '@/lib/blog';

export const dynamic = 'force-static';

/** Every blog post as Markdown in one file, newest first, for AI assistants and agents. */
export function GET() {
  const body = ['# Talavishiraaj Groups blog: full text', '', 'What is changing in technology and AI, and what it means for companies deciding what to build, buy, modernize or automate.', '', ...getPosts().map((p) => postMarkdown(p) + '\n\n---\n')].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
