// Local AI App Directory — Whisper.cpp (layer: stt)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'whisper-cpp',
  name: 'Whisper.cpp',
  layer: 'stt',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 53400,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/ggerganov/whisper.cpp',
  tagline: {
    en: 'Local speech recognition optimized for CPU and GPU',
    de: 'Lokale Spracherkennung, optimiert für CPU und GPU',
    fr: 'Reconnaissance vocale locale, fonctionne sur CPU ou GPU',
    ja: 'CPUまたはGPUで動作するローカル音声認識',
    zh: '本地语音识别，支持CPU或GPU运行',
    es: 'Reconocimiento de voz local optimizado para CPU y GPU',
    pt: 'Reconhecimento de voz local, funciona em CPU ou GPU',
    ar: 'التعرف على الكلام محلياً، يعمل على CPU أو GPU',
    ko: 'CPU 및 GPU에 최적화된 로컬 음성 인식',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
