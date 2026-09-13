// Local AI App Directory — AnythingLLM Mobile (layer: mobile)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'anythingllm-mobile',
  name: 'AnythingLLM Mobile',
  categories: ['document-pdf-chat', 'general-chat-clients'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['ios', 'android'],
  worksWith: null,
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // checked docs.anythingllm.com/mobile/overview and Google Play listing 2026-09-13 — no documented Android version, RAM, or storage minimum for the mobile app; Android-only, runs an on-device embedding model + vector DB for RAG, no GPU required
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
  reviewSlug: 'anythingllm-mobile-review', // dedicated PromptQuorum review — pinned to #1 in the article index
  lastVerifiedDate: null, // TODO: not derivable from source article
}
