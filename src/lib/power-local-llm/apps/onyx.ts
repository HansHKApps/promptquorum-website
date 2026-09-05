// Local AI App Directory — Onyx (layer: rag)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "not clearly local-LLM-first (works with any provider)" — still
// true; listed as hybrid rather than local-first, honestly reflecting that it is a
// provider-agnostic search/RAG tool that happens to support local models, not a
// local-LLM-first app. License: MIT for core, "ee" (Enterprise Edition) directories are
// proprietary — confirmed directly against the repo's LICENSE file.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'onyx',
  name: 'Onyx',
  categories: ['rag-frameworks', 'local-search'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['web', 'linux'],
  worksWith: ['Ollama', 'OpenAI API', 'Anthropic API'],
  engine: 'external',
  license: 'MIT (core) + Enterprise Edition proprietary',
  price: 'freemium',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 31935, // github.com/onyx-dot-app/onyx, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['docs', 'chat', 'agent'],
  url: 'onyx.app',
  tagline: {
    en: 'Self-hosted enterprise search and RAG assistant that connects to any model provider, including local ones',
    de: 'Selbstgehostete Enterprise-Such- und RAG-Assistenz, die sich mit jedem Modellanbieter verbindet, einschließlich lokaler',
    fr: 'Assistant de recherche et RAG d\'entreprise auto-hébergé, compatible avec tout fournisseur de modèle, y compris local',
    ja: 'ローカルを含むあらゆるモデルプロバイダーに接続できるセルフホスト型エンタープライズ検索・RAGアシスタント',
    zh: '自托管的企业搜索与RAG助手，可连接任何模型提供方，包括本地模型',
    es: 'Asistente empresarial de búsqueda y RAG autoalojado que se conecta con cualquier proveedor de modelos, incluidos los locales',
    pt: 'Assistente empresarial de busca e RAG auto-hospedado que se conecta a qualquer provedor de modelo, incluindo locais',
    ar: 'مساعد بحث وRAG مؤسسي ذاتي الاستضافة يتصل بأي مزود نماذج، بما في ذلك النماذج المحلية',
    ko: '로컬을 포함한 모든 모델 제공업체에 연결되는 자체 호스팅 엔터프라이즈 검색 및 RAG 어시스턴트',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
