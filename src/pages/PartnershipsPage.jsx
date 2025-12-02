import React from 'react';
import ArrowIcon from '../components/icons/ArrowIcon';

const partnershipModels = [
  {
    title: 'Co-building & Venture Pods',
    description:
      'We attach senior operators, designers, and engineers to your leadership team to incubate new ventures or spin-outs. Shared OKRs, shared upside.',
    details: [
      'Sprint-based funding models with transparent burn and runway',
      'Product, GTM, and ops pods assembled from our specialist bench',
      'IP, data, and compliance frameworks agreed up front',
    ],
  },
  {
    title: 'Long-term Consulting + Execution',
    description:
      'Fractional CTO, CPO, or COO support blended with the squads required to execute. Ideal for SMEs and scale-ups needing strategic leadership plus delivery capacity.',
    details: [
      'Quarterly planning, instrumentation, and stakeholder management',
      'Dedicated squads for AI, automation, design, or growth initiatives',
      'Clear playbooks for transitioning capability in-house',
    ],
  },
  {
    title: 'Innovation & R&D Programs',
    description:
      'We partner with institutions, incubators, and enterprises to design innovation labs, manage cohorts, and commercialize research.',
    details: [
      'Program design, governance, and mentor networks',
      'Technical diligence, prototyping, and pilot builds',
      'Investor relations, demo days, and scale-up pathways',
    ],
  },
];

const engagementPrinciples = [
  'Single leadership interface with transparent communication.',
  'Outcome-based metrics, instrumentation, and post-mortems.',
  'Security, data privacy, and compliance baked into every workstream.',
  'Flexible commercial models: retainers, milestone-based, or venture-linked.',
];

export default function PartnershipsPage() {
  return (
    <div className="bg-white text-primary">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Partnerships</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Long-term partnerships that compound value</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-4xl">
          Talavishiraaj Groups works as an embedded partner from venture design to multi year digital transformations.
          We take accountability for planning, building, and scaling the systems that power your organisation.
        </p>
      </section>

      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid gap-6 md:grid-cols-3">
          {partnershipModels.map((model) => (
            <article key={model.title} className="border border-border rounded-2xl p-6 bg-white flex flex-col">
              <h2 className="text-xl font-semibold mb-3">{model.title}</h2>
              <p className="text-sm text-gray-600 mb-4 flex-1">{model.description}</p>
              <ul className="space-y-2 text-sm text-gray-700 list-none">
                {model.details.map((detail) => (
                  <li key={detail} className="flex items-start text-gray-700">
                    <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="border border-border rounded-3xl p-8 md:p-12 bg-secondary text-accent">
          <h2 className="text-2xl font-semibold mb-4">How we partner</h2>
          <p className="text-gray-200 mb-6">
            Every partnership is structured around clarity, accountability, and compounding value. We limit the number of
            simultaneous engagements to stay deeply involved with leadership and operating teams.
          </p>
          <ul className="space-y-3 text-sm text-gray-200 list-none">
            {engagementPrinciples.map((principle) => (
              <li key={principle} className="flex items-start text-gray-200">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-accent flex-shrink-0" />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

