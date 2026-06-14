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
