// Local AI App Directory — GPT4All (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'gpt4all',
  name: 'GPT4All',
  layer: 'desktop',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 77386,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat'],
  url: 'nomic.ai/gpt4all',
  tagline: {
    en: 'Beginner-friendly with strong CPU-only support',
    de: 'Einsteigerfreundlich mit starker CPU-only-Unterstützung',
    fr: 'Accessible aux débutants, excellent support CPU uniquement',
    ja: '初心者向け。CPU onlyでの動作が強力',
    zh: '面向初学者，纯CPU运行支持优秀',
    es: 'Apto para principiantes con fuerte soporte de solo CPU',
    pt: 'Adequado para iniciantes com forte suporte de apenas CPU',
    ar: 'مناسب للمبتدئين مع دعم قوي للـCPU فقط',
    ko: '강력한 CPU 전용 지원을 갖춘 입문자 친화적 앱',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
