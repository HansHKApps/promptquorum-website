// Local AI App Directory — HilbertRaum (layer: desktop)
// Added following maker outreach (Vladimir Tosovic, HilbertraumAI, hilbertraum.ai) — 2026-09-25.
// All fields below verified directly against hilbertraum.ai and
// github.com/HilbertraumAI/HilbertRaum (README + releases page) on 2026-09-25 —
// the maker's email was used only as a starting point, not taken at face value.
//
// TODO(follow-up): maker Vladimir Tosovic (HilbertraumAI, hilbertraum.ai) reached out 2026-09-25 offering to stay in touch — request founder Q&A / quote for the 'founder' field and a "From the Maker" section in the review before the next refresh.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'hilbertraum',
  name: 'HilbertRaum',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['desktop'],
  locality: 'local',
  platforms: ['win', 'mac', 'linux'], // macOS build is Apple Silicon (arm64) only per the current GitHub release assets — no Intel Mac build found
  worksWith: null, // bundles its own model runtime (llama.cpp/whisper.cpp sidecars) rather than connecting to external backends like Ollama — not researched as a "connects to X" client
  engine: 'builtin',
  license: 'GPL-3.0-or-later',
  price: 'free',
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true }, // per github.com/HilbertraumAI/HilbertRaum README: "Minimum RAM: 8 GB", GPU optional/CPU-only supported, verified 2026-09-25
  stars: 80, // per GitHub repository page, verified 2026-09-25
  addedDate: '2026-09-25',
  status: 'listed',
  uses: ['chat', 'docs', 'audio'],
  url: 'hilbertraum.ai',
  storeLinks: {
    github: 'https://github.com/HilbertraumAI/HilbertRaum',
    web: 'https://hilbertraum.ai',
  },
  tagline: {
    en: 'Portable, offline AI workspace for chat and your own documents',
    de: 'Portabler, offline laufender KI-Arbeitsbereich für Chat und eigene Dokumente',
    fr: "Espace de travail IA portable et hors ligne pour le chat et vos documents",
    ja: 'チャットと自分の文書のための、オフラインで動くポータブルAIワークスペース',
    zh: '可移动、离线运行的AI工作空间，支持聊天与文档问答',
    es: 'Espacio de trabajo de IA portátil y offline para chatear y consultar tus documentos',
    pt: 'Espaço de trabalho de IA portátil e offline para chat e seus próprios documentos',
    ar: 'مساحة عمل ذكاء اصطناعي محمولة تعمل دون اتصال للدردشة ومستنداتك الخاصة',
    ko: '채팅과 내 문서 작업을 위한 휴대용 오프라인 AI 작업 공간',
  },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-25;
  // a missing key = not stated there, never false. ollama/customEndpoint/mcp left unset — HilbertRaum
  // bundles its own runtime rather than documenting a connection to Ollama or a custom OpenAI-compatible
  // endpoint as a client, and MCP support is not mentioned anywhere in the README or site.
  compare: { builtInEngine: true, fileChat: true, voice: true },
  lastVerifiedDate: '2026-09-25',
  reviewSlug: 'hilbertraum-review',
  pqReview: {
    date: '2026-09-25',
    version: '0.1.61',
    versionSourceUrl: 'https://github.com/HilbertraumAI/HilbertRaum/releases',
  },
  verdict: 'Best for privacy-conscious users who want one portable, no-install app for offline chat, local document Q&A, and translation on their own hardware; limited by no dedicated mobile app and no Intel Mac build yet.',
}
