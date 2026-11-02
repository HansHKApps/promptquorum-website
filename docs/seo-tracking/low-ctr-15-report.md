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

## Follow-up run low-ctr-15-b (2026-11-02, branch `session/low-ctr-15-b`)
Not pushed, merged or deployed. Entries logged with `seo:log` (all pending, no `deployedAt`): second-me-review, best-rag-tools-for-business-documents-2026, qwen-vs-llama-vs-mistral, best-budget-gpus-local-llm, how-much-vram-local-llm, whisper-cpp-review, local-llm-hardware-guide, apple-silicon-local-llm-guide-2026, apple-silicon-m5-local-llm, local-whisper-stt-comparison, odysseus-review, open-webui-review.

### Done
- Metas brought inside budget in all 9 locales (second-me, best-rag, qwen-vs-llama-vs-mistral, budget-gpus, how-much-vram, whisper-cpp-review). The local `validate-meta-budgets` script only parses some locale blocks of `local-llms` files; the served-HTML gate (`seo:gate`) is the authoritative check.
- Open WebUI licence label "Open WebUI License (BSD-3 + branding clause)" in second-me, best-rag, open-webui-review (9 locales). pt hardware-guide link in qwen-vs-llama-vs-mistral fixed.
- budget-gpus / how-much-vram: RTX 5060 Ti about $800 (about 85% over MSRP); dual RTX 5090 FAQ fixed to 32 GB each; leads 25-50 words; `leadAnswerBlock` added for ja/zh (budget-gpus) and fr/de/ja/zh (vram). DGX Spark is not mentioned in these two files.
- whisper-cpp-review + tile: v1.9.5 (released 2026-10-06), `lastUpstreamUpdate: '2026-10-30'` (GitHub `pushed_at`, https://github.com/ggml-org/whisper.cpp), stale warning OFF, stars 54868 via `refresh-app-stars`. Compiled-binary, Raspberry Pi and "PromptQuorum's benchmark" claims removed; safe-to-download and v1.9.4/v1.9.5 FAQs added; `SoftwareApplication` entity schema. Beyond the brief: tile `url` moved to `github.com/ggml-org/whisper.cpp`, `pqReview` block added to the tile.
- Hardware guide: risk residuals (VRAM "only number", ES "only flag" and the same phrase in every locale, DE "RTX-40-Serie ist eingestellt", offline AI-PC FAQ), Qwen3.6/Qwen3.8 (both current in `data/model-registry.json`; "best dense coder" superlatives removed), DE/FR ASCII-folding repaired, ZH meta "实测速度" -> "速度参考".
- Apple guide: 36 cross-language `quickAnswerTop` entries removed; DE/FR tok/s aligned with EN. M5 page: "best value", "enterprise NVIDIA safer bet", "designed for bursts" reworded in 9 locales.
- Whisper comparison: `imageAlt` on both images (9 locales); unsourced Pi 5 timings, "~200 ms", insanely-fast-whisper claim and "never leave your home network" hedged; WER sourced to the Whisper paper (tiny-medium; large-v3 values marked approximate).
- Odysseus + open-webui-review: AGPL wording hedged, "not legal advice" added, Msty/Open WebUI/LibreChat/LobeChat lines made factual. open-webui non-EN blocks read in full (de, es by the editing agent; fr, pt, ar, ja, zh, ko by a second line-by-line review): pt lead inversion, pt/ar "OpenAI APIs" -> OpenAI-compatible, ar "semi-open-source", ko intro and "50명 이상" -> "50명 초과" fixed.

### Open / not done
- **Mac prices NOT verified.** Apple store pages returned no USD prices and no 48 GB / 128 GB Mac Studio M5 Max entries (the page showed 36 GB/512 GB and 64 GB/1 TB). Mac mini M5 Pro 64 GB/1 TB was listed without a usable price. Prices on `apple-silicon-m5-local-llm` are unchanged. The page's own summary says "Mac Studio M5 Max ($2,499, up to 128 GB) ... 70B" although $2,499 is the 36 GB base and its tables put 70B at 64 GB ($3,499) / 128 GB ($5,099); needs Hans to check Apple's store.
- Not changed on purpose: "0.5-2 s" real-time latency bullets and the "Audio never leaves your machine" bullet in the whisper comparison (outside the listed items; still unsourced). Open WebUI table cell keeps the requested label without an OSI note.
- Open WebUI cosmetic: `author` is `Organization` in ja/zh/ar/ko (EN/fr/pt use Person), mixed quote styles in pt/ar/zh.
- budget-gpus: de TLDR says used RTX 3060 "170-250 $", leads say 270-300 (de/fr lead in EUR); pre-existing inconsistency not reconciled. 4070 Super ($550-700) and 4060 Ti ($420-530) are not in the hardware guide, so unchecked.
- Above-fold (Rule 31 lead 25-50 words / bold lead) still fails on pages whose leads this run did not touch: `second-me-review`, `best-rag-tools-for-business-documents-2026`, `qwen-vs-llama-vs-mistral` (non-CJK locales mostly). Needs its own lead pass.
- `seo:gate:changed`: remaining findings are `A5` html lang (known gap), `C1c` image alt (shared-component gap, see above), `B1` article headline vs title/h1 (44, mostly pre-existing pattern), `A4` second-me canonical (`/second-me-review` vs file slug `-2026`; pre-existing slug mapping).
- `validate:models:strict` fails repo-wide (1457 stale-model hits outside this run's files).
- risk-checker: see final section below.
