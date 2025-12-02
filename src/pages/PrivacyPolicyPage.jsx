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
        <p className="text-sm text-gray-500">Last Updated: November 2025</p>
        <p className="text-base md:text-lg text-gray-600">
          Talavishiraaj Groups is committed to protecting your personal information and your right to privacy. This Privacy
          Policy explains what data we collect, how we use it, how we protect it, and what rights you have.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Information We Collect</h2>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <p className="text-gray-600">
              We collect the following information when you use our website or services.
            </p>
            <ul className="space-y-2 text-sm text-gray-700 list-none">
              {[
                'Name',
                'Email address',
                'Phone number',
                'Company name',
                'Project or inquiry details',
              ].map((item) => (
                <li key={item} className="flex items-start text-gray-700">
                  <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Usage Data</h3>
            <p className="text-gray-600">We collect analytics information such as the following.</p>
            <ul className="space-y-2 text-sm text-gray-700 list-none">
              {[
                'IP address',
                'Browser details',
                'Device information',
                'Time spent on pages',
                'Cookies and tracking information',
              ].map((item) => (
                <li key={item} className="flex items-start text-gray-700">
                  <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Project Data</h3>
            <p className="text-gray-600">
              When you contact us for work we collect project related information required to deliver our services.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <p className="text-gray-600">We use your information in the following ways.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Provide and improve services',
              'Respond to inquiries',
              'Communicate updates',
              'Analyse website usage',
              'Maintain security',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">We never sell your data.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Sharing of Data</h2>
          <p className="text-gray-600">We share information only with the following types of parties.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Service providers that support our operations',
              'Partners that assist in project execution',
              'Legal authorities when required by law',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Partners receive only minimal information and must protect it in line with this Privacy Policy and any
            applicable legal requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Cookies</h2>
          <p className="text-gray-600">
            We may use cookies for analytics, website performance, and session management. You may disable cookies through
            your browser settings, although some parts of the website may become less responsive.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Retention</h2>
          <p className="text-gray-600">
            We retain information only as long as needed for legal compliance or service delivery. You can request deletion
            of your personal information at any time and we will act in line with applicable laws.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Security</h2>
          <p className="text-gray-600">
            We use modern security practices to protect your data. No digital system is completely secure, but we take
            reasonable measures to safeguard your information and regularly review our controls.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p className="text-gray-600">You have the right to take the following actions in relation to your data.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Request access to your data',
              'Request corrections',
              'Request deletion',
              'Withdraw consent where applicable',
              'Request a copy of your data',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Contact us at <span className="font-medium text-primary">info@talavishiraajgroups.com</span> to exercise your
            rights or to ask questions about this Policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">International Transfers</h2>
          <p className="text-gray-600">
            If we work with clients or partners in other regions your data may be transferred globally. We use appropriate
            safeguards to protect your information when it moves across borders.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Updates</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time. Continued use of our website after changes take effect
            means you accept the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-600">
            For questions about this Policy or our data practices please write to{' '}
            <span className="font-medium text-primary">info@talavishiraajgroups.com</span>.
          </p>
        </section>
      </section>
    </div>
  );
}


