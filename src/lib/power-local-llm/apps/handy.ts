// Local AI App Directory — Handy: offline speech-to-text dictation (layer: desktop dictation app, speech-to-text)
// Added 2026-10-24. Facts verified 2026-10-24 against handy.computer (home, /about, /privacy effective 2026-09-18), the GitHub repo
// cjpais/Handy (README, MIT licence, GitHub API: default-branch commits, Releases) and the Releases page.
// Latest release v0.9.8 published 2026-10-03; newest default-branch commit 2026-10-21 ("fix: stop blocking the main thread during paste (#2302)").
// Release assets seen on v0.9.8: .dmg (aarch64, x64), .exe + .msi (x64, arm64), .AppImage, .deb, .rpm (x86_64, aarch64).
// Homebrew cask (`brew install --cask handy`) and winget (`winget install cjpais.Handy`) exist but, per the README, are NOT maintained by the Handy developers.
// Models named by the README/docs: Whisper (Small, Medium, Turbo, Large) and Parakeet; optional cloud post-processing providers per the privacy policy.
// minimumSystemVersion macOS 10.15 comes from src-tauri/tauri.conf.json, not from the website. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'handy',
  name: 'Handy',
  categories: ['speech-to-text'],
  interfaces: ['desktop'],
  locality: 'local', // README + privacy policy: speech recognition runs on the device; optional post-processing can call user-chosen cloud providers; update checks and model downloads use the network
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Whisper', 'Parakeet', 'Raycast', 'Homebrew', 'winget'], // Raycast extension is third-party; Homebrew cask and winget package are not maintained by the Handy developers
  engine: 'builtin', // ships its own transcription runtime with downloadable Whisper and Parakeet models
  license: 'MIT',
  price: 'free',
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no RAM requirement stated; Whisper models use GPU acceleration when available, Parakeet is described as CPU-optimized
  stars: 34512, // GitHub API read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['audio'],
  url: 'handy.computer',
  storeLinks: {
    github: 'https://github.com/cjpais/Handy',
    web: 'https://handy.computer',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.9.8 (2026-10-03) checked 2026-10-24: Handy_0.9.8_aarch64.dmg, Handy_0.9.8_x64.dmg, Handy_0.9.8_x64-setup.exe, Handy_0.9.8_arm64-setup.exe, .msi, .AppImage, .deb and .rpm assets; the website offers a per-OS download button; README also lists a Homebrew cask and a winget package that are not maintained by the developers',
  tagline: {
    en: 'Free, MIT-licensed desktop app that transcribes your speech with local Whisper or Parakeet models and pastes the text into any app via a shortcut',
    de: 'Kostenlose Desktop-App unter MIT-Lizenz, die Ihre Sprache mit lokalen Whisper- oder Parakeet-Modellen transkribiert und den Text per Tastenkürzel in jede App einfügt',
    fr: 'Application de bureau gratuite sous licence MIT qui transcrit votre voix avec des modèles Whisper ou Parakeet locaux et colle le texte dans n’importe quelle application via un raccourci',
    ja: 'ローカルのWhisperまたはParakeetモデルで音声を文字起こしし、ショートカット操作で任意のアプリにテキストを貼り付ける、MITライセンスの無料デスクトップアプリ',
    zh: '采用 MIT 许可证的免费桌面应用，使用本地 Whisper 或 Parakeet 模型转写语音，并通过快捷键将文字粘贴到任意应用',
    es: 'App de escritorio gratuita con licencia MIT que transcribe tu voz con modelos Whisper o Parakeet locales y pega el texto en cualquier aplicación con un atajo',
    pt: 'App de desktop gratuito com licença MIT que transcreve sua voz com modelos Whisper ou Parakeet locais e cola o texto em qualquer aplicativo por um atalho',
    ar: 'تطبيق مكتبي مجاني بترخيص MIT يحوّل كلامك إلى نص بنماذج Whisper أو Parakeet المحلية ويلصق النص في أي تطبيق باختصار لوحة المفاتيح',
    ko: '로컬 Whisper 또는 Parakeet 모델로 음성을 받아쓰고 단축키 한 번으로 어떤 앱에든 텍스트를 붙여 넣는 MIT 라이선스 무료 데스크톱 앱',
  },
  compare: { cpuUsable: true }, // README describes Parakeet V3 as CPU-optimized; other comparison attributes not stated, read 2026-10-24
  reviewSlug: 'handy-review',
  pqReview: {
    date: '2026-10-24',
    version: '0.9.8',
    versionSourceUrl: 'https://github.com/cjpais/Handy/releases/latest',
  },
  verdict: 'Best for people who want a free, open-source push-to-talk dictation tool that runs speech recognition on their own computer; limited by a version number below 1.0, an Apple-silicon-first download button, Linux Wayland and macOS Bluetooth caveats listed by the project itself, and speed and accuracy claims PromptQuorum could not check.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-21', // newest default-branch commit (GitHub API, read 2026-10-24); latest release v0.9.8 published 2026-10-03
  lastUpstreamUpdateSource: 'https://github.com/cjpais/Handy/commits/main',
}
