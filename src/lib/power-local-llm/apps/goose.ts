// Local AI App Directory — goose (layer: agent)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'goose',
  name: 'goose',
  categories: ['agent-frameworks'],
  interfaces: ['desktop', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 53925, // github.com/aaif-goose/goose, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['agent', 'code', 'build'],
  url: 'goose-docs.ai',
  tagline: {
    en: 'Local-first AI agent for coding, automation, and workflows — governed by the Linux Foundation',
    de: 'Lokal-first-KI-Agent für Coding, Automatisierung und Workflows – verwaltet von der Linux Foundation',
    fr: 'Agent IA local par défaut pour le code, l\'automatisation et les workflows — géré par la Linux Foundation',
    ja: 'コーディング、自動化、ワークフローのためのローカルファーストAIエージェント — Linux Foundationが運営',
    zh: '用于编码、自动化和工作流的本地优先AI代理——由Linux基金会管理',
    es: 'Agente de IA local para programación, automatización y flujos de trabajo, gobernado por la Linux Foundation',
    pt: 'Agente de IA local para codificação, automação e fluxos de trabalho — administrado pela Linux Foundation',
    ar: 'وكيل ذكاء اصطناعي محلي أولاً للبرمجة والأتمتة وسير العمل — تديره مؤسسة Linux Foundation',
    ko: '코딩, 자동화, 워크플로를 위한 로컬 우선 AI 에이전트 — Linux Foundation이 관리',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
