// Local AI App Directory — faster-whisper (layer: stt)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'faster-whisper',
  name: 'faster-whisper',
  categories: ['speech-to-text'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 25200,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/SYSTRAN/faster-whisper',
  tagline: {
    en: 'Fast Whisper transcription via CTranslate2 quantization',
    de: 'Schnelle Whisper-Transkription via CTranslate2-Quantisierung',
    fr: 'Transcription Whisper rapide via quantification CTranslate2',
    ja: 'CTranslate2を使った高速Whisper文字起こし',
    zh: '通过CTranslate2实现的快速Whisper转录',
    es: 'Transcripción rápida de Whisper mediante cuantización con CTranslate2',
    pt: 'Transcrição rápida do Whisper via quantização CTranslate2',
    ar: 'نسخ Whisper سريع عبر تكميم CTranslate2',
    ko: 'CTranslate2 양자화를 통한 빠른 Whisper 전사',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
