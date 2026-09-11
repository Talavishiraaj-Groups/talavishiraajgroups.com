# Website Upgrade Progress

Working record for the Talavishiraaj Groups website upgrade.

## Hard rules (do not violate)

- **Products are read only.** `src/data/productsData.js` and `src/components/Products.jsx` are untouched. Prism substance on `/systems` is preserved as published: scope, inclusions, engagement structure, deliverables, timeline, target regions, portfolio listing. The only product change is the name, from "Prism Diagnostic" to "Prism", on marketing surfaces.
- **Policies are read only.** Verified programmatically: the prose of all seven policy pages is byte identical to `HEAD`.
- **No pricing anywhere in public output.** Verified against source, built HTML and the JS bundle.
- **No em dash, en dash or stylistic dash punctuation** in new or rewritten public prose. Reproduced legal text keeps its original punctuation and is fenced with `begin-protected-legal-text` markers.
- **No "remote first" or "based in India, serving globally"** positioning. Distributed teams across regions and time zones instead.
- **The company is not a consultancy.** Prism is one product, not the company's identity. It is not mentioned on the homepage.

Run `npm run check` to enforce all of the above.

## Canonical domain

`https://www.talavishiraajgroups.com`

Verified against the live deployment: apex `talavishiraajgroups.com` returns 307 to the www host; legacy `tjgroups.com` returns 301 to the same destination. Note: `tjgroups.com` has no valid TLS certificate, so inbound HTTPS links to it fail at handshake. That is a DNS and hosting fix outside this repository.

---

## Phase 1 — Repository audit (COMPLETE)

| Issue found | Status |
| --- | --- |
| One static `<title>` on every URL; no description, canonical, OG or Twitter tags anywhere | Fixed |
| `vercel.json` rewrote everything to `index.html`, so `/robots.txt` and `/sitemap.xml` returned HTML with a 200 | Fixed |
| Every unknown URL returned 200 with the SPA shell. No 404 handling at all | Fixed |
| A 4 second loading screen gated `<BrowserRouter>`, so no content, headings or metadata existed in the DOM for roughly 5 seconds | Fixed |
| No prerendering; content only existed after JS execution | Fixed |
| `/case-studies` was an orphan route, linked from nowhere | Fixed |
| `/technology` was a client side bounce page | Fixed (308 at the edge) |
| `/ip-policy` route existed but was not linked | Fixed |
| `Testimonials.jsx` held fabricated testimonials (dead code) | Removed |
| Nine dead legacy components superseded by `src/pages/` | Removed |
| `public/hero-bg.jpg` was a leadership portrait at 1200x1200 under a misleading name | Renamed and optimized |
| `package.json` pinned Node 20, which Vercel stops building after 1 October | Fixed, now `24.x` |
| Hardcoded SMTP password committed in `api/*.js` and `SMTP_SETUP.md` | **NOT fixed. Needs credential rotation, not a code edit.** |

Verified as **not** problems, contrary to the initial brief's expectation:

- No pricing appeared anywhere on the existing public site.
- `src/data/productsData.js` (12 speculative products) was never imported by any route, so nothing speculative was ever published.
- The 80% Prism refund figure matches `new_update_docs/Refund policy prism page.txt` exactly. The 90% figure belongs to a different policy section and is not a contradiction.
- The Prism page never contained "Loom", "4 to 6 interviews" or "10 to 15 days".

---

## Phase 2 — Content architecture and copy (COMPLETE)

- `src/data/servicesData.js`: six capability areas, ordered so the technical disciplines lead. Legacy anchors `#strategy`, `#tech`, `#rd`, `#growth` preserved; `#ai` and `#delivery` added.
- `src/data/services.js`: company answer, problem set, value chain, client profiles, differentiators, engagement paths. Removed `insightThemes`, which promised insights that do not exist.
- `LandingPage`: rewritten around multidisciplinary identity. No Prism reference. Structure follows the previous live page (hero, how we work, who we are, capabilities, who we work with, selected work, why us, CTA).
- `AboutPage`: rewritten. Distributed teams section replaces the location based framing. Portraits restored to the grayscale treatment.
- `ServicesPage`: rewritten against the six capability areas.
- `SystemsPage`: restored to the published Prism substance, renamed to Prism, portfolio listing reinstated with availability labels.
- `CaseStudiesPage`: individual routes at `/case-studies/:slug`, anonymization disclosure, no invented claims.
- `PartnershipsPage`, `ContactPage`, `CommunityPage`, `Footer`, `Navbar`: rewritten.
- Spelling standardized on US forms across marketing pages; policy pages untouched.

---

## Phase 3 — SEO and metadata (COMPLETE)

- `src/seo.js`: one module for site identity, structured data builders, head construction, static head serialization and the `<Seo>` component.
- Every route declares its own title, description, canonical, robots, OG and Twitter card metadata plus structured data. The prerenderer throws if a route does not.
- `index.html`: font loading moved from a CSS `@import` to `<link rel=preconnect>` plus stylesheet, favicon set, theme color, per route head markers.

---

## Phase 4 — Rendering, routing and crawlability (COMPLETE)

