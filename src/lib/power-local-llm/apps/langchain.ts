// Local AI App Directory — LangChain (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'langchain',
  name: 'LangChain',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp', 'vLLM', 'LM Studio'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 145635,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'langchain.com',
  tagline: {
    en: 'General-purpose LLM application framework',
    de: 'Universelles LLM-Anwendungsframework',
    fr: 'Framework d\'application LLM généraliste',
    ja: '汎用LLMアプリケーションフレームワーク',
    zh: '通用LLM应用框架',
    es: 'Framework de aplicaciones LLM de propósito general',
    pt: 'Framework de aplicações LLM de propósito geral',
    ar: 'إطار تطبيقات نماذج لغوية للأغراض العامة',
    ko: '범용 LLM 애플리케이션 프레임워크',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
