// Local AI App Directory — Voicebox: open-source local voice studio (layer: desktop app, voice cloning + text-to-speech + dictation)
// Added 2026-10-26. Facts verified 2026-10-26 against voicebox.sh (home, /pricing, /privacy last updated 2026-07-06, /cloud), docs.voicebox.sh, the GitHub repo
// jamiepine/voicebox (README, MIT licence, GitHub API: 58,627 stars, newest default-branch commit 2026-10-07 "Merge pull request #1168 ... add OmniVoice TTS engine",
// Releases) and the v0.5.0 release notes. Latest release v0.5.0 published 2026-04-25; the "v0.2.0" on the website is a label inside its demo screenshot, not the release.
// Release assets seen on v0.5.0: Voicebox_0.5.0_aarch64.dmg, Voicebox_0.5.0_x64.dmg, Voicebox_0.5.0_x64-setup.exe, Voicebox_0.5.0_x64_en-US.msi, voicebox-server-cuda.tar.gz.
// Linux: no pre-built binary (build from source per voicebox.sh/linux-install). README lists 8 TTS engines, the website lists 7 (no Qwen VoiceDesign) — the review states the README count.
// Voicebox Cloud (encrypted backup/sync, $12/year at launch) and Studio ($48/year placeholder) are "coming soon" on /pricing and not available; local use is free.
// Operator: Spacedrive Technology Inc. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'voicebox',
  name: 'Voicebox',
  categories: ['voice-cloning', 'text-to-speech', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // models, voice data and captures stay on the machine per the privacy policy; optional Cloud backup is announced, not yet available
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Claude Code', 'Cursor', 'Windsurf', 'Cline', 'Whisper', 'Qwen3', 'Docker'], // MCP-aware agents named in the README
  engine: 'builtin', // bundles its own Python/FastAPI backend with MLX (Apple silicon) or PyTorch inference
  license: 'MIT',
  price: 'free', // local use free; optional Cloud backup/sync announced as a paid subscription, not yet launched
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no minimum stated; CPU fallback works but slower, LuxTTS about 1 GB VRAM (README)
  stars: 58627, // GitHub API read 2026-10-26
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['audio'],
  url: 'voicebox.sh',
  storeLinks: {
    github: 'https://github.com/jamiepine/voicebox',
    web: 'https://voicebox.sh',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.5.0 (2026-04-25) checked 2026-10-26: Voicebox_0.5.0_aarch64.dmg, Voicebox_0.5.0_x64.dmg, Voicebox_0.5.0_x64-setup.exe and Voicebox_0.5.0_x64_en-US.msi assets; voicebox.sh offers per-platform downloads for macOS (Apple silicon and Intel) and Windows; Linux has no pre-built binary (build from source), Docker via docker compose',
  installOn: ['mac', 'win'],
  tagline: {
    en: 'MIT-licensed local voice studio that clones voices with several text-to-speech engines, dictates into any app with Whisper and lets AI agents speak through an MCP server',
    de: 'Lokales Sprachstudio unter MIT-Lizenz, das Stimmen mit mehreren Text-to-Speech-Engines klont, mit Whisper in jede App diktiert und KI-Agenten über einen MCP-Server sprechen lässt',
    fr: 'Studio vocal local sous licence MIT qui clone des voix avec plusieurs moteurs de synthèse vocale, dicte dans n’importe quelle appli avec Whisper et fait parler les agents IA via un serveur MCP',
    ja: '複数の音声合成エンジンで声をクローンし、Whisperでどのアプリにも音声入力でき、MCPサーバー経由でAIエージェントに話させられる、MITライセンスのローカル音声スタジオ',
    zh: '采用 MIT 许可证的本地语音工作室，可用多个语音合成引擎克隆声音，用 Whisper 向任意应用听写，并通过 MCP 服务器让 AI 智能体开口说话',
    es: 'Estudio de voz local con licencia MIT que clona voces con varios motores de síntesis de voz, dicta en cualquier app con Whisper y deja que los agentes de IA hablen mediante un servidor MCP',
    pt: 'Estúdio de voz local com licença MIT que clona vozes com vários motores de síntese de fala, dita em qualquer app com Whisper e deixa agentes de IA falarem por um servidor MCP',
    ar: 'استوديو صوت محلي بترخيص MIT يستنسخ الأصوات بعدة محركات لتحويل النص إلى كلام، ويملي في أي تطبيق باستخدام Whisper، ويتيح لوكلاء الذكاء الاصطناعي التحدث عبر خادم MCP',
    ko: '여러 음성 합성 엔진으로 목소리를 복제하고, Whisper로 어떤 앱에든 받아쓰며, MCP 서버를 통해 AI 에이전트가 말하게 하는 MIT 라이선스 로컬 음성 스튜디오',
  },
  compare: { languages: 23, voiceCloning: true, cpuUsable: true, apiServer: true }, // README (read 2026-10-26): 23 languages (Chatterbox Multilingual), zero-shot cloning, CPU backend "works everywhere, just slower", REST API on 127.0.0.1:17493 plus MCP; streaming TTS output not stated
  reviewSlug: 'voicebox-review',
  pqReview: {
    date: '2026-10-26',
    version: '0.5.0',
    versionSourceUrl: 'https://github.com/jamiepine/voicebox/releases/latest',
  },
  verdict: 'Best for people who want voice cloning, text-to-speech and dictation in one free local app and will accept a download with large model files; limited by no pre-built Linux build, auto-paste only confirmed on macOS, the last tagged release dating from April 2026, and quality, speed and privacy claims PromptQuorum could not test.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-07', // newest default-branch commit (GitHub API, read 2026-10-26); latest tagged release v0.5.0 published 2026-04-25
  lastUpstreamUpdateSource: 'https://github.com/jamiepine/voicebox/commits/main',
}
