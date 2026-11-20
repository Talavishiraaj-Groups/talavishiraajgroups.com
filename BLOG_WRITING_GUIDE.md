# Blog writing guide

This is the brief for every post on /blog, including the ones written by the daily scheduled routine. A post that does not pass `npm run blog:check` does not get published.

## Why the blog exists

To bring founders, operators and technology leaders to the site from search engines and AI assistants (Google, Bing, ChatGPT, Perplexity, Gemini), and to turn some of them into enquiries and booked calls. Every post should leave a reader thinking "these people understand my situation, I should talk to them."

## Who we are writing for

Founders, COOs, CTOs, heads of operations, engineering and product leaders at small and mid-sized companies, across the industries we serve (logistics, manufacturing, healthcare, financial services, SaaS, energy and utilities, and the others under `/sectors/`). They are smart and busy, not researchers. They want to know whether a development changes a decision they have to make about building, buying, modernizing or automating something.

## Markets, in priority order

We want reach and enquiries from these markets, in this order:

1. **United States** (first priority)
2. **United Kingdom**
3. **United Arab Emirates**
4. **Europe** (Germany, the Netherlands, France, Ireland and the Nordics first)
5. **India**

What that means for every post:

- **Write for a US reader by default.** US English, US dollars, US companies, US examples and US regulators first. If a figure only exists in another currency, give it and add the rough dollar value.
- **Then widen in order.** Where it changes the decision, add what is different for the UK, the UAE and Europe, in that order: for example UK GDPR and the ICO, the UAE PDPL and Dubai or Abu Dhabi programmes, the EU AI Act and GDPR. Mention India when it genuinely matters to the story, not by default.
- **Pick news by market.** When choosing between stories, prefer the one that matters most to the highest market on the list. A US or UK story beats an India-only story unless the India story is clearly bigger for our readers.
- **Check demand in that order.** Trend and keyword checks run for the US first, then the UK, the UAE, Europe and India.
- About one post in six can be written mainly for one of the later markets (for example "AI regulation in the UAE for mid-size companies"), so each market builds its own search presence over time.

## Picking the topic

The firm works across many industries, not only AI, so topics come from all of what we do:

- **Our services**: software and systems engineering, AI and automation, product engineering and R&D (hardware, embedded, prototyping, manufacturing), business and operating systems, growth and market systems, implementation and delivery.
- **Our sectors** (each has a page under `/sectors/`): supply chain and logistics, manufacturing, healthcare, financial services, insurance, IoT and connected devices, SaaS, ecommerce, agritech, agetech and care, research and development, biotechnology and life sciences, electric vehicles and charging, water utilities, chemical and process industries, real estate and proptech, education and edtech, construction and infrastructure, telecommunications.

Aim for a mix over each month: AI is one strand, not the whole blog. Roughly half the posts should be about software, engineering, operations or a sector, with or without AI in them.

1. Look at what happened in the last 72 hours in technology and in our sectors. Use primary sources first: official announcements from companies, cloud and software vendors, release notes, regulator and government publications, standards bodies, industry associations, earnings calls. Then reputable press (Reuters, The Verge, TechCrunch, Ars Technica, FT, WSJ, Bloomberg, trade publications for the sector such as Supply Chain Dive, Manufacturing Dive, Healthcare Dive, Payments Dive, Utility Dive, Construction Dive, Finextra, and Economic Times, Mint, Inc42 for India).
2. Pick the one development that changes a business decision for our readers. Examples: a regulation or compliance deadline in a sector (FDA, CMS, SEC, EU rules, UAE rules), a tariff or supply chain shift, a major outage or security incident, a vendor price or licensing change (cloud, ERP, CRM), a platform end of life, a new standard (for example in EV charging, healthcare data or payments), a big company's results showing where technology spend is going, a model price cut or new AI capability. Skip pure research results with no business consequence, rumours and funding gossip.
3. Check `content/blog` so you do not repeat a topic from the last 30 days. If the obvious news is already covered, find a different angle (for example, the cost side, the UK or EU side, the risk side) or pick the next story.
4. Follow the weekly rhythm below: most days are for buyer posts, not news.

## Weekly rhythm: buyer, evergreen and trending

Research on firms whose blogs actually win clients (River Pools, Yalantis, Coding Sphere, Modeso and others, researched in November 2026) found the same thing every time: clients come from posts a buyer reads just before hiring, such as cost guides, comparisons and "how to choose" pages. News posts build freshness and authority but rarely bring clients on their own. So the week is weighted toward buyer posts:

