import React from 'react';
import { Link } from 'react-router-dom';

export const meta = {
  title: 'Case studies | Talavishiraaj Groups',
  description:
    'Anonymized client stories from Talavishiraaj Groups, showing how structured engineering, automation, and AI deliver durable change.',
};

const TAGS = [
  'All',
  'AI & Automation',
  'Founder Ops',
  'Sales & Growth',
  'R&D to Production',
  'People & Talent',
];

const CASE_STUDIES = [
  {
    id: 'ai-outbound-b2b-services',
    title: 'Rewiring outbound with an AI-led growth engine',
    industry: 'B2B services',
    theme: 'Sales & Growth',
    tag: 'Sales & Growth',
    impactSummary: '3x more qualified conversations in 8 weeks.',
    teaser:
      'A founder-led services firm moved from ad-hoc outreach to a structured, AI-assisted outbound motion.',
    problem:
      'A growing B2B services firm relied on manual, founder-led prospecting and unstructured outreach, leading to low reply rates, inconsistent qualification, and no repeatable sales motion.',
    approach:
      'Designed an ideal customer profile and account-scoring model, automated data enrichment and list building, and layered an AI sequencing assistant to prioritize accounts and generate context-aware outreach across channels.',
    outcome:
      'Increased qualified conversations per week by over 3x while cutting founder time spent on manual prospecting by more than 60%, and created a transparent pipeline view for better decision making.',
  },
  {
    id: 'founder-ops-cockpit',
    title: 'Giving a founder a single cockpit for operations',
    industry: 'Early-stage startup',
    theme: 'Founder Ops',
    tag: 'Founder Ops',
    impactSummary: 'Clear daily priorities across hiring, delivery, and sales.',
    teaser:
      'Operations scattered across sheets and chats were consolidated into one view of work, risks, and next actions.',
    problem:
      'A founder managing hiring, delivery, and business development across multiple regions ran operations through scattered sheets and chats, leading to missed follow-ups and constant firefighting.',
    approach:
      'Mapped core operational streams, then built a lightweight “ops cockpit” aggregating leads, tasks, hiring funnels, and documents, with automation to surface stalled deals, aging candidates, and blocked tasks.',
    outcome:
      'Reduced coordination time, made daily priorities visible, and enabled the founder to delegate execution while keeping control of key bottlenecks.',
  },
  {
    id: 'ai-rnd-to-production',
    title: 'Taking an AI workflow from notebook to production',
    industry: 'Technology',
    theme: 'R&D to Production',
    tag: 'R&D to Production',
    impactSummary: 'Stabilized a critical workflow and reduced firefighting.',
    teaser:
      'A promising AI experiment was hardened into a reliable internal capability with clear contracts and safeguards.',
    problem:
      'A small team had a promising AI workflow built entirely in notebooks with fragile integrations and no clear path to stabilize it or expose it as a reliable internal service.',
    approach:
      'Refactored the prototype into modular services with clear contracts, added observability and fallback logic, and defined a staged rollout from internal testing to controlled production.',
    outcome:
      'Reduced failure incidents and debugging time while enabling the AI workflow to support real operations without blocking when a single model or integration misbehaved.',
  },
  {
    id: 'decision-heavy-automation',
    title: 'Automating decision-heavy internal workflows',
    industry: 'Operations',
    theme: 'AI & Automation',
    tag: 'AI & Automation',
    impactSummary: 'Shorter cycle times and lower variability.',
    teaser:
      'Manual expert decisions were mapped, codified, and selectively automated without losing human control.',
    problem:
      'Decision-heavy operational processes were handled manually by a small group of experts, creating delays, inconsistent outcomes, and high dependency risk.',
    approach:
      'Mapped the end-to-end decision tree, codified rules and exceptions, and implemented an automation layer with human-in-the-loop checkpoints where judgment was genuinely required.',
    outcome:
      'Reduced turnaround time and error rates for routine decisions while maintaining clear traceability and targeted human oversight for non-routine cases.',
  },
  {
    id: 'realtime-ops-insight',
    title: 'Building an AI-assisted live operations layer',
    industry: 'Distributed operations',
    theme: 'AI & Automation',
    tag: 'AI & Automation',
    impactSummary: 'Faster response to issues and shared situational awareness.',
    teaser:
      'Static reports were replaced by a streaming view of key events, anomalies, and next-best-action cues.',
    problem:
      'A distributed team relied on delayed reports and anecdotal updates, making it hard to detect issues early and align on which problems needed immediate attention.',
    approach:
      'Implemented a streaming data layer to capture key operational events, then applied AI-based anomaly detection and “next best action” cues surfaced through a single live dashboard.',
    outcome:
      'Enabled near real-time visibility, faster response to issues, and a common understanding of operational priorities across locations.',
  },
  {
    id: 'sdr-bde-hiring-pipeline',
    title: 'Designing a structured SDR/BDE hiring engine',
    industry: 'Sales organization',
    theme: 'People & Talent',
    tag: 'People & Talent',
    impactSummary: 'Higher-quality shortlists with less coordination overhead.',
    teaser:
      'High-volume, commission-based hiring was treated as a measurable funnel with clear stages and rubrics.',
    problem:
      'A founder-led organisation scaling commission-based SDR/BDE hiring faced high drop-offs, inconsistent candidate quality, and no visibility into where the funnel was leaking.',
    approach:
      'Redesigned hiring as a pipeline with explicit stages and evaluation rubrics, then automated candidate communication, reminders, and status updates for both candidates and reviewers.',
    outcome:
      'Improved signal on candidate quality, reduced back-and-forth coordination time, and established a repeatable engine for onboarding new SDR and BDE cohorts.',
  },
];

