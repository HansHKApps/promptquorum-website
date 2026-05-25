// Slug: run-qwen-locally-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'How to Run Qwen 3 Locally in 2026: Ollama + LM Studio Setup Guide',
    seoTitle: 'Run Qwen 3 Locally 2026: Ollama & LM Studio Setup Guide',
    intro: 'Qwen 3.6 27B runs on a single consumer GPU (16 GB VRAM) via Ollama or LM Studio. Setup takes under 10 minutes. This guide covers model selection, hardware requirements, Ollama CLI installation, LM Studio GUI setup, the critical num_ctx fix, power consumption and TCO, and how to connect local Qwen to PromptQuorum for multi-model dispatch.',
    metaDescription: 'Step-by-step setup for Qwen 3.6 27B on Ollama or LM Studio: hardware requirements (16 GB VRAM), num_ctx fix (critical), power consumption, and PromptQuorum integration.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10 min read',
    educationalLevel: 'Beginner',
    audience: 'Developers setting up a local LLM for the first time, EU teams seeking GDPR-compliant AI',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Join the PromptQuorum Waitlist →',
    leadAnswerBlock: '**Run `ollama pull qwen3:27b` on any machine with 16 GB VRAM or Apple Silicon with 32+ GB unified memory. For GUI access, use LM Studio. Both run Qwen 3.6 27B fully offline. Critical: set `num_ctx` to 32768 or higher — Ollama\'s default of 2048 tokens truncates most real-world tasks.**',
    nextStep: {
      text: 'Qwen is running locally. Now explore the best UIs that make it usable.',
      label: 'Best Local LLM Frontends 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      en: {
        question: 'How do I run Qwen 3 locally in 2026?',
        answer: 'Install Ollama, run `ollama pull qwen3:27b`, then `ollama run qwen3:27b`. For GUI: download LM Studio, search "Qwen 3 27B", download the Q4_K_M GGUF file. Critical: set num_ctx to 32768 in Ollama (default 2048 is too small). For GDPR-compliant team use, connect via PromptQuorum\'s local Ollama dispatch endpoint.',
        bullets: [
          'Minimum hardware: 16 GB VRAM (RTX 4080) or Apple Silicon with 32 GB unified memory',
          'Ollama install: brew install ollama (Mac) or curl install.sh (Linux/Windows)',
          'Pull model: ollama pull qwen3:27b (downloads Qwen 3.6 27B Q4_K_M ~17 GB)',
          'Fix context: set num_ctx 32768 in Modelfile — default 2048 is too small',
          'LM Studio alternative: GUI-based, no CLI required, same model quality',
        ],
        updatedDate: '2026-05-16',
      },
      de: {
        question: 'Wie fuehre ich Qwen 3 lokal in 2026 aus?',
        answer: 'Installiere Ollama, fuehre `ollama pull qwen3:27b` aus, dann `ollama run qwen3:27b`. Fuer eine GUI: Lade LM Studio herunter, suche "Qwen 3 27B", lade die Q4_K_M GGUF-Datei herunter. Wichtig: Setze num_ctx auf 32768 in Ollama (Standardwert 2048 ist zu klein). Fuer DSGVO-konformen Team-Betrieb verbinde ueber den lokalen Ollama-Dispatch-Endpoint von PromptQuorum.',
        bullets: [
          'Mindest-Hardware: 16 GB VRAM (RTX 4080) oder Apple Silicon mit 32 GB Unified Memory',
          'Ollama-Installation: brew install ollama (Mac) oder install.sh (Linux/Windows)',
          'Modell laden: ollama pull qwen3:27b (laedt Qwen 3.6 27B Q4_K_M ~17 GB)',
          'Kontext korrigieren: num_ctx 32768 im Modelfile setzen — Standard 2048 ist zu klein',
          'LM Studio Alternative: GUI-basiert, kein CLI noetig, gleiche Modellqualitaet',
        ],
        updatedDate: '2026-05-16',
      },
      fr: {
        question: 'Comment exécuter Qwen 3 localement en 2026 ?',
        answer: 'Installez Ollama, exécutez `ollama pull qwen3:27b`, puis `ollama run qwen3:27b`. Pour GUI : téléchargez LM Studio, recherchez "Qwen 3 27B", téléchargez le fichier GGUF Q4_K_M. Critique : définissez num_ctx à 32768 dans Ollama (2048 par défaut est trop petit). Pour une utilisation d\'équipe conforme RGPD, connectez via l\'endpoint de dispatch Ollama local de PromptQuorum.',
        bullets: [
          'Matériel minimum : 16 Go VRAM (RTX 4080) ou Apple Silicon avec 32 Go mémoire unifiée',
          'Installation Ollama : brew install ollama (Mac) ou install.sh (Linux/Windows)',
          'Télécharger le modèle : ollama pull qwen3:27b (~17 Go)',
          'Corriger le contexte : num_ctx 32768 dans Modelfile — 2048 par défaut est trop petit',
          'Alternative LM Studio : interface graphique, pas de CLI requis',
        ],
        updatedDate: '2026-05-16',
      },
      ja: {
        question: '2026年にQwen 3をローカルで実行するには？',
        answer: 'Ollamaをインストールし、`ollama pull qwen3:27b`を実行してから`ollama run qwen3:27b`。GUIの場合：LM Studioをダウンロードし、「Qwen 3 27B」を検索、Q4_K_M GGUFファイルをダウンロード。重要：Ollamaのnum_ctxを32768に設定（デフォルトの2048は小さすぎる）。GDPRに準拠したチーム利用にはPromptQuorumのローカルOllamaディスパッチエンドポイント経由で接続。',
        bullets: [
          '最小ハードウェア：16 GB VRAM（RTX 4080）または32 GBユニファイドメモリのApple Silicon',
          'Ollamaインストール：brew install ollama（Mac）またはinstall.sh（Linux/Windows）',
          'モデル取得：ollama pull qwen3:27b（Qwen 3.6 27B Q4_K_M約17 GBをダウンロード）',
          'コンテキスト修正：Modelfileにてnum_ctx 32768を設定 — デフォルト2048は小さすぎる',
          'LM Studio代替：GUIベース、CLI不要、同等のモデル品質',
        ],
        updatedDate: '2026-05-16',
      },
      zh: {
        question: '2026年如何在本地运行Qwen 3？',
        answer: '安装Ollama，运行`ollama pull qwen3:27b`，然后`ollama run qwen3:27b`。GUI方式：下载LM Studio，搜索"Qwen 3 27B"，下载Q4_K_M GGUF文件。关键：将Ollama中的num_ctx设置为32768（默认2048太小）。如需GDPR合规团队使用，通过PromptQuorum的本地Ollama调度端点连接。',
        bullets: [
          '最低硬件：16 GB显存（RTX 4080）或32 GB统一内存的Apple Silicon',
          'Ollama安装：brew install ollama（Mac）或install.sh（Linux/Windows）',
          '拉取模型：ollama pull qwen3:27b（下载Qwen 3.6 27B Q4_K_M约17 GB）',
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
          '**PromptQuorum integration**: Set `OLLAMA_BASE_URL=http://localhost:11434/v1` and `LOCAL_LLM_MODEL=qwen3:27b` in PromptQuorum\'s local dispatch settings — separate from the Anthropic API config.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Run Qwen Locally in 2026',
        content: [
          'Running Qwen 3 locally in 2026 means paying €0 per token for a model that reaches 92.1% HumanEval — comparable to or exceeding Claude Sonnet 4.6 on coding tasks. Once hardware is amortised, every prompt is free. For a development team of five generating 10M tokens per day, local inference saves ~$900/month versus Claude Sonnet 4.6 API pricing.',
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
        note: 'Q4_K_M is the recommended quantization for most users — best quality-to-size ratio. Q8_0 offers higher quality at higher VRAM cost. Always use the explicit tag (qwen3:27b, not qwen3) to ensure you download the 27B model.',
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
          { title: 'Pull the Qwen 3.6 27B model with explicit tag', whyItMatters: 'Use qwen3:27b explicitly. The bare `qwen3` tag defaults to 8B — not the 27B model this guide targets.' },
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
ollama pull qwen3:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3:27b
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
          'PromptQuorum routes prompts across multiple LLMs. To use your local Qwen instance as a dispatch target, configure PromptQuorum\'s local LLM endpoint to point to your Ollama server.',
          'This is the Ollama (OpenAI-compatible) endpoint — distinct from the Anthropic API configuration used for Claude. Both can be active simultaneously, with PromptQuorum routing based on task type and data sensitivity.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen via Ollama
# Set in your .env or PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_LLM_MODEL=qwen3:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect PromptQuorum to local Qwen by setting OLLAMA_BASE_URL to http://localhost:11434/v1 and LOCAL_LLM_MODEL to qwen3:27b in the local dispatch settings.' },
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
          '**Model download stalls or fails**: Large models (Qwen 3.6 27B ~17 GB) time out on slow connections. Run `ollama pull qwen3:27b` again — Ollama resumes from where it left off. Alternatively, download the GGUF directly from [Hugging Face](https://huggingface.co/Qwen) and use `ollama create` with a local path in the Modelfile FROM clause.',
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
          'Compared against Claude Sonnet 4.6 API at 10M tokens/day for a single developer: 10M tokens × $3/1M × 250 days = **$7,500/year**.',
        ],
        rows: [
          { Option: 'Claude Sonnet 4.6 API', 'Hardware': '—', 'Electricity/year (EU)': '—', 'API cost/year (10M tok/day)': '$7,500', 'Break-even': '—' },
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
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — 2026 Comparison](/local-llms/qwen-vs-claude-vs-deepseek-local-2026)',
          '[Why EU Companies Are Switching to Local Qwen](/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Qwen Coder vs DeepSeek vs Mistral — Coding Benchmark 2026](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026)',
          '[Local AI Production Deployment: Building a Privacy-First Customer Service Agent](https://www.youtube.com/watch?v=W1f9bWj4pAE) — Rob Braxman case study covering hardware trade-offs, memory management, and real-world performance for self-hosted AI agents.',
          '[Browse All Local LLM Guides](/local-llms)',
          '[Join the PromptQuorum Waitlist](/waitlist)',
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
          { q: 'How do I update Qwen to the latest version?', a: 'Run `ollama pull qwen3:27b` again. Ollama checks if a newer version is available and downloads only the changed layers. You do not need to recreate your Modelfile — the model tag (qwen3:27b) always points to the latest 27B release. In LM Studio, check the model library for updates and re-download if a newer GGUF version is available.' },
          { q: 'Can I use Claude Code with local Qwen?', a: 'Yes. Claude Code is Anthropic\'s CLI for coding with Claude. To use it with local Qwen 3.6 27B, install the free Claude Code Proxy, point it to your LM Studio instance (localhost:1234), then configure Claude Code to route requests through the proxy (localhost:8082). Your code remains fully local — no Anthropic API key is required.' },
          { q: 'Do I need an Anthropic API key to run Claude Code with local Qwen?', a: 'No. When using Claude Code with a local LLM via the proxy, the Anthropic API key is not used. The proxy intercepts Claude Code\'s requests and routes them to your LM Studio server instead. You only need the API key if you choose to also use Anthropic\'s Claude API for other tasks in parallel.' },
          { q: 'What\'s the difference between the Claude Code Proxy and Ollama?', a: 'Ollama is a local LLM runtime that manages model downloads, quantization, context configuration, and exposes an OpenAI-compatible API (localhost:11434/v1). The Claude Code Proxy is a lightweight bridge that connects Claude Code specifically to any local LLM (Ollama, LM Studio, or llama.cpp). Both can run simultaneously: Ollama handles the model, the proxy handles the Claude Code client connection. Alternatively, use LM Studio as your runtime instead of Ollama — the proxy works with both.' },
          { q: 'Does using Claude Code with local Qwen affect inference speed?', a: 'No significant impact. The proxy adds negligible latency (< 50ms) since it runs on the same machine as your LM Studio instance. Inference speed is determined by your GPU and the model quantization (Q4_K_M is standard), not the proxy. Full inference-to-response time for a code generation task is typically 20–60 seconds on an RTX 4080, depending on output length.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'Qwen 3 lokal ausführen 2026: Vollständige Anleitung mit Ollama und LM Studio',
    seoTitle: 'Qwen 3 lokal ausführen 2026: Ollama & LM Studio Setup',
    intro: 'Qwen 3.6 27B läuft auf einer einzelnen Consumer-GPU (16 GB VRAM) über Ollama oder LM Studio. Die Einrichtung dauert weniger als 10 Minuten. Dieser Leitfaden deckt Modellauswahl, Hardware-Anforderungen, Ollama-CLI-Installation, LM Studio GUI-Setup, die entscheidende num_ctx-Korrektur, Stromverbrauch und TCO sowie die Verbindung mit PromptQuorum für Multi-Modell-Dispatch ab.',
    metaDescription: 'Schritt-für-Schritt-Anleitung: Qwen 3.6 27B auf Ollama oder LM Studio. Hardware-Anforderungen (16 GB VRAM), kritische num_ctx-Einstellung, Stromverbrauch, PromptQuorum.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Entwickler, die erstmals ein lokales LLM einrichten; EU-Teams auf der Suche nach DSGVO-konformer KI',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Zur PromptQuorum-Warteliste anmelden →',
    leadAnswerBlock: '**Führen Sie `ollama pull qwen3:27b` auf jedem Rechner mit 16 GB VRAM oder Apple Silicon mit 32+ GB Unified Memory aus. Für den GUI-Zugriff verwenden Sie LM Studio. Beide führen Qwen 3.6 27B vollständig offline aus. Wichtig: Setzen Sie `num_ctx` auf 32768 oder höher — Ollamas Standard von 2048 Token kürzt die meisten realen Aufgaben ab.**',
    nextStep: {
      text: 'Qwen läuft lokal. Entdecken Sie jetzt die besten Benutzeroberflächen.',
      label: 'Beste lokale LLM-Frontends 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      de: {
        question: 'Wie führe ich Qwen 3 lokal in 2026 aus?',
        answer: 'Installieren Sie Ollama, führen Sie `ollama pull qwen3:27b` aus, dann `ollama run qwen3:27b`. Für eine GUI: Laden Sie LM Studio herunter, suchen Sie „Qwen 3 27B", laden Sie die Q4_K_M GGUF-Datei herunter. Wichtig: Setzen Sie num_ctx auf 32768 in Ollama (Standardwert 2048 ist zu klein). Für DSGVO-konformen Team-Betrieb verbinden Sie über den lokalen Ollama-Dispatch-Endpunkt von PromptQuorum.',
        bullets: [
          'Mindest-Hardware: 16 GB VRAM (RTX 4080) oder Apple Silicon mit 32 GB Unified Memory',
          'Ollama-Installation: brew install ollama (Mac) oder install.sh (Linux/Windows)',
          'Modell laden: ollama pull qwen3:27b (lädt Qwen 3.6 27B Q4_K_M ~17 GB)',
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
          '**PromptQuorum-Integration**: Setzen Sie `OLLAMA_BASE_URL=http://localhost:11434/v1` und `LOCAL_LLM_MODEL=qwen3:27b` in den lokalen Dispatch-Einstellungen von PromptQuorum — getrennt von der Anthropic-API-Konfiguration.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Warum Qwen 2026 lokal ausführen',
        content: [
          'Qwen 3 lokal auszuführen bedeutet 2026, 0 € pro Token für ein Modell zu zahlen, das 92,1 % HumanEval erreicht — vergleichbar mit oder besser als Claude Sonnet 4.6 bei Coding-Aufgaben. Sobald die Hardware amortisiert ist, ist jede Anfrage kostenlos. Für ein Entwicklungsteam von fünf Personen, das 10 Millionen Token pro Tag generiert, spart lokale Inferenz ca. 830 €/Monat gegenüber Claude Sonnet 4.6 API-Preisen.',
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
        note: 'Q4_K_M ist die empfohlene Quantisierung für die meisten Anwender — bestes Qualitäts-/Größenverhältnis. Q8_0 bietet höhere Qualität bei höherem VRAM-Bedarf. Verwenden Sie stets den expliziten Tag (qwen3:27b, nicht qwen3), um sicherzustellen, dass das 27B-Modell heruntergeladen wird.',
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
          { title: 'Qwen 3.6 27B mit explizitem Tag herunterladen', whyItMatters: 'Verwenden Sie qwen3:27b explizit. Der bare Tag `qwen3` lädt standardmäßig das 8B-Modell — nicht das 27B-Modell, auf das sich diese Anleitung bezieht.' },
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
ollama pull qwen3:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3:27b
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
LOCAL_LLM_MODEL=qwen3:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Verbinden Sie PromptQuorum mit lokalem Qwen, indem Sie OLLAMA_BASE_URL auf http://localhost:11434/v1 und LOCAL_LLM_MODEL auf qwen3:27b in den lokalen Dispatch-Einstellungen setzen.' },
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
          '**Modell-Download stoppt oder schlägt fehl**: Große Modelle (Qwen 3.6 27B ~17 GB) können bei langsamen Verbindungen zeitüberschreiten. Führen Sie `ollama pull qwen3:27b` erneut aus — Ollama setzt ab der letzten Position fort. Alternativ laden Sie das GGUF direkt von [Hugging Face](https://huggingface.co/Qwen) herunter und verwenden Sie `ollama create` mit einem lokalen Pfad in der FROM-Klausel des Modelfile.',
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
          'Im Vergleich zur Claude Sonnet 4.6 API bei 10 Millionen Token/Tag für einen einzelnen Entwickler: 10 Mio. Token × 3 $/1 Mio. × 250 Tage = **7.500 $/Jahr** (USD, da Anthropic API in US-Dollar abgerechnet wird).',
        ],
        rows: [
          { Option: 'Claude Sonnet 4.6 API', Hardware: '—', 'Stromkosten/Jahr (EU)': '—', 'API-Kosten/Jahr (10 Mio. Tok./Tag)': '7.500 $', Amortisation: '—' },
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
          '[Qwen 3 vs. Claude Sonnet 4.6 vs. DeepSeek R2 — Vergleich 2026](/local-llms/qwen-vs-claude-vs-deepseek-local-2026?lang=de)',
          '[Warum EU-Unternehmen auf lokales Qwen umsteigen](/blog/eu-companies-local-qwen-gdpr-shift?lang=de)',
          '[Qwen Coder vs. DeepSeek vs. Mistral — Coding-Benchmark 2026](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026?lang=de)',
          '[Alle Local-LLM-Guides](/local-llms?lang=de)',
          '[PromptQuorum-Warteliste beitreten](/waitlist?lang=de)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufige Fragen',
        faqs: [
          { q: 'Was ist die minimale Hardware, um Qwen 3 lokal auszuführen?', a: 'Für Qwen 3.6 27B bei Q4_K_M Quantisierung: 16 GB VRAM (RTX 4080 oder RTX 3090). Für Apple Silicon: M3 Pro mit 36 GB Unified Memory oder M3 Max mit 48 GB. Für das kleinere Qwen 3 14B: 9 GB VRAM (RTX 3080 oder RTX 4070). Qwen 3 7B läuft auf 5 GB VRAM (GTX 1080 oder besser).' },
          { q: 'Warum kürzt Ollama meine Anfragen ab?', a: 'Ollama verwendet standardmäßig num_ctx 2048 Token (~1.500 Wörter). Das ist zu wenig für die meisten realen Coding-Aufgaben. Sie müssen num_ctx auf mindestens 32768 in Ihrem Modelfile setzen. Erstellen Sie ein Modelfile mit `PARAMETER num_ctx 32768`, dann führen Sie `ollama create qwen3-32k -f Modelfile` aus, um eine Modellinstanz mit dem richtigen Kontextfenster zu erstellen.' },
          { q: 'Ist die lokale Ausführung von Qwen DSGVO-konform?', a: 'Ja — lokale Inferenz ist die DSGVO-konformste KI-Architektur. Wenn Qwen auf Ihrer Hardware läuft, werden keine Daten an Dritte übertragen. DSGVO Art. 44 Beschränkungen für internationale Datenübermittlungen greifen nicht, da keine Übermittlung stattfindet. Ihr interner Datenverarbeitungsvertrag gilt, aber für die KI-Schicht sind keine SCCs oder Angemessenheitsbeschlüsse erforderlich.' },
          { q: 'Kann Qwen 3 ausschließlich auf der CPU ausgeführt werden?', a: 'Ja, über llama.cpp oder Ollama auf einem System ohne GPU. CPU-Inferenz ist deutlich langsamer — typischerweise 1–5 Token/Sekunde auf einer modernen CPU für Qwen 3.6 27B. Für den Produktiveinsatz ist GPU oder Apple Silicon erforderlich. Für gelegentliche Nutzung oder Tests auf einem Laptop ohne dedizierte GPU funktioniert CPU-Inferenz, ist aber für Echtzeit-Konversation unpraktisch.' },
          { q: 'Wie aktualisiere ich Qwen auf die neueste Version?', a: 'Führen Sie `ollama pull qwen3:27b` erneut aus. Ollama prüft, ob eine neuere Version verfügbar ist, und lädt nur die geänderten Layer herunter. Sie müssen Ihr Modelfile nicht neu erstellen — der Model-Tag (qwen3:27b) zeigt immer auf die neueste 27B-Version. In LM Studio prüfen Sie die Modellbibliothek auf Updates und laden bei Bedarf eine neuere GGUF-Version herunter.' },
          { q: 'Muss ich bei der lokalen Ausführung von Qwen die DSGVO beachten?', a: 'Ja, aber der Aufwand ist deutlich geringer als bei Cloud-KI. Bei lokaler Inferenz verarbeiten Sie Daten auf Ihrer eigenen Infrastruktur — kein Auftragsverarbeitungsvertrag mit einem Drittanbieter (Art. 28) und kein Angemessenheitsbeschluss (Art. 44) für die KI-Schicht erforderlich. Sie müssen die Verarbeitung jedoch in Ihrem Verzeichnis von Verarbeitungstätigkeiten (VVT) dokumentieren. BSI-Grundschutz-Kataloge empfehlen lokale KI-Inferenz für Verarbeitungen mit Schutzbedarf „hoch" und „sehr hoch".' },
          { q: 'Ist lokales Qwen 3 für den deutschen Mittelstand geeignet?', a: 'Ja. Der Mac Mini M4 Pro (48 GB) für ca. 1.599 € bietet den besten Einstiegspunkt für mittelständische Unternehmen: lautloser Bürobetrieb, keine zusätzliche Strominfrastruktur, DSGVO-Konformität durch Design ohne separaten SCC-Prozess. Für Code-Generierung eines 5-köpfigen Entwicklungsteams (10 Mio. Token/Tag) amortisiert sich die Hardware gegenüber Claude Sonnet 4.6 API-Preisen in ca. 3 Monaten. Die BSI-Grundschutz-Konformität vereinfacht sich, weil keine personenbezogenen Daten die Unternehmensinfrastruktur verlassen.' },
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'Comment Exécuter Qwen 3 Localement en 2026 : Guide Ollama + LM Studio',
    seoTitle: 'Exécuter Qwen 3 localement 2026 : Guide de configuration',
    intro: 'Qwen 3.6 27B fonctionne sur un seul GPU grand public (16 Go VRAM) via Ollama ou LM Studio. La configuration prend moins de 10 minutes. Ce guide couvre la sélection du modèle, les exigences matérielles, l\'installation CLI Ollama, la configuration GUI LM Studio, la correction critique num_ctx, la consommation d\'énergie et TCO, ainsi que la connexion à PromptQuorum pour un dispatch multi-modèle.',
    metaDescription: 'Guide complet : Qwen 3.6 27B sur Ollama ou LM Studio. Matériel requis (16 Go VRAM), correction num_ctx (crucial), consommation électrique et intégration PromptQuorum.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Développeurs configurant un LLM local pour la première fois, équipes UE cherchant une IA conforme au RGPD',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Rejoindre la liste d\'attente PromptQuorum →',
    leadAnswerBlock: '**Exécutez `ollama pull qwen3:27b` sur n\'importe quelle machine avec 16 Go VRAM ou Apple Silicon avec 32+ Go de mémoire unifiée. Pour un accès GUI, utilisez LM Studio. Les deux exécutent Qwen 3.6 27B entièrement hors ligne. Important : définissez `num_ctx` à 32 768 ou supérieur — la valeur par défaut d\'Ollama de 2 048 tokens tronque la plupart des tâches réelles.**',
    nextStep: {
      text: 'Qwen fonctionne en local. Découvrez maintenant les meilleures interfaces.',
      label: 'Meilleures interfaces LLM locales 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      fr: {
        question: 'Comment exécuter Qwen 3 localement en 2026 ?',
        answer: 'Installez Ollama, exécutez `ollama pull qwen3:27b`, puis `ollama run qwen3:27b`. Pour GUI : téléchargez LM Studio, recherchez « Qwen 3 27B », téléchargez le fichier GGUF Q4_K_M. Important : définissez num_ctx à 32 768 dans Ollama (2 048 par défaut est trop petit). Pour un usage d\'équipe conforme au RGPD, connectez via l\'endpoint de dispatch Ollama local de PromptQuorum.',
        bullets: [
          'Matériel minimum : 16 Go VRAM (RTX 4080) ou Apple Silicon avec 32 Go de mémoire unifiée',
          'Installation Ollama : brew install ollama (Mac) ou install.sh (Linux/Windows)',
          'Télécharger le modèle : ollama pull qwen3:27b (~17 Go)',
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
          '**Intégration PromptQuorum** : définissez `OLLAMA_BASE_URL=http://localhost:11434/v1` et `LOCAL_LLM_MODEL=qwen3:27b` dans les paramètres de dispatch local de PromptQuorum — distinct de la configuration API Anthropic.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Pourquoi exécuter Qwen localement en 2026',
        content: [
          'Exécuter Qwen 3 localement en 2026 signifie payer 0 € par token pour un modèle atteignant 92,1 % sur HumanEval — comparable ou supérieur à Claude Sonnet 4.6 sur les tâches de codage. Une fois le matériel amorti, chaque requête est gratuite. Pour une équipe de développement de cinq personnes générant 10 millions de tokens par jour, l\'inférence locale économise ~830 €/mois par rapport aux tarifs de l\'API Claude Sonnet 4.6.',
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
        note: 'Q4_K_M est la quantification recommandée pour la plupart des utilisateurs — meilleur rapport qualité/taille. Q8_0 offre une meilleure qualité à un coût VRAM plus élevé. Utilisez toujours le tag explicite (qwen3:27b, pas qwen3) pour vous assurer de télécharger le modèle 27B.',
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
          { title: 'Télécharger Qwen 3.6 27B avec le tag explicite', whyItMatters: 'Utilisez qwen3:27b explicitement. Le tag simple `qwen3` télécharge par défaut le modèle 8B — pas le modèle 27B ciblé dans ce guide.' },
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
ollama pull qwen3:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3:27b
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
LOCAL_LLM_MODEL=qwen3:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connectez PromptQuorum à Qwen local en définissant OLLAMA_BASE_URL sur http://localhost:11434/v1 et LOCAL_LLM_MODEL sur qwen3:27b dans les paramètres de dispatch local.' },
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
          '**Le téléchargement du modèle s\'arrête ou échoue** : les grands modèles (Qwen 3.6 27B ~17 Go) peuvent expirer sur les connexions lentes. Exécutez à nouveau `ollama pull qwen3:27b` — Ollama reprend là où il s\'est arrêté. Sinon, téléchargez le GGUF directement depuis [Hugging Face](https://huggingface.co/Qwen) et utilisez `ollama create` avec un chemin local dans la clause FROM du Modelfile.',
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
          'Comparé à l\'API Claude Sonnet 4.6 à 10 millions de tokens/jour pour un seul développeur : 10 M tokens × 3 $/1 M × 250 jours = **7 500 $/an** (USD, facturé en dollars par Anthropic).',
        ],
        rows: [
          { Option: 'Claude Sonnet 4.6 API', Matériel: '—', 'Électricité/an (France)': '—', 'Coût API/an (10 M tok/j)': '7 500 $', 'Retour sur invest.': '—' },
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
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — Comparatif 2026](/local-llms/qwen-vs-claude-vs-deepseek-local-2026?lang=fr)',
          '[Pourquoi les entreprises UE passent à Qwen local](/blog/eu-companies-local-qwen-gdpr-shift?lang=fr)',
          '[Qwen Coder vs DeepSeek vs Mistral — Benchmark codage 2026](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026?lang=fr)',
          '[Tous les guides LLM local](/local-llms?lang=fr)',
          '[Rejoindre la liste d\'attente PromptQuorum](/waitlist?lang=fr)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Quel est le matériel minimum pour exécuter Qwen 3 localement ?', a: 'Pour Qwen 3.6 27B en quantification Q4_K_M : 16 Go VRAM (RTX 4080 ou RTX 3090). Pour Apple Silicon : M3 Pro avec 36 Go de mémoire unifiée ou M3 Max avec 48 Go. Pour le plus petit Qwen 3 14B : 9 Go VRAM (RTX 3080 ou RTX 4070). Qwen 3 7B fonctionne sur 5 Go VRAM (GTX 1080 ou mieux).' },
          { q: 'Pourquoi Ollama tronque-t-il mes requêtes ?', a: 'Ollama utilise num_ctx 2 048 tokens par défaut (~1 500 mots). C\'est insuffisant pour la plupart des tâches de codage réelles. Vous devez définir num_ctx à au moins 32 768 dans votre Modelfile. Créez un Modelfile avec `PARAMETER num_ctx 32768`, puis exécutez `ollama create qwen3-32k -f Modelfile` pour créer une instance avec la fenêtre de contexte correcte.' },
          { q: 'L\'exécution locale de Qwen est-elle conforme au RGPD ?', a: 'Oui — l\'inférence locale est l\'architecture IA la plus conforme au RGPD. Lorsque Qwen s\'exécute sur votre matériel, aucune donnée n\'est transmise à un tiers. Les restrictions de l\'article 44 du RGPD sur les transferts internationaux ne s\'appliquent pas car il n\'y a pas de transfert. Votre accord de traitement interne s\'applique, mais aucune SCC ni décision d\'adéquation n\'est nécessaire pour la couche IA.' },
          { q: 'Qwen 3 peut-il fonctionner uniquement sur CPU ?', a: 'Oui, via llama.cpp ou Ollama sur un système sans GPU. L\'inférence CPU est nettement plus lente — typiquement 1–5 tokens/seconde pour Qwen 3.6 27B sur un CPU moderne. Pour un usage en production, GPU ou Apple Silicon est requis. Pour des tests occasionnels sur un ordinateur portable sans GPU dédié, l\'inférence CPU fonctionne mais reste impraticable pour la conversation en temps réel.' },
          { q: 'Comment mettre à jour Qwen vers la dernière version ?', a: 'Exécutez à nouveau `ollama pull qwen3:27b`. Ollama vérifie si une version plus récente est disponible et télécharge uniquement les layers modifiés. Vous n\'avez pas besoin de recréer votre Modelfile — le tag (qwen3:27b) pointe toujours vers la dernière version 27B. Dans LM Studio, vérifiez les mises à jour dans la bibliothèque de modèles et téléchargez à nouveau si une version GGUF plus récente est disponible.' },
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: '2026年にQwen 3をローカルで実行する方法：Ollama + LM Studioセットアップガイド',
    seoTitle: '2026年Qwen 3ローカル実行：設定完全ガイド',
    intro: 'Qwen 3.6 27BはOllamaまたはLM Studioを使って、単一の消費者向けGPU（16 GB VRAM）上で動作します。セットアップは10分以内に完了します。このガイドでは、モデルの選択、ハードウェア要件、Ollama CLIのインストール、LM Studio GUIのセットアップ、重要なnum_ctxの修正、電力消費とTCO、PromptQuorumへの接続をマルチモデルディスパッチとともに解説します。',
    metaDescription: '2026年にQwen 3をローカルで実行する方法：OllamaとLM Studioのステップバイステップセットアップ、ハードウェア要件、num_ctx修正、TCOとPromptQuorum統合。2026年5月更新。',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10分で読めます',
    educationalLevel: 'Beginner',
    audience: '初めてローカルLLMを構築する開発者、GDPRに準拠したAIを求めるEUチーム',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'PromptQuorumウェイトリストに登録 →',
    leadAnswerBlock: '**16 GB VRAMまたはApple Silicon（32 GB以上の統合メモリ）を搭載したマシンで`ollama pull qwen3:27b`を実行してください。GUIアクセスにはLM Studioを使用します。どちらもQwen 3.6 27Bを完全オフラインで実行できます。重要：`num_ctx`を32768以上に設定してください — Ollamaのデフォルトは2048トークンで、ほとんどの実際のタスクを切り捨ててしまいます。**',
    nextStep: {
      text: 'Qwenがローカルで動いています。次は使いやすくする最良のUIを探しましょう。',
      label: 'おすすめローカルLLMフロントエンド2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ja: {
        question: '2026年にQwen 3をローカルで実行するには？',
        answer: 'Ollamaをインストールし、`ollama pull qwen3:27b`を実行してから`ollama run qwen3:27b`。GUIの場合：LM Studioをダウンロードし、「Qwen 3 27B」を検索、Q4_K_M GGUFファイルをダウンロード。重要：Ollamaのnum_ctxを32768に設定（デフォルトの2048は小さすぎる）。GDPRに準拠したチーム利用にはPromptQuorumのローカルOllamaディスパッチエンドポイント経由で接続。',
        bullets: [
          '最小ハードウェア：16 GB VRAM（RTX 4080）または32 GBユニファイドメモリのApple Silicon',
          'Ollamaインストール：brew install ollama（Mac）またはinstall.sh（Linux/Windows）',
          'モデル取得：ollama pull qwen3:27b（Qwen 3.6 27B Q4_K_M約17 GBをダウンロード）',
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
          '**PromptQuorum統合**：PromptQuorumのローカルディスパッチ設定で`OLLAMA_BASE_URL=http://localhost:11434/v1`と`LOCAL_LLM_MODEL=qwen3:27b`を設定します — Anthropic API設定とは別です。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026年にQwenをローカルで実行する理由',
        content: [
          '2026年にQwen 3をローカルで実行するということは、HumanEvalで92.1%を達成するモデルに対してトークンあたり0円を支払うことを意味します — コーディングタスクではClaude Sonnet 4.6と同等以上の性能です。ハードウェアが償却された後は、すべてのプロンプトが無料です。1日あたり1,000万トークンを生成する5人の開発チームにとって、ローカル推論はClaude Sonnet 4.6 APIと比較して月額約12万円の節約になります。',
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
        note: 'Q4_K_Mはほとんどのユーザーにとってはおすすめの量子化です — 品質とサイズの最良のバランスを提供します。Q8_0はより高いVRAMコストでより高い品質を提供します。必ず明示的なタグ（qwen3:27b、qwen3ではなく）を使用して27Bモデルをダウンロードしてください。',
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
          { title: '明示的なタグでQwen 3.6 27Bを取得する', whyItMatters: 'qwen3:27bを明示的に使用してください。タグなしの`qwen3`はデフォルトで8Bモデルをダウンロードします — このガイドで対象としている27Bモデルではありません。' },
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
ollama pull qwen3:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3:27b
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
LOCAL_LLM_MODEL=qwen3:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'ローカルディスパッチ設定でOLLAMA_BASE_URLをhttp://localhost:11434/v1に、LOCAL_LLM_MODELをqwen3:27bに設定することで、PromptQuorumをローカルQwenに接続できます。' },
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
          '**モデルのダウンロードが停止または失敗する**：大きなモデル（Qwen 3.6 27B 〜17 GB）は遅い接続でタイムアウトする場合があります。`ollama pull qwen3:27b`を再実行してください — Ollamaは中断した場所から再開します。または、[Hugging Face](https://huggingface.co/Qwen)から直接GGUFをダウンロードし、ModelfileのFROM句でローカルパスを使用して`ollama create`を実行してください。',
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
          'Claude Sonnet 4.6 APIを1日1,000万トークン使用する開発者1人との比較：1,000万トークン × $3/100万 × 250日 = **年間7,500ドル**（Anthropicへの支払いはUSD建て）。',
        ],
        rows: [
          { オプション: 'Claude Sonnet 4.6 API', ハードウェア: '—', '電気代/年（日本）': '—', 'API費用/年（1日1000万tok）': '$7,500', '回収期間': '—' },
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
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — 2026年比較](/local-llms/qwen-vs-claude-vs-deepseek-local-2026?lang=ja)',
          '[EU企業がローカルQwenに移行する理由](/blog/eu-companies-local-qwen-gdpr-shift?lang=ja)',
          '[Qwen Coder vs DeepSeek vs Mistral — コーディングベンチマーク2026](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026?lang=ja)',
          '[すべてのローカルLLMガイド](/local-llms?lang=ja)',
          '[PromptQuorumウェイトリストに登録](/waitlist?lang=ja)',
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
          { q: 'Qwenを最新バージョンに更新するには？', a: '`ollama pull qwen3:27b`を再実行してください。Ollamaは新しいバージョンが利用可能かどうかを確認し、変更されたレイヤーのみをダウンロードします。Modelfileを再作成する必要はありません — モデルタグ（qwen3:27b）は常に最新の27Bリリースを指します。LM Studioではモデルライブラリのアップデートを確認し、新しいGGUFバージョンが利用可能であれば再ダウンロードしてください。' },
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: '2026年如何在本地运行Qwen 3：Ollama + LM Studio完整设置指南',
    seoTitle: '本地运行Qwen 3：2026年完整配置指南',
    intro: 'Qwen 3.6 27B通过Ollama或LM Studio在单个消费级GPU（16 GB显存）上运行，零API成本。设置耗时不到10分钟。本指南涵盖模型选择、硬件要求、Ollama CLI安装、LM Studio GUI设置、关键的num_ctx修复、功耗与TCO分析，以及连接到PromptQuorum实现多模型调度。',
    metaDescription: 'Qwen 3.6 27B在Ollama和LM Studio的完整配置。硬件要求（16GB显存）、num_ctx关键修复、功耗分析、PromptQuorum集成步骤详解。',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '阅读约10分钟',
    educationalLevel: 'Beginner',
    audience: '首次搭建本地LLM的开发者，寻求GDPR合规AI方案的欧盟团队',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: '加入PromptQuorum候补名单 →',
    leadAnswerBlock: '**在任何配备16 GB显存或32 GB以上统一内存Apple Silicon的机器上运行`ollama pull qwen3:27b`。GUI访问推荐使用LM Studio。两者均可完全离线运行Qwen 3.6 27B。重要：将`num_ctx`设置为32768或更高——Ollama默认的2048 token会截断大多数实际任务。**',
    nextStep: {
      text: 'Qwen已在本地运行。现在探索最好的UI界面。',
      label: '2026年最佳本地LLM前端 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      zh: {
        question: '2026年如何在本地运行Qwen 3？',
        answer: '安装Ollama，运行`ollama pull qwen3:27b`，然后`ollama run qwen3:27b`。GUI方式：下载LM Studio，搜索"Qwen 3 27B"，下载Q4_K_M GGUF文件。关键：将Ollama中的num_ctx设置为32768（默认2048太小）。如需GDPR合规团队使用，通过PromptQuorum的本地Ollama调度端点连接。',
        bullets: [
          '最低硬件：16 GB显存（RTX 4080）或32 GB统一内存的Apple Silicon',
          'Ollama安装：brew install ollama（Mac）或install.sh（Linux/Windows）',
          '拉取模型：ollama pull qwen3:27b（下载Qwen 3.6 27B Q4_K_M约17 GB）',
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
          '**PromptQuorum集成**：在PromptQuorum本地调度设置中配置`OLLAMA_BASE_URL=http://localhost:11434/v1`和`LOCAL_LLM_MODEL=qwen3:27b`——与Anthropic API配置相互独立。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026年为何在本地运行Qwen',
        content: [
          '2026年在本地运行Qwen 3意味着：对一个HumanEval得分达92.1%的模型，每个token的成本为零——在代码任务上与Claude Sonnet 4.6相当甚至超越。硬件摊销后，每条请求完全免费。对于每天生成1000万个token的五人开发团队，本地推理相比Claude Sonnet 4.6 API定价每月节省约$900。',
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
        note: 'Q4_K_M是大多数用户的推荐量化方式——最佳的质量与体积比。Q8_0以更高的显存成本提供更高质量。始终使用显式标签（qwen3:27b，而非qwen3）以确保下载的是27B模型。',
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
          { title: '使用显式标签拉取Qwen 3.6 27B', whyItMatters: '明确使用qwen3:27b。不带标签的`qwen3`默认下载8B模型——不是本指南目标的27B模型。' },
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
ollama pull qwen3:27b
# Downloads Qwen 3.6 27B Q4_K_M (~17 GB)
# Note: 'ollama pull qwen3' without a tag downloads the 8B model

# Step 3 — Create Modelfile with correct num_ctx
cat > Modelfile <<'EOF'
FROM qwen3:27b
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
LOCAL_LLM_MODEL=qwen3:27b

# Example routing rules (PromptQuorum dispatch):
# - task_type: code       → model: qwen3:27b  (local Ollama, GDPR-safe)
# - task_type: analysis   → model: claude-sonnet-4-6 (Anthropic API, separate config)
# - task_type: private    → model: qwen3:27b  (local Ollama, no cloud egress)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '在本地调度设置中将OLLAMA_BASE_URL设为http://localhost:11434/v1、LOCAL_LLM_MODEL设为qwen3:27b，即可将PromptQuorum连接到本地Qwen。' },
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
          '**模型下载停滞或失败**：大型模型（Qwen 3.6 27B约17 GB）在慢速连接上可能超时。再次运行`ollama pull qwen3:27b`——Ollama从中断处继续。或者，直接从[Hugging Face](https://huggingface.co/Qwen)下载GGUF，并在Modelfile的FROM子句中使用本地路径运行`ollama create`。',
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
          '与单个开发者每天使用1000万token的Claude Sonnet 4.6 API相比：1000万token × $3/100万 × 250天 = **每年$7,500**。',
        ],
        rows: [
          { 选项: 'Claude Sonnet 4.6 API', 硬件: '—', '电费/年（欧洲）': '—', 'API成本/年（每日1000万tok）': '$7,500', '回本周期': '—' },
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
          '[Qwen 3 vs Claude Sonnet 4.6 vs DeepSeek R2 — 2026年全面对比](/local-llms/qwen-vs-claude-vs-deepseek-local-2026?lang=zh)',
          '[欧盟企业为何转向本地Qwen](/blog/eu-companies-local-qwen-gdpr-shift?lang=zh)',
          '[Qwen Coder vs DeepSeek vs Mistral — 代码基准测试2026](/local-llms/qwen-coder-vs-deepseek-mistral-local-2026?lang=zh)',
          '[所有本地LLM指南](/local-llms?lang=zh)',
          '[加入PromptQuorum候补名单](/waitlist?lang=zh)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '在本地运行Qwen 3的最低硬件要求是什么？', a: 'Q4_K_M量化的Qwen 3.6 27B：16 GB显存（RTX 4080或RTX 3090）。Apple Silicon：36 GB统一内存的M3 Pro或48 GB的M3 Max。较小的Qwen 3 14B：9 GB显存（RTX 3080或RTX 4070）。Qwen 3 7B可在5 GB显存（GTX 1080或更好）上运行。' },
          { q: '为什么Ollama会截断我的提示词？', a: 'Ollama默认使用num_ctx 2048 token（约1500个词）。这对大多数实际代码任务来说太小了。您必须在Modelfile中将num_ctx设置为至少32768。创建包含`PARAMETER num_ctx 32768`的Modelfile，然后运行`ollama create qwen3-32k -f Modelfile`以构建具有正确上下文窗口的模型实例。' },
          { q: '在本地运行Qwen是否符合GDPR？', a: '是的——本地推理是最符合GDPR的AI架构。当Qwen在您的硬件上运行时，没有数据传输给任何第三方。GDPR第44条关于国际数据传输的限制不适用，因为没有数据传输。您的内部数据处理协议适用，但AI层不需要SCC或充分性决定。' },
          { q: 'Qwen 3可以仅在CPU上运行吗？', a: '可以，通过llama.cpp或Ollama在没有GPU的系统上运行。CPU推理速度明显较慢——Qwen 3.6 27B在现代CPU上通常为1–5令牌/秒。生产使用需要GPU或Apple Silicon。对于没有专用GPU的笔记本电脑上的偶尔使用或测试，CPU推理有效但对实时对话不实用。' },
          { q: '如何将Qwen更新到最新版本？', a: '再次运行`ollama pull qwen3:27b`。Ollama检查是否有更新版本并仅下载更改的层。您不需要重新创建Modelfile——模型标签（qwen3:27b）始终指向最新的27B版本。在LM Studio中，检查模型库中的更新，如果有更新的GGUF版本可用则重新下载。' },
        ],
      },
    },
  },
};
