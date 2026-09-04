// Local AI App Directory — logseq-copilot (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'logseq-copilot',
  name: 'logseq-copilot',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API', 'Google Gemini API'],
  engine: 'external',
  license: 'GPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 317,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/eindex/logseq-copilot', // corrected 2026-09-04: logancyang/logseq-copilot 404s; the real repo is EINDEX/logseq-copilot (317 stars, matches)
  tagline: {
    en: 'Browser extension that surfaces your Logseq notes next to search and LLM chat',
    de: 'Browser-Erweiterung, die Ihre Logseq-Notizen neben Suche und LLM-Chat anzeigt',
    fr: 'Extension de navigateur qui affiche vos notes Logseq à côté de la recherche et du chat LLM',
    ja: 'Logseqのノートを検索やLLMチャットの隣に表示するブラウザ拡張機能',
    zh: '在搜索和LLM聊天旁显示Logseq笔记的浏览器扩展',
    es: 'Extensión de navegador que muestra tus notas de Logseq junto a la búsqueda y el chat LLM',
    pt: 'Extensão de navegador que mostra suas notas do Logseq ao lado da busca e do chat LLM',
    ar: 'إضافة متصفح تعرض ملاحظات Logseq بجانب البحث ودردشة النماذج اللغوية',
    ko: '검색과 LLM 채팅 옆에 Logseq 노트를 보여주는 브라우저 확장 프로그램',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
