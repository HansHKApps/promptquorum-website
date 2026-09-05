// Local AI App Directory — Atomic Agent (layer: agent)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'atomic-agent',
  name: 'Atomic Agent',
  categories: ['agent-frameworks'],
  interfaces: ['desktop', 'cli'],
  locality: 'local',
  platforms: ['mac', 'linux', 'win'], // Mac requires Apple Silicon, Windows requires x64 — no Intel Mac
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 2494, // github.com/AtomicBot-ai/atomic-agent, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['agent', 'code'],
  url: 'atomicagent.io',
  tagline: {
    en: 'Local-first AI agent that browses, edits files, and runs shell commands via llama.cpp',
    de: 'Lokal-first-KI-Agent, der über llama.cpp browst, Dateien bearbeitet und Shell-Befehle ausführt',
    fr: 'Agent IA local par défaut qui navigue, modifie des fichiers et exécute des commandes shell via llama.cpp',
    ja: 'llama.cpp経由でブラウジング、ファイル編集、シェルコマンド実行を行うローカルファーストAIエージェント',
    zh: '通过llama.cpp进行浏览、编辑文件和运行Shell命令的本地优先AI代理',
    es: 'Agente de IA local que navega, edita archivos y ejecuta comandos de shell mediante llama.cpp',
    pt: 'Agente de IA local que navega, edita arquivos e executa comandos de shell via llama.cpp',
    ar: 'وكيل ذكاء اصطناعي محلي أولاً يتصفح ويحرر الملفات وينفذ أوامر الطرفية عبر llama.cpp',
    ko: 'llama.cpp를 통해 탐색하고 파일을 편집하며 셸 명령을 실행하는 로컬 우선 AI 에이전트',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
