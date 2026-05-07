// Power Local LLM — Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026
// Slug: local-ai-agents-with-mcp-2026
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
    title: 'Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026',
    seoTitle: 'Local Ollama + MCP: Connect AI to Databases and APIs (2026)',
    intro:
      'Model Context Protocol (MCP) is the missing layer between a local Ollama model and the rest of your machine. With one config file and a tool-calling model, the same agent can query a Postgres database, read and write files in a sandboxed directory, drive a headless browser, and open GitHub pull requests — all running on your laptop, all offline. This guide walks through the working setup end-to-end with a security model that does not assume you trust the model.',
    metaDescription:
      'Setup guide for local AI agents in 2026 using Ollama and Model Context Protocol (MCP). Filesystem, SQLite/Postgres, browser, GitHub servers, working JSON config, and a sandboxing model that does not trust the LLM.',
    twitterDescription:
      'Local Ollama + MCP = an AI agent that reads files, queries databases, and drives a browser — fully offline. Working configs, the four servers worth installing first, and a security model that does not trust the model.',
    current_models_mentioned: [
      'Gemma 4 27B',
      'GLM-5.1 32B',
      'Qwen3 32B',
      'Qwen3-Coder 30B',
      'Llama 3.3 70B',
    ],
    current_hardware_mentioned: [
      'Apple M5 MacBook Pro 16 GB',
      'Apple M5 Max 64 GB',
      'NVIDIA RTX 4090 24 GB',
    ],
    audience:
      'Developers and technically-comfortable users running local LLMs through Ollama who want a model that can actually do things — query databases, edit files, automate browsers — without sending anything to a cloud provider.',
    readTime: '15 min read',
    educationalLevel: 'Advanced',
    primaryTerm: 'local MCP agent',
    targetKeywords: [
      'mcp ollama',
      'local mcp server setup',
      'model context protocol local',
      'ollama tool calling 2026',
      'local ai agent mcp',
      'mcp without claude desktop',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) lets a local Ollama model call tools — read a file, run a SQL query, click a web link, open a pull request — through a standard JSON-RPC interface that any MCP-compatible client (Goose, Cline, Continue.dev, LM Studio in 2026) can speak. The protocol is open, the reference servers are open source, and as of 2026 nothing requires Claude Desktop or any cloud account. Run Ollama, install one MCP client, drop a `mcp.json` config naming the servers you want, and a tool-calling model (Gemma 4, GLM-5.1, Qwen3, Llama 3.3) becomes an agent that operates on your machine, with permissions you control. The trick is the security model: never auto-approve write tools, scope filesystem access to a single directory, and keep the database server in read-only mode by default.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run AI agents locally with MCP and Ollama in 2026?',
        answer:
          'Yes — and the setup is now small enough to do in an afternoon. Run Ollama with a tool-calling model (Gemma 4, GLM-5.1, Qwen3, or Llama 3.3 70B), install an MCP-aware client (Goose is the most direct CLI; Cline, Continue.dev, and LM Studio all added MCP support in early 2026), and add MCP servers for the capabilities you want — `filesystem` for files, `sqlite` or `postgres` for databases, `puppeteer` or `playwright` for browser automation, `github` for repository management. The protocol is the same protocol Claude Desktop uses; the only difference is the model and the client. Stay safe by sandboxing the filesystem server to a single directory, keeping the database server read-only by default, and never auto-approving write or shell tools.',
        bullets: [
          'MCP is open and works fully local — no Claude Desktop, no Anthropic account, no cloud calls required.',
          'Ollama provides the model; an MCP client (Goose, Cline, Continue.dev, LM Studio) bridges Ollama to MCP servers via JSON-RPC.',
          'Four reference servers cover most real workflows: filesystem, sqlite/postgres, puppeteer/playwright (browser), and github.',
          'Tool-call reliability is a model property: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, and Llama 3.3 70B handle MCP cleanly. Models under 7B regularly emit malformed tool calls.',
          'Security model: scope filesystem access to one directory, run database servers read-only, and gate every write or shell tool behind explicit approval.',
          'Cost: $0 in API spend, but tokens are consumed locally — agent loops are token-heavy, so use a 32K+ context model and a machine that can run it at usable speed.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What MCP Unlocks', anchor: '#what-mcp-unlocks' },
      { label: 'MCP Server Comparison', anchor: '#server-comparison' },
      { label: 'Architecture: How the Pieces Fit', anchor: '#architecture' },
      { label: 'Setup: Ollama + Goose in 15 Minutes', anchor: '#setup' },
      { label: 'Filesystem Server', anchor: '#filesystem-server' },
      { label: 'SQLite and Postgres Servers', anchor: '#database-server' },
      { label: 'Browser Server (Puppeteer / Playwright)', anchor: '#browser-server' },
      { label: 'GitHub Server', anchor: '#github-server' },
      { label: 'Security Model', anchor: '#security-model' },
      { label: 'Local MCP vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'Picking a Tool-Calling Model', anchor: '#picking-model' },
      { label: 'MCP vs Plain Function Calling', anchor: '#mcp-vs-function-calling' },
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
          '**MCP is a JSON-RPC 2.0 protocol for tools.** A model (via a client) connects to one or more MCP servers; each server exposes Tools (callable functions), Resources (readable data), and Prompts (templates). The wire format is identical whether the client is Claude Desktop, Goose, Cline, Continue.dev, or LM Studio.',
          '**Ollama does not speak MCP directly — an MCP client wraps Ollama.** Goose (Block) is the simplest open-source CLI with native Ollama support; Cline, Continue.dev, and LM Studio added MCP client support in early 2026.',
          '**Four reference servers cover most use cases:** `filesystem` (read/write a sandboxed directory), `sqlite` and `postgres` (query databases, read-only by default), `puppeteer` or `playwright` (drive a headless browser), and `github` (repo and PR management with a personal access token).',
          '**Tool-call reliability scales with model size and training.** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, and Llama 3.3 70B handle MCP cleanly at Q4_K_M. Models under 7B regularly emit malformed tool calls and stall the loop.',
          '**The security model assumes the model is untrusted.** Sandbox the filesystem server to a single directory, run the database server with a read-only role, never auto-approve `execute_command` or `write_file` tools, and review the audit log after long sessions.',
          '**Local MCP vs Claude Desktop:** identical protocol, identical server ecosystem. The local stack trades the cloud model for an offline one — privacy, no per-token cost, and no rate limits, at the cost of a smarter model and you owning the security configuration.',
          '**Cost is $0 in API fees but real in tokens.** Agent loops can consume 30K–80K tokens for a single multi-step task. Use a 32K-context model minimum; 128K is comfortable.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Protocol:** JSON-RPC 2.0 over stdio (local subprocess) or HTTP/SSE (remote). Local agents use stdio almost exclusively.',
          '**Maintained by:** Anthropic (open-source spec); reference servers maintained in `modelcontextprotocol/servers` on GitHub plus a growing third-party ecosystem.',
          '**Local clients in 2026:** Goose (Block), Cline (VS Code extension), Continue.dev (VS Code/JetBrains), LM Studio (desktop app), plus several CLI tools.',
          '**Compatible Ollama models:** any model with native tool-call training. In May 2026: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Server transport defaults:** stdio for local processes; HTTP/SSE only when you need to share a server across machines or agents.',
          '**Configuration lives in one file:** `~/.config/goose/config.yaml` (Goose), the MCP block of `~/.continue/config.json` (Continue.dev), or `mcpServers` in Cline\'s settings UI. Same shape across all of them: server name, command, args, env vars.',
          '**No Claude Desktop required.** The protocol predates Claude Desktop\'s exclusivity stories; every reference server is MIT/Apache-licensed and runs against any compliant client.',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'What MCP Actually Unlocks for a Local Model',
        content:
          '**A local LLM with no tools can only respond with text. With MCP, the same model can act on your machine.** The shift is the difference between a chatbot and an agent.',
        items: [
          '**"Find every TODO in this repo, group them by file, and write a Markdown summary to `notes/todos.md`."** — `filesystem` server reads, the model groups, the same server writes. One round trip end-to-end.',
          '**"Show me the top 10 customers by revenue this quarter, then chart it."** — `postgres` server runs the SQL (read-only role), the model summarises, the model writes a CSV via `filesystem` for your charting tool.',
          '**"Open the Hacker News front page, find the top three AI stories, summarise them, and append to my reading list."** — `puppeteer` server drives a headless browser, the model extracts and summarises, `filesystem` appends.',
          '**"Open a draft PR titled `chore: bump deps` against my fork and link the failing CI run."** — `github` server creates the PR, fetches the run, and writes the link in the description.',
          '**"Look at the last 100 rows of `events.db` and tell me which user IDs are responsible for the new error spike."** — `sqlite` server queries; the model reasons; you read the answer in the chat panel.',
          'Each of these is a sentence-to-action workflow that previously required either a cloud model with hosted tools or a hand-rolled script. MCP is the layer that lets you reuse the same servers across clients and the same model across servers.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'How the Four Most-Used MCP Servers Compare',
        content:
          'The reference servers below cover the long tail of "I want my local model to actually do something". All are open source and run as local subprocesses spawned by your MCP client.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Start with the filesystem server (5 minutes, low risk), add a SQLite server for data work, add a browser server only when you need it, and bring in GitHub once you trust the model on your machine.',
          },
          {
            type: 'plain-terms',
            text: 'Four servers handle 90% of what you will want a local agent to do. The filesystem server reads and writes files in a folder you choose. The SQLite or Postgres server runs queries against a database. The browser server drives a real Chromium window so the model can read pages that need JavaScript. The GitHub server opens issues and PRs against your repos. They all install with one command, all run as subprocesses on your own machine, and none of them call out to the internet unless they explicitly need to (the browser does, the others do not).',
          },
        ],
        columns: ['MCP Server', 'What It Enables', 'Setup Difficulty', 'Risk Level', 'Best For'],
        rows: [
          { 'MCP Server': 'Filesystem', 'What It Enables': 'Read and write files inside a sandboxed directory', 'Setup Difficulty': 'Easy (one path to allow-list)', 'Risk Level': 'Medium — scope it tightly', 'Best For': 'Personal automation, note-taking, repo summarisation' },
          { 'MCP Server': 'SQLite', 'What It Enables': 'Query a local SQLite database file', 'Setup Difficulty': 'Easy (path to .db file)', 'Risk Level': 'Low when read-only; medium with writes', 'Best For': 'Data exploration, log analysis, prototyping' },
          { 'MCP Server': 'Postgres', 'What It Enables': 'Query a Postgres database over a connection string', 'Setup Difficulty': 'Medium (role + URL)', 'Risk Level': 'Medium — use a read-only role', 'Best For': 'Production data exploration, reporting, BI prototypes' },
          { 'MCP Server': 'Puppeteer / Playwright', 'What It Enables': 'Drive a headless or visible Chromium for browsing, scraping, form-filling', 'Setup Difficulty': 'Hard (browser binaries, selectors, latency)', 'Risk Level': 'High — can submit forms, click anything', 'Best For': 'Research, scraping, regression testing' },
          { 'MCP Server': 'GitHub', 'What It Enables': 'List repos, read files, open issues and PRs', 'Setup Difficulty': 'Easy (PAT in env var)', 'Risk Level': 'Medium — scope token to specific repos', 'Best For': 'Dev workflows, triage, PR drafting' },
          { 'MCP Server': 'Custom', 'What It Enables': 'Anything you can express as JSON-RPC tools', 'Setup Difficulty': 'Hard (write your own server)', 'Risk Level': 'Variable', 'Best For': 'Internal APIs, niche systems, glue code' },
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'How the Pieces Fit Together',
        content:
          '**Three processes, one shared protocol.** The model lives in Ollama, the client speaks MCP, and each server exposes a small set of tools. Every tool call hops client → server, runs locally, and returns JSON.',
        items: [
          '**Ollama** runs as a background service on `127.0.0.1:11434` and serves the model through an OpenAI-compatible API. It does not know what MCP is — it just answers chat completions and emits tool calls when the model asks for them.',
          '**MCP client** (Goose, Cline, Continue.dev, LM Studio) is the bridge. It talks to Ollama for the model and to MCP servers for tools. When the model emits a tool call, the client routes it to the right server, gets the result, and feeds it back into the conversation.',
          '**MCP servers** are independent subprocesses, one per capability. They speak JSON-RPC 2.0 over stdio. Each server advertises a list of Tools, Resources, and Prompts; the client merges them into the tool surface presented to the model.',
          '**Stdio transport keeps everything local.** A server is launched by the client, communicates over its stdin/stdout, and exits when the client exits. Nothing routes through the network unless the server itself opens a connection (the browser server does; filesystem and database servers do not).',
          '**The model sees one flat tool list.** From the model\'s perspective there are no servers — just a list of tool names like `filesystem.read_file`, `sqlite.query`, `puppeteer.navigate`. The client handles routing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The architecture is identical to Claude Desktop\'s. The differences are the model (a local Ollama model instead of Claude) and the client (Goose/Cline/Continue.dev/LM Studio instead of Claude Desktop). The MCP servers are the same servers — you can run the filesystem server underneath Claude Desktop today and it will still run unchanged underneath Goose tomorrow.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setup: Ollama + Goose in 15 Minutes',
        content:
          '**Goose is the simplest path to a working local MCP agent in 2026.** It is an open-source CLI from Block with native Ollama support, an interactive chat surface, and one config file for all your MCP servers. Continue.dev, Cline, and LM Studio work too — Goose has the lowest setup tax for a first run.',
        items: [
          '**Step 1 — install Ollama.** Download from `ollama.com/download` (macOS/Windows/Linux). Confirm the service is running with `curl http://127.0.0.1:11434/api/tags`.',
          '**Step 2 — pull a tool-calling model.** Pick from Gemma 4 27B (`gemma4:27b`), GLM-5.1 32B (`glm5:32b`), Qwen3 32B (`qwen3:32b`), or Llama 3.3 70B (`llama3.3:70b`). 16 GB unified memory or 12 GB VRAM handles 27B–32B at Q4_K_M comfortably.',
          '**Step 3 — install Goose.** `pipx install goose-ai` (macOS, Linux) or download the installer from the Goose releases page. The CLI installs as `goose`.',
          '**Step 4 — configure Ollama as the provider.** Run `goose configure`, pick `ollama` as the provider, set the model to the one you pulled, and set the host to `http://127.0.0.1:11434`. Goose writes this to `~/.config/goose/config.yaml`.',
          '**Step 5 — add the filesystem MCP server.** Edit `~/.config/goose/config.yaml` to add a `mcpServers` block (config example below). Restart `goose session` and ask it to list files in your test directory. The first turn confirms the server is wired up.',
          '**Step 6 — verify with a real task.** Try `goose session` and ask "Make a list of every Markdown file in `notes/`, with title and word count, and write the result to `notes/index.md`." If the agent reads, summarises, and writes back, the loop works.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:27b\n\n# 2. Install Goose\npipx install goose-ai\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:27b\n# Host:     http://127.0.0.1:11434\n\n# 4. Start a session — Goose reads ~/.config/goose/config.yaml\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'If you already use Cline or Continue.dev, skip Goose and use those — both added MCP server support in their early-2026 releases. Cline\'s "MCP Servers" panel installs reference servers with one click; Continue.dev reads `mcpServers` from `~/.continue/config.json` (same shape as the Goose config block below). The model and the servers are the same; only the host application changes.',
          },
        ],
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem Server: Read and Write a Sandboxed Directory',
        content:
          '**The filesystem server is the first one to install and the easiest to scope safely.** It exposes `read_file`, `write_file`, `list_directory`, `move_file`, `search_files`, and `create_directory` — all restricted to one or more allow-listed paths.',
        items: [
          '**Install:** the reference server is `@modelcontextprotocol/server-filesystem`, run via `npx -y` (no global install needed). Goose, Cline, and Continue.dev all auto-spawn it from the config block.',
          '**Allow-list paths:** the server takes one or more directory arguments and refuses operations outside them. Always pass an explicit, narrow path — never `~` or `/`.',
          '**Tools exposed:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (line-based replacements), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. The model sees this as `filesystem.read_file` and so on.',
          '**Quality-of-life:** `directory_tree` returns a JSON tree; ideal for the model to orient itself before reading specific files. `search_files` does grep-like recursive search.',
          '**Risk surface:** the server respects the allow-list, but inside that list it has full read/write. Treat the allow-list as the only barrier and pick a dedicated workspace directory rather than your home folder.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  filesystem:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-filesystem"\n      - "/Users/you/agent-workspace"\n    env: {}',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Never allow-list `/` or your home directory. Create a dedicated `agent-workspace` folder, put copies of the files you want the agent to touch in there, and let it operate only inside that folder. If the agent goes wrong, the blast radius stops at one directory.',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'SQLite and Postgres Servers: Query Real Data',
        content:
          '**The database servers turn the model into a junior analyst that can answer questions backed by real data — provided you keep it read-only.** Both reference servers ship with a `query` tool and (optionally) a `write_query` tool.',
        items: [
          '**SQLite server (`@modelcontextprotocol/server-sqlite`)** takes a path to a `.db` file. Useful for log analysis, prototyping schemas, and exploring exports without spinning up a database.',
          '**Postgres server (`@modelcontextprotocol/server-postgres`)** takes a connection string. The recommended pattern is to create a dedicated read-only role for the agent and use that role\'s connection string.',
          '**Tools exposed:** `query` (SELECT only when configured read-only), `list_tables`, `describe_table`. The Postgres server adds `list_schemas`. Some forks add `write_query` — leave it disabled unless you trust the model on this database.',
          '**Schema awareness:** ask the agent "list the tables and describe the most-used five" before asking analytical questions — the model is much more accurate when it has called `describe_table` than when it guesses column names.',
          '**Cost:** queries hit your database directly. A poorly-formed `SELECT *` from a 100 M row table is the same accident here as it would be from a human — keep the role on a separate connection pool with a statement timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  sqlite:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-sqlite"\n      - "--db-path"\n      - "/Users/you/data/events.db"\n    env: {}\n\n  postgres:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-postgres"\n      - "postgresql://agent_ro@127.0.0.1:5432/analytics"\n    env:\n      PGPASSWORD: "${PG_AGENT_PASSWORD}"',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'Create the Postgres role once and never give the agent anything else: `CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` Then add a `statement_timeout = 30s` to the role. The agent cannot write, cannot drop, and cannot run forever.',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'Browser Server: Drive Chromium With Puppeteer or Playwright',
        content:
          '**The browser server is the most powerful and the most dangerous of the four.** It launches a real Chromium and exposes navigation, clicks, form-fills, and screenshots — i.e. it can do anything you can do in a browser, including submitting forms.',
        items: [
          '**Reference servers:** `@modelcontextprotocol/server-puppeteer` (lighter, headless by default) and `@modelcontextprotocol/server-playwright` (heavier, supports multiple browsers). For local agents, Puppeteer is enough.',
          '**Tools exposed:** `navigate`, `screenshot`, `click`, `fill`, `select`, `evaluate` (run JavaScript), `get_page_content`. The model uses `get_page_content` to read structured text and `screenshot` to confirm visually.',
          '**Latency:** real browser sessions take 1–5 seconds per action. A multi-step browse easily consumes 30–60 seconds and tens of thousands of tokens because page content is large. Use a 32K+ context window.',
          '**Selectors:** the model has to pick CSS selectors. Smaller models guess wrong often; a 27B+ tool-calling model handles common patterns reliably. Keep tasks scoped — "extract the title and first paragraph of this URL" is much more reliable than "navigate the site and find the contact page".',
          '**The right use cases:** research (open the page, summarise it, append to notes), regression testing (navigate, click, screenshot), and form-filling on pages you control. The wrong use cases: anything where a misclick on the live web has consequences.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  puppeteer:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-puppeteer"\n    env:\n      PUPPETEER_HEADLESS: "true"\n      # Block obviously dangerous endpoints at the OS firewall level\n      # rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Never give the browser server credentials. If you need an authenticated session, hand the agent a pre-authenticated browser profile (via `userDataDir`), and never let it navigate to high-impact sites (banking, email, cloud consoles, payment forms). The model has no judgment about what a button does — it sees text and clicks. Treat it like an intern with no context and no recourse.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub Server: Repos, Issues, and PRs From a Local Model',
        content:
          '**The GitHub server turns natural-language repo work into API calls.** It is the simplest of the four to configure and the easiest to scope tightly via personal access token (PAT) permissions.',
        items: [
          '**Install:** `@modelcontextprotocol/server-github`, run with a PAT in the `GITHUB_PERSONAL_ACCESS_TOKEN` env var. The token is the only auth — the server itself has no separate config.',
          '**Tools exposed:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, plus dozens more. The full surface is large; most tasks use 5–10 tools.',
          '**Scope the PAT.** Use a fine-grained PAT scoped to specific repos with the minimum permissions required (Read for browsing, Write for PR/issue creation). Do not use a classic PAT with `repo` for an experimental agent.',
          '**Real workflows:** triage ("read the last 20 open issues, group them, draft labels"), drafting ("read the README and open a PR fixing typos"), reporting ("which PRs are stale this week").',
          '**Risk surface:** the agent can create issues and PRs, comment on them, and (with write permissions) push commits. Disable merge tools unless you trust both the model and the workflow — a misclicked merge in a fine-grained-PAT repo is recoverable, but only if you notice quickly.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  github:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-github"\n    env:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n      # Fine-grained PAT scoped to one or two test repos,\n      # not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'A Security Model That Does Not Trust the Model',
        content:
          '**The right mental model is "the LLM is an untrusted intern with the keys you give it".** Capabilities come from the servers and the surfaces you allow-list — not from the model\'s judgment.',
        items: [
          '**Sandbox the filesystem server to one directory.** Never `~` or `/`. Pick a `agent-workspace/` folder and put copies of the files the agent needs to touch in there. If the agent goes wrong, the worst case is one folder.',
          '**Run database servers read-only by default.** A dedicated `agent_ro` role with `SELECT`-only grants and a 30-second statement timeout removes a class of incidents entirely.',
          '**Gate every write or shell tool behind explicit approval.** Goose, Cline, and Continue.dev each support per-tool approval rules. Allow read tools by default; require approval for `write_file`, `edit_file`, `execute_command`, `create_pull_request`, and any browser action that submits forms.',
          '**Use the audit log.** Every MCP client logs tool calls and results. After a long session, scan the log: you will catch the model trying things you did not expect (sometimes harmless, sometimes worth a permission tighten).',
          '**Token-scope third-party access narrowly.** GitHub PATs scoped to two test repos. Postgres roles read-only. Browser sessions without credentials. The model will eventually try things you did not anticipate; the limits on what it can do should not depend on the model getting it right.',
          '**Air-gap the agent for sensitive data work.** Disable network access on the host while running the agent (or use a network namespace) when working with private data. The local stack already has nothing leaving the machine, but defense-in-depth catches mistakes in third-party servers.',
          '**Treat MCP server selection like any dependency choice.** The reference servers are well-maintained; many third-party servers are not. Read the server\'s code before installing one that needs credentials.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A useful failure-recovery habit: before a non-trivial agent task, `git stash` (or `git checkout -b agent/<task>`). After the task, review the diff, keep the parts you want, and discard the rest. This is the same practice that makes long Cline or Aider sessions safe — see the [Continue.dev vs Cline vs Aider comparison](/power-local-llm/continue-dev-vs-cline-vs-aider-local) for the broader pattern.',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'Local MCP vs Claude Desktop: What Changes, What Stays',
        content:
          '**The protocol and the servers are identical. Only the model and the client change.** This is the entire reason MCP matters — your tooling investment ports cleanly between local and cloud setups.',
        columns: ['Layer', 'Claude Desktop', 'Local Ollama + Goose'],
        rows: [
          { 'Layer': 'Model', 'Claude Desktop': 'Claude (Anthropic, cloud)', 'Local Ollama + Goose': 'Gemma 4, GLM-5.1, Qwen3, or Llama 3.3 (local)' },
          { 'Layer': 'Client', 'Claude Desktop': 'Claude Desktop app', 'Local Ollama + Goose': 'Goose, Cline, Continue.dev, or LM Studio' },
          { 'Layer': 'Servers', 'Claude Desktop': 'Same MCP servers', 'Local Ollama + Goose': 'Same MCP servers' },
          { 'Layer': 'Protocol', 'Claude Desktop': 'MCP (JSON-RPC 2.0)', 'Local Ollama + Goose': 'MCP (JSON-RPC 2.0)' },
          { 'Layer': 'Cost per request', 'Claude Desktop': 'Per-token API spend', 'Local Ollama + Goose': '$0 — local inference' },
          { 'Layer': 'Privacy', 'Claude Desktop': 'Conversation goes to Anthropic', 'Local Ollama + Goose': 'Stays on the machine' },
          { 'Layer': 'Rate limits', 'Claude Desktop': 'API rate limits apply', 'Local Ollama + Goose': 'Limited only by hardware throughput' },
          { 'Layer': 'Tool-call quality', 'Claude Desktop': 'Best-in-class', 'Local Ollama + Goose': 'Good with 27B+ models; degrades fast under 7B' },
          { 'Layer': 'Internet required', 'Claude Desktop': 'Yes', 'Local Ollama + Goose': 'Only if a server itself fetches (e.g. browser)' },
          { 'Layer': 'Setup time', 'Claude Desktop': '5 minutes', 'Local Ollama + Goose': '15 minutes (one-time)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'Picking a Tool-Calling Model for Local MCP',
        content:
          '**Tool-call reliability scales with model size and training, not with the harness.** A model that emits malformed tool calls in Cline will emit malformed tool calls in Goose for the same reason.',
        items: [
          '**Gemma 4 27B (`gemma4:27b`)** — Google\'s tool-call training is best-in-class for the size. Fits in 16 GB unified memory or 24 GB VRAM at Q4_K_M. Good general reasoning; somewhat conservative on chained tool calls.',
          '**GLM-5.1 32B (`glm5:32b`)** — Zhipu\'s model has very strong tool-call reliability and a 128K context window out of the box. Slightly heavier than Gemma 4; fits comfortably on a 24 GB GPU.',
          '**Qwen3 32B (`qwen3:32b`)** — well-rounded; the dense 32B handles MCP cleanly and is happy in a long agent loop. **Qwen3-Coder 30B (`qwen3-coder:30b`)** is the best pick if your agent work is code-shaped.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — the highest ceiling but the heaviest. 48 GB+ unified memory or 2× 24 GB GPUs at Q4_K_M. Use only if your hardware accommodates it; the smaller models are usually enough.',
          '**Avoid for MCP work:** anything under 7B and any general-purpose model without explicit tool-call training. They will emit malformed calls, the loop will stall, and you will blame the harness — but the harness is fine.',
          'For the head-to-head data, see [Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026).',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs Plain Function Calling: What Is the Difference',
        content:
          '**Function calling is what the model emits. MCP is the protocol that lets clients and tools find each other.** They live at different layers and they cooperate; one does not replace the other.',
        items: [
          '**Function calling** is the LLM-side capability: the model emits a structured JSON object describing the tool name and arguments. OpenAI tools, Anthropic tools, and Ollama\'s tool-call API all use the same idea with slightly different wire formats.',
          '**MCP** sits on top: it standardises how tools are described, discovered, invoked, and returned, across processes. A function-calling model on its own knows nothing about your filesystem; an MCP server makes filesystem operations available, the client maps them to the model\'s function-calling API, and the model can now call them.',
          '**The benefit is interop.** Write the filesystem server once; Claude Desktop, Goose, Cline, Continue.dev, and LM Studio all use it unchanged. Switch the model from Claude to Gemma 4; the server does not change.',
          '**You can do agents with raw function calling.** You will reimplement filesystem, database, and browser handlers per project. With MCP, those are out-of-the-box dependencies.',
          '**For one-off scripts, raw function calling is simpler.** For anything you want to reuse across projects or models, MCP is the lower-effort path within a few days.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Common Mistakes Setting Up Local MCP',
        items: [
          '**Mistake 1: using a small general-purpose model.** Models under 7B (and most 7B–13B general-purpose models without tool-call fine-tuning) emit malformed tool calls. Use a 27B+ tool-call-tuned model and stop fighting the harness.',
          '**Mistake 2: allow-listing your home directory.** "Just for testing" allow-listings of `~` survive into routine use. Create a dedicated `agent-workspace` from the start.',
          '**Mistake 3: leaving the database server in read/write mode.** A `DELETE` query authored by a confident agent on a real table is exactly the incident this avoids. Make `agent_ro` your default; spin up a separate writable role only for tasks that explicitly need it, and only for the duration of those tasks.',
          '**Mistake 4: auto-approving every tool.** The "approve all" toggle is convenient and dangerous. Auto-approve read tools (`read_file`, `list_directory`, `query`); always require approval for write/shell/PR tools.',
          '**Mistake 5: running a 32K-context model on multi-step browser work.** Page content is large; an agent that browses three pages can blow through 32K tokens before reasoning. Use a 128K-context model for browser-heavy tasks.',
          '**Mistake 6: assuming the agent has judgment.** It does not. The model has no concept of "this is the production database" or "this PR will deploy". Permissions are your only barrier.',
          '**Mistake 7: installing every reference server up front.** More tools = larger system prompt = slower and less reliable tool selection. Start with `filesystem`. Add the others only when you have a workflow that needs them.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Model Context Protocol Specification](https://modelcontextprotocol.io/) — Official spec, JSON-RPC schema, transport and lifecycle definitions.',
          '[modelcontextprotocol/servers GitHub repository](https://github.com/modelcontextprotocol/servers) — Reference servers (filesystem, sqlite, postgres, github, puppeteer, etc.) and their configuration documentation.',
          '[Goose Project Documentation](https://block.github.io/goose/) — CLI install, Ollama provider configuration, MCP server config syntax.',
          '[Ollama Model Library](https://ollama.com/library) — Available local models, tool-call support flags, and quantization levels referenced in this guide.',
          '[Cline GitHub Repository](https://github.com/cline/cline) — VS Code MCP client implementation, MCP servers panel.',
          '[Continue.dev Documentation](https://docs.continue.dev/) — `mcpServers` config block reference for the Continue.dev client.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'What is MCP and why does it matter for local AI?',
            a: 'Model Context Protocol (MCP) is an open JSON-RPC 2.0 protocol that lets a client (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) connect a language model to tool servers in a uniform way. It matters for local AI because it standardises the layer that turns a chat model into an agent — write a tool server once, use it under any client and any model, including a local Ollama model. Without MCP, every project reinvents file/database/browser tooling against its own client.',
          },
          {
            q: 'Does MCP work without Claude Desktop?',
            a: 'Yes. The protocol is open and entirely independent of Claude Desktop. As of 2026, Goose, Cline, Continue.dev, and LM Studio all ship MCP client implementations that work with local Ollama models. The reference servers (filesystem, sqlite, postgres, puppeteer, github) run unchanged under any compliant client.',
          },
          {
            q: 'Which local models support MCP best?',
            a: 'In May 2026, the most reliable picks are Gemma 4 27B, GLM-5.1 32B, Qwen3 32B (or Qwen3-Coder 30B for code-shaped work), and Llama 3.3 70B. All four have explicit tool-call training and emit clean function-calling JSON that MCP clients can route. Models under 7B (and most general-purpose models without tool-call fine-tuning) regularly produce malformed tool calls.',
          },
          {
            q: 'Is MCP safe — can the agent delete my files?',
            a: 'It can if you let it. Safety comes from how you configure servers, not from the protocol. The filesystem server only operates inside paths you allow-list — scope it to a dedicated `agent-workspace` directory. The database server runs read-only when you use a SELECT-only role. Always require explicit approval for write, shell, and PR tools; auto-approve only read operations. The audit log shows you exactly what the agent did after the fact.',
          },
          {
            q: 'Can I write my own MCP server?',
            a: 'Yes — and the SDKs make it straightforward. The official TypeScript and Python SDKs (`@modelcontextprotocol/sdk` and `mcp`) handle the JSON-RPC plumbing. You define tools with their JSON Schemas and a handler function, and the SDK exposes them over stdio. A single-purpose server (one or two tools wrapping an internal API) is a 50–100 line file.',
          },
          {
            q: 'Does MCP work on Windows?',
            a: 'Yes. Ollama, Goose, Cline, Continue.dev, and LM Studio all run on Windows. MCP servers run as Node.js or Python subprocesses; both runtimes are fully supported on Windows. The only platform-specific edge is path handling — use forward slashes in config or escape backslashes properly. Otherwise the experience is identical to macOS and Linux.',
          },
          {
            q: 'How do I sandbox MCP tool calls?',
            a: 'Three layers cover most of the risk. First, scope each server narrowly at the config level: filesystem to one directory, database to a read-only role, GitHub to a fine-grained PAT against test repos. Second, use the client\'s per-tool approval rules: auto-approve reads, require approval for writes. Third, keep the agent inside a `git stash`-friendly workspace so anything destructive is undoable through git. For sensitive tasks, run on a host with no network access except for endpoints the servers explicitly need.',
          },
          {
            q: 'Can MCP agents make HTTP requests?',
            a: 'Yes, through specific servers. The browser server (puppeteer or playwright) drives a real Chromium that makes whatever requests the model navigates to. Several third-party servers expose `http_get`/`http_post` tools more directly. The filesystem and database servers do not make network requests; they operate only on local resources.',
          },
          {
            q: 'Does MCP work with Ollama natively or do I need a wrapper?',
            a: 'Ollama itself does not speak MCP — it serves an OpenAI-compatible chat API. You need a client (Goose, Cline, Continue.dev, LM Studio) to bridge Ollama\'s chat API to MCP servers. The client routes the model\'s tool calls to the right MCP server and feeds results back into the conversation. From the user\'s perspective there is no extra setup beyond installing the client and pointing it at Ollama.',
          },
          {
            q: 'What is the difference between MCP and function calling?',
            a: 'Function calling is the LLM emitting structured JSON that names a tool and its arguments — it is a model capability. MCP is the protocol that lets tool servers and clients describe, discover, invoke, and return those tools across processes — it is an interop layer. They cooperate: the client converts MCP tool definitions into the model\'s function-calling format, the model emits a function call, the client maps the call back to an MCP server, and the server runs it. Without MCP you can still do function calling; you reimplement filesystem/database/browser handlers per project. With MCP, the same servers work under any client.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026) — head-to-head benchmarks for the models recommended above (Gemma 4, GLM-5.1, Qwen3, Llama 3.3).',
          '[Autonomous Local Agents Actually Work](/power-local-llm/autonomous-local-agents-actually-work) — a reality check on what a local MCP agent can and cannot reliably do over a long-running task.',
          '[Continue.dev vs Cline vs Aider: Best Local Coding Agent in 2026](/power-local-llm/continue-dev-vs-cline-vs-aider-local) — adjacent agent context for coding-shaped work; Cline and Continue.dev are also MCP clients.',
          '[Best Local LLMs in 2026](/local-llms/best-local-llms-2026) — model authority for the broader open-weights landscape.',
          '[Replace Zapier With Local AI Agents](/power-local-llm/replace-zapier-with-local-ai-agents) — workflow-automation framing for the same MCP stack.',
          '[Power Local LLM Hub](/power-local-llm) — full guide library.',
        ],
      },
    },
  },
}
