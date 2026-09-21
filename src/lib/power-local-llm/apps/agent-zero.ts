// Local AI App Directory — Agent Zero (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'agent-zero',
  name: 'Agent Zero',
  categories: ['autonomous-agents'],
  interfaces: ['cli', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per github.com/agent0ai/agent-zero README: Docker-based, runs "wherever Docker runs, from a $6 VPS or Raspberry Pi to a local workstation or GPU server" — no stated RAM/VRAM floor for the framework itself, depends entirely on the configured LLM backend; verified 2026-09-13
  stars: 19100,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent', 'code'],
  url: 'github.com/agent0ai/agent-zero',
  tagline: {
    en: 'Minimal autonomous agent with coding ability',
    de: 'Minimalistischer autonomer Agent mit Coding-Fähigkeiten',
    fr: 'Agent autonome minimaliste avec capacités de codage',
    ja: 'コーディング機能を備えたミニマルな自律エージェント',
    zh: '具备编程能力的极简自主智能体',
    es: 'Agente autónomo minimalista con capacidad de programación',
    pt: 'Agente autônomo minimalista com capacidade de programação',
    ar: 'وكيل مستقل بسيط بقدرات برمجية',
    ko: '코딩 기능을 갖춘 미니멀한 자율 에이전트',
  },
  reviewSlug: 'agent-zero-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v2.12', versionSourceUrl: 'https://github.com/agent0ai/agent-zero/releases/tag/v2.12' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { memory: true, codeExecution: true, webBrowsing: true, sandbox: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
