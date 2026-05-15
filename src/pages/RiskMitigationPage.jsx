import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
      title: 'Strategic & Organizational Risks',
      description: 'Aligning systems implementation with long-term organizational goals, execution readiness, and strategic maturity.',
      actions: ['Strategic Alignment Review', 'Execution Readiness Assessment', 'Organizational Maturity Mapping']
    }
  ];

  const reviewCategories = [
    {
      title: 'Clarity Quality',
      desc: 'Were recommendations structured, actionable, and clearly understandable for the intended audience and organizational context?'
    },
    {
      title: 'Systems Accuracy',
      desc: 'Were the core workflow bottlenecks, systems gaps, and coordination friction points correctly identified and substantiated?'
    },
    {
      title: 'Strategic Relevance',
      desc: 'Did recommendations align with execution readiness, scalability stage, and organizational maturity at the time of engagement?'
    },
    {
      title: 'Delivery Professionalism',
      desc: 'Were communication standards, timeline commitments, presentation quality, and stakeholder engagement maintained throughout?'
    },
    {
      title: 'Actionability',
      desc: 'Could the recommendations realistically be implemented with the organizational resources and capability available?'
    }
  ];

  const recoveryActions = [
    'Structured clarification sessions',
    'Roadmap refinement and supplemental documentation',
    'Supplemental consultation session',
    'Delivery adjustments and scope reassessment',
    'Structured internal quality review',
    'Partial service credit where appropriate and applicable'
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
        <h1 className="text-3xl md:text-5xl font-semibold">Risk & Mitigation Framework</h1>
        <p className="text-base text-gray-600 max-w-2xl mt-4">
          A structured, enterprise-grade governance framework governing risk identification, 
          delivery quality assurance, and recovery protocols across all engagements.
        </p>
      </div>
      
      <div className="space-y-12 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Governance Commitment</h2>
          <p>
            At Talavishiraaj Groups, governance is a foundational element of every engagement — not an 
            afterthought. Our Risk & Mitigation Framework ensures that every engagement is protected by 
            proactive risk identification, structured quality standards, and clear recovery protocols. 
            This framework operates alongside our Refund Policy and Delivery Policy as part of a 
            comprehensive governance architecture.
          </p>
        </section>

        {/* RISK FRAMEWORK CATEGORIES */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-6">Risk Framework Categories</h2>
          <div className="grid gap-6">
            {riskFrameworks.map((f, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 bg-muted/30">
                <h3 className="text-lg font-semibold text-black mb-3">{f.title}</h3>
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

        {/* DELIVERY RECOVERY & QUALITY ESCALATION */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Delivery Recovery & Quality Escalation Framework</h2>
          <p className="mb-6">
            An internal delivery quality review may be initiated under the following conditions:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-8">
            <li>Expression of delivery dissatisfaction by the client</li>
            <li>Communication breakdown or responsiveness concerns</li>
            <li>Unclear or insufficiently structured recommendations</li>
            <li>Missed delivery timelines attributable to internal factors</li>
            <li>Systems misalignment or implementation confusion</li>
            <li>Delivery quality concerns raised formally in writing</li>
          </ul>
        </section>

        {/* INTERNAL REVIEW CATEGORIES */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-6">Internal Review Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewCategories.map((cat, i) => (
              <div key={i} className="border border-border rounded-xl p-5 bg-white">
                <h3 className="font-semibold text-black mb-2 text-sm">{cat.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* RECOVERY ACTIONS */}
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Recovery Actions</h2>
          <p className="mb-4">
            Depending on the outcome of an internal delivery review, recovery actions may include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {recoveryActions.map((action, i) => (
              <li key={i}>{action}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            All recovery actions are evaluated on a case-by-case basis against the delivery documentation, 
            engagement parameters, and applicable policy provisions. Recovery actions do not constitute 
            an automatic or unconditional entitlement to additional services or financial remedies.
          </p>
        </section>

        {/* GOVERNANCE CROSS-REFERENCES */}
        <section className="border border-border rounded-2xl p-6 bg-muted/30">
          <h2 className="text-lg font-semibold text-black mb-4">Related Governance Documents</h2>
          <p className="text-sm text-gray-600 mb-4">
            This framework operates alongside the following governance and legal documents:
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/refund-policy" className="text-sm font-medium text-black border-b border-gray-300 pb-0.5 hover:border-black transition-colors">Refund Policy</Link>
            <Link to="/delivery-policy" className="text-sm font-medium text-black border-b border-gray-300 pb-0.5 hover:border-black transition-colors">Delivery Policy</Link>
            <Link to="/privacy-policy" className="text-sm font-medium text-black border-b border-gray-300 pb-0.5 hover:border-black transition-colors">Privacy Policy</Link>
            <Link to="/data-handling" className="text-sm font-medium text-black border-b border-gray-300 pb-0.5 hover:border-black transition-colors">Confidentiality & Data Handling</Link>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
