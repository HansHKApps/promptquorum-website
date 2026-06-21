# Full Site Link Crawl Report

**Crawled:** 2026-06-20  
**Sitemap URLs:** 3584  
**Pages crawled (HTML fetched):** 488  
**Link edges found:** 26298  
**Unique targets checked:** 4655 (3857 internal + 672 external)

## Summary Table

| Category | Count | Notes |
|---|---|---|
| Sitemap URLs total | 3584 | |
| Sitemap URLs non-200 | 6 | All 308 → framework moves + 1 ERROR (ja deepseek) |
| Broken internal links (live 404/5xx) | 243 | See breakdown below |
| Broken external links | 179 | 65 true 404 + 77 access-blocked 403/405 + 37 other |
| Redirect-chain links | 132 | See Section 4 |
| Orphan pages (in sitemap, not linked to) | 0 | vs 44 static estimate — all are linked via hub pages |
| Locale-leak links (total across all locales) | 249 | live-verified |

### Broken Internal Link Breakdown (243 total)

| Sub-category | Count | Fix |
|---|---|---|
| Missing articles (no slug exists anywhere) | ~80 | Strip link (MISSING in triage) |
| PE file-key-as-URL (article exists, wrong URL format) | 11 | Replace with URL slug (WRONG-SLUG-FORMAT in triage errata) |
| Wrong cluster prefix | 8 | Fix href to correct cluster (WRONG-CLUSTER in triage errata) |
| Malformed URL (parenthesis in href) | 3 | Fix markdown source in `structured-output-and-json-mode.ts` |
| Framework articles (308 redirect to /frameworks/) | 35 | Update href to final `/frameworks/{name}` URL |
| Presentation print links (HTML entity bug) | 97 | Fix `&amp;` → `&` in presentation href template |
| Locale root trailing slashes | 8 | Fix `/de/` → `/de` (or configure redirect absorb) |
| Static file missing | 1 | `/apple-touch-icon.png` — add to `public/` |
| Other (blog, docs, aclanthology) | ~3 | Strip links |

### Note on Static Analysis vs Live Crawl Reconciliation

The Phase 2 static triage flagged 163 "broken slugs." The live crawl found 243 broken internal targets. Key differences:

1. **Static false positives (~23 slugs):** Valid prompt-engineering URL slugs (e.g., `context-windows-explained-why-ai-forgets`) appeared "broken" because the static analysis matched against file names, not URL slugs. The PE cluster's `slugs.ts` maps URL slugs → file keys; these two are different strings. See BROKEN_LINK_TRIAGE.md ERRATA for the full cancel list.

2. **Static false negatives (~11 slugs):** PE file keys used as URLs (e.g., `/prompt-engineering/context-windows-explained`) were not flagged because the file `context-windows-explained.ts` exists — but the PE router only serves the URL slug, not the file key. These return live 404s.

3. **New categories:** 8 wrong-cluster prefix links and 3 malformed URLs were not detectable from static grep but found in live crawl.

**Rule going forward:** Always use the URL slug (left side of `PE_SLUG_TO_KEY`) when linking to prompt-engineering articles, never the article file key (right side).

## 1. Sitemap URLs Not Returning 200
- `308` https://www.promptquorum.com/prompt-engineering/craft-framework → https://www.promptquorum.com/frameworks/craft
- `308` https://www.promptquorum.com/prompt-engineering/co-star-framework → https://www.promptquorum.com/frameworks/co-star
- `308` https://www.promptquorum.com/prompt-engineering/risen-framework → https://www.promptquorum.com/frameworks/risen
- `308` https://www.promptquorum.com/prompt-engineering/trace-framework → https://www.promptquorum.com/frameworks/trace
- `308` https://www.promptquorum.com/prompt-engineering/rtf-framework → https://www.promptquorum.com/frameworks/rtf
- `ERROR` https://www.promptquorum.com/ja/local-llms/deepseek-local-china-data-privacy-2026

## 2. Broken Internal Links (Live 404/5xx)

