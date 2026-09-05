// Local AI App Directory — Odysseus (layer: workspace)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "site is a GitHub Pages subdomain, not a dedicated domain" —
// still true (no separate marketing domain found), so url points at the canonical GitHub
// repo per this directory's convention for GitHub-primary tools (e.g. agent-zero.ts).
// Repo moved from pewdiepie-archdaemon/odysseus to odysseus-dev/odysseus — 86,856 stars,
// far above the usage bar, and actively updated (last push 2026-09-03).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'odysseus',
  name: 'Odysseus',
  categories: ['general-chat-clients', 'personal-assistants'],
  interfaces: ['web', 'desktop'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'llama.cpp', 'vLLM', 'OpenAI API', 'OpenRouter'],
  engine: 'both',
  license: 'AGPL-3.0',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 86856, // github.com/odysseus-dev/odysseus (formerly pewdiepie-archdaemon/odysseus), verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['chat', 'agent', 'docs'],
  url: 'github.com/odysseus-dev/odysseus', // corrected 2026-09-05: comment above already noted the repo moved; the url field was not updated to match
  tagline: {
    en: 'Self-hosted, local-first AI workspace for chat, agents, research, and documents — created by Felix Kjellberg (PewDiePie)',
    de: 'Selbstgehosteter, lokal-first KI-Arbeitsbereich für Chat, Agenten, Recherche und Dokumente – erstellt von Felix Kjellberg (PewDiePie)',
    fr: 'Espace de travail IA local et auto-hébergé pour le chat, les agents, la recherche et les documents — créé par Felix Kjellberg (PewDiePie)',
    ja: 'チャット、エージェント、リサーチ、ドキュメント向けのセルフホスト型ローカルファーストAIワークスペース — Felix Kjellberg（PewDiePie）が開発',
    zh: '用于聊天、代理、研究和文档的自托管本地优先AI工作空间——由Felix Kjellberg（PewDiePie）创建',
    es: 'Espacio de trabajo de IA local y autoalojado para chat, agentes, investigación y documentos, creado por Felix Kjellberg (PewDiePie)',
    pt: 'Espaço de trabalho de IA local e auto-hospedado para chat, agentes, pesquisa e documentos — criado por Felix Kjellberg (PewDiePie)',
    ar: 'مساحة عمل ذكاء اصطناعي محلية أولاً وذاتية الاستضافة للدردشة والوكلاء والبحث والمستندات — أنشأها Felix Kjellberg (PewDiePie)',
    ko: '채팅, 에이전트, 리서치, 문서를 위한 자체 호스팅 로컬 우선 AI 워크스페이스 — Felix Kjellberg(PewDiePie) 제작',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
