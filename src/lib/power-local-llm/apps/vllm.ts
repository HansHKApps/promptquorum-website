// Local AI App Directory — vLLM (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'vllm',
  name: 'vLLM',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // per docs.vllm.ai/en/latest/getting_started/installation/gpu/ — requires a GPU with compute capability >= 7.5 for the NVIDIA backend (e.g. T4, RTX 20-series, A100, L4, H100), with separate AMD (ROCm 6.3+) and Intel GPU backends; no CPU-only production path and no fixed VRAM figure in GB since it depends on the model served, verified 2026-09-13
  stars: 90800,
  addedDate: '2026-09-04',
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
  reviewSlug: 'vllm-explained', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { openaiApi: true, nvidiaGpu: true, amdGpu: true, cpuInference: true, distributed: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
