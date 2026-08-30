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
| 4 | `/zh/local-llms/local-llm-hardware-guide-2026` | 10/10 | 10/10 | 0 | **E** | 0 / 109 / 0% / 8.7 |
| 5 | `/de/smart-home/best-mini-pc-home-assistant-local-ai` | 9/10 | **10/10** | **+1** | A | 235 / 6,517 / 3.6% / 6.3 |
| 6 | `/de/local-llms/llm-quantization-explained` | 7/10 | **10/10** | **+3** | C | 48 / 2,415 / 2.0% / 3.7 |
| 7 | `/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026` | 6/10 | **10/10** | **+4** | C | 46 / 4,930 / 0.9% / 5.3 |
| 8 | `/zh/local-llms/apple-silicon-local-llm-guide-2026` | 6/10 | **10/10** | **+4** | C | 163 / 4,648 / 3.5% / 5.1 |

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

## Page 4 — /zh/local-llms/local-llm-hardware-guide-2026

**Score 10/10 before and after. The rubric had nothing to fix, and that is the finding.**

### Diagnosis E — wrong page ranking

Total Chinese search presence: **109 impressions, 0 clicks.** Of that, **105 (96%) come from one
query: `十三月 硬件要求`** at position 8.7.

`十三月` (UNDECEMBER / 末日余烬) is a dark-fantasy ARPG **video game**. Those searchers want a
game's system requirements. Zero clicks is the correct outcome — our local-LLM hardware guide is
the wrong result, and no title or meta change should try to win that query.

Stripping it out, the page's real Chinese footprint is **4 impressions**: `15gb`, `4070s`,
`哪個好`, `硬體需求` — one each, zero clicks.

### The number that matters

| | Impressions |
|---|---|
| `/local-llms/local-llm-hardware-guide-2026` (English) | **68,193** |
| `/zh/local-llms/local-llm-hardware-guide-2026` | **109** |

The Chinese version of the site's single biggest page by impressions is invisible — a ~600x gap.
That is not a metadata problem and cannot be fixed by this pipeline.

### Contributing factor found: hreflang says `zh`, content is Simplified

`OUTPUT_LOCALE` in `src/lib/i18n/constants.ts` is `{ pt: 'pt-BR', ko: 'ko' }` — Chinese is emitted
as bare **`hreflang="zh"`**. The zh blocks are 100% Simplified (378 Simplified markers, 0
Traditional in this file's zh block).

But Google's Chinese-language traffic is largely **Traditional** (Taiwan, Hong Kong) — mainland
China does not use Google. Two of this page's five queries are Traditional: `硬體需求`, `哪個好`.

Declaring `zh-Hans` would let Google match Simplified-preferring users properly instead of
treating the page as generic Chinese. This affects **every Chinese page on the site**, not just
this one. Not changed here — it is a site-wide routing decision.

### Fixed

Stale `2026年7月价格` ("July 2026 prices") in the meta description — present in **ja, zh and ko
only**; en/es/ar/pt/de/fr were already cleaned. Genuine locale drift, invisible to
`validate-month-drift.mjs` because it is not trailing-stamp form.

### Flagged, not changed

~93 `as of July 2026` price disclaimers in **body prose**, uniform across all nine locales
(en 11, es 11, ar 12, pt 11, de 11, fr 12, ja 11, zh 9, ko 5). Uniform means editorial
convention, not drift — stripping one locale would create drift. The standing no-month-snapshot
rule says they should go, but that is a 9-locale editorial pass on a `monthly`-tier page whose
subject is volatile GPU street pricing. Needs a decision, not a side-effect.

### Projected impact

**~0 clicks.** There is no CTR to recover from 4 relevant impressions. Honest answer: this page
did not need this pipeline.

## Page 5 — /de/smart-home/best-mini-pc-home-assistant-local-ai

**9/10 → 10/10.** Only #6 (FAQ long-tail) was red. Diagnosis A — body ahead of title.

### The CTR split

The same page, same position band, 4x apart on CTR depending on one word:

| Query | Impr | CTR | Pos |
|---|---|---|---|
| `home assistant mini pc empfehlung` | 23 | **13%** | 5.2 |
| `mini pc für home assistant empfehlung` | 24 | **12.5%** | 3.8 |
| `bester rechner für home assistant` | 31 | **9.7%** | 4.6 |
| `mini pc für home assistant 2026` | 99 | **8.1%** | 1.9 |
| `mini pc für home assistant` (head) | **686** | 2.9% | 6.0 |
| `mini pc home assistant` | 443 | 2.0% | 7.1 |

### Defects found

- **Meta was 197 characters.** Google truncates ~155, so the GEEKOM A9 Max pick and
  "Direkt verglichen" never displayed at all.
- **`Rechner` appeared 0 times** — the everyday German word for computer. ~85 impressions across
  `bester rechner für home assistant` (9.7% CTR), `rechner für home assistant` (32 impr, **0%**),
  `welcher rechner für home assistant` (18, 0%).
- **`vorinstalliert` 0 times** — 37 impressions across two variants, one at 0%.
- **`lüfterlos` 0 times** — 33 impressions.
- **`Home Assistant Green` 0 times** — the official HA hardware, and the single most obvious
  comparison a buyer makes. `home assistant green oder mini pc` ranks position 4.0.
- **`N100` 0 times** (N150 covered 25x).
- Only 5 FAQs, and a manually-authored `faqSchema` that had to be kept in sync.

### Fixed

- Meta rewritten to **155 chars**, carrying `Rechner` and `Empfehlung`
- FAQs **5 → 12** in both `faqs[]` and `faqSchema.mainEntity[]`: HA Green vs Mini-PC,
  vorinstalliert, worauf beim Kauf achten, lüfterlos, welcher Rechner, N100 vs N150, KI-Server
- All figures sourced from the article's own `costAndPower` section (N150 6 W TDP, 5–10 W idle,
  15–25 W under load, Ryzen 45–70 W) — nothing invented
