# Internal Link Inventory Report — Phase 1

**Date:** 2026-06-20  
**Scope:** All 5 article clusters × 9 locales — READ-ONLY inventory  
**Method:** grep-based edge extraction from `src/lib/**/articles/*.ts`  
**Links captured:** HTML `<a href="...">` format AND Markdown `[text](/path)` format

---

## 1. Summary Numbers

| Metric | Count |
|---|---|
| Total articles | **364** |
| Total internal link instances | **841** (HTML href) + markdown links (not counted separately — see §7) |
| Unique slugs receiving ≥1 inbound link | **320** (from full linked-slug set) |
| Orphan pages (0 inbound) | **44** |
| Dead-end pages (0 outbound) | **26** |
| **Broken internal links (slug doesn't exist)** | **163** ← CRITICAL |
| Locale-prefixed links (e.g. `/de/…`) per locale | ~87–91 each |
| Bare EN-style cluster links | 135 |
| Generic anchor texts ("click here", "read more") | **0** |

### Articles per cluster

| Cluster | Articles |
|---|---|
| local-llms | 126 |
| prompt-engineering | 81 |
| power-local-llm | 64 |
| prompt-bites | 68 |
| smart-home | 25 |
| **Total** | **364** |

### Links per cluster (outbound from articles in that cluster)

| Cluster | Links |
|---|---|
| prompt-bites | 541 |
| local-llms | 254 |
| power-local-llm | 35 |
| prompt-engineering | 11 |
| smart-home | 0 |

---

## 2. ORPHAN PAGES — Priority 1 (zero inbound from any article)

These 44 pages receive no internal links from any other article. Hub pages render article lists dynamically (not via static hrefs), so these are reachable only from the hub index — no article-level link equity flows to them.

```
apple-on-device-ai-vs-local-llms
best-7b-models-consumer-hardware
best-affiliate-tools-ai-developers-2026
best-egpu-setup-for-macbook-local-llm-2026
best-laptops-local-llm-2026
best-local-llms-business-writing
best-quantization-6gb-vram
best-saudi-arabic-local-llms-allam-2026
best-ssd-fast-model-loading
build-your-own-framework
cursor-pro-vs-continue-dev
future-of-local-llms
galaxy-s26-local-ai-on-device-2026
galaxy-vs-iphone-on-device-ai-2026
google-prompting-guide
hbm-memory-on-device-ai-samsung-sk-hynix-2026
headless-local-llms
local-llm-cost-calculator-build-vs-rent-2026
mistral-small-24b-vs-qwen-14b-vs-llama-8b
mram-in-memory-computing-local-ai-2026
multi-model-prompt-testing
pe-for-content-teams
pe-for-developers-workflow
pe-for-support-operations
prompt-audit-regression
prompt-documentation-templates
prompt-engineering-history
prompt-engineering-vs-rag
prompt-for-speed
prompt-framework-for-teams
prompt-governance-production
prompt-library-team-management
prompt-security-tools
prompt-version-control
prompt-with-images
prompts-for-reliable-structured-data
prompts-to-repeatable-workflows
qwen-local-deployment-complete-guide-2026
radeon-6800m-local-llm
strix-halo-ollama-vulkan
teaching-with-ai
tree-of-thought-react
xinference-llama-qwen-chatglm-mistral
your-brand-voice-ai
```

**Observation:** 12 of these are prompt-engineering articles (`pe-for-*`, `prompt-*`, `build-your-own-framework`, `google-prompting-guide`, `prompt-with-images`). The prompt-engineering cluster barely links to itself. Several high-potential hardware/comparison pages (`mistral-small-24b-vs-qwen-14b-vs-llama-8b`, `radeon-6800m-local-llm`, `strix-halo-ollama-vulkan`) are also orphaned.

---

## 3. DEAD-END PAGES — Priority 2 (zero outbound internal links)

These 26 pages contain no `href="/"` or `[text](/…)` links of any kind. Users landing on them have no path to other content.

```
# local-llms cluster
alibaba-cloud-vs-tencent-cloud-gpu-ai-2026
best-gpu-for-llm-inference-under-500-2026
eu-cloud-gpu-gdpr-2026
galaxy-s26-local-ai-on-device-2026
galaxy-vs-iphone-on-device-ai-2026
gdpr-llm-risk-comparison-2026
hbm-memory-on-device-ai-samsung-sk-hynix-2026
local-llm-cost-calculator-build-vs-rent-2026
qwen-local-gdpr-setup-guide-2026
xinference-llama-qwen-chatglm-mistral

# prompt-engineering cluster
best-local-llm-ide-plugins-2026
best-workstation-build-local-ai-2026
deepseek-vs-qwen-coding-local-2026
multi-model-prompt-testing
negative-prompting
pe-for-content-teams
pe-for-developers-workflow
prompt-engineering-history
prompt-framework-for-teams
prompt-security-tools
prompts-to-repeatable-workflows
risen-framework
rtf-framework
specs-framework
which-framework-to-use
zero-shot-vs-few-shot
```

**Observation:** 16 of the 26 dead-ends are in the prompt-engineering cluster — this cluster has almost no internal linking at all (only 11 outbound links across 81 articles = 0.14 links/article).

Note: `galaxy-s26-local-ai-on-device-2026`, `galaxy-vs-iphone-on-device-ai-2026`, `local-llm-cost-calculator-build-vs-rent-2026`, `hbm-memory-on-device-ai-samsung-sk-hynix-2026` are both orphans AND dead-ends — completely disconnected pages.

---

## 4. INBOUND LINK DISTRIBUTION

### Top 20 authority sinks (most-linked-to pages)

| Inbound | Slug |
|---|---|
| 45 | how-much-vram-for-local-llm |
| 36 | what-is-q4-k-m-quantization |
| 36 | ollama-vs-lm-studio |
| 27 | q4-k-m-vs-q8-0 |
| 27 | how-much-vram-local-llm |
| 27 | how-much-ram-for-7b-model |
| 27 | best-ollama-models-rtx-3060-12gb |
| 27 | best-ollama-models-right-now |
| 27 | best-gpus-for-local-llms |
| 26 | best-local-llm-apps-android-2026 |
| 26 | best-local-llm-6gb-vram |
| 26 | best-frontend-for-ollama |
| 25 | run-local-llm-on-xperia-japan |
| 25 | best-gpu-local-llm-japan-price |
| 23 | best-local-llm-apps-japan-android |
| 18 | qwen-local-gdpr-setup-guide-2026 |
| 18 | quantization-levels-comparison |
| 18 | best-ollama-models-cpu-only |
| 18 | best-local-llm-coding-12gb-vram |
| 18 | best-cpu-only-llm |

**Notes:**
- `how-much-vram-local-llm` and `how-much-vram-for-local-llm` are likely duplicate targets for the same article — may be the same page linked under two slug variants. Verify in Phase 2.
- `run-local-llm-on-xperia-japan` (25 inbound) and `best-gpu-local-llm-japan-price` (25) are highly linked — the Japan sprint articles have strong internal support from the prompt-bites cluster.
- `qwen-local-gdpr-setup-guide-2026` (18 inbound) — well-linked but is a DEAD-END (zero outbound).

### Under-linked pages (only 1–2 inbound)

| Inbound | Slug |
|---|---|
| 2 | knowledge-cutoffs-and-geo |

Only 1 slug in the linked set has ≤2 inbound links — meaning the 320 slugs that receive links are generally reasonably well-supported. The problem is concentrated in the 44 orphans.

---

## 5. HUB → ARTICLE COVERAGE

All 5 cluster hubs use **dynamic rendering** — they generate article lists from their slug map / briefs at runtime. They do NOT contain static `href=` strings. This means:

- Every published article IS reachable from its hub (hub coverage = 100% by architecture)
- Hub → article links are NOT visible to grep-based link analysis and do NOT appear in the link graph
- **Consequence:** Article-to-article links are the only source of link equity flowing between pages

| Hub | Articles | Hub file | Coverage method |
|---|---|---|---|
| /local-llms | 126 | `buildLLMHubData()` → `LocalLLMsHub` | Dynamic (all articles) |
| /power-local-llm | 64 | `page-helpers.tsx` → briefs | Dynamic (published only) |
| /prompt-bites | 68 | `page-helpers.tsx` | Dynamic |
| /prompt-engineering | 81 | dynamic component | Dynamic |
| /smart-home | 25 | `page-helpers.tsx` | Dynamic |

**Implication for Phase 3:** Adding article-to-article links is the primary lever; hub links are already automatic but carry less crawl depth weight than editorial in-content links.

---

## 6. CROSS-CLUSTER MESH MATRIX

Links FROM → TO (raw link count):

|  | → local-llms | → power-local-llm | → prompt-bites | → prompt-engineering | → smart-home |
|---|---|---|---|---|---|
| **local-llms →** | (self) | **0** | 15 | **0** | **0** |
| **power-local-llm →** | **0** | (self) | 7 | **0** | **0** |
| **prompt-bites →** | **242** | 35 | (self) | 11 | **0** |
| **prompt-engineering →** | 12 | **0** | 4 | (self) | **0** |
| **smart-home →** | **0** | **0** | **0** | **0** | (self) |

**Critical findings:**

1. **Smart-home is 100% siloed** — 25 articles, zero cross-cluster links in any direction. No authority flows in or out. The cluster is an island.
2. **local-llms → power-local-llm: 0** — these two clusters are natural neighbors (hardware guides + deep dives) but never link to each other from the local-llms side.
3. **prompt-bites is the hub of the graph** — it sends 242 links to local-llms, 35 to power-local-llm, 11 to prompt-engineering. It is the main authority distributor.
4. **local-llms sends 0 links to prompt-engineering** — despite high topical overlap (prompting guides are useful to LLM users).
5. **One-directional flows:** prompt-bites → local-llms (242) but local-llms → prompt-bites (15). Massive imbalance; prompt-bites punches its authority into local-llms but gets little back.

---

## 7. SAME-LOCALE INTEGRITY

### Link counts per locale

| Locale | Links with `/{locale}/` prefix | Bare EN-style links (all files) |
|---|---|---|
| de | 88 | — |
| fr | 89 | — |
| ja | 91 | — |
| zh | 91 | — |
| es | 88 | — |
| pt | 85 | — |
| ar | 87 | — |
| ko | 87 | — |
| **Total locale-prefixed** | **~706** | |
| **Total bare (no prefix)** | — | **135** |

### Interpretation

The 135 bare links (`href="/cluster/slug"` without `/{locale}/`) are legitimate when they appear in EN content blocks. The concern is bare links inside non-EN locale blocks.

**Files flagged for spot-check** (bare links found with zero locale-prefixed links = likely missing locale prefix in non-EN blocks):

- `best-budget-gpus-local-llm` — 2 bare, 0 prefixed links across non-EN checks
- `ai-model-knowledge-cutoff-dates` — 3 bare, 0 prefixed
- `best-llm-right-now` — 3 bare, 0 prefixed
- `best-japanese-language-models-local` — 12 bare, only 2 prefixed (highest ratio — 10 likely bare in non-EN blocks)

`best-japanese-language-models-local` is a priority fix: 12 bare links vs 2 locale-prefixed is a strong signal that non-EN blocks contain EN-only links.

**pt locale note:** `pt` shows the lowest locale-prefixed count (85 vs 88–91 for other locales). May have slightly fewer links or some missing prefixes. Cross-check against the PT content gap work from prior sprints.

---

## 8. ANCHOR TEXT

### Top 25 most-used anchors (markdown link format)

| Count | Anchor text |
|---|---|
| 107 | Ollama |
| 99 | PromptQuorum |
| 97 | Ollama vs LM Studio |
| 80 | Local LLM Hardware Guide 2026 |
| 65 | Power Local LLM Hub |
| 62 | Chain-of-Thought Prompting |
| 58 | Ollama 설치 방법 *(KO: How to install Ollama)* |
| 57 | كيفية تثبيت Ollama *(AR)* |
| 57 | How to Install Ollama |
| 49 | Cómo instalar Ollama *(ES)* |
| 44 | Qwen vs Llama vs Mistral |
| 44 | LLM Quantization Explained |
| 42 | 로컬 LLM 하드웨어 가이드 2026 *(KO)* |
| 42 | LLM 양자화 설명 *(KO)* |
| 42 | GPU vs CPU vs Apple Silicon |
| 38 | Text-Generation-WebUI vs vLLM vs llama.cpp |
| 37 | llama.cpp vs Ollama vs vLLM |
| 36 | LM Studio |
| 35 | Continue.dev vs Cline vs Aider |
| 35 | Best Local LLMs for Coding |
| 33 | LLM-Quantisierung erklärt *(DE)* |
| 32 | Zero-Shot vs Few-Shot Prompting |
| 32 | Ollama installieren *(DE)* |
| 32 | Hub Power Local LLM |
| 31 | 2026년 최고의 로컬 LLM *(KO)* |

**Notes:**
- No generic anchors ("click here", "read more", "here", "this page", "link") — zero found. Anchor quality is good.
- "PromptQuorum" (99 uses) is likely the homepage/brand link. If these all go to `/` that's fine; if some go to non-canonical paths, verify.
- "Ollama" alone (107 uses) as bare brand name is slightly over-generic but acceptable for the subject matter.
- "Power Local LLM Hub" (65) and "Chain-of-Thought Prompting" (62) are high-frequency promotional links — verify they distribute evenly across articles rather than clustering in a single template.
- Cross-locale localized versions of "How to Install Ollama" (KO: 58, AR: 57, EN: 57, ES: 49) confirm the locale-prefixed link pattern is working for high-frequency linked articles.

---

## BONUS FINDING: 163 BROKEN INTERNAL LINKS

This was not in the original scope but emerged from the orphan analysis. **163 markdown-style links point to slugs that do not exist** as article files in any cluster.

These represent:
- Planned articles that were never written
- Articles that were renamed (old slug still referenced)
- Typos in link paths

**Full broken slug list (163 entries):**

```
5-building-blocks-every-prompt-needs
advanced-prompt-techniques
advanced-rag-techniques
ai-deployment-china
ai-errors-and-hallucinations
ai-hallucinations-how-to-detect-and-stop-them
ai-hallucinations-why-ai-makes-things-up
airgapped-guide
api-vs-local-llms
best-free-local-ai-models-2026
best-gpus-local-llm
best-llm-models-6gb-vram
best-local-llm-models
best-local-llm-models-2026
best-prompt-engineering-tools-2026
best-prompt-optimization-tools-for-teams
best-prompt-testing-evaluation-tools
best-small-local-llms-under-4gb
better-prompts
beyond-text-how-to-prompt-with-images
braintrust-vs-prompthub-vs-vellum-vs-promptfoo
build-code-review-bot
chain-of-thought
ci-cd-for-prompts
co-star-prompting-framework
comparing-open-source-models
consensus-scoring
context-window-limits-explained
context-windows-explained-why-ai-forgets
continue-dev-setup-guide
conversational-apis
cot-structured-reasoning
craft-framework-guide
cuda-vs-rocm-local-llm
decomposition-prompting
deepseek-r1-vs-qwen-benchmark
enterprise-llm-deployment
error-handling-llm
eu-ai-act-compliance-guide
faster-ai-answers-how-to-prompt-for-speed
few-shot-prompting
fine-tune-local-llm-ollama
fine-tuning-for-structured-output
fine-tuning-local-llms
fine-tuning-local-llms-lm-studio
fine-tuning-vs-prompt-engineering
fine-tuning-vs-prompting
fundamentals
gdpr-ai-data-protection
gdpr-and-ai
gdpr-and-ai-compliance
gemini-prompting-guide
govt-compliance-llm
gpt-claude-or-gemini-how-to-pick-the-right-model
gpu-cooling-strategies
gpu-requirements-local-llm
hardware-guide-local-llms
how-much-ram-local-llm
how-much-vram-do-i-need
how-prompt-engineering-evolved
how-to-evaluate-local-llms
how-to-install-continue-dev
how-to-quantize-local-llm
how-to-run-llm-locally
how-to-run-qwen3-locally-2026
how-to-write-clear-prompts
langchain-production-agents
llama-3-vs-mistral
llama-vs-qwen-vs-mistral
llm-as-judge-evaluation
llm-grammars
llm-output-validation
llm-quantization-guide
lm-studio
lm-studio-guide
lm-studio-vs-ollama
lm-studio-vs-ollama-local-llm
local-ai-agents-business-workflows-compliance
local-ai-agents-business-workflows-japan-meti-compliance
local-ai-governance-framework
local-llm-agents-with-langgraph
local-llm-best-practices
local-llm-context-windows-explained
local-llm-cost-breakdown-2026
local-llm-guide
local-llm-hardware-guide
local-llm-hardware-setup
local-llm-hybrid-architectures
local-llm-pc-build-1000
local-llm-pc-build-2000
local-llm-rgpd-checklist
local-llm-security
local-llm-vs-cloud-api
local-llm-with-lm-studio
local-llms-dsgvo-compliant
local-rag-performance-macbook-m-series
local-vs-cloud
multi-model-dispatch
multimodal-pipeline-apple-silicon
ollama-api-reference
ollama-context-size
ollama-enterprise
ollama-getting-started
ollama-installation-guide
ollama-rag-implementation
ollama-vs-lm-studio-vs-gpt4all
open-webui-rag-setup
optimize-prompts-for-cost
pci-dss-ai-systems
pe-setup-small-teams
prompt-audit-and-regression-risk
prompt-chaining-reasoning
prompt-engineering-basics
prompt-engineering-code-review
prompt-engineering-for-content-teams
prompt-engineering-for-local-llms
prompt-engineering-fundamentals
prompt-engineering-geopolitics
prompt-engineering-local-llms
prompt-engineering-rag
prompt-engineering-vs-zero-shot
prompt-evaluation-vs-testing
prompt-framework-selection-for-teams
prompt-frameworks-comparison
prompt-governance-in-production
prompt-optimization-guide
prompt-optimization-metrics
prompt-templates
prompt-testing
prompt-version-control-workflows
quantization-explained
quantization-llms-comprehensive-guide
rag-architecture
rag-pipeline-evaluation
rag-vs-fine-tuning-explained
reducing-hallucination
reducing-llm-hallucinations
reusable-ai-workflows
run-deepseek-r1-locally
run-llama-3-locally
run-llm-locally-with-ollama
run-llm-rtx-3060
run-local-llm-ollama
run-local-llm-with-egpu
run-ollama-on-mac
running-70b-models-apple-silicon
self-critique-prompting
structured-output
structured-output-and-json-mode
system-prompt-vs-user-prompt-whats-the-difference
system-prompts
temperature-and-top-p-control-ai-creativity
temperature-sampling-local-llm
testing-ai-models
the-single-step-prompt-method
tokens-costs-limits-economics-of-ai-prompting
tool-use-and-function-calling
tree-of-thought-and-react
vllm-performance-guide
what-is-gguf
what-is-prompt-engineering-a-beginners-guide
which-prompt-framework-should-you-use
zero-shot-vs-few-shot-prompting
```

**Pattern:** The bulk of broken links target prompt-engineering articles with old/renamed slugs (e.g. `co-star-prompting-framework` vs actual `co-star-prompt-framework`; `fine-tuning-vs-prompt-engineering` vs `prompt-engineering-vs-fine-tuning`; `zero-shot-vs-few-shot-prompting` vs `zero-shot-vs-few-shot`). These are likely slug renames where old references weren't updated.

---

## PHASE 1 SUMMARY — WHAT THIS TELLS US

### Severity ranking

| Priority | Issue | Scale |
|---|---|---|
| 🔴 P0 | **163 broken links** — link equity wasted, crawler dead-ends | 163 broken targets |
| 🔴 P1 | **44 orphan pages** — no article-to-article links in | 44 pages (12%) |
| 🟠 P2 | **26 dead-end pages** — no outbound links | 26 pages (7%) |
| 🟠 P2 | **Smart-home cluster fully siloed** — zero cross-cluster links | 25 articles |
| 🟡 P3 | **prompt-engineering cluster underlinking** — 0.14 links/article vs 2.0+ elsewhere | 81 articles |
| 🟡 P3 | **local-llms → prompt-engineering: 0** — missed topical bridge | all 126 articles |
| 🟡 P3 | **local-llms → power-local-llm: 0** — natural neighbors never connected | all 126 articles |
| 🟢 P4 | **Locale bare-link leaks** — 135 bare links; spot-check 4 files above | ~4 files |
| 🟢 P4 | **`how-much-vram-for-local-llm` vs `how-much-vram-local-llm`** — possible duplicate targets | verify |

### What Phase 2 data should prioritize

- **Broken links:** match against actual slug names to determine rename-vs-missing. Most are slug-rename artifacts; fixing these requires a search-and-replace across article files, not new content.
- **Orphans by traffic:** pull GSC impressions for the 44 orphaned pages — high-impression orphans are the biggest wins to wire in.
- **Smart-home:** if smart-home has significant organic impressions, siloing is costing ranking. Even 3–5 cross-cluster links per article would connect it.
- **prompt-engineering cluster:** if PE hub has traffic, its near-zero internal linking is a structural problem to solve.
- **Inbound concentration:** `how-much-vram-for-local-llm` has 45 inbound but is it a money page? If yes, maintain. If it's a reference page, consider redistributing some link weight to conversion pages.

---

*Generated: 2026-06-20 | Next: Phase 2 (overlay GSC + Umami traffic → prioritize by revenue impact)*
