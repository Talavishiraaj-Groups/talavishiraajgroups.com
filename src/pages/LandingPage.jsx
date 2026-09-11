import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, webPageSchema } from '../seo';
import { clientProfiles, differentiators, problemsWeSolve } from '../data/services';
import { SECTOR_STATEMENT, capabilityPath, serviceCategories } from '../data/servicesData';
import { caseStudies } from './CaseStudiesPage';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';

const TITLE = 'Talavishiraaj Groups | Research, Engineering, AI and Technology';
const DESCRIPTION =
  'Talavishiraaj Groups brings research, software engineering, AI, and product development together to solve complex technical and business problems.';

const howWeWork = [
  'Research first. We understand the technical and commercial reality before building.',
  'Deep engineering across software, data, AI, and systems.',
  'Full accountability. We stay with you from the first analysis through to delivery.',
];

export default function LandingPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={DESCRIPTION}
        path="/"
        jsonLd={[
          webPageSchema({ path: '/', title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
              Talavishiraaj Groups
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-5">
              Solving complex problems with research and engineering
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
              We bring together software engineering, AI, and product development to build practical solutions. We tackle cross-disciplinary problems, staying accountable from design to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                onClick={() => track('cta_click', { location: 'home_hero', target: 'services' })}
                className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
              >
                Explore our capabilities
              </Link>
              <Link
                to="/contact"
                onClick={() => track('cta_click', { location: 'home_hero', target: 'contact' })}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="border border-border rounded-2xl p-7 bg-muted">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500 mb-5">
              How we work
            </h2>
            <ul className="space-y-5 text-base text-gray-700 list-none">
              {howWeWork.map((point) => (
                <li key={point} className="flex items-start">
                  <ArrowIcon className="h-4 w-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400">Who we are</h2>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-4xl">
            A research driven organization with deep engineering and implementation capability. We bring software engineering, artificial intelligence, product development, applied research, and commercial systems together under one accountable partner.
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-4xl">
            We are not a generic agency or a consultancy that occasionally writes code. We execute across research and engineering as a single organization. Our teams are distributed across regions and time zones, meaning we bring the right expertise to the problem, rather than relying on who happens to be nearby.
          </p>
        </div>
      </section>

      {/* WHAT WE WORK ON */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">What we work on</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            The problems organizations bring to us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Some are squarely technical. Others are commercial with a technical answer underneath.
            Each leads to a defined capability.
          </p>
        </div>
        <div className="grid gap-px bg-border border border-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
          {problemsWeSolve.map((problem) => (
            <div key={problem.title} className="bg-white p-6 flex flex-col">
              <h3 className="text-base font-semibold mb-2 leading-snug">{problem.title}</h3>
              <p className="text-sm text-gray-600 flex-1 leading-relaxed">{problem.body}</p>
              <Link
                to={problem.link}
                className="mt-4 text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                {problem.linkLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Capabilities</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Capabilities that operate together, not in sequence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Engineering, artificial intelligence, product development and commercial systems are
              applied to the same problem by one team, rather than passed between suppliers who each
              see one part of it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCategories.map((capability) => (
              <Link
                key={capability.id}
                to={capabilityPath(capability)}
                onClick={() =>
                  track('service_interest', { capability: capability.id, location: 'home' })
                }
                className="group border border-border rounded-2xl p-6 bg-white hover:border-gray-400 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3 leading-snug">{capability.label}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{capability.summary}</p>
                <span className="text-sm font-medium text-primary group-hover:underline underline-offset-4">
                  View capabilities
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Who we work with</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Built for organizations with serious technical and execution requirements
          </h2>
          <p className="text-gray-600 leading-relaxed">{SECTOR_STATEMENT}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {clientProfiles.map((client) => (
            <div key={client.label} className="border border-border rounded-2xl p-6 bg-white">
              <h3 className="text-lg font-semibold mb-2 leading-snug">{client.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Selected work</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                Engagements, described in full
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Published in anonymized form at our clients’ request. Each record sets out the
                problem, the work carried out, and the result.
              </p>
            </div>
            <Link
              to="/case-studies"
              className="text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black whitespace-nowrap"
            >
              All case studies
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                onClick={() => track('case_study_view', { slug: study.slug, location: 'home' })}
                className="group border border-border rounded-2xl p-6 bg-white hover:border-gray-400 transition-colors flex flex-col"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                  {study.theme} · {study.industry}
                </p>
                <h3 className="text-lg font-semibold mb-2 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 flex-1 leading-relaxed">{study.teaser}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
            Why Talavishiraaj Groups
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How we are different in practice
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <div key={item.title}>
              <span className="block text-xs font-mono text-gray-400 mb-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-semibold mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Discuss a problem with us
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Describe the technical or commercial context you are working in. We respond with a
            considered view on the approach and clear next steps.
          </p>
          <Link
            to="/contact"
            onClick={() => track('cta_click', { location: 'home_footer_cta', target: 'contact' })}
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-9 py-4 text-sm font-medium hover:bg-graphite transition-colors"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </>
  );
}
