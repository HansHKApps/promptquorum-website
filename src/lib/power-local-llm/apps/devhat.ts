// Local AI App Directory — Devhat (layer: cli)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'devhat',
  name: 'Devhat',
  layer: 'cli',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['code'],
  url: 'github.com/ysnows/devhat',
  tagline: {
    en: 'Dev tools CLI with local LLM integration',
    de: 'Entwickler-CLI-Tools mit lokaler LLM-Integration',
    fr: 'CLI d\'outils dev avec intégration LLM local',
    ja: 'ローカルLLM統合対応の開発ツールCLI',
    zh: '集成本地LLM的开发工具CLI',
    es: 'CLI de herramientas de desarrollo con integración de LLM local',
    pt: 'CLI de ferramentas de desenvolvimento com integração LLM local',
    ar: 'أدوات مطورين CLI مع تكامل نموذج لغوي محلي',
    ko: '로컬 LLM 연동이 있는 개발 도구 CLI',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
