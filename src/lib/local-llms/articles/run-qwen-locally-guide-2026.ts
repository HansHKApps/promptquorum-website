// Slug: run-qwen-locally-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: 'How to Run Qwen 3 Locally in 2026: Ollama + LM Studio Setup Guide',
    seoTitle: 'Run Qwen 3 Locally 2026: 16 GB VRAM, Under 10 Min',
    intro: 'Qwen 3.6 27B runs on a single consumer GPU (16 GB VRAM) via Ollama or LM Studio. Setup takes under 10 minutes. This guide covers model selection, hardware requirements, Ollama CLI installation, LM Studio GUI setup, the critical num_ctx fix, power consumption and TCO, and how to connect local Qwen to PromptQuorum for multi-model dispatch.',
    metaDescription: 'Run Qwen 3.6 27B locally on 16 GB VRAM via Ollama or LM Studio in under 10 minutes. Includes the critical num_ctx 32768 fix and 35 tok/s RTX 4090 benchmarks.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-en.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10 min read',
    educationalLevel: 'Beginner',
    audience: 'Developers setting up a local LLM for the first time, EU teams seeking GDPR-compliant AI',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Join the PromptQuorum Waitlist →',
    leadAnswerBlock: '**Run `ollama pull qwen3.6:27b` on any machine with 16 GB VRAM or Apple Silicon with 32+ GB unified memory. For GUI access, use LM Studio. Both run Qwen 3.6 27B fully offline. Critical: set `num_ctx` to 32768 or higher — Ollama\'s default of 2048 tokens truncates most real-world tasks.**',
    nextStep: {
      text: 'Qwen is running locally. Now explore the best UIs that make it usable.',
      label: 'Best Local LLM Frontends 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      en: {
        question: 'How do I run Qwen 3 locally in 2026?',
        answer: 'Install Ollama, run `ollama pull qwen3.6:27b`, then `ollama run qwen3.6:27b`. For GUI: download LM Studio, search "Qwen 3 27B", download the Q4_K_M GGUF file. Critical: set num_ctx to 32768 in Ollama (default 2048 is too small). For GDPR-compliant team use, connect via PromptQuorum\'s local Ollama dispatch endpoint.',
        bullets: [
          'Minimum hardware: 16 GB VRAM (RTX 4080) or Apple Silicon with 32 GB unified memory',
          'Ollama install: brew install ollama (Mac) or curl install.sh (Linux/Windows)',
          'Pull model: ollama pull qwen3.6:27b (downloads Qwen 3.6 27B Q4_K_M ~17 GB)',
          'Fix context: set num_ctx 32768 in Modelfile — default 2048 is too small',
          'LM Studio alternative: GUI-based, no CLI required, same model quality',
        ],
        updatedDate: '2026-05-16',
      },
      de: {
        question: 'Wie fuehre ich Qwen 3 lokal in 2026 aus?',
        answer: 'Installiere Ollama, fuehre `ollama pull qwen3.6:27b` aus, dann `ollama run qwen3.6:27b`. Fuer eine GUI: Lade LM Studio herunter, suche "Qwen 3 27B", lade die Q4_K_M GGUF-Datei herunter. Wichtig: Setze num_ctx auf 32768 in Ollama (Standardwert 2048 ist zu klein). Fuer DSGVO-konformen Team-Betrieb verbinde ueber den lokalen Ollama-Dispatch-Endpoint von PromptQuorum.',
        bullets: [
          'Mindest-Hardware: 16 GB VRAM (RTX 4080) oder Apple Silicon mit 32 GB Unified Memory',
          'Ollama-Installation: brew install ollama (Mac) oder install.sh (Linux/Windows)',
          'Modell laden: ollama pull qwen3.6:27b (laedt Qwen 3.6 27B Q4_K_M ~17 GB)',
          'Kontext korrigieren: num_ctx 32768 im Modelfile setzen — Standard 2048 ist zu klein',
          'LM Studio Alternative: GUI-basiert, kein CLI noetig, gleiche Modellqualitaet',
        ],
        updatedDate: '2026-05-16',
      },
      fr: {
        question: 'Comment exécuter Qwen 3 localement en 2026 ?',
        answer: 'Installez Ollama, exécutez `ollama pull qwen3.6:27b`, puis `ollama run qwen3.6:27b`. Pour GUI : téléchargez LM Studio, recherchez "Qwen 3 27B", téléchargez le fichier GGUF Q4_K_M. Critique : définissez num_ctx à 32768 dans Ollama (2048 par défaut est trop petit). Pour une utilisation d\'équipe conforme RGPD, connectez via l\'endpoint de dispatch Ollama local de PromptQuorum.',
        bullets: [
          'Matériel minimum : 16 Go VRAM (RTX 4080) ou Apple Silicon avec 32 Go mémoire unifiée',
          'Installation Ollama : brew install ollama (Mac) ou install.sh (Linux/Windows)',
          'Télécharger le modèle : ollama pull qwen3.6:27b (~17 Go)',
          'Corriger le contexte : num_ctx 32768 dans Modelfile — 2048 par défaut est trop petit',
          'Alternative LM Studio : interface graphique, pas de CLI requis',
        ],
        updatedDate: '2026-05-16',
      },
      ja: {
        question: '2026年にQwen 3をローカルで実行するには？',
        answer: 'Ollamaをインストールし、`ollama pull qwen3.6:27b`を実行してから`ollama run qwen3.6:27b`。GUIの場合：LM Studioをダウンロードし、「Qwen 3 27B」を検索、Q4_K_M GGUFファイルをダウンロード。重要：Ollamaのnum_ctxを32768に設定（デフォルトの2048は小さすぎる）。GDPRに準拠したチーム利用にはPromptQuorumのローカルOllamaディスパッチエンドポイント経由で接続。',
        bullets: [
          '最小ハードウェア：16 GB VRAM（RTX 4080）または32 GBユニファイドメモリのApple Silicon',
          'Ollamaインストール：brew install ollama（Mac）またはinstall.sh（Linux/Windows）',
          'モデル取得：ollama pull qwen3.6:27b（Qwen 3.6 27B Q4_K_M約17 GBをダウンロード）',
          'コンテキスト修正：Modelfileにてnum_ctx 32768を設定 — デフォルト2048は小さすぎる',
          'LM Studio代替：GUIベース、CLI不要、同等のモデル品質',
        ],
        updatedDate: '2026-05-16',
      },
      zh: {
        question: '2026年如何在本地运行Qwen 3？',
        answer: '安装Ollama，运行`ollama pull qwen3.6:27b`，然后`ollama run qwen3.6:27b`。GUI方式：下载LM Studio，搜索"Qwen 3 27B"，下载Q4_K_M GGUF文件。关键：将Ollama中的num_ctx设置为32768（默认2048太小）。如需GDPR合规团队使用，通过PromptQuorum的本地Ollama调度端点连接。',
        bullets: [
          '最低硬件：16 GB显存（RTX 4080）或32 GB统一内存的Apple Silicon',
          'Ollama安装：brew install ollama（Mac）或install.sh（Linux/Windows）',
          '拉取模型：ollama pull qwen3.6:27b（下载Qwen 3.6 27B Q4_K_M约17 GB）',
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
      { label: 'Power Consumption and TCO', anchor: '#power-tco' },
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
          '**Hardware**: 16 GB VRAM minimum (RTX 4080). Apple Silicon M4 Pro (48 GB) or M5 Max (128 GB) are the recommended EU-hosted inference options.',
          '**GDPR**: Once running locally, no data leaves your machine. No SCCs, no data processing agreements needed beyond your own infrastructure policy.',
          '**PromptQuorum integration**: Set `OLLAMA_BASE_URL=http://localhost:11434/v1` and `LOCAL_LLM_MODEL=qwen3.6:27b` in PromptQuorum\'s local dispatch settings — separate from the Anthropic API config.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Run Qwen Locally in 2026',
        content: [
          'Running Qwen 3 locally in 2026 means paying €0 per token for a model that reaches 92.1% HumanEval — comparable to or exceeding Claude Sonnet 5 on coding tasks. Once hardware is amortised, every prompt is free. For a development team of five generating 10M tokens per day, local inference saves ~$900/month versus Claude Sonnet 5 API pricing.',
          'EU GDPR compliance is the second driver. [GDPR Article 44](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679#d1e3567-1-1) restricts data transfers to third countries. When you run Qwen locally on EU hardware, your prompts, code, and customer data never leave your infrastructure. There are no data processing agreements with US or Chinese providers required, no [Schrems II](https://curia.europa.eu/juris/document/document.jsf?text=&docid=228677&pageIndex=0&doclang=en&mode=req&dir=&occ=first&part=1) risk assessments, and no privacy impact assessments for the AI layer.',
          'The third reason is latency. Local inference on an RTX 4090 generates 35+ tokens/second — comparable to API response times for short prompts, with no network round-trip overhead for longer completions.',
        ],
        callouts: [
          { type: 'tip', text: 'DeepSeek\'s model lineup evolves frequently. Verify the current model name and pricing at platform.deepseek.com before deployment. Figures reflect publicly available data as of May 2026.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Running Qwen 3.6 27B locally costs €0 per token after hardware, keeps all data on EU infrastructure, and delivers 35+ tokens/second on an RTX 4090.' },
          { type: 'plain-terms', text: 'Local LLM means the AI model runs on your own computer. You download the model file (about 17 GB for Qwen 3.6 27B), and every prompt you type is processed entirely on your machine — nothing is sent to any server.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Choose Your Qwen Model',
        content: [
          'Qwen 3 comes in multiple sizes. Choose based on your VRAM and required quality. All sizes are available on [Hugging Face (Qwen)](https://huggingface.co/Qwen) and via Ollama with explicit tags.',
        ],
        rows: [
          { Model: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'Tokens/sec (RTX 4090)': '~35', 'Best For': 'Production coding, complex tasks' },
          { Model: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'Tokens/sec (RTX 4090)': '~20', 'Best For': 'Maximum quality, dual-GPU' },
          { Model: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'Tokens/sec (RTX 4090)': '~60', 'Best For': '8–12 GB VRAM, general tasks' },
          { Model: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'Tokens/sec (RTX 4090)': '~80', 'Best For': 'Low VRAM, fast completions' },
          { Model: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'Tokens/sec (Apple M5 Max 128 GB)': '~22', 'Best For': 'Maximum quality, Apple Silicon 96 GB+' },
        ],
        columns: ['Model', 'VRAM', 'Tokens/sec (RTX 4090)', 'Best For'],
        tableFormat: true,
        note: 'Q4_K_M is the recommended quantization for most users — best quality-to-size ratio. Q8_0 offers higher quality at higher VRAM cost. Always use the explicit tag (qwen3.6:27b, not qwen3) to ensure you download the 27B model.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-en.png',
        imageCaption: 'Qwen 3 model sizes by VRAM and speed: 27B Q4_K_M needs 16 GB VRAM at ~35 tokens/sec, 14B needs 9 GB at ~60 tokens/sec, 7B needs 5 GB at ~80 tokens/sec, and 72B needs 42 GB.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements',
        items: [
          '**Minimum (Qwen 3.6 27B)**: GPU with 16 GB VRAM — RTX 4080, RTX 4070 Ti Super, or RTX 3090',
          '**Recommended GPU**: RTX 4090 (24 GB VRAM) — runs Q4_K_M at 35 tokens/sec with 8 GB headroom',
          '**Apple Silicon M3/M4 (current)**: M3 Max or M4 Pro with 48 GB unified memory — silent, power-efficient, 40+ tokens/sec via [MLX](https://developer.apple.com/metal/mlx)',
          '**Mac Mini M4 Pro (48 GB)**: ~€1,599 retail, compact form factor, best TCO for EU office deployment',
          '**Apple Silicon M5 Pro (64 GB)**: Next-gen, 307 GB/s memory bandwidth — runs Qwen 3.6 27B at estimated 50+ tokens/sec. Apple claims 4× faster LLM prompt processing vs M4.',
          '**Apple Silicon M5 Max (128 GB)**: 460–614 GB/s memory bandwidth — runs Qwen 3 72B Q4_K_M comfortably with headroom. Expected mid-2026 Mac Studio; current Mac Mini ships with M4 Pro.',
          '**RAM**: 32 GB system RAM minimum alongside GPU inference; 64 GB recommended alongside a full dev environment',
          '**Storage**: 20 GB free disk space for Qwen 3.6 27B Q4_K_M (GGUF file ~17 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon unified memory is shared between CPU and GPU. A Mac with 48 GB unified memory can run Qwen 3.6 27B Q4_K_M with headroom for the OS and other applications. This makes it the most practical EU-hosted inference option in a single compact device.' },
          { type: 'tip', text: 'M5 Max (128 GB) is the first Apple Silicon configuration where Qwen 3 72B runs at production speed. If you handle very long contexts or need maximum quality for EU-regulated workloads, M5 Max Mac Studio is the single-device recommendation.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup with Ollama',
        content: [
          'Ollama is the fastest way to run Qwen 3 locally. It manages model downloads, provides an OpenAI-compatible API at localhost:11434, and handles quantization automatically. Install it from [ollama.com](https://ollama.com/download).',
        ],
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: 'Ollama handles model downloads, GGUF format, and provides an OpenAI-compatible local API.' },
          { title: 'Pull the Qwen 3.6 27B model with explicit tag', whyItMatters: 'Use qwen3.6:27b explicitly. The bare `qwen3` tag defaults to 8B — not the 27B model this guide targets.' },
          { title: 'Create a Modelfile with correct context length', whyItMatters: 'The default num_ctx of 2048 tokens is too small for real-world coding tasks. 32768 tokens handles most files and conversations.' },
          { title: 'Build the custom model and run it', whyItMatters: 'Creates a Qwen 3.6 27B instance with the extended context window. Verify with a test prompt.' },
          { title: 'Test the API endpoint', whyItMatters: 'Ollama exposes an OpenAI-compatible API at localhost:11434/v1. Use this endpoint to connect LLM clients, IDEs, and PromptQuorum.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

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
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-en.png',
        imageCaption: 'Five-step Ollama setup for Qwen 3.6 27B: install Ollama, pull qwen3.6:27b, fix num_ctx to 32768 in the Modelfile, build and run the model, then test the localhost:11434/v1 API endpoint — under 10 minutes total.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Setup with LM Studio',
        content: [
          'LM Studio provides a GUI for running local LLMs without any CLI commands. It is the recommended path for non-technical users or Windows setups. Download from [lmstudio.ai](https://lmstudio.ai).',
        ],
        numberedItems: [
          { title: 'Download and install LM Studio', whyItMatters: 'Free, cross-platform GUI for local LLM inference. No CLI required.' },
          { title: 'Search for and download Qwen 3 27B', whyItMatters: 'LM Studio\'s model browser searches Hugging Face. Search "Qwen 3 27B" and select the Q4_K_M GGUF variant for 16 GB VRAM.' },
          { title: 'Configure context length in LM Studio settings', whyItMatters: 'Same num_ctx issue as Ollama — change Context Length to 32768 in the model parameters before loading.' },
          { title: 'Start the local server', whyItMatters: 'LM Studio\'s "Start Server" creates an OpenAI-compatible API at localhost:1234. Use this URL in clients and PromptQuorum.' },
          { title: 'Install Claude Code (optional)', whyItMatters: 'Claude Code is Anthropic\'s CLI for running Claude locally. Download from https://claude.com/claude-code (all platforms: macOS, Windows, Linux).' },
          { title: 'Install the Claude Code Proxy', whyItMatters: 'The free Claude Code Proxy (OpenClaw-based) bridges Claude Code to local LLMs. Run: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`. On Windows, launch with: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`.' },
          { title: 'Configure Claude Code to use local Qwen', whyItMatters: 'In Claude Code settings, set API endpoint to http://localhost:8082. Claude Code will route requests through the proxy to your LM Studio instance (localhost:1234), letting you use Qwen 3.6 27B as your coding assistant.' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
          'PromptQuorum routes prompts across multiple LLMs. To use your local Qwen instance as a dispatch target, configure PromptQuorum\'s local LLM endpoint to point to your Ollama server.',
          'This is the Ollama (OpenAI-compatible) endpoint — distinct from the Anthropic API configuration used for Claude. Both can be active simultaneously, with PromptQuorum routing based on task type and data sensitivity.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect PromptQuorum to local Qwen by setting OLLAMA_BASE_URL to http://localhost:11434/v1 and LOCAL_LLM_MODEL to qwen3.6:27b in the local dispatch settings.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        items: [
          '**Model response is cut off mid-sentence**: num_ctx is too low. Rebuild your Modelfile with `PARAMETER num_ctx 32768` and recreate the model with `ollama create`.',
          '**CUDA out of memory error**: The model does not fit your VRAM. Switch to Qwen 3 14B Q4_K_M (~9 GB VRAM) or try a Q3_K_S quantization of 27B.',
          '**Ollama API returns 404**: Confirm the model name matches exactly. Run `ollama list` to see available models. Use the exact name shown (e.g., `qwen3-32k`).',
          '**Slow generation (< 5 tokens/sec)**: GPU layers not fully offloaded. Run `ollama run qwen3-32k` and check that `num_gpu_layers` is maximised. Ensure no other GPU-intensive process is running.',
          '**LM Studio shows "failed to load model"**: Insufficient VRAM. Reduce Q4_K_M context length to 16384 or switch to Qwen 3 14B.',
          '**PromptQuorum returns authentication error**: Set `OLLAMA_BASE_URL=http://localhost:11434/v1` in PromptQuorum\'s local LLM settings. If a key is required by the form, enter any non-empty string — Ollama does not require API key authentication.',
          '**Ollama uses CPU instead of GPU**: On NVIDIA: confirm CUDA drivers are installed (`nvidia-smi` should show the GPU). On Mac: Ollama uses Metal automatically — no configuration needed. If Metal is not active, reinstall Ollama from ollama.com.',
          '**Model download stalls or fails**: Large models (Qwen 3.6 27B ~17 GB) time out on slow connections. Run `ollama pull qwen3.6:27b` again — Ollama resumes from where it left off. Alternatively, download the GGUF directly from [Hugging Face](https://huggingface.co/Qwen) and use `ollama create` with a local path in the Modelfile FROM clause.',
        ],
        callouts: [
          { type: 'tip', text: 'Run `ollama ps` to see which models are currently loaded in VRAM and how much memory each is consuming. Use `ollama stop qwen3-32k` to unload a model before switching to a larger one.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Power Consumption and TCO',
        content: [
          'Hardware cost is the one-time investment. Electricity is the ongoing cost. The right hardware choice depends on your electricity price, usage hours, and whether you are in the EU (where electricity averages ~€0.35/kWh in 2026 in Germany, compared to ~$0.13/kWh in the US).',
          'An RTX 4090 system under inference load draws approximately 450 W. Running 8 hours/day at the German electricity rate: 0.45 kW × 8h × €0.35 × 250 working days = **€315/year in electricity**. The hardware costs ~€2,000–2,500 for a complete system.',
          'Apple Silicon M5 Max in a Mac Studio draws approximately 40–50 W under LLM inference load. Same scenario: 0.05 kW × 8h × €0.35 × 250 days = **€35/year in electricity**. Hardware cost is ~€3,000–4,000 for a Mac Studio M5 Max with 128 GB.',
          'Compared against Claude Sonnet 5 API at 10M tokens/day for a single developer: 10M tokens × $3/1M × 250 days = **$7,500/year**.',
        ],
        rows: [
          { Option: 'Claude Sonnet 5 API', 'Hardware': '—', 'Electricity/year (EU)': '—', 'API cost/year (10M tok/day)': '$7,500', 'Break-even': '—' },
          { Option: 'RTX 4090 system + local Qwen', 'Hardware': '€2,200', 'Electricity/year (EU)': '€315', 'API cost/year (10M tok/day)': '$0', 'Break-even': '~4 months vs Claude' },
          { Option: 'Mac Mini M4 Pro (48 GB)', 'Hardware': '€1,599', 'Electricity/year (EU)': '€25', 'API cost/year (10M tok/day)': '$0', 'Break-even': '~3 months vs Claude' },
          { Option: 'Mac Studio M5 Max (128 GB)', 'Hardware': '~€3,500', 'Electricity/year (EU)': '€35', 'API cost/year (10M tok/day)': '$0', 'Break-even': '~6 months vs Claude' },
        ],
        columns: ['Option', 'Hardware', 'Electricity/year (EU)', 'API cost/year (10M tok/day)', 'Break-even'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'For EU teams in high-electricity-price jurisdictions, the Mac Mini M4 Pro (48 GB) offers the best TCO: lowest combined hardware + electricity cost, GDPR compliance by design, and silent operation in an office environment. The Mac Studio M5 Max is the upgrade path for teams needing Qwen 3 72B quality.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Qwen 3.6 vs Claude Sonnet 5 vs DeepSeek — 2026 Comparison](/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Why EU Companies Are Switching to Local Qwen](/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — Coding Benchmark 2026](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[Local AI Production Deployment: Building a Privacy-First Customer Service Agent](https://www.youtube.com/watch?v=W1f9bWj4pAE) — Rob Braxman case study covering hardware trade-offs, memory management, and real-world performance for self-hosted AI agents.',
          '[Browse All Local LLM Guides](/local-llms)',
          '[Join the PromptQuorum Waitlist](/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: 'What is the minimum hardware to run Qwen 3 locally?', a: 'For Qwen 3.6 27B at Q4_K_M quantization: 16 GB VRAM (RTX 4080 or RTX 3090). For Apple Silicon: M3 Pro with 36 GB unified memory or M3 Max with 48 GB. For the smaller Qwen 3 14B: 9 GB VRAM (RTX 3080 or RTX 4070). Qwen 3 7B runs on 5 GB VRAM (GTX 1080 or better).' },
          { q: 'Why does Ollama truncate my prompts?', a: 'Ollama defaults to num_ctx 2048 tokens (~1,500 words). This is too small for most real-world coding tasks. You must set num_ctx to at least 32768 in your Modelfile. Create a Modelfile with `PARAMETER num_ctx 32768`, then run `ollama create qwen3-32k -f Modelfile` to build a model instance with the correct context window.' },
          { q: 'Is running Qwen locally GDPR compliant?', a: 'Yes — local inference is one of the most GDPR-friendly AI architectures (no inference data sent to third parties). When Qwen runs on your hardware, no data is transferred to any third party. GDPR Article 44 restrictions on international data transfers do not apply because there is no data transfer. Your internal data processing agreement applies, but no SCCs or adequacy decisions are needed for the AI layer.' },
          { q: 'Can Qwen 3 run on CPU only?', a: 'Yes, via llama.cpp or Ollama on a system without a GPU. CPU inference is significantly slower — typically 1–5 tokens/second on a modern CPU for Qwen 3.6 27B. For production use, GPU or Apple Silicon is required. For occasional use or testing on a laptop without dedicated GPU, CPU inference works but is impractical for real-time conversation.' },
          { q: 'How do I update Qwen to the latest version?', a: 'Run `ollama pull qwen3.6:27b` again. Ollama checks if a newer version is available and downloads only the changed layers. You do not need to recreate your Modelfile — the model tag (qwen3.6:27b) always points to the latest 27B release. In LM Studio, check the model library for updates and re-download if a newer GGUF version is available.' },
          { q: 'Can I use Claude Code with local Qwen?', a: 'Yes. Claude Code is Anthropic\'s CLI for coding with Claude. To use it with local Qwen 3.6 27B, install the free Claude Code Proxy, point it to your LM Studio instance (localhost:1234), then configure Claude Code to route requests through the proxy (localhost:8082). Your code remains fully local — no Anthropic API key is required.' },
          { q: 'Do I need an Anthropic API key to run Claude Code with local Qwen?', a: 'No. When using Claude Code with a local LLM via the proxy, the Anthropic API key is not used. The proxy intercepts Claude Code\'s requests and routes them to your LM Studio server instead. You only need the API key if you choose to also use Anthropic\'s Claude API for other tasks in parallel.' },
          { q: 'What\'s the difference between the Claude Code Proxy and Ollama?', a: 'Ollama is a local LLM runtime that manages model downloads, quantization, context configuration, and exposes an OpenAI-compatible API (localhost:11434/v1). The Claude Code Proxy is a lightweight bridge that connects Claude Code specifically to any local LLM (Ollama, LM Studio, or llama.cpp). Both can run simultaneously: Ollama handles the model, the proxy handles the Claude Code client connection. Alternatively, use LM Studio as your runtime instead of Ollama — the proxy works with both.' },
          { q: 'Does using Claude Code with local Qwen affect inference speed?', a: 'No significant impact. The proxy adds negligible latency (< 50ms) since it runs on the same machine as your LM Studio instance. Inference speed is determined by your GPU and the model quantization (Q4_K_M is standard), not the proxy. Full inference-to-response time for a code generation task is typically 20–60 seconds on an RTX 4080, depending on output length.' },
        ],
      },
    },
  },
  es: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: 'Cómo ejecutar Qwen 3 localmente en 2026: Guía de configuración Ollama + LM Studio',
    seoTitle: 'Ejecutar Qwen 3 en local 2026: 16 GB VRAM, 10 min',
    intro: 'Qwen 3.6 27B se ejecuta en una sola GPU de consumo (16 GB VRAM) a través de Ollama o LM Studio. La configuración tarda menos de 10 minutos. Esta guía cubre la selección del modelo, los requisitos de hardware, la instalación de Ollama CLI, la configuración GUI de LM Studio, la corrección crítica de num_ctx, el consumo eléctrico y TCO, y cómo conectar Qwen local a PromptQuorum para despacho multi-modelo.',
    metaDescription: 'Ejecuta Qwen 3.6 27B en local con 16 GB VRAM vía Ollama o LM Studio en menos de 10 minutos. Incluye la corrección crítica num_ctx 32768 y 35 tok/s en RTX 4090.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-es.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Desarrolladores que configuran un LLM local por primera vez, equipos en la UE que buscan IA conforme al RGPD',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Unirse a la lista de espera de PromptQuorum →',
    leadAnswerBlock: '**Ejecuta `ollama pull qwen3.6:27b` en cualquier máquina con 16 GB VRAM o Apple Silicon con 32+ GB de memoria unificada. Para acceso GUI, usa LM Studio. Ambos ejecutan Qwen 3.6 27B completamente sin conexión. Crítico: establece `num_ctx` en 32768 o superior — el valor predeterminado de 2048 tokens de Ollama trunca la mayoría de las tareas reales.**',
    nextStep: {
      text: 'Qwen está corriendo localmente. Ahora explora las mejores interfaces que lo hacen usable.',
      label: 'Mejores frontends de LLM local 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      es: {
        question: '¿Cómo ejecuto Qwen 3 localmente en 2026?',
        answer: 'Instala Ollama, ejecuta `ollama pull qwen3.6:27b`, luego `ollama run qwen3.6:27b`. Para GUI: descarga LM Studio, busca "Qwen 3 27B", descarga el archivo GGUF Q4_K_M. Crítico: establece num_ctx en 32768 en Ollama (el valor predeterminado 2048 es demasiado pequeño). Para uso en equipo conforme al RGPD, conecta a través del endpoint de despacho local de Ollama de PromptQuorum.',
        bullets: [
          'Hardware mínimo: 16 GB VRAM (RTX 4080) o Apple Silicon con 32 GB de memoria unificada',
          'Instalación de Ollama: brew install ollama (Mac) o curl install.sh (Linux/Windows)',
          'Descargar modelo: ollama pull qwen3.6:27b (descarga Qwen 3.6 27B Q4_K_M ~17 GB)',
          'Corregir contexto: establece num_ctx 32768 en el Modelfile — el valor predeterminado 2048 es demasiado pequeño',
          'Alternativa LM Studio: basado en GUI, sin CLI requerido, misma calidad de modelo',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Por qué ejecutar Qwen localmente en 2026', anchor: '#why-local' },
      { label: 'Elige tu modelo Qwen', anchor: '#choose-model' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Configuración con Ollama', anchor: '#ollama-setup' },
      { label: 'Configuración con LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Conexión a PromptQuorum', anchor: '#promptquorum' },
      { label: 'Solución de problemas', anchor: '#troubleshooting' },
      { label: 'Consumo eléctrico y TCO', anchor: '#power-tco' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Dos caminos**: Ollama (CLI, headless, listo para API) o LM Studio (GUI, sin CLI). Ambos ejecutan Qwen 3.6 27B localmente.',
          '**Corrección crítica**: Ollama usa `num_ctx 2048` por defecto. Esto trunca la mayoría de los prompts reales. Establece `num_ctx 32768` en tu Modelfile o mediante el parámetro `num_ctx` de la API.',
          '**Hardware**: mínimo 16 GB VRAM (RTX 4080). Apple Silicon M4 Pro (48 GB) o M5 Max (128 GB) son las opciones de inferencia recomendadas para equipos en la UE.',
          '**RGPD**: una vez en ejecución local, ningún dato sale de tu máquina. No se necesitan SCCs ni acuerdos de procesamiento de datos más allá de tu propia política de infraestructura.',
          '**Integración con PromptQuorum**: establece `OLLAMA_BASE_URL=http://localhost:11434/v1` y `LOCAL_LLM_MODEL=qwen3.6:27b` en la configuración de despacho local de PromptQuorum — separado de la configuración de la API de Anthropic.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por qué ejecutar Qwen localmente en 2026',
        content: [
          'Ejecutar Qwen 3 localmente en 2026 significa pagar €0 por token para un modelo que alcanza el 92,1% en HumanEval — comparable o superior a Claude Sonnet 5 en tareas de programación. Una vez amortizado el hardware, cada prompt es gratuito. Para un equipo de desarrollo de cinco personas que genera 10 millones de tokens al día, la inferencia local ahorra ~$900/mes frente a los precios de la API de Claude Sonnet 5.',
          'El cumplimiento del RGPD de la UE es el segundo factor. El artículo 44 del RGPD restringe las transferencias de datos a terceros países. Cuando ejecutas Qwen localmente en hardware de la UE, tus prompts, código y datos de clientes nunca salen de tu infraestructura. No se requieren acuerdos de procesamiento de datos con proveedores estadounidenses o chinos, ni evaluaciones de riesgo Schrems II, ni evaluaciones de impacto sobre la privacidad para la capa de IA.',
          'La tercera razón es la latencia. La inferencia local en una RTX 4090 genera más de 35 tokens/segundo — comparable a los tiempos de respuesta de la API para prompts cortos, sin el tiempo de ida y vuelta de red para completaciones más largas.',
        ],
        callouts: [
          { type: 'tip', text: 'La línea de modelos de DeepSeek evoluciona con frecuencia. Verifica el nombre del modelo actual y los precios en platform.deepseek.com antes del despliegue. Las cifras reflejan datos disponibles públicamente a mayo de 2026.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ejecutar Qwen 3.6 27B localmente cuesta €0 por token después del hardware, mantiene todos los datos en infraestructura de la UE y entrega más de 35 tokens/segundo en una RTX 4090.' },
          { type: 'plain-terms', text: 'LLM local significa que el modelo de IA corre en tu propio computador. Descargas el archivo del modelo (unos 17 GB para Qwen 3.6 27B) y cada prompt que escribes se procesa completamente en tu máquina — nada se envía a ningún servidor.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Elige tu modelo Qwen',
        content: [
          'Qwen 3 está disponible en múltiples tamaños. Elige según tu VRAM y la calidad requerida. Todos los tamaños están disponibles en [Hugging Face (Qwen)](https://huggingface.co/Qwen) y a través de Ollama con etiquetas explícitas.',
        ],
        rows: [
          { Modelo: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'Tokens/seg (RTX 4090)': '~35', 'Mejor para': 'Programación en producción, tareas complejas' },
          { Modelo: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'Tokens/seg (RTX 4090)': '~20', 'Mejor para': 'Máxima calidad, GPU dual' },
          { Modelo: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'Tokens/seg (RTX 4090)': '~60', 'Mejor para': '8–12 GB VRAM, tareas generales' },
          { Modelo: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'Tokens/seg (RTX 4090)': '~80', 'Mejor para': 'VRAM reducida, completaciones rápidas' },
          { Modelo: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'Tokens/seg (Apple M5 Max 128 GB)': '~22', 'Mejor para': 'Máxima calidad, Apple Silicon 96 GB+' },
        ],
        columns: ['Modelo', 'VRAM', 'Tokens/seg (RTX 4090)', 'Mejor para'],
        tableFormat: true,
        note: 'Q4_K_M es la cuantización recomendada para la mayoría de los usuarios — mejor relación calidad-tamaño. Q8_0 ofrece mayor calidad a mayor costo de VRAM. Usa siempre la etiqueta explícita (qwen3.6:27b, no qwen3) para asegurarte de descargar el modelo 27B.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-es.png',
        imageCaption: 'Tamaños de modelo Qwen 3 por VRAM y velocidad: 27B Q4_K_M necesita 16 GB VRAM a ~35 tokens/seg, 14B necesita 9 GB a ~60 tokens/seg, 7B necesita 5 GB a ~80 tokens/seg, y 72B necesita 42 GB.',
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware',
        items: [
          '**Mínimo (Qwen 3.6 27B)**: GPU con 16 GB VRAM — RTX 4080, RTX 4070 Ti Super o RTX 3090',
          '**GPU recomendada**: RTX 4090 (24 GB VRAM) — ejecuta Q4_K_M a 35 tokens/seg con 8 GB de margen',
          '**Apple Silicon M3/M4 (actual)**: M3 Max o M4 Pro con 48 GB de memoria unificada — silencioso, eficiente en energía, 40+ tokens/seg vía [MLX](https://developer.apple.com/metal/mlx)',
          '**Mac Mini M4 Pro (48 GB)**: ~€1,599 en tienda, factor de forma compacto, mejor TCO para despliegue en oficinas de la UE',
          '**Apple Silicon M5 Pro (64 GB)**: próxima generación, 307 GB/s de ancho de banda de memoria — ejecuta Qwen 3.6 27B a un estimado de 50+ tokens/seg. Apple afirma un procesamiento de prompts LLM 4× más rápido que M4.',
          '**Apple Silicon M5 Max (128 GB)**: 460–614 GB/s de ancho de banda de memoria — ejecuta Qwen 3 72B Q4_K_M cómodamente con margen. Esperado a mediados de 2026 en Mac Studio; el Mac Mini actual viene con M4 Pro.',
          '**RAM**: mínimo 32 GB de RAM del sistema junto a la inferencia GPU; 64 GB recomendados junto a un entorno de desarrollo completo',
          '**Almacenamiento**: 20 GB de espacio libre en disco para Qwen 3.6 27B Q4_K_M (archivo GGUF ~17 GB)',
        ],
        callouts: [
          { type: 'note', text: 'La memoria unificada de Apple Silicon se comparte entre CPU y GPU. Un Mac con 48 GB de memoria unificada puede ejecutar Qwen 3.6 27B Q4_K_M con margen para el SO y otras aplicaciones. Esto lo convierte en la opción de inferencia local más práctica en un único dispositivo compacto.' },
          { type: 'tip', text: 'M5 Max (128 GB) es la primera configuración de Apple Silicon donde Qwen 3 72B funciona a velocidad de producción. Si manejas contextos muy largos o necesitas máxima calidad para cargas de trabajo reguladas en la UE, Mac Studio M5 Max es la recomendación de dispositivo único.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuración con Ollama',
        content: [
          'Ollama es la forma más rápida de ejecutar Qwen 3 localmente. Gestiona las descargas de modelos, proporciona una API compatible con OpenAI en localhost:11434 y maneja la cuantización automáticamente. Instálalo desde [ollama.com](https://ollama.com/download).',
        ],
        numberedItems: [
          { title: 'Instalar Ollama', whyItMatters: 'Ollama gestiona las descargas de modelos, el formato GGUF y proporciona una API local compatible con OpenAI.' },
          { title: 'Descargar el modelo Qwen 3.6 27B con etiqueta explícita', whyItMatters: 'Usa qwen3.6:27b de forma explícita. La etiqueta simple `qwen3` descarga por defecto el modelo 8B — no el modelo 27B al que apunta esta guía.' },
          { title: 'Crear un Modelfile con la longitud de contexto correcta', whyItMatters: 'El num_ctx predeterminado de 2048 tokens es demasiado pequeño para tareas reales de programación. 32768 tokens maneja la mayoría de archivos y conversaciones.' },
          { title: 'Construir el modelo personalizado y ejecutarlo', whyItMatters: 'Crea una instancia de Qwen 3.6 27B con la ventana de contexto extendida. Verifica con un prompt de prueba.' },
          { title: 'Probar el endpoint de la API', whyItMatters: 'Ollama expone una API compatible con OpenAI en localhost:11434/v1. Usa este endpoint para conectar clientes LLM, IDEs y PromptQuorum.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'No omitas el paso 3. El num_ctx predeterminado de Ollama es 2048 tokens — aproximadamente 1500 palabras. La mayoría de las tareas de programación (leer un archivo, explicar una función, escribir pruebas) requieren 8000–32000 tokens de contexto. Sin esta corrección, Qwen trunca silenciosamente tus prompts y produce resultados degradados.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-es.png',
        imageCaption: 'Cinco pasos de configuración de Ollama para Qwen 3.6 27B: instalar Ollama, descargar qwen3.6:27b, corregir num_ctx a 32768 en el Modelfile, construir y ejecutar el modelo, luego probar el endpoint de API localhost:11434/v1 — menos de 10 minutos en total.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configuración con LM Studio',
        content: [
          'LM Studio proporciona una GUI para ejecutar LLMs locales sin ningún comando CLI. Es el camino recomendado para usuarios no técnicos o configuraciones en Windows. Descárgalo desde [lmstudio.ai](https://lmstudio.ai).',
        ],
        numberedItems: [
          { title: 'Descargar e instalar LM Studio', whyItMatters: 'GUI gratuita y multiplataforma para inferencia LLM local. No se requiere CLI.' },
          { title: 'Buscar y descargar Qwen 3 27B', whyItMatters: 'El navegador de modelos de LM Studio busca en Hugging Face. Busca "Qwen 3 27B" y selecciona la variante GGUF Q4_K_M para 16 GB VRAM.' },
          { title: 'Configurar la longitud de contexto en los ajustes de LM Studio', whyItMatters: 'El mismo problema de num_ctx que en Ollama — cambia la longitud de contexto a 32768 en los parámetros del modelo antes de cargarlo.' },
          { title: 'Iniciar el servidor local', whyItMatters: 'El botón "Iniciar servidor" de LM Studio crea una API compatible con OpenAI en localhost:1234. Usa esta URL en clientes y PromptQuorum.' },
          { title: 'Instalar Claude Code (opcional)', whyItMatters: 'Claude Code es el CLI de Anthropic para ejecutar Claude localmente. Descárgalo desde https://claude.com/claude-code (todas las plataformas: macOS, Windows, Linux).' },
          { title: 'Instalar el proxy de Claude Code', whyItMatters: 'El proxy gratuito de Claude Code (basado en OpenClaw) conecta Claude Code con LLMs locales. Ejecuta: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`. En Windows, inicia con: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`.' },
          { title: 'Configurar Claude Code para usar Qwen local', whyItMatters: 'En los ajustes de Claude Code, establece el endpoint de API en http://localhost:8082. Claude Code enrutará las solicitudes a través del proxy a tu instancia de LM Studio (localhost:1234), permitiéndote usar Qwen 3.6 27B como asistente de programación.' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: 'Establece gpu_layers en -1 para descargar todas las capas a la GPU. En sistemas donde el modelo cabe en VRAM, la descarga completa a GPU ofrece la inferencia más rápida.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Conexión a PromptQuorum',
        content: [
          'PromptQuorum enruta prompts a través de múltiples LLMs. Para usar tu instancia local de Qwen como destino de despacho, configura el endpoint LLM local de PromptQuorum para que apunte a tu servidor Ollama.',
          'Este es el endpoint de Ollama (compatible con OpenAI) — distinto de la configuración de la API de Anthropic utilizada para Claude. Ambos pueden estar activos simultáneamente, con PromptQuorum enrutando según el tipo de tarea y la sensibilidad de los datos.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Conecta PromptQuorum a Qwen local estableciendo OLLAMA_BASE_URL en http://localhost:11434/v1 y LOCAL_LLM_MODEL en qwen3.6:27b en los ajustes de despacho local.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Solución de problemas',
        items: [
          '**La respuesta del modelo se corta a mitad de frase**: num_ctx es demasiado bajo. Reconstruye tu Modelfile con `PARAMETER num_ctx 32768` y vuelve a crear el modelo con `ollama create`.',
          '**Error CUDA out of memory**: el modelo no cabe en tu VRAM. Cambia a Qwen 3 14B Q4_K_M (~9 GB VRAM) o prueba una cuantización Q3_K_S del 27B.',
          '**La API de Ollama devuelve 404**: confirma que el nombre del modelo coincide exactamente. Ejecuta `ollama list` para ver los modelos disponibles. Usa el nombre exacto mostrado (por ejemplo, `qwen3-32k`).',
          '**Generación lenta (< 5 tokens/seg)**: capas de GPU no completamente descargadas. Ejecuta `ollama run qwen3-32k` y verifica que `num_gpu_layers` esté maximizado. Asegúrate de que ningún otro proceso intensivo en GPU esté corriendo.',
          '**LM Studio muestra "error al cargar el modelo"**: VRAM insuficiente. Reduce la longitud de contexto Q4_K_M a 16384 o cambia a Qwen 3 14B.',
          '**PromptQuorum devuelve error de autenticación**: establece `OLLAMA_BASE_URL=http://localhost:11434/v1` en los ajustes de LLM local de PromptQuorum. Si el formulario requiere una clave, introduce cualquier cadena no vacía — Ollama no requiere autenticación por clave de API.',
          '**Ollama usa CPU en lugar de GPU**: en NVIDIA: confirma que los drivers CUDA están instalados (`nvidia-smi` debe mostrar la GPU). En Mac: Ollama usa Metal automáticamente — no se necesita configuración. Si Metal no está activo, reinstala Ollama desde ollama.com.',
          '**La descarga del modelo se detiene o falla**: los modelos grandes (Qwen 3.6 27B ~17 GB) pueden agotar el tiempo de espera en conexiones lentas. Ejecuta `ollama pull qwen3.6:27b` de nuevo — Ollama reanuda desde donde se detuvo. Alternativamente, descarga el GGUF directamente desde [Hugging Face](https://huggingface.co/Qwen) y usa `ollama create` con una ruta local en la cláusula FROM del Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'Ejecuta `ollama ps` para ver qué modelos están actualmente cargados en VRAM y cuánta memoria consume cada uno. Usa `ollama stop qwen3-32k` para descargar un modelo antes de cambiar a uno más grande.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Consumo eléctrico y TCO',
        content: [
          'El costo del hardware es la inversión única. La electricidad es el costo continuo. La elección correcta de hardware depende de tu precio de electricidad, las horas de uso y si estás en la UE (donde la electricidad promedia ~€0,35/kWh en Alemania en 2026, comparado con ~$0,13/kWh en EE. UU.).',
          'Un sistema RTX 4090 bajo carga de inferencia consume aproximadamente 450 W. Funcionando 8 horas/día al precio alemán de electricidad: 0,45 kW × 8 h × €0,35 × 250 días laborables = **€315/año en electricidad**. El hardware cuesta ~€2.000–2.500 para un sistema completo.',
          'Apple Silicon M5 Max en un Mac Studio consume aproximadamente 40–50 W bajo carga de inferencia LLM. Mismo escenario: 0,05 kW × 8 h × €0,35 × 250 días = **€35/año en electricidad**. El hardware cuesta ~€3.000–4.000 para un Mac Studio M5 Max con 128 GB.',
          'Comparado con la API de Claude Sonnet 5 a 10 millones de tokens/día para un solo desarrollador: 10 M tokens × $3/1 M × 250 días = **$7.500/año**.',
        ],
        rows: [
          { Opción: 'Claude Sonnet 5 API', Hardware: '—', 'Electricidad/año (UE)': '—', 'Costo API/año (10 M tok/día)': '$7.500', 'Amortización': '—' },
          { Opción: 'Sistema RTX 4090 + Qwen local', Hardware: '€2.200', 'Electricidad/año (UE)': '€315', 'Costo API/año (10 M tok/día)': '$0', 'Amortización': '~4 meses vs Claude' },
          { Opción: 'Mac Mini M4 Pro (48 GB)', Hardware: '€1.599', 'Electricidad/año (UE)': '€25', 'Costo API/año (10 M tok/día)': '$0', 'Amortización': '~3 meses vs Claude' },
          { Opción: 'Mac Studio M5 Max (128 GB)', Hardware: '~€3.500', 'Electricidad/año (UE)': '€35', 'Costo API/año (10 M tok/día)': '$0', 'Amortización': '~6 meses vs Claude' },
        ],
        columns: ['Opción', 'Hardware', 'Electricidad/año (UE)', 'Costo API/año (10 M tok/día)', 'Amortización'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'Para equipos de la UE en jurisdicciones con electricidad cara, el Mac Mini M4 Pro (48 GB) ofrece el mejor TCO: menor costo combinado de hardware y electricidad, cumplimiento RGPD por diseño y funcionamiento silencioso en entorno de oficina. El Mac Studio M5 Max es la opción de actualización para equipos que necesitan la calidad de Qwen 3 72B.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Qwen 3.6 vs Claude Sonnet 5 vs DeepSeek — Comparativa 2026](/es/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Por qué las empresas de la UE están cambiando a Qwen local](/es/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — Benchmark de programación 2026](/es/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[Local AI Production Deployment: Building a Privacy-First Customer Service Agent](https://www.youtube.com/watch?v=W1f9bWj4pAE) — Estudio de caso de Rob Braxman sobre compensaciones de hardware, gestión de memoria y rendimiento en producción para agentes de IA autoalojados.',
          '[Ver todas las guías de LLM local](/es/local-llms)',
          '[Unirse a la lista de espera de PromptQuorum](/es/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el hardware mínimo para ejecutar Qwen 3 localmente?', a: 'Para Qwen 3.6 27B con cuantización Q4_K_M: 16 GB VRAM (RTX 4080 o RTX 3090). Para Apple Silicon: M3 Pro con 36 GB de memoria unificada o M3 Max con 48 GB. Para el Qwen 3 14B más pequeño: 9 GB VRAM (RTX 3080 o RTX 4070). Qwen 3 7B funciona con 5 GB VRAM (GTX 1080 o mejor).' },
          { q: '¿Por qué Ollama trunca mis prompts?', a: 'Ollama usa por defecto num_ctx de 2048 tokens (~1500 palabras). Esto es demasiado pequeño para la mayoría de las tareas reales de programación. Debes establecer num_ctx en al menos 32768 en tu Modelfile. Crea un Modelfile con `PARAMETER num_ctx 32768`, luego ejecuta `ollama create qwen3-32k -f Modelfile` para construir una instancia del modelo con la ventana de contexto correcta.' },
          { q: '¿Es conforme al RGPD ejecutar Qwen localmente?', a: 'Sí — la inferencia local es la arquitectura de IA más conforme al RGPD posible. Cuando Qwen corre en tu hardware, ningún dato se transfiere a terceros. Las restricciones del artículo 44 del RGPD sobre transferencias internacionales de datos no aplican porque no hay transferencia de datos. Tu acuerdo interno de procesamiento de datos aplica, pero no se necesitan SCCs ni decisiones de adecuación para la capa de IA.' },
          { q: '¿Puede Qwen 3 ejecutarse solo en CPU?', a: 'Sí, mediante llama.cpp o Ollama en un sistema sin GPU. La inferencia en CPU es significativamente más lenta — típicamente 1–5 tokens/segundo en una CPU moderna para Qwen 3.6 27B. Para uso en producción, se requiere GPU o Apple Silicon. Para uso ocasional o pruebas en un portátil sin GPU dedicada, la inferencia en CPU funciona pero es impráctica para conversación en tiempo real.' },
          { q: '¿Cómo actualizo Qwen a la última versión?', a: 'Ejecuta `ollama pull qwen3.6:27b` de nuevo. Ollama verifica si hay una versión más nueva disponible y descarga solo las capas modificadas. No necesitas recrear tu Modelfile — la etiqueta del modelo (qwen3.6:27b) siempre apunta a la última versión 27B. En LM Studio, comprueba la biblioteca de modelos en busca de actualizaciones y vuelve a descargar si hay una versión GGUF más nueva disponible.' },
          { q: '¿Puedo usar Claude Code con Qwen local?', a: 'Sí. Claude Code es el CLI de Anthropic para programar con Claude. Para usarlo con Qwen 3.6 27B local, instala el proxy gratuito de Claude Code, apúntalo a tu instancia de LM Studio (localhost:1234) y luego configura Claude Code para enrutar solicitudes a través del proxy (localhost:8082). Tu código permanece completamente local — no se requiere clave de API de Anthropic.' },
          { q: '¿Necesito una clave de API de Anthropic para ejecutar Claude Code con Qwen local?', a: 'No. Al usar Claude Code con un LLM local a través del proxy, la clave de API de Anthropic no se utiliza. El proxy intercepta las solicitudes de Claude Code y las enruta a tu servidor de LM Studio en su lugar. Solo necesitas la clave de API si decides usar también la API de Claude de Anthropic para otras tareas en paralelo.' },
          { q: '¿Cuál es la diferencia entre el proxy de Claude Code y Ollama?', a: 'Ollama es un runtime de LLM local que gestiona descargas de modelos, cuantización, configuración de contexto y expone una API compatible con OpenAI (localhost:11434/v1). El proxy de Claude Code es un puente ligero que conecta Claude Code específicamente a cualquier LLM local (Ollama, LM Studio o llama.cpp). Ambos pueden ejecutarse simultáneamente: Ollama gestiona el modelo, el proxy gestiona la conexión del cliente de Claude Code. Alternativamente, usa LM Studio como runtime en lugar de Ollama — el proxy funciona con ambos.' },
          { q: '¿Afecta el uso de Claude Code con Qwen local a la velocidad de inferencia?', a: 'No hay impacto significativo. El proxy añade latencia insignificante (< 50 ms) ya que corre en la misma máquina que tu instancia de LM Studio. La velocidad de inferencia está determinada por tu GPU y la cuantización del modelo (Q4_K_M es estándar), no por el proxy. El tiempo total de inferencia a respuesta para una tarea de generación de código es típicamente de 20–60 segundos en una RTX 4080, según la longitud de la salida.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Cómo ejecutar Qwen 3 localmente en 2026: Guía Ollama y LM Studio',
      description: 'Configuración paso a paso de Qwen 3 27B en Ollama o LM Studio con requisitos de hardware.',
      url: 'https://www.promptquorum.com/es/local-llms/run-qwen-locally-guide-2026',
      inLanguage: 'es',
      datePublished: '2026-05-16',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: 'كيفية تشغيل ⁨Qwen 3⁩ محليًا في ⁨2026⁩: دليل إعداد ⁨Ollama + LM Studio⁩',
    seoTitle: 'تشغيل ⁨Qwen 3⁩ محليًا ⁨2026⁩: ⁨16 GB VRAM⁩ في ⁨10⁩ دقائق',
    intro: 'يعمل Qwen 3.6 27B على بطاقة رسوم استهلاكية واحدة (16 GB VRAM) عبر Ollama أو LM Studio. يستغرق الإعداد أقل من 10 دقائق. يغطي هذا الدليل اختيار النموذج، ومتطلبات الأجهزة، وتثبيت Ollama CLI، وإعداد واجهة LM Studio الرسومية، والتصحيح الحرج لـ num_ctx، واستهلاك الطاقة وإجمالي تكلفة الملكية، وكيفية ربط Qwen المحلي بـ PromptQuorum للتوزيع متعدد النماذج.',
    metaDescription: 'شغّل ⁨Qwen 3.6 27B⁩ محليًا بـ ⁨16 GB VRAM⁩ عبر ⁨Ollama⁩ أو ⁨LM Studio⁩ في أقل من ⁨10⁩ دقائق. يشمل تصحيح ⁨num⁩_⁨ctx 32768⁩ وأداء ⁨35⁩ رمزًا/ث على ⁨RTX 4090⁩.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ar.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10 دقائق قراءة',
    educationalLevel: 'Beginner',
    audience: 'المطورون الذين يُعدّون نموذج LLM محلي لأول مرة، وفرق الاتحاد الأوروبي الباحثة عن ذكاء اصطناعي متوافق مع GDPR',
    primaryTerm: 'تشغيل Qwen 3 محليًا 2026',
    ctaText: 'انضم إلى قائمة انتظار PromptQuorum ←',
    leadAnswerBlock: '**نفّذ `ollama pull qwen3.6:27b` على أي جهاز بسعة 16 GB من VRAM أو Apple Silicon بذاكرة موحدة 32+ GB. للوصول عبر واجهة رسومية، استخدم LM Studio. كلاهما يشغّل Qwen 3.6 27B دون اتصال بالكامل. حرج: اضبط `num_ctx` على 32768 أو أعلى — قيمة Ollama الافتراضية البالغة 2048 token تقتطع معظم المهام الفعلية.**',
    nextStep: {
      text: 'Qwen يعمل محليًا. استكشف الآن أفضل الواجهات التي تجعله قابلًا للاستخدام.',
      label: 'أفضل واجهات نماذج LLM المحلية 2026 ←',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ar: {
        question: 'كيف أشغّل Qwen 3 محليًا في 2026؟',
        answer: 'ثبّت Ollama، ونفّذ `ollama pull qwen3.6:27b`، ثم `ollama run qwen3.6:27b`. للواجهة الرسومية: نزّل LM Studio، وابحث عن "Qwen 3 27B"، ونزّل ملف GGUF Q4_K_M. حرج: اضبط num_ctx على 32768 في Ollama (القيمة الافتراضية 2048 صغيرة جدًا). للاستخدام الجماعي المتوافق مع GDPR، اتصل عبر نقطة نهاية التوزيع المحلي لـ Ollama في PromptQuorum.',
        bullets: [
          'الحد الأدنى من الأجهزة: 16 GB VRAM (RTX 4080) أو Apple Silicon بذاكرة موحدة 32 GB',
          'تثبيت Ollama: brew install ollama (Mac) أو curl install.sh (Linux/Windows)',
          'تنزيل النموذج: ollama pull qwen3.6:27b (يُنزّل Qwen 3.6 27B Q4_K_M ~17 GB)',
          'تصحيح السياق: اضبط num_ctx 32768 في Modelfile — القيمة الافتراضية 2048 صغيرة جدًا',
          'بديل LM Studio: قائم على واجهة رسومية، بلا CLI مطلوب، بنفس جودة النموذج',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'لماذا تشغّل Qwen محليًا في 2026', anchor: '#why-local' },
      { label: 'اختر نموذج Qwen', anchor: '#choose-model' },
      { label: 'متطلبات الأجهزة', anchor: '#hardware' },
      { label: 'الإعداد عبر Ollama', anchor: '#ollama-setup' },
      { label: 'الإعداد عبر LM Studio', anchor: '#lm-studio-setup' },
      { label: 'الاتصال بـ PromptQuorum', anchor: '#promptquorum' },
      { label: 'حل المشكلات', anchor: '#troubleshooting' },
      { label: 'استهلاك الطاقة وإجمالي تكلفة الملكية', anchor: '#power-tco' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**مساران**: Ollama (CLI، بلا واجهة، جاهز لـ API) أو LM Studio (واجهة رسومية، بلا CLI). كلاهما يشغّل Qwen 3.6 27B محليًا.',
          '**تصحيح حرج**: يستخدم Ollama `num_ctx 2048` افتراضيًا. هذا يقتطع معظم الأوامر الفعلية. اضبط `num_ctx 32768` في Modelfile أو عبر معامل `num_ctx` في API.',
          '**الأجهزة**: 16 GB VRAM كحد أدنى (RTX 4080). Apple Silicon M4 Pro (48 GB) أو M5 Max (128 GB) هما خيارا الاستدلال الموصى بهما لفرق الاتحاد الأوروبي.',
          '**GDPR**: بمجرد التشغيل محليًا، لا تغادر أي بيانات جهازك. لا حاجة إلى SCCs أو اتفاقيات معالجة بيانات تتجاوز سياسة البنية التحتية الخاصة بك.',
          '**التكامل مع PromptQuorum**: اضبط `OLLAMA_BASE_URL=http://localhost:11434/v1` و`LOCAL_LLM_MODEL=qwen3.6:27b` في إعداد التوزيع المحلي لـ PromptQuorum — منفصلًا عن إعداد API الخاص بـ Anthropic.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'لماذا تشغّل Qwen محليًا في 2026',
        content: [
          'تشغيل Qwen 3 محليًا في 2026 يعني دفع €0 لكل token لنموذج يحقق 92.1% في HumanEval — مماثل أو متفوق على Claude Sonnet 5 في مهام البرمجة. بمجرد إطفاء تكلفة الأجهزة، يصبح كل أمر مجانيًا. لفريق تطوير من خمسة أشخاص يولّد 10 ملايين token يوميًا، يوفّر الاستدلال المحلي ~$900/شهر مقابل أسعار API الخاص بـ Claude Sonnet 5.',
          'الامتثال لـ GDPR في الاتحاد الأوروبي هو العامل الثاني. تقيّد المادة 44 من GDPR عمليات نقل البيانات إلى دول ثالثة. عندما تشغّل Qwen محليًا على أجهزة الاتحاد الأوروبي، فإن أوامرك وكودك وبيانات عملائك لا تغادر بنيتك التحتية أبدًا. لا حاجة إلى اتفاقيات معالجة بيانات مع مزوّدين أمريكيين أو صينيين، ولا تقييمات مخاطر Schrems II، ولا تقييمات أثر على الخصوصية لطبقة الذكاء الاصطناعي.',
          'السبب الثالث هو الكمون. يولّد الاستدلال المحلي على RTX 4090 أكثر من 35 token/ثانية — مماثل لأزمنة استجابة API للأوامر القصيرة، دون زمن الذهاب والإياب عبر الشبكة للإكمالات الأطول.',
        ],
        callouts: [
          { type: 'tip', text: 'تتطور سلسلة نماذج DeepSeek بشكل متكرر. تحقق من اسم النموذج الحالي والأسعار على platform.deepseek.com قبل النشر. تعكس الأرقام بيانات متاحة علنًا حتى مايو 2026.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'تشغيل Qwen 3.6 27B محليًا يكلّف €0 لكل token بعد الأجهزة، ويُبقي جميع البيانات على بنية تحتية في الاتحاد الأوروبي، ويقدّم أكثر من 35 token/ثانية على RTX 4090.' },
          { type: 'plain-terms', text: 'نموذج LLM المحلي يعني أن نموذج الذكاء الاصطناعي يعمل على حاسوبك. تنزّل ملف النموذج (نحو 17 GB لـ Qwen 3.6 27B) وكل أمر تكتبه يُعالَج بالكامل على جهازك — لا شيء يُرسَل إلى أي خادم.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'اختر نموذج Qwen',
        content: [
          'يتوفر Qwen 3 بأحجام متعددة. اختر حسب VRAM لديك والجودة المطلوبة. جميع الأحجام متاحة على [Hugging Face (Qwen)](https://huggingface.co/Qwen) وعبر Ollama بوسوم صريحة.',
        ],
        rows: [
          { Modelo: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'Tokens/seg (RTX 4090)': '~35', 'Mejor para': 'البرمجة في الإنتاج، المهام المعقدة' },
          { Modelo: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'Tokens/seg (RTX 4090)': '~20', 'Mejor para': 'أقصى جودة، بطاقتا رسوم' },
          { Modelo: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'Tokens/seg (RTX 4090)': '~60', 'Mejor para': '8–12 GB VRAM، مهام عامة' },
          { Modelo: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'Tokens/seg (RTX 4090)': '~80', 'Mejor para': 'VRAM محدود، إكمالات سريعة' },
          { Modelo: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'Tokens/seg (Apple M5 Max 128 GB)': '~22', 'Mejor para': 'أقصى جودة، Apple Silicon 96 GB+' },
        ],
        columns: ['Modelo', 'VRAM', 'Tokens/seg (RTX 4090)', 'Mejor para'],
        tableFormat: true,
        note: 'Q4_K_M هو التكميم الموصى به لمعظم المستخدمين — أفضل نسبة جودة-حجم. Q8_0 يقدّم جودة أعلى بتكلفة VRAM أعلى. استخدم دائمًا الوسم الصريح (qwen3.6:27b، لا qwen3) لضمان تنزيل نموذج 27B.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ar.png',
        imageCaption: 'أحجام نماذج Qwen 3 حسب VRAM والسرعة: يحتاج 27B Q4_K_M إلى 16 GB VRAM بمعدل ~35 توكن/ثانية، و14B يحتاج 9 GB بمعدل ~60، و7B يحتاج 5 GB بمعدل ~80، و72B يحتاج 42 GB.',
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة',
        items: [
          '**الحد الأدنى (Qwen 3.6 27B)**: بطاقة رسوم بسعة 16 GB من VRAM — RTX 4080 أو RTX 4070 Ti Super أو RTX 3090',
          '**بطاقة الرسوم الموصى بها**: RTX 4090 (24 GB VRAM) — تشغّل Q4_K_M بـ 35 token/ثانية بهامش 8 GB',
          '**Apple Silicon M3/M4 (الحالي)**: M3 Max أو M4 Pro بذاكرة موحدة 48 GB — هادئ، كفؤ في الطاقة، 40+ token/ثانية عبر [MLX](https://developer.apple.com/metal/mlx)',
          '**Mac Mini M4 Pro (48 GB)**: ~€1,599 في المتجر، هيئة مدمجة، أفضل إجمالي تكلفة ملكية للنشر في مكاتب الاتحاد الأوروبي',
          '**Apple Silicon M5 Pro (64 GB)**: الجيل التالي، عرض نطاق ذاكرة 307 GB/s — يشغّل Qwen 3.6 27B بمعدّل مقدّر 50+ token/ثانية. تفيد Apple بمعالجة أوامر LLM أسرع بـ 4× من M4.',
          '**Apple Silicon M5 Max (128 GB)**: عرض نطاق ذاكرة 460–614 GB/s — يشغّل Qwen 3 72B Q4_K_M بأريحية وهامش. متوقع منتصف 2026 في Mac Studio؛ يأتي Mac Mini الحالي بـ M4 Pro.',
          '**RAM**: 32 GB كحد أدنى من RAM النظام إلى جانب استدلال بطاقة الرسوم؛ 64 GB موصى بها إلى جانب بيئة تطوير كاملة',
          '**التخزين**: 20 GB مساحة قرص حرة لـ Qwen 3.6 27B Q4_K_M (ملف GGUF ~17 GB)',
        ],
        callouts: [
          { type: 'note', text: 'الذاكرة الموحدة لـ Apple Silicon مشتركة بين CPU وبطاقة الرسوم. يمكن لـ Mac بذاكرة موحدة 48 GB تشغيل Qwen 3.6 27B Q4_K_M بهامش لنظام التشغيل والتطبيقات الأخرى. هذا يجعله الخيار الأكثر عملية للاستدلال المحلي على جهاز مدمج واحد.' },
          { type: 'tip', text: 'M5 Max (128 GB) هو أول إعداد Apple Silicon يعمل فيه Qwen 3 72B بسرعة الإنتاج. إذا كنت تتعامل مع سياقات طويلة جدًا أو تحتاج إلى أقصى جودة لأعباء العمل المنظَّمة في الاتحاد الأوروبي، فإن Mac Studio M5 Max هو توصية الجهاز الواحد.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'الإعداد عبر Ollama',
        content: [
          'Ollama هو أسرع طريقة لتشغيل Qwen 3 محليًا. يدير تنزيلات النماذج، ويوفّر واجهة API متوافقة مع OpenAI على localhost:11434، ويتعامل مع التكميم تلقائيًا. ثبّته من [ollama.com](https://ollama.com/download).',
        ],
        numberedItems: [
          { title: 'ثبّت Ollama', whyItMatters: 'يدير Ollama تنزيلات النماذج وتنسيق GGUF ويوفّر واجهة API محلية متوافقة مع OpenAI.' },
          { title: 'نزّل نموذج Qwen 3.6 27B بوسم صريح', whyItMatters: 'استخدم qwen3.6:27b صراحةً. الوسم البسيط `qwen3` يُنزّل افتراضيًا نموذج 8B — لا نموذج 27B الذي يستهدفه هذا الدليل.' },
          { title: 'أنشئ Modelfile بطول سياق صحيح', whyItMatters: 'num_ctx الافتراضي البالغ 2048 token صغير جدًا لمهام البرمجة الفعلية. 32768 token يتعامل مع معظم الملفات والمحادثات.' },
          { title: 'ابنِ النموذج المخصص وشغّله', whyItMatters: 'أنشئ نسخة Qwen 3.6 27B بنافذة السياق الممتدة. تحقق بأمر اختبار.' },
          { title: 'اختبر نقطة نهاية API', whyItMatters: 'يكشف Ollama واجهة API متوافقة مع OpenAI على localhost:11434/v1. استخدم هذه النقطة لربط عملاء LLM وبيئات IDE وPromptQuorum.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'لا تتخطَّ الخطوة 3. num_ctx الافتراضي في Ollama هو 2048 token — نحو 1500 كلمة. تتطلب معظم مهام البرمجة (قراءة ملف، شرح دالة، كتابة اختبارات) 8000–32000 token من السياق. دون هذا التصحيح، يقتطع Qwen أوامرك بصمت وينتج نتائج متدهورة.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-ar.png',
        imageCaption: 'خمس خطوات لإعداد Ollama لتشغيل Qwen 3.6 27B: تثبيت Ollama، سحب qwen3.6:27b، تصحيح num_ctx إلى 32768 في Modelfile، بناء النموذج وتشغيله، ثم اختبار نقطة نهاية API على localhost:11434/v1 — أقل من 10 دقائق إجمالاً.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'الإعداد عبر LM Studio',
        content: [
          'يوفّر LM Studio واجهة رسومية لتشغيل نماذج LLM المحلية دون أي أمر CLI. وهو المسار الموصى به للمستخدمين غير التقنيين أو إعدادات Windows. نزّله من [lmstudio.ai](https://lmstudio.ai).',
        ],
        numberedItems: [
          { title: 'نزّل وثبّت LM Studio', whyItMatters: 'واجهة رسومية مجانية متعددة المنصات لاستدلال LLM المحلي. لا حاجة لـ CLI.' },
          { title: 'ابحث عن Qwen 3 27B ونزّله', whyItMatters: 'يبحث متصفح النماذج في LM Studio في Hugging Face. ابحث عن "Qwen 3 27B" واختر متغير GGUF Q4_K_M لـ 16 GB VRAM.' },
          { title: 'اضبط طول السياق في إعدادات LM Studio', whyItMatters: 'نفس مشكلة num_ctx في Ollama — غيّر طول السياق إلى 32768 في معاملات النموذج قبل تحميله.' },
          { title: 'ابدأ الخادم المحلي', whyItMatters: 'زر "بدء الخادم" في LM Studio ينشئ واجهة API متوافقة مع OpenAI على localhost:1234. استخدم هذا العنوان في العملاء وPromptQuorum.' },
          { title: 'ثبّت Claude Code (اختياري)', whyItMatters: 'Claude Code هو CLI الخاص بـ Anthropic لتشغيل Claude محليًا. نزّله من https://claude.com/claude-code (جميع المنصات: macOS، Windows، Linux).' },
          { title: 'ثبّت وكيل Claude Code', whyItMatters: 'وكيل Claude Code المجاني (المبني على OpenClaw) يربط Claude Code بنماذج LLM المحلية. نفّذ: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`. على Windows، ابدأ بـ: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`.' },
          { title: 'اضبط Claude Code لاستخدام Qwen المحلي', whyItMatters: 'في إعدادات Claude Code، اضبط نقطة نهاية API على http://localhost:8082. سيوجّه Claude Code الطلبات عبر الوكيل إلى نسخة LM Studio لديك (localhost:1234)، مما يتيح لك استخدام Qwen 3.6 27B كمساعد برمجة.' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: 'اضبط gpu_layers على -1 لتفريغ جميع الطبقات إلى بطاقة الرسوم. على الأنظمة التي يتسع فيها النموذج في VRAM، يقدّم التفريغ الكامل لبطاقة الرسوم أسرع استدلال.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'الاتصال بـ PromptQuorum',
        content: [
          'يُوجّه PromptQuorum الأوامر عبر نماذج LLM متعددة. لاستخدام نسخة Qwen المحلية كوجهة توزيع، اضبط نقطة نهاية LLM المحلي في PromptQuorum لتشير إلى خادم Ollama لديك.',
          'هذه نقطة نهاية Ollama (متوافقة مع OpenAI) — مختلفة عن إعداد API الخاص بـ Anthropic المستخدم لـ Claude. يمكن أن يكون كلاهما نشطًا في آن واحد، مع توجيه PromptQuorum حسب نوع المهمة وحساسية البيانات.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'اربط PromptQuorum بـ Qwen المحلي بضبط OLLAMA_BASE_URL على http://localhost:11434/v1 وLOCAL_LLM_MODEL على qwen3.6:27b في إعدادات التوزيع المحلي.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'حل المشكلات',
        items: [
          '**استجابة النموذج تنقطع في منتصف الجملة**: num_ctx منخفض جدًا. أعد بناء Modelfile بـ `PARAMETER num_ctx 32768` وأعد إنشاء النموذج بـ `ollama create`.',
          '**خطأ CUDA out of memory**: النموذج لا يتسع في VRAM لديك. انتقل إلى Qwen 3 14B Q4_K_M (~9 GB VRAM) أو جرّب تكميم Q3_K_S من 27B.',
          '**واجهة API الخاصة بـ Ollama تعيد 404**: تأكد من تطابق اسم النموذج تمامًا. نفّذ `ollama list` لرؤية النماذج المتاحة. استخدم الاسم الدقيق المعروض (مثلًا `qwen3-32k`).',
          '**توليد بطيء (< 5 token/ثانية)**: طبقات بطاقة الرسوم غير مفرَّغة بالكامل. نفّذ `ollama run qwen3-32k` وتحقق من أن `num_gpu_layers` على الحد الأقصى. تأكد من عدم تشغيل أي عملية أخرى كثيفة على بطاقة الرسوم.',
          '**LM Studio يعرض "فشل تحميل النموذج"**: VRAM غير كافٍ. قلّل طول سياق Q4_K_M إلى 16384 أو انتقل إلى Qwen 3 14B.',
          '**PromptQuorum يعيد خطأ مصادقة**: اضبط `OLLAMA_BASE_URL=http://localhost:11434/v1` في إعدادات LLM المحلي في PromptQuorum. إذا طلب النموذج مفتاحًا، أدخل أي سلسلة غير فارغة — لا يتطلب Ollama مصادقة بمفتاح API.',
          '**Ollama يستخدم CPU بدلًا من بطاقة الرسوم**: على NVIDIA: تأكد من تثبيت تعريفات CUDA (يجب أن يعرض `nvidia-smi` بطاقة الرسوم). على Mac: يستخدم Ollama Metal تلقائيًا — لا حاجة لإعداد. إذا لم يكن Metal نشطًا، أعد تثبيت Ollama من ollama.com.',
          '**تنزيل النموذج يتوقف أو يفشل**: قد تنتهي مهلة النماذج الكبيرة (Qwen 3.6 27B ~17 GB) على الاتصالات البطيئة. نفّذ `ollama pull qwen3.6:27b` مجددًا — يستأنف Ollama من حيث توقف. بديلًا، نزّل GGUF مباشرة من [Hugging Face](https://huggingface.co/Qwen) واستخدم `ollama create` بمسار محلي في فقرة FROM من Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'نفّذ `ollama ps` لرؤية النماذج المحمّلة حاليًا في VRAM وكم تستهلك كل واحدة من الذاكرة. استخدم `ollama stop qwen3-32k` لتفريغ نموذج قبل الانتقال إلى نموذج أكبر.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'استهلاك الطاقة وإجمالي تكلفة الملكية',
        content: [
          'تكلفة الأجهزة هي الاستثمار لمرة واحدة. الكهرباء هي التكلفة المستمرة. يعتمد الاختيار الصحيح للأجهزة على سعر الكهرباء لديك وساعات الاستخدام وما إذا كنت في الاتحاد الأوروبي (حيث تبلغ الكهرباء وسطيًا ~€0.35/kWh في ألمانيا في 2026، مقارنةً بـ ~$0.13/kWh في الولايات المتحدة).',
          'يستهلك نظام RTX 4090 تحت حمل الاستدلال نحو 450 واط. بالعمل 8 ساعات/يوم بسعر الكهرباء الألماني: 0.45 kW × 8 س × €0.35 × 250 يوم عمل = **€315/سنة في الكهرباء**. تكلّف الأجهزة ~€2,000–2,500 لنظام كامل.',
          'يستهلك Apple Silicon M5 Max في Mac Studio نحو 40–50 واط تحت حمل استدلال LLM. السيناريو نفسه: 0.05 kW × 8 س × €0.35 × 250 يوم = **€35/سنة في الكهرباء**. تكلّف الأجهزة ~€3,000–4,000 لـ Mac Studio M5 Max بسعة 128 GB.',
          'مقارنةً بـ API الخاص بـ Claude Sonnet 5 بـ 10 ملايين token/يوم لمطور واحد: 10M token × $3/1M × 250 يوم = **$7,500/سنة**.',
        ],
        rows: [
          { Opción: 'Claude Sonnet 5 API', Hardware: '—', 'Electricidad/año (UE)': '—', 'Costo API/año (10 M tok/día)': '$7,500', 'Amortización': '—' },
          { Opción: 'نظام RTX 4090 + Qwen محلي', Hardware: '€2,200', 'Electricidad/año (UE)': '€315', 'Costo API/año (10 M tok/día)': '$0', 'Amortización': '~4 أشهر مقابل Claude' },
          { Opción: 'Mac Mini M4 Pro (48 GB)', Hardware: '€1,599', 'Electricidad/año (UE)': '€25', 'Costo API/año (10 M tok/día)': '$0', 'Amortización': '~3 أشهر مقابل Claude' },
          { Opción: 'Mac Studio M5 Max (128 GB)', Hardware: '~€3,500', 'Electricidad/año (UE)': '€35', 'Costo API/año (10 M tok/día)': '$0', 'Amortización': '~6 أشهر مقابل Claude' },
        ],
        columns: ['Opción', 'Hardware', 'Electricidad/año (UE)', 'Costo API/año (10 M tok/día)', 'Amortización'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'لفرق الاتحاد الأوروبي في الولايات القضائية ذات الكهرباء الباهظة، يقدّم Mac Mini M4 Pro (48 GB) أفضل إجمالي تكلفة ملكية: أقل تكلفة مجمّعة للأجهزة والكهرباء، وامتثال GDPR بالتصميم، وتشغيل هادئ في بيئة المكتب. Mac Studio M5 Max هو خيار الترقية للفرق التي تحتاج إلى جودة Qwen 3 72B.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[Qwen 3.6 مقابل Claude Sonnet 5 مقابل DeepSeek — مقارنة 2026](/ar/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[لماذا تتحول شركات الاتحاد الأوروبي إلى Qwen المحلي](/ar/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder مقابل DeepSeek مقابل Mistral — معيار البرمجة 2026](/ar/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[Local AI Production Deployment: Building a Privacy-First Customer Service Agent](https://www.youtube.com/watch?v=W1f9bWj4pAE) — دراسة حالة لـ Rob Braxman حول مفاضلات الأجهزة وإدارة الذاكرة والأداء في الإنتاج لوكلاء الذكاء الاصطناعي ذاتيي الاستضافة.',
          '[عرض جميع أدلة نماذج LLM المحلية](/ar/local-llms)',
          '[انضم إلى قائمة انتظار PromptQuorum](/ar/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما الحد الأدنى من الأجهزة لتشغيل Qwen 3 محليًا؟', a: 'لـ Qwen 3.6 27B بتكميم Q4_K_M: 16 GB VRAM (RTX 4080 أو RTX 3090). لـ Apple Silicon: M3 Pro بذاكرة موحدة 36 GB أو M3 Max بـ 48 GB. لـ Qwen 3 14B الأصغر: 9 GB VRAM (RTX 3080 أو RTX 4070). يعمل Qwen 3 7B بـ 5 GB VRAM (GTX 1080 أو أفضل).' },
          { q: 'لماذا يقتطع Ollama أوامري؟', a: 'يستخدم Ollama افتراضيًا num_ctx بقيمة 2048 token (~1500 كلمة). هذا صغير جدًا لمعظم مهام البرمجة الفعلية. يجب ضبط num_ctx على 32768 على الأقل في Modelfile. أنشئ Modelfile بـ `PARAMETER num_ctx 32768`، ثم نفّذ `ollama create qwen3-32k -f Modelfile` لبناء نسخة من النموذج بنافذة السياق الصحيحة.' },
          { q: 'هل تشغيل Qwen محليًا متوافق مع GDPR؟', a: 'نعم — الاستدلال المحلي هو أكثر بنى الذكاء الاصطناعي امتثالًا لـ GDPR ممكنة. عندما يعمل Qwen على أجهزتك، لا تُنقل أي بيانات إلى أطراف ثالثة. لا تنطبق قيود المادة 44 من GDPR على عمليات نقل البيانات الدولية لأنه لا يوجد نقل بيانات. تنطبق اتفاقية معالجة البيانات الداخلية لديك، لكن لا حاجة إلى SCCs أو قرارات كفاية لطبقة الذكاء الاصطناعي.' },
          { q: 'هل يمكن لـ Qwen 3 العمل على CPU فقط؟', a: 'نعم، عبر llama.cpp أو Ollama على نظام بلا بطاقة رسوم. الاستدلال على CPU أبطأ بكثير — عادةً 1–5 token/ثانية على CPU حديث لـ Qwen 3.6 27B. للاستخدام الإنتاجي، تُطلب بطاقة رسوم أو Apple Silicon. للاستخدام العرضي أو الاختبار على حاسوب محمول بلا بطاقة رسوم مخصصة، يعمل الاستدلال على CPU لكنه غير عملي للمحادثة الفورية.' },
          { q: 'كيف أرقّي Qwen إلى أحدث إصدار؟', a: 'نفّذ `ollama pull qwen3.6:27b` مجددًا. يتحقق Ollama من توفر إصدار أحدث ويُنزّل الطبقات المعدّلة فقط. لا تحتاج إلى إعادة إنشاء Modelfile — وسم النموذج (qwen3.6:27b) يشير دائمًا إلى أحدث إصدار 27B. في LM Studio، تحقق من مكتبة النماذج بحثًا عن تحديثات وأعد التنزيل إن توفر إصدار GGUF أحدث.' },
          { q: 'هل يمكنني استخدام Claude Code مع Qwen المحلي؟', a: 'نعم. Claude Code هو CLI الخاص بـ Anthropic للبرمجة مع Claude. لاستخدامه مع Qwen 3.6 27B المحلي، ثبّت وكيل Claude Code المجاني، ووجّهه إلى نسخة LM Studio لديك (localhost:1234)، ثم اضبط Claude Code لتوجيه الطلبات عبر الوكيل (localhost:8082). يبقى كودك محليًا بالكامل — لا حاجة إلى مفتاح API الخاص بـ Anthropic.' },
          { q: 'هل أحتاج إلى مفتاح API الخاص بـ Anthropic لتشغيل Claude Code مع Qwen المحلي؟', a: 'لا. عند استخدام Claude Code مع نموذج LLM محلي عبر الوكيل، لا يُستخدم مفتاح API الخاص بـ Anthropic. يعترض الوكيل طلبات Claude Code ويوجّهها إلى خادم LM Studio لديك بدلًا من ذلك. تحتاج إلى المفتاح فقط إذا قررت استخدام API الخاص بـ Claude من Anthropic أيضًا لمهام أخرى بالتوازي.' },
          { q: 'ما الفرق بين وكيل Claude Code وOllama؟', a: 'Ollama هو بيئة تشغيل LLM محلية تدير تنزيلات النماذج والتكميم وإعداد السياق وتكشف واجهة API متوافقة مع OpenAI (localhost:11434/v1). وكيل Claude Code جسر خفيف يربط Claude Code تحديدًا بأي نموذج LLM محلي (Ollama أو LM Studio أو llama.cpp). يمكن تشغيلهما في آن واحد: يدير Ollama النموذج، ويدير الوكيل اتصال عميل Claude Code. بديلًا، استخدم LM Studio كبيئة تشغيل بدلًا من Ollama — يعمل الوكيل مع كليهما.' },
          { q: 'هل يؤثر استخدام Claude Code مع Qwen المحلي في سرعة الاستدلال؟', a: 'لا تأثير كبير. يضيف الوكيل كمونًا ضئيلًا (< 50 مللي ثانية) لأنه يعمل على الجهاز نفسه مثل نسخة LM Studio لديك. سرعة الاستدلال تحددها بطاقة الرسوم وتكميم النموذج (Q4_K_M قياسي)، لا الوكيل. الزمن الإجمالي من الاستدلال إلى الاستجابة لمهمة توليد كود عادةً 20–60 ثانية على RTX 4080، حسب طول المخرجات.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'كيفية تشغيل Qwen 3 محليًا في 2026: دليل Ollama وLM Studio',
      description: 'إعداد خطوة بخطوة لـ Qwen 3 27B على Ollama أو LM Studio مع متطلبات الأجهزة.',
      url: 'https://www.promptquorum.com/ar/local-llms/run-qwen-locally-guide-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-16',
      dateModified: '2026-07-13',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: 'Como executar o Qwen 3 localmente em 2026: Guia Ollama + LM Studio',
    seoTitle: 'Executar o Qwen 3 local 2026: 16 GB VRAM, 10 min',
    intro: 'O Qwen 3.6 27B executa em uma única GPU de consumo (16 GB VRAM) via Ollama ou LM Studio. A configuração leva menos de 10 minutos. Este guia cobre a seleção do modelo, requisitos de hardware, instalação do Ollama CLI, configuração GUI do LM Studio, a correção crítica de num_ctx, consumo de energia e TCO, e como conectar o Qwen local ao PromptQuorum para despacho multi-modelo.',
    metaDescription: 'Execute o Qwen 3.6 27B local com 16 GB VRAM via Ollama ou LM Studio em menos de 10 minutos. Inclui a correção crítica num_ctx 32768 e 35 tok/s na RTX 4090.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-pt.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Desenvolvedores configurando um LLM local pela primeira vez, equipes que buscam IA em conformidade com LGPD/GDPR',
    primaryTerm: 'executar Qwen 3 localmente 2026',
    ctaText: 'Entrar na lista de espera do PromptQuorum →',
    leadAnswerBlock: '**Execute `ollama pull qwen3.6:27b` em qualquer máquina com 16 GB de VRAM ou Apple Silicon com 32+ GB de memória unificada. Para acesso GUI, use o LM Studio. Ambos executam o Qwen 3.6 27B completamente offline. Crítico: defina `num_ctx` como 32768 ou superior — o valor padrão de 2048 tokens do Ollama trunca a maioria das tarefas reais.**',
    quickAnswerTop: {
      pt: {
        question: 'Como executo o Qwen 3 localmente em 2026?', // VERIFY
        answer: 'Instale o Ollama, execute `ollama pull qwen3.6:27b`, depois `ollama run qwen3.6:27b`. Para GUI: baixe o LM Studio, procure por "Qwen 3 27B", baixe o arquivo GGUF Q4_K_M. Crítico: defina num_ctx como 32768 no Ollama (o padrão 2048 é pequeno demais). Para uso em equipe em conformidade com a LGPD/GDPR, conecte-se através do endpoint de despacho local do Ollama da PromptQuorum.', // VERIFY
        bullets: [
          'Hardware mínimo: 16 GB de VRAM (RTX 4080) ou Apple Silicon com 32 GB de memória unificada', // VERIFY
          'Instalação do Ollama: brew install ollama (Mac) ou curl install.sh (Linux/Windows)', // VERIFY
          'Baixar modelo: ollama pull qwen3.6:27b (baixa o Qwen 3.6 27B Q4_K_M ~17 GB)', // VERIFY
          'Corrigir contexto: defina num_ctx como 32768 no Modelfile — o padrão 2048 é pequeno demais', // VERIFY
          'Alternativa LM Studio: baseado em GUI, sem CLI necessário, mesma qualidade de modelo', // VERIFY
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Por que executar o Qwen localmente em 2026', anchor: '#why-local' },
      { label: 'Escolha seu modelo Qwen', anchor: '#choose-model' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Configuração com Ollama', anchor: '#ollama-setup' },
      { label: 'Configuração com LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Conexão ao PromptQuorum', anchor: '#promptquorum' },
      { label: 'Solução de problemas', anchor: '#troubleshooting' },
      { label: 'Consumo de energia e TCO', anchor: '#power-tco' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Dois caminhos**: Ollama (CLI, headless, pronto para API) ou LM Studio (GUI, sem CLI). Ambos executam o Qwen 3.6 27B localmente.',
          '**Correção crítica**: O Ollama usa `num_ctx 2048` por padrão. Isso trunca a maioria dos prompts reais. Defina `num_ctx 32768` no seu Modelfile ou via parâmetro `num_ctx` da API.',
          '**Hardware mínimo**: 16 GB de VRAM (RTX 4080) ou Apple Silicon com 32 GB de memória unificada para o Qwen 3.6 27B.',
          '**Conformidade com LGPD**: Todos os dados ficam no seu hardware — nenhum prompt é enviado para servidores externos.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuração com Ollama',
        numberedItems: [
          { title: 'Instalar o Ollama', whyItMatters: 'O Ollama gerencia downloads de modelos, o formato GGUF, e fornece uma API local compatível com o padrão OpenAI.' },
          { title: 'Baixar o modelo Qwen 3.6 27B com a tag explícita', whyItMatters: 'Use qwen3.6:27b explicitamente. A tag simples `qwen3` aponta para o modelo 8B por padrão — não o modelo 27B que este guia usa como alvo.' },
          { title: 'Criar um Modelfile com o comprimento de contexto correto', whyItMatters: 'O num_ctx padrão de 2048 tokens é pequeno demais para tarefas reais de codificação. 32768 tokens cobre a maioria dos arquivos e conversas.' },
          { title: 'Construir o modelo personalizado e executá-lo', whyItMatters: 'Cria uma instância do Qwen 3.6 27B com a janela de contexto estendida. Verifique com um prompt de teste.' },
          { title: 'Testar o endpoint da API', whyItMatters: 'O Ollama expõe uma API compatível com OpenAI em localhost:11434/v1. Use esse endpoint para conectar clientes LLM, IDEs e o PromptQuorum.' },
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Como executo o Qwen 3 localmente em 2026?', a: 'Instale o Ollama, execute `ollama pull qwen3.6:27b`, depois `ollama run qwen3.6:27b`. Para GUI: baixe o LM Studio, pesquise "Qwen 3 27B", baixe o arquivo GGUF Q4_K_M. Crítico: defina num_ctx como 32768 no Ollama (o padrão 2048 é muito pequeno).' },
          { q: 'Qual hardware preciso para o Qwen 3.6 27B?', a: 'Mínimo: 16 GB de VRAM (RTX 4080) ou Apple Silicon com 32 GB de memória unificada. Recomendado: RTX 4090 (24 GB) ou M3 Max 48 GB para melhor desempenho.' },
          { q: 'Ollama ou LM Studio — qual devo usar?', a: 'Ollama se você quer um endpoint de API headless (para scripts, IDE plugins, PromptQuorum). LM Studio se você quer uma interface de chat visual sem precisar da linha de comando.' },
          { q: 'Por que o Ollama trunca meus prompts?', a: 'O Ollama usa `num_ctx 2048` por padrão, o que limita a janela de contexto a ~1.500 palavras. Para tarefas reais, defina `num_ctx 32768` no Modelfile ou passe `"num_ctx": 32768` na chamada da API.' },
          { q: 'O Qwen 3.6 27B é gratuito para uso comercial?', a: 'Sim. O Qwen 3.6 27B usa a licença Apache 2.0, que permite uso comercial sem royalties. Verifique sempre a licença na página do Hugging Face do modelo antes de implantar em produção.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Como executar o Qwen 3 localmente em 2026: Guia Ollama e LM Studio',
      description: 'Configuração passo a passo do Qwen 3 27B no Ollama ou LM Studio com requisitos de hardware.',
      url: 'https://www.promptquorum.com/pt/local-llms/run-qwen-locally-guide-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-16',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Beginner',
    },
  },
  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: 'Qwen 3 lokal ausführen 2026: Vollständige Anleitung mit Ollama und LM Studio',
    seoTitle: 'Qwen 3 lokal ausführen 2026: 16 GB VRAM, unter 10 Min',
    intro: 'Qwen 3.6 27B läuft auf einer einzelnen Consumer-GPU (16 GB VRAM) über Ollama oder LM Studio. Die Einrichtung dauert weniger als 10 Minuten. Dieser Leitfaden deckt Modellauswahl, Hardware-Anforderungen, Ollama-CLI-Installation, LM Studio GUI-Setup, die entscheidende num_ctx-Korrektur, Stromverbrauch und TCO sowie die Verbindung mit PromptQuorum für Multi-Modell-Dispatch ab.',
    metaDescription: 'Qwen 3.6 27B lokal mit 16 GB VRAM via Ollama oder LM Studio in unter 10 Min. Inkl. dem kritischen num_ctx-32768-Fix und 35 tok/s auf der RTX 4090.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-de.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Entwickler, die erstmals ein lokales LLM einrichten; EU-Teams auf der Suche nach DSGVO-konformer KI',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Zur PromptQuorum-Warteliste anmelden →',
    leadAnswerBlock: '**Führen Sie `ollama pull qwen3.6:27b` auf jedem Rechner mit 16 GB VRAM oder Apple Silicon mit 32+ GB Unified Memory aus. Für den GUI-Zugriff verwenden Sie LM Studio. Beide führen Qwen 3.6 27B vollständig offline aus. Wichtig: Setzen Sie `num_ctx` auf 32768 oder höher — Ollamas Standard von 2048 Token kürzt die meisten realen Aufgaben ab.**',
    nextStep: {
      text: 'Qwen läuft lokal. Entdecken Sie jetzt die besten Benutzeroberflächen.',
      label: 'Beste lokale LLM-Frontends 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      de: {
        question: 'Wie führe ich Qwen 3 lokal in 2026 aus?',
        answer: 'Installieren Sie Ollama, führen Sie `ollama pull qwen3.6:27b` aus, dann `ollama run qwen3.6:27b`. Für eine GUI: Laden Sie LM Studio herunter, suchen Sie „Qwen 3 27B", laden Sie die Q4_K_M GGUF-Datei herunter. Wichtig: Setzen Sie num_ctx auf 32768 in Ollama (Standardwert 2048 ist zu klein). Für DSGVO-konformen Team-Betrieb verbinden Sie über den lokalen Ollama-Dispatch-Endpunkt von PromptQuorum.',
        bullets: [
          'Mindest-Hardware: 16 GB VRAM (RTX 4080) oder Apple Silicon mit 32 GB Unified Memory',
          'Ollama-Installation: brew install ollama (Mac) oder install.sh (Linux/Windows)',
          'Modell laden: ollama pull qwen3.6:27b (lädt Qwen 3.6 27B Q4_K_M ~17 GB)',
          'Kontext korrigieren: num_ctx 32768 im Modelfile setzen — Standard 2048 ist zu klein',
          'LM Studio Alternative: GUI-basiert, kein CLI nötig, gleiche Modellqualität',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Warum Qwen lokal ausführen', anchor: '#why-local' },
      { label: 'Das richtige Qwen-Modell wählen', anchor: '#choose-model' },
      { label: 'Hardware-Anforderungen', anchor: '#hardware' },
      { label: 'Einrichtung mit Ollama', anchor: '#ollama-setup' },
      { label: 'Einrichtung mit LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Verbindung mit PromptQuorum', anchor: '#promptquorum' },
      { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
      { label: 'Stromverbrauch und Gesamtbetriebskosten (TCO)', anchor: '#power-tco' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
      { label: 'Häufige Fragen', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Zwei Wege**: Ollama (CLI, headless, API-bereit) oder LM Studio (GUI, kein CLI). Beide führen Qwen 3.6 27B lokal aus.',
          '**Kritische Korrektur**: Ollama verwendet standardmäßig `num_ctx 2048`. Dieser Wert ist zu klein für reale Aufgaben. Setzen Sie `num_ctx 32768` in Ihrem Modelfile.',
          '**Hardware**: Mindestens 16 GB VRAM (RTX 4080). Apple Silicon M4 Pro (48 GB) oder M5 Max (128 GB) sind die empfohlenen EU-hosted Inference-Optionen.',
          '**DSGVO**: Sobald lokal ausgeführt, verlassen keine Daten Ihren Rechner. Keine SCCs oder Datenverarbeitungsverträge mit Dritten erforderlich.',
          '**PromptQuorum-Integration**: Setzen Sie `OLLAMA_BASE_URL=http://localhost:11434/v1` und `LOCAL_LLM_MODEL=qwen3.6:27b` in den lokalen Dispatch-Einstellungen von PromptQuorum — getrennt von der Anthropic-API-Konfiguration.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Warum Qwen 2026 lokal ausführen',
        content: [
          'Qwen 3 lokal auszuführen bedeutet 2026, 0 € pro Token für ein Modell zu zahlen, das 92,1 % HumanEval erreicht — vergleichbar mit oder besser als Claude Sonnet 5 bei Coding-Aufgaben. Sobald die Hardware amortisiert ist, ist jede Anfrage kostenlos. Für ein Entwicklungsteam von fünf Personen, das 10 Millionen Token pro Tag generiert, spart lokale Inferenz ca. 830 €/Monat gegenüber Claude Sonnet 5 API-Preisen.',
          'DSGVO-Konformität ist der zweite Treiber. DSGVO Art. 44 schränkt Datenübermittlungen in Drittländer ein. Wenn Sie Qwen lokal auf EU-Hardware ausführen, verlassen Ihre Anfragen, Ihr Code und Ihre Kundendaten niemals Ihre Infrastruktur. Es sind keine Datenverarbeitungsverträge mit US- oder chinesischen Anbietern erforderlich, keine Schrems-II-Risikobewertungen und keine Datenschutz-Folgenabschätzungen für die KI-Schicht.',
          'Der dritte Grund ist Latenz. Lokale Inferenz auf einer RTX 4090 erzeugt 35+ Token/Sekunde — vergleichbar mit API-Antwortzeiten für kurze Anfragen, ohne Netzwerk-Overhead bei längeren Ausgaben.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B lokal auszuführen kostet nach der Hardware-Anschaffung 0 € pro Token, hält alle Daten auf EU-Infrastruktur und liefert 35+ Token/Sekunde auf einer RTX 4090.' },
          { type: 'plain-terms', text: 'Ein lokales LLM bedeutet, dass das KI-Modell auf Ihrem eigenen Computer läuft. Sie laden die Modelldatei herunter (ca. 17 GB für Qwen 3.6 27B), und jede Anfrage wird vollständig auf Ihrem Rechner verarbeitet — nichts wird an einen Server gesendet.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Das richtige Qwen-Modell wählen',
        content: [
          'Qwen 3 ist in mehreren Größen erhältlich. Wählen Sie basierend auf Ihrem VRAM und der erforderlichen Qualität. Alle Größen sind auf [Hugging Face (Qwen)](https://huggingface.co/Qwen) und über Ollama mit expliziten Tags verfügbar.',
        ],
        rows: [
          { Modell: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'Token/Sek. (RTX 4090)': '~35', 'Empfohlen für': 'Produktiver Coding-Einsatz, komplexe Aufgaben' },
          { Modell: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'Token/Sek. (RTX 4090)': '~20', 'Empfohlen für': 'Maximale Qualität, Dual-GPU' },
          { Modell: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'Token/Sek. (RTX 4090)': '~60', 'Empfohlen für': '8–12 GB VRAM, allgemeine Aufgaben' },
          { Modell: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'Token/Sek. (RTX 4090)': '~80', 'Empfohlen für': 'Wenig VRAM, schnelle Vervollständigungen' },
          { Modell: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'Token/Sek. (Apple M5 Max 128 GB)': '~22', 'Empfohlen für': 'Maximale Qualität, Apple Silicon 96 GB+' },
        ],
        columns: ['Modell', 'VRAM', 'Token/Sek. (RTX 4090)', 'Empfohlen für'],
        tableFormat: true,
        note: 'Q4_K_M ist die empfohlene Quantisierung für die meisten Anwender — bestes Qualitäts-/Größenverhältnis. Q8_0 bietet höhere Qualität bei höherem VRAM-Bedarf. Verwenden Sie stets den expliziten Tag (qwen3.6:27b, nicht qwen3), um sicherzustellen, dass das 27B-Modell heruntergeladen wird.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-de.png',
        imageCaption: 'Qwen-3-Modellgrößen nach VRAM und Geschwindigkeit: 27B Q4_K_M benötigt 16 GB VRAM bei ~35 Token/Sek., 14B benötigt 9 GB bei ~60 Token/Sek., 7B benötigt 5 GB bei ~80 Token/Sek., und 72B benötigt 42 GB.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Anforderungen',
        items: [
          '**Minimum (Qwen 3.6 27B)**: GPU mit 16 GB VRAM — RTX 4080, RTX 4070 Ti Super oder RTX 3090',
          '**Empfohlen GPU**: RTX 4090 (24 GB VRAM) — führt Q4_K_M mit 35 Token/Sek. aus, 8 GB Puffer',
          '**Apple Silicon M3/M4 (aktuell)**: M3 Max oder M4 Pro mit 48 GB Unified Memory — lautlos, energieeffizient, 40+ Token/Sek. via [MLX](https://developer.apple.com/metal/mlx)',
          '**Mac Mini M4 Pro (48 GB)**: ca. 1.599 € im Handel, kompaktes Formfaktor, beste TCO für EU-Büro-Deployment',
          '**Apple Silicon M5 Pro (64 GB)**: Nächste Generation, 307 GB/s Speicherbandbreite — führt Qwen 3.6 27B schätzungsweise mit 50+ Token/Sek. aus. Apple gibt 4× schnellere LLM-Prompt-Verarbeitung im Vergleich zu M4 an.',
          '**Apple Silicon M5 Max (128 GB)**: 460–614 GB/s Speicherbandbreite — führt Qwen 3 72B Q4_K_M komfortabel mit Puffer aus. Erwartet Mitte 2026 im Mac Studio; aktueller Mac Mini kommt mit M4 Pro.',
          '**RAM**: Mindestens 32 GB Systemspeicher neben GPU-Inferenz; 64 GB empfohlen neben einer vollständigen Entwicklungsumgebung',
          '**Speicher**: 20 GB freier Festplattenspeicher für Qwen 3.6 27B Q4_K_M (GGUF-Datei ~17 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon Unified Memory wird zwischen CPU und GPU geteilt. Ein Mac mit 48 GB Unified Memory kann Qwen 3.6 27B Q4_K_M mit Puffer für Betriebssystem und andere Anwendungen ausführen. Dies macht ihn zur praktischsten EU-hosted Inference-Option in einem einzigen kompakten Gerät.' },
          { type: 'tip', text: 'M5 Max (128 GB) ist die erste Apple Silicon Konfiguration, bei der Qwen 3 72B mit Produktionsgeschwindigkeit läuft. Wenn Sie sehr lange Kontexte benötigen oder maximale Qualität für EU-regulierte Workloads brauchen, ist der Mac Studio M5 Max die Einzel-Geräte-Empfehlung.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Einrichtung mit Ollama',
        content: [
          'Ollama ist der schnellste Weg, Qwen 3 lokal auszuführen. Es verwaltet Modell-Downloads, stellt eine OpenAI-kompatible API unter localhost:11434 bereit und verarbeitet Quantisierung automatisch. Installieren Sie es von [ollama.com](https://ollama.com/download).',
        ],
        numberedItems: [
          { title: 'Ollama installieren', whyItMatters: 'Ollama verwaltet Modell-Downloads, das GGUF-Format und stellt eine OpenAI-kompatible lokale API bereit.' },
          { title: 'Qwen 3.6 27B mit explizitem Tag herunterladen', whyItMatters: 'Verwenden Sie qwen3.6:27b explizit. Der bare Tag `qwen3` lädt standardmäßig das 8B-Modell — nicht das 27B-Modell, auf das sich diese Anleitung bezieht.' },
          { title: 'Modelfile mit korrekter Kontextlänge erstellen', whyItMatters: 'Der Standard-num_ctx von 2048 Token ist zu klein für reale Coding-Aufgaben. 32768 Token verarbeiten die meisten Dateien und Konversationen.' },
          { title: 'Eigenes Modell erstellen und starten', whyItMatters: 'Erstellt eine Qwen 3.6 27B Instanz mit erweitertem Kontextfenster. Überprüfen Sie mit einer Test-Anfrage.' },
          { title: 'API-Endpunkt testen', whyItMatters: 'Ollama stellt eine OpenAI-kompatible API unter localhost:11434/v1 bereit. Verwenden Sie diesen Endpunkt, um LLM-Clients, IDEs und PromptQuorum zu verbinden.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Überspringen Sie Schritt 3 nicht. Ollamas Standard-num_ctx beträgt 2048 Token — etwa 1.500 Wörter. Die meisten Coding-Aufgaben (Datei lesen, Funktion erklären, Tests schreiben) benötigen 8.000–32.000 Token Kontext. Ohne diese Korrektur kürzt Qwen Ihre Anfragen lautlos ab und liefert schlechtere Ausgaben.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-de.png',
        imageCaption: 'Fünf Schritte zur Ollama-Einrichtung für Qwen 3.6 27B: Ollama installieren, qwen3.6:27b herunterladen, num_ctx im Modelfile auf 32768 korrigieren, Modell erstellen und starten, dann den API-Endpunkt localhost:11434/v1 testen — insgesamt unter 10 Minuten.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Einrichtung mit LM Studio',
        content: [
          'LM Studio bietet eine GUI zum Ausführen lokaler LLMs ohne CLI-Befehle. Es ist der empfohlene Weg für nicht-technische Anwender oder Windows-Setups. Download unter [lmstudio.ai](https://lmstudio.ai).',
        ],
        numberedItems: [
          { title: 'LM Studio herunterladen und installieren', whyItMatters: 'Kostenlose, plattformübergreifende GUI für lokale LLM-Inferenz. Kein CLI erforderlich.' },
          { title: 'Qwen 3 27B suchen und herunterladen', whyItMatters: 'LM Studios Modell-Browser durchsucht Hugging Face. Suchen Sie nach „Qwen 3 27B" und wählen Sie die Q4_K_M GGUF-Variante für 16 GB VRAM.' },
          { title: 'Kontextlänge in LM Studio-Einstellungen konfigurieren', whyItMatters: 'Dasselbe num_ctx-Problem wie bei Ollama — ändern Sie die Context Length auf 32768 in den Modell-Parametern vor dem Laden.' },
          { title: 'Lokalen Server starten', whyItMatters: 'LM Studios „Server starten" erstellt eine OpenAI-kompatible API unter localhost:1234. Verwenden Sie diese URL in Clients und PromptQuorum.' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: 'Setzen Sie gpu_layers auf -1, um alle Layer auf die GPU auszulagern. Auf Systemen, wo das Modell in den VRAM passt, liefert vollständiges GPU-Offloading die schnellste Inferenz.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Verbindung mit PromptQuorum',
        content: [
          'PromptQuorum verteilt Anfragen auf mehrere LLMs. Um Ihre lokale Qwen-Instanz als Dispatch-Ziel zu verwenden, konfigurieren Sie den lokalen LLM-Endpunkt von PromptQuorum so, dass er auf Ihren Ollama-Server zeigt.',
          'Dies ist der Ollama-Endpunkt (OpenAI-kompatibel) — getrennt von der Anthropic-API-Konfiguration für Claude. Beide können gleichzeitig aktiv sein, wobei PromptQuorum basierend auf Aufgabentyp und Datensensibilität weiterleitet.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Verbinden Sie PromptQuorum mit lokalem Qwen, indem Sie OLLAMA_BASE_URL auf http://localhost:11434/v1 und LOCAL_LLM_MODEL auf qwen3.6:27b in den lokalen Dispatch-Einstellungen setzen.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Fehlerbehebung',
        items: [
          '**Modellantwort wird mitten im Satz abgeschnitten**: num_ctx ist zu niedrig. Erstellen Sie Ihr Modelfile neu mit `PARAMETER num_ctx 32768` und erstellen Sie das Modell mit `ollama create` neu.',
          '**CUDA out of memory Fehler**: Das Modell passt nicht in Ihren VRAM. Wechseln Sie zu Qwen 3 14B Q4_K_M (~9 GB VRAM) oder probieren Sie eine Q3_K_S Quantisierung des 27B.',
          '**Ollama API gibt 404 zurück**: Bestätigen Sie, dass der Modellname exakt übereinstimmt. Führen Sie `ollama list` aus, um verfügbare Modelle zu sehen. Verwenden Sie den exakten angezeigten Namen (z. B. `qwen3-32k`).',
          '**Langsame Generierung (< 5 Token/Sek.)**: GPU-Layer nicht vollständig ausgelagert. Führen Sie `ollama run qwen3-32k` aus und prüfen Sie, dass `num_gpu_layers` maximiert ist. Stellen Sie sicher, dass kein anderer GPU-intensiver Prozess läuft.',
          '**LM Studio zeigt „Modell konnte nicht geladen werden"**: Unzureichender VRAM. Reduzieren Sie die Q4_K_M Kontextlänge auf 16384 oder wechseln Sie zu Qwen 3 14B.',
          '**PromptQuorum gibt Authentifizierungsfehler zurück**: Setzen Sie `OLLAMA_BASE_URL=http://localhost:11434/v1` in den lokalen LLM-Einstellungen von PromptQuorum. Falls das Formular einen Key verlangt, geben Sie eine beliebige nicht-leere Zeichenkette ein — Ollama benötigt keine API-Key-Authentifizierung.',
          '**Ollama verwendet CPU statt GPU**: Bei NVIDIA: Prüfen Sie, dass CUDA-Treiber installiert sind (`nvidia-smi` sollte die GPU anzeigen). Auf Mac: Ollama verwendet automatisch Metal — keine Konfiguration nötig. Wenn Metal nicht aktiv ist, installieren Sie Ollama von ollama.com neu.',
          '**Modell-Download stoppt oder schlägt fehl**: Große Modelle (Qwen 3.6 27B ~17 GB) können bei langsamen Verbindungen zeitüberschreiten. Führen Sie `ollama pull qwen3.6:27b` erneut aus — Ollama setzt ab der letzten Position fort. Alternativ laden Sie das GGUF direkt von [Hugging Face](https://huggingface.co/Qwen) herunter und verwenden Sie `ollama create` mit einem lokalen Pfad in der FROM-Klausel des Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'Führen Sie `ollama ps` aus, um zu sehen, welche Modelle aktuell in den VRAM geladen sind und wie viel Speicher jedes verbraucht. Verwenden Sie `ollama stop qwen3-32k`, um ein Modell zu entladen, bevor Sie zu einem größeren wechseln.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Stromverbrauch und Gesamtbetriebskosten (TCO)',
        content: [
          'Hardware-Kosten sind die einmalige Investition. Strom ist der laufende Kostenfaktor. Die richtige Hardware-Wahl hängt von Ihrem Strompreis, den Nutzungsstunden und dem Standort ab — in Deutschland kostet Strom durchschnittlich ca. 0,35 €/kWh in 2026, verglichen mit ca. 0,13 $/kWh in den USA.',
          'Ein RTX-4090-System zieht unter Inferenz-Last ca. 450 W. Bei 8 Stunden/Tag zum deutschen Strompreis: 0,45 kW × 8 h × 0,35 € × 250 Arbeitstage = **315 €/Jahr Stromkosten**. Die Hardware kostet ca. 2.200–2.500 € für ein vollständiges System.',
          'Apple Silicon M5 Max im Mac Studio zieht unter LLM-Inferenz-Last ca. 40–50 W. Gleiches Szenario: 0,05 kW × 8 h × 0,35 € × 250 Tage = **35 €/Jahr Stromkosten**. Die Hardware kostet ca. 3.000–4.000 € für einen Mac Studio M5 Max mit 128 GB.',
          'Im Vergleich zur Claude Sonnet 5 API bei 10 Millionen Token/Tag für einen einzelnen Entwickler: 10 Mio. Token × 3 $/1 Mio. × 250 Tage = **7.500 $/Jahr** (USD, da Anthropic API in US-Dollar abgerechnet wird).',
        ],
        rows: [
          { Option: 'Claude Sonnet 5 API', Hardware: '—', 'Stromkosten/Jahr (EU)': '—', 'API-Kosten/Jahr (10 Mio. Tok./Tag)': '7.500 $', Amortisation: '—' },
          { Option: 'RTX 4090 + lokales Qwen', Hardware: '2.200 €', 'Stromkosten/Jahr (EU)': '315 €', 'API-Kosten/Jahr (10 Mio. Tok./Tag)': '0 €', Amortisation: '~4 Monate ggü. Claude' },
          { Option: 'Mac Mini M4 Pro (48 GB)', Hardware: '1.599 €', 'Stromkosten/Jahr (EU)': '25 €', 'API-Kosten/Jahr (10 Mio. Tok./Tag)': '0 €', Amortisation: '~3 Monate ggü. Claude' },
          { Option: 'Mac Studio M5 Max (128 GB)', Hardware: 'ca. 3.500 €', 'Stromkosten/Jahr (EU)': '35 €', 'API-Kosten/Jahr (10 Mio. Tok./Tag)': '0 €', Amortisation: '~6 Monate ggü. Claude' },
        ],
        columns: ['Option', 'Hardware', 'Stromkosten/Jahr (EU)', 'API-Kosten/Jahr (10 Mio. Tok./Tag)', 'Amortisation'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'Für EU-Teams in Hochstrompreis-Ländern bietet der Mac Mini M4 Pro (48 GB) die beste TCO: niedrigste kombinierte Hardware- und Stromkosten, DSGVO-Konformität durch Design und lautloser Betrieb im Büro. Der Mac Studio M5 Max ist die Upgrade-Option für Teams, die Qwen 3 72B Qualität benötigen.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Qwen 3.6 vs. Claude Sonnet 5 vs. DeepSeek — Vergleich 2026](/de/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Warum EU-Unternehmen auf lokales Qwen umsteigen](/de/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs. DeepSeek vs. Mistral — Coding-Benchmark 2026](/de/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[Alle Local-LLM-Guides](/de/local-llms)',
          '[PromptQuorum-Warteliste beitreten](/de/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          { q: 'Was ist die minimale Hardware, um Qwen 3 lokal auszuführen?', a: 'Für Qwen 3.6 27B bei Q4_K_M Quantisierung: 16 GB VRAM (RTX 4080 oder RTX 3090). Für Apple Silicon: M3 Pro mit 36 GB Unified Memory oder M3 Max mit 48 GB. Für das kleinere Qwen 3 14B: 9 GB VRAM (RTX 3080 oder RTX 4070). Qwen 3 7B läuft auf 5 GB VRAM (GTX 1080 oder besser).' },
          { q: 'Warum kürzt Ollama meine Anfragen ab?', a: 'Ollama verwendet standardmäßig num_ctx 2048 Token (~1.500 Wörter). Das ist zu wenig für die meisten realen Coding-Aufgaben. Sie müssen num_ctx auf mindestens 32768 in Ihrem Modelfile setzen. Erstellen Sie ein Modelfile mit `PARAMETER num_ctx 32768`, dann führen Sie `ollama create qwen3-32k -f Modelfile` aus, um eine Modellinstanz mit dem richtigen Kontextfenster zu erstellen.' },
          { q: 'Ist die lokale Ausführung von Qwen DSGVO-konform?', a: 'Ja — lokale Inferenz ist eine der DSGVO-freundlichsten KI-Architekturen (keine Inferenzdaten an Drittanbieter). Wenn Qwen auf Ihrer Hardware läuft, werden keine Daten an Dritte übertragen. DSGVO Art. 44 Beschränkungen für internationale Datenübermittlungen greifen nicht, da keine Übermittlung stattfindet. Ihr interner Datenverarbeitungsvertrag gilt, aber für die KI-Schicht sind keine SCCs oder Angemessenheitsbeschlüsse erforderlich.' },
          { q: 'Kann Qwen 3 ausschließlich auf der CPU ausgeführt werden?', a: 'Ja, über llama.cpp oder Ollama auf einem System ohne GPU. CPU-Inferenz ist deutlich langsamer — typischerweise 1–5 Token/Sekunde auf einer modernen CPU für Qwen 3.6 27B. Für den Produktiveinsatz ist GPU oder Apple Silicon erforderlich. Für gelegentliche Nutzung oder Tests auf einem Laptop ohne dedizierte GPU funktioniert CPU-Inferenz, ist aber für Echtzeit-Konversation unpraktisch.' },
          { q: 'Wie aktualisiere ich Qwen auf die neueste Version?', a: 'Führen Sie `ollama pull qwen3.6:27b` erneut aus. Ollama prüft, ob eine neuere Version verfügbar ist, und lädt nur die geänderten Layer herunter. Sie müssen Ihr Modelfile nicht neu erstellen — der Model-Tag (qwen3.6:27b) zeigt immer auf die neueste 27B-Version. In LM Studio prüfen Sie die Modellbibliothek auf Updates und laden bei Bedarf eine neuere GGUF-Version herunter.' },
          { q: 'Muss ich bei der lokalen Ausführung von Qwen die DSGVO beachten?', a: 'Ja, aber der Aufwand ist deutlich geringer als bei Cloud-KI. Bei lokaler Inferenz verarbeiten Sie Daten auf Ihrer eigenen Infrastruktur — kein Auftragsverarbeitungsvertrag mit einem Drittanbieter (Art. 28) und kein Angemessenheitsbeschluss (Art. 44) für die KI-Schicht erforderlich. Sie müssen die Verarbeitung jedoch in Ihrem Verzeichnis von Verarbeitungstätigkeiten (VVT) dokumentieren. BSI-Grundschutz-Kataloge empfehlen lokale KI-Inferenz für Verarbeitungen mit Schutzbedarf „hoch" und „sehr hoch".' },
          { q: 'Ist lokales Qwen 3 für den deutschen Mittelstand geeignet?', a: 'Ja. Der Mac Mini M4 Pro (48 GB) für ca. 1.599 € bietet den besten Einstiegspunkt für mittelständische Unternehmen: lautloser Bürobetrieb, keine zusätzliche Strominfrastruktur, DSGVO-Konformität durch Design ohne separaten SCC-Prozess. Für Code-Generierung eines 5-köpfigen Entwicklungsteams (10 Mio. Token/Tag) amortisiert sich die Hardware gegenüber Claude Sonnet 5 API-Preisen in ca. 3 Monaten. Die BSI-Grundschutz-Konformität vereinfacht sich, weil keine personenbezogenen Daten die Unternehmensinfrastruktur verlassen.' },
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: 'Comment Exécuter Qwen 3 Localement en 2026 : Guide Ollama + LM Studio',
    seoTitle: 'Exécuter Qwen 3 en local 2026 : 16 Go VRAM, 10 min',
    intro: 'Qwen 3.6 27B fonctionne sur un seul GPU grand public (16 Go VRAM) via Ollama ou LM Studio. La configuration prend moins de 10 minutes. Ce guide couvre la sélection du modèle, les exigences matérielles, l\'installation CLI Ollama, la configuration GUI LM Studio, la correction critique num_ctx, la consommation d\'énergie et TCO, ainsi que la connexion à PromptQuorum pour un dispatch multi-modèle.',
    metaDescription: 'Exécutez Qwen 3.6 27B en local avec 16 Go VRAM via Ollama ou LM Studio en moins de 10 min. Inclut la correction critique num_ctx 32768 et 35 tok/s sur RTX 4090.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-fr.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Développeurs configurant un LLM local pour la première fois, équipes UE cherchant une IA conforme au RGPD',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Rejoindre la liste d\'attente PromptQuorum →',
    leadAnswerBlock: '**Exécutez `ollama pull qwen3.6:27b` sur n\'importe quelle machine avec 16 Go VRAM ou Apple Silicon avec 32+ Go de mémoire unifiée. Pour un accès GUI, utilisez LM Studio. Les deux exécutent Qwen 3.6 27B entièrement hors ligne. Important : définissez `num_ctx` à 32 768 ou supérieur — la valeur par défaut d\'Ollama de 2 048 tokens tronque la plupart des tâches réelles.**',
    nextStep: {
      text: 'Qwen fonctionne en local. Découvrez maintenant les meilleures interfaces.',
      label: 'Meilleures interfaces LLM locales 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      fr: {
        question: 'Comment exécuter Qwen 3 localement en 2026 ?',
        answer: 'Installez Ollama, exécutez `ollama pull qwen3.6:27b`, puis `ollama run qwen3.6:27b`. Pour GUI : téléchargez LM Studio, recherchez « Qwen 3 27B », téléchargez le fichier GGUF Q4_K_M. Important : définissez num_ctx à 32 768 dans Ollama (2 048 par défaut est trop petit). Pour un usage d\'équipe conforme au RGPD, connectez via l\'endpoint de dispatch Ollama local de PromptQuorum.',
        bullets: [
          'Matériel minimum : 16 Go VRAM (RTX 4080) ou Apple Silicon avec 32 Go de mémoire unifiée',
          'Installation Ollama : brew install ollama (Mac) ou install.sh (Linux/Windows)',
          'Télécharger le modèle : ollama pull qwen3.6:27b (~17 Go)',
          'Corriger le contexte : num_ctx 32 768 dans le Modelfile — 2 048 par défaut est trop petit',
          'Alternative LM Studio : interface graphique, pas de CLI requis, même qualité de modèle',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Pourquoi exécuter Qwen localement en 2026', anchor: '#why-local' },
      { label: 'Choisir votre modèle Qwen', anchor: '#choose-model' },
      { label: 'Configuration matérielle', anchor: '#hardware' },
      { label: 'Configuration avec Ollama', anchor: '#ollama-setup' },
      { label: 'Configuration avec LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Connexion à PromptQuorum', anchor: '#promptquorum' },
      { label: 'Résolution des problèmes', anchor: '#troubleshooting' },
      { label: 'Consommation d\'énergie et TCO', anchor: '#power-tco' },
      { label: 'Lectures connexes', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Deux approches** : Ollama (CLI, headless, prêt pour l\'API) ou LM Studio (GUI, sans CLI). Les deux exécutent Qwen 3.6 27B localement.',
          '**Correction critique** : Ollama utilise `num_ctx 2048` par défaut. Définissez `num_ctx 32768` dans votre Modelfile.',
          '**Matériel** : 16 Go VRAM minimum (RTX 4080). Apple Silicon M4 Pro (48 Go) ou M5 Max (128 Go) sont les options d\'inférence hébergées en UE recommandées.',
          '**RGPD** : une fois exécuté localement, aucune donnée ne quitte votre machine. Aucune SCC ni accord de traitement de données n\'est requis au-delà de votre propre politique d\'infrastructure.',
          '**Intégration PromptQuorum** : définissez `OLLAMA_BASE_URL=http://localhost:11434/v1` et `LOCAL_LLM_MODEL=qwen3.6:27b` dans les paramètres de dispatch local de PromptQuorum — distinct de la configuration API Anthropic.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Pourquoi exécuter Qwen localement en 2026',
        content: [
          'Exécuter Qwen 3 localement en 2026 signifie payer 0 € par token pour un modèle atteignant 92,1 % sur HumanEval — comparable ou supérieur à Claude Sonnet 5 sur les tâches de codage. Une fois le matériel amorti, chaque requête est gratuite. Pour une équipe de développement de cinq personnes générant 10 millions de tokens par jour, l\'inférence locale économise ~830 €/mois par rapport aux tarifs de l\'API Claude Sonnet 5.',
          'La conformité RGPD est le deuxième facteur. L\'article 44 du RGPD restreint les transferts de données vers des pays tiers. Lorsque vous exécutez Qwen localement sur du matériel UE, vos requêtes, votre code et vos données clients ne quittent jamais votre infrastructure. Aucun accord de traitement de données avec des fournisseurs américains ou chinois n\'est requis, aucune évaluation du risque Schrems II, aucune analyse d\'impact sur la protection des données pour la couche IA. La CNIL recommande le traitement local pour les données personnelles dès lors qu\'une solution technique équivalente existe.',
          'La troisième raison est la latence. L\'inférence locale sur une RTX 4090 génère 35+ tokens/seconde — comparable aux temps de réponse API pour les requêtes courtes, sans latence réseau pour les complétions plus longues.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Exécuter Qwen 3.6 27B localement coûte 0 € par token après le matériel, conserve toutes les données sur l\'infrastructure UE et délivre 35+ tokens/seconde sur une RTX 4090.' },
          { type: 'plain-terms', text: 'Un LLM local signifie que le modèle d\'IA s\'exécute sur votre propre ordinateur. Vous téléchargez le fichier modèle (environ 17 Go pour Qwen 3.6 27B) et chaque requête est traitée entièrement sur votre machine — rien n\'est envoyé à un serveur externe.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Choisir votre modèle Qwen',
        content: [
          'Qwen 3 est disponible en plusieurs tailles. Choisissez en fonction de votre VRAM et de la qualité requise. Toutes les tailles sont disponibles sur [Hugging Face (Qwen)](https://huggingface.co/Qwen) et via Ollama avec des tags explicites.',
        ],
        rows: [
          { Modèle: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 Go', 'Tokens/sec (RTX 4090)': '~35', 'Recommandé pour': 'Codage en production, tâches complexes' },
          { Modèle: 'Qwen 3.6 27B Q8_0', VRAM: '28 Go', 'Tokens/sec (RTX 4090)': '~20', 'Recommandé pour': 'Qualité maximale, double GPU' },
          { Modèle: 'Qwen 3 14B Q4_K_M', VRAM: '9 Go', 'Tokens/sec (RTX 4090)': '~60', 'Recommandé pour': '8–12 Go VRAM, tâches générales' },
          { Modèle: 'Qwen 3 7B Q4_K_M', VRAM: '5 Go', 'Tokens/sec (RTX 4090)': '~80', 'Recommandé pour': 'VRAM limité, complétions rapides' },
          { Modèle: 'Qwen 3 72B Q4_K_M', VRAM: '42 Go', 'Tokens/sec (Apple M5 Max 128 GB)': '~22', 'Recommandé pour': 'Qualité maximale, Apple Silicon 96 Go+' },
        ],
        columns: ['Modèle', 'VRAM', 'Tokens/sec (RTX 4090)', 'Recommandé pour'],
        tableFormat: true,
        note: 'Q4_K_M est la quantification recommandée pour la plupart des utilisateurs — meilleur rapport qualité/taille. Q8_0 offre une meilleure qualité à un coût VRAM plus élevé. Utilisez toujours le tag explicite (qwen3.6:27b, pas qwen3) pour vous assurer de télécharger le modèle 27B.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-fr.png',
        imageCaption: 'Tailles des modèles Qwen 3 par VRAM et vitesse : 27B Q4_K_M nécessite 16 Go VRAM à ~35 tokens/sec, 14B nécessite 9 Go à ~60 tokens/sec, 7B nécessite 5 Go à ~80 tokens/sec, et 72B nécessite 42 Go.',
      },
      hardware: {
        id: 'hardware',
        title: 'Configuration matérielle',
        items: [
          '**Minimum (Qwen 3.6 27B)** : GPU avec 16 Go VRAM — RTX 4080, RTX 4070 Ti Super ou RTX 3090',
          '**GPU recommandé** : RTX 4090 (24 Go VRAM) — exécute Q4_K_M à 35 tokens/sec avec 8 Go de marge',
          '**Apple Silicon M3/M4 (actuel)** : M3 Max ou M4 Pro avec 48 Go de mémoire unifiée — silencieux, économe en énergie, 40+ tokens/sec via [MLX](https://developer.apple.com/metal/mlx)',
          '**Mac Mini M4 Pro (48 Go)** : ~1 599 € en boutique, format compact, meilleur TCO pour déploiement en bureau UE',
          '**Apple Silicon M5 Pro (64 Go)** : prochaine génération, 307 Go/s de bande passante mémoire — exécute Qwen 3.6 27B à environ 50+ tokens/sec. Apple annonce un traitement des prompts LLM 4× plus rapide que M4.',
          '**Apple Silicon M5 Max (128 Go)** : 460–614 Go/s de bande passante mémoire — exécute Qwen 3 72B Q4_K_M confortablement avec de la marge. Attendu mi-2026 dans le Mac Studio ; le Mac Mini actuel est livré avec M4 Pro.',
          '**RAM** : 32 Go de RAM système minimum en complément de l\'inférence GPU ; 64 Go recommandés avec un environnement de développement complet',
          '**Stockage** : 20 Go d\'espace disque libre pour Qwen 3.6 27B Q4_K_M (fichier GGUF ~17 Go)',
        ],
        callouts: [
          { type: 'note', text: 'La mémoire unifiée Apple Silicon est partagée entre CPU et GPU. Un Mac avec 48 Go de mémoire unifiée peut exécuter Qwen 3.6 27B Q4_K_M avec de la marge pour l\'OS et les autres applications. C\'est l\'option d\'inférence hébergée en UE la plus pratique dans un seul appareil compact.' },
          { type: 'tip', text: 'Le M5 Max (128 Go) est la première configuration Apple Silicon où Qwen 3 72B fonctionne à vitesse de production. Si vous traitez de très longs contextes ou avez besoin d\'une qualité maximale pour des charges de travail réglementées UE, le Mac Studio M5 Max est la recommandation pour un seul appareil.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuration avec Ollama',
        content: [
          'Ollama est le moyen le plus rapide d\'exécuter Qwen 3 localement. Il gère les téléchargements de modèles, fournit une API compatible OpenAI sur localhost:11434, et gère automatiquement la quantification. Installez-le depuis [ollama.com](https://ollama.com/download).',
        ],
        numberedItems: [
          { title: 'Installer Ollama', whyItMatters: 'Ollama gère les téléchargements de modèles, le format GGUF et fournit une API locale compatible OpenAI.' },
          { title: 'Télécharger Qwen 3.6 27B avec le tag explicite', whyItMatters: 'Utilisez qwen3.6:27b explicitement. Le tag simple `qwen3` télécharge par défaut le modèle 8B — pas le modèle 27B ciblé dans ce guide.' },
          { title: 'Créer un Modelfile avec la longueur de contexte correcte', whyItMatters: 'Le num_ctx par défaut de 2 048 tokens est trop petit pour les tâches de codage réelles. 32 768 tokens couvrent la plupart des fichiers et conversations.' },
          { title: 'Construire le modèle personnalisé et le lancer', whyItMatters: 'Crée une instance Qwen 3.6 27B avec la fenêtre de contexte étendue. Vérifiez avec une requête de test.' },
          { title: 'Tester l\'endpoint API', whyItMatters: 'Ollama expose une API compatible OpenAI sur localhost:11434/v1. Utilisez cet endpoint pour connecter des clients LLM, des IDE et PromptQuorum.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Ne sautez pas l\'étape 3. Le num_ctx par défaut d\'Ollama est 2 048 tokens — environ 1 500 mots. La plupart des tâches de codage (lire un fichier, expliquer une fonction, écrire des tests) nécessitent 8 000–32 000 tokens de contexte. Sans cette correction, Qwen tronque silencieusement vos requêtes et produit des résultats dégradés.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-fr.png',
        imageCaption: 'Cinq étapes de configuration Ollama pour Qwen 3.6 27B : installer Ollama, télécharger qwen3.6:27b, corriger num_ctx à 32768 dans le Modelfile, construire et lancer le modèle, puis tester l\'endpoint API localhost:11434/v1 — moins de 10 minutes au total.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configuration avec LM Studio',
        content: [
          'LM Studio fournit une interface graphique pour exécuter des LLM locaux sans commandes CLI. C\'est la solution recommandée pour les utilisateurs non techniques ou les configurations Windows. Téléchargez depuis [lmstudio.ai](https://lmstudio.ai).',
        ],
        numberedItems: [
          { title: 'Télécharger et installer LM Studio', whyItMatters: 'Interface graphique gratuite et multiplateforme pour l\'inférence LLM locale. Aucun CLI requis.' },
          { title: 'Rechercher et télécharger Qwen 3 27B', whyItMatters: 'Le navigateur de modèles de LM Studio recherche sur Hugging Face. Cherchez « Qwen 3 27B » et sélectionnez la variante GGUF Q4_K_M pour 16 Go VRAM.' },
          { title: 'Configurer la longueur de contexte dans les paramètres LM Studio', whyItMatters: 'Même problème de num_ctx qu\'avec Ollama — changez la longueur de contexte à 32 768 dans les paramètres du modèle avant le chargement.' },
          { title: 'Démarrer le serveur local', whyItMatters: 'Le bouton « Démarrer le serveur » de LM Studio crée une API compatible OpenAI sur localhost:1234. Utilisez cette URL dans les clients et PromptQuorum.' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: 'Définissez gpu_layers sur -1 pour décharger tous les layers sur le GPU. Sur les systèmes où le modèle tient en VRAM, le déchargement GPU complet offre l\'inférence la plus rapide.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connexion à PromptQuorum',
        content: [
          'PromptQuorum distribue les requêtes sur plusieurs LLM. Pour utiliser votre instance Qwen locale comme cible de dispatch, configurez l\'endpoint LLM local de PromptQuorum pour qu\'il pointe vers votre serveur Ollama.',
          'Il s\'agit de l\'endpoint Ollama (compatible OpenAI) — distinct de la configuration API Anthropic utilisée pour Claude. Les deux peuvent être actifs simultanément, PromptQuorum acheminant les requêtes selon le type de tâche et la sensibilité des données.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connectez PromptQuorum à Qwen local en définissant OLLAMA_BASE_URL sur http://localhost:11434/v1 et LOCAL_LLM_MODEL sur qwen3.6:27b dans les paramètres de dispatch local.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Résolution des problèmes',
        items: [
          '**La réponse du modèle est coupée en milieu de phrase** : num_ctx est trop faible. Recréez votre Modelfile avec `PARAMETER num_ctx 32768` et recréez le modèle avec `ollama create`.',
          '**Erreur CUDA out of memory** : le modèle ne tient pas dans votre VRAM. Passez à Qwen 3 14B Q4_K_M (~9 Go VRAM) ou essayez une quantification Q3_K_S du 27B.',
          '**L\'API Ollama renvoie 404** : vérifiez que le nom du modèle correspond exactement. Exécutez `ollama list` pour voir les modèles disponibles. Utilisez le nom exact affiché (ex. `qwen3-32k`).',
          '**Génération lente (< 5 tokens/sec)** : les layers GPU ne sont pas entièrement déchargés. Exécutez `ollama run qwen3-32k` et vérifiez que `num_gpu_layers` est maximisé. Assurez-vous qu\'aucun autre processus gourmand en GPU ne tourne.',
          '**LM Studio affiche « échec du chargement du modèle »** : VRAM insuffisant. Réduisez la longueur de contexte Q4_K_M à 16 384 ou passez à Qwen 3 14B.',
          '**PromptQuorum renvoie une erreur d\'authentification** : définissez `OLLAMA_BASE_URL=http://localhost:11434/v1` dans les paramètres LLM local de PromptQuorum. Si le formulaire exige une clé, saisissez n\'importe quelle chaîne non vide — Ollama ne requiert pas d\'authentification par clé API.',
          '**Ollama utilise le CPU au lieu du GPU** : sur NVIDIA, vérifiez que les pilotes CUDA sont installés (`nvidia-smi` doit afficher le GPU). Sur Mac, Ollama utilise Metal automatiquement — aucune configuration nécessaire. Si Metal n\'est pas actif, réinstallez Ollama depuis ollama.com.',
          '**Le téléchargement du modèle s\'arrête ou échoue** : les grands modèles (Qwen 3.6 27B ~17 Go) peuvent expirer sur les connexions lentes. Exécutez à nouveau `ollama pull qwen3.6:27b` — Ollama reprend là où il s\'est arrêté. Sinon, téléchargez le GGUF directement depuis [Hugging Face](https://huggingface.co/Qwen) et utilisez `ollama create` avec un chemin local dans la clause FROM du Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'Exécutez `ollama ps` pour voir quels modèles sont actuellement chargés en VRAM et combien de mémoire chacun consomme. Utilisez `ollama stop qwen3-32k` pour décharger un modèle avant de passer à un plus grand.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Consommation d\'énergie et TCO',
        content: [
          'Le coût matériel est l\'investissement unique. L\'électricité est le coût récurrent. Le bon choix matériel dépend de votre tarif électrique et de votre localisation — en France, l\'électricité coûte en moyenne ~0,25 €/kWh en 2026 (tarif réglementé EDF), comparé à ~0,35 €/kWh en Allemagne.',
          'Un système RTX 4090 sous charge d\'inférence consomme environ 450 W. En fonctionnant 8 heures/jour au tarif français : 0,45 kW × 8 h × 0,25 € × 250 jours ouvrés = **225 €/an d\'électricité**. Le matériel coûte ~2 200–2 500 € pour un système complet.',
          'L\'Apple Silicon M5 Max dans un Mac Studio consomme environ 40–50 W sous charge d\'inférence LLM. Même scénario : 0,05 kW × 8 h × 0,25 € × 250 jours = **25 €/an d\'électricité**. Le matériel coûte ~3 000–4 000 € pour un Mac Studio M5 Max avec 128 Go.',
          'Comparé à l\'API Claude Sonnet 5 à 10 millions de tokens/jour pour un seul développeur : 10 M tokens × 3 $/1 M × 250 jours = **7 500 $/an** (USD, facturé en dollars par Anthropic).',
        ],
        rows: [
          { Option: 'Claude Sonnet 5 API', Matériel: '—', 'Électricité/an (France)': '—', 'Coût API/an (10 M tok/j)': '7 500 $', 'Retour sur invest.': '—' },
          { Option: 'Système RTX 4090 + Qwen local', Matériel: '2 200 €', 'Électricité/an (France)': '225 €', 'Coût API/an (10 M tok/j)': '0 €', 'Retour sur invest.': '~4 mois vs Claude' },
          { Option: 'Mac Mini M4 Pro (48 Go)', Matériel: '1 599 €', 'Électricité/an (France)': '18 €', 'Coût API/an (10 M tok/j)': '0 €', 'Retour sur invest.': '~3 mois vs Claude' },
          { Option: 'Mac Studio M5 Max (128 Go)', Matériel: '~3 500 €', 'Électricité/an (France)': '25 €', 'Coût API/an (10 M tok/j)': '0 €', 'Retour sur invest.': '~6 mois vs Claude' },
        ],
        columns: ['Option', 'Matériel', 'Électricité/an (France)', 'Coût API/an (10 M tok/j)', 'Retour sur invest.'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'Pour les équipes UE, le Mac Mini M4 Pro (48 Go) offre le meilleur TCO : coût combiné matériel et électricité le plus faible, conformité RGPD by design et fonctionnement silencieux en environnement de bureau. Le Mac Studio M5 Max est la voie d\'évolution pour les équipes nécessitant la qualité de Qwen 3 72B.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures connexes',
        items: [
          '[Qwen 3.6 vs Claude Sonnet 5 vs DeepSeek — Comparatif 2026](/fr/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Pourquoi les entreprises UE passent à Qwen local](/fr/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — Benchmark codage 2026](/fr/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[Tous les guides LLM local](/fr/local-llms)',
          '[Rejoindre la liste d\'attente PromptQuorum](/fr/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          { q: 'Quel est le matériel minimum pour exécuter Qwen 3 localement ?', a: 'Pour Qwen 3.6 27B en quantification Q4_K_M : 16 Go VRAM (RTX 4080 ou RTX 3090). Pour Apple Silicon : M3 Pro avec 36 Go de mémoire unifiée ou M3 Max avec 48 Go. Pour le plus petit Qwen 3 14B : 9 Go VRAM (RTX 3080 ou RTX 4070). Qwen 3 7B fonctionne sur 5 Go VRAM (GTX 1080 ou mieux).' },
          { q: 'Pourquoi Ollama tronque-t-il mes requêtes ?', a: 'Ollama utilise num_ctx 2 048 tokens par défaut (~1 500 mots). C\'est insuffisant pour la plupart des tâches de codage réelles. Vous devez définir num_ctx à au moins 32 768 dans votre Modelfile. Créez un Modelfile avec `PARAMETER num_ctx 32768`, puis exécutez `ollama create qwen3-32k -f Modelfile` pour créer une instance avec la fenêtre de contexte correcte.' },
          { q: 'L\'exécution locale de Qwen est-elle conforme au RGPD ?', a: 'Oui — l\'inférence locale est une architecture compatible avec le RGPD (aucune donnée d\'inférence envoyée à des tiers). Lorsque Qwen s\'exécute sur votre matériel, aucune donnée n\'est transmise à un tiers. Les restrictions de l\'article 44 du RGPD sur les transferts internationaux ne s\'appliquent pas car il n\'y a pas de transfert. Votre accord de traitement interne s\'applique, mais aucune SCC ni décision d\'adéquation n\'est nécessaire pour la couche IA.' },
          { q: 'Qwen 3 peut-il fonctionner uniquement sur CPU ?', a: 'Oui, via llama.cpp ou Ollama sur un système sans GPU. L\'inférence CPU est nettement plus lente — typiquement 1–5 tokens/seconde pour Qwen 3.6 27B sur un CPU moderne. Pour un usage en production, GPU ou Apple Silicon est requis. Pour des tests occasionnels sur un ordinateur portable sans GPU dédié, l\'inférence CPU fonctionne mais reste impraticable pour la conversation en temps réel.' },
          { q: 'Comment mettre à jour Qwen vers la dernière version ?', a: 'Exécutez à nouveau `ollama pull qwen3.6:27b`. Ollama vérifie si une version plus récente est disponible et télécharge uniquement les layers modifiés. Vous n\'avez pas besoin de recréer votre Modelfile — le tag (qwen3.6:27b) pointe toujours vers la dernière version 27B. Dans LM Studio, vérifiez les mises à jour dans la bibliothèque de modèles et téléchargez à nouveau si une version GGUF plus récente est disponible.' },
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: '2026年にQwen 3をローカルで実行する方法：Ollama + LM Studioセットアップガイド',
    seoTitle: '2026年Qwen 3ローカル実行：16GB VRAM・10分',
    intro: 'Qwen 3.6 27BはOllamaまたはLM Studioを使って、単一の消費者向けGPU（16 GB VRAM）上で動作します。セットアップは10分以内に完了します。このガイドでは、モデルの選択、ハードウェア要件、Ollama CLIのインストール、LM Studio GUIのセットアップ、重要なnum_ctxの修正、電力消費とTCO、PromptQuorumへの接続をマルチモデルディスパッチとともに解説します。',
    metaDescription: 'Qwen 3.6 27Bを16GB VRAMのOllamaまたはLM Studioで10分以内にローカル実行。重要なnum_ctx 32768修正、ハードウェア選定、RTX 4090で35トークン/秒のベンチマークを掲載。',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ja.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10分で読めます',
    educationalLevel: 'Beginner',
    audience: '初めてローカルLLMを構築する開発者、GDPRに準拠したAIを求めるEUチーム',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'PromptQuorumウェイトリストに登録 →',
    leadAnswerBlock: '**16 GB VRAMまたはApple Silicon（32 GB以上の統合メモリ）を搭載したマシンで`ollama pull qwen3.6:27b`を実行してください。GUIアクセスにはLM Studioを使用します。どちらもQwen 3.6 27Bを完全オフラインで実行できます。重要：`num_ctx`を32768以上に設定してください — Ollamaのデフォルトは2048トークンで、ほとんどの実際のタスクを切り捨ててしまいます。**',
    nextStep: {
      text: 'Qwenがローカルで動いています。次は使いやすくする最良のUIを探しましょう。',
      label: 'おすすめローカルLLMフロントエンド2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ja: {
        question: '2026年にQwen 3をローカルで実行するには？',
        answer: 'Ollamaをインストールし、`ollama pull qwen3.6:27b`を実行してから`ollama run qwen3.6:27b`。GUIの場合：LM Studioをダウンロードし、「Qwen 3 27B」を検索、Q4_K_M GGUFファイルをダウンロード。重要：Ollamaのnum_ctxを32768に設定（デフォルトの2048は小さすぎる）。GDPRに準拠したチーム利用にはPromptQuorumのローカルOllamaディスパッチエンドポイント経由で接続。',
        bullets: [
          '最小ハードウェア：16 GB VRAM（RTX 4080）または32 GBユニファイドメモリのApple Silicon',
          'Ollamaインストール：brew install ollama（Mac）またはinstall.sh（Linux/Windows）',
          'モデル取得：ollama pull qwen3.6:27b（Qwen 3.6 27B Q4_K_M約17 GBをダウンロード）',
          'コンテキスト修正：Modelfileにてnum_ctx 32768を設定 — デフォルト2048は小さすぎる',
          'LM Studio代替：GUIベース、CLI不要、同等のモデル品質',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '2026年にQwenをローカルで実行する理由', anchor: '#why-local' },
      { label: 'Qwenモデルの選択', anchor: '#choose-model' },
      { label: 'ハードウェア要件', anchor: '#hardware' },
      { label: 'Ollamaでのセットアップ', anchor: '#ollama-setup' },
      { label: 'LM Studioでのセットアップ', anchor: '#lm-studio-setup' },
      { label: 'PromptQuorumへの接続', anchor: '#promptquorum' },
      { label: 'トラブルシューティング', anchor: '#troubleshooting' },
      { label: '電力消費とTCO', anchor: '#power-tco' },
      { label: '関連記事', anchor: '#related-reading' },
      { label: 'よくある質問', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2つの方法**：Ollama（CLI、ヘッドレス、API対応）またはLM Studio（GUI、CLI不要）。どちらもQwen 3.6 27Bをローカルで実行できます。',
          '**重要な修正**：Ollamaのデフォルトは`num_ctx 2048`です。Modelfileにて`num_ctx 32768`を設定してください。',
          '**ハードウェア**：最低16 GB VRAM（RTX 4080）。Apple Silicon M4 Pro（48 GB）またはM5 Max（128 GB）が推奨のローカル推論オプションです。',
          '**GDPR/個人情報保護**：ローカルで実行すると、データが一切外部サーバーに送信されません。SCCや第三者とのデータ処理契約は不要です。',
          '**PromptQuorum統合**：PromptQuorumのローカルディスパッチ設定で`OLLAMA_BASE_URL=http://localhost:11434/v1`と`LOCAL_LLM_MODEL=qwen3.6:27b`を設定します — Anthropic API設定とは別です。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026年にQwenをローカルで実行する理由',
        content: [
          '2026年にQwen 3をローカルで実行するということは、HumanEvalで92.1%を達成するモデルに対してトークンあたり0円を支払うことを意味します — コーディングタスクではClaude Sonnet 5と同等以上の性能です。ハードウェアが償却された後は、すべてのプロンプトが無料です。1日あたり1,000万トークンを生成する5人の開発チームにとって、ローカル推論はClaude Sonnet 5 APIと比較して月額約12万円の節約になります。',
          'GDPRおよび個人情報保護法への準拠が2番目の理由です。GDPRの第44条は第三国へのデータ移転を制限しています。EU内のハードウェアでQwenをローカルに実行すれば、プロンプト、コード、顧客データはインフラ内から一切出ません。米国や中国のプロバイダーとのデータ処理契約、Schrems IIリスク評価、AIレイヤーのデータ保護影響評価は不要です。経済産業省（METI）の「AIガバナンス2.0」でも、機密性の高いデータを扱うシステムにおけるデータ処理の透明性確保が推奨されています。',
          '3番目の理由はレイテンシです。RTX 4090でのローカル推論は35トークン/秒以上を生成します — 短いプロンプトではAPIレスポンス時間と同等で、長い補完ではネットワーク往復のオーバーヘッドがありません。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27Bをローカルで実行すると、ハードウェア取得後はトークンあたりのコストが0円になり、すべてのデータが手元のインフラに保持され、RTX 4090で35トークン/秒以上を実現します。' },
          { type: 'plain-terms', text: 'ローカルLLMとは、AIモデルが自分のコンピューター上で動作することを意味します。モデルファイル（Qwen 3.6 27Bの場合約17 GB）をダウンロードすると、入力したプロンプトはすべて自分のマシン上で処理されます — 外部サーバーには何も送信されません。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwenモデルの選択',
        content: [
          'Qwen 3は複数のサイズで提供されています。VRAMと必要な品質に基づいて選択してください。すべてのサイズは[Hugging Face（Qwen）](https://huggingface.co/Qwen)およびOllamaで明示的なタグを使って利用できます。',
        ],
        rows: [
          { モデル: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'トークン/秒（RTX 4090）': '~35', '推奨用途': '本番コーディング、複雑なタスク' },
          { モデル: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'トークン/秒（RTX 4090）': '~20', '推奨用途': '最高品質、デュアルGPU' },
          { モデル: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'トークン/秒（RTX 4090）': '~60', '推奨用途': '8〜12 GB VRAM、汎用タスク' },
          { モデル: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'トークン/秒（RTX 4090）': '~80', '推奨用途': '低VRAM、高速補完' },
          { モデル: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'トークン/秒（Apple M5 Max 128 GB）': '~22', '推奨用途': '最高品質、Apple Silicon 96 GB+' },
        ],
        columns: ['モデル', 'VRAM', 'トークン/秒（RTX 4090）', '推奨用途'],
        tableFormat: true,
        note: 'Q4_K_Mはほとんどのユーザーにとってはおすすめの量子化です — 品質とサイズの最良のバランスを提供します。Q8_0はより高いVRAMコストでより高い品質を提供します。必ず明示的なタグ（qwen3.6:27b、qwen3ではなく）を使用して27Bモデルをダウンロードしてください。',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ja.png',
        imageCaption: 'VRAMと速度別のQwen 3モデルサイズ：27B Q4_K_Mは16 GB VRAMで約35トークン/秒、14Bは9 GBで約60トークン/秒、7Bは5 GBで約80トークン/秒、72Bは42 GBが必要。',
      },
      hardware: {
        id: 'hardware',
        title: 'ハードウェア要件',
        items: [
          '**最小構成（Qwen 3.6 27B）**：16 GB VRAMのGPU — RTX 4080、RTX 4070 Ti Super、またはRTX 3090',
          '**推奨GPU**：RTX 4090（24 GB VRAM）— Q4_K_MをQ4_K_Mで35トークン/秒、8 GBの余裕あり',
          '**Apple Silicon M3/M4（現行）**：48 GB統合メモリ搭載のM3 MaxまたはM4 Pro — 静音、省電力、[MLX](https://developer.apple.com/metal/mlx)経由で40トークン/秒以上',
          '**Mac Mini M4 Pro（48 GB）**：¥228,800（Apple Japan）、コンパクトなフォームファクター、オフィス展開に最適なTCO',
          '**Apple Silicon M5 Pro（64 GB）**：次世代、307 GB/sのメモリ帯域幅 — Qwen 3.6 27Bを推定50トークン/秒以上で実行。AppleはM4比4倍高速なLLMプロンプト処理を公表。',
          '**Apple Silicon M5 Max（128 GB）**：460〜614 GB/sのメモリ帯域幅 — Qwen 3 72B Q4_K_Mを余裕を持って実行。2026年中頃のMac Studioに搭載予定；現行Mac MiniはM4 Pro搭載。',
          '**RAM**：GPU推論に加えて最低32 GBのシステムRAM；完全な開発環境では64 GB推奨',
          '**ストレージ**：Qwen 3.6 27B Q4_K_M用に20 GBの空きディスク容量（GGUFファイル約17 GB）',
        ],
        callouts: [
          { type: 'note', text: 'Apple Siliconの統合メモリはCPUとGPUで共有されます。48 GBの統合メモリを搭載したMacは、OSや他のアプリケーション用の余裕を持ちながらQwen 3.6 27B Q4_K_Mを実行できます。これにより、単一のコンパクトなデバイスとして最も実用的なローカル推論オプションとなります。' },
          { type: 'tip', text: 'M5 Max（128 GB）はQwen 3 72Bが本番速度で動作する初のApple Silicon構成です。非常に長いコンテキストを扱う場合や、規制の厳しいワークロードで最高品質が必要な場合、Mac Studio M5 Maxが単一デバイスの推奨構成です。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollamaでのセットアップ',
        content: [
          'OllamaはQwen 3をローカルで実行する最速の方法です。モデルのダウンロードを管理し、localhost:11434でOpenAI互換APIを提供し、量子化を自動処理します。[ollama.com](https://ollama.com/download)からインストールしてください。',
        ],
        numberedItems: [
          { title: 'Ollamaをインストールする', whyItMatters: 'Ollamaはモデルのダウンロード、GGUFフォーマット、OpenAI互換のローカルAPIを管理します。' },
          { title: '明示的なタグでQwen 3.6 27Bを取得する', whyItMatters: 'qwen3.6:27bを明示的に使用してください。タグなしの`qwen3`はデフォルトで8Bモデルをダウンロードします — このガイドで対象としている27Bモデルではありません。' },
          { title: '正しいコンテキスト長でModelfileを作成する', whyItMatters: 'デフォルトのnum_ctx 2048トークンは実際のコーディングタスクには小さすぎます。32768トークンでほとんどのファイルと会話を処理できます。' },
          { title: 'カスタムモデルをビルドして実行する', whyItMatters: '拡張されたコンテキストウィンドウを持つQwen 3.6 27Bインスタンスを作成します。テストプロンプトで確認してください。' },
          { title: 'APIエンドポイントをテストする', whyItMatters: 'OllamaはlocalHost:11434/v1でOpenAI互換APIを公開します。このエンドポイントを使用してLLMクライアント、IDE、PromptQuorumを接続します。' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'ステップ3をスキップしないでください。Ollamaのデフォルトnum_ctxは2048トークン — 約1500語です。ほとんどのコーディングタスク（ファイルの読み込み、関数の説明、テストの作成）には8000〜32000トークンのコンテキストが必要です。この修正なしでは、Qwenはプロンプトを黙って切り捨て、品質の低い出力を生成します。' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-ja.png',
        imageCaption: 'Qwen 3.6 27B向けOllamaセットアップの5ステップ：Ollamaをインストール、qwen3.6:27bを取得、Modelfileでnum_ctxを32768に修正、モデルをビルドして実行、localhost:11434/v1のAPIエンドポイントをテスト — 合計10分未満。',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studioでのセットアップ',
        content: [
          'LM StudioはCLIコマンドなしでローカルLLMを実行するGUIを提供します。非技術系ユーザーやWindowsセットアップに推奨されるパスです。[lmstudio.ai](https://lmstudio.ai)からダウンロードしてください。',
        ],
        numberedItems: [
          { title: 'LM Studioをダウンロードしてインストールする', whyItMatters: 'ローカルLLM推論用の無料クロスプラットフォームGUI。CLIは不要です。' },
          { title: 'Qwen 3 27Bを検索してダウンロードする', whyItMatters: 'LM StudioのモデルブラウザはHugging Faceを検索します。「Qwen 3 27B」を検索し、16 GB VRAM用のQ4_K_M GGUFバリアントを選択してください。' },
          { title: 'LM Studio設定でコンテキスト長を設定する', whyItMatters: 'Ollamaと同じnum_ctxの問題 — モデルを読み込む前にモデルパラメーターでコンテキスト長を32768に変更してください。' },
          { title: 'ローカルサーバーを起動する', whyItMatters: 'LM Studioの「サーバーを起動」でlocalhost:1234にOpenAI互換APIが作成されます。このURLをクライアントとPromptQuorumで使用してください。' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: 'gpu_layersを-1に設定してすべてのレイヤーをGPUにオフロードします。モデルがVRAMに収まるシステムでは、完全なGPUオフロードが最速の推論を提供します。',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorumへの接続',
        content: [
          'PromptQuorumは複数のLLMにプロンプトをルーティングします。ローカルQwenインスタンスをディスパッチターゲットとして使用するには、PromptQuorumのローカルLLMエンドポイントをOllamaサーバーに向けるよう設定します。',
          'これはOllamaエンドポイント（OpenAI互換）であり、Claude用のAnthropic API設定とは別です。両方を同時にアクティブにでき、PromptQuorumはタスクの種類とデータの機密性に基づいてルーティングします。',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルディスパッチ設定でOLLAMA_BASE_URLをhttp://localhost:11434/v1に、LOCAL_LLM_MODELをqwen3.6:27bに設定することで、PromptQuorumをローカルQwenに接続できます。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'トラブルシューティング',
        items: [
          '**モデルの応答が途中で切れる**：num_ctxが低すぎます。`PARAMETER num_ctx 32768`でModelfileを再作成し、`ollama create`でモデルを再ビルドしてください。',
          '**CUDAメモリ不足エラー**：モデルがVRAMに収まりません。Qwen 3 14B Q4_K_M（〜9 GB VRAM）に切り替えるか、27BのQ3_K_S量子化を試してください。',
          '**Ollama APIが404を返す**：モデル名が正確に一致しているか確認してください。`ollama list`を実行して利用可能なモデルを確認し、表示された正確な名前を使用してください（例：`qwen3-32k`）。',
          '**生成が遅い（5トークン/秒未満）**：GPUレイヤーが完全にオフロードされていません。`ollama run qwen3-32k`を実行し、`num_gpu_layers`が最大化されているか確認してください。他のGPU負荷の高いプロセスが実行されていないことを確認してください。',
          '**LM Studioが「モデルの読み込みに失敗」と表示**：VRAMが不足しています。Q4_K_Mのコンテキスト長を16384に削減するか、Qwen 3 14Bに切り替えてください。',
          '**PromptQuorumが認証エラーを返す**：PromptQuorumのローカルLLM設定で`OLLAMA_BASE_URL=http://localhost:11434/v1`を設定してください。フォームがキーを要求する場合、任意の空でない文字列を入力してください — OllamaはAPIキー認証を必要としません。',
          '**OllamaがGPUの代わりにCPUを使用する**：NVIDIAの場合：CUDAドライバーがインストールされているか確認してください（`nvidia-smi`でGPUが表示されるはず）。Macの場合：OllamaはMetalを自動的に使用します — 設定は不要です。Metalが有効でない場合、ollama.comからOllamaを再インストールしてください。',
          '**モデルのダウンロードが停止または失敗する**：大きなモデル（Qwen 3.6 27B 〜17 GB）は遅い接続でタイムアウトする場合があります。`ollama pull qwen3.6:27b`を再実行してください — Ollamaは中断した場所から再開します。または、[Hugging Face](https://huggingface.co/Qwen)から直接GGUFをダウンロードし、ModelfileのFROM句でローカルパスを使用して`ollama create`を実行してください。',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps`を実行して、現在VRAMに読み込まれているモデルとそれぞれのメモリ消費量を確認してください。より大きなモデルに切り替える前に`ollama stop qwen3-32k`でモデルをアンロードしてください。' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: '電力消費とTCO',
        content: [
          'ハードウェアコストは一度きりの投資です。電気代が継続的なコストです。適切なハードウェアの選択は、電気代、使用時間、および場所によって異なります — 日本では2026年に電気代は平均約40円/kWh（家庭用電力）です。',
          'RTX 4090システムは推論負荷下で約450 Wを消費します。1日8時間、日本の電気料金で稼働した場合：0.45 kW × 8時間 × 40円 × 250営業日 = **年間36,000円の電気代**。ハードウェアは完全なシステムで約35万円です。',
          'Mac StudioのApple Silicon M5 MaxはLLM推論負荷下で約40〜50 Wを消費します。同じシナリオ：0.05 kW × 8時間 × 40円 × 250日 = **年間4,000円の電気代**。ハードウェアは128 GB搭載Mac Studio M5 Maxで約60万円（発売予定）です。',
          'Claude Sonnet 5 APIを1日1,000万トークン使用する開発者1人との比較：1,000万トークン × $3/100万 × 250日 = **年間7,500ドル**（Anthropicへの支払いはUSD建て）。',
        ],
        rows: [
          { オプション: 'Claude Sonnet 5 API', ハードウェア: '—', '電気代/年（日本）': '—', 'API費用/年（1日1000万tok）': '$7,500', '回収期間': '—' },
          { オプション: 'RTX 4090システム + ローカルQwen', ハードウェア: '〜¥350,000', '電気代/年（日本）': '¥36,000', 'API費用/年（1日1000万tok）': '¥0', '回収期間': '〜4ヶ月（Claude比）' },
          { オプション: 'Mac Mini M4 Pro（48 GB）', ハードウェア: '¥228,800', '電気代/年（日本）': '¥2,900', 'API費用/年（1日1000万tok）': '¥0', '回収期間': '〜3ヶ月（Claude比）' },
          { オプション: 'Mac Studio M5 Max（128 GB）', ハードウェア: '〜¥600,000', '電気代/年（日本）': '¥4,000', 'API費用/年（1日1000万tok）': '¥0', '回収期間': '〜6ヶ月（Claude比）' },
        ],
        columns: ['オプション', 'ハードウェア', '電気代/年（日本）', 'API費用/年（1日1000万tok）', '回収期間'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: '日本市場では、Mac Mini M4 Pro（48 GB）が最良のTCOを提供します：最低限のハードウェアと電気代の組み合わせ、設計上のプライバシー準拠、静音オフィス環境での稼働。Qwen 3 72Bの品質が必要なチームにはMac Studio M5 Maxがアップグレードパスです。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Qwen 3.6 vs Claude Sonnet 5 vs DeepSeek — 2026年比較](/ja/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[EU企業がローカルQwenに移行する理由](/ja/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — コーディングベンチマーク2026](/ja/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[すべてのローカルLLMガイド](/ja/local-llms)',
          '[PromptQuorumウェイトリストに登録](/ja/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Qwen 3をローカルで実行するための最小ハードウェアは？', a: 'Q4_K_M量子化のQwen 3.6 27Bの場合：16 GB VRAM（RTX 4080またはRTX 3090）。Apple Siliconの場合：36 GB統合メモリのM3 Proまたは48 GBのM3 Max。小さいQwen 3 14Bの場合：9 GB VRAM（RTX 3080またはRTX 4070）。Qwen 3 7Bは5 GB VRAM（GTX 1080以上）で動作します。' },
          { q: 'なぜOllamaがプロンプトを切り捨てるのですか？', a: 'Ollamaはデフォルトでnum_ctx 2048トークン（約1500語）を使用します。これはほとんどの実際のコーディングタスクには小さすぎます。Modelfileでnum_ctxを少なくとも32768に設定する必要があります。`PARAMETER num_ctx 32768`でModelfileを作成し、`ollama create qwen3-32k -f Modelfile`を実行して正しいコンテキストウィンドウを持つモデルインスタンスを作成してください。' },
          { q: 'Qwenをローカルで実行することはGDPRに準拠していますか？', a: 'はい — ローカル推論は最もGDPRに準拠したAIアーキテクチャです。QwenがハードウェアP上で実行される場合、データは第三者に転送されません。データ転送がないため、GDPR第44条の国際データ転送制限は適用されません。内部のデータ処理契約は適用されますが、AIレイヤーにはSCCや十分性認定は必要ありません。' },
          { q: 'Qwen 3はCPUのみで実行できますか？', a: 'はい、GPUなしのシステムでllama.cppまたはOllamaを使用して実行できます。CPU推論は大幅に遅くなります — Qwen 3.6 27Bの場合、現代のCPUで通常1〜5トークン/秒です。本番用途にはGPUまたはApple Siliconが必要です。専用GPUのないラップトップでの時々の使用やテストにはCPU推論は機能しますが、リアルタイムの会話には実用的ではありません。' },
          { q: 'Qwenを最新バージョンに更新するには？', a: '`ollama pull qwen3.6:27b`を再実行してください。Ollamaは新しいバージョンが利用可能かどうかを確認し、変更されたレイヤーのみをダウンロードします。Modelfileを再作成する必要はありません — モデルタグ（qwen3.6:27b）は常に最新の27Bリリースを指します。LM Studioではモデルライブラリのアップデートを確認し、新しいGGUFバージョンが利用可能であれば再ダウンロードしてください。' },
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: '2026年如何在本地运行Qwen 3：Ollama + LM Studio完整设置指南',
    seoTitle: '2026本地运行Qwen 3：16GB显存，10分钟搞定',
    intro: 'Qwen 3.6 27B通过Ollama或LM Studio在单个消费级GPU（16 GB显存）上运行，零API成本。设置耗时不到10分钟。本指南涵盖模型选择、硬件要求、Ollama CLI安装、LM Studio GUI设置、关键的num_ctx修复、功耗与TCO分析，以及连接到PromptQuorum实现多模型调度。',
    metaDescription: '用16GB显存通过Ollama或LM Studio在10分钟内本地运行Qwen 3.6 27B。涵盖关键的num_ctx 32768修复、硬件选型，以及RTX 4090上35 token/秒的实测性能。',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-zh.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '阅读约10分钟',
    educationalLevel: 'Beginner',
    audience: '首次搭建本地LLM的开发者，寻求GDPR合规AI方案的欧盟团队',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: '加入PromptQuorum候补名单 →',
    leadAnswerBlock: '**在任何配备16 GB显存或32 GB以上统一内存Apple Silicon的机器上运行`ollama pull qwen3.6:27b`。GUI访问推荐使用LM Studio。两者均可完全离线运行Qwen 3.6 27B。重要：将`num_ctx`设置为32768或更高——Ollama默认的2048 token会截断大多数实际任务。**',
    nextStep: {
      text: 'Qwen已在本地运行。现在探索最好的UI界面。',
      label: '2026年最佳本地LLM前端 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      zh: {
        question: '2026年如何在本地运行Qwen 3？',
        answer: '安装Ollama，运行`ollama pull qwen3.6:27b`，然后`ollama run qwen3.6:27b`。GUI方式：下载LM Studio，搜索"Qwen 3 27B"，下载Q4_K_M GGUF文件。关键：将Ollama中的num_ctx设置为32768（默认2048太小）。如需GDPR合规团队使用，通过PromptQuorum的本地Ollama调度端点连接。',
        bullets: [
          '最低硬件：16 GB显存（RTX 4080）或32 GB统一内存的Apple Silicon',
          'Ollama安装：brew install ollama（Mac）或install.sh（Linux/Windows）',
          '拉取模型：ollama pull qwen3.6:27b（下载Qwen 3.6 27B Q4_K_M约17 GB）',
          '修复上下文：在Modelfile中设置num_ctx 32768 — 默认2048太小',
          'LM Studio替代方案：GUI界面，无需CLI，模型质量相同',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '2026年为何在本地运行Qwen', anchor: '#why-local' },
      { label: '选择您的Qwen模型', anchor: '#choose-model' },
      { label: '硬件要求', anchor: '#hardware' },
      { label: '使用Ollama设置', anchor: '#ollama-setup' },
      { label: '使用LM Studio设置', anchor: '#lm-studio-setup' },
      { label: '连接到PromptQuorum', anchor: '#promptquorum' },
      { label: '故障排除', anchor: '#troubleshooting' },
      { label: '功耗与TCO', anchor: '#power-tco' },
      { label: '相关阅读', anchor: '#related-reading' },
      { label: '常见问题', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**两种方式**：Ollama（CLI，无头，API就绪）或LM Studio（GUI，无需CLI）。两者均可在本地运行Qwen 3.6 27B，零token成本。',
          '**关键修复**：Ollama默认`num_ctx 2048`。在Modelfile中设置`num_ctx 32768`。',
          '**硬件**：最低16 GB显存（RTX 4080）。48 GB统一内存的Apple Silicon M4 Pro或M5 Max（128 GB）是推荐的本地推理选项。',
          '**数据隐私**：本地运行后，任何数据都不会离开您的机器。无需与第三方签署数据处理协议。',
          '**PromptQuorum集成**：在PromptQuorum本地调度设置中配置`OLLAMA_BASE_URL=http://localhost:11434/v1`和`LOCAL_LLM_MODEL=qwen3.6:27b`——与Anthropic API配置相互独立。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026年为何在本地运行Qwen',
        content: [
          '2026年在本地运行Qwen 3意味着：对一个HumanEval得分达92.1%的模型，每个token的成本为零——在代码任务上与Claude Sonnet 5相当甚至超越。硬件摊销后，每条请求完全免费。对于每天生成1000万个token的五人开发团队，本地推理相比Claude Sonnet 5 API定价每月节省约$900。',
          'GDPR合规是第二个驱动因素。GDPR第44条限制向第三国转移数据。当您在欧盟硬件上本地运行Qwen时，您的提示词、代码和客户数据永远不会离开您的基础设施。无需与美国或中国提供商签署数据处理协议，无需进行Schrems II风险评估，也无需对AI层进行数据保护影响评估。',
          '第三个原因是延迟。RTX 4090上的本地推理每秒生成35+个token——对于短提示词与API响应时间相当，对于长补全则无需网络往返开销。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '在本地运行Qwen 3.6 27B：硬件购置后每token成本为零，所有数据保留在本地基础设施，RTX 4090上实现每秒35+个token。' },
          { type: 'plain-terms', text: '本地LLM意味着AI模型在您自己的计算机上运行。下载模型文件（Qwen 3.6 27B约17 GB），您输入的每条提示词都在本地机器上处理——没有任何内容发送到外部服务器。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '选择您的Qwen模型',
        content: [
          'Qwen 3提供多种规模。根据您的显存和所需质量进行选择。所有规模均可在[Hugging Face（Qwen）](https://huggingface.co/Qwen)获取，也可通过Ollama使用显式标签下载。',
        ],
        rows: [
          { 型号: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', '令牌/秒（RTX 4090）': '~35', '推荐用途': '生产级代码生成、复杂任务' },
          { 型号: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', '令牌/秒（RTX 4090）': '~20', '推荐用途': '最高质量、双GPU' },
          { 型号: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', '令牌/秒（RTX 4090）': '~60', '推荐用途': '8–12 GB显存、通用任务' },
          { 型号: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', '令牌/秒（RTX 4090）': '~80', '推荐用途': '低显存、快速补全' },
          { 型号: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', '令牌/秒（Apple M5 Max 128 GB）': '~22', '推荐用途': '最高质量、Apple Silicon 96 GB+' },
        ],
        columns: ['型号', 'VRAM', '令牌/秒（RTX 4090）', '推荐用途'],
        tableFormat: true,
        note: 'Q4_K_M是大多数用户的推荐量化方式——最佳的质量与体积比。Q8_0以更高的显存成本提供更高质量。始终使用显式标签（qwen3.6:27b，而非qwen3）以确保下载的是27B模型。',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-zh.png',
        imageCaption: '按显存和速度划分的Qwen 3模型规模：27B Q4_K_M需要16 GB显存，约35令牌/秒；14B需要9 GB，约60令牌/秒；7B需要5 GB，约80令牌/秒；72B需要42 GB。',
      },
      hardware: {
        id: 'hardware',
        title: '硬件要求',
        items: [
          '**最低配置（Qwen 3.6 27B）**：16 GB显存的GPU——RTX 4080、RTX 4070 Ti Super或RTX 3090',
          '**推荐GPU**：RTX 4090（24 GB显存）——以35令牌/秒运行Q4_K_M，余留8 GB缓冲',
          '**Apple Silicon M3/M4（现行）**：48 GB统一内存的M3 Max或M4 Pro——静音、节能，通过[MLX](https://developer.apple.com/metal/mlx)实现40+令牌/秒',
          '**Mac Mini M4 Pro（48 GB）**：约€1,599，紧凑型设计，欧盟办公室部署的最佳TCO',
          '**Apple Silicon M5 Pro（64 GB）**：下一代，307 GB/s内存带宽——预计以50+令牌/秒运行Qwen 3.6 27B。Apple宣称LLM提示词处理速度比M4快4倍。',
          '**Apple Silicon M5 Max（128 GB）**：460–614 GB/s内存带宽——可轻松运行Qwen 3 72B Q4_K_M并留有余量。预计2026年中期在Mac Studio上推出；现行Mac Mini搭载M4 Pro。',
          '**内存**：GPU推理旁边至少32 GB系统内存；完整开发环境建议64 GB',
          '**存储**：Qwen 3.6 27B Q4_K_M需要20 GB可用磁盘空间（GGUF文件约17 GB）',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon统一内存在CPU和GPU之间共享。48 GB统一内存的Mac可以在为操作系统和其他应用程序留有余量的情况下运行Qwen 3.6 27B Q4_K_M。这使其成为单台紧凑设备中最实用的本地推理选项。' },
          { type: 'tip', text: 'M5 Max（128 GB）是第一款Qwen 3 72B以生产速度运行的Apple Silicon配置。如果您需要处理超长上下文或欧盟受监管工作负载的最高质量，Mac Studio M5 Max是单设备推荐。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: '使用Ollama设置',
        content: [
          'Ollama是在本地运行Qwen 3最快的方式。它管理模型下载，在localhost:11434提供OpenAI兼容API，并自动处理量化。从[ollama.com](https://ollama.com/download)安装。',
        ],
        numberedItems: [
          { title: '安装Ollama', whyItMatters: 'Ollama管理模型下载、GGUF格式，并提供OpenAI兼容的本地API。' },
          { title: '使用显式标签拉取Qwen 3.6 27B', whyItMatters: '明确使用qwen3.6:27b。不带标签的`qwen3`默认下载8B模型——不是本指南目标的27B模型。' },
          { title: '创建包含正确上下文长度的Modelfile', whyItMatters: '默认的num_ctx 2048 token对于实际代码任务太小。32768 token可处理大多数文件和对话。' },
          { title: '构建自定义模型并运行', whyItMatters: '创建具有扩展上下文窗口的Qwen 3.6 27B实例。使用测试提示词验证。' },
          { title: '测试API端点', whyItMatters: 'Ollama在localhost:11434/v1暴露OpenAI兼容API。使用此端点连接LLM客户端、IDE和PromptQuorum。' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen 3.6 27B (explicit tag required)
ollama pull qwen3.6:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# Step 4 — Build and run
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# Expected output (Qwen working correctly):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# Step 5 — Test API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '不要跳过步骤3。Ollama默认的num_ctx为2048 token——约1500个词。大多数代码任务（读取文件、解释函数、编写测试）需要8000–32000 token的上下文。没有这个修复，Qwen会静默截断您的提示词并产生降级输出。' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-zh.png',
        imageCaption: 'Qwen 3.6 27B的Ollama设置五步流程：安装Ollama、拉取qwen3.6:27b、在Modelfile中将num_ctx修正为32768、构建并运行模型，然后测试localhost:11434/v1 API端点——总计不到10分钟。',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: '使用LM Studio设置',
        content: [
          'LM Studio为运行本地LLM提供GUI界面，无需CLI命令。这是非技术用户或Windows设置的推荐路径。从[lmstudio.ai](https://lmstudio.ai)下载。',
        ],
        numberedItems: [
          { title: '下载并安装LM Studio', whyItMatters: '免费的跨平台本地LLM推理GUI。无需CLI。' },
          { title: '搜索并下载Qwen 3 27B', whyItMatters: 'LM Studio的模型浏览器搜索Hugging Face。搜索"Qwen 3 27B"并选择16 GB显存的Q4_K_M GGUF变体。' },
          { title: '在LM Studio设置中配置上下文长度', whyItMatters: '与Ollama相同的num_ctx问题——在加载前将模型参数中的上下文长度更改为32768。' },
          { title: '启动本地服务器', whyItMatters: 'LM Studio的"启动服务器"在localhost:1234创建OpenAI兼容API。在客户端和PromptQuorum中使用此URL。' },
        ],
        codeBlock: `// LM Studio local server config (exported JSON)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: '将gpu_layers设置为-1以将所有层卸载到GPU。在模型适合VRAM的系统上，完全GPU卸载可实现最快推理。',
      },
      promptquorum: {
        id: 'promptquorum',
        title: '连接到PromptQuorum',
        content: [
          'PromptQuorum将提示词路由到多个LLM。要将本地Qwen实例用作调度目标，配置PromptQuorum的本地LLM端点指向您的Ollama服务器。',
          '这是Ollama端点（OpenAI兼容）——与Claude所用的Anthropic API配置不同。两者可同时激活，PromptQuorum根据任务类型和数据敏感性进行路由。',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3.6:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3.6:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '在本地调度设置中将OLLAMA_BASE_URL设为http://localhost:11434/v1、LOCAL_LLM_MODEL设为qwen3.6:27b，即可将PromptQuorum连接到本地Qwen。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '故障排除',
        items: [
          '**模型响应在句子中间被截断**：num_ctx太低。用`PARAMETER num_ctx 32768`重建Modelfile，并用`ollama create`重新创建模型。',
          '**CUDA内存不足错误**：模型不适合您的显存。切换到Qwen 3 14B Q4_K_M（约9 GB显存）或尝试27B的Q3_K_S量化。',
          '**Ollama API返回404**：确认模型名称完全匹配。运行`ollama list`查看可用模型。使用显示的确切名称（例如`qwen3-32k`）。',
          '**生成缓慢（<5令牌/秒）**：GPU层未完全卸载。运行`ollama run qwen3-32k`并检查`num_gpu_layers`已最大化。确保没有其他GPU密集型进程在运行。',
          '**LM Studio显示"加载模型失败"**：显存不足。将Q4_K_M上下文长度减少到16384或切换到Qwen 3 14B。',
          '**PromptQuorum返回认证错误**：在PromptQuorum的本地LLM设置中设置`OLLAMA_BASE_URL=http://localhost:11434/v1`。如果表单需要密钥，输入任意非空字符串——Ollama不需要API密钥认证。',
          '**Ollama使用CPU而非GPU**：NVIDIA：确认已安装CUDA驱动（`nvidia-smi`应显示GPU）。Mac：Ollama自动使用Metal——无需配置。如果Metal未激活，从ollama.com重新安装Ollama。',
          '**模型下载停滞或失败**：大型模型（Qwen 3.6 27B约17 GB）在慢速连接上可能超时。再次运行`ollama pull qwen3.6:27b`——Ollama从中断处继续。或者，直接从[Hugging Face](https://huggingface.co/Qwen)下载GGUF，并在Modelfile的FROM子句中使用本地路径运行`ollama create`。',
        ],
        callouts: [
          { type: 'tip', text: '运行`ollama ps`查看当前加载到显存中的模型及每个模型消耗的内存。切换到更大模型前使用`ollama stop qwen3-32k`卸载模型。' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: '功耗与TCO',
        content: [
          '硬件成本是一次性投资。电费是持续成本。正确的硬件选择取决于您的电价、使用时长和地区——欧盟电费在德国平均约€0.35/kWh（2026年），而美国约$0.13/kWh。',
          'RTX 4090系统在推理负载下消耗约450 W。每天运行8小时按德国电价计算：0.45 kW × 8小时 × €0.35 × 250个工作日 = **每年€315电费**。整套系统硬件约€2,000–2,500。',
          'Mac Studio中的Apple Silicon M5 Max在LLM推理负载下消耗约40–50 W。相同场景：0.05 kW × 8小时 × €0.35 × 250天 = **每年€35电费**。128 GB Mac Studio M5 Max硬件约€3,000–4,000。',
          '与单个开发者每天使用1000万token的Claude Sonnet 5 API相比：1000万token × $3/100万 × 250天 = **每年$7,500**。',
        ],
        rows: [
          { 选项: 'Claude Sonnet 5 API', 硬件: '—', '电费/年（欧洲）': '—', 'API成本/年（每日1000万tok）': '$7,500', '回本周期': '—' },
          { 选项: 'RTX 4090系统 + 本地Qwen', 硬件: '€2,200', '电费/年（欧洲）': '€315', 'API成本/年（每日1000万tok）': '$0', '回本周期': '约4个月（对比Claude）' },
          { 选项: 'Mac Mini M4 Pro（48 GB）', 硬件: '€1,599', '电费/年（欧洲）': '€25', 'API成本/年（每日1000万tok）': '$0', '回本周期': '约3个月（对比Claude）' },
          { 选项: 'Mac Studio M5 Max（128 GB）', 硬件: '约€3,500', '电费/年（欧洲）': '€35', 'API成本/年（每日1000万tok）': '$0', '回本周期': '约6个月（对比Claude）' },
        ],
        columns: ['选项', '硬件', '电费/年（欧洲）', 'API成本/年（每日1000万tok）', '回本周期'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: '对于欧盟团队，Mac Mini M4 Pro（48 GB）提供最佳TCO：最低的综合硬件和电费成本、设计上的GDPR合规，以及适合办公环境的静音运行。Mac Studio M5 Max是需要Qwen 3 72B质量的团队的升级路径。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Qwen 3.6 vs Claude Sonnet 5 vs DeepSeek — 2026年全面对比](/zh/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[欧盟企业为何转向本地Qwen](/zh/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — 代码基准测试2026](/zh/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[所有本地LLM指南](/zh/local-llms)',
          '[加入PromptQuorum候补名单](/zh/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '在本地运行Qwen 3的最低硬件要求是什么？', a: 'Q4_K_M量化的Qwen 3.6 27B：16 GB显存（RTX 4080或RTX 3090）。Apple Silicon：36 GB统一内存的M3 Pro或48 GB的M3 Max。较小的Qwen 3 14B：9 GB显存（RTX 3080或RTX 4070）。Qwen 3 7B可在5 GB显存（GTX 1080或更好）上运行。' },
          { q: '为什么Ollama会截断我的提示词？', a: 'Ollama默认使用num_ctx 2048 token（约1500个词）。这对大多数实际代码任务来说太小了。您必须在Modelfile中将num_ctx设置为至少32768。创建包含`PARAMETER num_ctx 32768`的Modelfile，然后运行`ollama create qwen3-32k -f Modelfile`以构建具有正确上下文窗口的模型实例。' },
          { q: '在本地运行Qwen是否符合GDPR？', a: '是的——本地推理是GDPR兼容架构（不向第三方发送推理数据）。当Qwen在您的硬件上运行时，没有数据传输给任何第三方。GDPR第44条关于国际数据传输的限制不适用，因为没有数据传输。您的内部数据处理协议适用，但AI层不需要SCC或充分性决定。' },
          { q: 'Qwen 3可以仅在CPU上运行吗？', a: '可以，通过llama.cpp或Ollama在没有GPU的系统上运行。CPU推理速度明显较慢——Qwen 3.6 27B在现代CPU上通常为1–5令牌/秒。生产使用需要GPU或Apple Silicon。对于没有专用GPU的笔记本电脑上的偶尔使用或测试，CPU推理有效但对实时对话不实用。' },
          { q: '如何将Qwen更新到最新版本？', a: '再次运行`ollama pull qwen3.6:27b`。Ollama检查是否有更新版本并仅下载更改的层。您不需要重新创建Modelfile——模型标签（qwen3.6:27b）始终指向最新的27B版本。在LM Studio中，检查模型库中的更新，如果有更新的GGUF版本可用则重新下载。' },
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-03',
    theme: 'Getting Started',
    title: '2026년 Qwen 3 로컬 실행 방법: Ollama + LM Studio 설정 가이드',
    seoTitle: '2026 Qwen 3 로컬 실행: Ollama & LM Studio 설정 가이드',
    intro: 'Qwen 3.6 27B는 Ollama 또는 LM Studio를 통해 소비자용 단일 GPU(16GB VRAM)에서 실행됩니다. 설정에는 10분도 채 걸리지 않습니다. 이 가이드에서는 모델 선택, 하드웨어 요구사항, Ollama CLI 설치, LM Studio GUI 설정, 중요한 num_ctx 수정, 전력 소비 및 TCO, 그리고 로컬 Qwen을 PromptQuorum에 연결하는 방법을 다룹니다.',
    metaDescription: 'Ollama 또는 LM Studio에서 Qwen 3.6 27B 단계별 설정: 하드웨어 요구사항(16GB VRAM), num_ctx 수정(필수), 전력 소비, PromptQuorum 통합.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ko.png',
    publishDate: '2026-05-16',
    dateModified: '2026-07-13',
    readTime: '10분 읽기',
    educationalLevel: 'Beginner',
    audience: '처음으로 로컬 LLM을 설정하는 개발자, GDPR 준수 AI를 찾는 EU 팀',
    primaryTerm: '2026년 Qwen 3 로컬 실행',
    ctaText: 'PromptQuorum 대기자 명단 등록 →',
    leadAnswerBlock: '16GB VRAM이 있는 기기 또는 32GB 이상의 통합 메모리를 갖춘 Apple Silicon에서 `ollama pull qwen3.6:27b`를 실행하십시오. GUI 접근을 원하시면 LM Studio를 사용하십시오. 두 방법 모두 Qwen 3.6 27B를 완전히 오프라인으로 실행합니다. 중요: `num_ctx`를 32768 이상으로 설정하십시오 — Ollama의 기본값인 2048 토큰은 대부분의 실제 작업을 잘라냅니다.',
    nextStep: {
      text: 'Qwen이 로컬에서 실행 중입니다. 이제 더 유용하게 활용할 수 있는 최고의 UI를 살펴보십시오.',
      label: '2026년 최고의 로컬 LLM 프론트엔드 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ko: {
        question: '2026년에 Qwen 3를 로컬에서 어떻게 실행하나요?',
        answer: 'Ollama를 설치하고 `ollama pull qwen3.6:27b`를 실행한 후 `ollama run qwen3.6:27b`를 실행하십시오. GUI의 경우: LM Studio를 다운로드하고 "Qwen 3 27B"를 검색하여 Q4_K_M GGUF 파일을 다운로드하십시오. 중요: Ollama에서 num_ctx를 32768로 설정하십시오(기본값 2048은 너무 작습니다). GDPR 준수 팀 사용을 위해서는 PromptQuorum의 로컬 Ollama 디스패치 엔드포인트를 통해 연결하십시오.',
        bullets: [
          '최소 하드웨어: 16GB VRAM(RTX 4080) 또는 32GB 통합 메모리의 Apple Silicon',
          'Ollama 설치: brew install ollama(Mac) 또는 curl install.sh(Linux/Windows)',
          '모델 다운로드: ollama pull qwen3.6:27b(Qwen 3.6 27B Q4_K_M ~17GB 다운로드)',
          '컨텍스트 수정: Modelfile에서 num_ctx 32768 설정 — 기본값 2048은 너무 작음',
          'LM Studio 대안: GUI 기반, CLI 불필요, 동일한 모델 품질',
        ],
        updatedDate: '2026-05-16',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '2026년에 Qwen을 로컬에서 실행하는 이유', anchor: '#why-local' },
      { label: 'Qwen 모델 선택', anchor: '#choose-model' },
      { label: '하드웨어 요구사항', anchor: '#hardware' },
      { label: 'Ollama 설정', anchor: '#ollama-setup' },
      { label: 'LM Studio 설정', anchor: '#lm-studio-setup' },
      { label: 'PromptQuorum 연결', anchor: '#promptquorum' },
      { label: '문제 해결', anchor: '#troubleshooting' },
      { label: '전력 소비 및 TCO', anchor: '#power-tco' },
      { label: '관련 자료', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**두 가지 방법**: Ollama(CLI, 헤드리스, API 지원) 또는 LM Studio(GUI, CLI 불필요). 두 방법 모두 Qwen 3.6 27B를 로컬에서 실행합니다.',
          '**필수 수정**: Ollama의 기본값은 `num_ctx 2048`입니다. 이는 대부분의 실제 프롬프트를 잘라냅니다. Modelfile 또는 API `num_ctx` 파라미터를 통해 `num_ctx 32768`로 설정하십시오.',
          '**하드웨어**: 최소 16GB VRAM(RTX 4080). Apple Silicon M4 Pro(48GB) 또는 M5 Max(128GB)는 EU 호스팅 추론의 권장 옵션입니다.',
          '**GDPR**: 로컬에서 실행되면 데이터가 기기를 벗어나지 않습니다. SCC나 자체 인프라 정책 이외의 데이터 처리 계약이 필요 없습니다.',
          '**PromptQuorum 통합**: PromptQuorum의 로컬 디스패치 설정에서 `OLLAMA_BASE_URL=http://localhost:11434/v1`과 `LOCAL_LLM_MODEL=qwen3.6:27b`를 설정하십시오 — Anthropic API 설정과는 별도입니다.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026년에 Qwen을 로컬에서 실행하는 이유',
        content: [
          '2026년에 Qwen 3를 로컬에서 실행하면 HumanEval 기준 92.1%에 달하는 모델을 토큰당 €0의 비용으로 이용할 수 있습니다 — 코딩 작업에서 Claude Sonnet 5와 비슷하거나 이를 능가하는 수준입니다. 하드웨어 비용이 상각되면 모든 프롬프트가 무료입니다. 하루 1,000만 토큰을 생성하는 5인 개발팀의 경우, 로컬 추론은 Claude Sonnet 5 API 가격 대비 월 ~$900를 절감합니다.',
          'EU GDPR 준수가 두 번째 이유입니다. [GDPR 제44조](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679#d1e3567-1-1)는 제3국으로의 데이터 이전을 제한합니다. EU 하드웨어에서 Qwen을 로컬로 실행하면 프롬프트, 코드 및 고객 데이터가 인프라를 벗어나지 않습니다. 미국 또는 중국 제공업체와의 데이터 처리 계약이 필요 없으며, [Schrems II](https://curia.europa.eu/juris/document/document.jsf?text=&docid=228677&pageIndex=0&doclang=en&mode=req&dir=&occ=first&part=1) 위험 평가나 AI 레이어에 대한 개인정보 영향 평가도 필요하지 않습니다.',
          '세 번째 이유는 지연 시간입니다. RTX 4090에서의 로컬 추론은 초당 35개 이상의 토큰을 생성합니다 — 짧은 프롬프트에서는 API 응답 시간과 비슷하며, 긴 완성에서는 네트워크 왕복 오버헤드가 없습니다.',
        ],
        callouts: [
          { type: 'tip', text: 'DeepSeek의 모델 라인업은 자주 변경됩니다. 배포 전에 platform.deepseek.com에서 현재 모델명과 가격을 확인하십시오. 수치는 2026년 5월 기준으로 공개적으로 이용 가능한 데이터를 반영합니다.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 3.6 27B를 로컬에서 실행하면 하드웨어 이후 토큰당 비용이 €0이며, 모든 데이터가 EU 인프라에 유지되고 RTX 4090에서 초당 35개 이상의 토큰을 제공합니다.' },
          { type: 'plain-terms', text: '로컬 LLM은 AI 모델이 자신의 컴퓨터에서 실행된다는 의미입니다. 모델 파일(Qwen 3.6 27B의 경우 약 17GB)을 다운로드하면 입력하는 모든 프롬프트가 사용자의 기기에서 완전히 처리됩니다 — 어떤 서버에도 전송되지 않습니다.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen 모델 선택',
        content: [
          'Qwen 3는 여러 크기로 제공됩니다. VRAM과 필요한 품질에 따라 선택하십시오. 모든 크기는 [Hugging Face(Qwen)](https://huggingface.co/Qwen) 및 명시적 태그를 사용하는 Ollama에서 이용할 수 있습니다.',
        ],
        rows: [
          { Model: 'Qwen 3.6 27B Q4_K_M', VRAM: '16 GB', 'Tokens/sec (RTX 4090)': '~35', 'Best For': '프로덕션 코딩, 복잡한 작업' },
          { Model: 'Qwen 3.6 27B Q8_0', VRAM: '28 GB', 'Tokens/sec (RTX 4090)': '~20', 'Best For': '최고 품질, 듀얼 GPU' },
          { Model: 'Qwen 3 14B Q4_K_M', VRAM: '9 GB', 'Tokens/sec (RTX 4090)': '~60', 'Best For': '8–12GB VRAM, 일반 작업' },
          { Model: 'Qwen 3 7B Q4_K_M', VRAM: '5 GB', 'Tokens/sec (RTX 4090)': '~80', 'Best For': '저사양 VRAM, 빠른 완성' },
          { Model: 'Qwen 3 72B Q4_K_M', VRAM: '42 GB', 'Tokens/sec (Apple M5 Max 128 GB)': '~22', 'Best For': '최고 품질, Apple Silicon 96GB 이상' },
        ],
        columns: ['Model', 'VRAM', 'Tokens/sec (RTX 4090)', 'Best For'],
        tableFormat: true,
        note: 'Q4_K_M은 대부분의 사용자에게 권장되는 양자화 방식으로 최고의 품질 대비 크기 비율을 제공합니다. Q8_0은 VRAM 비용이 높지만 더 높은 품질을 제공합니다. 27B 모델을 다운로드하도록 명시적 태그(qwen3가 아닌 qwen3.6:27b)를 항상 사용하십시오.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ko.png',
        imageCaption: 'VRAM과 속도별 Qwen 3 모델 크기: 27B Q4_K_M은 16GB VRAM에서 약 35토큰/초, 14B는 9GB에서 약 60토큰/초, 7B는 5GB에서 약 80토큰/초, 72B는 42GB가 필요합니다.',
      },
      hardware: {
        id: 'hardware',
        title: '하드웨어 요구사항',
        items: [
          '**최소사양(Qwen 3.6 27B)**: 16GB VRAM GPU — RTX 4080, RTX 4070 Ti Super, 또는 RTX 3090',
          '**권장 GPU**: RTX 4090(24GB VRAM) — Q4_K_M을 초당 35 토큰으로 실행하며 8GB의 여유 공간 확보',
          '**Apple Silicon M3/M4(현재)**: 48GB 통합 메모리의 M3 Max 또는 M4 Pro — 조용하고 전력 효율적이며 [MLX](https://developer.apple.com/metal/mlx)를 통해 초당 40+ 토큰 처리',
          '**Mac Mini M4 Pro(48GB)**: 소매가 ~€1,599, 소형 폼 팩터, EU 사무실 배포를 위한 최고 TCO',
          '**Apple Silicon M5 Pro(64GB)**: 차세대, 307GB/s 메모리 대역폭 — 예상 초당 50+ 토큰으로 Qwen 3.6 27B 실행. Apple은 M4 대비 LLM 프롬프트 처리 4배 향상을 주장',
          '**Apple Silicon M5 Max(128GB)**: 460–614GB/s 메모리 대역폭 — 여유 공간을 확보하며 Qwen 3 72B Q4_K_M을 편안하게 실행. 2026년 중반 Mac Studio 출시 예정; 현재 Mac Mini는 M4 Pro 탑재',
          '**RAM**: GPU 추론과 함께 최소 32GB 시스템 RAM; 전체 개발 환경과 함께 64GB 권장',
          '**저장공간**: Qwen 3.6 27B Q4_K_M을 위해 20GB 여유 디스크 공간(GGUF 파일 ~17GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon 통합 메모리는 CPU와 GPU가 공유합니다. 48GB 통합 메모리를 갖춘 Mac은 OS 및 다른 애플리케이션을 위한 여유 공간을 확보하며 Qwen 3.6 27B Q4_K_M을 실행할 수 있습니다. 이로 인해 단일 소형 기기에서 가장 실용적인 EU 호스팅 추론 옵션이 됩니다.' },
          { type: 'tip', text: 'M5 Max(128GB)는 Qwen 3 72B가 프로덕션 속도로 실행되는 첫 번째 Apple Silicon 구성입니다. 매우 긴 컨텍스트를 처리하거나 EU 규제 워크로드에 최고 품질이 필요한 경우, M5 Max Mac Studio가 단일 기기 권장사항입니다.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama 설정',
        content: [
          'Ollama는 Qwen 3를 로컬에서 실행하는 가장 빠른 방법입니다. 모델 다운로드를 관리하고, localhost:11434에서 OpenAI 호환 API를 제공하며, 양자화를 자동으로 처리합니다. [ollama.com](https://ollama.com/download)에서 설치하십시오.',
        ],
        numberedItems: [
          { title: 'Ollama 설치', whyItMatters: 'Ollama는 모델 다운로드, GGUF 형식을 처리하고 OpenAI 호환 로컬 API를 제공합니다.' },
          { title: '명시적 태그로 Qwen 3.6 27B 모델 다운로드', whyItMatters: 'qwen3.6:27b를 명시적으로 사용하십시오. 태그 없이 `qwen3`를 사용하면 기본적으로 8B 모델이 다운로드됩니다 — 이 가이드가 대상으로 하는 27B 모델이 아닙니다.' },
          { title: '올바른 컨텍스트 길이로 Modelfile 생성', whyItMatters: '기본 num_ctx 값인 2048 토큰은 실제 코딩 작업에 너무 작습니다. 32768 토큰은 대부분의 파일과 대화를 처리합니다.' },
          { title: '커스텀 모델 빌드 및 실행', whyItMatters: '확장된 컨텍스트 창을 가진 Qwen 3.6 27B 인스턴스를 생성합니다. 테스트 프롬프트로 확인하십시오.' },
          { title: 'API 엔드포인트 테스트', whyItMatters: 'Ollama는 localhost:11434/v1에서 OpenAI 호환 API를 노출합니다. 이 엔드포인트를 사용하여 LLM 클라이언트, IDE 및 PromptQuorum을 연결하십시오.' },
        ],
        codeBlock: `# 1단계 — Ollama 설치
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — https://ollama.com/download 에서 다운로드

# 2단계 — Qwen 3.6 27B 다운로드 (명시적 태그 필요)
ollama pull qwen3.6:27b
# Qwen 3.6 27B Q4_K_M (~17 GB) 다운로드
# 참고: 태그 없이 'ollama pull qwen3'를 사용하면 8B 모델이 다운로드됨

# 3단계 — 올바른 num_ctx로 Modelfile 생성
cat > Modelfile <<'EOF'
FROM qwen3.6:27b
PARAMETER num_ctx 32768
PARAMETER temperature 0.7
EOF

# 4단계 — 빌드 및 실행
ollama create qwen3-32k -f Modelfile
ollama run qwen3-32k

# 예상 출력 (Qwen 정상 작동 시):
# >>> Write a Python function to reverse a string.
# def reverse_string(s: str) -> str:
#     return s[::-1]
#
# This function takes a string s as input and returns the reversed
# string using Python slice notation with step -1.

# 5단계 — API 테스트
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '3단계를 건너뛰지 마십시오. Ollama의 기본 num_ctx는 2048 토큰(약 1,500 단어)입니다. 이는 대부분의 실제 코딩 작업에 너무 작습니다. 대부분의 코딩 작업(파일 읽기, 함수 설명, 테스트 작성)은 8,000–32,000 토큰의 컨텍스트가 필요합니다. 이 수정 없이는 Qwen이 프롬프트를 자동으로 잘라내어 저하된 출력을 생성합니다.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-ko.png',
        imageCaption: 'Qwen 3.6 27B용 Ollama 설정 5단계: Ollama 설치, qwen3.6:27b 다운로드, Modelfile에서 num_ctx를 32768로 수정, 모델 빌드 및 실행, localhost:11434/v1 API 엔드포인트 테스트 — 총 10분 이내.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studio 설정',
        content: [
          'LM Studio는 CLI 명령 없이 로컬 LLM을 실행할 수 있는 GUI를 제공합니다. 비기술 사용자나 Windows 설정의 경우 권장되는 방법입니다. [lmstudio.ai](https://lmstudio.ai)에서 다운로드하십시오.',
        ],
        numberedItems: [
          { title: 'LM Studio 다운로드 및 설치', whyItMatters: '로컬 LLM 추론을 위한 무료 크로스 플랫폼 GUI. CLI 불필요.' },
          { title: 'Qwen 3 27B 검색 및 다운로드', whyItMatters: 'LM Studio의 모델 브라우저는 Hugging Face를 검색합니다. "Qwen 3 27B"를 검색하고 16GB VRAM을 위한 Q4_K_M GGUF 변형을 선택하십시오.' },
          { title: 'LM Studio 설정에서 컨텍스트 길이 구성', whyItMatters: 'Ollama와 동일한 num_ctx 문제 — 모델 로드 전에 모델 파라미터에서 Context Length를 32768로 변경하십시오.' },
          { title: '로컬 서버 시작', whyItMatters: 'LM Studio의 "Start Server"는 localhost:1234에서 OpenAI 호환 API를 생성합니다. 클라이언트와 PromptQuorum에서 이 URL을 사용하십시오.' },
          { title: 'Claude Code 설치(선택사항)', whyItMatters: 'Claude Code는 Claude를 로컬에서 실행하기 위한 Anthropic의 CLI입니다. https://claude.com/claude-code 에서 다운로드하십시오(모든 플랫폼: macOS, Windows, Linux).' },
          { title: 'Claude Code Proxy 설치', whyItMatters: '무료 Claude Code Proxy(OpenClaw 기반)는 Claude Code를 로컬 LLM에 연결합니다. 실행: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`. Windows에서는: `uv run python -m uvicorn server:app --host 0.0.0.0 --port 8082`로 실행하십시오.' },
          { title: '로컬 Qwen을 사용하도록 Claude Code 구성', whyItMatters: 'Claude Code 설정에서 API 엔드포인트를 http://localhost:8082로 설정하십시오. Claude Code는 프록시를 통해 LM Studio 인스턴스(localhost:1234)로 요청을 라우팅하여 Qwen 3.6 27B를 코딩 어시스턴트로 사용할 수 있게 합니다. 코드는 완전히 로컬로 유지됩니다.' },
        ],
        codeBlock: `// LM Studio 로컬 서버 구성 (JSON 내보내기)
{
  "model": "qwen3.6-27b-q4_k_m",
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
        note: 'gpu_layers를 -1로 설정하여 모든 레이어를 GPU로 오프로드하십시오. 모델이 VRAM에 맞는 시스템에서는 전체 GPU 오프로드가 가장 빠른 추론을 제공합니다.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum 연결',
        content: [
          'PromptQuorum은 여러 LLM에 걸쳐 프롬프트를 라우팅합니다. 로컬 Qwen 인스턴스를 디스패치 대상으로 사용하려면 PromptQuorum의 로컬 LLM 엔드포인트가 Ollama 서버를 가리키도록 구성하십시오.',
          '이것은 Ollama(OpenAI 호환) 엔드포인트로 Claude에 사용되는 Anthropic API 구성과는 별개입니다. 두 가지를 동시에 활성화할 수 있으며, PromptQuorum은 작업 유형과 데이터 민감도에 따라 라우팅합니다.',
        ],
        codeBlock: `# PromptQuorum 디스패치 구성 — Ollama를 통한 로컬 Qwen
# .env 또는 PromptQuorum 설정 패널에서 설정

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3.6:27b

# 라우팅 규칙 예시 (PromptQuorum 디스패치):
# - task_type: code       → model: qwen3.6:27b  (로컬 Ollama, GDPR 안전)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, 별도 구성)
# - task_type: private    → model: qwen3.6:27b  (로컬 Ollama, 클라우드 유출 없음)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '로컬 디스패치 설정에서 OLLAMA_BASE_URL을 http://localhost:11434/v1로, LOCAL_LLM_MODEL을 qwen3.6:27b로 설정하여 PromptQuorum을 로컬 Qwen에 연결하십시오.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '문제 해결',
        items: [
          '**모델 응답이 문장 중간에 잘림**: num_ctx가 너무 낮습니다. `PARAMETER num_ctx 32768`로 Modelfile을 재구성하고 `ollama create`로 모델을 다시 만드십시오.',
          '**CUDA 메모리 부족 오류**: 모델이 VRAM에 맞지 않습니다. Qwen 3 14B Q4_K_M(~9GB VRAM)으로 전환하거나 27B의 Q3_K_S 양자화를 시도하십시오.',
          '**Ollama API가 404 반환**: 모델 이름이 정확히 일치하는지 확인하십시오. `ollama list`를 실행하여 사용 가능한 모델을 확인하십시오. 표시된 정확한 이름을 사용하십시오(예: `qwen3-32k`).',
          '**느린 생성 속도(초당 5 토큰 미만)**: GPU 레이어가 완전히 오프로드되지 않았습니다. `ollama run qwen3-32k`를 실행하고 `num_gpu_layers`가 최대화되어 있는지 확인하십시오. GPU를 많이 사용하는 다른 프로세스가 실행 중이지 않은지 확인하십시오.',
          '**LM Studio에서 "모델 로드 실패" 표시**: VRAM이 부족합니다. Q4_K_M 컨텍스트 길이를 16384로 줄이거나 Qwen 3 14B로 전환하십시오.',
          '**PromptQuorum에서 인증 오류 반환**: PromptQuorum의 로컬 LLM 설정에서 `OLLAMA_BASE_URL=http://localhost:11434/v1`을 설정하십시오. 양식에 키가 필요한 경우 비어 있지 않은 문자열을 입력하십시오 — Ollama는 API 키 인증이 필요 없습니다.',
          '**Ollama가 GPU 대신 CPU 사용**: NVIDIA의 경우: CUDA 드라이버가 설치되어 있는지 확인하십시오(`nvidia-smi`에 GPU가 표시되어야 합니다). Mac의 경우: Ollama는 Metal을 자동으로 사용합니다 — 구성이 필요 없습니다. Metal이 활성화되지 않은 경우 ollama.com에서 Ollama를 재설치하십시오.',
          '**모델 다운로드가 중단되거나 실패**: 대형 모델(Qwen 3.6 27B ~17GB)은 느린 연결에서 시간 초과됩니다. `ollama pull qwen3.6:27b`를 다시 실행하십시오 — Ollama는 중단된 지점에서 재개합니다. 또는 [Hugging Face](https://huggingface.co/Qwen)에서 GGUF를 직접 다운로드하고 Modelfile FROM 절에서 로컬 경로와 함께 `ollama create`를 사용하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps`를 실행하여 현재 VRAM에 로드된 모델과 각 모델이 소비하는 메모리를 확인하십시오. 더 큰 모델로 전환하기 전에 `ollama stop qwen3-32k`를 사용하여 모델을 언로드하십시오.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: '전력 소비 및 TCO',
        content: [
          '하드웨어 비용은 일회성 투자입니다. 전기는 지속적인 비용입니다. 올바른 하드웨어 선택은 전기 요금, 사용 시간, EU 내 여부(2026년 독일의 전기 요금은 평균 ~€0.35/kWh인 반면 미국은 ~$0.13/kWh)에 따라 달라집니다.',
          'RTX 4090 시스템은 추론 부하 시 약 450W를 소비합니다. 독일 전기 요금으로 하루 8시간 실행: 0.45kW × 8시간 × €0.35 × 250 근무일 = **연간 €315의 전기 요금**. 하드웨어 비용은 완성 시스템 기준 ~€2,000–2,500입니다.',
          'Apple Silicon M5 Max Mac Studio는 LLM 추론 부하 시 약 40–50W를 소비합니다. 동일 시나리오: 0.05kW × 8시간 × €0.35 × 250일 = **연간 €35의 전기 요금**. 하드웨어 비용은 128GB M5 Max Mac Studio 기준 ~€3,000–4,000입니다.',
          '단일 개발자 기준 하루 1,000만 토큰의 Claude Sonnet 5 API와 비교: 1,000만 토큰 × $3/100만 × 250일 = **연간 $7,500**.',
        ],
        rows: [
          { Option: 'Claude Sonnet 5 API', 'Hardware': '—', 'Electricity/year (EU)': '—', 'API cost/year (10M tok/day)': '$7,500', 'Break-even': '—' },
          { Option: 'RTX 4090 시스템 + 로컬 Qwen', 'Hardware': '€2,200', 'Electricity/year (EU)': '€315', 'API cost/year (10M tok/day)': '$0', 'Break-even': 'Claude 대비 ~4개월' },
          { Option: 'Mac Mini M4 Pro (48GB)', 'Hardware': '€1,599', 'Electricity/year (EU)': '€25', 'API cost/year (10M tok/day)': '$0', 'Break-even': 'Claude 대비 ~3개월' },
          { Option: 'Mac Studio M5 Max (128GB)', 'Hardware': '~€3,500', 'Electricity/year (EU)': '€35', 'API cost/year (10M tok/day)': '$0', 'Break-even': 'Claude 대비 ~6개월' },
        ],
        columns: ['Option', 'Hardware', 'Electricity/year (EU)', 'API cost/year (10M tok/day)', 'Break-even'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: '높은 전기 요금 지역의 EU 팀에게 Mac Mini M4 Pro(48GB)는 최고의 TCO를 제공합니다: 하드웨어와 전기를 합산한 비용이 가장 낮으며, 설계상 GDPR 준수를 보장하고 사무실 환경에서 조용하게 작동합니다. Mac Studio M5 Max는 Qwen 3 72B 품질이 필요한 팀을 위한 업그레이드 경로입니다.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Qwen 3.6 vs Claude Sonnet 5 vs DeepSeek — 2026년 비교](/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[EU 기업들이 로컬 Qwen으로 전환하는 이유](/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — 2026년 코딩 벤치마크](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[로컬 AI 프로덕션 배포: 개인정보 우선 고객 서비스 에이전트 구축](https://www.youtube.com/watch?v=W1f9bWj4pAE) — Rob Braxman의 하드웨어 트레이드오프, 메모리 관리 및 자체 호스팅 AI 에이전트의 실제 성능을 다룬 사례 연구.',
          '[모든 로컬 LLM 가이드 보기](/local-llms)',
          '[PromptQuorum 대기자 명단 등록](/waitlist)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Qwen 3를 로컬에서 실행하기 위한 최소 하드웨어는 무엇인가요?', a: 'Q4_K_M 양자화의 Qwen 3.6 27B의 경우: 16GB VRAM GPU — RTX 4080 또는 RTX 3090. Apple Silicon의 경우: 36GB 통합 메모리의 M3 Pro 또는 48GB의 M3 Max. 더 작은 Qwen 3 14B의 경우: 9GB VRAM(RTX 3080 또는 RTX 4070). Qwen 3 7B는 5GB VRAM(GTX 1080 이상)에서 실행됩니다.' },
          { q: 'Ollama가 프롬프트를 잘라내는 이유는 무엇인가요?', a: 'Ollama는 기본값으로 num_ctx 2048 토큰(~1,500 단어)을 사용합니다. 이는 대부분의 실제 코딩 작업에 너무 작습니다. Modelfile에서 num_ctx를 최소 32768로 설정해야 합니다. `PARAMETER num_ctx 32768`로 Modelfile을 만들고 `ollama create qwen3-32k -f Modelfile`을 실행하여 올바른 컨텍스트 창을 갖춘 모델 인스턴스를 빌드하십시오.' },
          { q: 'Qwen을 로컬에서 실행하면 GDPR을 준수하나요?', a: '네 — 로컬 추론은 가능한 가장 GDPR 준수적인 AI 아키텍처입니다. Qwen이 사용자의 하드웨어에서 실행되면 어떤 제3자에게도 데이터가 전송되지 않습니다. 데이터 이전이 없기 때문에 국제 데이터 이전에 관한 GDPR 제44조 제한이 적용되지 않습니다. 내부 데이터 처리 계약이 적용되지만, AI 레이어에 대한 SCC나 적정성 결정은 필요하지 않습니다.' },
          { q: 'Qwen 3를 CPU만으로 실행할 수 있나요?', a: '네, GPU 없는 시스템에서 llama.cpp 또는 Ollama를 통해 가능합니다. CPU 추론은 상당히 느립니다 — Qwen 3.6 27B의 경우 최신 CPU에서 일반적으로 초당 1–5 토큰입니다. 프로덕션 사용의 경우 GPU 또는 Apple Silicon이 필요합니다. 전용 GPU가 없는 노트북에서 가끔 사용하거나 테스트하는 경우 CPU 추론은 작동하지만 실시간 대화에는 비실용적입니다.' },
          { q: 'Qwen을 최신 버전으로 업데이트하려면 어떻게 하나요?', a: '`ollama pull qwen3.6:27b`를 다시 실행하십시오. Ollama는 최신 버전이 있는지 확인하고 변경된 레이어만 다운로드합니다. Modelfile을 다시 만들 필요가 없습니다 — 모델 태그(qwen3.6:27b)는 항상 최신 27B 릴리스를 가리킵니다. LM Studio에서는 모델 라이브러리에서 업데이트를 확인하고 최신 GGUF 버전이 있으면 재다운로드하십시오.' },
          { q: 'Claude Code와 로컬 Qwen을 함께 사용할 수 있나요?', a: '네. Claude Code는 Claude를 위한 Anthropic의 코딩 CLI입니다. 로컬 Qwen 3.6 27B와 함께 사용하려면 무료 Claude Code Proxy를 설치하고 LM Studio 인스턴스(localhost:1234)를 가리킨 다음 Claude Code가 프록시(localhost:8082)를 통해 요청을 라우팅하도록 구성하십시오. 코드는 완전히 로컬로 유지됩니다 — Anthropic API 키가 필요 없습니다.' },
          { q: '로컬 Qwen과 함께 Claude Code를 사용하려면 Anthropic API 키가 필요한가요?', a: '아니요. 프록시를 통해 로컬 LLM과 함께 Claude Code를 사용할 때는 Anthropic API 키가 사용되지 않습니다. 프록시가 Claude Code의 요청을 가로채어 LM Studio 서버로 라우팅합니다. API 키는 병렬로 Anthropic의 Claude API를 다른 작업에 사용하려는 경우에만 필요합니다.' },
          { q: 'Claude Code Proxy와 Ollama의 차이점은 무엇인가요?', a: 'Ollama는 모델 다운로드, 양자화, 컨텍스트 구성을 관리하고 OpenAI 호환 API(localhost:11434/v1)를 노출하는 로컬 LLM 런타임입니다. Claude Code Proxy는 Claude Code를 로컬 LLM(Ollama, LM Studio, 또는 llama.cpp)에 연결하는 경량 브리지입니다. 두 가지를 동시에 실행할 수 있습니다: Ollama는 모델을 처리하고, 프록시는 Claude Code 클라이언트 연결을 처리합니다. 또는 Ollama 대신 LM Studio를 런타임으로 사용할 수 있습니다 — 프록시는 두 가지 모두와 호환됩니다.' },
          { q: '로컬 Qwen과 Claude Code를 함께 사용하면 추론 속도에 영향을 미치나요?', a: '큰 영향 없습니다. 프록시는 LM Studio 인스턴스와 같은 기기에서 실행되므로 무시할 수 있는 지연(50ms 미만)만 추가됩니다. 추론 속도는 프록시가 아닌 GPU와 모델 양자화(Q4_K_M이 표준)에 의해 결정됩니다. 코드 생성 작업의 전체 추론 응답 시간은 출력 길이에 따라 RTX 4080에서 일반적으로 20–60초입니다.' },
        ],
      },
    },
  },
};
