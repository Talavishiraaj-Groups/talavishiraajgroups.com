import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../seo';

const destinations = [
  { to: '/services', label: 'Capabilities', body: 'What we design, build, engineer and run.' },
  { to: '/systems', label: 'Prism', body: 'Our productised research and analysis engagement.' },
  { to: '/case-studies', label: 'Case studies', body: 'Anonymized accounts of completed work.' },
  { to: '/about', label: 'About', body: 'Who we are and how the organization works.' },
  { to: '/partnerships', label: 'Partnerships', body: 'How we collaborate with other organizations.' },
  { to: '/contact', label: 'Contact', body: 'Start a conversation with us.' },
];

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found | Talavishiraaj Groups"
        description="The page you requested does not exist. Browse our capabilities, systems, case studies or contact the team."
        path="/404"
        noindex
      />

      <section className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
          We could not find that page
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-10">
          The address may have changed, or the link that brought you here may be out of date. Everything
          on the site is reachable from the sections below.
        </p>

        <nav aria-label="Site sections">
          <ul className="grid gap-px bg-border border border-border rounded-2xl overflow-hidden sm:grid-cols-2 list-none">
            {destinations.map((item) => (
              <li key={item.to} className="bg-white">
                <Link to={item.to} className="block p-6 hover:bg-muted transition-colors h-full">
                  <span className="block font-semibold mb-1.5">{item.label}</span>
                  <span className="block text-sm text-gray-600 leading-relaxed">{item.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-10 text-sm text-gray-600">
          If you believe something is broken, write to us at{' '}
          <a
            href="mailto:info@talavishiraajgroups.com"
            className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
          >
            info@talavishiraajgroups.com
          </a>{' '}
          and we will look into it.
        </p>
      </section>
    </>
  );
}
