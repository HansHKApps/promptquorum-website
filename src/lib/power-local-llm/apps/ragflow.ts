// Local AI App Directory — RAGFlow (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ragflow',
  name: 'RAGFlow',
  categories: ['document-pdf-chat'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['linux'],
  worksWith: ['Ollama', 'vLLM', 'LM Studio', 'Xinference', 'LocalAI'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: 16, vramGb: null, cpuOnly: true }, // per github.com/infiniflow/ragflow README "Prerequisites": CPU >= 4 cores, RAM >= 16GB, Disk >= 50GB for the Docker stack itself; DeepDoc tasks run on CPU by default with GPU as an optional accelerator (DEVICE=gpu env flag), so the platform does not require a GPU. Verified 2026-09-13
  stars: 90045,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'ragflow.io',
  tagline: {
    en: 'Deep document understanding for RAG with citation extraction',
    de: 'Tiefes Dokumentenverständnis für RAG mit Zitat-Extraktion',
    fr: 'Compréhension approfondie des documents pour le RAG avec extraction de citations',
    ja: '引用抽出付きの深いドキュメント理解RAG',
    zh: '深度文档理解RAG，支持引用提取',
    es: 'Comprensión profunda de documentos para RAG con extracción de citas',
    pt: 'Compreensão profunda de documentos para RAG com extração de citações',
    ar: 'فهم عميق للمستندات لـRAG مع استخراج اقتباسات',
    ko: '인용 추출 기능이 있는 문서 심층 이해 RAG',
  },
  reviewSlug: 'ragflow-document-understanding-rag-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