- `src/entry-server.jsx` plus `scripts/prerender.mjs`: 22 routes rendered to static HTML at build time. `npm run build` runs client build, SSR build, then prerender.
- `sitemap.xml` generated from the same render pass, so a noindex page cannot leak into it. Origin read back from the rendered canonical tag, so the two cannot disagree.
- `public/robots.txt` added.
- 404 written to `dist/404.html` so unmatched paths get a real 404 rather than the homepage as an indexable 200. The SPA catch all rewrite was removed from `vercel.json` for the same reason.
- `vite.config.mjs` includes a preview middleware that mirrors production hosting, so the prerendered files are what gets tested locally.

---

## Phase 5 — UX, accessibility and conversion (COMPLETE)

- Loading screen removed. Content is in the initial HTML.
- Skip link, semantic landmarks, `aria-expanded` and `aria-controls` on the mobile nav and the governance accordions, visible focus rings, labelled form fields.
- `alert()` error handling replaced with an inline `role="alert"` message.
- Contact form routes by intent via `?intent=`, submitted through the existing `service` field so the API is unchanged.
- `src/components/analytics.js`: provider agnostic event layer, no-op until a provider is present.

---

## Phase 6 — Validation (COMPLETE)

- `scripts/check-content.mjs` (`npm run check`): dash punctuation, banned phrases, buzzwords, internal vocabulary, pricing patterns, broken internal links, overused vocabulary. Currently passing on 32 files.
- `npm run build` succeeds. 22 routes prerendered, 20 in the sitemap, 2 noindex.
- Production preview tested across every route, including direct entry and unknown paths.

---

## Phase 7 — Final consistency audit (COMPLETE)

- Policy prose verified byte identical to `HEAD` for all seven policy pages.
- `productsData.js` and `Products.jsx` verified unchanged.
- No pricing in source, built HTML or the JS bundle.
- Dash punctuation appears only inside reproduced legal text.

---

## Round 2 changes (handbook review, fonts, social, markets)

- **Footer social**: LinkedIn and X restored as icon-only links in a bordered circular treatment. The platform name is carried by an `sr-only` accessible name rather than visible text.
- **Fonts self-hosted** (`public/fonts/`, `src/fonts.css`). The site now makes **zero third-party requests**. This removes the visitor IP disclosure to Google that a Google Fonts embed creates, which is the main reason a site of this shape would otherwise need a consent banner. Latin subsets only; the two above-the-fold faces are preloaded.
- **Market posture**: `PRIMARY_MARKETS` is now United States, United Kingdom, United Arab Emirates, Europe, India, and `areaServed` in structured data declares `Worldwide` alongside them, so the entity is not read as limited to five countries.
- **Internal vocabulary blocklist extended** from the GTM and operating handbooks. `npm run check` now fails on: Ascendancy Crucible, Prism Scan, Prism Scale, Forge Blueprint/Correction/Sprint/Fusion/Prototype/Nullification, Dominion, Crystallizer, Amplification Lattice, Hyper-Ramp, Constraint-First Protocol, Decision Clarity Framework, Vertical Expansion Protocol, Research-First Framework, Diagnosis Engine, GTM Engine, Revenue Engine. Verified: none of these appear on the site or in the build.

### Handbook review findings

The eight attached documents are internal GTM, operating and BDE handbooks. They contain no approved public website copy. Two things matter for the site:

1. **The commercial ladder is Prism, then Forge, then Dominion.** Only Prism is public. Forge and Dominion are internal names and are **not** published. The Systems portfolio tiles remain as published ("Workflow Intelligence Platform", "AI Systems Infrastructure", "Business Infrastructure Dashboard").
2. **The GTM Revision Blueprint's language principles match the direction taken on the site**: replace abstract consulting language with operational specificity and commercial consequence. Its weak/strong examples were used as a calibration reference for the public copy.

---

## Round 3 — search intent architecture, domain, analytics, security

### Search intent map (one page per intent, no cannibalization)

| Intent | Page | Notes |
| --- | --- | --- |
| Brand | `/` | Company identity and capability breadth |
| Who we are, leadership | `/about` | Entity and E-E-A-T signals |
| Capability overview | `/services` | Hub. Anchors `#tech` `#ai` `#rd` `#strategy` `#growth` `#delivery` preserved |
| Software and systems engineering | `/services/technology-and-engineering` | |
| AI development and automation | `/services/artificial-intelligence-and-automation` | |
| Product engineering and R&D | `/services/product-engineering-and-rd` | |
| Business systems and operating design | `/services/business-and-operating-systems` | |
| Growth systems and market enablement | `/services/growth-and-market-enablement` | |
| Implementation and delivery | `/services/implementation-and-delivery` | |
| Product | `/systems` | Prism. Substance read only |
| Proof | `/case-studies` plus 6 detail pages | |
| Partnership | `/partnerships` | |
| Conversion | `/contact` | Intent routing via `?intent=` |
| Legal and governance | 7 policy pages | Trust signals, read only |

