// Local AI App Directory — ControlNet (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'controlnet',
  name: 'ControlNet',
  layer: 'image',
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'library',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 34100,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: ['image'],
  url: 'github.com/lllyasviel/ControlNet',
  tagline: {
    en: 'Precise control over image generation with spatial guidance — no releases, push 2024 (2+ yrs)',
    de: 'Präzise Steuerung der Bildgenerierung mit räumlicher Führung — keine Releases, letzter Push 2024 (2+ Jahren)',
    fr: 'Contrôle précis de la génération d\'images par guidage spatial',
    ja: '空間的ガイダンスによる画像生成の精密制御 — リリースなし、2024年にpush（2年以上）',
    zh: '通过空间引导实现图像生成的精确控制——无新版本发布，最后一次代码推送在2024年（2年以上）',
    es: 'Control preciso sobre la generación de imágenes con guía espacial — sin lanzamientos, push 2024 (2+ años)',
    pt: 'Controle preciso sobre geração de imagens com orientação espacial — sem lançamentos, push 2024 (2+ anos)',
    ar: 'تحكم دقيق في توليد الصور بتوجيه مكاني — لا إصدارات، آخر push في 2024 (عامان+)',
    ko: '공간적 가이드로 이미지 생성을 정밀 제어 — 릴리스 없음, 2024년 마지막 커밋(2년 이상)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
