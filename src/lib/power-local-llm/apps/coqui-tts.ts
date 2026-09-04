// Local AI App Directory — Coqui TTS (layer: tts)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'coqui-tts',
  name: 'Coqui TTS',
  categories: ['text-to-speech'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MPL 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 2300,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/idiap/coqui-ai-TTS',
  tagline: {
    en: 'Open-source voice synthesis with multiple model architectures',
    de: 'Open-Source-Sprachsynthese mit mehreren Modellarchitekturen',
    fr: 'Synthèse vocale open source avec plusieurs options de modèles',
    ja: '複数モデル対応オープンソース音声合成',
    zh: '支持多种模型架构的开源语音合成',
    es: 'Síntesis de voz open-source con múltiples arquitecturas de modelo',
    pt: 'Síntese de voz open-source com múltiplas arquiteturas de modelo',
    ar: 'تركيب صوت مفتوح المصدر مع خيارات نماذج متعددة',
    ko: '여러 모델 아키텍처를 갖춘 오픈소스 음성 합성',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
