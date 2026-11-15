import type { Metadata } from 'next';
import legacy from '@/content/generated/seo-legacy.json';

/**
 * Search titles and descriptions from the previous site, taken from its live pages.
 * They were tuned to what buyers actually type ("Logistics Software Development
 * Company", "Custom Software Development Cost"), so every URL keeps the exact title
 * and description it already ranks with. Visible page headings are separate and
 * can stay editorial. New pages (blog, careers) have no entry and keep their own.
 */
const table = legacy as Record<string, { title: string | null; description: string | null }>;

export function withLegacySeo(path: string, meta: Metadata): Metadata {
  const old = table[path];
  if (!old?.title) return meta;
  const description = old.description ?? (typeof meta.description === 'string' ? meta.description : undefined);
  return {
    ...meta,
    title: { absolute: old.title },
    description,
    openGraph: { ...(meta.openGraph ?? {}), title: old.title, description },
    twitter: { ...(meta.twitter ?? {}), title: old.title, description },
  };
}
