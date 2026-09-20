// Local AI App Directory — mlxcel (layer: inference/serving runtime)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: several forks of this name exist under other usernames
// (VedantMadane/mlxcel, DebayanSen96/mlxcel). This entry is the original,
// github.com/lablup/mlxcel — confirmed via Lablup's own blog post announcing
// it as their open-source release, corroborated by the repo having the fork
// relationship (other copies list it as parent). NOT the same project as this
// batch's vllm-mlx (waybarrios/vllm-mlx, Python) or mlx-serve (ddalcu/mlx-serve,
// Zig) — mlxcel is a separate Rust-native runtime by Lablup. Verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlxcel',
  name: 'mlxcel',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli'],
  locality: 'local',
  platforms: ['mac', 'linux'], // README: Apple Silicon (Metal) is the primary target, Linux/NVIDIA CUDA is a secondary target, experimental AMD ROCm; no Windows support documented, verified 2026-09-18
  worksWith: null,
  engine: 'builtin',
  license: 'Apache-2.0', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // README ships an `mlxcel inspect` command specifically because requirements vary per model (0.8B to 120B tested) — no single documented floor, verified 2026-09-18
  stars: 467, // github.com/lablup/mlxcel, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'serve', 'image'],
  url: 'github.com/lablup/mlxcel',
  tagline: {
    en: 'Rust-native, high-performance inference runtime for LLMs, VLMs, embeddings, and audio on Apple Silicon and NVIDIA CUDA.',
    de: 'Rust-natives, hochperformantes Inferenz-Runtime für LLMs, VLMs, Embeddings und Audio auf Apple Silicon und NVIDIA CUDA.',
    fr: "Environnement d'exécution d'inférence natif Rust et hautes performances pour LLM, VLM, embeddings et audio sur Apple Silicon et NVIDIA CUDA.",
    ja: 'Apple SiliconとNVIDIA CUDA上で動作する、LLM・VLM・埋め込み・音声向けの高性能なRustネイティブ推論ランタイム。',
    zh: '面向Apple芯片和NVIDIA CUDA的Rust原生高性能推理运行时，支持大模型、视觉语言模型、嵌入与音频推理。',
    es: 'Runtime de inferencia nativo en Rust y de alto rendimiento para LLM, VLM, embeddings y audio en Apple Silicon y NVIDIA CUDA.',
    pt: 'Runtime de inferência nativo em Rust e de alto desempenho para LLMs, VLMs, embeddings e áudio em Apple Silicon e NVIDIA CUDA.',
    ar: 'بيئة تشغيل استدلال أصلية بلغة Rust وعالية الأداء لنماذج اللغة والنماذج البصرية اللغوية والتضمينات والصوت على شرائح Apple وNVIDIA CUDA.',
    ko: 'Apple 실리콘과 NVIDIA CUDA에서 LLM, VLM, 임베딩, 오디오를 처리하는 고성능 Rust 네이티브 추론 런타임.',
  },
  reviewSlug: 'mlxcel-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v0.7.0', versionSourceUrl: 'https://github.com/lablup/mlxcel/releases/tag/v0.7.0' },
  lastVerifiedDate: '2026-09-18',
}
