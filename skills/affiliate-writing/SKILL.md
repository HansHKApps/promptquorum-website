---
name: affiliate-writing
description: PromptQuorum affiliate-page writing rules — which mode to write a page in (single-solution vs. dual-track local/cloud), where product recommendations and links go, CTA wording, disclosure, and product/vendor sourcing. Use when writing or editing any affiliate/buying-guide page, adding product links or sponsoredSlot sections to an article, or deciding whether a "local vs. cloud" page needs a dual-track structure.
---

# PromptQuorum Affiliate Writing Guide
Last updated: 2026-08-23 (revised: added the Conversion Funnel section, expanded proof-before-CTA
into a commercial-proof requirement, and product-specific CTA wording — see changelog note at
bottom)

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
the mode (A or B) and where links/disclosure go. Use `docs/GEO_WRITING_GUIDELINES.md` for
everything about how the page is actually written (headings, decision blocks, entity density,
schema). Use `docs/geo-translation.md` when producing a non-English version.

One direct mapping worth knowing: Mode B's "Decision guide up top" and "Recommendation by use
case" sections below are the affiliate-specific application of GEO's Rule 22b (Decision-Driven
Content Framework) — same Best Choice / Who Should Use This / Verdict structure, applied
specifically to a local-vs-cloud purchase decision. Don't write two different decision-block
styles; use GEO's existing format and fill it with the affiliate content described here.

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
   linkable/citable asset on the page — format as a GEO comparison table.
7. **Recommendation by use case** (= GEO's Who Should Use This / Final Verdict blocks) — 3–4
   reader profiles ("weekend hobbyist," "daily heavy user," "small team," "privacy-first") each
   pointed to local or cloud.

**Affiliate-specific rules:**
- The local section must be genuinely good, not a strawman. Undermining it to make cloud look
  better destroys the page's credibility and, longer-term, its ranking.
- Only build Mode B where a real cloud equivalent exists and has (or can get) an affiliate
  program — otherwise this is just extra work with no monetization gain.
- One monetizable cloud CTA per page, placed at the end of the cloud section and repeated once
  in the top decision guide — not scattered throughout.
- **The zero-commission test:** before publishing, ask whether the cloud recommendation would
  still be the honest best pick for its stated reader profile ("small team," "privacy-first," etc.)
  if it paid no commission at all. If the honest answer is "no, local would actually be better for
  that profile" — fix the recommendation, don't publish it as-is. This is the concrete test behind
  the existing "never inflate the cloud option's case" rule, not a new rule — just a way to check
  it before publishing rather than after.

---

## The Conversion Funnel (applies to both modes)

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
two should already have, before the deeper Mode A/B structure (full comparison tables, "who
should use this" segments) takes over further down the page.

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

---

## Disclosure (affiliate-specific, applies to both modes)

- Until an affiliate program is live, say so plainly — "product links, no current affiliate
  relationship" — near the links themselves, not just in a footer policy page.
- This is also good preparation for supplier negotiations: pages with an honest, consistent
  disclosure pattern are easier to sell into a sponsorship than pages that quietly flip
  disclosure language page-to-page.
- Once a program is live for a given link (see the catalog `affiliateStatus` field, planned for
  a future phase), disclosure language must update accordingly — this guide will get a revision
  when that happens.

## Click Mechanics (applies to both modes)

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

## Choosing the mode per page (decision rule)

Ask: *does a real, affiliate-eligible cloud/SaaS alternative exist for this exact topic?*
- Yes → Mode B (dual-track). Priority: pages already getting clicks but with weak/no affiliate
  program on the local-only recommendation.
- No → Mode A (single-solution). Keep it lean and focused rather than forcing a split that isn't
  there.

## Every page needs (affiliate-specific, in addition to GEO's own pre-publish checklist)

- A single measurable goal: which link is the primary conversion target, and what would
  "working" look like in clicks/month. If a page has had realistic traffic for a while and isn't
  hitting that goal, change one structural thing before concluding the product/category is the
  problem — CTA wording, CTA position, or the decision block itself. Don't rewrite everything at
  once; you won't know what fixed it.
- A price/comparison table flagged for refresh if older than 90 days (affiliate pages go stale
  faster than conceptual content — GEO's own recency rule applies, but treat 90 days as the hard
  ceiling here specifically because prices, not just facts, go out of date). When refreshing,
  check the price in at least two places (e.g. the vendor's own page plus one independent source)
  rather than trusting one stale listing — a wrong price is worse than an old one, it actively
  misleads.
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
