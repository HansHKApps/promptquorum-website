// Local AI App Directory — Oleafly (layer: free, open-source AGPL-3.0 desktop editor for LaTeX, Typst and Markdown research writing, with optional AI agents and a self-hosted collaboration server)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: oleafly.com (home page, /privacy, /security = Oleafly Server security page; /terms, /pricing, /download, /about, /faq, /changelog return 404 or empty),
// GitHub repository Oleafly/Oleafly (API metadata, README, releases v0.4.11 and v0.4.12 with asset lists, v0.4.12 release notes, commits, org profile), Oleafly/oleafly-server (API metadata).
// Notes:
// - Stars: GitHub API 1234 on 2026-11-18 (owner's list said 1,214). Repo created 2026-07-05.
// - License: GitHub API AGPL-3.0; README and CITATION say AGPL-3.0-or-later. Oleafly Server (separate repo) is also AGPL-3.0.
// - Version: v0.4.12, published 2026-11-13 (README titles the project "beta"). Separate server release server-v0.1.2 (2026-11-13).
// - Install: README links the GitHub Releases page; v0.4.12 ships Oleafly_0.4.12_aarch64.dmg and _x64.dmg (macOS), _x64-setup.exe and _x64_en-US.msi (Windows), .AppImage/.deb/.rpm for x86_64 and ARM64
//   (Linux, glibc 2.35 or newer). README: signed update artifacts, the in-app updater checks the signature. OS-level code signing / notarization of the installers was NOT checked.
// - engine = 'external': Oleafly bundles compilers (Tectonic, Typst, Pandoc), not an LLM engine. AI works through agents the user signs in to (Claude Code, Codex and others), a hosted provider,
//   any OpenAI-compatible endpoint or a local Ollama model (README). PromptQuorum did NOT run a local model through it.
// - locality 'hybrid': documents, compiling, Git and checks run on the user's computer; AI prompts go to the provider/agent the user picks unless a local model is used; collaboration and sync need
//   a server or cloud storage the user sets up.
// - Privacy claims (maker, unverified): privacy page says "no account, no telemetry, the app never phones home"; the README FAQ says release builds check for an update when the app starts. Reported as a
//   maker statement plus the README exception; PromptQuorum did not inspect network traffic.
// - Price: free (README "Free forever"); AI provider usage is billed by the provider the user connects; the user hosts the collaboration server.
// - HQ country: NOT SET (owner decision 2026-11-18: no flag when unclear). The privacy page and footer say "Oleafly and contributors" and name no company, address or governing law;
//   terms/about/imprint return 404. The GitHub organisation profile lists "United States of America" as a location, which is not a company-HQ statement. README credits Prajwal Murthy as builder.
// - Categories: search-deep-research (AI research tasks, literature search) first, then writing-email (LaTeX/Typst/Markdown writing with AI assistance).
// - Compare: only 'localLlm' is set for the local-search segment (README: connect a local Ollama model). webSearch, privateDocs and citations are not set: the README describes literature databases
//   (arXiv, Semantic Scholar, Crossref, PubMed, OpenAlex) and Zotero, which do not map one-to-one onto the segment's definitions.
// Last upstream update: 2026-11-17 (last commit on main, GitHub API 2026-11-18; latest release v0.4.12 on 2026-11-13) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'oleafly',
  name: 'Oleafly',
  categories: ['search-deep-research', 'writing-email'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // local compile/Git/checks; AI via the agent, provider or local Ollama model the user picks
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Codex', 'Gemini CLI', 'Ollama', 'Zotero', 'Git', 'MCP servers'], // README: agent catalog, Ollama, Zotero, Git hosts, MCP
  engine: 'external', // bundled compilers only; AI comes from the user's agent, provider or Ollama
  license: 'AGPL-3.0', // GitHub API; README says AGPL-3.0-or-later
  price: 'free', // README: free forever; AI provider usage billed by the provider
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement published; depends on the model if a local one is used
  stars: 1234,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent', 'docs', 'chat'],
  url: 'oleafly.com',
  storeLinks: {
    github: 'https://github.com/Oleafly/Oleafly',
    web: 'https://oleafly.com',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub release v0.4.12 listed Oleafly_0.4.12_aarch64.dmg and _x64.dmg (macOS), Oleafly_0.4.12_x64-setup.exe and _x64_en-US.msi (Windows), and .AppImage, .deb and .rpm packages for x86_64 and ARM64 (Linux). The README links the Releases page as the download route and lists the same packages. The project labels itself beta.',
  tagline: {
    en: 'Free open-source desktop editor for LaTeX, Typst and Markdown papers, with live collaboration on your own server, Git, Zotero and optional AI agents',
    de: 'Kostenloser, quelloffener Desktop-Editor für LaTeX-, Typst- und Markdown-Arbeiten mit Live-Zusammenarbeit auf dem eigenen Server, Git, Zotero und optionalen KI-Agenten',
    fr: 'Éditeur de bureau gratuit et open source pour articles en LaTeX, Typst et Markdown, avec collaboration en direct sur votre propre serveur, Git, Zotero et agents IA facultatifs',
    ja: 'LaTeX、Typst、Markdownの論文を書ける無料のオープンソース・デスクトップエディター。自前サーバーでのリアルタイム共同編集、Git、Zotero、任意のAIエージェントに対応',
    zh: '免费开源的桌面编辑器，用于撰写 LaTeX、Typst 和 Markdown 论文，支持在自建服务器上实时协作，并提供 Git、Zotero 和可选的 AI 智能体',
    es: 'Editor de escritorio gratuito y de código abierto para artículos en LaTeX, Typst y Markdown, con colaboración en vivo en tu propio servidor, Git, Zotero y agentes de IA opcionales',
    pt: 'Editor de desktop gratuito e de código aberto para artigos em LaTeX, Typst e Markdown, com colaboração ao vivo no seu próprio servidor, Git, Zotero e agentes de IA opcionais',
    ar: 'محرر مكتبي مجاني ومفتوح المصدر لكتابة الأبحاث بصيغ LaTeX وTypst وMarkdown، مع تعاون مباشر على خادمك الخاص وGit وZotero ووكلاء ذكاء اصطناعي اختياريين',
    ko: 'LaTeX, Typst, Markdown 논문을 쓰는 무료 오픈소스 데스크톱 편집기로, 자체 서버에서의 실시간 공동 작업, Git, Zotero, 선택형 AI 에이전트를 지원합니다',
  },
  mcpSupport: true, // README: local MCP server for outside AI clients, `oleafly mcp` over stdio, and MCP servers can be connected
  compare: { localLlm: true },
  reviewSlug: 'oleafly-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.4.12',
    versionSourceUrl: 'https://github.com/Oleafly/Oleafly/releases/tag/v0.4.12',
  },
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // last commit on main 2026-11-17T08:51Z (GitHub API 2026-11-18); latest release v0.4.12 published 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/Oleafly/Oleafly (last commit 2026-11-17; latest release v0.4.12, 2026-11-13)',
}
