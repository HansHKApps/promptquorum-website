// Local AI App Directory — Llama (llama.app) (layer: desktop menu-bar / tray app on top of llama.cpp, Runtimes & model managers)
// Added 2026-10-24. Facts verified 2026-10-24 against llama.app (home page, /docs/introduction, /docs/installation, /docs/api,
// /download/mac, /download/windows), the GitHub repositories ggml-org/Llama-macOS (MIT, README, Releases: 0.45.0 published 2026-10-18,
// asset Llama.dmg + appcast.xml; last push 2026-10-20) and ggml-org/Llama-Windows (MIT, README, Releases: v0.13.0 published 2026-10-20,
// assets LlamaApp-v0.13.0.msixbundle + x64/arm64 .msix; last push 2026-10-22), the Hugging Face blog post "Introducing Llama Windows"
// (huggingface.co/blog/huggingface/llama-windows, 2026-10-13) and the Homebrew cask API (llama-app 0.45.0, Apple silicon only, macOS 15 or later).
// NOT the same product as the existing `llama-cpp` tile (the inference engine / CLI / server): this is the desktop app that installs and
// manages llama.cpp, shows recommended models and starts the local server. Not Meta's Llama models either.
// Privacy: llama.app has no privacy-policy page (404). The Windows README states "Llama sends no telemetry"; the macOS README states
// "100% local". Network use stated by the sources: model downloads, release-update checks, optional Hugging Face sign-in for gated models.
// Linux: no desktop app; the site offers the `llama` CLI via an install script. `platforms` therefore lists the two app platforms only.
// No `compare` attributes beyond those the sources state outright; `headless` is left out (that is the CLI, not the app).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llama-app',
  name: 'Llama (llama.app)',
  categories: ['runtimes-managers', 'api-servers'],
  interfaces: ['desktop'],
  locality: 'local', // models run on the user's own machine through llama.cpp; downloads and update checks use the network
  platforms: ['mac', 'win'], // Mac (Apple silicon, macOS 15+ per the Homebrew cask) and Windows 11 (x64 and ARM64); Linux gets the CLI only
  worksWith: ['llama.cpp', 'Hugging Face', 'OpenAI SDKs', 'Tailscale'],
  engine: 'builtin', // installs and manages llama.cpp
  license: 'MIT', // both app repositories (Llama-macOS, Llama-Windows) and llama.cpp
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // the site recommends models by Mac memory (16 / 24 / 32 GB tiers); no fixed minimum is stated
  stars: 1671, // ggml-org/Llama-macOS, GitHub API 2026-10-24 (Llama-Windows: 274)
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'llama.app',
  storeLinks: {
    github: 'https://github.com/ggml-org/Llama-macOS',
    web: 'https://llama.app',
  },
  installEffort: 'installer',
  installEvidence: 'llama.app/download/mac serves Llama.dmg (drag to Applications; also brew install --cask llama-app) and llama.app/download/windows serves the .msixbundle (Releases assets: LlamaApp-v0.13.0.msixbundle, x64 and arm64 .msix), checked 2026-10-24; Linux has only the llama CLI install script',
  tagline: {
    en: 'Free open-source menu-bar and tray app from the llama.cpp team and Hugging Face that installs llama.cpp, recommends models for your machine and serves a local OpenAI-compatible API',
    de: 'Kostenlose Open-Source-App für Menüleiste und Tray vom llama.cpp-Team und Hugging Face: installiert llama.cpp, empfiehlt Modelle für Ihren Rechner und stellt eine lokale OpenAI-kompatible API bereit',
    fr: "Application gratuite et open source de la barre de menus et de la zone de notification, par l'équipe llama.cpp et Hugging Face : installe llama.cpp, recommande des modèles pour votre machine et expose une API locale compatible OpenAI",
    ja: 'llama.cppチームとHugging Faceによる無料のオープンソース常駐アプリ（Macはメニューバー、Windowsはシステムトレイ）。llama.cppを導入し、環境に合うモデルを提案し、OpenAI互換のローカルAPIを提供',
    zh: '由 llama.cpp 团队与 Hugging Face 推出的免费开源菜单栏/系统托盘应用：安装 llama.cpp、按你的设备推荐模型，并提供本地 OpenAI 兼容 API',
    es: 'App gratuita y de código abierto para la barra de menús y la bandeja del sistema, del equipo de llama.cpp y Hugging Face: instala llama.cpp, recomienda modelos para tu equipo y ofrece una API local compatible con OpenAI',
    pt: 'App gratuito e de código aberto para a barra de menus e a bandeja do sistema, da equipe do llama.cpp e da Hugging Face: instala o llama.cpp, recomenda modelos para o seu computador e oferece uma API local compatível com a OpenAI',
    ar: 'تطبيق مجاني ومفتوح المصدر في شريط القوائم/علبة النظام من فريق llama.cpp وHugging Face: يثبّت llama.cpp ويوصي بنماذج تناسب جهازك ويوفّر واجهة API محلية متوافقة مع OpenAI',
    ko: 'llama.cpp 팀과 Hugging Face가 만든 무료 오픈소스 메뉴 막대/시스템 트레이 앱으로, llama.cpp를 설치하고 내 기기에 맞는 모델을 추천하며 OpenAI 호환 로컬 API를 제공합니다',
  },
  reviewSlug: 'llama-app-review',
  // Comparison attributes (Runtimes & managers): each stated outright on llama.app or in the repositories, 2026-10-24.
  compare: { openaiApi: true, desktopApp: true, modelLibrary: true },
  pqReview: {
    date: '2026-10-24',
    version: 'Mac 0.45.0 / Windows 0.13.0',
    versionSourceUrl: 'https://github.com/ggml-org/Llama-macOS/releases/tag/0.45.0',
  },
  verdict: 'Best for Mac and Windows 11 users who want the llama.cpp engine behind a small, free, MIT-licensed menu-bar or tray app with model recommendations and a local API; limited by no Linux app, Apple silicon and macOS 15 for the Mac build, no privacy policy page on the site, fast-moving 0.x versions and PromptQuorum not having tested it.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-22', // newer of latest release (Windows v0.13.0, 2026-10-20) and last push (ggml-org/Llama-Windows, 2026-10-22), GitHub API read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/ggml-org/Llama-Windows',
}
