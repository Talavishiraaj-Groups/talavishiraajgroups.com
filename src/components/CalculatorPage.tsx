import type { ReactNode } from 'react';
import Link from 'next/link';
import { PageHero } from './PageHero';
import { JsonLd, breadcrumbLd } from '@/lib/schema';

const BASE = 'https://www.talavishiraajgroups.com';

/** Shared layout for the free calculators under /resources: schema, hero, the tool, FAQ and related links. */
export function CalculatorPage({
  path,
  name,
  description,
  lead,
  faq,
  related,
  children,
}: {
  path: string;
  name: string;
  description: string;
  lead: string;
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name,
            url: `${BASE}${path}`,
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            description,
            publisher: { '@id': `${BASE}/#org` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          },
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name, path },
          ]),
        ]}
      />
      <PageHero eyebrow="Resources · Free calculator" title={name} lead={lead} />
      <section className="wrap pb-16">{children}</section>
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
            Related:{' '}
            {related.map((r, i) => (
              <span key={r.href}>
                {i > 0 && (i === related.length - 1 ? ' and ' : ', ')}
                <Link href={r.href} className="text-signal">
                  {r.label}
                </Link>
              </span>
            ))}
            .
          </p>
        </div>
      </section>
    </>
  );
}
