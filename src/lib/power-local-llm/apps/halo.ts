// Local AI App Directory — Halo (hello-halo.cc; repo openkursar/hello-halo) (layer: desktop AI workstation — chat, coding agents, AI browser, documents, Digital Humans)
// Added 2026-11-17 from primary sources, not hands-on tested: hello-halo.cc (home, docs: install, set up AI, security/privacy/data flow, contact, changelog),
// github.com/openkursar/hello-halo (README, LICENSE, SECURITY.md, Releases API, repo API), all read 2026-11-17.
// Name collision check: no other tile or review called Halo in the directory; the name is shared with unrelated products, so the review says which Halo is meant.
// - License: MIT (LICENSE file: "Copyright (c) 2024-2025 OpenKursar"; README badge). The GitHub API license field shows NOASSERTION, the LICENSE text itself is MIT.
// - Stars: GitHub API 1941 on 2026-11-17 (articles use starsFor, never a typed number).
// - Latest release v3.0.5 published 2026-11-01 (assets: Halo-3.0.5-arm64.dmg, Halo-3.0.5-Intel.dmg, Halo-Setup-3.0.5.exe, Halo-3.0.5.AppImage, Halo-3.0.5.apk). Changelog page lists 3.0.4 (2026-10-17) as newest; v3.0.0 is a pre-release tag.
// - Last upstream update: last commit on the default branch 2026-11-15 (GitHub API; pushed_at 2026-11-17) -> NOT stale (3-month rule).
// - HQ country: NOT CLEAR. No privacy policy or impressum exists (hello-halo.cc/privacy and /docs/en/privacy.html return 404); the security page, contact page, footer ("© 2025 Halo"), LICENSE
//   ("OpenKursar"), GitHub org (no location) and docs name no company, address or country. Left unset on purpose; owner can decide (docs are Chinese-first and support Feishu/WeChat/WeCom, which is not proof of HQ).
// - Local models: the docs' model setup page names OpenAI, Claude (Anthropic), DeepSeek and OpenRouter and does not mention Ollama or LM Studio; the README says any Anthropic- or OpenAI-compatible API works, so a local
//   OpenAI-compatible server is possible but untested by PromptQuorum. Hence locality 'hybrid'/engine 'external'.
// - Security page describes the public 3.0.4 build (plain-text keys, always-on trust mode, Google Analytics + Baidu Tongji with no off switch). Not re-checked against 3.0.5.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'halo',
  name: 'Halo',
  categories: ['computer-browser-agents', 'autonomous-agents', 'general-chat-clients', 'document-pdf-chat'],
  interfaces: ['desktop'],
  locality: 'hybrid', // app, chats, files, memory and keys are stored on the computer; the models you connect (Claude, ChatGPT, Copilot, API) receive the conversation context
  platforms: ['mac', 'win', 'linux'], // macOS 12+ (Apple silicon + Intel), Windows 10+ x64, Linux x64 AppImage (no AI terminal); Android APK is a remote client only, iOS builds from source
  worksWith: ['Claude Code', 'Codex', 'OpenAI', 'Anthropic', 'GitHub Copilot', 'DeepSeek', 'OpenRouter'],
  engine: 'external', // ships no model of its own; uses Claude Code, Codex, its own Halo SDK engine, or Anthropic/OpenAI-compatible APIs
  license: 'MIT', // LICENSE file text read 2026-11-17
  price: 'free', // free, MIT; model usage billed by the user's own provider or account
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no hardware figure stated
  stars: 1941, // GitHub API 2026-11-17
  addedDate: '2026-11-17',
  status: 'listed',
  uses: ['chat', 'code', 'agent', 'docs'],
  url: 'hello-halo.cc',
  storeLinks: {
    github: 'https://github.com/openkursar/hello-halo',
    web: 'https://hello-halo.cc',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v3.0.5 (2026-11-01) lists Halo-3.0.5-arm64.dmg, Halo-3.0.5-Intel.dmg, Halo-Setup-3.0.5.exe, Halo-3.0.5.AppImage and Halo-3.0.5.apk; the install docs say no Node.js or command line is needed, the Mac build is notarized, the Windows installer is not code-signed yet (SmartScreen warning) and the Linux build has no AI terminal; checked 2026-11-17, installers not run',
  tagline: {
    en: 'Open-source desktop AI workstation for chat, coding agents, an AI-driven browser and Office documents, with persistent "Digital Humans" and remote access',
    de: 'Quelloffene Desktop-KI-Arbeitsstation für Chat, Coding-Agenten, einen KI-gesteuerten Browser und Office-Dokumente, mit dauerhaften „Digital Humans“ und Fernzugriff',
    fr: 'Poste de travail IA de bureau open source pour le chat, les agents de code, un navigateur piloté par l\'IA et les documents Office, avec des « Digital Humans » persistants et un accès à distance',
    ja: 'チャット、コーディングエージェント、AIが操作するブラウザ、Officeドキュメントに対応し、常駐する「デジタルヒューマン」とリモートアクセスを備えたオープンソースのデスクトップAIワークステーション',
    zh: '开源桌面 AI 工作站，支持聊天、编程智能体、AI 驱动的浏览器和 Office 文档，并提供常驻的“数字人”和远程访问',
    es: 'Estación de trabajo de IA de escritorio de código abierto para chat, agentes de programación, un navegador controlado por IA y documentos Office, con «Digital Humans» persistentes y acceso remoto',
    pt: 'Estação de trabalho de IA para desktop de código aberto para chat, agentes de programação, um navegador controlado por IA e documentos Office, com «Digital Humans» persistentes e acesso remoto',
    ar: 'محطة عمل ذكاء اصطناعي مفتوحة المصدر لسطح المكتب للدردشة ووكلاء البرمجة ومتصفح يتحكم فيه الذكاء الاصطناعي ومستندات Office، مع «Digital Humans» دائمين ووصول عن بُعد',
    ko: '채팅, 코딩 에이전트, AI가 조작하는 브라우저, Office 문서를 지원하고 상시 동작하는 "Digital Human"과 원격 접속을 갖춘 오픈소스 데스크톱 AI 워크스테이션',
  },
  reviewSlug: 'halo-review',
  pqReview: {
    date: '2026-11-17',
    version: '3.0.5',
    versionSourceUrl: 'https://github.com/openkursar/hello-halo/releases/tag/v3.0.5',
  },
  lastVerifiedDate: '2026-11-17',
  lastUpstreamUpdate: '2026-11-15', // GitHub API: last commit on the default branch 2026-11-15T15:32Z (pushed_at 2026-11-17); latest release v3.0.5 published 2026-11-01
  lastUpstreamUpdateSource: 'https://github.com/openkursar/hello-halo (last commit 2026-11-15; latest release v3.0.5, 2026-11-01)',
}
