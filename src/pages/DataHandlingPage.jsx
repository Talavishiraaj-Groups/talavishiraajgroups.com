import React from 'react';
import { motion } from 'framer-motion';

export default function DataHandlingPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <h1 className="text-3xl md:text-5xl font-semibold mb-8">Confidentiality & Data Handling</h1>
      
      <div className="prose prose-slate max-w-none space-y-8 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Protection of Proprietary Intelligence</h2>
          <p>
            Talavishiraaj Groups operates with the highest standards of confidentiality. We understand 
            that our engagements often involve sensitive operational data, proprietary frameworks, 
            and strategic growth plans.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Internal Framework Security</h2>
          <p>
            While we leverage advanced internal systems like the Ascendancy Crucible Engine for 
            operational analysis, these frameworks remain strictly internal. We protect our 
            proprietary methodology while delivering the actionable insights our clients need.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">Client Data Protocols</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data Minimalization:</strong> We only collect information strictly necessary for the diagnostic and implementation process.</li>
            <li><strong>Secure Storage:</strong> All client data is stored in encrypted, access-controlled environments.</li>
            <li><strong>Confidentiality Agreements:</strong> Every engagement is covered by standard non-disclosure terms to protect both parties.</li>
            <li><strong>Data Retention:</strong> Client data is retained only for as long as necessary to support the engagement and subsequent delivery quality reviews.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-black mb-4">System Visibility & Disclosure</h2>
          <p>
            Our public-facing website and communications are designed to communicate capability and 
            operational maturity without exposing internal operational doctrine, sequencing, or 
            proprietary GTM systems. This ensures a secure operational environment for both 
            Talavishiraaj Groups and our strategic partners.
          </p>
        </section>
      </div>
    </motion.div>
  );
}
