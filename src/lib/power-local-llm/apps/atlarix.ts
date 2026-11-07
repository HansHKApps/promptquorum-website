// Local AI App Directory — Atlarix (layer: code-assistants-ide-plugins)
// Founder-submission entry: Amariah Abishai (Norah Labs) reached out to
// PromptQuorum directly by email in 2026-09. Facts below come from that
// correspondence, corroborated by atlarix.dev, plus PromptQuorum's own
// research into secondary sources (the maker's own blog/public posts,
// which are NOT independently verified by PromptQuorum).
//
// 2026-09-25 founder-review update: Amariah replied by email with corrections
// to the initial review — license (proprietary/EULA, not unverified), the
// current version (v14.52.1) and its sources, the Chrome extension's actual
// data-flow split (BYOK when paired with the desktop app vs. managed models
// standalone), the sandboxed-but-real terminal test execution, and that
// paid-Auto training exclusion covers pay-as-you-go credit, not just Pro.
// founderReviewedDate below reflects this fact-check pass.
//
// 2026-11-07 founder update (v15.13.3): Amariah sent further corrections — product is now
// desktop app + editor extension (VS Code/Cursor/Kiro/Windsurf/VSCodium; Zed + JetBrains via
// the Agent Client Protocol) + terminal CLI, not "desktop-only/not an IDE plugin"; "100% local /
// nothing leaves the machine" is replaced by "with a local model prompts and code go only to
// that model, Atlarix itself is still contacted for sign-in, updates and catalogs"; free Auto
// no longer described via one provider's programme (prompts shared with the AI providers that
// serve it, after a one-time OK in the app). She offered to check the new text before it goes
// live. 2026-11-07 (owner rule "Founder re-review"): the second round of comments is integrated
// one-to-one, so founderReviewedDate is bumped to 2026-11-07 and the round is logged in
// founderReviewDates (shown as "reviewed 2 times" on the tile, drawer and review banner).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'atlarix',
  name: 'Atlarix',
  categories: ['code-assistants-ide-plugins'],
  interfaces: ['desktop', 'plugin', 'cli'],
  locality: 'hybrid',
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Ollama', 'LM Studio'],
  engine: 'external',
  // Proprietary, free to use under an end-user license agreement (EULA) linked from the
  // releases repo — confirmed by the founder 2026-09-25, not open source.
  license: 'Proprietary (free, EULA)',
  price: 'freemium',
  // Hardware floor depends entirely on which local model the user loads via
  // Ollama or LM Studio, not a fixed attribute of Atlarix itself — same
  // convention as continue-dev.ts and other client-only tools in this file.
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: null, // no public GitHub star count found for an official Atlarix repo
  addedDate: '2026-09-25',
  status: 'listed',
  uses: ['code', 'agent'],
  url: 'atlarix.dev',
  // Only the installer/releases channel fits the existing StoreLinkKey set — the
  // Chrome Web Store and Microsoft Store listings (see article CTA table) have no
  // matching key ('web' would mislabel as "Website" in the UI), so they stay prose-only.
  storeLinks: {
    github: 'https://github.com/AmariahAK/atlarix-releases/releases',
  },
  tagline: {
    en: 'Free AI coding agent — desktop app, editor extension and CLI; works with local models via Ollama or LM Studio',
    de: 'Kostenloser KI-Coding-Agent — Desktop-App, Editor-Erweiterung und CLI; arbeitet mit lokalen Modellen über Ollama oder LM Studio',
    fr: "Agent de codage IA gratuit — application de bureau, extension d'éditeur et CLI ; fonctionne avec des modèles locaux via Ollama ou LM Studio",
    ja: '無料のAIコーディングエージェント — デスクトップアプリ、エディタ拡張機能、CLI。OllamaやLM Studio経由でローカルモデルを利用可能',
    zh: '免费AI编程代理——桌面应用、编辑器扩展和CLI；可通过Ollama或LM Studio使用本地模型',
    es: 'Agente de codificación IA gratuito: app de escritorio, extensión de editor y CLI; funciona con modelos locales vía Ollama o LM Studio',
    pt: 'Agente de codificação IA gratuito — app de desktop, extensão de editor e CLI; funciona com modelos locais via Ollama ou LM Studio',
    ar: 'وكيل برمجة بالذكاء الاصطناعي مجاني — تطبيق سطح مكتب وإضافة محرر وواجهة CLI؛ يعمل مع النماذج المحلية عبر Ollama أو LM Studio',
    ko: '무료 AI 코딩 에이전트 — 데스크톱 앱, 에디터 확장 프로그램, CLI. Ollama 또는 LM Studio로 로컬 모델 사용 가능',
  },
  reviewSlug: 'atlarix-review',
  pqReview: {
    date: '2026-11-07',
    version: '15.13.3',
    versionSourceUrl: 'https://github.com/AmariahAK/atlarix-releases/releases',
  },
  // Amariah (founder) replied by email 2026-09-25 with corrections to PromptQuorum's
  // initial review — see the header comment above for the fact list. Badge is
  // self-expiring (FOUNDER_STAR_VALID_DAYS) — no separate cleanup needed later.
  founderReviewedDate: '2026-11-07',
  founderReviewDates: ['2026-09-25', '2026-11-07'],
  // Verified against the founder's own words (local model: prompts/code go only to that model;
  // managed models: hybrid) and the product's stated feature set, 2026-09-25, re-checked
  // 2026-11-07: editor extension for VS Code/Cursor/Kiro/Windsurf/VSCodium, Zed + JetBrains
  // through the Agent Client Protocol (maker-stated). autocomplete/mcp left unset — not stated.
  compare: { localLlm: true, ollama: true, vscode: true, jetbrains: true, agentMode: true },
  founder: {
    who: {
      en: 'Amariah Abishai, Founder, Norah Labs',
      de: 'Amariah Abishai, Gründer, Norah Labs',
      fr: 'Amariah Abishai, fondateur, Norah Labs',
      ja: 'Amariah Abishai、Norah Labs 創業者',
      zh: 'Amariah Abishai，Norah Labs 创始人',
      es: 'Amariah Abishai, fundador de Norah Labs',
      pt: 'Amariah Abishai, fundador da Norah Labs',
      ar: 'أماريا أبيشاي، مؤسس Norah Labs',
      ko: '아마리아 아비샤이, Norah Labs 창립자',
    },
    why: 'Built Atlarix to be an AI coding agent trustworthy with a real codebase: one that plans, edits, runs the project\'s own tests, and never changes a file until the diff is approved — with Ollama or LM Studio your prompts and code go only to that local model.',
    providedDate: '2026-09-25',
    fullQuote: [
      '"I built Atlarix because I wanted an AI agent I could trust with a real codebase: one that plans, edits, runs the project\'s own tests, and never changes a file until I approve the diff."',
      '"With Ollama or LM Studio, your prompts and code go only to that local model. Atlarix itself is still contacted for sign-in, updates and catalogs, and there\'s no index and no embeddings."',
      '"I\'d rather state that clearly than have anyone assume more privacy than they\'re getting."',
    ],
    // Verified 2026-09 via the founder's own GitHub bio (github.com/AmariahAK),
    // which names Atlarix + Norah Labs + Nairobi. No X/Twitter link found.
    socials: {
      linkedin: 'https://www.linkedin.com/in/amariah-abishai-3156412a6',
      github: 'https://github.com/AmariahAK',
      instagram: 'https://www.instagram.com/abishaiama',
      website: 'https://atlarix.dev',
    },
  },
  lastVerifiedDate: '2026-11-07',
  lastUpstreamUpdate: '2026-11-07', // GitHub API: pushed_at 2026-11-07, latest release v15.13.3 2026-11-06; read 2026-11-07
  lastUpstreamUpdateSource: 'https://github.com/AmariahAK/atlarix-releases',
}
