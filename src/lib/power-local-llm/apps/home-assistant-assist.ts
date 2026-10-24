// Local AI App Directory — Home Assistant Assist: voice assistant inside Home Assistant (layer: voice pipeline, Real-time voice agents)
// Added 2026-10-24. Scope: the Assist voice/LLM pipeline only (Whisper / Speech-to-Phrase / Piper / openWakeWord over the Wyoming
// protocol, plus Ollama and OpenAI conversation agents), not Home Assistant as a whole. Facts verified 2026-10-24 against
// home-assistant.io (voice_control, voice_remote_local_assistant, voice_remote_cloud_assistant, integrations/ollama, wyoming,
// openai_conversation, voice-pe, installation, privacy), nabucasa.com/pricing, companion.home-assistant.io and the GitHub API
// (home-assistant/core: license Apache-2.0, latest release 2026.10.3 published 2026-10-23, last push 2026-10-24; HAOS images such as
// haos_green / haos_rpi4-64 / haos_generic-x86-64 / haos_ova are Release assets of home-assistant/operating-system).
// Prices (as listed, never converted): Voice Preview Edition MSRP $69 excl. tax or EUR 59 incl. tax; Home Assistant Cloud EUR 7.50/month
// or EUR 75/year excl. tax, 31-day trial (the Nabu Casa page also offers USD/CAD/GBP selectors; not checked).
// No hands-on test. Install effort: Home Assistant OS is flashed or imported as an image (no terminal needed), then Whisper/Piper are
// added as apps in the UI; Container installs have no apps. Rated terminal-setup because the local voice pipeline is a multi-step,
// multi-service setup on dedicated hardware or a VM, not a double-click install.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'home-assistant-assist',
  name: 'Home Assistant Assist',
  categories: ['realtime-voice-agents', 'personal-assistants'],
  interfaces: ['web', 'mobile'],
  locality: 'hybrid', // fully local pipeline documented (Whisper/Speech-to-Phrase, Piper, Wyoming); Home Assistant Cloud STT/TTS and OpenAI agents are optional cloud routes
  platforms: ['linux', 'web', 'ios', 'android'], // Home Assistant OS / Container serve a web UI; companion apps on Android and iOS; HAOS also runs in VMs on macOS/Windows hosts
  worksWith: ['Ollama', 'Whisper', 'Piper', 'openWakeWord', 'Wyoming', 'ESPHome', 'Voice Preview Edition'],
  engine: 'both', // Whisper/Piper/Speech-to-Phrase run as Home Assistant apps; Ollama is an external server
  license: 'Apache-2.0',
  price: 'free', // software is free; Home Assistant Cloud, the OpenAI API and the Voice Preview Edition hardware are optional paid extras
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // docs give timings (Whisper ~8 s on Raspberry Pi 4, <1 s on Intel NUC) but no minimum RAM/VRAM
  stars: 91694, // github.com/home-assistant/core, GitHub API 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio', 'agent'],
  url: 'home-assistant.io/voice_control',
  storeLinks: {
    github: 'https://github.com/home-assistant/core',
    appStore: 'https://apps.apple.com/app/home-assistant/id1099568401',
    googlePlay: 'https://play.google.com/store/apps/details?id=io.homeassistant.companion.android',
    web: 'https://www.home-assistant.io/voice_control/',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'home-assistant.io/installation checked 2026-10-24: Home Assistant OS (images for Green, Raspberry Pi, Odroid, x86-64, VMs; home-assistant/operating-system Releases list haos_*.img.xz/.ova assets) or Container (no apps); voice_remote_local_assistant: Whisper, Piper and Speech-to-Phrase are installed as apps, then added via the Wyoming integration; full pipeline requires Home Assistant OS',
  tagline: {
    en: 'Voice assistant built into Home Assistant: fully local with Whisper, Piper and Wyoming, optional cloud and Ollama LLM agents',
    de: 'In Home Assistant eingebauter Sprachassistent: komplett lokal mit Whisper, Piper und Wyoming, optional Cloud und Ollama-LLM-Agenten',
    fr: 'Assistant vocal intégré à Home Assistant : 100 % local avec Whisper, Piper et Wyoming, cloud et agents LLM Ollama en option',
    ja: 'Home Assistant内蔵の音声アシスタント。Whisper・Piper・Wyomingで完全ローカル動作、クラウドやOllama LLMエージェントも任意で利用可能',
    zh: 'Home Assistant 内置语音助手：可用 Whisper、Piper 和 Wyoming 完全本地运行，云端与 Ollama LLM 智能体为可选项',
    es: 'Asistente de voz integrado en Home Assistant: totalmente local con Whisper, Piper y Wyoming, con nube y agentes LLM de Ollama opcionales',
    pt: 'Assistente de voz integrado ao Home Assistant: totalmente local com Whisper, Piper e Wyoming, com nuvem e agentes LLM do Ollama opcionais',
    ar: 'مساعد صوتي مدمج في Home Assistant: محلي بالكامل عبر Whisper وPiper وWyoming، مع سحابة ووكلاء LLM من Ollama اختياريين',
    ko: 'Home Assistant에 내장된 음성 비서: Whisper, Piper, Wyoming으로 완전 로컬 동작, 클라우드와 Ollama LLM 에이전트는 선택 사항',
  },
  reviewSlug: 'home-assistant-assist-review',
  // Comparison attributes (realtime-voice-agents): verified against home-assistant.io/voice_control and the Ollama integration page on 2026-10-24;
  // a missing key = not stated there, never false (barge-in and telephony are not described for Assist).
  compare: { fullyLocal: true, customLlm: true },
  pqReview: {
    date: '2026-10-24',
    version: '2026.10.3',
    versionSourceUrl: 'https://github.com/home-assistant/core/releases/tag/2026.10.3',
  },
  verdict: 'Best for existing Home Assistant users who want voice control that can stay in the house; limited by the need for a Home Assistant install (Home Assistant OS for the full local pipeline), Whisper being slower on small boards per the docs, experimental LLM control and timings and quality PromptQuorum could not test.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub API: repo pushed_at 2026-10-24 (latest release 2026.10.3 on 2026-10-23), read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/home-assistant/core',
}
