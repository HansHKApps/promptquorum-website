// Local AI App Directory — llama.cpp (layer: runtime)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llama-cpp',
  name: 'llama.cpp',
  layer: 'runtime',
  categories: ['inference-engines', 'api-servers'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
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
  lastVerifiedDate: null, // TODO: not derivable from source article
}
