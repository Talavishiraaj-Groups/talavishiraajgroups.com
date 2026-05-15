import React from 'react';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/icons/ArrowIcon';

const partnershipModels = [
  {
    title: 'Strategic Co-Development',
    description:
      'We engage as a structured co-development partner for organizations building new systems, products, or operational capabilities. Collaboration is governed by agreed frameworks, defined scope, and shared accountability.',
    details: [
      'Structured project governance and milestone accountability',
      'Systems, technology, and delivery capability allocation',
      'IP, data, and confidentiality frameworks agreed at engagement initiation',
    ],
  },
  {
    title: 'Embedded Strategic Partnerships',
    description:
      'Sustained, senior-level strategic partnership blended with the execution capability required to implement. Designed for organizations requiring structured leadership support and delivery capacity over an extended engagement.',
    details: [
      'Structured planning, alignment, and stakeholder coordination',
      'Dedicated capability for AI, automation, systems, or growth initiatives',
      'Clear transition frameworks for building internal capability over time',
    ],
  },
  {
    title: 'Research & Innovation Collaborations',
    description:
      'We partner selectively with institutions, enterprises, and research-oriented organizations to develop innovation programs, validate systems concepts, and support structured research commercialization.',
    details: [
      'Program design, governance structure, and delivery management',
      'Technical assessment, systems prototyping, and validation support',
      'Structured pathways from research to implementation and deployment',
    ],
  },
];

const engagementPrinciples = [
  'Selective engagement — we limit simultaneous partnerships to maintain depth and accountability.',
  'Single structured leadership interface with transparent communication throughout.',
  'Outcome-aligned engagements with clear metrics, milestones, and delivery accountability.',
  'Security, data privacy, and governance embedded into every engagement by design.',
  'Flexible, professionally structured commercial models aligned to engagement scope and stage.',
];

export default function PartnershipsPage() {
  return (
    <div className="bg-white text-primary">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Partnerships</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Strategic partnerships built for depth and sustained value</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-4xl">
          Talavishiraaj Groups engages selectively with organizations seeking structured, enterprise-oriented collaboration. 
          We bring strategic clarity, systems thinking, and implementation capability to every partnership — 
          with full accountability from initiation through delivery.
        </p>
      </section>

      {/* ECOSYSTEM POSITIONING */}
      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Ecosystem Positioning</p>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl">
            Our partnership ecosystem is intentionally curated. We engage with organizations where there is 
            genuine systems alignment, mutual capability, and a shared commitment to structured, 
            professionally managed collaboration.
          </p>
          <p className="text-gray-500 text-sm max-w-3xl">
            Technology partnerships, strategic alliances, implementation collaborations, research partnerships, 
            and expansion collaborations are all within scope — subject to strategic fit and governance alignment.
          </p>
        </div>
      </section>

      {/* PARTNERSHIP MODELS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 grid gap-6 md:grid-cols-3">
          {partnershipModels.map((model) => (
            <article key={model.title} className="border border-border rounded-2xl p-6 bg-muted/20 flex flex-col">
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

      {/* HOW WE PARTNER */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="border border-border rounded-3xl p-8 md:p-12 bg-secondary text-accent">
          <h2 className="text-2xl font-semibold mb-4">How We Partner</h2>
          <p className="text-gray-200 mb-6">
            Every partnership is structured around clarity, governance, and compounding organizational value. 
            We engage with depth and accountability — not breadth and volume.
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-black">Interested in a Partnership Discussion?</h2>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Partnership inquiries are reviewed for strategic fit and organizational alignment before 
          initiating a structured discussion. Use the contact form to introduce your organization 
          and describe the nature of the proposed collaboration.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-black text-white px-10 py-4 text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          Initiate Partnership Discussion
        </Link>
      </section>
    </div>
  );
}
