# Block 3 Content Refresh — GSC Medium-Volume, Fixable Position

**Date:** 2026-06-19  
**Goal:** Push 9 pages from page-1-bottom into the click zone.  
**Combined missing clicks:** ~141/week  
**Protocol:** Follow `docs/PAGE_UPDATER.md` for every page (full-depth — no top-only edits).

---

## Staleness Summary

| # | Slug | Cluster | Pos | Impr | Missing/wk | Last Content Change | Status |
|---|------|---------|-----|------|------------|---------------------|--------|
| 1 | `local-vision-models-llava-ollama-2026` | power-local-llm | 5.7 | 1,642 | ~21 | 2026-06-12 (KO wave) | **DO** |
| 2 | `how-much-vram-local-llm` | local-llms | 7.2 | 3,150 | ~19 | 2026-06-13 (KO wave) | **DO** |
| 3 | `best-cpu-only-llm` | local-llms | 6.6 | 4,429 | ~18 | 2026-06-13 (KO wave) | **DO — careful** |
| 4 | `running-70b-models-apple-silicon-m5-max` | local-llms | 8.1 | 2,286 | ~14 | 2026-06-14 (legal fix) | **DO** |
| 5 | `best-ollama-models-rtx-3060-12gb` | prompt-bites | 6.0 | 1,282 | ~14 | 2026-06-12 (KO wave) | **DO** |
| 6 | `anythingllm-vs-privategpt-vs-openwebui-rag` | power-local-llm | 7.7 | 2,194 | ~13 | 2026-06-12 (KO wave) | **DO** |
| 7 | `local-llm-security-privacy-checklist` | local-llms | 7.8 | 2,385 | ~12 | 2026-06-13 (KO wave) | **DO** |
| 8 | `best-local-models-tool-calling-2026` | power-local-llm | 7.6 | 2,027 | ~10 | 2026-06-12 (KO wave) | **DO** |
| 9 | `local-ai-app-non-technical-users` | power-local-llm | 8.7 | 2,012 | ~10 | 2026-06-12 (KO wave) | **DO** |
| — | `local-llm-one-click-installers` | local-llms | 8.1 | 1,483 | ~10 | 2026-06-19 (181 lines) | **SKIP** |

**KO wave** = Korean translation block added, zero substantive EN/content change.  
**Legal fix** = UWG compliance pass, not a content refresh.

---

## The 4-Move Pattern

Apply all 4 moves to **every language block** (en, de, es, fr, ja, pt, zh, ko, ar):

1. **Freshen the lead** — rewrite `quickAnswerTop` to front-load the searcher's answer in one sentence. Current model names, current version numbers.
2. **Refresh the model list** — update every named model to the current best as of June 2026. Remove discontinued or superseded models from section bodies, comparison tables, and `current_models_mentioned`.
3. **Add a verdict callout** — insert a `snippetBlocks` or lead-answer sentence that functions as a clear winner/best-pick declaration. This is what Google pulls for featured snippets.
4. **Bump the dates** — set `dateModified` to `2026-06-19`, `lastFactChecked` to `2026-06-19`, and advance `next_refresh_due` by 6 months to `2026-12-19`.

Use `/geo-translation` for all non-EN blocks — never manually write translations.

---

## Page-by-Page Instructions

---

### 1. `local-vision-models-llava-ollama-2026`
**Path:** `src/lib/power-local-llm/articles/local-vision-models-llava-ollama-2026.ts`  
**Fix type:** Model freshness (LLaVA successors) + quick verdict  
**Priority:** Highest — pos 5.7 is closest to the click zone in this block.

