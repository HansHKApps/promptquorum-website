// Local AI App Directory — Hermes Agent (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hermes-agent',
  name: 'Hermes Agent',
  layer: 'agent',
  locality: 'hybrid',
  platforms: ['mac', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['agent'],
  url: 'hermes-agent.org',
  tagline: {
    en: 'Self-improving personal AI agent, persistent memory',
    de: 'Selbstlernender persönlicher KI-Agent mit dauerhaftem Gedächtnis',
    fr: 'Agent IA personnel auto-améliorant, mémoire persistante',
    ja: '自己改善する個人向けAIエージェント、永続的な記憶',
    zh: '自我提升的个人AI代理，具备持久记忆',
    es: 'Agente de IA personal que se automejora, memoria persistente',
    pt: 'Agente de IA pessoal auto-aprimorável, memória persistente',
    ar: 'وكيل ذكاء اصطناعي شخصي يحسّن نفسه، بذاكرة دائمة',
    ko: '스스로 발전하는 개인 AI 에이전트, 지속적인 기억',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
