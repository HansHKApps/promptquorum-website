# Broken Internal Link Triage — Phase 1 of Fix

**Date:** 2026-06-20  
**Broken slugs confirmed:** 163  
**All 163 are referenced in ≥1 file** (no phantom entries)  
**Action:** READ-ONLY classification. Fix pass comes next.

---

## Summary

| Class | Count | Action |
|---|---|---|
| **RENAME** | 100 | Find-replace old slug → new slug across all article files |
| **MISSING** | 63 | Strip the link entirely (plain text or remove sentence) |
| *TYPO* | *(folded into RENAME — same fix)* | |

---

## RENAME — 101 entries (repoint to existing slug)

Old slug → Real slug target

```
5-building-blocks-every-prompt-needs         → prompt-building-blocks
ai-errors-and-hallucinations                 → ai-hallucinations-how-to-stop
ai-hallucinations-how-to-detect-and-stop-them → ai-hallucinations-how-to-stop
ai-hallucinations-why-ai-makes-things-up     → ai-hallucinations-how-to-stop
airgapped-guide                              → on-prem-air-gapped-local-llm
api-vs-local-llms                            → local-llms-vs-cloud-apis
best-gpus-local-llm                          → best-gpus-for-local-llms
best-llm-models-6gb-vram                     → best-local-llm-6gb-vram
best-local-llm-models-2026                   → best-local-llms-2026
best-prompt-engineering-tools-2026           → best-pe-tools-2026
best-prompt-optimization-tools-for-teams     → best-prompt-optimization-tools-teams
best-prompt-testing-evaluation-tools         → best-prompt-testing-tools
best-small-local-llms-under-4gb              → best-ollama-models-4gb-vram
beyond-text-how-to-prompt-with-images        → prompt-with-images
braintrust-vs-prompthub-vs-vellum-vs-promptfoo → braintrust-vs-prompthub-vs-vellum
chain-of-thought                             → chain-of-thought-prompting
co-star-prompting-framework                  → co-star-prompt-framework
context-window-limits-explained              → context-windows-explained
context-windows-explained-why-ai-forgets     → context-windows-explained
craft-framework-guide                        → craft-framework
faster-ai-answers-how-to-prompt-for-speed    → prompt-for-speed
few-shot-prompting                           → zero-shot-vs-few-shot
fine-tuning-local-llms                       → fine-tuning-local-llms-lora
fine-tuning-vs-prompt-engineering            → prompt-engineering-vs-fine-tuning
fine-tuning-vs-prompting                     → prompt-engineering-vs-fine-tuning
fundamentals                                 → fundamentals-of-prompt-optimization
gemini-prompting-guide                       → google-prompting-guide
gpt-claude-or-gemini-how-to-pick-the-right-model → gpt-claude-gemini-which-model
hardware-guide-local-llms                    → local-llm-hardware-guide-2026
how-much-ram-local-llm                       → how-much-ram-for-7b-model
how-much-vram-do-i-need                      → how-much-vram-for-local-llm
how-prompt-engineering-evolved               → prompt-engineering-history
how-to-quantize-local-llm                    → llm-quantization-explained
how-to-run-llm-locally                       → run-first-local-llm
how-to-run-qwen3-locally-2026                → run-qwen-locally-guide-2026
llama-vs-qwen-vs-mistral                     → qwen-vs-llama-vs-mistral
llm-quantization-guide                       → llm-quantization-explained
lm-studio-guide                              → lm-studio-advanced-features
lm-studio-vs-ollama                          → ollama-vs-lm-studio
lm-studio-vs-ollama-local-llm                → ollama-vs-lm-studio
local-ai-agents-business-workflows-compliance → local-ai-agents-business-workflows-eu-compliance
local-llm-agents-with-langgraph              → local-ai-agents-langgraph-ollama
local-llm-context-windows-explained          → context-windows-explained
local-llm-cost-breakdown-2026                → local-llm-cost-calculator-build-vs-rent-2026
local-llm-hardware-guide                     → local-llm-hardware-guide-2026
local-llm-hardware-setup                     → local-llm-hardware-guide-2026
local-llm-pc-build-1000                      → local-llm-workstation-build
local-llm-pc-build-2000                      → local-llm-workstation-build
local-llm-rgpd-checklist                     → local-llm-security-privacy-checklist
local-llm-security                           → local-llm-security-privacy-checklist
local-llm-vs-cloud-api                       → local-llms-vs-cloud-apis
local-llm-with-lm-studio                     → lm-studio-advanced-features
local-rag-performance-macbook-m-series       → local-rag-2026
multi-model-dispatch                         → multi-model-prompt-testing
multimodal-pipeline-apple-silicon            → local-multimodal-pipeline-voice-vision-text
ollama-api-reference                         → ollama-command-guide
ollama-context-size                          → ollama-128k-context-models
ollama-getting-started                       → how-to-install-ollama
ollama-installation-guide                    → how-to-install-ollama
ollama-rag-implementation                    → local-rag-2026
ollama-vs-lm-studio-vs-gpt4all               → lm-studio-vs-jan-vs-gpt4all-2026
pe-setup-small-teams                         → prompt-engineering-setup-small-teams
prompt-audit-and-regression-risk             → prompt-audit-regression
prompt-chaining-reasoning                    → prompt-chaining
prompt-engineering-basics                    → what-is-prompt-engineering
prompt-engineering-for-content-teams         → pe-for-content-teams
prompt-engineering-for-local-llms            → prompt-engineering-for-local-models
prompt-engineering-fundamentals              → what-is-prompt-engineering
prompt-engineering-local-llms                → prompt-engineering-for-local-models
prompt-engineering-rag                       → prompt-engineering-vs-rag
prompt-framework-selection-for-teams         → prompt-framework-for-teams
prompt-frameworks-comparison                 → which-framework-to-use
prompt-governance-in-production              → prompt-governance-production
prompt-optimization-guide                    → fundamentals-of-prompt-optimization
prompt-optimization-metrics                  → prompt-evaluation-metrics
prompt-templates                             → prompt-documentation-templates
prompt-testing                               → best-prompt-testing-tools
prompt-version-control-workflows             → prompt-version-control
quantization-explained                       → llm-quantization-explained
quantization-llms-comprehensive-guide        → llm-quantization-explained
rag-architecture                             → rag-explained
reducing-llm-hallucinations                  → ai-hallucinations-how-to-stop
run-llm-locally-with-ollama                  → how-to-install-ollama
run-llm-rtx-3060                             → best-ollama-models-rtx-3060-12gb
run-local-llm-ollama                         → how-to-install-ollama
run-local-llm-with-egpu                      → best-egpu-ollama-macbook
run-ollama-on-mac                            → ollama-on-mac-apple-silicon-setup-2026
running-70b-models-apple-silicon             → running-70b-models-apple-silicon-m5-max
structured-output                            → structured-output-json-mode
structured-output-and-json-mode              → structured-output-json-mode
system-prompt-vs-user-prompt-whats-the-difference → system-prompt-vs-user-prompt
system-prompts                               → system-prompt-vs-user-prompt
temperature-and-top-p-control-ai-creativity  → temperature-and-top-p
temperature-sampling-local-llm               → temperature-and-top-p
the-single-step-prompt-method                → single-prompt-method
tokens-costs-limits-economics-of-ai-prompting → tokens-costs-limits
tree-of-thought-and-react                    → tree-of-thought-react
what-is-prompt-engineering-a-beginners-guide → what-is-prompt-engineering
which-prompt-framework-should-you-use        → which-framework-to-use
zero-shot-vs-few-shot-prompting              → zero-shot-vs-few-shot
```

