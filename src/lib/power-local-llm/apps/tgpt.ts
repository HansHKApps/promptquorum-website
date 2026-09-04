// Local AI App Directory — tgpt (layer: cli)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tgpt',
  name: 'tgpt',
  layer: 'cli',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'GPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 3300,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat'],
  url: 'github.com/aandrew-me/tgpt',
  tagline: {
    en: 'Terminal wrapper for local LLM chat',
    de: 'Terminal-Wrapper für lokalen LLM-Chat',
    fr: 'Wrapper terminal pour chat avec LLM local',
    ja: 'ローカルLLMチャット用ターミナルラッパー',
    zh: '本地LLM聊天终端封装工具',
    es: 'Wrapper de terminal para chat con LLM local',
    pt: 'Wrapper de terminal para chat com LLM local',
    ar: 'غلاف طرفية لدردشة النماذج اللغوية المحلية',
    ko: '로컬 LLM 채팅용 터미널 래퍼',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
