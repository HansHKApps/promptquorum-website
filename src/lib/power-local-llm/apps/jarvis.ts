// Local AI App Directory — Jarvis (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'jarvis',
  name: 'Jarvis',
  categories: ['realtime-voice-agents', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Open source',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // jarvis-mac.lovable.app states macOS 12+ and "4GB free disk space" but no documented RAM/VRAM floor; it bundles Llama 3.2 3B + Whisper + Kokoro and uses Apple Metal, "Apple Silicon recommended but Intel Macs supported" — GPU requirement unclear on Intel, checked official site + GitHub (Reezxy/Jarvis---Local-Voice-assistant), 2026-09-13
  stars: null,
  addedDate: '2026-09-04',
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
  reviewSlug: 'jarvis-mac-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { localLlm: true, voice: true, toolUse: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
