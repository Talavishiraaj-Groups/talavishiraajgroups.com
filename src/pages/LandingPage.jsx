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
            Workflow Intelligence. Structured Execution. Scalable Systems.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            Talavishiraaj Groups is a research-led, systems-oriented organization. We build and scale 
            intelligent infrastructure for enterprise-ready businesses by combining strategic consulting, 
            AI-assisted systems, and structured implementation into one cohesive execution layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/systems"
              className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-6 py-3 text-sm font-medium hover:bg-graphite transition-colors"
            >
              Explore our systems
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-primary hover:bg-muted transition-colors"
            >
              Initiate engagement
            </Link>
          </div>
        </div>
        <div className="border border-border rounded-2xl p-6 bg-muted">
          <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase mb-4">How we work</div>
          <ul className="space-y-4 text-sm text-gray-700 list-none">
            <li className="flex items-start text-gray-700">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Research before execution — we understand the operational landscape before initiating any implementation.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Systems-first thinking across strategy, technology, and workflow coordination.</span>
            </li>
            <li className="flex items-start text-gray-700">
              <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
              <span>Integrated view across business, technology, people, and scalable infrastructure.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Who we are</p>
          <p className="text-lg md:text-xl text-gray-100">
            Talavishiraaj Groups is a systems-oriented organization with research depth and structured execution capability. 
            We bring together strategic consulting, AI-assisted systems, workflow intelligence, and scalable 
            infrastructure under one accountable partner.
          </p>
          <p className="text-gray-300 text-base">
            We are not a generic agency, not just a consulting firm, and not just a technology vendor. 
            We operate at the intersection of strategy, systems, and execution as a single structured partner.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Capabilities</p>
          <h2 className="text-2xl md:text-3xl font-semibold">Capabilities built for structured, scalable outcomes</h2>
          <p className="text-gray-600 max-w-3xl">
            Every engagement is anchored on measurable impact across strategic consulting, AI and automation,
            implementation support, and growth systems enablement.
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
              <span className="text-sm font-medium text-primary">View capabilities →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Who we work with</p>
            <h2 className="text-2xl md:text-3xl font-semibold mt-2">Built for organizations with serious execution requirements</h2>
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
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Focus areas & insights</p>
          <h2 className="text-2xl md:text-3xl font-semibold">Research directions and intelligence themes</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insightThemes.map((insight) => (
            <div key={insight.title} className="border border-border rounded-2xl p-5 flex flex-col">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">{insight.tag}</span>
              <h3 className="text-lg font-semibold mb-3">{insight.title}</h3>
              <p className="text-sm text-gray-600 flex-1">{insight.note}</p>
              <span className="text-xs text-gray-400 mt-4 italic">Insights published periodically</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
