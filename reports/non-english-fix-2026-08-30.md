# Non-English GSC Fix — 10 Posts, Before/After

Baselines are GSC last-28d as pasted by the user on the date each page was started.
Scores are the geo-meta-optimizer 10-point perfect-page rubric.

## Scoreboard

| # | Page | Before | After | Δ | Diagnosis | Baseline (clicks / impr / CTR / pos) |
|---|---|---|---|---|---|---|
| 1 | `/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics` | 5/10 | 9/10 | **+4** | B2 | 596 / 9,008 / 6.6% / 5.3 |

## Page 1 — /ja/power-local-llm/uncensored-local-llm-creative-writing-ethics

Commits: `e98592a4d` (part 1), `23ef12c3e` (part 2). Branch `seo/ja-uncensored-llm-meta-2026-08-30`.

| # | Criterion | Before | After |
|---|---|---|---|
| 1 | Title covers top-3 query terms | ❌ | ✅ |
| 2 | Title has required entity | ❌ | ❌ |
| 3 | Year handled correctly | ✅ | ✅ |
| 4 | Meta answers intent in first 80 chars | ❌ | ✅ |
| 5 | Body covers high-impression queries | ❌ | ✅ |
| 6 | FAQ covers top-5 long-tail | ❌ | ✅ |
| 7 | No model-version drift | ✅ | ✅ |
| 8 | Title length + form (Rule 2d) | ✅ | ✅ |
| 9 | Rule 4 entity naming | ✅ | ✅ |
| 10 | Rules 33 + 36 opening block | ✅ | ✅ |
| | **Total** | **5/10** | **9/10** |

**#2 left red by decision** — the 24-32 CJK char budget cannot hold a model name without
dropping `倫理`, the page's SERP differentiator.

### What was actually wrong

- `日本語` appeared **0 times** in the entire `ja` block, while `ローカルllm 検閲なし 日本語`
  is the page's #2 query: 536 impressions, position 2.8, 8.6% CTR. Invisible in the page-level
  export; only the query-level view showed it.
- Synonym blindness. The page used only `無検閲` / `検閲なし`:

  | Term | Was in body | Impr | Pos | CTR |
  |---|---|---|---|---|
  | 無検閲 / 検閲なし | yes | ~2,400 | 1.7-3.5 | 8-21% |
  | 無修正 | no | 189 | 11.5 | 0.4% |
  | 非検閲 | no | ~224 | 4-8 | ~2% |
  | 規制なし / 制限なし / 無規制 | no | ~268 | 4-9 | ~2% |

- Meta named Ollama only; GSC shows **zero** Ollama queries and ~91 impressions of LM Studio
  queries.
- Zero-click clusters with no FAQ: 画像生成 (35), 脱獄 (7), NSFW (8), 無料無修正 (7),
  lm studio 無検閲/検閲 (21, 0 clicks).

### Fixed

New `japanese` body section (sourced from `best-japanese-language-models-local.ts`, no invented
benchmarks), title now carries `日本語` + `小説`, meta is answer-first with LM Studio, terminology
note covering all four synonym families, 6 new FAQs (10 -> 16). `next_refresh_due` -> 2027-03-01.

### Projected impact (NOT measured)

Rough, and labelled as a projection:

- 680 impr of synonym queries at pos 7-11.5 moving toward the page's own 8% CTR: **~+40/mo**
- 536 impr `日本語` query holding pos 2.8 with real coverage behind it: **~+15-25/mo**
- Meta/title CTR lift across the ~2,400 impr head cluster at 1-2 points: **~+25-50/mo**

**Projected ~+80-115 clicks/month.** Real answer requires a GSC re-pull.

## Verdict measurement — DUE 2026-09-27 (28d) / 2026-10-25 (56d)

Re-pull the same URLs in GSC and compare clicks/impressions/CTR/position against the baselines
in the scoreboard above. Until then, no claim that this work paid off is supportable.
