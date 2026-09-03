---
name: affiliate-writing
description: PromptQuorum affiliate-page writing rules — which mode to write a page in (single-solution, dual-track local/cloud, or commercial-software-vs-free/open-source), where product recommendations and links go, CTA wording, disclosure, and product/vendor sourcing. Use when writing or editing any affiliate/buying-guide page, adding product links or sponsoredSlot sections to an article, or deciding whether a page needs a dual-track or SaaS-vs-free structure.
---

# PromptQuorum Affiliate Writing Guide
Last updated: 2026-09-03 (revised: added Mode C — Commercial Software vs. Free/Open-Source,
rewrote the mode-selection rule as a decision table, added the Free-Alternative Test, a
software-specific commercial-proof list, stack-layer/symmetry rules, licensing-layer rules,
price-per-output economics, and split the price-staleness ceiling by product type — see
changelog note at bottom)

**Scope of this guide:** affiliate-specific rules only — which mode to write a page in, where
product recommendations and links go, and how disclosure works. This guide does NOT cover
general writing style, structure, SEO/GEO rules, or schema — those live in
**`docs/GEO_WRITING_GUIDELINES.md`** and apply to every affiliate page exactly as they apply to
every other page on the site (answer-first structure, decision-density minimums, entity naming,
title/meta rules, schema markup, internal linking). This guide does NOT cover localization —
that's the `/geo-translation` skill (`docs/geo-translation.md`), and it applies unchanged to
affiliate pages (schema fidelity, per-language register, currency localization by market,
regional compliance gating).

**When writing or editing an affiliate page:** open all three documents. Use this guide to decide
the mode (A, B, or C) and where links/disclosure go. Use `docs/GEO_WRITING_GUIDELINES.md` for
everything about how the page is actually written (headings, decision blocks, entity density,
schema). Use `docs/geo-translation.md` when producing a non-English version.

One direct mapping worth knowing: Mode B's and Mode C's "Decision guide up top" and
"Recommendation by use case" sections below are the affiliate-specific application of GEO's Rule
22b (Decision-Driven Content Framework) — same Best Choice / Who Should Use This / Verdict
structure, applied specifically to a local-vs-cloud or paid-vs-free purchase decision. Don't write
different decision-block styles per mode; use GEO's existing format and fill it with the
affiliate content described here.

---

## Product & Program Source of Truth (check this before picking any product)

**Current state:** no affiliate program exists anywhere on the site (`src/lib/affiliate-links.ts`
confirms this — plain disclosed product links, no affiliate tags, `rel="nofollow"`). There is no
"which program" decision to make today — every link is a product link, not an affiliate link.
That will change once a program is signed (not before next year, per current plan) and a proper
catalog/tool exists to manage it — this section gets replaced at that point, not amended.

**Until then, product and vendor selection follows this order — do not pick a new product from
scratch if an existing one already covers the need:**

1. **Check what's already used for this category first.** Look for products already referenced
   elsewhere on the site in the same `productCategory` (e.g. `gpu`, `mac`, `laptop`, `storage`,
   `mini-pc`, `cloud-gpu`, `monitor`, `pc-component`, `vpn`, `course`, `dev-tool`). Reuse the same
   product entry (name, URL pattern, vendor) if it fits the new page — this is what keeps the
   catalog tractable instead of accumulating hundreds of one-off variants.
