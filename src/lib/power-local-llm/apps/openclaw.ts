// Local AI App Directory — OpenClaw (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openclaw',
  name: 'OpenClaw',
  categories: ['agent-frameworks', 'sdks-libraries'],
  interfaces: ['library'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama'],
  engine: 'library',
  license: 'MIT', // corrected 2026-09-05: GitHub API reports license.spdx_id NOASSERTION, but the repo's actual LICENSE file is MIT (OpenClaw Foundation, 2026)
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per github.com/openclaw/openclaw README and docs.openclaw.ai/install: only Node.js (24.16+/26.1+) and OS support are documented; "models and agent harnesses (Claude, Codex, local models) are plugins," so hardware floor depends entirely on the chosen backend — verified 2026-09-13
  stars: 388916, // re-verified 2026-09-05
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build', 'agent'],
  url: 'github.com/openclaw/openclaw', // corrected 2026-09-04: github.com/OpenClaw-AILabs/OpenClaw 404s, wrong org
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
  reviewSlug: 'openclaw-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v2026.9.5', versionSourceUrl: 'https://github.com/openclaw/openclaw/releases/tag/v2026.9.5' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true },
  lastVerifiedDate: '2026-09-20',
}
