// Local AI App Directory — Second Me (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'second-me',
  name: 'Second Me',
  layer: 'tools',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'both',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 16000,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'github.com/mindverse/Second-Me',
  tagline: {
    en: 'Train a personalized AI self on your own data',
    de: 'Trainieren Sie ein personalisiertes KI-Ich mit eigenen Daten',
    fr: 'Entraînez un moi IA personnalisé sur vos propres données',
    ja: '自分のデータでパーソナライズされたAI自己を学習',
    zh: '用你自己的数据训练个性化AI分身',
    es: 'Entrena un yo de IA personalizado con tus propios datos',
    pt: 'Treine um eu de IA personalizado com seus próprios dados',
    ar: 'درّب نسخة ذكاء اصطناعي شخصية باستخدام بياناتك الخاصة',
    ko: '자신의 데이터로 개인화된 AI 자아 학습',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
