// Local AI App Directory — Buzz (layer: desktop speech-to-text / captions, Whisper front-end)
// Added 2026-10-24. Facts verified 2026-10-24 against buzzcaptions.com (home page), github.com/chidiwilliams/buzz (README, LICENSE = MIT,
// GitHub Releases, commits API, docs/docs/*.md incl. preferences.md, installation.md, usage/*), chidiwilliams.github.io/buzz (docs),
// the SourceForge file list, PyPI (buzz-captions 1.4.5) and the source (buzz/widgets/application.py PostHog call, buzz/update_checker.py).
// Latest release: v1.4.5, published 2026-08-23 (assets Buzz-1.4.5-mac-ARM64.dmg, Buzz-1.4.5-mac-X64.dmg, Buzz-1.4.5-windows.exe + two .bin files,
// Linux wheel). Last commit on main: 2026-10-17T09:14:59Z (pyproject.toml on main already says 1.4.6, unreleased). Stale warning: off.
// Price: free, MIT. The buzzcaptions.com page also advertises a separate native "Buzz on macOS" edition via the Mac App Store; that listing
// (apps.apple.com/us/app/buzz-captions/id6446018936, the link on the site) returned HTTP 404 and the iTunes lookup returned no result on 2026-10-24,
// so its price/version are unverified; this tile and the review cover the open-source app.
// No privacy-policy page exists on buzzcaptions.com (404 on /privacy); telemetry and update check are documented in docs/preferences.md.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'buzz-captions',
  name: 'Buzz',
  categories: ['speech-to-text'],
  interfaces: ['desktop', 'cli'],
  locality: 'local', // Whisper models run on the computer after a one-time download; optional OpenAI-API transcription/translation/summary and anonymous launch telemetry are the exceptions (docs + source)
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Whisper', 'whisper.cpp', 'Faster Whisper', 'Hugging Face', 'OpenAI API', 'Ollama', 'LM Studio', 'OBS Studio'], // backends and integrations named in the README and docs
  engine: 'builtin',
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // docs: whisper.cpp models and BUZZ_FORCE_CPU run without a GPU; Faster Whisper suggests a GPU with at least 6 GB VRAM; no RAM figure stated
  stars: 22167, // GitHub API 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio'],
  url: 'buzzcaptions.com',
  storeLinks: {
    github: 'https://github.com/chidiwilliams/buzz',
    web: 'https://buzzcaptions.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v1.4.5 (2026-08-23) ships Buzz-1.4.5-mac-ARM64.dmg, Buzz-1.4.5-mac-X64.dmg and Buzz-1.4.5-windows.exe (+ two .bin parts, unsigned); SourceForge lists the same installers and a Linux AppImage; Flathub and Snap listings exist; checked 2026-10-24',
  tagline: {
    en: 'Free open-source desktop app that transcribes and translates audio and video offline with Whisper and exports subtitles',
    de: 'Kostenlose Open-Source-Desktop-App, die Audio und Video offline mit Whisper transkribiert und übersetzt und Untertitel exportiert',
    fr: "Application de bureau libre et gratuite qui transcrit et traduit audio et vidéo hors ligne avec Whisper et exporte des sous-titres",
    ja: 'Whisperで音声・動画をオフラインで文字起こし・翻訳し、字幕を書き出せる無料のオープンソースデスクトップアプリ',
    zh: '免费开源的桌面应用,使用 Whisper 离线转录并翻译音视频,可导出字幕',
    es: 'App de escritorio gratuita y de código abierto que transcribe y traduce audio y vídeo sin conexión con Whisper y exporta subtítulos',
    pt: 'App de desktop gratuito e de código aberto que transcreve e traduz áudio e vídeo offline com o Whisper e exporta legendas',
    ar: 'تطبيق سطح مكتب مجاني ومفتوح المصدر ينسخ الصوت والفيديو ويترجمهما دون اتصال بواسطة Whisper ويصدّر الترجمات النصية',
    ko: 'Whisper로 오디오와 영상을 오프라인에서 받아쓰고 번역해 자막으로 내보내는 무료 오픈소스 데스크톱 앱',
  },
  reviewSlug: 'buzz-captions-review',
  // Comparison attributes read from the README/docs on 2026-10-24; a missing key = not stated there, never false.
  compare: { realtime: true, speakerLabels: true, cpuUsable: true },
  pqReview: {
    date: '2026-10-24',
    version: '1.4.5',
    versionSourceUrl: 'https://github.com/chidiwilliams/buzz/releases/tag/v1.4.5',
  },
  verdict: 'Best for people who want a free, MIT-licensed desktop app to turn recordings into subtitles and transcripts on their own computer; limited by an unsigned Windows installer, Apple-silicon-only builds from the next release, anonymous launch telemetry on by default and speed that depends on the model and hardware you choose.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-17', // newer of latest release (v1.4.5, 2026-08-23) and last commit on main (2026-10-17T09:14:59Z), GitHub API read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/chidiwilliams/buzz/commits/main',
}
