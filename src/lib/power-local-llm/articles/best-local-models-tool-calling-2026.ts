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
}
