// Local AI App Directory — Letta (formerly MemGPT) (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'letta',
  name: 'Letta (formerly MemGPT)',
  layer: 'agent',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'letta.com',
  tagline: {
    en: 'Long-term memory agents',
    de: 'Agenten mit Langzeitgedächtnis',
    fr: 'Agents avec mémoire à long terme',
    ja: '長期記憶エージェント',
    zh: '长期记忆智能体',
    es: 'Agentes con memoria a largo plazo',
    pt: 'Agentes com memória de longo prazo',
    ar: 'عملاء ذكيون مع ذاكرة طويلة الأمد',
    ko: '장기 기억을 갖춘 에이전트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
