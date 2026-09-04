// Local AI App Directory — Quivr (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'quivr',
  name: 'Quivr',
  layer: 'rag',
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: null,
  engine: 'external',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 39500,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'github.com/QuivrHQ/quivr',
  tagline: {
    en: 'Self-hosted personal knowledge assistant',
    de: 'Selbst gehosteter persönlicher Wissensassistent',
    fr: 'Assistant de connaissance personnelle auto-hébergé',
    ja: 'セルフホスト型個人知識アシスタント',
    zh: '自托管的个人知识助手',
    es: 'Asistente de conocimiento personal autoalojado',
    pt: 'Assistente de conhecimento pessoal auto-hospedado',
    ar: 'مساعد معرفة شخصي مستضاف ذاتياً',
    ko: '셀프호스팅 개인 지식 어시스턴트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
