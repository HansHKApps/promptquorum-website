// Local AI App Directory — Screenpipe by Negentropy Labs, Inc. (layer: screen + audio memory for people and AI agents)
// Added 2026-11-16 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-16: maker website, GitHub repository and README, LICENSE.md (head only), latest release tag app-v2.7.145, install page,
// pricing page (screenpi.pe/onboarding), the maker's AI memory privacy checklist, changelog, About page, privacy policy and terms (screenpi.pe/privacy,
// screenpi.pe/terms), and published coverage (aicoolies, a Medium teardown, Hacker News threads, a LUCI blog post).
// Notes from the research package:
// - License: LICENSE.md is titled Screenpipe Commercial License. A directory listing elsewhere says MIT, which is not used.
//   LicenseRef-Screenpipe-Commercial is a custom identifier, not an official SPDX license. Personal non-commercial use is permitted; commercial use needs a
//   license; commercial source builds require Enterprise. A third-party review says releases before the maker's June 2026 license change remain MIT; unverified.
// - Stars: GitHub API 22393 on 2026-11-16 (the package carried 22391 from a third-party listing).
// - engine = 'external': the validator rejects 'TODO'. Sources only say transcription and AI provider are selectable and that answers to questions about your work
//   come from plan-dependent models via an ai-gateway; they do not say which engines run locally by default, so no built-in engine is claimed.
// - hardware.ramGb is the README's recommended system RAM (8 GB). The site states 600 MB to 4 GB in use. No GPU requirement is stated, so vramGb and cpuOnly are null.
// - No app store listings found. Account requirement and telemetry are unverified.
// - HQ country US: the privacy policy (last updated 2026-10-10) and the terms name Negentropy Labs, Inc. d/b/a Screenpipe; the terms give a San Francisco CA
//   address for the DMCA agent; the README and a Y Combinator profile also place it in San Francisco. Older README names Mediar, Inc.; no primary source confirms a rename.
// - Version taken from the release GitHub marks as latest (app-v2.7.145, 2026-11-06). The release feed also contains a v0.4.55 tag whose relation to the desktop app was not established.
// - Free plan limits are described only as limited history and limited scheduled workflows, with no numbers.
// Last upstream update: 2026-11-15 (last commit; latest release 2026-11-06) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'screenpipe',
  name: 'Screenpipe',
  categories: ['agent-memory', 'local-search', 'mcp-servers-skills'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid', // capture and history are stored locally by default; cloud AI, transcription, sync and integrations are separate data paths (maker's privacy checklist)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude', 'Codex', 'Cursor'],
  engine: 'external', // AI provider/model is selectable and plan-dependent (pricing page, privacy checklist); no built-in local engine is claimed
  license: 'LicenseRef-Screenpipe-Commercial', // custom identifier for the Screenpipe Commercial License (source-available, not OSI)
  price: 'freemium', // free plan on one device with limited history; Basic $21/month, Business $42/seat/month, Enterprise custom (pricing page, 2026-11-16)
  hardware: { ramGb: 8, vramGb: null, cpuOnly: null, variesByModel: false }, // README recommends 8 GB system RAM; no GPU requirement stated
  stars: 22393,
  addedDate: '2026-11-16',
  status: 'listed',
  uses: ['chat', 'agent'],
  url: 'screenpi.pe',
  storeLinks: {
    github: 'https://github.com/screenpipe/screenpipe',
    web: 'https://screenpi.pe',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-16 the install page offered per-OS downloads for Mac (Apple Silicon and Intel), Windows, Windows ARM and Linux. The README names a .dmg, a .exe and an AppImage. A CLI route (npx screenpipe record) also exists but needs a terminal.',
  tagline: {
    en: 'Desktop app that records your screen and audio locally and lets you and AI agents search that history through a timeline, a local REST API and an MCP server.',
    de: 'Desktop-App, die Bildschirm und Audio lokal aufzeichnet und es Ihnen und KI-Agenten ermöglicht, diesen Verlauf über eine Zeitleiste, eine lokale REST-API und einen MCP-Server zu durchsuchen.',
    fr: 'Application de bureau qui enregistre localement votre écran et votre audio, et permet à vous comme aux agents IA de rechercher cet historique via une chronologie, une API REST locale et un serveur MCP.',
    ja: '画面と音声をローカルで記録するデスクトップアプリ。タイムライン、ローカルのREST API、MCPサーバーを通じて、ユーザーとAIエージェントがその履歴を検索できます。',
    zh: '在本地录制屏幕和音频的桌面应用，您和 AI 智能体可以通过时间线、本地 REST API 和 MCP 服务器搜索这些历史记录。',
    es: 'App de escritorio que graba tu pantalla y tu audio en local y permite que tú y los agentes de IA busquéis en ese historial mediante una línea de tiempo, una API REST local y un servidor MCP.',
    pt: 'App de desktop que grava sua tela e seu áudio localmente e permite que você e agentes de IA pesquisem esse histórico por meio de uma linha do tempo, de uma API REST local e de um servidor MCP.',
    ar: 'تطبيق سطح مكتب يسجّل شاشتك وصوتك محليًا ويتيح لك ولوكلاء الذكاء الاصطناعي البحث في هذا السجل عبر خط زمني وواجهة REST API محلية وخادم MCP.',
    ko: '화면과 오디오를 로컬에서 녹화하고, 타임라인, 로컬 REST API, MCP 서버를 통해 사용자와 AI 에이전트가 그 기록을 검색할 수 있게 해 주는 데스크톱 앱입니다.',
  },
  reviewSlug: 'screenpipe-review',
  pqReview: {
    date: '2026-11-16',
    version: '2.7.145',
    versionSourceUrl: 'https://github.com/screenpipe/screenpipe/releases/tag/app-v2.7.145',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://screenpi.pe/privacy',
  lastVerifiedDate: '2026-11-16',
  lastUpstreamUpdate: '2026-11-15', // GitHub pushed_at 2026-11-15T22:51Z (API, 2026-11-16); latest release app-v2.7.145 published 2026-11-06
  lastUpstreamUpdateSource: 'https://github.com/screenpipe/screenpipe (last commit 2026-11-15; latest release 2026-11-06)',
}
