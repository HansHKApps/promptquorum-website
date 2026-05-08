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
}
