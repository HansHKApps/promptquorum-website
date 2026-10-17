// Local AI App Directory — Easy Diffusion (layer: image generation)
// Added 2026-10-17 alongside easy-diffusion-review.ts. Facts verified on 2026-10-17 against
// easydiffusion.github.io, the GitHub API (easydiffusion/easydiffusion: repo, releases, tags),
// the repo README and its LICENSE file.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'easy-diffusion',
  name: 'Easy Diffusion',
  categories: ['image-generation'],
  interfaces: ['web', 'desktop'], // installer sets up a local server whose browser UI you open, verified 2026-10-17
  locality: 'local',
  platforms: ['linux', 'mac', 'win'],
  worksWith: ['Stable Diffusion', 'Flux'], // README: SD 1.x/2.1/XL; v4 engine adds Flux 1/2, Z-Image, Lumina and others, verified 2026-10-17
  engine: 'builtin', // installs and manages its own Stable Diffusion backend, verified 2026-10-17
  license: 'Custom (MIT-style grant + CreativeML Open RAIL-M use restrictions)', // LICENSE file Section I (MIT text) + Section II use-based restrictions; GitHub reports "Other", verified 2026-10-17
  price: 'free',
  hardware: { ramGb: 8, vramGb: 2, cpuOnly: true, variesByModel: true }, // README: 8 GB system RAM, 25 GB disk, "NVIDIA or AMD graphics card (minimum 2 GB RAM), or run on your CPU", verified 2026-10-17
  stars: 10472, // github.com/easydiffusion/easydiffusion, GitHub API 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['image'],
  url: 'easydiffusion.github.io',
  storeLinks: { github: 'https://github.com/easydiffusion/easydiffusion' },
  installEffort: 'installer', // see InstallEffortKey in ./types.ts
  installOn: ['win'], // Windows is the double-click .exe; macOS and Linux ship a zip started with ./start.sh in a terminal
  installEvidence: 'README Installation + GitHub release v3.0.16 assets: Easy-Diffusion-Windows.exe, Easy-Diffusion-Mac.zip, Easy-Diffusion-Linux.zip. Windows is a double-click .exe; Mac/Linux unzip and run ./start.sh in a terminal (hence not installer on those two), checked 2026-10-17',
  tagline: {
    en: 'Free one-click installer for Stable Diffusion with a browser UI, task queue and plugins',
    de: 'Kostenloser Ein-Klick-Installer für Stable Diffusion mit Browser-Oberfläche, Aufgabenwarteschlange und Plugins',
    fr: 'Installeur gratuit en un clic pour Stable Diffusion, avec interface web, file de tâches et plugins',
    ja: 'ブラウザUI・タスクキュー・プラグインを備えた、Stable Diffusion向けの無料ワンクリックインストーラー',
    zh: '免费的Stable Diffusion一键安装器，附带浏览器界面、任务队列和插件',
    es: 'Instalador gratuito de un clic para Stable Diffusion con interfaz web, cola de tareas y plugins',
    pt: 'Instalador gratuito de um clique para Stable Diffusion com interface web, fila de tarefas e plugins',
    ar: 'مُثبّت مجاني بنقرة واحدة لـ Stable Diffusion مع واجهة متصفح وقائمة مهام وإضافات',
    ko: '브라우저 UI, 작업 대기열, 플러그인을 갖춘 Stable Diffusion용 무료 원클릭 설치 프로그램',
  },
  pqReview: { date: '2026-10-17', version: 'v3.0.16', versionSourceUrl: 'https://github.com/easydiffusion/easydiffusion/releases/tag/v3.0.16' },
  reviewSlug: 'easy-diffusion-review', // dedicated PromptQuorum review
  // Comparison attributes: each value verified against the project's README on 2026-10-17; a missing key = not stated there, never false.
  compare: { inpainting: true, extensions: true, lowVram: true },
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-15', // GitHub API: last push 2026-10-15; latest release v3.0.16 on 2026-03-31, read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/easydiffusion/easydiffusion',
}
