// Local AI App Directory — TaskWeaver (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'taskweaver',
  name: 'TaskWeaver',
  layer: 'agent',
  locality: 'TODO',
  platforms: null,
  worksWith: null,
  engine: 'TODO',
  license: 'MIT',
  price: 'TODO',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 6200,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['agent', 'code', 'build'],
  url: 'github.com/microsoft/TaskWeaver',
  tagline: {
    en: 'Microsoft code-first agent for task planning',
    de: 'Code-first-Agent von Microsoft für die Aufgabenplanung',
    fr: 'Agent Microsoft axé code pour la planification de tâches',
    ja: 'タスク計画のためのMicrosoft製コードファーストエージェント',
    zh: '微软出品的代码优先任务规划智能体',
    es: 'Agente de Microsoft orientado al código para la planificación de tareas',
    pt: 'Agente da Microsoft orientado a código para planejamento de tarefas',
    ar: 'وكيل من مايكروسوفت يعتمد على الكود لتخطيط المهام',
    ko: '작업 계획을 위한 마이크로소프트의 코드 우선 에이전트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
