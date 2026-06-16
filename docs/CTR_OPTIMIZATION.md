# CTR Optimization Tracker

## Methodology

- **Baseline CTR**: pulled from Google Search Console 28-day window immediately before the change date.
- **Measurement**: re-pull GSC for each page at T+14 (exact date noted per bucket).
- **Status legend**: ⏳ baseline-captured / 🔧 deployed, measuring / ✅ result in

---

## Bucket 2 — Snippet Rewrites (geo-meta-optimizer, all locales)

8 high-impression pages whose titles and meta descriptions were rewritten to lead with hard
numbers, specific model names, and task-outcome hooks.

| Page | Baseline CTR | New CTR | Status | Changed |
|---|---|---|---|---|
| `/local-llms/best-local-llms-for-coding` | 0.28% | — | 🔧 | 2026-06-14 |
| `/local-llms/best-budget-gpus-local-llm` | 0.32% | — | 🔧 | 2026-06-14 |
| `/local-llms/qwen-vs-llama-vs-mistral` | 0.21% | — | 🔧 | 2026-06-14 |
| `/local-llms/best-beginner-local-llm-models` | 0.26% | — | 🔧 | 2026-06-14 |
| `/local-llms/long-context-local-llms` | 0.48% | — | 🔧 | 2026-06-14 |
| `/local-llms/how-much-vram-local-llm` | 0.06% | — | 🔧 | 2026-06-14 |
| `/local-llms/local-llm-security-privacy-checklist` | 0.48% | — | 🔧 | 2026-06-14 |
| `/local-llms/run-qwen-locally-guide-2026` | 0.48% | — | 🔧 | 2026-06-14 |

### Deploy log

- **2026-06-14**: Bucket-2 snippet rewrites deployed (8 pages, all locales via geo-meta-optimizer). Commit `a48ae779`. IndexNow submitted same day (200 OK, 8 URLs, key `2fd43c75…`).
- **MEASURE on 2026-06-28** — re-pull GSC for these 8 pages (28-day window ending 2026-06-28), fill New CTR column, update Status to ✅ or note if impressions too low to read.

---

## Bucket 3 — /es/ CTR Fix (Spanish high-impression, ~0% CTR)

