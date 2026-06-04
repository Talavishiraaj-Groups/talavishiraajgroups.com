import React from 'react';
import { motion } from 'framer-motion';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function DataHandlingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-2 text-black">Confidentiality & Data Handling</h1>
      <p className="text-sm text-gray-500 mb-8">Last Updated: June 2026</p>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Protection of Proprietary Intelligence</h2>
          <p>
            Talavishiraaj Groups operates with strict confidentiality standards. We recognise that our engagements often involve sensitive operational data, proprietary frameworks, and strategic growth plans. All such information is treated as confidential and is protected under our standard non‑disclosure terms and, where applicable, separate NDAs and Data Processing Agreements (DPAs) agreed with clients.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Internal Framework Security</h2>
          <p>
            Talavishiraaj Groups utilises proprietary internal systems, frameworks, engines, methodologies, and operational architectures for analysis, configuration, and delivery of services. These internal assets remain strictly internal to Talavishiraaj Groups. We protect our proprietary methodology and intellectual property while focusing on delivering clear, actionable insights and outcomes for our clients.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Client Data Protocols</h2>
          <p>We apply the following principles and controls to client information:</p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Data Minimisation: </strong>We collect and process only the information strictly necessary for diagnostic and implementation purposes, in line with the DPDP Act and other applicable data protection laws.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Role‑Based Processing: </strong>For most website and marketing activities we act as a data fiduciary/controller. When processing client data within Systems, Prism Diagnostic, or other services, we act as a data processor under the relevant DPA or contractual terms.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Secure Storage: </strong>Client data is stored in encrypted, access‑controlled environments, with access limited to authorised team members who need it to deliver the engagement.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Confidentiality Agreements: </strong>Every engagement is covered by confidentiality and non‑disclosure obligations, either within the main contract (MSA/SOW) or through a separate NDA, to protect both parties.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Sub‑Processors and Tools: </strong>Where we rely on approved cloud providers, AI platforms, analytics, or other third‑party tools, we treat them as sub‑processors and require them to implement appropriate security and data protection safeguards.
              </span>
            </li>
            <li className="flex items-start">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1.5 text-primary flex-shrink-0" />
              <span>
                <strong className="text-black">Data Retention and Deletion: </strong>Client data is retained only for as long as necessary to support the engagement, delivery quality reviews, and any legal or compliance obligations. Thereafter, data is deleted or anonymised in accordance with our internal retention policies, contractual commitments, and applicable law.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-4 border border-red-200/50 bg-red-50/10 p-6 rounded-2xl">
          <h2 className="text-xl font-semibold text-black">Protection of Proprietary Frameworks and Intellectual Property</h2>
          <p>
            Talavishiraaj Groups retains all right, title, and interest in and to its proprietary methodologies, frameworks, diagnostic models, systems architectures, AI workflows, operational playbooks, implementation approaches, software, engines, algorithms, templates, documentation, research, and intellectual property developed before, during, or after any engagement.
          </p>
          <p>
            Clients receive only the limited rights expressly granted within the applicable engagement agreement. No transfer of ownership is implied or granted.
          </p>
          <p>
            Except where expressly authorised in writing, no person or organisation may copy, reproduce, reverse engineer, decompile, disclose, distribute, commercialise, train artificial intelligence systems upon, create derivative works from, or otherwise exploit Talavishiraaj Groups’ proprietary intellectual property.
          </p>
          <p className="font-semibold text-black">
            Clients may not use any deliverable, framework, methodology, report, documentation, communication, software, prompt structure, workflow architecture, output, recommendation, or proprietary material provided by Talavishiraaj Groups for the purpose of training, fine‑tuning, benchmarking, evaluating, improving, or developing any artificial intelligence, machine learning, automation, language model, software product, consulting methodology, or competing commercial offering.
          </p>
          <p className="text-sm text-red-700/80">
            Any unauthorised use shall constitute a material breach of contract and may result in legal action, injunctive relief, and recovery of damages to the fullest extent permitted by applicable law.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">System Visibility & Disclosure</h2>
          <p>
            Our public‑facing website, materials, and communications are designed to communicate capability and operational maturity without exposing internal operational doctrine, sequencing, or proprietary go‑to‑market systems. This protects both Talavishiraaj Groups and our clients, ensuring that sensitive operational models and architectures are not publicly disclosed while still providing sufficient transparency for informed decision‑making.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-black">Security and Incident Handling</h2>
          <p>
            We maintain technical and organisational security measures to protect client and internal data against unauthorised access, loss, or misuse. Where required, security events and data incidents are handled under our internal incident‑response procedures and, for personal data, in line with our Privacy Policy, DPAs, and applicable data protection regulations.
          </p>
          <p>For questions related to confidentiality, data handling, or intellectual property, you can contact us at:</p>
          <p className="font-semibold p-4 bg-muted/30 border border-border rounded-xl text-black inline-block">
            <a href="mailto:info@talavishiraajgroups.com" className="hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>
          </p>
        </section>
      </div>
    </motion.div>
  );
}
