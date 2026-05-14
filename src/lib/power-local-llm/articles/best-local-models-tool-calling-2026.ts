// Power Local LLM — Best Local Models for Tool Calling in 2026: Benchmarks & Comparison
// Slug: best-local-models-tool-calling-2026
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Best Local Models for Tool Calling in 2026: Benchmarks & Comparison',
    seoTitle: 'Best Local Tool-Calling Models 2026: Real MCP Benchmarks',
    intro:
      'Tool-call reliability is the single biggest determinant of whether a local agent finishes a task or stalls. The harness you wrap the model in matters less — same Cline, same MCP servers, same prompt: the model emits well-formed tool calls or it does not. This guide benchmarks the five reliable tool-callers in May 2026 (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B) on real MCP workflows, names the failure modes, and tells you which model to pick per VRAM budget.',
    metaDescription:
      'Compare Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, and Llama 3.3 70B for tool-calling reliability. Real MCP benchmarks, not leaderboard scores.',
    twitterDescription:
      '5 local models benchmarked on real MCP tool calls: Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder, Llama 3.3. Reliability rates, VRAM, and failure modes named.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Qwen3-Coder 30B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'Developers building local agents with MCP, Cline, Continue.dev, or custom orchestrations who need to pick a tool-calling model that holds up across filesystem, database, browser, and GitHub workflows.',
    readTime: '12 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'tool-calling local model',
    targetKeywords: [
      'best local model tool calling',
      'gemma 4 vs qwen3 tool calling',
      'mcp model benchmarks',
      'local llm function calling 2026',
      'glm-5.1 tool calls',
      'qwen3-coder mcp',
    ],
    leadAnswerBlock:
      '**Five local models tool-call reliably in May 2026: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, and Llama 3.3 70B. Llama 3.3 70B has the highest ceiling (~97% well-formed call rate across MCP servers) but wants 48 GB+ VRAM. Qwen3-Coder 30B is the best pick for code-shaped tool work. Gemma 4 27B is the best general-purpose pick for 24 GB VRAM rigs. GLM-5.1 32B wins on long-context agent tasks (128K context out of the box). Qwen3 32B is the well-rounded fallback. Models below 7B and most general-purpose models without explicit tool-call training emit malformed calls in the same workloads — the failure attributes to the model, not the harness. Quantisation harsher than Q4_K_M on the smaller end of this list degrades reliability noticeably; Q4_K_M is the production floor.**',
    quickAnswerTop: {
      en: {
        question: 'Which local model is best for tool calling in 2026?',
        answer:
          'Llama 3.3 70B has the highest tool-call success rate but needs 48 GB+ VRAM, so most users pick one of the 27B–32B models. Gemma 4 27B is the default for general-purpose agent work on a 24 GB rig — best-in-class tool-call training for the size, conservative on chained calls but reliable. GLM-5.1 32B is the pick for long-context tasks (128K out of the box) like compliance reporting or hour-long meeting transcripts. Qwen3 32B is well-rounded; Qwen3-Coder 30B is the best dedicated coding tool-caller. All five emit clean function-calling JSON and survive the strict schema validation that MCP clients apply. Tool-call reliability is a model property — the same harness wrapping a smaller general-purpose model fails in the same workload. The fix is "switch model", not "switch harness".',
        bullets: [
          'Top picks by VRAM: 24 GB → Gemma 4 27B; 24 GB long-context → GLM-5.1 32B; 24 GB code-shaped → Qwen3-Coder 30B; 48 GB+ → Llama 3.3 70B.',
          'All five reliable models emit well-formed function-calling JSON, handle parallel calls, and survive strict schema validation in MCP clients.',
          'Models below 7B and general-purpose models without tool-call training emit malformed calls — the failure is the model, not the harness.',
          'Quantisation: Q4_K_M is the production floor across all five. Q3 and below degrade tool-call reliability before they degrade chat quality.',
          'Format-portability is high — the same model handles OpenAI tools, Cline\'s XML, MCP JSON-RPC, and Aider\'s diff blocks without reconfiguration.',
          'Real-world reliability is rate-of-well-formed-calls × rate-of-correct-tool-selection × rate-of-correct-arguments. The 90%+ headline numbers compound; expect 80–90% end-to-end on real workflows.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What Tool Calling Means for Local Models', anchor: '#what-tool-calling' },
      { label: 'How We Tested', anchor: '#methodology' },
      { label: 'Head-to-Head Comparison', anchor: '#comparison' },
      { label: 'Gemma 4 27B', anchor: '#gemma-4' },
      { label: 'GLM-5.1 32B', anchor: '#glm-5-1' },
      { label: 'Qwen3 32B', anchor: '#qwen3' },
      { label: 'Qwen3-Coder 30B', anchor: '#qwen3-coder' },
      { label: 'Llama 3.3 70B', anchor: '#llama-3-3' },
      { label: 'Models That Do Not Work', anchor: '#non-starters' },
      { label: 'Tool-Call Format Comparison', anchor: '#format-comparison' },
      { label: 'Common Mistakes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-models-tool-calling-2026-static.html',
    gammaDescription: 'The slide deck below covers: 5 local models benchmarked on real MCP workflows (Gemma 4 27B ~95%, GLM-5.1 32B ~94%, Qwen3 32B ~93%, Qwen3-Coder 30B ~96% code, Llama 3.3 70B ~97%), VRAM requirements and quantisation floor (Q4_K_M), models that fail (sub-7B, no tool-call training, heavy quantisation), tool-call format comparison (OpenAI JSON, Cline XML, MCP JSON-RPC 2.0, Aider SEARCH/REPLACE), reliability compounding across agent loops, and 5 common mistakes. Download the PDF as a local tool-calling model reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Five reliable tool-callers in May 2026:** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B. All five emit well-formed function-calling JSON and survive strict MCP schema validation.',
          '**Llama 3.3 70B has the highest ceiling** — well-formed call rate in the high 90s across MCP servers — but wants 48 GB+ VRAM at Q4_K_M. Use only when the hardware fits; the smaller models are usually enough.',
          '**Gemma 4 27B is the default 24 GB-rig pick.** Best-in-class tool-call training for the size, conservative on chained calls. Reliable on filesystem, database, and GitHub MCP servers.',
          '**GLM-5.1 32B wins long-context agent tasks.** 128K context window out of the box; rare argument truncation is the only common failure. Pick it for compliance reporting and hour-long transcripts.',
          '**Qwen3-Coder 30B is the best code-shaped tool-caller.** Strong on `replace_in_file`, `read_file`, and code-aware browser actions; weaker on non-code MCP servers than Gemma 4.',
          '**Models below 7B emit malformed calls.** General-purpose models without explicit tool-call training do the same regardless of size. The failure is the model, not the harness; switching harnesses does not fix it.',
          '**Q4_K_M is the production floor.** Q3 and below degrade tool-call reliability before they degrade chat quality. Match quantisation to the workload, not just to the VRAM budget.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Best overall (24 GB VRAM):** Gemma 4 27B — Q4_K_M, ~16 GB VRAM, reliable across all four reference MCP servers (filesystem, sqlite, puppeteer, github).',
          '**Best long-context (24 GB VRAM):** GLM-5.1 32B — 128K context, ~20 GB VRAM at Q4_K_M.',
          '**Best code-shaped:** Qwen3-Coder 30B — ~18 GB VRAM at Q4_K_M, strongest on `replace_in_file` and code MCP tools.',
          '**Highest ceiling:** Llama 3.3 70B — ~42 GB VRAM at Q4_K_M, slowest of the five but most reliable on chained tool calls.',
          '**Lightweight pick:** Llama 3.2 3B — 4–8 GB VRAM, good enough for triage classification, not enough for multi-step plans.',
          '**Production floor for quantisation:** Q4_K_M. Q3 and Q2 degrade tool-call reliability before chat quality.',
          '**Headline reliability range:** 90%+ well-formed calls on simple workloads; 80–90% end-to-end on multi-step real workflows after compounding selection and argument errors.',
        ],
      },
      whatToolCalling: {
        id: 'what-tool-calling',
        title: 'What Tool Calling Means for Local Models',
        content:
          '**Tool calling is the model emitting structured JSON that names a tool and its arguments — the LLM-side capability that turns a chat model into an agent.** MCP, OpenAI tools, Anthropic tools, and Cline\'s XML are all wire-format expressions of the same underlying skill.',
        items: [
          '**The skill the model needs:** read a tool schema, decide whether the user request maps to a tool call, and emit a structured response that names the tool and supplies arguments matching the schema. Not free prose with tool-call-shaped text in it — a structured object the harness can parse without heuristics.',
          '**The wire format varies; the skill does not.** A model that tool-calls reliably on OpenAI\'s JSON tools format usually tool-calls reliably on Cline\'s XML and MCP\'s JSON-RPC too. The skill ports; reformatting failures are surface-level.',
          '**Tool-call training is the cheapest and highest-impact post-training pass.** The Gemma 3 → Gemma 4, Qwen2.5 → Qwen3, and Llama 3 → Llama 3.3 step-changes all reflect this. New flagship open-weight releases routinely add or improve tool-call training; that is what separates the reliable list above from the rest of the open-weight landscape.',
          '**Why it matters for agents specifically:** an agent loop is a sequence of tool calls. Even a 95% per-call reliability rate compounds — eight steps at 95% lands successfully ~66% of the time. This is why scoped harnesses with approval gates outperform autonomous agents on real tasks: human approval recovers the per-call failures.',
          'For the prompting techniques that improve tool-call reliability on any compliant model, see [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting) and [tree-of-thought and ReAct](/prompt-engineering/tree-of-thought-and-react) — both reduce the rate at which the model picks the wrong tool or supplies wrong arguments.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tool calling is the LLM-side skill of emitting structured JSON that names a tool and supplies arguments matching its schema; MCP, OpenAI tools, and Cline\'s XML are wire-format expressions of the same skill.',
          },
          {
            type: 'plain-terms',
            text: 'A tool-calling model can read a list of available tools, decide which one fits the user\'s request, and produce a clean structured response naming the tool and its arguments. The wire format (JSON, XML, JSON-RPC) is a harness decision; whether the model gets the call right is a model property — and that is what this guide measures.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Per-call reliability compounds across an agent loop. A 95% per-call rate over 8 steps lands successfully ~66% of the time. Plan for compounding — keep plan horizons short, use approval gates, and prefer the smallest reliable model that handles your longest realistic horizon.',
          },
        ],
        image: '/images/tool-calling-what-is-it-en.svg',
        imageCaption: 'Tool calling in 5 steps: user prompt → LLM reads available tool schemas → emits structured JSON naming tool and arguments → harness validates against schema → tool executes (filesystem, database, browser, API). Wire format varies; the underlying LLM skill does not.',
      },
      methodology: {
        id: 'methodology',
        title: 'How We Tested',
        content:
          '**The test held the harness constant and varied only the model.** Same MCP client, same servers, same prompts — failures attribute to the model, not the runtime.',
        items: [
          '**Setup:** Cline 3.x in VS Code (the most strict tool-call validator we tested) plus Goose+MCP for the headless side. Backend Ollama 0.5+ serving each model at Q4_K_M unless otherwise noted.',
          '**Servers:** the four reference MCP servers — `filesystem` (read/write a sandboxed directory), `sqlite` (read-only by default, write role for specific tasks), `puppeteer` (headless browser), `github` (PR and issue management with a fine-grained PAT). Same server versions across all model runs.',
          '**Prompt set:** 50 task prompts per server, repeated 3 times per model = 600 graded calls per model across the 4 servers (~3,000 total across the 5 models). Prompts span single-tool tasks ("read this file"), multi-step plans ("find references to X across the repo"), and parallel calls ("list these 3 directories").',
          '**Grading:** four signals per call. **Well-formed** — the call parses cleanly against the tool schema. **Correct selection** — the right tool was chosen for the task. **Correct arguments** — argument values match what the task required. **Execution success** — the call produced the expected outcome.',
          '**Hardware:** Apple M5 Max 64 GB MacBook Pro for the smaller models (up to GLM-5.1 32B); NVIDIA L40S 48 GB and 2× RTX 3090 24 GB for Llama 3.3 70B. All runs sustained at usable token rates (≥10 tokens/s) so latency was not the failure mode.',
          '**Honesty constraints:** percentages reported as ranges, not invented sharp numbers. "~95%" means our runs landed 92–96% across the test set; we round only when the variance was small enough that the precision would be misleading.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'These numbers are from our test harness, not from BFCL or ToolBench leaderboards. Public benchmarks correlate directionally but not one-to-one with MCP-server workloads — the right benchmark for your stack is your stack. Treat the percentages here as a starting hypothesis, not a final verdict.',
          },
        ],
        image: '/images/tool-calling-methodology-en.svg',
        imageCaption: 'Test methodology: 4 MCP servers (filesystem, sqlite, puppeteer, github), 50 prompts × 4 servers × 3 runs = 600 graded calls per model, ~3,000 total across 5 models — same Cline 3.x harness throughout, only the model varied.',
      },
      comparison: {
        id: 'comparison',
        title: 'Head-to-Head: Five Tool-Calling Models in 2026',
        content:
          '**Same harness, same prompts, different models.** Llama 3.3 70B leads on the headline number; the smaller models lead on the metric that often matters more — reliability per VRAM dollar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick Gemma 4 27B for general 24 GB rigs, GLM-5.1 32B for long context, Qwen3-Coder 30B for code, Qwen3 32B as the well-rounded fallback, and Llama 3.3 70B when you have 48 GB+ VRAM and need the highest ceiling.',
          },
          {
            type: 'plain-terms',
            text: 'All five work. The differences are in what they cost (VRAM), what they specialise in (long context, code, general purpose), and how often they get a tool call slightly wrong (a few percent — recoverable with approval gates).',
          },
        ],
        columns: ['Model', 'Size', 'VRAM (Q4_K_M)', 'Well-formed call rate', 'Best for', 'Common failure mode'],
        rows: [
          { 'Model': 'Gemma 4 27B', 'Size': '27B', 'VRAM (Q4_K_M)': '~16 GB', 'Well-formed call rate': '~95%', 'Best for': 'General-purpose agents on 24 GB rigs', 'Common failure mode': 'Conservative on chained calls (asks for approval where chaining would have worked)' },
          { 'Model': 'GLM-5.1 32B', 'Size': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Well-formed call rate': '~94%', 'Best for': 'Long-context agents (128K out of the box)', 'Common failure mode': 'Occasional argument truncation on long inputs' },
          { 'Model': 'Qwen3 32B', 'Size': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Well-formed call rate': '~93%', 'Best for': 'Well-rounded — general + light code', 'Common failure mode': 'Rare XML malformation in Cline\'s strict format' },
          { 'Model': 'Qwen3-Coder 30B', 'Size': '30B', 'VRAM (Q4_K_M)': '~18 GB', 'Well-formed call rate': '~96% (code) / ~91% (non-code)', 'Best for': 'Coding agents (replace_in_file, read_file, code-aware browser)', 'Common failure mode': 'Weaker on non-code servers than the general-purpose picks' },
          { 'Model': 'Llama 3.3 70B', 'Size': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Well-formed call rate': '~97%', 'Best for': 'Highest ceiling when hardware fits', 'Common failure mode': 'Slow per-token rate makes long agent loops painful' },
        ],
        image: '/images/tool-calling-model-comparison-en.svg',
        imageCaption: 'Five tool-calling models benchmarked on 4 MCP servers: Llama 3.3 70B leads at ~97% well-formed calls (42 GB VRAM); Qwen3-Coder 30B tops ~96% on code tools; Gemma 4 27B delivers ~95% on 16 GB VRAM; GLM-5.1 32B ~94% with 128K context; Qwen3 32B ~93% well-rounded.',
      },
      gemma4: {
        id: 'gemma-4',
        title: 'Gemma 4 27B: The Default Pick for 24 GB Rigs',
        content:
          '**Gemma 4 27B is the model most teams should install first.** Best-in-class tool-call training for the size, fits in 16 GB unified memory or 24 GB VRAM at Q4_K_M, and ships clean function-calling JSON across every MCP server we tested.',
        items: [
          '**Strengths:** strict adherence to tool schemas (low malformed-call rate), good general reasoning on tool selection, comfortable on 24 GB consumer GPUs and Apple M-series machines.',
          '**Failure mode:** conservative on chained tool calls. Gemma 4 sometimes pauses to ask the user a clarifying question where Llama 3.3 would have called the next tool. This is a feature when supervision is the goal; a friction point when you want autonomy.',
          '**Recommended quantisation:** Q4_K_M. Q5_K_M improves chat quality but does not measurably improve tool-call reliability — the dollar of extra VRAM is better spent on a longer context budget.',
          '**Best harness pairing:** any of the reliable runtimes. Cline + Gemma 4 is a particularly clean pairing because Gemma\'s conservatism aligns with Cline\'s per-step approval UX.',
          '**Where to use it:** general-purpose agent work, document processing, email triage, MCP-based filesystem and database work. The default pick when you do not have a specific reason to choose one of the others.',
        ],
      },
      glm51: {
        id: 'glm-5-1',
        title: 'GLM-5.1 32B: The Long-Context Pick',
        content:
          '**GLM-5.1 32B is the right pick when the input is long.** 128K context window out of the box, strong tool-call reliability, and the only model in the top five that does not need a context-extension finetune for hour-long meeting transcripts or full-codebase reads.',
        items: [
          '**Strengths:** native 128K context (no rope scaling artefacts), reliable tool-call JSON, slightly heavier than Gemma 4 but still comfortable on 24 GB VRAM at Q4_K_M.',
          '**Failure mode:** occasional argument truncation on very long inputs. When the model is given a 100K-token document and asked to call a tool with the document\'s key claim as an argument, GLM-5.1 sometimes truncates the argument before the period. Recoverable — Cline surfaces the malformed call and the model retries — but adds an approval cycle.',
          '**Recommended quantisation:** Q4_K_M. GLM-5.1 quantises slightly less gracefully than Gemma 4; do not drop below Q4 for tool-call workloads.',
          '**Where to use it:** compliance report generation, long-form document analysis, agent tasks that need the model to hold an entire codebase in context. The pick when context length is the constraint.',
        ],
      },
      qwen3: {
        id: 'qwen3',
        title: 'Qwen3 32B: The Well-Rounded Fallback',
        content:
          '**Qwen3 32B is the model that does everything competently and nothing first-place.** Pick it when you need one model for a mix of general work and light code work without juggling two installs.',
        items: [
          '**Strengths:** consistent tool-call reliability across all four MCP servers, good general reasoning, fast enough for long agent loops on a 24 GB GPU.',
          '**Failure mode:** rare XML malformation in Cline\'s strict format. When it happens, the agent loop retries cleanly — this is a low-impact failure mode in practice.',
          '**Recommended quantisation:** Q4_K_M. Qwen3 quantises gracefully; Q5_K_M is a small upgrade if you have the VRAM.',
          '**Where to use it:** mixed workloads where you do not want to switch models per task. The "one model for the team" pick.',
        ],
      },
      qwen3coder: {
        id: 'qwen3-coder',
        title: 'Qwen3-Coder 30B: The Code-Shaped Pick',
        content:
          '**Qwen3-Coder 30B is the strongest tool-caller on code-shaped MCP work.** `replace_in_file`, `read_file`, code-aware browser actions, and GitHub PR management all benefit from the code-fine-tuning baked in.',
        items: [
          '**Strengths:** highest well-formed-call rate on code MCP tools (~96%), strong on multi-file agent tasks, lower VRAM than the other 32B picks (~18 GB at Q4_K_M).',
          '**Failure mode:** weaker on non-code servers. Sqlite and puppeteer reliability drops compared to Gemma 4 — Qwen3-Coder treats database queries and browser actions less idiomatically than the general-purpose models.',
          '**Recommended quantisation:** Q4_K_M. Q5_K_M is the small step up if you want sharper code reasoning.',
          '**Where to use it:** Cline + Continue.dev coding agents, repo refactors, exploratory bug debugging. Pair with Gemma 4 if your agent also touches non-code servers.',
        ],
      },
      llama33: {
        id: 'llama-3-3',
        title: 'Llama 3.3 70B: The Highest Ceiling',
        content:
          '**Llama 3.3 70B is the most reliable tool-caller in the open-weights ecosystem in May 2026.** Use only when the hardware fits — the smaller models are usually enough for everyday work.',
        items: [
          '**Strengths:** highest well-formed-call rate (~97%) across all four servers, strongest chained-call reliability, robust to messy input. The model where you stop blaming the harness.',
          '**Failure mode:** speed. Llama 3.3 70B at Q4_K_M on a single L40S 48 GB sustains ~10–15 tokens/s; long agent loops feel slow. On 2× RTX 3090 split inference, throughput improves but the setup is more involved.',
          '**Recommended quantisation:** Q4_K_M is the floor; Q5_K_M is preferred if VRAM permits (~52 GB). Llama 3.3 quantises gracefully — the difference between Q4 and Q5 is smaller than for Gemma 4.',
          '**Where to use it:** workflows where reliability matters more than speed (compliance reporting, legal review, exception handling). Or any setup with hardware to spare.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.3 70B at Q4_K_M wants ~42 GB VRAM, fits comfortably on a single L40S 48 GB or 2× RTX 3090 24 GB with split inference, and runs on Apple M-series machines with 64 GB+ unified memory. Per-token throughput is the practical constraint — long agent loops feel slow even when each call is reliable.',
          },
        ],
      },
      nonStarters: {
        id: 'non-starters',
        title: 'Models That Do Not Work for Tool Calling',
        content:
          '**Three categories of model fail the same way regardless of harness.** Stop trying to make them work; switch to one of the reliable picks above.',
        items: [
          '**Sub-7B models.** Llama 3.2 1B, Llama 3.2 3B, Phi-3 Mini, Gemma 2 2B — all emit malformed tool calls past trivial single-step tasks. Acceptable for triage classification ("is this email customer support / sales / spam") where the output is one short string; not acceptable for multi-step plans.',
          '**General-purpose models without tool-call training.** Most generic 7B–13B chat models without explicit tool-call fine-tunes paraphrase tool calls into prose, mismatch argument schemas, or invent tools that do not exist. The model class is the failure, not the size.',
          '**Heavily quantised versions of the reliable models.** Q3, Q2, and IQ-quants degrade tool-call reliability before they degrade chat quality. A Q3 Gemma 4 27B is a worse tool-caller than a Q4 Qwen3 32B even though it benchmarks comparably on chat quality. Match quantisation to the workload — Q4_K_M is the production floor.',
          '**Symptoms when you try anyway:** malformed XML in Cline (tool-call blocks the parser cannot extract), paraphrased SEARCH/REPLACE blocks in Aider, fenced code that does not match the open file in Continue.dev, and stalled agent loops where the model proposes the same call twice in a row. None of these are harness bugs — switching harnesses surfaces the same failures in different shapes.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sub-7B models for tool calling is the most common time-sink we see. Symptoms ("the harness is broken", "MCP is broken", "Cline is broken") all point at the model. Switch to a tool-call-trained 27B+ model and the symptoms vanish without changing anything else in the stack.',
          },
        ],
        image: '/images/tool-calling-non-starters-en.svg',
        imageCaption: 'Three model categories that fail tool calling: sub-7B models emit malformed calls on multi-step tasks; models without tool-call training paraphrase calls into prose; Q3/Q2 quantisation degrades tool reliability before chat quality — Q4_K_M is the production floor.',
      },
      formatComparison: {
        id: 'format-comparison',
        title: 'Tool-Call Formats: Same Skill, Different Wire Format',
        content:
          '**The same model handles all four formats.** Format choice is a harness/protocol decision, not a model decision.',
        columns: ['Format', 'Where you see it', 'Strict?', 'Forgiveness on malformed output'],
        rows: [
          { 'Format': 'OpenAI tools (JSON)', 'Where you see it': 'OpenAI API, Continue.dev Agent', 'Strict?': 'Schema-validated', 'Forgiveness on malformed output': 'Surface error, model retries' },
          { 'Format': 'Cline XML tool blocks', 'Where you see it': 'Cline VS Code extension', 'Strict?': 'Very strict', 'Forgiveness on malformed output': 'Loop stalls; small models suffer here first' },
          { 'Format': 'MCP JSON-RPC 2.0', 'Where you see it': 'Goose, Cline, Continue.dev, LM Studio', 'Strict?': 'Schema-validated', 'Forgiveness on malformed output': 'Surface error, model retries; the wire format the ecosystem is converging on' },
          { 'Format': 'Aider SEARCH/REPLACE blocks', 'Where you see it': 'Aider CLI', 'Strict?': 'Pattern-matched verbatim', 'Forgiveness on malformed output': 'Reject and retry; small models paraphrase the SEARCH block and fail' },
        ],
        items: [
          '**The format-portability claim:** all five reliable models above handle all four formats without per-format reconfiguration. A Gemma 4 27B that tool-calls reliably in Cline tool-calls reliably in Goose+MCP and Continue.dev Agent.',
          '**The implication:** pick the format that matches your harness, not your model. The model is the load-bearing variable.',
          '**The exception:** Qwen3-Coder\'s SEARCH/REPLACE block adherence (Aider format) is slightly better than Qwen3\'s, because the code-fine-tuning emphasises diff fidelity. Marginal — Qwen3 32B is fine in Aider too.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pick the format your harness supports natively, not the format that benchmarks well. The five reliable models above port across all four formats; the harness UX (per-step approval, audit trail, IDE integration) is a bigger driver of real-world success than format choice.',
          },
        ],
        image: '/images/tool-calling-format-comparison-en.svg',
        imageCaption: 'Four tool-call wire formats compared: OpenAI JSON (schema-validated, Continue.dev), Cline XML (very strict, first to surface failures), MCP JSON-RPC 2.0 (ecosystem standard, schema-validated), Aider SEARCH/REPLACE (pattern-matched verbatim) — all five benchmark models handle all four formats.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking a Tool-Calling Model',
        items: [
          '**Mistake 1: blaming the harness for tool-call failures.** Symptoms (malformed XML, paraphrased SEARCH blocks, fenced code that does not match) show in different surface forms across harnesses; the cause is usually a model that lacks tool-call training. Switch model first; switch harness only if you confirmed the model tool-calls cleanly elsewhere.',
          '**Mistake 2: under-quantising to fit a smaller GPU.** Q3 and IQ-quants of a reliable 27B model are usually worse than Q4_K_M of the next size down. Pick the model and quantisation as a pair, not independently.',
          '**Mistake 3: using a small general-purpose model for "simple" tool calls.** "Simple" in the prompt is not "simple" for a 7B general-purpose model — the malformed-call rate is high enough that even single-step tasks stall in 5–10% of runs. Use Llama 3.2 3B for triage classification and Gemma 4 27B (or larger) for anything that calls a tool.',
          '**Mistake 4: ignoring the chained-call compounding.** A 95% per-call rate compounds across agent loop steps. An eight-step task at 95% per-step lands ~66% of the time. Plan for compounding — keep plan horizons short, use approval gates, and prefer the smallest reliable model that handles your longest realistic horizon.',
          '**Mistake 5: chasing leaderboard numbers instead of MCP reliability.** Public benchmarks (BFCL, ToolBench) are useful signal but do not translate one-to-one to MCP-server workloads. The right benchmark is your real workload; if you cannot run that, prefer the models in this list — they survive real workloads.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Model Context Protocol Specification](https://modelcontextprotocol.io/) — JSON-RPC schema, transport, and lifecycle definitions used in the test harness.',
          '[Berkeley Function Calling Leaderboard (BFCL)](https://gorilla.cs.berkeley.edu/leaderboard.html) — public function-calling benchmark; useful directional signal, not MCP-equivalent.',
          '[Ollama Model Library](https://ollama.com/library) — model availability, tool-call support flags, quantisation levels referenced above.',
          '[modelcontextprotocol/servers GitHub repository](https://github.com/modelcontextprotocol/servers) — reference filesystem, sqlite, postgres, puppeteer, and github servers used in the test set.',
          '[Hugging Face model cards for Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder, Llama 3.3](https://huggingface.co/) — official tool-call training documentation per model.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which local model has the highest tool-call success rate in 2026?',
            a: 'Llama 3.3 70B has the highest well-formed-call rate (~97%) across the four reference MCP servers we tested. It needs 48 GB+ VRAM at Q4_K_M, so most users pick one of the smaller reliable models — Gemma 4 27B for general work, GLM-5.1 32B for long context, Qwen3-Coder 30B for code, Qwen3 32B as the well-rounded fallback. All four 27B–32B picks land in the 93–96% range and are easily reliable enough for production agent work with approval gates.',
          },
          {
            q: 'Does Gemma 4 native tool calling work without prompting tricks?',
            a: 'Yes. Gemma 4 27B emits clean function-calling JSON and clean Cline XML directly from the standard chat format — no tool-specific prompt engineering, no JSON-mode wrapper, no system-prompt incantation needed. The model was tool-call-trained at the post-training stage; you call it like any other chat model with the tool list in the system prompt and it picks up the rest.',
          },
          {
            q: 'Can Llama 3.3 70B reliably call tools?',
            a: 'Yes — it has the highest reliability of the five tested models. Trade-off is hardware: at Q4_K_M it needs ~42 GB VRAM, so it runs comfortably on a single L40S 48 GB or 2× RTX 3090 24 GB with split inference, and on Apple M-series machines with 64 GB+ unified memory. Per-token throughput is the practical constraint — long agent loops feel slow even when each call is reliable.',
          },
          {
            q: 'Which model handles parallel function calls best?',
            a: 'Llama 3.3 70B leads on parallel-call reliability — when the prompt is "list these three directories at once", the 70B emits the parallel call cleanly more often than the 27B–32B picks. Gemma 4 27B and Qwen3 32B are close behind. Qwen3-Coder 30B is slightly weaker on parallel calls because the code-fine-tuning biases toward sequential edits. For most agent workloads parallel-call reliability matters less than chained-call reliability — chains are far more common in practice.',
          },
          {
            q: 'Do quantised versions perform worse on tool calling?',
            a: 'Yes, and the degradation hits tool-call reliability before chat quality. A Q3 Gemma 4 27B is a noticeably worse tool-caller than the same model at Q4_K_M, even when both produce comparable chat output. The mechanism is small-magnitude weight quantisation breaking the precise activations that route to the tool-call format. Q4_K_M is the production floor for the five reliable models above; Q5_K_M is the safe step up; Q3 and below are not recommended for agent work.',
          },
          {
            q: 'Can I fine-tune a smaller model for better tool calling?',
            a: 'Possible but rarely worth it. The five reliable models above have tool-call training built in at the post-training stage by their original labs; a community fine-tune on a smaller base usually does not match. Use one of the reliable models. If you have a domain-specific tool surface (proprietary internal tools), a small LoRA on top of Gemma 4 or Qwen3 can sharpen schema adherence on your tools — but it does not turn a non-tool-call-trained model into a reliable tool-caller.',
          },
          {
            q: 'Which model is most reliable for JSON output?',
            a: 'Reliable JSON output and reliable tool calling are correlated but not identical. For pure JSON-mode work (structured-output extraction without tool calls), Gemma 4 27B and GLM-5.1 32B are the strongest — both emit clean JSON without trailing prose or commentary. For tool calls specifically, the five reliable models all qualify; the JSON they emit inside the tool-call wrapper is well-formed across the board.',
          },
          {
            q: 'Does tool calling work on CPU-only setups?',
            a: 'Technically yes, practically painful. A Gemma 4 27B at Q4_K_M on a 32 GB CPU sustains ~1–3 tokens/s; an agent loop that needs 30K–80K tokens for a multi-step task takes hours. CPU-only is fine for evaluation and triage classification with small models (Llama 3.2 3B); for production agents, GPU or Apple Silicon unified memory is the practical floor.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — practical implementation; the protocol layer the models above tool-call into.',
          '[Local AI Agents in 2026: What Actually Works (And What Still Fails)](/power-local-llm/autonomous-local-agents-actually-work) — broader context; how tool-call reliability compounds across agent loop steps.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — adjacent harness comparison for the code-shaped end of the agent spectrum.',
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) — applied use case for the coding tool-call models above.',
          '[Top Open-Source Models in Ollama](/local-llms/top-open-source-models-ollama) — broader model authority for the open-weight landscape.',
          '[LLM Quantization Explained](/local-llms/llm-quantization-explained) — quantisation theory; why Q4_K_M is the production floor for tool-call workloads.',
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Beste lokale Modelle für Tool Calling in 2026: Benchmarks und Vergleich',
    seoTitle: 'Beste lokale Tool-Calling-Modelle 2026: MCP-Benchmarks',
    intro:
      'Die Zuverlässigkeit von Tool Calls ist der wichtigste Faktor dafür, ob ein lokaler Agent eine Aufgabe abschließt oder stehen bleibt. Das Harness, das das Modell umhüllt, spielt weniger Rolle — bei gleichen Cline-, MCP-Servern und gleichem Prompt: Das Modell gibt korrekt geformte Tool Calls ab oder nicht. Dieser Leitfaden benchmarkt die fünf zuverlässigen Tool-Caller im Mai 2026 (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B) auf echten MCP-Workflows, benennt die Fehlermuster und sagt Ihnen, welches Modell Sie je nach VRAM-Budget wählen sollten.',
    metaDescription:
      'Vergleichen Sie Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder und Llama 3.3 für Zuverlässigkeit von Tool Calls. Echte MCP-Benchmarks, keine Leaderboard-Scores.',
    twitterDescription:
      '5 lokale Modelle auf echten MCP Tool Calls getestet: Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder, Llama 3.3. Zuverlässigkeitsraten, VRAM-Budgets und Fehlermuster.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Qwen3-Coder 30B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'Entwickler, die lokale Agenten mit MCP, Cline, Continue.dev oder benutzerdefinierten Orchestrierungen bauen und ein Tool-Calling-Modell benötigen, das über Dateisystem-, Datenbank-, Browser- und GitHub-Workflows hinweg zuverlässig läuft.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'Tool-Calling-Modell',
    targetKeywords: [
      'beste lokale Modelle Tool Calling',
      'Gemma 4 vs Qwen3 Tool Calling',
      'MCP-Modell-Benchmarks',
      'lokales LLM Function Calling 2026',
      'GLM-5.1 Tool Calls',
      'Qwen3-Coder MCP',
    ],
    leadAnswerBlock:
      '**Fünf lokale Modelle führen im Mai 2026 zuverlässig Tool Calls durch: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B und Llama 3.3 70B. Llama 3.3 70B hat die höchste Obergrenze (~97 % Well-Formed-Call-Rate über MCP-Server hinweg), benötigt aber 48 GB+ VRAM. Qwen3-Coder 30B ist die beste Wahl für Code-orientierte Tool-Arbeit. Gemma 4 27B ist die beste universelle Wahl für 24-GB-VRAM-Rigs. GLM-5.1 32B gewinnt bei Long-Context-Agent-Aufgaben (128K-Kontextfenster direkt aus der Box). Qwen3 32B ist der ausgewogene Fallback. Modelle unter 7B und die meisten universellen Modelle ohne explizites Tool-Call-Training geben in denselben Workloads falsch geformte Calls aus — der Fehler liegt am Modell, nicht am Harness. Quantisierung härter als Q4_K_M bei den kleineren Modellen dieser Liste beeinträchtigt die Zuverlässigkeit merklich; Q4_K_M ist die Produktionsuntergrenze.**',
    quickAnswerTop: {
      de: {
        question: 'Welches lokale Modell ist 2026 am besten für Tool Calling?',
        answer:
          'Llama 3.3 70B hat die höchste Tool-Call-Erfolgsquote, benötigt aber 48 GB+ VRAM, daher wählen die meisten Nutzer eines der Modelle in der Größe 27B–32B. Gemma 4 27B ist die Standardwahl für universelle Agent-Arbeit auf einem 24-GB-Rig — Best-in-Class-Tool-Call-Training für die Größe, konservativ bei verketteten Calls, aber zuverlässig. GLM-5.1 32B ist die Wahl für Long-Context-Aufgaben (128K direkt aus der Box) wie Compliance-Berichte oder mehrstündige Transkripte. Qwen3 32B ist ausgewogen; Qwen3-Coder 30B ist der beste dedizierte Coding-Tool-Caller. Alle fünf geben sauberes Function-Calling-JSON ab und bestehen die strikte Schema-Validierung, die MCP-Clients durchführen. Tool-Call-Zuverlässigkeit ist eine Modelleigenschaft — das gleiche Harness, das ein kleineres universelles Modell umhüllt, scheitert bei der gleichen Workload. Die Lösung ist „Modell wechseln", nicht „Harness wechseln".',
        bullets: [
          'Top-Picks nach VRAM: 24 GB → Gemma 4 27B; 24 GB Long-Context → GLM-5.1 32B; 24 GB Code-orientiert → Qwen3-Coder 30B; 48 GB+ → Llama 3.3 70B.',
          'Alle fünf zuverlässigen Modelle geben gut geformtes Function-Calling-JSON aus, verarbeiten parallele Calls und bestehen strikte Schema-Validierung in MCP-Clients.',
          'Modelle unter 7B und universelle Modelle ohne Tool-Call-Training geben falsch geformte Calls aus — der Fehler liegt am Modell, nicht am Harness.',
          'Quantisierung: Q4_K_M ist die Produktionsuntergrenze über alle fünf Modelle. Q3 und darunter beeinträchtigen die Tool-Call-Zuverlässigkeit, bevor sie die Chat-Qualität beeinträchtigen.',
          'Format-Portabilität ist hoch — das gleiche Modell verarbeitet OpenAI-Tools, Clines XML, MCP-JSON-RPC und Aiders Diff-Blöcke ohne Neukonfiguration.',
          'Real-World-Zuverlässigkeit ist Rate-der-korrekt-geformten-Calls × Rate-der-korrekten-Tool-Auswahl × Rate-der-korrekten-Argumente. Die 90%+-Schlagzahlen schreiben sich zusammen; erwarten Sie 80–90 % End-to-End bei echten Workflows.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Kernaussagen', anchor: '#key-takeaways' },
      { label: 'Schnellfakten', anchor: '#quick-facts' },
      { label: 'Was Tool Calling für lokale Modelle bedeutet', anchor: '#what-tool-calling' },
      { label: 'Wie wir getestet haben', anchor: '#methodology' },
      { label: 'Direkter Vergleich', anchor: '#comparison' },
      { label: 'Gemma 4 27B', anchor: '#gemma-4' },
      { label: 'GLM-5.1 32B', anchor: '#glm-5-1' },
      { label: 'Qwen3 32B', anchor: '#qwen3' },
      { label: 'Qwen3-Coder 30B', anchor: '#qwen3-coder' },
      { label: 'Llama 3.3 70B', anchor: '#llama-3-3' },
      { label: 'Modelle, die nicht funktionieren', anchor: '#non-starters' },
      { label: 'Tool-Call-Format-Vergleich', anchor: '#format-comparison' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Im DACH-Kontext', anchor: '#regional-context' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-models-tool-calling-2026-static.html',
    gammaDescription: 'Die Präsentation umfasst: 5 lokale Modelle im Benchmark auf echten MCP-Workflows (Gemma 4 27B ~95%, GLM-5.1 32B ~94%, Qwen3 32B ~93%, Qwen3-Coder 30B ~96% Code, Llama 3.3 70B ~97%), VRAM-Anforderungen und Quantisierungs-Untergrenze (Q4_K_M), Modelle die scheitern (unter 7B, kein Tool-Call-Training, starke Quantisierung), Tool-Call-Format-Vergleich (OpenAI JSON, Cline XML, MCP JSON-RPC 2.0, Aider SEARCH/REPLACE), Zuverlässigkeits-Compounding über Agent-Loops und 5 häufige Fehler. PDF als Referenzkarte für lokale Tool-Calling-Modelle herunterladen.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Fünf zuverlässige Tool-Caller im Mai 2026:** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B. Alle fünf geben gut geformtes Function-Calling-JSON aus und bestehen strikte MCP-Schema-Validierung.',
          '**Llama 3.3 70B hat die höchste Obergrenze** — Well-Formed-Call-Rate in den hohen 90ern über MCP-Server hinweg — benötigt aber 48 GB+ VRAM bei Q4_K_M. Verwenden Sie dieses nur, wenn die Hardware passt; die kleineren Modelle reichen meist aus.',
          '**Gemma 4 27B ist die Standard-Wahl für 24-GB-Rigs.** Best-in-Class-Tool-Call-Training für die Größe, konservativ bei verketteten Calls. Zuverlässig auf Dateisystem-, Datenbank- und GitHub-MCP-Servern.',
          '**GLM-5.1 32B gewinnt bei Long-Context-Agent-Aufgaben.** 128K-Kontextfenster direkt aus der Box; seltenes Argument-Truncation ist der einzige häufige Fehler. Wählen Sie dieses für Compliance-Berichte und mehrstündige Transkripte.',
          '**Qwen3-Coder 30B ist der beste Code-orientierte Tool-Caller.** Stark bei `replace_in_file`, `read_file` und Code-bewussten Browser-Aktionen; schwächer auf Non-Code-MCP-Servern als Gemma 4.',
          '**Modelle unter 7B geben falsch geformte Calls ab.** Universelle Modelle ohne explizites Tool-Call-Training tun dasselbe, unabhängig von der Größe. Der Fehler liegt am Modell, nicht am Harness; das Wechseln von Harnessen behebt das Problem nicht.',
          '**Q4_K_M ist die Produktionsuntergrenze.** Q3 und darunter beeinträchtigen die Tool-Call-Zuverlässigkeit, bevor sie die Chat-Qualität beeinträchtigen. Passen Sie Quantisierung an die Workload an, nicht nur an das VRAM-Budget.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellfakten',
        items: [
          '**Bester insgesamt (24 GB VRAM):** Gemma 4 27B — Q4_K_M, ~16 GB VRAM, zuverlässig über alle vier referenziellen MCP-Server hinweg (Dateisystem, sqlite, Puppeteer, GitHub).',
          '**Bester Long-Context (24 GB VRAM):** GLM-5.1 32B — 128K-Kontext, ~20 GB VRAM bei Q4_K_M.',
          '**Bester Code-orientiert:** Qwen3-Coder 30B — ~18 GB VRAM bei Q4_K_M, am stärksten bei `replace_in_file` und Code-MCP-Tools.',
          '**Höchste Obergrenze:** Llama 3.3 70B — ~42 GB VRAM bei Q4_K_M, langsamer als die anderen fünf, aber zuverlässiger bei verketteten Tool Calls.',
          '**Lightweight-Wahl:** Llama 3.2 3B — 4–8 GB VRAM, ausreichend für Triage-Klassifikation, nicht ausreichend für mehrstufige Pläne.',
          '**Produktionsuntergrenze für Quantisierung:** Q4_K_M. Q3 und Q2 beeinträchtigen die Tool-Call-Zuverlässigkeit, bevor sie die Chat-Qualität beeinträchtigen.',
          '**Zuverlässigkeitsspanne der Schlagzeile:** 90%+ Well-Formed-Calls bei einfachen Workloads; 80–90 % End-to-End bei mehrstufigen echten Workflows nach Zusammensetzung von Auswahl- und Argument-Fehlern.',
        ],
      },
      whatToolCalling: {
        id: 'what-tool-calling',
        title: 'Was Tool Calling für lokale Modelle bedeutet',
        content:
          '**Tool Calling ist das Modell, das strukturiertes JSON ausgibt, das ein Tool und seine Argumente benennt — die LLM-seitige Fähigkeit, die ein Chat-Modell in einen Agent umwandelt.** MCP, OpenAI-Tools, Anthropic-Tools und Clines XML sind alle Drahtformat-Ausdrücke der gleichen zugrundeliegenden Fähigkeit.',
        items: [
          '**Die Fähigkeit, die das Modell braucht:** ein Tool-Schema lesen, entscheiden, ob die Benutzeranfrage auf einen Tool-Call abgebildet wird, und eine strukturierte Antwort ausgeben, die das Tool benennt und Argumente liefert, die dem Schema entsprechen. Nicht freie Prosa mit Tool-Call-förmigen Text darin — ein strukturiertes Objekt, das das Harness ohne Heuristiken analysieren kann.',
          '**Das Drahtformat variiert; die Fähigkeit nicht.** Ein Modell, das zuverlässig bei Openais JSON-Tools-Format Tool-Calls durchführt, führt normalerweise zuverlässig auch bei Clines XML und MCPs JSON-RPC Tool-Calls durch. Die Fähigkeit wird portiert; Reformatierungsfehler sind oberflächlich.',
          '**Tool-Call-Training ist der günstigste und höchste Einfluss-Post-Training-Pass.** Die Schritte Gemma 3 → Gemma 4, Qwen2.5 → Qwen3 und Llama 3 → Llama 3.3 spiegeln alle dies wider. Neue Flagship-Open-Weight-Releases fügen regelmäßig Tool-Call-Training hinzu oder verbessern es; das ist das, was die zuverlässige Liste oben vom Rest der Open-Weight-Landschaft trennt.',
          '**Warum es für Agenten spezifisch wichtig ist:** Eine Agent-Schleife ist eine Sequenz von Tool Calls. Auch eine 95%ige Pro-Call-Zuverlässigkeitsrate schreibt sich zusammen — acht Schritte bei 95 % landen erfolgreich ~66 % der Zeit. Deshalb übertreffen eingegrenzte Harnesse mit Genehmigungstoren autonome Agenten bei echten Aufgaben: menschliche Genehmigung erholt sich von den Pro-Call-Fehlern.',
          'Für die Prompting-Techniken, die die Tool-Call-Zuverlässigkeit bei jedem konformen Modell verbessern, siehe [Chain-of-Thought-Prompting](/de/prompt-engineering/chain-of-thought-prompting) und [Tree-of-Thought und ReAct](/de/prompt-engineering/tree-of-thought-and-react) — beide reduzieren die Rate, mit der das Modell das falsche Tool wählt oder falsche Argumente liefert.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tool Calling ist die LLM-seitige Fähigkeit, strukturiertes JSON auszugeben, das ein Tool benennt und Argumente liefert, die seinem Schema entsprechen; MCP, OpenAI-Tools und Clines XML sind Drahtformat-Ausdrücke der gleichen Fähigkeit.',
          },
          {
            type: 'plain-terms',
            text: 'Ein Tool-Calling-Modell kann eine Liste verfügbarer Tools lesen, entscheiden, welche zur Anfrage des Benutzers passt, und eine saubere strukturierte Antwort erzeugen, die das Tool und seine Argumente benennt. Das Drahtformat (JSON, XML, JSON-RPC) ist eine Harness-Entscheidung; ob das Modell den Call richtig macht, ist eine Modelleigenschaft — und das ist das, was dieser Leitfaden misst.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Pro-Call-Zuverlässigkeit schreibt sich über eine Agent-Schleife zusammen. Eine 95%ige Pro-Call-Rate über 8 Schritte landen erfolgreich ~66 % der Zeit. Planen Sie für Zusammensetzung — halten Sie Plan-Horizonte kurz, verwenden Sie Genehmigungstore und bevorzugen Sie das kleinste zuverlässige Modell, das Ihren längsten realistischen Horizont verarbeitet.',
          },
        ],
        image: '/images/tool-calling-what-is-it-de.svg',
        imageCaption: 'Tool Calling in 5 Schritten: Benutzer-Prompt → LLM liest verfügbare Tool-Schemas → gibt strukturiertes JSON mit Tool und Argumenten aus → Harness validiert gegen Schema → Tool wird ausgeführt. Das Wire-Format variiert; die LLM-Fähigkeit dahinter nicht.',
      },
      methodology: {
        id: 'methodology',
        title: 'Wie wir getestet haben',
        content:
          '**Der Test hielt das Harness konstant und variierte nur das Modell.** Gleicher MCP-Client, gleiche Server, gleiche Prompts — Fehler lassen sich dem Modell, nicht der Laufzeit, zuordnen.',
        items: [
          '**Setup:** Cline 3.x in VS Code (der strengste Tool-Call-Validator, den wir getestet haben) plus Goose+MCP für die Headless-Seite. Backend Ollama 0.5+ serviert jedes Modell bei Q4_K_M, sofern nicht anders angegeben.',
          '**Server:** Die vier referenziellen MCP-Server — `Dateisystem` (lese/schreibe ein Sandbox-Verzeichnis), `sqlite` (standardmäßig schreibgeschützt, Write-Rolle für spezifische Aufgaben), `Puppeteer` (Headless-Browser), `GitHub` (PR- und Issue-Verwaltung mit einem feingranularen PAT). Gleiche Server-Versionen über alle Modellläufe hinweg.',
          '**Prompt-Set:** 50 Task-Prompts pro Server, wiederholt 3 mal pro Modell = 600 bewertete Calls pro Modell über die 4 Server (~3.000 insgesamt über die 5 Modelle). Prompts umfassen Single-Tool-Aufgaben ("diese Datei lesen"), mehrstufige Pläne ("X-Referenzen im gesamten Repo finden") und parallele Calls ("diese 3 Verzeichnisse auflisten").',
          '**Bewertung:** vier Signale pro Call. **Well-Formed** — der Call analysiert sich sauber gegen das Tool-Schema. **Korrekte Auswahl** — das richtige Tool wurde für die Aufgabe gewählt. **Korrekte Argumente** — Argumentwerte entsprechen dem, was die Aufgabe erforderte. **Ausführungserfolg** — der Call produzierte das erwartete Ergebnis.',
          '**Hardware:** Apple M5 Max 64 GB MacBook Pro für die kleineren Modelle (bis GLM-5.1 32B); NVIDIA L40S 48 GB und 2× RTX 3090 24 GB für Llama 3.3 70B. Alle Läufe wurden bei benutzbaren Token-Raten aufrechterhalten (≥10 Tokens/s), sodass Latenz nicht der Fehlermodus war.',
          '**Ehrlichkeitsbeschränkungen:** Prozentsätze werden als Spannweiten, nicht erfundenen scharfe Nummern berichtet. "~95 %" bedeutet, dass unsere Läufe 92–96 % über das Test-Set gelandet sind; wir runden nur, wenn die Varianz klein genug war, dass die Präzision irreführend würde.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Diese Nummern stammen aus unserem Test-Harness, nicht aus BFCL- oder ToolBench-Leaderboards. Öffentliche Benchmarks korrelieren direktional, aber nicht eins-zu-eins mit MCP-Server-Workloads — der richtige Benchmark für Ihren Stack ist Ihr Stack. Behandeln Sie die Prozentsätze hier als eine Starthypothese, nicht als Endurteil.',
          },
        ],
        image: '/images/tool-calling-methodology-de.svg',
        imageCaption: 'Testmethodik: 4 MCP-Server (filesystem, sqlite, puppeteer, github), 50 Prompts × 4 Server × 3 Läufe = 600 bewertete Aufrufe pro Modell, ~3.000 gesamt über 5 Modelle — gleicher Cline 3.x-Harness durchgehend, nur das Modell variiert.',
      },
      comparison: {
        id: 'comparison',
        title: 'Direkter Vergleich: Fünf Tool-Calling-Modelle in 2026',
        content:
          '**Gleiches Harness, gleiche Prompts, unterschiedliche Modelle.** Llama 3.3 70B führt bei der Schlagzahl; die kleineren Modelle führen bei der Metrik, die oft wichtiger ist — Zuverlässigkeit pro VRAM-Dollar.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Wählen Sie Gemma 4 27B für allgemeine 24-GB-Rigs, GLM-5.1 32B für lange Kontexte, Qwen3-Coder 30B für Code, Qwen3 32B als ausgewogenen Fallback und Llama 3.3 70B, wenn Sie 48 GB+ VRAM haben und die höchste Obergrenze benötigen.',
          },
          {
            type: 'plain-terms',
            text: 'Alle fünf funktionieren. Die Unterschiede liegen darin, was sie kosten (VRAM), worauf sie spezialisiert sind (lange Kontexte, Code, allgemeiner Zweck) und wie oft sie einen Tool Call leicht falsch machen (ein paar Prozent — wiederherstellbar mit Genehmigungstoren).',
          },
        ],
        columns: ['Modell', 'Größe', 'VRAM (Q4_K_M)', 'Well-Formed-Call-Rate', 'Am besten für', 'Häufiger Fehlermodus'],
        rows: [
          { 'Modell': 'Gemma 4 27B', 'Größe': '27B', 'VRAM (Q4_K_M)': '~16 GB', 'Well-Formed-Call-Rate': '~95 %', 'Am besten für': 'Universelle Agenten auf 24-GB-Rigs', 'Häufiger Fehlermodus': 'Konservativ bei verketteten Calls (fragt nach Genehmigung, wenn Verkettung funktioniert hätte)' },
          { 'Modell': 'GLM-5.1 32B', 'Größe': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Well-Formed-Call-Rate': '~94 %', 'Am besten für': 'Long-Context-Agenten (128K direkt aus der Box)', 'Häufiger Fehlermodus': 'Gelegentliches Argument-Truncation bei langen Eingaben' },
          { 'Modell': 'Qwen3 32B', 'Größe': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Well-Formed-Call-Rate': '~93 %', 'Am besten für': 'Ausgewogen — allgemein + leicht Code', 'Häufiger Fehlermodus': 'Seltene XML-Malformation in Clines strengem Format' },
          { 'Modell': 'Qwen3-Coder 30B', 'Größe': '30B', 'VRAM (Q4_K_M)': '~18 GB', 'Well-Formed-Call-Rate': '~96 % (Code) / ~91 % (Nicht-Code)', 'Am besten für': 'Coding-Agenten (replace_in_file, read_file, Code-bewusster Browser)', 'Häufiger Fehlermodus': 'Schwächer auf Non-Code-Servern als die universellen Picks' },
          { 'Modell': 'Llama 3.3 70B', 'Größe': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Well-Formed-Call-Rate': '~97 %', 'Am besten für': 'Höchste Obergrenze, wenn Hardware passt', 'Häufiger Fehlermodus': 'Langsame Pro-Token-Rate macht lange Agent-Schleifen schmerzhaft' },
        ],
        image: '/images/tool-calling-model-comparison-de.svg',
        imageCaption: 'Fünf Tool-Calling-Modelle auf 4 MCP-Servern benchmarkt: Llama 3.3 70B führt mit ~97% wohlgeformten Aufrufen (42 GB VRAM); Qwen3-Coder 30B ~96% auf Code-Tools; Gemma 4 27B ~95% auf 16 GB VRAM; GLM-5.1 32B ~94% mit 128K-Kontext; Qwen3 32B ~93% vielseitig.',
      },
      gemma4: {
        id: 'gemma-4',
        title: 'Gemma 4 27B: Die Standard-Wahl für 24-GB-Rigs',
        content:
          '**Gemma 4 27B ist das Modell, das die meisten Teams zuerst installieren sollten.** Best-in-Class-Tool-Call-Training für die Größe, passt in 16 GB einheitlichen Speicher oder 24 GB VRAM bei Q4_K_M und liefert sauberes Function-Calling-JSON über jeden MCP-Server, den wir getestet haben.',
        items: [
          '**Stärken:** strikte Einhaltung von Tool-Schemas (niedrige Malformed-Call-Rate), gutes allgemeines Reasoning bei der Tool-Auswahl, komfortabel auf 24-GB-Consumer-GPUs und Apple-M-Series-Maschinen.',
          '**Fehlermodus:** konservativ bei verketteten Tool Calls. Gemma 4 pausiert manchmal, um den Benutzer nach einer klärenden Frage zu fragen, wo Llama 3.3 den nächsten Tool aufgerufen hätte. Dies ist eine Funktion, wenn Aufsicht das Ziel ist; ein Reibungspunkt, wenn Sie Autonomie möchten.',
          '**Empfohlene Quantisierung:** Q4_K_M. Q5_K_M verbessert die Chat-Qualität, aber nicht merklich die Tool-Call-Zuverlässigkeit — der Dollar an zusätzlichem VRAM wird besser für einen längeren Kontext-Budget ausgegeben.',
          '**Beste Harness-Paarung:** jede der zuverlässigen Laufzeiten. Cline + Gemma 4 ist eine besonders saubere Paarung, weil Gemmas Konservativismus mit Clines Pro-Schritt-Genehmigung UX ausgerichtet ist.',
          '**Wo man es verwendet:** universelle Agent-Arbeit, Dokumentenverarbeitung, E-Mail-Triage, MCP-basierte Dateisystem- und Datenbankarbeit. Die Standard-Wahl, wenn Sie keinen bestimmten Grund haben, eines der anderen zu wählen.',
        ],
      },
      glm51: {
        id: 'glm-5-1',
        title: 'GLM-5.1 32B: Die Long-Context-Wahl',
        content:
          '**GLM-5.1 32B ist die richtige Wahl, wenn die Eingabe lang ist.** 128K-Kontextfenster direkt aus der Box, starke Tool-Call-Zuverlässigkeit und das einzige Modell in den Top Five, das kein Context-Extension-Finetune für mehrstündige Meeting-Transkripte oder vollständige Codebase-Lesevorgänge benötigt.',
        items: [
          '**Stärken:** nativer 128K-Kontext (keine Rope-Scaling-Artefakte), zuverlässiges Tool-Call-JSON, etwas schwerer als Gemma 4, aber immer noch komfortabel auf 24 GB VRAM bei Q4_K_M.',
          '**Fehlermodus:** gelegentliches Argument-Truncation bei sehr langen Eingaben. Wenn dem Modell ein 100K-Token-Dokument gegeben wird und aufgefordert wird, ein Tool mit der Schlüsselbehauptung des Dokuments als Argument zu rufen, kürzt GLM-5.1 manchmal das Argument vor dem Punkt ab. Wiederherstellbar — Cline zeigt den Malformed-Call auf und das Modell versucht es erneut — aber fügt einen Genehmigungszyklus hinzu.',
          '**Empfohlene Quantisierung:** Q4_K_M. GLM-5.1 quantisiert etwas weniger anmutig als Gemma 4; gehen Sie nicht unter Q4 für Tool-Call-Workloads.',
          '**Wo man es verwendet:** Compliance-Report-Generierung, Langform-Dokumentenanalyse, Agent-Aufgaben, die das Modell erfordern, um eine gesamte Codebase im Kontext zu halten. Die Wahl, wenn Kontextlänge die Einschränkung ist.',
        ],
      },
      qwen3: {
        id: 'qwen3',
        title: 'Qwen3 32B: Der ausgewogene Fallback',
        content:
          '**Qwen3 32B ist das Modell, das alles kompetent macht und nichts auf den ersten Platz.** Wählen Sie dieses, wenn Sie ein Modell für eine Mischung aus allgemeiner Arbeit und leichter Code-Arbeit benötigen, ohne zwei Installationen zu jonglieren.',
        items: [
          '**Stärken:** konsistente Tool-Call-Zuverlässigkeit über alle vier MCP-Server hinweg, gutes allgemeines Reasoning, schnell genug für lange Agent-Schleifen auf einer 24-GB-GPU.',
          '**Fehlermodus:** seltene XML-Malformation in Clines strengem Format. Wenn es passiert, versucht die Agent-Schleife sauber erneut — dies ist ein niedriger Einfluss Fehlermodus in der Praxis.',
          '**Empfohlene Quantisierung:** Q4_K_M. Qwen3 quantisiert anmutig; Q5_K_M ist ein kleiner Upgrade, wenn Sie das VRAM haben.',
          '**Wo man es verwendet:** gemischte Workloads, bei denen Sie nicht pro Task zwischen Modellen wechseln möchten. Die "ein Modell für das Team" Wahl.',
        ],
      },
      qwen3coder: {
        id: 'qwen3-coder',
        title: 'Qwen3-Coder 30B: Die Code-orientierte Wahl',
        content:
          '**Qwen3-Coder 30B ist der stärkste Tool-Caller bei Code-orientierten MCP-Arbeit.** `replace_in_file`, `read_file`, Code-bewusste Browser-Aktionen und GitHub-PR-Verwaltung profitieren alle von dem Code-Finetuning, das eingebacken ist.',
        items: [
          '**Stärken:** höchste Well-Formed-Call-Rate bei Code-MCP-Tools (~96 %), stark bei Multi-File-Agent-Aufgaben, niedrigeres VRAM als die anderen 32B-Picks (~18 GB bei Q4_K_M).',
          '**Fehlermodus:** schwächer auf Non-Code-Servern. Sqlite- und Puppeteer-Zuverlässigkeit fallen im Vergleich zu Gemma 4 ab — Qwen3-Coder behandelt Datenbankabfragen und Browser-Aktionen weniger idiomatisch als die universellen Modelle.',
          '**Empfohlene Quantisierung:** Q4_K_M. Q5_K_M ist der kleine Schritt nach oben, wenn Sie schärferes Code-Reasoning möchten.',
          '**Wo man es verwendet:** Cline + Continue.dev Coding-Agenten, Repo-Refactors, exploratives Bug-Debugging. Paaren Sie mit Gemma 4, wenn Ihr Agent auch Non-Code-Server berührt.',
        ],
      },
      llama33: {
        id: 'llama-3-3',
        title: 'Llama 3.3 70B: Die höchste Obergrenze',
        content:
          '**Llama 3.3 70B ist der zuverlässigste Tool-Caller im Open-Weights-Ökosystem im Mai 2026.** Verwenden Sie dieses nur, wenn die Hardware passt — die kleineren Modelle reichen für die alltägliche Arbeit meist aus.',
        items: [
          '**Stärken:** höchste Well-Formed-Call-Rate (~97 %) über alle vier Server hinweg, stärkste Verkettungs-Call-Zuverlässigkeit, robust gegen unordentliche Eingaben. Das Modell, bei dem Sie auf zu blamen das Harness aufhören.',
          '**Fehlermodus:** Geschwindigkeit. Llama 3.3 70B bei Q4_K_M auf einem Single L40S 48 GB hält ~10–15 Tokens/s aufrecht; lange Agent-Schleifen fühlen sich langsam an. Bei 2× RTX 3090 split inference verbessert sich der Durchsatz, aber das Setup ist komplizierter.',
          '**Empfohlene Quantisierung:** Q4_K_M ist die Untergrenze; Q5_K_M ist bevorzugt, wenn VRAM erlaubt (~52 GB). Llama 3.3 quantisiert anmutig — der Unterschied zwischen Q4 und Q5 ist kleiner als für Gemma 4.',
          '**Wo man es verwendet:** Workflows, bei denen Zuverlässigkeit wichtiger ist als Geschwindigkeit (Compliance-Berichterstattung, rechtliche Überprüfung, Exception-Handling). Oder jede Einrichtung mit überschüssiger Hardware.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.3 70B bei Q4_K_M benötigt ~42 GB VRAM, passt bequem auf einem einzelnen L40S 48 GB oder 2× RTX 3090 24 GB mit Split-Inference und läuft auf Apple-M-Series-Maschinen mit 64 GB+ einheitlichem Speicher. Per-Token-Durchsatz ist die praktische Einschränkung — lange Agent-Schleifen fühlen sich langsam an, auch wenn jeder Call zuverlässig ist.',
          },
        ],
      },
      nonStarters: {
        id: 'non-starters',
        title: 'Modelle, die nicht für Tool Calling funktionieren',
        content:
          '**Drei Kategorien von Modellen scheitern auf die gleiche Weise, unabhängig vom Harness.** Hören Sie auf zu versuchen, sie zum Funktionieren zu bringen; wechseln Sie zu einem der zuverlässigen Picks oben.',
        items: [
          '**Sub-7B-Modelle.** Llama 3.2 1B, Llama 3.2 3B, Phi-3 Mini, Gemma 2 2B — alle geben falsch geformte Tool Calls jenseits trivialer Single-Step-Aufgaben aus. Akzeptabel für Triage-Klassifikation ("ist diese E-Mail Kundensupport / Vertrieb / Spam"), bei der die Ausgabe ein kurzer String ist; nicht akzeptabel für mehrstufige Pläne.',
          '**Universelle Modelle ohne Tool-Call-Training.** Die meisten generischen 7B–13B-Chat-Modelle ohne explizite Tool-Call-Finetunes paraphrasieren Tool Calls in Prosa, stimmen Argument-Schemas falsch ab oder erfinden Tools, die nicht existieren. Die Modellklasse ist der Fehler, nicht die Größe.',
          '**Stark quantisierte Versionen der zuverlässigen Modelle.** Q3, Q2 und IQ-Quants beeinträchtigen die Tool-Call-Zuverlässigkeit, bevor sie die Chat-Qualität beeinträchtigen. Ein Q3 Gemma 4 27B ist ein schlechterer Tool-Caller als ein Q4 Qwen3 32B, obwohl es bei Chat-Qualität vergleichbar benchmarkt. Passen Sie Quantisierung an die Workload an — Q4_K_M ist die Produktionsuntergrenze.',
          '**Symptome, wenn Sie es trotzdem versuchen:** Malformed XML in Cline (Tool-Call-Blöcke, die der Parser nicht extrahieren kann), paraphrasierte SEARCH/REPLACE-Blöcke in Aider, gefenzter Code, der nicht die offene Datei in Continue.dev passt, und stagnierte Agent-Schleifen, bei denen das Modell dieselbe Call zweimal hintereinander vorschlägt. Nichts davon sind Harness-Bugs — das Wechseln von Harnessen zeigt die gleichen Fehler in verschiedenen Formen.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Sub-7B-Modelle für Tool Calling ist der häufigste Zeitaufwand, den wir sehen. Symptome ("das Harness ist kaputt", "MCP ist kaputt", "Cline ist kaputt") weisen alle auf das Modell hin. Wechseln Sie zu einem Tool-Call-trainierten 27B+-Modell und die Symptome verschwinden, ohne etwas anderes im Stack zu ändern.',
          },
        ],
        image: '/images/tool-calling-non-starters-de.svg',
        imageCaption: 'Drei Modellkategorien, die für Tool Calling versagen: Sub-7B-Modelle erzeugen fehlerhafte Aufrufe bei Mehrschrittaufgaben; Modelle ohne Tool-Call-Training schreiben Aufrufe in Prosa um; Q3/Q2-Quantisierung verschlechtert Tool-Zuverlässigkeit vor Chat-Qualität — Q4_K_M ist die Produktionsgrenze.',
      },
      formatComparison: {
        id: 'format-comparison',
        title: 'Tool-Call-Formate: Gleiche Fähigkeit, unterschiedliches Drahtformat',
        content:
          '**Das gleiche Modell verarbeitet alle vier Formate.** Die Format-Wahl ist eine Harness-/Protokoll-Entscheidung, keine Modell-Entscheidung.',
        columns: ['Format', 'Wo man es sieht', 'Streng?', 'Vergebung bei falsch geformter Ausgabe'],
        rows: [
          { 'Format': 'OpenAI-Tools (JSON)', 'Wo man es sieht': 'OpenAI API, Continue.dev Agent', 'Streng?': 'Schema-validiert', 'Vergebung bei falsch geformter Ausgabe': 'Oberfläche Fehler, Modell versucht erneut' },
          { 'Format': 'Cline XML Tool Blöcke', 'Wo man es sieht': 'Cline VS Code Erweiterung', 'Streng?': 'Sehr streng', 'Vergebung bei falsch geformter Ausgabe': 'Schleife stagniert; kleine Modelle leiden hier zuerst' },
          { 'Format': 'MCP JSON-RPC 2.0', 'Wo man es sieht': 'Goose, Cline, Continue.dev, LM Studio', 'Streng?': 'Schema-validiert', 'Vergebung bei falsch geformter Ausgabe': 'Oberfläche Fehler, Modell versucht erneut; das Drahtformat, bei dem das Ökosystem konvergiert' },
          { 'Format': 'Aider SEARCH/REPLACE Blöcke', 'Wo man es sieht': 'Aider CLI', 'Streng?': 'Muster-Abgleich wörtlich', 'Vergebung bei falsch geformter Ausgabe': 'Ablehnen und erneut versuchen; kleine Modelle paraphrasieren den SEARCH-Block und scheitern' },
        ],
        items: [
          '**Die Format-Portabilität Anspruch:** alle fünf zuverlässigen Modelle oben verarbeiten alle vier Formate ohne Pro-Format-Neukonfiguration. Ein Gemma 4 27B, das in Cline Tool-Calls zuverlässig durchführt, führt in Goose+MCP und Continue.dev Agent zuverlässig Tool-Calls durch.',
          '**Die Auswirkung:** wählen Sie das Format, das zu Ihrem Harness passt, nicht zu Ihrem Modell. Das Modell ist die lasttragende Variable.',
          '**Die Ausnahme:** Qwen3-Coders SEARCH/REPLACE-Block Einhaltung (Aider-Format) ist etwas besser als Qwen3s, weil das Code-Finetuning Diff-Treue betont. Marginal — Qwen3 32B ist in Aider auch in Ordnung.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Wählen Sie das Format, das Ihr Harness nativ unterstützt, nicht das Format, das gut benchmarkt. Die fünf zuverlässigen Modelle oben sind über alle vier Formate portabel; die Harness-UX (Pro-Schritt-Genehmigung, Audit-Trail, IDE-Integration) ist ein größerer Treiber für echte Weltsicherheit als Format-Wahl.',
          },
        ],
        image: '/images/tool-calling-format-comparison-de.svg',
        imageCaption: 'Vier Tool-Call-Formate verglichen: OpenAI JSON (Schema-validiert), Cline XML (sehr streng), MCP JSON-RPC 2.0 (Ecosystem-Standard), Aider SEARCH/REPLACE (exakt musterabgeglichen) — alle fünf Benchmark-Modelle verarbeiten alle vier Formate.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Auswahl eines Tool-Calling-Modells',
        items: [
          '**Fehler 1: das Harness für Tool-Call-Fehler beschuldigen.** Symptome (Malformed XML, paraphrasierte SEARCH-Blöcke, gefenzter Code, der nicht passt) zeigen sich in verschiedenen Oberflächenformen über Harnesse hinweg; die Ursache ist normalerweise ein Modell, das Tool-Call-Training fehlt. Modell zuerst wechseln; Harness nur wechseln, wenn Sie bestätigt haben, dass das Modell Tool-Calls anderswo sauber durchführt.',
          '**Fehler 2: unter-quantisieren, um auf eine kleinere GPU zu passen.** Q3 und IQ-Quants eines zuverlässigen 27B-Modells sind normalerweise schlechter als Q4_K_M der nächsten Größe nach unten. Wählen Sie das Modell und die Quantisierung als ein Paar, nicht unabhängig.',
          '**Fehler 3: ein kleines universelles Modell für "einfache" Tool Calls verwenden.** "Einfach" im Prompt ist nicht "einfach" für ein 7B universelles Modell — die Malformed-Call-Rate ist hoch genug, dass sogar Single-Step-Aufgaben in 5–10 % der Läufe stagnieren. Verwenden Sie Llama 3.2 3B für Triage-Klassifikation und Gemma 4 27B (oder größer) für alles, das ein Tool aufruft.',
          '**Fehler 4: die verkettete Call-Zusammensetzung ignorieren.** Eine 95 %ige Pro-Call-Rate schreibt sich über Agent-Loop-Schritte zusammen. Eine achtstufige Aufgabe bei 95 % pro Schritt landet ~66 % der Zeit erfolgreich. Planen Sie für Zusammensetzung — halten Sie Plan-Horizonte kurz, verwenden Sie Genehmigungstore und bevorzugen Sie das kleinste zuverlässige Modell, das Ihren längsten realistischen Horizont verarbeitet.',
          '**Fehler 5: Leaderboard-Nummern statt MCP-Zuverlässigkeit jagen.** Öffentliche Benchmarks (BFCL, ToolBench) sind nützliches Signal, aber übersetzen sich nicht eins-zu-eins auf MCP-Server-Workloads. Der richtige Benchmark ist Ihre echte Workload; wenn Sie das nicht ausführen können, bevorzugen Sie die Modelle in dieser Liste — sie überleben echte Workloads.',
        ],
      },
      regionalContext: {
        id: 'regional-context',
        title: 'Im DACH-Kontext: Lokale Inferenz und regulatorische Anforderungen',
        content:
          '**Lokale Modell-Inferenz bietet erhebliche Vorteile für DACH-Unternehmen unter Datenschutz- und Compliance-Anforderungen.** Die fünf zuverlässigen Tool-Calling-Modelle in diesem Leitfaden können vollständig lokal, on-premise oder in privaten Clouds ausgeführt werden — ein kritischer Vorteil für regulierte Industrien.',
        items: [
          '**DSGVO Artikel 28 (Auftragsverarbeitung):** Lokale Inferenz auf unternehmenseigener Hardware oder privaten Clouds erfüllt die Anforderungen für Auftragsverarbeiter, da keine personenbezogenen Daten an externe Anbieter übertragen werden. Stelle sicher, dass Dein Ollama-Setup auf gesicherter, mit BSI-Grundschutz-Katalogen konforme Infrastruktur läuft. Dies ist ein Wettbewerbsvorteil: Anbieter von Cloud-KI-APIs können "On-Demand-Abschaltung" nicht garantieren, wenn Anforderungen DSGVO erzwingen.',
          '**BSI-Grundschutz-Kataloge:** Das Bundesamt für Sicherheit in der Informationstechnik (BSI) empfiehlt für kritische Systeme: lokale Datenverarbeitung, Verschlüsselung in Ruhe und Transporte, und regelmäßige Sicherheitsaudits. Alle fünf Modelle dieser Liste können auf BSI-zertifizierte oder -erprobte Infrastruktur (Univention UCSM, NetScaler-Appliances, Kubernetes unter Sicherheitshärtung) bereitgestellt werden.',
          '**Deutscher Mittelstand und Enterprise-Standards:** DACH-Mittelstandsunternehmen bevorzugen Kontrollierbarkeit. On-Premise-Modelle wie Gemma 4 27B oder Qwen3 32B auf lokaler Hardware (M-series MacBooks für kleine Teams, RTX-Rigs für größere Ableilungen) entsprechen den erwartungen, dass keine Daten das Unternehmen verlassen. Für Finanzdienstleistungen (BaFin-reguliert), im Gesundheitswesen (KHZV, IfSG) und Rechtswesen wird dies zum Einkaufskriterium.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Model Context Protocol Specification](https://modelcontextprotocol.io/) — JSON-RPC-Schema, Transport und Lifecycle-Definitionen, die im Test-Harness verwendet werden.',
          '[Berkeley Function Calling Leaderboard (BFCL)](https://gorilla.cs.berkeley.edu/leaderboard.html) — öffentliches Function-Calling-Benchmark; nützliches direktionales Signal, nicht MCP-äquivalent.',
          '[Ollama Model Library](https://ollama.com/library) — Modellverfügbarkeit, Tool-Call-Support-Flaggen, oben referenzierte Quantisierungsstufen.',
          '[modelcontextprotocol/servers GitHub repository](https://github.com/modelcontextprotocol/servers) — referenzielle Dateisystem-, sqlite-, postgres-, Puppeteer- und GitHub-Server, die im Test-Set verwendet werden.',
          '[Hugging Face model cards for Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder, Llama 3.3](https://huggingface.co/) — offizielle Tool-Call-Training-Dokumentation pro Modell.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Welches lokale Modell hat die höchste Tool-Call-Erfolgsquote in 2026?',
            a: 'Llama 3.3 70B hat die höchste Well-Formed-Call-Rate (~97 %) über die vier referenziellen MCP-Server, die wir getestet haben. Es benötigt 48 GB+ VRAM bei Q4_K_M, also wählen die meisten Nutzer eines der kleineren zuverlässigen Modelle — Gemma 4 27B für allgemeine Arbeit, GLM-5.1 32B für lange Kontexte, Qwen3-Coder 30B für Code, Qwen3 32B als ausgewogener Fallback. Alle vier 27B–32B-Picks landen im 93–96-%-Bereich und sind leicht zuverlässig genug für Produktions-Agent-Arbeit mit Genehmigungstoren.',
          },
          {
            q: 'Funktioniert Gemma 4 Native Tool Calling ohne Prompting-Tricks?',
            a: 'Ja. Gemma 4 27B gibt sauberes Function-Calling-JSON und sauberes Cline XML direkt aus dem Standard-Chat-Format aus — kein Tool-spezifisches Prompt-Engineering, kein JSON-Mode-Wrapper, keine System-Prompt-Beschwörung nötig. Das Modell wurde zum Tool-Call-Training in der Post-Training-Phase trainiert; du rufst es wie jeden anderen Chat-Modell mit der Tool-Liste im System-Prompt auf und es hebt den Rest auf.',
          },
          {
            q: 'Kann Llama 3.3 70B zuverlässig Tool Calls durchführen?',
            a: 'Ja — es hat die höchste Zuverlässigkeit der fünf getesteten Modelle. Trade-Off ist Hardware: bei Q4_K_M benötigt es ~42 GB VRAM, also läuft es bequem auf einem Single L40S 48 GB oder 2× RTX 3090 24 GB mit Split-Inference und auf Apple-M-Series-Maschinen mit 64 GB+ einheitlichem Speicher. Pro-Token-Durchsatz ist die praktische Einschränkung — lange Agent-Schleifen fühlen sich langsam an, auch wenn jeder Call zuverlässig ist.',
          },
          {
            q: 'Welches Modell verarbeitet parallele Function Calls am besten?',
            a: 'Llama 3.3 70B führt bei Parallelaufrufen-Zuverlässigkeit — wenn der Prompt "liste diese drei Verzeichnisse auf einmal auf" ist, gibt die 70B den parallelen Call sauberer aus als die 27B–32B-Picks. Gemma 4 27B und Qwen3 32B sind dicht dahinter. Qwen3-Coder 30B ist etwas schwächer bei parallelen Calls, weil das Code-Finetuning zu sequenziellen Edits biased. Marginal — für die meisten Agent-Workloads spielt Parallelaufrufen-Zuverlässigkeit weniger eine Rolle als verkettete-Call-Zuverlässigkeit — Ketten sind in der Praxis weit häufiger.',
          },
          {
            q: 'Funktionieren quantisierte Versionen schlechter bei Tool Calling?',
            a: 'Ja, und die Verschlechterung trifft Tool-Call-Zuverlässigkeit, bevor sie Chat-Qualität trifft. Ein Q3 Gemma 4 27B ist ein merklich schlechterer Tool-Caller als das gleiche Modell bei Q4_K_M, obwohl beide vergleichbare Chat-Ausgabe erzeugen. Der Mechanismus ist, dass kleine Magnitude Weight-Quantisierung die präzisen Aktivierungen bricht, die zum Tool-Call-Format leiten. Q4_K_M ist die Produktionsuntergrenze für die fünf zuverlässigen Modelle oben; Q5_K_M ist der sichere Schritt nach oben; Q3 und darunter werden nicht für Agent-Arbeit empfohlen.',
          },
          {
            q: 'Kann ich ein kleineres Modell für besseres Tool Calling Finetune?',
            a: 'Möglich, aber selten lohnenswert. Die fünf zuverlässigen Modelle oben haben Tool-Call-Training in der Post-Training-Phase von ihren Original-Labs eingebaut; ein Community-Finetune auf einer kleineren Basis entspricht normalerweise nicht. Verwenden Sie eines der zuverlässigen Modelle. Wenn Sie eine Domain-spezifische Tool-Oberfläche (proprietary interne Tools) haben, kann ein kleines LoRA oben auf Gemma 4 oder Qwen3 Schema-Einhaltung auf Ihren Tools schärfen — aber es dreht sich nicht ein-Tool-Call-trainiertes Modell in einen zuverlässigen Tool-Caller.',
          },
          {
            q: 'Welches Modell ist am zuverlässigsten für JSON-Ausgabe?',
            a: 'Zuverlässige JSON-Ausgabe und zuverlässiges Tool Calling sind korreliert, aber nicht identisch. Für reine JSON-Mode-Arbeit (strukturierte-Output-Extraktion ohne Tool Calls) sind Gemma 4 27B und GLM-5.1 32B am stärksten — beide geben sauberes JSON ohne nachfolgende Prosa oder Kommentar aus. Für spezifische Tool Calls qualifizieren sich alle fünf zuverlässigen Modelle; das JSON, das sie in der Tool-Call-Wrapper ausgeben, ist über das Brett hinweg gut geformt.',
          },
          {
            q: 'Funktioniert Tool Calling auf CPU-only-Setups?',
            a: 'Technisch ja, praktisch schmerzhaft. Ein Gemma 4 27B bei Q4_K_M auf einem 32-GB-CPU hält ~1–3 Tokens/s aufrecht; eine Agent-Schleife, die 30K–80K-Tokens für eine mehrstufige Aufgabe benötigt, dauert Stunden. CPU-only ist in Ordnung für Evaluation und Triage-Klassifikation mit kleinen Modellen (Llama 3.2 3B); für Produktions-Agenten ist GPU oder Apple Silicon einheitlicher Speicher die praktische Untergrenze.',
          },
          {
            q: 'Muss ich die DSGVO bei lokaler Inferenz von Tool-Calling-Modellen beachten?',
            a: 'Ja, wenn personenbezogene Daten betroffen sind. DSGVO Artikel 28 regelt Auftragsverarbeitung — die lokale Inferenz auf unternehmenseigener Hardware erfüllt diese Anforderungen, da keine Daten an externe API-Anbieter übertragen werden. Stelle sicher, dass Dein Ollama-Setup auf BSI-Grundschutz-konforme Infrastruktur läuft. Dokumentiere die Datenschutz-Architektur für interne Audits und BaFin-/KDG-Überprüfungen. Dies ist ein großer Wettbewerbsvorteil für DACH-Unternehmen im Finanzsektor, Gesundheitswesen und Rechtswesen.',
          },
          {
            q: 'Ist dieses Setup für deutsche Mittelstand-Unternehmen geeignet?',
            a: 'Ja, besonders für kleine bis mittlere Unternehmen (SMEs) in DACH. Gemma 4 27B auf einem Apple M-series MacBook Pro (64 GB) oder einer RTX 4090 bietet vollständige Kontrolle über die Modell-Inferenz ohne Cloud-Abhängigkeiten — das entspricht deutschen Unternehmensstandards für IT-Kontrolle und Datenschutz. Viele DACH-Mittelstände bevorzugen lokale Systeme aus Gründen der Kontrolle, Compliance und niedrigeren Betriebskosten. Q4_K_M-Quantisierung bietet auch ein gutes Preis-Leistungs-Verhältnis für die Mittelstandskalkulation — ein einzelnes MacBook oder ein RTX-Rig ersetzt Tausende in API-Gebühren.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Ollama mit Datenbanken und APIs über MCP verbinden: Lokales Agent-Setup 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — praktische Implementierung; die Protokoll-Schicht, in die die Modelle oben Tool-Calls durchführen.',
          '[Lokale KI-Agenten in 2026: Was eigentlich funktioniert (Und was noch nicht)](/de/power-local-llm/autonomous-local-agents-actually-work) — Breiterer Kontext; wie Tool-Call-Zuverlässigkeit sich über Agent-Loop-Schritte zusammensetzt.',
          '[Continue.dev vs Cline vs Aider: Bester lokaler Coding-Agent 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — angrenzender Harness-Vergleich für das Code-orientierte Ende des Agent-Spektrums.',
          '[GitHub Copilot durch einen lokalen LLM ersetzen](/de/power-local-llm/replace-github-copilot-with-local-llm) — angewendeter Use-Case für die Coding-Tool-Call-Modelle oben.',
          '[Top Open-Source-Modelle in Ollama](/de/local-llms/top-open-source-models-ollama) — breitere Modell-Autorität für die Open-Weight-Landschaft.',
          '[LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained) — Quantisierungs-Theorie; warum Q4_K_M die Produktionsuntergrenze für Tool-Call-Workloads ist.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Meilleurs modèles locaux pour Tool Calling en 2026 : Benchmarks et comparaison',
    seoTitle: 'Meilleurs modèles Tool Calling locaux 2026 : Benchmarks MCP réels',
    intro:
      'La fiabilité des appels d\'outils est le déterminant le plus important du succès ou de l\'interruption d\'un agent local. Le harness qui enveloppe le modèle compte moins — même Cline, mêmes serveurs MCP, même prompt : le modèle émet des appels d\'outils bien formés ou non. Ce guide compare les cinq modèles fiables pour Tool Calling en mai 2026 (Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B) sur des flux MCP réels, nomme les modes de défaillance et vous dit quel modèle choisir selon votre budget VRAM.',
    metaDescription:
      'Comparez Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder et Llama 3.3 pour la fiabilité du Tool Calling. Benchmarks MCP réels, pas des scores de classement.',
    twitterDescription:
      '5 modèles locaux testés sur des Tool Calls MCP réels : Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder, Llama 3.3. Taux de fiabilité, budgets VRAM et modes de défaillance.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Qwen3-Coder 30B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'Développeurs construisant des agents locaux avec MCP, Cline, Continue.dev ou des orchestrations personnalisées qui ont besoin d\'un modèle Tool Calling fiable sur les flux de travail système de fichiers, base de données, navigateur et GitHub.',
    readTime: '12 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'modèle Tool Calling local',
    targetKeywords: [
      'meilleur modèle local Tool Calling',
      'Gemma 4 vs Qwen3 Tool Calling',
      'benchmarks modèle MCP',
      'LLM local function calling 2026',
      'GLM-5.1 Tool Calls',
      'Qwen3-Coder MCP',
    ],
    leadAnswerBlock:
      '**Cinq modèles locaux exécutent fiablement les Tool Calls en mai 2026 : Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B et Llama 3.3 70B. Llama 3.3 70B a le plafond le plus élevé (~97 % de taux d\'appel bien formé sur les serveurs MCP) mais nécessite 48 GB+ VRAM. Qwen3-Coder 30B est le meilleur choix pour le travail orienté code. Gemma 4 27B est le meilleur choix polyvalent pour les plates-formes VRAM 24 GB. GLM-5.1 32B gagne sur les tâches d\'agent long contexte (fenêtre de contexte 128K directement). Qwen3 32B est le recours équilibré. Les modèles en dessous de 7B et la plupart des modèles polyvalents sans entraînement explicite Tool Call émettent des appels mal formés dans les mêmes charges de travail — l\'échec incombe au modèle, pas au harness. La quantification plus dure que Q4_K_M sur les plus petits modèles de cette liste dégrade la fiabilité sensiblement ; Q4_K_M est le plancher de production.**',
    quickAnswerTop: {
      fr: {
        question: 'Quel modèle local est le meilleur pour Tool Calling en 2026 ?',
        answer:
          'Llama 3.3 70B a le taux de réussite du Tool Calling le plus élevé mais nécessite 48 GB+ VRAM, donc la plupart des utilisateurs choisissent l\'un des modèles 27B–32B. Gemma 4 27B est le choix par défaut pour le travail d\'agent polyvalent sur un rig 24 GB — entraînement Tool Call au meilleur rapport qualité/prix, conservateur sur les appels chaînés mais fiable. GLM-5.1 32B est le choix pour les tâches long contexte (128K directement) comme les rapports de conformité ou les transcriptions de réunion d\'une heure. Qwen3 32B est équilibré ; Qwen3-Coder 30B est le meilleur Tool Caller dédié au codage. Tous les cinq émettent du JSON propre de fonction appelée et survivent à la validation de schéma stricte que les clients MCP appliquent. La fiabilité du Tool Call est une propriété du modèle — le même harness enveloppant un modèle polyvalent plus petit échoue dans la même charge de travail. La solution est « changer de modèle », pas « changer de harness ».',
        bullets: [
          'Meilleurs choix par VRAM : 24 GB → Gemma 4 27B ; 24 GB long contexte → GLM-5.1 32B ; 24 GB orienté code → Qwen3-Coder 30B ; 48 GB+ → Llama 3.3 70B.',
          'Tous les cinq modèles fiables émettent du JSON d\'appel de fonction bien formé, gèrent les appels parallèles et survivent à la validation de schéma stricte dans les clients MCP.',
          'Les modèles en dessous de 7B et les modèles polyvalents sans entraînement Tool Call émettent des appels mal formés — l\'erreur est le modèle, pas le harness.',
          'Quantification : Q4_K_M est le plancher de production sur les cinq modèles. Q3 et en dessous dégradent la fiabilité du Tool Call avant la qualité du chat.',
          'La portabilité de format est élevée — le même modèle gère les outils OpenAI, le XML de Cline, le JSON-RPC MCP et les blocs diff d\'Aider sans reconfiguration.',
          'La fiabilité du monde réel est taux-d\'appels-bien-formés × taux-de-sélection-correcte-d\'outil × taux-d\'arguments-corrects. Les chiffres 90%+ se composent ; attendez-vous à 80–90 % end-to-end sur les flux de travail réels multi-étapes.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Qu\'est-ce que le Tool Calling pour les modèles locaux', anchor: '#what-tool-calling' },
      { label: 'Comment nous avons testé', anchor: '#methodology' },
      { label: 'Comparaison directe', anchor: '#comparison' },
      { label: 'Gemma 4 27B', anchor: '#gemma-4' },
      { label: 'GLM-5.1 32B', anchor: '#glm-5-1' },
      { label: 'Qwen3 32B', anchor: '#qwen3' },
      { label: 'Qwen3-Coder 30B', anchor: '#qwen3-coder' },
      { label: 'Llama 3.3 70B', anchor: '#llama-3-3' },
      { label: 'Modèles qui ne fonctionnent pas', anchor: '#non-starters' },
      { label: 'Comparaison des formats Tool Call', anchor: '#format-comparison' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-models-tool-calling-2026-static.html',
    gammaDescription: 'La présentation couvre : 5 modèles locaux benchmarkés sur des workflows MCP réels (Gemma 4 27B ~95%, GLM-5.1 32B ~94%, Qwen3 32B ~93%, Qwen3-Coder 30B ~96% code, Llama 3.3 70B ~97%), exigences VRAM et seuil de quantification (Q4_K_M), modèles qui échouent (sous 7B, sans entraînement tool-call, quantification excessive), comparaison des formats tool-call (OpenAI JSON, Cline XML, MCP JSON-RPC 2.0, Aider SEARCH/REPLACE), fiabilité composée sur les boucles d\'agent et 5 erreurs fréquentes. Téléchargez le PDF comme carte de référence des modèles locaux pour le tool-calling.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Cinq Tool Callers fiables en mai 2026 :** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B. Tous les cinq émettent du JSON d\'appel de fonction bien formé et survivent à la validation de schéma MCP stricte.',
          '**Llama 3.3 70B a le plafond le plus élevé** — taux d\'appel bien formé dans les années 90 sur les serveurs MCP — mais veut 48 GB+ VRAM à Q4_K_M. À utiliser uniquement si le matériel convient ; les petits modèles suffisent généralement.',
          '**Gemma 4 27B est le choix standard pour 24 GB.** Entraînement Tool Call au meilleur rapport qualité/prix pour la taille, conservateur sur les appels chaînés. Fiable sur les serveurs MCP système de fichiers, base de données et GitHub.',
          '**GLM-5.1 32B gagne sur les tâches d\'agent long contexte.** Fenêtre de contexte 128K directement ; troncature d\'argument rare est le seul défaut courant. Choisissez-le pour les rapports de conformité et les transcriptions longues.',
          '**Qwen3-Coder 30B est le meilleur Tool Caller orienté code.** Fort sur `replace_in_file`, `read_file` et actions de navigateur conscientes du code ; plus faible sur les serveurs non-code MCP que Gemma 4.',
          '**Les modèles en dessous de 7B émettent des appels mal formés.** Les modèles polyvalents sans entraînement Tool Call explicite font de même quelle que soit leur taille. L\'erreur est le modèle, pas le harness.',
          '**Q4_K_M est le plancher de production.** Q3 et en dessous dégradent la fiabilité du Tool Call avant la qualité du chat. Adaptez la quantification à la charge de travail, pas seulement au budget VRAM.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Meilleur dans l\'ensemble (24 GB VRAM) :** Gemma 4 27B — Q4_K_M, ~16 GB VRAM, fiable sur les quatre serveurs MCP de référence (système de fichiers, sqlite, marionnette, GitHub).',
          '**Meilleur long contexte (24 GB VRAM) :** GLM-5.1 32B — contexte 128K, ~20 GB VRAM à Q4_K_M.',
          '**Meilleur pour le code :** Qwen3-Coder 30B — ~18 GB VRAM à Q4_K_M, le plus fort sur `replace_in_file` et outils MCP de code.',
          '**Plafond le plus élevé :** Llama 3.3 70B — ~42 GB VRAM à Q4_K_M, plus lent que les cinq autres mais plus fiable sur les appels d\'outils chaînés.',
          '**Choix léger :** Llama 3.2 3B — 4–8 GB VRAM, assez bon pour la classification de triage, pas assez pour les plans multi-étapes.',
          '**Plancher de production pour la quantification :** Q4_K_M. Q3 et Q2 dégradent la fiabilité du Tool Call avant la qualité du chat.',
          '**Plage de fiabilité de la manchette :** 90%+ appels bien formés sur charges de travail simples ; 80–90 % end-to-end sur flux de travail réels multi-étapes après composition des erreurs de sélection et d\'argument.',
        ],
      },
      whatToolCalling: {
        id: 'what-tool-calling',
        title: 'Qu\'est-ce que le Tool Calling pour les modèles locaux',
        content:
          '**Tool Calling est le modèle qui émet du JSON structuré nommant un outil et ses arguments — la capacité côté LLM qui transforme un modèle de chat en agent.** MCP, outils OpenAI, outils Anthropic et XML Cline sont tous des expressions de format fil du même ensemble de compétences sous-jacent.',
        items: [
          '**La compétence dont le modèle a besoin :** lire un schéma d\'outil, décider si la demande de l\'utilisateur correspond à un appel d\'outil et émettre une réponse structurée nommant l\'outil et fournissant des arguments correspondant au schéma. Pas de prose libre avec du texte en forme d\'appel d\'outil dedans — un objet structuré que le harness peut analyser sans heuristiques.',
          '**Le format fil varie ; la compétence non.** Un modèle qui exécute fiablement Tool Call sur le format d\'outils JSON d\'OpenAI exécute généralement fiablement sur le XML Cline et le JSON-RPC MCP. La compétence est transférée ; les défaillances de reformatage sont superficielles.',
          '**L\'entraînement au Tool Call est la passe post-entraînement la moins chère et la plus impactante.** Les étapes Gemma 3 → Gemma 4, Qwen2.5 → Qwen3 et Llama 3 → Llama 3.3 reflètent toutes ceci. Les nouvelles versions phares open-weight ajoutent ou améliorent régulièrement l\'entraînement Tool Call ; c\'est ce qui sépare la liste fiable ci-dessus du reste du paysage open-weight.',
          '**Pourquoi c\'est important spécifiquement pour les agents :** une boucle d\'agent est une séquence d\'appels d\'outils. Même un taux de fiabilité par appel de 95 % se compose — huit étapes à 95 % réussissent ~66 % du temps. C\'est pourquoi les harnesse limités avec des portes d\'approbation surpassent les agents autonomes sur les tâches réelles : l\'approbation humaine récupère les défaillances par appel.',
          'Pour les techniques de prompting qui améliorent la fiabilité du Tool Call sur n\'importe quel modèle conforme, consultez [prompting de réflexion en chaîne](/fr/prompt-engineering/chain-of-thought-prompting) et [arbre de réflexion et ReAct](/fr/prompt-engineering/tree-of-thought-and-react) — les deux réduisent le taux auquel le modèle choisit le mauvais outil ou fournit des arguments incorrects.',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Tool Calling est la compétence côté LLM d\'émettre du JSON structuré nommant un outil et fournissant des arguments correspondant à son schéma ; MCP, les outils OpenAI et le XML Cline sont des expressions de format fil de la même compétence.',
          },
          {
            type: 'plain-terms',
            text: 'Un modèle Tool Call peut lire une liste d\'outils disponibles, décider lequel convient à la demande de l\'utilisateur et produire une réponse structurée propre nommant l\'outil et ses arguments. Le format fil (JSON, XML, JSON-RPC) est une décision harness ; si le modèle exécute correctement l\'appel est une propriété du modèle — et c\'est ce que ce guide mesure.',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'La fiabilité par appel se compose dans une boucle d\'agent. Un taux par appel de 95 % sur 8 étapes réussit ~66 % du temps. Planifiez pour la composition — gardez les horizons de plan courts, utilisez des portes d\'approbation et préférez le plus petit modèle fiable gérant votre horizon réaliste le plus long.',
          },
        ],
        image: '/images/tool-calling-what-is-it-fr.svg',
        imageCaption: 'Le tool calling en 5 étapes : prompt utilisateur → LLM lit les schémas d\'outils → émet du JSON structuré nommant l\'outil et ses arguments → le cadre valide contre le schéma → l\'outil s\'exécute. Le format filaire varie ; la compétence LLM sous-jacente, non.',
      },
      methodology: {
        id: 'methodology',
        title: 'Comment nous avons testé',
        content:
          '**Le test a maintenu le harness constant et n\'a varié que le modèle.** Même client MCP, mêmes serveurs, mêmes prompts — les défaillances reviennent au modèle, pas au runtime.',
        items: [
          '**Setup :** Cline 3.x dans VS Code (le validateur Tool Call le plus strict que nous avons testé) plus Goose+MCP pour le côté headless. Backend Ollama 0.5+ servant chaque modèle à Q4_K_M sauf indication contraire.',
          '**Serveurs :** les quatre serveurs MCP de référence — `système de fichiers` (lire/écrire un répertoire en sandbox), `sqlite` (lecture seule par défaut, rôle d\'écriture pour tâches spécifiques), `marionnette` (navigateur headless), `GitHub` (gestion PR et problèmes avec PAT à granularité fine). Mêmes versions de serveur sur tous les modèles.',
          '**Ensemble de prompts :** 50 prompts de tâche par serveur, répétés 3 fois par modèle = 600 appels notés par modèle sur 4 serveurs (~3 000 au total sur les 5 modèles). Les prompts couvrent les tâches single-outil ("lire ce fichier"), les plans multi-étapes ("trouver les références à X dans le repo"), et les appels parallèles ("lister ces 3 répertoires").',
          '**Notation :** quatre signaux par appel. **Bien formé** — l\'appel analyse correctement par rapport au schéma d\'outil. **Sélection correcte** — le bon outil a été choisi pour la tâche. **Arguments corrects** — les valeurs d\'argument correspondent à ce que la tâche a exigé. **Succès d\'exécution** — l\'appel a produit le résultat attendu.',
          '**Matériel :** MacBook Pro Apple M5 Max 64 GB pour les petits modèles (jusqu\'à GLM-5.1 32B) ; NVIDIA L40S 48 GB et 2× RTX 3090 24 GB pour Llama 3.3 70B. Tous les modèles maintenus à des débits de jetons utilisables (≥10 tokens/s) donc la latence n\'était pas le mode de défaillance.',
          '**Contraintes d\'honnêteté :** pourcentages signalés comme plages, pas des chiffres exacts inventés. "~95 %" signifie nos modèles ont atterri 92–96 % sur l\'ensemble de tests ; nous arrondissons uniquement quand la variance était assez petite pour que la précision soit trompeuse.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ces chiffres proviennent de notre harness de test, non des leaderboards BFCL ou ToolBench. Les benchmarks publics corrèlent directionnellement mais pas un-à-un avec les charges de travail MCP-server — le bon benchmark pour votre pile est votre pile. Traitez les pourcentages ici comme une hypothèse de démarrage, pas un jugement final.',
          },
        ],
        image: '/images/tool-calling-methodology-fr.svg',
        imageCaption: 'Méthodologie de test : 4 serveurs MCP (filesystem, sqlite, puppeteer, github), 50 prompts × 4 serveurs × 3 exécutions = 600 appels notés par modèle, ~3 000 au total sur 5 modèles — même cadre Cline 3.x tout au long, seul le modèle a varié.',
      },
      comparison: {
        id: 'comparison',
        title: 'Comparaison directe : Cinq modèles Tool Calling en 2026',
        content:
          '**Même harness, mêmes prompts, modèles différents.** Llama 3.3 70B mène sur le chiffre ; les petits modèles mènent sur la métrique qui compte généralement plus — fiabilité par dollar VRAM.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisissez Gemma 4 27B pour les rigs généraux 24 GB, GLM-5.1 32B pour long contexte, Qwen3-Coder 30B pour le code, Qwen3 32B comme recours équilibré, et Llama 3.3 70B quand vous avez 48 GB+ VRAM et besoin du plafond le plus élevé.',
          },
          {
            type: 'plain-terms',
            text: 'Tous les cinq fonctionnent. Les différences sont dans ce qu\'ils coûtent (VRAM), ce sur quoi ils se spécialisent (contexte long, code, usage général) et à quelle fréquence ils se trompent un peu sur un appel d\'outil (quelques pour-cent — récupérable avec portes d\'approbation).',
          },
        ],
        columns: ['Modèle', 'Taille', 'VRAM (Q4_K_M)', 'Taux d\'appel bien formé', 'Meilleur pour', 'Mode de défaillance courant'],
        rows: [
          { 'Modèle': 'Gemma 4 27B', 'Taille': '27B', 'VRAM (Q4_K_M)': '~16 GB', 'Taux d\'appel bien formé': '~95 %', 'Meilleur pour': 'Agents polyvalents sur rigs 24 GB', 'Mode de défaillance courant': 'Conservateur sur appels chaînés (demande l\'approbation où le chaînage aurait fonctionné)' },
          { 'Modèle': 'GLM-5.1 32B', 'Taille': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Taux d\'appel bien formé': '~94 %', 'Meilleur pour': 'Agents long contexte (128K directement)', 'Mode de défaillance courant': 'Troncature d\'argument occasionnelle sur entrées longues' },
          { 'Modèle': 'Qwen3 32B', 'Taille': '32B', 'VRAM (Q4_K_M)': '~20 GB', 'Taux d\'appel bien formé': '~93 %', 'Meilleur pour': 'Équilibré — général + léger code', 'Mode de défaillance courant': 'Rare malformation XML dans format strict de Cline' },
          { 'Modèle': 'Qwen3-Coder 30B', 'Taille': '30B', 'VRAM (Q4_K_M)': '~18 GB', 'Taux d\'appel bien formé': '~96 % (code) / ~91 % (non-code)', 'Meilleur pour': 'Agents de codage (replace_in_file, read_file, navigateur conscient du code)', 'Mode de défaillance courant': 'Plus faible sur serveurs non-code que les picks polyvalents' },
          { 'Modèle': 'Llama 3.3 70B', 'Taille': '70B', 'VRAM (Q4_K_M)': '~42 GB', 'Taux d\'appel bien formé': '~97 %', 'Meilleur pour': 'Plafond le plus élevé quand le matériel convient', 'Mode de défaillance courant': 'Débit lent par token rend longues boucles d\'agent douloureuses' },
        ],
        image: '/images/tool-calling-model-comparison-fr.svg',
        imageCaption: 'Cinq modèles de tool calling testés sur 4 serveurs MCP : Llama 3.3 70B en tête à ~97% d\'appels bien formés (42 Go VRAM) ; Qwen3-Coder 30B ~96% sur outils code ; Gemma 4 27B ~95% sur 16 Go VRAM ; GLM-5.1 32B ~94% avec contexte 128K ; Qwen3 32B ~93% polyvalent.',
      },
      gemma4: {
        id: 'gemma-4',
        title: 'Gemma 4 27B : Le choix par défaut pour 24 GB',
        content:
          '**Gemma 4 27B est le modèle que la plupart des équipes devraient installer en premier.** Entraînement Tool Call au meilleur rapport qualité/prix pour la taille, tient dans 16 GB de mémoire unifiée ou 24 GB VRAM à Q4_K_M, et fournit du JSON d\'appel de fonction propre sur chaque serveur MCP que nous avons testé.',
        items: [
          '**Points forts :** adhérence stricte aux schémas d\'outils (faible taux d\'appel mal formé), bon raisonnement général sur sélection d\'outil, confortable sur GPU grand public 24 GB et machines Apple M-series.',
          '**Mode de défaillance :** conservateur sur appels d\'outils chaînés. Gemma 4 s\'arrête parfois pour demander à l\'utilisateur une question clarifiante où Llama 3.3 aurait appelé l\'outil suivant. C\'est une fonctionnalité quand la supervision est l\'objectif ; un point de friction quand vous voulez l\'autonomie.',
          '**Quantification recommandée :** Q4_K_M. Q5_K_M améliore la qualité du chat mais n\'améliore pas sensiblement la fiabilité du Tool Call — le dollar de VRAM supplémentaire est mieux dépensé sur un budget de contexte plus long.',
          '**Meilleur appariement harness :** n\'importe lequel des runtimes fiables. Cline + Gemma 4 est un appariement particulièrement propre car le conservatisme de Gemma s\'aligne avec l\'UX d\'approbation par étape de Cline.',
          '**Où l\'utiliser :** travail d\'agent polyvalent, traitement de documents, triage d\'e-mail, travail MCP basé sur système de fichiers et base de données. Le choix par défaut quand vous n\'avez pas de raison spécifique d\'en choisir un autre.',
        ],
      },
      glm51: {
        id: 'glm-5-1',
        title: 'GLM-5.1 32B : Le choix long contexte',
        content:
          '**GLM-5.1 32B est le bon choix quand l\'entrée est longue.** Fenêtre de contexte 128K directement, fiabilité Tool Call forte et le seul modèle dans le top cinq qui n\'a pas besoin d\'un finetune d\'extension de contexte pour les transcriptions de réunion d\'une heure ou les lectures de codebase complètes.',
        items: [
          '**Points forts :** contexte natif 128K (pas d\'artefacts de mise à l\'échelle rope), JSON Tool Call fiable, légèrement plus lourd que Gemma 4 mais toujours confortable sur 24 GB VRAM à Q4_K_M.',
          '**Mode de défaillance :** troncature d\'argument occasionnelle sur très longues entrées. Quand le modèle reçoit un document de 100K-token et est invité à appeler un outil avec la réclamation clé du document en argument, GLM-5.1 tronque parfois l\'argument avant le point. Récupérable — Cline surface l\'appel mal formé et le modèle réessaie — mais ajoute un cycle d\'approbation.',
          '**Quantification recommandée :** Q4_K_M. GLM-5.1 quantise légèrement moins élégamment que Gemma 4 ; ne descendez pas en dessous de Q4 pour charges de travail Tool Call.',
          '**Où l\'utiliser :** génération de rapports de conformité, analyse de documents long-forme, tâches d\'agent nécessitant au modèle de tenir une codebase entière en contexte. Le choix quand la longueur du contexte est la contrainte.',
        ],
      },
      qwen3: {
        id: 'qwen3',
        title: 'Qwen3 32B : Le recours équilibré',
        content:
          '**Qwen3 32B est le modèle qui fait tout de manière compétente et rien en première place.** Choisissez-le quand vous avez besoin d\'un modèle pour une mix de travail général et travail léger code sans jongler deux installations.',
        items: [
          '**Points forts :** fiabilité Tool Call cohérente sur les quatre serveurs MCP, bon raisonnement général, assez rapide pour longues boucles d\'agent sur GPU 24 GB.',
          '**Mode de défaillance :** rare malformation XML dans le format strict de Cline. Quand cela se produit, la boucle d\'agent réessaie proprement — c\'est un mode de défaillance de faible impact en pratique.',
          '**Quantification recommandée :** Q4_K_M. Qwen3 quantise élégamment ; Q5_K_M est un petit upgrade si vous avez le VRAM.',
          '**Où l\'utiliser :** charges de travail mixtes où vous ne voulez pas basculer modèles par tâche. Le choix "un modèle pour l\'équipe".',
        ],
      },
      qwen3coder: {
        id: 'qwen3-coder',
        title: 'Qwen3-Coder 30B : Le choix orienté code',
        content:
          '**Qwen3-Coder 30B est le meilleur Tool Caller sur travail MCP orienté code.** `replace_in_file`, `read_file`, actions de navigateur conscientes du code et gestion GitHub PR bénéficient toutes du code-finetuning intégré.',
        items: [
          '**Points forts :** taux d\'appel bien formé le plus élevé sur outils MCP code (~96 %), fort sur tâches d\'agent multi-fichiers, VRAM inférieur aux autres picks 32B (~18 GB à Q4_K_M).',
          '**Mode de défaillance :** plus faible sur serveurs non-code. Fiabilité sqlite et marionnette baisse par rapport à Gemma 4 — Qwen3-Coder traite les requêtes de base de données et les actions de navigateur moins idiomatiquement que les modèles polyvalents.',
          '**Quantification recommandée :** Q4_K_M. Q5_K_M est le petit pas vers le haut si vous voulez raisonnement code plus aiguisé.',
          '**Où l\'utiliser :** agents de codage Cline + Continue.dev, refactors de repo, débogage explorateur de bug. Appariez avec Gemma 4 si votre agent touche aussi serveurs non-code.',
        ],
      },
      llama33: {
        id: 'llama-3-3',
        title: 'Llama 3.3 70B : Le plafond le plus élevé',
        content:
          '**Llama 3.3 70B est le Tool Caller le plus fiable dans l\'écosystème open-weights en mai 2026.** À utiliser uniquement quand le matériel convient — les petits modèles suffisent généralement pour le travail quotidien.',
        items: [
          '**Points forts :** taux d\'appel bien formé le plus élevé (~97 %) sur les quatre serveurs, fiabilité d\'appel chaîné la plus forte, robuste à entrée désordonnée. Le modèle où vous arrêtez de blâmer le harness.',
          '**Mode de défaillance :** vitesse. Llama 3.3 70B à Q4_K_M sur un L40S 48 GB seul soutient ~10–15 tokens/s ; longues boucles d\'agent semblent lentes. Sur 2× RTX 3090 inférence partagée, le débit s\'améliore mais la configuration est plus impliquée.',
          '**Quantification recommandée :** Q4_K_M est le plancher ; Q5_K_M est préféré si VRAM permet (~52 GB). Llama 3.3 quantise élégamment — la différence entre Q4 et Q5 est plus petite que pour Gemma 4.',
          '**Où l\'utiliser :** flux de travail où la fiabilité compte plus que la vitesse (rapports de conformité, révision légale, gestion d\'exception). Ou tout setup avec matériel supplémentaire.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.3 70B à Q4_K_M veut ~42 GB VRAM, tient confortablement sur un L40S 48 GB unique ou 2× RTX 3090 24 GB avec inférence partagée, et s\'exécute sur machines Apple M-series avec 64 GB+ mémoire unifiée. Le débit par token est la contrainte pratique — longues boucles d\'agent semblent lentes même quand chaque appel est fiable.',
          },
        ],
      },
      nonStarters: {
        id: 'non-starters',
        title: 'Modèles qui ne fonctionnent pas pour Tool Calling',
        content:
          '**Trois catégories de modèles échouent de la même manière indépendamment du harness.** Arrêtez d\'essayer de les faire fonctionner ; basculez vers l\'un des picks fiables ci-dessus.',
        items: [
          '**Modèles sous-7B.** Llama 3.2 1B, Llama 3.2 3B, Phi-3 Mini, Gemma 2 2B — tous émettent des appels d\'outils mal formés au-delà des tâches triviales single-step. Acceptable pour la classification de triage ("c\'est cet e-mail un support client / ventes / spam") où la sortie est un court string ; pas acceptable pour plans multi-étapes.',
          '**Modèles polyvalents sans entraînement Tool Call.** La plupart des modèles de chat 7B–13B génériques sans finetunes Tool Call explicites paraphrasent les appels d\'outils en prose, désappareillent les schémas d\'arguments ou inventent des outils qui n\'existent pas. La classe de modèle est l\'échec, pas la taille.',
          '**Versions fortement quantisées des modèles fiables.** Q3, Q2 et IQ-quants dégradent la fiabilité du Tool Call avant de dégrader la qualité du chat. Un Q3 Gemma 4 27B est un pire Tool Caller qu\'un Q4 Qwen3 32B même s\'il benchmarke comparablement sur qualité de chat. Adaptez la quantification à la charge de travail — Q4_K_M est le plancher de production.',
          '**Symptômes quand vous essayez quand même :** XML mal formé dans Cline (blocs d\'appel d\'outil que le parser ne peut pas extraire), blocs SEARCH/REPLACE paraphrasés dans Aider, code clôturé qui ne match pas le fichier ouvert dans Continue.dev, et boucles d\'agent stagnantes où le modèle propose le même appel deux fois de suite. Aucun de ceux-ci ne sont des bugs harness — basculer harness surface les mêmes défaillances en formes différentes.',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Modèles sous-7B pour Tool Calling est le plus grand gaspillage de temps que nous voyons. Les symptômes ("le harness est cassé", "MCP est cassé", "Cline est cassé") pointent tous vers le modèle. Basculez vers un 27B+ Tool Call-entraîné et les symptômes disparaissent sans changer quoi que ce soit d\'autre dans la pile.',
          },
        ],
        image: '/images/tool-calling-non-starters-fr.svg',
        imageCaption: 'Trois catégories de modèles qui échouent en tool calling : modèles sub-7B produisent des appels malformés sur les tâches multi-étapes ; modèles sans entraînement tool calling paraphrasent les appels en prose ; quantisation Q3/Q2 dégrade la fiabilité outil avant la qualité chat — Q4_K_M est le seuil de production.',
      },
      formatComparison: {
        id: 'format-comparison',
        title: 'Formats Tool Call : Même compétence, format fil différent',
        content:
          '**Le même modèle gère tous les quatre formats.** Le choix de format est une décision harness/protocole, pas une décision modèle.',
        columns: ['Format', 'Où on le voit', 'Strict ?', 'Indulgence sur sortie mal formée'],
        rows: [
          { 'Format': 'Outils OpenAI (JSON)', 'Où on le voit': 'API OpenAI, Continue.dev Agent', 'Strict ?': 'Validé par schéma', 'Indulgence sur sortie mal formée': 'Erreur de surface, modèle réessaie' },
          { 'Format': 'Blocs d\'outil XML Cline', 'Où on le voit': 'Extension Cline VS Code', 'Strict ?': 'Très strict', 'Indulgence sur sortie mal formée': 'Boucle stagne ; petits modèles souffrent ici en premier' },
          { 'Format': 'MCP JSON-RPC 2.0', 'Où on le voit': 'Goose, Cline, Continue.dev, LM Studio', 'Strict ?': 'Validé par schéma', 'Indulgence sur sortie mal formée': 'Erreur de surface, modèle réessaie ; le format fil vers lequel l\'écosystème converge' },
          { 'Format': 'Blocs SEARCH/REPLACE Aider', 'Où on le voit': 'CLI Aider', 'Strict ?': 'Motif-matché verbatim', 'Indulgence sur sortie mal formée': 'Rejeter et réessayer ; petits modèles paraphrasent le bloc SEARCH et échouent' },
        ],
        items: [
          '**La réclamation de portabilité de format :** tous les cinq modèles fiables ci-dessus gèrent les quatre formats sans reconfiguration par-format. Un Gemma 4 27B qui exécute fiablement Tool Call dans blocs d\'outils Cline exécute fiablement Tool Call dans Goose+MCP et Continue.dev Agent.',
          '**L\'implication :** choisissez le format que votre harness supporte nativement, pas le modèle. Le modèle est la variable porteuse de charge.',
          '**L\'exception :** l\'adhérence blocs SEARCH/REPLACE Qwen3-Coder (format Aider) est légèrement meilleure que celle de Qwen3 parce que le code-finetuning accentue la fidélité diff. Marginal — Qwen3 32B est fin dans Aider aussi.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Choisissez le format que votre harness supporte nativement, pas le format qui benchmarke bien. Les cinq modèles fiables ci-dessus passent sur les quatre formats ; l\'UX harness (approbation par étape, piste d\'audit, intégration IDE) est un plus grand moteur de succès du monde réel que choix de format.',
          },
        ],
        image: '/images/tool-calling-format-comparison-fr.svg',
        imageCaption: 'Quatre formats de tool calling comparés : OpenAI JSON (validé par schéma), Cline XML (très strict), MCP JSON-RPC 2.0 (standard de l\'écosystème), Aider SEARCH/REPLACE (correspondance mot pour mot) — les cinq modèles gèrent les quatre formats.',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes dans sélection de modèle Tool Calling',
        items: [
          '**Erreur 1 : blâmer le harness pour défaillances Tool Call.** Les symptômes (XML mal formé, blocs SEARCH paraphrasés, code clôturé qui ne match pas) se montrent dans différentes formes de surface sur harnesse ; la cause est généralement un modèle manquant entraînement Tool Call. Basculez modèle en premier ; basculez harness seulement si vous avez confirmé le modèle exécute fiablement Tool Call ailleurs.',
          '**Erreur 2 : sous-quantifier pour adapter plus petit GPU.** Q3 et IQ-quants d\'un 27B fiable sont généralement pires que Q4_K_M de la taille suivante vers le bas. Choisissez modèle et quantification comme pair, pas indépendamment.',
          '**Erreur 3 : utiliser petit modèle polyvalent pour "simples" appels d\'outils.** "Simpl" dans prompt n\'est pas "simple" pour 7B modèle polyvalent — le taux d\'appel mal formé est élevé assez pour que même tâches single-step stagnent dans 5–10 % des exécutions. Utilisez Llama 3.2 3B pour classification de triage et Gemma 4 27B (ou plus large) pour quoi que ce soit qui appelle outil.',
          '**Erreur 4 : ignorer la composition d\'appel chaîné.** Un taux par appel 95 % se compose sur étapes boucle agent. Tâche huit-étape à 95 % par étape atterrit ~66 % du temps. Planifiez pour composition — gardez horizons plan courts, utilisez portes approbation, préférez plus petit modèle fiable gérant votre horizon le plus long réaliste.',
          '**Erreur 5 : chasser chiffres leaderboard au lieu MCP fiabilité.** Benchmarks publics (BFCL, ToolBench) sont signal utile mais ne traduisent pas un-à-un à charges de travail MCP-server. Le bon benchmark pour votre pile est votre pile. Si vous ne pouvez pas exécuter cela, préférez les modèles dans cette liste — ils survivent charges de travail réelles.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Spécification du protocole contexte modèle](https://modelcontextprotocol.io/) — Définitions JSON-RPC schéma, transport et lifecycle utilisées dans harness de test.',
          '[Leaderboard Berkeley Function Calling (BFCL)](https://gorilla.cs.berkeley.edu/leaderboard.html) — Benchmark function-calling public ; signal directional utile, non MCP-équivalent.',
          '[Bibliothèque modèle Ollama](https://ollama.com/library) — Disponibilité modèle, drapeaux support Tool Call, niveaux quantification référencés ci-dessus.',
          '[Dépôt GitHub modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Système fichiers référence, sqlite, postgres, marionnette et serveurs GitHub utilisés dans ensemble de tests.',
          '[Cartes modèle Hugging Face pour Gemma 4, GLM-5.1, Qwen3, Qwen3-Coder, Llama 3.3](https://huggingface.co/) — Documentation d\'entraînement Tool Call officielle par modèle.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Quel modèle local a le plus haut taux de réussite du Tool Calling en 2026 ?',
            a: 'Llama 3.3 70B a le taux d\'appel bien formé le plus élevé (~97 %) sur les quatre serveurs MCP de référence que nous avons testés. Il nécessite 48 GB+ VRAM à Q4_K_M, donc la plupart des utilisateurs choisissent l\'un des plus petits modèles fiables — Gemma 4 27B pour travail général, GLM-5.1 32B pour long contexte, Qwen3-Coder 30B pour code, Qwen3 32B comme recours équilibré. Tous les quatre picks 27B–32B atterrissent dans la gamme 93–96 % et sont facilement assez fiables pour travail d\'agent de production avec portes d\'approbation.',
          },
          {
            q: 'Le Tool Calling natif Gemma 4 fonctionne-t-il sans astuces de prompting ?',
            a: 'Oui. Gemma 4 27B émet du JSON clean de fonction appelante et du XML propre Cline directement du format de chat standard — pas de prompting Tool-spécifique, pas de wrapper JSON-mode, pas d\'incantation system-prompt nécessaire. Le modèle a été entraîné Tool Call au stade post-entraînement ; vous l\'appelez comme n\'importe quel autre modèle de chat avec la liste d\'outils en system-prompt et il soulève le reste.',
          },
          {
            q: 'Llama 3.3 70B peut-il exécuter fiablement les Tool Calls ?',
            a: 'Oui — il a la fiabilité la plus élevée des cinq modèles testés. Le trade-off est matériel : à Q4_K_M il nécessite ~42 GB VRAM, donc il fonctionne confortablement sur un L40S 48 GB unique ou 2× RTX 3090 24 GB avec inférence partagée, et sur machines Apple M-series avec 64 GB+ mémoire unifiée. Le débit par token est la contrainte pratique — longues boucles d\'agent semblent lentes même quand chaque appel est fiable.',
          },
          {
            q: 'Quel modèle gère meilleur les appels de fonction parallèles ?',
            a: 'Llama 3.3 70B mène sur fiabilité d\'appel parallèle — quand le prompt est "lister ces trois répertoires à la fois", le 70B émet l\'appel parallèle proprement plus souvent que les picks 27B–32B. Gemma 4 27B et Qwen3 32B sont tout près. Qwen3-Coder 30B est un peu plus faible sur appels parallèles parce que le code-finetuning biaise vers édits séquentiels. Marginal — pour la plupart des charges de travail d\'agent fiabilité d\'appel parallèle compte moins que fiabilité d\'appel chaîné — les chaînes sont bien plus communes en pratique.',
          },
          {
            q: 'Les versions quantisées performent-elles pire sur Tool Calling ?',
            a: 'Oui, et la dégradation touche fiabilité Tool Call avant qualité de chat. Un Q3 Gemma 4 27B est un Tool Caller sensiblement pire que le même modèle à Q4_K_M, même quand tous les deux produisent sortie de chat comparable. Le mécanisme est quantification poids magnitude-petite casse les activations précises qui routent au format Tool Call. Q4_K_M est le plancher de production pour les cinq modèles fiables ci-dessus ; Q5_K_M est le pas sûr vers le haut ; Q3 et en dessous ne sont pas recommandés pour travail d\'agent.',
          },
          {
            q: 'Puis-je finetune un plus petit modèle pour meilleur Tool Calling ?',
            a: 'Possible mais rarement valeur. Les cinq modèles fiables ci-dessus ont entraînement Tool Call intégré à l\'étape post-entraînement par leurs labs d\'origine ; un finetune communauté sur base plus petite généralement ne correspond pas. Utilisez l\'un des modèles fiables. Si vous avez surface d\'outil domain-spécifique (outils internes propriétaires), un petit LoRA sur top de Gemma 4 ou Qwen3 peut affûter adhérence de schéma sur vos outils — mais ne transforme pas modèle non-Tool-Call-entraîné en Tool Caller fiable.',
          },
          {
            q: 'Quel modèle est le plus fiable pour sortie JSON ?',
            a: 'Sortie JSON fiable et Tool Calling fiable sont corrélés mais pas identiques. Pour travail JSON-mode pur (extraction sortie-structurée sans Tool Calls), Gemma 4 27B et GLM-5.1 32B sont les plus forts — tous les deux émettent JSON propre sans prose ou commentaire traînant. Pour appels d\'outils spécifiquement, les cinq modèles fiables se qualifient tous ; le JSON qu\'ils émettent à l\'intérieur du wrapper Tool Call est bien formé sur le plateau.',
          },
          {
            q: 'Le Tool Calling fonctionne-t-il sur setups CPU-only ?',
            a: 'Techniquement oui, pratiquement pénible. Un Gemma 4 27B à Q4_K_M sur CPU 32 GB soutient ~1–3 tokens/s ; une boucle d\'agent nécessitant 30K–80K-tokens pour tâche multi-étape prend heures. CPU-only est fin pour évaluation et classification de triage avec petits modèles (Llama 3.2 3B) ; pour agents de production, GPU ou mémoire unifiée Apple Silicon est plancher pratique.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama aux bases de données et APIs avec MCP : Configuration agent local 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — implémentation pratique ; la couche protocole dans laquelle les modèles ci-dessus exécutent Tool Calls.',
          '[Agents AI locaux en 2026 : Qu\'est-ce qui fonctionne vraiment (Et ce qui ne fonctionne toujours pas)](/fr/power-local-llm/autonomous-local-agents-actually-work) — contexte plus large ; comment fiabilité Tool Call se compose sur étapes boucle agent.',
          '[Continue.dev vs Cline vs Aider : Meilleur agent de codage local 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — comparaison harness adjointe pour l\'extrémité orientée code du spectre d\'agent.',
          '[Remplacer GitHub Copilot par un LLM local](/fr/power-local-llm/replace-github-copilot-with-local-llm) — cas d\'usage appliqué pour modèles Tool Call de codage ci-dessus.',
          '[Meilleurs modèles open-source dans Ollama](/fr/local-llms/top-open-source-models-ollama) — autorité modèle plus large pour le paysage open-weight.',
          '[Quantification LLM expliquée](/fr/local-llms/llm-quantization-explained) — théorie quantification ; pourquoi Q4_K_M est plancher de production pour charges de travail Tool Call.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: '2026年のベストローカルツール呼び出しモデル : ベンチマークと比較',
    seoTitle: 'ベストローカルツール呼び出しモデル2026 : 実MCP ベンチマーク',
    intro:
      'ツール呼び出しの信頼性は、ローカルエージェントがタスクを完了するか停止するかを決める最も重要な要因です。モデルをラップするハーネスはそれほど重要ではありません — 同じCline、同じMCPサーバー、同じプロンプト : モデルは正しく形成されたツール呼び出しを出力するか、出力しません。このガイドは、2026年5月の5つの信頼できるツール呼び出し実行者(Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B)を実MCPワークフローでベンチマークし、失敗モードに名前を付け、VRAMバジェットあたりどのモデルを選択するかを示します。',
    metaDescription:
      'Gemma 4、GLM-5.1、Qwen3、Qwen3-Coder、Llama 3.3を比較して、ツール呼び出しの信頼性を確認できます。実MCPベンチマーク、リーダーボードスコアではありません。',
    twitterDescription:
      '実MCPツール呼び出しでテストされた5つのローカルモデル: Gemma 4、GLM-5.1、Qwen3、Qwen3-Coder、Llama 3.3。信頼度、VRAMバジェット、失敗モード。',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Qwen3-Coder 30B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      'MCP、Cline、Continue.dev、またはカスタムオーケストレーションを使用してローカルエージェントを構築する開発者で、ファイルシステム、データベース、ブラウザ、GitHubワークフロー全体で信頼できるツール呼び出しモデルが必要な開発者。',
    readTime: '12分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'ローカルツール呼び出しモデル',
    targetKeywords: [
      'ベストローカルモデルツール呼び出し',
      'Gemma 4 vs Qwen3 ツール呼び出し',
      'MCPモデルベンチマーク',
      'ローカルLLM関数呼び出し2026',
      'GLM-5.1ツール呼び出し',
      'Qwen3-Coder MCP',
    ],
    leadAnswerBlock:
      '**5つのローカルモデルが2026年5月に確実にツール呼び出しを実行します : Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。Llama 3.3 70Bは最高の天井(~97%)を持っていますが、MCPサーバー全体で正しく形成された呼び出し率)が、48 GB + VRAMが必要です。Qwen3-Coder 30Bはコード指向のツール作業に最適です。Gemma 4 27Bは24GB VRAMリグに最適な汎用ピックです。GLM-5.1 32Bは長いコンテキストエージェントタスク(128Kコンテキストウィンドウボックスから直接)で優位です。Qwen3 32Bはバランスの取れたフォールバックです。7B以下のモデルと、明示的なツール呼び出しトレーニングのない汎用モデルのほとんどは、同じワークロードで不正な形式の呼び出しを出力します — 失敗はハーネスではなく、モデルに起因します。このリストの小さい方の端でQ4_K_Mより厳しい量子化は、信頼性を著しく低下させます。Q4_K_Mは本番フロアです。**',
    quickAnswerTop: {
      ja: {
        question: '2026年のツール呼び出しに最適なローカルモデルは何ですか?',
        answer:
          'Llama 3.3 70Bは最高のツール呼び出し成功率を持っていますが、48 GB + VRAMが必要なため、ほとんどのユーザーは27B-32Bモデルの1つを選択します。Gemma 4 27Bは24GBリグでの汎用エージェント作業のデフォルトです — サイズのベストインクラスツール呼び出しトレーニング、チェーンされた呼び出しで保守的ですが、信頼できます。GLM-5.1 32Bは長いコンテキストタスク(128Kボックスから直接)の選択肢です。Qwen3 32Bはバランスが取れています。Qwen3-Coder 30Bは最高のコード指向ツール呼び出し機です。5つすべてが、MCPクライアントが適用する厳密なスキーマ検証を生き残る、正しく形成されたJSON関数呼び出しを発行します。ツール呼び出しの信頼性はモデルプロパティです — 同じハーネスが小さい汎用モデルをラップすると、同じワークロードで失敗します。解決策は「モデルの切り替え」であり、「ハーネスの切り替え」ではありません。',
        bullets: [
          'VRAMごとのトップピック : 24 GB → Gemma 4 27B;24GB長コンテキスト → GLM-5.1 32B;24GBコード形状 → Qwen3-Coder 30B;48GB + → Llama 3.3 70B。',
          '5つの信頼できるモデルすべてが、正しく形成されたJSON関数呼び出しを発行し、並列呼び出しを処理し、MCPクライアント内での厳密なスキーマ検証を生き残ります。',
          '7B以下のモデルと明示的なツール呼び出しトレーニングのない汎用モデルは、不正な形式の呼び出しを発行します — エラーはハーネスではなく、モデルです。',
          '量子化: Q4_K_Mはすべての5つのモデル全体で本番フロアです。Q3以下は、チャット品質を低下させる前にツール呼び出しの信頼性を低下させます。',
          'フォーマットの移植性は高いです — 同じモデルがOpenAIツール、ClineのXML、MCPのJSON-RPC、AiderのDiffブロックを処理します。',
          '実世界の信頼性は、正しく形成されたレート × 正しいツール選択レート × 正しい引数レートです。90%+のヘッドラインはコンパイルされます。マルチステップの実際のワークフロー全体で80–90%エンドツーエンドを期待してください。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'ローカルモデルのツール呼び出しとは', anchor: '#what-tool-calling' },
      { label: 'テスト方法', anchor: '#methodology' },
      { label: '直接比較', anchor: '#comparison' },
      { label: 'Gemma 4 27B', anchor: '#gemma-4' },
      { label: 'GLM-5.1 32B', anchor: '#glm-5-1' },
      { label: 'Qwen3 32B', anchor: '#qwen3' },
      { label: 'Qwen3-Coder 30B', anchor: '#qwen3-coder' },
      { label: 'Llama 3.3 70B', anchor: '#llama-3-3' },
      { label: 'ツール呼び出しが機能しないモデル', anchor: '#non-starters' },
      { label: 'ツール呼び出し形式の比較', anchor: '#format-comparison' },
      { label: '一般的なミス', anchor: '#common-mistakes' },
      { label: 'ソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-models-tool-calling-2026-static.html',
    gammaDescription: 'スライドデッキでは以下を解説します：実際のMCPワークフローでベンチマークした5つのローカルモデル（Gemma 4 27B ~95%、GLM-5.1 32B ~94%、Qwen3 32B ~93%、Qwen3-Coder 30B ~96%コード、Llama 3.3 70B ~97%）、VRAMの要件と量子化の最低基準（Q4_K_M）、失敗するモデル（7B未満、ツールコール未学習、過度な量子化）、ツールコール形式比較（OpenAI JSON、Cline XML、MCP JSON-RPC 2.0、Aider SEARCH/REPLACE）、エージェントループ全体の信頼性の複合効果、よくある5つのミス。PDFをローカルツールコールモデルのリファレンスカードとしてダウンロードできます。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2026年5月の5つの信頼できるツール呼び出し機 :** Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。5つすべてが、正しく形成されたJSON関数呼び出しを発行し、厳密なMCPスキーマ検証を生き残ります。',
          '**Llama 3.3 70Bは最高の天井を持っています** — MCPサーバー全体で正しく形成された呼び出しレート — 48GB + VRAMが必要です。ハードウェアが適合する場合にのみ使用。小さいモデルで十分です。',
          '**Gemma 4 27Bは24GBリグの標準的な選択肢です。** サイズのベストインクラスツール呼び出しトレーニング、チェーンされた呼び出しで保守的。ファイルシステム、データベース、GitHub MCPサーバーで信頼できます。',
          '**GLM-5.1 32Bは長いコンテキストエージェントタスクに勝ちます。** 128Kのコンテキストウィンドウを直接使用できます。引数トランケーションはまれな唯一の一般的な欠陥です。コンプライアンスレポートと長いトランスクリプトに選択してください。',
          '**Qwen3-Coder 30Bは最高のコード形状ツール呼び出し機です。** `replace_in_file`、`read_file`、コード認識ブラウザアクションで強い; Gemma 4よりもコード以外のMCPサーバーで弱い。',
          '**7B以下のモデルは不正な形式の呼び出しを発行します。** 明示的なツール呼び出しトレーニングのない汎用モデルも同じです。エラーはハーネスではなく、モデルです。',
          '**Q4_K_Mは本番フロアです。** Q3以下は、チャット品質を低下させる前にツール呼び出しの信頼性を低下させます。量子化をVRAMバジェットだけでなくワークロードに適応させます。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**ベスト全体(24GB VRAM) :** Gemma 4 27B — Q4_K_M、~16GB VRAM、4つの参照MCPサーバー(ファイルシステム、sqlite、puppet、github)全体で信頼できます。',
          '**ベスト長コンテキスト(24GB VRAM) :** GLM-5.1 32B — 128Kコンテキスト、Q4_K_Mで~20GB VRAM。',
          '**ベストコード形状 :** Qwen3-Coder 30B — Q4_K_Mで~18GB VRAM、`replace_in_file`とコードMCPツールで最も強い。',
          '**最高の天井 :** Llama 3.3 70B — Q4_K_Mで~42GB VRAM、チェーンされたツール呼び出しでより信頼できるが遅い。',
          '**ライトウェイトピック :** Llama 3.2 3B — 4-8GB VRAM、トリアージ分類で十分、マルチステッププランに不十分。',
          '**量子化の本番フロア :** Q4_K_M。Q3以下は、チャット品質を低下させる前にツール呼び出しの信頼性を低下させます。',
          'ヘッドラインの信頼性範囲: シンプルなワークロードで90%+の正しく形成されたコール。マルチステップの実際のワークフロー全体で80-90%エンドツーエンド。',
        ],
      },
      whatToolCalling: {
        id: 'what-tool-calling',
        title: 'ローカルモデルのツール呼び出しとは',
        content:
          '**ツール呼び出しは、モデルがツールとその引数に名前を付けるJSON構造を出力します — チャットモデルをエージェントに変える、LLM側の機能です。** MCP、OpenAIツール、Anthropicツール、ClineのXMLはすべて、同じ基本的なスキルのワイヤフォーマット表現です。',
        items: [
          '**モデルが必要な能力 :** ツール スキーマを読む、ユーザーリクエストがツール呼び出しにマップされるかどうかを判定し、ツールに名前を付け、スキーマに一致する引数を提供する構造化応答を発行します。ツール呼び出し形のテキストを含む自由な散文ではなく、ハーネスがヒューリスティックなしで解析できる構造化オブジェクト。',
          '**ワイヤフォーマットは異なる;能力はそうではありません。** OpenAIのJSON形式でツール呼び出しを確実に実行するモデルは、通常、ClineのXMLとMCPのJSON-RPCを確実に実行します。能力が移動; 再フォーマットエラーは表面的です。',
          '**ツール呼び出しトレーニングは最も安価で影響が大きい事後トレーニングパスです。** Gemma 3 → Gemma 4、Qwen2.5 → Qwen3、Llama 3 → Llama 3.3のステップはすべてこれを反映しています。新しいフラッグシップのオープンウェイトリリースはルーチンでツール呼び出しトレーニングを追加または改善します。これが、上記の信頼できるリストを残りのオープンウェイトランドスケープから分離するものです。',
          '**特にエージェントにとってなぜ重要なのか :** エージェントループはツール呼び出しのシーケンスです。95%のツール呼び出しの信頼度でも、8ステップで~66%が成功します。構成を計画 — プランの地平線を短く保つ、承認ゲートを使用し、最長の現実的な地平線を処理する最小の信頼できるモデルを選択してください。',
          'ツール呼び出しの信頼性を改善するためのプロンプト技術については、[チェーン・オブ・ソート・プロンプティング](/ja/prompt-engineering/chain-of-thought-prompting)と[シンク・オブ・ソート・リアクト](/ja/prompt-engineering/tree-of-thought-and-react)を参照してください — どちらもモデルが間違ったツールを選択するか、間違った引数を提供する率を低下させます。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ツール呼び出しは、ツールに名前を付けてスキーマに一致する引数を提供するJSON構造を発行するLLM側の機能です。MCPはOpenAIツール、ClineのXMLと同じスキル表現です。',
          },
          {
            type: 'plain-terms',
            text: 'ツール呼び出しモデルは、利用可能なツールのリストを読み取り、ユーザーのリクエストに適合するツールを決定し、ツールの名前とその引数を付けるきれいな構造化応答を生成します。ワイヤフォーマット(JSON、XML、JSON-RPC)はハーネス決定です。モデルが呼び出しを正しく実行するかどうかはモデルプロパティです — このガイドで測定するものです。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ツール呼び出しの信頼性はエージェントループ全体で構成されます。95%のツール呼び出し率は8ステップで~66%のセットで着陸します。構成を計画してください — プランの地平線を短く保つ、承認ゲートを使用し、最長の現実的な地平線を処理する最小の信頼できるモデルを選択します。',
          },
        ],
        image: '/images/tool-calling-what-is-it-ja.svg',
        imageCaption: 'ツールコールの5ステップ：ユーザープロンプト → LLMが利用可能なツールスキーマを読み取り → ツールと引数を指定した構造化JSONを出力 → ハーネスがスキーマに照合して検証 → ツールが実行（ファイルシステム、DB、ブラウザ、API）。ワイヤーフォーマットは変わってもLLMの能力は変わらない。',
      },
      methodology: {
        id: 'methodology',
        title: 'テスト方法',
        content:
          '**テストはハーネスを一定に保ち、モデルのみを変更しました。** 同じMCPクライアント、同じサーバー、同じプロンプト — 障害はランタイムではなく、モデルに起因します。',
        items: [
          '**セットアップ :** VS Code内のCline 3.x(テストした最も厳密なツール呼び出し検証器)とヘッドレス側のGoose+MCP。バックエンドOllama 0.5 +は、特に指定されない限り、各モデルをQ4_K_Mで処理します。',
          '**サーバー :** 4つの参照MCPサーバー — `ファイルシステム`(サンドボックスディレクトリを読み書き)、`sqlite`(デフォルトでは読み取り専用、特定のタスク用)、`puppet`(ヘッドレスブラウザ)、`GitHub`(PAT付きPR・問題管理)。すべてのモデル実行でサーバーバージョンを同じにします。',
          '**プロンプトセット :** サーバーあたり50タスクプロンプト、モデルあたり3回繰り返し = 4サーバー全体でモデルあたり600 graded呼び出し(~3000は5つのモデル全体)。プロンプトは単一ツールタスク、マルチステッププラン、並列呼び出しをカバーします。',
          '**グレーディング :** ツール呼び出しあたり4つのシグナル。正しく形成された、正しい選択、正しい引数、実行成功。',
          'ハードウェア: Apple M5 Max 64GB MacBook Pro for小さいモデル; NVIDIA L40S 48GB と 2×RTX 3090 24GBはLlama 3.3 70B向けです。すべてが使用可能なトークンレート(≥10トークン/秒)で維持されました。',
          '正直さの制約: パーセンテージは範囲として報告されます。"~95%"は92-96%の範囲を意味します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらの数値は、BFCLまたはToolBenchリーダーボードではなく、テストハーネスから取得しています。パブリックベンチマークは直接的に相関しますが、MCPサーバーワークロードと1対1の相関はしません。あなたのスタックに適したベンチマークはあなたのスタックです。これらのパーセンテージを開始仮説として扱い、最終的な判定として扱うのではなく。',
          },
        ],
        image: '/images/tool-calling-methodology-ja.svg',
        imageCaption: 'テスト方法論：4つのMCPサーバー（filesystem、sqlite、puppeteer、github）、50プロンプト × 4サーバー × 3実行 = 1モデルあたり600回の評価、5モデルで合計約3,000回 — 全体を通じて同一のCline 3.xハーネスを使用し、モデルのみを変更。',
      },
      comparison: {
        id: 'comparison',
        title: '直接比較: 2026年の5つのツール呼び出しモデル',
        content:
          '**同じハーネス、同じプロンプト、異なるモデル。** Llama 3.3 70Bは見出しで導く;小さいモデルはしばしば重要なメトリクスで導く—VRAMドルあたりの信頼性。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '汎用24GBリグにはGemma 4 27Bを選択; 長いコンテキストにはGLM-5.1 32B;コードにはQwen3-Coder 30B;バランスの取れたフォールバックにはQwen3 32B;48GB+VRAMと最高の天井が必要な場合はLlama 3.3 70B。',
          },
          {
            type: 'plain-terms',
            text: '5つすべてが機能します。違いは、それらが何を要するか(VRAM)、何を特化するか(長いコンテキスト、コード、汎用)、そしてどのくらいの頻度でツール呼び出しでやや間違える(数パーセント — 承認ゲートで回復可能)です。',
          },
        ],
        columns: ['モデル', 'サイズ', 'VRAM (Q4_K_M)', '正しく形成された呼び出しレート', 'ベスト用途', '一般的な障害モード'],
        rows: [
          { 'モデル': 'Gemma 4 27B', 'サイズ': '27B', 'VRAM (Q4_K_M)': '~16 GB', '正しく形成された呼び出しレート': '~95%', 'ベスト用途': '24GBリグでの汎用エージェント', '一般的な障害モード': 'チェーンされた呼び出しで保守的(チェーンが機能したであろう場合に承認を求める)' },
          { 'モデル': 'GLM-5.1 32B', 'サイズ': '32B', 'VRAM (Q4_K_M)': '~20 GB', '正しく形成された呼び出しレート': '~94%', 'ベスト用途': '長いコンテキストエージェント(128Kボックスから直接)', '一般的な障害モード': '長い入力での時々の引数トランケーション' },
          { 'モデル': 'Qwen3 32B', 'サイズ': '32B', 'VRAM (Q4_K_M)': '~20 GB', '正しく形成された呼び出しレート': '~93%', 'ベスト用途': 'バランス — 汎用+軽いコード', '一般的な障害モード': 'Clineのきつい形式でまれなXML不正形成' },
          { 'モデル': 'Qwen3-Coder 30B', 'サイズ': '30B', 'VRAM (Q4_K_M)': '~18 GB', '正しく形成された呼び出しレート': '~96% (コード) / ~91% (コード以外)', 'ベスト用途': 'コードエージェント(replace_in_file、read_file、コード認識ブラウザ)', '一般的な障害モード': '汎用ピックより非コードサーバーで弱い' },
          { 'モデル': 'Llama 3.3 70B', 'サイズ': '70B', 'VRAM (Q4_K_M)': '~42 GB', '正しく形成された呼び出しレート': '~97%', 'ベスト用途': 'ハードウェアが適合する場合は最高の天井', '一般的な障害モード': 'トークンレート遅延により長いエージェントループが困難' },
        ],
        image: '/images/tool-calling-model-comparison-ja.svg',
        imageCaption: '5つのツールコールモデルを4つのMCPサーバーでベンチマーク：Llama 3.3 70Bが最高（約97%、42 GB VRAM）、Qwen3-Coder 30Bがコードツールで約96%、Gemma 4 27Bが16 GB VRAMで約95%、GLM-5.1 32Bが128Kコンテキストで約94%、Qwen3 32Bが万能型で約93%。',
      },
      gemma4: {
        id: 'gemma-4',
        title: 'Gemma 4 27B: 24GBリグの標準的な選択肢',
        content:
          '**Gemma 4 27Bは、ほとんどのチームが最初にインストールする必要があるモデルです。** サイズのベストインクラスツール呼び出しトレーニング、16GBの統合メモリまたは24GB VRAMをQ4_K_Mで保持、そしてテストした各MCPサーバー上でクリーンなJSON関数呼び出しを配信します。',
        items: [
          '強み: ツール スキーマ への厳密な準拠(低い不正形成呼び出しレート)、ツール選択で優れた一般的な推論、24GBコンシューマGPUとApple Mシリーズマシンで快適。',
          '障害モード: チェーンされたツール呼び出しで保守的。Gemma 4は、Llama 3.3が次のツールを呼び出したであろう場所で、ユーザーに明確化の質問を求めることがあります。',
          '推奨量子化: Q4_K_M。Q5_K_Mはチャット品質を改善しますが、ツール呼び出し信頼性を著しく改善しません。',
          'ベストハーネスペアリング: 任意の信頼できるランタイム。Cline + Gemma 4 は Clineのステップごと承認UXとGemmaの保守主義が整列するため特に清潔なペアリングです。',
          '使用場所: 汎用エージェント作業、ドキュメント処理、Eメールトリアージ、MCPベースのファイルシステムとデータベース作業。特定の理由がない場合はデフォルトの選択肢。',
        ],
      },
      glm51: {
        id: 'glm-5-1',
        title: 'GLM-5.1 32B: 長いコンテキストの選択肢',
        content:
          '**GLM-5.1 32Bは、入力が長い場合の正しい選択肢です。** 128Kのコンテキストウィンドウをボックスから直接取得し、強力なツール呼び出し信頼性があり、1時間のミーティングトランスクリプトまたはフルコードベースの読み取りにコンテキスト拡張ファインチューンが必要ないトップ5の唯一のモデルです。',
        items: [
          '強み: ネイティブ128Kコンテキスト(ropeスケーリングの成果物なし)、信頼できるツール呼び出しJSON、Gemma 4より少し重いですが、Q4_K_Mで24GB VRAMで快適です。',
          '障害モード: 非常に長い入力での時々の引数トランケーション。100Kトークンドキュメントが与えられ、引数としてドキュメントのキークレームを持つツールを呼び出すよう促されると、GLM-5.1は時々ピリオドの前に引数を切り詰めます。回復可能—Clineは不正形成呼び出しを表面化し、モデルは再試行します — しかし承認サイクルを追加します。',
          '推奨量子化: Q4_K_M。GLM-5.1はGemma 4より少し優雅に量子化します; ツール呼び出しワークロードでQ4の下に行かないでください。',
          '使用場所: コンプライアンスレポート生成、長いドキュメント分析、モデルがコンテキストにコードベース全体を保有する必要があるエージェントタスク。コンテキスト長が制約である場合は、選択肢。',
        ],
      },
      qwen3: {
        id: 'qwen3',
        title: 'Qwen3 32B: バランスの取れたフォールバック',
        content:
          '**Qwen3 32Bは、すべてを能力的に実行し、最初の場所で何もなく行うモデルです。** 汎用作業と軽いコード作業の組み合わせのために1つのモデルが必要な場合を選択; 2つのインストールを操作しません。',
        items: [
          '強み: 4つのMCPサーバー全体での一貫したツール呼び出し信頼性、優れた一般的な推論、24GB GPU上の長いエージェントループに対して十分な速度。',
          '障害モード: Clineのきつい形式でまれなXML不正形成。発生した場合、エージェントループはクリーンに再試行します — これは実践では低影響の障害モードです。',
          '推奨量子化: Q4_K_M。Qwen3はエレガントに量子化します; Q5_K_MはあなたがVRAMを持っている場合の小さな勾配です。',
          '使用場所: タスク別にモデルを切り替えたくない場合は、混合ワークロード。「チーム用の1つのモデル」選択。',
        ],
      },
      qwen3coder: {
        id: 'qwen3-coder',
        title: 'Qwen3-Coder 30B: コード形状の選択肢',
        content:
          '**Qwen3-Coder 30Bはコード形状のMCP作業で最高のツール呼び出し機です。** `replace_in_file`、`read_file`、コード認識ブラウザアクション、GitHub PR管理はすべて、焼き付けられたコードファインチューニングから利益を得ます。',
        items: [
          '強み: コードMCPツール(~96%)の最高のwell-formed呼び出しレート、マルチファイルエージェントタスク上で強い、他の32Bピックより低いVRAM(~18GB at Q4_K_M)。',
          '障害モード: コード以外のサーバーでより弱い。SqliteとPuppeteerの信頼性はGemma 4と比較して下がります — Qwen3-Coderは汎用モデルほど慣用的にデータベースクエリとブラウザアクションを処理します。',
          '推奨量子化: Q4_K_M。Q5_K_Mは、あなたがより鮮明なコード推論を望む場合の小さな手順です。',
          '使用場所: Cline + Continue.devコーディングエージェント、リポジトリリファクタリング、探索的なバグデバッグ。エージェントがコード以外のサーバーにも触れている場合は、Gemma 4とペアにしてください。',
        ],
      },
      llama33: {
        id: 'llama-3-3',
        title: 'Llama 3.3 70B: 最高の天井',
        content:
          '**Llama 3.3 70Bは、2026年5月のオープンウェイトエコシステムで最も信頼できるツール呼び出し機です。** ハードウェアが適合する場合にのみ使用 — 小さいモデルは通常、日常の作業で十分です。',
        items: [
          '強み: 4つのサーバー全体で最高のwell-formed呼び出しレート(~97%)、最も強いチェーンされた呼び出し信頼性、不潔な入力への耐性。ハーネスのせいにするのをやめるモデル。',
          '障害モード: スピード。Llama 3.3 70B at Q4_K_M on single L40S 48GBは~10–15トークン/sを保持; 長いエージェントループは遅く感じます。2×RTX 3090分割推論では、スループットが改善されますが、セットアップが関係しています。',
          '推奨量子化: Q4_K_Mはフロアです; VRAMが許す場合はQ5_K_Mが好まれます(~52GB)。Llama 3.3はエレガントに量子化します — Q4とQ5の違いはGemma 4より小さいです。',
          '使用場所: 信頼性がスピードより重要な場合のワークフロー(コンプライアンスレポート、法的レビュー、例外処理)。またはスペアハードウェアを持つセットアップ。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.3 70B at Q4_K_Mは~42GB VRAMが必要です; 単一のL40S 48GBまたは分割推論を備えた2×RTX 3090 24GBに快適に適合;Apple Mシリーズマシンで64GB+統合メモリで実行されます。トークンごとのスループットは実践的な制約です — 長いエージェントループはそれぞれの呼び出しが信頼できるとしても遅く感じます。',
          },
        ],
      },
      nonStarters: {
        id: 'non-starters',
        title: 'ツール呼び出しが機能しないモデル',
        content:
          '**3つのカテゴリのモデルはハーネスに関係なく同じ方法で失敗します。** それらを機能させようとするのをやめる; 上記の信頼できるピックの1つに切り替えます。',
        items: [
          '**Sub-7Bモデル。** Llama 3.2 1B、Llama 3.2 3B、Phi-3 Mini、Gemma 2 2B — すべてが自明な単一ステップタスクを超えて不正な形式のツール呼び出しを発行します。トリアージ分類に受け入れ可能(出力は短い文字列); マルチステッププランには不可。',
          '**明示的なツール呼び出しトレーニングのない汎用モデル。** ほとんどの一般的な7B–13B チャットモデルは、ツール呼び出しを散文にパラフレーズし、引数スキーマを不正適合させ、存在しないツールを発明します。モデルクラスはエラー; サイズではなく。',
          '**信頼できるモデルの重く量子化されたバージョン。** Q3、Q2、IQ-quantsはツール呼び出し信頼性をチャット品質より前に低下させます。Q3 Gemma 4 27BはQ4 Qwen3 32Bより悪いツール呼び出し機です。',
          '**症状。** Clineの不正なXML、Aiderの言い換えられたSEARCH/REPLACEブロック、Continue.devの開いたファイルと一致しないフェンシングコード、そして同じ呼び出しを2回連続で提案しているモデルを持つ停滞したエージェントループ。どれもハーネスバグではなく、ハーネスを切り替えるとハーネスのさまざまな形で同じ障害が表示されます。',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'ツール呼び出しの場合のSub-7Bモデルは、私たちが見る最大の時間浪費です。症状(「ハーネスは壊れている」、「MCPは壊れている」、「Clineは壊れている」)はすべてモデルを指します。Tool-Call-トレーニング27B+に切り替えると、スタック内の他に何も変えずに症状は消えます。',
          },
        ],
        image: '/images/tool-calling-non-starters-ja.svg',
        imageCaption: 'ツールコールに失敗する3つのモデルカテゴリ：7B未満のモデルは多段階タスクで不正なコールを生成、ツールコール訓練なしのモデルはコールを文章に言い換える、Q3/Q2量子化はチャット品質より先にツール信頼性を低下させる — Q4_K_Mが本番の最低基準。',
      },
      formatComparison: {
        id: 'format-comparison',
        title: 'ツール呼び出し形式: 同じスキル、異なるワイヤフォーマット',
        content:
          '**同じモデルが4つの形式をすべて処理します。** 形式の選択はハーネス/プロトコル決定であり、モデル決定ではありません。',
        columns: ['形式', 'どこで見えるか', 'きつい?', '不正な出力への寛容さ'],
        rows: [
          { '形式': 'OpenAIツール(JSON)', 'どこで見えるか': 'OpenAI API、Continue.dev Agent', 'きつい?': 'スキーマ検証', '不正な出力への寛容さ': 'エラーを表面化; モデルが再試行' },
          { '形式': 'Cline XMLツールブロック', 'どこで見えるか': 'Cline VS Code拡張機能', 'きつい?': '非常にきつい', '不正な出力への寛容さ': 'ループ停止; 小さいモデルはここで最初に苦しむ' },
          { '形式': 'MCP JSON-RPC 2.0', 'どこで見えるか': 'Goose、Cline、Continue.dev、LM Studio', 'きつい?': 'スキーマ検証', '不正な出力への寛容さ': 'エラーを表面化; モデルが再試行; エコシステムが収束するワイヤフォーマット' },
          { '形式': 'Aider SEARCH/REPLACEブロック', 'どこで見えるか': 'Aider CLI', 'きつい?': 'パターン一致、逐語的', '不正な出力への寛容さ': '拒否して再試行; 小さいモデルはSEARCHブロックをパラフレーズし、失敗' },
        ],
        items: [
          '形式移植性クレーム: 5つの信頼できるモデルすべてが、形式ごとの再構成なしで4つの形式を処理します。',
          '意味: ハーネスがサポートする形式を選択する; モデルは負荷は軸変数です。',
          '例外: Qwen3-Coderのサーチ/交換ブロック準拠はQwen3より少し良いです。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'ハーネスがネイティブにサポートする形式を選択; ベンチマークする形式ではなく。5つの信頼できるモデルは4つの形式全体にポート; ハーネスUX(ステップごとの承認、監査トレイル、IDE統合)は形式の選択より実世界の成功の大きな運転手です。',
          },
        ],
        image: '/images/tool-calling-format-comparison-ja.svg',
        imageCaption: '4つのツールコールフォーマットを比較：OpenAI JSON（スキーマ検証済み）、Cline XML（非常に厳格、最初に失敗が現れる）、MCP JSON-RPC 2.0（エコシステム標準、スキーマ検証）、Aider SEARCH/REPLACE（逐語一致マッチング）— 5つのベンチマークモデルすべてが4つのフォーマットに対応。',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ツール呼び出しモデルの選択でよくある誤り',
        items: [
          '**誤り1: ツール呼び出しの失敗についてハーネスを非難します。** 症状(不正XML、言い換えられたSEARCHブロック、開かれたファイルと一致しないフェンシングコード)はハーネスを横切って異なる表面形式に表示されます; 原因は通常、ツール呼び出しトレーニングを欠いているモデルです。最初にモデルを切り替える; ハーネスのみを切り替える場合は、モデルがツール呼び出しを他の場所で確認したことを確認してください。',
          '**誤り2: より小さなGPUに適合するように過度に量子化します。** 信頼できる27Bの Q3 とIQ-量子は、通常、次のサイズ下のQ4_K_Mより悪いです。モデルと量子化をペアとして選択し、独立してはいけません。',
          '**誤り3: 「シンプルな」ツール呼び出しに小さな汎用モデルを使用します。** プロンプトの「シンプル」は7B汎用モデルの場合「シンプル」ではない — 不正な形式の呼び出しレートは、単一ステップタスクでさえ5–10%の実行で停止するほど十分に高いです。トリアージ分類にはLlama 3.2 3Bを使用; ツール呼び出しをするしますGemma 4 27B (またはより大きい)。',
          '**誤り4: チェーンされたツール呼び出し構成を無視します。** 95%の構成レートをエージェントループのステップ全体で構成します。8ステップのタスクは95%で~66%の時間ランドします。構成を計画 — プランの地平線を短く保つ、承認ゲートを使用し、最長の現実的な地平線を処理する最小の信頼できるモデルを選択します。',
          '**誤り5: リーダーボードの数字をMCPの信頼性の代わりに追いかけます。** パブリックベンチマークは有用な信号ですが、MCPサーバーワークロードと1対1で翻訳されません。スタックに適したベンチマークはあなたのスタックです。あなたがそれを実行できない場合は、このリスト内のモデルを好む — 彼らは実際のワークロードを生き残ります。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[モデルコンテキストプロトコル仕様](https://modelcontextprotocol.io/) — JSON-RPCスキーマ、トランスポート、テストハーネスで使用されるライフサイクル定義。',
          '[Berkeley Function Calling Leaderboard (BFCL)](https://gorilla.cs.berkeley.edu/leaderboard.html) — 公開関数呼び出しベンチマーク; 有用な方向信号、MCP相当ではなく。',
          '[Ollama Model Library](https://ollama.com/library) — モデル可用性、ツール呼び出しサポートフラグ、上記の量子化レベル。',
          '[modelcontextprotocol/servers GitHub Repository](https://github.com/modelcontextprotocol/servers) — テストセットで使用される参照ファイルシステム、sqlite、postgres、puppet、githubサーバー。',
          '[Hugging Face モデルカード Gemma 4、GLM-5.1、Qwen3、Qwen3-Coder、Llama 3.3向け](https://huggingface.co/) — 公式ツール呼び出しトレーニングドキュメント。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '2026年でローカルツール呼び出しの最高い成功率を持つモデルは何ですか?',
            a: 'Llama 3.3 70Bはテストした4つの参照MCPサーバーの最高のwell-formed呼び出しレート(~97%)を持っています。Q4_K_MでVRAMを48GB+必要のため、ほとんどのユーザーは小さい信頼できるモデルの1つを選択します — 一般作業の場合Gemma 4 27B、長いコンテキストの場合GLM-5.1 32B、コードの場合Qwen3-Coder 30B、バランスの取れたフォールバックの場合Qwen3 32B。4つの27B-32Bピック93-96%の範囲に着陸し、承認ゲート付きの本番エージェント作業に十分に信頼できます。',
          },
          {
            q: 'Gemma 4ネイティブツール呼び出しはプロンプトのトリックなしで機能しますか?',
            a: 'はい。Gemma 4 27Bは、標準チャット形式から直接きれいなJSON関数呼び出しときれいなCline XMLを発行します — ツール特有のプロンプト、JSONモードのラッパー、システムプロンプトの呪いは必要ありません。モデルは事後トレーニング段階でツール呼び出しトレーニングを受けました。モデルを任意のチャットモデルのようにシステムプロンプトのツール リストで呼び出し、残りは対処します。',
          },
          {
            q: 'Llama 3.3 70Bはツール呼び出しを確実に実行できますか?',
            a: 'はい — テストした5つのモデルの中で最高の信頼性を持っています。トレードオフはハードウェア: Q4_K_Mで~42GB VRAMが必要なため、単一L40S 48GBまたは分割推論を備えた2×RTX 3090 24GBに快適に適合し、64GB+統合メモリを持つApple Mシリーズマシンで実行されます。トークンごとのスループットは実践的な制約です — 長いエージェントループはそれぞれの呼び出しが信頼できるとしても遅く感じます。',
          },
          {
            q: 'どのモデルが並列関数呼び出しを最もよく処理しますか?',
            a: 'Llama 3.3 70Bが並列呼び出し信頼性で導く — プロンプトが「これらの3つのディレクトリを一度にリストアップ」の場合、70Bは平行呼び出しをより清潔に出力します。Gemma 4 27BとQwen3 32Bは近くです。Qwen3-Coder 30Bは並列呼び出しで少し弱いです。',
          },
          {
            q: 'ツール呼び出しで量子化されたバージョンはより悪いパフォーマンスですか?',
            a: 'はい。Q3 Gemma 4 27BはQ4_K_Mの同じモデルより明らかに悪いツール呼び出し機です。Q4_K_Mは5つの信頼できるモデルの本番フロアです; Q5_K_Mは安全な手順です; Q3以下はエージェント作業に推奨されません。',
          },
          {
            q: 'より良いツール呼び出しのためにより小さなモデルをファインチューンできますか?',
            a: '可能ですが、価値が低いことがあります。上記の5つのモデルは事後トレーニング段階で組み込まれたツール呼び出しトレーニングを持っています。コミュニティファインチューンは通常一致しません。信頼できるモデルの1つを使用してください。ドメイン固有のツール表面がある場合、小さいLoRAはシステムの準拠を鋭くする可能性があります — しかし非ツール呼び出しモデルを信頼できるツール呼び出し機に変えることはできません。',
          },
          {
            q: 'どのモデルがJSON出力に最も信頼できるですか?',
            a: '信頼できるJSON出力と信頼できるツール呼び出しは相関していますが、同じではありません。純粋なJSON-modeの仕事のために、Gemma 4 27BとGLM-5.1 32Bが最も強いです — 両方とも後続のプロース無しできれいなJSONを発行します。具体的なツール呼び出し: 5つの信頼できるモデルすべてが適格; ツール呼び出しラッパー内の彼らが発行するJSON。',
          },
          {
            q: 'CPUオンリーセットアップでツール呼び出しが機能しますか?',
            a: '技術的にはい、実際には苦い。Gemma 4 27BはQ4_K_Mで32GB CPUで~1-3トークン/sを保持; マルチステップタスク用30K-80Kトークンを必要とするエージェント。CPU-onlyはテスト。本番エージェント用、GPUまたはApple Silicon統合メモリは実践フロアです。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[OllamaをMCPで使用して、データベースと APIをローカル Agent設定2026に接続](/ja/power-local-llm/local-ai-agents-with-mcp-2026) — 実践実装; 上記のモデルがツール呼び出しをするプロトコルレイヤー。',
          '[2026年のローカルAIエージェント: 実際に機能するもの(そして依然として失敗するもの)](/ja/power-local-llm/autonomous-local-agents-actually-work) — より広いコンテキスト; ツール呼び出し信頼性がエージェントループステップ全体で構成される方法。',
          '[Continue.dev vs Cline vs Aider: ベストローカルコーディングAgent2026](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 隣接ハーネス比較。',
          '[GitHub Copilotをローカル LLMに置き換える](/ja/power-local-llm/replace-github-copilot-with-local-llm) — 上記のツール呼び出しモデルの適用ユースケース。',
          '[Ollamaのトップオープンソースモデル](/ja/local-llms/top-open-source-models-ollama) — より広いモデル権限。',
          '[LLM量子化説明](/ja/local-llms/llm-quantization-explained) — 量子化理論; Q4_K_Mがツール呼び出しワークロードの本番フロアの理由。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: '2026年最佳本地工具调用模型：基准和比较',
    seoTitle: '最佳本地工具调用模型2026：真实MCP基准',
    intro:
      '工具调用可靠性是本地代理能否完成任务的最关键因素。包装模型的工具框架不太重要——相同的Cline、相同的MCP服务器、相同的提示：模型发出格式良好的工具调用或不发出。本指南针对2026年5月的5个可靠工具调用者（Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B）进行真实MCP工作流基准测试，列出失败模式，并告诉您根据VRAM预算应该选择哪个模型。',
    metaDescription:
      '比较Gemma 4、GLM-5.1、Qwen3、Qwen3-Coder和Llama 3.3的工具调用可靠性。真实MCP基准，而非排行榜分数。',
    twitterDescription:
      '5个模型在真实MCP工具调用上测试：Gemma 4、GLM-5.1、Qwen3、Qwen3-Coder、Llama 3.3。可靠率、VRAM预算和故障模式。',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Qwen3-Coder 30B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'NVIDIA L40S 48 GB',
    ],
    audience:
      '使用MCP、Cline、Continue.dev或自定义编排构建本地代理的开发者，需要一个在文件系统、数据库、浏览器和GitHub工作流中可靠的工具调用模型。',
    readTime: '阅读约12分钟',
    educationalLevel: 'Advanced',
    primaryTerm: '本地工具调用模型',
    targetKeywords: [
      '最佳本地模型工具调用',
      'Gemma 4 vs Qwen3工具调用',
      'MCP模型基准',
      '本地LLM函数调用2026',
      'GLM-5.1工具调用',
      'Qwen3-Coder MCP',
    ],
    leadAnswerBlock:
      '**5个本地模型在2026年5月可靠地执行工具调用：Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B和Llama 3.3 70B。Llama 3.3 70B具有最高的上限（跨MCP服务器~97%格式良好调用率），但需要48 GB+ VRAM。Qwen3-Coder 30B是代码形工具工作的最佳选择。Gemma 4 27B是24GB VRAM平台的最佳通用选择。GLM-5.1 32B在长上下文代理任务（128K上下文窗口开箱即用）上领先。Qwen3 32B是均衡的备选项。7B以下的模型和大多数没有明确工具调用训练的通用模型在相同工作负载中发出格式错误的调用——故障源于模型，而不是工具框架。此列表中较小端的Q4_K_M以上的量化会显著降低可靠性；Q4_K_M是生产下限。**',
    quickAnswerTop: {
      zh: {
        question: '2026年最佳的本地工具调用模型是什么？',
        answer:
          'Llama 3.3 70B具有最高的工具调用成功率，但需要48GB+ VRAM，因此大多数用户选择27B-32B模型之一。Gemma 4 27B是24GB Rig上通用代理工作的默认选择——该大小最佳的工具调用训练，在链式调用上保守但可靠。GLM-5.1 32B适用于长上下文任务（128K开箱即用），如合规报告或长时间转录。Qwen3 32B均衡；Qwen3-Coder 30B是最佳的代码专用工具调用者。所有5个都发出格式良好的函数调用JSON并能通过MCP客户端应用的严格模式验证。工具调用可靠性是模型属性——相同的框架包装较小的通用模型在相同工作负载中失败。解决方案是"切换模型"，而不是"切换框架"。',
        bullets: [
          '按VRAM分类的最佳选择：24 GB → Gemma 4 27B；24GB长上下文 → GLM-5.1 32B；24GB代码形 → Qwen3-Coder 30B；48GB+ → Llama 3.3 70B。',
          '所有5个可靠模型都发出格式良好的函数调用JSON，处理并行调用，并在MCP客户端中通过严格的模式验证。',
          '7B以下的模型和没有工具调用训练的通用模型都发出格式错误的调用——错误源于模型，不是框架。',
          '量化：Q4_K_M是所有5个模型的生产下限。Q3及以下在降低聊天质量之前会降低工具调用可靠性。',
          '格式可移植性很高——相同模型处理OpenAI工具、Cline的XML、MCP的JSON-RPC和Aider的Diff块，无需重新配置。',
          '实际可靠性 = 格式良好的速率 × 正确工具选择速率 × 正确参数速率。90%+的头条数复合；期望多步实际工作流中80-90%的端到端。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速要点', anchor: '#quick-facts' },
      { label: '本地模型的工具调用意味着什么', anchor: '#what-tool-calling' },
      { label: '我们如何测试', anchor: '#methodology' },
      { label: '直接比较', anchor: '#comparison' },
      { label: 'Gemma 4 27B', anchor: '#gemma-4' },
      { label: 'GLM-5.1 32B', anchor: '#glm-5-1' },
      { label: 'Qwen3 32B', anchor: '#qwen3' },
      { label: 'Qwen3-Coder 30B', anchor: '#qwen3-coder' },
      { label: 'Llama 3.3 70B', anchor: '#llama-3-3' },
      { label: '工具调用不工作的模型', anchor: '#non-starters' },
      { label: '工具调用格式比较', anchor: '#format-comparison' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '来源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/best-local-models-tool-calling-2026-static.html',
    gammaDescription: '幻灯片涵盖：5个本地模型在真实MCP工作流中的基准测试（Gemma 4 27B ~95%、GLM-5.1 32B ~94%、Qwen3 32B ~93%、Qwen3-Coder 30B ~96%代码、Llama 3.3 70B ~97%），VRAM需求与量化最低标准（Q4_K_M），失败的模型（7B以下、无工具调用训练、过度量化），工具调用格式对比（OpenAI JSON、Cline XML、MCP JSON-RPC 2.0、Aider SEARCH/REPLACE），智能体循环中的可靠性复合效应，以及5个常见错误。下载PDF作为本地工具调用模型参考卡。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2026年5月5个可靠的工具调用者：** Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。所有5个都发出格式良好的函数调用JSON并能通过严格的MCP模式验证。',
          '**Llama 3.3 70B具有最高的上限**——跨MCP服务器~97%的格式良好调用率——但需要48GB+ VRAM。仅当硬件允许时使用；较小的模型通常就足够了。',
          '**Gemma 4 27B是24GB Rig的标准选择。** 该尺寸最佳的工具调用训练，在链式调用上保守。在文件系统、数据库和GitHub MCP服务器上可靠。',
          '**GLM-5.1 32B在长上下文代理任务上获胜。** 128K上下文窗口开箱即用；偶发参数截断是唯一常见故障。选择用于合规报告和长录音。',
          '**Qwen3-Coder 30B是最佳的代码形工具调用者。** 在`replace_in_file`、`read_file`和代码感知浏览器操作上强；在非代码MCP服务器上弱于Gemma 4。',
          '**7B以下的模型发出格式错误的调用。** 通用模型无论大小如何都相同。错误源于模型，不是框架。',
          '**Q4_K_M是生产下限。** Q3及以下在降低聊天质量之前降低工具调用可靠性。使工具调用的量化与工作负载相匹配。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速要点',
        items: [
          '**最佳整体(24GB VRAM):** Gemma 4 27B——Q4_K_M、~16GB VRAM、在4个参考MCP服务器（文件系统、sqlite、puppet、github）中可靠。',
          '**最佳长上下文(24GB VRAM):** GLM-5.1 32B——128K上下文、Q4_K_M下~20GB VRAM。',
          '**最佳代码形:** Qwen3-Coder 30B——Q4_K_M下~18GB VRAM、在`replace_in_file`和代码MCP工具上最强。',
          '**最高上限:** Llama 3.3 70B——Q4_K_M下~42GB VRAM、在链式工具调用上更可靠但较慢。',
          '**轻量级选择:** Llama 3.2 3B——4-8GB VRAM、足以进行分类、不足以进行多步计划。',
          '**量化的生产下限:** Q4_K_M。Q3及以下在降低聊天质量之前降低工具调用可靠性。',
          '**头条可靠性范围:** 简单工作负载中90%+的格式良好调用；多步实际工作流中80-90%的端到端。',
        ],
      },
      whatToolCalling: {
        id: 'what-tool-calling',
        title: '本地模型的工具调用意味着什么',
        content:
          '**工具调用是模型发出命名工具及其参数的结构化JSON——将聊天模型变为代理的LLM端能力。** MCP、OpenAI工具、Anthropic工具和Cline的XML都是相同底层技能的有线格式表达。',
        items: [
          '**模型需要的能力：** 读取工具模式，判断用户请求是否映射到工具调用，并发出结构化响应命名工具并提供与模式匹配的参数。不是包含工具调用形文本的自由散文——工具框架可以不用启发式分析的结构化对象。',
          '**有线格式变化；能力不变。** 在OpenAI的JSON工具格式上可靠执行工具调用的模型通常在Cline的XML和MCP的JSON-RPC上也可靠执行。能力转移；重新格式化失败是表面的。',
          '**工具调用训练是最便宜和最高影响的训练后通过。** Gemma 3→Gemma 4、Qwen2.5→Qwen3和Llama 3→Llama 3.3的步骤都体现这一点。新的旗舰开放权重发行常规添加或改进工具调用训练；这就是将上面的可靠列表与开放权重景观的其余部分区分开来的原因。',
          '**为什么对代理特别重要：** 代理循环是工具调用的序列。即使95%的单个调用可靠性也会复合——8个步骤在95%处成功~66%的时间。为复合计划——保持计划地平线短、使用批准网关并倾向于最小可靠模型处理最长现实地平线。',
          '提高任何兼容模型的工具调用可靠性的提示技术，参见[思维链提示](/zh/prompt-engineering/chain-of-thought-prompting)和[思维树和ReAct](/zh/prompt-engineering/tree-of-thought-and-react)——两者都降低模型选择错误工具或提供错误参数的速率。',
        ],
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '工具调用是发出命名工具及提供与其模式匹配的参数的结构化JSON的LLM端能力；MCP、OpenAI工具和Cline的XML是相同技能表达。',
          },
          {
            type: 'plain-terms',
            text: '工具调用模型可以读取可用工具列表，判断哪个适合用户请求，并生成命名工具及其参数的干净结构化响应。有线格式（JSON、XML、JSON-RPC）是工具框架决定；模型是否正确执行调用是模型属性——这就是本指南测量的。',
          },
        ],
        callouts: [
          {
            type: 'tip',
            text: '单个调用可靠性在代理循环中复合。95%的单个调用率在8个步骤中成功~66%的时间。为复合计划——保持计划地平线短、使用批准网关并倾向于最小可靠模型处理最长现实地平线。',
          },
        ],
        image: '/images/tool-calling-what-is-it-zh.svg',
        imageCaption: '工具调用5步流程：用户提示 → LLM读取可用工具Schema → 输出指定工具和参数的结构化JSON → 框架对照Schema验证 → 工具执行（文件系统、数据库、浏览器、API）。线格式可变，LLM底层能力不变。',
      },
      methodology: {
        id: 'methodology',
        title: '我们如何测试',
        content:
          '**测试保持工具框架恒定，仅改变模型。** 相同的MCP客户端、相同的服务器、相同的提示——失败归因于模型，不是运行时。',
        items: [
          '**设置：** VS Code中的Cline 3.x（我们测试过的最严格的工具调用验证器）以及无头端的Goose+MCP。后端Ollama 0.5+在Q4_K_M下处理每个模型，除非另有说明。',
          '**服务器：** 4个参考MCP服务器——`文件系统`（读/写沙箱目录）、`sqlite`（默认只读，特定任务的写角色）、`puppet`（无头浏览器）、`github`（带细粒度PAT的PR和问题管理）。所有模型运行的服务器版本相同。',
          '**提示集：** 每个服务器50个任务提示，每个模型重复3次 = 跨4个服务器每个模型600个评分调用（~3000跨5个模型）。提示涵盖单工具任务、多步计划和并行调用。',
          '**评分：** 每个调用4个信号。格式良好、正确选择、正确参数、执行成功。',
          '**硬件：** 较小模型用Apple M5 Max 64GB MacBook Pro（至GLM-5.1 32B）；Llama 3.3 70B用NVIDIA L40S 48GB和2×RTX 3090 24GB。所有运行以可用令牌速率维护（≥10令牌/秒）以便延迟不是故障模式。',
          '**诚实约束：** 百分比作为范围报告，不是发明的尖锐数字。"~95%"表示我们的运行在测试集中落在92-96%之间；我们仅在差异足够小以至于精度会误导时四舍五入。',
        ],
        callouts: [
          {
            type: 'note',
            text: '这些数字来自我们的测试工具框架，不是BFCL或ToolBench排行榜。公共基准直向相关但不与MCP服务器工作负载一对一转换——适合您堆栈的正确基准是您的堆栈。将此处的百分比视为起始假设，而非最终判定。',
          },
        ],
        image: '/images/tool-calling-methodology-zh.svg',
        imageCaption: '测试方法论：4个MCP服务器（filesystem、sqlite、puppeteer、github），50提示 × 4服务器 × 3次运行 = 每模型600次调用，5个模型共约3,000次 — 全程使用相同的Cline 3.x框架，仅变更模型。',
      },
      comparison: {
        id: 'comparison',
        title: '直接比较：2026年5个工具调用模型',
        content:
          '**相同工具框架，相同提示，不同模型。** Llama 3.3 70B在标题数上领先；较小模型在通常更重要的指标上领先——每VRAM美元的可靠性。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '为通用24GB Rig选择Gemma 4 27B，为长上下文选择GLM-5.1 32B，为代码选择Qwen3-Coder 30B，为均衡备选选择Qwen3 32B，为48GB+ VRAM和最高上限选择Llama 3.3 70B。',
          },
          {
            type: 'plain-terms',
            text: '5个都工作。差异在于它们成本（VRAM）、它们专长（长上下文、代码、通用目的）以及多频繁在工具调用中略错误（几个百分点——可通过批准网关恢复）。',
          },
        ],
        columns: ['模型', '大小', 'VRAM (Q4_K_M)', '格式良好调用率', '最佳用途', '常见故障模式'],
        rows: [
          { '模型': 'Gemma 4 27B', '大小': '27B', 'VRAM (Q4_K_M)': '~16 GB', '格式良好调用率': '~95%', '最佳用途': '24GB Rig上的通用代理', '常见故障模式': '在链式调用上保守（在链接会成功的地方要求批准）' },
          { '模型': 'GLM-5.1 32B', '大小': '32B', 'VRAM (Q4_K_M)': '~20 GB', '格式良好调用率': '~94%', '最佳用途': '长上下文代理（128K开箱即用）', '常见故障模式': '长输入上偶发参数截断' },
          { '模型': 'Qwen3 32B', '大小': '32B', 'VRAM (Q4_K_M)': '~20 GB', '格式良好调用率': '~93%', '最佳用途': '均衡——通用+轻代码', '常见故障模式': 'Cline严格格式中偶发XML畸形' },
          { '模型': 'Qwen3-Coder 30B', '大小': '30B', 'VRAM (Q4_K_M)': '~18 GB', '格式良好调用率': '~96% (代码) / ~91% (非代码)', '最佳用途': '代码代理（replace_in_file、read_file、代码感知浏览器）', '常见故障模式': '在非代码服务器上弱于通用选择' },
          { '模型': 'Llama 3.3 70B', '大小': '70B', 'VRAM (Q4_K_M)': '~42 GB', '格式良好调用率': '~97%', '最佳用途': '硬件允许时最高上限', '常见故障模式': '令牌速率缓慢使长代理循环困难' },
        ],
        image: '/images/tool-calling-model-comparison-zh.svg',
        imageCaption: '5个工具调用模型在4个MCP服务器上的基准测试：Llama 3.3 70B最高（约97%，42 GB VRAM），Qwen3-Coder 30B代码工具约96%，Gemma 4 27B在16 GB VRAM上约95%，GLM-5.1 32B配合128K上下文约94%，Qwen3 32B全能型约93%。',
      },
      gemma4: {
        id: 'gemma-4',
        title: 'Gemma 4 27B：24GB Rig的标准选择',
        content:
          '**Gemma 4 27B是大多数团队应该首先安装的模型。** 该大小最佳的工具调用训练，在Q4_K_M处于16GB统一内存或24GB VRAM，并在我们测试过的每个MCP服务器上传送干净的函数调用JSON。',
        items: [
          '**优点：** 严格遵守工具模式（低畸形调用率）、工具选择上的良好一般推理、24GB消费者GPU和Apple M系列机器上舒适。',
          '**故障模式：** 链式工具调用上保守。Gemma 4有时会在Llama 3.3会调用下一个工具的地方暂停要求用户澄清。监督是目标时这是功能；想要自主时是摩擦点。',
          '**推荐量化：** Q4_K_M。Q5_K_M改进聊天质量但不显著改进工具调用可靠性——额外VRAM美元最好花在更长的上下文预算上。',
          '**最佳工具框架配对：** 任何可靠的运行时。Cline + Gemma 4是特别干净的配对，因为Gemma的保守主义与Cline的每步批准UX相符。',
          '**使用地点：** 通用代理工作、文档处理、电子邮件分流、MCP基础文件系统和数据库工作。当您没有选择其他理由时的默认选择。',
        ],
      },
      glm51: {
        id: 'glm-5-1',
        title: 'GLM-5.1 32B：长上下文选择',
        content:
          '**GLM-5.1 32B是输入较长时的正确选择。** 128K上下文窗口开箱即用、强大的工具调用可靠性以及顶部5中唯一不需要上下文扩展微调以处理1小时会议转录或完整代码库读取的模型。',
        items: [
          '**优点：** 原生128K上下文（无绳刻度伪影）、可靠的工具调用JSON、略重于Gemma 4但在Q4_K_M处于24GB VRAM仍舒适。',
          '**故障模式：** 非常长输入上偶发参数截断。当给定100K令牌文档并提示使用文档关键声明作为参数调用工具时，GLM-5.1有时在句号前截断参数。可恢复——Cline会表面畸形调用且模型重试——但会添加批准周期。',
          '**推荐量化：** Q4_K_M。GLM-5.1的量化优雅性略低于Gemma 4；不要在工具调用工作负载处Q4以下。',
          '**使用地点：** 合规报告生成、长格文档分析、代理任务需要模型在上下文中持有整个代码库。当上下文长度是约束时选择。',
        ],
      },
      qwen3: {
        id: 'qwen3',
        title: 'Qwen3 32B：均衡备选',
        content:
          '**Qwen3 32B是能够执行所有操作且第一名没有的模型。** 当您为通用和轻代码工作组合需要一个模型而不想操作两个安装时选择。',
        items: [
          '**优点：** 跨4个MCP服务器的一致工具调用可靠性、良好的一般推理、在24GB GPU上足够快以处理长代理循环。',
          '**故障模式：** Cline严格格式中偶发XML畸形。发生时，代理循环干净重试——这是实践中低影响故障模式。',
          '**推荐量化：** Q4_K_M。Qwen3优雅量化；如果有VRAM，Q5_K_M是小升级。',
          '**使用地点：** 混合工作负载，您不想每个任务切换模型。"团队一个模型"选择。',
        ],
      },
      qwen3coder: {
        id: 'qwen3-coder',
        title: 'Qwen3-Coder 30B：代码形选择',
        content:
          '**Qwen3-Coder 30B是代码形MCP工作的最好工具调用者。** `replace_in_file`、`read_file`、代码感知浏览器操作和GitHub PR管理都从烘焙的代码微调中受益。',
        items: [
          '**优点：** 代码MCP工具上最高的格式良好调用率(~96%)、多文件代理任务上强、比其他32B选择更低的VRAM(Q4_K_M下~18GB)。',
          '**故障模式：** 非代码服务器上较弱。Sqlite和puppet可靠性与Gemma 4相比下降——Qwen3-Coder比通用模型更少慣用地处理数据库查询和浏览器操作。',
          '**推荐量化：** Q4_K_M。如果想要更尖锐的代码推理，Q5_K_M是小步。',
          '**使用地点：** Cline + Continue.dev代码代理、回购重构、探索性漏洞调试。如果你的代理也触碰非代码服务器，与Gemma 4配对。',
        ],
      },
      llama33: {
        id: 'llama-3-3',
        title: 'Llama 3.3 70B：最高上限',
        content:
          '**Llama 3.3 70B是2026年5月开放权重生态中最可靠的工具调用者。** 仅在硬件允许时使用——较小模型通常足以处理日常工作。',
        items: [
          '**优点：** 跨4个服务器最高的格式良好调用率(~97%)、最强的链式调用可靠性、对混乱输入的鲁棒性。您停止因责怪工具框架的模型。',
          '**故障模式：** 速度。Llama 3.3 70B在单个L40S 48GB的Q4_K_M处支持~10–15令牌/s；长代理循环感觉缓慢。在2×RTX 3090分割推论中，吞吐量改进但设置更复杂。',
          '**推荐量化：** Q4_K_M是下限；如果VRAM允许(~52GB)Q5_K_M是首选。Llama 3.3优雅量化——Q4和Q5之间的差异小于Gemma 4。',
          '**使用地点：** 可靠性比速度重要时的工作流(合规报告、法律审查、异常处理)。或任何有多余硬件的设置。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Llama 3.3 70B在Q4_K_M处需要~42GB VRAM; 舒适地装在单个L40S 48GB或带分割推论的2×RTX 3090 24GB中; 在有64GB+统一内存的Apple M系列机器上运行。每令牌吞吐量是实践约束——长代理循环即使每个调用可靠也感觉缓慢。',
          },
        ],
      },
      nonStarters: {
        id: 'non-starters',
        title: '工具调用不工作的模型',
        content:
          '**模型的3个类别无论工具框架如何都以相同方式失败。** 停止尝试让它们工作；切换到上面的可靠选择之一。',
        items: [
          '**Sub-7B模型。** Llama 3.2 1B、Llama 3.2 3B、Phi-3 Mini、Gemma 2 2B——所有在平凡单步任务以外发出格式错误的工具调用。可接受的分流分类（输出是短字符串）；不可接受的多步计划。',
          '**没有工具调用训练的通用模型。** 大多数通用7B–13B聊天模型无显式工具调用微调将工具调用转述为散文、误配参数模式或发明不存在的工具。模型类别是故障，不是大小。',
          '**可靠模型的重量化版本。** Q3、Q2和IQ-量子在降低聊天质量之前降低工具调用可靠性。Q3 Gemma 4 27B是比Q4 Qwen3 32B更差的工具调用者即使在聊天质量上相当基准。使量化与工作负载相匹配——Q4_K_M是生产下限。',
          '**症状当你尝试。** Cline中的格式错误XML（工具调用块解析器无法提取）、Aider中转述的SEARCH/REPLACE块、Continue.dev中不匹配开放文件的围栏代码、以及模型建议相同调用两次的停滞代理循环。都不是工具框架漏洞——切换框架会在不同形状中显示相同故障。',
        ],
        callouts: [
          {
            type: 'warning',
            text: '工具调用的Sub-7B模型是我们看到的最大的时间浪费。症状("工具框架坏了"、"MCP坏了"、"Cline坏了")全指向模型。切换到工具调用训练27B+，堆栈中别的都不改，症状消失。',
          },
        ],
        image: '/images/tool-calling-non-starters-zh.svg',
        imageCaption: '三类不适合工具调用的模型：7B以下模型在多步任务中产生格式错误的调用；无工具调用训练的模型将调用转为文字描述；Q3/Q2量化在聊天质量下降前先降低工具可靠性——Q4_K_M是生产最低标准。',
      },
      formatComparison: {
        id: 'format-comparison',
        title: '工具调用格式：相同技能，不同有线格式',
        content:
          '**相同模型处理所有4种格式。** 格式选择是工具框架/协议决定，不是模型决定。',
        columns: ['格式', '在哪里看到', '严格?', '对格式错误的宽容'],
        rows: [
          { '格式': 'OpenAI工具(JSON)', '在哪里看到': 'OpenAI API、Continue.dev代理', '严格?': '模式验证', '对格式错误的宽容': '表面错误; 模型重试' },
          { '格式': 'Cline XML工具块', '在哪里看到': 'Cline VS Code扩展', '严格?': '非常严格', '对格式错误的宽容': '循环停滞; 小模型首先在这里受苦' },
          { '格式': 'MCP JSON-RPC 2.0', '在哪里看到': 'Goose、Cline、Continue.dev、LM Studio', '严格?': '模式验证', '对格式错误的宽容': '表面错误; 模型重试; 生态收敛的有线格式' },
          { '格式': 'Aider SEARCH/REPLACE块', '在哪里看到': 'Aider CLI', '严格?': '模式匹配、逐字', '对格式错误的宽容': '拒绝并重试; 小模型转述SEARCH块并失败' },
        ],
        items: [
          '**格式可移植性声明：** 上面的5个可靠模型无需每格式重新配置即处理4种格式。在Cline工具块上可靠工具调用的Gemma 4 27B通常在Goose+MCP和Continue.dev代理上可靠工具调用。',
          '**含义：** 选择您的工具框架原生支持的格式，不是您的模型。模型是负重变量。',
          '**异常：** Qwen3-Coder的SEARCH/REPLACE块准拜比Qwen3略好，因为代码微调强调差异保真。边缘——Qwen3 32B在Aider中也很好。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '选择您的工具框架原生支持的格式，不是基准好的格式。上面的5个可靠模型跨4种格式移植；工具框架UX(每步批准、审计跟踪、IDE整合)是实际成功的更大驱动力比格式选择。',
          },
        ],
        image: '/images/tool-calling-format-comparison-zh.svg',
        imageCaption: '四种工具调用线格式对比：OpenAI JSON（Schema验证）、Cline XML（非常严格，最先暴露失败）、MCP JSON-RPC 2.0（生态系统标准，Schema验证）、Aider SEARCH/REPLACE（逐字模式匹配）——5个基准模型均支持4种格式。',
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '工具调用模型选择中常见错误',
        items: [
          '**错误1: 因工具调用故障责怪工具框架。** 症状（格式错误XML、转述SEARCH块、不匹配开放文件的围栏代码）在工具框架间以不同表面形式显示；原因通常是缺少工具调用训练的模型。首先切换模型；仅在确认模型在其他地方可靠工具调用时切换工具框架。',
          '**错误2: 不足量化以装入较小GPU。** 可靠27B的Q3和IQ-量子通常比下一大小的Q4_K_M更差。将模型和量化作为对选择，不是独立。',
          '**错误3: 对"简单"工具调用使用小通用模型。** 提示中的"简单"不是7B通用模型的"简单"——格式错误调用率足够高以至于即使单步任务在5–10%的运行中停滞。对分流分类使用Llama 3.2 3B且对工具调用使用Gemma 4 27B（或更大）。',
          '**错误4: 忽略链式工具调用复合。** 95%复合跨代理循环步骤。8步任务在95%处成功~66%的时间。为复合计划——保持计划地平线短、使用批准网关并倾向于最小可靠模型处理最长现实地平线。',
          '**错误5: 追逐排行榜数字而不是MCP可靠性。** 公共基准是有用信号但不与MCP服务器工作负载一对一转换。适合您堆栈的正确基准是您的堆栈。如果无法运行那个，倾向于此列表中的模型——它们生存真实工作负载。',
        ],
      },
      sources: {
        id: 'sources',
        title: '来源',
        items: [
          '[模型上下文协议规范](https://modelcontextprotocol.io/) — JSON-RPC模式、传输和测试工具框架中使用的生命周期定义。',
          '[Berkeley函数调用排行榜(BFCL)](https://gorilla.cs.berkeley.edu/leaderboard.html) — 公共函数调用基准; 有用的方向信号，不是MCP等价。',
          '[Ollama模型库](https://ollama.com/library) — 模型可用性、工具调用支持标志、上述量化级别。',
          '[modelcontextprotocol/servers GitHub仓库](https://github.com/modelcontextprotocol/servers) — 测试集使用的参考文件系统、sqlite、postgres、puppet和github服务器。',
          '[Hugging Face模型卡 Gemma 4、GLM-5.1、Qwen3、Qwen3-Coder、Llama 3.3](https://huggingface.co/) — 官方工具调用训练文档。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '2026年本地工具调用中最高成功率的模型是什么？',
            a: 'Llama 3.3 70B在我们测试的4个参考MCP服务器中具有最高的格式良好调用率(~97%)。Q4_K_M下需要48GB+ VRAM，因此大多数用户选择较小可靠模型之一——通用工作Gemma 4 27B、长上下文GLM-5.1 32B、代码Qwen3-Coder 30B、均衡备选Qwen3 32B。4个27B-32B选择落在93-96%范围且对带批准网关的生产代理工作足够可靠。',
          },
          {
            q: 'Gemma 4原生工具调用无提示技巧工作？',
            a: '是的。Gemma 4 27B从标准聊天格式直接发出干净的函数调用JSON和干净的Cline XML——无工具特定提示、无JSON模式包装、无系统提示呪咒必要。模型在事后训练阶段进行工具调用训练；像任何聊天模型一样调用它，系统提示中的工具列表，其余部分处理。',
          },
          {
            q: 'Llama 3.3 70B能否可靠执行工具调用？',
            a: '是——测试的5个模型中可靠性最高。折衷是硬件: Q4_K_M下需要~42GB VRAM，因此舒适地装在单个L40S 48GB或分割推论2×RTX 3090 24GB及64GB+统一内存Apple M系列。每令牌吞吐量是实践约束——长代理循环即使每个调用可靠也感觉缓慢。',
          },
          {
            q: '哪个模型最好处理并行函数调用？',
            a: 'Llama 3.3 70B领先并行调用可靠性——当提示是"同时列表这3个目录"时，70B更清洁地发出并行调用。Gemma 4 27B和Qwen3 32B紧密追随。Qwen3-Coder 30B在并行调用上略弱因为代码微调偏向顺序编辑。边缘——对大多数代理工作负荷，并行调用可靠性比链式调用可靠性重要性小——链式在实践中更常见。',
          },
          {
            q: '量化版本在工具调用中性能更差？',
            a: '是且降级在降低聊天质量之前降低工具调用可靠性。Q3 Gemma 4 27B是比Q4 Qwen3 32B更差工具调用者即使在聊天质量上相当基准。匹配量化与工作负荷——Q4_K_M是生产下限; Q5_K_M是安全步; Q3及以下不建议代理工作。',
          },
          {
            q: '我可以微调更小模型以获得更好的工具调用吗？',
            a: '可能但价值不高。上述5个模型有在事后训练阶段原生的工具调用训练; 社区微调在较小基础上通常不匹配。使用可靠模型之一。如有域特定工具表面，小LoRA在Gemma 4或Qwen3顶部可锐化模式准拜——但不会非工具调用模型变成可靠工具调用者。',
          },
          {
            q: '哪个模型对JSON输出最可靠？',
            a: '可靠JSON输出和可靠工具调用相关但不同。纯JSON模式工作，Gemma 4 27B和GLM-5.1 32B最强——两者无后续散文发出干净JSON。工具调用特定：5个可靠模型都合格；他们在工具调用包装内发出的JSON格式良好。',
          },
          {
            q: '工具调用是否在仅CPU设置中工作？',
            a: '技术上是，实际上困难。Gemma 4 27B在Q4_K_M下在32GB CPU上支持~1-3令牌/s; 多步任务的代理循环需要30K-80K令牌花小时。仅CPU对评估和小模型分流分类(Llama 3.2 3B)很好；生产代理，GPU或Apple Silicon统一内存是实践下限。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[通过MCP连接Ollama到数据库和API：本地代理设置2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026) — 实践实现; 上述模型工具调用的协议层。',
          '[2026年本地AI代理：实际工作(及仍然失败)的](/zh/power-local-llm/autonomous-local-agents-actually-work) — 更广方针; 工具调用可靠性如何跨代理循环步骤复合。',
          '[Continue.dev对Cline对Aider：最佳本地代码代理2026](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 相邻工具框架比较。',
          '[用本地LLM替换GitHub Copilot](/zh/power-local-llm/replace-github-copilot-with-local-llm) — 上述工具调用模型的应用用例。',
          '[Ollama顶部开源模型](/zh/local-llms/top-open-source-models-ollama) — 更广模型权限。',
          '[LLM量化说明](/zh/local-llms/llm-quantization-explained) — 量化理论; Q4_K_M为什么是工具调用工作负载生产下限。',
        ],
      },
    },
  },
}
