// Local AI App Directory — LibreChat (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'librechat',
  name: 'LibreChat',
  categories: ['general-chat-clients'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API', 'OpenRouter'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: 1, vramGb: null, cpuOnly: true }, // per github.com/danny-avila/LibreChat discussion #3941 (official maintainer answer): Docker deployment minimum is "1 GiB RAM and 1 vCPU" (2GB+ recommended with all features enabled); no GPU required — LibreChat is a chat UI that calls external/API model backends, verified 2026-09-13
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
  reviewSlug: 'librechat-review-2026', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
