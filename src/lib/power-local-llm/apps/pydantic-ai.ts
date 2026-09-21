// Local AI App Directory — Pydantic AI (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pydantic-ai',
  name: 'Pydantic AI',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'vLLM', 'LM Studio', 'llama.cpp'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // pure Python agent framework/library — depends entirely on whichever LLM backend the user configures (Ollama, vLLM, hosted API, etc.); no fixed hardware floor of its own documented at ai.pydantic.dev. Verified 2026-09-13
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
  reviewSlug: 'pydantic-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { ollama: true, mcp: true, multiAgent: true, toolCalling: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
