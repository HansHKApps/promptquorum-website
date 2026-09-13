// Local AI App Directory — Lemonade (layer: runtime)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lemonade',
  name: 'Lemonade',
  categories: ['runtimes-managers'],
  interfaces: ['cli', 'desktop'],
  locality: 'local',
  platforms: ['win', 'linux', 'mac'],
  worksWith: null,
  engine: 'builtin',
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // per github.com/lemonade-sdk/lemonade README (also see src/lib/power-local-llm/articles/lemonade-review.ts): AMD-sponsored server optimized for Ryzen AI NPU/Radeon GPU but explicitly also "installs and runs on ... generic x86_64/ARM64 CPUs" via its llama.cpp backend; no fixed RAM/VRAM floor, depends on the model loaded, verified 2026-09-13
  stars: 5621, // github.com/lemonade-sdk/lemonade, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['serve', 'chat', 'image', 'audio'],
  url: 'lemonade-server.ai',
  tagline: {
    en: 'AMD-optimized local LLM server with an OpenAI-compatible API for chat, vision, image, and speech',
    de: 'AMD-optimierter lokaler LLM-Server mit OpenAI-kompatibler API für Chat, Vision, Bild und Sprache',
    fr: 'Serveur LLM local optimisé pour AMD avec une API compatible OpenAI pour le chat, la vision, l\'image et la voix',
    ja: 'チャット、ビジョン、画像、音声向けのOpenAI互換APIを備えたAMD最適化ローカルLLMサーバー',
    zh: '为AMD优化的本地LLM服务器，提供兼容OpenAI的API，支持聊天、视觉、图像和语音',
    es: 'Servidor de LLM local optimizado para AMD con una API compatible con OpenAI para chat, visión, imagen y voz',
    pt: 'Servidor de LLM local otimizado para AMD com API compatível com OpenAI para chat, visão, imagem e voz',
    ar: 'خادم نموذج لغوي محلي مُحسَّن لمعالجات AMD مع واجهة برمجة متوافقة مع OpenAI للدردشة والرؤية والصور والكلام',
    ko: '채팅, 비전, 이미지, 음성을 위한 OpenAI 호환 API를 갖춘 AMD 최적화 로컬 LLM 서버',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
  reviewSlug: 'lemonade-review', // dedicated PromptQuorum review — pinned to #1 in the article index
}