### Rename targets that resolve many files (fix first)

| Files affected | Old slug | → Target |
|---|---|---|
| 14 | `context-windows-explained-why-ai-forgets` | → `context-windows-explained` |
| 13 | `tokens-costs-limits-economics-of-ai-prompting` | → `tokens-costs-limits` |
| 13 | `temperature-and-top-p-control-ai-creativity` | → `temperature-and-top-p` |
| 12 | `ai-hallucinations-why-ai-makes-things-up` | → `ai-hallucinations-how-to-stop` |
|  9 | `system-prompt-vs-user-prompt-whats-the-difference` | → `system-prompt-vs-user-prompt` |
|  8 | `gpt-claude-or-gemini-how-to-pick-the-right-model` | → `gpt-claude-gemini-which-model` |
|  7 | `structured-output-and-json-mode` | → `structured-output-json-mode` |
|  4 | `which-prompt-framework-should-you-use` | → `which-framework-to-use` |
|  4 | `tree-of-thought-and-react` | → `tree-of-thought-react` |
|  3 | `braintrust-vs-prompthub-vs-vellum-vs-promptfoo` | → `braintrust-vs-prompthub-vs-vellum` |
|  3 | `lm-studio-vs-ollama` | → `ollama-vs-lm-studio` |
|  3 | `local-llm-pc-build-1000` | → `local-llm-workstation-build` |

