import React from 'react';
import CtaBand from '../components/CtaBand';
import { Link, useParams } from 'react-router-dom';
import Seo, { BRAND, absoluteUrl, breadcrumbSchema, itemListSchema, webPageSchema } from '../seo';
import {
  RESOURCES_DESCRIPTION,
  RESOURCES_TITLE,
  resourceBySlug,
  resourcePath,
  resources,
} from '../data/resources';
import { insightBySlug, insightPath } from '../data/insights';
import { capabilityById, capabilityPath } from '../data/servicesData';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';
import { CONVERSION_LABEL } from '../components/cta';
import RelatedPath from '../components/RelatedPath';

/* ------------------------------------------------------------------ *
 * Index
 * ------------------------------------------------------------------ */

export default function ResourcesPage() {
  return (
    <>
      <Seo
        title={RESOURCES_TITLE}
        description={RESOURCES_DESCRIPTION}
        path="/resources"
        jsonLd={[
          webPageSchema({
            path: '/resources',
            title: 'Resources',
            description: RESOURCES_DESCRIPTION,
            type: 'CollectionPage',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
          ]),
          itemListSchema({
            name: 'Talavishiraaj Groups resources',
            items: resources.map((r) => ({ name: r.title, path: resourcePath(r) })),
          }),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Resources</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5 max-w-3xl">
          Reference material our teams actually work from
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed">
          Published in full, free to copy and adapt, and written to be useful whether or not you ever
          work with us. No email required.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {resources.map((resource) => {
            const capability = capabilityById(resource.capability);
            const itemCount = resource.sections.reduce((n, s) => n + s.items.length, 0);
            return (
              <li key={resource.slug}>
                <article className="group border border-border rounded-2xl p-6 md:p-8 bg-white hover:border-gray-400 transition-colors h-full flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                    {capability ? capability.label : 'Reference'} · {itemCount} checks
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                    <Link
                      to={resourcePath(resource)}
                      onClick={() => track('resource_view', { slug: resource.slug, location: 'index' })}
                      className="group-hover:underline underline-offset-4 decoration-gray-400"
                    >
                      {resource.h1}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">{resource.summary}</p>
                  <Link
                    to={resourcePath(resource)}
                    className="mt-5 text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    Open the checklist
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <CtaBand location="resources" />
        <RelatedPath to="/products" label="what Prism does" location="resources_hub">
          These help you check your own work. When the question is larger than a checklist, see
        </RelatedPath>
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Detail
 * ------------------------------------------------------------------ */

export function ResourceDetailPage() {
  const { slug } = useParams();
  const resource = resourceBySlug(slug);

  if (!resource) {
    return (
      <>
        <Seo
          title="Resource not found | Talavishiraaj Groups"
          description="This resource could not be found. Browse all resources instead."
          path={`/resources/${slug || ''}`}
          noindex
        />
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <h1 className="text-3xl font-semibold mb-4">We could not find that resource</h1>
          <p className="text-gray-600 mb-8">It may have been renamed or moved.</p>
          <Link
            to="/resources"
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
          >
            View all resources
          </Link>
        </section>
      </>
    );
  }

  const path = resourcePath(resource);
  const capability = capabilityById(resource.capability);
  const relatedInsight = resource.insight ? insightBySlug(resource.insight) : null;
  const itemCount = resource.sections.reduce((n, s) => n + s.items.length, 0);

  return (
    <>
      <Seo
        title={resource.metaTitle}
        description={resource.metaDescription}
        path={path}
        type="article"
        jsonLd={[
          webPageSchema({ path, title: resource.title, description: resource.metaDescription }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Resources', path: '/resources' },
            { name: resource.title, path },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: resource.h1,
            description: resource.metaDescription,
            datePublished: resource.published,
            inLanguage: 'en',
            publisher: { '@id': `${absoluteUrl('/')}#organization` },
            step: resource.sections.map((section, index) => ({
              '@type': 'HowToSection',
              position: index + 1,
              name: section.heading,
              itemListElement: section.items.map((item, i) => ({
                '@type': 'HowToStep',
                position: i + 1,
                text: item,
              })),
            })),
          },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link
            to="/resources"
            className="text-gray-600 hover:text-black underline decoration-gray-300 underline-offset-4"
          >
            Resources
          </Link>
        </nav>

        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-4">
          {capability ? capability.label : 'Reference'} · {itemCount} checks
        </p>
        <h1 className="text-3xl md:text-[2.75rem] font-semibold tracking-tight leading-[1.12] mb-6">
          {resource.h1}
        </h1>

        <p className="text-lg text-gray-800 leading-relaxed mb-5">{resource.summary}</p>
        <p className="text-gray-700 leading-relaxed mb-8">{resource.intro}</p>

        <aside className="border border-border rounded-2xl bg-muted p-6 mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
            How to use it
          </h2>
          <ul className="space-y-3 list-none">
            {resource.howToUse.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <ArrowIcon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-10">
          {resource.sections.map((section, sectionIndex) => (
            <section key={section.heading}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-2 leading-snug">
                {section.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{section.intro}</p>
              <ul className="space-y-3 list-none">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border border-border rounded-xl p-4 bg-white"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 font-mono text-xs text-gray-400"
                    >
                      {sectionIndex + 1}.{itemIndex + 1}
                    </span>
                    <span className="text-gray-800 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-gray-800 leading-relaxed border-l-2 border-black pl-5">
          {resource.closing}
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Published by {BRAND}. Copy it, adapt it, put it in your own repository. No attribution
          required.
        </p>

        <section className="mt-12 pt-10 border-t border-border">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-5">
            Related
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedInsight && (
              <Link
                to={insightPath(relatedInsight)}
                onClick={() =>
                  track('insight_view', { slug: relatedInsight.slug, location: 'resource' })
                }
                className="group block border border-border rounded-2xl p-5 hover:border-gray-400 transition-colors"
              >
                <span className="block text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-2">
                  The reasoning behind it
                </span>
                <span className="block font-semibold mb-1.5 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                  {relatedInsight.h1}
                </span>
                <span className="block text-sm text-gray-600 leading-relaxed">
                  {relatedInsight.summary}
                </span>
              </Link>
            )}

            {capability && (
              <Link
                to={capabilityPath(capability)}
                onClick={() =>
                  track('service_interest', { capability: capability.id, location: 'resource' })
                }
                className="group block border border-border rounded-2xl p-5 hover:border-gray-400 transition-colors"
              >
                <span className="block text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Capability
                </span>
                <span className="block font-semibold mb-1.5 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                  {capability.label}
                </span>
                <span className="block text-sm text-gray-600 leading-relaxed">
                  {capability.summary}
                </span>
              </Link>
            )}
          </div>
        </section>

        <RelatedPath to="/products" label="what Prism looks at" location="resource_detail">
        If this raises more questions than it answers, the decision underneath it is probably not settled yet. See
        </RelatedPath>

        <section className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-sm text-gray-700 max-w-md leading-relaxed">
            If working through this has surfaced more gaps than you expected, that is usually the
            point at which it is worth a conversation.
          </p>
          <Link
            to={`/contact?intent=${resource.capability}`}
            onClick={() =>
              track('service_inquiry', { capability: resource.capability, location: 'resource_cta' })
            }
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors whitespace-nowrap"
          >
            {CONVERSION_LABEL}
          </Link>
        </section>
      </article>
    </>
  );
}
