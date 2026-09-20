// Local AI App Directory — willow-inference-server (layer: speech/LLM inference server)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Lead confirmed as given: github.com/toverainc/willow-inference-server — the
// voice-inference backend for the Willow open-source voice assistant project
// (ASR/STT via Whisper, TTS, and LLM inference over WebRTC/REST/WS). Verified
// 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'willow-inference-server',
  name: 'Willow Inference Server',
  categories: ['speech-to-text', 'text-to-speech'],
  interfaces: ['cli'], // Docker/CLI-deployed server, verified 2026-09-18
  locality: 'local',
  platforms: ['linux', 'win'], // README: Linux is the primary target (Ubuntu/Arch install scripts), Windows via WSL; Mac not addressed in the docs, verified 2026-09-18
  worksWith: ['Willow voice assistant'],
  engine: 'builtin',
  license: 'Apache-2.0', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: null, vramGb: 3, cpuOnly: true }, // README: as little as 3 GB VRAM on budget GPUs (Tesla P4, GTX 1060), 6 GB recommended for full ASR+TTS together; CPU-only mode is supported but not optimized, verified 2026-09-18
  stars: 510, // github.com/toverainc/willow-inference-server, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['audio', 'phone'],
  url: 'github.com/toverainc/willow-inference-server',
  tagline: {
    en: 'Self-hosted speech and language inference server combining Whisper ASR, TTS, and LLM inference for the Willow voice assistant project.',
    de: 'Selbst gehosteter Sprach- und Sprachmodell-Inferenz-Server, der Whisper-ASR, TTS und LLM-Inferenz für das Willow-Sprachassistenzprojekt vereint.',
    fr: "Serveur d'inférence vocale et linguistique auto-hébergé combinant ASR Whisper, TTS et inférence LLM pour le projet d'assistant vocal Willow.",
    ja: 'Willow音声アシスタントプロジェクト向けに、Whisper ASR、TTS、LLM推論を統合したセルフホスト型の音声・言語推論サーバー。',
    zh: '为Willow语音助手项目打造的自托管语音与语言推理服务器，集成Whisper语音识别、TTS与大模型推理。',
    es: 'Servidor de inferencia de voz y lenguaje autoalojado que combina ASR Whisper, TTS e inferencia LLM para el proyecto de asistente de voz Willow.',
    pt: 'Servidor de inferência de voz e linguagem auto-hospedado que combina ASR Whisper, TTS e inferência de LLM para o projeto de assistente de voz Willow.',
    ar: 'خادم استدلال صوتي ولغوي مستضاف ذاتيًا يجمع بين التعرف على الكلام Whisper وتحويل النص إلى كلام واستدلال نماذج اللغة لمشروع المساعد الصوتي Willow.',
    ko: 'Willow 음성 비서 프로젝트를 위해 Whisper ASR, TTS, LLM 추론을 결합한 셀프호스팅 음성·언어 추론 서버.',
  },
  reviewSlug: 'willow-inference-server-review', // dedicated PromptQuorum review — added 2026-09-19
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { voiceCloning: true, streaming: true, realtime: true, apiServer: true },
  lastVerifiedDate: '2026-09-18',
}
