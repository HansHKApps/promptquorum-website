# Non-English GSC Fix — 10 Posts, Before/After

Baselines are GSC last-28d as pasted by the user on the date each page was started.
Scores are the geo-meta-optimizer 10-point perfect-page rubric.

## Standing rule

**Every page ships at 10/10.** No criterion is handed back red. If a constraint appears to block
one (e.g. the 24-32 char CJK title budget), trade something out and say what was traded.
Criterion #2 passes when the query set is not entity-driven — apply that test identically on
every page.

## Scoreboard

| # | Page | Before | After | Δ | Diagnosis | Baseline (clicks / impr / CTR / pos) |
|---|---|---|---|---|---|---|
| 1 | `/ja/power-local-llm/uncensored-local-llm-creative-writing-ethics` | 5/10 | **10/10** | **+5** | B2 | 596 / 9,008 / 6.6% / 5.3 |
| 2 | `/de/local-llms` (hub) | 8/10 | **10/10** | **+2** | A | 273 / 7,883 / 3.5% / 4.9 |
| 3 | `/ko/local-llms/what-are-local-llms` | 5/10 | **10/10** | **+5** | C | 183 / 7,491 / 2.4% / 5.9 |

## Page 1 — /ja/power-local-llm/uncensored-local-llm-creative-writing-ethics

Commits: `e98592a4d` (part 1), `23ef12c3e` (part 2). Branch `seo/ja-uncensored-llm-meta-2026-08-30`.

| # | Criterion | Before | After |
|---|---|---|---|
| 1 | Title covers top-3 query terms | ❌ | ✅ |
| 2 | Title has required entity | ✅ | ✅ |
| 3 | Year handled correctly | ✅ | ✅ |
| 4 | Meta answers intent in first 80 chars | ❌ | ✅ |
| 5 | Body covers high-impression queries | ❌ | ✅ |
| 6 | FAQ covers top-5 long-tail | ❌ | ✅ |
| 7 | No model-version drift | ✅ | ✅ |
| 8 | Title length + form (Rule 2d) | ✅ | ✅ |
| 9 | Rule 4 entity naming | ✅ | ✅ |
| 10 | Rules 33 + 36 opening block | ✅ | ✅ |
| | **Total** | **5/10** | **10/10** |

**#2 corrected to PASS — this was a scoring error, not a page defect.** Criterion #2 reads
"where the query set indicates entity-driven search". Page 1's top 10 queries by impression
(無検閲llm 880, ローカルllm 検閲なし 日本語 536, ローカルllm 検閲なし 357, ローカルllm 検閲なし
小説 206, 無検閲 186, uncensored llm 151, 無検閲モデル 141, 無検閲 llm 128, llm 無検閲 111,
無修正 モデル 105) contain **zero** entity names; the first is `lm studio 検閲なし` at 39
impressions. That is category search, not entity search — the same shape as page 2, where #2
was scored PASS on exactly that reasoning. One standard, applied to both.

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

## Page 2 — /de/local-llms (hub)

Hub page, not an article: metadata in `src/translations.ts`, body copy in
`src/components/LocalLLMsHub.tsx` as `Record<lang, string>` maps.

| # | Criterion | Before | After |
|---|---|---|---|
| 1 | Title covers top-3 query terms | ❌ | ✅ |
| 2 | Title has required entity | ✅ | ✅ |
| 3 | Year handled correctly | ✅ | ✅ |
| 4 | Meta answers intent in first 80 chars | ❌ | ✅ |
| 5 | Body covers high-impression queries | ✅ | ✅ |
| 6 | FAQ covers top-5 long-tail | ✅ | ✅ |
| 7 | No model-version drift | ✅ | ✅ |
| 8 | Title length + form (Rule 2d) | ✅ | ✅ |
| 9 | Rule 4 entity naming | ✅ | ✅ |
| 10 | Rules 33 + 36 opening block | ✅ | ✅ |
| | **Total** | **8/10** | **10/10** |

### Diagnosis A — body ahead of title

The body was already comprehensive (`lokales llm` 11x, `lokale llm` 27x, VRAM 46x, Ollama 46x,
13 German FAQs). The title was the problem: `Beste lokale LLMs nach VRAM-Tier 2026: 12GB, 24GB,
48GB` spent ~35 of 55 characters on hardware segmentation.

**The segmentation was not earning its space.** The only VRAM-numeric query, `llm 16gb vram`,
gets 4 impressions and **0 clicks** at position 8.5. The whole zero-click hardware cluster
(`lokale llm hardware`, `local llm hardware`, `pc für lokale llm`, `lokaler llm server`,
`llm auf eigener hardware`) is ~36 impressions and **0 clicks**.

Meanwhile the split by query type is stark:

| Query type | Impr | CTR | Position |
|---|---|---|---|
| contains `beste` / `vergleich` | ~236 | **10-18%** | 1.4-2.5 |
| generic (`local llm`, `lokales llm`, `lokale llm(s)`, `lokale llm modelle`) | ~1,112 | **0-5.8%** | 3.7-5.6 |

`lokales llm` alone: **204 impressions, 0 clicks, position 5.6.**

### Fixed

- Title → `Beste lokale LLMs 2026: Modelle & Hardware im Vergleich` (55 chars). Keeps the exact
  `Beste lokale LLMs` phrase that ranks 1.4-2.5; drops the GB stuffing; adds `Vergleich`, which
  appears in the page's two highest-CTR queries (18.2% and 8.3%).
- Meta → answer-first in 77 chars (`Lokale LLMs … laufen komplett auf Ihrem Rechner – ohne
  API-Kosten`), 153 chars total, with a natural `(Local LLMs)` gloss.
