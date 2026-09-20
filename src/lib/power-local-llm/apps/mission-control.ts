// Local AI App Directory — Mission Control (layer: agent orchestration)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "mission-control" is an extremely generic repo name with
// many unrelated same-named projects on GitHub. This entry is specifically
// github.com/builderz-labs/mission-control, a self-hosted control plane for
// operating AI coding-agent runtimes (OpenClaw, Claude Code, Codex) — the
// only on-theme, actively maintained candidate found — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mission-control',
  name: 'Mission Control',
  categories: ['agent-frameworks', 'observability'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'], // Node.js 22+/pnpm source install or multi-arch Docker images, verified 2026-09-18
  worksWith: ['OpenClaw', 'Claude Code', 'Codex', 'CrewAI', 'LangGraph', 'AutoGen'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // a control plane that dispatches to and monitors external agent runtimes, backed by SQLite — no inference hardware of its own, verified 2026-09-18
  stars: 6236, // github.com/builderz-labs/mission-control, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'github.com/builderz-labs/mission-control',
  tagline: {
    en: 'Self-hosted control plane to dispatch tasks, review runs, and track spend across Claude Code, Codex, OpenClaw, and other agent runtimes',
    de: 'Selbst gehostete Steuerungsebene zum Verteilen von Aufgaben, Prüfen von Läufen und Verfolgen von Ausgaben über Claude Code, Codex, OpenClaw und andere Agenten-Laufzeitumgebungen',
    fr: "Plan de contrôle auto-hébergé pour répartir les tâches, examiner les exécutions et suivre les dépenses sur Claude Code, Codex, OpenClaw et d'autres runtimes d'agents",
    ja: 'Claude Code、Codex、OpenClawなどのエージェントランタイムを横断してタスク割り当て・実行レビュー・支出追跡を行うセルフホスト型コントロールプレーン',
    zh: '自托管控制平面，可在Claude Code、Codex、OpenClaw等智能体运行时之间分配任务、审查运行并追踪支出',
    es: 'Plano de control auto-hospedado para asignar tareas, revisar ejecuciones y controlar el gasto en Claude Code, Codex, OpenClaw y otros runtimes de agentes',
    pt: 'Plano de controle auto-hospedado para despachar tarefas, revisar execuções e acompanhar gastos entre Claude Code, Codex, OpenClaw e outros runtimes de agentes',
    ar: 'مستوى تحكم مستضاف ذاتيًا لتوزيع المهام ومراجعة عمليات التشغيل وتتبع الإنفاق عبر Claude Code وCodex وOpenClaw وبيئات تشغيل وكلاء أخرى',
    ko: 'Claude Code, Codex, OpenClaw 등 여러 에이전트 런타임에 걸쳐 작업을 배정하고 실행을 검토하며 비용을 추적하는 셀프호스팅 제어 플레인',
  },
  mcpSupport: true, // README lists "MCP server" among its own interfaces (Web UI, CLI, MCP server, REST API, WebSocket, SSE) — verified 2026-09-18
  reviewSlug: 'mission-control-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v2.3.0', versionSourceUrl: 'https://github.com/builderz-labs/mission-control/releases/tag/v2.3.0' },
  lastVerifiedDate: '2026-09-18',
}
