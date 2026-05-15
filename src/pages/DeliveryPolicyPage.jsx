import React from 'react';
import { motion } from 'framer-motion';

export default function DeliveryPolicyPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-8">Delivery Policy</h1>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Service Delivery Framework</h2>
          <p>
            Talavishiraaj Groups is committed to professional, timely, and structured delivery of all 
            workflow intelligence and implementation services. Our delivery framework is designed 
            to ensure transparency, quality, and measurable outcomes at every engagement stage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Delivery Timelines</h2>
          <p className="mb-4">
            Delivery timelines vary by engagement type and are subject to the following general parameters:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Diagnostic Engagements:</strong> Typically completed within 10–13 business days from confirmed intake.</li>
            <li><strong>Implementation Engagements:</strong> Project-specific timelines are defined in the initial Strategic Roadmap and communicated clearly at engagement initiation.</li>
            <li><strong>Consultation Sessions:</strong> Scheduled within agreed availability windows; timeline subject to mutual scheduling confirmation.</li>
            <li><strong>Stakeholder Dependencies:</strong> All timelines are subject to stakeholder responsiveness and the timely sharing of required organizational information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Client Responsibilities</h2>
          <p>
            Successful, timely delivery is a collaborative effort. Clients are expected to support the engagement through:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Timely sharing of required organizational information and relevant data</li>
            <li>Stakeholder availability for structured sessions and feedback rounds</li>
            <li>Prompt communication responsiveness and approval turnarounds</li>
            <li>Coordination support during active implementation phases</li>
            <li>Designating a primary point of contact for engagement coordination</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Delays arising from insufficient client responsiveness or unavailability of required information 
            may extend the delivery timeline accordingly. Such delays do not constitute a delivery failure 
            on the part of Talavishiraaj Groups.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Scope Clarification</h2>
          <p>
            Delivery scope is defined at engagement initiation and governed by the agreed engagement parameters. 
            The following clarifications apply to all engagements:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Diagnostic vs. Implementation Scope:</strong> Diagnostic engagements produce visibility, recommendations, and a structured roadmap. They do not include direct implementation unless a separate implementation engagement is initiated.</li>
            <li><strong>Excluded Items:</strong> Items not explicitly included in the engagement scope are excluded from delivery. Scope extensions require a separate agreement.</li>
            <li><strong>Dependency Limitations:</strong> Deliverables dependent on third-party systems, client data, or external approvals are subject to those dependencies and may affect timeline.</li>
            <li><strong>Engagement Assumptions:</strong> All engagements operate on the assumption that provided information is accurate and complete. Material inaccuracies may require scope reassessment.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Communication Structure</h2>
          <p>
            Professional, structured communication is central to our delivery process:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Scheduling:</strong> All sessions are scheduled through agreed communication channels with sufficient notice provided to both parties.</li>
            <li><strong>Timezone Flexibility:</strong> We accommodate cross-timezone engagements and agree on scheduling windows at the outset of each engagement.</li>
            <li><strong>Communication Channels:</strong> Primary communication is conducted through agreed digital channels. All material decisions and confirmations are documented in writing.</li>
            <li><strong>Progress Updates:</strong> For longer engagements, structured progress updates are provided at agreed intervals to maintain alignment and clarity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Standard Deliverables</h2>
          <p>
            For diagnostic engagements, delivery includes a structured delivery package containing:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comprehensive PDF report and strategy documentation</li>
            <li>Recorded clarity session (secure video delivery)</li>
            <li>Visual workflow and systems maps</li>
            <li>Actionable implementation roadmap</li>
            <li>Supporting documentation and reference assets</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            Implementation engagement deliverables are project-specific and defined within the engagement roadmap.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
