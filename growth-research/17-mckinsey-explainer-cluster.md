# 17 — The McKinsey explainer cluster, and two topics selected for /insights

Requested: map the mckinsey.com explainer cluster, list the top five topics by
traffic and engagement, select two for `/insights`, outline angles, report.

---

## 0. One instruction could not be followed as written, and why

The brief asks for the top five explainers **by traffic and engagement**.
Per page traffic for a third party domain cannot be observed without a rank
and traffic tool. Ahrefs and SimilarWeb are both connected to this workspace
but **neither is authorised**, so neither returned data.

The same applies to the figures in the brief itself: 1,083,500 monthly organic
visits and 162,974 keywords for mckinsey.com are **[UNVERIFIED]** here. They
are plausible and nothing below depends on them.

What was used instead, all verifiable and all recorded below: the full cluster
read directly from the live index, Google autocomplete for demand shape, and
live SERPs for competition. Selection is justified on evidence that could be
checked, rather than on a traffic estimate that could not.

---

## 1. The cluster, mapped

[FACT] `mckinsey.com/featured-insights/mckinsey-explainers` carries **116
explainers**. Of those, **27 sit in our subject area** (AI, software, data,
cloud, operating models, transformation).

[FACT] The pattern is rigid and it is the point:

```
URL      /featured-insights/mckinsey-explainers/what-is-<topic>
Title    "What is <topic>?"
```

Examples from the live index: *What is generative AI?*, *What is an AI agent?*,
*What is an operating model?*, *What is SaaS?*, *What are AI guardrails?*,
*What is a data center?*, *What is multimodal AI?*, *What does AI really cost?*,
*What is a forward-deployed engineer?*

[INFER] **The transferable asset is the format, not the topic list.** The title
is the search query, verbatim, as a question. That is the same mechanism the
FAQPage work exploited on our four existing articles, where 25 of 25 section
headings were already questions.

[INFER] **Copying their biggest topics is the worst available move.** Writing
"What is generative AI" means competing with McKinsey, IBM and AWS on a head
term, from a domain with no external links. The cluster is useful as a map of
*where the question format works*, and then we pick ground they have left open.

---

## 2. Five candidates assessed, and three rejected

[FACT] Autocomplete and live SERP evidence for each.

| candidate | demand shape | verdict |
|---|---|---|
| **AI readiness** | assessment, framework, index, score, test, tool | **SELECTED** |
| **Vendor lock-in** | risk, problem, in cloud computing | **SELECTED** |
| Forward-deployed engineer | salary, how to become one, role, vs software engineer | **Rejected** |
| Operating model | in business, in finance, **mckinsey**, for an organization | **Rejected** |
| Technical debt | in agile, in scrum, in software development | **Rejected** |

**Why the three were rejected, because the reasons matter more than the picks:**

- **Forward-deployed engineer** has the strongest and fastest rising demand of
  anything tested, and it is the wrong demand. Every modifier is *salary*,
  *how to become one*, *role*, *vs software engineer*. **That is job seeker
  intent, not buyer intent.** It is the identical trap recorded in
  `02-demand-evidence.md`, where audit and COO terms turned out to be career
  searches. A page here would attract candidates, not clients.
- **Operating model** returns `mckinsey` as an autocomplete modifier. They own
  the term by brand. There is no version of this we win.
- **Technical debt** returns *in agile*, *in scrum*, *in software development*.
  Practitioner and learner intent. Our buyer does not search this; their
  engineers do.

---

## 3. Selected topic 1: "What is AI readiness?"

### Demand
[FACT] Autocomplete: `what is ai readiness assessment`, `...index`, `...score`,
`...test`, plus a separate strong family at `ai readiness assessment framework`
/ `tool` / `methodology`.

### Competition, read from the live SERP
[FACT] Page one: Genesys, Straive, a Medium post, Microsoft Learn, and
letterbglobal.com, a small consultancy.

[INFER] **No McKinsey, no Gartner, no Deloitte, no Big Four.** Mostly vendor
definition pages, and a small consultancy already holding a page one slot,
which is the clearest possible signal that domain size is not the gate here.

[FACT] People Also Ask is present and hands over the structure:
*What are the five stages of AI readiness?* · *What are the five pillars?* ·
*What are the three pillars?* · *How to measure AI readiness?*

### The angle, and why it is ours
[OBS] **Every page currently ranking defines AI readiness as a maturity model:
how prepared you are to adopt and scale AI.** Genesys: "the measure of an
organization's preparedness to implement and scale AI". Straive: "capacity to
deploy and sustain". Microsoft: "preparedness for AI adoption across seven
pillars".

[INFER] **Not one of them asks whether the organisation should adopt AI at
all.** Every one is published by a party that sells AI adoption, so readiness
is framed as a gap to be closed by buying something. That framing is not a
conspiracy, it is an incentive, and it is identical to the pattern found on the
build versus buy SERP in `16-competitor-keywords.md`, where every ranking page
was written by a vendor who profits from one answer.

**Proposed angle:** *readiness for what?* The piece accepts the pillars
framing, then adds the question the category omits: a readiness score tells you
whether you could deploy AI, not whether you should. It closes on the
conditions under which the honest answer is not yet, or not at all.

This is the existing house style. All four published articles are "should you"
pieces, and the `/services` differentiator already states it: we will tell you
not to build it.

**Internal routing:** this is the strongest organic entry point to Prism the
site could have. It also answers the Optise query `prism ai readiness
assessment tool`, which currently returns nothing.

---

## 4. Selected topic 2: "What is vendor lock-in?"

### Demand
[FACT] Autocomplete: `risk`, `problem`, `in cloud computing`, `meaning`.
*Risk* and *problem* are buyer-side words, not learner words.

### Competition
[FACT] Page one: DataCore, Cloudflare, OutSystems, Kong.

[INFER] Harder than topic 1. Cloudflare and Kong are strong domains. But note
what they are: **every single ranking page is a platform vendor explaining the
risk of being locked into a platform.** Cloudflare's closes with "How does
Cloudflare help". The conflict is on the page.

### The angle
**Proposed angle:** lock-in as a build versus buy input rather than a cloud
topic. What actually creates it (data model, proprietary extensions,
integrations, operational knowledge), what exit really costs, and when
accepting lock-in is the correct commercial decision rather than a failure.

[INFER] The last part is the differentiator. The vendor pages treat lock-in as
a danger to be escaped, because they want the reader to switch to them. A firm
selling no platform can say the unpopular thing: lock-in is often the right
trade, and the mistake is accepting it without pricing it.

**Internal routing:** `/build-vs-buy`, where reversibility is already one of
the seven dimensions, and `/what-it-costs`, which already carries switching and
integration figures.

---

## 5. Recommendation on sequencing

1. **Write "What is AI readiness?" first.** Easier SERP, direct Prism routing,
   and it closes a known gap.
2. **Then "What is vendor lock-in?"** Harder, but the differentiation is
   sharper and it strengthens `/build-vs-buy`, which
   `16-competitor-keywords.md` already identified as the weakest commercially
   important page at 767 words against roughly 4,500 for what ranks.
3. **Use the existing article shape**: question headings throughout, which the
   FAQPage schema then picks up automatically with no extra work.
4. **Do not expand the explainer cluster further on volume alone.** The
   forward-deployed engineer finding is the warning: the highest demand
   candidate tested was the least useful.

[HYP] Not acted on, recorded for the owner: both pieces would route to Prism,
and both argue that the party advising should not be the party selling. If that
argument is going to carry the content strategy, it is worth deciding
deliberately rather than by accumulation.
