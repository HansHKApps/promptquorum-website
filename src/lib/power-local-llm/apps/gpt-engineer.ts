// Local AI App Directory — GPT Engineer (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'gpt-engineer',
  name: 'GPT Engineer',
  categories: ['terminal-coding-agents', 'autonomous-agents', 'code-assistants-ide-plugins'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // CLI code-gen tool that calls an external LLM API, no local inference engine of its own — no hardware minimum in github.com/AntonOsika/gpt-engineer README, checked 2026-09-13
  stars: 54989,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'github.com/AntonOsika/gpt-engineer',
  tagline: {
    en: 'Autonomous code generation and full project building',
    de: 'Autonome Code-Generierung und Erstellung kompletter Projekte',
    fr: 'Génération de code autonome et création de projets complets',
    ja: '自律的なコード生成とプロジェクト全体の構築',
    zh: '自主代码生成与完整项目构建',
    es: 'Generación de código autónoma y construcción de proyectos completos',
    pt: 'Geração de código autônoma e construção de projetos completos',
    ar: 'توليد كود مستقل وبناء مشاريع كاملة',
    ko: '자율 코드 생성 및 전체 프로젝트 구축',
  },
  reviewSlug: 'gpt-engineer-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-11-02', version: 'v0.3.1', versionSourceUrl: 'https://github.com/AntonOsika/gpt-engineer/releases/tag/v0.3.1' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true, codeExecution: true },
  // GitHub API archived=true, re-checked 2026-11-02
  upstreamStatus: { state: 'archived' },
  lastVerifiedDate: null, // TODO: not derivable from source article
  // Last upstream update = last code change merged to main (PR #1191 merge, 2024-08-08); latest release v0.3.1 was 2024-06-06; later main commits (to 2024-11-17) are README-only; the 2025-05-14 "push" is a FUNDING.yml commit on side branch AntonOsika-patch-11, not a code change. Read from the GitHub API 2026-11-02.
  lastUpstreamUpdate: '2024-08-08',
  lastUpstreamUpdateSource: 'https://github.com/AntonOsika/gpt-engineer/commits/main',
}
