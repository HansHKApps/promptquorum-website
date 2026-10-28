// Local AI App Directory — TecAdRiseBot (layer: agent, Windows desktop multi-agent chat on the Cursor SDK)
// Added 2026-10-28 on Hans's request from the product page https://tecadrise.ai/products/tecadrisebot (no maker contact yet).
// Verified 2026-10-28 against: the product page and its bundled FAQ/comparison pages (tecadrise.ai/products/tecadrisebot,
// /vs/tecadrisebot-vs-grok-bot), the GitHub repo tecadrise-ai/TecAdRiseBot (README, package.json "version": "0.1.0", MIT LICENSE,
// created 2026-09-19, last push 2026-10-23, 0 stars, Releases = one "demo-video" tag with tecadrisebot-demo.mp4 and no installer) and the Cursor
// TypeScript SDK docs (cursor.com/docs/sdk/typescript: "All inference goes through Cursor's hosted models in both modes").
// Locality is `hybrid`, NOT `local`: the app, agent config, memory and workspaces live on the PC, but every model call goes to Cursor's hosted
// models through a Cursor API key, which Cursor bills separately. The vendor's "runs locally" / "local-first" wording describes the app and its files.
// Install: the README's only path is `git clone` + `npm install` + `npm run dev` (Node 22.13+), so the tier is `terminal-setup`.
// No founder is named on the site; the legal page (tecadrise.ai/terms) is the company's general website/services policy (updated "January 2025")
// and does not mention the app.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tecadrisebot',
  name: 'TecAdRiseBot',
  categories: ['autonomous-agents'],
  interfaces: ['desktop'],
  locality: 'hybrid', // app, memory and workspaces on the PC; all inference through Cursor's hosted models (Cursor SDK docs, 2026-10-28)
  platforms: ['win'], // Windows 10/11 only; the site says "Mac support may come later"
  worksWith: ['Cursor API', 'MCP', 'Playwright MCP', 'AgentMail'],
  engine: 'external', // no model is bundled; the Cursor SDK calls Cursor's hosted catalog
  license: 'MIT',
  price: 'free', // the app is free; Cursor bills the pasted API key separately (site, 2026-10-28)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no RAM/GPU figures stated; needs Node.js 22.13+ and npm 10+ (README, 2026-10-28)
  stars: 0, // GitHub API, 2026-10-28 (repo created 2026-09-19)
  addedDate: '2026-10-28',
  status: 'listed',
  uses: ['agent', 'chat'],
  mcpSupport: true, // global and per-agent MCP JSON; Playwright and AgentMail MCP servers bundled on first launch (README)
  reviewSlug: 'tecadrisebot-review',
  url: 'tecadrise.ai/products/tecadrisebot',
  storeLinks: {
    github: 'https://github.com/tecadrise-ai/TecAdRiseBot',
    web: 'https://tecadrise.ai/products/tecadrisebot',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README quick start is git clone, npm install, npm run dev (Node 22.13+, npm 10+); GitHub Releases holds only a "demo-video" tag with tecadrisebot-demo.mp4 and no installer; read 2026-10-28',
  pqReview: {
    date: '2026-10-28',
    version: '0.1.0',
    versionSourceUrl: 'https://raw.githubusercontent.com/tecadrise-ai/TecAdRiseBot/master/package.json',
  },
  tagline: {
    en: 'Free Windows desktop for named AI agents with memory, MCP, skills and schedules, built on the Cursor SDK',
    de: 'Kostenloser Windows-Desktop für benannte KI-Agenten mit Gedächtnis, MCP, Skills und Zeitplänen, auf Basis des Cursor SDK',
    fr: 'Bureau Windows gratuit pour agents IA nommés avec mémoire, MCP, skills et planification, basé sur le SDK Cursor',
    ja: 'Cursor SDKベースの無料Windowsデスクトップ。メモリ、MCP、スキル、スケジュールを備えた名前付きAIエージェントを管理',
    zh: '基于 Cursor SDK 的免费 Windows 桌面应用，管理具备记忆、MCP、技能和定时任务的命名 AI 智能体',
    es: 'Escritorio gratuito para Windows con agentes de IA con nombre, memoria, MCP, skills y programación, basado en el SDK de Cursor',
    pt: 'Desktop gratuito para Windows com agentes de IA nomeados, memória, MCP, skills e agendamento, baseado no SDK do Cursor',
    ar: 'تطبيق سطح مكتب مجاني لنظام Windows لوكلاء ذكاء اصطناعي مسمّين بذاكرة وMCP ومهارات وجداول زمنية، مبني على Cursor SDK',
    ko: 'Cursor SDK 기반의 무료 Windows 데스크톱 앱. 메모리, MCP, 스킬, 일정을 갖춘 이름 있는 AI 에이전트를 관리합니다',
  },
  // Comparison attributes: each value verified 2026-10-28 against the project's README/site and the Cursor SDK docs; a missing key = not stated there.
  compare: { localLlm: false, memory: true, webBrowsing: true },
  lastVerifiedDate: null, // TODO: no maker contact yet
  lastUpstreamUpdate: '2026-10-23', // GitHub API pushed_at, read 2026-10-28 (latest commit "Add per-agent workspace memory.md next to shared host Memory")
  lastUpstreamUpdateSource: 'https://github.com/tecadrise-ai/TecAdRiseBot',
}
