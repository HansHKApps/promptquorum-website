// Local AI App Directory — AnythingLLM Mobile (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'anythingllm-mobile',
  name: 'AnythingLLM Mobile',
  layer: 'mobile',
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 65608,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['phone', 'docs'],
  url: 'anythingllm.com',
  tagline: {
    en: 'Remote access to your local AnythingLLM workspace',
    de: 'Fernzugriff auf Ihren lokalen AnythingLLM-Arbeitsbereich',
    fr: 'Accès distant à votre espace de travail AnythingLLM local',
    ja: 'ローカルAnythingLLMワークスペースへのリモートアクセス',
    zh: '远程访问本地AnythingLLM工作区',
    es: 'Acceso remoto a tu espacio de trabajo local de AnythingLLM',
    pt: 'Acesso remoto ao seu espaço de trabalho local do AnythingLLM',
    ar: 'وصول عن بُعد إلى مساحة عملك المحلية في AnythingLLM',
    ko: '로컬 AnythingLLM 워크스페이스에 대한 원격 접근',
  },
  lastVerifiedDate: null, // TODO: not derivable from source article
}
