// Local AI App Directory — PixlStash (layer: image library manager with local AI tagging, face and semantic search)
// Added 2026-10-17 on Hans's request (link from localhosted.com; no maker contact). Facts verified on 2026-10-17 against
// pixlstash.dev (home, install, features, ai, whatsnew, privacy pages) and the GitHub repo/Releases API
// (pikselkroken/pixlstash). Not hands-on tested by PromptQuorum. The AI models are image tagging/captioning/embedding
// models (WD14, Florence-2, JoyCaption, OpenCLIP, InsightFace), not chat LLMs — hence the vision-ocr + local-search categories.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pixlstash',
  name: 'PixlStash',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['desktop', 'web', 'cli'], // desktop app (native window), headless server on localhost:9537 with browser UI, pixlstash-cli — install page 2026-10-17
  locality: 'local', // site: "Every model below runs on your own machine. Nothing is sent to an API"; privacy policy: no upload, update check and install ID off by default — attributed, not independently tested (2026-10-17)
  platforms: ['mac', 'win', 'linux'], // desktop app: Windows x64, macOS Apple Silicon only, Linux x86_64 (.AppImage/.deb); pip/Docker/source on all three
  worksWith: ['ComfyUI'], // two-way ComfyUI integration (site features + comfyui pages)
  engine: 'builtin', // ships and downloads its own models (PyTorch/ONNX backends chosen on first run)
  license: 'GPL-3.0', // GitHub API license.spdx_id, 2026-10-17; the website does not state a licence
  price: 'free', // no pricing on the site; GPL-3.0 source and free release downloads — verified 2026-10-17
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // site publishes no RAM/VRAM figure; desktop app includes a CPU runtime ("every model works offline on first launch"); NVIDIA CUDA optional, AMD ROCm experimental
  stars: 89, // github.com/pikselkroken/pixlstash, GitHub API 2026-10-17
  addedDate: '2026-10-17',
  status: 'listed',
  uses: ['image'],
  url: 'pixlstash.dev',
  storeLinks: {
    github: 'https://github.com/pikselkroken/pixlstash',
    web: 'https://pixlstash.dev/',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v1.11.5 (2026-10-08) assets PixlStash-desktop-1.11.5-win-x64.exe, -mac-arm64.dmg, -linux-x86_64.AppImage, -linux-amd64.deb; linked from pixlstash.dev/install.html — checked 2026-10-17',
  tagline: {
    en: 'Self-hosted image library manager with local AI tagging, captioning, face and semantic search, and ComfyUI integration',
    de: 'Selbst gehosteter Bildbibliotheks-Manager mit lokaler KI-Verschlagwortung, Beschriftung, Gesichts- und semantischer Suche und ComfyUI-Anbindung',
    fr: 'Gestionnaire de bibliothèque d’images auto-hébergé avec étiquetage, légendes, recherche par visage et sémantique en local, et intégration ComfyUI',
    ja: 'ローカルAIによるタグ付け・キャプション生成・顔検索・セマンティック検索とComfyUI連携を備えた、セルフホスト型の画像ライブラリ管理ツール',
    zh: '自托管图像库管理工具，本地AI打标签、生成描述、人脸与语义搜索，并集成ComfyUI',
    es: 'Gestor de bibliotecas de imágenes autoalojado con etiquetado, descripciones, búsqueda facial y semántica con IA local, e integración con ComfyUI',
    pt: 'Gerenciador de biblioteca de imagens auto-hospedado com marcação, legendas, busca facial e semântica com IA local e integração com ComfyUI',
    ar: 'مدير مكتبة صور مستضاف ذاتيًا مع وسم وتوصيف وبحث بالوجوه وبحث دلالي بالذكاء الاصطناعي المحلي وتكامل مع ComfyUI',
    ko: '로컬 AI 태깅·캡션·얼굴 검색·시맨틱 검색과 ComfyUI 연동을 지원하는 셀프호스팅 이미지 라이브러리 관리 도구',
  },
  reviewSlug: 'pixlstash-review', // dedicated PromptQuorum review
  pqReview: {
    date: '2026-10-17', // v1.11.5 = latest stable GitHub release on that date (published 2026-10-08); v1.12.0 release candidates exist but are pre-releases
    version: '1.11.5',
    versionSourceUrl: 'https://github.com/pikselkroken/pixlstash/releases/latest',
  },
  // Comparison attributes: each value taken from the project's own site/README on 2026-10-17; a missing key = not stated there, never false.
  compare: { apiServer: true }, // repo description: "serve data to other tools (like ComfyUI) with a REST API"; the site documents only per-library API tokens
  lastVerifiedDate: '2026-10-17',
  lastUpstreamUpdate: '2026-10-17', // GitHub API pushed_at 2026-10-17; newest tags are v1.12.0rc2 (2026-10-16, pre-release) and stable v1.11.5 (2026-10-08), read 2026-10-17
  lastUpstreamUpdateSource: 'https://github.com/pikselkroken/pixlstash',
}
