// Local AI App Directory — Nativ by Neywa Labs (layer: free, open-source macOS app that runs open models on Apple Silicon through a bundled mlx-vlm server and exposes OpenAI- and Anthropic-compatible local APIs)
// Added 2026-11-18 at the owner's request (ranked list). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: runnativ.ai (home page, FAQ, privacy policy, terms of use, contact), GitHub repository Neywa-Labs/nativ (API metadata, README,
// releases v0.4.3–v0.4.6 with asset list, commits), the Homebrew cask API entry for nativ (version 0.4.6).
// Notes:
// - Stars: GitHub API 1598 on 2026-11-18 (owner's list said 1,592).
// - License: GitHub API MIT; the terms of use say Nativ and Engine are MIT-licensed.
// - Price: free. FAQ: no account, no subscription. The terms of use add that if paid plans such as "Nativ Pro" are offered later, their terms will be shown before purchase.
// - Version: GitHub release v0.4.6 (2026-11-16), asset Nativ-0.4.6.dmg; Homebrew cask also 0.4.6.
// - Platforms: Mac only — Apple silicon (M1 or later), macOS 26 or newer. The FAQ states MLX does not run on Intel Macs.
// - Privacy: privacy policy (last updated 2026-11-16) says prompts, files and outputs are not collected; diagnostic data is opt-in via a first-launch consent; update checks and Hugging Face
//   downloads go online. The policy still contains template text ("[PAYMENT PROCESSOR NAME]") and covers accounts, licences and purchases although the app is free with no account;
//   reported as an observation in the review, not reconciled.
// - HQ country: PL. The terms of use name the provider as Neywa Labs sp. z o.o., Aleja Pokoju 18D, 31-564 Kraków, Poland, KRS 0001261513, and set Polish law with courts in Kraków.
// - Categories: general-chat-clients first (desktop chat), then runtimes-managers (local API server + model library), image-generation (Images tab) and dictation (audio extension).
// Last upstream update: 2026-11-17 (last commit on main; latest release v0.4.6 on 2026-11-16) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'nativ',
  name: 'Nativ',
  categories: ['general-chat-clients', 'runtimes-managers', 'image-generation', 'dictation'],
  interfaces: ['desktop'],
  locality: 'local', // README: inference runs on the Mac once a model is downloaded; downloads and updates need the network
  platforms: ['mac'], // README + FAQ: Apple silicon, macOS 26 or newer
  worksWith: ['MLX', 'Hugging Face', 'Claude Code', 'Codex', 'OpenCode', 'Aider', 'Goose', 'Cursor', 'VS Code'], // README: bundled mlx-vlm server, HF model library, named coding agents and editors
  engine: 'builtin', // README: bundles an mlx-vlm server inside the app
  license: 'MIT', // GitHub API + terms of use
  price: 'free', // FAQ: free, no account, no subscription
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // unified memory needed depends on the model; no app-level floor is published
  stars: 1598,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'image', 'audio', 'serve'],
  url: 'runnativ.ai',
  storeLinks: {
    github: 'https://github.com/Neywa-Labs/nativ',
    web: 'https://runnativ.ai',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub release v0.4.6 (2026-11-16) ships Nativ-0.4.6.dmg; the README says to drag Nativ to Applications and launch it, or run brew install --cask nativ, and notes Sparkle in-app updates. No terminal step is required for the DMG route.',
  hqCountry: 'PL',
  hqCountrySource: 'https://runnativ.ai/terms',
  tagline: {
    en: 'Free, open-source Mac app that runs open AI models on Apple Silicon with chat, image generation, dictation and local OpenAI- and Anthropic-compatible APIs for coding agents (free according to the maker today; paid plans such as Nativ Pro may follow, and each model has its own licence)',
    de: 'Kostenlose Open-Source-Mac-App, die offene KI-Modelle auf Apple Silicon ausführt, mit Chat, Bilderzeugung, Diktat und lokalen OpenAI- und Anthropic-kompatiblen APIs für Coding-Agenten (laut Hersteller derzeit kostenlos; bezahlte Tarife wie Nativ Pro könnten folgen, jedes Modell hat eine eigene Lizenz)',
    fr: 'Application Mac gratuite et open source qui exécute des modèles d\'IA ouverts sur Apple Silicon, avec chat, génération d\'images, dictée et API locales compatibles OpenAI et Anthropic pour les agents de code (gratuit à ce jour selon l\'éditeur ; des offres payantes comme Nativ Pro pourraient suivre, et chaque modèle a sa propre licence)',
    ja: 'Apple Silicon上でオープンなAIモデルを動かす無料のオープンソースMacアプリ。チャット、画像生成、音声入力に加え、コーディングエージェント向けのOpenAI・Anthropic互換ローカルAPIを備えています（提供元によれば現在は無料。Nativ Proのような有料プランが今後登場する可能性があり、各モデルには個別のライセンスがあります）',
    zh: '免费开源的 Mac 应用，在 Apple Silicon 上运行开放 AI 模型，提供对话、图像生成、听写，以及供编程智能体使用的本地 OpenAI 和 Anthropic 兼容 API（据提供方称目前免费；以后可能推出 Nativ Pro 等付费方案，且每个模型各有自己的许可）',
    es: 'App de Mac gratuita y de código abierto que ejecuta modelos de IA abiertos en Apple Silicon, con chat, generación de imágenes, dictado y API locales compatibles con OpenAI y Anthropic para agentes de programación (gratis por ahora según el proveedor; podrían llegar planes de pago como Nativ Pro, y cada modelo tiene su propia licencia)',
    pt: 'App de Mac gratuito e de código aberto que executa modelos de IA abertos no Apple Silicon, com chat, geração de imagens, ditado e APIs locais compatíveis com OpenAI e Anthropic para agentes de programação (gratuito por ora segundo o provedor; planos pagos como o Nativ Pro podem surgir, e cada modelo tem a sua própria licença)',
    ar: 'تطبيق Mac مجاني ومفتوح المصدر يشغّل نماذج الذكاء الاصطناعي المفتوحة على Apple Silicon، مع دردشة وتوليد صور وإملاء وواجهات برمجة محلية متوافقة مع OpenAI وAnthropic لوكلاء البرمجة (مجاني حاليًا بحسب المزوّد؛ وقد تظهر خطط مدفوعة مثل Nativ Pro، ولكل نموذج ترخيصه الخاص)',
    ko: 'Apple Silicon에서 오픈 AI 모델을 실행하는 무료 오픈소스 Mac 앱으로, 채팅, 이미지 생성, 받아쓰기와 코딩 에이전트용 로컬 OpenAI·Anthropic 호환 API를 제공합니다 (제공자에 따르면 현재는 무료이며, Nativ Pro 같은 유료 요금제가 나올 수 있고 모델마다 자체 라이선스가 있습니다)',
  },
  mcpSupport: true, // README: connect MCP servers and expose their tools to chat, with per-tool consent
  // Comparison attributes verified 2026-11-18 against the README and FAQ. Desktop-chat segment: builtInEngine (bundled mlx-vlm server), mcp (MCP servers with per-tool consent),
  // voice (dictation and read-aloud per FAQ). Runtimes segment: openaiApi, desktopApp, modelLibrary (Hugging Face browse/download inside the app). Image segment: apiServer (local image
  // endpoints per README). Not set because the sources do not state them: ollama, customEndpoint, fileChat, headless, inpainting, nodeWorkflow, extensions-as-plugins for images, lowVram.
  compare: { builtInEngine: true, mcp: true, voice: true, openaiApi: true, desktopApp: true, modelLibrary: true, apiServer: true },
  reviewSlug: 'nativ-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.4.6',
    versionSourceUrl: 'https://github.com/Neywa-Labs/nativ/releases/tag/v0.4.6',
  },
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // last commit on main 2026-11-17T07:58Z (GitHub API 2026-11-18); latest release v0.4.6 published 2026-11-16
  lastUpstreamUpdateSource: 'https://github.com/Neywa-Labs/nativ (last commit 2026-11-17; latest release v0.4.6, 2026-11-16)',
}
