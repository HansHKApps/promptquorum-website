// Local AI App Directory — Chroma (layer: vector database)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/chroma-core/chroma, the open-source AI
// search/vector database (trychroma.com) — not a color/design tool of the
// same name — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'chroma',
  name: 'Chroma',
  categories: ['vector-databases'],
  interfaces: ['cli', 'library'],
  locality: 'local', // fully self-hostable OSS under Apache-2.0; Chroma Cloud is a separate managed offering, verified 2026-09-18
  platforms: null, // ships as a Python/JS library plus a server binary, deployable on any host OS
  worksWith: ['LangChain', 'LlamaIndex'],
  engine: 'library',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 29319, // github.com/chroma-core/chroma, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['build', 'docs'],
  url: 'trychroma.com',
  tagline: {
    en: 'Open-source embedding database and search infrastructure for building RAG and AI-memory applications',
    de: 'Open-Source-Embedding-Datenbank und Suchinfrastruktur für RAG- und KI-Gedächtnis-Anwendungen',
    fr: "Base de données d'embeddings et infrastructure de recherche open source pour construire des applications RAG et de mémoire IA",
    ja: 'RAGやAIメモリアプリケーション構築のためのオープンソース埋め込みデータベース／検索インフラ',
    zh: '开源嵌入数据库与搜索基础设施，用于构建RAG和AI记忆类应用',
    es: 'Base de datos de embeddings e infraestructura de búsqueda de código abierto para construir aplicaciones de RAG y memoria de IA',
    pt: 'Banco de dados de embeddings e infraestrutura de busca open source para construir aplicações de RAG e memória de IA',
    ar: 'قاعدة بيانات تضمينات وبنية بحث مفتوحة المصدر لبناء تطبيقات RAG وذاكرة الذكاء الاصطناعي',
    ko: 'RAG 및 AI 메모리 애플리케이션 구축을 위한 오픈소스 임베딩 데이터베이스 및 검색 인프라',
  },
  lastVerifiedDate: '2026-09-18',
}
