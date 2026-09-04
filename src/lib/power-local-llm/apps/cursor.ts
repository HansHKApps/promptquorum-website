// Local AI App Directory — Cursor (local mode) (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cursor',
  name: 'Cursor (local mode)',
  layer: 'ide',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['code'],
  url: 'cursor.com',
  tagline: {
    en: 'AI-first code editor with local model support',
    de: 'KI-first Code-Editor mit Unterstützung lokaler Modelle',
    fr: 'Éditeur de code centré IA avec support de modèles locaux',
    ja: 'ローカルモデル対応のAIファーストコードエディター',
    zh: '支持本地模型的AI优先代码编辑器',
    es: 'Editor de código centrado en IA con soporte para modelos locales',
    pt: 'Editor de código focado em IA com suporte para modelos locais',
    ar: 'محرر كود يركز على الذكاء الاصطناعي مع دعم النماذج المحلية',
    ko: '로컬 모델 지원을 갖춘 AI 중심 코드 편집기',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
