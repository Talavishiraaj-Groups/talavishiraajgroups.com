# 14 — Search Console baseline

**The reference point.** Everything after this is measured against it. Recorded
2026-10-12 from Google Search Console, property `talavishiraajgroups.com`, window
5 August to 9 October 2026.

This is the **first first-party search data in the entire project.** Everything in
`02` and `10` was autocomplete evidence, which proves a query exists but gives no
volume and no position. This is Google telling us what actually happened.

---

## The baseline numbers

| Metric | Value |
|---|---|
| Total clicks | **26** |
| Total impressions | **224** |
| Overall CTR | 11.6% |
| Distinct queries | 12 |
| Pages crawled (per the audit tool) | 40 |

### Queries, as recorded

| # | Query | Clicks | Impressions | Type |
|---|---|---|---|---|
| 1 | talavishiraaj groups | **26** | 43 | branded |
| 2 | talavishiraaj groups company | 0 | **164** | branded |
| 3 | talavishiraajgroups.com | 0 | 6 | branded |
| 4 | `(ai or 'artificial intelligence') and ('robust networks' or automation)` | 0 | 2 | boolean |
| 5 | ai production readiness audit what happens in two weeks? | 0 | 2 | non-branded |
| 6 | growth enablement | 0 | 2 | non-branded |
| 7 | dpa vs nda | 0 | 2 | non-branded |
| 8 | wrong | 0 | 1 | noise |
| 9 | long boolean: ML/AI + industrial/manufacturing + automation/RPA | 0 | 1 | boolean |
| 10 | founder-led services firms | 0 | 1 | non-branded |

*(10 of 12 shown; the tool's list was paginated.)*

### Split

| Type | Queries | Clicks | Impressions | CTR |
|---|---|---|---|---|
| **Branded** | 3 | **26** | 213 | 12.2% |
| **Non-branded** | 4 | **0** | 7 | 0% |
| Boolean / recruiter | 2 | 0 | 3 | 0% |
| Noise | 1 | 0 | 1 | 0% |

> **95% of impressions and 100% of clicks are branded.**

---

## What this proves

### 1. The core diagnosis is confirmed by Google, not inferred

`01` and `06` concluded the site had **no non-branded surface area** and could only be
found by people who already knew the name. That was an inference from the page
inventory. It is now a measurement: **zero non-branded clicks in nine weeks.**

Nothing about the strategy changes. The evidence base for it just got much stronger.

### 2. ⚠️ The biggest anomaly: 164 impressions, zero clicks

`talavishiraaj groups company` returned **164 impressions and not one click.** That is
the largest single number in the dataset and it is behaving nothing like query #1, which
converts at 60% (26 clicks on 43 impressions).

A branded query with that gap is unusual. Plausible explanations, in rough order:

1. **Low average position.** Appearing at the bottom of page one or on page two for a
   query containing our own name would produce exactly this. [HYP]
2. **Something else owns the result.** A LinkedIn, Wellfound or directory profile
   outranking the site for the brand, absorbing the clicks while the site still records
   an impression. [HYP]
3. **Non-human impressions.** Scrapers and rank trackers generate impressions and never
   click. [HYP]

**This is the first thing to investigate, and it cannot be resolved without the
position column** (see Gaps below). If it is explanation 1 or 2, it is a real and
fixable loss on the one query where the site should be unbeatable.

### 3. Three non-branded impressions are worth more than their volume suggests

Tiny numbers, but they are signals about what the site is becoming visible for:

- **`ai production readiness audit what happens in two weeks?`** — the most interesting
  row in the table. It maps to the AI production readiness checklist resource *and* to
  the two-week engagement window. Somebody typed a long, specific, buyer-shaped
  question and the site appeared. That is the shape of query the whole content strategy
  is aimed at.
- **`founder-led services firms`** — the exact buyer description from the positioning.
  The language is landing.
- **`growth enablement`** — matches `/services/growth-and-market-enablement`.
- **`dpa vs nda`** — accidental. The legal pages are generating impressions. No buyer
  intent, but it shows thin pages do surface for narrow questions.

> [INFER] The two boolean queries are recruiters or researchers using search operators,
> not buyers. Worth recognising so they are never mistaken for demand.

### 4. What it says about the new content

The data predates the build vs buy framework, the Prism repositioning and the data
engineering article. **None of those pages existed during this window.** So this
baseline measures the site as it was: brand-only.

That is exactly what makes it a useful reference point.

---

## Gaps in this baseline, and what to export next

The data captured here is **queries only**. Three exports are missing and each answers
a question this baseline raises but cannot settle:

| Export | Why it matters |
|---|---|
| **Average position** per query | Settles the 164-impression anomaly. Without it that finding stays a hypothesis |
| **Pages tab** | Which URLs earn impressions. Confirms whether `/products` and `/build-vs-buy` are indexed at all |
| **Countries / Devices** | Vercel shows 32% US, 24% India, plus Ukraine and UAE. Worth checking whether search agrees or whether that traffic is non-organic |

Also worth recording from the Index Coverage report: **how many of the 40 crawled pages
are actually indexed.** The sitemap lists 33. If indexed is well below that, no amount
of content fixes it.

> The audit tool reports **538 backlinks**. [UNVERIFIED] Not from Search Console, not
> independently checked, and Exa is a mention-finder rather than a backlink index. Do
> not treat that number as fact.

---

## What to measure against this, and when

Re-export the same view on **2026-11-09** and **2026-12-09**.

| Metric | Baseline | What good looks like |
|---|---|---|
| Non-branded clicks | **0** | Anything above zero. This is the only number that matters |
| Non-branded queries | 4 | Rising. More queries precedes more clicks |
| `build vs buy` family appearing at all | absent | Present as impressions |
| `talavishiraaj groups company` CTR | **0%** | Resolved either way |
| Total clicks | 26 | Growing, but it will stay brand-dominated for months |

**Do not expect movement before late November.** The content shipped in October, and
indexing plus ranking for new pages on a one-year-old domain with no editorial
backlinks is a months-long process. Reading this again in two weeks and concluding it
failed would be reading noise.

**One caution carried over from `12`:** the audit tool recommends targeting McKinsey's
highest-traffic pages. `what is ai` at 207,962 views a month is not a target, it is a
distraction. This baseline shows the site is not yet ranking for its own name
consistently. That is the altitude to work at.
