# Content Follow-Ups

Running backlog of content-accuracy issues found during other work but out
of scope for the cycle that found them. Not repo/build hygiene (see
`docs/repo-hygiene-backlog.md` for that) — this is specifically for
factual/model-currency corrections to published article content.

---

## GLM-5.1 mislabel sweep — remaining files

Found during the 2026-07-13 DeepSeek V4 cycle but out of that cycle's
authorized scope. Likely carries the GLM-5.1 → GLM-4.7 mislabel (see
below) — needs verification + fix in a future cycle:
- `local-llm-hardware-guide-2026.ts`
- `ai-code-review.ts`
- `power-local-llm/briefs.ts` (internal planning notes — lower priority,
  not published content)

**Context:** the corrected files (`docs/MODEL_REGISTRY_REFRESH.md` 2026-07
cycle) had "GLM-5.1 32B" attached to a spec that doesn't match GLM-5.1 —
GLM-5.1 is actually a 744B/40B-active flagship (confirmed via Zhipu's own
docs.z.ai, plus SiliconFlow/OpenLM.ai/DataCamp/Unsloth for the 32B figure
itself, which belongs to GLM-4.7 — 355B total / 32B active). Before fixing
the files above, re-verify each mention individually — some files (e.g.
`top-open-source-models-ollama.ts`) have *both* a correct GLM-5.1
(744B/40B) mention and a separately-wrong one, so don't blanket-replace
without reading context first, same as the 2026-07 cycle did.

**CORRECTION (2026-07-13, later same day):** the "Kimi K2.6 → should be
Kimi K2" mislabel this entry originally also listed was itself wrong and
has been removed from scope here. Kimi K2.6 is a real, current model
(1T total / 32B active, native multimodal) — confirmed via
platform.kimi.ai's official pricing docs and the Hugging Face model card
at huggingface.co/moonshotai/Kimi-K2.6. The GitHub-org-only check used in
the original verification pass missed it because Moonshot's hosted
API/HuggingFace releases shipped ahead of their GitHub org page. See the
"Co-primary sources" rule added to `docs/MODEL_REGISTRY_REFRESH.md` Step 1
this same day. **Do not "fix" any remaining Kimi K2.6 mentions in the 3
files above — they are correct as written.**
