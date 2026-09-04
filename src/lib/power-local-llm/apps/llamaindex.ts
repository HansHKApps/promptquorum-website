// Local AI App Directory — LlamaIndex (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llamaindex',
  name: 'LlamaIndex',
  layer: 'rag',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 52016,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'llamaindex.ai',
  tagline: {
    en: 'RAG framework / Python library — foundation for custom builds',
    de: 'RAG-Framework / Python-Bibliothek — Grundlage für eigene Entwicklungen',
    fr: 'Framework RAG / bibliothèque Python — base pour les développements sur mesure',
    ja: 'RAGフレームワーク / Pythonライブラリ — カスタム開発の基盤',
    zh: 'RAG框架/Python库——自定义构建的基础',
    es: 'Framework RAG / biblioteca Python — base para desarrollos personalizados',
    pt: 'Framework RAG / biblioteca Python — base para desenvolvimentos personalizados',
    ar: 'إطار RAG / مكتبة Python — أساس للتطوير المخصص',
    ko: 'RAG 프레임워크 / Python 라이브러리 — 맞춤형 개발의 기반',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
