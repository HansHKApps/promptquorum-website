// Local AI App Directory — Agnai (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'agnai',
  name: 'Agnai',
  layer: 'tools',
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'agnai.chat',
  tagline: {
    en: 'Roleplay frontend with character cards',
    de: 'Rollenspiel-Frontend mit Charakter-Karten',
    fr: 'Frontend de jeu de rôle avec cartes de personnages',
    ja: 'キャラクターカード付きロールプレイフロントエンド',
    zh: '支持角色卡的角色扮演前端',
    es: 'Frontend de juego de rol con tarjetas de personajes',
    pt: 'Frontend de roleplay com cartões de personagens',
    ar: 'واجهة لعب أدوار ببطاقات شخصيات',
    ko: '캐릭터 카드가 있는 롤플레이 프런트엔드',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
