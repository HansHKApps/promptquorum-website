// Local AI App Directory — Atlarix (layer: code-assistants-ide-plugins)
// Founder-submission entry: Amariah Abishai (Norah Labs) reached out to
// PromptQuorum directly by email in 2026-09. Facts below come from that
// correspondence, corroborated by atlarix.dev, plus PromptQuorum's own
// research into secondary sources (the maker's own blog/public posts,
// which are NOT independently verified by PromptQuorum). No license or
// version number could be independently verified — both left as TODO/unset
// per this repo's convention (a sentinel means "not yet researched," never
// "verified empty").

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'atlarix',
  name: 'Atlarix',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['desktop', 'plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  license: 'TODO',
  price: 'freemium',
  // Hardware floor depends entirely on which local model the user loads via
  // Ollama or LM Studio, not a fixed attribute of Atlarix itself — same
  // convention as continue-dev.ts and other client-only tools in this file.
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: null, // no public GitHub star count found for an official Atlarix repo
  addedDate: '2026-09-25',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'atlarix.dev',
  tagline: {
    en: 'Free AI coding agent — 100% local via Ollama or LM Studio, hybrid for its Chrome extension',
    de: 'Kostenloser KI-Coding-Agent — 100% lokal über Ollama oder LM Studio, hybrid für die Chrome-Erweiterung',
    fr: "Agent de codage IA gratuit — 100 % local via Ollama ou LM Studio, hybride pour l'extension Chrome",
    ja: '無料のAIコーディングエージェント — OllamaまたはLM Studioで完全ローカル、Chrome拡張機能はハイブリッド',
    zh: '免费AI编程代理——通过Ollama或LM Studio实现100%本地运行，Chrome扩展为混合模式',
    es: 'Agente de codificación IA gratuito: 100% local con Ollama o LM Studio, híbrido para su extensión de Chrome',
    pt: 'Agente de codificação IA gratuito — 100% local com Ollama ou LM Studio, híbrido para a extensão do Chrome',
    ar: 'وكيل برمجة بالذكاء الاصطناعي مجاني — محلي بنسبة 100% عبر Ollama أو LM Studio، وهجين لإضافة Chrome',
    ko: '무료 AI 코딩 에이전트 — Ollama 또는 LM Studio로 100% 로컬, Chrome 확장 프로그램은 하이브리드',
  },
  reviewSlug: 'atlarix-review',
  // Verified against the founder's own words ("100% local with a local model,
  // hybrid when using managed models") and the product's stated feature set,
  // 2026-09-25. autocomplete/mcp left unset — not stated anywhere checked.
  compare: { localLlm: true, ollama: true, vscode: false, jetbrains: false, agentMode: true },
  founder: {
    who: {
      en: 'Amariah Abishai, Founder, Norah Labs',
      de: 'Amariah Abishai, Gründer, Norah Labs',
      fr: 'Amariah Abishai, fondateur, Norah Labs',
      ja: 'Amariah Abishai、Norah Labs 創業者',
      zh: 'Amariah Abishai，Norah Labs 创始人',
      es: 'Amariah Abishai, fundador de Norah Labs',
      pt: 'Amariah Abishai, fundador da Norah Labs',
      ar: 'أماريا أبيشاي، مؤسس Norah Labs',
      ko: '아마리아 아비샤이, Norah Labs 창립자',
    },
    why: 'Built Atlarix to be an AI coding agent trustworthy with a real codebase: one that plans, edits, runs the project\'s own tests, and never changes a file until the diff is approved — fully local when paired with Ollama or LM Studio.',
    providedDate: '2026-09-25',
    fullQuote: [
      '"I built Atlarix because I wanted an AI agent I could trust with a real codebase: one that plans, edits, runs the project\'s own tests, and never changes a file until I approve the diff."',
      '"With Ollama or LM Studio, everything stays on your machine; there\'s no index, no embeddings, and nothing leaves the laptop. The Chrome extension and Atlarix Reviewer extend the same agent to the browser and to pull requests, and those two run on our managed models."',
      '"I\'d rather state that clearly than have anyone assume more privacy than they\'re getting."',
    ],
    // Verified 2026-09 via the founder's own GitHub bio (github.com/AmariahAK),
    // which names Atlarix + Norah Labs + Nairobi. No X/Twitter link found.
    socials: {
      linkedin: 'https://www.linkedin.com/in/amariah-abishai-3156412a6',
      github: 'https://github.com/AmariahAK',
      instagram: 'https://www.instagram.com/abishaiama',
      website: 'https://atlarix.dev',
    },
  },
  lastVerifiedDate: '2026-09-25',
}
