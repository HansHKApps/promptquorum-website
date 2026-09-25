// Local AI App Directory — Flowise (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'flowise',
  name: 'Flowise',
  categories: ['rag-frameworks', 'workflow-node-builders'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'LocalAI'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // Node.js visual LangChain workflow builder, no inference engine of its own — hardware floor is entirely the connected model backend's, no fixed minimum on flowiseai.com/docs, checked 2026-09-13
  stars: 55414,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['build'],
  url: 'flowiseai.com',
  tagline: {
    en: 'Visual LangChain workflow builder',
    de: 'Visueller LangChain-Workflow-Builder',
    fr: 'Constructeur visuel de workflows LangChain',
    ja: 'ビジュアルLangChainワークフロービルダー',
    zh: '可视化LangChain工作流构建器',
    es: 'Constructor visual de flujos de trabajo LangChain',
    pt: 'Construtor visual de fluxos de trabalho LangChain',
    ar: 'منشئ سير عمل LangChain بصري',
    ko: '시각적 LangChain 워크플로 빌더',
  },
  reviewSlug: 'flowise-ai-visual-workflow-builder-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-25', version: 'v3.1.4', versionSourceUrl: 'https://github.com/FlowiseAI/Flowise/releases/tag/flowise%403.1.4' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-25; a missing key = not stated there, never false.
  // localLlm confirmed via the dedicated Ollama integration page: https://docs.flowiseai.com/integrations/langchain/llms/ollama
  compare: { visualBuilder: true, localLlm: true, agents: true, multiVector: true, dockerDeploy: true, apiServer: true },
  // GitHub repo archived 2026-08-10 (per its review; GitHub API archived=true, checked 2026-09-21)
  upstreamStatus: { state: 'archived', since: '2026-08-10' },
  lastVerifiedDate: '2026-09-25',
}
