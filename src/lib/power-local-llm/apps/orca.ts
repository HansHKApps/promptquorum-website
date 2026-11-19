// Local AI App Directory — Orca (layer: free, open-source (MIT) desktop "agent IDE" by Stably AI that runs many
// CLI coding agents — Claude Code, Codex, OpenCode, Grok, ... — in parallel git worktrees, with diff review, an
// embedded browser, SSH/remote-server/cloud-VM runtimes and iOS/Android companion apps; ships no model of its own)
// Added 2026-11-19 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review
// badge. NOT hands-on tested.
// Sources read 2026-11-19:
// - orca.dev (www.onorca.dev 307-redirects here; home page: tagline "Ship 100x with the agent IDE", footer "The agent
//   development environment", "Backed by Y Combinator", "Built in San Francisco", "Free and open source", "Open source
//   under MIT", download links for Mac/Intel/Windows/Linux, App Store id6766130217, Google Play dev.orca.app, Android
//   APK on GitHub releases; 27 named agents + "any other CLI agent"; footer "© 2026 Stably AI");
// - orca.dev/privacy (Stably AI operating as Lovecast Inc., business address in San Francisco, CA, United States;
//   telemetry optional and can be turned off in Settings, PostHog Cloud US; relay on Cloudflare Workers/Durable Objects
//   with US and Hong Kong regions; coding agents send context to the providers the user configures; not used to train
//   Orca's own models);
// - github.com/stablyai/orca README (MIT, "free and open source"; agents list; Homebrew cask stablyai/orca/orca and the
//   warning about the unrelated Plotly `orca` cask; AUR stably-orca-bin; Windows signing via SignPath.io);
// - api.github.com/repos/stablyai/orca (license MIT, created 2026-03-17, pushed_at 2026-11-19T13:14:40Z, 129,431 stars,
//   not archived, TypeScript, homepage https://orca.dev) and /releases (latest v1.4.264 published 2026-11-19T10:35:30Z;
//   v1.4.261..263 on 11-16..11-18; assets: orca-macos-arm64.dmg, orca-macos-x64.dmg, orca-windows-setup.exe,
//   orca-linux.AppImage, orca-linux-arm64.AppImage, .deb/.rpm for x86_64 and arm64, orca-server-linux-*.tar.gz);
// - localhosted.com/orca (third-party listing, cross-check only).
// Notes:
// - locality 'cloud': Orca ships no model and no local-inference mode; every coding agent it launches calls its own
//   provider (where a given agent can use a local model is up to that agent, not documented by Orca).
// - hardware null: no model runs through Orca itself.
// - installEffort 'installer': DMG / EXE / AppImage on the Releases page, plus App Store and Google Play for the
//   companion apps — double-click install on every officially supported OS, checked 2026-11-19.
// - hqCountry US: privacy policy gives a San Francisco, California business address for Stably AI (operating as
//   Lovecast Inc.).
// - compare.agentMode: Orca's whole purpose is running multi-step coding agents (agent mode) — README/website.
// Last upstream update: 2026-11-19 (v1.4.264 published, same day as the repo's pushed_at) → NOT stale.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'orca',
  name: 'Orca',
  categories: ['multi-agent-orchestration', 'terminal-coding-agents'],
  interfaces: ['desktop', 'mobile', 'cli'],
  locality: 'cloud', // runs no model; every launched coding agent calls its own provider — no local-inference mode documented
  platforms: ['mac', 'win', 'linux', 'ios', 'android'],
  worksWith: ['Claude Code', 'Codex', 'OpenCode', 'Grok', 'Gemini', 'GitHub Copilot', 'Goose', 'Cursor', 'GitHub', 'Linear'],
  engine: 'external',
  license: 'MIT', // GitHub license field and README, checked 2026-11-19
  price: 'free', // orca.dev: "Free and open source"; no paid tier found; checked 2026-11-19
  hardware: null, // no model runs through Orca itself
  stars: 129431, // github.com/stablyai/orca, GitHub API 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'orca.dev',
  storeLinks: {
    web: 'https://orca.dev',
    github: 'https://github.com/stablyai/orca',
    appStore: 'https://apps.apple.com/us/app/orca-ide/id6766130217',
    googlePlay: 'https://play.google.com/store/apps/details?id=dev.orca.app',
  },
  installEffort: 'installer',
  installEvidence: 'github.com/stablyai/orca/releases/tag/v1.4.264, checked 2026-11-19: assets include orca-macos-arm64.dmg and orca-macos-x64.dmg (macOS), orca-windows-setup.exe (Windows) and orca-linux.AppImage plus .deb/.rpm packages (Linux); the iOS and Android companion apps are on the App Store and Google Play (orca.dev links).',
  hqCountry: 'US',
  hqCountrySource: 'https://orca.dev/privacy',
  tagline: {
    en: 'Free, open-source (MIT) desktop "agent IDE" for macOS, Windows and Linux — runs Claude Code, Codex, OpenCode and other CLI coding agents in parallel git worktrees, with diff review, an embedded browser and iOS/Android companion apps; no model of its own',
    de: 'Kostenlose, quelloffene (MIT) Desktop-„Agenten-IDE“ für macOS, Windows und Linux — führt Claude Code, Codex, OpenCode und weitere CLI-Coding-Agenten parallel in Git-Worktrees aus, mit Diff-Review, eingebettetem Browser und Begleit-Apps für iOS/Android; kein eigenes Modell',
    fr: 'IDE d\'agents de bureau gratuit et open source (MIT) pour macOS, Windows et Linux — exécute Claude Code, Codex, OpenCode et d\'autres agents de code CLI en parallèle dans des git worktrees, avec revue de diff, navigateur intégré et applications compagnon iOS/Android ; aucun modèle propre',
    ja: '無料・オープンソース（MIT）のデスクトップ「エージェントIDE」（macOS・Windows・Linux対応）— Claude Code、Codex、OpenCodeなどのCLIコーディングエージェントをgit worktreeで並列実行し、差分レビュー、内蔵ブラウザー、iOS/Androidのコンパニオンアプリを備える。独自モデルは持たない',
    zh: '免费开源（MIT）的桌面“Agent IDE”，支持 macOS、Windows 和 Linux —— 在 git worktree 中并行运行 Claude Code、Codex、OpenCode 等 CLI 编程 Agent，提供差异审查、内置浏览器以及 iOS/Android 配套应用；自身不带模型',
    es: 'IDE de agentes de escritorio gratuito y de código abierto (MIT) para macOS, Windows y Linux — ejecuta Claude Code, Codex, OpenCode y otros agentes de programación CLI en paralelo en git worktrees, con revisión de diffs, navegador integrado y apps complementarias para iOS/Android; sin modelo propio',
    pt: 'IDE de agentes de desktop gratuita e de código aberto (MIT) para macOS, Windows e Linux — executa Claude Code, Codex, OpenCode e outros agentes de programação CLI em paralelo em git worktrees, com revisão de diffs, navegador embutido e apps complementares para iOS/Android; sem modelo próprio',
    ar: 'بيئة IDE للوكلاء لسطح المكتب، مجانية ومفتوحة المصدر (MIT)، لأنظمة macOS وWindows وLinux — تشغّل Claude Code وCodex وOpenCode وغيرها من وكلاء البرمجة CLI بالتوازي في git worktrees، مع مراجعة الفروق ومتصفح مدمج وتطبيقين مرافقين لنظامي iOS/Android؛ دون نموذج خاص بها',
    ko: '무료 오픈소스(MIT) 데스크톱 "에이전트 IDE" — macOS, Windows, Linux 지원. Claude Code, Codex, OpenCode 등 CLI 코딩 에이전트를 git worktree에서 병렬 실행하며 diff 리뷰, 내장 브라우저, iOS/Android 동반 앱을 제공함. 자체 모델은 없음',
  },
  reviewSlug: 'orca-review',
  // Comparison attributes (coding-assistants segment): verified against orca.dev and the GitHub README on 2026-11-19;
  // a missing key means not stated there, never false.
  compare: { agentMode: true },
  pqReview: {
    date: '2026-11-19',
    version: '1.4.264',
    versionSourceUrl: 'https://github.com/stablyai/orca/releases',
  },
  verdict: 'Best for developers who already pay for Claude Code, Codex or another CLI coding agent and want to run several in parallel on one repository, each in its own git worktree, with line-level diff review and a phone companion — weaker fit for anyone who wants models to run on their own hardware by default (Orca ships no model; local-model support depends on the connected agent) or who needs a long track record (the repository dates from March 2026 and ships near-daily releases).',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-19', // github.com/stablyai/orca/releases/tag/v1.4.264, published 2026-11-19, same day as the repo's pushed_at; checked 2026-11-19
  lastUpstreamUpdateSource: 'https://github.com/stablyai/orca/releases/tag/v1.4.264',
}