2. **Vendor default: Amazon.** Across the current site, the large majority of EN product links go
   to Amazon; it's the default for hardware unless the product genuinely isn't sold there. Known
   category-specific vendor patterns from current usage: Newegg (secondary hardware/GPU
   retailer), Apple (Mac hardware, apple.com direct), cloud-gpu products link to the provider
   directly (RunPod, Vast.ai, Lambda Labs — not a retailer), courses link to the platform
   directly (Coursera, Udemy, DataCamp, DeepLearning.AI), dev tools link to the vendor's own site
   (Cursor, Continue.dev), VPN products link to the provider directly (ProtonVPN). Match the
   pattern for the category rather than defaulting to Amazon for things that clearly aren't
   Amazon products (a cloud GPU rental or a SaaS subscription doesn't have an Amazon listing).
3. **If genuinely no existing product fits**, add a new one — but write it in the rich format
   from the start (`url`, `productName`, `productCategory`, `priceRange`, `label`, all filled in).
   Never write the minimal `{ label, url }` format — that recreates the exact inconsistency prior
   cleanups exist to fix.
4. **Never fabricate a price or spec** to fill in `priceRange` — research the real current price
   (per GEO's factuality rules) or omit the field's specific number and describe it qualitatively.
5. **Amazon is a default, not a rule.** It's the right default because it's usually the best
   combination of availability, buyer trust, and no regional friction — not because it's
   automatically the best-paying option. If a genuinely comparable option exists at meaningfully
   better economics (e.g. a direct-vendor program at 2–3x Amazon's rate on the same product),
   prefer it. Don't build a scoring process around this — it's a judgment call per product, not a
   system to run.
6. **Check the product is actually available in the page's target market before linking it.**
   This matters most for balcony solar (country-specific legality — don't link a kit the page's
   own country guide says isn't legal or shippable there) and for smart home (protocol/region
   lock — confirm Matter/Zigbee/Thread compatibility and regional availability). This is separate
   from the translation guide's currency localization — that guide converts price display; this
   rule is about whether the product itself can legally be bought and used where the reader is.
7. **Software/SaaS has its own eligibility check, equivalent to rule 6 for hardware.** Before
   linking any software, API, or SaaS product, confirm: free-vs-paid status, current pricing,
   commercial-use rights (some free/personal tiers explicitly exclude commercial use), API
   availability, regional availability, plan restrictions, whether the feature you're citing is
   actually included in the plan you're linking to, and whether any affiliate program that exists
   applies to that specific product/plan (not just the vendor generally). SaaS plan structures
   change often enough that this can't be assumed stable from a prior page.
8. **Never infer model/voice/dataset licensing from the surrounding software's license.** An
   engine, a model/checkpoint, and a voice/training dataset are frequently licensed separately and
   can carry different terms — permissive engine code wrapped around a non-commercial-only model,
   or a GPL engine whose bundled voices each carry their own license. Check the engine, the
   model/checkpoint, and the voice/dataset independently, and state the licensing terms that
   actually govern the specific artifact you're recommending, not the repository's top-level
   license badge. Re-verify at time of writing — engine and packaging licenses can also change
   between repository forks/rewrites, not just model licenses.

---

## Mode A — Single-Solution Page

**When to use:** the page's whole premise is one category of product (e.g., "Best GPU Under $500
for LLM Inference," "Best Mini PC for Ollama Server"). There's no natural cloud/local split —
just a straight recommendation.

**Affiliate-specific requirements on top of the standard GEO structure:**
- The GEO Lead Answer Block / Best Choice block (Rule 36) must carry the primary affiliate/
  product link — this is the highest-intent placement on the page, don't waste it on a
  non-monetized mention.
- The GEO comparison table (Rule 22b, Comparison Layer) must include a link per row, not just in
  the top pick.
- Don't recommend more than one product per price/use-case tier — a page that recommends
  everything recommends nothing and converts nothing. If you include a second product in a tier,
  it needs its own distinct, stated job ("budget alternative that still hits the VRAM minimum,"
  not just "another option") — otherwise it's diluting the primary link, cut it.
- Prices and specs must be current and sourced, never guessed (this is stricter than general
  GEO factuality — an affiliate price claim that's wrong is a trust and revenue problem, not just
  an accuracy one).
- Include one brief "skip this if…" note somewhere on the page (not per product — once for the
  page). A page that only ever says yes reads as a sales page; naming a real reason to not buy
  (wrong use case, better free alternative, regional restriction) is what makes the "yes" cases
  credible.
- **Don't force a single "best overall" when the honest answer is "it depends on the job."** If
  the products in scope genuinely serve different use cases rather than competing head-on, use
  "Best for [use case]" per product instead of inventing one universal winner. A fabricated
  "best overall" on products that aren't really comparable is what makes a page read as generated
  rather than considered — see the stack-layer rule below, which is the sharper version of this
  same problem.

---

## Mode B — Dual-Track Page (Local vs. Cloud)

**When to use:** the honest answer to the reader's question is "it depends" — specifically, it
depends on whether they want to own hardware or rent capability. This is the structural fix for
pages where "local LLM" alone has thin affiliate economics: the cloud alternative is where the
real, monetizable affiliate link lives.

**Structure (maps onto GEO's Rule 22b Decision Framework — use that framework's blocks, not a
separate format):**
1. **Problem framing** — explicitly name both paths early: "You can run this locally on your own
   hardware, or rent the compute in the cloud. Here's how to choose."
2. **Decision guide up top** (= GEO's Best Choice / Choose Based On block) — "Go local if… /
   Go cloud if…". This is the single most important element of Mode B — it's what makes the
   split feel like genuine advice, not a forced upsell.
3. **Section 1 — Local solution(s).** 2–3 hardware options, comparison table, honest pros/cons.
   Affiliate links here may be thin or unmonetized (current-state product links) — that's fine,
   this section's job is credibility and search coverage, not revenue.
4. **Transition paragraph** — genuinely useful, not a sales pivot. Name the real reasons someone
   would choose cloud instead: no upfront cost, no maintenance, elastic scaling, latest hardware
   without buying it, works from any device.
5. **Section 2 — Cloud alternative(s).** This is where the monetizable link goes. Same rigor as
   the local section: real comparison, real pricing, real pros/cons — never inflate the cloud
   option's case just because it pays. A reader who feels steered will bounce and the page loses
   both trust and rank.
6. **Side-by-side cost comparison** — total cost of ownership (hardware + power + time) vs.
   monthly cloud cost, over a realistic time horizon (e.g., 12 months). Usually the most
   linkable/citable asset on the page — format as a GEO comparison table. See "Total Cost of
   Ownership" below for the full local/cloud cost components to include.
7. **Recommendation by use case** (= GEO's Who Should Use This / Final Verdict blocks) — 3–4
   reader profiles ("weekend hobbyist," "daily heavy user," "small team," "privacy-first") each
   pointed to local or cloud.

**Affiliate-specific rules:**
- The local section must be genuinely good, not a strawman. Undermining it to make cloud look
  better destroys the page's credibility and, longer-term, its ranking.
- Only build Mode B where a real cloud equivalent exists and has (or can get) an affiliate
  program — otherwise this is just extra work with no monetization gain.
- One monetizable cloud CTA per page, placed at the end of the cloud section and repeated once
  in the top decision guide — not scattered throughout. (This fixed CTA count is a Mode B rule
  specifically — Mode C's CTA rule below is deliberately looser, because a SaaS free-tier funnel
  has more legitimate decision points than a one-time hardware-vs-rental choice.)
- **The zero-commission test:** before publishing, ask whether the cloud recommendation would
  still be the honest best pick for its stated reader profile ("small team," "privacy-first," etc.)
  if it paid no commission at all. If the honest answer is "no, local would actually be better for
  that profile" — fix the recommendation, don't publish it as-is. This is the concrete test behind
  the existing "never inflate the cloud option's case" rule, not a new rule — just a way to check
  it before publishing rather than after. (Mode C's Free-Alternative Test below is the same idea
  applied to commercial-software-vs-free-alternative pages.)

---

## Mode C — Commercial Software vs. Free/Open-Source Alternatives

**When to use:** the honest question the reader is asking isn't "which one should I buy" (Mode A)
or "should I own hardware or rent compute" (Mode B) — it's **"should I pay for the convenience of
a commercial product, or use a free/open-source alternative that does the same job?"** One side is
a hosted commercial product with a free-and-paid tier structure; the other side is free, local, or
open-source. The monetization mechanics are different from Mode B: there's no cloud-vs-local
infrastructure rental symmetry, there's a paid convenience layer sitting on top of a free option
that may be genuinely competitive.

Examples: ElevenLabs vs. Piper vs. XTTS, Cursor vs. Continue, ChatGPT Plus vs. Ollama, Perplexity
vs. self-hosted/local search, Midjourney vs. Stable Diffusion, Canva vs. open-source design tools.

**Structure (maps onto GEO's Rule 22b Decision Framework, same as Mode B — use that framework's
blocks, don't invent a separate format):**
1. **Problem framing** — name both paths early: "You can pay for [commercial product] and get
   [convenience], or use [free/open-source alternative] and get [trade-off]. Here's how to
   choose."
2. **Best commercial choice stated** — the Lead Answer / Best Choice block names the paid pick
   plainly, same as Mode A/B.
3. **Free/open-source alternative named just as plainly** — not buried, not treated as an
   afterthought. The reader needs to know the free option exists before being sold on why the
   paid one might still be worth it.
4. **Commercial proof** — see the software-specific commercial-proof list below. This is where
   the paid product has to actually earn the "pay for it" recommendation, not just have more
   features on paper.
5. **"Is paid worth it?"** — a direct paragraph or block answering this for named reader
   profiles, not a vague "it depends." This is the section that makes or breaks the page's
   credibility, because the honest answer is often "not for everyone."
6. **Primary CTA** — see the CTA rule below (looser than Mode B's single-CTA rule).
7. **Free/local fallback**, restated once near the end — the reader who decided against paying
   should leave knowing exactly what to use instead, not just that an alternative was mentioned
   somewhere above.

**Affiliate-specific rules:**
- **The Free-Alternative Test** (the Mode C equivalent of Mode B's zero-commission test): if the
  free/open-source alternative would be the better choice for a stated reader profile even if the
  commercial product paid 100% commission, recommend the free alternative for that profile. Never
  omit or downplay a genuinely viable free/local option just because it has no affiliate
  economics — PromptQuorum's local-AI positioning depends on this being true in practice, not just
  stated as a policy.
- **Never manufacture symmetry between products at different layers of the stack.** ElevenLabs is
  a hosted platform, Piper is a local TTS engine, XTTS is a model/technology stack — presenting
  them as three interchangeable rows in one feature-comparison table misleads the reader into
  thinking they're competing products. Before ranking, explain the category mismatch: what layer
  each one operates at, and what job each one is actually for. "These aren't direct competitors —
  here's where each belongs" is stronger, more trustworthy content than a forced head-to-head
  table, and this applies beyond Mode C wherever compared products sit at different stack layers.
- Applying the "best for X" rule from Mode A is closer to the default in Mode C than the
  exception — a commercial SaaS platform and a local open-source engine usually *are* different
  jobs, not tiers of the same product.

## The Conversion Funnel (applies to all modes)

The rules above cover *where* links and recommendations go section-by-section. This section
covers the *order* the reader moves through, especially in the first 30–50% of the page — the
part that decides whether they stay long enough to reach a CTA at all. This matters most on
high-intent page types: "best X," "X vs Y," "X review," and "X for [use case]" pages, where the
reader already has commercial intent and is scanning for permission to act, not being introduced
to the topic cold.

**The ideal sequence for the first 30–50% of the page:**
1. **Search intent acknowledged** — the opening line(s) mirror the reader's actual query back to
   them (this is also GEO's answer-first rule — don't write a separate opening for funnel
   purposes, use the one GEO already requires).
2. **Recommendation stated** — the Lead Answer / Best Choice block names the pick plainly, not
   buried after three paragraphs of throat-clearing.
3. **Proof** — the commercial-proof evidence described below, placed immediately around the
   recommendation, before the reader is asked to act.
4. **Comparison** — the reader sees the alternative(s) it beat, so the recommendation reads as a
   conclusion, not an assertion.
5. **Primary CTA** — placed once the reader has enough to decide, not before.
6. **Secondary CTA** — a lower-commitment alternative (free trial, "see pricing," a runner-up
   pick) for the reader who isn't ready for the primary ask yet — don't let them leave with
   nothing when a free-tier or lower-friction option exists.

Don't treat this as a rigid template to fill mechanically — it's the shape the *first* screen or
two should already have, before the deeper Mode A/B/C structure (full comparison tables, "who
should use this" segments) takes over further down the page.

**Mode C variant.** The sequence above still applies, but the reader needs one more thing before
the CTA makes sense: why paying is worth it over the free option that they may already suspect
exists. Sequence for Mode C specifically: *search intent acknowledged → best commercial choice
named → free/open-source alternative named → commercial proof → "is paid worth it?" → primary CTA
→ free/local fallback restated.* Skipping straight from "recommendation" to "CTA" without
surfacing the free alternative first reads as hiding it — worse for trust than naming it and still
recommending the paid product.

### Commercial proof — what "proof before CTA" actually requires

The Click Mechanics section already says one concrete fact beside the CTA beats a bare link. That
is the floor, not the target. Every primary recommendation needs **2–4 concrete, decision-relevant
reasons** placed immediately around the CTA — not scattered as generic spec-sheet copy elsewhere
on the page. Draw from:
- an important specification (the one that actually decides the purchase for this use case, not
  every spec the product has)
- current price/value
- a specific use-case advantage ("best for X workload")
- a meaningful limitation (this doubles as part of the "skip this if…" requirement — a
  recommendation with zero named downsides reads as unverified, not as strong)
- compatibility/availability (does it actually work with what the reader already has, is it
  in stock, is it sold in their market)
- why it wins commercially over the runner-up — cheaper than alternative Y, avoids a specific pain
  point the alternative has, a meaningful edge over the second choice

This is what keeps a page from reading as "AI-generated product description + affiliate button."
The CTA should feel like the logical conclusion the reader already reached from the evidence, not
an interruption asking them to trust the writer's word for it. This requirement is strictest on
hardware pages, where "it has good specs" alone is not a reason to buy this one over the other
five with equally good specs.

**For software/SaaS/API products, "specification" is close to meaningless as proof — use this
list instead of (not in addition to) the hardware-oriented one above:**
- current free-tier allowance (what you actually get for $0, stated concretely — "10,000
  characters/month," not "a generous free tier")
- current paid price and what tier it buys
- credit/usage allowance and what happens at the limit (hard stop, overage billing, throttling)
- the one important workflow feature that actually drives the upgrade decision, not a full
  feature list
- commercial-use availability at the tier being recommended (many free/personal tiers exclude
  commercial use — say so if it applies)
- API availability, and whether the API sits behind a separate plan from the consumer product
- integrations that matter for the reader's actual workflow
- supported languages/models/formats, where that's the actual differentiator
- a meaningful limitation (same role as the hardware list's limitation — a plausible reason not to
  pay)
- the concrete reason it beats the free/open-source alternative for the stated use case — not "it's
  better," but the specific thing the free option can't do (voice cloning quality, zero setup,
  commercial licensing clarity, latency, output consistency)

**Every commercial page should be able to answer, explicitly, somewhere in its structure** (the
existing "skip this if…" rule is already the answer to the fourth question — this just makes the
full set explicit rather than leaving three of the five implicit):
1. Why this product?
2. Why now? (what makes this a good time to buy, not a stale evergreen claim — a real price drop,
   a genuine current-best-in-category status, a seasonal factor — never invent urgency that isn't
   real)
3. What problem does it solve?
4. What is the biggest reason NOT to buy it? (= "skip this if…")
5. What should the reader do next? (= the primary CTA, and the secondary CTA if the primary isn't
   right for them yet)

### Product-specific CTA wording

The generic patterns in Click Mechanics ("Check current price," "Check compatibility") are the
right default for physical hardware, but they undersell products with a free entry point — "Check
price" is a weaker ask than "Try free" when trying costs the reader nothing. Match the CTA to what
the reader is actually being asked to commit to:

| Product type | CTA pattern |
|---|---|
| Hardware | "Check current price" / "See configuration" |
| Software (has a free tier) | "Start free" / "Try it free" |
| Cloud AI / API credits | "Start with [N] free credits" / "See pricing" |
| Subscriptions | "Start free trial" / "Compare plans" |
| Services | "Get started" / "See plans" |

If a product has a genuine free tier or trial, lead with that CTA rather than a paid-tier "check
price" — the lower-friction ask converts the undecided reader, and the paid-plan detail can live
in the surrounding proof instead of the button itself.

### How many CTAs — Mode A/B vs. Mode C

Mode A and Mode B keep a single monetizable CTA (repeated once at most — see Mode B's rule above)
because the reader is making one purchase decision. Mode C pages are different: a SaaS funnel has
several legitimate decision points as the reader learns more, so a single rigid CTA count is the
wrong constraint. For Mode C, **3–4 CTA placements are fine, provided each one sits after new
decision-relevant information** — e.g. decision block → "Start free," pricing section → "See
plans," feature/free-alternative comparison → "Try it free," final verdict → "Start free" again.
The restriction isn't a number, it's this: **never repeat the same CTA without adding new
decision-relevant information since the last one.** A CTA that appears because a template says
"add one here" rather than because the reader just learned something new is the failure mode this
rule exists to prevent.

### Price-per-output — the API/usage-based comparison

For any usage-billed product (TTS, image generation, video, LLM APIs, and similar), don't stop at
comparing the sticker price of the commercial product to "$0" for the free/local option — that
comparison is true but not useful. Compare **cost per unit of useful output**, in whatever unit
the reader actually cares about: cost per 1M characters, cost per hour of generated speech, cost
per 1,000 images, cost per million tokens, cost per video minute. For the local/free side of the
comparison, include hardware amortization (see Total Cost of Ownership below) rather than treating
local as literally free — a reader comparing "$22/month" against "$0" is being given a comparison
that doesn't hold up once they actually buy the hardware to run the free option. This kind of
concrete, computable comparison is also one of the more citable/GEO-linkable assets a usage-based
product page can produce — treat it the same way Mode B treats the local-vs-cloud TCO table.

### Total Cost of Ownership

Mode B already requires a TCO table for hardware vs. cloud rental. Apply the same discipline to
software/infrastructure decisions:
- **Local software TCO** = hardware cost (amortized) + electricity + setup time + ongoing
  maintenance + engineering/troubleshooting time + storage. "Free" software running on hardware
  the reader has to buy and maintain is not actually a $0 comparison point.
- **Cloud/SaaS TCO** = subscription or usage cost + overage charges at realistic usage + cost of
  any integrations required to make it work + the practical cost of vendor dependency (migration
  difficulty if the reader needs to leave later).
Use whichever of these actually applies to the page's comparison — Mode B pages need both sides
computed with this level of detail, Mode C pages need it wherever the free/open-source side isn't
genuinely zero-cost to run (self-hosted, requires a GPU, requires ongoing maintenance).

### Editorial recommendation vs. commercial link vs. affiliate relationship — keep these separate

These are three different things, and the writing should never let the third one silently
determine the first:
1. **Editorial recommendation** — why this product is genuinely good for the stated use case. This
   must be argued on its own merits and must survive the zero-commission / Free-Alternative Test
   above.
2. **Commercial link** — where the reader can actually get the product (vendor site, Amazon,
   whichever the Source of Truth section says to use).
3. **Affiliate relationship** — whether PromptQuorum currently earns anything from that link. See
   Disclosure below.
The recommendation in (1) must never depend on (3). Today, with no live affiliate program, (2) and
(3) happen to be the same plain product link — don't let that current-state simplicity blur the
distinction once affiliate relationships exist, since at that point a product with a program and a
product without one will sit side by side on the same page, and the writing has to stay honest
about which is which.

---

## Disclosure (affiliate-specific, applies to all modes)

- Until an affiliate program is live, say so plainly — "product links, no current affiliate
  relationship" — near the links themselves, not just in a footer policy page.
- This is also good preparation for supplier negotiations: pages with an honest, consistent
  disclosure pattern are easier to sell into a sponsorship than pages that quietly flip
  disclosure language page-to-page.
- Once a program is live for a given link (see the catalog `affiliateStatus` field, planned for
  a future phase), disclosure language must update accordingly — this guide will get a revision
  when that happens, but the intended replacement is already decided so implementation doesn't
  have to invent wording later: a short, two-part disclosure, not a bare "this page contains
  affiliate links" —

  > Some links on this page are affiliate links. If you purchase through them, PromptQuorum may
  > earn a commission at no additional cost to you. This does not affect our recommendations.

  Keep it short and consistent across every page that carries a live affiliate link — the
  consistency matters as much as the wording itself, per the point above about supplier
  negotiations.

## Click Mechanics (applies to all modes)

The rules above cover *where* a link goes. These cover whether a reader actually clicks it.

- **CTA wording — use an intent-specific action, not "Buy Now" or "Click Here."** "Buy Now"
  overstates certainty the reader doesn't have yet at the top of a comparison page. See the
  Conversion Funnel section's product-specific CTA table for the right pattern per product type
  (hardware vs. software-with-free-tier vs. subscription, etc.) — don't default to a generic
  "check price" CTA on a product that has a free entry point, it undersells the actual ask.
- **Give physical products a fallback link when it's cheap to do so.** Hardware (GPUs, mini-PCs,
  balcony solar kits) goes out of stock. Where a genuine secondary vendor exists for the same
  product (Amazon + Newegg, official site + an authorized reseller), link both — "Check Amazon |
  Check Newegg" — rather than losing the click when the primary is unavailable. Don't force a
  fallback that doesn't exist; a single strong link beats a padded-out weak second one.
- **Mobile: the primary CTA must be reachable without hunting for it.** GEO's own structure rules
  put the Lead Answer / Best Choice block near the top already — the affiliate-specific addition
  is that comparison tables should hold up on a phone (essential columns only, or note if the
  table needs horizontal scroll) rather than becoming unreadable. Don't add sticky-button or
  other implementation-level UI requirements here — that's a site/template concern, not a writing
  one; flag it to the site build if it's not already handled.
- **One line of concrete context near the primary link earns more trust than the same link bare.**
  A specific, true detail — current price, a spec that matters for the use case, "still the top
  pick as of [date]" — placed right next to the CTA does more work than generic reassurance.
  Never fabricate this (no invented "tested for 40 hours" claims) — only state what's actually
  true; omit the line entirely if there's nothing concrete to say.
- **Never imply hands-on testing, benchmarking, personal use, direct access, or independent
  verification unless PromptQuorum actually performed it.** This is the broader form of the rule
  above — it's not just "don't invent an hours figure," it's don't imply the testing happened at
  all. Avoid unless literally true: "we tested," "our benchmark," "in our testing," "we found,"
  "we measured," "we used," "real-world performance" (when it means PromptQuorum's own
  measurement, not a cited source's). Use instead: "based on current specifications," "our
  recommendation," "according to the vendor," "the available documentation indicates." This
  matters more, not less, as the site expands into fast-moving software/API pages — a false
  testing claim on a SaaS page is at least as much of a trust and legal exposure as one on a
  hardware page.

## Choosing the mode per page (decision rule)

The old single question — "does a real, affiliate-eligible cloud/SaaS alternative exist?" — is too
coarse: it would push many Mode C pages into Mode B just because a cloud service happens to exist
somewhere in the picture. Ask instead **what the reader is actually choosing between**:

| The reader's actual decision | Mode |
|---|---|
| Which GPU/mini-PC/hardware should I buy? | A |
| Which single SaaS/product is best for this job? | A |
| Should I run this locally or rent cloud compute for the same capability? | B |
| Cloud API vs. self-hosted infrastructure for the same capability | B |
| Should I pay for this SaaS or use a free/open-source alternative? | C |
| Commercial software vs. local/open-source software | C |

The distinguishing question between B and C is *what the two sides actually are*: Mode B is
infrastructure symmetry (the same capability, own it vs. rent it — a GPU you buy vs. a GPU you
rent by the hour). Mode C is a paid-convenience layer vs. a free alternative (a hosted product with
a free tier vs. a free/local/open-source tool that does a similar job, where "renting compute" isn't
really the axis of the decision). If a page doesn't cleanly fit B or C, it's Mode A — keep it lean
rather than forcing a split that isn't there.

Priority for building B or C pages: pages already getting clicks but with weak/no affiliate program
on the free/local-only recommendation.

## Every page needs (affiliate-specific, in addition to GEO's own pre-publish checklist)

- A single measurable goal: which link is the primary conversion target, and what would
  "working" look like in clicks/month. If a page has had realistic traffic for a while and isn't
  hitting that goal, change one structural thing before concluding the product/category is the
  problem — CTA wording, CTA position, or the decision block itself. Don't rewrite everything at
  once; you won't know what fixed it.
- A price/comparison table flagged for refresh on a ceiling that matches how fast the product
  category actually changes (affiliate pages go stale faster than conceptual content — GEO's own
  recency rule applies, these are the hard ceilings specifically because prices, not just facts,
  go out of date):
  - **Hardware:** 90 days.
  - **Software/SaaS/API pricing and plan details:** 60 days — plan structures and usage tiers
    change faster than hardware prices do.
  - **Promotional or free-tier claims specifically** (credit amounts, "X free minutes/characters,"
    limited-time pricing): verify immediately before publication, not on a periodic cycle — a
    stated free-tier allowance is exactly the kind of number ("10,000 free credits") that goes
    wrong fast and is highly visible when it does.
  When refreshing, check the price in at least two places (e.g. the vendor's own page plus one
  independent source) rather than trusting one stale listing — a wrong price is worse than an old
  one, it actively misleads.
- Before publishing: confirm the primary CTA is visible without excessive scrolling on a phone
  screen, and that every product linked is actually available in the page's target market/language
  (see the Source of Truth section's availability rule above).

---

*Changelog note (2026-08-16): revised after reviewing several AI critiques of this guide.
Incorporated — CTA wording patterns, out-of-stock fallback links, the Mode B zero-commission
honesty test, "skip this if" / distinct-second-product requirements, regional product
availability check, and a two-source price-verification step. Deliberately not incorporated —
opportunity-scoring frameworks, page-prioritization ladders, and CTR/EPC-tier classification
systems for deciding which pages to write first; that prioritization is handled manually, not by
this guide.*

*Changelog note (2026-08-23): added the Conversion Funnel section — the ideal search-intent →
recommendation → proof → comparison → CTA → secondary-CTA sequence for the first 30–50% of
high-intent pages (best X, X vs Y, X review, X for use case); expanded the existing "one concrete
fact beside the CTA" rule into an explicit 2–4-item commercial-proof requirement per primary
recommendation (spec, price/value, use-case advantage, limitation, compatibility/availability,
why-it-wins-commercially); made the five-question commercial-page checklist explicit (why this,
why now, what problem, why not, what next — the last two already existed as "skip this if" and
the CTA itself, now stated as one complete set); added a product-type-specific CTA wording table
so software/cloud/subscription products with a free tier lead with "start free" instead of a
generic "check price" ask.*

*Changelog note (2026-09-03): revised after a comparison of this guide against a real
commercial-SaaS-vs-free-alternatives page (ElevenLabs vs. Piper vs. XTTS) surfaced that the guide
had become too hardware/single-product oriented. Added — **Mode C** (Commercial Software vs.
Free/Open-Source Alternatives) with its own funnel sequence and affiliate-specific rules; the
**Free-Alternative Test** (Mode C's equivalent of Mode B's zero-commission test); rewrote the
mode-selection rule as a decision table keyed on what the reader is actually choosing between,
replacing the old single "does a cloud alternative exist" question that over-classified pages into
Mode B; a software-specific commercial-proof list (free tier, pricing, usage limits, commercial-use
rights, API access, integrations, key limitation, concrete edge over the free alternative) to use
instead of the hardware-oriented spec/price/limitation list on SaaS pages; a rule against
manufacturing symmetry between products at different stack layers (platform vs. engine vs. model)
and requiring the category mismatch be explained before any ranking; a "best for X" allowance
instead of a forced "best overall" when compared products serve different jobs; a looser,
information-gated CTA count for Mode C (3–4 placements allowed, never repeating a CTA without new
decision-relevant information) alongside Mode A/B's existing single-CTA rule; price-per-output/
usage-based-cost comparisons for API-billed products; a Total Cost of Ownership section extending
Mode B's hardware-vs-cloud TCO table to local software and cloud/SaaS infrastructure costs; an
explicit split of editorial recommendation vs. commercial link vs. affiliate relationship, so the
first never depends on the third; the two-part disclosure wording to switch to once an affiliate
program goes live, decided now instead of invented later; broadened the "no fabricated testing
claims" rule from a narrow "don't invent an hours figure" into a full list of implied-testing
phrases to avoid and what to say instead; a software commercial-eligibility check (rule 7) and a
licensing-layers rule (rule 8, don't infer model/voice/dataset license from the surrounding
software's license) added to the Source of Truth section; and split the price-staleness ceiling by
product type (hardware 90 days, software/SaaS pricing 60 days, promotional/free-tier claims
verified immediately before publication, not on a cycle).*
