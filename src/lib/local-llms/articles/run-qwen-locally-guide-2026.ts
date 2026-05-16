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
    intro: 'Qwen 3.6 27B runs on a single consumer GPU (16 GB VRAM) via Ollama or LM Studio. Setup takes under 10 minutes. This guide covers model selection, hardware requirements, Ollama CLI installation, LM Studio GUI setup, the critical num_ctx fix, power consumption and TCO, and how to connect local Qwen to PromptQuorum for multi-model dispatch.',
    metaDescription: 'How to run Qwen 3 locally in 2026: step-by-step Ollama and LM Studio setup, hardware requirements, num_ctx fix, power consumption TCO, and PromptQuorum integration. Updated May 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10 min read',
    educationalLevel: 'Beginner',
    audience: 'Developers setting up a local LLM for the first time, EU teams seeking GDPR-compliant AI',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Join the PromptQuorum Waitlist →',
    leadAnswerBlock: '**Run `ollama pull qwen3:27b` on any machine with 16 GB VRAM or Apple Silicon with 32+ GB unified memory. For GUI access, use LM Studio. Both run Qwen 3.6 27B fully offline. Critical: set `num_ctx` to 32768 or higher — Ollama\'s default of 2048 tokens truncates most real-world tasks.**',
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
        ],
      },
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-16',
    theme: 'Getting Started',
    title: 'Qwen 3 lokal ausführen 2026: Vollständige Anleitung mit Ollama und LM Studio',
    seoTitle: 'Qwen 3 lokal ausführen 2026: Ollama & LM Studio Anleitung',
    intro: 'Qwen 3.6 27B läuft auf einer einzelnen Consumer-GPU (16 GB VRAM) über Ollama oder LM Studio. Die Einrichtung dauert weniger als 10 Minuten. Dieser Leitfaden deckt Modellauswahl, Hardware-Anforderungen, Ollama-CLI-Installation, LM Studio GUI-Setup, die entscheidende num_ctx-Korrektur, Stromverbrauch und TCO sowie die Verbindung mit PromptQuorum für Multi-Modell-Dispatch ab.',
    metaDescription: 'Qwen 3.6 27B lokal ausführen: Ollama- und LM Studio-Setup, Hardware-Anforderungen, num_ctx-Fix und PromptQuorum-Integration. Aktualisiert Mai 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Entwickler, die erstmals ein lokales LLM einrichten; EU-Teams auf der Suche nach DSGVO-konformer KI',
    primaryTerm: 'run Qwen 3 locally 2026',
    ctaText: 'Zur PromptQuorum-Warteliste anmelden →',
    leadAnswerBlock: '**Führen Sie `ollama pull qwen3:27b` auf jedem Rechner mit 16 GB VRAM oder Apple Silicon mit 32+ GB Unified Memory aus. Für den GUI-Zugriff verwenden Sie LM Studio. Beide führen Qwen 3.6 27B vollständig offline aus. Wichtig: Setzen Sie `num_ctx` auf 32768 oder höher — Ollamas Standard von 2048 Token kürzt die meisten realen Aufgaben ab.**',
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
    seoTitle: 'Exécuter Qwen 3 Localement en 2026 : Guide Complet Ollama & LM Studio',
    intro: 'Qwen 3.6 27B fonctionne sur un seul GPU grand public (16 Go VRAM) via Ollama ou LM Studio. La configuration prend moins de 10 minutes. Ce guide couvre la sélection du modèle, les exigences matérielles, l\'installation CLI Ollama, la configuration GUI LM Studio, la correction critique de num_ctx et la connexion à PromptQuorum.',
    metaDescription: 'Comment exécuter Qwen 3 localement en 2026 : Ollama et LM Studio étape par étape, matériel requis, correction num_ctx, intégration PromptQuorum. Mis à jour mai 2026.',
    publishDate: '2026-05-16',
    dateModified: '2026-05-16',
    readTime: '10 min de lecture',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          'Deux approches : Ollama (CLI, headless, prêt pour API) ou LM Studio (GUI, sans CLI). Les deux exécutent Qwen 3.6 27B localement.',
          'Correction critique : Ollama utilise num_ctx 2048 par défaut. Définissez num_ctx 32768 dans votre Modelfile.',
          'Matériel : 16 Go VRAM minimum (RTX 4080). Apple Silicon M4 Pro (48 Go) ou M5 Max (128 Go) sont les options d\'inférence hébergées en UE recommandées.',
          'RGPD : une fois exécuté localement, aucune donnée ne quitte votre machine.',
          'Intégration PromptQuorum : définissez OLLAMA_BASE_URL=http://localhost:11434/v1 et LOCAL_LLM_MODEL=qwen3:27b dans les paramètres de dispatch local de PromptQuorum.',
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
    readTime: '10分で読めます',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '2つの方法：Ollama（CLI、ヘッドレス、API対応）またはLM Studio（GUI、CLI不要）。どちらもQwen 3.6 27Bをローカルで実行できます。',
          '重要な修正：Ollamaのデフォルトnum_ctxは2048です。Modelfileにてnum_ctx 32768を設定してください。',
          'ハードウェア：最低16 GB VRAM（RTX 4080）。Apple Silicon M4 Pro（48 GB）またはM5 Max（128 GB）が推奨のEUホスト推論オプションです。',
          'GDPR：ローカルで実行すると、データがあなたのマシンから外に出ることはありません。',
          'PromptQuorum統合：PromptQuorumのローカルディスパッチ設定でOLLAMA_BASE_URL=http://localhost:11434/v1とLOCAL_LLM_MODEL=qwen3:27bを設定します。',
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
    readTime: '10分钟阅读',
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '两种方式：Ollama（CLI，无头，API就绪）或LM Studio（GUI，无需CLI）。两者都可在本地运行Qwen 3.6 27B。',
          '关键修复：Ollama默认num_ctx为2048。在Modelfile中设置num_ctx 32768。',
          '硬件：最低16 GB显存（RTX 4080）。带48 GB统一内存的Apple Silicon M4 Pro或M5 Max（128 GB）是推荐的欧盟托管推理选项。',
          'GDPR：本地运行后，没有数据会离开您的机器。',
          'PromptQuorum集成：在PromptQuorum的本地调度设置中设置OLLAMA_BASE_URL=http://localhost:11434/v1和LOCAL_LLM_MODEL=qwen3:27b。',
        ],
      },
    },
  },
};
