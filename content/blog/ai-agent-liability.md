---
title: "AI agent liability: who pays when an agent gets it wrong?"
description: "AI agent liability after US banks moved the risk to customers: who pays when an agent errs, what the law says, and the controls and contract terms to set first."
date: 2026-11-19
author: Talavishiraaj Groups
keyword: ai agent liability
tags: [Risk, AI agents, Payments]
cover: { motif: grid, palette: sand }
answer: "In most cases the business or person who gave the AI agent its access carries the loss, not the AI vendor. Citi, JPMorgan, Bank of America and PNC now say customers are responsible for what third party agents do with their accounts. Regulators also look first at the company that deployed the agent, so set spending limits, approvals and clear vendor terms before an agent touches money."
faq:
  - q: "Who is liable for AI mistakes?"
    a: "Usually whoever deployed the AI and gave it access. Banks now say customers are responsible for what agents do with account access they granted, and lawyers at Mayer Brown expect regulators to look first at the deploying company. The AI vendor answers mainly for what it controls, such as the model and its guardrails, and only as far as your contract says."
  - q: "Who is accountable when an AI agent decides?"
    a: "A named person in your company should be. Saviynt's chief product officer told TechTarget that audit trails often end at a service token rather than an accountable employee. Record who delegated each task to the agent, what limits it had and who approved anything above them."
  - q: "Who takes the blame if the AI makes a mistake with my bank account?"
    a: "If you gave the agent your login, most likely you do. Citi's updated terms make customers responsible for activity through third party agents, even if the tool is hacked. Regulation E, which caps consumer losses on unauthorized transfers, does not count transfers by someone you gave your access device to as unauthorized."
  - q: "Can an AI vendor be held liable for a defective agent?"
    a: "In the EU, more often from 8 December 2026. The new Product Liability Directive covers software and AI systems and applies to products placed on the market after 8 December 2026. In the US it depends mostly on your contract, so negotiate liability caps, indemnities and audit rights before rollout."
sources:
  - title: "TechCrunch: More banks say customers using AI agents are on their own, even if they get hacked"
    url: "https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/"
  - title: "TechCrunch: Bank of America asks that you don't share your banking password with your AI assistant"
    url: "https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/"
  - title: "CNBC: JPMorgan is working on AI agent transactions that don't involve humans"
    url: "https://www.cnbc.com/2026/11/18/jpmorgan-hyundai-card-ai-agents-payments.html"
  - title: "TechTarget: AI agents execute transactions, but who authorizes them?"
    url: "https://www.techtarget.com/news/ai-agents-execute-transactions-but-who-authorizes-them/874828/"
  - title: "PYMNTS: When AI agents break the rules, who pays?"
    url: "https://www.pymnts.com/news/artificial-intelligence/2026/when-ai-agents-break-rules-who-pays/"
  - title: "CFPB: Regulation E, 1005.2 Definitions"
    url: "https://www.consumerfinance.gov/rules-policy/regulations/1005/2/"
  - title: "European Commission: Liability for defective products"
    url: "https://single-market-economy.ec.europa.eu/single-market/goods/free-movement-sectors/liability-defective-products_en"
---

