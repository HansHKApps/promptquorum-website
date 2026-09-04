// Local AI App Directory — Big-AGI (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'big-agi',
  name: 'Big-AGI',
  layer: 'webui',
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 7100,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'github.com/enricoros/big-AGI',
  tagline: {
    en: 'Advanced multi-provider frontend with personas',
    de: 'Erweitertes Multi-Provider-Frontend mit Personas',
    fr: 'Frontend multi-fournisseurs avancé avec personas',
    ja: 'ペルソナ付きの高度なマルチプロバイダーフロントエンド',
    zh: '支持Persona的高级多提供商前端',
    es: 'Frontend multi-proveedor avanzado con personas',
    pt: 'Frontend multi-provedor avançado com personas',
    ar: 'واجهة أمامية متعددة المزودين متقدمة مع شخصيات',
    ko: '페르소나가 있는 고급 멀티 제공자 프런트엔드',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
