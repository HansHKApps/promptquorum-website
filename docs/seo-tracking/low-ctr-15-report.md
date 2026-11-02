# low-ctr-15 — page-updater run log (2026-11-02)

Branch `session/low-ctr-15`. Not pushed, merged or deployed. All 65 `seo:log` entries are pending (no `deployedAt`).

## Scope decisions
- Rule applied: pages with `dateModified` on or after 2026-10-19 (two weeks) are not touched.
- Skipped: `top-open-source-models-ollama` (2026-10-19), `best-local-reasoning-model-deepseek-r1-2026` (2026-10-19), `omlx-review` (2026-10-23), `/local-llms` hub (2026-10-23). `hiwaifu-review` is owned by session `zero-click-batch-01`.
- Updated (8): best-local-llms-2026, apple-silicon-local-llm-guide-2026, local-whisper-stt-comparison, apple-silicon-m5-local-llm, local-llm-hardware-guide, koboldcpp-review, open-webui-review, odysseus-review.
- Design gate: `designSkin: 'hub'` in 9/9 locales on all 8 (also on the skipped ones, verified before the run).

## Redirects (report only)
- `local-llm-hardware-guide-2026` and `local-whisper-stt-comparison-2026`: `permanent: true` in `next.config.ts` for EN and the 8 locale prefixes. Sitemap/slug maps use only the final slugs.
- Stale internal links to the old hardware-guide URL remain in the `pt` blocks of `qwen-vs-llama-vs-mistral.ts` (~line 1828) and `top-open-source-models-ollama.ts` (~line 1330, skipped page).

## Gates (final build, local production server)
- build: pass. `validate-meta-budgets:changed`, `check:page-updater`, `test:article-skin`, `test:app-activity`: pass.
- `test:above-fold`, 8 pages x 9 locales: 72/72 pass.
- `seo:gate:changed` open findings: `A5` html lang (known gap); AR title length inflated by bidi marks (also on untouched pages); C1c image alt text (hardware guide 17, apple guide 17, M5 7, best 8, whisper 5). Root cause for the hardware guide: `LocalLLMsPostClient.tsx` (~738/743) ignores `imageAlt`; fix is shared-component work, not done.
- Query coverage (EN, grade A before -> after): best 5/17 -> 5; apple guide 11/16 -> 8; hardware 10/16 -> 11.

## Known open items
- 18 whisper hero images (`local-whisper-stt-comparison-2026-{model-sizes,platform-winner}-hero-*.webp`) still show old speed figures in the pixels; regenerate via `/api/hero-image`.
- Risk gate REVIEW (no CRITICAL) on all; remaining MEDIUM items are listed in the per-page reports.
- `whisper-cpp-review.ts` says v1.9.3 (upstream v1.9.5); `second-me-review-2026.ts` and `best-rag-tools-for-business-documents-2026.ts` label Open WebUI "BSD-3" (now source-available with branding clause).
- Sibling price check not done: `best-budget-gpus-local-llm`, `how-much-vram-local-llm` likely carry old RTX 5060 Ti / DGX Spark prices.
