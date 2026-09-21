// Local AI App Directory — Blackbox AI (CLI) (layer: cli)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'blackbox-ai',
  name: 'Blackbox AI (CLI)',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'Apache 2.0',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per docs.blackbox.ai/features/blackbox-cli/getting-started: requires only Node.js 20+, a terminal, and a Blackbox account/API key — a cloud-API client with no local inference, no GPU need; verified 2026-09-13
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code', 'chat'],
  url: 'blackbox.ai/cli', // corrected 2026-09-04: github.com/Blackboxai/blackbox 404s; product is closed-source, no public repo
  tagline: {
    en: 'Terminal code generation and chat from your shell',
    de: 'Terminal-Codegenerierung und Chat aus Ihrer Shell',
    fr: 'Génération de code et chat en terminal depuis votre shell',
    ja: 'シェルからのターミナルコード生成とチャット',
    zh: '在Shell中进行终端代码生成与聊天',
    es: 'Generación de código y chat de terminal desde tu shell',
    pt: 'Geração de código e chat no terminal a partir do seu shell',
    ar: 'توليد كود ودردشة من الطرفية عبر صدفتك',
    ko: '셸에서 터미널 코드 생성 및 채팅',
  },
  reviewSlug: 'blackbox-ai-cli-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { mcp: true, agentMode: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
