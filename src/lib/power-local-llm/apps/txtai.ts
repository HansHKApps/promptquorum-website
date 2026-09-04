// Local AI App Directory — txtai (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'txtai',
  name: 'txtai',
  layer: 'rag',
  categories: ['rag-frameworks', 'embeddings-indexing'],
  interfaces: ['library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['llama.cpp'],
  engine: 'library',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 12900,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'github.com/neuml/txtai',
  tagline: {
    en: 'Embedded vector + LLM database in one library',
    de: 'Eingebettete Vektor- und LLM-Datenbank in einer Bibliothek',
    fr: 'Base de données vectorielle et LLM intégrée en une seule bibliothèque',
    ja: '1ライブラリに組み込まれたベクターDB + LLMデータベース',
    zh: '将向量数据库与LLM合为一体的嵌入式库',
    es: 'Base de datos vectorial + LLM integrada en una sola biblioteca',
    pt: 'Banco de dados vetorial + LLM integrado em uma única biblioteca',
    ar: 'قاعدة بيانات متجهات + نموذج لغوي مدمجان في مكتبة واحدة',
    ko: '단일 라이브러리에 통합된 벡터 데이터베이스 + LLM',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
