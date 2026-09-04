// Local AI App Directory — Pydantic AI (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pydantic-ai',
  name: 'Pydantic AI',
  layer: 'agent',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'vLLM', 'LM Studio', 'llama.cpp'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 19720,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'ai.pydantic.dev',
  tagline: {
    en: 'Type-safe agent framework built on Pydantic',
    de: 'Typsicheres Agenten-Framework auf Basis von Pydantic',
    fr: 'Framework d\'agents typé construit sur Pydantic',
    ja: 'Pydantic上に構築された型安全エージェントフレームワーク',
    zh: '基于Pydantic的类型安全智能体框架',
    es: 'Framework de agentes con tipos seguros construido sobre Pydantic',
    pt: 'Framework de agentes com tipos seguros construído sobre Pydantic',
    ar: 'إطار عملاء ذكيين بأنواع آمنة مبني على Pydantic',
    ko: 'Pydantic 위에 구축된 타입 안전 에이전트 프레임워크',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
