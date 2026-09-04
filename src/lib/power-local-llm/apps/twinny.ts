// Local AI App Directory — Twinny (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'twinny',
  name: 'Twinny',
  layer: 'ide',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 3600,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'github.com/twinnydotdev/twinny',
  tagline: {
    en: 'Free Copilot alternative for VS Code',
    de: 'Kostenlose Copilot-Alternative für VS Code',
    fr: 'Alternative Copilot gratuite pour VS Code',
    ja: 'VS Code向け無料Copilot代替',
    zh: 'VS Code的免费Copilot替代插件',
    es: 'Alternativa gratuita a Copilot para VS Code',
    pt: 'Alternativa gratuita ao Copilot para VS Code',
    ar: 'بديل Copilot مجاني لـVS Code',
    ko: 'VS Code용 무료 Copilot 대안',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
