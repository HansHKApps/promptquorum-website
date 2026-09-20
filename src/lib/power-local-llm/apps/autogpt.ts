// Local AI App Directory — AutoGPT (classic, local) (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'autogpt',
  name: 'AutoGPT (classic, local)',
  categories: ['autonomous-agents'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per github.com/Significant-Gravitas/AutoGPT README: no RAM/GPU/disk requirements stated, only that self-hosting needs Docker — depends entirely on the LLM backend the user configures; verified 2026-09-13
  stars: 187100,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent'],
  url: 'github.com/Significant-Gravitas/AutoGPT',
  tagline: {
    en: 'Classic CLI agent, Ollama via API base URL',
    de: 'Klassischer CLI-Agent, Ollama über API-URL',
    fr: 'Agent CLI classique, Ollama via URL API',
    ja: 'クラシック版CLIエージェント、API URL経由でOllama',
    zh: '经典CLI智能体，经API URL接入Ollama',
    es: 'Agente CLI clásico, Ollama vía URL de API',
    pt: 'Agente CLI clássico, Ollama via URL de API',
    ar: 'وكيل CLI كلاسيكي، Ollama عبر رابط API',
    ko: '클래식 CLI 에이전트, API URL로 Ollama 연결',
  },
  reviewSlug: 'autogpt-local-review-2026', // dedicated PromptQuorum review — pinned to #1 in the article index
  // No pqReview.version: this tile is specifically the classic/local CLI
  // agent (classic/original_autogpt/ in the monorepo), which ships no
  // version tags of its own — only the separate autogpt_platform/ product
  // does (currently autogpt-platform-beta-v0.8.0). Setting a version here
  // would misattribute the Platform's tag to Classic. Repo-wide stats
  // (stars/issues/push date) verified 2026-09-20 instead — see the article.
  lastVerifiedDate: '2026-09-20',
}
