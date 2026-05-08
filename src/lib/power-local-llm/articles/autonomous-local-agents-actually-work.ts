// Power Local LLM — Local AI Agents in 2026: What Actually Works (And What Still Fails)
// Slug: autonomous-local-agents-actually-work
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
    title: 'Local AI Agents in 2026: What Actually Works (And What Still Fails)',
    seoTitle: 'Local AI Agents 2026: What Works, What Fails (Honest Test)',
    intro:
      'Six local AI agent stacks, five real tasks, thirty days of evaluation. Two stacks land tasks reliably. Three fail in ways the demos do not show. One is effectively unusable. This is the honest report — what each agent setup actually does on a refactor, a research task, an email triage, a scrape-and-summarize, and a bug hunt, with the failures named specifically and the supervision cost quantified.',
    metaDescription:
      'Honest test of 6 local AI agent stacks (Cline, Continue.dev, LangGraph, AutoGPT, OpenInterpreter, MetaGPT) on 5 real tasks. 2 work reliably, 3 fail surprisingly, 1 is unusable. Verdicts named.',
    twitterDescription:
      'Tested 6 local agent stacks on 5 real tasks for 30 days. 2 worked, 3 failed in surprising ways, 1 was unusable. The honest verdict on which stacks ship work and which only ship demos.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3 32B',
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Llama 3.3 70B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      '2× NVIDIA RTX 3090 24 GB',
    ],
    audience:
      'Developers and technical operators evaluating local AI agent stacks for real work — refactors, research, content workflows, debugging — and who want a verdict before they invest a weekend setting one up.',
    readTime: '16 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local AI agent',
    targetKeywords: [
      'local ai agents 2026',
      'autonomous agents reality check',
      'cline vs autogpt local',
      'best local agent framework',
      'do ai agents actually work',
      'local llm agent comparison',
    ],
    leadAnswerBlock:
      '**In May 2026, two local agent stacks land real work without constant babysitting: Cline + Ollama and Continue.dev Agent mode. Both are scoped, well-maintained, and run a tool-calling model (Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B) inside a single editor with explicit approval gates. Three stacks fail in surprising ways — LangGraph + Ollama (orchestration is brittle on long horizons), OpenInterpreter (executes shell commands too eagerly to leave unattended), and MetaGPT local (multi-agent role-play loses the plot past two hand-offs). One stack is effectively unusable: AutoGPT-local — the project has stalled, dependencies do not match modern Ollama, and the planning loop drifts into circular tool calls within a few minutes. The pattern is consistent: scoped, opinionated harnesses around one strong tool-calling model beat ambitious autonomous agents on every task we ran.**',
    quickAnswerTop: {
      en: {
        question: 'Do autonomous local AI agents actually work in 2026?',
        answer:
          'Some do, most do not. The two reliable stacks are Cline + Ollama (autonomous coding agent inside VS Code with per-step approval) and Continue.dev Agent mode (lighter agent loop in the same IDE). Both succeed because they are scoped — one editor, one model, one approval gate — not because the underlying technology is finally good enough for unattended autonomy. The frameworks pitched as "fully autonomous" (AutoGPT-local, MetaGPT, custom LangGraph orchestrators) still drift into circular tool calls, hallucinate file paths, or get stuck on long-horizon planning. The right model in 2026 is "supervised assistant" — agents that propose multi-step actions and stop for approval — not "autonomous worker". Anything sold as autonomous is a demo, not a product.',
        bullets: [
          'Two stacks ship real work: Cline + Ollama and Continue.dev Agent. Both are scoped to a single IDE, run one tool-calling model, and require human approval per step.',
          'Three stacks fail in non-obvious ways: LangGraph + Ollama (brittle on long horizons), OpenInterpreter (too eager to execute shell), MetaGPT local (multi-agent role-play breaks down).',
          'AutoGPT-local is effectively unusable in May 2026 — stalled project, broken dependencies, planning loop drifts within minutes.',
          'Tool-call reliability comes from the model, not the harness. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, and Llama 3.3 70B work in any of the reliable stacks. Models under 7B fail in all of them.',
          'Supervision cost is the metric that matters. The "best" agent is the one whose approvals you actually read — not the one with the longest autonomous run.',
          'The 2027 outlook: longer-horizon planning will improve incrementally. Unsupervised autonomy on real tasks is not happening this year, regardless of what the demos show.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'How We Tested', anchor: '#how-we-tested' },
      { label: 'Agent Reality Table', anchor: '#reality-table' },
      { label: 'What Works: Cline + Ollama', anchor: '#cline-ollama' },
      { label: 'What Works: Continue.dev Agent', anchor: '#continue-agent' },
      { label: 'What Fails: LangGraph + Ollama', anchor: '#langgraph' },
      { label: 'What Fails: OpenInterpreter', anchor: '#openinterpreter' },
      { label: 'What Fails: MetaGPT Local', anchor: '#metagpt' },
      { label: 'Unusable: AutoGPT-Local', anchor: '#autogpt' },
      { label: 'Why Agent Demos Look Better Than Reality', anchor: '#demos-vs-reality' },
      { label: 'Supervision Cost Is the Real Metric', anchor: '#supervision-cost' },
      { label: 'Tasks You Should Never Trust an Agent With', anchor: '#never-trust' },
      { label: 'Decision: Pick Your Stack', anchor: '#decision' },
      { label: 'What 2027 Probably Brings', anchor: '#outlook' },
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
          '**Two stacks land real work in May 2026:** Cline + Ollama (autonomous coding agent inside VS Code) and Continue.dev Agent mode. Both are scoped to one editor, one model, and one approval gate per step.',
          '**Three stacks fail in surprising ways:** LangGraph + Ollama orchestration is brittle past 4–5 step horizons, OpenInterpreter executes shell commands too eagerly to leave unattended, MetaGPT local multi-agent role-play breaks down past two hand-offs.',
          '**One stack is unusable:** AutoGPT-local is effectively abandoned — dependencies do not match modern Ollama, the planning loop drifts into circular tool calls within minutes, and there is no maintainer responding to issues.',
          '**Tool-call reliability is a property of the model, not the harness.** Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, and Llama 3.3 70B emit clean tool calls in every reliable stack. Models under 7B emit malformed calls regardless of which agent wraps them.',
          '**The "supervised assistant" model wins in 2026.** Agents that propose multi-step actions and stop for approval finish more tasks than agents that try to run unattended. This is a properties-of-2026-LLMs limit, not a UX preference.',
          '**Supervision cost is the metric that matters.** A 30-minute task that requires three approvals is shippable. A 2-hour task that requires twenty approvals is not — you are doing the work, the agent is just slowing it down.',
          '**Cost is real but small.** Local-only inference, no API spend, electricity is the only marginal cost. Token consumption per task is the constraint — agent loops burn 30K–80K tokens for a multi-step task, so 32K-context models hit the wall fast and 128K-context models are comfortable.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Stacks tested:** Cline + Ollama, Continue.dev Agent, LangGraph + Ollama (custom), AutoGPT-local, OpenInterpreter, MetaGPT local.',
          '**Tasks tested:** topic research, multi-file refactor, email-draft triage, scrape-and-summarize, bug debugging.',
          '**Hardware:** Apple M5 Max 64 GB unified memory and 2× NVIDIA RTX 3090 24 GB box; both run Qwen3-Coder 30B Q4_K_M comfortably at 32K context.',
          '**Models:** Qwen3-Coder 30B (primary), GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B (the four reliable tool-callers in May 2026).',
          '**Verdict shape:** 2 stacks reliable across all 5 tasks, 3 stacks reliable on 1–2 tasks each, 1 stack unusable.',
          '**Cost:** $0 in API fees. ~$0.10–$0.30 in electricity per multi-step task on a 350W desktop GPU rig (under $0.05 on a Mac).',
          '**Supervision pattern that works:** auto-approve read tools, manual approve every write/shell tool, review the audit log after long sessions.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'How We Tested: Same Model, Same Tasks, Different Harnesses',
        content:
          '**The test held the model constant and varied only the agent harness.** Every stack received the same five tasks against the same backend (Ollama serving Qwen3-Coder 30B at Q4_K_M), so failures attribute to the harness, not the model.',
        items: [
          '**Backend:** Ollama 0.5+ on macOS and Linux. Primary model Qwen3-Coder 30B Q4_K_M (32K context). Secondary models (GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B) used to verify tool-call failures were not a single-model artefact.',
          '**Hardware:** one Apple M5 Max 64 GB MacBook Pro and one Linux desktop with 2× RTX 3090 24 GB. Both sustain Qwen3-Coder 30B at usable speed (>15 tokens/s).',
          '**Tasks:** topic research (collect, deduplicate, summarize 8 sources on a niche subject), multi-file refactor (rename a service across 12 TypeScript files), email-draft triage (summarize and draft replies for a folder of 40 messages), scrape-and-summarize (read 5 URLs and produce a comparison brief), bug debugging (find why an existing test is flaky).',
          '**Run cadence:** each task ran 3 times per stack across the 30-day window, with a fresh prompt each time. Outcome graded as "complete unattended", "complete with supervision", "partial", or "stalled / failed".',
          '**Supervision metric:** number of approvals required per task and the share of approvals where we rejected the proposed action. A high reject rate signals the harness is generating noise the human has to filter.',
          '**Honesty constraint:** ranges, not invented exact percentages. "Reliable across all 5 tasks" means 13–15 of 15 runs landed; "fails on long horizons" means 3–6 of 15 runs landed without intervention. The verdicts are conservative — when a stack worked but only with non-trivial intervention, it counts as a failure for unattended-task purposes.',
          'Tool-call reliability is the layer underneath all of this. For the model-side comparison, see [Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026); the protocol layer is covered in [Connect Ollama to Databases and APIs With MCP](/power-local-llm/local-ai-agents-with-mcp-2026).',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: 'Agent Reality Table: Six Stacks, Five Tasks, Honest Verdicts',
        content:
          '**Two stacks finish work; three stumble in different ways; one is broken.** The verdict column is the one to read first.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama and Continue.dev Agent are the only two local agent stacks that finish real tasks reliably in May 2026; LangGraph, OpenInterpreter, and MetaGPT each fail in a different way; AutoGPT-local is unusable.',
          },
          {
            type: 'plain-terms',
            text: 'If you want a local agent that actually finishes a refactor or a research task, install Cline or Continue.dev and stop reading. The other four stacks have demos that look better than the reality of leaving them running for ten minutes.',
          },
        ],
        columns: ['Stack', 'Task success rate', 'Failures observed', 'Supervision needed', 'Verdict'],
        rows: [
          {
            'Stack': 'Cline + Ollama',
            'Task success rate': '13–15 of 15 runs land',
            'Failures observed': 'Token pressure on 32K-context models for multi-file work; recoverable with 128K context',
            'Supervision needed': 'Per-step approval; ~5–12 approvals per task',
            'Verdict': 'Works. Default pick for coding-shaped tasks.',
          },
          {
            'Stack': 'Continue.dev Agent',
            'Task success rate': '12–14 of 15 runs land',
            'Failures observed': 'Plan horizon shorter than Cline; multi-file edits sometimes stop after 2–3 files',
            'Supervision needed': 'Diff-preview approval; ~4–8 approvals per task',
            'Verdict': 'Works. Lighter alternative when Cline is overkill.',
          },
          {
            'Stack': 'LangGraph + Ollama',
            'Task success rate': '4–7 of 15 runs land without intervention',
            'Failures observed': 'Brittle past 4–5 step horizons; state-machine cycles when a tool returns unexpected data; no native approval gate (you build it)',
            'Supervision needed': 'High — debugging the orchestration is half the work',
            'Verdict': 'Failed. Build effort exceeds the value for 90% of users.',
          },
          {
            'Stack': 'AutoGPT-local',
            'Task success rate': '0–2 of 15 runs land',
            'Failures observed': 'Project stalled in 2024–2025; dependencies mismatch modern Ollama; planning loop drifts into circular tool calls within minutes',
            'Supervision needed': 'Constant — the agent does not converge',
            'Verdict': 'Unusable. Skip entirely in 2026.',
          },
          {
            'Stack': 'OpenInterpreter',
            'Task success rate': '6–9 of 15 runs land — but with risk',
            'Failures observed': 'Eager shell execution; will run destructive commands without explicit guardrails; safety prompts inconsistent',
            'Supervision needed': 'Constant — cannot leave unattended',
            'Verdict': 'Failed for autonomy. Useful only as a babysat REPL.',
          },
          {
            'Stack': 'MetaGPT local',
            'Task success rate': '3–6 of 15 runs land',
            'Failures observed': 'Multi-agent role-play (PM → Engineer → QA) drifts past two hand-offs; agents repeat earlier work; outputs contradict each other',
            'Supervision needed': 'High — and you are debugging the role definitions, not the task',
            'Verdict': 'Failed. The multi-agent abstraction is the problem, not the implementation.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: 'What Works: Cline + Ollama Is the Default Pick',
        content:
          '**Cline + Ollama is the only stack that landed every task type with predictable supervision cost.** It works because it is scoped: one IDE (VS Code), one model, one approval gate per step.',
        items: [
          '**What it is:** Cline is a VS Code extension that turns the editor into an autonomous agent surface. The model proposes a plan in Plan mode, executes it in Act mode through a tool surface (read_file, write_to_file, replace_in_file, execute_command, list_files, search_files), and asks for approval between steps unless tools are on an allow-list.',
          '**Why it works:** the harness is opinionated. The tool surface is small and stable, the approval flow is in your face (every step is a card you accept or reject), and the model only ever sees the editor — not the whole machine. Failures are recoverable because the latest action is always one click of revert away.',
          '**Where it shines:** multi-file refactors (rename a service across 12 files in one task), exploratory bug debugging ("find why this test is flaky" — Cline reads adjacent test files, traces dependencies, proposes a hypothesis, edits, runs the test), and scoped research that produces a markdown deliverable inside the project.',
          '**Where it stumbles:** non-coding tasks that require external HTTP (no native browser). Email-draft triage works only if you wire in an MCP server or shell tools — and at that point you are configuring three things to do what a smaller, scoped tool would do directly.',
          '**Supervision cost:** ~5–12 approvals per task. Most are read tools (cheap, fast accept). The expensive ones are write_to_file and execute_command — set those to require manual approval and you will catch the rare bad call before it lands.',
          '**Token cost:** high. Full file contents stream into the conversation as the agent reads them. A 12-file refactor on Qwen3-Coder 30B at 32K context burns through the window fast — switch to a 128K-context model (DeepSeek Coder V3, Llama 3.3 70B) for non-trivial work.',
          'For deeper Cline configuration including auto-approve allow-lists, see [Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Run Cline against Qwen3-Coder 30B (Q4_K_M, ~17 GB VRAM) for coding tasks. For tasks that touch more than 6 files in one session, switch to DeepSeek Coder V3 or another 128K-context model — the 32K window on Qwen3-Coder will fill before the agent finishes.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: 'What Works: Continue.dev Agent Mode for Lighter Tasks',
        content:
          '**Continue.dev Agent mode is the right pick when Cline is overkill.** Same IDE, same model class, smaller surface — fewer approvals, shorter plan horizon, lower token consumption.',
        items: [
          '**What it is:** Continue.dev is primarily an autocomplete and chat extension for VS Code and JetBrains, with an Agent mode that adds tool calls (file read/write, codebase search, terminal execution) and a multi-step plan loop. The agent is more constrained than Cline\'s — fewer tools, shorter default horizons, less aggressive autonomous behaviour.',
          '**Why it works:** Continue.dev\'s author audience is autocomplete users, so Agent mode inherits a "small, fast, in your face" UX. Every edit lands as a diff preview before the model touches the file. Plans rarely exceed 3–5 steps, which keeps token consumption modest and the audit trail short.',
          '**Where it shines:** single-file or two-file tasks, "explain this codebase region", "rewrite this function with these constraints", "add a test for this method". The agent runs without dragging the whole codebase into the conversation, so a 32K-context model is comfortable.',
          '**Where it stumbles:** plans longer than 5 steps. Multi-file refactors that need 8+ edits sometimes stop after 2–3 files and ask the user to continue. This is not a bug — it is the harness being conservative about plan horizon — but it means you supervise more often than with Cline on the same task.',
          '**Supervision cost:** ~4–8 approvals per task, weighted toward diff previews (high signal, fast accept).',
          '**Token cost:** noticeably lower than Cline because Continue.dev uses its TF-IDF + embeddings index to retrieve relevant chunks instead of streaming whole files. A 32K-context model finishes most tasks comfortably.',
          'When to pick Continue.dev Agent over Cline: when the task fits in 2–3 files, when token budget is tight, when you already use Continue.dev for autocomplete and want one tool not two.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: 'What Fails: LangGraph + Ollama (Brittle on Long Horizons)',
        content:
          '**LangGraph + Ollama is the right tool for production orchestration and the wrong tool for "I want an agent on my laptop".** The build effort is high, the failure modes are non-obvious, and the value is realised only at scale.',
        items: [
          '**What it is:** LangGraph is a state-machine orchestration library. You define nodes (typed functions that call the model, run a tool, evaluate a condition) and edges (transitions). The runtime executes the graph, handles branching, and manages state across steps. Pair it with an Ollama backend and you have a custom local agent.',
          '**Why it fails as a desktop agent:** the failure surface is the orchestration code, not the model. State machines that look clean on a whiteboard cycle when a tool returns unexpected data — for example, an HTTP fetch that returns 200 but with empty body, a file read on a path that exists but is a directory. You debug your graph as much as the agent debugs the task.',
          '**Plan horizon:** brittle past 4–5 nodes. Each branching point doubles the test surface. By node 6 you have a tree of possible execution paths and the model picks one you did not anticipate. The graph then rewrites state in a way the next node cannot consume.',
          '**No native approval gate:** you build human-in-the-loop interrupts yourself. The library supports it (interrupt-and-resume is documented) but the implementation is on you. Cline and Continue.dev give you this for free.',
          '**Where it actually belongs:** server-side workflows where you control the input shape, the tool surface is fixed, and you can write a real test suite for the graph. For example, a customer-support routing workflow with three deterministic tools and one model node — that is the LangGraph sweet spot.',
          '**Verdict for the local-agent question:** failed. Building a custom LangGraph orchestrator to do what Cline does in one install is wasted time for 90% of users. Do it only if you have a workflow shape Cline cannot express and you have the testing discipline to keep the graph honest.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'This is not a criticism of LangGraph — the library is solid for production workflows. The criticism is that "use LangGraph for your local agent" is the wrong recommendation when scoped harnesses already exist.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: 'What Fails: OpenInterpreter Is Useful Babysat, Dangerous Unattended',
        content:
          '**OpenInterpreter executes shell commands too eagerly to leave unattended.** It is genuinely useful as a babysat REPL — you describe a task, it writes Python or shell, you watch it run — and genuinely unsafe to walk away from.',
        items: [
          '**What it is:** OpenInterpreter is a CLI that lets a model write and execute code (Python, shell, JavaScript, R) on your machine. The interactive prompt asks for confirmation before running each block — by default. The framing is "ChatGPT Code Interpreter, locally".',
          '**Why it fails as an autonomous agent:** the safety prompt is per-block, and the model regularly proposes shell commands that look benign but produce permanent state changes (`rm` in deep paths, `pip install` into the system Python, `git reset --hard`). Confirming each block becomes the work — you cannot skim because the cost of approving the wrong block is unbounded.',
          '**Auto-confirm mode exists.** It is also where every horror story comes from. We do not recommend running OpenInterpreter with auto-confirm on a machine that has anything you care about.',
          '**Where it shines:** as a babysat scratchpad. "Convert this CSV to Parquet", "extract metadata from these 200 PDFs", "rewrite this Python script to use asyncio". Tasks where you stay in the terminal, watch every command, and the model is doing the typing-faster work for you.',
          '**Where it falls down:** anything resembling autonomy. Even with confirmation prompts on, a 30-minute task averages 40+ confirmations and the failure modes are varied (wrong working directory, partial reads, network calls you did not expect).',
          '**Supervision cost:** essentially 100% — you are supervising every block. A "5-minute" task takes longer than doing it by hand once you account for reading and approving.',
          '**Verdict:** useful tool, wrong category. OpenInterpreter is a coding assistant that runs code, not an autonomous agent. Scoring it against Cline is the wrong frame; the right frame is "Cline ships a feature, OpenInterpreter writes a one-off script".',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: 'What Fails: MetaGPT Local (Multi-Agent Role-Play Breaks Down)',
        content:
          '**MetaGPT\'s "PM → Engineer → QA → Designer" multi-agent role-play does not survive contact with non-trivial tasks.** Past two hand-offs, agents repeat earlier work, contradict each other, or get stuck negotiating their own roles.',
        items: [
          '**What it is:** MetaGPT is a multi-agent framework that simulates a software-development team. A Product Manager agent writes requirements, an Architect agent designs, an Engineer agent codes, a QA agent tests. Each agent is the same underlying model with a different system prompt and tool set.',
          '**Why it fails:** multi-agent role-play assumes the model can hold a coherent persona across many turns and reliably hand off context. In practice, with a local 30B-class model, the personas blur. The Engineer agent re-runs the PM agent\'s analysis. The QA agent rewrites code instead of testing it. The handoff state — what each agent learned in its turn — is the bug.',
          '**The deeper issue:** multi-agent abstraction adds turns without adding capability. A single agent with the same tool surface and a longer scratchpad does the same task in fewer tokens with less drift. The "team" framing is anthropomorphic, not architectural.',
          '**Where it might work:** narrowly defined tasks with hard hand-off boundaries — for example, a writing-team workflow (research → outline → draft → edit) where each step has a deliverable and the next step ignores prior reasoning. We did not find a real workflow where MetaGPT outperformed a single-agent harness with a checklist prompt.',
          '**Verdict:** failed. The bug is conceptual, not in the implementation. Single-agent harnesses with structured prompts beat multi-agent harnesses on every task we ran.',
          'For prompting techniques that improve any single-agent loop\'s reliability, see [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting) — the same structured-reasoning pattern that helps a model think helps a single agent stay coherent.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Unusable: AutoGPT-Local Is Effectively Abandoned',
        content:
          '**AutoGPT-local is not a stack to evaluate in 2026 — it is a stack to skip.** The project is effectively unmaintained, dependencies do not match modern Ollama, and the planning loop drifts within minutes.',
        items: [
          '**What happened:** AutoGPT was the canonical "autonomous agent" project of 2023. The hype outran the technology — the planning loops were never reliable on real tasks. The project stalled, the maintainer team dispersed, and the local-only fork lagged behind every dependency update for 18+ months.',
          '**Concrete breakage in May 2026:** the Ollama integration assumes an API shape that changed in 2024. The internal planning prompts were tuned for GPT-3.5-class models and produce malformed plans on modern open-weights models. Issues filed on the repo in 2025 remain open and unanswered.',
          '**The planning loop drifts:** in the runs that started, the agent typically entered a circular tool-call pattern within 2–4 minutes — re-reading the same files, re-running the same searches, never converging on the task. This is the well-known failure mode of unscoped autonomous loops, exactly the thing scoped harnesses (Cline, Continue.dev) avoid by design.',
          '**Verdict:** unusable. Do not invest a weekend in AutoGPT-local in 2026. The interesting work has moved to scoped harnesses with explicit approval gates; AutoGPT is a historical artifact, not a current option.',
          '**If you are nostalgic:** the original repo is still on GitHub. The right way to engage with it is as a lesson — autonomy was the wrong abstraction; supervised assistance is what works.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: 'Why Agent Demos Look Better Than Reality',
        content:
          '**Demos are curated; real tasks are not.** Three structural reasons explain why an agent video looks better than your first 30 minutes with the same stack.',
        items: [
          '**Demo tasks are scoped.** "Build a snake game" or "summarize this PDF" have a known shape, a small file surface, and an unambiguous success signal. Real tasks are open-ended ("find why our checkout flow drops 3% of users") and have a large file surface, ambiguous success criteria, and side effects that compound errors.',
          '**Demo runs are cherry-picked.** A 30-second demo video is the best-of-many take. The runs where the agent stalled, hallucinated a file path, or called a deprecated function are not in the cut. You do not see the success rate; you see one success.',
          '**Demo prompts are over-specified.** "Refactor the User service to use the new repository pattern" works in a demo because the demo has the new pattern documented in a file the agent finds. Your real task has the pattern in a Slack thread from three weeks ago. The model does not have your context; the demo did.',
          '**Demo models are larger than your local model.** Cloud demos run on frontier models. Local agents run on whatever you can serve at >10 tokens/s. Qwen3-Coder 30B is excellent in May 2026 but it is not GPT-5 — and the demos quietly use the better model.',
          '**The takeaway:** assume any demo represents the top 10% of runs. The reasonable expectation for a real task is the median run, with a 20–30% chance of failure that requires intervention. Plan for the median.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: 'Supervision Cost Is the Real Metric',
        content:
          '**The "best" agent is not the one with the longest autonomous run — it is the one whose approvals you actually read.** Counting approvals is the most useful number we measured.',
        items: [
          '**Low-supervision tasks (3–8 approvals total):** Cline on a scoped refactor, Continue.dev Agent on a single-file task. You skim the approvals because they are mostly read operations and one or two writes; total task time is dominated by model latency, not approval friction.',
          '**Medium-supervision tasks (10–20 approvals):** Cline on a multi-file task that touches 8+ files, Continue.dev Agent on anything that pushes its plan horizon. You approve more carefully; total task time is split roughly half model, half you.',
          '**High-supervision tasks (40+ approvals):** OpenInterpreter doing anything non-trivial. The agent is a typing-speed multiplier, not a productivity multiplier — you are still doing the cognitive work and reading every block.',
          '**Failed-supervision pattern:** approval fatigue. Past ~30 approvals in a session, humans rubber-stamp. The harness that requires too many approvals trains you out of reviewing them, at which point the safety gate is fictional.',
          '**The right knob: auto-approve allow-lists.** Read tools (read_file, list_files, search_files, list_directory) are safe to auto-approve. Write tools (write_to_file, replace_in_file, execute_command, browser_action with form submission) are not. This single setting is the difference between a useful agent and a tedious one.',
          '**The right unit: per-task approval count.** When you evaluate a stack, count approvals on a representative real task — not on a demo task. If the count is over 20, the stack is not actually saving you work.',
          'For prompt techniques that reduce supervision cost by improving tool-call quality, see [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Tighten the auto-approve allow-list at the start of a project; loosen it as you build trust in the model on this codebase. The opposite — start permissive, tighten after a bad run — is how unattended agents cause incidents.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: 'Tasks You Should Never Trust an Agent With',
        content:
          '**Some tasks are agent-incompatible regardless of the harness.** Recognise them before you waste an afternoon configuring approval rules.',
        items: [
          '**Production database writes.** A model that emits a confident `DELETE FROM users WHERE active = false` query against a real table is the incident this article exists to prevent. Run database tools with read-only roles by default; spin up a separate writable role only for tasks that explicitly need it, and only for the duration of those tasks.',
          '**Anything with money or auth.** Payment APIs, OAuth token issuance, account creation, role/permission changes. The cost of one bad call is unbounded; the upside of automation is small.',
          '**Long-horizon planning past 8–10 steps.** Agents drift on long horizons. The right pattern is "model proposes a plan, human approves the plan, model executes the plan one step at a time" — not "model plans and executes a 25-step task autonomously".',
          '**Tasks where you cannot verify success quickly.** A scrape-and-summarize task you can read in 2 minutes is a good fit. A "research this market and produce a report" task you cannot fact-check in under an hour is not — you will trust the report because verifying it costs more than rewriting it.',
          '**Anything that touches files you do not back up.** Sandbox the filesystem server to a single workspace directory. Treat the workspace as disposable. If the agent can reach files outside the workspace, you have configured the agent wrong.',
          '**Multi-tenant or shared infrastructure.** Local agents are personal-machine tools in 2026. Shared CI runners, multi-tenant databases, and shared cloud accounts are the wrong attack surface for an unsupervised agent loop.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decision: Pick Your Stack',
        content:
          '**Most people should install Cline + Ollama and stop.** The decision tree below covers the cases where another stack is the right pick.',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I want a local agent for coding tasks (refactor, debug, multi-file edits) inside VS Code', 'Pick': 'Cline + Ollama with Qwen3-Coder 30B (or DeepSeek Coder V3 for 128K context)' },
          { 'Your situation': 'I already use Continue.dev for autocomplete and want a lighter agent for small tasks', 'Pick': 'Continue.dev Agent mode in the same install' },
          { 'Your situation': 'I want an agent that can drive a browser, query a database, and read files', 'Pick': 'Cline + Ollama with MCP servers wired in (filesystem, sqlite, puppeteer)' },
          { 'Your situation': 'I want a local "code interpreter" REPL — write code, run code, iterate', 'Pick': 'OpenInterpreter, but do not leave it unattended' },
          { 'Your situation': 'I have a production workflow with deterministic tools and need orchestration', 'Pick': 'LangGraph + Ollama, with a real test suite for the graph' },
          { 'Your situation': 'I want autonomous unsupervised agents that ship work overnight', 'Pick': 'Wait. The 2026 stack does not deliver this. Use supervised stacks instead.' },
          { 'Your situation': 'I want to evaluate AutoGPT or MetaGPT for real work', 'Pick': 'Skip both. AutoGPT is unmaintained; MetaGPT\'s multi-agent abstraction does not hold up.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: 'What 2027 Probably Brings',
        content:
          '**Long-horizon planning will improve incrementally; unsupervised autonomy on real tasks is not happening this year.** Two specific predictions, framed conservatively.',
        items: [
          '**Tool-call reliability will keep climbing.** The trend from Llama 3 → Llama 3.3, Qwen2.5 → Qwen3, and the Gemma 3 → Gemma 4 step-change all point at one thing: tool-call training is the cheapest and highest-impact post-training pass. Expect 7B-class models to become reliable tool-callers in late 2026 / early 2027, which lowers the hardware bar for agents meaningfully.',
          '**Plan horizons will lengthen.** Today\'s ~5-step reliable horizon will probably reach 8–10 steps without the drift problems. This makes Cline-style scoped agents better; it does not make AutoGPT-style unscoped agents work.',
          '**Multi-agent systems will not have their breakthrough.** The structural problem (handoff state, persona drift, redundant work) is not a model-scale issue. Single-agent harnesses with longer scratchpads will keep beating multi-agent role-play.',
          '**The "supervised assistant" model wins.** The agents that ship work in 2027 will look like Cline 2.0 — better tool surfaces, smoother approvals, longer plan horizons — not like a successful AutoGPT relaunch.',
          '**Honest hedge:** any of these could be wrong. The technology is moving fast enough that a model release in Q3 2026 could change the supervision-cost equation. Re-evaluate this article in November 2026.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking and Running Local Agents',
        items: [
          '**Mistake 1: optimising for autonomy.** "How long can it run unattended" is the wrong metric. "How few approvals to land the task" is the right one. Picking a stack on autonomy benchmarks gets you AutoGPT; picking on supervision-cost gets you Cline.',
          '**Mistake 2: small models for tool-call work.** Anything below 7B (and most 7B–13B general-purpose models without tool-call fine-tuning) emits malformed tool calls. Use Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, or Llama 3.3 70B and stop fighting the harness.',
          '**Mistake 3: 32K context for multi-file work.** Cline streams full file contents into the conversation; an 8-file task can blow through 32K tokens before reasoning. Use a 128K-context model (DeepSeek Coder V3, Llama 3.3 70B) for non-trivial multi-file tasks.',
          '**Mistake 4: auto-approve everything.** The "approve all" toggle is the on-ramp to "the agent deleted my files". Auto-approve read tools only; require manual approval for writes and shell.',
          '**Mistake 5: production database writes from an agent.** Run a read-only role by default. A separate writable role lives only for the duration of tasks that explicitly need it. The cost of one bad write is unbounded.',
          '**Mistake 6: building a custom LangGraph orchestrator before trying Cline.** 90% of "I need a custom agent" use cases are scoped enough that Cline + a few MCP servers is the right answer. Build custom only when the workflow shape is genuinely incompatible with existing harnesses.',
          '**Mistake 7: chasing demos.** Demos are best-of-many. Plan for the median run — 70–80% success on real tasks, 20–30% requiring intervention. Anything calling itself "fully autonomous" in 2026 is marketing, not engineering.',
          '**Mistake 8: ignoring the audit trail.** After every long agent session, read the action log. Patterns emerge — the same kind of misstep three runs in a row tells you to tighten an approval rule or change the model.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Cline GitHub Repository](https://github.com/cline/cline) — autonomous coding agent, tool surface documentation, auto-approve configuration.',
          '[Continue.dev Documentation](https://docs.continue.dev/) — agent mode, codebase indexing, provider configuration.',
          '[LangGraph Documentation](https://langchain-ai.github.io/langgraph/) — orchestration library, state-machine semantics, human-in-the-loop interrupts.',
          '[OpenInterpreter GitHub Repository](https://github.com/OpenInterpreter/open-interpreter) — code-execution agent, safety modes, local model integration.',
          '[MetaGPT GitHub Repository](https://github.com/geekan/MetaGPT) — multi-agent framework, role definitions, local provider configuration.',
          '[Ollama Model Library](https://ollama.com/library) — available local models, tool-call support flags, quantization options.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Are autonomous AI agents actually useful in 2026?',
            a: 'Yes, but only in scoped, supervised forms. Cline + Ollama and Continue.dev Agent mode finish real tasks (multi-file refactors, exploratory debugging, scoped research) with manageable supervision cost — typically 5–12 approvals per task. The "fully autonomous" framing is still aspirational; agents pitched as unsupervised (AutoGPT-local, MetaGPT) drift, repeat work, or stall on long horizons. The right mental model is "supervised assistant", not "autonomous worker".',
          },
          {
            q: 'Why do most agent demos look better than reality?',
            a: 'Three reasons. Demo tasks are scoped (small file surface, unambiguous success signal); demo runs are cherry-picked from many takes; demo prompts are over-specified with context the model would not have on a real task. Plan for the median run on a real task — 70–80% success, 20–30% requiring intervention — not the demo run.',
          },
          {
            q: 'Which agent stack is most reliable for real work in 2026?',
            a: 'Cline + Ollama is the default pick for coding-shaped tasks (refactors, debugging, multi-file work). Pair it with Qwen3-Coder 30B for everyday work or DeepSeek Coder V3 / Llama 3.3 70B when you need 128K context. Continue.dev Agent mode is the lighter alternative for single-file or two-file tasks. Both are scoped, well-maintained, and run inside the editor with explicit approval gates.',
          },
          {
            q: 'How much supervision do agents really need in 2026?',
            a: '5–12 approvals per task on a scoped harness like Cline; 4–8 on Continue.dev Agent. Above 30 approvals in a session, humans rubber-stamp — at which point the safety gate is fictional. The right knob is the auto-approve allow-list: auto-approve read tools (read_file, list_files, search_files), require manual approval for writes and shell. This single setting is the difference between a useful agent and a tedious one.',
          },
          {
            q: 'Can agents handle multi-step tasks without breaking?',
            a: 'Up to 5–8 steps reliably with a strong tool-calling model (Qwen3-Coder 30B, Gemma 4 27B, GLM-5.1 32B, Llama 3.3 70B). Beyond that, plan horizons drift — the agent re-reads files, re-runs the same searches, or proposes contradictory next steps. The right pattern is "model proposes a plan, human approves the plan, model executes one step at a time" — not autonomous 25-step execution.',
          },
          {
            q: 'Why do agents fail on long-horizon tasks?',
            a: 'Two structural reasons. First, context bloat: each tool call adds the result to the conversation, so a 20-step task accumulates ~50K–100K tokens of state and the model loses track of what was decided early on. Second, plan revision drift: when a tool returns unexpected output, the model often re-plans the whole task instead of adjusting locally — and the new plan disagrees with the original commitment. Scoped harnesses (Cline, Continue.dev Agent) work around this by keeping plans short and asking the human to re-anchor between steps.',
          },
          {
            q: 'Are local agents worse than cloud agents?',
            a: 'On absolute capability, yes — frontier cloud models still beat any local 30B-class model on the hardest tasks. On supervised everyday work, the gap is smaller than the demos suggest. Cline + Qwen3-Coder 30B finishes 13–15 of 15 multi-file refactors; the same task on Cline + Claude or GPT-5 finishes 14–15 of 15. The trade-off favours local for users with private data, no API budget, or strict offline requirements.',
          },
          {
            q: 'Can agents handle errors gracefully?',
            a: 'Mixed. Cline and Continue.dev Agent recover well from tool errors — the harness surfaces the error, the model proposes a corrective step, the human approves. LangGraph + Ollama recovers only as well as your graph defines; an unhandled tool error cycles. AutoGPT-local does not recover at all; it drifts. Error handling is a harness property as much as a model property.',
          },
          {
            q: 'What tasks should I never trust an agent with?',
            a: 'Production database writes (run read-only roles by default), anything touching money or auth (payments, OAuth, account creation), long-horizon planning past 8–10 steps, tasks where you cannot verify success quickly, anything outside a sandboxed workspace directory, and any work on multi-tenant or shared infrastructure. The cost of one bad agent action in these categories is unbounded; the upside of automation is small.',
          },
          {
            q: 'Will agents improve significantly in 2027?',
            a: 'Tool-call reliability will keep climbing — expect 7B-class models to become reliable tool-callers in late 2026 / early 2027. Plan horizons will lengthen from ~5 reliable steps to 8–10. Multi-agent systems will not have their breakthrough — the structural problems (handoff state, persona drift, redundant work) are not a model-scale issue. Unsupervised autonomy on real tasks is unlikely in 2027; "Cline 2.0" — better tool surfaces, smoother approvals — is the realistic path.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — what enables agents under the hood; protocol layer for filesystem, database, browser, and GitHub tools.',
          '[Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026) — the model layer; head-to-head benchmarks for the tool-callers recommended above (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — adjacent harness comparison for coding-shaped work.',
          '[Local AI Agents Business Workflows EU Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — applied context for businesses operating under GDPR / EU AI Act.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — model authority for the broader open-weights landscape.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
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
    title: 'Lokale KI-Agenten in 2026: Was funktioniert (und was noch fehlschlägt)',
    seoTitle: 'Lokale KI-Agenten 2026: Was funktioniert, was fehlschlägt (Ehrlicher Test)',
    intro:
      'Sechs lokale KI-Agent-Stacks, fünf echte Aufgaben, dreißig Tage Evaluation. Zwei Stacks landen Aufgaben zuverlässig. Drei fehlschlagen auf Wegen, die die Demos nicht zeigen. Einer ist praktisch unbrauchbar. Das ist der ehrliche Bericht — was jedes Agent-Setup bei einer Umstrukturierung, einer Recherchaufgabe, einer E-Mail-Triage, einem Scrape-and-Summarize und einer Bug-Suche wirklich tut, mit spezifisch benannten Fehlern und quantifizierten Überwachungskosten.',
    metaDescription:
      'Ehrlicher Test von 6 lokalen KI-Agent-Stacks (Cline, Continue.dev, LangGraph, AutoGPT, OpenInterpreter, MetaGPT) auf 5 echten Aufgaben. 2 funktionieren zuverlässig, 3 fehlschlagen überraschend, 1 ist unbrauchbar. Verdikt benannt.',
    twitterDescription:
      'Testete 6 lokale Agent-Stacks auf 5 echten Aufgaben über 30 Tage. 2 funktioniert, 3 fehlgeschlagen auf überraschende Weise, 1 war unbrauchbar. Das ehrliche Verdikt, welche Stacks Arbeit liefern und welche nur Demos liefern.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3 32B',
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Llama 3.3 70B',
      'DeepSeek Coder V3',
    ],
    current_hardware_mentioned: [
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      '2× NVIDIA RTX 3090 24 GB',
    ],
    audience:
      'Entwickler und technische Fachleute, die lokale KI-Agent-Stacks für echte Arbeit evaluieren — Umstrukturierungen, Recherche, Content-Workflows, Debugging — und die ein Verdikt haben möchten, bevor sie ein Wochenende mit der Einrichtung verbringen.',
    readTime: '16 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'lokaler KI-Agent',
    targetKeywords: [
      'lokale ki-agenten 2026',
      'autonome agenten wirklichkeitscheck',
      'cline vs autogpt lokal',
      'bestes lokales agent-framework',
      'funktionieren ki-agenten eigentlich',
      'lokale llm agent vergleich',
    ],
    leadAnswerBlock:
      '**Im Mai 2026 landen zwei lokale Agent-Stacks echte Arbeit ohne ständiges Babysitting: Cline + Ollama und Continue.dev Agent mode. Beide sind scoped, gut gewartet und führen ein Tool-Calling-Modell (Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B) in einem einzelnen Editor mit expliziten Approval Gates aus. Drei Stacks fehlschlagen auf überraschende Weise — LangGraph + Ollama (Orchestrierung ist zerbrechlich über lange Horizonte), OpenInterpreter (führt Shell-Befehle zu eifrig aus, um unbeaufsichtigt gelassen zu werden), und MetaGPT lokal (Multi-Agent-Rollenspiel verliert den Plot nach zwei Hand-offs). Ein Stack ist praktisch unbrauchbar: AutoGPT-local — das Projekt ist stagniert, Abhängigkeiten passen nicht zu modernem Ollama, und die Planungsschleife driftet in zirkuläre Tool Calls innerhalb von Minuten. Das Muster ist konsistent: scoped, eigensinnige Harnesses um ein starkes Tool-Calling-Modell schlagen ehrgeizige autonome Agenten bei jeder Aufgabe, die wir führten, ab.**',
    quickAnswerTop: {
      de: {
        question: 'Funktionieren autonome lokale KI-Agenten 2026 wirklich?',
        answer:
          'Einige tun es, die meisten nicht. Die zwei zuverlässigen Stacks sind Cline + Ollama (autonomer Coding-Agent in VS Code mit Pro-Schritt-Approval) und Continue.dev Agent mode (leichterer Agent-Loop in der gleichen IDE). Beide erfolgreich, weil sie scoped sind — ein Editor, ein Modell, ein Approval Gate — nicht, weil die zugrunde liegende Technologie endlich gut genug für unbeaufsichtigte Autonomie ist. Die Frameworks, die als „vollständig autonom" gepriesen werden (AutoGPT-local, MetaGPT, Custom-LangGraph-Orchestratoren), treiben immer noch in zirkuläre Tool Calls, halluzinieren Dateipfade oder bleiben in der Planung langer Horizonte stecken. Das richtige Modell in 2026 ist „beaufsichtigter Assistent" — Agenten, die Multi-Schritt-Aktionen vorschlagen und auf Approval anhalten — nicht „autonomer Arbeiter". Alles, das als autonom verkauft wird, ist eine Demo, nicht ein Produkt.',
        bullets: [
          'Zwei Stacks liefern echte Arbeit: Cline + Ollama und Continue.dev Agent. Beide sind auf eine einzelne IDE scoped, führen ein Tool-Calling-Modell durch und erfordern manuelles Approval pro Schritt.',
          'Drei Stacks fehlschlagen auf nicht offensichtliche Weise: LangGraph + Ollama (zerbrechlich über lange Horizonte), OpenInterpreter (zu eifrig bei Shell-Ausführung), MetaGPT lokal (Multi-Agent-Rollenspiel bricht ab).',
          'AutoGPT-local ist praktisch unbrauchbar im Mai 2026 — stagniertes Projekt, kaputte Abhängigkeiten, Planungsschleife driftet innerhalb von Minuten ab.',
          'Tool-Call-Zuverlässigkeit kommt vom Modell, nicht vom Harness. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B und Llama 3.3 70B funktionieren in jedem der zuverlässigen Stacks. Modelle unter 7B fehlschlagen in allen.',
          'Überwachungskosten sind die Metrik, die zählt. Der „beste" Agent ist der, dessen Approvals du tatsächlich liest — nicht der mit dem längsten autonomen Lauf.',
          'Der Outlook für 2027: Planung über längere Horizonte wird schrittweise verbessern. Unbeaufsichtigte Autonomie bei echten Aufgaben passiert nicht dieses Jahr, unabhängig davon, was die Demos zeigen.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Wie wir getestet haben', anchor: '#how-we-tested' },
      { label: 'Agent-Wirklichkeitstabelle', anchor: '#reality-table' },
      { label: 'Was funktioniert: Cline + Ollama', anchor: '#cline-ollama' },
      { label: 'Was funktioniert: Continue.dev Agent', anchor: '#continue-agent' },
      { label: 'Was fehlschlägt: LangGraph + Ollama', anchor: '#langgraph' },
      { label: 'Was fehlschlägt: OpenInterpreter', anchor: '#openinterpreter' },
      { label: 'Was fehlschlägt: MetaGPT Lokal', anchor: '#metagpt' },
      { label: 'Unbrauchbar: AutoGPT-Lokal', anchor: '#autogpt' },
      { label: 'Warum Agent-Demos besser aussehen als die Wirklichkeit', anchor: '#demos-vs-reality' },
      { label: 'Überwachungskosten sind die echte Metrik', anchor: '#supervision-cost' },
      { label: 'Aufgaben, denen du nie einen Agent vertrauen solltest', anchor: '#never-trust' },
      { label: 'Entscheidung: Wähle deinen Stack', anchor: '#decision' },
      { label: 'Was 2027 wahrscheinlich bringt', anchor: '#outlook' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Zwei Stacks landen echte Arbeit im Mai 2026:** Cline + Ollama (autonomer Coding-Agent in VS Code) und Continue.dev Agent mode. Beide sind auf einen Editor, ein Modell und ein Approval Gate pro Schritt scoped.',
          '**Drei Stacks fehlschlagen auf überraschende Weise:** LangGraph + Ollama-Orchestrierung ist über 4–5-Schritt-Horizonte zerbrechlich, OpenInterpreter führt Shell-Befehle zu eifrig aus, um unbeaufsichtigt gelassen zu werden, MetaGPT lokal Multi-Agent-Rollenspiel bricht nach zwei Hand-offs ab.',
          '**Ein Stack ist unbrauchbar:** AutoGPT-local ist praktisch aufgegeben — Abhängigkeiten passen nicht zu modernem Ollama, die Planungsschleife driftet in zirkuläre Tool Calls innerhalb von Minuten ab, und es gibt keinen Maintainer, der auf Probleme antwortet.',
          '**Tool-Call-Zuverlässigkeit ist eine Eigenschaft des Modells, nicht des Harness.** Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B und Llama 3.3 70B geben saubere Tool Calls in jedem zuverlässigen Stack aus. Modelle unter 7B geben malformed calls aus, egal welcher Agent sie umhüllt.',
          '**Das „beaufsichtigte Assistenten"-Modell gewinnt 2026.** Agenten, die Multi-Schritt-Aktionen vorschlagen und auf Approval anhalten, erledigen mehr Aufgaben als Agenten, die unbeaufsichtigt laufen wollen. Das ist eine Eigenschaft von 2026-LLMs, nicht eine UX-Präferenz.',
          '**Überwachungskosten sind die Metrik, die zählt.** Eine 30-Minuten-Aufgabe, die drei Approvals erfordert, ist lieferbar. Eine 2-Stunden-Aufgabe, die zwanzig Approvals erfordert, ist nicht — du machst die Arbeit, der Agent verlangsamt sie nur.',
          '**Kosten sind real, aber klein.** Nur lokale Inferenz, kein API-Ausgaben, Elektrizität ist der einzige Grenzkosten. Token-Verbrauch pro Aufgabe ist die Einschränkung — Agent-Schleifen verbrennen 30K–80K Token für eine Multi-Schritt-Aufgabe, also 32K-Context-Modelle treffen die Wand schnell und 128K-Context-Modelle sind komfortabel.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Getestete Stacks:** Cline + Ollama, Continue.dev Agent, LangGraph + Ollama (custom), AutoGPT-local, OpenInterpreter, MetaGPT lokal.',
          '**Getestete Aufgaben:** Themenrecherche, Multi-Datei-Umstrukturierung, E-Mail-Draft-Triage, Scrape-and-Summarize, Bug-Debugging.',
          '**Hardware:** Apple M5 Max 64 GB unified memory und 2× NVIDIA RTX 3090 24 GB box; beide führen Qwen3-Coder 30B Q4_K_M komfortabel bei 32K context durch.',
          '**Modelle:** Qwen3-Coder 30B (Primär), GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B (die vier zuverlässigen Tool-Caller im Mai 2026).',
          '**Verdikt-Form:** 2 Stacks zuverlässig über alle 5 Aufgaben, 3 Stacks zuverlässig bei 1–2 Aufgaben jeweils, 1 Stack unbrauchbar.',
          '**Kosten:** 0 $ in API-Gebühren. ~0,10–0,30 $ Elektrizität pro Multi-Schritt-Aufgabe auf einer 350W-Desktop-GPU-Anlage (unter 0,05 $ auf einem Mac).',
          '**Überwachungsmuster, das funktioniert:** auto-approve Lese-Tools, manuell approve jeden Schreib-/Shell-Tool, überprüfe das Audit-Log nach langen Sitzungen.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Wie wir getestet haben: Gleiches Modell, gleiche Aufgaben, verschiedene Harnesses',
        content:
          '**Der Test hielt das Modell konstant und variierte nur das Agent-Harness.** Jeder Stack erhielt die gleichen fünf Aufgaben gegen das gleiche Backend (Ollama, das Qwen3-Coder 30B bei Q4_K_M serviert), also fehlschlagen Attribute zum Harness, nicht zum Modell.',
        items: [
          '**Backend:** Ollama 0.5+ auf macOS und Linux. Primäres Modell Qwen3-Coder 30B Q4_K_M (32K context). Sekundäre Modelle (GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B) zur Verifikation, dass Tool-Call-Fehler keine Single-Model-Artefakte waren.',
          '**Hardware:** eine Apple M5 Max 64 GB MacBook Pro und ein Linux-Desktop mit 2× RTX 3090 24 GB. Beide behalten Qwen3-Coder 30B bei brauchbarer Geschwindigkeit (>15 tokens/s).',
          '**Aufgaben:** Themenrecherche (sammeln, deduplizieren, zusammenfassen 8 Quellen zu einem Nischen-Thema), Multi-Datei-Refactor (umbenennen ein Service über 12 TypeScript-Dateien), E-Mail-Draft-Triage (zusammenfassen und Draft-Antworten für einen Ordner mit 40 Nachrichten), Scrape-and-Summarize (5 URLs lesen und eine Vergleichs-Brief produzieren), Bug-Debugging (finden, warum ein vorhandener Test flaky ist).',
          '**Run-Kadenz:** jede Aufgabe lief 3 Mal pro Stack über das 30-Tage-Fenster, mit einem frischen Prompt jedes Mal. Ergebnis bewertet als „vollständig unbeaufsichtigt", „vollständig mit Überwachung", „teilweise" oder „stagniert/fehlgeschlagen".',
          '**Überwachungs-Metrik:** Anzahl der pro Aufgabe erforderlichen Approvals und der Anteil der Approvals, bei denen wir die vorgeschlagene Aktion abgelehnt haben. Eine hohe Reject-Rate signalisiert, dass der Harness Rauschen erzeugt, das der Mensch filtern muss.',
          '**Ehrlichkeitszwang:** Bereiche, keine erfundenen exakten Prozentsätze. „Zuverlässig über alle 5 Aufgaben" bedeutet 13–15 von 15 Durchläufen landen; „fehlschlagen über lange Horizonte" bedeutet 3–6 von 15 Durchläufen landen ohne Eingriff. Die Verdikt sind konservativ — wenn ein Stack funktionierte, aber nur mit nicht trivialem Eingriff, zählt es als Fehler für unbeaufsichtigte-Aufgabe-Zwecke.',
          'Tool-Call-Zuverlässigkeit ist die Schicht darunter. Für die Modell-seitige Vergleich, siehe [Beste lokale Modelle für Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=de); die Protokoll-Schicht wird behandelt in [Ollama mit Datenbanken und APIs über MCP verbinden](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de).',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: 'Agent-Wirklichkeitstabelle: Sechs Stacks, fünf Aufgaben, ehrliche Verdikt',
        content:
          '**Zwei Stacks erledigen Arbeit; drei stolpern unterschiedlich; einer ist kaputt.** Die Verdikt-Spalte ist die erste, die zu lesen ist.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama und Continue.dev Agent sind die einzigen zwei lokalen KI-Agent-Stacks, die echte Aufgaben zuverlässig im Mai 2026 erledigen; LangGraph, OpenInterpreter und MetaGPT fehlschlagen jeweils auf unterschiedliche Weise; AutoGPT-local ist unbrauchbar.',
          },
          {
            type: 'plain-terms',
            text: 'Wenn du einen lokalen Agent möchtest, der eine Umstrukturierung oder eine Recherchaufgabe wirklich erledigt, installiere Cline oder Continue.dev und höre auf zu lesen. Die anderen vier Stacks haben Demos, die besser aussehen als die Wirklichkeit, sie zehn Minuten laufen zu lassen.',
          },
        ],
        columns: ['Stack', 'Task success rate', 'Failures observed', 'Supervision needed', 'Verdict'],
        rows: [
          {
            'Stack': 'Cline + Ollama',
            'Task success rate': '13–15 von 15 Durchläufen landen',
            'Failures observed': 'Token-Druck auf 32K-Context-Modelle für Multi-Datei-Arbeit; erholbar mit 128K context',
            'Supervision needed': 'Pro-Schritt-Approval; ~5–12 Approvals pro Aufgabe',
            'Verdict': 'Funktioniert. Standardwahl für Code-formige Aufgaben.',
          },
          {
            'Stack': 'Continue.dev Agent',
            'Task success rate': '12–14 von 15 Durchläufen landen',
            'Failures observed': 'Plan-Horizont kürzer als Cline; Multi-Datei-Edits stoppen manchmal nach 2–3 Dateien',
            'Supervision needed': 'Diff-Preview-Approval; ~4–8 Approvals pro Aufgabe',
            'Verdict': 'Funktioniert. Leichtere Alternative, wenn Cline overkill ist.',
          },
          {
            'Stack': 'LangGraph + Ollama',
            'Task success rate': '4–7 von 15 Durchläufen landen ohne Eingriff',
            'Failures observed': 'Zerbrechlich über 4–5-Schritt-Horizonte; State-Machine-Zyklen, wenn ein Tool unerwartete Daten zurückgibt; kein natives Approval Gate (du baust es)',
            'Supervision needed': 'Hoch — Debug die Orchestrierung ist halb die Arbeit',
            'Verdict': 'Fehlgeschlagen. Build-Effort übersteigt den Wert für 90% der Benutzer.',
          },
          {
            'Stack': 'AutoGPT-local',
            'Task success rate': '0–2 von 15 Durchläufen landen',
            'Failures observed': 'Projekt stagniert 2024–2025; Abhängigkeiten passen nicht zu modernem Ollama; Planungsschleife driftet in zirkuläre Tool Calls innerhalb von Minuten',
            'Supervision needed': 'Konstant — der Agent konvergiert nicht',
            'Verdict': 'Unbrauchbar. Überspringe vollständig in 2026.',
          },
          {
            'Stack': 'OpenInterpreter',
            'Task success rate': '6–9 von 15 Durchläufen landen — aber mit Risiko',
            'Failures observed': 'Eifrige Shell-Ausführung; wird destruktive Befehle ohne explizite Guardrails ausführen; Sicherheit-Prompts inkonsistent',
            'Supervision needed': 'Konstant — kann nicht unbeaufsichtigt gelassen werden',
            'Verdict': 'Fehlgeschlagen für Autonomie. Nützlich nur als beaufsichtigtes REPL.',
          },
          {
            'Stack': 'MetaGPT lokal',
            'Task success rate': '3–6 von 15 Durchläufen landen',
            'Failures observed': 'Multi-Agent-Rollenspiel (PM → Engineer → QA) driftet über zwei Hand-offs; Agenten wiederholen frühere Arbeit; Outputs widersprechen sich',
            'Supervision needed': 'Hoch — und du debuggst die Rollendefinitionen, nicht die Aufgabe',
            'Verdict': 'Fehlgeschlagen. Die Multi-Agent-Abstraktion ist das Problem, nicht die Implementierung.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: 'Was funktioniert: Cline + Ollama ist die Standardwahl',
        content:
          '**Cline + Ollama ist der einzige Stack, der jeden Aufgabentyp mit vorhersehbaren Überwachungskosten landet.** Es funktioniert, weil es scoped ist: eine IDE (VS Code), ein Modell, ein Approval Gate pro Schritt.',
        items: [
          '**Was es ist:** Cline ist eine VS Code-Erweiterung, die den Editor in eine autonome Agent-Oberfläche verwandelt. Das Modell schlägt einen Plan im Plan-Modus vor, führt ihn im Act-Modus über eine Tool-Oberfläche (read_file, write_to_file, replace_in_file, execute_command, list_files, search_files) durch und fragt zwischen den Schritten um Approval, es sei denn, Tools befinden sich auf einer Allow-List.',
          '**Warum es funktioniert:** das Harness ist eigensinnig. Die Tool-Oberfläche ist klein und stabil, der Approval-Fluss ist dir im Gesicht (jeder Schritt ist eine Karte, die du akzeptierst oder ablehnst), und das Modell sieht nur den Editor — nicht die ganze Maschine. Fehler sind erholbar, weil die neueste Aktion immer ein Klick auf Revert entfernt ist.',
          '**Wo es glänzt:** Multi-Datei-Umstrukturierungen (umbenennen ein Service über 12 Dateien in einer Aufgabe), explorative Bug-Debugging („finde, warum dieser Test flaky ist" — Cline liest angrenzende Test-Dateien, verfolgt Abhängigkeiten, schlägt eine Hypothese vor, bearbeitet, führt den Test durch), und scoped Research, das ein Markdown-Deliverable in dem Projekt produziert.',
          '**Wo es stolpert:** nicht-Code-Aufgaben, die externe HTTP erfordern (kein natives Browser). E-Mail-Draft-Triage funktioniert nur, wenn du einen MCP-Server oder Shell-Tools verdrahtest — und an diesem Punkt konfigurierst du drei Dinge, um das zu tun, was ein kleineres, scoped-Tool direkt tun würde.',
          '**Überwachungskosten:** ~5–12 Approvals pro Aufgabe. Die meisten sind Lese-Tools (billig, schnelles Akzeptieren). Die teuren sind write_to_file und execute_command — stelle diese auf manuelles Approval-Erfordernis und du wirst den seltenen schlechten Call vor dem Landen fangen.',
          '**Token-Kosten:** hoch. Vollständige Datei-Inhalte streamen in das Gespräch, während der Agent sie liest. Eine 12-Datei-Umstrukturierung auf Qwen3-Coder 30B bei 32K context brennt das Fenster schnell durch — wechsle zu einem 128K-Context-Modell (DeepSeek Coder V3, Llama 3.3 70B) für nicht-triviale Arbeit.',
          'Für tiefere Cline-Konfiguration einschließlich auto-approve Allow-Lists, siehe [Continue.dev vs Cline vs Aider: Bester lokaler Coding-Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=de).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Führe Cline gegen Qwen3-Coder 30B (Q4_K_M, ~17 GB VRAM) für Code-Aufgaben durch. Für Aufgaben, die mehr als 6 Dateien in einer Sitzung berühren, wechsle zu DeepSeek Coder V3 oder einem anderen 128K-Context-Modell — das 32K-Fenster auf Qwen3-Coder wird gefüllt, bevor der Agent fertig ist.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: 'Was funktioniert: Continue.dev Agent Mode für leichtere Aufgaben',
        content:
          '**Continue.dev Agent mode ist die richtige Wahl, wenn Cline overkill ist.** Gleiche IDE, gleiche Modell-Klasse, kleinere Oberfläche — weniger Approvals, kürzerer Plan-Horizont, niedrigerer Token-Verbrauch.',
        items: [
          '**Was es ist:** Continue.dev ist in erster Linie eine Autocomplete- und Chat-Erweiterung für VS Code und JetBrains, mit einem Agent-Modus, der Tool Calls (Datei-Lese-/Schreibe-, Codebasis-Suche, Terminal-Ausführung) und eine Multi-Schritt-Plan-Schleife hinzufügt. Der Agent ist enger beschränkt als Clines — weniger Tools, kürzere Default-Horizonte, weniger aggressives autonomes Verhalten.',
          '**Warum es funktioniert:** Continue.devs Autoren-Publikum sind Autocomplete-Benutzer, also erbt Agent mode eine „klein, schnell, dir im Gesicht" UX. Jede Bearbeitung landet als Diff-Vorschau, bevor das Modell die Datei berührt. Pläne überschreiten selten 3–5 Schritte, was den Token-Verbrauch bescheiden hält und die Audit-Trail kurz.',
          '**Wo es glänzt:** Single-Datei oder zwei-Datei-Aufgaben, „erkläre diese Codebasis-Region", „schreibe diese Funktion mit diesen Einschränkungen um", „füge einen Test für diese Methode hinzu". Der Agent läuft ohne die ganze Codebasis in das Gespräch zu ziehen, so dass ein 32K-Context-Modell komfortabel ist.',
          '**Wo es stolpert:** Pläne länger als 5 Schritte. Multi-Datei-Refactors, die 8+ Edits benötigen, stoppen manchmal nach 2–3 Dateien und bitten den Benutzer weiterzumachen. Das ist kein Bug — das Harness ist konservativ über Plan-Horizont — aber das bedeutet, dass du auf die gleiche Aufgabe öfter übersiehst als mit Cline.',
          '**Überwachungskosten:** ~4–8 Approvals pro Aufgabe, gewichtet zu Diff-Vorschauen (hohes Signal, schnelles Akzeptieren).',
          '**Token-Kosten:** merklich niedriger als Cline, weil Continue.dev seinen TF-IDF + Embeddings-Index nutzt, um relevante Chunks abzurufen, anstatt ganze Dateien zu streamen. Ein 32K-Context-Modell erledigt die meisten Aufgaben komfortabel.',
          'Wann Continue.dev Agent über Cline wählen: wenn die Aufgabe in 2–3 Dateien passt, wenn das Token-Budget eng ist, wenn du bereits Continue.dev für Autocomplete verwendest und ein Tool nicht zwei möchtest.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: 'Was fehlschlägt: LangGraph + Ollama (Zerbrechlich über lange Horizonte)',
        content:
          '**LangGraph + Ollama ist das richtige Tool für Production-Orchestrierung und das falsche Tool für „Ich möchte einen Agent auf meinem Laptop".** Die Build-Effort ist hoch, die Fehler-Modi sind nicht offensichtlich, und der Wert wird nur in der Skalierung realisiert.',
        items: [
          '**Was es ist:** LangGraph ist eine State-Machine-Orchestrierungs-Library. Du definierst Nodes (typisierte Funktionen, die das Modell aufrufen, ein Tool durchführen, eine Bedingung evaluieren) und Edges (Übergänge). Die Runtime führt den Graph aus, verarbeitet Branching und managed State über Schritte hinweg. Koppeln mit einem Ollama-Backend und du hast einen Custom lokalen Agent.',
          '**Warum es als Desktop-Agent fehlschlägt:** die Fehler-Oberfläche ist der Orchestrierungs-Code, nicht das Modell. State Machines, die auf einem Whiteboard sauber aussehen, zyklisieren, wenn ein Tool unerwartete Daten zurückgibt — zum Beispiel, ein HTTP-Fetch, das 200 zurückgibt, aber mit leerem Body, ein Datei-Lese auf einem Pfad, der existiert, aber ein Verzeichnis ist. Du debuggst deinen Graph so viel wie der Agent die Aufgabe debuggt.',
          '**Plan-Horizont:** zerbrechlich über 4–5 Nodes. Jeder Branching-Punkt verdoppelt die Test-Oberfläche. Bei Node 6 hast du einen Baum möglicher Ausführungs-Pfade und das Modell pickt einen, den du nicht antizipiert hast. Der Graph schreibt dann State auf eine Weise, die der nächste Node nicht verbrauchen kann.',
          '**Kein natives Approval Gate:** du baust Human-in-the-Loop-Interrupts selbst. Die Library unterstützt es (Interrupt-and-Resume ist dokumentiert), aber die Implementierung ist auf dir. Cline und Continue.dev geben dir das kostenlos.',
          '**Wo es wirklich hingehört:** Server-seitige Workflows, wo du die Input-Form kontrollierst, die Tool-Oberfläche fest ist, und du eine echte Test-Suite für den Graph schreiben kannst. Zum Beispiel, ein Kundensupport-Routing-Workflow mit drei deterministischen Tools und einem Modell-Node — das ist der LangGraph Sweet Spot.',
          '**Verdikt für die lokale-Agent-Frage:** fehlgeschlagen. Einen Custom LangGraph-Orchestrator zu bauen, um das zu tun, was Cline in einer Installation tut, ist vergeudete Zeit für 90% der Benutzer. Mache es nur, wenn du eine Workflow-Form hast, die Cline nicht ausdrücken kann, und du hast die Test-Disziplin, um den Graph ehrlich zu halten.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Das ist keine Kritik an LangGraph — die Library ist solid für Production-Workflows. Die Kritik ist, dass „verwende LangGraph für deinen lokalen Agent" die falsche Empfehlung ist, wenn scoped Harnesses bereits existieren.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: 'Was fehlschlägt: OpenInterpreter ist nützlich beaufsichtigt, gefährlich unbeaufsichtigt',
        content:
          '**OpenInterpreter führt Shell-Befehle zu eifrig aus, um unbeaufsichtigt gelassen zu werden.** Es ist wirklich nützlich als beaufsichtigtes REPL — du beschreibst eine Aufgabe, es schreibt Python oder Shell, du siehst es laufen — und wirklich unsicher, um zu gehen.',
        items: [
          '**Was es ist:** OpenInterpreter ist eine CLI, die ein Modell Code (Python, Shell, JavaScript, R) auf deiner Maschine schreiben und ausführen lässt. Der interaktive Prompt fragt um Bestätigung vor der Ausführung jedes Blocks — standardmäßig. Der Frame ist „ChatGPT Code Interpreter, lokal".',
          '**Warum es als autonomer Agent fehlschlägt:** der Sicherheits-Prompt ist pro-Block, und das Modell schlägt regelmäßig Shell-Befehle vor, die harmlos aussehen, aber permanente State-Änderungen produzieren (`rm` in tiefen Pfaden, `pip install` in das System-Python, `git reset --hard`). Jeden Block zu bestätigen wird die Arbeit — du kannst nicht skimmen, weil die Kosten für die Genehmigung des falschen Blocks unbegrenzt sind.',
          '**Auto-confirm Mode existiert.** Es ist auch, wo jede Horror-Story kommt. Wir empfehlen nicht, OpenInterpreter mit Auto-confirm auf einer Maschine zu laufen, die etwas hat, das du magst.',
          '**Wo es glänzt:** als beaufsichtigtes Scratchpad. „Konvertiere dieses CSV zu Parquet", „extrahiere Metadaten aus diesen 200 PDFs", „schreibe dieses Python-Script um, um asyncio zu verwenden". Aufgaben, wo du im Terminal bleibst, jeden Befehl beobachtest, und das Modell die Typing-schneller Arbeit für dich machst.',
          '**Wo es fallt ab:** alles, das Autonomie ähnelt. Auch mit Bestätigungsauffordungen, durchschnittlich eine 30-Minuten-Aufgabe 40+ Bestätigungen und die Fehler-Modi sind vielfältig (falsches Arbeits-Verzeichnis, teilweise Lese, unerwartet Netzwerk-Anrufe).',
          '**Überwachungskosten:** wesentlich 100% — du überwachst jeden Block. Eine „5-Minuten"-Aufgabe dauert länger, als es von Hand zu tun, sobald du das Lesen und Genehmigen abrechnest.',
          '**Verdikt:** nützliches Tool, falsche Kategorie. OpenInterpreter ist ein Code-Assistent, der Code durchführt, nicht ein autonomer Agent. Scoring es gegen Cline ist der falsche Frame; der richtige Frame ist „Cline liefert ein Feature, OpenInterpreter schreibt ein One-Off-Script".',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: 'Was fehlschlägt: MetaGPT Lokal (Multi-Agent-Rollenspiel bricht ab)',
        content:
          '**MetaGPTs „PM → Engineer → QA → Designer" Multi-Agent-Rollenspiel überlebt keinen Kontakt mit nicht-trivialen Aufgaben.** Über zwei Hand-offs, Agenten wiederholen frühere Arbeit, widersprechen sich, oder bleiben in der Aushandlung ihrer eigenen Rollen stecken.',
        items: [
          '**Was es ist:** MetaGPT ist ein Multi-Agent-Framework, das ein Software-Entwicklungs-Team simuliert. Ein Product Manager Agent schreibt Anforderungen, ein Architect Agent designt, ein Engineer Agent codiert, ein QA Agent testet. Jeder Agent ist das gleiche zugrunde liegende Modell mit einem anderen System-Prompt und Tool-Set.',
          '**Warum es fehlschlägt:** Multi-Agent-Rollenspiel nimmt an, dass das Modell eine kohärente Persona über viele Turns halten kann und Context zuverlässig abgeben kann. In der Praxis, mit einem lokalen 30B-Klasse-Modell, verschwimmen die Personas. Der Engineer Agent führt die PM-Agent-Analyse erneut aus. Der QA Agent schreibt Code anstatt zu testen. Der Handoff-State — was jeder Agent in seiner Tour gelernt hat — ist der Bug.',
          '**Das tiefere Problem:** Multi-Agent-Abstraktion fügt Turns hinzu, ohne Fähigkeit hinzuzufügen. Ein einzelner Agent mit der gleichen Tool-Oberfläche und einem längeren Scratchpad macht die gleiche Aufgabe in weniger Tokens mit weniger Drift. Das „Team"-Framing ist anthropomorph, nicht architektonisch.',
          '**Wo es vielleicht funktioniert:** eng definierte Aufgaben mit harten Hand-Off-Grenzen — zum Beispiel, ein Writing-Team-Workflow (Recherche → Outline → Draft → Edit), wo jeder Schritt ein Deliverable hat und der nächste Schritt frühere Überlegung ignoriert. Wir fanden keine echte Workflow, wo MetaGPT einen Single-Agent-Harness mit einen Checklist-Prompt überlistet.',
          '**Verdikt:** fehlgeschlagen. Der Bug ist konzeptuell, nicht in der Implementierung. Single-Agent-Harnesses mit strukturierten Prompts schlagen Multi-Agent-Harnesses bei jeder Aufgabe, die wir durchführten, ab.',
          'Für Prompting-Techniken, die die Zuverlässigkeit jeder Single-Agent-Schleife verbessern, siehe [Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de) — das gleiche strukturierte-Reasoning-Muster, das einem Modell hilft zu denken, hilft einem einzelnen Agent, kohärent zu bleiben.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Unbrauchbar: AutoGPT-Lokal ist praktisch aufgegeben',
        content:
          '**AutoGPT-local ist nicht ein Stack zu evaluieren in 2026 — es ist ein Stack zu überspringen.** Das Projekt ist praktisch unmaintained, Abhängigkeiten passen nicht zu modernem Ollama, und die Planungsschleife driftet innerhalb von Minuten ab.',
        items: [
          '**Was passiert ist:** AutoGPT war das kanonische „autonomer Agent"-Projekt von 2023. Der Hype überholte die Technologie — die Planungsschleifen waren nie zuverlässig bei echten Aufgaben. Das Projekt stagnierte, das Maintainer-Team zerstreute sich, und die lokale-only Fork blieb hinter jedem Abhängigkeits-Update für 18+ Monate zurück.',
          '**Konkrete Breakage im Mai 2026:** die Ollama-Integration nimmt eine API-Form an, die sich 2024 änderte. Die internen Planungs-Prompts wurden für GPT-3.5-Klasse-Modelle abgestimmt und produzieren malformed Pläne auf modernen Open-Weights-Modellen. Probleme, die 2025 auf der Repo eingereicht wurden, bleiben offen und unbeantwortet.',
          '**Die Planungsschleife driftet:** in den Durchläufen, die starteten, trat der Agent typischerweise in einen zirkulären Tool-Call-Pattern innerhalb von 2–4 Minuten ein — die gleichen Dateien erneut lesend, die gleichen Suchen erneut führend, niemals auf der Aufgabe konvergierend. Das ist der bekannte Fehler-Modus von unscoped autonomen Schleifen, genau das, das Scoped Harnesses (Cline, Continue.dev) nach Design vermeiden.',
          '**Verdikt:** unbrauchbar. Investiere kein Wochenende in AutoGPT-local in 2026. Die interessante Arbeit hat sich zu scoped Harnesses mit expliziten Approval Gates bewegt; AutoGPT ist ein historisches Artefakt, nicht eine aktuelle Option.',
          '**Wenn du nostalgisch bist:** das original Repo ist noch auf GitHub. Der richtige Weg, damit umzugehen, ist als eine Lektion — Autonomie war die falsche Abstraktion; beaufsichtigte Hilfe ist das, was funktioniert.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: 'Warum Agent-Demos besser aussehen als die Wirklichkeit',
        content:
          '**Demos sind kuriert; echte Aufgaben sind nicht.** Drei strukturelle Gründe erklären, warum ein Agent-Video besser aussieht als deine ersten 30 Minuten mit dem gleichen Stack.',
        items: [
          '**Demo-Aufgaben sind scoped.** „Baue ein Snake-Spiel" oder „zusammenfassen diese PDF" haben eine bekannte Form, eine kleine Datei-Oberfläche, und ein eindeutiges Erfolgssignal. Echte Aufgaben sind offen („finde, warum unser Checkout-Fluss 3% der Benutzer wirft") und haben eine große Datei-Oberfläche, mehrdeutige Erfolgskriterien, und Nebenwirkungen, die Fehler verstärken.',
          '**Demo-Durchläufe sind Cherry-gepickt.** Ein 30-Sekunden-Demo-Video ist die beste-of-many Take. Die Durchläufe, wo der Agent stagnierte, einen Dateipfad halluzinierte, oder eine veraltete Funktion aufrief, sind nicht im Schnitt. Du siehst nicht die Erfolgsnote; du siehst einen Erfolg.',
          '**Demo-Prompts sind über-spezifiziert.** „Umstrukturiere den User Service, um das neue Repository-Pattern zu verwenden" funktioniert in einer Demo, weil die Demo das neue Pattern in einer Datei dokumentiert, die der Agent findet. Deine echte Aufgabe hat das Pattern in einem Slack-Thread von vor drei Wochen. Das Modell hat nicht dein Kontext; die Demo tat es.',
          '**Demo-Modelle sind größer als dein lokales Modell.** Cloud-Demos laufen auf Frontier-Modellen. Lokale Agenten laufen auf allem, das du bei >10 tokens/s servieren kannst. Qwen3-Coder 30B ist hervorragend im Mai 2026, aber es ist nicht GPT-5 — und die Demos nutzen leise das bessere Modell.',
          '**Der Takeaway:** nimm an, dass jede Demo das obere 10% der Durchläufe repräsentiert. Die vernünftige Erwartung für eine echte Aufgabe ist der Median-Durchlauf, mit einer 20–30% Chance auf Fehler, der Eingriff erfordert. Plane für den Median.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: 'Überwachungskosten sind die echte Metrik',
        content:
          '**Der „beste" Agent ist nicht der mit dem längsten autonomen Lauf — er ist der, dessen Approvals du wirklich liest.** Approvals zu zählen ist die nützlichste Zahl, die wir gemessen haben.',
        items: [
          '**Niedrige Überwachungs-Aufgaben (3–8 Approvals insgesamt):** Cline auf einen scoped Refactor, Continue.dev Agent auf eine Single-Datei-Aufgabe. Du skimmst die Approvals, weil sie meistens Lese-Operationen und ein oder zwei Schreibe sind; die totale Aufgaben-Zeit wird von Modell-Latenz dominiert, nicht Approval-Reibung.',
          '**Mittlere Überwachungs-Aufgaben (10–20 Approvals):** Cline auf einer Multi-Datei-Aufgabe, die 8+ Dateien berührt, Continue.dev Agent auf alles, das seinen Plan-Horizont drückt. Du genehmigst sorgfältiger; die totale Aufgaben-Zeit ist grob-halb Modell, halb du.',
          '**Hohe Überwachungs-Aufgaben (40+ Approvals):** OpenInterpreter, das nicht-triviale Aufgaben macht. Der Agent ist ein Typing-Geschwindigkeit-Multiplikator, nicht ein Produktivitäts-Multiplikator — du machst noch die kognitive Arbeit und liest jeden Block.',
          '**Fehlgeschlagene Überwachungs-Muster:** Genehmigungsmüdigkeit. Über ~30 Approvals in einer Sitzung, Menschen Gummistempel. Das Harness, das zu viele Approvals erfordert, trainiert dich aus der Überprüfung, an welchem Punkt das Sicherheits-Gate fiktiv ist.',
          '**Der richtige Knopf: auto-approve Allow-Lists.** Lese-Tools (read_file, list_files, search_files, list_directory) sind sicher zu auto-approve. Schreib-Tools (write_to_file, replace_in_file, execute_command, browser_action mit Form-Submission) sind nicht. Diese einzelne Einstellung ist die Differenz zwischen einem nützlichen Agent und einem mühsamen.',
          '**Die richtige Unit: pro-Aufgabe Approval-Count.** Wenn du einen Stack evaluierst, zähle Approvals auf einer repräsentativen echten Aufgabe — nicht auf einer Demo-Aufgabe. Wenn die Anzahl über 20 ist, spart der Stack dir nicht wirklich Arbeit.',
          'Für Prompting-Techniken, die die Überwachungs-Kosten durch Verbesserung der Tool-Call-Qualität reduzieren, siehe [Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Verschärfe die Auto-Approve Allow-List am Anfang eines Projekts; lockere sie, während du Vertrauen in das Modell auf dieser Codebasis aufbaust. Das Gegenteil — starte permissiv, verschärfe nach einem schlechten Durchlauf — ist, wie unbeaufsichtigte Agenten Vorfälle verursachen.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: 'Aufgaben, denen du nie einen Agent vertrauen solltest',
        content:
          '**Manche Aufgaben sind Agent-inkompatibel, unabhängig vom Harness.** Erkenne sie, bevor du einen Nachmittag damit verschwendest, Approval-Regeln zu konfigurieren.',
        items: [
          '**Production-Datenbank-Schreiben.** Ein Modell, das einen sicheren `DELETE FROM users WHERE active = false`-Query gegen eine echte Tabelle ausstrahlt, ist der Vorfall, für den dieser Artikel existiert. Führe Datenbank-Tools mit Read-Only-Rollen aus, standardmäßig; spinn eine separate schreibbare Rolle nur für Aufgaben auf, die es explizit benötigen, und nur für die Dauer dieser Aufgaben.',
          '**Alles mit Geld oder Auth.** Zahlungs-APIs, OAuth Token-Issuance, Account-Erstellung, Rolle/Permissions-Änderungen. Die Kosten einer schlechten Anruf sind unbegrenzt; der Aufwind der Automation ist klein.',
          '**Langzeitplanung über 8–10 Schritte.** Agenten driften über lange Horizonte. Das richtige Muster ist „Modell schlägt einen Plan vor, Mensch genehmigt den Plan, Modell führt den Plan einen Schritt zur Zeit aus" — nicht „Modell plant und führt eine 25-Schritt-Aufgabe autonom aus".',
          '**Aufgaben, wo du Erfolg schnell überprüfen kannst.** Eine Scrape-und-Zusammenfassungs-Aufgabe, die du in 2 Minuten lesen kannst, ist ein gutes Fit. Eine „forsche diesen Markt und produziere einen Bericht"-Aufgabe, die du nicht in unter einer Stunde Fact-Check kannst, ist nicht — du wirst dem Bericht vertrauen, weil du es in einer Stunde vertrauenst, weil die Überprüfung mehr kostet als Umschreiben.',
          '**Alles, das Dateien berührt, die du nicht sicherst.** Sandbox den Dateisystem-Server auf ein einzelnes Arbeitsbereich-Verzeichnis. Behandle den Arbeitsbereich als abwerfbar. Wenn der Agent Dateien außerhalb des Arbeitsbereichs erreichen kann, hast du den Agent falsch konfiguriert.',
          '**Multi-Tenant oder gemeinsame Infrastruktur.** Lokale Agenten sind Personal-Maschinen-Tools in 2026. Gemeinsame CI-Runner, Multi-Tenant-Datenbanken, und gemeinsame Cloud-Konten sind die falsche Angriffs-Oberfläche für eine unbeaufsichtigte Agent-Schleife.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Entscheidung: Wähle deinen Stack',
        content:
          '**Die meisten Menschen sollten Cline + Ollama installieren und anhalten.** Der Entscheidungs-Baum unten deckt die Fälle ab, wo ein anderer Stack die richtige Wahl ist.',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I want a local agent for coding tasks (refactor, debug, multi-file edits) inside VS Code', 'Pick': 'Cline + Ollama with Qwen3-Coder 30B (or DeepSeek Coder V3 for 128K context)' },
          { 'Your situation': 'I already use Continue.dev for autocomplete and want a lighter agent for small tasks', 'Pick': 'Continue.dev Agent mode in the same install' },
          { 'Your situation': 'I want an agent that can drive a browser, query a database, and read files', 'Pick': 'Cline + Ollama with MCP servers wired in (filesystem, sqlite, puppeteer)' },
          { 'Your situation': 'I want a local "code interpreter" REPL — write code, run code, iterate', 'Pick': 'OpenInterpreter, but do not leave it unattended' },
          { 'Your situation': 'I have a production workflow with deterministic tools and need orchestration', 'Pick': 'LangGraph + Ollama, with a real test suite for the graph' },
          { 'Your situation': 'I want autonomous unsupervised agents that ship work overnight', 'Pick': 'Wait. The 2026 stack does not deliver this. Use supervised stacks instead.' },
          { 'Your situation': 'I want to evaluate AutoGPT or MetaGPT for real work', 'Pick': 'Skip both. AutoGPT is unmaintained; MetaGPT\'s multi-agent abstraction does not hold up.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: 'Was 2027 wahrscheinlich bringt',
        content:
          '**Langzeitplanung wird schrittweise verbessern; unbeaufsichtigte Autonomie bei echten Aufgaben passiert nicht dieses Jahr.** Zwei spezifische Vorhersagen, konservativ framed.',
        items: [
          '**Tool-Call-Zuverlässigkeit wird weiter steigen.** Der Trend von Llama 3 → Llama 3.3, Qwen2.5 → Qwen3, und die Gemma 3 → Gemma 4 Step-Change alle Punkt auf eine Sache: Tool-Call-Training ist der billigste und höchste-Impact Post-Training Pass. Erwarten 7B-Klasse-Modelle, zuverlässige Tool-Caller zu werden, im späten 2026/frühen 2027, was die Hardware-Leiste sinnvoll senkt.',
          '**Plan-Horizonte werden sich längern.** Heutiger ~5-Schritt zuverlässiger Horizont wird wahrscheinlich 8–10 Schritte ohne die Drift-Probleme erreichen. Das macht Cline-Stil Scoped Agents besser; es macht nicht AutoGPT-Stil Unscoped Agents funktionieren.',
          '**Multi-Agent-Systeme werden nicht ihren Durchbruch haben.** Das strukturelle Problem (Handoff-Zustand, Persona-Drift, redundante Arbeit) ist kein Modell-Skalierungs-Problem. Single-Agent-Harnesses mit längeren Scratchpads werden Multi-Agent-Rollenspiele weiter schlagen.',
          '**Das „beaufsichtigte Assistenten"-Modell gewinnt.** Die Agenten, die 2027 Arbeit liefern, sehen wie Cline 2.0 aus — bessere Tool-Oberflächen, glattere Approvals, längere Plan-Horizonte — nicht wie eine erfolgreiche AutoGPT-Neustart.',
          '**Ehrliche Absicherung:** jede dieser könnte falsch sein. Die Technologie bewegt sich schnell genug, dass eine Modell-Freigabe im Q3 2026 die Überwachungs-Kosten-Gleichung ändern könnte. Überprüfe diesen Artikel im November 2026 erneut.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Wählen und Laufen lokaler Agenten',
        items: [
          '**Fehler 1: Optimierung für Autonomie.** „Wie lange kann es unbeaufsichtigt laufen" ist die falsche Metrik. „Wie wenig Approvals zum Landen der Aufgabe" ist die richtige. Ein Stack auf Autonomie-Benchmarks wählen bekommt dir AutoGPT; wählen auf Überwachungs-Kosten bekommt dir Cline.',
          '**Fehler 2: Kleine Modelle für Tool-Call-Arbeit.** Alles unter 7B (und die meisten 7B–13B General-Purpose-Modelle ohne Tool-Call Fine-Tuning) strahlten malformed Tool Calls. Verwende Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, oder Llama 3.3 70B und höre auf, mit dem Harness zu kämpfen.',
          '**Fehler 3: 32K Context für Multi-Datei-Arbeit.** Cline streamt volle Datei-Inhalte in das Gespräch; eine 8-Datei-Aufgabe kann 32K Tokens durchbrennen, bevor Überlegung. Verwende einen 128K-Context-Modell (DeepSeek Coder V3, Llama 3.3 70B) für nicht-triviale Multi-Datei-Aufgaben.',
          '**Fehler 4: Auto-approve alles.** Der „alle genehmigen"-Toggle ist die Einfahrt zu „der Agent löschte meine Dateien". Auto-approve nur Lese-Tools; erfordere manuelle Genehmigung für Schreib- und Shell-Tools.',
          '**Fehler 5: Production-Datenbank-Schreiben von einem Agent.** Laufe eine Read-Only-Rolle standardmäßig. Eine separate schreibbare Rolle lebt nur für die Dauer von Aufgaben, die sie explizit benötigen. Die Kosten eines schlechten Schreibens sind unbegrenzt.',
          '**Fehler 6: Building einer Custom LangGraph Orchestrator, bevor Cline versucht.** 90% von „Ich brauche einen Custom Agent"-Usecases sind scoped genug, dass Cline + ein paar MCP-Server die richtige Antwort ist. Baue Custom nur, wenn die Workflow-Form wirklich inkompatibel mit bestehenden Harnesses ist.',
          '**Fehler 7: Chasing Demos.** Demos sind Best-of-Many. Plane für den Median-Durchlauf — 70–80% Erfolg auf echten Aufgaben, 20–30% erfordernden Eingriff. Alles, das sich „vollständig autonom" in 2026 nennt, ist Marketing, nicht Engineering.',
          '**Fehler 8: Ignorieren des Audit Trail.** Nach jeder langen Agent-Sitzung, lies das Action-Log. Muster entstehen — die gleiche Art von Fehlschritt drei Durchläufe nacheinander sagt dir, um eine Approval-Regel zu verschärfen oder das Modell zu ändern.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Cline GitHub-Repository](https://github.com/cline/cline) — autonomer Coding-Agent, Tool-Oberflächen-Dokumentation, Auto-Approve-Konfiguration.',
          '[Continue.dev Dokumentation](https://docs.continue.dev/) — Agent-Modus, Codebasis-Indexierung, Provider-Konfiguration.',
          '[LangGraph Dokumentation](https://langchain-ai.github.io/langgraph/) — Orchestrierungs-Library, State-Machine-Semantik, Human-in-the-Loop Interrupts.',
          '[OpenInterpreter GitHub-Repository](https://github.com/OpenInterpreter/open-interpreter) — Code-Execution-Agent, Sicherheit-Modi, lokale Modell-Integration.',
          '[MetaGPT GitHub-Repository](https://github.com/geekan/MetaGPT) — Multi-Agent-Framework, Rollendefinitionen, lokale Provider-Konfiguration.',
          '[Ollama Modell-Bibliothek](https://ollama.com/library) — verfügbare lokale Modelle, Tool-Call-Support-Flags, Quantisierungs-Optionen.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Sind autonome KI-Agenten 2026 wirklich nützlich?',
            a: 'Ja, aber nur in scoped, beaufsichtigten Formen. Cline + Ollama und Continue.dev Agent mode erledigen echte Aufgaben (Multi-Datei-Refactors, explorative Debugging, scoped Research) mit handhabbaren Überwachungskosten — typischerweise 5–12 Approvals pro Aufgabe. Das „vollständig autonom"-Framing ist noch immer aspirativ; Agenten, die als unbeaufsichtigt gepriesen werden (AutoGPT-local, MetaGPT), driften, wiederholen Arbeit, oder stagnieren bei langen Horizonte. Das richtige mentale Modell ist „beaufsichtigter Assistent", nicht „autonomer Arbeiter".',
          },
          {
            q: 'Warum sehen die meisten Agent-Demos besser aus als die Wirklichkeit?',
            a: 'Drei Gründe. Demo-Aufgaben sind scoped (kleine Datei-Oberfläche, eindeutiges Erfolgssignal); Demo-Durchläufe werden Cherry-gepickt von vielen Takes; Demo-Prompts werden über-spezifiziert mit Kontext, das das Modell nicht bei einer echten Aufgabe hätte. Plane für den Median-Durchlauf bei einer echten Aufgabe — 70–80% Erfolg, 20–30% erfordernden Eingriff — nicht der Demo-Durchlauf.',
          },
          {
            q: 'Welcher Agent-Stack ist am zuverlässigsten für echte Arbeit in 2026?',
            a: 'Cline + Ollama ist die Standardwahl für Code-formige Aufgaben (Refactors, Debugging, Multi-Datei-Arbeit). Koppeln mit Qwen3-Coder 30B für alltägliche Arbeit oder DeepSeek Coder V3/Llama 3.3 70B, wenn du 128K Context benötigst. Continue.dev Agent mode ist die leichtere Alternative für Single-Datei oder Zwei-Datei-Aufgaben. Beide sind scoped, gut gewartet, und laufen im Editor mit expliziten Approval Gates.',
          },
          {
            q: 'Wie viel Überwachung benötigen Agenten wirklich 2026?',
            a: '5–12 Approvals pro Aufgabe bei einem scoped Harness wie Cline; 4–8 auf Continue.dev Agent. Über 30 Approvals in einer Sitzung, Menschen Gummistempel — an welchem Punkt das Sicherheits-Gate fiktiv ist. Der richtige Knopf ist die Auto-Approve Allow-List: Auto-Approve Lese-Tools (read_file, list_files, search_files), erfordere manuelle Genehmigung für Schreib- und Shell-Tools. Diese einzelne Einstellung ist die Differenz zwischen einem nützlichen Agent und einem mühsamen.',
          },
          {
            q: 'Können Agenten Multi-Schritt-Aufgaben ohne Brechen behandeln?',
            a: 'Bis zu 5–8 Schritte zuverlässig mit einem starken Tool-Calling-Modell (Qwen3-Coder 30B, Gemma 4 27B, GLM-5.1 32B, Llama 3.3 70B). Darüber, Plan-Horizonte driften — der Agent liest Dateien erneut, führt die gleichen Suchen erneut aus, oder schlägt widersprüchliche nächste Schritte vor. Das richtige Muster ist „Modell schlägt einen Plan vor, Mensch genehmigt den Plan, Modell führt einen Schritt zur Zeit aus" — nicht autonome 25-Schritt-Ausführung.',
          },
          {
            q: 'Warum fehlschlagen Agenten bei Langzeitaufgaben?',
            a: 'Zwei strukturelle Gründe. Erstens, Context Bloat: jeder Tool Call fügt das Ergebnis zum Gespräch hinzu, also eine 20-Schritt-Aufgabe akkumuliert ~50K–100K Tokens von State und das Modell verliert den Überblick über das, das früh entschieden wurde. Zweitens, Plan Revision Drift: wenn ein Tool unerwarteter Output zurückgibt, replant das Modell oft die ganze Aufgabe anstatt lokal anzupassen — und der neue Plan widerspricht dem original Commitment. Scoped Harnesses (Cline, Continue.dev Agent) arbeiten um dieses herum durch Halten von Plänen kurz und Fragen dem Mensch zu Neu-Anker zwischen Schritten.',
          },
          {
            q: 'Sind lokale Agenten schlechter als Cloud-Agenten?',
            a: 'Bei absoluter Fähigkeit, ja — Frontier Cloud-Modelle schlagen immer noch jeden lokalen 30B-Klasse-Modell bei den schwierigsten Aufgaben. Bei beaufsichtigter alltäglicher Arbeit ist die Lücke kleiner als die Demos vermuten. Cline + Qwen3-Coder 30B erledigt 13–15 von 15 Multi-Datei-Refactors; die gleiche Aufgabe auf Cline + Claude oder GPT-5 erledigt 14–15 von 15. Der Trade-Off begünstigt lokal für Benutzer mit privaten Daten, kein API-Budget, oder strikte Offline-Anforderungen.',
          },
          {
            q: 'Können Agenten Fehler elegant handhaben?',
            a: 'Gemischt. Cline und Continue.dev Agent erholen sich gut von Tool-Fehler — das Harness surfacet den Fehler, das Modell schlägt einen Korrektiv-Schritt vor, der Mensch genehmigt. LangGraph + Ollama erholt sich nur so gut wie dein Graph definiert; ein ungehandhabter Tool-Fehler zyklisiert. AutoGPT-local erholt sich nicht überhaupt; es driftet. Error Handling ist ein Harness Property so viel wie ein Modell Property.',
          },
          {
            q: 'Welche Aufgaben sollte ich nie einem Agent vertrauen?',
            a: 'Production-Datenbank-Schreiben (Laufe Read-Only-Rollen standardmäßig), alles Geld oder Auth berührend (Zahlungen, OAuth, Account-Erstellung), Langzeitplanung über 8–10 Schritte, Aufgaben, wo du Erfolg schnell überprüfen kannst, alles außerhalb eines sandboxten Arbeitsbereich-Verzeichnis, und jede Arbeit auf Multi-Tenant oder gemeinsamer Infrastruktur. Die Kosten einer schlechten Agent-Aktion in diesen Kategorien sind unbegrenzt; der Aufwind der Automation ist klein.',
          },
          {
            q: 'Werden Agenten 2027 wesentlich verbessern?',
            a: 'Tool-Call-Zuverlässigkeit wird weiter steigen — erwarten 7B-Klasse-Modelle, zuverlässige Tool-Caller im späten 2026/frühen 2027 zu werden. Plan-Horizonte werden sich von ~5 zuverlässigen Schritte zu 8–10 längern. Multi-Agent-Systeme werden nicht ihren Durchbruch haben — die strukturellen Probleme (Handoff-Zustand, Persona-Drift, redundante Arbeit) sind nicht eine Modell-Skalierungs-Problem. Unbeaufsichtigte Autonomie bei echten Aufgaben ist unwahrscheinlich in 2027; „Cline 2.0" — bessere Tool-Oberflächen, glattere Approvals — ist der realistische Pfad.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Ollama mit Datenbanken und APIs über MCP verbinden: Lokale Agent-Einrichtung 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de) — was Agenten unter der Haube ermöglicht; Protokoll-Schicht für Dateisystem, Datenbank, Browser und GitHub-Tools.',
          '[Beste lokale Modelle für Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=de) — die Modell-Schicht; Kopf-an-Kopf-Benchmarks für die oben empfohlenen Tool-Caller (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider: Bester lokaler Coding-Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=de) — angrenzender Harness-Vergleich für Code-formige Arbeit.',
          '[Lokale KI-Agenten Business-Workflows EU-Compliance](/power-local-llm/local-ai-agents-business-workflows-eu-compliance?lang=de) — angewendeter Kontext für Unternehmen, die unter GDPR/EU AI Act operieren.',
          '[Beste lokale LLMs in 2026](/local-llms/best-local-llms-2026?lang=de) — Modell-Autorität für die breitere Open-Weights-Landschaft.',
          '[Power Local LLM Hub](/power-local-llm) — volle Guide-Bibliothek.',
        ],
      },
    },
  },
}
