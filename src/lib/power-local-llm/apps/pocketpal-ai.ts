// Local AI App Directory — PocketPal AI (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pocketpal-ai',
  name: 'PocketPal AI',
  layer: 'mobile',
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 8200,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'github.com/a-ghorbani/pocketpal-ai',
  tagline: {
    en: 'Free iOS and Android local LLM client',
    de: 'Kostenloser iOS- und Android-Client für lokale LLMs',
    fr: 'Client LLM local gratuit pour iOS et Android',
    ja: '無料のiOS・Androidローカルクライアント',
    zh: '免费的iOS和Android本地LLM客户端',
    es: 'Cliente LLM local gratuito para iOS y Android',
    pt: 'Cliente LLM local gratuito para iOS e Android',
    ar: 'عميل نماذج لغوية محلية مجاني لـiOS وAndroid',
    ko: 'iOS 및 Android용 무료 로컬 LLM 클라이언트',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
