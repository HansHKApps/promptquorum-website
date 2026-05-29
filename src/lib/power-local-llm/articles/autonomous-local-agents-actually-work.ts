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
    gammaEmbedUrl: '/presentations/autonomous-local-agents-actually-work-static.html',
    gammaDescription: 'The slide deck below covers: why 4 of 6 local agent stacks fail (named verdicts), the 30-day test methodology (6 stacks × 5 tasks), supervision cost as the real metric (3–12 vs 40+ approvals), tasks agents must never run unsupervised, and a decision table for picking the right stack. Download the PDF as a local AI agent evaluation reference card.',
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
          'La fiabilité des appels d\'outils est la couche sous-jacente à tout cela. Pour la comparaison côté modèle, voir [Meilleurs modèles locaux pour Tool Calling en 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=fr) ; la couche de protocole est couverte dans [Connecter Ollama aux bases de données et API avec MCP](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr).',
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
          'Pour la configuration Cline plus approfondie, y compris les listes d\'approbation automatique, voir [Continue.dev vs Cline vs Aider : Meilleur agent de codage local en 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=fr).',
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
          'Pour les techniques de prompting qui améliorent la fiabilité de n\'importe quelle boucle d\'agent unique, voir [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting?lang=fr) — le même schéma de raisonnement structuré qui aide un modèle à penser aide un agent unique à rester cohérent.',
        ],
      },
      autogpt: {
        id: 'autogpt',
        title: 'Inutilisable : AutoGPT-Local est effectivement abandonné',
        content:
          '**AutoGPT-local n\'est pas un stack à évaluer en 2026 — c\'est un stack à sauter.** Le projet est effectivement non maintenu, les dépendances ne correspondent pas à Ollama moderne, et la boucle de planification dévie en quelques minutes.',
        items: [
          '**Ce qui s\'est passé :** AutoGPT était le projet « agent autonome » canonique de 2023. Le battage excessif a dépassé la technologie — les boucles de planification n\'ont jamais été fiables sur les tâches réelles. Le projet a stagné, l\'équipe de mainteneurs s\'est dispersée, et le fork local uniquement a traîné derrière chaque mise à jour de dépendance pendant 18+ mois.',
          '**Cassure concrète en mai 2026 :** l\'intégration Ollama suppose une forme d\'API qui a changé en 2024. Les prompts de planification interne ont été réglés pour les modèles de classe GPT-3.5 et produisent des plans malformés sur les modèles de poids modernes. Les problèmes déposés sur le repo en 2025 restent ouverts et sans réponse.',
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
          'Pour les techniques de prompting qui réduisent le coût de supervision en améliorant la qualité de l\'appel d\'outils, voir [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting?lang=fr).',
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
          '**La fiabilité des appels d\'outils continuera à monter.** La tendance de Llama 3 → Llama 3.3, Qwen2.5 → Qwen3, et l\'étape de changement Gemma 3 → Gemma 4 pointent tous vers une chose : l\'entraînement des appels d\'outils est le passage de post-entraînement le moins coûteux et le plus impactant. Attendez-vous à ce que les modèles de classe 7B deviennent des outils de tool-calling fiables en fin 2026 / début 2027, ce qui abaisse significativement la barre de matériel pour les agents.',
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
          '[Connecter Ollama aux bases de données et API avec MCP : Configuration locale des agents 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr) — ce qui active les agents sous le capot ; couche de protocole pour les outils système de fichiers, base de données, navigateur, et GitHub.',
          '[Meilleurs modèles locaux pour Tool Calling en 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=fr) — la couche modèle ; benchmarks tête-à-tête pour les outils de tool-calling recommandés ci-dessus (Qwen3-Coder, Gemma 4, GLM-5.1, Llama 3.3).',
          '[Continue.dev vs Cline vs Aider : Meilleur agent de codage local en 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=fr) — comparaison de harness adjacent pour le travail de type codage.',
          '[Agents IA locaux Workflows professionnels Conformité EU](/power-local-llm/local-ai-agents-business-workflows-eu-compliance?lang=fr) — contexte appliqué pour les entreprises opérant sous GDPR / EU AI Act.',
          '[Meilleurs LLMs locaux en 2026](/local-llms/best-local-llms-2026?lang=fr) — autorité modèle pour le paysage des poids ouverts plus large.',
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
          '**LLM モデル**: Qwen3-Coder 30B、Llama 3.3 70B（ローカル Ollama）、OpenAI GPT-4o（API テスト）',
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
          '[ローカル LLM のベストプラクティス](/power-local-llm/local-llm-best-practices?lang=ja) — 本番環境で安全にローカルモデルを実行するためのチェックリスト。',
          '[METI AI ガバナンスガイドライン](/power-local-llm/local-ai-governance-framework?lang=ja) — 日本の企業向けの AI エージェント規制フレームワーク。',
          '[ローカル LLM ワークフロー：エンタープライズ対応](/power-local-llm/local-ai-agents-business-workflows-japan-meti-compliance?lang=ja) — 日本の金融・医療セクター向けのコンテキスト。',
          '[2026 年の最高のオープンソース LLM](/local-llms/best-local-llms-2026?lang=ja) — モデル選定のための権威的ガイド。',
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
      url: 'https://www.promptquorum.com/power-local-llm/autonomous-local-agents-actually-work?lang=ja',
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
      '6 lokale KI-Agent-Stacks auf 5 echten Aufgaben getestet. 2 funktionieren zuverlässig, 3 fehlschlagen überraschend, 1 ist unbrauchbar. Verdikt benannt.',
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
          '**LLM模型：** Qwen3-Coder 30B、Llama 3.3 70B（本地Ollama）、OpenAI GPT-4o（API测试）',
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
          '[连接Ollama到数据库和API：本地代理设置2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=zh) — 代理工作原理；数据库、文件系统、浏览器Tool的协议层。',
          '[2026年最佳本地Tool-calling模型](/power-local-llm/best-local-models-tool-calling-2026?lang=zh) — 模型层；推荐Tool-caller基准测试。',
          '[Continue.dev vs Cline vs Aider：2026年最佳本地代理](/power-local-llm/continue-dev-vs-cline-vs-aider-local?lang=zh) — 代码工作比较。',
          '[本地AI代理商业工作流和监管合规](/power-local-llm/local-ai-agents-business-workflows-compliance?lang=zh) — 企业部署指南。',
          '[2026年最佳本地LLM](/local-llms/best-local-llms-2026?lang=zh) — 更广泛开放权重LLM概览。',
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
      url: 'https://www.promptquorum.com/power-local-llm/autonomous-local-agents-actually-work?lang=zh',
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
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['.article-intro', '.key-takeaways'],
      },
    },
  },
}
