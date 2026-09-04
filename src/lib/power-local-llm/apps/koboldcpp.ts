// Local AI App Directory — KoboldCpp (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'koboldcpp',
  name: 'KoboldCpp',
  layer: 'runtime',
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 11600,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
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
  lastVerifiedDate: null, // TODO: not derivable from source article
}
