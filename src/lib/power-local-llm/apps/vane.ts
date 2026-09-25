// Local AI App Directory — Vane, formerly Perplexica (layer: search)
// Added per directory-add-5-apps sweep — one of the top standalone tools
// missing from a user-supplied app list cross-check (2026-09-14).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'vane',
  name: 'Vane (formerly Perplexica)',
  categories: ['local-search', 'rag-frameworks'],
  interfaces: ['web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'OpenAI API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // orchestrates a self-hosted SearxNG meta-search backend plus a local (via Ollama) or cloud LLM — GPU need, if any, depends entirely on the chosen model backend, verified 2026-09-14
  stars: 36747,
  addedDate: '2026-09-14',
  status: 'listed',
  uses: ['chat', 'docs'],
  url: 'github.com/ItzCrazyKns/Vane',
  reviewSlug: 'vane-review', // dedicated PromptQuorum review
  tagline: {
    en: 'Self-hosted AI answering engine combining local search with local or cloud LLMs for cited answers',
    de: 'Selbst gehostete KI-Antwortmaschine, die lokale Suche mit lokalen oder Cloud-LLMs für belegte Antworten kombiniert',
    fr: 'Moteur de réponses IA auto-hébergé combinant recherche locale et LLM locaux ou cloud pour des réponses sourcées',
    ja: 'ローカル検索とローカル/クラウドLLMを組み合わせ、出典付き回答を生成するセルフホスト型AI回答エンジン',
    zh: '自托管AI问答引擎，结合本地搜索与本地或云端LLM，生成带引用来源的答案',
    es: 'Motor de respuestas IA autoalojado que combina búsqueda local con LLM locales o en la nube para respuestas con fuentes citadas',
    pt: 'Motor de respostas de IA auto-hospedado que combina busca local com LLMs locais ou na nuvem para respostas com fontes citadas',
    ar: 'محرك إجابات ذكاء اصطناعي مستضاف ذاتيًا يجمع بين البحث المحلي ونماذج اللغة المحلية أو السحابية لتقديم إجابات موثقة بمصادرها',
    ko: '로컬 검색과 로컬 또는 클라우드 LLM을 결합해 출처가 명시된 답변을 제공하는 셀프호스팅 AI 답변 엔진',
  },
  // Comparison attributes: each value verified against the project's official README/architecture docs on 2026-09-25; a missing key = not stated there, never false.
  // visualBuilder false — no visual/drag-and-drop builder is described anywhere in the README or architecture docs.
  // agents true — the architecture docs describe a built-in "Agents and Orchestration" layer (query classification, parallel research/widgets, cited final answer) plus an iterative Deep Research pipeline: github.com/ItzCrazyKns/Vane/blob/master/docs/architecture/README.md
  compare: { visualBuilder: false, localLlm: true, agents: true, dockerDeploy: true, apiServer: true, citations: true, webSearch: true },
  lastVerifiedDate: '2026-09-25',
}
