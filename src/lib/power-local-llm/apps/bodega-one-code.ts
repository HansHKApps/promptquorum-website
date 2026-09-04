// Local AI App Directory — Bodega One Code (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'bodega-one-code',
  name: 'Bodega One Code',
  layer: 'ide',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'LocalAI', 'KoboldCpp'],
  engine: 'external',
  license: 'Closed source',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'www.bodegaone.ai',
  tagline: {
    en: 'Local-first AI coding IDE, BYOLLM via Ollama/LM Studio',
    de: 'Lokale KI-Coding-IDE, BYOLLM via Ollama/LM Studio',
    fr: 'IDE de code IA local-first, BYOLLM via Ollama/LM Studio',
    ja: 'ローカルファーストのAIコーディングIDE、Ollama/LM Studio対応BYOLLM',
    zh: '本地优先的AI编程IDE，通过Ollama/LM Studio自带模型',
    es: 'IDE de código con IA local-first, BYOLLM vía Ollama/LM Studio',
    pt: 'IDE de código com IA local-first, BYOLLM via Ollama/LM Studio',
    ar: 'بيئة تطوير محلية بالذكاء الاصطناعي، BYOLLM عبر Ollama/LM Studio',
    ko: '로컬 우선 AI 코딩 IDE, Ollama/LM Studio 지원 BYOLLM',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
