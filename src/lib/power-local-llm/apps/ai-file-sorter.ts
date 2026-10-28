// Local AI App Directory — AI File Sorter: desktop app that proposes folders and file names for messy files; local GGUF models built in, optional own OpenAI/Gemini/custom endpoint
// (layer: desktop file-organisation tool, Knowledge & Retrieval / Local search + Vision & OCR)
// Added 2026-10-28 at the operator's request (link from localhosted.com). No maker outreach — independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-10-28 against: filesorter.app (home, /download/, /features/, /faq/, /pricing/, /about/, /changelog/, /download/macos-open/; no privacy-policy page exists —
// /privacy, /privacy-policy, /terms, /legal/privacy all 404 and the sitemap lists none), the GitHub repo README + CHANGELOG + docs (hyperfield/ai-file-sorter: AGPL-3.0 per API,
// v1.9.2 published 2026-08-14T23:55Z, pushed_at 2026-10-19T09:24Z, newest default-branch commit 2026-09-18 = CI/Linux build workflow merges), and the Microsoft Store listing
// (apps.microsoft.com/detail/9npk4dzd6r6s: free, last update 2026-08-14, Windows 10 version 17763+, memory min 750 MB / recommended 1 GB, video memory recommended 6 GB;
// its privacy-policy file is one sentence: "We do not collect, store, or transmit any personal data; all processing stays on the user's device.").
// Last upstream update: 2026-10-19 (newer of latest release 2026-08-14 and last push) -> NOT stale (3-month rule).
// Hybrid locality: README/FAQ state a local model keeps files, names, images and metadata on the machine with no telemetry; ChatGPT (own OpenAI key), Gemini (own key) and a custom
// OpenAI-compatible endpoint are the opt-in remote paths.
// Price: core app free (site /pricing/); a PAID Windows Explorer right-click extension exists in the Microsoft Store (price per Store, not read); optional donations.
// Hardware: NO RAM/VRAM minimum for the local models is documented in README/FAQ/site. Store listing: app memory 750 MB min / 1 GB rec. FAQ: ~6 GB discrete VRAM makes image scanning
// much faster; README: 8 GB+ VRAM smoother for Vulkan offload/image analysis, 4 GB often partial offload or CPU fallback. Local model download sizes are not stated. So ramGb/vramGb = null.
// Open: which service performs the photo GPS place-name lookup (README only says results are cached); model licences (Gemma terms etc.) not reviewed; macOS builds are not Apple-signed.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ai-file-sorter',
  name: 'AI File Sorter',
  categories: ['local-search', 'vision-ocr'],
  interfaces: ['desktop'], // Qt 6 desktop app; a paid Windows Explorer right-click extension is a separate add-on
  locality: 'hybrid', // local GGUF models (Gemma 3 4B IT, Gemma 1.1 7B, Mistral 7B, own GGUF) keep files on the machine; opt-in remote: own OpenAI/Gemini key or custom OpenAI-compatible endpoint
  platforms: ['win', 'mac', 'linux'], // download page: Windows installer + portable, macOS disk images (M2-M5, M1, Intel), Linux packages (Debian, Ubuntu, Fedora, Rocky, Arch)
  worksWith: ['llama.cpp', 'GGUF', 'OpenAI API', 'Gemini API', 'Ollama', 'LM Studio'], // README: llama.cpp runtime; custom OpenAI-compatible endpoint (LM Studio, Ollama or gateway); FAQ: Ollama via its local server
  engine: 'builtin', // embedded llama.cpp runtime with CUDA/Vulkan/Metal/CPU backends; models downloaded in-app (Select LLM dialog)
  license: 'AGPL-3.0', // GitHub API license.spdx_id + README
  price: 'free', // site /pricing/: core app free; paid Windows Explorer Extension add-on (Microsoft Store) and optional donations are separate
  hardware: { ramGb: null, vramGb: null, cpuOnly: true }, // no RAM/VRAM minimum documented for the local models; README: GPU optional, auto-falls back to CPU/OpenBLAS
  stars: 1865, // GitHub API stargazers_count, read 2026-10-28
  addedDate: '2026-10-28',
  status: 'listed',
  uses: ['docs', 'image'],
  url: 'filesorter.app',
  storeLinks: {
    github: 'https://github.com/hyperfield/ai-file-sorter',
    web: 'https://filesorter.app',
  },
  installEffort: 'installer',
  installEvidence: 'filesorter.app/download checked 2026-10-28: Windows 10+ installer and portable build (also Microsoft Store apps.microsoft.com/detail/9npk4dzd6r6s), macOS disk images for Apple Silicon M2-M5, M1 and Intel (not Apple-signed; approve once under Privacy & Security), Linux packages for Debian, Ubuntu, Fedora, Rocky and Arch; the GitHub v1.9.2 release lists no binary assets, the downloads live on the website, the Store and SourceForge',
  tagline: {
    en: 'Desktop app that proposes folders and cleaner file names for messy files with a built-in local model or your own OpenAI or Gemini account, and changes nothing until you approve',
    de: 'Desktop-App, die für unordentliche Dateien Ordner und sauberere Dateinamen vorschlägt, mit eingebautem lokalem Modell oder Ihrem eigenen OpenAI- oder Gemini-Konto, und nichts ändert, bevor Sie zustimmen',
    fr: 'Application de bureau qui propose des dossiers et des noms de fichiers plus propres pour des fichiers en désordre, avec un modèle local intégré ou votre propre compte OpenAI ou Gemini, et ne modifie rien avant votre accord',
    ja: '散らかったファイルに対してフォルダーとわかりやすいファイル名を提案するデスクトップアプリ。内蔵のローカルモデル、または自分のOpenAI／Geminiアカウントを使え、承認するまで何も変更しません',
    zh: '桌面应用，为杂乱的文件建议文件夹和更清晰的文件名，可使用内置本地模型或你自己的 OpenAI、Gemini 账号，在你确认之前不会改动任何文件',
    es: 'Aplicación de escritorio que propone carpetas y nombres de archivo más claros para archivos desordenados, con un modelo local integrado o tu propia cuenta de OpenAI o Gemini, y no cambia nada hasta que lo apruebas',
    pt: 'Aplicativo de desktop que sugere pastas e nomes de arquivo mais claros para arquivos bagunçados, com um modelo local integrado ou sua própria conta OpenAI ou Gemini, e não altera nada até você aprovar',
    ar: 'تطبيق سطح مكتب يقترح مجلدات وأسماء ملفات أوضح للملفات غير المنظمة، بنموذج محلي مدمج أو بحسابك الخاص في OpenAI أو Gemini، ولا يغيّر شيئًا قبل موافقتك',
    ko: '흩어진 파일에 대해 폴더와 더 알아보기 쉬운 파일 이름을 제안하는 데스크톱 앱으로, 내장 로컬 모델이나 본인의 OpenAI·Gemini 계정을 사용할 수 있으며 승인하기 전에는 아무것도 바꾸지 않습니다',
  },
  reviewSlug: 'ai-file-sorter-review',
  pqReview: {
    date: '2026-10-28',
    version: 'v1.9.2',
    versionSourceUrl: 'https://github.com/hyperfield/ai-file-sorter/releases',
  },
  verdict: 'Best for people with cluttered Downloads, scan, screenshot or archive folders who want AI-proposed folders and file names they can review, dry-run and undo, with a local model by default; limited by undocumented RAM needs for the local models, no OCR for scanned PDFs, unsigned macOS builds, a one-sentence privacy statement, and no hands-on testing by PromptQuorum.',
  lastVerifiedDate: '2026-10-28',
  lastUpstreamUpdate: '2026-10-19', // GitHub API pushed_at 2026-10-19T09:24Z; latest release v1.9.2 published 2026-08-14 (newest default-branch commit 2026-09-18)
  lastUpstreamUpdateSource: 'https://github.com/hyperfield/ai-file-sorter',
}
