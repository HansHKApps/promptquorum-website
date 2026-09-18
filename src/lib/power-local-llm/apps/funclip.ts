// Local AI App Directory — FunClip (layer: audio/video editing)
// Added 2026-09-18 per the queued Friday batch from the 2026-09-14 cross-check.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'funclip',
  name: 'FunClip',
  categories: ['editing-upscaling', 'speech-to-text'],
  interfaces: ['web', 'cli'],
  locality: 'local',
  platforms: null, // cross-platform Python/Gradio app; specific OS support not enumerated in docs, not independently verified — 2026-09-18
  worksWith: ['FunASR', 'Qwen', 'DeepSeek'],
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // runs FunASR speech models locally for transcription plus an LLM for clip selection — hardware floor depends on chosen ASR/LLM models, not independently researched, verified 2026-09-18
  stars: 6327, // github.com/modelscope/FunClip, verified via GitHub API 2026-09-18
  addedDate: '2026-09-18',
  status: 'listed',
  uses: ['audio', 'build'],
  url: 'github.com/modelscope/FunClip',
  tagline: {
    en: 'Self-hosted video/audio clipping tool that uses FunASR transcription and an LLM to find and cut the moments you want',
    de: 'Selbst gehostetes Video-/Audio-Zuschneide-Tool, das mit FunASR-Transkription und einem LLM die gewünschten Momente findet und schneidet',
    fr: "Outil de découpage vidéo/audio auto-hébergé qui utilise la transcription FunASR et un LLM pour trouver et couper les moments souhaités",
    ja: 'FunASRによる文字起こしとLLMを使って必要な場面を見つけ切り出す、セルフホスト型の動画・音声クリップツール',
    zh: '自托管视频/音频剪辑工具，利用FunASR转写与大语言模型自动定位并剪出所需片段',
    es: 'Herramienta autoalojada de recorte de vídeo/audio que usa la transcripción de FunASR y un LLM para encontrar y cortar los momentos deseados',
    pt: 'Ferramenta auto-hospedada de corte de vídeo/áudio que usa a transcrição do FunASR e um LLM para encontrar e cortar os momentos desejados',
    ar: 'أداة مستضافة ذاتيًا لقص الفيديو والصوت تستخدم تفريغ FunASR ونموذجًا لغويًا للعثور على اللحظات المطلوبة وقصها',
    ko: 'FunASR 전사와 LLM을 활용해 원하는 장면을 찾아 잘라내는 셀프호스팅 영상/오디오 클립 도구',
  },
  reviewSlug: 'funclip-review', // dedicated PromptQuorum review — added 2026-09-19
  lastVerifiedDate: '2026-09-18',
}
