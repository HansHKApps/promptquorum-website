// Local AI App Directory — Msty (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'msty',
  name: 'Msty',
  categories: ['general-chat-clients', 'runtimes-managers'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'OpenAI API'],
  engine: 'both',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'msty.app',
  tagline: {
    en: 'Clean consumer UX, multi-provider support',
    de: 'Übersichtliche Consumer-UX, Multi-Provider-Unterstützung',
    fr: 'UX grand public épurée, support multi-fournisseurs',
    ja: 'すっきりしたコンシューマーUX。マルチプロバイダー対応',
    zh: '简洁的消费级UX，支持多提供商',
    es: 'UX de consumidor limpia, soporte multi-proveedor',
    pt: 'UX de consumidor limpa, suporte multi-provedor',
    ar: 'تجربة مستخدم استهلاكية نظيفة، دعم متعدد المزودين',
    ko: '깔끔한 소비자 UX, 멀티 제공자 지원',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
