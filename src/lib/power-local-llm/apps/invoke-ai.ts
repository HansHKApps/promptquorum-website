// Local AI App Directory — Invoke AI (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'invoke-ai',
  name: 'Invoke AI',
  categories: ['image-generation'],
  interfaces: ['web'],
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: { ramGb: 8, vramGb: 4, cpuOnly: false }, // per invoke.ai/start-here/system-requirements/ official hardware table: SD1.5 minimum tier is Nvidia 10xx+, 4GB VRAM, 8GB RAM; CPU-only mode exists only on Linux ARM64 and is documented as "slow without a GPU", verified 2026-09-13
  stars: 28100,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image'],
  url: 'invoke.ai',
  tagline: {
    en: 'Professional-grade image generation with intuitive UI — active, release 1wk ago',
    de: 'Professionelle Bildgenerierung mit intuitivem UI — aktiv, Release vor 1 Woche',
    fr: 'Génération d\'images de qualité professionnelle avec interface intuitive',
    ja: '直感的なUIを備えたプロ品質の画像生成 — アクティブ、1週間前にリリース',
    zh: '专业级图像生成，界面直观——活跃维护，1周前发布新版本',
    es: 'Generación de imágenes de nivel profesional con interfaz intuitiva — activo, lanzamiento hace 1 sem',
    pt: 'Geração de imagens de nível profissional com interface intuitiva — ativo, lançamento há 1 semana',
    ar: 'توليد صور احترافي بواجهة سهلة الاستخدام — نشط، آخر إصدار قبل أسبوع',
    ko: '직관적인 UI를 갖춘 전문가급 이미지 생성 — 활발히 유지 관리, 릴리스 1주 전',
  },
  reviewSlug: 'invokeai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
