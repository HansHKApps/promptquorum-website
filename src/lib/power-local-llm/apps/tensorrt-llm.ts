// Local AI App Directory — TensorRT-LLM (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tensorrt-llm',
  name: 'TensorRT-LLM',
  layer: 'runtime',
  locality: 'local',
  platforms: ['win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 14500,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/NVIDIA/TensorRT-LLM',
  tagline: {
    en: 'NVIDIA-optimized inference for enterprise GPU rigs',
    de: 'NVIDIA-optimierte Inferenz für Enterprise-GPU-Setups',
    fr: 'Inférence optimisée NVIDIA pour configurations GPU enterprise',
    ja: 'エンタープライズGPU向けNVIDIA最適化推論',
    zh: 'NVIDIA针对企业级GPU优化的推理方案',
    es: 'Inferencia optimizada por NVIDIA para configuraciones GPU enterprise',
    pt: 'Inferência otimizada pela NVIDIA para configurações GPU enterprise',
    ar: 'استدلال محسَّن من NVIDIA لإعدادات GPU المؤسسية',
    ko: '엔터프라이즈 GPU 구성을 위한 NVIDIA 최적화 추론',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
