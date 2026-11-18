# Adblock measurement (`adblock_check`)

One number: **share of sampled sessions whose browser hides an ad-class element**, per day and per device.

## How it is collected
`src/lib/tracking/umami-events.ts` (`installAdblockCheck`, mounted by `<AdblockCheck />` in the root layout):
- 5% of sessions are sampled, decided once on a session's first pageview and kept in `sessionStorage` (`SAMPLE_RATE = 0.05`). About 2,000 samples per 28 days gives roughly +-2 points at the observed blocking rates.
- A bait `div` with common ad class names is inserted off-screen; if it has zero height or `display:none` after 150 ms, `blocked = true`.
- Event `adblock_check`, props `blocked` (true/false) and `device` (`touch` = coarse pointer, `pointer` = mouse). No personal data, no cookies.
- Production deploys `origin/main` (via `scripts/deploy.sh`). The probe has been live since the 2026-11-14 deploy `fe84a4849`; the 5% rate applies from the deploy of the change that lowered it (before that: 25%, so earlier days have more samples; percentages stay comparable).

## Formula
`blocked % = events with blocked=true / all adblock_check events` (same day, same device). The 95% interval is the Wilson score interval for a binomial proportion.

## Lower bound, not the true rate
Sessions where Umami itself is blocked (many adblock lists block analytics scripts) never send `adblock_check`, so they are missing from both numerator and denominator. The real share of visitors with an adblocker is therefore **at least** the reported percentage. Do not quote it as the exact adblock rate.

## Report
`node scripts/adblock-report.mjs --input rows.json [--out report.md]`

Input: JSON array (or CSV with header) of rows `{ "date": "YYYY-MM-DD", "device": "touch|pointer", "blocked": true|false, "count": n }`, taken from Umami (Events > `adblock_check`, filter `device`, read the counts of `blocked` per day). Output: one table per day and device plus a total per device and overall, each with blocked %, sample size n and the 95% interval. Days with fewer than 30 samples are flagged `thin`.
