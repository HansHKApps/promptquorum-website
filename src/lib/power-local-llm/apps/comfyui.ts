// Local AI App Directory — ComfyUI (layer: image)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'comfyui',
  name: 'ComfyUI',
  layer: 'image',
  categories: ['workflow-node-builders', 'image-generation'],
  interfaces: ['web'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'GPL 3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 131200,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['image'],
  url: 'github.com/comfyanonymous/ComfyUI',
  tagline: {
    en: 'Node-based UI for advanced image generation workflows — active, release 1wk ago',
    de: 'Node-basiertes UI für fortgeschrittene Bildgenerierungs-Workflows — aktiv, Release vor 1 Woche',
    fr: 'Interface à base de nœuds pour workflows de génération d\'images avancés',
    ja: '高度な画像生成ワークフロー向けノードベースUI — アクティブ、1週間前にリリース',
    zh: '基于节点的高级图像生成工作流UI——活跃维护，1周前发布新版本',
    es: 'Interfaz basada en nodos para generación avanzada de imágenes — activo, lanzamiento hace 1 sem',
    pt: 'Interface baseada em nós para fluxos avançados de geração de imagens — ativo, lançamento há 1 semana',
    ar: 'واجهة قائمة على العُقد لسير عمل توليد صور متقدم — نشط، آخر إصدار قبل أسبوع',
    ko: '고급 이미지 생성 워크플로용 노드 기반 UI — 활발히 유지 관리, 릴리스 1주 전',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
