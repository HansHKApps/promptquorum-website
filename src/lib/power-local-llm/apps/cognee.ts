// Local AI App Directory — cognee (layer: AI memory / knowledge graph)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'cognee',
  name: 'cognee',
  categories: ['rag-frameworks', 'embeddings-indexing'],
  interfaces: ['library', 'cli'],
  locality: 'hybrid', // engine and knowledge graph run self-hosted, but default LLM/embedding calls go to a configured external provider (local Ollama is also supported), verified 2026-09-18
  platforms: null, // ships as a Python library/self-hosted server, deployable on any host OS
  worksWith: ['Claude Code', 'Cursor', 'LangGraph', 'Ollama'],
  engine: 'external',
  license: 'Apache-2.0',
  price: 'free', // open-source engine is free to self-host; Cognee Cloud is a separate managed offering, verified 2026-09-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 30794, // github.com/topoteretes/cognee, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'docs'],
  url: 'cognee.ai',
  tagline: {
    en: 'Open-source AI memory engine giving agents persistent, self-hosted long-term memory via a knowledge graph',
    de: 'Open-Source-KI-Gedächtnis-Engine, die Agenten über einen Wissensgraphen dauerhaftes, selbst gehostetes Langzeitgedächtnis verleiht',
    fr: 'Moteur de mémoire IA open source offrant aux agents une mémoire à long terme persistante et auto-hébergée via un graphe de connaissances',
    ja: 'ナレッジグラフを通じてエージェントに永続的でセルフホスト型の長期記憶を与えるオープンソースAIメモリエンジン',
    zh: '开源AI记忆引擎，通过知识图谱为智能体提供持久化的自托管长期记忆',
    es: 'Motor de memoria de IA de código abierto que otorga a los agentes memoria a largo plazo persistente y autoalojada mediante un grafo de conocimiento',
    pt: 'Motor de memória de IA de código aberto que dá a agentes memória de longo prazo persistente e auto-hospedada por meio de um grafo de conhecimento',
    ar: 'محرك ذاكرة ذكاء اصطناعي مفتوح المصدر يمنح الوكلاء ذاكرة طويلة الأمد ودائمة ومستضافة ذاتيًا عبر رسم بياني معرفي',
    ko: '지식 그래프를 통해 에이전트에게 영구적이고 셀프호스팅 가능한 장기 기억을 제공하는 오픈소스 AI 메모리 엔진',
  },
  reviewSlug: 'cognee-review', // dedicated PromptQuorum review — added 2026-09-18
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { localLlm: true, dockerDeploy: true, apiServer: true },
  lastVerifiedDate: '2026-09-18',
}
