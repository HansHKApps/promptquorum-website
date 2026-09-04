// Local AI App Directory — Jan (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'jan',
  name: 'Jan',
  layer: 'desktop',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 44331,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat'],
  url: 'jan.ai',
  tagline: {
    en: 'Privacy-focused offline ChatGPT clone, fully open-source',
    de: 'Datenschutzorientierter Offline-ChatGPT-Klon, vollständig quelloffen',
    fr: 'Clone ChatGPT hors ligne axé vie privée, entièrement open source',
    ja: 'プライバシー重視のオフラインChatGPTクローン。完全オープンソース',
    zh: '注重隐私的离线ChatGPT替代品，完全开源',
    es: 'Clon offline de ChatGPT centrado en la privacidad, totalmente open-source',
    pt: 'Clone offline do ChatGPT com foco em privacidade, totalmente open-source',
    ar: 'استنساخ ChatGPT بدون اتصال يركز على الخصوصية، مفتوح المصدر بالكامل',
    ko: '프라이버시 중심의 오프라인 ChatGPT 클론, 완전 오픈소스',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
