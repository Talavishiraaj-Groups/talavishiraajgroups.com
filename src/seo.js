import React, { createContext, useContext, useEffect } from 'react';

/* ------------------------------------------------------------------ *
 * Site identity
 *
 * The canonical host was determined from the live deployment: the apex
 * domain (talavishiraajgroups.com) redirects to the www host, and the
 * legacy tjgroups.com domain redirects to the same destination.
 * ------------------------------------------------------------------ */

export const SITE_ORIGIN = 'https://www.talavishiraajgroups.com';
export const BRAND = 'Talavishiraaj Groups';
export const CONTACT_EMAIL = 'info@talavishiraajgroups.com';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/talavishiraaj-groups/';
export const TWITTER_URL = 'https://twitter.com/talavishiraaj';
export const SOCIAL_PROFILES = [LINKEDIN_URL, TWITTER_URL];

export const TAGLINE = 'Execution is Our Foundation. Innovation is Our Identity.';

export const DEFAULT_OG_IMAGE = '/og-image.png';
const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

/**
 * Priority markets, in the order they are actively pursued. Work is not limited
 * to these: engagements are delivered internationally, and PRIMARY_MARKETS is
 * the focus list rather than a boundary.
 */
export const PRIMARY_MARKETS = [
  'United States',
  'United Kingdom',
  'United Arab Emirates',
  'Europe',
  'India',
];

/** Retained for existing imports. */
export const MARKETS = PRIMARY_MARKETS;

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${clean.replace(/\/$/, '')}`;
};

/* ------------------------------------------------------------------ *
 * Structured data
 *
 * Every field below is backed by content that is visible somewhere on
 * the public site. No ratings, reviews, awards, offers or prices are
 * emitted anywhere.
 * ------------------------------------------------------------------ */

const ORG_ID = `${SITE_ORIGIN}/#organization`;
const SITE_ID = `${SITE_ORIGIN}/#website`;

export const organizationRef = { '@id': ORG_ID };

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND,
  alternateName: 'TJ Groups',
  url: absoluteUrl('/'),
  logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  description:
    'Talavishiraaj Groups brings research, engineering, artificial intelligence and technology together to solve complex problems and build practical systems. The organization works across software and data engineering, AI and automation, product engineering, research and development, business systems, growth and implementation.',
  email: CONTACT_EMAIL,
  sameAs: SOCIAL_PROFILES,
  founder: [
    { '@type': 'Person', name: 'Dhiraj TH' },
    { '@type': 'Person', name: 'Yatharth Chauhan' },
  ],
  knowsAbout: [
    'Software Engineering',
    'Artificial Intelligence',
    'Product Engineering',
    'Business Systems',
    'Automation',
  ],
  areaServed: [
    { '@type': 'Place', name: 'Worldwide' },
    ...PRIMARY_MARKETS.map((name) => ({ '@type': 'Place', name })),
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: CONTACT_EMAIL,
      url: absoluteUrl('/contact'),
      availableLanguage: ['English'],
    },
  ],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: BRAND,
  url: absoluteUrl('/'),
  publisher: organizationRef,
  inLanguage: 'en',
});

export const webPageSchema = ({ path, title, description, type = 'WebPage' }) => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  isPartOf: { '@id': SITE_ID },
  about: organizationRef,
  inLanguage: 'en',
});

export const breadcrumbSchema = (trail) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

/** Services carry no offer or price node: commercial terms are not published. */
export const serviceSchema = ({ name, description, serviceType, path }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  serviceType,
  provider: organizationRef,
  areaServed: [
    { '@type': 'Place', name: 'Worldwide' },
    ...PRIMARY_MARKETS.map((market) => ({ '@type': 'Place', name: market })),
  ],
  url: absoluteUrl(path),
});

export const personSchema = ({ name, jobTitle, description, image }) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name,
  jobTitle,
  description,
  ...(image ? { image: absoluteUrl(image) } : {}),
  worksFor: organizationRef,
});

export const itemListSchema = ({ name, items }) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
  })),
});

/**
 * FAQPage is emitted only where the questions and answers are genuinely
 * visible on the page, which is what Google's structured data policy
 * requires. It is not used as a rich-result tactic.
 */
