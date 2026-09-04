// Local AI App Directory — Cherry Studio (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cherry-studio',
  name: 'Cherry Studio',
  layer: 'desktop',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 51430,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'cherry-ai.com',
  tagline: {
    en: 'Multi-provider desktop AI with extensive customization',
    de: 'Multi-Provider-Desktop-KI mit umfangreicher Anpassbarkeit',
    fr: 'IA bureau multi-fournisseurs avec personnalisation étendue',
    ja: '豊富なカスタマイズのマルチプロバイダーデスクトップAI',
    zh: '支持多提供商、高度可定制的桌面AI工具',
    es: 'IA de escritorio multi-proveedor con personalización extensa',
    pt: 'IA de desktop multi-provedor com personalização extensiva',
    ar: 'ذكاء اصطناعي متعدد المزودين لسطح المكتب مع تخصيص واسع',
    ko: '광범위한 커스터마이징을 갖춘 멀티 제공자 데스크톱 AI',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
