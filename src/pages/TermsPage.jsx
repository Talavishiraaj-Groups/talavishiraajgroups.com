import React from 'react';
import ArrowIcon from '../components/icons/ArrowIcon';

const metaTitle = 'Terms of Service | Talavishiraaj Groups';
const metaDescription =
  'Review the terms that govern access to and use of the Talavishiraaj Groups website and services, including acceptable use and liability limits.';

export default function TermsPage() {
  return (
    <div className="bg-white text-primary">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Legal</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Terms of Service</h1>
        <p className="text-sm text-gray-500">Last Updated: April 2026</p>
        <p className="text-base md:text-lg text-gray-600">
          These Terms of Service (“Terms”) govern your access to and use of the websites operated by Talavishiraaj Groups (including tjgroups.com and talavishiraajgroups.com) (collectively, the “Site”). By accessing or using the Site, you agree to be bound by these Terms.
        </p>
        <p className="text-sm text-gray-500 italic">
          If you do not agree to these Terms, you must not use the Site.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-12 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">1. Who We Are</h2>
          <p>
            The Site is operated by Talavishiraaj Groups, a remote‑first organisation based in India and serving clients globally (“Talavishiraaj Groups”, “we”, “us”, or “our”). You can contact us at{' '}
            <a href="mailto:info@talavishiraajgroups.com" className="font-semibold text-black hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>{' '}
            for questions about these Terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">2. Eligibility and Account Responsibility</h2>
          <p>
            The Site is intended for use by individuals who are at least 18 years old and acting on their own behalf or on behalf of their organisation. By using the Site, you represent that you meet these requirements and have authority to bind your organisation, if applicable.
          </p>
          <p>
            If you create or are provided with any account credentials for our systems or products, you are responsible for keeping those credentials confidential and for all activities that occur under your account.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">3. Use of the Site</h2>
          <p>You may use this Site only for lawful purposes and in accordance with these Terms. You agree that you will not:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Attempt to gain unauthorised access to any part of the Site, our systems, or any related networks.',
              'Interfere with or disrupt the operation of the Site or degrade performance for other users.',
              'Use any automated tools (such as bots, scrapers, or crawlers) to access, extract, or index data from the Site without our prior written permission.',
              'Use the Site in a way that violates any applicable law or infringes the rights of any person or entity.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400">We may monitor use of the Site for security and operational purposes.</p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">4. Services and Separate Agreements</h2>
          <p>
            Talavishiraaj Groups provides technology consulting, software development, AI solutions, research and development, product engineering, and creative and growth services, including systems‑oriented products such as Prism Diagnostic.
          </p>
          <p>
            All service engagements, including access to or use of our Systems products, are governed by separate written agreements (such as proposals, Statements of Work, Master Services Agreements, or Data Processing Agreements) that define scope, deliverables, timelines, payments, and specific legal terms.
          </p>
          <p>
            If there is any conflict between these Terms and a signed agreement between you (or your organisation) and Talavishiraaj Groups, the signed agreement will take priority for that engagement.
          </p>
          <p className="text-sm text-gray-500 italic">
            The Site content is for general information only and does not by itself create a client relationship or a binding offer to provide services.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">5. Intellectual Property (Site Content)</h2>
          <p>
            All content on this Site—including text, graphics, logos, icons, images, audio or video clips, and software—is owned by or licensed to Talavishiraaj Groups, unless stated otherwise, and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may view and use the Site for your internal business purposes only. You may not copy, reproduce, modify, distribute, publicly display, or create derivative works from any content on the Site without our prior written permission or the permission of the relevant rights holder.
          </p>
          <p>
            If you submit feedback, ideas, or suggestions about our services or products, you grant us a non‑exclusive, worldwide, royalty‑free licence to use that feedback for any lawful purpose related to our business, without obligation to you.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4 border border-red-200/50 bg-red-50/10 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-black">6. Protection of Proprietary Frameworks and Intellectual Property</h2>
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

        {/* Section 7 */}
        <section className="space-y-4 border border-blue-200/50 bg-blue-50/10 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold text-black">7. AI‑Assisted Services Disclaimer</h2>
          <p>
            Certain services, diagnostics, recommendations, analyses, reports, or outputs may be generated or assisted by artificial intelligence, machine learning, automation systems, or proprietary decision‑support frameworks.
          </p>
          <p>
            While Talavishiraaj Groups applies professional review and quality controls where appropriate, AI‑assisted outputs may contain inaccuracies, omissions, assumptions, or limitations. Such outputs are provided for informational and decision‑support purposes and are not a substitute for independent professional judgment.
          </p>
          <p className="font-semibold text-black">
            Clients remain responsible for independently validating recommendations before implementing strategic, operational, financial, legal, regulatory, employment, security, or commercial decisions. Talavishiraaj Groups does not guarantee that AI‑assisted outputs will be error‑free, complete, or suitable for every circumstance.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">8. User Content</h2>
          <p>
            If the Site allows you to upload or submit any content (such as forms, files, messages, or comments), you are responsible for that content and you must ensure that you have all necessary rights to share it with us.
          </p>
          <p>You must not submit any content that:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Is unlawful, defamatory, or infringes any third‑party rights.',
              'Contains malicious code or security threats.',
              'Violates applicable data protection or confidentiality obligations you owe to others.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            By submitting content to us through the Site, you grant us the right to use that content as reasonably necessary to respond to your requests, evaluate potential engagements, and provide services to you.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">9. Privacy</h2>
          <p>
            Your use of the Site is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data.
          </p>
          <p>
            We do not currently use cookies or third‑party tracking technologies on our public websites for marketing or behavioural profiling. If this changes, we will update our Privacy Policy and, where appropriate, provide additional notice or consent mechanisms.
          </p>
          <p className="text-sm font-semibold text-black">
            By using the Site, you acknowledge that you have read our Privacy Policy.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">10. Third‑Party Links and Tools</h2>
          <p>
            The Site may contain links to third‑party websites, resources, or tools. These are provided for your convenience only. We do not control, endorse, or assume responsibility for any third‑party sites, content, products, or services.
          </p>
          <p>
            You should review the terms and policies of those third parties before using their sites or services.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">11. Disclaimers</h2>
          <p>
            The Site and its content are provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim all warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non‑infringement.
          </p>
          <p>
            We do not guarantee that the Site will be error‑free or uninterrupted, that defects will be corrected, or that the Site or its servers are free of viruses or other harmful components. We do not guarantee that information on the Site is complete, accurate, or current, and it should not be relied upon as professional advice.
          </p>
          <p className="text-sm font-semibold italic">
            Any results or outcomes mentioned on the Site are illustrative only. Actual results may vary and are subject to the terms of specific written agreements.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">12. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Talavishiraaj Groups and its directors, employees, contractors, subcontractors, advisors, and representatives will not be liable for:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Any indirect, incidental, consequential, special, or punitive damages;',
              'Any loss of profits, revenue, data, or business opportunities;',
              'Any loss or damage resulting from your use of, or reliance on, the Site or its content.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            In no event shall Talavishiraaj Groups’ aggregate liability arising out of or related to any engagement or to these Terms (whether in contract, tort, or otherwise) exceed the total fees actually paid by the client to Talavishiraaj Groups for the specific engagement or service giving rise to the claim. For purely Site‑related claims where no fees have been paid, our aggregate liability will be limited to INR 10,000 (or equivalent).
          </p>
          <p>
            Nothing in these Terms limits or excludes liability that cannot be limited or excluded under applicable law.
          </p>
          <p className="text-xs text-gray-500">
            Where a separate signed agreement applies to a specific service engagement, any liability will be governed by the limitations and exclusions in that agreement.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">13. Force Majeure</h2>
          <p>
            Talavishiraaj Groups shall not be liable for any delay or failure in performance resulting from events beyond its reasonable control, including natural disasters, acts of God, pandemics, wars, terrorism, civil unrest, internet or telecommunications outages, cyber incidents, government actions, changes in law, labour disruptions, infrastructure failures, or third‑party service interruptions, including failures of hosting or cloud providers (“Force Majeure Events”).
          </p>
          <p>
            If a Force Majeure Event occurs, we will use commercially reasonable efforts to mitigate its impact and resume performance as soon as reasonably practicable.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">14. Independent Contractor Relationship</h2>
          <p>
            Nothing in these Terms or in any engagement shall be interpreted as creating a partnership, joint venture, agency relationship, employment relationship, or fiduciary relationship between you and Talavishiraaj Groups.
          </p>
          <p>
            Talavishiraaj Groups acts as an independent contractor, and each party remains responsible for its own employees, taxes, and obligations.
          </p>
        </section>

        {/* Section 15 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">15. Non‑Circumvention</h2>
          <p>
            Clients shall not knowingly circumvent Talavishiraaj Groups to directly engage, hire, contract, solicit, or otherwise obtain services from personnel, contractors, partners, consultants, or resources introduced by Talavishiraaj Groups in connection with an engagement, without our prior written consent.
          </p>
          <p>
            This non‑circumvention obligation applies during the term of the relevant engagement and for a reasonable period of twelve (12) months following its completion or termination, unless a different period is specified in a separate signed agreement.
          </p>
        </section>

        {/* Section 16 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">16. Export Control and Sanctions Compliance</h2>
          <p>
            Clients agree not to use Talavishiraaj Groups’ services, systems, or deliverables in violation of applicable export control laws, sanctions regulations, anti‑corruption laws, or international trade restrictions.
          </p>
          <p>In particular, you agree not to use our services to:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Provide services or access to sanctioned individuals or entities;',
              'Export or re‑export controlled technology or data to restricted countries or users;',
              'Facilitate activities that would cause either party to violate applicable export, sanctions, or anti‑corruption laws.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-red-700/80">
            We reserve the right to suspend or terminate services where we reasonably believe that continued performance could violate such laws.
          </p>
        </section>

        {/* Section 17 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">17. Dispute Resolution, Arbitration, and Governing Law</h2>
          <p>
            The parties will first attempt to resolve any dispute, controversy, or claim arising out of or relating to these Terms or any related engagement through good‑faith discussions between senior decision‑makers.
          </p>
          <p>
            If the dispute is not resolved within a reasonable period, it shall be finally resolved by arbitration in Bengaluru, Karnataka, India, in accordance with the Arbitration and Conciliation Act, 1996 (as amended), and the rules applicable to domestic arbitration in India. The arbitration shall be conducted in English by a sole arbitrator appointed by mutual agreement of the parties, or failing such agreement, in accordance with the Act.
          </p>
          <p>
            The arbitral award shall be final and binding on the parties and may be enforced in any court of competent jurisdiction.
          </p>
          <p>
            These Terms are governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Subject to the arbitration provisions above, the courts located at Bengaluru, Karnataka, India shall have exclusive jurisdiction for any proceedings allowed under applicable law that are not required to be resolved through arbitration.
          </p>
        </section>

        {/* Section 18 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">18. Survival</h2>
          <p>
            The following provisions will survive termination or expiration of these Terms and any related engagement, to the extent necessary to give them effect: intellectual property ownership and licence grants, confidentiality, data protection, limitation of liability, disclaimers, non‑circumvention, export control and sanctions compliance, dispute resolution and arbitration, governing law and jurisdiction, and any payment and indemnity obligations that have accrued prior to termination.
          </p>
        </section>

        {/* Section 19 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">19. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time, for example to reflect changes in law, technology, or our services. When we do, we will post the updated Terms on this page with a new “Last Updated” date.
          </p>
          <p>
            Your continued use of the Site after updated Terms are published means you accept the revised Terms. If you do not agree to the changes, you should stop using the Site.
          </p>
        </section>

        {/* Section 20 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">20. Contact</h2>
          <p>For questions about these Terms, please write to:</p>
          <p className="font-semibold p-4 bg-muted/30 border border-border rounded-xl text-black inline-block">
            <a href="mailto:info@talavishiraajgroups.com" className="hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>
          </p>
        </section>
      </section>
    </div>
  );
}