| Day (India time) | Post type | Why |
| --- | --- | --- |
| Monday, Wednesday, Friday, Sunday | **Buyer** | Answers a question someone asks right before they hire: what it costs, which option to pick, how to choose a vendor, how long it takes. These are the posts that bring enquiries. |
| Tuesday and Thursday | **Trending** | Catches a story while it is new, earns links and AI assistant citations, and shows the firm is current. |
| Saturday | **Evergreen** | Answers a question people search for every month a step earlier in the journey (how something works for a business, common mistakes, what good looks like). Builds authority and feeds readers toward the buyer posts. |

If a trending day has no story that clears the bar, write a buyer post instead. Never skip a buyer day for news unless the story is exceptional for US buyers (and then say so in the report).

**Buyer posts.** Rules on top of everything else in this guide:

1. Start from the "Buyer backlog" in `_performance.md`; if it is missing or used up, use the seed list below, then find new phrases the same way.
2. The question is one a buyer asks at the point of choosing or budgeting: cost and pricing ("cost to build an AI agent"), "X vs Y", "how to choose" or "how to evaluate", "how long does it take", pricing models, build vs buy, in-house vs agency vs freelancer, proof of concept cost.
3. Answer it with real numbers. For cost posts, put the dollar range in the title or description when sources support one ("$20,000 to $150,000"), show what drives the number in a table, and give a worked example. Cite where every range comes from.
4. Write for someone about to spend money: a clear recommendation, the trade offs, red flags, and the questions to ask a vendor.
5. Check the site first so we do not compete with ourselves: `/what-it-costs`, `/build-vs-buy`, `/in-house-vs-agency`, `/insights/what-ai-integration-costs`, `/insights/how-to-choose-a-software-development-partner`, `/insights/how-to-evaluate-an-ai-consulting-firm` and earlier blog posts. Pick a narrower phrase than any of them and link to them.
6. Link to the one service page a reader would want next (`/services/technology-and-engineering`, `/services/artificial-intelligence-and-automation`, `/services/product-engineering-and-rd`, `/services/business-and-operating-systems` and so on), the matching `/sectors/...` page when the post is about an industry, and `/products` (Prism) when the reader is still deciding whether to build at all.

Seed buyer backlog (US first; skip anything already covered; mix AI and non-AI):

- cost to build an AI agent
- AI chatbot cost for a business
- how to choose an AI development company
- cost to build a RAG system (retrieval augmented generation)
- AI automation cost for small business
- how long does it take to build an AI agent
- AI proof of concept cost
- AI development agency vs freelancer vs in-house team
- AI development pricing models: fixed price vs time and materials
- custom software development cost for a specific sector (for example logistics, manufacturing, healthcare, fintech)
- ERP integration cost
- legacy system modernization cost
- hardware prototype cost / product development cost
- IoT platform development cost
- custom software vs off the shelf for a specific sector

**Choosing an evergreen topic.**

1. Start from the "Evergreen backlog" in `_performance.md`. Take the top item that is not yet covered.
2. If the backlog is empty, find one: a buyer phrase with steady interest over 12 months (SerpApi `google_trends` with `date=today 12-m`, US first, then UK). The interest line should be flat or rising, not one spike.
3. Prefer phrases that show buying intent: cost and pricing, "X vs Y", how to choose or evaluate, checklists and templates, "for small business" or "for <industry>", "in-house vs outsourced", "how long does it take".
4. Check that the top 10 can be beaten: forum threads, thin listicles, out of date pages or vendor pages that dodge the actual question are good signs. Ten strong, current, direct answers from big brands mean you should pick a narrower phrase.
5. Tie it to a service. Every evergreen post links to the service or tool page a reader would want next, and answers the question better than anything on page one: real numbers with sources, a table or chart, a clear recommendation and the trade offs.
6. Do not hang it on a news hook. Use the year in the title only when people search with it ("in 2026"), and set `updated:` whenever you refresh it.

**Give every trending post an evergreen core.** The news is the hook in the first paragraph. The H2 sections should answer questions that still matter after the story fades ("what to ask your AI vendors", "how to secure an AI agent"), so the page keeps ranking for those once the news traffic stops.

## Trend radar: what people are reading right now

Before choosing a topic, spend a few minutes seeing what buyers are actually reading, sharing and searching. Look for a story that is both new (last 72 hours) and likely to be searched for in the weeks after.

