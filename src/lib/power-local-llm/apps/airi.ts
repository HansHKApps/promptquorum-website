// Local AI App Directory — AIRI by Project AIRI / moeru-ai (layer: open-source AI companion, web + desktop, roleplay & voice)
// Added 2026-11-18 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: GitHub repository and README (moeru-ai/airi), LICENSE (MIT, "Copyright (c) 2024-PRESENT Neko Ayaka"), GitHub Releases
// (latest stable v0.15.4 published 2026-11-12, pre-release v0.15.5 2026-11-14), the docs site airi.moeru.ai/docs/en (overview, versions, desktop
// and web manuals). The app page airi.moeru.ai showed "AIRI could not start" to the fetcher on 2026-11-18 (client-rendered web app), so its
// content was not read.
// Notes:
// - License: MIT (LICENSE file and GitHub API).
// - Price: the app is free; the v0.15.4 release notes describe an optional "Subscription" and "Flux" balance for the official AIRI provider. No prices were found; freemium.
// - Platforms: web (airi.moeru.ai), macOS, Windows, Linux (release assets: .dmg, .exe, .AppImage, .deb, .rpm, .flatpak, .pacman). The release also lists an
//   Android APK, but no doc states Android support (the README calls the mobile app "Stage Pocket ... experimental"), so android is NOT listed.
// - engine = 'external': chat providers are configured by the user (OpenRouter, OpenAI-compatible, Ollama, vLLM, ...). The README says the desktop version can use
//   native CUDA and Apple Metal (candle) by default; no specifics, so no built-in engine is claimed.
// - Account: sign-in to the official AIRI provider is optional ("Setup with your provider" or "Sign in"). v0.15.4 notes say error reports follow the same
//   data collection switch as product analytics.
// - HQ country: NOT set. No privacy policy, terms or imprint was found on the website, docs or repository; the GitHub org page names no location. Left unset for the owner.
// - Stars: GitHub API 51533 on 2026-11-18.
// Last upstream update: 2026-11-18 (last commit on the default branch; latest stable release 2026-11-12, pre-release 2026-11-14) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'airi',
  name: 'AIRI',
  categories: ['roleplay-companions', 'realtime-voice-agents', 'avatars-lipsync'],
  interfaces: ['web', 'desktop'],
  locality: 'hybrid', // desktop can reach local LLMs such as Ollama, but chat, speech and vision providers are user-selected and many are cloud services (docs, README)
  platforms: ['web', 'mac', 'win', 'linux'],
  worksWith: ['Ollama', 'vLLM', 'OpenRouter', 'OpenAI', 'Anthropic', 'Discord', 'Telegram', 'Minecraft', 'Live2D', 'VRM'],
  engine: 'external', // providers are configured by the user; no built-in local engine is claimed
  license: 'MIT',
  price: 'freemium', // app is free; optional subscription/Flux for the official AIRI provider (v0.15.4 release notes), no prices found
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; depends on the chosen providers and models
  stars: 51533,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['chat', 'audio'],
  url: 'airi.moeru.ai',
  storeLinks: {
    github: 'https://github.com/moeru-ai/airi',
    web: 'https://airi.moeru.ai',
  },
  installEffort: 'installer',
  installEvidence: 'On 2026-11-18 the GitHub Releases page (stable v0.15.4) listed AIRI-0.15.4-windows-x64-setup.exe, AIRI-0.15.4-darwin-arm64.dmg, AIRI-0.15.4-darwin-x64.dmg and Linux AppImage, .deb, .rpm, .flatpak and .pacman files; the README shows Windows, macOS and Linux download buttons and lists winget, Scoop and Homebrew Cask commands. A browser version is also offered at airi.moeru.ai. Code-signing status is not stated in the sources.',
  tagline: {
    en: 'Free, MIT-licensed AI companion for browser, Windows, macOS and Linux with voice chat, Live2D and VRM characters, and optional game and chat-app integrations.',
    de: 'Kostenloser KI-Begleiter unter MIT-Lizenz für Browser, Windows, macOS und Linux mit Sprachchat, Live2D- und VRM-Figuren sowie optionalen Spiel- und Chat-App-Anbindungen.',
    fr: 'Compagnon IA gratuit sous licence MIT pour navigateur, Windows, macOS et Linux, avec chat vocal, personnages Live2D et VRM, et intégrations facultatives de jeux et d\'applis de messagerie.',
    ja: 'ブラウザ、Windows、macOS、Linuxで使える、MITライセンスの無料AIコンパニオン。音声チャット、Live2D／VRMキャラクター、ゲームやチャットアプリとの任意の連携に対応します。',
    zh: '采用 MIT 许可证的免费 AI 伴侣，支持浏览器、Windows、macOS 和 Linux，提供语音聊天、Live2D 和 VRM 角色，以及可选的游戏与聊天应用集成。',
    es: 'Compañero de IA gratuito con licencia MIT para navegador, Windows, macOS y Linux, con chat de voz, personajes Live2D y VRM, e integraciones opcionales con juegos y apps de mensajería.',
    pt: 'Companheiro de IA gratuito com licença MIT para navegador, Windows, macOS e Linux, com chat de voz, personagens Live2D e VRM e integrações opcionais com jogos e apps de mensagens.',
    ar: 'رفيق ذكاء اصطناعي مجاني بترخيص MIT للمتصفح وWindows وmacOS وLinux، يوفّر محادثة صوتية وشخصيات Live2D وVRM وتكاملات اختيارية مع الألعاب وتطبيقات المراسلة.',
    ko: '브라우저, Windows, macOS, Linux에서 쓸 수 있는 MIT 라이선스 무료 AI 컴패니언으로, 음성 채팅, Live2D·VRM 캐릭터, 게임·채팅 앱 연동(선택)을 지원합니다.',
  },
  reviewSlug: 'airi-review',
  pqReview: {
    date: '2026-11-18',
    version: '0.15.4',
    versionSourceUrl: 'https://github.com/moeru-ai/airi/releases/tag/v0.15.4',
  },
  compare: { customLlm: true }, // README "Support of LLM API Providers" lists OpenAI-compatible APIs, Ollama, vLLM (read 2026-11-18); other attributes are not stated
  verdict: 'Best for tinkerers who want a free, open-source AI companion with voice chat, Live2D or VRM characters and optional game integrations; limited by an early-stage project status per its own README, provider-dependent privacy (cloud or local), no published privacy policy found and quality claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-18', // latest commit on the default branch (GitHub API, 2026-11-18); latest stable release v0.15.4 published 2026-11-12, pre-release v0.15.5 2026-11-14
  lastUpstreamUpdateSource: 'https://github.com/moeru-ai/airi (last commit 2026-11-18; latest stable release 2026-11-12)',
}
