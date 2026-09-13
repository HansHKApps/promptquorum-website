// Local AI App Directory — Continue.dev (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'continue-dev',
  name: 'Continue.dev',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // docs.continue.dev has no stated fixed hardware minimum for the extension itself; it's a VS Code/JetBrains client, floor depends entirely on the local or cloud model backend configured, verified 2026-09-13
  stars: 35757,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'continue.dev',
  // Updated 2026-09-13: Cursor acquired Continue.dev's maker in June 2026; last real
  // commit was July 2026 — the project is effectively discontinued. Tagline now
  // discloses this instead of describing it as an active tool; see the dedicated
  // review (continue-dev-review) for the full account. This tagline is reused
  // elsewhere as longer-form prose, not just in a 60-char table cell, so it is not
  // held to the article table's cell-length limit.
  tagline: {
    en: 'Discontinued VS Code/JetBrains assistant — Cursor acquired the maker in 2026',
    de: 'Eingestellter VS-Code-/JetBrains-Assistent — Cursor übernahm den Hersteller 2026',
    fr: 'Assistant VS Code/JetBrains abandonné — Cursor a racheté l\'éditeur en 2026',
    ja: '提供終了したVS Code/JetBrains向けアシスタント — 2026年にCursorが開発元を買収',
    zh: '已停止维护的VS Code/JetBrains助手——2026年被Cursor收购开发商',
    es: 'Asistente de VS Code/JetBrains descontinuado — Cursor adquirió al fabricante en 2026',
    pt: 'Assistente de VS Code/JetBrains descontinuado — a Cursor adquiriu a fabricante em 2026',
    ar: 'مساعد VS Code/JetBrains متوقف — استحوذت Cursor على الشركة المصنعة عام 2026',
    ko: '단종된 VS Code/JetBrains 어시스턴트 — 2026년 Cursor가 제작사를 인수',
  },
  reviewSlug: 'continue-dev-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
