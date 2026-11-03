// Local AI App Directory — Whisper.cpp (layer: stt)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'whisper-cpp',
  name: 'Whisper.cpp',
  categories: ['speech-to-text'],
  interfaces: ['library', 'cli'],
  exposesApi: true, // OpenAI-/Ollama-compatible API server documented — checked 2026-11-01: https://github.com/ggerganov/whisper.cpp
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // per github.com/ggerganov/whisper.cpp README "Memory usage" table — CPU-only inference works across every model size (tiny ~273MB RAM up to large ~3.9GB RAM), with optional Metal/CUDA/Vulkan acceleration; no single fixed RAM floor since it scales with the chosen model size, verified 2026-09-13
  stars: 54868,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/ggml-org/whisper.cpp', // repo moved from ggerganov/ to the ggml-org organization (GitHub redirects the old path)
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
  reviewSlug: 'whisper-cpp-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-11-02', version: 'v1.9.5', versionSourceUrl: 'https://github.com/ggml-org/whisper.cpp/releases/tag/v1.9.5' }, // v1.9.5 published 2026-10-06 per the GitHub releases API, read 2026-11-02
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { realtime: true, cpuUsable: true, apiServer: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
  lastUpstreamUpdate: '2026-10-30', // GitHub API pushed_at 2026-10-30 (newer than release v1.9.5, 2026-10-06), read 2026-11-02
  lastUpstreamUpdateSource: 'https://github.com/ggml-org/whisper.cpp',
}
