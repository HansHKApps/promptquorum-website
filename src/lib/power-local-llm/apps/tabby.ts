// Local AI App Directory — Tabby (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tabby',
  name: 'Tabby',
  layer: 'ide',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 33858,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['code'],
  url: 'tabby.tabbyml.com',
  tagline: {
    en: 'Self-hosted GitHub Copilot alternative',
    de: 'Selbst gehostete GitHub Copilot-Alternative',
    fr: 'Alternative auto-hébergée à GitHub Copilot',
    ja: 'セルフホスト型GitHub Copilot代替',
    zh: '自托管的GitHub Copilot替代方案',
    es: 'Alternativa autoalojada a GitHub Copilot',
    pt: 'Alternativa auto-hospedada ao GitHub Copilot',
    ar: 'بديل مستضاف ذاتياً لـGitHub Copilot',
    ko: 'GitHub Copilot의 셀프호스팅 대안',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
