// Local AI App Directory — h2oGPT (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'h2ogpt',
  name: 'h2oGPT',
  layer: 'desktop',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: null,
  engine: 'both',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 12000,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['serve'],
  url: 'github.com/h2oai/h2ogpt',
  tagline: {
    en: 'Enterprise-feature-heavy desktop and server',
    de: 'Funktionsreiche Enterprise-Desktop- und Serveranwendung',
    fr: 'Application bureau et serveur riche en fonctionnalités enterprise',
    ja: 'エンタープライズ機能が充実したデスクトップ・サーバーアプリ',
    zh: '企业功能丰富的桌面与服务器方案',
    es: 'Escritorio y servidor con muchas funciones enterprise',
    pt: 'Desktop e servidor com muitos recursos enterprise',
    ar: 'سطح مكتب وخادم مع ميزات مؤسسية كثيرة',
    ko: '많은 엔터프라이즈 기능을 갖춘 데스크톱 및 서버',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
