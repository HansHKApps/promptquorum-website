// Local AI App Directory — logseq-copilot (layer: tools)
// Migrated from local-llm-software-directory-2026.ts (Phase 1 data migration).
// Plan: see-the-directory-page-virtual-cocke.md
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'logseq-copilot',
  name: 'logseq-copilot',
  categories: ['notes-integrations'],
  interfaces: ['plugin'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio', 'OpenAI API', 'Google Gemini API'],
  engine: 'external',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // logseq-copilot is a Logseq plugin with no built-in inference engine — per PromptQuorum's own logseq-copilot-review.ts research (against github.com/jarodise/logseq-copilot), it only calls out to a configured OpenAI-compatible endpoint (local Ollama/LM Studio or cloud Gemini/Grok), so hardware floor depends entirely on that backend, verified 2026-09-13
  stars: 17,
  addedDate: '2026-09-04',
  status: 'listed',
  uses: ['docs'],
  url: 'github.com/jarodise/logseq-copilot', // corrected 2026-09-12: the 2026-09-04 "fix" to EINDEX/logseq-copilot was itself wrong — eindex/logseq-copilot is a browser extension with zero AI/LLM features and does not match worksWith below; the real repo matching worksWith (Ollama, LM Studio, OpenAI API, Google Gemini API) is JARODISE/logseq-copilot (MIT license, 17 stars) — see reviewSlug for the full write-up
  tagline: {
    en: 'Logseq plugin that adds AI chat blocks and slash commands using local or cloud models',
    de: 'Logseq-Plugin, das KI-Chat-Blöcke und Slash-Befehle über lokale oder Cloud-Modelle hinzufügt',
    fr: 'Plugin Logseq qui ajoute des blocs de chat IA et des commandes slash via des modèles locaux ou cloud',
    ja: 'ローカルまたはクラウドモデルでAIチャットブロックとスラッシュコマンドを追加するLogseqプラグイン',
    zh: '通过本地或云端模型为Logseq添加AI聊天块和斜杠命令的插件',
    es: 'Plugin de Logseq que añade bloques de chat IA y comandos de barra mediante modelos locales o en la nube',
    pt: 'Plugin do Logseq que adiciona blocos de chat com IA e comandos de barra via modelos locais ou em nuvem',
    ar: 'إضافة Logseq تضيف كتل دردشة بالذكاء الاصطناعي وأوامر شرطة مائلة باستخدام نماذج محلية أو سحابية',
    ko: '로컬 또는 클라우드 모델을 사용해 AI 채팅 블록과 슬래시 명령을 추가하는 Logseq 플러그인',
  },
  reviewSlug: 'logseq-copilot-review',
  lastVerifiedDate: '2026-09-12',
}
