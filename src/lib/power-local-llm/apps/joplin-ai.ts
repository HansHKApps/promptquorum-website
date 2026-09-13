// Local AI App Directory — Joplin AI (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'joplin-ai',
  name: 'Joplin AI',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/HugoValim/joplin-ai-plugin',
  tagline: {
    en: 'Joplin AI Agent: review-gated AI chat for Joplin notes via Ollama',
    de: 'Joplin AI Agent: review-pflichtiger KI-Chat für Joplin-Notizen über Ollama',
    fr: 'Joplin AI Agent : chat IA soumis à relecture pour Joplin via Ollama',
    ja: 'Joplin AI Agent：Ollama経由のレビュー必須AIチャットをJoplinノートに追加',
    zh: 'Joplin AI Agent：通过Ollama为Joplin笔记提供需审核的AI聊天',
    es: 'Joplin AI Agent: chat con IA sujeto a revisión para notas de Joplin vía Ollama',
    pt: 'Joplin AI Agent: chat com IA sujeito a revisão para notas do Joplin via Ollama',
    ar: 'Joplin AI Agent: محادثة ذكاء اصطناعي خاضعة للمراجعة لملاحظات Joplin عبر Ollama',
    ko: 'Joplin AI Agent: Ollama를 통한 검토 기반 Joplin 노트 AI 채팅',
  },
  reviewSlug: 'joplin-ai-agent-review',
  lastVerifiedDate: null, // TODO: not derivable from source article
}
