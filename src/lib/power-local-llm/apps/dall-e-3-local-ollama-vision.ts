// Local AI App Directory — DALL-E 3 Local (via Ollama Vision) (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dall-e-3-local-ollama-vision',
  name: 'DALL-E 3 Local (via Ollama Vision)',
  layer: 'image',
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'external',
  license: 'TODO',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: null,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'ollama.com',
  tagline: {
    en: 'Local image generation through compatible models in Ollama',
    de: 'Lokale Bildgenerierung über kompatible Modelle in Ollama',
    fr: 'Génération d\'images locale via des modèles compatibles dans Ollama',
    ja: 'Ollama内の対応モデルによるローカル画像生成',
    zh: '通过Ollama中的兼容模型进行本地图像生成',
    es: 'Generación de imágenes local mediante modelos compatibles en Ollama',
    pt: 'Geração de imagens local via modelos compatíveis no Ollama',
    ar: 'توليد صور محلي عبر نماذج متوافقة في Ollama',
    ko: 'Ollama의 호환 모델을 통한 로컬 이미지 생성',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
