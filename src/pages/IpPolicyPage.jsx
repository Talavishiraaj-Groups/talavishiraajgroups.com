import React from 'react';
import ArrowIcon from '../components/icons/ArrowIcon';

const metaTitle = 'Intellectual Property Policy | Talavishiraaj Groups';
const metaDescription =
  'Understand how Talavishiraaj Groups manages company and client intellectual property, project deliverables, and reporting of IP concerns.';

export default function IpPolicyPage() {
  return (
    <div className="bg-white text-primary">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Legal</p>
        <h1 className="text-3xl md:text-5xl font-semibold">Intellectual Property Policy</h1>
        <p className="text-sm text-gray-500">Last Updated: November 2025</p>
        <p className="text-base md:text-lg text-gray-600">
          This Policy explains how Talavishiraaj Groups manages intellectual property across our website, services, and
          client engagements.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Company Intellectual Property</h2>
          <p className="text-gray-600">The following items belong to Talavishiraaj Groups.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Brand name, trademarks, and logos',
              'Website design and content',
              'Software code and frameworks',
              'Research and development outputs, prototypes, and models',
              'Training material and creative assets',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">Unauthorised use of company intellectual property is not permitted.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Client Intellectual Property</h2>
          <p className="text-gray-600">
            Client supplied materials remain the property of the client. We use client materials only to deliver agreed
            services and we maintain confidentiality in line with contracts and applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual Property Created During Projects</h2>
          <p className="text-gray-600">By default the following applies unless a contract clearly states something else.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Deliverables created for the client become the property of the client upon full payment',
              'Internal tools, reusable components, and frameworks remain property of Talavishiraaj Groups',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Open Source Usage</h2>
          <p className="text-gray-600">
            We comply with licenses of any open source tools used in our projects and we disclose major dependencies on
            request when it is appropriate to do so.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Confidentiality</h2>
          <p className="text-gray-600">
            All project information is treated as confidential unless the client makes it public or we are legally required
            to disclose it. Confidentiality commitments may also be defined in specific contracts or non disclosure
            agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Prohibited Use</h2>
          <p className="text-gray-600">You may not do the following with our intellectual property.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Reverse engineer or resell our code or internal tools',
              'Copy our branding in a way that could cause confusion',
              'Claim ownership of our research, prototypes, or internal models',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Reporting</h2>
          <p className="text-gray-600">
            If you believe your intellectual property rights have been violated please email us at{' '}
            <span className="font-medium text-primary">info@talavishiraajgroups.com</span>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Updates</h2>
          <p className="text-gray-600">
            We may update this Policy from time to time. Continued use of our website or services after updates means you
            accept the latest version of this Policy.
          </p>
        </section>
      </section>
    </div>
  );
}


