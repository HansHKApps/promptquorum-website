# Open state — 26 July 2026

One page. Read this first when picking the site back up; everything else is
detail you don't need to hold in your head.

---

## Done and shipping

Four PRs, merge in this order:

| PR | What | Gate |
|---|---|---|
| #215 | `robots.txt` — unblocks `/_next/static/` and `/download` | none |
| #216 | local-llms article schema on 8 non-EN locales | check preview first |
| #217 | image schema, validators, Wave 1 cleanup | merge after #216 |
| #218 | Preferred Sources footer link | draft — needs the signed-in Google check |
| #220 | `howToName`/`primaryTerm`/`audience` English-leak fix (prompt-engineering schema) | none |

Also on `fix/translation-content-gaps`: `TRANSLATION_SPEC.md` brought fully
current, `context-windows-explained` sections backported to 8 locales, row 2 `de`.
This branch depends on #217; rebase before opening a PR.

Two more, ready to open as PRs: `fix/blog-cta-translations` (BlogPostClient.tsx
CTA, all 9 locales) and `fix/korean-webfont` (Noto Sans KR wired and verified
post-hydration). Both build clean against current `main`, no dependencies.

---

## Settled by data — closed, do not reopen

**The translation backport (worklist rows 2–10, second-wave locale depth) is
closed.** GSC evidence: `/ko/` was authored in the same batch wave, from the same
generic template, with the same structural thinness as `es`/`pt`/`ar` — and it is
the second-best performing locale on the site. Structural depth is not what drives
performance. Not deferred. Closed.

**GSC baseline, 3 months to 2026-07-26:**

| Locale | Impressions | CTR | Position |
|---|---|---|---|
| en | 4,644,611 | 0.40% | 7.66 |
| ja | 68,795 | 4.60% | 7.36 |
| ko | 74,286 | 4.54% | 6.20 |
| fr | 29,723 | 2.94% | 7.01 |
| de | 67,970 | 2.69% | 6.26 |
| zh | 86,062 | 2.66% | 7.40 |
| pt | 10,603 | 1.89% | 6.55 |
| es | 43,676 | 1.26% | 7.28 |
| ar | 10,891 | 0.71% | 11.53 |

English is 92% of impressions and converts 11x worse than Japanese at the same
position. US 0.16% CTR vs Japan 2.62% / Korea 3.08%. That is the AI Overview
effect, not a fixable on-page defect.

Arabic position volatility: known, ignore it, give it time.

---

## Old open question — now answered

**Does non-EN traffic justify recreating missing sections?** No. See above.

Worklist rows 2–10 aren't field gaps — several locales are missing whole sections
(pricing tables, FAQ blocks, provider comparisons). Recreating them means
maintaining that content in nine languages on the `semi_annual` cycle forever.

**Git history reframed this (row 4, confirmed via `git log -S`):** it is not
per-article drift. `es`/`pt`/`ar`/`ko` were authored months later, in batch
translation waves, from a *generic template* rather than matched to each
article's own structure. `de`/`fr`/`ja`/`zh` carry the bespoke structure from
each article's original commit.

So the real question is not "fix these 9 articles." It is: **do the second-wave
locales (`es`/`pt`/`ar`/`ko`) get brought up to first-wave depth?** That is a
content-strategy decision about roughly half your language surface, with a
permanent maintenance cost attached — not a bug backlog.

The GSC per-locale impressions table informs it. If those URLs have no demand,
leaving them is a legitimate answer, not a shortcut.

Everything about rows 2–10 waits on that decision.

---

## Parked, with the criterion for unparking

| Item | Effort | Unpark when |
|---|---|---|
| Second-wave locale depth (`es`/`pt`/`ar`/`ko`), incl. worklist rows 2–10 | days–weeks | you decide those four languages should match first-wave depth; GSC demand informs it |
| `deriveItemListSchema()` helper | half a day+ | **blocked, not just parked** — see below |
| `[locale]` refactor | days | **scheduled: Tuesday 28 July 2026** — see below |

`BlogPostClient.tsx` English CTA and Korean webfont are done — see "Done and
shipping" above. "Rows 44+ of the worklist" is closed, not parked — see Settled.

**`deriveItemListSchema()` — attempted, not integrated.** Built both proposed
strategies (derive from an existing `tableFormat` section; derive from section
titles + first-line paraphrase), then diffed generated output against 3
articles that already have hand-authored `itemListSchema`, per the verify-
before-replacing gate. Materially worse in 2 of 3:
- `how-llms-actually-work` has 5 `tableFormat` sections; the hand-authored
  ItemList matches the 5th ("misconceptions"). The naive "first table found"
  heuristic picked the 1st ("definition") — unrelated content, generic
  fallback name.
- `system-prompt-vs-user-prompt` has exactly 1 table, so "wrong table" isn't
  the failure mode here — but the hand-authored ItemList is a 4-item topics
  list derived from section titles, not from that table at all. Author intent
  and structural signal disagreed even with a single candidate.
