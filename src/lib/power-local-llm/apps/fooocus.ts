// Local AI App Directory — Fooocus (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'fooocus',
  name: 'Fooocus',
  categories: ['image-generation'],
  interfaces: ['web'],
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'GPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 52700,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image'],
  url: 'github.com/lllyasviel/Fooocus',
  tagline: {
    en: 'Streamlined Stable Diffusion UI, simple setup — no release since 2024 (2+ yrs)',
    de: 'Vereinfachtes Stable-Diffusion-UI, einfache Einrichtung — kein Release seit 2024 (2+ Jahren)',
    fr: 'Interface Stable Diffusion simplifiée, installation facile — 52.7k étoiles, aucune sortie depuis 2024 (2+ ans)',
    ja: '簡易セットアップの合理化されたStable Diffusion UI — 2024年以降リリースなし（2年以上）',
    zh: '简化版Stable Diffusion UI，设置简单——自2024年起无新版本发布（2年以上）',
    es: 'Interfaz simplificada de Stable Diffusion, configuración sencilla — sin lanzamientos desde 2024 (2+ años)',
    pt: 'Interface simplificada do Stable Diffusion, configuração simples — sem lançamento desde 2024 (2+ anos)',
    ar: 'واجهة Stable Diffusion مبسَّطة، إعداد بسيط — لا إصدار منذ 2024 (عامان+)',
    ko: '간단한 설정의 간소화된 Stable Diffusion UI — 2024년 이후 릴리스 없음(2년 이상)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
