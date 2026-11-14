export type CaseStudy = {
  slug: string;
  category: string;
  context: string;
  title: string;
  dek: string;
  result: string;
  metric: { value: string; label: string };
  sections: { context: string; problem: string; designed: string; implemented: string; outcome: string; why: string };
  capabilities: string[];
  recurs: string[];
  before: string[];
  after: string[];
};

export const cases: CaseStudy[] = [
  {
    slug: 'ai-led-outbound-growth-engine',
    category: 'Sales & Growth',
    context: 'B2B services',
    title: 'Rewiring outbound with an AI-led growth engine',
    dek: 'A founder-led services firm moved from ad-hoc outreach to a structured, AI-assisted outbound motion.',
    result: 'Three times as many qualified conversations within eight weeks.',
    metric: { value: '3×', label: 'qualified conversations per week' },
    sections: {
      context: 'A growing B2B services firm was generating revenue but had no repeatable way to produce it. Prospecting was founder-led and manual, and the pipeline existed largely in one person’s head.',
      problem: 'Manual, founder-led prospecting and unstructured outreach produced low reply rates, inconsistent qualification, and no repeatable sales motion that could survive the founder’s attention moving elsewhere.',
      designed: 'An ideal customer profile and an account-scoring model, automated data enrichment and list building, and an AI sequencing assistant that prioritized accounts and generated context-aware outreach across channels.',
      implemented: 'The scoring model and enrichment pipeline were built against the firm’s existing CRM rather than replacing it, so the team kept working in the system they already knew while the structure underneath it changed.',
      outcome: 'Qualified conversations per week increased by over three times, founder time spent on manual prospecting fell by more than 60%, and the pipeline became visible enough to make decisions against.',
      why: 'The constraint was never outreach volume. It was that qualification lived in one person’s judgement and could not be delegated. Encoding it into a scoring model is what made the rest of the motion possible.',
    },
    capabilities: ['Growth & Market Enablement', 'Artificial Intelligence & Automation'],
    recurs: ['SaaS', 'Manufacturing', 'Supply chain and logistics', 'Ecommerce'],
    before: ['Founder-led prospecting', 'Qualification in one head', 'Pipeline invisible'],
    after: ['Scored account list', 'AI-assisted sequencing', '60%+ founder time returned'],
  },
  {
    slug: 'founder-operations-cockpit',
    category: 'Founder Operations',
    context: 'Early-stage startup',
    title: 'Giving a founder a single view of operations',
    dek: 'Operations scattered across spreadsheets and chat threads were consolidated into one view of work, risks and next actions.',
    result: 'Clear daily priorities across hiring, delivery and sales.',
    metric: { value: '1 view', label: 'of work, risks and next actions' },
    sections: {
      context: 'A founder was personally running hiring, delivery and business development across several regions, with each stream tracked in a different place.',
      problem: 'Operations ran through scattered sheets and chat threads. Follow-ups were missed, nothing surfaced until it was urgent, and the working day went on firefighting rather than direction.',
      designed: 'We mapped the core operational streams, then built a lightweight operations view aggregating leads, tasks, hiring funnels and documents, with automation to surface stalled deals, ageing candidates and blocked tasks.',
      implemented: 'Built on top of the tools already in use rather than introducing a new platform, so adoption did not depend on the team changing habits mid-quarter.',
      outcome: 'Coordination time fell, daily priorities became visible without being assembled by hand, and the founder was able to delegate execution while keeping sight of the bottlenecks that mattered.',
      why: 'Founder dependency is rarely a discipline problem. It is usually a visibility problem: you cannot delegate what you cannot see the state of.',
    },
    capabilities: ['Business & Operating Systems', 'Technology & Engineering'],
    recurs: ['Supply chain and logistics', 'Healthcare', 'Agritech', 'SaaS'],
    before: ['Sheets and chat threads', 'Missed follow-ups', 'Days spent firefighting'],
    after: ['One operations view', 'Stalls surfaced automatically', 'Execution delegated'],
  },
  {
    slug: 'ai-workflow-notebook-to-production',
    category: 'R&D to Production',
    context: 'Technology',
    title: 'Taking an AI workflow from notebook to production',
    dek: 'A promising AI experiment was hardened into a reliable internal capability with clear contracts and safeguards.',
    result: 'A critical workflow stabilised, and far less time lost to firefighting.',
    metric: { value: 'Stable', label: 'critical workflow, no hard stops' },
    sections: {
      context: 'A small team had built an AI workflow that genuinely worked, but only in the hands of the person who wrote it.',
      problem: 'The workflow lived entirely in notebooks with fragile integrations, no observability, and no path to stabilise it or expose it as a dependable internal service.',
      designed: 'We refactored the prototype into modular services with explicit contracts, added observability and fallback logic, and defined a staged rollout from internal testing through to controlled production.',
      implemented: 'Fallback behaviour was designed first, so that a single model or integration misbehaving degraded the workflow instead of stopping it.',
      outcome: 'Failure incidents and debugging time dropped, and the workflow began supporting real operations without blocking when one dependency failed.',
      why: 'The gap between a working prototype and a dependable system is mostly error handling, contracts and observability. That work is unglamorous, and it is the entire difference.',
    },
    capabilities: ['Artificial Intelligence & Automation', 'Technology & Engineering'],
    recurs: ['Biotechnology and life sciences', 'Financial services', 'IoT and connected devices', 'Agritech'],
    before: ['Notebook-only workflow', 'No observability', 'One person could run it'],
    after: ['Modular services, explicit contracts', 'Fallbacks designed first', 'Staged production rollout'],
  },
  {
    slug: 'decision-heavy-workflow-automation',
    category: 'AI & Automation',
    context: 'Operations',
    title: 'Automating decision-heavy internal workflows',
    dek: 'Manual expert decisions were mapped, codified and selectively automated without losing human control.',
    result: 'Shorter cycle times and less variability on routine decisions.',
    metric: { value: 'Faster', label: 'routine decisions, fewer errors' },
    sections: {
      context: 'Decision-heavy operational processes were concentrated in a small group of experienced people who had become a single point of failure.',
      problem: 'Routine decisions were handled manually by a handful of experts, creating delays, inconsistent outcomes and significant dependency risk.',
      designed: 'We mapped the end-to-end decision tree, codified the rules and their exceptions, and implemented an automation layer with human-in-the-loop checkpoints wherever judgement was genuinely required.',
      implemented: 'The split between automated and human decisions was decided from the exception data, not from ambition. Cases with real judgement content stayed with people.',
      outcome: 'Turnaround time and error rates fell for routine decisions, while traceability and targeted human oversight were retained for the non-routine ones.',
      why: 'Automating a decision process is mostly an exercise in being honest about which decisions are actually judgement and which have simply never been written down.',
    },
    capabilities: ['Artificial Intelligence & Automation', 'Business & Operating Systems'],
    recurs: ['Financial services', 'Healthcare', 'Supply chain and logistics', 'Chemical and process industries'],
    before: ['Experts as single point of failure', 'Inconsistent outcomes', 'Queues behind a few people'],
    after: ['Codified rules and exceptions', 'Human checkpoints where it counts', 'Full traceability'],
  },
  {
    slug: 'live-operations-visibility-layer',
    category: 'AI & Automation',
    context: 'Distributed operations',
    title: 'Building an AI-assisted live operations layer',
    dek: 'Static reports were replaced with a live view of key events, anomalies and next-action cues.',
    result: 'Faster response to issues and shared situational awareness across locations.',
    metric: { value: 'Live', label: 'events, anomalies and next actions' },
    sections: {
      context: 'A team operating across multiple locations was coordinating from delayed reports and informal updates.',
      problem: 'Delayed reporting and anecdotal updates made it difficult to detect issues early or agree on which problems needed attention first.',
      designed: 'We implemented a streaming data layer capturing key operational events, then applied anomaly detection and next-action cues surfaced through a single live view.',
      implemented: 'Event capture was built first and validated against known incidents before any detection logic was layered on, so alerts started from a trusted baseline.',
      outcome: 'Near real-time visibility, faster response to issues, and a shared understanding of operational priorities across locations.',
      why: 'Distributed teams do not usually disagree about priorities. They disagree about facts, because each location is looking at a different and slightly stale picture.',
    },
    capabilities: ['Technology & Engineering', 'Artificial Intelligence & Automation'],
    recurs: ['Supply chain and logistics', 'Manufacturing', 'Electric vehicles and charging', 'Water and utilities'],
    before: ['Delayed static reports', 'Anecdotal updates', 'Each site sees a different picture'],
    after: ['Streaming event layer', 'Validated anomaly detection', 'One live shared view'],
  },
  {
    slug: 'structured-sales-hiring-engine',
    category: 'People & Talent',
    context: 'Sales organization',
    title: 'Designing a structured sales hiring engine',
    dek: 'High-volume, commission-based hiring was treated as a measurable funnel with explicit stages and rubrics.',
    result: 'Higher-quality shortlists with less coordination overhead.',
    metric: { value: 'Better', label: 'shortlists, less coordination' },
    sections: {
      context: 'A founder-led organization was scaling commission-based sales hiring faster than its hiring process could support.',
      problem: 'High drop-off rates, inconsistent candidate quality, and no visibility into where the funnel was leaking.',
      designed: 'We redesigned hiring as a pipeline with explicit stages and evaluation rubrics, then automated candidate communication, reminders and status updates for both candidates and reviewers.',
      implemented: 'Rubrics were written from the profiles of people who had already succeeded in the role, rather than from a generic competency list.',
      outcome: 'Better signal on candidate quality, less back-and-forth coordination, and a repeatable engine for onboarding successive hiring cohorts.',
      why: 'Hiring at volume fails for the same reason sales at volume fails: without explicit stages and criteria, every decision is re-litigated from scratch.',
    },
    capabilities: ['Growth & Market Enablement', 'Business & Operating Systems'],
    recurs: ['SaaS', 'Ecommerce', 'Supply chain and logistics'],
    before: ['High drop-off', 'Inconsistent quality', 'Leaks nobody could see'],
    after: ['Explicit funnel stages', 'Rubrics from real top performers', 'Automated candidate comms'],
  },
];

export const caseBySlug = (s: string) => cases.find((c) => c.slug === s);
