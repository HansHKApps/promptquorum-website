// Local AI App Directory — Flowise (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'flowise',
  name: 'Flowise',
  layer: 'rag',
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'LocalAI'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 55414,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'flowiseai.com',
  tagline: {
    en: 'Visual LangChain workflow builder',
    de: 'Visueller LangChain-Workflow-Builder',
    fr: 'Constructeur visuel de workflows LangChain',
    ja: 'ビジュアルLangChainワークフロービルダー',
    zh: '可视化LangChain工作流构建器',
    es: 'Constructor visual de flujos de trabajo LangChain',
    pt: 'Construtor visual de fluxos de trabalho LangChain',
    ar: 'منشئ سير عمل LangChain بصري',
    ko: '시각적 LangChain 워크플로 빌더',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
