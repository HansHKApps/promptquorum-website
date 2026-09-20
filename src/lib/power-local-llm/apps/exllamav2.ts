// Local AI App Directory — ExLlamaV2 (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'exllamav2',
  name: 'ExLlamaV2',
  categories: ['inference-engines'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: 8, cpuOnly: false }, // per github.com/turboderp-org/exllamav2 README: requires an NVIDIA CUDA GPU (no CPU inference path); README's own quantization tiers cite 13B fitting in 8GB VRAM at 2.65bpw as the smallest documented working config, verified 2026-09-13
  stars: 4600,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
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
  reviewSlug: 'exllamav2-explained', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v0.3.2', versionSourceUrl: 'https://github.com/turboderp-org/exllamav2/releases/tag/v0.3.2' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
