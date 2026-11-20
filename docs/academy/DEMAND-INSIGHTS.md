# Academy topic demand (added 2026-11-20)

Purpose (owner): learn what people look for and train in the Academy, with no personal data, so that later
(1) courses can be pre-programmed around the top topics, (2) the top 10 can be proposed to new learners,
(3) marketing can see what people learn online and which product categories fit.

## What is recorded (server side, Redis)
- **Subject text**, normalised (lower case, trimmed, max 60 chars / 8 words). Refused and not stored if it contains
  an e-mail, URL, or more than 6 digits. Stored with a count only: no IP, session, cookie, timestamp finer than the ISO week.
  - `academy:demand:subjects` (all time), `:subjects:<lang>` (per site language), `:trained` (final tests started),
    `:week:<ISO week>` (13-week expiry).
- **Dimensions** (hash `academy:demand:dims`, totals only): theme (keyword classifier, `DEMAND_THEMES`), language,
  self-rated level, minutes chosen, test mode, per stage (programme / lesson / final test).
- Hooks: `/api/academy/programme` (looked for), `/api/academy/lesson` (studied), `/api/academy/quiz` kind=final (trained).

## Publication threshold
A subject is listed anywhere (public suggestions, owner report) only after 5 identical requests
(`ACADEMY_DEMAND_MIN_PUBLIC`). Rarer subjects are only counted. Free text can still hold a name; the threshold and the
filter reduce, not eliminate, that. `npm run academy:demand -- --prune` deletes single-use entries.

## Surfaces
- Public: `/api/academy/topics` puts the top 10 of the learner's language first as suggestion chips (empty until the threshold is met; no new UI copy).
- Owner: `npm run academy:demand` (text) / `-- --json` / `-- --prune`. Shows top subjects, top trained, themes, language/level/time/mode, weekly trend.
- Marketing: `DEMAND_THEMES` maps each theme to an `AffiliateCategory` where one fits. PromptQuorum has no affiliate programme; the mapping only shows which product categories match.

## Open before this is announced (owner / legal, postponed per DECISIONS.md)
- Academy privacy text and the site privacy policy must say that the subject is counted anonymously for statistics (Art. 6(1)(f)). Locale copy was NOT changed here (geo-translation gate).
- Sampling bias: only people who start a programme are counted.
