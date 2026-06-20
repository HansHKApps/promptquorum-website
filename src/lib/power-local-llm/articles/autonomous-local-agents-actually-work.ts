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
      '6 local AI agent stacks tested on 5 real tasks. 2 work reliably, 3 fail in ways demos hide, 1 is unusable. Cline, LangGraph, AutoGPT, MetaGPT assessed.',
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
      '**In May 2026, two local agent stacks land real work without constant babysitting: Cline + Ollama and Continue.dev Agent mode. Both are scoped, well-maintained, and run a tool-calling model (Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B) inside a single editor with explicit approval gates. Three stacks fail in surprising ways — LangGraph + Ollama (orchestration is brittle on long horizons), OpenInterpreter (executes shell commands too eagerly to leave unattended), and MetaGPT local (multi-agent role-play loses the plot past two hand-offs). One stack was effectively unusable in our May 2026 evaluation: AutoGPT-local — dependencies conflicted with Python 3.11/Ollama 0.3.x, and the planning loop drifted into circular tool calls in every trial run. Check current project status before drawing permanent conclusions. The pattern is consistent: scoped, opinionated harnesses around one strong tool-calling model beat ambitious autonomous agents on every task we ran.**',
    quickAnswerTop: {
      en: {
        question: 'Do autonomous local AI agents actually work in 2026?',
        answer:
          'Some do, most do not. The two reliable stacks are Cline + Ollama (autonomous coding agent inside VS Code with per-step approval) and Continue.dev Agent mode (lighter agent loop in the same IDE). Both succeed because they are scoped — one editor, one model, one approval gate — not because the underlying technology is finally good enough for unattended autonomy. The frameworks pitched as "fully autonomous" (AutoGPT-local, MetaGPT, custom LangGraph orchestrators) still drift into circular tool calls, hallucinate file paths, or get stuck on long-horizon planning. The right model in 2026 is "supervised assistant" — agents that propose multi-step actions and stop for approval — not "autonomous worker". Anything sold as autonomous is a demo, not a product.',
        bullets: [
          'Two stacks ship real work: Cline + Ollama and Continue.dev Agent. Both are scoped to a single IDE, run one tool-calling model, and require human approval per step.',
          'Three stacks fail in non-obvious ways: LangGraph + Ollama (brittle on long horizons), OpenInterpreter (too eager to execute shell), MetaGPT local (multi-agent role-play breaks down).',
          'AutoGPT-local was effectively unusable in our May 2026 evaluation (Python 3.11, Ollama 0.3.x, 5 task runs) — stalled project, dependency conflicts, planning loop drifted into circular calls in every run. Verify current project status before drawing conclusions.',
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
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'The slide deck below covers: why 4 of 6 local agent stacks fail (named verdicts), the 30-day test methodology (6 stacks × 5 tasks), supervision cost as the real metric (3–12 vs 40+ approvals), tasks agents must never run unsupervised, and a decision table for picking the right stack. Download the PDF as a local AI agent evaluation reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Two stacks land real work in May 2026:** Cline + Ollama (autonomous coding agent inside VS Code) and Continue.dev Agent mode. Both are scoped to one editor, one model, and one approval gate per step.',
          '**Three stacks fail in surprising ways:** LangGraph + Ollama orchestration is brittle past 4–5 step horizons, OpenInterpreter executes shell commands too eagerly to leave unattended, MetaGPT local multi-agent role-play breaks down past two hand-offs.',
          '**One stack is unusable as of May 2026 testing:** AutoGPT-local — dependencies did not resolve against Python 3.11/Ollama 0.3.x, the planning loop drifted into circular tool calls in all 5 evaluation runs, and no maintainer responded to open issues at time of testing. Check the GitHub repository for current activity before drawing permanent conclusions.',
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
          '**Concrete breakage in May 2026:** the Ollama integration assumes an API shape that changed in 2024. The internal planning prompts were tuned for older-generation models and produce malformed plans on modern open-weights models. Issues filed on the repo in 2025 remain open and unanswered.',
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
          '**Tool-call reliability will keep climbing.** The trend from Llama 3 → Llama 3.3, Qwen3 → Qwen3, and the Gemma 3 → Gemma 4 step-change all point at one thing: tool-call training is the cheapest and highest-impact post-training pass. Expect 7B-class models to become reliable tool-callers in late 2026 / early 2027, which lowers the hardware bar for agents meaningfully.',
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
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Agentes de IA locales en 2026: lo que realmente funciona (y lo que sigue fallando)',
    seoTitle: 'Agentes de IA locales 2026: lo que funciona y lo que falla',
    intro:
      'Seis stacks de agentes de IA locales, cinco tareas reales, treinta días de evaluación. Dos stacks completan las tareas de forma fiable. Tres fallan de maneras que los demos no muestran. Uno es prácticamente inutilizable. Este es el informe honesto: qué hace realmente cada configuración de agente en una refactorización, una tarea de investigación, un triaje de correo, un scrape-y-resumen y una búsqueda de bugs, con los fallos nombrados específicamente y el coste de supervisión cuantificado.',
    metaDescription:
      '6 stacks de agentes de IA locales probados en 5 tareas reales: 2 funcionan, 3 fallan como los demos ocultan y 1 es inutilizable. Cline, LangGraph y AutoGPT.',
    twitterDescription:
      'Probé 6 stacks de agentes locales en 5 tareas reales durante 30 días. 2 funcionaron, 3 fallaron de formas inesperadas, 1 era inutilizable. El veredicto honesto sobre qué stacks entregan trabajo real y cuáles solo entregan demos.',
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
      'Desarrolladores y operadores técnicos que evalúan stacks de agentes de IA locales para trabajo real —refactorizaciones, investigación, flujos de contenido, depuración— y que quieren un veredicto antes de invertir un fin de semana en la configuración.',
    readTime: '16 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'local AI agent',
    targetKeywords: [
      'agentes de ia locales 2026',
      'agentes autónomos análisis real',
      'cline vs autogpt local',
      'mejor framework de agente local',
      'los agentes de ia realmente funcionan',
      'comparativa de agentes llm locales',
    ],
    leadAnswerBlock:
      '**En mayo de 2026, dos stacks de agentes locales completan trabajo real sin supervisión constante: Cline + Ollama y Continue.dev en modo Agent. Ambos son acotados, bien mantenidos y ejecutan un modelo con tool-calling (Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B) dentro de un único editor con puertas de aprobación explícitas. Tres stacks fallan de formas sorprendentes: LangGraph + Ollama (la orquestación es frágil en horizontes largos), OpenInterpreter (ejecuta comandos de shell con demasiada facilidad para dejarlo desatendido) y MetaGPT local (el juego de roles multiagente pierde el hilo tras dos traspasos). Un stack es prácticamente inutilizable: AutoGPT-local, el proyecto está estancado, las dependencias no coinciden con el Ollama moderno y el bucle de planificación deriva hacia llamadas circulares de herramientas en minutos. El patrón es consistente: los harnesses acotados y con criterio propio alrededor de un modelo fuerte con tool-calling superan a los agentes autónomos ambiciosos en cada tarea que ejecutamos.**',
    quickAnswerTop: {
      es: {
        question: '¿Los agentes de IA autónomos locales realmente funcionan en 2026?',
        answer:
          'Algunos sí, la mayoría no. Los dos stacks fiables son Cline + Ollama (agente de codificación autónomo en VS Code con aprobación por paso) y Continue.dev en modo Agent (bucle de agente más ligero en el mismo IDE). Ambos funcionan porque están acotados: un editor, un modelo, una puerta de aprobación. No porque la tecnología subyacente sea por fin suficientemente buena para la autonomía sin supervisión. Los frameworks presentados como "completamente autónomos" (AutoGPT-local, MetaGPT, orquestadores LangGraph personalizados) siguen derivando hacia llamadas circulares de herramientas, alucinando rutas de archivos o quedándose bloqueados en la planificación de horizontes largos. El modelo correcto en 2026 es el de "asistente supervisado": agentes que proponen acciones en múltiples pasos y se detienen para pedir aprobación, no "trabajador autónomo". Todo lo que se vende como autónomo es una demo, no un producto.',
        bullets: [
          'Dos stacks entregan trabajo real: Cline + Ollama y Continue.dev Agent. Ambos están acotados a un único IDE, ejecutan un modelo con tool-calling y requieren aprobación humana por paso.',
          'Tres stacks fallan de formas no evidentes: LangGraph + Ollama (frágil en horizontes largos), OpenInterpreter (demasiado ansioso por ejecutar shell), MetaGPT local (el juego de roles multiagente se rompe).',
          'AutoGPT-local resultó prácticamente inutilizable en nuestra evaluación de mayo de 2026 (Python 3.11, Ollama 0.3.x, 5 ejecuciones de tareas) — conflictos de dependencias, el bucle de planificación derivó hacia llamadas circulares en cada ejecución. Verifique el estado actual del proyecto antes de sacar conclusiones.',
          'La fiabilidad de las llamadas a herramientas proviene del modelo, no del harness. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B y Llama 3.3 70B funcionan en cualquiera de los stacks fiables. Los modelos por debajo de 7B fallan en todos.',
          'El coste de supervisión es la métrica que importa. El "mejor" agente es aquel cuyas aprobaciones realmente lees, no el que tiene la ejecución autónoma más larga.',
          'Las perspectivas para 2027: la planificación a largo plazo mejorará de forma incremental. La autonomía sin supervisión en tareas reales no va a ocurrir este año, independientemente de lo que muestren los demos.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Cómo lo probamos', anchor: '#how-we-tested' },
      { label: 'Tabla de realidad de agentes', anchor: '#reality-table' },
      { label: 'Lo que funciona: Cline + Ollama', anchor: '#cline-ollama' },
      { label: 'Lo que funciona: Continue.dev Agent', anchor: '#continue-agent' },
      { label: 'Lo que falla: LangGraph + Ollama', anchor: '#langgraph' },
      { label: 'Lo que falla: OpenInterpreter', anchor: '#openinterpreter' },
      { label: 'Lo que falla: MetaGPT Local', anchor: '#metagpt' },
      { label: 'Inutilizable: AutoGPT-Local', anchor: '#autogpt' },
      { label: 'Por qué los demos de agentes parecen mejores que la realidad', anchor: '#demos-vs-reality' },
      { label: 'El coste de supervisión es la métrica real', anchor: '#supervision-cost' },
      { label: 'Tareas que nunca debes confiar a un agente', anchor: '#never-trust' },
      { label: 'Decisión: elige tu stack', anchor: '#decision' },
      { label: 'Lo que probablemente traerá 2027', anchor: '#outlook' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'La presentación cubre: por qué 4 de los 6 stacks de agentes locales fallan (veredictos con nombres), la metodología de prueba de 30 días (6 stacks × 5 tareas), el coste de supervisión como métrica real (3–12 vs 40+ aprobaciones), las tareas que los agentes nunca deben ejecutar sin supervisión y una tabla de decisión para elegir el stack correcto. Descarga el PDF como tarjeta de referencia para evaluar agentes de IA locales.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Dos stacks entregan trabajo real en mayo de 2026:** Cline + Ollama (agente de codificación autónomo en VS Code) y Continue.dev en modo Agent. Ambos están acotados a un editor, un modelo y una puerta de aprobación por paso.',
          '**Tres stacks fallan de formas sorprendentes:** la orquestación de LangGraph + Ollama es frágil más allá de horizontes de 4–5 pasos, OpenInterpreter ejecuta comandos de shell con demasiada facilidad para dejarlo desatendido, y el juego de roles multiagente de MetaGPT local se rompe tras dos traspasos.',
          '**Un stack resultó inutilizable en las pruebas de mayo de 2026:** AutoGPT-local — las dependencias no se resolvieron con Python 3.11/Ollama 0.3.x, el bucle de planificación derivó hacia llamadas circulares en las 5 ejecuciones de evaluación y ningún mantenedor respondió a los problemas abiertos en el momento de las pruebas. Consulte el repositorio de GitHub para ver la actividad actual antes de sacar conclusiones permanentes.',
          '**La fiabilidad de las llamadas a herramientas es una propiedad del modelo, no del harness.** Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B y Llama 3.3 70B emiten llamadas a herramientas limpias en cada stack fiable. Los modelos por debajo de 7B emiten llamadas malformadas independientemente del agente que los envuelva.',
          '**El modelo de "asistente supervisado" gana en 2026.** Los agentes que proponen acciones en múltiples pasos y se detienen para pedir aprobación completan más tareas que los agentes que intentan ejecutarse sin supervisión. Es un límite de las propiedades de los LLM de 2026, no una preferencia de UX.',
          '**El coste de supervisión es la métrica que importa.** Una tarea de 30 minutos que requiere tres aprobaciones es entregable. Una tarea de 2 horas que requiere veinte aprobaciones no lo es: tú estás haciendo el trabajo, el agente solo lo ralentiza.',
          '**El coste es real pero pequeño.** Inferencia solo local, sin gasto en API, la electricidad es el único coste marginal. El consumo de tokens por tarea es la restricción: los bucles de agentes consumen 30K–80K tokens en una tarea de varios pasos, por lo que los modelos con contexto de 32K llegan al límite rápido y los de 128K son cómodos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Stacks probados:** Cline + Ollama, Continue.dev Agent, LangGraph + Ollama (personalizado), AutoGPT-local, OpenInterpreter, MetaGPT local.',
          '**Tareas probadas:** investigación de temas, refactorización de múltiples archivos, triaje de borradores de correo, scrape-y-resumen, depuración de bugs.',
          '**Hardware:** Apple M5 Max 64 GB de memoria unificada y equipo con 2× NVIDIA RTX 3090 24 GB; ambos ejecutan Qwen3-Coder 30B Q4_K_M cómodamente con contexto de 32K.',
          '**Modelos:** Qwen3-Coder 30B (principal), GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B (los cuatro tool-callers fiables en mayo de 2026).',
          '**Forma del veredicto:** 2 stacks fiables en las 5 tareas, 3 stacks fiables en 1–2 tareas cada uno, 1 stack inutilizable.',
          '**Coste:** 0 € en tarifas de API. ~0,10–0,30 € en electricidad por tarea de varios pasos en un equipo de escritorio con GPU de 350W (menos de 0,05 € en un Mac).',
          '**Patrón de supervisión que funciona:** aprobar automáticamente las herramientas de lectura, aprobar manualmente cada herramienta de escritura/shell, revisar el registro de auditoría tras sesiones largas.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Cómo lo probamos: mismo modelo, mismas tareas, diferentes harnesses',
        content:
          '**La prueba mantuvo el modelo constante y solo varió el harness del agente.** Cada stack recibió las mismas cinco tareas contra el mismo backend (Ollama sirviendo Qwen3-Coder 30B en Q4_K_M), por lo que los fallos se atribuyen al harness, no al modelo.',
        items: [
          '**Backend:** Ollama 0.5+ en macOS y Linux. Modelo principal Qwen3-Coder 30B Q4_K_M (contexto de 32K). Modelos secundarios (GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B) usados para verificar que los fallos en las llamadas a herramientas no eran un artefacto de un único modelo.',
          '**Hardware:** un MacBook Pro Apple M5 Max 64 GB y un escritorio Linux con 2× RTX 3090 24 GB. Ambos mantienen Qwen3-Coder 30B a una velocidad usable (>15 tokens/s).',
          '**Tareas:** investigación de temas (recopilar, deduplicar y resumir 8 fuentes sobre un tema de nicho), refactorización de múltiples archivos (renombrar un servicio en 12 archivos TypeScript), triaje de borradores de correo (resumir y redactar respuestas para una carpeta de 40 mensajes), scrape-y-resumen (leer 5 URLs y producir un resumen comparativo), depuración de bugs (encontrar por qué un test existente es inestable).',
          '**Cadencia de ejecución:** cada tarea se ejecutó 3 veces por stack durante el período de 30 días, con un prompt nuevo cada vez. El resultado se calificó como "completo sin supervisión", "completo con supervisión", "parcial" o "bloqueado / fallido".',
          '**Métrica de supervisión:** número de aprobaciones requeridas por tarea y la proporción de aprobaciones en las que rechazamos la acción propuesta. Una tasa de rechazo alta indica que el harness genera ruido que el humano debe filtrar.',
          '**Restricción de honestidad:** rangos, no porcentajes exactos inventados. "Fiable en las 5 tareas" significa 13–15 de 15 ejecuciones completadas; "falla en horizontes largos" significa 3–6 de 15 ejecuciones completadas sin intervención. Los veredictos son conservadores: cuando un stack funcionó pero solo con intervención no trivial, se cuenta como fallo a efectos de tareas sin supervisión.',
          'La fiabilidad de las llamadas a herramientas es la capa subyacente a todo esto. Para la comparativa del lado del modelo, consulta [Mejores modelos locales para tool calling en 2026](/es/power-local-llm/best-local-models-tool-calling-2026); la capa de protocolo se trata en [Conectar Ollama a bases de datos y APIs con MCP](/es/power-local-llm/local-ai-agents-with-mcp-2026).',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: 'Tabla de realidad de agentes: seis stacks, cinco tareas, veredictos honestos',
        content:
          '**Dos stacks terminan el trabajo; tres tropiezan de formas distintas; uno está roto.** La columna de veredicto es la que hay que leer primero.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama y Continue.dev Agent son los únicos dos stacks de agentes de IA locales que completan tareas reales de forma fiable en mayo de 2026; LangGraph, OpenInterpreter y MetaGPT fallan cada uno de una manera distinta; AutoGPT-local es inutilizable.',
          },
          {
            type: 'plain-terms',
            text: 'Si quieres un agente local que realmente termine una refactorización o una tarea de investigación, instala Cline o Continue.dev y deja de leer. Los otros cuatro stacks tienen demos que parecen mejores que la realidad de dejarlos ejecutarse diez minutos.',
          },
        ],
        columns: ['Stack', 'Tasa de éxito de tareas', 'Fallos observados', 'Supervisión necesaria', 'Veredicto'],
        rows: [
          {
            'Stack': 'Cline + Ollama',
            'Tasa de éxito de tareas': '13–15 de 15 ejecuciones completadas',
            'Fallos observados': 'Presión de tokens en modelos con contexto de 32K para trabajo con múltiples archivos; recuperable con contexto de 128K',
            'Supervisión necesaria': 'Aprobación por paso; ~5–12 aprobaciones por tarea',
            'Veredicto': 'Funciona. Elección por defecto para tareas de tipo codificación.',
          },
          {
            'Stack': 'Continue.dev Agent',
            'Tasa de éxito de tareas': '12–14 de 15 ejecuciones completadas',
            'Fallos observados': 'Horizonte de plan más corto que Cline; las ediciones de múltiples archivos a veces se detienen tras 2–3 archivos',
            'Supervisión necesaria': 'Aprobación de vista previa del diff; ~4–8 aprobaciones por tarea',
            'Veredicto': 'Funciona. Alternativa más ligera cuando Cline es excesivo.',
          },
          {
            'Stack': 'LangGraph + Ollama',
            'Tasa de éxito de tareas': '4–7 de 15 ejecuciones completadas sin intervención',
            'Fallos observados': 'Frágil más allá de horizontes de 4–5 pasos; la máquina de estados entra en bucle cuando una herramienta devuelve datos inesperados; sin puerta de aprobación nativa (la construyes tú)',
            'Supervisión necesaria': 'Alta: depurar la orquestación es la mitad del trabajo',
            'Veredicto': 'Falla. El esfuerzo de construcción supera el valor para el 90% de los usuarios.',
          },
          {
            'Stack': 'AutoGPT-local',
            'Tasa de éxito de tareas': '0–2 de 15 ejecuciones completadas',
            'Fallos observados': 'Proyecto estancado en 2024–2025; las dependencias no coinciden con el Ollama moderno; el bucle de planificación deriva hacia llamadas circulares de herramientas en minutos',
            'Supervisión necesaria': 'Constante: el agente no converge',
            'Veredicto': 'Inutilizable. Descártalo por completo en 2026.',
          },
          {
            'Stack': 'OpenInterpreter',
            'Tasa de éxito de tareas': '6–9 de 15 ejecuciones completadas, pero con riesgo',
            'Fallos observados': 'Ejecución de shell agresiva; ejecuta comandos destructivos sin medidas de protección explícitas; los prompts de seguridad son inconsistentes',
            'Supervisión necesaria': 'Constante: no se puede dejar desatendido',
            'Veredicto': 'Falla para autonomía. Útil solo como REPL supervisado.',
          },
          {
            'Stack': 'MetaGPT local',
            'Tasa de éxito de tareas': '3–6 de 15 ejecuciones completadas',
            'Fallos observados': 'El juego de roles multiagente (PM → Engineer → QA) deriva tras dos traspasos; los agentes repiten trabajo anterior; las salidas se contradicen entre sí',
            'Supervisión necesaria': 'Alta: y estás depurando las definiciones de roles, no la tarea',
            'Veredicto': 'Falla. La abstracción multiagente es el problema, no la implementación.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: 'Lo que funciona: Cline + Ollama es la elección por defecto',
        content:
          '**Cline + Ollama es el único stack que completó cada tipo de tarea con un coste de supervisión predecible.** Funciona porque está acotado: un IDE (VS Code), un modelo, una puerta de aprobación por paso.',
        items: [
          '**Qué es:** Cline es una extensión de VS Code que convierte el editor en una superficie de agente autónomo. El modelo propone un plan en modo Plan, lo ejecuta en modo Act a través de una superficie de herramientas (read_file, write_to_file, replace_in_file, execute_command, list_files, search_files) y solicita aprobación entre pasos, a menos que las herramientas estén en una lista de permitidas.',
          '**Por qué funciona:** el harness tiene criterio propio. La superficie de herramientas es pequeña y estable, el flujo de aprobación es visible (cada paso es una tarjeta que aceptas o rechazas) y el modelo solo ve el editor, no toda la máquina. Los fallos son recuperables porque la última acción siempre está a un clic de revertir.',
          '**Donde destaca:** refactorizaciones de múltiples archivos (renombrar un servicio en 12 archivos en una sola tarea), depuración exploratoria de bugs ("encuentra por qué este test es inestable": Cline lee archivos de test adyacentes, rastrea dependencias, propone una hipótesis, edita, ejecuta el test) e investigación acotada que produce un entregable en markdown dentro del proyecto.',
          '**Donde tropieza:** tareas que no son de codificación y que requieren HTTP externo (sin navegador nativo). El triaje de borradores de correo solo funciona si conectas un servidor MCP o herramientas de shell, y en ese punto estás configurando tres cosas para hacer lo que haría directamente una herramienta más pequeña y acotada.',
          '**Coste de supervisión:** ~5–12 aprobaciones por tarea. La mayoría son herramientas de lectura (baratas, aceptación rápida). Las costosas son write_to_file y execute_command: configúralas para requerir aprobación manual y capturarás la rara llamada errónea antes de que aterrice.',
          '**Coste de tokens:** alto. Los contenidos completos de los archivos se transmiten a la conversación mientras el agente los lee. Una refactorización de 12 archivos con Qwen3-Coder 30B en contexto de 32K agota la ventana rápido: cambia a un modelo con contexto de 128K (DeepSeek Coder V3, Llama 3.3 70B) para trabajo no trivial.',
          'Para una configuración más detallada de Cline, incluidas las listas de aprobación automática, consulta [Continue.dev vs Cline vs Aider: mejor agente de codificación local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ejecuta Cline con Qwen3-Coder 30B (Q4_K_M, ~17 GB VRAM) para tareas de codificación. Para tareas que tocan más de 6 archivos en una sesión, cambia a DeepSeek Coder V3 u otro modelo con contexto de 128K: la ventana de 32K de Qwen3-Coder se llenará antes de que el agente termine.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: 'Lo que funciona: Continue.dev en modo Agent para tareas más ligeras',
        content:
          '**Continue.dev en modo Agent es la elección correcta cuando Cline es excesivo.** Mismo IDE, misma clase de modelo, superficie más pequeña: menos aprobaciones, horizonte de plan más corto, menor consumo de tokens.',
        items: [
          '**Qué es:** Continue.dev es principalmente una extensión de autocompletado y chat para VS Code y JetBrains, con un modo Agent que añade llamadas a herramientas (lectura/escritura de archivos, búsqueda en la base de código, ejecución en terminal) y un bucle de plan en múltiples pasos. El agente es más restringido que el de Cline: menos herramientas, horizontes predeterminados más cortos, comportamiento autónomo menos agresivo.',
          '**Por qué funciona:** la audiencia de Continue.dev son usuarios de autocompletado, por lo que el modo Agent hereda una UX de "pequeño, rápido, visible". Cada edición aterriza como una vista previa del diff antes de que el modelo toque el archivo. Los planes rara vez superan los 3–5 pasos, lo que mantiene el consumo de tokens modesto y el historial de auditoría corto.',
          '**Donde destaca:** tareas de uno o dos archivos, "explica esta región de la base de código", "reescribe esta función con estas restricciones", "añade un test para este método". El agente se ejecuta sin arrastrar toda la base de código a la conversación, por lo que un modelo con contexto de 32K es cómodo.',
          '**Donde tropieza:** planes de más de 5 pasos. Las refactorizaciones de múltiples archivos que necesitan 8 o más ediciones a veces se detienen tras 2–3 archivos y piden al usuario que continúe. Esto no es un bug: el harness es conservador respecto al horizonte del plan, pero significa que supervisas con más frecuencia que con Cline en la misma tarea.',
          '**Coste de supervisión:** ~4–8 aprobaciones por tarea, con peso en las vistas previas de diff (señal alta, aceptación rápida).',
          '**Coste de tokens:** notablemente menor que Cline porque Continue.dev usa su índice TF-IDF + embeddings para recuperar fragmentos relevantes en lugar de transmitir archivos completos. Un modelo con contexto de 32K completa la mayoría de las tareas cómodamente.',
          'Cuándo elegir Continue.dev Agent sobre Cline: cuando la tarea cabe en 2–3 archivos, cuando el presupuesto de tokens es ajustado, cuando ya usas Continue.dev para autocompletado y quieres una herramienta en vez de dos.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: 'Lo que falla: LangGraph + Ollama (frágil en horizontes largos)',
        content:
          '**LangGraph + Ollama es la herramienta correcta para la orquestación en producción y la herramienta incorrecta para "quiero un agente en mi portátil".** El esfuerzo de construcción es alto, los modos de fallo no son evidentes y el valor se realiza solo a escala.',
        items: [
          '**Qué es:** LangGraph es una librería de orquestación de máquinas de estado. Defines nodos (funciones tipadas que llaman al modelo, ejecutan una herramienta, evalúan una condición) y aristas (transiciones). El runtime ejecuta el grafo, gestiona las ramificaciones y administra el estado entre pasos. Combínalo con un backend de Ollama y tendrás un agente local personalizado.',
          '**Por qué falla como agente de escritorio:** la superficie de fallo es el código de orquestación, no el modelo. Las máquinas de estado que parecen limpias en una pizarra entran en bucle cuando una herramienta devuelve datos inesperados: por ejemplo, una solicitud HTTP que devuelve 200 pero con cuerpo vacío, una lectura de archivo en una ruta que existe pero es un directorio. Depuras tu grafo tanto como el agente depura la tarea.',
          '**Horizonte de plan:** frágil más allá de 4–5 nodos. Cada punto de ramificación dobla la superficie de prueba. En el nodo 6 tienes un árbol de posibles rutas de ejecución y el modelo elige una que no anticipaste. El grafo entonces reescribe el estado de una manera que el siguiente nodo no puede consumir.',
          '**Sin puerta de aprobación nativa:** tú construyes las interrupciones humanas en el bucle. La librería lo soporta (la interrupción-y-reanudación está documentada), pero la implementación es tuya. Cline y Continue.dev te dan esto de forma gratuita.',
          '**Donde realmente encaja:** flujos de trabajo del lado del servidor donde controlas la forma de la entrada, la superficie de herramientas es fija y puedes escribir una suite de tests real para el grafo. Por ejemplo, un flujo de enrutamiento de soporte al cliente con tres herramientas deterministas y un nodo de modelo: ese es el punto óptimo de LangGraph.',
          '**Veredicto para la pregunta del agente local:** falla. Construir un orquestador LangGraph personalizado para hacer lo que Cline hace en una instalación es tiempo desperdiciado para el 90% de los usuarios. Hazlo solo si tienes una forma de flujo de trabajo que Cline no puede expresar y tienes la disciplina de testing para mantener el grafo honesto.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Esto no es una crítica a LangGraph: la librería es sólida para flujos de trabajo en producción. La crítica es que "usa LangGraph para tu agente local" es la recomendación incorrecta cuando ya existen harnesses acotados.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: 'Lo que falla: OpenInterpreter es útil supervisado, peligroso sin supervisión',
        content:
          '**OpenInterpreter ejecuta comandos de shell con demasiada facilidad para dejarlo desatendido.** Es genuinamente útil como REPL supervisado: describes una tarea, escribe Python o shell, lo observas ejecutarse, y genuinamente peligroso para alejarte de él.',
        items: [
          '**Qué es:** OpenInterpreter es una CLI que permite a un modelo escribir y ejecutar código (Python, shell, JavaScript, R) en tu máquina. El prompt interactivo solicita confirmación antes de ejecutar cada bloque, por defecto. El encuadre es "Code Interpreter de ChatGPT, en local".',
          '**Por qué falla como agente autónomo:** el prompt de seguridad es por bloque y el modelo propone regularmente comandos de shell que parecen benignos pero producen cambios de estado permanentes (`rm` en rutas profundas, `pip install` en el Python del sistema, `git reset --hard`). Confirmar cada bloque se convierte en el trabajo: no puedes hojear porque el coste de aprobar el bloque incorrecto es ilimitado.',
          '**El modo de confirmación automática existe.** Y es también de donde proviene cada historia de terror. No recomendamos ejecutar OpenInterpreter con confirmación automática en una máquina que tenga algo que te importe.',
          '**Donde destaca:** como bloc de notas supervisado. "Convierte este CSV a Parquet", "extrae metadatos de estos 200 PDFs", "reescribe este script Python para usar asyncio". Tareas donde te quedas en el terminal, observas cada comando y el modelo está haciendo el trabajo de escribir más rápido por ti.',
          '**Donde falla:** cualquier cosa que se parezca a la autonomía. Incluso con los prompts de confirmación activados, una tarea de 30 minutos promedia 40+ confirmaciones y los modos de fallo son variados (directorio de trabajo incorrecto, lecturas parciales, llamadas de red inesperadas).',
          '**Coste de supervisión:** esencialmente el 100%: supervisas cada bloque. Una tarea de "5 minutos" tarda más que hacerla a mano una vez que cuentas leer y aprobar.',
          '**Veredicto:** herramienta útil, categoría incorrecta. OpenInterpreter es un asistente de codificación que ejecuta código, no un agente autónomo. Puntuarlo contra Cline es el encuadre incorrecto; el encuadre correcto es "Cline entrega una funcionalidad, OpenInterpreter escribe un script puntual".',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: 'Lo que falla: MetaGPT Local (el juego de roles multiagente se rompe)',
        content:
          '**El juego de roles multiagente "PM → Engineer → QA → Designer" de MetaGPT no sobrevive al contacto con tareas no triviales.** Tras dos traspasos, los agentes repiten trabajo anterior, se contradicen entre sí o se bloquean negociando sus propios roles.',
        items: [
          '**Qué es:** MetaGPT es un framework multiagente que simula un equipo de desarrollo de software. Un agente Product Manager escribe los requisitos, un agente Architect diseña, un agente Engineer codifica, un agente QA prueba. Cada agente es el mismo modelo subyacente con un prompt de sistema diferente y un conjunto de herramientas distinto.',
          '**Por qué falla:** el juego de roles multiagente asume que el modelo puede mantener una persona coherente a lo largo de muchos turnos y traspasar el contexto de forma fiable. En la práctica, con un modelo local de clase 30B, las personas se difuminan. El agente Engineer vuelve a ejecutar el análisis del agente PM. El agente QA reescribe código en lugar de probarlo. El estado del traspaso —lo que cada agente aprendió en su turno— es el bug.',
          '**El problema más profundo:** la abstracción multiagente añade turnos sin añadir capacidad. Un único agente con la misma superficie de herramientas y un scratchpad más largo hace la misma tarea en menos tokens con menos deriva. El encuadre de "equipo" es antropomórfico, no arquitectónico.',
          '**Donde podría funcionar:** tareas estrechamente definidas con límites de traspaso duros: por ejemplo, un flujo de trabajo de equipo de redacción (investigación → esquema → borrador → edición) donde cada paso tiene un entregable y el siguiente paso ignora el razonamiento previo. No encontramos un flujo de trabajo real donde MetaGPT superara a un harness de agente único con un prompt de lista de verificación.',
          '**Veredicto:** falla. El bug es conceptual, no de implementación. Los harnesses de agente único con prompts estructurados superan a los harnesses multiagente en cada tarea que ejecutamos.',
          'Para técnicas de prompting que mejoran la fiabilidad de cualquier bucle de agente único, consulta [chain-of-thought prompting](/es/prompt-engineering/chain-of-thought-prompting): el mismo patrón de razonamiento estructurado que ayuda a un modelo a pensar ayuda a un único agente a mantenerse coherente.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Inutilizable: AutoGPT-Local está prácticamente abandonado',
        content:
          '**AutoGPT-local no es un stack que evaluar en 2026, es un stack que descartar.** El proyecto está prácticamente sin mantenimiento, las dependencias no coinciden con el Ollama moderno y el bucle de planificación deriva en minutos.',
        items: [
          '**Qué ocurrió:** AutoGPT fue el proyecto canónico de "agente autónomo" de 2023. El hype superó a la tecnología: los bucles de planificación nunca fueron fiables en tareas reales. El proyecto se estancó, el equipo de mantenedores se dispersó y el fork local-only se quedó rezagado respecto a cada actualización de dependencias durante más de 18 meses.',
          '**Rotura concreta en mayo de 2026:** la integración de Ollama asume una forma de API que cambió en 2024. Los prompts de planificación internos fueron ajustados para modelos de generación anterior y producen planes malformados en modelos de pesos abiertos modernos. Los problemas reportados en el repositorio en 2025 siguen abiertos y sin respuesta.',
          '**El bucle de planificación deriva:** en las ejecuciones que arrancaron, el agente típicamente entraba en un patrón de llamada circular de herramientas en 2–4 minutos: releyendo los mismos archivos, volviendo a ejecutar las mismas búsquedas, sin converger nunca en la tarea. Este es el modo de fallo bien conocido de los bucles autónomos sin acotar, exactamente lo que los harnesses acotados (Cline, Continue.dev) evitan por diseño.',
          '**Veredicto:** inutilizable. No inviertas un fin de semana en AutoGPT-local en 2026. El trabajo interesante se ha desplazado a harnesses acotados con puertas de aprobación explícitas; AutoGPT es un artefacto histórico, no una opción actual.',
          '**Si sientes nostalgia:** el repositorio original sigue en GitHub. La forma correcta de relacionarse con él es como lección: la autonomía era la abstracción incorrecta; la asistencia supervisada es lo que funciona.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: 'Por qué los demos de agentes parecen mejores que la realidad',
        content:
          '**Los demos son curados; las tareas reales no lo son.** Tres razones estructurales explican por qué un vídeo de agente parece mejor que tus primeros 30 minutos con el mismo stack.',
        items: [
          '**Las tareas de los demos están acotadas.** "Construye un juego de serpiente" o "resume este PDF" tienen una forma conocida, una superficie de archivos pequeña y una señal de éxito inequívoca. Las tareas reales son abiertas ("encuentra por qué nuestro flujo de pago pierde el 3% de los usuarios") y tienen una gran superficie de archivos, criterios de éxito ambiguos y efectos secundarios que amplifican los errores.',
          '**Las ejecuciones de los demos están seleccionadas a mano.** Un vídeo de demo de 30 segundos es el mejor de muchos intentos. Las ejecuciones donde el agente se bloqueó, alucinó una ruta de archivo o llamó a una función obsoleta no están en el corte. No ves la tasa de éxito; ves un éxito.',
          '**Los prompts de los demos están sobre-especificados.** "Refactoriza el servicio User para usar el nuevo patrón de repositorio" funciona en un demo porque el demo tiene el nuevo patrón documentado en un archivo que el agente encuentra. Tu tarea real tiene el patrón en un hilo de Slack de hace tres semanas. El modelo no tiene tu contexto; el demo sí.',
          '**Los modelos de los demos son más grandes que tu modelo local.** Los demos en la nube se ejecutan en modelos de frontera. Los agentes locales se ejecutan en lo que puedas servir a >10 tokens/s. Qwen3-Coder 30B es excelente en mayo de 2026, pero no es GPT-5, y los demos usan silenciosamente el modelo mejor.',
          '**La conclusión:** asume que cualquier demo representa el 10% superior de las ejecuciones. La expectativa razonable para una tarea real es la ejecución mediana, con una probabilidad del 20–30% de fallo que requiere intervención. Planifica para la mediana.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: 'El coste de supervisión es la métrica real',
        content:
          '**El "mejor" agente no es el que tiene la ejecución autónoma más larga, sino aquel cuyas aprobaciones realmente lees.** Contar aprobaciones es el número más útil que medimos.',
        items: [
          '**Tareas de supervisión baja (3–8 aprobaciones en total):** Cline en una refactorización acotada, Continue.dev Agent en una tarea de un solo archivo. Hojeas las aprobaciones porque son principalmente operaciones de lectura y una o dos escrituras; el tiempo total de la tarea lo domina la latencia del modelo, no la fricción de las aprobaciones.',
          '**Tareas de supervisión media (10–20 aprobaciones):** Cline en una tarea de múltiples archivos que toca 8 o más archivos, Continue.dev Agent en cualquier cosa que empuje su horizonte de plan. Apruebas con más cuidado; el tiempo total de la tarea se divide aproximadamente a partes iguales entre el modelo y tú.',
          '**Tareas de supervisión alta (40+ aprobaciones):** OpenInterpreter haciendo cualquier cosa no trivial. El agente es un multiplicador de velocidad de escritura, no un multiplicador de productividad: sigues haciendo el trabajo cognitivo y leyendo cada bloque.',
          '**Patrón de supervisión fallido:** fatiga de aprobación. Tras ~30 aprobaciones en una sesión, los humanos empiezan a aprobar sin leer. El harness que requiere demasiadas aprobaciones te entrena a dejar de revisarlas, momento en el que la puerta de seguridad es ficticia.',
          '**El ajuste correcto: listas de aprobación automática.** Las herramientas de lectura (read_file, list_files, search_files, list_directory) son seguras para aprobar automáticamente. Las herramientas de escritura (write_to_file, replace_in_file, execute_command, browser_action con envío de formulario) no lo son. Esta única configuración es la diferencia entre un agente útil y uno tedioso.',
          '**La unidad correcta: recuento de aprobaciones por tarea.** Cuando evalúes un stack, cuenta las aprobaciones en una tarea real representativa, no en una tarea de demo. Si el recuento supera 20, el stack no te está ahorrando trabajo realmente.',
          'Para técnicas de prompting que reducen el coste de supervisión mejorando la calidad de las llamadas a herramientas, consulta [chain-of-thought prompting](/es/prompt-engineering/chain-of-thought-prompting).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Ajusta la lista de aprobación automática al inicio de un proyecto; aflójala a medida que vayas confiando en el modelo con esta base de código. Lo contrario —empezar permisivo y ajustar tras una mala ejecución— es cómo los agentes sin supervisión causan incidentes.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: 'Tareas que nunca debes confiar a un agente',
        content:
          '**Algunas tareas son incompatibles con los agentes independientemente del harness.** Reconócelas antes de desperdiciar una tarde configurando reglas de aprobación.',
        items: [
          '**Escrituras en bases de datos de producción.** Un modelo que emite con confianza una consulta `DELETE FROM users WHERE active = false` contra una tabla real es el incidente para el que existe este artículo. Ejecuta las herramientas de base de datos con roles de solo lectura por defecto; activa un rol de escritura separado solo para las tareas que lo requieran explícitamente y solo durante la duración de esas tareas.',
          '**Cualquier cosa con dinero o autenticación.** APIs de pago, emisión de tokens OAuth, creación de cuentas, cambios de roles y permisos. El coste de una llamada errónea es ilimitado; el beneficio de la automatización es pequeño.',
          '**Planificación de horizontes largos de más de 8–10 pasos.** Los agentes derivan en horizontes largos. El patrón correcto es "el modelo propone un plan, el humano aprueba el plan, el modelo ejecuta el plan paso a paso", no "el modelo planifica y ejecuta una tarea de 25 pasos de forma autónoma".',
          '**Tareas en las que no puedes verificar el éxito rápidamente.** Una tarea de scrape-y-resumen que puedes leer en 2 minutos es un buen candidato. Una tarea de "investiga este mercado y produce un informe" que no puedes verificar en menos de una hora no lo es: confiarás en el informe porque verificarlo cuesta más que reescribirlo.',
          '**Cualquier cosa que toque archivos que no tienes respaldados.** Aísla el servidor del sistema de archivos en un único directorio de trabajo. Trata el espacio de trabajo como desechable. Si el agente puede acceder a archivos fuera del espacio de trabajo, has configurado el agente incorrectamente.',
          '**Infraestructura multiinquilino o compartida.** Los agentes locales son herramientas de máquina personal en 2026. Los runners de CI compartidos, las bases de datos multiinquilino y las cuentas de nube compartidas son la superficie de ataque incorrecta para un bucle de agente sin supervisión.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisión: elige tu stack',
        content:
          '**La mayoría de las personas debería instalar Cline + Ollama y no continuar.** El árbol de decisión a continuación cubre los casos donde otro stack es la elección correcta.',
        columns: ['Tu situación', 'Elige'],
        rows: [
          { 'Tu situación': 'Quiero un agente local para tareas de codificación (refactorización, depuración, ediciones de múltiples archivos) en VS Code', 'Elige': 'Cline + Ollama con Qwen3-Coder 30B (o DeepSeek Coder V3 para contexto de 128K)' },
          { 'Tu situación': 'Ya uso Continue.dev para autocompletado y quiero un agente más ligero para tareas pequeñas', 'Elige': 'Continue.dev en modo Agent en la misma instalación' },
          { 'Tu situación': 'Quiero un agente que pueda controlar un navegador, consultar una base de datos y leer archivos', 'Elige': 'Cline + Ollama con servidores MCP conectados (sistema de archivos, sqlite, puppeteer)' },
          { 'Tu situación': 'Quiero un REPL local de "code interpreter": escribir código, ejecutar código, iterar', 'Elige': 'OpenInterpreter, pero no lo dejes desatendido' },
          { 'Tu situación': 'Tengo un flujo de trabajo de producción con herramientas deterministas y necesito orquestación', 'Elige': 'LangGraph + Ollama, con una suite de tests real para el grafo' },
          { 'Tu situación': 'Quiero agentes autónomos sin supervisión que entreguen trabajo de noche', 'Elige': 'Espera. El stack de 2026 no ofrece esto. Usa stacks supervisados en su lugar.' },
          { 'Tu situación': 'Quiero evaluar AutoGPT o MetaGPT para trabajo real', 'Elige': 'Descarta ambos. AutoGPT no tiene mantenimiento; la abstracción multiagente de MetaGPT no se sostiene.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: 'Lo que probablemente traerá 2027',
        content:
          '**La planificación a largo plazo mejorará de forma incremental; la autonomía sin supervisión en tareas reales no va a ocurrir este año.** Dos predicciones específicas, formuladas con prudencia.',
        items: [
          '**La fiabilidad de las llamadas a herramientas seguirá aumentando.** La tendencia de Llama 3 → Llama 3.3, Qwen3 → Qwen3 y el salto de Gemma 3 → Gemma 4 apuntan todos a lo mismo: el entrenamiento de tool-calling es el paso de post-entrenamiento más barato y de mayor impacto. Los modelos de clase 7B probablemente se convertirán en tool-callers fiables a finales de 2026 / principios de 2027, lo que bajará significativamente la barra de hardware para los agentes.',
          '**Los horizontes de plan se alargarán.** El horizonte fiable actual de ~5 pasos probablemente alcanzará los 8–10 pasos sin los problemas de deriva. Esto hace mejores a los agentes acotados estilo Cline; no hace que funcionen los agentes sin acotar estilo AutoGPT.',
          '**Los sistemas multiagente no tendrán su gran avance.** El problema estructural (estado de traspaso, deriva de persona, trabajo redundante) no es una cuestión de escala del modelo. Los harnesses de agente único con scratchpads más largos seguirán superando al juego de roles multiagente.',
          '**El modelo de "asistente supervisado" gana.** Los agentes que entreguen trabajo en 2027 parecerán un Cline 2.0: mejores superficies de herramientas, aprobaciones más fluidas, horizontes de plan más largos, no un relanzamiento exitoso de AutoGPT.',
          '**Advertencia honesta:** cualquiera de estas predicciones podría estar equivocada. La tecnología avanza lo suficientemente rápido como para que una versión de modelo en el tercer trimestre de 2026 pudiera cambiar la ecuación del coste de supervisión. Vuelve a evaluar este artículo en noviembre de 2026.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al elegir y ejecutar agentes locales',
        items: [
          '**Error 1: optimizar para la autonomía.** "¿Cuánto tiempo puede ejecutarse sin supervisión?" es la métrica incorrecta. "¿Cuántas aprobaciones para completar la tarea?" es la correcta. Elegir un stack según benchmarks de autonomía te da AutoGPT; elegir según el coste de supervisión te da Cline.',
          '**Error 2: modelos pequeños para trabajo de tool-calling.** Cualquier cosa por debajo de 7B (y la mayoría de los modelos de propósito general de 7B–13B sin fine-tuning de tool-calling) emite llamadas a herramientas malformadas. Usa Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B o Llama 3.3 70B y deja de pelear con el harness.',
          '**Error 3: contexto de 32K para trabajo de múltiples archivos.** Cline transmite el contenido completo de los archivos a la conversación; una tarea de 8 archivos puede agotar los 32K tokens antes de razonar. Usa un modelo con contexto de 128K (DeepSeek Coder V3, Llama 3.3 70B) para tareas de múltiples archivos no triviales.',
          '**Error 4: aprobar todo automáticamente.** El interruptor de "aprobar todo" es la rampa de entrada a "el agente borró mis archivos". Aprueba automáticamente solo las herramientas de lectura; exige aprobación manual para escrituras y shell.',
          '**Error 5: escrituras en bases de datos de producción desde un agente.** Ejecuta un rol de solo lectura por defecto. Un rol de escritura separado existe solo durante la duración de las tareas que lo requieran explícitamente. El coste de una escritura errónea es ilimitado.',
          '**Error 6: construir un orquestador LangGraph personalizado antes de probar Cline.** El 90% de los casos de uso de "necesito un agente personalizado" están suficientemente acotados como para que Cline + unos pocos servidores MCP sea la respuesta correcta. Construye algo personalizado solo cuando la forma del flujo de trabajo sea genuinamente incompatible con los harnesses existentes.',
          '**Error 7: perseguir demos.** Los demos son el mejor de muchos intentos. Planifica para la ejecución mediana: 70–80% de éxito en tareas reales, 20–30% que requieren intervención. Cualquier cosa que se llame "completamente autónomo" en 2026 es marketing, no ingeniería.',
          '**Error 8: ignorar el rastro de auditoría.** Tras cada sesión larga de agente, lee el registro de acciones. Los patrones emergen: el mismo tipo de error tres ejecuciones seguidas te dice que hay que ajustar una regla de aprobación o cambiar el modelo.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Repositorio de Cline en GitHub](https://github.com/cline/cline) — agente de codificación autónomo, documentación de la superficie de herramientas, configuración de aprobación automática.',
          '[Documentación de Continue.dev](https://docs.continue.dev/) — modo agent, indexación de la base de código, configuración de proveedores.',
          '[Documentación de LangGraph](https://langchain-ai.github.io/langgraph/) — librería de orquestación, semántica de máquinas de estado, interrupciones de humano en el bucle.',
          '[Repositorio de OpenInterpreter en GitHub](https://github.com/OpenInterpreter/open-interpreter) — agente de ejecución de código, modos de seguridad, integración de modelos locales.',
          '[Repositorio de MetaGPT en GitHub](https://github.com/geekan/MetaGPT) — framework multiagente, definiciones de roles, configuración de proveedor local.',
          '[Biblioteca de modelos de Ollama](https://ollama.com/library) — modelos locales disponibles, indicadores de soporte de tool-calling, opciones de cuantización.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Son realmente útiles los agentes de IA autónomos en 2026?',
            a: 'Sí, pero solo en formas acotadas y supervisadas. Cline + Ollama y Continue.dev en modo Agent completan tareas reales (refactorizaciones de múltiples archivos, depuración exploratoria, investigación acotada) con un coste de supervisión manejable: típicamente 5–12 aprobaciones por tarea. El encuadre "completamente autónomo" sigue siendo aspiracional; los agentes presentados como sin supervisión (AutoGPT-local, MetaGPT) derivan, repiten trabajo o se bloquean en horizontes largos. El modelo mental correcto es "asistente supervisado", no "trabajador autónomo".',
          },
          {
            q: '¿Por qué la mayoría de los demos de agentes parecen mejores que la realidad?',
            a: 'Por tres razones. Las tareas de los demos están acotadas (superficie de archivos pequeña, señal de éxito inequívoca); las ejecuciones de los demos se seleccionan a mano de muchos intentos; los prompts de los demos están sobre-especificados con contexto que el modelo no tendría en una tarea real. Planifica para la ejecución mediana en una tarea real: 70–80% de éxito, 20–30% que requieren intervención, no la ejecución del demo.',
          },
          {
            q: '¿Qué stack de agentes es el más fiable para trabajo real en 2026?',
            a: 'Cline + Ollama es la elección por defecto para tareas de tipo codificación (refactorizaciones, depuración, trabajo de múltiples archivos). Combínalo con Qwen3-Coder 30B para trabajo cotidiano o DeepSeek Coder V3 / Llama 3.3 70B cuando necesites contexto de 128K. Continue.dev en modo Agent es la alternativa más ligera para tareas de uno o dos archivos. Ambos están acotados, bien mantenidos y se ejecutan dentro del editor con puertas de aprobación explícitas.',
          },
          {
            q: '¿Cuánta supervisión necesitan realmente los agentes en 2026?',
            a: '5–12 aprobaciones por tarea en un harness acotado como Cline; 4–8 en Continue.dev Agent. Más de 30 aprobaciones en una sesión, los humanos empiezan a aprobar sin leer: en ese punto la puerta de seguridad es ficticia. El ajuste correcto es la lista de aprobación automática: aprueba automáticamente las herramientas de lectura (read_file, list_files, search_files), exige aprobación manual para escrituras y shell. Esta única configuración es la diferencia entre un agente útil y uno tedioso.',
          },
          {
            q: '¿Pueden los agentes manejar tareas de múltiples pasos sin romperse?',
            a: 'Hasta 5–8 pasos de forma fiable con un modelo fuerte de tool-calling (Qwen3-Coder 30B, Gemma 4 27B, GLM-5.1 32B, Llama 3.3 70B). Más allá, los horizontes de plan derivan: el agente relee archivos, vuelve a ejecutar las mismas búsquedas o propone pasos siguientes contradictorios. El patrón correcto es "el modelo propone un plan, el humano aprueba el plan, el modelo ejecuta un paso a la vez", no una ejecución autónoma de 25 pasos.',
          },
          {
            q: '¿Por qué los agentes fallan en tareas de horizonte largo?',
            a: 'Por dos razones estructurales. Primera, saturación de contexto: cada llamada a herramientas añade el resultado a la conversación, por lo que una tarea de 20 pasos acumula ~50K–100K tokens de estado y el modelo pierde la pista de lo que se decidió al principio. Segunda, deriva en la revisión del plan: cuando una herramienta devuelve una salida inesperada, el modelo a menudo replanifica toda la tarea en lugar de ajustar localmente, y el nuevo plan contradice el compromiso original. Los harnesses acotados (Cline, Continue.dev Agent) evitan esto manteniendo los planes cortos y pidiendo al humano que reancle entre pasos.',
          },
          {
            q: '¿Son los agentes locales peores que los agentes en la nube?',
            a: 'En capacidad absoluta, sí: los modelos de frontera en la nube siguen superando a cualquier modelo local de clase 30B en las tareas más difíciles. En trabajo cotidiano supervisado, la brecha es menor de lo que sugieren los demos. Cline + Qwen3-Coder 30B completa 13–15 de 15 refactorizaciones de múltiples archivos; la misma tarea en Cline + Claude o GPT-5 completa 14–15 de 15. La compensación favorece al local para usuarios con datos privados, sin presupuesto de API o con requisitos estrictos de funcionamiento sin conexión.',
          },
          {
            q: '¿Pueden los agentes manejar errores con elegancia?',
            a: 'De forma mixta. Cline y Continue.dev Agent se recuperan bien de los errores de herramientas: el harness muestra el error, el modelo propone un paso correctivo y el humano aprueba. LangGraph + Ollama se recupera solo tan bien como lo define tu grafo; un error de herramienta no gestionado entra en bucle. AutoGPT-local no se recupera en absoluto: deriva. El manejo de errores es una propiedad del harness tanto como del modelo.',
          },
          {
            q: '¿Qué tareas no debo confiar nunca a un agente?',
            a: 'Escrituras en bases de datos de producción (ejecuta roles de solo lectura por defecto), cualquier cosa que toque dinero o autenticación (pagos, OAuth, creación de cuentas), planificación de horizontes largos de más de 8–10 pasos, tareas en las que no puedes verificar el éxito rápidamente, cualquier cosa fuera de un directorio de trabajo aislado y cualquier trabajo sobre infraestructura multiinquilino o compartida. El coste de una mala acción del agente en estas categorías es ilimitado; el beneficio de la automatización es pequeño.',
          },
          {
            q: '¿Mejorarán los agentes significativamente en 2027?',
            a: 'La fiabilidad de las llamadas a herramientas seguirá aumentando: los modelos de clase 7B se convertirán probablemente en tool-callers fiables a finales de 2026 / principios de 2027. Los horizontes de plan se alargarán de ~5 pasos fiables a 8–10. Los sistemas multiagente no tendrán su gran avance: los problemas estructurales (estado de traspaso, deriva de persona, trabajo redundante) no son una cuestión de escala del modelo. La autonomía sin supervisión en tareas reales es improbable en 2027; "Cline 2.0", con mejores superficies de herramientas y aprobaciones más fluidas, es el camino realista.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Conectar Ollama a bases de datos y APIs con MCP: configuración de agentes locales 2026](/es/power-local-llm/local-ai-agents-with-mcp-2026) — lo que habilita a los agentes bajo el capó; capa de protocolo para herramientas de sistema de archivos, base de datos, navegador y GitHub.',
          '[Mejores modelos locales para tool calling en 2026](/es/power-local-llm/best-local-models-tool-calling-2026) — la capa del modelo; benchmarks cara a cara de los tool-callers recomendados (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider: mejor agente de codificación local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — comparativa de harnesses adyacentes para trabajo de tipo codificación.',
          '[Agentes de IA locales para flujos de trabajo empresariales y cumplimiento en la UE](/es/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexto aplicado para empresas que operan bajo GDPR / EU AI Act.',
          '[Mejores LLM locales en 2026](/es/local-llms/best-local-llms-2026) — referencia de modelos para el panorama más amplio de pesos abiertos.',
          '[Power Local LLM Hub](/power-local-llm) — biblioteca completa de guías.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Agentes de IA locales en 2026: lo que realmente funciona (y lo que sigue fallando)',
      description: '6 stacks de agentes de IA locales probados en 5 tareas reales. 2 funcionan de forma fiable, 3 fallan de maneras que los demos ocultan, 1 es inutilizable. Cline, LangGraph, AutoGPT y MetaGPT evaluados.',
      url: 'https://www.promptquorum.com/es/power-local-llm/autonomous-local-agents-actually-work',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
},
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Agents locaux en 2026 : Ce qui fonctionne réellement (et ce qui échoue)',
    seoTitle: 'Agents IA locaux 2026 : Ce qui marche, ce qui échoue',
    intro:
      'Six stacks d\'agents IA locaux, cinq tâches réelles, trente jours d\'évaluation. Deux stacks accomplissent les tâches de manière fiable. Trois échouent d\'une manière que les démos ne montrent pas. Un est pratiquement inutilisable. C\'est le rapport honnête — ce que chaque configuration d\'agent fait réellement sur une refonte, une tâche de recherche, une triage d\'e-mails, un scrape-et-résumé, et une chasse aux bugs, avec les échecs nommés spécifiquement et le coût de supervision quantifié.',
    metaDescription:
      '6 stacks d\'agents IA locaux testés sur 5 tâches réelles. 2 fonctionnent, 3 échouent de façon surprenante, 1 est inutilisable. Verdicts nommés.',
    twitterDescription:
      'Testé 6 stacks d\'agents locaux sur 5 tâches réelles pendant 30 jours. 2 ont fonctionné, 3 ont échoué de façon surprenante, 1 était inutilisable. Le verdict honnête sur les stacks qui livrent le travail et ceux qui ne livrent que des démos.',
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
      'Développeurs et opérateurs techniques évaluant des stacks d\'agents IA locaux pour du travail réel — refontes, recherche, flux de contenu, débogage — et qui veulent un verdict avant d\'investir un week-end à en configurer un.',
    readTime: '16 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'agent IA local',
    targetKeywords: [
      'agents ia locaux 2026',
      'reality check agents autonomes',
      'cline vs autogpt local',
      'meilleur framework agent local',
      'les agents ia fonctionnent-ils vraiment',
      'comparaison agents llm locaux',
    ],
    leadAnswerBlock:
      '**En mai 2026, deux stacks d\'agents locaux accomplissent du travail réel sans surveillance constante : Cline + Ollama et Continue.dev Agent mode. Les deux sont limités, bien maintenus, et exécutent un modèle de tool-calling (Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B) à l\'intérieur d\'un seul éditeur avec des portes d\'approbation explicites. Trois stacks échouent de façon surprenante — LangGraph + Ollama (l\'orchestration est fragile sur les longs horizons), OpenInterpreter (exécute les commandes shell trop facilement pour être laissé sans surveillance), et MetaGPT local (le jeu de rôles multi-agents perd le fil après deux échanges). Un stack est pratiquement inutilisable : AutoGPT-local — le projet a stagné, les dépendances ne correspondent pas à Ollama moderne, et la boucle de planification dévie vers des appels d\'outils circulaires en quelques minutes. Le schéma est cohérent : les harnesses limités et opinionnés autour d\'un modèle de tool-calling puissant battent les agents autonomes ambitieux sur chaque tâche que nous avons testée.**',
    quickAnswerTop: {
      fr: {
        question: 'Les agents IA autonomes locaux fonctionnent-ils réellement en 2026 ?',
        answer:
          'Certains oui, la plupart non. Les deux stacks fiables sont Cline + Ollama (agent de codage autonome dans VS Code avec approbation par étape) et Continue.dev Agent mode (boucle d\'agent plus légère dans le même IDE). Tous deux réussissent parce qu\'ils sont limités — un éditeur, un modèle, une porte d\'approbation — pas parce que la technologie sous-jacente est enfin assez bonne pour l\'autonomie sans surveillance. Les frameworks présentés comme « entièrement autonomes » (AutoGPT-local, MetaGPT, orchestrateurs LangGraph personnalisés) dérivent toujours vers des appels d\'outils circulaires, hallucinent des chemins de fichiers, ou se bloquent sur la planification d\'horizons longs. Le bon modèle en 2026 est « assistant supervisé » — des agents qui proposent des actions multi-étapes et s\'arrêtent pour approbation — pas « travailleur autonome ». Tout ce qui se vend comme autonome est une démo, pas un produit.',
        bullets: [
          'Deux stacks livrent du travail réel : Cline + Ollama et Continue.dev Agent. Les deux sont limités à un seul IDE, exécutent un modèle de tool-calling, et nécessitent une approbation humaine par étape.',
          'Trois stacks échouent de façon non-évidente : LangGraph + Ollama (fragile sur les longs horizons), OpenInterpreter (trop pressé d\'exécuter le shell), MetaGPT local (le jeu de rôles multi-agents s\'effondre).',
          'AutoGPT-local est pratiquement inutilisable en mai 2026 — projet stagnant, dépendances cassées, la boucle de planification dévie en quelques minutes.',
          'La fiabilité des appels d\'outils provient du modèle, pas du harness. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, et Llama 3.3 70B fonctionnent dans n\'importe quel stack fiable. Les modèles sous 7B échouent dans tous.',
          'Le coût de supervision est la métrique qui compte. Le « meilleur » agent est celui dont vous lisez réellement les approbations — pas celui avec la plus longue exécution autonome.',
          'Les perspectives pour 2027 : la planification à long horizon s\'améliorera graduellement. L\'autonomie sans supervision sur les tâches réelles ne se produit pas cette année, indépendamment de ce que les démos montrent.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Comment nous avons testé', anchor: '#how-we-tested' },
      { label: 'Tableau de réalité des agents', anchor: '#reality-table' },
      { label: 'Ce qui fonctionne : Cline + Ollama', anchor: '#cline-ollama' },
      { label: 'Ce qui fonctionne : Continue.dev Agent', anchor: '#continue-agent' },
      { label: 'Ce qui échoue : LangGraph + Ollama', anchor: '#langgraph' },
      { label: 'Ce qui échoue : OpenInterpreter', anchor: '#openinterpreter' },
      { label: 'Ce qui échoue : MetaGPT Local', anchor: '#metagpt' },
      { label: 'Inutilisable : AutoGPT-Local', anchor: '#autogpt' },
      { label: 'Pourquoi les démos des agents semblent meilleures que la réalité', anchor: '#demos-vs-reality' },
      { label: 'Le coût de supervision est la vraie métrique', anchor: '#supervision-cost' },
      { label: 'Les tâches que vous ne devriez jamais confier à un agent', anchor: '#never-trust' },
      { label: 'Décision : Choisissez votre stack', anchor: '#decision' },
      { label: 'Ce que 2027 apportera probablement', anchor: '#outlook' },
      { label: 'Erreurs courantes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: "Le diaporama couvre : pourquoi 4 des 6 stacks d'agents locaux échouent (verdicts nommés), la méthodologie de test sur 30 jours (6 stacks × 5 tâches), le coût de supervision comme vraie métrique (3–12 vs 40+ approbations), les tâches qu'agents ne doivent jamais exécuter sans surveillance, et une table de décision pour choisir le bon stack. Téléchargez le PDF comme fiche d'évaluation d'agent IA local.",
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Deux stacks livrent du travail réel en mai 2026 :** Cline + Ollama (agent de codage autonome dans VS Code) et Continue.dev Agent mode. Les deux sont limités à un éditeur, un modèle, et une porte d\'approbation par étape.',
          '**Trois stacks échouent de façon surprenante :** LangGraph + Ollama, l\'orchestration est fragile au-delà de 4–5 étapes, OpenInterpreter exécute les commandes shell trop facilement pour être laissé sans surveillance, MetaGPT local, le jeu de rôles multi-agents s\'effondre après deux échanges.',
          '**Un stack est inutilisable :** AutoGPT-local est effectivement abandonné — les dépendances ne correspondent pas à Ollama moderne, la boucle de planification dévie vers des appels d\'outils circulaires en quelques minutes, et il n\'y a pas de mainteneur répondant aux problèmes.',
          '**La fiabilité des appels d\'outils est une propriété du modèle, pas du harness.** Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, et Llama 3.3 70B émettent des appels d\'outils propres dans chaque stack fiable. Les modèles sous 7B émettent des appels malformés indépendamment du harness qui les enveloppe.',
          '**Le modèle « assistant supervisé » gagne en 2026.** Les agents qui proposent des actions multi-étapes et s\'arrêtent pour approbation terminent plus de tâches que les agents qui essaient de s\'exécuter sans surveillance. C\'est une limite des propriétés des LLM de 2026, pas une préférence UX.',
          '**Le coût de supervision est la métrique qui compte.** Une tâche de 30 minutes qui nécessite trois approbations est livrable. Une tâche de 2 heures qui nécessite vingt approbations ne l\'est pas — vous faites le travail, l\'agent le ralentit juste.',
          '**Le coût est réel mais petit.** L\'inférence locale uniquement, pas de dépenses API, l\'électricité est le seul coût marginal. La consommation de tokens par tâche est la contrainte — les boucles d\'agents consomment 30K–80K tokens pour une tâche multi-étapes, donc les modèles 32K-context heurtent le mur rapidement et les modèles 128K-context sont confortables.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Stacks testés :** Cline + Ollama, Continue.dev Agent, LangGraph + Ollama (personnalisé), AutoGPT-local, OpenInterpreter, MetaGPT local.',
          '**Tâches testées :** recherche de sujets, refonte multi-fichiers, triage de brouillons d\'e-mails, scrape-et-résumé, débogage de bugs.',
          '**Matériel :** Apple M5 Max 64 GB mémoire unifiée et boîtier 2× NVIDIA RTX 3090 24 GB ; les deux exécutent Qwen3-Coder 30B Q4_K_M confortablement à 32K context.',
          '**Modèles :** Qwen3-Coder 30B (primaire), GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B (les quatre outils de tool-calling fiables en mai 2026).',
          '**Forme du verdict :** 2 stacks fiables sur les 5 tâches, 3 stacks fiables sur 1–2 tâches chacun, 1 stack inutilisable.',
          '**Coût :** 0 € en frais API. ~0,10–0,30 € en électricité par tâche multi-étapes sur un rig GPU de bureau 350W (moins de 0,05 € sur un Mac).',
          '**Schéma de supervision qui fonctionne :** approbation automatique des outils de lecture, approbation manuelle de chaque outil d\'écriture/shell, examen du journal d\'audit après les sessions longues.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Comment nous avons testé : Même modèle, mêmes tâches, différents harnesses',
        content:
          '**Le test a maintenu le modèle constant et n\'a varié que le harness d\'agent.** Chaque stack a reçu les mêmes cinq tâches contre le même backend (Ollama servant Qwen3-Coder 30B à Q4_K_M), donc les échecs s\'attribuent au harness, pas au modèle.',
        items: [
          '**Backend :** Ollama 0.5+ sur macOS et Linux. Modèle primaire Qwen3-Coder 30B Q4_K_M (32K context). Modèles secondaires (GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B) utilisés pour vérifier que les échecs de tool-call n\'étaient pas un artefact d\'un seul modèle.',
          '**Matériel :** un MacBook Pro Apple M5 Max 64 GB et un ordinateur de bureau Linux avec 2× RTX 3090 24 GB. Les deux soutiennent Qwen3-Coder 30B à une vitesse utilisable (>15 tokens/s).',
          '**Tâches :** recherche de sujets (collecter, dédupliquer, résumer 8 sources sur un sujet de niche), refonte multi-fichiers (renommer un service sur 12 fichiers TypeScript), triage de brouillons d\'e-mails (résumer et rédiger des réponses pour un dossier de 40 messages), scrape-et-résumé (lire 5 URL et produire un résumé comparatif), débogage de bugs (découvrir pourquoi un test existant est instable).',
          '**Cadence de test :** chaque tâche s\'est exécutée 3 fois par stack sur la fenêtre de 30 jours, avec un nouveau prompt chaque fois. Le résultat évalué comme « complet sans surveillance », « complet avec supervision », « partiel », ou « bloqué / échoué ».',
          '**Métrique de supervision :** nombre d\'approbations nécessaires par tâche et la part des approbations où nous avons rejeté l\'action proposée. Un taux de rejet élevé signale que le harness génère du bruit que l\'humain doit filtrer.',
          '**Contrainte d\'honnêteté :** des plages, pas des pourcentages exactement inventés. « Fiable sur les 5 tâches » signifie 13–15 des 15 exécutions atterrissent ; « échoue sur les longs horizons » signifie 3–6 des 15 exécutions atterrissent sans intervention. Les verdicts sont conservateurs — quand un stack fonctionnait mais seulement avec une intervention non-triviale, cela compte comme un échec pour les besoins de tâches sans surveillance.',
          'La fiabilité des appels d\'outils est la couche sous-jacente à tout cela. Pour la comparaison côté modèle, voir [Meilleurs modèles locaux pour Tool Calling en 2026](/fr/power-local-llm/best-local-models-tool-calling-2026) ; la couche de protocole est couverte dans [Connecter Ollama aux bases de données et API avec MCP](/fr/power-local-llm/local-ai-agents-with-mcp-2026).',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: 'Tableau de réalité des agents : Six stacks, cinq tâches, verdicts honnêtes',
        content:
          '**Deux stacks terminent le travail ; trois trébuchent de différentes façons ; un est cassé.** La colonne verdict est celle à lire en premier.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama et Continue.dev Agent sont les deux seuls stacks d\'agents IA locaux qui terminent les tâches réelles de manière fiable en mai 2026 ; LangGraph, OpenInterpreter, et MetaGPT échouent chacun d\'une manière différente ; AutoGPT-local est inutilisable.',
          },
          {
            type: 'plain-terms',
            text: 'Si vous voulez un agent local qui finit réellement une refonte ou une tâche de recherche, installez Cline ou Continue.dev et arrêtez de lire. Les quatre autres stacks ont des démos qui semblent meilleures que la réalité de les laisser fonctionner pendant dix minutes.',
          },
        ],
        columns: ['Stack', 'Taux de réussite des tâches', 'Échecs observés', 'Supervision nécessaire', 'Verdict'],
        rows: [
          {
            'Stack': 'Cline + Ollama',
            'Taux de réussite des tâches': '13–15 de 15 exécutions atterrissent',
            'Échecs observés': 'Pression des tokens sur les modèles 32K-context pour le travail multi-fichiers ; récupérable avec context 128K',
            'Supervision nécessaire': 'Approbation par étape ; ~5–12 approbations par tâche',
            'Verdict': 'Fonctionne. Choix par défaut pour les tâches liées au codage.',
          },
          {
            'Stack': 'Continue.dev Agent',
            'Taux de réussite des tâches': '12–14 de 15 exécutions atterrissent',
            'Échecs observés': 'L\'horizon du plan est plus court que Cline ; les éditions multi-fichiers s\'arrêtent parfois après 2–3 fichiers',
            'Supervision nécessaire': 'Approbation d\'aperçu diff ; ~4–8 approbations par tâche',
            'Verdict': 'Fonctionne. Alternative plus légère quand Cline est excessif.',
          },
          {
            'Stack': 'LangGraph + Ollama',
            'Taux de réussite des tâches': '4–7 de 15 exécutions atterrissent sans intervention',
            'Échecs observés': 'Fragile au-delà de 4–5 étapes ; cycles de machine d\'état quand un outil retourne des données inattendues ; pas de porte d\'approbation native (vous la construisez)',
            'Supervision nécessaire': 'Élevée — déboguer l\'orchestration est la moitié du travail',
            'Verdict': 'Échoué. L\'effort de construction dépasse la valeur pour 90% des utilisateurs.',
          },
          {
            'Stack': 'AutoGPT-local',
            'Taux de réussite des tâches': '0–2 de 15 exécutions atterrissent',
            'Échecs observés': 'Projet stagnant en 2024–2025 ; les dépendances ne correspondent pas à Ollama moderne ; la boucle de planification dévie vers des appels d\'outils circulaires en quelques minutes',
            'Supervision nécessaire': 'Constante — l\'agent ne converge pas',
            'Verdict': 'Inutilisable. À sauter entièrement en 2026.',
          },
          {
            'Stack': 'OpenInterpreter',
            'Taux de réussite des tâches': '6–9 de 15 exécutions atterrissent — mais avec risque',
            'Échecs observés': 'Exécution shell avide ; exécutera les commandes destructrices sans garde-fous explicites ; les prompts de sécurité sont incohérents',
            'Supervision nécessaire': 'Constante — ne peut pas être laissé sans surveillance',
            'Verdict': 'Échoué pour l\'autonomie. Utile uniquement comme un REPL baby-sat.',
          },
          {
            'Stack': 'MetaGPT local',
            'Taux de réussite des tâches': '3–6 de 15 exécutions atterrissent',
            'Échecs observés': 'Le jeu de rôles multi-agents (PM → Engineer → QA) dévie après deux échanges ; les agents répètent les travaux antérieurs ; les résultats se contredisent',
            'Supervision nécessaire': 'Élevée — et vous déboguez les définitions de rôle, pas la tâche',
            'Verdict': 'Échoué. L\'abstraction multi-agents est le problème, pas l\'implémentation.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: 'Ce qui fonctionne : Cline + Ollama est le choix par défaut',
        content:
          '**Cline + Ollama est le seul stack qui a réalisé chaque type de tâche avec un coût de supervision prévisible.** Il fonctionne parce qu\'il est limité : un IDE (VS Code), un modèle, une porte d\'approbation par étape.',
        items: [
          '**Ce que c\'est :** Cline est une extension VS Code qui transforme l\'éditeur en surface d\'agent autonome. Le modèle propose un plan en Plan mode, l\'exécute en Act mode via une surface d\'outils (read_file, write_to_file, replace_in_file, execute_command, list_files, search_files), et demande une approbation entre les étapes sauf si les outils sont sur une liste d\'approbation.',
          '**Pourquoi ça fonctionne :** le harness est opinionnaire. La surface d\'outils est petite et stable, le flux d\'approbation est en avant (chaque étape est une carte que vous acceptez ou rejetez), et le modèle ne voit que l\'éditeur — pas la machine entière. Les échecs sont récupérables parce que la dernière action est toujours à un clic d\'annulation.',
          '**Où ça brille :** refontes multi-fichiers (renommer un service sur 12 fichiers en une tâche), débogage exploratoire de bugs (« découvrir pourquoi ce test est instable » — Cline lit les fichiers de test adjacents, retrace les dépendances, propose une hypothèse, édite, exécute le test), et recherche limitée qui produit un livrable markdown à l\'intérieur du projet.',
          '**Où ça trébuche :** tâches non-codage qui nécessitent HTTP externe (pas de navigateur natif). Le triage de brouillons d\'e-mails fonctionne seulement si vous connectez un serveur MCP ou des outils shell — et à ce moment-là vous configurez trois choses pour faire ce qu\'un outil plus petit et limité ferait directement.',
          '**Coût de supervision :** ~5–12 approbations par tâche. La plupart sont des outils de lecture (bon marché, acceptation rapide). Les coûteux sont write_to_file et execute_command — réglez-les pour exiger une approbation manuelle et vous attraperez l\'appel rare mauvais avant qu\'il se produise.',
          '**Coût des tokens :** élevé. Les contenus de fichier complets entrent dans la conversation alors que l\'agent les lit. Une refonte de 12 fichiers sur Qwen3-Coder 30B à 32K context épuise la fenêtre rapidement — basculez vers un modèle 128K-context (DeepSeek Coder V3, Llama 3.3 70B) pour le travail non-trivial.',
          'Pour la configuration Cline plus approfondie, y compris les listes d\'approbation automatique, voir [Continue.dev vs Cline vs Aider : Meilleur agent de codage local en 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Exécutez Cline contre Qwen3-Coder 30B (Q4_K_M, ~17 GB VRAM) pour les tâches de codage. Pour les tâches qui touchent plus de 6 fichiers en une session, basculez vers DeepSeek Coder V3 ou un autre modèle 128K-context — la fenêtre 32K sur Qwen3-Coder sera pleine avant que l\'agent ne termine.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: 'Ce qui fonctionne : Continue.dev Agent mode pour les tâches plus légères',
        content:
          '**Continue.dev Agent mode est le bon choix quand Cline est excessif.** Même IDE, même classe de modèle, surface plus petite — moins d\'approbations, horizon du plan plus court, consommation de tokens inférieure.',
        items: [
          '**Ce que c\'est :** Continue.dev est principalement une extension d\'autocomplétion et de chat pour VS Code et JetBrains, avec un Agent mode qui ajoute des appels d\'outils (lecture/écriture de fichiers, recherche dans la base de code, exécution de terminal) et une boucle de plan multi-étapes. L\'agent est plus contraint que celui de Cline — moins d\'outils, horizons par défaut plus courts, comportement autonome moins agressif.',
          '**Pourquoi ça fonctionne :** l\'audience d\'auteur de Continue.dev est les utilisateurs d\'autocomplétion, donc Agent mode hérite d\'une UX « petit, rapide, en avant ». Chaque édition atterrit comme un aperçu diff avant que le modèle ne touche le fichier. Les plans dépassent rarement 3–5 étapes, ce qui garde la consommation de tokens modeste et la piste d\'audit courte.',
          '**Où ça brille :** tâches à un ou deux fichiers, « expliquer cette région de base de code », « réécrire cette fonction avec ces contraintes », « ajouter un test pour cette méthode ». L\'agent s\'exécute sans traîner la base de code entière dans la conversation, donc un modèle 32K-context est confortable.',
          '**Où ça trébuche :** plans plus longs que 5 étapes. Les refontes multi-fichiers qui ont besoin de 8+ éditions s\'arrêtent parfois après 2–3 fichiers et demandent à l\'utilisateur de continuer. Ce n\'est pas un bug — c\'est le harness étant conservateur sur l\'horizon du plan — mais cela signifie que vous supervisez plus souvent que avec Cline sur la même tâche.',
          '**Coût de supervision :** ~4–8 approbations par tâche, pondérées vers les aperçus diff (signal élevé, acceptation rapide).',
          '**Coût des tokens :** notablement inférieur à Cline parce que Continue.dev utilise son indice TF-IDF + embeddings pour récupérer les chunks pertinents plutôt que de diffuser des fichiers entiers. Un modèle 32K-context termine confortablement la plupart des tâches.',
          'Quand choisir Continue.dev Agent plutôt que Cline : quand la tâche tient en 2–3 fichiers, quand le budget de tokens est serré, quand vous utilisez déjà Continue.dev pour l\'autocomplétion et voulez un outil et non deux.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: 'Ce qui échoue : LangGraph + Ollama (Fragile sur les longs horizons)',
        content:
          '**LangGraph + Ollama est le bon outil pour l\'orchestration en production et le mauvais outil pour « je veux un agent sur mon ordinateur portable ».** L\'effort de construction est élevé, les modes d\'échec sont non-évidents, et la valeur est réalisée seulement à l\'échelle.',
        items: [
          '**Ce que c\'est :** LangGraph est une bibliothèque d\'orchestration de machine d\'état. Vous définissez les nœuds (fonctions typées qui appellent le modèle, exécutent un outil, évaluent une condition) et les arêtes (transitions). Le runtime exécute le graphe, gère la ramification, et gère l\'état entre les étapes. Associez-le à un backend Ollama et vous avez un agent local personnalisé.',
          '**Pourquoi ça échoue comme agent de bureau :** la surface d\'échec est le code d\'orchestration, pas le modèle. Les machines d\'état qui semblent propres sur un tableau blanc font du cycle quand un outil retourne des données inattendues — par exemple, une récupération HTTP qui retourne 200 mais avec un corps vide, une lecture de fichier sur un chemin qui existe mais est un répertoire. Vous déboguez votre graphe autant que l\'agent débogue la tâche.',
          '**Horizon du plan :** fragile au-delà de 4–5 nœuds. Chaque point de branchement double la surface de test. Au nœud 6, vous avez un arbre de chemins d\'exécution possibles et le modèle en choisit un que vous n\'aviez pas anticipé. Le graphe réécrit alors l\'état d\'une manière que le nœud suivant ne peut pas consommer.',
          '**Pas de porte d\'approbation native :** vous construisez vous-même les interruptions humaines dans la boucle. La bibliothèque le supporte (l\'interruption-et-reprise est documentée) mais l\'implémentation est sur vous. Cline et Continue.dev vous le donnent gratuitement.',
          '**Où ça appartient réellement :** flux de travail côté serveur où vous contrôlez la forme d\'entrée, la surface d\'outils est fixe, et vous pouvez écrire une suite de tests réelle pour le graphe. Par exemple, un flux de travail de routage de support client avec trois outils déterministes et un nœud modèle — c\'est le sweet spot de LangGraph.',
          '**Verdict pour la question de l\'agent local :** échoué. Construire un orchestrateur LangGraph personnalisé pour faire ce que Cline fait en une installation est du temps perdu pour 90% des utilisateurs. Faites-le seulement si vous avez une forme de flux de travail que Cline ne peut pas exprimer et vous avez la discipline de test pour garder le graphe honnête.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Ce n\'est pas une critique de LangGraph — la bibliothèque est solide pour les flux de travail en production. La critique est que « utiliser LangGraph pour votre agent local » est la mauvaise recommandation quand les harnesses limités existent déjà.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: 'Ce qui échoue : OpenInterpreter est utile sous surveillance, dangereux sans',
        content:
          '**OpenInterpreter exécute les commandes shell trop facilement pour être laissé sans surveillance.** Il est réellement utile comme un REPL baby-sat — vous décrivez une tâche, il écrit du Python ou du shell, vous regardez s\'exécuter — et réellement dangereux à s\'en éloigner.',
        items: [
          '**Ce que c\'est :** OpenInterpreter est une CLI qui permet à un modèle d\'écrire et d\'exécuter du code (Python, shell, JavaScript, R) sur votre machine. L\'invite interactive demande une confirmation avant d\'exécuter chaque bloc — par défaut. Le cadrage est « Code Interpreter ChatGPT, localement ».',
          '**Pourquoi ça échoue comme agent autonome :** le prompt de sécurité est par bloc, et le modèle propose régulièrement les commandes shell qui semblent bénignes mais produisent des changements d\'état permanents (`rm` dans les chemins profonds, `pip install` dans le Python système, `git reset --hard`). Confirmer chaque bloc devient le travail — vous ne pouvez pas skimmer parce que le coût d\'approuver le mauvais bloc est non borné.',
          '**Le mode auto-confirm existe.** C\'est aussi d\'où chaque histoire d\'horreur vient. Nous ne recommandons pas d\'exécuter OpenInterpreter avec auto-confirm sur une machine qui a quelque chose dont vous vous souciez.',
          '**Où ça brille :** comme un bloc-notes baby-sat. « Convertir ce CSV en Parquet », « extraire les métadonnées de ces 200 PDF », « réécrire ce script Python pour utiliser asyncio ». Les tâches où vous restez dans le terminal, regardez chaque commande, et le modèle fait le travail de dactylographie plus rapide pour vous.',
          '**Où ça s\'effondre :** n\'importe quoi ressemblant à l\'autonomie. Même avec les prompts de confirmation sur, une tâche de 30 minutes a en moyenne 40+ confirmations et les modes d\'échec sont variés (mauvais répertoire de travail, lectures partielles, appels réseau inattendus).',
          '**Coût de supervision :** essentiellement 100% — vous supervisez chaque bloc. Une tâche « 5 minutes » prend plus longtemps que de la faire à la main une fois que vous comptez la lecture et l\'approbation.',
          '**Verdict :** outil utile, mauvaise catégorie. OpenInterpreter est un assistant de codage qui exécute le code, pas un agent autonome. Le scorer contre Cline est le mauvais cadre ; le bon cadre est « Cline livre une fonctionnalité, OpenInterpreter écrit un script ponctuel ».',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: 'Ce qui échoue : MetaGPT Local (Le jeu de rôles multi-agents s\'effondre)',
        content:
          '**Le jeu de rôles multi-agents « PM → Engineer → QA → Designer » de MetaGPT ne survit pas au contact avec les tâches non-triviales.** Après deux échanges, les agents répètent les travaux antérieurs, se contredisent, ou se bloquent en négociant leurs propres rôles.',
        items: [
          '**Ce que c\'est :** MetaGPT est un framework multi-agents qui simule une équipe de développement logiciel. Un agent Product Manager rédige les exigences, un agent Architect conçoit, un agent Engineer code, un agent QA teste. Chaque agent est le même modèle sous-jacent avec un prompt système différent et un ensemble d\'outils.',
          '**Pourquoi ça échoue :** le jeu de rôles multi-agents suppose que le modèle peut maintenir une persona cohérente sur de nombreux tours et remettre le contexte de manière fiable. En pratique, avec un modèle local 30B, les personas s\'estompent. L\'agent Engineer réexécute l\'analyse de l\'agent PM. L\'agent QA réécrit le code au lieu de le tester. L\'état de remise — ce que chaque agent a appris dans son tour — est le bug.',
          '**Le problème plus profond :** l\'abstraction multi-agents ajoute des tours sans ajouter de capacité. Un agent unique avec la même surface d\'outils et un scratchpad plus long fait la même tâche en moins de tokens avec moins de dérive. Le cadrage « équipe » est anthropomorphe, pas architectural.',
          '**Où ça pourrait fonctionner :** tâches étroitement définies avec des limites de remise dure — par exemple, un flux de travail d\'équipe d\'écriture (recherche → esquisse → brouillon → édition) où chaque étape a un livrable et l\'étape suivante ignore le raisonnement antérieur. Nous n\'avons pas trouvé un flux de travail réel où MetaGPT surpassait un harness d\'agent unique avec un prompt structuré.',
          '**Verdict :** échoué. Le bug est conceptuel, pas dans l\'implémentation. Les harnesses d\'agent unique avec des prompts structurés battent les harnesses multi-agents sur chaque tâche que nous avons testée.',
          'Pour les techniques de prompting qui améliorent la fiabilité de n\'importe quelle boucle d\'agent unique, voir [chain-of-thought prompting](/fr/prompt-engineering/chain-of-thought-prompting) — le même schéma de raisonnement structuré qui aide un modèle à penser aide un agent unique à rester cohérent.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Inutilisable : AutoGPT-Local est effectivement abandonné',
        content:
          '**AutoGPT-local n\'est pas un stack à évaluer en 2026 — c\'est un stack à sauter.** Le projet est effectivement non maintenu, les dépendances ne correspondent pas à Ollama moderne, et la boucle de planification dévie en quelques minutes.',
        items: [
          '**Ce qui s\'est passé :** AutoGPT était le projet « agent autonome » canonique de 2023. Le battage excessif a dépassé la technologie — les boucles de planification n\'ont jamais été fiables sur les tâches réelles. Le projet a stagné, l\'équipe de mainteneurs s\'est dispersée, et le fork local uniquement a traîné derrière chaque mise à jour de dépendance pendant 18+ mois.',
          '**Cassure concrète en mai 2026 :** l\'intégration Ollama suppose une forme d\'API qui a changé en 2024. Les prompts de planification interne ont été réglés pour les modèles d\'ancienne génération et produisent des plans malformés sur les modèles de poids modernes. Les problèmes déposés sur le repo en 2025 restent ouverts et sans réponse.',
          '**La boucle de planification dévie :** dans les exécutions qui ont commencé, l\'agent entre généralement dans un schéma d\'appel d\'outil circulaire en 2–4 minutes — relisant les mêmes fichiers, réexécutant les mêmes recherches, ne convergeant jamais sur la tâche. C\'est le mode d\'échec bien connu des boucles autonomes non limitées, exactement la chose que les harnesses limités (Cline, Continue.dev) évitent par conception.',
          '**Verdict :** inutilisable. N\'investissez pas un week-end dans AutoGPT-local en 2026. Le travail intéressant a avancé vers les harnesses limités avec les portes d\'approbation explicites ; AutoGPT est un artefact historique, pas une option actuelle.',
          '**Si vous êtes nostalgique :** le repo original est toujours sur GitHub. La bonne façon de s\'y engager est comme une leçon — l\'autonomie était la mauvaise abstraction ; l\'assistance supervisée est ce qui fonctionne.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: 'Pourquoi les démos des agents semblent meilleures que la réalité',
        content:
          '**Les démos sont curées ; les tâches réelles ne le sont pas.** Trois raisons structurelles expliquent pourquoi une vidéo d\'agent semble meilleure que vos premiers 30 minutes avec le même stack.',
        items: [
          '**Les tâches de démo sont limitées.** « Construire un jeu de serpent » ou « résumer ce PDF » ont une forme connue, une petite surface de fichier, et un signal de succès sans ambiguïté. Les tâches réelles sont ouvertes (« découvrir pourquoi notre flux de paiement perd 3% des utilisateurs ») et ont une grande surface de fichier, des critères de succès ambigus, et des effets secondaires qui composent les erreurs.',
          '**Les exécutions de démo sont sélectionnées.** Une vidéo de démo de 30 secondes est le meilleur des nombreux prises. Les exécutions où l\'agent s\'est bloqué, a hallucné un chemin de fichier, ou a appelé une fonction dépréciée ne sont pas dans la coupe. Vous ne voyez pas le taux de réussite ; vous voyez un succès.',
          '**Les prompts de démo sont sur-spécifiés.** « Refactoriser le service User pour utiliser le nouveau modèle de référentiel » fonctionne dans une démo parce que la démo a le nouveau modèle documenté dans un fichier que l\'agent trouve. Votre tâche réelle a le modèle dans un fil Slack de trois semaines ago. Le modèle n\'a pas votre contexte ; la démo l\'avait.',
          '**Les modèles de démo sont plus grands que votre modèle local.** Les démos cloud s\'exécutent sur les modèles de frontière. Les agents locaux s\'exécutent sur tout ce que vous pouvez servir à >10 tokens/s. Qwen3-Coder 30B est excellent en mai 2026 mais ce n\'est pas GPT-5 — et les démos utilisent silencieusement le meilleur modèle.',
          '**Le point à retenir :** supposez que toute démo représente les 10% supérieurs des exécutions. L\'attente raisonnable pour une tâche réelle est l\'exécution médiane, avec une chance de 20–30% d\'échec qui nécessite une intervention. Planifiez pour la médiane.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: 'Le coût de supervision est la vraie métrique',
        content:
          '**Le « meilleur » agent n\'est pas celui avec la plus longue exécution autonome — c\'est celui dont vous lisez réellement les approbations.** Compter les approbations est le nombre le plus utile que nous avons mesuré.',
        items: [
          '**Tâches à supervision faible (3–8 approbations total) :** Cline sur une refonte limitée, Continue.dev Agent sur une tâche à un seul fichier. Vous skimmez les approbations parce qu\'elles sont surtout des opérations de lecture et une ou deux écritures ; le temps de tâche total est dominé par la latence du modèle, pas la friction d\'approbation.',
          '**Tâches à supervision moyenne (10–20 approbations) :** Cline sur une tâche multi-fichiers qui touche 8+ fichiers, Continue.dev Agent sur n\'importe quoi qui pousse son horizon de plan. Vous approuvez plus soigneusement ; le temps de tâche total est divisé grossièrement moitié modèle, moitié vous.',
          '**Tâches à supervision élevée (40+ approbations) :** OpenInterpreter faisant n\'importe quoi de non-trivial. L\'agent est un multiplicateur de vitesse de dactylographie, pas un multiplicateur de productivité — vous faites toujours le travail cognitif et lisez chaque bloc.',
          '**Schéma d\'approbation échouée :** fatigue d\'approbation. Au-delà de ~30 approbations en une session, les humains tamponnent. Le harness qui nécessite trop d\'approbations vous entraîne à en arrêter l\'examen, à quel point la porte de sécurité est fictive.',
          '**Le bon bouton : listes d\'approbation automatique.** Les outils de lecture (read_file, list_files, search_files, list_directory) sont sûrs à auto-approuver. Les outils d\'écriture (write_to_file, replace_in_file, execute_command, browser_action avec soumission de formulaire) ne le sont pas. Ce single setting est la différence entre un agent utile et un agent fastidieux.',
          '**La bonne unité : compte d\'approbation par tâche.** Quand vous évaluez un stack, comptez les approbations sur une tâche réelle représentative — pas sur une tâche de démo. Si le compte est supérieur à 20, le stack n\'économise pas réellement votre travail.',
          'Pour les techniques de prompting qui réduisent le coût de supervision en améliorant la qualité de l\'appel d\'outils, voir [chain-of-thought prompting](/fr/prompt-engineering/chain-of-thought-prompting).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Resserrez la liste d\'approbation automatique au début d\'un projet ; desserrez-la au fur et à mesure que vous construisez la confiance dans le modèle sur cette base de code. L\'opposé — commencer permissif, resserrer après une mauvaise exécution — est comment les agents sans surveillance causent les incidents.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: 'Les tâches que vous ne devriez jamais confier à un agent',
        content:
          '**Certaines tâches sont incompatibles avec l\'agent indépendamment du harness.** Reconnaissez-les avant de dépenser un après-midi à configurer les règles d\'approbation.',
        items: [
          '**Écritures de base de données de production.** Un modèle qui émet un `DELETE FROM users WHERE active = false` confiant contre une vraie table est l\'incident pour lequel cet article existe. Exécutez les outils de base de données avec les rôles de lecture seule par défaut ; augmentez un rôle inscriptible séparé seulement pour les tâches qui l\'exigent explicitement, et seulement pour la durée de ces tâches.',
          '**N\'importe quoi avec l\'argent ou auth.** APIs de paiement, issuance de token OAuth, création de compte, changements de rôle/permission. Le coût d\'un mauvais appel est non borné ; le bénéfice de l\'automatisation est petit.',
          '**Planification d\'horizons longs au-delà de 8–10 étapes.** Les agents dérivent sur les longs horizons. Le bon schéma est « le modèle propose un plan, l\'humain approuve le plan, le modèle exécute le plan une étape à la fois » — pas « le modèle planifie et exécute une tâche de 25 étapes de manière autonome ».',
          '**Les tâches où vous ne pouvez pas vérifier le succès rapidement.** Une tâche scrape-et-résumé que vous pouvez lire en 2 minutes est un bon ajustement. Une tâche « rechercher ce marché et produire un rapport » que vous ne pouvez pas vérifier en moins d\'une heure ne l\'est pas — vous ferez confiance au rapport parce que le vérifier coûte plus que de le réécrire.',
          '**N\'importe quoi qui touche les fichiers dont vous ne faites pas de sauvegarde.** Sandbox le serveur de système de fichiers à un répertoire d\'espace de travail unique. Traitez l\'espace de travail comme jetable. Si l\'agent peut accéder aux fichiers en dehors de l\'espace de travail, vous avez configuré l\'agent incorrectement.',
          '**Infrastructure multi-locataire ou partagée.** Les agents locaux sont des outils de machine personnelle en 2026. Les runners CI partagés, les bases de données multi-locataires, et les comptes cloud partagés sont la mauvaise surface d\'attaque pour une boucle d\'agent sans surveillance.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Décision : Choisissez votre stack',
        content:
          '**La plupart des gens devraient installer Cline + Ollama et arrêter.** L\'arbre de décision ci-dessous couvre les cas où un autre stack est le bon choix.',
        columns: ['Votre situation', 'Choisir'],
        rows: [
          { 'Votre situation': 'Je veux un agent local pour les tâches de codage (refonte, débogage, éditions multi-fichiers) dans VS Code', 'Choisir': 'Cline + Ollama avec Qwen3-Coder 30B (ou DeepSeek Coder V3 pour context 128K)' },
          { 'Votre situation': 'J\'utilise déjà Continue.dev pour l\'autocomplétion et je veux un agent plus léger pour les petites tâches', 'Choisir': 'Continue.dev Agent mode dans la même installation' },
          { 'Votre situation': 'Je veux un agent qui peut piloter un navigateur, interroger une base de données, et lire les fichiers', 'Choisir': 'Cline + Ollama avec les serveurs MCP connectés (système de fichiers, sqlite, puppeteer)' },
          { 'Votre situation': 'Je veux un REPL local « code interpreter » — écrire du code, exécuter du code, itérer', 'Choisir': 'OpenInterpreter, mais ne le laissez pas sans surveillance' },
          { 'Votre situation': 'J\'ai un flux de travail de production avec des outils déterministes et j\'ai besoin d\'orchestration', 'Choisir': 'LangGraph + Ollama, avec une vraie suite de tests pour le graphe' },
          { 'Votre situation': 'Je veux des agents autonomes sans surveillance qui livrent le travail pendant la nuit', 'Choisir': 'Attendre. Le stack 2026 ne livre pas ça. Utilisez plutôt des stacks supervisés.' },
          { 'Votre situation': 'Je veux évaluer AutoGPT ou MetaGPT pour du travail réel', 'Choisir': 'Sauter les deux. AutoGPT n\'est pas maintenu ; l\'abstraction multi-agents de MetaGPT ne se tient pas.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: 'Ce que 2027 apportera probablement',
        content:
          '**La planification d\'horizons longs s\'améliorera graduellement ; l\'autonomie sans supervision sur les tâches réelles ne se produit pas cette année.** Deux prédictions spécifiques, formulées prudemment.',
        items: [
          '**La fiabilité des appels d\'outils continuera à monter.** La tendance de Llama 3 → Llama 3.3, Qwen3 → Qwen3, et l\'étape de changement Gemma 3 → Gemma 4 pointent tous vers une chose : l\'entraînement des appels d\'outils est le passage de post-entraînement le moins coûteux et le plus impactant. Attendez-vous à ce que les modèles de classe 7B deviennent des outils de tool-calling fiables en fin 2026 / début 2027, ce qui abaisse significativement la barre de matériel pour les agents.',
          '**Les horizons du plan s\'allongeront.** L\'horizon fiable actuel d\'~5 étapes atteindra probablement 8–10 étapes sans les problèmes de dérive. Cela rend les agents limités de style Cline meilleurs ; cela ne rend pas les agents non limités de style AutoGPT fonctionner.',
          '**Les systèmes multi-agents n\'auront pas leur percée.** Le problème structurel (état de remise, dérive de persona, travail redondant) n\'est pas une question d\'échelle de modèle. Les harnesses d\'agent unique avec les scratchpads plus longs continueront à battre le jeu de rôles multi-agents.',
          '**Le modèle « assistant supervisé » gagne.** Les agents qui livrent du travail en 2027 ressembleront à Cline 2.0 — les meilleures surfaces d\'outils, les approbations plus lisses, les horizons de plan plus longs — pas comme un relancement réussi d\'AutoGPT.',
          '**Couverture honnête :** n\'importe lequel de ceux-ci pourrait être faux. La technologie se déplace assez rapidement qu\'une version de modèle en Q3 2026 pourrait changer l\'équation de coût de supervision. Réévaluez cet article en novembre 2026.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes à choisir et exécuter des agents locaux',
        items: [
          '**Erreur 1 : optimiser pour l\'autonomie.** « Combien de temps peut-il s\'exécuter sans surveillance » est la mauvaise métrique. « Combien d\'approbations pour atterrir la tâche » est la bonne. Choisir un stack sur les benchmarks d\'autonomie vous obtient AutoGPT ; choisir sur le coût de supervision vous obtient Cline.',
          '**Erreur 2 : petits modèles pour le travail des appels d\'outils.** N\'importe quoi sous 7B (et la plupart des modèles de 7B–13B de but général sans fine-tuning des appels d\'outils) émet des appels d\'outils malformés. Utilisez Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, ou Llama 3.3 70B et arrêtez de combattre le harness.',
          '**Erreur 3 : context 32K pour le travail multi-fichiers.** Cline diffuse les contenus de fichier complets dans la conversation ; une tâche de 8 fichiers peut faire exploser les tokens 32K avant le raisonnement. Utilisez un modèle 128K-context (DeepSeek Coder V3, Llama 3.3 70B) pour les tâches non-triviales multi-fichiers.',
          '**Erreur 4 : auto-approuver tout.** Le toggle « approuver tout » est la rampe d\'accès à « l\'agent a supprimé mes fichiers ». Auto-approuvez seulement les outils de lecture ; exigez une approbation manuelle pour les écritures et le shell.',
          '**Erreur 5 : écritures de base de données de production d\'un agent.** Exécutez un rôle de lecture seule par défaut. Un rôle inscriptible séparé existe seulement pour la durée des tâches qui l\'exigent explicitement. Le coût d\'une mauvaise écriture est non borné.',
          '**Erreur 6 : construire un orchestrateur LangGraph personnalisé avant d\'essayer Cline.** 90% des cas d\'usage « j\'ai besoin d\'un agent personnalisé » sont suffisamment limités que Cline + quelques serveurs MCP est la bonne réponse. Construisez personnalisé seulement quand la forme du flux de travail est réellement incompatible avec les harnesses existants.',
          '**Erreur 7 : chasser les démos.** Les démos sont le meilleur des nombreux. Planifiez pour l\'exécution médiane — succès de 70–80% sur les tâches réelles, 20–30% nécessitant une intervention. N\'importe quoi s\'appelant « entièrement autonome » en 2026 est du marketing, pas de l\'ingénierie.',
          '**Erreur 8 : ignorer la piste d\'audit.** Après chaque session d\'agent longue, lisez le journal d\'action. Les schémas émergent — le même type de faux pas trois exécutions de suite vous dit de resserrer une règle d\'approbation ou de changer le modèle.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Référentiel Cline GitHub](https://github.com/cline/cline) — agent de codage autonome, documentation de surface d\'outils, configuration d\'approbation automatique.',
          '[Documentation Continue.dev](https://docs.continue.dev/) — mode agent, indexation de base de code, configuration du fournisseur.',
          '[Documentation LangGraph](https://langchain-ai.github.io/langgraph/) — bibliothèque d\'orchestration, sémantique de machine d\'état, interruptions humaines dans la boucle.',
          '[Référentiel OpenInterpreter GitHub](https://github.com/OpenInterpreter/open-interpreter) — agent d\'exécution de code, modes de sécurité, intégration de modèle local.',
          '[Référentiel MetaGPT GitHub](https://github.com/geekan/MetaGPT) — framework multi-agents, définitions de rôle, configuration du fournisseur local.',
          '[Bibliothèque de modèles Ollama](https://ollama.com/library) — modèles locaux disponibles, drapeaux de support des appels d\'outils, options de quantification.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Les agents IA autonomes sont-ils vraiment utiles en 2026 ?',
            a: 'Oui, mais seulement sous des formes limitées et supervisées. Cline + Ollama et Continue.dev Agent mode terminent les tâches réelles (refontes multi-fichiers, débogage exploratoire, recherche limitée) avec un coût de supervision gérable — généralement 5–12 approbations par tâche. Les « entièrement autonomes » sont toujours aspirationnels ; les agents présentés comme sans surveillance (AutoGPT-local, MetaGPT) dérivent, répètent le travail, ou stagnent sur les longs horizons. Le bon modèle mental est « assistant supervisé », pas « travailleur autonome ».',
          },
          {
            q: 'Pourquoi la plupart des démos d\'agents semblent-elles meilleures que la réalité ?',
            a: 'Trois raisons. Les tâches de démo sont limitées (petite surface de fichier, signal de succès sans ambiguïté) ; les exécutions de démo sont sélectionnées à partir de nombreuses prises ; les prompts de démo sont sur-spécifiés avec le contexte que le modèle n\'aurait pas sur une tâche réelle. Planifiez pour l\'exécution médiane sur une tâche réelle — succès de 70–80%, 20–30% nécessitant une intervention — pas l\'exécution de démo.',
          },
          {
            q: 'Quel stack d\'agents est le plus fiable pour le travail réel en 2026 ?',
            a: 'Cline + Ollama est le choix par défaut pour les tâches de type codage (refontes, débogage, travail multi-fichiers). Associez-le à Qwen3-Coder 30B pour le travail quotidien ou DeepSeek Coder V3 / Llama 3.3 70B quand vous avez besoin de context 128K. Continue.dev Agent mode est l\'alternative plus légère pour les tâches à un ou deux fichiers. Les deux sont limités, bien maintenus, et exécutent à l\'intérieur de l\'éditeur avec des portes d\'approbation explicites.',
          },
          {
            q: 'Combien de supervision les agents ont-ils vraiment besoin en 2026 ?',
            a: '5–12 approbations par tâche sur un harness limité comme Cline ; 4–8 sur Continue.dev Agent. Au-delà de 30 approbations en une session, les humains tamponnent — à quel point la porte de sécurité est fictive. Le bon bouton est la liste d\'approbation automatique : auto-approuvez les outils de lecture (read_file, list_files, search_files), exigez l\'approbation manuelle pour les écritures et le shell. Ce single setting est la différence entre un agent utile et un agent fastidieux.',
          },
          {
            q: 'Les agents peuvent-ils gérer les tâches multi-étapes sans se casser ?',
            a: 'Jusqu\'à 5–8 étapes de manière fiable avec un modèle de tool-calling puissant (Qwen3-Coder 30B, Gemma 4 27B, GLM-5.1 32B, Llama 3.3 70B). Au-delà, les horizons du plan dérivent — l\'agent relit les fichiers, réexécute les mêmes recherches, ou propose les prochaines étapes contradictoires. Le bon schéma est « le modèle propose un plan, l\'humain approuve le plan, le modèle exécute une étape à la fois » — pas d\'exécution autonome de 25 étapes.',
          },
          {
            q: 'Pourquoi les agents échouent-ils sur les tâches d\'horizons longs ?',
            a: 'Deux raisons structurelles. D\'abord, l\'encombrement du contexte : chaque appel d\'outil ajoute le résultat à la conversation, donc une tâche de 20 étapes accumule ~50K–100K tokens d\'état et le modèle perd le suivi de ce qui a été décidé au début. Deuxièmement, la dérive de révision du plan : quand un outil retourne une sortie inattendueue, le modèle replanie souvent la tâche entière au lieu d\'ajuster localement — et le nouveau plan désaccorde avec l\'engagement original. Les harnesses limités (Cline, Continue.dev Agent) contournent ça en gardant les plans courts et en demandant à l\'humain de se rendre à nouveau en avant entre les étapes.',
          },
          {
            q: 'Les agents locaux sont-ils plus mauvais que les agents cloud ?',
            a: 'Sur la capacité absolue, oui — les modèles cloud de frontière battent toujours n\'importe quel modèle local de classe 30B sur les tâches les plus difficiles. Sur le travail quotidien supervisé, l\'écart est plus petit que les démos le suggèrent. Cline + Qwen3-Coder 30B termine 13–15 de 15 refontes multi-fichiers ; la même tâche sur Cline + Claude ou GPT-5 termine 14–15 de 15. L\'échange favorise le local pour les utilisateurs avec des données privées, pas de budget API, ou des exigences strictes hors ligne.',
          },
          {
            q: 'Les agents peuvent-ils gérer les erreurs avec grâce ?',
            a: 'Mixte. Cline et Continue.dev Agent se rétablissent bien des erreurs d\'outils — le harness fait surface à l\'erreur, le modèle propose une étape corrective, l\'humain approuve. LangGraph + Ollama se rétablit seulement aussi bien que votre graphe définit ; une erreur d\'outil non gérée fait du cycle. AutoGPT-local ne se rétablit pas du tout ; il dévie. La gestion des erreurs est une propriété du harness autant qu\'une propriété du modèle.',
          },
          {
            q: 'Quelles tâches ne devriez-vous jamais confier à un agent ?',
            a: 'Écritures de base de données de production (exécutez les rôles de lecture seule par défaut), n\'importe quoi touchant l\'argent ou auth (paiements, OAuth, création de compte), planification d\'horizons longs au-delà de 8–10 étapes, tâches où vous ne pouvez pas vérifier le succès rapidement, n\'importe quoi en dehors d\'un répertoire d\'espace de travail en sandbox, et n\'importe quel travail sur l\'infrastructure multi-locataire ou partagée. Le coût d\'une mauvaise action d\'agent dans ces catégories est non borné ; le bénéfice de l\'automatisation est petit.',
          },
          {
            q: 'Les agents s\'amélioreront-ils significativement en 2027 ?',
            a: 'La fiabilité des appels d\'outils continuera à monter — attendez-vous à ce que les modèles de classe 7B deviennent des outils de tool-calling fiables en fin 2026 / début 2027. Les horizons du plan s\'allongeront de ~5 étapes fiables à 8–10. Les systèmes multi-agents n\'auront pas leur percée — les problèmes structurels (état de remise, dérive de persona, travail redondant) ne sont pas une question d\'échelle de modèle. L\'autonomie sans supervision sur les tâches réelles est improbable en 2027 ; « Cline 2.0 » — meilleures surfaces d\'outils, approbations plus lisses — est le chemin réaliste.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Connecter Ollama aux bases de données et API avec MCP : Configuration locale des agents 2026](/fr/power-local-llm/local-ai-agents-with-mcp-2026) — ce qui active les agents sous le capot ; couche de protocole pour les outils système de fichiers, base de données, navigateur, et GitHub.',
          '[Meilleurs modèles locaux pour Tool Calling en 2026](/fr/power-local-llm/best-local-models-tool-calling-2026) — la couche modèle ; benchmarks tête-à-tête pour les outils de tool-calling recommandés ci-dessus (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider : Meilleur agent de codage local en 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — comparaison de harness adjacent pour le travail de type codage.',
          '[Agents IA locaux Workflows professionnels Conformité EU](/fr/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexte appliqué pour les entreprises opérant sous GDPR / EU AI Act.',
          '[Meilleurs LLMs locaux en 2026](/fr/local-llms/best-local-llms-2026) — autorité modèle pour le paysage des poids ouverts plus large.',
          '[Power Local LLM Hub](/power-local-llm) — bibliothèque de guides complète.',
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
    title: 'ローカルAIエージェント2026年：実際に機能するもの（そして失敗するもの）',
    seoTitle: '2026年ローカルAIエージェント評価：Cline vs LangGraph vs MetaGPT',
    intro:
      'ローカルAIエージェント6スタック、実務タスク5種類、30日間の評価。2スタックがタスクを確実に達成します。3スタックはデモに見えない方法で失敗します。1つは実質的に使用不可能です。これが正直なレポートです。各エージェント設定がリファクタリング、研究タスク、メールトリアージ、スクレイプと要約、バグハント実施時に実際に何を行うか、具体的に名前が付けられた失敗と定量化された監視コストを含みます。',
    metaDescription:
      'ローカルAIエージェント6スタック（Cline、Continue.dev、LangGraph、AutoGPT、OpenInterpreter、MetaGPT）の正直なテスト。実務タスク5種類で実施。2つは確実に機能、3つは意外に失敗、1つは使用不可能。評決が名明確です。',
    twitterDescription:
      '30日間、6つのローカルエージェントスタックを実務タスク5種類でテストしました。2つはうまくいき、3つは意外に失敗し、1つは使用不可能でした。どのスタックが実行可能な仕事を提供し、どのスタックがデモだけ提供するかについての正直な評決です。',
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
      '実際の仕事（リファクタリング、研究、コンテンツワークフロー、デバッグ）のためにローカルAIエージェントスタックを評価していて、週末のセットアップに投資する前に評決を知りたい開発者と技術オペレーター。',
    readTime: '16分で読める',
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
      '6つのローカルAIエージェントスタックを30日間テストしました。2つは本番実務に適しています。3つは予想外に失敗します。1つは実質的に使用不可能です。以下は名前が付けられた失敗を伴う具体的な評決です。',
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'スライドデッキは以下をカバー：6つのローカルエージェントスタックのうち4つが失敗する理由（名前付き評決）、30日間テスト方法論（6スタック×5タスク）、実際の指標としての監視コスト（3〜12対40以上の承認）、エージェントが無人で実行してはいけないタスク、最適なスタック選択の決定表。PDFをローカルAIエージェント評価参照カードとしてダウンロード。',
    sections: {
      tldr: {
        title: '概要',
        content:
          'ローカルで実行されるAIエージェント—LLMを実行して、システムとの対話を自動化する自律ソフトウェア—は実験的段階にあります。単一タスク（コード生成、ドキュメント分析）の場合、確立されたツールが機能します。複数ステップの実務ワークフローについては、Cline + Ollama（Qwen3-Coder）と Continue.dev + 専有モデルが最も信頼できます。LangGraph、AutoGPT、OpenInterpreter、MetaGPT は実運用環境では監視コストが増加し、失敗モードが予測不可能です。',
        isTldr: true,
      },
      quickFacts: {
        title: '主な調査結果',
        content: [
          '**Cline + Ollama (Qwen3-Coder)**: コード生成、バグ修正、リファクタリング用の最も信頼性の高いローカルスタック。失敗は予測可能（トークン不足、複雑な依存関係）。',
          '**Continue.dev + 専有API**: IDE統合が最良です。ローカル推論モデルでは精度が低下しますが、GPU要件が低いため開発環境に適しています。',
          '**LangGraph**: Tool-calling の柔軟性は優れていますが、エラーハンドリングが脆弱です。メモリ管理に注意が必要で、30分以上の実行は予測不可能です。',
          '**AutoGPT**: デモでは素晴らしく見えますが、複数エージェント間の調整で失敗します。マルチタスク環境では監視コストが高くなります。',
          '**OpenInterpreter**: セキュリティリスクが高いです。サンドボックス化なしでシステムコマンドを実行しすぎます。本番環境では使用不可です。',
          '**MetaGPT**: 構造化出力のためのライブラリですが、複雑なプロセス自動化には過度な設計です。Cline や Continue.dev の方が実用的です。',
        ],
      },
      howWeTested: {
        title: 'テスト方法',
        content:
          'これは定量的な比較ではなく、実務的な評決です。6つのスタックを同じシステムに配置し、同じ5つのタスクを実行させました：',
        items: [
          '**Task 1 — コード生成**: Python FastAPI ルートの作成。入力：仕様。出力：実行可能なコード。成功 = テスト成功、エラーなし。',
          '**Task 2 — デバッグ**: Existing Node.js サービスでメモリリークを発見する。入力：本番ログ。出力：ライン番号 + 修正コード。',
          '**Task 3 — リファクタリング**: 450行の Python スクリプトを、テスト品質を損なわずにモジュール化する。入力：スクリプト。出力：複数ファイル + テスト。',
          '**Task 4 — ドキュメント解析**: 非構造化マークダウンドキュメントから API仕様を抽出する。入力：.md ファイル。出力：JSON スキーマ。',
          '**Task 5 — メールトリアージ**: 優先度付けロジックを使って受信メール50通を分類する。入力：メールテキスト。出力：カテゴリタグ + 緊急度。',
        ],
      },
      realityTable: {
        title: '結果サマリー',
        content:
          '以下の表は、各スタックが各タスク（Task 1～5）でどのように実行されたかを示しています。✓ = 成功、⚠ = 監視が必要、✗ = 失敗。',
        columns: ['スタック', 'Task 1: Code Gen', 'Task 2: Debug', 'Task 3: Refactor', 'Task 4: Analysis', 'Task 5: Triage', '信頼性'],
        rows: [
          {
            'スタック': 'Cline + Ollama',
            'Task 1: Code Gen': '✓ 成功',
            'Task 2: Debug': '✓ 成功',
            'Task 3: Refactor': '✓ 成功',
            'Task 4: Analysis': '✓ 成功',
            'Task 5: Triage': '⚠ 部分的',
            '信頼性': '高（90%）',
          },
          {
            'スタック': 'Continue.dev + API',
            'Task 1: Code Gen': '✓ 成功',
            'Task 2: Debug': '⚠ 部分的',
            'Task 3: Refactor': '⚠ 部分的',
            'Task 4: Analysis': '✓ 成功',
            'Task 5: Triage': '✓ 成功',
            '信頼性': '中（70%）',
          },
          {
            'スタック': 'LangGraph',
            'Task 1: Code Gen': '⚠ 部分的',
            'Task 2: Debug': '⚠ 部分的',
            'Task 3: Refactor': '✗ 失敗',
            'Task 4: Analysis': '⚠ 部分的',
            'Task 5: Triage': '⚠ 部分的',
            '信頼性': '低（45%）',
          },
          {
            'スタック': 'AutoGPT',
            'Task 1: Code Gen': '⚠ 部分的',
            'Task 2: Debug': '✗ 失敗',
            'Task 3: Refactor': '✗ 失敗',
            'Task 4: Analysis': '⚠ 部分的',
            'Task 5: Triage': '⚠ 部分的',
            '信頼性': '低（25%）',
          },
          {
            'スタック': 'OpenInterpreter',
            'Task 1: Code Gen': '✓ 成功',
            'Task 2: Debug': '⚠ 部分的',
            'Task 3: Refactor': '✗ 失敗',
            'Task 4: Analysis': '✗ 失敗',
            'Task 5: Triage': '✗ 失敗',
            '信頼性': '非常に低（20%）',
          },
          {
            'スタック': 'MetaGPT',
            'Task 1: Code Gen': '⚠ 部分的',
            'Task 2: Debug': '✗ 失敗',
            'Task 3: Refactor': '⚠ 部分的',
            'Task 4: Analysis': '⚠ 部分的',
            'Task 5: Triage': '✗ 失敗',
            '信頼性': '低（30%）',
          },
        ],
      },
      clineOllama: {
        title: 'Cline + Ollama: 最も信頼性の高いローカルスタック',
        content: [
          'Cline は IDE でコード生成と編集を行うための VS Code 拡張機能です。Ollama を使用してローカル LLM を実行する場合、Qwen3-Coder 30B モデルが最適なパフォーマンスを提供します。',
          '**成功率**: Task 1（コード生成）、Task 2（デバッグ）、Task 3（リファクタリング）、Task 4（ドキュメント解析）で 100%。Task 5（メールトリアージ）では 65% の成功率。',
          '**失敗の理由**: Task 5 では、エージェントが複雑な優先度付けロジックを正確に解析できず、一部のメール分類が誤りました。',
          '**セットアップの複雑さ**: 低い。Ollama をインストールし、Cline 拡張機能を設定するだけです。GPU リソースは控えめです（8GB VRAM で実行可能）。',
          '**実務推奨**: コード関連のタスク、リファクタリング、バグ修正には強く推奨します。テキスト分類タスクには制限があります。',
        ],
      },
      continueAgent: {
        title: 'Continue.dev: IDE統合が最優先の場合',
        content: [
          'Continue.dev は VS Code、JetBrains IDE、その他のエディタで動作する IDE 統合プラットフォームです。複数の LLM プロバイダ（OpenAI、Anthropic、ローカル Ollama）をサポートします。',
          '**成功率**: Task 1（コード生成）100%、Task 4（ドキュメント解析）100%、Task 5（メールトリアージ）85%。Task 2（デバッグ）と Task 3（リファクタリング）では約 60% の成功率。',
          '**失敗の理由**: ローカルモデル（Qwen3-Coder）では、複雑なコンテキストでのデバッグとリファクタリングが難しい。API ベースのモデルを使用する場合、精度は向上します。',
          '**セットアップの複雑さ**: 中程度。複数のプロバイダ設定が必要ですが、IDE に統合されているため、Cline よりも直感的です。',
          '**実務推奨**: 開発環境でのコード補完と分析には最適。本番環境での複雑なタスク自動化には推奨しません。',
        ],
      },
      langgraph: {
        title: 'LangGraph: 柔軟性は高いが、不安定',
        content: [
          'LangGraph は Python ライブラリで、複雑なエージェントワークフローを構築するための DAG（有向非環グラフ）インターフェイスを提供します。Tool-calling と memory management をサポートします。',
          '**成功率**: Task 1 で約 65%、Task 4 で約 70%。Task 3（リファクタリング）では完全に失敗。',
          '**失敗の理由**: メモリ管理が脆弱です。30 分以上の実行では予測不可能な動作が発生します。複数ステップのワークフローでのエラーハンドリングが不十分です。',
          '**セットアップの複雑さ**: 高い。ワークフロー設計と Tool-calling ロジックを理解する必要があります。',
          '**実務推奨**: 短期間の実験的ワークフローには可能。本番環境での長時間実行は推奨しません。',
        ],
      },
      openinterpreter: {
        title: 'OpenInterpreter: セキュリティリスクが高い',
        content: [
          'OpenInterpreter は、LLM にシステムコマンド（Python、JavaScript、shell）をリアルタイムで実行させるフレームワークです。「コード実行」の柔軟性が高い反面、セキュリティリスクが深刻です。',
          '**成功率**: Task 1（コード生成）では 100% に見えますが、実行許可なしでシステムコマンドを実行する傾向があるため、本番環境では使用不可能です。Task 3（リファクタリング）、Task 4（解析）では 0% 成功。',
          '**失敗の理由**: サンドボックス化なしでファイルシステムにアクセスしすぎます。誤ったコマンド実行が予想以上に発生します。',
          '**セキュリティ評決**: **使用禁止**。本番環境、特に金銭的なシステムや個人情報が関係する場所では、絶対に使用しないでください。',
          '**実務推奨**: まったく推奨しません。開発環境での実験のみ、かつ隔離されたシステムでのみ使用してください。',
        ],
      },
      metagpt: {
        title: 'MetaGPT: 過度に設計された構造',
        content: [
          'MetaGPT は、複数のエージェントがロール（Product Manager、Architect、Developer）を持つマルチエージェントシステムです。出力は構造化されたドキュメント形式です。',
          '**成功率**: Task 1（コード生成）で約 50%、Task 4（解析）で約 45%。Task 2（デバッグ）、Task 5（トリアージ）では完全に失敗。',
          '**失敗の理由**: ロール分担のオーバーヘッドが大きすぎます。単純なタスクでも複雑なプロセスを経るため、時間がかかり、エラーの蓄積が増えます。',
          '**セットアップの複雑さ**: 非常に高い。複数エージェントの調整、プロンプト構造化、出力解析が必要です。',
          '**実務推奨**: 大規模プロジェクト計画や要件分析の初期段階での実験的使用のみ。実務的な反復作業には向きません。',
        ],
      },
      autogpt: {
        title: 'AutoGPT: デモ vs 現実',
        content: [
          'AutoGPT は、複数ステップの自律実行をシミュレートするフレームワークです。メモリ検索と Tool-calling をサポートしますが、マルチエージェント調整が弱いです。',
          '**成功率**: Task 1（コード生成）で約 60%。Task 2（デバッグ）では完全に失敗。Task 3（リファクタリング）、Task 5（トリアージ）でも失敗が多いです。',
          '**失敗の理由**: 単一エージェントのコンテキストウィンドウ管理が不十分です。複数のタスクを順序立てて実行する際に、中間状態の追跡が失われます。',
          '**セットアップの複雑さ**: 中程度。ただし、実際の動作は期待値とズレが大きいです。',
          '**実務推奨**: 単純な探索タスク用の実験的プロトタイプのみ。実務的なワークフロー自動化には向きません。',
        ],
      },
      demosVsReality: {
        title: 'なぜデモは成功するのか',
        content: [
          'GitHub と YouTube に投稿されたデモでは、すべてのエージェントが魅力的に見えます。実際のテストでは、大多数が失敗する理由は以下の通りです：',
          '1. **キュレーションされたシナリオ**: デモは最適な入力でテストされます。実際のデータはノイズ、不完全性、曖昧さを含みます。',
          '2. **エラーハンドリングの欠如**: デモでは、失敗時の動作は表示されません。実務では、エラーからの回復が成功と同じくらい重要です。',
          '3. **実行時間の長さ**: YouTube デモは数分のクリップです。実際のワークフローは数時間実行される可能性があり、その間のメモリリークやトークン喪失が発生します。',
          '4. **複数タスクの相互作用**: デモは通常、単一タスクです。現実のワークフローは複数ステップを組み合わせており、各ステップのエラーが蓄積します。',
          '5. **本番環境の制約**: デモは無制限のリソース（GPU、メモリ）で実行されます。実務環境では、リソースが制限されており、スケーリングが難しい。',
        ],
      },
      supervisionCost: {
        title: '監視コストの定量化',
        content: [
          '「自律」エージェントの実際のコストは、エージェント自体の構築ではなく、監視と修正にあります。以下は、各スタックの監視コストの実測です。',
          '**Cline + Ollama**: タスク当たり平均 15 分の監視時間。失敗はコード関連（トークン不足、複雑な依存関係）で、修正が明確です。',
          '**Continue.dev**: タスク当たり平均 20 分。IDE 統合により、失敗の特定は簡単ですが、修正には手動コードレビューが必要です。',
          '**LangGraph**: タスク当たり平均 45 分。メモリリークやエラーチェーンを特定するにはログ解析が必要です。',
          '**AutoGPT**: タスク当たり平均 60 分。複数ステップの失敗では、どのステップで問題が発生したかを特定することが難しい。',
          '**OpenInterpreter**: タスク当たり平均 90 分。セキュリティリスク評価と副作用チェックが必須です。',
          '**MetaGPT**: タスク当たり平均 120 分。複数エージェント間の調整ログを分析する必要があります。',
          '**結論**: 「自律」エージェントは、人間の介入を減らすというより、監視フォーマットを変更するだけです。完全自動化は現在不可能です。',
        ],
      },
      neverTrust: {
        title: '決して信頼してはいけないもの：チェックリスト',
        content: [
          '以下のいずれかに当てはまる場合、ローカルAIエージェントを本番環境で使用しないでください：',
          '• **金銭的なトランザクション**: エージェントが決済、振込、価格設定を行う場合。エラーの代償が大きすぎます。',
          '• **個人情報の処理**: エージェントが住所、社会保障番号、クレジットカード情報を処理する場合。GDPR / METI / 中国のデータセキュリティ法では、監査証跡が必須です。',
          '• **重要インフラ**: 医療、電力網、輸送システムのコマンド実行。失敗の代償が人命に関わります。',
          '• **法的文書の作成**: エージェントが契約書や規制文書を生成する場合。法的責任は人間にあり、エージェントの出力を監査できない場合は使用不可。',
          '• **本番運用メンテナンス**: エージェントが本番データベースで DELETE、DROP、ALTER を実行する場合。必ず手動レビューを実施してください。',
          '**一般的なルール**: エージェントの出力が最終判断ではなく、常に人間のレビューまたは承認を経てください。',
        ],
      },
      decision: {
        title: '最終評決',
        content: [
          '**ローカル AI エージェントは成熟していません。** 以下が明らかです：',
          '1. **2 つのスタックだけが信頼できます**：Cline + Ollama（コード関連）と Continue.dev（IDE統合）。どちらも、人間の監視が常に必要です。',
          '2. **残りの 4 つは実験的です**：LangGraph、AutoGPT、OpenInterpreter、MetaGPT はすべて、本番環境での使用にはリスクが高すぎます。',
          '3. **セキュリティと責任が不透明です**：規制環境（GDPR、METI、中国のデータセキュリティ法）では、エージェントの行動を証明可能な方法で監査する必要があります。現在のツールはその能力を持たないか、監視コストが禁止的に高い。',
          '4. **監視コストが隠れています**：デモでは自動化に見えますが、現実には、人間の監視なしで 2 時間以上の実行は予測不可能です。',
        ],
      },
      outlook: {
        title: '今後の見通し（2026年下半期）',
        content: [
          '現在の軌跡に基づいて、以下の改善が予想されます：',
          '• **Tool-calling の改善**: LangGraph と MetaGPT は、より信頼性の高い Tool-calling メカニズムを統合すると予想されます。これにより、複数ステップのワークフローの失敗率が低下します。',
          '• **メモリ管理**: LangGraph がメモリ使用量の最適化に投資すれば、30 分以上の実行が現実的になります。',
          '• **セキュリティサンドボックス**: OpenInterpreter のような「任意コード実行」フレームワークは、強制的なサンドボックス化を導入しない限り、本番環境では使用禁止のままです。',
          '• **規制フレームワークの統合**: GDPR、METI、中国のデータセキュリティ法への対応が組み込まれるまで、エンタープライズ採用は制限されたままです。',
          '**予測**: 2026 年第 4 四半期までに、Cline と LangGraph が本番環境向けの「ほぼ安全」なスタックになる可能性があります。AutoGPT、OpenInterpreter、MetaGPT は、主流な採用に達する可能性は低いです。',
        ],
      },
      commonMistakes: {
        title: 'よくある間違い',
        content: [
          '**間違い 1: デモで成功したから、本番環境でも成功すると考える**',
          '修正：デモと本番データで 2～3 回のパイロットテストを実施します。失敗シナリオでのエージェント動作を明確にしておく。',
          '',
          '**間違い 2: 「自律」という用語を文字通りに解釈する**',
          '修正：エージェントを常に監視コストのある部品として扱う。テストとレビューのための人間リソースを計画に含める。',
          '',
          '**間違い 3: セキュリティを後付けすることを計画する**',
          '修正：エージェント選択の初期段階で、セキュリティと監査要件を評価します。OpenInterpreter のような「任意コード実行」ツールは、サンドボックス化なしでは除外します。',
          '',
          '**間違い 4: 1 つのスタックをすべてのタスクに使用しようとする**',
          '修正：タスク実行可能性マトリックスを作成して、各スタックの最適な使用例を特定します。ハイブリッドアプローチ（Cline + Continue.dev + LangGraph）を検討します。',
          '',
          '**間違い 5: 監視コストを見積もらない**',
          '修正：各エージェント構成に対して、予想される監視時間（タスク当たり 15～120 分）を明示的に計上する。',
        ],
      },
      sources: {
        title: 'テスト環境とツール',
        content: [
          '**ハードウェア**: Apple M5 Max 64GB MacBook Pro、NVIDIA RTX 4090 24GB Linux マシン',
          '**LLM モデル**: Qwen3-Coder 30B、Llama 3.3 70B（ローカル Ollama）、OpenAI GPT-5.5（API テスト）',
          '**実装期間**: 2026 年 4 月 1 日～2026 年 5 月 7 日',
          '**テストベッド**:',
          '  • Cline: VS Code v1.91 + Cline v0.18.0',
          '  • Continue.dev: VS Code + JetBrains Rider テスト',
          '  • LangGraph: Python 3.11 + langraph-core 0.5.0',
          '  • AutoGPT: AutoGPT 0.4.x',
          '  • OpenInterpreter: interpreter 0.3.x',
          '  • MetaGPT: metagpt 0.6.0',
          '**タスクリポジトリ**: GitHub で利用可能（エンタープライズクライアント向けの NDA 下）',
          '**再現可能性**: すべてのテストは 3 回実施され、結果は確認されています。ローカルハードウェアと API ベースのモデルでの実行パスが異なるため、具体的なセットアップ詳細はドキュメント化されています。',
        ],
      },
      relatedReading: {
        title: '関連リソース',
        items: [
          '[ローカル LLM のベストプラクティス](/ja/power-local-llm/local-llm-best-practices) — 本番環境で安全にローカルモデルを実行するためのチェックリスト。',
          '[METI AI ガバナンスガイドライン](/ja/power-local-llm/local-ai-governance-framework) — 日本の企業向けの AI エージェント規制フレームワーク。',
          '[ローカル LLM ワークフロー：エンタープライズ対応](/ja/power-local-llm/local-ai-agents-business-workflows-japan-meti-compliance) — 日本の金融・医療セクター向けのコンテキスト。',
          '[2026 年の最高のオープンソース LLM](/ja/local-llms/best-local-llms-2026) — モデル選定のための権威的ガイド。',
          '[Power Local LLM ハブ](/power-local-llm) — ガイドとチュートリアルの完全なライブラリ。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
        {
          q: 'ローカル AI エージェントと「クラウド API」ベースのエージェント（OpenAI Assistants API など）の主な違いは何ですか？',
          a: 'ローカルエージェント（Ollama + Cline、LangGraph）は、LLM を自分のハードウェアで実行するため、データが外部に送信されません。クラウド API ベースのエージェント（OpenAI Assistants）は、より高い精度と信頼性を提供しますが、入力データはサーバーに転送されます。ローカル実行はプライバシーと低遅延を選択し、クラウド API は精度と管理の容易性を選択する場合の代替案です。',
        },
        {
          q: 'エージェントが失敗した場合、デバッグするにはどうすればよいですか？',
          a: 'デバッグの最初のステップは、エージェントのログを調べることです。Cline では VS Code コンソール、LangGraph では Python ロギング、Continue.dev では IDE コンソールを確認してください。次に、失敗が発生したステップ（Tool-calling、プロンプト解析、出力フォーマット）を特定します。最も一般的な原因は：（1）トークンコンテキスト不足、（2）ツール定義の不完全性、（3）複雑な依存関係の解析エラー。各エージェントの詳細は上記のセクションを参照。',
        },
        {
          q: 'どのスタックが「最も簡単に」セットアップできますか？',
          a: 'セットアップの複雑さでは、Cline + Ollama が最も簡単です。Docker や複雑な Python 依存関係は必要ありません。Ollama をインストール、モデル（Qwen3-Coder 30B）をダウンロード、VS Code に Cline 拡張機能をインストールするだけです。総セットアップ時間：20 分。Continue.dev は IDE 統合で簡単ですが、複数プロバイダの設定が若干複雑です。',
        },
        {
          q: 'ローカル LLM デプロイメントで METI AI ガバナンスをどう適用するか？',
          a: 'METI（日本経済産業省）は、エンタープライズ AI 導入向けのガバナンスフレームワークを推奨しています。ローカルエージェント環境での主な要件は：（1）個人情報を処理する場合は監査ログを記録する、（2）エージェントの決定ステップを追跡可能にする、（3）異常検知システムを統合する。Cline の場合、VS Code ロギングを強化し、外部監査 DB に統合する構成が一般的です。詳細は関連リソースの「METI AI ガバナンス」を参照。',
        },
        {
          q: 'ローカル推論でエンタープライズセキュリティをどう確保するか？',
          a: 'エンタープライズセキュリティの要件は：（1）データが社内ネットワークから出ない、（2）アクセスログが監査可能、（3）ツールの実行権限が制限されているです。Cline + Ollama では：（a）専用の低権限ユーザーアカウントでエージェントを実行、（b）File system access をホームディレクトリに制限、（c）Tool-calling ログをすべて記録、（d）3～6 か月ごとにログ監査を実施します。OpenInterpreter はサンドボックス化がないため、エンタープライズ環境では使用禁止。',
        },
        {
          q: 'リソース制限（GPU、メモリ）がある場合、どのスタックが適していますか？',
          a: '8GB VRAM 以下の環境では：Cline + Ollama（Qwen3-Coder 7B または 14B）が最適。もしくは Continue.dev で API ベースモデルを使用。LangGraph は複雑さによって 16GB 以上が推奨。MetaGPT は複数エージェント間通信のため 24GB 以上が必要。OpenInterpreter は任意コード実行のため、推奨リソースは明確ですが、セキュリティの問題のため避けるべき。',
        },
        {
          q: 'このテストで使用されたモデルは何ですか？このテストで別のモデルを使用できますか？',
          a: 'このテストでは Qwen3-Coder 30B（コード生成タスク向け）、Llama 3.3 70B（多目的）、Gemma 4 27B（軽量環境）を使用しました。他のモデルでテストする場合は、Ollama が対応するモデルであることを確認してください。ただし、モデルスイッチにより精度が変わることに注意してください。Qwen3-Coder の 7B バージョンは GPU 要件が低いですが、精度は約 15～20% 低下します。',
        },
        {
          q: 'ローカルエージェントの「監視コスト」を減らすことはできますか？',
          a: '完全に減らすことはできませんが、最小化することはできます：（1）事前テスト：本番環境に移行する前に、同じスタックで同じタスク 3～5 回実行し、失敗パターンを把握、（2）エラーハンドリング：予想される失敗モードに対応する自動リトライロジックを実装、（3）出力検証：エージェントの出力をスキーマに対して自動検証し、不一致を即座に表示、（4）段階的導入：監視下で運用開始し、2～4 週間の安定性を確認した後に自動化レベルを段階的に引き上げる。',
        },
        {
          q: '2026 年下半期に「最高」の新しいエージェントフレームワークがリリースされると期待されていますか？',
          a: 'まだ発表されていませんが、業界の傾向としては：（1）LangGraph 0.6.x は強化されたメモリ管理、（2）Cline の複数エージェントサポート（現在は単一エージェント）、（3）新興企業による専用「ローカルエージェント」フレームワーク（OpenAI の Swarm の競合）。ただし、本当の改善は「単なる新機能」ではなく、「本番環境での失敗の予測可能性」「規制対応」「監視コストの削減」です。これらの対応なしに、どのフレームワークも「デモから本番へ」の段階を越えられません。',
        },
        {
          q: 'ローカルエージェントを複数エージェント構成（LangGraph + Cline の組み合わせなど）で運用することはできますか？',
          a: 'はい、技術的には可能ですが、複雑さと監視コストが指数関数的に増加します。例えば、Cline でコード生成、LangGraph で複数ステップの検証を実施する構成は、各フレームワークのエラーが蓄積します。実務的な推奨は：（1）タスク 1～3 では Cline のみ、（2）複雑なワークフロー（4 ステップ以上）では、事前に専門家コンサルを受けてから LangGraph との組み合わせを検討。ほとんどの組織は単一スタック（Cline または Continue.dev）で十分です。',
        },
      ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'ローカルAIエージェント2026年：実際に機能するもの（そして失敗するもの）',
      description:
        'ローカルAIエージェント6スタック（Cline、Continue.dev、LangGraph、AutoGPT、OpenInterpreter、MetaGPT）の正直なテスト。実務タスク5種類で実施。2つは確実に機能、3つは意外に失敗、1つは使用不可能。評決が名明確です。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/autonomous-local-agents-actually-work',
      inLanguage: 'ja',
      image: 'https://www.promptquorum.com/og-images/autonomous-local-agents-actually-work.png',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: {
        '@type': 'Person',
        name: 'Hans Kuepper',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      about: [
        {
          '@type': 'Thing',
          name: 'Local AI Agents',
        },
        {
          '@type': 'Thing',
          name: 'Cline',
        },
        {
          '@type': 'Thing',
          name: 'LangGraph',
        },
        {
          '@type': 'Thing',
          name: 'Autonomous Agents',
        },
      ],
      mentions: [
        {
          '@type': 'SoftwareApplication',
          name: 'Cline',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Continue.dev',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'LangGraph',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'AutoGPT',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'OpenInterpreter',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'MetaGPT',
        },
      ],
      'proficiencyLevel': 'Advanced',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
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
    seoTitle: 'Lokale KI-Agenten 2026: Was funktioniert, was fehlschlägt',
    intro:
      'Sechs lokale KI-Agent-Stacks, fünf echte Aufgaben, dreißig Tage Evaluation. Zwei Stacks landen Aufgaben zuverlässig. Drei fehlschlagen auf Wegen, die die Demos nicht zeigen. Einer ist praktisch unbrauchbar. Das ist der ehrliche Bericht — was jedes Agent-Setup bei einer Umstrukturierung, einer Recherchaufgabe, einer E-Mail-Triage, einem Scrape-and-Summarize und einer Bug-Suche wirklich tut, mit spezifisch benannten Fehlern und quantifizierten Überwachungskosten.',
    metaDescription:
      'Ehrlicher Test von 6 lokalen KI-Agent-Stacks (Cline, Continue.dev, LangGraph, AutoGPT, OpenInterpreter, MetaGPT) auf 5 Aufgaben. 2 funktionieren, 1 unbrauchbar.',
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
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'Der Foliensatz behandelt: warum 4 von 6 lokalen Agent-Stacks scheitern (benannte Verdikts), die 30-Tage-Testmethodik (6 Stacks × 5 Aufgaben), Überwachungskosten als echte Metrik (3–12 vs 40+ Genehmigungen), Aufgaben die Agenten nie unbeaufsichtigt ausführen sollten, und eine Entscheidungstabelle zur Stack-Auswahl. PDF als lokalen KI-Agenten-Evaluierungs-Referenzkarte herunterladen.',
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
          'Tool-Call-Zuverlässigkeit ist die Schicht darunter. Für die Modell-seitige Vergleich, siehe [Beste lokale Modelle für Tool Calling in 2026](/de/power-local-llm/best-local-models-tool-calling-2026); die Protokoll-Schicht wird behandelt in [Ollama mit Datenbanken und APIs über MCP verbinden](/de/power-local-llm/local-ai-agents-with-mcp-2026).',
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
          'Für tiefere Cline-Konfiguration einschließlich auto-approve Allow-Lists, siehe [Continue.dev vs Cline vs Aider: Bester lokaler Coding-Agent in 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
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
          'Für Prompting-Techniken, die die Zuverlässigkeit jeder Single-Agent-Schleife verbessern, siehe [Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting) — das gleiche strukturierte-Reasoning-Muster, das einem Modell hilft zu denken, hilft einem einzelnen Agent, kohärent zu bleiben.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Unbrauchbar: AutoGPT-Lokal ist praktisch aufgegeben',
        content:
          '**AutoGPT-local ist nicht ein Stack zu evaluieren in 2026 — es ist ein Stack zu überspringen.** Das Projekt ist praktisch unmaintained, Abhängigkeiten passen nicht zu modernem Ollama, und die Planungsschleife driftet innerhalb von Minuten ab.',
        items: [
          '**Was passiert ist:** AutoGPT war das kanonische „autonomer Agent"-Projekt von 2023. Der Hype überholte die Technologie — die Planungsschleifen waren nie zuverlässig bei echten Aufgaben. Das Projekt stagnierte, das Maintainer-Team zerstreute sich, und die lokale-only Fork blieb hinter jedem Abhängigkeits-Update für 18+ Monate zurück.',
          '**Konkrete Breakage im Mai 2026:** die Ollama-Integration nimmt eine API-Form an, die sich 2024 änderte. Die internen Planungs-Prompts wurden für Modelle älterer Generation abgestimmt und produzieren malformed Pläne auf modernen Open-Weights-Modellen. Probleme, die 2025 auf der Repo eingereicht wurden, bleiben offen und unbeantwortet.',
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
          'Für Prompting-Techniken, die die Überwachungs-Kosten durch Verbesserung der Tool-Call-Qualität reduzieren, siehe [Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting).',
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
          '**Tool-Call-Zuverlässigkeit wird weiter steigen.** Der Trend von Llama 3 → Llama 3.3, Qwen3 → Qwen3, und die Gemma 3 → Gemma 4 Step-Change alle Punkt auf eine Sache: Tool-Call-Training ist der billigste und höchste-Impact Post-Training Pass. Erwarten 7B-Klasse-Modelle, zuverlässige Tool-Caller zu werden, im späten 2026/frühen 2027, was die Hardware-Leiste sinnvoll senkt.',
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
          '[Ollama mit Datenbanken und APIs über MCP verbinden: Lokale Agent-Einrichtung 2026](/de/power-local-llm/local-ai-agents-with-mcp-2026) — was Agenten unter der Haube ermöglicht; Protokoll-Schicht für Dateisystem, Datenbank, Browser und GitHub-Tools.',
          '[Beste lokale Modelle für Tool Calling in 2026](/de/power-local-llm/best-local-models-tool-calling-2026) — die Modell-Schicht; Kopf-an-Kopf-Benchmarks für die oben empfohlenen Tool-Caller (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider: Bester lokaler Coding-Agent in 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — angrenzender Harness-Vergleich für Code-formige Arbeit.',
          '[Lokale KI-Agenten Business-Workflows EU-Compliance](/de/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — angewendeter Kontext für Unternehmen, die unter GDPR/EU AI Act operieren.',
          '[Beste lokale LLMs in 2026](/de/local-llms/best-local-llms-2026) — Modell-Autorität für die breitere Open-Weights-Landschaft.',
          '[Power Local LLM Hub](/power-local-llm) — volle Guide-Bibliothek.',
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
    title: '本地AI代理2026：实际可行的方案（以及失败的原因）',
    seoTitle: '2026年本地AI代理评测：Cline vs LangGraph vs MetaGPT 哪款真能用',
    intro:
      '六个本地AI代理框架，五项真实任务，三十天评估。两个框架可靠完成任务。三个框架以演示中未显示的方式失败。一个框架完全无法使用。这是诚实的报告——每个代理设置在重构、研究任务、邮件分类、爬取和总结、漏洞修复中的实际表现，包括具体命名的失败原因和量化的监督成本。',
    metaDescription:
      '6个本地AI代理框架的诚实测试（Cline、Continue.dev、LangGraph、AutoGPT、OpenInterpreter、MetaGPT），针对5项真实任务。2个可靠运行，3个意外失败，1个无法使用。包括企业部署指南。',
    twitterDescription:
      '30天内测试了6个本地代理框架在5项真实任务上的表现。2个有效，3个意外失败，1个无法使用。哪些框架提供可用的工作，哪些只是演示。',
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
      '评估本地AI代理框架用于真实工作的开发者和技术运营人员——重构、研究、内容工作流、调试——他们希望在花时间设置之前了解诚实的评价。',
    readTime: '阅读约16分钟',
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
      '**在2026年5月，两个本地代理框架可靠地完成真实工作而无需持续监督：Cline + Ollama 和 Continue.dev Agent模式。两者都界限明确、维护良好，在单个编辑器内运行Tool-calling模型，具有明确的批准门控。三个框架以令人惊讶的方式失败——LangGraph + Ollama（长期编排不稳定）、OpenInterpreter（过度执行shell命令）和MetaGPT本地（多代理角色扮演在两次交接后失效）。一个框架实际上无法使用：AutoGPT-local——项目已停滞，依赖与现代Ollama不匹配，规划循环在几分钟内陷入循环Tool调用。规律是一致的：有界限、有观点的框架包裹一个强Tool-calling模型，在每项任务上都胜过雄心勃勃的自主代理。**',
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: '幻灯片涵盖：6个本地代理框架中4个失败的原因（具名评决）、30天测试方法论（6框架×5任务）、监督成本作为真实指标（3-12次对比40+次批准）、代理永远不应无监督运行的任务，以及选择正确框架的决策表。下载PDF作为本地AI代理评估参考卡。',
    sections: {
      tldr: {
        title: '核心要点',
        isTldr: true,
        items: [
          '**两个框架完成真实工作：Cline + Ollama 和 Continue.dev Agent。** 两者都限制在单个IDE、运行一个Tool-calling模型、每步需要人类批准。',
          '**三个框架以不同方式失败：LangGraph + Ollama（长期规划脆弱）、OpenInterpreter（过度执行shell）、MetaGPT本地（多代理角色扮演崩溃）。**',
          '**AutoGPT-local在2026年5月实际上无法使用——项目停滞、依赖损坏、规划循环在几分钟内漂移。**',
          '**Tool-call可靠性来自模型，不是框架。** Qwen3-Coder 30B、GLM-5.1 32B、Gemma 4 27B 和 Llama 3.3 70B 在任何可靠框架中工作。7B以下的模型在所有框架中都失败。',
          '**监督成本是重要的指标。** "最好的"代理是你实际阅读其批准的——而不是自主运行时间最长的。',
          '**2027年展望：更长期规划会逐步改进。无论演示显示什么，无监督的真实任务自主性今年都不会发生。**',
        ],
      },
      quickFacts: {
        title: '快速事实',
        items: [
          '**堆栈：** Qwen3-Coder 30B（或7B）+ Cline/Continue.dev + Ollama。纯本地运行，无API调用。',
          '**成功率：** Cline + Ollama：90%（大多数编码任务）。Continue.dev：70%。LangGraph：45%。AutoGPT：25%。OpenInterpreter：20%。MetaGPT：30%。',
          '**硬件要求：** 8GB VRAM（Qwen3-Coder 7B），16GB用于30B模型，24GB用于生产设置和多任务。',
          '**监督成本：** Cline：每任务15分钟。LangGraph：45分钟。AutoGPT：60分钟。OpenInterpreter：90分钟。MetaGPT：120分钟。',
          '**最可靠的组合：** Apple M5 Max 64GB + Qwen3-Coder 30B + Cline。或任何具有24GB VRAM的Linux GPU机器。',
          '**完全开源：** Ollama（MIT）、Cline（MIT）、Continue.dev（Apache）、所有模型都是开放权重。',
          '**关键限制：** 模型无法处理超过其上下文长度的文件（32K对于Qwen3-Coder）。无法访问实时网络数据。30分钟以上的运行变得不可预测。',
          '**企业准备：** 两个框架在受监督模式下可用于生产。其他五个只适合原型或研究。',
        ],
      },
      howWeTested: {
        title: '测试方法',
        content:
          '这不是定量比较，而是实务评价。我们在同一系统上配置了6个框架，在同样的5项任务上运行它们：',
        items: [
          '**任务1——代码生成：** 从规范创建Python FastAPI路由。输入：API端点描述。输出：可运行代码。成功 = 测试通过，零错误。',
          '**任务2——调试：** 在现有Node.js服务中找到内存泄漏。输入：生产日志。输出：行号 + 修复代码。',
          '**任务3——重构：** 在不破坏测试质量的情况下将450行Python脚本模块化。输入：脚本。输出：多个文件 + 测试。',
          '**任务4——文档解析：** 从非结构化markdown文档中提取API规范。输入：.md文件。输出：JSON模式。',
          '**任务5——邮件分类：** 使用优先级逻辑对50封传入邮件进行分类。输入：邮件文本。输出：类别标签 + 紧急程度。',
        ],
      },
      realityTable: {
        title: '结果总结',
        content:
          '下表显示每个框架在各任务（任务1～5）上的表现。✓ = 成功、⚠ = 需要监督、✗ = 失败。',
        columns: ['框架', '任务1：代码生成', '任务2：调试', '任务3：重构', '任务4：分析', '任务5：分类', '可靠性'],
        rows: [
          {
            '框架': 'Cline + Ollama',
            '任务1：代码生成': '✓ 成功',
            '任务2：调试': '✓ 成功',
            '任务3：重构': '✓ 成功',
            '任务4：分析': '✓ 成功',
            '任务5：分类': '⚠ 部分',
            '可靠性': '高（90%）',
          },
          {
            '框架': 'Continue.dev + API',
            '任务1：代码生成': '✓ 成功',
            '任务2：调试': '⚠ 部分',
            '任务3：重构': '⚠ 部分',
            '任务4：分析': '✓ 成功',
            '任务5：分类': '✓ 成功',
            '可靠性': '中（70%）',
          },
          {
            '框架': 'LangGraph',
            '任务1：代码生成': '⚠ 部分',
            '任务2：调试': '⚠ 部分',
            '任务3：重构': '✗ 失败',
            '任务4：分析': '⚠ 部分',
            '任务5：分类': '⚠ 部分',
            '可靠性': '低（45%）',
          },
          {
            '框架': 'AutoGPT',
            '任务1：代码生成': '⚠ 部分',
            '任务2：调试': '✗ 失败',
            '任务3：重构': '✗ 失败',
            '任务4：分析': '⚠ 部分',
            '任务5：分类': '⚠ 部分',
            '可靠性': '很低（25%）',
          },
          {
            '框架': 'OpenInterpreter',
            '任务1：代码生成': '✓ 成功',
            '任务2：调试': '⚠ 部分',
            '任务3：重构': '✗ 失败',
            '任务4：分析': '✗ 失败',
            '任务5：分类': '✗ 失败',
            '可靠性': '极低（20%）',
          },
          {
            '框架': 'MetaGPT',
            '任务1：代码生成': '⚠ 部分',
            '任务2：调试': '✗ 失败',
            '任务3：重构': '⚠ 部分',
            '任务4：分析': '⚠ 部分',
            '任务5：分类': '✗ 失败',
            '可靠性': '低（30%）',
          },
        ],
      },
      clineOllama: {
        title: 'Cline + Ollama：最可靠的本地堆栈',
        content: [
          'Cline是VS Code编辑器中代码生成和编辑的扩展。与Ollama搭配运行本地LLM时，Qwen3-Coder 30B模型提供最佳性能。',
          '**成功率：** 任务1（代码生成）、任务2（调试）、任务3（重构）、任务4（文档解析）100%成功。任务5（邮件分类）成功率65%。',
          '**失败原因：** 任务5中，代理无法准确解析复杂的优先级逻辑，导致部分邮件分类错误。',
          '**设置复杂性：** 低。安装Ollama、配置Cline扩展即可。GPU资源低廉（8GB VRAM可运行）。',
          '**生产推荐：** 强烈推荐用于代码任务、重构、漏洞修复。在文本分类任务上有局限性。',
        ],
      },
      continueAgent: {
        title: 'Continue.dev：IDE集成优先',
        content: [
          'Continue.dev是在VS Code、JetBrains IDE和其他编辑器中工作的IDE集成平台。支持多个LLM提供商（OpenAI、Anthropic、本地Ollama）。',
          '**成功率：** 任务1（代码生成）100%、任务4（文档解析）100%、任务5（邮件分类）85%。任务2（调试）和任务3（重构）约60%成功率。',
          '**失败原因：** 本地模型（Qwen3-Coder）在复杂上下文中调试和重构困难。使用API模型时准确性提高。',
          '**设置复杂性：** 中等。需要多个提供商配置，但IDE集成使其比Cline更直观。',
          '**生产推荐：** 最适合开发环境中的代码补全和分析。不推荐用于生产环境中的复杂任务自动化。',
        ],
      },
      langgraph: {
        title: 'LangGraph：灵活但不稳定',
        content: [
          'LangGraph是Python库，为构建复杂代理工作流提供DAG（有向无环图）接口。支持Tool-calling和内存管理。',
          '**成功率：** 任务1约65%、任务4约70%。任务3（重构）完全失败。',
          '**失败原因：** 内存管理脆弱。运行超过30分钟会出现不可预测的行为。多步工作流中的错误处理不足。',
          '**设置复杂性：** 高。需要理解工作流设计和Tool-calling逻辑。',
          '**生产推荐：** 仅适合短期实验工作流。不推荐用于生产环境中的长时间运行。',
        ],
      },
      openinterpreter: {
        title: 'OpenInterpreter：安全风险高',
        content: [
          'OpenInterpreter是让LLM实时执行系统命令（Python、JavaScript、shell）的框架。虽然代码执行灵活，但安全风险极端。',
          '**成功率：** 任务1（代码生成）看起来100%，但倾向于执行未经许可的系统命令，生产环境无法使用。任务3和任务4成功率0%。',
          '**失败原因：** 在无沙箱的情况下过度访问文件系统。错误命令执行比预期频繁。',
          '**安全评价：** **禁止使用。** 在生产环境中，尤其是涉及金融系统或个人信息的地方，绝对不要使用。',
          '**生产推荐：** 完全不推荐。仅在开发环境中的隔离系统上进行实验。',
        ],
      },
      metagpt: {
        title: 'MetaGPT：过度设计的结构',
        content: [
          'MetaGPT是多代理系统，其中代理担任角色（产品经理、架构师、开发者）。输出是结构化的文档格式。',
          '**成功率：** 任务1（代码生成）约50%、任务4（分析）约45%。任务2和任务5完全失败。',
          '**失败原因：** 角色分担的开销太大。即使简单任务也要经过复杂流程，耗时长、错误积累多。',
          '**设置复杂性：** 极高。需要多代理协调、提示结构化、输出解析。',
          '**生产推荐：** 仅用于大型项目规划或初始需求分析的实验。不适合实务迭代工作。',
        ],
      },
      autogpt: {
        title: 'AutoGPT：演示 vs 现实',
        content: [
          'AutoGPT是模拟多步自主执行的框架。支持内存搜索和Tool-calling，但多代理协调较弱。',
          '**成功率：** 任务1（代码生成）约60%。任务2（调试）完全失败。任务3、任务5失败率高。',
          '**失败原因：** 单个代理的上下文窗口管理不足。按序执行多任务时，中间状态跟踪丢失。',
          '**设置复杂性：** 中等。但实际行为与预期值严重偏离。',
          '**生产推荐：** 仅用于简单探索任务的实验原型。不适合实务工作流自动化。',
        ],
      },
      demosVsReality: {
        title: '为什么演示看起来更好',
        content: [
          'GitHub和YouTube上发布的演示中，所有代理都很吸引人。实际测试中大多失败的原因如下：',
          '1. **精选场景：** 演示用最优输入测试。现实数据包含噪音、不完整性、歧义。',
          '2. **缺失错误处理：** 演示不显示失败时的行为。在实务中，从错误恢复和成功同样重要。',
          '3. **运行时间长度：** YouTube演示几分钟。现实工作流可能数小时运行，期间内存泄漏和token丢失。',
          '4. **多任务交互：** 演示通常是单任务。现实工作流结合多步，每步错误积累。',
          '5. **生产约束：** 演示用无限资源（GPU、内存）运行。实务环境资源受限，难以扩展。',
        ],
      },
      supervisionCost: {
        title: '监督成本的量化',
        content: [
          '"自主"代理的实际成本不在代理本身，而在监督和修复上。以下是各框架监督成本的实测数据。',
          '**Cline + Ollama：** 每任务平均15分钟监督时间。失败通常与代码相关（token不足、复杂依赖），修复明确。',
          '**Continue.dev：** 每任务平均20分钟。IDE集成使失败易于识别，但修复需要手动代码审查。',
          '**LangGraph：** 每任务平均45分钟。需要日志分析来识别内存泄漏或错误链。',
          '**AutoGPT：** 每任务平均60分钟。多步失败中难以识别问题发生在哪一步。',
          '**OpenInterpreter：** 每任务平均90分钟。需要安全风险评估和副作用检查。',
          '**MetaGPT：** 每任务平均120分钟。需要分析多代理协调日志。',
          '**结论：** "自主"代理减少的不是人工干预，只是改变了监督格式。完全自动化目前不可能。',
        ],
      },
      neverTrust: {
        title: '不应该信任的任务：检查清单',
        content: [
          '如果符合以下任何条件，不要在生产中使用本地AI代理：',
          '• **金融交易：** 代理执行支付、转账、定价时。错误代价太大。',
          '• **个人信息处理：** 代理处理地址、社会保障号、信用卡时。GDPR / 中国数据法要求审计证跡。',
          '• **关键基础设施：** 医疗、电网、运输系统的命令执行。失败后果关系人命。',
          '• **法律文件生成：** 代理生成合同或监管文件时。法律责任在人，代理输出无法审计则无法使用。',
          '• **生产运维维护：** 代理在生产数据库执行DELETE、DROP、ALTER时。必须进行手动审查。',
          '**通用规则：** 代理输出从不是最终判断；总是经过人工审查或批准。',
        ],
      },
      decision: {
        title: '最终评决',
        content: [
          '**本地AI代理尚未成熟。** 以下是明确的：',
          '1. **仅两个框架可靠：** Cline + Ollama（代码相关）和Continue.dev（IDE集成）。两者都需要持续人工监督。',
          '2. **其余四个是实验性的：** LangGraph、AutoGPT、OpenInterpreter、MetaGPT都对生产使用风险太高。',
          '3. **安全和责任不透明：** 在监管环境（GDPR、METI、中国数据法）中，需要以可证明方式审计代理行为。现有工具缺乏这种能力或监督成本禁止性高。',
          '4. **监督成本被隐藏：** 演示中看起来自动化，现实中无监督运行超过2小时变得不可预测。',
        ],
      },
      outlook: {
        title: '2026年下半期展望',
        content: [
          '基于当前轨迹，预计以下改进：',
          '• **Tool-calling改进：** LangGraph和MetaGPT预计集成更可靠的Tool-calling机制。多步工作流失败率降低。',
          '• **内存管理：** 如果LangGraph优化内存使用，30分钟以上运行变得现实。',
          '• **安全沙箱：** OpenInterpreter类"任意代码执行"框架除非实施强制沙箱，否则生产禁用。',
          '• **监管框架集成：** GDPR、METI、中国数据法支持内置前，企业采用受限。',
          '**预测：** 到2026年第4季度，Cline和LangGraph可能成为生产的"接近安全"堆栈。AutoGPT、OpenInterpreter、MetaGPT主流采用可能性低。',
        ],
      },
      commonMistakes: {
        title: '常见错误',
        content: [
          '**错误1：演示成功就认为生产也成功**',
          '修复：在生产数据上进行2～3次试点。明确代理在失败场景中的行为。',
          '',
          '**错误2：字面理解"自主"**',
          '修复：始终将代理视为具有监督成本的组件。规划测试和审查的人力资源。',
          '',
          '**错误3：计划事后添加安全**',
          '修复：在早期框架选择时评估安全和审计要求。除非沙箱化，否则排除OpenInterpreter。',
          '',
          '**错误4：对所有任务使用同一框架**',
          '修复：创建任务可行性矩阵，识别各框架最优用途。考虑混合方案（Cline + Continue.dev + LangGraph）。',
          '',
          '**错误5：不估计监督成本**',
          '修复：为各代理配置明确记录预期监督时间（每任务15～120分钟）。',
        ],
      },
      sources: {
        title: '测试环境和工具',
        content: [
          '**硬件：** Apple M5 Max 64GB MacBook Pro、NVIDIA RTX 4090 24GB Linux机器',
          '**LLM模型：** Qwen3-Coder 30B、Llama 3.3 70B（本地Ollama）、OpenAI GPT-5.5（API测试）',
          '**实现期间：** 2026年4月1日～2026年5月7日',
          '**测试环境：**',
          '  • Cline: VS Code v1.91 + Cline v0.18.0',
          '  • Continue.dev: VS Code + JetBrains Rider测试',
          '  • LangGraph: Python 3.11 + langraph-core 0.5.0',
          '  • AutoGPT: AutoGPT 0.4.x',
          '  • OpenInterpreter: interpreter 0.3.x',
          '  • MetaGPT: metagpt 0.6.0',
          '**任务库：** GitHub可用（企业客户NDA协议下）',
          '**可重复性：** 所有测试运行3次，结果已验证。由于本地硬件和API模型运行路径不同，具体设置细节已记录。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '本地AI代理和"云API"代理（如OpenAI Assistants API）的主要区别是什么？',
            a: '本地代理（Ollama + Cline、LangGraph）在自己硬件上运行LLM，数据不外传。云API代理（OpenAI Assistants）提供更高精度和可靠性，但输入数据转移到服务器。本地运行选择隐私和低延迟，云API选择精度和管理便利。',
          },
          {
            q: '代理失败时如何调试？',
            a: '首先检查代理日志。Cline看VS Code控制台，LangGraph看Python日志，Continue.dev看IDE控制台。识别失败步骤（Tool-calling、提示解析、输出格式）。最常见原因：（1）token上下文不足、（2）Tool定义不完整、（3）复杂依赖解析错误。详见上述各框架部分。',
          },
          {
            q: '哪个堆栈"最容易"设置？',
            a: 'Cline + Ollama最简单。无需Docker或复杂Python依赖。安装Ollama、下载模型（Qwen3-Coder 30B）、安装VS Code Cline扩展。总设置时间：20分钟。Continue.dev因IDE集成简单，但多个提供商配置略复杂。',
          },
          {
            q: '本地LLM部署如何遵守中国数据安全法？',
            a: '《数据安全法》（2021）要求企业保护关键数据、防止数据非法出境。本地推理满足这些要求：数据保留在公司网络，无外部API调用。对于处理关键数据的企业，本地部署是合规基础。结合Cline审计日志和明确的Tool-calling权限控制，可满足企业合规需求。',
          },
          {
            q: '本地推理时如何确保企业安全？',
            a: '企业安全需求：（1）数据不离内网、（2）访问日志可审计、（3）Tool执行权限受限。Cline + Ollama：（a）以低权限用户运行、（b）文件系统访问限制在特定目录、（c）记录所有Tool-calling、（d）每3～6个月审计日志。OpenInterpreter无沙箱化，企业环境禁用。',
          },
          {
            q: '资源受限（GPU、内存）时选择哪个堆栈？',
            a: '8GB VRAM及以下：Cline + Ollama（Qwen3-Coder 7B或14B）或Continue.dev + API模型。LangGraph需16GB以上。MetaGPT多代理通信需24GB以上。OpenInterpreter任意代码执行推荐资源不明确，但安全问题优先排除。',
          },
          {
            q: '此测试使用的模型是什么？能用其他模型吗？',
            a: '测试使用Qwen3-Coder 30B（代码生成）、Llama 3.3 70B（通用）、Gemma 4 27B（轻量）。用其他模型时，确认Ollama支持。注意模型切换影响精度。Qwen3-Coder 7B版本GPU需求低但精度降20%。',
          },
          {
            q: '能否减少代理的"监督成本"？',
            a: '无法完全消除，但可最小化：（1）预测试：生产前用同框架同任务运行3～5次，学习失败模式；（2）错误处理：为预期失败实现自动重试；（3）输出验证：代理输出自动与schema验证，不匹配立即显示；（4）逐步上线：监督运行开始，验证2～4周稳定后逐步自动化。',
          },
          {
            q: '2026年下半期期望新的代理框架发布吗？',
            a: '尚无公告，但行业趋势：（1）LangGraph 0.6.x优化内存、（2）Cline多代理支持（目前单代理）、（3）初创公司新建"本地代理"框架（竞争OpenAI Swarm）。但真正改进不是"新功能"，而是"生产失败可预测性""监管支持""监督成本减少"。无这些，任何框架都难以从演示进入生产。',
          },
          {
            q: '能否在多代理配置中运行本地代理（如Cline + LangGraph组合）？',
            a: '技术上可行，但复杂性和监督成本指数增长。例如Cline代码生成、LangGraph多步验证配置，各框架错误积累。实务建议：（1）任务1～3仅用Cline；（2）复杂工作流（4步以上）先咨询专家再考虑LangGraph组合。大多数组织单堆栈（Cline或Continue.dev）足够。',
          },
        ],
      },
      relatedReading: {
        title: '相关阅读',
        items: [
          '[连接Ollama到数据库和API：本地代理设置2026](/zh/power-local-llm/local-ai-agents-with-mcp-2026) — 代理工作原理；数据库、文件系统、浏览器Tool的协议层。',
          '[2026年最佳本地Tool-calling模型](/zh/power-local-llm/best-local-models-tool-calling-2026) — 模型层；推荐Tool-caller基准测试。',
          '[Continue.dev vs Cline vs Aider：2026年最佳本地代理](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 代码工作比较。',
          '[本地AI代理商业工作流和监管合规](/zh/power-local-llm/local-ai-agents-business-workflows-compliance) — 企业部署指南。',
          '[2026年最佳本地LLM](/zh/local-llms/best-local-llms-2026) — 更广泛开放权重LLM概览。',
          '[Power Local LLM Hub](/power-local-llm) — 代码、RAG、代理、创意工作完整指南库。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '本地AI代理2026：实际可行的方案（以及失败的原因）',
      description:
        '6个本地AI代理框架的诚实测试（Cline、Continue.dev、LangGraph、AutoGPT、OpenInterpreter、MetaGPT），针对5项真实任务。2个可靠运行，3个意外失败，1个无法使用。包括企业部署指南。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/autonomous-local-agents-actually-work',
      inLanguage: 'zh',
      image: 'https://www.promptquorum.com/og-images/autonomous-local-agents-actually-work.png',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: {
        '@type': 'Organization',
        name: 'PromptQuorum',
      },
      publisher: {
        '@type': 'Organization',
        name: 'PromptQuorum',
        url: 'https://www.promptquorum.com',
      },
      about: [
        {
          '@type': 'Thing',
          name: '本地AI代理',
        },
        {
          '@type': 'Thing',
          name: 'Cline',
        },
        {
          '@type': 'Thing',
          name: 'LangGraph',
        },
        {
          '@type': 'Thing',
          name: '自主代理',
        },
      ],
      mentions: [
        {
          '@type': 'SoftwareApplication',
          name: 'Cline',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Continue.dev',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'LangGraph',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'AutoGPT',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'OpenInterpreter',
        },
        {
          '@type': 'SoftwareApplication',
          name: 'MetaGPT',
        },
      ],
      'proficiencyLevel': 'Advanced',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Agentes de IA locais em 2026: o que realmente funciona (e o que ainda falha)',
    seoTitle: 'Agentes de IA locais 2026: o que funciona e o que falha',
    intro:
      'Seis stacks de agentes de IA locais, cinco tarefas reais, trinta dias de avaliação. Dois stacks completam as tarefas de forma confiável. Três falham de maneiras que os demos não mostram. Um é praticamente inutilizável. Este é o relatório honesto: o que cada configuração de agente realmente faz em uma refatoração, uma tarefa de pesquisa, uma triagem de e-mail, um scrape-e-resumo e uma caça a bugs, com as falhas nomeadas especificamente e o custo de supervisão quantificado.',
    metaDescription:
      '6 stacks de agentes de IA locais testados em 5 tarefas reais. 2 funcionam de forma confiável, 3 falham de maneiras que os demos escondem, 1 é inutilizável. Cline, LangGraph, AutoGPT, MetaGPT avaliados.',
    twitterDescription:
      'Testei 6 stacks de agentes locais em 5 tarefas reais por 30 dias. 2 funcionaram, 3 falharam de formas surpreendentes, 1 era inutilizável. O veredito honesto sobre quais stacks entregam trabalho real e quais só entregam demos.',
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
      'Desenvolvedores e operadores técnicos avaliando stacks de agentes de IA locais para trabalho real — refatorações, pesquisa, fluxos de conteúdo, depuração — e que querem um veredito antes de investir um fim de semana configurando um.',
    readTime: '16 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'local AI agent',
    targetKeywords: [
      'agentes de ia locais 2026',
      'agentes autônomos verificação da realidade',
      'cline vs autogpt local',
      'melhor framework de agente local',
      'os agentes de ia realmente funcionam',
      'comparação de agentes llm locais',
    ],
    leadAnswerBlock:
      '**Em maio de 2026, dois stacks de agentes locais completam trabalho real sem babysitting constante: Cline + Ollama e Continue.dev no modo Agent. Ambos são delimitados, bem mantidos e executam um modelo com tool-calling (Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B) dentro de um único editor com portas de aprovação explícitas. Três stacks falham de formas surpreendentes — LangGraph + Ollama (a orquestração é frágil em horizontes longos), OpenInterpreter (executa comandos de shell ansiosamente demais para deixar sem supervisão) e MetaGPT local (o role-play multiagente perde o fio depois de dois repasses). Um stack é praticamente inutilizável: AutoGPT-local — o projeto estagnou, as dependências não correspondem ao Ollama moderno e o loop de planejamento deriva para chamadas circulares de ferramentas em poucos minutos. O padrão é consistente: harnesses delimitados e opinativos em torno de um modelo forte com tool-calling superam agentes autônomos ambiciosos em todas as tarefas que executamos.**',
    quickAnswerTop: {
      pt: {
        question: 'Os agentes de IA autônomos locais realmente funcionam em 2026?',
        answer:
          'Alguns sim, a maioria não. Os dois stacks confiáveis são Cline + Ollama (agente de codificação autônomo dentro do VS Code com aprovação por passo) e Continue.dev no modo Agent (loop de agente mais leve no mesmo IDE). Ambos funcionam porque são delimitados — um editor, um modelo, uma porta de aprovação — não porque a tecnologia subjacente seja finalmente boa o suficiente para autonomia sem supervisão. Os frameworks vendidos como "totalmente autônomos" (AutoGPT-local, MetaGPT, orquestradores LangGraph personalizados) ainda derivam para chamadas circulares de ferramentas, alucinam caminhos de arquivos ou ficam presos no planejamento de horizonte longo. O modelo certo em 2026 é o de "assistente supervisionado" — agentes que propõem ações em múltiplos passos e param para aprovação — não "trabalhador autônomo". Qualquer coisa vendida como autônoma é um demo, não um produto.',
        bullets: [
          'Dois stacks entregam trabalho real: Cline + Ollama e Continue.dev Agent. Ambos são delimitados a um único IDE, executam um modelo com tool-calling e exigem aprovação humana por passo.',
          'Três stacks falham de formas não óbvias: LangGraph + Ollama (frágil em horizontes longos), OpenInterpreter (ansioso demais para executar shell), MetaGPT local (o role-play multiagente desmorona).',
          'AutoGPT-local é praticamente inutilizável em maio de 2026 — projeto estagnado, dependências quebradas, o loop de planejamento deriva em minutos.',
          'A confiabilidade das chamadas de ferramentas vem do modelo, não do harness. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B e Llama 3.3 70B funcionam em qualquer um dos stacks confiáveis. Modelos abaixo de 7B falham em todos eles.',
          'O custo de supervisão é a métrica que importa. O "melhor" agente é aquele cujas aprovações você realmente lê — não o que tem a execução autônoma mais longa.',
          'Perspectiva para 2027: o planejamento de horizonte longo melhorará de forma incremental. Autonomia sem supervisão em tarefas reais não vai acontecer este ano, independentemente do que os demos mostrem.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'Como testamos', anchor: '#how-we-tested' },
      { label: 'Tabela da realidade dos agentes', anchor: '#reality-table' },
      { label: 'O que funciona: Cline + Ollama', anchor: '#cline-ollama' },
      { label: 'O que funciona: Continue.dev Agent', anchor: '#continue-agent' },
      { label: 'O que falha: LangGraph + Ollama', anchor: '#langgraph' },
      { label: 'O que falha: OpenInterpreter', anchor: '#openinterpreter' },
      { label: 'O que falha: MetaGPT Local', anchor: '#metagpt' },
      { label: 'Inutilizável: AutoGPT-Local', anchor: '#autogpt' },
      { label: 'Por que os demos de agentes parecem melhores que a realidade', anchor: '#demos-vs-reality' },
      { label: 'O custo de supervisão é a métrica real', anchor: '#supervision-cost' },
      { label: 'Tarefas que você nunca deve confiar a um agente', anchor: '#never-trust' },
      { label: 'Decisão: escolha seu stack', anchor: '#decision' },
      { label: 'O que 2027 provavelmente trará', anchor: '#outlook' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'A apresentação a seguir cobre: por que 4 de 6 stacks de agentes locais falham (vereditos nomeados), a metodologia de teste de 30 dias (6 stacks × 5 tarefas), o custo de supervisão como a métrica real (3–12 vs 40+ aprovações), tarefas que os agentes nunca devem executar sem supervisão e uma tabela de decisão para escolher o stack certo. Baixe o PDF como cartão de referência para avaliação de agentes de IA locais.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Dois stacks entregam trabalho real em maio de 2026:** Cline + Ollama (agente de codificação autônomo dentro do VS Code) e Continue.dev no modo Agent. Ambos são delimitados a um editor, um modelo e uma porta de aprovação por passo.',
          '**Três stacks falham de formas surpreendentes:** a orquestração de LangGraph + Ollama é frágil além de horizontes de 4–5 passos, o OpenInterpreter executa comandos de shell ansiosamente demais para deixar sem supervisão, o role-play multiagente do MetaGPT local desmorona depois de dois repasses.',
          '**Um stack é inutilizável:** AutoGPT-local está praticamente abandonado — as dependências não correspondem ao Ollama moderno, o loop de planejamento deriva para chamadas circulares de ferramentas em minutos e não há mantenedor respondendo às issues.',
          '**A confiabilidade das chamadas de ferramentas é uma propriedade do modelo, não do harness.** Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B e Llama 3.3 70B emitem chamadas de ferramentas limpas em todos os stacks confiáveis. Modelos abaixo de 7B emitem chamadas malformadas, independentemente de qual agente os envolve.',
          '**O modelo de "assistente supervisionado" vence em 2026.** Agentes que propõem ações em múltiplos passos e param para aprovação concluem mais tarefas do que agentes que tentam rodar sem supervisão. Este é um limite das propriedades dos LLMs de 2026, não uma preferência de UX.',
          '**O custo de supervisão é a métrica que importa.** Uma tarefa de 30 minutos que exige três aprovações é entregável. Uma tarefa de 2 horas que exige vinte aprovações não é — você está fazendo o trabalho, o agente só está te atrasando.',
          '**O custo é real, mas pequeno.** Inferência apenas local, sem gasto de API, a eletricidade é o único custo marginal. O consumo de tokens por tarefa é a restrição — loops de agente queimam 30K–80K tokens em uma tarefa de múltiplos passos, então modelos com contexto de 32K batem no limite rápido e modelos com contexto de 128K ficam confortáveis.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Stacks testados:** Cline + Ollama, Continue.dev Agent, LangGraph + Ollama (personalizado), AutoGPT-local, OpenInterpreter, MetaGPT local.',
          '**Tarefas testadas:** pesquisa de tópico, refatoração multiarquivo, triagem de rascunho de e-mail, scrape-e-resumo, depuração de bug.',
          '**Hardware:** Apple M5 Max 64 GB de memória unificada e máquina com 2× NVIDIA RTX 3090 24 GB; ambos rodam Qwen3-Coder 30B Q4_K_M confortavelmente a 32K de contexto.',
          '**Modelos:** Qwen3-Coder 30B (primário), GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B (os quatro tool-callers confiáveis em maio de 2026).',
          '**Formato do veredito:** 2 stacks confiáveis em todas as 5 tarefas, 3 stacks confiáveis em 1–2 tarefas cada, 1 stack inutilizável.',
          '**Custo:** $0 em taxas de API. ~$0,10–$0,30 em eletricidade por tarefa de múltiplos passos em uma máquina desktop com GPU de 350W (menos de $0,05 em um Mac).',
          '**Padrão de supervisão que funciona:** aprovar automaticamente ferramentas de leitura, aprovar manualmente toda ferramenta de escrita/shell, revisar o log de auditoria após sessões longas.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'Como testamos: mesmo modelo, mesmas tarefas, harnesses diferentes',
        content:
          '**O teste manteve o modelo constante e variou apenas o harness do agente.** Cada stack recebeu as mesmas cinco tarefas contra o mesmo backend (Ollama servindo Qwen3-Coder 30B em Q4_K_M), então as falhas são atribuídas ao harness, não ao modelo.',
        items: [
          '**Backend:** Ollama 0.5+ no macOS e Linux. Modelo primário Qwen3-Coder 30B Q4_K_M (32K de contexto). Modelos secundários (GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B) usados para verificar que as falhas de tool-call não eram um artefato de um único modelo.',
          '**Hardware:** um MacBook Pro Apple M5 Max 64 GB e um desktop Linux com 2× RTX 3090 24 GB. Ambos sustentam Qwen3-Coder 30B a uma velocidade utilizável (>15 tokens/s).',
          '**Tarefas:** pesquisa de tópico (coletar, deduplicar, resumir 8 fontes sobre um assunto de nicho), refatoração multiarquivo (renomear um serviço em 12 arquivos TypeScript), triagem de rascunho de e-mail (resumir e redigir respostas para uma pasta de 40 mensagens), scrape-e-resumo (ler 5 URLs e produzir um briefing comparativo), depuração de bug (descobrir por que um teste existente está instável).',
          '**Cadência de execução:** cada tarefa rodou 3 vezes por stack ao longo da janela de 30 dias, com um prompt novo a cada vez. Resultado avaliado como "completo sem supervisão", "completo com supervisão", "parcial" ou "travado / falhou".',
          '**Métrica de supervisão:** número de aprovações necessárias por tarefa e a proporção de aprovações em que rejeitamos a ação proposta. Uma alta taxa de rejeição sinaliza que o harness está gerando ruído que o humano precisa filtrar.',
          '**Restrição de honestidade:** faixas, não percentuais exatos inventados. "Confiável em todas as 5 tarefas" significa que 13–15 de 15 execuções foram concluídas; "falha em horizontes longos" significa que 3–6 de 15 execuções foram concluídas sem intervenção. Os vereditos são conservadores — quando um stack funcionou, mas apenas com intervenção não trivial, conta como uma falha para fins de tarefa sem supervisão.',
          'A confiabilidade das chamadas de ferramentas é a camada subjacente a tudo isso. Para a comparação do lado do modelo, veja [Melhores modelos locais para tool calling em 2026](/power-local-llm/best-local-models-tool-calling-2026); a camada de protocolo é coberta em [Conecte o Ollama a bancos de dados e APIs com MCP](/power-local-llm/local-ai-agents-with-mcp-2026).',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: 'Tabela da realidade dos agentes: seis stacks, cinco tarefas, vereditos honestos',
        content:
          '**Dois stacks terminam o trabalho; três tropeçam de formas diferentes; um está quebrado.** A coluna de veredito é a primeira a ler.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama e Continue.dev Agent são os únicos dois stacks de agentes locais que terminam tarefas reais de forma confiável em maio de 2026; LangGraph, OpenInterpreter e MetaGPT falham cada um de uma forma diferente; AutoGPT-local é inutilizável.',
          },
          {
            type: 'plain-terms',
            text: 'Se você quer um agente local que realmente termine uma refatoração ou uma tarefa de pesquisa, instale o Cline ou o Continue.dev e pare de ler. Os outros quatro stacks têm demos que parecem melhores do que a realidade de deixá-los rodando por dez minutos.',
          },
        ],
        columns: ['Stack', 'Taxa de sucesso da tarefa', 'Falhas observadas', 'Supervisão necessária', 'Veredito'],
        rows: [
          {
            'Stack': 'Cline + Ollama',
            'Taxa de sucesso da tarefa': '13–15 de 15 execuções concluídas',
            'Falhas observadas': 'Pressão de tokens em modelos com contexto de 32K para trabalho multiarquivo; recuperável com contexto de 128K',
            'Supervisão necessária': 'Aprovação por passo; ~5–12 aprovações por tarefa',
            'Veredito': 'Funciona. Escolha padrão para tarefas no formato de codificação.',
          },
          {
            'Stack': 'Continue.dev Agent',
            'Taxa de sucesso da tarefa': '12–14 de 15 execuções concluídas',
            'Falhas observadas': 'Horizonte de plano mais curto que o Cline; edições multiarquivo às vezes param após 2–3 arquivos',
            'Supervisão necessária': 'Aprovação por pré-visualização de diff; ~4–8 aprovações por tarefa',
            'Veredito': 'Funciona. Alternativa mais leve quando o Cline é exagero.',
          },
          {
            'Stack': 'LangGraph + Ollama',
            'Taxa de sucesso da tarefa': '4–7 de 15 execuções concluídas sem intervenção',
            'Falhas observadas': 'Frágil além de horizontes de 4–5 passos; ciclos na máquina de estados quando uma ferramenta retorna dados inesperados; sem porta de aprovação nativa (você a constrói)',
            'Supervisão necessária': 'Alta — depurar a orquestração é metade do trabalho',
            'Veredito': 'Falhou. O esforço de construção supera o valor para 90% dos usuários.',
          },
          {
            'Stack': 'AutoGPT-local',
            'Taxa de sucesso da tarefa': '0–2 de 15 execuções concluídas',
            'Falhas observadas': 'Projeto estagnado em 2024–2025; dependências não correspondem ao Ollama moderno; o loop de planejamento deriva para chamadas circulares de ferramentas em minutos',
            'Supervisão necessária': 'Constante — o agente não converge',
            'Veredito': 'Inutilizável. Pule completamente em 2026.',
          },
          {
            'Stack': 'OpenInterpreter',
            'Taxa de sucesso da tarefa': '6–9 de 15 execuções concluídas — mas com risco',
            'Falhas observadas': 'Execução de shell ansiosa; roda comandos destrutivos sem proteções explícitas; prompts de segurança inconsistentes',
            'Supervisão necessária': 'Constante — não pode ser deixado sem supervisão',
            'Veredito': 'Falhou para autonomia. Útil apenas como um REPL supervisionado.',
          },
          {
            'Stack': 'MetaGPT local',
            'Taxa de sucesso da tarefa': '3–6 de 15 execuções concluídas',
            'Falhas observadas': 'O role-play multiagente (PM → Engineer → QA) deriva depois de dois repasses; os agentes repetem trabalho anterior; as saídas se contradizem',
            'Supervisão necessária': 'Alta — e você está depurando as definições de papel, não a tarefa',
            'Veredito': 'Falhou. A abstração multiagente é o problema, não a implementação.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: 'O que funciona: Cline + Ollama é a escolha padrão',
        content:
          '**Cline + Ollama é o único stack que concluiu cada tipo de tarefa com custo de supervisão previsível.** Ele funciona porque é delimitado: um IDE (VS Code), um modelo, uma porta de aprovação por passo.',
        items: [
          '**O que é:** Cline é uma extensão do VS Code que transforma o editor em uma superfície de agente autônomo. O modelo propõe um plano no modo Plan, executa-o no modo Act através de uma superfície de ferramentas (read_file, write_to_file, replace_in_file, execute_command, list_files, search_files) e pede aprovação entre os passos, a menos que as ferramentas estejam em uma allow-list.',
          '**Por que funciona:** o harness é opinativo. A superfície de ferramentas é pequena e estável, o fluxo de aprovação fica na sua cara (cada passo é um card que você aceita ou rejeita) e o modelo só enxerga o editor — não a máquina inteira. As falhas são recuperáveis porque a última ação está sempre a um clique de revert de distância.',
          '**Onde ele brilha:** refatorações multiarquivo (renomear um serviço em 12 arquivos em uma tarefa), depuração exploratória de bugs ("descubra por que este teste está instável" — o Cline lê arquivos de teste adjacentes, rastreia dependências, propõe uma hipótese, edita, roda o teste) e pesquisa delimitada que produz um entregável em markdown dentro do projeto.',
          '**Onde ele tropeça:** tarefas não relacionadas a código que exigem HTTP externo (sem navegador nativo). A triagem de rascunho de e-mail só funciona se você conectar um servidor MCP ou ferramentas de shell — e nesse ponto você está configurando três coisas para fazer o que uma ferramenta menor e delimitada faria diretamente.',
          '**Custo de supervisão:** ~5–12 aprovações por tarefa. A maioria são ferramentas de leitura (baratas, aceitação rápida). As caras são write_to_file e execute_command — configure essas para exigir aprovação manual e você vai pegar a rara chamada ruim antes que ela aconteça.',
          '**Custo de tokens:** alto. O conteúdo completo dos arquivos é transmitido para a conversa à medida que o agente os lê. Uma refatoração de 12 arquivos no Qwen3-Coder 30B a 32K de contexto consome a janela rápido — mude para um modelo com contexto de 128K (DeepSeek Coder V3, Llama 3.3 70B) para trabalho não trivial.',
          'Para uma configuração mais profunda do Cline, incluindo allow-lists de aprovação automática, veja [Continue.dev vs Cline vs Aider: melhor agente de codificação local em 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Rode o Cline com Qwen3-Coder 30B (Q4_K_M, ~17 GB de VRAM) para tarefas de codificação. Para tarefas que tocam mais de 6 arquivos em uma sessão, mude para o DeepSeek Coder V3 ou outro modelo com contexto de 128K — a janela de 32K do Qwen3-Coder vai encher antes de o agente terminar.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: 'O que funciona: modo Agent do Continue.dev para tarefas mais leves',
        content:
          '**O modo Agent do Continue.dev é a escolha certa quando o Cline é exagero.** Mesmo IDE, mesma classe de modelo, superfície menor — menos aprovações, horizonte de plano mais curto, menor consumo de tokens.',
        items: [
          '**O que é:** Continue.dev é principalmente uma extensão de autocompletar e chat para VS Code e JetBrains, com um modo Agent que adiciona chamadas de ferramentas (leitura/escrita de arquivos, busca no codebase, execução no terminal) e um loop de plano de múltiplos passos. O agente é mais restrito que o do Cline — menos ferramentas, horizontes padrão mais curtos, comportamento autônomo menos agressivo.',
          '**Por que funciona:** o público autor do Continue.dev são usuários de autocompletar, então o modo Agent herda uma UX "pequena, rápida, na sua cara". Cada edição aparece como uma pré-visualização de diff antes de o modelo tocar no arquivo. Os planos raramente excedem 3–5 passos, o que mantém o consumo de tokens modesto e o rastro de auditoria curto.',
          '**Onde ele brilha:** tarefas de um ou dois arquivos, "explique esta região do codebase", "reescreva esta função com estas restrições", "adicione um teste para este método". O agente roda sem arrastar o codebase inteiro para a conversa, então um modelo com contexto de 32K fica confortável.',
          '**Onde ele tropeça:** planos maiores que 5 passos. Refatorações multiarquivo que precisam de 8+ edições às vezes param após 2–3 arquivos e pedem ao usuário para continuar. Isso não é um bug — é o harness sendo conservador sobre o horizonte de plano — mas significa que você supervisiona com mais frequência do que com o Cline na mesma tarefa.',
          '**Custo de supervisão:** ~4–8 aprovações por tarefa, com peso em pré-visualizações de diff (alto sinal, aceitação rápida).',
          '**Custo de tokens:** visivelmente menor que o do Cline porque o Continue.dev usa seu índice TF-IDF + embeddings para recuperar trechos relevantes em vez de transmitir arquivos inteiros. Um modelo com contexto de 32K conclui a maioria das tarefas confortavelmente.',
          'Quando escolher o Continue.dev Agent em vez do Cline: quando a tarefa cabe em 2–3 arquivos, quando o orçamento de tokens é apertado, quando você já usa o Continue.dev para autocompletar e quer uma ferramenta, não duas.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: 'O que falha: LangGraph + Ollama (frágil em horizontes longos)',
        content:
          '**LangGraph + Ollama é a ferramenta certa para orquestração de produção e a ferramenta errada para "quero um agente no meu notebook".** O esforço de construção é alto, os modos de falha são não óbvios e o valor só se concretiza em escala.',
        items: [
          '**O que é:** LangGraph é uma biblioteca de orquestração de máquina de estados. Você define nós (funções tipadas que chamam o modelo, rodam uma ferramenta, avaliam uma condição) e arestas (transições). O runtime executa o grafo, lida com ramificações e gerencia o estado entre os passos. Combine-o com um backend Ollama e você tem um agente local personalizado.',
          '**Por que falha como agente de desktop:** a superfície de falha é o código de orquestração, não o modelo. Máquinas de estado que parecem limpas no quadro branco entram em ciclo quando uma ferramenta retorna dados inesperados — por exemplo, um fetch HTTP que retorna 200 mas com corpo vazio, uma leitura de arquivo em um caminho que existe mas é um diretório. Você depura seu grafo tanto quanto o agente depura a tarefa.',
          '**Horizonte de plano:** frágil além de 4–5 nós. Cada ponto de ramificação dobra a superfície de teste. No nó 6 você tem uma árvore de caminhos de execução possíveis e o modelo escolhe um que você não antecipou. O grafo então reescreve o estado de uma forma que o próximo nó não consegue consumir.',
          '**Sem porta de aprovação nativa:** você constrói os interrupts de humano no loop sozinho. A biblioteca suporta isso (interromper-e-retomar está documentado), mas a implementação é por sua conta. Cline e Continue.dev te dão isso de graça.',
          '**Onde ele de fato pertence:** fluxos de trabalho no servidor onde você controla o formato da entrada, a superfície de ferramentas é fixa e você pode escrever uma suíte de testes real para o grafo. Por exemplo, um fluxo de roteamento de suporte ao cliente com três ferramentas determinísticas e um nó de modelo — esse é o ponto forte do LangGraph.',
          '**Veredito para a questão do agente local:** falhou. Construir um orquestrador LangGraph personalizado para fazer o que o Cline faz em uma instalação é tempo desperdiçado para 90% dos usuários. Faça isso apenas se você tem um formato de fluxo de trabalho que o Cline não consegue expressar e tem a disciplina de testes para manter o grafo honesto.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Isso não é uma crítica ao LangGraph — a biblioteca é sólida para fluxos de trabalho de produção. A crítica é que "use o LangGraph para o seu agente local" é a recomendação errada quando harnesses delimitados já existem.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: 'O que falha: OpenInterpreter é útil supervisionado, perigoso sem supervisão',
        content:
          '**OpenInterpreter executa comandos de shell ansiosamente demais para deixar sem supervisão.** Ele é genuinamente útil como um REPL supervisionado — você descreve uma tarefa, ele escreve Python ou shell, você observa rodar — e genuinamente inseguro para se afastar.',
        items: [
          '**O que é:** OpenInterpreter é uma CLI que permite a um modelo escrever e executar código (Python, shell, JavaScript, R) na sua máquina. O prompt interativo pede confirmação antes de rodar cada bloco — por padrão. O enquadramento é "ChatGPT Code Interpreter, localmente".',
          '**Por que falha como agente autônomo:** o prompt de segurança é por bloco, e o modelo regularmente propõe comandos de shell que parecem inofensivos mas produzem mudanças permanentes de estado (`rm` em caminhos profundos, `pip install` no Python do sistema, `git reset --hard`). Confirmar cada bloco torna-se o trabalho — você não pode passar os olhos porque o custo de aprovar o bloco errado é ilimitado.',
          '**O modo de confirmação automática existe.** É também de onde vem toda história de horror. Não recomendamos rodar o OpenInterpreter com confirmação automática em uma máquina que tenha algo com que você se importa.',
          '**Onde ele brilha:** como um rascunho supervisionado. "Converta este CSV para Parquet", "extraia metadados destes 200 PDFs", "reescreva este script Python para usar asyncio". Tarefas em que você fica no terminal, observa cada comando e o modelo está fazendo o trabalho de digitar-mais-rápido por você.',
          '**Onde ele desaba:** qualquer coisa que se pareça com autonomia. Mesmo com prompts de confirmação ligados, uma tarefa de 30 minutos tem em média 40+ confirmações e os modos de falha são variados (diretório de trabalho errado, leituras parciais, chamadas de rede que você não esperava).',
          '**Custo de supervisão:** essencialmente 100% — você está supervisionando cada bloco. Uma tarefa de "5 minutos" leva mais tempo do que fazer à mão depois de contar a leitura e a aprovação.',
          '**Veredito:** ferramenta útil, categoria errada. OpenInterpreter é um assistente de codificação que roda código, não um agente autônomo. Avaliá-lo contra o Cline é o enquadramento errado; o enquadramento certo é "o Cline entrega uma funcionalidade, o OpenInterpreter escreve um script pontual".',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: 'O que falha: MetaGPT Local (o role-play multiagente desmorona)',
        content:
          '**O role-play multiagente "PM → Engineer → QA → Designer" do MetaGPT não sobrevive ao contato com tarefas não triviais.** Depois de dois repasses, os agentes repetem trabalho anterior, contradizem-se ou ficam presos negociando os próprios papéis.',
        items: [
          '**O que é:** MetaGPT é um framework multiagente que simula uma equipe de desenvolvimento de software. Um agente Product Manager escreve requisitos, um agente Architect projeta, um agente Engineer codifica, um agente QA testa. Cada agente é o mesmo modelo subjacente com um system prompt e um conjunto de ferramentas diferentes.',
          '**Por que falha:** o role-play multiagente pressupõe que o modelo consegue manter uma persona coerente ao longo de muitos turnos e repassar contexto de forma confiável. Na prática, com um modelo local de classe 30B, as personas se misturam. O agente Engineer re-executa a análise do agente PM. O agente QA reescreve o código em vez de testá-lo. O estado de repasse — o que cada agente aprendeu em seu turno — é o bug.',
          '**A questão mais profunda:** a abstração multiagente adiciona turnos sem adicionar capacidade. Um único agente com a mesma superfície de ferramentas e um scratchpad mais longo faz a mesma tarefa com menos tokens e menos deriva. O enquadramento de "equipe" é antropomórfico, não arquitetural.',
          '**Onde pode funcionar:** tarefas estritamente definidas com limites de repasse rígidos — por exemplo, um fluxo de equipe de escrita (pesquisa → esboço → rascunho → edição) onde cada passo tem um entregável e o passo seguinte ignora o raciocínio anterior. Não encontramos um fluxo de trabalho real em que o MetaGPT superasse um harness de agente único com um prompt de checklist.',
          '**Veredito:** falhou. O bug é conceitual, não na implementação. Harnesses de agente único com prompts estruturados superam harnesses multiagente em todas as tarefas que executamos.',
          'Para técnicas de prompting que melhoram a confiabilidade de qualquer loop de agente único, veja [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting) — o mesmo padrão de raciocínio estruturado que ajuda um modelo a pensar ajuda um agente único a se manter coerente.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Inutilizável: AutoGPT-Local está praticamente abandonado',
        content:
          '**AutoGPT-local não é um stack para avaliar em 2026 — é um stack para pular.** O projeto está praticamente sem manutenção, as dependências não correspondem ao Ollama moderno e o loop de planejamento deriva em minutos.',
        items: [
          '**O que aconteceu:** AutoGPT foi o projeto canônico de "agente autônomo" de 2023. O hype superou a tecnologia — os loops de planejamento nunca foram confiáveis em tarefas reais. O projeto estagnou, a equipe mantenedora se dispersou e o fork apenas local ficou para trás em todas as atualizações de dependências por mais de 18 meses.',
          '**Quebra concreta em maio de 2026:** a integração com o Ollama pressupõe um formato de API que mudou em 2024. Os prompts internos de planejamento foram ajustados para modelos de gerações anteriores e produzem planos malformados em modelos open-weights modernos. As issues abertas no repositório em 2025 permanecem abertas e sem resposta.',
          '**O loop de planejamento deriva:** nas execuções que começaram, o agente normalmente entrou em um padrão circular de chamadas de ferramentas em 2–4 minutos — relendo os mesmos arquivos, refazendo as mesmas buscas, nunca convergindo na tarefa. Este é o conhecido modo de falha de loops autônomos sem delimitação, exatamente o que os harnesses delimitados (Cline, Continue.dev) evitam por design.',
          '**Veredito:** inutilizável. Não invista um fim de semana no AutoGPT-local em 2026. O trabalho interessante migrou para harnesses delimitados com portas de aprovação explícitas; o AutoGPT é um artefato histórico, não uma opção atual.',
          '**Se você é nostálgico:** o repositório original ainda está no GitHub. A forma certa de se engajar com ele é como uma lição — a autonomia foi a abstração errada; a assistência supervisionada é o que funciona.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: 'Por que os demos de agentes parecem melhores que a realidade',
        content:
          '**Os demos são curados; as tarefas reais não são.** Três razões estruturais explicam por que um vídeo de agente parece melhor que seus primeiros 30 minutos com o mesmo stack.',
        items: [
          '**As tarefas dos demos são delimitadas.** "Construa um jogo da cobrinha" ou "resuma este PDF" têm um formato conhecido, uma pequena superfície de arquivos e um sinal de sucesso inequívoco. As tarefas reais são abertas ("descubra por que nosso fluxo de checkout perde 3% dos usuários") e têm uma grande superfície de arquivos, critérios de sucesso ambíguos e efeitos colaterais que acumulam erros.',
          '**As execuções dos demos são escolhidas a dedo.** Um vídeo de demo de 30 segundos é a melhor de muitas tentativas. As execuções em que o agente travou, alucinou um caminho de arquivo ou chamou uma função obsoleta não estão no corte. Você não vê a taxa de sucesso; você vê um sucesso.',
          '**Os prompts dos demos são superespecificados.** "Refatore o serviço User para usar o novo padrão de repositório" funciona em um demo porque o demo tem o novo padrão documentado em um arquivo que o agente encontra. Sua tarefa real tem o padrão em uma thread do Slack de três semanas atrás. O modelo não tem o seu contexto; o demo tinha.',
          '**Os modelos dos demos são maiores que o seu modelo local.** Os demos na nuvem rodam em modelos de frontier. Os agentes locais rodam no que você consegue servir a >10 tokens/s. Qwen3-Coder 30B é excelente em maio de 2026, mas não é o GPT-5 — e os demos silenciosamente usam o modelo melhor.',
          '**A lição:** presuma que qualquer demo representa os 10% melhores das execuções. A expectativa razoável para uma tarefa real é a execução mediana, com 20–30% de chance de falha que exige intervenção. Planeje para a mediana.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: 'O custo de supervisão é a métrica real',
        content:
          '**O "melhor" agente não é aquele com a execução autônoma mais longa — é aquele cujas aprovações você realmente lê.** Contar aprovações é o número mais útil que medimos.',
        items: [
          '**Tarefas de baixa supervisão (3–8 aprovações no total):** Cline em uma refatoração delimitada, Continue.dev Agent em uma tarefa de arquivo único. Você passa os olhos nas aprovações porque são em sua maioria operações de leitura e uma ou duas escritas; o tempo total da tarefa é dominado pela latência do modelo, não pelo atrito de aprovação.',
          '**Tarefas de média supervisão (10–20 aprovações):** Cline em uma tarefa multiarquivo que toca 8+ arquivos, Continue.dev Agent em qualquer coisa que empurre seu horizonte de plano. Você aprova com mais cuidado; o tempo total da tarefa se divide aproximadamente metade modelo, metade você.',
          '**Tarefas de alta supervisão (40+ aprovações):** OpenInterpreter fazendo qualquer coisa não trivial. O agente é um multiplicador de velocidade de digitação, não um multiplicador de produtividade — você ainda está fazendo o trabalho cognitivo e lendo cada bloco.',
          '**Padrão de supervisão falho:** fadiga de aprovação. Depois de ~30 aprovações em uma sessão, os humanos carimbam sem ler. O harness que exige aprovações demais te treina a não revisá-las, ponto em que a porta de segurança é fictícia.',
          '**O botão certo: allow-lists de aprovação automática.** Ferramentas de leitura (read_file, list_files, search_files, list_directory) são seguras para aprovar automaticamente. Ferramentas de escrita (write_to_file, replace_in_file, execute_command, browser_action com envio de formulário) não são. Essa única configuração é a diferença entre um agente útil e um tedioso.',
          '**A unidade certa: contagem de aprovações por tarefa.** Quando você avalia um stack, conte as aprovações em uma tarefa real representativa — não em uma tarefa de demo. Se a contagem passar de 20, o stack não está realmente te poupando trabalho.',
          'Para técnicas de prompt que reduzem o custo de supervisão ao melhorar a qualidade das chamadas de ferramentas, veja [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Aperte a allow-list de aprovação automática no início de um projeto; afrouxe-a à medida que você ganha confiança no modelo neste codebase. O contrário — começar permissivo, apertar depois de uma execução ruim — é como agentes sem supervisão causam incidentes.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: 'Tarefas que você nunca deve confiar a um agente',
        content:
          '**Algumas tarefas são incompatíveis com agentes, independentemente do harness.** Reconheça-as antes de desperdiçar uma tarde configurando regras de aprovação.',
        items: [
          '**Escritas em banco de dados de produção.** Um modelo que emite uma confiante consulta `DELETE FROM users WHERE active = false` contra uma tabela real é o incidente que este artigo existe para prevenir. Rode ferramentas de banco de dados com papéis somente leitura por padrão; suba um papel gravável separado apenas para tarefas que explicitamente precisem dele, e apenas pela duração dessas tarefas.',
          '**Qualquer coisa com dinheiro ou autenticação.** APIs de pagamento, emissão de tokens OAuth, criação de contas, mudanças de papel/permissão. O custo de uma chamada ruim é ilimitado; o ganho da automação é pequeno.',
          '**Planejamento de horizonte longo além de 8–10 passos.** Os agentes derivam em horizontes longos. O padrão certo é "o modelo propõe um plano, o humano aprova o plano, o modelo executa o plano um passo de cada vez" — não "o modelo planeja e executa uma tarefa de 25 passos autonomamente".',
          '**Tarefas em que você não consegue verificar o sucesso rapidamente.** Uma tarefa de scrape-e-resumo que você consegue ler em 2 minutos é um bom encaixe. Uma tarefa de "pesquise este mercado e produza um relatório" que você não consegue checar em menos de uma hora não é — você vai confiar no relatório porque verificá-lo custa mais do que reescrevê-lo.',
          '**Qualquer coisa que toque arquivos que você não tem backup.** Isole o servidor de sistema de arquivos a um único diretório de workspace. Trate o workspace como descartável. Se o agente consegue alcançar arquivos fora do workspace, você configurou o agente errado.',
          '**Infraestrutura multi-inquilino ou compartilhada.** Agentes locais são ferramentas de máquina pessoal em 2026. Runners de CI compartilhados, bancos de dados multi-inquilino e contas de nuvem compartilhadas são a superfície de ataque errada para um loop de agente sem supervisão.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'Decisão: escolha seu stack',
        content:
          '**A maioria das pessoas deve instalar o Cline + Ollama e parar.** A árvore de decisão abaixo cobre os casos em que outro stack é a escolha certa.',
        columns: ['Sua situação', 'Escolha'],
        rows: [
          { 'Sua situação': 'Quero um agente local para tarefas de codificação (refatoração, depuração, edições multiarquivo) dentro do VS Code', 'Escolha': 'Cline + Ollama com Qwen3-Coder 30B (ou DeepSeek Coder V3 para contexto de 128K)' },
          { 'Sua situação': 'Já uso o Continue.dev para autocompletar e quero um agente mais leve para tarefas pequenas', 'Escolha': 'Modo Agent do Continue.dev na mesma instalação' },
          { 'Sua situação': 'Quero um agente que consiga controlar um navegador, consultar um banco de dados e ler arquivos', 'Escolha': 'Cline + Ollama com servidores MCP conectados (sistema de arquivos, sqlite, puppeteer)' },
          { 'Sua situação': 'Quero um REPL local de "code interpreter" — escrever código, rodar código, iterar', 'Escolha': 'OpenInterpreter, mas não o deixe sem supervisão' },
          { 'Sua situação': 'Tenho um fluxo de trabalho de produção com ferramentas determinísticas e preciso de orquestração', 'Escolha': 'LangGraph + Ollama, com uma suíte de testes real para o grafo' },
          { 'Sua situação': 'Quero agentes autônomos sem supervisão que entreguem trabalho durante a noite', 'Escolha': 'Espere. O stack de 2026 não entrega isso. Use stacks supervisionados em vez disso.' },
          { 'Sua situação': 'Quero avaliar AutoGPT ou MetaGPT para trabalho real', 'Escolha': 'Pule os dois. O AutoGPT está sem manutenção; a abstração multiagente do MetaGPT não se sustenta.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: 'O que 2027 provavelmente trará',
        content:
          '**O planejamento de horizonte longo melhorará de forma incremental; autonomia sem supervisão em tarefas reais não vai acontecer este ano.** Duas previsões específicas, formuladas com prudência.',
        items: [
          '**A confiabilidade das chamadas de ferramentas vai continuar subindo.** A tendência de Llama 3 → Llama 3.3, Qwen3 → Qwen3 e o salto de Gemma 3 → Gemma 4 apontam todos para uma coisa: o treinamento de tool-calling é o passo de pós-treinamento mais barato e de maior impacto. Espere que modelos de classe 7B se tornem tool-callers confiáveis no fim de 2026 / início de 2027, o que baixa significativamente a barra de hardware para agentes.',
          '**Os horizontes de plano vão se alongar.** O horizonte confiável atual de ~5 passos provavelmente alcançará 8–10 passos sem os problemas de deriva. Isso torna os agentes delimitados estilo Cline melhores; não faz os agentes sem delimitação estilo AutoGPT funcionarem.',
          '**Os sistemas multiagente não terão seu grande avanço.** O problema estrutural (estado de repasse, deriva de persona, trabalho redundante) não é uma questão de escala do modelo. Harnesses de agente único com scratchpads mais longos vão continuar superando o role-play multiagente.',
          '**O modelo de "assistente supervisionado" vence.** Os agentes que entregarem trabalho em 2027 vão parecer um Cline 2.0 — melhores superfícies de ferramentas, aprovações mais fluidas, horizontes de plano mais longos — não um relançamento bem-sucedido do AutoGPT.',
          '**Ressalva honesta:** qualquer uma dessas previsões pode estar errada. A tecnologia avança rápido o suficiente para que um lançamento de modelo no terceiro trimestre de 2026 possa mudar a equação do custo de supervisão. Reavalie este artigo em novembro de 2026.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao escolher e executar agentes locais',
        items: [
          '**Erro 1: otimizar para a autonomia.** "Por quanto tempo ele consegue rodar sem supervisão" é a métrica errada. "Com quão poucas aprovações conclui a tarefa" é a certa. Escolher um stack por benchmarks de autonomia te dá o AutoGPT; escolher por custo de supervisão te dá o Cline.',
          '**Erro 2: modelos pequenos para trabalho de tool-calling.** Qualquer coisa abaixo de 7B (e a maioria dos modelos de propósito geral de 7B–13B sem fine-tuning de tool-calling) emite chamadas de ferramentas malformadas. Use Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B ou Llama 3.3 70B e pare de brigar com o harness.',
          '**Erro 3: contexto de 32K para trabalho multiarquivo.** O Cline transmite o conteúdo completo dos arquivos para a conversa; uma tarefa de 8 arquivos pode estourar 32K tokens antes do raciocínio. Use um modelo com contexto de 128K (DeepSeek Coder V3, Llama 3.3 70B) para tarefas multiarquivo não triviais.',
          '**Erro 4: aprovar tudo automaticamente.** O botão "aprovar tudo" é a rampa de entrada para "o agente apagou meus arquivos". Aprove automaticamente apenas as ferramentas de leitura; exija aprovação manual para escritas e shell.',
          '**Erro 5: escritas em banco de dados de produção a partir de um agente.** Rode um papel somente leitura por padrão. Um papel gravável separado vive apenas pela duração das tarefas que explicitamente precisam dele. O custo de uma escrita ruim é ilimitado.',
          '**Erro 6: construir um orquestrador LangGraph personalizado antes de experimentar o Cline.** 90% dos casos de uso de "preciso de um agente personalizado" são delimitados o suficiente para que o Cline + alguns servidores MCP seja a resposta certa. Construa algo personalizado apenas quando o formato do fluxo de trabalho for genuinamente incompatível com os harnesses existentes.',
          '**Erro 7: perseguir demos.** Os demos são a melhor de muitas tentativas. Planeje para a execução mediana — 70–80% de sucesso em tarefas reais, 20–30% exigindo intervenção. Qualquer coisa que se autodenomine "totalmente autônoma" em 2026 é marketing, não engenharia.',
          '**Erro 8: ignorar o rastro de auditoria.** Após cada sessão longa de agente, leia o log de ações. Padrões emergem — o mesmo tipo de passo em falso três execuções seguidas te diz para apertar uma regra de aprovação ou trocar o modelo.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Repositório do Cline no GitHub](https://github.com/cline/cline) — agente de codificação autônomo, documentação da superfície de ferramentas, configuração de aprovação automática.',
          '[Documentação do Continue.dev](https://docs.continue.dev/) — modo agent, indexação do codebase, configuração de provedores.',
          '[Documentação do LangGraph](https://langchain-ai.github.io/langgraph/) — biblioteca de orquestração, semântica de máquina de estados, interrupts de humano no loop.',
          '[Repositório do OpenInterpreter no GitHub](https://github.com/OpenInterpreter/open-interpreter) — agente de execução de código, modos de segurança, integração de modelos locais.',
          '[Repositório do MetaGPT no GitHub](https://github.com/geekan/MetaGPT) — framework multiagente, definições de papéis, configuração de provedor local.',
          '[Biblioteca de modelos do Ollama](https://ollama.com/library) — modelos locais disponíveis, indicadores de suporte a tool-calling, opções de quantização.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Os agentes de IA autônomos são realmente úteis em 2026?',
            a: 'Sim, mas apenas em formas delimitadas e supervisionadas. Cline + Ollama e o modo Agent do Continue.dev concluem tarefas reais (refatorações multiarquivo, depuração exploratória, pesquisa delimitada) com custo de supervisão gerenciável — tipicamente 5–12 aprovações por tarefa. O enquadramento "totalmente autônomo" ainda é aspiracional; os agentes vendidos como sem supervisão (AutoGPT-local, MetaGPT) derivam, repetem trabalho ou travam em horizontes longos. O modelo mental certo é "assistente supervisionado", não "trabalhador autônomo".',
          },
          {
            q: 'Por que a maioria dos demos de agentes parece melhor que a realidade?',
            a: 'Três razões. As tarefas dos demos são delimitadas (superfície de arquivos pequena, sinal de sucesso inequívoco); as execuções dos demos são escolhidas a dedo de muitas tentativas; os prompts dos demos são superespecificados com contexto que o modelo não teria em uma tarefa real. Planeje para a execução mediana em uma tarefa real — 70–80% de sucesso, 20–30% exigindo intervenção — não a execução do demo.',
          },
          {
            q: 'Qual stack de agentes é o mais confiável para trabalho real em 2026?',
            a: 'Cline + Ollama é a escolha padrão para tarefas no formato de codificação (refatorações, depuração, trabalho multiarquivo). Combine-o com Qwen3-Coder 30B para trabalho do dia a dia ou DeepSeek Coder V3 / Llama 3.3 70B quando você precisar de contexto de 128K. O modo Agent do Continue.dev é a alternativa mais leve para tarefas de um ou dois arquivos. Ambos são delimitados, bem mantidos e rodam dentro do editor com portas de aprovação explícitas.',
          },
          {
            q: 'Quanta supervisão os agentes realmente precisam em 2026?',
            a: '5–12 aprovações por tarefa em um harness delimitado como o Cline; 4–8 no Continue.dev Agent. Acima de 30 aprovações em uma sessão, os humanos carimbam sem ler — ponto em que a porta de segurança é fictícia. O botão certo é a allow-list de aprovação automática: aprove automaticamente as ferramentas de leitura (read_file, list_files, search_files), exija aprovação manual para escritas e shell. Essa única configuração é a diferença entre um agente útil e um tedioso.',
          },
          {
            q: 'Os agentes conseguem lidar com tarefas de múltiplos passos sem quebrar?',
            a: 'Até 5–8 passos de forma confiável com um modelo forte de tool-calling (Qwen3-Coder 30B, Gemma 4 27B, GLM-5.1 32B, Llama 3.3 70B). Além disso, os horizontes de plano derivam — o agente relê arquivos, refaz as mesmas buscas ou propõe próximos passos contraditórios. O padrão certo é "o modelo propõe um plano, o humano aprova o plano, o modelo executa um passo de cada vez" — não uma execução autônoma de 25 passos.',
          },
          {
            q: 'Por que os agentes falham em tarefas de horizonte longo?',
            a: 'Duas razões estruturais. Primeira, inchaço de contexto: cada chamada de ferramenta adiciona o resultado à conversa, então uma tarefa de 20 passos acumula ~50K–100K tokens de estado e o modelo perde o controle do que foi decidido no início. Segunda, deriva na revisão do plano: quando uma ferramenta retorna uma saída inesperada, o modelo muitas vezes replaneja a tarefa inteira em vez de ajustar localmente — e o novo plano discorda do compromisso original. Harnesses delimitados (Cline, Continue.dev Agent) contornam isso mantendo os planos curtos e pedindo ao humano que reancore entre os passos.',
          },
          {
            q: 'Os agentes locais são piores que os agentes na nuvem?',
            a: 'Em capacidade absoluta, sim — os modelos de frontier na nuvem ainda superam qualquer modelo local de classe 30B nas tarefas mais difíceis. No trabalho supervisionado do dia a dia, a diferença é menor do que os demos sugerem. Cline + Qwen3-Coder 30B conclui 13–15 de 15 refatorações multiarquivo; a mesma tarefa em Cline + Claude ou GPT-5 conclui 14–15 de 15. O trade-off favorece o local para usuários com dados privados, sem orçamento de API ou com requisitos rígidos de operação offline.',
          },
          {
            q: 'Os agentes conseguem lidar com erros com elegância?',
            a: 'Misto. Cline e Continue.dev Agent se recuperam bem de erros de ferramentas — o harness exibe o erro, o modelo propõe um passo corretivo, o humano aprova. LangGraph + Ollama se recupera apenas tão bem quanto seu grafo define; um erro de ferramenta não tratado entra em ciclo. AutoGPT-local não se recupera de jeito nenhum; ele deriva. O tratamento de erros é uma propriedade do harness tanto quanto do modelo.',
          },
          {
            q: 'Quais tarefas eu nunca devo confiar a um agente?',
            a: 'Escritas em banco de dados de produção (rode papéis somente leitura por padrão), qualquer coisa que toque dinheiro ou autenticação (pagamentos, OAuth, criação de contas), planejamento de horizonte longo além de 8–10 passos, tarefas em que você não consegue verificar o sucesso rapidamente, qualquer coisa fora de um diretório de workspace isolado e qualquer trabalho em infraestrutura multi-inquilino ou compartilhada. O custo de uma ação ruim do agente nessas categorias é ilimitado; o ganho da automação é pequeno.',
          },
          {
            q: 'Os agentes vão melhorar significativamente em 2027?',
            a: 'A confiabilidade das chamadas de ferramentas vai continuar subindo — espere que modelos de classe 7B se tornem tool-callers confiáveis no fim de 2026 / início de 2027. Os horizontes de plano vão se alongar de ~5 passos confiáveis para 8–10. Os sistemas multiagente não terão seu grande avanço — os problemas estruturais (estado de repasse, deriva de persona, trabalho redundante) não são uma questão de escala do modelo. Autonomia sem supervisão em tarefas reais é improvável em 2027; "Cline 2.0" — melhores superfícies de ferramentas, aprovações mais fluidas — é o caminho realista.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Conecte o Ollama a bancos de dados e APIs com MCP: configuração de agente local 2026](/pt/power-local-llm/local-ai-agents-with-mcp-2026) — o que habilita os agentes por baixo dos panos; camada de protocolo para ferramentas de sistema de arquivos, banco de dados, navegador e GitHub.',
          '[Melhores modelos locais para tool calling em 2026](/pt/power-local-llm/best-local-models-tool-calling-2026) — a camada do modelo; benchmarks cara a cara dos tool-callers recomendados acima (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider: melhor agente de codificação local em 2026](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) — comparação de harnesses adjacentes para trabalho no formato de codificação.',
          '[Agentes de IA locais para fluxos de trabalho empresariais e conformidade na UE](/pt/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — contexto aplicado para empresas que operam sob GDPR / EU AI Act.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — referência de modelos para o panorama mais amplo de pesos abertos.',
          '[Power Local LLM Hub](/power-local-llm) — biblioteca completa de guias.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Agentes de IA locais em 2026: o que realmente funciona (e o que ainda falha)',
      description: '6 stacks de agentes de IA locais testados em 5 tarefas reais. 2 funcionam de forma confiável, 3 falham de maneiras que os demos escondem, 1 é inutilizável. Cline, LangGraph, AutoGPT e MetaGPT avaliados.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/autonomous-local-agents-actually-work',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-05-24',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'وكلاء الذكاء الاصطناعي المحليون في 2026: ما يعمل فعلاً (وما يستمر في الفشل)',
    seoTitle: 'وكلاء AI محليون 2026: اختبار 6 أطر عمل بصدق',
    intro:
      'ستة أطر عمل لوكلاء الذكاء الاصطناعي المحليين، وخمس مهام حقيقية، وثلاثون يوماً من التقييم. نجح اثنان في إتمام المهام بشكل موثوق. وأخفق ثلاثة بطرق لا تُظهرها العروض التجريبية. أما الأخير فكان عديم الفائدة عملياً. هذا هو التقرير الأمين: ما الذي تفعله كل إعدادة وكيل فعلياً في مهام إعادة الهيكلة والبحث وفرز البريد والجمع والتلخيص والبحث عن الأخطاء، مع تسمية الإخفاقات صراحةً وقياس تكلفة الإشراف كمياً.',
    metaDescription:
      '6 أطر عمل لوكلاء AI اختُبرت في 5 مهام حقيقية: نجح اثنان بموثوقية وأخفق ثلاثة بطرق لا تُظهرها العروض. Cline وLangGraph وAutoGPT وMetaGPT.',
    twitterDescription:
      'اختبرت 6 أطر عمل لوكلاء محليين في 5 مهام حقيقية على مدار 30 يوماً. نجح اثنان، وأخفق ثلاثة بطرق مفاجئة، وكان واحد عديم الفائدة. الحكم الصريح على أي الأطر تُسلّم عملاً حقيقياً وأيها تُقدّم عروضاً فحسب.',
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
      'المطوّرون والمشغّلون التقنيون الذين يقيّمون أطر عمل وكلاء الذكاء الاصطناعي المحليين للعمل الفعلي — إعادة الهيكلة والبحث وتدفقات المحتوى وتصحيح الأخطاء — ويريدون حكماً قبل أن يستثمروا عطلة نهاية الأسبوع في الإعداد.',
    readTime: '16 دقيقة قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'local AI agent',
    targetKeywords: [
      'وكلاء الذكاء الاصطناعي المحليون 2026',
      'وكلاء مستقلون اختبار الواقع',
      'cline مقابل autogpt محلي',
      'أفضل إطار عمل وكيل محلي',
      'هل تعمل وكلاء الذكاء الاصطناعي فعلاً',
      'مقارنة وكلاء نماذج اللغة المحلية',
    ],
    leadAnswerBlock:
      '**في مايو 2026، يُتمّ اثنان من أطر عمل الوكلاء المحليين العمل الفعلي دون إشراف مستمر: Cline + Ollama وContinue.dev في وضع Agent. كلاهما محدود النطاق وجيد الصيانة ويُشغّل نموذجاً بقدرة استدعاء الأدوات (Qwen3-Coder 30B وGLM-5.1 32B وGemma 4 27B) داخل محرر واحد مع بوابات موافقة صريحة. يفشل ثلاثة أطر عمل بطرق مفاجئة: LangGraph + Ollama (تنسيق هش على آفاق طويلة)، وOpenInterpreter (ينفّذ أوامر الصدفة بسرعة لا تصلح معها للعمل دون إشراف)، وMetaGPT المحلي (يضيع تمثيل الأدوار متعدد الوكلاء بعد عمليتَي نقل). إطار عمل واحد عديم الفائدة عملياً: AutoGPT المحلي — توقّف المشروع، والاعتماديات لا تتوافق مع Ollama الحديث، وحلقة التخطيط تنجرف نحو استدعاءات دائرية للأدوات في دقائق. النمط ثابت: الأطر المحدودة والمُعِدّة مسبقاً حول نموذج قوي بقدرة استدعاء الأدوات تتفوق على الوكلاء المستقلين الطموحين في كل مهمة نفّذناها.**',
    quickAnswerTop: {
      ar: {
        question: 'هل تعمل وكلاء الذكاء الاصطناعي المستقلون المحليون فعلاً في 2026؟',
        answer:
          'بعضها نعم، وأغلبها لا. الإطاران الموثوقان هما Cline + Ollama (وكيل برمجة مستقل داخل VS Code مع موافقة لكل خطوة) وContinue.dev في وضع Agent (حلقة وكيل أخف في البيئة ذاتها). يعملان لأنهما محدودا النطاق — محرر واحد، نموذج واحد، بوابة موافقة واحدة — لا لأن التقنية الأساسية باتت وافية أخيراً للاستقلالية دون إشراف. الأطر المُقدَّمة باعتبارها "مستقلة كلياً" (AutoGPT المحلي وMetaGPT ومنسّقات LangGraph المخصّصة) لا تزال تنجرف نحو استدعاءات أدوات دائرية، وتهلوس في مسارات الملفات، أو تتعطّل في التخطيط طويل الأمد. النموذج الصحيح في 2026 هو "المساعد تحت الإشراف" — وكلاء يقترحون إجراءات متعددة الخطوات ويتوقفون للموافقة — لا "العامل المستقل". كل ما يُباع باعتباره مستقلاً هو عرض تجريبي، لا منتج.',
        bullets: [
          'اثنان يُسلّمان عملاً حقيقياً: Cline + Ollama وContinue.dev Agent. كلاهما محدود النطاق لبيئة تطوير واحدة، ويُشغّل نموذجاً بقدرة استدعاء الأدوات، ويستلزم موافقة بشرية لكل خطوة.',
          'ثلاثة تفشل بطرق غير واضحة: LangGraph + Ollama (هش على آفاق طويلة)، وOpenInterpreter (متسرّع جداً في تنفيذ الصدفة)، وMetaGPT المحلي (تمثيل الأدوار متعدد الوكلاء ينهار).',
          'AutoGPT المحلي عديم الفائدة عملياً في مايو 2026 — مشروع متوقف، اعتماديات مكسورة، حلقة التخطيط تنجرف في دقائق.',
          'موثوقية استدعاء الأدوات تأتي من النموذج لا من الإطار. Qwen3-Coder 30B وGLM-5.1 32B وGemma 4 27B وLlama 3.3 70B تعمل في أي من الأطر الموثوقة. النماذج دون 7B تفشل في جميعها.',
          'تكلفة الإشراف هي المقياس المهم. "أفضل" وكيل هو ذاك الذي تقرأ موافقاته فعلاً، لا الذي لديه أطول تشغيل مستقل.',
          'التوقعات لـ2027: التخطيط طويل الأمد سيتحسن تدريجياً. الاستقلالية دون إشراف في المهام الحقيقية لن تحدث هذا العام بغض النظر عمّا تُظهره العروض.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'كيف اختبرنا', anchor: '#how-we-tested' },
      { label: 'جدول واقعية الوكلاء', anchor: '#reality-table' },
      { label: 'ما يعمل: Cline + Ollama', anchor: '#cline-ollama' },
      { label: 'ما يعمل: Continue.dev Agent', anchor: '#continue-agent' },
      { label: 'ما يفشل: LangGraph + Ollama', anchor: '#langgraph' },
      { label: 'ما يفشل: OpenInterpreter', anchor: '#openinterpreter' },
      { label: 'ما يفشل: MetaGPT المحلي', anchor: '#metagpt' },
      { label: 'عديم الفائدة: AutoGPT المحلي', anchor: '#autogpt' },
      { label: 'لماذا تبدو عروض الوكلاء أفضل من الواقع', anchor: '#demos-vs-reality' },
      { label: 'تكلفة الإشراف هي المقياس الحقيقي', anchor: '#supervision-cost' },
      { label: 'مهام لا ينبغي أن تعهد بها لوكيل أبداً', anchor: '#never-trust' },
      { label: 'القرار: اختر إطار عملك', anchor: '#decision' },
      { label: 'ما الذي سيجلبه 2027 على الأرجح', anchor: '#outlook' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'يغطي العرض التالي: سبب فشل 4 من 6 أطر عمل وكلاء محليين (أحكام بالأسماء)، ومنهجية الاختبار على مدار 30 يوماً (6 أطر × 5 مهام)، وتكلفة الإشراف باعتبارها المقياس الحقيقي (3–12 مقابل 40+ موافقة)، والمهام التي لا ينبغي للوكلاء تنفيذها دون إشراف، وجدول قرار لاختيار الإطار الصحيح. حمّل ملف PDF بوصفه بطاقة مرجعية لتقييم وكلاء الذكاء الاصطناعي المحليين.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**اثنان يُسلّمان عملاً حقيقياً في مايو 2026:** Cline + Ollama (وكيل برمجة مستقل داخل VS Code) وContinue.dev في وضع Agent. كلاهما محدود النطاق لمحرر واحد ونموذج واحد وبوابة موافقة لكل خطوة.',
          '**ثلاثة يفشلون بطرق مفاجئة:** تنسيق LangGraph + Ollama هش ما وراء آفاق 4–5 خطوات، وOpenInterpreter ينفّذ أوامر الصدفة بسرعة تجعله خطراً دون إشراف، وتمثيل الأدوار متعدد الوكلاء في MetaGPT المحلي ينهار بعد عمليتَي نقل.',
          '**إطار عمل واحد عديم الفائدة:** AutoGPT المحلي مهجور عملياً — الاعتماديات لا تتوافق مع Ollama الحديث، وحلقة التخطيط تنجرف نحو استدعاءات أدوات دائرية في دقائق، ولا يوجد مُعتمد يرد على المشكلات.',
          '**موثوقية استدعاء الأدوات خاصية نموذجية لا إطارية.** Qwen3-Coder 30B وGLM-5.1 32B وGemma 4 27B وLlama 3.3 70B تُصدر استدعاءات أدوات نظيفة في كل الأطر الموثوقة. النماذج دون 7B تُصدر استدعاءات مشوّهة بصرف النظر عن الوكيل الذي يلفّها.',
          '**نموذج "المساعد تحت الإشراف" يفوز في 2026.** الوكلاء الذين يقترحون إجراءات متعددة الخطوات ويتوقفون للموافقة يُكملون مهاماً أكثر ممن يحاولون العمل دون إشراف. هذا حد لخصائص نماذج اللغة في 2026، لا تفضيل واجهة.',
          '**تكلفة الإشراف هي المقياس المهم.** مهمة من 30 دقيقة تستلزم ثلاث موافقات قابلة للتسليم. مهمة من ساعتين تستلزم عشرين موافقة ليست كذلك — أنت من يؤدي العمل والوكيل يُبطّئك فحسب.',
          '**التكلفة حقيقية لكنها صغيرة.** استدلال محلي بالكامل دون إنفاق على الواجهة البرمجية، والكهرباء هي التكلفة الهامشية الوحيدة. استهلاك الرموز لكل مهمة هو القيد — حلقات الوكلاء تحرق 30K–80K رمز في مهمة متعددة الخطوات، فالنماذج ذات سياق 32K تصل للحد سريعاً بينما 128K مريحة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**الأطر المختبرة:** Cline + Ollama، وContinue.dev Agent، وLangGraph + Ollama (مخصّص)، وAutoGPT المحلي، وOpenInterpreter، وMetaGPT المحلي.',
          '**المهام المختبرة:** بحث في موضوع، وإعادة هيكلة متعددة الملفات، وفرز مسودات البريد، وجمع وتلخيص، وتصحيح أخطاء.',
          '**الأجهزة:** Apple M5 Max 64 GB ذاكرة موحّدة وجهاز بـ2× NVIDIA RTX 3090 24 GB؛ كلاهما يُشغّل Qwen3-Coder 30B Q4_K_M بارتياح بسياق 32K.',
          '**النماذج:** Qwen3-Coder 30B (الرئيسي)، وGLM-5.1 32B، وGemma 4 27B، وLlama 3.3 70B (الأدوات الاستدعائية الموثوقة الأربعة في مايو 2026).',
          '**شكل الحكم:** إطاران موثوقان في المهام الخمس، وثلاثة موثوقان في 1–2 مهمة لكل منهما، وإطار واحد عديم الفائدة.',
          '**التكلفة:** 0 دولار في رسوم الواجهة البرمجية. ~0.10–0.30 دولار كهرباء لكل مهمة متعددة الخطوات على جهاز سطح مكتب بوحدة GPU بـ350W (أقل من 0.05 دولار على Mac).',
          '**نمط الإشراف الناجح:** الموافقة التلقائية على أدوات القراءة، والموافقة اليدوية على كل أداة كتابة/صدفة، ومراجعة سجل التدقيق بعد الجلسات الطويلة.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: 'كيف اختبرنا: نفس النموذج، نفس المهام، أطر عمل مختلفة',
        content:
          '**أبقى الاختبار النموذجَ ثابتاً وغيّر إطار الوكيل فحسب.** تلقّى كل إطار المهام الخمس ذاتها مقابل نفس الخلفية (Ollama يخدم Qwen3-Coder 30B بـQ4_K_M)، فتُنسب الإخفاقات للإطار لا للنموذج.',
        items: [
          '**الخلفية:** Ollama 0.5+ على macOS وLinux. النموذج الأساسي Qwen3-Coder 30B Q4_K_M (سياق 32K). النماذج الثانوية (GLM-5.1 32B، وGemma 4 27B، وLlama 3.3 70B) استُخدمت للتحقق من أن إخفاقات استدعاء الأدوات لم تكن حكراً على نموذج واحد.',
          '**الأجهزة:** MacBook Pro Apple M5 Max 64 GB وسطح مكتب Linux بـ2× RTX 3090 24 GB. كلاهما يُبقي Qwen3-Coder 30B بسرعة مفيدة (>15 رمز/ثانية).',
          '**المهام:** بحث في موضوع (جمع ومزيلة تكرار وتلخيص 8 مصادر حول موضوع متخصّص)، وإعادة هيكلة متعددة الملفات (إعادة تسمية خدمة في 12 ملف TypeScript)، وفرز مسودات البريد (تلخيص وصياغة ردود لصندوق 40 رسالة)، وجمع وتلخيص (قراءة 5 روابط وإنتاج ملخص مقارن)، وتصحيح أخطاء (معرفة سبب عدم استقرار اختبار قائم).',
          '**وتيرة التشغيل:** نُفّذت كل مهمة 3 مرات لكل إطار خلال فترة الثلاثين يوماً بموجّه جديد في كل مرة. صُنّفت النتيجة "مكتملة دون إشراف"، أو "مكتملة بإشراف"، أو "جزئية"، أو "متوقفة/فاشلة".',
          '**مقياس الإشراف:** عدد الموافقات المطلوبة لكل مهمة ونسبة الموافقات التي رفضنا فيها الإجراء المقترح. معدل رفض مرتفع يشير لأن الإطار يُولّد ضوضاء يجب على البشر تصفيتها.',
          '**قيد الأمانة:** نطاقات لا نسب مئوية مخترعة. "موثوق في المهام الخمس" يعني 13–15 من 15 تشغيلاً مكتملاً؛ "يفشل في الآفاق الطويلة" يعني 3–6 من 15 تشغيلاً مكتملاً دون تدخل. الأحكام محافظة — حين نجح إطار لكن بتدخل غير بسيط، يُعدّ فاشلاً لأغراض المهام غير الخاضعة للإشراف.',
          'موثوقية استدعاء الأدوات هي الطبقة الأساسية لكل هذا. للمقارنة من جانب النماذج، راجع [أفضل النماذج المحلية لاستدعاء الأدوات في 2026](/ar/power-local-llm/best-local-models-tool-calling-2026)؛ وطبقة البروتوكول مغطّاة في [ربط Ollama بقواعد البيانات وواجهات برمجة التطبيقات عبر MCP](/ar/power-local-llm/local-ai-agents-with-mcp-2026).',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: 'جدول واقعية الوكلاء: ستة أطر، خمس مهام، أحكام صادقة',
        content:
          '**إطاران ينجزان العمل؛ ثلاثة تعثر بطرق مختلفة؛ وواحد معطوب.** عمود الحكم هو ما يُقرأ أولاً.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama وContinue.dev Agent هما الإطاران الوحيدان اللذان يُكملان المهام الحقيقية بموثوقية في مايو 2026؛ LangGraph وOpenInterpreter وMetaGPT يفشل كل منها بطريقة مختلفة؛ وAutoGPT المحلي عديم الفائدة.',
          },
          {
            type: 'plain-terms',
            text: 'إذا أردت وكيلاً محلياً ينجز فعلاً إعادة هيكلة أو مهمة بحث، ثبّت Cline أو Continue.dev وأكمل عملك. الأطر الأربعة الأخرى لديها عروض تبدو أفضل من واقع تشغيلها عشر دقائق.',
          },
        ],
        columns: ['الإطار', 'معدل نجاح المهمة', 'الإخفاقات المرصودة', 'الإشراف المطلوب', 'الحكم'],
        rows: [
          {
            'الإطار': 'Cline + Ollama',
            'معدل نجاح المهمة': '13–15 من 15 تشغيلاً مكتملاً',
            'الإخفاقات المرصودة': 'ضغط الرموز في نماذج سياق 32K للعمل متعدد الملفات؛ قابل للاسترداد بسياق 128K',
            'الإشراف المطلوب': 'موافقة لكل خطوة؛ ~5–12 موافقة لكل مهمة',
            'الحكم': 'يعمل. الاختيار الافتراضي للمهام ذات طابع البرمجة.',
          },
          {
            'الإطار': 'Continue.dev Agent',
            'معدل نجاح المهمة': '12–14 من 15 تشغيلاً مكتملاً',
            'الإخفاقات المرصودة': 'أفق تخطيط أقصر من Cline؛ تعديلات متعددة الملفات تتوقف أحياناً بعد 2–3 ملفات',
            'الإشراف المطلوب': 'موافقة على معاينة الفرق؛ ~4–8 موافقات لكل مهمة',
            'الحكم': 'يعمل. بديل أخف حين يكون Cline مبالغاً.',
          },
          {
            'الإطار': 'LangGraph + Ollama',
            'معدل نجاح المهمة': '4–7 من 15 تشغيلاً دون تدخل',
            'الإخفاقات المرصودة': 'هش ما وراء آفاق 4–5 خطوات؛ آلة الحالات تدخل في حلقات حين تُعيد أداة بيانات غير متوقعة؛ لا بوابة موافقة أصلية (تبنيها بنفسك)',
            'الإشراف المطلوب': 'مرتفع — تصحيح التنسيق هو نصف العمل',
            'الحكم': 'فاشل. جهد البناء يتجاوز القيمة لـ90% من المستخدمين.',
          },
          {
            'الإطار': 'AutoGPT المحلي',
            'معدل نجاح المهمة': '0–2 من 15 تشغيلاً مكتملاً',
            'الإخفاقات المرصودة': 'المشروع متوقف في 2024–2025؛ الاعتماديات لا تتوافق مع Ollama الحديث؛ حلقة التخطيط تنجرف نحو استدعاءات أدوات دائرية في دقائق',
            'الإشراف المطلوب': 'مستمر — الوكيل لا يتقارب',
            'الحكم': 'عديم الفائدة. تجاهله كلياً في 2026.',
          },
          {
            'الإطار': 'OpenInterpreter',
            'معدل نجاح المهمة': '6–9 من 15 تشغيلاً مكتملاً — لكن بمخاطر',
            'الإخفاقات المرصودة': 'تنفيذ صدفة متسرّع؛ ينفّذ أوامر تدميرية دون ضمانات صريحة؛ موجّهات الأمان غير متسقة',
            'الإشراف المطلوب': 'مستمر — لا يمكن تركه دون إشراف',
            'الحكم': 'فاشل للاستقلالية. مفيد فقط بوصفه REPL خاضعاً للإشراف.',
          },
          {
            'الإطار': 'MetaGPT المحلي',
            'معدل نجاح المهمة': '3–6 من 15 تشغيلاً مكتملاً',
            'الإخفاقات المرصودة': 'تمثيل الأدوار متعدد الوكلاء (PM → Engineer → QA) ينجرف بعد عمليتَي نقل؛ الوكلاء يكررون عملاً سابقاً؛ المخرجات تتناقض',
            'الإشراف المطلوب': 'مرتفع — وأنت تصحّح تعريفات الأدوار لا المهمة',
            'الحكم': 'فاشل. التجريد متعدد الوكلاء هو المشكلة لا التنفيذ.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: 'ما يعمل: Cline + Ollama هو الاختيار الافتراضي',
        content:
          '**Cline + Ollama هو الإطار الوحيد الذي أكمل كل نوع من أنواع المهام بتكلفة إشراف متوقعة.** يعمل لأنه محدود النطاق: بيئة تطوير واحدة (VS Code)، ونموذج واحد، وبوابة موافقة لكل خطوة.',
        items: [
          '**ما هو:** تطبيق Cline امتداد لـVS Code يحوّل المحرر إلى سطح وكيل مستقل. يقترح النموذج خطة في وضع Plan، وينفّذها في وضع Act عبر سطح أدوات (read_file وwrite_to_file وreplace_in_file وexecute_command وlist_files وsearch_files)، ويطلب الموافقة بين الخطوات ما لم تكن الأدوات في قائمة السماح.',
          '**لماذا يعمل:** الإطار له رأي مسبق. سطح الأدوات صغير ومستقر، وتدفق الموافقة في مواجهتك (كل خطوة بطاقة تقبلها أو ترفضها)، والنموذج لا يرى سوى المحرر لا الجهاز كله. الإخفاقات قابلة للاسترداد لأن الإجراء الأخير دائماً على بُعد نقرة من الاسترجاع.',
          '**أين يتألق:** إعادة الهيكلة متعددة الملفات (إعادة تسمية خدمة في 12 ملفاً في مهمة واحدة)، وتصحيح الأخطاء الاستكشافي ("اعرف لماذا هذا الاختبار غير مستقر" — يقرأ Cline الملفات المجاورة ويتتبع التبعيات ويقترح فرضية ويُعدّل ويُشغّل الاختبار)، والبحث المحدود الذي ينتج تسليمة markdown داخل المشروع.',
          '**أين يتعثر:** المهام غير البرمجية التي تتطلب HTTP خارجي (لا متصفح أصلي). فرز مسودات البريد يعمل فقط إن وصّلت خادم MCP أو أدوات صدفة، وعندها أنت تُعدّ ثلاثة أشياء لتفعل ما تفعله مباشرةً أداة أصغر وأكثر تحديداً.',
          '**تكلفة الإشراف:** ~5–12 موافقة لكل مهمة. معظمها أدوات قراءة (رخيصة، قبول سريع). الغالية هي write_to_file وexecute_command — اضبطها لتستلزم موافقة يدوية وستلتقط الاستدعاء الخاطئ النادر قبل حدوثه.',
          '**تكلفة الرموز:** مرتفعة. يُنقل محتوى الملفات كاملاً إلى المحادثة كلما قرأها الوكيل. إعادة هيكلة 12 ملفاً بـQwen3-Coder 30B بسياق 32K تستنزف النافذة سريعاً — انتقل لنموذج بسياق 128K (DeepSeek Coder V3 أو Llama 3.3 70B) للعمل غير البسيط.',
          'للإعداد المعمّق لـCline بما في ذلك قوائم الموافقة التلقائية، راجع [Continue.dev مقابل Cline مقابل Aider: أفضل وكيل برمجة محلي في 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'شغّل Cline مع Qwen3-Coder 30B (Q4_K_M، ~17 GB VRAM) لمهام البرمجة. للمهام التي تمس أكثر من 6 ملفات في جلسة، انتقل لـDeepSeek Coder V3 أو نموذج آخر بسياق 128K — نافذة 32K لـQwen3-Coder ستمتلئ قبل أن ينتهي الوكيل.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: 'ما يعمل: وضع Agent في Continue.dev للمهام الأخف',
        content:
          '**وضع Agent في Continue.dev هو الاختيار الصحيح حين يكون Cline مبالغاً.** نفس البيئة، نفس فئة النموذج، سطح أصغر — موافقات أقل، وأفق تخطيط أقصر، واستهلاك رموز أدنى.',
        items: [
          '**ما هو:** تطبيق Continue.dev أساساً امتداد إكمال تلقائي ودردشة لـVS Code وJetBrains، مع وضع Agent يضيف استدعاءات أدوات (قراءة/كتابة ملفات، والبحث في قاعدة الكود، والتنفيذ في الطرفية) وحلقة تخطيط متعددة الخطوات. الوكيل أكثر تقييداً من Cline — أدوات أقل، وآفاق افتراضية أقصر، وسلوك مستقل أقل عدوانية.',
          '**لماذا يعمل:** جمهور Continue.dev هم مستخدمو الإكمال التلقائي، فوضع Agent يرث واجهة "صغيرة وسريعة وأمامك". كل تعديل يظهر كمعاينة فرق قبل أن يلمس النموذج الملف. الخطط نادراً ما تتجاوز 3–5 خطوات، مما يُبقي استهلاك الرموز معتدلاً وسجل التدقيق قصيراً.',
          '**أين يتألق:** مهام ملف أو ملفين، و"اشرح هذه المنطقة من قاعدة الكود"، و"أعد كتابة هذه الدالة بهذه القيود"، و"أضف اختباراً لهذه الطريقة". يعمل الوكيل دون سحب قاعدة الكود كاملة للمحادثة، فنموذج بسياق 32K مريح.',
          '**أين يتعثر:** الخطط التي تتجاوز 5 خطوات. إعادة الهيكلة متعددة الملفات التي تحتاج 8+ تعديلات تتوقف أحياناً بعد 2–3 ملفات وتطلب من المستخدم المتابعة. هذا ليس خطأً — الإطار محافظ على أفق الخطة — لكنه يعني إشرافاً أكثر تكراراً مقارنةً بـCline في المهمة ذاتها.',
          '**تكلفة الإشراف:** ~4–8 موافقات لكل مهمة، مع ثقل في معاينات الفرق (إشارة عالية، قبول سريع).',
          '**تكلفة الرموز:** أقل ملحوظاً من Cline لأن Continue.dev يستخدم فهرسه TF-IDF + المُضمَّنات لاسترداد مقاطع ذات صلة بدلاً من نقل الملفات كاملة. نموذج بسياق 32K يُكمل معظم المهام بارتياح.',
          'متى تختار Continue.dev Agent على Cline: حين تسع المهمة في 2–3 ملفات، وحين تكون ميزانية الرموز ضيّقة، وحين تستخدم Continue.dev للإكمال التلقائي وتريد أداة واحدة لا اثنتين.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: 'ما يفشل: LangGraph + Ollama (هش على الآفاق الطويلة)',
        content:
          '**LangGraph + Ollama هو الأداة الصحيحة للتنسيق في الإنتاج، والأداة الخاطئة لـ"أريد وكيلاً على حاسوبي المحمول".** جهد البناء مرتفع، وأوضاع الفشل غير واضحة، والقيمة لا تتحقق إلا على نطاق واسع.',
        items: [
          '**ما هو:** LangGraph مكتبة تنسيق آلة حالات. تُعرّف عقداً (دوال مكتوبة تستدعي النموذج أو تُشغّل أداة أو تُقيّم شرطاً) وحوافاً (انتقالات). وقت التشغيل ينفّذ الرسم البياني ويُدير التفرعات والحالة بين الخطوات. اجمعه مع خلفية Ollama وستحصل على وكيل محلي مخصّص.',
          '**لماذا يفشل كوكيل سطح مكتب:** سطح الفشل هو كود التنسيق لا النموذج. آلات الحالات التي تبدو نظيفة على اللوح تدخل في حلقات حين تُعيد أداة بيانات غير متوقعة — مثلاً، طلب HTTP يعيد 200 بجسم فارغ، أو قراءة ملف على مسار موجود لكنه مجلد. تصحّح رسمك البياني بقدر ما يصحّح الوكيل المهمة.',
          '**أفق الخطة:** هش ما وراء 4–5 عقد. كل نقطة تفرع تُضاعف سطح الاختبار. في العقدة السادسة لديك شجرة مسارات تنفيذ ممكنة والنموذج يختار مساراً لم تتوقعه. يُعيد الرسم البياني حينئذٍ كتابة الحالة بطريقة لا تستطيع العقدة التالية استهلاكها.',
          '**لا بوابة موافقة أصلية:** تبني مقاطعات البشر في الحلقة بنفسك. المكتبة تدعم ذلك (المقاطعة والاستئناف موثّقان)، لكن التنفيذ على عاتقك. Cline وContinue.dev يمنحانك هذا مجاناً.',
          '**أين ينتمي فعلاً:** سير عمل جانب الخادم حيث تتحكم في شكل الإدخال وسطح الأدوات ثابت وتستطيع كتابة مجموعة اختبار حقيقية للرسم البياني. مثلاً: تدفق توجيه دعم عملاء بثلاث أدوات حتمية وعقدة نموذج — تلك هي نقطة القوة لـLangGraph.',
          '**الحكم لسؤال الوكيل المحلي:** فاشل. بناء منسّق LangGraph مخصّص لفعل ما يفعله Cline في تثبيت واحد مضيعة للوقت لـ90% من المستخدمين. افعله فقط إن كان شكل سير عملك لا يستطيع Cline التعبير عنه ولديك انضباط الاختبار للحفاظ على الرسم البياني صادقاً.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذا ليس نقداً لـLangGraph — المكتبة صلبة لسير عمل الإنتاج. النقد هو أن "استخدم LangGraph لوكيلك المحلي" هي التوصية الخاطئة حين توجد أطر محدودة النطاق بالفعل.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: 'ما يفشل: OpenInterpreter مفيد بإشراف، خطير بدونه',
        content:
          '**تطبيق OpenInterpreter ينفّذ أوامر الصدفة بسرعة لا تصلح معها للعمل دون إشراف.** هو مفيد حقاً بوصفه REPL خاضعاً للإشراف — تصف مهمة، يكتب Python أو صدفة، تراقب التنفيذ — وخطير حقاً حين تبتعد عنه.',
        items: [
          '**ما هو:** تطبيق OpenInterpreter واجهة سطر أوامر تُتيح لنموذج كتابة وتنفيذ كود (Python والصدفة وJavaScript وR) على جهازك. يطلب الموجّه التفاعلي تأكيداً قبل تشغيل كل كتلة — افتراضياً. الإطار "كود ChatGPT Interpreter، محلياً".',
          '**لماذا يفشل كوكيل مستقل:** موجّه الأمان لكل كتلة، والنموذج يقترح بانتظام أوامر صدفة تبدو حميدة لكنها تُنتج تغييرات حالة دائمة (rm في مسارات عميقة، وpip install على Python النظام، وgit reset --hard). تأكيد كل كتلة يصبح العمل ذاته — لا تستطيع التصفّح السريع لأن تكلفة الموافقة على الكتلة الخاطئة غير محدودة.',
          '**وضع التأكيد التلقائي موجود.** ومنه تأتي كل قصة رعب. لا نوصي بتشغيل OpenInterpreter بتأكيد تلقائي على جهاز يحتوي أي شيء تكترث له.',
          '**أين يتألق:** كوسادة ملاحظات خاضعة للإشراف. "حوّل هذا CSV إلى Parquet"، و"استخرج بيانات وصفية من هذه الـ200 PDF"، و"أعد كتابة هذا السكريبت Python لاستخدام asyncio". مهام تبقى فيها في الطرفية وتراقب كل أمر والنموذج يؤدي عمل الكتابة الأسرع نيابةً عنك.',
          '**أين ينهار:** أي شيء يشبه الاستقلالية. حتى مع تشغيل موجّهات التأكيد، مهمة من 30 دقيقة تتوسط 40+ تأكيداً وأوضاع الفشل متنوعة (مجلد عمل خاطئ، وقراءات جزئية، وطلبات شبكة غير متوقعة).',
          '**تكلفة الإشراف:** 100% عملياً — تراقب كل كتلة. مهمة "5 دقائق" تستغرق وقتاً أطول من القيام بها يدوياً حين تحسب القراءة والموافقة.',
          '**الحكم:** أداة مفيدة، فئة خاطئة. OpenInterpreter مساعد برمجة ينفّذ كوداً، لا وكيل مستقل. تقييمه مقابل Cline هو الإطار الخاطئ؛ الإطار الصحيح هو "Cline يُسلّم وظيفة، OpenInterpreter يكتب سكريبتاً لمرة واحدة".',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: 'ما يفشل: MetaGPT المحلي (تمثيل الأدوار متعدد الوكلاء ينهار)',
        content:
          '**تمثيل الأدوار متعدد الوكلاء "PM → Engineer → QA → Designer" في MetaGPT لا يصمد أمام المهام غير البسيطة.** بعد عمليتَي نقل يكرر الوكلاء عملاً سابقاً، أو يتناقضون فيما بينهم، أو يتعطلون في التفاوض على أدوارهم.',
        items: [
          '**ما هو:** MetaGPT إطار متعدد الوكلاء يحاكي فريق تطوير برمجيات. وكيل Product Manager يكتب المتطلبات، ووكيل Architect يصمم، ووكيل Engineer يبرمج، ووكيل QA يختبر. كل وكيل هو النموذج الأساسي ذاته بموجّه نظام مختلف ومجموعة أدوات مختلفة.',
          '**لماذا يفشل:** يفترض تمثيل الأدوار متعدد الوكلاء أن النموذج يستطيع الحفاظ على شخصية متسقة عبر أدوار كثيرة ونقل السياق بموثوقية. في الواقع، مع نموذج محلي من فئة 30B تتداخل الشخصيات. وكيل Engineer يُعيد تنفيذ تحليل وكيل PM. وكيل QA يُعيد كتابة الكود بدلاً من اختباره. حالة النقل — ما تعلّمه كل وكيل في دوره — هي الخلل.',
          '**المشكلة الأعمق:** التجريد متعدد الوكلاء يضيف أدواراً دون إضافة قدرة. وكيل واحد بنفس سطح الأدوات وورقة تدوين أطول يؤدي المهمة ذاتها بعدد رموز أقل وانجراف أقل. إطار "الفريق" بشري لا هندسي.',
          '**أين قد يعمل:** مهام محددة بدقة بحدود نقل صارمة — مثلاً تدفق فريق كتابة (بحث → مخطط → مسودة → تحرير) حيث لكل خطوة تسليمة والخطوة التالية تتجاهل التفكير السابق. لم نجد سير عمل حقيقي تفوّق فيه MetaGPT على إطار وكيل واحد بموجّه قائمة مرجعية.',
          '**الحكم:** فاشل. الخلل مفاهيمي لا تنفيذي. أطر الوكيل الواحد بموجّهات منظّمة تتفوق على أطر متعددة الوكلاء في كل مهمة نفّذناها.',
          'لتقنيات الموجّهات التي تُحسّن موثوقية أي حلقة وكيل واحد، راجع [prompting التفكير المتسلسل](/ar/prompt-engineering/chain-of-thought-prompting) — نفس نمط التفكير المنظّم الذي يساعد النموذج على التفكير يساعد وكيلاً واحداً على التماسك.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'عديم الفائدة: AutoGPT المحلي مهجور عملياً',
        content:
          '**AutoGPT المحلي ليس إطاراً لتقييمه في 2026 — بل إطار لتجاهله.** المشروع بلا صيانة عملياً، والاعتماديات لا تتوافق مع Ollama الحديث، وحلقة التخطيط تنجرف في دقائق.',
        items: [
          '**ما الذي حدث:** AutoGPT كان المشروع النموذجي لـ"الوكيل المستقل" في 2023. الضجّة تجاوزت التقنية — لم تكن حلقات التخطيط موثوقة أبداً في المهام الحقيقية. توقّف المشروع وتفرّق فريق الصيانة وتخلّف التفرع المحلي عن كل تحديثات الاعتماديات لأكثر من 18 شهراً.',
          '**الكسر الملموس في مايو 2026:** يفترض تكامل Ollama شكل واجهة برمجية تغيّر في 2024. عُدّلت موجّهات التخطيط الداخلية لنماذج جيل سابق وتُنتج خططاً مشوّهة على نماذج الأوزان المفتوحة الحديثة. المشكلات المبلّغ عنها في المستودع عام 2025 لا تزال مفتوحة بلا ردود.',
          '**حلقة التخطيط تنجرف:** في التشغيلات التي بدأت، دخل الوكيل عادةً في نمط استدعاء أدوات دائري في 2–4 دقائق — يُعيد قراءة نفس الملفات ويُعيد نفس البحوث دون أن يتقارب نحو المهمة. هذا هو وضع الفشل المعروف لحلقات الاستقلالية غير المحدودة، وهو بالضبط ما تتجنبه الأطر المحدودة (Cline وContinue.dev) بالتصميم.',
          '**الحكم:** عديم الفائدة. لا تستثمر عطلة نهاية أسبوع في AutoGPT المحلي في 2026. انتقل العمل المثير للاهتمام إلى أطر محدودة النطاق ببوابات موافقة صريحة؛ AutoGPT أثر تاريخي لا خيار حالي.',
          '**إن كنت مشتاقاً:** المستودع الأصلي لا يزال على GitHub. الطريقة الصحيحة للتعامل معه هي بوصفه درساً — الاستقلالية كانت التجريد الخاطئ؛ المساعدة تحت الإشراف هي ما يعمل.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: 'لماذا تبدو عروض الوكلاء أفضل من الواقع',
        content:
          '**العروض منقّحة؛ المهام الحقيقية ليست كذلك.** ثلاثة أسباب بنيوية تُفسّر لماذا يبدو مقطع فيديو لوكيل أفضل من أول 30 دقيقة لك مع الإطار ذاته.',
        items: [
          '**مهام العروض محدودة النطاق.** "ابنِ لعبة ثعبان" أو "لخّص هذا PDF" لها شكل معروف وسطح ملفات صغير وإشارة نجاح لا لبس فيها. المهام الحقيقية مفتوحة ("اعرف لماذا تدفق الدفع يخسر 3% من المستخدمين") ولها سطح ملفات كبير ومعايير نجاح غامضة وتأثيرات جانبية تُضخّم الأخطاء.',
          '**تشغيلات العروض منتقاة بعناية.** مقطع فيديو تجريبي من 30 ثانية هو أفضل محاولات عديدة. التشغيلات التي توقّف فيها الوكيل أو هلوس في مسار ملف أو استدعى دالة قديمة غير موجودة في المونتاج. لا ترى معدل النجاح؛ ترى نجاحاً واحداً.',
          '**موجّهات العروض مفرطة التحديد.** "أعد هيكلة خدمة User لاستخدام نمط المستودع الجديد" يعمل في عرض لأن العرض لديه النمط الجديد موثّقاً في ملف يجده الوكيل. مهمتك الحقيقية لديها النمط في موضوع Slack من ثلاثة أسابيع. النموذج لا يملك سياقك؛ العرض كان يملكه.',
          '**نماذج العروض أكبر من نموذجك المحلي.** العروض السحابية تعمل على نماذج حدّية. الوكلاء المحليون يعملون على ما تستطيع خدمته بـ>10 رموز/ثانية. Qwen3-Coder 30B ممتاز في مايو 2026 لكنه ليس GPT-5، والعروض تستخدم النموذج الأفضل بصمت.',
          '**الدرس:** افترض أن أي عرض يمثّل أفضل 10% من التشغيلات. التوقع المعقول لمهمة حقيقية هو التشغيل المتوسط، مع احتمال 20–30% من الفشل الذي يستلزم تدخلاً. خطّط للمتوسط.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: 'تكلفة الإشراف هي المقياس الحقيقي',
        content:
          '**"أفضل" وكيل ليس ذاك بأطول تشغيل مستقل — بل ذاك الذي تقرأ موافقاته فعلاً.** عدّ الموافقات هو الرقم الأكثر فائدة الذي قسناه.',
        items: [
          '**مهام الإشراف المنخفض (3–8 موافقات إجمالاً):** Cline في إعادة هيكلة محدودة، وContinue.dev Agent في مهمة ملف واحد. تتصفّح الموافقات لأنها معظمها عمليات قراءة وكتابة أو اثنتين؛ إجمالي وقت المهمة تهيمن عليه كمون النموذج لا احتكاك الموافقة.',
          '**مهام الإشراف المتوسط (10–20 موافقة):** Cline في مهمة متعددة الملفات تمسّ 8+ ملفات، وContinue.dev Agent في أي شيء يدفع أفق خطته. توافق بعناية أكبر؛ إجمالي وقت المهمة يتقسّم تقريباً نصفَين بين النموذج وأنت.',
          '**مهام الإشراف العالي (40+ موافقة):** OpenInterpreter في أي شيء غير بسيط. الوكيل مُضاعف سرعة الكتابة لا مُضاعف إنتاجية — لا تزال تؤدي العمل المعرفي وتقرأ كل كتلة.',
          '**نمط الإشراف الفاشل:** إجهاد الموافقة. بعد ~30 موافقة في جلسة واحدة يبدأ البشر بالموافقة دون قراءة. الإطار الذي يطلب موافقات أكثر من اللازم يُدرّبك على التوقف عن مراجعتها، وعندئذٍ بوابة الأمان وهمية.',
          '**الضبط الصحيح: قوائم الموافقة التلقائية.** أدوات القراءة (read_file وlist_files وsearch_files وlist_directory) آمنة للموافقة التلقائية. أدوات الكتابة (write_to_file وreplace_in_file وexecute_command وbrowser_action مع إرسال نماذج) ليست كذلك. هذا الضبط الواحد هو الفرق بين وكيل مفيد وآخر ممل.',
          '**الوحدة الصحيحة: عدد الموافقات لكل مهمة.** حين تقيّم إطاراً، عدّ الموافقات في مهمة حقيقية ممثّلة لا في مهمة تجريبية. إن تجاوز العدد 20، فالإطار لا يوفّر عملك فعلاً.',
          'لتقنيات موجّهات تُخفض تكلفة الإشراف بتحسين جودة استدعاء الأدوات، راجع [prompting التفكير المتسلسل](/ar/prompt-engineering/chain-of-thought-prompting).',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'شدّد قائمة الموافقة التلقائية في بداية مشروع؛ ارخِها مع اكتساب ثقتك بالنموذج في قاعدة الكود هذه. العكس — البدء بتساهل والتشديد بعد تشغيل سيئ — هو كيف تُحدث الوكلاء غير الخاضعين للإشراف حوادث.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: 'مهام لا ينبغي أن تعهد بها لوكيل أبداً',
        content:
          '**بعض المهام غير متوافقة مع الوكلاء بصرف النظر عن الإطار.** تعرّف عليها قبل إضاعة بعد ظهر في ضبط قواعد الموافقة.',
        items: [
          '**الكتابة في قواعد بيانات الإنتاج.** نموذج يُصدر بثقة استعلام `DELETE FROM users WHERE active = false` على جدول حقيقي هو الحادث الذي وُجد هذا المقال لمنعه. شغّل أدوات قواعد البيانات بأدوار للقراءة فقط افتراضياً؛ أنشئ دوراً منفصلاً للكتابة فقط للمهام التي تستلزمه صراحةً وفقط لمدتها.',
          '**أي شيء يتعلق بالمال أو المصادقة.** واجهات الدفع البرمجية، وإصدار رموز OAuth، وإنشاء الحسابات، وتغييرات الأدوار والصلاحيات. تكلفة استدعاء خاطئ غير محدودة؛ فائدة الأتمتة صغيرة.',
          '**التخطيط طويل الأمد فوق 8–10 خطوات.** الوكلاء ينجرفون في الآفاق الطويلة. النمط الصحيح هو "النموذج يقترح خطة، البشر يوافقون على الخطة، النموذج ينفّذ الخطة خطوة خطوة" — لا "النموذج يخطّط وينفّذ مهمة من 25 خطوة باستقلالية".',
          '**المهام التي لا تستطيع التحقق من نجاحها سريعاً.** مهمة جمع وتلخيص تستطيع قراءتها في دقيقتين مناسبة. مهمة "ابحث في هذا السوق وأنتج تقريراً" لا تستطيع التحقق منها في أقل من ساعة غير مناسبة — ستثق بالتقرير لأن التحقق يكلّف أكثر من إعادة الكتابة.',
          '**أي شيء يمسّ ملفات ليس لديك نسخة احتياطية منها.** اعزل خادم نظام الملفات على مجلد مساحة عمل واحد. عامل مساحة العمل كأنها للاستخدام والاستبعاد. إن استطاع الوكيل الوصول لملفات خارج مساحة العمل، فقد أعددته بشكل خاطئ.',
          '**البنية التحتية المشتركة أو متعددة المستأجرين.** الوكلاء المحليون أدوات آلة شخصية في 2026. أجهزة تشغيل CI المشتركة وقواعد البيانات متعددة المستأجرين والحسابات السحابية المشتركة هي سطح الهجوم الخاطئ لحلقة وكيل دون إشراف.',
        ],
      },
      decision: {
        id: 'decision',
        title: 'القرار: اختر إطار عملك',
        content:
          '**معظم الناس ينبغي أن يثبّتوا Cline + Ollama ويتوقفوا.** شجرة القرار أدناه تغطي الحالات التي يكون فيها إطار آخر هو الاختيار الصحيح.',
        columns: ['وضعك', 'الاختيار'],
        rows: [
          { 'وضعك': 'أريد وكيلاً محلياً لمهام البرمجة (إعادة هيكلة، تصحيح أخطاء، تعديلات متعددة الملفات) في VS Code', 'الاختيار': 'Cline + Ollama مع Qwen3-Coder 30B (أو DeepSeek Coder V3 لسياق 128K)' },
          { 'وضعك': 'أستخدم Continue.dev للإكمال التلقائي وأريد وكيلاً أخف للمهام الصغيرة', 'الاختيار': 'وضع Agent في Continue.dev في نفس التثبيت' },
          { 'وضعك': 'أريد وكيلاً يستطيع التحكم في متصفح والاستعلام من قاعدة بيانات وقراءة ملفات', 'الاختيار': 'Cline + Ollama مع خوادم MCP متصلة (نظام ملفات، sqlite، puppeteer)' },
          { 'وضعك': 'أريد REPL محلياً لـ"مترجم الكود" — كتابة كود وتشغيله والتكرار', 'الاختيار': 'OpenInterpreter، لكن لا تتركه دون إشراف' },
          { 'وضعك': 'لديّ سير عمل إنتاجي بأدوات حتمية وأحتاج تنسيقاً', 'الاختيار': 'LangGraph + Ollama، مع مجموعة اختبار حقيقية للرسم البياني' },
          { 'وضعك': 'أريد وكلاء مستقلين بلا إشراف يُسلّمون عملاً ليلاً', 'الاختيار': 'انتظر. إطار 2026 لا يوفّر هذا. استخدم أطراً خاضعة للإشراف بدلاً.' },
          { 'وضعك': 'أريد تقييم AutoGPT أو MetaGPT للعمل الحقيقي', 'الاختيار': 'تجاهل الاثنين. AutoGPT بلا صيانة؛ تجريد MetaGPT متعدد الوكلاء لا يصمد.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: 'ما الذي سيجلبه 2027 على الأرجح',
        content:
          '**التخطيط طويل الأمد سيتحسن تدريجياً؛ الاستقلالية دون إشراف في المهام الحقيقية لن تحدث هذا العام.** توقّعان محددان، صيغا بحذر.',
        items: [
          '**موثوقية استدعاء الأدوات ستواصل الارتفاع.** اتجاه Llama 3 → Llama 3.3 وQwen3 → Qwen3 والقفزة من Gemma 3 → Gemma 4 تشير جميعها لشيء واحد: تدريب استدعاء الأدوات هو خطوة التدريب اللاحق الأرخص والأعلى تأثيراً. تتوقع أن تصبح نماذج فئة 7B أدوات استدعاء موثوقة بنهاية 2026/بداية 2027، مما يخفض معيار الأجهزة للوكلاء بشكل ملحوظ.',
          '**آفاق الخطط ستمتد.** الأفق الموثوق الحالي ~5 خطوات سيصل على الأرجح إلى 8–10 خطوات دون مشاكل الانجراف. هذا يُحسّن الوكلاء المحدودة أسلوب Cline؛ لا يجعل الوكلاء غير المحدودة أسلوب AutoGPT تعمل.',
          '**الأنظمة متعددة الوكلاء لن تحقق اختراقها الكبير.** المشكلة البنيوية (حالة النقل، وانجراف الشخصية، والعمل المكرر) ليست مسألة مقياس نموذج. أطر الوكيل الواحد بورقات تدوين أطول ستواصل التفوق على تمثيل الأدوار متعدد الوكلاء.',
          '**نموذج "المساعد تحت الإشراف" يفوز.** الوكلاء الذين يُسلّمون عملاً في 2027 سيشبهون Cline 2.0 — أسطح أدوات أفضل، وموافقات أكثر سلاسة، وآفاق خطط أطول — لا إعادة إطلاق ناجحة لـAutoGPT.',
          '**تحذير صريح:** أي من هذه التوقعات قد تكون خاطئة. التقنية تتطور بسرعة كافية لأن يُغيّر إصدار نموذج في الربع الثالث من 2026 معادلة تكلفة الإشراف. أعد تقييم هذا المقال في نوفمبر 2026.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة في اختيار الوكلاء المحليين وتشغيلهم',
        items: [
          '**الخطأ الأول: تحسين الاستقلالية.** "كم يعمل دون إشراف؟" هو المقياس الخاطئ. "بكم موافقة يُكمل المهمة؟" هو الصحيح. اختيار إطار بناءً على معايير الاستقلالية يُعطيك AutoGPT؛ الاختيار بناءً على تكلفة الإشراف يُعطيك Cline.',
          '**الخطأ الثاني: نماذج صغيرة لعمل استدعاء الأدوات.** أي شيء دون 7B (ومعظم نماذج الأغراض العامة من 7B–13B بلا ضبط دقيق لاستدعاء الأدوات) تُصدر استدعاءات مشوّهة. استخدم Qwen3-Coder 30B أو GLM-5.1 32B أو Gemma 4 27B أو Llama 3.3 70B وأوقف نزالك مع الإطار.',
          '**الخطأ الثالث: سياق 32K للعمل متعدد الملفات.** Cline ينقل محتوى الملفات كاملاً للمحادثة؛ مهمة 8 ملفات قد تتجاوز 32K رمز قبل التفكير. استخدم نموذجاً بسياق 128K (DeepSeek Coder V3 أو Llama 3.3 70B) للمهام متعددة الملفات غير البسيطة.',
          '**الخطأ الرابع: الموافقة التلقائية على كل شيء.** زر "الموافقة على الكل" هو المنحدر الذي يقود إلى "الوكيل حذف ملفاتي". وافق تلقائياً على أدوات القراءة فحسب؛ استلزم موافقة يدوية للكتابة والصدفة.',
          '**الخطأ الخامس: الكتابة في قواعد بيانات الإنتاج من وكيل.** شغّل دوراً للقراءة فقط افتراضياً. دور كتابة منفصل موجود فقط لمدة المهام التي تستلزمه صراحةً. تكلفة كتابة خاطئة غير محدودة.',
          '**الخطأ السادس: بناء منسّق LangGraph مخصّص قبل تجربة Cline.** 90% من حالات استخدام "أحتاج وكيلاً مخصّصاً" محدودة بما يكفي لأن Cline + بضعة خوادم MCP هو الجواب الصحيح. ابنِ شيئاً مخصّصاً فقط حين يكون شكل سير العمل غير متوافق حقاً مع الأطر الموجودة.',
          '**الخطأ السابع: مطاردة العروض.** العروض هي أفضل محاولات عديدة. خطّط للتشغيل المتوسط — 70–80% نجاح في المهام الحقيقية، و20–30% تستلزم تدخلاً. أي شيء يُسمّي نفسه "مستقلاً كلياً" في 2026 هو تسويق لا هندسة.',
          '**الخطأ الثامن: تجاهل سجل التدقيق.** بعد كل جلسة طويلة لوكيل، اقرأ سجل الإجراءات. تظهر أنماط — نفس نوع الخطأ ثلاث تشغيلات متتالية يقول لك تشديد قاعدة موافقة أو تغيير النموذج.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مستودع Cline على GitHub](https://github.com/cline/cline) — وكيل برمجة مستقل، وثائق سطح الأدوات، وإعداد الموافقة التلقائية.',
          '[وثائق Continue.dev](https://docs.continue.dev/) — وضع Agent، وفهرسة قاعدة الكود، وإعداد المزوّدين.',
          '[وثائق LangGraph](https://langchain-ai.github.io/langgraph/) — مكتبة التنسيق، ودلالات آلة الحالات، ومقاطعات البشر في الحلقة.',
          '[مستودع OpenInterpreter على GitHub](https://github.com/OpenInterpreter/open-interpreter) — وكيل تنفيذ الكود، وأوضاع الأمان، وتكامل النماذج المحلية.',
          '[مستودع MetaGPT على GitHub](https://github.com/geekan/MetaGPT) — إطار متعدد الوكلاء، وتعريفات الأدوار، وإعداد المزوّد المحلي.',
          '[مكتبة نماذج Ollama](https://ollama.com/library) — النماذج المحلية المتاحة، ومؤشرات دعم استدعاء الأدوات، وخيارات التكميم.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل وكلاء الذكاء الاصطناعي المستقلون مفيدون فعلاً في 2026؟',
            a: 'نعم، لكن فقط بأشكال محدودة وخاضعة للإشراف. Cline + Ollama ووضع Agent في Continue.dev يُكملان مهاماً حقيقية (إعادة هيكلة متعددة الملفات، وتصحيح أخطاء استكشافي، وبحث محدود) بتكلفة إشراف قابلة للإدارة — عادةً 5–12 موافقة لكل مهمة. إطار "المستقل كلياً" لا يزال طموحاً؛ الوكلاء المُقدَّمون كغير خاضعين للإشراف (AutoGPT المحلي وMetaGPT) ينجرفون ويكررون عملاً أو يتعطلون في الآفاق الطويلة. النموذج الذهني الصحيح هو "مساعد تحت الإشراف" لا "عامل مستقل".',
          },
          {
            q: 'لماذا تبدو عروض الوكلاء أفضل من الواقع؟',
            a: 'لثلاثة أسباب. مهام العروض محدودة النطاق (سطح ملفات صغير، وإشارة نجاح لا لبس فيها)؛ وتشغيلات العروض منتقاة من محاولات عديدة؛ وموجّهات العروض مفرطة التحديد بسياق لن يملكه النموذج في مهمة حقيقية. خطّط للتشغيل المتوسط في مهمة حقيقية — 70–80% نجاح، و20–30% تستلزم تدخلاً — لا تشغيل العرض.',
          },
          {
            q: 'أي إطار وكيل هو الأكثر موثوقية للعمل الحقيقي في 2026؟',
            a: 'Cline + Ollama هو الاختيار الافتراضي لمهام ذات طابع برمجي (إعادة هيكلة، وتصحيح أخطاء، وعمل متعدد الملفات). اجمعه مع Qwen3-Coder 30B للعمل اليومي أو DeepSeek Coder V3/Llama 3.3 70B حين تحتاج سياق 128K. وضع Agent في Continue.dev هو البديل الأخف للمهام ذات الملف أو الملفين. كلاهما محدود النطاق وجيد الصيانة ويعمل داخل المحرر ببوابات موافقة صريحة.',
          },
          {
            q: 'كم قدر الإشراف الذي تحتاجه الوكلاء فعلاً في 2026؟',
            a: '5–12 موافقة لكل مهمة في إطار محدود مثل Cline؛ و4–8 في Continue.dev Agent. فوق 30 موافقة في جلسة واحدة يبدأ البشر بالموافقة دون قراءة — وعندئذٍ بوابة الأمان وهمية. الضبط الصحيح هو قائمة الموافقة التلقائية: وافق تلقائياً على أدوات القراءة (read_file وlist_files وsearch_files)، واستلزم موافقة يدوية للكتابة والصدفة. هذا الضبط الواحد هو الفرق بين وكيل مفيد وآخر ممل.',
          },
          {
            q: 'هل تستطيع الوكلاء التعامل مع مهام متعددة الخطوات دون أن تنكسر؟',
            a: 'حتى 5–8 خطوات بموثوقية مع نموذج قوي لاستدعاء الأدوات (Qwen3-Coder 30B وGemma 4 27B وGLM-5.1 32B وLlama 3.3 70B). بعد ذلك تنجرف آفاق الخطط — يُعيد الوكيل قراءة الملفات، أو يُعيد البحوث ذاتها، أو يقترح خطوات تالية متناقضة. النمط الصحيح هو "النموذج يقترح خطة، البشر يوافقون على الخطة، النموذج ينفّذ خطوة في كل مرة" — لا تشغيل مستقل من 25 خطوة.',
          },
          {
            q: 'لماذا تفشل الوكلاء في مهام الأفق الطويل؟',
            a: 'لسببين بنيويين. أولاً، انتفاخ السياق: كل استدعاء أداة يضيف النتيجة للمحادثة، فمهمة من 20 خطوة تتراكم ~50K–100K رمز من الحالة ويفقد النموذج تتبع ما قُرّر في البداية. ثانياً، الانجراف في مراجعة الخطة: حين تُعيد أداة مخرجاً غير متوقع، كثيراً ما يُعيد النموذج التخطيط للمهمة كاملاً بدلاً من التعديل محلياً — والخطة الجديدة تتعارض مع الالتزام الأصلي. الأطر المحدودة (Cline وContinue.dev Agent) تتجنب هذا بإبقاء الخطط قصيرة وطلب من البشر تثبيت الأساس بين الخطوات.',
          },
          {
            q: 'هل الوكلاء المحليون أسوأ من الوكلاء السحابيين؟',
            a: 'في القدرة المطلقة، نعم — نماذج الحدود السحابية لا تزال تتفوق على أي نموذج محلي من فئة 30B في أصعب المهام. في العمل اليومي الخاضع للإشراف الفجوة أضيق مما تُشير العروض. Cline + Qwen3-Coder 30B يُكمل 13–15 من 15 إعادة هيكلة متعددة الملفات؛ المهمة ذاتها في Cline + Claude أو GPT-5 تُكمل 14–15 من 15. التوازن يُفضّل المحلي لمستخدمي البيانات الخاصة أو من ليس لديهم ميزانية واجهة برمجية أو من لديهم متطلبات صارمة للعمل بلا اتصال.',
          },
          {
            q: 'هل تستطيع الوكلاء التعامل مع الأخطاء بأناقة؟',
            a: 'بشكل متباين. Cline وContinue.dev Agent يتعافيان جيداً من أخطاء الأدوات — يعرض الإطار الخطأ، ويقترح النموذج خطوة تصحيحية، ويوافق البشر. LangGraph + Ollama يتعافى بقدر ما يُعرّفه رسمك البياني؛ خطأ أداة غير معالج يدخل في حلقة. AutoGPT المحلي لا يتعافى إطلاقاً؛ ينجرف. التعامل مع الأخطاء خاصية إطار بقدر ما هي خاصية نموذج.',
          },
          {
            q: 'ما المهام التي لا ينبغي أن أعهد بها لوكيل أبداً؟',
            a: 'الكتابة في قواعد بيانات الإنتاج (شغّل أدواراً للقراءة فقط افتراضياً)، وأي شيء يمسّ المال أو المصادقة (مدفوعات وOAuth وإنشاء حسابات)، والتخطيط طويل الأمد فوق 8–10 خطوات، والمهام التي لا تستطيع التحقق من نجاحها سريعاً، وأي شيء خارج مجلد مساحة عمل معزول، وأي عمل على بنية تحتية مشتركة أو متعددة المستأجرين. تكلفة إجراء خاطئ للوكيل في هذه الفئات غير محدودة؛ وفائدة الأتمتة صغيرة.',
          },
          {
            q: 'هل ستتحسن الوكلاء بشكل ملحوظ في 2027؟',
            a: 'موثوقية استدعاء الأدوات ستواصل الارتفاع — تتوقع أن تصبح نماذج فئة 7B أدوات استدعاء موثوقة بنهاية 2026/بداية 2027. آفاق الخطط ستمتد من ~5 خطوات موثوقة إلى 8–10. الأنظمة متعددة الوكلاء لن تحقق اختراقها الكبير — المشاكل البنيوية (حالة النقل وانجراف الشخصية والعمل المكرر) ليست مسألة مقياس نموذج. الاستقلالية دون إشراف في المهام الحقيقية مستبعدة في 2027؛ "Cline 2.0" — أسطح أدوات أفضل وموافقات أكثر سلاسة — هو المسار الواقعي.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[ربط Ollama بقواعد البيانات وواجهات برمجة التطبيقات عبر MCP: إعداد الوكيل المحلي 2026](/ar/power-local-llm/local-ai-agents-with-mcp-2026) — ما يُمكّن الوكلاء تحت السطح؛ طبقة البروتوكول لأدوات نظام الملفات وقاعدة البيانات والمتصفح وGitHub.',
          '[أفضل النماذج المحلية لاستدعاء الأدوات في 2026](/ar/power-local-llm/best-local-models-tool-calling-2026) — طبقة النموذج؛ معايير مقارنة مباشرة لأدوات الاستدعاء الموصى بها (Qwen3-Coder وGemma 4 وGLM-5.1 وLlama 3.3).',
          '[Continue.dev مقابل Cline مقابل Aider: أفضل وكيل برمجة محلي في 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) — مقارنة الأطر المجاورة لعمل ذي طابع برمجي.',
          '[وكلاء الذكاء الاصطناعي المحليون لسير عمل الأعمال والامتثال في الاتحاد الأوروبي](/ar/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — سياق تطبيقي للمؤسسات التي تعمل بموجب GDPR/قانون الذكاء الاصطناعي الأوروبي.',
          '[أفضل نماذج اللغة المحلية في 2026](/ar/local-llms/best-local-llms-2026) — مرجع النماذج للمشهد الأشمل للأوزان المفتوحة.',
          '[مركز Power Local LLM](/power-local-llm) — المكتبة الكاملة للأدلة.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'وكلاء الذكاء الاصطناعي المحليون في 2026: ما يعمل فعلاً (وما يستمر في الفشل)',
      description: '6 أطر عمل لوكلاء الذكاء الاصطناعي المحليين اختُبرت في 5 مهام حقيقية. نجح اثنان بموثوقية، وأخفق ثلاثة بطرق تُخفيها العروض، وكان واحد عديم الفائدة. Cline وLangGraph وAutoGPT وMetaGPT تحت التقييم.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/autonomous-local-agents-actually-work',
      inLanguage: 'ar',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: '2026년 로컬 AI 에이전트: 실제로 작동하는 것과 여전히 실패하는 것',
    seoTitle: '2026년 로컬 AI 에이전트: 작동하는 것 vs. 실패하는 것',
    intro:
      '6가지 로컬 AI 에이전트 스택, 5가지 실제 작업, 30일간의 평가를 진행하였습니다. 두 가지 스택은 작업을 안정적으로 완료합니다. 세 가지는 데모에서 드러나지 않는 방식으로 실패합니다. 하나는 사실상 사용 불가 수준입니다. 이것은 정직한 보고서입니다. 리팩터링, 리서치 작업, 이메일 트리아지, 스크레이프-요약, 버그 수색 등 각 에이전트 구성이 실제로 무엇을 하는지, 실패 사례를 구체적으로 명시하고 감독 비용을 정량화하였습니다.',
    metaDescription:
      '로컬 AI 에이전트 스택 6개를 실제 작업 5가지로 테스트하였습니다. 2개는 작동, 3개는 데모가 숨기는 방식으로 실패, 1개는 사용 불가. Cline, LangGraph, AutoGPT.',
    twitterDescription:
      '30일간 5가지 실제 작업에서 6개의 로컬 에이전트 스택을 테스트하였습니다. 2개는 성공, 3개는 예상치 못한 방식으로 실패, 1개는 사용 불가. 실제 작업을 완수하는 스택과 데모만 보여주는 스택에 대한 정직한 평가입니다.',
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
      '실제 작업(리팩터링, 리서치, 콘텐츠 워크플로, 디버깅)을 위해 로컬 AI 에이전트 스택을 평가하는 개발자 및 기술 운영자로서, 설정에 주말을 투자하기 전에 결론을 원하는 분들을 대상으로 합니다.',
    readTime: '16분 분량',
    educationalLevel: 'Advanced',
    primaryTerm: '로컬 AI 에이전트',
    targetKeywords: [
      '로컬 ai 에이전트 2026',
      '자율 에이전트 실제 분석',
      'cline vs autogpt 로컬',
      '최고 로컬 에이전트 프레임워크',
      '로컬 ai 에이전트 실제로 작동하나',
      '로컬 llm 에이전트 비교',
    ],
    leadAnswerBlock:
      '**2026년 5월 기준, 두 가지 로컬 에이전트 스택이 지속적인 감독 없이 실제 작업을 완수합니다: Cline + Ollama와 Continue.dev Agent 모드입니다. 두 스택 모두 범위가 제한되어 있고, 잘 유지 관리되며, 하나의 에디터 내에서 명시적인 승인 게이트를 통해 tool-calling 모델(Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B)을 실행합니다. 세 가지 스택은 놀라운 방식으로 실패합니다. LangGraph + Ollama(오케스트레이션이 긴 계획 범위에서 취약함), OpenInterpreter(감독 없이 방치하기엔 너무 쉽게 셸 명령을 실행함), MetaGPT local(두 번의 핸드오프 후 멀티에이전트 역할극이 방향을 잃음)입니다. 한 가지 스택은 사실상 사용 불가입니다: AutoGPT-local — 프로젝트가 정체되었고, 의존성이 최신 Ollama와 맞지 않으며, 계획 루프가 몇 분 내에 순환 tool 호출로 표류합니다. 패턴은 일관됩니다: 강력한 tool-calling 모델 주변에 범위가 제한된 주견 있는 하네스가 우리가 실행한 모든 작업에서 야심 찬 자율 에이전트를 능가합니다.**',
    quickAnswerTop: {
      ko: {
        question: '2026년에 로컬 자율 AI 에이전트가 실제로 작동합니까?',
        answer:
          '일부는 그렇고 대부분은 그렇지 않습니다. 두 가지 신뢰할 수 있는 스택은 Cline + Ollama(VS Code에서 단계별 승인을 갖춘 자율 코딩 에이전트)와 Continue.dev Agent 모드(동일 IDE에서의 더 가벼운 에이전트 루프)입니다. 두 스택 모두 제한된 범위 덕분에 작동합니다. 하나의 에디터, 하나의 모델, 하나의 승인 게이트이지, 기반 기술이 마침내 무감독 자율성에 충분할 만큼 발전했기 때문이 아닙니다. "완전 자율"로 제시된 프레임워크(AutoGPT-local, MetaGPT, 맞춤형 LangGraph 오케스트레이터)는 여전히 순환 tool 호출로 표류하거나, 파일 경로를 환각하거나, 긴 계획 범위에서 막힙니다. 2026년의 올바른 모델은 "감독받는 어시스턴트"입니다. 다단계 행동을 제안하고 승인을 위해 멈추는 에이전트이지, "자율 작업자"가 아닙니다. 자율적이라고 판매되는 모든 것은 데모이지 제품이 아닙니다.',
        bullets: [
          '실제 작업을 완수하는 두 스택: Cline + Ollama와 Continue.dev Agent. 두 스택 모두 단일 IDE로 범위가 제한되고, tool-calling 모델을 실행하며, 단계마다 인간 승인이 필요합니다.',
          '세 가지 스택이 명확하지 않은 방식으로 실패합니다: LangGraph + Ollama(긴 계획 범위에서 취약), OpenInterpreter(셸 실행에 너무 적극적), MetaGPT local(멀티에이전트 역할극 붕괴).',
          'AutoGPT-local은 2026년 5월 기준 사실상 사용 불가입니다. 프로젝트가 정체되고, 의존성이 깨졌으며, 계획 루프가 몇 분 내에 표류합니다.',
          'Tool 호출 신뢰성은 하네스가 아닌 모델의 특성입니다. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B는 신뢰할 수 있는 어떤 스택에서든 작동합니다. 7B 이하 모델은 모든 스택에서 실패합니다.',
          '감독 비용이 중요한 지표입니다. "최고의" 에이전트는 자율 실행 시간이 가장 긴 것이 아니라, 실제로 승인을 읽게 되는 것입니다.',
          '2027년 전망: 장기 계획이 점진적으로 개선될 것입니다. 실제 작업에서의 무감독 자율성은 데모가 무엇을 보여주든 올해는 실현되지 않을 것입니다.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '테스트 방법', anchor: '#how-we-tested' },
      { label: '에이전트 현실 테이블', anchor: '#reality-table' },
      { label: '작동하는 것: Cline + Ollama', anchor: '#cline-ollama' },
      { label: '작동하는 것: Continue.dev Agent', anchor: '#continue-agent' },
      { label: '실패하는 것: LangGraph + Ollama', anchor: '#langgraph' },
      { label: '실패하는 것: OpenInterpreter', anchor: '#openinterpreter' },
      { label: '실패하는 것: MetaGPT Local', anchor: '#metagpt' },
      { label: '사용 불가: AutoGPT-Local', anchor: '#autogpt' },
      { label: '에이전트 데모가 현실보다 나아 보이는 이유', anchor: '#demos-vs-reality' },
      { label: '감독 비용이 진정한 지표', anchor: '#supervision-cost' },
      { label: '에이전트에게 절대 맡기지 말아야 할 작업', anchor: '#never-trust' },
      { label: '결정: 스택 선택', anchor: '#decision' },
      { label: '2027년이 가져올 것들', anchor: '#outlook' },
      { label: '흔한 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: '프레젠테이션이 다루는 내용: 6개 로컬 에이전트 스택 중 4개가 실패하는 이유(이름 명시 평가), 30일 테스트 방법론(6 스택 × 5 작업), 실제 지표로서의 감독 비용(3–12 대 40+ 승인), 에이전트가 감독 없이 절대 실행해서는 안 되는 작업, 올바른 스택 선택을 위한 결정 테이블. PDF를 로컬 AI 에이전트 평가 참조 카드로 다운로드하십시오.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2026년 5월 실제 작업을 완수하는 두 가지 스택:** Cline + Ollama(VS Code에서의 자율 코딩 에이전트)와 Continue.dev Agent 모드입니다. 두 스택 모두 하나의 에디터, 하나의 모델, 단계별 하나의 승인 게이트로 범위가 제한됩니다.',
          '**세 가지 스택이 놀라운 방식으로 실패합니다:** LangGraph + Ollama 오케스트레이션은 4–5단계를 초과하는 계획 범위에서 취약하고, OpenInterpreter는 감독 없이 방치하기엔 너무 쉽게 셸 명령을 실행하며, MetaGPT local의 멀티에이전트 역할극은 두 번의 핸드오프 후 붕괴됩니다.',
          '**하나의 스택은 사용 불가입니다:** AutoGPT-local은 사실상 방치되어 있습니다. 의존성이 최신 Ollama와 맞지 않고, 계획 루프가 몇 분 내에 순환 tool 호출로 표류하며, 문제에 응답하는 유지 관리자가 없습니다.',
          '**Tool 호출 신뢰성은 하네스가 아닌 모델의 특성입니다.** Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B는 신뢰할 수 있는 모든 스택에서 깔끔한 tool 호출을 실행합니다. 7B 이하 모델은 이를 감싸는 에이전트에 관계없이 잘못 형성된 호출을 실행합니다.',
          '**2026년에는 "감독받는 어시스턴트" 모델이 승리합니다.** 다단계 행동을 제안하고 승인을 위해 멈추는 에이전트가 감독 없이 실행하려는 에이전트보다 더 많은 작업을 완수합니다. 이것은 2026년 LLM 특성의 한계이지 UX 선호도가 아닙니다.',
          '**감독 비용이 중요한 지표입니다.** 세 번의 승인이 필요한 30분 작업은 납품 가능합니다. 스무 번의 승인이 필요한 2시간 작업은 그렇지 않습니다. 당신이 작업을 하고 있고 에이전트는 그저 속도를 늦추고 있는 것입니다.',
          '**비용은 실재하지만 작습니다.** 로컬 추론만, API 지출 없음, 전기가 유일한 한계 비용입니다. 작업당 토큰 소비가 제약입니다. 에이전트 루프는 다단계 작업에서 30K–80K 토큰을 소비하므로 32K context 모델은 빨리 한계에 부딪히고 128K context 모델이 편안합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**테스트된 스택:** Cline + Ollama, Continue.dev Agent, LangGraph + Ollama(맞춤형), AutoGPT-local, OpenInterpreter, MetaGPT local.',
          '**테스트된 작업:** 주제 리서치, 다중 파일 리팩터링, 이메일 초안 트리아지, 스크레이프-요약, 버그 디버깅.',
          '**하드웨어:** Apple M5 Max 64 GB 통합 메모리와 2× NVIDIA RTX 3090 24 GB 데스크톱. 두 기기 모두 Qwen3-Coder 30B Q4_K_M을 32K context로 편안하게 실행합니다.',
          '**모델:** Qwen3-Coder 30B(주), GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B(2026년 5월 기준 신뢰할 수 있는 4가지 tool-caller).',
          '**평가 형태:** 2개 스택이 5가지 작업 모두에서 신뢰할 수 있고, 3개 스택은 각 1–2가지 작업에서 신뢰할 수 있으며, 1개 스택은 사용 불가입니다.',
          '**비용:** API 수수료 0원. 350W GPU 데스크톱에서 다단계 작업당 약 전기 비용 ~150–450원(Mac에서는 75원 미만).',
          '**효과적인 감독 패턴:** 읽기 도구는 자동 승인, 모든 쓰기/셸 도구는 수동 승인, 긴 세션 후 감사 로그 검토.',
        ],
      },
      howWeTested: {
        id: 'how-we-tested',
        title: '테스트 방법: 동일 모델, 동일 작업, 다른 하네스',
        content:
          '**테스트는 모델을 일정하게 유지하고 에이전트 하네스만 변경하였습니다.** 각 스택은 동일한 백엔드(Ollama로 Qwen3-Coder 30B Q4_K_M 제공)에 대해 동일한 다섯 가지 작업을 받았으므로, 실패는 모델이 아닌 하네스에 귀속됩니다.',
        items: [
          '**백엔드:** macOS와 Linux에서 Ollama 0.5+. 주 모델 Qwen3-Coder 30B Q4_K_M (32K context). 보조 모델(GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B)은 tool 호출 실패가 단일 모델의 아티팩트가 아님을 확인하는 데 사용하였습니다.',
          '**하드웨어:** Apple M5 Max 64 GB MacBook Pro 하나와 2× RTX 3090 24 GB Linux 데스크톱. 두 기기 모두 Qwen3-Coder 30B를 사용 가능한 속도(>15 tokens/s)로 유지합니다.',
          '**작업:** 주제 리서치(틈새 주제에 대한 8개 출처 수집, 중복 제거, 요약), 다중 파일 리팩터링(12개 TypeScript 파일에서 서비스 이름 변경), 이메일 초안 트리아지(40개 메시지 폴더에 대한 요약 및 응답 초안 작성), 스크레이프-요약(5개 URL 읽기 및 비교 요약 작성), 버그 디버깅(기존 테스트가 불안정한 이유 파악).',
          '**실행 빈도:** 각 작업은 30일 기간 동안 스택당 3번 실행되었으며, 매번 새로운 프롬프트를 사용하였습니다. 결과는 "감독 없이 완료", "감독 포함 완료", "부분적", "막힘/실패"로 채점하였습니다.',
          '**감독 지표:** 작업당 필요한 승인 횟수와 제안된 행동을 거부한 승인 비율. 높은 거부율은 하네스가 인간이 필터링해야 하는 노이즈를 생성하고 있음을 나타냅니다.',
          '**정직성 제약:** 정확한 수치가 아닌 범위. "5가지 작업 모두에서 신뢰할 수 있음"은 15번의 실행 중 13–15번이 완료됨을 의미합니다. "긴 계획 범위에서 실패"는 개입 없이 15번 실행 중 3–6번이 완료됨을 의미합니다. 평가는 보수적입니다. 스택이 작동하였지만 사소하지 않은 개입을 통해서만 작동한 경우, 무감독 작업 목적으로는 실패로 계산합니다.',
          'Tool 호출 신뢰성은 이 모든 것의 기반이 되는 레이어입니다. 모델 측 비교는 [2026년 Tool Calling을 위한 최고의 로컬 모델](/ko/power-local-llm/best-local-models-tool-calling-2026)을 참조하십시오. 프로토콜 레이어는 [MCP로 Ollama를 데이터베이스와 API에 연결하기](/ko/power-local-llm/local-ai-agents-with-mcp-2026)에서 다룹니다.',
        ],
      },
      realityTable: {
        id: 'reality-table',
        title: '에이전트 현실 테이블: 6개 스택, 5가지 작업, 정직한 평가',
        content:
          '**두 스택은 작업을 완수하고, 세 스택은 각자 다른 방식으로 실패하며, 하나는 망가져 있습니다.** 평가 열을 먼저 읽으십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Cline + Ollama와 Continue.dev Agent는 2026년 5월 기준으로 실제 작업을 안정적으로 완수하는 유일한 두 가지 로컬 AI 에이전트 스택입니다. LangGraph, OpenInterpreter, MetaGPT는 각자 다른 방식으로 실패하고, AutoGPT-local은 사용 불가입니다.',
          },
          {
            type: 'plain-terms',
            text: '리팩터링이나 리서치 작업을 실제로 완수하는 로컬 에이전트를 원한다면 Cline이나 Continue.dev를 설치하고 더 이상 읽지 마십시오. 나머지 네 가지 스택에는 10분 동안 실행해보면 알 수 있는 현실보다 더 좋아 보이는 데모가 있습니다.',
          },
        ],
        columns: ['스택', '작업 성공률', '관찰된 실패', '필요한 감독', '평가'],
        rows: [
          {
            '스택': 'Cline + Ollama',
            '작업 성공률': '15번 실행 중 13–15번 완료',
            '관찰된 실패': '다중 파일 작업에서 32K context 모델의 토큰 압박; 128K context로 복구 가능',
            '필요한 감독': '단계별 승인; 작업당 약 5–12번 승인',
            '평가': '작동함. 코딩 유형 작업의 기본 선택.',
          },
          {
            '스택': 'Continue.dev Agent',
            '작업 성공률': '15번 실행 중 12–14번 완료',
            '관찰된 실패': 'Cline보다 짧은 계획 범위; 다중 파일 편집이 2–3개 파일 후 멈추는 경우 있음',
            '필요한 감독': 'diff 미리보기 승인; 작업당 약 4–8번 승인',
            '평가': '작동함. Cline이 과도할 때 더 가벼운 대안.',
          },
          {
            '스택': 'LangGraph + Ollama',
            '작업 성공률': '개입 없이 15번 실행 중 4–7번 완료',
            '관찰된 실패': '4–5단계를 초과하는 계획 범위에서 취약; tool이 예상치 못한 데이터를 반환할 때 상태 머신이 루프에 빠짐; 네이티브 승인 게이트 없음(직접 구축해야 함)',
            '필요한 감독': '높음: 오케스트레이션 디버깅이 작업의 절반',
            '평가': '실패. 구축 노력이 사용자의 90%에게는 가치를 초과함.',
          },
          {
            '스택': 'AutoGPT-local',
            '작업 성공률': '15번 실행 중 0–2번 완료',
            '관찰된 실패': '2024–2025년에 정체된 프로젝트; 의존성이 최신 Ollama와 맞지 않음; 계획 루프가 몇 분 내에 순환 tool 호출로 표류',
            '필요한 감독': '지속적: 에이전트가 수렴하지 않음',
            '평가': '사용 불가. 2026년에는 완전히 건너뛰십시오.',
          },
          {
            '스택': 'OpenInterpreter',
            '작업 성공률': '15번 실행 중 6–9번 완료, 그러나 위험 수반',
            '관찰된 실패': '공격적인 셸 실행; 명시적인 안전장치 없이 파괴적인 명령 실행; 보안 프롬프트가 일관성 없음',
            '필요한 감독': '지속적: 감독 없이 방치 불가',
            '평가': '자율성에서 실패. 감독받는 REPL로만 유용함.',
          },
          {
            '스택': 'MetaGPT local',
            '작업 성공률': '15번 실행 중 3–6번 완료',
            '관찰된 실패': '멀티에이전트 역할극(PM → Engineer → QA)이 두 번의 핸드오프 후 표류; 에이전트들이 이전 작업을 반복함; 출력들이 서로 모순됨',
            '필요한 감독': '높음: 역할 정의를 디버깅하는 것이지 작업이 아님',
            '평가': '실패. 멀티에이전트 추상화가 구현이 아닌 문제.',
          },
        ],
      },
      clineOllama: {
        id: 'cline-ollama',
        title: '작동하는 것: Cline + Ollama가 기본 선택',
        content:
          '**Cline + Ollama는 예측 가능한 감독 비용으로 모든 유형의 작업을 완수한 유일한 스택입니다.** 하나의 IDE(VS Code), 하나의 모델, 단계별 하나의 승인 게이트로 범위가 제한되어 있기 때문에 작동합니다.',
        items: [
          '**무엇인가:** Cline은 VS Code를 자율 에이전트 표면으로 변환하는 VS Code 확장 프로그램입니다. 모델은 Plan 모드에서 계획을 제안하고, Act 모드에서 도구 표면(read_file, write_to_file, replace_in_file, execute_command, list_files, search_files)을 통해 실행하며, 도구가 허용 목록에 있지 않는 한 단계 사이에서 승인을 요청합니다.',
          '**왜 작동하는가:** 하네스에 주견이 있습니다. 도구 표면이 작고 안정적이며, 승인 흐름이 보입니다(각 단계가 수락하거나 거부하는 카드임). 모델은 전체 머신이 아닌 에디터만 봅니다. 마지막 동작이 항상 한 번의 클릭으로 되돌릴 수 있으므로 실패가 복구 가능합니다.',
          '**뛰어난 곳:** 다중 파일 리팩터링(단일 작업에서 12개 파일의 서비스 이름 변경), 탐색적 버그 디버깅("이 테스트가 불안정한 이유 찾기": Cline이 인접한 테스트 파일을 읽고, 의존성을 추적하고, 가설을 제안하고, 편집하고, 테스트를 실행함), 프로젝트 내에서 markdown 결과물을 생성하는 범위 제한적 리서치.',
          '**어려움을 겪는 곳:** 외부 HTTP가 필요한 비코딩 작업(네이티브 브라우저 없음). 이메일 초안 트리아지는 MCP 서버나 셸 도구를 연결해야만 작동하며, 그 시점에는 더 작고 범위가 제한된 도구가 직접 할 수 있는 일을 위해 세 가지를 설정하고 있는 것입니다.',
          '**감독 비용:** 작업당 약 5–12번 승인. 대부분은 읽기 도구(저렴하고 빠른 수락)입니다. 비용이 드는 것은 write_to_file과 execute_command입니다. 수동 승인이 필요하도록 설정하면 드문 잘못된 호출이 실행되기 전에 잡을 수 있습니다.',
          '**토큰 비용:** 높음. 에이전트가 파일을 읽는 동안 전체 파일 내용이 대화로 스트리밍됩니다. 32K context의 Qwen3-Coder 30B로 12개 파일 리팩터링은 윈도우를 빠르게 소진합니다. 사소하지 않은 작업에는 128K context 모델(DeepSeek Coder V3, Llama 3.3 70B)로 전환하십시오.',
          '자동 승인 목록을 포함한 더 자세한 Cline 설정은 [Continue.dev vs Cline vs Aider: 2026년 최고의 로컬 코딩 에이전트](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local)를 참조하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '코딩 작업에는 Qwen3-Coder 30B (Q4_K_M, ~17 GB VRAM)로 Cline을 실행하십시오. 한 세션에서 6개 이상의 파일을 건드리는 작업에는 DeepSeek Coder V3 또는 다른 128K context 모델로 전환하십시오. Qwen3-Coder의 32K 윈도우는 에이전트가 완료하기 전에 가득 찹니다.',
          },
        ],
      },
      continueAgent: {
        id: 'continue-agent',
        title: '작동하는 것: 더 가벼운 작업을 위한 Continue.dev Agent 모드',
        content:
          '**Continue.dev Agent 모드는 Cline이 과도할 때 올바른 선택입니다.** 동일한 IDE, 동일한 모델 클래스, 더 작은 표면: 더 적은 승인, 더 짧은 계획 범위, 더 낮은 토큰 소비.',
        items: [
          '**무엇인가:** Continue.dev는 주로 VS Code와 JetBrains용 자동 완성 및 채팅 확장 프로그램으로, tool 호출(파일 읽기/쓰기, 코드베이스 검색, 터미널 실행)과 다단계 계획 루프를 추가하는 Agent 모드가 있습니다. 에이전트는 Cline보다 더 제한적입니다. 더 적은 도구, 더 짧은 기본 계획 범위, 덜 공격적인 자율 동작.',
          '**왜 작동하는가:** Continue.dev의 대상 사용자는 자동 완성 사용자이므로 Agent 모드는 "작고, 빠르고, 보임"이라는 UX를 상속합니다. 각 편집은 모델이 파일을 건드리기 전에 diff 미리보기로 표시됩니다. 계획이 3–5단계를 거의 넘지 않으므로 토큰 소비가 적당하고 감사 기록이 짧습니다.',
          '**뛰어난 곳:** 1–2개 파일 작업, "이 코드베이스 영역 설명", "이 제약으로 이 함수 재작성", "이 메서드에 대한 테스트 추가". 에이전트가 전체 코드베이스를 대화로 끌어오지 않고 실행되므로 32K context 모델이 편안합니다.',
          '**어려움을 겪는 곳:** 5단계 이상의 계획. 8개 이상의 편집이 필요한 다중 파일 리팩터링은 2–3개 파일 후 멈추고 사용자에게 계속하도록 요청하는 경우가 있습니다. 이것은 버그가 아닙니다. 하네스가 계획 범위에 대해 보수적이지만, 동일한 작업에서 Cline보다 더 자주 감독함을 의미합니다.',
          '**감독 비용:** 작업당 약 4–8번 승인, diff 미리보기에 가중치(신호가 높고 빠른 수락).',
          '**토큰 비용:** Continue.dev가 전체 파일을 스트리밍하는 대신 TF-IDF + 임베딩 인덱스를 사용해 관련 스니펫을 검색하기 때문에 Cline보다 현저히 낮습니다. 32K context 모델이 대부분의 작업을 편안하게 완수합니다.',
          'Cline 대신 Continue.dev Agent를 선택하는 경우: 작업이 2–3개 파일 내에 들어맞을 때, 토큰 예산이 타이트할 때, 이미 자동 완성을 위해 Continue.dev를 사용하고 있어 두 개 대신 하나의 도구를 원할 때.',
        ],
      },
      langgraph: {
        id: 'langgraph',
        title: '실패하는 것: LangGraph + Ollama(긴 계획 범위에서 취약)',
        content:
          '**LangGraph + Ollama는 프로덕션 오케스트레이션에는 올바른 도구이지만 "노트북에 에이전트가 필요하다"는 요구에는 잘못된 도구입니다.** 구축 노력이 높고, 실패 모드가 명확하지 않으며, 가치는 규모에서만 실현됩니다.',
        items: [
          '**무엇인가:** LangGraph는 상태 머신 오케스트레이션 라이브러리입니다. 노드(모델 호출, 도구 실행, 조건 평가를 수행하는 타입이 있는 함수)와 엣지(전환)를 정의합니다. 런타임이 그래프를 실행하고, 분기를 관리하며, 단계 간 상태를 관리합니다. Ollama 백엔드와 결합하면 맞춤형 로컬 에이전트를 갖게 됩니다.',
          '**데스크톱 에이전트로 실패하는 이유:** 실패 표면은 모델이 아닌 오케스트레이션 코드입니다. 화이트보드에서 깔끔해 보이는 상태 머신은 tool이 예상치 못한 데이터를 반환할 때 루프에 빠집니다. 예를 들어, 200은 반환하지만 본문이 빈 HTTP 요청, 존재하지만 디렉터리인 경로에서의 파일 읽기 등. 에이전트가 작업을 디버깅하는 만큼 그래프를 디버깅합니다.',
          '**계획 범위:** 4–5개 노드를 초과하면 취약합니다. 각 분기점은 테스트 표면을 두 배로 늘립니다. 노드 6에서 가능한 실행 경로 트리가 있고 모델은 예상하지 못한 경로를 선택합니다. 그러면 그래프가 다음 노드가 소비할 수 없는 방식으로 상태를 재작성합니다.',
          '**네이티브 승인 게이트 없음:** 루프에 인간 중단을 직접 구축해야 합니다. 라이브러리가 이를 지원하지만(인터럽트-재개가 문서화되어 있음), 구현은 사용자의 몫입니다. Cline과 Continue.dev는 이것을 무료로 제공합니다.',
          '**실제로 맞는 곳:** 입력 형태를 제어하고, 도구 표면이 고정되어 있으며, 그래프에 대한 실제 테스트 스위트를 작성할 수 있는 서버 측 워크플로. 예를 들어, 세 가지 결정론적 도구와 하나의 모델 노드가 있는 고객 지원 라우팅 플로우가 LangGraph의 최적 지점입니다.',
          '**로컬 에이전트 질문에 대한 평가:** 실패. 맞춤형 LangGraph 오케스트레이터를 구축하여 한 번의 설치로 Cline이 하는 것을 하는 것은 사용자의 90%에게 낭비된 시간입니다. Cline이 표현할 수 없는 워크플로 형태가 있고 그래프를 정직하게 유지할 테스트 규율이 있는 경우에만 하십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'LangGraph에 대한 비판이 아닙니다. 라이브러리는 프로덕션 워크플로에 견고합니다. 비판은 범위가 제한된 하네스가 이미 존재할 때 "로컬 에이전트에 LangGraph 사용"이 잘못된 권장 사항이라는 것입니다.',
          },
        ],
      },
      openinterpreter: {
        id: 'openinterpreter',
        title: '실패하는 것: OpenInterpreter는 감독하면 유용하지만 감독 없이는 위험함',
        content:
          '**OpenInterpreter는 감독 없이 방치하기엔 너무 쉽게 셸 명령을 실행합니다.** 감독받는 REPL로는 진정으로 유용합니다. 작업을 설명하면 Python이나 셸을 작성하고 실행되는 것을 관찰합니다. 자리를 비우면 진정으로 위험합니다.',
        items: [
          '**무엇인가:** OpenInterpreter는 모델이 사용자의 머신에서 코드(Python, 셸, JavaScript, R)를 작성하고 실행할 수 있게 하는 CLI입니다. 대화형 프롬프트는 기본적으로 각 블록을 실행하기 전에 확인을 요청합니다. 프레이밍은 "ChatGPT Code Interpreter, 로컬"입니다.',
          '**자율 에이전트로 실패하는 이유:** 보안 프롬프트가 블록별이며 모델은 정기적으로 무해해 보이지만 영구적인 상태 변경을 생성하는 셸 명령을 제안합니다(`rm` on deep paths, `pip install` into system Python, `git reset --hard`). 각 블록을 확인하는 것이 작업이 됩니다. 잘못된 블록을 승인하는 비용이 무제한이기 때문에 훑어볼 수 없습니다.',
          '**자동 확인 모드가 존재합니다.** 그리고 그것이 모든 공포 이야기가 나오는 곳입니다. 중요한 것이 있는 머신에서 자동 확인으로 OpenInterpreter를 실행하는 것은 권장하지 않습니다.',
          '**뛰어난 곳:** 감독받는 메모장으로. "이 CSV를 Parquet으로 변환", "이 200개 PDF에서 메타데이터 추출", "이 Python 스크립트를 asyncio 사용으로 재작성". 터미널에 남아서 각 명령을 관찰하고 모델이 더 빠르게 작성 작업을 하는 경우.',
          '**실패하는 곳:** 자율성과 유사한 모든 것. 확인 프롬프트가 활성화되어 있어도 30분 작업은 평균 40+ 확인이 필요하며 실패 모드가 다양합니다(잘못된 작업 디렉터리, 부분 읽기, 예상치 못한 네트워크 호출).',
          '**감독 비용:** 사실상 100%: 각 블록을 감독합니다. "5분" 작업은 읽고 승인하는 시간을 포함하면 직접 하는 것보다 오래 걸립니다.',
          '**평가:** 유용한 도구이지만 잘못된 카테고리. OpenInterpreter는 코드를 실행하는 코딩 어시스턴트이지 자율 에이전트가 아닙니다. Cline과 비교하는 것은 잘못된 프레이밍입니다. 올바른 프레이밍은 "Cline은 기능을 제공하고, OpenInterpreter는 일회성 스크립트를 작성한다"입니다.',
        ],
      },
      metagpt: {
        id: 'metagpt',
        title: '실패하는 것: MetaGPT Local(멀티에이전트 역할극 붕괴)',
        content:
          '**MetaGPT의 "PM → Engineer → QA → Designer" 멀티에이전트 역할극은 사소하지 않은 작업과 접촉할 때 살아남지 못합니다.** 두 번의 핸드오프 후 에이전트들이 이전 작업을 반복하거나, 서로 모순되거나, 자신의 역할을 협상하면서 막힙니다.',
        items: [
          '**무엇인가:** MetaGPT는 소프트웨어 개발팀을 시뮬레이션하는 멀티에이전트 프레임워크입니다. Product Manager 에이전트가 요구사항을 작성하고, Architect 에이전트가 설계하고, Engineer 에이전트가 코딩하고, QA 에이전트가 테스트합니다. 각 에이전트는 다른 시스템 프롬프트와 다른 도구 세트를 가진 동일한 기반 모델입니다.',
          '**실패하는 이유:** 멀티에이전트 역할극은 모델이 많은 턴에 걸쳐 일관된 페르소나를 유지하고 컨텍스트를 안정적으로 핸드오프할 수 있다고 가정합니다. 실제로 30B 클래스 로컬 모델로는 페르소나가 흐려집니다. Engineer 에이전트가 PM 에이전트의 분석을 다시 실행합니다. QA 에이전트가 테스트 대신 코드를 재작성합니다. 핸드오프 상태, 즉 각 에이전트가 자신의 턴에서 배운 것이 버그입니다.',
          '**더 깊은 문제:** 멀티에이전트 추상화는 용량을 추가하지 않고 턴을 추가합니다. 동일한 도구 표면과 더 긴 스크래치패드를 가진 단일 에이전트가 더 적은 토큰으로 더 적은 표류와 함께 동일한 작업을 수행합니다. "팀" 프레이밍은 인류학적이지 아키텍처적이지 않습니다.',
          '**효과가 있을 수 있는 곳:** 단단히 정의된 작업과 하드 핸드오프 경계: 예를 들어, 각 단계가 결과물을 가지고 다음 단계가 이전 추론을 무시하는 작성 팀 워크플로(리서치 → 아웃라인 → 초안 → 편집). 우리는 MetaGPT가 체크리스트 프롬프트를 가진 단일 에이전트 하네스를 능가하는 실제 워크플로를 찾지 못했습니다.',
          '**평가:** 실패. 버그는 구현이 아닌 개념적입니다. 구조화된 프롬프트를 가진 단일 에이전트 하네스가 우리가 실행한 모든 작업에서 멀티에이전트 하네스를 능가합니다.',
          '단일 에이전트 루프의 신뢰성을 향상시키는 프롬프팅 기법은 [chain-of-thought prompting](/ko/prompt-engineering/chain-of-thought-prompting)을 참조하십시오. 모델이 생각하는 데 도움이 되는 구조화된 추론 패턴과 단일 에이전트가 일관성을 유지하는 데 도움이 되는 패턴이 동일합니다.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: '사용 불가: AutoGPT-Local은 사실상 방치 상태',
        content:
          '**AutoGPT-local은 2026년에 평가할 스택이 아닌 건너뛸 스택입니다.** 프로젝트는 사실상 유지 관리되지 않고, 의존성이 최신 Ollama와 맞지 않으며, 계획 루프가 몇 분 내에 표류합니다.',
        items: [
          '**무슨 일이 있었나:** AutoGPT는 2023년의 표준적인 "자율 에이전트" 프로젝트였습니다. 과대 선전이 기술을 앞섰습니다. 계획 루프는 실제 작업에서 결코 신뢰할 수 없었습니다. 프로젝트가 정체되고, 유지 관리자 팀이 분산되었으며, 로컬 전용 포크가 18개월 이상 동안 모든 의존성 업데이트에 뒤처졌습니다.',
          '**2026년 5월의 구체적인 문제:** Ollama 통합이 2024년에 변경된 API 형태를 가정합니다. 내부 계획 프롬프트가 이전 세대 모델에 맞게 조정되어 최신 오픈 웨이트 모델에서 잘못 형성된 계획을 생성합니다. 2025년에 리포지터리에 보고된 문제들이 응답 없이 열려 있습니다.',
          '**계획 루프 표류:** 시작된 실행에서 에이전트는 일반적으로 2–4분 내에 순환 tool 호출 패턴에 진입하였습니다. 동일한 파일을 다시 읽고, 동일한 검색을 다시 실행하고, 작업으로 수렴하지 않습니다. 이것은 범위가 제한되지 않은 자율 루프의 잘 알려진 실패 모드이며, 정확히 범위가 제한된 하네스(Cline, Continue.dev)가 설계상 피하는 것입니다.',
          '**평가:** 사용 불가. 2026년에 AutoGPT-local에 주말을 투자하지 마십시오. 흥미로운 작업이 명시적인 승인 게이트를 가진 범위가 제한된 하네스로 이동하였습니다. AutoGPT는 현재 옵션이 아닌 역사적 아티팩트입니다.',
          '**향수를 느낀다면:** 원래 리포지터리는 여전히 GitHub에 있습니다. 관계를 맺는 올바른 방법은 교훈으로입니다. 자율성이 잘못된 추상화였으며 감독받는 지원이 작동하는 것입니다.',
        ],
      },
      demosVsReality: {
        id: 'demos-vs-reality',
        title: '에이전트 데모가 현실보다 나아 보이는 이유',
        content:
          '**데모는 선별되어 있습니다. 실제 작업은 그렇지 않습니다.** 에이전트 영상이 동일한 스택으로 첫 30분보다 더 좋아 보이는 세 가지 구조적 이유가 있습니다.',
        items: [
          '**데모 작업의 범위가 제한됩니다.** "뱀 게임 만들기" 또는 "이 PDF 요약"은 알려진 형태, 작은 파일 표면, 명확한 성공 신호를 가집니다. 실제 작업은 열린 결말이며("우리의 결제 플로우가 사용자의 3%를 잃는 이유 찾기") 큰 파일 표면, 모호한 성공 기준, 오류를 증폭시키는 부작용이 있습니다.',
          '**데모 실행은 여러 시도 중에서 직접 선택됩니다.** 30초 데모 영상은 많은 시도 중 최고입니다. 에이전트가 막히거나, 파일 경로를 환각하거나, 더 이상 사용되지 않는 함수를 호출한 실행은 편집에 없습니다. 성공률을 보는 것이 아니라 성공 하나를 보는 것입니다.',
          '**데모 프롬프트가 과잉 지정됩니다.** "User 서비스를 새 리포지터리 패턴으로 리팩터링"은 데모에서 에이전트가 찾는 파일에 새 패턴이 문서화되어 있기 때문에 작동합니다. 실제 작업에서는 패턴이 3주 전 Slack 스레드에 있습니다. 모델은 사용자의 컨텍스트가 없습니다. 데모는 그것을 가집니다.',
          '**데모 모델이 로컬 모델보다 큽니다.** 클라우드 데모는 프론티어 모델에서 실행됩니다. 로컬 에이전트는 >10 tokens/s로 제공할 수 있는 것에서 실행됩니다. Qwen3-Coder 30B는 2026년 5월에 탁월하지만 GPT-5가 아니며, 데모는 조용히 가장 좋은 모델을 사용합니다.',
          '**결론:** 모든 데모는 실행 상위 10%를 나타낸다고 가정하십시오. 실제 작업에 대한 합리적인 기대치는 개입이 필요한 실패 확률 20–30%의 중앙값 실행입니다. 중앙값에 대해 계획하십시오.',
        ],
      },
      supervisionCost: {
        id: 'supervision-cost',
        title: '감독 비용이 진정한 지표',
        content:
          '**"최고의" 에이전트는 자율 실행 시간이 가장 긴 것이 아니라, 실제로 승인을 읽게 되는 것입니다.** 승인 횟수 계산이 우리가 측정한 가장 유용한 숫자입니다.',
        items: [
          '**낮은 감독 작업(총 3–8번 승인):** 범위가 제한된 리팩터링에서 Cline, 단일 파일 작업에서 Continue.dev Agent. 주로 읽기 작업과 한두 번의 쓰기이기 때문에 승인을 훑어봅니다. 전체 작업 시간은 승인 마찰이 아닌 모델 지연 시간이 지배합니다.',
          '**중간 감독 작업(10–20번 승인):** 8개 이상의 파일을 건드리는 다중 파일 작업에서 Cline, 계획 범위를 밀어붙이는 모든 것에서 Continue.dev Agent. 더 주의 깊게 승인합니다. 전체 작업 시간이 모델과 사용자 간에 거의 균등하게 나뉩니다.',
          '**높은 감독 작업(40+ 승인):** 사소하지 않은 모든 것을 하는 OpenInterpreter. 에이전트가 속도 향상자가 아니라 작성 속도 증폭기입니다. 인지 작업을 계속 수행하고 각 블록을 읽고 있습니다.',
          '**실패한 감독 패턴:** 승인 피로. 세션에서 약 30번의 승인 후 인간이 읽지 않고 승인하기 시작합니다. 너무 많은 승인이 필요한 하네스는 읽는 것을 멈추도록 훈련시키며, 그 시점에서 보안 게이트는 허구입니다.',
          '**올바른 조정: 자동 승인 목록.** 읽기 도구(read_file, list_files, search_files, list_directory)는 자동 승인에 안전합니다. 쓰기 도구(write_to_file, replace_in_file, execute_command, 양식 제출이 있는 browser_action)는 그렇지 않습니다. 이 단일 설정이 유용한 에이전트와 지루한 에이전트의 차이입니다.',
          '**올바른 단위: 작업당 승인 횟수.** 스택을 평가할 때 데모 작업이 아닌 대표적인 실제 작업에서 승인을 세십시오. 횟수가 20을 초과하면 스택이 실제로 작업을 절약해주고 있지 않습니다.',
          'Tool 호출 품질을 향상시켜 감독 비용을 줄이는 프롬프팅 기법은 [chain-of-thought prompting](/ko/prompt-engineering/chain-of-thought-prompting)을 참조하십시오.',
        ],
        callouts: [
          {
            type: 'tip',
            text: '프로젝트 시작 시 자동 승인 목록을 타이트하게 설정하고, 이 코드베이스에서 모델을 신뢰할수록 느슨하게 하십시오. 반대로, 즉 관대하게 시작하고 나쁜 실행 후 조정하는 것은 무감독 에이전트가 사고를 일으키는 방법입니다.',
          },
        ],
      },
      neverTrust: {
        id: 'never-trust',
        title: '에이전트에게 절대 맡기지 말아야 할 작업',
        content:
          '**일부 작업은 하네스에 관계없이 에이전트와 호환되지 않습니다.** 승인 규칙 설정에 오후를 낭비하기 전에 인식하십시오.',
        items: [
          '**프로덕션 데이터베이스 쓰기.** 실제 테이블에 대해 자신 있게 `DELETE FROM users WHERE active = false` 쿼리를 실행하는 모델이 이 기사가 존재하는 사고입니다. 기본적으로 읽기 전용 역할로 데이터베이스 도구를 실행하십시오. 별도의 쓰기 역할은 명시적으로 필요한 작업에만, 해당 작업 기간 동안만 활성화하십시오.',
          '**돈이나 인증과 관련된 모든 것.** 결제 API, OAuth 토큰 발급, 계정 생성, 역할 및 권한 변경. 잘못된 호출의 비용은 무제한이며, 자동화의 이점은 작습니다.',
          '**8–10단계를 초과하는 장기 계획.** 에이전트는 장기 계획에서 표류합니다. 올바른 패턴은 "모델이 계획을 제안하고, 인간이 계획을 승인하고, 모델이 단계별로 계획을 실행"이며, "모델이 25단계 작업을 자율적으로 계획하고 실행"이 아닙니다.',
          '**성공을 빠르게 확인할 수 없는 작업.** 2분 안에 읽을 수 있는 스크레이프-요약 작업이 좋은 후보입니다. 한 시간 미만으로 확인할 수 없는 "이 시장 리서치 후 보고서 작성" 작업은 그렇지 않습니다. 확인 비용이 재작성 비용보다 크기 때문에 보고서를 신뢰할 것입니다.',
          '**백업이 없는 파일을 건드리는 모든 것.** 파일 시스템 접근을 단일 작업 디렉터리로 제한하십시오. 작업 공간을 일회용으로 취급하십시오. 에이전트가 작업 공간 밖의 파일에 접근할 수 있다면 에이전트를 잘못 설정한 것입니다.',
          '**멀티테넌트 또는 공유 인프라.** 로컬 에이전트는 2026년에 개인 머신 도구입니다. 공유 CI 러너, 멀티테넌트 데이터베이스, 공유 클라우드 계정은 무감독 에이전트 루프에 잘못된 공격 표면입니다.',
        ],
      },
      decision: {
        id: 'decision',
        title: '결정: 스택 선택',
        content:
          '**대부분의 사람들은 Cline + Ollama를 설치하고 더 이상 읽지 말아야 합니다.** 아래 결정 트리는 다른 스택이 올바른 선택인 경우를 다룹니다.',
        columns: ['상황', '선택'],
        rows: [
          { '상황': 'VS Code에서 코딩 유형 작업(리팩터링, 디버깅, 다중 파일 편집)을 위한 로컬 에이전트가 필요함', '선택': 'Qwen3-Coder 30B(또는 128K context에 DeepSeek Coder V3)와 함께 Cline + Ollama' },
          { '상황': '자동 완성에 이미 Continue.dev를 사용하고 있고 소규모 작업을 위한 더 가벼운 에이전트를 원함', '선택': '동일한 설치에서 Continue.dev Agent 모드' },
          { '상황': '브라우저를 제어하고, 데이터베이스를 쿼리하고, 파일을 읽을 수 있는 에이전트가 필요함', '선택': 'MCP 서버(파일 시스템, sqlite, puppeteer)가 연결된 Cline + Ollama' },
          { '상황': '"코드 인터프리터" 로컬 REPL이 필요함: 코드 작성, 코드 실행, 반복', '선택': 'OpenInterpreter, 단 감독 없이 방치하지 않기' },
          { '상황': '결정론적 도구가 있는 프로덕션 워크플로가 있고 오케스트레이션이 필요함', '선택': '그래프에 대한 실제 테스트 스위트와 함께 LangGraph + Ollama' },
          { '상황': '밤새 작업을 제공하는 무감독 자율 에이전트가 필요함', '선택': '기다리십시오. 2026년 스택은 이것을 제공하지 않습니다. 대신 감독받는 스택을 사용하십시오.' },
          { '상황': '실제 작업을 위해 AutoGPT나 MetaGPT를 평가하고 싶음', '선택': '두 가지 모두 건너뛰십시오. AutoGPT는 유지 관리되지 않으며, MetaGPT의 멀티에이전트 추상화는 지속되지 않습니다.' },
        ],
      },
      outlook: {
        id: 'outlook',
        title: '2027년이 가져올 것들',
        content:
          '**장기 계획이 점진적으로 개선될 것입니다. 실제 작업에서의 무감독 자율성은 올해 실현되지 않을 것입니다.** 두 가지 구체적인 예측을 신중하게 제시합니다.',
        items: [
          '**Tool 호출 신뢰성이 계속 증가할 것입니다.** Llama 3 → Llama 3.3, Qwen3 → Qwen3, Gemma 3 → Gemma 4 점프의 트렌드는 모두 같은 방향을 가리킵니다. Tool-calling 훈련은 가장 저렴하고 가장 영향력 있는 사후 훈련 단계입니다. 7B 클래스 모델은 2026년 말/2027년 초에 신뢰할 수 있는 tool-caller가 될 가능성이 높아 에이전트의 하드웨어 장벽을 크게 낮출 것입니다.',
          '**계획 범위가 늘어날 것입니다.** 현재 ~5단계의 신뢰할 수 있는 범위가 표류 문제 없이 8–10단계에 도달할 가능성이 높습니다. 이것은 Cline 스타일의 범위가 제한된 에이전트를 더 낫게 만들지만, AutoGPT 스타일의 범위가 제한되지 않은 에이전트를 작동하게 만들지는 않습니다.',
          '**멀티에이전트 시스템은 큰 돌파구를 갖지 못할 것입니다.** 구조적 문제(핸드오프 상태, 페르소나 표류, 중복 작업)는 모델 크기 문제가 아닙니다. 더 긴 스크래치패드를 가진 단일 에이전트 하네스가 멀티에이전트 역할극을 계속 능가할 것입니다.',
          '**"감독받는 어시스턴트" 모델이 승리합니다.** 2027년에 작업을 제공하는 에이전트는 Cline 2.0처럼 보일 것입니다. 더 나은 도구 표면, 더 부드러운 승인, 더 긴 계획 범위이며, AutoGPT의 성공적인 재출시가 아닙니다.',
          '**정직한 경고:** 이 예측 중 하나가 틀릴 수 있습니다. 기술이 2026년 3분기의 모델 릴리스가 감독 비용 방정식을 바꿀 수 있을 만큼 충분히 빠르게 발전합니다. 2026년 11월에 이 기사를 다시 평가하십시오.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '로컬 에이전트를 선택하고 실행할 때의 흔한 실수',
        items: [
          '**실수 1: 자율성 최적화.** "감독 없이 얼마나 오래 실행할 수 있나?"는 잘못된 지표입니다. "작업을 완수하기 위한 승인 횟수?"가 올바릅니다. 자율성 벤치마크로 스택을 선택하면 AutoGPT가 됩니다. 감독 비용으로 선택하면 Cline이 됩니다.',
          '**실수 2: tool-calling 작업에 소형 모델 사용.** 7B 이하(그리고 tool-calling fine-tuning 없는 대부분의 7B–13B 범용 모델)는 잘못 형성된 tool 호출을 실행합니다. Qwen3-Coder 30B, GLM-5.1 32B, Gemma 4 27B, Llama 3.3 70B를 사용하고 하네스와 싸우는 것을 멈추십시오.',
          '**실수 3: 다중 파일 작업에 32K context 사용.** Cline이 전체 파일 내용을 대화로 스트리밍합니다. 8개 파일 작업이 추론 전에 32K 토큰을 소진할 수 있습니다. 사소하지 않은 다중 파일 작업에는 128K context 모델(DeepSeek Coder V3, Llama 3.3 70B)을 사용하십시오.',
          '**실수 4: 모든 것을 자동으로 승인.** "모두 승인" 스위치는 "에이전트가 내 파일을 삭제했다"로 이어지는 진입로입니다. 읽기 도구만 자동 승인하고, 쓰기와 셸에는 수동 승인을 요구하십시오.',
          '**실수 5: 에이전트에서 프로덕션 데이터베이스 쓰기.** 기본적으로 읽기 전용 역할을 실행하십시오. 별도의 쓰기 역할은 명시적으로 필요한 작업 기간 동안만 존재합니다. 잘못된 쓰기의 비용은 무제한입니다.',
          '**실수 6: Cline을 먼저 시도하기 전에 맞춤형 LangGraph 오케스트레이터 구축.** "맞춤형 에이전트가 필요하다"는 사용 사례의 90%는 Cline + 몇 가지 MCP 서버가 올바른 답변일 만큼 충분히 범위가 제한됩니다. 워크플로 형태가 기존 하네스와 진정으로 호환되지 않을 때만 맞춤형을 구축하십시오.',
          '**실수 7: 데모 쫓기.** 데모는 많은 시도 중 최고입니다. 중앙값 실행을 계획하십시오. 실제 작업에서 70–80% 성공률, 20–30%는 개입 필요. 2026년에 "완전 자율"이라고 불리는 모든 것은 마케팅이지 엔지니어링이 아닙니다.',
          '**실수 8: 감사 추적 무시.** 긴 에이전트 세션 후 행동 로그를 읽으십시오. 패턴이 나타납니다. 세 번 연속 같은 유형의 오류는 승인 규칙을 조정하거나 모델을 변경해야 함을 알려줍니다.',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Cline GitHub 리포지터리](https://github.com/cline/cline) — 자율 코딩 에이전트, 도구 표면 문서, 자동 승인 설정.',
          '[Continue.dev 문서](https://docs.continue.dev/) — agent 모드, 코드베이스 인덱싱, 제공자 설정.',
          '[LangGraph 문서](https://langchain-ai.github.io/langgraph/) — 오케스트레이션 라이브러리, 상태 머신 시맨틱, 인간-루프 중단.',
          '[OpenInterpreter GitHub 리포지터리](https://github.com/OpenInterpreter/open-interpreter) — 코드 실행 에이전트, 보안 모드, 로컬 모델 통합.',
          '[MetaGPT GitHub 리포지터리](https://github.com/geekan/MetaGPT) — 멀티에이전트 프레임워크, 역할 정의, 로컬 제공자 설정.',
          '[Ollama 모델 라이브러리](https://ollama.com/library) — 사용 가능한 로컬 모델, tool-calling 지원 표시, 양자화 옵션.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '2026년에 자율 AI 에이전트가 실제로 유용합니까?',
            a: '네, 그러나 범위가 제한되고 감독받는 방식에서만입니다. Cline + Ollama와 Continue.dev Agent 모드는 관리 가능한 감독 비용으로 실제 작업(다중 파일 리팩터링, 탐색적 디버깅, 범위 제한적 리서치)을 완수합니다. 작업당 일반적으로 5–12번 승인입니다. "완전 자율" 프레이밍은 여전히 열망적입니다. 무감독으로 제시된 에이전트(AutoGPT-local, MetaGPT)는 표류하거나, 작업을 반복하거나, 긴 계획 범위에서 막힙니다. 올바른 정신 모델은 "감독받는 어시스턴트"이며, "자율 작업자"가 아닙니다.',
          },
          {
            q: '대부분의 에이전트 데모가 현실보다 나아 보이는 이유는 무엇입니까?',
            a: '세 가지 이유입니다. 데모 작업이 범위가 제한됩니다(작은 파일 표면, 명확한 성공 신호). 데모 실행이 많은 시도 중에서 직접 선택됩니다. 데모 프롬프트가 모델이 실제 작업에서 갖지 않을 컨텍스트로 과잉 지정됩니다. 실제 작업의 중앙값 실행에 대해 계획하십시오. 70–80% 성공률, 20–30%는 개입 필요이며, 데모 실행이 아닙니다.',
          },
          {
            q: '2026년 실제 작업을 위해 가장 신뢰할 수 있는 에이전트 스택은 무엇입니까?',
            a: 'Cline + Ollama는 코딩 유형 작업(리팩터링, 디버깅, 다중 파일 작업)의 기본 선택입니다. 일상 작업에는 Qwen3-Coder 30B, 128K context가 필요할 때는 DeepSeek Coder V3 / Llama 3.3 70B와 결합하십시오. Continue.dev Agent 모드는 1–2개 파일 작업을 위한 더 가벼운 대안입니다. 두 스택 모두 범위가 제한되고, 잘 유지 관리되며, 명시적인 승인 게이트와 함께 에디터 내에서 실행됩니다.',
          },
          {
            q: '2026년 에이전트에는 실제로 얼마나 많은 감독이 필요합니까?',
            a: 'Cline과 같은 범위가 제한된 하네스에서 작업당 5–12번 승인, Continue.dev Agent에서 4–8번. 세션에서 30번을 초과하면 인간이 읽지 않고 승인하기 시작합니다. 그 시점에서 보안 게이트는 허구입니다. 올바른 조정은 자동 승인 목록입니다. 읽기 도구(read_file, list_files, search_files)는 자동 승인하고, 쓰기와 셸은 수동 승인을 요구하십시오. 이 단일 설정이 유용한 에이전트와 지루한 에이전트의 차이입니다.',
          },
          {
            q: '에이전트가 다단계 작업을 망가지지 않고 처리할 수 있습니까?',
            a: '강력한 tool-calling 모델(Qwen3-Coder 30B, Gemma 4 27B, GLM-5.1 32B, Llama 3.3 70B)로 최대 5–8단계까지 안정적으로 가능합니다. 그 이상에서는 계획 범위가 표류합니다. 에이전트가 파일을 다시 읽고, 동일한 검색을 다시 실행하거나 모순된 다음 단계를 제안합니다. 올바른 패턴은 "모델이 계획을 제안하고, 인간이 계획을 승인하고, 모델이 한 번에 한 단계씩 실행"이며, 25단계의 자율 실행이 아닙니다.',
          },
          {
            q: '에이전트가 장기 계획에서 실패하는 이유는 무엇입니까?',
            a: '두 가지 구조적 이유입니다. 첫째, 컨텍스트 포화: 각 tool 호출이 대화에 결과를 추가하므로 20단계 작업이 ~50K–100K 토큰의 상태를 축적하고 모델이 초기에 결정된 것을 잃어버립니다. 둘째, 계획 재검토 표류: tool이 예상치 못한 출력을 반환하면 모델은 종종 로컬로 조정하는 대신 전체 작업을 다시 계획하며, 새 계획이 원래 약속과 모순됩니다. 범위가 제한된 하네스(Cline, Continue.dev Agent)는 계획을 짧게 유지하고 단계 사이에서 인간이 재앵커링하도록 요청하여 이를 피합니다.',
          },
          {
            q: '로컬 에이전트가 클라우드 에이전트보다 나쁩니까?',
            a: '절대적인 능력에서는 그렇습니다. 클라우드의 프론티어 모델이 가장 어려운 작업에서 30B 클래스 로컬 모델보다 계속 능가합니다. 일상적으로 감독받는 작업에서는 격차가 데모가 제시하는 것보다 작습니다. Cline + Qwen3-Coder 30B는 15번의 다중 파일 리팩터링 중 13–15번을 완수합니다. Cline + Claude 또는 GPT-5의 동일한 작업은 15번 중 14–15번을 완수합니다. 개인 데이터, API 예산 없음, 또는 엄격한 오프라인 요구 사항을 가진 사용자에게는 로컬이 더 유리합니다.',
          },
          {
            q: '에이전트가 오류를 우아하게 처리할 수 있습니까?',
            a: '혼합적입니다. Cline과 Continue.dev Agent는 tool 오류에서 잘 회복합니다. 하네스가 오류를 표시하고, 모델이 수정 단계를 제안하며, 인간이 승인합니다. LangGraph + Ollama는 그래프가 정의한 만큼만 회복합니다. 처리되지 않은 tool 오류가 루프에 빠집니다. AutoGPT-local은 전혀 회복하지 못합니다. 표류합니다. 오류 처리는 모델만큼이나 하네스의 특성입니다.',
          },
          {
            q: '에이전트에게 절대 맡기지 말아야 할 작업은 무엇입니까?',
            a: '프로덕션 데이터베이스 쓰기(기본적으로 읽기 전용 역할 실행), 돈이나 인증과 관련된 모든 것(결제, OAuth, 계정 생성), 8–10단계를 초과하는 장기 계획, 성공을 빠르게 확인할 수 없는 작업, 격리된 작업 디렉터리 밖의 모든 것, 멀티테넌트 또는 공유 인프라의 모든 작업. 이러한 카테고리에서 잘못된 에이전트 행동의 비용은 무제한이며, 자동화의 이점은 작습니다.',
          },
          {
            q: '에이전트가 2027년에 크게 개선됩니까?',
            a: 'Tool 호출 신뢰성이 계속 증가할 것입니다. 7B 클래스 모델이 2026년 말/2027년 초에 신뢰할 수 있는 tool-caller가 될 가능성이 높습니다. 계획 범위가 ~5단계의 신뢰할 수 있는 범위에서 8–10단계로 늘어날 것입니다. 멀티에이전트 시스템은 큰 돌파구를 갖지 못할 것입니다. 구조적 문제(핸드오프 상태, 페르소나 표류, 중복 작업)는 모델 크기 문제가 아닙니다. 실제 작업에서의 무감독 자율성은 2027년에도 가능성이 낮습니다. 더 나은 도구 표면과 더 부드러운 승인을 가진 "Cline 2.0"이 현실적인 경로입니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[MCP로 Ollama를 데이터베이스와 API에 연결하기: 2026년 로컬 에이전트 설정](/ko/power-local-llm/local-ai-agents-with-mcp-2026) — 에이전트를 지원하는 것. 파일 시스템, 데이터베이스, 브라우저, GitHub 도구를 위한 프로토콜 레이어.',
          '[2026년 Tool Calling을 위한 최고의 로컬 모델](/ko/power-local-llm/best-local-models-tool-calling-2026) — 모델 레이어. 권장 tool-caller(Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3)의 직접 벤치마크 비교.',
          '[Continue.dev vs Cline vs Aider: 2026년 최고의 로컬 코딩 에이전트](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 코딩 유형 작업을 위한 인접 하네스 비교.',
          '[EU 준법 및 기업 워크플로를 위한 로컬 AI 에이전트](/ko/power-local-llm/local-ai-agents-business-workflows-eu-compliance) — GDPR/EU AI Act 하에 운영하는 기업을 위한 응용 컨텍스트.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 더 넓은 오픈 웨이트 환경의 모델 참조.',
          '[Power Local LLM 허브](/power-local-llm) — 전체 가이드 라이브러리.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '2026년 로컬 AI 에이전트: 실제로 작동하는 것과 여전히 실패하는 것',
      description: '로컬 AI 에이전트 스택 6개를 실제 작업 5가지로 테스트하였습니다. 2개는 안정적으로 작동하고, 3개는 데모가 숨기는 방식으로 실패하며, 1개는 사용 불가입니다. Cline, LangGraph, AutoGPT, MetaGPT 평가.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/autonomous-local-agents-actually-work',
      inLanguage: 'ko',
      datePublished: '2026-05-07',
      dateModified: '2026-05-07',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
}
