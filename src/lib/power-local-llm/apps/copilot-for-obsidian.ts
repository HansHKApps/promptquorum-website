// Local AI App Directory — Copilot for Obsidian (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'copilot-for-obsidian',
  name: 'Copilot for Obsidian',
  layer: 'tools',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API'],
  engine: 'external',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 7700,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/logancyang/obsidian-copilot',
  tagline: {
    en: 'Obsidian local LLM chat plugin',
    de: 'Obsidian-Plugin für lokalen LLM-Chat',
    fr: 'Plugin Obsidian de chat LLM local',
    ja: 'ObsidianのローカルLLMチャットプラグイン',
    zh: 'Obsidian本地LLM聊天插件',
    es: 'Plugin de chat LLM local para Obsidian',
    pt: 'Plugin de chat LLM local para Obsidian',
    ar: 'إضافة دردشة نماذج لغوية محلية لـObsidian',
    ko: 'Obsidian용 로컬 LLM 채팅 플러그인',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
