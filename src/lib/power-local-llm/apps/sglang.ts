// Local AI App Directory — SGLang (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sglang',
  name: 'SGLang',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per docs.sglang.io install docs: primary path requires CUDA 13 and an NVIDIA GPU (FlashInfer needs sm75+, e.g. T4/A10/A100/L4/L40S/H100); no single minimum VRAM is stated since it scales with model size (community reports commonly cite 16-40GB+). SGLang's own README also lists AMD GPU, Intel Xeon CPU, Google TPU, and Ascend NPU as supported backends, so CPU-only operation is possible via a non-default backend. Verified 2026-09-13
  stars: 33500,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/sgl-project/sglang',
  tagline: {
    en: 'Structured inference serving for agent pipelines',
    de: 'Strukturiertes Inferenz-Serving für Agenten-Pipelines',
    fr: 'Serving d\'inférence structurée pour pipelines d\'agents',
    ja: 'エージェントパイプライン向け構造化推論サービング',
    zh: '面向智能体流水线的结构化推理服务',
    es: 'Serving de inferencia estructurada para pipelines de agentes',
    pt: 'Serving de inferência estruturada para pipelines de agentes',
    ar: 'خدمة استدلال مُهيكل لخطوط أنابيب العملاء الذكيين',
    ko: '에이전트 파이프라인을 위한 구조화 추론 서빙',
  },
  reviewSlug: 'sglang-explained', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