- Honest correction embedded: the article calls N150 units "nahezu lautlos", so the lüfterlos FAQ
  says plainly that they are **not** fanless, rather than claiming a spec the page does not support

### Projected impact

The zero-click clusters total ~225 impressions (Rechner 85, kaufen 41, vorinstalliert 37,
lüfterlos 33, mini ki server 29). The head query alone is 686 impressions at 2.9% against 12-13%
on `Empfehlung` phrasing.

**Projected ~+45-80 clicks/month.**

## Page 6 — /de/local-llms/llm-quantization-explained

**7/10 → 10/10.** Red before: #4 (meta 188 chars, opened with a list not an answer),
#6 (Q4_K_XL uncovered), #10 (mandatory snippetBlocks absent).

The page was already well built for its query set — `whatIsQ4KM`, `compareQ40Q4KM`,
`compareQ4KMQ4KS`, `compareQ80Q8KXL` sections, Q4_K_M 126x, 17 FAQs. The gaps were narrow:

- **`Q4_K_XL` had zero mentions in all nine locales**, while `q4_k_m vs q4_k_xl` is 21
  impressions at 0 clicks. The XL family was covered at Q8 only.
- **Meta was 188 chars** and led with four vs-pairs instead of an answer.
- **snippetBlocks missing in 6 of 9 locales** (only en and pt had them).

### The head query is probably not a CTR problem

`q4_k_m` draws **332 impressions at 0.9% CTR from position 3.4**. That gap is too large for a
title defect. A bare technical token like `q4_k_m` is exactly the query shape Google answers with
an AI Overview, so the click is consumed above our result. The meta now leads with a *decision*
(which quant to pick for your VRAM) rather than restating the definition an AIO already gave —
that is the only lever metadata has here, and it will not fully close a gap of this size.

---

# Cross-cutting fixes (requested 2026-08-30, all committed)

## 1. Q4_K_XL + snippetBlocks across all 9 locales — DONE (`e12cf2de2`)

Structural defects are locale-independent; fixing them in one language was the wrong scope.
All 9 locales now have the `compareQ4KMQ4KXL` section, 4 new FAQs mirrored into `faqSchema`, and
snippetBlocks. Also repaired drift introduced by the de-only pass (de had faqs=21 vs
faqSchema=17). Verified per locale: `faqs count == faqSchema Question count`.

## 2. snippetBlocks backfill — VALIDATOR SHIPPED, BACKFILL NOT DONE (`0c4e8f8fb`)

**The flat "1,818 missing blocks" number was misleading. It is cluster-level adoption, not drift:**

