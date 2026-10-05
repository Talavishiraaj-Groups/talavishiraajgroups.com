# 02 — Search demand evidence

## Method and its honest limits

No Ahrefs / Semrush / Search Console access in this session. **Therefore this file
contains no search volumes.** Anyone who gives you a monthly volume for these
queries without tool access is inventing it — the supplied notes file did exactly
that (see `03`).

What was used instead, and what it legitimately proves:

**Google Autocomplete corpus** (`suggestqueries.google.com`), 48 seed queries across
`gl=us`, `gl=gb`, `gl=ae`, `gl=in`. [FACT — raw responses saved this session]

Autocomplete is a real first-party artefact of aggregate query behaviour. It proves
three things reliably and nothing else:
1. **Existence** — a completion means real people type that string.
2. **Dominant intent** — the completions reveal what the query *means* to Google's
   users, which is often not what a marketer assumes.
3. **Absence** — a seed that returns *nothing* has demand too thin to register.
   This is the most decision-useful signal of the four.

It does **not** give volume, difficulty or commercial value. Where those matter,
they are flagged as open.

---

## Finding 1 — the company's own category vocabulary has no market

This is the most important result in this file.

| Seed | What Google's users actually mean by it | Verdict |
|---|---|---|
| `workflow intelligence` | monitor, nexus, **radiology**, **Optum**, **Change Healthcare**, Carina | Owned by US healthcare IT |
| `operations diagnostic` | **VMware** (`vcf operations diagnostics`, `aria operations diagnostics`), medical diagnostic criteria | Owned by enterprise infrastructure tooling |
| `founder bottleneck` | **population genetics** — "founder effect vs bottleneck effect", "genetic drift" | Not a business term at all |
| `decision intelligence` | Gartner, Magic Quadrant, Cassie Kozyrkov, Mastercard | Owned by enterprise analytics vendors |

[FACT — all four, from autocomplete responses]

The live site brands Prism a **"Workflow Intelligence System"** and a *"structured
workflow intelligence assessment."*

> [INFER] Ranking for "workflow intelligence" would require displacing Optum and
> Change Healthcare, and any visitor who did arrive would be a radiology
> administrator. The category name is not merely low-volume — it is **already owned
> by a different industry**. This is a naming failure with direct SEO consequences.
>
> Jakob's Law (see `04`) says the same thing from the UX side: a buyer cannot search
> for a category they have never heard of.

## Finding 2 — the obvious "audit" keywords are career-intent, not buyer-intent

| Seed | Dominant completions |
|---|---|
| `operational audit` | auditor, **meaning**, **jobs**, example, vs internal audit, vs financial audit, **auditing pdf** |
| `business process audit` | **auditor**, internal audit, **jobs**, "auditor google", "auditor equity bank", **test bank** |
| `business process improvement consultant` | **jobs**, **salary**, "protiviti salary" |
| `fractional coo` | **meaning**, **jobs**, **salary**, jobs remote, roles, **work** |
| `crm implementation consultant` | **jobs**, **salary** |
| `ai automation consultant` | **jobs**, **salary**, **course**, **training**, certification |

[FACT]

> [INFER] These clusters are saturated with people who want *to be* the consultant,
> plus accounting students. Ranking for them produces traffic that cannot buy —
> exactly Hormozi's purchasing-power failure (`04 §2`). A plan targeting "operational
> audit" would generate reportable traffic and zero enquiries.
>
> Buyer intent within these clusters survives only in the **modified** variants:
> `fractional coo services`, `fractional coo companies`,
> `business process improvement consulting services`,
> `operations consultant for small business` (the #1 completion for its seed, in
> both US and GB). [FACT]

## Finding 3 — four seeds returned nothing at all

`how to fix tool sprawl` · `process documentation for small business` ·
`rev ops audit` · `internal tools development agency` ·
`too many tools in my business` · `ai strategy consultant for small business` ·
`saas development company for startups` · `business automation company dubai`

[FACT — empty autocomplete responses]

> This directly falsifies the supplied notes file, which claimed a competitor gets
> "80% of their organic search traffic" from a page about **"How to fix tool
> sprawl."** That query does not register in Google's autocomplete corpus at all.
> [FACT] The claim was fabricated. See `03`.
>
> [INFER] More broadly: the *problem language the company uses internally*
> ("tool sprawl", "coordination overhead", "systems visibility") is not language
> buyers type. It is consultant language. This is the second half of the same
> vocabulary failure as Finding 1.

