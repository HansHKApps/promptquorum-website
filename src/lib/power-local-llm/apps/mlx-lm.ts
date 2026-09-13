// Local AI App Directory — MLX-LM (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlx-lm',
  name: 'MLX-LM',
  categories: ['inference-engines'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // per github.com/ml-explore/mlx-lm README: MLX-LM is "for generating text and fine-tuning large language models on Apple silicon with MLX," requiring an Apple Silicon Mac's GPU/unified memory (no VRAM in the traditional sense); docs warn "models which are large relative to the total RAM available on the machine can be slow" and suggest raising the wired-memory limit on macOS 15+ rather than publishing a fixed minimum, verified 2026-09-13
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
  reviewSlug: 'mlx-lm-explained', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
