// Local AI App Directory — AnimateDiff (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'animatediff',
  name: 'AnimateDiff',
  layer: 'image',
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'library',
  license: 'Apache 2.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 12200,
  addedDate: null, // TODO: not derivable from source article
  status: 'listed',
  uses: null,
  url: 'github.com/guoyww/AnimateDiff',
  tagline: {
    en: 'Video generation from Stable Diffusion text prompts — no releases, push 2024 (2+ yrs)',
    de: 'Videogenerierung aus Stable-Diffusion-Textprompts — keine Releases, letzter Push 2024 (2+ Jahren)',
    fr: 'Génération vidéo à partir de prompts texte Stable Diffusion',
    ja: 'Stable Diffusionのテキストプロンプトからの動画生成 — リリースなし、2024年にpush（2年以上）',
    zh: '基于Stable Diffusion文本提示生成视频——无新版本发布，最后一次代码推送在2024年（2年以上）',
    es: 'Video generado desde prompts de texto de Stable Diffusion — sin lanzamientos, push 2024 (2+ años)',
    pt: 'Geração de vídeo a partir de prompts de texto do Stable Diffusion — sem lançamentos, push 2024 (2+ anos)',
    ar: 'توليد فيديو من أوامر نصية عبر Stable Diffusion — لا إصدارات، آخر push في 2024 (عامان+)',
    ko: 'Stable Diffusion 텍스트 프롬프트 기반 영상 생성 — 릴리스 없음, 2024년 마지막 커밋(2년 이상)',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
