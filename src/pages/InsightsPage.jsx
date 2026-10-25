import React from 'react';
import CtaBand from '../components/CtaBand';
import { Link, useParams } from 'react-router-dom';
import Seo, { BRAND, absoluteUrl, breadcrumbSchema, itemListSchema, webPageSchema } from '../seo';
import {
  INSIGHTS_DESCRIPTION,
  INSIGHTS_TITLE,
  insightBySlug,
  insightPath,
  insights,
} from '../data/insights';
import { capabilityById, capabilityPath } from '../data/servicesData';
import { caseStudyBySlug } from './CaseStudiesPage';
import ArrowIcon from '../components/icons/ArrowIcon';
import { track } from '../components/analytics';
import { CONVERSION_LABEL } from '../components/cta';
import RelatedPath from '../components/RelatedPath';

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

/* ------------------------------------------------------------------ *
 * Index
 * ------------------------------------------------------------------ */

export default function InsightsPage() {
  return (
    <>
      <Seo
        title={INSIGHTS_TITLE}
        description={INSIGHTS_DESCRIPTION}
        path="/insights"
        jsonLd={[
          webPageSchema({
            path: '/insights',
            title: 'Insights',
            description: INSIGHTS_DESCRIPTION,
            type: 'CollectionPage',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
          ]),
          itemListSchema({
            name: 'Talavishiraaj Groups insights',
            items: insights.map((a) => ({ name: a.title, path: insightPath(a) })),
          }),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Insights</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-5 max-w-3xl">
          Answers to the questions that come up before a project starts
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl leading-relaxed mb-5">
          Written from work we have actually done rather than from general practice. Each piece
          answers one question properly, including the cases where the honest answer is that the work
          is not worth doing.
        </p>
        <p className="text-gray-600">
          For material you can work directly from, see our{' '}
          <Link
            to="/resources"
            className="text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
          >
            reference resources
          </Link>
          .
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 md:px-8 pb-16 md:pb-20">
        <ul className="grid gap-6 md:grid-cols-2 list-none">
          {insights.map((article) => {
            const capability = capabilityById(article.capability);
            return (
              <li key={article.slug}>
                <article className="group border border-border rounded-2xl p-6 md:p-8 bg-white hover:border-gray-400 transition-colors h-full flex flex-col">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-3">
                    {capability ? capability.label : 'Insight'} · {article.readingTime}
                  </p>
                  <h2 className="text-xl md:text-2xl font-semibold mb-3 leading-snug">
                    <Link
                      to={insightPath(article)}
                      onClick={() => track('insight_view', { slug: article.slug, location: 'index' })}
                      className="group-hover:underline underline-offset-4 decoration-gray-400"
                    >
                      {article.h1}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed flex-1">{article.summary}</p>
                  <Link
                    to={insightPath(article)}
                    className="mt-5 text-sm font-medium text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    Read the full piece
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <CtaBand location="insights" />
        <RelatedPath to="/build-vs-buy" label="the build vs buy vs partner framework" location="insights_hub">
          Weighing a build against buying something that nearly fits? Six questions that decide it, in
        </RelatedPath>
    </>
  );
}

/* ------------------------------------------------------------------ *
 * Article
 * ------------------------------------------------------------------ */

export function InsightArticlePage() {
  const { slug } = useParams();
  const article = insightBySlug(slug);

  if (!article) {
    return (
      <>
        <Seo
          title="Insight not found | Talavishiraaj Groups"
          description="This article could not be found. Browse all insights instead."
          path={`/insights/${slug || ''}`}
          noindex
        />
        <section className="max-w-3xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <h1 className="text-3xl font-semibold mb-4">We could not find that article</h1>
          <p className="text-gray-600 mb-8">It may have been renamed or moved.</p>
          <Link
            to="/insights"
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors"
          >
            View all insights
          </Link>
        </section>
      </>
    );
  }

  const path = insightPath(article);
  const capability = capabilityById(article.capability);
  const caseStudy = caseStudyBySlug(article.caseStudy);
  const others = insights.filter((a) => a.slug !== article.slug);

  return (
    <>
      <Seo
        title={article.metaTitle}
        description={article.metaDescription}
        path={path}
        type="article"
        jsonLd={[
          webPageSchema({ path, title: article.title, description: article.metaDescription }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: article.title, path },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.h1,
            description: article.metaDescription,
            datePublished: article.published,
            dateModified: article.published,
            // Attributed to the organization until the owner confirms a byline.
            author: { '@type': 'Organization', name: BRAND, url: absoluteUrl('/') },
            publisher: { '@id': `${absoluteUrl('/')}#organization` },
            mainEntityOfPage: absoluteUrl(path),
            inLanguage: 'en',
          },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link
            to="/insights"
            className="text-gray-600 hover:text-black underline decoration-gray-300 underline-offset-4"
          >
            Insights
          </Link>
        </nav>

        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-4">
          {capability ? capability.label : 'Insight'} · {article.readingTime}
        </p>
        <h1 className="text-3xl md:text-[2.75rem] font-semibold tracking-tight leading-[1.12] mb-6">
          {article.h1}
        </h1>

        {/* Direct answer first. This is what a reader and an answer engine both
            need before the supporting detail. */}
        <p className="text-lg text-gray-800 leading-relaxed mb-8">{article.summary}</p>

        <aside className="border border-border rounded-2xl bg-muted p-6 mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
            In short
          </h2>
          <ul className="space-y-3 list-none">
            {article.takeaways.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <ArrowIcon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="space-y-10">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4 leading-snug">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-gray-800 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Published {formatDate(article.published)} by {BRAND}.
        </p>

        {/* Routing block. An article that leads nowhere is a traffic exercise. */}
        <section className="mt-12 pt-10 border-t border-border">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-5">
            Where this work sits
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {capability && (
              <Link
                to={capabilityPath(capability)}
                onClick={() =>
                  track('service_interest', { capability: capability.id, location: 'insight' })
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

            {caseStudy && (
              <Link
                to={`/case-studies/${caseStudy.slug}`}
                onClick={() =>
                  track('case_study_view', { slug: caseStudy.slug, location: 'insight' })
                }
                className="group block border border-border rounded-2xl p-5 hover:border-gray-400 transition-colors"
              >
                <span className="block text-[11px] uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Related work
                </span>
                <span className="block font-semibold mb-1.5 leading-snug group-hover:underline underline-offset-4 decoration-gray-400">
                  {caseStudy.title}
                </span>
                <span className="block text-sm text-gray-600 leading-relaxed">
                  {caseStudy.teaser}
                </span>
              </Link>
            )}
          </div>
        </section>

        {others.length > 0 && (
          <section className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
              More insights
            </h2>
            <ul className="space-y-2 list-none">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    to={insightPath(other)}
                    onClick={() =>
                      track('insight_view', { slug: other.slug, location: 'insight_cross_link' })
                    }
                    className="text-sm text-primary underline decoration-gray-300 underline-offset-4 hover:decoration-black"
                  >
                    {other.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* An article about cost earns a second route out, to the page that
            carries the wider figures. It is placed before the framework link
            rather than instead of it: a reader who is budgeting wants the
            numbers first, but every article still owes a path to the product
            or the framework, which is what stops these pages being dead ends. */}
        {article.slug === 'what-ai-integration-costs' && (
          <RelatedPath
            to="/what-it-costs"
            label="what this work costs, with the published figures"
            location="insight_article_cost"
          >
            For the wider picture on budget, across software as well as AI, see
          </RelatedPath>
        )}

        <RelatedPath to="/build-vs-buy" label="the build vs buy vs partner framework" location="insight_article">
        Weighing a build of your own against buying something that nearly fits? Work the question through with
        </RelatedPath>

        <section className="mt-12 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="text-sm text-gray-700 max-w-md leading-relaxed">
            If you are weighing a decision like this one, describe the situation and we will tell you
            how we would approach it.
          </p>
          <Link
            to={`/contact?intent=${article.capability}`}
            onClick={() => track('service_inquiry', { capability: article.capability, location: 'insight_cta' })}
            className="inline-flex items-center justify-center rounded-full bg-primary text-accent px-7 py-3.5 text-sm font-medium hover:bg-graphite transition-colors whitespace-nowrap"
          >
            {CONVERSION_LABEL}
          </Link>
        </section>
      </article>
    </>
  );
}
