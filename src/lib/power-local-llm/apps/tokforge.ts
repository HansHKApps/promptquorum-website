// Local AI App Directory — TokForge (layer: mobile)
// Added 2026-10-03 at the operator's request (third app of the October mobile batch).
// Verified on 2026-10-03 against: the Google Play listing (play.google.com/store/apps/details?id=dev.tokforge —
// "TokForge Local AI Offline Chat" by Defcon-One, developer contact Isaac Maple (United States), 5K+ downloads,
// updated 2026-09-20, Entertainment category, Data safety: "No data shared with third parties" and "No data collected",
// no in-app-purchase or ads labels on the page) and the developer's own site tokforge.ai (version 1.0, free, iPhone/iPad
// as a TestFlight public beta, minimum 4 GB RAM for small models and 8 GB+ for larger ones, "No public repo" in the
// developer's own comparison guide). No public source repository or license text found. No maker outreach.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tokforge',
  name: 'TokForge',
  categories: ['general-chat-clients', 'roleplay-companions', 'image-generation'],
  interfaces: ['mobile'],
  locality: 'local', // inference runs on-device; web search is off by default, and benchmark leaderboard posting is opt-in
  platforms: ['android'], // iPhone/iPad is a TestFlight public beta only, not on the App Store — mentioned in the review, not listed as a platform
  worksWith: ['llama.cpp', 'MNN', 'Hugging Face', 'OpenAI-compatible servers'],
  engine: 'both', // built-in llama.cpp (GGUF) and MNN engines, plus connecting to your own OpenAI-compatible server
  license: 'Not stated', // no license text and no public source repository found; the developer's own guide lists "No public repo"
  price: 'free', // Play listing and tokforge.ai: free, no subscription, no account; no in-app-purchase label seen on the Play page
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // tokforge.ai: minimum 4 GB RAM for small models, 8 GB+ for larger; speed depends on the SoC (Adreno GPU / Snapdragon NPU paths)
  stars: null,
  addedDate: '2026-10-03',
  status: 'listed',
  uses: ['phone', 'chat', 'image', 'audio', 'docs'],
  url: 'tokforge.ai',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=dev.tokforge',
    web: 'https://tokforge.ai',
  },
  tagline: {
    en: 'Offline Android AI chat with roleplay characters, image generation, voice and a speed leaderboard',
    de: 'Offline-KI-Chat für Android mit Rollenspiel-Charakteren, Bildgenerierung, Sprache und Geschwindigkeits-Rangliste',
    fr: "Chat IA hors ligne pour Android avec personnages de jeu de rôle, génération d'images, voix et classement de vitesse",
    ja: 'ロールプレイキャラクター、画像生成、音声、速度リーダーボードを備えたAndroid向けオフラインAIチャット',
    zh: '支持角色扮演、图像生成、语音和速度排行榜的Android离线AI聊天应用',
    es: 'Chat de IA offline para Android con personajes de rol, generación de imágenes, voz y clasificación de velocidad',
    pt: 'Chat de IA offline para Android com personagens de roleplay, geração de imagens, voz e ranking de velocidade',
    ar: 'دردشة ذكاء اصطناعي دون اتصال لـ Android مع شخصيات لعب أدوار وتوليد صور وصوت ولوحة صدارة للسرعة',
    ko: '롤플레이 캐릭터, 이미지 생성, 음성, 속도 리더보드를 갖춘 Android 오프라인 AI 채팅',
  },
  // Comparison attributes: each value taken from the Play description on 2026-10-03; a missing key = not stated, never false.
  // modelDownloads = built-in downloader with Hugging Face search and a curated 52-model catalog; voice = Kokoro text-to-speech,
  // voice cloning and voice input. importModels / visionInput are not stated in the sources read and stay unset.
  compare: { offline: true, modelDownloads: true, voice: true },
  lastVerifiedDate: '2026-10-03',
  reviewSlug: 'tokforge-review',
  pqReview: {
    date: '2026-10-03',
    version: '1.0',
    versionSourceUrl: 'https://tokforge.ai/',
  },
  verdict: 'Best for Android users who want a free offline chat app with roleplay characters, on-device image generation, voice and per-chip speed benchmarking; limited by closed, unpublished source, a small install base, and an iPhone version that is still a TestFlight beta.',
}