- H1 and hero intro de-narrowed; intro now glosses `Local LLMs` and `lokale KI` (both were
  **0 occurrences** in the German body).
- Stale `Mai 2026` stripped from the German Ollama-models FAQ heading and answer.

### #1 fixed — English term in the German title

The page's single biggest query is the **English** string `local llm`: 554 impressions (32% of
all listed), position 4.1, 3.6% CTR. With `local llms`, `llm local`, `local llm pc` and the typo
tail it is ~700 impressions. Final title: `Beste lokale LLMs 2026: Local-LLM-Modelle im
Vergleich` (54 chars) — `Local-LLM-Modelle` is a natural German compound, so the English term is
carried without reading as stuffing. `Hardware` was traded out (36 impr, 0 clicks).

### Month sweep — all 8 locales of the hub

`validate-month-drift.mjs` only catches trailing-stamp position, so these survived the
2026-08-28 sweep:

- **Stale FAQ heading + answer** `best Ollama models in May 2026` — fixed in all 8 locales that
  had it (en, de, fr, es, pt, ja, zh, ar; ko does not carry this FAQ).
- **`As of May 2026` body snapshots** in the "what is a local LLM" answer — removed in en, de,
  fr, ja, zh and rephrased to a non-dated claim, per the standing no-month-snapshot rule.
- One `{/* New in May 2026 */}` code comment relabelled.

`LocalLLMsHub.tsx` now contains **zero** month references. The English hub alone carries 46,114
impressions/month, so this reaches well beyond the German page.

### Projected impact (NOT measured)

- ~1,112 impr of generic queries moving from 0-5.8% toward the 8-10% the same page already earns
  on comparable positions: **~+40-70/mo**
- `lokales llm` (204 impr, 0 clicks, pos 5.6) is the single largest recoverable block

**Projected ~+40-70 clicks/month.**

## Page 3 — /ko/local-llms/what-are-local-llms

| # | Criterion | Before | After |
|---|---|---|---|
| 1 | Title covers top-3 query terms | ❌ | ✅ |
| 2 | Title has required entity | ✅ | ✅ |
| 3 | Year handled correctly | ❌ | ✅ |
| 4 | Meta answers intent in first 80 chars | ✅ | ✅ |
| 5 | Body covers high-impression queries | ❌ | ✅ |
| 6 | FAQ covers top-5 long-tail | ❌ | ✅ |
| 7 | No model-version drift | ✅ | ✅ |
| 8 | Title length + form (Rule 2d) | ❌ | ✅ |
| 9 | Rule 4 entity naming | ✅ | ✅ |
| 10 | Rules 33 + 36 opening block | ✅ | ✅ |
| | **Total** | **5/10** | **10/10** |

### Diagnosis C — both drifted

**The page answers the wrong question.** It is a definitional page ("What Are Local LLMs?"), but
the Korean demand is not definitional:

| Cluster | Impr | CTR |
|---|---|---|
| `로컬 AI` (로컬 ai, 로컬ai, ai 로컬, ai로컬, 로컬 ai 모델 …) | **~2,780** | **1.4%** |
| `로컬 llm` (+ 로컬llm, 로컬 llm 모델, llm 로컬) | ~890 | ~3% |
| `구축` — build/set up (로컬 llm 구축 433 @ 5.1%, local llm 구축, 자체 llm 구축 …) | ~690 | ~5% |
| English (`local llm` 440 @ 3.4%, llama local llm …) | ~530 | ~3% |
| `언어모델` unspaced (로컬언어모델, 언어모델로컬 …) | ~82 | **0%** |
| definitional (`로컬 llm 뜻`, `로컬 llm이란`, `what is local llm`) | ~41 | ~6% |

The definitional intent the page was built for is **~41 impressions**. The biggest cluster,
`로컬 AI` at ~2,780 impressions, had the phrase `로컬 AI` appearing **once** in the whole
Korean block. `구축` appeared twice. `언어모델` (unspaced, how Koreans actually type it) zero times.

Title defects: 34 CJK characters (over the 32 budget), question form, and **no year despite
`semi_annual`**.

### Fixed

- seoTitle → `로컬 AI와 로컬 LLM 2026: 개념과 구축 방법` (29 chars, statement, year, both head clusters)
- New `localAiTerms` section — 로컬 AI vs 로컬 LLM, plus the Korean synonym set (로컬 모델,
  로컬 언어모델, 자체 LLM, 설치형 LLM, 온프레미스 LLM). 로컬 AI now appears **17x** (was 1).
- New `buildSteps` section with `numberedItems` (4-step build order) — 구축 now **10x** (was 2)
- FAQs **4 → 11**: 로컬 AI 차이/종류, 구축 소요 시간, 자체 LLM, 최소 하드웨어, 파인튜닝, 한국어 품질
- Removed `2026년 8월 기준` month snapshot from the intro
- **14 internal links fixed** — see below

### Korean internal-link bug (site-wide)

The `ko` block had **15 of 16 internal links missing the `/ko/` prefix** — Korean anchor text
pointing at English URLs. Every other non-EN locale in this file is at 100% correct.

Repo-wide this is **1,172 links across 169 files, 37% of all Korean internal links**. Worst:
`local-llm-hardware-guide-2026.ts` 30/32, `local-llm-on-laptop.ts` 22/26,
`prompt-building-blocks.ts` 19/20. `ja` has a smaller version of the same defect (~154 bare).

The `/pt/…` links are **not** part of this — they are the intentional Layer A cross-language nav
and were left alone.

### Projected impact (NOT measured)

`로컬 AI` at ~2,780 impressions and 1.4% CTR is the single largest recoverable block seen so far
across the three pages. Moving it toward the ~5% the same page already earns on `구축` queries
would be **~+100/mo** on its own.

**Projected ~+120-160 clicks/month.**
