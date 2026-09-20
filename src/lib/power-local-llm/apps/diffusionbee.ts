// Local AI App Directory — DiffusionBee (layer: image)
// Added alongside diffusionbee-review.ts (2026-09-12).
// Facts verified via the GitHub API (divamgupta/diffusionbee-stable-diffusion-ui) and
// diffusionbee.com on 2026-09-12.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'diffusionbee',
  name: 'DiffusionBee',
  categories: ['image-generation'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'AGPL-3.0',
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true }, // github.com/mxcl/diffusionbee README: "16 GB RAM preferred. It will run a bit slow with 8GB ram"; uses Apple Silicon's integrated GPU (no discrete VRAM) and also supports Intel Macs without a dedicated graphics chip, just slower, verified 2026-09-13
  stars: 13586,
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['image'],
  url: 'diffusionbee.com',
  tagline: {
    en: 'One-click packaged Mac app for local Stable Diffusion',
    de: 'Verpackte Mac-App per Klick für lokales Stable Diffusion',
    fr: 'Application Mac packagée en un clic pour Stable Diffusion local',
    ja: 'ローカルStable Diffusion向けのワンクリックMacアプリ',
    zh: '本地Stable Diffusion的一键式Mac应用',
    es: 'App de Mac empaquetada de un clic para Stable Diffusion local',
    pt: 'App Mac empacotado em um clique para Stable Diffusion local',
    ar: 'تطبيق Mac معبأ بنقرة واحدة لتشغيل Stable Diffusion محليًا',
    ko: '로컬 Stable Diffusion을 위한 원클릭 패키징 Mac 앱',
  },
  reviewSlug: 'diffusionbee-review', // dedicated PromptQuorum review
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { inpainting: true, videoGeneration: true },
  lastVerifiedDate: '2026-09-12',
}
