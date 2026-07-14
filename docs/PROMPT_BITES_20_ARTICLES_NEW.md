# Prompt Bites — 20 New Articles (Batch: 2026-07)

Base URL: `https://www.promptquorum.com/prompt-bites/{slug}`
Status: **SCAFFOLDING SPEC** — structure only, per the 2026-07 scaffolding pass. 19 slugs scaffolded (registered in `slugs.ts` + `articles-barrel.ts`, EN-only placeholder content, `noindex,nofollow` via absence from `published.ts`, not in `categories.ts` so nothing shows on the hub). 1 slug deferred.

## Corrections vs. the original draft of this spec

The original draft (pasted into a Claude Code session before this file existed) made a few claims that don't match the repo as of 2026-07-13. Recorded here so a future session doesn't re-trust the stale version:

- **Languages**: the draft said "6 active languages, pt/ar reserved, do not populate." The actual canonical `Language` type (`src/translations.ts`, `src/lib/blog/blogContent.ts`) has **9** languages — en, de, fr, ja, zh, es, pt, ar, ko — and existing complete Prompt Bites articles already populate all 9. `ko` is fully wired (`src/app/ko/prompt-bites/`). This batch is scaffolded **EN-only** regardless, since `PromptBiteArticle` is `Partial<Record<Language, ...>>` — omitting the other 8 keys is valid, no special-casing needed. Translation happens in a later session.
- **Affiliate fields**: the draft asked for `contentType: 'affiliate'` / `writingGuide: 'AFFILIATE'` sourced from a file called `AFFILIATE_WRITING_GUIDELINES.md` with rules "AFF-1" through "AFF-13" and a "4-Location Link Rule." **None of that exists anywhere in this repo** (verified by grepping the whole tree). The real, already-live convention (see `src/lib/prompt-bites/articles/best-gpu-under-300-local-llm.ts`, `best-vpn-downloading-ai-models.ts`) is a top-level **`affiliateDisclosure: true`** flag per language block, plus per-section **`affiliateLinks: [{ url, productName, productCategory, priceRange, label }]`** arrays on sections that recommend a specific product. `docs/AFFILIATE_MANAGER_FINAL.md` is the real affiliate doc in this repo, but it's a business/revenue-strategy document (two-wave rollout, sponsor economics), not a per-article field spec. This batch uses the real `affiliateDisclosure` flag where applicable (see classification table) and does not invent new fields.
- **Registry wiring**: adding a slug requires touching `slugs.ts` **and** `articles-barrel.ts` (an import + registry-object entry) — the barrel step is easy to miss since `slugs.ts` alone makes a slug resolve, but `articles-barrel.ts`'s `promptBitesContent[key]` stays `undefined` without it.
- **Hub visibility**: `src/lib/prompt-bites/categories.ts` drives which slugs render as cards on `/prompt-bites` (grouped by `PROMPT_BITES_CATEGORIES[].articleSlugs`). This batch is deliberately **not** added there, so none of these placeholders appear on the live hub — same state as the existing precedent article `ai-model-knowledge-cutoff-dates`.

## Deferred / needs decision before scaffolding

| Slug | Description | Flag |
|---|---|---|
| `best-local-llm-128k-context-summarization` | Best local LLM for 128K+ context summarization | Overlaps the existing **live, indexed** article `ollama-128k-context-models` (`src/lib/prompt-bites/slugs.ts:20`, published). Recommend fixing that page's title/meta first — cheaper than a new article, and this one may cannibalize it. Hold until decided. Not scaffolded in this batch. |

## The 19 scaffolded slugs

