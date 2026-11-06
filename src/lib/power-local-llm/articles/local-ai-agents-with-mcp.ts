// Power Local LLM — Connect Ollama to Databases and APIs With MCP: Local Agent Setup 2026
// Slug: local-ai-agents-with-mcp
// All 9 locales authored (en/de/fr/ja/zh/es/pt/ar/ko).

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-en.webp',
    title: 'Ollama MCP Setup 2026: Connect Local Models to Files, Databases and APIs',
    seoTitle: 'Ollama MCP Setup 2026: Connect Local AI to Files and APIs',
    intro:
      'Model Context Protocol (MCP) is the missing layer between a local Ollama model and the rest of your machine. With one config file and a tool-calling model, the same agent can query a Postgres database, read and write files in a sandboxed directory, drive a headless browser, and open GitHub pull requests — the model and the servers run on your laptop, and only the browser and GitHub servers touch the network. Ollama does not speak MCP itself, so this guide uses a client (Goose) to bridge the two, with install steps and config that match the current Goose docs, servers that are still maintained, and a security model that does not assume you trust the model.',
    metaDescription:
      'How to use MCP with Ollama: connect a local model to files, Postgres, a browser and GitHub with Goose. Working config, maintained servers, safe permissions.',
    twitterDescription:
      'Ollama does not speak MCP — a client does. Working Goose config, the maintained servers to install (and the archived ones to avoid), and a security model that does not trust the model.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'ollama mcp setup',
      'add mcp server to ollama',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) lets a local Ollama model call tools — read a file, run a SQL query, click a web link, open a pull request — through a standard JSON-RPC interface that any MCP-compatible client (Goose, Cline, Continue.dev, LM Studio) can speak. The protocol is open, the servers used here are open source, and nothing requires Claude Desktop or any cloud account. Run Ollama, install one MCP client, drop a `mcp.json` config naming the servers you want, and a tool-calling model (Gemma 4, GLM-4.7, Qwen3.6, Qwen3, Llama 3.3) becomes an agent that operates on your machine, with permissions you control. The trick is the security model: never auto-approve write tools, scope filesystem access to a single directory, and keep the database server in read-only mode by default.**',
    quickAnswerTop: {
      en: {
        question: 'Can I run AI agents locally with MCP and Ollama?',
        answer:
          'Yes — and the setup is now small enough to do in an afternoon. Run Ollama with a tool-calling model (Gemma 4, GLM-4.7, Qwen3.6, Qwen3, or Llama 3.3 70B), install an MCP-aware client (Goose is the most direct CLI; Cline, Continue.dev, and LM Studio are MCP clients too), and add MCP servers for the capabilities you want — `filesystem` for files, a Postgres server for databases, Playwright MCP for browser automation, GitHub\'s official server for repository management. Ollama itself has no MCP settings: you add servers in the client. The protocol is the same protocol Claude Desktop uses; the only difference is the model and the client. Stay safe by sandboxing the filesystem server to a single directory, keeping the database server read-only by default, and never auto-approving write or shell tools.',
        bullets: [
          'MCP is open and works fully local — no Claude Desktop, no Anthropic account, no cloud calls required.',
          'Ollama provides the model; an MCP client (Goose, Cline, Continue.dev, LM Studio) bridges Ollama to MCP servers via JSON-RPC.',
          'Four kinds of server cover most real workflows: filesystem, a database (Postgres), a browser (Playwright MCP), and GitHub. The old reference servers for SQLite, PostgreSQL, Puppeteer and GitHub are archived and no longer maintained.',
          'Tool-call reliability is a model property: Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, and Llama 3.3 70B handle MCP cleanly. Models under 7B regularly emit malformed tool calls.',
          'Security model: scope filesystem access to one directory, run database servers read-only, and gate every write or shell tool behind explicit approval.',
          'Cost: $0 in API spend, but tokens are consumed locally — agent loops are token-heavy, so use a 32K+ context model and a machine that can run it at usable speed.',
        ],
        updatedDate: '2026-11-02',
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
      { label: 'Database Servers (Postgres, SQLite)', anchor: '#database-server' },
      { label: 'Browser Server (Playwright)', anchor: '#browser-server' },
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
      'The slide deck below covers: how MCP turns a local Ollama model into an agent that queries databases, reads files, drives a browser, and opens pull requests; the four server types (filesystem, database, browser, GitHub) with setup difficulty and risk ratings; a 6-step Goose setup guide; a security model that does not trust the LLM; and a side-by-side comparison with Claude Desktop. Download the PDF as a local MCP agent reference card.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP is a JSON-RPC 2.0 protocol for tools.** A model (via a client) connects to one or more MCP servers; each server exposes Tools (callable functions), Resources (readable data), and Prompts (templates). The wire format is identical whether the client is Claude Desktop, Goose, Cline, Continue.dev, or LM Studio.',
          '**Ollama does not speak MCP directly — an MCP client wraps Ollama.** Goose (open source, originally from Block) is the simplest CLI with native Ollama support; Cline, Continue.dev, and LM Studio are MCP clients too. You add servers in the client, not in Ollama.',
          '**Four kinds of server cover most use cases:** `filesystem` (read/write a sandboxed directory, still a maintained reference server), a database server (Postgres in restricted mode), `@playwright/mcp` (drive a browser), and GitHub\'s official `github-mcp-server` (repo and PR management with a personal access token). The reference servers for SQLite, PostgreSQL, Puppeteer and GitHub have been archived and receive no fixes.',
          '**Tool-call reliability scales with model size and training.** Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, and Llama 3.3 70B handle MCP cleanly at Q4_K_M. Models under 7B regularly emit malformed tool calls and stall the loop.',
          '**The security model assumes the model is untrusted.** Sandbox the filesystem server to a single directory, run the database server with a read-only role, never auto-approve `execute_command` or `write_file` tools, and review the audit log after long sessions.',
          '**Local MCP vs Claude Desktop:** identical protocol, identical server ecosystem. The local stack trades the cloud model for an offline one — privacy, no per-token cost, and no rate limits, at the cost of a smarter model and you owning the security configuration.',
          '**Cost is $0 in API fees but real in tokens.** Agent loops can consume 30K–80K tokens for a single multi-step task. Use a 32K-context model minimum; 128K is comfortable.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**Protocol:** JSON-RPC 2.0 over stdio (local subprocess) or Streamable HTTP (remote). The older HTTP+SSE transport is deprecated. Local agents use stdio almost exclusively. The current specification revision is 2026-07-28.',
          '**Origin:** created by Anthropic as an open specification (modelcontextprotocol.io). Only a few reference servers are still maintained in `modelcontextprotocol/servers` (filesystem, git, fetch, memory, and others); SQLite, PostgreSQL, Puppeteer and GitHub moved to `servers-archived`. Vendors now ship their own servers.',
          '**Local clients:** Goose (open source, repo `aaif-goose/goose`), Cline (VS Code extension), Continue.dev (VS Code/JetBrains), LM Studio (desktop app), plus several CLI tools.',
          '**Compatible Ollama models:** any model with native tool-call training, for example Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Server transport defaults:** stdio for local processes; Streamable HTTP only when you need to share a server across machines or agents.',
          '**Configuration lives in the client:** Goose reads an `extensions` block in `~/.config/goose/config.yaml` (or `goose configure`); Cline and Continue.dev have their own MCP settings. The fields are the same idea everywhere: server name, command, args, env vars.',
          '**No Claude Desktop required.** The protocol is open and independent of Claude Desktop; the servers used here are open source (check each licence) and run against any compliant client.',
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
          '**"Open the Hacker News front page, find the top three AI stories, summarise them, and append to my reading list."** — `playwright` server drives a browser, the model extracts and summarises, `filesystem` appends.',
          '**"Open a draft PR titled `chore: bump deps` against my fork and link the failing CI run."** — the `github` server creates the PR, fetches the run, and writes the link in the description.',
          '**"Look at the last 100 rows of `events.db` and tell me which user IDs are responsible for the new error spike."** — a database server queries a copy of the data; the model reasons; you read the answer in the chat panel.',
          'Each of these is a sentence-to-action workflow that previously required either a cloud model with hosted tools or a hand-rolled script. MCP is the layer that lets you reuse the same servers across clients and the same model across servers.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'How the Four Most-Used MCP Servers Compare',
        content:
          'The servers below cover the long tail of "I want my local model to actually do something". All are open source and run as local subprocesses (or a Docker container) spawned by your MCP client. Check the maintenance status before you install one.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Start with the filesystem server (5 minutes, low risk), add a database server for data work, add a browser server only when you need it, and bring in GitHub once you trust the model on your machine.',
          },
          {
            type: 'plain-terms',
            text: 'Four servers cover most of what you will want a local agent to do. The filesystem server reads and writes files in a folder you choose. A database server runs queries against Postgres. The browser server drives a real browser window so the model can read pages that need JavaScript. The GitHub server opens issues and PRs against your repos. Most start with one command (npx, uvx or Docker) and run on your own machine, and none of them call out to the internet unless they need to: the browser and GitHub servers do, the filesystem and database servers do not.',
          },
        ],
        columns: ['MCP Server', 'What It Enables', 'Setup Difficulty', 'Risk Level', 'Best For'],
        rows: [
          { 'MCP Server': 'Filesystem (reference)', 'What It Enables': 'Read and write files inside a sandboxed directory', 'Setup Difficulty': 'Easy (one path to allow-list)', 'Risk Level': 'Medium — scope it tightly', 'Best For': 'Personal automation, note-taking, repo summarisation' },
          { 'MCP Server': 'SQLite (archived)', 'What It Enables': 'Query a local SQLite database file', 'Setup Difficulty': 'Easy, but no longer maintained', 'Risk Level': 'Medium — no fixes, use a copy of the file', 'Best For': 'Throwaway data exploration only' },
          { 'MCP Server': 'Postgres (postgres-mcp)', 'What It Enables': 'Query Postgres in restricted (read-only) mode', 'Setup Difficulty': 'Medium (role + URI)', 'Risk Level': 'Medium — restricted mode and a read-only role', 'Best For': 'Data exploration, reporting, BI prototypes' },
          { 'MCP Server': 'Playwright (@playwright/mcp)', 'What It Enables': 'Drive a browser through accessibility snapshots for browsing, scraping, form-filling', 'Setup Difficulty': 'Medium (browser binaries, latency)', 'Risk Level': 'High — can submit forms, click anything', 'Best For': 'Research, scraping, regression testing' },
          { 'MCP Server': 'GitHub (official)', 'What It Enables': 'List repos, read files, open issues and PRs', 'Setup Difficulty': 'Medium (Docker + PAT in env var)', 'Risk Level': 'Medium — scope token to specific repos', 'Best For': 'Dev workflows, triage, PR drafting' },
          { 'MCP Server': 'Custom', 'What It Enables': 'Anything you can express as JSON-RPC tools', 'Setup Difficulty': 'Hard (write your own server)', 'Risk Level': 'Variable', 'Best For': 'Internal APIs, niche systems, glue code' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'The reference servers for SQLite, PostgreSQL, Puppeteer and GitHub were moved to the `servers-archived` repository and are no longer maintained. The npm packages for PostgreSQL, Puppeteer and GitHub are marked "no longer supported", and the SQLite server (a Python package, last released in April 2025) gets no fixes either. Use the maintained servers in this table, and read the code of any server that needs credentials.',
          },
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
          '**The model sees one flat tool list.** From the model\'s perspective there are no servers — just a list of tool names like `filesystem.read_file`, `playwright.browser_navigate`, `github.create_pull_request`. The client handles routing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The architecture is identical to Claude Desktop\'s. The differences are the model (a local Ollama model instead of Claude) and the client (Goose/Cline/Continue.dev/LM Studio instead of Claude Desktop). The MCP servers are the same servers — you can run the filesystem server underneath Claude Desktop today and it will still run unchanged underneath Goose tomorrow.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-en.svg',
        imageCaption:
          'MCP architecture diagram: Ollama serves the local model, an MCP client (Goose, Cline, Continue.dev, or LM Studio) bridges to MCP servers over stdio using JSON-RPC 2.0, and four kinds of server — filesystem, database, browser, and GitHub — expose the actual tools.',
      },
      setup: {
        id: 'setup',
        title: 'Setup: Ollama + Goose in 15 Minutes',
        content:
          '**Goose is the simplest path to a working local MCP agent.** It is an open-source agent (originally from Block, now developed at `aaif-goose/goose`) with a CLI and native [Ollama](https://ollama.com/) support, an interactive chat surface, and one config file for all your [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) servers. Continue.dev, Cline, and LM Studio work too — Goose has the lowest setup tax for a first run.',
        items: [
          '**Step 1 — install Ollama.** Download from [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). Confirm the service is running with `curl http://127.0.0.1:11434/api/tags`.',
          '**Step 2 — pull a tool-calling model.** Pick from Gemma 4 31B (`gemma4:31b`), GLM-4.7 Flash (`glm-4.7-flash`), Qwen3.6 27B (`qwen3.6:27b`), Qwen3 32B (`qwen3:32b`), or Llama 3.3 70B (`llama3.3:70b`). 24 GB VRAM handles 26B–32B at Q4_K_M comfortably; a Mac with 32 GB unified memory fits them with roughly 4–6 GB left for context (macOS needs 8 GB).',
          '**Step 3 — install Goose.** On macOS or Linux run `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash` (or `brew install block-goose-cli`). On Windows use the PowerShell installer from the Goose docs, or WSL. The CLI installs as `goose`.',
          '**Step 4 — configure Ollama as the provider.** Run `goose configure`, pick `ollama` as the provider, set the model to the one you pulled, and set the host to `http://127.0.0.1:11434` (blank also means localhost:11434). Goose writes this to `~/.config/goose/config.yaml`. Ollama\'s default context window can be small (the Goose docs mention 4096 tokens), which can make Goose ignore its extensions — start Ollama with `OLLAMA_CONTEXT_LENGTH=32768` (or higher).',
          '**Step 5 — add the filesystem MCP server.** Run `goose configure`, choose Add Extension, then Command-line Extension, or add an `extensions` block to `~/.config/goose/config.yaml` (example below). For a one-off test, `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` enables it for that session only. Start `goose session` and ask it to list files in your test directory. The first turn confirms the server is wired up.',
          '**Step 6 — verify with a real task.** Try `goose session` and ask "Make a list of every Markdown file in `notes/`, with title and word count, and write the result to `notes/index.md`." If the agent reads, summarises, and writes back, the loop works.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'If you already use Cline or Continue.dev, skip Goose and use those — both are MCP clients. Each has its own MCP settings (check its docs for the exact file); the model and the servers are the same, only the host application and its config format change.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-en.svg',
        imageCaption:
          'Six-step Ollama and Goose setup flow: install Ollama, pull a tool-calling model like gemma4:31b, install Goose with the official script, configure the provider, add the filesystem MCP server, and verify with a real task in about 15 minutes.',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem Server: Read and Write a Sandboxed Directory',
        content:
          '**The filesystem server is the first one to install and the easiest to scope safely.** It exposes `read_file`, `write_file`, `list_directory`, `move_file`, `search_files`, and `create_directory` — all restricted to one or more allow-listed paths.',
        items: [
          '**Install:** the reference server is `@modelcontextprotocol/server-filesystem`, run via `npx -y` (no global install needed; Node.js required). It is one of the reference servers that is still maintained. Goose, Cline, and Continue.dev all spawn it from their config.',
          '**Allow-list paths:** the server takes one or more directory arguments and refuses operations outside them. Always pass an explicit, narrow path — never `~` or `/`.',
          '**Tools exposed:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (line-based replacements), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. The model sees this as `filesystem.read_file` and so on.',
          '**Quality-of-life:** `directory_tree` returns a JSON tree; ideal for the model to orient itself before reading specific files. `search_files` does grep-like recursive search.',
          '**Risk surface:** the server respects the allow-list, but inside that list it has full read/write. Treat the allow-list as the only barrier and pick a dedicated workspace directory rather than your home folder.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
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
        title: 'Database Servers: Query Postgres (and SQLite) Safely',
        content:
          '**A database server turns the model into a junior analyst that can answer questions backed by real data — provided you keep it read-only.** The original SQLite and PostgreSQL reference servers are archived, so use a maintained Postgres server and treat SQLite with care.',
        items: [
          '**Postgres: `postgres-mcp` (Crystal DBA, MIT licence)** is the option with a read-only mode (the latest PyPI release is from May 2025, so check the repository\'s activity before you rely on it). Run it with `uvx postgres-mcp --access-mode=restricted` (or `pipx install postgres-mcp`, or its Docker image) and pass the connection URI in the `DATABASE_URI` environment variable. Restricted mode allows read-only transactions and a query time limit; unrestricted mode is for development only.',
          '**Use a dedicated read-only role as well.** Restricted mode is one barrier, the database role is another. Create an `agent_ro` role with SELECT-only grants and use that role\'s connection string.',
          '**SQLite: the reference server is archived.** It is the Python package `mcp-server-sqlite` (not an npm package; last release April 2025), it may still run, but it gets no fixes. Point it only at a copy of the file, never at your only copy, or load the data into Postgres instead. Read the code of any community SQLite server before you give it a file.',
          '**Schema awareness:** ask the agent "list the tables and describe the most-used five" before asking analytical questions — the model is much more accurate when it has inspected the schema than when it guesses column names.',
          '**Cost:** queries hit your database directly. A poorly-formed `SELECT *` from a 100 M row table is the same accident here as it would be from a human — keep the role on a separate connection pool with a statement timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
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
        title: 'Browser Server: Drive a Browser With Playwright MCP',
        content:
          '**The browser server is the most powerful and the most dangerous of the four.** It launches a real browser and exposes navigation, clicks, form-fills, and screenshots — i.e. it can do anything you can do in a browser, including submitting forms.',
        items: [
          '**Which server:** use Microsoft\'s `@playwright/mcp` (`npx @playwright/mcp@latest`). The old `@modelcontextprotocol/server-puppeteer` is marked "no longer supported", and no `@modelcontextprotocol/server-playwright` package exists on npm.',
          '**Tools exposed:** `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_evaluate` (run JavaScript), `browser_take_screenshot`, `browser_tabs`, `browser_wait_for`. The model reads the page through `browser_snapshot` (an accessibility snapshot, which Playwright MCP recommends over screenshots for taking actions) and uses screenshots only to look.',
          '**Latency:** real browser sessions take 1–5 seconds per action. A multi-step browse easily consumes 30–60 seconds and tens of thousands of tokens because page content is large. Use a 32K+ context window.',
          '**Element references:** the model clicks elements by the references in the snapshot. Smaller models pick the wrong one often; a 27B+ tool-calling model handles common patterns reliably. Keep tasks scoped — "extract the title and first paragraph of this URL" is much more reliable than "navigate the site and find the contact page".',
          '**The right use cases:** research (open the page, summarise it, append to notes), regression testing (navigate, click, screenshot), and form-filling on pages you control. The wrong use cases: anything where a misclick on the live web has consequences.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Never give the browser server credentials. If you need an authenticated session, hand the agent a pre-authenticated browser profile, and never let it navigate to high-impact sites (banking, email, cloud consoles, payment forms). The model has no judgment about what a button does — it sees text and clicks. Treat it like an intern with no context and no recourse.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub Server: Repos, Issues, and PRs From a Local Model',
        content:
          '**The GitHub server turns natural-language repo work into API calls.** It is the simplest of the four to configure and the easiest to scope tightly via personal access token (PAT) permissions.',
        items: [
          '**Install:** use GitHub\'s official `github/github-mcp-server`, run from its Docker image (`ghcr.io/github/github-mcp-server`) with a PAT in the `GITHUB_PERSONAL_ACCESS_TOKEN` env var. The old `@modelcontextprotocol/server-github` npm package is marked "no longer supported"; do not use it for new setups.',
          '**Tools exposed:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, plus many more. The full surface is large; most tasks use 5–10 tools.',
          '**Scope the PAT.** Use a fine-grained PAT scoped to specific repos with the minimum permissions required (Read for browsing, Write for PR/issue creation). Do not use a classic PAT with `repo` for an experimental agent.',
          '**Real workflows:** triage ("read the last 20 open issues, group them, draft labels"), drafting ("read the README and open a PR fixing typos"), reporting ("which PRs are stale this week").',
          '**Risk surface:** the agent can create issues and PRs, comment on them, and (with write permissions) push commits. Disable merge tools unless you trust both the model and the workflow — a misclicked merge in a fine-grained-PAT repo is recoverable, but only if you notice quickly.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
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
          { 'Layer': 'Model', 'Claude Desktop': 'Claude (Anthropic, cloud)', 'Local Ollama + Goose': 'Gemma 4, GLM-4.7, Qwen3, or Llama 3.3 (local)' },
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
          '**Gemma 4 31B (`gemma4:31b`)** — Google\'s tool-call training is best-in-class for the size. Fits in 32 GB unified memory (about 4–6 GB left for context) or 24 GB VRAM at Q4_K_M. Good general reasoning; somewhat conservative on chained tool calls.',
          '**GLM-4.7 Flash (`glm-4.7-flash`)** — Zhipu\'s model has very strong tool-call reliability and a 128K context window out of the box. Slightly heavier than Gemma 4; fits comfortably on a 24 GB GPU.',
          '**Qwen3.6 27B (`qwen3.6:27b`)** — the newer Qwen option on Ollama (about 18–19 GB, 256K context, tool calling supported). **Qwen3 32B (`qwen3:32b`)** — well-rounded; the dense 32B handles MCP cleanly and is happy in a long agent loop. **Qwen3-Coder 30B (`qwen3-coder:30b`)** is the best pick if your agent work is code-shaped.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — the highest ceiling but the heaviest. 64 GB+ unified memory or 2× 24 GB GPUs at Q4_K_M. Use only if your hardware accommodates it; the smaller models are usually enough.',
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
          '**Mistake 8: installing archived reference servers from old tutorials.** The npm packages `@modelcontextprotocol/server-postgres`, `-puppeteer` and `-github` are marked "no longer supported" and the SQLite server is archived. Some older guides also name npm packages that do not exist (`server-sqlite`, `server-playwright`). Use the maintained servers named above.',
          '**Mistake 9: putting MCP config into Ollama.** Ollama has no MCP settings. Servers are configured in the client (Goose `extensions`, Cline or Continue.dev MCP settings).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Model Context Protocol Specification](https://modelcontextprotocol.io/) — Official spec, JSON-RPC schema, transport and lifecycle definitions, including the 2026-07-28 changelog.',
          '[modelcontextprotocol/servers GitHub repository](https://github.com/modelcontextprotocol/servers) — The maintained reference servers (filesystem, git, fetch, memory and others) and the list of archived servers.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — GitHub\'s official MCP server, Docker and binary setup.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Playwright MCP server and its browser tools.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — Postgres MCP server with restricted (read-only) access mode.',
          '[Goose Documentation](https://goose-docs.ai/docs/getting-started/installation) — CLI install, Ollama provider configuration, extension (MCP server) config syntax.',
          '[Ollama Model Library](https://ollama.com/library) — Available local models, tool-call support flags, and quantization levels referenced in this guide.',
          '[Cline GitHub Repository](https://github.com/cline/cline) — VS Code MCP client implementation, MCP servers panel.',
          '[Continue.dev Documentation](https://docs.continue.dev/) — `mcpServers` config block reference for the Continue.dev client.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'What is MCP and why does it matter for local AI?',
            a: 'Model Context Protocol (MCP) is an open JSON-RPC 2.0 protocol that lets a client (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) connect a language model to tool servers in a uniform way. It matters for local AI because it standardises the layer that turns a chat model into an agent — write a tool server once, use it under any client and any model, including a local Ollama model. Without MCP, every project reinvents file/database/browser tooling against its own client.',
          },
          {
            q: 'Does MCP work without Claude Desktop?',
            a: 'Yes. The protocol is open and entirely independent of Claude Desktop. Goose, Cline, Continue.dev, and LM Studio all ship MCP client implementations that work with local Ollama models. The maintained servers (filesystem, Postgres, Playwright, GitHub) run unchanged under any compliant client.',
          },
          {
            q: 'Which local models support MCP best?',
            a: 'The most reliable picks are Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B or Qwen3 32B (or Qwen3-Coder 30B for code-shaped work), and Llama 3.3 70B. All have explicit tool-call training and emit clean function-calling JSON that MCP clients can route. Models under 7B (and most general-purpose models without tool-call fine-tuning) regularly produce malformed tool calls.',
          },
          {
            q: 'Is MCP safe — can the agent delete my files?',
            a: 'It can if you let it. Safety comes from how you configure servers, not from the protocol. The filesystem server only operates inside paths you allow-list — scope it to a dedicated `agent-workspace` directory. The database server runs read-only when you use restricted mode and a SELECT-only role. Always require explicit approval for write, shell, and PR tools; auto-approve only read operations. The audit log shows you exactly what the agent did after the fact.',
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
            a: 'Yes, through specific servers. The browser server (Playwright MCP) drives a real browser that makes whatever requests the model navigates to. Several third-party servers expose `http_get`/`http_post` tools more directly. The filesystem and database servers do not make network requests; they operate only on local resources.',
          },
          {
            q: 'Does MCP work with Ollama natively or do I need a wrapper?',
            a: 'Ollama itself does not speak MCP — it serves an OpenAI-compatible chat API. You need a client (Goose, Cline, Continue.dev, LM Studio) to bridge Ollama\'s chat API to MCP servers. The client routes the model\'s tool calls to the right MCP server and feeds results back into the conversation. From the user\'s perspective there is no extra setup beyond installing the client and pointing it at Ollama.',
          },
          {
            q: 'What is the difference between MCP and function calling?',
            a: 'Function calling is the LLM emitting structured JSON that names a tool and its arguments — it is a model capability. MCP is the protocol that lets tool servers and clients describe, discover, invoke, and return those tools across processes — it is an interop layer. They cooperate: the client converts MCP tool definitions into the model\'s function-calling format, the model emits a function call, the client maps the call back to an MCP server, and the server runs it. Without MCP you can still do function calling; you reimplement filesystem/database/browser handlers per project. With MCP, the same servers work under any client.',
          },
          {
            q: 'How do I add an MCP server to Ollama?',
            a: 'You do not add it to Ollama — Ollama has no MCP settings. You add the server in the client that sits in front of Ollama. In Goose, run `goose configure`, choose Add Extension, then Command-line Extension, and enter the server command (for example `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`); for a quick test use `goose session --with-extension "<command>"`. Cline and Continue.dev have their own MCP settings. Make sure Ollama runs a tool-calling model with a context window of at least 32K.',
          },
          {
            q: 'Can I use Claude Desktop with Ollama models?',
            a: 'Not as a direct setup. Claude Desktop talks to Anthropic\'s cloud models, so it does not run an Ollama model. What carries over from Claude Desktop is the MCP server ecosystem: the same servers work with an MCP client that does support Ollama, such as Goose, Cline, Continue.dev or LM Studio. That is the local equivalent described in this guide.',
          },
          {
            q: 'Which official MCP servers are archived, and what replaces them?',
            a: 'The reference servers for SQLite, PostgreSQL, Puppeteer and GitHub (among others) were moved to the `servers-archived` repository and are no longer maintained; their npm packages (where they exist) are marked "no longer supported" and get no security fixes. Maintained replacements: GitHub\'s official `github/github-mcp-server` for GitHub, Microsoft\'s `@playwright/mcp` for browser automation, and `postgres-mcp` (Crystal DBA) in restricted mode for Postgres. For SQLite there is no maintained official server, so use a copy of the file with the archived server or load the data into Postgres. The filesystem server remains an actively maintained reference server.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Best Local Models for Tool Calling in 2026](/power-local-llm/best-local-models-tool-calling-2026) — head-to-head benchmarks for the models recommended above (Gemma 4, GLM-4.7, Qwen3, Llama 3.3).',
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
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-de.webp',
    title: 'Ollama MCP einrichten 2026: Lokale Modelle mit Dateien, Datenbanken und APIs verbinden',
    seoTitle: 'Ollama MCP einrichten 2026: Lokale KI mit Dateien und APIs',
    intro:
      'Model Context Protocol (MCP) ist die fehlende Schicht zwischen einem lokalen Ollama-Modell und dem Rest Ihres Rechners. Mit einer einzigen Konfigurationsdatei und einem Tool-Calling-Modell kann derselbe Agent eine Postgres-Datenbank abfragen, Dateien in einem isolierten Verzeichnis lesen und schreiben, einen Headless-Browser steuern und GitHub Pull Requests öffnen — das Modell und die Server laufen auf Ihrem Laptop, nur der Browser- und der GitHub-Server greifen auf das Netzwerk zu. Ollama spricht MCP nicht selbst, deshalb nutzt dieser Leitfaden einen Client (Goose) als Brücke: mit Installationsschritten und Konfiguration, die zur aktuellen Goose-Dokumentation passen, mit Servern, die noch gepflegt werden, und mit einem Sicherheitsmodell, das nicht davon ausgeht, dass Sie dem Modell vertrauen.',
    metaDescription:
      'MCP mit Ollama nutzen: Lokales Modell per Goose mit Dateien, Postgres, Browser und GitHub verbinden. Config, gepflegte Server, sichere Rechte.',
    twitterDescription:
      'Ollama spricht kein MCP — ein Client schon. Funktionierende Goose-Config, die gepflegten Server zum Installieren (und die archivierten, die Sie meiden sollten) und ein Sicherheitsmodell, das dem Modell nicht vertraut.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'ollama mcp einrichten',
      'mcp server zu ollama hinzufügen',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) lässt ein lokales Ollama-Modell Tools aufrufen — eine Datei lesen, eine SQL-Abfrage ausführen, einen Web-Link anklicken, einen Pull Request öffnen — über eine standardisierte JSON-RPC-Schnittstelle, die jeder MCP-kompatible Client (Goose, Cline, Continue.dev, LM Studio) versteht. Das Protokoll ist offen, die hier verwendeten Server sind Open Source, und weder Claude Desktop noch ein Cloud-Konto ist erforderlich. Starten Sie Ollama, installieren Sie einen MCP-Client, legen Sie eine `mcp.json`-Konfiguration an, die die gewünschten Server benennt, und ein Tool-Calling-Modell (Gemma 4, GLM-4.7, Qwen3.6, Qwen3, Llama 3.3) wird zu einem Agenten, der auf Ihrer Maschine arbeitet — mit Berechtigungen, die Sie kontrollieren. Der Trick ist das Sicherheitsmodell: Genehmigen Sie Schreibwerkzeuge niemals automatisch, beschränken Sie den Dateisystemzugriff auf ein einziges Verzeichnis und halten Sie den Datenbankserver standardmäßig im Read-only-Modus.**',
    quickAnswerTop: {
      de: {
        question: 'Kann ich KI-Agenten lokal mit MCP und Ollama betreiben?',
        answer:
          'Ja — und das Setup ist mittlerweile klein genug für einen Nachmittag. Starten Sie Ollama mit einem Tool-Calling-Modell (Gemma 4, GLM-4.7, Qwen3.6, Qwen3 oder Llama 3.3 70B), installieren Sie einen MCP-fähigen Client (Goose ist die direkteste CLI; Cline, Continue.dev und LM Studio sind ebenfalls MCP-Clients) und ergänzen Sie MCP-Server für die gewünschten Fähigkeiten — `filesystem` für Dateien, einen Postgres-Server für Datenbanken, Playwright MCP für Browser-Automatisierung, den offiziellen GitHub-Server für die Repository-Verwaltung. Ollama selbst hat keine MCP-Einstellungen: Die Server fügen Sie im Client hinzu. Es ist dasselbe Protokoll, das auch Claude Desktop nutzt; der einzige Unterschied sind das Modell und der Client. Bleiben Sie sicher, indem Sie den Filesystem-Server auf ein einziges Verzeichnis beschränken, den Datenbankserver standardmäßig read-only halten und Schreib- oder Shell-Tools niemals automatisch genehmigen.',
        bullets: [
          'MCP ist offen und funktioniert vollständig lokal — kein Claude Desktop, kein Anthropic-Konto, keine Cloud-Aufrufe nötig.',
          'Ollama liefert das Modell; ein MCP-Client (Goose, Cline, Continue.dev, LM Studio) verbindet Ollama mit MCP-Servern über JSON-RPC.',
          'Vier Arten von Servern decken die meisten realen Workflows ab: Filesystem, eine Datenbank (Postgres), ein Browser (Playwright MCP) und GitHub. Die alten Referenz-Server für SQLite, PostgreSQL, Puppeteer und GitHub sind archiviert und werden nicht mehr gepflegt.',
          'Tool-Call-Zuverlässigkeit ist eine Eigenschaft des Modells: Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B und Llama 3.3 70B verarbeiten MCP sauber. Modelle unter 7B geben regelmäßig fehlerhafte Tool-Calls aus.',
          'Sicherheitsmodell: Filesystem-Zugriff auf ein Verzeichnis beschränken, Datenbankserver read-only laufen lassen und jeden Schreib- oder Shell-Tool-Aufruf hinter einer expliziten Freigabe halten.',
          'Kosten: 0 € an API-Ausgaben, aber Tokens werden lokal verbraucht — Agent-Loops sind Token-intensiv, nutzen Sie also ein Modell mit 32K+ Context und eine Maschine, die es in brauchbarer Geschwindigkeit ausführen kann.',
        ],
        updatedDate: '2026-11-02',
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
      { label: 'Datenbank-Server (Postgres, SQLite)', anchor: '#database-server' },
      { label: 'Browser-Server (Playwright)', anchor: '#browser-server' },
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
      'Die Präsentation behandelt: wie MCP ein lokales Ollama-Modell zu einem Agenten macht, der Datenbanken abfragt, Dateien liest, einen Browser steuert und Pull Requests öffnet; die vier Server-Arten (Filesystem, Datenbank, Browser, GitHub) mit Setup-Aufwand und Risikobewertung; ein 6-Schritte-Goose-Setup; ein Sicherheitsmodell, das dem LLM nicht vertraut; und ein direkter Vergleich mit Claude Desktop. Als lokales MCP-Agenten-Referenzblatt als PDF herunterladen.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP ist ein JSON-RPC-2.0-Protokoll für Tools.** Ein Modell (über einen Client) verbindet sich mit einem oder mehreren MCP-Servern; jeder Server stellt Tools (aufrufbare Funktionen), Resources (lesbare Daten) und Prompts (Templates) bereit. Das Wire-Format ist identisch, ob der Client nun Claude Desktop, Goose, Cline, Continue.dev oder LM Studio ist.',
          '**Ollama spricht MCP nicht direkt — ein MCP-Client umhüllt Ollama.** Goose (Open Source, ursprünglich von Block) ist die einfachste CLI mit nativer Ollama-Unterstützung; Cline, Continue.dev und LM Studio sind ebenfalls MCP-Clients. Die Server fügen Sie im Client hinzu, nicht in Ollama.',
          '**Vier Arten von Servern decken die meisten Anwendungsfälle ab:** `filesystem` (Lesen/Schreiben in einem isolierten Verzeichnis, weiterhin ein gepflegter Referenz-Server), ein Datenbank-Server (Postgres im Restricted-Modus), `@playwright/mcp` (steuert einen Browser) und der offizielle GitHub-`github-mcp-server` (Repo- und PR-Verwaltung mit einem Personal Access Token). Die Referenz-Server für SQLite, PostgreSQL, Puppeteer und GitHub wurden archiviert und erhalten keine Korrekturen mehr.',
          '**Tool-Call-Zuverlässigkeit skaliert mit Modellgröße und Training.** Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B und Llama 3.3 70B verarbeiten MCP sauber bei Q4_K_M. Modelle unter 7B geben regelmäßig fehlerhafte Tool-Calls aus und blockieren den Loop.',
          '**Das Sicherheitsmodell setzt voraus, dass das Modell nicht vertrauenswürdig ist.** Beschränken Sie den Filesystem-Server auf ein einziges Verzeichnis, betreiben Sie den Datenbankserver mit einer read-only-Rolle, genehmigen Sie `execute_command` oder `write_file` niemals automatisch und prüfen Sie das Audit-Log nach langen Sessions.',
          '**Lokales MCP vs. Claude Desktop:** identisches Protokoll, identisches Server-Ökosystem. Der lokale Stack tauscht das Cloud-Modell gegen ein Offline-Modell — Privatsphäre, keine Token-Kosten und keine Rate-Limits, gegen ein weniger leistungsfähiges Modell und die Verantwortung für die Sicherheitskonfiguration.',
          '**Die Kosten betragen 0 € an API-Gebühren, sind aber bei Tokens real.** Agent-Loops können 30K–80K Tokens für eine einzige Multi-Step-Aufgabe verbrauchen. Mindestens ein Modell mit 32K Context; 128K ist komfortabel.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnelle Fakten',
        items: [
          '**Protokoll:** JSON-RPC 2.0 über stdio (lokaler Subprozess) oder Streamable HTTP (remote). Der ältere HTTP+SSE-Transport ist veraltet. Lokale Agenten nutzen fast ausschließlich stdio. Die aktuelle Spezifikationsrevision ist 2026-07-28.',
          '**Ursprung:** von Anthropic als offene Spezifikation geschaffen (modelcontextprotocol.io). In `modelcontextprotocol/servers` werden nur noch wenige Referenz-Server gepflegt (filesystem, git, fetch, memory und weitere); SQLite, PostgreSQL, Puppeteer und GitHub wurden nach `servers-archived` verschoben. Anbieter liefern mittlerweile eigene Server.',
          '**Lokale Clients:** Goose (Open Source, Repo `aaif-goose/goose`), Cline (VS-Code-Erweiterung), Continue.dev (VS Code/JetBrains), LM Studio (Desktop-App), plus mehrere CLI-Tools.',
          '**Kompatible Ollama-Modelle:** jedes Modell mit nativem Tool-Call-Training, zum Beispiel Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Standard-Transports:** stdio für lokale Prozesse; Streamable HTTP nur, wenn ein Server über Maschinen oder Agenten hinweg geteilt werden muss.',
          '**Die Konfiguration liegt im Client:** Goose liest einen `extensions`-Block in `~/.config/goose/config.yaml` (oder `goose configure`); Cline und Continue.dev haben eigene MCP-Einstellungen. Die Felder folgen überall derselben Idee: Servername, Command, Args, Env-Vars.',
          '**Kein Claude Desktop nötig.** Das Protokoll ist offen und unabhängig von Claude Desktop; die hier verwendeten Server sind Open Source (prüfen Sie jeweils die Lizenz) und laufen gegen jeden konformen Client.',
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
          '**„Öffne die Hacker-News-Startseite, finde die drei wichtigsten KI-Stories, fasse sie zusammen und füge sie meiner Leseliste hinzu."** — der `playwright`-Server steuert einen Browser, das Modell extrahiert und fasst zusammen, `filesystem` hängt an.',
          '**„Öffne einen Draft-PR mit dem Titel `chore: bump deps` gegen meinen Fork und verlinke den fehlgeschlagenen CI-Run."** — der `github`-Server erstellt den PR, holt den Run und schreibt den Link in die Beschreibung.',
          '**„Schau dir die letzten 100 Zeilen von `events.db` an und sag mir, welche User-IDs für den neuen Error-Spike verantwortlich sind."** — ein Datenbank-Server fragt eine Kopie der Daten ab; das Modell schließt daraus; Sie lesen die Antwort im Chat-Panel.',
          'Jeder dieser Vorgänge ist ein Satz-zu-Aktion-Workflow, der zuvor entweder ein Cloud-Modell mit gehosteten Tools oder ein selbst geschriebenes Skript erforderte. MCP ist die Schicht, die es Ihnen ermöglicht, dieselben Server über Clients hinweg und dasselbe Modell über Server hinweg wiederzuverwenden.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Wie die vier am häufigsten verwendeten MCP-Server abschneiden',
        content:
          'Die unten aufgeführten Server decken den Long-Tail von „Ich möchte, dass mein lokales Modell tatsächlich etwas tut" ab. Alle sind Open Source und laufen als lokale Subprozesse (oder als Docker-Container), die von Ihrem MCP-Client gestartet werden. Prüfen Sie den Wartungsstatus, bevor Sie einen Server installieren.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Beginnen Sie mit dem Filesystem-Server (5 Minuten, geringes Risiko), fügen Sie einen Datenbank-Server für Datenarbeit hinzu, ergänzen Sie einen Browser-Server nur bei Bedarf und nehmen Sie GitHub erst dazu, wenn Sie dem Modell auf Ihrer Maschine vertrauen.',
          },
          {
            type: 'plain-terms',
            text: 'Vier Server decken das meiste ab, was Sie von einem lokalen Agenten erwarten. Der Filesystem-Server liest und schreibt Dateien in einem von Ihnen gewählten Ordner. Ein Datenbank-Server führt Abfragen gegen Postgres aus. Der Browser-Server steuert ein echtes Browserfenster, sodass das Modell Seiten lesen kann, die JavaScript benötigen. Der GitHub-Server öffnet Issues und PRs gegen Ihre Repos. Die meisten starten mit einem Befehl (npx, uvx oder Docker) und laufen auf Ihrer eigenen Maschine, und keiner ruft das Internet auf, sofern er es nicht muss: Der Browser- und der GitHub-Server tun es, der Filesystem- und der Datenbank-Server nicht.',
          },
        ],
        columns: ['MCP-Server', 'Was er ermöglicht', 'Setup-Aufwand', 'Risiko', 'Geeignet für'],
        rows: [
          { 'MCP-Server': 'Filesystem (Referenz)', 'Was er ermöglicht': 'Lesen und Schreiben von Dateien in einem isolierten Verzeichnis', 'Setup-Aufwand': 'Einfach (ein Pfad zur Allow-List)', 'Risiko': 'Mittel — eng beschränken', 'Geeignet für': 'Persönliche Automatisierung, Notizen, Repo-Zusammenfassungen' },
          { 'MCP-Server': 'SQLite (archiviert)', 'Was er ermöglicht': 'Abfragen einer lokalen SQLite-Datenbankdatei', 'Setup-Aufwand': 'Einfach, aber nicht mehr gepflegt', 'Risiko': 'Mittel — keine Korrekturen, Kopie der Datei nutzen', 'Geeignet für': 'Nur für Wegwerf-Datenexploration' },
          { 'MCP-Server': 'Postgres (postgres-mcp)', 'Was er ermöglicht': 'Abfragen von Postgres im Restricted-Modus (read-only)', 'Setup-Aufwand': 'Mittel (Rolle + URI)', 'Risiko': 'Mittel — Restricted-Modus und read-only-Rolle', 'Geeignet für': 'Datenexploration, Reporting, BI-Prototypen' },
          { 'MCP-Server': 'Playwright (@playwright/mcp)', 'Was er ermöglicht': 'Steuert einen Browser über Accessibility-Snapshots für Browsing, Scraping, Formularausfüllen', 'Setup-Aufwand': 'Mittel (Browser-Binaries, Latenz)', 'Risiko': 'Hoch — kann Formulare absenden, alles anklicken', 'Geeignet für': 'Recherche, Scraping, Regressionstests' },
          { 'MCP-Server': 'GitHub (offiziell)', 'Was er ermöglicht': 'Repos auflisten, Dateien lesen, Issues und PRs öffnen', 'Setup-Aufwand': 'Mittel (Docker + PAT in Env-Var)', 'Risiko': 'Mittel — Token auf bestimmte Repos scopen', 'Geeignet für': 'Dev-Workflows, Triage, PR-Drafts' },
          { 'MCP-Server': 'Custom', 'Was er ermöglicht': 'Alles, was sich als JSON-RPC-Tools ausdrücken lässt', 'Setup-Aufwand': 'Schwer (eigenen Server schreiben)', 'Risiko': 'Variabel', 'Geeignet für': 'Interne APIs, Nischensysteme, Glue-Code' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Die Referenz-Server für SQLite, PostgreSQL, Puppeteer und GitHub wurden in das Repository `servers-archived` verschoben und werden nicht mehr gepflegt. Die npm-Pakete für PostgreSQL, Puppeteer und GitHub sind als „no longer supported" markiert, und auch der SQLite-Server (ein Python-Paket, zuletzt im April 2025 veröffentlicht) erhält keine Korrekturen. Nutzen Sie die gepflegten Server aus dieser Tabelle und lesen Sie den Code jedes Servers, der Zugangsdaten braucht.',
          },
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
          '**Das Modell sieht eine flache Tool-Liste.** Aus Sicht des Modells gibt es keine Server — nur eine Liste von Tool-Namen wie `filesystem.read_file`, `playwright.browser_navigate`, `github.create_pull_request`. Der Client übernimmt das Routing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die Architektur ist identisch zu der von Claude Desktop. Die Unterschiede sind das Modell (ein lokales Ollama-Modell statt Claude) und der Client (Goose/Cline/Continue.dev/LM Studio statt Claude Desktop). Die MCP-Server sind dieselben Server — Sie können den Filesystem-Server heute unter Claude Desktop laufen lassen und er wird morgen unverändert unter Goose laufen.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-de.svg',
        imageCaption:
          'MCP-Architekturdiagramm: Ollama liefert das lokale Modell, ein MCP-Client (Goose, Cline, Continue.dev oder LM Studio) verbindet sich über stdio per JSON-RPC 2.0 mit MCP-Servern, und vier Arten von Servern — Dateisystem, Datenbank, Browser und GitHub — stellen die eigentlichen Tools bereit.',
      },
      setup: {
        id: 'setup',
        title: 'Setup: Ollama + Goose in 15 Minuten',
        content:
          '**Goose ist der einfachste Weg zu einem funktionierenden lokalen MCP-Agenten.** Es ist ein Open-Source-Agent (ursprünglich von Block, heute unter `aaif-goose/goose` entwickelt) mit CLI und nativer [Ollama](https://ollama.com/)-Unterstützung, einer interaktiven Chat-Oberfläche und einer einzigen Konfigurationsdatei für alle Ihre [Model-Context-Protocol-(MCP)](https://modelcontextprotocol.io/)-Server. Continue.dev, Cline und LM Studio funktionieren ebenfalls — Goose hat den geringsten Setup-Aufwand für den ersten Lauf.',
        items: [
          '**Schritt 1 — Ollama installieren.** Download von [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). Bestätigen Sie, dass der Dienst läuft, mit `curl http://127.0.0.1:11434/api/tags`.',
          '**Schritt 2 — ein Tool-Calling-Modell ziehen.** Wählen Sie aus Gemma 4 31B (`gemma4:31b`), GLM-4.7 Flash (`glm-4.7-flash`), Qwen3.6 27B (`qwen3.6:27b`), Qwen3 32B (`qwen3:32b`) oder Llama 3.3 70B (`llama3.3:70b`). 24 GB VRAM bewältigen 26B–32B bei Q4_K_M komfortabel; ein Mac mit 32 GB Unified Memory fasst sie mit etwa 4–6 GB Rest für den Kontext (macOS braucht 8 GB).',
          '**Schritt 3 — Goose installieren.** Unter macOS oder Linux führen Sie `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash` aus (oder `brew install block-goose-cli`). Unter Windows nutzen Sie den PowerShell-Installer aus der Goose-Dokumentation oder WSL. Die CLI installiert sich als `goose`.',
          '**Schritt 4 — Ollama als Provider konfigurieren.** Führen Sie `goose configure` aus, wählen Sie `ollama` als Provider, setzen Sie das Modell auf das gezogene und den Host auf `http://127.0.0.1:11434` (leer bedeutet ebenfalls localhost:11434). Goose schreibt das in `~/.config/goose/config.yaml`. Das Standard-Kontextfenster von Ollama kann klein sein (die Goose-Dokumentation nennt 4096 Tokens), wodurch Goose seine Extensions ignorieren kann — starten Sie Ollama mit `OLLAMA_CONTEXT_LENGTH=32768` (oder höher).',
          '**Schritt 5 — den Filesystem-MCP-Server hinzufügen.** Führen Sie `goose configure` aus, wählen Sie Add Extension und dann Command-line Extension, oder ergänzen Sie einen `extensions`-Block in `~/.config/goose/config.yaml` (Konfigurationsbeispiel unten). Für einen einmaligen Test aktiviert `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` ihn nur für diese Session. Starten Sie `goose session` und bitten Sie es, Dateien in Ihrem Test-Verzeichnis aufzulisten. Der erste Turn bestätigt, dass der Server angebunden ist.',
          '**Schritt 6 — mit einer echten Aufgabe verifizieren.** Probieren Sie `goose session` und fragen Sie „Erstelle eine Liste jeder Markdown-Datei in `notes/`, mit Titel und Wortanzahl, und schreibe das Ergebnis in `notes/index.md`." Wenn der Agent liest, zusammenfasst und zurückschreibt, funktioniert der Loop.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Wenn Sie bereits Cline oder Continue.dev nutzen, überspringen Sie Goose und verwenden Sie diese — beide sind MCP-Clients. Jeder hat eigene MCP-Einstellungen (die genaue Datei finden Sie in der jeweiligen Dokumentation); Modell und Server sind dieselben, nur die Host-Anwendung und ihr Konfigurationsformat ändern sich.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-de.svg',
        imageCaption:
          'Sechsstufiger Einrichtungsablauf für Ollama und Goose: Ollama installieren, ein toolfähiges Modell wie gemma4:31b laden, Goose mit dem offiziellen Skript installieren, den Provider konfigurieren, den Dateisystem-MCP-Server hinzufügen und mit einer echten Aufgabe in rund 15 Minuten prüfen.',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem-Server: Lesen und Schreiben in einem isolierten Verzeichnis',
        content:
          '**Der Filesystem-Server ist der erste, den Sie installieren, und der einfachste, sicher zu beschränken.** Er stellt `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` und `create_directory` bereit — alle auf einen oder mehrere allow-listed Pfade beschränkt.',
        items: [
          '**Installation:** Der Referenz-Server ist `@modelcontextprotocol/server-filesystem`, ausgeführt über `npx -y` (keine globale Installation nötig; Node.js erforderlich). Er gehört zu den Referenz-Servern, die weiterhin gepflegt werden. Goose, Cline und Continue.dev starten ihn alle automatisch aus ihrer Konfiguration heraus.',
          '**Pfade allow-listen:** Der Server akzeptiert ein oder mehrere Verzeichnis-Argumente und verweigert Operationen außerhalb davon. Geben Sie immer einen expliziten, schmalen Pfad an — niemals `~` oder `/`.',
          '**Bereitgestellte Tools:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (zeilenbasierte Ersetzungen), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. Das Modell sieht das als `filesystem.read_file` und so weiter.',
          '**Quality-of-Life:** `directory_tree` liefert einen JSON-Baum; ideal, damit das Modell sich orientiert, bevor es bestimmte Dateien liest. `search_files` macht eine grep-ähnliche rekursive Suche.',
          '**Risikoprofil:** Der Server respektiert die Allow-List, aber innerhalb dieser Liste hat er vollen Lese-/Schreibzugriff. Behandeln Sie die Allow-List als die einzige Barriere und wählen Sie ein dediziertes Workspace-Verzeichnis statt Ihres Home-Ordners.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
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
        title: 'Datenbank-Server: Postgres (und SQLite) sicher abfragen',
        content:
          '**Ein Datenbank-Server verwandelt das Modell in einen Junior-Analysten, der Fragen mit echten Daten beantworten kann — vorausgesetzt, Sie halten ihn read-only.** Die ursprünglichen Referenz-Server für SQLite und PostgreSQL sind archiviert; nutzen Sie daher einen gepflegten Postgres-Server und gehen Sie mit SQLite vorsichtig um.',
        items: [
          '**Postgres: `postgres-mcp` (Crystal DBA, MIT-Lizenz)** ist die Option mit Read-only-Modus (die aktuelle PyPI-Version stammt vom Mai 2025, prüfen Sie daher die Aktivität des Repositorys, bevor Sie sich darauf verlassen). Starten Sie ihn mit `uvx postgres-mcp --access-mode=restricted` (oder `pipx install postgres-mcp`, oder mit seinem Docker-Image) und übergeben Sie die Verbindungs-URI in der Umgebungsvariable `DATABASE_URI`. Der Restricted-Modus erlaubt Read-only-Transaktionen und ein Zeitlimit für Abfragen; der Unrestricted-Modus ist nur für die Entwicklung gedacht.',
          '**Nutzen Sie zusätzlich eine dedizierte read-only-Rolle.** Der Restricted-Modus ist eine Barriere, die Datenbankrolle eine weitere. Erstellen Sie eine Rolle `agent_ro` mit reinen SELECT-Rechten und verwenden Sie deren Connection-String.',
          '**SQLite: Der Referenz-Server ist archiviert.** Es ist das Python-Paket `mcp-server-sqlite` (kein npm-Paket; letzte Version April 2025), er läuft möglicherweise noch, erhält aber keine Korrekturen. Richten Sie ihn nur auf eine Kopie der Datei, niemals auf Ihr einziges Exemplar, oder laden Sie die Daten stattdessen in Postgres. Lesen Sie den Code jedes Community-SQLite-Servers, bevor Sie ihm eine Datei geben.',
          '**Schema-Awareness:** Bitten Sie den Agenten „liste die Tabellen auf und beschreibe die fünf am häufigsten genutzten", bevor Sie analytische Fragen stellen — das Modell ist viel präziser, wenn es das Schema untersucht hat, als wenn es Spaltennamen rät.',
          '**Kosten:** Abfragen treffen Ihre Datenbank direkt. Ein schlecht formuliertes `SELECT *` aus einer 100-Mio.-Zeilen-Tabelle ist hier derselbe Unfall, wie er von einem Menschen wäre — halten Sie die Rolle in einem separaten Connection-Pool mit einem Statement-Timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
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
        title: 'Browser-Server: Einen Browser mit Playwright MCP steuern',
        content:
          '**Der Browser-Server ist der mächtigste und der gefährlichste der vier.** Er startet einen echten Browser und stellt Navigation, Klicks, Formularausfüllen und Screenshots bereit — also kann er alles tun, was Sie in einem Browser tun können, einschließlich Formulare absenden.',
        items: [
          '**Welcher Server:** Nutzen Sie `@playwright/mcp` von Microsoft (`npx @playwright/mcp@latest`). Der alte `@modelcontextprotocol/server-puppeteer` ist als „no longer supported" markiert, und ein Paket `@modelcontextprotocol/server-playwright` existiert auf npm nicht.',
          '**Bereitgestellte Tools:** `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_evaluate` (JavaScript ausführen), `browser_take_screenshot`, `browser_tabs`, `browser_wait_for`. Das Modell liest die Seite über `browser_snapshot` (ein Accessibility-Snapshot, den Playwright MCP für Aktionen gegenüber Screenshots empfiehlt) und nutzt Screenshots nur zum Ansehen.',
          '**Latenz:** Echte Browser-Sessions brauchen 1–5 Sekunden pro Aktion. Ein mehrstufiger Browse-Vorgang verbraucht leicht 30–60 Sekunden und Zehntausende Tokens, weil Seiteninhalte groß sind. Nutzen Sie ein Context-Fenster von 32K+.',
          '**Element-Referenzen:** Das Modell klickt Elemente über die Referenzen im Snapshot an. Kleinere Modelle wählen oft das falsche; ein 27B+-Tool-Calling-Modell beherrscht gängige Muster zuverlässig. Halten Sie Aufgaben fokussiert — „extrahiere den Titel und den ersten Absatz dieser URL" ist viel zuverlässiger als „navigiere die Seite und finde die Kontaktseite".',
          '**Die richtigen Use Cases:** Recherche (Seite öffnen, zusammenfassen, an Notizen anhängen), Regressionstests (navigieren, klicken, screenshot) und Formularausfüllen auf Seiten, die Sie kontrollieren. Die falschen Use Cases: alles, wo ein Fehlklick im Live-Web Konsequenzen hat.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Geben Sie dem Browser-Server niemals Anmeldedaten. Wenn Sie eine authentifizierte Session brauchen, übergeben Sie dem Agenten ein vorab authentifiziertes Browser-Profil und lassen Sie ihn niemals zu Hochrisiko-Seiten navigieren (Banking, E-Mail, Cloud-Konsolen, Zahlungsformulare). Das Modell hat kein Urteilsvermögen darüber, was ein Button tut — es sieht Text und klickt. Behandeln Sie es wie einen Praktikanten ohne Kontext und ohne Korrekturmöglichkeit.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub-Server: Repos, Issues und PRs aus einem lokalen Modell',
        content:
          '**Der GitHub-Server verwandelt natürlichsprachliche Repo-Arbeit in API-Calls.** Er ist der einfachste der vier zu konfigurieren und der am einfachsten über die Berechtigungen eines Personal Access Tokens (PAT) eng zu beschränken.',
        items: [
          '**Installation:** Nutzen Sie den offiziellen `github/github-mcp-server` von GitHub, gestartet aus seinem Docker-Image (`ghcr.io/github/github-mcp-server`) mit einem PAT in der Env-Var `GITHUB_PERSONAL_ACCESS_TOKEN`. Das alte npm-Paket `@modelcontextprotocol/server-github` ist als „no longer supported" markiert; verwenden Sie es nicht für neue Setups.',
          '**Bereitgestellte Tools:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, plus viele weitere. Die volle Oberfläche ist groß; die meisten Aufgaben nutzen 5–10 Tools.',
          '**Scopen Sie das PAT.** Verwenden Sie ein Fine-Grained-PAT, gescopet auf bestimmte Repos mit den minimal nötigen Berechtigungen (Read zum Browsen, Write für PR-/Issue-Erstellung). Verwenden Sie kein klassisches PAT mit `repo` für einen experimentellen Agenten.',
          '**Reale Workflows:** Triage („lies die letzten 20 offenen Issues, gruppiere sie, entwirf Labels"), Drafting („lies die README und öffne einen PR, der Tippfehler behebt"), Reporting („welche PRs sind diese Woche stale").',
          '**Risikoprofil:** Der Agent kann Issues und PRs erstellen, kommentieren und (mit Schreibrechten) Commits pushen. Deaktivieren Sie Merge-Tools, sofern Sie nicht sowohl dem Modell als auch dem Workflow vertrauen — ein versehentlich gemergter PR in einem Fine-Grained-PAT-Repo ist wiederherstellbar, aber nur, wenn Sie es schnell bemerken.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
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
          { 'Schicht': 'Modell', 'Claude Desktop': 'Claude (Anthropic, Cloud)', 'Lokales Ollama + Goose': 'Gemma 4, GLM-4.7, Qwen3 oder Llama 3.3 (lokal)' },
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
          '**Gemma 4 31B (`gemma4:31b`)** — Googles Tool-Call-Training ist Best-in-Class für die Größe. Passt in 32 GB Unified Memory (etwa 4–6 GB bleiben für den Kontext) oder 24 GB VRAM bei Q4_K_M. Gutes allgemeines Reasoning; etwas konservativ bei verketteten Tool-Calls.',
          '**GLM-4.7 Flash (`glm-4.7-flash`)** — Zhipus Modell hat sehr starke Tool-Call-Zuverlässigkeit und ein 128K-Context-Fenster ab Werk. Etwas schwerer als Gemma 4; passt komfortabel auf eine 24-GB-GPU.',
          '**Qwen3.6 27B (`qwen3.6:27b`)** — die neuere Qwen-Option auf Ollama (rund 18–19 GB, 256K Context, Tool Calling unterstützt). **Qwen3 32B (`qwen3:32b`)** — gut ausbalanciert; das dichte 32B verarbeitet MCP sauber und ist in einer langen Agent-Schleife glücklich. **Qwen3-Coder 30B (`qwen3-coder:30b`)** ist die beste Wahl, wenn Ihre Agent-Arbeit codeförmig ist.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — die höchste Decke, aber die schwerste. 64 GB+ Unified Memory oder 2× 24 GB GPUs bei Q4_K_M. Nur einsetzen, wenn Ihre Hardware das verträgt; die kleineren Modelle reichen meist.',
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
          '**BSI-Grundschutz-Kataloge:** Für Behörden und IT-Sicherheits-zertifizierte Organisationen lässt sich der lokale Stack den Bausteinen SYS.1.1 (Allgemeiner Server), SYS.1.5 (Virtualisierung) und APP.5.4 (Webanwendungen) zuordnen; welche Bausteine tatsächlich gelten, legt das Sicherheitskonzept der jeweiligen Organisation fest. Der Browser-Server ist hier der heikelste Baustein — separater User, eigener Network-Namespace, kein Zugriff auf Produktiv-Credentials.',
          '**Mittelstand-Use Cases:** Steuerberatung, Notariat, Arztpraxis, Maschinenbau-Konstruktion, Personalakten — überall dort, wo Mandanten- oder Patientendaten nicht an OpenAI, Anthropic oder Google gehen dürfen. Ein Mac mit Apple-Silicon-Chip und genug Unified Memory oder ein Workstation-PC mit RTX 4090 reicht für ein 27B–32B-Modell, das Akten zusammenfasst, Verträge prüft oder Code-Snippets gegen interne Datenbanken testet.',
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
          '**Fehler 8: archivierte Referenz-Server aus alten Tutorials installieren.** Die npm-Pakete `@modelcontextprotocol/server-postgres`, `-puppeteer` und `-github` sind als „no longer supported" markiert, und der SQLite-Server ist archiviert. Manche ältere Anleitungen nennen außerdem npm-Pakete, die es nicht gibt (`server-sqlite`, `server-playwright`). Nutzen Sie die oben genannten gepflegten Server.',
          '**Fehler 9: MCP-Konfiguration in Ollama eintragen.** Ollama hat keine MCP-Einstellungen. Server werden im Client konfiguriert (Goose-`extensions`, MCP-Einstellungen von Cline oder Continue.dev).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Model Context Protocol Spezifikation](https://modelcontextprotocol.io/) — Offizielle Spezifikation, JSON-RPC-Schema, Transport- und Lifecycle-Definitionen, einschließlich des Changelogs zu 2026-07-28.',
          '[modelcontextprotocol/servers GitHub-Repository](https://github.com/modelcontextprotocol/servers) — Die gepflegten Referenz-Server (filesystem, git, fetch, memory und weitere) und die Liste der archivierten Server.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — Der offizielle MCP-Server von GitHub, Einrichtung per Docker und Binary.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Playwright-MCP-Server und seine Browser-Tools.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — Postgres-MCP-Server mit Restricted-Zugriffsmodus (read-only).',
          '[Goose-Dokumentation](https://goose-docs.ai/docs/getting-started/installation) — CLI-Installation, Ollama-Provider-Konfiguration, Syntax der Extension-Konfiguration (MCP-Server).',
          '[Ollama Model Library](https://ollama.com/library) — Verfügbare lokale Modelle, Tool-Call-Support-Flags und in diesem Leitfaden referenzierte Quantisierungsstufen.',
          '[Cline GitHub-Repository](https://github.com/cline/cline) — VS-Code-MCP-Client-Implementierung, MCP-Server-Panel.',
          '[Continue.dev-Dokumentation](https://docs.continue.dev/) — `mcpServers`-Config-Block-Referenz für den Continue.dev-Client.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Was ist MCP und warum ist es für lokale KI wichtig?',
            a: 'Model Context Protocol (MCP) ist ein offenes JSON-RPC-2.0-Protokoll, mit dem ein Client (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) ein Sprachmodell auf einheitliche Weise mit Tool-Servern verbindet. Es ist für lokale KI wichtig, weil es die Schicht standardisiert, die ein Chat-Modell zu einem Agenten macht — schreiben Sie einen Tool-Server einmal, nutzen Sie ihn unter jedem Client und jedem Modell, einschließlich eines lokalen Ollama-Modells. Ohne MCP erfindet jedes Projekt Datei-/Datenbank-/Browser-Tooling gegen seinen eigenen Client neu.',
          },
          {
            q: 'Funktioniert MCP ohne Claude Desktop?',
            a: 'Ja. Das Protokoll ist offen und vollständig unabhängig von Claude Desktop. Goose, Cline, Continue.dev und LM Studio liefern alle MCP-Client-Implementierungen, die mit lokalen Ollama-Modellen funktionieren. Die gepflegten Server (Filesystem, Postgres, Playwright, GitHub) laufen unter jedem konformen Client unverändert.',
          },
          {
            q: 'Welche lokalen Modelle unterstützen MCP am besten?',
            a: 'Die zuverlässigsten Wahlen sind Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B oder Qwen3 32B (oder Qwen3-Coder 30B für codeförmige Arbeit) und Llama 3.3 70B. Alle haben explizites Tool-Call-Training und geben sauberes Function-Calling-JSON aus, das MCP-Clients routen können. Modelle unter 7B (und die meisten general-purpose-Modelle ohne Tool-Call-Fine-Tuning) produzieren regelmäßig fehlerhafte Tool-Calls.',
          },
          {
            q: 'Ist MCP sicher — kann der Agent meine Dateien löschen?',
            a: 'Er kann es, wenn Sie ihn lassen. Sicherheit kommt von der Konfiguration der Server, nicht vom Protokoll. Der Filesystem-Server arbeitet nur in Pfaden, die Sie allow-listen — beschränken Sie ihn auf ein dediziertes `agent-workspace`-Verzeichnis. Der Datenbankserver läuft read-only, wenn Sie den Restricted-Modus und eine SELECT-only-Rolle verwenden. Verlangen Sie immer eine explizite Freigabe für Schreib-, Shell- und PR-Tools; Auto-Approval nur für Lese-Operationen. Das Audit-Log zeigt Ihnen genau, was der Agent im Nachhinein getan hat.',
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
            a: 'Ja, über bestimmte Server. Der Browser-Server (Playwright MCP) steuert einen echten Browser, der die Anfragen stellt, zu denen das Modell navigiert. Mehrere Drittanbieter-Server stellen `http_get`/`http_post`-Tools direkter bereit. Filesystem- und Datenbankserver machen keine Netzwerkanfragen; sie operieren nur auf lokalen Ressourcen.',
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
            q: 'Wie füge ich einen MCP-Server zu Ollama hinzu?',
            a: 'Sie fügen ihn nicht zu Ollama hinzu — Ollama hat keine MCP-Einstellungen. Sie fügen den Server in dem Client hinzu, der vor Ollama sitzt. In Goose führen Sie `goose configure` aus, wählen Add Extension, dann Command-line Extension und geben den Server-Befehl ein (zum Beispiel `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`); für einen schnellen Test nutzen Sie `goose session --with-extension "<command>"`. Cline und Continue.dev haben eigene MCP-Einstellungen. Stellen Sie sicher, dass Ollama ein Tool-Calling-Modell mit einem Kontextfenster von mindestens 32K ausführt.',
          },
          {
            q: 'Kann ich Claude Desktop mit Ollama-Modellen verwenden?',
            a: 'Nicht als direktes Setup. Claude Desktop spricht mit den Cloud-Modellen von Anthropic und führt daher kein Ollama-Modell aus. Von Claude Desktop übertragbar ist das MCP-Server-Ökosystem: Dieselben Server funktionieren mit einem MCP-Client, der Ollama unterstützt, etwa Goose, Cline, Continue.dev oder LM Studio. Das ist das lokale Gegenstück, das dieser Leitfaden beschreibt.',
          },
          {
            q: 'Welche offiziellen MCP-Server sind archiviert, und was ersetzt sie?',
            a: 'Die Referenz-Server für SQLite, PostgreSQL, Puppeteer und GitHub (unter anderem) wurden in das Repository `servers-archived` verschoben und werden nicht mehr gepflegt; ihre npm-Pakete (sofern vorhanden) sind als „no longer supported" markiert und erhalten keine Sicherheitskorrekturen. Gepflegte Ersatzlösungen: der offizielle `github/github-mcp-server` von GitHub für GitHub, `@playwright/mcp` von Microsoft für Browser-Automatisierung und `postgres-mcp` (Crystal DBA) im Restricted-Modus für Postgres. Für SQLite gibt es keinen gepflegten offiziellen Server; nutzen Sie daher eine Kopie der Datei mit dem archivierten Server oder laden Sie die Daten in Postgres. Der Filesystem-Server bleibt ein aktiv gepflegter Referenz-Server.',
          },
          {
            q: 'Muss ich bei der Verwendung lokaler MCP-Agenten die DSGVO beachten?',
            a: 'Die kurze Antwort: Sie müssen die DSGVO weiterhin beachten, aber lokales MCP entlastet Sie genau in dem Bereich, der bei Cloud-Agenten am schwierigsten ist. Wenn Modell, Client und alle Tool-Server auf Ihrer Maschine laufen, gibt es keinen Auftragsverarbeiter im Sinne von Art. 28 für die LLM-Schicht — Sie schließen keinen AVV mit OpenAI oder Anthropic, müssen keine TOMs eines US-Anbieters bewerten und keine Drittlands-Bewertung nach Schrems II machen. Was bleibt: Die DSGVO-Pflichten für die Daten selbst (Rechtsgrundlage, Zweckbindung, Löschkonzepte, Betroffenenrechte) gelten unverändert. Der MCP-Server-Audit-Log ist Ihr primärer Nachweis nach Art. 5 Abs. 2 (Rechenschaftspflicht), dass der Agent keine unzulässige Verarbeitung durchgeführt hat.',
          },
          {
            q: 'Sind lokale MCP-Agenten für den deutschen Mittelstand geeignet?',
            a: 'Ja, und der Mittelstand ist tatsächlich der Sektor mit dem klarsten Use Case. Steuerberatung, Notariat, Arztpraxen, Maschinenbau, Personalwesen — überall dort, wo Mandanten-, Patienten- oder Mitarbeiterdaten verarbeitet werden, ist die Cloud-Compliance-Hürde so hoch, dass viele Unternehmen LLM-Pilotprojekte komplett verschoben haben. Ein lokaler MCP-Stack auf einem Apple-Silicon-Mac mit genug Unified Memory oder einer Workstation mit RTX 4090 betreibt ein 27B–32B-Modell, das Akten zusammenfasst, Verträge gegen Vorlagen prüft oder Code-Snippets gegen interne Datenbanken testet — alles ohne Cloud-Aufruf. Je nach Sicherheitskonzept können die BSI-Grundschutz-Bausteine (SYS.1.1, APP.5.4) einschlägig sein; der Browser-Server ist der heikelste Punkt und sollte separat gehärtet werden (eigener User, kein Zugriff auf Produktiv-Credentials). Audit-Logs revisionssicher speichern. Ein externer Datenschutzbeauftragter sollte die Einrichtung einmal abnehmen, danach läuft der Stack so wartungsarm wie eine interne Datenbank.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Literatur',
        items: [
          '[Beste lokale Modelle für Tool Calling 2026](/de/power-local-llm/best-local-models-tool-calling-2026) — Head-to-Head-Benchmarks für die oben empfohlenen Modelle (Gemma 4, GLM-4.7, Qwen3, Llama 3.3).',
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
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-fr.webp',
    title: "Ollama MCP 2026 : comment connecter un modèle local à vos fichiers, bases de données et APIs",
    seoTitle: 'Ollama MCP : connecter un agent IA local à vos outils',
    intro:
      "Model Context Protocol (MCP) est la couche manquante entre un modèle Ollama local et le reste de votre machine. Avec un seul fichier de configuration et un modèle compatible tool calling, le même agent interroge Postgres, lit et écrit dans un répertoire isolé, pilote un navigateur headless et ouvre des pull requests GitHub — le modèle et les serveurs tournent sur votre ordinateur, et seuls les serveurs navigateur et GitHub passent par le réseau. Ollama ne parle pas MCP lui-même : ce guide utilise donc un client (Goose) pour faire le pont, avec une installation et une configuration conformes à la documentation actuelle de Goose, des serveurs encore maintenus et un modèle de sécurité qui ne suppose pas que vous faites confiance au modèle.",
    metaDescription:
      "Ollama MCP : comment connecter un modèle local à vos fichiers, Postgres, un navigateur et GitHub avec Goose. Configuration pas à pas, serveurs maintenus.",
    twitterDescription:
      "Ollama ne parle pas MCP — c'est un client qui le fait. Configuration Goose fonctionnelle, serveurs maintenus à installer (et serveurs archivés à éviter), et un modèle de sécurité qui ne fait pas confiance au modèle.",
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'ollama mcp',
      'mcp ollama',
      'connecter ollama mcp',
      'configurer ollama mcp',
      'ollama mcp client',
      'agent ia local mcp',
      'serveur mcp local installation',
      'model context protocol local',
      'mcp sans claude desktop',
      'ajouter un serveur mcp à ollama',
    ],
    leadAnswerBlock:
      "**Model Context Protocol (MCP) permet à un modèle Ollama local d'appeler des outils — lire un fichier, exécuter une requête SQL, cliquer un lien, ouvrir une pull request — via une interface JSON-RPC standardisée que tout client MCP-compatible (Goose, Cline, Continue.dev, LM Studio) sait parler. Le protocole est ouvert, les serveurs utilisés ici sont open source, et rien n'exige Claude Desktop ni de compte cloud. Pour utiliser Ollama avec MCP : lancez Ollama, installez un client MCP, déclarez dans sa configuration les serveurs souhaités, et un modèle compatible tool calling (Gemma 4, GLM-4.7, Qwen3.6, Qwen3, Llama 3.3) devient un agent qui opère sur votre machine avec les permissions que vous contrôlez. Le point clé est le modèle de sécurité : jamais d'approbation automatique pour les outils d'écriture, périmètre filesystem limité à un seul répertoire et serveur de base de données en lecture seule par défaut.**",
    quickAnswerTop: {
      fr: {
        question: 'Comment connecter Ollama à MCP et faire tourner des agents IA en local ?',
        answer:
          "C'est faisable en une après-midi. Lancez Ollama avec un modèle compatible tool calling (Gemma 4, GLM-4.7, Qwen3.6, Qwen3 ou Llama 3.3 70B), installez un client MCP (Goose est la CLI la plus directe ; Cline, Continue.dev et LM Studio sont aussi des clients MCP) et ajoutez les serveurs MCP correspondant à vos besoins — `filesystem` pour les fichiers, un serveur Postgres pour les bases, Playwright MCP pour l'automatisation du navigateur, le serveur officiel de GitHub pour la gestion des dépôts. Ollama lui-même n'a aucun réglage MCP : les serveurs s'ajoutent dans le client. C'est le même protocole que celui de Claude Desktop ; seuls le modèle et le client changent. Restez prudent : limitez le serveur filesystem à un répertoire dédié, gardez le serveur de base en lecture seule par défaut, et n'auto-approuvez jamais les outils d'écriture ou de shell.",
        bullets: [
          "MCP est ouvert et fonctionne entièrement en local — pas de Claude Desktop, pas de compte Anthropic, pas d'appel cloud.",
          'Ollama fournit le modèle ; un client MCP (Goose, Cline, Continue.dev, LM Studio) relie Ollama aux serveurs MCP via JSON-RPC.',
          "Quatre types de serveurs couvrent la plupart des workflows : filesystem, une base de données (Postgres), un navigateur (Playwright MCP) et GitHub. Les anciens serveurs de référence pour SQLite, PostgreSQL, Puppeteer et GitHub sont archivés et ne sont plus maintenus.",
          "La fiabilité des appels d'outils dépend du modèle : Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B et Llama 3.3 70B traitent MCP proprement. Les modèles de moins de 7B émettent régulièrement des appels malformés.",
          "Modèle de sécurité : limitez l'accès filesystem à un répertoire, faites tourner les serveurs de base en lecture seule et exigez une validation explicite pour chaque outil d'écriture ou de shell.",
          "Coût : 0 € en API, mais les tokens se consomment localement — les boucles d'agent sont gourmandes, prévoyez un modèle 32K+ et une machine capable de l'exécuter à vitesse utilisable.",
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Ce que MCP débloque', anchor: '#what-mcp-unlocks' },
      { label: 'Comparatif des serveurs MCP', anchor: '#server-comparison' },
      { label: "Architecture : comment les pièces s'emboîtent", anchor: '#architecture' },
      { label: 'Comment configurer Ollama avec MCP en 15 minutes', anchor: '#setup' },
      { label: 'Serveur filesystem', anchor: '#filesystem-server' },
      { label: 'Serveurs de base de données (Postgres, SQLite)', anchor: '#database-server' },
      { label: 'Serveur navigateur (Playwright)', anchor: '#browser-server' },
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
      "La présentation couvre : comment MCP transforme un modèle Ollama local en agent capable d'interroger des bases de données, lire des fichiers, piloter un navigateur et ouvrir des pull requests ; les quatre types de serveurs (filesystem, base de données, navigateur, GitHub) avec difficulté de configuration et niveau de risque ; un guide de configuration Goose en 6 étapes ; un modèle de sécurité qui ne fait pas confiance au LLM ; et une comparaison directe avec Claude Desktop. Téléchargez le PDF comme référence pour agent MCP local.",
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "**MCP est un protocole JSON-RPC 2.0 pour les outils.** Un modèle (via un client) se connecte à un ou plusieurs serveurs MCP ; chaque serveur expose des Tools (fonctions appelables), des Resources (données lisibles) et des Prompts (templates). Le format wire est identique que le client soit Claude Desktop, Goose, Cline, Continue.dev ou LM Studio.",
          "**Ollama ne parle pas MCP directement — un client MCP enveloppe Ollama.** Goose (open source, issu à l'origine de Block) est la CLI la plus simple avec support natif d'Ollama ; Cline, Continue.dev et LM Studio sont aussi des clients MCP. Vous ajoutez les serveurs dans le client, pas dans Ollama.",
          "**Quatre types de serveurs couvrent la plupart des cas d'usage :** `filesystem` (lecture/écriture dans un répertoire isolé, serveur de référence toujours maintenu), un serveur de base de données (Postgres en mode restreint), `@playwright/mcp` (pilotage d'un navigateur) et `github-mcp-server`, le serveur officiel de GitHub (gestion de dépôts et de PRs avec un Personal Access Token). Les serveurs de référence pour SQLite, PostgreSQL, Puppeteer et GitHub ont été archivés et ne reçoivent plus de correctifs.",
          "**La fiabilité des appels d'outils croît avec la taille et l'entraînement.** Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B et Llama 3.3 70B traitent MCP proprement en Q4_K_M. Les modèles de moins de 7B émettent régulièrement des appels malformés et bloquent la boucle.",
          "**Le modèle de sécurité considère le LLM comme non fiable.** Limitez le serveur filesystem à un seul répertoire, faites tourner le serveur de base avec un rôle en lecture seule, n'auto-approuvez jamais `execute_command` ni `write_file`, et relisez le journal d'audit après les sessions longues.",
          "**MCP local vs Claude Desktop :** protocole identique, écosystème de serveurs identique. La pile locale échange le modèle cloud contre un modèle hors ligne — confidentialité, zéro coût par token, pas de rate limit, en contrepartie d'un modèle un peu moins puissant et d'une configuration de sécurité dont vous êtes responsable.",
          "**Le coût en API est de 0 €, mais les tokens sont bien réels.** Une boucle d'agent peut consommer 30K–80K tokens pour une seule tâche multi-étapes. Visez un modèle 32K minimum ; 128K est confortable.",
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Protocole :** JSON-RPC 2.0 sur stdio (sous-processus local) ou Streamable HTTP (distant). L\'ancien transport HTTP+SSE est déprécié. Les agents locaux utilisent presque exclusivement stdio. La révision actuelle de la spécification est 2026-07-28.',
          '**Origine :** créé par Anthropic comme spécification ouverte (modelcontextprotocol.io). Seuls quelques serveurs de référence sont encore maintenus dans `modelcontextprotocol/servers` (filesystem, git, fetch, memory et d\'autres) ; SQLite, PostgreSQL, Puppeteer et GitHub ont été déplacés vers `servers-archived`. Les éditeurs publient désormais leurs propres serveurs.',
          '**Clients locaux :** Goose (open source, dépôt `aaif-goose/goose`), Cline (extension VS Code), Continue.dev (VS Code/JetBrains), LM Studio (application desktop), plus plusieurs CLIs.',
          "**Modèles Ollama compatibles :** tout modèle entraîné nativement aux appels d'outils, par exemple Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.",
          '**Transports par défaut :** stdio pour les processus locaux ; Streamable HTTP uniquement pour partager un serveur entre plusieurs machines ou agents.',
          "**La configuration vit dans le client :** Goose lit un bloc `extensions` dans `~/.config/goose/config.yaml` (ou `goose configure`) ; Cline et Continue.dev ont leurs propres réglages MCP. Les champs suivent la même idée partout : nom du serveur, command, args, variables d'environnement.",
          "**Pas besoin de Claude Desktop.** Le protocole est ouvert et indépendant de Claude Desktop ; les serveurs utilisés ici sont open source (vérifiez chaque licence) et tournent contre n'importe quel client conforme.",
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
          "**« Ouvre la une de Hacker News, trouve les trois articles IA principaux, résume-les et ajoute-les à ma liste de lecture. »** — le serveur `playwright` pilote un navigateur, le modèle extrait et résume, `filesystem` ajoute.",
          "**« Ouvre un PR draft `chore: bump deps` sur mon fork et lie l'exécution CI en échec. »** — le serveur `github` crée le PR, récupère l'exécution et écrit le lien dans la description.",
          "**« Regarde les 100 dernières lignes de `events.db` et dis-moi quels user IDs sont responsables du nouveau pic d'erreurs. »** — un serveur de base de données interroge une copie des données, le modèle raisonne, vous lisez la réponse dans le panneau de chat.",
          "Chacun de ces flux est un workflow phrase-vers-action qui demandait auparavant soit un modèle cloud avec des outils hébergés, soit un script à la main. MCP est la couche qui vous permet de réutiliser les mêmes serveurs entre clients et le même modèle entre serveurs.",
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Comparatif des quatre serveurs MCP les plus utilisés',
        content:
          "Les serveurs ci-dessous couvrent la longue traîne du « je veux que mon modèle local fasse réellement quelque chose ». Tous sont open source et tournent comme sous-processus locaux (ou conteneur Docker) lancés par votre client MCP. Vérifiez leur état de maintenance avant d'en installer un.",
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: "Commencez par le serveur filesystem (5 minutes, faible risque), ajoutez un serveur de base de données pour le travail data, ajoutez un serveur navigateur seulement si nécessaire, et n'intégrez GitHub qu'une fois que vous faites confiance au modèle sur votre machine.",
          },
          {
            type: 'plain-terms',
            text: "Quatre serveurs couvrent l'essentiel de ce qu'un agent local peut faire pour vous. Le serveur filesystem lit et écrit dans un dossier que vous choisissez. Un serveur de base de données exécute des requêtes contre Postgres. Le serveur navigateur pilote une vraie fenêtre de navigateur pour lire les pages qui exigent du JavaScript. Le serveur GitHub ouvre des issues et des PRs sur vos dépôts. La plupart se lancent en une commande (npx, uvx ou Docker) et tournent sur votre machine, et aucun n'appelle internet sauf si nécessaire : les serveurs navigateur et GitHub le font, les serveurs filesystem et base de données non.",
          },
        ],
        columns: ['Serveur MCP', 'Capacité', 'Difficulté de mise en place', 'Niveau de risque', 'Idéal pour'],
        rows: [
          { 'Serveur MCP': 'Filesystem (référence)', 'Capacité': 'Lire et écrire des fichiers dans un répertoire isolé', 'Difficulté de mise en place': 'Facile (un chemin à allow-lister)', 'Niveau de risque': 'Moyen — restreindre étroitement', 'Idéal pour': 'Automatisation personnelle, prise de notes, résumé de dépôts' },
          { 'Serveur MCP': 'SQLite (archivé)', 'Capacité': 'Requêter un fichier de base SQLite local', 'Difficulté de mise en place': 'Facile, mais plus maintenu', 'Niveau de risque': 'Moyen — aucun correctif, utiliser une copie du fichier', 'Idéal pour': 'Exploration de données jetable uniquement' },
          { 'Serveur MCP': 'Postgres (postgres-mcp)', 'Capacité': 'Requêter Postgres en mode restreint (lecture seule)', 'Difficulté de mise en place': 'Moyenne (rôle + URI)', 'Niveau de risque': 'Moyen — mode restreint et rôle en lecture seule', 'Idéal pour': 'Exploration de données, reporting, prototypes BI' },
          { 'Serveur MCP': 'Playwright (@playwright/mcp)', 'Capacité': 'Piloter un navigateur via des snapshots d\'accessibilité pour navigation, scraping, remplissage de formulaires', 'Difficulté de mise en place': 'Moyenne (binaires navigateur, latence)', 'Niveau de risque': "Élevé — peut soumettre des formulaires, cliquer n'importe où", 'Idéal pour': 'Recherche, scraping, tests de régression' },
          { 'Serveur MCP': 'GitHub (officiel)', 'Capacité': 'Lister les dépôts, lire des fichiers, ouvrir issues et PRs', 'Difficulté de mise en place': 'Moyenne (Docker + PAT en variable d\'env)', 'Niveau de risque': 'Moyen — restreindre le token à des dépôts précis', 'Idéal pour': 'Workflows dev, triage, brouillons de PR' },
          { 'Serveur MCP': 'Custom', 'Capacité': "Tout ce qui peut s'exprimer comme outils JSON-RPC", 'Difficulté de mise en place': 'Difficile (écrire son propre serveur)', 'Niveau de risque': 'Variable', 'Idéal pour': 'APIs internes, systèmes de niche, glue code' },
        ],
        callouts: [
          {
            type: 'warning',
            text: "Les serveurs de référence pour SQLite, PostgreSQL, Puppeteer et GitHub ont été déplacés vers le dépôt `servers-archived` et ne sont plus maintenus. Les paquets npm pour PostgreSQL, Puppeteer et GitHub sont marqués « no longer supported », et le serveur SQLite (un paquet Python, dernière version en avril 2025) ne reçoit plus de correctifs non plus. Utilisez les serveurs maintenus de ce tableau et lisez le code de tout serveur qui demande des identifiants.",
          },
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
          "**Le transport stdio garde tout en local.** Le serveur est lancé par le client, communique via stdin/stdout et se termine quand le client se termine. Rien ne passe par le réseau sauf si le serveur ouvre lui-même une connexion (le serveur navigateur le fait ; les serveurs filesystem et base de données ne le font pas).",
          "**Le modèle voit une liste d'outils plate.** Du point de vue du modèle, il n'y a pas de serveurs — juste une liste de noms comme `filesystem.read_file`, `playwright.browser_navigate`, `github.create_pull_request`. Le client gère le routage.",
        ],
        callouts: [
          {
            type: 'note',
            text: "L'architecture est identique à celle de Claude Desktop. Les différences sont le modèle (un modèle Ollama local au lieu de Claude) et le client (Goose/Cline/Continue.dev/LM Studio au lieu de Claude Desktop). Les serveurs MCP sont les mêmes — vous pouvez faire tourner le serveur filesystem sous Claude Desktop aujourd'hui et il fonctionnera demain sans modification sous Goose.",
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-fr.svg',
        imageCaption:
          'Diagramme d\'architecture MCP : Ollama fournit le modèle local, un client MCP (Goose, Cline, Continue.dev ou LM Studio) fait le pont vers des serveurs MCP via stdio en JSON-RPC 2.0, et quatre types de serveurs — système de fichiers, base de données, navigateur et GitHub — exposent les outils réels.',
      },
      setup: {
        id: 'setup',
        title: 'Comment configurer Ollama avec MCP : Ollama + Goose en 15 minutes',
        content:
          "**Goose est le chemin le plus court vers un agent MCP local fonctionnel.** C'est un agent open source (issu à l'origine de Block, développé désormais sur `aaif-goose/goose`) avec une CLI et un support natif d'[Ollama](https://ollama.com/), une interface de chat interactive et un seul fichier de configuration pour tous vos serveurs [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). Continue.dev, Cline et LM Studio fonctionnent aussi — Goose a juste le coût d'installation le plus faible pour une première mise en route.",
        items: [
          '**Étape 1 — installer Ollama.** Téléchargez depuis [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). Vérifiez que le service tourne avec `curl http://127.0.0.1:11434/api/tags`.',
          "**Étape 2 — récupérer un modèle compatible tool calling.** Choisissez parmi Gemma 4 31B (`gemma4:31b`), GLM-4.7 Flash (`glm-4.7-flash`), Qwen3.6 27B (`qwen3.6:27b`), Qwen3 32B (`qwen3:32b`) ou Llama 3.3 70B (`llama3.3:70b`). 24 Go de VRAM gèrent confortablement 26B–32B en Q4_K_M ; un Mac avec 32 Go de mémoire unifiée les fait tenir avec environ 4–6 Go restants pour le contexte (macOS en réserve 8 Go).",
          "**Étape 3 — installer Goose.** Sous macOS ou Linux, lancez `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash` (ou `brew install block-goose-cli`). Sous Windows, utilisez l'installateur PowerShell de la documentation Goose, ou WSL. La CLI s'installe sous le nom `goose`.",
          "**Étape 4 — configurer Ollama comme provider.** Lancez `goose configure`, choisissez `ollama` comme provider, fixez le modèle sur celui que vous avez récupéré et le host sur `http://127.0.0.1:11434` (vide, cela signifie aussi localhost:11434). Goose écrit cela dans `~/.config/goose/config.yaml`. La fenêtre de contexte par défaut d'Ollama peut être petite (la documentation de Goose mentionne 4096 tokens), ce qui peut conduire Goose à ignorer ses extensions — démarrez Ollama avec `OLLAMA_CONTEXT_LENGTH=32768` (ou plus).",
          "**Étape 5 — ajouter le serveur MCP filesystem.** Lancez `goose configure`, choisissez Add Extension, puis Command-line Extension, ou ajoutez un bloc `extensions` à `~/.config/goose/config.yaml` (exemple ci-dessous). Pour un test ponctuel, `goose session --with-extension \"npx -y @modelcontextprotocol/server-filesystem /path/to/workspace\"` l'active pour cette session uniquement. Lancez `goose session` et demandez la liste des fichiers dans votre répertoire de test. Le premier tour confirme que le serveur est bien câblé.",
          "**Étape 6 — vérifier avec une vraie tâche.** Essayez `goose session` et demandez « Fais une liste de chaque fichier Markdown dans `notes/`, avec titre et nombre de mots, et écris le résultat dans `notes/index.md`. » Si l'agent lit, résume et réécrit, la boucle fonctionne.",
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: "Si vous utilisez déjà Cline ou Continue.dev, sautez Goose et utilisez-les — les deux sont des clients MCP. Chacun a ses propres réglages MCP (consultez sa documentation pour le fichier exact) ; le modèle et les serveurs sont les mêmes, seuls l'application hôte et son format de configuration changent.",
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-fr.svg',
        imageCaption:
          "Flux d'installation en six étapes pour Ollama et Goose : installer Ollama, télécharger un modèle compatible outils comme gemma4:31b, installer Goose avec le script officiel, configurer le fournisseur, ajouter le serveur MCP fichiers et vérifier avec une tâche réelle en environ 15 minutes.",
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Serveur filesystem : lire et écrire dans un répertoire isolé',
        content:
          "**Le serveur filesystem est le premier à installer et le plus simple à restreindre proprement.** Il expose `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` et `create_directory` — tous limités à un ou plusieurs chemins allow-listés.",
        items: [
          "**Installation :** le serveur de référence est `@modelcontextprotocol/server-filesystem`, exécuté via `npx -y` (pas besoin d'install globale ; Node.js requis). C'est l'un des serveurs de référence encore maintenus. Goose, Cline et Continue.dev le lancent depuis leur configuration.",
          "**Allow-lister les chemins :** le serveur prend un ou plusieurs arguments de répertoire et refuse toute opération en dehors. Donnez toujours un chemin explicite et étroit — jamais `~` ni `/`.",
          "**Outils exposés :** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (remplacements ligne par ligne), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. Le modèle les voit comme `filesystem.read_file` et ainsi de suite.",
          "**Confort :** `directory_tree` retourne un arbre JSON ; idéal pour que le modèle s'oriente avant de lire des fichiers précis. `search_files` fait une recherche récursive façon grep.",
          "**Surface de risque :** le serveur respecte l'allow-list, mais à l'intérieur il a tous les droits lecture/écriture. Traitez l'allow-list comme la seule barrière et choisissez un répertoire workspace dédié plutôt que votre home.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
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
        title: 'Serveurs de base de données : interroger Postgres (et SQLite) en sécurité',
        content:
          "**Un serveur de base de données transforme le modèle en analyste junior capable de répondre avec de vraies données — à condition de le garder en lecture seule.** Les serveurs de référence SQLite et PostgreSQL d'origine sont archivés : utilisez donc un serveur Postgres maintenu et manipulez SQLite avec précaution.",
        items: [
          "**Postgres : `postgres-mcp` (Crystal DBA, licence MIT)** est l'option avec un mode lecture seule (la dernière version PyPI date de mai 2025 : vérifiez l'activité du dépôt avant de vous y fier). Lancez-le avec `uvx postgres-mcp --access-mode=restricted` (ou `pipx install postgres-mcp`, ou son image Docker) et transmettez l'URI de connexion dans la variable d'environnement `DATABASE_URI`. Le mode restreint autorise des transactions en lecture seule et une limite de durée par requête ; le mode non restreint est réservé au développement.",
          "**Utilisez aussi un rôle dédié en lecture seule.** Le mode restreint est une barrière, le rôle de base de données en est une autre. Créez un rôle `agent_ro` avec uniquement des grants SELECT et utilisez la connection string de ce rôle.",
          "**SQLite : le serveur de référence est archivé.** C'est le paquet Python `mcp-server-sqlite` (pas un paquet npm ; dernière version en avril 2025) ; il peut encore fonctionner, mais ne reçoit plus de correctifs. Pointez-le uniquement vers une copie du fichier, jamais vers votre seul exemplaire, ou chargez les données dans Postgres. Lisez le code de tout serveur SQLite communautaire avant de lui confier un fichier.",
          "**Connaissance du schéma :** demandez à l'agent « liste les tables et décris les cinq plus utilisées » avant les questions analytiques — le modèle est bien plus précis quand il a inspecté le schéma que quand il devine les noms de colonnes.",
          "**Coût :** les requêtes touchent votre base directement. Un `SELECT *` mal formé sur une table de 100 M de lignes est le même incident ici qu'avec un humain — gardez le rôle dans un pool de connexions séparé avec un statement timeout.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
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
        title: 'Serveur navigateur : piloter un navigateur avec Playwright MCP',
        content:
          "**Le serveur navigateur est le plus puissant et le plus dangereux des quatre.** Il lance un vrai navigateur et expose la navigation, les clics, le remplissage de formulaires et les screenshots — autrement dit il peut faire tout ce que vous pouvez faire dans un navigateur, y compris soumettre des formulaires.",
        items: [
          "**Quel serveur :** utilisez `@playwright/mcp` de Microsoft (`npx @playwright/mcp@latest`). L'ancien `@modelcontextprotocol/server-puppeteer` est marqué « no longer supported », et aucun paquet `@modelcontextprotocol/server-playwright` n'existe sur npm.",
          "**Outils exposés :** `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_evaluate` (exécuter du JavaScript), `browser_take_screenshot`, `browser_tabs`, `browser_wait_for`. Le modèle lit la page via `browser_snapshot` (un snapshot d'accessibilité, que Playwright MCP recommande plutôt que les screenshots pour agir) et n'utilise les screenshots que pour regarder.",
          "**Latence :** une vraie session navigateur prend 1 à 5 secondes par action. Une navigation multi-étapes consomme facilement 30 à 60 secondes et des dizaines de milliers de tokens parce que le contenu des pages est volumineux. Visez une fenêtre de contexte de 32K+.",
          "**Références d'éléments :** le modèle clique sur les éléments via les références du snapshot. Les petits modèles choisissent souvent la mauvaise ; un modèle 27B+ entraîné aux outils gère les patterns courants de manière fiable. Cadrez les tâches — « extrais le titre et le premier paragraphe de cette URL » est bien plus fiable que « navigue le site et trouve la page contact ».",
          "**Bons cas d'usage :** recherche (ouvrir la page, résumer, ajouter aux notes), tests de régression (naviguer, cliquer, screenshot) et remplissage de formulaires sur des pages que vous contrôlez. Mauvais cas : tout ce où un mauvais clic sur le web live a des conséquences.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: "Ne donnez jamais d'identifiants au serveur navigateur. Si vous avez besoin d'une session authentifiée, fournissez à l'agent un profil navigateur pré-authentifié et ne le laissez jamais naviguer vers des sites à fort impact (banque, email, consoles cloud, formulaires de paiement). Le modèle n'a aucun jugement sur ce que fait un bouton — il voit du texte et clique. Traitez-le comme un stagiaire sans contexte ni recours.",
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'Serveur GitHub : dépôts, issues et PRs depuis un modèle local',
        content:
          "**Le serveur GitHub transforme le travail en langage naturel sur dépôts en appels API.** C'est le plus simple des quatre à configurer et le plus facile à restreindre via les permissions du Personal Access Token (PAT).",
        items: [
          "**Installation :** utilisez le serveur officiel de GitHub, `github/github-mcp-server`, lancé depuis son image Docker (`ghcr.io/github/github-mcp-server`) avec un PAT dans la variable d'environnement `GITHUB_PERSONAL_ACCESS_TOKEN`. L'ancien paquet npm `@modelcontextprotocol/server-github` est marqué « no longer supported » ; ne l'utilisez pas pour de nouvelles installations.",
          "**Outils exposés :** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, plus bien d'autres. La surface complète est large ; la plupart des tâches utilisent 5 à 10 outils.",
          "**Restreignez le PAT.** Utilisez un PAT fine-grained scopé à des dépôts précis avec les permissions minimales nécessaires (Read pour la navigation, Write pour la création de PR/issues). N'utilisez pas un PAT classique avec `repo` pour un agent expérimental.",
          "**Workflows réels :** triage (« lis les 20 dernières issues ouvertes, regroupe-les, propose des labels »), brouillonnage (« lis le README et ouvre un PR corrigeant les fautes »), reporting (« quels PRs sont stale cette semaine »).",
          "**Surface de risque :** l'agent peut créer des issues et des PRs, commenter et (avec les droits d'écriture) pousser des commits. Désactivez les outils de merge sauf si vous faites confiance au modèle ET au workflow — un merge raté dans un dépôt avec PAT fine-grained est récupérable, mais seulement si vous le voyez vite.",
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'Un modèle de sécurité qui ne fait pas confiance au modèle',
        content:
          "**Le bon modèle mental est : « le LLM est un stagiaire non fiable avec les clés que vous lui donnez ».** Les capacités viennent des serveurs et des surfaces que vous allow-listez — pas du jugement du modèle.",
        items: [
          "**Limitez le serveur filesystem à un répertoire.** Jamais `~` ni `/`. Choisissez un dossier `agent-workspace/` et mettez-y des copies des fichiers que l'agent doit toucher. Si l'agent dérape, le pire cas est un dossier.",
          '**Faites tourner les serveurs de base de données en lecture seule par défaut.** Un rôle dédié `agent_ro` avec uniquement des grants `SELECT` et un statement timeout de 30 secondes élimine toute une classe d\'incidents.',
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
          { 'Couche': 'Modèle', 'Claude Desktop': 'Claude (Anthropic, cloud)', 'Ollama local + Goose': 'Gemma 4, GLM-4.7, Qwen3 ou Llama 3.3 (local)' },
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
          "**Gemma 4 31B (`gemma4:31b`)** — l'entraînement tool calling de Google est best-in-class pour la taille. Tient en 32 Go de mémoire unifiée (environ 4–6 Go restent pour le contexte) ou 24 Go de VRAM en Q4_K_M. Bon raisonnement général ; un peu conservateur sur les chaînes d'appels d'outils.",
          "**GLM-4.7 Flash (`glm-4.7-flash`)** — le modèle de Zhipu a une fiabilité tool calling très forte et une fenêtre de contexte 128K d'origine. Légèrement plus lourd que Gemma 4 ; tient confortablement sur un GPU 24 Go.",
          "**Qwen3.6 27B (`qwen3.6:27b`)** — l'option Qwen la plus récente sur Ollama (environ 18–19 Go, contexte 256K, tool calling supporté). **Qwen3 32B (`qwen3:32b`)** — bien équilibré ; le 32B dense gère MCP proprement et se sent à l'aise dans une boucle d'agent longue. **Qwen3-Coder 30B (`qwen3-coder:30b`)** est le meilleur choix si votre travail d'agent est code.",
          "**Llama 3.3 70B (`llama3.3:70b`)** — le plafond le plus haut, mais le plus lourd. 64 Go+ de mémoire unifiée ou 2× 24 Go de GPUs en Q4_K_M. À utiliser seulement si votre matériel suit ; les modèles plus petits suffisent généralement.",
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
          "**Point d'attention CNIL :** une inférence locale limite les transferts de données vers des tiers, mais elle ne dispense ni d'une base légale, ni de mesures techniques et organisationnelles, ni, selon le cas, d'une analyse d'impact (AIPD). Consultez les recommandations actuelles de la CNIL sur l'IA avant de traiter des données sensibles (santé, juridique, finance).",
          "**Cabinets et PME francophones :** expertise comptable, notariat, cabinets médicaux, ingénierie, RH — partout où des données client, patient ou salarié ne peuvent pas partir vers OpenAI, Anthropic ou Google. Un Mac Apple Silicon avec assez de mémoire unifiée ou un PC workstation avec RTX 4090 fait tourner un modèle 27B–32B qui résume des dossiers, vérifie des contrats ou teste du code contre des bases internes.",
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
          "**Erreur 3 : laisser le serveur de base en lecture/écriture.** Une requête `DELETE` rédigée par un agent sûr de lui sur une vraie table est exactement l'incident qu'on évite ici. Faites de `agent_ro` votre défaut ; lancez un rôle écriture séparé uniquement pour les tâches qui en ont explicitement besoin, et seulement pour leur durée.",
          "**Erreur 4 : auto-approuver chaque outil.** Le bouton « tout approuver » est pratique et dangereux. Auto-approuvez les outils de lecture (`read_file`, `list_directory`, `query`) ; exigez toujours une approbation pour les outils écriture/shell/PR.",
          "**Erreur 5 : un modèle 32K contexte pour du travail navigateur multi-étapes.** Le contenu des pages est volumineux ; un agent qui navigue trois pages peut épuiser 32K tokens avant même de raisonner. Utilisez un modèle 128K pour les tâches navigateur lourdes.",
          "**Erreur 6 : supposer que l'agent a du jugement.** Il n'en a pas. Le modèle n'a aucun concept de « c'est la base de production » ou « ce PR va déployer ». Les permissions sont votre seule barrière.",
          "**Erreur 7 : installer tous les serveurs de référence dès le départ.** Plus d'outils = plus gros system prompt = sélection d'outil plus lente et moins fiable. Commencez par `filesystem`. Ajoutez les autres seulement quand vous avez un workflow qui les justifie.",
          "**Erreur 8 : installer des serveurs de référence archivés issus de vieux tutoriels.** Les paquets npm `@modelcontextprotocol/server-postgres`, `-puppeteer` et `-github` sont marqués « no longer supported » et le serveur SQLite est archivé. Certains anciens guides citent aussi des paquets npm qui n'existent pas (`server-sqlite`, `server-playwright`). Utilisez les serveurs maintenus cités plus haut.",
          "**Erreur 9 : mettre la configuration MCP dans Ollama.** Ollama n'a aucun réglage MCP. Les serveurs se configurent dans le client (`extensions` de Goose, réglages MCP de Cline ou de Continue.dev).",
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Spécification Model Context Protocol](https://modelcontextprotocol.io/) — Spécification officielle, schéma JSON-RPC, définitions de transport et de cycle de vie, y compris le changelog 2026-07-28.',
          '[Dépôt GitHub modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Les serveurs de référence maintenus (filesystem, git, fetch, memory et d\'autres) et la liste des serveurs archivés.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — Serveur MCP officiel de GitHub, installation Docker et binaire.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Serveur MCP Playwright et ses outils de navigateur.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — Serveur MCP Postgres avec mode d\'accès restreint (lecture seule).',
          "[Documentation de Goose](https://goose-docs.ai/docs/getting-started/installation) — Installation CLI, configuration du provider Ollama, syntaxe de configuration des extensions (serveurs MCP).",
          "[Bibliothèque de modèles Ollama](https://ollama.com/library) — Modèles locaux disponibles, indicateurs de support tool calling et niveaux de quantification référencés dans ce guide.",
          '[Dépôt GitHub Cline](https://github.com/cline/cline) — Implémentation du client MCP pour VS Code, panneau MCP servers.',
          '[Documentation Continue.dev](https://docs.continue.dev/) — Référence du bloc de configuration `mcpServers` pour le client Continue.dev.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Qu\'est-ce que MCP et pourquoi est-ce important pour l\'IA locale ?',
            a: "Model Context Protocol (MCP) est un protocole ouvert JSON-RPC 2.0 qui permet à un client (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) de connecter un modèle de langage à des serveurs d'outils de manière uniforme. C'est important pour l'IA locale parce que cela standardise la couche qui transforme un modèle de chat en agent — écrivez un serveur d'outils une fois, utilisez-le sous n'importe quel client et n'importe quel modèle, y compris un modèle Ollama local. Sans MCP, chaque projet réinvente le tooling fichier/base/navigateur contre son propre client.",
          },
          {
            q: 'MCP fonctionne-t-il sans Claude Desktop ?',
            a: "Oui. Le protocole est ouvert et entièrement indépendant de Claude Desktop. Goose, Cline, Continue.dev et LM Studio livrent tous des implémentations client MCP qui fonctionnent avec des modèles Ollama locaux. Les serveurs maintenus (filesystem, Postgres, Playwright, GitHub) tournent sans modification sous n'importe quel client conforme.",
          },
          {
            q: 'Quels modèles locaux supportent MCP le mieux ?',
            a: "Les choix les plus fiables sont Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B ou Qwen3 32B (ou Qwen3-Coder 30B pour le code) et Llama 3.3 70B. Tous ont un entraînement tool calling explicite et émettent du JSON function calling propre que les clients MCP peuvent router. Les modèles sous 7B (et la plupart des modèles généralistes sans fine-tuning tool calling) produisent régulièrement des appels malformés.",
          },
          {
            q: 'MCP est-il sûr — l\'agent peut-il supprimer mes fichiers ?',
            a: "Il le peut si vous le laissez faire. La sécurité vient de la configuration des serveurs, pas du protocole. Le serveur filesystem n'opère que dans les chemins que vous allow-listez — limitez-le à un répertoire `agent-workspace` dédié. Le serveur de base tourne en lecture seule si vous utilisez le mode restreint et un rôle SELECT-only. Exigez toujours une approbation explicite pour les outils écriture, shell et PR ; auto-approuvez seulement les opérations de lecture. Le journal d'audit montre exactement ce que l'agent a fait après coup.",
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
            a: "Oui, via des serveurs spécifiques. Le serveur navigateur (Playwright MCP) pilote un vrai navigateur qui fait les requêtes vers lesquelles le modèle navigue. Plusieurs serveurs tiers exposent des outils `http_get`/`http_post` plus directement. Les serveurs filesystem et base de données ne font pas de requêtes réseau ; ils opèrent uniquement sur des ressources locales.",
          },
          {
            q: 'MCP fonctionne-t-il nativement avec Ollama ou ai-je besoin d\'un wrapper ?',
            a: "Ollama lui-même ne parle pas MCP — il sert une API chat compatible OpenAI. Vous avez besoin d'un client (Goose, Cline, Continue.dev, LM Studio) pour faire le pont entre l'API chat d'Ollama et les serveurs MCP. Le client route les appels d'outils du modèle vers le bon serveur MCP et réinjecte les résultats dans la conversation. Du point de vue utilisateur, il n'y a pas de configuration au-delà de l'installation du client et de son pointage vers Ollama.",
          },
          {
            q: 'Quelle est la différence entre MCP et function calling ?',
            a: "Le function calling, c'est le LLM qui émet du JSON structuré nommant un outil et ses arguments — c'est une capacité du modèle. MCP est le protocole qui permet aux serveurs d'outils et aux clients de décrire, découvrir, invoquer et retourner ces outils à travers les processus — c'est une couche d'interop. Ils coopèrent : le client convertit les définitions d'outils MCP au format function calling du modèle, le modèle émet un function call, le client mappe l'appel vers un serveur MCP, et le serveur l'exécute. Sans MCP vous pouvez toujours faire du function calling ; vous réimplémentez les handlers filesystem/base/navigateur par projet. Avec MCP, les mêmes serveurs fonctionnent sous n'importe quel client.",
          },
          {
            q: 'Comment ajouter un serveur MCP à Ollama ?',
            a: "Vous ne l'ajoutez pas à Ollama — Ollama n'a aucun réglage MCP. Vous ajoutez le serveur dans le client placé devant Ollama. Dans Goose, lancez `goose configure`, choisissez Add Extension, puis Command-line Extension, et saisissez la commande du serveur (par exemple `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`) ; pour un test rapide, utilisez `goose session --with-extension \"<command>\"`. Cline et Continue.dev ont leurs propres réglages MCP. Assurez-vous qu'Ollama exécute un modèle compatible tool calling avec une fenêtre de contexte d'au moins 32K.",
          },
          {
            q: 'Peut-on utiliser Claude Desktop avec des modèles Ollama ?',
            a: "Pas directement. Claude Desktop s'adresse aux modèles cloud d'Anthropic : il n'exécute donc pas de modèle Ollama. Ce qui se transpose depuis Claude Desktop, c'est l'écosystème de serveurs MCP : les mêmes serveurs fonctionnent avec un client MCP qui supporte Ollama, comme Goose, Cline, Continue.dev ou LM Studio. C'est l'équivalent local décrit dans ce guide.",
          },
          {
            q: 'Quels serveurs MCP officiels sont archivés, et par quoi les remplacer ?',
            a: "Les serveurs de référence pour SQLite, PostgreSQL, Puppeteer et GitHub (entre autres) ont été déplacés vers le dépôt `servers-archived` et ne sont plus maintenus ; leurs paquets npm (lorsqu'ils existent) sont marqués « no longer supported » et ne reçoivent aucun correctif de sécurité. Remplaçants maintenus : `github/github-mcp-server`, le serveur officiel de GitHub, pour GitHub ; `@playwright/mcp` de Microsoft pour l'automatisation du navigateur ; et `postgres-mcp` (Crystal DBA) en mode restreint pour Postgres. Pour SQLite, il n'existe pas de serveur officiel maintenu : utilisez une copie du fichier avec le serveur archivé ou chargez les données dans Postgres. Le serveur filesystem reste un serveur de référence activement maintenu.",
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          "[Meilleurs modèles locaux pour tool calling 2026](/fr/power-local-llm/best-local-models-tool-calling-2026) — benchmarks tête-à-tête pour les modèles recommandés ci-dessus (Gemma 4, GLM-4.7, Qwen3, Llama 3.3).",
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
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-ja.webp',
    title: 'Ollama MCP 設定 2026：ローカルモデルをファイル・データベース・API につなぐ MCPサーバー入門',
    seoTitle: 'Ollama MCP 設定 2026：MCPサーバー接続ガイド',
    intro:
      'Model Context Protocol (MCP) は、ローカル Ollama モデルとマシンの他の部分をつなぐ「足りない層」です。設定ファイル 1 つと tool calling 対応モデルがあれば、同じエージェントが Postgres データベースを照会し、サンドボックス化されたディレクトリでファイルを読み書きし、ヘッドレスブラウザを操作し、GitHub のプルリクエストを開けます。モデルと MCPサーバーはノート PC 上で動き、ネットワークに出るのはブラウザサーバーと GitHub サーバーだけです。Ollama 自体は MCP を話さないため、本ガイドでは Goose というクライアントで橋渡しします。現行の Goose ドキュメントに沿ったインストール手順と設定、今もメンテナンスされている MCPサーバー、そしてモデルを信頼しない前提のセキュリティモデルを解説します。',
    metaDescription:
      'Ollama で MCPサーバーを設定する方法。Goose でローカルモデルをファイル・Postgres・ブラウザ・GitHub に接続。動作する設定例と安全な権限設計を解説。',
    twitterDescription:
      'Ollama は MCP を話しません — クライアントが話します。動作する Goose の設定、入れるべきメンテナンス中の MCPサーバー（と避けるべきアーカイブ済みサーバー）、モデルを信頼しないセキュリティ設計。',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'ollama mcp 設定',
      'ollama mcp',
      'mcp ollama',
      'ollama mcpサーバー',
      'mcpサーバー 追加 方法',
      'model context protocol ローカル',
      'ローカル ai エージェント mcp',
      'goose ollama',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) は、ローカル Ollama モデルがツールを呼び出すための仕組みです — ファイルを読む、SQL クエリを実行する、Web リンクをクリックする、プルリクエストを開く — すべて標準 JSON-RPC インターフェース経由で、MCP 互換クライアント（Goose、Cline、Continue.dev、LM Studio）が共通に話します。プロトコルはオープン、ここで使う MCPサーバーはオープンソースで、Claude Desktop もクラウドアカウントも必要ありません。Ollama を起動し、MCP クライアントを 1 つ入れ、使いたいサーバーを記述した `mcp.json` 形式の設定を置けば、tool calling 対応モデル（Gemma 4、GLM-4.7、Qwen3.6、Qwen3、Llama 3.3）が、あなたの管理する権限のもとでマシン上で動作するエージェントになります。鍵となるのはセキュリティモデルです：書き込み系ツールを自動承認しない、ファイルシステムアクセスを単一ディレクトリに限定する、データベースサーバーは既定で read-only にする。**',
    quickAnswerTop: {
      ja: {
        question: 'MCP と Ollama でローカル AI エージェントは動かせますか？',
        answer:
          'はい — そして設定は午後 1 回で終わる規模になりました。tool calling 対応モデル（Gemma 4、GLM-4.7、Qwen3.6、Qwen3 または Llama 3.3 70B）で Ollama を起動し、MCP 対応クライアントを入れます（Goose が最も直接的な CLI で、Cline、Continue.dev、LM Studio も MCP クライアントです）。そのうえで必要な機能に応じて MCPサーバーを追加します — ファイル用に `filesystem`、データベース用に Postgres サーバー、ブラウザ自動化用に Playwright MCP、リポジトリ管理用に GitHub 公式サーバー。Ollama 自体に MCP の設定項目はなく、サーバーはクライアント側で追加します。プロトコルは Claude Desktop と同じで、違いはモデルとクライアントだけです。安全策：filesystem サーバーを単一ディレクトリに限定、データベースサーバーは既定で read-only、書き込みやシェルツールは決して自動承認しない。',
        bullets: [
          'MCP はオープンで完全にローカル動作 — Claude Desktop も Anthropic アカウントもクラウド呼び出しも不要です。',
          'Ollama がモデルを提供し、MCP クライアント（Goose、Cline、Continue.dev、LM Studio）が JSON-RPC 経由で Ollama と MCPサーバーを橋渡しします。',
          '4 種類のサーバーで実用ワークフローのほぼすべてに対応：filesystem、データベース（Postgres）、ブラウザ（Playwright MCP）、GitHub。SQLite、PostgreSQL、Puppeteer、GitHub の旧リファレンスサーバーはアーカイブ済みで、メンテナンスされていません。',
          'tool call の信頼性はモデル特性：Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B はクリーンに動作します。7B 未満のモデルは tool call の形式不正を頻発します。',
          'セキュリティモデル：filesystem は 1 ディレクトリ、データベースサーバーは read-only、書き込みやシェルツールは明示的承認の後ろに。',
          'コスト：API 費用は 0 円、ただしトークンはローカルで消費 — エージェントループはトークン消費が多いため、32K+ コンテキストモデルと実用速度で動かせるマシンを用意してください。',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'クイックファクト', anchor: '#quick-facts' },
      { label: 'MCP が解放するもの', anchor: '#what-mcp-unlocks' },
      { label: 'MCPサーバーの比較', anchor: '#server-comparison' },
      { label: 'アーキテクチャ：構成要素のつながり', anchor: '#architecture' },
      { label: 'MCP 設定：Ollama + Goose を 15 分で', anchor: '#setup' },
      { label: 'Filesystem サーバー', anchor: '#filesystem-server' },
      { label: 'データベースサーバー（Postgres、SQLite）', anchor: '#database-server' },
      { label: 'ブラウザサーバー（Playwright）', anchor: '#browser-server' },
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
      'このスライドデッキは以下を扱います：MCP がローカル Ollama モデルをデータベース照会・ファイル読み書き・ブラウザ操作・PR 作成が可能なエージェントに変える仕組み、4 種類のサーバー（filesystem、データベース、ブラウザ、GitHub）のセットアップ難易度とリスク評価、Goose を使った 6 ステップの MCP 設定、LLM を信頼しないセキュリティモデル、Claude Desktop との直接比較。ローカル MCP エージェントリファレンスカードとして PDF をダウンロードしてください。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP はツール用の JSON-RPC 2.0 プロトコルです。** モデルは（クライアント経由で）1 つ以上の MCPサーバーに接続します。各サーバーは Tools（呼び出せる関数）、Resources（読み取り可能なデータ）、Prompts（テンプレート）を公開します。クライアントが Claude Desktop、Goose、Cline、Continue.dev、LM Studio のいずれであっても wire format は同一です。',
          '**Ollama は MCP を直接話さない — MCP クライアントが Ollama をラップします。** Goose（オープンソース、元は Block 発）はネイティブ Ollama 対応を持つ最もシンプルな CLI です。Cline、Continue.dev、LM Studio も MCP クライアントです。サーバーは Ollama ではなくクライアント側で追加します。',
          '**4 種類のサーバーが大半のユースケースを網羅：** `filesystem`（サンドボックス化されたディレクトリの読み書き、今もメンテナンスされているリファレンスサーバー）、データベースサーバー（制限モードの Postgres）、`@playwright/mcp`（ブラウザ操作）、GitHub 公式の `github-mcp-server`（personal access token を使った repo と PR の管理）。SQLite、PostgreSQL、Puppeteer、GitHub のリファレンスサーバーはアーカイブ済みで、修正は提供されません。',
          '**tool call の信頼性はモデルサイズと学習に比例します。** Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B は Q4_K_M で MCP をクリーンに処理します。7B 未満のモデルは形式不正な tool call を頻繁に出してループを止めます。',
          '**セキュリティモデルはモデルを信頼しない前提です。** filesystem サーバーは単一ディレクトリに限定、データベースサーバーは read-only ロールで運用、`execute_command` や `write_file` は決して自動承認しない、長時間セッション後は監査ログを確認する。',
          '**ローカル MCP vs Claude Desktop：** プロトコルもサーバーエコシステムも同一です。ローカルスタックはクラウドモデルをオフラインモデルに置き換え — プライバシー、トークン課金なし、レート制限なしと引き換えに、やや低い知能とセキュリティ設定の自己責任を負います。',
          '**API 費用は 0 円ですが、トークンは実コストです。** エージェントループは多段タスク 1 件で 30K–80K トークンを消費することがあります。最低でも 32K コンテキストモデル、128K あれば余裕があります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'クイックファクト',
        items: [
          '**プロトコル：** JSON-RPC 2.0 を stdio（ローカルサブプロセス）または Streamable HTTP（リモート）で通信。従来の HTTP+SSE transport は非推奨です。ローカルエージェントはほぼ stdio のみ使用します。現行の仕様リビジョンは 2026-07-28 です。',
          '**起源：** Anthropic がオープン仕様として作成（modelcontextprotocol.io）。`modelcontextprotocol/servers` で今もメンテナンスされているリファレンスサーバーはごく一部（filesystem、git、fetch、memory など）で、SQLite、PostgreSQL、Puppeteer、GitHub は `servers-archived` に移されました。現在は各ベンダーが自社のサーバーを提供しています。',
          '**ローカルクライアント：** Goose（オープンソース、リポジトリは `aaif-goose/goose`）、Cline（VS Code 拡張）、Continue.dev（VS Code/JetBrains）、LM Studio（デスクトップアプリ）、加えて複数の CLI ツール。',
          '**互換 Ollama モデル：** ネイティブ tool call 学習を持つすべてのモデル。例：Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。',
          '**サーバー transport の既定：** ローカルプロセスは stdio；複数マシンや複数エージェント間でサーバーを共有する場合のみ Streamable HTTP。',
          '**設定はクライアント側にあります：** Goose は `~/.config/goose/config.yaml` の `extensions` ブロック（または `goose configure`）を読み、Cline と Continue.dev はそれぞれ独自の MCP 設定を持ちます。考え方はどれも同じ：サーバー名、command、args、env vars。',
          '**Claude Desktop 不要。** プロトコルはオープンで Claude Desktop から独立しており、ここで使うサーバーはオープンソース（ライセンスは各自確認してください）で、準拠する任意のクライアントで動作します。',
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
          '**「Hacker News のフロントページを開いて、AI 関連トップ 3 記事を見つけて要約し、私の reading list に追記してください」** — `playwright` サーバーがブラウザを操作し、モデルが抽出と要約、`filesystem` が追記します。',
          '**「私の fork に対して `chore: bump deps` というタイトルのドラフト PR を開き、失敗中の CI run を本文にリンクしてください」** — `github` サーバーが PR を作成、run を取得、本文にリンクを書き込みます。',
          '**「`events.db` の最新 100 行を見て、新しいエラースパイクの原因になっているユーザー ID を教えてください」** — データベースサーバーがデータのコピーを照会、モデルが推論、回答をチャットパネルで読みます。',
          'いずれも以前はクラウドモデルとホストツール、または手書きスクリプトを必要とした「文 → アクション」ワークフローです。MCP は同じサーバーを複数クライアント間で、同じモデルを複数サーバー間で再利用できる層です。',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: '最もよく使われる 4 つの MCPサーバーの比較',
        content:
          '下記のサーバーは「ローカルモデルに何か実際の作業をしてほしい」というロングテールをカバーします。すべてオープンソースで、MCP クライアントが起動するローカルサブプロセス（または Docker コンテナ）として動作します。インストール前にメンテナンス状況を確認してください。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'まず filesystem サーバーから（5 分、低リスク）、データ作業にデータベースサーバーを追加、必要が生じたらブラウザサーバー、マシン上のモデルを信頼できるようになったら GitHub を追加してください。',
          },
          {
            type: 'plain-terms',
            text: 'ローカルエージェントにさせたい作業の大半をこの 4 つで処理できます。filesystem サーバーは選んだフォルダ内でファイルを読み書きします。データベースサーバーは Postgres に対してクエリを実行します。ブラウザサーバーは実際のブラウザウィンドウを操作するため、JavaScript を必要とするページもモデルが読めます。GitHub サーバーは自分のリポジトリで issue や PR を開きます。ほとんどは 1 コマンド（npx、uvx、Docker）で起動し、自分のマシン上で動作します。必要な場合を除いてインターネットには出ません（ブラウザと GitHub サーバーは出ますが、filesystem とデータベースサーバーは出ません）。',
          },
        ],
        columns: ['MCPサーバー', '可能になること', 'セットアップ難度', 'リスクレベル', '適した用途'],
        rows: [
          { 'MCPサーバー': 'Filesystem（リファレンス）', '可能になること': 'サンドボックス化されたディレクトリでのファイル読み書き', 'セットアップ難度': '簡単（パス 1 つを allow-list）', 'リスクレベル': '中 — 範囲を厳しく絞ること', '適した用途': '個人の自動化、ノート、リポジトリ要約' },
          { 'MCPサーバー': 'SQLite（アーカイブ済み）', '可能になること': 'ローカル SQLite データベースファイルへのクエリ', 'セットアップ難度': '簡単、ただしメンテナンス終了', 'リスクレベル': '中 — 修正なし、ファイルのコピーを使う', '適した用途': '使い捨てのデータ探索のみ' },
          { 'MCPサーバー': 'Postgres（postgres-mcp）', '可能になること': '制限（read-only）モードでの Postgres クエリ', 'セットアップ難度': '中（ロール + URI）', 'リスクレベル': '中 — 制限モードと read-only ロール', '適した用途': 'データ探索、レポーティング、BI プロトタイプ' },
          { 'MCPサーバー': 'Playwright（@playwright/mcp）', '可能になること': 'アクセシビリティスナップショットによるブラウジング、スクレイピング、フォーム入力', 'セットアップ難度': '中（ブラウザバイナリ、レイテンシ）', 'リスクレベル': '高 — フォーム送信や任意のクリックが可能', '適した用途': 'リサーチ、スクレイピング、回帰テスト' },
          { 'MCPサーバー': 'GitHub（公式）', '可能になること': 'リポジトリ一覧、ファイル読み取り、issue と PR の作成', 'セットアップ難度': '中（Docker + 環境変数の PAT）', 'リスクレベル': '中 — トークンを特定 repo に絞る', '適した用途': '開発ワークフロー、トリアージ、PR ドラフト' },
          { 'MCPサーバー': 'Custom', '可能になること': 'JSON-RPC ツールとして表現できる任意のもの', 'セットアップ難度': '難（自分でサーバーを書く）', 'リスクレベル': '可変', '適した用途': '社内 API、ニッチなシステム、glue code' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'SQLite、PostgreSQL、Puppeteer、GitHub のリファレンスサーバーは `servers-archived` リポジトリに移され、メンテナンスされていません。PostgreSQL、Puppeteer、GitHub の npm パッケージは「no longer supported」と表示されており、SQLite サーバー（Python パッケージ、最終リリースは 2025 年 4 月）にも修正は提供されません。この表のメンテナンスされているサーバーを使い、認証情報が必要なサーバーはコードを読んでから導入してください。',
          },
        ],
      },
      architecture: {
        id: 'architecture',
        title: '構成要素のつながり',
        content:
          '**3 つのプロセス、共有プロトコル 1 つ。** モデルは Ollama 内、クライアントが MCP を話し、各サーバーが小さなツールセットを公開します。tool call はクライアント → サーバーに飛び、ローカル実行され、JSON が返ります。',
        items: [
          '**Ollama** はバックグラウンドサービスとして `127.0.0.1:11434` で動作し、OpenAI 互換 API でモデルを提供します。MCP のことは知りません — chat completion に応答し、モデルが要求すれば tool call を出すだけです。',
          '**MCP クライアント**（Goose、Cline、Continue.dev、LM Studio）が橋渡し役です。モデルについては Ollama と、ツールについては MCPサーバーと話します。モデルが tool call を出すと、クライアントが正しいサーバーへルーティングし、結果を取得し、会話に戻します。',
          '**MCPサーバー** は機能ごとに独立したサブプロセスです。stdio で JSON-RPC 2.0 を話します。各サーバーが Tools、Resources、Prompts を公開し、クライアントがそれらを統合してモデルに見せます。',
          '**stdio transport ですべてがローカルに留まります。** サーバーはクライアントによって起動され、stdin/stdout で通信し、クライアント終了時に終了します。サーバー自身が接続を開かない限り（ブラウザサーバーは開きます、filesystem とデータベースサーバーは開きません）、ネットワーク経由になりません。',
          '**モデルはフラットなツールリストを見ます。** モデル視点ではサーバーは存在せず、`filesystem.read_file`、`playwright.browser_navigate`、`github.create_pull_request` のようなツール名のリストがあるだけです。クライアントがルーティングを処理します。',
        ],
        callouts: [
          {
            type: 'note',
            text: 'アーキテクチャは Claude Desktop と同一です。違いはモデル（Claude の代わりにローカル Ollama モデル）とクライアント（Claude Desktop の代わりに Goose/Cline/Continue.dev/LM Studio）です。MCPサーバーは同じサーバー — 今日 Claude Desktop で動かしている filesystem サーバーは、明日 Goose 配下で変更なく動作します。',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-ja.svg',
        imageCaption:
          'MCPアーキテクチャ図：Ollamaがローカルモデルを提供し、MCPクライアント（Goose、Cline、Continue.dev、LM Studio）がstdio経由のJSON-RPC 2.0でMCPサーバーに接続し、ファイルシステム・データベース・ブラウザ・GitHubの4種類のサーバーが実際のツールを公開する。',
      },
      setup: {
        id: 'setup',
        title: 'MCP 設定：Ollama + Goose を 15 分で',
        content:
          '**Goose は動作するローカル MCP エージェントへの最短ルートです。** オープンソースのエージェント（元は Block 発、現在は `aaif-goose/goose` で開発）で、CLI、ネイティブな [Ollama](https://ollama.com/) 対応、対話型チャットインターフェース、すべての [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) サーバー設定を 1 ファイルに集約する仕組みを備えています。Continue.dev、Cline、LM Studio でも動作しますが、初回セットアップのコストは Goose が最も低いです。',
        items: [
          '**Step 1 — Ollama をインストール。** [ollama.com/download](https://ollama.com/)（macOS/Windows/Linux）からダウンロード。`curl http://127.0.0.1:11434/api/tags` でサービスが動作していることを確認してください。',
          '**Step 2 — tool calling モデルを pull。** Gemma 4 31B（`gemma4:31b`）、GLM-4.7 Flash（`glm-4.7-flash`）、Qwen3.6 27B（`qwen3.6:27b`）、Qwen3 32B（`qwen3:32b`）または Llama 3.3 70B（`llama3.3:70b`）から選択。24 GB VRAM なら 26B–32B を Q4_K_M で快適に動かせます。32 GB unified memory の Mac でも収まりますが、コンテキスト用に残るのは約 4–6 GB です（macOS に 8 GB 必要）。',
          '**Step 3 — Goose をインストール。** macOS または Linux では `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`（または `brew install block-goose-cli`）を実行します。Windows では Goose ドキュメントの PowerShell インストーラか WSL を使ってください。CLI は `goose` としてインストールされます。',
          '**Step 4 — Ollama をプロバイダーとして設定。** `goose configure` を実行、`ollama` をプロバイダーに選択、モデルを pull したものに、host を `http://127.0.0.1:11434` に設定（空欄でも localhost:11434 になります）。Goose は `~/.config/goose/config.yaml` に書き込みます。Ollama の既定コンテキストウィンドウは小さいことがあり（Goose のドキュメントでは 4096 トークンとされています）、その場合 Goose が extension を無視することがあります — `OLLAMA_CONTEXT_LENGTH=32768`（またはそれ以上）を付けて Ollama を起動してください。',
          '**Step 5 — filesystem の MCPサーバーを追加。** `goose configure` を実行して Add Extension、続いて Command-line Extension を選ぶか、`~/.config/goose/config.yaml` に `extensions` ブロックを追加します（下に設定例）。一度だけ試すなら `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` でそのセッションに限って有効にできます。`goose session` を開始し、テストディレクトリのファイル一覧を尋ねてください。最初のターンでサーバー接続が確認できます。',
          '**Step 6 — 実際のタスクで検証。** `goose session` を試し、「`notes/` 内の各 Markdown ファイルについて、タイトルと単語数の一覧を作って結果を `notes/index.md` に書いてください」と尋ねます。エージェントが読み、要約し、書き戻せばループは動作しています。',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'すでに Cline や Continue.dev を使っているなら Goose をスキップしてそちらを使ってください — どちらも MCP クライアントです。それぞれ独自の MCP 設定を持つので（正確なファイルは各ドキュメントで確認してください）、モデルとサーバーは同じで、変わるのはホストアプリとその設定形式だけです。',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-ja.svg',
        imageCaption:
          'OllamaとGooseの6ステップセットアップフロー：Ollamaをインストールし、gemma4:31bなどツール呼び出し対応モデルを取得し、公式スクリプトでGooseをインストールし、プロバイダーを設定し、ファイルシステムMCPサーバーを追加し、約15分で実タスクにより確認する。',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem サーバー：サンドボックス化されたディレクトリの読み書き',
        content:
          '**filesystem サーバーは最初に入れるべきサーバーで、安全に範囲を絞るのも最も簡単です。** `read_file`、`write_file`、`list_directory`、`move_file`、`search_files`、`create_directory` を公開し、すべて allow-list された 1 つ以上のパスに制限されます。',
        items: [
          '**インストール：** リファレンスサーバーは `@modelcontextprotocol/server-filesystem`、`npx -y` 経由で実行（グローバルインストール不要、Node.js が必要）。今もメンテナンスされているリファレンスサーバーの 1 つです。Goose、Cline、Continue.dev はすべて設定ブロックから自動起動します。',
          '**パスを allow-list：** サーバーは 1 つ以上のディレクトリ引数を受け取り、それ以外の場所での操作を拒否します。常に明示的で範囲の狭いパスを渡してください — `~` や `/` は絶対に避けてください。',
          '**公開ツール：** `read_file`、`read_multiple_files`、`write_file`、`edit_file`（行ベースの置換）、`list_directory`、`search_files`、`move_file`、`create_directory`、`directory_tree`。モデルからは `filesystem.read_file` のように見えます。',
          '**便利機能：** `directory_tree` は JSON ツリーを返し、特定ファイルを読む前にモデルが構造を把握するのに最適です。`search_files` は grep のような再帰検索を行います。',
          '**リスク面：** サーバーは allow-list を尊重しますが、リスト内では完全な読み書き権限を持ちます。allow-list を唯一のバリアと捉え、ホームフォルダではなく専用 workspace ディレクトリを選んでください。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
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
        title: 'データベースサーバー：Postgres（と SQLite）を安全に照会する',
        content:
          '**データベースサーバーはモデルを実データで質問に答えられるジュニアアナリストに変えます — read-only に保つことが前提です。** SQLite と PostgreSQL の旧リファレンスサーバーはアーカイブ済みなので、メンテナンスされている Postgres サーバーを使い、SQLite は慎重に扱ってください。',
        items: [
          '**Postgres：`postgres-mcp`（Crystal DBA、MIT ライセンス）** は read-only モードを備えた選択肢です（PyPI の最新リリースは 2025 年 5 月なので、頼る前にリポジトリの活動状況を確認してください）。`uvx postgres-mcp --access-mode=restricted`（または `pipx install postgres-mcp`、Docker イメージ）で起動し、接続 URI は `DATABASE_URI` 環境変数で渡します。制限モードでは read-only トランザクションとクエリの時間制限が適用され、非制限モードは開発専用です。',
          '**専用の read-only ロールも併用してください。** 制限モードが 1 つ目のバリア、データベースロールが 2 つ目です。SELECT のみの権限を持つ `agent_ro` ロールを作成し、そのロールの接続文字列を使います。',
          '**SQLite：リファレンスサーバーはアーカイブ済みです。** Python パッケージ `mcp-server-sqlite`（npm パッケージではありません。最終リリースは 2025 年 4 月）で、まだ動く可能性はありますが修正は提供されません。ファイルのコピーにだけ向け、唯一のコピーには絶対に向けないでください。あるいはデータを Postgres に読み込んでください。コミュニティ製の SQLite サーバーは、ファイルを渡す前にコードを読んでください。',
          '**スキーマ認識：** 分析的な質問の前に「テーブル一覧を出して、よく使われる 5 つを describe してください」とエージェントに頼んでください — スキーマを確認したモデルは、カラム名を推測したモデルよりはるかに精度が高くなります。',
          '**コスト：** クエリは直接データベースに飛びます。1 億行テーブルへの不適切な `SELECT *` は人間がやった場合と同じ事故です — ロールは独立した接続プールに置き、statement timeout を設定してください。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
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
        title: 'ブラウザサーバー：Playwright MCP でブラウザを操作',
        content:
          '**ブラウザサーバーは 4 つのうち最も強力で最も危険です。** 実際のブラウザを起動し、ナビゲーション、クリック、フォーム入力、スクリーンショットを公開します — つまりブラウザでできるすべてが可能で、フォーム送信も含まれます。',
        items: [
          '**使うサーバー：** Microsoft の `@playwright/mcp`（`npx @playwright/mcp@latest`）を使います。旧 `@modelcontextprotocol/server-puppeteer` は「no longer supported」と表示されており、`@modelcontextprotocol/server-playwright` という npm パッケージは存在しません。',
          '**公開ツール：** `browser_navigate`、`browser_snapshot`、`browser_click`、`browser_type`、`browser_fill_form`、`browser_evaluate`（JavaScript 実行）、`browser_take_screenshot`、`browser_tabs`、`browser_wait_for`。モデルはページを `browser_snapshot`（アクセシビリティスナップショット。Playwright MCP は操作にはスクリーンショットよりこちらを推奨）で読み、スクリーンショットは見るためだけに使います。',
          '**レイテンシ：** 実ブラウザセッションはアクションあたり 1–5 秒。多段ブラウジングは簡単に 30–60 秒、数万トークンを消費します（ページ内容が大きいため）。32K+ コンテキストウィンドウを使ってください。',
          '**要素参照：** モデルはスナップショット内の参照を使って要素をクリックします。小さいモデルはよく外しますが、27B+ tool calling モデルなら一般的なパターンを安定して扱います。タスクは絞ってください — 「この URL のタイトルと最初の段落を抽出してください」のほうが「サイトを巡回して contact ページを探してください」よりはるかに信頼できます。',
          '**良いユースケース：** リサーチ（ページを開く、要約する、ノートに追記）、回帰テスト（ナビゲート、クリック、screenshot）、自分が管理するページのフォーム入力。悪いユースケース：本番 Web 上の誤クリックが結果を伴うあらゆる作業。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'ブラウザサーバーに認証情報を絶対に渡さないでください。認証済みセッションが必要なら、事前認証されたブラウザプロファイルを渡し、高インパクトサイト（バンキング、メール、クラウドコンソール、決済フォーム）には絶対に navigate させないでください。モデルはボタンの意味を判断できません — テキストを見てクリックするだけです。コンテキストも復旧手段もないインターンと同じ扱いをしてください。',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub サーバー：ローカルモデルから repo、issue、PR を扱う',
        content:
          '**GitHub サーバーは自然言語のリポジトリ作業を API call に変換します。** 4 つの中で最も設定が簡単で、personal access token (PAT) の権限を使って範囲を厳しく絞るのも最も容易です。',
        items: [
          '**インストール：** GitHub 公式の `github/github-mcp-server` を使い、Docker イメージ（`ghcr.io/github/github-mcp-server`）から `GITHUB_PERSONAL_ACCESS_TOKEN` 環境変数に PAT を入れて実行します。旧 `@modelcontextprotocol/server-github` npm パッケージは「no longer supported」と表示されているので、新規構成では使わないでください。',
          '**公開ツール：** `search_repositories`、`get_file_contents`、`create_or_update_file`、`create_pull_request`、`list_issues`、`create_issue`、`add_issue_comment`、`merge_pull_request`、ほか多数。フルセットは大きいですが、ほとんどのタスクは 5–10 ツールで足ります。',
          '**PAT を絞る。** 特定 repo に絞った fine-grained PAT を、必要最小限の権限（閲覧は Read、PR/issue 作成は Write）で使ってください。実験的エージェントに対して `repo` 権限のクラシック PAT は使わないでください。',
          '**実例ワークフロー：** トリアージ（「直近の open issue 20 件を読んで、グルーピングしてラベル案を出してください」）、ドラフト作成（「README を読んで誤字を直す PR を開いてください」）、レポーティング（「今週 stale な PR を教えてください」）。',
          '**リスク面：** エージェントは issue や PR を作成、コメント、（書き込み権限があれば）コミットを push できます。merge 系ツールはモデルとワークフローの両方を信頼できる場合以外は無効化してください — fine-grained PAT の repo での誤マージは復旧可能ですが、すぐに気付いた場合のみです。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
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
          '**MCPサーバーの選定は依存関係選びと同様に扱ってください。** リファレンスサーバーはよくメンテされていますが、サードパーティーサーバーの多くはそうではありません。認証情報が必要なサーバーは、入れる前にコードを読んでください。',
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
          { 'レイヤー': 'モデル', 'Claude Desktop': 'Claude（Anthropic、クラウド）', 'ローカル Ollama + Goose': 'Gemma 4、GLM-4.7、Qwen3、または Llama 3.3（ローカル）' },
          { 'レイヤー': 'クライアント', 'Claude Desktop': 'Claude Desktop アプリ', 'ローカル Ollama + Goose': 'Goose、Cline、Continue.dev、または LM Studio' },
          { 'レイヤー': 'サーバー', 'Claude Desktop': '同じ MCPサーバー', 'ローカル Ollama + Goose': '同じ MCPサーバー' },
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
          '**Gemma 4 31B（`gemma4:31b`）** — Google の tool call 学習はサイズに対して best-in-class。32 GB unified memory（コンテキスト用に残るのは約 4–6 GB）または 24 GB VRAM で Q4_K_M に収まります。一般推論は良好；連鎖した tool call にはやや保守的です。',
          '**GLM-4.7 Flash（`glm-4.7-flash`）** — Zhipu のモデルは tool call 信頼性が非常に高く、out of the box で 128K コンテキストウィンドウ。Gemma 4 よりやや重め；24 GB GPU に余裕で収まります。',
          '**Qwen3.6 27B（`qwen3.6:27b`）** — Ollama で使える新しい Qwen の選択肢（約 18–19 GB、256K コンテキスト、tool calling 対応）。**Qwen3 32B（`qwen3:32b`）** — バランスが良く、dense な 32B が MCP をクリーンに処理し、長時間エージェントループでも安定します。**Qwen3-Coder 30B（`qwen3-coder:30b`）** はエージェント作業がコード形態の場合の最良の選択です。',
          '**Llama 3.3 70B（`llama3.3:70b`）** — 最高の天井ですが最も重い。Q4_K_M で 64 GB+ unified memory または 2× 24 GB GPU。ハードウェアが対応している場合のみ；通常は小さいモデルで十分です。',
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
          '**MCP** はその上に乗ります：ツールがどう記述、発見、呼び出し、返却されるかを、プロセス間で標準化します。Function calling モデル単体ではあなたの filesystem を知りませんが、MCPサーバーが filesystem 操作を提供し、クライアントがモデルの function calling API にマッピングし、モデルがそれを呼び出せるようになります。',
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
          '**日本企業のユースケース：** 法律事務所、税理士法人、医療機関、製造業の設計部門、人事 — クライアント・患者・従業員データを OpenAI、Anthropic、Google に送れない領域すべて。十分なユニファイドメモリを搭載した Apple シリコンの Mac や RTX 4090 搭載ワークステーションで 27B–32B モデルが動き、書類要約、契約レビュー、社内データベースに対するコード片の検証ができます。',
          '**東アジアのデータ越境：** 日本、シンガポール、マレーシア、韓国はそれぞれ独自のデータ residency 枠組みを持ち、APAC 全域へのクロスボーダー転送には個別の評価が必要です。ローカル推論はこの転送を完全に回避し、東アジアでの multi-region 展開時のコンプライアンス負担を取り除きます。',
          '**日本の中堅企業（中小企業）：** 大企業向けに作られたクラウド AI 契約は、中小企業にとってはコスト・契約レビュー両面でハードルが高いケースが多く、PoC が頓挫しがちです。ローカル MCP スタックは設備投資 1 回（マシン代）のみで月額課金なし、契約も社内のみで完結します。',
          '**監査と説明責任：** MCP クライアントの監査ログ（Goose、Cline、Continue.dev）は「エージェントが想定外の操作をしていないこと」を示す主たる証拠になります。WORM ストレージや、エージェント自身からは上書き不可能な Git リポジトリに保存してください。日本の監査文化との親和性は高いです。',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'ローカル MCP 設定でよくある間違い',
        items: [
          '**間違い 1：小さい汎用モデルを使う。** 7B 未満（および tool call ファインチューニングなしの 7B–13B 汎用モデルの大半）は形式不正な tool call を出します。27B+ tool call チューン済みモデルを使い、ハーネスと戦うのをやめてください。',
          '**間違い 2：ホームディレクトリを allow-list する。** 「テストだけ」のはずの `~` の allow-list は本番運用に残ります。最初から専用の `agent-workspace` を作ってください。',
          '**間違い 3：データベースサーバーを read/write モードで放置。** 自信を持ったエージェントが本番テーブルに書く `DELETE` クエリこそ、これで防げるインシデントです。`agent_ro` を既定にし、書き込みが明示的に必要なタスクのためだけに、その期間だけ別の writable ロールを立ててください。',
          '**間違い 4：すべてのツールを自動承認。** 「すべて承認」トグルは便利で危険です。読み取りツール（`read_file`、`list_directory`、`query`）は自動承認、書き込み・シェル・PR 系は常に承認を要求してください。',
          '**間違い 5：多段ブラウザ作業に 32K コンテキストモデル。** ページ内容は大きく、3 ページ巡回で推論前に 32K トークンを使い切ることがあります。ブラウザ重めのタスクには 128K コンテキストモデルを使ってください。',
          '**間違い 6：エージェントに判断力があると仮定。** ありません。モデルは「これは本番データベース」「この PR はデプロイされる」という概念を持ちません。権限が唯一のバリアです。',
          '**間違い 7：リファレンスサーバーを最初に全部入れる。** ツールが多い = system prompt が大きい = ツール選択が遅く不正確になります。`filesystem` から始めて、必要になったら他を追加してください。',
          '**間違い 8：古いチュートリアルのアーカイブ済みリファレンスサーバーを入れる。** npm パッケージ `@modelcontextprotocol/server-postgres`、`-puppeteer`、`-github` は「no longer supported」と表示されており、SQLite サーバーもアーカイブ済みです。古いガイドには、存在しない npm パッケージ（`server-sqlite`、`server-playwright`）を挙げているものもあります。上で挙げたメンテナンスされているサーバーを使ってください。',
          '**間違い 9：MCP の設定を Ollama に書こうとする。** Ollama に MCP の設定項目はありません。サーバーはクライアント側で設定します（Goose の `extensions`、Cline や Continue.dev の MCP 設定）。',
        ],
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Model Context Protocol 仕様](https://modelcontextprotocol.io/) — 公式仕様、JSON-RPC スキーマ、transport およびライフサイクル定義（2026-07-28 の変更履歴を含む）。',
          '[modelcontextprotocol/servers GitHub リポジトリ](https://github.com/modelcontextprotocol/servers) — メンテナンスされているリファレンスサーバー（filesystem、git、fetch、memory など）とアーカイブ済みサーバーの一覧。',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — GitHub 公式の MCPサーバー、Docker とバイナリのセットアップ。',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Playwright MCPサーバーとそのブラウザツール。',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — 制限（read-only）アクセスモードを持つ Postgres MCPサーバー。',
          '[Goose ドキュメント](https://goose-docs.ai/docs/getting-started/installation) — CLI インストール、Ollama プロバイダー設定、extension（MCPサーバー）の設定構文。',
          '[Ollama モデルライブラリ](https://ollama.com/library) — 利用可能なローカルモデル、tool call サポートフラグ、本ガイドで参照する量子化レベル。',
          '[Cline GitHub リポジトリ](https://github.com/cline/cline) — VS Code MCP クライアント実装、MCP サーバーパネル。',
          '[Continue.dev ドキュメント](https://docs.continue.dev/) — Continue.dev クライアント用 `mcpServers` 設定ブロックリファレンス。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'MCP とは何で、ローカル AI にとってなぜ重要ですか？',
            a: 'Model Context Protocol（MCP）はオープンな JSON-RPC 2.0 プロトコルで、クライアント（Goose、Cline、Continue.dev、LM Studio、Claude Desktop）が言語モデルとツールサーバーを統一的に接続できるようにします。ローカル AI にとって重要な理由は、chat モデルをエージェントに変える層を標準化することです — ツールサーバーを 1 度書けば、ローカル Ollama モデルを含む任意のクライアントとモデルで使えます。MCP がなければ、各プロジェクトが自前のクライアントに対してファイル/データベース/ブラウザのツールを再発明することになります。',
          },
          {
            q: 'MCP は Claude Desktop なしで動きますか？',
            a: 'はい。プロトコルはオープンで Claude Desktop からは完全に独立しています。Goose、Cline、Continue.dev、LM Studio はすべてローカル Ollama モデルで動作する MCP クライアント実装を提供しています。メンテナンスされているサーバー（filesystem、Postgres、Playwright、GitHub）は準拠する任意のクライアント配下で変更なしに動きます。',
          },
          {
            q: 'MCP に最も適したローカルモデルは何ですか？',
            a: '最も信頼できる選択肢は、Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B または Qwen3 32B（コード形態の作業なら Qwen3-Coder 30B）、Llama 3.3 70B です。いずれも明示的な tool call 学習を持ち、MCP クライアントがルーティング可能なクリーンな function calling JSON を出力します。7B 未満（および tool call ファインチューニングのない汎用モデルの大半）は形式不正な tool call を頻繁に出します。',
          },
          {
            q: 'MCP は安全ですか — エージェントがファイルを削除できますか？',
            a: '許可すれば可能です。安全性はサーバーの設定から来ており、プロトコルからではありません。filesystem サーバーは allow-list したパス内でのみ動作します — 専用の `agent-workspace` ディレクトリに絞ってください。データベースサーバーは制限モードと SELECT のみのロールを使えば read-only で動きます。書き込み、シェル、PR 系ツールには常に明示的承認を要求し、読み取り操作のみ自動承認にしてください。監査ログで事後にエージェントが何をしたか正確に確認できます。',
          },
          {
            q: '自分で MCP サーバーを書けますか？',
            a: 'はい — そして SDK が手間を減らします。公式の TypeScript と Python SDK（`@modelcontextprotocol/sdk` と `mcp`）が JSON-RPC のプラミングを処理します。JSON Schema でツールを定義しハンドラ関数を書けば、SDK が stdio で公開します。社内 API をラップする 1–2 ツールの単機能サーバーなら 50–100 行のファイル 1 つで済みます。',
          },
          {
            q: 'MCP は Windows で動きますか？',
            a: 'はい。Ollama、Goose、Cline、Continue.dev、LM Studio はすべて Windows で動きます。MCPサーバーは Node.js または Python のサブプロセスとして動作し、両ランタイムは Windows で完全にサポートされています。プラットフォーム固有の唯一の落とし穴はパス処理 — 設定でフォワードスラッシュを使うか、バックスラッシュを正しくエスケープしてください。それ以外は macOS や Linux と同じ体験です。',
          },
          {
            q: 'MCP の tool call をサンドボックスする方法は？',
            a: '3 層でリスクの大半をカバーします。第一に、各サーバーを設定レベルで狭く絞る：filesystem は 1 ディレクトリ、データベースは read-only ロール、GitHub はテスト repo に絞った fine-grained PAT。第二に、クライアントのツール単位の承認ルールを使う：read は自動承認、write は承認要求。第三に、エージェントを `git stash` 可能な workspace 内に置き、破壊的なものは git で取り消せるようにする。機密タスクではサーバーが明示的に必要とするエンドポイント以外ネットワークアクセスのないホストで実行してください。',
          },
          {
            q: 'MCP エージェントは HTTP リクエストを行えますか？',
            a: 'はい、特定のサーバー経由で。ブラウザサーバー（Playwright MCP）は実ブラウザを操作し、モデルが navigate するすべてのリクエストを行います。複数のサードパーティーサーバーが `http_get`/`http_post` ツールをより直接的に公開しています。filesystem およびデータベースサーバーはネットワークリクエストを行わず、ローカルリソースのみを操作します。',
          },
          {
            q: 'Ollama 単体で MCP は使えますか、それともラッパーが必要ですか？',
            a: 'Ollama 自体は MCP を話しません — OpenAI 互換 chat API を提供します。Ollama の chat API と MCPサーバーを橋渡しするクライアント（Goose、Cline、Continue.dev、LM Studio）が必要です。クライアントがモデルの tool call を正しい MCPサーバーへルーティングし、結果を会話に戻します。ユーザー視点ではクライアントをインストールして Ollama に向けるだけで、追加の設定は不要です。',
          },
          {
            q: 'MCP と function calling の違いは何ですか？',
            a: 'Function calling はツール名と引数を記述する構造化 JSON を LLM が出力すること — モデルの能力です。MCP はそれらのツールがプロセス間で記述、発見、呼び出し、返却される方法を定めるプロトコル — interop 層です。両者は協調します：クライアントが MCP のツール定義をモデルの function calling 形式に変換し、モデルが function call を出し、クライアントがそれを MCPサーバーへ戻し、サーバーが実行します。MCP がなくても function calling はできますが、プロジェクトごとに filesystem/database/browser のハンドラを再実装することになります。MCP があれば同じサーバーが任意のクライアントで動作します。',
          },
          {
            q: 'Ollama に MCPサーバーを追加（設定）するにはどうすればよいですか？',
            a: 'Ollama には追加しません — Ollama に MCP の設定項目はないからです。Ollama の前段にあるクライアント側でサーバーを追加します。Goose では `goose configure` を実行して Add Extension、続いて Command-line Extension を選び、サーバーのコマンド（例：`npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`）を入力します。手早く試すなら `goose session --with-extension "<command>"` が使えます。Cline と Continue.dev には独自の MCP 設定があります。Ollama では、コンテキストウィンドウが 32K 以上の tool calling モデルを動かしてください。',
          },
          {
            q: 'Claude Desktop で Ollama のモデルは使えますか？',
            a: '直接の構成としては使えません。Claude Desktop は Anthropic のクラウドモデルと通信するため、Ollama のモデルは動かせません。Claude Desktop から引き継げるのは MCPサーバーのエコシステムです：同じサーバーが、Ollama に対応した MCP クライアント（Goose、Cline、Continue.dev、LM Studio など）でも動きます。それが本ガイドで説明しているローカルでの代替構成です。',
          },
          {
            q: 'アーカイブされた公式 MCPサーバーはどれで、代わりに何を使えばよいですか？',
            a: 'SQLite、PostgreSQL、Puppeteer、GitHub（ほか）のリファレンスサーバーは `servers-archived` リポジトリに移され、メンテナンスされていません。npm パッケージ（存在するもの）は「no longer supported」と表示され、セキュリティ修正も提供されません。メンテナンスされている代替：GitHub には GitHub 公式の `github/github-mcp-server`、ブラウザ自動化には Microsoft の `@playwright/mcp`、Postgres には制限モードの `postgres-mcp`（Crystal DBA）。SQLite にはメンテナンスされている公式サーバーがないため、ファイルのコピーにアーカイブ済みサーバーを使うか、データを Postgres に読み込んでください。filesystem サーバーは引き続きメンテナンスされているリファレンスサーバーです。',
          },
          {
            q: 'ローカル MCP エージェントで METI AI ガバナンスをどう適用しますか？',
            a: '経済産業省の AI ガバナンスガイドライン 2024 は、特に金融・医療・法務などの規制業界における AI 活用に対し、データ保護、トレーサビリティ、説明責任を求めています。ローカル MCP スタックはこれら 3 つの軸すべてに直接整合します：第一に、外部データ送信が発生しないため第三者提供のリスクがなく、APPI（個人情報保護法）の負担も軽減されます。第二に、MCP クライアントの監査ログ（Goose、Cline、Continue.dev）が tool call と結果を時系列で記録し、トレーサビリティの主たる証拠になります。第三に、サーバーごとの権限設定（filesystem は 1 ディレクトリ、データベースは read-only ロール、GitHub は fine-grained PAT）が、説明責任に必要な「何が起きうるか」の境界を明確に定義します。日本の大企業の社内監査文化と整合性が高く、内部監査での説明が容易です。',
          },
          {
            q: 'ローカル MCP エージェントで日本企業のセキュリティ要件を満たせますか？',
            a: 'はい、特にデータ residency と第三者監査の観点で適合性が高いです。日本企業のセキュリティ標準（金融機関の FISC、医療機関の 3 省 2 ガイドライン、製造業の社内 ISMS）はいずれも、機密データを扱うシステムについて「外部送信の有無」「アクセス制御」「監査ログ」を中心評価項目に置いています。ローカル MCP スタックでは、十分なユニファイドメモリを搭載した Apple シリコンの Mac や RTX 4090 搭載ワークステーションでモデル、MCP クライアント、すべてのサーバーが同一マシン上で動作するため、外部送信は発生しません。アクセス制御は filesystem サーバーの allow-list、Postgres ロール、GitHub PAT の fine-grained scope で多層化できます。監査ログは MCP クライアント側で自動収集され、WORM ストレージや内部 Git リポジトリに保管できます。中堅企業（中小企業）にとっては、月額課金なしで PoC を社内完結できる点も大きな利点です。',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連資料',
        items: [
          '[2026 年のローカル tool calling 最強モデル](/ja/power-local-llm/best-local-models-tool-calling-2026) — 上記推奨モデル（Gemma 4、GLM-4.7、Qwen3、Llama 3.3）の頭ごなしベンチマーク。',
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
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-zh.webp',
    title: '通过 MCP 将 Ollama 连接到文件、数据库和 API：2026 年本地配置指南',
    seoTitle: 'Ollama MCP 配置 2026：本地模型连接文件与 API',
    intro:
      'Model Context Protocol (MCP) 是本地 Ollama 模型与你的机器其余部分之间缺失的那一层。一个配置文件加上支持 tool calling 的模型，同一个智能体即可查询 Postgres 数据库、在沙箱目录中读写文件、驱动无头浏览器、提交 GitHub Pull Request——模型和服务器都运行在你的笔记本上，只有浏览器服务器和 GitHub 服务器会访问网络。Ollama 本身不支持 MCP，因此本指南用客户端 Goose 来连接两者：安装步骤和配置与当前 Goose 文档一致，所选服务器仍在维护，安全模型也不假设你信任模型。',
    metaDescription:
      'Ollama 本身不支持 MCP，需要客户端桥接。用 Goose 把本地模型连接到文件、Postgres、浏览器和 GitHub，附可用配置、仍在维护的服务器和安全权限设置。',
    twitterDescription:
      'Ollama 本身不支持 MCP，由客户端来支持。可用的 Goose 配置、应安装的仍在维护的服务器（以及应避开的已归档服务器），还有一个不信任模型的安全设计。',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'ollama mcp 配置',
      '给 ollama 添加 mcp 服务器',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) 让本地 Ollama 模型能够调用工具——读取文件、执行 SQL 查询、点击网页链接、提交 Pull Request——通过任何 MCP 兼容客户端（Goose、Cline、Continue.dev、LM Studio）都能识别的标准 JSON-RPC 接口完成。协议开放，这里用到的服务器开源，既不需要 Claude Desktop 也不需要任何云账号。启动 Ollama，安装一个 MCP 客户端，放入一份列出所需服务器的 `mcp.json` 配置文件，支持 tool calling 的模型（Gemma 4、GLM-4.7、Qwen3.6、Qwen3、Llama 3.3）便成为运行在你机器上、由你掌控权限的智能体。关键在于安全模型：永不自动批准写入工具，将文件系统访问限定到单一目录，数据库服务器默认只读模式。**',
    quickAnswerTop: {
      zh: {
        question: '能否在本地用 MCP 和 Ollama 运行 AI 智能体？',
        answer:
          '可以——而且现在的搭建规模一个下午即可完成。用支持 tool calling 的模型（Gemma 4、GLM-4.7、Qwen3.6、Qwen3 或 Llama 3.3 70B）启动 Ollama，安装一个支持 MCP 的客户端（Goose 是最直接的 CLI；Cline、Continue.dev、LM Studio 也是 MCP 客户端），然后按需加入 MCP 服务器——文件用 `filesystem`，数据库用 Postgres 服务器，浏览器自动化用 Playwright MCP，仓库管理用 GitHub 官方服务器。Ollama 本身没有 MCP 设置：服务器要在客户端中添加。这与 Claude Desktop 使用的协议完全相同；区别仅在模型与客户端。安全要点：将 filesystem 服务器限定为单一目录，数据库默认只读，永不自动批准写入或 shell 工具。',
        bullets: [
          'MCP 协议开放且完全本地运行——不需要 Claude Desktop、不需要 Anthropic 账号、不需要任何云调用。',
          'Ollama 提供模型；MCP 客户端（Goose、Cline、Continue.dev、LM Studio）通过 JSON-RPC 在 Ollama 与 MCP 服务器之间架设桥梁。',
          '四类服务器覆盖大多数实际工作流：filesystem、数据库（Postgres）、浏览器（Playwright MCP）、GitHub。SQLite、PostgreSQL、Puppeteer 和 GitHub 的旧参考服务器已归档，不再维护。',
          'tool call 可靠性是模型属性：Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B、Qwen3 32B、Qwen3-Coder 30B 与 Llama 3.3 70B 均可干净处理 MCP；7B 以下模型经常输出格式错误的 tool call。',
          '安全模型：filesystem 限定到一个目录、数据库服务器以只读运行、所有写入或 shell 工具都置于明确授权之后。',
          '成本：API 费用为 $0，但 token 在本地消耗——智能体循环消耗 token 较多，请使用 32K+ 上下文模型并在性能足够的机器上运行。',
        ],
        updatedDate: '2026-11-02',
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
      { label: '数据库服务器（Postgres、SQLite）', anchor: '#database-server' },
      { label: '浏览器服务器（Playwright）', anchor: '#browser-server' },
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
      '幻灯片涵盖：MCP 如何将本地 Ollama 模型转变为能查询数据库、读写文件、驱动浏览器、提交 Pull Request 的智能体；四类服务器（filesystem、数据库、浏览器、GitHub）的配置难度与风险评级；使用 Goose 的 6 步配置指南；不信任 LLM 的安全模型；以及与 Claude Desktop 的直接对比。可将 PDF 下载为本地 MCP 智能体参考卡片。',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP 是面向工具的 JSON-RPC 2.0 协议。** 模型（通过客户端）连接一个或多个 MCP 服务器；每个服务器暴露 Tools（可调用函数）、Resources（可读数据）和 Prompts（模板）。无论客户端是 Claude Desktop、Goose、Cline、Continue.dev 还是 LM Studio，wire format 完全相同。',
          '**Ollama 不直接说 MCP——MCP 客户端封装 Ollama。** Goose（开源，最初来自 Block）是最简单且原生支持 Ollama 的 CLI；Cline、Continue.dev、LM Studio 也是 MCP 客户端。服务器要在客户端中添加，而不是在 Ollama 中。',
          '**四类服务器覆盖大部分使用场景：** `filesystem`（在沙箱目录中读写，仍是维护中的参考服务器）、数据库服务器（受限模式下的 Postgres）、`@playwright/mcp`（驱动浏览器）、GitHub 官方的 `github-mcp-server`（用 personal access token 管理仓库与 PR）。SQLite、PostgreSQL、Puppeteer 和 GitHub 的参考服务器已归档，不再有修复。',
          '**tool call 可靠性随模型规模与训练扩展。** Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B 在 Q4_K_M 下干净处理 MCP；7B 以下模型经常输出格式错误的 tool call 并卡住循环。',
          '**安全模型假设模型不可信。** 将 filesystem 服务器限定到单一目录、用只读角色运行数据库服务器、永不自动批准 `execute_command` 或 `write_file`、长时间会话后审查审计日志。',
          '**本地 MCP vs Claude Desktop：** 协议相同，服务器生态相同。本地栈以离线模型替换云端模型——隐私性、零 token 费用、零速率限制，代价是模型能力略低且需自行负责安全配置。',
          '**API 费用为 $0，但 token 是真实成本。** 智能体循环单次多步任务可能消耗 30K–80K token；最少使用 32K 上下文模型，128K 更宽裕。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速事实',
        items: [
          '**协议：** JSON-RPC 2.0 通过 stdio（本地子进程）或 Streamable HTTP（远程）传输。较早的 HTTP+SSE transport 已弃用。本地智能体几乎只用 stdio。当前规范版本为 2026-07-28。',
          '**来源：** 由 Anthropic 作为开放规范创建（modelcontextprotocol.io）。`modelcontextprotocol/servers` 中仍在维护的参考服务器只有少数几个（filesystem、git、fetch、memory 等）；SQLite、PostgreSQL、Puppeteer 和 GitHub 已移至 `servers-archived`。现在由各厂商发布自己的服务器。',
          '**本地客户端：** Goose（开源，仓库 `aaif-goose/goose`）、Cline（VS Code 扩展）、Continue.dev（VS Code/JetBrains）、LM Studio（桌面应用），以及多个 CLI 工具。',
          '**兼容的 Ollama 模型：** 任何具备原生 tool call 训练的模型，例如 Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B、Qwen3 32B、Qwen3-Coder 30B、Llama 3.3 70B。',
          '**默认 transport：** 本地进程用 stdio；只有需要跨机器或跨智能体共享服务器时才用 Streamable HTTP。',
          '**配置在客户端中：** Goose 读取 `~/.config/goose/config.yaml` 中的 `extensions` 块（或运行 `goose configure`）；Cline 和 Continue.dev 有各自的 MCP 设置。字段含义在各处相同：服务器名、command、args、env vars。',
          '**无需 Claude Desktop。** 协议开放，独立于 Claude Desktop；这里用到的服务器均为开源（请自行查看各自许可证），可在任何符合规范的客户端下运行。',
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
          '**「打开 Hacker News 首页，找出 AI 相关的前三篇文章，总结后追加到我的阅读清单。」** —— `playwright` 服务器驱动浏览器，模型抽取并总结，`filesystem` 追加。',
          '**「向我的 fork 提交标题为 `chore: bump deps` 的草稿 PR，并在描述中链接失败的 CI run。」** —— `github` 服务器创建 PR、获取 run、在描述中写入链接。',
          '**「查看 `events.db` 最新 100 行，告诉我哪些 user ID 是新错误尖峰的来源。」** —— 数据库服务器查询数据副本；模型推理；你在聊天面板看到答案。',
          '以上每一项都是「一句话到操作」的工作流，过去要么需要带托管工具的云端模型，要么需要手写脚本。MCP 是让你能跨客户端复用同一服务器、跨服务器复用同一模型的那一层。',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: '四个最常用 MCP 服务器对比',
        content:
          '下面的服务器覆盖「让本地模型真正做点事」的长尾需求。全部开源，作为本地子进程（或 Docker 容器）由 MCP 客户端启动。安装前请先确认维护状态。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '从 filesystem 服务器开始（5 分钟，低风险），数据工作加上数据库服务器，确有需要再加浏览器服务器，对机器上的模型建立信任后再引入 GitHub。',
          },
          {
            type: 'plain-terms',
            text: '四类服务器覆盖了你想让本地智能体做的大部分事。filesystem 服务器在你选择的文件夹内读写文件。数据库服务器对 Postgres 执行查询。浏览器服务器驱动一个真实的浏览器窗口，模型可以读取需要 JavaScript 才能渲染的页面。GitHub 服务器在你的仓库上开 issue 和 PR。它们大多通过一条命令（npx、uvx 或 Docker）启动，在你自己的机器上运行，且除非需要否则不会访问互联网：浏览器和 GitHub 服务器会，filesystem 和数据库服务器不会。',
          },
        ],
        columns: ['MCP 服务器', '能做什么', '搭建难度', '风险等级', '适用场景'],
        rows: [
          { 'MCP 服务器': 'Filesystem（参考服务器）', '能做什么': '在沙箱目录中读写文件', '搭建难度': '简单（一条 allow-list 路径）', '风险等级': '中——严格限定范围', '适用场景': '个人自动化、笔记、仓库总结' },
          { 'MCP 服务器': 'SQLite（已归档）', '能做什么': '查询本地 SQLite 数据库文件', '搭建难度': '简单，但不再维护', '风险等级': '中——无修复，请使用文件副本', '适用场景': '仅限一次性数据探索' },
          { 'MCP 服务器': 'Postgres（postgres-mcp）', '能做什么': '在受限（只读）模式下查询 Postgres', '搭建难度': '中（角色 + URI）', '风险等级': '中——受限模式加只读角色', '适用场景': '数据探索、报表、BI 原型' },
          { 'MCP 服务器': 'Playwright（@playwright/mcp）', '能做什么': '通过无障碍快照驱动浏览器完成浏览、爬取、表单填写', '搭建难度': '中（浏览器二进制、延迟）', '风险等级': '高——可提交表单、点击任意元素', '适用场景': '调研、爬取、回归测试' },
          { 'MCP 服务器': 'GitHub（官方）', '能做什么': '列出仓库、读取文件、创建 issue 与 PR', '搭建难度': '中（Docker + 环境变量传 PAT）', '风险等级': '中——将 token 限定到指定仓库', '适用场景': '开发流程、triage、PR 草稿' },
          { 'MCP 服务器': 'Custom', '能做什么': '任何可用 JSON-RPC 工具表达的功能', '搭建难度': '难（自行实现服务器）', '风险等级': '可变', '适用场景': '内部 API、小众系统、胶水代码' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'SQLite、PostgreSQL、Puppeteer 和 GitHub 的参考服务器已移至 `servers-archived` 仓库，不再维护。PostgreSQL、Puppeteer 和 GitHub 的 npm 包被标记为「no longer supported」，SQLite 服务器（Python 包，最后一次发布在 2025 年 4 月）同样没有修复。请使用表中仍在维护的服务器，并在安装任何需要凭据的服务器之前先阅读其代码。',
          },
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
          '**模型看到的是扁平工具列表。** 在模型视角中没有服务器——只有 `filesystem.read_file`、`playwright.browser_navigate`、`github.create_pull_request` 这样的工具名。客户端处理路由。',
        ],
        callouts: [
          {
            type: 'note',
            text: '架构与 Claude Desktop 完全相同。区别在于模型（本地 Ollama 模型替代 Claude）与客户端（Goose/Cline/Continue.dev/LM Studio 替代 Claude Desktop）。MCP 服务器是同一套——你今天在 Claude Desktop 下跑的 filesystem 服务器，明天在 Goose 下也能不加修改地继续跑。',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-zh.svg',
        imageCaption:
          'MCP 架构图：Ollama 提供本地模型，MCP 客户端（Goose、Cline、Continue.dev 或 LM Studio）通过 stdio 上的 JSON-RPC 2.0 与 MCP 服务器桥接，文件系统、数据库、浏览器和 GitHub 四类服务器负责暴露实际工具。',
      },
      setup: {
        id: 'setup',
        title: '配置：15 分钟搭建 Ollama + Goose',
        content:
          '**Goose 是通往可工作的本地 MCP 智能体的最短路径。** 这是一个开源智能体（最初来自 Block，现在在 `aaif-goose/goose` 开发），提供 CLI 并原生支持 [Ollama](https://ollama.com/)，有交互式聊天界面，并将所有 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) 服务器配置集中到一个文件。Continue.dev、Cline、LM Studio 也能用，但 Goose 在初次搭建上的成本最低。',
        items: [
          '**Step 1 —— 安装 Ollama。** 从 [ollama.com/download](https://ollama.com/) 下载（macOS/Windows/Linux）。用 `curl http://127.0.0.1:11434/api/tags` 确认服务运行。',
          '**Step 2 —— 拉取支持 tool calling 的模型。** 在 Gemma 4 31B (`gemma4:31b`)、GLM-4.7 Flash (`glm-4.7-flash`)、Qwen3.6 27B (`qwen3.6:27b`)、Qwen3 32B (`qwen3:32b`) 或 Llama 3.3 70B (`llama3.3:70b`) 中选一个。24 GB VRAM 在 Q4_K_M 下可从容运行 26B–32B；32 GB 统一内存的 Mac 也装得下，但留给上下文的仅约 4–6 GB（macOS 需占用 8 GB）。',
          '**Step 3 —— 安装 Goose。** 在 macOS 或 Linux 上运行 `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`（或 `brew install block-goose-cli`）。在 Windows 上使用 Goose 文档中的 PowerShell 安装程序，或使用 WSL。CLI 安装为 `goose`。',
          '**Step 4 —— 将 Ollama 配置为 provider。** 运行 `goose configure`，选择 `ollama` 作为 provider，将模型设为已拉取的那个，host 设为 `http://127.0.0.1:11434`（留空也表示 localhost:11434）。Goose 会写入 `~/.config/goose/config.yaml`。Ollama 的默认上下文窗口可能很小（Goose 文档提到 4096 token），可能导致 Goose 忽略其扩展——请用 `OLLAMA_CONTEXT_LENGTH=32768`（或更高）启动 Ollama。',
          '**Step 5 —— 加入 filesystem MCP 服务器。** 运行 `goose configure`，选择 Add Extension，再选 Command-line Extension，或在 `~/.config/goose/config.yaml` 中加入 `extensions` 块（配置示例见下）。如只想一次性测试，`goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` 仅为该会话启用它。启动 `goose session` 并请求列出测试目录的文件。第一轮即可确认服务器接入。',
          '**Step 6 —— 用真实任务验证。** 试运行 `goose session`，请求「列出 `notes/` 中每个 Markdown 文件的标题与字数，并将结果写入 `notes/index.md`」。如果智能体读、汇总、回写都成功，整个循环可工作。',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '若你已使用 Cline 或 Continue.dev，可跳过 Goose 直接使用——两者都是 MCP 客户端。各自有自己的 MCP 设置（具体文件请查看其文档）；模型与服务器都相同，变化的只是宿主应用及其配置格式。',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-zh.svg',
        imageCaption:
          'Ollama 与 Goose 的六步配置流程：安装 Ollama，拉取如 gemma4:31b 的支持工具调用的模型，用官方脚本安装 Goose，配置提供方，添加文件系统 MCP 服务器，并在约 15 分钟内用真实任务验证。',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem 服务器：在沙箱目录中读写',
        content:
          '**filesystem 服务器是首个安装的服务器，也是最容易安全限定范围的。** 它暴露 `read_file`、`write_file`、`list_directory`、`move_file`、`search_files`、`create_directory`，全部限定在一个或多个 allow-list 路径内。',
        items: [
          '**安装：** 参考服务器为 `@modelcontextprotocol/server-filesystem`，通过 `npx -y` 运行（无需全局安装，需要 Node.js）。它是仍在维护的参考服务器之一。Goose、Cline、Continue.dev 都从配置中启动它。',
          '**Allow-list 路径：** 服务器接受一个或多个目录参数，并拒绝在其外的操作。务必传入显式的、范围窄的路径——绝不要 `~` 或 `/`。',
          '**暴露的工具：** `read_file`、`read_multiple_files`、`write_file`、`edit_file`（按行替换）、`list_directory`、`search_files`、`move_file`、`create_directory`、`directory_tree`。模型看到的形式是 `filesystem.read_file` 等。',
          '**易用性：** `directory_tree` 返回 JSON 树状结构，便于模型在读取具体文件之前先了解结构。`search_files` 提供类似 grep 的递归搜索。',
          '**风险面：** 服务器尊重 allow-list，但在该列表内拥有完整读写权限。把 allow-list 视作唯一屏障，并选择专用 workspace 目录而非 home 文件夹。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
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
        title: '数据库服务器：安全查询 Postgres（和 SQLite）',
        content:
          '**数据库服务器把模型变成可以基于真实数据回答问题的初级分析师——前提是保持只读。** 最初的 SQLite 和 PostgreSQL 参考服务器已归档，因此请使用仍在维护的 Postgres 服务器，并谨慎对待 SQLite。',
        items: [
          '**Postgres：`postgres-mcp`（Crystal DBA，MIT 许可证）** 是带只读模式的选项（PyPI 上最新发布在 2025 年 5 月，依赖它之前请先查看仓库的活跃度）。用 `uvx postgres-mcp --access-mode=restricted` 运行（或 `pipx install postgres-mcp`，或使用其 Docker 镜像），并通过 `DATABASE_URI` 环境变量传入连接 URI。受限模式允许只读事务并带有查询时间限制；非受限模式仅用于开发。',
          '**同时使用专用只读角色。** 受限模式是一道屏障，数据库角色是另一道。创建一个仅有 SELECT 授权的 `agent_ro` 角色，并使用该角色的 connection string。',
          '**SQLite：参考服务器已归档。** 它是 Python 包 `mcp-server-sqlite`（不是 npm 包；最后一次发布在 2025 年 4 月），可能仍能运行，但不会再有修复。请只让它指向文件副本，绝不要指向唯一的一份文件，或者改把数据加载进 Postgres。在把文件交给任何社区 SQLite 服务器之前，先阅读其代码。',
          '**Schema 感知：** 在提分析问题前请智能体「列出表并 describe 最常用的五个」——模型在检查过 schema 之后比凭空猜列名要准确得多。',
          '**成本：** 查询直接落在数据库上。在一亿行的表上格式不当的 `SELECT *` 与人手所造成的事故同等严重——把该角色放在独立连接池并设置 statement timeout。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
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
        title: '浏览器服务器：用 Playwright MCP 驱动浏览器',
        content:
          '**浏览器服务器是四者中最强大也最危险的。** 它启动真实浏览器并暴露导航、点击、表单填写与截图——也就是说，它能完成你在浏览器里能做的一切，包括提交表单。',
        items: [
          '**选哪个服务器：** 使用微软的 `@playwright/mcp`（`npx @playwright/mcp@latest`）。旧的 `@modelcontextprotocol/server-puppeteer` 已被标记为「no longer supported」，而 npm 上并不存在 `@modelcontextprotocol/server-playwright` 这个包。',
          '**暴露的工具：** `browser_navigate`、`browser_snapshot`、`browser_click`、`browser_type`、`browser_fill_form`、`browser_evaluate`（运行 JavaScript）、`browser_take_screenshot`、`browser_tabs`、`browser_wait_for`。模型通过 `browser_snapshot`（无障碍快照，Playwright MCP 建议采取操作时优先用它而不是截图）读取页面，截图只用来查看。',
          '**延迟：** 真实浏览器会话每个动作 1–5 秒。多步浏览很容易消耗 30–60 秒以及数万 token，因为页面内容较大。请使用 32K+ 上下文窗口。',
          '**元素引用：** 模型依据快照中的引用来点击元素。小模型常选错；27B+ 的 tool calling 模型对常见模式较为可靠。把任务范围收紧——「抽取此 URL 的标题与首段」远比「在站内浏览并找到联系页」可靠。',
          '**适合场景：** 调研（打开页面、汇总、追加到笔记）、回归测试（导航、点击、截图）、在你掌控的页面上的表单填写。不适合场景：任何在真实 Web 上误点会带来后果的工作。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: '永远不要把凭据交给浏览器服务器。如果需要已登录会话，请将预先登录的浏览器配置交给智能体，且绝不让它导航到高影响站点（银行、邮箱、云控制台、支付页）。模型对按钮含义没有判断力——它看见文字就点击。请把它当作没有上下文也没有补救手段的实习生对待。',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub 服务器：从本地模型操作仓库、issue 与 PR',
        content:
          '**GitHub 服务器把自然语言的仓库工作转化为 API 调用。** 它在四者中配置最简单，并通过 personal access token (PAT) 权限实现最容易的紧密限定。',
        items: [
          '**安装：** 使用 GitHub 官方的 `github/github-mcp-server`，通过其 Docker 镜像（`ghcr.io/github/github-mcp-server`）运行，并将 PAT 放入 `GITHUB_PERSONAL_ACCESS_TOKEN` 环境变量。旧的 `@modelcontextprotocol/server-github` npm 包已被标记为「no longer supported」；新的配置不要使用它。',
          '**暴露的工具：** `search_repositories`、`get_file_contents`、`create_or_update_file`、`create_pull_request`、`list_issues`、`create_issue`、`add_issue_comment`、`merge_pull_request`，以及许多其他工具。完整工具表面较大，多数任务用 5–10 个工具即可。',
          '**收紧 PAT。** 使用限定到具体仓库的 fine-grained PAT，权限仅到必要最小（浏览给 Read，PR/issue 创建给 Write）。不要在实验性智能体上使用带 `repo` 权限的经典 PAT。',
          '**真实工作流：** triage（「读取最近 20 个 open issue，分组并起草标签」）、起草（「读 README 并提交一个修复 typo 的 PR」）、报表（「本周哪些 PR 长时间停滞」）。',
          '**风险面：** 智能体可以创建 issue 和 PR、发表评论，并在拥有写权限时推送 commit。除非同时信任模型与流程，否则禁用 merge 类工具——fine-grained PAT 仓库中的误合并仍可恢复，但要尽快发现。',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
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
          { '层级': '模型', 'Claude Desktop': 'Claude（Anthropic，云端）', '本地 Ollama + Goose': 'Gemma 4、GLM-4.7、Qwen3 或 Llama 3.3（本地）' },
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
          '**Gemma 4 31B (`gemma4:31b`)** —— Google 的 tool call 训练在同尺寸中处于业内最佳。Q4_K_M 下可装入 32 GB 统一内存（留给上下文约 4–6 GB）或 24 GB VRAM。通用推理良好；在链式 tool call 上略偏保守。',
          '**GLM-4.7 Flash (`glm-4.7-flash`)** —— 智谱的模型 tool call 可靠性极强，开箱 128K 上下文窗口。比 Gemma 4 略重；24 GB GPU 上从容运行。',
          '**Qwen3.6 27B (`qwen3.6:27b`)** —— Ollama 上较新的 Qwen 选项（约 18–19 GB，256K 上下文，支持 tool calling）。**Qwen3 32B (`qwen3:32b`)** —— 综合均衡；dense 32B 干净处理 MCP，在长智能体循环中稳定。**Qwen3-Coder 30B (`qwen3-coder:30b`)** 是代码形态智能体工作的最佳选择。',
          '**Llama 3.3 70B (`llama3.3:70b`)** —— 上限最高但最重。Q4_K_M 下需要 64 GB+ 统一内存或 2× 24 GB GPU。仅在硬件允许时使用；通常更小的模型已足够。',
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
          '**中国企业实际应用场景：** 银行（信贷材料分析）、医院（病历摘要）、律师事务所（合同审阅）、制造业（图纸辅助设计）、政府机关（公文助理）——所有「客户/患者/公民数据不能出企业」的场景都适用。内存充足的 Apple 芯片 Mac 或搭载 RTX 4090 的工作站可运行 27B–32B 模型，覆盖摘要、合规检查、内部数据库代码片段验证等核心需求。',
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
          '**错误 8：照着旧教程安装已归档的参考服务器。** npm 包 `@modelcontextprotocol/server-postgres`、`-puppeteer` 和 `-github` 已被标记为「no longer supported」，SQLite 服务器也已归档。一些较早的指南还会提到并不存在的 npm 包（`server-sqlite`、`server-playwright`）。请使用上文列出的仍在维护的服务器。',
          '**错误 9：把 MCP 配置写进 Ollama。** Ollama 没有 MCP 设置。服务器在客户端中配置（Goose 的 `extensions`，Cline 或 Continue.dev 的 MCP 设置）。',
        ],
      },
      sources: {
        id: 'sources',
        title: '参考资料',
        items: [
          '[Model Context Protocol 规范](https://modelcontextprotocol.io/) —— 官方规范、JSON-RPC schema、transport 与生命周期定义，包括 2026-07-28 的变更记录。',
          '[modelcontextprotocol/servers GitHub 仓库](https://github.com/modelcontextprotocol/servers) —— 仍在维护的参考服务器（filesystem、git、fetch、memory 等）以及已归档服务器的列表。',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) —— GitHub 官方 MCP 服务器，Docker 与二进制安装方式。',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) —— Playwright MCP 服务器及其浏览器工具。',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) —— 带受限（只读）访问模式的 Postgres MCP 服务器。',
          '[Goose 项目文档](https://goose-docs.ai/docs/getting-started/installation) —— CLI 安装、Ollama provider 配置、扩展（MCP 服务器）配置语法。',
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
            a: '可以。协议开放，且与 Claude Desktop 完全独立。Goose、Cline、Continue.dev、LM Studio 都提供了能与本地 Ollama 模型协作的 MCP 客户端实现。仍在维护的服务器（filesystem、Postgres、Playwright、GitHub）在任何符合规范的客户端下都不需修改即可运行。',
          },
          {
            q: '哪些本地模型对 MCP 支持最好？',
            a: '最可靠的选择是 Gemma 4 31B、GLM-4.7 Flash、Qwen3.6 27B 或 Qwen3 32B（代码形态工作选 Qwen3-Coder 30B）和 Llama 3.3 70B。这些都具备显式的 tool call 训练，输出干净的 function calling JSON 供 MCP 客户端路由。7B 以下模型（以及多数没有 tool call 微调的通用模型）经常产生格式错误的 tool call。',
          },
          {
            q: 'MCP 安全吗？智能体会不会删除我的文件？',
            a: '只要你允许就有可能。安全来自服务器配置而非协议本身。filesystem 服务器只在你 allow-list 的路径内操作——把它限定到专用的 `agent-workspace` 目录。使用受限模式和 SELECT-only 角色时，数据库服务器是只读的。写入、shell、PR 工具一律要求显式授权；只对读取操作自动批准。审计日志事后可以精确显示智能体做了什么。',
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
            a: '能，通过特定服务器。浏览器服务器（Playwright MCP）驱动一个真实浏览器，发起模型导航过程中所需的所有请求。一些第三方服务器更直接地暴露了 `http_get`/`http_post` 工具。filesystem 与数据库服务器不发起网络请求，仅在本地资源上操作。',
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
            q: '怎样给 Ollama 添加 MCP 服务器？',
            a: '不是添加到 Ollama——Ollama 没有 MCP 设置。你要在 Ollama 前面的客户端里添加服务器。在 Goose 中，运行 `goose configure`，选择 Add Extension，再选 Command-line Extension，然后输入服务器命令（例如 `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`）；快速测试可用 `goose session --with-extension "<command>"`。Cline 和 Continue.dev 有各自的 MCP 设置。请确保 Ollama 运行的是支持 tool calling 的模型，且上下文窗口至少为 32K。',
          },
          {
            q: 'Claude Desktop 可以配合 Ollama 模型使用吗？',
            a: '不能直接这样配置。Claude Desktop 连接的是 Anthropic 的云端模型，因此不会运行 Ollama 模型。能从 Claude Desktop 沿用下来的是 MCP 服务器生态：同样的服务器可以配合支持 Ollama 的 MCP 客户端使用，例如 Goose、Cline、Continue.dev 或 LM Studio。这就是本指南介绍的本地等价方案。',
          },
          {
            q: '哪些官方 MCP 服务器已归档，用什么替代？',
            a: 'SQLite、PostgreSQL、Puppeteer 和 GitHub（以及其他几个）的参考服务器已移至 `servers-archived` 仓库，不再维护；它们的 npm 包（如果存在）被标记为「no longer supported」，也不会再有安全修复。仍在维护的替代方案：GitHub 用官方的 `github/github-mcp-server`，浏览器自动化用微软的 `@playwright/mcp`，Postgres 用受限模式下的 `postgres-mcp`（Crystal DBA）。SQLite 没有仍在维护的官方服务器，因此请对文件副本使用已归档的服务器，或把数据加载进 Postgres。filesystem 服务器仍是积极维护的参考服务器。',
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
          '[2026 年最佳本地 tool calling 模型](/zh/power-local-llm/best-local-models-tool-calling-2026) —— 上面推荐模型（Gemma 4、GLM-4.7、Qwen3、Llama 3.3）的逐项对比基准。',
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
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-es.webp',
    title: 'Configurar MCP con Ollama 2026: conecta modelos locales a archivos, bases de datos y APIs',
    seoTitle: 'MCP con Ollama 2026: conecta IA local a archivos y APIs',
    intro:
      'Model Context Protocol (MCP) es la capa que faltaba entre un modelo Ollama local y el resto de tu máquina. Con un único archivo de configuración y un modelo con tool calling, el mismo agente puede consultar una base de datos Postgres, leer y escribir archivos en un directorio aislado, controlar un navegador sin cabeza y abrir pull requests en GitHub — el modelo y los servidores se ejecutan en tu portátil, y solo los servidores de navegador y de GitHub tocan la red. Ollama no habla MCP por sí mismo, así que esta guía usa un cliente (Goose) para conectar ambos, con pasos de instalación y configuración que coinciden con la documentación actual de Goose, servidores que siguen mantenidos y un modelo de seguridad que no asume que confías en el modelo.',
    metaDescription:
      'Cómo usar MCP con Ollama: conecta un modelo local a archivos, Postgres, un navegador y GitHub con Goose. Configuración que funciona y permisos seguros.',
    twitterDescription:
      'Ollama no habla MCP — lo hace un cliente. Configuración funcional de Goose, los servidores mantenidos que conviene instalar (y los archivados que debes evitar) y un modelo de seguridad que no confía en el modelo.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'mcp ollama',
      'configurar servidor mcp local',
      'model context protocol local',
      'ollama tool calling 2026',
      'agente ia local mcp',
      'mcp sin claude desktop',
      'configurar mcp con ollama',
      'añadir servidor mcp a ollama',
    ],
    leadAnswerBlock:
      '**Model Context Protocol (MCP) permite que un modelo Ollama local llame herramientas — leer un archivo, ejecutar una consulta SQL, hacer clic en un enlace, abrir un pull request — a través de una interfaz JSON-RPC estándar que cualquier cliente compatible con MCP (Goose, Cline, Continue.dev, LM Studio) puede usar. El protocolo es abierto, los servidores usados aquí son de código abierto y no se necesita Claude Desktop ni ninguna cuenta en la nube. Ejecuta Ollama, instala un cliente MCP, añade un archivo de configuración `mcp.json` con los servidores que quieras y un modelo con tool calling (Gemma 4, GLM-4.7, Qwen3.6, Qwen3, Llama 3.3) se convierte en un agente que opera en tu máquina con los permisos que tú controlas. La clave está en el modelo de seguridad: nunca apruebes automáticamente herramientas de escritura, limita el acceso al filesystem a un único directorio y mantén el servidor de base de datos en modo solo lectura por defecto.**',
    quickAnswerTop: {
      es: {
        question: '¿Puedo ejecutar agentes de IA locales con MCP y Ollama?',
        answer:
          'Sí — y la configuración ahora es tan sencilla que se puede hacer en una tarde. Ejecuta Ollama con un modelo con tool calling (Gemma 4, GLM-4.7, Qwen3.6, Qwen3 o Llama 3.3 70B), instala un cliente compatible con MCP (Goose es el CLI más directo; Cline, Continue.dev y LM Studio también son clientes MCP) y agrega servidores MCP para las capacidades que necesitas — `filesystem` para archivos, un servidor de Postgres para bases de datos, Playwright MCP para automatización del navegador, el servidor oficial de GitHub para gestionar repositorios. Ollama no tiene ajustes de MCP: los servidores se añaden en el cliente. El protocolo es el mismo que usa Claude Desktop; la única diferencia es el modelo y el cliente. Mantén la seguridad limitando el servidor filesystem a un único directorio, manteniendo la base de datos en solo lectura por defecto y nunca aprobando automáticamente herramientas de escritura o shell.',
        bullets: [
          'MCP es abierto y funciona completamente en local — no se necesita Claude Desktop, cuenta de Anthropic ni llamadas a la nube.',
          'Ollama proporciona el modelo; un cliente MCP (Goose, Cline, Continue.dev, LM Studio) conecta Ollama con los servidores MCP mediante JSON-RPC.',
          'Cuatro tipos de servidor cubren la mayoría de flujos de trabajo reales: filesystem, una base de datos (Postgres), un navegador (Playwright MCP) y GitHub. Los antiguos servidores de referencia de SQLite, PostgreSQL, Puppeteer y GitHub están archivados y ya no se mantienen.',
          'La fiabilidad del tool calling es una propiedad del modelo: Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B y Llama 3.3 70B manejan MCP sin problemas. Los modelos de menos de 7B suelen emitir tool calls malformados.',
          'Modelo de seguridad: limita el acceso al filesystem a un directorio, ejecuta los servidores de base de datos en solo lectura y coloca cada herramienta de escritura o shell detrás de una aprobación explícita.',
          'Costo: $0 en gasto de API, pero los tokens se consumen localmente — los bucles de agente son intensivos en tokens, así que usa un modelo con contexto de 32K+ y una máquina que pueda ejecutarlo a velocidad útil.',
        ],
        updatedDate: '2026-11-02',
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
      { label: 'Servidores de base de datos (Postgres, SQLite)', anchor: '#database-server' },
      { label: 'Servidor de navegador (Playwright)', anchor: '#browser-server' },
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
      'La presentación cubre: cómo MCP convierte un modelo Ollama local en un agente que consulta bases de datos, lee archivos, controla un navegador y abre pull requests; los cuatro tipos de servidor (filesystem, base de datos, navegador, GitHub) con dificultad de configuración y nivel de riesgo; una guía de configuración de Goose en 6 pasos; un modelo de seguridad que no confía en el LLM; y una comparación directa con Claude Desktop. Descarga el PDF como tarjeta de referencia de agente MCP local.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP es un protocolo JSON-RPC 2.0 para herramientas.** Un modelo (a través de un cliente) se conecta a uno o más servidores MCP; cada servidor expone Tools (funciones invocables), Resources (datos legibles) y Prompts (plantillas). El formato de wire es idéntico tanto si el cliente es Claude Desktop, Goose, Cline, Continue.dev o LM Studio.',
          '**Ollama no habla MCP directamente — un cliente MCP envuelve Ollama.** Goose (código abierto, originario de Block) es el CLI más sencillo con soporte nativo de Ollama; Cline, Continue.dev y LM Studio también son clientes MCP. Los servidores se añaden en el cliente, no en Ollama.',
          '**Cuatro tipos de servidor cubren la mayoría de casos de uso:** `filesystem` (leer/escribir en un directorio aislado, sigue siendo un servidor de referencia mantenido), un servidor de base de datos (Postgres en modo restringido), `@playwright/mcp` (controlar un navegador) y el `github-mcp-server` oficial de GitHub (gestión de repositorios y PRs con un personal access token). Los servidores de referencia de SQLite, PostgreSQL, Puppeteer y GitHub se han archivado y no reciben correcciones.',
          '**La fiabilidad del tool calling escala con el tamaño y el entrenamiento del modelo.** Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B y Llama 3.3 70B manejan MCP sin problemas en Q4_K_M. Los modelos de menos de 7B suelen emitir tool calls malformados y bloquear el bucle.',
          '**El modelo de seguridad asume que el modelo no es de confianza.** Limita el servidor filesystem a un único directorio, ejecuta el servidor de base de datos con un rol de solo lectura, nunca apruebes automáticamente `execute_command` ni `write_file` y revisa el registro de auditoría después de sesiones largas.',
          '**MCP local vs Claude Desktop:** protocolo idéntico, ecosistema de servidores idéntico. El stack local sustituye el modelo en la nube por uno offline — privacidad, sin costo por token y sin límites de velocidad, a cambio de un modelo menos capaz y de gestionar tú mismo la configuración de seguridad.',
          '**El costo es $0 en tarifas de API pero real en tokens.** Los bucles de agente pueden consumir entre 30K y 80K tokens para una sola tarea de varios pasos. Usa un modelo con contexto de al menos 32K; 128K es cómodo.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Protocolo:** JSON-RPC 2.0 sobre stdio (subproceso local) o Streamable HTTP (remoto). El antiguo transporte HTTP+SSE está obsoleto. Los agentes locales usan casi exclusivamente stdio. La revisión actual de la especificación es la 2026-07-28.',
          '**Origen:** creado por Anthropic como especificación abierta (modelcontextprotocol.io). En `modelcontextprotocol/servers` solo se mantienen unos pocos servidores de referencia (filesystem, git, fetch, memory y otros); SQLite, PostgreSQL, Puppeteer y GitHub pasaron a `servers-archived`. Ahora cada proveedor publica sus propios servidores.',
          '**Clientes locales:** Goose (código abierto, repositorio `aaif-goose/goose`), Cline (extensión de VS Code), Continue.dev (VS Code/JetBrains), LM Studio (aplicación de escritorio), más varias herramientas CLI.',
          '**Modelos Ollama compatibles:** cualquier modelo con entrenamiento nativo de tool calling, por ejemplo Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Transporte por defecto de los servidores:** stdio para procesos locales; Streamable HTTP solo cuando necesitas compartir un servidor entre máquinas o agentes.',
          '**La configuración vive en el cliente:** Goose lee un bloque `extensions` en `~/.config/goose/config.yaml` (o `goose configure`); Cline y Continue.dev tienen sus propios ajustes de MCP. Los campos son la misma idea en todos: nombre del servidor, comando, args, variables de entorno.',
          '**No se necesita Claude Desktop.** El protocolo es abierto e independiente de Claude Desktop; los servidores usados aquí son de código abierto (revisa cada licencia) y funcionan con cualquier cliente compatible.',
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
          '**"Abre la portada de Hacker News, encuentra las tres principales historias de IA, resúmelas y añádelas a mi lista de lectura."** — el servidor `playwright` controla un navegador, el modelo extrae y resume, `filesystem` añade.',
          '**"Abre un PR draft con el título `chore: bump deps` contra mi fork y enlaza la ejecución de CI fallida."** — el servidor `github` crea el PR, obtiene la ejecución y escribe el enlace en la descripción.',
          '**"Mira las últimas 100 filas de `events.db` y dime qué IDs de usuario son responsables del nuevo pico de errores."** — un servidor de base de datos consulta una copia de los datos; el modelo razona; lees la respuesta en el panel de chat.',
          'Cada uno de estos es un flujo de trabajo de frase a acción que antes requería un modelo en la nube con herramientas alojadas o un script escrito a mano. MCP es la capa que te permite reutilizar los mismos servidores entre clientes y el mismo modelo entre servidores.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Comparativa de los cuatro servidores MCP más usados',
        content:
          'Los servidores a continuación cubren el largo recorrido de "quiero que mi modelo local haga algo de verdad". Todos son de código abierto y se ejecutan como subprocesos locales (o un contenedor Docker) iniciados por tu cliente MCP. Comprueba el estado de mantenimiento antes de instalar uno.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Empieza con el servidor filesystem (5 minutos, bajo riesgo), añade un servidor de base de datos para trabajo con datos, agrega un servidor de navegador solo cuando lo necesites y trae GitHub una vez que confíes en el modelo en tu máquina.',
          },
          {
            type: 'plain-terms',
            text: 'Cuatro servidores cubren la mayor parte de lo que querrás que haga un agente local. El servidor filesystem lee y escribe archivos en una carpeta que tú eliges. Un servidor de base de datos ejecuta consultas contra Postgres. El servidor de navegador controla una ventana real de navegador para que el modelo pueda leer páginas que requieren JavaScript. El servidor GitHub abre issues y PRs en tus repositorios. La mayoría se inicia con un comando (npx, uvx o Docker) y se ejecuta en tu propia máquina, y ninguno llama a internet a menos que lo necesite: el navegador y GitHub sí lo hacen, filesystem y base de datos no.',
          },
        ],
        columns: ['Servidor MCP', 'Qué habilita', 'Dificultad de configuración', 'Nivel de riesgo', 'Ideal para'],
        rows: [
          { 'Servidor MCP': 'Filesystem (referencia)', 'Qué habilita': 'Leer y escribir archivos dentro de un directorio aislado', 'Dificultad de configuración': 'Fácil (una ruta en la allow-list)', 'Nivel de riesgo': 'Medio — limita el alcance con cuidado', 'Ideal para': 'Automatización personal, toma de notas, resumen de repositorios' },
          { 'Servidor MCP': 'SQLite (archivado)', 'Qué habilita': 'Consultar un archivo de base de datos SQLite local', 'Dificultad de configuración': 'Fácil, pero ya sin mantenimiento', 'Nivel de riesgo': 'Medio — sin correcciones, usa una copia del archivo', 'Ideal para': 'Solo exploración de datos desechables' },
          { 'Servidor MCP': 'Postgres (postgres-mcp)', 'Qué habilita': 'Consultar Postgres en modo restringido (solo lectura)', 'Dificultad de configuración': 'Medio (rol + URI)', 'Nivel de riesgo': 'Medio — modo restringido y rol de solo lectura', 'Ideal para': 'Exploración de datos, reportes, prototipos BI' },
          { 'Servidor MCP': 'Playwright (@playwright/mcp)', 'Qué habilita': 'Controlar un navegador mediante snapshots de accesibilidad para navegación, scraping, rellenado de formularios', 'Dificultad de configuración': 'Medio (binarios del navegador, latencia)', 'Nivel de riesgo': 'Alto — puede enviar formularios, hacer clic en cualquier cosa', 'Ideal para': 'Investigación, scraping, pruebas de regresión' },
          { 'Servidor MCP': 'GitHub (oficial)', 'Qué habilita': 'Listar repositorios, leer archivos, abrir issues y PRs', 'Dificultad de configuración': 'Medio (Docker + PAT en variable de entorno)', 'Nivel de riesgo': 'Medio — limita el token a repositorios específicos', 'Ideal para': 'Flujos de trabajo de desarrollo, triage, borradores de PR' },
          { 'Servidor MCP': 'Custom', 'Qué habilita': 'Cualquier cosa que puedas expresar como herramientas JSON-RPC', 'Dificultad de configuración': 'Difícil (escribe tu propio servidor)', 'Nivel de riesgo': 'Variable', 'Ideal para': 'APIs internas, sistemas de nicho, código de integración' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Los servidores de referencia de SQLite, PostgreSQL, Puppeteer y GitHub se movieron al repositorio `servers-archived` y ya no se mantienen. Los paquetes npm de PostgreSQL, Puppeteer y GitHub figuran como "no longer supported", y el servidor de SQLite (un paquete de Python, última versión en abril de 2025) tampoco recibe correcciones. Usa los servidores mantenidos de esta tabla y lee el código de cualquier servidor que necesite credenciales.',
          },
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
          '**El modelo ve una lista plana de herramientas.** Desde la perspectiva del modelo no hay servidores — solo una lista de nombres de herramientas como `filesystem.read_file`, `playwright.browser_navigate`, `github.create_pull_request`. El cliente gestiona el enrutamiento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La arquitectura es idéntica a la de Claude Desktop. Las diferencias son el modelo (un modelo Ollama local en lugar de Claude) y el cliente (Goose/Cline/Continue.dev/LM Studio en lugar de Claude Desktop). Los servidores MCP son los mismos servidores — puedes ejecutar el servidor filesystem bajo Claude Desktop hoy y seguirá funcionando sin cambios bajo Goose mañana.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-es.svg',
        imageCaption:
          'Diagrama de arquitectura MCP: Ollama sirve el modelo local, un cliente MCP (Goose, Cline, Continue.dev o LM Studio) conecta con servidores MCP vía stdio usando JSON-RPC 2.0, y cuatro tipos de servidor — sistema de archivos, base de datos, navegador y GitHub — exponen las herramientas reales.',
      },
      setup: {
        id: 'setup',
        title: 'Configuración: Ollama + Goose en 15 minutos',
        content:
          '**Goose es el camino más sencillo hacia un agente MCP local funcional.** Es un agente de código abierto (originario de Block, hoy desarrollado en `aaif-goose/goose`) con un CLI y soporte nativo de [Ollama](https://ollama.com/), una interfaz de chat interactiva y un único archivo de configuración para todos tus servidores [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). Continue.dev, Cline y LM Studio también funcionan — Goose tiene el menor coste de configuración para una primera ejecución.',
        items: [
          '**Paso 1 — instala Ollama.** Descárgalo desde [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). Confirma que el servicio está corriendo con `curl http://127.0.0.1:11434/api/tags`.',
          '**Paso 2 — descarga un modelo con tool calling.** Elige entre Gemma 4 31B (`gemma4:31b`), GLM-4.7 Flash (`glm-4.7-flash`), Qwen3.6 27B (`qwen3.6:27b`), Qwen3 32B (`qwen3:32b`) o Llama 3.3 70B (`llama3.3:70b`). 24 GB de VRAM manejan cómodamente 26B–32B en Q4_K_M; un Mac con 32 GB de memoria unificada los aloja con unos 4–6 GB libres para el contexto (macOS necesita 8 GB).',
          '**Paso 3 — instala Goose.** En macOS o Linux ejecuta `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash` (o `brew install block-goose-cli`). En Windows usa el instalador de PowerShell de la documentación de Goose, o WSL. El CLI se instala como `goose`.',
          '**Paso 4 — configura Ollama como proveedor.** Ejecuta `goose configure`, elige `ollama` como proveedor, establece el modelo al que descargaste y el host en `http://127.0.0.1:11434` (en blanco también equivale a localhost:11434). Goose escribe esto en `~/.config/goose/config.yaml`. La ventana de contexto predeterminada de Ollama puede ser pequeña (la documentación de Goose menciona 4096 tokens), lo que puede hacer que Goose ignore sus extensiones — inicia Ollama con `OLLAMA_CONTEXT_LENGTH=32768` (o más).',
          '**Paso 5 — añade el servidor MCP de filesystem.** Ejecuta `goose configure`, elige Add Extension y luego Command-line Extension, o añade un bloque `extensions` a `~/.config/goose/config.yaml` (ejemplo a continuación). Para una prueba puntual, `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` lo activa solo para esa sesión. Inicia `goose session` y pídele que liste los archivos en tu directorio de prueba. El primer turno confirma que el servidor está conectado.',
          '**Paso 6 — verifica con una tarea real.** Prueba `goose session` y pide "Haz una lista de cada archivo Markdown en `notes/`, con título y número de palabras, y escribe el resultado en `notes/index.md`." Si el agente lee, resume y escribe de vuelta, el bucle funciona.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Si ya usas Cline o Continue.dev, omite Goose y úsalos — ambos son clientes MCP. Cada uno tiene sus propios ajustes de MCP (consulta su documentación para el archivo exacto); el modelo y los servidores son los mismos, solo cambian la aplicación host y el formato de su configuración.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-es.svg',
        imageCaption:
          'Flujo de configuración en seis pasos para Ollama y Goose: instalar Ollama, descargar un modelo con llamadas a herramientas como gemma4:31b, instalar Goose con el script oficial, configurar el proveedor, añadir el servidor MCP de archivos y verificar con una tarea real en unos 15 minutos.',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Servidor Filesystem: leer y escribir en un directorio aislado',
        content:
          '**El servidor filesystem es el primero en instalar y el más fácil de limitar de forma segura.** Expone `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` y `create_directory` — todo restringido a una o más rutas en la allow-list.',
        items: [
          '**Instalación:** el servidor de referencia es `@modelcontextprotocol/server-filesystem`, ejecutado mediante `npx -y` (sin instalación global; requiere Node.js). Es uno de los servidores de referencia que siguen mantenidos. Goose, Cline y Continue.dev lo inician desde su configuración.',
          '**Rutas en la allow-list:** el servidor acepta uno o más argumentos de directorio y rechaza operaciones fuera de ellos. Siempre pasa una ruta explícita y estrecha — nunca `~` ni `/`.',
          '**Herramientas expuestas:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (reemplazos por línea), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. El modelo las ve como `filesystem.read_file` y así sucesivamente.',
          '**Comodidad de uso:** `directory_tree` devuelve un árbol JSON; ideal para que el modelo se oriente antes de leer archivos específicos. `search_files` hace una búsqueda recursiva similar a grep.',
          '**Superficie de riesgo:** el servidor respeta la allow-list, pero dentro de ella tiene lectura/escritura completa. Trata la allow-list como la única barrera y elige un directorio workspace dedicado en lugar de tu carpeta home.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
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
        title: 'Servidores de base de datos: consultar Postgres (y SQLite) con seguridad',
        content:
          '**Un servidor de base de datos convierte al modelo en un analista junior que puede responder preguntas respaldadas por datos reales — siempre que lo mantengas en solo lectura.** Los servidores de referencia originales de SQLite y PostgreSQL están archivados, así que usa un servidor de Postgres mantenido y trata SQLite con cuidado.',
        items: [
          '**Postgres: `postgres-mcp` (Crystal DBA, licencia MIT)** es la opción con modo de solo lectura (la última versión en PyPI es de mayo de 2025, así que comprueba la actividad del repositorio antes de depender de él). Ejecútalo con `uvx postgres-mcp --access-mode=restricted` (o `pipx install postgres-mcp`, o su imagen Docker) y pasa la URI de conexión en la variable de entorno `DATABASE_URI`. El modo restringido permite transacciones de solo lectura y un límite de tiempo por consulta; el modo sin restricciones es solo para desarrollo.',
          '**Usa además un rol de solo lectura dedicado.** El modo restringido es una barrera, el rol de la base de datos es otra. Crea un rol `agent_ro` con permisos solo de SELECT y usa la cadena de conexión de ese rol.',
          '**SQLite: el servidor de referencia está archivado.** Es el paquete de Python `mcp-server-sqlite` (no un paquete npm; última versión en abril de 2025); puede que aún funcione, pero no recibe correcciones. Apúntalo solo a una copia del archivo, nunca a tu única copia, o carga los datos en Postgres. Lee el código de cualquier servidor SQLite de la comunidad antes de darle un archivo.',
          '**Conciencia del esquema:** pide al agente que "liste las tablas y describa las cinco más usadas" antes de hacer preguntas analíticas — el modelo es mucho más preciso cuando ha inspeccionado el esquema que cuando adivina los nombres de columnas.',
          '**Costo:** las consultas van directamente a tu base de datos. Un `SELECT *` mal formado de una tabla de 100M de filas es el mismo accidente aquí que lo sería de un humano — mantén el rol en un pool de conexiones separado con un statement timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
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
        title: 'Servidor de navegador: controlar un navegador con Playwright MCP',
        content:
          '**El servidor de navegador es el más potente y el más peligroso de los cuatro.** Lanza un navegador real y expone navegación, clics, relleno de formularios y capturas de pantalla — es decir, puede hacer todo lo que tú puedes hacer en un navegador, incluyendo enviar formularios.',
        items: [
          '**Qué servidor usar:** el `@playwright/mcp` de Microsoft (`npx @playwright/mcp@latest`). El antiguo `@modelcontextprotocol/server-puppeteer` figura como "no longer supported", y en npm no existe ningún paquete `@modelcontextprotocol/server-playwright`.',
          '**Herramientas expuestas:** `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_evaluate` (ejecutar JavaScript), `browser_take_screenshot`, `browser_tabs`, `browser_wait_for`. El modelo lee la página con `browser_snapshot` (un snapshot de accesibilidad, que Playwright MCP recomienda frente a las capturas para ejecutar acciones) y usa las capturas de pantalla solo para mirar.',
          '**Latencia:** las sesiones de navegador reales tardan entre 1 y 5 segundos por acción. Una navegación de varios pasos puede consumir fácilmente entre 30 y 60 segundos y decenas de miles de tokens porque el contenido de las páginas es grande. Usa una ventana de contexto de 32K+.',
          '**Referencias de elementos:** el modelo hace clic en los elementos mediante las referencias del snapshot. Los modelos más pequeños se equivocan con frecuencia; un modelo de 27B+ con tool calling maneja los patrones comunes de forma fiable. Mantén las tareas acotadas — "extrae el título y el primer párrafo de esta URL" es mucho más fiable que "navega por el sitio y encuentra la página de contacto".',
          '**Los casos de uso correctos:** investigación (abrir la página, resumirla, añadir a notas), pruebas de regresión (navegar, hacer clic, captura de pantalla) y relleno de formularios en páginas que tú controlas. Los casos incorrectos: cualquier cosa donde un clic erróneo en la web en vivo tenga consecuencias.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Nunca des credenciales al servidor de navegador. Si necesitas una sesión autenticada, pasa al agente un perfil de navegador pre-autenticado y nunca lo dejes navegar a sitios de alto impacto (banca, correo electrónico, consolas en la nube, formularios de pago). El modelo no tiene criterio sobre lo que hace un botón — ve texto y hace clic. Trátalo como un becario sin contexto y sin recurso.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'Servidor GitHub: repositorios, issues y PRs desde un modelo local',
        content:
          '**El servidor GitHub convierte el trabajo en lenguaje natural sobre repositorios en llamadas a la API.** Es el más sencillo de los cuatro de configurar y el más fácil de limitar mediante los permisos del personal access token (PAT).',
        items: [
          '**Instalación:** usa el `github/github-mcp-server` oficial de GitHub, ejecutado desde su imagen Docker (`ghcr.io/github/github-mcp-server`) con un PAT en la variable de entorno `GITHUB_PERSONAL_ACCESS_TOKEN`. El antiguo paquete npm `@modelcontextprotocol/server-github` figura como "no longer supported"; no lo uses en instalaciones nuevas.',
          '**Herramientas expuestas:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, más muchas otras. La superficie completa es grande; la mayoría de las tareas usan entre 5 y 10 herramientas.',
          '**Limita el alcance del PAT.** Usa un PAT de grano fino limitado a repositorios específicos con los permisos mínimos necesarios (Read para navegar, Write para crear PRs/issues). No uses un PAT clásico con `repo` para un agente experimental.',
          '**Flujos de trabajo reales:** triage ("lee los últimos 20 issues abiertos, agrúpalos, propón etiquetas"), borradores ("lee el README y abre un PR corrigiendo erratas"), reportes ("qué PRs están inactivos esta semana").',
          '**Superficie de riesgo:** el agente puede crear issues y PRs, comentarlos y (con permisos de escritura) hacer push de commits. Deshabilita las herramientas de merge a menos que confíes tanto en el modelo como en el flujo de trabajo — un merge accidental en un repositorio con PAT de grano fino es recuperable, pero solo si lo notas rápido.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
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
          { 'Capa': 'Modelo', 'Claude Desktop': 'Claude (Anthropic, en la nube)', 'Ollama local + Goose': 'Gemma 4, GLM-4.7, Qwen3 o Llama 3.3 (local)' },
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
          '**Gemma 4 31B (`gemma4:31b`)** — el entrenamiento de tool calling de Google es el mejor en su clase para este tamaño. Cabe en 32 GB de memoria unificada (quedan unos 4–6 GB para el contexto) o 24 GB de VRAM en Q4_K_M. Buen razonamiento general; algo conservador en tool calls encadenados.',
          '**GLM-4.7 Flash (`glm-4.7-flash`)** — el modelo de Zhipu tiene una fiabilidad de tool calling muy alta y una ventana de contexto de 128K de serie. Ligeramente más pesado que Gemma 4; cabe cómodamente en una GPU de 24 GB.',
          '**Qwen3.6 27B (`qwen3.6:27b`)** — la opción Qwen más reciente en Ollama (unos 18–19 GB, contexto de 256K, con soporte de tool calling). **Qwen3 32B (`qwen3:32b`)** — equilibrado; el 32B denso maneja MCP sin problemas y se desenvuelve bien en un bucle de agente largo. **Qwen3-Coder 30B (`qwen3-coder:30b`)** es la mejor opción si tu trabajo de agente está orientado al código.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — el techo más alto pero el más pesado. 64 GB+ de memoria unificada o 2× 24 GB de GPUs en Q4_K_M. Úsalo solo si tu hardware lo admite; los modelos más pequeños suelen ser suficientes.',
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
          '**Error 8: instalar servidores de referencia archivados de tutoriales antiguos.** Los paquetes npm `@modelcontextprotocol/server-postgres`, `-puppeteer` y `-github` figuran como "no longer supported" y el servidor de SQLite está archivado. Algunas guías antiguas también nombran paquetes npm que no existen (`server-sqlite`, `server-playwright`). Usa los servidores mantenidos indicados arriba.',
          '**Error 9: poner la configuración de MCP en Ollama.** Ollama no tiene ajustes de MCP. Los servidores se configuran en el cliente (`extensions` en Goose, los ajustes de MCP de Cline o Continue.dev).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Especificación de Model Context Protocol](https://modelcontextprotocol.io/) — Especificación oficial, esquema JSON-RPC, definiciones de transporte y ciclo de vida, incluido el changelog de 2026-07-28.',
          '[Repositorio GitHub modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Los servidores de referencia mantenidos (filesystem, git, fetch, memory y otros) y la lista de servidores archivados.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — Servidor MCP oficial de GitHub, configuración con Docker y binario.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Servidor MCP de Playwright y sus herramientas de navegador.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — Servidor MCP de Postgres con modo de acceso restringido (solo lectura).',
          '[Documentación de Goose](https://goose-docs.ai/docs/getting-started/installation) — Instalación del CLI, configuración del proveedor Ollama, sintaxis de configuración de extensiones (servidores MCP).',
          '[Biblioteca de modelos Ollama](https://ollama.com/library) — Modelos locales disponibles, indicadores de soporte de tool calling y niveles de cuantización referenciados en esta guía.',
          '[Repositorio GitHub de Cline](https://github.com/cline/cline) — Implementación del cliente MCP para VS Code, panel de servidores MCP.',
          '[Documentación de Continue.dev](https://docs.continue.dev/) — Referencia del bloque de configuración `mcpServers` para el cliente Continue.dev.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Qué es MCP y por qué importa para la IA local?',
            a: 'Model Context Protocol (MCP) es un protocolo abierto JSON-RPC 2.0 que permite que un cliente (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) conecte un modelo de lenguaje a servidores de herramientas de manera uniforme. Importa para la IA local porque estandariza la capa que convierte un modelo de chat en un agente — escribe un servidor de herramientas una vez y úsalo bajo cualquier cliente y cualquier modelo, incluido un modelo Ollama local. Sin MCP, cada proyecto reinventa las herramientas de archivo/base de datos/navegador contra su propio cliente.',
          },
          {
            q: '¿MCP funciona sin Claude Desktop?',
            a: 'Sí. El protocolo es abierto y completamente independiente de Claude Desktop. Goose, Cline, Continue.dev y LM Studio ofrecen implementaciones de cliente MCP que funcionan con modelos Ollama locales. Los servidores mantenidos (filesystem, Postgres, Playwright, GitHub) funcionan sin cambios bajo cualquier cliente compatible.',
          },
          {
            q: '¿Qué modelos locales soportan MCP mejor?',
            a: 'Las opciones más fiables son Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B o Qwen3 32B (o Qwen3-Coder 30B para trabajo orientado al código) y Llama 3.3 70B. Todos tienen entrenamiento explícito de tool calling y emiten JSON de function calling limpio que los clientes MCP pueden enrutar. Los modelos de menos de 7B (y la mayoría de los modelos generales sin fine-tuning de tool calling) producen regularmente tool calls malformados.',
          },
          {
            q: '¿Es seguro MCP? ¿Puede el agente borrar mis archivos?',
            a: 'Puede si se lo permites. La seguridad proviene de cómo configuras los servidores, no del protocolo. El servidor filesystem solo opera dentro de las rutas que pones en la allow-list — limítalo a un directorio `agent-workspace` dedicado. El servidor de base de datos funciona en solo lectura cuando usas el modo restringido y un rol solo de SELECT. Siempre requiere aprobación explícita para las herramientas de escritura, shell y PR; aprueba automáticamente solo las operaciones de lectura. El registro de auditoría te muestra exactamente lo que hizo el agente después del hecho.',
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
            a: 'Sí, a través de servidores específicos. El servidor de navegador (Playwright MCP) controla un navegador real que hace las peticiones que el modelo navega. Varios servidores de terceros exponen herramientas `http_get`/`http_post` de forma más directa. Los servidores de filesystem y base de datos no hacen peticiones de red; operan solo en recursos locales.',
          },
          {
            q: '¿MCP funciona con Ollama de forma nativa o necesito un wrapper?',
            a: 'Ollama en sí mismo no habla MCP — sirve una API de chat compatible con OpenAI. Necesitas un cliente (Goose, Cline, Continue.dev, LM Studio) para hacer de puente entre la API de chat de Ollama y los servidores MCP. El cliente enruta los tool calls del modelo al servidor MCP correcto y devuelve los resultados a la conversación. Desde la perspectiva del usuario no hay configuración adicional más allá de instalar el cliente y apuntarlo a Ollama.',
          },
          {
            q: '¿Cuál es la diferencia entre MCP y function calling?',
            a: 'El function calling es que el LLM emite JSON estructurado con el nombre de una herramienta y sus argumentos — es una capacidad del modelo. MCP es el protocolo que permite que los servidores de herramientas y los clientes describan, descubran, invoquen y devuelvan esas herramientas entre procesos — es una capa de interoperabilidad. Cooperan: el cliente convierte las definiciones de herramientas de MCP al formato de function calling del modelo, el modelo emite un function call, el cliente mapea la llamada de vuelta a un servidor MCP y el servidor la ejecuta. Sin MCP puedes hacer function calling; reimplementas los manejadores de filesystem/base de datos/navegador por proyecto. Con MCP, los mismos servidores funcionan bajo cualquier cliente.',
          },
          {
            q: '¿Cómo añado un servidor MCP a Ollama?',
            a: 'No se añade a Ollama: Ollama no tiene ajustes de MCP. El servidor se añade en el cliente que se sitúa delante de Ollama. En Goose, ejecuta `goose configure`, elige Add Extension y luego Command-line Extension, e introduce el comando del servidor (por ejemplo `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`); para una prueba rápida usa `goose session --with-extension "<command>"`. Cline y Continue.dev tienen sus propios ajustes de MCP. Asegúrate de que Ollama ejecute un modelo con tool calling y una ventana de contexto de al menos 32K.',
          },
          {
            q: '¿Puedo usar Claude Desktop con modelos de Ollama?',
            a: 'No como configuración directa. Claude Desktop se comunica con los modelos de Anthropic en la nube, así que no ejecuta un modelo de Ollama. Lo que se traslada de Claude Desktop es el ecosistema de servidores MCP: los mismos servidores funcionan con un cliente MCP que sí admite Ollama, como Goose, Cline, Continue.dev o LM Studio. Ese es el equivalente local que describe esta guía.',
          },
          {
            q: '¿Qué servidores MCP oficiales están archivados y qué los sustituye?',
            a: 'Los servidores de referencia de SQLite, PostgreSQL, Puppeteer y GitHub (entre otros) se movieron al repositorio `servers-archived` y ya no se mantienen; sus paquetes npm (donde existen) figuran como "no longer supported" y no reciben correcciones de seguridad. Sustitutos mantenidos: el `github/github-mcp-server` oficial de GitHub para GitHub, el `@playwright/mcp` de Microsoft para automatización del navegador y `postgres-mcp` (Crystal DBA) en modo restringido para Postgres. Para SQLite no hay un servidor oficial mantenido, así que usa una copia del archivo con el servidor archivado o carga los datos en Postgres. El servidor filesystem sigue siendo un servidor de referencia mantenido activamente.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Mejores modelos locales para tool calling en 2026](/es/power-local-llm/best-local-models-tool-calling-2026) — benchmarks comparativos para los modelos recomendados arriba (Gemma 4, GLM-4.7, Qwen3, Llama 3.3).',
          '[Los agentes locales autónomos realmente funcionan](/es/power-local-llm/autonomous-local-agents-actually-work) — una verificación de la realidad sobre lo que un agente MCP local puede y no puede hacer de forma fiable en una tarea de larga duración.',
          '[Continue.dev vs Cline vs Aider: el mejor agente de código local en 2026](/es/power-local-llm/continue-dev-vs-cline-vs-aider-local) — contexto de agente adyacente para trabajo orientado al código; Cline y Continue.dev también son clientes MCP.',
          '[Mejores LLMs locales en 2026](/es/local-llms/best-local-llms-2026) — referencia de modelos para el panorama más amplio de pesos abiertos.',
          '[Reemplaza Zapier con agentes de IA locales](/es/power-local-llm/replace-zapier-with-local-ai-agents) — marco de automatización de flujos de trabajo para el mismo stack MCP.',
          '[Hub de Power Local LLM](/es/power-local-llm) — biblioteca completa de guías.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configurar MCP con Ollama 2026: conecta modelos locales a archivos, bases de datos y APIs',
      description: 'Cómo usar MCP con Ollama: conecta un modelo local a archivos, Postgres, un navegador y GitHub con Goose. Configuración que funciona y permisos seguros.',
      url: 'https://www.promptquorum.com/es/power-local-llm/local-ai-agents-with-mcp',
      inLanguage: 'es',
      datePublished: '2026-05-24',
      dateModified: '2026-11-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-pt.webp',
    title: 'Configurar MCP no Ollama 2026: conecte modelos locais a arquivos, bancos de dados e APIs',
    seoTitle: 'Ollama + MCP 2026: conecte IA local a arquivos e APIs',
    intro:
      'O Model Context Protocol (MCP) é a camada que faltava entre um modelo Ollama local e o restante da sua máquina. Com um único arquivo de configuração e um modelo com tool calling, o mesmo agente pode consultar um banco de dados Postgres, ler e escrever arquivos em um diretório isolado, controlar um navegador sem cabeça e abrir pull requests no GitHub — o modelo e os servidores rodam no seu laptop, e só os servidores de navegador e de GitHub acessam a rede. O Ollama não fala MCP por conta própria, então este guia usa um cliente (o Goose) para fazer a ponte, com passos de instalação e configuração alinhados à documentação atual do Goose, servidores que ainda são mantidos e um modelo de segurança que não assume que você confia no modelo.',
    metaDescription:
      'Como usar MCP com o Ollama: conecte um modelo local a arquivos, Postgres, navegador e GitHub com o Goose. Config funcional e servidores mantidos.',
    twitterDescription:
      'O Ollama não fala MCP — um cliente fala. Config funcional do Goose, os servidores mantidos para instalar (e os arquivados para evitar) e um modelo de segurança que não confia no modelo.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'Desenvolvedores e usuários com conhecimentos técnicos que executam LLMs locais via Ollama e querem um modelo que possa fazer coisas reais — consultar bancos de dados, editar arquivos, automatizar navegadores — sem enviar nada a um provedor na nuvem.',
    readTime: '15 min de leitura',
    educationalLevel: 'Advanced',
    primaryTerm: 'agente MCP local',
    targetKeywords: [
      'mcp ollama',
      'configurar servidor mcp local',
      'model context protocol local',
      'ollama tool calling 2026',
      'agente ia local mcp',
      'mcp sem claude desktop',
      'configurar mcp no ollama',
      'adicionar servidor mcp ao ollama',
    ],
    leadAnswerBlock:
      '**O Model Context Protocol (MCP) permite que um modelo Ollama local chame ferramentas — ler um arquivo, executar uma consulta SQL, clicar em um link, abrir um pull request — através de uma interface JSON-RPC padrão que qualquer cliente compatível com MCP (Goose, Cline, Continue.dev, LM Studio) pode usar. O protocolo é aberto, os servidores usados aqui são open source e nada exige Claude Desktop nem conta na nuvem. Execute o Ollama, instale um cliente MCP, coloque um arquivo de configuração `mcp.json` com os servidores que quiser e um modelo com tool calling (Gemma 4, GLM-4.7, Qwen3.6, Qwen3, Llama 3.3) se torna um agente que opera na sua máquina, com as permissões que você controla. O segredo é o modelo de segurança: nunca aprove automaticamente ferramentas de escrita, limite o acesso ao filesystem a um único diretório e mantenha o servidor de banco de dados em somente leitura por padrão.**',
    quickAnswerTop: {
      pt: {
        question: 'Posso executar agentes de IA locais com MCP e Ollama?',
        answer:
          'Sim — e a configuração agora é tão simples que dá para fazer em uma tarde. Execute o Ollama com um modelo com tool calling (Gemma 4, GLM-4.7, Qwen3.6, Qwen3 ou Llama 3.3 70B), instale um cliente compatível com MCP (o Goose é o CLI mais direto; Cline, Continue.dev e LM Studio também são clientes MCP) e adicione servidores MCP para as capacidades que você precisa — `filesystem` para arquivos, um servidor Postgres para bancos de dados, o Playwright MCP para automação de navegador e o servidor oficial do GitHub para gestão de repositórios. O próprio Ollama não tem configurações de MCP: você adiciona os servidores no cliente. O protocolo é o mesmo que o Claude Desktop usa; a única diferença é o modelo e o cliente. Mantenha a segurança limitando o servidor filesystem a um único diretório, mantendo o banco de dados em somente leitura por padrão e nunca aprovando automaticamente ferramentas de escrita ou shell.',
        bullets: [
          'MCP é aberto e funciona completamente em local — não é necessário Claude Desktop, conta Anthropic nem chamadas à nuvem.',
          'Ollama fornece o modelo; um cliente MCP (Goose, Cline, Continue.dev, LM Studio) conecta o Ollama com os servidores MCP via JSON-RPC.',
          'Quatro tipos de servidor cobrem a maioria dos fluxos de trabalho reais: filesystem, um banco de dados (Postgres), um navegador (Playwright MCP) e GitHub. Os antigos servidores de referência de SQLite, PostgreSQL, Puppeteer e GitHub estão arquivados e não são mais mantidos.',
          'A confiabilidade do tool calling é uma propriedade do modelo: Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B e Llama 3.3 70B lidam com MCP sem problemas. Modelos abaixo de 7B geralmente emitem tool calls malformados.',
          'Modelo de segurança: limite o acesso ao filesystem a um diretório, execute os servidores de banco de dados em somente leitura e coloque cada ferramenta de escrita ou shell atrás de uma aprovação explícita.',
          'Custo: $0 em gastos de API, mas os tokens são consumidos localmente — os loops de agente são intensivos em tokens, então use um modelo com contexto de 32K+ e uma máquina que consiga executá-lo em velocidade útil.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'O que o MCP desbloqueia', anchor: '#what-mcp-unlocks' },
      { label: 'Comparativo de servidores MCP', anchor: '#server-comparison' },
      { label: 'Arquitetura: como as peças se encaixam', anchor: '#architecture' },
      { label: 'Configuração: Ollama + Goose em 15 minutos', anchor: '#setup' },
      { label: 'Servidor Filesystem', anchor: '#filesystem-server' },
      { label: 'Servidores de banco de dados (Postgres, SQLite)', anchor: '#database-server' },
      { label: 'Servidor de navegador (Playwright)', anchor: '#browser-server' },
      { label: 'Servidor GitHub', anchor: '#github-server' },
      { label: 'Modelo de segurança', anchor: '#security-model' },
      { label: 'MCP local vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'Escolher um modelo com tool calling', anchor: '#picking-model' },
      { label: 'MCP vs Function Calling simples', anchor: '#mcp-vs-function-calling' },
      { label: 'Erros comuns', anchor: '#common-mistakes' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Leituras relacionadas', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      'A apresentação cobre: como o MCP converte um modelo Ollama local em um agente que consulta bancos de dados, lê arquivos, controla um navegador e abre pull requests; os quatro tipos de servidor (filesystem, banco de dados, navegador, GitHub) com dificuldade de configuração e nível de risco; um guia de configuração do Goose em 6 passos; um modelo de segurança que não confia no LLM; e uma comparação direta com o Claude Desktop. Baixe o PDF como cartão de referência de agente MCP local.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP é um protocolo JSON-RPC 2.0 para ferramentas.** Um modelo (via um cliente) se conecta a um ou mais servidores MCP; cada servidor expõe Tools (funções invocáveis), Resources (dados legíveis) e Prompts (templates). O formato de wire é idêntico tanto se o cliente for Claude Desktop, Goose, Cline, Continue.dev ou LM Studio.',
          '**O Ollama não fala MCP diretamente — um cliente MCP envolve o Ollama.** O Goose (open source, originalmente do Block) é o CLI mais simples com suporte nativo ao Ollama; Cline, Continue.dev e LM Studio também são clientes MCP. Você adiciona os servidores no cliente, não no Ollama.',
          '**Quatro tipos de servidor cobrem a maioria dos casos de uso:** `filesystem` (ler/escrever em um diretório isolado, ainda um servidor de referência mantido), um servidor de banco de dados (Postgres em modo restrito), `@playwright/mcp` (controlar um navegador) e o `github-mcp-server` oficial do GitHub (gestão de repositórios e PRs com um personal access token). Os servidores de referência de SQLite, PostgreSQL, Puppeteer e GitHub foram arquivados e não recebem correções.',
          '**A confiabilidade do tool calling escala com o tamanho e o treinamento do modelo.** Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B e Llama 3.3 70B lidam com MCP sem problemas em Q4_K_M. Modelos abaixo de 7B geralmente emitem tool calls malformados e bloqueiam o loop.',
          '**O modelo de segurança assume que o modelo não é confiável.** Limite o servidor filesystem a um único diretório, execute o servidor de banco de dados com um role de somente leitura, nunca aprove automaticamente ferramentas como `execute_command` ou `write_file` e revise o log de auditoria após sessões longas.',
          '**MCP local vs Claude Desktop:** protocolo idêntico, ecossistema de servidores idêntico. O stack local substitui o modelo na nuvem por um offline — privacidade, sem custo por token e sem limites de velocidade, em troca de um modelo menos capaz e de você mesmo gerenciar a configuração de segurança.',
          '**O custo é $0 em tarifas de API, mas real em tokens.** Os loops de agente podem consumir entre 30K e 80K tokens para uma única tarefa de múltiplas etapas. Use um modelo com contexto de pelo menos 32K; 128K é confortável.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**Protocolo:** JSON-RPC 2.0 sobre stdio (subprocesso local) ou Streamable HTTP (remoto). O antigo transporte HTTP+SSE está obsoleto. Os agentes locais usam quase exclusivamente stdio. A revisão atual da especificação é 2026-07-28.',
          '**Origem:** criado pela Anthropic como especificação aberta (modelcontextprotocol.io). Apenas alguns servidores de referência ainda são mantidos em `modelcontextprotocol/servers` (filesystem, git, fetch, memory e outros); SQLite, PostgreSQL, Puppeteer e GitHub foram movidos para `servers-archived`. Hoje os fornecedores publicam seus próprios servidores.',
          '**Clientes locais:** Goose (open source, repositório `aaif-goose/goose`), Cline (extensão do VS Code), Continue.dev (VS Code/JetBrains), LM Studio (aplicativo de desktop), mais várias ferramentas CLI.',
          '**Modelos Ollama compatíveis:** qualquer modelo com treinamento nativo de tool calling, por exemplo Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**Transporte padrão dos servidores:** stdio para processos locais; Streamable HTTP apenas quando você precisa compartilhar um servidor entre máquinas ou agentes.',
          '**A configuração vive no cliente:** o Goose lê um bloco `extensions` em `~/.config/goose/config.yaml` (ou `goose configure`); Cline e Continue.dev têm suas próprias configurações de MCP. Os campos têm a mesma ideia em todos: nome do servidor, comando, args, variáveis de ambiente.',
          '**Claude Desktop não é necessário.** O protocolo é aberto e independente do Claude Desktop; os servidores usados aqui são open source (confira a licença de cada um) e funcionam com qualquer cliente compatível.',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'O que o MCP realmente desbloqueia para um modelo local',
        content:
          '**Um LLM local sem ferramentas só pode responder com texto. Com MCP, o mesmo modelo pode agir na sua máquina.** A mudança é a diferença entre um chatbot e um agente.',
        items: [
          '**"Encontre todos os TODOs neste repositório, agrupe-os por arquivo e escreva um resumo em Markdown em `notes/todos.md`."** — o servidor `filesystem` lê, o modelo agrupa, o mesmo servidor escreve. Uma única ida e volta de ponta a ponta.',
          '**"Mostre-me os 10 melhores clientes por receita neste trimestre e faça um gráfico."** — o servidor `postgres` executa o SQL (role de somente leitura), o modelo resume e escreve um CSV via `filesystem` para sua ferramenta de gráficos.',
          '**"Abra a capa do Hacker News, encontre as três principais histórias de IA, resuma-as e adicione-as à minha lista de leitura."** — o servidor `playwright` controla um navegador, o modelo extrai e resume, `filesystem` adiciona.',
          '**"Abra um PR draft com o título `chore: bump deps` contra meu fork e ligue a execução de CI com falha."** — o servidor `github` cria o PR, obtém a execução e escreve o link na descrição.',
          '**"Olhe as últimas 100 linhas de `events.db` e diga-me quais IDs de usuário são responsáveis pelo novo pico de erros."** — um servidor de banco de dados consulta uma cópia dos dados; o modelo raciocina; você lê a resposta no painel de chat.',
          'Cada um desses é um fluxo de trabalho de frase para ação que antes exigia um modelo na nuvem com ferramentas hospedadas ou um script escrito à mão. O MCP é a camada que permite reutilizar os mesmos servidores entre clientes e o mesmo modelo entre servidores.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'Comparativo dos quatro servidores MCP mais usados',
        content:
          'Os servidores a seguir cobrem o longo alcance de "quero que meu modelo local faça algo real". Todos são open source e rodam como subprocessos locais (ou um contêiner Docker) iniciados pelo seu cliente MCP. Confira o status de manutenção antes de instalar um deles.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Comece com o servidor filesystem (5 minutos, baixo risco), adicione um servidor de banco de dados para trabalho com dados, adicione um servidor de navegador apenas quando precisar e traga o GitHub quando você confiar no modelo na sua máquina.',
          },
          {
            type: 'plain-terms',
            text: 'Quatro servidores cobrem a maior parte do que você vai querer que um agente local faça. O servidor filesystem lê e escreve arquivos em uma pasta que você escolhe. Um servidor de banco de dados executa consultas no Postgres. O servidor de navegador controla uma janela real de navegador para que o modelo possa ler páginas que exigem JavaScript. O servidor GitHub abre issues e PRs nos seus repositórios. A maioria começa com um único comando (npx, uvx ou Docker) e roda na sua própria máquina, e nenhum deles acessa a internet sem necessidade: os servidores de navegador e de GitHub acessam, os de filesystem e de banco de dados não.',
          },
        ],
        columns: ['Servidor MCP', 'O que habilita', 'Dificuldade de configuração', 'Nível de risco', 'Ideal para'],
        rows: [
          { 'Servidor MCP': 'Filesystem (referência)', 'O que habilita': 'Ler e escrever arquivos dentro de um diretório isolado', 'Dificuldade de configuração': 'Fácil (um caminho na allowlist)', 'Nível de risco': 'Médio — limite o escopo com cuidado', 'Ideal para': 'Automação pessoal, anotações, resumo de repositórios' },
          { 'Servidor MCP': 'SQLite (arquivado)', 'O que habilita': 'Consultar um arquivo de banco de dados SQLite local', 'Dificuldade de configuração': 'Fácil, mas sem manutenção', 'Nível de risco': 'Médio — sem correções, use uma cópia do arquivo', 'Ideal para': 'Apenas exploração descartável de dados' },
          { 'Servidor MCP': 'Postgres (postgres-mcp)', 'O que habilita': 'Consultar o Postgres em modo restrito (somente leitura)', 'Dificuldade de configuração': 'Médio (role + URI)', 'Nível de risco': 'Médio — modo restrito e role de somente leitura', 'Ideal para': 'Exploração de dados, relatórios, protótipos BI' },
          { 'Servidor MCP': 'Playwright (@playwright/mcp)', 'O que habilita': 'Controlar um navegador por snapshots de acessibilidade para navegação, scraping, preenchimento de formulários', 'Dificuldade de configuração': 'Médio (binários do navegador, latência)', 'Nível de risco': 'Alto — pode enviar formulários, clicar em qualquer coisa', 'Ideal para': 'Pesquisa, scraping, testes de regressão' },
          { 'Servidor MCP': 'GitHub (oficial)', 'O que habilita': 'Listar repositórios, ler arquivos, abrir issues e PRs', 'Dificuldade de configuração': 'Médio (Docker + PAT em variável de ambiente)', 'Nível de risco': 'Médio — limite o token a repositórios específicos', 'Ideal para': 'Fluxos de trabalho de desenvolvimento, triagem, rascunhos de PR' },
          { 'Servidor MCP': 'Custom', 'O que habilita': 'Qualquer coisa que você possa expressar como ferramentas JSON-RPC', 'Dificuldade de configuração': 'Difícil (escreva seu próprio servidor)', 'Nível de risco': 'Variável', 'Ideal para': 'APIs internas, sistemas de nicho, código de integração' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Os servidores de referência de SQLite, PostgreSQL, Puppeteer e GitHub foram movidos para o repositório `servers-archived` e não são mais mantidos. Os pacotes npm de PostgreSQL, Puppeteer e GitHub estão marcados como "no longer supported", e o servidor SQLite (um pacote Python, lançado pela última vez em abril de 2025) também não recebe correções. Use os servidores mantidos desta tabela e leia o código de qualquer servidor que precise de credenciais.',
          },
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'Como as peças se encaixam',
        content:
          '**Três processos, um protocolo compartilhado.** O modelo vive no Ollama, o cliente fala MCP e cada servidor expõe um pequeno conjunto de ferramentas. Cada tool call salta do cliente para o servidor, é executado localmente e retorna JSON.',
        items: [
          '**Ollama** roda como serviço em segundo plano em `127.0.0.1:11434` e serve o modelo via uma API compatível com OpenAI. Não sabe o que é MCP — simplesmente responde às completações de chat e emite tool calls quando o modelo os solicita.',
          '**O cliente MCP** (Goose, Cline, Continue.dev, LM Studio) é a ponte. Fala com o Ollama para o modelo e com os servidores MCP para as ferramentas. Quando o modelo emite um tool call, o cliente o roteia para o servidor correto, obtém o resultado e o retorna à conversa.',
          '**Os servidores MCP** são subprocessos independentes, um por capacidade. Falam JSON-RPC 2.0 sobre stdio. Cada servidor anuncia uma lista de Tools, Resources e Prompts; o cliente os combina na superfície de ferramentas que é apresentada ao modelo.',
          '**O transporte stdio mantém tudo local.** O servidor é iniciado pelo cliente, se comunica via seu stdin/stdout e termina quando o cliente termina. Nada vai pela rede a menos que o servidor em si abra uma conexão (o servidor de navegador o faz; os servidores de filesystem e banco de dados não).',
          '**O modelo vê uma lista plana de ferramentas.** Da perspectiva do modelo não há servidores — apenas uma lista de nomes de ferramentas como `filesystem.read_file`, `playwright.browser_navigate`, `github.create_pull_request`. O cliente gerencia o roteamento.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A arquitetura é idêntica à do Claude Desktop. As diferenças são o modelo (um modelo Ollama local em vez do Claude) e o cliente (Goose/Cline/Continue.dev/LM Studio em vez do Claude Desktop). Os servidores MCP são os mesmos — você pode rodar o servidor filesystem sob o Claude Desktop hoje e ele continuará rodando sem mudanças sob o Goose amanhã.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-pt.svg',
        imageCaption:
          'Diagrama de arquitetura MCP: o Ollama fornece o modelo local, um cliente MCP (Goose, Cline, Continue.dev ou LM Studio) faz a ponte com servidores MCP via stdio usando JSON-RPC 2.0, e quatro tipos de servidor — filesystem, banco de dados, navegador e GitHub — expõem as ferramentas reais.',
      },
      setup: {
        id: 'setup',
        title: 'Configuração: Ollama + Goose em 15 minutos',
        content:
          '**O Goose é o caminho mais simples para um agente MCP local funcional.** É um agente open source (originalmente do Block, hoje desenvolvido em `aaif-goose/goose`) com um CLI e suporte nativo ao [Ollama](https://ollama.com/), uma interface de chat interativa e um único arquivo de configuração para todos os seus servidores do [Model Context Protocol (MCP)](https://modelcontextprotocol.io/). Continue.dev, Cline e LM Studio também funcionam — o Goose é o que dá menos trabalho na primeira execução.',
        items: [
          '**Passo 1 — instale o Ollama.** Baixe em [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). Confirme que o serviço está rodando com `curl http://127.0.0.1:11434/api/tags`.',
          '**Passo 2 — baixe um modelo com tool calling.** Escolha entre Gemma 4 31B (`gemma4:31b`), GLM-4.7 Flash (`glm-4.7-flash`), Qwen3.6 27B (`qwen3.6:27b`), Qwen3 32B (`qwen3:32b`) ou Llama 3.3 70B (`llama3.3:70b`). 24 GB de VRAM lidam confortavelmente com 26B–32B em Q4_K_M; um Mac com 32 GB de memória unificada comporta esses modelos com cerca de 4–6 GB livres para o contexto (o macOS precisa de 8 GB).',
          '**Passo 3 — instale o Goose.** No macOS ou Linux, execute `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash` (ou `brew install block-goose-cli`). No Windows, use o instalador PowerShell da documentação do Goose, ou o WSL. O CLI se instala como `goose`.',
          '**Passo 4 — configure o Ollama como provedor.** Execute `goose configure`, escolha `ollama` como provedor, defina o modelo que você baixou e o host como `http://127.0.0.1:11434` (em branco também significa localhost:11434). O Goose escreve isso em `~/.config/goose/config.yaml`. A janela de contexto padrão do Ollama pode ser pequena (a documentação do Goose menciona 4096 tokens), o que pode fazer o Goose ignorar suas extensões — inicie o Ollama com `OLLAMA_CONTEXT_LENGTH=32768` (ou mais).',
          '**Passo 5 — adicione o servidor MCP de filesystem.** Execute `goose configure`, escolha Add Extension e depois Command-line Extension, ou adicione um bloco `extensions` a `~/.config/goose/config.yaml` (exemplo abaixo). Para um teste pontual, `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` o ativa apenas naquela sessão. Inicie `goose session` e peça que liste os arquivos no seu diretório de teste. O primeiro turno confirma que o servidor está conectado.',
          '**Passo 6 — verifique com uma tarefa real.** Teste `goose session` e peça "Faça uma lista de cada arquivo Markdown em `notes/`, com título e número de palavras, e escreva o resultado em `notes/index.md`." Se o agente ler, resumir e escrever de volta, o loop funciona.',
        ],
        codeBlock:
          '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'Se você já usa Cline ou Continue.dev, pule o Goose e use-os — ambos são clientes MCP. Cada um tem suas próprias configurações de MCP (consulte a documentação para saber o arquivo exato); o modelo e os servidores são os mesmos, só mudam o aplicativo host e o formato de configuração.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-pt.svg',
        imageCaption:
          'Fluxo de configuração em seis passos para Ollama e Goose: instalar o Ollama, baixar um modelo com suporte a ferramentas como o gemma4:31b, instalar o Goose com o script oficial, configurar o provedor, adicionar o servidor MCP de arquivos e verificar com uma tarefa real em cerca de 15 minutos.',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Servidor Filesystem: ler e escrever em um diretório isolado',
        content:
          '**O servidor filesystem é o primeiro a instalar e o mais fácil de limitar com segurança.** Expõe `read_file`, `write_file`, `list_directory`, `move_file`, `search_files` e `create_directory` — tudo restrito a um ou mais caminhos na allowlist.',
        items: [
          '**Instalação:** o servidor de referência é `@modelcontextprotocol/server-filesystem`, executado via `npx -y` (sem instalação global; requer Node.js). É um dos servidores de referência que ainda são mantidos. Goose, Cline e Continue.dev o iniciam a partir da configuração.',
          '**Caminhos na allowlist:** o servidor aceita um ou mais argumentos de diretório e rejeita operações fora deles. Sempre passe um caminho explícito e estreito — nunca `~` nem `/`.',
          '**Ferramentas expostas:** `read_file`, `read_multiple_files`, `write_file`, `edit_file` (substituições por linha), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. O modelo as vê como `filesystem.read_file` e assim por diante.',
          '**Conveniência de uso:** `directory_tree` retorna uma árvore JSON; ideal para o modelo se orientar antes de ler arquivos específicos. `search_files` faz uma busca recursiva similar ao grep.',
          '**Superfície de risco:** o servidor respeita a allowlist, mas dentro dela tem leitura/escrita completa. Trate a allowlist como a única barreira e escolha um diretório workspace dedicado em vez da sua pasta home.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Nunca coloque `/` nem seu diretório home na allowlist. Crie uma pasta `agent-workspace` dedicada, coloque cópias dos arquivos que quer que o agente toque e deixe-o operar apenas dentro dessa pasta. Se o agente falhar, o raio de explosão para em um diretório.',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'Servidores de banco de dados: consultar o Postgres (e o SQLite) com segurança',
        content:
          '**Um servidor de banco de dados converte o modelo em um analista júnior que pode responder perguntas respaldadas por dados reais — desde que você o mantenha em somente leitura.** Os servidores de referência originais de SQLite e PostgreSQL estão arquivados; por isso, use um servidor Postgres mantido e trate o SQLite com cuidado.',
        items: [
          '**Postgres: `postgres-mcp` (Crystal DBA, licença MIT)** é a opção com modo somente leitura (a versão mais recente no PyPI é de maio de 2025, então confira a atividade do repositório antes de depender dele). Execute-o com `uvx postgres-mcp --access-mode=restricted` (ou `pipx install postgres-mcp`, ou sua imagem Docker) e passe a URI de conexão na variável de ambiente `DATABASE_URI`. O modo restrito permite transações somente leitura e um limite de tempo por consulta; o modo irrestrito é só para desenvolvimento.',
          '**Use também um role de somente leitura dedicado.** O modo restrito é uma barreira, o role do banco de dados é outra. Crie um role `agent_ro` com permissões apenas de SELECT e use a string de conexão desse role.',
          '**SQLite: o servidor de referência está arquivado.** É o pacote Python `mcp-server-sqlite` (não é um pacote npm; última versão em abril de 2025), pode até continuar funcionando, mas não recebe correções. Aponte-o apenas para uma cópia do arquivo, nunca para a sua única cópia, ou carregue os dados no Postgres. Leia o código de qualquer servidor SQLite da comunidade antes de entregar um arquivo a ele.',
          '**Consciência do esquema:** peça ao agente que "liste as tabelas e descreva as cinco mais usadas" antes de fazer perguntas analíticas — o modelo é muito mais preciso quando inspecionou o esquema do que quando adivinha os nomes das colunas.',
          '**Custo:** as consultas vão diretamente ao seu banco de dados. Um `SELECT *` malformado de uma tabela com 100M de linhas é o mesmo acidente aqui que seria de um humano — mantenha o role em um pool de conexões separado com um statement timeout.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'Crie o role do Postgres uma vez e não dê nada mais ao agente: `CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` Em seguida adicione `statement_timeout = 30s` ao role. O agente não pode escrever, não pode excluir e não pode rodar indefinidamente.',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'Servidor de navegador: controlar um navegador com o Playwright MCP',
        content:
          '**O servidor de navegador é o mais poderoso e o mais perigoso dos quatro.** Lança um navegador real e expõe navegação, cliques, preenchimento de formulários e capturas de tela — ou seja, pode fazer tudo que você faz em um navegador, incluindo enviar formulários.',
        items: [
          '**Qual servidor:** use o `@playwright/mcp` da Microsoft (`npx @playwright/mcp@latest`). O antigo `@modelcontextprotocol/server-puppeteer` está marcado como "no longer supported", e não existe nenhum pacote `@modelcontextprotocol/server-playwright` no npm.',
          '**Ferramentas expostas:** `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_evaluate` (executar JavaScript), `browser_take_screenshot`, `browser_tabs`, `browser_wait_for`. O modelo lê a página por meio de `browser_snapshot` (um snapshot de acessibilidade, que o Playwright MCP recomenda em vez de capturas de tela para executar ações) e usa capturas de tela apenas para olhar.',
          '**Latência:** sessões de navegador reais levam entre 1 e 5 segundos por ação. Uma navegação de múltiplos passos pode facilmente consumir 30–60 segundos e dezenas de milhares de tokens porque o conteúdo das páginas é grande. Use uma janela de contexto de 32K+.',
          '**Referências de elementos:** o modelo clica nos elementos pelas referências do snapshot. Modelos menores escolhem o elemento errado com frequência; um modelo de 27B+ com tool calling lida com os padrões comuns de forma confiável. Mantenha as tarefas delimitadas — "extraia o título e o primeiro parágrafo desta URL" é muito mais confiável do que "navegue pelo site e encontre a página de contato".',
          '**Os casos de uso corretos:** pesquisa (abrir a página, resumir, adicionar a notas), testes de regressão (navegar, clicar, captura de tela) e preenchimento de formulários em páginas que você controla. Os casos incorretos: qualquer coisa onde um clique errado na web ao vivo tenha consequências.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'Nunca passe credenciais ao servidor de navegador. Se precisar de uma sessão autenticada, passe ao agente um perfil de navegador pré-autenticado e nunca o deixe navegar para sites de alto impacto (banco, e-mail, consoles de nuvem, formulários de pagamento). O modelo não tem julgamento sobre o que um botão faz — ele vê texto e clica. Trate-o como um estagiário sem contexto e sem recurso.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'Servidor GitHub: repositórios, issues e PRs a partir de um modelo local',
        content:
          '**O servidor GitHub converte o trabalho em linguagem natural sobre repositórios em chamadas de API.** É o mais simples dos quatro de configurar e o mais fácil de limitar pelas permissões do personal access token (PAT).',
        items: [
          '**Instalação:** use o `github/github-mcp-server` oficial do GitHub, executado a partir da sua imagem Docker (`ghcr.io/github/github-mcp-server`) com um PAT na variável de ambiente `GITHUB_PERSONAL_ACCESS_TOKEN`. O antigo pacote npm `@modelcontextprotocol/server-github` está marcado como "no longer supported"; não o use em novas configurações.',
          '**Ferramentas expostas:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, mais muitas outras. A superfície completa é grande; a maioria das tarefas usa de 5 a 10 ferramentas.',
          '**Limite o escopo do PAT.** Use um PAT de granularidade fina limitado a repositórios específicos com as permissões mínimas necessárias (Read para navegar, Write para criar PRs/issues). Não use um PAT clássico com `repo` para um agente experimental.',
          '**Fluxos de trabalho reais:** triagem ("leia os últimos 20 issues abertos, agrupe-os, proponha labels"), rascunhos ("leia o README e abra um PR corrigindo erros de digitação"), relatórios ("quais PRs estão inativos esta semana").',
          '**Superfície de risco:** o agente pode criar issues e PRs, comentá-los e (com permissões de escrita) fazer push de commits. Desative as ferramentas de merge a menos que você confie tanto no modelo quanto no fluxo de trabalho — um merge feito por engano em um repositório com PAT de granularidade fina é recuperável, mas só se você notar rápido.',
        ],
        codeBlock:
          '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'Um modelo de segurança que não confia no modelo',
        content:
          '**O modelo mental correto é "o LLM é um estagiário sem confiança com as chaves que você lhe dá".** As capacidades vêm dos servidores e das superfícies que você inclui na allowlist — não do julgamento do modelo.',
        items: [
          '**Limite o servidor filesystem a um diretório.** Nunca `~` nem `/`. Escolha uma pasta `agent-workspace/` e coloque cópias dos arquivos que o agente precisa tocar. Se o agente falhar, o pior caso é uma pasta.',
          '**Execute os servidores de banco de dados em somente leitura por padrão.** Um role `agent_ro` dedicado com permissões apenas de `SELECT` e um statement timeout de 30 segundos elimina toda uma classe de incidentes.',
          '**Coloque cada ferramenta de escrita ou shell atrás de uma aprovação explícita.** Goose, Cline e Continue.dev admitem regras de aprovação por ferramenta. Permita as ferramentas de leitura por padrão; exija aprovação para `write_file`, `edit_file`, `execute_command`, `create_pull_request` e qualquer ação do navegador que envie formulários.',
          '**Use o log de auditoria.** Cada cliente MCP registra os tool calls e os resultados. Após uma sessão longa, revise o log: você vai detectar o modelo tentando coisas que não esperava (às vezes inofensivas, às vezes um motivo para apertar as permissões).',
          '**Limite o acesso de terceiros com tokens de escopo estreito.** PATs do GitHub limitados a dois repositórios de teste. Roles de Postgres de somente leitura. Sessões de navegador sem credenciais. O modelo acabará tentando coisas que você não previu; os limites do que ele pode fazer não devem depender de ele acertar.',
          '**Isole o agente para trabalho com dados sensíveis.** Desative o acesso à rede no host enquanto o agente está rodando (ou use um network namespace) quando trabalhar com dados privados. O stack local já não envia nada para fora da máquina, mas a defesa em profundidade pega erros em servidores de terceiros.',
          '**Trate a seleção de servidores MCP como qualquer escolha de dependência.** Os servidores de referência são bem mantidos; muitos servidores de terceiros não são. Leia o código do servidor antes de instalar um que precise de credenciais.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Um hábito útil de recuperação pós-falha: antes de uma tarefa de agente não trivial, faça `git stash` (ou `git checkout -b agent/<task>`). Após a tarefa, revise o diff, mantenha as partes que quer e descarte o resto. É a mesma prática que torna seguras as sessões longas com Cline ou Aider — veja a [comparação Continue.dev vs Cline vs Aider](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) para o padrão mais amplo.',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'MCP local vs Claude Desktop: o que muda, o que permanece',
        content:
          '**O protocolo e os servidores são idênticos. Apenas o modelo e o cliente mudam.** Esta é exatamente a razão pela qual o MCP importa — seu investimento em ferramentas se porta limpa entre configurações locais e na nuvem.',
        columns: ['Camada', 'Claude Desktop', 'Ollama local + Goose'],
        rows: [
          { 'Camada': 'Modelo', 'Claude Desktop': 'Claude (Anthropic, na nuvem)', 'Ollama local + Goose': 'Gemma 4, GLM-4.7, Qwen3 ou Llama 3.3 (local)' },
          { 'Camada': 'Cliente', 'Claude Desktop': 'Aplicativo Claude Desktop', 'Ollama local + Goose': 'Goose, Cline, Continue.dev ou LM Studio' },
          { 'Camada': 'Servidores', 'Claude Desktop': 'Os mesmos servidores MCP', 'Ollama local + Goose': 'Os mesmos servidores MCP' },
          { 'Camada': 'Protocolo', 'Claude Desktop': 'MCP (JSON-RPC 2.0)', 'Ollama local + Goose': 'MCP (JSON-RPC 2.0)' },
          { 'Camada': 'Custo por solicitação', 'Claude Desktop': 'Gasto de API por token', 'Ollama local + Goose': '$0 — inferência local' },
          { 'Camada': 'Privacidade', 'Claude Desktop': 'A conversa vai para a Anthropic', 'Ollama local + Goose': 'Fica na máquina' },
          { 'Camada': 'Limites de velocidade', 'Claude Desktop': 'Aplicam-se os limites da API', 'Ollama local + Goose': 'Limitado apenas pelo desempenho do hardware' },
          { 'Camada': 'Qualidade do tool calling', 'Claude Desktop': 'A melhor da categoria', 'Ollama local + Goose': 'Boa com modelos de 27B+; degrada rapidamente abaixo de 7B' },
          { 'Camada': 'Requer internet', 'Claude Desktop': 'Sim', 'Ollama local + Goose': 'Apenas se um servidor fizer requisições (ex.: o navegador)' },
          { 'Camada': 'Tempo de configuração', 'Claude Desktop': '5 minutos', 'Ollama local + Goose': '15 minutos (uma única vez)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'Escolher um modelo com tool calling para MCP local',
        content:
          '**A confiabilidade do tool calling escala com o tamanho e o treinamento do modelo, não com o harness.** Um modelo que emite tool calls malformados no Cline os emitirá no Goose pela mesma razão.',
        items: [
          '**Gemma 4 31B (`gemma4:31b`)** — o treinamento de tool calling do Google é o melhor da categoria para esse tamanho. Cabe em 32 GB de memória unificada (sobram cerca de 4–6 GB para o contexto) ou 24 GB de VRAM em Q4_K_M. Bom raciocínio geral; um pouco conservador em tool calls encadeados.',
          '**GLM-4.7 Flash (`glm-4.7-flash`)** — o modelo da Zhipu tem confiabilidade de tool calling muito alta e uma janela de contexto de 128K nativa. Um pouco mais pesado que o Gemma 4; cabe confortavelmente em uma GPU de 24 GB.',
          '**Qwen3.6 27B (`qwen3.6:27b`)** — a opção mais nova da família Qwen no Ollama (cerca de 18–19 GB, contexto de 256K, com suporte a tool calling). **Qwen3 32B (`qwen3:32b`)** — equilibrado; o 32B denso lida com MCP sem problemas e se sente bem em um loop de agente longo. **Qwen3-Coder 30B (`qwen3-coder:30b`)** é a melhor opção se seu trabalho de agente é orientado a código.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — o maior teto, mas o mais pesado. 64 GB+ de memória unificada ou 2× 24 GB de GPUs em Q4_K_M. Use apenas se seu hardware comportar; os modelos menores geralmente bastam.',
          '**Evite para trabalho com MCP:** qualquer coisa abaixo de 7B e qualquer modelo de uso geral sem treinamento explícito de tool calling. Eles emitirão chamadas malformadas, o loop vai travar e você vai culpar o harness — mas o harness está bem.',
          'Para técnicas de prompting estruturado que melhoram a qualidade do tool calling em qualquer modelo, veja [chain-of-thought prompting](/pt/prompt-engineering/chain-of-thought-prompting).',
          'Para os dados comparativos, veja [Melhores modelos locais para tool calling em 2026](/pt/power-local-llm/best-local-models-tool-calling-2026).',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs Function Calling simples: qual é a diferença',
        content:
          '**O function calling é o que o modelo emite. O MCP é o protocolo que permite que clientes e ferramentas se encontrem.** Vivem em camadas diferentes e cooperam; um não substitui o outro.',
        items: [
          '**O function calling** é a capacidade do lado do LLM: o modelo emite um objeto JSON estruturado descrevendo o nome da ferramenta e os argumentos. As tools da OpenAI, as tools da Anthropic e a API de tool calls do Ollama usam a mesma ideia, com formatos de wire ligeiramente diferentes.',
          '**O MCP** fica acima: padroniza como as ferramentas são descritas, descobertas, invocadas e retornadas entre processos. Um modelo com function calling, por si só, não sabe nada sobre o seu filesystem; um servidor MCP disponibiliza as operações de arquivo, o cliente as mapeia para a API de function calling do modelo, e o modelo passa a poder chamá-las.',
          '**O benefício é a interoperabilidade.** Escreva o servidor filesystem uma vez; Claude Desktop, Goose, Cline, Continue.dev e LM Studio todos o usam sem mudanças. Troque o modelo de Claude para Gemma 4; o servidor não muda.',
          '**Você pode fazer agentes com function calling puro.** Você reimplementará handlers de filesystem, banco de dados e navegador por projeto. Com MCP, essas são dependências prontas para uso.',
          '**Para scripts pontuais, o function calling puro é mais simples.** Para qualquer coisa que queira reutilizar entre projetos ou modelos, o MCP é o caminho de menor esforço em poucos dias.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'Erros comuns ao configurar MCP local',
        items: [
          '**Erro 1: usar um modelo pequeno de propósito geral.** Modelos abaixo de 7B (e a maioria dos modelos gerais de 7B–13B sem fine-tuning de tool calling) emitem tool calls malformados. Use um modelo de 27B+ ajustado para tool calling e pare de lutar com o harness.',
          '**Erro 2: colocar seu diretório home na allowlist.** As allowlists de `~` "apenas para testes" sobrevivem até o uso rotineiro. Crie um `agent-workspace` dedicado desde o início.',
          '**Erro 3: deixar o servidor de banco de dados em modo leitura/escrita.** Uma consulta `DELETE` redigida por um agente autoconfiante em uma tabela real é exatamente o incidente que isso evita. Faça de `agent_ro` seu role padrão; crie um role com escrita separado apenas para tarefas que realmente precisem dele, e somente durante essas tarefas.',
          '**Erro 4: aprovar automaticamente cada ferramenta.** O botão "aprovar tudo" é conveniente e perigoso. Aprove automaticamente as ferramentas de leitura (`read_file`, `list_directory`, `query`); sempre exija aprovação para as ferramentas de escrita/shell/PR.',
          '**Erro 5: usar um modelo com contexto de 32K para trabalho de navegador de múltiplos passos.** O conteúdo da página é grande; um agente que navega três páginas pode esgotar os 32K tokens antes de raciocinar. Use um modelo com contexto de 128K para tarefas intensivas no navegador.',
          '**Erro 6: assumir que o agente tem julgamento.** Não tem. O modelo não tem conceito de "este é o banco de dados de produção" ou "este PR vai ser implantado". As permissões são sua única barreira.',
          '**Erro 7: instalar todos os servidores de referência desde o início.** Mais ferramentas = prompt de sistema maior = seleção de ferramentas mais lenta e menos confiável. Comece com `filesystem`. Adicione os demais apenas quando tiver um fluxo de trabalho que os precise.',
          '**Erro 8: instalar servidores de referência arquivados a partir de tutoriais antigos.** Os pacotes npm `@modelcontextprotocol/server-postgres`, `-puppeteer` e `-github` estão marcados como "no longer supported" e o servidor SQLite está arquivado. Alguns guias antigos também citam pacotes npm que não existem (`server-sqlite`, `server-playwright`). Use os servidores mantidos citados acima.',
          '**Erro 9: colocar a configuração de MCP no Ollama.** O Ollama não tem configurações de MCP. Os servidores são configurados no cliente (`extensions` do Goose, configurações de MCP do Cline ou do Continue.dev).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Especificação do Model Context Protocol](https://modelcontextprotocol.io/) — Especificação oficial, esquema JSON-RPC, definições de transporte e ciclo de vida, incluindo o changelog de 2026-07-28.',
          '[Repositório GitHub modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Os servidores de referência mantidos (filesystem, git, fetch, memory e outros) e a lista de servidores arquivados.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — Servidor MCP oficial do GitHub, configuração com Docker e binário.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Servidor Playwright MCP e suas ferramentas de navegador.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — Servidor MCP para Postgres com modo de acesso restrito (somente leitura).',
          '[Documentação do Goose](https://goose-docs.ai/docs/getting-started/installation) — Instalação do CLI, configuração do provedor Ollama, sintaxe de configuração de extensões (servidores MCP).',
          '[Biblioteca de modelos Ollama](https://ollama.com/library) — Modelos locais disponíveis, indicadores de suporte de tool calling e níveis de quantização referenciados neste guia.',
          '[Repositório GitHub do Cline](https://github.com/cline/cline) — Implementação do cliente MCP para VS Code, painel de servidores MCP.',
          '[Documentação do Continue.dev](https://docs.continue.dev/) — Referência do bloco de configuração `mcpServers` para o cliente Continue.dev.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'O que é MCP e por que importa para a IA local?',
            a: 'O Model Context Protocol (MCP) é um protocolo aberto JSON-RPC 2.0 que permite que um cliente (Goose, Cline, Continue.dev, LM Studio, Claude Desktop) conecte um modelo de linguagem a servidores de ferramentas de forma uniforme. Importa para a IA local porque padroniza a camada que converte um modelo de chat em um agente — escreva um servidor de ferramentas uma vez e use-o sob qualquer cliente e qualquer modelo, incluindo um modelo Ollama local. Sem o MCP, cada projeto reinventa as ferramentas de arquivo/banco de dados/navegador para o seu próprio cliente.',
          },
          {
            q: 'O MCP funciona sem Claude Desktop?',
            a: 'Sim. O protocolo é aberto e completamente independente do Claude Desktop. Goose, Cline, Continue.dev e LM Studio oferecem implementações de cliente MCP que funcionam com modelos Ollama locais. Os servidores mantidos (filesystem, Postgres, Playwright, GitHub) funcionam sem mudanças sob qualquer cliente compatível.',
          },
          {
            q: 'Quais modelos locais suportam MCP melhor?',
            a: 'As opções mais confiáveis são Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B ou Qwen3 32B (ou Qwen3-Coder 30B para trabalho orientado a código) e Llama 3.3 70B. Todos têm treinamento explícito de tool calling e emitem JSON de function calling limpo que os clientes MCP podem rotear. Modelos abaixo de 7B (e a maioria dos modelos gerais sem fine-tuning de tool calling) produzem regularmente tool calls malformados.',
          },
          {
            q: 'O MCP é seguro? O agente pode excluir meus arquivos?',
            a: 'Pode se você permitir. A segurança vem de como você configura os servidores, não do protocolo. O servidor filesystem só opera dentro dos caminhos que você coloca na allowlist — limite-o a um diretório `agent-workspace` dedicado. O servidor de banco de dados funciona em somente leitura quando você usa o modo restrito e um role apenas de SELECT. Sempre exija aprovação explícita para as ferramentas de escrita, shell e PR; aprove automaticamente apenas as operações de leitura. O log de auditoria mostra exatamente o que o agente fez depois do fato.',
          },
          {
            q: 'Posso escrever meu próprio servidor MCP?',
            a: 'Sim — e os SDKs tornam isso simples. Os SDKs oficiais de TypeScript e Python (`@modelcontextprotocol/sdk` e `mcp`) lidam com o encanamento JSON-RPC. Você define ferramentas com seus JSON Schemas e uma função handler, e o SDK as expõe via stdio. Um servidor de propósito único (uma ou duas ferramentas que envolvem uma API interna) é um arquivo de 50–100 linhas.',
          },
          {
            q: 'O MCP funciona no Windows?',
            a: 'Sim. Ollama, Goose, Cline, Continue.dev e LM Studio todos funcionam no Windows. Os servidores MCP rodam como subprocessos de Node.js ou Python; ambos os ambientes de execução são totalmente compatíveis com Windows. O único detalhe específico da plataforma é o tratamento de caminhos — use barras para frente na configuração ou escape corretamente as barras invertidas. No mais, a experiência é idêntica à do macOS e do Linux.',
          },
          {
            q: 'Como faço sandbox das tool calls do MCP?',
            a: 'Três camadas cobrem a maior parte do risco. Primeiro, limite cada servidor estreitamente no nível de configuração: filesystem a um diretório, banco de dados a um role de somente leitura, GitHub a um PAT de granularidade fina para repositórios de teste. Segundo, use as regras de aprovação por ferramenta do cliente: aprovação automática para leituras, aprovação exigida para escritas. Terceiro, mantenha o agente dentro de um workspace compatível com `git stash` para que qualquer ação destrutiva seja desfazível via git. Para tarefas sensíveis, rode em um host sem acesso à rede, exceto para os endpoints de que os servidores realmente precisam.',
          },
          {
            q: 'Os agentes MCP podem fazer requisições HTTP?',
            a: 'Sim, através de servidores específicos. O servidor de navegador (Playwright MCP) controla um navegador real que faz as requisições que o modelo navega. Vários servidores de terceiros expõem ferramentas `http_get`/`http_post` de forma mais direta. Os servidores de filesystem e banco de dados não fazem requisições de rede; operam apenas em recursos locais.',
          },
          {
            q: 'O MCP funciona com o Ollama nativamente ou precisa de um wrapper?',
            a: 'O Ollama em si não fala MCP — serve uma API de chat compatível com OpenAI. Você precisa de um cliente (Goose, Cline, Continue.dev, LM Studio) para fazer a ponte entre a API de chat do Ollama e os servidores MCP. O cliente roteia os tool calls do modelo para o servidor MCP correto e retorna os resultados à conversa. Do ponto de vista do usuário, não há configuração extra além de instalar o cliente e apontá-lo para o Ollama.',
          },
          {
            q: 'Qual é a diferença entre MCP e function calling?',
            a: 'O function calling é o LLM emitindo JSON estruturado com o nome de uma ferramenta e seus argumentos — é uma capacidade do modelo. O MCP é o protocolo que permite que os servidores de ferramentas e os clientes descrevam, descubram, invoquem e retornem essas ferramentas entre processos — é uma camada de interoperabilidade. Cooperam: o cliente converte as definições de ferramentas do MCP para o formato de function calling do modelo, o modelo emite um function call, o cliente mapeia a chamada de volta para um servidor MCP e o servidor a executa. Sem o MCP você ainda pode usar function calling; só precisa reimplementar os handlers de filesystem/banco de dados/navegador por projeto. Com o MCP, os mesmos servidores funcionam sob qualquer cliente.',
          },
          {
            q: 'Como adicionar um servidor MCP ao Ollama?',
            a: 'Você não o adiciona ao Ollama — o Ollama não tem configurações de MCP. Você adiciona o servidor no cliente que fica na frente do Ollama. No Goose, execute `goose configure`, escolha Add Extension e depois Command-line Extension, e informe o comando do servidor (por exemplo `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`); para um teste rápido, use `goose session --with-extension "<command>"`. Cline e Continue.dev têm suas próprias configurações de MCP. Garanta que o Ollama execute um modelo com tool calling e uma janela de contexto de pelo menos 32K.',
          },
          {
            q: 'Posso usar o Claude Desktop com modelos do Ollama?',
            a: 'Não como configuração direta. O Claude Desktop conversa com os modelos na nuvem da Anthropic, então não executa um modelo do Ollama. O que se aproveita do Claude Desktop é o ecossistema de servidores MCP: os mesmos servidores funcionam com um cliente MCP que suporta o Ollama, como Goose, Cline, Continue.dev ou LM Studio. Esse é o equivalente local descrito neste guia.',
          },
          {
            q: 'Quais servidores MCP oficiais foram arquivados e o que os substitui?',
            a: 'Os servidores de referência de SQLite, PostgreSQL, Puppeteer e GitHub (entre outros) foram movidos para o repositório `servers-archived` e não são mais mantidos; seus pacotes npm (quando existem) estão marcados como "no longer supported" e não recebem correções de segurança. Substitutos mantidos: o `github/github-mcp-server` oficial do GitHub para o GitHub, o `@playwright/mcp` da Microsoft para automação de navegador e o `postgres-mcp` (Crystal DBA) em modo restrito para o Postgres. Para o SQLite não há servidor oficial mantido, então use uma cópia do arquivo com o servidor arquivado ou carregue os dados no Postgres. O servidor filesystem continua sendo um servidor de referência ativamente mantido.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leituras relacionadas',
        items: [
          '[Melhores modelos locais para tool calling em 2026](/pt/power-local-llm/best-local-models-tool-calling-2026) — benchmarks comparativos para os modelos recomendados acima (Gemma 4, GLM-4.7, Qwen3, Llama 3.3).',
          '[Os agentes locais autônomos realmente funcionam](/pt/power-local-llm/autonomous-local-agents-actually-work) — uma verificação da realidade sobre o que um agente MCP local pode e não pode fazer de forma confiável em uma tarefa de longa duração.',
          '[Continue.dev vs Cline vs Aider: o melhor agente de código local em 2026](/pt/power-local-llm/continue-dev-vs-cline-vs-aider-local) — contexto de agente adjacente para trabalho orientado a código; Cline e Continue.dev também são clientes MCP.',
          '[Melhores LLMs locais em 2026](/pt/local-llms/best-local-llms-2026) — referência de modelos para o panorama mais amplo de pesos abertos.',
          '[Substitua o Zapier com agentes de IA locais](/pt/power-local-llm/replace-zapier-with-local-ai-agents) — framework de automação de fluxos de trabalho para o mesmo stack MCP.',
          '[Hub de Power Local LLM](/pt/power-local-llm) — biblioteca completa de guias.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Configurar MCP no Ollama 2026: conecte modelos locais a arquivos, bancos de dados e APIs',
      description: 'Como usar MCP com o Ollama: conecte um modelo local a arquivos, Postgres, navegador e GitHub com o Goose. Config funcional e servidores mantidos.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/local-ai-agents-with-mcp',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-24',
      dateModified: '2026-11-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-ar.webp',
    title: 'إعداد ⁨Ollama⁩ مع ⁨MCP⁩ ⁨2026⁩: ربط النماذج المحلية بالملفات وقواعد البيانات و⁨APIs⁩',
    seoTitle: 'إعداد ⁨Ollama⁩ مع ⁨MCP⁩ ⁨2026⁩: ربط الملفات و⁨APIs⁩',
    intro:
      'بروتوكول سياق النموذج (MCP) هو الطبقة المفقودة بين نموذج Ollama المحلي وبقية جهازك. بملف إعداد واحد ونموذج يدعم استدعاء الأدوات، يستطيع الوكيل نفسه الاستعلام عن قاعدة بيانات Postgres، وقراءة الملفات والكتابة فيها داخل دليل معزول، والتحكم في متصفح بلا واجهة، وفتح pull requests على GitHub — النموذج والخوادم يعملان على حاسوبك المحمول، ولا يصل إلى الشبكة سوى خادما المتصفح وGitHub. Ollama نفسه لا يتحدث MCP، لذا يستخدم هذا الدليل عميلاً (Goose) للربط بينهما، مع خطوات تثبيت وإعدادات تطابق وثائق Goose الحالية، وخوادم ما زالت مُصانة، ونموذج أمان لا يفترض أنك تثق في النموذج.',
    metaDescription:
      'كيف تستخدم MCP مع Ollama: اربط نموذجاً محلياً بالملفات وPostgres والمتصفح وGitHub عبر Goose. إعدادات تعمل، وخوادم مُصانة، وأذونات آمنة لوكيلك المحلي.',
    twitterDescription:
      'Ollama لا يتحدث MCP — العميل هو من يفعل. إعداد Goose يعمل، والخوادم المُصانة التي تُثبَّت (والمؤرشفة التي تُتجنَّب)، ونموذج أمان لا يثق في النموذج.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'المطورون والمستخدمون ذوو الخلفية التقنية الذين يشغّلون النماذج اللغوية المحلية عبر Ollama ويريدون نموذجاً يستطيع فعل أشياء حقيقية — استعلام قواعد البيانات وتحرير الملفات وأتمتة المتصفح — دون إرسال أي شيء إلى مزوّد سحابي.',
    readTime: '15 دقائق قراءة',
    educationalLevel: 'Advanced',
    primaryTerm: 'وكيل MCP محلي',
    targetKeywords: [
      'mcp ollama عربي',
      'إعداد خادم mcp محلي',
      'model context protocol محلي',
      'استدعاء أداة ollama',
      'وكيل ذكاء اصطناعي محلي mcp',
      'mcp بدون claude desktop',
      'إعداد ollama mcp',
      'إضافة خادم mcp إلى ollama',
    ],
    leadAnswerBlock:
      '**يتيح بروتوكول سياق النموذج (MCP) لنموذج Ollama المحلي استدعاء الأدوات — قراءة ملف، وتشغيل استعلام SQL، والنقر على رابط ويب، وفتح pull request — عبر واجهة JSON-RPC قياسية يستطيع أي عميل متوافق مع MCP (Goose وCline وContinue.dev وLM Studio) التخاطب بها. البروتوكول مفتوح، والخوادم المستخدمة هنا مفتوحة المصدر، ولا شيء يستلزم Claude Desktop أو أي حساب سحابي. شغّل Ollama، وثبّت عميل MCP واحداً، وأضف ملف إعداد `mcp.json` يسمّي الخوادم التي تريدها، وسيصبح نموذج استدعاء الأدوات (Gemma 4 أو GLM-4.7 أو Qwen3.6 أو Qwen3 أو Llama 3.3) وكيلاً يعمل على جهازك بأذونات تتحكم فيها أنت. السر في نموذج الأمان: لا توافق تلقائياً على أدوات الكتابة أبداً، وقيّد وصول filesystem بدليل واحد، وأبقِ خادم قاعدة البيانات في وضع القراءة فقط افتراضياً.**',
    quickAnswerTop: {
      ar: {
        question: 'هل يمكنني تشغيل وكلاء ذكاء اصطناعي محلياً مع MCP وOllama؟',
        answer:
          'نعم — والإعداد الآن صغير بما يكفي لإنجازه في بعد ظهر واحد. شغّل Ollama مع نموذج يدعم استدعاء الأدوات (Gemma 4 أو GLM-4.7 أو Qwen3.6 أو Qwen3 أو Llama 3.3 70B)، وثبّت عميلاً يدعم MCP (Goose هو الأكثر مباشرةً كأداة سطر أوامر؛ وCline وContinue.dev وLM Studio عملاء MCP أيضاً)، وأضف خوادم MCP للقدرات التي تريدها — `filesystem` للملفات، وخادم Postgres لقواعد البيانات، وPlaywright MCP لأتمتة المتصفح، والخادم الرسمي من GitHub لإدارة المستودعات. Ollama نفسه لا يملك إعدادات MCP: تضيف الخوادم في العميل. البروتوكول هو نفسه الذي يستخدمه Claude Desktop؛ الفرق الوحيد هو النموذج والعميل. حافظ على الأمان بعزل خادم الملفات في دليل واحد، وإبقاء خادم قاعدة البيانات في وضع القراءة فقط افتراضياً، وعدم الموافقة التلقائية على أدوات الكتابة أو shell.',
        bullets: [
          'MCP مفتوح ويعمل بالكامل محلياً — لا Claude Desktop، لا حساب Anthropic، لا استدعاءات سحابية مطلوبة.',
          'Ollama يوفر النموذج؛ وعميل MCP (Goose أو Cline أو Continue.dev أو LM Studio) يربط Ollama بخوادم MCP عبر JSON-RPC.',
          'أربعة أنواع من الخوادم تغطي معظم سير العمل الحقيقية: filesystem، وقاعدة بيانات (Postgres)، ومتصفح (Playwright MCP)، وGitHub. أما الخوادم المرجعية القديمة لـSQLite وPostgreSQL وPuppeteer وGitHub فقد أُرشفت ولم تعد مُصانة.',
          'موثوقية استدعاء الأدوات خاصية تعتمد على النموذج: Gemma 4 31B وGLM-4.7 Flash وQwen3.6 27B وQwen3 32B وQwen3-Coder 30B وLlama 3.3 70B يتعاملون مع MCP بشكل نظيف. النماذج التي تقل عن 7B تُصدر tool calls مشوّهة بانتظام.',
          'نموذج الأمان: قيّد وصول filesystem بدليل واحد، وشغّل خوادم قاعدة البيانات في وضع القراءة فقط، وضع كل أداة كتابة أو shell خلف موافقة صريحة.',
          'التكلفة: صفر إنفاق على API، لكن التوكنات تُستهلك محلياً — حلقات الوكيل مكثّفة في التوكنات، لذا استخدم نموذجاً بسياق 32K+ وجهازاً يشغّله بسرعة مفيدة.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'ما يُتيحه MCP', anchor: '#what-mcp-unlocks' },
      { label: 'مقارنة خوادم MCP', anchor: '#server-comparison' },
      { label: 'البنية: كيف تتلاءم الأجزاء', anchor: '#architecture' },
      { label: 'الإعداد: Ollama + Goose في 15 دقيقة', anchor: '#setup' },
      { label: 'خادم Filesystem', anchor: '#filesystem-server' },
      { label: 'خوادم قواعد البيانات (Postgres وSQLite)', anchor: '#database-server' },
      { label: 'خادم المتصفح (Playwright)', anchor: '#browser-server' },
      { label: 'خادم GitHub', anchor: '#github-server' },
      { label: 'نموذج الأمان', anchor: '#security-model' },
      { label: 'MCP محلي مقابل Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'اختيار نموذج استدعاء الأدوات', anchor: '#picking-model' },
      { label: 'MCP مقابل Function Calling البسيط', anchor: '#mcp-vs-function-calling' },
      { label: 'الأخطاء الشائعة', anchor: '#common-mistakes' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'قراءة ذات صلة', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      'العرض التقديمي يشمل: كيف يحوّل MCP نموذج Ollama المحلي إلى وكيل يستعلم عن قواعد البيانات ويقرأ الملفات ويتحكم في المتصفح ويفتح pull requests؛ وأنواع الخوادم الأربعة (filesystem وقاعدة البيانات والمتصفح وGitHub) مع صعوبة الإعداد ومستوى المخاطر؛ ودليل إعداد Goose في 6 خطوات؛ ونموذج أمان لا يثق في النموذج اللغوي؛ ومقارنة مباشرة مع Claude Desktop. نزّل الـPDF بطاقة مرجعية لوكيل MCP المحلي.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP بروتوكول JSON-RPC 2.0 للأدوات.** يتصل النموذج (عبر عميل) بخادم MCP واحد أو أكثر؛ يعرض كل خادم Tools (دوال قابلة للاستدعاء) وResources (بيانات قابلة للقراءة) وPrompts (قوالب). صيغة النقل واحدة سواء كان العميل Claude Desktop أو Goose أو Cline أو Continue.dev أو LM Studio.',
          '**Ollama لا يتحدث MCP مباشرةً — عميل MCP هو الذي يحيط بـOllama.** Goose (مفتوح المصدر، وأصله من Block) هو أبسط أداة سطر أوامر بدعم أصلي لـOllama؛ وCline وContinue.dev وLM Studio عملاء MCP أيضاً. تضيف الخوادم في العميل، لا في Ollama.',
          '**أربعة أنواع من الخوادم تغطي معظم الحالات:** `filesystem` (قراءة/كتابة دليل معزول، وما زال خادماً مرجعياً مُصاناً)، وخادم قاعدة بيانات (Postgres في الوضع المقيَّد)، و`@playwright/mcp` (للتحكم في المتصفح)، و`github-mcp-server` الرسمي من GitHub (إدارة المستودعات وPRs بتوكن وصول شخصي). أما الخوادم المرجعية لـSQLite وPostgreSQL وPuppeteer وGitHub فقد أُرشفت ولا تتلقى أي إصلاحات.',
          '**موثوقية استدعاء الأدوات تزداد مع حجم النموذج وتدريبه.** Gemma 4 31B وGLM-4.7 Flash وQwen3.6 27B وQwen3 32B وQwen3-Coder 30B وLlama 3.3 70B تتعامل مع MCP بشكل نظيف عند Q4_K_M. النماذج التي تقل عن 7B تُصدر tool calls مشوّهة بانتظام وتوقف الحلقة.',
          '**نموذج الأمان يفترض أن النموذج غير موثوق.** اعزل خادم filesystem في دليل واحد، وشغّل خادم قاعدة البيانات بدور للقراءة فقط، ولا توافق تلقائياً على أدوات `execute_command` أو `write_file`، وراجع سجل التدقيق بعد الجلسات الطويلة.',
          '**MCP المحلي مقابل Claude Desktop:** البروتوكول نفسه ومنظومة الخوادم نفسها. المكدس المحلي يستبدل النموذج السحابي بنموذج يعمل دون اتصال — خصوصية، وبلا تكلفة لكل توكن، وبلا حدود معدل، مقابل نموذج أقل ذكاءً وتحمّلك مسؤولية إعدادات الأمان بنفسك.',
          '**التكلفة صفر في رسوم API لكنها حقيقية في التوكنات.** قد تستهلك حلقات الوكيل 30K–80K توكن لمهمة واحدة متعددة الخطوات. استخدم نموذجاً بسياق 32K كحد أدنى؛ و128K مريح.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**البروتوكول:** JSON-RPC 2.0 عبر stdio (عملية فرعية محلية) أو Streamable HTTP (عن بُعد). نقل HTTP+SSE الأقدم مهجور. يستخدم الوكلاء المحليون stdio تقريباً حصراً. المراجعة الحالية للمواصفة هي 2026-07-28.',
          '**الأصل:** أنشأته Anthropic كمواصفة مفتوحة (modelcontextprotocol.io). لا يزال عدد قليل فقط من الخوادم المرجعية مُصاناً في `modelcontextprotocol/servers` (filesystem وgit وfetch وmemory وغيرها)؛ أما SQLite وPostgreSQL وPuppeteer وGitHub فقد انتقلت إلى `servers-archived`. والموردون يشحنون الآن خوادمهم الخاصة.',
          '**العملاء المحليون:** Goose (مفتوح المصدر، المستودع `aaif-goose/goose`)، وCline (امتداد VS Code)، وContinue.dev (VS Code/JetBrains)، وLM Studio (تطبيق سطح مكتب)، إضافة إلى عدة أدوات سطر أوامر.',
          '**نماذج Ollama المتوافقة:** أي نموذج بتدريب أصلي على استدعاء الأدوات، مثل Gemma 4 31B وGLM-4.7 Flash وQwen3.6 27B وQwen3 32B وQwen3-Coder 30B وLlama 3.3 70B.',
          '**النقل الافتراضي للخوادم:** stdio للعمليات المحلية؛ وStreamable HTTP فقط عندما تحتاج إلى مشاركة خادم بين أجهزة أو وكلاء.',
          '**الإعداد يقع في العميل:** يقرأ Goose كتلة `extensions` في `~/.config/goose/config.yaml` (أو عبر `goose configure`)؛ وCline وContinue.dev لهما إعدادات MCP خاصة بهما. الحقول هي الفكرة نفسها في كل مكان: اسم الخادم، والأمر، والمعطيات، ومتغيرات البيئة.',
          '**لا يلزم Claude Desktop.** البروتوكول مفتوح ومستقل عن Claude Desktop؛ والخوادم المستخدمة هنا مفتوحة المصدر (تحقق من ترخيص كل منها) وتعمل مع أي عميل متوافق.',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'ما يُتيحه MCP لنموذج محلي',
        content:
          '**النموذج اللغوي المحلي بلا أدوات لا يستطيع سوى الرد بنص. مع MCP يستطيع النموذج نفسه أن يعمل على جهازك.** هذا هو الفرق بين روبوت محادثة ووكيل.',
        items: [
          '**"ابحث عن كل TODO في هذا المستودع، وجمّعها حسب الملف، واكتب ملخصاً بصيغة Markdown في `notes/todos.md`."** — خادم `filesystem` يقرأ، والنموذج يجمّع، والخادم نفسه يكتب. رحلة واحدة من البداية إلى النهاية.',
          '**"اعرض لي أفضل 10 عملاء من حيث الإيرادات هذا الربع، ثم ارسمها بيانياً."** — خادم `postgres` ينفّذ SQL (بدور للقراءة فقط)، والنموذج يلخّص، ويكتب ملف CSV عبر `filesystem` لأداة الرسم لديك.',
          '**"افتح الصفحة الرئيسية لـHacker News، وابحث عن أهم ثلاثة أخبار عن الذكاء الاصطناعي، ولخّصها، وأضفها إلى قائمة قراءتي."** — خادم `playwright` يتحكم في المتصفح، والنموذج يستخرج ويلخّص، و`filesystem` يضيف.',
          '**"افتح مسودة PR بعنوان `chore: bump deps` على الـfork الخاص بي واربطها بتشغيل CI الفاشل."** — خادم `github` ينشئ الـPR، ويجلب التشغيل، ويكتب الرابط في الوصف.',
          '**"انظر إلى آخر 100 صف في `events.db` وأخبرني أي معرّفات مستخدمين مسؤولة عن ارتفاع الأخطاء الجديد."** — خادم قاعدة بيانات يستعلم عن نسخة من البيانات؛ والنموذج يحلل؛ وتقرأ الإجابة في لوحة المحادثة.',
          'كل واحد من هذه سير عمل من جملة إلى إجراء، كان يتطلب سابقاً إما نموذجاً سحابياً بأدوات مستضافة أو سكربتاً مكتوباً يدوياً. MCP هو الطبقة التي تتيح لك إعادة استخدام الخوادم نفسها عبر العملاء، والنموذج نفسه عبر الخوادم.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: 'مقارنة الخوادم الأربعة الأكثر استخداماً في MCP',
        content:
          'تغطي الخوادم أدناه معظم حالات "أريد أن يفعل نموذجي المحلي شيئاً حقيقياً". كلها مفتوحة المصدر وتعمل كعمليات فرعية محلية (أو حاوية Docker) يطلقها عميل MCP. تحقق من حالة الصيانة قبل تثبيت أي منها.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'ابدأ بخادم filesystem (5 دقائق، مخاطرة منخفضة)، وأضف خادم قاعدة بيانات للعمل على البيانات، وأضف خادم المتصفح عند الحاجة فقط، وأدخل GitHub حين تثق بالنموذج على جهازك.',
          },
          {
            type: 'plain-terms',
            text: 'أربعة خوادم تغطي معظم ما تريد من وكيل محلي. خادم الملفات يقرأ ويكتب الملفات في مجلد تختاره. خادم قاعدة البيانات ينفّذ استعلامات على Postgres. خادم المتصفح يشغّل نافذة متصفح حقيقية ليقرأ النموذج الصفحات التي تحتاج JavaScript. خادم GitHub يفتح issues وPRs على مستودعاتك. يبدأ معظمها بأمر واحد (npx أو uvx أو Docker) ويعمل على جهازك، ولا يتصل أي منها بالإنترنت إلا عند الحاجة: خادما المتصفح وGitHub يتصلان، أما خادما الملفات وقاعدة البيانات فلا.',
          },
        ],
        columns: ['خادم MCP', 'ما يتيحه', 'صعوبة الإعداد', 'مستوى المخاطر', 'الأنسب لـ'],
        rows: [
          { 'خادم MCP': 'Filesystem (مرجعي)', 'ما يتيحه': 'قراءة الملفات وكتابتها داخل دليل معزول', 'صعوبة الإعداد': 'سهل (مسار واحد في قائمة السماح)', 'مستوى المخاطر': 'متوسط — قيّده بإحكام', 'الأنسب لـ': 'الأتمتة الشخصية وتدوين الملاحظات وتلخيص المستودعات' },
          { 'خادم MCP': 'SQLite (مؤرشف)', 'ما يتيحه': 'الاستعلام عن ملف قاعدة بيانات SQLite محلي', 'صعوبة الإعداد': 'سهل، لكنه لم يعد مُصاناً', 'مستوى المخاطر': 'متوسط — بلا إصلاحات، استخدم نسخة من الملف', 'الأنسب لـ': 'استكشاف بيانات مؤقت فقط' },
          { 'خادم MCP': 'Postgres (postgres-mcp)', 'ما يتيحه': 'الاستعلام عن Postgres في الوضع المقيَّد (قراءة فقط)', 'صعوبة الإعداد': 'متوسط (دور + URI)', 'مستوى المخاطر': 'متوسط — الوضع المقيَّد ودور للقراءة فقط', 'الأنسب لـ': 'استكشاف البيانات والتقارير ونماذج BI الأولية' },
          { 'خادم MCP': 'Playwright (@playwright/mcp)', 'ما يتيحه': 'التحكم في متصفح عبر لقطات إمكانية الوصول للتصفح والكشط وتعبئة النماذج', 'صعوبة الإعداد': 'متوسط (ملفات المتصفح، زمن الاستجابة)', 'مستوى المخاطر': 'مرتفع — يستطيع إرسال النماذج والنقر على أي شيء', 'الأنسب لـ': 'البحث والكشط واختبارات الانحدار' },
          { 'خادم MCP': 'GitHub (الرسمي)', 'ما يتيحه': 'سرد المستودعات وقراءة الملفات وفتح issues وPRs', 'صعوبة الإعداد': 'متوسط (Docker + PAT في متغير بيئة)', 'مستوى المخاطر': 'متوسط — قيّد التوكن بمستودعات محددة', 'الأنسب لـ': 'سير عمل التطوير والفرز وصياغة PRs' },
          { 'خادم MCP': 'مخصص', 'ما يتيحه': 'أي شيء يمكن التعبير عنه كأدوات JSON-RPC', 'صعوبة الإعداد': 'صعب (تكتب الخادم بنفسك)', 'مستوى المخاطر': 'متغير', 'الأنسب لـ': 'واجهات API الداخلية والأنظمة المتخصصة وكود الربط' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'نُقلت الخوادم المرجعية لـSQLite وPostgreSQL وPuppeteer وGitHub إلى مستودع `servers-archived` ولم تعد مُصانة. حزم npm الخاصة بـPostgreSQL وPuppeteer وGitHub موسومة بأنها "لم تعد مدعومة"، وخادم SQLite (حزمة Python، آخر إصدار منها في أبريل 2025) لا يتلقى إصلاحات أيضاً. استخدم الخوادم المُصانة في هذا الجدول، واقرأ كود أي خادم يحتاج إلى بيانات اعتماد.',
          },
        ],
      },
      architecture: {
        id: 'architecture',
        title: 'كيف تتلاءم الأجزاء معاً',
        content:
          '**ثلاث عمليات وبروتوكول مشترك واحد.** يعيش النموذج في Ollama، ويتحدث العميل MCP، ويعرض كل خادم مجموعة صغيرة من الأدوات. كل استدعاء أداة ينتقل من العميل إلى الخادم، وينفَّذ محلياً، ويعيد JSON.',
        items: [
          '**Ollama** يعمل كخدمة في الخلفية على `127.0.0.1:11434` ويقدّم النموذج عبر API متوافق مع OpenAI. لا يعرف ما هو MCP — يجيب فقط على chat completions ويُصدر tool calls حين يطلبها النموذج.',
          '**عميل MCP** (Goose أو Cline أو Continue.dev أو LM Studio) هو الجسر. يتحدث مع Ollama للنموذج ومع خوادم MCP للأدوات. حين يُصدر النموذج tool call، يوجّهها العميل إلى الخادم المناسب، ويستلم النتيجة، ويعيدها إلى المحادثة.',
          '**خوادم MCP** عمليات فرعية مستقلة، واحدة لكل قدرة. تتحدث JSON-RPC 2.0 عبر stdio. يعلن كل خادم قائمة Tools وResources وPrompts؛ ويدمجها العميل في سطح الأدوات المعروض على النموذج.',
          '**نقل stdio يُبقي كل شيء محلياً.** يطلق العميل الخادم، ويتواصل معه عبر stdin/stdout، وينتهي الخادم حين ينتهي العميل. لا شيء يمر عبر الشبكة ما لم يفتح الخادم نفسه اتصالاً (خادم المتصفح يفعل؛ أما خادما filesystem وقاعدة البيانات فلا).',
          '**يرى النموذج قائمة أدوات مسطحة واحدة.** من منظور النموذج لا توجد خوادم — فقط قائمة بأسماء أدوات مثل `filesystem.read_file` و`playwright.browser_navigate` و`github.create_pull_request`. والعميل يتولى التوجيه.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'البنية مطابقة لبنية Claude Desktop. الاختلافات هي النموذج (نموذج Ollama محلي بدل Claude) والعميل (Goose/Cline/Continue.dev/LM Studio بدل Claude Desktop). خوادم MCP هي نفسها — يمكنك تشغيل خادم filesystem تحت Claude Desktop اليوم وسيعمل دون تغيير تحت Goose غداً.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-ar.svg',
        imageCaption:
          'مخطط معمارية MCP: يوفر Ollama النموذج المحلي، ويربط عميل MCP (Goose أو Cline أو Continue.dev أو LM Studio) بخوادم MCP عبر stdio باستخدام JSON-RPC 2.0، وتعرض أربعة أنواع من الخوادم — الملفات وقاعدة البيانات والمتصفح وGitHub — الأدوات الفعلية.',
      },
      setup: {
        id: 'setup',
        title: 'الإعداد: Ollama + Goose في 15 دقيقة',
        content:
          '**Goose هو أبسط طريق إلى وكيل MCP محلي يعمل.** وكيل مفتوح المصدر (أصله من Block ويُطوَّر الآن في `aaif-goose/goose`) بواجهة سطر أوامر ودعم أصلي لـ[Ollama](https://ollama.com/)، وسطح محادثة تفاعلي، وملف إعداد واحد لجميع خوادم [بروتوكول سياق النموذج (MCP)](https://modelcontextprotocol.io/). Continue.dev وCline وLM Studio تعمل أيضاً — لكن Goose أقل كلفة إعداد في أول تجربة.',
        items: [
          '**الخطوة 1 — ثبّت Ollama.** نزّله من [ollama.com/download](https://ollama.com/) (macOS/Windows/Linux). تأكد أن الخدمة تعمل بالأمر `curl http://127.0.0.1:11434/api/tags`.',
          '**الخطوة 2 — نزّل نموذجاً يدعم استدعاء الأدوات.** اختر من Gemma 4 31B (`gemma4:31b`) أو GLM-4.7 Flash (`glm-4.7-flash`) أو Qwen3.6 27B (`qwen3.6:27b`) أو Qwen3 32B (`qwen3:32b`) أو Llama 3.3 70B (`llama3.3:70b`). 24 GB من VRAM تشغّل نماذج 26B–32B عند Q4_K_M بارتياح؛ وجهاز Mac بذاكرة موحدة 32 GB يستوعبها مع بقاء نحو 4–6 GB فقط للسياق (يحتاج macOS إلى 8 GB).',
          '**الخطوة 3 — ثبّت Goose.** على macOS أو Linux شغّل `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash` (أو `brew install block-goose-cli`). على Windows استخدم مثبّت PowerShell من وثائق Goose، أو WSL. تُثبَّت الأداة باسم `goose`.',
          '**الخطوة 4 — اضبط Ollama كمزوّد.** شغّل `goose configure`، واختر `ollama` كمزوّد، واضبط النموذج على الذي نزّلته، واضبط المضيف على `http://127.0.0.1:11434` (ترك الحقل فارغاً يعني localhost:11434 أيضاً). يكتب Goose ذلك في `~/.config/goose/config.yaml`. قد تكون نافذة السياق الافتراضية في Ollama صغيرة (توثيق Goose يذكر 4096 توكن)، وقد يجعل ذلك Goose يتجاهل إضافاته — شغّل Ollama مع `OLLAMA_CONTEXT_LENGTH=32768` (أو أعلى).',
          '**الخطوة 5 — أضف خادم filesystem MCP.** شغّل `goose configure`، واختر Add Extension، ثم Command-line Extension، أو أضف كتلة `extensions` إلى `~/.config/goose/config.yaml` (المثال أدناه). للتجربة السريعة، الأمر `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"` يفعّله لتلك الجلسة فقط. ابدأ `goose session` واطلب منه سرد الملفات في دليل الاختبار. الدور الأول يؤكد أن الخادم متصل.',
          '**الخطوة 6 — تحقق بمهمة حقيقية.** جرّب `goose session` واطلب: "أنشئ قائمة بكل ملف Markdown في `notes/` مع العنوان وعدد الكلمات، واكتب النتيجة في `notes/index.md`." إذا قرأ الوكيل ولخّص وكتب النتيجة، فالحلقة تعمل.',
        ],
        codeBlock: '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: 'إذا كنت تستخدم Cline أو Continue.dev بالفعل، فتجاوز Goose واستخدمهما — كلاهما عميل MCP. لكل منهما إعدادات MCP خاصة به (راجع وثائقه لمعرفة الملف بالضبط)؛ النموذج والخوادم هي نفسها، ولا يتغير سوى التطبيق المضيف وصيغة إعداده.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-ar.svg',
        imageCaption:
          'تدفق إعداد من ست خطوات لـ Ollama وGoose: تثبيت Ollama، وتنزيل نموذج يدعم استدعاء الأدوات مثل gemma4:31b، وتثبيت Goose بالسكربت الرسمي، وتهيئة المزوّد، وإضافة خادم الملفات MCP، والتحقق بمهمة حقيقية خلال نحو 15 دقيقة.',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'خادم Filesystem: قراءة دليل معزول وكتابته',
        content:
          '**خادم الملفات هو أول ما يُثبَّت وأسهل ما يُقيَّد بأمان.** يعرض `read_file` و`write_file` و`list_directory` و`move_file` و`search_files` و`create_directory` — كلها مقيّدة بمسار واحد أو أكثر في قائمة السماح.',
        items: [
          '**التثبيت:** الخادم المرجعي هو `@modelcontextprotocol/server-filesystem`، يُشغَّل عبر `npx -y` (لا حاجة لتثبيت عام؛ يلزم Node.js). وهو أحد الخوادم المرجعية التي ما زالت مُصانة. يطلقه Goose وCline وContinue.dev من إعداداتها.',
          '**مسارات السماح:** يقبل الخادم وسيطاً واحداً أو أكثر لأدلة ويرفض أي عملية خارجها. مرّر دائماً مساراً صريحاً وضيقاً — لا `~` ولا `/` أبداً.',
          '**الأدوات المعروضة:** `read_file` و`read_multiple_files` و`write_file` و`edit_file` (استبدالات على مستوى الأسطر) و`list_directory` و`search_files` و`move_file` و`create_directory` و`directory_tree`. يراها النموذج باسم `filesystem.read_file` وهكذا.',
          '**تسهيلات الاستخدام:** `directory_tree` يعيد شجرة JSON؛ مثالية ليتعرّف النموذج على البنية قبل قراءة ملفات محددة. و`search_files` يجري بحثاً تكرارياً شبيهاً بـgrep.',
          '**سطح المخاطر:** يحترم الخادم قائمة السماح، لكنه داخلها يملك صلاحية قراءة وكتابة كاملة. اعتبر قائمة السماح الحاجز الوحيد، واختر دليل عمل مخصصاً بدل مجلدك الرئيسي.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'لا تضع `/` أو دليلك الرئيسي في قائمة السماح أبداً. أنشئ مجلد `agent-workspace` مخصصاً، وضع فيه نسخاً من الملفات التي تريد للوكيل لمسها، ودعه يعمل داخل ذلك المجلد فقط. إذا حدث خطأ، يتوقف نطاق الضرر عند دليل واحد.',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: 'خوادم قواعد البيانات: الاستعلام بأمان عن Postgres (وSQLite)',
        content:
          '**يحوّل خادم قاعدة البيانات النموذج إلى محلل مبتدئ يجيب عن أسئلة مدعومة ببيانات حقيقية — شرط أن تُبقيه للقراءة فقط.** الخادمان المرجعيان الأصليان لـSQLite وPostgreSQL مؤرشفان، لذا استخدم خادم Postgres مُصاناً وتعامل مع SQLite بحذر.',
        items: [
          '**Postgres: `postgres-mcp` (من Crystal DBA، ترخيص MIT)** هو الخيار الذي يملك وضع القراءة فقط (آخر إصدار على PyPI يعود إلى مايو 2025، فتحقق من نشاط المستودع قبل الاعتماد عليه). شغّله بـ`uvx postgres-mcp --access-mode=restricted` (أو `pipx install postgres-mcp`، أو صورة Docker الخاصة به) ومرّر URI الاتصال في متغير البيئة `DATABASE_URI`. الوضع المقيَّد يسمح بمعاملات القراءة فقط وبحد زمني للاستعلام؛ أما الوضع غير المقيَّد فللتطوير فقط.',
          '**استخدم دوراً مخصصاً للقراءة فقط أيضاً.** الوضع المقيَّد حاجز، ودور قاعدة البيانات حاجز آخر. أنشئ دور `agent_ro` بصلاحيات SELECT فقط واستخدم سلسلة اتصال ذلك الدور.',
          '**SQLite: الخادم المرجعي مؤرشف.** هو حزمة Python باسم `mcp-server-sqlite` (وليس حزمة npm؛ آخر إصدار في أبريل 2025)، وقد يظل يعمل، لكنه لا يتلقى إصلاحات. وجّهه إلى نسخة من الملف فقط، لا إلى نسختك الوحيدة، أو حمّل البيانات في Postgres بدلاً من ذلك. اقرأ كود أي خادم SQLite من المجتمع قبل أن تمنحه ملفاً.',
          '**الوعي بالمخطط:** اطلب من الوكيل "اسرد الجداول ووصف الأكثر استخداماً منها (خمسة)" قبل طرح أسئلة تحليلية — يكون النموذج أدق بكثير بعد فحص المخطط مما لو خمّن أسماء الأعمدة.',
          '**التكلفة:** الاستعلامات تضرب قاعدة بياناتك مباشرةً. استعلام `SELECT *` سيئ الصياغة على جدول من 100 مليون صف حادث هنا كما لو صدر من إنسان — أبقِ الدور على مجمّع اتصالات منفصل مع مهلة للاستعلام (statement timeout).',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'أنشئ دور Postgres مرة واحدة ولا تمنح الوكيل أي شيء آخر: `CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` ثم أضف `statement_timeout = 30s` إلى الدور. لن يستطيع الوكيل الكتابة ولا الحذف ولا العمل إلى الأبد.',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: 'خادم المتصفح: التحكم في متصفح عبر Playwright MCP',
        content:
          '**خادم المتصفح هو الأقوى والأخطر بين الأربعة.** يطلق متصفحاً حقيقياً ويعرض التنقل والنقر وتعبئة النماذج ولقطات الشاشة — أي أنه يستطيع فعل أي شيء تفعله في المتصفح، بما في ذلك إرسال النماذج.',
        items: [
          '**أي خادم:** استخدم `@playwright/mcp` من Microsoft (`npx @playwright/mcp@latest`). حزمة `@modelcontextprotocol/server-puppeteer` القديمة موسومة بأنها "لم تعد مدعومة"، ولا توجد حزمة باسم `@modelcontextprotocol/server-playwright` على npm.',
          '**الأدوات المعروضة:** `browser_navigate` و`browser_snapshot` و`browser_click` و`browser_type` و`browser_fill_form` و`browser_evaluate` (تشغيل JavaScript) و`browser_take_screenshot` و`browser_tabs` و`browser_wait_for`. يقرأ النموذج الصفحة عبر `browser_snapshot` (لقطة إمكانية وصول، وتوصي Playwright MCP بها على لقطات الشاشة عند تنفيذ الإجراءات) ويستخدم لقطات الشاشة للاطلاع فقط.',
          '**زمن الاستجابة:** جلسات المتصفح الحقيقية تستغرق 1–5 ثوانٍ لكل إجراء. وتصفح متعدد الخطوات يستهلك بسهولة 30–60 ثانية وعشرات الآلاف من التوكنات لأن محتوى الصفحة كبير. استخدم نافذة سياق 32K+.',
          '**مراجع العناصر:** ينقر النموذج على العناصر بحسب المراجع في اللقطة. النماذج الأصغر تختار العنصر الخطأ كثيراً؛ ونموذج 27B+ يدعم استدعاء الأدوات يتعامل مع الأنماط الشائعة بموثوقية. أبقِ المهام محددة النطاق — "استخرج عنوان هذا الرابط وفقرته الأولى" أوثق بكثير من "تنقّل في الموقع وابحث عن صفحة التواصل".',
          '**حالات الاستخدام المناسبة:** البحث (افتح الصفحة ولخّصها وأضفها إلى الملاحظات)، واختبارات الانحدار (تنقّل وانقر والتقط لقطة)، وتعبئة النماذج في صفحات تتحكم بها. **وغير المناسبة:** كل ما تترتب على نقرة خاطئة فيه عواقب على الويب الحي.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'لا تمنح خادم المتصفح بيانات اعتماد أبداً. إذا احتجت جلسة موثَّقة، فسلّم الوكيل ملف تعريف متصفح موثَّقاً مسبقاً، ولا تدعه يتصفح مواقع عالية الأثر (البنوك والبريد ولوحات السحابة ونماذج الدفع). النموذج لا يملك حكماً على ما يفعله الزر — يرى نصاً وينقر. تعامل معه كمتدرب بلا سياق وبلا وسيلة للتراجع.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'خادم GitHub: المستودعات وIssues وPRs من نموذج محلي',
        content:
          '**يحوّل خادم GitHub أعمال المستودعات بلغة طبيعية إلى استدعاءات API.** وهو أبسط الأربعة إعداداً وأسهلها تقييداً بدقة عبر أذونات توكن الوصول الشخصي (PAT).',
        items: [
          '**التثبيت:** استخدم `github/github-mcp-server` الرسمي من GitHub، يُشغَّل من صورة Docker الخاصة به (`ghcr.io/github/github-mcp-server`) مع PAT في متغير البيئة `GITHUB_PERSONAL_ACCESS_TOKEN`. حزمة npm القديمة `@modelcontextprotocol/server-github` موسومة بأنها "لم تعد مدعومة"؛ لا تستخدمها في الإعدادات الجديدة.',
          '**الأدوات المعروضة:** `search_repositories` و`get_file_contents` و`create_or_update_file` و`create_pull_request` و`list_issues` و`create_issue` و`add_issue_comment` و`merge_pull_request`، وغيرها الكثير. السطح الكامل كبير؛ ومعظم المهام تستخدم 5–10 أدوات.',
          '**قيّد الـPAT.** استخدم PAT دقيق الصلاحيات (fine-grained) مقيّداً بمستودعات محددة بأدنى الأذونات اللازمة (Read للتصفح، Write لإنشاء PRs وissues). لا تستخدم PAT كلاسيكياً بصلاحية `repo` لوكيل تجريبي.',
          '**سير عمل حقيقية:** الفرز ("اقرأ آخر 20 issue مفتوحة وجمّعها واقترح تسميات")، والصياغة ("اقرأ README وافتح PR يصحح الأخطاء الإملائية")، والتقارير ("أي PRs راكدة هذا الأسبوع").',
          '**سطح المخاطر:** يستطيع الوكيل إنشاء issues وPRs والتعليق عليها، و(مع صلاحيات الكتابة) دفع commits. عطّل أدوات الدمج ما لم تثق بالنموذج وسير العمل معاً — دمج بالخطأ في مستودع بـPAT دقيق الصلاحيات يمكن التراجع عنه، لكن فقط إن لاحظته سريعاً.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: 'نموذج أمان لا يثق في النموذج',
        content:
          '**النموذج الذهني الصحيح هو "النموذج اللغوي متدرب غير موثوق يحمل المفاتيح التي تعطيه إياها".** القدرات تأتي من الخوادم والأسطح التي تضعها في قائمة السماح — لا من حكم النموذج.',
        items: [
          '**اعزل خادم filesystem في دليل واحد.** لا `~` ولا `/` أبداً. اختر مجلد `agent-workspace/` وضع فيه نسخاً من الملفات التي يحتاج الوكيل لمسها. إذا حدث خطأ، فأسوأ الاحتمالات مجلد واحد.',
          '**شغّل خوادم قواعد البيانات للقراءة فقط افتراضياً.** دور `agent_ro` مخصص بصلاحيات `SELECT` فقط ومهلة استعلام 30 ثانية يزيل فئة كاملة من الحوادث.',
          '**ضع كل أداة كتابة أو shell خلف موافقة صريحة.** يدعم Goose وCline وContinue.dev جميعاً قواعد موافقة لكل أداة. اسمح بأدوات القراءة افتراضياً؛ واشترط الموافقة لـ`write_file` و`edit_file` و`execute_command` و`create_pull_request` وأي إجراء متصفح يرسل نماذج.',
          '**استخدم سجل التدقيق.** كل عميل MCP يسجّل استدعاءات الأدوات ونتائجها. بعد جلسة طويلة، افحص السجل: ستلتقط محاولات من النموذج لم تتوقعها (بعضها غير ضار، وبعضها يستحق تشديد الأذونات).',
          '**قيّد وصول الأطراف الثالثة بالتوكن بدقة.** PATs في GitHub مقيّدة بمستودعي اختبار. أدوار Postgres للقراءة فقط. جلسات متصفح بلا بيانات اعتماد. سيحاول النموذج في النهاية أشياء لم تتوقعها؛ ويجب ألا تعتمد حدود ما يستطيع فعله على إصابته الصواب.',
          '**اعزل الوكيل عن الشبكة عند التعامل مع بيانات حساسة.** عطّل وصول الشبكة على المضيف أثناء تشغيل الوكيل (أو استخدم network namespace) عند العمل على بيانات خاصة. المكدس المحلي لا يُخرج أي شيء من الجهاز أصلاً، لكن الدفاع المتعدد الطبقات يلتقط أخطاء خوادم الأطراف الثالثة.',
          '**عامل اختيار خادم MCP كأي اختيار لاعتمادية برمجية.** الخوادم المرجعية مُصانة جيداً؛ أما كثير من خوادم الأطراف الثالثة فلا. اقرأ كود الخادم قبل تثبيت أي خادم يحتاج إلى بيانات اعتماد.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'عادة مفيدة للتعافي من الأخطاء: قبل أي مهمة وكيل غير تافهة، نفّذ `git stash` (أو `git checkout -b agent/<task>`). بعد المهمة، راجع الفرق، واحتفظ بما تريد، وتخلَّ عن الباقي. هذه هي الممارسة نفسها التي تجعل جلسات Cline أو Aider الطويلة آمنة — راجع [مقارنة Continue.dev وCline وAider](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) للنمط الأوسع.',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: 'MCP محلي مقابل Claude Desktop: ما يتغير وما يبقى',
        content:
          '**البروتوكول والخوادم متطابقان. لا يتغير سوى النموذج والعميل.** هذا هو السبب الكامل لأهمية MCP — استثمارك في الأدوات ينتقل بسلاسة بين الإعدادات المحلية والسحابية.',
        columns: ['الطبقة', 'Claude Desktop', 'Ollama المحلي + Goose'],
        rows: [
          { 'الطبقة': 'النموذج', 'Claude Desktop': 'Claude (من Anthropic، سحابي)', 'Ollama المحلي + Goose': 'Gemma 4 أو GLM-4.7 أو Qwen3 أو Llama 3.3 (محلي)' },
          { 'الطبقة': 'العميل', 'Claude Desktop': 'تطبيق Claude Desktop', 'Ollama المحلي + Goose': 'Goose أو Cline أو Continue.dev أو LM Studio' },
          { 'الطبقة': 'الخوادم', 'Claude Desktop': 'خوادم MCP نفسها', 'Ollama المحلي + Goose': 'خوادم MCP نفسها' },
          { 'الطبقة': 'البروتوكول', 'Claude Desktop': 'MCP (JSON-RPC 2.0)', 'Ollama المحلي + Goose': 'MCP (JSON-RPC 2.0)' },
          { 'الطبقة': 'التكلفة لكل طلب', 'Claude Desktop': 'إنفاق API لكل توكن', 'Ollama المحلي + Goose': '0 دولار — استدلال محلي' },
          { 'الطبقة': 'الخصوصية', 'Claude Desktop': 'المحادثة تصل إلى Anthropic', 'Ollama المحلي + Goose': 'تبقى على الجهاز' },
          { 'الطبقة': 'حدود المعدل', 'Claude Desktop': 'تسري حدود معدل API', 'Ollama المحلي + Goose': 'محدودة بإنتاجية العتاد فقط' },
          { 'الطبقة': 'جودة استدعاء الأدوات', 'Claude Desktop': 'الأفضل في فئته', 'Ollama المحلي + Goose': 'جيدة مع نماذج 27B+؛ تتراجع سريعاً دون 7B' },
          { 'الطبقة': 'اشتراط الإنترنت', 'Claude Desktop': 'نعم', 'Ollama المحلي + Goose': 'فقط إذا جلب الخادم نفسه بيانات (مثل المتصفح)' },
          { 'الطبقة': 'وقت الإعداد', 'Claude Desktop': '5 دقائق', 'Ollama المحلي + Goose': '15 دقيقة (مرة واحدة)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: 'اختيار نموذج استدعاء الأدوات لـMCP المحلي',
        content:
          '**موثوقية استدعاء الأدوات تزداد مع حجم النموذج وتدريبه، لا مع أداة التشغيل.** النموذج الذي يُصدر tool calls مشوّهة في Cline سيُصدر مثلها في Goose للسبب نفسه.',
        items: [
          '**Gemma 4 31B (`gemma4:31b`)** — تدريب Google على استدعاء الأدوات هو الأفضل في فئته لهذا الحجم. يتسع في ذاكرة موحدة 32 GB (يتبقى نحو 4–6 GB للسياق) أو 24 GB VRAM عند Q4_K_M. استدلال عام جيد؛ ومحافظ نوعاً ما في الاستدعاءات المتسلسلة.',
          '**GLM-4.7 Flash (`glm-4.7-flash`)** — نموذج Zhipu يتمتع بموثوقية قوية جداً في استدعاء الأدوات ونافذة سياق 128K جاهزة. أثقل قليلاً من Gemma 4؛ ويتسع بارتياح على بطاقة 24 GB.',
          '**Qwen3.6 27B (`qwen3.6:27b`)** — خيار Qwen الأحدث على Ollama (نحو 18–19 GB، وسياق 256K، واستدعاء الأدوات مدعوم). **Qwen3 32B (`qwen3:32b`)** — متوازن؛ نموذج كثيف بحجم 32B يتعامل مع MCP بشكل نظيف ويرتاح في حلقة وكيل طويلة. **Qwen3-Coder 30B (`qwen3-coder:30b`)** هو الأفضل إذا كان عمل وكيلك مرتكزاً على الكود.',
          '**Llama 3.3 70B (`llama3.3:70b`)** — أعلى سقف لكنه الأثقل. ذاكرة موحدة 64 GB+ أو بطاقتان 24 GB عند Q4_K_M. استخدمه فقط إذا كان عتادك يتحمله؛ فالنماذج الأصغر تكفي غالباً.',
          '**تجنّب لأعمال MCP:** أي نموذج أقل من 7B وأي نموذج للأغراض العامة بلا تدريب صريح على استدعاء الأدوات. سيُصدر استدعاءات مشوّهة، وستتوقف الحلقة، وستلوم أداة التشغيل — لكنها سليمة.',
          'لتقنيات الصياغة المنظمة التي تحسّن جودة استدعاء الأدوات على أي نموذج، راجع [chain-of-thought prompting](/ar/prompt-engineering/chain-of-thought-prompting).',
          'للبيانات المقارنة المباشرة، راجع [أفضل النماذج المحلية لاستدعاء الأدوات في 2026](/ar/power-local-llm/best-local-models-tool-calling-2026).',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP مقابل Function Calling البسيط: ما الفرق',
        content:
          '**Function Calling هو ما يُصدره النموذج. MCP هو البروتوكول الذي يتيح للعملاء والأدوات أن يجد بعضهم بعضاً.** يعملان في طبقتين مختلفتين ويتعاونان؛ ولا يحل أحدهما محل الآخر.',
        items: [
          '**Function calling** قدرة في جانب النموذج: يُصدر النموذج كائن JSON منظماً يصف اسم الأداة ومعطياتها. أدوات OpenAI وAnthropic وواجهة tool-call في Ollama تستخدم الفكرة نفسها بصيغ نقل مختلفة قليلاً.',
          '**MCP** يقع فوقه: يوحّد طريقة وصف الأدوات واكتشافها واستدعائها وإعادة نتائجها عبر العمليات. نموذج function calling وحده لا يعرف شيئاً عن نظام ملفاتك؛ خادم MCP يتيح عمليات الملفات، ويربطها العميل بواجهة function calling الخاصة بالنموذج، فيستطيع النموذج استدعاءها.',
          '**الفائدة هي قابلية التشغيل البيني.** اكتب خادم الملفات مرة واحدة؛ فيستخدمه Claude Desktop وGoose وCline وContinue.dev وLM Studio دون تغيير. بدّل النموذج من Claude إلى Gemma 4؛ ولا يتغير الخادم.',
          '**يمكنك بناء وكلاء بـfunction calling الخام.** لكنك ستعيد تنفيذ معالجات الملفات وقواعد البيانات والمتصفح في كل مشروع. أما مع MCP فهي اعتماديات جاهزة.',
          '**للسكربتات لمرة واحدة، function calling الخام أبسط.** أما لكل ما تريد إعادة استخدامه عبر المشاريع أو النماذج، فMCP هو الطريق الأقل جهداً خلال أيام قليلة.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: 'الأخطاء الشائعة في إعداد MCP المحلي',
        items: [
          '**الخطأ 1: استخدام نموذج صغير للأغراض العامة.** النماذج الأقل من 7B (ومعظم نماذج 7B–13B العامة بلا ضبط دقيق على استدعاء الأدوات) تُصدر tool calls مشوّهة. استخدم نموذجاً بحجم 27B+ مضبوطاً لاستدعاء الأدوات وتوقف عن محاربة أداة التشغيل.',
          '**الخطأ 2: وضع دليلك الرئيسي في قائمة السماح.** قوائم السماح "للاختبار فقط" التي تضم `~` تنتقل إلى الاستخدام الروتيني. أنشئ `agent-workspace` مخصصاً منذ البداية.',
          '**الخطأ 3: ترك خادم قاعدة البيانات في وضع القراءة والكتابة.** استعلام `DELETE` يكتبه وكيل واثق على جدول حقيقي هو بالضبط الحادث الذي يتجنبه هذا الإعداد. اجعل `agent_ro` افتراضياً؛ وأنشئ دوراً قابلاً للكتابة منفصلاً فقط للمهام التي تتطلب ذلك صراحةً، ولمدة تلك المهام فقط.',
          '**الخطأ 4: الموافقة التلقائية على كل أداة.** مفتاح "وافق على الكل" مريح وخطير. وافق تلقائياً على أدوات القراءة (`read_file` و`list_directory` و`query`)؛ واشترط الموافقة دائماً لأدوات الكتابة وshell وPR.',
          '**الخطأ 5: تشغيل نموذج بسياق 32K في عمل متصفح متعدد الخطوات.** محتوى الصفحات كبير؛ ووكيل يتصفح ثلاث صفحات قد يستهلك 32K توكن قبل أن يبدأ الاستدلال. استخدم نموذجاً بسياق 128K للمهام الثقيلة على المتصفح.',
          '**الخطأ 6: افتراض أن الوكيل يملك حكماً.** لا يملكه. النموذج لا يعرف أن "هذه قاعدة بيانات الإنتاج" أو أن "هذا الـPR سيُنشَر". الأذونات هي حاجزك الوحيد.',
          '**الخطأ 7: تثبيت كل خادم مرجعي منذ البداية.** أدوات أكثر = موجّه نظام أكبر = اختيار أدوات أبطأ وأقل موثوقية. ابدأ بـ`filesystem`. وأضف الباقي فقط حين يكون لديك سير عمل يحتاجها.',
          '**الخطأ 8: تثبيت خوادم مرجعية مؤرشفة من شروحات قديمة.** حزم npm ‏`@modelcontextprotocol/server-postgres` و`-puppeteer` و`-github` موسومة بأنها "لم تعد مدعومة"، وخادم SQLite مؤرشف. وبعض الشروحات القديمة تذكر أيضاً حزم npm غير موجودة (`server-sqlite` و`server-playwright`). استخدم الخوادم المُصانة المذكورة أعلاه.',
          '**الخطأ 9: وضع إعداد MCP في Ollama.** Ollama لا يملك إعدادات MCP. الخوادم تُضبط في العميل (`extensions` في Goose، أو إعدادات MCP في Cline أو Continue.dev).',
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[مواصفة بروتوكول سياق النموذج](https://modelcontextprotocol.io/) — المواصفة الرسمية ومخطط JSON-RPC وتعريفات النقل ودورة الحياة، بما في ذلك سجل تغييرات 2026-07-28.',
          '[مستودع modelcontextprotocol/servers على GitHub](https://github.com/modelcontextprotocol/servers) — الخوادم المرجعية المُصانة (filesystem وgit وfetch وmemory وغيرها) وقائمة الخوادم المؤرشفة.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — خادم MCP الرسمي من GitHub، وإعداد Docker والملف التنفيذي.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — خادم Playwright MCP وأدوات المتصفح فيه.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — خادم Postgres MCP بوضع وصول مقيَّد (قراءة فقط).',
          '[وثائق Goose](https://goose-docs.ai/docs/getting-started/installation) — تثبيت أداة سطر الأوامر، وإعداد مزوّد Ollama، وصيغة إعداد الإضافات (خوادم MCP).',
          '[مكتبة نماذج Ollama](https://ollama.com/library) — النماذج المحلية المتاحة، وأعلام دعم استدعاء الأدوات، ومستويات التكميم المذكورة في هذا الدليل.',
          '[مستودع Cline على GitHub](https://github.com/cline/cline) — تنفيذ عميل MCP لـVS Code، ولوحة خوادم MCP.',
          '[وثائق Continue.dev](https://docs.continue.dev/) — مرجع كتلة الإعداد `mcpServers` لعميل Continue.dev.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'ما هو MCP ولماذا يهم الذكاء الاصطناعي المحلي؟',
            a: 'MCP (بروتوكول سياق النموذج) هو بروتوكول JSON-RPC 2.0 مفتوح يتيح لعميل (Goose أو Cline أو Continue.dev أو LM Studio أو Claude Desktop) ربط نموذج لغوي بخوادم أدوات بطريقة موحّدة. يهم الذكاء الاصطناعي المحلي لأنه يوحّد الطبقة التي تحوّل نموذج المحادثة إلى وكيل — اكتب خادم أدوات مرةً واحدة واستخدمه تحت أي عميل وأي نموذج، بما في ذلك نموذج Ollama المحلي. بدون MCP، يعيد كل مشروع اختراع أدوات الملفات وقواعد البيانات والمتصفح مقابل عميله الخاص.',
          },
          {
            q: 'هل يعمل MCP بدون Claude Desktop؟',
            a: 'نعم. البروتوكول مفتوح ومستقل تماماً عن Claude Desktop. Goose وCline وContinue.dev وLM Studio كلها توفر تطبيقات عميل MCP تعمل مع نماذج Ollama المحلية. الخوادم المُصانة (filesystem وPostgres وPlaywright وGitHub) تعمل دون تعديل تحت أي عميل متوافق.',
          },
          {
            q: 'ما النماذج المحلية الأفضل دعماً لـMCP؟',
            a: 'الخيارات الأكثر موثوقيةً هي: Gemma 4 31B وGLM-4.7 Flash وQwen3.6 27B أو Qwen3 32B (أو Qwen3-Coder 30B للعمل المرتكز على الكود) وLlama 3.3 70B. جميعها لديها تدريب صريح على استدعاء الأدوات وتُصدر JSON استدعاء دوال نظيفاً يستطيع عملاء MCP توجيهه. النماذج الأقل من 7B (ومعظم النماذج العامة بدون ضبط دقيق على استدعاء الأدوات) تُنتج tool calls مشوّهة بانتظام.',
          },
          {
            q: 'هل MCP آمن؟ هل يستطيع الوكيل حذف ملفاتي؟',
            a: 'يستطيع ذلك إذا سمحت له. الأمان يأتي من كيفية إعدادك للخوادم لا من البروتوكول. خادم filesystem يعمل فقط داخل المسارات التي تضعها في قائمة السماح — قيّده بدليل `agent-workspace` مخصص. خادم قاعدة البيانات يعمل في وضع القراءة فقط حين تستخدم الوضع المقيَّد ودور SELECT فقط. اشترط دائماً موافقة صريحة لأدوات الكتابة وshell وPR؛ ووافق تلقائياً على عمليات القراءة فقط. يعرض لك سجل التدقيق بدقة ما فعله الوكيل بعد وقوعه.',
          },
          {
            q: 'هل يمكنني كتابة خادم MCP خاص بي؟',
            a: 'نعم — وحزم SDK تجعل ذلك سهلاً. حزمتا SDK الرسميتان لـTypeScript وPython (`@modelcontextprotocol/sdk` و`mcp`) تتوليان سباكة JSON-RPC. تعرّف الأدوات بمخططات JSON الخاصة بها ودالة معالجة، وتعرضها الـSDK عبر stdio. الخادم أحادي الغرض (أداة أو اثنتان تغلّفان API داخلياً) ملف من 50–100 سطر.',
          },
          {
            q: 'هل يعمل MCP على Windows؟',
            a: 'نعم. Ollama وGoose وCline وContinue.dev وLM Studio كلها تعمل على Windows. خوادم MCP تعمل كعمليات فرعية من Node.js أو Python؛ وكلا بيئتي التشغيل مدعومتان كلياً على Windows. التفصيل الوحيد الخاص بالمنصة هو التعامل مع المسارات — استخدم الشرطة المائلة للأمام في الإعداد أو اهرب الشرطات المائلة للخلف بشكل صحيح. عدا ذلك، التجربة مطابقة لـmacOS وLinux.',
          },
          {
            q: 'كيف أضع استدعاءات أدوات MCP في sandbox؟',
            a: 'ثلاث طبقات تغطي معظم المخاطر. أولاً، قيّد كل خادم بضيق في مستوى الإعداد: filesystem لدليل واحد، وقاعدة البيانات لدور قراءة فقط، وGitHub لـPAT دقيق الصلاحيات على مستودعات اختبار. ثانياً، استخدم قواعد الموافقة لكل أداة في العميل: موافقة تلقائية للقراءات، وموافقة مطلوبة للكتابات. ثالثاً، احتفظ بالوكيل داخل workspace متوافق مع `git stash` لكي تكون أي إجراءات مدمّرة قابلة للتراجع عنها عبر git. وللمهام الحساسة، شغّل على مضيف بلا وصول للشبكة عدا النقاط التي تحتاجها الخوادم صراحةً.',
          },
          {
            q: 'هل يستطيع وكلاء MCP إجراء طلبات HTTP؟',
            a: 'نعم، عبر خوادم محددة. خادم المتصفح (Playwright MCP) يشغّل متصفحاً حقيقياً ينفّذ أي طلبات ينتقل إليها النموذج. وتعرض عدة خوادم من أطراف ثالثة أدوات `http_get`/`http_post` بشكل أكثر مباشرة. أما خادما filesystem وقاعدة البيانات فلا يجريان طلبات شبكة؛ إنهما يعملان على الموارد المحلية فقط.',
          },
          {
            q: 'هل يعمل MCP مع Ollama أصلياً أم أحتاج إلى غلاف؟',
            a: 'Ollama نفسه لا يتحدث MCP — فهو يقدّم API دردشة متوافقاً مع OpenAI. تحتاج إلى عميل (Goose أو Cline أو Continue.dev أو LM Studio) يربط API الدردشة في Ollama بخوادم MCP. يوجّه العميل tool calls الصادرة عن النموذج إلى خادم MCP المناسب ويعيد النتائج إلى المحادثة. من منظور المستخدم، لا يلزم إعداد إضافي سوى تثبيت العميل وتوجيهه إلى Ollama.',
          },
          {
            q: 'ما الفرق بين MCP وFunction Calling؟',
            a: 'Function Calling هو إصدار النموذج اللغوي لـJSON منظّم يسمّي أداةً ومعطياتها — هذه قدرة النموذج. MCP هو البروتوكول الذي يتيح لخوادم الأدوات والعملاء وصف الأدوات واكتشافها واستدعاءها وإعادة نتائجها عبر العمليات — هذه طبقة قابلية التشغيل البيني. يتعاونان: العميل يحوّل تعريفات أدوات MCP إلى تنسيق function calling للنموذج، والنموذج يُصدر function call، والعميل يُعيد تعيين الاستدعاء إلى خادم MCP، والخادم ينفّذه. بدون MCP يظل function calling ممكناً؛ لكنك تُعيد تنفيذ معالجات filesystem/قاعدة البيانات/المتصفح في كل مشروع. مع MCP، تعمل الخوادم نفسها تحت أي عميل.',
          },
          {
            q: 'كيف أضيف خادم MCP إلى Ollama؟',
            a: 'لا تضيفه إلى Ollama — فـOllama لا يملك إعدادات MCP. تضيف الخادم في العميل الذي يقف أمام Ollama. في Goose، شغّل `goose configure`، واختر Add Extension، ثم Command-line Extension، وأدخل أمر الخادم (مثلاً `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`)؛ وللتجربة السريعة استخدم `goose session --with-extension "<command>"`. لدى Cline وContinue.dev إعدادات MCP خاصة بهما. تأكد أن Ollama يشغّل نموذجاً يدعم استدعاء الأدوات بنافذة سياق لا تقل عن 32K.',
          },
          {
            q: 'هل يمكنني استخدام Claude Desktop مع نماذج Ollama؟',
            a: 'ليس كإعداد مباشر. Claude Desktop يتحدث إلى نماذج Anthropic السحابية، لذا لا يشغّل نموذج Ollama. ما ينتقل من Claude Desktop هو منظومة خوادم MCP: الخوادم نفسها تعمل مع عميل MCP يدعم Ollama، مثل Goose أو Cline أو Continue.dev أو LM Studio. وهذا هو المكافئ المحلي الذي يصفه هذا الدليل.',
          },
          {
            q: 'أي خوادم MCP الرسمية مؤرشفة، وما بديلها؟',
            a: 'نُقلت الخوادم المرجعية لـSQLite وPostgreSQL وPuppeteer وGitHub (وغيرها) إلى مستودع `servers-archived` ولم تعد مُصانة؛ وحزم npm الخاصة بها (حيث توجد) موسومة بأنها "لم تعد مدعومة" ولا تتلقى إصلاحات أمنية. البدائل المُصانة: `github/github-mcp-server` الرسمي من GitHub لـGitHub، و`@playwright/mcp` من Microsoft لأتمتة المتصفح، و`postgres-mcp` (من Crystal DBA) في الوضع المقيَّد لـPostgres. أما SQLite فلا يوجد خادم رسمي مُصان، لذا استخدم نسخة من الملف مع الخادم المؤرشف أو حمّل البيانات في Postgres. ويظل خادم filesystem خادماً مرجعياً مُصاناً بنشاط.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءة ذات صلة',
        items: [
          '[أفضل النماذج المحلية لاستدعاء الأدوات في 2026](/ar/power-local-llm/best-local-models-tool-calling-2026) — معايير مقارنة مباشرة للنماذج الموصى بها أعلاه (Gemma 4 وGLM-4.7 وQwen3 وLlama 3.3).',
          '[وكلاء الذكاء الاصطناعي المحلي الذاتيون يعملون فعلاً](/ar/power-local-llm/autonomous-local-agents-actually-work) — تحقق من الواقع حول ما يستطيع وكيل MCP المحلي وما لا يستطيع فعله بشكل موثوق في مهمة طويلة الأمد.',
          '[Continue.dev مقابل Cline مقابل Aider: أفضل وكيل برمجة محلي في 2026](/ar/power-local-llm/continue-dev-vs-cline-vs-aider-local) — سياق وكيل مجاور للعمل المرتكز على الكود؛ Cline وContinue.dev أيضاً عملاء MCP.',
          '[أفضل نماذج لغوية محلية في 2026](/ar/local-llms/best-local-llms-2026) — مرجع النماذج لمشهد الأوزان المفتوحة الأشمل.',
          '[استبدال Zapier بوكلاء الذكاء الاصطناعي المحلي](/ar/power-local-llm/replace-zapier-with-local-ai-agents) — إطار أتمتة سير العمل لنفس مكدس MCP.',
          '[مركز Power Local LLM](/ar/power-local-llm) — مكتبة كاملة من الأدلة.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'إعداد Ollama مع MCP 2026: ربط النماذج المحلية بالملفات وقواعد البيانات وAPIs',
      description: 'كيف تستخدم MCP مع Ollama: اربط نموذجاً محلياً بالملفات وPostgres والمتصفح وGitHub عبر Goose. إعدادات تعمل، وخوادم مُصانة، وأذونات آمنة لوكيلك المحلي.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/local-ai-agents-with-mcp',
      inLanguage: 'ar',
      datePublished: '2026-05-24',
      dateModified: '2026-11-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-07',
    dateModified: '2026-11-06',
    last_full_refresh: '2026-11-02',
    next_refresh_due: '2027-05-02',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-02',
    designSkin: 'hub',
    theme: 'Local AI Agents & Tool Use',
    heroImage: '/images/local-ai-agents-with-mcp-2026-overview-hero-ko.webp',
    title: 'Ollama MCP 연결 방법 2026: 로컬 모델을 파일, 데이터베이스, API에 연동하기',
    seoTitle: 'Ollama MCP 연결·연동 방법 2026: 파일, DB, API',
    intro:
      'Model Context Protocol(MCP)은 로컬 Ollama 모델과 나머지 시스템 사이에 필요했던 계층입니다. 설정 파일 하나와 tool calling을 지원하는 모델만 있으면, 같은 에이전트가 Postgres 데이터베이스를 쿼리하고, 격리된 디렉터리에서 파일을 읽고 쓰고, headless 브라우저를 제어하고, GitHub에서 pull request를 열 수 있습니다. 모델과 서버는 노트북에서 실행되며, 네트워크를 사용하는 것은 브라우저 서버와 GitHub 서버뿐입니다. Ollama 자체는 MCP를 말하지 않으므로, 이 가이드는 클라이언트(Goose)로 둘을 연결합니다. 현재 Goose 문서에 맞는 설치 단계와 설정, 아직 유지되고 있는 서버, 그리고 모델을 신뢰하지 않는다고 가정하는 보안 모델을 함께 안내합니다.',
    metaDescription:
      'Ollama MCP 연결 방법: Goose로 로컬 모델을 파일, Postgres, 브라우저, GitHub에 연동합니다. 실제 설정, 유지되는 서버, 안전한 권한.',
    twitterDescription:
      'Ollama는 MCP를 직접 말하지 않습니다. 클라이언트가 연결합니다. 실제 작동하는 Goose 설정, 설치할 유지 관리 서버(와 피해야 할 보관된 서버), 모델을 신뢰하지 않는 보안 모델.',
    current_models_mentioned: [
      'Gemma 4 31B',
      'GLM-4.7 Flash',
      'Qwen3.6 27B',
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
      'Ollama를 통해 로컬 LLM을 실행하며 클라우드 제공업체에 아무것도 전송하지 않고 데이터베이스 쿼리, 파일 편집, 브라우저 자동화 등 실질적인 작업을 수행할 수 있는 모델을 원하는 기술적 지식을 가진 개발자 및 사용자.',
    readTime: '15분 분량',
    educationalLevel: 'Advanced',
    primaryTerm: '로컬 MCP 에이전트',
    targetKeywords: [
      'ollama mcp 연결',
      'ollama mcp 연동',
      'ollama mcp',
      'mcp ollama',
      'llm 브라우저 mcp 사용 방법',
      'model context protocol 로컬',
      '로컬 ai 에이전트 mcp',
      'claude desktop 없이 mcp',
    ],
    leadAnswerBlock:
      '**Model Context Protocol(MCP)을 사용하면 로컬 Ollama 모델이 파일 읽기, SQL 쿼리 실행, 웹 링크 클릭, pull request 열기 같은 도구를 호출할 수 있습니다. MCP 호환 클라이언트(Goose, Cline, Continue.dev, LM Studio)가 사용하는 표준 JSON-RPC 인터페이스를 통해서입니다. 프로토콜은 오픈되어 있고, 여기서 사용하는 서버는 오픈 소스이며, Claude Desktop이나 클라우드 계정은 필요하지 않습니다. Ollama를 실행하고, MCP 클라이언트를 하나 설치하고, 원하는 서버를 지정한 `mcp.json` 설정 파일을 배치하면, tool calling 모델(Gemma 4, GLM-4.7, Qwen3.6, Qwen3, Llama 3.3)이 사용자가 제어하는 권한으로 기기에서 작동하는 에이전트가 됩니다. 핵심은 보안 모델입니다. 쓰기 도구를 절대로 자동 승인하지 말고, filesystem 접근을 단일 디렉터리로 제한하고, 데이터베이스 서버는 기본적으로 읽기 전용 모드로 유지하십시오.**',
    quickAnswerTop: {
      ko: {
        question: 'Ollama와 MCP를 연결해 로컬 AI 에이전트를 실행할 수 있습니까?',
        answer:
          '네. 설정은 이제 오후 한 번에 끝낼 수 있을 만큼 간단합니다. tool calling 모델(Gemma 4, GLM-4.7, Qwen3.6, Qwen3 또는 Llama 3.3 70B)로 Ollama를 실행하고, MCP 호환 클라이언트를 설치하고(Goose가 가장 직접적인 CLI이며, Cline, Continue.dev, LM Studio도 MCP 클라이언트입니다), 필요한 기능에 맞는 MCP 서버를 추가하십시오. 파일에는 `filesystem`, 데이터베이스에는 Postgres 서버, 브라우저 자동화에는 Playwright MCP, 저장소 관리에는 GitHub 공식 서버를 사용합니다. Ollama 자체에는 MCP 설정이 없으며, 서버는 클라이언트에서 추가합니다. 프로토콜은 Claude Desktop이 사용하는 것과 같고, 차이는 모델과 클라이언트뿐입니다. filesystem 서버를 단일 디렉터리로 제한하고, 데이터베이스 서버를 기본적으로 읽기 전용으로 유지하고, 쓰기 또는 셸 도구를 절대로 자동 승인하지 않음으로써 보안을 유지하십시오.',
        bullets: [
          'MCP는 오픈 프로토콜이며 완전히 로컬에서 작동합니다. Claude Desktop, Anthropic 계정, 클라우드 호출이 필요하지 않습니다.',
          'Ollama가 모델을 제공하고, MCP 클라이언트(Goose, Cline, Continue.dev, LM Studio)가 JSON-RPC로 Ollama와 MCP 서버를 연결합니다.',
          '네 가지 서버가 대부분의 실제 워크플로를 커버합니다: filesystem, 데이터베이스(Postgres), 브라우저(Playwright MCP), GitHub. SQLite, PostgreSQL, Puppeteer, GitHub용 기존 참조 서버는 보관(archived)되어 더 이상 유지 관리되지 않습니다.',
          'tool calling 신뢰성은 모델의 속성입니다. Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B는 MCP를 문제없이 처리합니다. 7B 미만 모델은 잘못된 형식의 tool call을 자주 생성합니다.',
          '보안 모델: filesystem 접근을 하나의 디렉터리로 제한하고, 데이터베이스 서버를 읽기 전용으로 실행하고, 모든 쓰기 또는 셸 도구를 명시적 승인 뒤에 두십시오.',
          '비용: API 지출은 $0이지만 토큰은 로컬에서 소비됩니다. 에이전트 루프는 토큰 집약적이므로 32K 이상 컨텍스트의 모델과 적절한 속도로 실행할 수 있는 기기를 사용하십시오.',
        ],
        updatedDate: '2026-11-02',
      },
    },
    toc: [
      { label: '핵심 요점', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: 'MCP 연동으로 가능한 것', anchor: '#what-mcp-unlocks' },
      { label: 'MCP 서버 비교', anchor: '#server-comparison' },
      { label: '아키텍처: 구성 요소가 맞물리는 방식', anchor: '#architecture' },
      { label: '설정: 15분 안에 Ollama + Goose 연결', anchor: '#setup' },
      { label: 'Filesystem 서버', anchor: '#filesystem-server' },
      { label: '데이터베이스 서버 (Postgres, SQLite)', anchor: '#database-server' },
      { label: '브라우저 MCP 사용법 (Playwright)', anchor: '#browser-server' },
      { label: 'GitHub 서버', anchor: '#github-server' },
      { label: '보안 모델', anchor: '#security-model' },
      { label: '로컬 MCP vs Claude Desktop', anchor: '#vs-claude-desktop' },
      { label: 'tool calling 모델 선택', anchor: '#picking-model' },
      { label: 'MCP vs 일반 Function Calling', anchor: '#mcp-vs-function-calling' },
      { label: '일반적인 실수', anchor: '#common-mistakes' },
      { label: '출처', anchor: '#sources' },
      { label: 'FAQ', anchor: '#faq' },
      { label: '관련 읽기', anchor: '#related-reading' },
    ],
    gammaEmbedUrl: '/presentations/local-ai-agents-with-mcp-2026-static.html',
    gammaDescription:
      '이 슬라이드는 다음을 다룹니다: MCP가 로컬 Ollama 모델을 데이터베이스를 쿼리하고, 파일을 읽고, 브라우저를 제어하고, pull request를 여는 에이전트로 바꾸는 방법; 네 가지 서버 유형(filesystem, 데이터베이스, 브라우저, GitHub)의 설정 난이도와 위험 수준; Goose 설정 6단계 가이드; LLM을 신뢰하지 않는 보안 모델; Claude Desktop과의 직접 비교. 로컬 MCP 에이전트 참조 카드로 PDF를 다운로드하십시오.',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**MCP는 도구를 위한 JSON-RPC 2.0 프로토콜입니다.** 모델(클라이언트를 통해)이 하나 이상의 MCP 서버에 연결하며, 각 서버는 Tools(호출 가능한 함수), Resources(읽을 수 있는 데이터), Prompts(템플릿)를 노출합니다. 클라이언트가 Claude Desktop, Goose, Cline, Continue.dev, LM Studio 중 무엇이든 wire 형식은 동일합니다.',
          '**Ollama는 MCP를 직접 말하지 않습니다. MCP 클라이언트가 Ollama를 감쌉니다.** Goose(오픈 소스, 원래 Block에서 시작)는 Ollama를 기본 지원하는 가장 간단한 CLI이며, Cline, Continue.dev, LM Studio도 MCP 클라이언트입니다. 서버는 Ollama가 아니라 클라이언트에서 추가합니다.',
          '**네 가지 서버가 대부분의 사용 사례를 커버합니다:** `filesystem`(격리된 디렉터리에서 읽기/쓰기, 지금도 유지되는 참조 서버), 데이터베이스 서버(제한 모드의 Postgres), `@playwright/mcp`(브라우저 제어), GitHub 공식 `github-mcp-server`(personal access token으로 저장소 및 PR 관리). SQLite, PostgreSQL, Puppeteer, GitHub용 참조 서버는 보관되어 수정이 제공되지 않습니다.',
          '**tool calling 신뢰성은 모델 크기 및 훈련과 함께 확장됩니다.** Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B는 Q4_K_M에서 MCP를 문제없이 처리합니다. 7B 미만 모델은 잘못된 형식의 tool call을 자주 생성하고 루프를 멈춥니다.',
          '**보안 모델은 모델을 신뢰하지 않는다고 가정합니다.** filesystem 서버를 단일 디렉터리로 제한하고, 읽기 전용 역할로 데이터베이스 서버를 실행하고, `execute_command`나 `write_file` 도구를 절대로 자동 승인하지 말고, 긴 세션 후에는 감사 로그를 검토하십시오.',
          '**로컬 MCP vs Claude Desktop:** 동일한 프로토콜, 동일한 서버 생태계입니다. 로컬 스택은 클라우드 모델을 오프라인 모델로 바꿉니다. 프라이버시, 토큰당 비용 없음, 속도 제한 없음을 얻는 대신, 더 똑똑한 모델을 포기하고 보안 설정을 직접 관리해야 합니다.',
          '**API 수수료는 $0이지만 토큰 비용은 실제로 발생합니다.** 에이전트 루프는 다단계 작업 하나에 30K~80K 토큰을 소비할 수 있습니다. 최소 32K 컨텍스트의 모델을 사용하십시오. 128K이면 여유롭습니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**프로토콜:** stdio(로컬 하위 프로세스) 또는 Streamable HTTP(원격)를 통한 JSON-RPC 2.0. 기존 HTTP+SSE 전송은 더 이상 권장되지 않습니다(deprecated). 로컬 에이전트는 거의 stdio만 사용합니다. 현재 사양 개정판은 2026-07-28입니다.',
          '**기원:** Anthropic이 오픈 사양(modelcontextprotocol.io)으로 만들었습니다. `modelcontextprotocol/servers`에서는 일부 참조 서버(filesystem, git, fetch, memory 등)만 계속 유지 관리되며, SQLite, PostgreSQL, Puppeteer, GitHub는 `servers-archived`로 옮겨졌습니다. 이제는 각 벤더가 자체 서버를 제공합니다.',
          '**로컬 클라이언트:** Goose(오픈 소스, 저장소 `aaif-goose/goose`), Cline(VS Code 확장), Continue.dev(VS Code/JetBrains), LM Studio(데스크톱 앱), 그리고 여러 CLI 도구.',
          '**호환되는 Ollama 모델:** 네이티브 tool calling 훈련을 받은 모든 모델. 예: Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B, Qwen3 32B, Qwen3-Coder 30B, Llama 3.3 70B.',
          '**서버 전송 기본값:** 로컬 프로세스에는 stdio. 서버를 여러 기기나 에이전트가 공유해야 할 때만 Streamable HTTP를 사용합니다.',
          '**설정은 클라이언트에 있습니다:** Goose는 `~/.config/goose/config.yaml`의 `extensions` 블록(또는 `goose configure`)을 읽고, Cline과 Continue.dev에는 각자의 MCP 설정이 있습니다. 필드의 개념은 어디서나 같습니다: 서버 이름, 명령, args, 환경 변수.',
          '**Claude Desktop이 필요하지 않습니다.** 프로토콜은 오픈되어 있고 Claude Desktop과 독립적입니다. 여기서 사용하는 서버는 오픈 소스(라이선스는 각각 확인하십시오)이며 모든 호환 클라이언트에서 작동합니다.',
        ],
      },
      whatMcpUnlocks: {
        id: 'what-mcp-unlocks',
        title: 'MCP 연동으로 로컬 모델에 실제로 가능해지는 것',
        content:
          '**도구가 없는 로컬 LLM은 텍스트로만 응답할 수 있습니다. MCP를 연동하면 같은 모델이 기기에서 직접 행동할 수 있습니다.** 이 변화는 챗봇과 에이전트의 차이입니다.',
        items: [
          '**"이 저장소에서 모든 TODO를 찾아 파일별로 그룹화하고 `notes/todos.md`에 Markdown 요약을 작성하십시오."** — `filesystem` 서버가 읽고, 모델이 그룹화하고, 같은 서버가 씁니다. 처음부터 끝까지 한 번의 왕복입니다.',
          '**"이번 분기 수익 기준 상위 10개 고객을 보여주고 차트를 만드십시오."** — `postgres` 서버가 SQL을 실행하고(읽기 전용 역할), 모델이 요약하고, 차트 도구를 위해 `filesystem`으로 CSV를 씁니다.',
          '**"Hacker News 첫 페이지를 열어 상위 3개 AI 기사를 찾아 요약하고 내 읽기 목록에 추가하십시오."** — `playwright` 서버가 브라우저를 제어하고, 모델이 추출 및 요약하고, `filesystem`이 추가합니다.',
          '**"내 포크에 `chore: bump deps` 제목으로 draft PR을 열고 실패한 CI 실행을 링크하십시오."** — `github` 서버가 PR을 만들고, 실행 정보를 가져오고, 설명에 링크를 씁니다.',
          '**"`events.db`의 최근 100개 행을 보고 새 오류 급증의 원인이 된 사용자 ID를 알려주십시오."** — 데이터베이스 서버가 데이터 사본을 쿼리하고, 모델이 추론하고, 답은 채팅 패널에서 확인합니다.',
          '이 각각은 예전에는 호스팅된 도구가 있는 클라우드 모델이나 직접 작성한 스크립트가 필요했던, 문장 하나로 행동을 일으키는 워크플로입니다. MCP는 같은 서버를 여러 클라이언트에서, 같은 모델을 여러 서버에서 재사용할 수 있게 하는 계층입니다.',
        ],
      },
      serverComparison: {
        id: 'server-comparison',
        title: '가장 많이 사용되는 4개의 MCP 서버 비교',
        content:
          '아래 서버들은 "내 로컬 모델이 실제로 무언가를 하게 하고 싶다"는 요구의 대부분을 커버합니다. 모두 오픈 소스이며 MCP 클라이언트가 시작하는 로컬 하위 프로세스(또는 Docker 컨테이너)로 실행됩니다. 설치하기 전에 유지 관리 상태를 확인하십시오.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'filesystem 서버(5분, 낮은 위험)로 시작하고, 데이터 작업을 위해 데이터베이스 서버를 추가하고, 필요할 때만 브라우저 서버를 추가하고, 기기에서 모델을 신뢰할 수 있게 되면 GitHub를 도입하십시오.',
          },
          {
            type: 'plain-terms',
            text: '네 가지 서버가 로컬 에이전트에게 맡기고 싶은 작업의 대부분을 커버합니다. filesystem 서버는 선택한 폴더에서 파일을 읽고 씁니다. 데이터베이스 서버는 Postgres에 쿼리를 실행합니다. 브라우저 서버는 실제 브라우저 창을 제어하여 모델이 JavaScript가 필요한 페이지를 읽을 수 있게 합니다. GitHub 서버는 저장소에 이슈와 PR을 엽니다. 대부분 명령 하나(npx, uvx 또는 Docker)로 시작하고 자신의 기기에서 실행되며, 필요한 경우가 아니면 인터넷을 호출하지 않습니다. 브라우저와 GitHub 서버는 호출하지만, filesystem과 데이터베이스 서버는 호출하지 않습니다.',
          },
        ],
        columns: ['MCP 서버', '활성화하는 기능', '설정 난이도', '위험 수준', '이상적인 용도'],
        rows: [
          { 'MCP 서버': 'Filesystem (참조)', '활성화하는 기능': '격리된 디렉터리 내에서 파일 읽기 및 쓰기', '설정 난이도': '쉬움(허용 목록에 경로 하나)', '위험 수준': '중간 — 범위를 좁게 제한하십시오', '이상적인 용도': '개인 자동화, 노트 작성, 저장소 요약' },
          { 'MCP 서버': 'SQLite (보관됨)', '활성화하는 기능': '로컬 SQLite 데이터베이스 파일 쿼리', '설정 난이도': '쉬움, 단 더 이상 유지 관리되지 않음', '위험 수준': '중간 — 수정 없음, 파일 사본을 사용하십시오', '이상적인 용도': '일회성 데이터 탐색에만' },
          { 'MCP 서버': 'Postgres (postgres-mcp)', '활성화하는 기능': '제한(읽기 전용) 모드로 Postgres 쿼리', '설정 난이도': '중간(역할 + URI)', '위험 수준': '중간 — 제한 모드와 읽기 전용 역할', '이상적인 용도': '데이터 탐색, 보고, BI 프로토타입' },
          { 'MCP 서버': 'Playwright (@playwright/mcp)', '활성화하는 기능': '접근성 스냅샷으로 브라우저를 제어해 탐색, 스크래핑, 양식 작성', '설정 난이도': '중간(브라우저 바이너리, 지연)', '위험 수준': '높음 — 양식을 제출하고 무엇이든 클릭할 수 있습니다', '이상적인 용도': '연구, 스크래핑, 회귀 테스트' },
          { 'MCP 서버': 'GitHub (공식)', '활성화하는 기능': '저장소 나열, 파일 읽기, 이슈 및 PR 열기', '설정 난이도': '중간(Docker + 환경 변수의 PAT)', '위험 수준': '중간 — 토큰을 특정 저장소로 제한하십시오', '이상적인 용도': '개발 워크플로, 트리아지, PR 초안' },
          { 'MCP 서버': 'Custom', '활성화하는 기능': 'JSON-RPC 도구로 표현할 수 있는 모든 것', '설정 난이도': '어려움(자체 서버 작성)', '위험 수준': '가변적', '이상적인 용도': '내부 API, 틈새 시스템, 통합 코드' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'SQLite, PostgreSQL, Puppeteer, GitHub용 참조 서버는 `servers-archived` 저장소로 옮겨졌으며 더 이상 유지 관리되지 않습니다. PostgreSQL, Puppeteer, GitHub용 npm 패키지에는 "no longer supported"(더 이상 지원되지 않음) 표시가 있고, SQLite 서버(Python 패키지, 마지막 릴리스 2025년 4월)도 수정이 제공되지 않습니다. 이 표의 유지 관리되는 서버를 사용하고, 자격 증명이 필요한 서버는 설치 전에 코드를 읽으십시오.',
          },
        ],
      },
      architecture: {
        id: 'architecture',
        title: '구성 요소가 맞물리는 방식',
        content:
          '**세 가지 프로세스, 하나의 공유 프로토콜.** 모델은 Ollama에 있고, 클라이언트는 MCP를 말하며, 각 서버는 소규모 도구 집합을 노출합니다. 모든 tool call은 클라이언트에서 서버로 이동하고, 로컬에서 실행되고, JSON을 반환합니다.',
        items: [
          '**Ollama**는 `127.0.0.1:11434`에서 백그라운드 서비스로 실행되며 OpenAI 호환 API로 모델을 제공합니다. MCP가 무엇인지 알지 못합니다. 채팅 완성에 응답하고, 모델이 요청할 때 tool call을 생성할 뿐입니다.',
          '**MCP 클라이언트**(Goose, Cline, Continue.dev, LM Studio)가 다리 역할을 합니다. 모델을 위해 Ollama와, 도구를 위해 MCP 서버와 통신합니다. 모델이 tool call을 생성하면 클라이언트가 올바른 서버로 라우팅하고, 결과를 받아 대화에 되돌려 줍니다.',
          '**MCP 서버**는 기능마다 하나씩 있는 독립적인 하위 프로세스입니다. stdio를 통해 JSON-RPC 2.0을 사용합니다. 각 서버는 Tools, Resources, Prompts 목록을 공개하며, 클라이언트는 이를 합쳐 모델에 제시되는 도구 표면을 만듭니다.',
          '**stdio 전송은 모든 것을 로컬에 유지합니다.** 서버는 클라이언트가 시작하고, stdin/stdout으로 통신하며, 클라이언트가 종료되면 함께 종료됩니다. 서버 자체가 연결을 여는 경우를 제외하면 네트워크로 나가는 것이 없습니다(브라우저 서버는 연결을 열지만 filesystem과 데이터베이스 서버는 열지 않습니다).',
          '**모델은 평평한 도구 목록 하나를 봅니다.** 모델의 관점에서 서버는 없습니다. `filesystem.read_file`, `playwright.browser_navigate`, `github.create_pull_request` 같은 도구 이름의 목록만 있습니다. 라우팅은 클라이언트가 처리합니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '아키텍처는 Claude Desktop과 동일합니다. 차이는 모델(Claude 대신 로컬 Ollama 모델)과 클라이언트(Claude Desktop 대신 Goose/Cline/Continue.dev/LM Studio)입니다. MCP 서버는 같은 서버입니다. 오늘 Claude Desktop에서 filesystem 서버를 실행하고 있다면, 내일 Goose에서도 변경 없이 그대로 실행됩니다.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-mcp-architecture-ko.svg',
        imageCaption:
          'MCP 아키텍처 다이어그램: Ollama가 로컬 모델을 제공하고, MCP 클라이언트(Goose, Cline, Continue.dev, LM Studio)가 stdio 기반 JSON-RPC 2.0으로 MCP 서버와 연결되며, 파일 시스템·데이터베이스·브라우저·GitHub 네 종류의 서버가 실제 도구를 제공한다.',
      },
      setup: {
        id: 'setup',
        title: '설정: 15분 안에 Ollama + Goose 연결하기',
        content:
          '**Goose는 작동하는 로컬 MCP 에이전트로 가는 가장 간단한 경로입니다.** 오픈 소스 에이전트(원래 Block에서 시작, 현재는 `aaif-goose/goose`에서 개발)로, CLI와 [Ollama](https://ollama.com/) 기본 지원, 대화형 채팅 인터페이스, 모든 [Model Context Protocol(MCP)](https://modelcontextprotocol.io/) 서버를 위한 단일 설정 파일을 갖추고 있습니다. Continue.dev, Cline, LM Studio도 작동합니다. Goose는 첫 실행의 설정 부담이 가장 낮습니다.',
        items: [
          '**1단계 — Ollama 설치.** [ollama.com/download](https://ollama.com/)(macOS/Windows/Linux)에서 다운로드하십시오. `curl http://127.0.0.1:11434/api/tags`로 서비스가 실행 중인지 확인하십시오.',
          '**2단계 — tool calling 모델 다운로드.** Gemma 4 31B(`gemma4:31b`), GLM-4.7 Flash(`glm-4.7-flash`), Qwen3.6 27B(`qwen3.6:27b`), Qwen3 32B(`qwen3:32b`), Llama 3.3 70B(`llama3.3:70b`) 중에서 선택하십시오. 24GB VRAM이면 Q4_K_M에서 26B~32B를 여유 있게 처리할 수 있습니다. 32GB 통합 메모리 Mac에서도 들어가지만 컨텍스트에 남는 공간은 약 4~6GB입니다(macOS가 8GB를 사용합니다).',
          '**3단계 — Goose 설치.** macOS 또는 Linux에서는 `curl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash`를 실행하십시오(또는 `brew install block-goose-cli`). Windows에서는 Goose 문서의 PowerShell 설치 프로그램이나 WSL을 사용하십시오. CLI는 `goose`로 설치됩니다.',
          '**4단계 — Ollama를 제공자로 구성.** `goose configure`를 실행하고, `ollama`를 제공자로 선택하고, 모델을 다운로드한 것으로 설정하고, 호스트를 `http://127.0.0.1:11434`로 설정하십시오(비워 두어도 localhost:11434를 의미합니다). Goose가 이 내용을 `~/.config/goose/config.yaml`에 기록합니다. Ollama의 기본 컨텍스트 창은 작을 수 있으며(Goose 문서는 4096 토큰을 언급합니다), Goose가 extension을 무시할 수 있으므로, Ollama를 `OLLAMA_CONTEXT_LENGTH=32768`(또는 더 높게)로 시작하십시오.',
          '**5단계 — filesystem MCP 서버 추가.** `goose configure`를 실행해 Add Extension을 선택한 다음 Command-line Extension을 고르거나, `~/.config/goose/config.yaml`에 `extensions` 블록을 추가하십시오(아래 예시). 일회성 테스트라면 `goose session --with-extension "npx -y @modelcontextprotocol/server-filesystem /path/to/workspace"`로 해당 세션에서만 활성화할 수 있습니다. `goose session`을 시작하고 테스트 디렉터리의 파일 목록을 요청하십시오. 첫 번째 턴이 서버가 연결되었음을 확인해 줍니다.',
          '**6단계 — 실제 작업으로 확인.** `goose session`을 실행하고 "`notes/`의 모든 Markdown 파일을 제목과 단어 수와 함께 나열하고 결과를 `notes/index.md`에 쓰십시오."라고 요청하십시오. 에이전트가 읽고, 요약하고, 다시 쓰면 루프가 작동하는 것입니다.',
        ],
        codeBlock: '# 1. Pull a tool-calling model\nollama pull gemma4:31b\n\n# 2. Install Goose (macOS / Linux)\ncurl -fsSL https://github.com/aaif-goose/goose/releases/download/stable/download_cli.sh | bash\n\n# 3. Configure Ollama as the provider\ngoose configure\n# Provider: ollama\n# Model:    gemma4:31b\n# Host:     http://127.0.0.1:11434\n\n# 4. Give Ollama a context window big enough for tool use, then start a session\nOLLAMA_CONTEXT_LENGTH=32768 ollama serve   # in a separate terminal\ngoose session',
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'tip',
            text: '이미 Cline이나 Continue.dev를 사용하고 있다면 Goose를 건너뛰고 그것들을 사용하십시오. 둘 다 MCP 클라이언트입니다. 각각 자체 MCP 설정이 있으므로(정확한 파일은 해당 문서를 확인하십시오), 모델과 서버는 같고 호스트 애플리케이션과 설정 형식만 바뀝니다.',
          },
        ],
        image: '/images/local-ai-agents-with-mcp-2026-setup-flow-ko.svg',
        imageCaption:
          'Ollama와 Goose의 6단계 설정 흐름: Ollama 설치, gemma4:31b 같은 tool calling 모델 다운로드, 공식 스크립트로 Goose 설치, 제공자 구성, filesystem MCP 서버 추가, 약 15분 안에 실제 작업으로 검증.',
      },
      filesystemServer: {
        id: 'filesystem-server',
        title: 'Filesystem 서버: 격리된 디렉터리에서 읽기 및 쓰기',
        content:
          '**filesystem 서버는 가장 먼저 설치하기 좋고, 안전하게 제한하기도 가장 쉽습니다.** `read_file`, `write_file`, `list_directory`, `move_file`, `search_files`, `create_directory`를 노출하며, 모두 하나 이상의 허용 목록 경로로 제한됩니다.',
        items: [
          '**설치:** 참조 서버는 `@modelcontextprotocol/server-filesystem`이며 `npx -y`로 실행합니다(전역 설치 불필요, Node.js 필요). 지금도 유지 관리되는 참조 서버 중 하나입니다. Goose, Cline, Continue.dev가 설정에서 이 서버를 시작합니다.',
          '**허용 목록 경로:** 서버는 하나 이상의 디렉터리 인수를 받아 그 밖의 작업을 거부합니다. 항상 명시적이고 좁은 경로를 전달하십시오. `~`나 `/`는 절대 사용하지 마십시오.',
          '**노출되는 도구:** `read_file`, `read_multiple_files`, `write_file`, `edit_file`(행 단위 대체), `list_directory`, `search_files`, `move_file`, `create_directory`, `directory_tree`. 모델은 이것들을 `filesystem.read_file` 등으로 봅니다.',
          '**사용 편의성:** `directory_tree`는 JSON 트리를 반환하므로 모델이 특정 파일을 읽기 전에 방향을 잡기에 좋습니다. `search_files`는 grep과 비슷한 재귀 검색을 수행합니다.',
          '**위험 표면:** 서버는 허용 목록을 지키지만, 그 안에서는 읽기/쓰기 권한이 완전합니다. 허용 목록을 유일한 장벽으로 취급하고 홈 폴더 대신 전용 workspace 디렉터리를 고르십시오.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  filesystem:\n    type: stdio\n    name: filesystem\n    enabled: true\n    cmd: npx\n    args: ["-y", "@modelcontextprotocol/server-filesystem", "/Users/you/agent-workspace"]\n    envs: {}\n    timeout: 300',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: '허용 목록에 `/`나 홈 디렉터리를 절대 넣지 마십시오. 전용 `agent-workspace` 폴더를 만들고, 에이전트가 다룰 파일의 사본을 그 안에 넣고, 에이전트가 그 폴더 안에서만 작동하게 하십시오. 에이전트가 잘못되더라도 피해 범위는 하나의 디렉터리에서 멈춥니다.',
          },
        ],
      },
      databaseServer: {
        id: 'database-server',
        title: '데이터베이스 서버: Postgres(와 SQLite)를 안전하게 쿼리하기',
        content:
          '**데이터베이스 서버는 읽기 전용으로 유지하는 한, 모델을 실제 데이터에 기반해 질문에 답하는 주니어 분석가로 만들어 줍니다.** 기존 SQLite와 PostgreSQL 참조 서버는 보관되었으므로, 유지 관리되는 Postgres 서버를 사용하고 SQLite는 주의해서 다루십시오.',
        items: [
          '**Postgres: `postgres-mcp`(Crystal DBA, MIT 라이선스)**는 읽기 전용 모드가 있는 선택지입니다(최신 PyPI 릴리스는 2025년 5월이므로 의존하기 전에 저장소의 활동을 확인하십시오). `uvx postgres-mcp --access-mode=restricted`로 실행하고(또는 `pipx install postgres-mcp`, 혹은 Docker 이미지), 연결 URI는 `DATABASE_URI` 환경 변수로 전달하십시오. 제한(restricted) 모드는 읽기 전용 트랜잭션과 쿼리 시간 제한을 허용하며, 제한 없는(unrestricted) 모드는 개발 전용입니다.',
          '**전용 읽기 전용 역할도 함께 사용하십시오.** 제한 모드가 하나의 장벽이고, 데이터베이스 역할이 또 하나의 장벽입니다. SELECT 권한만 있는 `agent_ro` 역할을 만들고 그 역할의 연결 문자열을 사용하십시오.',
          '**SQLite: 참조 서버는 보관되었습니다.** Python 패키지 `mcp-server-sqlite`(npm 패키지가 아니며, 마지막 릴리스는 2025년 4월)로, 아직 실행될 수는 있지만 수정은 제공되지 않습니다. 하나뿐인 원본이 아니라 반드시 파일 사본에만 연결하거나, 데이터를 Postgres에 불러와 사용하십시오. 커뮤니티 SQLite 서버는 파일을 넘기기 전에 코드를 읽으십시오.',
          '**스키마 인식:** 분석적인 질문을 하기 전에 에이전트에게 "테이블을 나열하고 가장 많이 사용되는 5개를 설명하십시오"라고 요청하십시오. 모델은 열 이름을 추측할 때보다 스키마를 확인한 뒤에 훨씬 정확합니다.',
          '**비용:** 쿼리는 데이터베이스로 직접 갑니다. 1억 행 테이블에 대한 잘못된 `SELECT *`는 사람이 실행했을 때와 똑같은 사고입니다. 역할을 statement timeout이 있는 별도의 연결 풀에 두십시오.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  postgres:\n    type: stdio\n    name: postgres\n    enabled: true\n    cmd: uvx\n    args: ["postgres-mcp", "--access-mode=restricted"]\n    envs:\n      DATABASE_URI: "postgresql://agent_ro:${PG_AGENT_PASSWORD}@127.0.0.1:5432/analytics"\n    timeout: 300',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'tip',
            text: 'Postgres 역할을 한 번만 만들고 에이전트에게 그 이상은 주지 마십시오: `CREATE ROLE agent_ro WITH LOGIN PASSWORD \'…\'; GRANT CONNECT ON DATABASE analytics TO agent_ro; GRANT USAGE ON SCHEMA public TO agent_ro; GRANT SELECT ON ALL TABLES IN SCHEMA public TO agent_ro; ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO agent_ro;` 그런 다음 역할에 `statement_timeout = 30s`를 추가하십시오. 에이전트는 쓸 수 없고, 삭제할 수 없고, 무한히 실행할 수도 없습니다.',
          },
        ],
      },
      browserServer: {
        id: 'browser-server',
        title: '브라우저 MCP 사용법: 로컬 LLM에 Playwright MCP 연결하기',
        content:
          '**로컬 LLM으로 브라우저 MCP를 사용하려면 세 가지가 필요합니다. tool calling 모델이 실행 중인 Ollama, MCP 클라이언트(여기서는 Goose), 그리고 Microsoft의 `@playwright/mcp` 서버입니다.** 아래 설정 블록을 클라이언트에 추가하면 모델이 실제 브라우저를 열고 탐색, 클릭, 양식 작성, 스크린샷을 수행할 수 있습니다. 브라우저 서버는 네 가지 중 가장 강력하고 가장 위험합니다. 브라우저에서 할 수 있는 모든 일을 할 수 있으며 양식 제출도 포함됩니다.',
        items: [
          '**어떤 서버를 쓸까:** Microsoft의 `@playwright/mcp`(`npx @playwright/mcp@latest`)를 사용하십시오. 기존 `@modelcontextprotocol/server-puppeteer`에는 "no longer supported" 표시가 있고, npm에는 `@modelcontextprotocol/server-playwright` 패키지가 존재하지 않습니다.',
          '**노출되는 도구:** `browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_fill_form`, `browser_evaluate`(JavaScript 실행), `browser_take_screenshot`, `browser_tabs`, `browser_wait_for`. 모델은 `browser_snapshot`(접근성 스냅샷으로, Playwright MCP가 동작 수행에는 스크린샷보다 이쪽을 권장합니다)으로 페이지를 읽고, 스크린샷은 눈으로 확인할 때만 사용합니다.',
          '**지연:** 실제 브라우저 세션은 동작당 1~5초가 걸립니다. 페이지 내용이 크기 때문에 다단계 탐색은 쉽게 30~60초와 수만 토큰을 소비합니다. 32K 이상 컨텍스트 창을 사용하십시오.',
          '**요소 참조:** 모델은 스냅샷에 있는 참조로 요소를 클릭합니다. 작은 모델은 잘못된 요소를 자주 고르며, 27B 이상의 tool calling 모델은 일반적인 패턴을 안정적으로 처리합니다. 작업 범위를 제한하십시오. "이 URL에서 제목과 첫 단락을 추출하십시오"는 "사이트를 탐색하여 연락처 페이지를 찾으십시오"보다 훨씬 신뢰할 수 있습니다.',
          '**올바른 사용 사례:** 연구(페이지 열기, 요약하기, 노트에 추가), 회귀 테스트(탐색, 클릭, 스크린샷), 직접 제어하는 페이지의 양식 작성. 잘못된 사용 사례: 라이브 웹에서 잘못된 클릭이 결과를 일으키는 모든 작업.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  playwright:\n    type: stdio\n    name: playwright\n    enabled: true\n    cmd: npx\n    args: ["@playwright/mcp@latest"]\n    envs: {}\n    timeout: 300\n# Block obviously dangerous endpoints at the OS firewall level\n# rather than relying on the agent to refuse them.',
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: '브라우저 서버에 자격 증명을 절대 제공하지 마십시오. 인증된 세션이 필요하다면 에이전트에게 사전 인증된 브라우저 프로파일을 전달하고, 영향이 큰 사이트(뱅킹, 이메일, 클라우드 콘솔, 결제 양식)로는 절대 이동하지 못하게 하십시오. 모델은 버튼이 무슨 일을 하는지 판단하지 못합니다. 텍스트를 보고 클릭할 뿐입니다. 맥락도 없고 책임도 지지 않는 인턴처럼 취급하십시오.',
          },
        ],
      },
      githubServer: {
        id: 'github-server',
        title: 'GitHub 서버: 로컬 모델로 저장소, 이슈, PR 다루기',
        content:
          '**GitHub 서버는 저장소에 대한 자연어 작업을 API 호출로 바꿔 줍니다.** 네 가지 중 설정이 가장 간단하며, personal access token(PAT) 권한으로 범위를 좁게 제한하기도 가장 쉽습니다.',
        items: [
          '**설치:** GitHub 공식 `github/github-mcp-server`를 사용하십시오. Docker 이미지(`ghcr.io/github/github-mcp-server`)로 실행하며, PAT는 `GITHUB_PERSONAL_ACCESS_TOKEN` 환경 변수에 넣습니다. 기존 `@modelcontextprotocol/server-github` npm 패키지에는 "no longer supported" 표시가 있으므로 새 설정에는 사용하지 마십시오.',
          '**노출되는 도구:** `search_repositories`, `get_file_contents`, `create_or_update_file`, `create_pull_request`, `list_issues`, `create_issue`, `add_issue_comment`, `merge_pull_request`, 그 외 다수. 전체 표면은 크지만 대부분의 작업은 5~10개의 도구를 사용합니다.',
          '**PAT의 범위를 제한하십시오.** 필요한 최소 권한(탐색에는 Read, PR/이슈 생성에는 Write)으로 특정 저장소에 한정된 fine-grained PAT를 사용하십시오. 실험적인 에이전트에 `repo` 권한이 있는 classic PAT를 사용하지 마십시오.',
          '**실제 워크플로:** 트리아지("최근 열린 이슈 20개를 읽어 그룹화하고 레이블을 제안하십시오"), 초안 작성("README를 읽고 오타를 수정하는 PR을 여십시오"), 보고("이번 주에 정체된 PR은 무엇입니까").',
          '**위험 표면:** 에이전트는 이슈와 PR을 만들고 댓글을 달 수 있으며, 쓰기 권한이 있으면 커밋을 push할 수도 있습니다. 모델과 워크플로를 모두 신뢰하지 않는 한 merge 도구는 비활성화하십시오. fine-grained PAT를 쓰는 저장소에서 잘못 merge한 것은 복구할 수 있지만, 빨리 알아차렸을 때만 가능합니다.',
        ],
        codeBlock: '# ~/.config/goose/config.yaml\nextensions:\n  github:\n    type: stdio\n    name: github\n    enabled: true\n    cmd: docker\n    args: ["run", "-i", "--rm", "-e", "GITHUB_PERSONAL_ACCESS_TOKEN", "ghcr.io/github/github-mcp-server"]\n    envs:\n      GITHUB_PERSONAL_ACCESS_TOKEN: "${GH_AGENT_PAT}"\n    timeout: 300\n# Fine-grained PAT scoped to one or two test repos,\n# not your personal account-wide classic token.',
        codeLanguage: 'yaml',
      },
      securityModel: {
        id: 'security-model',
        title: '모델을 신뢰하지 않는 보안 모델',
        content:
          '**올바른 멘탈 모델은 "LLM은 사용자가 건넨 열쇠만 가진, 신뢰할 수 없는 인턴"입니다.** 기능은 허용 목록에 넣은 서버와 표면에서 나오며, 모델의 판단에서 나오지 않습니다.',
        items: [
          '**filesystem 서버를 하나의 디렉터리로 제한하십시오.** `~`나 `/`는 절대 안 됩니다. `agent-workspace/` 폴더를 정하고 에이전트가 다룰 파일의 사본을 그 안에 넣으십시오. 에이전트가 잘못되더라도 최악의 경우는 폴더 하나입니다.',
          '**데이터베이스 서버를 기본적으로 읽기 전용으로 실행하십시오.** `SELECT` 권한만 있고 30초 statement timeout이 설정된 전용 `agent_ro` 역할이 한 부류의 사고를 완전히 없애 줍니다.',
          '**모든 쓰기 또는 셸 도구를 명시적 승인 뒤에 두십시오.** Goose, Cline, Continue.dev는 모두 도구별 승인 규칙을 지원합니다. 읽기 도구는 기본적으로 허용하고, `write_file`, `edit_file`, `execute_command`, `create_pull_request`, 양식을 제출하는 모든 브라우저 동작에는 승인을 요구하십시오.',
          '**감사 로그를 사용하십시오.** 모든 MCP 클라이언트는 tool call과 결과를 기록합니다. 긴 세션이 끝나면 로그를 훑어보십시오. 모델이 예상하지 못한 것을 시도하는 모습이 발견됩니다(때로는 무해하고, 때로는 권한을 더 조일 이유가 됩니다).',
          '**타사 접근은 토큰 범위를 좁게 제한하십시오.** GitHub PAT는 테스트 저장소 두 개로, Postgres 역할은 읽기 전용으로, 브라우저 세션은 자격 증명 없이. 모델은 결국 예상하지 못한 것을 시도합니다. 할 수 있는 일의 한계가 모델이 올바르게 행동하는지에 달려 있으면 안 됩니다.',
          '**민감한 데이터 작업에는 에이전트를 격리하십시오.** 개인 데이터를 다룰 때는 에이전트를 실행하는 동안 호스트의 네트워크 접근을 끄십시오(또는 네트워크 네임스페이스를 사용). 로컬 스택은 이미 기기 밖으로 아무것도 보내지 않지만, 심층 방어는 타사 서버의 실수를 잡아 줍니다.',
          '**MCP 서버 선택도 다른 의존성 선택과 똑같이 다루십시오.** 참조 서버는 잘 유지 관리되지만 많은 타사 서버는 그렇지 않습니다. 자격 증명이 필요한 서버는 설치하기 전에 코드를 읽으십시오.',
        ],
        callouts: [
          {
            type: 'note',
            text: '유용한 장애 복구 습관: 사소하지 않은 에이전트 작업 전에 `git stash`(또는 `git checkout -b agent/<task>`)를 실행하십시오. 작업이 끝나면 diff를 검토하고, 원하는 부분은 남기고 나머지는 버리십시오. 긴 Cline이나 Aider 세션을 안전하게 만드는 것과 같은 관행입니다. 더 넓은 패턴은 [Continue.dev vs Cline vs Aider 비교](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local)를 참조하십시오.',
          },
        ],
      },
      vsClaudeDesktop: {
        id: 'vs-claude-desktop',
        title: '로컬 MCP vs Claude Desktop: 무엇이 바뀌고 무엇이 그대로인가',
        content:
          '**프로토콜과 서버는 동일합니다. 모델과 클라이언트만 바뀝니다.** 이것이 MCP가 중요한 이유 전부입니다. 도구에 대한 투자가 로컬과 클라우드 설정 사이에서 깔끔하게 이식됩니다.',
        columns: ['레이어', 'Claude Desktop', 'Ollama 로컬 + Goose'],
        rows: [
          { '레이어': '모델', 'Claude Desktop': 'Claude(Anthropic, 클라우드)', 'Ollama 로컬 + Goose': 'Gemma 4, GLM-4.7, Qwen3 또는 Llama 3.3(로컬)' },
          { '레이어': '클라이언트', 'Claude Desktop': 'Claude Desktop 앱', 'Ollama 로컬 + Goose': 'Goose, Cline, Continue.dev 또는 LM Studio' },
          { '레이어': '서버', 'Claude Desktop': '동일한 MCP 서버', 'Ollama 로컬 + Goose': '동일한 MCP 서버' },
          { '레이어': '프로토콜', 'Claude Desktop': 'MCP(JSON-RPC 2.0)', 'Ollama 로컬 + Goose': 'MCP(JSON-RPC 2.0)' },
          { '레이어': '요청당 비용', 'Claude Desktop': '토큰당 API 지출', 'Ollama 로컬 + Goose': '$0 — 로컬 추론' },
          { '레이어': '프라이버시', 'Claude Desktop': '대화가 Anthropic으로 전송됨', 'Ollama 로컬 + Goose': '기기에 그대로 유지됨' },
          { '레이어': '속도 제한', 'Claude Desktop': 'API 속도 제한 적용', 'Ollama 로컬 + Goose': '하드웨어 처리량에 의해서만 제한됨' },
          { '레이어': 'tool calling 품질', 'Claude Desktop': '최고 수준', 'Ollama 로컬 + Goose': '27B 이상 모델에서 좋음; 7B 미만에서 급격히 저하됨' },
          { '레이어': '인터넷 필요', 'Claude Desktop': '예', 'Ollama 로컬 + Goose': '서버가 직접 가져오는 경우에만(예: 브라우저)' },
          { '레이어': '설정 시간', 'Claude Desktop': '5분', 'Ollama 로컬 + Goose': '15분(일회성)' },
        ],
      },
      pickingModel: {
        id: 'picking-model',
        title: '로컬 MCP를 위한 tool calling 모델 선택',
        content:
          '**tool calling 신뢰성은 harness가 아니라 모델 크기와 훈련에 따라 달라집니다.** Cline에서 잘못된 형식의 tool call을 생성하는 모델은 같은 이유로 Goose에서도 생성합니다.',
        items: [
          '**Gemma 4 31B(`gemma4:31b`)** — Google의 tool calling 훈련은 이 크기에서 최고 수준입니다. Q4_K_M에서 32GB 통합 메모리(컨텍스트에 남는 공간은 약 4~6GB) 또는 24GB VRAM에 들어갑니다. 일반 추론이 좋고, 연쇄 tool call에서는 다소 보수적입니다.',
          '**GLM-4.7 Flash(`glm-4.7-flash`)** — Zhipu의 모델은 tool calling 신뢰성이 매우 높고 기본으로 128K 컨텍스트 창을 제공합니다. Gemma 4보다 약간 무겁지만 24GB GPU에 여유 있게 들어갑니다.',
          '**Qwen3.6 27B(`qwen3.6:27b`)** — Ollama에서 쓸 수 있는 더 새로운 Qwen 선택지입니다(약 18~19GB, 256K 컨텍스트, tool calling 지원). **Qwen3 32B(`qwen3:32b`)** — 균형이 잘 잡혀 있고, 조밀한 32B는 MCP를 문제없이 처리하며 긴 에이전트 루프에서도 잘 작동합니다. **Qwen3-Coder 30B(`qwen3-coder:30b`)**는 에이전트 작업이 코드 중심이라면 최선의 선택입니다.',
          '**Llama 3.3 70B(`llama3.3:70b`)** — 성능 한계는 가장 높지만 가장 무겁습니다. Q4_K_M에서 64GB 이상 통합 메모리 또는 2× 24GB GPU가 필요합니다. 하드웨어가 허용하는 경우에만 사용하십시오. 더 작은 모델로 충분한 경우가 많습니다.',
          '**MCP 작업에서 피해야 할 것:** 7B 미만의 모든 모델, 그리고 명시적인 tool calling 훈련이 없는 범용 모델. 잘못된 형식의 호출을 생성하고, 루프가 멈추고, harness를 탓하게 됩니다. 하지만 harness는 문제가 없습니다.',
          '어떤 모델에서든 tool calling 품질을 높이는 구조적 프롬프팅 기법은 [Chain-of-thought 프롬프팅](/ko/prompt-engineering/chain-of-thought-prompting)을 참조하십시오.',
          '비교 데이터는 [2026년 tool calling을 위한 최고의 로컬 모델](/ko/power-local-llm/best-local-models-tool-calling-2026)을 참조하십시오.',
        ],
      },
      mcpVsFunctionCalling: {
        id: 'mcp-vs-function-calling',
        title: 'MCP vs 일반 Function Calling: 차이점은 무엇인가',
        content:
          '**Function calling은 모델이 생성하는 것이고, MCP는 클라이언트와 도구가 서로를 찾을 수 있게 하는 프로토콜입니다.** 둘은 서로 다른 계층에 있으며 함께 작동합니다. 하나가 다른 하나를 대체하지 않습니다.',
        items: [
          '**Function calling**은 LLM 측의 기능입니다. 모델이 도구 이름과 인수를 설명하는 구조화된 JSON 객체를 생성합니다. OpenAI의 도구, Anthropic의 도구, Ollama의 tool call API는 wire 형식만 조금씩 다를 뿐 같은 아이디어를 사용합니다.',
          '**MCP**는 그 위에 위치합니다. 도구가 프로세스 간에 설명, 발견, 호출, 반환되는 방식을 표준화합니다. function calling만 있는 모델은 filesystem에 대해 아무것도 모릅니다. MCP 서버가 filesystem 작업을 사용할 수 있게 만들고, 클라이언트가 이를 모델의 function calling API에 매핑하면, 모델이 그것을 호출할 수 있게 됩니다.',
          '**이점은 상호 운용성입니다.** filesystem 서버를 한 번 작성하면 Claude Desktop, Goose, Cline, Continue.dev, LM Studio 모두 변경 없이 사용합니다. 모델을 Claude에서 Gemma 4로 바꿔도 서버는 바뀌지 않습니다.',
          '**순수한 function calling으로도 에이전트를 만들 수 있습니다.** 다만 프로젝트마다 filesystem, 데이터베이스, 브라우저 핸들러를 다시 구현하게 됩니다. MCP를 쓰면 이것들이 바로 가져다 쓰는 의존성이 됩니다.',
          '**일회성 스크립트라면 순수한 function calling이 더 간단합니다.** 프로젝트나 모델을 넘나들며 재사용하고 싶은 것이라면, 며칠 안에 MCP 쪽이 더 적은 노력으로 끝납니다.',
        ],
      },
      commonMistakes: {
        id: 'common-mistakes',
        title: '로컬 MCP 설정 시 일반적인 실수',
        items: [
          '**실수 1: 범용 소형 모델 사용.** 7B 미만 모델(그리고 tool calling 파인튜닝이 없는 대부분의 7B~13B 범용 모델)은 잘못된 형식의 tool call을 생성합니다. tool calling에 맞게 튜닝된 27B 이상 모델을 사용하고 harness와 싸우는 일을 그만두십시오.',
          '**실수 2: 허용 목록에 홈 디렉터리 넣기.** "테스트만 하려고" 넣은 `~` 허용 목록은 일상적인 사용까지 살아남습니다. 처음부터 전용 `agent-workspace`를 만드십시오.',
          '**실수 3: 데이터베이스 서버를 읽기/쓰기 모드로 두기.** 자신만만한 에이전트가 실제 테이블에 `DELETE` 쿼리를 작성하는 것이 바로 이 설정이 막는 사고입니다. `agent_ro`를 기본 역할로 만들고, 명시적으로 필요한 작업에만, 그 작업이 진행되는 동안에만 별도의 쓰기 가능 역할을 만드십시오.',
          '**실수 4: 모든 도구 자동 승인.** "모두 승인" 토글은 편리하지만 위험합니다. 읽기 도구(`read_file`, `list_directory`, `query`)는 자동 승인하고, 쓰기/셸/PR 도구는 항상 승인을 요구하십시오.',
          '**실수 5: 다단계 브라우저 작업에 32K 컨텍스트 모델 사용.** 페이지 내용이 크기 때문에, 세 페이지를 탐색하는 에이전트는 추론에 들어가기 전에 32K 토큰을 소진할 수 있습니다. 브라우저 중심 작업에는 128K 컨텍스트 모델을 사용하십시오.',
          '**실수 6: 에이전트에게 판단력이 있다고 가정하기.** 판단력은 없습니다. 모델에게는 "이것은 프로덕션 데이터베이스다"나 "이 PR은 배포된다"라는 개념이 없습니다. 권한이 유일한 장벽입니다.',
          '**실수 7: 처음부터 모든 참조 서버 설치.** 도구가 많아지면 시스템 프롬프트가 커지고 도구 선택이 느려지고 덜 안정적이 됩니다. `filesystem`으로 시작하고, 필요한 워크플로가 생겼을 때만 다른 서버를 추가하십시오.',
          '**실수 8: 오래된 튜토리얼의 보관된 참조 서버 설치.** npm 패키지 `@modelcontextprotocol/server-postgres`, `-puppeteer`, `-github`에는 "no longer supported" 표시가 있고 SQLite 서버는 보관되었습니다. 일부 오래된 가이드는 존재하지 않는 npm 패키지(`server-sqlite`, `server-playwright`)를 언급하기도 합니다. 위에서 소개한 유지 관리되는 서버를 사용하십시오.',
          '**실수 9: Ollama에 MCP 설정 넣기.** Ollama에는 MCP 설정이 없습니다. 서버는 클라이언트에서 구성합니다(Goose `extensions`, Cline 또는 Continue.dev의 MCP 설정).',
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Model Context Protocol 사양](https://modelcontextprotocol.io/) — 공식 사양, JSON-RPC 스키마, 전송 및 수명 주기 정의, 2026-07-28 변경 내역 포함.',
          '[modelcontextprotocol/servers GitHub 저장소](https://github.com/modelcontextprotocol/servers) — 유지 관리되는 참조 서버(filesystem, git, fetch, memory 등)와 보관된 서버 목록.',
          '[github/github-mcp-server](https://github.com/github/github-mcp-server) — GitHub 공식 MCP 서버, Docker 및 바이너리 설정.',
          '[microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) — Playwright MCP 서버와 브라우저 도구.',
          '[crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) — 제한(읽기 전용) 접근 모드를 갖춘 Postgres MCP 서버.',
          '[Goose 문서](https://goose-docs.ai/docs/getting-started/installation) — CLI 설치, Ollama 제공자 설정, extension(MCP 서버) 설정 구문.',
          '[Ollama 모델 라이브러리](https://ollama.com/library) — 이 가이드에서 참조하는 사용 가능한 로컬 모델, tool calling 지원 표시, 양자화 수준.',
          '[Cline GitHub 저장소](https://github.com/cline/cline) — VS Code용 MCP 클라이언트 구현, MCP 서버 패널.',
          '[Continue.dev 문서](https://docs.continue.dev/) — Continue.dev 클라이언트의 `mcpServers` 설정 블록 참조.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'MCP란 무엇이며 로컬 AI에 왜 중요합니까?',
            a: 'Model Context Protocol(MCP)은 클라이언트(Goose, Cline, Continue.dev, LM Studio, Claude Desktop)가 언어 모델을 도구 서버에 일관된 방식으로 연결할 수 있게 하는 오픈 JSON-RPC 2.0 프로토콜입니다. 로컬 AI에 중요한 이유는 채팅 모델을 에이전트로 바꾸는 계층을 표준화하기 때문입니다. 도구 서버를 한 번 작성하면 로컬 Ollama 모델을 포함한 모든 클라이언트와 모든 모델에서 사용할 수 있습니다. MCP가 없으면 프로젝트마다 자체 클라이언트에 맞춰 파일/데이터베이스/브라우저 도구를 새로 만들어야 합니다.',
          },
          {
            q: 'MCP는 Claude Desktop 없이 작동합니까?',
            a: '네. 프로토콜은 오픈되어 있으며 Claude Desktop과 완전히 독립적입니다. Goose, Cline, Continue.dev, LM Studio는 모두 로컬 Ollama 모델과 작동하는 MCP 클라이언트 구현을 제공합니다. 유지 관리되는 서버(filesystem, Postgres, Playwright, GitHub)는 모든 호환 클라이언트에서 변경 없이 실행됩니다.',
          },
          {
            q: '어떤 로컬 모델이 MCP를 가장 잘 지원합니까?',
            a: '가장 신뢰할 수 있는 선택지는 Gemma 4 31B, GLM-4.7 Flash, Qwen3.6 27B 또는 Qwen3 32B(코드 중심 작업에는 Qwen3-Coder 30B), Llama 3.3 70B입니다. 모두 명시적인 tool calling 훈련을 받았으며 MCP 클라이언트가 라우팅할 수 있는 깔끔한 function calling JSON을 생성합니다. 7B 미만 모델(그리고 tool calling 파인튜닝이 없는 대부분의 범용 모델)은 잘못된 형식의 tool call을 자주 생성합니다.',
          },
          {
            q: 'MCP는 안전합니까? 에이전트가 내 파일을 삭제할 수 있습니까?',
            a: '허용하면 가능합니다. 안전은 프로토콜이 아니라 서버를 구성하는 방식에서 나옵니다. filesystem 서버는 허용 목록에 넣은 경로 안에서만 작동하므로 전용 `agent-workspace` 디렉터리로 제한하십시오. 데이터베이스 서버는 제한 모드와 SELECT 전용 역할을 사용하면 읽기 전용으로 작동합니다. 쓰기, 셸, PR 도구에는 항상 명시적 승인을 요구하고, 읽기 작업만 자동 승인하십시오. 감사 로그를 보면 에이전트가 한 일을 사후에 정확히 확인할 수 있습니다.',
          },
          {
            q: '나만의 MCP 서버를 작성할 수 있습니까?',
            a: '네. SDK가 이를 간단하게 만들어 줍니다. 공식 TypeScript 및 Python SDK(`@modelcontextprotocol/sdk` 및 `mcp`)가 JSON-RPC 처리를 맡습니다. JSON 스키마와 핸들러 함수로 도구를 정의하면 SDK가 stdio를 통해 노출합니다. 단일 목적 서버(내부 API를 감싸는 도구 한두 개)는 50~100줄 파일이면 됩니다.',
          },
          {
            q: 'MCP는 Windows에서 작동합니까?',
            a: '네. Ollama, Goose, Cline, Continue.dev, LM Studio 모두 Windows에서 실행됩니다. MCP 서버는 Node.js 또는 Python 하위 프로세스로 실행되며, 두 런타임 모두 Windows를 완전히 지원합니다. 플랫폼에 따라 다른 부분은 경로 처리뿐입니다. 설정에서 슬래시를 사용하거나 백슬래시를 올바르게 이스케이프하십시오. 그 외에는 macOS 및 Linux와 경험이 같습니다.',
          },
          {
            q: 'MCP tool call을 어떻게 샌드박싱합니까?',
            a: '세 가지 계층이 대부분의 위험을 커버합니다. 첫째, 설정 수준에서 각 서버의 범위를 좁게 제한하십시오: filesystem은 하나의 디렉터리로, 데이터베이스는 읽기 전용 역할로, GitHub는 테스트 저장소에 한정된 fine-grained PAT로. 둘째, 클라이언트의 도구별 승인 규칙을 사용하십시오: 읽기는 자동 승인, 쓰기는 승인 필수. 셋째, 에이전트를 `git stash`를 쓰기 쉬운 workspace 안에 두어 파괴적인 작업을 git으로 되돌릴 수 있게 하십시오. 민감한 작업은 서버가 명시적으로 필요로 하는 엔드포인트를 제외하고 네트워크 접근이 없는 호스트에서 실행하십시오.',
          },
          {
            q: '로컬 LLM으로 브라우저 MCP를 사용하려면 어떻게 하며, 에이전트가 HTTP 요청을 할 수 있습니까?',
            a: '브라우저 MCP를 쓰려면 tool calling 모델이 실행 중인 Ollama, MCP 클라이언트(Goose 등), 그리고 Microsoft의 `@playwright/mcp` 서버(`npx @playwright/mcp@latest`)를 연결하십시오. 클라이언트의 MCP 설정에 이 서버를 추가하면 모델이 실제 브라우저를 제어합니다. 이 브라우저가 모델이 이동하는 곳으로 요청을 보내므로, 그 범위에서 에이전트는 HTTP 요청을 할 수 있습니다. 일부 타사 서버는 `http_get`/`http_post` 도구를 더 직접적으로 노출합니다. 반면 filesystem과 데이터베이스 서버는 네트워크 요청을 하지 않으며 로컬 리소스에서만 작동합니다.',
          },
          {
            q: 'MCP가 Ollama와 기본적으로 작동합니까, 아니면 래퍼가 필요합니까?',
            a: 'Ollama 자체는 MCP를 말하지 않습니다. OpenAI 호환 채팅 API를 제공할 뿐입니다. Ollama의 채팅 API를 MCP 서버에 연결하려면 클라이언트(Goose, Cline, Continue.dev, LM Studio)가 필요합니다. 클라이언트가 모델의 tool call을 올바른 MCP 서버로 라우팅하고 결과를 대화에 되돌려 줍니다. 사용자 입장에서는 클라이언트를 설치하고 Ollama를 가리키는 것 외에 추가 설정이 없습니다.',
          },
          {
            q: 'MCP와 function calling의 차이점은 무엇입니까?',
            a: 'Function calling은 LLM이 도구 이름과 인수를 지정하는 구조화된 JSON을 생성하는 것으로, 모델의 기능입니다. MCP는 도구 서버와 클라이언트가 프로세스 간에 도구를 설명, 발견, 호출, 반환하게 하는 프로토콜로, 상호 운용성 계층입니다. 둘은 함께 작동합니다. 클라이언트가 MCP 도구 정의를 모델의 function calling 형식으로 변환하고, 모델이 function call을 생성하면, 클라이언트가 그 호출을 MCP 서버로 되돌려 매핑하고, 서버가 실행합니다. MCP 없이도 function calling은 할 수 있지만, 프로젝트마다 filesystem/데이터베이스/브라우저 핸들러를 다시 구현하게 됩니다. MCP를 쓰면 같은 서버가 모든 클라이언트에서 작동합니다.',
          },
          {
            q: 'Ollama에 MCP 서버를 연결(연동)하려면 어떻게 합니까?',
            a: 'Ollama에 추가하는 것이 아닙니다. Ollama에는 MCP 설정이 없습니다. Ollama 앞에 있는 클라이언트에서 서버를 추가합니다. Goose에서는 `goose configure`를 실행하고 Add Extension, Command-line Extension을 차례로 선택한 다음 서버 명령을 입력하십시오(예: `npx -y @modelcontextprotocol/server-filesystem /path/to/workspace`). 빠른 테스트에는 `goose session --with-extension "<command>"`를 사용합니다. Cline과 Continue.dev에는 각자의 MCP 설정이 있습니다. Ollama가 컨텍스트 창 32K 이상의 tool calling 모델을 실행 중인지 확인하십시오.',
          },
          {
            q: 'Claude Desktop을 Ollama 모델과 함께 사용할 수 있습니까?',
            a: '직접적인 구성으로는 불가능합니다. Claude Desktop은 Anthropic의 클라우드 모델과 통신하므로 Ollama 모델을 실행하지 않습니다. Claude Desktop에서 이어지는 것은 MCP 서버 생태계입니다. 같은 서버를 Ollama를 지원하는 MCP 클라이언트(Goose, Cline, Continue.dev, LM Studio 등)에서 사용할 수 있습니다. 이 가이드가 설명하는 것이 바로 그 로컬 대응 구성입니다.',
          },
          {
            q: '어떤 공식 MCP 서버가 보관(archived)되었으며, 무엇으로 대체합니까?',
            a: 'SQLite, PostgreSQL, Puppeteer, GitHub(및 기타)용 참조 서버는 `servers-archived` 저장소로 옮겨져 더 이상 유지 관리되지 않습니다. 해당 npm 패키지(존재하는 경우)에는 "no longer supported" 표시가 있고 보안 수정이 제공되지 않습니다. 유지 관리되는 대체재는 다음과 같습니다: GitHub는 공식 `github/github-mcp-server`, 브라우저 자동화는 Microsoft의 `@playwright/mcp`, Postgres는 제한 모드의 `postgres-mcp`(Crystal DBA). SQLite에는 유지 관리되는 공식 서버가 없으므로 파일 사본에 보관된 서버를 사용하거나 데이터를 Postgres에 불러오십시오. filesystem 서버는 계속 적극적으로 유지 관리되는 참조 서버입니다.',
          },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽기',
        items: [
          '[2026년 tool calling을 위한 최고의 로컬 모델](/ko/power-local-llm/best-local-models-tool-calling-2026) — 위에서 권장한 모델(Gemma 4, GLM-4.7, Qwen3, Llama 3.3)에 대한 비교 벤치마크.',
          '[로컬 자율 에이전트가 실제로 작동합니다](/ko/power-local-llm/autonomous-local-agents-actually-work) — 장시간 작업에서 로컬 MCP 에이전트가 안정적으로 할 수 있는 것과 없는 것에 대한 현실 점검.',
          '[Continue.dev vs Cline vs Aider: 2026년 최고의 로컬 코드 에이전트](/ko/power-local-llm/continue-dev-vs-cline-vs-aider-local) — 코드 중심 작업을 위한 인접 에이전트 맥락. Cline과 Continue.dev도 MCP 클라이언트입니다.',
          '[2026년 최고의 로컬 LLM](/ko/local-llms/best-local-llms-2026) — 더 넓은 오픈 웨이트 환경을 위한 모델 참조.',
          '[로컬 AI 에이전트로 Zapier 대체하기](/ko/power-local-llm/replace-zapier-with-local-ai-agents) — 같은 MCP 스택을 위한 워크플로 자동화 관점.',
          '[Power Local LLM 허브](/ko/power-local-llm) — 전체 가이드 라이브러리.',
        ],
      },
    },
      schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama MCP 연결 방법 2026: 로컬 모델을 파일, 데이터베이스, API에 연동하기',
      description: 'Ollama MCP 연결 방법: Goose로 로컬 모델을 파일, Postgres, 브라우저, GitHub에 연동합니다. 실제 설정, 유지되는 서버, 안전한 권한.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-ai-agents-with-mcp',
      inLanguage: 'ko',
      datePublished: '2026-05-24',
      dateModified: '2026-11-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
  },
}
