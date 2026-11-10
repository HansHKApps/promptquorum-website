// Local AI App Directory — StratoSort (repo name StratoSortStack): desktop app that reads file contents, proposes names and folders, searches and chats over documents with local GGUF models (layer: desktop file-organisation + document search, Knowledge & Retrieval / Local search)
// Added 2026-11-10 at the operator's request (link https://stratosort.com/). No maker outreach: independent PromptQuorum entry; no founder-review badge; not hands-on tested.
// Facts verified 2026-11-10 against stratosort.com (home, /privacy.html, /docs/, /docs/CONFIG.html, /docs/NETWORK_TRANSPARENCY.html) and the GitHub API/Releases/LICENSE of iLevyTate/StratoSortStack
// (homepage field https://stratosort.com/docs/; LICENSE file: "PolyForm Noncommercial License 1.0.0", Copyright Kennedy Applied Sciences, Inc.; GitHub API reports NOASSERTION; 2 stars).
// Latest release v5.1.2 (not a pre-release) published 2026-11-01T04:46:55Z; newest default-branch push 2026-11-10T02:33:08Z. So the 3-month stale warning is OFF.
// Assets on v5.1.2: StratoSortStack-Setup-5.1.2.exe (+ arm64), StratoSortStack-5.1.2-win-x64.zip, StratoSortStack-5.1.2-mac-arm64.dmg, -mac-x64.dmg (+ zips), linux x86_64 and arm64 AppImage, linux amd64 and arm64 .deb, SHA-256 checksum files.
// Local claim (site, privacy.html, NETWORK_TRANSPARENCY.html): in-process node-llama-cpp (llama.cpp) with GGUF models, Orama search store, bundled llama-server for vision, Whisper (whisper.cpp) for audio;
// "Once the models are installed, StratoSort runs without internet"; Base profile Llama-3.2-3B-Instruct Q4_K_M + llava-v1.6-mistral-7b + all-MiniLM-L6-v2 (~7 GB), Better Quality profile Qwen2.5-7B-Instruct Q4_K_M + nomic-embed-text-v1.5 (~10 GB, 16 GB RAM + 8 GB GPU suggested).
// Network per NETWORK_TRANSPARENCY: model downloads from huggingface.co, GitHub Releases update check ON by default in packaged builds (every 4 hours, can be disabled), optional cloud AI only with the user's own Anthropic/OpenAI-compatible key, optional MCP server on 127.0.0.1.
// Privacy wording (privacy.html, updated 2026-10-29): "The app does not include analytics, telemetry, crash reporters, or feature-flag SDKs that phone home." Not verified by PromptQuorum (no traffic inspection, no source audit).
// Price: free for personal and noncommercial use with all features; commercial use needs a paid per-seat licence from Kennedy Applied Sciences, Inc. quoted by email (no published price).
// Hardware: 8 GB RAM minimum, GPU optional (CUDA, Metal, Vulkan, CPU fallback), disk ~7 GB (Base) or ~10 GB (Better Quality) for models.
// Not checked: accuracy of renaming/sorting, speed, install on each OS, the Install Guide / User Guide / Terms pages, AI_PROVIDERS and MCP_SERVER docs.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'stratosort',
  name: 'StratoSort',
  categories: ['local-search', 'document-pdf-chat'],
  interfaces: ['desktop'], // Electron desktop app; opt-in local MCP server for Claude Desktop, Cursor, Zed
  locality: 'local', // site + docs: in-process llama.cpp, models run on the computer and work offline once installed; cloud AI only with the user's own API key (off by default); model downloads and update checks use the network
  platforms: ['mac', 'win', 'linux'], // Windows 10 22H2/11 x64+arm64, macOS 13+ Apple Silicon + Intel, Ubuntu 22.04+ x64+arm64 (AppImage, .deb)
  worksWith: ['llama.cpp', 'GGUF', 'Whisper', 'Ollama', 'LM Studio', 'MCP', 'Claude Desktop', 'Cursor', 'Zed'], // node-llama-cpp runtime; optional own Anthropic/OpenAI-compatible key which may point to a local Ollama or LM Studio endpoint; opt-in MCP server
  engine: 'builtin', // node-llama-cpp (llama.cpp) in-process, bundled llama-server for vision, whisper.cpp for audio; GGUF models downloaded in-app
  license: 'Source-available (PolyForm Noncommercial 1.0.0)', // LICENSE file read 2026-11-10: personal and other noncommercial use free, commercial use needs a paid licence; site says "Source available"; GitHub API reports NOASSERTION
  price: 'freemium', // free for personal/noncommercial use with every feature; paid per-seat commercial licence by email quote
  hardware: { ramGb: 8, vramGb: null, cpuOnly: true }, // docs: 8 GB RAM minimum; GPU optional (CUDA/Metal/Vulkan) with CPU fallback; Better Quality profile suggests 16 GB RAM and an 8 GB GPU
  stars: 2, // GitHub API read 2026-11-10
  addedDate: '2026-11-10',
  status: 'listed',
  uses: ['docs'],
  url: 'stratosort.com',
  storeLinks: {
    github: 'https://github.com/iLevyTate/StratoSortStack',
    web: 'https://stratosort.com',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v5.1.2 (2026-11-01) checked 2026-11-10: StratoSortStack-Setup-5.1.2.exe and -arm64.exe, StratoSortStack-5.1.2-mac-arm64.dmg and -mac-x64.dmg, StratoSortStack-5.1.2-linux-x86_64.AppImage and -arm64.AppImage, linux amd64/arm64 .deb, SHA-256 checksum files; the AI models (about 7 GB Base) are downloaded inside the app after install',
  tagline: {
    en: 'Desktop app that reads your files, suggests names and folders you can review and undo, and adds semantic search and document chat with local llama.cpp models that work offline once installed',
    de: 'Desktop-App, die Ihre Dateien liest, Namen und Ordner vorschlägt, die Sie prüfen und rückgängig machen können, und semantische Suche sowie Dokument-Chat mit lokalen llama.cpp-Modellen bietet, die nach der Installation offline funktionieren',
    fr: 'Application de bureau qui lit vos fichiers, propose des noms et des dossiers que vous pouvez vérifier et annuler, et ajoute recherche sémantique et chat avec vos documents grâce à des modèles llama.cpp locaux qui fonctionnent hors ligne une fois installés',
    ja: 'ファイルの内容を読み取り、確認・取り消しできる名前とフォルダーを提案し、セマンティック検索やドキュメントとのチャットも備えたデスクトップアプリ。ローカルのllama.cppモデルはインストール後オフラインで動作します',
    zh: '桌面应用，读取你的文件内容，建议可审阅、可撤销的文件名和文件夹，并提供语义搜索和文档对话；本地 llama.cpp 模型安装后可离线运行',
    es: 'Aplicación de escritorio que lee tus archivos, sugiere nombres y carpetas que puedes revisar y deshacer, y añade búsqueda semántica y chat con documentos mediante modelos llama.cpp locales que funcionan sin conexión una vez instalados',
    pt: 'Aplicativo de desktop que lê seus arquivos, sugere nomes e pastas que você pode revisar e desfazer, e acrescenta busca semântica e chat com documentos usando modelos llama.cpp locais que funcionam offline depois de instalados',
    ar: 'تطبيق سطح مكتب يقرأ ملفاتك ويقترح أسماءً ومجلدات يمكنك مراجعتها والتراجع عنها، ويضيف بحثًا دلاليًا ودردشة مع المستندات بنماذج llama.cpp محلية تعمل دون اتصال بعد التثبيت',
    ko: '파일 내용을 읽고 검토하고 되돌릴 수 있는 이름과 폴더를 제안하며, 설치 후 오프라인으로 작동하는 로컬 llama.cpp 모델로 시맨틱 검색과 문서 채팅까지 제공하는 데스크톱 앱입니다',
  },
  reviewSlug: 'stratosort-review',
  pqReview: {
    date: '2026-11-10',
    version: '5.1.2',
    versionSourceUrl: 'https://github.com/iLevyTate/StratoSortStack/releases/latest',
  },
  verdict: 'Best for people with messy document, scan, image and audio folders on Mac, Windows or Linux who want AI-suggested names and folders they can review and undo, with local models that run offline after a one-time download of about 7 GB; limited by a noncommercial licence (commercial use needs a paid per-seat licence), an update check that is on by default, a very young public project, and privacy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-10',
  lastUpstreamUpdate: '2026-11-10', // GitHub: newer of release v5.1.2 (2026-11-01) and last push to main (2026-11-10T02:33:08Z); read 2026-11-10
  lastUpstreamUpdateSource: 'https://github.com/iLevyTate/StratoSortStack',
}
