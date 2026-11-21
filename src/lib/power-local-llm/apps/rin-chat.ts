// Local AI App Directory — Rin Chat: free desktop app (Windows, Linux) for AI roleplay and character chat; connects to local backends (Ollama, KoboldCpp, LM Studio) or any OpenAI-compatible API (layer: desktop roleplay frontend)
// Added 2026-11-21 after an email from the maker (Route404, Rin Chat LLC); the maker asked for no link or sponsored post. Facts verified 2026-11-21 against rin.chat
// (home, download, changelog, features, quickstart, choosing-a-provider, privacy policy, terms of service effective 2026-11-12, license effective 2026-10-24, contact).
// Latest version 1.0.4, dated 20 November 2026 in the changelog; the download links /updates/{windows,linux-appimage,linux-deb}-latest redirect to RinChat_1.0.4_* files whose
// Last-Modified header is 2026-11-20 (checked 2026-11-21), so the download page text "Current beta build: 0.5.7" is stale. The site calls the app an "open beta". Stale warning OFF.
// Platforms: Windows 10/11 64-bit installer (.exe, NOT code-signed: SmartScreen warns), Linux x86-64 AppImage and .deb. macOS "in progress, no date". Android is mentioned in the privacy
// policy and terms ("for computers and Android phones") but the maker's email says "coming soon" and no Android download or store listing exists, so it is NOT listed in platforms.
// License: proprietary, "free of charge for personal, non-commercial use" (rin.chat/license). Price: homepage says free with every feature unlocked; the changelog and privacy policy also
// mention an optional "Rin Chat subscription" (fast hosted model) with no price or pricing page found, so the review hedges.
// Data: AES-256-GCM encrypted cards and chats on the user's machine (features/privacy). Usage statistics (random installation ID, version, OS, architecture, package format, language)
// are sent at install and launch and, per the terms, "cannot be switched off"; further statistics are optional. Prompts go straight from the device to the chosen provider.
// Source code: none public (no GitHub repo found). Not independently checked: encryption, traffic, any feature. No hands-on test by PromptQuorum.
// HQ country: US. Rin Chat LLC, 7533 S Center View Ct #6256, West Jordan, UT 84084 (contact page, privacy policy, terms section 13: laws of the State of Utah). Hosting is in the Netherlands.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'rin-chat',
  name: 'Rin Chat',
  categories: ['roleplay-companions'],
  interfaces: ['desktop'],
  locality: 'hybrid', // runs on your PC but needs a model backend: local (Ollama, KoboldCpp, LM Studio) or any OpenAI-compatible cloud API; mandatory usage statistics at install and launch
  platforms: ['win', 'linux'], // Windows 10/11 64-bit; Linux x86-64 AppImage and .deb; macOS in progress; Android announced by the maker but not released
  worksWith: ['Ollama', 'KoboldCpp', 'LM Studio', 'OpenAI API', 'OpenRouter'], // features + choosing-a-provider pages: any OpenAI-compatible endpoint; presets for Z.AI, OpenRouter, NanoGPT, OpenAI, DeepSeek, Grok
  engine: 'external', // "Rin Chat does not ship a model"; it can install Ollama or download and run KoboldCpp for the user
  license: 'Proprietary (free for personal use)', // rin.chat/license: proprietary, free of charge for personal, non-commercial use
  price: 'free', // homepage: "Free, with every feature unlocked"; optional subscription mentioned in the privacy policy has no published price
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // frontend only; hardware needs depend on the backend and model you connect; no minimum stated for the app
  stars: null, // no public source repository
  addedDate: '2026-11-21',
  status: 'listed',
  uses: ['chat'],
  url: 'rin.chat',
  storeLinks: {
    web: 'https://rin.chat',
  },
  installEffort: 'installer',
  installEvidence: 'rin.chat/download checked 2026-11-21: Windows installer (RinChat_1.0.4_x64-setup.exe, not code-signed, SmartScreen warns), Linux AppImage (RinChat_1.0.4_amd64.AppImage) and .deb (RinChat_1.0.4_amd64.deb) via the /updates/*-latest links; app updates itself; a model backend is set up separately or installed from inside the app',
  tagline: {
    en: 'Free desktop roleplay app with game-master dice and stats and a built-in card forge, using local backends or any OpenAI-compatible API',
    de: 'Kostenlose Desktop-App für Rollenspiel mit Würfeln und Werten für Spielleiter und einer integrierten Karten-Schmiede, mit lokalen Backends oder jeder OpenAI-kompatiblen API',
    fr: 'Application de bureau gratuite de jeu de rôle avec dés et statistiques de maître du jeu et forge de cartes intégrée, avec des backends locaux ou toute API compatible OpenAI',
    ja: 'ゲームマスター用のダイスとステータス、内蔵のカードフォージを備えた無料のロールプレイ用デスクトップアプリ。ローカルバックエンドまたはOpenAI互換APIに対応',
    zh: '免费桌面角色扮演应用，带游戏主持人骰子与属性机制及内置角色卡锻造功能，可连接本地后端或任何兼容 OpenAI 的 API',
    es: 'Aplicación de escritorio gratuita de rol con dados y estadísticas de director de juego y una forja de tarjetas integrada, con backends locales o cualquier API compatible con OpenAI',
    pt: 'Aplicativo de desktop gratuito de roleplay com dados e estatísticas de mestre de jogo e uma forja de cartões integrada, com backends locais ou qualquer API compatível com OpenAI',
    ar: 'تطبيق سطح مكتب مجاني للعب الأدوار مع زهر وإحصاءات لمدير اللعبة وورشة بطاقات مدمجة، مع واجهات محلية أو أي واجهة متوافقة مع OpenAI',
    ko: '게임 마스터용 주사위와 능력치, 내장 카드 포지를 갖춘 무료 롤플레이 데스크톱 앱으로, 로컬 백엔드 또는 OpenAI 호환 API와 연결됩니다',
  },
  // Comparison attributes from the maker's features page on 2026-11-21: lorebooks (incl. standalone worldbooks, World info JSON import/export) and group chats are stated; nothing else is defined for this segment.
  compare: { lorebooks: true, groupChats: true },
  reviewSlug: 'rin-chat-review',
  pqReview: {
    date: '2026-11-21',
    version: '1.0.4',
    versionSourceUrl: 'https://rin.chat/changelog',
  },
  verdict: 'Best for Windows and Linux roleplayers who want a ready-made desktop app that opens SillyTavern and AI Character Cards character cards, and adds game-master dice, stats and a card forge, with, per the maker, encrypted storage on the PC and local backends or any OpenAI-compatible API; limited by closed source, mandatory usage statistics, an unsigned Windows installer, no macOS or released Android build, an open-beta label and claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-21',
  hqCountry: 'US', // Rin Chat LLC, West Jordan, Utah (contact page, privacy policy); terms: laws of the State of Utah
  hqCountrySource: 'https://rin.chat/terms/',
  lastUpstreamUpdate: '2026-11-20', // changelog "Version 1.0.4 ... 20 November 2026"; installer files Last-Modified 2026-11-20 (read 2026-11-21)
  lastUpstreamUpdateSource: 'https://rin.chat/changelog',
}
