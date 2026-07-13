# Content Follow-Ups

Running backlog of content-accuracy issues found during other work but out
of scope for the cycle that found them. Not repo/build hygiene (see
`docs/repo-hygiene-backlog.md` for that) — this is specifically for
factual/model-currency corrections to published article content.

---

## GLM-5.1/Kimi K2.6 mislabel sweep — remaining files

Found during the 2026-07-13 DeepSeek V4 cycle but out of that cycle's
authorized scope. Likely carry the same two mislabels (GLM-5.1 → should
be GLM-4.7; Kimi K2.6 → should be Kimi K2) — needs verification + fix in
a future cycle:
- `local-llm-hardware-guide-2026.ts`
- `ai-code-review.ts`
- `power-local-llm/briefs.ts` (internal planning notes — lower priority,
  not published content)

**Context:** the corrected files (`docs/MODEL_REGISTRY_REFRESH.md` 2026-07
cycle) had "GLM-5.1 32B" and "Kimi K2.6" attached to specs that don't match
any real model of those names — GLM-5.1 is actually a 744B/40B-active
flagship (confirmed via Zhipu's own docs.z.ai), not a 32B-active model;
Kimi K2.6 doesn't exist in Moonshot's lineage at all (K1.5 → K2 → K2
Thinking/Turbo → K2.5). Before fixing the files above, re-verify each
mention individually — some files (e.g. `top-open-source-models-ollama.ts`)
have *both* a correct GLM-5.1 (744B/40B) mention and a separately-wrong one,
so don't blanket-replace without reading context first, same as the
2026-07 cycle did.
