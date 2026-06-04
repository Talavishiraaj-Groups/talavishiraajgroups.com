import React from 'react';
import { motion } from 'framer-motion';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function DeliveryPolicyPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-black">Delivery Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section className="space-y-4">
          <p>
            Talavishiraaj Groups is committed to professional, timely, and structured delivery of all workflow intelligence and implementation services. Our delivery framework is designed to ensure transparency, quality, and measurable outcomes at every engagement stage.
          </p>
          <p>
            This Delivery Policy provides general guidance and works together with the specific terms, Statement(s) of Work, and Master Services Agreement for each engagement. If there is any conflict, the signed agreement will take precedence for that engagement.
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Delivery Timelines</h2>
          <p>Delivery timelines vary by engagement type and are subject to the following general parameters:</p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Diagnostic Engagements (including Prism Diagnostic): </strong>Typically completed within 10–13 business days from confirmed intake and completion of the required client information forms.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Implementation Engagements: </strong>Project‑specific timelines are defined in the initial Strategic Roadmap and communicated clearly at engagement initiation.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Consultation Sessions: </strong>Scheduled within agreed availability windows; timing is subject to mutual scheduling confirmation.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Stakeholder Dependencies: </strong>All timelines are subject to stakeholder responsiveness and the timely sharing of required organisational information, access, and approvals.
              </span>
            </li>
          </ul>
          <p className="text-sm text-gray-500 italic mt-2">
            Timelines communicated at the start of an engagement are planning estimates and may be adjusted by mutual agreement based on updated scope, dependencies, and priorities.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Client Responsibilities</h2>
          <p>Successful, timely delivery is a collaborative effort. Clients are expected to support the engagement through:</p>
          <ul className="space-y-2 list-none pl-0">
            {[
              'Timely sharing of required organisational information and relevant data.',
              'Stakeholder availability for structured sessions and feedback rounds.',
              'Prompt communication, clarifications, and approval turnarounds.',
              'Coordination support during active implementation phases.',
              'Designation of a primary point of contact for engagement coordination.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-600">
            Delays arising from insufficient client responsiveness, unavailability of required information, or third‑party constraints may extend the delivery timeline accordingly. Such delays and dependency‑driven shifts do not constitute a delivery failure or breach of commitment by Talavishiraaj Groups.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Scope Clarification</h2>
          <p>Delivery scope is defined at engagement initiation and governed by the agreed engagement parameters. The following clarifications apply to all engagements:</p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Diagnostic vs. Implementation Scope: </strong>Diagnostic engagements, including Prism Diagnostic and other Systems diagnostics, produce visibility, recommendations, and a structured roadmap. They do not include direct implementation unless a separate implementation engagement is initiated.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Excluded Items: </strong>Items not explicitly included in the engagement scope, proposal, or Statement of Work are excluded from delivery. Scope extensions or changes require a separate agreement and may impact timelines and fees.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Dependency Limitations: </strong>Deliverables dependent on third‑party systems, client data, or external approvals are subject to those dependencies and may affect the delivery timeline and approach.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Engagement Assumptions: </strong>All engagements operate on the assumption that provided information is accurate and complete. Material inaccuracies or omissions may require scope reassessment and timeline revision.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Communication Structure</h2>
          <p>Professional, structured communication is central to our delivery process:</p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Scheduling: </strong>All sessions are scheduled through agreed communication channels with sufficient notice provided to both parties.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Timezone Flexibility: </strong>We accommodate cross‑timezone engagements and agree on scheduling windows at the outset of each engagement.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Communication Channels: </strong>Primary communication is conducted through agreed digital channels. All material decisions, approvals, and confirmations are documented in writing.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Progress Updates: </strong>For longer engagements, structured progress updates are provided at agreed intervals to maintain alignment and clarity.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Standard Deliverables</h2>
          <p>For diagnostic engagements, delivery typically includes a structured package containing:</p>
          <ul className="space-y-2 list-none pl-0">
            {[
              'Comprehensive report and strategy documentation (digital format, such as PDF).',
              'Recorded clarity or review session (secure video delivery where applicable).',
              'Visual workflow and systems maps.',
              'Actionable implementation roadmap.',
              'Supporting documentation and reference assets as relevant.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 italic mt-2">
            Implementation engagement deliverables are project‑specific and defined within the engagement roadmap, proposal, and/or Statement of Work.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 border-l-2 border-border pl-4">
          <h2 className="text-xl font-semibold text-black">Data Protection and Confidentiality</h2>
          <p>
            Any client information and data processed as part of diagnostic or implementation engagements is handled in accordance with our Privacy Policy, applicable Data Processing Agreements (DPAs) or NDAs, and relevant data protection laws, including the DPDP Act where applicable.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4 border-l-2 border-border pl-4">
          <h2 className="text-xl font-semibold text-black">Outcome Disclaimer</h2>
          <p>
            While we strive to deliver high‑quality diagnostics, strategies, and implementations, all engagements are provided on a professional best‑effort basis. Delivery of services, recommendations, or roadmaps does not by itself guarantee specific business outcomes such as revenue growth, lead volume, or other performance metrics, unless expressly agreed in a separate signed contract.
          </p>
          <p className="text-sm text-gray-500">
            For information on fees, cancellations, and partial refunds, please refer to our Refund Policy.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