**What to do:**
- LLaVA 1.5 and LLaVA 1.6 are superseded. Likely current best vision models for Ollama (June 2026): **llama3.2-vision** (Meta, strong general vision), **minicpm-v** (MiniCPM-V 2.6, excellent for documents/OCR), **moondream2** (ultra-light, 1.8B, runs on anything), **qwen2.5vl** (Qwen2.5-VL, best for CJK documents). **⚠ Verify all Ollama model tags against the live Ollama library (ollama.com/library) before writing `ollama pull` commands — vision model tags churn fast and must not be written from memory.**
- Rewrite `quickAnswerTop` (EN): "The best local vision model for Ollama in 2026 is **llama3.2-vision** for general tasks; use **qwen2.5vl** for CJK text and **moondream2** on low-VRAM hardware (8 GB or less)."
- Add a verdict callout block (the "best pick" table) with: model name, VRAM floor, best use case, verified `ollama pull` command (confirm tag is live before inserting).
- Remove LLaVA from top-ranked positions; move to "Historical context" if relevant, or remove entirely.
- Update `current_models_mentioned` to the 4 models above.
- `freshness_tier` stays `semi_annual`. Advance `next_refresh_due` to `2026-12-19`.

---

### 2. `how-much-vram-local-llm`
**Path:** `src/lib/local-llms/articles/how-much-vram-local-llm.ts`  
**Fix type:** VRAM calculator callout + quick-answer table  
**Priority:** High — 3,150 impressions, pos 7.2.

**What to do:**
- Add a `quickAnswerTop` (EN): "Rule of thumb: 1B model parameters ≈ 0.6 GB VRAM in 4-bit quantization. A 7B model needs 4–5 GB; a 13B needs 8–9 GB; a 70B needs 40–48 GB. For CPU-only, double the RAM requirement."
- Insert a VRAM requirements table in the first section: model size → quant → minimum VRAM → recommended VRAM → example hardware. Rows: 1B, 3B, 7B, 13B, 34B, 70B.
- Reference current models in each row (Llama 3.2 1B, Qwen3 7B, Llama 3.3 70B, etc.) — these are illustrative, keep the table format model-agnostic enough that it won't go stale in 30 days.
- `freshness_tier`: This is a reference/calculator article — change to `evergreen` if the table is model-agnostic. If it names specific models, keep `semi_annual`. Decide per content after the rewrite.
- Advance `next_refresh_due` to `2026-12-19`.

---

### 3. `best-cpu-only-llm`
**Path:** `src/lib/local-llms/articles/best-cpu-only-llm.ts`  
**Fix type:** Model refresh + position push  
**Priority:** High volume (4,429 impr) — but CTR is already 1.1% (good). Goal is position push to top-3, not a CTR rescue.

**⚠ Caution:** This page works. Don't over-rewrite. The structure and tone are serving the 1.1% CTR well. Targeted changes only:

**What to do:**
- Update model list to June 2026 CPU-friendly models: **Llama 3.2 3B** (Q4_K_M, ~2 GB RAM, fast on CPU), **Phi-4-mini** (3.8B, strong reasoning, runs on 8 GB RAM), **Qwen3 7B Q4** (8 GB RAM, best balance — use Qwen3, not Qwen2.5), **Gemma 3 4B** (good instruction-following, 4 GB RAM).
- `quickAnswerTop` (EN): "The best CPU-only LLM for most users is **Phi-4-mini** (3.8B) — fast enough for real-time conversation on 16 GB RAM and accurate enough for coding and writing tasks."
- If the page has a comparison table, refresh model names and RAM numbers. Don't restructure the table if it already has a good format.
- Do NOT change the article's title or meta description if CTR is already 1.1% — the snippet is working.
- Advance `next_refresh_due` to `2026-12-19`.

---

### 4. `running-70b-models-apple-silicon-m5-max`
**Path:** `src/lib/local-llms/articles/running-70b-models-apple-silicon-m5-max.ts`  
**Fix type:** M5 Max data + feasibility verdict  
**Priority:** pos 8.1, 2,286 impressions, ~14/wk.

**⚠ DeepSeek series alignment required:** Pages 4 and the DeepSeek series (Article 1 + Bite 6) overlap on M5 Max + 70B distill facts. Run Page 4 in the same session as the DeepSeek series so M5 Max specs and model names are written once and reused verbatim. Any discrepancy is visible to readers via the cross-link.

