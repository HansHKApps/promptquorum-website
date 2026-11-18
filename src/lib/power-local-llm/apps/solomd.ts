// Local AI App Directory — SoloMD (layer: local-first Markdown notes app for 5 platforms with built-in AI chat, local-model auto-detection and a bundled MCP server)
// Added 2026-11-17 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-17: solomd.app (home page, privacy policy, security page, thanks page, what's-new), GitHub repository zhitongblog/solomd (API metadata,
// README, releases v5.2.0–v5.2.2, commits), the App Store listing (iTunes lookup, id6762498874) and the Google Play listing (app.solomd).
// Notes:
// - Stars: GitHub API 1652 on 2026-11-17 (owner's list said 1,623).
// - License: GitHub API MIT; README says MIT.
// - Price: free. README: every feature free, no subscription, no ads; optional one-time tips in the Mac App Store, iOS App Store and Google Play only unlock a Supporter badge.
// - Version: GitHub release v5.2.2 (2026-11-16). The App Store lookup shows 5.2.1 (2026-11-16); the README still points to v5.2.0 in its download line. GitHub is the source.
// - Privacy: the privacy policy (updated 2026-04-18) says builds from the website and non-Apple stores send anonymous usage events to solomd.app unless switched off
//   in Settings → Advanced; the App Store builds send none. The README says "no SoloMD-hosted servers". The two statements are reported side by side, not reconciled.
// - Counts differ between maker pages: the older security page (v2.2) lists 14 AI providers and 6 default read-only MCP tools, the README lists 20+ providers and 16 MCP
//   tools. The review quotes the README for current features and names the discrepancy.
// - README states the project is written, tested and released largely by Claude Code under one human maintainer, and that issue replies are AI-written too. Quoted as a maker statement.
// - HQ country: NOT set. The privacy policy, security page, thanks page and README name no company, address, governing law or authority; the terms and about URLs return 404;
//   the GitHub profile has no location; the App Store seller is an individual. Left unset for the owner to decide.
// - Categories: notes-integrations first (Markdown notes vault), then document-pdf-chat (chat with your vault), mcp-servers-skills (bundled solomd-mcp) and writing-email (editor).
// Last upstream update: 2026-11-17 (last commit on main; latest release v5.2.2 on 2026-11-16) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'solomd',
  name: 'SoloMD',
  categories: ['notes-integrations', 'document-pdf-chat', 'mcp-servers-skills', 'writing-email'],
  interfaces: ['desktop', 'mobile'],
  locality: 'hybrid', // notes and the search index stay on disk; AI chat uses a local server found on localhost or a cloud provider with the user's own key
  platforms: ['mac', 'win', 'linux', 'ios', 'ipados', 'android'], // README: macOS, Windows x64+ARM64, Linux x64+ARM64, iOS/iPadOS, Android
  worksWith: ['Ollama', 'LM Studio', 'Jan', 'vLLM', 'llama.cpp', 'Claude Desktop', 'Claude Code', 'Cursor', 'Windsurf'], // README: auto-detected local servers; MCP clients named
  engine: 'external', // no model is bundled: chat goes to a local server such as Ollama or to a cloud provider; only the on-device search embedder is built in
  license: 'MIT', // GitHub API + README
  price: 'free', // README: all features free, no subscription; optional store tips unlock a badge only
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // the editor is small; local-model needs depend on the server the user runs
  stars: 1652,
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['docs', 'chat', 'agent'],
  url: 'solomd.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/solomd/id6762498874',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.solomd',
    github: 'https://github.com/zhitongblog/solomd',
    web: 'https://solomd.app',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-17 the GitHub release v5.2.2 (2026-11-16) ships SoloMD_5.2.2_universal.dmg, SoloMD_5.2.2_x64_en-US.msi, SoloMD_5.2.2_arm64_en-US.msi, portable zips, AppImage, .deb and .rpm files for x64 and ARM64 and Android APKs; the README also lists the Mac App Store, iOS App Store, Google Play, Homebrew cask and winget. Double-click install, no terminal step required.',
  tagline: {
    en: 'Free, open-source Markdown notes app for Mac, Windows, Linux, iPhone and Android with chat over your vault, local-model auto-detection, 9-format export and a bundled MCP server',
    de: 'Kostenlose Open-Source-Notiz-App in Markdown für Mac, Windows, Linux, iPhone und Android mit Chat über Ihren Vault, automatischer Erkennung lokaler Modelle, Export in 9 Formate und mitgeliefertem MCP-Server',
    fr: 'Application de notes Markdown gratuite et open source pour Mac, Windows, Linux, iPhone et Android, avec chat sur votre coffre, détection automatique des modèles locaux, export en 9 formats et serveur MCP intégré',
    ja: 'Mac、Windows、Linux、iPhone、Android向けの無料オープンソースMarkdownノートアプリ。ボルトとのチャット、ローカルモデルの自動検出、9形式のエクスポート、MCPサーバー同梱',
    zh: '面向 Mac、Windows、Linux、iPhone 和 Android 的免费开源 Markdown 笔记应用，支持与笔记库对话、自动发现本地模型、导出 9 种格式，并内置 MCP 服务器',
    es: 'App de notas en Markdown gratuita y de código abierto para Mac, Windows, Linux, iPhone y Android, con chat sobre tu bóveda, detección automática de modelos locales, exportación a 9 formatos y servidor MCP incluido',
    pt: 'App de notas em Markdown gratuito e de código aberto para Mac, Windows, Linux, iPhone e Android, com chat sobre o seu cofre, detecção automática de modelos locais, exportação em 9 formatos e servidor MCP incluído',
    ar: 'تطبيق ملاحظات Markdown مجاني ومفتوح المصدر لأجهزة Mac وWindows وLinux وiPhone وAndroid، مع دردشة مع مجلد ملاحظاتك واكتشاف تلقائي للنماذج المحلية وتصدير بتسعة تنسيقات وخادم MCP مرفق',
    ko: 'Mac, Windows, Linux, iPhone, Android용 무료 오픈소스 Markdown 노트 앱으로, 노트 보관함과의 대화, 로컬 모델 자동 감지, 9가지 형식 내보내기, 번들 MCP 서버를 제공합니다',
  },
  mcpSupport: true, // README: bundled solomd-mcp server for Claude Desktop, Cursor, Windsurf and Claude Code
  // Comparison attributes (notes segment), verified 2026-11-17 against the README: localLlm (auto-detects Ollama, LM Studio, Jan, vLLM, llama.cpp), chatNotes (Agent Panel,
  // "chat-with-vault"), semanticSearch (on-device semantic search over the vault) and citations ([[wikilink]] citations in the Agent Panel) are stated by the maker.
  compare: { noteApp: 'SoloMD', localLlm: true, chatNotes: true, semanticSearch: true, citations: true },
  reviewSlug: 'solomd-review',
  pqReview: {
    date: '2026-11-17',
    version: '5.2.2',
    versionSourceUrl: 'https://github.com/zhitongblog/solomd/releases/tag/v5.2.2',
  },
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-17', // last commit on main 2026-11-17T10:10Z (GitHub API 2026-11-17); latest release v5.2.2 published 2026-11-16
  lastUpstreamUpdateSource: 'https://github.com/zhitongblog/solomd (last commit 2026-11-17; latest release v5.2.2, 2026-11-16)',
}
