// Local AI App Directory — ShellGPT (layer: cli)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'shellgpt',
  name: 'ShellGPT',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // lightweight CLI wrapper (github.com/TheR1D/shell_gpt) — depends entirely on the connected backend (OpenAI-compatible API or Ollama); no fixed hardware floor documented. Verified 2026-09-13
  stars: 12300,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'github.com/TheR1D/shell_gpt',
  tagline: {
    en: 'CLI tool for shell command generation and chat',
    de: 'CLI-Tool für Shell-Befehlsgenerierung und Chat',
    fr: 'Outil CLI pour la génération de commandes shell et le chat',
    ja: 'シェルコマンド生成とチャット用CLIツール',
    zh: 'Shell命令生成与聊天CLI工具',
    es: 'Herramienta CLI para generación de comandos shell y chat',
    pt: 'Ferramenta CLI para geração de comandos shell e chat',
    ar: 'أداة CLI لتوليد أوامر الصدفة والدردشة',
    ko: '셸 명령어 생성 및 채팅용 CLI 도구',
  },
  reviewSlug: 'shell-gpt-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { ollama: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
