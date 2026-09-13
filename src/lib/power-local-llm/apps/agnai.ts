// Local AI App Directory — Agnai (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'agnai',
  name: 'Agnai',
  categories: ['roleplay-companions'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['KoboldAI'],
  engine: 'external',
  license: 'AGPL-3.0',
  reviewSlug: 'agnai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per github.com/agnaistic/agnai README: self-host deps are Node.js/MongoDB/Redis only, no stated RAM/GPU floor — Agnai is a chat frontend that connects to an external backend (KoboldAI, NovelAI, OpenAI, etc.), the frontend itself needs no GPU; verified 2026-09-13
  stars: 776,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
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
