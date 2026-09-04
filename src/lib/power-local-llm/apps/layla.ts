// Local AI App Directory — Layla (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'layla',
  name: 'Layla',
  layer: 'mobile',
  locality: 'local',
  platforms: ['android'],
  worksWith: ['LM Studio', 'Ollama', 'vLLM', 'OpenAI API'],
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'layla-network.ai',
  tagline: {
    en: 'Android-first local LLM app',
    de: 'Android-first App für lokale LLMs',
    fr: 'Application LLM local d\'abord Android',
    ja: 'Android優先のローカルLLMアプリ',
    zh: 'Android优先的本地LLM应用',
    es: 'App LLM local orientada a Android',
    pt: 'App LLM local orientada a Android',
    ar: 'تطبيق نماذج لغوية محلية موجَّه لـAndroid',
    ko: 'Android 중심 로컬 LLM 앱',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
