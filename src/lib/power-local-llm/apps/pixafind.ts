// Local AI App Directory — PixaFind: on-device semantic search for files and photos on Windows, Mac and Linux (layer: desktop search app, embeddings-based)
// Added 2026-11-21. Facts verified 2026-11-21 against pixafind.com (home, pricing, FAQ, download links, privacy policy "Last updated: November 19, 2026", contact) and the
// GitHub Releases API of Ishannaik/pixafind-releases (latest tag v0.7.40, published 2026-11-21T19:33:01Z, Windows .msi only; v0.7.39 of 2026-11-21T17:04:51Z carries the full set:
// Windows .msi, Apple Silicon .dmg, Linux .AppImage and .deb). Latest version 0.7.40, released 2026-11-21 (today), so the 3-month stale warning is OFF.
// Prices (USD, pricing section): Free (1 folder, 2,000 files, text + image search, no account); Pro $12/month or $8/month billed yearly ($96/yr), up to 3 PCs;
// Team $15/seat/month or $12/seat/month billed yearly (3-seat minimum); Lifetime $249 once (Pro for one person on up to 2 PCs, licence key, no account).
// Local claim (home, FAQ, privacy policy): the AI models run on the PC (CPU, GPU optional on Windows), the index lives in the app data folder, files and what is inside them are never uploaded.
// Network use per the policy: one-time model download from Hugging Face, update check on GitHub, licence activation/sign-in (pay.pixafind.com), and PostHog usage counts, masked PostHog session
// replays and Sentry crash reports that are ON by default and can be switched off in Settings > Data & Privacy. The GitHub repo description says "zero telemetry"; the policy lists the three
// default-on services above, so the review states the policy version and hedges. Source code: closed (the repo only hosts release installers).
// Mac build: Apple Silicon only, "not notarized by Apple yet" per the home page (needs an xattr workaround). No iOS/Android.
// Not independently checked: network traffic, the app binary, search quality, speed, the 76+ formats and the "under 100 ms" claim. No hands-on testing by PromptQuorum.
// HQ country: NOT set. The privacy policy, contact page and footer ("Built by PixaLabs") name no company address or country; the only country-like details are US-hosted analytics vendors (owner decision pending).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'pixafind',
  name: 'PixaFind',
  categories: ['local-search', 'photo-libraries'],
  interfaces: ['desktop'],
  locality: 'local', // site + privacy policy: AI models run on the PC and the index stays on it; network is used for the model download, update checks, licence sign-in and default-on (switchable) analytics and crash reports
  platforms: ['win', 'mac', 'linux'], // Windows 10+, Apple Silicon Mac (macOS 12+), Linux x86_64 AppImage and .deb; no Intel Mac, iOS or Android
  worksWith: ['PDF', 'DOCX', 'XLSX', 'EPUB'], // reads 76+ file formats incl. PDF, DOCX, PPTX, XLSX, EPUB, source code, emails and images (site)
  engine: 'builtin', // ships its own local embedding models, downloaded from Hugging Face on first launch (about 2 GB of disk)
  license: 'Proprietary (closed source)', // site: "the desktop app is closed source"; the linked GitHub repo only hosts release installers
  price: 'freemium', // free tier (1 folder, 2,000 files); Pro $12/month ($8/month billed yearly); Team; $249 lifetime
  hardware: { ramGb: 4, vramGb: null, cpuOnly: true }, // site: 4 GB RAM, about 2 GB disk; GPU optional (Windows)
  stars: null, // no public source repository
  addedDate: '2026-11-21',
  status: 'listed',
  uses: ['docs', 'image'],
  url: 'pixafind.com',
  storeLinks: {
    web: 'https://pixafind.com',
    github: 'https://github.com/Ishannaik/pixafind-releases',
  },
  installEffort: 'installer',
  installEvidence: 'Download links + GitHub Releases v0.7.39 (2026-11-21) checked 2026-11-21: PixaFind-Setup-x64.msi, PixaFind_0.7.39_aarch64.dmg (Apple Silicon, not notarized: one-time xattr command on the home page), PixaFind-x86_64.AppImage and PixaFind-amd64.deb; standard installers, no terminal step except the Mac xattr workaround; AI models download on first launch',
  tagline: {
    en: 'Desktop app that finds your documents, photos and code by meaning instead of file name, with AI models that run on your own PC and an index that stays on it',
    de: 'Desktop-App, die Ihre Dokumente, Fotos und Code nach Bedeutung statt nach Dateinamen findet, mit KI-Modellen, die auf Ihrem eigenen PC laufen, und einem Index, der dort bleibt',
    fr: 'Application de bureau qui retrouve vos documents, photos et code par le sens plutôt que par le nom de fichier, avec des modèles d\'IA exécutés sur votre propre PC et un index qui y reste',
    ja: 'ファイル名ではなく意味でドキュメント、写真、コードを探すデスクトップアプリ。AIモデルはお使いのPC上で動作し、インデックスもPC内に残ります',
    zh: '桌面应用，按含义而非文件名查找文档、照片和代码；AI 模型在你自己的电脑上运行，索引也保存在本机',
    es: 'Aplicación de escritorio que encuentra tus documentos, fotos y código por significado en lugar de por nombre de archivo, con modelos de IA que se ejecutan en tu propio PC y un índice que permanece en él',
    pt: 'Aplicativo de desktop que encontra seus documentos, fotos e código pelo significado em vez do nome do arquivo, com modelos de IA executados no seu próprio PC e um índice que fica nele',
    ar: 'تطبيق سطح مكتب يعثر على مستنداتك وصورك وشيفرتك بحسب المعنى لا اسم الملف، بنماذج ذكاء اصطناعي تعمل على حاسوبك والفهرس يبقى عليه',
    ko: '파일 이름이 아니라 의미로 문서, 사진, 코드를 찾는 데스크톱 앱으로, AI 모델은 내 PC에서 실행되고 색인도 PC에 남습니다',
  },
  // Comparison attributes from the maker's pages on 2026-11-21: searches your own files (home page); other segment attributes (localLlm, webSearch, citations, ocr, multiImage, apiServer) not stated = left out, never false.
  compare: { privateDocs: true },
  reviewSlug: 'pixafind-review',
  pqReview: {
    date: '2026-11-21',
    version: '0.7.40',
    versionSourceUrl: 'https://github.com/Ishannaik/pixafind-releases/releases/latest',
  },
  verdict: 'Best for Windows, Apple Silicon Mac and Linux users with large piles of documents, photos and code who want to find files by describing them, with, per the maker, models and index kept on the PC, a free tier of 1 folder and 2,000 files and paid Pro, Team and Lifetime plans; limited by closed source, a Mac build that is not notarized, analytics and crash reports that are on by default, no mobile app and claims PromptQuorum could not verify.',
  lastVerifiedDate: '2026-11-21',
  lastUpstreamUpdate: '2026-11-21', // GitHub Releases v0.7.40 published 2026-11-21; read 2026-11-21
  lastUpstreamUpdateSource: 'https://github.com/Ishannaik/pixafind-releases/releases/latest',
}