| Where | How | What it tells you |
| --- | --- | --- |
| Google Trends | SerpApi engine `google_trends_trending_now` in market order: `geo=US`, `GB`, `AE`, then `DE` and `IN`; `google_trends` for interest in a candidate phrase over 7 days in the US and UK | What is spiking in search, and whether a phrase is rising |
| Google News | SerpApi engine `google_news`, queries across our services and sectors, rotating through them: "AI agents", "AI regulation", "supply chain technology", "manufacturing technology", "healthcare IT", "fintech regulation", "EV charging", "ERP", "cybersecurity breach", "cloud pricing", "SaaS", "proptech", "utilities technology" | Which stories the press is running with in each industry |
| Hacker News | `https://hn.algolia.com/api/v1/search?tags=front_page` (and `search_by_date?query=AI`) | What technical decision makers are reading and arguing about |
| Reddit | `https://www.reddit.com/r/<sub>/top.json?t=week` for r/artificial, r/OpenAI, r/LocalLLaMA, r/smallbusiness, r/Entrepreneur, r/startups, r/UKBusiness, r/dubai, r/IndianStartups (skip if blocked) | The real questions and frustrations people have, in their words |
| YouTube | SerpApi engine `youtube` with the candidate phrase | Whether people want this explained, and which angles get views |
| Google results | SerpApi `google` search for the phrase: "People also ask", related searches, top 10 | How people phrase the question, and how hard it is to rank |

Score each candidate quickly: is it new, is search interest rising, does it change a decision for our readers, and can we say something the top results do not? Pick the one that scores best on all four. Use the exact words people use on Reddit and in "People also ask" for headings and FAQs.

If nothing clears the bar today, do not publish a thin post. Instead, refresh the post that `_performance.md` lists as closest to page one (better title, clearer answer, new facts, `updated:` set to today), or skip the day and say so. Google treats lots of low-value pages as spam; one strong post beats three weak ones.

## Search, trends and what is working

Every post targets one search phrase (`keyword` in the frontmatter) that a buyer would actually type. Pick it like this:

1. **Read `content/blog/_performance.md` first** if it exists. The weekly SEO review writes it: which posts rank on Google and for what, which phrases are close to page one, and which topics to do next. Follow its "Next topics" and "Do not repeat" lists unless today's news is clearly bigger.
2. **Check demand.** Use the SerpApi connector: the `google_trends` engine for interest over the last 7 days in the US first, then the UK, and a normal Google search (`gl=us`) for the candidate phrase. Prefer a phrase with rising interest and buyer intent ("cost", "vs", "how to", "for small business", "pricing", "best way to") over a broad head term you cannot win ("artificial intelligence").
3. **Check the competition.** Look at the top 10 results. If they are all huge brands answering the exact phrase well, choose a more specific phrase (add the audience, the use case, a market such as "UK" or "UAE", or the year).
4. **Use the questions people ask.** The Google results include "People also ask" questions. Use the best two or three as FAQ questions, and phrase one H2 the way people search.
5. **Place it.** The keyword words must be in the title (near the start), the description, the first paragraph and ideally one H2 and the slug. The checker enforces the first three. Write naturally; never repeat the phrase just to repeat it.

Good post titles promise a specific answer: "What an AI chatbot costs a 50 person company in 2026", not "The future of AI chatbots".

## Shape of a post

- **Angle**: what happened, whether it matters for the reader, and what we would do about it. Have an opinion. Say when the honest answer is "ignore this for now".
- **Length**: 1,000 to 1,600 words of body.
- **Opening paragraph**: the news and why the reader should care, in under 70 words. No scene setting.
- **Sections**: 4 to 7 H2 headings. Phrase at least two as the question a reader would type into a search box ("What does this cost a 50 person company?"). Open each section with a one or two sentence direct answer, then the detail. That is what AI answer engines quote.
- **Something concrete**: a worked example, a rough cost calculation, a short checklist, a comparison table, or a decision rule. Every post needs at least one.
- **Internal links**: at least two, written into sentences, to pages that genuinely help: the six `/services/...` pages (technology and engineering, AI and automation, product engineering and R&D, business and operating systems, growth and market enablement, implementation and delivery), the matching `/sectors/...` page for an industry post, `/what-it-costs`, `/build-vs-buy`, `/in-house-vs-agency`, `/products` (Prism, an independent read on a build or buy decision), `/resources/ai-production-readiness-checklist`, relevant `/insights/...` and earlier `/blog/...` posts.
- **Sources**: link at least one source inline where the fact is used, and list 3 to 6 in the frontmatter. Only cite pages you actually opened.
- **Ending**: end on the practical next step for the reader. Do not add a summary section and do not write a sales pitch; the page template adds the enquiry box.

