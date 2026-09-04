// Local AI App Directory — SGLang (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sglang',
  name: 'SGLang',
  layer: 'runtime',
  locality: 'local',
  platforms: ['linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
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
  lastVerifiedDate: null, // TODO: not derivable from source article
}
