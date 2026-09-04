// Local AI App Directory — Piper TTS (layer: tts)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'piper-tts',
  name: 'Piper TTS',
  layer: 'tts',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 11300,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/rhasspy/piper',
  tagline: {
    en: 'Lightweight multilingual text-to-speech, runs on CPU',
    de: 'Schlanke mehrsprachige Text-zu-Sprache-Lösung, läuft auf der CPU',
    fr: 'Synthèse vocale multilingue légère, fonctionne sur CPU',
    ja: '軽量ローカルテキスト読み上げ',
    zh: '轻量级多语言文字转语音，可在CPU上运行',
    es: 'Texto a voz multilingüe ligero, funciona en CPU',
    pt: 'Síntese de texto para voz multilíngue e leve, roda em CPU',
    ar: 'تحويل نص إلى كلام محلي خفيف الوزن',
    ko: 'CPU에서 동작하는 경량 다국어 음성 합성',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
