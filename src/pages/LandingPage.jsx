import React from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema, webPageSchema } from '../seo';
import { clientProfiles, differentiators, problemsWeSolve } from '../data/services';
import { SECTOR_STATEMENT, capabilityPath, serviceCategories } from '../data/servicesData';
import { caseStudies } from './CaseStudiesPage';
import { prism } from '../data/prism';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';
import { CONVERSION_LABEL } from '../components/cta';
import HorizontalRail from '../components/HorizontalRail';

// Kept under 60 characters so Google does not truncate it in results. The
// category leads and the brand follows: nobody is searching for the company by
// name yet, so the first words have to say what this is rather than who it is.
const TITLE = 'AI, Software and Systems Engineering | Talavishiraaj Groups';
const DESCRIPTION =
  'When a problem spans software, data, AI, hardware and the business around them, it stalls between suppliers. We combine research, engineering and implementation in one accountable team, from first analysis to production.';

const howWeWork = [
  'You get a view of the technical and commercial reality before anyone commits to a build.',
  'You get engineering depth across software, data, AI and hardware from the same team.',
  'You get one accountable partner from the first analysis through to the system running.',
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
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6">
              Talavishiraaj Groups
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight mb-5">
              Some problems need more than one kind of engineer
            </h1>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8 max-w-xl">
              When the answer spans software, data, AI, hardware and the business around them, work
              usually stalls in the gaps between suppliers. We combine research, engineering and
              implementation in one team, and stay accountable from the first analysis through to the
              system running in production.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                onClick={() => track('cta_click', { location: 'home_hero', target: 'services' })}
                className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
              >
                See what we build
              </Link>
              {/*
                Two things this is deliberately not.

                Not "book a call". A first time visitor has no reason to want a
                meeting yet: there is no named client and no published number on
                this page. Asking for the largest commitment on the site at the
                point of least trust is the wrong way round. Booking waits for
                the close and the contact page.

                Not the build vs buy framework either. That belongs to the
                Prism funnel, which starts from a specific unsettled decision.
                This headline is about the firm, so offering a framework about
                one narrow call is a non sequitur here and it mixes two funnels
                that are meant to stay separate.

                Work is what a stranger actually wants next: evidence that we
                can do the thing. It costs nothing to look at and it is the
                layer this site is otherwise thinnest on.
              */}
              <Link
                to="/case-studies"
                onClick={() => track('cta_click', { location: 'home_hero', target: 'case_studies' })}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
              >
                See our work
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

      {/*
        PROBLEM TO CAPABILITY, directly under the hero.

        This sits here rather than further down because of what the hero leaves
        unresolved. "Some problems need more than one kind of engineer" is true
        and abstract; a first time visitor still has to work out whether they
        are one of those problems. This answers that in the screen where the
        attention is: NN/g's reading data puts 81, 71 and 63 percent of readers
        on the first three paragraphs and 32 percent on the fourth.

        It is framed as recognition rather than as a menu. Six bare links in the
        first screen is a six way sort performed by someone who does not yet
        know what they need, which is the choice load Hick's law describes and
        the defect measured on this page in the landing page review. Asking
        "does one of these sound like you" costs the reader nothing, and the
        threshold line underneath turns a browse into a self diagnosis. The
        capability links are still here, one per problem, so the route to each
        service page is unchanged.
      */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <div className="max-w-3xl mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">What we work on</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Does one of these sound like you?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Some are squarely technical. Others are commercial with a technical answer underneath.
            Each one leads somewhere specific.
          </p>
        </div>
        <HorizontalRail label="Problems organizations bring to us">
          {problemsWeSolve.map((problem) => (
            <div
              key={problem.title}
              className="bg-white border border-border rounded-2xl p-6 flex flex-col w-full"
            >
              <h3 className="text-base font-semibold mb-2 leading-snug">{problem.title}</h3>
              <p className="text-sm text-gray-600 flex-1 leading-relaxed">{problem.body}</p>
              <Link
                to={problem.link}
                // min-h-11 gives a 44px tap target. At 20px these failed WCAG
                // 2.5.8, which asks for 24, and Fitts's law says the smaller
                // the target the longer it takes to hit, which costs most on a
                // phone. inline-flex keeps the underline on the text only.
                className="mt-4 inline-flex items-center min-h-11 text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
              >
                {problem.linkLabel}
              </Link>
            </div>
          ))}
        </HorizontalRail>
        <p className="text-sm text-gray-700 mt-6 max-w-3xl">
          If more than one of those is true at the same time, that is usually the reason the work
          has stalled. Problems that cross disciplines do not get solved by adding another supplier
          to the chain.
        </p>
      </section>

      {/* PRODUCT. Kept deliberately short: the product, the line, one way in. */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 md:items-center">
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Our product
              </h2>
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-primary leading-snug">
                {prism.name}: {prism.heroLine}
              </p>
              <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
                {prism.situationLine}
              </p>
            </div>
            {/*
              One action, and it is the product page. Booking already sits in
              the hero above and again at the close, so a third contact button
              here would compete with the one job this section has. The build
              vs buy framework is not promoted here either: it lives on the
              product page next to the thing it supports, and it has its own
              indexed page that people reach directly from search, so it does
              not depend on a link from the home page to be found.
            */}
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/products"
                onClick={() => track('cta_click', { location: 'home_product', target: 'products' })}
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-accent hover:bg-graphite transition-colors"
              >
                What Prism tells you
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14 space-y-4">
          <h2 className="text-xs uppercase tracking-[0.3em] text-gray-400">Who we are</h2>
          <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-4xl">
            A research driven organization with deep engineering and implementation capability. We bring software engineering, artificial intelligence, product development, applied research, and commercial systems together under one accountable partner.
          </p>
          <p className="text-gray-300 text-base leading-relaxed max-w-4xl">
            We combine research, technology, engineering and implementation when a problem crosses
            more than one discipline. Our teams are distributed across regions and time zones, so the
            expertise brought to a problem is chosen for its relevance rather than its proximity.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
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
          <HorizontalRail label="Our capabilities">
            {serviceCategories.map((capability) => (
              <Link
                key={capability.id}
                to={capabilityPath(capability)}
                onClick={() =>
                  track('service_interest', { capability: capability.id, location: 'home' })
                }
                className="group border border-border rounded-2xl p-6 bg-white hover:border-gray-400 transition-colors flex flex-col w-full"
              >
                <h3 className="text-xl font-semibold mb-3 leading-snug">{capability.label}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                  {capability.summary}
                </p>
                <span className="text-sm font-medium text-primary group-hover:underline underline-offset-4">
                  View capabilities
                </span>
              </Link>
            ))}
          </HorizontalRail>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <div className="max-w-3xl mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Who we work with</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Built for organizations with serious technical and execution requirements
          </h2>
          <p className="text-gray-600 leading-relaxed">{SECTOR_STATEMENT}</p>
        </div>
        <HorizontalRail label="Who we work with">
          {clientProfiles.map((client) => (
            <div
              key={client.label}
              className="border border-border rounded-2xl p-6 bg-white w-full"
            >
              <h3 className="text-lg font-semibold mb-2 leading-snug">{client.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{client.description}</p>
            </div>
          ))}
        </HorizontalRail>
      </section>

      {/* SELECTED WORK */}
      <section className="bg-muted border-y border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
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
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
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
              <span className="block text-xs font-mono text-gray-500 mb-2">
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
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
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
            {CONVERSION_LABEL}
          </Link>
        </div>
      </section>
    </>
  );
}
