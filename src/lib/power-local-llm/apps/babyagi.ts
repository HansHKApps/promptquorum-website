// Local AI App Directory — BabyAGI (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'babyagi',
  name: 'BabyAGI',
  categories: ['autonomous-agents'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 22400,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent'],
  url: 'github.com/yoheinakajima/babyagi',
  tagline: {
    en: 'Lightweight autonomous agent',
    de: 'Schlanker autonomer Agent',
    fr: 'Agent autonome léger',
    ja: '軽量自律エージェント',
    zh: '轻量级自主智能体',
    es: 'Agente autónomo ligero',
    pt: 'Agente autônomo leve',
    ar: 'عميل مستقل خفيف الوزن',
    ko: '경량 자율 에이전트',
  },
  reviewSlug: 'babyagi-review-autonomous-agent', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
