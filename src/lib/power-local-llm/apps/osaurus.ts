// Local AI App Directory — Osaurus (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'osaurus',
  name: 'Osaurus',
  layer: 'desktop',
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'both',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'osaurus.ai',
  tagline: {
    en: 'Native macOS app, local models via Ollama/MLX/LM Studio',
    de: 'Native macOS-App, lokale Modelle via Ollama/MLX/LM Studio',
    fr: 'App macOS native, modèles locaux via Ollama/MLX/LM Studio',
    ja: 'ネイティブmacOSアプリ、Ollama/MLX/LM Studio経由でローカルモデル',
    zh: '原生 macOS 应用，通过 Ollama/MLX/LM Studio 本地运行模型',
    es: 'App nativa de macOS, modelos locales vía Ollama/MLX/LM Studio',
    pt: 'App nativo do macOS, modelos locais via Ollama/MLX/LM Studio',
    ar: 'تطبيق macOS أصلي، نماذج محلية عبر Ollama/MLX/LM Studio',
    ko: '네이티브 macOS 앱, Ollama/MLX/LM Studio를 통한 로컬 모델',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
