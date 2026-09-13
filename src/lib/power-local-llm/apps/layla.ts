// Local AI App Directory — Layla (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'layla',
  name: 'Layla',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: ['LM Studio', 'Ollama', 'vLLM', 'OpenAI API'],
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: { ramGb: 6, vramGb: null, cpuOnly: null }, // per layla-network.ai's own published minimum ("any Android or iOS phone from the last 4-5 years with at least 6GB of RAM and an ARM64 processor"; 8GB+ for flagship/best performance); mobile SoC uses on-device NPU/GPU rather than discrete VRAM, so cpuOnly doesn't cleanly apply, verified 2026-09-13
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
  reviewSlug: 'layla-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
