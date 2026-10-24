// Local AI App Directory — PhotoPrism: self-hosted AI photo and video manager (layer: photo library server with built-in on-device AI, Images & Video / Local search)
// Added 2026-10-24. Facts verified 2026-10-24 against photoprism.app (home, /editions, /privacy [last updated 2026-08-19], /teams),
// docs.photoprism.app (getting-started, docker-compose, AI models, release notes, native-apps) and the GitHub repo/Releases API
// (photoprism/photoprism). Latest stable build per the release notes and the GitHub release: 261007-65faaae5d, published 2026-10-07
// (assets: photoprism_261007-65faaae5d-linux-amd64.tar.gz and -linux-arm64.tar.gz; the docs steer users to the Docker image instead).
// A development preview (build 261023-f0a4f41e5) is listed above it in the release notes and is not the stable build.
// GitHub API pushed_at 2026-10-24T08:48Z (develop branch) -> lastUpstreamUpdate. GitHub's licence detector says "Other"; the README badge,
// the docs licence page and the editions page state AGPL-3.0 for the Community edition.
// Membership prices as the editions page shows them (EUR, no other currency offered there): Community free, Essentials EUR 2.00/month,
// Plus from EUR 6.00/month, PikaPods managed hosting from USD 6.50/month; Teams Starter EUR 79/month (not reviewed in detail). Never FX-converted.
// Not hands-on tested by PromptQuorum. No `compare` block: the local-search sub-category has no photo-library attributes defined.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'photoprism',
  name: 'PhotoPrism',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['web', 'cli'], // browser UI / installable PWA served by your own server, plus a photoprism CLI; the iOS and Android apps in the docs are third-party
  locality: 'local', // library and built-in ONNX models stay on your server (privacy policy, docs); reverse geocoding and world maps contact PhotoPrism and MapTiler, and the optional OpenAI engine is cloud
  platforms: ['linux', 'mac', 'win', 'web'], // server runs wherever Docker runs (Linux, macOS, Windows, Raspberry Pi/ARM64, many NAS devices); clients are browsers
  worksWith: ['Docker', 'MariaDB', 'Ollama', 'OpenAI API', 'WebDAV', 'PhotoSync'], // getting-started, AI models and native-apps docs
  engine: 'both', // built-in ONNX models for labels, NSFW and faces; optional Ollama or OpenAI engines for captions and labels
  license: 'AGPL-3.0', // README badge + docs licence page; GitHub API reports "Other" (NOASSERTION)
  price: 'freemium', // free AGPL Community edition; paid personal memberships (Essentials, Plus) and team licences add features
  hardware: { ramGb: 3, vramGb: null, cpuOnly: true }, // docs: at least 2 cores, 3 GB RAM, 64-bit OS; built-in models run on CPU, NVIDIA GPU optional
  stars: 40351, // GitHub API stargazers_count, read 2026-10-24
  addedDate: '2026-10-24',
  status: 'listed',
  uses: ['image', 'serve'],
  url: 'photoprism.app',
  storeLinks: {
    github: 'https://github.com/photoprism/photoprism',
    web: 'https://www.photoprism.app',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'docs.photoprism.app/getting-started/docker-compose checked 2026-10-24: download a compose.yaml, edit it (admin password, volumes, database), run docker compose up -d, then open localhost:2342; Windows has a curl.exe + install.bat helper; GitHub release 261007-65faaae5d (2026-10-07) ships only linux-amd64/arm64 tar.gz packages, which the project calls intended for experienced users; no .dmg/.exe/store app',
  tagline: {
    en: 'Self-hosted, open-source photo and video library for your own server with built-in AI that labels pictures and recognizes faces locally, installed with Docker',
    de: 'Selbst gehostete Open-Source-Foto- und Videobibliothek für den eigenen Server mit integrierter KI, die Bilder verschlagwortet und Gesichter lokal erkennt, Installation per Docker',
    fr: "Bibliothèque de photos et de vidéos open source et auto-hébergée pour votre propre serveur, avec une IA intégrée qui étiquette les images et reconnaît les visages en local, installée avec Docker",
    ja: '自分のサーバーで動かすセルフホスト型のオープンソース写真・動画ライブラリ。内蔵AIが画像のラベル付けと顔認識をローカルで行い、Dockerでインストールします',
    zh: '运行在自己服务器上的自托管开源照片与视频库，内置 AI 在本地为图片打标签并识别人脸，通过 Docker 安装',
    es: 'Biblioteca de fotos y vídeos de código abierto y autoalojada para tu propio servidor, con una IA integrada que etiqueta imágenes y reconoce caras en local; se instala con Docker',
    pt: 'Biblioteca de fotos e vídeos de código aberto e auto-hospedada para o seu próprio servidor, com IA integrada que etiqueta imagens e reconhece rostos localmente, instalada com Docker',
    ar: 'مكتبة صور وفيديو مفتوحة المصدر ومستضافة ذاتيًا على خادمك، مع ذكاء اصطناعي مدمج يصنّف الصور ويتعرف على الوجوه محليًا، وتُثبَّت عبر Docker',
    ko: '내 서버에서 운영하는 셀프 호스팅 오픈소스 사진·동영상 라이브러리로, 내장 AI가 이미지에 라벨을 붙이고 얼굴을 로컬에서 인식하며 Docker로 설치합니다',
  },
  reviewSlug: 'photoprism-review',
  pqReview: {
    date: '2026-10-24',
    version: '261007-65faaae5d',
    versionSourceUrl: 'https://github.com/photoprism/photoprism/releases',
  },
  verdict: 'Best for self-hosters comfortable with Docker who want a private, searchable photo library with local AI tagging and face recognition and can accept a free Community edition; limited by a terminal-based setup, no native desktop or phone app from the project, location lookups and maps that contact outside servers, and AI quality and speed claims PromptQuorum could not test.',
  lastVerifiedDate: '2026-10-24',
  lastUpstreamUpdate: '2026-10-24', // GitHub API pushed_at 2026-10-24 (develop); latest stable release 261007-65faaae5d published 2026-10-07
  lastUpstreamUpdateSource: 'https://github.com/photoprism/photoprism',
}
