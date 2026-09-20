// Local AI App Directory — PocketPal AI (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pocketpal-ai',
  name: 'PocketPal AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // per github.com/a-ghorbani/pocketpal-ai README + pocketpal-ai-review.ts: app itself has no fixed RAM floor (2-4B models need ~3-4GB free RAM, 7-8B need 6-8GB+, per general GGUF sizing guidance, not app-specific); runs CPU-only by default with optional Metal (iOS)/Hexagon NPU (Android) acceleration, no GPU required. Verified 2026-09-13
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
  reviewSlug: 'pocketpal-ai-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { voice: true, offline: true, importModels: true, modelDownloads: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
