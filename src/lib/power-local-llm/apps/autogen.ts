// Local AI App Directory — AutoGen (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'autogen',
  name: 'AutoGen',
  layer: 'agent',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama'],
  engine: 'library',
  license: 'CC-BY-4.0 / MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 60800,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'github.com/microsoft/autogen',
  tagline: {
    en: 'Microsoft multi-agent orchestration framework',
    de: 'Microsoft Multi-Agenten-Orchestrierungsframework',
    fr: 'Framework d\'orchestration multi-agents Microsoft',
    ja: 'Microsoftのマルチエージェントオーケストレーションフレームワーク',
    zh: 'Microsoft多智能体编排框架',
    es: 'Framework de orquestación multiagente de Microsoft',
    pt: 'Framework de orquestração multiagente da Microsoft',
    ar: 'إطار تنسيق متعدد العملاء من Microsoft',
    ko: 'Microsoft의 멀티에이전트 오케스트레이션 프레임워크',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
