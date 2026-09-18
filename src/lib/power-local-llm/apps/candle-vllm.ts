// Local AI App Directory — candle-vllm (layer: inference/serving engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Lead confirmed as given: github.com/EricLBuehler/candle-vllm — a Rust
// Candle-based, vLLM-style local inference and serving platform. Verified
// 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'candle-vllm',
  name: 'candle-vllm',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'], // OpenAI-compatible server run from the CLI; also usable as a Rust crate, verified 2026-09-18
  locality: 'local',
  platforms: ['mac', 'win', 'linux'], // README: CUDA 11/12/13 on Linux, Metal on macOS/Apple Silicon — cross-platform, same codebase, verified 2026-09-18
  worksWith: ['OpenAI API'],
  engine: 'builtin',
  license: 'MIT', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // README examples range from a quantized 3.8B model on a 16 GB M4 Mac up to 671B on an 80 GB A100 — no single documented floor, verified 2026-09-18
  stars: 728, // github.com/EricLBuehler/candle-vllm, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve'],
  url: 'github.com/EricLBuehler/candle-vllm',
  tagline: {
    en: 'Rust-based, vLLM-style inference and serving platform with an OpenAI-compatible API, running on both CUDA and Apple Metal.',
    de: 'Rust-basierte Inferenz- und Serving-Plattform im vLLM-Stil mit OpenAI-kompatibler API, läuft sowohl auf CUDA als auch auf Apple Metal.',
    fr: "Plateforme d'inférence et de service façon vLLM basée sur Rust avec une API compatible OpenAI, fonctionnant sur CUDA comme sur Apple Metal.",
    ja: 'OpenAI互換APIを備えたRust製のvLLM方式推論・提供プラットフォームで、CUDAとApple Metalの両方で動作。',
    zh: '基于Rust、模仿vLLM风格的推理与服务平台，提供OpenAI兼容API，可同时运行于CUDA和Apple Metal。',
    es: 'Plataforma de inferencia y servicio al estilo vLLM basada en Rust con una API compatible con OpenAI, que funciona tanto en CUDA como en Apple Metal.',
    pt: 'Plataforma de inferência e serviço no estilo vLLM baseada em Rust com API compatível com OpenAI, rodando tanto em CUDA quanto em Apple Metal.',
    ar: 'منصة استدلال وتقديم على طراز vLLM مبنية بلغة Rust مع واجهة برمجية متوافقة مع OpenAI، تعمل على كل من CUDA وApple Metal.',
    ko: 'OpenAI 호환 API를 갖춘 Rust 기반 vLLM 방식 추론 및 서빙 플랫폼으로, CUDA와 Apple Metal 모두에서 동작.',
  },
  lastVerifiedDate: '2026-09-18',
}
