// Local AI App Directory — Draw Things (layer: desktop)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'draw-things',
  name: 'Draw Things',
  categories: ['image-generation'],
  interfaces: ['desktop', 'mobile'],
  locality: 'local',
  platforms: ['mac', 'ios'],
  worksWith: null,
  engine: 'builtin',
  license: 'Closed source',
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: false }, // per wiki.drawthings.ai (How Powerful Is My Device / FAQ): 8GB unified memory is the practical floor for SD1.5-class image gen; Apple Silicon GPU/Neural Engine acceleration is used instead of discrete VRAM, verified 2026-09-13
  stars: null,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image', 'phone'],
  url: 'drawthings.ai',
  tagline: {
    en: 'Local image generation on macOS and iOS with Stable Diffusion',
    de: 'Lokale Bildgenerierung auf macOS und iOS mit Stable Diffusion',
    fr: 'Génération d\'images locale sur macOS et iOS avec Stable Diffusion',
    ja: 'Stable DiffusionによるmacOSとiOS向けのローカル画像生成',
    zh: '基于Stable Diffusion的macOS和iOS本地图像生成',
    es: 'Generación de imágenes local en macOS e iOS con Stable Diffusion',
    pt: 'Geração de imagens local no macOS e iOS com Stable Diffusion',
    ar: 'توليد صور محلي على macOS وiOS باستخدام Stable Diffusion',
    ko: 'Stable Diffusion을 활용한 macOS 및 iOS용 로컬 이미지 생성',
  },
  reviewSlug: 'draw-things-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { videoGeneration: true },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
