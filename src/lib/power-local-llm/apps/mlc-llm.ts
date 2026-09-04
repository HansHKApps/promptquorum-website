// Local AI App Directory — MLC LLM (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlc-llm',
  name: 'MLC LLM',
  layer: 'runtime',
  locality: 'local',
  platforms: ['mac', 'win', 'linux', 'ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'mlc.ai/mlc-llm',
  tagline: {
    en: 'Mobile and edge device deployment runtime',
    de: 'Laufzeitumgebung für Mobile- und Edge-Geräte',
    fr: 'Runtime de déploiement pour appareils mobiles et edge',
    ja: 'モバイル・エッジデバイス向けデプロイランタイム',
    zh: '移动端与边缘设备部署运行时',
    es: 'Runtime de despliegue para dispositivos móviles y edge',
    pt: 'Runtime de implantação para dispositivos móveis e edge',
    ar: 'runtime للنشر على الأجهزة المحمولة والحافة',
    ko: '모바일 및 엣지 디바이스용 배포 런타임',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
