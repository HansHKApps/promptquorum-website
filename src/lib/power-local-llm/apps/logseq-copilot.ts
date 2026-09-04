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
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 317,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/logancyang/logseq-copilot',
  tagline: {
    en: 'Logseq plugin for local and cloud LLM chat, same author as Obsidian Copilot',
    de: 'Logseq-Plugin für lokalen und Cloud-LLM-Chat, gleicher Autor wie Obsidian Copilot',
    fr: 'Plugin Logseq pour chat LLM local et cloud, même auteur qu\'Obsidian Copilot',
    ja: 'LogseqのローカルとクラウドLLMチャットプラグイン（Obsidian Copilotと同作者）',
    zh: '支持本地和云端LLM聊天的Logseq插件，与Obsidian Copilot同一作者',
    es: 'Plugin de Logseq para chat LLM local y en la nube, mismo autor que Obsidian Copilot',
    pt: 'Plugin do Logseq para chat LLM local e na nuvem',
    ar: 'إضافة Logseq لدردشة نماذج لغوية محلية وسحابية، نفس مؤلف Obsidian Copilot',
    ko: 'Logseq용 로컬 및 클라우드 LLM 채팅 플러그인(Obsidian Copilot과 동일 작성자)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
