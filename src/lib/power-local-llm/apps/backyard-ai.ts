// Local AI App Directory — Backyard AI (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'backyard-ai',
  name: 'Backyard AI',
  categories: ['roleplay-companions'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac', 'win'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // checked backyard.ai, backyard.ai/docs, and the app landing page 2026-09-13 — no official minimum RAM/VRAM/CPU-only specs published (third-party summaries exist but aren't sourced to Backyard AI's own docs); left unresearched rather than fabricated
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'backyard.ai',
  tagline: {
    en: 'Character chat and roleplay desktop client',
    de: 'Desktop-Client für Charakter-Chat und Rollenspiel',
    fr: 'Client bureau pour le chat de personnages et le jeu de rôle',
    ja: 'キャラクターチャットとロールプレイ向けデスクトップクライアント',
    zh: '角色聊天与角色扮演桌面客户端',
    es: 'Cliente de escritorio para chat de personajes y juego de rol',
    pt: 'Cliente de desktop para chat de personagens e roleplay',
    ar: 'عميل سطح مكتب لدردشة الشخصيات ولعب الأدوار',
    ko: '캐릭터 채팅 및 롤플레이용 데스크톱 클라이언트',
  },
  reviewSlug: 'backyard-ai-review-local-roleplay-2026', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { lorebooks: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
