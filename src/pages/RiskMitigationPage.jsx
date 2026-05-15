import React from 'react';
import { motion } from 'framer-motion';

export default function RiskMitigationPage() {
  const frameworks = [
    {
      title: 'Operational Risks',
      description: 'Identifying and neutralizing workflow bottlenecks, founder dependencies, and scaling inefficiencies.',
      actions: ['Workflow Mapping', 'System Audits', 'Process Redundancy']
    },
    {
      title: 'Technology Risks',
      description: 'Ensuring system security, data integrity, and architectural scalability for AI and automation systems.',
      actions: ['Security Audits', 'Scalability Testing', 'Data Validation']
    },
    {
      title: 'Strategic Risks',
      description: 'Aligning execution with long-term organizational goals and market shifts.',
      actions: ['GTM Alignment', 'Market Analysis', 'Strategic Readiness']
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-8">Risk & Mitigation Framework</h1>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Governance Commitment</h2>
          <p>
            At Talavishiraaj Groups, governance is not an afterthought—it is the foundation of our 
            operational methodology. Our Risk & Mitigation Framework ensures that every engagement 
            is protected by proactive identification and structured resolution of potential risks.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-1 mt-12">
          {frameworks.map((f, i) => (
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
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-black mb-4">Quality Escalation Protocol</h2>
          <p>
            We maintain an internal delivery quality scorecard. A delivery review is automatically 
            triggered by any expression of dissatisfaction or when communication benchmarks are not 
            met. Corrective actions may include supplemental consultations, revised roadmaps, or 
            delivery revisions to ensure project alignment.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
