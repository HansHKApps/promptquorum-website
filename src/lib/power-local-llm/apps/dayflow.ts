// Local AI App Directory — Dayflow: open-source automatic work journal / time tracker for Mac that can run its screen analysis with local models (layer: desktop, personal assistants + local search over your own activity)
// Added 2026-11-13 at the owner's request. Facts verified 2026-11-13 against dayflow.so (home, /pricing, /privacy) and the GitHub API/README of
// JerryZLiu/Dayflow (MIT licence, 7,436 stars, homepage dayflow.so). Latest release v2.9.0 (not a pre-release) published 2026-11-10T11:29:37Z with asset
// Dayflow.dmg; newest default-branch push 2026-11-10T11:29:42Z. The release body is empty (no written notes). So the 3-month stale warning is OFF.
// Locality: README "can run entirely with local AI", "If you choose local models, analysis stays on your machine"; privacy page lists three modes — Local
// processing ("Screenshots never leave your machine"), Bring your own AI provider (screenshots go to the provider you configure) and Dayflow cloud (opt-in, Pro).
// The privacy page marks both "Local processing" and "Bring your own AI provider" as DEFAULT, so no single default is stated. Capture, recordings and the
// database live in ~/Library/Application Support/Dayflow/ on the Mac. Local models run through Ollama or LM Studio, which the user installs separately.
// Cloud paths are the user's choice: Gemini/OpenAI/Anthropic keys; ChatGPT or Claude via their local CLI tools (README) — those CLIs call the vendors' clouds.
// Prices (USD, pricing page): Free $0 (local or own key), Pro $20/month "managed AI", Enterprise on request (SSO/SAML, retention controls); homepage says
// "Backed by Y Combinator" (maker claim, not verified here). Maker: Teleport Labs Inc. (footer / privacy page). Not checked: accuracy of summaries, battery/CPU
// cost, network traffic, how well local models perform. No hands-on testing by PromptQuorum.

import type { ToolRecord } from './types'

export const app: ToolRecord = {
  slug: 'dayflow',
  name: 'Dayflow',
  categories: ['personal-assistants', 'local-search'],
  interfaces: ['desktop'],
  locality: 'local', // README + privacy page: capture, recordings and database stay on the Mac and analysis can run entirely on-device through Ollama or LM Studio; cloud analysis (own API key or Dayflow Pro) is an opt-in choice, and anonymous analytics and account data go to the maker
  platforms: ['mac'], // macOS 14 (Sonoma) or later only; a Windows version is only advertised as "coming" on the homepage
  worksWith: ['Ollama', 'LM Studio', 'Gemini', 'OpenAI', 'Anthropic', 'Claude Code', 'Codex CLI', 'Homebrew'], // local runtimes and provider keys per README + pricing page; CLIs per README requirements
  engine: 'external', // no bundled model: analysis calls a local model you run in Ollama or LM Studio, or a cloud provider you configure
  license: 'MIT',
  price: 'freemium', // Free $0 (local model or own API key), Pro $20/month managed AI, Enterprise on request
  hardware: { ramGb: null, vramGb: null, cpuOnly: null, variesByModel: true }, // homepage: recorder ~100 MB RAM, under 1% CPU (maker claim); local inference needs the hardware of whichever model you load ("more demanding on your GPU and battery")
  stars: 7436, // GitHub API read 2026-11-13
  addedDate: '2026-11-13',
  status: 'listed',
  uses: ['docs', 'chat'],
  url: 'dayflow.so',
  storeLinks: {
    github: 'https://github.com/JerryZLiu/Dayflow',
    web: 'https://www.dayflow.so',
  },
  installEffort: 'installer',
  installEvidence: 'GitHub Releases v2.9.0 (2026-11-10) checked 2026-11-13: asset Dayflow.dmg (README: open the DMG, drag to Applications, grant Screen & System Audio Recording permission); README also lists `brew install --cask dayflow` and a build from source in Xcode',
  tagline: {
    en: 'Free, MIT-licensed Mac app that turns low-frequency screenshots into a timeline of your workday and can run the analysis on your own Mac through Ollama or LM Studio',
    de: 'Kostenlose Mac-App unter MIT-Lizenz, die seltene Bildschirmfotos in eine Zeitleiste Ihres Arbeitstags verwandelt und die Analyse über Ollama oder LM Studio auf Ihrem eigenen Mac ausführen kann',
    fr: 'Application Mac gratuite sous licence MIT qui transforme des captures d’écran espacées en chronologie de votre journée de travail et peut exécuter l’analyse sur votre propre Mac via Ollama ou LM Studio',
    ja: 'MITライセンスの無料Macアプリ。低頻度のスクリーンショットから仕事の1日のタイムラインを作成し、OllamaまたはLM Studio経由で分析を自分のMac上で実行できます',
    zh: '采用 MIT 许可证的免费 Mac 应用，把低频率截屏整理成你的工作日时间线，并可通过 Ollama 或 LM Studio 在你自己的 Mac 上运行分析',
    es: 'App gratuita para Mac con licencia MIT que convierte capturas de pantalla poco frecuentes en una cronología de tu jornada laboral y puede ejecutar el análisis en tu propio Mac con Ollama o LM Studio',
    pt: 'App gratuito para Mac com licença MIT que transforma capturas de tela pouco frequentes em uma linha do tempo do seu dia de trabalho e pode executar a análise no seu próprio Mac com Ollama ou LM Studio',
    ar: 'تطبيق Mac مجاني بترخيص MIT يحوّل لقطات شاشة متباعدة إلى جدول زمني ليوم عملك ويمكنه تشغيل التحليل على جهاز Mac الخاص بك عبر Ollama أو LM Studio',
    ko: 'MIT 라이선스 무료 Mac 앱으로, 드문 간격으로 찍은 스크린샷을 업무일 타임라인으로 만들고 Ollama 또는 LM Studio를 통해 내 Mac에서 분석을 실행할 수 있습니다',
  },
  // Comparison attributes (personal-assistants segment): taken from the README on 2026-11-13; a missing key = not stated, never false.
  compare: { localLlm: true },
  reviewSlug: 'dayflow-review',
  pqReview: {
    date: '2026-11-13',
    version: '2.9.0',
    versionSourceUrl: 'https://github.com/JerryZLiu/Dayflow/releases/latest',
  },
  verdict: 'Best for Mac users who want an automatic, open-source work journal and are willing to run Ollama or LM Studio to keep screen analysis on their own machine; limited by macOS 14+ only, a separate local-model setup, cloud analysis paths that send screenshots to a provider, and privacy and accuracy claims PromptQuorum did not test.',
  lastVerifiedDate: '2026-11-13',
  lastUpstreamUpdate: '2026-11-10', // GitHub: release v2.9.0 (2026-11-10T11:29:37Z) and last push to main (2026-11-10T11:29:42Z); read 2026-11-13
  lastUpstreamUpdateSource: 'https://github.com/JerryZLiu/Dayflow',
}
