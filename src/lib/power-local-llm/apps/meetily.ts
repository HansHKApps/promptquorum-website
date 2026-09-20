// Local AI App Directory — Meetily (layer: meeting notetaker)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'meetily',
  name: 'Meetily',
  categories: ['speech-to-text', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'local', // README states "100% local processing, no cloud required" for both transcription and summarization, verified 2026-09-18
  platforms: ['mac', 'win'],
  worksWith: ['Ollama', 'Whisper', 'Parakeet'],
  engine: 'both', // bundles its own local Parakeet/Whisper transcription engine and calls a local Ollama model for summarization, verified 2026-09-18
  license: 'MIT',
  price: 'freemium', // Community Edition is MIT/free; paid Meetily Pro tier exists (github.com/Zackriya-Solutions/meetily, review says $10/user/month) — verified 2026-09-20
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true },
  stars: 30898, // github.com/Zackriya-Solutions/meetily, verified 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['audio', 'docs'],
  url: 'meetily.ai',
  reviewSlug: 'meetily-review', // dedicated PromptQuorum review — added 2026-09-18
  tagline: {
    en: 'Privacy-first, 100% local AI meeting assistant with live transcription, speaker diarization, and Ollama-based summaries',
    de: 'Datenschutzorientierter, zu 100 % lokaler KI-Meeting-Assistent mit Live-Transkription, Sprechererkennung und Ollama-basierten Zusammenfassungen',
    fr: "Assistant de réunion IA 100 % local et axé sur la confidentialité, avec transcription en direct, diarisation des locuteurs et résumés via Ollama",
    ja: '100%ローカル処理でプライバシーを重視したAI会議アシスタント。ライブ文字起こし、話者分離、Ollamaによる要約に対応',
    zh: '100%本地运行、隐私优先的AI会议助手，支持实时转录、说话人分离和基于Ollama的会议摘要',
    es: 'Asistente de reuniones con IA 100% local y centrado en la privacidad, con transcripción en vivo, diarización de hablantes y resúmenes basados en Ollama',
    pt: 'Assistente de reuniões com IA 100% local e focado em privacidade, com transcrição ao vivo, diarização de falantes e resumos baseados em Ollama',
    ar: 'مساعد اجتماعات بالذكاء الاصطناعي يعمل محليًا بنسبة 100% ويركز على الخصوصية، مع نسخ صوتي مباشر وفصل المتحدثين وملخصات تعتمد على Ollama',
    ko: '실시간 전사, 화자 분리, Ollama 기반 요약을 지원하는 프라이버시 중심의 100% 로컬 AI 회의 비서',
  },
  lastVerifiedDate: '2026-09-18',
}
