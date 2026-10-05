# Competitor intelligence

Verified 2026-09-27 via Exa search and direct page fetch. Every company below was
confirmed to exist with a live site. Nothing here is estimated unless labeled.

## The realistic competitive set

Deliberately excludes McKinsey, Accenture, IBM, Toptal and similar. Their
authority is not reproducible and studying them produces no actionable lesson.
These are firms at or near our scale who are competing on content and winning.

| Firm | Size | Base | Content surface | Why relevant |
| --- | --- | --- | --- | --- |
| **nilenso.com** | 19 | Bengaluru + Canada | Engineering blog, 13 years operating | Closest structural peer. Product, engineering and AI consultancy, distributed across two countries, partner led. |
| **fryga.io** | 4 to 5 | Kraków | "Essays on Rails, AI, and product engineering" | Highest publishing intensity observed at the smallest headcount. Proves content leverage does not require scale. |
| **farfield.dev** | small | n/a | "Field notes from the team building Farfield" | Most disciplined cadence. States it publicly and keeps it. |
| **edgefirm.io** | 27 | London + Pakistan | Blog plus active LinkedIn (534 followers) | Closest go-to-market analogue. Distributed team, enterprise AI, LinkedIn as primary distribution. |
| **soatech.co** | small | Europe | "Production AI engineering notes" | Publishes pricing openly. See anti-patterns. |
| **7code.tech** | small | Europe | "Field notes from an AI-first engineering practice" | Publishes self-serving comparison listicles. See anti-patterns. |
| **deepklarity.com**, **trietech.io**, **navyaai.com**, **facta.dev** | small | mixed | Technical blogs | Secondary reference set. Same playbook, varying execution quality. |

## What the winners actually do

Observed directly, not inferred.

**1. Named human authors, every post.**
fryga attributes every essay to Marcin Ostrowski. farfield attributes to Hemesh
Singh. This is universal across the set. "Written by the people doing the work"
is only credible with a name attached.

**2. They do not call it a blog.**
"Essays", "Field notes", "The notebook", "Writing", "Notes". This sets the
expectation of durable thinking rather than company news.

**3. Stated cadence, kept.**
farfield: "One post every other Thursday. Real bugs we found, agent behavior we
measured, and the infrastructure underneath. No newsletter fluff." fryga
published 15 essays between 29 June and 13 August 2026, roughly every 3 to 4
days.

**4. Titles carry a specific, falsifiable claim.**
Not "How to scale Rails". Instead: "Scaling Rails isn't a caching problem: three
years across Norway's biggest airports". The pattern is *correction plus
provenance*: name the common belief, signal the real experience behind the
rebuttal.

Other examples from the same set:
- "AI agents flail on legacy codebases. The codebase is why."
- "Killing react-on-rails: moving a unicorn's views back to Rails"
- "If your coding agent doesn't reduce your maintenance bill, it's costing you twice"
- "Multi-tenant billing is where your SaaS architecture gets tested"

**5. Provenance is concrete and checkable.**
"three years across Norway's biggest airports". "a 13-year-old codebase serving
millions". "Across 2,431 issues filed into customer repos". Specific enough to be
wrong, which is why it reads as true.

**6. They name what they are not.**
fryga: "Strategy decks diagnose without committing. Body shops commit without
diagnosing." Positioning by explicit contrast with the two adjacent categories.

**7. Open source as a distribution channel.**
fryga publishes its Rails AI harness on GitHub. nilenso published Megasthenes, a
code research agent SDK. This is how this segment earns attention without paying
for it.

## Backlinks

**What is measurable here: nothing directly.** No Ahrefs, Semrush, Moz or
Majestic access is connected, so link counts, referring domains and domain
authority cannot be read. Any number presented would be invented, which is the
exact failure in the prior research transcript.

**What is observable:** the *type* of link this segment earns, from evidence
visible on the record.

nilenso has two documented earned mentions:
- A recommendation associated with Andrej Karpathy
- Coverage in 澎湃新闻 (The Paper, Chinese outlet), July 2025

