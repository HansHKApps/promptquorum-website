// Local AI App Directory — LM Playground (layer: mobile)
// Added 2026-10-16 at the operator's request. No maker outreach — independent PromptQuorum entry.
// All fields below verified on 2026-10-16 against: the Google Play listing
// (play.google.com/store/apps/details?id=com.druk.lmplayground — developer Andriy Druk, 50K+ downloads, 3.9 stars from
// 479 reviews, "Updated on Oct 8, 2026", no ads/in-app-purchase labels, Data safety: "No data shared with third
// parties" and "No data collected"; the Play text does not show a version number or minimum Android version),
// the official website lmplayground.app (header badge "v1.10.0", MIT, "Download for Android", 28 UI languages,
// 40+ models), the privacy policy at andriydruk.com/privacy-policy-for-lm-playground (effective 2024-03-16), and
// github.com/andriydruk/LMPlayground (README, MIT LICENSE, 161 stars, latest release 1.10.1 published 2026-10-12,
// version.properties on main = 1.10.2 unreleased, last push 2026-10-13, repo created 2024-03-16, no release assets —
// the APK is distributed through Google Play only).
// Last upstream update: Google Play 2026-10-08, GitHub release 1.10.1 2026-10-12 → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lm-playground',
  name: 'LM Playground',
  categories: ['general-chat-clients', 'document-pdf-chat'],
  interfaces: ['mobile'],
  locality: 'local', // inference runs on-device via llama.cpp; model downloads and the optional, off-by-default web search / fetch tools need the internet
  platforms: ['android'], // README: "an Android application"; no iOS or desktop build
  worksWith: ['Hugging Face', 'llama.cpp'], // models are GGUF files downloaded from Hugging Face (or imported); inference runs on llama.cpp
  engine: 'builtin', // ships its own llama.cpp build
  license: 'MIT', // LICENSE file in the repository; the README and Play listing both state MIT
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // Play: smallest model 267 MB, 4B–8B models "benefit from 8+ GB RAM", the 20B model needs a high-end phone — no hard floor stated
  stars: 161, // GitHub, 2026-10-16
  addedDate: '2026-10-16',
  status: 'listed',
  uses: ['phone', 'chat', 'docs', 'audio'],
  url: 'lmplayground.app',
  storeLinks: {
    googlePlay: 'https://play.google.com/store/apps/details?id=com.druk.lmplayground',
    github: 'https://github.com/andriydruk/LMPlayground',
    web: 'https://lmplayground.app/',
  },
  installEffort: 'installer',
  installEvidence: 'Google Play listing "Install" button and lmplayground.app "Download for Android" → Play Store; GitHub Releases carry no APK/assets (only release notes). checked 2026-10-16',
  tagline: {
    en: 'Free, MIT-licensed Android app that runs GGUF models offline, with on-device document Q&A and vision',
    de: 'Kostenlose Android-App (MIT-Lizenz), die GGUF-Modelle offline ausführt, mit Dokumentenfragen und Bildverständnis auf dem Gerät',
    fr: "Application Android gratuite sous licence MIT qui exécute des modèles GGUF hors ligne, avec questions sur documents et vision sur l'appareil",
    ja: 'GGUFモデルをオフラインで実行する無料のMITライセンスAndroidアプリ。端末内の文書Q&Aと画像理解に対応',
    zh: '免费的MIT许可Android应用，可离线运行GGUF模型，支持设备端文档问答和视觉理解',
    es: 'App de Android gratuita con licencia MIT que ejecuta modelos GGUF sin conexión, con preguntas sobre documentos y visión en el dispositivo',
    pt: 'App Android gratuito com licença MIT que executa modelos GGUF offline, com perguntas sobre documentos e visão no dispositivo',
    ar: 'تطبيق Android مجاني بترخيص MIT يشغّل نماذج GGUF دون اتصال، مع أسئلة عن المستندات وفهم الصور على الجهاز',
    ko: 'GGUF 모델을 오프라인으로 실행하는 무료 MIT 라이선스 Android 앱, 기기 내 문서 질의응답과 비전 지원',
  },
  // Comparison attributes: each value verified against the Play listing, the website and the README on 2026-10-16;
  // a missing key = not stated there, never false. importModels = README "Custom GGUF models"; modelDownloads = built-in
  // catalog with in-app downloads; visionInput = "Vision/image input" (Gemma 4, Gemma 3, Qwen 3.5, Ministral 3);
  // voice = on-device voice DICTATION (Nemotron ASR, website + release 1.10.0; not in the Play description) — no spoken replies stated.
  compare: { offline: true, importModels: true, modelDownloads: true, visionInput: true, voice: true },
  lastVerifiedDate: '2026-10-16',
  lastUpstreamUpdate: '2026-10-12', // GitHub release 1.10.1, read 2026-10-16
  lastUpstreamUpdateSource: 'https://github.com/andriydruk/LMPlayground/releases',
  reviewSlug: 'lm-playground-review',
  pqReview: {
    date: '2026-10-16',
    version: '1.10.1',
    versionSourceUrl: 'https://github.com/andriydruk/LMPlayground/releases',
  },
  verdict: 'Best for Android users who want a free, MIT-licensed llama.cpp chat app that loads GGUF models, answers questions about your own documents, reads photos and dictates offline; limited to Android only, a one-developer project, and a Play listing that does not show the build number.',
}
