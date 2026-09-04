// Local AI App Directory — StableSwarmUI (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'stableswarmui',
  name: 'StableSwarmUI',
  layer: 'image',
  locality: 'local',
  platforms: ['win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 4900,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'github.com/Stability-AI/StableSwarmUI',
  tagline: {
    en: 'Official Stability AI UI with multi-model support — no release since 2024 (2+ yrs)',
    de: 'Offizielles Stability-AI-UI mit Multi-Modell-Unterstützung — kein Release seit 2024 (2+ Jahren)',
    fr: 'Interface officielle Stability AI avec support multi-modèles',
    ja: 'マルチモデル対応の公式Stability AI UI — 2024年以降リリースなし（2年以上）',
    zh: 'Stability AI官方UI，支持多模型——自2024年起无新版本发布（2年以上）',
    es: 'Interfaz oficial de Stability AI con soporte multimodelo — sin lanzamientos desde 2024 (2+ años)',
    pt: 'Interface oficial da Stability AI com suporte a múltiplos modelos — sem lançamento desde 2024 (2+ anos)',
    ar: 'واجهة Stability AI الرسمية بدعم نماذج متعددة — لا إصدار منذ 2024 (عامان+)',
    ko: '멀티 모델을 지원하는 공식 Stability AI UI — 2024년 이후 릴리스 없음(2년 이상)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
