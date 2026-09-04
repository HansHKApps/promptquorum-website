// Local AI App Directory — Cline (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cline',
  name: 'Cline',
  layer: 'ide',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 67463,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'cline.bot',
  tagline: {
    en: 'Autonomous coding agent for VS Code with file editing',
    de: 'Autonomer Coding-Agent für VS Code mit Dateibearbeitung',
    fr: 'Agent de codage autonome pour VS Code avec édition de fichiers',
    ja: 'VS Code向け自律コーディングエージェント、ファイル編集対応',
    zh: 'VS Code自主编程智能体，可自动编辑文件',
    es: 'Agente de código autónomo para VS Code con edición de archivos',
    pt: 'Agente de código autônomo para VS Code com edição de arquivos',
    ar: 'عميل ترميز مستقل لـVS Code مع تعديل الملفات',
    ko: 'VS Code용 파일 편집 기능을 갖춘 자율 코딩 에이전트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
