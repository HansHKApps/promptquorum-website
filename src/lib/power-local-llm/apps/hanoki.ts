// Local AI App Directory — Hanoki (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hanoki',
  name: 'Hanoki',
  layer: 'desktop',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'hybrid',
  platforms: ['mac'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API', 'Google Gemini API', 'OpenRouter'],
  engine: 'both',
  license: 'MIT',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['chat'],
  url: 'hanoki.app',
  tagline: {
    en: 'macOS branching chat, local via Ollama or cloud APIs',
    de: 'macOS-Chat mit Verzweigungen, lokal via Ollama oder Cloud-APIs',
    fr: 'Chat à branches pour macOS, local via Ollama ou API cloud',
    ja: 'macOS向け分岐チャット、Ollamaでローカルまたはクラウド API',
    zh: 'macOS 分支式聊天，通过 Ollama 本地运行或使用云端 API',
    es: 'Chat con ramas para macOS, local vía Ollama o APIs en la nube',
    pt: 'Chat com ramificações no macOS, local via Ollama ou APIs na nuvem',
    ar: 'دردشة متفرعة لـmacOS، محلية عبر Ollama أو واجهات سحابية',
    ko: 'macOS 분기형 채팅, Ollama로 로컬 실행 또는 클라우드 API',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
