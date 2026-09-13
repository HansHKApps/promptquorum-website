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
  hardware: { ramGb: null, vramGb: 10, cpuOnly: false }, // per github.com/CompVis/stable-diffusion README: "the model is relatively lightweight and runs on a GPU with at least 10GB VRAM" (base SD v1 model card guidance); no RAM figure documented. Verified 2026-09-13
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
  reviewSlug: 'stable-diffusion-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
