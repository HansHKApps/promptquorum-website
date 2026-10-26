// Local AI App Directory — Google AI Edge Gallery (layer: mobile)
// New entry — added alongside the google-ai-edge-gallery-review article.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'google-ai-edge-gallery',
  name: 'Google AI Edge Gallery',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // left null — checked github.com/google-ai-edge/gallery README + GitHub Issue #423 ("what are the minimal requirements?") + App Store listing: no official minimum device RAM stated; on-device RAM need scales with the Gemma variant loaded (E2B vs E4B), checked 2026-09-13
  stars: null,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'github.com/google-ai-edge/gallery', // no separate product site: the App Store "Developer website" link points at this repo (checked 2026-10-26)
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.google.ai.edge.gallery',
    github: 'https://github.com/google-ai-edge/gallery',
  },
  installEffort: 'installer',
  installEvidence: 'App Store listing (iOS 17+, Apple-silicon Mac), Google Play listing (README: Android 12+), GitHub Releases 1.0.20 with ai-edge-gallery.apk plus per-chipset APKs, macOS DMG GoogleAIEdgeGallery-0.1.0.dmg linked from the README (HTTP 200); checked 2026-10-26',
  tagline: {
    en: 'Google\'s free on-device Gemma 4 app for iPhone',
    de: 'Googles kostenlose On-Device-Gemma-4-App für iPhone',
    fr: 'App Gemma 4 gratuite de Google sur l\'appareil pour iPhone',
    ja: 'iPhone向けGoogleの無料オンデバイスGemma 4アプリ',
    zh: '谷歌面向iPhone的免费设备端Gemma 4应用',
    es: 'App gratuita de Google con Gemma 4 en el dispositivo para iPhone',
    pt: 'App gratuito da Google com Gemma 4 no dispositivo para iPhone',
    ar: 'تطبيق Gemma 4 المجاني على الجهاز من جوجل لـiPhone',
    ko: 'iPhone용 구글의 무료 온디바이스 Gemma 4 앱',
  },
  reviewSlug: 'google-ai-edge-gallery-review', // dedicated PromptQuorum review
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { voice: true, offline: true, importModels: true, modelDownloads: true, visionInput: true },
  pqReview: { date: '2026-10-26', version: '1.0.13', versionSourceUrl: 'https://apps.apple.com/us/app/google-ai-edge-gallery/id6749645337' }, // iOS App Store version history: 1.0.13 on Oct 8 (listing shows no year); Android GitHub release is 1.0.20 (2026-10-06)
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-26', // GitHub API (latest release 1.0.20 on 2026-10-06; repo pushed 2026-10-26, whichever is newer), read 2026-10-26
  lastUpstreamUpdateSource: 'https://github.com/google-ai-edge/gallery',
}
