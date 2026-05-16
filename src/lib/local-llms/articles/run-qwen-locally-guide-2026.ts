// Slug: run-qwen-locally-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'How to Run Qwen 3 Locally in 2026: Ollama + LM Studio Setup Guide',
    seoTitle: 'Run Qwen 3 Locally in 2026: Ollama & LM Studio Full Setup Guide',
    intro: 'Qwen 3.6 27B runs on a single consumer GPU (16 GB VRAM) via Ollama or LM Studio. Setup takes under 10 minutes. This guide covers model selection, hardware requirements, Ollama CLI installation, LM Studio GUI setup, the critical num_ctx fix, and how to connect local Qwen to PromptQuorum for multi-model dispatch.',
    metaDescription: 'How to run Qwen 3 locally in 2026: step-by-step Ollama and LM Studio setup, hardware requirements, num_ctx fix, and PromptQuorum integration. Updated May 2026.',
    ogTitle: 'How to Run Qwen 3 Locally in 2026 — Ollama + LM Studio Setup',
    ogDescription: 'Complete 2026 guide: run Qwen 3.6 27B locally with Ollama or LM Studio, fix num_ctx, and connect to PromptQuorum. Works on 16 GB VRAM or Apple Silicon.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '8 min read',
    educationalLevel: 'Beginner',
    audience: 'Developers setting up a local LLM for the first time, EU teams seeking GDPR-compliant AI',
    primaryTerm: 'run Qwen 3 locally 2026',
    leadAnswerBlock: '**Run `ollama pull qwen3` on any machine with 16 GB VRAM or Apple Silicon with 32+ GB unified memory. For GUI access, use LM Studio. Both run Qwen 3.6 27B fully offline. Critical: set `num_ctx` to 32768 or higher — Ollama\'s default of 2048 tokens truncates most real-world tasks.**',
    quickAnswerTop: {
      en: {
        question: 'How do I run Qwen 3 locally in 2026?',
        answer: 'Install Ollama, run `ollama pull qwen3`, then `ollama run qwen3`. For GUI: download LM Studio, search "Qwen 3", download the 27B Q4_K_M GGUF file. Critical: set num_ctx to 32768 in Ollama (default 2048 is too small). For GDPR-compliant team use, connect via PromptQuorum\'s local dispatch endpoint.',
        bullets: [
          'Minimum hardware: 16 GB VRAM (RTX 4080) or Apple Silicon with 32 GB unified memory',
          'Ollama install: brew install ollama (Mac) or install.sh (Linux/Windows)',
          'Pull model: ollama pull qwen3 (downloads Qwen 3.6 27B ~17 GB)',
          'Fix context: set num_ctx 32768 in Modelfile — default 2048 is too small',
          'LM Studio alternative: GUI-based, no CLI required, same model quality',
        ],
        updatedDate: '2026-05-16',
      },
      de: {
        question: 'Wie fuehre ich Qwen 3 lokal in 2026 aus?',
        answer: 'Installiere Ollama, fuehre `ollama pull qwen3` aus, dann `ollama run qwen3`. Fuer eine GUI: Lade LM Studio herunter, suche "Qwen 3", lade die 27B Q4_K_M GGUF-Datei herunter. Wichtig: Setze num_ctx auf 32768 in Ollama (Standardwert 2048 ist zu klein). Fuer DSGVO-konformen Team-Betrieb verbinde ueber den lokalen PromptQuorum-Dispatch-Endpoint.',
        bullets: [
          'Mindest-Hardware: 16 GB VRAM (RTX 4080) oder Apple Silicon mit 32 GB Unified Memory',
          'Ollama-Installation: brew install ollama (Mac) oder install.sh (Linux/Windows)',
          'Modell laden: ollama pull qwen3 (laedt Qwen 3.6 27B ~17 GB)',
          'Kontext korrigieren: num_ctx 32768 im Modelfile setzen — Standard 2048 ist zu klein',
          'LM Studio Alternative: GUI-basiert, kein CLI noetig, gleiche Modellqualitaet',
        ],
        updatedDate: '2026-05-16',
      },
      fr: {
        question: 'Comment exécuter Qwen 3 localement en 2026 ?',
        answer: 'Installez Ollama, exécutez `ollama pull qwen3`, puis `ollama run qwen3`. Pour GUI : téléchargez LM Studio, recherchez "Qwen 3", téléchargez le fichier GGUF 27B Q4_K_M. Critique : définissez num_ctx à 32768 dans Ollama (2048 par défaut est trop petit). Pour une utilisation d\'équipe conforme RGPD, connectez via l\'endpoint de dispatch local de PromptQuorum.',
        bullets: [
          'Matériel minimum : 16 Go VRAM (RTX 4080) ou Apple Silicon avec 32 Go mémoire unifiée',
          'Installation Ollama : brew install ollama (Mac) ou install.sh (Linux/Windows)',
          'Télécharger le modèle : ollama pull qwen3 (~17 Go)',
          'Corriger le contexte : num_ctx 32768 dans Modelfile — 2048 par défaut est trop petit',
          'Alternative LM Studio : interface graphique, pas de CLI requis',
        ],
        updatedDate: '2026-05-16',
      },
      ja: {
        question: '2026年にQwen 3をローカルで実行するには？',
        answer: 'Ollamaをインストールし、`ollama pull qwen3`を実行してから`ollama run qwen3`。GUIの場合：LM Studioをダウンロードし、「Qwen 3」を検索、27B Q4_K_M GGUFファイルをダウンロード。重要：Ollamaのnum_ctxを32768に設定（デフォルトの2048は小さすぎる）。GDPRに準拠したチーム利用にはPromptQuorumのローカルディスパッチエンドポイント経由で接続。',
        bullets: [
          '最小ハードウェア：16 GB VRAM（RTX 4080）または32 GBユニファイドメモリのApple Silicon',
          'Ollamaインストール：brew install ollama（Mac）またはinstall.sh（Linux/Windows）',
          'モデル取得：ollama pull qwen3（Qwen 3.6 27B約17 GBをダウンロード）',
          'コンテキスト修正：ModelfileにてNum_ctx 32768を設定 — デフォルト2048は小さすぎる',
          'LM Studio代替：GUIベース、CLI不要、同等のモデル品質',
        ],
        updatedDate: '2026-05-16',
      },
      zh: {
        question: '2026年如何在本地运行Qwen 3？',
        answer: '安装Ollama，运行`ollama pull qwen3`，然后`ollama run qwen3`。GUI方式：下载LM Studio，搜索"Qwen 3"，下载27B Q4_K_M GGUF文件。关键：将Ollama中的num_ctx设置为32768（默认2048太小）。如需GDPR合规团队使用，通过PromptQuorum的本地调度端点连接。',
        bullets: [
          '最低硬件：16 GB显存（RTX 4080）或32 GB统一内存的Apple Silicon',
          'Ollama安装：brew install ollama（Mac）或install.sh（Linux/Windows）',
          '拉取模型：ollama pull qwen3（下载Qwen 3.6 27B约17 GB）',
          '修复上下文：在Modelfile中设置num_ctx 32768 — 默认2048太小',
          'LM Studio替代方案：GUI界面，无需CLI，模型质量相同',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Run Qwen Locally in 2026', anchor: '#why-local' },
      { label: 'Choose Your Qwen Model', anchor: '#choose-model' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Setup with Ollama', anchor: '#ollama-setup' },
      { label: 'Setup with LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Connecting to PromptQuorum', anchor: '#promptquorum' },
      { label: 'Troubleshooting', anchor: '#troubleshooting' },
      { label: 'Related Reading', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Two paths**: Ollama (CLI, headless, API-ready) or LM Studio (GUI, no CLI). Both run Qwen 3.6 27B locally.',
          '**Critical fix**: Ollama defaults to `num_ctx 2048`. This truncates most real-world prompts. Set `num_ctx 32768` in your Modelfile or via the API `num_ctx` parameter.',
          '**Hardware**: 16 GB VRAM minimum (RTX 4080). Apple Silicon M3/M4 Max with 48 GB unified memory is the recommended EU-hosted inference option.',
          '**GDPR**: Once running locally, no data leaves your machine. No SCCs, no data processing agreements needed beyond your own infrastructure policy.',
          '**PromptQuorum integration**: Set `ANTHROPIC_BASE_URL=http://localhost:11434/v1` and model `qwen3` to route PromptQuorum\'s dispatch through your local Ollama instance.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Run Qwen Locally in 2026',
        content: [
          'Running Qwen 3 locally in 2026 means paying €0 per token for a model that reaches 92.1% HumanEval — comparable to or exceeding Claude Sonnet 4.6 on coding tasks. Once hardware is amortised, every prompt is free. For a development team of five generating 10M tokens per day, local inference saves ~$900/month versus Claude Sonnet 4.6 API pricing.',
          'EU GDPR compliance is the second driver. GDPR Article 44 restricts data transfers to third countries. When you run Qwen locally on EU hardware, your prompts, code, and customer data never leave your infrastructure. There are no data processing agreements with US or Chinese providers required, no Schrems II risk assessments, and no privacy impact assessments for the AI layer.',
          'The third reason is latency. Local inference on an RTX 4090 generates 35+ tokens/second — comparable to API response times for short prompts, with no network round-trip overhead for longer completions.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Running Qwen 3.6 27B locally costs €0 per token after hardware, keeps all data on EU infrastructure, and delivers 35+ tokens/second on an RTX 4090.' },
          { type: 'plain-terms', text: 'Local LLM means the AI model runs on your own computer. You download the model file (about 17 GB for Qwen 3.6 27B), and every prompt you type is processed entirely on your machine — nothing is sent to any server.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Choose Your Qwen Model',
        content: 'Qwen 3 comes in multiple sizes. Choose based on your VRAM and required quality.',
        rows: [
          { Model: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'Tokens/sec (RTX 4090)': '~35', 'Best For': 'Production coding, complex tasks' },
          { Model: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'Tokens/sec (RTX 4090)': '~20', 'Best For': 'Maximum quality, dual-GPU' },
          { Model: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'Tokens/sec (RTX 4090)': '~60', 'Best For': '8–12 GB VRAM, general tasks' },
          { Model: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'Tokens/sec (RTX 4090)': '~80', 'Best For': 'Low VRAM, fast completions' },
          { Model: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'Tokens/sec (Apple M3 Max 128 GB)': '~18', 'Best For': 'Maximum quality, Apple Silicon 128 GB' },
        ],
        columns: ['Model', 'VRAM', 'Tokens/sec (RTX 4090)', 'Best For'],
        tableFormat: true,
        note: 'Q4_K_M is the recommended quantization for most users — best quality-to-size ratio. Q8_0 offers higher quality at higher VRAM cost.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements',
        items: [
          '**Minimum (Qwen 3.6 27B)**: GPU with 16 GB VRAM — RTX 4080, RTX 4070 Ti Super, or RTX 3090',
          '**Recommended**: RTX 4090 (24 GB VRAM) — runs Q4_K_M at 35 tokens/sec with 8 GB headroom',
          '**Apple Silicon (EU inference server)**: M3 Max or M4 Pro with 48 GB unified memory — silent, power-efficient, no external GPU',
          '**Mac Mini M4 Pro (48 GB)**: ~€1,599 retail, 40+ tokens/sec via MLX, compact form factor for office deployment',
          '**RAM**: 32 GB system RAM minimum alongside GPU inference; 64 GB recommended for running Qwen alongside a development environment',
          '**Storage**: 20 GB free disk space for Qwen 3.6 27B Q4_K_M (GGUF file ~17 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon unified memory is shared between CPU and GPU. A Mac with 48 GB unified memory can run Qwen 3.6 27B Q4_K_M with headroom for the OS and other applications. This makes it the most practical EU-hosted inference option in a single compact device.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup with Ollama',
        content: 'Ollama is the fastest way to run Qwen 3 locally. It manages model downloads, provides an OpenAI-compatible API at localhost:11434, and handles quantization automatically.',
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: 'Ollama handles model downloads, GGUF format, and provides an OpenAI-compatible local API.' },
          { title: 'Pull the Qwen 3 model', whyItMatters: 'Downloads Qwen 3.6 27B in Q4_K_M quantization (~17 GB). Ollama picks the right GGUF variant automatically.' },
          { title: 'Create a Modelfile with correct context length', whyItMatters: 'The default num_ctx of 2048 tokens is too small for real-world coding tasks. 32768 tokens handles most files and conversations.' },
          { title: 'Build the custom model and run it', whyItMatters: 'Creates a Qwen 3 instance with the extended context window. Use `ollama run qwen3-32k` to verify it works.' },
          { title: 'Test the API endpoint', whyItMatters: 'Ollama exposes an OpenAI-compatible API at localhost:11434/v1. Use this endpoint to connect LLM clients, IDEs, and PromptQuorum.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3
ollama pull qwen3
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Do not skip Step 3. Ollama\'s default num_ctx is 2048 tokens — roughly 1,500 words. Most coding tasks (reading a file, explaining a function, writing tests) require 8,000–32,000 tokens of context. Without this fix, Qwen silently truncates your prompts and produces degraded output.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Setup with LM Studio',
        content: 'LM Studio provides a GUI for running local LLMs without any CLI commands. It is the recommended path for non-technical users or Windows setups.',
        numberedItems: [
          { title: 'Download and install LM Studio', whyItMatters: 'Free, cross-platform GUI for local LLM inference. No CLI required.' },
          { title: 'Search for and download Qwen 3', whyItMatters: 'LM Studio\'s model browser searches Hugging Face. Search "Qwen 3 27B" and select the Q4_K_M GGUF variant for 16 GB VRAM.' },
          { title: 'Configure context length in LM Studio settings', whyItMatters: 'Same num_ctx issue as Ollama — change Context Length to 32768 in the model parameters before loading.' },
          { title: 'Start the local server', whyItMatters: 'LM Studio\'s "Start Server" creates an OpenAI-compatible API at localhost:1234. Use this URL in clients and PromptQuorum.' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3-27b-q4_k_m",
  "server": {
    "host": "localhost",
    "port": 1234,
    "cors": true
  },
  "inference": {
    "context_length": 32768,
    "temperature": 0.7,
    "gpu_layers": -1
  }
}`,
        codeLanguage: 'json',
        note: 'Set gpu_layers to -1 to offload all layers to GPU. On systems where the model fits in VRAM, full GPU offload delivers the fastest inference.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connecting to PromptQuorum',
        content: [
          'PromptQuorum routes prompts across multiple LLMs. To use your local Qwen instance as a dispatch target, configure the base URL to point to your Ollama or LM Studio endpoint.',
          'This setup routes coding tasks and private-data prompts through local Qwen (no cloud egress), while PromptQuorum can still route complex reasoning tasks to Claude Sonnet 4.6 or other cloud APIs as needed.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

ANTHROPIC_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3-32k

# Example: route code tasks to local Qwen, analysis to Claude
# PromptQuorum dispatch rules:
# - task_type: code       → model: qwen3-32k (local Ollama)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API)
# - task_type: private    → model: qwen3-32k (local Ollama, GDPR safe)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect PromptQuorum to local Qwen by setting ANTHROPIC_BASE_URL to http://localhost:11434/v1 and model to qwen3-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        items: [
          '**Model response is cut off mid-sentence**: num_ctx is too low. Rebuild your Modelfile with `PARAMETER num_ctx 32768` and recreate the model with `ollama create`.',
          '**CUDA out of memory error**: The model does not fit your VRAM. Switch to Qwen 3 14B Q4_K_M (~9 GB VRAM) or try a Q3_K_S quantization of 27B.',
          '**Ollama API returns 404**: Confirm the model name matches exactly. Run `ollama list` to see available models. Use the exact name shown.',
          '**Slow generation (< 5 tokens/sec)**: GPU layers not fully offloaded. Run `ollama run qwen3-32k` and check that `num_gpu_layers` is maximised. Ensure no other GPU-intensive process is running.',
          '**LM Studio shows "failed to load model"**: Insufficient VRAM. Reduce Q4_K_M context length to 16384 or switch to Qwen 3 14B.',
          '**PromptQuorum returns authentication error**: The Ollama API does not require a key. Set `OPENAI_API_KEY=ollama` (any non-empty string) in your PromptQuorum environment.',
        ],
        callouts: [
          { type: 'tip', text: 'Run `ollama ps` to see which models are currently loaded in VRAM and how much memory each is consuming. Use `ollama stop qwen3-32k` to unload a model before switching to a larger one.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          JSON.stringify({ title: 'Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — 2026 Comparison', url: '/local-llms/qwen-vs-claude-vs-deepseek-local-2026' }),
          JSON.stringify({ title: 'Why EU Companies Are Switching to Local Qwen', url: '/blog/eu-companies-local-qwen-gdpr-shift' }),
          JSON.stringify({ title: 'Qwen Coder vs DeepSeek vs Mistral — Coding Benchmark 2026', url: '/local-llms/qwen-coder-vs-deepseek-mistral-local-2026' }),
          JSON.stringify({ title: 'Browse All Local LLM Guides', url: '/local-llms' }),
          JSON.stringify({ title: 'Join the PromptQuorum Waitlist', url: '/waitlist' }),
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What is the minimum hardware to run Qwen 3 locally?', a: 'For Qwen 3.6 27B at Q4_K_M quantization: 16 GB VRAM (RTX 4080 or RTX 3090). For Apple Silicon: M3 Pro with 36 GB unified memory or M3 Max with 48 GB. For the smaller Qwen 3 14B: 9 GB VRAM (RTX 3080 or RTX 4070). Qwen 3 7B runs on 5 GB VRAM (GTX 1080 or better).' },
          { q: 'Why does Ollama truncate my prompts?', a: 'Ollama defaults to num_ctx 2048 tokens (~1,500 words). This is too small for most real-world coding tasks. You must set num_ctx to at least 32768 in your Modelfile. Create a Modelfile with `PARAMETER num_ctx 32768`, then run `ollama create qwen3-32k -f Modelfile` to build a model instance with the correct context window.' },
          { q: 'Is running Qwen locally GDPR compliant?', a: 'Yes — local inference is the most GDPR-compliant AI architecture possible. When Qwen runs on your hardware, no data is transferred to any third party. GDPR Article 44 restrictions on international data transfers do not apply because there is no data transfer. Your internal data processing agreement applies, but no SCCs or adequacy decisions are needed for the AI layer.' },
          { q: 'Can Qwen 3 run on CPU only?', a: 'Yes, via llama.cpp or Ollama on a system without a GPU. CPU inference is significantly slower — typically 1–5 tokens/second on a modern CPU for Qwen 3.6 27B. For production use, GPU or Apple Silicon is required. For occasional use or testing on a laptop without dedicated GPU, CPU inference works but is impractical for real-time conversation.' },
          { q: 'How do I update Qwen to the latest version?', a: 'Run `ollama pull qwen3` again. Ollama checks if a newer version is available and downloads only the changed layers. You do not need to recreate your Modelfile — the model name (qwen3) points to the latest version. In LM Studio, check the model library for updates and re-download if a newer GGUF version is available.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'Qwen 3 lokal ausfuehren 2026: Ollama + LM Studio Einrichtungsanleitung',
    seoTitle: 'Qwen 3 lokal ausfuehren 2026: Vollstaendige Ollama & LM Studio Anleitung',
    intro: 'Qwen 3.6 27B laeuft auf einer einzelnen Consumer-GPU (16 GB VRAM) ueber Ollama oder LM Studio. Die Einrichtung dauert weniger als 10 Minuten. Dieser Leitfaden deckt Modellauswahl, Hardware-Anforderungen, Ollama-CLI-Installation, LM Studio GUI-Setup, die entscheidende num_ctx-Korrektur und die Verbindung mit PromptQuorum ab.',
    metaDescription: 'Qwen 3 lokal ausfuehren 2026: Schritt-fuer-Schritt Ollama und LM Studio Setup, Hardware-Anforderungen, num_ctx-Korrektur und PromptQuorum-Integration. Stand: Mai 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '8 min Lesezeit',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Zwei Wege: Ollama (CLI, headless, API-bereit) oder LM Studio (GUI, kein CLI). Beide fuehren Qwen 3.6 27B lokal aus.',
          'Kritische Korrektur: Ollama verwendet standardmaessig num_ctx 2048. Setze num_ctx 32768 in deinem Modelfile.',
          'Hardware: Mindestens 16 GB VRAM (RTX 4080). Apple Silicon M3/M4 Max mit 48 GB Unified Memory ist die empfohlene EU-hosted Inference-Option.',
          'DSGVO: Sobald lokal ausgefuehrt, verlassen keine Daten deinen Rechner.',
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'Comment Exécuter Qwen 3 Localement en 2026 : Guide Ollama + LM Studio',
    seoTitle: 'Exécuter Qwen 3 Localement en 2026 : Guide Complet Ollama & LM Studio',
    intro: 'Qwen 3.6 27B fonctionne sur un seul GPU grand public (16 Go VRAM) via Ollama ou LM Studio. La configuration prend moins de 10 minutes. Ce guide couvre la sélection du modèle, les exigences matérielles, l\'installation CLI Ollama, la configuration GUI LM Studio, la correction critique de num_ctx et la connexion à PromptQuorum.',
    metaDescription: 'Comment exécuter Qwen 3 localement en 2026 : Ollama et LM Studio étape par étape, matériel requis, correction num_ctx, intégration PromptQuorum. Mis à jour mai 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '8 min de lecture',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Deux approches : Ollama (CLI, headless, prêt pour API) ou LM Studio (GUI, sans CLI). Les deux exécutent Qwen 3.6 27B localement.',
          'Correction critique : Ollama utilise num_ctx 2048 par défaut. Définissez num_ctx 32768 dans votre Modelfile.',
          'Matériel : 16 Go VRAM minimum (RTX 4080). Apple Silicon M3/M4 Max avec 48 Go mémoire unifiée est l\'option d\'inférence hébergée en UE recommandée.',
          'RGPD : une fois exécuté localement, aucune donnée ne quitte votre machine.',
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: '2026年にQwen 3をローカルで実行する方法：Ollama + LM Studioセットアップガイド',
    seoTitle: '2026年Qwen 3ローカル実行：完全なOllama & LM Studioセットアップガイド',
    intro: 'Qwen 3.6 27BはOllamaまたはLM Studioを使って、単一の消費者向けGPU（16 GB VRAM）上で動作します。セットアップは10分以内に完了します。このガイドでは、モデルの選択、ハードウェア要件、Ollama CLIのインストール、LM Studio GUIのセットアップ、重要なnum_ctxの修正、PromptQuorumへの接続を説明します。',
    metaDescription: '2026年にQwen 3をローカルで実行する方法：OllamaとLM Studioのステップバイステップセットアップ、ハードウェア要件、num_ctx修正、PromptQuorum統合。2026年5月更新。',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '8分で読めます',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2つの方法：Ollama（CLI、ヘッドレス、API対応）またはLM Studio（GUI、CLI不要）。どちらもQwen 3.6 27Bをローカルで実行できます。',
          '重要な修正：Ollamaのデフォルトnum_ctxは2048です。ModelfileでNum_ctx 32768を設定してください。',
          'ハードウェア：最低16 GB VRAM（RTX 4080）。48 GBユニファイドメモリのApple Silicon M3/M4 Maxが推奨のEUホスト推論オプションです。',
          'GDPR：ローカルで実行すると、データがあなたのマシンから外に出ることはありません。',
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: '2026年如何在本地运行Qwen 3：Ollama + LM Studio设置指南',
    seoTitle: '2026年本地运行Qwen 3：完整Ollama和LM Studio设置指南',
    intro: 'Qwen 3.6 27B通过Ollama或LM Studio在单个消费级GPU（16 GB显存）上运行。设置耗时不到10分钟。本指南涵盖模型选择、硬件要求、Ollama CLI安装、LM Studio GUI设置、关键的num_ctx修复以及连接到PromptQuorum。',
    metaDescription: '2026年如何在本地运行Qwen 3：Ollama和LM Studio分步设置、硬件要求、num_ctx修复和PromptQuorum集成。2026年5月更新。',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '8分钟阅读',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '两种方式：Ollama（CLI，无头，API就绪）或LM Studio（GUI，无需CLI）。两者都可在本地运行Qwen 3.6 27B。',
          '关键修复：Ollama默认num_ctx为2048。在Modelfile中设置num_ctx 32768。',
          '硬件：最低16 GB显存（RTX 4080）。带48 GB统一内存的Apple Silicon M3/M4 Max是推荐的欧盟托管推理选项。',
          'GDPR：本地运行后，没有数据会离开您的机器。',
        ],
      },
    },
  },
};
