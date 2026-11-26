---
title: "Hardware prototype cost in 2026: what a working device costs"
description: "Hardware prototype cost by stage, from $30,000 for a simple sensor to $250,000 for a connected product, with a worked example and vendor questions."
date: 2026-11-22
updated: 2026-11-24
author: Dhiraj T H
keyword: hardware prototype cost
tags: [Cost, Hardware, Product development]
cover: { motif: bars, palette: ember }
answer: "A working hardware prototype usually costs $30,000 to $80,000 for a simple sensor or accessory and $80,000 to $250,000 for a connected product with an app, according to Interface RnD's 2026 ranges. Most of the money is engineering time. The boards themselves cost tens or hundreds of dollars, and tooling and certification come later."
faq:
  - q: "How much does it cost to make a prototype of a product?"
    a: "It depends on whether it has electronics. Interface RnD puts a looks-like model at $1,500 to $8,000, and a working electronic prototype of a simple device at $15,000 to $60,000. A complete works-like program for a connected product with an app runs $80,000 to $250,000 in its 2026 tiers."
  - q: "How can I get a prototype made?"
    a: "Write down what the device must do and the limits it must meet, then ask two or three product engineering firms for an itemized quote for a works-like prototype. Keep the first build on development kits and a pre-certified radio module where you can. Pay for tooling and formal certification only after the prototype works."
  - q: "How long does it take to build a hardware prototype?"
    a: "Interface RnD gives 8 to 14 weeks for a simple sensor or accessory and 4 to 9 months for a connected consumer product with Wi-Fi or cellular, an app and certification. Regulated industrial or medical devices take 12 to 24 months."
  - q: "Why are hardware prototype quotes so different?"
    a: "Quotes cover different things. Some price only a looks-like model, some a bench prototype, some an engineering validation build of 10 to 50 units. Hourly rates also vary a lot: Cad Crowd says most US design firms charge $100 to more than $200 an hour, while some outsourced firms claim $20 to $25."
sources:
  - title: "Interface RnD: Prototype Cost in 2026, Electronics and Hardware, by Stage"
    url: "https://interfacernd.com/blog/hardware-prototyping-cost-2026"
  - title: "Cad Crowd: Complete Cost Estimates for an Electronic Product"
    url: "https://www.cadcrowd.com/blog/cost-estimation-for-an-electronic-product-design-services-rates-and-pricing-for-your-company/"
  - title: "OSH Park: Fabrication Services pricing"
    url: "https://docs.oshpark.com/services/"
  - title: "Protolabs: Aluminum vs. Steel Tooling"
    url: "https://www.protolabs.com/resources/blog/aluminum-vs-steel-tooling/"
  - title: "Predictable Designs: How Much Does It Cost to Certify an Electronic Product?"
    url: "https://predictabledesigns.com/certification-costs-what-it-really-takes/"
  - title: "RMBG: What It Costs to Develop a Connected Hardware Product in 2026"
    url: "https://rmbg.nl/insights/what-it-costs-to-develop-hardware/"
---