---

## MISSING — 63 entries (remove the link; article does not exist)
<!-- 63 = 163 total broken − 100 RENAME -->

Strip the markdown link, keeping the anchor text as plain text (or remove the sentence if the whole sentence is the link). Do NOT repoint to a vaguely-similar page.

```
advanced-prompt-techniques
advanced-rag-techniques
ai-deployment-china                          (≠ vpn-for-china article — different topic)
best-free-local-ai-models-2026
best-local-llm-models                        (too generic; no canonical target)
better-prompts
build-code-review-bot                        (≠ local-llm-code-review-ci-cd — different framing)
ci-cd-for-prompts
comparing-open-source-models
consensus-scoring                            (NO_MATCH)
continue-dev-setup-guide                     (≠ comparison article)
conversational-apis                          (≠ local-llms-vs-cloud-apis — different topic)
cot-structured-reasoning
cuda-vs-rocm-local-llm                       (≠ apple-mlx-vs-nvidia-cuda — different GPU comparison)
decomposition-prompting
deepseek-r1-vs-qwen-benchmark                (≠ existing deepseek/qwen articles — benchmark-specific)
enterprise-llm-deployment
error-handling-llm
eu-ai-act-compliance-guide                   (≠ eu-compliance agents article — different scope)
fine-tune-local-llm-ollama                   (no Ollama fine-tuning guide; fine-tuning-local-llms-lora is not equivalent)
fine-tuning-for-structured-output
fine-tuning-local-llms-lm-studio             (LM Studio fine-tuning not covered)
gdpr-ai-data-protection
gdpr-and-ai
gdpr-and-ai-compliance
govt-compliance-llm
gpu-cooling-strategies
gpu-requirements-local-llm                   (≠ how-much-vram — different question)
how-to-evaluate-local-llms
how-to-install-continue-dev                  (≠ comparison article)
how-to-write-clear-prompts
langchain-production-agents                  (≠ langgraph article — different framework)
llama-3-vs-mistral                           (≠ qwen-vs-llama-vs-mistral — different model set)
llm-as-judge-evaluation
llm-grammars
llm-output-validation
lm-studio                                    (bare tool name — no canonical target)
local-ai-agents-business-workflows-japan-meti-compliance
local-ai-governance-framework
local-llm-best-practices
local-llm-guide                              (too generic — ≠ hardware guide)
local-llm-hybrid-architectures
local-llms-dsgvo-compliant                   (German GDPR article — doesn't exist)
local-vs-cloud
ollama-enterprise
open-webui-rag-setup                         (≠ open-webui-vs-sillytavern — different article)
optimize-prompts-for-cost
pci-dss-ai-systems
prompt-engineering-code-review               (≠ prompt-review-workflow-for-teams)
prompt-engineering-geopolitics               (≠ geopolitics-and-ai blog post)
prompt-engineering-vs-zero-shot
prompt-evaluation-vs-testing
rag-pipeline-evaluation
rag-vs-fine-tuning-explained                 (≠ prompt-engineering-vs-fine-tuning — RAG not covered)
reducing-hallucination                       (NO_MATCH)
reusable-ai-workflows
run-deepseek-r1-locally                      (≠ deepseek explanation article)
run-llama-3-locally                          (no Llama 3 run guide)
self-critique-prompting                      (≠ self-consistency-prompting — different technique)
testing-ai-models
tool-use-and-function-calling                (≠ best-models-tool-calling — different framing)
vllm-performance-guide                       (≠ comparison article)
what-is-gguf                                 (≠ what-is-q4-k-m-quantization — different file format question)
```

