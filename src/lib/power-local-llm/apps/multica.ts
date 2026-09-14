// Local AI App Directory — multica (layer: agent)
// Added per directory-add-5-apps sweep — one of the top standalone tools
// missing from a user-supplied app list cross-check (2026-09-14).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'multica',
  name: 'multica',
  categories: ['autonomous-agents', 'agent-frameworks'],
  interfaces: ['web', 'desktop', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'OpenAI Codex', 'Cursor'],
  engine: 'external',
  license: 'Multica License (Apache-2.0-derived, source-available)', // github.com/multica-ai/multica reports license NOASSERTION on the GitHub API — the repo uses a custom Apache-2.0-derived license with added conditions, not plain Apache-2.0, verified 2026-09-14
  price: 'freemium',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // orchestrates external coding-agent CLIs (Claude Code, Codex, Cursor) rather than running models itself — no GPU requirement documented, verified 2026-09-14
  stars: 49736, // fast-growing count on an ~8-month-old repo; corroborated by organic-scale fork/issue/commit/contributor activity (6,424 forks, 1,566 open issues, 30 contributors, releases every 1-3 days) rather than independently star-history-audited, verified 2026-09-14
  addedDate: '2026-09-14',
  status: 'listed',
  uses: ['agent', 'build'],
  url: 'multica.ai',
  tagline: {
    en: 'Self-hosted workspace to assign, track, and review work from AI coding agents like Claude Code and Cursor',
    de: 'Selbst gehosteter Arbeitsbereich zum Zuweisen, Verfolgen und Prüfen von Arbeit von KI-Coding-Agenten wie Claude Code und Cursor',
    fr: 'Espace de travail auto-hébergé pour assigner, suivre et réviser le travail d’agents de codage IA comme Claude Code et Cursor',
    ja: 'Claude CodeやCursorなどのAIコーディングエージェントの作業を割り当て・追跡・レビューするセルフホスト型ワークスペース',
    zh: '自托管工作空间，用于分配、跟踪和审查Claude Code、Cursor等AI编码智能体的工作成果',
    es: 'Espacio de trabajo autoalojado para asignar, seguir y revisar el trabajo de agentes de codificación IA como Claude Code y Cursor',
    pt: 'Espaço de trabalho auto-hospedado para atribuir, acompanhar e revisar o trabalho de agentes de codificação de IA como Claude Code e Cursor',
    ar: 'مساحة عمل مستضافة ذاتيًا لتعيين ومتابعة ومراجعة عمل وكلاء البرمجة بالذكاء الاصطناعي مثل Claude Code وCursor',
    ko: 'Claude Code, Cursor 같은 AI 코딩 에이전트의 작업을 배정·추적·검토하는 셀프호스팅 워크스페이스',
  },
  lastVerifiedDate: '2026-09-14',
  reviewSlug: 'multica-review', // dedicated PromptQuorum review
}
