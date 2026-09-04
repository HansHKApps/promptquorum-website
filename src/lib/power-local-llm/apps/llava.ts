// Local AI App Directory — LLaVA (layer: vision)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llava',
  name: 'LLaVA',
  categories: ['vision-ocr'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 25014,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image'],
  url: 'llava-vl.github.io',
  tagline: {
    en: 'Local vision + language model for image understanding',
    de: 'Lokales Vision-und-Sprache-Modell für Bildverständnis',
    fr: 'Modèle local vision + langage pour la compréhension d\'images',
    ja: 'ローカルビジョン + 言語モデル',
    zh: '本地视觉+语言模型，用于图像理解',
    es: 'Modelo local de visión + lenguaje para comprensión de imágenes',
    pt: 'Modelo local de visão + linguagem para compreensão de imagens',
    ar: 'نموذج رؤية + لغة محلي لفهم الصور',
    ko: '이미지 이해를 위한 로컬 비전 + 언어 모델',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
