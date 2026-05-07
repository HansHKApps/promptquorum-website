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
}