Hardware prototype cost runs from about $30,000 for a simple sensor to $250,000 for a connected product with an app, on the 2026 ranges published by [Interface RnD](https://interfacernd.com/blog/hardware-prototyping-cost-2026). Almost all of it pays for engineering hours, not parts. If you are budgeting a first device or holding a quote you cannot judge, this is how the number breaks down and what we would do.

```stats
[ { "value": "$30K to $80K", "label": "Simple sensor or accessory, working prototype all in (Interface RnD, 2026)" }, { "value": "$80K to $250K", "label": "Connected product with Wi-Fi or cellular, an app and certification (Interface RnD)" }, { "value": "$5", "label": "Per square inch for three bare two-layer boards at OSH Park, a US board maker" }, { "value": "$1,500", "label": "Protolabs' minimum for an aluminum injection mold, against $50,000 or more for steel" } ]
```

## Which prototype are you paying for?

Agree on the type of prototype before you compare any prices. Interface RnD separates three, and a quote that does not say which one it covers cannot be compared with another.

| Prototype | What it is | Typical cost (Interface RnD, 2026) |
| --- | --- | --- |
| Looks-like | A model of the shape and finish, with no working electronics | $1,500 to $8,000 |
| Works-like | A working device on the bench doing its main job for the first time | $15,000 to $60,000 simple, $60,000 to $200,000 complex |
| Engineering validation build | 10 to 50 units that look and work like the product, used for testing and certification | $25,000 to $120,000 on top of the works-like |

When founders ask what a prototype costs, they usually mean the works-like one. It is the stage that proves the product can exist, and it is where most of the decisions that drive later costs get made.

## How much does a hardware prototype cost by stage?

Most of the bill is design time spread over five or six kinds of work. Cad Crowd, a design marketplace, publishes stage ranges for a modest electronic product, and they show where the money goes.

```chart
{ "title": "Top of each stage range for a modest electronic product", "unit": "$", "data": [ { "label": "Preliminary design", "value": 5000 }, { "label": "Schematic design", "value": 8000 }, { "label": "PCB layout", "value": 9500 }, { "label": "PCB prototypes", "value": 7500 }, { "label": "Hardware and firmware integration", "value": 50000 }, { "label": "Mobile app", "value": 50000 }, { "label": "Testing and debug", "value": 9500 }, { "label": "Enclosure design", "value": 15000 } ], "highlight": 4, "note": "Maximums from Cad Crowd's stage table; the minimums run from $1,000 to $7,500" }
```

The two biggest lines are the firmware that makes the board do its job and the phone app. Cad Crowd says the gap between $7,500 and $50,000 for integration depends almost entirely on how complex the firmware is. Interface RnD makes the same point: a demo on a development kit is a small fraction of what a product needs once power management, fault handling and updates are added.

Parts are the cheap bit. [OSH Park](https://docs.oshpark.com/services/), which makes boards in the United States, charges $5 per square inch for a set of three two-layer boards and $10 for four-layer boards. A 2 by 3 inch board is 6 square inches, so three copies cost $30 in two layers or $60 in four. Even three board revisions leave you under $200 in bare boards.

## A worked example: a Bluetooth sensor

Take a battery-powered sensor that reports temperature to a phone, built on one board with a pre-certified Bluetooth module. Interface RnD would put this in its simplest tier ($30,000 to $80,000, 8 to 14 weeks). Adding up Cad Crowd's stage ranges gives a similar picture.

| Line item | Low | High |
| --- | --- | --- |
| Preliminary design, schematic and board layout | $5,000 | $22,500 |
| Board prototypes | $2,500 | $7,500 |
| Hardware and firmware integration | $7,500 | $50,000 |
| Testing and debug | $3,000 | $9,500 |
| Enclosure design | $3,500 | $15,000 |
| Project management | $3,500 | $10,500 |
| Subtotal without an app | $25,000 | $115,000 |
| Mobile app | $7,500 | $50,000 |
| Total with an app | $32,500 | $165,000 |

That is our sum of Cad Crowd's published ranges, not a quote. A simple sensor should land in the lower half because its firmware is basic. Interface RnD reports that one module-based Bluetooth tracker prototype took 48 engineering hours, and at the $100 to $200 an hour that Cad Crowd says most US firms charge, that is $4,800 to $9,600 of engineering. The tier budgets are larger because they also carry parts, enclosures, lab fees and the extra board revisions a real program needs.

Two costs come after the prototype. [Predictable Designs](https://predictabledesigns.com/certification-costs-what-it-really-takes/) puts certification at about $3,000 to $8,000 for a product that uses a pre-certified wireless module and battery pack. The first plastic mold starts at $1,500 in aluminum at [Protolabs](https://www.protolabs.com/resources/blog/aluminum-vs-steel-tooling/), and Protolabs says an aluminum mold lasts 10,000 cycles or more.

## What moves the number most?

Four decisions, mostly made in the first month, move the cost more than anything else.

- How many disciplines the product touches. Electronics alone is one budget. Electronics, firmware, an enclosure and an app are four budgets plus the work of joining them.
- Whether you use a pre-certified radio module. A module costs more per unit and saves you a radio design and much of the certification bill. Predictable Designs says a custom radio or custom battery pack can push certification well over $50,000.
- How many board revisions you plan for. Interface RnD calls one revision optimistic on anything with a radio, two realistic and three normal on complex boards. A quote with one revision has moved the rest into change orders.
- How finished the spec is. "Waterproof" leaves the engineer designing for the worst case. "Survives 30 minutes at one meter" gives them a target they can price.

The rate card matters too. RMBG, an engineering firm, compiles senior embedded engineer rates of $120 to $180 an hour in the US, $90 to $130 in Western Europe and $40 to $70 in India, Vietnam or the Philippines. It also notes that offshore work gives up most US research and development tax relief, so the cheapest hour is not automatically the cheapest project.

## What changes in the UK and Europe?

The stages are the same. The currency and the certification differ. DENOTEC, a UK electronics design firm, puts a functional prototype at £20,000 to £60,000 or more and a proof of concept at £10,000 to £30,000. For selling into Europe, testing for the CE mark (the EU's conformity marking) replaces or adds to the work for the US Federal Communications Commission (FCC).

RMBG estimates EU plus US market access for a typical connected consumer device with a pre-certified radio at €60,000 to €120,000 all in, over about nine months. That is far above the Predictable Designs range because it covers a full certification campaign for an online consumer product rather than a simple device, so check which kind of product a figure describes before you budget with it.

## Questions to ask a vendor before you sign

Ask for an itemized quote and then ask these. The answers tell you more than the total does.

```steps
["Which prototype does this price cover: looks-like, works-like or a validation build of 10 to 50 units?", "How many board revisions are included, and what does each extra one cost?", "Is firmware bring-up and bench testing a separate line, and how many hours?", "Are you using a pre-certified radio module, and what certification route does that give us?", "Who owns the schematics, board files, CAD and firmware source when the work ends?", "What is fixed price and what is billed by the hour?"]
```

Cad Crowd suggests paying by the hour during early design, then switching to a fixed price once the scope is defined. We agree. A fixed price on a vague spec tends to come back as change orders.

Our recommendation for a first product is to fund the works-like prototype on its own, with modules and development kits wherever they do the job, and decide on tooling and full certification only once it works. RMBG adds a fifth to its own budgets for contingency, which is a sensible habit.

## How we would approach this

We would start by pinning down what the first prototype has to prove, before anyone draws a board: which question it answers, for whom, and what result would stop the project. Then we would price only that stage, using modules and development kits wherever they do the job, and leave tooling and full certification until the device works. One team covers the electronics, firmware and the software behind it, so nothing stalls between suppliers. You keep the schematics, board files, CAD and firmware source, documented so another team could pick them up.

If you want a second opinion on a quote or a plan, our [product engineering and R&D service](/services/product-engineering-and-rd) covers hardware, embedded work and prototyping, and our [connected devices page](/sectors/iot-connected-devices) covers the firmware and cloud side. For the software that runs a fleet once it ships, see [IoT device management](/insights/iot-device-management), and for software budgets in general, [what it costs](/what-it-costs).
