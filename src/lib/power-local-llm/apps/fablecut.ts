// Local AI App Directory — FableCut (layer: browser video editor driven by AI agents via MCP)
// Added 2026-11-18 at the owner's request. No maker outreach — independent PromptQuorum entry; no founder-review badge. NOT hands-on tested.
// Sources read 2026-11-18: fablecut.space (home page, install commands, FAQ), fablecut.space/start/ (per-agent
// setup commands for Claude Desktop/Code, Codex, Gemini CLI, Cursor, opencode, Amp), fablecut.space/docs/
// (project.json timeline format, MCP tool names, REST API description), GitHub repository
// github.com/ronak-create/FableCut (API metadata: description, license, stars, pushed_at, created_at; tags
// list; latest commit), and the npm registry entry for the "fablecut" package.
// Notes:
// - License: MIT, confirmed via GitHub API license field and the repo LICENSE file.
// - Stars: GitHub API 803 on 2026-11-18 (110 forks per the fetched page).
// - Maintainer: the repo owner is the individual GitHub account "ronak-create" (user, not an organization).
//   No company name, address, or HQ is stated anywhere checked — hqCountry left unset per the owner rule.
// - No formal privacy policy exists; the footer links only to SECURITY.md and a contact email. The closest
//   privacy-relevant statements are on the home page FAQ ("your media sits in a local folder and never goes
//   near anyone's cloud", "no account, no telemetry and no paid tier") and a caveat that the optional
//   AI-background-removal feature "fetches its model from a CDN the first time you use it" — a real network
//   call, not fully offline for that one feature.
// - Categories: video-editing first (its core function), then mcp-servers-skills (the MCP server for AI
//   agents is the product's defining differentiator, not a bolt-on).
// - locality 'hybrid': the editor's own data (clips, project.json) stays on the user's disk per the FAQ
//   claims above and is never uploaded in either the local install or the hosted Studio at
//   studio.fablecut.space; but the hosted Studio page itself is served from a cloud domain, and the optional
//   AI background-removal feature fetches a model from a CDN — so this is not an unqualified "local" claim.
// - engine 'external': FableCut runs no LLM itself. It exposes an MCP server and REST API so an external
//   agent (Claude, Codex, Gemini CLI, Cursor, opencode, Amp) can read/edit the project.json timeline; the
//   editing engine (cuts, tracks, effects) is FableCut's own deterministic code, not an AI model.
// - hardware: no GPU requirement stated; runs as a Node.js server with a browser UI. Node.js 18+ required;
//   ffmpeg on PATH is optional but recommended per the home page. No RAM figure published.
// - Install: `npx -y fablecut` is the officially documented local-install command (fablecut.space and
//   fablecut.space/start/, both checked 2026-11-18) — one command, no build step, zero npm dependencies per
//   the home page. The hosted Studio at studio.fablecut.space needs no install at all.
// Last upstream update: 2026-11-17 (GitHub API pushed_at 2026-11-17T09:58:48Z; latest commit e7a74d4a same
// date; latest tag v1.18.0, matching the npm registry's latest version 1.18.0) → NOT stale (3-month rule),
// checked 2026-11-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'fablecut',
  name: 'FableCut',
  categories: ['video-editing', 'mcp-servers-skills'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid', // clips/project.json stay on the user's disk (local install or hosted Studio alike), but Studio itself is served from a cloud domain and optional AI background removal fetches a model from a CDN
  platforms: ['web'], // browser-based editor (local Node server or studio.fablecut.space); no OS-specific installer stated, though Node.js 18+ runs on mac/win/linux
  worksWith: ['Claude Desktop', 'Claude Code', 'Codex', 'Gemini CLI', 'Cursor', 'opencode', 'Amp'], // AI agent clients with documented MCP setup commands on fablecut.space/start/
  engine: 'external', // FableCut runs no LLM itself; AI agents (Claude, Codex, etc.) drive edits over its MCP server/REST API
  license: 'MIT',
  price: 'free', // home page FAQ: "no account, no telemetry and no paid tier waiting for you later"
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: false }, // no GPU requirement stated; Node.js 18+ server with a browser UI, ffmpeg optional
  stars: 803, // GitHub API, github.com/ronak-create/FableCut, read 2026-11-18
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'fablecut.space',
  storeLinks: {
    github: 'https://github.com/ronak-create/FableCut',
    web: 'https://fablecut.space',
  },
  mcpSupport: true,
  installEffort: 'one-command',
  installEvidence: '`npx -y fablecut` is the documented one-command local install (fablecut.space and fablecut.space/start/, checked 2026-11-18), opening the editor at localhost:7777. No build step; the project states zero npm dependencies. The hosted Studio at studio.fablecut.space needs no install at all.',
  tagline: {
    en: 'Free, open-source, zero-dependency browser video editor that AI agents can drive over MCP or REST, editing a single project.json timeline while your clips stay in a folder on your own disk',
    de: 'Kostenloser, quelloffener Browser-Videoeditor ohne Abhängigkeiten, den KI-Agenten über MCP oder REST steuern können — bearbeitet eine einzige project.json-Timeline, während Ihre Clips in einem Ordner auf Ihrer eigenen Festplatte bleiben',
    fr: 'Éditeur vidéo gratuit, open source et sans dépendance dans le navigateur, que des agents IA peuvent piloter via MCP ou REST, en modifiant une seule timeline project.json pendant que vos clips restent dans un dossier sur votre propre disque',
    ja: 'AIエージェントがMCPまたはRESTで操作できる、無料でオープンソースの依存関係ゼロのブラウザ動画エディタ。単一のproject.jsonタイムラインを編集し、クリップは自分のディスク上のフォルダに保持される',
    zh: '免费、开源、零依赖的浏览器视频编辑器，AI 智能体可通过 MCP 或 REST 驱动，编辑单一的 project.json 时间线，剪辑文件始终保留在你自己磁盘上的文件夹中',
    es: 'Editor de vídeo gratuito, de código abierto y sin dependencias en el navegador que los agentes de IA pueden controlar por MCP o REST, editando una única línea de tiempo project.json mientras tus clips permanecen en una carpeta de tu propio disco',
    pt: 'Editor de vídeo gratuito, de código aberto e sem dependências no navegador, que agentes de IA podem controlar via MCP ou REST, editando uma única linha do tempo project.json enquanto seus clipes permanecem em uma pasta no seu próprio disco',
    ar: 'محرر فيديو مجاني ومفتوح المصدر وبدون أي تبعيات يعمل في المتصفح، يمكن لوكلاء الذكاء الاصطناعي التحكم به عبر MCP أو REST، ويحرّر خط زمني واحد بصيغة project.json بينما تبقى مقاطعك في مجلد على قرصك الخاص',
    ko: '무료, 오픈소스, 의존성 없는 브라우저 기반 영상 편집기로, AI 에이전트가 MCP 또는 REST로 제어할 수 있으며 단일 project.json 타임라인을 편집하는 동안 클립은 사용자 자신의 디스크 폴더에 그대로 유지됩니다',
  },
  reviewSlug: 'fablecut-review',
  pqReview: {
    date: '2026-11-18',
    version: '1.18.0',
    versionSourceUrl: 'https://github.com/ronak-create/FableCut/tags',
  },
  verdict: 'Best for developers and video editors who want an AI agent (Claude, Codex, Gemini CLI, Cursor, opencode, or Amp) to cut video directly from a prompt, with clips and the project.json timeline staying in a folder on their own disk; limited by no formal privacy policy, a solo-maintainer project, no stated company or HQ, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-11-17', // GitHub API: repo pushed_at 2026-11-17T09:58:48Z, latest commit e7a74d4a same date, latest tag v1.18.0; read 2026-11-18
  lastUpstreamUpdateSource: 'https://github.com/ronak-create/FableCut',
}
