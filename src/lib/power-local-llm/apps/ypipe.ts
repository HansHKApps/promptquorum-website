// Local AI App Directory — Ypipe (layer: runtime)
// Added from apps-to-add.md Section B (Hans sign-off 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.
//
// Source doc's concern was "technical preview, no usage numbers disclosed" — confirmed:
// github.com/iunera/ypipe has only 13 stars as of 2026-09-05, well below every other entry
// in this directory. Listed anyway per Hans's sign-off — genuinely small/early, not
// exaggerated. No LICENSE file found in the repo, so license is described honestly rather
// than assigned a guessed SPDX identifier.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ypipe',
  name: 'Ypipe',
  categories: ['runtimes-managers'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'],
  worksWith: null,
  engine: 'builtin',
  license: 'Not publicly documented (technical preview)',
  price: 'free', // free during the technical preview period; no post-preview pricing published
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 13, // github.com/iunera/ypipe, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['agent', 'build', 'docs'],
  url: 'ypipe.com',
  tagline: {
    en: 'Airgapped local AI client bundling an inference engine, models, and MCP servers into one executable',
    de: 'Air-Gapped lokaler KI-Client, der eine Inferenz-Engine, Modelle und MCP-Server in einer ausführbaren Datei bündelt',
    fr: 'Client IA local isolé (air-gapped) regroupant un moteur d\'inférence, des modèles et des serveurs MCP en un seul exécutable',
    ja: '推論エンジン、モデル、MCPサーバーを1つの実行ファイルにまとめたエアギャップ対応ローカルAIクライアント',
    zh: '将推理引擎、模型和MCP服务器打包进单一可执行文件的物理隔离本地AI客户端',
    es: 'Cliente de IA local con air gap que empaqueta un motor de inferencia, modelos y servidores MCP en un único ejecutable',
    pt: 'Cliente de IA local com air gap que empacota um motor de inferência, modelos e servidores MCP em um único executável',
    ar: 'عميل ذكاء اصطناعي محلي معزول تماماً (air-gapped) يجمع محرك استدلال ونماذج وخوادم MCP في ملف تنفيذي واحد',
    ko: '추론 엔진, 모델, MCP 서버를 하나의 실행 파일로 묶은 에어갭 로컬 AI 클라이언트',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
