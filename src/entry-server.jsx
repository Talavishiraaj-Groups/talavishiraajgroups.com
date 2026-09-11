import React from 'react';
import { renderToString } from 'react-dom/server';
// React Router v7 exports StaticRouter from the package root; the
// react-router-dom/server subpath was removed in that major version.
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { HeadCollectorProvider, renderHeadToHtml } from './seo.js';
import { caseStudies } from './pages/CaseStudiesPage.jsx';
import { serviceCategories } from './data/servicesData.js';

/**
 * Every route that gets its own static HTML file at build time.
 *
 * This is the single source for both prerendering and sitemap generation, so
 * the two can never drift apart. Whether a route reaches the sitemap is decided
 * by the robots directive the page itself declares, not by a second list.
 */
export const routes = [
  '/',
  '/about',
  '/services',
  ...serviceCategories.map((category) => `/services/${category.slug}`),
  '/systems',
  '/case-studies',
  ...caseStudies.map((study) => `/case-studies/${study.slug}`),
  '/partnerships',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/refund-policy',
  '/delivery-policy',
  '/risk-mitigation',
  '/data-handling',
  '/ip-policy',
  '/community',
  '/404',
];

/**
 * Build time renderer. Returns the body markup and the serialized head for a
 * single route so scripts/prerender.mjs can write a complete static HTML file.
 */
export function render(url) {
  const collector = {};

  const html = renderToString(
    <HeadCollectorProvider collector={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadCollectorProvider>,
  );

  if (!collector.head) {
    throw new Error(`Route "${url}" rendered without declaring page metadata via <Seo>.`);
  }

  return {
    html,
    head: renderHeadToHtml(collector.head),
    noindex: Boolean(collector.head.noindex),
    title: collector.head.title,
  };
}
