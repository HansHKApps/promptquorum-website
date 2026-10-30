// Local AI App Directory — Krita AI Diffusion (Interstice): open-source Krita plugin for inpainting, live painting and upscaling with diffusion models (layer: image generation, NOT an LLM)
// Added 2026-10-30. Facts verified 2026-10-30 against interstice.cloud (home, /service, /privacy last updated 2024-04-04, /imprint), docs.interstice.cloud/installation,
// the GitHub repo Acly/krita-ai-diffusion (README, GPL-3.0 licence, GitHub API: 10,807 stars, newest default-branch commit 2026-10-03, Release v1.53.0 published 2026-08-22,
// release asset krita_ai_diffusion-1.53.0.zip "for Krita 5"). interstice.cloud is both the plugin's homepage (GitHub homepage field) and the paid online GPU service run by
// Cosmic Interstice UG (haftungsbeschränkt), Mannheim (imprint). Local use needs Krita 5.2+ and either the plugin's managed ComfyUI server or an existing ComfyUI server.
// Not an LLM: the plugin drives diffusion image models (README: Flux 2, Z-Image, Stable Diffusion 1.5/XL, Illustrious). Listed because the directory already carries local image generators.
// No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'krita-ai-diffusion',
  name: 'Krita AI Diffusion',
  categories: ['image-generation'],
  interfaces: ['plugin'],
  locality: 'hybrid', // runs on your own GPU through a managed or custom ComfyUI server, or on the paid Interstice.cloud GPU service chosen in the plugin's Configure dialog
  platforms: ['mac', 'win', 'linux'],
  worksWith: ['Krita', 'ComfyUI'],
  engine: 'builtin', // installs and drives its own ComfyUI backend ("Local Managed Server"); an existing ComfyUI server can be used instead
  license: 'GPL 3.0',
  price: 'freemium', // plugin and local use free; optional Interstice.cloud token packs (EUR 10 for 5,000 tokens, EUR 28 for 15,000, no subscription) read 2026-10-30
  hardware: { ramGb: null, vramGb: 6, cpuOnly: true }, // README: "at least 6 GB VRAM (NVIDIA) is recommended"; docs: NVIDIA RTX 2060 or better, Apple Silicon M1-M5, Intel Arc 8 GB+, AMD via ROCm, CPU "works but is very slow"; at least 10 GB disk for the server, models can take 50 GB or more; read 2026-10-30
  stars: 10807, // GitHub API read 2026-10-30
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['image'],
  url: 'interstice.cloud',
  storeLinks: {
    github: 'https://github.com/Acly/krita-ai-diffusion',
    web: 'https://www.interstice.cloud',
  },
  tagline: {
    en: 'Open-source Krita plugin for inpainting, live painting and upscaling with diffusion models, run on your own GPU or on the paid Interstice.cloud service',
    de: 'Quelloffenes Krita-Plugin für Inpainting, Live-Malen und Hochskalieren mit Diffusionsmodellen, auf der eigenen GPU oder im kostenpflichtigen Dienst Interstice.cloud',
    fr: 'Plugin Krita open source pour l’inpainting, la peinture en direct et l’upscaling avec des modèles de diffusion, sur votre propre GPU ou via le service payant Interstice.cloud',
    ja: 'Krita用のオープンソースプラグイン。拡散モデルによるインペイント、ライブペイント、アップスケールを、自分のGPUまたは有料のInterstice.cloudで実行できます',
    zh: '开源的 Krita 插件，用扩散模型进行局部重绘、实时绘画和放大，可在自己的 GPU 上运行，也可使用付费的 Interstice.cloud 服务',
    es: 'Plugin de código abierto para Krita que hace inpainting, pintura en vivo y ampliación con modelos de difusión, en tu propia GPU o en el servicio de pago Interstice.cloud',
    pt: 'Plugin de código aberto para o Krita com inpainting, pintura ao vivo e ampliação usando modelos de difusão, na sua própria GPU ou no serviço pago Interstice.cloud',
    ar: 'إضافة مفتوحة المصدر لبرنامج Krita للتلوين الداخلي والرسم المباشر والتكبير بنماذج الانتشار، تعمل على بطاقتك الرسومية أو على خدمة Interstice.cloud المدفوعة',
    ko: '확산 모델로 인페인팅, 라이브 페인팅, 업스케일을 지원하는 오픈소스 Krita 플러그인으로, 내 GPU 또는 유료 Interstice.cloud 서비스에서 실행합니다',
  },
  compare: { inpainting: true }, // README (read 2026-10-30): "Inpainting: Use selections for generative fill, expand, to add or remove objects"; other attributes not stated there, so left unset
  reviewSlug: 'krita-ai-diffusion-review',
  pqReview: {
    date: '2026-10-30',
    version: '1.53.0',
    versionSourceUrl: 'https://github.com/Acly/krita-ai-diffusion/releases/latest',
  },
  verdict: 'Best for painters who already work in Krita and want selection-based generative fill and live painting with open models on their own GPU; limited by a plugin install that needs Krita 5.2 or newer plus a multi-gigabyte model download, a 6 GB VRAM recommendation, and no PromptQuorum testing of output quality, speed or privacy claims.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-03', // newest default-branch commit (GitHub API, read 2026-10-30); latest release v1.53.0 published 2026-08-22
  lastUpstreamUpdateSource: 'https://github.com/Acly/krita-ai-diffusion/commits/main',
}
