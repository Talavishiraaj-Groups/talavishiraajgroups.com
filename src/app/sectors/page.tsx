import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SectorMatrix } from '@/components/sectors';
import { CtaBand } from '@/components/ui';
import { capabilities } from '@/content/capabilities';
import { sectors } from '@/content';

export const metadata: Metadata = {
  title: 'Sectors',
  description: 'Nineteen sectors where the same shapes of problem recur: systems that disagree, data nobody trusts, and decisions waiting on a technical answer.',
};

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="The problem shapes the approach, not the industry"
        italic={['problem']}
        lead="What decides whether we are useful is the shape of the problem, not the industry it sits in: regulation, tolerance for downtime, how much of the data is trustworthy, and who has to sign off on the answer. These are the sectors where we see those shapes most often."
      />
      <section className="wrap pb-24">
        <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {capabilities.map((c) => (
            <span key={c.slug} className="flex items-center gap-2 text-muted">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.tint }} />
              <span className="text-xs">{c.n}</span> {c.name}
            </span>
          ))}
        </div>
        <SectorMatrix sectors={sectors} />
      </section>
      <CtaBand title="Do not see your sector?" body="The list is not a boundary. Describe the situation and we will tell you what the work would involve, what it would cost, and whether it is worth doing at all." />
    </>
  );
}
