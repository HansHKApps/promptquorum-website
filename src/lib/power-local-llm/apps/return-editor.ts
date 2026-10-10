// Local AI App Directory — Return Editor (category: contract-review, with document-pdf-chat)
// Added 2026-10-10 following a submission email from the developer, who disclosed that they build the app.
// Facts verified on 2026-10-10 against returneditor.ai (home, /download/, /changelog/, /docs/, /privacy/, /security/):
// version 1.4.1 released 2026-10-09; macOS 14+ on Apple Silicon (notarized .dmg) and Windows 10/11 64-bit (signed
// per-user installer, no admin rights); Free plan runs a bundled llama.cpp engine locally with no account; Pro
// ($39/month or $390/year, 500 cloud actions per month) routes requests through an EU proxy to Anthropic; no Linux build yet.
// The submission email's "Free = fully local, no account" and "Pro = $39/month" claims match the site. Model names
// (Qwen3.5 9B, Granite 4.1 8B, GPT-OSS 20B, Bielik 11B v3) come from the home page. No public source repository.
// No founder quote or founderReviewedDate: the developer supplied listing data, not a comment on this entry.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'return-editor',
  name: 'Return Editor',
  categories: ['contract-review', 'document-pdf-chat'],
  interfaces: ['desktop'],
  locality: 'hybrid', // Free plan is fully local; Pro adds opt-in cloud AI (Anthropic) through the maker's EU proxy
  platforms: ['mac', 'win'], // Apple Silicon Mac (macOS 14+) and Windows 10/11 64-bit; Linux is waitlist-only
  worksWith: ['llama.cpp', 'GGUF', 'Qwen', 'Granite', 'GPT-OSS', 'Bielik', 'Anthropic Claude (Pro, cloud)'],
  engine: 'builtin', // bundles its own llama.cpp server; no Ollama or external runtime needed
  license: 'Proprietary (closed source)', // returneditor.ai/terms; no public repository
  price: 'freemium', // Free = unlimited local AI, no account; Pro $39/month adds cloud AI; Counsel tier is waitlist-only
  hardware: { ramGb: 16, vramGb: null, cpuOnly: null, variesByModel: true }, // site: 16 GB RAM recommended, default model is a 5.3 GB download; depends on the model chosen
  stars: null, // closed source
  addedDate: '2026-10-10',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'returneditor.ai',
  storeLinks: {
    web: 'https://returneditor.ai/download/',
  },
  installEffort: 'installer',
  installEvidence:
    'returneditor.ai/download/ checked 2026-10-10: notarized .dmg for Apple Silicon (macOS 14+) and a signed per-user Windows 10/11 installer needing no admin rights; no terminal step.',
  tagline: {
    en: 'Desktop document editor for contract review: clause-level risk flags, cited answers and local semantic search, with a bundled local AI',
    de: 'Desktop-Dokumenteditor für die Vertragsprüfung: Risikomarkierungen je Klausel, Antworten mit Quellenangabe und lokale semantische Suche, mit mitgelieferter lokaler KI',
    fr: 'Éditeur de documents de bureau pour la revue de contrats : alertes de risque par clause, réponses citées et recherche sémantique locale, avec une IA locale intégrée',
    ja: '契約書レビュー向けのデスクトップ文書エディタ。条項ごとのリスク表示、出典付きの回答、ローカルのセマンティック検索を、同梱のローカルAIで提供',
    zh: '面向合同审查的桌面文档编辑器：按条款标记风险、带引用的问答和本地语义搜索，内置本地 AI',
    es: 'Editor de documentos de escritorio para revisar contratos: alertas de riesgo por cláusula, respuestas con cita y búsqueda semántica local, con IA local incluida',
    pt: 'Editor de documentos para desktop voltado à revisão de contratos: alertas de risco por cláusula, respostas com citação e busca semântica local, com IA local incluída',
    ar: 'محرر مستندات لسطح المكتب لمراجعة العقود: تنبيهات مخاطر لكل بند وإجابات مع استشهادات وبحث دلالي محلي، مع ذكاء اصطناعي محلي مدمج',
    ko: '계약서 검토용 데스크톱 문서 편집기: 조항 단위 위험 표시, 출처가 달린 답변, 로컬 시맨틱 검색을 내장 로컬 AI로 제공',
  },
  // Each value taken from returneditor.ai on 2026-10-10; a missing key = not stated there, never false.
  // localLlm = bundled local engine; multiFormat = PDF, DOCX, ODT, RTF and HTML import; citations = answers cite clauses.
  // dockerDeploy / apiServer stay unset: neither is documented.
  compare: { localLlm: true, multiFormat: true, citations: true, desktopApp: true },
  lastVerifiedDate: '2026-10-10',
  reviewSlug: 'return-editor-review',
  pqReview: {
    date: '2026-10-10',
    version: '1.4.1',
    versionSourceUrl: 'https://returneditor.ai/changelog/',
  },
  verdict:
    'Best for people who review contracts and other long documents on a Mac or Windows PC and want clause-level risk flags and cited answers with the Free plan running fully on-device; limited by closed source, no Linux build, a young product, and cloud AI that sends content to Anthropic on the paid plan',
}
