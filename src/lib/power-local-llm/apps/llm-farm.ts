// Local AI App Directory — LLM Farm (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llm-farm',
  name: 'LLM Farm',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false }, // per github.com/guinmoon/LLMFarm README: requires macOS 13+ or iOS 16+ and uses Metal acceleration via llama.cpp/GGML — README states it does "dont work on intel Mac", implying Apple Silicon GPU (Metal) is required; no numeric RAM figure published, verified 2026-09-13
  stars: 2100,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'github.com/guinmoon/LLMFarm',
  tagline: {
    en: 'iOS local LLM with model browser',
    de: 'iOS-Client für lokale LLMs mit Modell-Browser',
    fr: 'Client iOS pour LLM locaux avec navigateur de modèles',
    ja: 'モデルブラウザ付きiOSローカルLLM',
    zh: '带模型浏览器的iOS本地LLM',
    es: 'LLM local para iOS con explorador de modelos',
    pt: 'LLM local para iOS com explorador de modelos',
    ar: 'نماذج لغوية محلية لـiOS مع مستعرض نماذج',
    ko: '모델 탐색기가 있는 iOS용 로컬 LLM',
  },
  reviewSlug: 'llm-farm-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
