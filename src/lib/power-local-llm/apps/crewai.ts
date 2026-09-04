// Local AI App Directory — CrewAI (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'crewai',
  name: 'CrewAI',
  layer: 'agent',
  categories: ['agent-frameworks'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 58082,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent'],
  url: 'crewai.com',
  tagline: {
    en: 'Multi-agent role-based workflows',
    de: 'Rollenbasierte Multi-Agenten-Workflows',
    fr: 'Workflows multi-agents basés sur les rôles',
    ja: 'ロールベースのマルチエージェントワークフロー',
    zh: '基于角色的多智能体工作流',
    es: 'Flujos de trabajo multiagente basados en roles',
    pt: 'Fluxos de trabalho multiagente baseados em funções',
    ar: 'سير عمل متعدد العملاء قائم على الأدوار',
    ko: '역할 기반 멀티에이전트 워크플로',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
