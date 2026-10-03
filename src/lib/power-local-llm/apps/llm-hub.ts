// Local AI App Directory — LLM Hub (layer: mobile)
// Added 2026-10-03 at the operator's request (second app of the October mobile batch).
// Verified on 2026-10-03 against: the Google Play listing (play.google.com/store/apps/details?id=com.llmhub.llmhub —
// listed as "LLM Hub - Local AI Assistant" by "timmy boy", developer name Yuan Qian, Southbank VIC, Australia;
// 10K+ downloads, 3.0 stars from 335 reviews, in-app purchases, updated 2026-09-28; Data safety: "No data shared with
// third parties" and "No data collected"), the App Store listing (id6762511820 — free with in-app purchases,
// "LLM Hub Premium Lifetime" $9.99, version 1.4.0, iOS/iPadOS 17.5+, Mac with Apple M1+, visionOS 1.2+, privacy label
// "does not collect any data"), and github.com/timmyy123/LLM-Hub (README, LICENSE, android/app/build.gradle.kts
// versionName 4.4.2, ios MARKETING_VERSION 1.4.0, 602 stars, last commit 2026-09-30).
// LICENSE CAVEAT: the README and Play listing call the app "open source", but the repository's LICENSE file is headed
// "PolyForm Noncommercial License 1.0.0" and restricts commercial use (including app-store distribution and
// monetization) — i.e. source-available, not an OSI open-source license. Labelled accordingly. No maker outreach.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'llm-hub',
  name: 'LLM Hub',
  categories: ['general-chat-clients', 'image-generation', 'speech-to-text'],
  interfaces: ['mobile'],
  locality: 'local', // inference runs on-device; optional web search and remote MCP servers need the internet, and models download from Hugging Face
  platforms: ['android', 'ios'], // App Store listing also shows iPad, Mac (Apple M1+) and Apple Vision availability; the README says Windows/macOS native apps are planned, not released
  worksWith: ['Hugging Face', 'MCP', 'Termux'], // downloads/imports models from Hugging Face; connects compatible MCP servers; Android agent drafts Termux commands
  engine: 'builtin',
  license: 'Source-available (PolyForm Noncommercial 1.0.0)', // LICENSE file text; the project itself says "open source" — see header comment
  price: 'freemium', // free to install, in-app purchases (App Store: "LLM Hub Premium Lifetime" $9.99; Play: "some features require Premium")
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM floor stated in the listings; README cites CPU/GPU/NPU acceleration that depends on device and chipset
  stars: 602, // GitHub, 2026-10-03
  addedDate: '2026-10-03',
  status: 'listed',
  uses: ['phone', 'chat', 'agent', 'image', 'audio'],
  url: 'llm-hub.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/au/app/llm-hub/id6762511820',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.llmhub.llmhub',
    github: 'https://github.com/timmyy123/LLM-Hub',
    web: 'https://llm-hub.app',
  },
  tagline: {
    en: 'On-device AI suite for Android and iPhone: chat, agent, image, music, translation',
    de: 'On-Device-KI-Suite für Android und iPhone: Chat, Agent, Bild, Musik, Übersetzung',
    fr: "Suite d'IA sur l'appareil pour Android et iPhone : chat, agent, image, musique, traduction",
    ja: 'AndroidとiPhone向けのオンデバイスAIスイート。チャット、エージェント、画像、音楽、翻訳',
    zh: '面向Android和iPhone的设备端AI套件：聊天、智能体、图像、音乐、翻译',
    es: 'Suite de IA en el dispositivo para Android y iPhone: chat, agente, imagen, música, traducción',
    pt: 'Suíte de IA no dispositivo para Android e iPhone: chat, agente, imagem, música, tradução',
    ar: 'مجموعة ذكاء اصطناعي على الجهاز لـ Android وiPhone: دردشة ووكيل وصور وموسيقى وترجمة',
    ko: 'Android와 iPhone용 온디바이스 AI 모음: 채팅, 에이전트, 이미지, 음악, 번역',
  },
  // Comparison attributes: each value verified against the Play/App Store listings and the README on 2026-10-03;
  // a missing key = not stated, never false. importModels = README "Import custom models (.task, .litertlm, qnn, .mnn, .gguf)";
  // modelDownloads = "Direct downloads from HuggingFace" / Settings → Download Models; visionInput = Play "ask about text and images";
  // voice = local text-to-speech, Whisper transcription and VibeVoice hands-free voice chat.
  compare: { offline: true, importModels: true, modelDownloads: true, visionInput: true, voice: true },
  mcpSupport: true, // Play + README: connect compatible MCP servers; every MCP tool call needs user approval
  lastVerifiedDate: '2026-10-03',
  reviewSlug: 'llm-hub-review',
  pqReview: {
    date: '2026-10-03',
    version: 'Android 4.4.2 / iOS 1.4.0',
    versionSourceUrl: 'https://github.com/timmyy123/LLM-Hub',
  },
  verdict: 'Best for Android and iPhone users who want one on-device app covering chat, an agent with MCP, image and music generation, translation and transcription, and who accept a source-available noncommercial license, a paid Premium tier; limited by unpublished hardware requirements and a license that is source-available rather than OSI open source.',
}
