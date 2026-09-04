// Local AI App Directory — AutoGPT (classic, local) (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'autogpt',
  name: 'AutoGPT (classic, local)',
  layer: 'tools',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT (classic)',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 187100,
  addedDate: null, // TODO: not derivable from source article
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
  lastVerifiedDate: null, // TODO: not derivable from source article
}
