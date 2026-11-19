// Local AI App Directory — Paperclip by Paperclip Labs, Inc. (layer: open-source, self-hosted control plane that manages teams of AI agents you bring yourself)
// Added 2026-11-19 (localhosted listing). No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-19: paperclip.ing (home, privacy policy, terms of service), github.com/paperclipai/paperclip (README, GitHub API: stars, license, pushed_at,
// latest release v2026.1117.0 and its notes), docs.paperclip.ing/reference/cli/installation, localhosted.com/paperclip.
// Notes:
// - License: MIT (GitHub API spdx MIT; README badge; website footer "MIT © 2026 Paperclip Labs, Inc."). The terms say the hosted Services of Paperclip Labs, Inc.
//   (Paperclip Cloud, APIs, telemetry backend) are separate from the MIT open-source project and governed by the terms.
// - Price 'free': self-hosted, "No Paperclip account required" (README); the agents and model providers the user connects have their own costs. A hosted
//   "Paperclip Cloud" is only a waitlist on the site and README (no pricing shown).
// - locality 'hybrid': the Paperclip server, database (embedded PostgreSQL) and data directory (~/.paperclip) run on the user's own machine or server; the agents it
//   orchestrates (Claude Code, Codex, Cursor, Gemini CLI, OpenClaw, ...) mostly call cloud models, and the terms describe telemetry for self-hosted installs.
// - engine 'external': no bundled model; every agent brings its own model and runtime.
// - Install: 'one-command' — `npx paperclipai@latest onboard --yes` with Node.js 24.11+ (README, installation docs). No desktop installer: the README roadmap lists
//   a desktop app as not started. Supported operating systems are not stated anywhere read, so `platforms` is web + selfhosted only (README/Localhosted: Web).
// - HQ country US: the terms of service (paperclip.ing/terms) state "governed by ... the laws of the State of Delaware, United States" with arbitration under AAA rules,
//   and the privacy policy says data may be transferred to and processed in the United States. No postal address is published (imprint absent). Governing law = a
//   country is mentioned, so US is used per the intake rule.
// - compare: agent-frameworks segment; multiAgent (README org chart, delegation) and mcp (README "or your own MCP server") are stated by the maker; localLlm/ollama
//   not stated for Paperclip itself (depends on the connected agent), so left unset.
// Last upstream update: 2026-11-19 (last commit on master 2026-11-19, GitHub API; latest release v2026.1117.0 published 2026-11-18) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'paperclip',
  name: 'Paperclip',
  categories: ['multi-agent-orchestration', 'agent-frameworks', 'autonomous-agents'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid', // server, database and data directory run on your own machine; the agents it manages mostly call cloud models; terms describe telemetry for self-hosted installs
  platforms: ['web', 'selfhosted'],
  worksWith: ['Claude Code', 'Codex', 'Cursor', 'Gemini CLI', 'OpenClaw', 'OpenCode', 'Hermes', 'MCP'], // README "Works with" table
  engine: 'external', // no bundled model; each agent brings its own model and runtime
  license: 'MIT', // GitHub API spdx + README badge + website footer
  price: 'free', // README: open source, self-hosted, no Paperclip account required; agent/provider usage costs are separate
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; Node.js 24.11+ only; agents' models decide
  stars: 114979, // GitHub API read 2026-11-19
  addedDate: '2026-11-19',
  status: 'listed',
  uses: ['agent'],
  url: 'paperclip.ing',
  storeLinks: {
    web: 'https://paperclip.ing',
    github: 'https://github.com/paperclipai/paperclip',
  },
  installEffort: 'one-command',
  installEvidence: 'On 2026-11-19 the README quickstart and docs.paperclip.ing/reference/cli/installation gave one command, `npx paperclipai@latest onboard --yes`, with Node.js 24.11 or newer (embedded PostgreSQL, data in ~/.paperclip). The GitHub release v2026.1117.0 lists one asset, feature-catalog.json, and no installer; the README roadmap lists a desktop app as not started.',
  mcpSupport: true, // README: connect services such as GitHub, Notion and Railway "or your own MCP server"
  tagline: {
    en: 'Free, open-source (MIT) control plane for teams of AI agents: org chart, goals, budgets and approvals for the agents you already run, such as Claude Code, Codex and OpenClaw; self-hosted, installed with one npx command',
    de: 'Kostenlose, quelloffene (MIT) Steuerzentrale für Teams aus KI-Agenten: Organigramm, Ziele, Budgets und Freigaben für die Agenten, die Sie bereits nutzen, etwa Claude Code, Codex und OpenClaw; selbst gehostet, Installation mit einem npx-Befehl',
    fr: 'Plan de contrôle gratuit et open source (MIT) pour équipes d\'agents IA : organigramme, objectifs, budgets et validations pour les agents que vous utilisez déjà, comme Claude Code, Codex et OpenClaw ; auto-hébergé, installé avec une seule commande npx',
    ja: '無料・オープンソース（MIT）のAIエージェントチーム向けコントロールプレーン。Claude Code、Codex、OpenClawなど既存のエージェントに、組織図・目標・予算・承認を提供。セルフホスト型で、npxコマンド1つでインストール',
    zh: '免费开源（MIT）的 AI 智能体团队控制平面：为您已在使用的 Claude Code、Codex、OpenClaw 等智能体提供组织架构图、目标、预算和审批；自托管，一条 npx 命令即可安装',
    es: 'Plano de control gratuito y de código abierto (MIT) para equipos de agentes de IA: organigrama, objetivos, presupuestos y aprobaciones para los agentes que ya usas, como Claude Code, Codex y OpenClaw; autoalojado, se instala con un solo comando npx',
    pt: 'Plano de controle gratuito e de código aberto (MIT) para equipes de agentes de IA: organograma, metas, orçamentos e aprovações para os agentes que você já usa, como Claude Code, Codex e OpenClaw; auto-hospedado, instalado com um único comando npx',
    ar: 'منصة تحكم مجانية ومفتوحة المصدر (MIT) لفرق وكلاء الذكاء الاصطناعي: هيكل تنظيمي وأهداف وميزانيات وموافقات للوكلاء الذين تستخدمهم بالفعل مثل Claude Code وCodex وOpenClaw؛ تُستضاف ذاتيًا وتُثبَّت بأمر npx واحد',
    ko: '무료 오픈소스(MIT) AI 에이전트 팀 컨트롤 플레인: 이미 사용 중인 Claude Code, Codex, OpenClaw 등의 에이전트에 조직도, 목표, 예산, 승인 기능을 제공합니다. 직접 호스팅하며 npx 명령 한 줄로 설치합니다',
  },
  // Comparison attributes (agent-frameworks segment), each stated by the maker on 2026-11-19; a missing key = not stated there, never false.
  // multiAgent: README "orchestrates a team of AI agents", org chart and delegation; mcp: README "or your own MCP server".
  compare: { multiAgent: true, mcp: true },
  verdict: 'Best for people who already run several coding or business agents and want one self-hosted dashboard for tasks, budgets and approvals; it ships no model, needs a terminal and Node.js 24.11 or newer, has no desktop installer, its terms describe telemetry for self-hosted installs, and PromptQuorum has not tested it.',
  reviewSlug: 'paperclip-review',
  pqReview: {
    date: '2026-11-19',
    version: '2026.1117.0',
    versionSourceUrl: 'https://github.com/paperclipai/paperclip/releases/tag/v2026.1117.0',
  },
  hqCountry: 'US',
  hqCountrySource: 'https://paperclip.ing/terms/',
  lastVerifiedDate: '2026-11-19',
  lastUpstreamUpdate: '2026-11-19', // GitHub API: last commit on master 2026-11-19, read 2026-11-19; latest release v2026.1117.0 published 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/paperclipai/paperclip (last commit 2026-11-19; latest release v2026.1117.0, 2026-11-18)',
}
