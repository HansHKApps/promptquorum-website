// Local AI App Directory — PapersGPT (layer: Zotero plugin for document chat, whole-library search and literature tracking, with an MCP server)
// Added 2026-11-17 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-17: papersgpt.com (home page + JSON-LD, pricing, FAQ, MCP page, privacy policy), GitHub repository papersgpt/papersgpt-for-zotero
// (API metadata, README, releases, commits).
// Notes:
// - Product shape: a Zotero plugin (.xpi), not a standalone app. Needs Zotero 7-10 (README). Install = download the .xpi from GitHub Releases and install it in Zotero.
// - Stars: GitHub API 2709 on 2026-11-17 (matches the owner's list).
// - License: GitHub API AGPL-3.0; README says AGPL-3.0 open source.
// - Price: freemium. The free tier is described inconsistently by the maker: the FAQ says free local models with no time limit, the pricing page frames the free
//   tier as a trial (20 single-PDF chats, limited runs). The paid prices also differ between pages (pricing page, FAQ and JSON-LD list different figures), so no
//   price figure is typed in the review. Unverified.
// - Privacy: the privacy policy is dated 2024-05-25 and says chat messages and API keys stay local and requests go straight to the provider with no middle server,
//   and that anonymous crash logs and a purchase email are collected. v2.3.0 adds built-in AI chat credits ("no API key needed"); whether those requests go through
//   a PapersGPT server is not documented on the pages read. Unverified.
// - MCP: the site's MCP page says the Zotero MCP server is built on DocsAgent (@docsagent/docsagent npm, docsagent-mcp on PyPI) and works without opening Zotero.
// - Site JSON-LD still says softwareVersion 0.6.0 and the changelog page tops out at v0.6.0, while GitHub releases are at papersgpt-v2.3.0. Version taken from GitHub.
// - HQ country: NOT set. The privacy policy, terms and site name no company, address or governing law; the contact is a personal webmail address and the
//   JSON-LD author is "PapersGPT Team". Left unset for the owner to decide.
// - Categories: document-pdf-chat first (chat with PDFs), then search-deep-research (Literature Radar, whole-library search), notes-integrations (saves into Zotero
//   Notes) and mcp-servers-skills (Zotero MCP server).
// Last upstream update: 2026-11-16 (last commit on main, README only; latest release papersgpt-v2.3.0 on 2026-11-13) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'papersgpt',
  name: 'PapersGPT',
  categories: ['document-pdf-chat', 'search-deep-research', 'notes-integrations', 'mcp-servers-skills'],
  interfaces: ['plugin'],
  locality: 'hybrid', // parsing, indexing and search run locally; chat uses a cloud model, your own key or a built-in local model
  platforms: ['mac', 'win', 'linux'], // README: Zotero 7, 8, 9, 10 on macOS, Windows, Linux
  worksWith: ['Zotero', 'Ollama', 'Claude Desktop', 'Claude Code', 'Cursor'], // README: Zotero plugin, Ollama integration, MCP clients named
  engine: 'both', // built-in local models (one-click download) plus cloud LLMs, Ollama and custom OpenAI-compatible endpoints
  license: 'AGPL-3.0', // GitHub API + README
  price: 'freemium', // free tier and paid plans; figures differ between the maker's pages, see header
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the local model chosen; no floor published
  stars: 2709,
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['docs', 'chat', 'agent'],
  url: 'papersgpt.com',
  storeLinks: {
    github: 'https://github.com/papersgpt/papersgpt-for-zotero',
    web: 'https://www.papersgpt.com',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-17 the GitHub release papersgpt-v2.3.0 (2026-11-13) ships papersgpt-v2.3.0.xpi, and the README Quickstart says to download the .xpi and install it into Zotero. Zotero itself must already be installed.',
  tagline: {
    en: 'Zotero plugin that chats with PDFs, searches your whole library, tracks new papers and saves results as notes, using cloud or local models, with an MCP server for Claude, Cursor and other agents.',
    de: 'Zotero-Plugin zum Chatten mit PDFs, für die Suche in der gesamten Bibliothek und das Verfolgen neuer Paper, mit Ergebnissen als Notizen, mit Cloud- oder lokalen Modellen und MCP-Server für Claude, Cursor und andere Agenten.',
    fr: 'Plugin Zotero pour discuter avec des PDF, rechercher dans toute la bibliothèque, suivre les nouveaux articles et enregistrer les résultats en notes, avec des modèles cloud ou locaux et un serveur MCP pour Claude, Cursor et d\'autres agents.',
    ja: 'PDFとのチャット、ライブラリ全体の検索、新着論文の追跡、結果のノート保存ができるZoteroプラグイン。クラウドモデルもローカルモデルも利用でき、Claude、Cursorなどのエージェント向けMCPサーバー付き。',
    zh: '用于与 PDF 对话、搜索整个文献库、追踪新论文并将结果保存为笔记的 Zotero 插件，支持云端或本地模型，并提供面向 Claude、Cursor 等智能体的 MCP 服务器。',
    es: 'Plugin de Zotero para chatear con PDF, buscar en toda la biblioteca, seguir artículos nuevos y guardar los resultados como notas, con modelos en la nube o locales y servidor MCP para Claude, Cursor y otros agentes.',
    pt: 'Plugin do Zotero para conversar com PDFs, pesquisar em toda a biblioteca, acompanhar novos artigos e salvar os resultados como notas, com modelos na nuvem ou locais e servidor MCP para Claude, Cursor e outros agentes.',
    ar: 'إضافة لـ Zotero للدردشة مع ملفات PDF والبحث في المكتبة كلها وتتبّع الأوراق الجديدة وحفظ النتائج كملاحظات، مع نماذج سحابية أو محلية وخادم MCP لـ Claude وCursor ووكلاء آخرين.',
    ko: 'PDF와 대화하고, 라이브러리 전체를 검색하고, 새 논문을 추적하고, 결과를 노트로 저장하는 Zotero 플러그인으로, 클라우드 또는 로컬 모델을 쓸 수 있으며 Claude, Cursor 등 에이전트용 MCP 서버를 제공합니다.',
  },
  mcpSupport: true, // README and site MCP page: Zotero MCP server for Claude Desktop, Claude Code, Cursor and other MCP clients
  // Comparison attributes (document-chat segment), verified 2026-11-17 against the README and papersgpt.com. multiFormat, desktopApp, dockerDeploy and apiServer stay
  // unset: the sources describe PDFs in a Zotero library only, the product is a plugin rather than an app, and no Docker or local API server is documented.
  compare: { localLlm: true, citations: true },
  reviewSlug: 'papersgpt-review',
  pqReview: {
    date: '2026-11-17',
    version: '2.3.0',
    versionSourceUrl: 'https://github.com/papersgpt/papersgpt-for-zotero/releases/tag/papersgpt-v2.3.0',
  },
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-16', // last commit on main 2026-11-16T13:08Z (README only; GitHub API 2026-11-17); latest release papersgpt-v2.3.0 published 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/papersgpt/papersgpt-for-zotero (last commit 2026-11-16; latest release papersgpt-v2.3.0, 2026-11-13)',
}
