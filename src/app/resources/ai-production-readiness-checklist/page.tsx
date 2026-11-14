import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Checklist } from '@/components/Checklist';
import { CtaBand } from '@/components/ui';

export const metadata: Metadata = {
  title: 'AI production readiness checklist',
  description: 'Forty checks to walk before an AI system goes in front of users: contracts, failure behaviour, evaluation, observability, data, rollout and ownership.',
};

export default function ChecklistPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · 40 checks"
        title="AI production readiness checklist"
        italic={['readiness']}
        lead="Most of the items below are unglamorous and most get scoped last. That is the reason production launches slip. Walk it before the launch date is committed. Any item you cannot answer is scope that has not been costed yet. A “no” is not a blocker on its own; an undiscussed “no” is."
      />
      <section className="wrap pb-20">
        <Checklist />
        <div className="mt-16 max-w-3xl rounded-3xl border border-line bg-white p-8 text-[16px] leading-relaxed text-ink/75">
          If most of this is already in place, the remaining work is probably smaller than it feels. If most of it is not, the gap between the prototype and the launch date is larger than the plan currently says, and it is better to know that now.
          <div className="mt-4 text-sm text-muted">
            Published by Talavishiraaj Groups. Copy it, adapt it, put it in your own repository. No attribution required. The reasoning behind it:{' '}
            <Link href="/insights/why-ai-prototypes-stall-before-production" className="text-signal">why AI prototypes stall before production</Link>.
          </div>
        </div>
      </section>
      <CtaBand title="More gaps than you expected?" body="That is usually the point at which it is worth a conversation. Describe your situation and we will reply with a view." />
    </>
  );
}
