// Local AI App Directory — Jarvis (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'jarvis',
  name: 'Jarvis',
  layer: 'desktop',
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Free (open source)',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['audio', 'chat'],
  url: 'jarvis-mac.lovable.app',
  tagline: {
    en: 'macOS voice assistant, fully offline (Llama, Whisper, Kokoro)',
    de: 'macOS-Sprachassistent, komplett offline (Llama, Whisper, Kokoro)',
    fr: 'Assistant vocal macOS, 100% hors ligne (Llama, Whisper, Kokoro)',
    ja: 'macOS音声アシスタント、完全オフライン（Llama、Whisper、Kokoro）',
    zh: 'macOS 语音助手，完全离线运行（Llama、Whisper、Kokoro）',
    es: 'Asistente de voz para macOS, totalmente sin conexión (Llama, Whisper, Kokoro)',
    pt: 'Assistente de voz para macOS, totalmente offline (Llama, Whisper, Kokoro)',
    ar: 'مساعد صوتي لـmacOS، يعمل بلا اتصال بالكامل (Llama وWhisper وKokoro)',
    ko: 'macOS 음성 어시스턴트, 완전 오프라인(Llama, Whisper, Kokoro)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
