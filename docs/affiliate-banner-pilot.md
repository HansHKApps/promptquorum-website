# Affiliate banner pilot: how it runs and how to read it

Owner: Hans. Brief: `affiliate-banner-pilot-brief-2026-11-08.md`. Config and data: `src/lib/affiliate-banners/`. Checks: `npm run test:affiliate-banner-assignment`, `npm run test:aff-banner-report`, `npm run check:affiliate-banner-links`.

## What it is
Until real affiliate contracts exist, 60 affiliate-regime page groups carry one banner with **plain product links: no affiliate tag, no commission, no payment**. The banner says so openly. The goal is to learn from outbound-click data which format, merchant count, placement, merchant and regional setup works best, so a proven setup exists when contracts do. The pilot cannot measure conversions, order value or EPC.

## Switches
| Switch | Effect |
|---|---|
| `NEXT_PUBLIC_AFF_BANNERS=true` | Banners render on the 60 treated groups (all 9 locales). Unset/false: nothing renders on production. Vercel previews show them by default (`false` turns that off). Build-time: changing it needs a deploy. |
| `AFF_BANNER_PHASE` in `config.ts` | 1 = all treated groups at AP2. 2 = placement rotates AP1/AP2/AP3 within each cell. Bump to start the next phase, then deploy. |
| `AFF_BANNER_OPT_OUT` in `config.ts` | English paths to switch off (stop rule or manual pause). |

## Design
- **Unit** = page group (English path; all 9 locales share the arm). Static assignment in `assignment.ts`, seed 20261108, stratified by cluster x traffic tier. No cookies, no storage, no per-visitor randomisation.
- **Arms:** A1 single card / 1 merchant, A3 single card / 3 merchants, B1 compare banner / 1 merchant per option, B3 compare banner / 3 merchants per option, 15 groups each. Control: 20 groups, no banner.
- **No overlap** with the promo pilot (`PILOT_GROUPS`, `PILOT_CONTROLS`): enforced by the validator.
- **The uncensored creative-writing page** is its own stratum (tier `solo`, cell B1: hardware vs cloud GPU). It is 25% of site clicks, so every report shows results **with and without it**.
- **Offers** (`copy.ts`, `offers.ts`, `page-offers.ts`): 13 category-level offers, copy in 9 locales, merchants per locale market (`markets.ts`: en US, de DE, fr FR, ja JP, ko KR, es ES, pt BR; zh and ar use the US list until decided). No prices are shown (a price needs `verifiedAt` within 30 days).
- **Placement:** AP1 after the intro, AP2 at ~40% of the sections (`promoMidArticleIndex`; the brief's "after the first compare table" is not wired: most templates have no table marker, so the mid-article position is used everywhere), AP3 before related links.
- **Look:** gradient from hub tokens, category symbol tile (our own SVG), benefit-first headline, large CTA naming the store. Motion once on first view: shine sweep, icon pop, two glow pulses; `motion-safe:` only, transform/opacity only, max 1 flash per 1.2 s. No fake urgency, no ratings, no photos, no brand logos (typeset vendor names; `MerchantLink.logo` is the slot for partner assets later).
- **Disclosure** on every banner (`BANNER_UI.disclosure`): no affiliate agreement, no payment for clicks. Never "Sponsored", "Ad" or "Anzeige".

## Events (Umami, cookieless, anonymous, no free text)
| Event | When | Props |
|---|---|---|
| `aff_banner_view` | once per page view at >= 50% visible for >= 1 s | `banner_id, cell, format, merchant_count, placement, phase, category, locale, cluster, page, device` |
| `aff_banner_click` | click on a merchant button (fires before navigation) | the above + `vendor, vendor_domain, slot (1-3), market, product_key, price_shown` |

Banners do **not** fire `affiliate_click`; that event stays for in-text links so cannibalization is measurable. Debug attributes: `data-aff-banner`, `data-aff-cell`, `data-aff-placement`.

## Reading the results
`npm run aff-banner:report -- --umami --launch YYYY-MM-DD --out report.md --merchants merchants.md` (or `--input counts.json`; the format is in the script header). The weekly workflow `aff-banner-weekly-report.yml` posts it to one issue every Friday; it needs the secret `UMAMI_API_KEY` and the repository variable `AFF_BANNER_LAUNCH`. The Umami API calls are unverified.

- **Headline:** incremental outbound clicks per 1,000 page views = (banner clicks + in-text `affiliate_click`) on treated groups minus in-text `affiliate_click` on controls, in the pilot window and versus the 28 days before launch (difference in differences). Intervals: 95% bootstrap, whole page groups resampled.
- **Pool first:** 15 groups per cell only detect large effects. Read format (A vs B, 30 vs 30) and merchant count (1 vs 3, 30 vs 30) before single cells.
- **Winner rule (defaults, adjust after week 1):** a cell needs >= 1,000 banner views and >= 20 clicks to be called; a candidate winner needs an interval above zero and no page-health regression. Never decide on CTR alone.
- **Guardrail:** GSC clicks treated vs control. If treated groups lose more than 10% organic clicks versus control for 2 consecutive weeks, pause banners on those groups (`AFF_BANNER_OPT_OUT`) and report.
- **Merchant-readiness sheet:** clicks and share per merchant, with empty columns for programme terms Hans collects by hand (network, commission, cookie window, exclusions, minimum traffic).
- **Phases:** 1 (weeks 1-6) format x merchant count at AP2; 2 (weeks 7-10) placement rotation; 3 (weeks 11-13) merchant and regional tests; 4 (week 14) confirm winners, freeze, write the decision report. Target length 14 weeks from launch.
- **No auto-allocation** (no bandit) during the pilot: it would destroy the comparison. Optimizer mode is for after real affiliate IDs exist.

## Ending the pilot / going live with a real programme
1. Set the kill switch off (or leave it on for the winning setup only) and deploy.
2. When a merchant becomes a live affiliate: implement its parameter in `buildMerchantUrl()` (`link.ts`, the single injection point), set `affiliateStatus: 'live'` on its `MerchantLink`s (the rel becomes `nofollow sponsored` automatically), replace the disclosure with the two-part commission wording from `skills/affiliate-writing/SKILL.md` (all 9 locales, through `risk-checker`), and add the partner's official logo via `logo`.
3. The `OutboundUtmTagger` still tags shop links with `utm_source=promptquorum.com&utm_medium=referral`; never label anything `affiliate` in a tag until a programme is live.

## Open items
- The 60 URLs a bot cannot confirm (shops answering 403 or resetting connections) were not verified in a browser: `npm run check:affiliate-banner-links`.
- Search queries are English product terms on every shop; localized queries may convert better.
- zh and ar markets (D2), lawyer review of the disclosure wording (D4), real merchant logos (D8), country routing (D7), loud-vs-calm sub-test (D9) are Hans decisions.
