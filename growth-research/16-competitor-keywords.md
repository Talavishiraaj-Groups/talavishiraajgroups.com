# 16 — Rival keyword targeting, and which keywords are actually winnable

Requested: check Kellton, Softeq, McKinsey, BCG and Umbrex for the keywords
that rank, and identify the real commercial rivals.

**A limit worth stating first.** What a site *ranks* for needs a rank tracker
(Ahrefs, Semrush) and nothing here substitutes for that. What is established
below is what each rival **targets**, taken from their own titles, H1s and URL
structure, plus live SERP and autocomplete evidence for the queries that
matter. Targeting is observable; ranking is inferred and labelled as such.

---

## 1. The named firms are not one competitive set. They are four.

| Firm | Same buyer as us? | Verdict |
|---|---|---|
| Kellton | Yes | **Direct rival.** Same services, same buyer. |
| Softeq | Yes | **Direct rival.** Embedded and edge AI lean. |
| McKinsey, BCG | No | **Not rivals.** Board level strategy, different purchase. |
| Umbrex | No | **A channel, not a rival.** See 1c. |
| Bain, Deloitte, Crosslake, AKF | No | Rivals only in a category we should not enter. See 3. |

### 1a. Kellton: roughly thirty pages, one commercial keyword each

[FACT] Home title: `AI-Driven Technology Consulting | Digital & Product
Engineering | IT Services | Kellton`. Three keyword phrases plus brand, 86
characters, which truncates.

[FACT] The structure is a hub and spoke where **the URL slug is the keyword**:

```
/ai-services            → /ai-development-services, /generative-ai-services,
                          /agentic-ai-automation, /ai-governance-and-risk-services,
                          /data-engineering-ai
/product-engineering    → /digital-application-development, /mobile-engineering,
                          /iot-and-wearables-solutions, /quality-engineering-and-automation
/data-analytics         → /data-consulting, /data-migration-modernization,
                          /analytics-services, /integration-and-api
/cloud-engineering      → /cloud-consulting, /cloud-migration,
                          /cloud-managed-services, /devsecops
/nextgen-services       → /blockchain-application-development, /web3-development-services,
                          /metaverse-development-company
```

[OBS] Note `metaverse-development-company`. The `-company` suffix targets the
buyer pattern `[service] + company`, alongside `+ services` and `+ consulting`.
That triplet is the commercial query shape this whole category chases.

[FACT] **Kellton targets roughly 30 commercial keywords with 30 pages. We have
6 capability pages.**

### 1b. Softeq

[FACT] Home title: `Embedded Tech, Edge AI, and Physical AI Development |
Softeq`. Narrower and sharper than Kellton's. Confirms the positioning finding
in `15-optise-audit.md`: this is an embedded and hardware set.

### 1c. Umbrex is a distribution channel we have been treating as a competitor

[FACT] Umbrex is a marketplace matching clients to independent consultants,
over 90% of them McKinsey, Bain or BCG alumni. It carries 27 service lines and
32 industry practices.

[INFER] It does not sell engineering delivery, so it does not compete for our
buyer. **It is closer to a directory than a rival**, and belongs in the
`12-inbound-launch-plan.md` list of places to be listed rather than in a
competitive analysis. Flagged for the owner to assess: membership appears to be
gated on consultant pedigree.

### 1d. McKinsey and BCG are not reachable and not the same purchase

[INFER] Their SEO strength is an enormous informational content library built
over decades. There is no keyword where a nine week old site displaces them,
and their buyer is not ours. **Useful as a format reference only.** One live
observation that matters more than their rankings: autocomplete returns
`build vs buy framework mckinsey`, meaning people search for *their* framework
by name. That is brand pull we cannot copy.

---

## 2. The head terms are closed. This is not a pessimistic reading, it is the data.

[INFER] Against Kellton and Softeq, terms like "AI development services",
"product engineering services" or "cloud consulting" are contested by firms
with hundreds of pages, years of domain age and link profiles to match. At zero
non branded clicks (`14-search-console-baseline.md`), entering there is not a
near term option.

