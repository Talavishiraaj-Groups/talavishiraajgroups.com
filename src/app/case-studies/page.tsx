import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { OutcomeArt } from '@/components/illustrations';
import { CaseIndex } from '@/components/cases';
import { Reveal } from '@/components/motion';
import { CtaBand, SectionHead } from '@/components/ui';
import { sectors } from '@/content';

export const metadata: Metadata = {
  title: 'Case studies',
  description: 'Six engagements across AI and automation, operations, growth systems and moving research into production, each set out in full.',
};

const principles = [
  { t: 'No logos, and no numbers we cannot stand behind', d: 'Clients in this category rarely permit attribution, so these are anonymized and the commercially sensitive figures are withheld. Where a result appears it was part of the record the client already approved.' },
  { t: 'Each one names the constraint, not just the output', d: 'A list of what was delivered tells you nothing about whether it would work for you. Every entry closes by setting out why the approach mattered.' },
  { t: 'The implementation choice is published', d: 'Building against the CRM already in use, designing fallback behaviour before the happy path, validating event capture against known incidents before adding detection. That is the part normally left out.' },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        aside={<div className="fade-up" style={{ animationDelay: '0.5s' }}><OutcomeArt /></div>}
        eyebrow="Case studies"
        title="What the work looks like when it is finished"
        italic={['finished']}
        lead="Six engagements across AI and automation, operations, growth systems and moving research into production. Each one sets out the situation, the problem, what was actually built, how it was implemented and what changed. Client names and commercially sensitive figures are withheld at our clients’ request."
      />
      <section className="wrap pb-24">
        <CaseIndex />
      </section>

      <section className="border-y border-line bg-white py-24 md:py-32">
        <div className="wrap">
          <SectionHead eyebrow="How to read these" title="Most case study pages are a logo wall. These are written to be checked." />
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.1} className="border-t-2 border-signal pt-6">
                <div className="text-xs text-muted">0{i + 1}</div>
                <h3 className="mt-4 text-xl font-medium tracking-tight">{p.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHead
          eyebrow="Sectors"
          title="Six published engagements. Rather more sectors than that."
          lead="The work itself spans a wider range, and the problems below are the ones that recur. If yours is here in different words, that is usually a good sign."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <Link href={`/sectors/${s.slug}`} className="group block h-full rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-signal/40 hover:shadow-lg">
                <div className="font-medium tracking-tight group-hover:text-signal">{s.name}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.problem}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Working through something similar?"
        body="If you are scaling founder-led operations, hardening an AI prototype, or automating decision-heavy work, describe the situation and we will tell you honestly whether we are the right people for it."
      />
    </>
  );
}
