// Local AI App Directory — Weesper Neon Flow: offline push-to-talk dictation for Mac and Windows (layer: desktop dictation app, speech-to-text)
// Added 2026-11-06. Facts verified 2026-11-06 against weesperneonflow.ai (home incl. #pricing and FAQ, /en/download, /en/changelog, /en/about,
// /en/terms, /en/privacy last updated 2026-07-23) and the GitHub Releases API of TheBlueHouse75/weesper-neon-flow-release
// (latest tag direct-v1.8.12, published 2026-10-28T10:35:40Z; assets: macOS universal .dmg, Windows x64 .msi, update manifests).
// Latest version 1.8.12 released 2026-10-28 (changelog + Releases agree). 9 days old on 2026-11-06, so the 3-month stale warning is OFF.
// Prices (EUR, home page): 15-day free trial with all features; Monthly 5 EUR; Annual 45 EUR; Lifetime 99 EUR one-time; 7-day money-back guarantee.
// Local claim (home, FAQ, privacy, terms): speech recognition runs on the device with Whisper (whisper.cpp); audio, transcripts and dictated text are
// not sent to the maker's servers. The network is used for downloads of the app and speech models, licence activation/checks (Cloudflare worker, Stripe billing),
// update metadata (GitHub) and optional PostHog/Sentry diagnostics. Source code and licence: closed (the linked GitHub repo only hosts release installers).
// Conflicts on the maker's own pages, kept out of the tile: About says "No internet connection is required" (FAQ/download say downloads and licence checks need one);
// free tier after the trial is "1,500 words per week" (FAQ) vs "60-second clips" (changelog 1.6.0); "50+" (home) vs "55+" languages (download, changelog 1.0.0).
// Not independently checked: network traffic, the app binary, accuracy, speed. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'weesper-neon-flow',
  name: 'Weesper Neon Flow',
  categories: ['dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: Whisper runs on the Mac or Windows PC, audio and dictated text never leave the computer; the network is used for downloads, licence checks, billing, updates and optional diagnostics
  platforms: ['mac', 'win'], // download page: macOS 13+ (.dmg) and Windows 10 build 19041+ / Windows 11 (.msi); no Linux, iOS or Android
  worksWith: ['Whisper', 'whisper.cpp'],
  engine: 'builtin', // ships its own whisper.cpp runtime with downloadable speech profiles (Minimal ~75 MB, Small 512 MB default, Medium 1.5 GB, Large 3.2 GB)
  license: 'Proprietary (closed source)', // the linked GitHub repo only hosts release installers; no source licence stated
  price: 'paid', // 15-day free trial, then 5 EUR/month, 45 EUR/year or 99 EUR once; the free plan after the trial is described inconsistently by the maker
  hardware: { ramGb: 4, vramGb: null, cpuOnly: null, variesByModel: true }, // download page minimum: 4 GB RAM (8 GB+ recommended), x64 with AVX2 on Windows; Apple Silicon or Intel with AVX2 on Mac; Small model needs about 600 MB disk
  stars: null, // no public source repository
  addedDate: '2026-11-06',
  status: 'listed',
  uses: ['audio'],
  url: 'weesperneonflow.ai',
  storeLinks: {
    web: 'https://weesperneonflow.ai',
  },
  installEffort: 'installer',
  installEvidence: 'Download page + GitHub Releases direct-v1.8.12 (2026-10-28) checked 2026-11-06: Weesper-Neon-Flow-1.8.12-macOS-universal.dmg and Weesper-Neon-Flow-1.8.12-Windows-x64.msi, standard installers, no terminal step; speech models download inside the app',
  tagline: {
    en: 'Offline push-to-talk dictation for Mac and Windows that runs Whisper on your computer and types the cleaned-up text into any app',
    de: 'Offline-Diktat per Tastenkürzel für Mac und Windows, das Whisper auf Ihrem Rechner ausführt und den bereinigten Text in jede App einfügt',
    fr: 'Dictée hors ligne par raccourci pour Mac et Windows, qui exécute Whisper sur votre ordinateur et insère le texte nettoyé dans n’importe quelle application',
    ja: 'MacとWindows向けのオフライン音声入力。Whisperをお使いのPC上で実行し、整えたテキストを任意のアプリに入力するショートカット式ツール',
    zh: '适用于 Mac 和 Windows 的离线按键听写工具，在你的电脑上运行 Whisper，并把整理后的文字输入到任意应用',
    es: 'Dictado sin conexión con atajo para Mac y Windows que ejecuta Whisper en tu ordenador e inserta el texto limpio en cualquier aplicación',
    pt: 'Ditado offline por atalho para Mac e Windows que executa o Whisper no seu computador e insere o texto limpo em qualquer aplicativo',
    ar: 'إملاء صوتي دون اتصال لأجهزة Mac وWindows يشغّل Whisper على حاسوبك ويُدخل النص المنقّح في أي تطبيق باختصار لوحة المفاتيح',
    ko: 'Mac과 Windows에서 Whisper를 내 컴퓨터로 실행해 정리된 텍스트를 어떤 앱에든 입력하는 오프라인 단축키 받아쓰기 도구',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-06 (home: "50+ languages"; changelog 1.7.5 Meeting mode with speaker diarization); a missing key = not stated, never false.
  compare: { languages: 50, speakerLabels: true },
  reviewSlug: 'weesper-neon-flow-review',
  pqReview: {
    date: '2026-11-06',
    version: '1.8.12',
    versionSourceUrl: 'https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases/latest',
  },
  verdict: 'Best for Mac and Windows users who want push-to-talk dictation that keeps speech recognition on their own computer and who accept a paid, closed-source app (15-day trial, then 5 EUR a month, 45 EUR a year or 99 EUR once); limited by no Linux or mobile version, maker pages that disagree on the free tier and on needing internet, and privacy claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-10-28', // GitHub Releases direct-v1.8.12 published 2026-10-28, matching the website changelog; read 2026-11-06
  lastUpstreamUpdateSource: 'https://github.com/TheBlueHouse75/weesper-neon-flow-release/releases/latest',
}
