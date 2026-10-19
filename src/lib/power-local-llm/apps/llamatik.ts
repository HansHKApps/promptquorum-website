// Local AI App Directory — Llamatik: Local AI Chatbot (layer: mobile)
// Added 2026-10-19 at the operator's request (Google Play link com.llamatik.app.android). Independent PromptQuorum entry,
// no maker outreach. Facts below were read from primary sources on 2026-10-19: the Google Play listing
// (com.llamatik.app.android — "Llamatik - Local AI Chatbot", developer "Multiplatform Kickstarter", free, 1K+ downloads,
// version 1.9.0, updated 2026-05-14, first released 2025-11-20, rating 3.9 from 48 ratings, Everyone, Data safety: no data
// shared with third parties, collects crash logs / diagnostics / other app performance data for app functionality and analytics,
// encrypted in transit, no deletion request offered; description lists Gemma 3 270M, SmolVLM 256M/500M, Phi-1.5, Qwen 2.5,
// Llama 3.2 1B and says "Internet is only used to download models or for analytics/crash reporting (Firebase)"), the iTunes
// lookup for the App Store app id6755773708 (v1.9.0, 2026-05-14, free, iOS 16.6+, first release 2025-12-03, seller Ferran Pons
// Sanchez), llamatik.com and llamatik.com/download (Android, iOS, macOS, Windows, Linux .deb and a browser web app),
// multiplatformkickstarter.com/llamatik-privacy.html (last updated 2025-11-20: Firebase Analytics + Crashlytics, optional
// Performance Monitoring, no chat content collected) and github.com/ferranpons/Llamatik (MIT, 206 stars, README, releases:
// v2.0.0 "AI SDK" on 2026-10-14, desktop installers Llamatik-1.9.0.dmg / .msi / llamatik_1.9.0_amd64.deb attached to the releases).
// The store apps carry app version 1.9.0; the GitHub release tags (v1.x, v2.0.0) belong to the Kotlin SDK that the app showcases.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llamatik',
  name: 'Llamatik',
  categories: ['general-chat-clients', 'sdks-libraries'],
  interfaces: ['mobile', 'desktop', 'library'],
  locality: 'local', // chat runs on-device via llama.cpp; model downloads (Hugging Face) and Firebase analytics/crash reports use the network
  platforms: ['android', 'ios', 'mac', 'win', 'linux', 'web'], // Play + App Store apps; macOS .dmg, Windows .msi, Debian .deb on the download page; browser web app at llamatik.com/prompt
  worksWith: ['Hugging Face', 'llama.cpp', 'whisper.cpp', 'stable-diffusion.cpp'], // GGUF models downloaded in-app; the same Kotlin library also wraps whisper.cpp and stable-diffusion.cpp
  engine: 'builtin',
  license: 'MIT', // LICENSE in github.com/ferranpons/Llamatik (GitHub API: MIT)
  price: 'free', // free on Google Play and the App Store; Play shows no ads or in-app-purchase label
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM figure on the listings; the models offered range from a 270M-parameter Gemma 3 to quantized 1B-class models
  stars: 206, // GitHub, 2026-10-19
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat', 'build'],
  url: 'llamatik.com',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.llamatik.app.android',
    appStore: 'https://apps.apple.com/us/app/llamatik-local-ai-chatbot/id6755773708',
    github: 'https://github.com/ferranpons/Llamatik',
    web: 'https://www.llamatik.com/',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing com.llamatik.app.android (free, 1K+ downloads), App Store id6755773708 (free, iOS 16.6+), and llamatik.com/download offering macOS .dmg, Windows .msi and Debian .deb (GitHub release assets Llamatik-1.9.0.dmg / .msi, llamatik_1.9.0_amd64.deb), read 2026-10-19',
  tagline: {
    en: 'Free, MIT-licensed offline AI chatbot for Android, iPhone and desktop, built on the Llamatik Kotlin Multiplatform SDK',
    de: 'Kostenloser, MIT-lizenzierter Offline-KI-Chatbot für Android, iPhone und Desktop, gebaut auf dem Kotlin-Multiplatform-SDK Llamatik',
    fr: "Chatbot IA gratuit, hors ligne et sous licence MIT pour Android, iPhone et ordinateur, construit sur le SDK Kotlin Multiplatform Llamatik",
    ja: 'Android・iPhone・デスクトップ向けの無料でMITライセンスのオフラインAIチャットボット。Kotlin Multiplatform SDK「Llamatik」を基盤に構築',
    zh: '面向Android、iPhone和桌面的免费MIT许可离线AI聊天机器人，基于Kotlin Multiplatform SDK Llamatik构建',
    es: 'Chatbot de IA gratuito, offline y con licencia MIT para Android, iPhone y escritorio, creado sobre el SDK Kotlin Multiplatform Llamatik',
    pt: 'Chatbot de IA gratuito, offline e com licença MIT para Android, iPhone e desktop, criado sobre o SDK Kotlin Multiplatform Llamatik',
    ar: 'روبوت دردشة ذكاء اصطناعي مجاني بترخيص MIT يعمل دون اتصال على Android وiPhone وسطح المكتب، مبني على حزمة Kotlin Multiplatform SDK الخاصة بـ Llamatik',
    ko: 'Android, iPhone, 데스크톱용 무료 MIT 라이선스 오프라인 AI 챗봇. Kotlin Multiplatform SDK Llamatik 기반',
  },
  // Comparison attributes read from the Google Play description and privacy policy on 2026-10-19; a missing key = not stated, never false.
  compare: { offline: true, modelDownloads: true },
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2026-10-14', // GitHub release v2.0.0 (2026-10-14) and last commit the same day; the store builds themselves are 1.9.0 from 2026-05-14 (Play and App Store)
  lastUpstreamUpdateSource: 'https://github.com/ferranpons/Llamatik/releases/tag/v2.0.0',
  reviewSlug: 'llamatik-review',
  pqReview: {
    date: '2026-10-19',
    version: '1.9.0',
    versionSourceUrl: 'https://play.google.com/store/apps/details?id=com.llamatik.app.android',
  },
  verdict: 'Best for Android and iPhone users and Kotlin developers who want a free, MIT-licensed offline chatbot that doubles as a showcase of an open-source on-device SDK; limited by being an experimental demo with small models, a 3.9 Play rating from 48 ratings, store builds last updated in May 2026, and Firebase analytics and crash reports that still leave the phone.',
}
