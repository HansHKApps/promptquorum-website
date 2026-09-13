// Local AI App Directory — LlamaIndex (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llamaindex',
  name: 'LlamaIndex',
  categories: ['rag-frameworks'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp', 'LM Studio', 'vLLM', 'LocalAI'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // LlamaIndex is a Python orchestration/RAG framework with no built-in inference engine of its own — per llamaindex.ai and its docs, it routes to whatever LLM backend (local or cloud API) the developer configures, so hardware floor is entirely backend-dependent; no fixed minimum published, checked 2026-09-13
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
  reviewSlug: 'llamaindex-rag-framework-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
