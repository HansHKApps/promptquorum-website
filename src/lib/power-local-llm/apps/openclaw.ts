// Local AI App Directory — OpenClaw (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openclaw',
  name: 'OpenClaw',
  layer: 'agent',
  locality: 'TODO',
  platforms: null,
  worksWith: null,
  engine: 'TODO',
  license: 'Apache 2.0',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'github.com/OpenClaw-AILabs/OpenClaw',
  tagline: {
    en: 'Orchestration framework for agent workflows',
    de: 'Orchestrierungs-Framework für Agenten-Workflows',
    fr: 'Framework d\'orchestration pour les workflows d\'agents',
    ja: 'エージェントワークフローのためのオーケストレーションフレームワーク',
    zh: '面向智能体工作流的编排框架',
    es: 'Framework de orquestación para flujos de trabajo de agentes',
    pt: 'Framework de orquestração para fluxos de trabalho de agentes',
    ar: 'إطار عمل لتنسيق سير عمل الوكلاء',
    ko: '에이전트 워크플로를 위한 오케스트레이션 프레임워크',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
