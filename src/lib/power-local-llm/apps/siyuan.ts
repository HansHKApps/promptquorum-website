// Local AI App Directory — SiYuan (layer: notes)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'siyuan',
  name: 'SiYuan',
  categories: ['notes-integrations', 'personal-assistants'],
  interfaces: ['desktop', 'web', 'mobile'],
  locality: 'hybrid', // notes and blocks are stored fully locally, but the AI-agent features route through whichever LLM provider (local or cloud) the user configures — verified 2026-09-18
  platforms: ['mac', 'win', 'linux', 'ios', 'android'],
  worksWith: ['OpenAI API', 'Ollama'],
  engine: 'external', // block-based knowledge workspace that connects to a pluggable LLM backend rather than shipping its own inference, verified 2026-09-18
  license: 'AGPL-3.0',
  price: 'freemium', // core app and local use are free; end-to-end-encrypted cloud sync is a paid subscription, verified 2026-09-18
  hardware: { ramGb: null, vramGb: null, cpuOnly: true },
  stars: 46416, // github.com/siyuan-note/siyuan, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['docs'],
  url: 'b3log.org/siyuan',
  tagline: {
    en: 'Privacy-first, self-hosted knowledge workspace with block-level references and built-in AI agent collaboration',
    de: 'Selbst gehosteter, datenschutzorientierter Wissensarbeitsbereich mit blockbasierten Verweisen und integrierter KI-Agenten-Zusammenarbeit',
    fr: 'Espace de connaissances auto-hébergé et axé sur la confidentialité, avec références au niveau des blocs et collaboration intégrée avec des agents IA',
    ja: 'プライバシー重視のセルフホスト型ナレッジワークスペース。ブロック単位の参照とAIエージェント連携を標準搭載',
    zh: '隐私优先的自托管知识工作空间，支持块级引用，并内置AI智能体协作功能',
    es: 'Espacio de conocimiento autoalojado y centrado en la privacidad, con referencias a nivel de bloque y colaboración integrada con agentes de IA',
    pt: 'Espaço de conhecimento auto-hospedado e focado em privacidade, com referências em nível de bloco e colaboração integrada com agentes de IA',
    ar: 'مساحة معرفية مستضافة ذاتيًا تركز على الخصوصية، مع مراجع على مستوى الكتلة وتعاون مدمج مع وكلاء الذكاء الاصطناعي',
    ko: '블록 단위 참조와 AI 에이전트 협업을 기본 지원하는 프라이버시 중심 셀프호스팅 지식 워크스페이스',
  },
  reviewSlug: 'siyuan-review', // dedicated PromptQuorum review — added 2026-09-18
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { noteApp: 'SiYuan' },
  lastVerifiedDate: '2026-09-18',
}
