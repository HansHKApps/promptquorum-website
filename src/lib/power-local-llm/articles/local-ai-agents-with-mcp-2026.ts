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
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      'The slide deck below covers: how MCP turns a local Ollama model into an agent that queries databases, reads files, drives a browser, and opens pull requests — all offline; the four reference servers (filesystem, SQLite/Postgres, browser, GitHub) with setup difficulty and risk ratings; a 6-step Goose setup guide; a security model that does not trust the LLM; and a side-by-side comparison with Claude Desktop. Download the PDF as a local MCP agent reference card.',
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
          '**Goose is the simplest path to a working local MCP agent in 2026.** It is an open-source CLI from Block with native [Ollama](https://ollama.com/) support, an interactive chat surface, and one config file for all your [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers. Continue.dev, Cline, and LM Studio work too — Goose has the lowest setup tax for a first run.',
        items: [
          '**Step 1 — install Ollama.** Download from [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). Confirm the service is running with `curl http://127.0.0.1:11434/api/tags`.',
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
    seoTitle: 'Lokale KI-Agenten mit MCP 2026: Model Context Protocol',
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
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      'Die Präsentation behandelt: wie MCP ein lokales Ollama-Modell zu einem Agenten macht, der Datenbanken abfragt, Dateien liest, einen Browser steuert und Pull Requests öffnet – alles offline; die vier Referenz-Server (Filesystem, SQLite/Postgres, Browser, GitHub) mit Setup-Aufwand und Risikobewertung; ein 6-Schritte-Goose-Setup; ein Sicherheitsmodell, das dem LLM nicht vertraut; und ein direkter Vergleich mit Claude Desktop. Als lokales MCP-Agenten-Referenzblatt als PDF herunterladen.',
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
          'Für strukturierte Prompting-Techniken, die die Tool-Call-Qualität bei jedem Modell verbessern, siehe [Chain-of-Thought Prompting](/de/prompt-engineering/chain-of-thought-prompting).',
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
          '[Beste lokale LLMs in 2026](/de/local-llms/best-local-llms-2026) — Modell-Autorität für die breitere Open-Weights-Landschaft.',
          '[Zapier durch lokale KI-Agenten ersetzen](/de/power-local-llm/replace-zapier-with-local-ai-agents) — Workflow-Automatisierungs-Framing für denselben MCP-Stack.',
          '[Power Local LLM Hub](/de/power-local-llm) — vollständige Leitfaden-Bibliothek.',
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
    title: "Connecter Ollama aux bases de données et APIs via MCP : configuration d'agent local 2026",
    seoTitle: 'Ollama + MCP local : agent IA avec bases et APIs 2026',
    intro:
      "Model Context Protocol (MCP) est la couche manquante entre un modèle Ollama local et le reste de votre machine. Avec un seul fichier de configuration et un modèle compatible tool calling, le même agent interroge Postgres, lit et écrit dans un répertoire isolé, pilote un navigateur headless et ouvre des pull requests GitHub — tout en local, tout hors ligne. Ce guide détaille la configuration complète avec un modèle de sécurité qui ne suppose pas que vous faites confiance au modèle.",
    metaDescription:
      "Agents IA locaux avec MCP 2026 : configurez le Model Context Protocol pour des agents qui utilisent des outils. Serveurs MCP et workflows agentiques expliqués.",
    twitterDescription:
      "Ollama local + MCP = un agent IA qui lit des fichiers, interroge des bases et pilote un navigateur — entièrement hors ligne. Configs prêtes à l'emploi et modèle de sécurité qui ne fait pas confiance au modèle.",
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
      "Développeurs et utilisateurs techniques exécutant des LLMs locaux via Ollama et qui souhaitent un modèle réellement actionnable — interroger des bases, éditer des fichiers, automatiser des navigateurs — sans envoyer quoi que ce soit à un fournisseur cloud.",
    readTime: '15 min de lecture',
    educationalLevel: 'Advanced',
    primaryTerm: 'agent MCP local',
    targetKeywords: [
      'mcp ollama francais',
      'serveur mcp local installation',
      'model context protocol local',
      'ollama tool calling 2026',
      'agent ia local mcp',
      'mcp sans claude desktop',
    ],
    leadAnswerBlock:
      "**Model Context Protocol (MCP) permet à un modèle Ollama local d'appeler des outils — lire un fichier, exécuter une requête SQL, cliquer un lien, ouvrir une pull request — via une interface JSON-RPC standardisée que tout client MCP-compatible (Goose, Cline, Continue.dev, LM Studio en 2026) sait parler. Le protocole est ouvert, les serveurs de référence sont open source, et en 2026 rien n'exige Claude Desktop ni de compte cloud. Lancez Ollama, installez un client MCP, ajoutez une configuration `mcp.json` listant les serveurs souhaités, et un modèle compatible tool calling (Gemma 4, GLM-5.1, Qwen3, Llama 3.3) devient un agent qui opère sur votre machine avec les permissions que vous contrôlez. Le point clé est le modèle de sécurité : jamais d'approbation automatique pour les outils d'écriture, périmètre filesystem limité à un seul répertoire et serveur de base de données en lecture seule par défaut.**",
    quickAnswerTop: {
      fr: {
        question: 'Peut-on faire tourner des agents IA en local avec MCP et Ollama en 2026 ?',
        answer:
          "Oui — et la mise en place tient désormais en une après-midi. Lancez Ollama avec un modèle compatible tool calling (Gemma 4, GLM-5.1, Qwen3 ou Llama 3.3 70B), installez un client MCP (Goose est la CLI la plus directe ; Cline, Continue.dev et LM Studio ont tous ajouté le support MCP début 2026) et déclarez les serveurs MCP correspondant à vos besoins — `filesystem` pour les fichiers, `sqlite` ou `postgres` pour les bases, `puppeteer` ou `playwright` pour l'automatisation navigateur, `github` pour la gestion des dépôts. C'est le même protocole que celui de Claude Desktop ; seuls le modèle et le client changent. Restez prudent : limitez le serveur filesystem à un répertoire dédié, gardez la base en lecture seule par défaut, et n'auto-approuvez jamais les outils d'écriture ou de shell.",
        bullets: [
          "MCP est ouvert et fonctionne entièrement en local — pas de Claude Desktop, pas de compte Anthropic, pas d'appel cloud.",
          'Ollama fournit le modèle ; un client MCP (Goose, Cline, Continue.dev, LM Studio) relie Ollama aux serveurs MCP via JSON-RPC.',
          'Quatre serveurs de référence couvrent la plupart des workflows : filesystem, SQLite/Postgres, Puppeteer/Playwright (navigateur) et GitHub.',
          "La fiabilité des appels d'outils dépend du modèle : Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B et Llama 3.3 70B traitent MCP proprement. Les modèles de moins de 7B émettent régulièrement des appels malformés.",
          "Modèle de sécurité : limitez l'accès filesystem à un répertoire, faites tourner la base en lecture seule et exigez une validation explicite pour chaque outil d'écriture ou de shell.",
          "Coût : 0 € en API, mais les tokens se consomment localement — les boucles d'agent sont gourmandes, prévoyez un modèle 32K+ et une machine capable de l'exécuter à vitesse utilisable.",
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Ce que MCP débloque', anchor: '#what-mcp-unlocks' },
      { label: 'Comparatif des serveurs MCP', anchor: '#server-comparison' },
      { label: "Architecture : comment les pièces s'emboîtent", anchor: '#architecture' },
      { label: 'Configuration : Ollama + Goose en 15 minutes', anchor: '#setup' },
      { label: 'Serveur filesystem', anchor: '#filesystem-server' },
      { label: 'Serveurs SQLite et Postgres', anchor: '#database-server' },
      { label: 'Serveur navigateur (Puppeteer / Playwright)', anchor: '#browser-server' },
      { label: 'Serveur GitHub', anchor: '#github-server' },
      { label: 'Modèle de sécurité', anchor: '#security-model' },
      { label: 'MCP local vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'Choisir un modèle compatible tool calling', anchor: '#picking-model' },
      { label: 'MCP vs function calling classique', anchor: '#mcp-vs-function-calling' },
      { label: 'Considérations pour les utilisateurs francophones', anchor: '#considerations-fr' },
      { label: 'Erreurs fréquentes', anchor: '#common-mistakes' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      "La présentation couvre : comment MCP transforme un modèle Ollama local en agent capable d'interroger des bases de données, lire des fichiers, piloter un navigateur et ouvrir des pull requests — le tout hors ligne ; les quatre serveurs de référence (filesystem, SQLite/Postgres, navigateur, GitHub) avec difficulté de configuration et niveau de risque ; un guide de configuration Goose en 6 étapes ; un modèle de sécurité qui ne fait pas confiance au LLM ; et une comparaison directe avec Claude Desktop. Téléchargez le PDF comme référence pour agent MCP local.",
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "**MCP est un protocole JSON-RPC 2.0 pour les outils.** Un modèle (via un client) se connecte à un ou plusieurs serveurs MCP ; chaque serveur expose des Tools (fonctions appelables), des Resources (données lisibles) et des Prompts (templates). Le format wire est identique que le client soit Claude Desktop, Goose, Cline, Continue.dev ou LM Studio.",
          "**Ollama ne parle pas MCP directement — un client MCP enveloppe Ollama.** Goose (Block) est la CLI open-source la plus simple avec support natif d'Ollama ; Cline, Continue.dev et LM Studio ont ajouté un client MCP début 2026.",
          "**Quatre serveurs de référence couvrent la plupart des cas d'usage :** `filesystem` (lecture/écriture dans un répertoire isolé), `sqlite` et `postgres` (requêtes de base, lecture seule par défaut), `puppeteer` ou `playwright` (pilotage d'un navigateur headless) et `github` (gestion de dépôts et de PRs avec un Personal Access Token).",
          "**La fiabilité des appels d'outils croît avec la taille et l'entraînement.** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B et Llama 3.3 70B traitent MCP proprement en Q4_K_M. Les modèles de moins de 7B émettent régulièrement des appels malformés et bloquent la boucle.",
          "**Le modèle de sécurité considère le LLM comme non fiable.** Limitez le serveur filesystem à un seul répertoire, faites tourner la base avec un rôle en lecture seule, n'auto-approuvez jamais `execute_command` ni `write_file`, et relisez le journal d'audit après les sessions longues.",
          "**MCP local vs Claude Desktop :** protocole identique, écosystème de serveurs identique. La pile locale échange le modèle cloud contre un modèle hors ligne — confidentialité, zéro coût par token, pas de rate limit, en contrepartie d'un modèle un peu moins puissant et d'une configuration de sécurité dont vous êtes responsable.",
          "**Le coût en API est de 0 €, mais les tokens sont bien réels.** Une boucle d'agent peut consommer 30K–80K tokens pour une seule tâche multi-étapes. Visez un modèle 32K minimum ; 128K est confortable.",
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Protocole :** JSON-RPC 2.0 sur stdio (sous-processus local) ou HTTP/SSE (distant). Les agents locaux utilisent presque exclusivement stdio.',
          '**Maintenu par :** Anthropic (spécification open source) ; serveurs de référence dans `modelcontextprotocol/servers` sur GitHub, plus un écosystème tiers en croissance.',
          '**Clients locaux en 2026 :** Goose (Block), Cline (extension VS Code), Continue.dev (VS Code/JetBrains), LM Studio (application desktop), plus plusieurs CLIs.',
          "**Modèles Ollama compatibles :** tout modèle entraîné nativement aux appels d'outils. En mai 2026 : Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.",
          '**Transports par défaut :** stdio pour les processus locaux ; HTTP/SSE uniquement pour partager un serveur entre plusieurs machines ou agents.',
          "**Configuration dans un seul fichier :** `~/.config/goose/config.yaml` (Goose), le bloc MCP de `~/.continue/config.json` (Continue.dev) ou `mcpServers` dans l'UI de Cline. Même forme partout : nom du serveur, command, args, variables d'environnement.",
          "**Pas besoin de Claude Desktop.** Le protocole précède la stratégie d'exclusivité de Claude Desktop ; tous les serveurs de référence sont sous licence MIT/Apache et tournent contre n'importe quel client conforme.",
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'Ce que MCP débloque pour un modèle local',
        content:
          "**Un LLM local sans outils ne peut que répondre par du texte. Avec MCP, le même modèle agit sur votre machine.** C'est la différence entre un chatbot et un agent.",
        items: [
          "**« Trouve chaque TODO de ce dépôt, regroupe-les par fichier et écris un résumé Markdown dans `notes/todos.md`. »** — le serveur `filesystem` lit, le modèle regroupe, le même serveur écrit. Un seul aller-retour.",
          "**« Montre-moi le top 10 des clients par chiffre d'affaires ce trimestre, puis trace un graphique. »** — le serveur `postgres` exécute la requête (rôle en lecture seule), le modèle synthétise et écrit un CSV via `filesystem` pour votre outil de visualisation.",
          "**« Ouvre la une de Hacker News, trouve les trois articles IA principaux, résume-les et ajoute-les à ma liste de lecture. »** — le serveur `puppeteer` pilote un navigateur headless, le modèle extrait et résume, `filesystem` ajoute.",
          "**« Ouvre un PR draft `chore: bump deps` sur mon fork et lie l'exécution CI en échec. »** — le serveur `github` crée le PR, récupère l'exécution et écrit le lien dans la description.",
          "**« Regarde les 100 dernières lignes de `events.db` et dis-moi quels user IDs sont responsables du nouveau pic d'erreurs. »** — le serveur `sqlite` requête, le modèle raisonne, vous lisez la réponse dans le panneau de chat.",
          "Chacun de ces flux est un workflow phrase-vers-action qui demandait auparavant soit un modèle cloud avec des outils hébergés, soit un script à la main. MCP est la couche qui vous permet de réutiliser les mêmes serveurs entre clients et le même modèle entre serveurs.",
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Comparatif des quatre serveurs MCP les plus utilisés',
        content:
          "Les serveurs de référence ci-dessous couvrent la longue traîne du « je veux que mon modèle local fasse réellement quelque chose ». Tous sont open source et tournent comme sous-processus locaux lancés par votre client MCP.",
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Commencez par le serveur filesystem (5 minutes, faible risque), ajoutez SQLite pour le travail data, ajoutez un serveur navigateur seulement si nécessaire, et n'intégrez GitHub qu'une fois que vous faites confiance au modèle sur votre machine.",
          },
          {
            type: 'plain-terms',
            text: "Quatre serveurs couvrent 90 % de ce qu'un agent local peut faire pour vous. Le serveur filesystem lit et écrit dans un dossier que vous choisissez. Le serveur SQLite ou Postgres exécute des requêtes contre une base. Le serveur navigateur pilote une vraie fenêtre Chromium pour lire les pages qui exigent du JavaScript. Le serveur GitHub ouvre des issues et des PRs sur vos dépôts. Tous s'installent en une commande, tournent en sous-processus sur votre machine, et aucun n'appelle internet sauf si nécessaire (le navigateur le fait, les autres non).",
          },
        ],
        columns: ['Serveur MCP', 'Capacité', 'Difficulté de mise en place', 'Niveau de risque', 'Idéal pour'],
        rows: [
          { 'Serveur MCP': 'Filesystem', 'Capacité': 'Lire et écrire des fichiers dans un répertoire isolé', 'Difficulté de mise en place': 'Facile (un chemin à allow-lister)', 'Niveau de risque': 'Moyen — restreindre étroitement', 'Idéal pour': 'Automatisation personnelle, prise de notes, résumé de dépôts' },
          { 'Serveur MCP': 'SQLite', 'Capacité': "Requêter un fichier de base SQLite local", 'Difficulté de mise en place': 'Facile (chemin du fichier .db)', 'Niveau de risque': "Faible en lecture seule ; moyen avec écriture", 'Idéal pour': 'Exploration data, analyse de logs, prototypage' },
          { 'Serveur MCP': 'Postgres', 'Capacité': "Requêter une base Postgres via une connection string", 'Difficulté de mise en place': 'Moyenne (rôle + URL)', 'Niveau de risque': 'Moyen — utiliser un rôle en lecture seule', 'Idéal pour': 'Exploration de données prod, reporting, prototypes BI' },
          { 'Serveur MCP': 'Puppeteer / Playwright', 'Capacité': "Piloter un Chromium headless ou visible pour navigation, scraping, remplissage de formulaires", 'Difficulté de mise en place': 'Difficile (binaires navigateur, sélecteurs, latence)', 'Niveau de risque': "Élevé — peut soumettre des formulaires, cliquer n'importe où", 'Idéal pour': 'Recherche, scraping, tests de régression' },
          { 'Serveur MCP': 'GitHub', 'Capacité': 'Lister les dépôts, lire des fichiers, ouvrir issues et PRs', 'Difficulté de mise en place': 'Facile (PAT en variable d\'env)', 'Niveau de risque': 'Moyen — restreindre le token à des dépôts précis', 'Idéal pour': 'Workflows dev, triage, brouillons de PR' },
          { 'Serveur MCP': 'Custom', 'Capacité': "Tout ce qui peut s'exprimer comme outils JSON-RPC", 'Difficulté de mise en place': 'Difficile (écrire son propre serveur)', 'Niveau de risque': 'Variable', 'Idéal pour': 'APIs internes, systèmes de niche, glue code' },
        ],
      },
      architecture: {
        id: 'architecture',
        title: "Comment les pièces s'emboîtent",
        content:
          "**Trois processus, un protocole partagé.** Le modèle vit dans Ollama, le client parle MCP, et chaque serveur expose un petit ensemble d'outils. Chaque appel d'outil fait le saut client → serveur, s'exécute en local et retourne du JSON.",
        items: [
          "**Ollama** tourne en service en arrière-plan sur `127.0.0.1:11434` et sert le modèle via une API compatible OpenAI. Il ne sait pas ce qu'est MCP — il répond simplement aux chat completions et émet des appels d'outils quand le modèle les demande.",
          "**Le client MCP** (Goose, Cline, Continue.dev, LM Studio) est le pont. Il parle à Ollama pour le modèle et aux serveurs MCP pour les outils. Quand le modèle émet un appel d'outil, le client le route vers le bon serveur, récupère le résultat et le réinjecte dans la conversation.",
          "**Les serveurs MCP** sont des sous-processus indépendants, un par capacité. Ils parlent JSON-RPC 2.0 sur stdio. Chaque serveur déclare une liste de Tools, Resources et Prompts ; le client fusionne tout en une surface d'outils unique présentée au modèle.",
          "**Le transport stdio garde tout en local.** Le serveur est lancé par le client, communique via stdin/stdout et se termine quand le client se termine. Rien ne passe par le réseau sauf si le serveur ouvre lui-même une connexion (le serveur navigateur le fait ; les serveurs filesystem et base ne le font pas).",
          "**Le modèle voit une liste d'outils plate.** Du point de vue du modèle, il n'y a pas de serveurs — juste une liste de noms comme `filesystem.read_file`, `sqlite.query`, `puppeteer.navigate`. Le client gère le routage.",
        ],
        callouts: [
          {
            type: 'note',
            text: "L'architecture est identique à celle de Claude Desktop. Les différences sont le modèle (Ollama local au lieu de Claude) et le client (Goose/Cline/Continue.dev/LM Studio au lieu de Claude Desktop). Les serveurs MCP sont les mêmes — vous pouvez faire tourner le serveur filesystem sous Claude Desktop aujourd'hui et il fonctionnera demain sans modification sous Goose.",
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configuration : Ollama + Goose en 15 minutes',
        content:
          "**Goose est en 2026 le chemin le plus court vers un agent MCP local fonctionnel.** C'est une CLI open source de Block avec support natif d'Ollama, une interface de chat interactive et un seul fichier de configuration pour tous vos serveurs MCP. Continue.dev, Cline et LM Studio fonctionnent aussi — Goose a juste le coût d'installation le plus faible pour une première mise en route.",
        items: [
          '**Étape 1 — installer Ollama.** Téléchargez depuis `ollama.com/download` (macOS/Windows/Linux). Vérifiez que le service tourne avec `curl http://127.0.0.1:11434/api/tags`.',
          "**Étape 2 — récupérer un modèle compatible tool calling.** Choisissez parmi Gemma 4 27B (`gemma4:27b`), GLM-5.1 32B (`glm5:32b`), Qwen3 32B (`qwen3:32b`) ou Llama 3.3 70B (`llama3.3:70b`). 16 Go de mémoire unifiée ou 12 Go de VRAM gèrent confortablement 27B–32B en Q4_K_M.",
          "**Étape 3 — installer Goose.** `pipx install goose-ai` (macOS, Linux) ou téléchargez l'installateur depuis la page Goose Releases. La CLI s'installe sous le nom `goose`.",
          "**Étape 4 — configurer Ollama comme provider.** Lancez `goose configure`, choisissez `ollama` comme provider, fixez le modèle sur celui que vous avez récupéré et le host sur `http://127.0.0.1:11434`. Goose écrit cela dans `~/.config/goose/config.yaml`.",
          "**Étape 5 — ajouter le serveur MCP filesystem.** Éditez `~/.config/goose/config.yaml` pour ajouter un bloc `mcpServers` (exemple ci-dessous). Relancez `goose session` et demandez la liste des fichiers dans votre répertoire de test. Le premier tour confirme que le serveur est bien câblé.",
          "**Étape 6 — vérifier avec une vraie tâche.** Essayez `goose session` et demandez « Fais une liste de chaque fichier Markdown dans `notes/`, avec titre et nombre de mots, et écris le résultat dans `notes/index.md`. » Si l'agent lit, résume et réécrit, la boucle fonctionne.",
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:27b\n\n# 2. Install Goose\npipx install goose-ai\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:27b\n# Host:     http://127.0.0.1:11434\n\n# 4. Start a session — Goose reads ~/.config/goose/config.yaml\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: "Si vous utilisez déjà Cline ou Continue.dev, sautez Goose et utilisez-les — les deux ont ajouté le support des serveurs MCP dans leurs versions de début 2026. Le panneau « MCP Servers » de Cline installe les serveurs de référence en un clic ; Continue.dev lit `mcpServers` depuis `~/.continue/config.json` (même forme que le bloc Goose ci-dessous). Le modèle et les serveurs sont les mêmes ; seule l'application hôte change.",
          },
        ],
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Serveur filesystem : lire et écrire dans un répertoire isolé',
        content:
          "**Le serveur filesystem est le premier à installer et le plus simple à restreindre proprement.** Il expose `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` et `create_directory` — tous limités à un ou plusieurs chemins allow-listés.",
        items: [
          '**Installation :** le serveur de référence est `@modelcontextprotocol/server-filesystem`, exécuté via `npx -y` (pas besoin d\'install globale). Goose, Cline et Continue.dev le lancent automatiquement depuis le bloc de configuration.',
          "**Allow-lister les chemins :** le serveur prend un ou plusieurs arguments de répertoire et refuse toute opération en dehors. Donnez toujours un chemin explicite et étroit — jamais `~` ni `/`.",
          "**Outils exposés :** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (remplacements ligne par ligne), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. Le modèle les voit comme `filesystem.read_file` et ainsi de suite.",
          "**Confort :** `directory_tree` retourne un arbre JSON ; idéal pour que le modèle s'oriente avant de lire des fichiers précis. `search_files` fait une recherche récursive façon grep.",
          "**Surface de risque :** le serveur respecte l'allow-list, mais à l'intérieur il a tous les droits lecture/écriture. Traitez l'allow-list comme la seule barrière et choisissez un répertoire workspace dédié plutôt que votre home.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  filesystem:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-filesystem"\n      - "/Users/you/agent-workspace"\n    env: {}',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: "N'allow-listez jamais `/` ni votre répertoire home. Créez un dossier `agent-workspace` dédié, mettez-y des copies des fichiers que l'agent doit toucher et laissez-le opérer uniquement dans ce dossier. Si l'agent dérape, le rayon de blast s'arrête à un répertoire.",
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'Serveurs SQLite et Postgres : interroger de vraies données',
        content:
          "**Les serveurs base transforment le modèle en analyste junior capable de répondre avec de vraies données — à condition de le garder en lecture seule.** Les deux serveurs de référence livrent un outil `query` et (optionnellement) un outil `write_query`.",
        items: [
          "**Serveur SQLite (`@modelcontextprotocol/server-sqlite`)** prend un chemin vers un fichier `.db`. Utile pour l'analyse de logs, le prototypage de schémas et l'exploration d'exports sans monter une base.",
          "**Serveur Postgres (`@modelcontextprotocol/server-postgres`)** prend une connection string. Le pattern recommandé est de créer un rôle dédié en lecture seule pour l'agent et d'utiliser sa connection string.",
          "**Outils exposés :** `query` (SELECT uniquement si configuré en lecture seule), `list_tables`, `describe_table`. Le serveur Postgres ajoute `list_schemas`. Certains forks ajoutent `write_query` — laissez-le désactivé sauf si vous faites confiance au modèle sur cette base.",
          "**Connaissance du schéma :** demandez à l'agent « liste les tables et décris les cinq plus utilisées » avant les questions analytiques — le modèle est bien plus précis quand il a appelé `describe_table` que quand il devine les noms de colonnes.",
          "**Coût :** les requêtes touchent votre base directement. Un `SELECT *` mal formé sur une table de 100 M de lignes est le même incident ici qu'avec un humain — gardez le rôle dans un pool de connexions séparé avec un statement timeout.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  sqlite:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-sqlite"\n      - "--db-path"\n      - "/Users/you/data/events.db"\n    env: {}\n\n  postgres:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-postgres"\n      - "postgresql://agent_ro@127.0.0.1:5432/analytics"\n    env:\n      PGPASSWORD: "${PG_AGENT_PASSWORD}"',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: "Créez le rôle Postgres une fois et ne donnez rien d'autre à l'agent : `CREATE ROLE agent_ro WITH LOGIN PASSWORD '…'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` Ajoutez ensuite `statement_timeout = 30s` au rôle. L'agent ne peut pas écrire, ne peut pas drop et ne peut pas tourner indéfiniment.",
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'Serveur navigateur : piloter Chromium avec Puppeteer ou Playwright',
        content:
          "**Le serveur navigateur est le plus puissant et le plus dangereux des quatre.** Il lance un vrai Chromium et expose la navigation, les clics, le remplissage de formulaires et les screenshots — autrement dit il peut faire tout ce que vous pouvez faire dans un navigateur, y compris soumettre des formulaires.",
        items: [
          "**Serveurs de référence :** `@modelcontextprotocol/server-puppeteer` (plus léger, headless par défaut) et `@modelcontextprotocol/server-playwright` (plus lourd, supporte plusieurs navigateurs). Pour des agents locaux, Puppeteer suffit.",
          "**Outils exposés :** `navigate`, `screenshot`, `click`, `fill`, `select`, `evaluate` (exécuter du JavaScript), `get_page_content`. Le modèle utilise `get_page_content` pour lire le texte structuré et `screenshot` pour vérifier visuellement.",
          "**Latence :** une vraie session navigateur prend 1 à 5 secondes par action. Une navigation multi-étapes consomme facilement 30 à 60 secondes et des dizaines de milliers de tokens parce que le contenu des pages est volumineux. Visez une fenêtre de contexte de 32K+.",
          "**Sélecteurs :** le modèle doit choisir des sélecteurs CSS. Les petits modèles se trompent souvent ; un modèle 27B+ entraîné aux outils gère les patterns courants de manière fiable. Cadrez les tâches — « extrais le titre et le premier paragraphe de cette URL » est bien plus fiable que « navigue le site et trouve la page contact ».",
          "**Bons cas d'usage :** recherche (ouvrir la page, résumer, ajouter aux notes), tests de régression (naviguer, cliquer, screenshot) et remplissage de formulaires sur des pages que vous contrôlez. Mauvais cas : tout ce où un mauvais clic sur le web live a des conséquences.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  puppeteer:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-puppeteer"\n    env:\n      PUPPETEER_HEADLESS: "true"\n      # Block obviously dangerous endpoints at the OS firewall level\n      # rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: "Ne donnez jamais d'identifiants au serveur navigateur. Si vous avez besoin d'une session authentifiée, fournissez à l'agent un profil navigateur pré-authentifié (via `userDataDir`) et ne le laissez jamais naviguer vers des sites à fort impact (banque, email, consoles cloud, formulaires de paiement). Le modèle n'a aucun jugement sur ce que fait un bouton — il voit du texte et clique. Traitez-le comme un stagiaire sans contexte ni recours.",
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'Serveur GitHub : dépôts, issues et PRs depuis un modèle local',
        content:
          "**Le serveur GitHub transforme le travail en langage naturel sur dépôts en appels API.** C'est le plus simple des quatre à configurer et le plus facile à restreindre via les permissions du Personal Access Token (PAT).",
        items: [
          "**Installation :** `@modelcontextprotocol/server-github`, exécuté avec un PAT dans la variable d'environnement `GITHUB_PERSONAL_ACCESS_TOKEN`. Le token est la seule auth — le serveur lui-même n'a pas de configuration séparée.",
          "**Outils exposés :** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, plus des dizaines d'autres. La surface complète est large ; la plupart des tâches utilisent 5 à 10 outils.",
          "**Restreignez le PAT.** Utilisez un PAT fine-grained scopé à des dépôts précis avec les permissions minimales nécessaires (Read pour la navigation, Write pour la création de PR/issues). N'utilisez pas un PAT classique avec `repo` pour un agent expérimental.",
          "**Workflows réels :** triage (« lis les 20 dernières issues ouvertes, regroupe-les, propose des labels »), brouillonnage (« lis le README et ouvre un PR corrigeant les fautes »), reporting (« quels PRs sont stale cette semaine »).",
          "**Surface de risque :** l'agent peut créer des issues et des PRs, commenter et (avec les droits d'écriture) pousser des commits. Désactivez les outils de merge sauf si vous faites confiance au modèle ET au workflow — un merge raté dans un dépôt avec PAT fine-grained est récupérable, mais seulement si vous le voyez vite.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  github:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-github"\n    env:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n      # Fine-grained PAT scoped to one or two test repos,\n      # not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'Un modèle de sécurité qui ne fait pas confiance au modèle',
        content:
          "**Le bon modèle mental est : « le LLM est un stagiaire non fiable avec les clés que vous lui donnez ».** Les capacités viennent des serveurs et des surfaces que vous allow-listez — pas du jugement du modèle.",
        items: [
          "**Limitez le serveur filesystem à un répertoire.** Jamais `~` ni `/`. Choisissez un dossier `agent-workspace/` et mettez-y des copies des fichiers que l'agent doit toucher. Si l'agent dérape, le pire cas est un dossier.",
          '**Faites tourner les serveurs base en lecture seule par défaut.** Un rôle dédié `agent_ro` avec uniquement des grants `SELECT` et un statement timeout de 30 secondes élimine toute une classe d\'incidents.',
          "**Mettez chaque outil d'écriture ou de shell derrière une approbation explicite.** Goose, Cline et Continue.dev supportent tous des règles d'approbation par outil. Auto-approuvez les outils de lecture par défaut ; exigez une approbation pour `write_file`, `edit_file`, `execute_command`, `create_pull_request` et toute action navigateur qui soumet un formulaire.",
          "**Utilisez le journal d'audit.** Chaque client MCP loggue les appels d'outils et leurs résultats. Après une session longue, parcourez le log : vous attraperez le modèle en train d'essayer des choses inattendues (parfois inoffensives, parfois justifiant un resserrement des permissions).",
          "**Restreignez étroitement l'accès aux services tiers.** PATs GitHub limités à deux dépôts de test. Rôles Postgres en lecture seule. Sessions navigateur sans identifiants. Le modèle finira par essayer des choses que vous n'avez pas anticipées ; les limites de ce qu'il peut faire ne doivent pas dépendre de sa bonne volonté.",
          "**Air-gap l'agent pour les données sensibles.** Désactivez l'accès réseau sur l'host pendant l'exécution de l'agent (ou utilisez un network namespace) pour les données privées. La pile locale n'envoie déjà rien dehors, mais la défense en profondeur rattrape les erreurs des serveurs tiers.",
          "**Traitez le choix d'un serveur MCP comme tout choix de dépendance.** Les serveurs de référence sont bien maintenus ; beaucoup de serveurs tiers ne le sont pas. Lisez le code d'un serveur avant d'en installer un qui demande des identifiants.",
        ],
        callouts: [
          {
            type: 'note',
            text: "Une habitude utile de récupération : avant une tâche d'agent non triviale, `git stash` (ou `git checkout -b agent/<task>`). Après la tâche, relisez le diff, gardez ce que vous voulez et jetez le reste. C'est la même pratique qui rend les sessions Cline ou Aider longues sûres — voir le [comparatif Continue.dev vs Cline vs Aider](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) pour le pattern plus large.",
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'MCP local vs Claude Desktop : ce qui change, ce qui reste',
        content:
          "**Le protocole et les serveurs sont identiques. Seuls le modèle et le client changent.** C'est exactement la raison pour laquelle MCP compte — votre investissement outillage se porte proprement entre setups locaux et cloud.",
        columns: ['Couche', 'Claude Desktop', 'Ollama local + Goose'],
        rows: [
          { 'Couche': 'Modèle', 'Claude Desktop': 'Claude (Anthropic, cloud)', 'Ollama local + Goose': 'Gemma 4, GLM-5.1, Qwen3 ou Llama 3.3 (local)' },
          { 'Couche': 'Client', 'Claude Desktop': 'Application Claude Desktop', 'Ollama local + Goose': 'Goose, Cline, Continue.dev ou LM Studio' },
          { 'Couche': 'Serveurs', 'Claude Desktop': 'Mêmes serveurs MCP', 'Ollama local + Goose': 'Mêmes serveurs MCP' },
          { 'Couche': 'Protocole', 'Claude Desktop': 'MCP (JSON-RPC 2.0)', 'Ollama local + Goose': 'MCP (JSON-RPC 2.0)' },
          { 'Couche': 'Coût par requête', 'Claude Desktop': 'Coût API par token', 'Ollama local + Goose': '0 € — inférence locale' },
          { 'Couche': 'Confidentialité', 'Claude Desktop': 'La conversation va chez Anthropic', 'Ollama local + Goose': 'Reste sur la machine' },
          { 'Couche': 'Rate limits', 'Claude Desktop': "Rate limits API s'appliquent", 'Ollama local + Goose': 'Limité uniquement par le débit hardware' },
          { 'Couche': "Qualité des appels d'outils", 'Claude Desktop': 'Best-in-class', 'Ollama local + Goose': 'Bon avec 27B+ ; chute rapide sous 7B' },
          { 'Couche': 'Internet requis', 'Claude Desktop': 'Oui', 'Ollama local + Goose': 'Uniquement si un serveur fait des appels (ex. navigateur)' },
          { 'Couche': 'Temps de mise en place', 'Claude Desktop': '5 minutes', 'Ollama local + Goose': '15 minutes (une fois)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'Choisir un modèle compatible tool calling pour MCP local',
        content:
          "**La fiabilité des appels d'outils croît avec la taille et l'entraînement, pas avec le harness.** Un modèle qui émet des appels malformés dans Cline en émettra de la même manière dans Goose.",
        items: [
          "**Gemma 4 27B (`gemma4:27b`)** — l'entraînement tool calling de Google est best-in-class pour la taille. Tient en 16 Go de mémoire unifiée ou 24 Go de VRAM en Q4_K_M. Bon raisonnement général ; un peu conservateur sur les chaînes d'appels d'outils.",
          "**GLM-5.1 32B (`glm5:32b`)** — le modèle de Zhipu a une fiabilité tool calling très forte et une fenêtre de contexte 128K d'origine. Légèrement plus lourd que Gemma 4 ; tient confortablement sur un GPU 24 Go.",
          "**Qwen3 32B (`qwen3:32b`)** — bien équilibré ; le 32B dense gère MCP proprement et se sent à l'aise dans une boucle d'agent longue. **Qwen3-Coder 30B (`qwen3-coder:30b`)** est le meilleur choix si votre travail d'agent est code.",
          "**Llama 3.3 70B (`llama3.3:70b`)** — le plafond le plus haut, mais le plus lourd. 48 Go+ de mémoire unifiée ou 2× 24 Go de GPUs en Q4_K_M. À utiliser seulement si votre matériel suit ; les modèles plus petits suffisent généralement.",
          "**À éviter pour MCP :** tout ce qui est sous 7B et tout modèle généraliste sans entraînement explicite tool calling. Ils émettent des appels malformés, la boucle bloque, et vous accuserez le harness — mais le harness va bien.",
          "Pour des techniques de prompting structuré qui améliorent la qualité des appels d'outils sur n'importe quel modèle, voir [Chain-of-Thought Prompting](/fr/prompt-engineering/chain-of-thought-prompting).",
          "Pour les benchmarks tête-à-tête, voir [Meilleurs modèles locaux pour tool calling 2026](/fr/power-local-llm/best-local-models-tool-calling-2026).",
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs function calling classique : quelle différence',
        content:
          "**Le function calling, c'est ce que le modèle émet. MCP est le protocole qui permet aux clients et aux outils de se trouver.** Ils vivent à des couches différentes et coopèrent ; l'un ne remplace pas l'autre.",
        items: [
          "**Le function calling** est la capacité côté LLM : le modèle émet un objet JSON structuré décrivant le nom de l'outil et ses arguments. Les Tools OpenAI, les Tools Anthropic et l'API tool call d'Ollama partagent la même idée avec des formats wire légèrement différents.",
          "**MCP** s'ajoute au-dessus : il standardise la façon dont les outils sont décrits, découverts, invoqués et retournés, à travers les processus. Un modèle function calling seul ne sait rien de votre filesystem ; un serveur MCP rend les opérations filesystem disponibles, le client les mappe à l'API function calling du modèle, et le modèle peut alors les appeler.",
          "**Le bénéfice est l'interop.** Écrivez le serveur filesystem une fois ; Claude Desktop, Goose, Cline, Continue.dev et LM Studio l'utilisent tous sans modification. Changez de modèle Claude vers Gemma 4 ; le serveur ne change pas.",
          "**Vous pouvez faire des agents avec du function calling brut.** Vous réimplémenterez les handlers filesystem, base et navigateur par projet. Avec MCP, ce sont des dépendances out-of-the-box.",
          "**Pour des scripts ponctuels, le function calling brut est plus simple.** Pour tout ce que vous voulez réutiliser entre projets ou modèles, MCP devient le chemin moins coûteux en quelques jours.",
        ],
      },
      considerationsFrancophones: {
        id: 'considerations-fr',
        title: 'Considérations pour les utilisateurs francophones',
        content:
          "**Pour la France, la Belgique, la Suisse et le Québec, MCP local répond directement aux préoccupations RGPD et Loi 25 que les agents cloud soulèvent.** Quand le modèle, le client et tous les serveurs d'outils tournent sur la machine, aucune donnée n'est transférée à un sous-traitant tiers.",
        items: [
          "**RGPD et sous-traitance (Article 28) :** un agent cloud fait du fournisseur un sous-traitant — DPA, mesures techniques et organisationnelles, évaluation de transfert hors UE, tout le dossier. Une pile MCP locale supprime ce lien contractuel pour la couche LLM, parce qu'aucune donnée à caractère personnel n'est transmise à un tiers.",
          "**Recommandation CNIL :** la CNIL a publiquement encouragé l'inférence locale pour le traitement de données sensibles dans les secteurs santé, juridique et financier. Un agent MCP local sur une station Apple M5 ou un PC RTX 4090 répond aux exigences sans engager un fournisseur cloud.",
          "**Cabinets et PME francophones :** expertise comptable, notariat, cabinets médicaux, ingénierie, RH — partout où des données client, patient ou salarié ne peuvent pas partir vers OpenAI, Anthropic ou Google. Un Mac mini M5 ou un PC workstation avec RTX 4090 fait tourner un modèle 27B–32B qui résume des dossiers, vérifie des contrats ou teste du code contre des bases internes.",
          "**Belgique et Suisse :** le RGPD belge et la nLPD suisse (en vigueur depuis septembre 2023) suivent la même logique de résidence des données. L'inférence locale satisfait les exigences sans contrat additionnel avec des fournisseurs américains.",
          "**Québec (Loi 25) :** la Loi modernisant les dispositions législatives en matière de protection des renseignements personnels impose une évaluation de facteurs relatifs à la vie privée pour tout transfert hors province. Une pile MCP locale élimine ce transfert pour la couche LLM.",
          "**Audit et journalisation :** le journal d'audit du client MCP (Goose, Cline, Continue.dev) est votre preuve principale que l'agent n'a fait que ce qui était attendu. Conservez-le sur un stockage WORM ou au minimum dans un dépôt Git que l'agent ne peut pas écraser depuis ses propres outils.",
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erreurs fréquentes lors de la mise en place de MCP local',
        items: [
          "**Erreur 1 : utiliser un petit modèle généraliste.** Les modèles sous 7B (et la plupart des 7B–13B généralistes sans fine-tuning tool calling) émettent des appels malformés. Utilisez un modèle 27B+ entraîné aux outils et arrêtez de vous battre contre le harness.",
          "**Erreur 2 : allow-lister votre répertoire home.** Les allow-listings « juste pour tester » de `~` survivent en production. Créez un `agent-workspace` dédié dès le début.",
          "**Erreur 3 : laisser le serveur base en lecture/écriture.** Une requête `DELETE` rédigée par un agent sûr de lui sur une vraie table est exactement l'incident qu'on évite ici. Faites de `agent_ro` votre défaut ; lancez un rôle écriture séparé uniquement pour les tâches qui en ont explicitement besoin, et seulement pour leur durée.",
          "**Erreur 4 : auto-approuver chaque outil.** Le bouton « tout approuver » est pratique et dangereux. Auto-approuvez les outils de lecture (`read_file`, `list_directory`, `query`) ; exigez toujours une approbation pour les outils écriture/shell/PR.",
          "**Erreur 5 : un modèle 32K contexte pour du travail navigateur multi-étapes.** Le contenu des pages est volumineux ; un agent qui navigue trois pages peut épuiser 32K tokens avant même de raisonner. Utilisez un modèle 128K pour les tâches navigateur lourdes.",
          "**Erreur 6 : supposer que l'agent a du jugement.** Il n'en a pas. Le modèle n'a aucun concept de « c'est la base de production » ou « ce PR va déployer ». Les permissions sont votre seule barrière.",
          "**Erreur 7 : installer tous les serveurs de référence dès le départ.** Plus d'outils = plus gros system prompt = sélection d'outil plus lente et moins fiable. Commencez par `filesystem`. Ajoutez les autres seulement quand vous avez un workflow qui les justifie.",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Spécification Model Context Protocol](https://modelcontextprotocol.io/) — Spécification officielle, schéma JSON-RPC, définitions de transport et de cycle de vie.',
          '[Dépôt GitHub modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Serveurs de référence (filesystem, sqlite, postgres, github, puppeteer, etc.) et documentation de configuration.',
          "[Documentation du projet Goose](https://block.github.io/goose/) — Installation CLI, configuration du provider Ollama, syntaxe de configuration des serveurs MCP.",
          "[Bibliothèque de modèles Ollama](https://ollama.com/library) — Modèles locaux disponibles, indicateurs de support tool calling et niveaux de quantification référencés dans ce guide.",
          '[Dépôt GitHub Cline](https://github.com/cline/cline) — Implémentation du client MCP pour VS Code, panneau MCP servers.',
          '[Documentation Continue.dev](https://docs.continue.dev/) — Référence du bloc de configuration `mcpServers` pour le client Continue.dev.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Qu\'est-ce que MCP et pourquoi est-ce important pour l\'IA locale ?',
            a: "Model Context Protocol (MCP) est un protocole ouvert JSON-RPC 2.0 qui permet à un client (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) de connecter un modèle de langage à des serveurs d'outils de manière uniforme. C'est important pour l'IA locale parce que cela standardise la couche qui transforme un modèle de chat en agent — écrivez un serveur d'outils une fois, utilisez-le sous n'importe quel client et n'importe quel modèle, y compris un modèle Ollama local. Sans MCP, chaque projet réinvente le tooling fichier/base/navigateur contre son propre client.",
          },
          {
            q: 'MCP fonctionne-t-il sans Claude Desktop ?',
            a: "Oui. Le protocole est ouvert et entièrement indépendant de Claude Desktop. En 2026, Goose, Cline, Continue.dev et LM Studio livrent tous des implémentations client MCP qui fonctionnent avec des modèles Ollama locaux. Les serveurs de référence (filesystem, sqlite, postgres, puppeteer, github) tournent sans modification sous n'importe quel client conforme.",
          },
          {
            q: 'Quels modèles locaux supportent MCP le mieux ?',
            a: "En mai 2026, les choix les plus fiables sont Gemma 4 27B, GLM-5.1 32B, Qwen3 32B (ou Qwen3-Coder 30B pour le code) et Llama 3.3 70B. Les quatre ont un entraînement tool calling explicite et émettent du JSON function calling propre que les clients MCP peuvent router. Les modèles sous 7B (et la plupart des modèles généralistes sans fine-tuning tool calling) produisent régulièrement des appels malformés.",
          },
          {
            q: 'MCP est-il sûr — l\'agent peut-il supprimer mes fichiers ?',
            a: "Il le peut si vous le laissez faire. La sécurité vient de la configuration des serveurs, pas du protocole. Le serveur filesystem n'opère que dans les chemins que vous allow-listez — limitez-le à un répertoire `agent-workspace` dédié. Le serveur base tourne en lecture seule si vous utilisez un rôle SELECT-only. Exigez toujours une approbation explicite pour les outils écriture, shell et PR ; auto-approuvez seulement les opérations de lecture. Le journal d'audit montre exactement ce que l'agent a fait après coup.",
          },
          {
            q: 'Puis-je écrire mon propre serveur MCP ?',
            a: "Oui — et les SDKs rendent cela direct. Les SDKs officiels TypeScript et Python (`@modelcontextprotocol/sdk` et `mcp`) gèrent la plomberie JSON-RPC. Vous définissez des outils avec leurs JSON Schemas et une fonction handler, et le SDK les expose via stdio. Un serveur single-purpose (un ou deux outils enveloppant une API interne) tient en 50–100 lignes.",
          },
          {
            q: 'MCP fonctionne-t-il sous Windows ?',
            a: "Oui. Ollama, Goose, Cline, Continue.dev et LM Studio tournent tous sous Windows. Les serveurs MCP tournent comme sous-processus Node.js ou Python ; les deux runtimes sont entièrement supportés sous Windows. Le seul piège spécifique est la gestion des chemins — utilisez des forward slashes en config ou échappez correctement les backslashes. Sinon l'expérience est identique à macOS et Linux.",
          },
          {
            q: 'Comment sandboxer les appels d\'outils MCP ?',
            a: "Trois couches couvrent l'essentiel du risque. D'abord, restreignez chaque serveur étroitement au niveau config : filesystem à un répertoire, base à un rôle lecture seule, GitHub à un PAT fine-grained sur des dépôts de test. Ensuite, utilisez les règles d'approbation par outil du client : auto-approbation des reads, approbation pour les writes. Enfin, gardez l'agent dans un workspace `git stash`-friendly pour que tout destructif soit annulable via git. Pour les tâches sensibles, exécutez sur un host sans accès réseau sauf pour les endpoints dont les serveurs ont explicitement besoin.",
          },
          {
            q: 'Les agents MCP peuvent-ils faire des requêtes HTTP ?',
            a: "Oui, via des serveurs spécifiques. Le serveur navigateur (puppeteer ou playwright) pilote un vrai Chromium qui fait les requêtes vers lesquelles le modèle navigue. Plusieurs serveurs tiers exposent des outils `http_get`/`http_post` plus directement. Les serveurs filesystem et base ne font pas de requêtes réseau ; ils opèrent uniquement sur des ressources locales.",
          },
          {
            q: 'MCP fonctionne-t-il nativement avec Ollama ou ai-je besoin d\'un wrapper ?',
            a: "Ollama lui-même ne parle pas MCP — il sert une API chat compatible OpenAI. Vous avez besoin d'un client (Goose, Cline, Continue.dev, LM Studio) pour faire le pont entre l'API chat d'Ollama et les serveurs MCP. Le client route les appels d'outils du modèle vers le bon serveur MCP et réinjecte les résultats dans la conversation. Du point de vue utilisateur, il n'y a pas de configuration au-delà de l'installation du client et de son pointage vers Ollama.",
          },
          {
            q: 'Quelle est la différence entre MCP et function calling ?',
            a: "Le function calling, c'est le LLM qui émet du JSON structuré nommant un outil et ses arguments — c'est une capacité du modèle. MCP est le protocole qui permet aux serveurs d'outils et aux clients de décrire, découvrir, invoquer et retourner ces outils à travers les processus — c'est une couche d'interop. Ils coopèrent : le client convertit les définitions d'outils MCP au format function calling du modèle, le modèle émet un function call, le client mappe l'appel vers un serveur MCP, et le serveur l'exécute. Sans MCP vous pouvez toujours faire du function calling ; vous réimplémentez les handlers filesystem/base/navigateur par projet. Avec MCP, les mêmes serveurs fonctionnent sous n'importe quel client.",
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          "[Meilleurs modèles locaux pour tool calling 2026](/fr/power-local-llm/best-local-models-tool-calling-2026) — benchmarks tête-à-tête pour les modèles recommandés ci-dessus (Gemma 4, GLM-5.1, Qwen3, Llama 3.3).",
          "[Les agents locaux autonomes fonctionnent vraiment](/fr/power-local-llm/autonomous-local-agents-actually-work) — un retour terrain sur ce qu'un agent MCP local peut et ne peut pas faire de manière fiable sur une tâche longue.",
          "[Continue.dev vs Cline vs Aider : meilleur agent de code local 2026](/fr/power-local-llm/continue-dev-vs-cline-vs-aider-local) — contexte agent adjacent pour le travail orienté code ; Cline et Continue.dev sont aussi des clients MCP.",
          '[Meilleurs LLMs locaux en 2026](/fr/local-llms/best-local-llms-2026) — autorité modèle pour le paysage open-weights plus large.',
          '[Remplacer Zapier par des agents IA locaux](/fr/power-local-llm/replace-zapier-with-local-ai-agents) — cadrage automatisation de workflows pour la même pile MCP.',
          '[Hub Power Local LLM](/fr/power-local-llm) — bibliothèque complète des guides.',
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
    title: 'Ollama をデータベースと API に MCP で接続：ローカルエージェントセットアップ 2026',
    seoTitle: 'Ollama + MCP ローカル：DB と API 接続ガイド 2026',
    intro:
      'Model Context Protocol (MCP) は、ローカル Ollama モデルとマシンの他の部分をつなぐ「足りない層」です。設定ファイル 1 つと tool calling 対応モデルがあれば、同じエージェントが Postgres を照会し、サンドボックス化されたディレクトリで読み書きし、ヘッドレスブラウザを操作し、GitHub プルリクエストを開けます — すべてローカル、すべてオフライン。本ガイドではモデルを信頼しない前提のセキュリティモデルとともに、エンドツーエンドで動作する構成を解説します。',
    metaDescription:
      'ローカル AI エージェントを 2026 年に Ollama と MCP で構築。ファイルシステム、SQLite/Postgres、ブラウザ、GitHub サーバー、動作する設定例とサンドボックスモデル。',
    twitterDescription:
      'ローカル Ollama + MCP = ファイルを読み、データベースを照会し、ブラウザを操作する AI エージェント — 完全オフライン。動作する設定と最初に入れるべき 4 サーバー、モデルを信頼しないセキュリティ設計。',
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
      'Ollama 経由でローカル LLM を運用し、クラウドプロバイダーに何も送信せずにデータベース照会、ファイル編集、ブラウザ自動化など実際にアクションできるモデルを求める開発者および技術に明るいユーザー。',
    readTime: '15分で読める',
    educationalLevel: 'Advanced',
    primaryTerm: 'ローカル MCP エージェント',
    targetKeywords: [
      'mcp ollama 日本語',
      'ローカル mcp サーバー 構築',
      'model context protocol ローカル',
      'ollama tool calling 2026',
      'ローカル ai エージェント mcp',
      'mcp claude desktop なし',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) は、ローカル Ollama モデルがツールを呼び出すための仕組みです — ファイルを読む、SQL クエリを実行する、Web リンクをクリックする、プルリクエストを開く — すべて標準 JSON-RPC インターフェース経由で、MCP 互換クライアント（2026 年時点で Goose、Cline、Continue.dev、LM Studio）が共通に話します。プロトコルはオープン、リファレンスサーバーはオープンソース、2026 年現在 Claude Desktop もクラウドアカウントも必要ありません。Ollama を起動し、MCP クライアントを 1 つ入れ、使いたいサーバーを記述した `mcp.json` を置けば、tool calling 対応モデル（Gemma 4、GLM-5.1、Qwen3、Llama 3.3）が、あなたの管理する権限のもとでマシン上で動作するエージェントになります。鍵となるのはセキュリティモデルです：書き込み系ツールを自動承認しない、ファイルシステムアクセスを単一ディレクトリに限定する、データベースサーバーは既定で read-only にする。**',
    quickAnswerTop: {
      ja: {
        question: '2026 年に MCP と Ollama でローカル AI エージェントは動かせますか？',
        answer:
          'はい — そしてセットアップは午後 1 回で終わる規模になりました。tool calling 対応モデル（Gemma 4、GLM-5.1、Qwen3 または Llama 3.3 70B）で Ollama を起動し、MCP 対応クライアントを入れます（Goose が最も直接的な CLI、Cline、Continue.dev、LM Studio も 2026 年初頭に MCP 対応を追加しました）。必要な機能に応じて MCP サーバーを追加します — ファイル用に `filesystem`、データベース用に `sqlite` または `postgres`、ブラウザ自動化用に `puppeteer` または `playwright`、リポジトリ管理用に `github`。プロトコルは Claude Desktop と同じです；違いはモデルとクライアントだけです。安全策：filesystem サーバーを単一ディレクトリに限定、データベースは既定で read-only、書き込みやシェルツールは決して自動承認しない。',
        bullets: [
          'MCP はオープンで完全にローカル動作 — Claude Desktop も Anthropic アカウントもクラウド呼び出しも不要です。',
          'Ollama がモデルを提供し、MCP クライアント（Goose、Cline、Continue.dev、LM Studio）が JSON-RPC 経由で Ollama と MCP サーバーを橋渡しします。',
          '4 つのリファレンスサーバーで実用ワークフローのほぼすべてに対応：filesystem、sqlite/postgres、puppeteer/playwright（ブラウザ）、github。',
          'tool call の信頼性はモデル特性：Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B はクリーンに動作します。7B 未満のモデルは tool call の形式不正を頻発します。',
          'セキュリティモデル：filesystem は 1 ディレクトリ、データベースサーバーは read-only、書き込みやシェルツールは明示的承認の後ろに。',
          'コスト：API 費用は 0 円、ただしトークンはローカルで消費 — エージェントループはトークン消費が多いため、32K+ コンテキストモデルと実用速度で動かせるマシンを用意してください。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'MCP が解放するもの', anchor: '#what-mcp-unlocks' },
      { label: 'MCP サーバーの比較', anchor: '#server-comparison' },
      { label: 'アーキテクチャ：構成要素のつながり', anchor: '#architecture' },
      { label: 'セットアップ：Ollama + Goose を 15 分で', anchor: '#setup' },
      { label: 'Filesystem サーバー', anchor: '#filesystem-server' },
      { label: 'SQLite と Postgres サーバー', anchor: '#database-server' },
      { label: 'ブラウザサーバー（Puppeteer / Playwright）', anchor: '#browser-server' },
      { label: 'GitHub サーバー', anchor: '#github-server' },
      { label: 'セキュリティモデル', anchor: '#security-model' },
      { label: 'ローカル MCP vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'tool calling モデルの選定', anchor: '#picking-model' },
      { label: 'MCP vs プレーン Function Calling', anchor: '#mcp-vs-function-calling' },
      { label: '日本ユーザーのための活用ポイント', anchor: '#nihon-katsuyo' },
      { label: 'よくある間違い', anchor: '#common-mistakes' },
      { label: '出典', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '関連資料', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      'このスライドデッキは以下を扱います：MCP がローカル Ollama モデルをデータベース照会・ファイル読み書き・ブラウザ操作・PR 作成が可能なエージェントに変える仕組み（すべてオフライン）、4 つのリファレンスサーバー（filesystem、SQLite/Postgres、ブラウザ、GitHub）のセットアップ難易度とリスク評価、Goose を使った 6 ステップセットアップ、LLM を信頼しないセキュリティモデル、Claude Desktop との直接比較。ローカル MCP エージェントリファレンスカードとして PDF をダウンロードしてください。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP はツール用の JSON-RPC 2.0 プロトコルです。** モデルは（クライアント経由で）1 つ以上の MCP サーバーに接続します。各サーバーは Tools（呼び出せる関数）、Resources（読み取り可能なデータ）、Prompts（テンプレート）を公開します。クライアントが Claude Desktop、Goose、Cline、Continue.dev、LM Studio のいずれであっても wire format は同一です。',
          '**Ollama は MCP を直接話さない — MCP クライアントが Ollama をラップします。** Goose（Block）はネイティブ Ollama 対応を持つ最もシンプルなオープンソース CLI です。Cline、Continue.dev、LM Studio は 2026 年初頭に MCP クライアント対応を追加しました。',
          '**4 つのリファレンスサーバーが大半のユースケースを網羅：** `filesystem`（サンドボックス化されたディレクトリの読み書き）、`sqlite` と `postgres`（データベースクエリ、既定で read-only）、`puppeteer` または `playwright`（ヘッドレスブラウザ操作）、`github`（personal access token を使った repo と PR の管理）。',
          '**tool call の信頼性はモデルサイズと学習に比例します。** Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B は Q4_K_M で MCP をクリーンに処理します。7B 未満のモデルは形式不正な tool call を頻繁に出してループを止めます。',
          '**セキュリティモデルはモデルを信頼しない前提です。** filesystem サーバーは単一ディレクトリに限定、データベースサーバーは read-only ロールで運用、`execute_command` や `write_file` は決して自動承認しない、長時間セッション後は監査ログを確認する。',
          '**ローカル MCP vs Claude Desktop：** プロトコルもサーバーエコシステムも同一です。ローカルスタックはクラウドモデルをオフラインモデルに置き換え — プライバシー、トークン課金なし、レート制限なしと引き換えに、やや低い知能とセキュリティ設定の自己責任を負います。',
          '**API 費用は 0 円ですが、トークンは実コストです。** エージェントループは多段タスク 1 件で 30K–80K トークンを消費することがあります。最低でも 32K コンテキストモデル、128K あれば余裕があります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**プロトコル：** JSON-RPC 2.0 を stdio（ローカルサブプロセス）または HTTP/SSE（リモート）で通信。ローカルエージェントはほぼ stdio のみ使用します。',
          '**メンテナー：** Anthropic（オープンソース仕様）；リファレンスサーバーは GitHub の `modelcontextprotocol/servers` で管理、加えて成長中のサードパーティーエコシステム。',
          '**2026 年のローカルクライアント：** Goose（Block）、Cline（VS Code 拡張）、Continue.dev（VS Code/JetBrains）、LM Studio（デスクトップアプリ）、加えて複数の CLI ツール。',
          '**互換 Ollama モデル：** ネイティブ tool call 学習を持つすべてのモデル。2026 年 5 月時点：Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。',
          '**サーバー transport の既定：** ローカルプロセスは stdio；複数マシンや複数エージェント間でサーバーを共有する場合のみ HTTP/SSE。',
          '**設定は 1 ファイルに集約：** `~/.config/goose/config.yaml`（Goose）、`~/.continue/config.json` の MCP ブロック（Continue.dev）、または Cline の設定 UI の `mcpServers`。形式はどれも同じ：サーバー名、command、args、env vars。',
          '**Claude Desktop 不要。** プロトコルは Claude Desktop の独占ストーリーより古く、すべてのリファレンスサーバーは MIT/Apache ライセンスで、準拠する任意のクライアントで動作します。',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'MCP がローカルモデルに対して実際に解放するもの',
        content:
          '**ツールのないローカル LLM はテキストでしか応答できません。MCP があれば、同じモデルがマシン上でアクションできます。** これが chatbot とエージェントの違いです。',
        items: [
          '**「このリポジトリのすべての TODO を見つけ、ファイルごとにグルーピングして、Markdown 要約を `notes/todos.md` に書き出してください」** — `filesystem` サーバーが読み、モデルがグルーピングし、同じサーバーが書き込みます。エンドツーエンドで往復 1 回。',
          '**「今四半期の売上トップ 10 顧客を出して、グラフ化してください」** — `postgres` サーバーが SQL を実行（read-only ロール）、モデルが要約、`filesystem` 経由で CSV を書き出してチャートツールに渡します。',
          '**「Hacker News のフロントページを開いて、AI 関連トップ 3 記事を見つけて要約し、私の reading list に追記してください」** — `puppeteer` サーバーがヘッドレスブラウザを操作し、モデルが抽出と要約、`filesystem` が追記します。',
          '**「私の fork に対して `chore: bump deps` というタイトルのドラフト PR を開き、失敗中の CI run を本文にリンクしてください」** — `github` サーバーが PR を作成、run を取得、本文にリンクを書き込みます。',
          '**「`events.db` の最新 100 行を見て、新しいエラースパイクの原因になっているユーザー ID を教えてください」** — `sqlite` サーバーが照会、モデルが推論、回答をチャットパネルで読みます。',
          'いずれも以前はクラウドモデルとホストツール、または手書きスクリプトを必要とした「文 → アクション」ワークフローです。MCP は同じサーバーを複数クライアント間で、同じモデルを複数サーバー間で再利用できる層です。',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: '最もよく使われる 4 つの MCP サーバーの比較',
        content:
          '下記のリファレンスサーバーは「ローカルモデルに何か実際の作業をしてほしい」というロングテールをカバーします。すべてオープンソースで、MCP クライアントが起動するローカルサブプロセスとして動作します。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'まず filesystem サーバーから（5 分、低リスク）、データ作業に SQLite を追加、必要が生じたらブラウザサーバー、マシン上のモデルを信頼できるようになったら GitHub を追加してください。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルエージェントにさせたい作業の 90 % をこの 4 つで処理できます。filesystem サーバーは選んだフォルダ内でファイルを読み書きします。SQLite または Postgres サーバーはデータベースに対してクエリを実行します。ブラウザサーバーは実際の Chromium ウィンドウを操作するため、JavaScript を必要とするページもモデルが読めます。GitHub サーバーは自分のリポジトリで issue や PR を開きます。すべて 1 コマンドでインストール可能、自分のマシン上のサブプロセスとして動作し、必要な場合を除いてインターネットに出ません（ブラウザは出ますが、他は出ません）。',
          },
        ],
        columns: ['MCP サーバー', '可能になること', 'セットアップ難度', 'リスクレベル', '適した用途'],
        rows: [
          { 'MCP サーバー': 'Filesystem', '可能になること': 'サンドボックス化されたディレクトリでのファイル読み書き', 'セットアップ難度': '簡単（パス 1 つを allow-list）', 'リスクレベル': '中 — 範囲を厳しく絞ること', '適した用途': '個人の自動化、ノート、リポジトリ要約' },
          { 'MCP サーバー': 'SQLite', '可能になること': 'ローカル SQLite データベースファイルへのクエリ', 'セットアップ難度': '簡単（.db ファイルへのパス）', 'リスクレベル': 'read-only なら低、書き込みありは中', '適した用途': 'データ探索、ログ解析、プロトタイピング' },
          { 'MCP サーバー': 'Postgres', '可能になること': 'connection string 経由の Postgres データベースへのクエリ', 'セットアップ難度': '中（ロール + URL）', 'リスクレベル': '中 — read-only ロールを使用', '適した用途': '本番データ探索、レポーティング、BI プロトタイプ' },
          { 'MCP サーバー': 'Puppeteer / Playwright', '可能になること': 'ブラウジング、スクレイピング、フォーム入力のためのヘッドレスまたは表示モードの Chromium 操作', 'セットアップ難度': '難（ブラウザバイナリ、セレクタ、レイテンシ）', 'リスクレベル': '高 — フォーム送信や任意のクリックが可能', '適した用途': 'リサーチ、スクレイピング、回帰テスト' },
          { 'MCP サーバー': 'GitHub', '可能になること': 'リポジトリ一覧、ファイル読み取り、issue と PR の作成', 'セットアップ難度': '簡単（環境変数で PAT を渡す）', 'リスクレベル': '中 — トークンを特定 repo に絞る', '適した用途': '開発ワークフロー、トリアージ、PR ドラフト' },
          { 'MCP サーバー': 'Custom', '可能になること': 'JSON-RPC ツールとして表現できる任意のもの', 'セットアップ難度': '難（自分でサーバーを書く）', 'リスクレベル': '可変', '適した用途': '社内 API、ニッチなシステム、glue code' },
        ],
      },
      architecture: {
        id: 'architecture',
        title: '構成要素のつながり',
        content:
          '**3 つのプロセス、共有プロトコル 1 つ。** モデルは Ollama 内、クライアントが MCP を話し、各サーバーが小さなツールセットを公開します。tool call はクライアント → サーバーに飛び、ローカル実行され、JSON が返ります。',
        items: [
          '**Ollama** はバックグラウンドサービスとして `127.0.0.1:11434` で動作し、OpenAI 互換 API でモデルを提供します。MCP のことは知りません — chat completion に応答し、モデルが要求すれば tool call を出すだけです。',
          '**MCP クライアント**（Goose、Cline、Continue.dev、LM Studio）が橋渡し役です。モデルについては Ollama と、ツールについては MCP サーバーと話します。モデルが tool call を出すと、クライアントが正しいサーバーへルーティングし、結果を取得し、会話に戻します。',
          '**MCP サーバー** は機能ごとに独立したサブプロセスです。stdio で JSON-RPC 2.0 を話します。各サーバーが Tools、Resources、Prompts を公開し、クライアントがそれらを統合してモデルに見せます。',
          '**stdio transport ですべてがローカルに留まります。** サーバーはクライアントによって起動され、stdin/stdout で通信し、クライアント終了時に終了します。サーバー自身が接続を開かない限り（ブラウザサーバーは開きます、filesystem とデータベースサーバーは開きません）、ネットワーク経由になりません。',
          '**モデルはフラットなツールリストを見ます。** モデル視点ではサーバーは存在せず、`filesystem.read_file`、`sqlite.query`、`puppeteer.navigate` のようなツール名のリストがあるだけです。クライアントがルーティングを処理します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アーキテクチャは Claude Desktop と同一です。違いはモデル（Claude の代わりにローカル Ollama モデル）とクライアント（Claude Desktop の代わりに Goose/Cline/Continue.dev/LM Studio）です。MCP サーバーは同じサーバー — 今日 Claude Desktop で動かしている filesystem サーバーは、明日 Goose 配下で変更なく動作します。',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'セットアップ：Ollama + Goose を 15 分で',
        content:
          '**Goose は 2026 年に動作するローカル MCP エージェントへの最短ルートです。** Block のオープンソース CLI で、ネイティブ Ollama 対応、対話型チャットインターフェース、すべての MCP サーバー設定を 1 ファイルに集約しています。Continue.dev、Cline、LM Studio でも動作しますが、初回セットアップのコストは Goose が最も低いです。',
        items: [
          '**Step 1 — Ollama をインストール。** `ollama.com/download`（macOS/Windows/Linux）からダウンロード。`curl http://127.0.0.1:11434/api/tags` でサービスが動作していることを確認してください。',
          '**Step 2 — tool calling モデルを pull。** Gemma 4 27B（`gemma4:27b`）、GLM-5.1 32B（`glm5:32b`）、Qwen3 32B（`qwen3:32b`）または Llama 3.3 70B（`llama3.3:70b`）から選択。16 GB unified memory または 12 GB VRAM で 27B–32B を Q4_K_M で快適に動かせます。',
          '**Step 3 — Goose をインストール。** `pipx install goose-ai`（macOS、Linux）または Goose リリースページからインストーラをダウンロード。CLI は `goose` としてインストールされます。',
          '**Step 4 — Ollama をプロバイダーとして設定。** `goose configure` を実行、`ollama` をプロバイダーに選択、モデルを pull したものに、host を `http://127.0.0.1:11434` に設定。Goose は `~/.config/goose/config.yaml` に書き込みます。',
          '**Step 5 — filesystem MCP サーバーを追加。** `~/.config/goose/config.yaml` に `mcpServers` ブロックを追加します（下に設定例）。`goose session` を再起動し、テストディレクトリのファイル一覧を尋ねてください。最初のターンでサーバー接続が確認できます。',
          '**Step 6 — 実際のタスクで検証。** `goose session` を試し、「`notes/` 内の各 Markdown ファイルについて、タイトルと単語数の一覧を作って結果を `notes/index.md` に書いてください」と尋ねます。エージェントが読み、要約し、書き戻せばループは動作しています。',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:27b\n\n# 2. Install Goose\npipx install goose-ai\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:27b\n# Host:     http://127.0.0.1:11434\n\n# 4. Start a session — Goose reads ~/.config/goose/config.yaml\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'すでに Cline や Continue.dev を使っているなら Goose をスキップしてそちらを使ってください — どちらも 2026 年初頭のリリースで MCP サーバー対応を追加しました。Cline の「MCP Servers」パネルはリファレンスサーバーをワンクリックでインストール、Continue.dev は `~/.continue/config.json` の `mcpServers` を読みます（下記 Goose 設定ブロックと同形式）。モデルとサーバーは同じ；ホストアプリだけが変わります。',
          },
        ],
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem サーバー：サンドボックス化されたディレクトリの読み書き',
        content:
          '**filesystem サーバーは最初に入れるべきサーバーで、安全に範囲を絞るのも最も簡単です。** `read_file`、`write_file`、`list_directory`、`move_file`, `search_files`、`create_directory` を公開し、すべて allow-list された 1 つ以上のパスに制限されます。',
        items: [
          '**インストール：** リファレンスサーバーは `@modelcontextprotocol/server-filesystem`、`npx -y` 経由で実行（グローバルインストール不要）。Goose、Cline、Continue.dev はすべて設定ブロックから自動起動します。',
          '**パスを allow-list：** サーバーは 1 つ以上のディレクトリ引数を受け取り、それ以外の場所での操作を拒否します。常に明示的で範囲の狭いパスを渡してください — `~` や `/` は絶対に避けてください。',
          '**公開ツール：** `read_file`、`read_multiple_files`、`write_file`、`edit_file`（行ベースの置換）、`list_directory`、`search_files`、`move_file`、`create_directory`、`directory_tree`。モデルからは `filesystem.read_file` のように見えます。',
          '**便利機能：** `directory_tree` は JSON ツリーを返し、特定ファイルを読む前にモデルが構造を把握するのに最適です。`search_files` は grep のような再帰検索を行います。',
          '**リスク面：** サーバーは allow-list を尊重しますが、リスト内では完全な読み書き権限を持ちます。allow-list を唯一のバリアと捉え、ホームフォルダではなく専用 workspace ディレクトリを選んでください。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  filesystem:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-filesystem"\n      - "/Users/you/agent-workspace"\n    env: {}',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: '`/` やホームディレクトリは絶対に allow-list しないでください。専用の `agent-workspace` フォルダを作成し、エージェントに触らせたいファイルのコピーをそこに置き、そのフォルダ内でのみ動作させてください。エージェントが暴走しても、被害は 1 ディレクトリで止まります。',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'SQLite と Postgres サーバー：実データを照会する',
        content:
          '**データベースサーバーはモデルを実データで質問に答えられるジュニアアナリストに変えます — read-only に保つことが前提です。** どちらのリファレンスサーバーも `query` ツールと（オプションで）`write_query` ツールを提供します。',
        items: [
          '**SQLite サーバー（`@modelcontextprotocol/server-sqlite`）** は `.db` ファイルへのパスを取ります。ログ解析、スキーマのプロトタイピング、データベースを立てずにエクスポートを探索するのに有用です。',
          '**Postgres サーバー（`@modelcontextprotocol/server-postgres`）** は connection string を取ります。推奨パターンはエージェント用の専用 read-only ロールを作成し、そのロールの connection string を使うことです。',
          '**公開ツール：** `query`（read-only 設定時は SELECT のみ）、`list_tables`、`describe_table`。Postgres サーバーは `list_schemas` を追加します。一部のフォークは `write_query` を追加しますが、このデータベースでモデルを信頼できる場合以外は無効化しておいてください。',
          '**スキーマ認識：** 分析的な質問の前に「テーブル一覧を出して、よく使われる 5 つを describe してください」とエージェントに頼んでください — `describe_table` を呼んだモデルは、カラム名を推測したモデルよりはるかに精度が高くなります。',
          '**コスト：** クエリは直接データベースに飛びます。1 億行テーブルへの不適切な `SELECT *` は人間がやった場合と同じ事故です — ロールは独立した接続プールに置き、statement timeout を設定してください。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  sqlite:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-sqlite"\n      - "--db-path"\n      - "/Users/you/data/events.db"\n    env: {}\n\n  postgres:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-postgres"\n      - "postgresql://agent_ro@127.0.0.1:5432/analytics"\n    env:\n      PGPASSWORD: "${PG_AGENT_PASSWORD}"',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'Postgres ロールは一度作成し、エージェントにそれ以上の権限を与えないでください：`CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` 続いてロールに `statement_timeout = 30s` を設定してください。エージェントは書き込み不可、drop 不可、無限実行不可になります。',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'ブラウザサーバー：Puppeteer または Playwright で Chromium を操作',
        content:
          '**ブラウザサーバーは 4 つのうち最も強力で最も危険です。** 実際の Chromium を起動し、ナビゲーション、クリック、フォーム入力、スクリーンショットを公開します — つまりブラウザでできるすべてが可能で、フォーム送信も含まれます。',
        items: [
          '**リファレンスサーバー：** `@modelcontextprotocol/server-puppeteer`（軽量、既定でヘッドレス）と `@modelcontextprotocol/server-playwright`（重め、複数ブラウザ対応）。ローカルエージェントには Puppeteer で十分です。',
          '**公開ツール：** `navigate`、`screenshot`、`click`、`fill`、`select`、`evaluate`（JavaScript 実行）、`get_page_content`。モデルは構造化テキストを `get_page_content` で読み、視覚的確認に `screenshot` を使います。',
          '**レイテンシ：** 実ブラウザセッションはアクションあたり 1–5 秒。多段ブラウジングは簡単に 30–60 秒、数万トークンを消費します（ページ内容が大きいため）。32K+ コンテキストウィンドウを使ってください。',
          '**セレクタ：** モデルは CSS セレクタを選ぶ必要があります。小さいモデルはよく外しますが、27B+ tool calling モデルなら一般的なパターンを安定して扱います。タスクは絞ってください — 「この URL のタイトルと最初の段落を抽出してください」のほうが「サイトを巡回して contact ページを探してください」よりはるかに信頼できます。',
          '**良いユースケース：** リサーチ（ページを開く、要約する、ノートに追記）、回帰テスト（ナビゲート、クリック、screenshot）、自分が管理するページのフォーム入力。悪いユースケース：本番 Web 上の誤クリックが結果を伴うあらゆる作業。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  puppeteer:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-puppeteer"\n    env:\n      PUPPETEER_HEADLESS: "true"\n      # Block obviously dangerous endpoints at the OS firewall level\n      # rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'ブラウザサーバーに認証情報を絶対に渡さないでください。認証済みセッションが必要なら、事前認証されたブラウザプロファイルを `userDataDir` 経由で渡し、高インパクトサイト（バンキング、メール、クラウドコンソール、決済フォーム）には絶対に navigate させないでください。モデルはボタンの意味を判断できません — テキストを見てクリックするだけです。コンテキストも復旧手段もないインターンと同じ扱いをしてください。',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub サーバー：ローカルモデルから repo、issue、PR を扱う',
        content:
          '**GitHub サーバーは自然言語のリポジトリ作業を API call に変換します。** 4 つの中で最も設定が簡単で、personal access token (PAT) の権限を使って範囲を厳しく絞るのも最も容易です。',
        items: [
          '**インストール：** `@modelcontextprotocol/server-github`、`GITHUB_PERSONAL_ACCESS_TOKEN` 環境変数に PAT を入れて実行します。トークンが唯一の認証 — サーバー自体に別途設定はありません。',
          '**公開ツール：** `search_repositories`、`get_file_contents`、`create_or_update_file`、`create_pull_request`、`list_issues`、`create_issue`、`add_issue_comment`、`merge_pull_request`、ほか数十。フルセットは大きいですが、ほとんどのタスクは 5–10 ツールで足ります。',
          '**PAT を絞る。** 特定 repo に絞った fine-grained PAT を、必要最小限の権限（閲覧は Read、PR/issue 作成は Write）で使ってください。実験的エージェントに対して `repo` 権限のクラシック PAT は使わないでください。',
          '**実例ワークフロー：** トリアージ（「直近の open issue 20 件を読んで、グルーピングしてラベル案を出してください」）、ドラフト作成（「README を読んで誤字を直す PR を開いてください」）、レポーティング（「今週 stale な PR を教えてください」）。',
          '**リスク面：** エージェントは issue や PR を作成、コメント、（書き込み権限があれば）コミットを push できます。merge 系ツールはモデルとワークフローの両方を信頼できる場合以外は無効化してください — fine-grained PAT の repo での誤マージは復旧可能ですが、すぐに気付いた場合のみです。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  github:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-github"\n    env:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n      # Fine-grained PAT scoped to one or two test repos,\n      # not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'モデルを信頼しないセキュリティモデル',
        content:
          '**正しいメンタルモデルは「LLM はあなたが渡した鍵を持つ信頼できないインターン」です。** 能力はサーバーと allow-list したインターフェースから来ます — モデルの判断力からは来ません。',
        items: [
          '**filesystem サーバーを 1 ディレクトリに限定。** `~` や `/` は絶対に使わないでください。`agent-workspace/` フォルダを選び、エージェントに触らせたいファイルのコピーを置きます。エージェントが暴走しても、最悪のケースは 1 フォルダです。',
          '**データベースサーバーは既定で read-only 運用。** 専用の `agent_ro` ロールを `SELECT` のみの権限と 30 秒の statement timeout で作成すれば、ある種のインシデントカテゴリ全体が消えます。',
          '**書き込みやシェル系ツールはすべて明示的承認の後ろに。** Goose、Cline、Continue.dev はそれぞれツール単位の承認ルールをサポートしています。読み取りツールは既定で許可、`write_file`、`edit_file`、`execute_command`、`create_pull_request`、フォーム送信を行うブラウザアクションには承認を要求してください。',
          '**監査ログを使ってください。** すべての MCP クライアントは tool call と結果を記録します。長時間セッション後にログをスキャンしてください：モデルがあなたが想定しなかった操作を試みていることに気付けます（無害な場合も、権限を絞り直すべき場合もあります）。',
          '**サードパーティーアクセスはトークンスコープを狭く。** GitHub PAT は 2 つのテスト repo に絞る。Postgres ロールは read-only。ブラウザセッションは認証情報なし。モデルはいずれあなたが想定しなかった操作を試みます；できることの限界は、モデルが正しく振る舞うことに依存させてはいけません。',
          '**機密データ作業時はエージェントを air-gap してください。** プライベートデータを扱うとき、エージェント実行中はホストのネットワークアクセスを無効化（または network namespace を使用）してください。ローカルスタックはマシンから何も出しませんが、defense-in-depth はサードパーティーサーバーの不具合をキャッチします。',
          '**MCP サーバー選定は依存関係選びと同様に扱ってください。** リファレンスサーバーはよくメンテされていますが、サードパーティーサーバーの多くはそうではありません。認証情報を渡す前にサーバーのコードを読んでください。',
        ],
        callouts: [
          {
            type: 'note',
            text: '便利な失敗回復習慣：些細でないエージェントタスクの前に `git stash`（または `git checkout -b agent/<task>`）。タスク後に diff を確認し、欲しい部分だけ残し、それ以外は破棄します。これは長時間の Cline や Aider セッションを安全に保つ慣習と同じです — 広いパターンは [Continue.dev vs Cline vs Aider 比較](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) を参照してください。',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'ローカル MCP vs Claude Desktop：何が変わり、何が残るか',
        content:
          '**プロトコルとサーバーは同一です。モデルとクライアントだけが変わります。** これが MCP の重要性そのものです — ツーリング投資はローカルとクラウド構成間でクリーンに移植できます。',
        columns: ['レイヤー', 'Claude Desktop', 'ローカル Ollama + Goose'],
        rows: [
          { 'レイヤー': 'モデル', 'Claude Desktop': 'Claude（Anthropic、クラウド）', 'ローカル Ollama + Goose': 'Gemma 4、GLM-5.1、Qwen3、または Llama 3.3（ローカル）' },
          { 'レイヤー': 'クライアント', 'Claude Desktop': 'Claude Desktop アプリ', 'ローカル Ollama + Goose': 'Goose、Cline、Continue.dev、または LM Studio' },
          { 'レイヤー': 'サーバー', 'Claude Desktop': '同じ MCP サーバー', 'ローカル Ollama + Goose': '同じ MCP サーバー' },
          { 'レイヤー': 'プロトコル', 'Claude Desktop': 'MCP（JSON-RPC 2.0）', 'ローカル Ollama + Goose': 'MCP（JSON-RPC 2.0）' },
          { 'レイヤー': 'リクエストコスト', 'Claude Desktop': 'トークン課金 API', 'ローカル Ollama + Goose': '0 円 — ローカル推論' },
          { 'レイヤー': 'プライバシー', 'Claude Desktop': '会話は Anthropic に送信', 'ローカル Ollama + Goose': 'マシン上に留まる' },
          { 'レイヤー': 'レート制限', 'Claude Desktop': 'API レート制限が適用', 'ローカル Ollama + Goose': 'ハードウェアスループットのみが制約' },
          { 'レイヤー': 'tool call 品質', 'Claude Desktop': 'best-in-class', 'ローカル Ollama + Goose': '27B+ なら良好、7B 未満で急激に劣化' },
          { 'レイヤー': 'インターネット必要', 'Claude Desktop': '必要', 'ローカル Ollama + Goose': 'サーバー自身が fetch する場合のみ（例：ブラウザ）' },
          { 'レイヤー': 'セットアップ時間', 'Claude Desktop': '5 分', 'ローカル Ollama + Goose': '15 分（初回のみ）' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'ローカル MCP 用 tool calling モデルの選定',
        content:
          '**tool call の信頼性はモデルサイズと学習に依存し、ハーネスではありません。** Cline で形式不正な tool call を出すモデルは、Goose でも同じ理由で形式不正な tool call を出します。',
        items: [
          '**Gemma 4 27B（`gemma4:27b`）** — Google の tool call 学習はサイズに対して best-in-class。16 GB unified memory または 24 GB VRAM で Q4_K_M に収まります。一般推論は良好；連鎖した tool call にはやや保守的です。',
          '**GLM-5.1 32B（`glm5:32b`）** — Zhipu のモデルは tool call 信頼性が非常に高く、out of the box で 128K コンテキストウィンドウ。Gemma 4 よりやや重め；24 GB GPU に余裕で収まります。',
          '**Qwen3 32B（`qwen3:32b`）** — バランスが良く、dense な 32B が MCP をクリーンに処理し、長時間エージェントループでも安定します。**Qwen3-Coder 30B（`qwen3-coder:30b`）** はエージェント作業がコード形態の場合の最良の選択です。',
          '**Llama 3.3 70B（`llama3.3:70b`）** — 最高の天井ですが最も重い。Q4_K_M で 48 GB+ unified memory または 2× 24 GB GPU。ハードウェアが対応している場合のみ；通常は小さいモデルで十分です。',
          '**MCP 作業で避けるべきもの：** 7B 未満すべて、明示的な tool call 学習のない汎用モデルすべて。形式不正な call を出してループが止まり、ハーネスを責めることになりますが — ハーネスは問題ありません。',
          '任意のモデルで tool call 品質を改善する構造化プロンプティング手法は、[Chain-of-Thought Prompting](/ja/prompt-engineering/chain-of-thought-prompting) を参照してください。',
          '頭ごなしの比較データは、[2026 年のローカル tool calling 最強モデル](/ja/power-local-llm/best-local-models-tool-calling-2026) を参照してください。',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs プレーン Function Calling：違いは何か',
        content:
          '**Function calling はモデルが出力するもの。MCP はクライアントとツールが互いを見つけるためのプロトコル。** 異なる層に存在し協調します；どちらかがもう一方を置き換えるわけではありません。',
        items: [
          '**Function calling** は LLM 側の能力です：モデルがツール名と引数を記述する構造化 JSON を出力します。OpenAI Tools、Anthropic Tools、Ollama の tool call API はすべて同じ考え方を、わずかに異なる wire format で使います。',
          '**MCP** はその上に乗ります：ツールがどう記述、発見、呼び出し、返却されるかを、プロセス間で標準化します。Function calling モデル単体ではあなたの filesystem を知りませんが、MCP サーバーが filesystem 操作を提供し、クライアントがモデルの function calling API にマッピングし、モデルがそれを呼び出せるようになります。',
          '**メリットは interop です。** filesystem サーバーを一度書けば、Claude Desktop、Goose、Cline、Continue.dev、LM Studio が変更なしで使います。モデルを Claude から Gemma 4 に変えても、サーバーは変わりません。',
          '**Function calling だけでエージェントは作れます。** プロジェクトごとに filesystem、データベース、ブラウザのハンドラを再実装することになります。MCP ならそれらは out-of-the-box の依存関係です。',
          '**1 回限りのスクリプトには素の function calling のほうが簡単です。** プロジェクトやモデルをまたいで再利用したいものなら、数日以内に MCP のほうが手間が少なくなります。',
        ],
      },
      nihonNoKatsuyo: {
        id: 'nihon-katsuyo',
        title: '日本ユーザーのための活用ポイント',
        content:
          '**日本企業にとってローカル MCP は、クラウドエージェントが直面する個人情報保護法（APPI）と METI AI ガバナンスのハードルを直接下げます。** モデル、クライアント、すべてのツールサーバーが自社マシン上で動く構成なら、データは一切エンドポイントを離れません。',
        items: [
          '**METI AI ガバナンス 2024：** 経済産業省の AI ガバナンスガイドラインは、特に金融、医療、法務など規制業界での AI 利用において、データ保護とトレーサビリティを求めています。ローカル MCP スタックは外部データ送信を排除し、監査ログでトレーサビリティを担保するため、これらの要件にクリーンに整合します。',
          '**個人情報保護法（APPI）：** 顧客データや従業員データをクラウド AI プロバイダーに送るには、第三者提供の同意とリスク評価が必要です。ローカル推論ではこの第三者提供自体が発生せず、契約上の負担と説明責任が大幅に軽減されます。',
          '**日本企業のユースケース：** 法律事務所、税理士法人、医療機関、製造業の設計部門、人事 — クライアント・患者・従業員データを OpenAI、Anthropic、Google に送れない領域すべて。Apple M5 Mac mini や RTX 4090 搭載ワークステーションで 27B–32B モデルが動き、書類要約、契約レビュー、社内データベースに対するコード片の検証ができます。',
          '**東アジアのデータ越境：** 日本、シンガポール、マレーシア、韓国はそれぞれ独自のデータ residency 枠組みを持ち、APAC 全域へのクロスボーダー転送には個別の評価が必要です。ローカル推論はこの転送を完全に回避し、東アジアでの multi-region 展開時のコンプライアンス負担を取り除きます。',
          '**日本の中堅企業（中小企業）：** 大企業向けに作られたクラウド AI 契約は、中小企業にとってはコスト・契約レビュー両面でハードルが高いケースが多く、PoC が頓挫しがちです。ローカル MCP スタックは設備投資 1 回（マシン代）のみで月額課金なし、契約も社内のみで完結します。',
          '**監査と説明責任：** MCP クライアントの監査ログ（Goose、Cline、Continue.dev）は「エージェントが想定外の操作をしていないこと」を示す主たる証拠になります。WORM ストレージや、エージェント自身からは上書き不可能な Git リポジトリに保存してください。日本の監査文化との親和性は高いです。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカル MCP セットアップでよくある間違い',
        items: [
          '**間違い 1：小さい汎用モデルを使う。** 7B 未満（および tool call ファインチューニングなしの 7B–13B 汎用モデルの大半）は形式不正な tool call を出します。27B+ tool call チューン済みモデルを使い、ハーネスと戦うのをやめてください。',
          '**間違い 2：ホームディレクトリを allow-list する。** 「テストだけ」のはずの `~` の allow-list は本番運用に残ります。最初から専用の `agent-workspace` を作ってください。',
          '**間違い 3：データベースサーバーを read/write モードで放置。** 自信を持ったエージェントが本番テーブルに書く `DELETE` クエリこそ、これで防げるインシデントです。`agent_ro` を既定にし、書き込みが明示的に必要なタスクのためだけに、その期間だけ別の writable ロールを立ててください。',
          '**間違い 4：すべてのツールを自動承認。** 「すべて承認」トグルは便利で危険です。読み取りツール（`read_file`、`list_directory`、`query`）は自動承認、書き込み・シェル・PR 系は常に承認を要求してください。',
          '**間違い 5：多段ブラウザ作業に 32K コンテキストモデル。** ページ内容は大きく、3 ページ巡回で推論前に 32K トークンを使い切ることがあります。ブラウザ重めのタスクには 128K コンテキストモデルを使ってください。',
          '**間違い 6：エージェントに判断力があると仮定。** ありません。モデルは「これは本番データベース」「この PR はデプロイされる」という概念を持ちません。権限が唯一のバリアです。',
          '**間違い 7：リファレンスサーバーを最初に全部入れる。** ツールが多い = system prompt が大きい = ツール選択が遅く不正確になります。`filesystem` から始めて、必要になったら他を追加してください。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Model Context Protocol 仕様](https://modelcontextprotocol.io/) — 公式仕様、JSON-RPC スキーマ、transport およびライフサイクル定義。',
          '[modelcontextprotocol/servers GitHub リポジトリ](https://github.com/modelcontextprotocol/servers) — リファレンスサーバー（filesystem、sqlite、postgres、github、puppeteer など）と設定ドキュメント。',
          '[Goose プロジェクトドキュメント](https://block.github.io/goose/) — CLI インストール、Ollama プロバイダー設定、MCP サーバー設定構文。',
          '[Ollama モデルライブラリ](https://ollama.com/library) — 利用可能なローカルモデル、tool call サポートフラグ、本ガイドで参照する量子化レベル。',
          '[Cline GitHub リポジトリ](https://github.com/cline/cline) — VS Code MCP クライアント実装、MCP サーバーパネル。',
          '[Continue.dev ドキュメント](https://docs.continue.dev/) — Continue.dev クライアント用 `mcpServers` 設定ブロックリファレンス。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'MCP とは何で、ローカル AI にとってなぜ重要ですか？',
            a: 'Model Context Protocol（MCP）はオープンな JSON-RPC 2.0 プロトコルで、クライアント（Goose、Cline、Continue.dev、LM Studio、Claude Desktop）が言語モデルとツールサーバーを統一的に接続できるようにします。ローカル AI にとって重要な理由は、chat モデルをエージェントに変える層を標準化することです — ツールサーバーを 1 度書けば、ローカル Ollama モデルを含む任意のクライアントとモデルで使えます。MCP がなければ、各プロジェクトが自前のクライアントに対してファイル/データベース/ブラウザのツールを再発明することになります。',
          },
          {
            q: 'MCP は Claude Desktop なしで動きますか？',
            a: 'はい。プロトコルはオープンで Claude Desktop からは完全に独立しています。2026 年現在、Goose、Cline、Continue.dev、LM Studio はすべてローカル Ollama モデルで動作する MCP クライアント実装を提供しています。リファレンスサーバー（filesystem、sqlite、postgres、puppeteer、github）は準拠する任意のクライアント配下で変更なしに動きます。',
          },
          {
            q: 'MCP に最も適したローカルモデルは何ですか？',
            a: '2026 年 5 月時点で最も信頼できる選択肢は、Gemma 4 27B、GLM-5.1 32B、Qwen3 32B（コード形態の作業なら Qwen3-Coder 30B）、Llama 3.3 70B です。4 つすべてが明示的な tool call 学習を持ち、MCP クライアントがルーティング可能なクリーンな function calling JSON を出力します。7B 未満（および tool call ファインチューニングのない汎用モデルの大半）は形式不正な tool call を頻繁に出します。',
          },
          {
            q: 'MCP は安全ですか — エージェントがファイルを削除できますか？',
            a: '許可すれば可能です。安全性はサーバーの設定から来ており、プロトコルからではありません。filesystem サーバーは allow-list したパス内でのみ動作します — 専用の `agent-workspace` ディレクトリに絞ってください。データベースサーバーは SELECT のみのロールを使えば read-only で動きます。書き込み、シェル、PR 系ツールには常に明示的承認を要求し、読み取り操作のみ自動承認にしてください。監査ログで事後にエージェントが何をしたか正確に確認できます。',
          },
          {
            q: '自分で MCP サーバーを書けますか？',
            a: 'はい — そして SDK が手間を減らします。公式の TypeScript と Python SDK（`@modelcontextprotocol/sdk` と `mcp`）が JSON-RPC のプラミングを処理します。JSON Schema でツールを定義しハンドラ関数を書けば、SDK が stdio で公開します。社内 API をラップする 1–2 ツールの単機能サーバーなら 50–100 行のファイル 1 つで済みます。',
          },
          {
            q: 'MCP は Windows で動きますか？',
            a: 'はい。Ollama、Goose、Cline、Continue.dev、LM Studio はすべて Windows で動きます。MCP サーバーは Node.js または Python のサブプロセスとして動作し、両ランタイムは Windows で完全にサポートされています。プラットフォーム固有の唯一の落とし穴はパス処理 — 設定でフォワードスラッシュを使うか、バックスラッシュを正しくエスケープしてください。それ以外は macOS や Linux と同じ体験です。',
          },
          {
            q: 'MCP の tool call をサンドボックスする方法は？',
            a: '3 層でリスクの大半をカバーします。第一に、各サーバーを設定レベルで狭く絞る：filesystem は 1 ディレクトリ、データベースは read-only ロール、GitHub はテスト repo に絞った fine-grained PAT。第二に、クライアントのツール単位の承認ルールを使う：read は自動承認、write は承認要求。第三に、エージェントを `git stash` 可能な workspace 内に置き、破壊的なものは git で取り消せるようにする。機密タスクではサーバーが明示的に必要とするエンドポイント以外ネットワークアクセスのないホストで実行してください。',
          },
          {
            q: 'MCP エージェントは HTTP リクエストを行えますか？',
            a: 'はい、特定のサーバー経由で。ブラウザサーバー（puppeteer または playwright）は実 Chromium を操作し、モデルが navigate するすべてのリクエストを行います。複数のサードパーティーサーバーが `http_get`/`http_post` ツールをより直接的に公開しています。filesystem およびデータベースサーバーはネットワークリクエストを行わず、ローカルリソースのみを操作します。',
          },
          {
            q: 'MCP は Ollama とネイティブに動きますか、それともラッパーが必要ですか？',
            a: 'Ollama 自体は MCP を話しません — OpenAI 互換 chat API を提供します。Ollama の chat API と MCP サーバーを橋渡しするクライアント（Goose、Cline、Continue.dev、LM Studio）が必要です。クライアントがモデルの tool call を正しい MCP サーバーへルーティングし、結果を会話に戻します。ユーザー視点ではクライアントをインストールして Ollama に向けるだけで、追加の設定は不要です。',
          },
          {
            q: 'MCP と function calling の違いは何ですか？',
            a: 'Function calling はツール名と引数を記述する構造化 JSON を LLM が出力すること — モデルの能力です。MCP はそれらのツールがプロセス間で記述、発見、呼び出し、返却される方法を定めるプロトコル — interop 層です。両者は協調します：クライアントが MCP のツール定義をモデルの function calling 形式に変換し、モデルが function call を出し、クライアントがそれを MCP サーバーへ戻し、サーバーが実行します。MCP がなくても function calling はできますが、プロジェクトごとに filesystem/database/browser のハンドラを再実装することになります。MCP があれば同じサーバーが任意のクライアントで動作します。',
          },
          {
            q: 'ローカル MCP エージェントで METI AI ガバナンスをどう適用しますか？',
            a: '経済産業省の AI ガバナンスガイドライン 2024 は、特に金融・医療・法務などの規制業界における AI 活用に対し、データ保護、トレーサビリティ、説明責任を求めています。ローカル MCP スタックはこれら 3 つの軸すべてに直接整合します：第一に、外部データ送信が発生しないため第三者提供のリスクがなく、APPI（個人情報保護法）の負担も軽減されます。第二に、MCP クライアントの監査ログ（Goose、Cline、Continue.dev）が tool call と結果を時系列で記録し、トレーサビリティの主たる証拠になります。第三に、サーバーごとの権限設定（filesystem は 1 ディレクトリ、データベースは read-only ロール、GitHub は fine-grained PAT）が、説明責任に必要な「何が起きうるか」の境界を明確に定義します。日本の大企業の社内監査文化と整合性が高く、内部監査での説明が容易です。',
          },
          {
            q: 'ローカル MCP エージェントで日本企業のセキュリティ要件を満たせますか？',
            a: 'はい、特にデータ residency と第三者監査の観点で適合性が高いです。日本企業のセキュリティ標準（金融機関の FISC、医療機関の 3 省 2 ガイドライン、製造業の社内 ISMS）はいずれも、機密データを扱うシステムについて「外部送信の有無」「アクセス制御」「監査ログ」を中心評価項目に置いています。ローカル MCP スタックでは、Apple M5 Mac mini や RTX 4090 搭載ワークステーションでモデル、MCP クライアント、すべてのサーバーが同一マシン上で動作するため、外部送信は発生しません。アクセス制御は filesystem サーバーの allow-list、Postgres ロール、GitHub PAT の fine-grained scope で多層化できます。監査ログは MCP クライアント側で自動収集され、WORM ストレージや内部 Git リポジトリに保管できます。中堅企業（中小企業）にとっては、月額課金なしで PoC を社内完結できる点も大きな利点です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[2026 年のローカル tool calling 最強モデル](/ja/power-local-llm/best-local-models-tool-calling-2026) — 上記推奨モデル（Gemma 4、GLM-5.1、Qwen3、Llama 3.3）の頭ごなしベンチマーク。',
          '[自律ローカルエージェントは実際に動く](/ja/power-local-llm/autonomous-local-agents-actually-work) — 長時間タスクでローカル MCP エージェントが何を確実にこなし何ができないかの現実チェック。',
          '[Continue.dev vs Cline vs Aider：2026 年最強のローカルコーディングエージェント](/ja/power-local-llm/continue-dev-vs-cline-vs-aider-local) — コード形態作業のための隣接エージェント文脈；Cline と Continue.dev も MCP クライアント。',
          '[2026 年の最強ローカル LLM](/ja/local-llms/best-local-llms-2026) — より広い open-weights ランドスケープのモデル権威。',
          '[ローカル AI エージェントで Zapier を置き換える](/ja/power-local-llm/replace-zapier-with-local-ai-agents) — 同じ MCP スタックのワークフロー自動化フレーミング。',
          '[Power Local LLM ハブ](/ja/power-local-llm) — ガイド全集。',
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
    title: '通过 MCP 将 Ollama 连接到数据库和 API：2026 年本地智能体配置指南',
    seoTitle: '本地 Ollama + MCP：连接数据库与 API 完整指南 2026',
    intro:
      'Model Context Protocol (MCP) 是本地 Ollama 模型与你的机器其余部分之间缺失的那一层。一个配置文件加上支持 tool calling 的模型，同一个智能体即可查询 Postgres 数据库、在沙箱目录中读写文件、驱动无头浏览器、提交 GitHub Pull Request——全部在本地运行，全部离线。本指南端到端讲解可工作的配置，并基于「不假设你信任模型」的安全模型展开。',
    metaDescription:
      '2026 年本地 AI 智能体配置指南：Ollama + Model Context Protocol (MCP)。涵盖文件系统、SQLite/Postgres、浏览器、GitHub 服务器，提供可工作的 JSON 配置和不信任 LLM 的沙箱模型。',
    twitterDescription:
      '本地 Ollama + MCP = 一个能读文件、查数据库、驱动浏览器的 AI 智能体——完全离线。可工作的配置、首批应安装的四个服务器，以及一个不信任模型的安全设计。',
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
      '通过 Ollama 运行本地 LLM 的开发者和具备技术背景的用户，希望模型真正能够执行操作——查询数据库、编辑文件、自动化浏览器——同时不向任何云服务商发送数据。',
    readTime: '阅读约15分钟',
    educationalLevel: 'Advanced',
    primaryTerm: '本地 MCP 智能体',
    targetKeywords: [
      'mcp ollama 中文',
      '本地 mcp 服务器搭建',
      'model context protocol 本地',
      'ollama tool calling 2026',
      '本地 ai 智能体 mcp',
      'mcp 不需要 claude desktop',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) 让本地 Ollama 模型能够调用工具——读取文件、执行 SQL 查询、点击网页链接、提交 Pull Request——通过任何 MCP 兼容客户端（2026 年的 Goose、Cline、Continue.dev、LM Studio）都能识别的标准 JSON-RPC 接口完成。协议开放，参考服务器开源，截至 2026 年既不需要 Claude Desktop 也不需要任何云账号。启动 Ollama，安装一个 MCP 客户端，放入一份列出所需服务器的 `mcp.json` 配置文件，支持 tool calling 的模型（Gemma 4、GLM-5.1、Qwen3、Llama 3.3）便成为运行在你机器上、由你掌控权限的智能体。关键在于安全模型：永不自动批准写入工具，将文件系统访问限定到单一目录，数据库服务器默认只读模式。**',
    quickAnswerTop: {
      zh: {
        question: '2026 年能否在本地用 MCP 和 Ollama 运行 AI 智能体？',
        answer:
          '可以——而且现在的搭建规模一个下午即可完成。用支持 tool calling 的模型（Gemma 4、GLM-5.1、Qwen3 或 Llama 3.3 70B）启动 Ollama，安装一个支持 MCP 的客户端（Goose 是最直接的 CLI；Cline、Continue.dev、LM Studio 均在 2026 年初加入了 MCP 支持），然后按需加入 MCP 服务器——文件用 `filesystem`，数据库用 `sqlite` 或 `postgres`，浏览器自动化用 `puppeteer` 或 `playwright`，仓库管理用 `github`。这与 Claude Desktop 使用的协议完全相同；区别仅在模型与客户端。安全要点：将 filesystem 服务器限定为单一目录，数据库默认只读，永不自动批准写入或 shell 工具。',
        bullets: [
          'MCP 协议开放且完全本地运行——不需要 Claude Desktop、不需要 Anthropic 账号、不需要任何云调用。',
          'Ollama 提供模型；MCP 客户端（Goose、Cline、Continue.dev、LM Studio）通过 JSON-RPC 在 Ollama 与 MCP 服务器之间架设桥梁。',
          '四个参考服务器覆盖大多数实际工作流：filesystem、sqlite/postgres、puppeteer/playwright（浏览器）、github。',
          'tool call 可靠性是模型属性：Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B 与 Llama 3.3 70B 均可干净处理 MCP；7B 以下模型经常输出格式错误的 tool call。',
          '安全模型：filesystem 限定到一个目录、数据库以只读运行、所有写入或 shell 工具都置于明确授权之后。',
          '成本：API 费用为 $0，但 token 在本地消耗——智能体循环消耗 token 较多，请使用 32K+ 上下文模型并在性能足够的机器上运行。',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速事实', anchor: '#quick-facts' },
      { label: 'MCP 解锁的能力', anchor: '#what-mcp-unlocks' },
      { label: 'MCP 服务器对比', anchor: '#server-comparison' },
      { label: '架构：组件如何协作', anchor: '#architecture' },
      { label: '配置：15 分钟搭建 Ollama + Goose', anchor: '#setup' },
      { label: 'Filesystem 服务器', anchor: '#filesystem-server' },
      { label: 'SQLite 与 Postgres 服务器', anchor: '#database-server' },
      { label: '浏览器服务器（Puppeteer / Playwright）', anchor: '#browser-server' },
      { label: 'GitHub 服务器', anchor: '#github-server' },
      { label: '安全模型', anchor: '#security-model' },
      { label: '本地 MCP vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: '选择支持 tool calling 的模型', anchor: '#picking-model' },
      { label: 'MCP vs 普通 Function Calling', anchor: '#mcp-vs-function-calling' },
      { label: '中国企业的应用方案', anchor: '#china-enterprise' },
      { label: '常见错误', anchor: '#common-mistakes' },
      { label: '参考资料', anchor: '#sources' },
      { label: '常见问题', anchor: '#faq' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      '幻灯片涵盖：MCP 如何将本地 Ollama 模型转变为能查询数据库、读写文件、驱动浏览器、提交 Pull Request 的智能体（全部离线）；四个参考服务器（filesystem、SQLite/Postgres、浏览器、GitHub）的配置难度与风险评级；使用 Goose 的 6 步配置指南；不信任 LLM 的安全模型；以及与 Claude Desktop 的直接对比。可将 PDF 下载为本地 MCP 智能体参考卡片。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP 是面向工具的 JSON-RPC 2.0 协议。** 模型（通过客户端）连接一个或多个 MCP 服务器；每个服务器暴露 Tools（可调用函数）、Resources（可读数据）和 Prompts（模板）。无论客户端是 Claude Desktop、Goose、Cline、Continue.dev 还是 LM Studio，wire format 完全相同。',
          '**Ollama 不直接说 MCP——MCP 客户端封装 Ollama。** Goose（Block）是最简单且原生支持 Ollama 的开源 CLI；Cline、Continue.dev、LM Studio 均在 2026 年初加入了 MCP 客户端支持。',
          '**四个参考服务器覆盖大部分使用场景：** `filesystem`（在沙箱目录中读写）、`sqlite` 与 `postgres`（数据库查询，默认只读）、`puppeteer` 或 `playwright`（驱动无头浏览器）、`github`（用 personal access token 管理仓库与 PR）。',
          '**tool call 可靠性随模型规模与训练扩展。** Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B 在 Q4_K_M 下干净处理 MCP；7B 以下模型经常输出格式错误的 tool call 并卡住循环。',
          '**安全模型假设模型不可信。** 将 filesystem 服务器限定到单一目录、用只读角色运行数据库服务器、永不自动批准 `execute_command` 或 `write_file`、长时间会话后审查审计日志。',
          '**本地 MCP vs Claude Desktop：** 协议相同，服务器生态相同。本地栈以离线模型替换云端模型——隐私性、零 token 费用、零速率限制，代价是模型能力略低且需自行负责安全配置。',
          '**API 费用为 $0，但 token 是真实成本。** 智能体循环单次多步任务可能消耗 30K–80K token；最少使用 32K 上下文模型，128K 更宽裕。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**协议：** JSON-RPC 2.0 通过 stdio（本地子进程）或 HTTP/SSE（远程）传输。本地智能体几乎只用 stdio。',
          '**维护方：** Anthropic（开源规范）；参考服务器维护在 GitHub 的 `modelcontextprotocol/servers`，外加快速发展的第三方生态。',
          '**2026 年的本地客户端：** Goose（Block）、Cline（VS Code 扩展）、Continue.dev（VS Code/JetBrains）、LM Studio（桌面应用），以及多个 CLI 工具。',
          '**兼容的 Ollama 模型：** 任何具备原生 tool call 训练的模型。2026 年 5 月：Gemma 4 27B、GLM-5.1 32B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。',
          '**默认 transport：** 本地进程用 stdio；只有需要跨机器或跨智能体共享服务器时才用 HTTP/SSE。',
          '**配置集中在一个文件：** `~/.config/goose/config.yaml`（Goose）、`~/.continue/config.json` 的 MCP 块（Continue.dev）、或 Cline 设置 UI 中的 `mcpServers`。形式相同：服务器名、command、args、env vars。',
          '**无需 Claude Desktop。** 协议早于 Claude Desktop 的独占叙事；所有参考服务器均为 MIT/Apache 许可，可在任何符合规范的客户端下运行。',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'MCP 实际为本地模型解锁的能力',
        content:
          '**没有工具的本地 LLM 只能用文本回应。有了 MCP，同一个模型可以在你的机器上执行操作。** 这是聊天机器人与智能体的本质差别。',
        items: [
          '**「找出此仓库中所有 TODO，按文件分组，并将 Markdown 摘要写入 `notes/todos.md`。」** —— `filesystem` 服务器读取，模型分组，同一服务器写入。端到端一次往返。',
          '**「列出本季度营收 Top 10 客户并绘制图表。」** —— `postgres` 服务器执行 SQL（只读角色），模型汇总，并通过 `filesystem` 写出 CSV 供你的图表工具使用。',
          '**「打开 Hacker News 首页，找出 AI 相关的前三篇文章，总结后追加到我的阅读清单。」** —— `puppeteer` 服务器驱动无头浏览器，模型抽取并总结，`filesystem` 追加。',
          '**「向我的 fork 提交标题为 `chore: bump deps` 的草稿 PR，并在描述中链接失败的 CI run。」** —— `github` 服务器创建 PR、获取 run、在描述中写入链接。',
          '**「查看 `events.db` 最新 100 行，告诉我哪些 user ID 是新错误尖峰的来源。」** —— `sqlite` 服务器查询；模型推理；你在聊天面板看到答案。',
          '以上每一项都是「一句话到操作」的工作流，过去要么需要带托管工具的云端模型，要么需要手写脚本。MCP 是让你能跨客户端复用同一服务器、跨服务器复用同一模型的那一层。',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: '四个最常用 MCP 服务器对比',
        content:
          '下面的参考服务器覆盖「让本地模型真正做点事」的长尾需求。全部开源，作为本地子进程由 MCP 客户端启动。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '从 filesystem 服务器开始（5 分钟，低风险），数据工作加上 SQLite 服务器，确有需要再加浏览器服务器，对机器上的模型建立信任后再引入 GitHub。',
          },
          {
            type: 'plain-terms',
            text: '四个服务器处理本地智能体能完成的任务的 90%。filesystem 服务器在你选择的文件夹内读写文件。SQLite 或 Postgres 服务器对数据库执行查询。浏览器服务器驱动一个真实的 Chromium 窗口，模型可以读取需要 JavaScript 才能渲染的页面。GitHub 服务器在你的仓库上开 issue 和 PR。它们都通过一条命令安装、都作为本地子进程在你自己的机器上运行，且除非显式需要否则不会调用互联网（浏览器会，其他不会）。',
          },
        ],
        columns: ['MCP 服务器', '能做什么', '搭建难度', '风险等级', '适用场景'],
        rows: [
          { 'MCP 服务器': 'Filesystem', '能做什么': '在沙箱目录中读写文件', '搭建难度': '简单（一条 allow-list 路径）', '风险等级': '中——严格限定范围', '适用场景': '个人自动化、笔记、仓库总结' },
          { 'MCP 服务器': 'SQLite', '能做什么': '查询本地 SQLite 数据库文件', '搭建难度': '简单（.db 文件路径）', '风险等级': '只读时低；带写入时中', '适用场景': '数据探索、日志分析、原型搭建' },
          { 'MCP 服务器': 'Postgres', '能做什么': '通过 connection string 查询 Postgres 数据库', '搭建难度': '中（角色 + URL）', '风险等级': '中——使用只读角色', '适用场景': '生产数据探索、报表、BI 原型' },
          { 'MCP 服务器': 'Puppeteer / Playwright', '能做什么': '驱动无头或可见 Chromium 完成浏览、爬取、表单填写', '搭建难度': '难（浏览器二进制、选择器、延迟）', '风险等级': '高——可提交表单、点击任意元素', '适用场景': '调研、爬取、回归测试' },
          { 'MCP 服务器': 'GitHub', '能做什么': '列出仓库、读取文件、创建 issue 与 PR', '搭建难度': '简单（环境变量传 PAT）', '风险等级': '中——将 token 限定到指定仓库', '适用场景': '开发流程、triage、PR 草稿' },
          { 'MCP 服务器': 'Custom', '能做什么': '任何可用 JSON-RPC 工具表达的功能', '搭建难度': '难（自行实现服务器）', '风险等级': '可变', '适用场景': '内部 API、小众系统、胶水代码' },
        ],
      },
      architecture: {
        id: 'architecture',
        title: '组件如何协作',
        content:
          '**三个进程，一套共享协议。** 模型在 Ollama 中，客户端说 MCP，每个服务器暴露一组小工具。每次 tool call 在客户端 → 服务器之间跳转，本地执行，返回 JSON。',
        items: [
          '**Ollama** 作为后台服务运行在 `127.0.0.1:11434`，通过 OpenAI 兼容 API 提供模型。它不知道 MCP 是什么——只是回应 chat completion，并在模型请求时输出 tool call。',
          '**MCP 客户端**（Goose、Cline、Continue.dev、LM Studio）是桥梁。它与 Ollama 沟通模型部分，与 MCP 服务器沟通工具部分。模型发出 tool call 时，客户端将其路由到正确的服务器，获取结果，然后把结果送回对话。',
          '**MCP 服务器** 是相互独立的子进程，每种能力一个。它们通过 stdio 说 JSON-RPC 2.0。每个服务器声明一组 Tools、Resources 和 Prompts；客户端将其合并为对模型呈现的工具表面。',
          '**stdio transport 让一切保持本地。** 服务器由客户端启动，通过 stdin/stdout 通信，并在客户端退出时退出。除非服务器自身打开网络连接（浏览器服务器会，filesystem 与数据库服务器不会），否则不走网络。',
          '**模型看到的是扁平工具列表。** 在模型视角中没有服务器——只有 `filesystem.read_file`、`sqlite.query`、`puppeteer.navigate` 这样的工具名。客户端处理路由。',
        ],
        callouts: [
          {
            type: 'note',
            text: '架构与 Claude Desktop 完全相同。区别在于模型（本地 Ollama 模型替代 Claude）与客户端（Goose/Cline/Continue.dev/LM Studio 替代 Claude Desktop）。MCP 服务器是同一套——你今天在 Claude Desktop 下跑的 filesystem 服务器，明天在 Goose 下也能不加修改地继续跑。',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: '配置：15 分钟搭建 Ollama + Goose',
        content:
          '**Goose 是 2026 年通往可工作的本地 MCP 智能体的最短路径。** 这是 Block 推出的开源 CLI，原生支持 Ollama，提供交互式聊天界面，并将所有 MCP 服务器配置集中到一个文件。Continue.dev、Cline、LM Studio 也能用，但 Goose 在初次搭建上的成本最低。',
        items: [
          '**Step 1 —— 安装 Ollama。** 从 `ollama.com/download` 下载（macOS/Windows/Linux）。用 `curl http://127.0.0.1:11434/api/tags` 确认服务运行。',
          '**Step 2 —— 拉取支持 tool calling 的模型。** 在 Gemma 4 27B (`gemma4:27b`)、GLM-5.1 32B (`glm5:32b`)、Qwen3 32B (`qwen3:32b`) 或 Llama 3.3 70B (`llama3.3:70b`) 中选一个。16 GB 统一内存或 12 GB VRAM 在 Q4_K_M 下从容运行 27B–32B。',
          '**Step 3 —— 安装 Goose。** `pipx install goose-ai`（macOS、Linux），或从 Goose Releases 页下载安装程序。CLI 安装为 `goose`。',
          '**Step 4 —— 将 Ollama 配置为 provider。** 运行 `goose configure`，选择 `ollama` 作为 provider，将模型设为已拉取的那个，host 设为 `http://127.0.0.1:11434`。Goose 会写入 `~/.config/goose/config.yaml`。',
          '**Step 5 —— 加入 filesystem MCP 服务器。** 编辑 `~/.config/goose/config.yaml` 加入 `mcpServers` 块（配置示例见下）。重启 `goose session` 并请求列出测试目录的文件。第一轮即可确认服务器接入。',
          '**Step 6 —— 用真实任务验证。** 试运行 `goose session`，请求「列出 `notes/` 中每个 Markdown 文件的标题与字数，并将结果写入 `notes/index.md`」。如果智能体读、汇总、回写都成功，整个循环可工作。',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:27b\n\n# 2. Install Goose\npipx install goose-ai\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:27b\n# Host:     http://127.0.0.1:11434\n\n# 4. Start a session — Goose reads ~/.config/goose/config.yaml\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '若你已使用 Cline 或 Continue.dev，可跳过 Goose 直接使用——两者都在 2026 年初的版本中加入了 MCP 服务器支持。Cline 的「MCP Servers」面板一键安装参考服务器；Continue.dev 从 `~/.continue/config.json` 读取 `mcpServers`（与下面的 Goose 配置块同形）。模型与服务器都相同；变化的只是宿主应用。',
          },
        ],
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem 服务器：在沙箱目录中读写',
        content:
          '**filesystem 服务器是首个安装的服务器，也是最容易安全限定范围的。** 它暴露 `read_file`、`write_file`、`list_directory`、`move_file`、`search_files`、`create_directory`，全部限定在一个或多个 allow-list 路径内。',
        items: [
          '**安装：** 参考服务器为 `@modelcontextprotocol/server-filesystem`，通过 `npx -y` 运行（无需全局安装）。Goose、Cline、Continue.dev 都从配置块自动启动。',
          '**Allow-list 路径：** 服务器接受一个或多个目录参数，并拒绝在其外的操作。务必传入显式的、范围窄的路径——绝不要 `~` 或 `/`。',
          '**暴露的工具：** `read_file`、`read_multiple_files`、`write_file`、`edit_file`（按行替换）、`list_directory`、`search_files`、`move_file`、`create_directory`、`directory_tree`。模型看到的形式是 `filesystem.read_file` 等。',
          '**易用性：** `directory_tree` 返回 JSON 树状结构，便于模型在读取具体文件之前先了解结构。`search_files` 提供类似 grep 的递归搜索。',
          '**风险面：** 服务器尊重 allow-list，但在该列表内拥有完整读写权限。把 allow-list 视作唯一屏障，并选择专用 workspace 目录而非 home 文件夹。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  filesystem:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-filesystem"\n      - "/Users/you/agent-workspace"\n    env: {}',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: '永远不要 allow-list `/` 或你的 home 目录。建立专用 `agent-workspace` 文件夹，把希望智能体接触的文件副本放进去，仅让它在该文件夹内操作。即便智能体出错，影响也止步于一个目录。',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'SQLite 与 Postgres 服务器：查询真实数据',
        content:
          '**数据库服务器把模型变成可以基于真实数据回答问题的初级分析师——前提是保持只读。** 两个参考服务器都自带 `query` 工具与（可选的）`write_query` 工具。',
        items: [
          '**SQLite 服务器（`@modelcontextprotocol/server-sqlite`）** 接受一个 `.db` 文件路径。适用于日志分析、schema 原型、不开数据库即可探索导出数据。',
          '**Postgres 服务器（`@modelcontextprotocol/server-postgres`）** 接受 connection string。推荐做法是为智能体创建专用的只读角色，并使用该角色的 connection string。',
          '**暴露的工具：** `query`（配置为只读时仅 SELECT）、`list_tables`、`describe_table`。Postgres 服务器另加 `list_schemas`。部分 fork 加入 `write_query`——除非你信任模型在该数据库上的行为，否则保持禁用。',
          '**Schema 感知：** 在提分析问题前请智能体「列出表并 describe 最常用的五个」——模型在调用过 `describe_table` 之后比凭空猜列名要准确得多。',
          '**成本：** 查询直接落在数据库上。在一亿行的表上格式不当的 `SELECT *` 与人手所造成的事故同等严重——把该角色放在独立连接池并设置 statement timeout。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  sqlite:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-sqlite"\n      - "--db-path"\n      - "/Users/you/data/events.db"\n    env: {}\n\n  postgres:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-postgres"\n      - "postgresql://agent_ro@127.0.0.1:5432/analytics"\n    env:\n      PGPASSWORD: "${PG_AGENT_PASSWORD}"',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: '一次性创建 Postgres 角色并不再额外授权：`CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` 然后给该角色设 `statement_timeout = 30s`。智能体既不能写入也不能 drop，更不能无限运行。',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: '浏览器服务器：用 Puppeteer 或 Playwright 驱动 Chromium',
        content:
          '**浏览器服务器是四者中最强大也最危险的。** 它启动真实 Chromium 并暴露导航、点击、表单填写与截图——也就是说，它能完成你在浏览器里能做的一切，包括提交表单。',
        items: [
          '**参考服务器：** `@modelcontextprotocol/server-puppeteer`（轻量，默认 headless）与 `@modelcontextprotocol/server-playwright`（较重，支持多浏览器）。本地智能体使用 Puppeteer 即可。',
          '**暴露的工具：** `navigate`、`screenshot`、`click`、`fill`、`select`、`evaluate`（运行 JavaScript）、`get_page_content`。模型用 `get_page_content` 读取结构化文本，用 `screenshot` 进行视觉确认。',
          '**延迟：** 真实浏览器会话每个动作 1–5 秒。多步浏览很容易消耗 30–60 秒以及数万 token，因为页面内容较大。请使用 32K+ 上下文窗口。',
          '**选择器：** 模型必须挑选 CSS 选择器。小模型常出错；27B+ 的 tool calling 模型对常见模式较为可靠。把任务范围收紧——「抽取此 URL 的标题与首段」远比「在站内浏览并找到联系页」可靠。',
          '**适合场景：** 调研（打开页面、汇总、追加到笔记）、回归测试（导航、点击、截图）、在你掌控的页面上的表单填写。不适合场景：任何在真实 Web 上误点会带来后果的工作。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  puppeteer:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-puppeteer"\n    env:\n      PUPPETEER_HEADLESS: "true"\n      # Block obviously dangerous endpoints at the OS firewall level\n      # rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: '永远不要把凭据交给浏览器服务器。如果需要已登录会话，请将预先登录的浏览器配置（通过 `userDataDir`）交给智能体，且绝不让它导航到高影响站点（银行、邮箱、云控制台、支付页）。模型对按钮含义没有判断力——它看见文字就点击。请把它当作没有上下文也没有补救手段的实习生对待。',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub 服务器：从本地模型操作仓库、issue 与 PR',
        content:
          '**GitHub 服务器把自然语言的仓库工作转化为 API 调用。** 它在四者中配置最简单，并通过 personal access token (PAT) 权限实现最容易的紧密限定。',
        items: [
          '**安装：** `@modelcontextprotocol/server-github`，将 PAT 放入 `GITHUB_PERSONAL_ACCESS_TOKEN` 环境变量后运行。token 是唯一鉴权——服务器本身没有额外配置。',
          '**暴露的工具：** `search_repositories`、`get_file_contents`、`create_or_update_file`、`create_pull_request`、`list_issues`、`create_issue`、`add_issue_comment`、`merge_pull_request`，以及数十个其他工具。完整工具表面较大，多数任务用 5–10 个工具即可。',
          '**收紧 PAT。** 使用限定到具体仓库的 fine-grained PAT，权限仅到必要最小（浏览给 Read，PR/issue 创建给 Write）。不要在实验性智能体上使用带 `repo` 权限的经典 PAT。',
          '**真实工作流：** triage（「读取最近 20 个 open issue，分组并起草标签」）、起草（「读 README 并提交一个修复 typo 的 PR」）、报表（「本周哪些 PR 长时间停滞」）。',
          '**风险面：** 智能体可以创建 issue 和 PR、发表评论，并在拥有写权限时推送 commit。除非同时信任模型与流程，否则禁用 merge 类工具——fine-grained PAT 仓库中的误合并仍可恢复，但要尽快发现。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  github:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-github"\n    env:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n      # Fine-grained PAT scoped to one or two test repos,\n      # not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: '一个不信任模型的安全模型',
        content:
          '**正确的心智模型是「LLM 是一个手里拿着你给的钥匙的不可信实习生」。** 能力来自服务器与你 allow-list 的接口——不来自模型的判断力。',
        items: [
          '**将 filesystem 服务器限定到一个目录。** 永不 `~` 或 `/`。选定 `agent-workspace/` 文件夹，把智能体需要接触的文件副本放进去。即便智能体出错，最坏情况是一个文件夹。',
          '**数据库服务器默认只读运行。** 用仅 `SELECT` 授权且 statement timeout 为 30 秒的专用 `agent_ro` 角色，可以整体消除一类事故。',
          '**所有写入或 shell 工具都置于明确授权之后。** Goose、Cline、Continue.dev 都支持按工具的授权规则。读取工具默认放行；`write_file`、`edit_file`、`execute_command`、`create_pull_request` 以及任何提交表单的浏览器动作都需要授权。',
          '**使用审计日志。** 每个 MCP 客户端都会记录 tool call 与结果。长会话之后扫一眼日志：你会看到模型尝试一些你未预期的事（有时无害，有时值得收紧权限）。',
          '**第三方访问的 token 范围要紧。** GitHub PAT 限定到两个测试仓库。Postgres 角色只读。浏览器会话不带凭据。模型迟早会尝试你未预期的事；它能做什么的边界，不能依赖模型的「自觉」。',
          '**敏感数据工作时让智能体 air-gap。** 处理私有数据时关闭主机的网络访问（或使用 network namespace）。本地栈本就不向外发数据，但纵深防御能兜住第三方服务器的失误。',
          '**像对待依赖一样选 MCP 服务器。** 参考服务器维护良好，许多第三方服务器并非如此。在为某个需要凭据的服务器安装前，请先阅读其代码。',
        ],
        callouts: [
          {
            type: 'note',
            text: '一个有用的失败恢复习惯：在执行非平凡的智能体任务前 `git stash`（或 `git checkout -b agent/<task>`）。任务完成后审查 diff，保留你想要的部分，丢弃其余。这与让长时间 Cline 或 Aider 会话保持安全的做法一致——更广模式见 [Continue.dev vs Cline vs Aider 对比](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local)。',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: '本地 MCP vs Claude Desktop：什么变了，什么不变',
        content:
          '**协议与服务器完全相同。只有模型与客户端在变。** 这正是 MCP 重要的原因——你的工具投资可以在本地与云端配置之间无缝迁移。',
        columns: ['层级', 'Claude Desktop', '本地 Ollama + Goose'],
        rows: [
          { '层级': '模型', 'Claude Desktop': 'Claude（Anthropic，云端）', '本地 Ollama + Goose': 'Gemma 4、GLM-5.1、Qwen3 或 Llama 3.3（本地）' },
          { '层级': '客户端', 'Claude Desktop': 'Claude Desktop 应用', '本地 Ollama + Goose': 'Goose、Cline、Continue.dev 或 LM Studio' },
          { '层级': '服务器', 'Claude Desktop': '同一套 MCP 服务器', '本地 Ollama + Goose': '同一套 MCP 服务器' },
          { '层级': '协议', 'Claude Desktop': 'MCP（JSON-RPC 2.0）', '本地 Ollama + Goose': 'MCP（JSON-RPC 2.0）' },
          { '层级': '单次请求成本', 'Claude Desktop': '按 token 计费的 API', '本地 Ollama + Goose': '$0 —— 本地推理' },
          { '层级': '隐私性', 'Claude Desktop': '对话发到 Anthropic', '本地 Ollama + Goose': '保留在本机' },
          { '层级': '速率限制', 'Claude Desktop': '受 API 速率限制', '本地 Ollama + Goose': '仅受硬件吞吐量限制' },
          { '层级': 'tool call 质量', 'Claude Desktop': '业内最佳', '本地 Ollama + Goose': '27B+ 表现良好；7B 以下迅速劣化' },
          { '层级': '需要联网', 'Claude Desktop': '需要', '本地 Ollama + Goose': '仅当服务器自身需要（如浏览器）' },
          { '层级': '搭建时间', 'Claude Desktop': '5 分钟', '本地 Ollama + Goose': '15 分钟（一次性）' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: '为本地 MCP 选择支持 tool calling 的模型',
        content:
          '**tool call 可靠性随模型规模与训练扩展，不是 harness 决定的。** 一个在 Cline 中输出格式错误 tool call 的模型，在 Goose 中也会因同一原因输出格式错误的 tool call。',
        items: [
          '**Gemma 4 27B (`gemma4:27b`)** —— Google 的 tool call 训练在同尺寸中处于业内最佳。Q4_K_M 下可装入 16 GB 统一内存或 24 GB VRAM。通用推理良好；在链式 tool call 上略偏保守。',
          '**GLM-5.1 32B (`glm5:32b`)** —— 智谱的模型 tool call 可靠性极强，开箱 128K 上下文窗口。比 Gemma 4 略重；24 GB GPU 上从容运行。',
          '**Qwen3 32B (`qwen3:32b`)** —— 综合均衡；dense 32B 干净处理 MCP，在长智能体循环中稳定。**Qwen3-Coder 30B (`qwen3-coder:30b`)** 是代码形态智能体工作的最佳选择。',
          '**Llama 3.3 70B (`llama3.3:70b`)** —— 上限最高但最重。Q4_K_M 下需要 48 GB+ 统一内存或 2× 24 GB GPU。仅在硬件允许时使用；通常更小的模型已足够。',
          '**MCP 工作避免：** 任何 7B 以下，以及任何没有显式 tool call 训练的通用模型。它们会输出格式错误的 call、循环卡住，而你会怪罪 harness——但 harness 没问题。',
          '提升任何模型 tool call 质量的结构化提示工程方法，参见 [Chain-of-Thought Prompting](/zh/prompt-engineering/chain-of-thought-prompting)。',
          '逐项基准对比，参见 [2026 年最佳本地 tool calling 模型](/zh/power-local-llm/best-local-models-tool-calling-2026)。',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs 普通 Function Calling：差别在哪',
        content:
          '**Function calling 是模型输出的内容；MCP 是让客户端与工具互相发现的协议。** 它们在不同层并相互协作；不是替代关系。',
        items: [
          '**Function calling** 是 LLM 端的能力：模型输出一段描述工具名与参数的结构化 JSON。OpenAI Tools、Anthropic Tools、Ollama 的 tool call API 都是同一思路，只是 wire format 略有差异。',
          '**MCP** 在其上：它跨进程标准化工具如何被描述、发现、调用、返回。单凭 function calling 的模型并不知道你的 filesystem；MCP 服务器把 filesystem 操作暴露出来，客户端将其映射到模型的 function calling API，模型于是可以调用。',
          '**收益是 interop。** filesystem 服务器只写一次；Claude Desktop、Goose、Cline、Continue.dev、LM Studio 都不加修改地复用。模型从 Claude 换成 Gemma 4，服务器不变。',
          '**用纯 function calling 也能做智能体。** 但你会按项目重写 filesystem、数据库、浏览器 handler。有了 MCP，它们是开箱依赖。',
          '**一次性脚本，纯 function calling 更简单。** 但凡你想在项目或模型间复用，几天之后 MCP 就成为更省力的路径。',
        ],
      },
      zhongguoQiyeYingyong: {
        id: 'china-enterprise',
        title: '中国企业的应用方案',
        content:
          '**对中国企业而言，本地 MCP 智能体直接回应了云端智能体在《数据安全法》《个人信息保护法》《网络安全法》三法体系下面临的合规压力。** 当模型、客户端与所有工具服务器都在企业自有机器上运行时，数据并不离境，也不离厂。',
        items: [
          '**《数据安全法》(2021)：** 数据分级分类与重要数据出境评估是云端 AI 部署的核心障碍。本地 MCP 栈不产生数据出境行为，重要数据始终留在企业内网，对应「分级分类」中较高级别数据可在不触发出境评估的前提下使用 LLM 能力。',
          '**《个人信息保护法》(PIPL)：** PIPL 第 23 条对个人信息委托处理与第三方提供有严格要求；第 38 条对跨境提供个人信息额外要求安全评估或单独同意。本地推理消除了 LLM 层的第三方处理者关系，简化了与 OpenAI、Anthropic、Google 等境外 AI 服务商相关的合规路径。',
          '**《网络安全法》与等保（MLPS 2.0）：** 关键信息基础设施运营者与三级以上系统须满足数据本地化与日志可审计要求。本地 MCP 客户端的审计日志（Goose、Cline、Continue.dev）与等保审计要求天然契合，可作为 tool call 行为的主要证据存档。',
          '**中国企业实际应用场景：** 银行（信贷材料分析）、医院（病历摘要）、律师事务所（合同审阅）、制造业（图纸辅助设计）、政府机关（公文助理）——所有「客户/患者/公民数据不能出企业」的场景都适用。Apple M5 Mac mini 或搭载 RTX 4090 的工作站可运行 27B–32B 模型，覆盖摘要、合规检查、内部数据库代码片段验证等核心需求。',
          '**头部互联网公司参考：** 阿里巴巴、腾讯、华为、字节跳动、百度等对自研模型与外部模型混用早有实践；本地 MCP 协议层为「内部模型 + 内部数据」组合提供了一套与云端方案 wire 兼容的工具栈，便于在内外部环境之间迁移工具实现而不重写。',
          '**注意事项：** 浏览器服务器是合规上最敏感的组件，建议为其单独建立网络隔离环境并禁止访问支付/办公等高影响系统；GitHub PAT 须改为企业内部 Git（GitLab/Gitea）的等价 token 并按仓库限定权限；审计日志须落入 WORM 存储或不可被智能体覆写的内部 Git 仓库以满足等保留存要求。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '搭建本地 MCP 时常见错误',
        items: [
          '**错误 1：使用小型通用模型。** 7B 以下（以及大多数没有 tool call 微调的 7B–13B 通用模型）会输出格式错误的 tool call。请使用 27B+ 的 tool call 微调模型，停止与 harness 较劲。',
          '**错误 2：allow-list 自己的 home 目录。** 「只是测试」式的 `~` allow-list 会一路保留进入日常使用。请从一开始就建立专用的 `agent-workspace`。',
          '**错误 3：让数据库服务器停留在读写模式。** 自信满满的智能体在真实表上写出的 `DELETE` 查询，正是这套规范要避免的事故。把 `agent_ro` 设为默认；只为明确需要写入的任务、并仅在那些任务期间，临时启用单独的可写角色。',
          '**错误 4：自动批准每个工具。** 「全部批准」开关方便但危险。读取工具（`read_file`、`list_directory`、`query`）可自动批准；写入/shell/PR 工具一律要求授权。',
          '**错误 5：用 32K 上下文模型做多步浏览器工作。** 页面内容很大；浏览三页就可能在推理之前耗尽 32K token。浏览器密集任务请用 128K 上下文模型。',
          '**错误 6：假设智能体有判断力。** 它没有。模型并不理解「这是生产数据库」或「该 PR 会触发部署」。权限是你唯一的屏障。',
          '**错误 7：一次性安装所有参考服务器。** 工具越多 = system prompt 越大 = 工具选择越慢越不可靠。从 `filesystem` 开始，只在出现需要的工作流时再添加其他。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          '[Model Context Protocol 规范](https://modelcontextprotocol.io/) —— 官方规范、JSON-RPC schema、transport 与生命周期定义。',
          '[modelcontextprotocol/servers GitHub 仓库](https://github.com/modelcontextprotocol/servers) —— 参考服务器（filesystem、sqlite、postgres、github、puppeteer 等）及配置文档。',
          '[Goose 项目文档](https://block.github.io/goose/) —— CLI 安装、Ollama provider 配置、MCP 服务器配置语法。',
          '[Ollama 模型库](https://ollama.com/library) —— 可用本地模型、tool call 支持标记，以及本指南引用的量化级别。',
          '[Cline GitHub 仓库](https://github.com/cline/cline) —— VS Code 端 MCP 客户端实现，MCP 服务器面板。',
          '[Continue.dev 文档](https://docs.continue.dev/) —— Continue.dev 客户端 `mcpServers` 配置块参考。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'MCP 是什么？为什么对本地 AI 重要？',
            a: 'Model Context Protocol (MCP) 是开放的 JSON-RPC 2.0 协议，允许客户端（Goose、Cline、Continue.dev、LM Studio、Claude Desktop）以统一方式将语言模型连接到工具服务器。它对本地 AI 重要的原因是：标准化了把聊天模型变成智能体的那一层——工具服务器只写一次，可在任意客户端、任意模型（包括本地 Ollama 模型）下使用。没有 MCP，每个项目都要在自己客户端里重新实现文件/数据库/浏览器工具。',
          },
          {
            q: 'MCP 不需要 Claude Desktop 也能用吗？',
            a: '可以。协议开放，且与 Claude Desktop 完全独立。2026 年，Goose、Cline、Continue.dev、LM Studio 都提供了能与本地 Ollama 模型协作的 MCP 客户端实现。参考服务器（filesystem、sqlite、postgres、puppeteer、github）在任何符合规范的客户端下都不需修改即可运行。',
          },
          {
            q: '哪些本地模型对 MCP 支持最好？',
            a: '2026 年 5 月最可靠的选择是 Gemma 4 27B、GLM-5.1 32B、Qwen3 32B（代码形态工作选 Qwen3-Coder 30B）和 Llama 3.3 70B。这四个都具备显式的 tool call 训练，输出干净的 function calling JSON 供 MCP 客户端路由。7B 以下模型（以及多数没有 tool call 微调的通用模型）经常产生格式错误的 tool call。',
          },
          {
            q: 'MCP 安全吗？智能体会不会删除我的文件？',
            a: '只要你允许就有可能。安全来自服务器配置而非协议本身。filesystem 服务器只在你 allow-list 的路径内操作——把它限定到专用的 `agent-workspace` 目录。数据库服务器在你使用 SELECT-only 角色时是只读的。写入、shell、PR 工具一律要求显式授权；只对读取操作自动批准。审计日志事后可以精确显示智能体做了什么。',
          },
          {
            q: '我可以自己写一个 MCP 服务器吗？',
            a: '可以——SDK 让事情很直接。官方 TypeScript 与 Python SDK（`@modelcontextprotocol/sdk` 与 `mcp`）处理 JSON-RPC 管线。你用 JSON Schema 定义工具与一个 handler 函数，SDK 通过 stdio 暴露它们。一个单功能服务器（一两个工具封装一个内部 API）通常是 50–100 行的单文件。',
          },
          {
            q: 'MCP 在 Windows 下能用吗？',
            a: '能。Ollama、Goose、Cline、Continue.dev、LM Studio 都能在 Windows 上运行。MCP 服务器作为 Node.js 或 Python 子进程运行；两者在 Windows 下都得到完整支持。唯一与平台相关的注意点是路径处理——配置中使用正斜杠或正确转义反斜杠。其余体验与 macOS、Linux 一致。',
          },
          {
            q: '如何对 MCP tool call 做沙箱？',
            a: '三层覆盖大部分风险。第一，配置层把每个服务器收紧：filesystem 限定到一个目录、数据库限定到只读角色、GitHub 限定到针对测试仓库的 fine-grained PAT。第二，使用客户端按工具的授权规则：读取自动批准，写入要求授权。第三，把智能体放在 `git stash` 友好的 workspace 中，这样任何破坏性操作都可通过 git 回退。敏感任务建议在除服务器明确需要的端点外没有网络访问的主机上运行。',
          },
          {
            q: 'MCP 智能体能发起 HTTP 请求吗？',
            a: '能，通过特定服务器。浏览器服务器（puppeteer 或 playwright）驱动一个真实 Chromium，发起模型导航过程中所需的所有请求。一些第三方服务器更直接地暴露了 `http_get`/`http_post` 工具。filesystem 与数据库服务器不发起网络请求，仅在本地资源上操作。',
          },
          {
            q: 'MCP 与 Ollama 原生协作还是需要 wrapper？',
            a: 'Ollama 本身不会说 MCP——它只提供 OpenAI 兼容的 chat API。你需要客户端（Goose、Cline、Continue.dev、LM Studio）在 Ollama 的 chat API 与 MCP 服务器之间架桥。客户端把模型的 tool call 路由到正确的 MCP 服务器，并把结果送回对话。从用户视角看，除了安装客户端并指向 Ollama 之外不需要额外配置。',
          },
          {
            q: 'MCP 与 function calling 的区别是什么？',
            a: 'Function calling 是 LLM 输出一段命名工具与参数的结构化 JSON——这是模型能力。MCP 是让工具服务器与客户端跨进程描述、发现、调用、返回工具的协议——这是 interop 层。两者协作：客户端把 MCP 工具定义转换为模型的 function calling 格式，模型发出 function call，客户端将其映射回 MCP 服务器，服务器执行。没有 MCP 你也能做 function calling，但要按项目重写 filesystem/数据库/浏览器 handler；有了 MCP，同一套服务器在任意客户端下都能用。',
          },
          {
            q: '使用本地 MCP 智能体需要遵守《数据安全法》吗？',
            a: '需要——但本地 MCP 大幅降低了合规复杂度。《数据安全法》(2021) 对数据分级分类、重要数据出境评估、数据处理者义务有明确要求。云端 LLM 智能体涉及向境外服务商发送数据（涉及第 36 条「向境外提供」的合规评估）、处理活动留痕（第 27 条）、安全审计（第 29 条）。本地 MCP 栈中模型、客户端、所有工具服务器都在企业自有机器运行：第一，没有数据出境行为，无需触发出境安全评估；第二，MCP 客户端的审计日志（Goose、Cline、Continue.dev）天然满足处理活动留痕要求；第三，工具权限的分级配置（filesystem 单目录、数据库只读角色、GitHub fine-grained PAT）与等保 2.0 的访问控制要求一致。但仍需履行：数据本身的合规义务（合法性、目的限定、最短保留）、内部 DPO 或安全负责人审批、定期安全评估。',
          },
          {
            q: '本地 MCP 智能体如何满足中国企业的合规要求？',
            a: '本地 MCP 智能体在中国企业合规上有三层优势。第一，《个人信息保护法》(PIPL) 第 23 条对委托处理者要求严格的合同与安全保障措施；本地推理消除了 LLM 层的委托处理关系，简化了与 OpenAI、Anthropic、Google 的合同与跨境合规路径。第二，《网络安全法》要求关键信息基础设施运营者数据本地化，本地推理天然满足这一要求；MCP 客户端的审计日志可作为等保 2.0 三级以上系统的访问与操作日志归档。第三，金融业（人行金融科技指引）、医疗业（卫健委「互联网+医疗健康」要求）、法律业（律师执业管理办法）的细分合规对客户/患者/当事人数据的境内处理与不得对外提供有具体规定，本地 MCP 智能体可在不触发跨境与第三方提供条款的前提下完成摘要、检索、合规检查等工作。建议落地步骤：建立内部「智能体 + 数据」白名单（哪些数据可被哪些智能体处理）、为浏览器服务器单独建立网络隔离环境、审计日志落入 WORM 存储、由内部安全或 DPO 团队定期审查。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[2026 年最佳本地 tool calling 模型](/zh/power-local-llm/best-local-models-tool-calling-2026) —— 上面推荐模型（Gemma 4、GLM-5.1、Qwen3、Llama 3.3）的逐项对比基准。',
          '[自治本地智能体确实可用](/zh/power-local-llm/autonomous-local-agents-actually-work) —— 本地 MCP 智能体在长任务上能可靠完成什么、不能做什么的现实检查。',
          '[Continue.dev vs Cline vs Aider：2026 年最佳本地编码智能体](/zh/power-local-llm/continue-dev-vs-cline-vs-aider-local) —— 代码形态工作的相邻智能体语境；Cline 与 Continue.dev 也是 MCP 客户端。',
          '[2026 年最佳本地 LLM](/zh/local-llms/best-local-llms-2026) —— 更广 open-weights 生态的模型权威。',
          '[用本地 AI 智能体替代 Zapier](/zh/power-local-llm/replace-zapier-with-local-ai-agents) —— 同一 MCP 栈的工作流自动化框架。',
          '[Power Local LLM 中心](/zh/power-local-llm) —— 完整指南库。',
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
    title: 'Conecta Ollama a bases de datos y APIs con MCP: configuración de agentes locales 2026',
    seoTitle: 'Ollama + MCP local: conecta IA a bases de datos y APIs (2026)',
    intro:
      'Model Context Protocol (MCP) es la capa que faltaba entre un modelo Ollama local y el resto de tu máquina. Con un único archivo de configuración y un modelo que soporta tool calling, el mismo agente puede consultar una base de datos Postgres, leer y escribir archivos en un directorio aislado, controlar un navegador sin cabeza y abrir pull requests en GitHub — todo corriendo en tu laptop, todo sin conexión. Esta guía recorre el proceso completo con un modelo de seguridad que no asume que confías en el modelo.',
    metaDescription:
      'Guía de configuración para agentes de IA locales en 2026 usando Ollama y Model Context Protocol (MCP). Filesystem, SQLite/Postgres, navegador, servidor GitHub, configuración JSON funcional y un modelo de sandboxing que no confía en el LLM.',
    twitterDescription:
      'Ollama local + MCP = un agente de IA que lee archivos, consulta bases de datos y controla un navegador — completamente offline. Configs funcionales, los cuatro servidores esenciales y un modelo de seguridad que no confía en el modelo.',
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
      'Desarrolladores y usuarios con conocimientos técnicos que ejecutan LLMs locales a través de Ollama y quieren un modelo que pueda hacer cosas de verdad — consultar bases de datos, editar archivos, automatizar navegadores — sin enviar nada a un proveedor en la nube.',
    readTime: '15 min de lectura',
    educationalLevel: 'Advanced',
    primaryTerm: 'agente MCP local',
    targetKeywords: [
      'mcp ollama español',
      'configurar servidor mcp local',
      'model context protocol local',
      'ollama tool calling 2026',
      'agente ia local mcp',
      'mcp sin claude desktop',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) permite que un modelo Ollama local llame herramientas — leer un archivo, ejecutar una consulta SQL, hacer clic en un enlace, abrir un pull request — a través de una interfaz JSON-RPC estándar que cualquier cliente compatible con MCP (Goose, Cline, Continue.dev, LM Studio en 2026) puede usar. El protocolo es abierto, los servidores de referencia son de código abierto y en 2026 no se necesita Claude Desktop ni ninguna cuenta en la nube. Ejecuta Ollama, instala un cliente MCP, coloca un archivo de configuración `mcp.json` con los servidores que quieras y un modelo con tool calling (Gemma 4, GLM-5.1, Qwen3, Llama 3.3) se convierte en un agente que opera en tu máquina con los permisos que tú controlas. La clave está en el modelo de seguridad: nunca apruebes automáticamente herramientas de escritura, limita el acceso al filesystem a un único directorio y mantén el servidor de base de datos en modo solo lectura por defecto.**',
    quickAnswerTop: {
      es: {
        question: '¿Puedo ejecutar agentes de IA locales con MCP y Ollama en 2026?',
        answer:
          'Sí — y la configuración ahora es tan sencilla que se puede hacer en una tarde. Ejecuta Ollama con un modelo con tool calling (Gemma 4, GLM-5.1, Qwen3 o Llama 3.3 70B), instala un cliente compatible con MCP (Goose es el CLI más directo; Cline, Continue.dev y LM Studio añadieron soporte MCP a principios de 2026) y agrega servidores MCP para las capacidades que necesitas — `filesystem` para archivos, `sqlite` o `postgres` para bases de datos, `puppeteer` o `playwright` para automatización del navegador, `github` para gestión de repositorios. El protocolo es el mismo que usa Claude Desktop; la única diferencia es el modelo y el cliente. Mantén la seguridad limitando el servidor filesystem a un único directorio, manteniendo la base de datos en solo lectura por defecto y nunca aprobando automáticamente herramientas de escritura o shell.',
        bullets: [
          'MCP es abierto y funciona completamente en local — no se necesita Claude Desktop, cuenta de Anthropic ni llamadas a la nube.',
          'Ollama proporciona el modelo; un cliente MCP (Goose, Cline, Continue.dev, LM Studio) conecta Ollama con los servidores MCP mediante JSON-RPC.',
          'Cuatro servidores de referencia cubren la mayoría de flujos de trabajo reales: filesystem, SQLite/Postgres, Puppeteer/Playwright (navegador) y GitHub.',
          'La fiabilidad del tool calling es una propiedad del modelo: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B y Llama 3.3 70B manejan MCP sin problemas. Los modelos de menos de 7B suelen emitir tool calls malformados.',
          'Modelo de seguridad: limita el acceso al filesystem a un directorio, ejecuta los servidores de base de datos en solo lectura y coloca cada herramienta de escritura o shell detrás de una aprobación explícita.',
          'Costo: $0 en gasto de API, pero los tokens se consumen localmente — los bucles de agente son intensivos en tokens, así que usa un modelo con contexto de 32K+ y una máquina que pueda ejecutarlo a velocidad útil.',
        ],
        updatedDate: '2026-05-07',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: 'Lo que MCP desbloquea', anchor: '#what-mcp-unlocks' },
      { label: 'Comparativa de servidores MCP', anchor: '#server-comparison' },
      { label: 'Arquitectura: cómo encajan las piezas', anchor: '#architecture' },
      { label: 'Configuración: Ollama + Goose en 15 minutos', anchor: '#setup' },
      { label: 'Servidor Filesystem', anchor: '#filesystem-server' },
      { label: 'Servidores SQLite y Postgres', anchor: '#database-server' },
      { label: 'Servidor de navegador (Puppeteer / Playwright)', anchor: '#browser-server' },
      { label: 'Servidor GitHub', anchor: '#github-server' },
      { label: 'Modelo de seguridad', anchor: '#security-model' },
      { label: 'MCP local vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'Elegir un modelo con tool calling', anchor: '#picking-model' },
      { label: 'MCP vs Function Calling simple', anchor: '#mcp-vs-function-calling' },
      { label: 'Errores comunes', anchor: '#common-mistakes' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      'La presentación cubre: cómo MCP convierte un modelo Ollama local en un agente que consulta bases de datos, lee archivos, controla un navegador y abre pull requests — todo sin conexión; los cuatro servidores de referencia (filesystem, SQLite/Postgres, navegador, GitHub) con dificultad de configuración y nivel de riesgo; una guía de configuración de Goose en 6 pasos; un modelo de seguridad que no confía en el LLM; y una comparación directa con Claude Desktop. Descarga el PDF como tarjeta de referencia de agente MCP local.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP es un protocolo JSON-RPC 2.0 para herramientas.** Un modelo (a través de un cliente) se conecta a uno o más servidores MCP; cada servidor expone Tools (funciones invocables), Resources (datos legibles) y Prompts (plantillas). El formato de wire es idéntico tanto si el cliente es Claude Desktop, Goose, Cline, Continue.dev o LM Studio.',
          '**Ollama no habla MCP directamente — un cliente MCP envuelve Ollama.** Goose (Block) es el CLI de código abierto más sencillo con soporte nativo de Ollama; Cline, Continue.dev y LM Studio añadieron soporte de cliente MCP a principios de 2026.',
          '**Cuatro servidores de referencia cubren la mayoría de casos de uso:** `filesystem` (leer/escribir en un directorio aislado), `sqlite` y `postgres` (consultar bases de datos, solo lectura por defecto), `puppeteer` o `playwright` (controlar un navegador sin cabeza) y `github` (gestión de repositorios y PRs con un personal access token).',
          '**La fiabilidad del tool calling escala con el tamaño y el entrenamiento del modelo.** Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B y Llama 3.3 70B manejan MCP sin problemas en Q4_K_M. Los modelos de menos de 7B suelen emitir tool calls malformados y bloquear el bucle.',
          '**El modelo de seguridad asume que el modelo no es de confianza.** Limita el servidor filesystem a un único directorio, ejecuta el servidor de base de datos con un rol de solo lectura, nunca apruebes automáticamente `execute_command` ni `write_file` y revisa el registro de auditoría después de sesiones largas.',
          '**MCP local vs Claude Desktop:** protocolo idéntico, ecosistema de servidores idéntico. El stack local sustituye el modelo en la nube por uno offline — privacidad, sin costo por token y sin límites de velocidad, a cambio de un modelo algo menos capaz y de gestionar tú mismo la configuración de seguridad.',
          '**El costo es $0 en tarifas de API pero real en tokens.** Los bucles de agente pueden consumir entre 30K y 80K tokens para una sola tarea de varios pasos. Usa un modelo con contexto de al menos 32K; 128K es cómodo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Protocolo:** JSON-RPC 2.0 sobre stdio (subproceso local) o HTTP/SSE (remoto). Los agentes locales usan casi exclusivamente stdio.',
          '**Mantenido por:** Anthropic (especificación de código abierto); servidores de referencia mantenidos en `modelcontextprotocol/servers` en GitHub más un ecosistema de terceros en crecimiento.',
          '**Clientes locales en 2026:** Goose (Block), Cline (extensión de VS Code), Continue.dev (VS Code/JetBrains), LM Studio (aplicación de escritorio), más varias herramientas CLI.',
          '**Modelos Ollama compatibles:** cualquier modelo con entrenamiento nativo de tool calling. En mayo de 2026: Gemma 4 27B, GLM-5.1 32B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Transporte por defecto:** stdio para procesos locales; HTTP/SSE solo cuando necesitas compartir un servidor entre máquinas o agentes.',
          '**La configuración vive en un único archivo:** `~/.config/goose/config.yaml` (Goose), el bloque MCP de `~/.continue/config.json` (Continue.dev) o `mcpServers` en la interfaz de configuración de Cline. La misma estructura en todos: nombre del servidor, comando, args, variables de entorno.',
          '**No se necesita Claude Desktop.** El protocolo es anterior a las historias de exclusividad de Claude Desktop; todos los servidores de referencia tienen licencia MIT/Apache y funcionan con cualquier cliente compatible.',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'Lo que MCP realmente desbloquea para un modelo local',
        content:
          '**Un LLM local sin herramientas solo puede responder con texto. Con MCP, el mismo modelo puede actuar en tu máquina.** El cambio es la diferencia entre un chatbot y un agente.',
        items: [
          '**"Encuentra todos los TODO en este repositorio, agrúpalos por archivo y escribe un resumen en Markdown en `notes/todos.md`."** — el servidor `filesystem` lee, el modelo agrupa, el mismo servidor escribe. Un único viaje de ida y vuelta de principio a fin.',
          '**"Muéstrame los 10 mejores clientes por ingresos este trimestre y haz un gráfico."** — el servidor `postgres` ejecuta el SQL (rol de solo lectura), el modelo resume y escribe un CSV mediante `filesystem` para tu herramienta de gráficos.',
          '**"Abre la portada de Hacker News, encuentra las tres principales historias de IA, resúmelas y añádelas a mi lista de lectura."** — el servidor `puppeteer` controla un navegador sin cabeza, el modelo extrae y resume, `filesystem` añade.',
          '**"Abre un PR draft con el título `chore: bump deps` contra mi fork y enlaza la ejecución de CI fallida."** — el servidor `github` crea el PR, obtiene la ejecución y escribe el enlace en la descripción.',
          '**"Mira las últimas 100 filas de `events.db` y dime qué IDs de usuario son responsables del nuevo pico de errores."** — el servidor `sqlite` consulta; el modelo razona; lees la respuesta en el panel de chat.',
          'Cada uno de estos es un flujo de trabajo de frase a acción que antes requería un modelo en la nube con herramientas alojadas o un script escrito a mano. MCP es la capa que te permite reutilizar los mismos servidores entre clientes y el mismo modelo entre servidores.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Comparativa de los cuatro servidores MCP más usados',
        content:
          'Los servidores de referencia a continuación cubren el largo recorrido de "quiero que mi modelo local haga algo de verdad". Todos son de código abierto y se ejecutan como subprocesos locales iniciados por tu cliente MCP.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Empieza con el servidor filesystem (5 minutos, bajo riesgo), añade un servidor SQLite para trabajo con datos, agrega un servidor de navegador solo cuando lo necesites y trae GitHub una vez que confíes en el modelo en tu máquina.',
          },
          {
            type: 'plain-terms',
            text: 'Cuatro servidores cubren el 90% de lo que querrás que haga un agente local. El servidor filesystem lee y escribe archivos en una carpeta que tú eliges. El servidor SQLite o Postgres ejecuta consultas contra una base de datos. El servidor de navegador controla una ventana real de Chromium para que el modelo pueda leer páginas que requieren JavaScript. El servidor GitHub abre issues y PRs en tus repositorios. Todos se instalan con un comando, todos se ejecutan como subprocesos en tu propia máquina y ninguno llama a internet a menos que explícitamente lo necesite (el navegador sí lo hace, los demás no).',
          },
        ],
        columns: ['Servidor MCP', 'Qué habilita', 'Dificultad de configuración', 'Nivel de riesgo', 'Ideal para'],
        rows: [
          { 'Servidor MCP': 'Filesystem', 'Qué habilita': 'Leer y escribir archivos dentro de un directorio aislado', 'Dificultad de configuración': 'Fácil (una ruta en la allow-list)', 'Nivel de riesgo': 'Medio — limita el alcance con cuidado', 'Ideal para': 'Automatización personal, toma de notas, resumen de repositorios' },
          { 'Servidor MCP': 'SQLite', 'Qué habilita': 'Consultar un archivo de base de datos SQLite local', 'Dificultad de configuración': 'Fácil (ruta al archivo .db)', 'Nivel de riesgo': 'Bajo en solo lectura; medio con escrituras', 'Ideal para': 'Exploración de datos, análisis de logs, prototipado' },
          { 'Servidor MCP': 'Postgres', 'Qué habilita': 'Consultar una base de datos Postgres mediante una cadena de conexión', 'Dificultad de configuración': 'Medio (rol + URL)', 'Nivel de riesgo': 'Medio — usa un rol de solo lectura', 'Ideal para': 'Exploración de datos de producción, reportes, prototipos BI' },
          { 'Servidor MCP': 'Puppeteer / Playwright', 'Qué habilita': 'Controlar un Chromium sin cabeza o visible para navegación, scraping, rellenado de formularios', 'Dificultad de configuración': 'Difícil (binarios del navegador, selectores, latencia)', 'Nivel de riesgo': 'Alto — puede enviar formularios, hacer clic en cualquier cosa', 'Ideal para': 'Investigación, scraping, pruebas de regresión' },
          { 'Servidor MCP': 'GitHub', 'Qué habilita': 'Listar repositorios, leer archivos, abrir issues y PRs', 'Dificultad de configuración': 'Fácil (PAT en variable de entorno)', 'Nivel de riesgo': 'Medio — limita el token a repositorios específicos', 'Ideal para': 'Flujos de trabajo de desarrollo, triage, borradores de PR' },
          { 'Servidor MCP': 'Custom', 'Qué habilita': 'Cualquier cosa que puedas expresar como herramientas JSON-RPC', 'Dificultad de configuración': 'Difícil (escribe tu propio servidor)', 'Nivel de riesgo': 'Variable', 'Ideal para': 'APIs internas, sistemas de nicho, código de integración' },
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Cómo encajan las piezas',
        content:
          '**Tres procesos, un protocolo compartido.** El modelo vive en Ollama, el cliente habla MCP y cada servidor expone un pequeño conjunto de herramientas. Cada tool call salta del cliente al servidor, se ejecuta localmente y devuelve JSON.',
        items: [
          '**Ollama** se ejecuta como servicio en segundo plano en `127.0.0.1:11434` y sirve el modelo a través de una API compatible con OpenAI. No sabe qué es MCP — simplemente responde a las completaciones de chat y emite tool calls cuando el modelo los solicita.',
          '**El cliente MCP** (Goose, Cline, Continue.dev, LM Studio) es el puente. Habla con Ollama para el modelo y con los servidores MCP para las herramientas. Cuando el modelo emite un tool call, el cliente lo enruta al servidor correcto, obtiene el resultado y lo devuelve a la conversación.',
          '**Los servidores MCP** son subprocesos independientes, uno por capacidad. Hablan JSON-RPC 2.0 sobre stdio. Cada servidor anuncia una lista de Tools, Resources y Prompts; el cliente los combina en la superficie de herramientas que se presenta al modelo.',
          '**El transporte stdio mantiene todo en local.** El servidor es iniciado por el cliente, se comunica a través de su stdin/stdout y termina cuando el cliente termina. Nada va por la red a menos que el servidor mismo abra una conexión (el servidor de navegador sí lo hace; los servidores de filesystem y base de datos no).',
          '**El modelo ve una lista plana de herramientas.** Desde la perspectiva del modelo no hay servidores — solo una lista de nombres de herramientas como `filesystem.read_file`, `sqlite.query`, `puppeteer.navigate`. El cliente gestiona el enrutamiento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La arquitectura es idéntica a la de Claude Desktop. Las diferencias son el modelo (un modelo Ollama local en lugar de Claude) y el cliente (Goose/Cline/Continue.dev/LM Studio en lugar de Claude Desktop). Los servidores MCP son los mismos servidores — puedes ejecutar el servidor filesystem bajo Claude Desktop hoy y seguirá funcionando sin cambios bajo Goose mañana.',
          },
        ],
      },
      setup: {
        id: 'setup',
        title: 'Configuración: Ollama + Goose en 15 minutos',
        content:
          '**Goose es el camino más sencillo hacia un agente MCP local funcional en 2026.** Es un CLI de código abierto de Block con soporte nativo de Ollama, una interfaz de chat interactiva y un único archivo de configuración para todos tus servidores MCP. Continue.dev, Cline y LM Studio también funcionan — Goose tiene el menor coste de configuración para una primera ejecución.',
        items: [
          '**Paso 1 — instala Ollama.** Descárgalo desde ollama.com/download (macOS/Windows/Linux). Confirma que el servicio está corriendo con `curl http://127.0.0.1:11434/api/tags`.',
          '**Paso 2 — descarga un modelo con tool calling.** Elige entre Gemma 4 27B (`gemma4:27b`), GLM-5.1 32B (`glm5:32b`), Qwen3 32B (`qwen3:32b`) o Llama 3.3 70B (`llama3.3:70b`). 16 GB de memoria unificada o 12 GB de VRAM manejan cómodamente 27B–32B en Q4_K_M.',
          '**Paso 3 — instala Goose.** `pipx install goose-ai` (macOS, Linux) o descarga el instalador desde la página de releases de Goose. El CLI se instala como `goose`.',
          '**Paso 4 — configura Ollama como proveedor.** Ejecuta `goose configure`, elige `ollama` como proveedor, establece el modelo al que descargaste y el host en `http://127.0.0.1:11434`. Goose escribe esto en `~/.config/goose/config.yaml`.',
          '**Paso 5 — añade el servidor MCP de filesystem.** Edita `~/.config/goose/config.yaml` para agregar un bloque `mcpServers` (ejemplo de configuración a continuación). Reinicia `goose session` y pídele que liste los archivos en tu directorio de prueba. El primer turno confirma que el servidor está conectado.',
          '**Paso 6 — verifica con una tarea real.** Prueba `goose session` y pide "Haz una lista de cada archivo Markdown en `notes/`, con título y número de palabras, y escribe el resultado en `notes/index.md`." Si el agente lee, resume y escribe de vuelta, el bucle funciona.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:27b\n\n# 2. Install Goose\npipx install goose-ai\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:27b\n# Host:     http://127.0.0.1:11434\n\n# 4. Start a session — Goose reads ~/.config/goose/config.yaml\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Si ya usas Cline o Continue.dev, omite Goose y úsalos — ambos añadieron soporte de servidor MCP en sus versiones de principios de 2026. El panel "MCP Servers" de Cline instala los servidores de referencia con un clic; Continue.dev lee `mcpServers` desde `~/.continue/config.json` (misma estructura que el bloque de configuración de Goose a continuación). El modelo y los servidores son los mismos; solo cambia la aplicación host.',
          },
        ],
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Servidor Filesystem: leer y escribir en un directorio aislado',
        content:
          '**El servidor filesystem es el primero en instalar y el más fácil de limitar de forma segura.** Expone `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` y `create_directory` — todo restringido a una o más rutas en la allow-list.',
        items: [
          '**Instalación:** el servidor de referencia es `@modelcontextprotocol/server-filesystem`, ejecutado mediante `npx -y` (sin instalación global necesaria). Goose, Cline y Continue.dev lo inician automáticamente desde el bloque de configuración.',
          '**Rutas en la allow-list:** el servidor acepta uno o más argumentos de directorio y rechaza operaciones fuera de ellos. Siempre pasa una ruta explícita y estrecha — nunca `~` ni `/`.',
          '**Herramientas expuestas:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (reemplazos por línea), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. El modelo las ve como `filesystem.read_file` y así sucesivamente.',
          '**Comodidad de uso:** `directory_tree` devuelve un árbol JSON; ideal para que el modelo se oriente antes de leer archivos específicos. `search_files` hace una búsqueda recursiva similar a grep.',
          '**Superficie de riesgo:** el servidor respeta la allow-list, pero dentro de ella tiene lectura/escritura completa. Trata la allow-list como la única barrera y elige un directorio workspace dedicado en lugar de tu carpeta home.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  filesystem:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-filesystem"\n      - "/Users/you/agent-workspace"\n    env: {}',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Nunca pongas `/` ni tu directorio home en la allow-list. Crea una carpeta `agent-workspace` dedicada, pon copias de los archivos que quieres que el agente toque y deja que opere solo dentro de esa carpeta. Si el agente falla, el radio de explosión se detiene en un directorio.',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'Servidores SQLite y Postgres: consultar datos reales',
        content:
          '**Los servidores de base de datos convierten al modelo en un analista junior que puede responder preguntas respaldadas por datos reales — siempre que lo mantengas en solo lectura.** Ambos servidores de referencia incluyen una herramienta `query` y (opcionalmente) una herramienta `write_query`.',
        items: [
          '**Servidor SQLite (`@modelcontextprotocol/server-sqlite`)** toma una ruta a un archivo `.db`. Útil para análisis de logs, prototipado de esquemas y exploración de exports sin necesidad de levantar una base de datos.',
          '**Servidor Postgres (`@modelcontextprotocol/server-postgres`)** toma una cadena de conexión. El patrón recomendado es crear un rol de solo lectura dedicado para el agente y usar la cadena de conexión de ese rol.',
          '**Herramientas expuestas:** `query` (solo SELECT cuando está configurado como solo lectura), `list_tables`, `describe_table`. El servidor Postgres añade `list_schemas`. Algunos forks añaden `write_query` — mantenlo deshabilitado a menos que confíes en el modelo con esta base de datos.',
          '**Conciencia del esquema:** pide al agente que "liste las tablas y describa las cinco más usadas" antes de hacer preguntas analíticas — el modelo es mucho más preciso cuando ha llamado a `describe_table` que cuando adivina los nombres de columnas.',
          '**Costo:** las consultas van directamente a tu base de datos. Un `SELECT *` mal formado de una tabla de 100M de filas es el mismo accidente aquí que lo sería de un humano — mantén el rol en un pool de conexiones separado con un statement timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  sqlite:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-sqlite"\n      - "--db-path"\n      - "/Users/you/data/events.db"\n    env: {}\n\n  postgres:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-postgres"\n      - "postgresql://agent_ro@127.0.0.1:5432/analytics"\n    env:\n      PGPASSWORD: "${PG_AGENT_PASSWORD}"',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'Crea el rol de Postgres una vez y no le des nada más al agente: `CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` Luego añade `statement_timeout = 30s` al rol. El agente no puede escribir, no puede eliminar y no puede ejecutarse indefinidamente.',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'Servidor de navegador: controlar Chromium con Puppeteer o Playwright',
        content:
          '**El servidor de navegador es el más potente y el más peligroso de los cuatro.** Lanza un Chromium real y expone navegación, clics, relleno de formularios y capturas de pantalla — es decir, puede hacer todo lo que tú puedes hacer en un navegador, incluyendo enviar formularios.',
        items: [
          '**Servidores de referencia:** `@modelcontextprotocol/server-puppeteer` (más ligero, sin cabeza por defecto) y `@modelcontextprotocol/server-playwright` (más pesado, soporta múltiples navegadores). Para agentes locales, Puppeteer es suficiente.',
          '**Herramientas expuestas:** `navigate`, `screenshot`, `click`, `fill`, `select`, `evaluate` (ejecutar JavaScript), `get_page_content`. El modelo usa `get_page_content` para leer texto estructurado y `screenshot` para confirmar visualmente.',
          '**Latencia:** las sesiones de navegador reales tardan entre 1 y 5 segundos por acción. Una navegación de varios pasos puede consumir fácilmente entre 30 y 60 segundos y decenas de miles de tokens porque el contenido de las páginas es grande. Usa una ventana de contexto de 32K+.',
          '**Selectores:** el modelo tiene que elegir los selectores CSS. Los modelos más pequeños se equivocan con frecuencia; un modelo de 27B+ con tool calling maneja los patrones comunes de forma fiable. Mantén las tareas acotadas — "extrae el título y el primer párrafo de esta URL" es mucho más fiable que "navega por el sitio y encuentra la página de contacto".',
          '**Los casos de uso correctos:** investigación (abrir la página, resumirla, añadir a notas), pruebas de regresión (navegar, hacer clic, captura de pantalla) y relleno de formularios en páginas que tú controlas. Los casos incorrectos: cualquier cosa donde un clic erróneo en la web en vivo tenga consecuencias.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  puppeteer:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-puppeteer"\n    env:\n      PUPPETEER_HEADLESS: "true"\n      # Block obviously dangerous endpoints at the OS firewall level\n      # rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Nunca des credenciales al servidor de navegador. Si necesitas una sesión autenticada, pasa al agente un perfil de navegador pre-autenticado (mediante `userDataDir`) y nunca lo dejes navegar a sitios de alto impacto (banca, correo electrónico, consolas en la nube, formularios de pago). El modelo no tiene criterio sobre lo que hace un botón — ve texto y hace clic. Trátalo como un becario sin contexto y sin recurso.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'Servidor GitHub: repositorios, issues y PRs desde un modelo local',
        content:
          '**El servidor GitHub convierte el trabajo en lenguaje natural sobre repositorios en llamadas a la API.** Es el más sencillo de los cuatro de configurar y el más fácil de limitar mediante los permisos del personal access token (PAT).',
        items: [
          '**Instalación:** `@modelcontextprotocol/server-github`, ejecutado con un PAT en la variable de entorno `GITHUB_PERSONAL_ACCESS_TOKEN`. El token es la única autenticación — el servidor en sí no tiene configuración separada.',
          '**Herramientas expuestas:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, más docenas adicionales. La superficie completa es grande; la mayoría de las tareas usan entre 5 y 10 herramientas.',
          '**Limita el alcance del PAT.** Usa un PAT de grano fino limitado a repositorios específicos con los permisos mínimos necesarios (Read para navegar, Write para crear PRs/issues). No uses un PAT clásico con `repo` para un agente experimental.',
          '**Flujos de trabajo reales:** triage ("lee los últimos 20 issues abiertos, agrúpalos, propón etiquetas"), borradores ("lee el README y abre un PR corrigiendo erratas"), reportes ("qué PRs están inactivos esta semana").',
          '**Superficie de riesgo:** el agente puede crear issues y PRs, comentarlos y (con permisos de escritura) hacer push de commits. Deshabilita las herramientas de merge a menos que confíes tanto en el modelo como en el flujo de trabajo — un merge accidental en un repositorio con PAT de grano fino es recuperable, pero solo si lo notas rápido.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nmcpServers:\n  github:\n    command: npx\n    args:\n      - "-y"\n      - "@modelcontextprotocol/server-github"\n    env:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n      # Fine-grained PAT scoped to one or two test repos,\n      # not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'Un modelo de seguridad que no confía en el modelo',
        content:
          '**El modelo mental correcto es "el LLM es un becario sin confianza con las llaves que tú le das".** Las capacidades vienen de los servidores y las superficies que incluyes en la allow-list — no del criterio del modelo.',
        items: [
          '**Limita el servidor filesystem a un directorio.** Nunca `~` ni `/`. Elige una carpeta `agent-workspace/` y pon copias de los archivos que el agente necesita tocar. Si el agente falla, el peor caso es una carpeta.',
          '**Ejecuta los servidores de base de datos en solo lectura por defecto.** Un rol `agent_ro` dedicado con permisos solo de `SELECT` y un statement timeout de 30 segundos elimina toda una clase de incidentes.',
          '**Coloca cada herramienta de escritura o shell detrás de una aprobación explícita.** Goose, Cline y Continue.dev admiten reglas de aprobación por herramienta. Permite las herramientas de lectura por defecto; requiere aprobación para `write_file`, `edit_file`, `execute_command`, `create_pull_request` y cualquier acción del navegador que envíe formularios.',
          '**Usa el registro de auditoría.** Cada cliente MCP registra las tool calls y los resultados. Después de una sesión larga, revisa el registro: detectarás al modelo intentando cosas que no esperabas (a veces inofensivas, a veces justificando ajustar los permisos).',
          '**Limita el acceso de terceros con tokens de alcance estrecho.** PATs de GitHub limitados a dos repositorios de prueba. Roles de Postgres de solo lectura. Sesiones de navegador sin credenciales. El modelo eventualmente intentará cosas que no anticipaste; los límites de lo que puede hacer no deben depender de que el modelo lo haga bien.',
          '**Aísla al agente para trabajo con datos sensibles.** Deshabilita el acceso a la red en el host mientras se ejecuta el agente (o usa un namespace de red) cuando trabajes con datos privados. El stack local ya no envía nada fuera de la máquina, pero la defensa en profundidad detecta errores en servidores de terceros.',
          '**Trata la selección de servidores MCP como cualquier elección de dependencia.** Los servidores de referencia están bien mantenidos; muchos servidores de terceros no lo están. Lee el código del servidor antes de instalar uno que necesite credenciales.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Un hábito útil de recuperación ante fallos: antes de una tarea de agente no trivial, haz `git stash` (o `git checkout -b agent/<task>`). Después de la tarea, revisa el diff, conserva las partes que quieres y descarta el resto. Esta es la misma práctica que hace seguras las sesiones largas de Cline o Aider — consulta la [comparativa de Continue.dev vs Cline vs Aider](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) para el patrón más amplio.',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'MCP local vs Claude Desktop: qué cambia, qué permanece',
        content:
          '**El protocolo y los servidores son idénticos. Solo cambian el modelo y el cliente.** Esta es exactamente la razón por la que MCP importa — tu inversión en herramientas se porta limpiamente entre configuraciones locales y en la nube.',
        columns: ['Capa', 'Claude Desktop', 'Ollama local + Goose'],
        rows: [
          { 'Capa': 'Modelo', 'Claude Desktop': 'Claude (Anthropic, en la nube)', 'Ollama local + Goose': 'Gemma 4, GLM-5.1, Qwen3 o Llama 3.3 (local)' },
          { 'Capa': 'Cliente', 'Claude Desktop': 'Aplicación Claude Desktop', 'Ollama local + Goose': 'Goose, Cline, Continue.dev o LM Studio' },
          { 'Capa': 'Servidores', 'Claude Desktop': 'Los mismos servidores MCP', 'Ollama local + Goose': 'Los mismos servidores MCP' },
          { 'Capa': 'Protocolo', 'Claude Desktop': 'MCP (JSON-RPC 2.0)', 'Ollama local + Goose': 'MCP (JSON-RPC 2.0)' },
          { 'Capa': 'Costo por solicitud', 'Claude Desktop': 'Gasto de API por token', 'Ollama local + Goose': '$0 — inferencia local' },
          { 'Capa': 'Privacidad', 'Claude Desktop': 'La conversación va a Anthropic', 'Ollama local + Goose': 'Se queda en la máquina' },
          { 'Capa': 'Límites de velocidad', 'Claude Desktop': 'Se aplican los límites de la API', 'Ollama local + Goose': 'Limitado solo por el rendimiento del hardware' },
          { 'Capa': 'Calidad del tool calling', 'Claude Desktop': 'La mejor en su clase', 'Ollama local + Goose': 'Buena con modelos de 27B+; se degrada rápido por debajo de 7B' },
          { 'Capa': 'Requiere internet', 'Claude Desktop': 'Sí', 'Ollama local + Goose': 'Solo si un servidor hace peticiones (p.ej. el navegador)' },
          { 'Capa': 'Tiempo de configuración', 'Claude Desktop': '5 minutos', 'Ollama local + Goose': '15 minutos (una sola vez)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'Elegir un modelo con tool calling para MCP local',
        content:
          '**La fiabilidad del tool calling escala con el tamaño y el entrenamiento del modelo, no con el harness.** Un modelo que emite tool calls malformados en Cline los emitirá en Goose por la misma razón.',
        items: [
          '**Gemma 4 27B (`gemma4:27b`)** — el entrenamiento de tool calling de Google es el mejor en su clase para este tamaño. Cabe en 16 GB de memoria unificada o 24 GB de VRAM en Q4_K_M. Buen razonamiento general; algo conservador en tool calls encadenados.',
          '**GLM-5.1 32B (`glm5:32b`)** — el modelo de Zhipu tiene una fiabilidad de tool calling muy alta y una ventana de contexto de 128K de serie. Ligeramente más pesado que Gemma 4; cabe cómodamente en una GPU de 24 GB.',
          '**Qwen3 32B (`qwen3:32b`)** — equilibrado; el 32B denso maneja MCP sin problemas y se desenvuelve bien en un bucle de agente largo. **Qwen3-Coder 30B (`qwen3-coder:30b`)** es la mejor opción si tu trabajo de agente está orientado al código.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — el techo más alto pero el más pesado. 48 GB+ de memoria unificada o 2× 24 GB de GPUs en Q4_K_M. Úsalo solo si tu hardware lo admite; los modelos más pequeños suelen ser suficientes.',
          '**Evita para trabajo con MCP:** cualquier cosa por debajo de 7B y cualquier modelo de uso general sin entrenamiento explícito de tool calling. Emitirán llamadas malformadas, el bucle se bloqueará y culparás al harness — pero el harness está bien.',
          'Para técnicas de prompting estructurado que mejoran la calidad del tool calling en cualquier modelo, consulta [Chain-of-thought prompting](/es/prompt-engineering/chain-of-thought-prompting).',
          'Para los datos comparativos, consulta [Mejores modelos locales para tool calling en 2026](/es/power-local-llm/best-local-models-tool-calling-2026).',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs Function Calling simple: cuál es la diferencia',
        content:
          '**El function calling es lo que emite el modelo. MCP es el protocolo que permite que los clientes y las herramientas se encuentren.** Viven en capas diferentes y cooperan; uno no reemplaza al otro.',
        items: [
          '**El function calling** es la capacidad del lado del LLM: el modelo emite un objeto JSON estructurado que describe el nombre de la herramienta y los argumentos. Las herramientas de OpenAI, las de Anthropic y la API de tool call de Ollama usan la misma idea con formatos de wire ligeramente diferentes.',
          '**MCP** se sitúa por encima: estandariza cómo se describen, descubren, invocan y devuelven las herramientas entre procesos. Un modelo con function calling por sí solo no sabe nada de tu filesystem; un servidor MCP hace disponibles las operaciones de filesystem, el cliente las mapea a la API de function calling del modelo y el modelo puede llamarlas.',
          '**El beneficio es la interoperabilidad.** Escribe el servidor filesystem una vez; Claude Desktop, Goose, Cline, Continue.dev y LM Studio lo usan todos sin cambios. Cambia el modelo de Claude a Gemma 4; el servidor no cambia.',
          '**Puedes hacer agentes con function calling puro.** Reimplementarás manejadores de filesystem, base de datos y navegador por proyecto. Con MCP, esas son dependencias listas para usar.',
          '**Para scripts puntuales, el function calling puro es más sencillo.** Para cualquier cosa que quieras reutilizar entre proyectos o modelos, MCP es el camino de menor esfuerzo en pocos días.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Errores comunes al configurar MCP local',
        items: [
          '**Error 1: usar un modelo pequeño de propósito general.** Los modelos de menos de 7B (y la mayoría de los modelos generales de 7B–13B sin fine-tuning de tool calling) emiten tool calls malformados. Usa un modelo de 27B+ afinado para tool calling y deja de pelear con el harness.',
          '**Error 2: poner tu directorio home en la allow-list.** Las allow-lists de `~` "solo para pruebas" sobreviven hasta el uso rutinario. Crea un `agent-workspace` dedicado desde el principio.',
          '**Error 3: dejar el servidor de base de datos en modo lectura/escritura.** Una consulta `DELETE` redactada por un agente seguro de sí mismo sobre una tabla real es exactamente el incidente que esto evita. Haz de `agent_ro` tu rol por defecto; configura un rol escribible separado solo para las tareas que explícitamente lo necesiten y solo durante esas tareas.',
          '**Error 4: aprobar automáticamente cada herramienta.** El botón "aprobar todo" es cómodo y peligroso. Aprueba automáticamente las herramientas de lectura (`read_file`, `list_directory`, `query`); siempre requiere aprobación para las herramientas de escritura/shell/PR.',
          '**Error 5: usar un modelo con contexto de 32K para trabajo de navegador de varios pasos.** El contenido de la página es grande; un agente que navega tres páginas puede agotar los 32K tokens antes de razonar. Usa un modelo con contexto de 128K para tareas intensivas en el navegador.',
          '**Error 6: asumir que el agente tiene criterio.** No lo tiene. El modelo no tiene concepto de "esta es la base de datos de producción" o "este PR va a desplegarse". Los permisos son tu única barrera.',
          '**Error 7: instalar todos los servidores de referencia desde el principio.** Más herramientas = prompt de sistema más grande = selección de herramientas más lenta y menos fiable. Empieza con `filesystem`. Añade los demás solo cuando tengas un flujo de trabajo que los necesite.',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Especificación de Model Context Protocol](https://modelcontextprotocol.io/) — Especificación oficial, esquema JSON-RPC, definiciones de transporte y ciclo de vida.',
          '[Repositorio GitHub modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Servidores de referencia (filesystem, sqlite, postgres, github, puppeteer, etc.) y su documentación de configuración.',
          '[Documentación del proyecto Goose](https://block.github.io/goose/) — Instalación del CLI, configuración del proveedor Ollama, sintaxis de configuración de servidores MCP.',
          '[Biblioteca de modelos Ollama](https://ollama.com/library) — Modelos locales disponibles, indicadores de soporte de tool calling y niveles de cuantización referenciados en esta guía.',
          '[Repositorio GitHub de Cline](https://github.com/cline/cline) — Implementación del cliente MCP para VS Code, panel de servidores MCP.',
          '[Documentación de Continue.dev](https://docs.continue.dev/) — Referencia del bloque de configuración `mcpServers` para el cliente Continue.dev.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: '¿Qué es MCP y por qué importa para la IA local?',
            a: 'Model Context Protocol (MCP) es un protocolo abierto JSON-RPC 2.0 que permite que un cliente (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) conecte un modelo de lenguaje a servidores de herramientas de manera uniforme. Importa para la IA local porque estandariza la capa que convierte un modelo de chat en un agente — escribe un servidor de herramientas una vez y úsalo bajo cualquier cliente y cualquier modelo, incluido un modelo Ollama local. Sin MCP, cada proyecto reinventa las herramientas de archivo/base de datos/navegador contra su propio cliente.',
          },
          {
            q: '¿MCP funciona sin Claude Desktop?',
            a: 'Sí. El protocolo es abierto y completamente independiente de Claude Desktop. En 2026, Goose, Cline, Continue.dev y LM Studio ofrecen implementaciones de cliente MCP que funcionan con modelos Ollama locales. Los servidores de referencia (filesystem, sqlite, postgres, puppeteer, github) funcionan sin cambios bajo cualquier cliente compatible.',
          },
          {
            q: '¿Qué modelos locales soportan MCP mejor?',
            a: 'En mayo de 2026, las opciones más fiables son Gemma 4 27B, GLM-5.1 32B, Qwen3 32B (o Qwen3-Coder 30B para trabajo orientado al código) y Llama 3.3 70B. Los cuatro tienen entrenamiento explícito de tool calling y emiten JSON de function calling limpio que los clientes MCP pueden enrutar. Los modelos de menos de 7B (y la mayoría de los modelos generales sin fine-tuning de tool calling) producen regularmente tool calls malformados.',
          },
          {
            q: '¿Es seguro MCP? ¿Puede el agente borrar mis archivos?',
            a: 'Puede si se lo permites. La seguridad proviene de cómo configuras los servidores, no del protocolo. El servidor filesystem solo opera dentro de las rutas que pones en la allow-list — limítalo a un directorio `agent-workspace` dedicado. El servidor de base de datos funciona en solo lectura cuando usas un rol solo de SELECT. Siempre requiere aprobación explícita para las herramientas de escritura, shell y PR; aprueba automáticamente solo las operaciones de lectura. El registro de auditoría te muestra exactamente lo que hizo el agente después del hecho.',
          },
          {
            q: '¿Puedo escribir mi propio servidor MCP?',
            a: 'Sí — y los SDKs lo hacen sencillo. Los SDKs oficiales de TypeScript y Python (`@modelcontextprotocol/sdk` y `mcp`) manejan la plomería JSON-RPC. Defines herramientas con sus JSON Schemas y una función handler, y el SDK las expone mediante stdio. Un servidor de propósito único (una o dos herramientas que envuelven una API interna) es un archivo de 50–100 líneas.',
          },
          {
            q: '¿Funciona MCP en Windows?',
            a: 'Sí. Ollama, Goose, Cline, Continue.dev y LM Studio todos funcionan en Windows. Los servidores MCP se ejecutan como subprocesos de Node.js o Python; ambos entornos de ejecución son completamente compatibles con Windows. El único detalle específico de la plataforma es el manejo de rutas — usa barras inclinadas hacia adelante en la configuración o escapa correctamente las barras invertidas. Por lo demás, la experiencia es idéntica a macOS y Linux.',
          },
          {
            q: '¿Cómo pongo en sandbox las tool calls de MCP?',
            a: 'Tres capas cubren la mayor parte del riesgo. Primero, limita cada servidor estrechamente a nivel de configuración: filesystem a un directorio, base de datos a un rol de solo lectura, GitHub a un PAT de grano fino para repositorios de prueba. Segundo, usa las reglas de aprobación por herramienta del cliente: aprobación automática para lecturas, aprobación requerida para escrituras. Tercero, mantén al agente dentro de un workspace compatible con `git stash` para que cualquier acción destructiva sea deshacible mediante git. Para tareas sensibles, ejecuta en un host sin acceso a la red excepto para los endpoints que los servidores necesitan explícitamente.',
          },
          {
            q: '¿Pueden los agentes MCP hacer peticiones HTTP?',
            a: 'Sí, a través de servidores específicos. El servidor de navegador (puppeteer o playwright) controla un Chromium real que hace las peticiones que el modelo navega. Varios servidores de terceros exponen herramientas `http_get`/`http_post` de forma más directa. Los servidores de filesystem y base de datos no hacen peticiones de red; operan solo en recursos locales.',
          },
          {
            q: '¿MCP funciona con Ollama de forma nativa o necesito un wrapper?',
            a: 'Ollama en sí mismo no habla MCP — sirve una API de chat compatible con OpenAI. Necesitas un cliente (Goose, Cline, Continue.dev, LM Studio) para hacer de puente entre la API de chat de Ollama y los servidores MCP. El cliente enruta los tool calls del modelo al servidor MCP correcto y devuelve los resultados a la conversación. Desde la perspectiva del usuario no hay configuración adicional más allá de instalar el cliente y apuntarlo a Ollama.',
          },
          {
            q: '¿Cuál es la diferencia entre MCP y function calling?',
            a: 'El function calling es que el LLM emite JSON estructurado con el nombre de una herramienta y sus argumentos — es una capacidad del modelo. MCP es el protocolo que permite que los servidores de herramientas y los clientes describan, descubran, invoquen y devuelvan esas herramientas entre procesos — es una capa de interoperabilidad. Cooperan: el cliente convierte las definiciones de herramientas de MCP al formato de function calling del modelo, el modelo emite un function call, el cliente mapea la llamada de vuelta a un servidor MCP y el servidor la ejecuta. Sin MCP puedes hacer function calling; reimplementas los manejadores de filesystem/base de datos/navegador por proyecto. Con MCP, los mismos servidores funcionan bajo cualquier cliente.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores modelos locales para tool calling en 2026](/es/power-local-llm/best-local-models-tool-calling-2026) — benchmarks comparativos para los modelos recomendados arriba (Gemma 4, GLM-5.1, Qwen3, Llama 3.3).',
          '[Los agentes locales autónomos realmente funcionan](/es/power-local-llm/autonomous-local-agents-actually-work) — una verificación de la realidad sobre lo que un agente MCP local puede y no puede hacer de forma fiable en una tarea de larga duración.',
          '[Continue.dev vs Cline vs Aider: el mejor agente de código local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — contexto de agente adyacente para trabajo orientado al código; Cline y Continue.dev también son clientes MCP.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — referencia de modelos para el panorama más amplio de pesos abiertos.',
          '[Reemplaza Zapier con agentes de IA locales](/es/power-local-llm/replace-zapier-with-local-ai-agents) — marco de automatización de flujos de trabajo para el mismo stack MCP.',
          '[Hub de Power Local LLM](/es/power-local-llm) — biblioteca completa de guías.',
        ],
      },
    },
  },
}
