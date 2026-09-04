// Local AI App Directory — Open WebUI (layer: webui)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'open-webui',
  name: 'Open WebUI',
  layer: 'webui',
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux', 'web'],
  worksWith: ['Ollama', 'OpenAI API'],
  engine: 'external',
  license: 'BSD 3-Clause',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['chat'],
  url: 'openwebui.com',
  tagline: {
    en: 'Most popular self-hosted ChatGPT-like UI with built-in RAG',
    de: 'Beliebtestes selbst gehostetes ChatGPT-ähnliches UI mit integriertem RAG',
    fr: 'Interface auto-hébergée la plus populaire, style ChatGPT, RAG intégré',
    ja: 'RAG内蔵の最も人気のあるセルフホストChatGPT風UI',
    zh: '最受欢迎的自托管ChatGPT类界面，内置RAG',
    es: 'La interfaz autoalojada estilo ChatGPT más popular, con RAG integrado',
    pt: 'A interface auto-hospedada estilo ChatGPT mais popular, com RAG integrado',
    ar: 'الواجهة المستضافة ذاتياً الأكثر شعبية بطراز ChatGPT، مع RAG مدمج',
    ko: '가장 인기 있는 ChatGPT 스타일 셀프호스팅 인터페이스, RAG 내장',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
