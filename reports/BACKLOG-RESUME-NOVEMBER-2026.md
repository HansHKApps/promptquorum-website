# Structural backlog — parked until November 2026

Paused deliberately on 2026-08-31. The remaining work is real but low-yield per
hour, and it was crowding out higher-value things. Nothing here is urgent: none
of it is a live bug, and none of it blocks a build.

## Two dates

| Date | Do this |
|---|---|
| **2026-09-27** | Re-pull GSC for the pages changed 24–30 Aug. This is the *measurement*, and it is the higher-value of the two. See `page-work-log-2026-08-30.md` and `page-change-index-2026-08-30.csv`. |
| **2026-11-01** | Resume this backlog — but only if September showed the content work moves CTR. If it did not, most of this is not worth doing. |

## What's left

From `page-updater-queue-2026-08-31.csv` (418 pages, regenerated with the fixed
quote-reader — earlier copies under-reported French):

| Defect | Locale blocks | Can a script do it? |
|---|---|---|
| missing `snippetBlocks` | 1,386 | **393 yes** (translation — sibling locale has the same claim). The other ~993 need writing. |
| `seoTitle` over budget | 1,200 | No — trimming loses keywords |
| missing `leadAnswerBlock` | 635 | No — authoring |
| missing `isTldr` | 144 | No — authoring |
| `metaDescription` >100 over | 56 | No — first sentence alone exceeds budget |

50 pages have the translatable kind, flagged `snippets_translatable=YES` with the
source locale in `snippet_source_locale`. Start there: it is the only part that
needs neither GSC data nor invented facts.

## What was proven, so it isn't re-litigated

- **Snippets cannot be derived from the page.** Across 184 pages holding both, the
  `one-sentence` snippet matches the `leadAnswerBlock`'s first sentence in 3 cases;
  median similarity 0.35. They answer different questions.
- **`geo-meta-optimizer` and `PAGE_UPDATER.md` both block on GSC data** as a
  mandatory first step. The titles and metas cannot move without a per-page export.
- **Trimming long metas mechanically is a downgrade.** An earlier pass would have
  cut 24; 15 landed *under* the minimum (348 chars → 86). At 348 Google still
  renders ~155 useful characters; at 86 it renders 86. Only 9 cuts landed in
  budget, and only those shipped.

## Prioritise by traffic, not by this file's score

The queue ranks by defect count. Its top is the `balcony-solar-*-2027`
country-status set and the German balcony-solar brand profiles — structurally
worst, probably lowest traffic. Intersect with a GSC Pages export first. A page
with 3 defects and 40,000 impressions beats one with 9 defects and 40.

## Two known items that need a person, not a script

- `best-local-llms-code-review` — the `ja` block has no `tldr` section while `zh`
  and `ko` do. Adding snippets there means creating the section.
- `local-ai-image-generation-vs-cloud` and `local-ai-video-generation-vs-cloud`
  carry pre-existing table cells over the 110-char pre-commit gate, so any commit
  touching them is blocked until the tables are converted to `itemHeadings: true`.
  Five month-stamps remain in them for that reason.
