// Local AI App Directory — llama.cpp (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llama-cpp',
  name: 'llama.cpp',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // per github.com/ggml-org/llama.cpp README: "Plain C/C++ implementation without any dependencies" with dedicated CPU backends (ARM NEON, AVX/AVX2/AVX512, etc.); GPU backends are optional additions. No fixed RAM/VRAM minimum is stated — floor depends entirely on the GGUF model and quantization loaded, verified 2026-09-13
  stars: 126800,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['serve', 'build'],
  url: 'github.com/ggml-org/llama.cpp',
  tagline: {
    en: 'Foundational C++ engine behind most other tools, runs anywhere including Apple Silicon',
    de: 'Grundlegende C++-Engine hinter den meisten anderen Tools, läuft überall einschließlich Apple Silicon',
    fr: 'Moteur C++ fondateur derrière la plupart des autres outils, fonctionne partout dont Apple Silicon',
    ja: '他の多くのツールの基盤C++エンジン。Apple Siliconを含む全環境で動作',
    zh: '大多数其他工具底层的基础C++引擎，可在任何平台运行，包括Apple Silicon',
    es: 'Motor C++ fundamental detrás de la mayoría de las otras herramientas, funciona en cualquier lugar incluyendo Apple Silicon',
    pt: 'Motor C++ fundamental por trás da maioria das outras ferramentas, funciona em qualquer lugar incluindo Apple Silicon',
    ar: 'المحرك الأساسي C++ وراء معظم الأدوات، يعمل في أي مكان بما فيه Apple Silicon',
    ko: '대부분의 다른 도구 기반에 있는 C++ 엔진, Apple Silicon 포함 어디서나 동작',
  },
  reviewSlug: 'llama-cpp-explained', // dedicated PromptQuorum review — pinned to #1 in the article index
  // llama.cpp ships two parallel tag schemes: frequent build-numbered tags
  // (e.g. b11007, several per week) and a separate, slower formal release
  // line. This records the formal release (GitHub's own "Latest" marker),
  // matching what the article now states — not the build-numbered tag,
  // which changes too often to track as a single "version".
  pqReview: { date: '2026-09-20', version: 'v0.4.1', versionSourceUrl: 'https://github.com/ggml-org/llama.cpp/releases/tag/v0.4.1' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { openaiApi: true, nvidiaGpu: true, appleSilicon: true, amdGpu: true, cpuInference: true },
  lastVerifiedDate: '2026-09-20',
}
