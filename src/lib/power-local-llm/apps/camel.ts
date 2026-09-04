// Local AI App Directory — CAMEL (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'camel',
  name: 'CAMEL',
  layer: 'agent',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 17700,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'github.com/camel-ai/camel',
  tagline: {
    en: 'Communicative agents for multi-agent collaboration',
    de: 'Kommunikative Agenten für die Zusammenarbeit mehrerer Agenten',
    fr: 'Agents communicants pour la collaboration multi-agents',
    ja: 'マルチエージェント協調のためのコミュニケーション型エージェント',
    zh: '面向多智能体协作的通信型智能体',
    es: 'Agentes comunicativos para la colaboración multiagente',
    pt: 'Agentes comunicativos para colaboração multiagente',
    ar: 'وكلاء تواصليون للتعاون بين وكلاء متعددين',
    ko: '멀티 에이전트 협업을 위한 소통형 에이전트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
