# Blog performance review: 2026-11-23

Weekly search and AI visibility review. All positions below are what SerpApi (Google and Bing) and Exa returned on 23 November 2026 (India time). Search Console figures come from `_search-console.md` (last 28 days to the morning of 23 November).

How to read the positions: Google now returns about 7 to 10 results per request, so "not in top 30" means not found in the first three pages for the US or UK, "not in top 20" means only two pages were checked, and "not in top 10" means only the first page was checked (UAE, Germany, India). Page one for "ai agent liability" had 9 organic results in both the US and the UK, so a first result on page two is position 10 or 11; we count it as 11 in the US and 12 in the UK (second result on page two).

## Summary

The blog now has nine posts and one is close to page one: "AI agent liability" is 11th on Google in the US, 12th in the UK and 7th in Germany, four days after it went live. No other post shows up in Google's top 30 for its target phrase in the US or the UK, but that is mostly age: the two buyer posts (ERP implementation mistakes, hardware prototype cost) are one and two days old and Google has not indexed them yet. Search Console tells a better story than the rank checks: 881 impressions and 13 clicks in 28 days, average position 9.1, with almost half the impressions on the GPT-6.2 Astra vs Sol post through shorter phrases such as "astra vs sol". Bing, which ChatGPT search draws on, shows none of our posts, and only the Astra vs Sol post is returned by Exa. Seven of the nine posts are about AI, so next week should lean hard toward software, operations and sector buyer posts.

## Rankings

| Post | Keyword | US | UK | UAE | Germany | India | Bing (US) | Exa | Change since last week |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| /blog/hardware-prototype-cost (22 Nov) | hardware prototype cost | not in top 30 | not in top 30 | not in top 10 | not in top 10 | not in top 10 | not in top 10 | not returned | first check |
| /blog/erp-implementation-mistakes (21 Nov) | erp implementation mistakes | not in top 30 | not in top 30 | not in top 10 | not in top 10 | not in top 10 | not in top 4 (Bing showed 4) | not returned | first check |
| /blog/how-to-measure-ai-roi (20 Nov) | how to measure ai roi | not in top 30 | not in top 30 | not in top 10 | not in top 10 | not in top 10 | not in top 10 | not returned | first check |
| /blog/ai-agent-liability (19 Nov) | ai agent liability | 11 (/blog/ai-agent-liability) | 12 (/blog/ai-agent-liability) | not in top 10 | 7 (/blog/ai-agent-liability) | not in top 10 | not in top 10 | not returned | first check |
| /blog/gpt-6-2-astra-vs-sol (18 Nov) | gpt 6.2 astra vs sol | not in top 30 | not in top 30 | not checked | not checked | not checked | not in top 7 (Bing showed 7) | returned (4th result) | first check |
| /blog/ai-agent-security-risks (17 Nov) | ai agent security risks | not in top 30 | not in top 20 | not checked | not checked | not checked | not in top 10 | not returned | first check |
| /blog/qwen4-max-for-business (16 Nov) | qwen4 max for business | not in top 20 | not in top 20 | not checked | not checked | not checked | not checked | not checked | first check |
| /blog/fireworks-ai-breach-ai-vendor-security (15 Nov) | fireworks ai breach | not in top 20 | not in top 20 | not checked | not checked | not checked | not checked | not checked | no change (not in top 20 both weeks); now indexed |
| /blog/prebuilt-ai-agents-vs-custom (14 Nov) | prebuilt ai agents vs custom | not checked | not checked | not checked | not checked | not checked | not checked | not checked | last week UAE 2; not rechecked this week (outside the newest 8) |

