// Local AI App Directory — Immich: self-hosted photo and video backup with smart search and face recognition that run on your own server
// (layer: photo library server + iOS/Android apps, Images & Video / Vision & OCR + Local search)
// Added 2026-10-26 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-26 against: immich.app (home, privacy policy [last updated 2026-04-06; text read from the site's JS bundle]), docs.immich.app
// (overview/introduction, install/requirements, install/docker-compose, features/smart-search, facial-recognition, searching, reverse-geocoding,
// ml-hardware-acceleration, administration/system-settings, install/environment-variables, FAQ, overview/support-the-project), the GitHub repo and
// Releases API (immich-app/immich: v3.3.5 published 2026-10-21T18:12Z, pushed_at 2026-10-26T19:29Z, AGPL-3.0, release assets include app-release.apk,
// docker-compose.yml, example.env, hwaccel.ml.yml), the App Store record (iTunes lookup id1613945652: v3.3.5 released 2026-10-21, seller FUTO Holdings, Inc.,
// free, iOS 15.0+, first release 2022-03-12) and the Google Play listing app.alextran.immich ("Updated on Oct 20, 2026", 500K+ downloads).
// Last upstream update: 2026-10-26 (newer of latest release 2026-10-21 and last push) -> NOT stale (3-month rule).
// Immich is NOT an LLM app: its "AI" is CLIP-style smart search and face recognition models in a separate machine-learning container. No chat, no LLM
// features were found in the docs. Listed because the models run on the user's own server (same reasoning as PhotoPrism and Ente Photos).
// Conflicts/gaps stated in the review rather than resolved: the docs pages read do not say outright that smart search is local (they say the model is
// downloaded once and then needs no network unless version check is on); the docs call the ML hardware acceleration "experimental"; the Play data-safety
// section and the Purchase page (buy.immich.app, client-rendered) could not be read, so purchase prices are not stated.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'immich',
  name: 'Immich',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['web', 'mobile', 'cli'], // browser UI served by your own server, iOS and Android apps for backup and browsing, plus an immich CLI for bulk upload
  locality: 'local', // library, smart-search and face-recognition models stay on your server (docs); optional outbound: GitHub version check, FUTO tile server (can be disabled), model downloads from Hugging Face
  platforms: ['linux', 'ios', 'android', 'web'], // the server runs in Docker (64-bit Linux recommended; macOS/Windows via Docker Desktop are "possible but discouraged" per install/requirements); clients are the mobile apps and any browser
  worksWith: ['Docker', 'PostgreSQL', 'VectorChord', 'Google Takeout (immich-go)', 'OAuth/OIDC'], // install and overview docs
  engine: 'builtin', // CLIP smart search and face detection/recognition run in the bundled immich-machine-learning container; models download on first use (Hugging Face)
  license: 'AGPL-3.0', // docs introduction + GitHub API licence
  price: 'free', // docs: "all features will be free, forever"; "Nothing will ever be put behind any paywalls"; buying a licence is voluntary support
  hardware: { ramGb: 6, vramGb: null, cpuOnly: true }, // docs: minimum 6 GB RAM and 2 cores, recommended 8 GB and 4 cores; with 4 GB you can run it with machine learning disabled; GPU acceleration optional
  stars: 117311, // GitHub API stargazers_count, read 2026-10-26
  addedDate: '2026-10-26',
  status: 'listed',
  uses: ['image', 'serve'],
  url: 'immich.app',
  storeLinks: {
    appStore: 'https://apps.apple.com/us/app/immich/id1613945652',
    googlePlay: 'https://play.google.com/store/apps/details?id=app.alextran.immich',
    github: 'https://github.com/immich-app/immich',
    web: 'https://immich.app',
  },
  installEffort: 'terminal-setup',
  installEvidence: 'docs.immich.app/install/docker-compose and GitHub Releases v3.3.5 checked 2026-10-26: server = make a folder, download docker-compose.yml and example.env (release assets), edit .env (UPLOAD_LOCATION, DB_PASSWORD), run docker compose up -d; the iOS/Android apps (App Store id1613945652, Google Play app.alextran.immich, app-release.apk) are store installs but need that server',
  tagline: {
    en: 'Self-hosted photo and video backup with iPhone and Android apps, whose smart search and face recognition run on your own server, installed with Docker',
    de: 'Selbst gehostete Foto- und Video-Sicherung mit iPhone- und Android-Apps, deren Smart Search und Gesichtserkennung auf dem eigenen Server laufen, Installation per Docker',
    fr: 'Sauvegarde de photos et de vidéos auto-hébergée avec applications iPhone et Android, dont la recherche intelligente et la reconnaissance faciale s’exécutent sur votre propre serveur, installée avec Docker',
    ja: '自分のサーバーで動かすセルフホスト型の写真・動画バックアップ。iPhone/Androidアプリ付きで、スマート検索と顔認識は自分のサーバー上で動作し、Dockerでインストールします',
    zh: '自托管的照片与视频备份方案，提供 iPhone 和 Android 应用，智能搜索与人脸识别在自己的服务器上运行，通过 Docker 安装',
    es: 'Copia de seguridad de fotos y vídeos autoalojada con apps para iPhone y Android, cuya búsqueda inteligente y reconocimiento facial se ejecutan en tu propio servidor; se instala con Docker',
    pt: 'Backup de fotos e vídeos auto-hospedado com apps para iPhone e Android, cuja busca inteligente e reconhecimento facial rodam no seu próprio servidor, instalado com Docker',
    ar: 'نسخ احتياطي للصور والفيديو مستضاف ذاتيًا مع تطبيقات iPhone وAndroid، يعمل البحث الذكي والتعرف على الوجوه فيه على خادمك الخاص، ويُثبَّت عبر Docker',
    ko: 'iPhone·Android 앱을 갖춘 셀프 호스팅 사진·동영상 백업으로, 스마트 검색과 얼굴 인식이 내 서버에서 실행되며 Docker로 설치합니다',
  },
  compare: { ocr: true }, // docs/features/searching lists OCR ("Text in images") as a search type; how it works is not described in the page read
  reviewSlug: 'immich-review',
  pqReview: {
    date: '2026-10-26',
    version: 'v3.3.5',
    versionSourceUrl: 'https://github.com/immich-app/immich/releases',
  },
  verdict: 'Best for self-hosters comfortable with Docker who want a free, AGPL-licensed Google-Photos-style library with phone backup, CLIP smart search and face recognition on their own server; limited by a multi-step server setup, the docs\' own warning that the database is not a backup of your files, an experimental GPU-acceleration layer, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-10-26',
  lastUpstreamUpdate: '2026-10-26', // GitHub API pushed_at 2026-10-26T19:29Z; latest release v3.3.5 published 2026-10-21
  lastUpstreamUpdateSource: 'https://github.com/immich-app/immich',
}
