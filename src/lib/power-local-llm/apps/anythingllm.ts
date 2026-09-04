// Local AI App Directory — AnythingLLM (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'anythingllm',
  name: 'AnythingLLM',
  categories: ['document-pdf-chat', 'general-chat-clients'],
  interfaces: ['desktop', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API'],
  engine: 'both',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 65608,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat', 'docs'],
  url: 'anythingllm.com',
  tagline: {
    en: 'RAG and document chat with built-in vector store',
    de: 'RAG und Dokumenten-Chat mit integriertem Vektorspeicher',
    fr: 'RAG et chat sur documents avec store vectoriel intégré',
    ja: 'ベクターストア内蔵のRAGとドキュメントチャット',
    zh: '内置向量存储的RAG与文档问答工具',
    es: 'RAG y chat de documentos con almacén vectorial integrado',
    pt: 'RAG e chat de documentos com armazenamento vetorial integrado',
    ar: 'RAG ودردشة مستندات مع مخزن متجهات مدمج',
    ko: '내장 벡터 저장소를 갖춘 RAG 및 문서 채팅',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
