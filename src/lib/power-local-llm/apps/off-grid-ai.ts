// Local AI App Directory — Off Grid AI (layer: mobile / cross-platform)
// Added manually — has a full PromptQuorum review (off-grid-ai-review),
// so tagline/url/license/platforms are sourced from that article and from
// direct verification against getoffgridai.co and GitHub, not TODO placeholders.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'off-grid-ai',
  name: 'Off Grid AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local',
  platforms: ['ios', 'android', 'mac', 'win'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // per getoffgridai.co: no numeric RAM/VRAM minimum is published; the site cites only speed metrics ("15-30 tok/s on flagship devices," NPU/Core ML acceleration on iOS), so whether it is ever CPU-only is unclear — verified 2026-09-13
  stars: 3080, // GitHub OGAM (mobile) repo star count, verified directly against github.com/off-grid-ai/OGAM
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat', 'image'],
  url: 'getoffgridai.co',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/off-grid-private-ai-chat/id6759299882',
    googlePlay: 'https://play.google.com/store/apps/details?id=ai.offgridmobile',
    github: 'https://github.com/off-grid-ai/OGAM',
    web: 'https://getoffgridai.co',
  },
  tagline: {
    en: 'Free, open-source, cross-platform local AI for iOS, Android, macOS, and Windows',
    de: 'Kostenlose, quelloffene, plattformübergreifende lokale KI für iOS, Android, macOS und Windows',
    fr: 'IA locale gratuite, open source et multiplateforme pour iOS, Android, macOS et Windows',
    ja: 'iOS・Android・macOS・Windows対応の無料オープンソースクロスプラットフォームローカルAI',
    zh: '面向iOS、Android、macOS和Windows的免费开源跨平台本地AI',
    es: 'IA local gratuita, de código abierto y multiplataforma para iOS, Android, macOS y Windows',
    pt: 'IA local gratuita, de código aberto e multiplataforma para iOS, Android, macOS e Windows',
    ar: 'ذكاء اصطناعي محلي مجاني ومفتوح المصدر وعابر للمنصات لـ iOS وAndroid وmacOS وWindows',
    ko: 'iOS, Android, macOS, Windows용 무료 오픈소스 크로스플랫폼 로컬 AI',
  },
  reviewSlug: 'off-grid-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { builtInEngine: true, ollama: true, fileChat: true, voice: true, offline: true, visionInput: true },
  lastVerifiedDate: '2026-09-12',
}
