// Local AI App Directory — RisuAI (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'risuai',
  name: 'RisuAI',
  categories: ['roleplay-companions'],
  interfaces: ['web', 'mobile'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['text-generation-webui', 'OpenAI API', 'OpenRouter'],
  engine: 'external',
  license: 'GPL 3.0',
  reviewSlug: 'risuai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per risuai-review.ts (research already done for the dedicated review) + github.com/kwaroran/RisuAI: RisuAI is a frontend only, it does not run a model itself — it connects to a backend you choose. Self-hosting from source requires Node.js 20.19+ or 22.12+; no RAM/GPU minimum is documented for the client itself. Verified 2026-09-13
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
