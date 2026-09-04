// Local AI App Directory — Chapper (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'chapper',
  name: 'Chapper',
  layer: 'mobile',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: ['LM Studio', 'OpenAI API'],
  engine: 'external',
  license: 'Free',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'prevolut.uk',
  tagline: {
    en: 'Native Ollama and LM Studio mobile client',
    de: 'Nativer Mobile-Client für Ollama und LM Studio',
    fr: 'Client mobile natif pour Ollama et LM Studio',
    ja: 'OllamaとLM Studio対応のネイティブモバイルクライアント',
    zh: 'Ollama和LM Studio的原生移动客户端',
    es: 'Cliente móvil nativo para Ollama y LM Studio',
    pt: 'Cliente móvel nativo para Ollama e LM Studio',
    ar: 'عميل محمول أصلي لـOllama وLM Studio',
    ko: 'Ollama 및 LM Studio용 네이티브 모바일 클라이언트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
