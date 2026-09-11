import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, serviceSchema, webPageSchema } from '../seo';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';

/**
 * Product page for Prism.
 *
 * The substance here is approved product content and is treated as read only:
 * scope, inclusions, engagement structure, deliverables, timeline, target
 * regions and the portfolio listing are preserved as published. What changed is
 * the product name, technical SEO, semantic structure and accessibility. No
 * commercial pricing appears anywhere on this page.
 */

const regions = ['United States', 'United Kingdom', 'UAE / GCC', 'Europe', 'India'];

const challenges = [
  'Fragmented systems and siloed workflow data',
  'Founder dependency and absence of delegable processes',
  'Workflow bottlenecks slowing delivery and coordination',
  'Scaling inefficiencies and rising coordination overhead',
  'Disconnected processes and execution misalignment',
  'Lack of systems visibility and infrastructure clarity',
];

const inclusions = [
  {
    title: 'Stakeholder Interviews',
    desc: 'Focused sessions with key organizational stakeholders to surface context, constraints, and workflow realities.',
  },
  {
    title: 'Workflow Analysis',
    desc: 'In-depth review of current processes, coordination structures, and existing systems infrastructure.',
  },
  {
    title: 'Systems Visibility Mapping',
    desc: 'Structured visualization of current operational state and clarity gaps across the organization.',
  },
  {
    title: 'Systems Assessment',
    desc: 'Review of existing tools, infrastructure, and systems readiness for scale.',
  },
  {
    title: 'Strategic Recommendations',
    desc: 'Structured, actionable guidance for systems improvement and workflow optimization.',
  },
  {
    title: 'Roadmap Delivery',
    desc: 'A structured implementation blueprint providing clear next-step clarity.',
  },
];

const steps = [
  {
    label: '01',
    title: 'Onboarding & Intake',
    desc: 'Structured intake process to establish baseline organizational context and engagement parameters.',
  },
  {
    label: '02',
    title: 'Stakeholder Engagement',
    desc: 'Focused sessions to surface workflow realities, systems gaps, and coordination challenges.',
  },
  {
    label: '03',
    title: 'Analysis & Assessment',
    desc: 'Structured evaluation of workflows, systems, and organizational alignment.',
  },
  {
    label: '04',
    title: 'Findings & Clarity Session',
    desc: 'Structured consultation to present findings, strategic observations, and systems roadmap.',
  },
  {
    label: '05',
    title: 'Final Delivery',
    desc: 'Packaged delivery of the full report, supporting assets, and implementation materials.',
  },
];

const deliverables = [
  'Comprehensive PDF Report & Strategy Deck',
  'Recorded Clarity Session (secure video delivery)',
  'Visual Workflow & Systems Maps',
  'Actionable Implementation Roadmap',
  'Supporting Documentation & Assets',
];

const portfolio = [
  { title: 'Prism', available: true },
  { title: 'Workflow Intelligence Platform', available: false },
  { title: 'AI Systems Infrastructure', available: false },
  { title: 'Business Infrastructure Dashboard', available: false },
];

const TITLE = 'Prism | Workflow Intelligence System by Talavishiraaj Groups';
const DESCRIPTION =
  'Prism is a structured workflow intelligence assessment that surfaces systems gaps, maps workflows and delivers an implementation roadmap. Typically completed within 10 to 13 business days.';

