# 13 — The 27-course marketing library: what is in it and what is actually useful

Source: `Downloads/The Complete Digital Marketing Guide - 27 Courses in 1`.
73GB, 1,307 files, 577 videos across 35 modules.

## What could and could not be extracted

| Format | Count | Usable |
|---|---|---|
| `.mp4` | 577 | No. Video only, not transcribed |
| `.srt` | 579 | **Partly.** Only 31 are English. The rest are translations (lt_LT, zh_CN, pt_BR, es_ES, de_DE, th_TH and others) |
| `.html` transcripts | 41 | **Yes.** The richest source |
| `.pdf` | 77 | Partly. Many are slide images with no text layer |

**~1.4M characters extracted** from the modules relevant to this project. Everything
below was read, not skimmed from titles.

**Video-only, nothing recoverable:** `3. Website Building`, `5. Email Marketing`,
`28. Content Marketing Machine`, `31. Manual Market Research`, `8. THEORY`.
Website Building is the one worth watching manually if any are.

---

## The honest headline

**This library is beginner to intermediate digital marketing, and it largely repeats
the 21-book library already mined in `04` and `07` — at a lower level of rigour.**

Sales Psychology covers reciprocity, scarcity and social proof. Weinschenk's *Neuro
Web Design* covers the same ground with the underlying research and eight factors
rather than four, and it is already applied to this site in `07`. Copywriting teaches
AIDA; StoryBrand and Maslen are in `04` and are sharper. Content Marketing is a
weaker version of Sheridan's Big 5.

Saying so matters, because the temptation with a 73GB library is to treat volume as
value. Four things in it are genuinely additive. The rest is confirmation.

---

## 1. The 3 Boxes — the one new tactic worth having

> *"The entire goal with this technique is to have a person go from 'yes or no, I don't
> know if I want to buy this' to 'which one should I buy'."* [FACT, verbatim]

Attributed in the course to Apple's phone line-up. The mechanism: a single offer forces
a binary decision where the default answer is no. Three options change the question
being asked.

> [INFER] This is a real gap in the current setup. **Prism is one offer, so every
> visitor faces a yes/no.** That is the hardest question to win, especially with no
> published proof.
>
> **Where it cannot be applied:** not as price tiers. Canon fixes Prism at one scope and
> one price, and the owner's decision is that no price appears on the site at all.
> Inventing good/better/best would break both.
>
> **Where it already works, by accident:** the build vs buy framework outputs three
> directions — build, buy, or partner. That is a three-box structure and it is part of
> why the tool reads as useful rather than as a sales device.
>
> **Where it could be applied honestly:** the moment after the framework result. Rather
> than one call to action, present the three real paths: do it yourself with what the
> framework gave you, talk to us about the decision, or talk to us about the build.
> Same three boxes, no invented tiers.

## 2. The LinkedIn profile template

The only concrete artefact in the LinkedIn module. Structure, verbatim: [FACT]

```
WHAT I DO:            I help [audience] achieve [goal] by providing [service]
WHO I WORK WITH:      [job titles, industries]
WHY IT WORKS:         [why this partnership pays]
WHAT MAKES US DIFFERENT: [experience, certifications, patents]
WHAT OTHERS SAY:      [2-3 testimonials, real name and company]
HOW IT WORKS:         [your process]
WANT TO TALK?         [direct contact]
```

> [INFER] Useful because LinkedIn is the primary channel in `05`, and the founder's
> profile is the asset rather than the company page. Two slots are worth noting:
>
> - **"certifications/patents"** — the founder holds a filed patent and has IIA
>   research history. That slot is already fillable and currently unused.
> - **"2-3 testimonials, real name and company"** — blocked. Independent confirmation
>   that named references are a required input, not a nice-to-have. That is the same
>   blocker flagged in `06`, `08` and `12`.

## 3. Long-tail keyword principle — confirms what the data already showed

The SEO module's core argument: short keywords are unwinnable, middle keywords are
contested, **long-tail keywords that are specific, low-competition and conversion
intent are where a small site competes.** [FACT]

> This is not new, but it independently confirms the approach in `02` and `10`.
> "Pizza" is unwinnable; "pizza delivery Chicago" is winnable. Mapped across:
> "AI" is unwinnable, "build vs buy framework" is winnable. The module adds no data,
> and everything in `02` came from actual autocomplete evidence rather than theory.

## 4. The GA4 module — the most immediately useful thing in the library

295,882 characters, the largest extracted module. [FACT]

> [INFER] Relevant right now for a specific reason. Vercel Web Analytics **does not
> support custom events on the Hobby plan** — confirmed in Vercel's own pricing docs.
> Hobby gets 50,000 page-view events a month and no custom events at all, which is
> exactly what the dashboard reported. Every instrumented event on the site is
> currently firing and being discarded.
>
> GA4 is free, supports unlimited custom events, and there is a full course on it
> sitting unused in this folder. If the decision is to avoid paying for Vercel Pro,
> this module is the implementation guide. The trade is that GA4 brings cookie and
> consent obligations the current cookieless setup does not have.
>
> Deferred at the owner's instruction. Recorded here so the option is not lost.

---

## What was read and judged duplicative

| Module | Extracted | Verdict |
|---|---|---|
| 11. Branding | 164k chars | Covered better by Miller, *Building a StoryBrand* (`04 §3`) |
| 12. Content Marketing | 58k chars | Weaker than Sheridan's Big 5 (`04 §1`) |
| 13. Sales Psychology | 29k chars | Reciprocity, scarcity, social proof. All in Weinschenk (`07 §1`), with research |
| 14. Copywriting | 52k chars | AIDA. Useful, but StoryBrand and Maslen are sharper (`04 §3`, `04 §8`) |
| 15. Customer Service | 52k chars | Not an acquisition problem at this stage |
| 33. WordPress Masterclass | 60k chars | Not applicable. The site is React and prerendered |
| 30. ChatGPT strategy, 9. Prompt engineering | 745k chars | Tooling, not strategy |

## Modules deliberately not extracted

Google Ads, Facebook Ads, Facebook Ecommerce, Facebook Marketing, Instagram, YouTube,
YouTube Ads, Pinterest, Quora, Twitter, Influencer Marketing, Freelance.

> Paid social and paid search are ruled out in `05` and `12` on evidence, not
> preference: bidding against funded agencies while sending clicks to a site with no
> published proof. The consumer social channels do not reach a founder making a
> six-figure build decision.

## Net effect on the strategy

Nothing here changes the direction in `06` or `12`. It adds one tactic worth using
(the three boxes, applied at the framework result rather than as price tiers), one
template for a channel already prioritised, and one implementation path for the
analytics gap.

The independent confirmation is worth something on its own: a general marketing
curriculum, written for a different audience, arrives at the same conclusions on
long-tail targeting, reciprocity before asking, and named testimonials as a
precondition. Those were already the plan.
