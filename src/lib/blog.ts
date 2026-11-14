import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

/**
 * Blog posts are Markdown files in content/blog. Files starting with "_" are ignored.
 * See BLOG_WRITING_GUIDE.md for the frontmatter fields and the writing rules.
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  answer: string;
  faq: { q: string; a: string }[];
  sources: { title: string; url: string }[];
  cover?: { motif?: string; palette?: string };
  html: string;
  toc: { id: string; label: string }[];
  words: number;
  readTime: string;
};

const DIR = path.join(process.cwd(), 'content', 'blog');
const slugify = (s: string) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function load(file: string): Post {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const toc: Post['toc'] = [];
  let html = marked.parse(content, { async: false, gfm: true }) as string;
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, inner: string) => {
    const id = slugify(inner);
    toc.push({ id, label: inner.replace(/<[^>]+>/g, '') });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  // External links open in a new tab and pass no referrer weight.
  html = html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener nofollow"');
  const words = content.split(/\s+/).filter(Boolean).length;
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date);
  const updated = data.updated instanceof Date ? data.updated.toISOString().slice(0, 10) : data.updated ? String(data.updated) : undefined;
  return {
    slug: file.replace(/\.md$/, ''),
    title: String(data.title),
    description: String(data.description),
    date,
    updated,
    author: String(data.author || 'Talavishiraaj Groups'),
    tags: (data.tags as string[]) || [],
    answer: String(data.answer || ''),
    faq: (data.faq as Post['faq']) || [],
    sources: (data.sources as Post['sources']) || [],
    cover: (data.cover as Post['cover']) || undefined,
    html,
    toc,
    words,
    readTime: `${Math.max(3, Math.round(words / 220))} min read`,
  };
}

let cache: Post[] | null = null;
export function getPosts(): Post[] {
  if (cache && process.env.NODE_ENV === 'production') return cache;
  if (!fs.existsSync(DIR)) return [];
  const today = new Date().toISOString().slice(0, 10);
  cache = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md') && !f.startsWith('_'))
    .map(load)
    .filter((p) => p.date <= today)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
  return cache;
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);

export const formatDate = (d: string) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
