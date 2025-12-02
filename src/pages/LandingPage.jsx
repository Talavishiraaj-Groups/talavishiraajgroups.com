import React from 'react';
import { Link } from 'react-router-dom';
import { capabilityHighlights, clientProfiles, insightThemes } from '../data/services';
import ArrowIcon from '../components/icons/ArrowIcon';

export default function LandingPage() {
  return (
    <div className="bg-white text-primary">
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">Talavishiraaj Groups</p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
            Innovation Engineered. Execution Guaranteed.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Talavishiraaj Groups is a multi domain technology and innovation partner that designs, builds, and scales
            intelligent systems for startups, SMEs, and global organisations by combining strategy, AI, product
            engineering, R&amp;D, and growth into one execution layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-6 py-3 text-sm font-medium hover:bg-graphite transition-colors"
            >
              Explore what we do
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-primary hover:bg-muted transition-colors"
            >
              Talk to our team
            </Link>
          </div>
        </div>
        <div className="border border-border rounded-2xl p-6 bg-muted">
          <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase mb-4">How we work</div>
          <ul className="space-y-4 text-sm text-gray-700 list-none">
            <li className="flex items-start text-gray-700">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Operator-first mindset, not just advisory slides or audits.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>We stay involved from problem definition to rollout and scale.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Integrated view across business, technology, people, and data.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Who we are</p>
          <p className="text-lg md:text-xl text-gray-100">
            Talavishiraaj Groups is an execution-driven innovation partner. We bring together strategy, engineering,
            AI, R&amp;D, and growth under one roof to build systems that are designed to last, not just launched.
          </p>
          <p className="text-gray-300 text-base">
            We are not just a software company, not just a consulting firm, and not just an R&amp;D provider. We
            operate across these boundaries as a single accountable partner.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Capabilities</p>
          <h2 className="text-2xl md:text-3xl font-semibold">Capabilities built for real-world scale</h2>
          <p className="text-gray-600 max-w-3xl">
            Every engagement is anchored on measurable impact across technology consulting, AI &amp; automation,
            R&amp;D and engineering, startup and SME growth, and creative systems.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {capabilityHighlights.map((capability) => (
            <Link
              key={capability.title}
              to={capability.link}
              className="border border-border rounded-2xl p-6 hover:bg-muted transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{capability.copy}</p>
              <span className="text-sm font-medium text-primary">View services →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Who we work with</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">Built for teams with serious outcomes</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {clientProfiles.map((client) => (
              <div key={client.label} className="border border-border rounded-2xl p-5 bg-white">
                <h3 className="text-lg font-semibold mb-2">{client.label}</h3>
                <p className="text-sm text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Focus areas &amp; insights</p>
          <h2 className="text-2xl md:text-3xl font-semibold">Signals from our labs and operating rooms</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insightThemes.map((insight) => (
            <div key={insight.title} className="border border-border rounded-2xl p-5 flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{insight.tag}</span>
              <h3 className="text-lg font-semibold mb-3">{insight.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{insight.note}</p>
              <span className="text-xs text-gray-500 mt-4">Insights coming soon</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

