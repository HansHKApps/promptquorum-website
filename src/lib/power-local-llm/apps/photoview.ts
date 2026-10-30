// Local AI App Directory — Photoview: self-hosted, folder-based photo gallery with face recognition that runs inside the server
// (layer: photo gallery server, Images & Video / Vision & OCR + Local search)
// Added 2026-10-30 from the operator's Localhosted photo-app list (PromptQuorum entry; no maker outreach, no founder-review badge; not hands-on tested).
// Facts verified 2026-10-30 against: photoview.github.io (home), the GitHub repo and API (photoview/photoview: AGPL-3.0, default branch master,
// pushed_at 2026-10-29T19:14Z, latest master commit 2026-10-29T19:10Z), the Releases API (newest tagged release v2.4.0 "Project restart", published
// 2024-06-23, no release assets), README.md (features, supported platforms, databases, Docker/PostgreSQL notices, security advice, hardware acceleration),
// api/go.mod (only face/ML dependency found: github.com/Kagami/go-face), api/scanner/face_detection/face_detector_impl.go (local face.NewRecognizer, no network call),
// api/utils/environment_variables.go (PHOTOVIEW_DISABLE_FACE_RECOGNITION, PHOTOVIEW_FACE_RECOGNITION_MODELS_PATH, PHOTOVIEW_DISABLE_RAW_PROCESSING/VIDEO_ENCODING),
// api/data/models (3 dlib .dat files in the repo), docker-compose example/example.env (MAPBOX_TOKEN optional, "to enable map related features"),
// ui/package.json + ui/src/components/mapbox (mapbox-gl in the browser) and the Docker Hub tag list (latest, 2, 2.4, 2.4.0, master all pushed 2026-10-29).
// Last upstream update: 2026-10-29 (newer of latest release 2024-06-23 and last push) -> NOT stale (3-month rule). Recent master commits are mostly
// dependency bumps plus an EXIF GPS migration fix and a translation CI check.
// Photoview is NOT an LLM app: its only AI is dlib-based face recognition. Listed because the model runs on the user's own server (same reasoning as PhotoPrism,
// Immich and Facet). No privacy-policy page was found. What Mapbox receives, whether the Docker image bundles the model files, and real resource use are unverified.
// No `compare` block: the local-search sub-category has no photo-library attributes defined.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'photoview',
  name: 'Photoview',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['web'], // browser UI served by your own server; the README lists no desktop or mobile app
  locality: 'local', // library and face recognition (dlib via go-face) stay on your server; optional maps load Mapbox in the browser with a token you create
  platforms: ['linux', 'web'], // README: Docker, Debian 12/13, Ubuntu, Arch AUR, NixOS, Unraid, TrueNAS, YunoHost, EmbassyOS; clients are browsers
  worksWith: ['Docker', 'MariaDB', 'PostgreSQL', 'SQLite', 'Mapbox'], // README supported databases + example.env
  engine: 'builtin', // go-face (dlib) with model files from the repo; no external engine
  license: 'AGPL-3.0', // GitHub API + LICENSE.txt
  price: 'free', // no paid edition in the README or on the website
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // README gives no RAM/CPU minimum; no GPU requirement stated (hardware acceleration is optional and only for video transcoding)
  stars: 6559, // GitHub API stargazers_count, read 2026-10-30
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['image', 'serve'],
  url: 'photoview.github.io',
  storeLinks: {
    github: 'https://github.com/photoview/photoview',
    web: 'https://photoview.github.io/',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'README (Getting started — Setup with Docker) and docker-compose example folder checked 2026-10-30: download .env, docker-compose.yml and Makefile, edit them (database, media folders, optional MAPBOX_TOKEN), run make readable and make all, then finish the setup wizard on port 8000; GitHub release v2.4.0 (2024-06-23) has no assets, no .dmg/.exe/.AppImage or store app',
  tagline: {
    en: 'Self-hosted, folder-based photo gallery for your own server with face recognition that runs inside the server, installed with Docker',
    de: 'Selbst gehostete, ordnerbasierte Fotogalerie für den eigenen Server mit Gesichtserkennung, die im Server selbst läuft, Installation per Docker',
    fr: 'Galerie photo auto-hébergée fondée sur les dossiers pour votre propre serveur, avec une reconnaissance faciale exécutée dans le serveur, installée avec Docker',
    ja: '自分のサーバーで動かすフォルダ中心のセルフホスト型フォトギャラリー。顔認識はサーバー内で動作し、Dockerでインストールします',
    zh: '运行在自己服务器上的、按文件夹组织的自托管相册，人脸识别在服务器内部运行，通过 Docker 安装',
    es: 'Galería de fotos autoalojada y basada en carpetas para tu propio servidor, con reconocimiento facial que se ejecuta dentro del servidor; se instala con Docker',
    pt: 'Galeria de fotos auto-hospedada e baseada em pastas para o seu próprio servidor, com reconhecimento facial executado dentro do servidor, instalada com Docker',
    ar: 'معرض صور مستضاف ذاتيًا يعتمد على المجلدات لخادمك الخاص، مع تعرّف على الوجوه يعمل داخل الخادم، ويُثبَّت عبر Docker',
    ko: '내 서버에서 운영하는 폴더 기반 셀프 호스팅 사진 갤러리로, 얼굴 인식이 서버 안에서 실행되며 Docker로 설치합니다',
  },
  reviewSlug: 'photoview-review',
  pqReview: {
    date: '2026-10-30',
    version: '2.4.0',
    versionSourceUrl: 'https://github.com/photoview/photoview/releases',
  },
  verdict: 'Best for folder-minded self-hosters who already run Docker and want to browse, share and group RAW-heavy photo libraries by face on their own server; limited by a newest tagged release from June 2024, a multi-part setup with a database and environment file, face recognition as its only AI feature, maps that need a Mapbox token, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-29', // GitHub API pushed_at 2026-10-29T19:14Z (master); newest tagged release v2.4.0 published 2024-06-23
  lastUpstreamUpdateSource: 'https://github.com/photoview/photoview',
}
