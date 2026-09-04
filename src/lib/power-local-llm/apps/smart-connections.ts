// Local AI App Directory — Smart Connections (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'smart-connections',
  name: 'Smart Connections',
  layer: 'tools',
  categories: ['notes-integrations', 'local-search'],
  interfaces: ['plugin'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'GPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 5400,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/brianpetro/obsidian-smart-connections',
  tagline: {
    en: 'Obsidian semantic search and chat plugin',
    de: 'Obsidian-Plugin für semantische Suche und Chat',
    fr: 'Plugin Obsidian de recherche sémantique et chat',
    ja: 'Obsidianのセマンティック検索・チャットプラグイン',
    zh: 'Obsidian语义搜索与聊天插件',
    es: 'Plugin de búsqueda semántica y chat para Obsidian',
    pt: 'Plugin de busca semântica e chat para Obsidian',
    ar: 'إضافة بحث دلالي ودردشة لـObsidian',
    ko: 'Obsidian용 의미론적 검색 및 채팅 플러그인',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
