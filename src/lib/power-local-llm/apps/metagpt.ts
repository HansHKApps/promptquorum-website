// Local AI App Directory — MetaGPT (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'metagpt',
  name: 'MetaGPT',
  categories: ['agent-frameworks', 'autonomous-agents'],
  interfaces: ['library', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama'],
  engine: 'library',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 70200,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent', 'code', 'build'],
  url: 'github.com/geekan/MetaGPT',
  tagline: {
    en: 'Multi-agent software company simulation',
    de: 'Multi-Agenten-Simulation eines Software-Unternehmens',
    fr: 'Simulation multi-agents d\'une entreprise logicielle',
    ja: 'マルチエージェントのソフトウェア会社シミュレーション',
    zh: '多智能体软件公司模拟框架',
    es: 'Simulación de empresa de software con múltiples agentes',
    pt: 'Simulação de empresa de software com múltiplos agentes',
    ar: 'محاكاة شركة برمجيات مع عملاء متعددين',
    ko: '여러 에이전트를 사용한 소프트웨어 회사 시뮬레이션',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
