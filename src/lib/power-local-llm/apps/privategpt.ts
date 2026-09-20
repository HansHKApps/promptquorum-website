// Local AI App Directory — PrivateGPT (layer: rag)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'privategpt',
  name: 'PrivateGPT',
  categories: ['document-pdf-chat'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp'],
  engine: 'external',
  license: 'Apache 2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per github.com/zylon-ai/private-gpt README + docs.privategpt.dev: PrivateGPT does not run models itself, it connects to an external OpenAI-compatible inference server (Ollama/vLLM/llama.cpp/etc.); no hardware floor stated for the app layer itself beyond Python 3.11-3.13. Verified 2026-09-13
  stars: 57500,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/zylon-ai/private-gpt',
  tagline: {
    en: 'Fully offline enterprise-leaning RAG',
    de: 'Vollständig offline betreibbares, enterprise-orientiertes RAG',
    fr: 'RAG entièrement hors ligne, orienté entreprise',
    ja: '完全オフライン対応のエンタープライズ向けRAG',
    zh: '完全离线的企业级RAG方案',
    es: 'RAG completamente offline orientado a empresas',
    pt: 'RAG completamente offline orientado a empresas',
    ar: 'RAG كامل بدون اتصال موجَّه للمؤسسات',
    ko: '기업 지향의 완전 오프라인 RAG',
  },
  reviewSlug: 'privategpt-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { localLlm: true, dockerDeploy: true, apiServer: true, multiFormat: true, citations: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
