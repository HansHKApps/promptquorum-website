// Local AI App Directory — XTTS v2 (layer: tts)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'xtts-v2',
  name: 'XTTS v2',
  layer: 'tts',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'CPML',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['audio'],
  url: 'huggingface.co/coqui/XTTS-v2',
  tagline: {
    en: 'Voice cloning from short audio samples with multilingual support',
    de: 'Voice-Cloning aus kurzen Audio-Samples, mehrsprachig',
    fr: 'Clonage vocal à partir de courts échantillons audio, support multilingue',
    ja: '多言語対応の音声クローニング',
    zh: '通过简短音频样本实现多语言语音克隆',
    es: 'Clonación de voz a partir de muestras cortas con soporte multilingüe',
    pt: 'Clonagem de voz a partir de amostras curtas de áudio, suporte multilíngue',
    ar: 'استنساخ صوت مع دعم متعدد اللغات',
    ko: '다국어 지원을 갖춘 짧은 오디오 샘플 기반 음성 복제',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
