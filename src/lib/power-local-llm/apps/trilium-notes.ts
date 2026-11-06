// Local AI App Directory — Trilium Notes (layer: notes / personal knowledge base; macOS, Windows, Linux desktop + self-hosted server/web).
// Added 2026-11-03 on request. Facts verified 2026-11-03 against: triliumnotes.org (home page: open source, desktop app or self-hosted
// server, no official mobile app — TriliumDroid is an unofficial Android app —, free with no paid tiers/accounts, AGPL-3.0, notes in SQLite,
// not encrypted by default, protected notes AES-128-CBC, maintainers Elian Doran and community building on zadam, AI optional and off by default),
// docs.triliumnotes.org/user-guide/llm (providers: Anthropic, OpenAI, Google, DeepSeek, Claude Code subscription, local Ollama and LM Studio,
// custom OpenAI-compatible endpoints; built-in MCP server; note tools have no permission management; attachments sent without OCR),
// docs.triliumnotes.org server + Docker pages (image triliumnext/trilium, port 8080, volume ~/trilium-data; server includes the web and mobile frontends),
// and the GitHub API for TriliumNext/Trilium (latest release v0.106.1 published 2026-10-23, a security release for server/Docker images;
// previous v0.106.0 2026-09-25, v0.105.0 2026-08-19; AGPL-3.0; repo pushed_at 2026-11-03; homepage triliumnotes.org; 38,674 stars).
// Release assets v0.106.1: TriliumNotes-v0.106.1-macos-arm64/x64 .dmg/.zip, -windows-x64/arm64 .exe/.zip, -linux-x64/arm64 .AppImage/.deb/.rpm/.flatpak/.zip,
// and TriliumNotes-Server-v0.106.1-linux-x64/arm64.tar.xz.
// LOCALITY = local: notes live in a local SQLite database on the desktop or on the user's own server; the AI integration is off until enabled and then
// uses whichever provider the user picks (local Ollama/LM Studio keeps data on the machine, cloud providers receive note content).
// Privacy: docs.triliumnotes.org/user-guide/misc/privacy-policy (no data collected or sent, no analytics/telemetry; update check queries the GitHub releases page; spelling dictionaries downloaded as needed; no operator, contact or date named) and /user-guide/llm/Privacy (per-provider data flow; MCP server off by default; web search terms reach the provider's search infrastructure).
// Not found: a hosted/cloud edition (the site says none exists yet), minimum OS versions. Not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'trilium-notes',
  name: 'Trilium Notes',
  categories: ['notes-integrations'],
  interfaces: ['desktop', 'web'],
  locality: 'local', // SQLite database on the desktop or on the user's own server; AI is opt-in and provider-dependent (docs: "nothing leaves the machine" only with a local provider)
  platforms: ['mac', 'win', 'linux', 'web'], // release assets for macOS, Windows, Linux; self-hosted server with browser/PWA access; no official iOS/Android app
  worksWith: ['Ollama', 'LM Studio', 'Claude Code', 'OpenAI', 'Anthropic', 'Gemini', 'DeepSeek'], // providers named in the LLM docs
  engine: 'external', // no bundled model; Ollama, LM Studio or a cloud/OpenAI-compatible provider does the inference
  license: 'AGPL-3.0',
  price: 'free', // "Free, with no paid tiers, accounts, or feature paywalls" (triliumnotes.org); optional third-party hosting (PikaPods) is separate
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; local models depend on the user's Ollama/LM Studio setup
  stars: 38674, // github.com/TriliumNext/Trilium, GitHub API 2026-11-03
  addedDate: '2026-11-03',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'triliumnotes.org',
  storeLinks: {
    web: 'https://triliumnotes.org',
    github: 'https://github.com/TriliumNext/Trilium',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.106.1 (2026-10-23) checked 2026-11-03: TriliumNotes-v0.106.1-macos-arm64.dmg, -macos-x64.dmg, -windows-x64.exe, -windows-arm64.exe, -linux-x64.AppImage/.deb/.rpm/.flatpak; double-click desktop install, no terminal step (the self-hosted server via Docker is a separate, one-command path)',
  tagline: {
    en: 'Free, open-source hierarchical note-taking app and personal knowledge base for desktop or a self-hosted server, with optional AI chat through Ollama, LM Studio or cloud providers',
    de: 'Kostenlose, quelloffene Notiz-App mit hierarchischer Struktur und persönlicher Wissensdatenbank für den Desktop oder einen eigenen Server, mit optionalem KI-Chat über Ollama, LM Studio oder Cloud-Anbieter',
    fr: 'Application de notes hiérarchique, gratuite et open source, et base de connaissances personnelle pour ordinateur ou serveur auto-hébergé, avec chat IA optionnel via Ollama, LM Studio ou des fournisseurs cloud',
    ja: 'デスクトップまたは自前サーバーで使える、無料のオープンソース階層型ノートアプリ兼個人ナレッジベース。Ollama、LM Studio、クラウドプロバイダー経由の任意のAIチャットに対応',
    zh: '免费开源的层级式笔记应用与个人知识库，可在桌面端或自托管服务器上使用，并可选通过 Ollama、LM Studio 或云端提供商使用 AI 聊天',
    es: 'Aplicación de notas jerárquica, gratuita y de código abierto, y base de conocimiento personal para escritorio o servidor propio, con chat de IA opcional mediante Ollama, LM Studio o proveedores en la nube',
    pt: 'Aplicativo de notas hierárquico, gratuito e de código aberto, e base de conhecimento pessoal para desktop ou servidor próprio, com chat de IA opcional via Ollama, LM Studio ou provedores na nuvem',
    ar: 'تطبيق ملاحظات هرمي مجاني ومفتوح المصدر وقاعدة معرفة شخصية لسطح المكتب أو لخادم مستضاف ذاتيًا، مع دردشة ذكاء اصطناعي اختيارية عبر Ollama وLM Studio أو مزوّدي السحابة',
    ko: '데스크톱 또는 자체 호스팅 서버에서 쓰는 무료 오픈소스 계층형 노트 앱이자 개인 지식 베이스로, Ollama, LM Studio, 클라우드 제공업체를 통한 선택형 AI 채팅을 지원합니다',
  },
  // Comparison attributes (notes segment), read from triliumnotes.org and docs.triliumnotes.org/user-guide/llm on 2026-11-03: localLlm (Ollama and LM Studio
  // providers) and chatNotes ("chat with your notes") are stated; semanticSearch is not — unset, never false.
  compare: { noteApp: 'Trilium Notes', localLlm: true, chatNotes: true },
  reviewSlug: 'trilium-notes-review',
  pqReview: {
    date: '2026-11-03',
    version: '0.106.1',
    versionSourceUrl: 'https://github.com/TriliumNext/Trilium/releases/tag/v0.106.1',
  },
  verdict: 'Best for note-takers who want a free, AGPL-3.0, hierarchical knowledge base they can run on the desktop or their own server and who will switch the optional AI on only with a provider they trust; the AI note tools have no permission management, the privacy policy names no operator or contact, and PromptQuorum did not test the app hands-on.',
  lastVerifiedDate: '2026-11-03',
  lastUpstreamUpdate: '2026-11-03', // GitHub API: repo pushed_at 2026-11-03 (latest release v0.106.1 of 2026-10-23), read 2026-11-03
  lastUpstreamUpdateSource: 'https://github.com/TriliumNext/Trilium',
}
