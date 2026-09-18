// Local AI App Directory — Milvus (layer: vector database)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'milvus',
  name: 'Milvus',
  categories: ['vector-databases'],
  interfaces: ['cli', 'library'],
  locality: 'local', // fully self-hostable OSS vector DB; Zilliz Cloud is a separate managed offering, not required, verified 2026-09-18
  platforms: null, // Docker/binary-based server, deployable on any host OS — no single OS-specific build to list
  worksWith: ['LangChain', 'LlamaIndex'],
  engine: 'library', // used as retrieval infrastructure behind a RAG stack, not an LLM inference engine itself, verified 2026-09-18
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 46152, // github.com/milvus-io/milvus, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'milvus.io',
  tagline: {
    en: 'High-performance, cloud-native open-source vector database for large-scale similarity search and RAG',
    de: 'Leistungsstarke, cloud-native Open-Source-Vektordatenbank für groß angelegte Ähnlichkeitssuche und RAG',
    fr: 'Base de données vectorielle open source cloud-native et haute performance pour la recherche de similarité à grande échelle et le RAG',
    ja: '大規模な類似検索とRAGに対応する高性能なクラウドネイティブOSSベクトルデータベース',
    zh: '面向大规模相似性搜索和RAG应用的高性能云原生开源向量数据库',
    es: 'Base de datos vectorial de código abierto, nativa de la nube y de alto rendimiento para búsqueda de similitud a gran escala y RAG',
    pt: 'Banco de dados vetorial open source nativo de nuvem e de alto desempenho para busca por similaridade em grande escala e RAG',
    ar: 'قاعدة بيانات متجهة مفتوحة المصدر وعالية الأداء وسحابية النشأة، مخصصة للبحث عن التشابه واسع النطاق وتطبيقات RAG',
    ko: '대규모 유사도 검색과 RAG를 위한 고성능 클라우드 네이티브 오픈소스 벡터 데이터베이스',
  },
  lastVerifiedDate: '2026-09-18',
}