Neither is a directory listing, a guest post or a paid placement. Both were
earned by a technical artifact being genuinely interesting.

**The observable link model for this segment, in order of realistic yield:**

| Type | Mechanism | Realistic for us |
| --- | --- | --- |
| Technical artifact on GitHub | Open source tool gets used, then cited | Yes, but requires something worth releasing |
| Practitioner citation | Another engineer references your post because it answered their question | Yes. This is what the Insights articles are built for |
| Aggregator pickup | Hacker News, Lobsters, language specific newsletters | Possible, unpredictable, not plannable |
| Conference or podcast | Speaking leads to a profile link | Yes, owner dependent |
| Client and partner pages | Mutual reference from delivery partners | Yes, and currently unused |
| Directory listings | Clutch, GoodFirms and similar | Low value, high noise |

**Not pursued:** paid links, guest post networks, reciprocal link schemes, PBNs.
These carry manual action risk and the brief forbids them.

## Expected traffic

**Honest position: this cannot be forecast from here, and any specific number
would be fabricated.**

What determines it is domain age and authority, indexing, query demand,
competition per query and click through rate. Of those, exactly zero are
currently measurable, because Search Console is not connected. There is not even
a baseline.

What can be said, with the reasoning shown:

- The site currently has **no non-branded organic entry point** and, on the
  owner's own report, near zero click through. So the honest baseline assumption
  is that current non-branded organic traffic is approximately nothing.
- The peer set above demonstrates that small teams *can* build meaningful organic
  presence from technical writing. fryga does it at 4 people. That establishes
  the mechanism works at our scale. It does not establish a number for us.
- The lag is long. New content on a low authority domain typically takes weeks to
  index and months to settle in position. Judging this before 28 days would be
  reading noise.

**What to do instead of forecasting:** connect Search Console, record the first
28 days as the baseline, and forecast from first party data after that. That is
recorded as the next action in `experiments.md`.

## Anti-patterns observed in the same set

Things competitors do that we will not copy.

**1. AI generated answer farms.**
`slickrock.dev` runs an `/answers/*` directory with pages written in
unverifiable superlatives: "widely cited as a premier", "internationally
recognized as the premier development shop". This matches what Google's spam
policies describe as scaled content abuse.

**2. Self-serving comparison listicles.**
7code.tech publishes "Top 5 Nearshore AI Development Agencies in Europe (2026)",
a ranking that includes itself. It ranks, and it costs credibility with the
technical buyer who notices.

**3. Published pricing.**
soatech.co lists "€8.5K-€22K fixed" and 7code.tech quotes ranges. Forbidden here
regardless, and it anchors the conversation on cost before value.

**4. Keyword stuffed year tokens.**
"in 2026" appended to most titles across soatech.co and 7code.tech. It dates the
content instantly and reads as written for a crawler.

## Gaps we can exploit

| Gap | Evidence | Our advantage |
| --- | --- | --- |
| Almost all of this set is AI and coding agent focused | Every blog in the set leads with agents or LLMs | We span product engineering, hardware and software integration, R&D and business systems. Nobody in this set covers the physical or the operational side. |
| Nobody writes the "do not build it" case | Every piece advocates doing the thing | Our automation article argues explicitly for when not to automate. That is a differentiated and trustworthy position. |
| Thin on business-side technical decisions | Set is engineer-to-engineer | We can write for the technical buyer who has to justify the decision commercially, which is an underserved and higher intent reader. |

## Decisions arising

1. **Adopt named authorship.** Blocked on the owner confirming who is credited.
   Currently attributed to the organization, which is weaker than every peer.
2. **Adopt the correction plus provenance title pattern** for future pieces.
3. **Do not adopt** pricing publication, comparison listicles, year tokens or
   answer farms.
4. **Consider an open source artifact** as a link earning mechanism. Requires
   something genuinely worth releasing. Not manufactured for SEO.