## Finding 4 — where demand demonstrably does exist

Two patterns carry real, unambiguous commercial intent.

### (a) `[service] + [geography]` — the strongest pattern observed

`ai agent development company` completes to **`in india`, `in chennai`, `in florida`,
`in usa`, `in kolkata`, `in dubai`, `in bangalore`, `in australia`** — and to a
brand, **`osiz`**, which has evidently colonised the set. Identical completions
returned for `gl=us` and `gl=in`. [FACT]

`custom software development company` completes to `in india`, `in usa`, `uk`,
`london`, `near me`, `in pune`, `in chicago`. [FACT]
`ai consultancy` (GB) completes to `services`, `firm`, `company`, `uk`, **`london`**,
`near me`. [FACT]
`software development company bangalore` has a full, deep completion set. [FACT]

> [INFER] Geography is the single highest-intent modifier in this market, and
> Talavishiraaj is unusually well placed to use it: real presence in **Bengaluru**
> (HQ) and the **UK** (founder resident in Birmingham), staff in the US. That is a
> legitimate claim to two of the highest-intent geo markets, not a fabricated one.
> The site currently lists five regions and stakes a credible claim to none.
> There is no location page, no address, no city, no jurisdiction on the site.

### (b) `ai automation` + `[small business | vertical]`

`ai automation agency` — live and deep in **US, GB and AE**, completing to
`for small businesses`, `near me`, `services`, `reddit`, `website`, `meaning`,
`dubai`, plus operator-intent (`course`, `how to start`, `business model`). [FACT]

`ai automation for` → `small businesses`, `businesses`, `real estate agents`,
`ecommerce`, `local businesses`, `project management`. [FACT]

`automate my business` → `with ai` is the **top** completion. [FACT]

`n8n` has a genuine consultant economy: `n8n consultant`, `n8n automation
consultant`, `n8n agency`, `n8n ai automation agency`, `best n8n agency in india`,
`hire dedicated n8n developers`. [FACT]

`ai readiness assessment` completes to `framework`, `tool`, `methodology`,
`questionnaire`, `template`, and to vendor brands (**ServiceNow, Microsoft**). [FACT]

> [INFER] `ai readiness assessment` is the most interesting single find in this
> file. It is the **same shape of product as Prism** — a structured pre-engagement
> diagnostic — expressed in vocabulary that buyers already search, with real
> demand, and with the `tool` / `questionnaire` / `template` completions signalling
> that searchers want an **instrument**, not a brochure. That is a direct,
> evidence-backed route for Prism to be found: reposition the diagnostic into
> vocabulary that already has demand, and publish the instrument.
>
> Caveat [OBS]: enterprise vendors hold the head term. The winnable space is the
> qualified long tail (SME, sector, geography), not the head.

## Finding 5 — the `reddit` tell

`ai automation agency reddit`, `n8n agency reddit`, `ai automation for small
businesses reddit` all complete. [FACT]

> [INFER] Buyers in this category explicitly distrust vendor websites and go to
> Reddit for an unvarnished answer. Two consequences: (i) community presence is not
> an optional extra channel here, it is where the trust decision is actually made;
> (ii) Sheridan's "disarmament" (`04 §1`) is the correct register — the buyer is
> already looking for someone to tell them the unflattering truth.

---

## What this rules in and rules out

**Ruled out** (evidence, not opinion):
- SEO targeting "workflow intelligence", "operations diagnostic", "decision
  intelligence", "founder bottleneck" — wrong industry or wrong domain entirely.
- SEO targeting bare "operational audit" / "business process audit" / "fractional
  COO" — job-seeker traffic.
- Content built on internal problem-language ("tool sprawl", "coordination
  overhead").

**Ruled in, pending volume/difficulty validation:**
- `[service] + [geo]`, anchored on Bengaluru and the UK.
- `ai automation` / `ai agent` + SME + vertical.
- `ai readiness assessment` and its instrument-shaped long tail.
- Big-5 informational content: cost, comparisons, problems (see `03` for proof
  this ranks).
- Reddit and community presence as a first-class trust channel.

## Open — cannot be resolved without tools or owner access
1. Actual volumes and difficulty for every cluster above. **Needs Ahrefs/Semrush.**
2. Whether the site is indexed at all. **Needs Search Console.**
3. Which of the five claimed regions has ever produced revenue. **Needs the owner.**
4. Whether any current client came from search. **Needs the owner.** Highest value.
