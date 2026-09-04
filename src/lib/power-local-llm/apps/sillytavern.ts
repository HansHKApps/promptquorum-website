// Local AI App Directory — SillyTavern (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sillytavern',
  name: 'SillyTavern',
  categories: ['roleplay-companions', 'general-chat-clients'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['KoboldCpp', 'Ollama', 'llama.cpp', 'text-generation-webui', 'LM Studio'],
  engine: 'external',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 33000,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'github.com/SillyTavern/SillyTavern',
  tagline: {
    en: 'Roleplay and character chat with lorebooks',
    de: 'Rollenspiel und Charakter-Chat mit Lorebooks',
    fr: 'Jeu de rôle et chat de personnages avec lorebooks',
    ja: 'ロアブック付きロールプレイとキャラクターチャット',
    zh: '支持Lorebook的角色扮演聊天界面',
    es: 'Juego de rol y chat de personajes con lorebooks',
    pt: 'Roleplay e chat de personagens com lorebooks',
    ar: 'لعب أدوار ودردشة شخصيات مع lorebooks',
    ko: '로어북이 있는 롤플레이 및 캐릭터 채팅',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
