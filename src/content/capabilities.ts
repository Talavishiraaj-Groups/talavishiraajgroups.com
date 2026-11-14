export type Capability = {
  slug: string;
  n: string;
  name: string;
  short: string;
  title: string;
  summary: string;
  intro: string;
  signals: string[];
  when: string;
  whatWeDo: string[];
  approach: { title: string; body: string }[];
  outcomes: string[];
  related: string[];
  faqs: { q: string; a: string }[];
  reading: string[];
  visual: 'stack' | 'neural' | 'blueprint' | 'flow' | 'funnel' | 'gantt';
  tint: string;
};

export const capabilities: Capability[] = [
  {
    slug: 'technology-and-engineering',
    n: '01',
    name: 'Technology & Engineering',
    short: 'Software, data and systems',
    title: 'Software, data and systems engineering',
    summary:
      'We build and integrate the production systems a business runs on: internal platforms, customer facing applications, integrations, and the data layer underneath them.',
    intro:
      'Most organizations do not have a software problem in the abstract. They have a specific system that was built for an earlier stage of the business and now costs more to work around than it would to rebuild. We take that work on end to end, from architecture through to something running in production with the team trained on it.',
    signals: [
      'Core data lives in spreadsheets and is re-entered between tools',
      'Systems do not talk to each other, so reporting is assembled by hand',
      'An internal tool works but will not survive the next stage of load or headcount',
      'A platform was inherited or outsourced and nobody understands it well enough to change it safely',
    ],
    when: 'Consider this when the problem is no longer a process problem. The workflow is understood, and what is missing is the system that carries it.',
    whatWeDo: [
      'Web, mobile and internal platform engineering',
      'CRM, ERP and business system implementation and configuration',
      'API design and integration between existing systems',
      'Data pipelines, warehousing and reporting infrastructure',
      'Architecture review and modernization of systems that have outgrown their design',
      'Security, access control and environment hardening',
    ],
    approach: [
      { title: 'Understand the system as it actually runs', body: 'Before proposing an architecture we map what exists, where the data really lives, and which behaviour people depend on. Rebuilds fail more often from unrecorded dependencies than from technical difficulty.' },
      { title: 'Build against the existing environment', body: 'Where a system can be improved in place, we do that rather than argue for a replacement. Where a rebuild is genuinely warranted, we stage it so the business keeps operating throughout.' },
      { title: 'Hand it over properly', body: 'Documentation, runbooks and training are part of the engagement. The measure of the work is that your team can change the system after we leave.' },
    ],
    outcomes: [
      'Working systems in production, with documentation and handover',
      'Integrations that remove manual re-entry between tools',
      'A data layer that reporting and automation can be built on',
      'A team that can maintain and extend what was built',
    ],
    related: ['founder-operations-cockpit', 'ai-workflow-notebook-to-production', 'live-operations-visibility-layer'],
    faqs: [
      { q: 'What kinds of software do you build?', a: 'Internal platforms and operational tooling, customer facing web and mobile applications, integrations between existing business systems, and the data infrastructure that reporting and automation depend on. We also take on modernization of systems that have outgrown their original design.' },
      { q: 'Do you work with our existing systems or replace them?', a: 'We work with them wherever that is the better answer. Replacing a system carries migration risk, retraining cost and a period of reduced capability, so it has to be justified. Where a rebuild genuinely is warranted, we stage it so the business keeps running throughout.' },
      { q: 'Nobody here understands the system we inherited. Can you still work on it?', a: 'Yes, and it is one of the more common reasons people get in touch. The first work is mapping what exists, where the data actually lives and which behaviour people depend on without realising it. Changes fail more often from a dependency nobody recorded than from technical difficulty, so establishing that picture is what makes the system safe to change rather than merely possible to change.' },
    ],
    reading: ['do-you-need-data-engineering', 'what-is-vendor-lock-in', 'legacy-system-modernization', 'supply-chain-visibility', 'healthcare-interoperability', 'erp-integration'],
    visual: 'stack',
    tint: '#2B55FF',
  },
  {
    slug: 'artificial-intelligence-and-automation',
    n: '02',
    name: 'Artificial Intelligence & Automation',
    short: 'Applied AI that holds up',
    title: 'Artificial intelligence and automation, applied to real work',
    summary:
      'We design and implement AI and automation for specific, identified work: research, document handling, workflow routing, decision support and internal operations.',
    intro:
      'The difficulty with applied AI is rarely the model. It is deciding which work is worth automating, building something that behaves predictably when inputs are messy, and keeping a human in the loop where judgement genuinely belongs. We do the assessment honestly, including telling clients when a use case does not justify the engineering.',
    signals: [
      'Skilled people spend hours a week on routine judgement calls and re-typing',
      'An AI prototype works in a notebook but cannot be trusted in production',
      'There is pressure to adopt AI without a clear view of where it would pay',
      'An automation was built, broke quietly, and nobody noticed until a customer did',
    ],
    when: 'Consider this when the manual work is repeatable and at scale, or when an internal AI experiment needs to become something the team can depend on.',
    whatWeDo: [
      'Use case assessment: where automation is worth building, and where it is not',
      'Agentic systems that act in your tools, with limits and approvals set first',
      'LLM applications on your own documents and data, with retrieval and evaluation',
      'Machine learning models and evaluation pipelines, including forecasting and predictive maintenance',
      'Language and document systems: extraction, classification, summarization, generation',
      'Computer vision where the problem and the data support it',
      'Workflow automation across existing tools and native integrations',
      'Decision support with human review at the points that carry risk',
      'Moving prototypes into production with observability, fallbacks and staged rollout',
    ],
    approach: [
      { title: 'Establish whether it is worth building', body: 'We look at volume, repeatability and error cost before proposing anything. Automation that saves twenty minutes a month rarely justifies the engineering and maintenance behind it, and we will say so.' },
      { title: 'Design the failure behaviour first', body: 'Production AI is judged on what it does when it is wrong. Fallbacks, confidence thresholds and escalation paths are designed before the happy path is built.' },
      { title: 'Keep judgement with people where it belongs', body: 'We separate decisions that are genuinely judgement from decisions that have simply never been written down. Only the second kind gets automated.' },
    ],
    outcomes: [
      'Automations running against real work, with documentation and training',
      'Clear boundaries on what is automated and what stays human',
      'Monitoring, so failures surface before users find them',
      'Evaluation you can rerun when the model or the data changes',
    ],
    related: ['ai-led-outbound-growth-engine', 'ai-workflow-notebook-to-production', 'decision-heavy-workflow-automation', 'live-operations-visibility-layer'],
    faqs: [
      { q: 'What types of AI systems do you build?', a: 'Machine learning models with evaluation pipelines, language and document systems for extraction, classification, summarization and generation, computer vision where the data supports it, decision support tooling with human review, and workflow automation connecting existing business systems.' },
      { q: 'How do you decide whether an AI use case is worth building?', a: 'We look at how often the work happens, how repeatable it is, and what an error costs. High volume, repeatable work with a tolerable error profile is worth engineering. Low volume or high judgement work usually is not, and we will tell you when that is the case rather than build it anyway.' },
      { q: 'We have a prototype that works. What does production actually require?', a: 'Usually explicit interface contracts, error handling, observability, fallback behaviour when a model or dependency misbehaves, an evaluation set you can rerun, and a staged rollout. That work is unglamorous and it is the entire difference between a demonstration and a system a team can depend on.' },
    ],
    reading: ['why-ai-prototypes-stall-before-production', 'when-workflow-automation-is-worth-engineering', 'what-ai-integration-costs', 'what-is-ai-readiness', 'why-ai-projects-fail', 'document-processing-automation', 'how-to-evaluate-an-ai-consulting-firm'],
    visual: 'neural',
    tint: '#7C5CFF',
  },
  {
    slug: 'product-engineering-and-rd',
    n: '03',
    name: 'Product Engineering & R&D',
    short: 'Prototype, prove, manufacture',
    title: 'Product engineering, prototyping and applied research',
    summary:
      'We take technical ideas through design, prototyping and validation to something that can be built, tested and manufactured.',
    intro:
      'Investment decisions often wait on a technical answer that does not exist yet. Will the mechanism hold under load. Can the sensor resolve what the product claims. Does the architecture survive contact with real data. We build the thing that answers the question, and we report what it tells us rather than what the business hoped to hear.',
    signals: [
      'A product concept needs technical validation before further investment',
      'Hardware and software are being developed by teams that are not talking to each other',
      'Internal R&D capacity is committed and a track needs to run in parallel',
      'A prototype exists but nobody can say whether it will survive manufacturing',
    ],
    when: 'Consider this when a decision to invest depends on a technical answer that does not exist yet.',
    whatWeDo: [
      'Mechanical design, CAD modelling and simulation',
      'Design for manufacture review and rapid prototyping',
      'Embedded firmware, sensor integration and device telemetry',
      'Hardware and software integration, and test rigs',
      'Software product architecture and technical prototyping',
      'Technical feasibility studies and structured research programmes',
    ],
    approach: [
      { title: 'Name the question the prototype has to answer', body: 'A prototype built to impress and a prototype built to answer a question look different. We agree what would count as a negative result before anything is built.' },
      { title: 'Bring hardware and software together early', body: 'Most integration failures are visible months before anyone acts on them. Running both tracks against a shared test rig surfaces them while they are still cheap.' },
      { title: 'Report what the evidence supports', body: 'If the validation says the concept should not proceed, that is the deliverable. It is considerably cheaper than the alternative.' },
    ],
    outcomes: [
      'Working prototypes and validation results',
      'Technical documentation an engineering or manufacturing partner can act on',
      'An evidenced view of whether the concept should proceed',
      'Test rigs and procedures your team can rerun',
    ],
    related: [],
    faqs: [
      { q: 'What kind of product engineering work do you undertake?', a: 'Mechanical design, CAD modelling and simulation, design for manufacture review, rapid prototyping, embedded firmware and sensor integration, device telemetry, hardware and software integration with test rigs, and software product architecture and prototyping.' },
      { q: 'Can you run a research track alongside our internal team?', a: 'Yes. That is a common arrangement when internal capacity is committed to the roadmap and a separate question needs answering in parallel. Scope, interfaces and reporting cadence are agreed at the start so the two tracks do not diverge.' },
      { q: 'What happens if the research concludes the idea will not work?', a: 'That is a successful outcome and it is worth saying so plainly. An answer of no is the cheapest result available, provided it arrives before the commitment rather than after it. The deliverable is the evidence and the reasoning, so the conclusion can be checked rather than taken on trust.' },
    ],
    reading: ['iot-device-management'],
    visual: 'blueprint',
    tint: '#FF5B24',
  },
  {
    slug: 'business-and-operating-systems',
    n: '04',
    name: 'Business & Operating Systems',
    short: 'Operating model and workflow',
    title: 'Business systems and operating design',
    summary:
      'We work out what is actually limiting the business, then design the operating model, workflows and decision structures that remove the limit.',
    intro:
      'Organizations that grew quickly usually run on arrangements that were never designed, only accumulated. That works until coordination cost grows faster than revenue. The work here is establishing what is genuinely in the way, then designing and building the operating structure that removes it rather than documenting the current mess more thoroughly.',
    signals: [
      'Growth is arriving faster than the operating model can absorb it',
      'Approvals, exceptions and status tracking still route through one or two people',
      'Nobody can say, with evidence, which bottleneck matters most',
      'Process documentation exists and nobody follows it',
    ],
    when: 'Consider this when the business is growing but coordination cost is growing faster, or when a major technology or hiring decision is pending and the operating picture is not clear enough to commit.',
    whatWeDo: [
      'Analysis across strategy, operations, people, technology and data',
      'Operating model and decision rights design',
      'End to end workflow mapping, redesign and documentation',
      'Reporting and operational visibility, built on real data rather than manual collation',
      'Governance, escalation and risk frameworks for regulated or enterprise buyers',
    ],
    approach: [
      { title: 'Establish the facts before the recommendations', body: 'We work from interviews, workflow evidence and system data rather than from an opinion formed in the first meeting. What people describe and what the systems record often differ, and the gap is usually where the problem is.' },
      { title: 'Design for the team that exists', body: 'An operating model that requires headcount or discipline the organization does not have is a document, not a change. We design against actual capacity.' },
      { title: 'Build what the design requires', body: 'Most operating changes need something engineered: a reporting layer, an integration, an automation. We build it rather than hand over a specification.' },
    ],
    outcomes: [
      'A clear account of what is limiting the business, with the evidence behind it',
      'Current state and target state workflow maps',
      'A sequenced plan with owners, dependencies and effort',
      'The reporting and systems changes that make the design operable',
    ],
    related: ['founder-operations-cockpit', 'decision-heavy-workflow-automation', 'structured-sales-hiring-engine'],
    faqs: [
      { q: 'How is this different from management consulting?', a: 'We do the consulting and then build what we recommend, in the same engagement. An operating design almost always depends on something being engineered, so a recommendation that stops at the specification stalls at exactly that point. If your question is organisational rather than technical, management consulting is the better route and we will say so.' },
      { q: 'We already have process documentation nobody follows. Why would this be different?', a: 'Documentation nobody follows is usually a symptom rather than the problem. A process is ignored when it requires attention, headcount or discipline the organisation does not have, so the work is to design against real capacity. Where a step is only followed because one person remembers to do it, the answer is normally to build it into a system.' },
      { q: 'What if we already know what the problem is?', a: 'Then say so, and if you are right this is the wrong engagement to buy. The reason it is worth checking first is that the loudest complaint and the actual constraint are often different. Where what people describe matches what the systems record, we will say the analysis is unnecessary and move to the build.' },
    ],
    reading: [],
    visual: 'flow',
    tint: '#2FD6A3',
  },
  {
    slug: 'growth-and-market-enablement',
    n: '05',
    name: 'Growth & Market Enablement',
    short: 'Revenue systems that repeat',
    title: 'Growth systems and market enablement',
    summary:
      'We build the systems behind revenue: how demand is generated, qualified, tracked and handed off, and what it takes to operate in a new market.',
    intro:
      'Revenue that depends on a few individuals is not yet a system. The work here is making the motion explicit and instrumented, so it can be measured, taught and repeated, and so a decision about where to invest next can be made from evidence rather than instinct.',
    signals: [
      'Pipeline depends on the founder and stalls when their attention moves elsewhere',
      'Marketing and sales activity happens, but nobody can attribute what worked',
      'Entry into a new region is planned with no operating or compliance structure behind it',
      'The CRM records what already happened rather than helping decide what to do next',
    ],
    when: 'Consider this when revenue is real but not yet repeatable, or when expansion is planned and the operating groundwork is not in place.',
    whatWeDo: [
      'Ideal customer definition and qualification structure',
      'Demand generation and outreach systems, instrumented end to end',
      'CRM design, pipeline reporting and revenue instrumentation',
      'Market entry planning: operating structure, delivery coordination and compliance readiness',
      'Partner and channel models where distribution is the constraint',
    ],
    approach: [
      { title: 'Make qualification explicit', body: 'Qualification usually lives in one person’s judgement, which is why the motion cannot be delegated. Writing it down as criteria is what makes the rest repeatable.' },
      { title: 'Instrument before scaling', body: 'Adding volume to a motion nobody can measure produces more activity and no more knowledge. Attribution comes first.' },
      { title: 'Treat market entry as an operating problem', body: 'Entering a market is rarely blocked by demand. It is blocked by delivery capacity, compliance and support structure, which is where the planning effort goes.' },
    ],
    outcomes: [
      'A documented, repeatable motion rather than individual effort',
      'Reporting that shows where deals actually come from and where they stall',
      'A staged plan for entering or expanding into a market',
    ],
    related: ['ai-led-outbound-growth-engine', 'structured-sales-hiring-engine'],
    faqs: [
      { q: 'Is this a marketing agency service?', a: 'No. We build the systems and instrumentation behind demand and pipeline rather than running campaigns. The output is a motion your team can operate and measure, not an ongoing outsourced marketing function.' },
      { q: 'Our pipeline depends entirely on the founder. Can that be fixed?', a: 'Usually, and the first step is rarely hiring. Pipeline concentrates on a founder because qualification lives in their judgement rather than in written criteria. Writing those criteria down is what lets somebody else run it, and it is also what makes the result measurable rather than anecdotal.' },
      { q: 'What does market entry work involve, and when is it too early?', a: 'It involves the operating structure behind the entry: delivery capacity, compliance readiness, support coverage and coordination across locations. It is too early when demand in the new market has not been established, and where that is the situation we will say so.' },
    ],
    reading: [],
    visual: 'funnel',
    tint: '#FFB020',
  },
  {
    slug: 'implementation-and-delivery',
    n: '06',
    name: 'Implementation & Delivery',
    short: 'Accountable execution',
    title: 'Implementation and delivery',
    summary:
      'We take responsibility for execution: running the plan, coordinating the moving parts, and staying accountable through to the result.',
    intro:
      'A correct plan and no capacity to run it produces the same result as no plan. This is the engagement for organizations that know what needs to happen and need someone accountable for making it happen, including across vendors they do not control.',
    signals: [
      'The plan is agreed and correct, and there is no internal capacity to drive it',
      'Several vendors are involved and nobody owns the outcome across them',
      'Previous initiatives stalled somewhere between decision and delivery',
      'Progress is reported in status meetings rather than in evidence',
    ],
    when: 'Consider this when the difficulty is not knowing what to do, but having the capacity and coordination to get it done.',
    whatWeDo: [
      'Execution of an agreed roadmap with defined milestones and owners',
      'Embedded engineering and delivery capacity alongside an internal team',
      'Vendor and workstream coordination under one accountable interface',
      'System rollout, migration and adoption support',
      'Transition planning, documentation and handover so the capability ends up owned internally',
    ],
    approach: [
      { title: 'One accountable interface', body: 'Where several vendors are involved, someone has to own the outcome across them. That is the role we take rather than adding another party with a partial view.' },
      { title: 'Report from evidence', body: 'Milestones are demonstrated rather than declared. Where something has slipped, it gets raised while there is still room to respond.' },
      { title: 'Plan the exit at the start', body: 'Transition, documentation and training are scoped from the beginning, because a delivery partner who becomes structurally necessary has failed at the job.' },
    ],
    outcomes: [
      'Progress against milestones, reported rather than assumed',
      'One point of accountability across the workstreams involved',
      'Documentation and handover, so you are not left dependent on us',
    ],
    related: [],
    faqs: [
      { q: 'Can you work alongside our existing vendors?', a: 'Yes, and it is a common arrangement. Where several parties are involved we take the coordinating role and hold accountability for the outcome across them, rather than adding another supplier with a partial view of the work.' },
      { q: 'How is this different from hiring contractors?', a: 'Contract capacity executes tasks that somebody else is accountable for sequencing. This engagement takes the accountability as well. If what you need is additional hands on a plan somebody internal already owns and drives, contractors are the cheaper answer and we will say so.' },
      { q: 'How do we avoid depending on you at the end?', a: 'Transition, documentation and training are scoped at the start rather than offered at the end. The measure we hold ourselves to is that your team can change what was built after we leave, which makes handover a deliverable with a date rather than a final conversation.' },
    ],
    reading: ['how-to-choose-a-software-development-partner'],
    visual: 'gantt',
    tint: '#E5484D',
  },
];

export const capabilityBySlug = (s: string) => capabilities.find((c) => c.slug === s);
export const capabilityByName = (n: string) => capabilities.find((c) => c.name === n);
