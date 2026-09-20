// Local AI App Directory — Smart Connections (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'smart-connections',
  name: 'Smart Connections',
  categories: ['notes-integrations', 'local-search'],
  interfaces: ['plugin'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  // CORRECTED 2026-09-12: was 'GPL 3.0'. The project changed license in early 2026 from
  // GPLv3 to a new, developer-authored source-available "Smart Plugins License" — not an
  // OSI-approved open-source license. See https://smartconnections.app/legal/license/ and
  // the community discussion at https://github.com/brianpetro/obsidian-smart-connections/issues/1293
  // ("License change removes open source protections; contributor consent unclear").
  license: 'Source-available (Smart Plugins License)',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per smart-connections-review.ts (research already done for the dedicated review): core semantic-search feature uses a bundled, "zero-setup local model for embeddings, no API keys" that runs entirely on-device on both Obsidian desktop and mobile — no GPU or fixed RAM floor documented. Verified 2026-09-13
  stars: 5400,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/brianpetro/obsidian-smart-connections',
  reviewSlug: 'smart-connections-review',
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
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { noteApp: 'Obsidian', semanticSearch: true, privateDocs: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
