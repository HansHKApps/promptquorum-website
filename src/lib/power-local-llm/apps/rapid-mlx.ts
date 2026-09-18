// Local AI App Directory — Rapid-MLX (layer: run-serve — Apple Silicon inference engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/raullenchai/Rapid-MLX, the original repo
// (created 2026-02-25, 3.7k+ stars) — several zero-star forks of the same
// name/description exist (e.g. xinqiyang/rapid-mlx, LXD-8/Rapid-MLX); those
// are plain forks, not distinct projects — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'rapid-mlx',
  name: 'Rapid-MLX',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: ['Claude Code', 'Cursor', 'Aider', 'Cline'],
  engine: 'builtin',
  license: 'Apache-2.0', // per repo LICENSE file and badge, verified 2026-09-18
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: false }, // Apple Silicon (M1-M4) only, unified memory not discrete VRAM; README documents 8-15GB as the minimum tier (MacBook Air/base Mini), scaling up to 32GB+ for larger models, verified 2026-09-18
  stars: 3773, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['code', 'serve'],
  url: 'github.com/raullenchai/Rapid-MLX',
  tagline: {
    en: 'OpenAI-compatible local inference engine for Apple Silicon, built as a drop-in backend for Claude Code, Cursor, and Aider',
    de: 'OpenAI-kompatible lokale Inferenz-Engine für Apple Silicon, als direkt einsetzbares Backend für Claude Code, Cursor und Aider gebaut',
    fr: 'Moteur d’inférence local compatible OpenAI pour Apple Silicon, conçu comme backend prêt à l’emploi pour Claude Code, Cursor et Aider',
    ja: 'Claude Code、Cursor、Aiderのバックエンドとしてそのまま使えるよう作られた、Apple Silicon向けOpenAI互換ローカル推論エンジン',
    zh: '兼容OpenAI接口的Apple Silicon本地推理引擎，可作为Claude Code、Cursor、Aider的现成后端使用',
    es: 'Motor de inferencia local compatible con OpenAI para Apple Silicon, construido como backend listo para usar con Claude Code, Cursor y Aider',
    pt: 'Motor de inferência local compatível com OpenAI para Apple Silicon, criado como backend pronto para uso com Claude Code, Cursor e Aider',
    ar: 'محرك استدلال محلي متوافق مع OpenAI مخصص لشرائح Apple Silicon، مصمم كواجهة خلفية جاهزة لـ Claude Code وCursor وAider',
    ko: 'Claude Code, Cursor, Aider의 백엔드로 바로 사용할 수 있도록 만든 Apple Silicon용 OpenAI 호환 로컬 추론 엔진',
  },
  lastVerifiedDate: '2026-09-18',
}
