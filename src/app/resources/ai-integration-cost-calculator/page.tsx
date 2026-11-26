import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { IntegrationCalculator } from '@/components/IntegrationCalculator';
import { JsonLd, breadcrumbLd } from '@/lib/schema';
import { withLegacySeo } from '@/lib/seo';

const PATH = '/resources/ai-integration-cost-calculator';
const DESCRIPTION =
  'Free AI integration cost calculator: published build ranges by company size, the share that goes on integration, and the three year total, with a fixed-scope estimate on request.';

export const metadata: Metadata = withLegacySeo(PATH, {
  title: 'AI integration cost calculator',
  description: DESCRIPTION,
});

const faq = [
  {
    q: 'How much does AI integration cost?',
    a: 'Published guides put a first AI integration at $5,000 to $20,000 for a small business, $100,000 to $250,000 for a mid-market company and $500,000 to $1,000,000 for an enterprise (DesignRush, March 2026). Clutch reports most AI projects at $10,000 to $49,999.',
  },
  {
    q: 'Why is the three year cost so much higher than the build?',
    a: 'Running costs, monitoring, retraining and upkeep continue after launch. Over three years they commonly take the total to two or three times the build price, so ask every vendor for the three year number.',
  },
  {
    q: 'Is this your price?',
    a: 'No. These are published market ranges. Send your result through the form and we reply within one business day with a fixed-scope estimate for your project, or tell you if a cheaper tool would do.',
  },
];

export default function IntegrationCalculatorPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'AI integration cost calculator',
            url: `https://www.talavishiraajgroups.com${PATH}`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description: DESCRIPTION,
            publisher: { '@id': 'https://www.talavishiraajgroups.com/#org' },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name: 'AI integration cost calculator', path: PATH },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Resources · Free calculator"
        title="AI integration cost calculator"
        lead="Answer three questions to see what published market figures say a first AI integration costs to build, how much of that is integration work, and what it costs over three years. No email needed to see the result."
      />
      <section className="wrap pb-16">
        <IntegrationCalculator />
      </section>
      <section className="wrap pb-24">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-medium tracking-tight">Questions people ask</h2>
          {faq.map((f) => (
            <div key={f.q} className="border-t border-line py-5">
              <h3 className="text-lg font-medium tracking-tight">{f.q}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink/75">{f.a}</p>
            </div>
          ))}
          <p className="mt-6 text-sm text-muted">
            Related: <Link href="/what-it-costs" className="text-signal">what software costs</Link>,{' '}
            <Link href="/build-vs-buy" className="text-signal">build or buy</Link> and the{' '}
            <Link href="/resources/ai-production-readiness-checklist" className="text-signal">AI production readiness checklist</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
