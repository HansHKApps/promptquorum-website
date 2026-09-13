// Local AI App Directory — Tabby (layer: ide)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tabby',
  name: 'Tabby',
  categories: ['code-assistants-ide-plugins', 'api-servers'],
  interfaces: ['cli', 'plugin'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'vLLM', 'OpenAI API'],
  engine: 'builtin',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: 8, cpuOnly: false }, // per tabby.tabbyml.com/docs/faq/ ("Tabby operates in int8 mode with CUDA, requiring approximately 8GB of VRAM for CodeLlama-7B" — the default completion model) and tabby.tabbyml.com/docs/models/ (recommends NVIDIA T4/10-series/20-series or Apple Silicon for 1B-3B models, V100/A100/30-40-series for 7B-13B); no documented CPU-only path, verified 2026-09-13
  stars: 33858,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['code'],
  url: 'tabby.tabbyml.com',
  tagline: {
    en: 'Self-hosted GitHub Copilot alternative',
    de: 'Selbst gehostete GitHub Copilot-Alternative',
    fr: 'Alternative auto-hébergée à GitHub Copilot',
    ja: 'セルフホスト型GitHub Copilot代替',
    zh: '自托管的GitHub Copilot替代方案',
    es: 'Alternativa autoalojada a GitHub Copilot',
    pt: 'Alternativa auto-hospedada ao GitHub Copilot',
    ar: 'بديل مستضاف ذاتياً لـGitHub Copilot',
    ko: 'GitHub Copilot의 셀프호스팅 대안',
  },
  reviewSlug: 'tabby-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
