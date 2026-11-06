// Local AI App Directory — Sablate: offline subtitle generation, translation and burn-in for Windows and macOS (layer: desktop subtitle tool, speech-to-text)
// Added 2026-11-06. Facts verified 2026-11-06 against sablate.com (home, /pricing, /features, /download, /docs, /changelog, /about, /contact,
// /legal/privacy and /legal/terms, both dated "October 2026"; /de and /de/pricing show the same USD prices).
// Latest version 1.0.2 released 2026-10-19 (changelog, tagged "Latest"; v1.0.1 2026-10-01, v1.0.0 2026-09-01). 18 days old on 2026-11-06, so the 3-month stale warning is OFF.
// No GitHub repository, no store listing and no public release feed exist, so the website changelog is the primary source of the release date.
// Prices (USD, home/pricing; the German pages show the same USD amounts, no EUR/JPY/BRL/KRW strings; VAT is not mentioned): Free forever (videos up to 10 minutes,
// 3 transcription jobs a month, Fast and Balanced models, 1 translation layer with Argos, credit line / corner mark on exports); Pro $29 once or $5.99 a month;
// 30-day refund on the one-time licence only; a licence is active on one device at a time; volume packs up to ten licences.
// Local claim (home, docs, privacy policy): transcription runs on the computer with faster-whisper (Whisper tiers Fast = tiny 78 MB, Balanced = small 486 MB,
// Accurate = large-v3-turbo 1.62 GB, Best = large-v3 3.09 GB, downloaded on first use), offline translation with Argos (one language pack per pair), burn-in with
// ffmpeg and libass; audio and video are never uploaded. Cloud engines (OpenAI and ElevenLabs transcription, DeepL, OpenAI and Claude translation) are Pro-only,
// need the user's own API key and are off by default. Not network-silent: docs list an update check every few hours, a licence check about once a day on Pro,
// anonymous usage statistics (PostHog, EU) and the optional feature-suggestion form; no opt-out for the statistics was found on any page.
// Closed source (terms forbid reverse engineering). The maker is only the brand "Sablate": no company, country or address on any page read.
// Conflicts on the maker's own pages, kept out of the tile: docs header "Updated September 14, 2026" predates the v1.0.1/v1.0.2 features it describes; "TikTok" named as a preset
// in features/changelog but not in the list of 13; features page does not mark .ass and soft-subtitled .mkv as Pro while pricing/docs do; model sizes 75 MB-2.9 GB (download) vs 78 MB-3.09 GB (docs).
// Not independently checked: network traffic, the installers (signing/notarisation), accuracy, speed claims. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'sablate',
  name: 'Sablate',
  categories: ['subtitles-dubbing', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // maker: Whisper (faster-whisper), Argos translation and ffmpeg/libass rendering run on the computer, media is never uploaded; cloud engines are Pro-only, opt-in with the user's own API key; update check, Pro licence check and anonymous usage statistics still use the network
  platforms: ['win', 'mac'], // download page: Windows 10 64-bit or later (.exe), macOS 12 or later (separate Apple Silicon and Intel .dmg builds); no Linux, iOS or Android
  worksWith: ['Whisper', 'faster-whisper', 'Argos Translate', 'FFmpeg', 'libass'],
  engine: 'builtin', // ships its own local engine ("sidecar"); Whisper models download on first use
  license: 'Proprietary (closed source)', // terms prohibit reverse engineering; no repository
  price: 'freemium', // Free forever with limits; Pro $29 once or $5.99/month
  hardware: { ramGb: null, vramGb: null, cpuOnly: true, variesByModel: true }, // download page: NVIDIA GPU accelerates automatically, otherwise runs on CPU (macOS runs on the CPU); about 1.3 GB disk on Windows; no RAM figure stated
  stars: null, // no public source repository
  addedDate: '2026-11-06',
  status: 'listed',
  uses: ['audio'],
  url: 'sablate.com',
  storeLinks: {
    web: 'https://sablate.com',
  },
  installEffort: 'installer',
  installEvidence: 'Download page checked 2026-11-06: Windows 10+ .exe (about 320 MB, 1.3 GB installed) and macOS 12+ .dmg builds for Apple Silicon and Intel via sablate.com/api/download, no terminal step; Whisper models (about 75 MB to 2.9 GB) download inside the app on first use. Signing and notarisation claims not verified',
  tagline: {
    en: 'Subtitle tool for Windows and Mac that, per its maker, transcribes video with Whisper on your computer, translates it, and burns styled captions into the video',
    de: 'Untertitelwerkzeug für Windows und Mac, das laut Hersteller Videos mit Whisper auf Ihrem Rechner transkribiert, übersetzt und gestaltete Untertitel ins Video einbrennt',
    fr: 'Outil de sous-titrage pour Windows et Mac qui, selon son éditeur, transcrit la vidéo avec Whisper sur votre ordinateur, la traduit et incruste des sous-titres stylisés dans l’image',
    ja: 'WindowsとMac向けの字幕ツール。開発元によると、Whisperをお使いのPC上で動画を文字起こしし、翻訳して、スタイル付き字幕を映像に焼き込みます',
    zh: '适用于 Windows 和 Mac 的字幕工具，据开发者称，在你的电脑上用 Whisper 转写视频、翻译，并把带样式的字幕烧录进视频',
    es: 'Herramienta de subtítulos para Windows y Mac que, según su fabricante, transcribe el vídeo con Whisper en tu ordenador, lo traduce e incrusta subtítulos con estilo en el vídeo',
    pt: 'Ferramenta de legendas para Windows e Mac que, segundo o fabricante, transcreve o vídeo com o Whisper no seu computador, traduz e grava legendas estilizadas no próprio vídeo',
    ar: 'أداة ترجمة نصية لأجهزة Windows وMac تفرّغ الفيديو صوتيًا، بحسب مطوّره، باستخدام Whisper على حاسوبك وتترجمه وتدمج الترجمات المنسّقة داخل الفيديو',
    ko: '개발사에 따르면 Windows와 Mac에서 Whisper를 내 컴퓨터로 실행해 영상을 받아쓰고 번역한 뒤 스타일이 적용된 자막을 영상에 입히는 자막 도구',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-06 (home/features: "100 source languages, detected automatically";
  // home and docs list speaker diarization under what Sablate does not do; download page: runs on CPU when there is no NVIDIA GPU).
  // Real-time transcription and a local API server are not mentioned anywhere: left unset, never false.
  compare: { languages: 100, speakerLabels: false, cpuUsable: true },
  reviewSlug: 'sablate-review',
  pqReview: {
    date: '2026-11-06',
    version: '1.0.2',
    versionSourceUrl: 'https://sablate.com/changelog',
  },
  verdict: 'Best for Windows and Mac users who want to turn a video on their own computer into translated, burned-in captions without uploading it, and who accept a closed-source, freemium app (free for videos up to 10 minutes, Pro $29 once or $5.99 a month); limited by no Linux or mobile version, no speaker labels, an anonymous usage-statistics call with no opt-out described, no maker identity on the pages we read, and claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-10-19', // sablate.com/changelog v1.0.2 "October 19, 2026", read 2026-11-06
  lastUpstreamUpdateSource: 'https://sablate.com/changelog',
}
