// Local AI App Directory — Dyad by Dyad Tech, Inc. (layer: prompt-to-app builder, desktop)
// Added 2026-11-18 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: maker website (homepage, download page, docs overview, FAQ, quickstart), privacy policy and terms (dyad.sh/docs/policies/*),
// GitHub repository, README, LICENSE and src/pro/LICENSE, GitHub API (repo, releases, commits), release v1.23.0, plus the research package's third-party review list.
// Notes:
// - License is split: README says everything outside src/pro is Apache 2.0, src/pro is fair-source (Functional Source License 1.1, Apache 2.0 future license,
//   notice "Copyright 2025 Dyad Tech, Inc."). The research package's "MIT" (localhosted listing) is wrong and not used. GitHub API reports NOASSERTION.
// - Stars: GitHub API 22318 on 2026-11-18 (package carried 22299 from a third-party listing).
// - engine = 'external': Dyad does not ship its own inference; it connects to hosted providers with your API keys, to Ollama / LM Studio local models, or to hosted models via Dyad Pro.
// - locality = 'hybrid': the free app is local (project files on disk); prompts go to the model provider you pick unless the model is local (privacy policy).
// - hardware: no RAM/GPU figure is stated; FAQ says "as long as you can run Node.js, you can use Dyad"; floor depends on the model chosen => variesByModel.
// - HQ country US: the privacy policy says "Dyad is a U.S. company and its own infrastructure is located in the U.S."; the terms say "As a US company with all
//   data infrastructure located in the US". No street address or governing-law clause found; no separate imprint page exists. Source: privacy policy.
// - Version: v1.23.0 is the latest stable GitHub release (2026-11-09). v1.24.0-beta.1 (2026-11-13) is a pre-release and is not used as the version.
// - Install: GitHub release v1.23.0 ships Dyad-*.Setup.exe, .deb, .rpm, AppImage and macOS .zip (arm64, x64); the download page offers the same per OS.
// - Windows build prompts a Microsoft warning ("More info" > "Run anyway", quickstart). Node.js must be installed separately (quickstart).
// - Pro $20/month (200 credits), Max $79/month (900 credits), homepage 2026-11-18. The homepage pricing card says macOS and Windows; the download page also lists Linux.
// Last upstream update: 2026-11-17 (last commit on main; latest stable release 2026-11-09, beta 2026-11-13) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dyad',
  name: 'Dyad',
  categories: ['prompt-to-app-builders'],
  interfaces: ['desktop'],
  locality: 'hybrid', // project files stay on disk; prompts go to the chosen model provider unless a local model (Ollama, LM Studio) is used (privacy policy)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI', 'Anthropic', 'Supabase', 'Neon', 'Vercel'],
  engine: 'external', // no built-in inference: bring-your-own API keys, local Ollama/LM Studio models, or hosted models through Dyad Pro
  license: 'Apache 2.0 (src/pro: FSL-1.1-ALv2)', // README: Apache 2.0 outside src/pro, fair-source FSL 1.1 (Apache 2.0 future license) inside src/pro
  price: 'freemium', // free desktop app; Dyad Pro $20/month, Dyad Max $79/month (homepage, 2026-11-18)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no figure stated; depends on the AI model used
  stars: 22318,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['build', 'code'],
  url: 'dyad.sh',
  storeLinks: {
    github: 'https://github.com/dyad-sh/dyad',
    web: 'https://www.dyad.sh',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the download page offered macOS (Apple Silicon and Intel), Windows and Linux (.deb, .rpm, AppImage) builds, and GitHub release v1.23.0 listed the assets dyad-1.23.0.Setup.exe, dyad_1.23.0_amd64.deb, dyad-1.23.0-1.x86_64.rpm, dyad_1.23.0_x86_64.AppImage and dyad-darwin-arm64/x64-1.23.0.zip. The quickstart says Node.js must be installed separately and Windows may show a Microsoft warning.',
  tagline: {
    en: 'Desktop AI app builder that turns prompts into web apps stored as ordinary project files on your computer, with your own API keys or local Ollama and LM Studio models.',
    de: 'Desktop-KI-App-Builder, der aus Prompts Web-Apps als gewöhnliche Projektdateien auf Ihrem Computer erstellt, mit eigenen API-Schlüsseln oder lokalen Ollama- und LM-Studio-Modellen.',
    fr: 'Créateur d\'apps IA de bureau qui transforme des prompts en applications web stockées comme de simples fichiers de projet sur votre ordinateur, avec vos propres clés API ou des modèles locaux Ollama et LM Studio.',
    ja: 'プロンプトからWebアプリを作るデスクトップのAIアプリビルダー。アプリは通常のプロジェクトファイルとしてPCに保存され、自分のAPIキーやローカルのOllama・LM Studioモデルを使えます。',
    zh: '桌面端 AI 应用构建器，可将提示词变成以普通项目文件保存在您电脑上的 Web 应用，支持自备 API 密钥或本地 Ollama 与 LM Studio 模型。',
    es: 'Creador de apps con IA para escritorio que convierte prompts en apps web guardadas como archivos de proyecto normales en tu ordenador, con tus propias claves de API o modelos locales de Ollama y LM Studio.',
    pt: 'Criador de apps com IA para desktop que transforma prompts em apps web guardados como arquivos de projeto comuns no seu computador, com suas próprias chaves de API ou modelos locais do Ollama e do LM Studio.',
    ar: 'أداة سطح مكتب لبناء التطبيقات بالذكاء الاصطناعي تحوّل البرومبت إلى تطبيقات ويب تُحفظ كملفات مشروع عادية على جهازك، مع مفاتيح API الخاصة بك أو نماذج Ollama وLM Studio المحلية.',
    ko: '프롬프트를 웹 앱으로 바꿔 주는 데스크톱 AI 앱 빌더로, 앱은 일반 프로젝트 파일로 내 컴퓨터에 저장되며 자체 API 키 또는 로컬 Ollama·LM Studio 모델을 사용할 수 있습니다.',
  },
  reviewSlug: 'dyad-review',
  mcpSupport: true, // homepage: "Plug in Chrome DevTools, web browsing, custom APIs, or any MCP server"
  pqReview: {
    date: '2026-11-18',
    version: '1.23.0',
    versionSourceUrl: 'https://github.com/dyad-sh/dyad/releases/tag/v1.23.0',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://www.dyad.sh/docs/policies/privacy-policy',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // GitHub API: last commit on main 2026-11-17T01:40Z (read 2026-11-18); latest stable release v1.23.0 published 2026-11-09, beta v1.24.0-beta.1 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/dyad-sh/dyad (last commit 2026-11-17; latest stable release 2026-11-09)',
}