**What to do:**
- Add M5 Max current specs to the lead: 14-core CPU, up to 128 GB unified memory, **460–614 GB/s memory bandwidth** (not 400 — that was M4 Max). A 70B model in Q4_K_M quantization needs ~40 GB — fits the 64 GB and 128 GB M5 Max configs.
- Add a feasibility verdict at the top with approximate tok/s figures (frame explicitly as estimates pending a validated bench source — do not state precise numbers as fact): something like "approximately 20–30+ tokens/second depending on quantization and config."
- Reference **DeepSeek-R1-Distill-Llama-70B** (not "DeepSeek-R1 70B" — the full R1 is 671B; the distill is a Llama 3 base model) and **Llama 3.3 70B** as the recommended 70B models. Use the exact same name the DeepSeek series uses.
- `quickAnswerTop` (EN): "Yes — the Apple M5 Max (64 GB) runs 70B models locally via Ollama in Q4 quantization. **DeepSeek-R1-Distill-Llama-70B** and **Llama 3.3 70B** are the best choices for this hardware."
- Advance `next_refresh_due` to `2026-12-19`.

---

### 5. `best-ollama-models-rtx-3060-12gb`
**Path:** `src/lib/prompt-bites/articles/best-ollama-models-rtx-3060-12gb.ts`  
**Fix type:** Model freshness + quick-answer "install this"  
**Priority:** pos 6.0, 1,282 impressions, ~14/wk.

**What to do:**
- RTX 3060 12 GB VRAM sweet spot: models that fit in 11–12 GB with headroom. Best June 2026 picks: **Qwen3 7B** (7 GB, current Qwen generation — not Qwen2.5), **Mistral Nemo 12B** (8 GB), **Phi-4** (14B Q4_K_M, ~9 GB), **Qwen3-Coder 7B** or **CodeQwen 7B** (coding tasks — confirm current Ollama tag).
- `quickAnswerTop` (EN): "The best Ollama models for an RTX 3060 12 GB are **Qwen3 7B** (general), **Phi-4** in Q4_K_M (reasoning), and **Qwen3-Coder 7B** (coding). All run at 30–50 tok/s on this GPU."
- Add a quick-install block with copy-paste `ollama pull` commands for each recommended model.
- Advance `next_refresh_due` to `2026-12-19`.

---

### 6. `anythingllm-vs-privategpt-vs-openwebui-rag`
**Path:** `src/lib/power-local-llm/articles/anythingllm-vs-privategpt-vs-openwebui-rag.ts`  
**Fix type:** Winner verdict + version freshness  
**Priority:** pos 7.7, 2,194 impressions, ~13/wk.

**What to do:**
- Current versions (June 2026): AnythingLLM 1.7.x, PrivateGPT 0.6.x, Open WebUI 0.4.x.
- Add a winner verdict as the very first thing after `quickAnswerTop`: "**Open WebUI** is the best all-round pick for most users in 2026 — easiest install, broadest model support (Ollama + OpenAI), and active monthly releases. Use **AnythingLLM** if you need multi-user workspaces. Use **PrivateGPT** only for strict air-gapped deployments."
- `quickAnswerTop` (EN): "Open WebUI wins for most users: easiest setup, best UI, and broadest model support. AnythingLLM suits teams needing workspaces. PrivateGPT is for strict offline-only environments."
- Add a comparison table: Tool → Setup difficulty → Multi-user → Ollama support → Last release → Best for.
- Advance `next_refresh_due` to `2026-12-19`.

---

### 7. `local-llm-security-privacy-checklist`
**Path:** `src/lib/local-llms/articles/local-llm-security-privacy-checklist.ts`  
**Fix type:** Title hook + actionable checklist format  
**Priority:** pos 7.8, 2,385 impressions, ~12/wk.

**What to do:**
- Reformat the checklist sections as numbered steps with clear checkbox-style bullets. Google features checklists that look like checklists structurally.
- `quickAnswerTop` (EN): "The 5 non-negotiable security steps for running a local LLM: (1) no internet access for the model process, (2) model files verified via SHA-256, (3) API endpoints bound to localhost only, (4) prompt logs stored encrypted or not at all, (5) no third-party plugins without source review."
- If the article doesn't already have a `HowTo` schema section (with `numberedItems`), add one for the top checklist items — this triggers auto HowTo JSON-LD.
- Consider changing the title to front-load "checklist": e.g., "Local LLM Security Checklist: 12 Steps to Private AI" — but only update if the current title is not already performing (check the EN meta).
- Advance `next_refresh_due` to `2026-12-19`.

---

