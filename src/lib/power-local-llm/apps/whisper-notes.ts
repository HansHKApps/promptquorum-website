// Local AI App Directory — Whisper Notes (layer: stt)
// Added 2026-10-17 on Hans's request (whispernotes.app, utm_source=localhosted.com).
// Verified 2026-10-17 against: whispernotes.app (platforms, pricing, features, privacy statement), the App Store listing
// (id6447090616 — seller SmashMelon LLC, $7.99, v1.8.8, iOS 18+/macOS 14+), and whispernotes.app/changelog (Mac DMG v1.6.3, 6 Oct 2026).
// Not taken at face value: the site names no maker, so none is asserted beyond the App Store seller; the page lists an "Android Version"
// link that contradicts its own FAQ ("no Android version"), so Android is NOT listed; no source repository exists (closed source;
// only the Whisper/Parakeet models it runs are open). Dedicated PromptQuorum review added 2026-10-18 (whisper-notes-review).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'whisper-notes',
  name: 'Whisper Notes',
  categories: ['speech-to-text'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // transcription runs on-device (works in airplane mode); models download once inside the app
  platforms: ['ios', 'mac'], // iPhone 12+/iPad on iOS 18+, Apple-silicon Mac on macOS 14+; no Intel Mac, Windows or Android per the FAQ
  worksWith: ['Whisper', 'Parakeet'], // open-source Whisper models plus Parakeet V3 on the Apple Neural Engine
  engine: 'builtin',
  license: 'Proprietary (closed source)',
  price: 'paid', // $7.99 one-time on the App Store (iPhone/iPad + Mac App Store); Mac DMG free up to 5,000 words/week, $14 one-time full version
  hardware: { ramGb: null, vramGb: null, cpuOnly: false }, // Apple silicon / iPhone 12+ required (Neural Engine); no RAM figure stated
  stars: null,
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['audio'],
  url: 'whispernotes.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id6447090616',
    web: 'https://whispernotes.app',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing id6447090616 (iPhone/iPad/Mac) and a signed Mac DMG at whispernotes.app, checked 2026-10-17',
  tagline: {
    en: 'Offline speech-to-text for iPhone, iPad and Apple-silicon Mac, with speaker labels and no cloud',
    de: 'Offline-Spracherkennung für iPhone, iPad und Apple-Silicon-Macs, mit Sprecherzuordnung und ohne Cloud',
    fr: 'Reconnaissance vocale hors ligne pour iPhone, iPad et Mac Apple silicon, avec étiquettes de locuteurs et sans cloud',
    ja: 'iPhone・iPad・Apple siliconのMacで使える、話者ラベル付きでクラウド不要のオフライン文字起こし',
    zh: '适用于 iPhone、iPad 和 Apple 芯片 Mac 的离线语音转文字,支持说话人标注,无需云端',
    es: 'Voz a texto sin conexión para iPhone, iPad y Mac con Apple silicon, con etiquetas de hablante y sin nube',
    pt: 'Transcrição de voz offline para iPhone, iPad e Mac com Apple silicon, com identificação de falantes e sem nuvem',
    ar: 'تحويل الكلام إلى نص دون اتصال لأجهزة iPhone وiPad وأجهزة Mac بمعالج Apple silicon، مع تمييز المتحدثين ودون سحابة',
    ko: 'iPhone, iPad, Apple 실리콘 Mac용 오프라인 음성 인식. 화자 구분 지원, 클라우드 불필요',
  },
  // Comparison attributes: each value taken from whispernotes.app on 2026-10-17; a missing key = not stated, never false.
  // The site claims 100+ languages while the App Store lists English + 36 others, so the conservative 36+1 is not asserted; `languages` is left unset.
  compare: { speakerLabels: true, cpuUsable: false },
  reviewSlug: 'whisper-notes-review', // dedicated PromptQuorum review
  pqReview: {
    date: '2026-10-18', // iOS/iPadOS 1.8.8 per the App Store lookup API (released 2026-09-18); Mac direct-download DMG is 1.6.3 (2026-10-06)
    version: '1.8.8',
    versionSourceUrl: 'https://apps.apple.com/us/app/whisper-notes-speech-to-text/id6447090616',
  },
  lastVerifiedDate: '2026-10-18',
  lastUpstreamUpdate: '2026-10-06', // Mac DMG v1.6.3 per whispernotes.app/changelog, read 2026-10-17 (iOS app 1.8.8 on 18 Sep)
  lastUpstreamUpdateSource: 'https://whispernotes.app/changelog',
}
