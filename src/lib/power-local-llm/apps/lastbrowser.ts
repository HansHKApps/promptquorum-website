// Local AI App Directory — LastBrowser (layer: AI browser with built-in Sidekick sidebar; Windows installer + Linux preview, Electron).
// Added 2026-11-06 on a maker submission by e-mail ("The LastBrowser team"). Facts verified 2026-11-06 against: lastbrowser.com (home, /download,
// /privacy, /imprint, /features, /enterprise, /docs: Windows 10/11 64-bit is the main platform, Linux x64 is a "Preview", macOS not available;
// free for personal use, education and research, a commercial licence is required for business use, no numeric prices published; Sidekick works with
// "supported AI providers" via your own credentials or local Ollama models; privacy policy: no telemetry code, Ollama on your own machine = local
// inference, remote Ollama / Ollama Cloud / external providers receive requests and the context provided for the task, e.g. selected tab content;
// features page: built-in local inference "not yet released"; imprint: LastBrowser Project c/o Rainer Dominik, no street address or register number),
// and the GitHub API for Loggableim/lastbrowser (description "Windows desktop browser with a built-in AI sidebar (Sidekick). Electron, React,
// TypeScript, local Python backend"; license GPL-3.0; latest release v0.1.60 published 2026-10-26 with assets Lastbrowser-0.1.60-x64-setup.exe,
// -x64-portable.exe, -x86_64.AppImage, -x64.tar.gz, SHA256SUMS.txt; release notes: Linux build is new in 0.1.60; repo created 2026-09-18,
// pushed_at 2026-11-03; 0 stars).
// The maker's pitch said "Windows and Linux", "only sees what you select plus page title and URL by default" and "open source (see repo)";
// the first is softened to "Linux preview", the second is NOT confirmed by the public privacy policy (which says selected tab content goes to the
// chosen provider) and is not repeated, the third resolved to GPL-3.0 for the source with a paid licence for commercial use.
// Not found: minimum OS versions, hardware needs, a list of named cloud providers. Not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'lastbrowser',
  name: 'LastBrowser',
  categories: ['browser-sidebars'],
  interfaces: ['desktop'],
  locality: 'hybrid', // Sidekick can use a local Ollama endpoint (stays on the machine) or cloud providers / remote Ollama (receives the task context)
  platforms: ['win', 'linux'], // Windows 10/11 x64 installer + portable; Linux x64 AppImage/tar.gz labelled "Preview"; no macOS build
  worksWith: ['Ollama'],
  engine: 'external', // built-in local inference is stated as "not yet released"; Ollama or a provider does the inference
  license: 'GPL-3.0',
  price: 'free', // free for personal use, education and research; commercial use needs a paid licence (no prices published)
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no requirement stated; depends on the Ollama model the user picks
  stars: 0, // github.com/Loggableim/lastbrowser, GitHub API 2026-11-06
  addedDate: '2026-11-06',
  status: 'listed',
  uses: ['chat'],
  url: 'lastbrowser.com',
  storeLinks: {
    web: 'https://lastbrowser.com',
    github: 'https://github.com/Loggableim/lastbrowser',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.1.60 (2026-10-26) checked 2026-11-06: Lastbrowser-0.1.60-x64-setup.exe and -x64-portable.exe for Windows, Lastbrowser-0.1.60-x86_64.AppImage and -x64.tar.gz for Linux (preview); double-click install on Windows, chmod +x on Linux; Ollama and a model are a separate install',
  tagline: {
    en: 'Free desktop browser for Windows (Linux preview) with a built-in Sidekick AI sidebar that can use local models through Ollama or your own cloud provider keys',
    de: 'Kostenloser Desktop-Browser für Windows (Linux-Vorschau) mit integrierter KI-Seitenleiste Sidekick, die lokale Modelle über Ollama oder Ihre eigenen Cloud-Anbieter-Schlüssel nutzen kann',
    fr: 'Navigateur de bureau gratuit pour Windows (aperçu Linux) avec barre latérale IA Sidekick intégrée, utilisable avec des modèles locaux via Ollama ou vos propres clés de fournisseurs cloud',
    ja: 'Windows向け（Linuxはプレビュー）の無料デスクトップブラウザ。内蔵のAIサイドバー「Sidekick」はOllama経由のローカルモデルや自分のクラウドAPIキーで利用できます',
    zh: '免费桌面浏览器，支持 Windows（Linux 为预览版），内置 Sidekick AI 侧边栏，可通过 Ollama 使用本地模型或使用你自己的云端提供商密钥',
    es: 'Navegador de escritorio gratuito para Windows (versión preliminar para Linux) con la barra lateral de IA Sidekick integrada, que puede usar modelos locales con Ollama o tus propias claves de proveedores en la nube',
    pt: 'Navegador de desktop gratuito para Windows (prévia para Linux) com a barra lateral de IA Sidekick integrada, que pode usar modelos locais via Ollama ou suas próprias chaves de provedores na nuvem',
    ar: 'متصفح سطح مكتب مجاني لنظام Windows (نسخة معاينة لـLinux) مع شريط جانبي للذكاء الاصطناعي Sidekick مدمج، يمكنه استخدام نماذج محلية عبر Ollama أو مفاتيح مزوّدي السحابة الخاصة بك',
    ko: 'Windows용(Linux는 미리보기) 무료 데스크톱 브라우저로, 내장 AI 사이드바 Sidekick이 Ollama를 통한 로컬 모델이나 직접 입력한 클라우드 제공업체 키를 사용할 수 있습니다',
  },
  reviewSlug: 'lastbrowser-review',
  pqReview: {
    date: '2026-11-06',
    version: '0.1.60',
    versionSourceUrl: 'https://github.com/Loggableim/lastbrowser/releases/tag/v0.1.60',
  },
  verdict: 'Best for Windows users who want a free browser with an AI sidebar they can point at a local Ollama model and who accept a very young project (repository created September 2026, beta releases, Linux still a preview, commercial use needs a paid licence); selected tab content goes to whichever provider you choose, and PromptQuorum did not test the app hands-on.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-11-03', // GitHub API: repo pushed_at 2026-11-03 (latest release v0.1.60 of 2026-10-26), read 2026-11-06
  lastUpstreamUpdateSource: 'https://github.com/Loggableim/lastbrowser',
}
