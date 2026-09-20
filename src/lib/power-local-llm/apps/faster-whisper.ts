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
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per github.com/SYSTRAN/faster-whisper README: CPU inference (with int8 quantization) is a first-class documented mode alongside GPU; no fixed RAM/VRAM minimum stated, usage scales with model size chosen, verified 2026-09-13
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
  reviewSlug: 'faster-whisper-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v1.2.1', versionSourceUrl: 'https://github.com/SYSTRAN/faster-whisper/releases/tag/v1.2.1' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { cpuUsable: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
