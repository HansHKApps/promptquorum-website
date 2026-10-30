// Local AI App Directory — Home-Gallery: self-hosted photo and video web gallery with tagging and AI image discovery (similar-image search, object and face detection)
// (layer: photo library server you run yourself; the AI step is done by an API server that defaults to the project's public api.home-gallery.org, Images & Video / Local search)
// Added 2026-10-30 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-30 against: home-gallery.org (home, /docs/install/binary.html, /docs/api-server, /docs/configuration), the GitHub repo and API
// (xemle/home-gallery: homepage home-gallery.org, license MIT, pushed_at 2026-10-13T21:02Z, latest commit 2026-10-13T21:02Z, not archived),
// README.md (Links, Binary Downloads, "External Services and Privacy", Limits), tags v1.21.0 / v1.20.0 / v1.19.0 (the repo has NO GitHub Releases: releases/latest returns 404),
// tag v1.21.0 commit date 2026-03-01T11:03Z, and the download index dl.home-gallery.org/dist/ (directory "1.21.0/" and "latest/" both dated 01-Mar-2026).
// Last upstream update: 2026-10-13 (newer of latest tag/build 2026-03-01 and last push 2026-10-13) -> NOT stale (3-month rule, 17 days old on 2026-10-30).
// The last push is a code commit on the default branch, not a new tagged version: the newest tagged/built version is still v1.21.0 from 2026-03-01 (stated in the review).
// Data flow, per the README: reverse image lookup (similar image search), object detection and face recognition call the project's public API at api.home-gallery.org and
// "all preview images are send to this public API by default. No images or privacy data are kept" (the project's own statement, not verified by PromptQuorum). Geo reverse lookups
// call Nominatim (coordinates only). The API server can run locally (Docker image xemle/home-gallery-api-server, amd64 + arm64) and extractor.apiServer.url points the gallery at it;
// extractor.apiServer.disable accepts similarDetection, objectDetection, faceDetection. Locality is therefore 'hybrid' out of the box and local once you self-host the API server.
// The API-server docs name no models and no hardware requirements; the Docker run was not tested by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'home-gallery',
  name: 'Home-Gallery',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['web', 'cli'], // browser gallery (installable PWA) on port 3000, started and fed from a command-line tool (gallery run init / gallery run server)
  locality: 'hybrid', // README: similar-image search, object detection and face recognition send preview images to api.home-gallery.org by default; the API server can be self-hosted (Docker) so it stays local
  platforms: ['linux', 'mac', 'win', 'web'], // README: prebuilt binaries for Linux, macOS (darwin-x64) and Windows (win-x64.exe) plus a Docker image; website lists Docker, Linux, Mac, Windows, PWA; Raspberry Pi mentioned in the README
  worksWith: ['Docker', 'Node.js', 'OpenStreetMap Nominatim'], // README + docs: Docker image and compose, Node.js 20 LTS for source builds, Nominatim for reverse geocoding
  engine: 'external', // the AI work is done by a separate API server (public api.home-gallery.org by default, or a self-hosted xemle/home-gallery-api-server container), not by the gallery process itself
  license: 'MIT', // GitHub API license MIT; README "MIT License" link
  price: 'free', // no paid tier found on the website, README or docs
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // docs publish no RAM minimum or GPU requirement (README names Raspberry Pi as a supported host); the API-server docs state no hardware needs for a local install
  stars: 1209, // GitHub API stargazers_count, read 2026-10-30
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['image', 'serve'],
  url: 'home-gallery.org',
  storeLinks: {
    github: 'https://github.com/xemle/home-gallery',
    web: 'https://home-gallery.org/',
  },
  installEffort: 'one-command',
  installEvidence: 'README "Binary Downloads" and home-gallery.org/docs/install/binary.html checked 2026-10-30: download one self-contained binary from dl.home-gallery.org/dist/latest (home-gallery-latest-linux-x64, -darwin-x64, -win-x64.exe, x64 only), chmod it on Linux/macOS, then ./gallery run init --source ~/Pictures and ./gallery run server, open localhost:3000; a Docker image (xemle/home-gallery) and a docker-compose guide also exist; no GitHub Releases and no .dmg/.msi/store app, so it is a terminal-run binary, not a double-click installer; the docs warn that macOS or Windows antivirus may block the unsigned binary',
  tagline: {
    en: 'Self-hosted photo and video web gallery with tagging, similar-image search and face detection, run from a downloaded binary or Docker; the AI step uses the public api.home-gallery.org by default',
    de: 'Selbst gehostete Foto- und Video-Webgalerie mit Tags, Ähnlichkeitssuche und Gesichtserkennung, gestartet per heruntergeladener Binärdatei oder Docker; der KI-Schritt nutzt standardmäßig die öffentliche api.home-gallery.org',
    fr: "Galerie web de photos et de vidéos auto-hébergée avec étiquettes, recherche d'images similaires et détection des visages, lancée depuis un binaire téléchargé ou Docker ; l'étape d'IA utilise par défaut l'API publique api.home-gallery.org",
    ja: 'タグ付け、類似画像検索、顔検出を備えたセルフホスト型の写真・動画ウェブギャラリー。ダウンロードしたバイナリまたはDockerで起動します。AI処理は既定で公開APIのapi.home-gallery.orgを使います',
    zh: '自托管的照片与视频网页图库，支持标签、相似图片搜索和人脸检测，通过下载的二进制文件或 Docker 运行；AI 步骤默认使用公共 API api.home-gallery.org',
    es: 'Galería web autoalojada de fotos y vídeos con etiquetas, búsqueda de imágenes similares y detección de caras, que se inicia con un binario descargado o con Docker; el paso de IA usa por defecto la API pública api.home-gallery.org',
    pt: 'Galeria web auto-hospedada de fotos e vídeos com etiquetas, busca de imagens semelhantes e detecção de rostos, iniciada por um binário baixado ou Docker; a etapa de IA usa por padrão a API pública api.home-gallery.org',
    ar: 'معرض ويب مستضاف ذاتيًا للصور والفيديو مع وسوم وبحث عن صور مشابهة وكشف الوجوه، يُشغَّل من ملف تنفيذي منزَّل أو عبر Docker؛ وتستخدم خطوة الذكاء الاصطناعي افتراضيًا الواجهة العامة api.home-gallery.org',
    ko: '태그, 유사 이미지 검색, 얼굴 감지를 갖춘 셀프 호스팅 사진·동영상 웹 갤러리로, 내려받은 바이너리 또는 Docker로 실행하며 AI 단계는 기본적으로 공개 API api.home-gallery.org를 사용합니다',
  },
  reviewSlug: 'home-gallery-review',
  pqReview: {
    date: '2026-10-30',
    version: 'v1.21.0',
    versionSourceUrl: 'https://github.com/xemle/home-gallery/tags',
  },
  verdict: 'Best for self-hosters comfortable with a terminal who want a free, MIT-licensed web gallery for a large photo and video folder with tagging, similar-image search and face detection; limited by the fact that, by the project\'s own README, preview images go to its public api.home-gallery.org by default unless you run the API server yourself, a terminal-run binary instead of an installer, a newest tagged version from March 2026, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-13', // GitHub API pushed_at 2026-10-13T21:02Z; newest tag v1.21.0 and its build are dated 2026-03-01
  lastUpstreamUpdateSource: 'https://github.com/xemle/home-gallery',
}
