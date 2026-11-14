import type { MetadataRoute } from 'next';
import { insights, legalNav, sectors } from '@/content';
import { capabilities } from '@/content/capabilities';
import { cases } from '@/content/cases';
import { roles } from '@/content/careers';
import { getPosts } from '@/lib/blog';

const BASE = 'https://www.talavishiraajgroups.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const top = ['', '/about', '/services', '/products', '/build-vs-buy', '/what-it-costs', '/in-house-vs-agency', '/case-studies', '/insights', '/sectors', '/resources', '/resources/ai-production-readiness-checklist', '/partnerships', '/careers', '/contact'];
  const urls = [
    ...top,
    ...capabilities.map((c) => `/services/${c.slug}`),
    ...sectors.map((s) => `/sectors/${s.slug}`),
    ...cases.map((c) => `/case-studies/${c.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
    ...roles.map((r) => `/careers/${r.slug}`),
    ...legalNav.map((l) => `/${l.slug}`),
  ];
  const posts = getPosts();
  const blog: MetadataRoute.Sitemap = [
    { url: BASE + '/blog', lastModified: posts[0] ? new Date(posts[0].date) : now, changeFrequency: 'daily', priority: 0.8 },
    ...posts.map((p) => ({ url: `${BASE}/blog/${p.slug}`, lastModified: new Date(p.updated || p.date), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ];
  const pages: MetadataRoute.Sitemap = urls.map((u) => ({
    url: BASE + u,
    lastModified: now,
    changeFrequency: u === '' || u === '/insights' ? 'weekly' : 'monthly',
    priority: u === '' ? 1 : u.split('/').length === 2 ? 0.8 : 0.6,
  }));
  return [...pages, ...blog];
}
