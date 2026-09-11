import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo, { breadcrumbSchema, itemListSchema, webPageSchema } from '../seo';
import { capabilityById, capabilityPath } from '../data/servicesData';
import { track } from '../components/analytics';

/**
 * Anonymized engagement records.
 *
 * Content is carried over from the previously published case-study set. No
 * client names, logos, testimonials, dates or outcome figures have been added:
 * where a figure appears below, it was already part of the published record.
 */
export const CASE_STUDY_DISCLOSURE =
  'These engagements are published in anonymized form. Client names, identifying details and commercially sensitive figures are withheld at our clients’ request.';

export const caseStudies = [
  {
    slug: 'ai-led-outbound-growth-engine',
    title: 'Rewiring outbound with an AI-led growth engine',
    industry: 'B2B services',
    theme: 'Sales & Growth',
    impactSummary: 'Three times as many qualified conversations within eight weeks.',
    teaser:
      'A founder-led services firm moved from ad-hoc outreach to a structured, AI-assisted outbound motion.',
    context:
      'A growing B2B services firm was generating revenue but had no repeatable way to produce it. Prospecting was founder-led and manual, and the pipeline existed largely in one person’s head.',
    problem:
      'Manual, founder-led prospecting and unstructured outreach produced low reply rates, inconsistent qualification, and no repeatable sales motion that could survive the founder’s attention moving elsewhere.',
    approach:
      'Designed an ideal customer profile and an account-scoring model, automated data enrichment and list building, and layered an AI sequencing assistant that prioritized accounts and generated context-aware outreach across channels.',
    implementation:
      'The scoring model and enrichment pipeline were built against the firm’s existing CRM rather than replacing it, so the team kept working in the system they already knew while the structure underneath it changed.',
    outcome:
      'Qualified conversations per week increased by over three times, founder time spent on manual prospecting fell by more than 60%, and the pipeline became visible enough to make decisions against.',
    whyItMattered:
      'The constraint was never outreach volume. It was that qualification lived in one person’s judgement and could not be delegated. Encoding it into a scoring model is what made the rest of the motion possible.',
    capabilities: ['growth', 'ai'],
  },
  {
    slug: 'founder-operations-cockpit',
    title: 'Giving a founder a single view of operations',
    industry: 'Early-stage startup',
    theme: 'Founder Operations',
    impactSummary: 'Clear daily priorities across hiring, delivery and sales.',
    teaser:
      'Operations scattered across spreadsheets and chat threads were consolidated into one view of work, risks and next actions.',
    context:
      'A founder was personally running hiring, delivery and business development across several regions, with each stream tracked in a different place.',
    problem:
      'Operations ran through scattered sheets and chat threads. Follow-ups were missed, nothing surfaced until it was urgent, and the working day went on firefighting rather than direction.',
    approach:
      'Mapped the core operational streams, then built a lightweight operations view aggregating leads, tasks, hiring funnels and documents, with automation to surface stalled deals, ageing candidates and blocked tasks.',
    implementation:
      'Built on top of the tools already in use rather than introducing a new platform, so adoption did not depend on the team changing habits mid-quarter.',
    outcome:
      'Coordination time fell, daily priorities became visible without being assembled by hand, and the founder was able to delegate execution while keeping sight of the bottlenecks that mattered.',
    whyItMattered:
      'Founder dependency is rarely a discipline problem. It is usually a visibility problem: you cannot delegate what you cannot see the state of.',
    capabilities: ['strategy', 'tech'],
  },
  {
    slug: 'ai-workflow-notebook-to-production',
    title: 'Taking an AI workflow from notebook to production',
    industry: 'Technology',
    theme: 'R&D to Production',
    impactSummary: 'A critical workflow stabilised, and far less time lost to firefighting.',
    teaser:
      'A promising AI experiment was hardened into a reliable internal capability with clear contracts and safeguards.',
    context:
      'A small team had built an AI workflow that genuinely worked, but only in the hands of the person who wrote it.',
    problem:
      'The workflow lived entirely in notebooks with fragile integrations, no observability, and no path to stabilise it or expose it as a dependable internal service.',
    approach:
      'Refactored the prototype into modular services with explicit contracts, added observability and fallback logic, and defined a staged rollout from internal testing through to controlled production.',
    implementation:
      'Fallback behavior was designed first, so that a single model or integration misbehaving degraded the workflow instead of stopping it.',
    outcome:
      'Failure incidents and debugging time dropped, and the workflow began supporting real operations without blocking when one dependency failed.',
    whyItMattered:
      'The gap between a working prototype and a dependable system is mostly error handling, contracts and observability. That work is unglamorous, and it is the entire difference.',
    capabilities: ['ai', 'tech'],
  },
  {
    slug: 'decision-heavy-workflow-automation',
    title: 'Automating decision-heavy internal workflows',
    industry: 'Operations',
    theme: 'AI & Automation',
    impactSummary: 'Shorter cycle times and less variability on routine decisions.',
    teaser:
      'Manual expert decisions were mapped, codified and selectively automated without losing human control.',
    context:
      'Decision-heavy operational processes were concentrated in a small group of experienced people who had become a single point of failure.',
    problem:
      'Routine decisions were handled manually by a handful of experts, creating delays, inconsistent outcomes and significant dependency risk.',
    approach:
      'Mapped the end-to-end decision tree, codified the rules and their exceptions, and implemented an automation layer with human-in-the-loop checkpoints wherever judgement was genuinely required.',
    implementation:
      'The split between automated and human decisions was decided from the exception data, not from ambition. Cases with real judgement content stayed with people.',
    outcome:
      'Turnaround time and error rates fell for routine decisions, while traceability and targeted human oversight were retained for the non-routine ones.',
    whyItMattered:
      'Automating a decision process is mostly an exercise in being honest about which decisions are actually judgement and which have simply never been written down.',
    capabilities: ['ai', 'strategy'],
  },
  {
    slug: 'live-operations-visibility-layer',
    title: 'Building an AI-assisted live operations layer',
    industry: 'Distributed operations',
    theme: 'AI & Automation',
    impactSummary: 'Faster response to issues and shared situational awareness across locations.',
    teaser:
      'Static reports were replaced with a live view of key events, anomalies and next-action cues.',
    context:
      'A team operating across multiple locations was coordinating from delayed reports and informal updates.',
    problem:
      'Delayed reporting and anecdotal updates made it difficult to detect issues early or agree on which problems needed attention first.',
    approach:
      'Implemented a streaming data layer capturing key operational events, then applied anomaly detection and next-action cues surfaced through a single live view.',
    implementation:
      'Event capture was built first and validated against known incidents before any detection logic was layered on, so alerts started from a trusted baseline.',
    outcome:
      'Near real-time visibility, faster response to issues, and a shared understanding of operational priorities across locations.',
    whyItMattered:
      'Distributed teams do not usually disagree about priorities. They disagree about facts, because each location is looking at a different and slightly stale picture.',
    capabilities: ['tech', 'ai'],
  },
  {
    slug: 'structured-sales-hiring-engine',
    title: 'Designing a structured sales hiring engine',
    industry: 'Sales organization',
    theme: 'People & Talent',
    impactSummary: 'Higher-quality shortlists with less coordination overhead.',
    teaser:
      'High-volume, commission-based hiring was treated as a measurable funnel with explicit stages and rubrics.',
    context:
      'A founder-led organization was scaling commission-based sales hiring faster than its hiring process could support.',
    problem:
      'High drop-off rates, inconsistent candidate quality, and no visibility into where the funnel was leaking.',
    approach:
      'Redesigned hiring as a pipeline with explicit stages and evaluation rubrics, then automated candidate communication, reminders and status updates for both candidates and reviewers.',
    implementation:
      'Rubrics were written from the profiles of people who had already succeeded in the role, rather than from a generic competency list.',
    outcome:
      'Better signal on candidate quality, less back-and-forth coordination, and a repeatable engine for onboarding successive hiring cohorts.',
    whyItMattered:
      'Hiring at volume fails for the same reason sales at volume fails: without explicit stages and criteria, every decision is re-litigated from scratch.',
    capabilities: ['growth', 'strategy'],
  },
];

