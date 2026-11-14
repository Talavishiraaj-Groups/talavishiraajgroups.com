# Blog writing guide

This is the brief for every post on /blog, including the ones written by the daily scheduled routine. A post that does not pass `npm run blog:check` does not get published.

## Why the blog exists

To bring founders, operators and technology leaders to the site from search engines and AI assistants (Google, Bing, ChatGPT, Perplexity, Gemini), and to turn some of them into enquiries and booked calls. Every post should leave a reader thinking "these people understand my situation, I should talk to them."

## Who we are writing for

Founders, COOs, CTOs and heads of operations at small and mid-sized companies in India, the US, the UK, the Gulf and Australia. They are smart and busy, not AI researchers. They want to know whether a development changes a decision they have to make about building, buying or automating something.

## Picking the topic

1. Look at what happened in AI in the last 72 hours. Use primary sources first: official announcements from model labs and cloud providers, release notes, papers, regulator publications, earnings calls. Then reputable press (Reuters, The Verge, TechCrunch, Ars Technica, FT, Economic Times, Mint, Inc42).
2. Pick the one development that changes a business decision for our readers. A model price cut, a new agent capability, a regulation taking effect, a big company's results showing where AI spend is going, a security incident in an AI tool. Skip pure research results with no business consequence, rumours and funding gossip.
3. Check `content/blog` so you do not repeat a topic from the last 30 days. If the obvious news is already covered, find a different angle (for example, the cost side, the India side, the risk side) or pick the next story.
4. About one post in five can be evergreen instead of news, answering a question buyers search for ("how much does an AI chatbot cost to build", "RAG vs fine tuning for a small team"). These still need current sources.

## Shape of a post

- **Angle**: what happened, whether it matters for the reader, and what we would do about it. Have an opinion. Say when the honest answer is "ignore this for now".
- **Length**: 1,000 to 1,600 words of body.
- **Opening paragraph**: the news and why the reader should care, in under 70 words. No scene setting.
- **Sections**: 4 to 7 H2 headings. Phrase at least two as the question a reader would type into a search box ("What does this cost a 50 person company?"). Open each section with a one or two sentence direct answer, then the detail. That is what AI answer engines quote.
- **Something concrete**: a worked example, a rough cost calculation, a short checklist, a comparison table, or a decision rule. Every post needs at least one.
- **Internal links**: at least two, written into sentences, to pages that genuinely help: `/services/artificial-intelligence-and-automation`, `/services/technology-and-engineering`, `/what-it-costs`, `/build-vs-buy`, `/in-house-vs-agency`, `/products` (Prism, an independent read on a build or buy decision), `/resources/ai-production-readiness-checklist`, relevant `/insights/...` and earlier `/blog/...` posts.
- **Sources**: link at least one source inline where the fact is used, and list 3 to 6 in the frontmatter. Only cite pages you actually opened.
- **Ending**: end on the practical next step for the reader. Do not add a summary section and do not write a sales pitch; the page template adds the enquiry box.

## Facts

- Never invent numbers, quotes, customers, case studies or results. Every figure must come from a source you opened, and say whose figure it is.
- Do not claim Talavishiraaj Groups did specific work for a named client. You may refer to the published case studies at `/case-studies`.
- If sources disagree, say so. If something is unconfirmed, say it is unconfirmed or leave it out.
- Dates: write "on 12 November" rather than "yesterday" or "this week", because the post will be read later.

## Voice

Write as the firm, in the first person plural, like a senior engineer who has shipped these systems explaining it to a smart client over coffee. Plain, specific, a little dry, confident about what we know and honest about what we do not.

Apply the humanizer rules (github.com/blader/humanizer, based on Wikipedia's "Signs of AI writing"). Draft first, then go through the draft and remove every one of these:

1. "Not X, but Y" contrasts and their variants ("It's not about X. It's about Y."). One per post at most.
2. One-line dramatic closers and fragments ("Let that sink in." "The result? Chaos.").
3. Aphorisms that sound deep and say nothing ("At its core, AI is about trust.").
4. Run-ups before the point ("Let's dive in", "Here's the thing", "Honestly?").
5. Arguing with an objection nobody raised.
6. Lists of three by reflex. Use two or four when that is what the content has.
7. Several sentences in a row starting the same way.
8. Em dashes and en dashes. Never use them. Use a full stop, comma, colon or brackets.
9. Stacked hedges ("may potentially", "could possibly").
10. The AI vocabulary: delve, tapestry, testament, landscape, realm, pivotal, crucial, robust, seamless, cutting-edge, game-changer, unlock, harness, elevate, empower, transformative, showcase, underscore, navigate, embark, myriad, moreover, furthermore. The checker lists the full set.
11. Inflated significance and stock closers ("This marks a new era", "The future looks bright", "Only time will tell").
12. Vague "-ing" tails ("..., highlighting the importance of...", "..., reflecting broader trends").
13. Borrowed authority ("experts say", "many believe") without naming who.
14. "Serves as", "stands as", "boasts" where "is" or "has" works.
15. Bold used for decoration, and bold labels at the start of list items.
16. Title Case Headings, emojis, and arrows. Use sentence case headings.
17. Chatbot residue ("Great question", "I hope this helps", "In conclusion").
18. A heading repeated in the first sentence under it.

Then read it aloud in your head. Vary sentence length: some short, some long. Keep the odd specific detail, aside or mild opinion that makes it sound like a person. Spelling: US English, "organization".

## File format

File: `content/blog/<slug>.md`. The slug is the main search phrase, lowercase with hyphens, under 60 characters, no date in it.

```markdown
---
title: "Under 65 characters, main search phrase near the start"
description: "110 to 160 characters. What the reader will learn, in plain words. Used as the search snippet."
date: 2026-11-14
author: Talavishiraaj Groups
tags: [AI agents, Cost, Build vs buy]
answer: "35 to 75 words. The direct answer to the question the post is about, written so an AI assistant could quote it on its own."
faq:
  - q: "A question a buyer would actually ask?"
    a: "Two to four sentences that answer it directly."
  - q: "..."
    a: "..."
  - q: "..."
    a: "..."
sources:
  - title: "Publisher: page title"
    url: "https://..."
  - title: "..."
    url: "https://..."
  - title: "..."
    url: "https://..."
---

Opening paragraph...

## First section heading

...
```

Do not put an H1 in the body. Use `##` and `###` only.

## Publishing checklist (the daily routine follows this)

1. `git pull` on `main`, then `npm ci` if `node_modules` is missing.
2. Pick the topic and read the sources, following the rules above.
3. Write the post to `content/blog/<slug>.md` with today's date (India time).
4. Run `npm run blog:check -- content/blog/<slug>.md`. Fix every ERROR and look at every warning. Repeat until it passes. Then reread the whole post once more against the voice rules; the checker cannot catch everything.
5. Commit only that file with the message `Blog: <title>` and push to `main`. Vercel publishes it in about two minutes.
6. Wait three minutes, check that `https://www.talavishiraajgroups.com/blog/<slug>` returns 200, then run `npm run blog:ping -- /blog/<slug>`.
7. If the Vercel build fails, revert the commit so the site stays up, and report why.
