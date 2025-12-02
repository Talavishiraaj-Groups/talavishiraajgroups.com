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
        <p className="text-sm text-gray-500">Last Updated: November 2025</p>
        <p className="text-base md:text-lg text-gray-600">
          These Terms govern your access to and use of the Talavishiraaj Groups website. By using our site you agree to
          these Terms.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-20 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Use of the Website</h2>
          <p className="text-gray-600">You may use this website only for lawful purposes. You must not do the following.</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Attempt to gain unauthorised access to any part of the website or related systems',
              'Disrupt website functionality or degrade performance for other users',
              'Extract data using automated tools without written permission',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Services</h2>
          <p className="text-gray-600">
            We offer technology consulting, software development, AI solutions, research and development, product
            engineering, and creative and growth services.
          </p>
          <p className="text-gray-600">
            All service engagements are governed by separate agreements that define scope, deliverables, timelines, and
            payments. If there is any conflict between these Terms and a signed agreement the signed agreement will take
            priority for that engagement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p className="text-gray-600">
            All content on this website is the property of Talavishiraaj Groups unless stated otherwise. You may not copy
            or reproduce any content without permission from us or the relevant rights holder.
          </p>
          <p className="text-gray-600">See our Intellectual Property Policy for more details on ownership and usage.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Third Party Links</h2>
          <p className="text-gray-600">
            We may reference third party websites or tools for convenience. We are not responsible for external content,
            availability, security, or privacy practices and you should review the policies of those third parties
            separately.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="text-gray-600">To the maximum extent allowed by law Talavishiraaj Groups is not responsible for:</p>
          <ul className="space-y-2 text-sm text-gray-700 list-none">
            {[
              'Indirect or incidental losses',
              'Loss of data or profits',
              'Business interruption',
              'Actions you take based on website content alone',
            ].map((item) => (
              <li key={item} className="flex items-start text-gray-700">
                <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Results are not guaranteed unless they are clearly stated in a separate written contract.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Warranties</h2>
          <p className="text-gray-600">
            The website and its content are provided as is. We do not guarantee that access will be error free or
            uninterrupted or that the content will always be complete or current.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Termination</h2>
          <p className="text-gray-600">
            We may restrict or remove access to the website if we identify misuse, security threats, or activity that
            breaks these Terms or applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p className="text-gray-600">
            These Terms follow the laws of India unless a separate contract specifies a different jurisdiction for a
            particular engagement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Updates</h2>
          <p className="text-gray-600">
            We may revise these Terms from time to time. Continued use of the website after updates are published means you
            accept the revised Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="text-gray-600">
            For questions about these Terms please write to{' '}
            <span className="font-medium text-primary">info@talavishiraajgroups.com</span>.
          </p>
        </section>
      </section>
    </div>
  );
}


