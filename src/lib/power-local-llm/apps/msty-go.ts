// Local AI App Directory — Msty Go (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'msty-go',
  name: 'Msty Go',
  categories: ['autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp'],
  engine: 'both',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent'],
  url: 'msty.ai/go',
  tagline: {
    en: 'Autonomous multi-step task agent, local or cloud models',
    de: 'Autonomer Mehrschritt-Aufgaben-Agent, lokal oder Cloud',
    fr: 'Agent de tâches autonome multi-étapes, local ou cloud',
    ja: '自律型マルチステップタスクエージェント、ローカルまたはクラウド',
    zh: '自主多步骤任务代理，支持本地或云端模型',
    es: 'Agente autónomo de tareas multi-paso, local o en la nube',
    pt: 'Agente autônomo de tarefas multi-etapas, local ou nuvem',
    ar: 'وكيل مهام مستقل متعدد الخطوات، محلي أو سحابي',
    ko: '자율 다단계 작업 에이전트, 로컬 또는 클라우드',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
