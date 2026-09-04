// Local AI App Directory — Enclave AI (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'enclave-ai',
  name: 'Enclave AI',
  layer: 'mobile',
  locality: 'local',
  platforms: ['ios'],
  worksWith: null,
  engine: 'builtin',
  license: 'Free (closed)',
  price: 'paid',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'enclaveai.app',
  tagline: {
    en: 'iPhone/iPad/Mac local AI assistant, fully offline',
    de: 'Lokaler KI-Assistent für iPhone/iPad/Mac, vollständig offline',
    fr: 'Assistant IA local pour iPhone/iPad/Mac, 100% hors ligne',
    ja: 'iPhone/iPad/Mac向けローカルAIアシスタント、完全オフライン',
    zh: 'iPhone/iPad/Mac本地AI助手，完全离线',
    es: 'Asistente de IA local para iPhone/iPad/Mac, 100% offline',
    pt: 'Assistente de IA local para iPhone/iPad/Mac, 100% offline',
    ar: 'مساعد ذكاء اصطناعي محلي لأجهزة iPhone/iPad/Mac، يعمل بلا اتصال بالكامل',
    ko: 'iPhone/iPad/Mac용 로컬 AI 어시스턴트, 완전 오프라인',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