---

## Step 5 — Bare-link locale integrity (corrected)

### Files with BOTH bare (`/cluster/slug`) AND locale-prefixed (`/xx/cluster/slug`) markdown links

These are working correctly: they have EN content (bare) alongside locale content (prefixed). The bare count reflects the EN block; prefixed count reflects the translated blocks.

| bare | prefixed | File |
|---|---|---|
| 142 | 62 | local-llm-on-laptop |
| 138 | 10 | how-llms-actually-work |
| 111 | 24 | prompt-injection-and-security |
| 66 | 24 | gpt-claude-gemini-which-model |
| 62 | 7 | tokens-costs-limits |
| 62 | 103 | fundamentals-of-prompt-optimization |
| 61 | 219 | local-llm-hardware-guide-2026 |
| 58 | 10 | ai-hallucinations-how-to-stop |
| 53 | 37 | qwen-vs-llama-vs-mistral |
| 44 | 51 | local-llm-openai-compatible-api |
| 43 | 118 | best-budget-gpus-local-llm |
| 42 | 60 | how-to-reduce-prompt-brittleness |
| 42 | 106 | llm-quantization-explained |
| 40 | 65 | prompt-building-blocks |
| 40 | 31 | small-local-llm-models |

**Concern in this group:** Files where bare >> prefixed may have partially-localized link blocks. Flag for spot-check:

- `local-llm-on-laptop` (bare=142, prefixed=62) — 142 bare vs only 62 prefixed is a high ratio. If the file has 8+ locale blocks, expected prefixed would be ≥8× per-locale link count. Investigate.
- `how-llms-actually-work` (bare=138, prefixed=10) — Only 10 prefixed for 138 bare is suspicious.
- `prompt-injection-and-security` (bare=111, prefixed=24) — 111 bare vs 24 prefixed, same concern.
- `tokens-costs-limits` (bare=62, prefixed=7) — Same concern.
- `ai-hallucinations-how-to-stop` (bare=58, prefixed=10) — Suspicious ratio.

### Files with ONLY bare markdown links (no locale-prefixed at all)

These files either have no locale blocks, or all locale blocks link to EN paths. Requires investigation.

| bare | File |
|---|---|
| 125 | prompt-engineering-glossary |
| 117 | best-local-reasoning-model-deepseek-r1-2026 |
| 63 | deepseek-offline-china-self-hosted-2026 |
| 63 | deepseek-local-china-data-privacy-2026 |
| 54 | deepseek-r1-vs-distills-explained-2026 |
| 47 | apple-on-device-ai-vs-local-llms |
| 36 | deepseek-r1-distill-vram-cheatsheet |
| 36 | best-deepseek-distill-for-your-gpu |
| 21 | prompt-audit-regression |
| 12 | prompt-with-images |
| 12 | context-windows-explained |
| 5 | mram-in-memory-computing-local-ai-2026 |
| 4 | tree-of-thought-react |

**Note:** Many of these are likely EN-only articles (no locale blocks). The deepseek cluster articles (`deepseek-r1-distill-vram-cheatsheet`, `best-deepseek-distill-for-your-gpu`, etc.) may not have been localized yet — confirm before flagging as a bug.

---

## Fix file format (for Phase 2 implementation)

