// Local AI App Directory — Aiko (layer: stt, Voice, Speech & Multimodal)
// Added 2026-10-30. Facts verified 2026-10-30 against sindresorhus.com/aiko (features, FAQ, trial, older versions, "No data collected"),
// sindresorhus.com/aiko/privacy-policy (two sentences, no date) and the App Store listing id1672085276 via the iTunes lookup API:
// v1.11.0, currentVersionReleaseDate 2026-06-27 ("The app now requires iOS 26."), first release 2023-03-03, minimum OS 26.0, 1.83 GB,
// seller Sindre Sorhus, 4.68 average from 329 ratings, universal listing (iPhone, iPad, Mac).
// Per-storefront price (App Store lookup, checked 2026-10-30): US $24.00, DE/FR/ES 29,00 EUR, JP JPY 4,000, KR KRW 39,000, BR R$ 149,90.
// Stale: 125 days since 2026-06-27 on 2026-10-30, so the 3-month warning is ON (quiet tier, below the 180-day dead tier).
// Source-code repo and licence: none found; the page links no repository (the credits name OpenAI Whisper and whisper.cpp).
// Not stated by the maker: a minimum macOS version for the current build (older free builds exist for macOS 13-15).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'aiko',
  name: 'Aiko',
  categories: ['speech-to-text'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // maker: transcription runs on the device with OpenAI's Whisper, audio is never uploaded; the privacy policy says no data is collected
  platforms: ['ios', 'ipados', 'mac'], // universal App Store listing; the site also names visionOS, which the OSKey list has no value for
  worksWith: ['Whisper', 'Shortcuts'], // Whisper large v2 on the Mac, medium or small on iOS; Shortcuts actions for batch and recording
  engine: 'builtin',
  license: 'Proprietary (closed source)', // no repository or licence text found
  price: 'paid', // $24 one-time for all platforms; free 14-day TestFlight trial of the full app
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM requirement stated; the site says available memory affects speed; the iOS model size depends on memory
  stars: null, // no public repository
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['audio'],
  url: 'sindresorhus.com/aiko',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id1672085276',
    web: 'https://sindresorhus.com/aiko',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id1672085276 checked 2026-10-30: standard App Store install on iPhone, iPad and Mac, no terminal step; v1.11.0 released 2026-06-27, 1.83 GB, minimum OS 26.0; free 14-day TestFlight trial at sindresorhus.com/aiko',
  tagline: {
    en: 'On-device Whisper transcription for Mac, iPhone and Vision Pro with a one-time price, 100 languages and Shortcuts support',
    de: 'Whisper-Transkription auf dem Gerät für Mac, iPhone und Vision Pro mit Einmalpreis, 100 Sprachen und Kurzbefehle-Unterstützung',
    fr: "Transcription Whisper sur l'appareil pour Mac, iPhone et Vision Pro, à prix unique, avec 100 langues et la prise en charge de Raccourcis",
    ja: 'Mac・iPhone・Vision Pro向けの端末内Whisper文字起こし。買い切り、100言語、ショートカット対応',
    zh: '适用于 Mac、iPhone 和 Vision Pro 的设备端 Whisper 转录应用，一次性付费，支持 100 种语言和快捷指令',
    es: 'Transcripción Whisper en el dispositivo para Mac, iPhone y Vision Pro, con pago único, 100 idiomas y compatibilidad con Atajos',
    pt: 'Transcrição Whisper no dispositivo para Mac, iPhone e Vision Pro, com compra única, 100 idiomas e suporte a Atalhos',
    ar: 'تحويل الكلام إلى نص بنموذج Whisper على الجهاز لأجهزة Mac وiPhone وVision Pro، بسعر لمرة واحدة و100 لغة ودعم الاختصارات',
    ko: 'Mac, iPhone, Vision Pro에서 기기 내 Whisper로 전사하는 앱. 일회성 결제, 100개 언어, 단축어 지원',
  },
  // Comparison attributes: each value taken from sindresorhus.com/aiko and the App Store description on 2026-10-30 ("does not do live transcription", "no speaker detection", 100 languages); a missing key = not stated, never false.
  compare: { languages: 100, realtime: false, speakerLabels: false },
  reviewSlug: 'aiko-review', // dedicated PromptQuorum review
  pqReview: {
    date: '2026-10-30',
    version: '1.11.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/id1672085276',
  },
  verdict: 'Best for Apple users who want accurate, private Whisper transcription of recordings for a one-time $24 and can try it free for 14 days first; limited by no live transcription, no speaker labels, no in-app editing, an iOS 26 minimum and no update since 27 June 2026.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-06-27', // App Store currentVersionReleaseDate of v1.11.0, read 2026-10-30
  lastUpstreamUpdateSource: 'https://apps.apple.com/us/app/id1672085276',
}
