# Adblock measurement (`adblock_check`)

One number: **share of sampled sessions whose browser hides an ad-class element**, per day and per device.

## How it is collected
`src/lib/tracking/umami-events.ts` (`installAdblockCheck`, mounted by `<AdblockCheck />` in the root layout):
- 2.5% of **sessions** are sampled (the unit is one browser tab's sessionStorage-scoped lifetime, not a page view): the decision is made once, on that session's first pageview, and kept in `sessionStorage` (`SAMPLE_RATE = 0.025`). About 2,000 samples per 28 days gives roughly +-2 points at the observed blocking rates.
- A bait `div` with common ad class names is inserted off-screen; if it has zero height or `display:none` after 150 ms, `blocked = true`.
- Event `adblock_check`, props `blocked` (true/false) and `device` (`touch` = coarse pointer, `pointer` = mouse). No personal data, no cookies.
- Production deploys `origin/main` (via `scripts/deploy.sh`). The probe has been live since the 2026-11-14 deploy `fe84a4849`. Rate history: 25% at launch, lowered to 5% (deploy `b7119b350`/`4d017bd72`, 2026-11-16) — which still realised 400-500 events/day (~5% of *pageviews*, not sessions: a sessionStorage tab-session is narrower than a Umami cookieless session, so multi-tab visitors are sampled more than once against Umami's own counts) — then to 2.5% on 2026-11-19 to retarget the realised volume toward ~70/day. Percentages across periods stay comparable as a *relative* blocked-share signal; only the absolute sample size per day differs.

## Formula
`blocked % = events with blocked=true / all adblock_check events` (same day, same device). The 95% interval is the Wilson score interval for a binomial proportion.

## Lower bound, not the true rate
Sessions where Umami itself is blocked (many adblock lists block analytics scripts) never send `adblock_check`, so they are missing from both numerator and denominator. The real share of visitors with an adblocker is therefore **at least** the reported percentage. Do not quote it as the exact adblock rate.

## Report
`node scripts/adblock-report.mjs --input rows.json [--out report.md]`

Input: JSON array (or CSV with header) of rows `{ "date": "YYYY-MM-DD", "device": "touch|pointer", "blocked": true|false, "count": n }`, taken from Umami (Events > `adblock_check`, filter `device`, read the counts of `blocked` per day). Output: one table per day and device plus a total per device and overall, each with blocked %, sample size n and the 95% interval. Days with fewer than 30 samples are flagged `thin`.
