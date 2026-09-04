// Local AI App Directory — BoltAI (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'boltai',
  name: 'BoltAI',
  layer: 'desktop',
  locality: 'hybrid',
  platforms: ['mac'],
  worksWith: null,
  engine: 'both',
  license: 'Proprietary',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'boltai.com',
  tagline: {
    en: 'Native macOS desktop AI client with Ollama support',
    de: 'Nativer macOS-Desktop-KI-Client mit Ollama-Unterstützung',
    fr: 'Client IA de bureau natif pour macOS avec prise en charge d\'Ollama',
    ja: 'Ollama対応のネイティブmacOSデスクトップAIクライアント',
    zh: '原生macOS桌面AI客户端,支持Ollama',
    es: 'Cliente de IA de escritorio nativo para macOS con soporte para Ollama',
    pt: 'Cliente de IA de desktop nativo para macOS com suporte a Ollama',
    ar: 'عميل ذكاء اصطناعي مكتبي أصلي لنظام macOS مع دعم Ollama',
    ko: 'Ollama를 지원하는 네이티브 macOS 데스크톱 AI 클라이언트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
