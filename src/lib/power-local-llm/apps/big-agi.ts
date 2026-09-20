// Local AI App Directory — Big-AGI (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'big-agi',
  name: 'Big-AGI',
  categories: ['general-chat-clients'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'LM Studio', 'LocalAI'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per github.com/enricoros/big-AGI README: no hardware requirements stated — Big-AGI is a client with no local inference, connects to 20+ external API providers (self-host via Docker/Vercel or use the hosted version), no GPU needed; verified 2026-09-13
  stars: 7100,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'github.com/enricoros/big-AGI',
  tagline: {
    en: 'Advanced multi-provider frontend with personas',
    de: 'Erweitertes Multi-Provider-Frontend mit Personas',
    fr: 'Frontend multi-fournisseurs avancé avec personas',
    ja: 'ペルソナ付きの高度なマルチプロバイダーフロントエンド',
    zh: '支持Persona的高级多提供商前端',
    es: 'Frontend multi-proveedor avanzado con personas',
    pt: 'Frontend multi-provedor avançado com personas',
    ar: 'واجهة أمامية متعددة المزودين متقدمة مع شخصيات',
    ko: '페르소나가 있는 고급 멀티 제공자 프런트엔드',
  },
  reviewSlug: 'big-agi-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v2.1.0', versionSourceUrl: 'https://github.com/enricoros/big-AGI/releases/tag/v2.1.0' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
