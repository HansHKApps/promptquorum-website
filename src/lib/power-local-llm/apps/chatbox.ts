// Local AI App Directory — Chatbox (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'chatbox',
  name: 'Chatbox',
  layer: 'webui',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: null,
  engine: 'external',
  license: 'GPLv3',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 41637,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat'],
  url: 'chatboxai.app',
  tagline: {
    en: 'Cross-platform desktop and web client',
    de: 'Plattformübergreifender Desktop- und Web-Client',
    fr: 'Client bureau et web multiplateforme',
    ja: 'クロスプラットフォームのデスクトップ・Webクライアント',
    zh: '跨平台桌面与Web客户端',
    es: 'Cliente multiplataforma de escritorio y web',
    pt: 'Cliente multiplataforma de desktop e web',
    ar: 'عميل متعدد المنصات لسطح المكتب والويب',
    ko: '크로스플랫폼 데스크톱 및 웹 클라이언트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
