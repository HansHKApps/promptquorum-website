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
          'For structured prompting techniques that improve tool-call quality on any model, see [chain-of-thought prompting](/prompt-engineering/chain-of-thought-prompting).',
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
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-05-07',
    next_refresh_due: '2026-11-07',
    theme: 'Local AI Agents & Tool Use',
    title: 'Ollama mit Datenbanken und APIs über MCP verbinden: Lokale Agent-Einrichtung 2026',
    seoTitle: 'Ollama + MCP lokal: KI mit Datenbanken verbinden 2026',
    intro:
      'Model Context Protocol (MCP) ist die fehlende Schicht zwischen einem lokalen Ollama-Modell und dem Rest Ihres Rechners. Mit einer einzigen Konfigurationsdatei und einem Tool-Calling-Modell kann derselbe Agent eine Postgres-Datenbank abfragen, Dateien in einem isolierten Verzeichnis lesen und schreiben, einen Headless-Browser steuern und GitHub Pull Requests öffnen — alles läuft auf Ihrem Laptop, alles offline. Dieser Leitfaden führt Sie Schritt für Schritt durch das funktionierende Setup mit einem Sicherheitsmodell, das nicht davon ausgeht, dass Sie dem Modell vertrauen.',
    metaDescription:
      'Lokale KI-Agenten 2026 mit Ollama und MCP: Dateisystem, SQLite/Postgres, Browser, GitHub-Server. Funktionierende Configs + Sicherheitsmodell ohne Vertrauen.',
    twitterDescription:
      'Lokales Ollama + MCP = ein KI-Agent, der Dateien liest, Datenbanken abfragt und einen Browser steuert — komplett offline. Funktionierende Configs, die vier wichtigsten Server und ein Sicherheitsmodell, das dem Modell nicht vertraut.',
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
      'Entwickler und technisch versierte Anwender, die lokale LLMs über Ollama betreiben und ein Modell wollen, das tatsächlich handeln kann — Datenbanken abfragen, Dateien bearbeiten, Browser automatisieren — ohne irgendetwas an einen Cloud-Anbieter zu senden.',
    readTime: '15 Min. Lesezeit',
    educationalLevel: 'Advanced',
    primaryTerm: 'lokaler MCP-Agent',
    targetKeywords: [
      'mcp ollama deutsch',
      'lokaler mcp server einrichten',
      'model context protocol lokal',
      'ollama tool calling 2026',
      'lokaler ki agent mcp',
      'mcp ohne claude desktop',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) lässt ein lokales Ollama-Modell Tools aufrufen — eine Datei lesen, eine SQL-Abfrage ausführen, einen Web-Link anklicken, einen Pull Request öffnen — über eine standardisierte JSON-RPC-Schnittstelle, die jeder MCP-kompatible Client (Goose, Cline, Continue.dev, LM Studio in 2026) versteht. Das Protokoll ist offen, die Referenz-Server sind Open Source, und ab 2026 ist weder Claude Desktop noch ein Cloud-Konto erforderlich. Starten Sie Ollama, installieren Sie einen MCP-Client, legen Sie eine `mcp.json`-Konfiguration an, die die gewünschten Server benennt, und ein Tool-Calling-Modell (Gemma 4, GLM-5.1, Qwen3, Llama 3.3) wird zu einem Agenten, der auf Ihrer Maschine arbeitet — mit Berechtigungen, die Sie kontrollieren. Der Trick ist das Sicherheitsmodell: Genehmigen Sie Schreibwerkzeuge niemals automatisch, beschränken Sie den Dateisystemzugriff auf ein einziges Verzeichnis und halten Sie den Datenbankserver standardmäßig im Read-only-Modus.**',
    quickAnswerTop: {
      de: {
        question: 'Kann ich KI-Agenten lokal mit MCP und Ollama 2026 betreiben?',
        answer:
          'Ja — und das Setup ist mittlerweile klein genug für einen Nachmittag. Starten Sie Ollama mit einem Tool-Calling-Modell (Gemma 4, GLM-5.1, Qwen3 oder Llama 3.3 70B), installieren Sie einen MCP-fähigen Client (Goose ist die direkteste CLI; Cline, Continue.dev und LM Studio haben Anfang 2026 alle MCP-Unterstützung hinzugefügt) und ergänzen Sie MCP-Server für die gewünschten Fähigkeiten — `filesystem` für Dateien, `sqlite` oder `postgres` für Datenbanken, `puppeteer` oder `playwright` für Browser-Automatisierung, `github` für Repository-Verwaltung. Es ist dasselbe Protokoll, das auch Claude Desktop nutzt; der einzige Unterschied sind das Modell und der Client. Bleiben Sie sicher, indem Sie den Filesystem-Server auf ein einziges Verzeichnis beschränken, den Datenbankserver standardmäßig read-only halten und Schreib- oder Shell-Tools niemals automatisch genehmigen.',
        bullets: [
          'MCP ist offen und funktioniert vollständig lokal — kein Claude Desktop, kein Anthropic-Konto, keine Cloud-Aufrufe nötig.',
          'Ollama liefert das Modell; ein MCP-Client (Goose, Cline, Continue.dev, LM Studio) verbindet Ollama mit MCP-Servern über JSON-RPC.',
          'Vier Referenz-Server decken die meisten realen Workflows ab: Filesystem, SQLite/Postgres, Puppeteer/Playwright (Browser) und GitHub.',
          'Tool-Call-Zuverlässigkeit ist eine Eigenschaft des Modells: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B und Llama 3.3 70B verarbeiten MCP sauber. Modelle unter 7B geben regelmäßig fehlerhafte Tool-Calls aus.',
          'Sicherheitsmodell: Filesystem-Zugriff auf ein Verzeichnis beschränken, Datenbankserver read-only laufen lassen und jeden Schreib- oder Shell-Tool-Aufruf hinter einer expliziten Freigabe halten.',
          'Kosten: 0 € an API-Ausgaben, aber Tokens werden lokal verbraucht — Agent-Loops sind Token-intensiv, nutzen Sie also ein Modell mit 32K+ Context und eine Maschine, die es in brauchbarer Geschwindigkeit ausführen kann.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Wichtigste Erkenntnisse', anchor: '#key-takeaways' },
      { label: 'Schnelle Fakten', anchor: '#quick-facts' },
      { label: 'Was MCP freischaltet', anchor: '#what-mcp-unlocks' },
      { label: 'Vergleich der MCP-Server', anchor: '#server-comparison' },
      { label: 'Architektur: Wie die Teile zusammenpassen', anchor: '#architecture' },
      { label: 'Setup: Ollama + Goose in 15 Minuten', anchor: '#setup' },
      { label: 'Filesystem-Server', anchor: '#filesystem-server' },
      { label: 'SQLite- und Postgres-Server', anchor: '#database-server' },
      { label: 'Browser-Server (Puppeteer / Playwright)', anchor: '#browser-server' },
      { label: 'GitHub-Server', anchor: '#github-server' },
      { label: 'Sicherheitsmodell', anchor: '#security-model' },
      { label: 'Lokales MCP vs. Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'Auswahl eines Tool-Calling-Modells', anchor: '#picking-model' },
      { label: 'MCP vs. einfaches Function Calling', anchor: '#mcp-vs-function-calling' },
      { label: 'Im DACH-Kontext', anchor: '#dach-kontext' },
      { label: 'Häufige Fehler', anchor: '#common-mistakes' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Weiterführende Literatur', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP ist ein JSON-RPC-2.0-Protokoll für Tools.** Ein Modell (über einen Client) verbindet sich mit einem oder mehreren MCP-Servern; jeder Server stellt Tools (aufrufbare Funktionen), Resources (lesbare Daten) und Prompts (Templates) bereit. Das Wire-Format ist identisch, ob der Client nun Claude Desktop, Goose, Cline, Continue.dev oder LM Studio ist.',
          '**Ollama spricht MCP nicht direkt — ein MCP-Client umhüllt Ollama.** Goose (Block) ist die einfachste Open-Source-CLI mit nativer Ollama-Unterstützung; Cline, Continue.dev und LM Studio haben Anfang 2026 MCP-Client-Unterstützung ergänzt.',
          '**Vier Referenz-Server decken die meisten Anwendungsfälle ab:** `filesystem` (Lesen/Schreiben in einem isolierten Verzeichnis), `sqlite` und `postgres` (Datenbankabfragen, standardmäßig read-only), `puppeteer` oder `playwright` (steuern einen Headless-Browser) und `github` (Repo- und PR-Verwaltung mit einem Personal Access Token).',
          '**Tool-Call-Zuverlässigkeit skaliert mit Modellgröße und Training.** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B und Llama 3.3 70B verarbeiten MCP sauber bei Q4_K_M. Modelle unter 7B geben regelmäßig fehlerhafte Tool-Calls aus und blockieren den Loop.',
          '**Das Sicherheitsmodell setzt voraus, dass das Modell nicht vertrauenswürdig ist.** Beschränken Sie den Filesystem-Server auf ein einziges Verzeichnis, betreiben Sie den Datenbankserver mit einer read-only-Rolle, genehmigen Sie `execute_command` oder `write_file` niemals automatisch und prüfen Sie das Audit-Log nach langen Sessions.',
          '**Lokales MCP vs. Claude Desktop:** identisches Protokoll, identisches Server-Ökosystem. Der lokale Stack tauscht das Cloud-Modell gegen ein Offline-Modell — Privatsphäre, keine Token-Kosten und keine Rate-Limits, gegen ein etwas weniger schlaues Modell und die Verantwortung für die Sicherheitskonfiguration.',
          '**Die Kosten betragen 0 € an API-Gebühren, sind aber bei Tokens real.** Agent-Loops können 30K–80K Tokens für eine einzige Multi-Step-Aufgabe verbrauchen. Mindestens ein Modell mit 32K Context; 128K ist komfortabel.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Protokoll:** JSON-RPC 2.0 über stdio (lokaler Subprozess) oder HTTP/SSE (remote). Lokale Agenten nutzen fast ausschließlich stdio.',
          '**Gepflegt von:** Anthropic (Open-Source-Spezifikation); Referenz-Server werden in `modelcontextprotocol/servers` auf GitHub gepflegt, plus ein wachsendes Drittanbieter-Ökosystem.',
          '**Lokale Clients in 2026:** Goose (Block), Cline (VS-Code-Erweiterung), Continue.dev (VS Code/JetBrains), LM Studio (Desktop-App), plus mehrere CLI-Tools.',
          '**Kompatible Ollama-Modelle:** jedes Modell mit nativem Tool-Call-Training. Im Mai 2026: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Standard-Transports:** stdio für lokale Prozesse; HTTP/SSE nur, wenn ein Server über Maschinen oder Agenten hinweg geteilt werden muss.',
          '**Konfiguration in einer Datei:** `~/.config/goose/config.yaml` (Goose), der MCP-Block von `~/.continue/config.json` (Continue.dev) oder `mcpServers` in der Settings-UI von Cline. Gleiche Form überall: Servername, Command, Args, Env-Vars.',
          '**Kein Claude Desktop nötig.** Das Protokoll ist älter als Claude Desktops Exklusivitätsanspruch; jeder Referenz-Server ist MIT/Apache-lizenziert und läuft gegen jeden konformen Client.',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'Was MCP für ein lokales Modell tatsächlich freischaltet',
        content:
          '**Ein lokales LLM ohne Tools kann nur mit Text antworten. Mit MCP kann dasselbe Modell auf Ihrer Maschine handeln.** Die Verschiebung ist der Unterschied zwischen einem Chatbot und einem Agenten.',
        items: [
          '**„Finde jedes TODO in diesem Repo, gruppiere sie nach Datei und schreibe eine Markdown-Zusammenfassung in `notes/todos.md`."** — der `filesystem`-Server liest, das Modell gruppiert, derselbe Server schreibt. Ein einziger Round-Trip von Anfang bis Ende.',
          '**„Zeig mir die Top-10-Kunden nach Umsatz in diesem Quartal und visualisiere es."** — der `postgres`-Server führt das SQL aus (read-only-Rolle), das Modell fasst zusammen, das Modell schreibt eine CSV über `filesystem` für Ihr Charting-Tool.',
          '**„Öffne die Hacker-News-Startseite, finde die drei wichtigsten KI-Stories, fasse sie zusammen und füge sie meiner Leseliste hinzu."** — der `puppeteer`-Server steuert einen Headless-Browser, das Modell extrahiert und fasst zusammen, `filesystem` hängt an.',
          '**„Öffne einen Draft-PR mit dem Titel `chore: bump deps` gegen meinen Fork und verlinke den fehlgeschlagenen CI-Run."** — der `github`-Server erstellt den PR, holt den Run und schreibt den Link in die Beschreibung.',
          '**„Schau dir die letzten 100 Zeilen von `events.db` an und sag mir, welche User-IDs für den neuen Error-Spike verantwortlich sind."** — der `sqlite`-Server fragt ab; das Modell schließt; Sie lesen die Antwort im Chat-Panel.',
          'Jeder dieser Vorgänge ist ein Satz-zu-Aktion-Workflow, der zuvor entweder ein Cloud-Modell mit gehosteten Tools oder ein selbst geschriebenes Skript erforderte. MCP ist die Schicht, die es Ihnen ermöglicht, dieselben Server über Clients hinweg und dasselbe Modell über Server hinweg wiederzuverwenden.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Wie die vier am häufigsten verwendeten MCP-Server abschneiden',
        content:
          'Die unten aufgeführten Referenz-Server decken den Long-Tail von „Ich möchte, dass mein lokales Modell tatsächlich etwas tut" ab. Alle sind Open Source und laufen als lokale Subprozesse, die von Ihrem MCP-Client gestartet werden.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Beginnen Sie mit dem Filesystem-Server (5 Minuten, geringes Risiko), fügen Sie einen SQLite-Server für Datenarbeit hinzu, ergänzen Sie einen Browser-Server nur bei Bedarf und nehmen Sie GitHub erst dazu, wenn Sie dem Modell auf Ihrer Maschine vertrauen.',
          },
          {
            type: 'plain-terms',
            text: 'Vier Server bewältigen 90 % dessen, was Sie von einem lokalen Agenten erwarten. Der Filesystem-Server liest und schreibt Dateien in einem von Ihnen gewählten Ordner. Der SQLite- oder Postgres-Server führt Abfragen gegen eine Datenbank aus. Der Browser-Server steuert ein echtes Chromium-Fenster, sodass das Modell Seiten lesen kann, die JavaScript benötigen. Der GitHub-Server öffnet Issues und PRs gegen Ihre Repos. Sie lassen sich alle mit einem Befehl installieren, laufen alle als Subprozesse auf Ihrer eigenen Maschine, und keiner ruft das Internet auf, sofern er es nicht ausdrücklich muss (der Browser tut es, die anderen nicht).',
          },
        ],
        columns: ['MCP-Server', 'Was er ermöglicht', 'Setup-Aufwand', 'Risiko', 'Geeignet für'],
        rows: [
          { 'MCP-Server': 'Filesystem', 'Was er ermöglicht': 'Lesen und Schreiben von Dateien in einem isolierten Verzeichnis', 'Setup-Aufwand': 'Einfach (ein Pfad zur Allow-List)', 'Risiko': 'Mittel — eng beschränken', 'Geeignet für': 'Persönliche Automatisierung, Notizen, Repo-Zusammenfassungen' },
          { 'MCP-Server': 'SQLite', 'Was er ermöglicht': 'Abfragen einer lokalen SQLite-Datenbankdatei', 'Setup-Aufwand': 'Einfach (Pfad zur .db-Datei)', 'Risiko': 'Niedrig bei read-only; mittel bei Schreibzugriff', 'Geeignet für': 'Datenexploration, Log-Analyse, Prototyping' },
          { 'MCP-Server': 'Postgres', 'Was er ermöglicht': 'Abfragen einer Postgres-Datenbank über Connection-String', 'Setup-Aufwand': 'Mittel (Rolle + URL)', 'Risiko': 'Mittel — read-only-Rolle nutzen', 'Geeignet für': 'Produktive Datenexploration, Reporting, BI-Prototypen' },
          { 'MCP-Server': 'Puppeteer / Playwright', 'Was er ermöglicht': 'Steuert ein Headless- oder sichtbares Chromium für Browsing, Scraping, Formularausfüllen', 'Setup-Aufwand': 'Schwer (Browser-Binaries, Selektoren, Latenz)', 'Risiko': 'Hoch — kann Formulare absenden, alles anklicken', 'Geeignet für': 'Recherche, Scraping, Regressionstests' },
          { 'MCP-Server': 'GitHub', 'Was er ermöglicht': 'Repos auflisten, Dateien lesen, Issues und PRs öffnen', 'Setup-Aufwand': 'Einfach (PAT in Env-Var)', 'Risiko': 'Mittel — Token auf bestimmte Repos scopen', 'Geeignet für': 'Dev-Workflows, Triage, PR-Drafts' },
          { 'MCP-Server': 'Custom', 'Was er ermöglicht': 'Alles, was sich als JSON-RPC-Tools ausdrücken lässt', 'Setup-Aufwand': 'Schwer (eigenen Server schreiben)', 'Risiko': 'Variabel', 'Geeignet für': 'Interne APIs, Nischensysteme, Glue-Code' },
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Wie die Teile zusammenpassen',
        content:
          '**Drei Prozesse, ein gemeinsames Protokoll.** Das Modell lebt in Ollama, der Client spricht MCP, und jeder Server stellt eine kleine Menge an Tools bereit. Jeder Tool-Call hopst Client → Server, läuft lokal und liefert JSON zurück.',
        items: [
          '**Ollama** läuft als Hintergrunddienst auf `127.0.0.1:11434` und liefert das Modell über eine OpenAI-kompatible API. Es weiß nicht, was MCP ist — es beantwortet einfach Chat-Completions und gibt Tool-Calls aus, wenn das Modell sie anfordert.',
          '**MCP-Client** (Goose, Cline, Continue.dev, LM Studio) ist die Brücke. Er spricht mit Ollama für das Modell und mit MCP-Servern für die Tools. Wenn das Modell einen Tool-Call ausgibt, leitet der Client ihn an den richtigen Server, holt das Ergebnis und füttert es zurück in das Gespräch.',
          '**MCP-Server** sind unabhängige Subprozesse, einer pro Fähigkeit. Sie sprechen JSON-RPC 2.0 über stdio. Jeder Server bewirbt eine Liste von Tools, Resources und Prompts; der Client führt sie zur Tool-Oberfläche zusammen, die dem Modell präsentiert wird.',
          '**Stdio-Transport hält alles lokal.** Ein Server wird vom Client gestartet, kommuniziert über seine stdin/stdout und beendet sich, wenn der Client beendet wird. Nichts geht über das Netzwerk, sofern der Server nicht selbst eine Verbindung öffnet (der Browser-Server tut das; Filesystem- und Datenbankserver nicht).',
          '**Das Modell sieht eine flache Tool-Liste.** Aus Sicht des Modells gibt es keine Server — nur eine Liste von Tool-Namen wie `filesystem.read_file`, `sqlite.query`, `puppeteer.navigate`. Der Client übernimmt das Routing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Architektur ist identisch zu der von Claude Desktop. Die Unterschiede sind das Modell (ein lokales Ollama-Modell statt Claude) und der Client (Goose/Cline/Continue.dev/LM Studio statt Claude Desktop). Die MCP-Server sind dieselben Server — Sie können den Filesystem-Server heute unter Claude Desktop laufen lassen und er wird morgen unverändert unter Goose laufen.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Setup: Ollama + Goose in 15 Minuten',
        content:
          '**Goose ist 2026 der einfachste Weg zu einem funktionierenden lokalen MCP-Agenten.** Es ist eine Open-Source-CLI von Block mit nativer Ollama-Unterstützung, einer interaktiven Chat-Oberfläche und einer einzigen Konfigurationsdatei für alle Ihre MCP-Server. Continue.dev, Cline und LM Studio funktionieren ebenfalls — Goose hat den geringsten Setup-Aufwand für den ersten Lauf.',
        items: [
          '**Schritt 1 — Ollama installieren.** Download von `ollama.com/download` (macOS/Windows/Linux). Bestätigen Sie, dass der Dienst läuft, mit `curl http://127.0.0.1:11434/api/tags`.',
          '**Schritt 2 — ein Tool-Calling-Modell ziehen.** Wählen Sie aus Gemma 4 27B (`gemma4:27b`), GLM-5.1 32B (`glm5:32b`), Qwen3 32B (`qwen3:32b`) oder Llama 3.3 70B (`llama3.3:70b`). 16 GB Unified Memory oder 12 GB VRAM bewältigen 27B–32B bei Q4_K_M komfortabel.',
          '**Schritt 3 — Goose installieren.** `pipx install goose-ai` (macOS, Linux) oder Installer von der Goose-Releases-Seite herunterladen. Die CLI installiert sich als `goose`.',
          '**Schritt 4 — Ollama als Provider konfigurieren.** Führen Sie `goose configure` aus, wählen Sie `ollama` als Provider, setzen Sie das Modell auf das gezogene und den Host auf `http://127.0.0.1:11434`. Goose schreibt das in `~/.config/goose/config.yaml`.',
          '**Schritt 5 — den Filesystem-MCP-Server hinzufügen.** Bearbeiten Sie `~/.config/goose/config.yaml`, um einen `mcpServers`-Block zu ergänzen (Konfigurationsbeispiel unten). Starten Sie `goose session` neu und bitten Sie es, Dateien in Ihrem Test-Verzeichnis aufzulisten. Der erste Turn bestätigt, dass der Server angebunden ist.',
          '**Schritt 6 — mit einer echten Aufgabe verifizieren.** Probieren Sie `goose session` und fragen Sie „Erstelle eine Liste jeder Markdown-Datei in `notes/`, mit Titel und Wortanzahl, und schreibe das Ergebnis in `notes/index.md`." Wenn der Agent liest, zusammenfasst und zurückschreibt, funktioniert der Loop.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:27b\n\n# 2. Install Goose\npipx install goose-ai\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:27b\n# Host:     http://127.0.0.1:11434\n\n# 4. Start a session — Goose reads ~/.config/goose/config.yaml\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie bereits Cline oder Continue.dev nutzen, überspringen Sie Goose und verwenden Sie diese — beide haben in ihren Anfang-2026-Releases MCP-Server-Unterstützung erhalten. Das „MCP Servers"-Panel von Cline installiert Referenz-Server mit einem Klick; Continue.dev liest `mcpServers` aus `~/.continue/config.json` (gleiche Form wie der Goose-Config-Block unten). Modell und Server sind dieselben; nur die Host-Anwendung ändert sich.',
          },
        ],
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem-Server: Lesen und Schreiben in einem isolierten Verzeichnis',
        content:
          '**Der Filesystem-Server ist der erste, den Sie installieren, und der einfachste, sicher zu beschränken.** Er stellt `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` und `create_directory` bereit — alle auf einen oder mehrere allow-listed Pfade beschränkt.',
        items: [
          '**Installation:** Der Referenz-Server ist `@modelcontextprotocol/server-filesystem`, ausgeführt über `npx -y` (keine globale Installation nötig). Goose, Cline und Continue.dev starten ihn alle automatisch aus dem Config-Block heraus.',
          '**Pfade allow-listen:** Der Server akzeptiert ein oder mehrere Verzeichnis-Argumente und verweigert Operationen außerhalb davon. Geben Sie immer einen expliziten, schmalen Pfad an — niemals `~` oder `/`.',
          '**Bereitgestellte Tools:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (zeilenbasierte Ersetzungen), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. Das Modell sieht das als `filesystem.read_file` und so weiter.',
          '**Quality-of-Life:** `directory_tree` liefert einen JSON-Baum; ideal, damit das Modell sich orientiert, bevor es bestimmte Dateien liest. `search_files` macht eine grep-ähnliche rekursive Suche.',
          '**Risikoprofil:** Der Server respektiert die Allow-List, aber innerhalb dieser Liste hat er vollen Lese-/Schreibzugriff. Behandeln Sie die Allow-List als die einzige Barriere und wählen Sie ein dediziertes Workspace-Verzeichnis statt Ihres Home-Ordners.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  filesystem:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-filesystem"\n      - "/Users/you/agent-workspace"\n    env: {}',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Allow-listen Sie niemals `/` oder Ihr Home-Verzeichnis. Erstellen Sie einen dedizierten `agent-workspace`-Ordner, legen Sie Kopien der Dateien hinein, die der Agent berühren soll, und lassen Sie ihn nur in diesem Ordner arbeiten. Wenn der Agent etwas falsch macht, stoppt der Schaden bei einem Verzeichnis.',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'SQLite- und Postgres-Server: Echte Daten abfragen',
        content:
          '**Die Datenbankserver verwandeln das Modell in einen Junior-Analysten, der Fragen mit echten Daten beantworten kann — vorausgesetzt, Sie halten ihn read-only.** Beide Referenz-Server liefern ein `query`-Tool und (optional) ein `write_query`-Tool.',
        items: [
          '**SQLite-Server (`@modelcontextprotocol/server-sqlite`)** akzeptiert einen Pfad zu einer `.db`-Datei. Nützlich für Log-Analyse, Schema-Prototyping und das Erkunden von Exporten ohne Datenbank-Aufsetzen.',
          '**Postgres-Server (`@modelcontextprotocol/server-postgres`)** akzeptiert einen Connection-String. Das empfohlene Muster ist, eine dedizierte read-only-Rolle für den Agenten zu erstellen und deren Connection-String zu nutzen.',
          '**Bereitgestellte Tools:** `query` (nur SELECT, wenn read-only konfiguriert), `list_tables`, `describe_table`. Der Postgres-Server ergänzt `list_schemas`. Manche Forks fügen `write_query` hinzu — lassen Sie es deaktiviert, sofern Sie dem Modell auf dieser Datenbank nicht vertrauen.',
          '**Schema-Awareness:** Bitten Sie den Agenten „liste die Tabellen auf und beschreibe die fünf am häufigsten genutzten", bevor Sie analytische Fragen stellen — das Modell ist viel präziser, wenn es `describe_table` aufgerufen hat, als wenn es Spaltennamen rät.',
          '**Kosten:** Abfragen treffen Ihre Datenbank direkt. Ein schlecht formuliertes `SELECT *` aus einer 100-Mio.-Zeilen-Tabelle ist hier derselbe Unfall, wie er von einem Menschen wäre — halten Sie die Rolle in einem separaten Connection-Pool mit einem Statement-Timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  sqlite:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-sqlite"\n      - "--db-path"\n      - "/Users/you/data/events.db"\n    env: {}\n\n  postgres:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-postgres"\n      - "postgresql://agent_ro@127.0.0.1:5432/analytics"\n    env:\n      PGPASSWORD: "${PG_AGENT_PASSWORD}"',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'Erstellen Sie die Postgres-Rolle einmal und geben Sie dem Agenten nichts darüber hinaus: `CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` Setzen Sie dann `statement_timeout = 30s` für die Rolle. Der Agent kann nicht schreiben, nicht droppen und nicht ewig laufen.',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'Browser-Server: Chromium mit Puppeteer oder Playwright steuern',
        content:
          '**Der Browser-Server ist der mächtigste und der gefährlichste der vier.** Er startet ein echtes Chromium und stellt Navigation, Klicks, Formularausfüllen und Screenshots bereit — also kann er alles tun, was Sie in einem Browser tun können, einschließlich Formulare absenden.',
        items: [
          '**Referenz-Server:** `@modelcontextprotocol/server-puppeteer` (leichter, standardmäßig headless) und `@modelcontextprotocol/server-playwright` (schwerer, unterstützt mehrere Browser). Für lokale Agenten reicht Puppeteer.',
          '**Bereitgestellte Tools:** `navigate`, `screenshot`, `click`, `fill`, `select`, `evaluate` (JavaScript ausführen), `get_page_content`. Das Modell nutzt `get_page_content`, um strukturierten Text zu lesen, und `screenshot` zur visuellen Bestätigung.',
          '**Latenz:** Echte Browser-Sessions brauchen 1–5 Sekunden pro Aktion. Ein mehrstufiger Browse-Vorgang verbraucht leicht 30–60 Sekunden und Zehntausende Tokens, weil Seiteninhalte groß sind. Nutzen Sie ein Context-Fenster von 32K+.',
          '**Selektoren:** Das Modell muss CSS-Selektoren auswählen. Kleinere Modelle raten oft falsch; ein 27B+-Tool-Calling-Modell beherrscht gängige Muster zuverlässig. Halten Sie Aufgaben fokussiert — „extrahiere den Titel und den ersten Absatz dieser URL" ist viel zuverlässiger als „navigiere die Seite und finde die Kontaktseite".',
          '**Die richtigen Use Cases:** Recherche (Seite öffnen, zusammenfassen, an Notizen anhängen), Regressionstests (navigieren, klicken, screenshot) und Formularausfüllen auf Seiten, die Sie kontrollieren. Die falschen Use Cases: alles, wo ein Fehlklick im Live-Web Konsequenzen hat.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  puppeteer:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-puppeteer"\n    env:\n      PUPPETEER_HEADLESS: "true"\n      # Block obviously dangerous endpoints at the OS firewall level\n      # rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Geben Sie dem Browser-Server niemals Anmeldedaten. Wenn Sie eine authentifizierte Session brauchen, übergeben Sie dem Agenten ein vorab authentifiziertes Browser-Profil (über `userDataDir`) und lassen Sie ihn niemals zu Hochrisiko-Seiten navigieren (Banking, E-Mail, Cloud-Konsolen, Zahlungsformulare). Das Modell hat kein Urteilsvermögen darüber, was ein Button tut — es sieht Text und klickt. Behandeln Sie es wie einen Praktikanten ohne Kontext und ohne Korrekturmöglichkeit.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub-Server: Repos, Issues und PRs aus einem lokalen Modell',
        content:
          '**Der GitHub-Server verwandelt natürlichsprachliche Repo-Arbeit in API-Calls.** Er ist der einfachste der vier zu konfigurieren und der am einfachsten über die Berechtigungen eines Personal Access Tokens (PAT) eng zu beschränken.',
        items: [
          '**Installation:** `@modelcontextprotocol/server-github`, ausgeführt mit einem PAT in der Env-Var `GITHUB_PERSONAL_ACCESS_TOKEN`. Das Token ist die einzige Authentifizierung — der Server selbst hat keine separate Konfiguration.',
          '**Bereitgestellte Tools:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, plus Dutzende weitere. Die volle Oberfläche ist groß; die meisten Aufgaben nutzen 5–10 Tools.',
          '**Scopen Sie das PAT.** Verwenden Sie ein Fine-Grained-PAT, gescopet auf bestimmte Repos mit den minimal nötigen Berechtigungen (Read zum Browsen, Write für PR-/Issue-Erstellung). Verwenden Sie kein klassisches PAT mit `repo` für einen experimentellen Agenten.',
          '**Reale Workflows:** Triage („lies die letzten 20 offenen Issues, gruppiere sie, entwirf Labels"), Drafting („lies die README und öffne einen PR, der Tippfehler behebt"), Reporting („welche PRs sind diese Woche stale").',
          '**Risikoprofil:** Der Agent kann Issues und PRs erstellen, kommentieren und (mit Schreibrechten) Commits pushen. Deaktivieren Sie Merge-Tools, sofern Sie nicht sowohl dem Modell als auch dem Workflow vertrauen — ein versehentlich gemergter PR in einem Fine-Grained-PAT-Repo ist wiederherstellbar, aber nur, wenn Sie es schnell bemerken.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  github:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-github"\n    env:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n      # Fine-grained PAT scoped to one or two test repos,\n      # not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'Ein Sicherheitsmodell, das dem Modell nicht vertraut',
        content:
          '**Das richtige mentale Modell ist „das LLM ist ein nicht vertrauenswürdiger Praktikant mit den Schlüsseln, die Sie ihm geben".** Fähigkeiten kommen von den Servern und den Oberflächen, die Sie allow-listen — nicht vom Urteilsvermögen des Modells.',
        items: [
          '**Filesystem-Server auf ein Verzeichnis beschränken.** Niemals `~` oder `/`. Wählen Sie einen `agent-workspace/`-Ordner und legen Sie Kopien der Dateien hinein, die der Agent berühren muss. Wenn der Agent etwas falsch macht, ist der schlimmste Fall ein Ordner.',
          '**Datenbankserver standardmäßig read-only betreiben.** Eine dedizierte `agent_ro`-Rolle mit `SELECT`-only-Grants und einem 30-Sekunden-Statement-Timeout entfernt eine ganze Klasse von Vorfällen.',
          '**Jeden Schreib- oder Shell-Tool-Aufruf hinter eine explizite Freigabe stellen.** Goose, Cline und Continue.dev unterstützen jeweils Per-Tool-Freigaberegeln. Lese-Tools standardmäßig erlauben; Freigabe verlangen für `write_file`, `edit_file`, `execute_command`, `create_pull_request` und jede Browser-Aktion, die Formulare absendet.',
          '**Audit-Log nutzen.** Jeder MCP-Client loggt Tool-Calls und Ergebnisse. Nach einer langen Session den Log scannen: Sie werden das Modell dabei erwischen, wie es Dinge versucht, die Sie nicht erwartet haben (manchmal harmlos, manchmal eine Berechtigungsverschärfung wert).',
          '**Token-Zugriff für Drittanbieter eng beschränken.** GitHub-PATs auf zwei Test-Repos gescopet. Postgres-Rollen read-only. Browser-Sessions ohne Anmeldedaten. Das Modell wird irgendwann Dinge versuchen, die Sie nicht antizipiert haben; die Grenzen dessen, was es tun kann, sollten nicht davon abhängen, dass das Modell es richtig macht.',
          '**Air-Gap den Agenten für sensible Datenarbeit.** Deaktivieren Sie Netzwerkzugriff auf dem Host während des Agent-Laufs (oder nutzen Sie einen Network-Namespace), wenn Sie mit privaten Daten arbeiten. Der lokale Stack hat zwar nichts, was die Maschine verlässt, aber Defense-in-Depth fängt Fehler in Drittanbieter-Servern.',
          '**Behandeln Sie die MCP-Server-Auswahl wie jede Dependency-Wahl.** Die Referenz-Server sind gut gepflegt; viele Drittanbieter-Server sind es nicht. Lesen Sie den Code eines Servers, bevor Sie einen mit Anmeldedaten installieren.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Eine nützliche Failure-Recovery-Gewohnheit: Vor einer nicht-trivialen Agent-Aufgabe `git stash` (oder `git checkout -b agent/<task>`). Nach der Aufgabe das Diff prüfen, behalten, was Sie wollen, und den Rest verwerfen. Das ist dieselbe Praxis, die lange Cline- oder Aider-Sessions sicher macht — siehe den [Vergleich Continue.dev vs. Cline vs. Aider](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) für das breitere Muster.',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'Lokales MCP vs. Claude Desktop: Was sich ändert, was bleibt',
        content:
          '**Das Protokoll und die Server sind identisch. Nur Modell und Client ändern sich.** Das ist der ganze Grund, warum MCP wichtig ist — Ihre Tooling-Investition portiert sauber zwischen lokalen und Cloud-Setups.',
        columns: ['Schicht', 'Claude Desktop', 'Lokales Ollama + Goose'],
        rows: [
          { 'Schicht': 'Modell', 'Claude Desktop': 'Claude (Anthropic, Cloud)', 'Lokales Ollama + Goose': 'Gemma 4, GLM-5.1, Qwen3 oder Llama 3.3 (lokal)' },
          { 'Schicht': 'Client', 'Claude Desktop': 'Claude-Desktop-App', 'Lokales Ollama + Goose': 'Goose, Cline, Continue.dev oder LM Studio' },
          { 'Schicht': 'Server', 'Claude Desktop': 'Gleiche MCP-Server', 'Lokales Ollama + Goose': 'Gleiche MCP-Server' },
          { 'Schicht': 'Protokoll', 'Claude Desktop': 'MCP (JSON-RPC 2.0)', 'Lokales Ollama + Goose': 'MCP (JSON-RPC 2.0)' },
          { 'Schicht': 'Kosten pro Anfrage', 'Claude Desktop': 'Token-basierte API-Kosten', 'Lokales Ollama + Goose': '0 € — lokale Inferenz' },
          { 'Schicht': 'Privatsphäre', 'Claude Desktop': 'Konversation geht zu Anthropic', 'Lokales Ollama + Goose': 'Bleibt auf der Maschine' },
          { 'Schicht': 'Rate-Limits', 'Claude Desktop': 'API-Rate-Limits gelten', 'Lokales Ollama + Goose': 'Nur durch Hardware-Durchsatz begrenzt' },
          { 'Schicht': 'Tool-Call-Qualität', 'Claude Desktop': 'Best-in-Class', 'Lokales Ollama + Goose': 'Gut mit 27B+-Modellen; verschlechtert sich schnell unter 7B' },
          { 'Schicht': 'Internet erforderlich', 'Claude Desktop': 'Ja', 'Lokales Ollama + Goose': 'Nur wenn ein Server selbst etwas abruft (z. B. Browser)' },
          { 'Schicht': 'Setup-Zeit', 'Claude Desktop': '5 Minuten', 'Lokales Ollama + Goose': '15 Minuten (einmalig)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'Auswahl eines Tool-Calling-Modells für lokales MCP',
        content:
          '**Tool-Call-Zuverlässigkeit skaliert mit Modellgröße und Training, nicht mit dem Harness.** Ein Modell, das in Cline fehlerhafte Tool-Calls ausgibt, wird in Goose aus demselben Grund fehlerhafte Tool-Calls ausgeben.',
        items: [
          '**Gemma 4 27B (`gemma4:27b`)** — Googles Tool-Call-Training ist Best-in-Class für die Größe. Passt in 16 GB Unified Memory oder 24 GB VRAM bei Q4_K_M. Gutes allgemeines Reasoning; etwas konservativ bei verketteten Tool-Calls.',
          '**GLM-5.1 32B (`glm5:32b`)** — Zhipus Modell hat sehr starke Tool-Call-Zuverlässigkeit und ein 128K-Context-Fenster ab Werk. Etwas schwerer als Gemma 4; passt komfortabel auf eine 24-GB-GPU.',
          '**Qwen3 32B (`qwen3:32b`)** — gut ausbalanciert; das dichte 32B verarbeitet MCP sauber und ist in einer langen Agent-Schleife glücklich. **Qwen3-Coder 30B (`qwen3-coder:30b`)** ist die beste Wahl, wenn Ihre Agent-Arbeit codeförmig ist.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — die höchste Decke, aber die schwerste. 48 GB+ Unified Memory oder 2× 24 GB GPUs bei Q4_K_M. Nur einsetzen, wenn Ihre Hardware das verträgt; die kleineren Modelle reichen meist.',
          '**Vermeiden Sie für MCP-Arbeit:** alles unter 7B und jedes general-purpose-Modell ohne explizites Tool-Call-Training. Sie geben fehlerhafte Calls aus, der Loop blockiert, und Sie werden den Harness beschuldigen — aber der Harness ist in Ordnung.',
          'Für strukturierte Prompting-Techniken, die die Tool-Call-Qualität bei jedem Modell verbessern, siehe [Chain-of-Thought Prompting](/prompt-engineering/chain-of-thought-prompting?lang=de).',
          'Für Head-to-Head-Daten siehe [Beste lokale Modelle für Tool Calling 2026](/de/power-local-llm/best-local-models-tool-calling-2026).',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs. einfaches Function Calling: Was ist der Unterschied',
        content:
          '**Function Calling ist das, was das Modell ausgibt. MCP ist das Protokoll, mit dem sich Clients und Tools finden.** Sie leben auf unterschiedlichen Ebenen und kooperieren; eines ersetzt das andere nicht.',
        items: [
          '**Function Calling** ist die LLM-seitige Fähigkeit: Das Modell gibt ein strukturiertes JSON-Objekt aus, das Tool-Namen und Argumente beschreibt. OpenAI Tools, Anthropic Tools und die Tool-Call-API von Ollama nutzen alle dieselbe Idee mit leicht unterschiedlichen Wire-Formaten.',
          '**MCP** sitzt darüber: Es standardisiert, wie Tools beschrieben, entdeckt, aufgerufen und zurückgegeben werden, prozessübergreifend. Ein Function-Calling-Modell allein weiß nichts über Ihr Filesystem; ein MCP-Server stellt Filesystem-Operationen bereit, der Client mappt sie auf die Function-Calling-API des Modells, und das Modell kann sie aufrufen.',
          '**Der Vorteil ist Interop.** Schreiben Sie den Filesystem-Server einmal; Claude Desktop, Goose, Cline, Continue.dev und LM Studio nutzen ihn alle unverändert. Wechseln Sie das Modell von Claude zu Gemma 4; der Server ändert sich nicht.',
          '**Sie können Agenten mit reinem Function Calling bauen.** Sie reimplementieren Filesystem-, Datenbank- und Browser-Handler pro Projekt. Mit MCP sind das Out-of-the-Box-Abhängigkeiten.',
          '**Für One-off-Skripte ist reines Function Calling einfacher.** Für alles, was Sie über Projekte oder Modelle hinweg wiederverwenden möchten, ist MCP innerhalb weniger Tage der aufwandsärmere Weg.',
        ],
      },
      imDachKontext: {
        id: 'dach-kontext',
        title: 'Im DACH-Kontext: DSGVO, BSI und Mittelstand',
        content:
          '**Lokale MCP-Agenten schließen einen großen Teil der DSGVO-Lücke, die ein Cloud-Agent öffnet.** Wenn das Modell, der Client und alle Tool-Server auf der eigenen Maschine laufen, verlässt kein Inhalt mehr den Endpunkt — und damit verschwindet die Pflicht zur Auftragsverarbeitung nach DSGVO Art. 28 für die LLM-Schicht.',
        items: [
          '**DSGVO Art. 28 (Auftragsverarbeitung):** Bei einem Cloud-Agent ist der Anbieter Auftragsverarbeiter — mit AVV, technisch-organisatorischen Maßnahmen, Drittland-Bewertung und allem, was dazugehört. Bei einem lokalen MCP-Stack entfällt diese Vertragsbeziehung, weil keine personenbezogenen Daten an einen Dritten übermittelt werden.',
          '**BSI-Grundschutz-Kataloge:** Für Behörden und IT-Sicherheits-zertifizierte Organisationen passt der lokale Stack sauber in die Bausteine SYS.1.1 (Allgemeiner Server), SYS.1.5 (Virtualisierung) und APP.5.4 (Webanwendungen). Der Browser-Server ist hier der heikelste Baustein — separater User, eigener Network-Namespace, kein Zugriff auf Produktiv-Credentials.',
          '**Mittelstand-Use Cases:** Steuerberatung, Notariat, Arztpraxis, Maschinenbau-Konstruktion, Personalakten — überall dort, wo Mandanten- oder Patientendaten nicht an OpenAI, Anthropic oder Google gehen dürfen. Ein Mac mini M5 oder ein Workstation-PC mit RTX 4090 reicht für ein 27B–32B-Modell, das Akten zusammenfasst, Verträge prüft oder Code-Snippets gegen interne Datenbanken testet.',
          '**Schweiz und Österreich:** revDSG (Schweiz, in Kraft seit September 2023) und das österreichische DSG verfolgen denselben Ansatz wie die DSGVO bezüglich Datenresidenz. Lokale Inferenz erfüllt die Anforderungen ohne zusätzliche Verträge mit US-Anbietern.',
          '**Audit-Trail-Pflichten:** Das Audit-Log des MCP-Clients (Goose, Cline, Continue.dev) ist Ihr primärer Nachweis, dass der Agent nichts Unerwartetes getan hat. Sichern Sie es revisionssicher auf einem WORM-Speicher oder zumindest in einem Git-Repository, das Sie nicht aus dem Agenten heraus überschreiben können.',
          '**Drittanbieter-Server prüfen.** Behandeln Sie jeden nicht-offiziellen MCP-Server wie jede andere Open-Source-Dependency: Code-Review vor dem Einsatz, keine geheimen Credentials in nicht geprüften Servern, keine Verbindung zu Produktivsystemen ohne Sandbox.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Häufige Fehler beim Einrichten von lokalem MCP',
        items: [
          '**Fehler 1: Verwendung eines kleinen general-purpose-Modells.** Modelle unter 7B (und die meisten 7B–13B-general-purpose-Modelle ohne Tool-Call-Fine-Tuning) geben fehlerhafte Tool-Calls aus. Verwenden Sie ein 27B+-Tool-Call-getuntes Modell und hören Sie auf, gegen den Harness zu kämpfen.',
          '**Fehler 2: Allow-Listing Ihres Home-Verzeichnisses.** „Nur zum Testen"-Allow-Listings von `~` überleben in den Routine-Einsatz. Erstellen Sie von Anfang an einen dedizierten `agent-workspace`.',
          '**Fehler 3: Datenbankserver im Read/Write-Modus belassen.** Eine `DELETE`-Abfrage, die ein selbstbewusster Agent auf einer echten Tabelle verfasst, ist genau der Vorfall, den dies vermeidet. Machen Sie `agent_ro` zu Ihrem Standard; richten Sie eine separate beschreibbare Rolle nur für Aufgaben ein, die das ausdrücklich brauchen, und nur für die Dauer dieser Aufgaben.',
          '**Fehler 4: Auto-Approval für jedes Tool.** Der „Alles genehmigen"-Schalter ist bequem und gefährlich. Auto-Approval für Lese-Tools (`read_file`, `list_directory`, `query`); immer Freigabe verlangen für Schreib-/Shell-/PR-Tools.',
          '**Fehler 5: Ein 32K-Context-Modell für mehrstufige Browser-Arbeit.** Seiteninhalte sind groß; ein Agent, der drei Seiten browst, kann 32K Tokens verbrauchen, bevor er zum Reasoning kommt. Nutzen Sie ein 128K-Context-Modell für browser-lastige Aufgaben.',
          '**Fehler 6: Annahme, dass der Agent Urteilsvermögen hat.** Hat er nicht. Das Modell hat kein Konzept von „das ist die Produktionsdatenbank" oder „dieser PR wird deployen". Berechtigungen sind Ihre einzige Barriere.',
          '**Fehler 7: Alle Referenz-Server vorab installieren.** Mehr Tools = größerer System-Prompt = langsamere und unzuverlässigere Tool-Auswahl. Beginnen Sie mit `filesystem`. Fügen Sie die anderen erst hinzu, wenn Sie einen Workflow haben, der sie braucht.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Model Context Protocol Spezifikation](https://modelcontextprotocol.io/) — Offizielle Spezifikation, JSON-RPC-Schema, Transport- und Lifecycle-Definitionen.',
          '[modelcontextprotocol/servers GitHub-Repository](https://github.com/modelcontextprotocol/servers) — Referenz-Server (filesystem, sqlite, postgres, github, puppeteer, etc.) und ihre Konfigurationsdokumentation.',
          '[Goose-Projekt-Dokumentation](https://block.github.io/goose/) — CLI-Installation, Ollama-Provider-Konfiguration, MCP-Server-Config-Syntax.',
          '[Ollama Model Library](https://ollama.com/library) — Verfügbare lokale Modelle, Tool-Call-Support-Flags und in diesem Leitfaden referenzierte Quantisierungsstufen.',
          '[Cline GitHub-Repository](https://github.com/cline/cline) — VS-Code-MCP-Client-Implementierung, MCP-Server-Panel.',
          '[Continue.dev-Dokumentation](https://docs.continue.dev/) — `mcpServers`-Config-Block-Referenz für den Continue.dev-Client.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Was ist MCP und warum ist es für lokale KI wichtig?',
            a: 'Model Context Protocol (MCP) ist ein offenes JSON-RPC-2.0-Protokoll, mit dem ein Client (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) ein Sprachmodell auf einheitliche Weise mit Tool-Servern verbindet. Es ist für lokale KI wichtig, weil es die Schicht standardisiert, die ein Chat-Modell zu einem Agenten macht — schreiben Sie einen Tool-Server einmal, nutzen Sie ihn unter jedem Client und jedem Modell, einschließlich eines lokalen Ollama-Modells. Ohne MCP erfindet jedes Projekt Datei-/Datenbank-/Browser-Tooling gegen seinen eigenen Client neu.',
          },
          {
            q: 'Funktioniert MCP ohne Claude Desktop?',
            a: 'Ja. Das Protokoll ist offen und vollständig unabhängig von Claude Desktop. Im Jahr 2026 liefern Goose, Cline, Continue.dev und LM Studio alle MCP-Client-Implementierungen, die mit lokalen Ollama-Modellen funktionieren. Die Referenz-Server (filesystem, sqlite, postgres, puppeteer, github) laufen unter jedem konformen Client unverändert.',
          },
          {
            q: 'Welche lokalen Modelle unterstützen MCP am besten?',
            a: 'Im Mai 2026 sind die zuverlässigsten Wahlen Gemma 4 27B, GLM-5.1 32B, Qwen3 32B (oder Qwen3-Coder 30B für codeförmige Arbeit) und Llama 3.3 70B. Alle vier haben explizites Tool-Call-Training und geben sauberes Function-Calling-JSON aus, das MCP-Clients routen können. Modelle unter 7B (und die meisten general-purpose-Modelle ohne Tool-Call-Fine-Tuning) produzieren regelmäßig fehlerhafte Tool-Calls.',
          },
          {
            q: 'Ist MCP sicher — kann der Agent meine Dateien löschen?',
            a: 'Er kann es, wenn Sie ihn lassen. Sicherheit kommt von der Konfiguration der Server, nicht vom Protokoll. Der Filesystem-Server arbeitet nur in Pfaden, die Sie allow-listen — beschränken Sie ihn auf ein dediziertes `agent-workspace`-Verzeichnis. Der Datenbankserver läuft read-only, wenn Sie eine SELECT-only-Rolle verwenden. Verlangen Sie immer eine explizite Freigabe für Schreib-, Shell- und PR-Tools; Auto-Approval nur für Lese-Operationen. Das Audit-Log zeigt Ihnen genau, was der Agent im Nachhinein getan hat.',
          },
          {
            q: 'Kann ich meinen eigenen MCP-Server schreiben?',
            a: 'Ja — und die SDKs machen es unkompliziert. Die offiziellen TypeScript- und Python-SDKs (`@modelcontextprotocol/sdk` und `mcp`) übernehmen die JSON-RPC-Plumbing. Sie definieren Tools mit ihren JSON-Schemas und einer Handler-Funktion, und das SDK exponiert sie über stdio. Ein single-purpose-Server (ein oder zwei Tools, die eine interne API umhüllen) ist eine Datei mit 50–100 Zeilen.',
          },
          {
            q: 'Funktioniert MCP unter Windows?',
            a: 'Ja. Ollama, Goose, Cline, Continue.dev und LM Studio laufen alle unter Windows. MCP-Server laufen als Node.js- oder Python-Subprozesse; beide Runtimes werden unter Windows vollständig unterstützt. Der einzige plattformspezifische Stolperstein ist Pfad-Handling — verwenden Sie Forward-Slashes in der Config oder escapen Sie Backslashes korrekt. Ansonsten ist die Erfahrung identisch zu macOS und Linux.',
          },
          {
            q: 'Wie sandboxe ich MCP-Tool-Calls?',
            a: 'Drei Schichten decken den Großteil des Risikos ab. Erstens: Scopen Sie jeden Server eng auf der Config-Ebene: Filesystem auf ein Verzeichnis, Datenbank auf eine read-only-Rolle, GitHub auf ein Fine-Grained-PAT gegen Test-Repos. Zweitens: Nutzen Sie die Per-Tool-Freigaberegeln des Clients: Auto-Approval für Reads, Freigabe für Writes. Drittens: Halten Sie den Agenten in einem `git stash`-freundlichen Workspace, damit alles Destruktive über Git rückgängig gemacht werden kann. Für sensible Aufgaben: auf einem Host laufen lassen, der außer für Endpunkte, die die Server explizit brauchen, keinen Netzwerkzugang hat.',
          },
          {
            q: 'Können MCP-Agenten HTTP-Anfragen stellen?',
            a: 'Ja, über bestimmte Server. Der Browser-Server (puppeteer oder playwright) steuert ein echtes Chromium, das die Anfragen stellt, zu denen das Modell navigiert. Mehrere Drittanbieter-Server stellen `http_get`/`http_post`-Tools direkter bereit. Filesystem- und Datenbankserver machen keine Netzwerkanfragen; sie operieren nur auf lokalen Ressourcen.',
          },
          {
            q: 'Funktioniert MCP nativ mit Ollama oder brauche ich einen Wrapper?',
            a: 'Ollama selbst spricht kein MCP — es liefert eine OpenAI-kompatible Chat-API. Sie brauchen einen Client (Goose, Cline, Continue.dev, LM Studio), um Ollamas Chat-API mit MCP-Servern zu verbinden. Der Client routet die Tool-Calls des Modells an den richtigen MCP-Server und füttert die Ergebnisse zurück in die Konversation. Aus Anwendersicht gibt es kein zusätzliches Setup über die Installation des Clients und das Verbinden mit Ollama hinaus.',
          },
          {
            q: 'Was ist der Unterschied zwischen MCP und Function Calling?',
            a: 'Function Calling ist das LLM, das strukturiertes JSON ausgibt, das ein Tool und seine Argumente benennt — es ist eine Modell-Fähigkeit. MCP ist das Protokoll, das Tool-Servern und Clients erlaubt, diese Tools prozessübergreifend zu beschreiben, zu entdecken, aufzurufen und zurückzugeben — es ist eine Interop-Schicht. Sie kooperieren: Der Client wandelt MCP-Tool-Definitionen in das Function-Calling-Format des Modells um, das Modell gibt einen Function-Call aus, der Client mappt den Call zurück auf einen MCP-Server, und der Server führt ihn aus. Ohne MCP können Sie immer noch Function Calling machen; Sie reimplementieren Filesystem-/Datenbank-/Browser-Handler pro Projekt. Mit MCP funktionieren dieselben Server unter jedem Client.',
          },
          {
            q: 'Muss ich bei der Verwendung lokaler MCP-Agenten die DSGVO beachten?',
            a: 'Die kurze Antwort: Sie müssen die DSGVO weiterhin beachten, aber lokales MCP entlastet Sie genau in dem Bereich, der bei Cloud-Agenten am schwierigsten ist. Wenn Modell, Client und alle Tool-Server auf Ihrer Maschine laufen, gibt es keinen Auftragsverarbeiter im Sinne von Art. 28 für die LLM-Schicht — Sie schließen keinen AVV mit OpenAI oder Anthropic, müssen keine TOMs eines US-Anbieters bewerten und keine Drittlands-Bewertung nach Schrems II machen. Was bleibt: Die DSGVO-Pflichten für die Daten selbst (Rechtsgrundlage, Zweckbindung, Löschkonzepte, Betroffenenrechte) gelten unverändert. Der MCP-Server-Audit-Log ist Ihr primärer Nachweis nach Art. 5 Abs. 2 (Rechenschaftspflicht), dass der Agent keine unzulässige Verarbeitung durchgeführt hat.',
          },
          {
            q: 'Sind lokale MCP-Agenten für den deutschen Mittelstand geeignet?',
            a: 'Ja, und der Mittelstand ist tatsächlich der Sektor mit dem klarsten Use Case. Steuerberatung, Notariat, Arztpraxen, Maschinenbau, Personalwesen — überall dort, wo Mandanten-, Patienten- oder Mitarbeiterdaten verarbeitet werden, ist die Cloud-Compliance-Hürde so hoch, dass viele Unternehmen LLM-Pilotprojekte komplett verschoben haben. Ein lokaler MCP-Stack auf einem Mac mini M5 oder einer Workstation mit RTX 4090 betreibt ein 27B–32B-Modell, das Akten zusammenfasst, Verträge gegen Vorlagen prüft oder Code-Snippets gegen interne Datenbanken testet — alles ohne Cloud-Aufruf. Die BSI-Grundschutz-Bausteine (SYS.1.1, APP.5.4) sind anwendbar; der Browser-Server ist der heikelste Punkt und sollte separat gehärtet werden (eigener User, kein Zugriff auf Produktiv-Credentials). Audit-Logs revisionssicher speichern. Ein externer Datenschutzbeauftragter sollte die Einrichtung einmal abnehmen, danach läuft der Stack so wartungsarm wie eine interne Datenbank.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Beste lokale Modelle für Tool Calling 2026](/de/power-local-llm/best-local-models-tool-calling-2026) — Head-to-Head-Benchmarks für die oben empfohlenen Modelle (Gemma 4, GLM-5.1, Qwen3, Llama 3.3).',
          '[Autonome lokale Agenten funktionieren wirklich](/de/power-local-llm/autonomous-local-agents-actually-work) — ein Realitätscheck, was ein lokaler MCP-Agent über eine langlaufende Aufgabe zuverlässig kann und was nicht.',
          '[Continue.dev vs. Cline vs. Aider: Bester lokaler Coding-Agent 2026](/de/power-local-llm/continue-dev-vs-cline-vs-aider-local) — angrenzender Agent-Kontext für codeförmige Arbeit; Cline und Continue.dev sind ebenfalls MCP-Clients.',
          '[Beste lokale LLMs in 2026](/local-llms/best-local-llms-2026?lang=de) — Modell-Autorität für die breitere Open-Weights-Landschaft.',
          '[Zapier durch lokale KI-Agenten ersetzen](/de/power-local-llm/replace-zapier-with-local-ai-agents) — Workflow-Automatisierungs-Framing für denselben MCP-Stack.',
          '[Power Local LLM Hub](/de/power-local-llm) — vollständige Leitfaden-Bibliothek.',
        ],
      },
    },
  },
}
