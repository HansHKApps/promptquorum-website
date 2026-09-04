// Local AI App Directory — Leon AI (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'leon-ai',
  name: 'Leon AI',
  layer: 'agent',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 17500,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'github.com/leon-ai/leon',
  tagline: {
    en: 'Open-source personal AI assistant framework',
    de: 'Open-Source-Framework für einen persönlichen KI-Assistenten',
    fr: 'Framework open source pour assistant IA personnel',
    ja: 'オープンソースのパーソナルAIアシスタントフレームワーク',
    zh: '开源个人AI助手框架',
    es: 'Framework de código abierto para un asistente de IA personal',
    pt: 'Framework de código aberto para assistente de IA pessoal',
    ar: 'إطار عمل مفتوح المصدر لمساعد ذكاء اصطناعي شخصي',
    ko: '오픈소스 개인 AI 비서 프레임워크',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
