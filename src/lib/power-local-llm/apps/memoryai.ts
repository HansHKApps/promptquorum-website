// Local AI App Directory — MemoryAI: Offline Private AI (layer: mobile)
// Added 2026-10-19 after the developer (Alessandro Facchini, Facchinits) wrote to hello@promptquorum.com on 2026-10-18
// asking to be included next to the PocketPal / Off Grid / Private Mind / AI Edge Gallery reviews. Facts below were
// re-verified from primary sources on 2026-10-19, not taken from the email: the App Store listing id6758719586
// (iTunes lookup: v1.0.52, released 2026-10-18, iOS 16.4+, free, 198.7 MB, EN/FR/DE/IT/PT/ES, first release 2026-03-30,
// storefront names DE "MemoryAI: Private Offline-KI" and BR "MemoryAI: a IA que lembra"), the Google Play listing
// (com.ts.memoryai — 1K+ downloads, updated 2026-10-18, Data safety "No data shared with third parties", may collect
// "App info and performance" and "Device or other IDs", page data lists build 1.0.54), the privacy policy at
// alessandrofacchini.github.io/memoryai-privacy/ (last updated 2026-06-30) and github.com/alessandrofacchini/memoryai-feedback
// (issue tracker + README only — NO source code, so the licence is recorded as closed source).
// Tension the review states plainly: the store descriptions say "no in-app purchases / no tracking", while the privacy policy
// names optional in-app purchases for premium features, TelemetryDeck analytics, Sentry crash reports and OneSignal push.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'memoryai',
  name: 'MemoryAI',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['mobile'],
  locality: 'local', // chat, documents, voice and memories run on-device; model downloads (Hugging Face), optional backup, analytics and crash reports use the network
  platforms: ['ios', 'android'], // App Store listing also shows Apple-silicon Mac ("not verified for macOS") and visionOS; no native desktop build
  worksWith: ['Hugging Face', 'llama.cpp', 'LiteRT'], // GGUF import from Hugging Face; two engines per the listings: llama.cpp and Google's MediaPipe/LiteRT
  engine: 'builtin',
  license: 'Closed source', // no source repository; github.com/alessandrofacchini/memoryai-feedback holds issues and a README only
  price: 'free', // free on both stores; listings say no ads, subscriptions or in-app purchases (the privacy policy still mentions optional in-app purchases)
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // both listings: "works on devices with 4 GB+ RAM"; models are 0.3–4 GB downloads
  stars: null,
  addedDate: '2026-10-19',
  status: 'listed',
  uses: ['phone', 'chat', 'docs', 'audio'],
  url: 'alessandrofacchini.github.io/memoryai-privacy',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.ts.memoryai',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6758719586 (free, iOS 16.4+, 198.7 MB) and Google Play listing com.ts.memoryai (free, 1K+ downloads), read 2026-10-19',
  tagline: {
    en: 'Free offline AI chat for iPhone and Android with document Q&A, editable Agent Memory, hands-free voice and a PIN-locked Kid Mode',
    de: 'Kostenloser Offline-KI-Chat für iPhone und Android mit Dokumentenfragen, editierbarem Agent Memory, Freisprech-Sprachmodus und PIN-geschütztem Kindermodus',
    fr: "Chat IA gratuit et hors ligne pour iPhone et Android, avec questions sur vos documents, mémoire d'agent modifiable, mode vocal mains libres et mode enfant protégé par PIN",
    ja: 'iPhoneとAndroid向けの無料オフラインAIチャット。文書Q&A、編集可能なエージェントメモリ、ハンズフリー音声、PIN付きキッズモードに対応',
    zh: '面向iPhone和Android的免费离线AI聊天应用，支持文档问答、可编辑的智能体记忆、免提语音和PIN锁定的儿童模式',
    es: 'Chat de IA gratuito y offline para iPhone y Android, con preguntas sobre documentos, memoria de agente editable, voz manos libres y modo infantil con PIN',
    pt: 'Chat de IA gratuito e offline para iPhone e Android, com perguntas sobre documentos, memória de agente editável, voz mãos livres e modo infantil com PIN',
    ar: 'دردشة ذكاء اصطناعي مجانية تعمل دون اتصال لـ iPhone وAndroid، مع أسئلة عن المستندات وذاكرة وكيل قابلة للتعديل ووضع صوتي حر اليدين ووضع أطفال برمز PIN',
    ko: 'iPhone과 Android용 무료 오프라인 AI 채팅. 문서 질의응답, 편집 가능한 에이전트 메모리, 핸즈프리 음성, PIN 잠금 키즈 모드 지원',
  },
  // Comparison attributes, each read from the App Store/Play descriptions on 2026-10-19; a missing key = not stated, never false.
  // voice = on-device voice input plus text-to-speech and a hands-free continuous mode; visionInput = "Image Understanding"
  // with Vision AI models; importModels = custom GGUF import from Hugging Face.
  compare: { offline: true, importModels: true, modelDownloads: true, visionInput: true, voice: true },
  lastVerifiedDate: '2026-10-19',
  lastUpstreamUpdate: '2026-10-18', // App Store currentVersionReleaseDate 2026-10-18 (v1.0.52); Google Play "Updated on Oct 18, 2026"
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586',
  reviewSlug: 'memoryai-review',
  pqReview: {
    date: '2026-10-19',
    version: '1.0.52',
    versionSourceUrl: 'https://apps.apple.com/us/app/memoryai-offline-private-ai/id6758719586',
  },
  verdict: 'Best for iPhone and Android users who want a free, account-less offline chat app with document Q&A, an editable on-device memory, hands-free voice and a PIN-locked Kid Mode; limited by being closed source and young (first release 30 March 2026, 1K+ Play downloads), by small 0.3–4 GB models, and by store and policy wording that do not fully agree on analytics, crash reports and in-app purchases.',
}
