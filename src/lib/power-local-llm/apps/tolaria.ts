// Local AI App Directory — Tolaria: Markdown notes app with Git and AI agents (layer: notes, desktop)
// Added 2026-10-24. Facts verified 2026-10-24 against tolaria.md (home + /download: stable 2026.10.13, platforms, AGPL-3.0-or-later,
// "free forever"), the GitHub repository refactoringhq/tolaria (README, site/ docs: concepts/ai, guides/configure-ai-models,
// reference/supported-platforms, reference/release-channels, start/install; docs/adr/0016-sentry-posthog-telemetry; src consent dialog;
// releases API: latest stable v2026-10-13 published 2026-10-13, alpha builds published 2026-10-24; repository API: AGPL-3.0, 20,189 stars,
// pushed 2026-10-24; commits API: latest commit 2026-10-24T12:47Z).
// No standalone privacy policy exists (tolaria.md/privacy returns 404 and none is linked); the Privacy row points to the telemetry design note.
// Source disagreements stated in the review rather than resolved: homepage star count (~9.9k) vs GitHub API (20,189); README says Windows
// installers are Authenticode-signed while the install page says that signing is still to be added.
// Compare attributes below are limited to what the docs state (local models via Ollama/LM Studio, chat over note context); semantic search is not stated.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tolaria',
  name: 'Tolaria',
  categories: ['notes-integrations'],
  interfaces: ['desktop'],
  locality: 'hybrid', // notes are plain local Markdown files with no account; AI features use whichever agent or model provider the user connects (local Ollama/LM Studio or hosted APIs) — docs, 2026-10-24
  platforms: ['mac', 'win', 'linux'], // desktop builds; the iPhone/iPad app is a TestFlight beta (access via the project Discord) and is not listed as a platform here
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API', 'Claude Code', 'Codex'], // from the AI concept and model-configuration docs; the full agent list is in the review
  engine: 'external', // ships no model; connects to coding-agent CLIs and to local or hosted model providers
  license: 'AGPL-3.0-or-later', // tolaria.md; the GitHub API reports AGPL-3.0; name and logo fall under a separate trademark policy
  price: 'free', // "free forever", no paid tier described
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no requirement stated; inference happens in the connected agent or provider
  stars: 20189, // GitHub API read 2026-10-24 (the website shows ~9.9k, likely an older snapshot)
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['docs'],
  url: 'tolaria.md',
  storeLinks: {
    github: 'https://github.com/refactoringhq/tolaria',
    web: 'https://tolaria.md',
  },
  installEffort: 'installer',
  installEvidence: 'Releases page v2026-10-13 checked 2026-10-24: .dmg (macOS Apple silicon and Intel), setup .exe (Windows x64), AppImage, deb and RPM (Linux) attached; tolaria.md/download starts the download; macOS Homebrew cask (brew install --cask tolaria) per the README',
  tagline: {
    en: 'Free, open-source desktop notes app that keeps Markdown files in a Git-backed vault and connects AI coding agents or local and hosted models',
    de: 'Kostenlose Open-Source-Desktop-Notiz-App, die Markdown-Dateien in einem Git-gestützten Vault hält und KI-Coding-Agenten oder lokale und gehostete Modelle anbindet',
    fr: 'Application de notes de bureau gratuite et open source qui garde des fichiers Markdown dans un vault géré par Git et relie des agents de code IA ou des modèles locaux et hébergés',
    ja: 'MarkdownファイルをGit管理のvaultに保存し、AIコーディングエージェントやローカル／クラウドのモデルと連携する、無料のオープンソース・デスクトップ向けノートアプリ',
    zh: '免费开源的桌面笔记应用，把 Markdown 文件保存在由 Git 管理的 vault 中，并可接入 AI 编程智能体或本地、托管模型',
    es: 'App de notas de escritorio gratuita y de código abierto que guarda archivos Markdown en un vault con Git y conecta agentes de código con IA o modelos locales y alojados',
    pt: 'App de notas de desktop gratuito e de código aberto que guarda arquivos Markdown em um vault com Git e conecta agentes de código com IA ou modelos locais e hospedados',
    ar: 'تطبيق ملاحظات مجاني ومفتوح المصدر لسطح المكتب يحفظ ملفات Markdown في مخزن يديره Git ويربط وكلاء برمجة بالذكاء الاصطناعي أو نماذج محلية ومستضافة',
    ko: 'Markdown 파일을 Git이 관리하는 vault에 보관하고 AI 코딩 에이전트나 로컬·호스팅 모델을 연결하는 무료 오픈소스 데스크톱 노트 앱',
  },
  reviewSlug: 'tolaria-review',
  // Comparison attributes: only values stated in the project docs (2026-10-24); a missing key = not stated there, never false.
  compare: { noteApp: 'Tolaria', localLlm: true, chatNotes: true },
  mcpSupport: true, // the docs describe an MCP server that searches, reads, creates and updates notes
  pqReview: {
    date: '2026-10-24',
    version: '2026.10.13',
    versionSourceUrl: 'https://github.com/refactoringhq/tolaria/releases/tag/v2026-10-13',
  },
  verdict: 'Best for people who already like plain Markdown files and Git and want AI agents or models to work on them with reviewable diffs; limited by early-stage Windows and Linux builds, no published privacy policy, AI that depends on third-party agents and providers, and speed and AI claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub commits API: latest commit 2026-10-24T12:47Z; alpha build published the same day; latest stable v2026-10-13
  lastUpstreamUpdateSource: 'https://github.com/refactoringhq/tolaria',
}
