import type { Metadata } from 'next';
import legacy from '@/content/generated/seo-legacy.json';
import descriptions from '@/content/seo-descriptions.json';

/**
 * One place that sets every page's search and social metadata.
 *
 * Titles: from the previous site's live pages, tuned to what buyers type
 * ("Logistics Software Development Company"), so each URL keeps the title it
 * already ranks with. Pages the old site did not have keep their own.
 *
 * Descriptions: content/seo-descriptions.json, 120 to 155 characters each.
 *
 * Open Graph and Twitter: Next.js replaces (does not merge) a parent's openGraph
 * when a page sets its own, so every page gets the complete set here: type,
 * site name, locale, URL, title, description and image.
 */
const BASE = 'https://www.talavishiraajgroups.com';
const SITE = 'Talavishiraaj Groups';
const DEFAULT_IMAGE = { url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: SITE };

const titles = legacy as Record<string, { title: string | null; description: string | null }>;
const desc = descriptions as Record<string, string>;

const plainTitle = (t: Metadata['title']) => (typeof t === 'string' ? t : t && typeof t === 'object' && 'absolute' in t ? String(t.absolute) : undefined);

export function withLegacySeo(path: string, meta: Metadata): Metadata {
  const old = titles[path];
  const description = desc[path] ?? old?.description ?? (typeof meta.description === 'string' ? meta.description : undefined);
  const titleText = old?.title ?? plainTitle(meta.title);
  // Page-relative titles get the site template; build the full text for social cards.
  const socialTitle = old?.title ?? (typeof meta.title === 'string' ? `${meta.title} | ${SITE}` : titleText) ?? SITE;
  const og = (meta.openGraph ?? {}) as Record<string, unknown>;
  const hasOwnImage = 'images' in og;
  return {
    ...meta,
    ...(old?.title ? { title: { absolute: old.title } } : {}),
    description,
    alternates: { canonical: path, ...(meta.alternates ?? {}) },
    openGraph: {
      type: 'website',
      siteName: SITE,
      locale: 'en_US',
      url: `${BASE}${path}`,
      ...(hasOwnImage ? {} : { images: [DEFAULT_IMAGE] }),
      ...og,
      title: socialTitle,
      description,
    } as Metadata['openGraph'],
    twitter: {
      card: 'summary_large_image',
      ...(hasOwnImage ? {} : { images: [DEFAULT_IMAGE.url] }),
      ...(meta.twitter ?? {}),
      title: socialTitle,
      description,
    } as Metadata['twitter'],
  };
}
