// Local AI App Directory — Izwi (layer: voice / TTS+STT runtime)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: this is github.com/izwi-ai/izwi (local-first voice AI
// runtime with an OpenAI-compatible API) — a separate agentem-ai/izwi repo
// with the same name also exists; izwi-ai/izwi is the official org's repo
// and the one with an active release history — verified 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'izwi',
  name: 'Izwi',
  categories: ['text-to-speech', 'speech-to-text'],
  interfaces: ['desktop', 'web', 'cli'],
  locality: 'local',
  platforms: ['mac', 'win', 'linux'], // macOS (Metal-accelerated on Apple Silicon, CPU fallback), Linux and Windows builds are CPU-only by default, CUDA via Docker/source — verified 2026-09-18
  worksWith: ['Whisper', 'Qwen3-TTS', 'Kokoro', 'Parakeet'],
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // supports many interchangeable TTS/ASR model families (Qwen3-TTS, Kokoro, Whisper, Parakeet, etc.) with Metal acceleration on Apple Silicon and CPU-only Linux/Windows builds by default — no single documented hardware floor, verified 2026-09-18
  stars: 383, // github.com/izwi-ai/izwi, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['audio'],
  url: 'github.com/izwi-ai/izwi',
  reviewSlug: 'izwi-review', // dedicated PromptQuorum review — added 2026-09-19
  pqReview: { date: '2026-09-20', version: 'v0.1.0-beta-17', versionSourceUrl: 'https://github.com/izwi-ai/izwi/releases/tag/v0.1.0-beta-17' },
  tagline: {
    en: 'Local-first voice AI runtime for transcription, speaker diarization, text-to-speech, and voice cloning with an OpenAI-compatible API',
    de: 'Lokal-first Voice-AI-Laufzeitumgebung für Transkription, Sprecher-Diarisierung, Text-zu-Sprache und Stimmenklonung mit OpenAI-kompatibler API',
    fr: "Runtime IA vocale local-first pour la transcription, la diarisation des locuteurs, la synthèse vocale et le clonage de voix, avec une API compatible OpenAI",
    ja: '文字起こし、話者分離、音声合成、音声クローニングをローカルファーストで行う、OpenAI互換APIを備えた音声AIランタイム',
    zh: '本地优先的语音AI运行时，支持转录、说话人分离、文字转语音与语音克隆，并提供OpenAI兼容API',
    es: 'Runtime de IA de voz local-first para transcripción, diarización de hablantes, texto a voz y clonación de voz, con una API compatible con OpenAI',
    pt: 'Runtime de IA de voz local-first para transcrição, diarização de locutores, texto para voz e clonagem de voz, com uma API compatível com OpenAI',
    ar: 'بيئة تشغيل صوتية ذكاء اصطناعي محلية أولًا للتفريغ الصوتي وفصل المتحدثين وتحويل النص إلى كلام واستنساخ الصوت، مع واجهة برمجية متوافقة مع OpenAI',
    ko: '전사, 화자 분리, 텍스트 음성 변환, 음성 복제를 로컬 우선으로 처리하는 음성 AI 런타임으로, OpenAI 호환 API를 제공',
  },
  lastVerifiedDate: '2026-09-18',
}
