// Local AI App Directory — Semantic Kernel (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'semantic-kernel',
  name: 'Semantic Kernel',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 28528,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'learn.microsoft.com/semantic-kernel',
  tagline: {
    en: 'Microsoft enterprise orchestration SDK in C#/Python/Java',
    de: 'Microsoft Enterprise-Orchestrierungs-SDK für C#/Python/Java',
    fr: 'SDK d\'orchestration enterprise Microsoft en C#/Python/Java',
    ja: 'C#/Python/Java向けMicrosoftエンタープライズオーケストレーションSDK',
    zh: 'Microsoft企业级编排SDK，支持C#/Python/Java',
    es: 'SDK de orquestación enterprise de Microsoft en C#/Python/Java',
    pt: 'SDK de orquestração enterprise da Microsoft em C#/Python/Java',
    ar: 'SDK تنسيق مؤسسي من Microsoft بـC#/Python/Java',
    ko: 'C#/Python/Java용 Microsoft 엔터프라이즈 오케스트레이션 SDK',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