AI agent liability now has a clear answer from the biggest US banks: it is yours. On 18 November, [TechCrunch reported](https://techcrunch.com/2026/11/18/more-banks-says-customers-using-ai-agents-are-on-their-own-even-if-they-get-hacked/) that Citi and PNC changed their terms so customers carry the loss when a third party AI agent misuses account access, even after a hack. JPMorgan and Bank of America took the same line in October. If your team lets agents pay, buy or book, read on.

```stats
[
  { "value": "4", "label": "large US banks (JPMorgan, Bank of America, Citi, PNC) now put AI agent losses on the customer, per TechCrunch" },
  { "value": "34.1%", "label": "of companies reporting an AI agent breach cited unauthorized autonomous actions (AvePoint, via CNBC)" },
  { "value": "8 Dec 2026", "label": "EU product liability rules start covering software and AI systems" }
]
```

## What did the banks actually change?

The banks say that if you hand an outside AI tool your login, everything it does counts as you. Citi, the third largest US commercial bank, has updated its Online User Agreement. A spokesperson said customers who grant account access "are responsible for activities conducted through those agents," including when the AI tool leaks credentials or gets hacked.

PNC changed its terms on 18 November, and Citizens emailed customers that they are "on the hook" for what their AI assistant does. Bank of America's October email, [also reported by TechCrunch](https://techcrunch.com/2026/10/27/bank-of-america-kindly-asks-that-you-dont-share-your-banking-password-with-your-ai-assistant/), told customers never to give credentials to "an AI-enabled tool or agent that offers to act on your behalf."

One detail is worth noticing. Citi's terms say the AI agents Citi itself provides can be used without extra liability. The banks are not against agents. They are against agents they did not build and cannot see.

## Who is liable when an AI agent makes a mistake?

Usually the business that gave the agent its access and its instructions. Think of an agent like a new temp with a company card. If the temp overspends, the card issuer does not care which staffing agency sent them; it bills you, and you argue with the agency afterwards.

US consumer law points the same way. Regulation E caps a consumer's loss from an unauthorized transfer at $50 or $500, depending on how fast it is reported. But the [definition from the Consumer Financial Protection Bureau (CFPB)](https://www.consumerfinance.gov/rules-policy/regulations/1005/2/) of an unauthorized transfer excludes one made by a person "furnished the access device" by the consumer. Hand an agent your login and those caps may not protect you. Regulation E is written for consumer accounts, so for a company account your bank agreement is the document to read.

Lawyers at Mayer Brown, in an advisory [summarized by PYMNTS](https://www.pymnts.com/news/artificial-intelligence/2026/when-ai-agents-break-rules-who-pays/), expect regulators to look first at the company that deployed the agent. Their example is a sales agent that pushes New York shoppers toward scooters over an applicable speed limit. The retailer could face enforcement, and the fight with the AI vendor comes later.

| What went wrong | Who most likely carries it first | What decides the rest |
| --- | --- | --- |
| Third party agent with your bank login moves money | You, under Citi, JPMorgan, Bank of America and PNC terms | Your contract with the agent's maker, if any |
| Your customer service or sales agent misleads a customer | Your company, as the deployer | Liability caps and indemnities in your vendor contract |
| Agent makes an unapproved payment inside your systems | Your company | Whether you set limits and approvals, and can prove it |
| Defective AI product sold in the EU after 8 December 2026 | The manufacturer, under rules that now cover software and AI | The EU Product Liability Directive and national law |

## What does the AI vendor answer for?

What it controls, and little else unless your contract says more. Veronica Glick, a partner at Mayer Brown, told [TechTarget](https://www.techtarget.com/news/ai-agents-execute-transactions-but-who-authorizes-them/874828/) that responsibility should follow control: vendors for the model, guardrails and tools, customers for their instructions, configuration and approvals.

In practice that means your instructions and settings are the evidence. When an agent overspends and your setup allowed it, the vendor will point at your setup. Glick also warned that large companies may have little room to negotiate with the major AI providers, so she suggests putting effort into the riskiest uses and pushing for better terms at renewal.

The EU is moving faster. The European Commission says its [new Product Liability Directive](https://single-market-economy.ec.europa.eu/single-market/goods/free-movement-sectors/liability-defective-products_en) covers software, including AI systems, and applies to products placed on the market after 8 December 2026. A manufacturer can be liable for defects that appear later through updates or machine learning. Any company selling an AI product into the EU now carries that exposure too.

## How do you limit AI agent liability before an agent touches money?

Draw a box around the agent and keep proof that the box held. That is close to how JPMorgan described its own test with Hyundai Card. Wee Kee Toh, who runs Kinexys Insights at JPMorgan, gave [CNBC](https://www.cnbc.com/2026/11/18/jpmorgan-hyundai-card-ai-agents-payments.html) an example. An agent authorized up to $5 million is automatically blocked from anything larger: "The agent will never be able to do anything out of the box."

The box also has to cover agents you did not know about. Saviynt's chief product officer told TechTarget about a global analytics firm that thought it had roughly 7,000 AI agents.

```chart
{ "title": "AI agents at one global analytics firm", "unit": "", "data": [ { "label": "Agents the firm estimated", "value": 7000 }, { "label": "Distinct agent versions Saviynt found", "value": 48000 } ], "highlight": 1, "note": "Figures from Saviynt's chief product officer, reported by TechTarget on 19 November 2026" }
```

Many of those agents had their own credentials, and audit trails often ended at a service token, not a person. That gap is where liability lands on you without a defense. Here is the order we would work in:

```steps
["List every agent that can spend, pay, order or book, including ones staff connected on their own", "Remove shared logins: give each agent its own account, never an employee's or the bank password", "Set hard limits per agent: amount, recipients, systems, and block anything outside them", "Require a person to approve payments that are large or cannot be reversed", "Keep one record linking who delegated the task, the limits, the approval and the transaction", "Agree with each vendor who can stop the agent, how fast you get logs, and who covers a failed safeguard"]
```

TechTarget's checklist for IT leaders asks five questions before an agent pays anything. Who delegated the task, what can the agent do, and when must a person approve? What evidence is kept, and who handles a mistake? An agent you cannot answer all five for should not have payment access yet. Our [AI production readiness checklist](/resources/ai-production-readiness-checklist) covers the same ground for agents more broadly.

## What should go in the vendor contract?

The terms that decide who pays after the deployer has paid. The Mayer Brown advisory lists the questions to settle before rollout, and we would put them in writing:

- Who keeps the product and market restrictions current, and who tests that prohibited transactions are blocked.
- Who can suspend the agent when a control fails, and how quickly.
- Which commitments need staff approval, and limits on whom the agent can contact.
- Who covers losses when an agreed safeguard fails, and whether a payment cap applies.
- Which records you get (instructions, configuration changes, approvals, transactions) and how fast.

The same advisory recommends running a simulated incident with the vendor before launch: can you stop the agent, rebuild what happened, and answer a regulator? An hour spent on that is cheaper than learning it during a real dispute.

## What changes in the UK, UAE and EU?

The bank terms reported so far are all from US banks. UK and UAE companies should check their own online banking agreement for wording about sharing credentials, because that clause is what the US banks are now leaning on.

For EU sales, the Product Liability Directive is the date to plan around: products placed on the market after 8 December 2026 fall under the new rules, which include software and AI. Teams building agents for EU customers should check that your vendor contracts pass that risk back to whoever controls the defective part. Our earlier post on [AI agent security risks](/blog/ai-agent-security-risks) covers the access controls that also cut this exposure.

## Where to start this week

Find out which agents in your company can move money today, and whether any of them use a person's login. Then decide whether to tighten those agents or build ones that pay and buy within limits you set. Our [AI and automation team](/services/artificial-intelligence-and-automation) can help you put the limits and approvals in place before the first dispute does it for you.
