// Local AI App Directory — Logseq (core app; layer: notes). Added 2026-10-24.
// NOT the same as the `logseq-copilot` tile, which is a third-party AI plugin for Logseq.
// Facts verified 2026-10-24 against: GitHub API for logseq/logseq (latest release 2.0.2 "Desktop APP 2.0.2 (Beta Testing)" published
// 2026-10-07; nightly 2026-10-21; repo pushed_at 2026-10-23; licence AGPL-3.0; homepage logseq.com), the 2.0.2 release assets
// (Logseq-darwin-arm64/x64-2.0.2.dmg, Logseq-win-x64/arm64-2.0.2-nsis.exe, Logseq-linux-x86_64/arm64-2.0.2.AppImage, Logseq-android-2.0.2.apk),
// the repository README (DB version is beta, "data loss is possible"), logseq/docs db-version.md (MCP server under Settings > AI, Sync is
// paid for $5/$15 Open Collective backers/sponsors and self-hostable, iOS app invite-only, Android not open for alpha), the logseq.com page
// script (privacy policy last updated 2023-07-28; claims "Free forever for personal use", "You own your data locally forever") and the
// iTunes lookup API (App Store id1601013908, v0.10.9 of 2024-04-23, free, iOS 14.0+).
// Core Logseq has no built-in language model; AI enters only through the optional MCP server and community plugins.
// No Google Play listing could be confirmed (package id not verified), so no googlePlay link is set.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'logseq',
  name: 'Logseq',
  categories: ['notes-integrations'],
  interfaces: ['desktop', 'web', 'mobile'],
  locality: 'local', // notes are kept on the device; Sync, Publish and the web app are optional cloud services; the optional MCP server runs on localhost (127.0.0.1) per the docs
  platforms: ['mac', 'win', 'linux', 'ios', 'android', 'web'],
  worksWith: ['LM Studio', 'Gemini CLI'], // the two MCP clients named in the Logseq DB-version docs
  engine: 'external', // no built-in model; an external MCP client (LM Studio, Gemini CLI) does the AI part
  license: 'AGPL-3.0',
  price: 'freemium', // app free "forever for personal use" per the site; Logseq Sync is paid (Open Collective backers $5/month, sponsors $15/month per the docs) or self-hosted
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no hardware floor stated; no local inference in the app itself
  stars: 45355, // github.com/logseq/logseq, GitHub API 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['docs'],
  url: 'logseq.com',
  storeLinks: {
    github: 'https://github.com/logseq/logseq',
    appStore: 'https://apps.apple.com/us/app/logseq/id1601013908',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases 2.0.2 (2026-10-07) checked 2026-10-24: Logseq-darwin-arm64-2.0.2.dmg, Logseq-darwin-x64-2.0.2.dmg, Logseq-win-x64-2.0.2-nsis.exe, Logseq-linux-x86_64-2.0.2.AppImage, Logseq-android-2.0.2.apk; double-click install, no terminal step',
  tagline: {
    en: 'Open-source, local-first outliner and knowledge base that keeps notes on your device and offers an optional MCP server for AI tools',
    de: 'Quelloffener Outliner und Wissensspeicher, der Notizen lokal auf dem Gerät hält und einen optionalen MCP-Server für KI-Werkzeuge bietet',
    fr: "Outil de prise de notes en plan et base de connaissances open source, qui garde les notes sur l'appareil et propose un serveur MCP optionnel pour les outils d'IA",
    ja: 'ノートを端末内に保存するオープンソースのアウトライナー兼ナレッジベース。AIツール向けにオプションのMCPサーバーを備える',
    zh: '开源的本地优先大纲笔记与知识库，笔记保存在设备上，并提供面向 AI 工具的可选 MCP 服务器',
    es: 'Organizador en esquema y base de conocimiento de código abierto que guarda las notas en tu dispositivo y ofrece un servidor MCP opcional para herramientas de IA',
    pt: 'Outliner e base de conhecimento de código aberto que guarda as notas no seu dispositivo e oferece um servidor MCP opcional para ferramentas de IA',
    ar: 'أداة مفتوحة المصدر لتدوين الملاحظات بالمخطط الهرمي وقاعدة معرفة تحفظ الملاحظات على جهازك وتوفّر خادم MCP اختيارياً لأدوات الذكاء الاصطناعي',
    ko: '노트를 기기에 보관하는 오픈소스 아웃라이너 겸 지식 베이스로, AI 도구용 선택형 MCP 서버를 제공합니다',
  },
  reviewSlug: 'logseq-review',
  pqReview: {
    date: '2026-10-24',
    version: '2.0.2',
    versionSourceUrl: 'https://github.com/logseq/logseq/releases/tag/2.0.2',
  },
  // Comparison attributes: stated in the Logseq docs on 2026-10-24; a missing key = not stated there, never false.
  compare: { noteApp: 'Logseq', localLlm: true }, // localLlm: the DB-version docs show a local LLM client (LM Studio) connecting through the optional MCP server
  verdict: 'Best for note-takers who want an open-source, local-first outliner and are willing to run the current database-version beta, whose README warns that data loss is possible; the app has no built-in AI and only an optional MCP server for external AI clients, and PromptQuorum did not test it hands-on.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // GitHub API: repo pushed_at 2026-10-23 (newer than latest release 2.0.2 of 2026-10-07 and nightly of 2026-10-21), read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/logseq/logseq',
}
