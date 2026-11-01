// Local AI App Directory — Open Voice OS (OVOS): community open-source voice assistant platform (layer: voice assistant, Real-time voice agents)
// Added 2026-11-01 (source: localhosted.com referral). Facts verified 2026-11-01 against openvoiceos.org (home + /downloads) and the GitHub
// API/READMEs of OpenVoiceOS/ovos-core (Apache-2.0, pushed 2026-10-27, latest GitHub release 2.1.1 on 2025-11-05, PyPI 2.1.1),
// OpenVoiceOS/ovos-installer (pushed 2026-11-01, latest release v11.0.0 on 2026-08-29; README: install script, supported systems, optional
// Home Assistant / OpenAI-compatible LLM fallback / HiveMind; "not a fully offline mode"; docs/telemetry.md: installer telemetry + usage metrics,
// both opt-in) and OpenVoiceOS/ovos-docker (v2.2.0, 2026-10-07).
// No hands-on test. Install effort: one documented command (installer.sh via curl) or the browser installer at start.openvoiceos.org;
// the RaspOVOS image is flashed. No double-click installer, so rated one-command, not installer.
// Not found: privacy policy page on the website, list of supported languages, hardware minimums other than the installer's note that
// local speech needs a Raspberry Pi 5 with 8 GB RAM or better.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'openvoiceos',
  name: 'Open Voice OS',
  categories: ['voice-assistants', 'realtime-voice-agents', 'smart-home-ai'],
  interfaces: ['cli', 'library'],
  locality: 'hybrid', // local STT/TTS options exist, but the default speech-to-text needs internet and the installer says it is not a fully offline mode
  platforms: ['linux', 'mac', 'rpi', 'selfhosted'], // installer README: Debian/Ubuntu, Fedora/EL, Arch, openSUSE, WSL2, macOS 15+ on Apple Silicon (extra setup); Raspberry Pi image; Docker (ovos-docker)
  worksWith: ['Home Assistant', 'Raspberry Pi', 'HiveMind', 'Docker', 'Vosk', 'Mimic3', 'OpenAI-compatible endpoints'],
  engine: 'both', // speech engines run inside OVOS (plugins); the LLM fallback points to an external OpenAI-compatible endpoint
  license: 'Apache-2.0',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // installer README: local speech needs a Raspberry Pi 5 with 8 GB RAM or something at least as capable; no other minimums stated
  stars: 299, // github.com/OpenVoiceOS/ovos-core, GitHub API 2026-11-01
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['audio', 'agent'],
  url: 'openvoiceos.org',
  storeLinks: {
    github: 'https://github.com/OpenVoiceOS/ovos-core',
    web: 'https://www.openvoiceos.org/',
  },
  installEffort: 'one-command',
  installEvidence: 'checked 2026-11-01: github.com/OpenVoiceOS/ovos-installer README: `sudo sh -c "$(curl -fsSL https://raw.githubusercontent.com/OpenVoiceOS/ovos-installer/main/installer.sh)"` (needs curl, git, sudo, Bash 4+); openvoiceos.org/downloads: browser installer at start.openvoiceos.org, RaspOVOS image for Raspberry Pi, development images (expect bugs); ovos-installer and ovos-core GitHub Releases list no binary assets',
  tagline: {
    en: 'Community open-source voice assistant platform for Linux, Raspberry Pi and Docker, with optional local speech engines and an optional LLM fallback',
    de: 'Quelloffene Community-Plattform für Sprachassistenten unter Linux, Raspberry Pi und Docker, mit optionalen lokalen Sprach-Engines und optionalem LLM-Fallback',
    fr: 'Plateforme communautaire open source d’assistant vocal pour Linux, Raspberry Pi et Docker, avec moteurs vocaux locaux et repli LLM en option',
    ja: 'Linux・Raspberry Pi・Docker向けのコミュニティ製オープンソース音声アシスタント基盤。ローカル音声エンジンとLLMフォールバックは任意',
    zh: '面向 Linux、Raspberry Pi 和 Docker 的社区开源语音助手平台，本地语音引擎与 LLM 后备均为可选项',
    es: 'Plataforma comunitaria de código abierto para asistentes de voz en Linux, Raspberry Pi y Docker, con motores de voz locales y respaldo LLM opcionales',
    pt: 'Plataforma comunitária de código aberto para assistentes de voz em Linux, Raspberry Pi e Docker, com mecanismos de voz locais e fallback de LLM opcionais',
    ar: 'منصة مجتمعية مفتوحة المصدر للمساعدات الصوتية على Linux وRaspberry Pi وDocker، مع محركات صوت محلية ونموذج LLM احتياطي اختياريين',
    ko: 'Linux, Raspberry Pi, Docker용 커뮤니티 오픈소스 음성 비서 플랫폼. 로컬 음성 엔진과 LLM 폴백은 선택 사항',
  },
  reviewSlug: 'openvoiceos-review',
  // Comparison attributes (realtime-voice-agents): verified 2026-11-01 against the ovos-installer README ("not a fully offline mode";
  // optional LLM fallback via any OpenAI-compatible endpoint). A missing key = not stated, never false (barge-in, telephony not described).
  compare: { fullyLocal: false, customLlm: true },
  pqReview: {
    date: '2026-11-01',
    version: 'v11.0.0',
    versionSourceUrl: 'https://github.com/OpenVoiceOS/ovos-installer/releases/tag/v11.0.0',
  },
  verdict: 'Best for tinkerers who want an open, Mycroft-descended voice assistant they can run on a Raspberry Pi or Linux box and extend with skills; limited by a default speech recogniser that needs internet, a terminal-based install, no listed languages on the sources checked, and quality and latency PromptQuorum could not test.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-11-01', // GitHub API: OpenVoiceOS/ovos-installer pushed_at 2026-11-01 (ovos-core pushed 2026-10-27), read 2026-11-01
  lastUpstreamUpdateSource: 'https://github.com/OpenVoiceOS/ovos-installer',
}
