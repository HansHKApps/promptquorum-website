// Local AI App Directory — oMLX (layer: inference server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: canonical repo is github.com/jundot/omlx (confirmed as the
// original, author-authored project via the creator's own announcement on
// github.com/ml-explore/mlx/discussions/3203) — several same-named forks
// (mkmsyk/omlx, dannysl/omlx, etc.) also exist on GitHub; do not confuse them
// with the original — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'omlx',
  name: 'oMLX',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['desktop', 'cli'], // native macOS menu-bar app plus CLI/server usage, verified 2026-09-18
  locality: 'local',
  platforms: ['mac'], // MLX is Apple Silicon-only, verified 2026-09-18
  worksWith: ['Claude Code', 'OpenClaw', 'OpenCode', 'Codex'], // README integrations list + Claude Code section, verified 2026-10-23
  engine: 'builtin', // MLX-based inference server bundling its own continuous-batching and SSD-caching engine, verified 2026-09-18
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true },
  stars: 23014, // github.com/jundot/omlx via GitHub API, read 2026-10-23 (~110 stars at the March 2026 ml-explore/mlx discussion announcement)
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'code'],
  url: 'omlx.ai',
  storeLinks: {
    web: 'https://omlx.ai',
    github: 'https://github.com/jundot/omlx',
  },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installEvidence: 'GitHub Releases v0.7.2 ships oMLX-0.7.2-macos15-sequoia.dmg and oMLX-0.7.2-macos26-27.dmg (plus cp311-cp313 wheels); README Install section lists the macOS app, Homebrew and source. checked 2026-10-23',
  tagline: {
    en: 'MLX-based local inference server for Apple Silicon with paged SSD caching, built to power local coding agents',
    de: 'MLX-basierter lokaler Inferenzserver für Apple Silicon mit seitenweisem SSD-Caching, entwickelt zum Antrieb lokaler Coding-Agenten',
    fr: "Serveur d'inférence local basé sur MLX pour Apple Silicon avec mise en cache SSD paginée, conçu pour alimenter des agents de codage locaux",
    ja: 'ページ化されたSSDキャッシュを備えたApple Silicon向けMLXベースのローカル推論サーバー。ローカルコーディングエージェントの実行を支える',
    zh: '基于MLX的Apple Silicon本地推理服务器，具备分页SSD缓存，专为本地编码智能体提供算力支持而设计',
    es: 'Servidor de inferencia local basado en MLX para Apple Silicon con caché SSD paginada, diseñado para impulsar agentes de codificación locales',
    pt: 'Servidor de inferência local baseado em MLX para Apple Silicon com cache SSD paginado, criado para dar suporte a agentes de codificação locais',
    ar: 'خادم استدلال محلي قائم على MLX لمعالجات Apple Silicon مع تخزين مؤقت مقسّم على القرص الصلب SSD، مصمم لتشغيل وكلاء البرمجة المحليين',
    ko: 'Apple Silicon용 MLX 기반 로컬 추론 서버로, 페이지 단위 SSD 캐싱을 지원하며 로컬 코딩 에이전트 구동을 위해 설계됨',
  },
  reviewSlug: 'omlx-review', // dedicated PromptQuorum review — added 2026-09-18
  pqReview: { date: '2026-10-23', version: 'v0.7.2', versionSourceUrl: 'https://github.com/jundot/omlx/releases/tag/v0.7.2' },
  // Comparison attributes: each value re-verified against the project's official README on 2026-10-23 (OpenAI/Anthropic API endpoints, Apple Silicon-only, experimental multi-Mac inference); a missing key = not stated there, never false.
  compare: { openaiApi: true, appleSilicon: true, distributed: true },
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-23', // GitHub API pushed_at 2026-10-23 (latest release v0.7.2 published 2026-10-21), read 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/jundot/omlx',
}
