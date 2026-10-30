// Local AI App Directory — Tonfotos: photo and video archive manager for Windows, macOS and Linux with face recognition that runs on your own computer
// (layer: desktop app, Images & Video / Vision & OCR + Local search)
// Added 2026-10-30 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-30 against: tonfotos.com (home: Windows/macOS/Linux, "no mandatory cloud storage"; Free = $0 with a limited number of tagged people and anonymous usage statistics,
// Personal $59 perpetual 1 user/device, Family $159 up to 5 users/devices; companion TonfotosSync iOS/Android app), tonfotos.com/docs/faq/ ("Tonfotos processes your photos right where they
// are and never sends them anywhere"; face recognition "powered by artificial intelligence running locally on your machine"; app contacts the developer's server for version updates and
// license management; paid versions can switch off statistics and automatic updates), tonfotos.com/download.html (Windows x64 tonfotos.exe, macOS Intel + Apple silicon tonfotos.dmg, Linux x64
// .deb/.rpm; page shows "Version 0.0.0" = placeholder; Windows CUDA plugin separate), tonfotos.com/legal/privacy-policy/ (published 11 Sep 2024; controller Private Entrepreneur Andrey Isaev,
// Yerevan, Armenia; crash reports can include tagged people's names and file/folder names), tonfotos.com/docs/reference supported formats.
// Version: the site shows no real version. Read from the installers themselves 2026-10-30: macOS tonfotos.dmg (Intel) Info.plist CFBundleShortVersionString 1.17.1, HTTP Last-Modified 28 Oct 2026;
// Linux tonfotos.deb control file Version 1.17.0, Last-Modified 21 Oct 2026; Windows tonfotos.exe Last-Modified 25 Sep 2026 (version not inspected); macOS arm64 dmg Last-Modified 15 Sep 2026
// (version not inspected). Tonfotos publishes no changelog or dated release notes, so the 28 Oct 2026 file date is the only dated primary-source signal => stale warning OFF.
// Price: USD figures are from the official home page; checkout is via Pay Pro Global and may show other currencies (not checked). A third-party review page showed older $39/$99 prices — ignored.
// Not stated by Tonfotos and therefore NOT claimed: the free tier's people limit, system requirements, the face-recognition model, whether the app works offline after activation. Affiliate: none.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'tonfotos',
  name: 'Tonfotos',
  categories: ['vision-ocr', 'local-search'],
  interfaces: ['desktop'], // standalone installer app for Windows, macOS and Linux; TonfotosSync is a separate phone companion for importing photos
  locality: 'local', // vendor docs: photos are processed "right where they are and never sent anywhere", face recognition runs locally; the app still contacts the developer's server for update and license checks
  platforms: ['linux', 'mac', 'win'], // download page: Windows 10/11 x64, macOS 10.15+ (Intel and Apple silicon), Linux x64 .deb/.rpm
  worksWith: ['TonfotosSync (iOS, Android)', 'Telegram', 'Picasa (import)'], // docs: smartphone import via TonfotosSync, Telegram downloader, Picasa migration
  engine: 'builtin', // face recognition ships inside the app; the model is not named; optional CUDA acceleration on Windows via a separate plugin
  license: 'Closed source', // proprietary commercial software, no public repository
  price: 'freemium', // Free tier with no time limit but a limited number of tagged people; Personal $59 and Family $159 perpetual licences
  hardware: { ramGb: null, vramGb: null, cpuOnly: null }, // no system requirements published; CUDA GPU optional on Windows
  stars: null, // no public repository
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['image'],
  url: 'tonfotos.com',
  storeLinks: {
    web: 'https://tonfotos.com/',
  },
  installEffort: 'installer',
  installEvidence: 'tonfotos.com/download.html checked 2026-10-30: tonfotos.exe (Windows 10/11 x64), tonfotos.dmg (Intel and Apple silicon, macOS 10.15+), tonfotos.deb and tonfotos.rpm (Linux x64) on cdn.tonfotos.com; installers inspected: macOS Intel build is 1.17.1, Linux .deb is 1.17.0; automatic updates on Windows and macOS only, Linux via an apt/yum repository',
  tagline: {
    en: 'Photo and video archive manager for Windows, macOS and Linux with duplicate removal, family trees and face recognition that runs on your own computer; free tier or one-time licence',
    de: 'Foto- und Videoarchiv-Manager für Windows, macOS und Linux mit Duplikatentfernung, Stammbäumen und Gesichtserkennung, die auf dem eigenen Computer läuft; Gratis-Version oder Einmallizenz',
    fr: 'Gestionnaire d’archives photo et vidéo pour Windows, macOS et Linux avec suppression des doublons, arbres généalogiques et reconnaissance faciale exécutée sur votre ordinateur ; version gratuite ou licence unique',
    ja: 'Windows・macOS・Linux向けの写真・動画アーカイブ管理ソフト。重複削除、家系図、自分のコンピューター上で動作する顔認識を備え、無料版または買い切りライセンスがあります',
    zh: '适用于 Windows、macOS 和 Linux 的照片与视频归档管理软件，支持去重、家谱和在自己电脑上运行的人脸识别；提供免费版或一次性授权',
    es: 'Gestor de archivo de fotos y vídeos para Windows, macOS y Linux con eliminación de duplicados, árboles genealógicos y reconocimiento facial que se ejecuta en tu propio ordenador; versión gratuita o licencia única',
    pt: 'Gerenciador de arquivo de fotos e vídeos para Windows, macOS e Linux com remoção de duplicatas, árvores genealógicas e reconhecimento facial que roda no seu próprio computador; versão gratuita ou licença única',
    ar: 'برنامج لإدارة أرشيف الصور والفيديو على Windows وmacOS وLinux، يتيح إزالة المكررات وشجرة العائلة والتعرف على الوجوه على حاسوبك الخاص؛ نسخة مجانية أو ترخيص لمرة واحدة',
    ko: 'Windows·macOS·Linux용 사진·동영상 아카이브 관리 소프트웨어로, 중복 제거, 가계도, 내 컴퓨터에서 실행되는 얼굴 인식을 제공하며 무료 버전 또는 일회성 라이선스가 있습니다',
  },
  compare: {}, // no category-specific attribute confirmed for this segment yet
  reviewSlug: 'tonfotos-review',
  pqReview: {
    date: '2026-10-30',
    version: '1.17.1', // macOS Intel installer Info.plist read 2026-10-30; Linux .deb is 1.17.0; tonfotos.com shows the placeholder "0.0.0"
    versionSourceUrl: 'https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg',
  },
  verdict:
    'Best for people with large family photo archives on Windows, macOS or Linux who want face tagging, duplicate removal and a family tree on their own computer, with a free tier and a perpetual licence instead of a subscription. Limits: closed source, the free tier caps the number of tagged people, the app contacts the developer for update and license checks and crash reports can include tagged names, the website shows no version or changelog, system requirements are not published, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-28', // HTTP Last-Modified of the macOS Intel installer (v1.17.1) on cdn.tonfotos.com, read 2026-10-30; Tonfotos publishes no dated changelog
  lastUpstreamUpdateSource: 'https://cdn.tonfotos.com/distribution/tonfotos/release/latest/darwin/x64/tonfotos.dmg',
}