The six capability areas were previously anchors on a single page, so none could
compete independently for its own intent. Each is now a standalone page with its
own title, description, canonical, Service schema, FAQ where warranted, and
internal links. The hub retains the anchor ids, so every previously published
`/services#tech` style link still resolves.

**28 routes prerendered, 26 in the sitemap, 2 deliberately noindex.**

### Domain architecture

Canonical: `https://www.talavishiraajgroups.com`

`vercel.json` now performs single hop, permanent, host based redirects to the
canonical host from `tjgroups.com`, `www.tjgroups.com` and the apex
`talavishiraajgroups.com`. These only take effect once each hostname is attached
to the Vercel project.

`tjgroups.com` is a legacy domain, never a second site. It has no separate
sitemap, no separate canonical identity and no indexable content of its own.

**Outstanding infrastructure item:** `https://tjgroups.com` currently fails TLS
handshake, so HTTPS visitors never reach the redirect. This requires a valid
certificate covering `tjgroups.com` and `www.tjgroups.com`, issued through the
hosting or DNS provider. It cannot be fixed in this repository.

### Analytics

Provider agnostic and dormant. No measurement id is committed and nothing is
collected. `page_view` fires on every route change; the rest are business events:
`cta_click`, `service_interest`, `<capability>_interest`, `prism_interest`,
`partnership_interest`, `case_study_view`, `contact_form_start`,
`contact_form_submit`, `service_inquiry`, `email_click`, `social_click`,
`external_link_click`.

Supplying a real provider later requires loading its script. No application code
changes.

### Security

The hardcoded SMTP password has been removed from `api/send-contact-email.js`
and `api/send-email.js` and from `SMTP_SETUP.md`. Credentials now come only from
the environment, and a missing variable produces a clear configuration error
rather than a silent failure.

**Required before the next deploy:** set `SMTP_USER` and `SMTP_PASSWORD` in the
Vercel project settings. Until that is done, both forms return the configuration
error. The old password is in git history and must be rotated in Zoho.

### Measured performance inputs

- Critical path to first paint: about 92 KB (7.5 KB HTML gzip, 6.3 KB CSS gzip, two preloaded woff2 faces)
- Content is present in the HTML, so rendering does not wait on JavaScript
- JS is 105.6 KB gzip and deferred, used for hydration only
- Zero external network fetches
- One stylesheet, zero render blocking scripts
- 58 of 58 images carry explicit width and height
- `font-display: swap` on all 14 faces

Field data still requires a real deployment. Lab numbers are not a substitute for
Core Web Vitals measured from actual visitors.

## Open items for the owner

1. **SMTP credential.** A live password is committed in `api/send-contact-email.js`, `api/send-email.js` and `SMTP_SETUP.md`. It needs rotating in Zoho and moving to environment variables only. Not changed here because removing the fallback without the environment variable set in Vercel would break the contact form.
2. **Prism naming in legal pages.** The policy pages and the reproduced policy extracts on `/systems` still say "Prism Diagnostic", because policy text is read only. Confirm whether the legal documents should be updated to "Prism".
3. **Case study figures.** "Three times as many qualified conversations" and "more than 60%" were already published and have been preserved. Confirm they are defensible.
4. **`tjgroups.com` TLS.** The legacy domain has no valid certificate, so any HTTPS link to it fails before the redirect runs.
5. **Search Console.** CTR diagnosis needs the real account data. See the post launch checklist in the final report.

---

## Round 4 — Content Simplification and Conversion Optimization

- **Simplified Copy:** The language across `LandingPage`, `AboutPage`, `ContactPage`, `ServicesPage`, and the underlying `services.js`/`servicesData.js` data files was rewritten to be more direct, punchy, and less jargon-heavy ("too high English"). The professional tone mandated by the directive is maintained, but the messaging is now more accessible to a general audience.
- **Improved CTAs:** Calls to action were made more inviting and human (e.g., changing "Initiate engagement" to "Talk to our team" or "Start a conversation").
- **Contact Flow:** The `ContactPage` introductory text and process explanations were simplified to reduce friction and encourage users to reach out.
- **Read-Only Preservation:** `Products.jsx` and the policy pages were intentionally left untouched, preserving their established state as per the strict directive rules.

---

## Round 5 — AEO, GEO, and Advanced SEO Implementation

- **Entity Optimization:** Enriched the `Organization` schema in `src/seo.js` to include founder details (`Dhiraj TH` and `Yatharth Chauhan`), a comprehensive `knowsAbout` array, and `alternateName` to strengthen the brand entity for AI engines (ChatGPT, Perplexity, etc.).
- **Answer Engine Optimization (AEO):** Added highly conversational FAQ blocks to `src/data/servicesData.js` (e.g., distinguishing between prototype and production AI, identifying automatable processes). These naturally feed the site's `FAQPage` JSON-LD structured data and provide the exact, direct answers that LLMs look for when users ask complex industry questions.
- **Semantic HTML & Direct Answers:** Confirmed the structural hierarchy (`H1`, `H2`, `H3`) and concise list formats on core pages to ensure that AI crawlers can effortlessly parse and summarize the content. The site is now optimized for both traditional Search Engines (Google) and Answer/Generative Engines.
