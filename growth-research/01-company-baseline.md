# 01 — Company baseline (discovered independently, 2026-09-28)

## What the company is

| Attribute | Value | Basis |
|---|---|---|
| Name | Talavishiraaj Groups | [FACT] own site, LinkedIn |
| Domain | talavishiraajgroups.com (canonical on `www.`) | [FACT] |
| Founded | 2025 | [FACT] Exa org record, LinkedIn |
| HQ | Bengaluru, Karnataka, India | [FACT] LinkedIn / Wellfound |
| Founder | Dhiraj T H — based Birmingham, England | [FACT] LinkedIn profile |
| Headcount | 6 (1–10 band) | [FACT] LinkedIn-derived |
| Staff spread | India, UK, US, Nigeria | [FACT] Exa org breakdown |
| LinkedIn followers | 143 | [FACT] as of Exa record |
| Industry label | Technology, Information and Internet | [FACT] LinkedIn |
| Other exec titles claimed | CRO (Santiago Baranchuk), Co-Founder (Carlos Andrew) | [FACT] LinkedIn profiles exist |

Founder background (from his own LinkedIn): R&D at Indian Institute of
Astrophysics, mechanical design, software engineering, COO at GIGZS, one filed
patent. [FACT — self-reported]

His stated operating principles, verbatim in substance: *research before
execution; diagnose before prescription; structure before scale.* [FACT]

> [INFER] This is the single most valuable raw asset the company has. It is a
> real, specific, defensible point of view held by a named human with a credible
> reason to hold it. It appears nowhere on the website.

## What the website actually is

26 URLs in the sitemap, all `lastmod 2026-09-16`. [FACT]

**Technically competent.** [FACT] — verified by fetching raw HTML:
- Server-prerendered per route via `scripts/prerender.mjs`; real `<h1>`/`<h2>`
  structure and body copy present in the HTML source, not client-only. Confirmed
  on 6 pages.
- 4–6 JSON-LD blocks per page.
- `robots.txt` open, explicitly welcomes AI crawlers, disallows `/api/`, points
  to the sitemap.
- Self-hosted fonts, preloaded above-the-fold faces, no third-party requests.
- Unknown routes fall back to a `noindex` head.

**Commercially thin.** [FACT] — the full page inventory is:
- 1 home, 1 about, 1 services hub + 6 capability pages
- 1 `/systems` (= Prism), 1 case-studies hub + 6 case studies
- 1 partnerships, 1 contact, 7 legal/governance pages

That is **zero** blog, resources, glossary, tools, calculators, templates,
research or comparison pages. [FACT]

> [INFER] There is no non-branded organic surface area whatsoever. The site can
> only be found by people already searching the company name. Every one of the 26
> pages is a brand-intent or transactional page. The 7 legal pages are the
> largest single content category on the site.

## What the copy says

Positioning as written: *"Solving complex problems with research and
engineering"*, delivered through **six** co-equal capability buckets —
Technology & Engineering, AI & Automation, Product Engineering & R&D, Business &
Operating Systems, Growth & Market Enablement, Implementation & Delivery. [FACT]

Stated target regions on the Prism page: US, UK, UAE/GCC, Europe, India. [FACT]
Stated buyer types on the home page: six of them, from founders to established
enterprises to strategic partners. [FACT]

### Prism, as the site presents it
- Called a *"Workflow Intelligence System"* / *"structured workflow intelligence
  assessment"*. [FACT]
- Deliverables: PDF report + strategy deck, recorded clarity session, visual
  workflow/systems maps, implementation roadmap, supporting docs. [FACT]
- Timeline: 10–13 business days. [FACT]
- 5-stage structure: intake → stakeholder sessions → analysis → findings session
  → final delivery. [FACT]
- **No price shown anywhere on the page.** [FACT]
- Roughly a third of the page is reproduced refund/delivery/governance policy
  text. [FACT]
- Portfolio section lists 3 further systems as "In development". [FACT]

### Observations on the copy itself
- [OBS] No named person appears anywhere on the site. No founder page, no faces,
  no bylines. For a 6-person unknown firm selling judgement, this removes the
  only credibility asset it has.
- [OBS] All six case studies are anonymised and contain no figures. They
  describe what was done, never what changed. "Operations scattered across
  spreadsheets and chat threads were consolidated into one view."
- [OBS] The register is uniformly abstract and self-referential: "structured",
  "systems", "clarity", "accountable", "enterprise-grade". The word "structured"
  appears 9 times on the Prism page alone.
- [OBS] Six capabilities × six buyer types × five regions. The site describes a
  large consultancy. The company is six people, one year old.
- [OBS] `/systems` foregrounds refund policy over outcome. A page selling a
  diagnostic devotes more space to how to get your money back than to what you
  learn.

> [INFER] The site is built to look safe to a large buyer, and in doing so
> removes every specific thing that would make a real buyer choose it. The
> governance depth is genuinely unusual for a firm this size and is an asset —
> but it is currently deployed as the argument rather than as reassurance behind
> the argument.

## The competing internal account of the product

A supplied notes file (`Website books/website competitors and inbound traffic
leads.txt`, a transcript of a prior AI chat) describes Prism as:
a **$2,499 fixed-price, fixed-scope operational diagnosis**, 10–13 business days,
for **founder-led businesses at $500k–$5M revenue**, diagnosing the single core
structural constraint plus a 90-day roadmap. [UNVERIFIED — from that file only]

The 10–13 day timeline matches the live site exactly. [FACT] The price, the
revenue band and the "single core constraint" framing appear nowhere on the site.

> [INFER] There are two Prisms: a sharp, priced, specifically-targeted product in
> the internal documents, and a vague, unpriced, everyone-shaped engagement on the
> website. The internal version is the sellable one. This gap is the most
> immediately fixable commercial problem found.

## Known unknowns
- Whether the site is indexed. No Search Console access.
- Actual revenue, client count, or which region produces business.
- Current real price of Prism.
- How the six existing clients were acquired. **Highest-value missing evidence.**
