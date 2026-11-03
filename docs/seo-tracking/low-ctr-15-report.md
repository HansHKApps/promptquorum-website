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

### Round 2 (2026-11-03): previously open items, now handled
- **Mac prices:** press-verified (9to5Mac, Macworld, MacRumors, kingy.ai): Mac Studio M5 Max 36 GB $2,499 / 48 GB $3,099 / 64 GB $3,499 / 128 GB $5,099, M5 Ultra 96 GB $5,499 / 512 GB $22,299, Mac mini M5 Pro 24 GB $1,699, MacBook Pro 16" M5 Max from $3,899. Apple's own store pages show no USD prices, so there is no Apple primary-source confirmation. Mac mini M5 Pro 64 GB could not be confirmed as $2,699 and now reads "from $2,699" with a note to check Apple's store. The 70B inconsistency is fixed in 9 locales (70B needs 64 GB, $3,499).
- **GPU prices:** RTX 3060 used $290-330, RX 6700 XT used $175-315, RTX 4060 Ti 8 GB new about $300-425 "if still in stock", RTX 4070 Super $550-700 "if still in stock" (asking-price sources: ResalePrices, BestValueGPU, GPUDojo, SellGPU; not sold-listing data, and the text says so). A2000, 2080, 3090, 4070 Ti, Mac mini $599 and AMD mini PC prices stayed unverified. All EUR/R$/JPY/CNY price cells in best-budget-gpus were USD digits relabelled and are now USD.
- **Full risk-checker audits** (9 locales, JSON-LD) on all 12 pages, with CRITICAL and HIGH findings fixed in the same language: best-budget-gpus (GDPR/LGPD "fully compliant", R13, zh/ja unsourced policy claims), how-much-vram (de GDPR "mandatory" CRITICAL, unsourced accuracy-loss numbers, wrong NVLink/batch/MoE statements), qwen-vs-llama-vs-mistral (GDPR/METI/CAC guarantees, fabricated fr author, two wrong arXiv ids; arXiv 2310.06770, 2107.03374, 2412.15115, 2310.06825 checked against arxiv.org), best-rag (R13/R11/R5/R2/R1, fr CNIL attribution removed), hardware guide, apple guide, M5 page, whisper comparison (cost sentence off by ~10x, invented WER claim), open-webui (LobeChat licence, v0.6.6 release date May 5 2025), odysseus (Msty is not open source).
- whisper facts re-verified with `gh api`: v1.9.4 (2026-09-11) and v1.9.5 (2026-10-06) notes, pushed_at 2026-10-30, MIT, repo move to ggml-org. Not confirmed: that ggml-org was founded by Georgi Gerganov (the page does not rely on it).
- Rule 31 leads: second-me, best-rag, qwen (de/ja/zh had no `leadAnswerBlock`) fixed; above-fold now passes on all 12 pages in 9 locales except as listed below.
- The seo gate's canonical check followed the original URL, not the redirect (false A4 on `-2026` file names). Fixed in `scripts/check-page-seo-gate.mjs`.
- ko JSON-LD `url` in best-budget-gpus and qwen-vs-llama-vs-mistral pointed to the EN URL; now `/ko/...`.
- SVGs `budget-builds-en.svg` and `budget-builds-es.svg`: $4000 -> $6,500+ (table and image now agree).

### Still open
- Amazon/Newegg `affiliateLinks` on best-budget-gpus (untagged search links, `affiliateDisclosure: true`): your decision whether to keep.
- Unverified prices listed above; Mac prices lack Apple primary-source confirmation.
- how-much-vram still has partly uncited generalisations in de/ja/zh; qwen page benchmark-table figures ("Qwen3 72B", "Qwen3 3B" look like phantom model names) need a model-name refresh; R5 "Best/Winner" editorial labels left as MEDIUM on several pages.
- `validate:models:strict` fails repo-wide (1,457 stale-model hits outside this run's files): not addressed.
- `seo:gate` leftovers: A5 html lang (known gap), C1c image alt (shared-component gap), B1 article headline vs title/h1 (pre-existing pattern), AR title length inflated by bidi marks.

### Final gates (2026-11-02)
- Build: pass (last full build before the final text-only budget-gpus compliance edit; that edit passes esbuild and the commit-hook type-check).
- `validate-meta-budgets:changed` 0 over budget; `seo:gate:changed` A2 clean except the AR how-much-vram title (bidi marks inflate the count, known); remaining A4/A5/B1/C1c as listed above.
- Above-fold, 9 changed pages x 9 locales (`budget-gpus`, `how-much-vram`, `whisper-cpp-review`, `hardware guide`, `apple guide`, `m5`, `whisper comparison`, `odysseus`, `open-webui`): all pass after lead/takeaway trims. `second-me-review`, `best-rag-tools...`, `qwen-vs-llama-vs-mistral` still fail Rule 31 (leads not touched this run).
- Risk gate: ran `scripts/risk-scan.mjs` triage on all 12 changed articles plus a manual review of the CRITICAL hits; **not** a full sentence-by-sentence risk-checker audit of every locale block. Fixed: `best-budget-gpus-local-llm` en/pt "fully compliant"/"em conformidade total" GDPR/LGPD claims (R1) now hedged with "not legal advice". The two best-rag CRITICAL hits are the FAQ question "Is local RAG automatically private and GDPR-compliant?" whose answer is "not automatically" (false positive). Many HIGH scan hits remain in untouched pre-existing text (apple guide ja/zh/ko "estimate, not measured" notes, zh "BGR 实测 ~55 tok/s", whisper comparison, hardware guide); they were not triaged one by one.
