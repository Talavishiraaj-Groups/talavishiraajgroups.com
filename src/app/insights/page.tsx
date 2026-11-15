import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ArticlesArt } from '@/components/illustrations';
import { InsightGrid } from '@/components/insights';
import { CtaBand } from '@/components/ui';
import { insights } from '@/content';
import { BASE, JsonLd, articleLd, breadcrumbLd } from '@/lib/schema';
import { withLegacySeo } from '@/lib/seo';

export const metadata: Metadata = withLegacySeo('/insights', {
  title: 'Insights',
  description: 'Answers to the questions that come up before a project starts, written from work we have actually done.',
});

export default function InsightsPage() {
  // The index is a collection of articles: list each one so crawlers see the set, not one long page.
  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Insights',
    description: 'Answers to the questions that come up before a project starts, written from work we have actually done.',
    url: `${BASE}/insights`,
    publisher: { '@id': `${BASE}/#org` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: insights.map((i, n) => ({
        '@type': 'ListItem',
        position: n + 1,
        item: articleLd({ path: `/insights/${i.slug}`, headline: i.title, description: i.summary.slice(0, 300), datePublished: i.published, section: i.category }),
      })),
    },
  };
  return (
    <>
      <JsonLd data={[collection, breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }])]} />
      <PageHero
        aside={<div className="fade-up" style={{ animationDelay: '0.5s' }}><ArticlesArt /></div>}
        eyebrow="Insights"
        title="Answers to the questions that come up before a project starts"
        italic={['before']}
        lead={
          <>
            Written from work we have actually done rather than from general practice. Each piece answers one question properly, including the cases where the honest answer is that the work is not worth doing. For material you can work directly from, see our{' '}
            <Link href="/resources" className="text-signal underline-offset-4 hover:underline">reference resources</Link>.
          </>
        }
      />
      <section className="wrap pb-24">
        <InsightGrid items={insights} />
      </section>
      <CtaBand
        title="Talk to us about it"
        body="Book a call if you would rather talk it through, or send a few lines and we will reply. Either is fine, and neither commits you to anything."
        note={<>Weighing a build against buying something that nearly fits? Work it through with the <Link href="/build-vs-buy" className="underline underline-offset-4">build vs buy vs partner framework</Link>.</>}
      />
    </>
  );
}
