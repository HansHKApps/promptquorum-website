// Power Local LLM — Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026
// Slug: continue-dev-vs-cline-vs-aider-local
// EN-only in this iteration; DE/FR/JA/ZH render as "Coming Soon" via the article page.

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026',
    seoTitle: 'Continue.dev vs Cline vs Aider: Local Coding Agent Verdict 2026',
    intro:
      'Continue.dev, Cline, and Aider are the three serious open-source coding harnesses that pair cleanly with a local LLM in 2026. They are not interchangeable: each is built around a different workflow primitive — autocomplete, autonomous agent loop, or git-native diff. Pick by workflow first, model second, and you avoid 90% of the integration pain.',
    metaDescription:
      'Continue.dev, Cline, and Aider compared as local coding agents in 2026. Edit model, IDE fit, undo, tool calls, and context strategy — picked by workflow, not hype.',
    twitterDescription:
      'Three local coding harnesses, three different workflow primitives. Continue.dev for autocomplete, Cline for autonomous agents, Aider for git-native diffs. Verdict per workflow inside.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Llama 3.3 70B',
      'Codestral 22B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Developers running a local coding LLM (Qwen3-Coder, DeepSeek Coder, Codestral, Llama 3.3) who need to choose a harness that fits their existing editor and project workflow.',
    readTime: '14 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local coding agent',
    targetKeywords: [
      'continue.dev vs cline',
      'cline vs aider',
      'best local coding agent 2026',
      'local llm coding harness',
      'aider local llm',
      'continue.dev local llm',
    ],
    leadAnswerBlock:
      '**Continue.dev, Cline, and Aider solve different problems with the same local model. Continue.dev is built around autocomplete and an in-IDE chat panel — best for edit-as-you-type workflows in VS Code or JetBrains. Cline is an autonomous VS Code agent that plans, edits, and runs commands across multiple files with explicit approval gates — best for multi-step refactors and bug-hunts. Aider is a terminal-first, git-native CLI that turns every edit into a commit with surgical search-and-replace diffs — best for repo-wide work and reviewers who want every change reflected in `git log`. Choose by workflow primitive (autocomplete vs agent loop vs git diff), not by which tool sounds most powerful.**',
    quickAnswerTop: {
      en: {
        question: 'Which local coding agent is best in 2026: Continue.dev, Cline, or Aider?',
        answer:
          'Pick Continue.dev if you spend most of your day inside VS Code or JetBrains and want autocomplete plus a chat panel that reaches into your codebase. Pick Cline if you want an autonomous agent that plans, edits multiple files, and runs commands with approval gates between steps — strongest for refactors and exploratory bug-hunts. Pick Aider if you live in the terminal and want every edit committed as a separate, reviewable git commit. All three run fully offline against any local LLM endpoint (Ollama, llama.cpp, LM Studio, vLLM). The right pick is a workflow choice, not a quality ranking.',
        bullets: [
          'Continue.dev — autocomplete + in-IDE chat. Best for VS Code and JetBrains users who want incremental edits without leaving the editor.',
          'Cline — autonomous agent with plan/act modes, tool calls, and per-step approval. Best for multi-file refactors and bug-hunts.',
          'Aider — terminal CLI with git-native commits and search-and-replace diffs. Best for reviewable, undo-friendly repo-wide work.',
          'All three work with any OpenAI-compatible local endpoint — Ollama is the easiest path, llama.cpp and vLLM are supported through provider configs.',
          'Workflow fit beats raw capability. Forcing a terminal-first dev into Cline (or a VS Code-only dev into Aider) costs more time than the harness saves.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'Comparison Table', anchor: '#comparison-table' },
      { label: 'Which One Should You Pick?', anchor: '#which-one' },
      { label: 'Continue.dev: Deep Dive', anchor: '#continue-dev' },
      { label: 'Cline: Deep Dive', anchor: '#cline' },
      { label: 'Aider: Deep Dive', anchor: '#aider' },
      { label: 'Edit Model: How Each Writes Code', anchor: '#edit-model' },
      { label: 'Undo and Rollback', anchor: '#undo' },
      { label: 'Context Window Strategy', anchor: '#context' },
      { label: 'Tool Call Reliability', anchor: '#tool-calls' },
      { label: 'IDE Integration', anchor: '#ide-integration' },
      { label: 'Workflow Fit by Use Case', anchor: '#workflow-fit' },
      { label: 'Decision Tree', anchor: '#decision-tree' },
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
          '**Continue.dev** is autocomplete-first: a VS Code and JetBrains extension with FIM (fill-in-the-middle) completions, an in-IDE chat sidebar, and `@`-context providers (codebase, file, docs, terminal). The closest open-source analogue to Copilot for local models.',
          '**Cline** is agent-first: a VS Code extension with explicit Plan and Act modes, a tool-call loop (read_file, write_to_file, execute_command, browser_action), and an approval gate at every step. Designed to run autonomously across multiple files with you supervising.',
          '**Aider** is git-first: a terminal CLI that maintains a tree-sitter repo map, edits files via search-and-replace diff blocks, and commits every change. Undo is `git reset` — the most reviewable workflow of the three.',
          'All three speak OpenAI-compatible endpoints. **Ollama** is the smoothest local backend; **llama.cpp** and **vLLM** work through provider settings or proxies like LiteLLM.',
          '**Tool-calling reliability** depends on the model, not the harness. Qwen3-Coder 30B and DeepSeek Coder V3 are the most reliable tool-callers in May 2026; smaller models (7B class) regularly emit malformed tool calls regardless of which harness wraps them.',
          '**Context window strategy** differs sharply: Continue.dev relies on the embedded codebase index and `@`-pinned context, Cline streams full file contents into the conversation (high token usage), Aider uses a tree-sitter repo map plus explicit `/add` and `/drop` to keep the working set small.',
          'For a single developer, **workflow fit** dominates outcomes more than any benchmark. The harness you actually keep open is the one you should pick.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Continue.dev** — autocomplete + chat, VS Code and JetBrains, lowest-friction install of the three.',
          '**Cline** — autonomous agent with approval gates, VS Code only, highest capability and highest token usage.',
          '**Aider** — terminal CLI, git-native commits, every edit is reviewable and undoable through git.',
          'All three run against the same local backend — **Ollama** is the smoothest path; **llama.cpp** and **vLLM** also work via OpenAI-compatible config.',
          '**Tool-call reliability is a model property, not a harness property.** Qwen3-Coder 30B and DeepSeek Coder V3 are reliable in all three; 7B-class models fail in all three.',
          '**Context budget:** Continue.dev and Aider stay comfortable on a 32K-context model; Cline needs **128K** for non-trivial multi-file tasks.',
          '**Pick by editor:** JetBrains → Continue.dev or Aider. Vim/Neovim or SSH → Aider. VS Code with autocomplete-heavy days → Continue.dev. VS Code with multi-file refactors → Cline.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'How Continue.dev, Cline, and Aider Compare in 2026',
        content:
          'All three harnesses are open source, free to run, and work with any local LLM endpoint. The structural differences below decide which one fits your workflow.',
        image: '/images/coding-agent-comparison-en.svg',
        imageCaption: 'Continue.dev vs Cline vs Aider: Continue.dev for autocomplete in VS Code/JetBrains (32K context), Cline for autonomous multi-file agents in VS Code (128K recommended), Aider for git-native terminal commits (32K context).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue.dev is Copilot-style autocomplete, Cline is an autonomous agent that edits across files, Aider is a terminal tool that commits every edit to git — pick by workflow, not by benchmark.',
          },
          {
            type: 'plain-terms',
            text: 'Three free tools, the same local model, three completely different workflows. Continue.dev feels like Copilot — tab to accept suggestions inside your editor. Cline feels like a junior developer you supervise — it plans and edits across files while you approve each step. Aider feels like pair-programming in the terminal — you talk, it commits. Try the one that matches how you already work.',
          },
        ],
        columns: ['Feature', 'Continue.dev', 'Cline', 'Aider'],
        rows: [
          {
            'Feature': 'Primary surface',
            'Continue.dev': 'VS Code and JetBrains extension',
            'Cline': 'VS Code extension',
            'Aider': 'Terminal CLI (any editor on the side)',
          },
          {
            'Feature': 'Workflow primitive',
            'Continue.dev': 'Autocomplete + in-IDE chat',
            'Cline': 'Autonomous agent loop with approval gates',
            'Aider': 'Git-native diff edits, every change a commit',
          },
          {
            'Feature': 'Edit model',
            'Continue.dev': 'Inline FIM + apply-to-file from chat',
            'Cline': 'Tool calls (read_file, write_to_file, replace_in_file)',
            'Aider': 'Search-and-replace diff blocks; "whole" mode for tiny files',
          },
          {
            'Feature': 'Multi-file edits',
            'Continue.dev': 'Manual: chat suggests, you apply per file',
            'Cline': 'Native: agent edits across files in one task',
            'Aider': 'Native: name files at the prompt, edits land in one commit',
          },
          {
            'Feature': 'Undo / rollback',
            'Continue.dev': 'VS Code undo stack on applied edits',
            'Cline': 'Per-edit revert in the agent UI; git for hard rollback',
            'Aider': '`/undo` reverses the last commit; full git history below',
          },
          {
            'Feature': 'Tool call protocol',
            'Continue.dev': 'OpenAI tools (function-calling) in Agent mode',
            'Cline': 'Custom XML tool blocks with strict schema',
            'Aider': 'No tool calls; prompts the model to emit diff blocks',
          },
          {
            'Feature': 'Codebase context',
            'Continue.dev': 'Local index (TF-IDF + embeddings) + `@`-providers',
            'Cline': 'Streams full file contents into the conversation',
            'Aider': 'Tree-sitter repo map + manual `/add` and `/drop`',
          },
          {
            'Feature': 'Approval / safety',
            'Continue.dev': 'Diff preview before each apply',
            'Cline': 'Per-step approval; auto-approve allow-lists configurable',
            'Aider': 'Diff preview in terminal; commit step is automatic',
          },
          {
            'Feature': 'Best for',
            'Continue.dev': 'Edit-as-you-type, in-IDE chat, autocomplete-heavy days',
            'Cline': 'Multi-file refactors, exploratory debugging, repo tasks',
            'Aider': 'Reviewable repo-wide changes, terminal-driven workflows',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Which One Should You Pick',
        content:
          '**The right harness is decided by your editor, your tolerance for autonomous edits, and how you review changes.** Use this shortcut.',
        image: '/images/coding-agent-which-one-en.svg',
        imageCaption: 'Which local coding harness to pick: Continue.dev for autocomplete and in-IDE chat (VS Code + JetBrains), Cline for multi-file agent loops and command execution, Aider for git-native terminal workflows and SSH environments.',
        columns: ['Your situation', 'Pick'],
        rows: [
          { 'Your situation': 'I live inside VS Code or a JetBrains IDE and want Copilot-style autocomplete', 'Pick': 'Continue.dev' },
          { 'Your situation': 'I want a chat sidebar that can reach into my codebase without manual file uploads', 'Pick': 'Continue.dev' },
          { 'Your situation': 'I want an agent that plans a refactor across multiple files and asks before each step', 'Pick': 'Cline' },
          { 'Your situation': 'I want the model to be able to run commands and read terminal output as part of its loop', 'Pick': 'Cline' },
          { 'Your situation': 'I review changes through `git diff` and want every edit committed automatically', 'Pick': 'Aider' },
          { 'Your situation': 'I work over SSH or in a terminal-first setup', 'Pick': 'Aider' },
          { 'Your situation': 'I want all three workflows occasionally — pick the simplest first', 'Pick': 'Start with Continue.dev; add Aider when you need git-native diffs' },
        ],
      },
      continueDevDeep: {
        id: 'continue-dev',
        title: 'Continue.dev: The Autocomplete-First Pick',
        content:
          '**Continue.dev is the closest open-source analogue to GitHub Copilot for local models.** Its primary surface is the editor: tab-completion as you type plus a chat sidebar that knows your codebase.',
        items: [
          '**Install path:** VS Code Marketplace and JetBrains Marketplace. Configuration lives in `~/.continue/config.json` (or `config.yaml`); model definitions, autocomplete settings, and `@`-context providers all live there.',
          '**Workflow primitive:** autocomplete via FIM (fill-in-the-middle) plus an in-IDE chat sidebar. The chat panel can apply edits directly to open files; an Agent mode adds tool-call loops for multi-step tasks.',
          '**Local model setup:** native Ollama support is one config block. llama.cpp, LM Studio, and any OpenAI-compatible endpoint also work. Separate models for autocomplete (small, fast — Qwen2.5-Coder 1.5B class) and chat (larger — Qwen3-Coder 30B, DeepSeek Coder V3) is the standard pattern.',
          '**Codebase context:** local index (TF-IDF plus embeddings) sits in your project folder. `@codebase`, `@file`, `@folder`, `@docs`, `@terminal`, and custom providers reach into the index from the chat panel.',
          '**Edit model:** in chat, the model proposes a code block; clicking "Apply" diffs it against the open file and you accept or reject the change. Inline edits via Cmd/Ctrl+I rewrite a selection in place. Both flows show a diff preview before any write.',
          '**Where it shines:** keyboard-driven editing inside an IDE you already use, low cognitive overhead per edit, fast feedback loop. The tool you forget you installed.',
          '**Where it falls short:** multi-file refactors require you to drive the chat per file. Long-running autonomous tasks are not its native idiom — Agent mode is improving but is not the project\'s centre of gravity.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Run two models in your Continue.dev config: a small autocomplete model (Qwen2.5-Coder 1.5B at Q4_K_M needs ~1.5 GB VRAM) and a larger chat model (Qwen3-Coder 30B Q4_K_M, ~17 GB). Splitting them keeps autocomplete latency under 200 ms while leaving the chat panel useful for non-trivial questions.',
          },
        ],
      },
      clineDeep: {
        id: 'cline',
        title: 'Cline: The Autonomous Agent Pick',
        content:
          '**Cline treats coding as an agent task, not a series of edits.** You give it an objective; it plans, reads files, edits them, runs commands, and asks you to approve each step.',
        items: [
          '**Install path:** VS Code Marketplace (no JetBrains version). Configuration is GUI-driven inside the extension panel — provider, model, auto-approve settings, custom instructions.',
          '**Workflow primitive:** autonomous agent loop with explicit Plan and Act modes. Plan mode reasons about the task without writing files; Act mode executes the plan with tool calls. An approval gate appears between steps unless you place tools on an auto-approve allow-list.',
          '**Local model setup:** any OpenAI-compatible endpoint. Ollama is one click. For llama.cpp or vLLM, point Cline at the OpenAI-compatible server URL. The agent loop is token-heavy — reserve a model with at least a 32K context window (Qwen3-Coder 30B at 32K, DeepSeek Coder V3 at 128K).',
          '**Tool surface:** `read_file`, `write_to_file`, `replace_in_file`, `execute_command`, `list_files`, `search_files`, `browser_action`, `ask_followup_question`, `attempt_completion`. The set is small and well-documented; tool schemas use a custom XML format the model must emit cleanly.',
          '**Edit model:** for files under a few hundred lines, Cline writes the whole file. For larger files, it emits `replace_in_file` operations with explicit search and replace blocks. Diffs are shown in the panel before each write.',
          '**Where it shines:** multi-file refactors, "find why this test is flaky" exploratory tasks, "add a feature touching three layers" workflows. Strongest of the three on tasks with more than five file edits.',
          '**Where it falls short:** token consumption is high — full file contents stream into the conversation on every read. Long sessions exhaust 32K-context models; 128K-context models are recommended for non-trivial tasks. Tool-call reliability degrades sharply on smaller models (7B class) — they emit malformed XML and the loop stalls.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cline\'s auto-approve allow-list is the difference between a useful agent and a tedious one. Allow `read_file`, `list_files`, and `search_files` by default; keep `write_to_file`, `replace_in_file`, and `execute_command` gated until you trust the model on this codebase. Tighten or relax per project.',
          },
        ],
      },
      aiderDeep: {
        id: 'aider',
        title: 'Aider: The Git-Native Pick',
        content:
          '**Aider is the only one of the three that treats your repository as the source of truth, not the conversation.** Every edit lands as a git commit. Undo is `git reset`. The chat history is throw-away; the commit log is the artefact.',
        items: [
          '**Install path:** `pip install aider-chat` or `pipx install aider-chat`. CLI invocation: `aider file1.py file2.py` (files come in scoped to the conversation). Configuration via `.aider.conf.yml` and per-flag overrides.',
          '**Workflow primitive:** terminal-first conversational editing. Type a prompt; Aider proposes a diff; if you accept, the change is committed. `/add` and `/drop` manage which files are in scope. `/undo` reverts the last commit. `/diff` shows the most recent change against HEAD.',
          '**Local model setup:** any model reachable through LiteLLM — Ollama, OpenAI-compatible servers (llama.cpp, vLLM, LM Studio), or the model providers directly. `--model ollama_chat/qwen3-coder:30b` is the typical local invocation.',
          '**Codebase context:** tree-sitter repo map. Aider parses your repository for definitions (functions, classes, methods), summarises them by ranking proximity to the in-scope files, and includes the summary in the system prompt. The map fits in roughly 1K–4K tokens for small repos, more for large ones — `--map-tokens` caps the budget.',
          '**Edit model:** two strategies. "Diff" mode emits search-and-replace blocks the model must produce verbatim — surgical, low-token, but breaks if the model paraphrases the search block. "Whole" mode rewrites entire files — robust on small files, expensive on large ones. Aider auto-selects per-model defaults that match the model\'s known strengths.',
          '**Where it shines:** repo-wide changes you want every step of in the commit log; pair-programming with code review built in (every commit is a discrete review unit); SSH and dev-container workflows where IDE extensions are not an option.',
          '**Where it falls short:** no autocomplete. No in-IDE preview by default (works fine in a VS Code terminal pane next to your editor, but is not integrated). The diff edit format is sensitive to model output quality — a model that paraphrases the search block instead of reproducing it will fail edits and you will see retry attempts in the terminal.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Set `auto-commits: true` (the default) and use `git rebase -i` to squash Aider\'s commits at the end of a feature. The fine-grained commits during work are valuable for `/undo`; the squashed final commit is what your team reviews. Aider documents this exact pattern.',
          },
        ],
      },
      editModel: {
        id: 'edit-model',
        title: 'Edit Model: How Each Harness Writes Code',
        content:
          '**The edit model is the single biggest determinant of how each harness feels.** Same model, same task — three very different artefacts.',
        image: '/images/coding-agent-edit-model-en.svg',
        imageCaption: 'Edit model reliability by harness: on 7B models, Continue.dev is most forgiving, Aider rejects mismatched blocks, Cline stalls on malformed XML; on 30B+ coding models (Qwen3-Coder, DeepSeek Coder V3), all three are reliable.',
        items: [
          '**Continue.dev** — for autocomplete: FIM tokens around the cursor produce inline completions. For chat-driven edits: the model returns a fenced code block; "Apply" runs a diff against the open file and surfaces it for accept/reject. For inline edits (Cmd/Ctrl+I on a selection): the model rewrites the selection and the diff shows in place.',
          '**Cline** — every edit is a tool call. `write_to_file` for new files or full rewrites, `replace_in_file` for surgical changes with explicit `<<<<<<< SEARCH` / `>>>>>>> REPLACE` blocks. Tool calls are validated against a schema; malformed ones get a "tool error" that the agent sees and retries. The conversation is structured tool calls and tool results, not free prose.',
          '**Aider** — search-and-replace diff blocks rendered in plain prose, parsed at the CLI. The model emits something like a unified-diff fenced block; Aider applies it and commits. If the SEARCH block does not match the file verbatim, the edit is rejected and Aider asks the model to retry.',
          '**Reliability ranking on a 7B-class model:** Continue.dev > Aider > Cline. Continue.dev\'s "apply" is forgiving — small paraphrases get reconciled by the diff algorithm. Aider rejects outright on mismatched search blocks but the failure is loud and recoverable. Cline\'s XML tool format is the most brittle on small models — malformed tool calls stall the loop.',
          '**Reliability ranking on a 30B+ tool-calling model (Qwen3-Coder 30B, DeepSeek Coder V3):** all three converge — the model has the capacity to emit precise diff blocks and well-formed tool calls consistently.',
          'For structured prompting techniques that improve code generation regardless of which harness wraps them, see [Write Better Code With AI](/prompt-engineering/write-better-code-with-ai).',
        ],
      },
      undo: {
        id: 'undo',
        title: 'Undo, Rollback, and the Question of "What Did the Agent Just Do"',
        content:
          '**Undo is the unglamorous feature you only notice when you need it.** All three harnesses are recoverable; the difference is how much friction sits between "this was a mistake" and "the mistake is gone".',
        items: [
          '**Continue.dev** — applied edits join the VS Code undo stack. Cmd/Ctrl+Z reverts the most recent apply per file. For multi-file rollback, your existing git workflow does the heavy lifting. There is no harness-level "undo this whole conversation" command.',
          '**Cline** — the agent UI shows each step as a card; per-edit revert is one click. The cards persist for the duration of the task. After the task ends, rollback is via git — Cline does not auto-commit, so you may have a pile of uncommitted changes after a long session.',
          '**Aider** — `/undo` reverts the most recent commit; repeat to walk back further. Because every edit is a separate commit, the granularity matches the conversation step-by-step. `git reflog` recovers anything `/undo` cannot.',
          '**The practical implication:** if you are inclined to let an agent run for 20 minutes unsupervised, Aider gives you the most reviewable artefact afterwards (a clean commit log) and Cline gives you the most legible in-progress audit trail (per-step cards, but no commits). Continue.dev assumes you stayed at the keyboard throughout.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'For Cline sessions, run `git stash` before starting a non-trivial task. If the agent goes off the rails, `git stash drop` cleans up faster than reverting per file. For Aider, the existing commit log is the safety net — do nothing extra.',
          },
        ],
      },
      context: {
        id: 'context',
        title: 'Context Window Strategy: Where Tokens Go',
        content:
          '**The three harnesses spend tokens differently.** This is the most important budget decision when you have a model with a smaller context window (32K or under) and a non-trivial repo.',
        image: '/images/coding-agent-context-strategy-en.svg',
        imageCaption: 'Context window strategy: Continue.dev uses on-demand index retrieval (32K minimum), Cline streams full files into conversation (128K recommended for multi-file tasks), Aider uses a tree-sitter repo map plus explicit /add (32K minimum).',
        items: [
          '**Continue.dev** — TF-IDF plus embedding index over the project. Retrieval is on-demand: only chunks relevant to the current chat message land in the prompt. `@codebase` triggers a semantic search; `@file path/to/x.ts` injects the file verbatim. Token usage scales with what you pin, not with the size of the repo.',
          '**Cline** — full file contents are streamed into the conversation as the agent reads them. A 500-line file consumes ~3K–5K tokens; an agent task that touches 8 files burns through 25K–40K tokens before any reasoning happens. Recommended minimum: 32K context window; 128K is comfortable.',
          '**Aider** — tree-sitter repo map (defaults to ~2K tokens, configurable via `--map-tokens`) plus the contents of files explicitly `/add`-ed. The map is a definition-only summary, not full code, so it scales much better with repo size than streaming files. `/drop` files when they are no longer in scope.',
          '**Practical implication for a 32K-context model:** Continue.dev and Aider stay comfortable on most repos; Cline starts hitting context pressure on tasks that touch more than 5–6 files unless you switch to a 128K-context model.',
          '**Practical implication for a 128K-context model:** all three are comfortable. Cline\'s heavier consumption stops mattering; the deciding factor reverts to workflow primitive.',
          'For a deeper explanation of context windows and why models lose information mid-context, see [Context Windows Explained: Why AI Forgets](/prompt-engineering/context-windows-explained-why-ai-forgets).',
        ],
      },
      toolCalls: {
        id: 'tool-calls',
        title: 'Tool Call Reliability Is a Model Property',
        content:
          '**Tool-calling failures are usually misattributed to the harness.** In practice the model emits a malformed call, the harness validates strictly, and the loop stalls. Same model in a different harness produces the same failure mode.',
        items: [
          '**Models that tool-call reliably for these harnesses (May 2026):** Qwen3-Coder 30B (best-in-class on Cline\'s XML format), DeepSeek Coder V3 (large context, strong on multi-step plans), Llama 3.3 70B (slow but reliable), Codestral 22B (fast, smaller plan horizon).',
          '**Models that struggle:** anything below 7B, most general-purpose models under 13B without coding fine-tunes, and quantizations harsher than Q4_K_M on the smaller end. Symptoms: malformed XML in Cline, paraphrased SEARCH blocks in Aider, fenced code that does not match the open file in Continue.dev.',
          '**The fix is rarely "switch harness".** It is "switch model" or "raise quantization". A Qwen3-Coder 30B at Q4_K_M tool-calls reliably across all three harnesses. A Llama 3.2 7B at Q4 will fail in all three.',
          '**Continue.dev\'s Agent mode** uses standard OpenAI tool-calling JSON. Most coding-tuned models handle this well.',
          '**Cline\'s XML format** is the most demanding — the model must produce exact XML structure. Coding-tuned models trained on diverse formats (Qwen3-Coder, DeepSeek Coder) handle this; general-purpose models often do not.',
          '**Aider has no tool calls per se** — it parses search-and-replace blocks from prose. The "reliability" question becomes "does the model reproduce SEARCH blocks verbatim", which most coding-tuned 22B+ models do well.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'When evaluating a new local model, test it in the harness you actually use, not in a generic tool-call benchmark. The relevant signal is whether your daily workflow stalls. A model that scores 85% on a public tool-call benchmark can still fail half your Cline tasks if it does not reliably emit Cline\'s specific XML.',
          },
        ],
      },
      ideIntegration: {
        id: 'ide-integration',
        title: 'IDE Integration and Editor Reach',
        content:
          '**Editor reach is where the three harnesses diverge most visibly.** This is the dimension most readers actually care about; it is also the easiest to test in 10 minutes.',
        items: [
          '**Continue.dev** — VS Code Marketplace and JetBrains Marketplace. The JetBrains build is real (IntelliJ, PyCharm, GoLand, WebStorm, etc.) and has feature parity with the VS Code build for autocomplete and chat. Cursor users can install the VS Code extension; behaviour matches VS Code.',
          '**Cline** — VS Code extension only. Works in Cursor (which is a VS Code fork) but is not officially tested there; the extension surface is identical and most users report no issues. JetBrains users are out of luck for now.',
          '**Aider** — terminal-first; integrates with any editor by sitting next to it. VS Code: open the integrated terminal, run Aider, edit in the editor pane while Aider commits. JetBrains: same pattern in the JetBrains terminal. Vim/Neovim: paired with `:e!` to reload after Aider commits, this is a productive flow. Cursor: identical to VS Code.',
          '**Practical implication for JetBrains users:** Continue.dev or Aider are your only options.',
          '**Practical implication for Vim/Neovim users:** Aider is the natural fit. Continue.dev has community Neovim integrations of varying maturity; the official surface is VS Code and JetBrains.',
        ],
      },
      workflowFit: {
        id: 'workflow-fit',
        title: 'Workflow Fit by Use Case',
        content:
          '**The most useful frame is "what kind of day are you having".** Match harness to day, not the other way round.',
        image: '/images/coding-agent-workflow-fit-en.svg',
        imageCaption: 'Workflow fit for local coding tools: Continue.dev for autocomplete and in-IDE Q&A; Cline for multi-file refactors and exploratory debugging with command access; Aider for git-native changes, SSH, and Vim/Neovim workflows.',
        columns: ['Use case', 'Best fit', 'Why'],
        rows: [
          {
            'Use case': 'Adding a function to an existing file with autocomplete',
            'Best fit': 'Continue.dev',
            'Why': 'FIM autocomplete is the natural primitive; no chat needed',
          },
          {
            'Use case': 'Asking "what does this function do" without leaving the editor',
            'Best fit': 'Continue.dev',
            'Why': 'In-IDE chat with `@file` is the lowest-friction path',
          },
          {
            'Use case': 'Refactoring a feature across 5+ files',
            'Best fit': 'Cline',
            'Why': 'Native multi-file edits with per-step approval',
          },
          {
            'Use case': '"Find why this test is flaky" exploratory bug-hunt',
            'Best fit': 'Cline',
            'Why': 'Agent loop runs commands, reads logs, iterates',
          },
          {
            'Use case': 'Repo-wide rename or API migration with reviewable commits',
            'Best fit': 'Aider',
            'Why': 'Every edit becomes a commit; trivial to review and undo',
          },
          {
            'Use case': 'SSH onto a server, work without an IDE',
            'Best fit': 'Aider',
            'Why': 'Terminal-only by design',
          },
          {
            'Use case': 'Vim or Neovim daily driver',
            'Best fit': 'Aider',
            'Why': 'Pairs naturally with terminal-driven editing',
          },
          {
            'Use case': 'JetBrains IDE (IntelliJ, GoLand, PyCharm) user',
            'Best fit': 'Continue.dev or Aider',
            'Why': 'Cline is VS Code-only',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: 'Decision Tree: Which Should You Pick',
        content:
          '**Five questions, in order, get most readers to the right pick.**',
        items: [
          '**1. Are you in JetBrains, Vim, or working over SSH?** → If yes, you are between Continue.dev (JetBrains only) and Aider (Vim/SSH). Skip to Q4. If no, continue.',
          '**2. Do you want an autonomous agent that edits multiple files in one task?** → Yes: Cline. No: continue.',
          '**3. Do you want autocomplete plus an in-IDE chat panel?** → Yes: Continue.dev. No: continue.',
          '**4. Do you review changes through `git diff` and want every edit auto-committed?** → Yes: Aider. No: Continue.dev (the default).',
          '**5. Still unsure?** → Start with Continue.dev. It is the lowest-friction install, works in the editor you probably already use, and adding Aider later for terminal-driven work is straightforward. Cline is the most disruptive to add to a workflow; only adopt it once you know you want the agent loop.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Picking a Local Coding Harness',
        items: [
          '**Mistake 1: picking the harness before the model.** A 30B coding-tuned model in any of the three harnesses outperforms a 7B general-purpose model in the "best" harness. Pick the model first; the harness is the second decision.',
          '**Mistake 2: using a single model for autocomplete and chat in Continue.dev.** Autocomplete needs sub-200ms latency; chat tolerates seconds. Run a small autocomplete model and a larger chat model in the same config.',
          '**Mistake 3: leaving Cline auto-approve fully open.** A model loop with `execute_command` auto-approved can do real damage. Keep destructive tools gated until you trust the model on this codebase.',
          '**Mistake 4: using Aider on a model that paraphrases code.** If the model cannot reproduce SEARCH blocks verbatim, every edit fails. Use a coding-tuned 22B+ model (Qwen3-Coder, DeepSeek Coder, Codestral) for reliable diff edits.',
          '**Mistake 5: switching harnesses to fix a model problem.** If tool calls fail in Cline, they will likely also fail in Continue.dev\'s Agent mode for the same reason. Diagnose the model first.',
          '**Mistake 6: running Cline against a 32K-context model on multi-file tasks.** Token consumption blows through the budget mid-task. Use a 128K-context model for non-trivial Cline work.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Continue.dev Documentation](https://docs.continue.dev/) — Official setup guide, model configuration, `@`-context providers, and Agent mode reference.',
          '[Cline GitHub Repository](https://github.com/cline/cline) — Source code, tool schemas, Plan/Act mode behaviour, and extension architecture.',
          '[Aider Documentation](https://aider.chat/) — Official CLI reference, edit-format documentation, repo-map mechanics, and per-model defaults.',
          '[Ollama Model Library](https://ollama.com/library) — Available local models and quantization levels referenced for each harness.',
          '[Qwen3-Coder Model Card](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architecture, supported context lengths, and tool-call training data for the recommended coding model.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Which is best for VS Code users?',
            a: 'Any of the three works in VS Code, but Continue.dev and Cline are the native fits. Continue.dev for autocomplete-first and in-IDE chat; Cline for autonomous agent tasks. Aider works perfectly well from the VS Code integrated terminal but does not integrate with the editor surface itself — its UI is the terminal.',
          },
          {
            q: 'Does Cline support Cursor IDE?',
            a: 'Cursor is a VS Code fork and accepts VS Code extensions. Cline installs and runs in Cursor; the extension surface is identical. The Cline team does not officially target Cursor, so edge cases (specific Cursor APIs, future Cursor changes) are not guaranteed to be supported, but in practice users report no issues.',
          },
          {
            q: 'Can Aider work without git?',
            a: 'Yes, but you lose the workflow primitive that defines it. Aider runs in non-git directories with `--no-git`; edits still apply but there are no commits, so `/undo` is disabled and rollback falls back to the model\'s diff history within the session. For non-trivial work, initialise a git repo — even an ignored one — before starting.',
          },
          {
            q: 'Which has the best multi-file refactoring?',
            a: 'Cline for autonomous multi-file work — it plans across files, reads them as needed, and edits with per-step approval. Aider for reviewable multi-file work where you name the files explicitly and want every edit committed. Continue.dev requires manual driving per file; it is the weakest of the three on multi-file refactors.',
          },
          {
            q: 'Do these support local Ollama out of the box?',
            a: 'Yes. Continue.dev has a native Ollama provider with a one-block config. Cline lists Ollama in the provider dropdown. Aider supports Ollama through LiteLLM with `--model ollama_chat/<model-name>`. Ollama is the lowest-friction local backend for all three.',
          },
          {
            q: 'Which works best with Qwen3-Coder?',
            a: 'Qwen3-Coder 30B is reliable across all three harnesses in May 2026 — it handles Cline\'s XML tool format, Aider\'s search-and-replace blocks, and Continue.dev\'s autocomplete + chat workflows without measurable degradation. Smaller Qwen3-Coder variants (7B class) tool-call less reliably and do better in Continue.dev\'s autocomplete-only mode than in Cline\'s agent loop.',
          },
          {
            q: 'Can I use these with Cursor\'s local mode?',
            a: 'Cursor\'s built-in features (Tab autocomplete, Cmd+K) use Cursor\'s own model routing, not these harnesses. To use a local LLM in Cursor, install Continue.dev or Cline as VS Code extensions inside Cursor — they bring their own provider config independent of Cursor\'s. Aider runs in Cursor\'s integrated terminal the same way it runs in VS Code\'s.',
          },
          {
            q: 'Which is most stable for long sessions?',
            a: 'Aider, by virtue of having no in-process state to corrupt — every edit is a commit, and a session crash loses only the conversation, not the work. Continue.dev is stable across long IDE sessions. Cline\'s long sessions can hit context-window pressure on smaller models; restarting tasks between major refactors avoids the problem.',
          },
          {
            q: 'Do these support custom system prompts?',
            a: 'All three. Continue.dev: per-model `systemMessage` in `config.json`. Cline: "Custom Instructions" field in the extension settings. Aider: `--system-prompt` flag or per-model defaults in `.aider.conf.yml`. Custom prompts are particularly useful for Cline (steering Plan mode behaviour) and Aider (enforcing a coding style across commits).',
          },
          {
            q: 'Which has the best community and extension ecosystem?',
            a: 'Continue.dev has the largest user base and most third-party `@`-context providers (custom retrieval sources, plug-in tools). Cline has a smaller but very active community focused on agent workflows. Aider has the deepest documentation of any of the three — the project blog publishes detailed analyses of edit-format reliability and model behaviour. For a casual user, Continue.dev\'s ecosystem is the friendliest entry point.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Replace GitHub Copilot With a Local LLM](/power-local-llm/replace-github-copilot-with-local-llm) — broader replacement context, including cost and privacy math.',
          '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026) — the model side of the equation: Qwen3-Coder vs DeepSeek vs Codestral on real benchmarks.',
          '[Local AI Agents With MCP in 2026](/power-local-llm/local-ai-agents-with-mcp-2026) — for users who want extended tool calling beyond the harnesses above.',
          '[Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026) — adjacent technical depth on tool-call reliability.',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm) — the inference engine layer beneath all three harnesses.',
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
    theme: 'Coding Assistants',
    title: 'Continue.dev vs Cline vs Aider: Der beste lokale Coding Agent in 2026',
    seoTitle: 'Continue.dev vs Cline vs Aider: Lokale Coding Agents im Vergleich 2026',
    intro:
      'Continue.dev, Cline und Aider sind die drei ernsthaften Open-Source-Coding-Harnesses, die sich sauber mit einem lokalen LLM in 2026 kombinieren lassen. Sie sind nicht austauschbar: Jeder ist um ein anderes Workflow-Primitive herum aufgebaut — Autocomplete, autonome Agent-Schleife oder Git-natives Diff. Wählen Sie nach Workflow zuerst aus, Modell zuerst, und Sie vermeiden 90 % der Integrationsprobleme.',
    metaDescription:
      'Continue.dev, Cline und Aider als lokale Coding Agents 2026 verglichen. Edit-Modell, IDE-Integration, Rückgängigmachen und Kontext-Strategien — nach Workflow gewählt, nicht nach Hype.',
    twitterDescription:
      'Drei lokale Coding-Harnesses, drei verschiedene Workflow-Primitive. Continue.dev für Autocomplete, Cline für autonome Agenten, Aider für Git-native Diffs. Fazit pro Workflow siehe unten.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Llama 3.3 70B',
      'Codestral 22B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Entwickler, die einen lokalen Coding-LLM (Qwen3-Coder, DeepSeek Coder, Codestral, Llama 3.3) ausführen und einen Harness wählen müssen, der zu ihrem vorhandenen Editor und Projekt-Workflow passt.',
    readTime: '14 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'lokaler Coding Agent',
    targetKeywords: [
      'continue.dev vs cline',
      'cline vs aider',
      'bester lokaler coding agent 2026',
      'lokales llm coding harness',
      'aider lokales llm',
      'continue.dev lokales llm',
    ],
    leadAnswerBlock:
      '**Continue.dev, Cline und Aider lösen verschiedene Probleme mit demselben lokalen Modell. Continue.dev ist um Autocomplete und ein In-IDE-Chat-Panel herum aufgebaut — am besten für Edit-während-Sie-tippen-Workflows in VS Code oder JetBrains. Cline ist ein autonomer VS Code-Agent, der mehrere Dateien plant, bearbeitet und Befehle mit expliziten Approval-Gates ausführt — am besten für Multi-File-Refactorings und Bug-Hunts. Aider ist ein Terminal-First-, Git-nativer CLI, der jeden Edit in einen Commit mit chirurgischen Search-and-Replace-Diffs umwandelt — am besten für Repo-Wide-Arbeit und Reviewer, die jeden Change in `git log` abgebildet sehen möchten. Wählen Sie nach Workflow-Primitive (Autocomplete vs Agent-Schleife vs Git-Diff), nicht danach, welches Tool am mächtigsten klingt.**',
    quickAnswerTop: {
      de: {
        question: 'Welcher lokale Coding Agent ist 2026 am besten: Continue.dev, Cline oder Aider?',
        answer:
          'Wählen Sie Continue.dev, wenn Sie den Großteil Ihres Tages in VS Code oder JetBrains verbringen und Autocomplete plus ein Chat-Panel möchten, das in Ihre Codebasis reicht. Wählen Sie Cline, wenn Sie einen autonomen Agenten möchten, der plant, mehrere Dateien bearbeitet und Befehle mit Approval-Gates ausführt — am stärksten für Refactorings und explorative Bug-Hunts. Wählen Sie Aider, wenn Sie im Terminal arbeiten und jeden Edit als separaten, überprüfbaren Git-Commit committed möchten. Alle drei laufen vollständig offline gegen jeden lokalen LLM-Endpoint (Ollama, llama.cpp, LM Studio, vLLM). Die richtige Wahl ist eine Workflow-Entscheidung, keine Qualitätsrangfolge.',
        bullets: [
          'Continue.dev — Autocomplete + In-IDE-Chat. Am besten für VS Code und JetBrains-Nutzer, die inkrementelle Edits ohne Editor-Verlassen möchten.',
          'Cline — Autonomer Agent mit Plan/Act-Modi, Tool-Calls und Pro-Step-Approval. Am besten für Multi-File-Refactorings und Bug-Hunts.',
          'Aider — Terminal-CLI mit Git-nativen Commits und Search-and-Replace-Diffs. Am besten für überprüfbare, Undo-freundliche Repo-Wide-Arbeit.',
          'Alle drei funktionieren mit jedem OpenAI-kompatiblen lokalen Endpoint — Ollama ist der einfachste Weg, llama.cpp und vLLM werden durch Provider-Konfigurationen unterstützt.',
          'Workflow-Anpassung schlägt rohe Kapazität. Einen Terminal-First-Dev in Cline zu zwingen (oder einen VS Code-Only-Dev in Aider) kostet mehr Zeit, als der Harness spart.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Vergleichstabelle', anchor: '#comparison-table' },
      { label: 'Welcher sollten Sie wählen?', anchor: '#which-one' },
      { label: 'Continue.dev: Tiefgang', anchor: '#continue-dev' },
      { label: 'Cline: Tiefgang', anchor: '#cline' },
      { label: 'Aider: Tiefgang', anchor: '#aider' },
      { label: 'Edit-Modell: Wie jeder Code schreibt', anchor: '#edit-model' },
      { label: 'Rückgängigmachen und Rollback', anchor: '#undo' },
      { label: 'Kontext-Fenster-Strategie', anchor: '#context' },
      { label: 'Tool-Call-Zuverlässigkeit', anchor: '#tool-calls' },
      { label: 'IDE-Integration', anchor: '#ide-integration' },
      { label: 'Workflow-Anpassung nach Anwendungsfall', anchor: '#workflow-fit' },
      { label: 'Entscheidungsbaum', anchor: '#decision-tree' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Ressourcen', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Continue.dev** ist Autocomplete-First: Eine VS Code- und JetBrains-Extension mit FIM-Completions (Fill-in-the-Middle), einem In-IDE-Chat-Sidebar und `@`-Context-Providern (Codebasis, Datei, Docs, Terminal). Das nächste Open-Source-Analogon zu Copilot für lokale Modelle.',
          '**Cline** ist Agent-First: Eine VS Code-Extension mit expliziten Plan- und Act-Modi, einer Tool-Call-Schleife (read_file, write_to_file, execute_command, browser_action) und einem Approval-Gate bei jedem Schritt. Konzipiert, um autonom über mehrere Dateien hinweg zu laufen, während Sie überwachen.',
          '**Aider** ist Git-First: Ein Terminal-CLI, das eine Tree-Sitter-Repo-Map verwaltet, Dateien über Search-and-Replace-Diff-Blöcke bearbeitet und jeden Change committed. Undo ist `git reset` — der überprüfbarste Workflow der drei.',
          'Alle drei sprechen OpenAI-kompatible Endpoints. **Ollama** ist das glatteste lokale Backend; **llama.cpp** und **vLLM** funktionieren über Provider-Einstellungen oder Proxies wie LiteLLM.',
          '**Tool-Call-Zuverlässigkeit** hängt vom Modell ab, nicht vom Harness. Qwen3-Coder 30B und DeepSeek Coder V3 sind die zuverlässigsten Tool-Caller im Mai 2026; kleinere Modelle (7B-Klasse) geben regelmäßig malformed Tool-Calls aus, unabhängig davon, welcher Harness sie umhüllt.',
          '**Kontext-Fenster-Strategie** unterscheidet sich stark: Continue.dev verlässt sich auf den eingebetteten Codebasis-Index und `@`-gepinnten Kontext, Cline streamt vollständige Datei-Inhalte in das Gespräch (hohe Token-Nutzung), Aider nutzt eine Tree-Sitter-Repo-Map plus explizites `/add` und `/drop`, um den aktiven Satz klein zu halten.',
          'Für einen einzelnen Entwickler dominiert **Workflow-Anpassung** die Ergebnisse mehr als jeder Benchmark. Der Harness, den Sie tatsächlich offen halten, ist derjenige, den Sie wählen sollten.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Continue.dev** — Autocomplete + Chat, VS Code und JetBrains, reibungsloseste Installation der drei.',
          '**Cline** — Autonomer Agent mit Approval-Gates, nur VS Code, höchste Kapazität und höchste Token-Nutzung.',
          '**Aider** — Terminal-CLI, Git-native Commits, jeder Edit ist durch Git überprüfbar und rückgängig zu machen.',
          'Alle drei laufen gegen dasselbe lokale Backend — **Ollama** ist der glatteste Weg; **llama.cpp** und **vLLM** funktionieren auch via OpenAI-kompatible Konfiguration.',
          '**Tool-Call-Zuverlässigkeit ist eine Modell-Eigenschaft, keine Harness-Eigenschaft.** Qwen3-Coder 30B und DeepSeek Coder V3 sind zuverlässig in allen drei; 7B-Klasse-Modelle fehlschlagen in allen drei.',
          '**Kontext-Budget:** Continue.dev und Aider bleiben komfortabel mit einem 32K-Kontext-Modell; Cline braucht **128K** für nichttriviale Multi-File-Aufgaben.',
          '**Nach Editor wählen:** JetBrains → Continue.dev oder Aider. Vim/Neovim oder SSH → Aider. VS Code mit Autocomplete-Heavy-Tagen → Continue.dev. VS Code mit Multi-File-Refactorings → Cline.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Wie Continue.dev, Cline und Aider 2026 verglichen werden',
        content:
          'Alle drei Harnesses sind Open Source, kostenlos zu betreiben und funktionieren mit jedem lokalen LLM-Endpoint. Die strukturellen Unterschiede unten entscheiden, welcher zu Ihrem Workflow passt.',
        image: '/images/coding-agent-comparison-de.svg',
        imageCaption: 'Continue.dev vs Cline vs Aider: Continue.dev für Autovervollständigung in VS Code/JetBrains (32K Kontext), Cline für autonome Mehrfachdatei-Agenten in VS Code (128K empfohlen), Aider für git-native Terminal-Commits (32K Kontext).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue.dev ist Copilot-Style-Autocomplete, Cline ist ein autonomer Agent, der dateienübergreifend bearbeitet, Aider ist ein Terminal-Tool, das jeden Edit in Git committed — wählen Sie nach Workflow, nicht nach Benchmark.',
          },
          {
            type: 'plain-terms',
            text: 'Drei kostenlose Tools, dasselbe lokale Modell, drei völlig verschiedene Workflows. Continue.dev fühlt sich wie Copilot an — Tab zum Akzeptieren von Vorschlägen in Ihrem Editor. Cline fühlt sich wie ein Junior-Entwickler an, den Sie überwachen — es plant und bearbeitet dateienübergreifend, während Sie jeden Schritt genehmigen. Aider fühlt sich wie Pair-Programming im Terminal an — Sie sprechen, es committed. Probieren Sie denjenigen aus, der zu Ihrer aktuellen Arbeitsweise passt.',
          },
        ],
        columns: ['Funktion', 'Continue.dev', 'Cline', 'Aider'],
        rows: [
          {
            'Funktion': 'Primäre Oberfläche',
            'Continue.dev': 'VS Code- und JetBrains-Extension',
            'Cline': 'VS Code-Extension',
            'Aider': 'Terminal-CLI (beliebiger Editor daneben)',
          },
          {
            'Funktion': 'Workflow-Primitive',
            'Continue.dev': 'Autocomplete + In-IDE-Chat',
            'Cline': 'Autonome Agent-Schleife mit Approval-Gates',
            'Aider': 'Git-native Diff-Edits, jeder Change ein Commit',
          },
          {
            'Funktion': 'Edit-Modell',
            'Continue.dev': 'Inline FIM + Apply-to-File aus Chat',
            'Cline': 'Tool-Calls (read_file, write_to_file, replace_in_file)',
            'Aider': 'Search-and-Replace-Diff-Blöcke; "whole"-Modus für kleine Dateien',
          },
          {
            'Funktion': 'Multi-File-Edits',
            'Continue.dev': 'Manuell: Chat schlägt vor, Sie applizieren pro Datei',
            'Cline': 'Nativ: Agent bearbeitet dateienübergreifend in einer Aufgabe',
            'Aider': 'Nativ: Dateien an Prompt benennen, Edits landen in einem Commit',
          },
          {
            'Funktion': 'Rückgängigmachen / Rollback',
            'Continue.dev': 'VS Code Undo-Stack auf angewendete Edits',
            'Cline': 'Pro-Edit-Revert in der Agent-UI; Git für Hard-Rollback',
            'Aider': '`/undo` macht letzten Commit rückgängig; vollständige Git-Historie darunter',
          },
          {
            'Funktion': 'Tool-Call-Protokoll',
            'Continue.dev': 'OpenAI-Tools (Function-Calling) im Agent-Modus',
            'Cline': 'Benutzerdefinierte XML-Tool-Blöcke mit striktem Schema',
            'Aider': 'Keine Tool-Calls; fordert Modell auf, Diff-Blöcke auszugeben',
          },
          {
            'Funktion': 'Codebasis-Kontext',
            'Continue.dev': 'Lokaler Index (TF-IDF + Embeddings) + `@`-Provider',
            'Cline': 'Streamt vollständige Datei-Inhalte in das Gespräch',
            'Aider': 'Tree-Sitter-Repo-Map + manuelles `/add` und `/drop`',
          },
          {
            'Funktion': 'Genehmigung / Sicherheit',
            'Continue.dev': 'Diff-Vorschau vor jedem Apply',
            'Cline': 'Pro-Step-Genehmigung; Auto-Approve-Listen konfigurierbar',
            'Aider': 'Diff-Vorschau im Terminal; Commit-Schritt ist automatisch',
          },
          {
            'Funktion': 'Beste für',
            'Continue.dev': 'Edit-während-Sie-tippen, In-IDE-Chat, Autocomplete-Heavy-Tage',
            'Cline': 'Multi-File-Refactorings, explorative Debugging, Repo-Aufgaben',
            'Aider': 'Überprüfbare Repo-Wide-Changes, Terminal-gesteuerte Workflows',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Welchen sollten Sie wählen',
        content:
          '**Der richtige Harness wird durch Ihren Editor, Ihre Toleranz für autonome Edits und die Art bestimmt, wie Sie Changes überprüfen.** Nutzen Sie diese Abkürzung.',
        image: '/images/coding-agent-which-one-de.svg',
        imageCaption: 'Welches lokale Coding-Tool: Continue.dev für Autovervollständigung und In-IDE-Chat (VS Code + JetBrains), Cline für Mehrfachdatei-Agenten und Befehlsausführung, Aider für git-native Terminal-Workflows und SSH-Umgebungen.',
        columns: ['Ihre Situation', 'Wählen Sie'],
        rows: [
          { 'Ihre Situation': 'Ich arbeite in VS Code oder einer JetBrains-IDE und möchte Copilot-Style-Autocomplete', 'Wählen Sie': 'Continue.dev' },
          { 'Ihre Situation': 'Ich möchte einen Chat-Sidebar, der meine Codebasis ohne manuelle Datei-Uploads erreichen kann', 'Wählen Sie': 'Continue.dev' },
          { 'Ihre Situation': 'Ich möchte einen Agent, der ein Refactoring dateienübergreifend plant und vor jedem Schritt fragt', 'Wählen Sie': 'Cline' },
          { 'Ihre Situation': 'Ich möchte, dass das Modell Befehle ausführen und Terminal-Ausgabe als Teil seiner Schleife lesen kann', 'Wählen Sie': 'Cline' },
          { 'Ihre Situation': 'Ich überprüfe Changes via `git diff` und möchte jeden Edit automatisch committed', 'Wählen Sie': 'Aider' },
          { 'Ihre Situation': 'Ich arbeite über SSH oder in einer Terminal-First-Umgebung', 'Wählen Sie': 'Aider' },
          { 'Ihre Situation': 'Ich möchte alle drei Workflows gelegentlich — wählen Sie den einfachsten zuerst', 'Wählen Sie': 'Starten Sie mit Continue.dev; fügen Sie Aider hinzu, wenn Sie Git-native Diffs brauchen' },
        ],
      },
      continueDevDeep: {
        id: 'continue-dev',
        title: 'Continue.dev: Die Autocomplete-First-Wahl',
        content:
          '**Continue.dev ist das nächste Open-Source-Analogon zu GitHub Copilot für lokale Modelle.** Seine primäre Oberfläche ist der Editor: Tab-Completion beim Tippen plus ein Chat-Sidebar, der Ihre Codebasis kennt.',
        items: [
          '**Install-Weg:** VS Code Marketplace und JetBrains Marketplace. Konfiguration befindet sich in `~/.continue/config.json` (oder `config.yaml`); Modelldefinitionen, Autocomplete-Einstellungen und `@`-Context-Provider befinden sich alle dort.',
          '**Workflow-Primitive:** Autocomplete via FIM (Fill-in-the-Middle) plus einen In-IDE-Chat-Sidebar. Das Chat-Panel kann Edits direkt auf offene Dateien anwenden; ein Agent-Modus fügt Tool-Call-Schleifen für Multi-Step-Aufgaben hinzu.',
          '**Lokale Modell-Einrichtung:** Natives Ollama-Unterstützung ist ein Konfigurationsblock. llama.cpp, LM Studio und jeder OpenAI-kompatible Endpoint funktionieren auch. Das Standardmuster ist, separate Modelle für Autocomplete (klein, schnell — Qwen2,5-Coder 1,5B-Klasse) und Chat (größer — Qwen3-Coder 30B, DeepSeek Coder V3) zu verwenden.',
          '**Codebasis-Kontext:** Lokaler Index (TF-IDF plus Embeddings) sitzt in Ihrem Projekt-Ordner. `@codebase`, `@file`, `@folder`, `@docs`, `@terminal` und benutzerdefinierte Provider erreichen den Index aus dem Chat-Panel.',
          '**Edit-Modell:** Im Chat schlägt das Modell einen Code-Block vor; Klick auf "Apply" unterscheidet ihn gegen die offene Datei und Sie akzeptieren oder lehnen die Change ab. Inline-Edits via Cmd/Ctrl+I schreiben eine Auswahl an Ort und Stelle um. Beide Flows zeigen eine Diff-Vorschau vor jedem Schreiben.',
          '**Wo es glänzt:** Tastatur-gesteuerte Bearbeitung in einer IDE, die Sie bereits verwenden, geringer kognitiver Overhead pro Edit, schnelle Feedback-Schleife. Das Tool, das Sie vergessen, installiert zu haben.',
          '**Wo es zu kurz kommt:** Multi-File-Refactorings erfordern, dass Sie den Chat pro Datei steuern. Lang laufende autonome Aufgaben sind nicht sein natives Idiom — Agent-Modus verbessert sich, ist aber nicht der Gravitationszentrum des Projekts.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Führen Sie zwei Modelle in Ihrer Continue.dev-Konfiguration aus: ein kleines Autocomplete-Modell (Qwen2,5-Coder 1,5B bei Q4_K_M braucht ~1,5 GB VRAM) und ein größeres Chat-Modell (Qwen3-Coder 30B Q4_K_M, ~17 GB). Die Aufteilung hält Autocomplete-Latenz unter 200 ms, während das Chat-Panel für nicht triviale Fragen nützlich bleibt.',
          },
        ],
      },
      clineDeep: {
        id: 'cline',
        title: 'Cline: Die Autonomous-Agent-Wahl',
        content:
          '**Cline behandelt Coding als eine Agent-Aufgabe, nicht als eine Serie von Edits.** Sie geben ihm ein Ziel; es plant, liest Dateien, bearbeitet sie, führt Befehle aus und bittet Sie, jeden Schritt zu genehmigen.',
        items: [
          '**Install-Weg:** VS Code Marketplace (keine JetBrains-Version). Konfiguration ist GUI-gesteuert in der Extension-Panel — Provider, Modell, Auto-Approve-Einstellungen, benutzerdefinierte Anweisungen.',
          '**Workflow-Primitive:** Autonome Agent-Schleife mit expliziten Plan- und Act-Modi. Plan-Modus denkt über die Aufgabe nach, ohne Dateien zu schreiben; Act-Modus führt den Plan mit Tool-Calls aus. Ein Approval-Gate erscheint zwischen Schritten, es sei denn, Sie setzen Tools auf eine Auto-Approve-Allow-Liste.',
          '**Lokale Modell-Einrichtung:** Beliebiger OpenAI-kompatible Endpoint. Ollama ist ein Klick. Für llama.cpp oder vLLM zeigen Sie Cline auf die OpenAI-kompatible Server-URL. Die Agent-Schleife ist Token-schwer — reservieren Sie ein Modell mit mindestens einem 32K-Kontext-Fenster (Qwen3-Coder 30B bei 32K, DeepSeek Coder V3 bei 128K).',
          '**Tool-Oberfläche:** `read_file`, `write_to_file`, `replace_in_file`, `execute_command`, `list_files`, `search_files`, `browser_action`, `ask_followup_question`, `attempt_completion`. Die Menge ist klein und gut dokumentiert; Tool-Schemata verwenden ein benutzerdefiniertes XML-Format, das das Modell sauber ausgeben muss.',
          '**Edit-Modell:** Für Dateien unter einigen hundert Zeilen schreibt Cline die ganze Datei. Für größere Dateien gibt es `replace_in_file`-Operationen mit expliziten Search- und Replace-Blöcken aus. Diffs werden in der Panel vor jedem Schreiben angezeigt.',
          '**Wo es glänzt:** Multi-File-Refactorings, "warum ist dieser Test flaky" explorative Aufgaben, "füge ein Feature hinzu, das drei Schichten berührt" Workflows. Das Stärkste der drei bei Aufgaben mit mehr als fünf File-Edits.',
          '**Wo es zu kurz kommt:** Token-Verbrauch ist hoch — vollständige Datei-Inhalte streamen bei jedem Read in das Gespräch. Lange Sessions erschöpfen 32K-Kontext-Modelle; 128K-Kontext-Modelle werden für nichttriviale Aufgaben empfohlen. Tool-Call-Zuverlässigkeit sinkt bei kleineren Modellen (7B-Klasse) deutlich — sie geben malformed XML aus und die Schleife stellt sich hin.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Clines Auto-Approve-Allow-Liste ist der Unterschied zwischen einem nützlichen Agenten und einem mühsamen. Erlauben Sie `read_file`, `list_files` und `search_files` standardmäßig; halten Sie `write_to_file`, `replace_in_file` und `execute_command` gesperrt, bis Sie dem Modell auf dieser Codebasis vertrauen. Straffen oder lockern Sie pro Projekt.',
          },
        ],
      },
      aiderDeep: {
        id: 'aider',
        title: 'Aider: Die Git-Native-Wahl',
        content:
          '**Aider ist die einzige der drei, die Ihr Repository als Quelle der Wahrheit behandelt, nicht das Gespräch.** Jeder Edit landet als Git-Commit. Undo ist `git reset`. Die Chat-Historie ist Wegwerf; das Commit-Log ist das Artefakt.',
        items: [
          '**Install-Weg:** `pip install aider-chat` oder `pipx install aider-chat`. CLI-Aufruf: `aider file1.py file2.py` (Dateien sind auf das Gespräch begrenzt). Konfiguration via `.aider.conf.yml` und Pro-Flag-Overrides.',
          '**Workflow-Primitive:** Terminal-First-konversationale Bearbeitung. Geben Sie einen Prompt ein; Aider schlägt einen Diff vor; wenn Sie akzeptieren, wird die Change committed. `/add` und `/drop` verwalten, welche Dateien im Scope sind. `/undo` macht letzten Commit rückgängig. `/diff` zeigt die jüngste Change gegen HEAD.',
          '**Lokale Modell-Einrichtung:** Beliebiges Modell erreichbar durch LiteLLM — Ollama, OpenAI-kompatible Server (llama.cpp, vLLM, LM Studio) oder die Modell-Provider direkt. `--model ollama_chat/qwen3-coder:30b` ist der typische lokale Aufruf.',
          '**Codebasis-Kontext:** Tree-Sitter-Repo-Map. Aider parst Ihr Repository nach Definitionen (Funktionen, Klassen, Methoden), fasst sie zusammen, indem Nähe zu den In-Scope-Dateien eingestuft wird, und fügt die Zusammenfassung in den System-Prompt ein. Die Map passt grob in 1K–4K Token für kleine Repos, mehr für große — `--map-tokens` deckelt das Budget.',
          '**Edit-Modell:** Zwei Strategien. "Diff"-Modus gibt Search-and-Replace-Blöcke aus, die das Modell wörtlich produzieren muss — chirurgisch, low-token, aber bricht, wenn das Modell den Search-Block paraphrasiert. "Whole"-Modus schreibt ganze Dateien neu — robust bei kleinen Dateien, teuer bei großen. Aider wählt Auto-Select pro-Modell-Defaults aus, die zu den bekannten Stärken des Modells passen.',
          '**Wo es glänzt:** Repo-Wide-Changes, von denen Sie jeden Schritt im Commit-Log möchten; Pair-Programming mit Code-Review eingebaut (jeder Commit ist eine diskrete Review-Einheit); SSH und Dev-Container-Workflows, wo IDE-Extensions nicht möglich sind.',
          '**Wo es zu kurz kommt:** Kein Autocomplete. Standardmäßig keine In-IDE-Vorschau (funktioniert prima in einem VS Code-Terminal-Pane neben Ihrem Editor, ist aber nicht integriert). Das Diff-Edit-Format ist empfindlich gegenüber Modell-Ausgabequalität — ein Modell, das den Search-Block paraphrasiert statt ihn zu reproduzieren, fehlschlag Edits und Sie sehen Wiederholungs-Versuche im Terminal.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Stellen Sie `auto-commits: true` ein (Standard) und verwenden Sie `git rebase -i`, um Aiders Commits am Ende einer Feature zu squashen. Die feinkörnigen Commits während der Arbeit sind wertvoll für `/undo`; der squashed Final-Commit ist das, was Ihr Team überprüft. Aider dokumentiert genau dieses Muster.',
          },
        ],
      },
      editModel: {
        id: 'edit-model',
        title: 'Edit-Modell: Wie jeder Harness Code schreibt',
        content:
          '**Das Edit-Modell ist der einzeln größte Bestimmungsfaktor, wie sich jeder Harness anfühlt.** Dasselbe Modell, dasselbe Ziel — drei sehr verschiedene Artefakte.',
        image: '/images/coding-agent-edit-model-de.svg',
        imageCaption: 'Bearbeitungsmodell-Zuverlässigkeit: Bei 7B-Modellen ist Continue.dev am tolerantesten, Aider lehnt falsche Blöcke ab, Cline stoppt bei fehlerhaftem XML; bei 30B+ Coding-Modellen (Qwen3-Coder, DeepSeek Coder V3) sind alle drei zuverlässig.',
        items: [
          '**Continue.dev** — für Autocomplete: FIM-Tokens um den Cursor produzieren Inline-Completions. Für Chat-gesteuerte Edits: das Modell gibt einen gefencten Code-Block zurück; "Apply" führt einen Diff gegen die offene Datei aus und präsentiert ihn zur Akzeptanz/Ablehnung. Für Inline-Edits (Cmd/Ctrl+I auf einer Auswahl): das Modell schreibt die Auswahl um und der Diff wird an Ort und Stelle angezeigt.',
          '**Cline** — jeder Edit ist ein Tool-Call. `write_to_file` für neue Dateien oder vollständige Rewrites, `replace_in_file` für chirurgische Changes mit expliziten `<<<<<<< SEARCH` / `>>>>>>> REPLACE`-Blöcken. Tool-Calls werden gegen ein Schema validiert; malformed werden ein "Tool-Fehler", den der Agent sieht und erneut versucht. Das Gespräch ist strukturierte Tool-Calls und Tool-Ergebnisse, keine freie Prosa.',
          '**Aider** — Search-and-Replace-Diff-Blöcke in einfacher Prosa gerendert, im CLI geparst. Das Modell gibt etwa einen Unified-Diff-gefencten Block aus; Aider wendet ihn an und committed. Wenn der SEARCH-Block die Datei nicht wörtlich passt, wird der Edit abgelehnt und Aider fordert das Modell auf, erneut zu versuchen.',
          '**Zuverlässigkeits-Ranking bei einem 7B-Klasse-Modell:** Continue.dev > Aider > Cline. Continues "Apply" ist tolerant — kleine Paraphrasen werden durch den Diff-Algorithmus abgeglichen. Aider lehnt outright bei mismatched Search-Blöcken ab, aber der Fehler ist laut und erholbar. Clines XML-Tool-Format ist das spröde auf kleinen Modellen — malformed Tool-Calls stellen die Schleife hin.',
          '**Zuverlässigkeits-Ranking bei einem 30B+ Tool-Calling-Modell (Qwen3-Coder 30B, DeepSeek Coder V3):** alle drei konvergieren — das Modell hat die Kapazität, präzise Diff-Blöcke und wohlgeformte Tool-Calls konsistent auszugeben.',
          'Für strukturierte Prompting-Techniken, die Code-Generierung unabhängig davon verbessern, welcher Harness sie umhüllt, sehen Sie [Schreiben Sie besseren Code mit KI](/prompt-engineering/write-better-code-with-ai?lang=de).',
        ],
      },
      undo: {
        id: 'undo',
        title: 'Rückgängigmachen, Rollback und die Frage "Was hat der Agent gerade getan"',
        content:
          '**Rückgängigmachen ist die unglamouröse Funktion, die Sie nur bemerken, wenn Sie sie brauchen.** Alle drei Harnesses sind wiederherstellbar; der Unterschied liegt darin, wie viel Reibung zwischen "das war ein Fehler" und "der Fehler ist weg" sitzt.',
        items: [
          '**Continue.dev** — angewendete Edits treten dem VS Code Undo-Stack bei. Cmd/Ctrl+Z macht den letzten Apply pro Datei rückgängig. Für Multi-File-Rollback macht Ihr bestehender Git-Workflow die schwere Arbeit. Es gibt keinen Harness-Level "Rückgängigmachen dieses gesamten Gesprächs"-Befehl.',
          '**Cline** — die Agent-UI zeigt jeden Schritt als eine Karte; Pro-Edit-Revert ist ein Klick. Die Karten persistent für die Dauer der Aufgabe. Nach der Aufgabe endet, ist Rollback via Git — Cline committed nicht automatisch, so dass Sie möglicherweise einen Haufen uncommitted Changes nach einer langen Session haben.',
          '**Aider** — `/undo` macht letzten Commit rückgängig; wiederholen Sie, um weiter zu gehen. Da jeder Edit ein separater Commit ist, passt die Granularität der Gesprächs-Schritt-für-Schritt. `git reflog` erholt alles, was `/undo` nicht kann.',
          '**Die praktische Implikation:** Wenn Sie geneigt sind, einen Agenten 20 Minuten unüberwacht laufen zu lassen, gibt Ihnen Aider das überprüfbarste Artefakt danach (ein sauberes Commit-Log) und Cline gibt Ihnen die leserlichste In-Progress-Auditschleifen (Pro-Step-Karten, aber keine Commits). Continue.dev setzt voraus, dass Sie während des Ganzen an der Tastatur geblieben sind.',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Für Cline-Sessions führen Sie `git stash` vor dem Starten einer nichttrivialen Aufgabe aus. Wenn der Agent entgleist, räumt `git stash drop` schneller auf als Pro-Datei-Revert. Für Aider ist das bestehende Commit-Log die Sicherheit — tun Sie nichts Extras.',
          },
        ],
      },
      context: {
        id: 'context',
        title: 'Kontext-Fenster-Strategie: Wo Token hingehen',
        content:
          '**Die drei Harnesses geben Token unterschiedlich aus.** Dies ist die wichtigste Budget-Entscheidung, wenn Sie ein Modell mit einem kleineren Kontext-Fenster (32K oder darunter) und ein nichttriviales Repo haben.',
        image: '/images/coding-agent-context-strategy-de.svg',
        imageCaption: 'Kontextfenster-Strategie: Continue.dev nutzt bedarfsgesteuerten Index-Abruf (32K Minimum), Cline streamt vollständige Dateien (128K für Mehrfachdatei-Aufgaben empfohlen), Aider nutzt Tree-Sitter-Repo-Map plus /add (32K Minimum).',
        items: [
          '**Continue.dev** — TF-IDF plus Embedding-Index über das Projekt. Retrieval ist On-Demand: nur Chunks, die für die aktuelle Chat-Nachricht relevant sind, landen im Prompt. `@codebase` triggert eine semantische Suche; `@file path/to/x.ts` injiziert die Datei wörtlich. Token-Nutzung skaliert mit dem, was Sie pinnen, nicht mit der Größe des Repos.',
          '**Cline** — vollständige Datei-Inhalte werden bei jedem Read in das Gespräch gestreamt. Eine 500-Zeilen-Datei verbraucht ~3K–5K Token; eine Agent-Aufgabe, die 8 Dateien berührt, brennt 25K–40K Token durch, bevor überhaupt Reasoning stattfindet. Empfohlen Minimum: 32K Kontext-Fenster; 128K ist komfortabel.',
          '**Aider** — Tree-Sitter-Repo-Map (Standard ~2K Token, konfigurierbar via `--map-tokens`) plus die Inhalte von Dateien, die explizit `/add`-et werden. Die Map ist eine Definition-Only-Zusammenfassung, keine vollständige Code, so skaliert es viel besser mit Repo-Größe als Streaming-Dateien. `/drop` Dateien, wenn sie nicht mehr im Scope sind.',
          '**Praktische Implikation für ein 32K-Kontext-Modell:** Continue.dev und Aider bleiben auf den meisten Repos komfortabel; Cline beginnt, Kontext-Druck auf Aufgaben zu treffen, die mehr als 5–6 Dateien berühren, es sei denn, Sie wechseln zu einem 128K-Kontext-Modell.',
          '**Praktische Implikation für ein 128K-Kontext-Modell:** alle drei sind komfortabel. Clines höherer Verbrauch hört auf zu wichtig; der entscheidende Faktor kehrt zur Workflow-Primitive zurück.',
          'Für eine tiefere Erklärung von Kontext-Fenstern und warum Modelle mittleren Kontext Informationen verlieren, sehen Sie [Kontext-Fenster erklärt: Warum KI vergisst](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=de).',
        ],
      },
      toolCalls: {
        id: 'tool-calls',
        title: 'Tool-Call-Zuverlässigkeit ist eine Modell-Eigenschaft',
        content:
          '**Tool-Call-Fehler werden normalerweise dem Harness zugeschrieben.** In der Praxis gibt das Modell einen malformed-Call aus, der Harness validiert streng, und die Schleife stellt sich hin. Dasselbe Modell in einem anderen Harness produziert denselben Fehlermodus.',
        items: [
          '**Modelle, die diese Harnesses zuverlässig Tool-Call (Mai 2026):** Qwen3-Coder 30B (Best-in-Class auf Clines XML-Format), DeepSeek Coder V3 (großer Kontext, stark bei Multi-Step-Plänen), Llama 3.3 70B (langsam aber zuverlässig), Codestral 22B (schnell, kleinerer Plan-Horizont).',
          '**Modelle, die Schwierigkeiten haben:** alles unter 7B, die meisten Allzweck-Modelle unter 13B ohne Coding-Fine-Tunes und Quantisierungen strenger als Q4_K_M am unteren Ende. Symptome: malformed XML in Cline, paraphrasierte SEARCH-Blöcke in Aider, gefenceter Code, der nicht zur offenen Datei passt in Continue.dev.',
          '**Die Lösung ist selten "wechseln Sie Harness".** Es ist "wechseln Sie Modell" oder "erhöhen Sie Quantisierung". Ein Qwen3-Coder 30B bei Q4_K_M Tool-Calls zuverlässig über alle drei Harnesses. Ein Llama 3.2 7B bei Q4 fehlschlag in allen drei.',
          '**Continues Agent-Modus** verwendet Standard OpenAI Tool-Calling JSON. Die meisten Coding-Tuned-Modelle handhaben das gut.',
          '**Clines XML-Format** ist das anspruchsvollste — das Modell muss exakte XML-Struktur produzieren. Coding-Tuned-Modelle, die auf vielfältigen Formaten trainiert wurden (Qwen3-Coder, DeepSeek Coder) handhaben das; Allzweck-Modelle oft nicht.',
          '**Aider hat keine Tool-Calls per se** — es parst Search-and-Replace-Blöcke aus Prosa. Die "Zuverlässigkeits"-Frage wird "reproduziert das Modell SEARCH-Blöcke wörtlich", was die meisten Coding-Tuned 22B+ Modelle gut machen.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Wenn ein neues lokales Modell evaluiert wird, testen Sie es in dem Harness, den Sie tatsächlich verwenden, nicht in einem generischen Tool-Call-Benchmark. Das relevante Signal ist, ob Ihr täglicher Workflow stall stellt. Ein Modell, das 85 % auf einem öffentlichen Tool-Call-Benchmark scort, kann immernoch die Hälfte Ihrer Cline-Aufgaben fehlschlagen, wenn es Clines spezifisches XML nicht zuverlässig ausgibt.',
          },
        ],
      },
      ideIntegration: {
        id: 'ide-integration',
        title: 'IDE-Integration und Editor-Reichweite',
        content:
          '**Editor-Reichweite ist, wo sich die drei Harnesses am sichtbarsten unterscheiden.** Dies ist die Dimension, die die meisten Leser tatsächlich interessiert; sie ist auch am einfachsten in 10 Minuten zu testen.',
        items: [
          '**Continue.dev** — VS Code Marketplace und JetBrains Marketplace. Der JetBrains-Build ist real (IntelliJ, PyCharm, GoLand, WebStorm, usw.) und hat Feature-Parität mit dem VS Code-Build für Autocomplete und Chat. Cursor-Nutzer können die VS Code-Extension installieren; das Verhalten passt VS Code.',
          '**Cline** — nur VS Code-Extension. Funktioniert in Cursor (das ist ein VS Code-Fork), ist aber nicht offiziell dort getestet; die Extension-Oberfläche ist identisch und die meisten Nutzer melden keine Probleme. JetBrains-Nutzer haben für jetzt kein Glück.',
          '**Aider** — Terminal-First; integriert mit jedem Editor, indem er daneben sitzt. VS Code: öffnen Sie das integrierte Terminal, führen Sie Aider aus, bearbeiten Sie in der Editor-Pane, während Aider committed. JetBrains: gleiches Muster im JetBrains-Terminal. Vim/Neovim: gepaart mit `:e!` zum Neuladen nach Aider-Commits, ist das ein produktiver Flow. Cursor: identisch mit VS Code.',
          '**Praktische Implikation für JetBrains-Nutzer:** Continue.dev oder Aider sind Ihre einzigen Optionen.',
          '**Praktische Implikation für Vim/Neovim-Nutzer:** Aider ist der natürliche Fit. Continue.dev hat Community-Neovim-Integrationen unterschiedlicher Reife; die offizielle Oberfläche ist VS Code und JetBrains.',
        ],
      },
      workflowFit: {
        id: 'workflow-fit',
        title: 'Workflow-Anpassung nach Anwendungsfall',
        content:
          '**Der nützlichste Rahmen ist "welche Art von Tag Sie haben".** Passen Sie Harness zu Tag, nicht umgekehrt.',
        image: '/images/coding-agent-workflow-fit-de.svg',
        imageCaption: 'Workflow-Eignung: Continue.dev für Autovervollständigung und In-IDE-Fragen; Cline für Mehrfachdatei-Refactoring und exploratives Debugging mit Befehlszugriff; Aider für git-native Änderungen, SSH und Vim/Neovim.',
        columns: ['Anwendungsfall', 'Bester Fit', 'Warum'],
        rows: [
          {
            'Anwendungsfall': 'Eine Funktion zu einer bestehenden Datei mit Autocomplete hinzufügen',
            'Bester Fit': 'Continue.dev',
            'Warum': 'FIM-Autocomplete ist das natürliche Primitive; kein Chat nötig',
          },
          {
            'Anwendungsfall': 'Fragen "was macht diese Funktion" ohne den Editor zu verlassen',
            'Bester Fit': 'Continue.dev',
            'Warum': 'In-IDE-Chat mit `@file` ist der reibungsloseste Weg',
          },
          {
            'Anwendungsfall': 'Ein Feature über 5+ Dateien refaktorieren',
            'Bester Fit': 'Cline',
            'Warum': 'Native Multi-File-Edits mit Pro-Step-Approval',
          },
          {
            'Anwendungsfall': '"Warum ist dieser Test flaky" explorative Bug-Hunt',
            'Bester Fit': 'Cline',
            'Warum': 'Agent-Schleife führt Befehle aus, liest Logs, iteriert',
          },
          {
            'Anwendungsfall': 'Repo-Wide-Umbenennung oder API-Migration mit überprüfbaren Commits',
            'Bester Fit': 'Aider',
            'Warum': 'Jeder Edit wird ein Commit; trivial zu überprüfen und rückgängig zu machen',
          },
          {
            'Anwendungsfall': 'SSH auf einen Server, arbeiten ohne IDE',
            'Bester Fit': 'Aider',
            'Warum': 'Terminal-Only nach Design',
          },
          {
            'Anwendungsfall': 'Vim oder Neovim Daily Driver',
            'Bester Fit': 'Aider',
            'Warum': 'Paart natürlich mit Terminal-gesteuerte Bearbeitung',
          },
          {
            'Anwendungsfall': 'JetBrains IDE (IntelliJ, GoLand, PyCharm) Nutzer',
            'Bester Fit': 'Continue.dev oder Aider',
            'Warum': 'Cline ist nur VS Code',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: 'Entscheidungsbaum: Welcher sollte Sie wählen',
        content:
          '**Fünf Fragen, in Reihenfolge, bringen die meisten Leser zur richtigen Wahl.**',
        items: [
          '**1. Befinden Sie sich in JetBrains, Vim oder arbeiten Sie über SSH?** → Wenn ja, sind Sie zwischen Continue.dev (nur JetBrains) und Aider (Vim/SSH). Gehen Sie zu Q4. Wenn nein, fahren Sie fort.',
          '**2. Möchten Sie einen autonomen Agenten, der mehrere Dateien in einer Aufgabe bearbeitet?** → Ja: Cline. Nein: fahren Sie fort.',
          '**3. Möchten Sie Autocomplete plus ein In-IDE-Chat-Panel?** → Ja: Continue.dev. Nein: fahren Sie fort.',
          '**4. Überprüfen Sie Changes via `git diff` und möchten jeden Edit automatisch committed?** → Ja: Aider. Nein: Continue.dev (Standard).',
          '**5. Immer noch unsicher?** → Starten Sie mit Continue.dev. Das ist die Installation mit den geringsten Reibungsverlusten, funktioniert in dem Editor, den Sie wahrscheinlich bereits verwenden, und das Hinzufügen von Aider später für Terminal-gesteuerte Arbeit ist unkompliziert. Cline ist am meisten störend, um zu einem Workflow hinzuzufügen; adoptieren Sie es nur, wenn Sie wissen, dass Sie die Agent-Schleife möchten.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler bei der Auswahl eines lokalen Coding Harness',
        items: [
          '**Fehler 1: Den Harness vor dem Modell zu wählen.** Ein 30B Coding-Tuned-Modell in jedem der drei Harnesses übertrifft ein 7B Allzweck-Modell im "besten" Harness. Wählen Sie das Modell zuerst; der Harness ist die zweite Entscheidung.',
          '**Fehler 2: Ein einzelnes Modell für Autocomplete und Chat in Continue.dev zu verwenden.** Autocomplete braucht Sub-200ms Latenz; Chat toleriert Sekunden. Führen Sie ein kleines Autocomplete-Modell und ein größeres Chat-Modell in der gleichen Konfiguration aus.',
          '**Fehler 3: Clines Auto-Approve vollständig offen zu lassen.** Eine Modell-Schleife mit `execute_command` auto-approved kann realen Schaden anrichten. Halten Sie destruktive Tools gesperrt, bis Sie dem Modell auf dieser Codebasis vertrauen.',
          '**Fehler 4: Aider auf einem Modell zu verwenden, das Code paraphrasiert.** Wenn das Modell SEARCH-Blöcke nicht wörtlich reproduzieren kann, fehlschlag jeder Edit. Verwenden Sie ein Coding-Tuned 22B+ Modell (Qwen3-Coder, DeepSeek Coder, Codestral) für zuverlässige Diff-Edits.',
          '**Fehler 5: Harness zu wechseln, um ein Modell-Problem zu beheben.** Wenn Tool-Calls in Cline fehlschlag, werden sie wahrscheinlich auch in Continues Agent-Modus aus demselben Grund fehlschlag. Diagnostizieren Sie das Modell zuerst.',
          '**Fehler 6: Cline gegen ein 32K-Kontext-Modell bei Multi-File-Aufgaben auszuführen.** Token-Verbrauch brennt durch das Budget mitten in der Aufgabe. Verwenden Sie ein 128K-Kontext-Modell für nichttriviale Cline-Arbeit.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Continue.dev Dokumentation](https://docs.continue.dev/) — Offizielle Einrichtungs-Anleitung, Modell-Konfiguration, `@`-Context-Provider und Agent-Modus-Referenz.',
          '[Cline GitHub Repository](https://github.com/cline/cline) — Quellcode, Tool-Schemata, Plan/Act-Modus-Verhalten und Extension-Architektur.',
          '[Aider Dokumentation](https://aider.chat/) — Offizielle CLI-Referenz, Edit-Format-Dokumentation, Repo-Map-Mechaniken und Pro-Modell-Defaults.',
          '[Ollama Modell-Bibliothek](https://ollama.com/library) — Verfügbare lokale Modelle und Quantisierungs-Ebenen, die für jeden Harness referenziert werden.',
          '[Qwen3-Coder Modell-Karte](https://huggingface.co/Qwen/Qwen3-Coder-30B) — Architektur, unterstützte Kontext-Längen und Tool-Call-Trainings-Daten für das empfohlene Coding-Modell.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Welcher ist am besten für VS Code-Nutzer?',
            a: 'Jeder der drei funktioniert in VS Code, aber Continue.dev und Cline sind die natürlichen Fits. Continue.dev für Autocomplete-First und In-IDE-Chat; Cline für autonome Agent-Aufgaben. Aider funktioniert perfekt aus dem VS Code integrierten Terminal, aber integriert sich nicht mit der Editor-Oberfläche selbst — seine UI ist das Terminal.',
          },
          {
            q: 'Unterstützt Cline die Cursor IDE?',
            a: 'Cursor ist ein VS Code-Fork und akzeptiert VS Code-Extensions. Cline installiert und läuft in Cursor; die Extension-Oberfläche ist identisch. Das Cline-Team zielt offiziell nicht auf Cursor ab, so dass Edge-Cases (spezifische Cursor-APIs, zukünftige Cursor-Änderungen) nicht garantiert sind, aber in der Praxis melden Nutzer keine Probleme.',
          },
          {
            q: 'Kann Aider ohne Git funktionieren?',
            a: 'Ja, aber Sie verlieren das Workflow-Primitive, das es definiert. Aider läuft in nicht-Git-Verzeichnissen mit `--no-git`; Edits wenden immer noch an, aber es gibt keine Commits, so dass `/undo` deaktiviert ist und Rollback auf die Modell-Diff-Historie innerhalb der Session fällt. Für nichttriviale Arbeit initialisieren Sie ein Git-Repo — auch ein ignoriertes — bevor Sie anfangen.',
          },
          {
            q: 'Welcher hat das beste Multi-File-Refactoring?',
            a: 'Cline für autonome Multi-File-Arbeit — er plant über Dateien hinweg, liest sie nach Bedarf und bearbeitet mit Pro-Step-Approval. Aider für überprüfbare Multi-File-Arbeit, bei der Sie die Dateien explizit benennen und jeden Edit committed möchten. Continue.dev erfordert manuelle Steuerung pro Datei; es ist das schwächste der drei bei Multi-File-Refactorings.',
          },
          {
            q: 'Unterstützen diese Out-of-the-Box lokales Ollama?',
            a: 'Ja. Continue.dev hat einen nativen Ollama-Provider mit einer Konfigurationsblock. Cline listet Ollama im Provider-Dropdown auf. Aider unterstützt Ollama durch LiteLLM mit `--model ollama_chat/<model-name>`. Ollama ist das Backend mit den geringsten Reibungsverlusten für alle drei.',
          },
          {
            q: 'Welcher funktioniert am besten mit Qwen3-Coder?',
            a: 'Qwen3-Coder 30B ist zuverlässig über alle drei Harnesses im Mai 2026 — es handhaben Clines XML-Tool-Format, Aiders Search-and-Replace-Blöcke und Continues Autocomplete + Chat-Workflows ohne messbarer Verschlechterung. Kleinere Qwen3-Coder-Varianten (7B-Klasse) Tool-Call weniger zuverlässig und machen besser in Continues Autocomplete-Only-Modus als in Clines Agent-Schleife.',
          },
          {
            q: 'Kann ich diese mit Cursors lokalem Modus verwenden?',
            a: 'Cursors eingebaute Features (Tab-Autocomplete, Cmd+K) verwenden Cursors eigenes Modell-Routing, nicht diese Harnesses. Um einen lokalen LLM in Cursor zu verwenden, installieren Sie Continue.dev oder Cline als VS Code-Extensions in Cursor — sie bringen ihre eigene Provider-Konfiguration unabhängig von Cursors mit. Aider läuft in Cursors integriertem Terminal genauso wie in VS Codes.',
          },
          {
            q: 'Welcher ist am stärksten für lange Sessions?',
            a: 'Aider, weil es keinen In-Process-State zu corrumpieren hat — jeder Edit ist ein Commit, und ein Session-Crash verliert nur das Gespräch, nicht die Arbeit. Continue.dev ist über lange IDE-Sessions stabil. Clines lange Sessions können Kontext-Fenster-Druck auf kleineren Modellen treffen; das Neustarten von Aufgaben zwischen großen Refactorings vermeidet das Problem.',
          },
          {
            q: 'Unterstützen diese benutzerdefinierte System-Prompts?',
            a: 'Alle drei. Continue.dev: pro-Modell `systemMessage` in `config.json`. Cline: "Custom Instructions"-Feld in den Extension-Einstellungen. Aider: `--system-prompt`-Flag oder Pro-Modell-Defaults in `.aider.conf.yml`. Benutzerdefinierte Prompts sind besonders nützlich für Cline (Steuerung des Plan-Modus-Verhaltens) und Aider (Durchsetzung eines Coding-Stils über Commits).',
          },
          {
            q: 'Müssen DevOps oder Platform-Engineering-Teams DSGVO-Anforderungen für lokale Coding Agents beachten?',
            a: 'Ja, besonders wenn Code oder Logs, die sich auf lokale LLMs beziehen, EU-Nutzerdaten enthalten könnten. DSGVO Artikel 28 verlangt, dass alle Datenverarbeitungswerkzeuge (einschließlich der Harnesses selbst) Data Processing Agreements (DPA) mit den eingesetzten Anbietern haben. Lokale LLMs selbst (Ollama, llama.cpp) speichern keine personenbezogenen Daten, aber die Logs und Code-Verzeichnisse, die sie indizieren, könnten sensible Informationen enthalten. Das BSI-Grundschutz-Katalog empfohlen für deutsche Organisationen zusätzliche Härtung. Konsultieren Sie Ihr Datenschutzteam, bevor Sie einen Harness in einer Production Environment in einer regulierten Branche bereitstellen.',
          },
          {
            q: 'Welcher Coding Agent ist am beste für Mittelstand (kleine bis mittlere Unternehmen) geeignet?',
            a: 'Aider bietet das beste Kosten-Nutzen-Verhältnis für den Mittelstand: keine IDE-Lizenzabhängigkeit, direkt Terminal-basiert (passt zu bestehenden Entwickler-Umgebungen), minimale Hardwarevorraussetzungen (läuft mit einem 32K-Kontext-Modell), und das gesamte Audit-Trail ist im Git-Log (unterstützt einfacher Compliance und Code-Review). Continue.dev ist zweite Wahl für Teams, die stark in VS Code/JetBrains investiert haben. Cline wird teuer mit der Token-Nutzung und erfordert größere Hardwares, passt aber zu Agile-Heavy-Refactor-Workflows. Mittlere Unternehmen sparen Kosten durch On-Premise-Deployment mit lokalen Modellen — die Harness-Wahl sollte nach Bestehender Infrastruktur und Developer-Workflows erfolgen, nicht nach Hypе.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Ressourcen',
        items: [
          '[GitHub Copilot durch einen lokalen LLM ersetzen](/power-local-llm/replace-github-copilot-with-local-llm?lang=de) — breiterer Ersatz-Kontext, einschließlich Kosten und Privacy-Mathematik.',
          '[Best Local Coding Models in 2026](/power-local-llm/best-local-coding-models-2026?lang=de) — die Modell-Seite der Gleichung: Qwen3-Coder vs DeepSeek vs Codestral auf realen Benchmarks.',
          '[Local AI Agents With MCP in 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=de) — für Nutzer, die erweiterte Tool-Calling jenseits der obigen Harnesses möchten.',
          '[Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=de) — angrenzende technische Tiefe auf Tool-Call-Zuverlässigkeit.',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=de) — die Inference-Engine-Schicht unter allen drei Harnesses.',
          '[Power Local LLM Hub](/power-local-llm) — vollständige Anleitung-Bibliothek.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Continue.dev vs Cline vs Aider : Meilleur agent de codage local 2026',
    seoTitle: 'Continue.dev vs Cline vs Aider – Comparaison agents IA locaux 2026',
    intro:
      "Continue.dev, Cline et Aider sont les trois outils de codage open-source sérieux qui s'intègrent correctement avec un LLM local en 2026. Ils ne sont pas interchangeables : chacun est construit autour d'une primitive de flux de travail différente — autocomplétion, boucle d'agent autonome ou diff natif Git. Choisissez d'abord selon le flux de travail, le modèle en second lieu, et vous évitez 90 % des problèmes d'intégration.",
    metaDescription:
      'Continue.dev, Cline et Aider comparés comme agents de codage locaux 2026. Modèle d\'édition, intégration IDE, annulation et stratégies de contexte — choisis par flux de travail, pas par effet de mode.',
    twitterDescription:
      'Trois outils de codage locaux, trois primitives de flux de travail différentes. Continue.dev pour l\'autocomplétion, Cline pour les agents autonomes, Aider pour les diffs natifs Git. Verdict par flux de travail à l\'intérieur.',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Llama 3.3 70B',
      'Codestral 22B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'Développeurs exécutant un LLM de codage local (Qwen3-Coder, DeepSeek Coder, Codestral, Llama 3.3) qui ont besoin de choisir un outil qui s\'adapte à leur éditeur existant et à leur flux de travail de projet.',
    readTime: '14 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'agent de codage local',
    targetKeywords: [
      'continue.dev vs cline',
      'cline vs aider',
      'meilleur agent de codage local 2026',
      'harness de codage llm local',
      'aider llm local',
      'continue.dev llm local',
    ],
    leadAnswerBlock:
      "**Continue.dev, Cline et Aider résolvent des problèmes différents avec le même modèle local. Continue.dev est construit autour de l'autocomplétion et d'un panneau de chat intégré à l'IDE — idéal pour les flux de travail d'édition pendant la saisie dans VS Code ou JetBrains. Cline est un agent VS Code autonome qui planifie, édite et exécute des commandes sur plusieurs fichiers avec des portes d'approbation explicites — idéal pour les refactorisations multi-fichiers et les chasses aux bogues exploratoires. Aider est un outil CLI natif Git basé sur le terminal qui transforme chaque édition en un commit avec des diffs de recherche et remplacement chirurgicaux — idéal pour le travail à l'échelle du référentiel et les relecteurs qui veulent que chaque modification se reflète dans `git log`. Choisissez selon la primitive de flux de travail (autocomplétion vs boucle d'agent vs diff Git), pas selon l'outil qui semble le plus puissant.**",
    quickAnswerTop: {
      fr: {
        question: 'Quel agent de codage local est le meilleur en 2026 : Continue.dev, Cline ou Aider ?',
        answer:
          'Choisissez Continue.dev si vous passez la plupart de votre journée dans VS Code ou JetBrains et que vous voulez l\'autocomplétion plus un panneau de chat qui peut accéder à votre base de code. Choisissez Cline si vous voulez un agent autonome qui planifie, édite plusieurs fichiers et exécute des commandes avec des portes d\'approbation entre les étapes — plus fort pour les refactorisations et les chasses aux bogues exploratoires. Choisissez Aider si vous travaillez dans le terminal et que vous voulez que chaque édition soit commitée en tant que commit git séparé et vérifiable. Les trois fonctionnent entièrement hors ligne contre n\'importe quel endpoint LLM local (Ollama, llama.cpp, LM Studio, vLLM). Le bon choix est une décision de flux de travail, pas un classement de qualité.',
        bullets: [
          'Continue.dev — autocomplétion + chat intégré à l\'IDE. Idéal pour les utilisateurs VS Code et JetBrains qui veulent des éditions progressives sans quitter l\'éditeur.',
          'Cline — agent autonome avec modes Plan/Act, appels d\'outils et approbation par étape. Idéal pour les refactorisations multi-fichiers et les chasses aux bogues.',
          'Aider — CLI terminal avec commits natifs Git et diffs de recherche-remplacement. Idéal pour le travail vérifiable et réversible à l\'échelle du référentiel.',
          'Les trois fonctionnent avec n\'importe quel endpoint compatible OpenAI local — Ollama est le chemin le plus facile, llama.cpp et vLLM sont pris en charge via les configurations de fournisseur.',
          "L'adaptation au flux de travail surpasse la capacité brute. Forcer un développeur basé sur le terminal dans Cline (ou un développeur uniquement VS Code dans Aider) coûte plus de temps que l'outil ne peut en économiser.",
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Tableau comparatif', anchor: '#comparison-table' },
      { label: 'Lequel choisir ?', anchor: '#which-one' },
      { label: 'Continue.dev : Analyse approfondie', anchor: '#continue-dev' },
      { label: 'Cline : Analyse approfondie', anchor: '#cline' },
      { label: 'Aider : Analyse approfondie', anchor: '#aider' },
      { label: "Modèle d'édition : Comment chaque agent écrit du code", anchor: '#edit-model' },
      { label: 'Annuler et revenir en arrière', anchor: '#undo' },
      { label: 'Stratégie de fenêtre de contexte', anchor: '#context' },
      { label: "Fiabilité des appels d'outils", anchor: '#tool-calls' },
      { label: 'Intégration IDE', anchor: '#ide-integration' },
      { label: 'Adaptation aux flux de travail par cas d\'usage', anchor: '#workflow-fit' },
      { label: 'Arbre de décision', anchor: '#decision-tree' },
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
          "**Continue.dev** est basé sur l'autocomplétion : une extension VS Code et JetBrains avec des complétions FIM (Fill-in-the-Middle), un panneau de chat intégré à l'IDE et des fournisseurs de contexte `@` (base de code, fichier, docs, terminal). L'analogue open-source le plus proche de Copilot pour les modèles locaux.",
          "**Cline** est basé sur l'agent : une extension VS Code avec des modes Plan et Act explicites, une boucle d'appels d'outils (read_file, write_to_file, execute_command, browser_action) et une porte d'approbation à chaque étape. Conçu pour fonctionner de manière autonome sur plusieurs fichiers pendant que vous supervisez.",
          "**Aider** est basé sur Git : un CLI terminal qui maintient une carte de dépôt Tree-Sitter, édite les fichiers via des blocs de diff de recherche-remplacement et commite chaque modification. L'annulation est `git reset` — le flux de travail le plus vérifiable des trois.",
          'Les trois parlent les endpoints compatibles OpenAI. **Ollama** est le backend local le plus fluide ; **llama.cpp** et **vLLM** fonctionnent via les paramètres du fournisseur ou les proxies comme LiteLLM.',
          "**La fiabilité des appels d'outils** dépend du modèle, pas de l'outil. Qwen3-Coder 30B et DeepSeek Coder V3 sont les appelants d'outils les plus fiables en mai 2026 ; les modèles plus petits (classe 7B) émettent régulièrement des appels d'outils malformés, indépendamment de l'outil qui les enveloppe.",
          '**La stratégie de fenêtre de contexte** diffère considérablement : Continue.dev s\'appuie sur l\'index de base de code intégré et le contexte `@`-épinglé, Cline diffuse le contenu complet du fichier dans la conversation (utilisation de jetons élevée), Aider utilise une carte de dépôt Tree-Sitter plus `/add` et `/drop` explicites pour garder l\'ensemble de travail petit.',
          'Pour un développeur seul, **l\'adaptation au flux de travail** domine les résultats bien plus que tout benchmark. L\'outil que vous laissez réellement ouvert est celui que vous devriez choisir.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Continue.dev** — autocomplétion + chat, VS Code et JetBrains, installation la moins laborieuse des trois.',
          '**Cline** — agent autonome avec portes d\'approbation, uniquement VS Code, capacité la plus élevée et utilisation de jetons la plus élevée.',
          '**Aider** — CLI terminal, commits natifs Git, chaque édition est vérifiable et réversible via Git.',
          'Les trois s\'exécutent contre le même backend local — **Ollama** est le chemin le plus fluide ; **llama.cpp** et **vLLM** fonctionnent également via la configuration compatible OpenAI.',
          "**La fiabilité des appels d'outils est une propriété du modèle, pas de l'outil.** Qwen3-Coder 30B et DeepSeek Coder V3 sont fiables dans les trois ; les modèles de classe 7B échouent dans les trois.",
          '**Budget de contexte :** Continue.dev et Aider restent confortables sur un modèle de contexte 32K ; Cline a besoin de **128K** pour les tâches multi-fichiers non triviales.',
          '**Choisissez par éditeur :** JetBrains → Continue.dev ou Aider. Vim/Neovim ou SSH → Aider. VS Code avec des jours lourds en autocomplétion → Continue.dev. VS Code avec refactorisations multi-fichiers → Cline.',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Comment Continue.dev, Cline et Aider se comparent en 2026',
        content:
          "Les trois outils sont open-source, gratuits à exécuter et fonctionnent avec n'importe quel endpoint LLM local. Les différences structurelles ci-dessous décident lequel s'adapte à votre flux de travail.",
        image: '/images/coding-agent-comparison-fr.svg',
        imageCaption: "Continue.dev vs Cline vs Aider : Continue.dev pour l'autocomplétion dans VS Code/JetBrains (contexte 32K), Cline pour les agents multi-fichiers autonomes dans VS Code (128K recommandé), Aider pour les commits git-natifs en terminal (contexte 32K).",
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Continue.dev est l'autocomplétion de style Copilot, Cline est un agent autonome qui édite entre les fichiers, Aider est un outil terminal qui commite chaque édition dans Git — choisissez selon le flux de travail, pas selon le benchmark.",
          },
          {
            type: 'plain-terms',
            text: "Trois outils gratuits, le même modèle local, trois flux de travail complètement différents. Continue.dev se sent comme Copilot — appuyez sur Tab pour accepter les suggestions dans votre éditeur. Cline se sent comme un développeur junior que vous supervisez — il planifie et édite entre les fichiers pendant que vous approuvez chaque étape. Aider se sent comme faire la paire dans le terminal — vous parlez, il commite. Essayez celui qui correspond à la façon dont vous travaillez déjà.",
          },
        ],
        columns: ['Fonctionnalité', 'Continue.dev', 'Cline', 'Aider'],
        rows: [
          {
            'Fonctionnalité': 'Surface primaire',
            'Continue.dev': 'Extension VS Code et JetBrains',
            'Cline': 'Extension VS Code',
            'Aider': "CLI terminal (n'importe quel éditeur à côté)",
          },
          {
            'Fonctionnalité': 'Primitive de flux de travail',
            'Continue.dev': "Autocomplétion + chat intégré à l'IDE",
            'Cline': "Boucle d'agent autonome avec portes d'approbation",
            'Aider': "Éditions de diff natif Git, chaque modification un commit",
          },
          {
            'Fonctionnalité': "Modèle d'édition",
            'Continue.dev': "FIM en ligne + appliquer au fichier à partir du chat",
            'Cline': 'Appels d\'outils (read_file, write_to_file, replace_in_file)',
            'Aider': 'Blocs de diff de recherche-remplacement ; mode "tout" pour les petits fichiers',
          },
          {
            'Fonctionnalité': 'Éditions multi-fichiers',
            'Continue.dev': 'Manuel : le chat suggère, vous appliquez par fichier',
            'Cline': "Natif : l'agent édite entre les fichiers en une seule tâche",
            'Aider': "Natif : nommez les fichiers à l'invite, les éditions atterrissent dans un commit",
          },
          {
            'Fonctionnalité': 'Annulation / Rollback',
            'Continue.dev': "Pile d'annulation VS Code sur les éditions appliquées",
            'Cline': "Reversion par édition dans l'interface de l'agent ; Git pour le rollback dur",
            'Aider': "`/undo` inverse le dernier commit ; historique git complet en dessous",
          },
          {
            'Fonctionnalité': "Protocole d'appel d'outil",
            'Continue.dev': 'Outils OpenAI (function-calling) en mode Agent',
            'Cline': 'Blocs d\'outils XML personnalisés avec schéma strict',
            'Aider': "Pas d'appels d'outils ; invite le modèle à émettre des blocs de diff",
          },
          {
            'Fonctionnalité': 'Contexte de la base de code',
            'Continue.dev': "Index local (TF-IDF + embeddings) + fournisseurs `@`",
            'Cline': 'Diffuse le contenu complet des fichiers dans la conversation',
            'Aider': "Carte de dépôt Tree-Sitter + `/add` et `/drop` manuels",
          },
          {
            'Fonctionnalité': 'Approbation / Sécurité',
            'Continue.dev': 'Aperçu de diff avant chaque application',
            'Cline': "Approbation par étape ; listes de permission auto-approuvées configurables",
            'Aider': "Aperçu de diff dans le terminal ; l'étape de commit est automatique",
          },
          {
            'Fonctionnalité': 'Meilleur pour',
            'Continue.dev': "Édition-pendant-la-saisie, chat intégré à l'IDE, jours lourds en autocomplétion",
            'Cline': 'Refactorisations multi-fichiers, débogage exploratoire, tâches de dépôt',
            'Aider': 'Modifications vérifiables à l\'échelle du dépôt, flux de travail basés sur le terminal',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'Lequel choisir',
        content:
          "**Le bon outil est décidé par votre éditeur, votre tolérance pour les éditions autonomes et la façon dont vous examinez les modifications.** Utilisez ce raccourci.",
        image: '/images/coding-agent-which-one-fr.svg',
        imageCaption: "Quel outil de codage local choisir : Continue.dev pour l'autocomplétion et le chat in-IDE (VS Code + JetBrains), Cline pour les boucles agent multi-fichiers et l'exécution de commandes, Aider pour les workflows git-natifs en terminal et SSH.",
        columns: ['Votre situation', 'Choisissez'],
        rows: [
          { 'Votre situation': "Je travaille dans VS Code ou un IDE JetBrains et je veux l'autocomplétion de style Copilot", 'Choisissez': 'Continue.dev' },
          { 'Votre situation': "Je veux un panneau de chat qui peut accéder à ma base de code sans téléchargements manuels de fichiers", 'Choisissez': 'Continue.dev' },
          { 'Votre situation': "Je veux un agent qui planifie une refactorisation entre plusieurs fichiers et demande avant chaque étape", 'Choisissez': 'Cline' },
          { 'Votre situation': "Je veux que le modèle soit capable d'exécuter des commandes et de lire la sortie du terminal dans sa boucle", 'Choisissez': 'Cline' },
          { 'Votre situation': "Je revois les modifications via `git diff` et je veux que chaque édition soit commitée automatiquement", 'Choisissez': 'Aider' },
          { 'Votre situation': 'Je travaille via SSH ou dans une configuration basée sur le terminal', 'Choisissez': 'Aider' },
          { 'Votre situation': "Je veux les trois flux de travail occasionnellement — choisissez le plus simple en premier", 'Choisissez': "Commencez avec Continue.dev ; ajoutez Aider quand vous avez besoin de diffs natifs Git" },
        ],
      },
      continueDevDeep: {
        id: 'continue-dev',
        title: "Continue.dev : Le choix basé sur l'autocomplétion",
        content:
          "**Continue.dev est l'analogue open-source le plus proche de GitHub Copilot pour les modèles locaux.** Sa surface primaire est l'éditeur : complétions par Tab à la frappe plus un panneau de chat qui connaît votre base de code.",
        items: [
          "**Chemin d'installation :** VS Code Marketplace et JetBrains Marketplace. La configuration se trouve dans `~/.continue/config.json` (ou `config.yaml`) ; les définitions de modèles, les paramètres d'autocomplétion et les fournisseurs de contexte `@` s'y trouvent tous.",
          "**Primitive de flux de travail :** autocomplétion via FIM (Fill-in-the-Middle) plus un panneau de chat intégré à l'IDE. Le panneau de chat peut appliquer les éditions directement aux fichiers ouverts ; un mode Agent ajoute des boucles d'appels d'outils pour les tâches multi-étapes.",
          "**Configuration du modèle local :** le support natif d'Ollama est un bloc de configuration. llama.cpp, LM Studio et tout endpoint compatible OpenAI fonctionnent également. Le motif standard consiste à exécuter des modèles distincts pour l'autocomplétion (petit, rapide — classe Qwen2.5-Coder 1.5B) et le chat (plus grand — Qwen3-Coder 30B, DeepSeek Coder V3).",
          "**Contexte de la base de code :** index local (TF-IDF plus embeddings) dans votre dossier de projet. `@codebase`, `@file`, `@folder`, `@docs`, `@terminal` et les fournisseurs personnalisés accèdent à l'index à partir du panneau de chat.",
          '**Modèle d\'édition :** dans le chat, le modèle propose un bloc de code ; cliquer sur "Apply" fait un diff par rapport au fichier ouvert et vous acceptez ou rejetez la modification. Les éditions en ligne via Cmd/Ctrl+I réécrivent une sélection sur place. Les deux flux affichent un aperçu de diff avant toute écriture.',
          "**Où il excelle :** édition basée sur le clavier dans un IDE que vous utilisez déjà, peu de surcharge cognitive par édition, boucle de rétroaction rapide. L'outil que vous oubliez d'avoir installé.",
          "**Où il manque :** les refactorisations multi-fichiers vous obligent à piloter le chat par fichier. Les tâches autonomes longues ne sont pas son idiome natif — le mode Agent s'améliore mais n'est pas le centre de gravité du projet.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Exécutez deux modèles dans votre configuration Continue.dev : un petit modèle d'autocomplétion (Qwen2.5-Coder 1.5B à Q4_K_M a besoin d'environ 1,5 GB de VRAM) et un plus grand modèle de chat (Qwen3-Coder 30B Q4_K_M, ~17 GB). La séparation maintient la latence d'autocomplétion sous 200 ms pendant que le panneau de chat reste utile pour les questions non triviales.",
          },
        ],
      },
      clineDeep: {
        id: 'cline',
        title: 'Cline : Le choix de l\'agent autonome',
        content:
          "**Cline traite le codage comme une tâche d'agent, pas comme une série d'éditions.** Vous lui donnez un objectif ; il planifie, lit les fichiers, les édite, exécute les commandes et vous demande d'approuver chaque étape.",
        items: [
          "**Chemin d'installation :** VS Code Marketplace (pas de version JetBrains). La configuration est pilotée par interface graphique dans le panneau d'extension — fournisseur, modèle, paramètres d'approbation automatique, instructions personnalisées.",
          "**Primitive de flux de travail :** boucle d'agent autonome avec des modes Plan et Act explicites. Le mode Plan raisonne sur la tâche sans écrire les fichiers ; le mode Act exécute le plan avec les appels d'outils. Une porte d'approbation apparaît entre les étapes sauf si vous mettez les outils sur une liste d'permission d'approbation automatique.",
          "**Configuration du modèle local :** tout endpoint compatible OpenAI. Ollama est un clic. Pour llama.cpp ou vLLM, pointez Cline vers l'URL du serveur compatible OpenAI. La boucle d'agent consomme beaucoup de jetons — réservez un modèle avec au moins une fenêtre de contexte 32K (Qwen3-Coder 30B à 32K, DeepSeek Coder V3 à 128K).",
          "**Surface d'outils :** `read_file`, `write_to_file`, `replace_in_file`, `execute_command`, `list_files`, `search_files`, `browser_action`, `ask_followup_question`, `attempt_completion`. L'ensemble est petit et bien documenté ; les schémas d'outils utilisent un format XML personnalisé que le modèle doit émettre correctement.",
          "**Modèle d'édition :** pour les fichiers de quelques centaines de lignes, Cline écrit le fichier entier. Pour les fichiers plus grands, il émet des opérations `replace_in_file` avec des blocs de recherche et de remplacement explicites. Les diffs sont affichés dans le panneau avant chaque écriture.",
          "**Où il excelle :** refactorisations multi-fichiers, tâches exploratoires \"pourquoi ce test est-il instable\", flux de travail \"ajouter une fonctionnalité touchant trois couches\". Le plus puissant des trois sur les tâches avec plus de cinq éditions de fichiers.",
          "**Où il manque :** la consommation de jetons est élevée — le contenu complet des fichiers diffuse dans la conversation à chaque lecture. Les longues sessions épuisent les modèles de contexte 32K ; les modèles de contexte 128K sont recommandés pour les tâches non triviales. La fiabilité des appels d'outils se dégrade considérablement sur les modèles plus petits (classe 7B) — ils émettent du XML malformé et la boucle stagne.",
        ],
        callouts: [
          {
            type: 'note',
            text: "La liste de permission d'approbation automatique de Cline est la différence entre un agent utile et un agent fastidieux. Autorisez `read_file`, `list_files` et `search_files` par défaut ; gardez `write_to_file`, `replace_in_file` et `execute_command` bloqués jusqu'à ce que vous fassiez confiance au modèle sur cette base de code. Resserrez ou relâchez par projet.",
          },
        ],
      },
      aiderDeep: {
        id: 'aider',
        title: 'Aider : Le choix natif Git',
        content:
          "**Aider est le seul des trois qui traite votre référentiel comme la source de vérité, pas la conversation.** Chaque édition atterrit en tant que commit Git. L'annulation est `git reset`. L'historique du chat est jetable ; le journal des commits est l'artefact.",
        items: [
          "**Chemin d'installation :** `pip install aider-chat` ou `pipx install aider-chat`. Invocation CLI : `aider file1.py file2.py` (les fichiers sont limités à la conversation). Configuration via `.aider.conf.yml` et remplacements par drapeau.",
          "**Primitive de flux de travail :** édition conversationnelle basée sur le terminal. Tapez un message ; Aider propose un diff ; si vous acceptez, la modification est commitée. `/add` et `/drop` gèrent les fichiers en scope. `/undo` annule le dernier commit. `/diff` affiche la modification la plus récente par rapport à HEAD.",
          "**Configuration du modèle local :** tout modèle accessible via LiteLLM — Ollama, serveurs compatibles OpenAI (llama.cpp, vLLM, LM Studio) ou les fournisseurs de modèles directement. `--model ollama_chat/qwen3-coder:30b` est l'invocation locale typique.",
          "**Contexte de la base de code :** carte de dépôt Tree-Sitter. Aider analyse votre référentiel pour les définitions (fonctions, classes, méthodes), les résume en classant la proximité avec les fichiers en scope, et inclut le résumé dans le message système. La carte tient à peu près dans 1K–4K jetons pour les petits dépôts, plus pour les grands — `--map-tokens` plafonne le budget.",
          "**Modèle d'édition :** deux stratégies. Le mode \"Diff\" émet des blocs de recherche-remplacement que le modèle doit produire textuellement — chirurgical, faible consommation de jetons, mais casse si le modèle paraphrase le bloc de recherche. Le mode \"Whole\" réécrit les fichiers entiers — robuste sur les petits fichiers, coûteux sur les grands. Aider auto-sélectionne les défauts par modèle qui correspondent aux forces connues du modèle.",
          "**Où il excelle :** modifications à l'échelle du dépôt dont vous voulez que chaque étape figure dans le journal des commits ; pair-programming avec relecture de code intégrée (chaque commit est une unité de relecture discrète) ; flux de travail SSH et conteneur de développement où les extensions IDE ne sont pas une option.",
          "**Où il manque :** pas d'autocomplétion. Pas d'aperçu intégré à l'IDE par défaut (fonctionne bien dans un volet terminal VS Code à côté de votre éditeur, mais n'est pas intégré). Le format d'édition de diff est sensible à la qualité de la sortie du modèle — un modèle qui paraphrase le bloc de recherche au lieu de le reproduire échouera les éditions et vous verrez des tentatives de nouvelle tentative dans le terminal.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Défini `auto-commits: true` (par défaut) et utilisez `git rebase -i` pour squash les commits d'Aider à la fin d'une fonctionnalité. Les commits fins pendant le travail sont précieux pour `/undo` ; le commit squash final est ce que votre équipe examine. Aider documente exactement ce motif.",
          },
        ],
      },
      editModel: {
        id: 'edit-model',
        title: 'Modèle d\'édition : Comment chaque outil écrit du code',
        content:
          "**Le modèle d'édition est le plus grand déterminant unique de la façon dont chaque outil se sent.** Même modèle, même tâche — trois artefacts très différents.",
        image: '/images/coding-agent-edit-model-fr.svg',
        imageCaption: "Fiabilité du modèle d'édition : sur les modèles 7B, Continue.dev est le plus tolérant, Aider rejette les blocs incorrects, Cline bloque sur XML malformé ; sur les modèles 30B+ (Qwen3-Coder, DeepSeek Coder V3), les trois sont fiables.",
        items: [
          "**Continue.dev** — pour l'autocomplétion : les jetons FIM autour du curseur produisent des complétions en ligne. Pour les éditions pilotées par chat : le modèle retourne un bloc de code clôturé ; \"Apply\" exécute un diff par rapport au fichier ouvert et le présente pour acceptation/rejet. Pour les éditions en ligne (Cmd/Ctrl+I sur une sélection) : le modèle réécrit la sélection et le diff s'affiche sur place.",
          "**Cline** — chaque édition est un appel d'outil. `write_to_file` pour les nouveaux fichiers ou les réécritures complètes, `replace_in_file` pour les modifications chirurgicales avec des blocs `<<<<<<< SEARCH` / `>>>>>>> REPLACE` explicites. Les appels d'outils sont validés par rapport à un schéma ; les appels malformés reçoivent une \"erreur d'outil\" que l'agent voit et réessaye. La conversation est des appels d'outils structurés et des résultats d'outils, pas de prose libre.",
          "**Aider** — blocs de diff de recherche-remplacement rendus en prose simple, analysés dans le CLI. Le modèle émet quelque chose comme un bloc clôturé par diff unifié ; Aider l'applique et le commite. Si le bloc SEARCH ne correspond pas exactement au fichier, l'édition est rejetée et Aider demande au modèle d'essayer de nouveau.",
          "**Classement de fiabilité sur un modèle de classe 7B :** Continue.dev > Aider > Cline. L'\"Apply\" de Continue.dev est tolérant — les petites paraphrases sont réconciliées par l'algorithme de diff. Aider rejette catégoriquement les blocs de recherche mal appairés, mais l'échec est fort et récupérable. Le format d'outil XML de Cline est le plus cassant sur les petits modèles — les appels d'outils malformés bloquent la boucle.",
          "**Classement de fiabilité sur un modèle d'appels d'outils 30B+ (Qwen3-Coder 30B, DeepSeek Coder V3) :** les trois convergent — le modèle a la capacité d'émettre des blocs de diff précis et des appels d'outils bien formés de manière cohérente.",
          "Pour les techniques d'invite structurée qui améliorent la génération de code indépendamment de l'outil qui les enveloppe, voir [Écrire du meilleur code avec l'IA](/prompt-engineering/write-better-code-with-ai?lang=fr).",
        ],
      },
      undo: {
        id: 'undo',
        title: 'Annuler, revenir en arrière et la question « Qu\'a fait l\'agent ? »',
        content:
          "**Annuler est la fonctionnalité sans charme que vous ne remarquez que quand vous en avez besoin.** Les trois outils sont récupérables ; la différence est le frottement entre \"c'était une erreur\" et \"l'erreur a disparu\".",
        items: [
          "**Continue.dev** — les éditions appliquées rejoignent la pile d'annulation VS Code. Cmd/Ctrl+Z annule l'application la plus récente par fichier. Pour le rollback multi-fichiers, votre flux de travail Git existant effectue le travail lourd. Il n'y a pas de commande \"annuler cette conversation entière\" au niveau de l'outil.",
          "**Cline** — l'interface de l'agent affiche chaque étape en tant que carte ; la reversion par édition est un clic. Les cartes persistent pour la durée de la tâche. Après la fin de la tâche, le rollback se fait via Git — Cline ne commite pas automatiquement, vous pouvez donc avoir un tas de modifications non commitées après une longue session.",
          "**Aider** — `/undo` annule le commit le plus récent ; répétez pour revenir plus loin. Parce que chaque édition est un commit séparé, la granularité correspond à l'étape-par-étape de la conversation. `git reflog` récupère tout ce que `/undo` ne peut pas.",
          "**L'implication pratique :** si vous êtes enclin à laisser un agent fonctionner pendant 20 minutes sans surveillance, Aider vous donne l'artefact le plus vérifiable après (un journal des commits propre) et Cline vous donne la piste d'audit la plus lisible en cours (cartes par étape, mais pas de commits). Continue.dev suppose que vous êtes resté au clavier pendant tout ce temps.",
        ],
        callouts: [
          {
            type: 'tip',
            text: "Pour les sessions Cline, exécutez `git stash` avant de démarrer une tâche non triviale. Si l'agent déraille, `git stash drop` nettoie plus vite que de revenir par fichier. Pour Aider, le journal des commits existant est le filet de sécurité — ne faites rien d'extra.",
          },
        ],
      },
      context: {
        id: 'context',
        title: 'Stratégie de fenêtre de contexte : Où vont les jetons',
        content:
          "**Les trois outils dépensent les jetons différemment.** C'est la décision budgétaire la plus importante quand vous avez un modèle avec une fenêtre de contexte plus petite (32K ou moins) et un dépôt non trivial.",
        image: '/images/coding-agent-context-strategy-fr.svg',
        imageCaption: "Stratégie de contexte : Continue.dev utilise la récupération d'index à la demande (32K minimum), Cline streame les fichiers complets (128K recommandé pour les tâches multi-fichiers), Aider utilise une repo map tree-sitter + /add explicite (32K minimum).",
        items: [
          "**Continue.dev** — index TF-IDF plus embeddings sur le projet. La récupération est à la demande : seuls les chunks pertinents pour le message de chat actuel atterrissent dans l'invite. `@codebase` déclenche une recherche sémantique ; `@file path/to/x.ts` injecte le fichier textuellement. L'utilisation de jetons s'adapte à ce que vous épinglez, pas à la taille du dépôt.",
          "**Cline** — le contenu des fichiers complets est diffusé dans la conversation à chaque lecture. Un fichier de 500 lignes consomme ~3K–5K jetons ; une tâche d'agent qui touche 8 fichiers brûle 25K–40K jetons avant que tout raisonnement ne se produise. Minimum recommandé : fenêtre de contexte 32K ; 128K est confortable.",
          "**Aider** — carte de dépôt Tree-Sitter (~2K jetons par défaut, configurable via `--map-tokens`) plus le contenu des fichiers explicitement `/add`-és. La carte est un résumé définition-seulement, pas le code complet, elle s'adapte donc beaucoup mieux à la taille du dépôt que la diffusion de fichiers. `/drop` les fichiers quand ils ne sont plus en scope.",
          "**Implication pratique pour un modèle de contexte 32K :** Continue.dev et Aider restent confortables sur la plupart des dépôts ; Cline commence à frapper la pression du contexte sur les tâches qui touchent plus de 5–6 fichiers sauf si vous passez à un modèle de contexte 128K.",
          "**Implication pratique pour un modèle de contexte 128K :** les trois sont confortables. La consommation plus lourde de Cline cesse d'importer ; le facteur décisif revient à la primitive de flux de travail.",
          "Pour une explication plus approfondie des fenêtres de contexte et pourquoi les modèles oublient les informations au milieu du contexte, voir [Fenêtres de contexte expliquées : Pourquoi l'IA oublie](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=fr).",
        ],
      },
      toolCalls: {
        id: 'tool-calls',
        title: 'La fiabilité des appels d\'outils est une propriété du modèle',
        content:
          "**Les échecs des appels d'outils sont généralement attribués à tort à l'outil.** En pratique, le modèle émet un appel malformé, l'outil valide strictement et la boucle stagne. Le même modèle dans un outil différent produit le même mode d'échec.",
        items: [
          "**Modèles qui font des appels d'outils fiables pour ces outils (mai 2026) :** Qwen3-Coder 30B (best-in-class sur le format XML de Cline), DeepSeek Coder V3 (grand contexte, fort sur les plans multi-étapes), Llama 3.3 70B (lent mais fiable), Codestral 22B (rapide, horizon de plan plus petit).",
          "**Modèles qui ont des difficultés :** tout en dessous de 7B, la plupart des modèles à usage général en dessous de 13B sans affinages de codage et les quantisations plus strictes que Q4_K_M à l'extrémité inférieure. Symptômes : XML malformé dans Cline, blocs SEARCH paraphrasés dans Aider, code clôturé qui ne correspond pas au fichier ouvert dans Continue.dev.",
          "**La solution est rarement \"changer d'outil\".** C'est \"changer de modèle\" ou \"augmenter la quantisation\". Un Qwen3-Coder 30B à Q4_K_M fait des appels d'outils fiables sur les trois outils. Un Llama 3.2 7B à Q4 échouera dans les trois.",
          "**Le mode Agent de Continue.dev** utilise le JSON d'appel d'outil OpenAI standard. La plupart des modèles affinés au codage le gèrent bien.",
          "**Le format XML de Cline** est le plus exigeant — le modèle doit produire une structure XML exacte. Les modèles affinés au codage entraînés sur des formats divers (Qwen3-Coder, DeepSeek Coder) le gèrent ; les modèles à usage général souvent non.",
          "**Aider n'a pas d'appels d'outils per se** — il analyse les blocs de recherche-remplacement à partir de la prose. La question \"fiabilité\" devient \"le modèle reproduit-il les blocs SEARCH textuellement\", ce que la plupart des modèles affinés au codage 22B+ font bien.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Quand vous évaluez un nouveau modèle local, testez-le dans l'outil que vous utilisez réellement, pas dans un benchmark générique d'appels d'outils. Le signal pertinent est si votre flux de travail quotidien stagne. Un modèle qui scort 85 % sur un benchmark d'appels d'outils public peut toujours échouer la moitié de vos tâches Cline s'il n'émet pas de XML spécifique à Cline de manière fiable.",
          },
        ],
      },
      ideIntegration: {
        id: 'ide-integration',
        title: 'Intégration IDE et portée de l\'éditeur',
        content:
          "**La portée de l'éditeur est le lieu où les trois outils divergent le plus visiblement.** C'est la dimension que la plupart des lecteurs se soucient réellement ; c'est aussi la plus facile à tester en 10 minutes.",
        items: [
          '**Continue.dev** — VS Code Marketplace et JetBrains Marketplace. La construction JetBrains est réelle (IntelliJ, PyCharm, GoLand, WebStorm, etc.) et a la parité des fonctionnalités avec la construction VS Code pour l\'autocomplétion et le chat. Les utilisateurs de Cursor peuvent installer l\'extension VS Code ; le comportement correspond à VS Code.',
          '**Cline** — uniquement extension VS Code. Fonctionne dans Cursor (qui est un fork VS Code) mais n\'est pas officiellement testé ; la surface d\'extension est identique et la plupart des utilisateurs ne signalent aucun problème. Les utilisateurs de JetBrains n\'ont pas de chance pour le moment.',
          "**Aider** — basé sur le terminal ; s'intègre avec n'importe quel éditeur en s'asseillant à côté. VS Code : ouvrez le terminal intégré, exécutez Aider, éditez dans le volet d'éditeur pendant qu'Aider commite. JetBrains : même motif dans le terminal JetBrains. Vim/Neovim : associé à `:e!` pour recharger après les commits d'Aider, c'est un flux productif. Cursor : identique à VS Code.",
          "**Implication pratique pour les utilisateurs de JetBrains :** Continue.dev ou Aider sont vos seules options.",
          "**Implication pratique pour les utilisateurs de Vim/Neovim :** Aider est le fit naturel. Continue.dev a des intégrations Neovim communautaires de maturité variable ; la surface officielle est VS Code et JetBrains.",
        ],
      },
      workflowFit: {
        id: 'workflow-fit',
        title: 'Adaptation aux flux de travail par cas d\'usage',
        content:
          "**Le cadre le plus utile est \"quel genre de jour vous avez\".** Faites correspondre l'outil au jour, pas l'inverse.",
        image: '/images/coding-agent-workflow-fit-fr.svg',
        imageCaption: "Adéquation workflow : Continue.dev pour l'autocomplétion et les questions in-IDE ; Cline pour les refactorisations multi-fichiers et le débogage exploratoire avec accès aux commandes ; Aider pour les changements git-natifs, SSH et Vim/Neovim.",
        columns: ['Cas d\'usage', 'Meilleur fit', 'Pourquoi'],
        rows: [
          {
            'Cas d\'usage': 'Ajouter une fonction à un fichier existant avec autocomplétion',
            'Meilleur fit': 'Continue.dev',
            'Pourquoi': "L'autocomplétion FIM est la primitive naturelle ; pas de chat nécessaire",
          },
          {
            'Cas d\'usage': 'Demander "que fait cette fonction" sans quitter l\'éditeur',
            'Meilleur fit': 'Continue.dev',
            'Pourquoi': "Le chat intégré à l'IDE avec `@file` est le chemin le moins laborieux",
          },
          {
            'Cas d\'usage': 'Refactoriser une fonctionnalité sur 5+ fichiers',
            'Meilleur fit': 'Cline',
            'Pourquoi': "Éditions multi-fichiers natives avec approbation par étape",
          },
          {
            'Cas d\'usage': '"Pourquoi ce test est-il instable" chasse aux bogues exploratoire',
            'Meilleur fit': 'Cline',
            'Pourquoi': "La boucle d'agent exécute les commandes, lit les logs, itère",
          },
          {
            'Cas d\'usage': 'Renommage à l\'échelle du dépôt ou migration API avec commits vérifiables',
            'Meilleur fit': 'Aider',
            'Pourquoi': 'Chaque édition devient un commit ; trivial à vérifier et annuler',
          },
          {
            'Cas d\'usage': 'SSH sur un serveur, travailler sans IDE',
            'Meilleur fit': 'Aider',
            'Pourquoi': 'Terminal-Only par conception',
          },
          {
            'Cas d\'usage': 'Vim ou Neovim pilote quotidien',
            'Meilleur fit': 'Aider',
            'Pourquoi': "S'associe naturellement à l'édition basée sur le terminal",
          },
          {
            'Cas d\'usage': 'Utilisateur IDE JetBrains (IntelliJ, GoLand, PyCharm)',
            'Meilleur fit': 'Continue.dev ou Aider',
            'Pourquoi': 'Cline est uniquement VS Code',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: 'Arbre de décision : Lequel choisir',
        content:
          "**Cinq questions, dans l'ordre, amènent la plupart des lecteurs au bon choix.**",
        items: [
          "**1. Êtes-vous dans JetBrains, Vim ou travaillez-vous via SSH ?** → Si oui, vous êtes entre Continue.dev (JetBrains uniquement) et Aider (Vim/SSH). Passez à Q4. Sinon, continuez.",
          "**2. Voulez-vous un agent autonome qui édite plusieurs fichiers en une seule tâche ?** → Oui : Cline. Non : continuez.",
          "**3. Voulez-vous l'autocomplétion plus un panneau de chat intégré à l'IDE ?** → Oui : Continue.dev. Non : continuez.",
          "**4. Examinez-vous les modifications via `git diff` et voulez-vous que chaque édition soit commitée automatiquement ?** → Oui : Aider. Non : Continue.dev (par défaut).",
          "**5. Toujours pas sûr ?** → Commencez avec Continue.dev. C'est l'installation avec le moins de frottement, fonctionne dans l'éditeur que vous utilisez probablement déjà, et ajouter Aider plus tard pour le travail basé sur le terminal est simple. Cline est le plus perturbateur à ajouter à un flux de travail ; adoptez-le uniquement quand vous savez que vous voulez la boucle d'agent.",
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs courantes lors du choix d\'un outil de codage local',
        items: [
          "**Erreur 1 : choisir l'outil avant le modèle.** Un modèle d'affinité codage 30B dans l'un des trois outils surpasse un modèle d'usage général 7B dans le \"meilleur\" outil. Choisissez d'abord le modèle ; l'outil est la deuxième décision.",
          "**Erreur 2 : utiliser un seul modèle pour l'autocomplétion et le chat dans Continue.dev.** L'autocomplétion a besoin d'une latence sub-200ms ; le chat tolère les secondes. Exécutez un petit modèle d'autocomplétion et un plus grand modèle de chat dans la même configuration.",
          "**Erreur 3 : laisser l'approbation automatique de Cline complètement ouverte.** Une boucle de modèle avec `execute_command` auto-approuvée peut faire du vrai dégât. Gardez les outils destructeurs bloqués jusqu'à ce que vous fassiez confiance au modèle sur cette base de code.",
          "**Erreur 4 : utiliser Aider sur un modèle qui paraphrase le code.** Si le modèle ne peut pas reproduire les blocs SEARCH textuellement, chaque édition échoue. Utilisez un modèle d'affinité codage 22B+ (Qwen3-Coder, DeepSeek Coder, Codestral) pour les éditions de diff fiables.",
          "**Erreur 5 : changer d'outil pour corriger un problème de modèle.** Si les appels d'outils échouent dans Cline, ils vont probablement aussi échouer dans le mode Agent de Continue.dev pour la même raison. Diagnostiquez d'abord le modèle.",
          "**Erreur 6 : exécuter Cline contre un modèle de contexte 32K sur les tâches multi-fichiers.** La consommation de jetons brûle le budget au milieu de la tâche. Utilisez un modèle de contexte 128K pour le travail Cline non trivial.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Documentation Continue.dev](https://docs.continue.dev/) — guide d\'installation officiel, configuration du modèle, fournisseurs de contexte `@` et référence du mode Agent.',
          '[Dépôt GitHub Cline](https://github.com/cline/cline) — code source, schémas d\'outils, comportement du mode Plan/Act et architecture d\'extension.',
          '[Documentation Aider](https://aider.chat/) — référence CLI officielle, documentation du format d\'édition, mécaniques de carte de dépôt et défauts par modèle.',
          '[Bibliothèque de modèles Ollama](https://ollama.com/library) — modèles locaux disponibles et niveaux de quantisation référencés pour chaque outil.',
          '[Carte du modèle Qwen3-Coder](https://huggingface.co/Qwen/Qwen3-Coder-30B) — architecture, longueurs de contexte supportées et données d\'entraînement pour les appels d\'outils du modèle de codage recommandé.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Lequel est le meilleur pour les utilisateurs de VS Code ?',
            a: "N'importe lequel des trois fonctionne dans VS Code, mais Continue.dev et Cline sont les fits naturels. Continue.dev pour l'autocomplétion-First et le chat intégré à l'IDE ; Cline pour les tâches autonomes d'agent. Aider fonctionne parfaitement bien à partir du terminal intégré VS Code mais ne s'intègre pas avec la surface d'éditeur elle-même — son interface utilisateur est le terminal.",
          },
          {
            q: 'Cline supporte-t-il l\'IDE Cursor ?',
            a: 'Cursor est un fork VS Code et accepte les extensions VS Code. Cline installe et fonctionne dans Cursor ; la surface d\'extension est identique. L\'équipe Cline ne cible pas officiellement Cursor, donc les cas limites (API Cursor spécifiques, futures modifications de Cursor) ne sont pas garantis d\'être pris en charge, mais en pratique les utilisateurs ne signalent aucun problème.',
          },
          {
            q: 'Aider peut-il fonctionner sans Git ?',
            a: 'Oui, mais vous perdez la primitive de flux de travail qui le définit. Aider fonctionne dans les répertoires non-Git avec `--no-git` ; les éditions s\'appliquent toujours mais il n\'y a pas de commits, donc `/undo` est désactivé et le rollback revient à l\'historique de diff du modèle dans la session. Pour le travail non trivial, initialisez un dépôt Git — même un ignoré — avant de commencer.',
          },
          {
            q: 'Lequel a le meilleur refactoring multi-fichiers ?',
            a: 'Cline pour le travail multi-fichiers autonome — il planifie entre les fichiers, les lit au besoin et édite avec approbation par étape. Aider pour le travail multi-fichiers vérifiable où vous nommez explicitement les fichiers et voulez que chaque édition soit commitée. Continue.dev nécessite une conduite manuelle par fichier ; c\'est le plus faible des trois sur les refactorisations multi-fichiers.',
          },
          {
            q: 'Ces supports locaux Ollama out-of-the-box ?',
            a: 'Oui. Continue.dev a un fournisseur Ollama natif avec une configuration d\'un seul bloc. Cline liste Ollama dans la liste déroulante du fournisseur. Aider prend en charge Ollama via LiteLLM avec `--model ollama_chat/<model-name>`. Ollama est le backend local le moins laborieux pour les trois.',
          },
          {
            q: 'Lequel fonctionne le mieux avec Qwen3-Coder ?',
            a: 'Qwen3-Coder 30B est fiable sur les trois outils en mai 2026 — il gère le format d\'outil XML de Cline, les blocs de recherche-remplacement d\'Aider et les flux de travail d\'autocomplétion + chat de Continue.dev sans dégradation mesurable. Les variantes plus petites de Qwen3-Coder (classe 7B) font des appels d\'outils moins fiables et mieux dans le mode autocomplétion-only de Continue.dev que dans la boucle d\'agent de Cline.',
          },
          {
            q: 'Puis-je utiliser ces avec le mode local de Cursor ?',
            a: 'Les fonctionnalités intégrées de Cursor (Tab autocomplétion, Cmd+K) utilisent le routage du modèle de Cursor, pas ces outils. Pour utiliser un LLM local dans Cursor, installez Continue.dev ou Cline en tant qu\'extensions VS Code dans Cursor — ils apportent leur propre configuration de fournisseur indépendante de celle de Cursor. Aider fonctionne dans le terminal intégré de Cursor de la même façon que dans celui de VS Code.',
          },
          {
            q: 'Lequel est le plus stable pour les longues sessions ?',
            a: 'Aider, du fait d\'avoir aucun état en processus à corrompre — chaque édition est un commit, et un crash de session ne perd que la conversation, pas le travail. Continue.dev est stable sur les longues sessions IDE. Les longues sessions de Cline peuvent frapper la pression de la fenêtre de contexte sur les modèles plus petits ; redémarrer les tâches entre les grands refactorisations évite le problème.',
          },
          {
            q: 'Ces supportent-elles les messages système personnalisés ?',
            a: 'Tous les trois. Continue.dev : par-modèle `systemMessage` dans `config.json`. Cline : champ "Instructions personnalisées" dans les paramètres d\'extension. Aider : drapeau `--system-prompt` ou défauts par-modèle dans `.aider.conf.yml`. Les messages système personnalisés sont particulièrement utiles pour Cline (comportement du mode Plan de direction) et Aider (style de codage d\'application sur les commits).',
          },
          {
            q: 'Les équipes DevOps/SRE doivent-elles respecter les exigences du RGPD/CNIL pour les agents de codage locaux ?',
            a: 'Oui, en particulier si le code ou les logs liés aux LLMs locaux contiennent des données d\'utilisateurs de l\'UE. Le RGPD Article 28 exige que tous les outils de traitement des données (y compris les harnesses eux-mêmes) aient des Accords de traitement des données (DPA) avec les fournisseurs déployés. Les LLMs locaux eux-mêmes (Ollama, llama.cpp) ne stockent pas de données personnelles, mais les logs et répertoires de code qu\'ils indexent pourraient contenir des informations sensibles. Le CNIL recommande une documentation explicite sur le contrôle des données et la gouvernance. Pour les dépôts contenant du code client ou des propriétés intellectuelles, assurez-vous que le modèle local est déployé sur l\'infrastructure appartenant à l\'entreprise sans accès externe. Consultez votre équipe de conformité avant le déploiement en production dans une industrie régulée.',
          },
          {
            q: 'Quel agent de codage convient le mieux aux petites équipes et PME en France ?',
            a: 'Aider offre le meilleur rapport coût/efficacité pour les PME français : pas de dépendance aux licences IDE, entièrement basé sur le terminal (s\'adapte aux environnements de développeur existants), exigences matérielles minimales (fonctionne avec un modèle de contexte 32K), et l\'audit complet est dans git-log (soutient la conformité plus simple et la relecture de code). Continue.dev est un second choix pour les équipes fortement investies dans VS Code/JetBrains. Cline devient coûteux avec la consommation de jetons et nécessite un matériel plus important, mais s\'adapte aux flux de travail d\'équipe Agile-Heavy-Refactor. Les PME économisent les coûts via le déploiement on-premise avec les modèles locaux — la sélection des outils devrait suivre l\'infrastructure existante et les flux de travail de développeur, pas l\'effet de mode.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Remplacer GitHub Copilot avec un LLM local](/power-local-llm/replace-github-copilot-with-local-llm?lang=fr) — contexte de remplacement plus large, y compris le calcul des coûts et de la confidentialité.',
          '[Meilleurs modèles de codage locaux 2026](/power-local-llm/best-local-coding-models-2026?lang=fr) — le côté modèle de l\'équation : Qwen3-Coder vs DeepSeek vs Codestral sur les benchmarks réels.',
          '[Agents IA locaux avec MCP en 2026](/power-local-llm/local-ai-agents-with-mcp-2026?lang=fr) — pour les utilisateurs qui veulent des appels d\'outils étendus au-delà des outils ci-dessus.',
          '[Meilleurs modèles locaux pour les appels d\'outils 2026](/power-local-llm/best-local-models-tool-calling-2026?lang=fr) — profondeur technique adjacente sur la fiabilité des appels d\'outils.',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=fr) — la couche du moteur d\'inférence sous les trois outils.',
          '[Hub Power Local LLM](/power-local-llm) — bibliothèque de guide complète.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Continue.dev vs Cline vs Aider：ローカルコーディング AI 2026 比較',
    seoTitle: 'Continue.dev vs Cline vs Aider – ローカルコーディングエージェント比較 2026',
    intro:
      'Continue.dev、Cline、Aider は、2026 年にローカル LLM と適切に統合する 3 つの真摯なオープンソースコーディングツールです。これらは交換可能ではありません。各ツールは異なるワークフロープリミティブの周りに構築されています。オートコンプリート、自律エージェントループ、または Git ネイティブ diff です。ワークフローを最初に選択し、モデルを次に選択すると、統合の問題の 90% を回避できます。',
    metaDescription:
      '2026 年のローカルコーディングエージェントとして Continue.dev、Cline、Aider を比較。編集モデル、IDE 統合、キャンセル、コンテキスト戦略 — ワークフローで選択、ハイプで選択しない。',
    twitterDescription:
      '3 つのローカルコーディングツール、3 つの異なるワークフロープリミティブ。オートコンプリートのための Continue.dev、自律エージェントのための Cline、Git ネイティブ diff のための Aider。ワークフロー別の判定結果。',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Llama 3.3 70B',
      'Codestral 22B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      'ローカルコーディング LLM（Qwen3-Coder、DeepSeek Coder、Codestral、Llama 3.3）を実行していて、既存のエディタとプロジェクトワークフローに適したツールを選択する必要がある開発者。',
    readTime: '14 分で読む',
    educationalLevel: 'Advanced',
    primaryTerm: 'ローカルコーディングエージェント',
    targetKeywords: [
      'continue.dev vs cline',
      'cline vs aider',
      '最高のローカルコーディングエージェント 2026',
      'ローカル llm コーディングハーネス',
      'aider ローカル llm',
      'continue.dev ローカル llm',
    ],
    leadAnswerBlock:
      '**Continue.dev、Cline、Aider は同じローカルモデルで異なる問題を解決します。Continue.dev はオートコンプリートと IDE に統合されたチャットパネルの周りに構築されています。VS Code または JetBrains で編集中に入力するワークフローに最適です。Cline は自律的な VS Code エージェントで、複数のファイルを計画、編集、実行し、明示的な承認ゲートを備えています。マルチファイルのリファクタリングと探索的なバグハントに最適です。Aider はターミナルファースト、Git ネイティブ CLI で、すべての編集を外科的な検索と置換 diff を使用したコミットに変換します。リポジトリ全体の作業と、すべての変更を `git log` に反映させたいレビューアーに最適です。ワークフロープリミティブ（オートコンプリート vs エージェントループ vs Git diff）で選択してください。最も強力に見えるツールでは選択しないでください。**',
    quickAnswerTop: {
      ja: {
        question: '2026 年で最高のローカルコーディングエージェントは：Continue.dev、Cline、Aider のどれですか？',
        answer:
          'VS Code または JetBrains で一日の大半を過ごし、コードベースに到達できるオートコンプリートとチャットパネルが必要な場合は Continue.dev を選択してください。計画、複数のファイルを編集し、ステップ間で承認ゲートを使用してコマンドを実行する自律エージェントが必要な場合は Cline を選択してください。ターミナルで作業していて、すべての編集が個別にコミットされることを希望する場合は Aider を選択してください。3 つすべてはローカル LLM エンドポイント（Ollama、llama.cpp、LM Studio、vLLM）に対して完全にオフラインで動作します。正しい選択はワークフローの決定であり、品質のランキングではありません。',
        bullets: [
          'Continue.dev — オートコンプリート + IDE 統合チャット。エディタを離れずに段階的な編集を希望する VS Code および JetBrains ユーザーに最適です。',
          'Cline — Plan/Act モード、ツール呼び出し、ステップ単位のの承認を備えた自律エージェント。マルチファイルのリファクタリングとバグハントに最適です。',
          'Aider — Git ネイティブコミットと検索と置換の diff を備えたターミナル CLI。レビュー可能で undo に対応したリポジトリ規模の作業に最適です。',
          '3 つすべてがローカルの OpenAI 互換エンドポイントで動作します。Ollama が最も簡単なパス、llama.cpp と vLLM はプロバイダー設定でサポートされています。',
          'ワークフロー適合性は生のキャパシティを超えています。ターミナル最優先の開発者を Cline に強制するか、VS Code のみの開発者を Aider に強制すると、ツールが節約するより多くの時間がかかります。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要なポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: '比較表', anchor: '#comparison-table' },
      { label: 'どれを選ぶべきか', anchor: '#which-one' },
      { label: 'Continue.dev：詳細解説', anchor: '#continue-dev' },
      { label: 'Cline：詳細解説', anchor: '#cline' },
      { label: 'Aider：詳細解説', anchor: '#aider' },
      { label: '編集モデル：各ツールがコードをどう書くか', anchor: '#edit-model' },
      { label: '取り消しとロールバック', anchor: '#undo' },
      { label: 'コンテキストウィンドウ戦略', anchor: '#context' },
      { label: 'ツールコール信頼性', anchor: '#tool-calls' },
      { label: 'IDE 統合', anchor: '#ide-integration' },
      { label: 'ユースケース別ワークフロー適合性', anchor: '#workflow-fit' },
      { label: '判断フロー', anchor: '#decision-tree' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: 'ソース', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Continue.dev** はオートコンプリート優先：FIM（Fill-in-the-Middle）補完、IDE に統合されたチャットサイドバー、`@` コンテキストプロバイダー（コードベース、ファイル、ドキュメント、ターミナル）を備えた VS Code および JetBrains 拡張機能。ローカルモデル向けの最も近いオープンソース Copilot アナログです。',
          '**Cline** はエージェント優先：明示的な Plan および Act モード、ツール呼び出しループ（read_file、write_to_file、execute_command、browser_action）、各ステップでの承認ゲートを備えた VS Code 拡張機能。複数のファイルにわたって自律的に動作するように設計されています。',
          '**Aider** は Git 優先：tree-sitter リポジトリマップを維持し、検索と置換の diff ブロックを介してファイルを編集し、すべての変更をコミットするターミナル CLI。undo は `git reset` です。3 つの中で最も確認可能なワークフローです。',
          '3 つすべてが OpenAI 互換エンドポイントで話します。**Ollama** は最もスムーズなローカルバックエンド。**llama.cpp** と **vLLM** はプロバイダー設定またはLiteLLM などのプロキシを介して動作します。',
          '**ツール呼び出し信頼性**はモデルに依存し、ツールには依存しません。Qwen3-Coder 30B と DeepSeek Coder V3 は 2026 年 5 月の最も信頼できるツールコーラーです。より小さいモデル（7B クラス）は定期的に不正なツール呼び出しを出力し、どのツールでもラップされます。',
          '**コンテキストウィンドウ戦略**は大きく異なります：Continue.dev は埋め込みコードベースインデックスと `@` ピン留めされたコンテキストに依存し、Cline は完全なファイル内容を会話にストリーム配信し（高いトークン使用）、Aider は tree-sitter リポジトリマップと明示的な `/add` および `/drop` を使用して作業セットを小さく保ちます。',
          '単一の開発者の場合、**ワークフロー適合性**はベンチマークよりも結果をはるかに支配します。実際に開く ツールが選択すべきものです。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**Continue.dev** — オートコンプリート + チャット、VS Code および JetBrains、3 つの中で最も低摩擦のインストール。',
          '**Cline** — 承認ゲート付き自律エージェント、VS Code のみ、最高のキャパシティと最高のトークン使用。',
          '**Aider** — ターミナル CLI、Git ネイティブコミット、各編集は確認可能で Git を通じて undo 可能。',
          '3 つすべてが同じローカルバックエンドに対して実行されます。**Ollama** は最もスムーズなパス。**llama.cpp** と **vLLM** も OpenAI 互換設定を通じて動作します。',
          '**ツール呼び出し信頼性はモデル特性であり、ツール特性ではありません。** Qwen3-Coder 30B と DeepSeek Coder V3 は 3 つすべてで信頼できます。7B クラスモデルは 3 つすべてで失敗します。',
          '**コンテキスト予算：** Continue.dev と Aider は 32K コンテキストモデルで快適に機能します。Cline は非自明なマルチファイルタスクに **128K** が必要です。',
          '**エディタで選択：** JetBrains → Continue.dev または Aider。Vim/Neovim または SSH → Aider。オートコンプリート集約的な日の VS Code → Continue.dev。マルチファイルリファクタリングを使用した VS Code → Cline。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Continue.dev、Cline、Aider が 2026 年にどのように比較されるか',
        content:
          '3 つのツールはすべてオープンソースで、無料で実行でき、任意のローカル LLM エンドポイントで動作します。以下の構造的な違いは、どちらがワークフローに適しているかを決定します。',
        image: '/images/coding-agent-comparison-ja.svg',
        imageCaption: 'Continue.dev vs Cline vs Aider：Continue.devはVS Code/JetBrainsでの自動補完（32Kコンテキスト）、ClineはVS Codeでの自律型マルチファイルエージェント（128K推奨）、Aiderはターミナルのgitネイティブコミット（32Kコンテキスト）に最適。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue.dev は Copilot スタイルのオートコンプリート、Cline はファイル間を編集する自律エージェント、Aider はすべての編集を Git にコミットするターミナルツール。ワークフローで選択、ベンチマークで選択しない。',
          },
          {
            type: 'plain-terms',
            text: '3 つの無料ツール、同じローカルモデル、3 つのまったく異なるワークフロー。Continue.dev は Copilot のように感じます。エディタで提案を受け入れるには Tab キー。Cline は監督する後輩開発者のように感じます。各ステップを承認しながら計画と編集を行います。Aider はターミナルでペアプログラミングのように感じます。話すとコミットします。既存の作業方法に合うものを試してください。',
          },
        ],
        columns: ['機能', 'Continue.dev', 'Cline', 'Aider'],
        rows: [
          {
            '機能': 'プライマリサーフェス',
            'Continue.dev': 'VS Code および JetBrains 拡張機能',
            'Cline': 'VS Code 拡張機能',
            'Aider': 'ターミナル CLI（サイドの任意のエディタ）',
          },
          {
            '機能': 'ワークフロープリミティブ',
            'Continue.dev': 'オートコンプリート + IDE 統合チャット',
            'Cline': '承認ゲート付き自律エージェントループ',
            'Aider': 'Git ネイティブ diff 編集、各変更は 1 コミット',
          },
          {
            '機能': '編集モデル',
            'Continue.dev': 'インライン FIM + チャットから適用',
            'Cline': 'ツール呼び出し（read_file、write_to_file、replace_in_file）',
            'Aider': '検索と置換の diff ブロック。小さいファイルの場合は「全体」モード',
          },
          {
            '機能': 'マルチファイル編集',
            'Continue.dev': 'マニュアル：チャットは提案し、ファイルごとに適用',
            'Cline': 'ネイティブ：エージェントはファイル間を 1 つのタスクで編集',
            'Aider': 'ネイティブ：プロンプトでファイルを指定、編集は 1 コミットで着地',
          },
          {
            '機能': 'キャンセル / ロールバック',
            'Continue.dev': '適用された編集に対する VS Code undo スタック',
            'Cline': 'エージェント UI での編集ごとの復帰。ハードロールバック用 Git',
            'Aider': '`/undo` は最後のコミットを取り消します。完全な Git 履歴以下',
          },
          {
            '機能': 'ツール呼び出しプロトコル',
            'Continue.dev': 'Agent モードでの OpenAI ツール（function-calling）',
            'Cline': 'カスタム XML ツールブロック（厳密なスキーマ）',
            'Aider': 'ツール呼び出しなし。diff ブロックを出力するようモデルに促します',
          },
          {
            '機能': 'コードベースコンテキスト',
            'Continue.dev': 'ローカルインデックス（TF-IDF + embeddings）+ `@` プロバイダー',
            'Cline': '完全なファイル内容を会話にストリーム配信',
            'Aider': 'Tree-sitter リポジトリマップ + マニュアル `/add` および `/drop`',
          },
          {
            '機能': '承認 / セキュリティ',
            'Continue.dev': '各適用前に diff プレビュー',
            'Cline': 'ステップごとの承認。自動承認許可リストは設定可能',
            'Aider': 'ターミナルの差分プレビュー。コミットステップは自動',
          },
          {
            '機能': '最適な用途',
            'Continue.dev': '入力中の編集、IDE 統合チャット、オートコンプリート集約的な日',
            'Cline': 'マルチファイルリファクタリング、探索的なデバッグ、リポジトリタスク',
            'Aider': 'リポジトリスケールの確認可能な変更、ターミナル駆動ワークフロー',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: 'どれを選ぶべきか',
        content:
          '**適切なツールはエディタ、自律編集への許容度、変更をレビューする方法によって決まります。** このショートカットを使用してください。',
        image: '/images/coding-agent-which-one-ja.svg',
        imageCaption: 'ローカルコーディングツールの選び方：Continue.devは自動補完とIDE内チャット（VS Code＋JetBrains）、Clineはマルチファイルエージェントとコマンド実行、AiderはgitネイティブターミナルとSSH環境に最適。',
        columns: ['あなたの状況', '選択してください'],
        rows: [
          { 'あなたの状況': 'VS Code または JetBrains IDE で時間の大部分を過ごし、Copilot スタイルのオートコンプリートを希望しています', '選択してください': 'Continue.dev' },
          { 'あなたの状況': 'コードベースに手動ファイルアップロードなしでアクセスできるチャットサイドバーが必要です', '選択してください': 'Continue.dev' },
          { 'あなたの状況': '複数のファイル間のリファクタリングを計画し、各ステップの前に要求する エージェントが必要です', '選択してください': 'Cline' },
          { 'あなたの状況': 'モデルが自分のループの一部としてコマンドを実行し、ターミナル出力を読むことができるようにしたいです', '選択してください': 'Cline' },
          { 'あなたの状況': '`git diff` を通じて変更をレビューし、すべての編集を自動的にコミットすることを希望しています', '選択してください': 'Aider' },
          { 'あなたの状況': 'SSH 経由で作業しているか、ターミナル最優先の設定で作業しています', '選択してください': 'Aider' },
          { 'あなたの状況': '3 つのワークフローを時々必要とします。最初に最もシンプルなものを選択します', '選択してください': 'Continue.dev で始める。Git ネイティブ diff が必要な場合は Aider を追加します' },
        ],
      },
      continueDevDeep: {
        id: 'continue-dev',
        title: 'Continue.dev：オートコンプリート優先の選択',
        content:
          '**Continue.dev はローカルモデル用の GitHub Copilot に最も近いオープンソースアナログです。** プライマリサーフェスはエディタです：入力中に Tab 補完、コードベースを認識するチャットサイドバー。',
        items: [
          '**インストールパス：** VS Code Marketplace および JetBrains Marketplace。設定は `~/.continue/config.json`（または `config.yaml`）にあります。モデル定義、オートコンプリート設定、`@` コンテキストプロバイダーはすべてそこにあります。',
          '**ワークフロープリミティブ：** FIM（Fill-in-the-Middle）を通じたオートコンプリート、IDE に統合されたチャットサイドバー。チャットパネルは開いているファイルに直接編集を適用できます。Agent モードはマルチステップタスク用のツール呼び出しループを追加します。',
          '**ローカルモデル設定：** ネイティブ Ollama サポートは 1 つの設定ブロックです。llama.cpp、LM Studio、OpenAI 互換エンドポイントも動作します。標準的なパターンは、オートコンプリート用の小さいモデル（小さい、高速—Qwen2.5-Coder 1.5B クラス）とチャット用のより大きいモデル（Qwen3-Coder 30B、DeepSeek Coder V3）を実行することです。',
          '**コードベースコンテキスト：** ローカルインデックス（TF-IDF + embeddings）はプロジェクトフォルダにあります。`@codebase`、`@file`、`@folder`、`@docs`、`@terminal`、およびカスタムプロバイダーはチャットパネルからインデックスにアクセスします。',
          '**編集モデル：** チャットでは、モデルがコードブロックを提案します。「Apply」をクリックすると、開いているファイルに対して diff し、変更を受け入れるか拒否します。インライン編集（Cmd/Ctrl+I on selection）は選択を所定の場所で再度実行します。両方のフローが書き込む前に差分プレビューを表示します。',
          '**光る場所：** 既に使用している IDE でのキーボード駆動の編集、編集ごとの認知的オーバーヘッドが低い、高速フィードバックループ。インストールを忘れるツール。',
          '**短所：** マルチファイルのリファクタリングではファイルごとに チャットを操作する必要があります。長時間実行される自律タスクは固有のイディオムではありません。Agent モードは改善していますが、プロジェクトの重力中心ではありません。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Continue.dev 設定で 2 つのモデルを実行します：小さいオートコンプリートモデル（Qwen2.5-Coder 1.5B at Q4_K_M は約 1.5 GB VRAM が必要）と大きいチャットモデル（Qwen3-Coder 30B Q4_K_M、約 17 GB）。分割すると、オートコンプリートレイテンシが 200 ms 未満に保たれ、チャットパネルは重要でない質問に役立ちます。',
          },
        ],
      },
      clineDeep: {
        id: 'cline',
        title: 'Cline：自律エージェント選択',
        content:
          '**Cline はコーディングをエージェントタスクとして扱います。編集のシリーズではありません。** 目的を与えます。計画し、ファイルを読み、編集し、コマンドを実行し、各ステップの承認をリクエストします。',
        items: [
          '**インストールパス：** VS Code Marketplace（JetBrains バージョンはありません）。設定は拡張パネル内で GUI 駆動されます。プロバイダー、モデル、自動承認設定、カスタム指示。',
          '**ワークフロープリミティブ：** 明示的な Plan および Act モード付き自律エージェントループ。Plan モードはファイルを書き込まずにタスクについて理由を述べます。Act モードはツール呼び出しでプランを実行します。自動承認許可リストにツールを配置しない限り、ステップ間に承認ゲートが表示されます。',
          '**ローカルモデル設定：** OpenAI 互換エンドポイント。Ollama はワンクリック。llama.cpp または vLLM の場合、Cline を OpenAI 互換サーバー URL にポイントします。エージェントループはトークン集約的です。最低でも 32K コンテキストウィンドウを備えたモデルを予約します（Qwen3-Coder 30B at 32K、DeepSeek Coder V3 at 128K）。',
          '**ツールサーフェス：** `read_file`、`write_to_file`、`replace_in_file`、`execute_command`、`list_files`、`search_files`、`browser_action`、`ask_followup_question`、`attempt_completion`。セットは小さく、よく文書化されています。ツールスキーマはモデルが適切に出力する必要があるカスタム XML 形式を使用します。',
          '**編集モデル：** 数百行の下のファイルの場合、Cline はファイル全体を書き込みます。より大きいファイルの場合、明示的な検索ブロックと置換ブロック付き `replace_in_file` 操作を出力します。各書き込みの前にパネルに差分が表示されます。',
          '**光る場所：** マルチファイルのリファクタリング、「このテストが不安定なのはなぜ」の探索的なタスク、「3 つのレイヤーにタッチする機能を追加」ワークフロー。5 つ以上のファイル編集を含むタスクで最も強力です。',
          '**短所：** トークン消費が多い。完全なファイル内容は各読み取りで会話にストリーム配信されます。長いセッションは 32K コンテキストモデルを枯渇させます。非自明なタスクには 128K コンテキストモデルが推奨されます。ツール呼び出し信頼性は小さいモデル（7B クラス）で急激に低下します。不正な XML を出力し、ループは停止します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cline の自動承認許可リストは、有用なエージェントと退屈なエージェントの違いです。デフォルトで `read_file`、`list_files`、`search_files` を許可します。このコードベースのモデルを信頼するまで、`write_to_file`、`replace_in_file`、`execute_command` をゲートで保ちます。プロジェクトごとに厳しくまたは緩くします。',
          },
        ],
      },
      aiderDeep: {
        id: 'aider',
        title: 'Aider：Git ネイティブ選択',
        content:
          '**Aider は、会話ではなく、リポジトリを真実のソースとして扱う 3 つの中唯一のものです。** すべての編集は Git コミットとしてランディングします。undo は `git reset` です。チャット履歴は使い捨て。コミットログはアーティファクトです。',
        items: [
          '**インストールパス：** `pip install aider-chat` または `pipx install aider-chat`。CLI 呼び出し：`aider file1.py file2.py`（ファイルは会話にスコープされます）。`.aider.conf.yml` および フラグごとのオーバーライドを通じた設定。',
          '**ワークフロープリミティブ：** ターミナル最優先の会話編集。メッセージを入力します。Aider は差分を提案します。受け入れると、変更がコミットされます。`/add` および `/drop` がスコープ内のファイルを管理します。`/undo` は最後のコミットを取り消します。`/diff` は HEAD に対する最新の変更を表示します。',
          '**ローカルモデル設定：** LiteLLM を通じてアクセス可能な任意のモデル。Ollama、OpenAI 互換サーバー（llama.cpp、vLLM、LM Studio）、またはモデルプロバイダーに直接。`--model ollama_chat/qwen3-coder:30b` は典型的なローカル呼び出しです。',
          '**コードベースコンテキスト：** Tree-sitter リポジトリマップ。Aider はリポジトリを解析して定義（関数、クラス、メソッド）を作成し、スコープ内のファイルへの近接性によってランク付けし、サマリーをシステムプロンプトに含めます。マップは小さいリポジトリで約 1K–4K トークン、大きいリポジトリでそれ以上に適合します。`--map-tokens` がバジェットを制限します。',
          '**編集モデル：** 2 つの戦略。「Diff」モードはモデルが逐語的に生成する必要があります。検索と置換ブロック。外科的で低トークン、ただしモデルが検索ブロックを言い換えると壊れます。「全体」モードはファイル全体を書き直します。小さいファイルでは堅牢、大きいファイルでは費用がかかります。Aider は、モデルの既知の強さに合致するモデルごとのデフォルトを自動選択します。',
          '**光る場所：** コミットログですべてのステップを希望するリポジトリスケール変更。コードレビューが組み込まれたペアプログラミング（各コミットは個別のレビューユニット）。IDE 拡張が選択肢ではない SSH およびdevcontainer ワークフロー。',
          '**短所：** オートコンプリートなし。デフォルトではコード IDE プレビューなし（エディタの隣の VS Code ターミナルペーンで正常に動作しますが、統合されていません）。差分編集形式はモデル出力品質に敏感です。モデルが検索ブロックを再現する代わりに言い換える場合、編集は失敗し、ターミナルで再試行の試みが表示されます。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '`auto-commits: true` を設定します（デフォルト）し、機能の終わりで Aider のコミットを squash するために `git rebase -i` を使用します。作業中の細粒度コミットは `/undo` の価値があります。squash 最終コミットはチームがレビューするものです。Aider はこの正確なパターンを文書化します。',
          },
        ],
      },
      editModel: {
        id: 'edit-model',
        title: '編集モデル：各ツールがコードを書く方法',
        content:
          '**編集モデルは、各ツールがどのように感じるかの最大の単一の決定要因です。** 同じモデル、同じタスク。3 つの非常に異なるアーティファクト。',
        image: '/images/coding-agent-edit-model-ja.svg',
        imageCaption: '編集モデルの信頼性：7Bモデルでは、Continue.devが最も寛容で、Aiderは不一致ブロックを拒否、ClineはXML不正でループ停止。30B+コーディングモデル（Qwen3-Coder、DeepSeek Coder V3）では3つすべて信頼性あり。',
        items: [
          '**Continue.dev** — オートコンプリート用：カーソルの周りの FIM トークンがインライン補完を生成します。チャット駆動編集用：モデルはフェンスされたコードブロックを返します。「Apply」は開いているファイルに対して差分を実行し、受け入れ/拒否のために提示します。インライン編集（選択に Cmd/Ctrl+I）モデルはその場で選択を書き直し、差分がその場に表示されます。',
          '**Cline** — すべての編集はツール呼び出しです。新しいファイルまたは完全な書き直しの場合は `write_to_file`、明示的な `<<<<<<< SEARCH` / `>>>>>>> REPLACE` ブロックを使用した外科的変更の場合は `replace_in_file`。ツール呼び出しはスキーマに対して検証されます。不正な形式は「ツールエラー」を取得し、エージェントは表示して再試行します。会話は構造化されたツール呼び出しとツール結果です。自由散文ではありません。',
          '**Aider** — 検索と置換の差分ブロックは単純な散文で レンダリングされ、CLI で解析されます。モデルは統合差分フェンスされたブロックのようなものを出力します。Aider は それを適用してコミットします。SEARCH ブロックがファイルと正確に一致しない場合、編集は拒否され、Aider はモデルに再試行を要求します。',
          '**7B クラスモデルでの信頼性ランキング：** Continue.dev > Aider > Cline。Continue.dev の「Apply」は許容的です。小さい言い換えは差分アルゴリズムによって調整されます。Aider はミスマッチした検索ブロックで直線的に拒否しますが、失敗は大きく、回復可能です。Cline の XML ツール形式は小さいモデルで最も壊れやすい。不正なツール呼び出しはループを停止します。',
          '**30B+ ツール呼び出しモデル（Qwen3-Coder 30B、DeepSeek Coder V3）でのランキング：** 3 つすべてが収束します。モデルは一貫して正確な差分ブロックと形式が正しいツール呼び出しを出力する能力を備えています。',
          'ツールが包むもの に関係なくコード生成を改善する構造化プロンプト技術については、[AI でより良いコードを書く](/prompt-engineering/write-better-code-with-ai?lang=ja) を参照してください。',
        ],
      },
      undo: {
        id: 'undo',
        title: 'キャンセルとロールバック、および「エージェントは何をしましたか」という質問',
        content:
          '**undo は、必要な場合にのみ気付く派手ではない機能です。** 3 つのツールはすべて回復可能です。違いは、「これは間違いでした」と「間違いは消えました」の間の摩擦がどこにあるかです。',
        items: [
          '**Continue.dev** — 適用された編集は VS Code undo スタックに参加します。Cmd/Ctrl+Z はファイルごとに最新の適用を取り消します。マルチファイルのロールバックの場合、既存の Git ワークフローが重い荷物を担ぎます。ツール レベルの「このチェーン全体をキャンセルする」コマンドはありません。',
          '**Cline** — エージェント UI は各ステップをカードとして表示します。編集ごとの復帰はワンクリックです。カードはタスク期間を通じて永続化されます。タスクが終了した後、ロールバックは Git 経由です。Cline は自動コミットしないため、長いセッションの後、未コミットの変更のパイルが発生する可能性があります。',
          '**Aider** — `/undo` は最後のコミットを取り消します。さらに戻るには、繰り返します。すべての編集が個別のコミットであるため、粒度はステップバイステップの会話と一致します。`git reflog` は `/undo` が達成できないものすべてを回復します。',
          '**実用的な含意：** 20 分間エージェントが無人で実行されることに傾斜している場合、Aider はその後最も確認可能なアーティファクト（クリーンなコミットログ）を提供し、Cline はリアルタイムの最も判読可能な監査証跡（ステップごとのカード、コミットなし）を提供します。Continue.dev は全体を通じてキーボードに留まったと想定しています。',
        ],
        callouts: [
          {
            type: 'tip',
            text: 'Cline セッションの場合、重大でないタスクを開始する前に `git stash` を実行します。エージェントが脱線した場合、`git stash drop` はファイルごとに復帰するよりも高速にクリーンアップします。Aider の場合、既存のコミットログはセーフティネット。何も余計にしない。',
          },
        ],
      },
      context: {
        id: 'context',
        title: 'コンテキストウィンドウ戦略：トークンはどこへ行くか',
        content:
          '**3 つのツールはトークンを異なる方法で費やします。** これは、より小さいコンテキストウィンドウ（32K 以下）を備えたモデルと重要でないリポジトリがある場合、最も重要なバジェット決定です。',
        image: '/images/coding-agent-context-strategy-ja.svg',
        imageCaption: 'コンテキストウィンドウ戦略：Continue.devはオンデマンドインデックス検索（最小32K）、Clineは完全ファイルストリーミング（マルチファイルタスクには128K推奨）、Aiderはtree-sitter repoマップ＋/add（最小32K）を使用。',
        items: [
          '**Continue.dev** — プロジェクト上の TF-IDF プラス埋め込みインデックス。取得はオンデマンドです。現在のチャットメッセージに関連するチャンクのみがプロンプトに着地します。`@codebase` がセマンティック検索をトリガーします。`@file path/to/x.ts` はファイルをリテラル的に注入します。トークン使用はリポジトリのサイズではなく、ピンで留めたものにスケーリングされます。',
          '**Cline** — 完全なファイル内容は各読み取りで会話にストリーム配信されます。500 行のファイルは約 3K–5K トークンを消費します。8 つのファイルにタッチするエージェントタスクは、推理が発生する前に 25K–40K トークンを通して燃焼します。推奨最小：32K コンテキストウィンドウ。128K は快適です。',
          '**Aider** — Tree-sitter リポジトリマップ（デフォルト約 2K トークン、`--map-tokens` で設定可能）に加えて、明示的に `/add` たファイルの内容。マップは定義のみのサマリーで、完全なコードではないため、ファイル ストリーミングよりもはるかに良くリポジトリサイズにスケーリングされます。スコープ外になったら `/drop` ファイル。',
          '**32K コンテキストモデルの実用的な含意：** Continue.dev と Aider はほとんどのリポジトリで快適に機能します。Cline は 128K コンテキストモデルに切り替わらない限り、5–6 個を超えるファイルにタッチするタスクでコンテキスト圧力をヒットし始めます。',
          '**128K コンテキストモデルの実用的な含意：** 3 つすべてが快適です。Cline のより重い消費は重要になり、決定要因はワークフロープリミティブに戻ります。',
          'コンテキストウィンドウの詳細な説明と、モデルが中文脈で情報を失う理由については、[コンテキストウィンドウ説明：AI が忘れる理由](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=ja) を参照してください。',
        ],
      },
      toolCalls: {
        id: 'tool-calls',
        title: 'ツール呼び出し信頼性はモデル特性です',
        content:
          '**ツール呼び出しの失敗は通常、ツールに誤り帰属されます。** 実際には、モデルが不正な呼び出しを出力し、ツールが厳密に検証し、ループは停止します。異なるツールの同じモデルは同じエラーモードを生成します。',
        items: [
          '**これらのツール（2026 年 5 月）に対して信頼できるツール呼び出しをするモデル：** Qwen3-Coder 30B（Cline の XML 形式に対してクラス最高）、DeepSeek Coder V3（大きなコンテキスト、マルチステップのプランで強い）、Llama 3.3 70B（遅いが信頼できる）、Codestral 22B（高速で、より小さい計画展望）。',
          '**困難なモデル：** 7B 未満、13B 未満のほとんどの汎用モデルはコーディング微調整なし、下限での Q4_K_M より厳しい量子化。症状：Cline の不正な XML、Aider の言い換えられた SEARCH ブロック、Continue.dev の開いているファイルと一致しないフェンスコード。',
          '**修正は、「ツール を切り替える」ことはめったにありません。** 「モデルを切り替える」または「量子化を上げる」です。Qwen3-Coder 30B at Q4_K_M は 3 つのツールすべてで信頼できるツール呼び出しをします。Llama 3.2 7B at Q4 は 3 つすべてで失敗します。',
          '**Continue.dev の Agent モード**は標準的な OpenAI ツール呼び出し JSON を使用します。ほとんどのコーディング微調整モデルがこれをうまく処理します。',
          '**Cline の XML 形式**は最も要求が厳しい。モデルは正確な XML 構造を生成する必要があります。多様な形式でトレーニングされたコーディング微調整モデル（Qwen3-Coder、DeepSeek Coder）がこれを処理します。汎用モデルはしばしば処理しません。',
          '**Aider には ツール呼び出しが厳密にはない。** 散文から検索と置換ブロックを解析します。「信頼性」の質問は「モデルが SEARCH ブロックを逐語的に再現しているか」になります。ほとんどのコーディング微調整 22B+ モデルはこれをうまく処理します。',
        ],
        callouts: [
          {
            type: 'note',
            text: '新しいローカルモデルを評価する場合、実際に使用するツールでテストし、汎用的なツール呼び出しベンチマークではテストしません。関連するシグナルは、日常のワークフローが停止するかどうかです。公開ツール呼び出しベンチマークで 85% スコアするモデルは、Cline 固有の XML を確実に出力しない場合、Cline タスクの半分を失敗させることができます。',
          },
        ],
      },
      ideIntegration: {
        id: 'ide-integration',
        title: 'IDE 統合とエディタの範囲',
        content:
          '**エディタの範囲は、3 つのツールが最も明らかに分岐する場所です。** これは、ほとんどの読者が実際に気にかけている次元です。また、10 分でテストするのが最も簡単です。',
        items: [
          '**Continue.dev** — VS Code Marketplace および JetBrains Marketplace。JetBrains ビルドは本物です（IntelliJ、PyCharm、GoLand、WebStorm など）で、VS Code ビルドと オートコンプリートとチャット機能の同等性があります。Cursor ユーザーは VS Code 拡張機能をインストールできます。動作は VS Code と一致します。',
          '**Cline** — VS Code 拡張機能のみ。Cursor（VS Code フォーク）で動作しますが、正式にテストされていません。拡張表面は同一で、ほとんどのユーザーは問題を報告しません。JetBrains ユーザーは今のところ運がありません。',
          '**Aider** — ターミナル最優先。エディタの隣に座ることで任意のエディタと統合します。VS Code：統合ターミナルを開き、Aider を実行し、Aider がコミットしている間、エディタペーンで編集します。JetBrains：JetBrains ターミナルで同じパターン。Vim/Neovim：`:e!` と対になって Aider コミット後にリロードすると、これは生産的なフローです。Cursor：VS Code と同じです。',
          '**JetBrains ユーザーの実用的な含意：** Continue.dev または Aider がオプションだけです。',
          '**Vim/Neovim ユーザーの実用的な含意：** Aider は自然なフィット。Continue.dev には可変的な成熟度のコミュニティ Neovim 統合があります。公式なサーフェスは VS Code と JetBrains です。',
        ],
      },
      workflowFit: {
        id: 'workflow-fit',
        title: 'ユースケース別ワークフロー適合性',
        content:
          '**最も有用なフレームは「どんな日を過ごしているか」です。** ツールを日に合わせて、その逆ではありません。',
        image: '/images/coding-agent-workflow-fit-ja.svg',
        imageCaption: 'ワークフロー適合性：Continue.devは自動補完とIDE内Q&A、Clineはコマンドアクセス付きマルチファイルリファクタリングと探索的デバッグ、Aiderはgitネイティブ変更・SSH・Vim/Neovimワークフローに最適。',
        columns: ['ユースケース', '最適なフィット', '理由'],
        rows: [
          {
            'ユースケース': 'オートコンプリート付きの既存ファイルに関数を追加',
            '最適なフィット': 'Continue.dev',
            '理由': 'FIM オートコンプリートは自然なプリミティブです。チャットは不要です',
          },
          {
            'ユースケース': 'エディタを離れずに「この関数は何をしますか」と質問する',
            '最適なフィット': 'Continue.dev',
            '理由': '`@file` 付き IDE 内チャットは最も低摩擦のパスです',
          },
          {
            'ユースケース': '5+ ファイル全体で機能をリファクタリング',
            '最適なフィット': 'Cline',
            '理由': 'ステップごとの承認付きネイティブマルチファイル編集',
          },
          {
            'ユースケース': '「このテストがぐらぐらしている理由」の探索的なバグハント',
            '最適なフィット': 'Cline',
            '理由': 'エージェントループはコマンドを実行し、ログを読み、反復処理します',
          },
          {
            'ユースケース': 'リポジトリ全体の名前変更または API 移行（確認可能なコミット付き）',
            '最適なフィット': 'Aider',
            '理由': 'すべての編集はコミットになります。確認と undo は簡単です',
          },
          {
            'ユースケース': 'SSH 経由でサーバーに接続し、IDE なしで作業',
            '最適なフィット': 'Aider',
            '理由': 'デフォルトではターミナルのみ',
          },
          {
            'ユースケース': 'Vim または Neovim デイリードライバー',
            '最適なフィット': 'Aider',
            '理由': 'ターミナル駆動編集と自然にペア',
          },
          {
            'ユースケース': 'JetBrains IDE（IntelliJ、GoLand、PyCharm）ユーザー',
            '最適なフィット': 'Continue.dev または Aider',
            '理由': 'Cline は VS Code のみ',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: '判断フロー：どれを選ぶべきか',
        content: '**順序付きの 5 つの質問は、ほとんどの読者を正しい選択に導きます。**',
        items: [
          '**1. JetBrains、Vim、または SSH 経由で作業していますか？** → はい：Continue.dev（JetBrains のみ）と Aider（Vim/SSH）の間。Q4 にスキップしてください。いいえ：続ける。',
          '**2. 複数のファイルを 1 つのタスクで編集する自律エージェントを希望していますか？** → はい：Cline。いいえ：続ける。',
          '**3. オートコンプリートと IDE 統合チャットパネルを希望していますか？** → はい：Continue.dev。いいえ：続ける。',
          '**4. `git diff` を通じて変更をレビューし、すべての編集を自動的にコミットしますか？** → はい：Aider。いいえ：Continue.dev（デフォルト）。',
          '**5. まだ確実ではありませんか？** → Continue.dev で始めてください。最も低摩擦のインストール、おそらく既に使用しているエディタで動作し、後で端末ベースの作業用に Aider を追加するのは簡単です。Cline はワークフロー に追加するのが最も破壊的です。エージェントループを希望していることがわかるまで採用しないでください。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカルコーディングツールの選択におけるよくある間違い',
        items: [
          '**間違い 1：モデルの前にツールを選択する。** 「最高」のツールの 30B コーディング微調整モデルは、「最高」のツールの 7B 汎用モデルを凌駕します。最初にモデルを選択します。ツールは 2 番目の決定です。',
          '**間違い 2：Continue.dev でオートコンプリートとチャット用に単一のモデルを使用する。** オートコンプリートにはサブ 200ms レイテンシが必要です。チャットは秒を許容します。同じ設定で小さいオートコンプリートモデルと大きいチャットモデルを実行します。',
          '**間違い 3：Cline 自動承認を完全に開く。** `execute_command` オートアプルーブ付きモデルループは実害を与える可能性があります。このコードベースのモデルを信頼するまで、破壊的なツールをゲートで保ちます。',
          '**間違い 4：コードを言い換えるモデルで Aider を使用する。** モデルが SEARCH ブロックを逐語的に再現できない場合、すべての編集が失敗します。コーディング微調整 22B+（Qwen3-Coder、DeepSeek Coder、Codestral）を使用して信頼できる差分編集を行います。',
          '**間違い 5：モデル問題を修正するツールを切り替える。** Cline でツール呼び出しが失敗した場合、同じ理由で Continue.dev の Agent モードでもおそらく失敗します。最初にモデルを診断します。',
          '**間違い 6：マルチファイルタスクで 32K コンテキストモデルに対して Cline を実行する。** トークン消費が タスク中盤でバジェットを焼きます。重要でない Cline 作業には 128K コンテキストモデルを使用します。',
        ],
      },
      sources: {
        id: 'sources',
        title: 'ソース',
        items: [
          '[Continue.dev ドキュメント](https://docs.continue.dev/) — 公式セットアップガイド、モデル設定、`@` コンテキストプロバイダー、Agent モード参照。',
          '[Cline GitHub リポジトリ](https://github.com/cline/cline) — ソースコード、ツールスキーマ、Plan/Act モード動作、拡張アーキテクチャ。',
          '[Aider ドキュメント](https://aider.chat/) — 公式 CLI リファレンス、編集形式ドキュメント、リポジトリマップメカニクス、モデルごとの デフォルト。',
          '[Ollama モデルライブラリ](https://ollama.com/library) — 各ツール参照の利用可能なローカルモデルと量子化レベル。',
          '[Qwen3-Coder モデルカード](https://huggingface.co/Qwen/Qwen3-Coder-30B) — アーキテクチャ、サポートされるコンテキスト長、推奨コーディングモデルのツール呼び出しトレーニングデータ。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'VS Code ユーザーに最適なのはどれですか？',
            a: '3 つすべてが VS Code で動作しますが、Continue.dev と Cline が自然なフィットです。オートコンプリート優先と IDE 統合チャット用の Continue.dev。自律エージェントタスク用の Cline。Aider は VS Code 統合ターミナルから完璧に動作しますが、エディタサーフェスと統合されていません。その UI はターミナルです。',
          },
          {
            q: 'Cline は Cursor IDE をサポートしていますか？',
            a: 'Cursor は VS Code フォークで、VS Code 拡張機能を受け入れます。Cline は Cursor にインストールされて実行されます。拡張表面は同じです。Cline チームは公式に Cursor をターゲットとしていないため、エッジケース（特定の Cursor API、将来の Cursor の変更）は サポートの保証がありませんが、実際には、ユーザーは問題を報告しません。',
          },
          {
            q: 'Aider は Git なしで動作できますか？',
            a: 'はい、ただしそれを定義するワークフロープリミティブを失います。Aider は `--no-git` で非 Git ディレクトリで実行されます。編集は適用されますがコミットがないため、`/undo` は無効になり、ロールバックはセッション内のモデル diff 履歴に戻ります。重要でない作業の場合、開始前に Git リポジトリ（無視されたものでも）を初期化します。',
          },
          {
            q: 'マルチファイルリファクタリングで最高のものはどれですか？',
            a: '自律マルチファイル作業の場合 Cline。ファイルをまたいで計画し、必要に応じて読み込み、ステップごとの承認で編集します。確認可能なマルチファイル作業の場合 Aider。ファイルを明示的に指定し、各編集がコミットされることを希望しています。Continue.dev はファイルごとの手動操作を必要とします。マルチファイルのリファクタリングの最も弱い。',
          },
          {
            q: 'これら はローカル Ollama を標準搭載でサポートしていますか？',
            a: 'はい。Continue.dev は単一ブロック設定を備えたネイティブ Ollama プロバイダーを備えています。Cline はプロバイダードロップダウンに Ollama をリストしています。Aider は LiteLLM 経由で Ollama をサポートし、`--model ollama_chat/<model-name>` を使用します。Ollama は 3 つすべての最低摩擦のローカルバックエンドです。',
          },
          {
            q: 'Qwen3-Coder で最高のものはどれですか？',
            a: 'Qwen3-Coder 30B は 2026 年 5 月の 3 つのツール全体で信頼できます。Cline の XML ツール形式、Aider の検索と置換ブロック、Continue.dev のオートコンプリート + チャットワークフローを測定可能な劣化なく処理します。より小さい Qwen3-Coder バリアント（7B クラス）はツール呼び出しの信頼性が低く、Cline のエージェントループよりも Continue.dev のオートコンプリートのみモードで機能します。',
          },
          {
            q: 'Cursor のローカルモードでこれらを使用できますか？',
            a: 'Cursor の組み込み機能（Tab オートコンプリート、Cmd+K）は Cursor 独自のモデルルーティングを使用し、これらのツールではありません。Cursor でローカル LLM を使用するには、Cursor 内で VS Code 拡張機能として Continue.dev または Cline をインストールしてください。独自のプロバイダー設定をもたらし、Cursor の独立しています。Aider は Cursor の統合ターミナル内で、VS Code のターミナル内と同じ方法で実行されます。',
          },
          {
            q: '長いセッションで最も安定しているのはどれですか？',
            a: '破損する状態がないため Aider。すべての編集はコミット、セッションクラッシュはチャットのみを失い、作業は失われません。Continue.dev は長い IDE セッション全体で安定しています。Cline の長いセッションは、より小さいモデルのコンテキストウィンドウ圧力にぶつかる可能性があります。大きなリファクタリング間のタスクの再起動はこれを回避します。',
          },
          {
            q: 'これらはカスタムシステムプロンプトをサポートしていますか？',
            a: '3 つすべて。Continue.dev：`config.json` にモデルごとの `systemMessage`。Cline：拡張設定の「カスタム指示」フィールド。Aider：`--system-prompt` フラグまたは `.aider.conf.yml` のモデルごとのデフォルト。カスタムプロンプトは、Cline（Plan モード動作のステアリング）と Aider（コミット全体のコーディング スタイル適用）に特に役立ちます。',
          },
          {
            q: '日本の企業がローカルコーディングエージェントを導入する際、何を考慮すべきですか？',
            a: 'オンプレミス配置、データセキュリティ、ローカルモデルが関わるため、企業は METI ガイドラインに注意する必要があります。日本のコンテキストでは、Aider はターミナル最優先であるため、既存のインフラストラクチャに最初に統合する方が簡単です。Continue.dev は VS Code/JetBrains に既に投資している場合の選択肢です。Cline は自律的なリファクタリングワークフローに強力ですが、より高い計算コストです。データが組織内に留まり、外部 API に漏れないようにしてください。',
          },
          {
            q: 'Qwen3-Coder と DeepSeek Coder の日本での対応状況は？',
            a: 'Qwen3-Coder と DeepSeek Coder は両方とも Ollama、llama.cpp、vLLM を通じてローカルで利用可能です。Hugging Face から直接ダウンロード可能。日本の開発者コミュニティでの使用は増加していますが、Qwen3-Coder が信頼できるツール呼び出しでより高くランク付けされています。どちらも 30B バリアント、特に Q4_K_M 量子化が確実です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[GitHub Copilot をローカル LLM に置き換える](/power-local-llm/replace-github-copilot-with-local-llm?lang=ja) — より広い交換コンテキスト、コストとプライバシー数学を含む。',
          '[2026 年ベストローカルコーディングモデル](/power-local-llm/best-local-coding-models-2026?lang=ja) — 方程式のモデル側：実際のベンチマーク上の Qwen3-Coder vs DeepSeek vs Codestral。',
          '[2026 年 MCP を備えたローカル AI エージェント](/power-local-llm/local-ai-agents-with-mcp-2026?lang=ja) — 上記のツールを超えた拡張ツール呼び出しを希望するユーザー向け。',
          '[2026 年ツール呼び出しのベストローカルモデル](/power-local-llm/best-local-models-tool-calling-2026?lang=ja) — ツール呼び出し信頼性に関する隣接する技術的深さ。',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=ja) — 3 つのツール下の推論エンジン層。',
          '[Power Local LLM ハブ](/power-local-llm) — 完全なガイドライブラリ。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Coding Assistants',
    title: 'Continue.dev vs Cline vs Aider：2026 年本地编码代理对比',
    seoTitle: 'Continue.dev vs Cline vs Aider – 2026 年本地编码代理对比',
    intro:
      'Continue.dev、Cline 和 Aider 是三个认真的开源编码工具，可以与本地 LLM 完美集成。它们不可互换：每一个都围绕不同的工作流原语构建 — 自动完成、自主代理循环或 Git 原生差异。首先按工作流选择，其次按模型选择，您可以避免 90% 的集成问题。',
    metaDescription:
      '2026 年本地编码代理对比：Continue.dev、Cline、Aider。编辑模型、IDE 集成、撤销和上下文策略 — 按工作流选择，不按效能选择。',
    twitterDescription:
      '三个本地编码工具，三个不同的工作流原语。Continue.dev 用于自动完成，Cline 用于自主代理，Aider 用于 Git 原生差异。按工作流的判决在内部。',
    current_models_mentioned: [
      'Qwen3-Coder 30B',
      'Qwen3-Coder 7B',
      'DeepSeek Coder V3',
      'Llama 3.3 70B',
      'Codestral 22B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 4070 12 GB',
      'NVIDIA RTX 4090 24 GB',
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
    ],
    audience:
      '运行本地编码 LLM（Qwen3-Coder、DeepSeek Coder、Codestral、Llama 3.3）的开发者，需要选择适合其现有编辑器和项目工作流的工具。',
    readTime: '14 分钟阅读',
    educationalLevel: 'Advanced',
    primaryTerm: '本地编码代理',
    targetKeywords: [
      'continue.dev vs cline',
      'cline vs aider',
      '2026 年最佳本地编码代理',
      '本地 llm 编码工具',
      'aider 本地 llm',
      'continue.dev 本地 llm',
    ],
    leadAnswerBlock:
      '**Continue.dev、Cline 和 Aider 用同一个本地模型解决不同的问题。Continue.dev 围绕自动完成和 IDE 集成的聊天面板构建 — 最适合在 VS Code 或 JetBrains 中进行"输入时编辑"工作流。Cline 是一个自主的 VS Code 代理，可以计划、编辑多个文件并执行命令，具有明确的批准门控 — 最适合多文件重构和探索性的错误追踪。Aider 是一个以终端为先、Git 原生的 CLI，将每次编辑转换为具有外科级搜索和替换差异的提交 — 最适合全仓库工作和希望每次更改都反映在 `git log` 中的审阅者。按工作流原语（自动完成 vs 代理循环 vs Git 差异）选择，而不是按哪个工具听起来最强大。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年最好的本地编码代理是哪个：Continue.dev、Cline 还是 Aider？',
        answer:
          '如果您大部分时间都在 VS Code 或 JetBrains 中工作，并且想要自动完成加上可以访问您代码库的聊天面板，请选择 Continue.dev。如果您想要一个自主代理来计划、编辑多个文件并在步骤之间执行带批准门的命令，请选择 Cline — 最适合重构和探索性的错误追踪。如果您在终端中工作，并且希望每次编辑都作为单独的可审核的 git 提交进行，请选择 Aider。三个都可以完全离线对任何本地 LLM 端点（Ollama、llama.cpp、LM Studio、vLLM）工作。正确的选择是一个工作流决定，不是质量排名。',
        bullets: [
          'Continue.dev — 自动完成 + IDE 集成聊天。最适合想要在不离开编辑器的情况下进行增量编辑的 VS Code 和 JetBrains 用户。',
          'Cline — 具有计划/行动模式、工具调用和每步批准的自主代理。最适合多文件重构和错误追踪。',
          'Aider — 具有 Git 原生提交和搜索-替换差异的终端 CLI。最适合可审核和可撤销的全仓库工作。',
          '三个都适用于任何 OpenAI 兼容的本地端点 — Ollama 是最简单的路径，llama.cpp 和 vLLM 通过提供商配置支持。',
          '工作流适配性优于原始能力。强迫一个终端优先的开发者进入 Cline（或一个仅 VS Code 的开发者进入 Aider）花费的时间比工具能节省的更多。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '关键要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: '比较表', anchor: '#comparison-table' },
      { label: '应该选择哪一个', anchor: '#which-one' },
      { label: 'Continue.dev：深度解析', anchor: '#continue-dev' },
      { label: 'Cline：深度解析', anchor: '#cline' },
      { label: 'Aider：深度解析', anchor: '#aider' },
      { label: '编辑模型：每个工具如何编写代码', anchor: '#edit-model' },
      { label: '撤销和回滚', anchor: '#undo' },
      { label: '上下文窗口策略', anchor: '#context' },
      { label: '工具调用可靠性', anchor: '#tool-calls' },
      { label: 'IDE 集成', anchor: '#ide-integration' },
      { label: '按用例划分的工作流适合度', anchor: '#workflow-fit' },
      { label: '决策树', anchor: '#decision-tree' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '资源', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '相关阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Continue.dev** 是自动完成优先：具有 FIM（Fill-in-the-Middle）补全、IDE 集成的聊天侧边栏和 `@` 上下文提供者（代码库、文件、文档、终端）的 VS Code 和 JetBrains 扩展。本地模型的最接近的开源 Copilot 类似物。',
          '**Cline** 是代理优先：具有明确的计划和行动模式、工具调用循环（read_file、write_to_file、execute_command、browser_action）和每个步骤的批准门的 VS Code 扩展。设计为在多个文件中自主运行。',
          '**Aider** 是 Git 优先：一个终端 CLI，维护 tree-sitter 仓库地图，通过搜索和替换差异块编辑文件，并提交每项更改。撤销是 `git reset` — 三个中最可审核的工作流。',
          '三个都讲 OpenAI 兼容端点。**Ollama** 是最流畅的本地后端；**llama.cpp** 和 **vLLM** 通过提供商设置或像 LiteLLM 这样的代理工作。',
          '**工具调用可靠性**取决于模型，而不是工具。Qwen3-Coder 30B 和 DeepSeek Coder V3 是 2026 年 5 月最可靠的工具调用者；较小的模型（7B 类）无论哪个工具包装它们都会定期发出格式错误的工具调用。',
          '**上下文窗口策略**差异很大：Continue.dev 依靠嵌入式代码库索引和 `@` 固定的上下文，Cline 将完整文件内容流传输到对话中（高令牌使用），Aider 使用 tree-sitter 仓库地图加上显式的 `/add` 和 `/drop` 以保持工作集较小。',
          '对于单个开发者，**工作流适应**比任何基准更主导结果。您实际保持打开的工具是您应该选择的工具。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**Continue.dev** — 自动完成 + 聊天，VS Code 和 JetBrains，三个中最低摩擦的安装。',
          '**Cline** — 具有批准门的自主代理，仅 VS Code，最高能力和最高令牌使用。',
          '**Aider** — 终端 CLI，Git 原生提交，每次编辑都可通过 Git 审核和撤销。',
          '三个都对相同的本地后端运行 — **Ollama** 是最流畅的路径；**llama.cpp** 和 **vLLM** 也通过 OpenAI 兼容配置工作。',
          '**工具调用可靠性是一个模型属性，不是工具属性。** Qwen3-Coder 30B 和 DeepSeek Coder V3 在三个中都可靠；7B 类模型在三个中都失败。',
          '**上下文预算：** Continue.dev 和 Aider 在 32K 上下文模型上舒适地工作；Cline 对于非平凡的多文件任务需要 **128K**。',
          '**按编辑器选择：** JetBrains → Continue.dev 或 Aider。Vim/Neovim 或 SSH → Aider。自动完成繁重的日子的 VS Code → Continue.dev。多文件重构的 VS Code → Cline。',
        ],
      },
      comparisonTable: {
        id: 'comparison-table',
        title: 'Continue.dev、Cline 和 Aider 2026 年的比较',
        content:
          '三个工具都是开源的，免费运行，可以与任何本地 LLM 端点一起使用。下面的结构差异决定了哪一个适合您的工作流。',
        image: '/images/coding-agent-comparison-zh.svg',
        imageCaption: 'Continue.dev vs Cline vs Aider：Continue.dev适合VS Code/JetBrains自动补全（32K上下文），Cline适合VS Code自主多文件智能体（推荐128K），Aider适合终端git原生提交（32K上下文）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Continue.dev 是 Copilot 风格的自动完成，Cline 是跨文件编辑的自主代理，Aider 是将每次编辑提交到 Git 的终端工具 — 按工作流选择，不按基准选择。',
          },
          {
            type: 'plain-terms',
            text: '三个免费工具，相同的本地模型，三个完全不同的工作流。Continue.dev 感觉像 Copilot — 在您的编辑器中按 Tab 接受建议。Cline 感觉像一个您监督的初级开发者 — 在您批准每个步骤时跨文件计划和编辑。Aider 感觉像在终端中进行对工作 — 您说话，它提交。尝试与您已有的工作方式相匹配的那个。',
          },
        ],
        columns: ['功能', 'Continue.dev', 'Cline', 'Aider'],
        rows: [
          {
            '功能': '主要表面',
            'Continue.dev': 'VS Code 和 JetBrains 扩展',
            'Cline': 'VS Code 扩展',
            'Aider': '终端 CLI（任何编辑器在旁边）',
          },
          {
            '功能': '工作流原语',
            'Continue.dev': '自动完成 + IDE 集成聊天',
            'Cline': '具有批准门的自主代理循环',
            'Aider': 'Git 原生差异编辑，每次更改一个提交',
          },
          {
            '功能': '编辑模型',
            'Continue.dev': '内联 FIM + 从聊天应用到文件',
            'Cline': '工具调用（read_file、write_to_file、replace_in_file）',
            'Aider': '搜索和替换差异块；小文件的"整体"模式',
          },
          {
            '功能': '多文件编辑',
            'Continue.dev': '手动：聊天建议，您按文件应用',
            'Cline': '原生：代理在一个任务中跨文件编辑',
            'Aider': '原生：在提示中命名文件，编辑在一个提交中着陆',
          },
          {
            '功能': '撤销 / 回滚',
            'Continue.dev': '应用的编辑上的 VS Code 撤销堆栈',
            'Cline': '代理 UI 中每次编辑的回复；硬回滚使用 Git',
            'Aider': '`/undo` 取消最后一次提交；完整的 git 历史下方',
          },
          {
            '功能': '工具调用协议',
            'Continue.dev': 'Agent 模式下的 OpenAI 工具（function-calling）',
            'Cline': '具有严格模式的自定义 XML 工具块',
            'Aider': '没有工具调用；提示模型发出差异块',
          },
          {
            '功能': '代码库上下文',
            'Continue.dev': '本地索引（TF-IDF + embeddings）+ `@` 提供者',
            'Cline': '将完整文件内容流传输到对话中',
            'Aider': 'Tree-sitter 仓库地图 + 手动 `/add` 和 `/drop`',
          },
          {
            '功能': '批准 / 安全',
            'Continue.dev': '每次应用前的差异预览',
            'Cline': '每步批准；自动批准允许列表可配置',
            'Aider': '终端中的差异预览；提交步骤是自动的',
          },
          {
            '功能': '最适合',
            'Continue.dev': '输入时编辑、IDE 集成聊天、自动完成繁重的日子',
            'Cline': '多文件重构、探索性调试、仓库任务',
            'Aider': '可审核的全仓库更改、终端驱动的工作流',
          },
        ],
      },
      whichOne: {
        id: 'which-one',
        title: '应该选择哪一个',
        content:
          '**正确的工具由您的编辑器、对自主编辑的容限和如何审核更改决定。** 使用此快捷方式。',
        image: '/images/coding-agent-which-one-zh.svg',
        imageCaption: '选择哪个本地编程工具：Continue.dev适合自动补全和IDE内聊天（VS Code+JetBrains），Cline适合多文件智能体循环和命令执行，Aider适合git原生终端工作流和SSH环境。',
        columns: ['您的情况', '选择'],
        rows: [
          { '您的情况': '我大部分时间都在 VS Code 或 JetBrains IDE 中工作，想要 Copilot 风格的自动完成', '选择': 'Continue.dev' },
          { '您的情况': '我想要一个聊天侧边栏可以访问我的代码库，无需手动文件上传', '选择': 'Continue.dev' },
          { '您的情况': '我想要一个代理来计划跨多个文件的重构并在每个步骤前询问', '选择': 'Cline' },
          { '您的情况': '我想要模型能够执行命令并读取终端输出作为其循环的一部分', '选择': 'Cline' },
          { '您的情况': '我通过 `git diff` 审核更改并希望所有编辑都自动提交', '选择': 'Aider' },
          { '您的情况': '我通过 SSH 工作或在以终端为先的设置中工作', '选择': 'Aider' },
          { '您的情况': '我偶尔需要三个工作流 — 首先选择最简单的', '选择': '从 Continue.dev 开始；当您需要 Git 原生差异时添加 Aider' },
        ],
      },
      continueDevDeep: {
        id: 'continue-dev',
        title: 'Continue.dev：自动完成优先的选择',
        content:
          '**Continue.dev 是本地模型的最接近的开源 GitHub Copilot 类似物。** 主要表面是编辑器：打字时的 Tab 补全加上懂代码库的聊天侧边栏。',
        items: [
          '**安装路径：** VS Code Marketplace 和 JetBrains Marketplace。配置在 `~/.continue/config.json`（或 `config.yaml`）中；模型定义、自动完成设置和 `@` 上下文提供者都在那里。',
          '**工作流原语：** 通过 FIM（Fill-in-the-Middle）的自动完成加上 IDE 集成的聊天侧边栏。聊天面板可以直接将编辑应用到打开的文件；Agent 模式为多步任务添加工具调用循环。',
          '**本地模型设置：** 原生 Ollama 支持是一个配置块。llama.cpp、LM Studio 和任何 OpenAI 兼容端点也可以工作。标准模式是运行用于自动完成的小型模型（小、快 — Qwen2.5-Coder 1.5B 类）和用于聊天的较大型模型（Qwen3-Coder 30B、DeepSeek Coder V3）。',
          '**代码库上下文：** 本地索引（TF-IDF + embeddings）在您的项目文件夹中。`@codebase`、`@file`、`@folder`、`@docs`、`@terminal` 和自定义提供者从聊天面板访问索引。',
          '**编辑模型：** 在聊天中，模型建议一个代码块；点击"应用"就会对打开的文件进行差异并显示它供您接受或拒绝。内联编辑（选择上的 Cmd/Ctrl+I）在原地重写选择。两个流都在任何写入前显示差异预览。',
          '**发光处：** 您已在使用的 IDE 中键盘驱动的编辑、每次编辑的认知开销低、快速反馈循环。您忘记安装的工具。',
          '**不足处：** 多文件重构需要您按文件驱动聊天。长期运行的自主任务不是其原生习语 — Agent 模式在改进，但不是项目的重力中心。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '在您的 Continue.dev 配置中运行两个模型：小型自动完成模型（Qwen2.5-Coder 1.5B at Q4_K_M 需要约 1.5 GB VRAM）和较大的聊天模型（Qwen3-Coder 30B Q4_K_M，约 17 GB）。分割使自动完成延迟保持在 200 毫秒以下，同时保持聊天面板对非平凡问题有用。',
          },
        ],
      },
      clineDeep: {
        id: 'cline',
        title: 'Cline：自主代理选择',
        content:
          '**Cline 将编码视为代理任务，而不是一系列编辑。** 您给它一个目标；它计划、读取文件、编辑它们、执行命令并要求您批准每个步骤。',
        items: [
          '**安装路径：** VS Code Marketplace（没有 JetBrains 版本）。配置在扩展面板内由 GUI 驱动 — 提供者、模型、自动批准设置、自定义指令。',
          '**工作流原语：** 具有明确的计划和行动模式的自主代理循环。计划模式推理任务而不编写文件；行动模式用工具调用执行计划。除非您将工具放在自动批准允许列表上，否则步骤之间会出现批准门。',
          '**本地模型设置：** 任何 OpenAI 兼容端点。Ollama 是一键。对于 llama.cpp 或 vLLM，将 Cline 指向 OpenAI 兼容服务器 URL。代理循环是令牌密集的 — 预留至少 32K 上下文窗口的模型（Qwen3-Coder 30B at 32K、DeepSeek Coder V3 at 128K）。',
          '**工具表面：** `read_file`、`write_to_file`、`replace_in_file`、`execute_command`、`list_files`、`search_files`、`browser_action`、`ask_followup_question`、`attempt_completion`。集合很小，文档齐全；工具模式使用模型必须正确输出的自定义 XML 格式。',
          '**编辑模型：** 对于数百行以下的文件，Cline 编写整个文件。对于较大的文件，它发出具有显式搜索和替换块的 `replace_in_file` 操作。差异在每次写入前显示在面板中。',
          '**发光处：** 多文件重构、"为什么这个测试不稳定"的探索性任务、"添加接触三个层的功能"工作流。三个中对 5+ 文件编辑任务最强大。',
          '**不足处：** 令牌消费很高 — 完整文件内容在每次读取时流传输到对话中。长期会话耗尽 32K 上下文模型；对于非平凡任务建议使用 128K 上下文模型。工具调用可靠性在较小型号（7B 类）上严重退化 — 它们发出格式错误的 XML 并且循环停止。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Cline 的自动批准允许列表是有用的代理和繁琐代理的区别。默认允许 `read_file`、`list_files` 和 `search_files`；在您信任此代码库上的模型之前保持 `write_to_file`、`replace_in_file` 和 `execute_command` 门控。按项目收紧或放松。',
          },
        ],
      },
      aiderDeep: {
        id: 'aider',
        title: 'Aider：Git 原生选择',
        content:
          '**Aider 是三个中唯一将您的仓库视为真实来源而不是对话的。** 每次编辑都作为 Git 提交着陆。撤销是 `git reset`。聊天历史是一次性的；提交日志是工件。',
        items: [
          '**安装路径：** `pip install aider-chat` 或 `pipx install aider-chat`。CLI 调用：`aider file1.py file2.py`（文件的范围限于对话）。通过 `.aider.conf.yml` 和每个标志的覆盖进行配置。',
          '**工作流原语：** 以终端为先的对话编辑。输入提示；Aider 建议差异；如果您接受，更改将被提交。`/add` 和 `/drop` 管理范围内的文件。`/undo` 取消最后一次提交。`/diff` 显示对 HEAD 的最新更改。',
          '**本地模型设置：** 通过 LiteLLM 可访问的任何模型 — Ollama、OpenAI 兼容服务器（llama.cpp、vLLM、LM Studio）或直接模型提供商。`--model ollama_chat/qwen3-coder:30b` 是典型的本地调用。',
          '**代码库上下文：** Tree-sitter 仓库地图。Aider 解析您的仓库获取定义（函数、类、方法），通过与范围内文件的接近度对其进行排名，并将摘要包含在系统提示中。地图适合小型仓库约 1K–4K 令牌，大型仓库更多 — `--map-tokens` 限制预算。',
          '**编辑模型：** 两种策略。"差异"模式发出模型必须逐字生成的搜索和替换块。外科，低令牌，但如果模型改述搜索块会破裂。"整体"模式重写整个文件 — 小文件上健壮，大文件上昂贵。Aider 自动选择每个模型的默认值与模型的已知优势相匹配。',
          '**发光处：** 全仓库更改，您希望每个步骤都在提交日志中；代码审查内置的对工作（每个提交是离散的审查单元）；IDE 扩展不是选择的 SSH 和 devcontainer 工作流。',
          '**不足处：** 没有自动完成。默认情况下没有 IDE 内预览（在编辑器旁的 VS Code 终端窗格中正常工作，但未集成）。差异编辑格式对模型输出质量敏感 — 一个改述搜索块而不是重现搜索块的模型会失败编辑，您会在终端中看到重试尝试。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '设置 `auto-commits: true`（默认值）并使用 `git rebase -i` 在功能结束时压缩 Aider 的提交。工作中的细粒度提交对 `/undo` 有价值；压缩最终提交是您的团队审查的内容。Aider 记录此确切的模式。',
          },
        ],
      },
      editModel: {
        id: 'edit-model',
        title: '编辑模型：每个工具如何编写代码',
        content:
          '**编辑模型是每个工具感觉如何的最大单一决定因素。** 相同的模型，相同的任务 — 三个非常不同的工件。',
        image: '/images/coding-agent-edit-model-zh.svg',
        imageCaption: '编辑模式可靠性：7B模型上，Continue.dev最宽容，Aider拒绝不匹配块，Cline因XML格式错误停滞；30B+编程模型（Qwen3-Coder、DeepSeek Coder V3）上，三者均可靠。',
        items: [
          '**Continue.dev** — 对于自动完成：光标周围的 FIM 令牌产生内联补全。对于聊天驱动的编辑：模型返回围栏代码块；"应用"对打开的文件进行差异并将其显示为接受/拒绝。对于内联编辑（选择上的 Cmd/Ctrl+I）：模型在原地重写选择，差异显示在原地。',
          '**Cline** — 每次编辑都是工具调用。新文件或完全重写的 `write_to_file`，具有显式 `<<<<<<< SEARCH` / `>>>>>>> REPLACE` 块的外科更改的 `replace_in_file`。工具调用对模式进行验证；格式错误的工具调用获得"工具错误"，代理看到并重试。对话是结构化的工具调用和工具结果。不是自由散文。',
          '**Aider** — 搜索和替换差异块呈现为简单散文，在 CLI 中解析。模型发出类似统一差异围栏块的内容。Aider 应用它并提交。如果搜索块与文件不完全匹配，编辑被拒绝，Aider 要求模型重试。',
          '**7B 类模型上的可靠性排名：** Continue.dev > Aider > Cline。Continue.dev 的"应用"是容限的。小的改述通过差异算法进行调整。Aider 在不匹配的搜索块上直线拒绝，但失败是响亮和可恢复的。Cline 的 XML 工具格式在小型号上最脆弱 — 格式错误的工具调用停止循环。',
          '**30B+ 工具调用模型（Qwen3-Coder 30B、DeepSeek Coder V3）上的排名：** 三个都收敛 — 模型具有一致地输出精确差异块和格式正确工具调用的能力。',
          '对于改进代码生成的结构化提示技术（无论哪个工具包装它们），请参见 [用 AI 写更好的代码](/prompt-engineering/write-better-code-with-ai?lang=zh)。',
        ],
      },
      undo: {
        id: 'undo',
        title: '撤销、回滚和"代理刚刚做了什么"的问题',
        content:
          '**撤销是您只在需要时才注意到的无光彩特性。** 三个工具都可恢复；不同之处在于"这是一个错误"和"错误消失"之间有多少摩擦。',
        items: [
          '**Continue.dev** — 应用的编辑加入 VS Code 撤销堆栈。Cmd/Ctrl+Z 撤销每个文件上最近的应用。对于多文件回滚，您现有的 Git 工作流承担重任。没有工具级别的"撤销此整个对话"命令。',
          '**Cline** — 代理 UI 将每个步骤显示为一张卡片；每次编辑回复是一键点击。卡片在任务期间持久化。任务结束后，回滚通过 Git — Cline 不自动提交，因此在长期会话后，您可能有未提交更改的堆。',
          '**Aider** — `/undo` 取消最后一次提交；重复以进一步回溯。因为每次编辑都是单独的提交，粒度与逐步对话相匹配。`git reflog` 恢复 `/undo` 无法进行的任何操作。',
          '**实际含义：** 如果您倾向于让代理无人监视运行 20 分钟，Aider 之后给您最可审核的工件（干净的提交日志），Cline 给您最可读的在进行中的审计跟踪（每步卡，但没有提交）。Continue.dev 假设您始终保持在键盘。',
        ],
        callouts: [
          {
            type: 'tip',
            text: '对于 Cline 会话，在开始非平凡任务前运行 `git stash`。如果代理出轨，`git stash drop` 比按文件回复清理得更快。对于 Aider，现有的提交日志是安全网 — 不要做任何额外的事情。',
          },
        ],
      },
      context: {
        id: 'context',
        title: '上下文窗口策略：令牌去哪里',
        content:
          '**三个工具以不同的方式花费令牌。** 这是当您拥有较小上下文窗口（32K 或更低）的模型和非平凡仓库时最重要的预算决定。',
        image: '/images/coding-agent-context-strategy-zh.svg',
        imageCaption: '上下文窗口策略：Continue.dev使用按需索引检索（最低32K），Cline流式传输完整文件（多文件任务推荐128K），Aider使用tree-sitter repo地图加显式/add（最低32K）。',
        items: [
          '**Continue.dev** — 项目上的 TF-IDF 加 embeddings 索引。检索是按需的：只有与当前聊天消息相关的块着陆在提示中。`@codebase` 触发语义搜索；`@file path/to/x.ts` 按字面注入文件。令牌使用按您固定的内容缩放，而不是仓库的大小。',
          '**Cline** — 完整文件内容在每次读取时流传输到对话中。500 行文件消耗约 3K–5K 令牌；接触 8 个文件的代理任务在任何推理之前燃烧 25K–40K 令牌。推荐最小：32K 上下文窗口；128K 舒适。',
          '**Aider** — Tree-sitter 仓库地图（默认约 2K 令牌，通过 `--map-tokens` 可配置）加上显式 `/add` 的文件的内容。地图是仅定义的摘要，不是完整代码，因此与仓库大小的比例远好于流传输文件。范围外时 `/drop` 文件。',
          '**32K 上下文模型的实际含义：** Continue.dev 和 Aider 在大多数仓库上舒适地工作；Cline 开始对接触 5–6 个文件以上的任务施加上下文压力，除非您切换到 128K 上下文模型。',
          '**128K 上下文模型的实际含义：** 三个都舒适。Cline 的更重消费停止重要；决定因素回归到工作流原语。',
          '对于上下文窗口的深入解释和为什么模型在中文脉络中丢失信息，请参见 [上下文窗口解释：为什么 AI 忘记](/prompt-engineering/context-windows-explained-why-ai-forgets?lang=zh)。',
        ],
      },
      toolCalls: {
        id: 'tool-calls',
        title: '工具调用可靠性是一个模型属性',
        content:
          '**工具调用失败通常被错误地归咎于工具。** 实际上，模型发出格式错误的调用，工具严格验证，循环停止。不同工具中的相同模型会产生相同的失败模式。',
        items: [
          '**对这些工具可靠地进行工具调用的模型（2026 年 5 月）：** Qwen3-Coder 30B（Cline 的 XML 格式最好的），DeepSeek Coder V3（大上下文，多步计划强），Llama 3.3 70B（慢但可靠），Codestral 22B（快，较小的计划视野）。',
          '**困难的模型：** 7B 以下，13B 以下的大多数通用模型没有编码微调，下端比 Q4_K_M 更严格的量子化。症状：Cline 中格式错误的 XML、Aider 中改述的搜索块、Continue.dev 中与打开文件不匹配的围栏代码。',
          '**修复很少是"切换工具"。** 这是"切换模型"或"提高量子化"。Qwen3-Coder 30B at Q4_K_M 在三个工具中进行可靠的工具调用。Llama 3.2 7B at Q4 在三个中都失败。',
          '**Continue.dev 的 Agent 模式**使用标准的 OpenAI 工具调用 JSON。大多数编码微调模型很好地处理这个。',
          '**Cline 的 XML 格式**是最苛刻的 — 模型必须生成精确的 XML 结构。在多种格式上训练的编码微调模型（Qwen3-Coder、DeepSeek Coder）处理这个；通用模型通常不处理。',
          '**Aider 没有工具调用，严格来说** — 它从散文中解析搜索和替换块。"可靠性"问题变为"模型是否按字面重现搜索块"，大多数编码微调 22B+ 模型都做得很好。',
        ],
        callouts: [
          {
            type: 'note',
            text: '评估新的本地模型时，在您实际使用的工具中测试它，而不是在通用工具调用基准中。相关信号是您的日常工作流是否停止。在公开工具调用基准上得分 85% 的模型如果不可靠地发出 Cline 特定的 XML，仍然可能失败您一半的 Cline 任务。',
          },
        ],
      },
      ideIntegration: {
        id: 'ide-integration',
        title: 'IDE 集成和编辑器覆盖范围',
        content:
          '**编辑器范围是三个工具最明显分散的地方。** 这是大多数读者实际关心的维度；这也是最容易在 10 分钟内测试的。',
        items: [
          '**Continue.dev** — VS Code Marketplace 和 JetBrains Marketplace。JetBrains 构建是真实的（IntelliJ、PyCharm、GoLand、WebStorm 等），与 VS Code 构建的自动完成和聊天特性具有同等地位。Cursor 用户可以安装 VS Code 扩展；行为与 VS Code 相匹配。',
          '**Cline** — 仅 VS Code 扩展。在 Cursor（VS Code 分叉）中工作，但未正式测试；扩展表面相同，大多数用户报告没有问题。JetBrains 用户现在没有运气。',
          '**Aider** — 以终端为先；通过坐在编辑器旁边与任何编辑器集成。VS Code：打开集成终端，运行 Aider，在编辑器窗格中编辑，同时 Aider 提交。JetBrains：JetBrains 终端中的相同模式。Vim/Neovim：与 `:e!` 配对以在 Aider 提交后重新加载，这是一个生产性的流程。Cursor：与 VS Code 相同。',
          '**JetBrains 用户的实际含义：** Continue.dev 或 Aider 是您的唯一选择。',
          '**Vim/Neovim 用户的实际含义：** Aider 是自然适配。Continue.dev 有社区 Neovim 集成，成熟度各不相同；官方表面是 VS Code 和 JetBrains。',
        ],
      },
      workflowFit: {
        id: 'workflow-fit',
        title: '按用例划分的工作流适合度',
        content:
          '**最有用的框架是"您在度过什么样的一天"。** 使工具适配日，而不是相反。',
        image: '/images/coding-agent-workflow-fit-zh.svg',
        imageCaption: '工作流适配：Continue.dev适合自动补全和IDE内问答；Cline适合多文件重构和带命令访问的探索性调试；Aider适合git原生更改、SSH和Vim/Neovim工作流。',
        columns: ['用例', '最佳选择', '为什么'],
        rows: [
          {
            '用例': '使用自动完成向现有文件添加函数',
            '最佳选择': 'Continue.dev',
            '为什么': 'FIM 自动完成是自然原语；不需要聊天',
          },
          {
            '用例': '在不离开编辑器的情况下询问"此函数做什么"',
            '最佳选择': 'Continue.dev',
            '为什么': '`@file` 的 IDE 内聊天是最低摩擦的路径',
          },
          {
            '用例': '跨 5+ 个文件重构功能',
            '最佳选择': 'Cline',
            '为什么': '具有每步批准的原生多文件编辑',
          },
          {
            '用例': '"为什么此测试不稳定"探索性错误追踪',
            '最佳选择': 'Cline',
            '为什么': '代理循环执行命令、读取日志、迭代',
          },
          {
            '用例': '使用可审核提交的全仓库重命名或 API 迁移',
            '最佳选择': 'Aider',
            '为什么': '每次编辑变成提交；审查和撤销很容易',
          },
          {
            '用例': 'SSH 到服务器，没有 IDE 的工作',
            '最佳选择': 'Aider',
            '为什么': '根据设计，仅终端',
          },
          {
            '用例': 'Vim 或 Neovim 日常驱动',
            '最佳选择': 'Aider',
            '为什么': '自然配对终端驱动的编辑',
          },
          {
            '用例': 'JetBrains IDE（IntelliJ、GoLand、PyCharm）用户',
            '最佳选择': 'Continue.dev 或 Aider',
            '为什么': 'Cline 仅 VS Code',
          },
        ],
      },
      decisionTree: {
        id: 'decision-tree',
        title: '决策树：应该选择哪一个',
        content: '**按顺序的五个问题可以将大多数读者引导到正确的选择。**',
        items: [
          '**1. 您在 JetBrains、Vim 或通过 SSH 工作吗？** → 是：您在 Continue.dev（仅 JetBrains）和 Aider（Vim/SSH）之间。跳到 Q4。否：继续。',
          '**2. 您想要一个在一个任务中编辑多个文件的自主代理吗？** → 是：Cline。否：继续。',
          '**3. 您想要自动完成加上 IDE 集成聊天面板吗？** → 是：Continue.dev。否：继续。',
          '**4. 您通过 `git diff` 审核更改并希望所有编辑都自动提交吗？** → 是：Aider。否：Continue.dev（默认）。',
          '**5. 仍然不确定吗？** → 从 Continue.dev 开始。这是最低摩擦的安装，可以在您可能已在使用的编辑器中工作，稍后添加 Aider 用于终端驱动的工作很简单。Cline 是添加到工作流中最具破坏性的；仅当您知道您想要代理循环时采用它。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '选择本地编码工具时的常见错误',
        items: [
          '**错误 1：在模型之前选择工具。** "最佳"工具中的 30B 编码微调模型胜过"最佳"工具中的 7B 通用模型。首先选择模型；工具是第二个决定。',
          '**错误 2：在 Continue.dev 中为自动完成和聊天使用单一模型。** 自动完成需要 sub-200ms 延迟；聊天可以容忍秒数。在同一配置中运行小自动完成模型和大聊天模型。',
          '**错误 3：让 Cline 自动批准完全开放。** 具有 `execute_command` 自动批准的模型循环可能造成真实伤害。在您信任此代码库上的模型之前保持破坏性工具门控。',
          '**错误 4：在改述代码的模型上使用 Aider。** 如果模型无法逐字重现搜索块，每次编辑都失败。对于可靠的差异编辑，使用编码微调 22B+（Qwen3-Coder、DeepSeek Coder、Codestral）。',
          '**错误 5：切换工具以修复模型问题。** 如果工具调用在 Cline 中失败，它们在 Continue.dev 的 Agent 模式中可能也会因相同原因失败。首先诊断模型。',
          '**错误 6：对多文件任务在 32K 上下文模型上运行 Cline。** 令牌消费在任务中途燃烧通过预算。对于非平凡的 Cline 工作，使用 128K 上下文模型。',
        ],
      },
      sources: {
        id: 'sources',
        title: '资源',
        items: [
          '[Continue.dev 文档](https://docs.continue.dev/) — 官方设置指南、模型配置、`@` 上下文提供者、Agent 模式参考。',
          '[Cline GitHub 仓库](https://github.com/cline/cline) — 源代码、工具模式、计划/行动模式行为、扩展架构。',
          '[Aider 文档](https://aider.chat/) — 官方 CLI 参考、编辑格式文档、仓库地图机制、每个模型的默认值。',
          '[Ollama 模型库](https://ollama.com/library) — 每个工具引用的可用本地模型和量子化级别。',
          '[Qwen3-Coder 模型卡](https://huggingface.co/Qwen/Qwen3-Coder-30B) — 架构、支持的上下文长度、推荐编码模型的工具调用训练数据。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'VS Code 用户最好的是哪个？',
            a: '三个都在 VS Code 中工作，但 Continue.dev 和 Cline 是自然的适配。Continue.dev 用于自动完成优先和 IDE 集成聊天；Cline 用于自主代理任务。Aider 从 VS Code 集成终端完美工作，但不与编辑器表面集成 — 其 UI 是终端。',
          },
          {
            q: 'Cline 支持 Cursor IDE 吗？',
            a: 'Cursor 是 VS Code 分叉，接受 VS Code 扩展。Cline 在 Cursor 中安装并运行；扩展表面相同。Cline 团队不正式针对 Cursor，因此边缘情况（特定的 Cursor API、未来的 Cursor 更改）不保证得到支持，但实际上用户报告没有问题。',
          },
          {
            q: 'Aider 可以不使用 Git 工作吗？',
            a: '可以，但您丧失定义它的工作流原语。Aider 在非 Git 目录中使用 `--no-git` 运行；编辑仍然适用但没有提交，所以 `/undo` 被禁用，回滚回到会话内的模型差异历史。对于非平凡的工作，在开始前初始化 Git 仓库 — 即使是被忽略的。',
          },
          {
            q: '哪个有最好的多文件重构？',
            a: '自主多文件工作的 Cline — 它在文件间计划，根据需要读取它们，并使用每步批准编辑。可审核的多文件工作的 Aider，您显式命名文件并希望每次编辑都被提交。Continue.dev 需要每个文件的手动驱动；这是三个中在多文件重构上最弱的。',
          },
          {
            q: '这些支持开箱即用的本地 Ollama 吗？',
            a: '支持。Continue.dev 有具有单一块配置的原生 Ollama 提供者。Cline 在提供者下拉菜单中列出 Ollama。Aider 通过 LiteLLM 支持 Ollama，使用 `--model ollama_chat/<model-name>`。Ollama 是三个最低摩擦的本地后端。',
          },
          {
            q: '哪个最适合 Qwen3-Coder？',
            a: 'Qwen3-Coder 30B 在 2026 年 5 月的三个工具中可靠 — 它处理 Cline 的 XML 工具格式、Aider 的搜索和替换块以及 Continue.dev 的自动完成 + 聊天工作流，没有可测量的退化。较小的 Qwen3-Coder 变体（7B 类）进行工具调用的可靠性较低，在 Continue.dev 的仅自动完成模式中比在 Cline 的代理循环中表现更好。',
          },
          {
            q: '我可以将这些与 Cursor 的本地模式一起使用吗？',
            a: 'Cursor 的内置功能（Tab 自动完成、Cmd+K）使用 Cursor 自己的模型路由，不是这些工具。要在 Cursor 中使用本地 LLM，在 Cursor 中作为 VS Code 扩展安装 Continue.dev 或 Cline — 它们带来自己独立于 Cursor 的提供者配置。Aider 在 Cursor 的集成终端中像在 VS Code 的终端中一样运行。',
          },
          {
            q: '哪个对长期会话最稳定？',
            a: 'Aider，因为没有进程中状态可以破坏 — 每次编辑是提交，会话崩溃仅丧失对话，不是工作。Continue.dev 在长 IDE 会话中稳定。Cline 的长期会话可能在较小型号上碰到上下文窗口压力；在大型重构之间重启任务避免这个。',
          },
          {
            q: '这些支持自定义系统提示吗？',
            a: '三个都支持。Continue.dev：`config.json` 中的每个模型 `systemMessage`。Cline：扩展设置中的"自定义指令"字段。Aider：`--system-prompt` 标志或 `.aider.conf.yml` 中的每个模型默认值。自定义提示对 Cline（方向 Plan 模式行为）和 Aider（在提交中强制编码风格）特别有用。',
          },
          {
            q: '中国企业部署本地编码代理需要考虑什么数据安全问题？',
            a: '企业必须遵守中国数据安全法，该法规对数据驻留、跨境传输和企业网络中的数据处理有严格要求。本地 LLM（Ollama、llama.cpp）本身不存储个人数据，但它们索引的代码库和日志可能包含敏感的业务信息。确保模型完全部署在公司自有基础设施上，没有外部 API 访问。对于处理客户数据或知识产权的任何工作，请在部署前咨询您的合规和法律团队。',
          },
          {
            q: '亚太地区的团队使用这些工具的最佳实践是什么？',
            a: 'Aider 在亚太地区提供最佳的成本效益：没有 IDE 许可依赖、终端原生（适配现有开发环境）、最低硬件要求（与 32K 上下文模型一起工作）、完整的审计追踪在 Git 日志中（支持更简单的合规和代码审查）。Continue.dev 对于已在 VS Code/JetBrains 中投入的团队来说是第二选择。Cline 强大于自主重构工作流，但具有更高的计算成本。本地模型部署可以使用分布式基础设施来降低成本；工具选择应遵循现有的基础设施和开发者工作流，而不是效能。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[使用本地 LLM 替换 GitHub Copilot](/power-local-llm/replace-github-copilot-with-local-llm?lang=zh) — 更广泛的替换背景，包括成本和隐私数学。',
          '[2026 年最佳本地编码模型](/power-local-llm/best-local-coding-models-2026?lang=zh) — 方程式的模型端：实际基准上的 Qwen3-Coder vs DeepSeek vs Codestral。',
          '[2026 年 MCP 的本地 AI 代理](/power-local-llm/local-ai-agents-with-mcp-2026?lang=zh) — 对于想要上述工具之外的扩展工具调用的用户。',
          '[2026 年工具调用的最佳本地模型](/power-local-llm/best-local-models-tool-calling-2026?lang=zh) — 工具调用可靠性的相邻技术深度。',
          '[llama.cpp vs Ollama vs vLLM](/local-llms/llamacpp-vs-ollama-vs-vllm?lang=zh) — 三个工具下的推论引擎层。',
          '[Power Local LLM Hub](/power-local-llm) — 完整的指南库。',
        ],
      },
    },
  },
}
