// Local AI App Directory — LongMemory (layer: memory / retrieval)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/CaviraOSS/LongMemory, the CURRENT name of
// the project also historically called "OpenMemory" by the same CaviraOSS org
// (the legacy openmemory-js/openmemory-py packages were replaced by
// longmemory/longmemory-sdk). Listed once as LongMemory — do not create a
// separate OpenMemory entry — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'longmemory',
  name: 'LongMemory',
  categories: ['embeddings-indexing', 'rag-frameworks'],
  interfaces: ['cli', 'library', 'web'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Desktop', 'GitHub Copilot', 'Codex', 'Ollama', 'n8n'],
  engine: 'library',
  license: 'Apache-2.0', // n8n community node package ships MIT separately per n8n's own package rules, but the core LongMemory engine is Apache-2.0, verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // a persistent memory/retrieval store, not an inference engine — it calls out to OpenAI-compatible, Gemini, Bedrock, Ollama, or local HTTP embedding providers rather than running its own model, verified 2026-09-18
  stars: 4502, // verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'docs', 'build'],
  url: 'github.com/CaviraOSS/LongMemory',
  tagline: {
    en: 'Self-hosted persistent memory store that gives Claude Desktop, Copilot, Codex, and other AI tools long-term recall across sessions',
    de: 'Selbst gehosteter dauerhafter Speicher, der Claude Desktop, Copilot, Codex und anderen KI-Tools sitzungsübergreifendes Langzeitgedächtnis verleiht',
    fr: 'Mémoire persistante auto-hébergée qui donne à Claude Desktop, Copilot, Codex et d’autres outils IA un rappel à long terme entre les sessions',
    ja: 'Claude Desktop、Copilot、Codexなど各種AIツールにセッションをまたぐ長期記憶を与えるセルフホスト型の永続メモリストア',
    zh: '自托管的持久化记忆存储，为Claude Desktop、Copilot、Codex等AI工具提供跨会话的长期记忆能力',
    es: 'Almacén de memoria persistente autoalojado que da a Claude Desktop, Copilot, Codex y otras herramientas de IA memoria a largo plazo entre sesiones',
    pt: 'Armazenamento de memória persistente auto-hospedado que dá ao Claude Desktop, Copilot, Codex e outras ferramentas de IA memória de longo prazo entre sessões',
    ar: 'مخزن ذاكرة دائم مستضاف ذاتيًا يمنح Claude Desktop وCopilot وCodex وأدوات الذكاء الاصطناعي الأخرى ذاكرة طويلة الأمد عبر الجلسات',
    ko: 'Claude Desktop, Copilot, Codex 등 여러 AI 도구에 세션 간 장기 기억을 부여하는 셀프호스팅 영구 메모리 저장소',
  },
  reviewSlug: 'longmemory-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v1.2.3', versionSourceUrl: 'https://github.com/CaviraOSS/LongMemory/releases/tag/v1.2.3' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { agents: true, dockerDeploy: true, apiServer: true },
  lastVerifiedDate: '2026-09-18',
}
