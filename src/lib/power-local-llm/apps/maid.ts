// Local AI App Directory — Maid (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'maid',
  name: 'Maid',
  layer: 'mobile',
  locality: 'local',
  platforms: ['android', 'ios'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 2700,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'github.com/Mobile-Artificial-Intelligence/maid',
  tagline: {
    en: 'Open-source Flutter mobile LLM app',
    de: 'Open-Source-Flutter-App für mobile LLMs',
    fr: 'Application Flutter mobile open source pour LLM',
    ja: 'オープンソースFlutterモバイルLLMアプリ',
    zh: '开源Flutter移动端LLM应用',
    es: 'App Flutter móvil open-source para LLM',
    pt: 'App Flutter móvel open-source para LLM',
    ar: 'تطبيق Flutter محمول مفتوح المصدر للنماذج اللغوية',
    ko: 'LLM용 오픈소스 Flutter 모바일 앱',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
