// Local AI App Directory — Google AI Edge Gallery (layer: mobile)
// New entry — added alongside the google-ai-edge-gallery-review article.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'google-ai-edge-gallery',
  name: 'Google AI Edge Gallery',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which Gemma size is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'apps.apple.com/us/app/google-ai-edge-gallery/id6749645337',
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
  lastVerifiedDate: '2026-09-12',
}
