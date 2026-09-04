// Local AI App Directory — ExLlamaV2 (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'exllamav2',
  name: 'ExLlamaV2',
  layer: 'runtime',
  locality: 'local',
  platforms: ['win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 4600,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'github.com/turboderp-org/exllamav2',
  tagline: {
    en: 'Fast quantized inference optimized for RTX GPUs',
    de: 'Schnelle quantisierte Inferenz, optimiert für RTX-GPUs',
    fr: 'Inférence quantifiée rapide, optimisée pour les GPU RTX',
    ja: 'RTX GPU最適化の高速量子化推論',
    zh: '针对RTX GPU优化的快速量化推理',
    es: 'Inferencia cuantizada rápida optimizada para GPUs RTX',
    pt: 'Inferência quantizada rápida otimizada para GPUs RTX',
    ar: 'استدلال مُكمَّم سريع محسَّن لـGPUs RTX',
    ko: 'RTX GPU에 최적화된 빠른 양자화 추론',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
