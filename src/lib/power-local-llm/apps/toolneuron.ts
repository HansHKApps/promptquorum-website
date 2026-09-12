// Local AI App Directory — ToolNeuron (layer: mobile)
// Verified against the project's GitHub repo (github.com/Siddhesh2377/ToolNeuron,
// README + GitHub API metadata fetched 2026-09-12) rather than the Play Store
// listing alone — the listing's own "License" field is not reliable (an initial
// pass had this as Apache-2.0; the repo's actual LICENSE file and GitHub API
// both confirm MIT).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'toolneuron',
  name: 'ToolNeuron',
  categories: ['general-chat-clients', 'document-pdf-chat', 'image-generation'],
  interfaces: ['mobile'],
  locality: 'local',
  platforms: ['android'],
  worksWith: null,
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: null, // TODO: hardware floor depends on which model is loaded — needs manual research
  stars: 467, // GitHub stars, per api.github.com/repos/Siddhesh2377/ToolNeuron, 2026-09-12
  addedDate: '2026-09-12',
  status: 'listed',
  uses: ['phone', 'chat', 'docs', 'image', 'audio'],
  url: 'github.com/Siddhesh2377/ToolNeuron',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.dark.tool_neuron',
    github: 'https://github.com/Siddhesh2377/ToolNeuron',
    web: 'https://tool-neuron.vercel.app/',
  },
  tagline: {
    en: 'Open-source (MIT), encrypted Android app for on-device AI chat, document RAG, and voice',
    de: 'Open-Source-Android-App (MIT) für verschlüsselten On-Device-KI-Chat, Dokument-RAG und Sprache',
    fr: "Application Android open source (MIT) et chiffrée pour chat IA local, RAG documentaire et voix",
    ja: 'オンデバイスAIチャット・ドキュメントRAG・音声に対応した暗号化オープンソース(MIT)Androidアプリ',
    zh: '支持设备端AI聊天、文档RAG与语音的开源(MIT)加密Android应用',
    es: 'App Android open source (MIT) y cifrada para chat de IA local, RAG de documentos y voz',
    pt: 'App Android open source (MIT) e criptografado para chat de IA local, RAG de documentos e voz',
    ar: 'تطبيق أندرويد مفتوح المصدر (MIT) ومشفّر للدردشة مع الذكاء الاصطناعي محليًا، وRAG للمستندات، والصوت',
    ko: '온디바이스 AI 채팅, 문서 RAG, 음성을 지원하는 오픈소스(MIT) 암호화 안드로이드 앱',
  },
  reviewSlug: 'toolneuron-review',
  lastVerifiedDate: null,
}
