import React from 'react';
import { motion } from 'framer-motion';

export default function RefundPolicyPage() {
  const refundStages = [
    { stage: 'Before project assembly', eligibility: 'Up to 90% refund' },
    { stage: 'Discovery / onboarding initiated', eligibility: 'Up to 75% refund' },
    { stage: 'Research & diagnostic phase active', eligibility: 'Up to 60% refund' },
    { stage: 'Strategy / blueprint development active', eligibility: 'Up to 40% refund' },
    { stage: 'Implementation / execution initiated', eligibility: 'Case-by-case review' },
    { stage: 'Project substantially completed', eligibility: 'Non-refundable' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-8">Refund Policy</h1>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">General Policy Statement</h2>
          <p>
            At Talavishiraaj Groups, we allocate significant operational resources, consultant scheduling, 
            and research commitment to every engagement. Our refund policy is designed to reflect the 
            operational preparation and delivery progression of our services while ensuring professional 
            fairness to our clients.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Consultation Engagement Refunds</h2>
          <p>
            Consultation-based engagements, including one-off sessions and diagnostic readouts, 
            become non-refundable once scheduled. However, these sessions may be rescheduled 
            with a minimum of 48 hours' prior notice, subject to consultant availability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Service & Implementation Refund Structure</h2>
          <p className="mb-6">
            Refunds for long-term service and implementation projects are calculated based on 
            the project stage and completed work scope:
          </p>
          <div className="overflow-x-auto border border-border rounded-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Project Stage</th>
                  <th className="px-6 py-4 font-semibold">Refund Eligibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {refundStages.map((row, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4">{row.stage}</td>
                    <td className="px-6 py-4 font-medium text-black">{row.eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Refund Calculation Basis</h2>
          <p>
            Refund calculations account for:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Consultant allocation and research time</li>
            <li>Operational preparation and internal planning</li>
            <li>Intermediary costs and payment processing fees</li>
            <li>Completed work scope and delivery-stage progression</li>
            <li>Administrative overhead and scheduling commitments</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Payment Infrastructure</h2>
          <p>
            Global payments are processed primarily through <strong>Skydo</strong> for operational simplicity, 
            international invoicing efficiency, and multi-region transaction management. Refunds will be 
            processed back to the original payment method, subject to international reconciliation timelines.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
