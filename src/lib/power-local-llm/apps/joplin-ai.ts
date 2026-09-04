// Local AI App Directory — Joplin AI (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'joplin-ai',
  name: 'Joplin AI',
  layer: 'tools',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'joplinapp.org',
  tagline: {
    en: 'Joplin notes with local AI integrations',
    de: 'Joplin-Notizen mit lokalen KI-Integrationen',
    fr: 'Notes Joplin avec intégrations IA locales',
    ja: 'ローカルAI統合付きJoplinノート',
    zh: '集成本地AI的Joplin笔记',
    es: 'Notas de Joplin con integraciones de IA local',
    pt: 'Anotações do Joplin com integrações de IA local',
    ar: 'ملاحظات Joplin مع تكاملات ذكاء اصطناعي محلي',
    ko: '로컬 AI 연동이 있는 Joplin 노트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
