import type { Metadata } from 'next';
import legacy from '@/content/generated/seo-legacy.json';
import descriptions from '@/content/seo-descriptions.json';

/**
 * Search titles from the previous site, taken from its live pages. They were tuned
 * to what buyers actually type ("Logistics Software Development Company", "Custom
 * Software Development Cost"), so every URL keeps the title it already ranks with.
 *
 * Descriptions come from content/seo-descriptions.json: rewritten from the old ones
 * to 120 to 155 characters so search results show them in full. Visible page
 * headings are separate and can stay editorial.
 */
const titles = legacy as Record<string, { title: string | null; description: string | null }>;
const desc = descriptions as Record<string, string>;

export function withLegacySeo(path: string, meta: Metadata): Metadata {
  const old = titles[path];
  const description = desc[path] ?? old?.description ?? (typeof meta.description === 'string' ? meta.description : undefined);
  const title = old?.title ?? undefined;
  return {
    ...meta,
    ...(title ? { title: { absolute: title } } : {}),
    description,
    openGraph: { ...(meta.openGraph ?? {}), ...(title ? { title } : {}), description },
    twitter: { ...(meta.twitter ?? {}), ...(title ? { title } : {}), description },
  };
}
