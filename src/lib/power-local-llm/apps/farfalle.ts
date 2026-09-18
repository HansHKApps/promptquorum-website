// Local AI App Directory — Farfalle (layer: knowledge-retrieval — local AI search engine)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/rashadphz/farfalle, the open-source
// Perplexity-clone AI search engine — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'farfalle',
  name: 'Farfalle',
  categories: ['local-search'],
  interfaces: ['web', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'SearXNG', 'Tavily', 'Groq', 'OpenAI API'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // Next.js/FastAPI search app that calls out to Ollama or a cloud LLM for synthesis — no in-process inference of its own, hardware floor depends on whichever local model is connected, verified 2026-09-18
  stars: 3541, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'docs'],
  url: 'github.com/rashadphz/farfalle',
  tagline: {
    en: 'Self-hosted, open-source AI search engine (Perplexity-style) that can run entirely on local LLMs',
    de: 'Selbst gehostete, quelloffene KI-Suchmaschine im Perplexity-Stil, die vollständig mit lokalen LLMs laufen kann',
    fr: 'Moteur de recherche IA open source et auto-hébergé (style Perplexity) qui peut fonctionner entièrement avec des LLM locaux',
    ja: 'ローカルLLMだけで完全に動作可能な、セルフホスト型オープンソースのAI検索エンジン（Perplexity風）',
    zh: '自托管的开源AI搜索引擎（类Perplexity），可完全运行在本地LLM上',
    es: 'Motor de búsqueda de IA de código abierto y autoalojado (estilo Perplexity) que puede funcionar por completo con LLMs locales',
    pt: 'Motor de busca de IA de código aberto e auto-hospedado (estilo Perplexity) que pode rodar totalmente com LLMs locais',
    ar: 'محرك بحث بالذكاء الاصطناعي مفتوح المصدر ومستضاف ذاتيًا (على غرار Perplexity) يمكنه العمل بالكامل باستخدام نماذج لغوية محلية',
    ko: '로컬 LLM만으로 완전히 구동 가능한 셀프호스팅 오픈소스 AI 검색 엔진(Perplexity 스타일)',
  },
  lastVerifiedDate: '2026-09-18',
}