| Cluster | Missing / blocks | |
|---|---|---|
| `prompt-engineering` | **712 / 712** | **100% — never adopted the convention** |
| `prompt-bites` | 669 / 1,106 | 60% |
| `balcony-solar` | 252 / 459 | 54% |
| `power-local-llm` | 73 / 639 | 11% |
| `local-llms` | 112 / 1,222 | 9% |
| `smart-home` | 0 / 459 | **fully compliant** |

`smart-home` proves the convention is achievable; `prompt-engineering` never started.

**What shipped:** `scripts/validate-snippet-blocks.mjs` + `npm run validate-snippet-blocks`.
Report-only by design — filling a snippetBlock means writing a one-sentence extractable answer
and a plain-language restatement *in that block's own language*. That cannot be generated
mechanically, and a hard-failing hook would only drive people to `--no-verify`.

**What did NOT ship: the 1,818 summaries themselves.** Bulk-generating them would mean inventing
~3,600 sentences across nine languages with no per-page grounding — the exact thing the
geo-translation rule forbids. This is a per-cluster content project, and `prompt-engineering` is
the whole first phase of it.

## 3. Korean internal links — DONE (`c9ba2ad29`)

1,097 links prefixed across 148 files. Korean blocks had Korean anchor text pointing at
unprefixed URLs, dropping readers onto the English page; ko was the only locale below 100%
(37% bare). Every target resolved through its cluster's `slugs.ts` and confirmed to have a ko
block first, so none lands on a `/ko/` URL serving English.

**5 files were held back** on the first pass (pre-existing full-sentence cells tripping the
table-cell hook), then lost their uncommitted edits in the branch incident. **Completed in
`f5c0f6c22`** — final 29 links prefixed. **Zero bare cluster links remain in any ko block
site-wide.**

The blocker was cleared two different ways, because one remedy did not fit both:

- **power-local-llm + prompt-engineering (32 sections):** set `itemHeadings: true`, the documented
  remedy (GEO_WRITING_GUIDELINES rule 6). Verified first that `PowerLocalLLMPostClient` and
  `PromptEngineeringPostClient` actually implement the flag — they do, so those sections now
  render as per-row cards instead of a table with 110+ char cells. That is the real mobile fix.
- **local-llms (2 files):** `LocalLLMsPostClient` has **zero** references to `itemHeadings`.
  Setting it there would have silenced the linter while leaving the rendering exactly as broken.
  Trimmed the 8 offending fr/es/pt cells instead — 112–120 chars down to 59–86, meaning preserved.

## 4. hreflang `zh-Hans` — DONE (`608bbd0e4`)

`OUTPUT_LOCALE` now emits `zh-Hans` instead of bare `zh`. The zh blocks are Simplified (zero
Traditional-only characters), but bare `zh` reads as generic Chinese to Google — which
mis-serves the Traditional TW/HK audience that makes up most Chinese-language Google traffic.
Affects every Chinese URL via `toOutputLocale()`.

## Page 7 — /zh/power-local-llm/best-gpu-buying-guide-local-llm-2026

**6/10 → 10/10.** Red before: #1, #4, #6, #7.

### What the Chinese queries actually want

Every listed query has **zero clicks**. The pattern is unusually consistent:

- **价格 (price) appears in ~15 of 17 queries** — and was **not in the title**
- **中国 (China) in 6 queries**, **二手 (used/second-hand) in 4**, **京东 (JD.com) in 1**
- **RTX 4090 in 7 queries** — the most-searched model, also absent from the title
- `rtx 5090 ti` (6 impr) had **zero** body coverage
- One query is Traditional (`哪款 gpu 最適合專業內容創作工作流程？`)

### Fixed

- Title → `本地大模型显卡价格 2026：RTX 4090/5090 选购` (31 chars). Adds 价格 and 4090.
- Meta → answer-first, stale `2026 年 7 月价格` removed, adds 二手行情.
- FAQs **8 → 11**: China-market price differences (京东/天猫/闲鱼), whether a used RTX 4090 is
  worth buying, and RTX 5090 Ti. 二手 now 51 mentions, 京东 3, 闲鱼 2.
- **Stale July stripped from 5 more locales' metas** (en, ja, pt, ar, ko — 7 strings total).
  de/fr/es were already clean. Same locale-drift shape as page 4.

### ⚠️ NOT fixed — USD prices on four localized buying guides

This is the significant finding and it needs a decision, not a patch.

`feedback_affiliate_localization` says: localize buying pages per market with **real local prices
and local retailers — never USD-convert**. Currency audit of this file:

