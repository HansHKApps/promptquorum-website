// Local AI App Directory — Private LLM (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'private-llm',
  name: 'Private LLM',
  layer: 'mobile',
  locality: 'local',
  platforms: ['ios', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Paid (closed)',
  price: 'paid',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'privatellm.app',
  tagline: {
    en: 'Polished iOS and macOS local LLM app',
    de: 'Ausgereifte iOS- und macOS-App für lokale LLMs',
    fr: 'Application iOS et macOS soignée pour LLM locaux',
    ja: '洗練されたiOS・macOSローカルLLMアプリ',
    zh: '精良的iOS和macOS本地LLM应用',
    es: 'App LLM local pulida para iOS y macOS',
    pt: 'App LLM local polida para iOS e macOS',
    ar: 'تطبيق نماذج لغوية محلية مصقول لـiOS وmacOS',
    ko: 'iOS 및 macOS용 세련된 로컬 LLM 앱',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
