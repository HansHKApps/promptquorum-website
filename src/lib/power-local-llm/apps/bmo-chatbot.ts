// Local AI App Directory — BMO Chatbot (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'bmo-chatbot',
  name: 'BMO Chatbot',
  layer: 'tools',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 532,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/longy2k/obsidian-bmo-chatbot',
  tagline: {
    en: 'Obsidian chatbot with local LLM',
    de: 'Obsidian-Chatbot mit lokalem LLM',
    fr: 'Chatbot Obsidian avec LLM local',
    ja: 'ローカルLLM付きObsidianチャットボット',
    zh: '集成本地LLM的Obsidian聊天机器人',
    es: 'Chatbot de Obsidian con LLM local',
    pt: 'Chatbot do Obsidian com LLM local',
    ar: 'chatbot Obsidian مع نموذج لغوي محلي',
    ko: '로컬 LLM이 있는 Obsidian 챗봇',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
