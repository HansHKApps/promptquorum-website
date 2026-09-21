// Local AI App Directory — Windsurf (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'windsurf',
  name: 'Windsurf',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Closed source',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per docs.windsurf.com system-requirements pages, checked 2026-09-13 — only OS/glibc/IDE-version minimums documented (e.g. glibc >= 2.28 on Linux), no RAM/VRAM figures; depends entirely on the LLM backend the user configures, no fixed floor of its own
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'codeium.com/windsurf',
  tagline: {
    en: 'AI-first IDE with local model integration',
    de: 'KI-first IDE mit Integration lokaler Modelle',
    fr: 'IDE IA-first avec intégration de modèles locaux',
    ja: 'ローカルモデル統合対応のAIファーストIDE',
    zh: '支持本地模型集成的AI优先IDE',
    es: 'IDE centrado en IA con integración de modelos locales',
    pt: 'IDE com foco em IA e integração de modelos locais',
    ar: 'IDE يركز على الذكاء الاصطناعي مع تكامل النماذج المحلية',
    ko: '로컬 모델 통합을 갖춘 AI 우선 IDE',
  },
  reviewSlug: 'windsurf-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { mcp: true, jetbrains: true, agentMode: true, autocomplete: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
