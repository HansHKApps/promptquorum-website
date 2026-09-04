// Local AI App Directory — RisuAI (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'risuai',
  name: 'RisuAI',
  layer: 'tools',
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: null,
  engine: 'external',
  license: 'GPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 1600,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'phone'],
  url: 'github.com/kwaroran/RisuAI',
  tagline: {
    en: 'Mobile-friendly roleplay frontend',
    de: 'Mobilfreundliches Rollenspiel-Frontend',
    fr: 'Frontend de jeu de rôle adapté au mobile',
    ja: 'モバイル対応ロールプレイフロントエンド',
    zh: '移动端友好的角色扮演前端',
    es: 'Frontend de juego de rol adaptado para móvil',
    pt: 'Frontend de roleplay adaptado para mobile',
    ar: 'واجهة لعب أدوار متكيفة للمحمول',
    ko: '모바일 친화적 롤플레이 프런트엔드',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