Notes:
- Bing misreads short phrases. For "hardware prototype cost" it returned hardware stores (Ace, Lowe's, Home Depot); for "how to measure ai roi" it returned dictionary pages for "measure"; for "ai agent liability" and "ai agent security risks" it returned generic "what is AI" pages (OpenAI, IBM, Gemini). These are not real competitors, but they mean Bing does not yet treat those phrases as questions. For "erp implementation mistakes" Bing showed a Copilot answer citing jrsdynamics.com, erpsoftware.com, erpsoftwareblog.com, kanhasoft.com and priority-software.com, all "10 common mistakes" listicles.
- For "gpt 6.2 astra vs sol" Bing's seven results were llm-stats.com, OpenAI, benchlm.ai, artificialanalysis.ai, systemdesignsimple.com, CodeRabbit and intelligentliving.co. Exa returned our post fourth, after OpenAI, ChatGPT Learn and Cognativ.
- Google showed an AI Overview on every query checked this week.

## By market

- United States: one post near page one ("ai agent liability", 11th). Search Console has the US as the largest audience (259 impressions, 4 clicks). Best next move: non-AI buyer posts with real dollar ranges (healthcare and logistics software cost), and get the ERP and hardware posts indexed through internal links from new posts.
- United Kingdom: "ai agent liability" is 12th; nothing else in the top 30. Search Console: 34 impressions, no clicks. Best next move: a UK first trending post on the supermarket refrigeration cyberattack (UK trend list, 50,000+ searches), with ICO and NCSC detail.
- United Arab Emirates: none of the newest four posts is on page one. Search Console: 16 impressions, 1 click (up from 6 impressions). Last week's UAE win (prebuilt agents, 2nd) was not rechecked this week. Best next move: no UAE specific post yet; keep adding UAE notes (PDPL) where they change a decision.
- Europe: "ai agent liability" is 7th in Germany, our first page-one result in Europe. Search Console shows the Netherlands at 20 impressions. Best next move: the EU Product Liability Directive applies from 8 December 2026; a short EU post or an update before that date is timely.
- India: nothing in the top 10. Search Console: 140 impressions and 5 clicks, mostly brand searches. No action; India stays last.

## Close to page one

US and UK first:

1. /blog/ai-agent-liability: US 11, UK 12, Germany 7. Fix applied this run (see the bottom of this file): a new subsection "Can a company blame the AI itself?" covering Moffatt v. Air Canada, California Civil Code 1714.46 and the E-SIGN Act, a new FAQ from People also ask ("Could AI agents be held criminally liable?"), a sharper description that states the answer, and a link to /build-vs-buy. Next fix if it is still on page two next week: link to it from the next two AI posts and add a UK paragraph on where liability sits under UK law (only from a source we open).

No other post is in positions 4 to 30 in any market we checked.

## Not indexed yet

Google's `site:talavishiraajgroups.com/blog` search returned 8 results: /blog, /blog/ai-agent-liability, /blog/ai-agent-security-risks, /blog/qwen4-max-for-business, /blog/prebuilt-ai-agents-vs-custom, /blog/how-to-measure-ai-roi, /blog/gpt-6-2-astra-vs-sol and /blog/fireworks-ai-breach-ai-vendor-security.

- Missing: https://www.talavishiraajgroups.com/blog/erp-implementation-mistakes (published 21 November).
- Missing: https://www.talavishiraajgroups.com/blog/hardware-prototype-cost (published 22 November).
- Both are in the sitemap. They are one and two days old, so this is likely just time; link to both from the next posts. The Fireworks post, missing last week, is now indexed.

## Market patterns

What is winning for our buyers this week, with evidence:

1. "Cost in 2026" pages with a range up front win cost searches and feed the AI Overview. For "custom software development cost" (US), the top results are Blackthorn Vision, Soltech, Bellwood (5 November 2026), a Reddit thread, a LinkedIn article, Keyhole Software, Axora, GainHQ (10 November 2026) and Yarify, nearly all titled "Custom Software Development Cost in 2026" with "full breakdown", "real ranges" or "pricing guide". Google's AI Overview answers "$25,000 and $250,000+ for most business applications" and cites eight of these pages plus two YouTube videos. Our cost posts should put the dollar range in the title or the first sentence and say "in 2026".
2. Calculators rank first. For "healthcare software development cost" (US) the first result is ScienceSoft's cost calculator, and related searches for both "custom software development cost" and "hardware prototype cost" include "calculator". Interfacernd's prototype cost page (4th in the US, 1st in the UK) links its own PCB cost calculator and timeline planner. We cannot build tools in a post, but a "cost by stage" table plus a worked example is the closest equivalent; the owner may want a simple estimator page later.
3. Forums sit in the top five on buyer questions. A Reddit r/Entrepreneur thread ("How much would it cost for 1 prototype of my product?") is 2nd in the US for "hardware prototype cost", an r/Netsuite thread is 2nd for "erp implementation mistakes", and a Reddit thread is 4th for "custom software development cost". Google rewards plain first-hand answers; our posts should quote the forum question as a heading and answer it in two sentences.
4. The strongest competitor pages share the same build. Interfacernd's "Prototype Cost in 2026" defines the three kinds of prototype first, prices each stage, gives three tiers with timelines, lists "what a quote should itemise" and ends with a free call. RMBG's hardware cost guide (published 2 November, updated 5 November 2026) names and dates every source (Altium April 2026, Cad Crowd October 2026) and shows three worked budgets in one table in dollars and euros. GlobeSoft's logistics cost page (19 November 2026) opens with the range in the first sentence and a table by system type with timeline and "biggest cost driver" columns. Common to all: answer first, a table, named dated sources, an honest "planning ranges, not quotes" line.
5. AI assistants cite checklists and scorecards for "how to choose" questions. Asked "How do I choose an AI development company to build an AI agent?", Exa returned Codiant, Thetisa, Aranv, Rerun, Harmonytics and Goalsr, all built as numbered questions to ask a vendor, red flags and (Rerun) a weighted scorecard table. Asked about logistics software cost, Exa returned GlobeSoft, a RaftLabs calculator, Appwrk, Ouranos and JustSoftware, all with tables by system type.
6. Legal and news queries are crowded by authority sites. For "ai agent liability" the US top 10 is Duke Law, Beck Reed Riden, Reddit, a law blog, Forbes, Bonfy, UNC law, Superwise and MIT Technology Review; we still reached 11th by answering the exact People also ask questions with sourced facts. News queries (Fireworks, Qwen4-Max, GPT-6.2) are taken by the vendor, security news sites and quick reaction blogs within a day.

What our posts should do differently: put the range or verdict in the title and first sentence; add a "what a quote should include" or "questions to ask" list to every buyer post; show one worked budget table; date and name every source in the text; use the forum and People also ask wording as headings; and pick phrases one step narrower than the big agency cost pages (sector plus system type).

## Lessons from our posts

- What moved: "AI agent liability" reached 11th (US), 12th (UK) and 7th (Germany) in four days. It is a trending post with an evergreen core, and its H2s match People also ask almost word for word ("Who is liable for AI agents?"). That shape works; reuse it.
- What did not, and why: the GPT-6.2 Astra vs Sol post is not in Google's top 30 for "gpt 6.2 astra vs sol" yet earns 422 Search Console impressions and 3 clicks. The impressions come from shorter forms ("astra vs sol", "sol vs astra", "gpt astra vs sol"). Lesson: choose the shortest phrase people actually use as the keyword, and lead the title with it. Its click rate is under 1%, so a title that promises a verdict ("Astra vs Sol: use Sol by default, here is when Astra pays") is worth testing.
- The two buyer posts are too new to judge and not indexed yet.
- The Fireworks breach post is now indexed and has 60 impressions, but news and security sites own the phrase. Breach posts earn impressions, not rankings; future security posts should target the evergreen question ("questions to ask a vendor after a breach") rather than the vendor's name.
- Bing has 35 of our URLs indexed (Search Console note, 22 November) but ranks none of the posts. Short, noun-only keywords are misread by Bing; question-form headings and descriptions may help.

## Topic mix

All nine posts so far fall within the last 14: 7 are about AI (prebuilt agents, Fireworks breach, Qwen4-Max, agent security, GPT-6.2, agent liability, AI ROI) and 2 are software, operations or sector posts (ERP implementation mistakes, hardware prototype cost). That is far off the roughly half and half target. Next week should have at least four of seven posts outside AI: healthcare software cost, logistics software cost, an engineering R&D partner guide, and a non-AI trending post (supply chain software go-lives, the UK fridge cyberattack or the bank outage).

## Buyer backlog

Interest numbers are Google Trends, 12 months to 22 November 2026, relative within each batch of five phrases (100 is the busiest week of the busiest phrase in that batch). "First half" and "second half" are the averages of the two six month halves. Phrases from `_search-console.md` come first.

1. how to choose an engineering and R&D services company
   - Service or sector: product engineering and R&D, research and development sector. Market: United States.
   - Interest: not checked on Trends this week (search budget). Search Console: "engineering and r&d services" already earns 14 impressions with no page answering it directly.
   - Why winnable: not checked on Google this week; the phrase is already showing us in results, which is the strongest signal we have.
   - People also ask: not checked; use the hardware prototype questions ("How much should a prototype cost?", "What is the typical cost of creating a prototype?") as a cost section.
   - Leads to: /services/product-engineering-and-rd, /sectors/research-development, /blog/hardware-prototype-cost.
2. healthcare software development cost
   - Service or sector: software engineering, healthcare. Market: United States, then United Kingdom.
   - Interest: "healthcare software development" was the busiest phrase in its US batch: average 48.1 (first half 55.7, second half 40.7). In the UK it is rising: average 14.5 (first half 9.2, second half 19.6).
   - Why winnable: all nine US results are development agencies' own pages (ScienceSoft calculator, Fingoweb, Triazinesoft, Space-O, Seasia, KMS, Appinventiv, DFY Growth Engine, Cleveroad), three of them about apps rather than clinical or back office systems. A page that prices by system type with a worked example and explains what HIPAA work adds (from a source we open) can stand out.
   - People also ask: "How much does IT cost to develop a healthcare app?", "How much does medical software cost?", "How much do software developers cost?", "What is a healthcare software developer?"
   - Leads to: /sectors/healthcare, /services/technology-and-engineering, /insights/healthcare-interoperability.
3. logistics software development cost
   - Service or sector: software engineering, supply chain and logistics. Market: United States.
   - Interest: "logistics software development" US average 9.9 (first half 12.0, second half 7.8), in a batch led by "ai chatbot cost".
   - Why winnable: Google top 10 not checked this week. Pages an AI assistant returns (Exa) are GlobeSoft (19 November 2026, $40,000 to $180,000 for a TMS or WMS), a RaftLabs calculator, Appwrk (October 2025), Ouranos and JustSoftware, mostly offshore rate based. Pairing cost with timeline (see item 8) and the FreightWaves "18-month go-live" story gives a fresher angle.
   - People also ask: not checked.
   - Leads to: /sectors/supply-chain-logistics, /insights/supply-chain-visibility, /services/technology-and-engineering.
4. what to look for in an AI agent development company
   - Service or sector: AI and automation. Market: United States.
   - Interest: not checked on Trends. Search Console: "evaluate ai consulting kc on ai automation" earns 18 impressions and the insight page /insights/how-to-evaluate-an-ai-consulting-firm has 86 impressions with no clicks; "what are the most important factors when evaluating an ai engineering firm?" is still unanswered.
   - Why winnable: the AI answers Exa returns (Codiant, Thetisa, Aranv, Rerun, Harmonytics, Goalsr) are all vendor checklists; a scorecard with weights, pilot red flags and questions for agent builds specifically, linked to the insight page, is narrower than the existing page.
   - People also ask: not checked.
   - Leads to: /services/artificial-intelligence-and-automation, /insights/how-to-evaluate-an-ai-consulting-firm, /resources/ai-production-readiness-checklist.
5. ai chatbot cost for business
   - Service or sector: AI and automation. Market: United States, then United Kingdom.
   - Interest: highest absolute interest of all phrases checked, but falling: US average 36.3 (first half 56.0, second half 17.2); UK average 14.2 (first half 20.8, second half 7.8).
   - Why winnable: top 10 not checked this week. Keep it narrower than /insights/what-ai-integration-costs (which earns 75 impressions for "ai integration cost").
   - People also ask: not checked.
   - Leads to: /services/artificial-intelligence-and-automation, /insights/what-ai-integration-costs.
6. mvp development cost
   - Service or sector: product engineering, SaaS. Market: United States, then United Kingdom.
   - Interest: "mvp development" US average 19.7 (first half 23.0, second half 16.5); UK average 12.8 (first half 15.2, second half 10.6). Steadier than most.
   - Why winnable: top 10 not checked this week.
   - People also ask: not checked.
   - Leads to: /services/product-engineering-and-rd, /sectors/saas, /products.
7. ai proof of concept cost
   - Service or sector: AI and automation. Market: United States.
   - Interest: "ai proof of concept" US average 11.2 (first half 15.0, second half 7.7).
   - Why winnable: top 10 not checked this week.
   - People also ask: not checked.
   - Leads to: /services/artificial-intelligence-and-automation, /insights/why-ai-prototypes-stall-before-production.
8. how long does a WMS implementation take
   - Service or sector: implementation and delivery, supply chain and logistics. Market: United States.
   - Interest: "wms implementation" US average 2.4 (first half 3.7, second half 1.1), low.
   - Why winnable: the answers are vendor pages with different numbers (enVista: 6 to 9, 9 to 15 and 15 to 24 months by complexity; SphereWMS: 12 to 18 months common; Davanti: 3 to 6 months for most) and a fresh hook in FreightWaves' 19 November piece on the "18-month go-live problem". A neutral comparison of those ranges is easy to beat them with.
   - People also ask: not checked.
   - Leads to: /services/implementation-and-delivery, /sectors/supply-chain-logistics.
9. iot platform development cost
   - Service or sector: IoT and connected devices. Market: United States.
   - Interest: "iot platform development" US average 1.4 (first half 1.5, second half 1.3), low but flat.
   - Why winnable: top 10 not checked; Exa returns GPO-Tech, SD Corpe and LAN PDT cost guides. Link it to the hardware prototype post so the two support each other.
   - People also ask: not checked.
   - Leads to: /sectors/iot-connected-devices, /insights/iot-device-management, /blog/hardware-prototype-cost.

Checked and dropped this week: "fintech app development cost" (no measurable US interest), "fixed price vs time and materials" (average 0.4), "cost to build an ai agent" (US average 0.2, UK 0 on that exact wording). "custom software development cost" (US average 8.9) is left out because /what-it-costs is the page for it; pick sector phrases instead.

## Evergreen backlog

Same method (12 months, US, one batch of five). Top 10 and People also ask were not checked for these this week.

1. technical debt for business leaders (suggested keyword: "how to reduce technical debt")
   - Service or sector: software and systems engineering. Market: United States.
   - Interest: busiest phrase in the batch: average 50.4 (first half 62.6, second half 38.6).
   - Leads to: /services/technology-and-engineering, /insights/legacy-system-modernization.
2. software requirements document (suggested keyword: "how to write a software requirements document")
   - Service or sector: software engineering, implementation. Market: United States.
   - Interest: average 10.0 (first half 14.0, second half 6.1).
   - Leads to: /services/technology-and-engineering, /build-vs-buy.
3. data migration plan
   - Service or sector: business and operating systems (ERP). Market: United States.
   - Interest: average 8.4 (first half 11.8, second half 5.1). Pairs with the ERP mistakes post, where data migration is a top cause of failure.
   - Leads to: /insights/erp-integration, /blog/erp-implementation-mistakes.

"software discovery phase" was also checked (average 0.9) and dropped.

## Next topics

For the Tuesday and Thursday posts, in market priority. Check every fact on the primary source before writing; the notes below are signals.

1. Bank outages and vendor breaches: what a mid-size company should change (United States)
   - Suggested keyword: "third party vendor risk management" (or "bank outage business continuity").
   - Why now: Google Trends US for the past week had "chase bank" at 1,000,000+ searches and "bank outage" at 500,000+ (related: "banks down today", "cyber attack"); AP reported on 17 November that a technical issue at JPMorgan Chase delayed online banking at major US banks. Separately, Reuters reported on 20 November that JPMorgan, Visa and Mastercard said third party vendors were targeted in a cyberattack, and Cybersecurity Dive (20 November) that customer data was taken. "cyberattack" also trended (100,000+, tied to a USDA breach). Confirm the outage cause from JPMorgan's own statement; the outage and the vendor hack are separate events.
   - People also ask: not checked; use the trend wording "banks down today" and "is apple pay down" ("apple outage" also trended at 200,000+).
   - Angle: keep it distinct from the Fireworks post (an AI vendor); this one is payments and core banking vendors and what continuity plan a finance team needs.
   - Leads to: /sectors/financial-services, /services/technology-and-engineering, /risk-mitigation.
2. Supply chain software that takes 18 months to go live (United States)
   - Suggested keyword: "supply chain software implementation time".
   - Why now: FreightWaves, 19 November: "Supply chain software has an 18-month go-live problem" (https://www.freightwaves.com/news/vantage-9-supply-chain-software-go-live). Google News also has McKinsey on the "agentic supply chain" (17 November) and Infor integrating Claude into manufacturing ERP (Techzine, 18 November).
   - People also ask: not checked.
   - Angle: phased go-lives versus big bang cutovers, with the enVista and SphereWMS timeline ranges. Non-AI.
   - Leads to: /sectors/supply-chain-logistics, /services/implementation-and-delivery.
3. The UK supermarket fridge cyberattack and IoT security for ordinary businesses (United Kingdom)
   - Suggested keyword: "iot security for business".
   - Why now: "uk supermarket refrigeration cyber security" trended in the UK this week (50,000+ searches; related "fridges cyber attack"). The Guardian, 20 November: "UK operation wards off risk of cyber-attack on supermarket fridges and freezers"; CNBC, 21 November: "Europe's cyber weak spot is the everyday businesses nobody thought to protect". Reports that 40 Delhaize stores were hit come from a secondary site; confirm before using.
   - People also ask: not checked.
   - Angle: what any company with connected equipment (refrigeration, HVAC, meters) should check, with NCSC and ICO detail for the UK. Non-AI.
   - Leads to: /sectors/iot-connected-devices, /insights/iot-device-management.
4. Toyota, Nissan and Honda standardizing parts (United States, manufacturing)
   - Suggested keyword: "parts standardization in manufacturing".
   - Why now: the top Hacker News story on 22 November (1,207 points, 684 comments) was Car and Driver's "Toyota, Nissan, and Honda to standardize parts to lower costs"; Automotive News (19 November) and Nikkei Asia (18 November) reported it first.
   - People also ask: not checked.
   - Angle: what shared components mean for a mid-size manufacturer's engineering and supplier choices. Non-AI.
   - Leads to: /sectors/manufacturing, /services/product-engineering-and-rd.
5. Microsoft cloud prices up to 20% higher in some countries (India, Europe)
   - Suggested keyword: "microsoft cloud price increase".
   - Why now: Computerworld, 16 November: "Enterprises to pay up to 20% more for Microsoft cloud services in some countries"; TechRadar and Tech Observer report India up about 15% and China cheaper. Lower priority because the US is not named as affected; confirm which countries on Microsoft's own pages.
   - Leads to: /services/technology-and-engineering, /build-vs-buy.

Considered and skipped: the Anthropic IPO (19 November; "anthropic stock" 2,000,000+ US searches) has no business decision for our readers; OpenAI's 22 November "Perplexity and Intelligence" proposal (Hacker News 513 points) is policy, not a buying decision.

## Do not repeat

Covered in the last 30 days:
- Hardware prototype cost (22 November 2026).
- ERP implementation mistakes (21 November 2026).
- How to measure AI ROI (20 November 2026).
- AI agent liability and the US bank terms (19 November 2026; updated 23 November).
- GPT-6.2 Astra vs Sol (18 November 2026).
- AI agent security risks and California v. OpenAI (17 November 2026).
- Qwen4-Max for business (16 November 2026).
- Fireworks AI breach and vendor questions (15 November 2026).
- Prebuilt AI agents vs custom builds (14 November 2026).

## Phrases people use

Reddit blocked the request again (HTTP 403), so the rest were skipped. Wording below is from People also ask, Hacker News and Google Trends.

- "Who is liable for AI agents?" / "Who is liable for agentic AI?" / "Who is liable for AI mistakes?" / "Could AI agents be held criminally liable?"
- "What is the 30% rule in AI?" appeared in People also ask on three different queries (AI ROI, AI agent liability in the US and the UK). Worth a researched FAQ answer once we find a primary source for it. "What is the 10/20-70 rule for AI?" appeared on the AI ROI query.
- "How to calculate ROI on AI?" / "What is the ROI of AI?"
- "Are AI agents a security risk?" / "What are the top 3 AI security risks?" / "Is it safe to have an AI agent?" / "How do I secure my AI agent?"
- "What causes ERP failure?" / "How often do ERP implementations fail?" / "Will ERP be replaced by AI?"
- "How much should a prototype cost?" / "How much is a prototype?" / "How much would it cost for 1 prototype of my product?" (r/Entrepreneur title, 2nd on Google US)
- "How much does it cost to build custom software?" / "How do you know how much to charge for custom software?" (Reddit title) / "How much do software developers cost?"
- "How much does medical software cost?" / "How much does IT cost to develop a healthcare app?"
- "Is Sol the best GPT model?" / "Is Astra the same as GPT-6?" / "Which is the best AI model for business?"
- Google Trends wording: "banks down today", "is apple pay down", "fridges cyber attack", "is there going to be a blackout in the uk".
- Hacker News titles: "Toyota, Nissan, and Honda to standardize parts to lower costs" (1,207 points), "What Happened to Silicon Valley?" (480), "0rwx: A simple model of AI usage, inspired by Unix permissions".

## Post improved this week

/blog/ai-agent-liability, the only post close to page one (US 11, UK 12, Germany 7). Changes: description rewritten to state the answer; new subsection "Can a company blame the AI itself?" (Moffatt v. Air Canada, California Civil Code 1714.46 in force since 1 January 2026, the E-SIGN Act on contracts formed by electronic agents), sourced to Mayflower Specialty and Montague Law; new FAQ "Could an AI agent itself be held liable, even criminally?" from People also ask; a link to /build-vs-buy; `updated: 2026-11-23`. The EU date (8 December 2026) was rechecked on the European Commission page and is correct.

## Tool notes

- SerpApi searches used: 79 of 80. To stay inside the budget, the third Google page was skipped for Qwen4-Max (US, UK), Fireworks (US, UK) and AI agent security risks (UK); Google News was read through its public RSS feed instead of SerpApi's `google_news`; People also ask was not pulled for the trending topics or most backlog items; Google top 10 was not checked for most backlog items.
- The 7-day Google Trends comparison (US and GB) was not useful: "anthropic ipo" was in the same batch and pushed every other phrase to zero. Next week, compare trending candidates without a celebrity term in the batch.
- AI Overview citations were only visible for "custom software development cost"; other queries returned the overview behind a second request that was not made.
- Reddit returned HTTP 403.
