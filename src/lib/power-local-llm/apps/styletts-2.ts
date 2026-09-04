// Local AI App Directory — StyleTTS 2 (layer: tts)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'styletts-2',
  name: 'StyleTTS 2',
  layer: 'tts',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 6300,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/yl4579/StyleTTS2',
  tagline: {
    en: 'High-quality natural-sounding TTS with style control',
    de: 'Hochwertige, natürlich klingende TTS mit Stilsteuerung',
    fr: 'TTS naturelle haute qualité avec contrôle de style',
    ja: '高品質な自然音声TTS',
    zh: '高质量自然音色TTS，支持风格控制',
    es: 'TTS de sonido natural y alta calidad con control de estilo',
    pt: 'TTS de alta qualidade e som natural com controle de estilo',
    ar: 'TTS عالية الجودة وطبيعية الصوت',
    ko: '스타일 제어를 갖춘 고품질 자연스러운 TTS',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
