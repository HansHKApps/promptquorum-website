// Local AI App Directory — Radiant Canvas (layer: image)
// Founder submission (Arnold Sallay / Radiant Bear Games), intake 2026-09-25.
// Facts verified via radiantbeargames.com/radiant-canvas and the App Store
// listing (apps.apple.com/us/app/radiant-canvas-ai-image-gen/id6802973075) on 2026-09-25.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'radiant-canvas',
  name: 'Radiant Canvas',
  categories: ['image-generation'],
  interfaces: ['desktop'],
  locality: 'local', // "All on your Mac, with no cloud processing" / "Your prompts, reference images and results stay on your device" — verified on both sources 2026-09-25
  platforms: ['mac'],
  worksWith: null,
  engine: 'builtin', // app downloads and runs its own bundled model files (Ming-Image, Krea 2, Z-Image, FLUX.2 Klein, ERNIE-Image, Microsoft Lens Turbo, Qwen Image Edit) — verified 2026-09-25
  license: 'Closed source',
  price: 'freemium', // free base app (text-to-image + reference edits) + Radiant Canvas PRO via monthly/yearly/lifetime IAP — verified via App Store listing 2026-09-25
  hardware: { ramGb: 16, vramGb: null, cpuOnly: false }, // Apple silicon only (M1 or later per App Store; site lists up to M5); macOS 26.2+; unified memory, no discrete VRAM; 16 GB is the stated floor for most model options (up to 64 GB for highest-precision variants) — verified 2026-09-25
  stars: null,
  addedDate: '2026-09-25',
  status: 'listed',
  uses: ['image'],
  url: 'radiantbeargames.com',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/radiant-canvas-ai-image-gen/id6802973075',
    web: 'https://radiantbeargames.com/radiant-canvas',
  },
  tagline: {
    en: 'Local text-to-image generation and reference editing for Apple silicon Macs',
    de: 'Lokale Text-zu-Bild-Generierung und Referenzbearbeitung für Apple-Silicon-Macs',
    fr: 'Génération d\'images à partir de texte et édition par référence en local pour Mac Apple Silicon',
    ja: 'Apple Silicon Mac向けのローカルなテキストから画像生成と参照画像編集',
    zh: '面向Apple Silicon Mac的本地文生图与参考图编辑',
    es: 'Generación de imágenes a partir de texto y edición por referencia local para Mac con Apple Silicon',
    pt: 'Geração de imagens a partir de texto e edição por referência local para Macs com Apple Silicon',
    ar: 'توليد صور محلي من النص وتحرير بالصورة المرجعية لأجهزة Mac بمعالج Apple Silicon',
    ko: 'Apple 실리콘 Mac용 로컬 텍스트-이미지 생성 및 참조 이미지 편집',
  },
  reviewSlug: 'radiant-canvas', // dedicated PromptQuorum review
  // Comparison attributes: each value verified against radiantbeargames.com/radiant-canvas and the App Store listing on 2026-09-25; a missing key = not stated there, never false.
  compare: { nodeWorkflow: true }, // "Node-based Studio for workflow building" / "Studio workflow builder with visual node connections" — verified 2026-09-25
  pqReview: {
    date: '2026-09-25',
    version: '1.22',
    versionSourceUrl: 'https://apps.apple.com/us/app/radiant-canvas-ai-image-gen/id6802973075',
  },
  lastVerifiedDate: '2026-09-25',
}
