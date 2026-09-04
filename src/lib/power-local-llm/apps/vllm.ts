// Local AI App Directory — vLLM (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'vllm',
  name: 'vLLM',
  layer: 'runtime',
  locality: 'local',
  platforms: ['linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 90800,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/vllm-project/vllm',
  tagline: {
    en: 'High-throughput serving for multi-user GPU deployments',
    de: 'Hochdurchsatz-Serving für Multi-User-GPU-Deployments',
    fr: 'Serving haute performance pour déploiements GPU multi-utilisateurs',
    ja: 'マルチユーザーGPUデプロイ向け高スループットサービング',
    zh: '多用户GPU部署的高吞吐量推理服务',
    es: 'Serving de alto rendimiento para despliegues GPU multiusuario',
    pt: 'Serving de alto desempenho para implantações GPU multiusuário',
    ar: 'خدمة عالية الأداء للنشر متعدد المستخدمين على GPU',
    ko: '멀티유저 GPU 배포를 위한 고성능 서빙',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