```bash
# /tmp/fix-rename.txt — 101 lines of: old-slug<TAB>new-slug
# /tmp/fix-remove.txt — 62 lines of: slug

# Fix applies to ALL 9 locales simultaneously because broken links appear in
# locale blocks too — the same old slug is used in /de/..., /fr/..., etc.
# A single find-replace on the slug string fixes all locales at once.

# Verification after fix:
# node scripts/links/link-inventory.mjs (or re-run the Step 1 bash block)
# Target: broken count → 0
```

---

## ERRATA — Live Crawl Corrections (2026-06-20)

**Source:** Full-site crawl via `scripts/links/crawl-check.mjs`. The live crawl is authoritative over the static grep.

### Critical: PE Cluster — URL slug ≠ file name

The prompt-engineering cluster uses a `slugs.ts` mapping:
`URL slug (left) → article file key (right)`

Example:
```
'context-windows-explained-why-ai-forgets': 'context-windows-explained'
'temperature-and-top-p-control-ai-creativity':  'temperature-and-top-p'
```

The static triage built `real-slugs.txt` from **file names** (keys = right side). This caused:

1. **False positives**: valid PE URL slugs (left side) appeared "broken" because no file matched that name.  
2. **False negatives**: PE file-key links (right side) appeared "valid" because the file existed — but the PE router only serves the URL slug, so the link returns 404 live.

### RENAME entries to CANCEL — these are valid PE URL slugs (links already work)

**DO NOT RENAME these** — the link target is a valid URL. Executing the triage rename would break working links.

```
5-building-blocks-every-prompt-needs           ← valid URL slug
ai-hallucinations-why-ai-makes-things-up       ← valid URL slug
best-prompt-engineering-tools-2026             ← valid URL slug
best-prompt-optimization-tools-for-teams       ← valid URL slug
best-prompt-testing-evaluation-tools           ← valid URL slug
beyond-text-how-to-prompt-with-images          ← valid URL slug
braintrust-vs-prompthub-vs-vellum-vs-promptfoo ← valid URL slug
context-windows-explained-why-ai-forgets       ← valid URL slug
faster-ai-answers-how-to-prompt-for-speed      ← valid URL slug
gpt-claude-or-gemini-how-to-pick-the-right-model ← valid URL slug
how-prompt-engineering-evolved                 ← valid URL slug
prompt-audit-and-regression-risk               ← valid URL slug
prompt-engineering-for-content-teams           ← valid URL slug
prompt-framework-selection-for-teams           ← valid URL slug
prompt-governance-in-production                ← valid URL slug
prompt-version-control-workflows               ← valid URL slug
structured-output-and-json-mode                ← valid URL slug
system-prompt-vs-user-prompt-whats-the-difference ← valid URL slug
temperature-and-top-p-control-ai-creativity    ← valid URL slug
the-single-step-prompt-method                  ← valid URL slug
tokens-costs-limits-economics-of-ai-prompting  ← valid URL slug
tree-of-thought-and-react                      ← valid URL slug
which-prompt-framework-should-you-use          ← valid URL slug
```

### RENAME targets to CORRECT — triage pointed to file keys, not URL slugs

These broken slugs were correctly identified, but the target is a file key that also returns 404. Update target to the actual URL slug:

| Old slug (broken) | Triage target (WRONG) | Correct URL slug |
|---|---|---|
| `gemini-prompting-guide` | `google-prompting-guide` | `googles-prompting-guide` |
| `multi-model-dispatch` | `multi-model-prompt-testing` | `multi-model-prompt-testing-workflows` |
| `prompt-engineering-rag` | `prompt-engineering-vs-rag` | `prompt-engineering-vs-rag-decision` |
| `prompt-frameworks-comparison` | `which-framework-to-use` | `which-prompt-framework-should-you-use` |
| `prompt-testing` | `best-prompt-testing-tools` | `best-prompt-testing-evaluation-tools` |
| `structured-output` | `structured-output-json-mode` | `structured-output-and-json-mode` |

### NEW CATEGORY: WRONG-SLUG-FORMAT — 11 entries

PE file keys used as URL targets. The file exists; the URL does not. These were NOT in the static triage (file names matched the key, so static analysis said "valid").

