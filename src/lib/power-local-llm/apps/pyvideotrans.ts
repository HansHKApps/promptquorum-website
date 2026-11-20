// Local AI App Directory — pyVideoTrans by the developer behind the GitHub account jianchang512 (layer: video translation and AI dubbing pipeline, Voice & Audio / Images & Video)
// Added 2026-11-20 from the owner's list (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-20: official website pyvideotrans.com (home page, download page, Windows/macOS/Linux guide, user guide getstart, license agreement /law,
// terms /xieyi, privacy policy /yinsizhengce, about /guanyu, contact /lianxi, donation /about), GitHub repository and README, GitHub Releases (v4.19 and its notes),
// GitHub API (stars, pushed_at, license, contributors, owner profile).
// Notes:
// - License: GPL-3.0 (GitHub API spdx_id, README badge, the license agreement page and the home-page FAQ).
// - Version: latest GitHub release v4.19, published 2026-11-17. The release has NO attached assets: the release notes carry the download links for the
//   Windows pre-packaged build (v4.19 full package, 2.7 GB .7z, Baidu Netdisk and Hugging Face; patch package 400 MB) and the macOS/Linux source steps.
// - Last upstream update: GitHub pushed_at and last commit 2026-11-20 (a merged pull request), latest release 2026-11-17 -> NOT stale (3-month rule).
// - Install effort: Windows = extract the .7z and double-click sp.exe (no terminal, but a portable archive from Baidu Netdisk / Hugging Face, unsigned, 2.7 GB;
//   the docs warn security software may flag it). macOS and Linux = terminal setup (brew/apt, uv, git clone, uv sync, uv run sp.py).
// - HQ country: CN. The Terms of Use page (en.pyvideotrans.com/xieyi, "Governing Law") says the agreement is governed by the laws of the People's Republic of China,
//   and the license agreement tells users to comply with the laws of their region and of the People's Republic of China. The privacy policy, about and contact pages name
//   no country, company or address. Per the owner rule (governing law counts as a country mention) the flag is set from the Terms page; the project itself is described as
//   a personal open-source project with no company named.
// - Comparison: the speech-to-text segment fits only part of the app (its transcription step); only the two attributes the docs state are filled.
// - Stars: GitHub API 19781 on 2026-11-20.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pyvideotrans',
  name: 'pyVideoTrans',
  categories: ['subtitles-dubbing', 'speech-to-text', 'translation'],
  interfaces: ['desktop', 'cli', 'web'], // README: desktop GUI (sp.py / sp.exe), CLI (cli.py) and a browser WebUI (optional extra) plus a Docker WebUI
  locality: 'hybrid', // local engines (faster-whisper, Piper, F5-TTS, Ollama, ...) run on the machine, but the defaults are online (Google Translate, Edge-TTS) and many channels are cloud APIs
  platforms: ['win', 'mac', 'linux'],
  worksWith: ['Faster-Whisper', 'Whisper', 'Ollama', 'F5-TTS', 'CosyVoice', 'GPT-SoVITS', 'Edge-TTS', 'FFmpeg'], // channels named in the README and docs
  engine: 'both', // bundles calling code for local engines (models download on first use) AND connects to external servers and APIs
  license: 'GPL-3.0',
  price: 'free', // home page FAQ: free, no registration; third-party API keys are billed by the provider; optional donations
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // home page: runs with or without an NVIDIA GPU; docs: large-v3 needs 8 GB+ VRAM; CUDA 12.8 + cuDNN 9.11 for NVIDIA acceleration; RAM not stated
  stars: 19781,
  addedDate: '2026-11-20',
  status: 'listed',
  uses: ['audio', 'build'],
  url: 'pyvideotrans.com',
  storeLinks: {
    github: 'https://github.com/jianchang512/pyvideotrans',
    web: 'https://pyvideotrans.com',
  },
  installEffort: 'installer',
  installOn: ['win'],
  installEvidence: 'On 2026-11-20 the GitHub release v4.19 (2026-11-17) had no attached assets; its notes and the website download page link the Windows pre-packaged v4.19 full package (2.7 GB .7z on Baidu Netdisk and Hugging Face) and a 400 MB patch package. The guide says to extract it and double-click sp.exe (portable archive, no terminal, no signature, security software may flag it). macOS and Linux have no package: the guide gives brew/apt, uv and git clone steps (uv sync, uv run sp.py), which is terminal-setup.',
  tagline: {
    en: 'Free open-source tool that translates a video into another language in one pipeline: speech recognition, subtitle translation, AI dubbing and re-muxing, with local or cloud engines',
    de: 'Kostenloses Open-Source-Werkzeug, das ein Video in einer Pipeline in eine andere Sprache überträgt: Spracherkennung, Untertitelübersetzung, KI-Vertonung und Zusammenführen, mit lokalen oder Cloud-Engines',
    fr: "Outil libre et gratuit qui traduit une vidéo dans une autre langue en une seule chaîne : reconnaissance vocale, traduction des sous-titres, doublage par IA et remontage, avec des moteurs locaux ou cloud",
    ja: '動画を別の言語へ一括で翻訳する無料のオープンソースツール。音声認識、字幕翻訳、AI吹き替え、動画の再合成まで、ローカルまたはクラウドのエンジンで処理します',
    zh: '免费开源工具，在一个流程中把视频翻译成另一种语言：语音识别、字幕翻译、AI 配音和视频合成，可使用本地或云端引擎',
    es: 'Herramienta gratuita y de código abierto que traduce un vídeo a otro idioma en un solo flujo: reconocimiento de voz, traducción de subtítulos, doblaje con IA y montaje final, con motores locales o en la nube',
    pt: 'Ferramenta gratuita e de código aberto que traduz um vídeo para outro idioma em um só fluxo: reconhecimento de fala, tradução de legendas, dublagem com IA e remontagem, com mecanismos locais ou na nuvem',
    ar: 'أداة مجانية ومفتوحة المصدر تترجم الفيديو إلى لغة أخرى في مسار واحد: التعرف على الكلام وترجمة الترجمات والدبلجة بالذكاء الاصطناعي وإعادة دمج الفيديو، بمحركات محلية أو سحابية',
    ko: '영상을 하나의 흐름으로 다른 언어로 번역하는 무료 오픈소스 도구로, 음성 인식, 자막 번역, AI 더빙, 영상 재합성을 로컬 또는 클라우드 엔진으로 처리합니다',
  },
  hqCountry: 'CN',
  hqCountrySource: 'https://en.pyvideotrans.com/xieyi',
  reviewSlug: 'pyvideotrans-review',
  pqReview: {
    date: '2026-11-20',
    version: '4.19',
    versionSourceUrl: 'https://github.com/jianchang512/pyvideotrans/releases/tag/v4.19',
  },
  // Comparison attributes (speech-to-text segment): verified against the project's own pages on 2026-11-20; a missing key = not stated there, never false.
  compare: { cpuUsable: true, speakerLabels: true }, // home page: runs with or without an NVIDIA GPU; README: speaker diarization to tell speakers apart
  verdict: 'Best for people who want one free tool that turns a spoken video into a subtitled, dubbed video in another language and can accept a Windows archive without a signature or a terminal setup on macOS and Linux; limited by default engines that send text to online services, setup that depends on separate model and GPU downloads, and by PromptQuorum not having tested translation or dubbing quality.',
  lastVerifiedDate: '2026-11-20',
  lastUpstreamUpdate: '2026-11-20', // GitHub API pushed_at / last commit 2026-11-20T01:45Z (merged pull request #1316); latest release v4.19 published 2026-11-17 (API, 2026-11-20)
  lastUpstreamUpdateSource: 'https://github.com/jianchang512/pyvideotrans/releases (latest release v4.19, 2026-11-17; last commit 2026-11-20)',
}
