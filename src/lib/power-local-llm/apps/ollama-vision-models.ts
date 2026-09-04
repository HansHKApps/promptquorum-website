// Local AI App Directory — Ollama vision models (layer: vision)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ollama-vision-models',
  name: 'Ollama vision models',
  categories: ['vision-ocr'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama'],
  engine: 'external',
  license: 'Various',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image'],
  url: 'ollama.com',
  tagline: {
    en: 'Vision-capable models via Ollama (Llama 3.2 Vision, LLaVA, etc.)',
    de: 'Vision-fähige Modelle via Ollama (Llama 3.2 Vision, LLaVA u. a.)',
    fr: 'Modèles avec capacités vision via Ollama (Llama 3.2 Vision, LLaVA, etc.)',
    ja: 'Ollamaによるローカルビジョン（Llama 3.2 Vision、Llavaなど）',
    zh: '通过Ollama运行的视觉模型（Llama 3.2 Vision、LLaVA等）',
    es: 'Modelos con capacidad visual vía Ollama (Llama 3.2 Vision, LLaVA, etc.)',
    pt: 'Modelos com capacidade visual via Ollama (Llama 3.2 Vision, LLaVA, etc.)',
    ar: 'نماذج قادرة على الرؤية عبر Ollama (Llama 3.2 Vision وLLaVA وغيرها)',
    ko: 'Ollama를 통한 비전 지원 모델(Llama 3.2 Vision, LLaVA 등)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
