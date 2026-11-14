// Local AI App Directory — AI Notebook: free, MIT-licensed native research notebook for Mac and Windows, an offline NotebookLM alternative that answers over your own documents with inline citations (layer: desktop, document chat / RAG)
// Added 2026-11-14 at the owner's request. Facts verified 2026-11-14 against lukoplt.github.io/AI-notebook (landing page) and github.com/lukoplt/AI-notebook
// (README, Releases, commits, GitHub API). MIT licence (API spdx MIT), 20 stars, maker Lukáš Oplt (personal project; README credits "inspired by open-notebook").
// Latest release v0.15.0 (not a pre-release) published 2026-10-12T11:59:21Z; last push to main 2026-10-14T18:11:26Z (31 days before today), so the 3-month
// stale warning is OFF. Early-stage: version 0.x, 331 commits. macOS 14+ (Swift/SwiftUI) and Windows 10 1809+/11 (.NET/WinUI); release builds are not
// signed with a paid certificate (macOS right-click → Open, Windows SmartScreen "Unknown publisher"); build attestations via Sigstore per README.
// Locality: README "With Ollama as the provider, the app makes no AI calls off your device"; default local models llama3.2:3b + nomic-embed-text (~5 GB download);
// any OpenAI-compatible endpoint (presets for LM Studio, vLLM, OpenRouter, Groq, Mistral, Together), OpenWebUI (chat only), and Anthropic/OpenAI cloud are the
// user's opt-in choice. Other outbound calls per README: URLs you add, an optional daily update check against api.github.com, optional web search.
// Data: one local SQLite database (macOS ~/Library/Application Support/AINotebook/db.sqlite); API keys in the OS credential vault. Known gaps per README: no OCR
// for scanned PDFs, Excel formulas not evaluated. Not checked: answer quality, retrieval accuracy, network traffic, stability. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'ai-notebook',
  name: 'AI Notebook',
  categories: ['document-pdf-chat', 'personal-assistants'],
  interfaces: ['desktop'],
  locality: 'local', // README + landing page: with Ollama no AI calls leave the device and the database stays on the machine; cloud providers (Anthropic, OpenAI, OpenAI-compatible endpoints) are opt-in
  platforms: ['mac', 'win'], // macOS 14+ and Windows 10 (1809+) / 11 per README; no Linux build found
  worksWith: ['Ollama', 'LM Studio', 'vLLM', 'OpenRouter', 'Groq', 'Mistral', 'Together', 'Open WebUI', 'OpenAI', 'Anthropic'], // README + release notes (OpenAI-compatible presets)
  engine: 'external', // no bundled model: Ollama (default llama3.2:3b + nomic-embed-text) or another configured provider does the inference
  license: 'MIT',
  price: 'free', // landing page: "free, open source"
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // depends on the model you load; README default pair is a ~5 GB download
  stars: 20, // GitHub API read 2026-11-14
  addedDate: '2026-11-14',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'lukoplt.github.io/AI-notebook',
  storeLinks: {
    github: 'https://github.com/lukoplt/AI-notebook',
    web: 'https://lukoplt.github.io/AI-notebook',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v0.15.0 (2026-10-12) checked 2026-11-14: AINotebook-v0.15.0-macos.dmg (ad-hoc signed, first launch via right-click → Open) and AINotebook-v0.15.0-windows-setup.exe (SmartScreen "Unknown publisher" prompt); Ollama is needed separately for local AI on Windows',
  tagline: {
    en: 'Free, MIT-licensed notebook for Mac and Windows that answers questions over your own documents with citations and can keep every AI call on your device through Ollama',
    de: 'Kostenloses Notizbuch unter MIT-Lizenz für Mac und Windows, das Fragen zu Ihren eigenen Dokumenten mit Quellenangaben beantwortet und über Ollama alle KI-Aufrufe auf Ihrem Gerät halten kann',
    fr: 'Carnet gratuit sous licence MIT pour Mac et Windows qui répond à vos questions sur vos propres documents avec citations et peut garder tous les appels d’IA sur votre appareil via Ollama',
    ja: 'MITライセンスのMac・Windows向け無料ノートブック。自分のドキュメントに対する質問に出典付きで回答し、Ollama経由ですべてのAI呼び出しをデバイス内にとどめることができます',
    zh: '采用 MIT 许可证、适用于 Mac 和 Windows 的免费笔记本应用，基于你自己的文档带引用地回答问题，并可通过 Ollama 让所有 AI 调用都留在你的设备上',
    es: 'Cuaderno gratuito con licencia MIT para Mac y Windows que responde preguntas sobre tus propios documentos con citas y puede mantener todas las llamadas de IA en tu dispositivo con Ollama',
    pt: 'Caderno gratuito com licença MIT para Mac e Windows que responde a perguntas sobre os seus próprios documentos com citações e pode manter todas as chamadas de IA no seu dispositivo com Ollama',
    ar: 'دفتر ملاحظات مجاني بترخيص MIT لأجهزة Mac وWindows يجيب عن الأسئلة حول مستنداتك الخاصة مع الاستشهادات ويمكنه إبقاء جميع استدعاءات الذكاء الاصطناعي على جهازك عبر Ollama',
    ko: 'MIT 라이선스 무료 Mac·Windows 노트북 앱으로, 내 문서에 대한 질문에 출처 인용과 함께 답하며 Ollama를 통해 모든 AI 호출을 내 기기 안에 둘 수 있습니다',
  },
  // Comparison attributes (personal-assistants segment): taken from the README on 2026-11-14; a missing key = not stated, never false.
  compare: { localLlm: true, multiFormat: true, desktopApp: true },
  verdict: 'Best for Mac or Windows users who want a free, open-source, NotebookLM-style notebook over their own files and are willing to run Ollama to keep it offline; limited by its early 0.x stage, unsigned installers, no OCR for scanned PDFs, and privacy and answer-quality claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-14',
  lastUpstreamUpdate: '2026-10-14', // GitHub: release v0.15.0 (2026-10-12) and last push to main (2026-10-14T18:11:26Z); read 2026-11-14
  lastUpstreamUpdateSource: 'https://github.com/lukoplt/AI-notebook',
}
