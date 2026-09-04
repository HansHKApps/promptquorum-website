// Local AI App Directory — Locally AI (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'locally-ai',
  name: 'Locally AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'www.locallyai.app',
  tagline: {
    en: 'Runs open models on-device on iPhone/iPad/Mac via MLX',
    de: 'Führt offene Modelle On-Device aus, iPhone/iPad/Mac via MLX',
    fr: 'Modèles ouverts en local sur iPhone/iPad/Mac via MLX',
    ja: 'iPhone/iPad/MacでMLX経由でオープンモデルをオンデバイス実行',
    zh: '在 iPhone/iPad/Mac 上通过 MLX 本地运行开源模型',
    es: 'Modelos abiertos en el dispositivo, iPhone/iPad/Mac vía MLX',
    pt: 'Modelos abertos no dispositivo, iPhone/iPad/Mac via MLX',
    ar: 'يشغّل نماذج مفتوحة على الجهاز على iPhone/iPad/Mac عبر MLX',
    ko: 'iPhone/iPad/Mac에서 MLX로 오픈 모델을 온디바이스 실행',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
