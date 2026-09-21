// Local AI App Directory — Langfuse (layer: LLM observability)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'langfuse',
  name: 'Langfuse',
  categories: ['observability', 'evaluation-benchmarking'],
  interfaces: ['web', 'library'],
  locality: 'local', // fully self-hostable; Langfuse Cloud is an optional managed alternative, verified 2026-09-18
  platforms: null, // self-hosted Docker web platform, not tied to a specific OS
  worksWith: ['OpenAI API', 'LangChain', 'LlamaIndex'],
  engine: 'external', // traces and evaluates calls to external LLM providers rather than running inference itself, verified 2026-09-18
  license: 'MIT (core), Enterprise Edition features under a separate commercial license', // GitHub reports license "Other" — repo LICENSE is MIT Expat for most of the codebase with a restricted ee/ directory, verified 2026-09-18
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 34755, // github.com/langfuse/langfuse, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['build'],
  url: 'langfuse.com',
  tagline: {
    en: 'Open-source LLM observability platform for tracing, evaluating, and debugging AI applications in production',
    de: 'Open-Source-Observability-Plattform für LLMs zum Tracing, Evaluieren und Debuggen von KI-Anwendungen im Produktivbetrieb',
    fr: "Plateforme d'observabilité LLM open source pour tracer, évaluer et déboguer des applications IA en production",
    ja: '本番環境でAIアプリケーションをトレース・評価・デバッグするためのオープンソースLLMオブザーバビリティ基盤',
    zh: '开源LLM可观测性平台，用于追踪、评估和调试生产环境中的AI应用',
    es: 'Plataforma de observabilidad LLM de código abierto para rastrear, evaluar y depurar aplicaciones de IA en producción',
    pt: 'Plataforma de observabilidade de LLM de código aberto para rastrear, avaliar e depurar aplicações de IA em produção',
    ar: 'منصة مفتوحة المصدر لمراقبة نماذج اللغة الكبيرة، لتتبع وتقييم وتصحيح تطبيقات الذكاء الاصطناعي في بيئة الإنتاج',
    ko: '프로덕션 AI 애플리케이션을 추적·평가·디버깅하는 오픈소스 LLM 옵저버빌리티 플랫폼',
  },
  reviewSlug: 'langfuse-review', // dedicated PromptQuorum review — added 2026-09-18
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-21; a missing key = not stated there, never false.
  compare: { localLlm: true, dockerDeploy: true, tracing: true, evaluations: true, promptManagement: true },
  lastVerifiedDate: '2026-09-18',
}
