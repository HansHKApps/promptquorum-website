// Local AI App Directory — Amical: open-source AI dictation for Mac and Windows with local Whisper models (layer: desktop dictation app, speech-to-text)
// Added 2026-11-09. Facts verified 2026-11-09 against amical.ai (home, /pricing, /privacy, /docs: what-is-amical, quick-start, local-ai-models,
// ai-formatting, faq, telemetry, ios-quick-start) and the GitHub API/README of amicalhq/amical (MIT licence, 1,603 stars, homepage amical.ai).
// Latest release Amical Desktop v1.13.0 (not a pre-release) published 2026-11-07T22:12:46Z; newest default-branch push 2026-11-08T17:20:14Z.
// Assets on v1.13.0: Amical-macos-arm64.dmg, Amical-macos-x64.dmg, Amical-windows-x64.exe, Amical-windows-arm64.exe, darwin zips, .nupkg, RELEASES files.
// So the 3-month stale warning is OFF (2 days since the last update).
// Local claim (README, docs, FAQ): "The transcription runs locally with Whisper, or in the cloud if you sign in"; "works offline once a local model is set up";
// first-run onboarding downloads a local model; local Whisper needs macOS 15+ (README). Local variants per docs: Tiny ~78 MB, Base ~148 MB, Small ~488 MB,
// Medium ~1.5 GB, Large v3 ~3.1 GB, Large v3 Turbo ~1.5 GB. AI formatting (Alpha) needs a local Ollama / OpenAI-compatible model or the Amical Cloud connection.
// Cloud: sign-in, cloud speech/formatting send the audio for that request (docs FAQ). Telemetry: docs say Settings > Advanced > Anonymous Telemetry is ON by default
// and can be switched off; release v1.13.0 notes say "ask for telemetry consent and turn it on at sign-in" (the two statements are not reconciled on the maker's pages).
// Mobile: iPhone and Android apps need an Amical account sign-in and their privacy policy lists PostHog analytics; they are NOT part of this local-first tile (platforms = desktop only).
// Prices (USD, pricing page): Free $0 with unlimited local dictation + 2,000 words/week cloud; Premium $7/month billed $84/year or $10/month billed monthly (toggle); Enterprise custom.
// Maker: GitHub org amicalhq; privacy policy names Exa Labs LLC as provider. Not checked: network traffic, accuracy, speed. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'amical',
  name: 'Amical',
  categories: ['dictation', 'speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // README + docs: Whisper runs on the Mac or Windows PC and works offline once a model is downloaded; optional cloud speech/formatting when signed in; model downloads, update checks and telemetry use the network
  platforms: ['mac', 'win'], // desktop app only: macOS (arm64 + x64 .dmg) and Windows (x64 + arm64 .exe); README: Linux is not supported; local Whisper needs macOS 15+
  worksWith: ['Whisper', 'whisper.cpp', 'Ollama', 'Homebrew'], // Ollama or any OpenAI-compatible local endpoint for the optional AI formatting pass (docs); Homebrew cask `amical` in README
  engine: 'builtin', // ships its own Whisper runtime (whisper.cpp) with downloadable model variants
  license: 'MIT',
  price: 'freemium', // free: unlimited local dictation + 2,000 words/week cloud; Premium $7/month billed yearly or $10/month monthly for unlimited cloud dictation
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; model size ranges from ~78 MB (Tiny) to ~3.1 GB (Large v3); local Whisper needs macOS 15+
  stars: 1603, // GitHub API read 2026-11-09
  addedDate: '2026-11-09',
  status: 'listed',
  uses: ['audio'],
  url: 'amical.ai',
  storeLinks: {
    github: 'https://github.com/amicalhq/amical',
    web: 'https://amical.ai',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v1.13.0 (2026-11-07) checked 2026-11-09: Amical-macos-arm64.dmg, Amical-macos-x64.dmg, Amical-windows-x64.exe, Amical-windows-arm64.exe; README/docs also list `brew install --cask amical`; first-run onboarding downloads the local Whisper model inside the app',
  tagline: {
    en: 'Free, MIT-licensed dictation app for Mac and Windows that runs Whisper on your computer, works offline once a model is downloaded and types into any app',
    de: 'Kostenlose Diktier-App unter MIT-Lizenz für Mac und Windows, die Whisper auf Ihrem Rechner ausführt, nach dem Modell-Download offline funktioniert und in jede App schreibt',
    fr: 'Application de dictée gratuite sous licence MIT pour Mac et Windows, qui exécute Whisper sur votre ordinateur, fonctionne hors ligne une fois un modèle téléchargé et écrit dans n’importe quelle application',
    ja: 'MITライセンスの無料音声入力アプリ（MacとWindows対応）。Whisperをお使いのPC上で実行し、モデルのダウンロード後はオフラインで動作して、任意のアプリに入力します',
    zh: '采用 MIT 许可证的免费听写应用，适用于 Mac 和 Windows，在你的电脑上运行 Whisper，下载模型后可离线使用，并可输入到任意应用',
    es: 'App de dictado gratuita con licencia MIT para Mac y Windows que ejecuta Whisper en tu ordenador, funciona sin conexión una vez descargado un modelo y escribe en cualquier aplicación',
    pt: 'App de ditado gratuito com licença MIT para Mac e Windows que executa o Whisper no seu computador, funciona offline depois de baixar um modelo e escreve em qualquer aplicativo',
    ar: 'تطبيق إملاء مجاني بترخيص MIT لأجهزة Mac وWindows يشغّل Whisper على حاسوبك ويعمل دون اتصال بعد تنزيل نموذج ويكتب في أي تطبيق',
    ko: 'Mac과 Windows용 MIT 라이선스 무료 받아쓰기 앱으로, Whisper를 내 컴퓨터에서 실행하고 모델을 내려받은 뒤에는 오프라인으로 작동하며 어떤 앱에든 입력합니다',
  },
  // Comparison attributes: each value taken from the maker's pages on 2026-11-09 (pricing + home: "100+ languages", not independently verified); a missing key = not stated, never false.
  compare: { languages: 100 },
  reviewSlug: 'amical-review',
  pqReview: {
    date: '2026-11-09',
    version: '1.13.0',
    versionSourceUrl: 'https://github.com/amicalhq/amical/releases/latest',
  },
  verdict: 'Best for Mac and Windows users who want free, open-source push-to-talk dictation with Whisper running on their own computer and who accept optional cloud features, telemetry that is on by default per the docs, and no Linux version; limited by a macOS 15 requirement for local Whisper, an Alpha AI-formatting pass, mobile apps that need an account, and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-09',
  lastUpstreamUpdate: '2026-11-08', // GitHub: newer of release v1.13.0 (2026-11-07) and last push to main (2026-11-08T17:20:14Z); read 2026-11-09
  lastUpstreamUpdateSource: 'https://github.com/amicalhq/amical',
}
