// Local AI App Directory — Valo: closed-source desktop workspace for hosted coding assistants and local models (Charm Works Ltd)
// Added 2026-11-28. Facts verified 2026-11-28 against getvalo.dev (home, /download, /features, /pricing, /faq, /about, /privacy
// last updated 2026-11-25, /terms last updated 2026-07-18): v1.4.2 "released November 26, 2026". Stale warning OFF.
// /impressum, /changelog and /docs returned 404; no source repository link found.
// Maker conflict, disclosed in the review: pricing/FAQ/about say local models run through Ollama; the privacy policy says
// "when local-model support is enabled ... This support is in active development."
// The privacy policy's third-party AI list names Anthropic, OpenAI and Z.AI only; the site also names Gemini, Cursor, Seedance and Telegram.
// Not checked: app binary, network traffic, Ollama support in 1.4.2. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'valo',
  name: 'Valo',
  categories: ['multi-agent-orchestration', 'terminal-coding-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid', // projects, chats and vault stored locally per the maker; hosted assistants send requests to their provider; local models via Ollama
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Codex', 'Gemini', 'Cursor', 'GLM', 'Ollama'],
  engine: 'external', // drives provider command-line tools and Ollama; ships no model of its own
  license: 'Proprietary (closed source)', // terms: "The application is closed-source"
  price: 'freemium', // free plan; Valo Pro US$12.99/month via Paddle; 14-day Pro trial; hosted models need the user's own plan or API credits
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated
  stars: null,
  addedDate: '2026-11-28',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'getvalo.dev',
  installEffort: 'installer',
  installEvidence: 'getvalo.dev/download checked 2026-11-28, v1.4.2: Valo-Setup-1.4.2.exe, Valo-1.4.2-arm64.dmg, Valo-1.4.2-x64.dmg, Valo-1.4.2.AppImage, valo_1.4.2_amd64.deb, valo-1.4.2.x86_64.rpm on updates.getvalo.dev (files not downloaded or run)',
  hqCountry: 'GB',
  hqCountrySource: 'https://getvalo.dev/', // footer: "Charm Works Ltd · Registered in the United Kingdom · Company number 17489768"; privacy policy and terms name no country
  tagline: {
    en: 'Closed-source desktop workspace that runs Claude, Codex, Gemini, Cursor, GLM and, per the maker, Ollama local models side by side',
    de: 'Desktop-Arbeitsbereich mit geschlossenem Quellcode für Claude, Codex, Gemini, Cursor, GLM und laut Anbieter lokale Ollama-Modelle',
    fr: 'Espace de travail de bureau propriétaire pour Claude, Codex, Gemini, Cursor, GLM et, selon l’éditeur, des modèles locaux via Ollama',
    ja: 'Claude・Codex・Gemini・Cursor・GLM、開発元によればOllamaのローカルモデルも並べて使える非公開ソースのデスクトップ作業環境',
    zh: '闭源桌面工作台：并排使用 Claude、Codex、Gemini、Cursor、GLM，据开发者称还支持 Ollama 本地模型',
    es: 'Espacio de trabajo de escritorio de código cerrado para Claude, Codex, Gemini, Cursor, GLM y, según el creador, modelos locales con Ollama',
    pt: 'Ambiente de trabalho para desktop, de código fechado, com Claude, Codex, Gemini, Cursor, GLM e, segundo o fabricante, modelos locais via Ollama',
    ar: 'مساحة عمل مكتبية مغلقة المصدر تشغّل Claude وCodex وGemini وCursor وGLM، وبحسب المطوّر نماذج Ollama المحلية',
    ko: 'Claude, Codex, Gemini, Cursor, GLM과 개발사 설명에 따르면 Ollama 로컬 모델까지 함께 쓰는 비공개 소스 데스크톱 작업 공간',
  },
  // Pricing, FAQ and features pages: local models through Ollama; "Code editing and terminal". A missing key = not stated, never false.
  compare: { localLlm: true, ollama: true, agentMode: true },
  reviewSlug: 'valo-review',
  pqReview: {
    date: '2026-11-28',
    version: '1.4.2',
    versionSourceUrl: 'https://getvalo.dev/download',
  },
  verdict: 'Best for people who already pay for Claude, ChatGPT or GLM access and want those assistants in one desktop app with saved chats, per-tool permissions and a credential vault; limited by closed source, hosted models sending requests to their providers, and conflicting maker statements on how ready local Ollama support is.',
  lastVerifiedDate: '2026-11-28',
  lastUpstreamUpdate: '2026-11-26', // download page: "Version 1.4.2 · released November 26, 2026"
  lastUpstreamUpdateSource: 'https://getvalo.dev/download',
}
