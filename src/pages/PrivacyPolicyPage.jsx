import React from 'react';
import ArrowIcon from '../components/icons/ArrowIcon';

const metaTitle = 'Privacy Policy | Talavishiraaj Groups';
const metaDescription =
  'Read how Talavishiraaj Groups collects, uses, protects, and shares your personal information, along with your data rights and contact details.';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-primary">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Legal</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: June 2026</p>
        <p className="text-base md:text-lg text-gray-600">
          Talavishiraaj Groups (“we”, “us”, “our”) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what data we collect, how we use it, how we protect it, and what rights you have under applicable laws, including the Digital Personal Data Protection Act, 2023 (“DPDP Act”).
        </p>
        <p className="text-sm text-gray-500 italic">
          By using our website, Systems products (including Prism Diagnostic), or engaging with us as a client or partner, you agree that your personal data will be handled as described in this Policy.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-12 text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">1. Who We Are and Scope</h2>
          <p>This Policy applies to:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Visitors to our websites (including tjgroups.com and talavishiraajgroups.com).',
              'Prospective and existing clients, partners, and suppliers.',
              'Users of our systems‑oriented services and products, including Prism Diagnostic.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Talavishiraaj Groups operates as a remote‑first organisation based in India and serving clients globally. For most website and marketing activities we act as a “Data Fiduciary” under the DPDP Act and as a “data controller” under other data protection laws where applicable. When we process personal data on behalf of our clients (for example, through Systems or Prism Diagnostic), we act as a “Data Processor” under the relevant Data Processing Agreement (DPA) or similar terms.
          </p>
          <p>
            You can contact us at:{' '}
            <a href="mailto:info@talavishiraajgroups.com" className="font-semibold text-black hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-black">2. Information We Collect</h2>
          <p>We collect personal information in the following situations.</p>

          <div className="space-y-3 pl-4 border-l-2 border-border">
            <h3 className="text-lg font-semibold text-black">2.1. Information you provide directly</h3>
            <p>When you interact with us, you may provide:</p>
            <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
              {[
                'Name',
                'Email address',
                'Phone number',
                'Company name and role',
                'Project, inquiry, or diagnostic details',
                'Billing and invoicing details (for paying clients)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600">
              This includes data submitted through contact forms, demo requests, consultations, Systems/Prism onboarding forms, and direct email or messaging channels.
            </p>
          </div>

          <div className="space-y-3 pl-4 border-l-2 border-border">
            <h3 className="text-lg font-semibold text-black">2.2. Usage and device data</h3>
            <p>When you visit our websites or use our products, our servers may automatically log:</p>
            <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
              {[
                'IP address and approximate location',
                'Browser type and version',
                'Device identifiers and operating system',
                'Pages viewed, time spent, and navigation paths',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600">
              This information is collected through server logs and basic analytics at the infrastructure level, not through third‑party tracking pixels or marketing cookies.
            </p>
          </div>

          <div className="space-y-3 pl-4 border-l-2 border-border">
            <h3 className="text-lg font-semibold text-black">2.3. Project and diagnostic data</h3>
            <p>When you engage us for work or use our products, we may process:</p>
            <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
              {[
                'Project‑related information and datasets you share',
                'Configuration details, prompts, parameters, and files you upload',
                'Outputs and reports generated by Prism Diagnostic or other Systems products',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600">
              This data may include personal data of your customers, employees, or partners, depending on how you choose to use our services. In those cases we process personal data as your Data Processor under a separate DPA or similar terms.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'To provide, operate, and improve our services and products, including Systems and Prism Diagnostic.',
              'To respond to your inquiries, proposals, and support requests.',
              'To configure, implement, and maintain solutions for you as a client.',
              'To send you service‑related communications, updates, and security notices.',
              'To analyse usage and improve performance, reliability, and user experience.',
              'To maintain the security of our systems, prevent abuse, and detect fraud.',
              'To comply with legal obligations and respond to lawful requests from authorities.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>We may also use anonymised or aggregated data derived from project and diagnostic data to:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-4 border-l-2 border-border/50">
            {[
              'Improve our models, systems, and internal research.',
              'Develop benchmarks and insights that do not identify any individual or client.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-semibold text-black">We do not sell your personal data.</p>
        </section>

        {/* Section 4 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">4. Legal Bases and Consent</h2>
          <p>Where required by law, we rely on one or more of the following legal bases to process your personal data:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Your consent (e.g., for certain marketing communications).',
              'Performance of a contract with you or your organisation (e.g., to deliver a project or diagnostic engagement).',
              'Our legitimate interests in operating, securing, and improving our business, provided these are not overridden by your rights.',
              'Compliance with legal obligations or to establish, exercise, or defend legal claims.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            You can withdraw consent for marketing at any time by using an unsubscribe link or contacting us at{' '}
            <a href="mailto:info@talavishiraajgroups.com" className="font-semibold text-black hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">5. Sharing of Data</h2>
          <p>We may share your information with:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Service providers and sub‑processors who support our operations (for example, cloud hosting, AI model providers, infrastructure analytics, payment processors, email delivery services).',
              'Partners and subcontractors who help us deliver specific projects, subject to appropriate confidentiality and data protection obligations.',
              'Professional advisers (such as auditors and lawyers) where reasonably necessary.',
              'Legal authorities when required by law or to protect our rights, users, or the public.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            We share only the minimum information needed and require our service providers and partners to process personal data in line with this Policy and applicable data protection laws.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">6. International Transfers</h2>
          <p>
            Because we work with clients and service providers globally, your personal data may be transferred to and processed in countries other than your own, which may have different data protection laws.
          </p>
          <p>
            Where we transfer personal data across borders, we implement appropriate safeguards as required by the DPDP Act and other applicable laws, such as contractual protections and security measures.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">7. Cookies and Similar Technologies</h2>
          <p>
            We do not currently use cookies or third‑party tracking technologies on our public websites for marketing or behavioural profiling. However, our servers may log technical information as described in Section 2.2 for security and operational purposes.
          </p>
          <p>
            If we introduce cookies or similar tracking technologies in the future, we will update this Policy and, where required, provide a separate notice or consent mechanism before such technologies are enabled.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">8. Data Retention</h2>
          <p>We retain personal data only for as long as necessary to fulfil the purposes described in this Policy, including:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'providing services and maintaining business records;',
              'complying with legal, accounting, or reporting requirements;',
              'resolving disputes and enforcing our agreements.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            When data is no longer needed, we will delete or anonymise it in line with our internal policies and applicable law. You may also request deletion of your personal data (see Section 9).
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">9. Your Rights and Choices</h2>
          <p>Under the DPDP Act and other applicable laws, you may have the right to:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none pl-0">
            {[
              'Request access to the personal data we hold about you.',
              'Request corrections to inaccurate or incomplete data.',
              'Request deletion of your personal data, subject to legal limitations.',
              'Withdraw consent to processing where we rely on consent.',
              'Request a copy of your personal data in a portable format, where feasible.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            To exercise these rights, please contact us at{' '}
            <a href="mailto:info@talavishiraajgroups.com" className="font-semibold text-black hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>{' '}
            with sufficient details to identify you and your request. We may need to verify your identity before acting on your request.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">10. Grievance and Data Protection Contact</h2>
          <p>
            We take privacy‑related concerns seriously. If you have a concern or grievance about how we handle your personal data, you can contact our Grievance Officer / Data Protection Lead at:
          </p>
          <p className="font-semibold p-4 bg-muted/30 border border-border rounded-xl text-black inline-block">
            <a href="mailto:info@talavishiraajgroups.com" className="hover:text-gray-600 underline">
              info@talavishiraajgroups.com
            </a>
          </p>
          <p>
            We will aim to acknowledge and address your grievance within timelines required by the DPDP Act and applicable rules.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">11. Security</h2>
          <p>
            We use reasonable technical and organisational measures to protect your personal data from accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access.
          </p>
          <p>
            No system is completely secure, and we cannot guarantee absolute security. However, we regularly review and improve our security controls and practices.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">12. Children’s Privacy</h2>
          <p>
            Our services and website are not directed to children under the age of 18, and we do not knowingly collect personal data from children. If you believe that a child has provided us with personal data, please contact us and we will take appropriate steps.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">13. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in law, technology, or our business practices. We will post the updated version on this page with a new “Last Updated” date.
          </p>
          <p>
            If changes are material, we may notify you through additional means (for example, by email or a site notice) where appropriate. Continued use of our website or services after changes take effect means you accept the updated terms.
          </p>
        </section>

        {/* Section 14 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-black">14. Contact</h2>
          <p>If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
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