### 8. `best-local-models-tool-calling-2026`
**Path:** `src/lib/power-local-llm/articles/best-local-models-tool-calling-2026.ts`  
**Fix type:** Model refresh (Qwen3 tool-calling) + quick-answer  
**Priority:** pos 7.6, 2,027 impressions, ~10/wk.

**What to do:**
- Top tool-calling models June 2026: **Qwen3 7B** (excellent function calling, 7 GB), **Llama 3.1 8B** (reliable JSON tool calls), **Mistral Small 3.1 24B** (current Mistral small-tier — not v0.3, which is 2024-era), **Qwen3 32B** (best accuracy, 20 GB VRAM).
- `quickAnswerTop` (EN): "The best local model for tool calling in 2026 is **Qwen3 7B** — reliable structured JSON tool calls on 8 GB VRAM. For highest accuracy, use **Qwen3 32B** with 24 GB VRAM."
- Add JSON tool-call example (show a schema and the model's output format) — this is the snippet that searchers copy-paste, and Google features it.
- Update `current_models_mentioned` to reflect Qwen3 7B, Qwen3 32B, Llama 3.1 8B.
- Advance `next_refresh_due` to `2026-12-19`.

---

### 9. `local-ai-app-non-technical-users`
**Path:** `src/lib/power-local-llm/articles/local-ai-app-non-technical-users.ts`  
**Fix type:** Title simplification + "best pick for beginners" callout  
**Priority:** pos 8.7, 2,012 impressions, ~10/wk — deepest position in block, most room to gain.

**What to do:**
- The title likely reads like a product category, not an answer. Rewrite EN `title` to be more direct: "Best Local AI App for Non-Technical Users (2026)" → test against searcher intent ("local AI app no coding", "easy local chatbot", "install AI at home no setup").
- `quickAnswerTop` (EN): "The easiest local AI app for non-technical users is **Jan** (jan.ai) — one-click install, no command line, built-in model library. **LM Studio** is the second choice if you want more control."
- Add a "start here" callout box near the top with 3 steps: (1) Download Jan, (2) Click "Download Model" → Phi-4-mini, (3) Start chatting. No terminal required.
- Ensure the article covers app versions current as of June 2026: Jan 0.5.x, LM Studio 0.3.x, GPT4All 3.x.
- Advance `next_refresh_due` to `2026-12-19`.

---

## Execution Order

Run in this sequence — highest ROI first:

```
1. local-vision-models-llava-ollama-2026        (pos 5.7 — fastest to click zone)
2. how-much-vram-local-llm                      (3,150 impr — high volume)
3. best-cpu-only-llm                            (4,429 impr — biggest pool; careful)
4. best-ollama-models-rtx-3060-12gb             (pos 6.0 — also close to click zone)
5. running-70b-models-apple-silicon-m5-max      (M5 Max data — timely)
6. anythingllm-vs-privategpt-vs-openwebui-rag   (verdict missing — quick win)
7. local-llm-security-privacy-checklist         (checklist format fix)
8. best-local-models-tool-calling-2026          (Qwen3 refresh)
9. local-ai-app-non-technical-users             (title + callout)
SKIP: local-llm-one-click-installers            (refreshed 2026-06-19, 181 lines)
```

## Cross-Links to Add

After both Block 3 articles are live:
- `running-70b-models-apple-silicon-m5-max` → cross-link to the DeepSeek distill series (70B feasibility overlap)
- `best-local-models-tool-calling-2026` → cross-link to `best-cpu-only-llm` (Qwen3 7B runs CPU-only too)
- `local-ai-app-non-technical-users` → cross-link to `local-llm-one-click-installers` (just refreshed)

## Post-Refresh Checklist

For each page, before committing:
- [ ] `dateModified` and `lastFactChecked` set to `2026-06-19` in EN block
- [ ] `next_refresh_due` set to `2026-12-19`
- [ ] `current_models_mentioned` updated
- [ ] All language blocks updated (use `/geo-translation`)
- [ ] `quickAnswerTop` is one sentence, front-loads the answer, includes model names
- [ ] At least one `snippetBlocks` entry present (`one-sentence` + `plain-terms`)
- [ ] `npm run validate-translations && npm run build` passes
