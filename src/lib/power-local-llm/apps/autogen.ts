// Local AI App Directory — AutoGen (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'autogen',
  name: 'AutoGen',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama'],
  engine: 'library',
  license: 'CC-BY-4.0 / MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per github.com/microsoft/autogen README: only states "Python 3.10 or later" — no RAM/GPU floor documented; depends entirely on the LLM backend the user configures; verified 2026-09-13
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
  reviewSlug: 'autogen-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'python-v0.7.5', versionSourceUrl: 'https://github.com/microsoft/autogen/releases/tag/python-v0.7.5' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
