// Local AI App Directory — Ensu by Ente Labs (layer: on-device chat app, mobile + desktop)
// Added 2026-10-24 at the operator's request. No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Facts verified 2026-10-24 against: ente.com/blog/ensu (announcement dated 2026-03-02), ente.com/ensu (v0.1.22 download list),
// GitHub Releases ente-io/ente tag ensu-v0.1.22 (published 2026-10-23, 16 assets: .dmg, .exe, .AppImage, .deb, .rpm, .apk),
// the App Store listing id6758197006 (iTunes lookup API: "Ensu - Ente's Local LLM", v0.1.22 released 2026-10-23, first release
// 2026-02-27, free, iOS 16.0+, 61.6 MB, seller Ente Technologies, Inc.), the Google Play listing io.ente.ensu (Ente Labs, free,
// 5K+ downloads, Play "updated" Oct 7 2026), the Ente privacy policy (ente.com/privacy, last updated 2026-10-16) and the
// source code on main (rust/crates/ensu/src/config.rs: model catalog and RAM-based default selection, llama_cpp_2 engine).
// Models are not named on ente.com or in the blog post; they are named only in the source code and release notes.
// Repo licence: AGPL-3.0 (GitHub API licence of the ente-io/ente monorepo). `stars` stays null on purpose: the 29k stars belong to the
// whole Ente monorepo (Photos, Auth, ...), not to Ensu.
// Last upstream update: 2026-10-23 (GitHub release ensu-v0.1.22 / App Store v0.1.22) → NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ensu',
  name: 'Ensu',
  categories: ['general-chat-clients'],
  interfaces: ['mobile', 'desktop'],
  locality: 'local', // maker: runs completely on the device; network only for model and knowledge-pack downloads (Hugging Face, models.ente.com) and desktop updates; sync/backup not enabled yet
  platforms: ['ios', 'android', 'mac', 'win', 'linux'], // plus an experimental web version (not claimed as a platform)
  worksWith: null,
  engine: 'builtin', // llama.cpp (Rust llama_cpp_2 binding) in the open-source code; GGUF models downloaded in-app
  license: 'AGPL-3.0', // repository licence of ente-io/ente per GitHub; the blog post only says "open source"
  price: 'free', // "zero cost" per the blog; the maker says pricing is not decided yet
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM figure published; chat is disabled on phones with < 4 GB RAM (release notes 0.1.17); default model chosen by device RAM
  stars: null,
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['chat', 'phone', 'docs'],
  url: 'ente.com/ensu',
  storeLinks: {
    appStore: 'https://apps.apple.com/app/id6758197006',
    googlePlay: 'https://play.google.com/store/apps/details?id=io.ente.ensu',
    github: 'https://github.com/ente-io/ente',
    web: 'https://ente.com/ensu',
  },
  installEffort: 'installer',
  installEvidence: 'ente.com/ensu and GitHub Releases ensu-v0.1.22 checked 2026-10-24: Ensu_0.1.22_universal.dmg, Ensu_0.1.22_x64-setup.exe, Ensu_0.1.22_amd64.AppImage/.deb and Ensu-0.1.22-1.x86_64.rpm, ensu-v0.1.22.apk; App Store (id6758197006, iOS 16.0+) and Google Play (io.ente.ensu) listings; models download in-app on first use',
  tagline: {
    en: 'Free, open-source chat app from Ente Labs that runs downloaded language models on your phone or computer, with image input, local voice dictation and no account',
    de: 'Kostenlose Open-Source-Chat-App von Ente Labs, die heruntergeladene Sprachmodelle auf Smartphone oder Computer ausführt, mit Bildeingabe, lokaler Sprachdiktat-Funktion und ohne Konto',
    fr: 'Application de chat gratuite et open source d\'Ente Labs qui exécute des modèles de langage téléchargés sur votre téléphone ou ordinateur, avec image en entrée, dictée vocale locale et sans compte',
    ja: 'Ente Labsの無料オープンソースのチャットアプリ。ダウンロードした言語モデルをスマートフォンやパソコンで実行し、画像入力とローカル音声入力に対応、アカウント不要',
    zh: 'Ente Labs 推出的免费开源聊天应用，在手机或电脑上运行下载的语言模型，支持图片输入和本地语音输入，无需账号',
    es: 'App de chat gratuita y de código abierto de Ente Labs que ejecuta modelos de lenguaje descargados en tu móvil u ordenador, con entrada de imágenes, dictado por voz local y sin cuenta',
    pt: 'App de chat gratuito e de código aberto da Ente Labs que executa modelos de linguagem baixados no celular ou computador, com entrada de imagens, ditado por voz local e sem conta',
    ar: 'تطبيق دردشة مجاني ومفتوح المصدر من Ente Labs يشغّل نماذج لغوية منزّلة على هاتفك أو حاسوبك، مع إدخال الصور والإملاء الصوتي المحلي ودون حساب',
    ko: 'Ente Labs의 무료 오픈소스 채팅 앱으로, 내려받은 언어 모델을 스마트폰이나 컴퓨터에서 실행하며 이미지 입력과 로컬 음성 입력을 지원하고 계정이 필요 없습니다',
  },
  reviewSlug: 'ensu-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.1.22',
    versionSourceUrl: 'https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22',
  },
  // Comparison attributes from the maker's blog/site, the release notes and the source code, 2026-10-24; a missing key = not stated, never false.
  // desktop-chat segment: builtInEngine, fileChat (desktop "Your Notes" over local markdown notes), voice (mobile dictation; no spoken output).
  // mobile-chat segment: offline, modelDownloads, visionInput, voice. importModels is not stated, so it stays unset.
  compare: { builtInEngine: true, fileChat: true, voice: true, offline: true, modelDownloads: true, visionInput: true },
  verdict: 'Best for people who want a free, open-source, account-free chat app that runs on iPhone, Android and all three desktop systems and accept small models and a 0.1.x release with sync not yet available; limited by modest model capability, a young codebase and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-23', // GitHub release ensu-v0.1.22 published 2026-10-23T12:36Z; App Store currentVersionReleaseDate 2026-10-23, read 2026-10-24
  lastUpstreamUpdateSource: 'https://github.com/ente-io/ente/releases/tag/ensu-v0.1.22',
}
