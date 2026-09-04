// Local AI App Directory — MLX-LM (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlx-lm',
  name: 'MLX-LM',
  layer: 'runtime',
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 8900,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/ml-explore/mlx-examples',
  tagline: {
    en: 'Apple Silicon-native runtime by Apple research',
    de: 'Apple-Silicon-native Laufzeitumgebung von Apple Research',
    fr: 'Runtime natif Apple Silicon par Apple Research',
    ja: 'Apple Research製のApple Siliconネイティブランタイム',
    zh: 'Apple研究院出品的Apple Silicon原生运行时',
    es: 'Runtime nativo de Apple Silicon por Apple Research',
    pt: 'Runtime nativo do Apple Silicon pela Apple Research',
    ar: 'runtime أصلي لـApple Silicon من Apple Research',
    ko: 'Apple Research의 Apple Silicon 네이티브 런타임',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
