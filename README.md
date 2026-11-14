# Talavishiraaj Groups — website redesign

A ground-up redesign of tjgroups.com / talavishiraajgroups.com in **Next.js 15 (App Router) + Framer Motion + Tailwind CSS**, light theme only.

All copy comes from the live site (all 67 sitemap pages were scraped), lightly tightened where it read awkwardly. No stock photography: every visual is a purpose-built animated SVG or chart, so the site loads fast and looks consistent.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

To refresh content from the live site, re-download pages into `scripts/source-pages/` and run `npm run content`. That regenerates `src/content/generated/*.json` (insights, sectors, legal pages, checklist).

## Structure

| Path | What it is |
| --- | --- |
| `src/app` | Routes. Every original URL is kept as it was (Prism lives at `/products`, legal pages at the root), plus a new `/sectors` index. |
| `src/content/capabilities.ts`, `cases.ts` | Hand-curated content for the six capabilities and six case studies. |
| `src/content/generated/` | JSON generated from the scraped pages. |
| `src/components/visuals.tsx` | Animated SVG system: hero convergence graphic, six capability illustrations, Prism refraction, charts, time-zone ribbon. |
| `src/components/motion.tsx` | Motion primitives (reveal, staggered lists, scroll-linked text, counters, magnetic buttons, marquee). |

## Page layouts (each one different)

- **Home** — convergence hero, interactive “does this sound like you” picker, bento capability grid, horizontal scroll-linked case rail, stacking differentiator cards.
- **Capabilities** — sticky split-scroll with a live visual that swaps per section.
- **Capability detail** — signal cards, numbered scope list, scroll-progress approach timeline.
- **Prism** — refraction hero, interactive self-check, overrun chart, two-week Gantt.
- **Case studies** — filterable ledger; detail pages are a dossier with before/after panel.
- **Insights** — magazine grid with generative covers; articles have reading progress and a live table of contents.
- **Sectors** — new index page: interactive sector × capability matrix.
- **What it costs** — data-viz page (log-scale quote spread, TCO donut, range bars, timelines).
- **Build vs buy** — working 7-question decision tool.
- **In house vs agency** — comparison matrix with “strongest” cells marked.
- **Resources** — interactive 40-item AI readiness checklist with progress ring (saved in the browser).
- **Partnerships** — expanding accordion panels. **Contact** — form + next-steps timeline.

## Integrations (ported from the previous site)

| Feature | Where | Notes |
| --- | --- | --- |
| Contact and booking forms | `/api/send-contact-email` | Zoho SMTP, same URL and payload as before. Honeypot, validation, basic rate limit, HTML escaped. |
| Keep in touch (`/community`) | `/api/send-email` | Same as before. |
| Job applications (`/careers`, `/careers/[role]`) | `/api/careers` | Emails the application with the CV attached (PDF or Word, up to 4 MB). Goes to `CAREERS_NOTIFY_TO` if set, else info@. Roles live in `src/content/careers.ts`; each role page has JobPosting structured data for Google Jobs. |
| Cal.com bookings into the inbox | `/api/cal-webhook` | Verifies `x-cal-signature-256` with `CAL_WEBHOOK_SECRET`, fails closed. |
| Booking calendar | `/book` | Short qualifier, then the Cal.com calendar, loaded only after consent. |
| Cookie banner | all pages | Same `tg-consent` key as before, so returning visitors keep their choice. |
| Microsoft Clarity | consent gated | Loads only with consent and when `VITE_CLARITY_ID` is set. |
| Vercel Analytics | all pages | Cookieless page counts. |
| SEO | `/sitemap.xml`, `/robots.txt`, `/llms.txt`, OG image | All original URLs kept; `/prism` and `/legal/*` redirect to them. |

## Deploying on Vercel

The environment variables already in the existing Vercel project are used under the same names: `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `CAL_WEBHOOK_SECRET`, `VITE_CAL_LINK`, `VITE_CLARITY_ID`. `next.config.mjs` passes the two `VITE_` values to the browser at build time. See `.env.example`.

Deploy this folder to the same Vercel project (framework preset: Next.js), then:

1. Submit the contact form once and confirm the email arrives at info@talavishiraajgroups.com.
2. Book a test slot on `/book`, confirm the Cal.com webhook email arrives, then cancel it.
3. Check `/sitemap.xml` and a few old URLs.

`vercel.json` keeps the host redirects (tjgroups.com to www.talavishiraajgroups.com) and the security headers.

## Notes

- Locally the forms show an "Email is not configured" message, because the Zoho password lives only in Vercel. That is expected.
- The production build needs about 3 GB of free memory. On this PC, close other heavy apps and run `NODE_OPTIONS=--max-old-space-size=3072 npm run build`. Vercel builds on its own servers.
