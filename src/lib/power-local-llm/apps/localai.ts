// Local AI App Directory — LocalAI (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'localai',
  name: 'LocalAI',
  layer: 'runtime',
  locality: 'TODO',
  platforms: null,
  worksWith: null,
  engine: 'TODO',
  license: 'MIT',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['serve'],
  url: 'localai.io',
  tagline: {
    en: 'Drop-in OpenAI API replacement supporting multiple backends',
    de: 'Drop-in-Ersatz für die OpenAI API, unterstützt mehrere Backends',
    fr: 'Remplacement drop-in de l\'API OpenAI, compatible avec plusieurs backends',
    ja: 'OpenAI APIのドロップイン代替。複数のバックエンドに対応',
    zh: '支持多后端的OpenAI API直接替代方案',
    es: 'Reemplazo drop-in de la API de OpenAI que soporta múltiples backends',
    pt: 'Substituto drop-in da API OpenAI que suporta múltiplos backends',
    ar: 'بديل مباشر لـAPI OpenAI يدعم backends متعددة',
    ko: '여러 백엔드를 지원하는 OpenAI API 드롭인 대체',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
