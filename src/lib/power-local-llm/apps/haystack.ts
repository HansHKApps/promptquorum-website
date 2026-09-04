// Local AI App Directory — Haystack (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'haystack',
  name: 'Haystack',
  layer: 'rag',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'haystack.deepset.ai',
  tagline: {
    en: 'Search and RAG framework by deepset',
    de: 'Such- und RAG-Framework von deepset',
    fr: 'Framework de recherche et RAG par deepset',
    ja: 'deepset製の検索・RAGフレームワーク',
    zh: 'deepset出品的搜索与RAG框架',
    es: 'Framework de búsqueda y RAG por deepset',
    pt: 'Framework de busca e RAG pela deepset',
    ar: 'إطار بحث وRAG من deepset',
    ko: 'deepset의 검색 및 RAG 프레임워크',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