export default function CaseStudiesPage() {
  const [activeTag, setActiveTag] = React.useState('All');
  const [selectedCaseId, setSelectedCaseId] = React.useState(null);

  const filteredCases =
    activeTag === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.tag === activeTag);

  const selectedCase = selectedCaseId
    ? CASE_STUDIES.find((c) => c.id === selectedCaseId)
    : null;

  const showList = !selectedCase;

  return (
    <main className="bg-white text-primary min-h-screen">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-10 md:pt-20 md:pb-12">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-3">
          Case studies
        </p>
        <h1 className="text-3xl md:text-[40px] leading-tight font-semibold text-black mb-4">
          How we help leaders rewire complex systems
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl">
          A curated selection of anonymized client stories where Talavishiraaj
          Groups has applied engineering, automation, and AI to move from
          one-off fixes to durable, system-level change.
        </p>
      </section>

      {/* LIST VIEW */}
      {showList && (
        <>
          {/* FILTER BAR */}
          <section className="border-y border-gray-200 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 flex flex-wrap gap-2">
              {TAGS.map((tag) => {
                const isActive = activeTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setActiveTag(tag)}
                    className={[
                      'px-3.5 py-1.5 rounded-full text-xs md:text-sm border transition-colors',
                      isActive
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100',
                    ].join(' ')}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </section>

          {/* GRID OF CARDS */}
          <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10">
              {filteredCases.map((cs) => (
                <article
                  key={cs.id}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-150 flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelectedCaseId(cs.id)}
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-2">
                      {cs.theme} • {cs.industry}
                    </p>
                    <h2 className="text-xl md:text-2xl font-semibold text-black mb-2 group-hover:underline decoration-gray-400">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-gray-700 mb-4">{cs.teaser}</p>
                    <p className="text-xs font-medium text-gray-900 mb-4">
                      Impact:{' '}
                      <span className="font-normal">
                        {cs.impactSummary}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-gray-100 text-gray-700">
                      {cs.tag}
                    </span>
                    <span className="inline-flex items-center text-[11px] font-semibold tracking-[0.16em] uppercase text-gray-700 group-hover:text-black">
                      View story
                      <span className="ml-1.5 text-xs">↗</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 border-t border-gray-200 pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-black">
                  Working through a similar problem?
                </h3>
                <p className="text-sm text-gray-700 mt-2 max-w-xl">
                  If you are scaling founder operations, hardening an AI
                  prototype, or automating decision-heavy work, we can help
                  design an execution path that respects your current
                  constraints and ambition.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg text-sm font-medium"
              >
                Contact us
              </Link>
            </div>
          </section>
        </>
      )}

      {/* DETAIL VIEW */}
      {!showList && selectedCase && (
        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 pt-10 pb-16 md:pt-12 md:pb-20">
            <button
              type="button"
              onClick={() => setSelectedCaseId(null)}
              className="text-xs text-gray-600 hover:text-black underline mb-6"
            >
              ← Back to all case studies
            </button>

            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-500 mb-3">
              Case study
            </p>
            <h2 className="text-3xl md:text-[34px] leading-tight font-semibold text-black mb-3">
              {selectedCase.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {selectedCase.theme} • {selectedCase.industry}
            </p>
            <p className="text-base text-gray-700 max-w-2xl mb-8">
              {selectedCase.teaser}
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
                  Context and impact
                </h3>
                <p className="text-sm text-gray-800">
                  {selectedCase.impactSummary}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
                  Problem
                </h3>
                <p className="text-sm text-gray-800">
                  {selectedCase.problem}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
                  Approach
                </h3>
                <p className="text-sm text-gray-800">
                  {selectedCase.approach}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-2">
                  Outcome
                </h3>
                <p className="text-sm text-gray-800">
                  {selectedCase.outcome}
                </p>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedCaseId(null)}
                className="text-sm text-gray-700 hover:text-black underline"
              >
                Back to case studies
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-5 py-2.5 rounded-lg text-xs font-medium"
              >
                Discuss a similar challenge
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
