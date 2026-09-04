// Local AI App Directory — AUTOMATIC1111 WebUI (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'automatic1111-webui',
  name: 'AUTOMATIC1111 WebUI',
  layer: 'image',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 164800,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['image'],
  url: 'github.com/AUTOMATIC1111/stable-diffusion-webui',
  tagline: {
    en: 'Most popular web UI for Stable Diffusion — no release since 2025 (19+ mo)',
    de: 'Populärstes Web-UI für Stable Diffusion — kein Release seit 2025 (19+ Monaten)',
    fr: 'Interface web la plus populaire pour Stable Diffusion',
    ja: 'Stable Diffusion向け最も人気のWeb UI — 2025年以降リリースなし（19か月以上）',
    zh: 'Stable Diffusion最受欢迎的Web UI——自2025年起无新版本发布（19+个月）',
    es: 'La interfaz web más popular para Stable Diffusion — sin lanzamientos desde 2025 (19+ meses)',
    pt: 'Interface web mais popular para o Stable Diffusion — sem lançamento desde 2025 (19+ meses)',
    ar: 'الواجهة الأكثر شعبية لـStable Diffusion — لا إصدار منذ 2025 (19+ شهراً)',
    ko: 'Stable Diffusion용 가장 인기 있는 웹 UI — 2025년 이후 릴리스 없음(19개월 이상)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
