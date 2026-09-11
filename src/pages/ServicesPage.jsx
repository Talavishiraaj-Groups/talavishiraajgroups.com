import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo, {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  serviceSchema,
  webPageSchema,
} from '../seo';
import {
  SECTOR_STATEMENT,
  capabilityBySlug,
  capabilityPath,
  serviceCategories,
  servicesMetaDescription,
} from '../data/servicesData';
import { caseStudies } from './CaseStudiesPage';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';

const TITLE =
  'Capabilities: Software, AI, Product Engineering and Business Systems | Talavishiraaj Groups';

/* ------------------------------------------------------------------ *
 * Hub page
 * ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={TITLE}
        description={servicesMetaDescription}
        path="/services"
        jsonLd={[
          webPageSchema({
            path: '/services',
            title: 'Capabilities',
            description: servicesMetaDescription,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Capabilities', path: '/services' },
          ]),
          itemListSchema({
            name: 'Talavishiraaj Groups capabilities',
            items: serviceCategories.map((c) => ({ name: c.label, path: capabilityPath(c) })),
          }),
        ]}
      />

      {/* HERO */}
      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">Capabilities</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.08] mb-6 max-w-4xl">
            What we build and run
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Six core capabilities across research, engineering, AI, product development, and commercial systems. Real problems usually require a mix of these. We keep them under one roof because projects often stall when strategy is handed off to a separate delivery team.
          </p>
        </div>
      </section>

      {/* CAPABILITY SECTIONS. Anchor ids are preserved so previously published
          /services#tech style links continue to resolve. */}
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {serviceCategories.map((category, index) => {
          const relatedCases = caseStudies.filter((c) => c.capabilities.includes(category.id));

          return (
            <section
              key={category.id}
              id={category.id}
              className={`scroll-mt-24 py-14 md:py-20 ${index > 0 ? 'border-t border-border' : ''}`}
            >
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="block text-xs font-mono text-gray-400 mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 leading-tight">
                    <Link
                      to={capabilityPath(category)}
                      onClick={() =>
                        track('service_interest', { capability: category.id, location: 'services_hub' })
                      }
                      className="hover:underline underline-offset-4 decoration-gray-400"
                    >
                      {category.label}
                    </Link>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">{category.summary}</p>
                  <Link
                    to={capabilityPath(category)}
                    onClick={() =>
                      track('service_interest', { capability: category.id, location: 'services_hub' })
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    {category.label} in detail
                    <ArrowIcon className="h-4 w-4" />
                  </Link>
                </div>

                <div className="space-y-6">
                  <div className="border border-border rounded-2xl p-7 bg-white">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
                      What we do
                    </h3>
                    <ul className="space-y-3 list-none">
                      {category.work.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-gray-700">
                          <ArrowIcon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {relatedCases.length > 0 && (
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3">
                        Related work
                      </h3>
                      <ul className="space-y-2 list-none">
                        {relatedCases.slice(0, 2).map((study) => (
                          <li key={study.slug}>
                            <Link
                              to={`/case-studies/${study.slug}`}
                              onClick={() =>
                                track('case_study_view', { slug: study.slug, location: 'services_hub' })
                              }
                              className="text-sm text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                            >
                              {study.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CROSS SECTOR */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">Across sectors</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              The problem shapes the approach, not the industry
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">{SECTOR_STATEMENT}</p>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="bg-secondary text-accent">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">Next steps</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Most engagements draw on two or three of these
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The right mix depends on your specific needs. Tell us about your situation, and we will outline a practical approach.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => track('cta_click', { location: 'services_hub_cta', target: 'contact' })}
              className="inline-flex items-center justify-center rounded-full bg-accent text-primary px-7 py-3.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Talk to our team
            </Link>
            <Link
              to="/case-studies"
              onClick={() => track('cta_click', { location: 'services_hub_cta', target: 'case_studies' })}
              className="inline-flex items-center justify-center rounded-full border border-gray-600 px-7 py-3.5 text-sm font-medium text-accent hover:bg-graphite transition-colors"
            >
              Review selected work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Capability detail page
 *
 * Each capability addresses a distinct search intent, so it gets its own
 * indexable URL rather than competing with the other five on the hub.
 * ------------------------------------------------------------------ */

export function CapabilityPage() {
  const { slug } = useParams();
  const category = capabilityBySlug(slug);

  if (!category) {
    return (
      <>
        <Seo
          title="Capability not found | Talavishiraaj Groups"
          description="This capability page could not be found. Browse all capabilities instead."
          path={`/services/${slug || ''}`}
          noindex
        />
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-24 text-center">
          <h1 className="text-3xl font-semibold mb-4">We could not find that page</h1>
          <p className="text-gray-600 mb-8">It may have been renamed or moved.</p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
          >
            View all capabilities
          </Link>
        </section>
      </>
    );
  }

  const path = capabilityPath(category);
  const relatedCases = caseStudies.filter((c) => c.capabilities.includes(category.id));
  const others = serviceCategories.filter((c) => c.id !== category.id);

  return (
    <>
      <Seo
        title={category.metaTitle}
        description={category.metaDescription}
        path={path}
        jsonLd={[
          webPageSchema({ path, title: category.label, description: category.metaDescription }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Capabilities', path: '/services' },
            { name: category.label, path },
          ]),
          serviceSchema({
            name: category.label,
            description: category.summary,
            serviceType: category.serviceType,
            path,
          }),
          ...(category.faq && category.faq.length ? [faqSchema(category.faq)] : []),
        ]}
      />

      {/* HERO */}
      <section className="border-b border-border bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <Link
              to="/services"
              className="text-gray-600 hover:text-black underline decoration-gray-300 underline-offset-4"
            >
              Capabilities
            </Link>
          </nav>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-3xl">
            {category.h1}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">{category.intro}</p>
        </div>
      </section>

      {/* SIGNALS + WHAT WE DO */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-5">
              Signals you would recognize
            </h2>
            <ul className="space-y-3 list-none mb-8">
              {category.signals.map((signal) => (
                <li key={signal} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{signal}</span>
                </li>
              ))}
            </ul>
            <div className="border-l-2 border-gray-300 pl-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                When to consider it
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{category.whenToConsider}</p>
            </div>
          </div>

          <div className="border border-border rounded-2xl p-7 bg-muted">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
              What we do
            </h2>
            <ul className="space-y-3 list-none">
              {category.work.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <ArrowIcon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">How we approach it</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {category.approach.map((item, index) => (
              <div key={item.title}>
                <span className="block text-xs font-mono text-gray-400 mb-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-semibold mb-2 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERS + RELATED WORK */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            What you end up with
          </h2>
          <ul className="space-y-3 list-none">
            {category.delivers.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <span className="mt-2 w-1 h-1 rounded-full bg-gray-500 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {relatedCases.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Related work</h2>
            <ul className="space-y-4 list-none">
              {relatedCases.map((study) => (
                <li key={study.slug} className="border border-border rounded-2xl p-5">
                  <h3 className="font-semibold mb-1.5 leading-snug">
                    <Link
                      to={`/case-studies/${study.slug}`}
                      onClick={() =>
                        track('case_study_view', { slug: study.slug, location: 'capability' })
                      }
                      className="hover:underline underline-offset-4 decoration-gray-400"
                    >
                      {study.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{study.teaser}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* FAQ */}
      {category.faq && category.faq.length > 0 && (
        <section className="border-y border-border bg-muted">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
              Questions we are asked
            </h2>
            <dl className="space-y-8">
              {category.faq.map((item) => (
                <div key={item.question} className="border-b border-border pb-8 last:border-0 last:pb-0">
                  <dt className="text-lg font-semibold mb-2.5 leading-snug">{item.question}</dt>
                  <dd className="text-gray-700 leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* OTHER CAPABILITIES */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-6">
          Other capabilities
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none">
          {others.map((other) => (
            <li key={other.id}>
              <Link
                to={capabilityPath(other)}
                onClick={() =>
                  track('service_interest', {
                    capability: other.id,
                    location: 'capability_cross_link',
                  })
                }
                className="group block border border-border rounded-2xl p-5 hover:border-gray-400 transition-colors h-full"
              >
                <span className="block font-semibold mb-1.5 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                  {other.label}
                </span>
                <span className="block text-sm text-gray-600 leading-relaxed">{other.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Discuss a {category.label.toLowerCase()} requirement
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto leading-relaxed">
            Describe what you are working on. We reply with a view on how we would approach it and
            whether we are the right people for the work.
          </p>
          <Link
            to={`/contact?intent=${category.id}`}
            onClick={() => track('service_inquiry', { capability: category.id, location: 'capability_cta' })}
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-9 py-4 text-sm font-medium hover:bg-graphite transition-colors"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
