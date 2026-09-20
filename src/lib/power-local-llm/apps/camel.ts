// Local AI App Directory — CAMEL (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'camel',
  name: 'CAMEL',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // github.com/camel-ai/camel README states no minimum RAM/hardware; it's a Python agent-orchestration library, floor depends entirely on the LLM backend the user wires in, verified 2026-09-13
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
  reviewSlug: 'camel-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: '0.2.90', versionSourceUrl: 'https://github.com/camel-ai/camel/releases/tag/v0.2.90' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
