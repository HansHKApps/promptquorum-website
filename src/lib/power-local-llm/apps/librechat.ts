// Local AI App Directory — LibreChat (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'librechat',
  name: 'LibreChat',
  layer: 'webui',
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API', 'OpenRouter'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 42808,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'librechat.ai',
  tagline: {
    en: 'Multi-model ChatGPT alternative with team features',
    de: 'Multi-Modell-ChatGPT-Alternative mit Team-Funktionen',
    fr: 'Alternative ChatGPT multi-modèles avec fonctionnalités équipe',
    ja: 'チーム機能付きマルチモデルChatGPT代替',
    zh: '具备团队功能的多模型ChatGPT替代方案',
    es: 'Alternativa a ChatGPT multimodelo con funciones de equipo',
    pt: 'Alternativa ao ChatGPT multi-modelo com recursos de equipe',
    ar: 'بديل ChatGPT متعدد النماذج مع ميزات الفريق',
    ko: '팀 기능을 갖춘 멀티모델 ChatGPT 대안',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
