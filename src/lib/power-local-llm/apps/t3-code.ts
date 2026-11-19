// Local AI App Directory — T3 Code (layer: open-source control plane / desktop, web and phone interface for coding agents you already have installed)
// Added 2026-11-19 (localhosted listing). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-19: t3.codes homepage, t3.codes/privacy-policy (effective 2026-10-06), t3.codes/terms-of-service (effective 2026-07-15),
// github.com/pingdotgg/t3code (GitHub API: stars, license, pushed_at, releases; README; docs/user/install.md and docs/user/faq.md on main),
// localhosted.com/t3-code. App Store / Google Play listing text was not read; the store links come from the official site and README.
// Notes:
// - License: MIT (GitHub API spdx MIT; README "MIT licensed"). Price 'free': FAQ "There's no way to pay us to use T3 Code. You bring your own sub";
//   the user still pays the coding-agent provider. T3 Connect is free "for now" (3 machines per account, more via a linked T3 Chat account).
// - locality 'hybrid': the server and web app run on the user's machine; prompts and code go from that machine to the provider the user signed in to
//   (Claude Code, Codex, ...). FAQ: "Does T3 Code support local models? No." Anonymous product usage events are sent by default (can be switched off).
// - engine 'external': no bundled model; T3 Code drives agents installed and signed in on the machine (README, install docs).
// - worksWith: README provider list (Claude Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, any ACP agent); MCP per the
//   "Connect outside agents over MCP" doc and the Localhosted listing.
// - Install: 'installer' — GitHub Releases v0.1.10 (2026-11-17) ships T3-Code-0.1.10-arm64.dmg / x64.dmg (macOS), x64.exe / arm64.exe (Windows),
//   .AppImage and .deb (Linux); brew/winget/scoop/curl/npx also documented. A signed-in coding agent is required before the first thread.
//   Phones are a remote: iOS and Android apps connect to the computer that runs the agents.
// - HQ country US: privacy policy (t3.codes/privacy-policy) says "provided from the United States and are governed by United States law" and gives the
//   address T3 Tools, Inc., San Francisco, CA; the terms name California law and San Francisco courts.
// - Version: v0.1.10 = latest stable (non-prerelease) GitHub release, published 2026-11-17. Nightly prereleases (v0.1.11-nightly.*) ship several times a day.
// - compare: localLlm false (FAQ: local models not supported), agentMode true, mcp true; ollama / vscode / jetbrains / autocomplete not stated, so left out.
// Last upstream update: 2026-11-19 (last commit on main 2026-11-19T11:55Z, GitHub API; latest stable v0.1.10 2026-11-17) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 't3-code',
  name: 'T3 Code',
  categories: ['code-assistants-ide-plugins', 'multi-agent-orchestration'],
  interfaces: ['desktop', 'web', 'mobile', 'cli'],
  locality: 'hybrid', // server runs on your machine; prompts and code go to the cloud provider your agent is signed in to; local models not supported (FAQ)
  platforms: ['mac', 'win', 'linux', 'ios', 'android', 'web'],
  worksWith: ['Claude Code', 'Codex CLI', 'Cursor', 'OpenCode', 'Grok Build', 'Antigravity', 'Kiro', 'MCP'], // README provider list; MCP per docs
  engine: 'external', // drives coding agents installed on the machine; no bundled model
  license: 'MIT', // GitHub API spdx + README
  price: 'free', // FAQ: no way to pay T3 Code; you pay your own agent provider
  hardware: null,
  stars: 65923, // GitHub API read 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 't3.codes',
  storeLinks: {
    web: 'https://t3.codes',
    github: 'https://github.com/pingdotgg/t3code',
    appStore: 'https://apps.apple.com/us/app/t3-code-remote-claude-more/id6787819824',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.t3tools.t3code',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-19 GitHub Releases v0.1.10 (2026-11-17) listed T3-Code-0.1.10-arm64.dmg and x64.dmg (macOS), x64.exe and arm64.exe (Windows), T3-Code-arm64.AppImage, T3-Code-x86_64.AppImage and .deb packages (Linux); the README also documents brew, winget, scoop, a curl install script and npx. At least one coding agent must be installed and signed in before the first thread.',
  mcpSupport: true,
  tagline: {
    en: 'Free, open-source (MIT) desktop, web and phone interface for the coding agents you already use, such as Claude Code and Codex; no bundled model and no local-model support',
    de: 'Kostenlose, quelloffene (MIT) Desktop-, Web- und Smartphone-Oberfläche für die Coding-Agenten, die Sie bereits nutzen, etwa Claude Code und Codex; kein eigenes Modell und keine Unterstützung lokaler Modelle',
    fr: 'Interface de bureau, web et mobile gratuite et open source (MIT) pour les agents de codage que vous utilisez déjà, comme Claude Code et Codex ; aucun modèle intégré et pas de prise en charge des modèles locaux',
    ja: '無料・オープンソース（MIT）のデスクトップ／Web／スマホ用インターフェース。Claude CodeやCodexなど既に使っているコーディングエージェントを操作する。モデルは内蔵せず、ローカルモデルには非対応',
    zh: '免费开源（MIT）的桌面、网页和手机界面，用来操控您已在使用的编码代理，例如 Claude Code 和 Codex；不内置模型，也不支持本地模型',
    es: 'Interfaz de escritorio, web y móvil gratuita y de código abierto (MIT) para los agentes de programación que ya usas, como Claude Code y Codex; sin modelo integrado y sin compatibilidad con modelos locales',
    pt: 'Interface de desktop, web e celular gratuita e de código aberto (MIT) para os agentes de programação que você já usa, como Claude Code e Codex; sem modelo embutido e sem suporte a modelos locais',
    ar: 'واجهة مجانية ومفتوحة المصدر (MIT) لسطح المكتب والويب والهاتف للتحكم في وكلاء البرمجة التي تستخدمها بالفعل مثل Claude Code وCodex؛ بلا نموذج مدمج وبلا دعم للنماذج المحلية',
    ko: '이미 사용 중인 Claude Code, Codex 같은 코딩 에이전트를 제어하는 무료 오픈소스(MIT) 데스크톱·웹·휴대폰 인터페이스로, 자체 모델은 없고 로컬 모델은 지원하지 않습니다',
  },
  // Comparison attributes: each value verified against the project's own README/FAQ on 2026-11-19; a missing key = not stated there.
  compare: { localLlm: false, agentMode: true, mcp: true },
  reviewSlug: 't3-code-review',
  pqReview: {
    date: '2026-11-19',
    version: '0.1.10',
    versionSourceUrl: 'https://github.com/pingdotgg/t3code/releases/tag/v0.1.10',
  },
  verdict: 'Best for developers who already pay for coding agents such as Claude Code or Codex and want one free, open-source desktop, web and phone interface to run them in parallel; it has no model of its own, does not support local models, sends anonymous usage events by default, and PromptQuorum has not tested it.',
  hqCountry: 'US',
  hqCountrySource: 'https://t3.codes/privacy-policy',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-19', // GitHub API: last commit on main 2026-11-19T11:55Z, read 2026-11-19; latest stable release v0.1.10 published 2026-11-17
  lastUpstreamUpdateSource: 'https://github.com/pingdotgg/t3code (last commit 2026-11-19; latest stable release v0.1.10, 2026-11-17)',
}
