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
  worksWith: ['Claude Code', 'Cursor', 'OpenClaw'],
  engine: 'builtin', // MLX-based inference server bundling its own continuous-batching and SSD-caching engine, verified 2026-09-18
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true },
  stars: 21859, // github.com/jundot/omlx; fast-growing count on a project that had ~110 stars at its initial ml-explore/mlx discussion announcement — corroborated by the discussion thread confirming jundot as the original author, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['serve', 'code'],
  url: 'github.com/jundot/omlx',
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
  pqReview: { date: '2026-09-20', version: 'v0.6.4', versionSourceUrl: 'https://github.com/jundot/omlx/releases/tag/v0.6.4' },
  lastVerifiedDate: '2026-09-18',
}
