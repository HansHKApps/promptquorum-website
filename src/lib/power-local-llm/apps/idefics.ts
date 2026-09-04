// Local AI App Directory — Idefics (layer: vision)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'idefics',
  name: 'Idefics',
  layer: 'vision',
  locality: 'TODO',
  platforms: null,
  worksWith: null,
  engine: 'TODO',
  license: 'Apache 2.0',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['image'],
  url: 'huggingface.co/HuggingFaceM4/idefics',
  tagline: {
    en: 'Open-source multimodal model for vision and language',
    de: 'Open-Source-Multimodalmodell für Vision und Sprache',
    fr: 'Modèle multimodal open source pour vision et langage',
    ja: 'ビジョンと言語のためのオープンソースマルチモーダルモデル',
    zh: '支持视觉与语言的开源多模态模型',
    es: 'Modelo multimodal open-source para visión y lenguaje',
    pt: 'Modelo multimodal open-source para visão e linguagem',
    ar: 'نموذج وسائط متعددة مفتوح المصدر للرؤية واللغة',
    ko: '비전과 언어를 위한 오픈소스 멀티모달 모델',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
