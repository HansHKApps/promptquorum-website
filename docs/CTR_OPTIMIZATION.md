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
