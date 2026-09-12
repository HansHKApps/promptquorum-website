// Local AI App Directory — MLC Chat (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlc-chat',
  name: 'MLC Chat',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 23134,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'mlc.ai/mlc-llm',
  tagline: {
    en: 'Cross-platform mobile LLM runtime',
    de: 'Plattformübergreifende Mobile-LLM-Laufzeitumgebung',
    fr: 'Runtime LLM mobile multiplateforme',
    ja: 'クロスプラットフォームモバイルLLMランタイム',
    zh: '跨平台移动端LLM运行时',
    es: 'Runtime LLM móvil multiplataforma',
    pt: 'Runtime LLM móvel multiplataforma',
    ar: 'runtime نماذج لغوية محمولة متعدد المنصات',
    ko: '크로스플랫폼 모바일 LLM 런타임',
  },
  reviewSlug: 'mlc-chat-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: '2026-09-07', // Verified against the App Store listing, MLC's GitHub Android APK release, and mlc-ai/mlc-llm docs — see /power-local-llm/mlc-chat-review
}
