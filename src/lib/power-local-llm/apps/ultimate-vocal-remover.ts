// Local AI App Directory — Ultimate Vocal Remover (UVR) by the pseudonymous developers Anjok07 and aufr33 (layer: local music stem separation)
// Added 2026-11-18 from the research package (not hands-on tested). No maker outreach — independent PromptQuorum entry; no founder-review badge.
// Sources read 2026-11-18: official website (ultimatevocalremover.com), GitHub repository, README (v5.6), GitHub Releases (tag v5.6 and its asset list),
// the maker's development update in GitHub issue 2399 (latest update dated 2026-11-18), GitHub API (stars, pushed_at, license), AlternativeTo and a Bedroom Producers Blog review (2023).
// Notes:
// - License: the README says the UVR GUI code is MIT-licensed (GitHub API reports MIT, no LICENSE file found in the repository root listing). The README asks third-party
//   developers using the models to honour the MIT license and credit UVR. Per-model licences beyond that statement are unverified.
// - Version: latest tagged GitHub release is v5.6 (published 2023-09-26). The Releases page also carries later beta installers
//   (Roformer beta macOS builds and a DirectML beta .exe, uploaded up to January 2025). UVR 6 is announced by the maker, not released
//   (website and issue 2399: Windows planned for 2026-12-11, macOS and Linux to follow).
// - Last upstream update: GitHub pushed_at and last commit 2026-10-06 (a README revision); latest tagged release 2023-09-26. 43 days before 2026-11-18 -> NOT stale (3-month rule).
// - HQ country: no flag. The website has no privacy policy, terms, imprint or about page (footer links only Contact, a mailto address); the README gives no location; the maintainers
//   are pseudonymous GitHub accounts and the sources name no company. Third-party listings are not primary sources. Left unset; nobody could be asked in this unattended run.
// - hardware.vramGb 6: README "Nvidia GTX 1060 6GB is the minimum requirement for GPU conversions" (8 GB VRAM recommended). System RAM is not stated; no CPU-only statement in the README.
// - No category-comparison block: there is no stem-separation segment in compare-schema.ts (this is the only tile in that category), so no compare attributes are defined.
// - Stars: GitHub API 27229 on 2026-11-18.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ultimate-vocal-remover',
  name: 'Ultimate Vocal Remover',
  categories: ['stem-separation-cleanup', 'music-audio'],
  interfaces: ['desktop'],
  locality: 'local', // README: the installer bundles the UVR interface, Python, PyTorch and dependencies; separation runs in the app on the user's machine; updates can be downloaded from within the app
  platforms: ['win', 'mac', 'linux'],
  worksWith: ['MDX-Net', 'Demucs', 'VR Architecture'], // model families named in the README and on the website
  engine: 'builtin', // README: the bundles include the models; the core developers trained them except the Demucs v3 and v4 4-stem models
  license: 'MIT', // README: GUI code is MIT-licensed
  price: 'free', // free and open source; the website and README link a Buy Me a Coffee donation page
  hardware: { ramGb: null, vramGb: 6, cpuOnly: null, variesByModel: false }, // README: GTX 1060 6 GB minimum for GPU conversions, 8 GB VRAM recommended; RAM not stated
  stars: 27229,
  addedDate: '2026-11-18',
  status: 'listed',
  uses: ['audio'],
  url: 'ultimatevocalremover.com',
  storeLinks: {
    github: 'https://github.com/Anjok07/ultimatevocalremovergui',
    web: 'https://ultimatevocalremover.com',
  },
  installEffort: 'installer',
  installOn: ['win', 'mac'],
  installEvidence: 'On 2026-11-18 the GitHub release v5.6 listed UVR_v5.6.0_setup.exe for Windows and Ultimate_Vocal_Remover_v5_6_MacOS_arm64.dmg and _x86_64.dmg for macOS; the README links them as the main downloads and the website links the release page. Linux has no installer: the README gives manual steps (Python virtual environment, pip install, python UVR.py), which is terminal-setup.',
  tagline: {
    en: 'Free desktop app that splits songs into vocals, instruments and other stems on your own computer, using MDX-Net, VR and Demucs models',
    de: 'Kostenlose Desktop-App, die Songs auf Ihrem eigenen Computer mit MDX-Net-, VR- und Demucs-Modellen in Gesang, Instrumente und weitere Stems trennt',
    fr: "Application de bureau gratuite qui sépare les morceaux en voix, instruments et autres stems sur votre propre ordinateur, avec des modèles MDX-Net, VR et Demucs",
    ja: 'MDX-Net、VR、Demucsのモデルを使い、曲をボーカル、楽器、その他のステムに自分のPC上で分離する無料のデスクトップアプリ',
    zh: '免费桌面应用，使用 MDX-Net、VR 和 Demucs 模型，在您自己的电脑上把歌曲分离为人声、乐器和其他音轨',
    es: 'App de escritorio gratuita que separa canciones en voz, instrumentos y otros stems en tu propio ordenador, con modelos MDX-Net, VR y Demucs',
    pt: 'App de desktop gratuito que separa músicas em vocais, instrumentos e outros stems no seu próprio computador, com modelos MDX-Net, VR e Demucs',
    ar: 'تطبيق سطح مكتب مجاني يفصل الأغاني إلى صوت غنائي وآلات ومسارات أخرى على جهازك باستخدام نماذج MDX-Net وVR وDemucs',
    ko: 'MDX-Net, VR, Demucs 모델로 노래를 보컬, 악기, 기타 스템으로 내 컴퓨터에서 분리하는 무료 데스크톱 앱',
  },
  reviewSlug: 'ultimate-vocal-remover-review',
  pqReview: {
    date: '2026-11-18',
    version: '5.6',
    versionSourceUrl: 'https://github.com/Anjok07/ultimatevocalremovergui/releases/tag/v5.6',
  },
  lastVerifiedDate: '2026-11-18',
  lastUpstreamUpdate: '2026-10-06', // GitHub pushed_at / last commit 2026-10-06T22:39Z (API, 2026-11-18; a README revision); latest tagged release v5.6 published 2023-09-26
  lastUpstreamUpdateSource: 'https://github.com/Anjok07/ultimatevocalremovergui (last commit 2026-10-06; latest tagged release v5.6, 2023-09-26)',
}
