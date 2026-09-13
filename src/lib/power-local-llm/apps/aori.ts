// Local AI App Directory — Aori (layer: assistant)
// New ToolRecord — Aori already had a table row in
// local-llm-software-directory-2026.ts (all 9 locales) and a dedicated review
// article (aori-ai-personal-agent-review.ts), but no ToolRecord file existed,
// so it was invisible to TOTAL_TOOL_COUNT and the hub page's filters.
// Facts below are taken directly from the article's own existing row text and
// url field — not independently re-verified against aori-ai.app in this pass.
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'aori',
  name: 'Aori',
  categories: ['personal-assistants'],
  interfaces: ['desktop', 'mobile'],
  locality: 'hybrid',
  platforms: ['win', 'mac', 'linux', 'android'],
  worksWith: ['Ollama'],
  engine: 'external',
  license: 'Free (beta)',
  price: 'free',
  hardware: null, // not documented in the source article row or otherwise researched
  stars: null, // no public repo referenced in the source article
  addedDate: null, // not derivable from the source article
  status: 'listed',
  uses: ['agent', 'chat'],
  url: 'aori-ai.app',
  tagline: {
    en: 'Local-first personal agent for Windows, macOS, Linux, and Android, using Ollama with optional cloud providers',
    de: 'Persönlicher KI-Agent mit lokalem Fokus für Windows, macOS, Linux und Android, nutzt Ollama mit optionalen Cloud-Anbietern',
    fr: 'Agent personnel local-first pour Windows, macOS, Linux et Android, utilise Ollama avec fournisseurs cloud optionnels',
    ja: 'Windows・macOS・Linux・Android向けのローカル優先パーソナルエージェント。Ollamaを使用し、クラウドプロバイダーはオプション',
    zh: '面向Windows、macOS、Linux和Android的本地优先个人智能体，使用Ollama，云端提供商可选',
    es: 'Agente personal local-first para Windows, macOS, Linux y Android, usa Ollama con proveedores cloud opcionales',
    pt: 'Agente pessoal local-first para Windows, macOS, Linux e Android, usa Ollama com provedores de nuvem opcionais',
    ar: 'وكيل شخصي محلي الأولوية لـWindows وmacOS وLinux وAndroid، يستخدم Ollama مع مزودي سحابة اختياريين',
    ko: 'Windows, macOS, Linux, Android용 로컬 우선 개인 에이전트, Ollama 사용, 클라우드 제공업체는 선택 사항',
  },
  reviewSlug: 'aori-ai-personal-agent-review', // dedicated PromptQuorum review
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
