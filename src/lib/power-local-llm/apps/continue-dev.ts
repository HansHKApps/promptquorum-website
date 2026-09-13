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
  tagline: {
    en: 'VS Code and JetBrains autocomplete and chat with local models',
    de: 'VS Code- und JetBrains-Autovervollständigung und Chat mit lokalen Modellen',
    fr: 'Autocomplétion et chat VS Code et JetBrains avec modèles locaux',
    ja: 'ローカルモデルを使ったVS CodeとJetBrainsの自動補完・チャット',
    zh: '支持本地模型的VS Code和JetBrains自动补全与聊天',
    es: 'Autocompletado y chat en VS Code y JetBrains con modelos locales',
    pt: 'Autocompletar e chat no VS Code e JetBrains com modelos locais',
    ar: 'إكمال تلقائي ودردشة في VS Code وJetBrains مع النماذج المحلية',
    ko: 'VS Code 및 JetBrains에서 로컬 모델로 자동 완성 및 채팅',
  },
  reviewSlug: 'continue-dev-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