export const caseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);

const THEMES = ['All', ...Array.from(new Set(caseStudies.map((c) => c.theme)))];

const INDEX_TITLE = 'Case Studies: Anonymized Client Engagements | Talavishiraaj Groups';
const INDEX_DESCRIPTION =
  'Anonymized accounts of real engagements: what the problem was, what we built, how it was implemented and what changed. Covering operations, AI and automation, growth systems and moving R&D into production.';

export default function CaseStudiesPage() {
  const [activeTheme, setActiveTheme] = React.useState('All');

  const visible =
    activeTheme === 'All' ? caseStudies : caseStudies.filter((c) => c.theme === activeTheme);

  return (
    <>
      <Seo
        title={INDEX_TITLE}
        description={INDEX_DESCRIPTION}
        path="/case-studies"
        jsonLd={[
          webPageSchema({
            path: '/case-studies',
            title: INDEX_TITLE,
            description: INDEX_DESCRIPTION,
            type: 'CollectionPage',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case studies', path: '/case-studies' },
          ]),
          itemListSchema({
            name: 'Talavishiraaj Groups case studies',
            items: caseStudies.map((c) => ({ name: c.title, path: `/case-studies/${c.slug}` })),
          }),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Case studies</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5 max-w-3xl">
          What the work looks like when it is finished
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-4">
          Each of these engagements started with a problem someone could feel but could not name
          precisely. Each entry sets out the situation, what was actually built, and what changed as a
          result.
        </p>
        <p className="text-sm text-gray-500 max-w-3xl">{CASE_STUDY_DISCLOSURE}</p>
      </section>

      <section className="border-y border-border bg-muted" aria-label="Filter case studies by theme">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-wrap gap-2">
          {THEMES.map((theme) => {
            const isActive = activeTheme === theme;
            return (
              <button
                key={theme}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTheme(theme)}
                className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                }`}
              >
                {theme}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((study) => (
            <article
              key={study.slug}
              className="group border border-border rounded-2xl p-6 md:p-8 bg-white hover:border-gray-400 transition-colors flex flex-col"
            >
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                {study.theme} · {study.industry}
              </p>
              <h2 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                <Link
                  to={`/case-studies/${study.slug}`}
                  onClick={() => track('case_study_view', { slug: study.slug, location: 'index' })}
                  className="group-hover:underline underline-offset-4 decoration-gray-400"
                >
                  {study.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed flex-1">{study.teaser}</p>
              <p className="text-sm text-gray-900 mb-5">
                <span className="font-medium">Result: </span>
                {study.impactSummary}
              </p>
              <Link
                to={`/case-studies/${study.slug}`}
                className="text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                Read the full engagement
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold mb-2">Working through something similar?</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              If you are scaling founder-led operations, hardening an AI prototype, or automating
              decision-heavy work, describe the situation and we will tell you honestly whether we are
              the right people for it.
            </p>
          </div>
          <Link
            to="/contact"
            onClick={() => track('cta_click', { location: 'case_studies_index', target: 'contact' })}
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors whitespace-nowrap"
          >
            Describe your situation
          </Link>
        </div>
      </section>
    </>
  );
}

/** Individually addressable, indexable page for a single engagement. */
export function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = caseStudyBySlug(slug);

  if (!study) {
    return (
      <>
        <Seo
          title="Case study not found | Talavishiraaj Groups"
          description="This case study could not be found. Browse all published engagements instead."
          path={`/case-studies/${slug || ''}`}
          noindex
        />
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-24 text-center">
          <h1 className="text-3xl font-semibold mb-4">We could not find that case study</h1>
          <p className="text-gray-600 mb-8">It may have been renamed or removed.</p>
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
          >
            View all case studies
          </Link>
        </section>
      </>
    );
  }

  const path = `/case-studies/${study.slug}`;
  const title = `${study.title} | Talavishiraaj Groups Case Study`;
  const description = `${study.teaser} ${study.impactSummary}`;

  const sections = [
    { heading: 'Context', body: study.context },
    { heading: 'The problem', body: study.problem },
    { heading: 'What we designed', body: study.approach },
    { heading: 'How it was implemented', body: study.implementation },
    { heading: 'Result', body: study.outcome },
    { heading: 'Why the approach mattered', body: study.whyItMattered },
  ];

  const related = study.capabilities.map(capabilityById).filter(Boolean);

  return (
    <>
      <Seo
        title={title}
        description={description}
        path={path}
        type="article"
        jsonLd={[
          webPageSchema({ path, title: study.title, description }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case studies', path: '/case-studies' },
            { name: study.title, path },
          ]),
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link
            to="/case-studies"
            className="text-gray-600 hover:text-black underline decoration-gray-300 underline-offset-4"
          >
            Case studies
          </Link>
        </nav>

        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-4">
          {study.theme} · {study.industry}
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5">
          {study.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">{study.teaser}</p>

        <p className="border-l-2 border-black pl-5 text-base text-gray-900 mb-4">
          <span className="font-medium">Result: </span>
          {study.impactSummary}
        </p>
        <p className="text-xs text-gray-500 mb-12">{CASE_STUDY_DISCLOSURE}</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-3">
                {section.heading}
              </h2>
              <p className="text-base text-gray-800 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        {related.length > 0 && (
          <section className="mt-14 pt-10 border-t border-border">
            <h2 className="text-sm font-semibold tracking-[0.16em] uppercase text-gray-500 mb-4">
              Capabilities involved
            </h2>
            <ul className="flex flex-wrap gap-3 list-none">
              {related.map((capability) => (
                <li key={capability.id}>
                  <Link
                    to={capabilityPath(capability)}
                    className="inline-flex rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-gray-600 hover:text-black transition-colors"
                  >
                    {capability.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-sm text-gray-700 max-w-md">
            If this resembles the situation you are in, we can set out how we would approach it and
            what the work would involve.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              onClick={() => track('cta_click', { location: 'case_study_detail', target: 'contact' })}
              className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-6 py-3 text-sm font-medium hover:bg-graphite transition-colors"
            >
              Discuss a similar problem
            </Link>
            <Link
              to="/services"
              onClick={() => track('cta_click', { location: 'case_study_detail', target: 'services' })}
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              View our capabilities
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
