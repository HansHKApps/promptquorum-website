// Local AI App Directory — Zed (layer: ide)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Local model support was flagged in the source doc as "claimed by source article, not
// independently confirmed" — verified directly against zed.dev/docs/ai/use-a-local-model
// and zed.dev/blog/local-ai-in-zed before writing this entry.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'zed',
  name: 'Zed',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'GPL-3.0 (editor) / AGPL-3.0 (server) / Apache-2.0 (GPUI)',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per the PromptQuorum review (src/lib/power-local-llm/articles/zed-review.ts): "Zed has no fixed hardware minimum for the editor itself — the practical requirement is whichever local AI model you choose to load through Ollama or LM Studio", checked 2026-09-13
  stars: 89787, // github.com/zed-industries/zed, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['code', 'chat'],
  url: 'zed.dev',
  tagline: {
    en: 'High-performance code editor with native local model support via Ollama and LM Studio',
    de: 'Hochleistungs-Code-Editor mit nativer Unterstützung lokaler Modelle über Ollama und LM Studio',
    fr: 'Éditeur de code haute performance avec prise en charge native des modèles locaux via Ollama et LM Studio',
    ja: 'OllamaとLM Studio経由でローカルモデルをネイティブサポートする高性能コードエディタ',
    zh: '通过Ollama和LM Studio原生支持本地模型的高性能代码编辑器',
    es: 'Editor de código de alto rendimiento con soporte nativo para modelos locales mediante Ollama y LM Studio',
    pt: 'Editor de código de alto desempenho com suporte nativo a modelos locais via Ollama e LM Studio',
    ar: 'محرر أكواد عالي الأداء بدعم أصلي للنماذج المحلية عبر Ollama وLM Studio',
    ko: 'Ollama 및 LM Studio를 통해 네이티브 로컬 모델을 지원하는 고성능 코드 에디터',
  },
  reviewSlug: 'zed-review', // dedicated PromptQuorum review — 2026-09-12
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { mcp: true, agentMode: true, autocomplete: true },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
