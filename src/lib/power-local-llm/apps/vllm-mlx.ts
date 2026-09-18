// Local AI App Directory — vllm-mlx (layer: inference/serving engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "vllm-mlx" has multiple same-named repos on GitHub. This
// entry is github.com/waybarrios/vllm-mlx (1,580 stars, Apache-2.0, created
// 2025-12-06) — the earliest and most-starred of the group, described in its
// own README as the project other same-named repos (e.g. TimotejLabsky/vllm-mlx,
// Rutvikrj26/vllm-mlx) mirror. NOT the same project as this batch's mlx-serve
// (ddalcu/mlx-serve, Zig) or mlxcel (lablup/mlxcel, Rust) — three genuinely
// distinct Apple Silicon inference-server projects by different authors,
// confirmed by differing languages, licenses, and READMEs, verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'vllm-mlx',
  name: 'vllm-mlx',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac'], // README: "Apple Silicon only (M1, M2, M3, M4, M5) with Metal kernels via MLX", verified 2026-09-18
  worksWith: ['Claude Code', 'OpenAI API', 'Anthropic API'], // README: MCP tool calling and explicit Claude Code support, verified 2026-09-18
  engine: 'builtin',
  license: 'Apache-2.0', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // unified memory scales with model — README cites ~18 GB for a 30B model at 4-bit, verified 2026-09-18
  stars: 1580, // github.com/waybarrios/vllm-mlx via GitHub API, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'code', 'serve'],
  url: 'github.com/waybarrios/vllm-mlx',
  tagline: {
    en: 'OpenAI- and Anthropic-compatible inference server bringing vLLM-style continuous batching to Apple Silicon via native MLX.',
    de: 'OpenAI- und Anthropic-kompatibler Inferenz-Server, der vLLM-artiges kontinuierliches Batching per nativem MLX auf Apple Silicon bringt.',
    fr: "Serveur d'inférence compatible OpenAI et Anthropic qui apporte le traitement par lots continu façon vLLM sur Apple Silicon via MLX natif.",
    ja: 'ネイティブMLXを通じてApple SiliconにvLLM方式の連続バッチ処理をもたらす、OpenAIおよびAnthropic互換の推論サーバー。',
    zh: '通过原生MLX将vLLM式连续批处理引入Apple芯片的OpenAI与Anthropic兼容推理服务器。',
    es: 'Servidor de inferencia compatible con OpenAI y Anthropic que lleva el procesamiento por lotes continuo al estilo vLLM a Apple Silicon mediante MLX nativo.',
    pt: 'Servidor de inferência compatível com OpenAI e Anthropic que traz o batching contínuo estilo vLLM para o Apple Silicon via MLX nativo.',
    ar: 'خادم استدلال متوافق مع OpenAI وAnthropic يجلب التجميع المستمر على طريقة vLLM إلى شرائح Apple عبر MLX الأصلي.',
    ko: '네이티브 MLX를 통해 Apple 실리콘에 vLLM 방식의 연속 배치 처리를 제공하는 OpenAI 및 Anthropic 호환 추론 서버.',
  },
  mcpSupport: true, // README lists MCP tool calling as a first-class feature, verified 2026-09-18
  reviewSlug: 'vllm-mlx-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
