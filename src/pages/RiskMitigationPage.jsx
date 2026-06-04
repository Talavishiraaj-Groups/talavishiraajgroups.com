import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function RiskMitigationPage() {
  const riskFrameworks = [
    {
      title: 'Delivery & Execution Risks',
      description: 'Identifying and addressing workflow bottlenecks, coordination gaps, and execution misalignments before they impact delivery quality or timeline.',
      actions: ['Workflow Visibility Assessment', 'Execution Alignment Review', 'Coordination Framework Design']
    },
    {
      title: 'Technology & Systems Risks',
      description: 'Ensuring systems integrity, data security, and infrastructure scalability for AI, automation, and technology implementation.',
      actions: ['Systems Integrity Review', 'Scalability Assessment', 'Data Governance Framework']
    },
    {
      title: 'Strategic & Organisational Risks',
      description: 'Aligning systems implementation with long‑term organisational goals, execution readiness, and strategic maturity.',
      actions: ['Strategic Alignment Review', 'Execution Readiness Assessment', 'Organisational Maturity Mapping']
    }
  ];

  const reviewCategories = [
    {
      title: 'Clarity Quality',
      desc: 'Were recommendations structured, actionable, and clearly understandable for the intended audience and organisational context?'
    },
    {
      title: 'Systems Accuracy',
      desc: 'Were the core workflow bottlenecks, systems gaps, and coordination friction points correctly identified and substantiated?'
    },
    {
      title: 'Strategic Relevance',
      desc: 'Did recommendations align with execution readiness, scalability stage, and organisational maturity at the time of engagement?'
    },
    {
      title: 'Delivery Professionalism',
      desc: 'Were communication standards, timeline commitments, presentation quality, and stakeholder engagement maintained throughout?'
    },
    {
      title: 'Actionability',
      desc: 'Could the recommendations realistically be implemented with the organisational resources and capability available?'
    }
  ];

  const recoveryActions = [
    'Structured clarification sessions.',
    'Roadmap refinement and supplemental documentation.',
    'Supplemental consultation session.',
    'Delivery adjustments and scope reassessment.',
    'Structured internal quality review.',
    'Partial service credit where appropriate and applicable.'
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <div className="space-y-2 mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Governance</p>
        <h1 className="text-3xl md:text-5xl font-semibold text-black">Governance – Risk & Mitigation Framework</h1>
        <p className="text-sm text-gray-500">Last Updated: June 2026</p>
        <p className="text-base text-gray-600 max-w-3xl mt-4 leading-relaxed">
          A structured, enterprise‑grade governance framework governing risk identification, delivery quality assurance, and recovery protocols across all engagements. This framework operates alongside the specific contractual terms (including any Master Services Agreement, Statement of Work, NDA, and Data Processing Agreement) governing each client engagement.
        </p>
      </div>
      
      <div className="space-y-12 text-gray-700 leading-relaxed">
        {/* Governance Commitment */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Governance Commitment</h2>
          <p>
            At Talavishiraaj Groups, governance is a foundational element of every engagement, not an afterthought. Our Risk & Mitigation Framework ensures that every engagement is protected by proactive risk identification, structured quality standards, and clear recovery protocols.
          </p>
          <p>
            This framework operates together with our Refund Policy, Delivery Policy, Privacy Policy, and Confidentiality & Data Handling commitments as part of a comprehensive governance architecture and is designed to support compliance with applicable data protection and professional standards.
          </p>
        </section>

        {/* RISK FRAMEWORK CATEGORIES */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-black">Risk Framework Categories</h2>
          <div className="grid gap-6">
            {riskFrameworks.map((f, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 bg-muted/30">
                <h3 className="text-lg font-semibold text-black mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{f.description}</p>
                <div className="flex flex-wrap gap-2">
                  {f.actions.map((action, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1 bg-white border border-border rounded-full text-gray-500">
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DELIVERY RECOVERY */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Delivery Recovery & Quality Escalation Framework</h2>
          <p>An internal delivery quality review may be initiated under the following conditions:</p>
          <ul className="space-y-2 list-none pl-0">
            {[
              'Expression of delivery dissatisfaction by the client.',
              'Communication breakdown or responsiveness concerns.',
              'Unclear or insufficiently structured recommendations.',
              'Missed delivery timelines attributable to internal factors.',
              'Systems misalignment or implementation confusion.',
              'Delivery quality concerns raised formally in writing.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* INTERNAL REVIEW CATEGORIES */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-black">Internal Review Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewCategories.map((cat, i) => (
              <div key={i} className="border border-border rounded-xl p-5 bg-white shadow-sm">
                <h3 className="font-semibold text-black mb-2 text-sm">{cat.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RECOVERY ACTIONS */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Recovery Actions</h2>
          <p>Depending on the outcome of an internal delivery review, recovery actions may include:</p>
          <ul className="space-y-2 list-none pl-0">
            {recoveryActions.map((action, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            All recovery actions are evaluated on a case‑by‑case basis against the delivery documentation, engagement parameters, and applicable contract and policy provisions. Recovery actions are discretionary and do not constitute an automatic or unconditional entitlement to additional services, changes in scope, or financial remedies. Any financial remedies will be aligned with the terms of the applicable contract and our Refund Policy.
          </p>
        </section>

        {/* RELATED DOCUMENTS */}
        <section className="border border-border rounded-2xl p-6 bg-muted/30">
          <h2 className="text-lg font-semibold text-black mb-4">Related Governance Documents</h2>
          <p className="text-sm text-gray-600 mb-4">
            This framework operates alongside the following governance and legal documents:
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link to="/refund-policy" className="text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">Refund Policy</Link>
            <Link to="/delivery-policy" className="text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">Delivery Policy</Link>
            <Link to="/privacy-policy" className="text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">Privacy Policy</Link>
            <Link to="/data-handling" className="text-black border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">Confidentiality & Data Handling</Link>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
