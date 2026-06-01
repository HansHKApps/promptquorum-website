# Restart Note — Content Refresh (resume 2026-06-05)

Written 2026-06-01 at end of a token-limited session. This is the handoff to pick up the
PAGE_UPDATER monthly refresh + site-wide LLM fact-fix campaign.

## What is DONE and shipped (2026-06-01)
- **Monthly tier + quarterly-SEO design** installed: `monthly` freshness tier added to the type
  unions; 8 high-impression pages set to `freshness_tier: 'monthly'`, `next_refresh_due: 2026-06-30`,
  `next_seo_review_due: 2026-07-01`. Two-cadence model documented in `docs/PAGE_UPDATER.md`
  ("Two Cadences" section): monthly = facts only; **title/meta SEO = quarterly (Jul 1 / Oct 1 / Jan 1 / Apr 1)**.
- **Site-wide June-2026 LLM fact-fix** across all >1,000-impression model pages (facts only):
  Ollama v0.24.0, Kimi K2.6 32B/Modified MIT, Llama 4 Scout ~55 GB / 10M-context (no longer
  "best overall"), Qwen 3.6 27B = best overall on consumer hardware, Gemma 4 E-sizes, GLM-5.1 by
  Z.ai, added gpt-oss:20b + qwen3:30b/qwen3-coder:30b. Shared `local-llms/schema.ts` fixed.
  Unverified "DeepSeek-R2" removed (→ DeepSeek-R1). Build green (exit 0). Cross-page consistent.
  Files: `top-open-source-models-ollama`, `local-llm-hardware-guide-2026`, `best-local-llms-for-coding`,
  `how-much-vram-local-llm`, `best-budget-gpus-local-llm`, `qwen-vs-llama-vs-mistral`,
  `local-llm-one-click-installers`, `best-local-llms-2026` (partial), `schema.ts`,
  `prompt-engineering/articles/ai-code-review` (partial), `geopolitics-and-ai`.

## Canonical corrected facts (SOURCE OF TRUTH — reuse for any remaining page)
- Ollama latest = **v0.24.0** (May 14 2026).
- **Llama 4 Scout** = 17B active / 109B total / 16 experts, 10M context, multimodal; **~55 GB @ Q4**
  (24 GB only at 1.78-bit). NOT a ~10 GB / "best overall" consumer model.
- **Qwen 3.6 27B (dense)** = 77.2% SWE-bench, Apache 2.0, Apr 16; 24 GB Q4 → **best overall consumer**.
  Also Qwen3.6-35B-A3B MoE (73.4); `qwen3:30b` / `qwen3-coder:30b`.
- **Kimi K2.6** = 1T / **32B active**, **Modified MIT**, Apr 20, SWE-Bench Pro 58.6.
- **GLM-5.1** = **Z.ai**, 744B / 40B active, MIT, Apr 7, SWE-Bench Pro 58.4.
- **Gemma 4** = E2B / E4B / E12B (26B MoE) / E27B (31B dense), multimodal.
- **gpt-oss** = 20b (21B/3.6B active, 16 GB, ~o3-mini), 120b (80 GB).
- Frontier comparators (current) = GPT-5.5, Claude Opus 4.8 (+ Sonnet 4.6), Gemini 3.5, Grok 4.

## TODO on 2026-06-05 (residuals, in priority order)
1. **`ai-code-review.ts` (PE, 2K imp) — update frontier comparators.** ~15 spots still say
   GPT-4o / Gemini 3.1 Pro / Claude Sonnet 4.6 as the *current* frontier → GPT-5.5 / Gemini 3.5 /
   Sonnet 4.6 (all 6 lang blocks + 2 SoftwareApplication schema entries). Also fix the internal
   contradiction: Gemini context window says 1M in some places, 10M in others (DE/FR/JA/ZH tables) —
   pick the correct value. Quick-ish. NOTE: this run only fixed Scout VRAM here; dateModified NOT bumped.
2. **`best-local-llms-for-coding.ts` — re-sync DE/FR/JA/ZH ranking BODIES.** Crowns/FAQ/schema/EN/ES
   are updated, but the German/French/Japanese/Chinese *detailed section bodies* still describe
   Qwen2.5-Coder 32B as #1 (87% HumanEval) while the titles say Kimi K2.6. Internal inconsistency.
   Needs a geo-translation re-sync of those 4 blocks to mirror the migrated EN/ES structure
   (follow `docs/geo-translation.md`). Do NOT invent benchmark numbers not in CANON.
3. **`best-local-llms-2026.ts` — rebuild ranking (BIGGEST).** Still the OLD lineup (Llama 3.3 70B
   "best overall", Qwen2.5 72B, Gemma 3 9B). Conflicts with canon (Qwen 3.6 27B = best overall).
   Blocked: CANON has no MMLU/HumanEval for the new models. **First research current MMLU/HumanEval/
   SWE-bench for Qwen 3.6 27B, qwen3:30b, gpt-oss:20b, Gemma 4, Kimi K2.6**, then rebuild all 6 blocks.
4. **`geopolitics-and-ai.ts` (PE) — decide on GPT-4o refs.** ~many GPT-4o mentions, but mostly
   *historical/regulatory* (DeepSeek Jan-2025 comparisons, EU AI Act GPAI examples). Likely LEAVE;
   only `current_models_mentioned` (line ~13) and any "if you deploy X today" lines are arguably
   current-frontier → judgment call.

## Out of scope this round (<1,000 imp) — fix opportunistically
- `autonomous-local-agents-actually-work.ts` — Ollama "0.18.0" → v0.24.0.
- `local-ai-agents-with-mcp-2026.ts`, `xinference-llama-qwen-chatglm-mistral.ts` — "Zhipu" → Z.ai.

## Then: July 1 = first QUARTERLY SEO REVIEW
For the 8 monthly pages (`next_seo_review_due: 2026-07-01`), optimize title/seoTitle/metaDescription
per GSC query/CTR data, using `docs/geo-meta-optimizer-v2.md`. The ollama-page title is intentionally
unchanged this round (we reverted a premature month-stamp) — revisit it then.

## Resume pointers
- Plan file: `~/.claude/plans/buzzing-baking-curry.md`
- Workflow script (re-runnable): the `llm-fact-fix-june-2026` script under the session workflows dir.
