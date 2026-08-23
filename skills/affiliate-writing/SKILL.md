---
name: affiliate-writing
description: PromptQuorum affiliate-page writing rules — which mode to write a page in (single-solution vs. dual-track local/cloud), where product recommendations and links go, CTA wording, disclosure, and product/vendor sourcing. Use when writing or editing any affiliate/buying-guide page, adding product links or sponsoredSlot sections to an article, or deciding whether a "local vs. cloud" page needs a dual-track structure.
---

# PromptQuorum Affiliate Writing Guide
Last updated: 2026-08-16 (revised: added Click Mechanics section, zero-commission Mode B test,
regional availability check, price-verification workflow — see changelog note at bottom)

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

- **CTA wording — use an intent-specific action, not "Buy Now" or "Click Here."** Pick from
  patterns like "Check current price," "See today's configuration," "Compare availability," "Check
  compatibility" — whichever matches what the reader is actually deciding at that point. "Buy Now"
  overstates certainty the reader doesn't have yet at the top of a comparison page.
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
