// Local AI App Directory — Weaviate (layer: vector database)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'weaviate',
  name: 'Weaviate',
  categories: ['vector-databases'],
  interfaces: ['cli', 'library', 'web'],
  locality: 'local', // fully self-hostable server; Weaviate Cloud is a separate managed offering, verified 2026-09-18
  platforms: null, // Docker/binary-based server, deployable on any host OS
  worksWith: ['LangChain', 'LlamaIndex'],
  engine: 'library',
  license: 'BSD-3-Clause (core), Weaviate License for gated features in the wl/ directory (requires a license key)', // GitHub reports license "Other" — repo LICENSE dual-licenses core code under BSD-3-Clause and select features under the proprietary Weaviate License, verified 2026-09-18
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 16819, // github.com/weaviate/weaviate, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'weaviate.io',
  tagline: {
    en: 'Open-source vector database combining vector search with structured filtering for AI and RAG applications',
    de: 'Open-Source-Vektordatenbank, die Vektorsuche mit strukturierter Filterung für KI- und RAG-Anwendungen kombiniert',
    fr: 'Base de données vectorielle open source combinant recherche vectorielle et filtrage structuré pour les applications IA et RAG',
    ja: 'ベクトル検索と構造化フィルタリングを組み合わせたAI・RAGアプリケーション向けオープンソースベクトルデータベース',
    zh: '将向量搜索与结构化过滤相结合的开源向量数据库，适用于AI与RAG应用',
    es: 'Base de datos vectorial de código abierto que combina búsqueda vectorial con filtrado estructurado para aplicaciones de IA y RAG',
    pt: 'Banco de dados vetorial open source que combina busca vetorial com filtragem estruturada para aplicações de IA e RAG',
    ar: 'قاعدة بيانات متجهة مفتوحة المصدر تجمع بين البحث المتجه والتصفية البنيوية لتطبيقات الذكاء الاصطناعي وRAG',
    ko: '벡터 검색과 구조화된 필터링을 결합한 AI·RAG 애플리케이션용 오픈소스 벡터 데이터베이스',
  },
  reviewSlug: 'weaviate-review', // dedicated PromptQuorum review — added 2026-09-19
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { dockerDeploy: true, hybridSearch: true, metadataFilter: true, clustered: true, managedCloud: true },
  lastVerifiedDate: '2026-09-18',
}
