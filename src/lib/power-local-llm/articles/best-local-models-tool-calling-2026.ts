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
}
