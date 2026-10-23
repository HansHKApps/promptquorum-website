// Local AI App Directory — MLX-Audio (layer: tts + stt library for Apple Silicon)
// Added 2026-10-23. Source: github.com/Blaizzy/mlx-audio README + blaizzy.github.io/mlx-audio, read 2026-10-23.
// Not the same as vllm-mlx (which uses mlx-audio internally) or mlx-lm (text LLMs).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'mlx-audio',
  name: 'MLX-Audio',
  categories: ['text-to-speech', 'speech-to-text'],
  interfaces: ['cli', 'library'],
  locality: 'local',
  platforms: ['mac'], // README: "Apple Silicon Mac (M1/M2/M3/M4)", verified 2026-10-23
  worksWith: ['OpenAI API'], // README: OpenAI-compatible /v1/audio/speech and /v1/audio/transcriptions endpoints, verified 2026-10-23
  engine: 'library',
  license: 'MIT', // GitHub API spdx_id + README, verified 2026-10-23
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: false, variesByModel: true }, // README states no per-model minimum; Apple Silicon only, verified 2026-10-23
  stars: 8095, // github.com/Blaizzy/mlx-audio via GitHub API, verified 2026-10-23
  addedDate: '2026-10-23',
  status: 'listed',
  uses: ['audio', 'serve'],
  url: 'blaizzy.github.io/mlx-audio', // official documentation site (repo homepage field); repo goes in storeLinks.github
  storeLinks: { github: 'https://github.com/Blaizzy/mlx-audio' },
  installEffort: 'one-command',
  installEvidence: 'README install section: `pip install mlx-audio` (and `uv tool install --force mlx-audio --prerelease=allow`); PyPI v0.6.1; GitHub Releases carry no binary assets; no .dmg/installer. Read 2026-10-23.',
  tagline: {
    en: 'Text-to-speech, speech-to-text and voice models for Apple Silicon, via MLX, with an OpenAI-compatible server.',
    de: 'Modelle für Sprachausgabe, Spracherkennung und Stimmen auf Apple Silicon über MLX, mit OpenAI-kompatiblem Server.',
    fr: "Modèles de synthèse vocale, de transcription et de voix pour Apple Silicon via MLX, avec serveur compatible OpenAI.",
    ja: 'MLXでApple Silicon上の音声合成・音声認識・音声モデルを動かすライブラリ。OpenAI互換サーバー付き。',
    zh: '通过MLX在Apple芯片上运行语音合成、语音识别与语音模型,附带兼容OpenAI的服务器。',
    es: 'Modelos de síntesis de voz, transcripción y voz para Apple Silicon mediante MLX, con servidor compatible con OpenAI.',
    pt: 'Modelos de síntese de voz, transcrição e voz para Apple Silicon via MLX, com servidor compatível com a OpenAI.',
    ar: 'نماذج تحويل النص إلى كلام والتعرف على الكلام والصوت لشرائح Apple عبر MLX، مع خادم متوافق مع OpenAI.',
    ko: 'MLX로 Apple 실리콘에서 음성 합성·음성 인식·음성 모델을 실행하는 라이브러리, OpenAI 호환 서버 포함.',
  },
  reviewSlug: 'mlx-audio-review',
  pqReview: { date: '2026-10-23', version: 'v0.6.1', versionSourceUrl: 'https://github.com/Blaizzy/mlx-audio/releases/tag/v0.6.1' },
  // Comparison attributes: each value read from the project's README/docs on 2026-10-23; a missing key = not stated there, never false.
  compare: { voiceCloning: true, streaming: true, apiServer: true },
  lastVerifiedDate: '2026-10-23',
  lastUpstreamUpdate: '2026-10-23', // GitHub API pushed_at (newer than release v0.6.1, 2026-10-20), read 2026-10-23
  lastUpstreamUpdateSource: 'https://github.com/Blaizzy/mlx-audio',
}