| Status | URL | Found on (sample) |
|---|---|---|
| 404 | /apple-touch-icon.png | /image-license, /waitlist |
| 404 | /prompt-engineering/few-shot-prompting | /prompt-engineering/how-prompt-engineering-evolved, /prompt-engineering/googles-prompting-guide |
| 404 | /prompt-engineering/prompt-frameworks-compared | /prompt-engineering/how-prompt-engineering-evolved, /ko/prompt-engineering/how-prompt-engineering-evolved |
| 404 | /prompt-engineering/tokens-and-costs | /prompt-engineering/how-prompt-engineering-evolved, /ko/prompt-engineering/how-prompt-engineering-evolved |
| 404 | /prompt-engineering/context-windows | /prompt-engineering/how-prompt-engineering-evolved, /ko/prompt-engineering/how-prompt-engineering-evolved |
| 308 | /prompt-engineering/co-star-framework | /prompt-engineering/5-building-blocks-every-prompt-needs, /prompt-engineering/what-is-prompt-engineering |
| 308 | /prompt-engineering/craft-framework | /prompt-engineering/5-building-blocks-every-prompt-needs, /prompt-engineering/what-is-prompt-engineering |
| 404 | /prompt-engineering/prompt-engineering-for-local-models | /prompt-engineering/5-building-blocks-every-prompt-needs, /local-llms/local-llm-one-click-installers |
| 404 | /prompt-engineering/comparing-open-source-models | /prompt-engineering/5-building-blocks-every-prompt-needs |
| 308 | /de/ |  |
| 308 | /fr/ |  |
| 308 | /ja/ |  |
| 308 | /zh/ |  |
| 308 | /es/ |  |
| 308 | /ar/ |  |
| 308 | /ko/ |  |
| 308 | /pt/ |  |
| 308 | /prompt-engineering/risen-framework | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/build-your-own-prompt-framework |
| 308 | /presentations/ai-hallucinations-why-ai-makes-things-up-static.html?lang=en&amp;print=1 | /prompt-engineering/ai-hallucinations-why-ai-makes-things-up |
| 308 | /presentations/temperature-and-top-p-static.html?lang=en&amp;print=1 | /prompt-engineering/temperature-and-top-p-control-ai-creativity |
| 404 | /prompt-engineering/consensus-scoring | /prompt-engineering/ai-hallucinations-why-ai-makes-things-up, /de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up |
| 404 | /prompt-engineering/self-critique-prompting | /prompt-engineering/ai-hallucinations-why-ai-makes-things-up, /de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up |
| 404 | /prompt-engineering/temperature-and-top-p | /prompt-engineering/context-windows-explained-why-ai-forgets, /prompt-engineering/control-the-output |
| 404 | /prompt-engineering/prompt-building-blocks | /prompt-engineering/context-windows-explained-why-ai-forgets |
| 404 | /prompt-engineering/system-prompt-vs-user-prompt | /prompt-engineering/context-windows-explained-why-ai-forgets, /prompt-engineering/tokens-costs-limits-economics-of-ai-prompting |
| 308 | /presentations/how-llms-actually-work-static.html?lang=en&amp;print=1 | /prompt-engineering/how-llms-actually-work |
| 308 | /presentations/system-prompt-vs-user-prompt-static.html?lang=en&amp;print=1 | /prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference |
| 308 | /presentations/ai-limitations-what-llms-cant-do-static.html?lang=en&amp;print=1 | /prompt-engineering/ai-limitations-what-llms-cant-do |
| 308 | /presentations/tokens-costs-limits-economics-of-ai-prompting-static.html?lang=en&amp;print=1 | /prompt-engineering/tokens-costs-limits-economics-of-ai-prompting |
| 308 | /presentations/geopolitics-and-ai-static.html?lang=en&amp;print=1 | /prompt-engineering/geopolitics-and-ai |
| 404 | /prompt-engineering/gdpr-and-ai-compliance | /prompt-engineering/geopolitics-and-ai |
| 404 | /prompt-engineering/gemini-prompting-guide | /prompt-engineering/googles-prompting-guide |
| 404 | /prompt-engineering/co-star-prompting-framework | /prompt-engineering/googles-prompting-guide |
| 404 | /prompt-engineering/which-framework-to-use | /prompt-engineering/build-your-own-prompt-framework |
| 404 | /prompt-engineering/structured-output | /prompt-engineering/chain-of-thought-prompting |
| 404 | /prompt-engineering/reducing-hallucination | /prompt-engineering/chain-of-thought-prompting |
| 404 | /prompt-engineering/prompt-testing | /prompt-engineering/chain-of-thought-prompting |
| 404 | /prompt-engineering/multi-model-dispatch | /prompt-engineering/chain-of-thought-prompting |
| 308 | /prompt-engineering/rtf-framework | /prompt-engineering/constrained-prompting, /prompt-engineering/prompt-chaining |
| 404 | /prompt-engineering/structured-output-json-mode | /prompt-engineering/constrained-prompting, /prompt-engineering/prompt-security-tools-injection-testing |
| 308 | /prompt-engineering/trace-framework | /prompt-engineering/rag-explained, /prompt-engineering |
| ERROR | /prompt-engineering/(/prompt-engineering/specs-framework | /prompt-engineering/structured-output-and-json-mode |
| 404 | /prompt-engineering/single-prompt-method | /prompt-engineering/negative-prompting |
| 404 | /prompt-engineering/(/prompt-engineering/constrained-prompting | /prompt-engineering/structured-output-and-json-mode |
| 404 | /prompt-engineering/(/prompt-engineering/rag-explained | /prompt-engineering/structured-output-and-json-mode |
| 404 | /prompt-engineering/chain-of-thought | /prompt-engineering/structured-output-and-json-mode |
| 404 | /docs/multi-model-testing | /prompt-engineering/persona-prompting |
| 404 | /prompt-engineering/prompt-templates | /prompt-engineering/structured-output-and-json-mode |
| 404 | /prompt-engineering/system-prompts | /prompt-engineering/persona-prompting |
| 404 | /prompt-engineering/how-to-write-clear-prompts | /prompt-engineering/persona-prompting |
| 404 | /prompt-engineering/fine-tuning-vs-prompting | /prompt-engineering/persona-prompting |
| 404 | /prompt-engineering/testing-ai-models | /prompt-engineering/persona-prompting |
| 308 | /prompt-engineering/ai-hallucinations-how-to-stop | /prompt-engineering/build-quality-checks, /prompt-engineering/prompt-engineering-vs-rag-decision |
| 404 | /prompt-engineering/ai-hallucinations-how-to-detect-and-stop-them | /prompt-engineering/self-consistency-prompting |
| 308 | /presentations/write-better-code-with-ai-static.html?lang=en&amp;print=1 | /prompt-engineering/write-better-code-with-ai |
| 404 | /prompt-engineering/tokens-costs-limits | /prompt-engineering/prompting-across-languages |
| 404 | /prompt-engineering/gpt-claude-gemini-which-model | /prompt-engineering/prompting-across-languages, /prompt-engineering/how-to-test-prompts-across-models |
| 404 | /prompt-engineering/context-windows-explained | /prompt-engineering/teaching-with-ai |
| 404 | /prompt-engineering/context-window-limits-explained | /prompt-engineering/ai-powered-research |
| 404 | /prompt-engineering/pe-setup-small-teams | /prompt-engineering/build-your-own-prompt-framework, /prompt-engineering/prompt-library-management-for-teams |
| 404 | /prompt-engineering/optimize-prompts-for-cost | /prompt-engineering/best-prompt-engineering-ides |
| 404 | /prompt-engineering/best-prompt-optimization-tools-teams | /prompt-engineering/build-a-prompt-library, /prompt-engineering/how-to-evaluate-prompt-quality |
| 404 | /prompt-engineering/error-handling-llm | /prompt-engineering/control-the-output |
| 404 | /prompt-engineering/tool-use-and-function-calling | /prompt-engineering/control-the-output |
| 404 | /prompt-engineering/llm-as-judge-evaluation | /prompt-engineering/best-prompt-testing-evaluation-tools |
| 404 | /prompt-engineering/ci-cd-for-prompts | /prompt-engineering/best-prompt-testing-evaluation-tools |
| 308 | /presentations/best-prompt-engineering-tools-2026-static.html?lang=en&amp;print=1 | /prompt-engineering/best-prompt-engineering-tools-2026 |
| 404 | /pt/prompt-engineering/best-pe-tools-2026 | /prompt-engineering/best-prompt-engineering-tools-2026 |
| 404 | /prompt-engineering/frameworks | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /prompt-engineering/how-to-write-effective-prompts | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /prompt-engineering/retrieval-augmented-generation | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /blog/llm-cost-benchmarks-2026 | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /prompt-engineering/llm-api-benchmarks | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /prompt-engineering/model-selection | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /prompt-engineering/cost-optimization | /prompt-engineering/prompt-engineering-vs-fine-tuning |
| 404 | /prompt-engineering/what-is-prompt-engineering-a-beginners-guide | /prompt-engineering/prompt-engineering-vs-rag-decision |
| 404 | /prompt-engineering/rag-architecture | /prompt-engineering/prompt-engineering-vs-rag-decision |
| 404 | /prompt-engineering/fine-tuning-vs-prompt-engineering | /prompt-engineering/prompt-engineering-vs-rag-decision |
| 404 | /prompt-engineering/best-prompt-testing-tools | /prompt-engineering/prompt-evaluation-metrics, /prompt-engineering/prompt-review-workflow-for-teams |
| 404 | /prompt-engineering/braintrust-vs-prompthub-vs-vellum | /prompt-engineering/prompt-evaluation-metrics |
| 404 | /prompt-engineering/prompt-version-control | /prompt-engineering/prompt-documentation-templates, /prompt-engineering/prompt-governance-in-production |
| 404 | /prompt-engineering/promptfoo-testing | /prompt-engineering/multi-model-prompt-testing-workflows |
| 404 | /prompt-engineering/prompt-testing-validation | /prompt-engineering/multi-model-prompt-testing-workflows |
| 404 | /prompt-engineering/cost-optimization-model-selection | /prompt-engineering/multi-model-prompt-testing-workflows |
| 404 | /prompt-engineering/consensus-scoring-llm | /prompt-engineering/multi-model-prompt-testing-workflows |
| 404 | /prompt-engineering/evaluate-compare-llm-models | /prompt-engineering/multi-model-prompt-testing-workflows |
| 404 | /prompt-engineering/best-tools-structured-output | /prompt-engineering/prompts-for-reliable-structured-data, /prompt-engineering/prompts-to-repeatable-workflows |
| 308 | /presentations/how-to-reduce-prompt-brittleness-static.html?lang=en&amp;print=1 | /prompt-engineering/how-to-reduce-prompt-brittleness |
| 404 | /prompt-engineering/quality-scoring-ai-content | /prompt-engineering/prompt-engineering-for-content-teams |
| 404 | /prompt-engineering/brand-voice-prompts | /prompt-engineering/prompt-engineering-for-content-teams |
| 404 | /prompt-engineering/editorial-workflow-integration | /prompt-engineering/prompt-engineering-for-content-teams |
| 404 | /prompt-engineering/content-generation-workflows | /prompt-engineering/prompt-engineering-for-content-teams |
| 404 | /prompt-engineering/build-your-own-framework | /prompt-engineering/prompt-engineering-for-support-operations |
| 404 | /prompt-engineering/prompt-governance-production | /prompt-engineering/prompt-engineering-for-support-operations |
| 308 | /presentations/local-llms-vs-cloud-apis-static.html?lang=en&amp;print=1 | /local-llms/local-llms-vs-cloud-apis |
| 308 | /presentations/local-llms-hub-static.html?lang=en&amp;print=1 | /local-llms |
| 308 | /presentations/troubleshooting-local-llm-setup-static.html?lang=en&amp;print=1 | /local-llms/troubleshooting-local-llm-setup |
| 308 | /presentations/best-beginner-local-llm-models-static.html?lang=en&amp;print=1 | /local-llms/best-beginner-local-llm-models |
| 308 | /presentations/qwen-vs-llama-vs-mistral-static.html?lang=en&amp;print=1 | /local-llms/qwen-vs-llama-vs-mistral |
| 308 | /presentations/best-local-llms-for-coding-static.html?lang=en&amp;print=1 | /local-llms/best-local-llms-for-coding |

*(143 more not shown)*

## 3. Broken External Links

- `403` [https://platform.openai.com/playground](https://platform.openai.com/playground) — found on `/prompt-engineering/5-building-blocks-every-prompt-needs`
- `403` [https://platform.openai.com/docs/api-reference/chat/create](https://platform.openai.com/docs/api-reference/chat/create) — found on `/prompt-engineering/temperature-and-top-p-control-ai-creativity`
- `404` [https://owasp.org/www-community/attacks/Prompt_Injection](https://owasp.org/www-community/attacks/Prompt_Injection) — found on `/prompt-engineering/5-building-blocks-every-prompt-needs`
- `404` [https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf](https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf) — found on `/prompt-engineering/how-llms-actually-work`
- `403` [https://dl.acm.org/doi/10.1145/3571730](https://dl.acm.org/doi/10.1145/3571730) — found on `/prompt-engineering/ai-limitations-what-llms-cant-do`
- `403` [https://openai.com/chatgpt](https://openai.com/chatgpt) — found on `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `403` [https://openai.com/pricing](https://openai.com/pricing) — found on `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `405` [https://ollama.com/library/deepseek-r1](https://ollama.com/library/deepseek-r1) — found on `/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model`
- `405` [https://ollama.com/library/llama3.3](https://ollama.com/library/llama3.3) — found on `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `404` [https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.RMF.1.0.pdf](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.RMF.1.0.pdf) — found on `/prompt-engineering/prompt-injection-and-security`
- `403` [https://www.oecd.org/ai/ai-principles/](https://www.oecd.org/ai/ai-principles/) — found on `/prompt-engineering/geopolitics-and-ai`
- `404` [https://www.nist.gov/ai-risk-management-framework](https://www.nist.gov/ai-risk-management-framework) — found on `/prompt-engineering/geopolitics-and-ai`
- `403` [https://openai.com/](https://openai.com/) — found on `/prompt-engineering/googles-prompting-guide`
- `404` [https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023](https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023) — found on `/prompt-engineering/geopolitics-and-ai`
- `404` [https://www.bundesregierung.de/breg-de/themen/digitalisierung/ki-strategie](https://www.bundesregierung.de/breg-de/themen/digitalisierung/ki-strategie) — found on `/prompt-engineering/geopolitics-and-ai`
- `404` [https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf](https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf) — found on `/prompt-engineering/geopolitics-and-ai`
- `404` [https://ai.google.dev/gemini-api/docs/controlled-generation](https://ai.google.dev/gemini-api/docs/controlled-generation) — found on `/prompt-engineering/constrained-prompting`
- `404` [https://ai.google.dev/gemini-2/docs/structured-output](https://ai.google.dev/gemini-2/docs/structured-output) — found on `/prompt-engineering/structured-output-and-json-mode`
- `404` [https://www.nist.gov/artificial-intelligence/ai-risk-management-framework](https://www.nist.gov/artificial-intelligence/ai-risk-management-framework) — found on `/prompt-engineering`
- `403` [https://platform.openai.com/tokenizer](https://platform.openai.com/tokenizer) — found on `/prompt-engineering/prompting-across-languages`
- `403` [https://elicit.com/research](https://elicit.com/research) — found on `/prompt-engineering/ai-powered-research`
- `404` [https://www.anthropic.com/constitutional-ai](https://www.anthropic.com/constitutional-ai) — found on `/prompt-engineering/what-is-prompt-engineering`
- `404` [https://prompthub.com/docs](https://prompthub.com/docs) — found on `/prompt-engineering/best-prompt-management-platforms`
- `403` [https://prompthub.ai/](https://prompthub.ai/) — found on `/prompt-engineering/braintrust-vs-prompthub-vs-vellum-vs-promptfoo`
- `404` [https://knowledge.hubspot.com/content/use-brand-voice-in-ai-assistant](https://knowledge.hubspot.com/content/use-brand-voice-in-ai-assistant) — found on `/prompt-engineering/your-brand-voice-ai`
- `404` [https://semji.com/en/features/ai-content-assistant/](https://semji.com/en/features/ai-content-assistant/) — found on `/prompt-engineering/your-brand-voice-ai`
- `404` [https://www.nngroup.com/articles/tone-voice-ux/](https://www.nngroup.com/articles/tone-voice-ux/) — found on `/prompt-engineering/your-brand-voice-ai`
- `404` [https://outlines-dev.github.io/](https://outlines-dev.github.io/) — found on `/prompt-engineering/best-tools-structured-output-json`
- `404` [https://github.blog/developer-skills/code-review/code-review-best-practices/](https://github.blog/developer-skills/code-review/code-review-best-practices/) — found on `/prompt-engineering/prompt-review-workflow-for-teams`
- `403` [https://www.make.com/en/help](https://www.make.com/en/help) — found on `/prompt-engineering/prompts-to-repeatable-workflows`
- `403` [https://openai.com/api/pricing](https://openai.com/api/pricing) — found on `/prompt-engineering/prompt-engineering-setup-small-teams`
- `404` [https://docs.boundaryml.com/benchmarks](https://docs.boundaryml.com/benchmarks) — found on `/prompt-engineering/prompts-for-reliable-structured-data`
- `405` [https://ollama.com/library](https://ollama.com/library) — found on `/local-llms/run-first-local-llm`
- `404` [https://arxiv.org/abs/](https://arxiv.org/abs/) — found on `/local-llms/qwen-vs-llama-vs-mistral`
- `403` [https://openai.com/gpt-4o/](https://openai.com/gpt-4o/) — found on `/local-llms/local-llm-limitations`
- `405` [https://ollama.com/library/phi4](https://ollama.com/library/phi4) — found on `/local-llms/best-cpu-only-llm`
- `405` [https://ollama.com/library/gemma3](https://ollama.com/library/gemma3) — found on `/local-llms/best-cpu-only-llm`
- `405` [https://ollama.com/library/mistral](https://ollama.com/library/mistral) — found on `/local-llms/best-cpu-only-llm`
- `401` [https://huggingface.co/microsoft/phi-4-mini](https://huggingface.co/microsoft/phi-4-mini) — found on `/local-llms/best-cpu-only-llm`
- `401` [https://huggingface.co/google/gemma-3-2b](https://huggingface.co/google/gemma-3-2b) — found on `/local-llms/best-cpu-only-llm`
- `405` [https://ollama.com/library/qwen3](https://ollama.com/library/qwen3) — found on `/local-llms/top-open-source-models-ollama`
- `404` [https://huggingface.co/collections/Fimbulvetr](https://huggingface.co/collections/Fimbulvetr) — found on `/local-llms/best-local-llms-for-creative-writing`
- `405` [https://ollama.com/library/gpt-oss](https://ollama.com/library/gpt-oss) — found on `/local-llms/top-open-source-models-ollama`
- `405` [https://ollama.com/library/devstral](https://ollama.com/library/devstral) — found on `/local-llms/top-open-source-models-ollama`
- `404` [https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf](https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf) — found on `/local-llms/local-llm-model-updates-2026`
- `404` [http://localhost:11434/v1](http://localhost:11434/v1) — found on `/local-llms/local-llm-openai-compatible-api`
- `404` [http://localhost:11434/v1%60](http://localhost:11434/v1%60) — found on `/local-llms/local-llm-openai-compatible-api`
- `405` [http://localhost:11434/v1/chat/completions](http://localhost:11434/v1/chat/completions) — found on `/local-llms/local-llm-openai-compatible-api`
- `405` [http://localhost:11434/v1/completions](http://localhost:11434/v1/completions) — found on `/local-llms/local-llm-openai-compatible-api`
- `405` [http://localhost:11434/v1/embeddings](http://localhost:11434/v1/embeddings) — found on `/local-llms/local-llm-openai-compatible-api`
- `405` [http://localhost:11434/v1/models](http://localhost:11434/v1/models) — found on `/local-llms/local-llm-openai-compatible-api`
- `404` [https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070/](https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070/) — found on `/local-llms/gpu-vs-cpu-vs-apple-silicon`
- `404` [https://ai.meta.com/blog/llama-3-3/](https://ai.meta.com/blog/llama-3-3/) — found on `/local-llms/local-llm-model-updates-2026`
- `503` [https://www.eia.gov/electricity/](https://www.eia.gov/electricity/) — found on `/local-llms/local-llm-power-consumption`
- `404` [https://www.apple.com/mac/m3/](https://www.apple.com/mac/m3/) — found on `/local-llms/gpu-vs-cpu-vs-apple-silicon`
- `405` [https://www.techpowerup.com/gpu-specs/](https://www.techpowerup.com/gpu-specs/) — found on `/local-llms/laptop-vs-desktop-local-llm`
- `404` [http://localhost:11434/api/tags%60.](http://localhost:11434/api/tags%60.) — found on `/local-llms/best-ai-coding-assistant-local-llm`
- `404` [https://www.qualcomm.com/products/mobile/snapdragon/pcs/snapdragon-x-elite](https://www.qualcomm.com/products/mobile/snapdragon/pcs/snapdragon-x-elite) — found on `/local-llms/mobile-local-llms`
- `403` [https://smallformfactor.net/](https://smallformfactor.net/) — found on `/local-llms/best-mini-pcs-local-llm`
- `405` [https://www.techpowerup.com/cpu-specs/?mfgr=AMD&amp;family=Threadripper](https://www.techpowerup.com/cpu-specs/?mfgr=AMD&amp;family=Threadripper) — found on `/local-llms/local-llm-workstation-build`

*(119 more in JSON)*

## 4. Redirect-Chain Links

These links resolve via a redirect — update source hrefs to point at the final URL:
- `308` /prompt-engineering/co-star-framework → /frameworks/co-star (on `/prompt-engineering/5-building-blocks-every-prompt-needs`)
- `308` /prompt-engineering/craft-framework → /frameworks/craft (on `/prompt-engineering/5-building-blocks-every-prompt-needs`)
- `308` /de/ → /de (on ``)
- `308` /fr/ → /fr (on ``)
- `308` /ja/ → /ja (on ``)
- `308` /zh/ → /zh (on ``)
- `308` /es/ → /es (on ``)
- `308` /ar/ → /ar (on ``)
- `308` /ko/ → /ko (on ``)
- `308` /pt/ → /pt (on ``)
- `308` /prompt-engineering/risen-framework → /frameworks/risen (on `/prompt-engineering/what-is-prompt-engineering`)
- `308` /presentations/ai-hallucinations-why-ai-makes-things-up-static.html?lang=en&amp;print=1 → /presentations/ai-hallucinations-why-ai-makes-things-up-static.html?amp%3Bprint=1 (on `/prompt-engineering/ai-hallucinations-why-ai-makes-things-up`)
- `308` /presentations/temperature-and-top-p-static.html?lang=en&amp;print=1 → /presentations/temperature-and-top-p-static.html?amp%3Bprint=1 (on `/prompt-engineering/temperature-and-top-p-control-ai-creativity`)
- `308` /presentations/how-llms-actually-work-static.html?lang=en&amp;print=1 → /presentations/how-llms-actually-work-static.html?amp%3Bprint=1 (on `/prompt-engineering/how-llms-actually-work`)
- `308` /presentations/system-prompt-vs-user-prompt-static.html?lang=en&amp;print=1 → /presentations/system-prompt-vs-user-prompt-static.html?amp%3Bprint=1 (on `/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference`)
- `308` /presentations/ai-limitations-what-llms-cant-do-static.html?lang=en&amp;print=1 → /presentations/ai-limitations-what-llms-cant-do-static.html?amp%3Bprint=1 (on `/prompt-engineering/ai-limitations-what-llms-cant-do`)
- `308` /presentations/tokens-costs-limits-economics-of-ai-prompting-static.html?lang=en&amp;print=1 → /presentations/tokens-costs-limits-economics-of-ai-prompting-static.html?amp%3Bprint=1 (on `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`)
- `308` /presentations/geopolitics-and-ai-static.html?lang=en&amp;print=1 → /presentations/geopolitics-and-ai-static.html?amp%3Bprint=1 (on `/prompt-engineering/geopolitics-and-ai`)
- `308` /prompt-engineering/rtf-framework → /frameworks/rtf (on `/prompt-engineering/constrained-prompting`)
- `308` /prompt-engineering/trace-framework → /frameworks/trace (on `/prompt-engineering/rag-explained`)
- `308` /prompt-engineering/ai-hallucinations-how-to-stop → /prompt-engineering/ai-hallucinations-why-ai-makes-things-up (on `/prompt-engineering/build-quality-checks`)
- `308` /presentations/write-better-code-with-ai-static.html?lang=en&amp;print=1 → /presentations/write-better-code-with-ai-static.html?amp%3Bprint=1 (on `/prompt-engineering/write-better-code-with-ai`)
- `308` /presentations/best-prompt-engineering-tools-2026-static.html?lang=en&amp;print=1 → /presentations/best-prompt-engineering-tools-2026-static.html?amp%3Bprint=1 (on `/prompt-engineering/best-prompt-engineering-tools-2026`)
- `308` /presentations/how-to-reduce-prompt-brittleness-static.html?lang=en&amp;print=1 → /presentations/how-to-reduce-prompt-brittleness-static.html?amp%3Bprint=1 (on `/prompt-engineering/how-to-reduce-prompt-brittleness`)
- `308` /presentations/local-llms-vs-cloud-apis-static.html?lang=en&amp;print=1 → /presentations/local-llms-vs-cloud-apis-static.html?amp%3Bprint=1 (on `/local-llms/local-llms-vs-cloud-apis`)
- `308` /presentations/local-llms-hub-static.html?lang=en&amp;print=1 → /presentations/local-llms-hub-static.html?amp%3Bprint=1 (on `/local-llms`)
- `308` /presentations/troubleshooting-local-llm-setup-static.html?lang=en&amp;print=1 → /presentations/troubleshooting-local-llm-setup-static.html?amp%3Bprint=1 (on `/local-llms/troubleshooting-local-llm-setup`)
- `308` /presentations/best-beginner-local-llm-models-static.html?lang=en&amp;print=1 → /presentations/best-beginner-local-llm-models-static.html?amp%3Bprint=1 (on `/local-llms/best-beginner-local-llm-models`)
- `308` /presentations/qwen-vs-llama-vs-mistral-static.html?lang=en&amp;print=1 → /presentations/qwen-vs-llama-vs-mistral-static.html?amp%3Bprint=1 (on `/local-llms/qwen-vs-llama-vs-mistral`)
- `308` /presentations/best-local-llms-for-coding-static.html?lang=en&amp;print=1 → /presentations/best-local-llms-for-coding-static.html?amp%3Bprint=1 (on `/local-llms/best-local-llms-for-coding`)
- `308` /presentations/local-llm-one-click-installers-static.html?lang=en&amp;print=1 → /presentations/local-llm-one-click-installers-static.html?amp%3Bprint=1 (on `/local-llms/local-llm-one-click-installers`)
- `308` /presentations/local-llm-limitations-static.html?lang=en&amp;print=1 → /presentations/local-llm-limitations-static.html?amp%3Bprint=1 (on `/local-llms/local-llm-limitations`)
- `308` /presentations/llm-quantization-explained-static.html?lang=en&amp;print=1 → /presentations/llm-quantization-explained-static.html?amp%3Bprint=1 (on `/local-llms/llm-quantization-explained`)
- `308` /presentations/long-context-local-llms-static.html?lang=en&amp;print=1 → /presentations/long-context-local-llms-static.html?amp%3Bprint=1 (on `/local-llms/long-context-local-llms`)
- `308` /presentations/top-open-source-models-ollama-static.html?lang=en&amp;print=1 → /presentations/top-open-source-models-ollama-static.html?amp%3Bprint=1 (on `/local-llms/top-open-source-models-ollama`)
- `308` /presentations/text-generation-webui-vs-vllm-vs-llamacpp-static.html?lang=en&amp;print=1 → /presentations/text-generation-webui-vs-vllm-vs-llamacpp-static.html?amp%3Bprint=1 (on `/local-llms/text-generation-webui-vs-vllm-vs-llamacpp`)
- `308` /presentations/best-local-llm-frontends-static.html?lang=en&amp;print=1 → /presentations/best-local-llm-frontends-static.html?amp%3Bprint=1 (on `/local-llms/best-local-llm-frontends`)
- `308` /presentations/ollama-vs-lm-studio-static.html?lang=en&amp;print=1 → /presentations/ollama-vs-lm-studio-static.html?amp%3Bprint=1 (on `/local-llms/ollama-vs-lm-studio`)
- `308` /presentations/local-llm-hardware-guide-2026-static.html?lang=en&amp;print=1 → /presentations/local-llm-hardware-guide-2026-static.html?amp%3Bprint=1 (on `/local-llms/local-llm-hardware-guide-2026`)
- `308` /presentations/local-llm-openai-compatible-api-static.html?lang=en&amp;print=1 → /presentations/local-llm-openai-compatible-api-static.html?amp%3Bprint=1 (on `/local-llms/local-llm-openai-compatible-api`)

## 5. Orphan Pages (in sitemap, not linked from any crawled page)

*(Note: crawl only fetches EN pages + locale hubs + locale article samples; some locale article pages may appear as orphans here even if linked from another locale article. Cross-reference with Phase-1 static analysis for full orphan truth.)*

No orphans detected. ✓

## 6. Locale-Leak Links (per locale)

A locale-leak is a link on a /xx/ page pointing to an EN cluster URL (missing /{locale}/ prefix). Only the sampled locale article pages (5 per locale) are checked here.

| Locale | Leaky links | Sample |
|---|---|---|
| de | 32 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| fr | 31 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| ja | 40 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| zh | 40 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| es | 26 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| pt | 29 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| ar | 7 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |
| ko | 44 | /prompt-engineering/what-is-prompt-engineering, /prompt-engineering/chain-of-thought-prompting |

### Locale-leak detail

**/de/:**
- `/de/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/de/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/how-prompt-engineering-evolved`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/chain-of-thought-prompting`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tree-of-thought-and-react`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/which-prompt-framework-should-you-use`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/context-windows-explained-why-ai-forgets`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `/de/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/rag-explained`
- `/de/prompt-engineering/ai-hallucinations-why-ai-makes-things-up` → `/prompt-engineering/ai-hallucinations-why-ai-makes-things-up`
**/fr/:**
- `/fr/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/fr/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/fr/prompt-engineering/5-building-blocks-every-prompt-needs` → `/prompt-engineering/5-building-blocks-every-prompt-needs`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/how-prompt-engineering-evolved`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/chain-of-thought-prompting`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tree-of-thought-and-react`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/which-prompt-framework-should-you-use`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/context-windows-explained-why-ai-forgets`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `/fr/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/rag-explained`
**/ja/:**
- `/ja/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/ja/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/what-is-prompt-engineering`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/ai-hallucinations-why-ai-makes-things-up`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/zero-shot-vs-few-shot`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/chain-of-thought-prompting`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/persona-prompting`
- `/ja/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/constrained-prompting`
**/zh/:**
- `/zh/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/zh/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/zh/prompt-engineering/fundamentals-of-prompt-optimization` → `/prompt-engineering/fundamentals-of-prompt-optimization`
- `/zh/prompt-engineering/5-building-blocks-every-prompt-needs` → `/prompt-engineering/5-building-blocks-every-prompt-needs`
- `/zh/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/how-prompt-engineering-evolved`
- `/zh/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/chain-of-thought-prompting`
- `/zh/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tree-of-thought-and-react`
- `/zh/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/which-prompt-framework-should-you-use`
- `/zh/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/context-windows-explained-why-ai-forgets`
- `/zh/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
**/es/:**
- `/es/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/es/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/what-is-prompt-engineering`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/faster-ai-answers-how-to-prompt-for-speed`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/ai-hallucinations-why-ai-makes-things-up`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/gpt-claude-or-gemini-how-to-pick-the-right-model`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/system-prompt-vs-user-prompt-whats-the-difference`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/context-windows-explained-why-ai-forgets`
- `/es/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/beyond-text-how-to-prompt-with-images`
**/pt/:**
- `/pt/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/pt/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/pt/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/what-is-prompt-engineering`
- `/pt/prompt-engineering/5-building-blocks-every-prompt-needs` → `/prompt-engineering/5-building-blocks-every-prompt-needs`
- `/pt/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/how-prompt-engineering-evolved`
- `/pt/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/chain-of-thought-prompting`
- `/pt/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tree-of-thought-and-react`
- `/pt/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/which-prompt-framework-should-you-use`
- `/pt/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/context-windows-explained-why-ai-forgets`
- `/pt/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/tokens-costs-limits-economics-of-ai-prompting`
**/ar/:**
- `/ar/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/ar/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/ar/prompt-engineering/what-is-prompt-engineering` → `/prompt-engineering/what-is-prompt-engineering`
- `/ar/prompt-engineering/how-prompt-engineering-evolved` → `/prompt-engineering/how-prompt-engineering-evolved`
- `/ar/prompt-engineering/5-building-blocks-every-prompt-needs` → `/prompt-engineering/5-building-blocks-every-prompt-needs`
- `/ar/prompt-engineering/ai-hallucinations-why-ai-makes-things-up` → `/prompt-engineering/ai-hallucinations-why-ai-makes-things-up`
- `/ar/prompt-engineering/fundamentals-of-prompt-optimization` → `/prompt-engineering/fundamentals-of-prompt-optimization`
**/ko/:**
- `/ko/local-llms` → `/prompt-engineering/what-is-prompt-engineering`
- `/ko/local-llms` → `/prompt-engineering/chain-of-thought-prompting`
- `/ko/prompt-bites` → `/local-llms/llm-quantization-explained`
- `/ko/prompt-bites` → `/local-llms/top-open-source-models-ollama`
- `/ko/prompt-bites` → `/local-llms/ollama-vs-lm-studio`
- `/ko/prompt-bites` → `/local-llms/qwen-vs-llama-vs-mistral`
- `/ko/prompt-bites` → `/local-llms/best-budget-gpus-local-llm`
- `/ko/prompt-bites` → `/local-llms/how-much-vram-local-llm`
- `/ko/prompt-bites` → `/prompt-engineering/co-star-framework`
- `/ko/prompt-bites` → `/local-llms/qwen-gdpr-privacy-manifesto-2026`

---

## 7. External Link Rot Analysis

179 external link targets returned non-200. Classified:

### 7a. True 404s — Dead links to remove or replace (~65)

High-confidence dead links (URL was valid, now gone):

| URL | Article | Action |
|---|---|---|
| `https://owasp.org/www-community/attacks/Prompt_Injection` | prompt-injection-and-security | Replace with `https://owasp.org/www-project-top-ten/` |
| `https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.RMF.1.0.pdf` | prompt-injection-and-security | Update to `https://airc.nist.gov/RMF` |
| `https://www.nist.gov/ai-risk-management-framework` | geopolitics-and-ai, PE hub | Update to `https://airc.nist.gov/RMF` |
| `https://www.nist.gov/artificial-intelligence/ai-risk-management-framework` | PE hub | Same — update to `https://airc.nist.gov/RMF` |
| `https://www.nist.gov/system/files/documents/2023/01/26/AI%20RMF%201.0.pdf` | geopolitics-and-ai | Same redirect target |
| `https://www.gov.uk/government/speeches/pm-speech-at-the-ai-safety-summit-1-november-2023` | geopolitics-and-ai | Strip (gov.uk speech removed) |
| `https://www.bundesregierung.de/breg-de/themen/digitalisierung/ki-strategie` | geopolitics-and-ai | Strip (German govt page removed) |
| `https://ai.google.dev/gemini-api/docs/controlled-generation` | constrained-prompting | Update to `https://ai.google.dev/gemini-api/docs/text-generation` |
| `https://ai.google.dev/gemini-2/docs/structured-output` | structured-output-and-json-mode | Update to `https://ai.google.dev/gemini-api/docs/structured-output` |
| `https://storage.googleapis.com/deepmind-media/gemini/gemini_1_5_tech_report.pdf` | how-llms-actually-work | Strip (PDF removed from GCS) |
| `https://www.anthropic.com/constitutional-ai` | what-is-prompt-engineering | Update to `https://www.anthropic.com/research/constitutional-ai` |
| `https://prompthub.com/docs` | best-prompt-management-platforms | Strip (prompthub.com domain dead) |
| `https://knowledge.hubspot.com/content/use-brand-voice-in-ai-assistant` | your-brand-voice-ai | Strip (article removed) |
| `https://semji.com/en/features/ai-content-assistant/` | your-brand-voice-ai | Strip (URL changed) |
| `https://www.nngroup.com/articles/tone-voice-ux/` | your-brand-voice-ai | Strip (NN/g article removed) |
| `https://outlines-dev.github.io/` | best-tools-structured-output-json | Update to `https://github.com/dottxt-ai/outlines` |
| `https://github.blog/developer-skills/code-review/code-review-best-practices/` | prompt-review-workflow-for-teams | Strip (GitHub blog post removed) |
| `https://docs.boundaryml.com/benchmarks` | prompts-for-reliable-structured-data | Strip (domain changed — now `docs.baml.ai`) |
| `https://ai.meta.com/blog/llama-3-3/` | local-llm-model-updates-2026 | Update to `https://llama.meta.com/` |
| `https://www.apple.com/mac/m3/` | gpu-vs-cpu-vs-apple-silicon | Update to `https://www.apple.com/mac/` (M3 page removed) |
| `https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5070/` | gpu-vs-cpu-vs-apple-silicon | Strip (product page removed) |
| `https://www.qualcomm.com/products/mobile/snapdragon/pcs/snapdragon-x-elite` | mobile-local-llms | Update to `https://www.qualcomm.com/snapdragon` |
| `https://huggingface.co/collections/Fimbulvetr` | best-local-llms-for-creative-writing | Strip (HF collection removed) |
| `https://storage.googleapis.com/deepmind-media/gemma/gemma-3-report.pdf` | local-llm-model-updates-2026 | Update to `https://arxiv.org/abs/2503.19786` |
| `https://arxiv.org/abs/` | qwen-vs-llama-vs-mistral | Fix: malformed URL (missing paper ID) — strip or fix |

### 7b. Access-blocked (403/405) — Likely still live, crawler blocked (~77)

These domains block crawlers with 403/405 but the pages exist for real users. **Do not remove these links.**

| Domain | Count | Status |
|---|---|---|
| platform.openai.com | 3 | 403 (bot-block) |
| openai.com | 4 | 403 (bot-block) |
| ollama.com/library/\* | 7 | 405 (HEAD not allowed) |
| huggingface.co | 2 | 401 (auth required for model pages) |
| dl.acm.org | 1 | 403 (bot-block) |
| www.oecd.org | 1 | 403 (bot-block) |
| www.make.com | 1 | 403 (bot-block) |
| www.techpowerup.com | 2 | 405 (HEAD not allowed) |
| elicit.com | 1 | 403 (bot-block) |
| prompthub.ai | 1 | 403 (bot-block) |
| smallformfactor.net | 1 | 403 (bot-block) |

### 7c. localhost links — expected false positives

`http://localhost:11434/...` links appear in `local-llm-openai-compatible-api.ts` and `best-ai-coding-assistant-local-llm.ts` as code examples. These are not real external links — they are inline code showing local Ollama API endpoints. The crawler HEAD-checks them as URLs, gets 404/405. **Do not remove or strip these** — they are content, not navigation links.

Affected: 6 localhost URLs across 2 articles.

### 7d. External link rot — priority fix matrix

| Priority | Action | Count |
|---|---|---|
| P1 — Update URL | NIST RMF (3 URLs → 1 canonical), Google AI Gemini docs (2 URLs), Anthropic constitutional AI (1 URL) | 6 |
| P2 — Strip dead link | UK gov speech, Bundesregierung, GitHub blog post, NN/g article, HubSpot, Semji, Fimbulvetr collection, arXiv malformed | 8 |
| P3 — Update to new location | outlines-dev → dottxt-ai/outlines, boundaryml → baml.ai, Apple M3 → Apple Mac, Llama blog → llama.meta.com | 4 |
| P4 — Monitor | DeepMind PDF (GCS), storage.googleapis.com links (may have been mirrored) | 2 |
| Skip | 403/405 access-blocked (77 links) + localhost code examples (6 links) | 83 |

---
*Generated by scripts/links/crawl-check.mjs — re-run monthly for ongoing health checks.*  
*Last updated: 2026-06-20 with external crawl results and PE cluster routing errata.*