// Local AI App Directory — RunAnywhere (layer: sdk)
// Added from apps-to-add.md Section A (approved 2026-09-05).
// DRAFT — enrichment fields ('TODO'/null) are unverified and pending human review.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'runanywhere',
  name: 'RunAnywhere',
  categories: ['runtimes-managers'],
  interfaces: ['library', 'mobile'],
  locality: 'local',
  platforms: ['ios', 'android', 'mac', 'win'],
  worksWith: null,
  engine: 'builtin',
  license: 'RunAnywhere License (Apache-2.0 based, with commercial terms)', // core SDK is free; per-platform SDKs (Flutter/Kotlin) are plain Apache-2.0
  price: 'freemium', // free developer SDK; commercial/enterprise plans for production + control plane
  hardware: null, // TODO: hardware floor depends on which model is loaded, not a fixed tool attribute — needs manual research
  stars: 10282, // github.com/RunanywhereAI/runanywhere-sdks, verified via GitHub API 2026-09-05
  addedDate: '2026-09-05',
  status: 'listed',
  uses: ['serve', 'build', 'audio'],
  url: 'runanywhere.ai',
  tagline: {
    en: 'On-device AI SDK running LLM, STT, TTS, and VAD fully locally on iOS, Android, macOS, and Windows',
    de: 'On-Device-KI-SDK, das LLM, STT, TTS und VAD vollständig lokal auf iOS, Android, macOS und Windows ausführt',
    fr: 'SDK IA sur l\'appareil exécutant LLM, STT, TTS et VAD entièrement en local sur iOS, Android, macOS et Windows',
    ja: 'iOS、Android、macOS、WindowsでLLM、STT、TTS、VADを完全にローカル実行するオンデバイスAI SDK',
    zh: '在iOS、Android、macOS和Windows上完全本地运行LLM、STT、TTS和VAD的设备端AI SDK',
    es: 'SDK de IA en el dispositivo que ejecuta LLM, STT, TTS y VAD totalmente en local en iOS, Android, macOS y Windows',
    pt: 'SDK de IA no dispositivo que executa LLM, STT, TTS e VAD totalmente local em iOS, Android, macOS e Windows',
    ar: 'حزمة تطوير ذكاء اصطناعي على الجهاز تشغّل النموذج اللغوي وتحويل الكلام إلى نص والعكس وكشف النشاط الصوتي محلياً بالكامل على iOS وAndroid وmacOS وWindows',
    ko: 'iOS, Android, macOS, Windows에서 LLM, STT, TTS, VAD를 완전히 로컬로 실행하는 온디바이스 AI SDK',
  },
  lastVerifiedDate: null, // TODO: not yet founder-verified
}
