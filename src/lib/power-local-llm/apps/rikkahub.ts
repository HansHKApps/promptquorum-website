// Local AI App Directory — RikkaHub (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'rikkahub',
  name: 'RikkaHub',
  layer: 'mobile',
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 7400,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'github.com/rikkahub/rikkahub',
  tagline: {
    en: 'Open-source Android local AI',
    de: 'Open-Source Android-App für lokale KI',
    fr: 'IA locale Android open source',
    ja: 'オープンソースAndroidローカルAI',
    zh: '开源Android本地AI',
    es: 'IA local Android de código abierto',
    pt: 'IA local Android de código aberto',
    ar: 'ذكاء اصطناعي محلي Android مفتوح المصدر',
    ko: '오픈소스 Android 로컬 AI',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
