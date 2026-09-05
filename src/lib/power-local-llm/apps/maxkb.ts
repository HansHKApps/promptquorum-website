// Local AI App Directory — MaxKB (layer: rag)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'maxkb',
  name: 'MaxKB',
  categories: ['rag-frameworks'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web', 'linux'],
  worksWith: ['DeepSeek', 'Qwen', 'Ollama', 'OpenAI API'],
  engine: 'external',
  license: 'GPL-3.0',
  price: 'freemium', // Community edition free forever (capped: 2 users/5 apps/50 KBs); Pro edition ~$1,920/yr
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 22716, // github.com/1Panel-dev/MaxKB, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['docs', 'chat', 'agent'],
  url: 'maxkb.pro',
  tagline: {
    en: 'Self-hosted enterprise RAG and agent platform connecting to local DeepSeek and Qwen models',
    de: 'Selbstgehostete Enterprise-RAG- und Agentenplattform mit Anbindung an lokale DeepSeek- und Qwen-Modelle',
    fr: 'Plateforme RAG et d\'agents d\'entreprise auto-hébergée se connectant à des modèles locaux DeepSeek et Qwen',
    ja: 'ローカルのDeepSeekおよびQwenモデルに接続するセルフホスト型エンタープライズRAG・エージェントプラットフォーム',
    zh: '自托管的企业级RAG与代理平台，可连接本地DeepSeek和Qwen模型',
    es: 'Plataforma empresarial de RAG y agentes autoalojada que se conecta a modelos locales DeepSeek y Qwen',
    pt: 'Plataforma empresarial de RAG e agentes auto-hospedada que se conecta a modelos locais DeepSeek e Qwen',
    ar: 'منصة RAG ووكلاء مؤسسية ذاتية الاستضافة تتصل بنماذج DeepSeek وQwen المحلية',
    ko: '로컬 DeepSeek 및 Qwen 모델에 연결되는 자체 호스팅 엔터프라이즈 RAG 및 에이전트 플랫폼',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
