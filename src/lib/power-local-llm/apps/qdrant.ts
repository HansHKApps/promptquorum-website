// Local AI App Directory — Qdrant (layer: vector database)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'qdrant',
  name: 'Qdrant',
  categories: ['vector-databases'],
  interfaces: ['cli', 'library', 'web'], // ships a built-in web dashboard for collection browsing alongside its API/SDKs, verified 2026-09-18
  locality: 'local', // fully self-hostable OSS under Apache-2.0; Qdrant Cloud is a separate managed offering, verified 2026-09-18
  platforms: null, // Docker/binary-based server, deployable on any host OS
  worksWith: ['LangChain', 'LlamaIndex'],
  engine: 'library',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 34655, // github.com/qdrant/qdrant, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'qdrant.tech',
  reviewSlug: 'qdrant-review', // dedicated PromptQuorum review — added 2026-09-18
  tagline: {
    en: 'High-performance open-source vector database and search engine for embeddings-based retrieval and RAG',
    de: 'Leistungsstarke Open-Source-Vektordatenbank und Suchmaschine für Embedding-basierte Retrieval- und RAG-Anwendungen',
    fr: 'Base de données vectorielle et moteur de recherche open source haute performance pour la recherche par embeddings et le RAG',
    ja: 'エンベディングベースの検索とRAGのための高性能オープンソースベクトルデータベース／検索エンジン',
    zh: '面向嵌入式检索和RAG应用的高性能开源向量数据库与搜索引擎',
    es: 'Base de datos vectorial y motor de búsqueda de código abierto de alto rendimiento para recuperación basada en embeddings y RAG',
    pt: 'Banco de dados vetorial e motor de busca open source de alto desempenho para recuperação baseada em embeddings e RAG',
    ar: 'قاعدة بيانات متجهة ومحرك بحث مفتوح المصدر وعالي الأداء، مخصص للاسترجاع القائم على التضمينات وتطبيقات RAG',
    ko: '임베딩 기반 검색과 RAG를 위한 고성능 오픈소스 벡터 데이터베이스 및 검색 엔진',
  },
  lastVerifiedDate: '2026-09-18',
}
