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
            operational intelligence and implementation services. Our delivery process is designed 
            to ensure transparency, quality, and measurable outcomes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Consultation & Diagnostic Timelines</h2>
          <p>
            For consultation and diagnostic engagements, including the Prism Diagnostic:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Delivery Timeline:</strong> Typically completed within 10–13 business days.</li>
            <li><strong>Dependencies:</strong> Timelines are subject to stakeholder responsiveness and scheduling availability.</li>
            <li><strong>Readout Sessions:</strong> Recorded via Google Meet and provided as part of the final delivery package.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Implementation & Long-term Projects</h2>
          <p>
            Implementation timelines are project-specific and will be outlined in the initial 
            Strategic Roadmap. Delivery occurs in structured sprints or stages, with regular 
            status updates and quality checks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Client Responsibilities</h2>
          <p>
            Successful delivery is a collaborative effort. Clients are responsible for:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Timely sharing of required operational information and data</li>
            <li>Stakeholder availability for interviews and feedback sessions</li>
            <li>Prompt communication and approval responsiveness</li>
            <li>Operational cooperation during implementation phases</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Final Deliverables</h2>
          <p>
            Standard delivery for diagnostics includes a structured ZIP delivery package containing:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comprehensive PDF report/deck</li>
            <li>Recorded readout session (Google Meet recording)</li>
            <li>Operational roadmaps and supporting assets</li>
            <li>Implementation blueprints (where applicable)</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
}
