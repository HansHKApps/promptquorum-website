// Local AI App Directory — Askimo (layer: desktop chat client with built-in and external local/cloud AI
// providers, RAG over indexed files, a coding-agent runner, and MCP tool integration)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no
// founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18:
// - askimo.chat (homepage: desktop app for macOS, Windows, Linux; "no account required"; combines a chat
//   client with file search (RAG), external coding agents, chained prompt "Recipes"/"Plans", and MCP tool
//   calls; links to docs, security, terms, pricing, and the GitHub repository);
// - askimo.chat/pricing (Individual edition: free, no account, no usage limit stated by Askimo itself —
//   AI usage is billed directly by whichever provider's API key the user supplies, or is free for local
//   models like Ollama/LM Studio. A paid Team Edition — shared knowledge bases, role-based access, audit
//   logs, optional encrypted cloud sync — is announced as planned for H2 2026 with price listed only as
//   "TBD / seat / month"; not launched, so no real paid tier exists yet);
// - askimo.chat/security (data handling: no API keys, conversations, documents, or personal data collected
//   by Askimo; no backend servers store user data; one anonymous first-launch install ping sends only app
//   version + OS family and cannot be disabled; optional, off-by-default anonymous feature-usage analytics.
//   Everything lives under `~/.askimo` with no cloud sync: API keys in the OS keychain (or AES-256-GCM
//   fallback), chat history in a local SQLite DB, RAG index via local Apache Lucene/jvector, preferences in
//   a local YAML file. RAG indexing and embeddings run on-device; only relevant snippets are sent to the
//   chosen AI provider when asking a question. No company name, HQ, or jurisdiction is stated on this page);
// - askimo.chat/terms (checked for a company entity/HQ/governing-law clause: refers to the product only as
//   "Askimo," with a "© 2026 Askimo" footer and no corporate suffix, registered address, or country; the
//   "Governing Law" section heading exists but its body text did not render any jurisdiction. No HQ country
//   is stated anywhere on askimo.chat, so hqCountry/hqCountrySource are left unset per the Company HQ flag
//   rule — this is an unattended run, so no owner question was asked, this is simply recorded as unset);
// - askimo.chat/docs/desktop/installation/ and its macOS/Windows/Linux sub-pages (install paths per OS: a
//   DMG for macOS (Apple Silicon and Intel builds, both from the GitHub Releases "latest" redirect), an
//   MSI installer for Windows, and a .deb package for Linux (x64 and arm64), each with a "Universal JAR"
//   (Java 25+) fallback for all three OSes. All three primary paths are a single download-and-run installer
//   — no build step, no package manager required);
// - askimo.chat/docs/desktop/agents/ (how the "Agents" feature works: Askimo itself does not run an agent —
//   it launches an external coding CLI as a subprocess in a chosen workspace folder, with approval prompts
//   bypassed, and streams its output back. Three supported runtimes: Claude Code (Anthropic, installed via
//   npm, authenticated via `claude login` or an Anthropic account), Codex CLI (OpenAI, installed via npm,
//   authenticated with an OpenAI API key added in Askimo), and Antigravity CLI (Google, uses the `agy`
//   binary and a Gemini API key shared with Askimo's own Gemini provider). A user-authored Skills library
//   (`SKILL.md` folders) is copied/symlinked into each runtime's own skill folder before launch);
// - askimo.chat/docs/ (sidebar/feature index: RAG is implemented as "Projects" — knowledge-aware workspaces
//   with indexed documents and code, described for chatting with documents using Ollama and local models;
//   an "MCP Integration" guide describes connecting to GitHub, databases, APIs, and other tools over the
//   Model Context Protocol; "Recipes" are described as declarative automation chains combining prompts and
//   commands; a CLI is described for scripting, CI/CD pipelines, and DevOps tasks; supported AI providers
//   are listed as cloud (OpenAI, Anthropic Claude, Google Gemini, xAI/Grok) and local/self-hosted (a
//   built-in local LLM option, Ollama, LM Studio, LocalAI, Docker AI), plus an OpenAI-compatible endpoint
//   option and a LiteLLM "Team Gateway" option);
// - github.com/askimo-ai/askimo (About: same product; license field AGPL-3.0; 551 stars, checked 2026-11-18);
// - api.github.com/repos/askimo-ai/askimo (pushed_at 2026-11-18T07:52:02Z; releases: v1.5.5 published
//   2026-11-10, v1.5.4 published 2026-10-19, v1.5.3 published 2026-09-28; checked 2026-11-18).
// Notes:
// - License: AGPL-3.0, confirmed via the GitHub repository's license field.
// - locality 'hybrid': Askimo ships a built-in local LLM option and connects to local backends (Ollama,
//   LM Studio, LocalAI, Docker AI) as well as cloud providers (OpenAI, Anthropic, Gemini, xAI); which path
//   is used depends entirely on what the user configures, per askimo.chat/docs.
// - engine 'both': a user can run the built-in local model, point Askimo at a local inference server, or
//   use a cloud provider's API key — the app itself does not run model weights the way a dedicated local
//   runtime does, but it is not purely a thin client for one external engine either.
// - price 'free': the only AI product feature available today (the "Individual" edition) is free with no
//   account and no usage cap imposed by Askimo; the announced "Team Edition" has no price yet (listed as
//   "TBD / seat / month") and is not launched, so this is not yet a real freemium split.
// - interfaces 'desktop' (the primary way to use Askimo) and 'cli' (a documented CLI for scripting, CI/CD,
//   and DevOps tasks, per askimo.chat/docs).
// - installEffort 'installer': the officially documented, easiest path on every platform is a one-step
//   installer — a DMG on macOS, an MSI on Windows, a .deb on Linux — per the per-OS installation guides,
//   checked 2026-11-18. A Universal JAR (Java 25+) exists as a documented fallback for all three OSes but
//   is not the primary path a newcomer is pointed to.
// - worksWith: named local/cloud backends and coding-agent runtimes Askimo documents integrating with —
//   see askimo.chat/docs and askimo.chat/docs/desktop/agents/, checked 2026-11-18.
// - hardware: variesByModel — Askimo's own install footprint is small (200MB disk, per the installation
//   guides), but the actual memory/GPU floor depends entirely on whichever local backend and model the
//   user connects (built-in local model, Ollama, LM Studio, etc.), not a fixed requirement of Askimo itself.
// Last upstream update: 2026-11-18 (GitHub API `pushed_at`, same day as this check and newer than the
// v1.5.5 release tagged 2026-11-10) → NOT stale (0 days before this 2026-11-18 check).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'askimo',
  name: 'Askimo',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // built-in local model + local backends (Ollama, LM Studio, LocalAI, Docker AI) and cloud providers (OpenAI, Anthropic, Gemini, xAI), user-configured
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'LocalAI', 'Docker AI', 'Claude Code', 'Codex CLI', 'Antigravity CLI', 'LiteLLM'],
  engine: 'both',
  license: 'AGPL-3.0', // github.com/askimo-ai/askimo license field, checked 2026-11-18
  price: 'free', // askimo.chat/pricing, checked 2026-11-18: Individual edition free, no account, no usage cap; Team Edition announced but unpriced/unlaunched
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // Askimo's own footprint is ~200MB disk; the real floor depends on whichever local backend/model the user connects, per askimo.chat/docs
  stars: 551, // github.com/askimo-ai/askimo, checked 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'agent', 'docs', 'code'],
  url: 'askimo.chat',
  storeLinks: {
    web: 'https://askimo.chat',
    github: 'https://github.com/askimo-ai/askimo',
  },
  installEffort: 'installer',
  installEvidence: 'askimo.chat/docs/desktop/installation/macos/, /windows/, and /linux/, checked 2026-11-18: macOS ships a signed-flow DMG (Apple Silicon and Intel builds, e.g. "Askimo-Desktop-macos-arm64.dmg"), Windows ships an MSI installer ("Askimo-Desktop-windows-x64.msi"), and Linux ships a .deb package (x64 and arm64, e.g. "Askimo-Desktop-linux-x64.deb") via `dpkg -i`. Each OS also documents a fallback "Universal JAR" path requiring Java Runtime Environment 25+, which is not the primary path.',
  tagline: {
    en: 'Free, open-source (AGPL-3.0) desktop AI chat client for macOS, Windows, and Linux — connects to local backends (Ollama, LM Studio) and cloud providers, indexes your files for RAG, and can run external coding agents like Claude Code and Codex CLI',
    de: 'Kostenloser, quelloffener (AGPL-3.0) Desktop-KI-Chat-Client für macOS, Windows und Linux — verbindet sich mit lokalen Backends (Ollama, LM Studio) und Cloud-Anbietern, indiziert Ihre Dateien für RAG und kann externe Coding-Agenten wie Claude Code und Codex CLI ausführen',
    fr: 'Client de chat IA pour ordinateur, gratuit et open source (AGPL-3.0), pour macOS, Windows et Linux — se connecte à des backends locaux (Ollama, LM Studio) et à des fournisseurs cloud, indexe vos fichiers pour la RAG et peut exécuter des agents de codage externes comme Claude Code et Codex CLI',
    ja: '無料・オープンソース（AGPL-3.0）のデスクトップAIチャットクライアント（macOS、Windows、Linux対応）— ローカルバックエンド（Ollama、LM Studio）とクラウドプロバイダーに接続し、ファイルをRAG用にインデックス化し、Claude CodeやCodex CLIなどの外部コーディングエージェントを実行可能',
    zh: '免费开源（AGPL-3.0）的桌面 AI 聊天客户端，支持 macOS、Windows 和 Linux —— 可连接本地后端（Ollama、LM Studio）和云端提供商，为文件建立 RAG 索引，并可运行 Claude Code、Codex CLI 等外部编码智能体',
    es: 'Cliente de chat de IA de escritorio gratuito y de código abierto (AGPL-3.0) para macOS, Windows y Linux: se conecta a backends locales (Ollama, LM Studio) y proveedores en la nube, indexa tus archivos para RAG y puede ejecutar agentes de codificación externos como Claude Code y Codex CLI',
    pt: 'Cliente de chat de IA para desktop, gratuito e de código aberto (AGPL-3.0), para macOS, Windows e Linux — conecta-se a backends locais (Ollama, LM Studio) e provedores em nuvem, indexa seus arquivos para RAG e pode executar agentes de codificação externos como Claude Code e Codex CLI',
    ar: 'عميل دردشة ذكاء اصطناعي مجاني ومفتوح المصدر (AGPL-3.0) لسطح المكتب يعمل على macOS وWindows وLinux — يتصل بخوادم محلية (Ollama وLM Studio) وبمزودي الخدمات السحابية، ويفهرس ملفاتك لتقنية RAG، ويمكنه تشغيل وكلاء برمجة خارجيين مثل Claude Code وCodex CLI',
    ko: '무료 오픈소스(AGPL-3.0) 데스크톱 AI 채팅 클라이언트 — macOS, Windows, Linux 지원. 로컬 백엔드(Ollama, LM Studio)와 클라우드 제공업체에 연결하고, 파일을 RAG용으로 인덱싱하며, Claude Code나 Codex CLI 같은 외부 코딩 에이전트를 실행할 수 있음',
  },
  reviewSlug: 'askimo-review',
  // Comparison attributes: verified against askimo.chat, askimo.chat/docs, and github.com/askimo-ai/askimo
  // on 2026-11-18; a missing key means not stated there, never false.
  compare: { ollama: true, customEndpoint: true, mcp: true, fileChat: true, builtInEngine: true },
  pqReview: {
    date: '2026-11-18',
    version: '1.5.5',
    versionSourceUrl: 'https://github.com/askimo-ai/askimo/releases',
  },
  verdict: 'Best for anyone who wants one free, open-source desktop chat app that can switch between a local model and several cloud providers, search their own indexed files, and hand a coding task to an external agent CLI — weaker fit for anyone who wants model inference built directly into the client with no setup of a separate local backend, or who needs a stated company/jurisdiction behind the product.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // github.com/askimo-ai/askimo API: pushed_at 2026-11-18T07:52:02Z, newer than the v1.5.5 release tagged 2026-11-10; checked 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/askimo-ai/askimo',
}