8 pages ranked in GSC /es/ Page filter (28-day, sorted by impressions) with near-zero CTR.
Audience: US-based Spanish speakers (#1) + LatAm. Meta rewritten es only (seoTitle + metaDescription).
dateModified bumped to 2026-06-14; lastFactChecked unchanged (snippet fix only).

**Winning pattern extracted from 4 converting /es/ pages:**
- Front-load keyword in Spanish; year 2026 in title; parenthetical mini-specs `(X GB, Y tok/s)`;
  description starts with specific model name + number, not repeating the title.

**High-rank / zero-click anomalies to watch:**
- `best-cpu-only-llm` (pos 3.8, was 0.1%) — "LLM Solo CPU" not matching Spanish query phrasing → rewritten as "5 LLMs sin GPU 2026"
- `xinference-llama-qwen-chatglm-mistral` (pos 3.5, was 0%) — no benefit in snippet → added "Servidor LLM local con 200+ modelos"

| Page | Baseline es-CTR | Impr | Pos | New seoTitle | Status | Changed | T+14 Measure |
|---|---|---|---|---|---|---|---|
| `/es/local-llms/mobile-local-llms` | 0.1% | 2,004 | 7.3 | Mejores Apps LLM 2026: MLC LLM, PocketPal y Ollama iOS | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/best-cpu-only-llm` | 0.1% | 1,499 | 3.8 | 5 LLMs sin GPU 2026: Phi-4 Mini, Gemma 3, Llama 3.2 | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/apple-silicon-m5-local-llm` | 0.2% | 865 | 9.2 | M5 Pro vs M5 Max 2026: Apple Silicon para IA Local | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/best-local-llms-2026` | 0% | 632 | 7.2 | Mejores LLMs Locales 2026: Llama 70B, Qwen3, Mistral | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/xinference-llama-qwen-chatglm-mistral` | 0% | 457 | 3.5 | Xinference 2026: Llama 3 y Qwen Locales, API OpenAI | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/apple-silicon-local-llm-guide-2026` | 0.5% | 426 | 7.1 | Apple Silicon 2026: M5 Pro vs M5 Max para IA Local | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/top-open-source-models-ollama` | 0.8% | 354 | 7.6 | Top 10 Modelos Ollama 2026: Llama 4, Qwen 3, Kimi K2 | 🔧 | 2026-06-14 | 2026-06-28 |
| `/es/local-llms/70b-models-consumer-hardware` | 0% | 247 | 6.8 | Llama 70B en PC 2026: 40 GB RAM, RTX 4090 o M5 Max | 🔧 | 2026-06-14 | 2026-06-28 |

### Deploy log

- **2026-06-14**: Bucket-3 /es/ CTR snippet rewrites deployed (8 pages, es locale only). Commit `8686029d`. IndexNow submitted same day (200 OK, 8 URLs, key `2fd43c75…`).
- **MEASURE on 2026-06-28** — re-pull GSC /es/ Page filter (28-day window), fill New CTR column, mark ✅ or investigate if impressions changed significantly. Focus on best-cpu-only-llm (pos 3.8) and xinference (pos 3.5).

### Verification notes (2026-06-14)

- All 8 live titles confirmed NEW (model names + numbers visible in `<title>`).
- `lastFactChecked` field: **not present** in any of the 8 article files — field does not exist in this codebase; no falsification risk.
- `dateModified` bumped to `2026-06-14` on all 8 articles — correct.
- No article content was changed; only `title` / `metaDescription` fields in the EN and locale blocks.

---

## Bucket 3 — Affiliate CTR (high-impression, low-click affiliate pages)

6 affiliate pages that rank ok (pos ≤ 9.5) but convert near-zero. Rewrote
seoTitle + metaDescription via geo-meta-optimizer to match the high-CTR affiliate
pattern: concrete product names + prices/speeds + year. Body, affiliate links, and
affiliateDisclosure untouched. `dateModified` bumped; `lastFactChecked` unchanged.

| Page | Impr | Baseline CTR | Pos | New CTR | Status | Changed | Measure |
|---|---|---|---|---|---|---|---|
| `/power-local-llm/apple-mlx-vs-nvidia-cuda-local-llm-2026` | 4529 | 0.40% | 7.8 | — | 🔧 | 2026-06-14 | 2026-06-28 |
| `/power-local-llm/best-ai-coding-tools-comparison-2026` | 1042 | 0.10% | 8.7 | — | 🔧 | 2026-06-14 | 2026-06-28 |
| `/power-local-llm/best-mac-for-local-ai-2026` | 773 | 0.26% | 9.4 | — | 🔧 | 2026-06-14 | 2026-06-28 |
| `/local-llms/best-gpu-for-llm-inference-under-500-2026` | 767 | 0.26% | 9.4 | — | 🔧 | 2026-06-14 | 2026-06-28 |
| `/local-llms/alibaba-cloud-vs-tencent-cloud-gpu-ai-2026` | 623 | 0% | 6.1 | — | 🔧 | 2026-06-14 | 2026-06-28 |
| `/power-local-llm/local-llm-software-directory-2026` | 653 | 0.46% | 9.1 | — | 🔧 | 2026-06-14 | 2026-06-28 |

### Ranking-bucket (not a snippet problem — needs content/link work)

| Page | Impr | CTR | Pos | Issue | Action |
|---|---|---|---|---|---|
| `/power-local-llm/cloud-gpu-rental-guide-2026` | — | — | 12.4 | Page 2 — ranking problem, not snippet | Content/link work needed; do NOT rewrite snippet |

### Before/after EN seoTitle

| Page | Before | After |
|---|---|---|
| apple-mlx-vs-nvidia-cuda | `Apple MLX vs NVIDIA CUDA for Local LLMs 2026` | `M5 Max vs RTX 5090: Local LLM Benchmarks 2026` |
| best-ai-coding-tools | `Best AI Coding Tools 2026: Cursor vs Continue.dev & More` | `Best AI Coding Tools 2026: Cursor $20 vs Free Continue.dev` |
| best-mac-for-local-ai | `Best Mac for Local AI 2026: Mac Mini vs Studio vs MBP` | `Best Mac for Local AI 2026: Mac Mini vs Studio vs MBP` *(desc fixed)* |
| best-gpu-under-500 | `Best GPU for LLM Inference Under $500 (2026)` | `RTX 4060 Ti 16GB at $420: Best GPU for LLM 2026` |
| alibaba-vs-tencent-cloud | `Alibaba vs Tencent Cloud GPU 2026: Qwen Speed Test` | `AutoDL vs Alibaba Cloud PAI vs Tencent GPU 2026` |
| local-llm-software-directory | `Local LLM Tools 2026: 87-App Directory + Latest Updates` | `87 Local LLM Tools 2026: 9 Categories, Ollama to RAG` |

### Deploy log

- **2026-06-14**: Bucket-3 affiliate CTR rewrites deployed (6 pages, 9 locales each via geo-meta-optimizer). Commit `775c39db`. IndexNow submitted same day (200 OK, 6 URLs, key `2fd43c75…`).
- **MEASURE on 2026-06-28** — re-pull GSC for these 6 pages (28-day window ending 2026-06-28), fill New CTR column, update Status to ✅ or flag ranking issues.

---

## Bucket 4 — Intent-mismatch reposition (ranks well, 0% CTR, wrong title intent)

### `/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts` — license/commercial reposition

Page ranked **pos 3.6–11 with 0% CTR** across all locales. GSC showed the dominant
query cluster is **LICENSE / commercial-use intent**, but the title was a generic
engine "vs" comparison — no license signal. Total makeover: repositioned title +
meta for license/commercial intent, made the License section the standout (clear
"can I use this commercially?" table), filled the specific content gap (CPML
non-interactive acceptance via `COQUI_TOS_AGREED=1` env var — its own section + FAQ),
added Kokoro-vs-Piper FAQ + Tortoise TTS (Apache 2.0) to both comparison tables, and
refreshed XTTS v2 voices/17-languages + VRAM snippets. Licenses web-verified June 2026.
All 9 locales (en/de/fr/ja/zh/es/ko/pt/ar). `dateModified` + `lastFactChecked` → today.

| Page | Baseline CTR | Pos | New CTR | Status | Changed | Measure |
|---|---|---|---|---|---|---|
| `/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts` (×9 locales) | 0% | 3.6–11 | — | 🔧 | 2026-06-16 | 2026-06-30 |

**Query clusters (all 0% CTR):**
- **LICENSE/commercial (primary, higher-value commercial visitors):** `coqui xtts v2 license non commercial` (pos 7.2), `coqui tts cpml license agree environment variable non-interactive` (pos 3.6 — content gap, now filled), `coqui xtts v2 license commercial use 2026` (6.0), `piper tts license commercial use` (8.0), `coqui xtts v2 license voice cloning commercial use` (7.8)
- **COMPARISON:** `kokoro tts vs piper 2026` (9.1), `piper tts vs kokoro tts` (11.2), `piper tts vs coqui tts vs tortoise tts vs styletts 2026` (4.8)
- **SPEC:** `xtts v2 voices` (9.4), `coqui xtts v2 vram requirements` (7.8)

**Quick-unlock note:** pos 3.6 (CPML env-var query) + pos 4.8 with 0 clicks = fast win once
the title signals license answers. License intent is **commercial** → higher-value traffic.

### Before/after EN seoTitle + meta

| Field | Before | After |
|---|---|---|
| seoTitle | `Local TTS Voice Cloning 2026: Piper vs XTTS v2 vs F5-TTS` | `Local TTS & Voice Cloning Licenses 2026: Commercial Use` |
| metaDescription | `Piper runs real-time on CPU; XTTS v2 voice-clones in 17 languages. 6 local TTS engines for 2026 — VRAM, Apple Silicon results, and CPML license guide.` | `Which local TTS engines allow commercial use? Licenses for Piper (MIT), XTTS v2 (CPML), F5-TTS (CC-BY-NC) & Coqui, plus the COQUI_TOS_AGREED env var. 2026 guide.` |

### Deploy log

- **2026-06-16**: License/commercial reposition + content makeover deployed (1 page, 9 locales). Licenses web-verified (XTTS v2 CPML non-commercial; Coqui shut down Jan 2024 → no commercial license on sale; `COQUI_TOS_AGREED=1` confirmed; F5-TTS CC-BY-NC-4.0; Tortoise Apache 2.0). IndexNow submitted same day (200 OK, 9 URLs, key `2fd43c75…`).
- **MEASURE on 2026-06-30** — re-pull GSC (28-day window), fill New CTR, update Status to ✅ or flag.
