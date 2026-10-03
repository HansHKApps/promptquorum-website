// Local AI App Directory — Private Mind (layer: mobile)
// Added 2026-10-03 at the operator's request (first app of the October mobile batch).
// All fields below verified on 2026-10-03 against: the Google Play listing
// (play.google.com/store/apps/details?id=com.swmansion.privatemind — Software Mansion S.A., 5K+ downloads,
// updated 2026-09-14, Data safety: "No data collected" but also "may share App activity with third parties"; the page shows no in-app-purchase or ads labels), the App Store listing
// (id6746713439 — free, v1.3.0, iOS/iPadOS 17.0+, Mac with Apple M1 or later, privacy label "does not collect
// any data"), and github.com/software-mansion-labs/private-mind (README, LICENSE = MIT with a bundled
// ExecuTorch BSD-3-Clause notice, releases page: 1.3.0 published 2026-09-17, 385 stars, model-catalog.json,
// constants/latest-release.ts). No maker outreach — this is an independent PromptQuorum entry.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'private-mind',
  name: 'Private Mind',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['mobile'],
  locality: 'local', // chat, documents and models run on-device via ExecuTorch; the optional per-chat Web toggle (added in 1.3.0) fetches web pages, so "offline" holds with it off
  platforms: ['ios', 'android'], // App Store listing also shows iPad and Mac (Apple M1 or later) availability for the same app; no native desktop build
  worksWith: ['Hugging Face', 'ExecuTorch'], // models are downloaded from Hugging Face on first use; inference runs on React Native ExecuTorch
  engine: 'builtin',
  license: 'MIT', // LICENSE file in the repository (GitHub reports "Other" only because the file also carries a bundled ExecuTorch BSD-3-Clause notice)
  price: 'free',
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // Play listing: "a modern phone with 4 GB+ RAM is recommended for larger models"; models are 0.65–4 GB downloads per the repo catalog — the real need depends on the model loaded
  stars: 385, // GitHub, 2026-10-03
  addedDate: '2026-10-03',
  status: 'listed',
  uses: ['phone', 'chat', 'docs', 'audio'],
  url: 'privatemind.swmansion.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/pl/app/private-mind/id6746713439',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.swmansion.privatemind',
    github: 'https://github.com/software-mansion-labs/private-mind',
    web: 'https://privatemind.swmansion.com/',
  },
  tagline: {
    en: 'Open-source, offline AI chat for iPhone and Android, with on-device document Q&A',
    de: 'Quelloffener Offline-KI-Chat für iPhone und Android mit Dokumentenfragen auf dem Gerät',
    fr: "Chat IA open source et hors ligne pour iPhone et Android, avec questions sur vos documents sur l'appareil",
    ja: 'iPhoneとAndroid向けのオープンソースでオフラインのAIチャット。端末内の文書Q&A対応',
    zh: '面向iPhone和Android的开源离线AI聊天应用，支持设备端文档问答',
    es: 'Chat de IA offline y de código abierto para iPhone y Android, con preguntas sobre documentos en el dispositivo',
    pt: 'Chat de IA offline e de código aberto para iPhone e Android, com perguntas sobre documentos no dispositivo',
    ar: 'دردشة ذكاء اصطناعي مفتوحة المصدر وتعمل دون اتصال لـ iPhone وAndroid، مع أسئلة عن المستندات على الجهاز',
    ko: 'iPhone과 Android용 오픈소스 오프라인 AI 채팅, 기기 내 문서 질의응답 지원',
  },
  // Comparison attributes: each value verified against the App Store/Play listings and the repository
  // README on 2026-10-03; a missing key = not stated there, never false. voice = on-device Whisper
  // dictation (voice input only, no spoken replies stated); visionInput = vision-capable models
  // (LFM 2.5 VL, Gemma 4 VL) in the repo's model catalog and the README's "send a photo" line.
  compare: { offline: true, importModels: true, modelDownloads: true, visionInput: true, voice: true },
  lastVerifiedDate: '2026-10-03',
  reviewSlug: 'private-mind-review',
  pqReview: {
    date: '2026-10-03',
    version: '1.3.0',
    versionSourceUrl: 'https://github.com/software-mansion-labs/private-mind/releases',
  },
  verdict: 'Best for iPhone and Android users who want a free, MIT-licensed offline chat app with on-device document Q&A and built-in benchmarks, from an established React Native company; limited by small (about 0.65–4 GB) downloadable models and a young app whose optional web search is the one part that goes online.',
}