export default function SystemsPage() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (index) => setOpenSection(openSection === index ? null : index);

  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/systems"
        jsonLd={[
          webPageSchema({ path: '/systems', title: 'Prism', description: DESCRIPTION }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Systems', path: '/systems' },
          ]),
          serviceSchema({
            name: 'Prism',
            serviceType: 'Workflow intelligence assessment',
            description:
              'A structured workflow intelligence assessment that surfaces systems gaps, maps workflows and delivers an implementation roadmap for scaling organizations.',
            path: '/systems',
          }),
        ]}
      />

      {/* HERO */}
      <section className="bg-secondary text-accent overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-gray-400 font-medium">
              Workflow Intelligence System
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Prism</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A structured workflow intelligence assessment designed to surface clarity, identify
              systems gaps, and build the implementation roadmap required for confident,
              enterprise-grade scaling.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact?intent=prism"
                onClick={() => track('prism_interest', { location: 'systems_hero' })}
                className="bg-accent text-primary px-8 py-4 rounded-full text-sm font-semibold hover:bg-muted transition-colors"
              >
                Initiate Engagement
              </Link>
              <a
                href="#what-it-includes"
                onClick={() => track('cta_click', { location: 'systems_hero', target: 'inclusions' })}
                className="border border-gray-600 text-accent px-8 py-4 rounded-full text-sm font-semibold hover:bg-graphite transition-colors"
              >
                See what is included
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="w-full h-full text-white fill-current"
          >
            <path d="M0 0 L100 100 L100 0 Z" />
          </svg>
        </div>
      </section>

      {/* CORE POSITIONING */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-black">
              Structured Workflow &amp; Systems Intelligence
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Prism is not generic consulting. It is a structured workflow intelligence engagement
              that provides visibility into the systems health of your organization. We assess before
              we prescribe, ensuring that every recommendation is grounded in structured observation
              and organizational reality.
            </p>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Target Regions
              </h3>
              <ul className="flex flex-wrap gap-2 list-none">
                {regions.map((region) => (
                  <li
                    key={region}
                    className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-gray-600"
                  >
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-muted/50 rounded-3xl p-8 border border-border">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
              Workflow &amp; Systems Challenges We Address
            </h2>
            <ul className="space-y-4 list-none">
              {challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <ArrowIcon className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT IT INCLUDES */}
      <section id="what-it-includes" className="scroll-mt-24 bg-muted py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-semibold text-black">What Prism Includes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              A comprehensive structured assessment covering stakeholders, workflows, systems, and
              strategic alignment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusions.map((item) => (
              <div key={item.title} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT STRUCTURE */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-semibold text-black">Engagement Structure</h2>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">
              A structured, stage-based engagement designed for clarity and professional delivery.
            </p>
          </div>
          <ol className="grid gap-px bg-border border border-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-5 list-none">
            {steps.map((step) => (
              <li key={step.label} className="bg-white p-6">
                <span className="inline-flex w-8 h-8 rounded-full bg-black text-white items-center justify-center text-xs font-bold mb-4">
                  {step.label}
                </span>
                <h3 className="font-semibold text-black text-sm mb-1.5">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-secondary text-accent py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Enterprise-Ready Deliverables</h2>
            <p className="text-gray-400 leading-relaxed">
              The engagement is typically completed within 10 to 13 business days. Final delivery is
              provided as a structured, packaged delivery set.
            </p>
            <ul className="space-y-4 list-none">
              {deliverables.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-gray-800 rounded-3xl p-10 bg-graphite">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Engagement Profile</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Designed for organizations seeking systems clarity, workflow visibility, and
                structured execution readiness.
              </p>
              <div className="pt-6 border-t border-gray-800 flex flex-wrap justify-between gap-2 text-xs text-gray-500">
                <span>Timeline: 10 to 13 Business Days</span>
                <span>Payment: International Channels</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS PORTFOLIO */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-20">
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Systems Architecture</p>
            <h2 className="text-3xl font-semibold text-black">The Systems Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Prism is the first structured system in our growing portfolio. Additional workflow
              intelligence systems and infrastructure products are in development.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 list-none">
            {portfolio.map((system) => (
              <li
                key={system.title}
                className="border border-border rounded-2xl p-5 bg-muted/30 flex flex-col justify-between min-h-[104px]"
              >
                <h3 className="font-semibold text-black text-sm">{system.title}</h3>
                <span className="mt-3 text-[11px] uppercase tracking-[0.16em] text-gray-500">
                  {system.available ? 'Available' : 'In development'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* begin-protected-legal-text
          The three panels below reproduce the published Refund, Delivery and
          Governance policies word for word, including their original
          punctuation and the product name used in those documents. They must
          not be reworded here. scripts/check-content.mjs skips this block. */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 space-y-8">
        <div className="text-center space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Policies &amp; Assurance</p>
          <h2 className="text-3xl font-semibold text-black">Engagement Governance</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Prism operates under a defined governance framework to ensure quality, security, and
            professional alignment. The extracts below are reproduced from our published policies.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion
            index={0}
            openSection={openSection}
            onToggle={toggleSection}
            label="Refund Policy (Prism Diagnostic)"
          >
            <p>
              Prism Diagnostic is a structured diagnostic engagement that involves upfront allocation
              of specialist time, research effort, and systems analysis.
            </p>
            <div>
              <p className="font-semibold text-black mb-1">
                Before any work or data collection begins:
              </p>
              <p>
                If you request a refund before we collect any client information for the diagnostic and
                before onboarding or configuration has started, we may consider a refund of up to 80%
                of fees paid, reflecting initial scheduling and planning effort.
              </p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">After diagnostic work has started:</p>
              <p>
                Once onboarding, data collection, research, or assessment has started, any refund
                request is evaluated based on the engagement stage and work completed, using the same
                stage‑based structure set out in our main Refund Policy.
              </p>
            </div>
            <div>
              <p className="font-semibold text-black mb-1">After delivery of Prism outputs:</p>
              <p>
                After Prism Diagnostic outputs or reports have been delivered, fees are non‑refundable,
                as the value lies in the expertise, analysis, and deliverables already provided.
              </p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              For full details, please refer to our{' '}
              <Link to="/refund-policy" className="underline hover:text-black">
                Refund Policy
              </Link>
              .
            </p>
          </Accordion>

          <Accordion
            index={1}
            openSection={openSection}
            onToggle={toggleSection}
            label="Delivery & Timeline (Prism Diagnostic)"
          >
            <p>Prism Diagnostic engagements are designed for structured, time‑bound delivery:</p>
            <ul className="space-y-3 list-none pl-0">
              {[
                [
                  'Typical timeline: ',
                  'Prism Diagnostic is typically completed within 10–13 business days from confirmed intake and completion of the required client information forms.',
                ],
                [
                  'Client responsibilities: ',
                  'Timely sharing of relevant organisational information, stakeholder availability for sessions, and prompt feedback/approvals are essential to maintain the delivery timeline.',
                ],
                [
                  'Dependencies: ',
                  'Timelines may adjust based on client responsiveness, third‑party systems, and data dependencies. Such dependency‑driven shifts do not constitute delivery failure.',
                ],
                [
                  'Scope: ',
                  'Prism Diagnostic provides visibility, structured findings, and a roadmap; implementation of recommendations is handled under separate implementation engagements.',
                ],
              ].map(([label, body]) => (
                <li key={label} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <div>
                    <strong className="text-black">{label}</strong>
                    {body}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              For a full description of our delivery standards across all engagements, see our{' '}
              <Link to="/delivery-policy" className="underline hover:text-black">
                Delivery Policy
              </Link>
              .
            </p>
          </Accordion>

          <Accordion
            index={2}
            openSection={openSection}
            onToggle={toggleSection}
            label="Governance, Confidentiality & Data Protection"
          >
            <p>
              Prism Diagnostic operates within Talavishiraaj Groups’ governance and data‑handling
              framework:
            </p>
            <ul className="space-y-3 list-none pl-0">
              {[
                [
                  'Contract & NDA: ',
                  'Prism Diagnostic engagements are covered by our standard contractual terms and confidentiality obligations, and may be supported by a separate NDA and/or Data Processing Agreement where required.',
                ],
                [
                  'Governance: ',
                  'Delivery quality, risk, and recovery actions are guided by our internal Risk & Mitigation Framework, which includes structured escalation and quality review procedures.',
                ],
                [
                  'Confidentiality: ',
                  'Client information and diagnostic outputs are treated as confidential and handled in line with our Confidentiality & Data Handling commitments.',
                ],
                [
                  'Data protection: ',
                  'Any personal data processed as part of Prism Diagnostic is handled according to our Privacy Policy, relevant DPAs, and applicable data protection laws, including the DPDP Act.',
                ],
              ].map(([label, body]) => (
                <li key={label} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                  <div>
                    <strong className="text-black">{label}</strong>
                    {body}
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-2">
              For complete details, please refer to our{' '}
              <Link to="/privacy-policy" className="underline hover:text-black">
                Privacy Policy
              </Link>
              ,{' '}
              <Link to="/risk-mitigation" className="underline hover:text-black">
                Risk &amp; Mitigation Framework
              </Link>
              ,{' '}
              <Link to="/refund-policy" className="underline hover:text-black">
                Refund Policy
              </Link>
              ,{' '}
              <Link to="/delivery-policy" className="underline hover:text-black">
                Delivery Policy
              </Link>
              , and{' '}
              <Link to="/data-handling" className="underline hover:text-black">
                Confidentiality &amp; Data Handling
              </Link>{' '}
              pages.
            </p>
          </Accordion>
        </div>
      </section>
      {/* end-protected-legal-text */}

      {/* CTA */}
      <section className="border-t border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Initiate a Prism Engagement
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Describe your organizational context and we will confirm whether Prism is the appropriate
            engagement, along with clear next steps.
          </p>
          <Link
            to="/contact?intent=prism"
            onClick={() => track('prism_interest', { location: 'systems_footer_cta' })}
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-9 py-4 text-sm font-medium hover:bg-graphite transition-colors"
          >
            Initiate Engagement
          </Link>
        </div>
      </section>
    </>
  );
}

function Accordion({ index, openSection, onToggle, label, children }) {
  const isOpen = openSection === index;
  const panelId = `governance-panel-${index}`;
  const buttonId = `governance-button-${index}`;

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-muted/40">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => onToggle(index)}
          className="w-full flex items-center justify-between gap-4 p-6 text-left font-semibold text-black hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-inset"
        >
          <span>{label}</span>
          <svg
            aria-hidden="true"
            className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
        <div className="p-6 pt-0 text-sm text-gray-700 space-y-4 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
