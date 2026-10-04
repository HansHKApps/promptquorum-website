// Local AI App Directory — Oscilla (layer: mobile / iOS)
// Added 2026-10-04 from the app queue. Facts verified against the App Store listing
// (id6759628356) and oscilla.ai on 2026-10-04 — the site is currently a "coming soon" V2 landing page
// with no technical detail, so engine, licence and source status come only from the store listing.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'oscilla',
  name: 'Oscilla',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios'], // listing description says "iPhone, iPad, and Mac", but the compatibility panel lists iPhone only (iOS 26.0+) — only the confirmed platform is set
  worksWith: null,
  engine: 'builtin', // runs 40+ downloadable models on-device (Gemma 4, Qwen 3, Granite, MiniCPM-V, ...); the inference runtime is not named in any public source
  license: 'Closed source', // no public repository found; store listing and site state no licence
  price: 'free', // App Store shows "Free" and no in-app purchases — verified 2026-10-04
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // listing requires iOS 26.0+ and gives no RAM figure; models range from 350M to 8B parameters, so the floor depends on the model chosen
  stars: null,
  addedDate: '2026-10-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'www.oscilla.ai',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/oscilla-local-ai/id6759628356',
    web: 'https://www.oscilla.ai',
  },
  tagline: {
    en: 'Free iPhone app that runs 40+ open models fully on-device, with voice and memory',
    de: 'Kostenlose iPhone-App, die über 40 offene Modelle vollständig auf dem Gerät ausführt, mit Sprache und Gedächtnis',
    fr: 'App iPhone gratuite qui exécute plus de 40 modèles ouverts 100 % sur l’appareil, avec voix et mémoire',
    ja: '40以上のオープンモデルをデバイス上だけで動かす、音声とメモリ機能付きの無料iPhoneアプリ',
    zh: '免费iPhone应用，完全在设备端运行40多个开源模型，支持语音与记忆',
    es: 'App gratuita para iPhone que ejecuta más de 40 modelos abiertos 100 % en el dispositivo, con voz y memoria',
    pt: 'App gratuito para iPhone que executa mais de 40 modelos abertos 100% no dispositivo, com voz e memória',
    ar: 'تطبيق iPhone مجاني يشغّل أكثر من 40 نموذجًا مفتوحًا بالكامل على الجهاز، مع الصوت والذاكرة',
    ko: '40개 이상의 오픈 모델을 기기 안에서만 실행하는 음성·메모리 지원 무료 iPhone 앱',
  },
  reviewSlug: 'oscilla-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: {
    date: '2026-10-04', // 1.2026.05 = version shown on the App Store listing on that date (last updated May 21)
    version: '1.2026.05',
    versionSourceUrl: 'https://apps.apple.com/us/app/oscilla-local-ai/id6759628356',
  },
  // Comparison attributes: each value taken from the App Store listing on 2026-10-04; a missing key = not stated there, never false.
  compare: { voice: true, offline: true, modelDownloads: true, visionInput: true },
  lastVerifiedDate: '2026-10-04',
}
