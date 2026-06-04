import React from 'react';
import { motion } from 'framer-motion';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function RefundPolicyPage() {
  const refundStages = [
    { stage: 'Before project assembly / kickoff', eligibility: '90% of fees paid' },
    { stage: 'Discovery / onboarding initiated', eligibility: '75% of fees paid' },
    { stage: 'Research & assessment phase active', eligibility: '60% of fees paid' },
    { stage: 'Strategy / blueprint development active', eligibility: '40% of fees paid' },
    { stage: 'Implementation / execution initiated', eligibility: 'Case‑by‑case review' },
    { stage: 'Project substantially completed', eligibility: 'Non‑refundable' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-black">Refund Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: April 2026</p>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section className="space-y-4">
          <p>
            This Refund Policy describes how Talavishiraaj Groups handles refunds for consulting, systems‑oriented services, and productised offerings such as Prism Diagnostic. It applies to engagements unless a separate signed agreement (such as a Statement of Work or Master Services Agreement) specifies a different refund structure, in which case the signed agreement will prevail.
          </p>
          <p>
            We invest significant time in consultant allocation, research preparation, systems configuration, and delivery planning for every engagement. Our refund approach is designed to balance fairness to clients with the operational realities of high‑involvement services.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">1. Consultation Engagements</h2>
          <p>
            Consultation‑based engagements include structured advisory sessions, assessment readouts, and strategy consultations.
          </p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Once a consultation session is scheduled and confirmed, the fee is non‑refundable.</span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Sessions may be rescheduled once with at least 48 hours’ prior written notice, subject to consultant availability.</span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Reschedule requests made with less than 48 hours’ notice may be treated as completed sessions and may not be eligible for rescheduling or refund.</span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-black">2. Service and Implementation Engagements</h2>
          <p>
            For multi‑phase service and implementation projects, including systems design, research, architecture, and execution, refunds (where considered) are based on the project stage and work completed at the time of the request.
          </p>
          
          <div className="overflow-x-auto border border-border rounded-xl my-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted text-gray-500 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Project Stage</th>
                  <th className="px-6 py-4 font-semibold">Refund Eligibility (up to)</th>
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

          <p className="font-semibold text-black mb-2">Refund calculations may account for:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Consultant allocation and research preparation time.',
              'Discovery and planning work already performed.',
              'Documented deliverables and work products completed to date.',
              'Administrative overhead and scheduling commitments.',
              'Payment gateway, banking, and international reconciliation costs.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 italic">
            Where a signed SOW or contract defines different percentages or milestones, those terms will apply.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">3. Systems and Prism Diagnostic (Upfront Payments)</h2>
          <p>
            Systems and Prism Diagnostic are structured, systems‑driven offerings that typically require upfront payment before any analysis or configuration begins.
          </p>
          <p className="font-semibold">Unless stated otherwise in the applicable Order Form or SOW:</p>
          
          <div className="space-y-4 pl-4 border-l-2 border-border">
            <div>
              <h3 className="font-semibold text-black mb-1">a) Before any work or data collection begins</h3>
              <p className="text-sm">
                If you request a refund before we collect any client information for the engagement and before configuration or onboarding work has started, a refund of up to 80% of fees paid may be considered on written request. This reflects initial scheduling, planning, and administrative effort already committed.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-1">b) After work has started and information has been collected</h3>
              <p className="text-sm mb-2">
                Once onboarding, diagnostic data collection, research, assessment, or configuration work has started, any refund request will be evaluated based on the project stage and completed work, using the same stage‑based structure defined in Section 2 (“Service and Implementation Engagements”).
              </p>
              <p className="text-sm">
                In such cases, we may consider a partial refund aligned to the documented stage (for example, Discovery/Onboarding, Research & Assessment, Strategy/Blueprint, or Implementation), taking into account the work already delivered, internal resources allocated, and costs incurred.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-black mb-1">c) After diagnostic outputs or reports are delivered</h3>
              <p className="text-sm">
                After Prism Diagnostic or Systems outputs/reports have been delivered, fees are non‑refundable, as the core value of these offerings lies in the expertise, analysis, and deliverables already provided.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic">
            Any specific refund rules or exceptions for Systems or Prism Diagnostic agreed in your signed contract will override this general policy.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">4. How to Request a Refund</h2>
          <p>To request a refund or raise a concern:</p>
          <p>Send a written request to <span className="font-semibold text-black">info@talavishiraajgroups.com</span> with:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Engagement name and reference.',
              'Invoice number(s).',
              'Reason for the request.',
              'Any supporting documentation.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <p className="font-semibold">We will review your request against:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'The project stage and work completed.',
              'The signed contract / SOW and this Refund Policy.',
              'Any supporting documentation and communication history.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            We generally aim to respond with an initial decision or clarification request within a reasonable business timeframe and to process any approved refund within a reasonable period after confirmation, subject to bank and payment‑gateway timelines.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">5. Payment Channels and Processing</h2>
          <p>Global payments are processed through approved international payment processors and banking partners. Refunds, where approved, are:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Issued only to the original payment method used for the transaction, and</span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Processed in the original billing currency, subject to exchange rates, bank charges, and international reconciliation timelines.</span>
            </li>
          </ul>
          <p>
            Due to currency conversion and fluctuating foreign exchange rates, the amount you receive back in your local currency may differ from the amount originally paid. Talavishiraaj Groups is not responsible for any foreign exchange losses, currency conversion differences, bank spreads, or international transaction/processing fees charged by your bank, card issuer, or payment provider in connection with the original payment or any refund.
          </p>
          <p className="text-sm text-gray-500 italic">
            We are not responsible for delays caused by banks, intermediaries, or payment‑gateway providers once the refund has been initiated from our side.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">6. Disputes and Escalation</h2>
          <p>If you disagree with a refund decision or have concerns about how your request was handled, you may escalate in writing via our official contact channel:</p>
          <p className="font-semibold p-4 bg-muted/30 border border-border rounded-xl text-black inline-block">
            <a href="mailto:info@talavishiraajgroups.com" className="hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>
          </p>
          <p>We will provide a structured review based on:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'The engagement documentation (proposal, SOW, MSA).',
              'Delivery‑stage evidence and internal logs.',
              'This Refund Policy and any applicable consumer or contract law.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            Nothing in this Refund Policy is intended to limit any non‑waivable statutory rights you may have under applicable consumer protection laws.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">7. Data Protection and Refunds</h2>
          <p>
            Refunds relate only to commercial fees and do not affect our obligations to protect any personal data or confidential information processed during an engagement. Once client information has been collected for Systems, Prism Diagnostic, or any other service, we will continue to handle that data in accordance with:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'our Privacy Policy,',
              'any applicable Data Processing Agreement (DPA) or confidentiality agreement with you, and',
              'the requirements of the DPDP Act and other applicable data protection laws.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Depending on the circumstances, we may be required to retain certain records for legal, audit, or compliance purposes even after a refund is processed or an engagement ends. Where retention is no longer necessary, we will delete or anonymise personal data in line with our internal data‑retention policies.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">8. Policy Updates</h2>
          <p>
            We may revise this Refund Policy from time to time to reflect changes in our services, payment infrastructure, or legal requirements. The updated version will be posted on this page with a new “Last Updated” date. Continued use of our services after changes take effect means you accept the updated terms.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