```
ai-hallucinations-how-to-stop       → ai-hallucinations-why-ai-makes-things-up  (308 redirect exists, still fix)
best-prompt-optimization-tools-teams → best-prompt-optimization-tools-for-teams
context-windows-explained           → context-windows-explained-why-ai-forgets
gpt-claude-gemini-which-model       → gpt-claude-or-gemini-how-to-pick-the-right-model
prompt-building-blocks              → 5-building-blocks-every-prompt-needs
single-prompt-method                → the-single-step-prompt-method
structured-output-json-mode         → structured-output-and-json-mode
system-prompt-vs-user-prompt        → system-prompt-vs-user-prompt-whats-the-difference
temperature-and-top-p               → temperature-and-top-p-control-ai-creativity
tokens-costs-limits                 → tokens-costs-limits-economics-of-ai-prompting
which-framework-to-use              → which-prompt-framework-should-you-use
```

### NEW CATEGORY: WRONG-CLUSTER — 8 entries

Article exists but is linked with the wrong cluster prefix. Fix: update the href to the real cluster.

| Live 404 URL | Correct URL | Found on |
|---|---|---|
| `/prompt-engineering/prompt-engineering-for-local-models` | `/local-llms/prompt-engineering-for-local-models` | `/prompt-engineering/5-building-blocks-every-prompt-needs` |
| `/local-llms/local-rag-for-private-business-data` | `/power-local-llm/local-rag-for-private-business-data` | `/local-llms/best-models-apple-silicon-2026` |
| `/power-local-llm/how-to-install-ollama` | `/local-llms/how-to-install-ollama` | `/power-local-llm/easiest-local-ai-app-windows-mac-linux` |
| `/prompt-bites/sillytavern-vs-agnai-vs-risuai-roleplay` | `/power-local-llm/sillytavern-vs-agnai-vs-risuai-roleplay` | `/prompt-bites/sillytavern-chinese-roleplay-setup` |
| `/prompt-bites/best-local-llm-creative-writing-2026` | `/power-local-llm/best-local-llm-creative-writing-2026` | `/prompt-bites/sillytavern-chinese-roleplay-setup` |
| `/pt/best-pe-tools-2026` | `/pt/prompt-engineering/best-prompt-engineering-tools-2026` | `/prompt-engineering/best-prompt-engineering-tools-2026` |
| `/ko/prompt-engineering-for-local-models` | `/ko/local-llms/prompt-engineering-for-local-models` | `/ko/prompt-engineering/5-building-blocks-every-prompt-needs` |
| `/de/prompt-engineering-for-local-models` | `/de/local-llms/prompt-engineering-for-local-models` | `/de/prompt-engineering/5-building-blocks-every-prompt-needs` |

### NEW CATEGORY: MALFORMED — 3 entries

Parenthesis in href from markdown source in `src/lib/prompt-engineering/articles/structured-output-and-json-mode.ts`. A `(` character is included literally in the URL.

```
(/prompt-engineering/specs-framework       → /prompt-engineering/specs-framework
(/prompt-engineering/constrained-prompting → /prompt-engineering/constrained-prompting
(/prompt-engineering/rag-explained         → /prompt-engineering/rag-explained
```

Fix: find the markdown source and remove the leading `(` from the href.

### Additional live-only findings (not in static triage)

- `/apple-touch-icon.png` → 404 — missing file in `public/`. Add a `apple-touch-icon.png` or a redirect rule.
- `/blog/llm-cost-benchmarks-2026` → 404 — blog post slug does not exist. Found linked from `/prompt-engineering/prompt-engineering-vs-fine-tuning`. Strip the link.
- `/docs/multi-model-testing` → 404 — dead docs link in `/prompt-engineering/persona-prompting`. Strip the link.
- `/aclanthology.org/2021.acl-long.200` → 404 — missing `https://` prefix. Found on `/prompt-engineering/chain-of-thought-prompting`. Fix to `https://aclanthology.org/2021.acl-long.200`.

---

*Read-only triage complete. No files changed. Fix pass reads this file.*
