// Local AI App Directory — LobeChat (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lobechat',
  name: 'LobeChat',
  categories: ['general-chat-clients'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'MIT',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // LobeChat is a self-hosted Next.js chat UI (lobehub.com/docs/self-hosting) that calls out to external LLM providers/local backends via API rather than running inference itself — no GPU needed for the app; official self-hosting docs did not publish a fixed minimum RAM figure for the container itself (checked 2026-09-13, docs page under migration)
  stars: 82229,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'lobehub.com',
  tagline: {
    en: 'Modern polished UI with plugin marketplace',
    de: 'Moderne, übersichtliche UI mit Plugin-Marktplatz',
    fr: 'Interface moderne et soignée avec place de marché de plugins',
    ja: 'プラグインマーケットプレイス付きのモダンな洗練されたUI',
    zh: '带插件市场的现代精良UI',
    es: 'Interfaz moderna y pulida con marketplace de plugins',
    pt: 'Interface moderna e polida com marketplace de plugins',
    ar: 'واجهة حديثة ومصقولة مع سوق إضافات',
    ko: '플러그인 마켓플레이스가 있는 현대적이고 세련된 인터페이스',
  },
  reviewSlug: 'lobechat-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