| Slug | Theme | Title (H1) | contentType |
|---|---|---|---|
| `best-gpu-under-1000-local-llm` | Hardware-Specific | Best GPU Under $1,000 for Local LLM Inference? | affiliate |
| `rtx-4060-vs-rtx-3060-12gb` | Hardware-Specific | RTX 4060 vs RTX 3060 12GB: Which Is Better for Local LLMs? | affiliate |
| `best-intel-arc-gpu-local-llm` | Hardware-Specific | Best Intel Arc GPU for Local LLMs? | affiliate |
| `best-rtx-4090-setup-70b-models` | Hardware-Specific | Best RTX 4090 Setup for Running 70B Models? | affiliate |
| `best-npu-copilot-pc-local-llm` | Hardware-Specific | Are Copilot+ PC NPUs Good for Local LLMs? | affiliate |
| `best-local-llm-macbook-air-no-egpu` | Hardware-Specific | Best Local LLM for a MacBook Air Without an eGPU? | affiliate |
| `best-local-llm-32gb-unified-memory-mac` | Hardware-Specific | Best Local LLM for a 32GB Unified Memory Mac? | affiliate |
| `best-windows-laptop-local-llm-under-1500` | Hardware-Specific | Best Windows Laptop for Local LLMs Under $1,500? | affiliate |
| `fine-tuning-7b-model-locally-hardware` | Hardware-Specific | What Hardware Do You Need to Fine-Tune a 7B Model Locally? | affiliate |
| `m4-max-vs-m4-pro-local-llm` | Model Comparisons | Apple M4 Max vs M4 Pro: Which Is Better for Local LLMs? | affiliate |
| `best-local-llm-under-8b-realtime-chat` | Model Comparisons | Best Sub-8B Model for Real-Time Chat? | educational |
| `gguf-vs-gptq-vs-awq` | Quantization & VRAM | GGUF vs GPTQ vs AWQ: Which Quantization Format Should You Use? | educational |
| `ollama-vs-vllm-vs-tgi` | Tool Comparisons | Ollama vs vLLM vs TGI: Which Should You Use for Local Serving? | educational |
| `best-embedding-model-local-rag` | Quick Answers | Best Embedding Model for Local RAG? | educational |
| `best-local-llm-document-summarization` | Quick Answers | Best Local LLM for Document Summarization? | educational |
| `local-llm-raspberry-pi-5` | Quick Answers | Can You Run a Local LLM on a Raspberry Pi 5? | affiliate |
| `best-korean-language-models-local` | Model Comparisons | Which Local LLM Models Support Korean Best? | educational |
| `best-china-compliant-local-llm` | Model Comparisons | Best Local LLM for Mainland-China-Compliant Deployments? | educational |
| `best-local-llm-legal-medical-privacy` | Privacy & Security | Best Local LLM Setup for Legal and Medical Document Privacy? | affiliate |

12 affiliate-candidate / 7 educational. Classification rule: any article whose job is comparing or recommending a **purchasable product** (GPU, laptop, mini PC, NAS/workstation build) is affiliate; articles comparing **software/models/frameworks** with nothing to link to a vendor for stay educational.

At scaffold stage, `contentType: affiliate` only means the placeholder file sets `affiliateDisclosure: true`. No link content, disclosure copy, or pricing is written yet — that's the body-writing session's job, guided by `docs/GEO_WRITING_GUIDELINES.md` / `docs/PROMPT_BITES_WRITING_GUIDE.md` and the real `affiliateLinks` shape shown above (not a nonexistent `AFFILIATE_WRITING_GUIDELINES.md`).

## Next steps after this batch builds clean

1. Second session — write EN article bodies per `docs/PROMPT_BITES_WRITING_GUIDE.md` (≤3 H2s, no H3s, mandatory `quickAnswerTop`, 600–900 words). For the 12 affiliate slugs, add real `affiliateLinks` entries + a top-of-article disclosure box once product research is done.
2. Translation pass (all 9 languages, or at minimum en/de/fr/ja/zh per current site-wide rollout) with the standard integrity sweep → lint → build sequence.
3. `/geo-meta-optimizer` pass per language.
4. Add each slug to `published.ts` (flips to `index,follow`, adds to sitemap) and to the relevant cluster in `categories.ts` (makes it appear on the hub) — only once content clears review.
5. Resolve the deferred `best-local-llm-128k-context-summarization` decision before writing it.
