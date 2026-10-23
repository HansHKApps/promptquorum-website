// Local AI App Directory — ECC (layer: skills / agents / hooks / memory toolkit for coding-agent harnesses)
// Added 2026-10-23 on Hans's request (found via localhosted.com). Facts verified 2026-10-23 from ecc.tools (home, pricing,
// privacy, terms), github.com/affaan-m/ECC (GitHub API: MIT, pushed 2026-10-20; README; release v2.2.3 of 2026-10-01) and the
// npm registry (ecc-universal 2.2.3, MIT).
// Why hybrid: the MIT toolkit installs into the user's own coding-agent harness (Claude Code, Codex, ...) and runs in that
// local workflow, but it runs no model itself — the harness decides which model answers — and the optional GitHub App is a
// hosted service that sends commit data to Anthropic's Claude API (ecc.tools/privacy). Not verified, so not claimed: that
// ECC works with a locally hosted model; the site's usage and customer-logo figures (self-reported, not repeated as fact).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ecc',
  name: 'ECC',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['plugin', 'cli'], // native plugin for Claude Code and Codex, npx CLI installer, adapters for other harnesses, verified 2026-10-23
  locality: 'hybrid', // see header: toolkit runs inside the user's harness, the GitHub App is a hosted service
  platforms: ['mac', 'win', 'linux'], // README has a Windows walkthrough; requires Node.js 18+, verified 2026-10-23
  worksWith: ['Claude Code', 'Codex', 'Cursor', 'OpenCode', 'Kimi Code', 'GitHub'], // ecc.tools platforms list, verified 2026-10-23
  engine: 'external', // runs no model of its own — it configures the model-backed coding agent the user already has
  license: 'MIT', // GitHub API + LICENSE badge, verified 2026-10-23; the GitHub App is a separate hosted service
  price: 'freemium', // toolkit $0; GitHub App Free (public repos) and Pro $19 per seat per month per ecc.tools/pricing, verified 2026-10-23
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // Node.js 18+ and a coding-agent harness; no model of its own, no RAM/GPU floor stated
  stars: 287224, // github.com/affaan-m/ECC, verified via GitHub API 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'ecc.tools', // official website exists (check 5), so the repo goes in storeLinks.github
  storeLinks: {
    web: 'https://ecc.tools',
    github: 'https://github.com/affaan-m/ECC',
  },
  installEffort: 'one-command',
  installEvidence: 'README "Install ECC": guided setup `npx ecc-universal@2.2.3 setup` (Node.js 18+); Claude Code native plugin `/plugin install ecc@ecc`; the v2.2.3 GitHub release lists no binary assets; npm ecc-universal 2.2.3. checked 2026-10-23',
  tagline: {
    en: 'MIT-licensed toolkit of agents, skills, hooks and memory for Claude Code, Codex and other coding agents, plus an optional paid GitHub App',
    de: 'MIT-lizenziertes Toolkit aus Agenten, Skills, Hooks und Memory für Claude Code, Codex und andere Coding-Agenten, dazu eine optionale kostenpflichtige GitHub-App',
    fr: "Boîte à outils sous licence MIT (agents, skills, hooks et mémoire) pour Claude Code, Codex et d'autres agents de code, avec une application GitHub payante en option",
    ja: 'Claude CodeやCodexなどのコーディングエージェント向けに、エージェント・スキル・フック・メモリをまとめたMITライセンスのツールキット。有料のGitHubアプリはオプション',
    zh: '面向 Claude Code、Codex 等编码智能体的 MIT 许可工具包，包含智能体、技能、钩子和记忆，另有可选的付费 GitHub 应用',
    es: 'Kit de herramientas con licencia MIT (agentes, skills, hooks y memoria) para Claude Code, Codex y otros agentes de programación, con una aplicación de GitHub de pago opcional',
    pt: 'Kit de ferramentas com licença MIT (agentes, skills, hooks e memória) para Claude Code, Codex e outros agentes de programação, com um aplicativo do GitHub pago opcional',
    ar: 'مجموعة أدوات بترخيص MIT من وكلاء ومهارات وخطافات وذاكرة لـ Claude Code وCodex ووكلاء البرمجة الآخرين، مع تطبيق GitHub مدفوع اختياري',
    ko: 'Claude Code, Codex 등 코딩 에이전트를 위한 에이전트·스킬·훅·메모리 MIT 라이선스 툴킷으로, 선택형 유료 GitHub 앱이 함께 제공됩니다',
  },
  reviewSlug: 'ecc-review', // dedicated PromptQuorum review - added 2026-10-23
  pqReview: { date: '2026-10-23', version: 'v2.2.3', versionSourceUrl: 'https://github.com/affaan-m/ECC/releases/tag/v2.2.3' },
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-20', // GitHub API: latest release v2.2.3 on 2026-10-01; last push 2026-10-20 (newer), read 2026-10-23 — 3 days, no stale warning
  lastUpstreamUpdateSource: 'https://github.com/affaan-m/ECC',
}
