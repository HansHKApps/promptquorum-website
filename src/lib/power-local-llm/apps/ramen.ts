// Local AI App Directory — RAMen (layer: inference engine / session-memory layer in front of llama.cpp; Apple-silicon Mac, Windows x64, Linux x64; CLI + OpenAI-compatible local API).
// Added 2026-11-06 on request. Facts verified 2026-11-06 against: getramenai.com (home page: "Local AI, on your own computer", free plan forever + 14-day trial of everything,
// plans Free / Pro $3.99 per month or $29 per year / Team $9.99 per person per month from 3 people / Server $149 per server per month / Enterprise custom, launch offer Pro for life $19.99 once for the first 1,000 buyers,
// install one-liners for Mac (Apple silicon) + Linux and Windows 10/11, `ramen start` picks a model that fits or accepts any GGUF, `ramen connect` sets up Cline, Continue, Aider, OpenCode and Open WebUI, OpenAI-compatible API,
// selective reading needs an NVIDIA RTX 20-series or newer or an Apple Silicon Mac, "Prompts, files and sessions never leave your machine"),
// getramenai.com/how-it-works.html (KV-cache session save/restore, query-aware selective reading, vendor-measured results on Qwen3 4B/32B, "proprietary software with a free plan", built on llama.cpp MIT),
// getramenai.com/privacy.html (effective 2026-11-06; NEOTECH Inc.; paid plans send the license key, store identifier and an anonymous machine label to Polar at start-up; model downloads connect to Hugging Face; no analytics, crash reporting or tracking in the app),
// getramenai.com/terms.html (EULA v1.0 effective 2026-11-06; NEOTECH Inc., a Delaware corporation; no reverse engineering),
// install.sh / install.ps1 (macOS arm64 only — Intel Mac and Linux ARM refused; Linux x64 CPU or CUDA build chosen via nvidia-smi; Windows x64 CPU or CUDA build; packages from github.com/MatthewLeibel/ramen-releases with sha256 check),
// and the GitHub API for MatthewLeibel/ramen-releases (a releases-only repository, no source code, no license file; latest release v1.0.0 published 2026-11-06 with ramen-macos-arm64.tar.gz, ramen-linux-x64-cpu/-cuda.tar.gz, ramen-windows-x64-cpu/-cuda.zip + .sha256).
// LOCALITY = local: inference runs through a bundled llama-server on the user's machine; the vendor says prompts, files and sessions stay there. Network use named by the vendor: install download, model download from Hugging Face, license check on paid plans.
// Not found: source code or a repository for RAMen itself (the releases repo has none), an independent audit, a Mac App Store / Microsoft Store listing, minimum OS or RAM figures. Benchmarks are the vendor's own; not tested hands-on.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ramen',
  name: 'RAMen',
  categories: ['inference-engines'],
  interfaces: ['cli'],
  exposesApi: true, // OpenAI-compatible API (home page: "speaks the same API as OpenAI, so your apps work unchanged"; Server plan serves a team with per-person keys)
  locality: 'local', // bundled llama-server runs on the user's machine; paid plans phone home only for the license check (privacy policy 2026-11-06)
  platforms: ['mac', 'win', 'linux'], // Apple-silicon Mac only (installer refuses Intel Macs), Windows 10/11 x64, Linux x64 (ARM Linux refused)
  worksWith: ['Cline', 'Continue', 'Aider', 'OpenCode', 'Open WebUI'], // `ramen connect` targets named on the home page
  engine: 'builtin', // ships its own build of llama.cpp (llama-server) plus RAMen's session memory and selective reading
  license: 'Proprietary', // "RAMen is proprietary software with a free plan" (how-it-works page); EULA v1.0 2026-11-06; llama.cpp inside is MIT
  price: 'freemium', // Free forever (last 3 chats, one at a time) + Pro $3.99/month or $29/year, Team, Server, Enterprise; verified 2026-11-06
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // no minimum stated; "a computer that runs llama.cpp"; CPU and CUDA builds exist, selective reading needs RTX 20-series+ or Apple silicon
  stars: null, // closed source; the releases-only GitHub repository has no stars to track
  addedDate: '2026-11-06',
  status: 'listed',
  uses: ['serve', 'agent'],
  url: 'getramenai.com',
  storeLinks: {
    web: 'https://getramenai.com',
  },
  installEffort: 'one-command',
  installEvidence: 'getramenai.com home page and install.sh / install.ps1 read 2026-11-06: `curl -fsSL https://getramenai.com/install.sh | bash` (macOS Apple silicon, Linux x64) and `irm https://getramenai.com/install.ps1 | iex` (Windows 10/11 x64), then `ramen start`; GitHub Releases v1.0.0 (2026-11-06) hold only .tar.gz/.zip packages (ramen-macos-arm64, ramen-linux-x64-cpu/-cuda, ramen-windows-x64-cpu/-cuda), no double-click installer, no store listing',
  tagline: {
    en: 'Proprietary local session-memory layer on top of llama.cpp that saves every chat to disk and, the maker says, speeds up long chats, with an OpenAI-compatible API and a free plan',
    de: 'Proprietäre lokale Sitzungsspeicher-Schicht auf llama.cpp, die jeden Chat auf der Festplatte sichert und lange Chats laut Hersteller beschleunigt, mit OpenAI-kompatibler API und kostenlosem Tarif',
    fr: 'Couche propriétaire de mémoire de session locale au-dessus de llama.cpp, qui sauvegarde chaque conversation sur disque et, selon le fabricant, accélère les longues conversations, avec une API compatible OpenAI et une offre gratuite',
    ja: 'llama.cpp の上で動く独自仕様のローカルセッションメモリ層。すべてのチャットをディスクに保存し、メーカーによると長いチャットを高速化。OpenAI互換API、無料プランあり',
    zh: '构建在 llama.cpp 之上的专有本地会话记忆层，将每次聊天保存到磁盘，并据厂商称可加快长对话速度，提供兼容 OpenAI 的 API 和免费方案',
    es: 'Capa propietaria de memoria de sesión local sobre llama.cpp que guarda cada chat en disco y, según el creador, acelera los chats largos, con API compatible con OpenAI y plan gratuito',
    pt: 'Camada proprietária de memória de sessão local sobre o llama.cpp que salva cada chat em disco e, segundo o criador, acelera chats longos, com API compatível com OpenAI e plano gratuito',
    ar: 'طبقة ذاكرة جلسات محلية مملوكة فوق llama.cpp تحفظ كل محادثة على القرص وتسرّع المحادثات الطويلة بحسب الشركة الصانعة، مع واجهة برمجة متوافقة مع OpenAI وخطة مجانية',
    ko: 'llama.cpp 위에서 동작하는 독점 로컬 세션 메모리 계층으로, 모든 채팅을 디스크에 저장하고 개발사에 따르면 긴 채팅을 빠르게 하며 OpenAI 호환 API와 무료 플랜을 제공합니다',
  },
  // Comparison attributes (inference-engines segment), read from getramenai.com on 2026-11-06: openaiApi (OpenAI-compatible API), nvidiaGpu (CUDA builds, RTX 20-series+ for selective reading),
  // appleSilicon (arm64 build) and cpuInference (CPU builds for Linux and Windows) are stated; amdGpu and distributed are not — unset, never false.
  compare: { openaiApi: true, nvidiaGpu: true, appleSilicon: true, cpuInference: true },
  reviewSlug: 'ramen-review',
  pqReview: {
    date: '2026-11-06',
    version: '1.0.0',
    versionSourceUrl: 'https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0',
  },
  verdict: 'Best for people who run llama.cpp-style local models for long chats or coding agents and want sessions that survive restarts, with a free plan to try first; it is proprietary and brand new (v1.0.0 released 2026-11-06), the speed figures are the vendor\'s own, paid plans contact a license server at start-up, and PromptQuorum did not test it hands-on.',
  lastVerifiedDate: '2026-11-06',
  lastUpstreamUpdate: '2026-11-06', // GitHub API MatthewLeibel/ramen-releases: v1.0.0 published 2026-11-06T05:20:10Z, read 2026-11-06
  lastUpstreamUpdateSource: 'https://github.com/MatthewLeibel/ramen-releases/releases/tag/v1.0.0',
  founderReviewedDate: '2026-11-06', // Matthew (founder) checked the finished write-up against the RAMen pages and installer on 2026-11-06 and called it all correct, plus answered the saved-chats FAQ; drives the Founder-reviewed banner + star. Maker note (fromTheMaker / founder record) still to come.
}