## Easy to read, easy to act on

Write so a busy founder can skim it in two minutes and still get the point. No jargon, no heavy thinking required.

- One idea per paragraph, three or four sentences at most. The checker rejects paragraphs over 95 words.
- Average sentence under 22 words, and almost none over 38. Mix short and long.
- Everyday words: "use" not "utilize", "help" not "facilitate", "cost" not "total cost of ownership" unless you explain it.
- Spell out any acronym a non-engineer might not know the first time, for example "retrieval augmented generation (RAG)".
- Explain one technical idea with a concrete comparison from ordinary business life.
- Reading ease (Flesch) of 50 or more. The checker reports it.

## Visuals inside the post

Every post needs at least one visual so the main point lands at a glance. Use whichever fits the content, and never invent numbers for it:

- A Markdown table for comparisons.
- A `chart` block for a handful of numbers (horizontal bars, highlight the one that matters):

  ````
  ```chart
  { "title": "Monthly cost at 40% automation", "unit": "$", "data": [ { "label": "600 requests", "value": 188 }, { "label": "1,500 requests", "value": 545 } ], "highlight": 1, "note": "Our calculation from Zendesk's published pricing" }
  ```
  ````
- A `stats` block for two to four headline numbers, each with what it means:

  ````
  ```stats
  [ { "value": "$0.99", "label": "Zendesk's price per extra automated resolution" } ]
  ```
  ````
- A `steps` block for a short process or plan: `["First step", "Second step", "Third step"]`.

Put the first visual within the first third of the post.

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

## Cover image

Every post gets a unique, animated cover automatically. It is drawn from the post's slug, title and first tag in the brand colors, and the same artwork is used on the blog cards, at the top of the post and as the social share image. There is nothing to design or upload.

The first tag is printed large on the cover, so make it a short topic word or two ("AI agents", "Cost", "Security", "Regulation").

You can steer the cover with an optional `cover` line in the frontmatter. Pick the motif that matches the story:

| motif | use for |
| --- | --- |
| network | agents, assistants, copilots, orchestration |
| bars | cost, pricing, spend, market numbers, earnings |
| shield | security, risk, privacy, safety, governance |
| grid | regulation, policy, standards, audits |
| flow | automation, workflows, integrations, operations |
| layers | data, RAG, knowledge, cloud, infrastructure |
| chip | chips, GPUs, compute, devices, inference |
| wave | models, LLM releases, voice, multimodal |
| orbit | strategy, market shifts, anything else |

Palettes: signal, ink, paper, ember, mint, night, sky, sand. Avoid using the same palette as the previous day's post, so the blog grid stays varied.

## File format

File: `content/blog/<slug>.md`. The slug is the main search phrase, lowercase with hyphens, under 60 characters, no date in it.

```markdown
---
title: "60 characters or fewer, main search phrase near the start"
description: "110 to 160 characters. What the reader will learn, in plain words. Used as the search snippet."
date: 2026-11-14
author: Talavishiraaj Groups
keyword: prebuilt ai agents vs custom
tags: [AI agents, Cost, Build vs buy]
cover: { motif: network, palette: signal }
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
2. Check the day in India time (`TZ=Asia/Kolkata date +%A`): Monday, Wednesday, Friday and Sunday are buyer days, Tuesday and Thursday are trending, Saturday is evergreen (see the weekly rhythm). Read `content/blog/_performance.md` if it exists, then pick the topic and keyword and read the sources, following the rules above.
3. Write the post to `content/blog/<slug>.md` with today's date (India time).
4. Fact check before anything else. Go through the post line by line, including the title, description, short answer, FAQ answers, chart and stats numbers. For every fact, number, date and name, confirm it against the source page you opened. Remove anything you cannot confirm. Check that every link opens, and use the final address: if a link redirects (`curl -s -o /dev/null -w "%{http_code} %{redirect_url}" <url>` shows 301 or 302), replace it with the address it redirects to.
5. Run `npm run blog:check -- content/blog/<slug>.md`. Fix every ERROR and look at every warning. Repeat until it passes. Then reread the whole post once more against the voice rules; the checker cannot catch everything.
6. Commit only that file with the message `Blog: <title>` and push to `main`. Vercel publishes it in about two minutes.
7. Wait three minutes, check that `https://www.talavishiraajgroups.com/blog/<slug>` returns 200, then run `npm run blog:ping -- /blog/<slug>`.
8. If the Vercel build fails, revert the commit so the site stays up, and report why.
