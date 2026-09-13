// Local AI App Directory — KoboldCpp (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'koboldcpp',
  name: 'KoboldCpp',
  categories: ['inference-engines', 'general-chat-clients'],
  interfaces: ['cli', 'web'],
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // per github.com/LostRuins/koboldcpp README: "Runs on CPU or GPU, supports full or partial offloading" — no fixed RAM/VRAM minimum stated, floor depends entirely on the GGUF model and context size loaded, verified 2026-09-13
  stars: 11600,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/LostRuins/koboldcpp',
  tagline: {
    en: 'Lightweight llama.cpp wrapper with built-in UI',
    de: 'Schlanker llama.cpp-Wrapper mit integrierter Benutzeroberfläche',
    fr: 'Wrapper llama.cpp léger avec interface intégrée',
    ja: 'UI内蔵の軽量llama.cppラッパー',
    zh: '内置UI的轻量级llama.cpp封装',
    es: 'Wrapper ligero de llama.cpp con interfaz integrada',
    pt: 'Wrapper leve de llama.cpp com interface integrada',
    ar: 'غلاف خفيف لـllama.cpp مع واجهة مدمجة',
    ko: '내장 인터페이스가 포함된 llama.cpp 경량 래퍼',
  },
  reviewSlug: 'koboldcpp-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
