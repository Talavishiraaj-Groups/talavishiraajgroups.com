# Experiment log

Every change is recorded with hypothesis, evidence, change, expected outcome,
metric, observation window, result, learning and next iteration.

A result is never filled in from assumption. Where no data source is connected,
the result reads `PENDING — no data source`.

---

## EXP-001 — Insights section as non-branded entry point

**Status:** Implemented 2026-09-27. Result pending data.

**Chain link:** Search → Click → Understanding. Currently the chain has no
entry point before "vendor shortlist".

**Hypothesis**
Publishing a small number of substantive, experience grounded answers to
pre-vendor technical questions will create the site's first non-branded organic
entry point, reaching readers who do not yet know the company. Routing each
article to its capability page and the matching case study will convert a share
of that attention into capability interest rather than a bounce.

**Evidence**

1. Every one of the 28 existing routes is a vendor page. Nothing addresses a
   reader earlier than vendor evaluation. Verified by route inventory.
2. `whiteraven.app` ranks for "AI prototype to production" with a question
   headed, tooling specific, practitioner written piece. Verified by Exa, Feb
   2026. This establishes both the format that wins and that the bar is
   reachable.
3. Talavishiraaj holds documented engagements on exactly these two questions,
   so the articles can be written from what happened rather than from general
   practice. Verified against `/case-studies`.
4. Source principle, Sheridan: buyers search their questions before they search
   vendors.

**Change**
- New route `/insights` (index) and `/insights/<slug>` (articles).
- Two articles, each: direct answer first, question headed sections, named
  tooling, the failure mode stated before the remedy, and a routing block to the
  relevant capability and case study.
- Wired into footer navigation, sitemap, internal links from the matching
  capability pages, and `Article` structured data.
- Primary navigation deliberately unchanged at six items.

**Expected outcome**
Non-branded impressions begin appearing in Search Console for question shaped
queries within 4 to 8 weeks of indexing. Articles become the first landing pages
that are not the homepage or a capability page.

**Metric**
Primary: non-branded impressions and clicks to `/insights/*` (Search Console).
Secondary: `service_interest` and `case_study_view` events fired from an article
(analytics, once connected).

**Observation window**
28 days minimum after indexing confirmed. Rankings do not settle faster, so no
judgement before that.

**Result**
PENDING — no data source. Search Console is not connected, so there is no
baseline to compare against and no impression data to read.

**Learning**
Pending.

**Next iteration**
Once Search Console is connected: confirm indexing via URL Inspection, record the
first 28 days of query data, and only then decide whether to write articles 3 and
4 from the priority list in `research-log.md`. Do not publish more on assumption.

---

## EXP-002 — Capability pages promoted from anchors to routes

**Status:** Implemented in the previous cycle. Result pending data.

**Chain link:** Search → Click.

**Hypothesis**
Six distinct capability intents sharing one URL cannot rank independently.
Giving each its own page with its own title, description and schema creates six
competing surfaces where there was one.

**Evidence**
The six capabilities were anchors on `/services`. Anchors do not rank as
independent results. Verified by route inventory before the change.

**Change**
Six routes at `/services/<slug>`, each with title, meta description, canonical,
`Service` schema and FAQ where warranted. Hub retained the legacy anchor ids so
previously published `/services#tech` links still resolve.

**Metric**
Number of distinct URLs receiving impressions (Search Console).

**Observation window**
28 days after indexing.

**Result**
PENDING — no data source.

**Learning**
Pending.

**Next iteration**
If a capability page draws impressions but few clicks, rewrite its title and
description against the actual queries shown, not against assumption.

---

## EXP-003 — Self hosted fonts and removal of third party requests

**Status:** Implemented in the previous cycle.

**Chain link:** Click → Understanding (page experience, LCP).

**Hypothesis**
Removing the Google Fonts embed removes a DNS lookup and TLS handshake from the
critical path and removes the visitor IP disclosure that would otherwise raise a
consent question in UK and EU markets.

**Change**
14 woff2 faces self hosted, latin subsets, two preloaded.

**Metric**
Field LCP (Search Console Core Web Vitals, once connected). Lab proxy: critical
path weight.

**Result**
PARTIAL — lab measured only. Critical path is roughly 92 KB: 7.5 KB HTML gzip,
6.3 KB CSS gzip, two preloaded woff2 faces. Zero external network fetches
confirmed against the built output. Field data requires real visitors and is not
available.

**Learning**
Lab measurement confirms the mechanism. It does not confirm the user experience
outcome. Those are different claims and only the first can be made now.

**Next iteration**
Read Core Web Vitals in Search Console once the property has field data.

---

## Template

```
## EXP-00N — <title>

**Status:**
**Chain link:**
**Hypothesis**
**Evidence** (numbered, each verifiable, each with its source)
**Change**
**Expected outcome**
**Metric**
**Observation window**
**Result** (or: PENDING — no data source)
**Learning**
**Next iteration**
```