- `context-windows-explained` was the one close case — its single relevant
  table happens to be both first and correct.

Sitting in `src/lib/deriveItemListSchema.ts` on branch
`feat/derive-item-list-schema`, wired into nothing. Needs a better signal than
"first table/section found" (position in the article, an explicit opt-in
marker, something) before it's safe near the 219-instance gap. Still schema-
only, invisible to readers — no urgency either way.

---

## Settled — do not reopen

- **Core Web Vitals.** CrUX: mobile 1.6s / 73ms / 0, desktop 1.3s / 37ms / 0.
  Passed. The old "INP 256ms" figure was a Clarity mean, not p75. Nothing to fix.
- **Schema coverage outside local-llms.** All five other clusters verified at
  9-locale parity.
- **hreflang.** Complete, including `x-default`.
- **The 20 distinct `howToName` phrases.** Section-title fallback accepted.
- **Issue #65.** Already closed by PR #67. The 61 URLs are recorded in #214.
- **Rows 44+ of the worklist.** Never a project — fix opportunistically when
  an article is touched for another reason, same as always.
- **`BlogPostClient.tsx` English CTA.** Fixed, all 9 locales, own commit on
  `fix/blog-cta-translations`. Note found while in there: `LocalLLMsPostClient.tsx`
  has the identical bug (its `ctaText`/`ctaButton`/`backLink` maps only cover
  en/de/fr/ja/zh) — not fixed, flagged if it's worth a look separately.
- **Korean webfont.** Wired and verified post-hydration (Playwright: `/ko/`
  computed `font-family` is genuinely Noto Sans KR), own commit on
  `fix/korean-webfont`. Correction en route: the spec said
  `subsets: ['korean']` — that's not a valid next/font subset for this family
  (Google's metadata only exposes cyrillic/latin/latin-ext/vietnamese as
  supplementary subsets for every CJK Noto family; Hangul ships regardless of
  which is chosen). Kept `subsets: ['latin']`, which was already correct on
  that axis — the real bug was `--font-korean` having zero CSS references
  anywhere, now fixed in `globals.css`.

---

## Scheduled — `[locale]` refactor, Tuesday 28 July 2026

The only remaining technical item. Start fresh, not at the end of a long day.

**What it fixes:** `<html lang="en" dir="ltr">` and no footer in raw HTML on all
8 non-EN locales. Google renders JS and already sees these correctly — the
benefit is visibility to non-rendering AI crawlers (GPTBot, ClaudeBot,
PerplexityBot, CCBot).

**Why it needs a clear day:**

- 216 duplicated route files collapse into ~27, moved cluster by cluster
- It has taken the site down once already — commit `23e2d812a`: `headers()` in
  the root layout opted every page into dynamic rendering, `Cache-Control:
  no-store` site-wide, 3,600+ routes flipped static → dynamic, all traffic to
  origin compute
- **The failure mode is invisible to the test suite.** `npm run build`,
  TypeScript and every validator pass whether or not caching is destroyed. The
  only signal is `x-vercel-cache: MISS` on repeat requests against a live
  preview.
- It must beat a deliberate tradeoff, not just avoid a bug. June chose static
  caching over server-correct `lang`/footer. If the refactor delivers only one
  of the two, the current state is better and it should be abandoned.

**Phase 1 plan already exists** (diagnosis complete, middleware special cases
audited, rollback is `git revert` on the merge commit). Needs approval before
any Phase 2 code.

**Merge gate — all four, simultaneously, on one preview deployment:**

```bash
curl -sI https://<preview>/de/ | grep -i x-vercel-cache   # HIT on repeat
curl -s  https://<preview>/de/ | grep '<html'             # lang="de"
curl -s  https://<preview>/ar/ | grep '<html'             # dir="rtl"
curl -s  https://<preview>/ja/ | grep -c '</footer>'      # non-zero
```

`MISS` or `BYPASS` on repeat → stop and revert.

---

## Standing rules that replace audits

No more full technical reviews — three of them missed the same defect. The
validator suite is the review process now:

`validate-internal-links` · `validate-image-schema` · `validate-sameas-links` ·
`validate-translation-integrity` · `validate-locale-schema-parity` (report-only
until findings are classified) · `analyze-translation-gaps`

Every future finding becomes a validator or it doesn't count as fixed.

---

## Specs in the repo

`NEXT_STEP_2.md` — the immediate four items
`TRANSLATION_GAP_FIX_SPEC.md` — how to backport, if GSC says yes
`TRANSLATION_GAPS_WORKLIST.md` — the corrected worklist (143 files, 343 visible)
`LOCALE_PARITY_VALIDATOR_SPEC.md` — parity check rollout
`VERDICT_CHECK_BACKLOG.md` — ten checks for Verdict, derived from today

---

## The actual priority

The site passes Core Web Vitals, has correct schema, complete hreflang, and
validators preventing recurrence. It is not what's limiting the business.

What hasn't moved: the app, and anything citable under your own name.
