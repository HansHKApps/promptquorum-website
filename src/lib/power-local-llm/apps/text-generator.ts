// Local AI App Directory — Text Generator (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'text-generator',
  name: 'Text Generator',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'llama.cpp', 'KoboldCpp', 'LocalAI'],
  engine: 'external',
  license: 'MIT',
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // per github.com/nhaouari/obsidian-textgenerator-plugin README, checked 2026-09-13 — no hardware/system-requirements section; it's a thin Obsidian plugin, depends entirely on the LLM backend the user configures, no fixed floor of its own
  stars: 2000,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/nhaouari/obsidian-textgenerator-plugin',
  tagline: {
    en: 'Obsidian content generation plugin',
    de: 'Obsidian-Plugin zur Inhaltsgenerierung',
    fr: 'Plugin Obsidian de génération de contenu',
    ja: 'Obsidianのコンテンツ生成プラグイン',
    zh: 'Obsidian内容生成插件',
    es: 'Plugin de generación de contenido para Obsidian',
    pt: 'Plugin de geração de conteúdo para Obsidian',
    ar: 'إضافة توليد محتوى لـObsidian',
    ko: 'Obsidian용 콘텐츠 생성 플러그인',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { noteApp: 'Obsidian' },
  lastVerifiedDate: null, // TODO: not derivable from source article
  reviewSlug: 'text-generator-review', // dedicated PromptQuorum review
}
