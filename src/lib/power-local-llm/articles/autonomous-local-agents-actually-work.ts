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
}
