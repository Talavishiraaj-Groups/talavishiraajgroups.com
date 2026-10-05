# Marketing research and experimentation system

Working system for turning the website into an inbound acquisition channel.
Detailed research lives in the files here, not in chat.

## The chain this work serves

```
Search → Click → Understanding → Trust → Proof → Capability → CTA → Enquiry → Qualified Lead → Opportunity → Revenue
```

Traffic on its own is not a result. Every proposed change must name which link in
that chain it strengthens and why.

## Files

| File | Holds |
| --- | --- |
| `README.md` | This file. System, current state, next exact task. |
| `research-log.md` | Source learnings, search demand and intent, content gaps. |
| `competitor-intelligence.md` | Verified peer set, what the winners do, backlink model, traffic position, anti-patterns. |
| `ahrefs-baseline.md` | Real Ahrefs numbers for us and competitors, and the DR 0 diagnosis. **Read this first.** |
| `strategy.md` | What the numbers actually imply, and the assessment of every tactic proposed so far. |
| `experiments.md` | Every change as a recorded experiment: hypothesis, evidence, change, metric, window, result, learning, next. |

## Rules

1. **No invented data.** If a number cannot be verified, it is not written down as
   fact. Search Console and analytics are not connected, so no traffic, ranking,
   CTR or conversion figure exists yet. Say so rather than estimating.
2. **Evidence before pages.** No page is created because a keyword has volume.
   It is created at the intersection of demand, business relevance, attainability
   and genuine original expertise.
3. **No farms.** No doorway pages, no mass generated articles, no fake industry
   pages, no fake authority, no competitor paraphrase.
4. **Read-only boundaries hold.** Product substance, Prism substance and policy
   substance never change. Pricing never appears publicly. `npm run check`
   enforces this.

## Review cadence

| Cycle | Scope |
| --- | --- |
| 2 to 3 days | Technical health, build, content quality, UX, implementation, competitor observation, experiment review. |
| Weekly | Search Console data review, once data exists. |
| 14 to 28 days | Ranking and content strategy decisions. Rankings do not move meaningfully in 2 to 3 days, so strategic calls are not made on that cadence. |

## Current state (2026-09-27)

**Done**

- Technical foundation: 28 prerendered routes, per route metadata, canonicals,
  structured data, sitemap, robots, real 404s, self hosted fonts, zero third
  party requests.
- Capability architecture: six capability pages at `/services/<slug>`, each
  addressing a distinct intent, hub at `/services` retaining legacy anchors.
- Proof layer: six anonymized case studies with individual URLs.
- Instrumentation: provider agnostic, dormant, business event vocabulary defined.

**The gap this cycle addresses**

The site has **no non-branded discovery surface**. Every page is a company page
or a capability page. Nothing answers the questions a buyer searches *before*
they know Talavishiraaj exists. That is the single largest barrier to inbound:
there is no entry point for someone who has never heard of the company.

**Done this cycle**

- Insights section: `/insights` plus two articles grounded in documented engagements.
- Resources section: `/resources` plus the AI production readiness checklist, the
  first reference artifact. 33 routes prerendered, 31 indexable.
- Ahrefs baseline captured and analysed. `ahrefs-baseline.md`.
- Strategy rewritten against the real numbers. `strategy.md`.

**The finding that changes everything**

`talavishiraajgroups.com` has **852 referring domains and a Domain Rating of 0**,
with only **26% dofollow**. That combination is abnormal and points at a low
quality or spam link profile, most likely from past mass directory submission.
For comparison, datatobiz.com has 1.9K referring domains and DR 38.

Until this is diagnosed, content investment is building on sand.

**Next exact task, in order**

1. **Check Search Console, Manual actions report.** This single check determines
   whether the link profile has already caused a penalty. Everything else waits
   on it. Blocked on owner.
2. Export the 852 referring domains from Ahrefs and categorise them. Blocked on
   owner.
3. Disavow only if 1 or 2 produce evidence. Not speculatively.
4. Confirm the Insights byline. Every verified peer credits a named person.
5. Connect Search Console, submit sitemap, record 28 day baseline.

**Do not** publish content volume. The data actively argues against it:
newbreedrevenue has 2,188 blog URLs and 5.4K monthly traffic, roughly 2.5 visits
per URL. See `strategy.md` section 4.

## Blocked on external access

These cannot be done from the repository and are not claimed as done:

| Item | Needed from | Why it blocks |
| --- | --- | --- |
| Search Console verification | Owner | No impressions, clicks, CTR, position or indexing data exists. All CTR and ranking work is hypothesis only until connected. |
| Analytics provider | Owner | Instrumentation is built and dormant. No page view, CTA or conversion data exists. Do not invent a measurement id. |
| `tjgroups.com` TLS certificate | DNS/hosting | HTTPS visitors never reach the redirect. Not fixable in React source. |
| SMTP credentials in Vercel | Owner | `SMTP_USER` and `SMTP_PASSWORD` must be set or both forms return a configuration error. |
| LinkedIn page and profile access | Owner | Cannot read follower, impression, engagement or visitor data without it. Strategy can be written; performance cannot be diagnosed. |
