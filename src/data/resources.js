/**
 * Reference artifacts.
 *
 * Distinct from Insights. An insight is read once. A resource is something a
 * team returns to and works from, which is what makes it worth linking to.
 *
 * The test every entry must pass: it has to be genuinely usable by someone who
 * will never hire us. That is the property that earns citations.
 *
 * See marketing-research/strategy.md section 5 before adding to this file.
 */

export const resources = [
  {
    slug: 'ai-production-readiness-checklist',
    title: 'AI production readiness checklist',
    h1: 'AI production readiness checklist',
    metaTitle: 'AI Production Readiness Checklist | Talavishiraaj Groups',
    metaDescription:
      'A working checklist for taking an AI system from prototype to production: interface contracts, failure behavior, evaluation, observability, rollout and ownership. Free to use and adapt.',
    published: '2026-09-28',
    capability: 'ai',
    insight: 'why-ai-prototypes-stall-before-production',
    summary:
      'Use this before an AI system goes in front of users. It covers the work that separates a prototype from something a team can depend on. Nothing here is specific to a vendor, a model or a framework, and you are free to copy it into your own repository and adapt it.',
    intro:
      'Most of the items below are unglamorous and most get scoped last. That is the reason production launches slip. Working through them before the launch date is set is considerably cheaper than discovering them afterwards.',
    howToUse: [
      'Walk it before the launch date is committed, not after.',
      'Any item you cannot answer is scope that has not been costed yet.',
      'A "no" is not a blocker on its own. An undiscussed "no" is.',
    ],
    sections: [
      {
        heading: 'Interface contract',
        intro:
          'Every team downstream is blocked until these are fixed. Settle them before tuning anything.',
        items: [
          'Input schema is defined and validated at the boundary, with malformed input rejected rather than coerced.',
          'Output schema is defined, including the shape returned when the system declines to answer.',
          'Latency budget is agreed with whoever consumes the output, and the modeling approach fits inside it.',
          'Error taxonomy exists: the caller can distinguish "no answer", "low confidence", "upstream failure" and "invalid request".',
          'The contract is versioned, and there is a stated policy for breaking changes.',
        ],
      },
      {
        heading: 'Failure behavior',
        intro:
          'Production systems are judged on what they do when they are wrong. Design this before the happy path.',
        items: [
          'Behavior on low confidence is defined: fall back, escalate to a person, or decline and say so.',
          'Behavior when an upstream dependency times out or errors is defined and tested.',
          'Fallback path exists and has been exercised, not just written down.',
          'Degradation is graceful: one component misbehaving reduces capability rather than stopping the workflow.',
          'Rate limits and cost ceilings are enforced, so a loop or a traffic spike cannot run unbounded.',
          'There is a documented answer to "what does a user see when this fails".',
        ],
      },
      {
        heading: 'Evaluation',
        intro:
          'If you cannot rerun the evaluation, you cannot safely change anything afterwards.',
        items: [
          'An evaluation set exists, is version controlled, and lives alongside the code.',
          'It covers the awkward cases, not only the representative ones.',
          'Every case that has caused an incident has been added to it.',
          'It runs automatically when the model, prompt, retrieval or pipeline changes.',
          'A pass threshold is agreed in advance, so the result is a decision rather than a discussion.',
          'Results are recorded over time, so regressions are visible as a trend.',
        ],
      },
      {
        heading: 'Observability',
        intro:
          'Conventional monitoring tells you the service responded. It does not tell you the response was sensible.',
        items: [
          'Input and output distributions are logged, so drift is visible against a baseline.',
          'Confidence scores are recorded where the method produces them.',
          'Fallback rate and human escalation rate are tracked. These usually move before anyone complains.',
          'Latency is tracked at the percentiles that matter, not only the mean.',
          'Cost per request is visible and attributable.',
          'Alerting fires on rate of change, not only on absolute thresholds.',
          'Logs are retained long enough to investigate an incident reported a week later.',
        ],
      },
      {
        heading: 'Data and privacy',
        intro:
          'Usually the item that delays a launch when it is discovered late.',
        items: [
          'It is documented what data leaves your infrastructure, and where it goes.',
          'Personal data handling has a lawful basis, and retention is defined.',
          'Prompts and outputs containing personal or confidential data are excluded from logs, or redacted before they are written.',
          'Vendor terms have been read on whether submitted data is used for training.',
          'Deletion requests can be honored, including anything captured in logs or evaluation sets.',
        ],
      },
      {
        heading: 'Rollout',
        intro: 'Each stage exists to surface a different class of problem.',
        items: [
          'Internal use against real inputs, with no external consequence.',
            'Limited cohort with human review on every output.',
          'Wider cohort with review on flagged cases only.',
          'General availability with monitoring and an unambiguous rollback path.',
          'Rollback has been tested, not assumed.',
          'Feature flag or equivalent allows disabling without a deploy.',
        ],
      },
      {
        heading: 'Ownership',
        intro:
          'An unowned system becomes an unmonitored one, and an unmonitored system fails silently.',
        items: [
          'A named person owns it, not a team inbox.',
          'There is a runbook covering the three most likely failures.',
            'Someone other than the original author has run the deploy and the rollback.',
          'Retraining or prompt revision has a defined trigger and a defined approver.',
          'A review date is in the calendar, so nobody has to remember to look.',
        ],
      },
    ],
    closing:
      'If most of this is already in place, the remaining work is probably smaller than it feels. If most of it is not, the gap between the prototype and the launch date is larger than the plan currently says, and it is better to know that now.',
  },
];

export const resourceBySlug = (slug) => resources.find((r) => r.slug === slug);
export const resourcePath = (resource) => `/resources/${resource.slug}`;
export const resourcesForCapability = (capabilityId) =>
  resources.filter((r) => r.capability === capabilityId);

export const RESOURCES_TITLE = 'Engineering Reference Resources | Talavishiraaj Groups';
export const RESOURCES_DESCRIPTION =
  'Checklists and reference material our teams use on real engagements, published in full and free to adapt. Written to be useful whether or not you ever work with us.';
