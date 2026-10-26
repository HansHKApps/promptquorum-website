// Local AI App Directory — Lyonesse: AI Transcript & Chat (layer: stt + document chat, iPhone / iPad / Mac)
// Added 2026-10-26 on the owner's request (same developer as Castmates). Verified 2026-10-26 against: the App Store listing and iTunes lookup
// (id6754086711: seller Josip Markovic / copyright "Markovic Software, obrt za usluge", v2.0.7 released 2026-10-23, first listed 2025-10-31,
// iOS/iPadOS/macOS/visionOS 26.0+, watchOS 11.0+, 68.9 MB, free with in-app purchases), lyonesse.app (features, pricing, comparison table),
// lyonesse.app/privacy.html (last updated 2026-10-09), lyonesse.app/terms.html (last updated 2025-10-28) and the maker's two measurement posts
// (blog/meeting-notes-upload-measured.html, blog/parakeet-moss-apple-speech-benchmark.html — vendor self-tests, not independent).
// Per-storefront in-app prices read from the App Store pages 2026-10-26 (Monthly / Annual / Unlimited lifetime): US $7.99 / $29.99 / $59.99,
// DE/ES/FR 8,99 / 34,99 / 69,99 EUR, JP JPY 1,300 / 5,000 / 10,000, KR KRW 12,000 / 49,000 / 99,000, BR R$ 49,90 / 199,90 / 399,90.
// Storefront titles differ: "Lyonesse: KI Transkript & Chat" (DE), "Lyonesse: AI文字起こし・チャット" (JP), "Lyonesse: AI 받아쓰기, 노트, 챗" (KR),
// "Lyonesse: Transcrição, Chat IA" (BR), "Lyonesse: Transcribir, Chat IA" (ES), "Lyonesse: Transcrire & Chat IA" (FR). Renamed from "Inscribe" in v2.0.1.
// No source repository, so licence is closed source and `engine` builtin. Conflicts stated in the review, not resolved: the privacy policy says iCloud sync
// is on by default while the App Store text says it is off by default; the terms (2025-10-28) say the app requires Apple Intelligence-capable hardware
// while the site offers a downloadable local model.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lyonesse',
  name: 'Lyonesse',
  categories: ['speech-to-text', 'document-pdf-chat'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // developer: transcription, summaries and Q&A run on the device; policy lists anonymized analytics and crash reports, and iCloud sync of text (see review)
  platforms: ['ios', 'mac'], // universal app: iPhone, iPad, Mac (macOS 26.0+, Apple silicon recommended), plus an Apple Watch recorder (watchOS 11.0+); visionOS listed by the App Store
  worksWith: ['Apple Intelligence', 'Apple Speech', 'NVIDIA Parakeet', 'iCloud', 'Apple Reminders'],
  engine: 'builtin', // Apple Speech or NVIDIA Parakeet for transcription; Apple Intelligence or a downloadable local model for summaries and chat (maker, v2.0.0 notes: model chosen to suit the device)
  license: 'Closed source',
  price: 'freemium', // free download with one recording; Monthly $7.99, Annual $29.99, Unlimited (lifetime) $59.99 on the US store, 2026-10-26
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM figure stated; on-device AI works best on iPhone 15 Pro or later, M-series iPad, Apple-silicon Mac (maker's site)
  stars: null, // no public repository
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['audio', 'docs', 'phone'],
  url: 'lyonesse.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711',
    web: 'https://lyonesse.app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6754086711 (free, iOS/iPadOS/macOS 26.0+, 68.9 MB, speech and AI models download once on first use per the maker), read 2026-10-26; no terminal step',
  tagline: {
    en: 'Offline transcription, meeting notes and document chat for iPhone, iPad and Mac, with no account and a lifetime-purchase option',
    de: 'Offline-Transkription, Meeting-Notizen und Dokument-Chat für iPhone, iPad und Mac, ohne Konto und mit Einmalkauf-Option',
    fr: 'Transcription hors ligne, notes de réunion et chat de documents pour iPhone, iPad et Mac, sans compte et avec achat à vie',
    ja: 'iPhone・iPad・Mac向けのオフライン文字起こし、会議メモ、ドキュメントチャット。アカウント不要で買い切りも選べる',
    zh: '适用于 iPhone、iPad 和 Mac 的离线转录、会议笔记与文档对话应用，无需账号，可选终身买断',
    es: 'Transcripción sin conexión, notas de reuniones y chat de documentos para iPhone, iPad y Mac, sin cuenta y con compra vitalicia',
    pt: 'Transcrição offline, notas de reuniões e chat com documentos para iPhone, iPad e Mac, sem conta e com compra vitalícia',
    ar: 'تفريغ صوتي ومحاضر اجتماعات ودردشة مع المستندات دون إنترنت لأجهزة iPhone وiPad وMac، دون حساب مع خيار الشراء الدائم',
    ko: 'iPhone·iPad·Mac용 오프라인 받아쓰기, 회의 노트, 문서 채팅 앱으로 계정이 필요 없고 평생 구매 옵션을 제공합니다',
  },
  reviewSlug: 'lyonesse-review',
  // Comparison attributes (speech-to-text segment): 15 transcription languages, live transcription and speaker labels are stated on the maker's site
  // and App Store text. cpuUsable (Apple-silicon/Neural Engine app) and apiServer are not stated, so they stay unset (never false).
  compare: { languages: 15, realtime: true, speakerLabels: true },
  pqReview: {
    date: '2026-10-26',
    version: '2.0.7',
    versionSourceUrl: 'https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711',
  },
  verdict: 'Best for iPhone and Mac owners with recent Apple hardware who want account-free transcription, meeting notes and document chat with a lifetime-purchase option; limited by closed source, an iOS/macOS 26 minimum, a one-person developer, privacy and benchmark claims that rest on the maker\'s own statements and conflicting sync-default wording.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-23', // App Store version 2.0.7, currentVersionReleaseDate 2026-10-23T20:17:04Z via the iTunes lookup, read 2026-10-26
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/lyonesse-ai-transcript-chat/id6754086711',
}
