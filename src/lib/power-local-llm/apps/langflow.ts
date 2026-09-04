// Local AI App Directory — Langflow (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'langflow',
  name: 'Langflow',
  layer: 'rag',
  categories: ['workflow-node-builders', 'rag-frameworks'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'OpenAI API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 154239,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'langflow.org',
  tagline: {
    en: 'Visual AI orchestration with RAG components',
    de: 'Visuelle KI-Orchestrierung mit RAG-Komponenten',
    fr: 'Orchestration IA visuelle avec composants RAG',
    ja: 'RAGコンポーネント付きビジュアルAIオーケストレーション',
    zh: '带RAG组件的可视化AI编排工具',
    es: 'Orquestación visual de IA con componentes RAG',
    pt: 'Orquestração visual de IA com componentes RAG',
    ar: 'تنسيق ذكاء اصطناعي بصري مع مكونات RAG',
    ko: 'RAG 컴포넌트를 갖춘 시각적 AI 오케스트레이션',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