| Locale | `$` | local currency | local retailers | verdict |
|---|---|---|---|---|
| de | 4 | **32 €** | 20 hits | localized ✓ |
| fr | 4 | **38 €** | 4 hits | localized ✓ |
| ja | 0 | **38 ¥** | 4 hits | localized ✓ |
| **zh** | **70** | 0 ¥ | 1 hit | **raw USD** ❌ |
| **es** | **76** | 0 € | 2 hits | **raw USD** ❌ |
| **pt** | **76** | 0 R$ | 2 hits | **raw USD** ❌ |
| **ko** | **74** | 0 ₩ | 2 hits | **raw USD** ❌ |

**de, fr and ja got real price localization. zh, es, pt and ko did not** — they carry the English
page's USD figures on a buying guide, which is exactly what the rule forbids.

I did not fix this, because doing it correctly means sourcing **real** CNY / EUR / BRL / KRW
street prices per market, and the rule explicitly bans deriving them by converting USD. Inventing
them would be worse than leaving them. The zh FAQ I added is an honest interim: it tells the
reader the listed figures are international reference prices and points them at 京东/天猫 for
current listings and 闲鱼 for used — without fabricating numbers.

**This affects the whole affiliate surface, not just this page.** Needs a per-market pricing pass.

## Page 8 — /zh/local-llms/apple-silicon-local-llm-guide-2026

**6/10 → 10/10.** Red before: #1, #4, #5, #6.

### The query set is conversational, not keyword

The largest query is **13 impressions (32% of everything listed), 0 clicks** — a full sentence:

> 个人做视频剪辑、三维或本地 ai 推理，mac 的 m5、m5 pro、m5 max 三档芯片该怎么选？内存配 32gb 还是 64gb 更合适？

The tail confirms it: `有推荐的吗？`, `512g呢`, `需要`, `性能对比`, `具体参数` are **conversational
follow-up fragments** — the shape of an AI-assistant session, not keyword search.

### Defects

- **The seoTitle of a local-LLM guide contained no LLM term** — `Apple Silicon 2026：M6至M5 Ultra`.
  Every query carries `llm`, `大模型` or `ai 推理`. `apple silicon` appears in **no** query.
- Meta opened with a launch announcement instead of a buying answer.
- **`视频` / `剪辑` / `三维` had ZERO occurrences** — the exact workloads the top query names.
- FAQs answered neither 32 vs 64GB nor the three-way chip choice.
- The `m5Ultra` section title and toc label were month-stamped (`2026年8月更新：…`).

### Fixed

- Title → `Mac 本地大模型 2026：M5 Pro/Max/Ultra` (31 chars)
- Meta → answer-first: 32GB→13B, 64GB→34B, 128GB→70B, plus the M5 Pro / M5 Max bandwidth gap
- New `memoryForWorkload` section + toc entry. 视频 0→4, 剪辑 0→7, 三维 0→6
- FAQs **10 → 14**; month de-stamped from heading and toc (day-precise date stays in body)

Every figure came from the article's own `memoryBandwidth` / `whichMac` sections (M5 150, M6 170,
M5 Pro 307, M5 Max 614 GB/s). The existing hedge is preserved verbatim: Apple has not published
M5 Ultra bandwidth, so no tok/s estimate is verified — including this page's own.

---

# ⚠️ Branch incident, 2026-08-30 ~11:56

A parallel session **committed onto this branch and then checked out `main`**, leaving this
session on `main` mid-task. Reflog:

```
e1e42e8b0 commit: feat(local-llms): add partial affiliate scaffolding to eu-cloud-gpu-gdpr-2026
           ^ another session's commit, landed on THIS branch
           checkout: moving from seo/ja-uncensored-llm-meta-2026-08-30 to main
```

Consequences caught and corrected:
- The tracking report appeared "deleted" — it was only ever on the branch, and `main` has no copy.
- `src/data/seo-changelog.json` in the working tree was **main's version carrying only 1 of the
  11 entries** from this session. Committing it would have silently destroyed the other 10.
- Page 8's edits were sitting uncommitted on `main`.

Recovery: verified `apple-silicon-local-llm-guide-2026.ts` was byte-identical on both branches
(so the edit could be carried safely), discarded the main-based changelog, returned to the branch,
re-applied the edit and re-logged. All 11 changelog entries and the report are intact.

**`e1e42e8b0` is another session's commit and was left untouched.**