export const faqSchema = (entries) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: entries.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
});

/* ------------------------------------------------------------------ *
 * Head construction
 *
 * The head is built as plain data so the identical definition can be
 * serialized into static HTML at build time and applied to the live
 * document during client-side navigation.
 * ------------------------------------------------------------------ */

export function buildHead({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd = [],
} = {}) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  const metas = [
    { name: 'description', content: description },
    {
      name: 'robots',
      content: noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1',
    },
    { property: 'og:site_name', content: BRAND },
    { property: 'og:type', content: type },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) },
    { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) },
    { property: 'og:image:alt', content: `${BRAND}: ${title}` },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl },
    { name: 'twitter:image:alt', content: `${BRAND}: ${title}` },
  ].filter((m) => m.content);

  return {
    title,
    metas,
    links: [{ rel: 'canonical', href: canonical }],
    jsonLd: [organizationSchema(), websiteSchema(), ...jsonLd].filter(Boolean),
    noindex,
    path,
  };
}

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

// The only sequence that can break out of a <script> block is a literal
// "</script>", so the slash is escaped while the JSON stays valid.
const escapeJsonLd = (value) => JSON.stringify(value).replace(/<\/(script)/gi, '<\\/$1');

/** Serializes a head description to static HTML for the prerender step. */
export function renderHeadToHtml(head) {
  const parts = [`<title>${escapeAttr(head.title)}</title>`];
  for (const meta of head.metas) {
    const key = meta.name ? 'name' : 'property';
    parts.push(
      `<meta ${key}="${escapeAttr(meta.name || meta.property)}" content="${escapeAttr(meta.content)}" />`,
    );
  }
  for (const link of head.links) {
    parts.push(`<link rel="${escapeAttr(link.rel)}" href="${escapeAttr(link.href)}" />`);
  }
  for (const block of head.jsonLd) {
    parts.push(`<script type="application/ld+json">${escapeJsonLd(block)}</script>`);
  }
  return parts.join('\n    ');
}

const MANAGED = 'data-managed-head';
const STALE_SELECTOR = [
  `head [${MANAGED}]`,
  'head meta[name="description"]',
  'head meta[name="robots"]',
  'head meta[property^="og:"]',
  'head meta[name^="twitter:"]',
  'head link[rel="canonical"]',
  'head script[type="application/ld+json"]',
].join(', ');

/** Applies a head description to the live document during client navigation. */
export function applyHeadToDocument(head) {
  if (typeof document === 'undefined') return;
  document.title = head.title;

  // Clear whatever the prerendered HTML or the previous route left behind, so a
  // stale description or canonical can never survive a navigation.
  document.querySelectorAll(STALE_SELECTOR).forEach((node) => node.remove());

  const frag = document.createDocumentFragment();
  for (const meta of head.metas) {
    const el = document.createElement('meta');
    el.setAttribute(meta.name ? 'name' : 'property', meta.name || meta.property);
    el.setAttribute('content', meta.content);
    el.setAttribute(MANAGED, '');
    frag.appendChild(el);
  }
  for (const link of head.links) {
    const el = document.createElement('link');
    el.setAttribute('rel', link.rel);
    el.setAttribute('href', link.href);
    el.setAttribute(MANAGED, '');
    frag.appendChild(el);
  }
  for (const block of head.jsonLd) {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(block);
    el.setAttribute(MANAGED, '');
    frag.appendChild(el);
  }
  document.head.appendChild(frag);
}

/* ------------------------------------------------------------------ *
 * <Seo> component
 *
 * During the build-time prerender the tree renders inside a collector so
 * each page's head can be written into its static HTML file. In the
 * browser there is no collector and the head is applied to the live
 * document instead.
 * ------------------------------------------------------------------ */

const HeadCollectorContext = createContext(null);

export function HeadCollectorProvider({ collector, children }) {
  return React.createElement(HeadCollectorContext.Provider, { value: collector }, children);
}

export default function Seo(props) {
  const collector = useContext(HeadCollectorContext);
  const head = buildHead(props);

  if (collector) collector.head = head;

  const serialized = JSON.stringify(head);
  useEffect(() => {
    applyHeadToDocument(JSON.parse(serialized));
  }, [serialized]);

  return null;
}
