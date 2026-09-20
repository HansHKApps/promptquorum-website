// Local AI App Directory — BMO Chatbot (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'bmo-chatbot',
  name: 'BMO Chatbot',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'LocalAI'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // Obsidian plugin — README (github.com/longy2k/obsidian-bmo-chatbot) only requires Obsidian plus a self-hosted API (Ollama/LM Studio) or a cloud API key; no hardware floor of its own, verified 2026-09-13
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
  reviewSlug: 'bmo-chatbot-review', // dedicated PromptQuorum review
  pqReview: { date: '2026-09-20', version: '2.3.3', versionSourceUrl: 'https://github.com/longy2k/obsidian-bmo-chatbot/releases/tag/2.3.3' },
}
