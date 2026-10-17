// Local AI App Directory — TranscriptionSuite (layer: speech-to-text)
// Added 2026-10-17 on user request (source: transcriptionsuite.app, github.com/homelab-00/TranscriptionSuite).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'transcriptionsuite',
  name: 'TranscriptionSuite',
  categories: ['speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // site states "100% Local · 100% Private"; transcription runs on-device. Optional AI Assistant can point at cloud OpenAI-compatible providers (Groq, OpenRouter) or local ones (LM Studio, Ollama) — verified 2026-10-17
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Whisper', 'Parakeet', 'Canary', 'SenseVoice', 'whisper.cpp', 'MLX', 'Ollama', 'LM Studio', 'Docker', 'Tailscale'],
  engine: 'builtin', // ships its own transcription engine (Docker container on Windows/Linux, native Metal on Apple Silicon) with multiple model backends, verified 2026-10-17
  license: 'GPL-3.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // NVIDIA CUDA, AMD/Intel via Vulkan, Apple Silicon M1+; requirement depends on the model backend chosen, verified 2026-10-17
  stars: 774, // github.com/homelab-00/TranscriptionSuite, GitHub API read 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['audio', 'docs'],
  url: 'transcriptionsuite.app',
  storeLinks: { github: 'https://github.com/homelab-00/TranscriptionSuite/releases/latest', web: 'https://transcriptionsuite.app' },
  installEffort: 'installer',
  installOn: ['mac'], // macOS: .dmg runs the engine natively (Metal). Windows/Linux installers also exist (.exe/.AppImage) but the engine runs in Docker, which must be installed separately
  installEvidence: 'GitHub Releases v1.3.10 (2026-09-24) ships TranscriptionSuite-1.3.10-arm64-mac.dmg, Setup .exe and .AppImage; site says the engine runs in Docker on Linux/Windows and natively with Metal on Apple Silicon — checked 2026-10-17',
  tagline: {
    en: 'Free, open-source, fully local speech-to-text with live transcription, speaker diarization, a searchable audio notebook and multiple model backends',
    de: 'Kostenlose, quelloffene, vollständig lokale Spracherkennung mit Live-Transkription, Sprechererkennung, durchsuchbarem Audio-Notizbuch und mehreren Modell-Backends',
    fr: 'Reconnaissance vocale gratuite, open source et 100 % locale avec transcription en direct, diarisation des locuteurs, carnet audio consultable et plusieurs moteurs de modèles',
    ja: '無料・オープンソースの完全ローカル音声認識。ライブ文字起こし、話者分離、検索可能なオーディオノート、複数のモデルバックエンドに対応',
    zh: '免费开源、完全本地运行的语音转文字应用，支持实时转录、说话人分离、可搜索的音频笔记本和多种模型后端',
    es: 'Reconocimiento de voz gratuito, de código abierto y totalmente local, con transcripción en vivo, diarización de hablantes, cuaderno de audio con búsqueda y varios motores de modelos',
    pt: 'Reconhecimento de fala gratuito, de código aberto e totalmente local, com transcrição ao vivo, diarização de falantes, caderno de áudio pesquisável e vários back-ends de modelos',
    ar: 'تطبيق مجاني ومفتوح المصدر للتعرف على الكلام يعمل محليًا بالكامل، مع نسخ مباشر وفصل المتحدثين ودفتر صوتي قابل للبحث ودعم عدة محركات نماذج',
    ko: '실시간 전사, 화자 분리, 검색 가능한 오디오 노트북, 다양한 모델 백엔드를 지원하는 무료 오픈소스 완전 로컬 음성 인식 앱',
  },
  // Comparison attributes: each value verified against the official site on 2026-10-17; a missing key = not stated there, never false.
  compare: { realtime: true, speakerLabels: true, apiServer: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-04', // GitHub API: newer of latest release (v1.3.10, 2026-09-24) and last push (2026-10-04), read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/homelab-00/TranscriptionSuite',
}
