// Local AI App Directory — Scrypted (layer: camera / NVR and smart-home video platform with optional local LLM features)
// Added 2026-11-01 on request (link from localhosted.com). Facts verified 2026-11-01 against: scrypted.app, docs.scrypted.app (what is
// Scrypted, installation, desktop-app, llm, scrypted-nvr features / ai-summaries / apps / purchase policy, server-hardware, privacy policy),
// the GitHub repos koush/scrypted (README, LICENSE.md, releases, commits) and koush/nvr.scrypted.app (desktop app releases), and the
// App Store lookup API (id1658171214). Not tested hands-on.
// MAKER: Vysor, Inc. (docs privacy policy: Company = Vysor, Inc., Washington, US; App Store seller Vysor, Inc.); GitHub owner koush.
// SCOPE: Scrypted is a video integration platform (cameras to HomeKit, Google Home, Alexa, Home Assistant). It is NOT an LLM app; the
// local-AI angle is (1) object detection on CPU/GPU/Apple Neural Engine/Intel NPU/Coral and (2) the LLM plugin (llama.cpp hosted by
// Scrypted, or any OpenAI-compatible endpoint, or ChatGPT/Claude/Gemini with your own key) used for NVR AI Summaries.
// LOCALITY = hybrid: detection and recording are local; AI Summaries can use a cloud key or a local model; remote access uses Scrypted Cloud.
// LICENCE: server/package.json says ISC, but the repo LICENSE.md says "See individual project directories for licensing ... Some plugins may
// have dependencies that require GPL compliance". The NVR plugin and the desktop app are paid / licensed. Recorded as 'mixed licences'.
// PRICE = freemium: free open-source platform, paid Scrypted NVR subscription (free version and free trial per the purchase policy) and a
// paid desktop-app licence ("The desktop app requires a paid license"). Amounts are not stated in the docs and the billing portal needs a
// login, so no figure is recorded anywhere.
// RELEASES: desktop app v0.147.1 published 2026-09-19 (assets Scrypted-0.147.1-arm64.dmg / -x64.dmg / .Setup.exe / amd64+arm64 .deb);
// server repo tag v0.147.0 2026-09-13; newest commit on koush/scrypted main 2026-11-01 ("unifi-protect: emit doorbell rings ...").

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'scrypted',
  name: 'Scrypted',
  categories: ['security-cameras-nvr', 'smart-home-ai'],
  interfaces: ['desktop', 'web', 'mobile'], // desktop app (Mac/Windows/Linux), web management console on port 10443, iOS and Android NVR apps
  locality: 'hybrid', // detection + recording run on your server; AI Summaries use a local or cloud model; remote viewing goes through Scrypted Cloud
  platforms: ['mac', 'win', 'linux', 'ios', 'android', 'web', 'selfhosted'], // server on Mac/Windows/Linux/Proxmox/Docker/NAS; viewer apps on iOS and Android
  worksWith: ['HomeKit', 'Google Home', 'Alexa', 'Home Assistant', 'llama.cpp', 'Ollama', 'OpenAI-compatible APIs', 'ONVIF/RTSP cameras'],
  engine: 'both', // LLM plugin installs and hosts llama.cpp itself, or connects to an external OpenAI-compatible endpoint
  license: 'Mixed (ISC core, paid NVR)', // see header: repo licensing varies per directory; NVR plugin and desktop app need a paid licence
  price: 'freemium',
  hardware: { ramGb: 16, vramGb: 12, cpuOnly: null, variesByModel: true }, // LLM docs: Mac 16 GB Apple Silicon or NVIDIA/AMD GPU 12 GB for local models; NVR itself runs on Intel N100 / Dell Wyse class boxes
  stars: 6031, // github.com/koush/scrypted, GitHub API 2026-11-01
  addedDate: '2026-11-01',
  status: 'listed',
  uses: ['agent', 'serve'],
  url: 'scrypted.app',
  storeLinks: {
    web: 'https://www.scrypted.app',
    github: 'https://github.com/koush/scrypted',
    appStore: 'https://apps.apple.com/us/app/scrypted/id1658171214',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.scrypted.nvr',
  },
  installEffort: 'installer',
  installOn: ['mac', 'win'],
  installEvidence: 'github.com/koush/nvr.scrypted.app/releases v0.147.1 (2026-09-19, read 2026-11-01): Scrypted-0.147.1-arm64.dmg, Scrypted-0.147.1-x64.dmg, Scrypted-0.147.1.Setup.exe, scrypted-electron_0.147.1_amd64.deb / arm64.deb; docs.scrypted.app/install/desktop-app: "The recommended installation method for Mac and Windows is the Desktop App ... requires a paid license". Linux, Proxmox VE, Unraid and NAS installs use Docker or a Proxmox script (docs.scrypted.app/installation); Docker Desktop on Mac/Windows is explicitly unsupported',
  tagline: {
    en: 'Open-source camera and NVR platform that streams cameras to HomeKit, Google Home and Home Assistant, with optional local LLM summaries via llama.cpp',
    de: 'Quelloffene Kamera- und NVR-Plattform, die Kameras an HomeKit, Google Home und Home Assistant streamt, mit optionalen lokalen LLM-Zusammenfassungen über llama.cpp',
    fr: 'Plateforme de caméras et NVR open source qui diffuse les caméras vers HomeKit, Google Home et Home Assistant, avec résumés LLM locaux optionnels via llama.cpp',
    ja: 'カメラをHomeKit・Google Home・Home Assistantへ配信するオープンソースのカメラ/NVRプラットフォーム。llama.cppによるローカルLLM要約も任意で利用可能',
    zh: '开源摄像头与 NVR 平台，可将摄像头画面推送到 HomeKit、Google Home 和 Home Assistant，并可通过 llama.cpp 使用本地 LLM 摘要',
    es: 'Plataforma de cámaras y NVR de código abierto que envía las cámaras a HomeKit, Google Home y Home Assistant, con resúmenes LLM locales opcionales mediante llama.cpp',
    pt: 'Plataforma de câmeras e NVR de código aberto que envia as câmeras para HomeKit, Google Home e Home Assistant, com resumos de LLM locais opcionais via llama.cpp',
    ar: 'منصة كاميرات وNVR مفتوحة المصدر تبث الكاميرات إلى HomeKit وGoogle Home وHome Assistant، مع ملخصات LLM محلية اختيارية عبر llama.cpp',
    ko: '카메라를 HomeKit, Google Home, Home Assistant로 스트리밍하는 오픈소스 카메라·NVR 플랫폼으로, llama.cpp를 통한 로컬 LLM 요약을 선택적으로 지원',
  },
  reviewSlug: 'scrypted-review',
  pqReview: {
    date: '2026-11-01',
    version: '0.147.1',
    versionSourceUrl: 'https://github.com/koush/nvr.scrypted.app/releases/tag/v0.147.1',
  },
  verdict: 'Best for people with local RTSP/ONVIF cameras who want them in HomeKit, Google Home or Home Assistant and are willing to pay for the NVR and desktop app; it is a video platform, not an LLM app, so local AI is limited to detection and optional AI Summaries that need 12 GB of VRAM or 16 GB of Apple Silicon memory for local models, and PromptQuorum could not test any of it.',
  lastVerifiedDate: '2026-11-01',
  lastUpstreamUpdate: '2026-11-01', // GitHub API: koush/scrypted pushed_at 2026-11-01 (latest release tag v0.147.0 2026-09-13; desktop app v0.147.1 2026-09-19), read 2026-11-01
  lastUpstreamUpdateSource: 'https://github.com/koush/scrypted',
}
