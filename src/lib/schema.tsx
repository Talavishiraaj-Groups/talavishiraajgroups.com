/**
 * Structured data helpers. Every article-style page declares itself as an Article
 * published by the organization defined once in layout.tsx (@id .../#org), so
 * search engines and AI assistants see who wrote it and what it is about.
 */
export const BASE = 'https://www.talavishiraajgroups.com';
const ORG = { '@id': `${BASE}/#org` };

/** "November 8, 2026" or "2026-11-08" -> "2026-11-08"; undefined if it cannot be read. */
export function isoDate(d?: string) {
  if (!d) return undefined;
  if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  const t = Date.parse(d + ' UTC');
  return Number.isNaN(t) ? undefined : new Date(t).toISOString().slice(0, 10);
}

export function articleLd(a: { path: string; headline: string; description: string; datePublished?: string; dateModified?: string; section?: string; about?: string }) {
  const published = isoDate(a.datePublished);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.headline.slice(0, 110),
    description: a.description,
    ...(published ? { datePublished: published, dateModified: isoDate(a.dateModified) ?? published } : {}),
    author: { '@type': 'Organization', name: 'Talavishiraaj Groups', url: BASE, ...ORG },
    publisher: { '@type': 'Organization', name: 'Talavishiraaj Groups', logo: { '@type': 'ImageObject', url: `${BASE}/logo.png` }, ...ORG },
    mainEntityOfPage: `${BASE}${a.path}`,
    url: `${BASE}${a.path}`,
    image: `${BASE}/og-image.png`,
    inLanguage: 'en',
    ...(a.section ? { articleSection: a.section } : {}),
    ...(a.about ? { about: a.about } : {}),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${BASE}${it.path}` })),
  };
}

export function faqLd(qa: { q: string; a: string }[]) {
  if (!qa.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** Renders one or more JSON-LD objects. Escapes "<" so content can never close the script tag. */
export function JsonLd({ data }: { data: (object | null | undefined)[] }) {
  return (
    <>
      {data.filter(Boolean).map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, '\\u003c') }} />
      ))}
    </>
  );
}
