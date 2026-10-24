// Local AI App Directory — KernelAI (layer: mobile, general chat client)
// Added 2026-10-24 at the operator's request (from a list of recently launched / heavily updated local-LLM apps). No maker outreach.
// Facts verified 2026-10-24 against: kernelai.app (home, /models catalog of 53 models from 15 labs, FAQ, /privacy updated 2026-08-16,
// /terms updated 2026-01-05), the App Store listing id6757350731 (iTunes lookup API: v2.2.0, currentVersionReleaseDate 2026-10-15,
// first release 2026-01-17, seller Anes Khadiri, free, iOS 16.4+, about 90 MB, 17+) and the Google Play listing com.kernelai.app
// ("Updated on Oct 15, 2026"; version number not readable from the page). Free in the US/DE/FR/ES/JP/KR/BR storefronts; store titles differ:
// "KernelAI - Offline-KI-Chat" (DE), "KernelAI - Chat IA hors ligne" (FR), "KernelAI: Chat IA sin conexión" (ES),
// "KernelAI - オフラインAIチャット" (JP), "KernelAI - 오프라인 AI 채팅" (KR), "KernelAI - Chat de IA offline" (BR), "KernelAI - Offline AI Chat" (US).
// Closed source: the maker's GitHub account (KA-devl) holds no KernelAI repository; the terms grant a personal, non-commercial licence.
// Last upstream update: 2026-10-15 (App Store version 2.2.0, Google Play) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'kernelai',
  name: 'KernelAI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local', // site + privacy policy: chats, files, images and transcriptions are processed on the phone; network only for model downloads (Hugging Face), optional web search (own Tavily/Exa key) and Sentry crash diagnostics
  platforms: ['ios', 'android'], // iPhone/iPad (iOS 16.4+) and Android 7.0+ per the website
  worksWith: null,
  engine: 'builtin', // llama.cpp runtime with open-weight GGUF models, per the maker's FAQ
  license: 'Closed source', // no repository found; terms: personal, non-commercial licence
  price: 'free', // free, no account or subscription; optional tips unlock nothing (website FAQ)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // models 112 MB to 3.11 GB; the app checks memory and disables models the device cannot run; no RAM figure published
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['phone', 'chat', 'docs'],
  url: 'kernelai.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/id6757350731',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.kernelai.app',
    web: 'https://kernelai.app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6757350731 (free, about 90 MB, iOS 16.4+, v2.2.0 released 2026-10-15) and Google Play listing com.kernelai.app (updated 2026-10-15); models download on first use; no terminal step; checked 2026-10-24',
  tagline: {
    en: 'Free iPhone, iPad and Android chat app that downloads 53 open models and runs them offline on the phone, with documents, vision and Shortcuts',
    de: 'Kostenlose Chat-App für iPhone, iPad und Android, die 53 offene Modelle lädt und offline auf dem Telefon ausführt – mit Dokumenten, Vision und Kurzbefehlen',
    fr: 'Application de chat gratuite pour iPhone, iPad et Android qui télécharge 53 modèles ouverts et les exécute hors ligne sur le téléphone, avec documents, vision et Raccourcis',
    ja: '53のオープンモデルをダウンロードして端末内でオフライン実行する、iPhone・iPad・Android向けの無料チャットアプリ。資料、画像、ショートカットに対応',
    zh: '免费的 iPhone、iPad 和 Android 聊天应用，下载 53 个开放模型并在手机上离线运行，支持文档、视觉和快捷指令',
    es: 'App de chat gratuita para iPhone, iPad y Android que descarga 53 modelos abiertos y los ejecuta sin conexión en el teléfono, con documentos, visión y Atajos',
    pt: 'App de chat gratuito para iPhone, iPad e Android que baixa 53 modelos abertos e os executa offline no celular, com documentos, visão e Atalhos',
    ar: 'تطبيق دردشة مجاني لأجهزة iPhone وiPad وAndroid ينزّل 53 نموذجًا مفتوحًا ويشغّلها بلا إنترنت على الهاتف، مع المستندات والرؤية والاختصارات',
    ko: 'iPhone·iPad·Android용 무료 채팅 앱으로, 오픈 모델 53개를 내려받아 휴대폰에서 오프라인으로 실행하며 문서·비전·단축어를 지원합니다',
  },
  reviewSlug: 'kernelai-review',
  pqReview: {
    date: '2026-10-24',
    version: '2.2.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/id6757350731',
  },
  // Comparison attributes taken from kernelai.app and the App Store description on 2026-10-24; a missing key = not stated there, never false.
  compare: { offline: true, modelDownloads: true, importModels: true, visionInput: true, voice: true }, // importModels = GGUF import (marked experimental); voice = on-device dictation plus read-aloud with system voices
  verdict: 'Best for iPhone and Android users who want a free, account-free offline chat app with a large catalog of downloadable open models; closed source from a single publisher, a personal non-commercial licence, an Android feature set the sources do not describe and privacy claims that rest on the developer\'s own policy.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-15', // App Store currentVersionReleaseDate for v2.2.0 and Google Play "Updated on Oct 15, 2026", read 2026-10-24
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id6757350731',
}
