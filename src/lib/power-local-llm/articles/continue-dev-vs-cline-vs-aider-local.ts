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
      comparisonTable: {
        id: 'comparison-table',
        title: 'How Continue.dev, Cline, and Aider Compare in 2026',
        content:
          'All three harnesses are open source, free to run, and work with any local LLM endpoint. The structural differences below decide which one fits your workflow.',
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
}
