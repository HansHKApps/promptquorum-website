// Local AI App Directory — Enclave AI (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'enclave-ai',
  name: 'Enclave AI',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'],
  locality: 'hybrid', // on-device models by default; the optional Pro subscription adds cloud models routed through Enclave's servers to OpenRouter (privacy policy, effective 2026-09-29)
  platforms: ['ios', 'mac'], // App Store listing also lists Apple Vision (visionOS 27.0+), which has no OSKey; Mac needs macOS 27.0+ and Apple M1 or newer (checked 2026-10-17)
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'freemium', // free download; Pro = $9.99/month subscription (enclaveai.app/pricing, 2026-10-17), plus Mega Boost, Caffeine Charge, Pixel Pledge purchases (US App Store)
  hardware: null, // left null — closed-source iOS/Mac app; enclaveai.app and its App Store listing state no minimum device RAM/model requirement, checked website/App Store/blog 2026-09-13
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'chat'],
  url: 'enclaveai.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/apple-store/id6476614556',
  },
  installEffort: 'installer',
  installEvidence:
    'App Store / Mac App Store listing id6476614556 checked 2026-10-17 (iPhone, iPad, Mac, Apple Vision; v1.77.0): standard App Store install, no terminal step. Requires iOS/iPadOS/macOS/visionOS 27.0 or later; Mac needs Apple M1 or newer.',
  tagline: {
    en: 'iPhone/iPad/Mac local AI assistant, fully offline',
    de: 'Lokaler KI-Assistent für iPhone/iPad/Mac, vollständig offline',
    fr: 'Assistant IA local pour iPhone/iPad/Mac, 100% hors ligne',
    ja: 'iPhone/iPad/Mac向けローカルAIアシスタント、完全オフライン',
    zh: 'iPhone/iPad/Mac本地AI助手，完全离线',
    es: 'Asistente de IA local para iPhone/iPad/Mac, 100% offline',
    pt: 'Assistente de IA local para iPhone/iPad/Mac, 100% offline',
    ar: 'مساعد ذكاء اصطناعي محلي لأجهزة iPhone/iPad/Mac، يعمل بلا اتصال بالكامل',
    ko: 'iPhone/iPad/Mac용 로컬 AI 어시스턴트, 완전 오프라인',
  },
  reviewSlug: 'enclave-ai-review-2026',
  pqReview: {
    date: '2026-10-17',
    version: '1.77.0',
    versionSourceUrl: 'https://apps.apple.com/us/app/enclave-local-ai-assistant/id6476614556',
  }, // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { voice: true, offline: true, modelDownloads: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-01', // App Store version history, read 2026-10-16
  lastUpstreamUpdateSource: 'https://apps.apple.com/app/apple-store/id6476614556',
}
