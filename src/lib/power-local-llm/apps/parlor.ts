// Local AI App Directory — parlor (layer: voice/multimodal assistant)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.
// Disambiguation: "parlor" is ambiguous — this is github.com/fikrikarim/parlor
// (2,068 stars, Apache-2.0, on-device real-time multimodal AI voice+vision
// assistant), NOT the near-identical forks/mirrors of the same project under
// other GitHub usernames (srhardy/parlor, akunzai/parlor, camcop/parlor —
// all 0-star forks) or the unrelated berrydev-ai/parlor repo. Verified via
// GitHub API (fork:false, 2068 stars) and README, 2026-09-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'parlor',
  name: 'Parlor',
  categories: ['realtime-voice-agents', 'personal-assistants'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: ['mac', 'linux'], // README: "macOS with Apple Silicon, or Linux with a supported GPU" — no Windows support, verified 2026-09-18
  worksWith: ['llama.cpp'], // README lists llama.cpp as a required local backend install, verified 2026-09-18
  engine: 'builtin',
  license: 'Apache-2.0', // verified 2026-09-18
  price: 'free',
  hardware: { ramGb: 6, vramGb: null, cpuOnly: false }, // README: "~6 GB free RAM for the default E4B model" (smaller variant ~4 GB); requires Apple Silicon GPU or a supported Linux GPU, verified 2026-09-18
  stars: 2068, // github.com/fikrikarim/parlor via GitHub API, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['chat', 'audio'],
  url: 'github.com/fikrikarim/parlor',
  reviewSlug: 'parlor-review', // dedicated PromptQuorum review — added 2026-09-19
  tagline: {
    en: 'Fully on-device multimodal AI assistant for real-time voice and vision conversations, powered by local models.',
    de: 'Vollständig lokal laufender multimodaler KI-Assistent für Echtzeit-Sprach- und Bildgespräche, angetrieben von lokalen Modellen.',
    fr: 'Assistant IA multimodal entièrement local pour des conversations vocales et visuelles en temps réel, propulsé par des modèles locaux.',
    ja: 'ローカルモデルで動作する、リアルタイムの音声・映像対話に対応した完全オンデバイスのマルチモーダルAIアシスタント。',
    zh: '完全设备端运行的多模态AI助手，由本地模型驱动，支持实时语音与视觉对话。',
    es: 'Asistente de IA multimodal totalmente local para conversaciones de voz y visión en tiempo real, impulsado por modelos locales.',
    pt: 'Assistente de IA multimodal totalmente local para conversas de voz e visão em tempo real, alimentado por modelos locais.',
    ar: 'مساعد ذكاء اصطناعي متعدد الوسائط يعمل بالكامل على الجهاز لمحادثات صوتية ومرئية فورية، مدعوم بنماذج محلية.',
    ko: '로컬 모델로 구동되는, 실시간 음성 및 영상 대화를 지원하는 완전 온디바이스 멀티모달 AI 어시스턴트.',
  },
  pqReview: { date: '2026-09-20', version: 'v2.0.0', versionSourceUrl: 'https://github.com/fikrikarim/parlor/releases/tag/v2.0.0' },
  // Comparison attributes: each value verified against the project's official README/site on 2026-09-20; a missing key = not stated there, never false.
  compare: { fullyLocal: true, bargeIn: true },
  lastVerifiedDate: '2026-09-18',
}
