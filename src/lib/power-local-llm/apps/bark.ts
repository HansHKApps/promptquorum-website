// Local AI App Directory — Bark (layer: tts)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'bark',
  name: 'Bark',
  layer: 'tts',
  locality: 'TODO',
  platforms: null,
  worksWith: null,
  engine: 'TODO',
  license: 'MIT',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 39300,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/suno-ai/bark',
  tagline: {
    en: 'Generative text-to-speech with sound effects and music',
    de: 'Generative Sprachsynthese mit Soundeffekten und Musik',
    fr: 'Synthèse vocale générative avec effets sonores et musique',
    ja: '非言語音を含む生成音声合成',
    zh: '支持非语音声音的生成式语音',
    es: 'Texto a voz generativo con efectos de sonido y música',
    pt: 'Texto para voz generativo com efeitos sonoros e música',
    ar: 'صوت توليدي مع أصوات غير كلامية',
    ko: '음향 효과와 음악을 포함한 생성적 음성 합성',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
