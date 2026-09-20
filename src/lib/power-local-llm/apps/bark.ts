// Local AI App Directory — Bark (layer: tts)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'bark',
  name: 'Bark',
  categories: ['text-to-speech'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: 12, cpuOnly: true }, // per github.com/suno-ai/bark README: "The full version of Bark requires around 12GB of VRAM" (SUNO_USE_SMALL_MODELS=True fits 8GB, down to ~2GB with SUNO_OFFLOAD_CPU); also runs CPU-only (PyTorch 2.0+), "significantly slower"; verified 2026-09-13
  stars: 39300,
  addedDate: '2026-09-04',
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
  reviewSlug: 'bark-tts-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { languages: 13, voiceCloning: false },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
