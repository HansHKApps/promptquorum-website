// Local AI App Directory — Sourcegraph Cody (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sourcegraph-cody',
  name: 'Sourcegraph Cody',
  layer: 'ide',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'sourcegraph.com/cody',
  tagline: {
    en: 'AI code assistant with local model support',
    de: 'KI-Code-Assistent mit Unterstützung lokaler Modelle',
    fr: 'Assistant de code IA avec support de modèles locaux',
    ja: 'ローカルモデル対応のAIコーディングアシスタント',
    zh: '支持本地模型的AI编程助手',
    es: 'Asistente de código IA con soporte para modelos locales',
    pt: 'Assistente de código IA com suporte a modelos locais',
    ar: 'مساعد كود بالذكاء الاصطناعي مع دعم النماذج المحلية',
    ko: '로컬 모델을 지원하는 AI 코드 어시스턴트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
