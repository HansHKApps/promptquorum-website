// Local AI App Directory — Stable Diffusion WebUI Forge (layer: image generation)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// From lllyasviel (creator of ControlNet); a platform built on top of the
// original AUTOMATIC1111 Stable Diffusion WebUI — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'stable-diffusion-forge',
  name: 'Stable Diffusion WebUI Forge',
  categories: ['image-generation'],
  interfaces: ['web', 'desktop'], // local web UI launched as a desktop application, verified 2026-09-18
  locality: 'local',
  platforms: ['linux', 'mac', 'win'],
  worksWith: ['Stable Diffusion', 'Flux'],
  engine: 'builtin', // bundles its own Stable Diffusion inference pipeline, verified 2026-09-18
  license: 'AGPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // GPU strongly recommended for practical speed; exact minimum depends on the loaded checkpoint and resolution — no single documented floor found, verified 2026-09-18
  stars: 13017, // github.com/lllyasviel/stable-diffusion-webui-forge, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['image'],
  url: 'github.com/lllyasviel/stable-diffusion-webui-forge',
  tagline: {
    en: 'Optimized fork of the Stable Diffusion WebUI focused on faster inference and lower VRAM/resource use',
    de: 'Optimierter Fork der Stable Diffusion WebUI mit Fokus auf schnellere Inferenz und geringeren VRAM-/Ressourcenverbrauch',
    fr: "Fork optimisé de Stable Diffusion WebUI axé sur une inférence plus rapide et une consommation de VRAM/ressources réduite",
    ja: 'より高速な推論と低VRAM・低リソース使用を目指したStable Diffusion WebUIの最適化フォーク',
    zh: 'Stable Diffusion WebUI的优化分支，专注于更快的推理速度和更低的显存/资源占用',
    es: 'Fork optimizado de Stable Diffusion WebUI centrado en una inferencia más rápida y un menor uso de VRAM/recursos',
    pt: 'Fork otimizado do Stable Diffusion WebUI focado em inferência mais rápida e menor uso de VRAM/recursos',
    ar: 'نسخة محسّنة من Stable Diffusion WebUI تركز على استدلال أسرع واستهلاك أقل لذاكرة الفيديو والموارد',
    ko: '더 빠른 추론과 낮은 VRAM·리소스 사용에 초점을 맞춘 Stable Diffusion WebUI의 최적화 포크',
  },
  reviewSlug: 'stable-diffusion-forge-review', // dedicated PromptQuorum review — added 2026-09-19
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { extensions: true, apiServer: true },
  lastVerifiedDate: '2026-09-18',
}
