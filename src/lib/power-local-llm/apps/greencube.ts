// Local AI App Directory — GreenCube (layer: desktop, Windows)
// Added 2026-10-30 after the maker (Hector Gras, greencube.app) corresponded with the operator about the GPT4All review/guide and offered a founder comment
// and a technical review once the page is live. The maker has NOT yet reviewed this page, so no `founder` and no `founderReviewedDate`.
// Verified 2026-10-30 against: greencube.app (home, /buy, /what-you-get, /your-data, /download), the privacy policy at legal.greencube.app/privacy
// (effective 2026-10-13: controller Edunexis SL, Cartagena, Spain), the installer https://models.greencube.app/downloads/latest/GreenCube-setup.exe
// (14,118,576 bytes, Last-Modified 2026-08-11) and the updater feed https://models.greencube.app/updates/latest.json (version 0.1.47, pub_date 2026-10-17,
// windows-x86_64 only). The /buy page's JSON-LD says softwareVersion "1.0", the updater feed says 0.1.47: the feed is the build users actually receive, so it is recorded.
// The only public GitHub repository of the greencube-ai organisation is the website (greencube-site); the app itself has no public source -> closed source.
// Last upstream update: 2026-10-17 (updater feed) -> NOT stale (3-month rule).

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'greencube',
  name: 'GreenCube',
  categories: ['general-chat-clients'],
  interfaces: ['desktop'],
  locality: 'local', // site + policy: chats, files and images stay on the PC; internet only for sign-in, the model download, updates and the optional Online (web search) switch
  platforms: ['win'], // Windows 10/11 only; the site mentions no macOS or Linux build
  worksWith: null,
  engine: 'builtin', // ships its own runtime and downloads Gemma 4 E2B / E4B depending on the hardware tier; the runtime is not named in any public source
  license: 'Closed source',
  price: 'paid', // EUR 9.99 / USD 9.99 once, no subscription; 15-day full refund (site FAQ, 2026-10-30)
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true, variesByModel: true }, // 8 GB RAM minimum; works without a graphics card, only slower; image generation needs 12 GB RAM
  stars: null,
  addedDate: '2026-10-30',
  status: 'listed',
  uses: ['chat', 'code', 'image', 'docs'],
  url: 'greencube.app',
  storeLinks: {
    web: 'https://greencube.app',
  },
  installEffort: 'installer',
  installEvidence: 'Windows installer GreenCube-setup.exe (14.1 MB) linked from greencube.app/download; updater feed lists GreenCube_0.1.47_x64-setup.exe; no terminal step; sign-in and a model download of a few GB on first run; checked 2026-10-30',
  installOn: ['win'],
  tagline: {
    en: 'Paid-once Windows desktop AI that chats, codes, makes images and reads files with Gemma 4 on your own PC, offline after the first download',
    de: 'Einmalig bezahlte Windows-Desktop-KI, die mit Gemma 4 auf dem eigenen PC chattet, programmiert, Bilder erzeugt und Dateien liest – nach dem ersten Download offline',
    fr: 'IA de bureau Windows payée une seule fois, qui discute, code, crée des images et lit des fichiers avec Gemma 4 sur votre PC, hors ligne après le premier téléchargement',
    ja: '買い切りのWindowsデスクトップAI。自分のPC上のGemma 4でチャット、コード、画像生成、ファイル読み取りを行い、初回ダウンロード後はオフラインで動作',
    zh: '一次付费的 Windows 桌面 AI，使用本机上的 Gemma 4 进行聊天、编程、生成图像和读取文件，首次下载后可离线使用',
    es: 'IA de escritorio para Windows de pago único que chatea, programa, crea imágenes y lee archivos con Gemma 4 en tu propio PC, sin conexión tras la primera descarga',
    pt: 'IA de desktop para Windows com pagamento único que conversa, programa, cria imagens e lê arquivos com o Gemma 4 no seu próprio PC, offline após o primeiro download',
    ar: 'ذكاء اصطناعي لسطح مكتب Windows بدفعة واحدة، يدردش ويبرمج وينشئ الصور ويقرأ الملفات عبر Gemma 4 على جهازك، ويعمل دون اتصال بعد التنزيل الأول',
    ko: '한 번 결제하는 Windows 데스크톱 AI, 내 PC의 Gemma 4로 채팅·코딩·이미지 생성·파일 읽기를 하며 첫 다운로드 후에는 오프라인으로 동작',
  },
  reviewSlug: 'greencube-review',
  pqReview: {
    date: '2026-10-30',
    version: '0.1.47',
    versionSourceUrl: 'https://models.greencube.app/updates/latest.json',
  },
  // Comparison attributes from the site, FAQ pages and privacy policy on 2026-10-30; a missing key = not stated there, never false.
  // Not set because the sources say nothing: ollama, customEndpoint, mcp, openaiApi.
  compare: { builtInEngine: true, fileChat: true },
  verdict: 'Best for Windows 10/11 users who want a one-time-purchase, no-subscription AI that runs Gemma 4 on their own PC and works offline after the first download; limited by being Windows-only, closed source, a 0.1.x build and by the maker\'s own admission less capable than the biggest cloud models, and PromptQuorum has not run it.',
  lastVerifiedDate: '2026-10-30',
  lastUpstreamUpdate: '2026-10-17', // updater feed pub_date for version 0.1.47, read 2026-10-30
  lastUpstreamUpdateSource: 'https://models.greencube.app/updates/latest.json',
}
