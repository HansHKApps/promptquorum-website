// Local AI App Directory — CC Switch by Jason Young (open-source project) (layer: desktop manager for AI coding tools with local API routing)
// Added 2026-11-19 from the owner's request (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-19: ccswitch.io (home, /llms.txt, /en/docs, /en/download, /en/changelog reachable), github.com/farion1231/cc-switch (README, SECURITY.md,
// SUPPORT.md, LICENSE, GitHub API repo + releases + latest commit), localhosted.com/cc-switch (secondary listing, only used to find the site).
// Notes:
// - License: MIT (GitHub API spdx MIT; LICENSE "Copyright (c) 2025 Jason Young"). Free; model usage is billed by whichever provider the user adds.
// - Tools: the README lists twelve managed tools; the official site and its llms.txt list sixteen (adds DeepSeek Harness, Antigravity, GitHub Copilot CLI, WorkBuddy). The review says so.
// - locality 'hybrid': the app and its local routing run on the user's machine; requests go to the API provider the user selects (cloud or otherwise).
//   SECURITY.md: "no project-operated cloud backend"; optional WebDAV / S3 sync uploads to storage the user picks.
// - engine 'external': no model of its own; it manages config and routing for other tools.
// - Install: installer (Windows MSI + portable ZIP, macOS universal DMG + Homebrew cask, Linux .deb / .rpm / AppImage). README: macOS build code-signed and notarized (maker statement, not verified).
// - HQ country: NOT set. ccswitch.io offers no privacy policy, imprint, terms or about page (guessed paths /privacy, /terms.html, /about.html, /contact.html return 404);
//   LICENSE, SECURITY.md and SUPPORT.md name an individual (Jason Young) and "volunteers" and give no country. Left unset per the HQ rule; listed in the run report.
// - Stars: GitHub API 155743 on 2026-11-19.
// - Version 4.0.35: latest GitHub release (published 2026-11-18). Latest commit on main 2026-11-19T12:16Z (933cba13d).
// Last upstream update: 2026-11-19 (newer of latest release 2026-11-18 and last push 2026-11-19) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cc-switch',
  name: 'CC Switch',
  categories: ['routers-gateways', 'code-assistants-ide-plugins'],
  interfaces: ['desktop'],
  locality: 'hybrid', // runs and routes on the user's machine; requests go to the API provider the user selects (README, SECURITY.md)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Codex', 'Gemini CLI', 'OpenCode', 'Anthropic API', 'OpenAI API', 'MCP'], // README supported-tools table and routing section
  engine: 'external', // no model of its own
  license: 'MIT', // GitHub API spdx + LICENSE
  price: 'free', // README/site: free and open source; provider usage is paid to the provider
  hardware: null,
  stars: 155743, // GitHub API 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'ccswitch.io',
  storeLinks: {
    web: 'https://ccswitch.io',
    github: 'https://github.com/farion1231/cc-switch',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-19 GitHub release v4.0.35 listed CC-Switch-v4.0.35-Windows.msi and -Windows-Portable.zip (plus arm64 builds), CC-Switch-v4.0.35-macOS.dmg and .zip (universal), and Linux .deb, .rpm and .AppImage for x86_64 and arm64. The README also documents brew install --cask cc-switch (macOS) and paru -S cc-switch-bin (Arch). Installers not run.',
  mcpSupport: true, // README: unified MCP panel that syncs MCP servers to the supported tools
  tagline: {
    en: 'Free, open-source desktop manager that switches API providers for Claude Code, Codex, Gemini CLI and other AI coding tools in one click, with optional local API routing, failover and shared MCP servers and Skills.',
    de: 'Kostenloser, quelloffener Desktop-Manager, der API-Anbieter für Claude Code, Codex, Gemini CLI und weitere KI-Coding-Tools mit einem Klick umschaltet, mit optionalem lokalem API-Routing, Failover sowie gemeinsamen MCP-Servern und Skills.',
    fr: 'Gestionnaire de bureau gratuit et open source qui change en un clic le fournisseur d\'API de Claude Code, Codex, Gemini CLI et d\'autres outils de codage IA, avec routage d\'API local optionnel, basculement et serveurs MCP et Skills partagés.',
    ja: 'Claude Code、Codex、Gemini CLIなどのAIコーディングツールのAPIプロバイダーをワンクリックで切り替える、無料のオープンソース・デスクトップ管理ツール。ローカルAPIルーティング（任意）、フェイルオーバー、MCPサーバーとSkillsの共有に対応。',
    zh: '免费开源的桌面管理工具，可一键切换 Claude Code、Codex、Gemini CLI 等 AI 编程工具的 API 服务商，并提供可选的本地 API 路由、故障转移以及共享的 MCP 服务器和 Skills。',
    es: 'Gestor de escritorio gratuito y de código abierto que cambia con un clic el proveedor de API de Claude Code, Codex, Gemini CLI y otras herramientas de programación con IA, con enrutamiento de API local opcional, conmutación por error y servidores MCP y Skills compartidos.',
    pt: 'Gerenciador de desktop gratuito e de código aberto que troca com um clique o provedor de API do Claude Code, Codex, Gemini CLI e outras ferramentas de programação com IA, com roteamento de API local opcional, failover e servidores MCP e Skills compartilhados.',
    ar: 'مدير مجاني ومفتوح المصدر لسطح المكتب يبدّل مزوّد واجهة API لأدوات Claude Code وCodex وGemini CLI وغيرها من أدوات البرمجة بالذكاء الاصطناعي بنقرة واحدة، مع توجيه API محلي اختياري وتبديل تلقائي عند الفشل وخوادم MCP وSkills مشتركة.',
    ko: 'Claude Code, Codex, Gemini CLI 등 AI 코딩 도구의 API 제공업체를 한 번의 클릭으로 전환하는 무료 오픈소스 데스크톱 관리 도구로, 선택형 로컬 API 라우팅, 장애 조치, MCP 서버와 Skills 공유를 지원합니다.',
  },
  compare: { fallback: true }, // README "Local Routing & Failover": automatic failover queue with circuit breaker; other attributes not stated, left unset; verified 2026-11-19, not tested
  reviewSlug: 'cc-switch-review',
  pqReview: {
    date: '2026-11-19',
    version: '4.0.35',
    versionSourceUrl: 'https://github.com/farion1231/cc-switch/releases/tag/v4.0.35',
  },
  verdict: 'Best for developers who use several AI coding CLIs or API providers and want one desktop app to switch providers, route requests locally and share MCP servers and Skills; every request still goes to the provider you add, no HQ country or privacy policy was found, and PromptQuorum has not tested it.',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-19', // GitHub API 2026-11-19: latest commit on main 2026-11-19T12:16Z; latest release v4.0.35 published 2026-11-18T07:46Z
  lastUpstreamUpdateSource: 'https://github.com/farion1231/cc-switch (last commit 2026-11-19; latest release v4.0.35, 2026-11-18)',
}
