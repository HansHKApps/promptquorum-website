// Local AI App Directory — Stable Diffusion (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'stable-diffusion',
  name: 'Stable Diffusion',
  categories: ['image-generation'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'OpenRAIL',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 27277,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image'],
  url: 'stability.ai/stable-diffusion',
  tagline: {
    en: 'Foundational open-source image generation model',
    de: 'Grundlegendes Open-Source-Bildgenerierungsmodell',
    fr: 'Modèle fondateur open source de génération d\'images',
    ja: '基盤となるオープンソース画像生成モデル',
    zh: '基础性开源图像生成模型',
    es: 'Modelo fundacional open-source de generación de imágenes',
    pt: 'Modelo fundacional open-source de geração de imagens',
    ar: 'نموذج توليد صور تأسيسي مفتوح المصدر',
    ko: '기반이 되는 오픈소스 이미지 생성 모델',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