[OBS] Two of the result types on these SERPs cannot be won with a vendor page at
all: **listicles** ("Top ten technical due diligence service providers in
2026", "Best Technical Due Diligence Firms in 2026"). The play there is to be
*listed*, which is outreach and PR, not on page work.

---

## 3. A category that looks perfect and is a trap

[FACT] Autocomplete for **technology due diligence** returns buyer intent
immediately: `providers`, `firms`, `consulting`, `checklist`, `in mergers and
acquisitions`. For **technical due diligence**: `consultant`, `report`,
`checklist`.

[INFER] This looks like Prism's category. An independent read on a technology
decision is, in plain terms, technology due diligence.

[FACT] **The live SERP says otherwise.** Page one for "technology due diligence
providers" is Bain, Persistent, West Monroe, Crosslake, AKF Partners, Avenga,
OMMAX and BD Emerson. Look at the URLs: Bain's sits under `/private-equity/`,
Persistent's under `/private-equity-firms/`.

[INFER] **The intent is a private equity firm diligencing an acquisition
target, not a founder deciding whether to build.** Same words, different buyer,
and the incumbents are the largest advisory firms in the world. This is the
search intent lesson in its clearest form.

**Recommendation: do not reposition Prism as technology due diligence.** It
would trade a category we can describe honestly for one we would lose on both
competition and intent.

---

## 4. Where the opening actually is

[FACT] SERP for **"how to decide whether to build or buy software"**:

- Zylo (SaaS management vendor blog)
- Quickbase (no code platform vendor blog)
- **Three YouTube videos**, occupying a large block
- People Also Ask present

[INFER] **No Bain, no McKinsey, no Kellton. Vendor blogs and video.** This is a
winnable SERP, and it is the query family our existing pages are already about.

Two further observations:

[OBS] **The ranking pages are written by parties with a stake in the answer.**
Zylo sells SaaS management, Quickbase sells a no code platform. Both profit
from "buy". Zylo's own article even concedes "the vendors ranking for this
topic each have a stake in yours", and then closes with Book a Demo. Our
independence claim is real in a SERP where nobody else's is.

[FACT] **But we are nowhere near the format.** Zylo's page is roughly 4,500 to
5,000 words with a 15 factor comparison table, a weighted seven criteria
scorecard, pros and cons lists, and a six question FAQ.

| page | words |
|---|---|
| Zylo, ranking | ~4,500 to 5,000 |
| our `/build-vs-buy` | **767** |
| our `/products` | 1,617 |
| our `/what-it-costs` | 1,528 |
| our `/in-house-vs-agency` | 1,234 |

[INFER] `/build-vs-buy` is the single clearest gap on the site. It is an
interactive seven question framework with almost no surrounding substance, on a
query whose SERP expects a comprehensive guide. The fix is not padding: the
material already exists in `benchmarks.js` and across the insight articles.

[OBS] Video appears three times on page one. A short video on this one question
would compete for space no page of ours can occupy. Owner decision, noted.

---

## 5. What to do, in order

1. **Deepen `/build-vs-buy` substantially**, keeping the interactive framework
   and adding the comparison table, the cost evidence and the failure modes
   that the ranking format expects. Highest value single action on the site.
2. **Keep `/what-it-costs` and `/in-house-vs-agency` as they are on length.**
   Both already sit at or near the length of what ranks for their queries.
3. **Do not chase head service terms** against Kellton and Softeq.
4. **Do not reposition Prism toward due diligence.**
5. **Add Umbrex to the directory list** in `12-inbound-launch-plan.md` to
   assess, rather than treating it as a rival.
6. **Pursue listings in the "best firms" listicles** by outreach. That is the
   only route into that result type.

[HYP] Unvalidated and worth stating: the `[service] + company|services|
consulting` pattern Kellton uses at scale could be applied narrowly to the two
or three capabilities where we are most differentiated, rather than across all
six. Not acted on, because more thin pages against stronger domains is the
failure mode this whole file argues against.
