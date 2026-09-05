// Local AI App Directory — Khoj (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'khoj',
  name: 'Khoj',
  categories: ['document-pdf-chat', 'personal-assistants'],
  interfaces: ['web', 'desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'OpenAI API'],
  engine: 'both',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 37068,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'khoj.dev',
  tagline: {
    en: 'Personal AI second brain, syncs with Obsidian and Notion',
    de: 'Persönliches KI-Second-Brain, synchronisiert mit Obsidian und Notion',
    fr: 'Second cerveau IA personnel, synchronisé avec Obsidian et Notion',
    ja: 'ObsidianとNotionと同期する個人AI第二の脳',
    zh: '个人AI第二大脑，可与Obsidian和Notion同步',
    es: 'Segundo cerebro IA personal, sincronizado con Obsidian y Notion',
    pt: 'Segundo cérebro IA pessoal, sincronizado com Obsidian e Notion',
    ar: 'دماغ ذكاء اصطناعي ثانٍ شخصي، متزامن مع Obsidian وNotion',
    ko: 'Obsidian 및 Notion과 동기화되는 개인 AI 제2의 뇌',
  },
  reviewSlug: 'khoj-ai-second-brain-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
