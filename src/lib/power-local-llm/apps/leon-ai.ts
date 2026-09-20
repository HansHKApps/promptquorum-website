// Local AI App Directory — Leon AI (layer: agent)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'leon-ai',
  name: 'Leon AI',
  categories: ['autonomous-agents'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // left null — not documented; checked github.com/leon-ai/leon README, docs.getleon.ai, and GitHub search — no stated minimum RAM/VRAM found for this Node.js-based assistant, which delegates NLU/skills to configurable providers, checked 2026-09-13
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
  reviewSlug: 'leon-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  pqReview: { date: '2026-09-20', version: 'v1.0.0-beta.8', versionSourceUrl: 'https://github.com/leon-ai/leon/releases/tag/v1.0.0-beta.8' },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
