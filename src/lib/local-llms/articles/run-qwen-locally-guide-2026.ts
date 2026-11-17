// Slug: run-qwen-locally-guide-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'How to Run Qwen 3.6 and Qwen 3.8 Locally in 2026: Ollama and LM Studio Setup Guide',
    seoTitle: 'Run Qwen 3.6 & 3.8 Locally 2026: Ollama + LM Studio',
    intro: 'Qwen3.8-27B and Qwen3.6-27B are dense 27B models that run locally through Ollama or LM Studio. The Ollama download is about 18 GB, so a 24 GB GPU or a Mac with 32 GB or more of unified memory is the practical starting point; 16 GB GPUs should use a smaller Qwen3.5 size. This guide covers model choice, real download sizes, the context-length setting, Ollama and LM Studio setup, Claude Code, troubleshooting and running costs.',
    metaDescription: 'Run Qwen 3.6 or 3.8 27B locally: real Ollama and LM Studio download sizes, 24 GB GPU or 32 GB Mac memory, the context-length fix and Claude Code setup.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-en.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10 min read',
    educationalLevel: 'Beginner',
    audience: 'Developers setting up a local LLM for the first time, EU teams seeking GDPR-compliant AI',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**Yes, you can run Qwen 3.6 and Qwen 3.8 locally: install Ollama and run `ollama run qwen3.8:27b` (about 18 GB download) on a 24 GB GPU or a Mac with 32 GB or more of unified memory. Use `qwen3.6:27b` for the previous generation, or `qwen3.5:9b` (about 7 GB) on a 16 GB GPU. Ollama sets the default context length by VRAM (4k tokens below 24 GiB), so raise it to 32768 or more.**',
    nextStep: {
      text: 'Qwen is running locally. Now explore the best UIs that make it usable.',
      label: 'Best Local LLM Frontends 2026 →',
      href: '/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      en: {
        question: 'How do I run Qwen 3.6 or 3.8 locally?',
        answer: 'Install Ollama, run `ollama pull qwen3.8:27b` (about 18 GB), then `ollama run qwen3.8:27b`. For the previous generation use `qwen3.6:27b`. For a GUI, install LM Studio and download Qwen3.8-27B (16.10 GB in the LM Studio catalog). Raise the context length to 32768 or more, because the Ollama default is only 4k tokens on GPUs below 24 GiB of VRAM.',
        bullets: [
          'Hardware: 24 GB GPU, or Apple Silicon with 32 GB or more of unified memory, for the 27B models',
          'On a 16 GB GPU: run qwen3.5:9b (6.6-7.6 GB download) instead, because the 27B download is 17-19 GB',
          'Pull: ollama pull qwen3.8:27b (about 18 GB) or qwen3.6:27b (about 17-19 GB)',
          'Context: Ollama defaults to 4k tokens below 24 GiB VRAM; set 32768 or more',
          'LM Studio alternative: GUI, no CLI needed, local server on localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Run Qwen Locally in 2026', anchor: '#why-local' },
      { label: 'Which Qwen Model to Run', anchor: '#choose-model' },
      { label: 'Can You Run Qwen 3.6 Locally? Hardware', anchor: '#hardware' },
      { label: 'Setup with Ollama', anchor: '#ollama-setup' },
      { label: 'Setup with LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Use Local Qwen with Claude Code', anchor: '#claude-code' },
      { label: 'Connecting to PromptQuorum', anchor: '#promptquorum' },
      { label: 'Troubleshooting', anchor: '#troubleshooting' },
      { label: 'Power Consumption and Running Costs', anchor: '#power-tco' },
      { label: 'Related Reading', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Two paths**: Ollama (CLI, headless, API-ready) or LM Studio (GUI, no CLI). Both run Qwen3.8-27B and Qwen3.6-27B locally.',
          '**Model choice**: Qwen3.8-27B is the newest 27B release on Hugging Face (Apache 2.0 per its model card); Qwen3.6-27B is the previous generation; Qwen3.5 has small sizes (0.8B to 9B) for weaker hardware.',
          '**Hardware**: the 27B downloads are 17-19 GB, so a 24 GB GPU or a Mac with 32 GB or more of unified memory is the practical floor. A 16 GB GPU cannot hold the whole 27B model; use `qwen3.5:9b` there.',
          '**Context fix**: the Ollama default context depends on VRAM (4k tokens below 24 GiB). Set `num_ctx` or `OLLAMA_CONTEXT_LENGTH` to 32768 or more, and 64k or more for coding agents.',
          '**Privacy**: local inference keeps prompts on your machine. That removes the third-party transfer for the inference step, but it does not by itself make your wider processing GDPR compliant.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Why Run Qwen Locally in 2026',
        content: [
          'Running Qwen locally means no per-token fee after you own the hardware, no prompt leaving your machine, and a model that keeps working offline. The Qwen team publishes the 27B models with Apache 2.0 licences on Hugging Face ([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)), so commercial use is permitted under that licence; always re-read the licence on the model card for the exact variant you download.',
          'Privacy is the second driver. When Qwen runs on your own hardware, your prompts, code and customer data are not sent to a model provider, so the inference step involves no cross-border transfer under [GDPR Chapter V](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679). Your other processing duties (legal basis, security, retention, vendor contracts for the rest of your stack) still apply. This is general information, not legal advice. Downloading models and checking for updates still use the network; only inference runs locally.',
          'The third reason is availability and control: you pin the exact model tag, choose the context length, and decide when to update. Speed depends on your GPU or Mac, the quantization and the context length, so measure it on your own machine rather than relying on a published figure.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Running Qwen3.8-27B or Qwen3.6-27B locally costs no per-token fee after hardware, keeps prompts on your own machine, and needs about 18 GB of memory for the model alone.' },
          { type: 'plain-terms', text: 'Local LLM means the AI model runs on your own computer. You download the model file (about 17-19 GB for a 27B Qwen model), and every prompt you type is processed on your machine instead of being sent to a provider.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Which Qwen Model to Run Locally: 3.8, 3.6 or 3.5',
        content: [
          'Pick the newest generation your memory allows. Qwen3.8-27B (released August 2026) and Qwen3.6-27B (April 2026) are dense models with a vision encoder and a native 262,144-token context; Qwen3.5 (February 2026) offers the small sizes. The model cards report higher scores for Qwen3.8-27B than for Qwen3.6-27B on the benchmarks they share: SWE-bench Pro 61.7 vs 53.5, LiveCodeBench v6 90.3 vs 83.9, GPQA Diamond 89.2 vs 87.8 (vendor-reported on the [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) and [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) model cards, run with the Qwen team\'s own harnesses, so treat them as indicative only).',
          'The table lists Ollama download sizes from the [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.6](https://ollama.com/library/qwen3.6) and [Qwen3.5](https://ollama.com/library/qwen3.5) library pages. The memory guide is a PromptQuorum estimate: download size plus 2-6 GB for the context cache and runtime, not a measurement.',
        ],
        rows: [
          { Model: 'Qwen3.8 27B', 'Ollama tag': 'qwen3.8:27b', Download: '18 GB', 'Memory guide (estimate)': '24 GB GPU / Mac 32 GB+' },
          { Model: 'Qwen3.8 27B Q8_0', 'Ollama tag': 'qwen3.8:27b-q8_0', Download: '30 GB', 'Memory guide (estimate)': '40 GB+ GPU / Mac 48 GB+' },
          { Model: 'Qwen3.6 27B', 'Ollama tag': 'qwen3.6:27b', Download: '18-19 GB', 'Memory guide (estimate)': '24 GB GPU / Mac 32 GB+' },
          { Model: 'Qwen3.6 35B-A3B (MoE)', 'Ollama tag': 'qwen3.6:35b-a3b', Download: '23 GB', 'Memory guide (estimate)': '32 GB GPU / Mac 48 GB+' },
          { Model: 'Qwen3.5 9B', 'Ollama tag': 'qwen3.5:9b', Download: '6.6-7.6 GB', 'Memory guide (estimate)': '12-16 GB GPU' },
          { Model: 'Qwen3.5 4B', 'Ollama tag': 'qwen3.5:4b', Download: '3.3-4.0 GB', 'Memory guide (estimate)': '8 GB GPU / 16 GB RAM' },
        ],
        columns: ['Model', 'Ollama tag', 'Download', 'Memory guide (estimate)'],
        tableFormat: true,
        note: 'Always use the explicit tag with the size, for example qwen3.8:27b, because a bare name such as qwen3.5 points to the 9B build. The Qwen3.8 family also includes larger models (Qwen3.8-Flash-Next, 125B total and 6B active parameters, under the qwen-community-1.0 licence, and Qwen3.8-2.4T-A95B under the qwen3.8-max licence). Those licences differ from Apache 2.0, so read the model card before commercial use.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-en.webp',
        imageAlt: 'Qwen local model sizes: 27B needs about 18 GB, 9B about 7 GB',
        imageCaption: 'Qwen model sizes for local use, with the Ollama download size of each build.',
      },
      hardware: {
        id: 'hardware',
        title: 'Can You Run Qwen 3.6 Locally? Hardware Requirements',
        content: [
          'Yes. The limiting factor is memory: the 27B model files are 17-19 GB, and the context cache and runtime come on top. A GPU with 16 GB of VRAM therefore cannot hold a 27B Q4_K_M model completely; Ollama would split layers between GPU and CPU, which is slower. Choose Qwen3.5 9B on 16 GB cards.',
        ],
        items: [
          '**24 GB GPU (RTX 3090, RTX 4090)**: holds the 27B Q4_K_M download (17-19 GB) with a few GB left for context',
          '**32 GB GPU (RTX 5090)**: more room for long context or for the 23 GB Qwen3.6 35B-A3B build',
          '**16 GB GPU (RTX 4080, RTX 4070 Ti Super)**: use `qwen3.5:9b` (6.6-7.6 GB); a 27B model only runs with partial CPU offload and is much slower',
          '**Apple Silicon, 32 GB unified memory**: the practical minimum for a 27B model; Ollama offers MLX builds such as `qwen3.8:27b-mlx` (18 GB)',
          '**Apple Silicon, 64 GB or more**: comfortable headroom for the 27B models, longer context and other apps open at the same time',
          '**Current Macs**: the Mac mini with M6 offers up to 32 GB, the Mac mini with M5 Pro up to 64 GB (per [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/)), the Mac Studio with M5 Max up to 128 GB and with M5 Ultra up to 512 GB (the 512 GB option ships from late October 2026), per [Apple\'s Mac Studio announcement](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) and [Apple\'s M6 announcement](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/). PromptQuorum has not benchmarked these chips.',
          '**System RAM**: 32 GB minimum alongside GPU inference; 64 GB if you also run a full development environment',
          '**Storage**: at least 25 GB free for one 27B model (the file is 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon shares unified memory between CPU and GPU, and macOS reserves part of it. A 32 GB Mac can hold an 18 GB model, but a 64 GB Mac leaves far more room for context and other applications.' },
          { type: 'tip', text: 'Check what is actually in memory with `ollama ps`: the PROCESSOR column shows whether the model runs 100% on GPU, and the CONTEXT column shows the allocated context length.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup with Ollama',
        content: [
          'Ollama is the fastest way to run Qwen locally. It manages model downloads, provides an OpenAI-compatible API at localhost:11434, and handles GGUF files for you. Install it from [ollama.com](https://ollama.com/download). The steps below use `qwen3.8:27b`; replace the tag with `qwen3.6:27b` or `qwen3.5:9b` to use another size.',
        ],
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: 'Ollama handles model downloads and provides an OpenAI-compatible local API.' },
          { title: 'Pull the Qwen3.8 27B model with an explicit tag', whyItMatters: 'Use qwen3.8:27b explicitly. The download is about 18 GB; on a 16 GB GPU pull qwen3.5:9b instead.' },
          { title: 'Create a Modelfile with a larger context length', whyItMatters: 'The Ollama default context is 4k tokens on GPUs below 24 GiB of VRAM and 32k on 24-48 GiB. Setting num_ctx makes the length explicit on every machine.' },
          { title: 'Build the custom model and check it with ollama ps', whyItMatters: 'The CONTEXT and PROCESSOR columns confirm that the context length took effect and that the model runs on GPU.' },
          { title: 'Test the API endpoint', whyItMatters: 'Ollama exposes an OpenAI-compatible API at localhost:11434/v1. Use this endpoint to connect LLM clients, IDEs and PromptQuorum.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Do not skip the context setting. Below 24 GiB of VRAM the Ollama default is 4k tokens, roughly 3,000 words including the reply, and a long file or conversation is cut off. Ollama recommends at least 64,000 tokens for agents and coding tools; larger contexts need more memory.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-en.webp',
        imageAlt: 'Five Ollama setup steps for running Qwen locally',
        imageCaption: 'Five-step Ollama setup for Qwen: install, pull, set the context length, build and check, test the API.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Setup with LM Studio',
        content: [
          'LM Studio provides a GUI for running local LLMs without any CLI commands. It is the easier path for non-technical users and for Windows setups. Download it from [lmstudio.ai](https://lmstudio.ai); it is available for macOS, Windows and Linux.',
        ],
        numberedItems: [
          { title: 'Download and install LM Studio', whyItMatters: 'Free, cross-platform GUI for local LLM inference. No CLI required.' },
          { title: 'Search for and download Qwen3.8 27B', whyItMatters: 'The LM Studio catalog lists [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) at 16.10 GB in GGUF and MLX formats. Pick the build that matches your platform.' },
          { title: 'Set the context length before loading', whyItMatters: 'Raise Context Length in the model load settings to 32768 or more. A longer context needs more memory, so reduce it if loading fails.' },
          { title: 'Start the local server', whyItMatters: 'The LM Studio server provides an OpenAI-compatible API, with examples in its documentation using localhost:1234. Use this URL in clients and PromptQuorum.' },
          { title: 'Check that the server answers', whyItMatters: 'A request to the models endpoint lists the loaded model and confirms the port.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'If the model fails to load, lower the context length or the number of GPU layers, or switch to a smaller Qwen3.5 size. A model that does not fit in VRAM spills into system RAM and becomes much slower.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'Use Local Qwen with Claude Code',
        content: [
          'Ollama and LM Studio both expose an Anthropic-compatible endpoint, so Claude Code can talk to a local Qwen model without a separate proxy. Behaviour with a non-Claude model depends on the model, especially on tool calling, so test it on a small task first.',
          'With Ollama, run `ollama launch claude`, or set the variables yourself: `ANTHROPIC_AUTH_TOKEN=ollama`, `ANTHROPIC_API_KEY=""` and `ANTHROPIC_BASE_URL=http://localhost:11434`, then start `claude --model <your-model>`. The [Ollama Claude Code guide](https://docs.ollama.com/integrations/claude-code) recommends a context window of 64k tokens or more for local models.',
          'With LM Studio, the server accepts `/v1/messages`: set `ANTHROPIC_BASE_URL=http://localhost:1234` and `ANTHROPIC_AUTH_TOKEN=lmstudio`, then start `claude --model <model-id>`. See [LM Studio\'s Anthropic-compatibility page](https://lmstudio.ai/docs/developer/anthropic-compat) for the current details.',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Claude Code settings can override shell variables. If the connection fails, run /status inside Claude Code to see which endpoint it uses.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connecting to PromptQuorum',
        content: [
          'PromptQuorum dispatches one prompt to several models. To add your local Qwen instance as a target, point the local model endpoint in PromptQuorum at the OpenAI-compatible Ollama URL and enter the model tag you built. Check the app settings for the current field names.',
          'Use `http://localhost:11434/v1` for Ollama or `http://localhost:1234/v1` for LM Studio. If a form requires an API key, enter any non-empty string, because neither server requires key authentication by default. Cloud providers keep their own, separate configuration.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect PromptQuorum to local Qwen by entering http://localhost:11434/v1 as the endpoint and the model tag you built, for example qwen3.8-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting',
        items: [
          '**Model response is cut off or ignores the start of a long prompt**: the context length is too low. Rebuild the Modelfile with a larger `PARAMETER num_ctx`, recreate the model with `ollama create`, and confirm the value with `ollama ps`.',
          '**CUDA out of memory error or very slow generation**: the model plus context does not fit in VRAM. Switch to a smaller size (`qwen3.5:9b`), lower the context length, or pick a smaller quantization tag.',
          '**Ollama API returns 404**: the model name does not match. Run `ollama list` and use the exact name shown (for example `qwen3.8-32k`).',
          '**Slow generation**: run `ollama ps`. If PROCESSOR shows a CPU/GPU split instead of 100% GPU, the model does not fit in VRAM; reduce context or model size, and close other GPU-heavy applications.',
          '**LM Studio shows "failed to load model"**: not enough memory. Reduce the context length, lower GPU offload, or choose a smaller model.',
          '**PromptQuorum returns an authentication error**: if the form requires a key, enter any non-empty string. Ollama does not require API key authentication by default.',
          '**Ollama uses the CPU instead of the GPU**: on NVIDIA, confirm the driver is installed (`nvidia-smi` should list the GPU). On a Mac, Ollama uses Metal automatically; reinstall Ollama from ollama.com if it does not.',
          '**Model download stalls or fails**: run `ollama pull qwen3.8:27b` again; Ollama resumes where it stopped. As an alternative, download a GGUF from [Hugging Face](https://huggingface.co/Qwen) and reference its local path in the Modelfile FROM line.',
        ],
        callouts: [
          { type: 'tip', text: 'Run `ollama ps` to see which models are loaded, how much memory they use and the allocated context. Use `ollama stop <model>` to unload one before loading another.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Power Consumption and Running Costs',
        content: [
          'Hardware is the one-time cost; electricity and, for the comparison, API fees are the running costs. The figures below are assumptions for a worked example, not measurements: PromptQuorum has not metered these systems, and wattage varies with model, context and GPU.',
          'Example for a GPU workstation: an assumed 450 W draw, 8 hours per day, 250 working days and an assumed electricity price of 0.35 EUR/kWh gives 0.45 kW x 8 h x 250 days x 0.35 EUR = **315 EUR per year**. A Mac with an assumed 50 W draw under the same schedule gives 0.05 kW x 8 h x 250 days x 0.35 EUR = **35 EUR per year**.',
          'API comparison: Anthropic lists Claude Sonnet 5 at $2 per million input tokens and $10 per million output tokens on its [pricing page](https://platform.claude.com/docs/en/about-claude/pricing). A workload of 10 million tokens per day over 250 days is 2,500 million tokens per year, which is $5,000 if all tokens are input and $25,000 if all are output. Real workloads mix both, so your bill falls between those bounds. Prices change; check the page before you decide.',
          'Break-even in months = hardware price / (monthly API cost - monthly electricity). Use current retail prices in your market for the hardware price, and your own token volume for the API cost.',
        ],
        rows: [
          { Option: 'GPU workstation', 'Assumed power': '450 W', 'Electricity/year': '315 EUR', 'API cost/year': '$0 (local)' },
          { Option: 'Mac (Apple Silicon)', 'Assumed power': '50 W', 'Electricity/year': '35 EUR', 'API cost/year': '$0 (local)' },
          { Option: 'Claude Sonnet 5 API', 'Assumed power': 'n/a', 'Electricity/year': 'n/a', 'API cost/year': '$5,000-25,000' },
        ],
        columns: ['Option', 'Assumed power', 'Electricity/year', 'API cost/year'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'These are illustrative estimates for 10 million tokens per day. Local models and hosted models differ in quality and capability, so compare cost together with the results you need, not on price alone.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Qwen Local Deployment Guide: hardware tiers for Qwen models](/local-llms/qwen-local-deployment-guide-2026)',
          '[Run Qwen-VL Locally for image input](/local-llms/run-qwen-vl-locally-2026)',
          '[Qwen vs Llama vs Mistral for local use](/local-llms/qwen-vs-llama-vs-mistral)',
          '[Best Local LLMs for Coding](/local-llms/best-local-llms-for-coding)',
          '[How Much VRAM Do You Need for a Local LLM?](/local-llms/how-much-vram-local-llm)',
          '[Why EU Companies Are Switching to Local Qwen](/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Browse All Local LLM Guides](/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What is the minimum hardware to run Qwen 3.6 or 3.8 locally?', a: 'For the 27B models, plan on a 24 GB GPU or an Apple Silicon Mac with 32 GB or more of unified memory, because the Ollama downloads are 17-19 GB and the context cache comes on top. For smaller hardware use Qwen3.5: the 9B build downloads 6.6-7.6 GB and the 4B build 3.3-4.0 GB. The memory guide is an estimate, not a measurement.' },
          { q: 'Can I run Qwen 3.6 27B on 16 GB of VRAM?', a: 'Not completely. The qwen3.6:27b download is 18-19 GB (the q4_K_M tag is 17 GB), which is larger than 16 GB before the context cache is counted. Ollama can split layers between GPU and CPU, but generation becomes much slower. On a 16 GB GPU, run qwen3.5:9b (6.6-7.6 GB) instead.' },
          { q: 'Why does Ollama truncate my prompts?', a: 'The Ollama default context length depends on VRAM: 4k tokens below 24 GiB, 32k from 24 to 48 GiB and 256k from 48 GiB. Anything beyond the allocated context is cut off. Set `PARAMETER num_ctx 32768` in a Modelfile or start the server with `OLLAMA_CONTEXT_LENGTH`, then confirm the value with `ollama ps`. Ollama recommends at least 64,000 tokens for agents and coding tools.' },
          { q: 'Which Qwen model should I run: 3.8, 3.6 or 3.5?', a: 'Choose Qwen3.8-27B if you have about 24 GB of GPU memory or a Mac with 32 GB or more; its model card reports higher scores than Qwen3.6-27B on shared benchmarks (vendor-reported). Choose Qwen3.6-27B or its 35B-A3B mixture-of-experts build if you want the previous generation. Choose Qwen3.5 (0.8B to 9B) for weaker hardware.' },
          { q: 'Is running Qwen locally GDPR compliant?', a: 'Local inference keeps prompts on your own machine, so the inference step involves no transfer to a third-party model provider. That does not make your whole processing compliant by itself: legal basis, security, retention and contracts for the rest of your stack still apply. This is general information, not legal advice; ask your data protection officer.' },
          { q: 'Can Qwen run on CPU only?', a: 'Yes, through llama.cpp or Ollama on a system without a GPU, but it is much slower than GPU inference, and speed depends on your CPU and memory bandwidth. Use a small size such as Qwen3.5 4B or 9B for CPU-only use, and expect a 27B model to be impractical for real-time conversation.' },
          { q: 'How do I update Qwen to a newer version?', a: 'Run `ollama pull qwen3.8:27b` again. Ollama downloads only changed layers if the tag has been updated. A tag always points to the build published for it, so a newer generation (for example a future Qwen release) needs a new tag. In LM Studio, check the model catalog for a newer build.' },
          { q: 'Can I use Claude Code with local Qwen?', a: 'Yes. Ollama and LM Studio both expose an Anthropic-compatible endpoint. With Ollama, run `ollama launch claude` or set ANTHROPIC_BASE_URL to http://localhost:11434; with LM Studio, set it to http://localhost:1234. No Anthropic API key is needed for the local connection. Use a context of 64k tokens or more, and test tool calling on a small task first.' },
          { q: 'Is Qwen free for commercial use?', a: 'The Qwen3.8-27B, Qwen3.6-27B and Qwen3.5-9B model cards list the Apache 2.0 licence, which permits commercial use under its terms. Other Qwen3.8 models use different licences (Qwen3.8-Flash-Next: qwen-community-1.0, Qwen3.8-2.4T-A95B: qwen3.8-max), so read the licence on the card of the exact model you download.' },
          { q: 'Should I use Ollama or LM Studio?', a: 'Use Ollama for a headless server, scripts, IDE plugins and PromptQuorum. Use LM Studio for a visual model browser and chat window. Both can serve an OpenAI-compatible API, and both can serve Claude Code through an Anthropic-compatible endpoint, so you can run either and switch later.' },
        ],
      },
    },
  },
  es: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Cómo instalar Qwen 3.6 y Qwen 3.8 en local en 2026: guía de Ollama y LM Studio',
    seoTitle: 'Instalar Qwen 3.6 y 3.8 en local 2026: Ollama y LM Studio',
    intro: 'Qwen3.8-27B y Qwen3.6-27B son modelos densos de 27B que se ejecutan en local con Ollama o LM Studio. La descarga en Ollama pesa unos 18 GB, así que el punto de partida práctico es una GPU de 24 GB o un Mac con 32 GB o más de memoria unificada; las GPU de 16 GB deben usar un tamaño más pequeño de Qwen3.5. Esta guía cubre la elección del modelo, los tamaños de descarga reales, el ajuste de la longitud de contexto, la instalación con Ollama y LM Studio, Claude Code, la solución de problemas y los costes de funcionamiento.',
    metaDescription: 'Instala Qwen 3.6 o 3.8 de 27B en local: tamaños reales de descarga en Ollama y LM Studio, GPU de 24 GB o Mac de 32 GB, ajuste del contexto y Claude Code.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-es.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10 min de lectura',
    educationalLevel: 'Beginner',
    audience: 'Desarrolladores que configuran un LLM local por primera vez, equipos de la UE que buscan una IA conforme al RGPD',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**Sí, puedes instalar Qwen 3.6 y Qwen 3.8 en local: instala Ollama y ejecuta `ollama run qwen3.8:27b` (descarga de unos 18 GB) en una GPU de 24 GB o en un Mac con 32 GB o más de memoria unificada. Usa `qwen3.6:27b` para la generación anterior, o `qwen3.5:9b` (unos 7 GB) en una GPU de 16 GB. Ollama fija la longitud de contexto por defecto según la VRAM (4k tokens por debajo de 24 GiB), así que súbela a 32768 o más.**',
    nextStep: {
      text: 'Qwen ya funciona en local. Ahora explora las mejores interfaces para sacarle partido.',
      label: 'Mejores interfaces para LLM locales 2026 →',
      href: '/es/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      es: {
        question: '¿Cómo instalo Qwen 3.6 o 3.8 en local?',
        answer: 'Instala Ollama, ejecuta `ollama pull qwen3.8:27b` (unos 18 GB) y después `ollama run qwen3.8:27b`. Para la generación anterior usa `qwen3.6:27b`. Si prefieres una interfaz gráfica, instala LM Studio y descarga Qwen3.8-27B (16.10 GB en el catálogo de LM Studio). Sube la longitud de contexto a 32768 o más, porque el valor por defecto de Ollama es de solo 4k tokens en GPU con menos de 24 GiB de VRAM.',
        bullets: [
          'Hardware: GPU de 24 GB, o Apple Silicon con 32 GB o más de memoria unificada, para los modelos de 27B',
          'En una GPU de 16 GB: ejecuta qwen3.5:9b (descarga de 6.6-7.6 GB), porque la descarga de 27B es de 17-19 GB',
          'Descarga: ollama pull qwen3.8:27b (unos 18 GB) o qwen3.6:27b (unos 17-19 GB)',
          'Contexto: Ollama usa 4k tokens por defecto por debajo de 24 GiB de VRAM; configura 32768 o más',
          'Alternativa con LM Studio: interfaz gráfica, sin CLI, servidor local en localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Por qué ejecutar Qwen en local en 2026', anchor: '#why-local' },
      { label: 'Qué modelo de Qwen ejecutar', anchor: '#choose-model' },
      { label: '¿Se puede ejecutar Qwen 3.6 en local? Hardware', anchor: '#hardware' },
      { label: 'Instalación con Ollama', anchor: '#ollama-setup' },
      { label: 'Instalación con LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Usar Qwen local con Claude Code', anchor: '#claude-code' },
      { label: 'Conexión con PromptQuorum', anchor: '#promptquorum' },
      { label: 'Solución de problemas', anchor: '#troubleshooting' },
      { label: 'Consumo eléctrico y costes de funcionamiento', anchor: '#power-tco' },
      { label: 'Lecturas relacionadas', anchor: '#related-reading' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Dos caminos**: Ollama (CLI, sin interfaz, listo para API) o LM Studio (interfaz gráfica, sin CLI). Ambos ejecutan Qwen3.8-27B y Qwen3.6-27B en local.',
          '**Elección del modelo**: Qwen3.8-27B es la versión de 27B más reciente en Hugging Face (Apache 2.0 según su ficha de modelo); Qwen3.6-27B es la generación anterior; Qwen3.5 ofrece tamaños pequeños (de 0.8B a 9B) para hardware más modesto.',
          '**Hardware**: las descargas de 27B pesan 17-19 GB, así que una GPU de 24 GB o un Mac con 32 GB o más de memoria unificada es el mínimo práctico. Una GPU de 16 GB no puede alojar el modelo de 27B completo; usa `qwen3.5:9b` en ese caso.',
          '**Ajuste del contexto**: el contexto por defecto de Ollama depende de la VRAM (4k tokens por debajo de 24 GiB). Configura `num_ctx` o `OLLAMA_CONTEXT_LENGTH` en 32768 o más, y en 64k o más para agentes de programación.',
          '**Privacidad**: la inferencia local mantiene tus prompts en tu equipo. Eso elimina la transferencia a terceros en el paso de inferencia, pero por sí solo no hace que todo tu tratamiento de datos cumpla el RGPD.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por qué ejecutar Qwen en local en 2026',
        content: [
          'Ejecutar Qwen en local significa no pagar por token una vez que tienes el hardware, que ningún prompt salga de tu equipo y que el modelo siga funcionando sin conexión. El equipo de Qwen publica los modelos de 27B con licencia Apache 2.0 en Hugging Face ([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)), por lo que el uso comercial está permitido bajo esa licencia; vuelve a leer siempre la licencia en la ficha del modelo de la variante exacta que descargues.',
          'La privacidad es el segundo motivo. Cuando Qwen se ejecuta en tu propio hardware, tus prompts, tu código y los datos de tus clientes no se envían a un proveedor de modelos, de modo que el paso de inferencia no implica ninguna transferencia internacional según el [capítulo V del RGPD](https://eur-lex.europa.eu/legal-content/es/TXT/?uri=celex%3A32016R0679). El resto de tus obligaciones de tratamiento (base jurídica, seguridad, conservación, contratos con proveedores del resto de tu stack) siguen aplicándose. Esta es información general, no asesoramiento jurídico. La descarga de modelos y la comprobación de actualizaciones siguen usando la red; solo la inferencia se ejecuta en local.',
          'La tercera razón es la disponibilidad y el control: tú fijas la etiqueta exacta del modelo, eliges la longitud de contexto y decides cuándo actualizar. La velocidad depende de tu GPU o tu Mac, de la cuantización y de la longitud de contexto, así que mídela en tu propio equipo en lugar de fiarte de una cifra publicada.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ejecutar Qwen3.8-27B o Qwen3.6-27B en local no cuesta nada por token una vez comprado el hardware, mantiene los prompts en tu propio equipo y requiere unos 18 GB de memoria solo para el modelo.' },
          { type: 'plain-terms', text: 'LLM local significa que el modelo de IA se ejecuta en tu propio ordenador. Descargas el archivo del modelo (unos 17-19 GB para un modelo Qwen de 27B) y cada prompt que escribes se procesa en tu equipo en lugar de enviarse a un proveedor.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qué modelo de Qwen ejecutar en local: 3.8, 3.6 o 3.5',
        content: [
          'Elige la generación más reciente que te permita tu memoria. Qwen3.8-27B (publicado en agosto de 2026) y Qwen3.6-27B (abril de 2026) son modelos densos con codificador de visión y un contexto nativo de 262,144 tokens; Qwen3.5 (febrero de 2026) ofrece los tamaños pequeños. Las fichas de los modelos indican puntuaciones más altas para Qwen3.8-27B que para Qwen3.6-27B en los benchmarks que comparten: SWE-bench Pro 61.7 frente a 53.5, LiveCodeBench v6 90.3 frente a 83.9, GPQA Diamond 89.2 frente a 87.8 (datos del propio fabricante en las fichas de [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) y [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B), obtenidos con los arneses propios del equipo de Qwen, así que tómalos solo como orientativos).',
          'La tabla muestra los tamaños de descarga en Ollama según las páginas de la biblioteca de [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.6](https://ollama.com/library/qwen3.6) y [Qwen3.5](https://ollama.com/library/qwen3.5). La guía de memoria es una estimación de PromptQuorum: tamaño de descarga más 2-6 GB para la caché de contexto y el runtime, no una medición.',
        ],
        rows: [
          { Modelo: 'Qwen3.8 27B', 'Etiqueta Ollama': 'qwen3.8:27b', Descarga: '18 GB', 'Memoria (estimación)': 'GPU 24 GB / Mac 32 GB+' },
          { Modelo: 'Qwen3.8 27B Q8_0', 'Etiqueta Ollama': 'qwen3.8:27b-q8_0', Descarga: '30 GB', 'Memoria (estimación)': 'GPU 40 GB+ / Mac 48 GB+' },
          { Modelo: 'Qwen3.6 27B', 'Etiqueta Ollama': 'qwen3.6:27b', Descarga: '18-19 GB', 'Memoria (estimación)': 'GPU 24 GB / Mac 32 GB+' },
          { Modelo: 'Qwen3.6 35B-A3B (MoE)', 'Etiqueta Ollama': 'qwen3.6:35b-a3b', Descarga: '23 GB', 'Memoria (estimación)': 'GPU 32 GB / Mac 48 GB+' },
          { Modelo: 'Qwen3.5 9B', 'Etiqueta Ollama': 'qwen3.5:9b', Descarga: '6.6-7.6 GB', 'Memoria (estimación)': 'GPU 12-16 GB' },
          { Modelo: 'Qwen3.5 4B', 'Etiqueta Ollama': 'qwen3.5:4b', Descarga: '3.3-4.0 GB', 'Memoria (estimación)': 'GPU 8 GB / 16 GB RAM' },
        ],
        columns: ['Modelo', 'Etiqueta Ollama', 'Descarga', 'Memoria (estimación)'],
        tableFormat: true,
        note: 'Usa siempre la etiqueta explícita con el tamaño, por ejemplo qwen3.8:27b, porque un nombre sin más, como qwen3.5, apunta a la versión de 9B. La familia Qwen3.8 incluye también modelos más grandes (Qwen3.8-Flash-Next, con 125B de parámetros totales y 6B activos, bajo la licencia qwen-community-1.0, y Qwen3.8-2.4T-A95B bajo la licencia qwen3.8-max). Esas licencias son distintas de Apache 2.0, así que lee la ficha del modelo antes de usarlos comercialmente.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-es.webp',
        imageAlt: 'Tamaños de Qwen en local: 27B ocupa unos 18 GB, 9B unos 7 GB',
        imageCaption: 'Tamaños de los modelos Qwen para uso local, con el tamaño de descarga en Ollama de cada versión.',
      },
      hardware: {
        id: 'hardware',
        title: '¿Se puede ejecutar Qwen 3.6 en local? Requisitos de hardware',
        content: [
          'Sí. El factor limitante es la memoria: los archivos de los modelos de 27B pesan 17-19 GB, y la caché de contexto y el runtime se suman a eso. Por lo tanto, una GPU con 16 GB de VRAM no puede alojar por completo un modelo de 27B en Q4_K_M; Ollama repartiría las capas entre GPU y CPU, lo que es más lento. Elige Qwen3.5 9B en las tarjetas de 16 GB.',
        ],
        items: [
          '**GPU de 24 GB (RTX 3090, RTX 4090)**: aloja la descarga de 27B en Q4_K_M (17-19 GB) y deja unos GB libres para el contexto',
          '**GPU de 32 GB (RTX 5090)**: más margen para contextos largos o para la versión Qwen3.6 35B-A3B de 23 GB',
          '**GPU de 16 GB (RTX 4080, RTX 4070 Ti Super)**: usa `qwen3.5:9b` (6.6-7.6 GB); un modelo de 27B solo funciona con descarga parcial a la CPU y es mucho más lento',
          '**Apple Silicon, 32 GB de memoria unificada**: el mínimo práctico para un modelo de 27B; Ollama ofrece versiones MLX como `qwen3.8:27b-mlx` (18 GB)',
          '**Apple Silicon, 64 GB o más**: margen cómodo para los modelos de 27B, contextos más largos y otras aplicaciones abiertas al mismo tiempo',
          '**Macs actuales**: el Mac mini con M6 ofrece hasta 32 GB, el Mac mini con M5 Pro hasta 64 GB (según [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/)), el Mac Studio con M5 Max hasta 128 GB y con M5 Ultra hasta 512 GB (la opción de 512 GB se envía desde finales de octubre de 2026), según el [anuncio del Mac Studio de Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) y el [anuncio del M6 de Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/). PromptQuorum no ha realizado benchmarks de estos chips.',
          '**RAM del sistema**: 32 GB como mínimo junto con la inferencia en GPU; 64 GB si además ejecutas un entorno de desarrollo completo',
          '**Almacenamiento**: al menos 25 GB libres para un modelo de 27B (el archivo pesa 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon comparte la memoria unificada entre la CPU y la GPU, y macOS reserva una parte. Un Mac de 32 GB puede alojar un modelo de 18 GB, pero un Mac de 64 GB deja mucho más margen para el contexto y otras aplicaciones.' },
          { type: 'tip', text: 'Comprueba qué hay realmente en memoria con `ollama ps`: la columna PROCESSOR indica si el modelo se ejecuta al 100% en GPU y la columna CONTEXT muestra la longitud de contexto asignada.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Instalación con Ollama',
        content: [
          'Ollama es la forma más rápida de ejecutar Qwen en local. Gestiona las descargas de modelos, ofrece una API compatible con OpenAI en localhost:11434 y se encarga de los archivos GGUF por ti. Instálalo desde [ollama.com](https://ollama.com/download). Los pasos siguientes usan `qwen3.8:27b`; sustituye la etiqueta por `qwen3.6:27b` o `qwen3.5:9b` para usar otro tamaño.',
        ],
        numberedItems: [
          { title: 'Instala Ollama', whyItMatters: 'Ollama gestiona las descargas de modelos y ofrece una API local compatible con OpenAI.' },
          { title: 'Descarga el modelo Qwen3.8 27B con una etiqueta explícita', whyItMatters: 'Usa qwen3.8:27b de forma explícita. La descarga pesa unos 18 GB; en una GPU de 16 GB descarga qwen3.5:9b en su lugar.' },
          { title: 'Crea un Modelfile con una longitud de contexto mayor', whyItMatters: 'El contexto por defecto de Ollama es de 4k tokens en GPU con menos de 24 GiB de VRAM y de 32k entre 24 y 48 GiB. Configurar num_ctx hace explícita la longitud en cualquier equipo.' },
          { title: 'Crea el modelo personalizado y compruébalo con ollama ps', whyItMatters: 'Las columnas CONTEXT y PROCESSOR confirman que la longitud de contexto surtió efecto y que el modelo se ejecuta en GPU.' },
          { title: 'Prueba el endpoint de la API', whyItMatters: 'Ollama expone una API compatible con OpenAI en localhost:11434/v1. Usa este endpoint para conectar clientes LLM, IDE y PromptQuorum.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'No te saltes el ajuste del contexto. Por debajo de 24 GiB de VRAM el valor por defecto de Ollama es de 4k tokens, unas 3,000 palabras incluyendo la respuesta, y un archivo o una conversación larga se corta. Ollama recomienda al menos 64,000 tokens para agentes y herramientas de programación; los contextos más grandes necesitan más memoria.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-es.webp',
        imageAlt: 'Cinco pasos de Ollama para ejecutar Qwen en local',
        imageCaption: 'Instalación de Qwen con Ollama en cinco pasos: instalar, descargar, fijar la longitud de contexto, crear y comprobar, probar la API.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Instalación con LM Studio',
        content: [
          'LM Studio ofrece una interfaz gráfica para ejecutar LLM locales sin ningún comando de CLI. Es el camino más sencillo para usuarios no técnicos y para configuraciones en Windows. Descárgalo desde [lmstudio.ai](https://lmstudio.ai); está disponible para macOS, Windows y Linux.',
        ],
        numberedItems: [
          { title: 'Descarga e instala LM Studio', whyItMatters: 'Interfaz gráfica gratuita y multiplataforma para la inferencia de LLM locales. No requiere CLI.' },
          { title: 'Busca y descarga Qwen3.8 27B', whyItMatters: 'El catálogo de LM Studio incluye [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) con 16.10 GB en formatos GGUF y MLX. Elige la versión que corresponda a tu plataforma.' },
          { title: 'Fija la longitud de contexto antes de cargar', whyItMatters: 'Sube Context Length en los ajustes de carga del modelo a 32768 o más. Un contexto más largo necesita más memoria, así que redúcelo si la carga falla.' },
          { title: 'Inicia el servidor local', whyItMatters: 'El servidor de LM Studio ofrece una API compatible con OpenAI, con ejemplos en su documentación que usan localhost:1234. Usa esta URL en los clientes y en PromptQuorum.' },
          { title: 'Comprueba que el servidor responde', whyItMatters: 'Una petición al endpoint de modelos muestra el modelo cargado y confirma el puerto.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'Si el modelo no se carga, reduce la longitud de contexto o el número de capas en GPU, o cambia a un tamaño más pequeño de Qwen3.5. Un modelo que no cabe en la VRAM pasa a la RAM del sistema y se vuelve mucho más lento.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'Usar Qwen local con Claude Code',
        content: [
          'Ollama y LM Studio exponen un endpoint compatible con Anthropic, así que Claude Code puede comunicarse con un modelo Qwen local sin un proxy aparte. El comportamiento con un modelo que no es Claude depende del modelo, sobre todo en la llamada a herramientas, así que pruébalo primero con una tarea pequeña.',
          'Con Ollama, ejecuta `ollama launch claude`, o define tú mismo las variables: `ANTHROPIC_AUTH_TOKEN=ollama`, `ANTHROPIC_API_KEY=""` y `ANTHROPIC_BASE_URL=http://localhost:11434`, y luego inicia `claude --model <tu-modelo>`. La [guía de Ollama para Claude Code](https://docs.ollama.com/integrations/claude-code) recomienda una ventana de contexto de 64k tokens o más para los modelos locales.',
          'Con LM Studio, el servidor acepta `/v1/messages`: define `ANTHROPIC_BASE_URL=http://localhost:1234` y `ANTHROPIC_AUTH_TOKEN=lmstudio`, y luego inicia `claude --model <id-del-modelo>`. Consulta la [página de compatibilidad con Anthropic de LM Studio](https://lmstudio.ai/docs/developer/anthropic-compat) para ver los detalles actualizados.',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Los ajustes de Claude Code pueden anular las variables del shell. Si la conexión falla, ejecuta /status dentro de Claude Code para ver qué endpoint está usando.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Conexión con PromptQuorum',
        content: [
          'PromptQuorum envía un mismo prompt a varios modelos. Para añadir tu instancia local de Qwen como destino, apunta el endpoint de modelo local de PromptQuorum a la URL de Ollama compatible con OpenAI e introduce la etiqueta del modelo que creaste. Consulta los ajustes de la aplicación para ver los nombres de campo actuales.',
          'Usa `http://localhost:11434/v1` para Ollama o `http://localhost:1234/v1` para LM Studio. Si un formulario exige una clave de API, introduce cualquier cadena no vacía, porque ninguno de los dos servidores requiere autenticación por clave por defecto. Los proveedores en la nube mantienen su propia configuración, independiente.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Conecta PromptQuorum con Qwen local introduciendo http://localhost:11434/v1 como endpoint y la etiqueta del modelo que creaste, por ejemplo qwen3.8-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Solución de problemas',
        items: [
          '**La respuesta del modelo se corta o ignora el inicio de un prompt largo**: la longitud de contexto es demasiado baja. Reconstruye el Modelfile con un `PARAMETER num_ctx` mayor, vuelve a crear el modelo con `ollama create` y confirma el valor con `ollama ps`.',
          '**Error CUDA out of memory o generación muy lenta**: el modelo más el contexto no caben en la VRAM. Cambia a un tamaño más pequeño (`qwen3.5:9b`), reduce la longitud de contexto o elige una etiqueta con una cuantización menor.',
          '**La API de Ollama devuelve 404**: el nombre del modelo no coincide. Ejecuta `ollama list` y usa el nombre exacto que aparece (por ejemplo `qwen3.8-32k`).',
          '**Generación lenta**: ejecuta `ollama ps`. Si PROCESSOR muestra un reparto CPU/GPU en lugar de 100% GPU, el modelo no cabe en la VRAM; reduce el contexto o el tamaño del modelo y cierra otras aplicaciones que usen mucho la GPU.',
          '**LM Studio muestra "failed to load model"**: no hay memoria suficiente. Reduce la longitud de contexto, baja la descarga a GPU o elige un modelo más pequeño.',
          '**PromptQuorum devuelve un error de autenticación**: si el formulario exige una clave, introduce cualquier cadena no vacía. Ollama no requiere autenticación por clave de API por defecto.',
          '**Ollama usa la CPU en lugar de la GPU**: en NVIDIA, confirma que el controlador está instalado (`nvidia-smi` debe mostrar la GPU). En un Mac, Ollama usa Metal automáticamente; si no lo hace, reinstala Ollama desde ollama.com.',
          '**La descarga del modelo se detiene o falla**: ejecuta de nuevo `ollama pull qwen3.8:27b`; Ollama continúa donde se quedó. Como alternativa, descarga un GGUF desde [Hugging Face](https://huggingface.co/Qwen) e indica su ruta local en la línea FROM del Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'Ejecuta `ollama ps` para ver qué modelos están cargados, cuánta memoria usan y el contexto asignado. Usa `ollama stop <model>` para descargar uno antes de cargar otro.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Consumo eléctrico y costes de funcionamiento',
        content: [
          'El hardware es el coste único; la electricidad y, a efectos de comparación, las tarifas de la API son los costes de funcionamiento. Las cifras siguientes son supuestos para un ejemplo de cálculo, no mediciones: PromptQuorum no ha medido el consumo de estos sistemas, y la potencia varía según el modelo, el contexto y la GPU.',
          'Ejemplo para una estación de trabajo con GPU: con un consumo supuesto de 450 W, 8 horas al día, 250 días laborables y un precio de electricidad supuesto de €0.35/kWh, resulta 0.45 kW x 8 h x 250 días x €0.35 = **€315 al año**. Un Mac con un consumo supuesto de 50 W con el mismo horario resulta 0.05 kW x 8 h x 250 días x €0.35 = **€35 al año**.',
          'Comparación con la API: Anthropic indica en su [página de precios](https://platform.claude.com/docs/en/about-claude/pricing) Claude Sonnet 5 a $2 por millón de tokens de entrada y $10 por millón de tokens de salida. Una carga de 10 millones de tokens al día durante 250 días son 2,500 millones de tokens al año, es decir, $5,000 si todos los tokens son de entrada y $25,000 si todos son de salida. Las cargas reales mezclan ambos, así que tu factura quedará entre esos límites. Los precios cambian; consulta la página antes de decidir.',
          'Punto de equilibrio en meses = precio del hardware / (coste mensual de la API - electricidad mensual). Usa los precios de venta actuales en tu mercado para el precio del hardware y tu propio volumen de tokens para el coste de la API.',
        ],
        rows: [
          { Opción: 'Estación de trabajo con GPU', 'Potencia supuesta': '450 W', 'Electricidad/año': '€315', 'Coste de API/año': '$0 (local)' },
          { Opción: 'Mac (Apple Silicon)', 'Potencia supuesta': '50 W', 'Electricidad/año': '€35', 'Coste de API/año': '$0 (local)' },
          { Opción: 'API de Claude Sonnet 5', 'Potencia supuesta': 'n/a', 'Electricidad/año': 'n/a', 'Coste de API/año': '$5,000-25,000' },
        ],
        columns: ['Opción', 'Potencia supuesta', 'Electricidad/año', 'Coste de API/año'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'Son estimaciones ilustrativas para 10 millones de tokens al día. Los modelos locales y los alojados difieren en calidad y capacidad, así que compara el coste junto con los resultados que necesitas, no solo por el precio.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Guía de despliegue local de Qwen: niveles de hardware para los modelos Qwen](/es/local-llms/qwen-local-deployment-guide-2026)',
          '[Ejecuta Qwen-VL en local para entrada de imágenes](/es/local-llms/run-qwen-vl-locally-2026)',
          '[Qwen frente a Llama y Mistral para uso local](/es/local-llms/qwen-vs-llama-vs-mistral)',
          '[Mejores LLM locales para programar](/es/local-llms/best-local-llms-for-coding)',
          '[¿Cuánta VRAM necesitas para un LLM local?](/es/local-llms/how-much-vram-local-llm)',
          '[Por qué las empresas de la UE se pasan a Qwen en local](/es/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Todas las guías de LLM locales](/es/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Cuál es el hardware mínimo para instalar Qwen 3.6 o 3.8 en local?', a: 'Para los modelos de 27B, cuenta con una GPU de 24 GB o un Mac con Apple Silicon con 32 GB o más de memoria unificada, porque las descargas de Ollama pesan 17-19 GB y la caché de contexto se suma a eso. Para hardware más modesto usa Qwen3.5: la versión de 9B pesa 6.6-7.6 GB y la de 4B, 3.3-4.0 GB. La guía de memoria es una estimación, no una medición.' },
          { q: '¿Puedo ejecutar Qwen 3.6 27B con 16 GB de VRAM?', a: 'No por completo. La descarga de qwen3.6:27b pesa 18-19 GB (la etiqueta q4_K_M, 17 GB), que es más que 16 GB antes de contar la caché de contexto. Ollama puede repartir capas entre GPU y CPU, pero la generación se vuelve mucho más lenta. En una GPU de 16 GB, ejecuta qwen3.5:9b (6.6-7.6 GB) en su lugar.' },
          { q: '¿Por qué Ollama trunca mis prompts?', a: 'La longitud de contexto por defecto de Ollama depende de la VRAM: 4k tokens por debajo de 24 GiB, 32k de 24 a 48 GiB y 256k a partir de 48 GiB. Todo lo que exceda el contexto asignado se corta. Define `PARAMETER num_ctx 32768` en un Modelfile o inicia el servidor con `OLLAMA_CONTEXT_LENGTH`, y confirma el valor con `ollama ps`. Ollama recomienda al menos 64,000 tokens para agentes y herramientas de programación.' },
          { q: '¿Qué modelo de Qwen debo ejecutar: 3.8, 3.6 o 3.5?', a: 'Elige Qwen3.8-27B si tienes unos 24 GB de memoria de GPU o un Mac con 32 GB o más; su ficha de modelo indica puntuaciones más altas que Qwen3.6-27B en benchmarks compartidos (datos del fabricante). Elige Qwen3.6-27B o su versión de mezcla de expertos 35B-A3B si quieres la generación anterior. Elige Qwen3.5 (de 0.8B a 9B) para hardware más modesto.' },
          { q: '¿Ejecutar Qwen en local cumple el RGPD?', a: 'La inferencia local mantiene los prompts en tu propio equipo, por lo que el paso de inferencia no implica ninguna transferencia a un proveedor de modelos externo. Eso no hace que todo tu tratamiento cumpla la normativa por sí solo: la base jurídica, la seguridad, la conservación y los contratos del resto de tu stack siguen aplicándose. Esta es información general, no asesoramiento jurídico; consulta a tu delegado de protección de datos.' },
          { q: '¿Puede Qwen funcionar solo con CPU?', a: 'Sí, con llama.cpp u Ollama en un sistema sin GPU, pero es mucho más lento que la inferencia en GPU, y la velocidad depende de tu CPU y del ancho de banda de la memoria. Usa un tamaño pequeño como Qwen3.5 4B o 9B para uso solo con CPU, y ten en cuenta que un modelo de 27B resulta poco práctico para una conversación en tiempo real.' },
          { q: '¿Cómo actualizo Qwen a una versión más reciente?', a: 'Ejecuta de nuevo `ollama pull qwen3.8:27b`. Ollama descarga solo las capas modificadas si la etiqueta se ha actualizado. Una etiqueta siempre apunta a la versión publicada para ella, así que una generación más nueva (por ejemplo, una futura versión de Qwen) necesita una etiqueta nueva. En LM Studio, consulta el catálogo de modelos para ver si hay una versión más reciente.' },
          { q: '¿Puedo usar Claude Code con Qwen local?', a: 'Sí. Ollama y LM Studio exponen un endpoint compatible con Anthropic. Con Ollama, ejecuta `ollama launch claude` o define ANTHROPIC_BASE_URL como http://localhost:11434; con LM Studio, defínelo como http://localhost:1234. No se necesita una clave de API de Anthropic para la conexión local. Usa un contexto de 64k tokens o más y prueba primero la llamada a herramientas con una tarea pequeña.' },
          { q: '¿Qwen es gratuito para uso comercial?', a: 'Las fichas de Qwen3.8-27B, Qwen3.6-27B y Qwen3.5-9B indican la licencia Apache 2.0, que permite el uso comercial según sus términos. Otros modelos Qwen3.8 usan licencias distintas (Qwen3.8-Flash-Next: qwen-community-1.0, Qwen3.8-2.4T-A95B: qwen3.8-max), así que lee la licencia en la ficha del modelo exacto que descargues.' },
          { q: '¿Debo usar Ollama o LM Studio?', a: 'Usa Ollama para un servidor sin interfaz, scripts, plugins de IDE y PromptQuorum. Usa LM Studio para un explorador visual de modelos y una ventana de chat. Ambos pueden servir una API compatible con OpenAI y ambos pueden servir Claude Code mediante un endpoint compatible con Anthropic, así que puedes usar cualquiera y cambiar más adelante.' },
        ],
      },
    },
  },
  ar: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'تشغيل Qwen 3.6 وQwen 3.8 محليًا في 2026: دليل إعداد Ollama وLM Studio',
    seoTitle: 'تشغيل Qwen 3.6 وQwen 3.8 محليًا 2026: Ollama وLM Studio',
    intro: 'نموذجا Qwen3.8-27B وQwen3.6-27B كثيفان بحجم 27B ويعملان محليًا عبر Ollama أو LM Studio. حجم التنزيل في Ollama نحو 18 GB، لذا فإن بطاقة GPU بسعة 24 GB أو جهاز Mac بذاكرة موحدة 32 GB فأكثر هو نقطة البداية العملية؛ أما بطاقات GPU بسعة 16 GB فيناسبها حجم أصغر من Qwen3.5. يغطي هذا الدليل اختيار النموذج، وأحجام التنزيل الفعلية، وإعداد طول السياق، والإعداد في Ollama وLM Studio، وClaude Code، واستكشاف الأخطاء، وتكاليف التشغيل.',
    metaDescription: 'شغّل Qwen 3.6 أو 3.8 بحجم 27B محليًا: أحجام التنزيل الفعلية في Ollama وLM Studio، وGPU بسعة 24 GB أو Mac بذاكرة 32 GB، وضبط السياق وClaude Code.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ar.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10 دقائق للقراءة',
    educationalLevel: 'Beginner',
    audience: 'مطورون يُعدّون نموذج LLM محليًا للمرة الأولى، وفرق في الاتحاد الأوروبي تبحث عن ذكاء اصطناعي متوافق مع GDPR',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**نعم، يمكنك تشغيل Qwen 3.6 وQwen 3.8 محليًا: ثبّت Ollama ثم نفّذ `ollama run qwen3.8:27b` (تنزيل بنحو 18 GB) على GPU بسعة 24 GB أو على Mac بذاكرة موحدة 32 GB فأكثر. استخدم `qwen3.6:27b` للجيل السابق، أو `qwen3.5:9b` (نحو 7 GB) على GPU بسعة 16 GB. يحدد Ollama طول السياق الافتراضي بحسب VRAM (4k token تحت 24 GiB)، لذا ارفعه إلى 32768 أو أكثر.**',
    nextStep: {
      text: 'Qwen يعمل الآن محليًا. استكشف الآن أفضل الواجهات التي تجعله سهل الاستخدام.',
      label: 'أفضل واجهات LLM المحلية 2026 ←',
      href: '/ar/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ar: {
        question: 'كيف أشغّل Qwen 3.6 أو 3.8 محليًا؟',
        answer: 'ثبّت Ollama ثم نفّذ `ollama pull qwen3.8:27b` (نحو 18 GB) ثم `ollama run qwen3.8:27b`. وللجيل السابق استخدم `qwen3.6:27b`. وللحصول على واجهة رسومية، ثبّت LM Studio ونزّل Qwen3.8-27B (حجمه 16.10 GB في كتالوج LM Studio). ارفع طول السياق إلى 32768 أو أكثر، لأن الإعداد الافتراضي في Ollama هو 4k token فقط على بطاقات GPU التي تقل عن 24 GiB من VRAM.',
        bullets: [
          'العتاد: GPU بسعة 24 GB، أو Apple Silicon بذاكرة موحدة 32 GB فأكثر، لنماذج 27B',
          'على GPU بسعة 16 GB: شغّل qwen3.5:9b (تنزيل 6.6-7.6 GB) بدلًا من ذلك، لأن تنزيل 27B يبلغ 17-19 GB',
          'التنزيل: ollama pull qwen3.8:27b (نحو 18 GB) أو qwen3.6:27b (نحو 17-19 GB)',
          'السياق: الإعداد الافتراضي في Ollama هو 4k token تحت 24 GiB من VRAM؛ اضبطه على 32768 أو أكثر',
          'بديل LM Studio: واجهة رسومية دون سطر أوامر، وخادم محلي على localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'لماذا تشغّل Qwen محليًا في 2026', anchor: '#why-local' },
      { label: 'أي نموذج Qwen تشغّل', anchor: '#choose-model' },
      { label: 'هل يمكن تشغيل Qwen 3.6 محليًا؟ العتاد', anchor: '#hardware' },
      { label: 'الإعداد مع Ollama', anchor: '#ollama-setup' },
      { label: 'الإعداد مع LM Studio', anchor: '#lm-studio-setup' },
      { label: 'استخدام Qwen المحلي مع Claude Code', anchor: '#claude-code' },
      { label: 'الربط مع PromptQuorum', anchor: '#promptquorum' },
      { label: 'استكشاف الأخطاء', anchor: '#troubleshooting' },
      { label: 'استهلاك الطاقة وتكاليف التشغيل', anchor: '#power-tco' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**مساران**: Ollama (سطر أوامر، دون واجهة، جاهز للـ API) أو LM Studio (واجهة رسومية دون سطر أوامر). كلاهما يشغّل Qwen3.8-27B وQwen3.6-27B محليًا.',
          '**اختيار النموذج**: Qwen3.8-27B أحدث إصدار 27B على Hugging Face (ترخيص Apache 2.0 بحسب بطاقة النموذج)؛ وQwen3.6-27B هو الجيل السابق؛ أما Qwen3.5 فيوفّر أحجامًا صغيرة (من 0.8B إلى 9B) للعتاد الأضعف.',
          '**العتاد**: تنزيلات 27B تبلغ 17-19 GB، لذا فإن GPU بسعة 24 GB أو Mac بذاكرة موحدة 32 GB فأكثر هو الحد الأدنى العملي. لا تتسع بطاقة GPU بسعة 16 GB لنموذج 27B كاملًا؛ استخدم `qwen3.5:9b` عليها.',
          '**إصلاح السياق**: يعتمد طول السياق الافتراضي في Ollama على VRAM (4k token تحت 24 GiB). اضبط `num_ctx` أو `OLLAMA_CONTEXT_LENGTH` على 32768 أو أكثر، وعلى 64k أو أكثر لوكلاء البرمجة.',
          '**الخصوصية**: الاستدلال المحلي يُبقي الطلبات على جهازك. وهذا يزيل النقل إلى طرف ثالث في خطوة الاستدلال، لكنه لا يجعل معالجتك الأوسع متوافقة مع GDPR بحد ذاته.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'لماذا تشغّل Qwen محليًا في 2026',
        content: [
          'تشغيل Qwen محليًا يعني عدم وجود رسوم لكل token بعد امتلاك العتاد، وعدم خروج أي طلب من جهازك، ونموذجًا يواصل العمل دون اتصال بالإنترنت. ينشر فريق Qwen نماذج 27B بترخيص Apache 2.0 على Hugging Face ([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)، [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B))، لذا فالاستخدام التجاري مسموح بموجب هذا الترخيص؛ أعد دائمًا قراءة الترخيص في بطاقة النموذج للإصدار المحدد الذي تنزّله.',
          'الخصوصية هي الدافع الثاني. عندما يعمل Qwen على عتادك، لا تُرسل طلباتك وشيفرتك وبيانات عملائك إلى مزوّد نموذج، فلا ينطوي الاستدلال على نقل عابر للحدود بموجب [الفصل الخامس من GDPR](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679). وتبقى واجباتك الأخرى في المعالجة سارية (الأساس القانوني، والأمان، والاحتفاظ بالبيانات، وعقود الموردين لبقية منظومتك). هذه معلومات عامة وليست استشارة قانونية. ما زال تنزيل النماذج والتحقق من التحديثات يستخدمان الشبكة؛ أما الاستدلال وحده فيعمل محليًا.',
          'السبب الثالث هو التوفر والتحكم: تثبّت وسم النموذج بدقة، وتختار طول السياق، وتقرر متى تحدّث. تعتمد السرعة على GPU أو Mac لديك وعلى التكميم وطول السياق، لذا قِسها على جهازك بدلًا من الاعتماد على رقم منشور.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'تشغيل Qwen3.8-27B أو Qwen3.6-27B محليًا لا يكلّف رسومًا لكل token بعد شراء العتاد، ويُبقي الطلبات على جهازك، ويحتاج إلى نحو 18 GB من الذاكرة للنموذج وحده.' },
          { type: 'plain-terms', text: 'LLM محلي يعني أن نموذج الذكاء الاصطناعي يعمل على حاسوبك. تنزّل ملف النموذج (نحو 17-19 GB لنموذج Qwen بحجم 27B)، ويُعالَج كل طلب تكتبه على جهازك بدلًا من إرساله إلى مزوّد.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'أي نموذج Qwen تشغّل محليًا: 3.8 أم 3.6 أم 3.5',
        content: [
          'اختر أحدث جيل تسمح به ذاكرتك. Qwen3.8-27B (صدر في أغسطس 2026) وQwen3.6-27B (أبريل 2026) نموذجان كثيفان بمُرمِّز رؤية وسياق أصلي طوله 262,144 token؛ بينما يوفّر Qwen3.5 (فبراير 2026) الأحجام الصغيرة. تُظهر بطاقات النماذج درجات أعلى لـ Qwen3.8-27B منها لـ Qwen3.6-27B في الاختبارات المشتركة: SWE-bench Pro 61.7 مقابل 53.5، وLiveCodeBench v6 90.3 مقابل 83.9، وGPQA Diamond 89.2 مقابل 87.8 (أرقام أعلنتها الجهة المطورة في بطاقتي [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) و[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)، وأُجريت بأدوات الاختبار الخاصة بفريق Qwen، لذا تُعدّ دلالية فقط).',
          'يعرض الجدول أحجام التنزيل في Ollama من صفحات مكتبة [Qwen3.8](https://ollama.com/library/qwen3.8) و[Qwen3.6](https://ollama.com/library/qwen3.6) و[Qwen3.5](https://ollama.com/library/qwen3.5). دليل الذاكرة تقدير من PromptQuorum: حجم التنزيل مضافًا إليه 2-6 GB لذاكرة السياق المؤقتة وبيئة التشغيل، وليس قياسًا فعليًا.',
        ],
        rows: [
          { 'النموذج': 'Qwen3.8 27B', 'وسم Ollama': 'qwen3.8:27b', 'حجم التنزيل': '18 GB', 'الذاكرة المطلوبة (تقدير)': 'GPU 24 GB / Mac 32 GB+' },
          { 'النموذج': 'Qwen3.8 27B Q8_0', 'وسم Ollama': 'qwen3.8:27b-q8_0', 'حجم التنزيل': '30 GB', 'الذاكرة المطلوبة (تقدير)': 'GPU 40 GB+ / Mac 48 GB+' },
          { 'النموذج': 'Qwen3.6 27B', 'وسم Ollama': 'qwen3.6:27b', 'حجم التنزيل': '18-19 GB', 'الذاكرة المطلوبة (تقدير)': 'GPU 24 GB / Mac 32 GB+' },
          { 'النموذج': 'Qwen3.6 35B-A3B (MoE)', 'وسم Ollama': 'qwen3.6:35b-a3b', 'حجم التنزيل': '23 GB', 'الذاكرة المطلوبة (تقدير)': 'GPU 32 GB / Mac 48 GB+' },
          { 'النموذج': 'Qwen3.5 9B', 'وسم Ollama': 'qwen3.5:9b', 'حجم التنزيل': '6.6-7.6 GB', 'الذاكرة المطلوبة (تقدير)': 'GPU 12-16 GB' },
          { 'النموذج': 'Qwen3.5 4B', 'وسم Ollama': 'qwen3.5:4b', 'حجم التنزيل': '3.3-4.0 GB', 'الذاكرة المطلوبة (تقدير)': 'GPU 8 GB / RAM 16 GB' },
        ],
        columns: ['النموذج', 'وسم Ollama', 'حجم التنزيل', 'الذاكرة المطلوبة (تقدير)'],
        tableFormat: true,
        note: 'استخدم دائمًا الوسم الصريح مع الحجم، مثل qwen3.8:27b، لأن الاسم المجرد مثل qwen3.5 يشير إلى إصدار 9B. وتضم عائلة Qwen3.8 أيضًا نماذج أكبر (Qwen3.8-Flash-Next بإجمالي 125B ومعاملات نشطة 6B بترخيص qwen-community-1.0، وQwen3.8-2.4T-A95B بترخيص qwen3.8-max). تختلف هذه التراخيص عن Apache 2.0، لذا اقرأ بطاقة النموذج قبل أي استخدام تجاري.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ar.webp',
        imageAlt: 'أحجام Qwen المحلية: نموذج 27B نحو 18 GB ونموذج 9B نحو 7 GB',
        imageCaption: 'أحجام نماذج Qwen للاستخدام المحلي، مع حجم التنزيل في Ollama لكل إصدار.',
      },
      hardware: {
        id: 'hardware',
        title: 'هل يمكن تشغيل Qwen 3.6 محليًا؟ متطلبات العتاد',
        content: [
          'نعم. العامل المحدِّد هو الذاكرة: ملفات نماذج 27B تبلغ 17-19 GB، وتُضاف إليها ذاكرة السياق وبيئة التشغيل. لذلك لا تستطيع بطاقة GPU بسعة 16 GB من VRAM استيعاب نموذج 27B بتكميم Q4_K_M كاملًا؛ إذ سيوزّع Ollama الطبقات بين GPU وCPU، وهذا أبطأ. اختر Qwen3.5 9B على بطاقات 16 GB.',
        ],
        items: [
          '**GPU بسعة 24 GB (RTX 3090، RTX 4090)**: تستوعب تنزيل 27B بتكميم Q4_K_M (17-19 GB) مع بضعة GB متبقية للسياق',
          '**GPU بسعة 32 GB (RTX 5090)**: مساحة أكبر لسياق طويل أو لإصدار Qwen3.6 35B-A3B بحجم 23 GB',
          '**GPU بسعة 16 GB (RTX 4080، RTX 4070 Ti Super)**: استخدم `qwen3.5:9b` (6.6-7.6 GB)؛ لا يعمل نموذج 27B إلا مع نقل جزئي إلى CPU وبسرعة أقل بكثير',
          '**Apple Silicon بذاكرة موحدة 32 GB**: الحد الأدنى العملي لنموذج 27B؛ يوفّر Ollama إصدارات MLX مثل `qwen3.8:27b-mlx` (18 GB)',
          '**Apple Silicon بذاكرة 64 GB أو أكثر**: مساحة مريحة لنماذج 27B وسياق أطول وتشغيل تطبيقات أخرى في الوقت نفسه',
          '**أجهزة Mac الحالية**: يوفّر Mac mini بمعالج M6 حتى 32 GB، وMac mini بمعالج M5 Pro حتى 64 GB (بحسب [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/))، وMac Studio بمعالج M5 Max حتى 128 GB وبمعالج M5 Ultra حتى 512 GB (خيار 512 GB يُشحن اعتبارًا من أواخر أكتوبر 2026)، بحسب [إعلان Apple عن Mac Studio](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) و[إعلان Apple عن M6](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/). لم تُجرِ PromptQuorum اختبارات أداء على هذه المعالجات.',
          '**ذاكرة النظام RAM**: 32 GB كحد أدنى مع الاستدلال على GPU؛ و64 GB إذا كنت تشغّل أيضًا بيئة تطوير كاملة',
          '**التخزين**: 25 GB فارغة على الأقل لنموذج 27B واحد (حجم الملف 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'تتشارك CPU وGPU في Apple Silicon ذاكرة موحدة، وينقص macOS جزءًا منها. يستطيع Mac بذاكرة 32 GB استيعاب نموذج بحجم 18 GB، لكن Mac بذاكرة 64 GB يترك مساحة أكبر بكثير للسياق والتطبيقات الأخرى.' },
          { type: 'tip', text: 'تحقق مما هو محمّل فعليًا في الذاكرة عبر `ollama ps`: يوضح العمود PROCESSOR ما إذا كان النموذج يعمل بنسبة 100% على GPU، ويوضح العمود CONTEXT طول السياق المخصص.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'الإعداد مع Ollama',
        content: [
          'Ollama هو أسرع طريقة لتشغيل Qwen محليًا. فهو يدير تنزيل النماذج، ويوفّر API متوافقًا مع OpenAI على localhost:11434، ويتعامل مع ملفات GGUF نيابةً عنك. ثبّته من [ollama.com](https://ollama.com/download). تستخدم الخطوات أدناه `qwen3.8:27b`؛ استبدل الوسم بـ `qwen3.6:27b` أو `qwen3.5:9b` لاستخدام حجم آخر.',
        ],
        numberedItems: [
          { title: 'ثبّت Ollama', whyItMatters: 'يتولى Ollama تنزيل النماذج ويوفّر API محليًا متوافقًا مع OpenAI.' },
          { title: 'نزّل نموذج Qwen3.8 27B بوسم صريح', whyItMatters: 'استخدم qwen3.8:27b صراحةً. حجم التنزيل نحو 18 GB؛ وعلى GPU بسعة 16 GB نزّل qwen3.5:9b بدلًا منه.' },
          { title: 'أنشئ Modelfile بطول سياق أكبر', whyItMatters: 'طول السياق الافتراضي في Ollama هو 4k token على بطاقات GPU التي تقل عن 24 GiB من VRAM، و32k على بطاقات 24-48 GiB. ضبط num_ctx يجعل الطول صريحًا على كل جهاز.' },
          { title: 'ابنِ النموذج المخصص وتحقق منه عبر ollama ps', whyItMatters: 'يؤكد العمودان CONTEXT وPROCESSOR أن طول السياق طُبّق وأن النموذج يعمل على GPU.' },
          { title: 'اختبر نقطة نهاية API', whyItMatters: 'يوفّر Ollama واجهة API متوافقة مع OpenAI على localhost:11434/v1. استخدم هذه النقطة لربط عملاء LLM وبيئات التطوير وPromptQuorum.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'لا تتجاوز إعداد السياق. تحت 24 GiB من VRAM يكون الإعداد الافتراضي في Ollama هو 4k token، أي نحو 3,000 كلمة شاملة الرد، فيُقتطع أي ملف أو محادثة طويلة. توصي Ollama بما لا يقل عن 64,000 token للوكلاء وأدوات البرمجة؛ والسياقات الأكبر تحتاج إلى ذاكرة أكثر.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-ar.webp',
        imageAlt: 'خمس خطوات في Ollama لتشغيل Qwen محليًا',
        imageCaption: 'إعداد Qwen في Ollama بخمس خطوات: التثبيت، والتنزيل، وضبط طول السياق، والبناء والتحقق، واختبار API.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'الإعداد مع LM Studio',
        content: [
          'يوفّر LM Studio واجهة رسومية لتشغيل نماذج LLM المحلية دون أي أوامر. وهو الطريق الأسهل للمستخدمين غير التقنيين ولإعدادات Windows. نزّله من [lmstudio.ai](https://lmstudio.ai)؛ وهو متاح لأنظمة macOS وWindows وLinux.',
        ],
        numberedItems: [
          { title: 'نزّل LM Studio وثبّته', whyItMatters: 'واجهة رسومية مجانية متعددة المنصات للاستدلال المحلي لنماذج LLM. لا حاجة إلى سطر أوامر.' },
          { title: 'ابحث عن Qwen3.8 27B ونزّله', whyItMatters: 'يعرض كتالوج LM Studio نموذج [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) بحجم 16.10 GB بصيغتي GGUF وMLX. اختر الإصدار المناسب لمنصتك.' },
          { title: 'اضبط طول السياق قبل التحميل', whyItMatters: 'ارفع Context Length في إعدادات تحميل النموذج إلى 32768 أو أكثر. السياق الأطول يحتاج إلى ذاكرة أكبر، لذا خفّضه إذا فشل التحميل.' },
          { title: 'شغّل الخادم المحلي', whyItMatters: 'يوفّر خادم LM Studio واجهة API متوافقة مع OpenAI، وتستخدم أمثلة وثائقه localhost:1234. استخدم هذا العنوان في العملاء وPromptQuorum.' },
          { title: 'تحقق من أن الخادم يستجيب', whyItMatters: 'يُظهر طلب إلى نقطة نهاية النماذج النموذج المحمّل ويؤكد المنفذ.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'إذا فشل تحميل النموذج، فخفّض طول السياق أو عدد طبقات GPU، أو انتقل إلى حجم أصغر من Qwen3.5. النموذج الذي لا يتسع في VRAM يمتد إلى ذاكرة النظام ويصبح أبطأ بكثير.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'استخدام Qwen المحلي مع Claude Code',
        content: [
          'يوفّر كل من Ollama وLM Studio نقطة نهاية متوافقة مع Anthropic، لذا يستطيع Claude Code التحدث إلى نموذج Qwen محلي دون وسيط منفصل. يعتمد السلوك مع نموذج غير Claude على النموذج نفسه، خاصةً في استدعاء الأدوات، لذا جرّبه أولًا على مهمة صغيرة.',
          'مع Ollama، نفّذ `ollama launch claude`، أو اضبط المتغيرات بنفسك: `ANTHROPIC_AUTH_TOKEN=ollama` و`ANTHROPIC_API_KEY=""` و`ANTHROPIC_BASE_URL=http://localhost:11434`، ثم شغّل `claude --model <your-model>`. يوصي [دليل Ollama لـ Claude Code](https://docs.ollama.com/integrations/claude-code) بنافذة سياق بحجم 64k token أو أكثر للنماذج المحلية.',
          'مع LM Studio، يقبل الخادم `/v1/messages`: اضبط `ANTHROPIC_BASE_URL=http://localhost:1234` و`ANTHROPIC_AUTH_TOKEN=lmstudio`، ثم شغّل `claude --model <model-id>`. راجع [صفحة التوافق مع Anthropic في LM Studio](https://lmstudio.ai/docs/developer/anthropic-compat) للاطلاع على التفاصيل الحالية.',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'قد تتجاوز إعدادات Claude Code متغيرات الصدفة (shell). إذا فشل الاتصال، فنفّذ /status داخل Claude Code لمعرفة نقطة النهاية التي يستخدمها.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'الربط مع PromptQuorum',
        content: [
          'ترسل PromptQuorum طلبًا واحدًا إلى عدة نماذج. لإضافة نسخة Qwen المحلية كوجهة، وجّه نقطة نهاية النموذج المحلي في PromptQuorum إلى عنوان Ollama المتوافق مع OpenAI، وأدخل وسم النموذج الذي بنيته. راجع إعدادات التطبيق لمعرفة أسماء الحقول الحالية.',
          'استخدم `http://localhost:11434/v1` لـ Ollama أو `http://localhost:1234/v1` لـ LM Studio. إذا طلب النموذج مفتاح API، فأدخل أي نص غير فارغ، لأن أيًّا من الخادمين لا يشترط مصادقة بمفتاح افتراضيًا. أما مزودو السحابة فلكلٍّ منهم إعداده المنفصل.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'اربط PromptQuorum بـ Qwen المحلي بإدخال http://localhost:11434/v1 كنقطة نهاية ووسم النموذج الذي بنيته، مثل qwen3.8-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'استكشاف الأخطاء',
        items: [
          '**يُقتطع رد النموذج أو يتجاهل بداية طلب طويل**: طول السياق منخفض جدًا. أعد بناء Modelfile بقيمة أكبر لـ `PARAMETER num_ctx`، وأعد إنشاء النموذج عبر `ollama create`، وتأكد من القيمة عبر `ollama ps`.',
          '**خطأ CUDA out of memory أو بطء شديد في التوليد**: النموذج مع السياق لا يتسعان في VRAM. انتقل إلى حجم أصغر (`qwen3.5:9b`)، أو خفّض طول السياق، أو اختر وسم تكميم أصغر.',
          '**يعيد Ollama API الخطأ 404**: اسم النموذج غير مطابق. نفّذ `ollama list` واستخدم الاسم المعروض تمامًا (مثل `qwen3.8-32k`).',
          '**بطء التوليد**: نفّذ `ollama ps`. إذا أظهر PROCESSOR توزيعًا بين CPU وGPU بدلًا من 100% GPU، فالنموذج لا يتسع في VRAM؛ قلّل السياق أو حجم النموذج، وأغلق التطبيقات الأخرى الكثيفة الاستخدام لـ GPU.',
          '**يعرض LM Studio رسالة "failed to load model"**: الذاكرة غير كافية. قلّل طول السياق، أو خفّض تفريغ GPU، أو اختر نموذجًا أصغر.',
          '**تعيد PromptQuorum خطأ مصادقة**: إذا طلب النموذج مفتاحًا، فأدخل أي نص غير فارغ. لا يشترط Ollama مصادقة بمفتاح API افتراضيًا.',
          '**يستخدم Ollama وحدة CPU بدلًا من GPU**: على NVIDIA، تأكد من تثبيت برنامج التشغيل (يجب أن يعرض `nvidia-smi` وحدة GPU). وعلى Mac يستخدم Ollama واجهة Metal تلقائيًا؛ أعد تثبيت Ollama من ollama.com إذا لم يحدث ذلك.',
          '**يتوقف تنزيل النموذج أو يفشل**: نفّذ `ollama pull qwen3.8:27b` مرة أخرى؛ يستأنف Ollama من حيث توقف. وكبديل، نزّل ملف GGUF من [Hugging Face](https://huggingface.co/Qwen) وأشِر إلى مساره المحلي في سطر FROM داخل Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'نفّذ `ollama ps` لمعرفة النماذج المحمّلة وحجم الذاكرة التي تستخدمها والسياق المخصص. واستخدم `ollama stop <model>` لإلغاء تحميل نموذج قبل تحميل آخر.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'استهلاك الطاقة وتكاليف التشغيل',
        content: [
          'العتاد تكلفة لمرة واحدة؛ أما الكهرباء، ورسوم API عند المقارنة، فهي تكاليف التشغيل. الأرقام أدناه افتراضات لمثال محسوب وليست قياسات: لم تقِس PromptQuorum استهلاك هذه الأنظمة، ويتفاوت استهلاك الطاقة بحسب النموذج والسياق وGPU.',
          'مثال لمحطة عمل بـ GPU: استهلاك مفترض 450 W، و8 ساعات يوميًا، و250 يوم عمل، وسعر كهرباء مفترض 0.35 EUR/kWh يعطي 0.45 kW x 8 h x 250 days x 0.35 EUR = **315 EUR سنويًا**. وجهاز Mac باستهلاك مفترض 50 W وفق الجدول نفسه يعطي 0.05 kW x 8 h x 250 days x 0.35 EUR = **35 EUR سنويًا**.',
          'مقارنة API: تدرج Anthropic سعر Claude Sonnet 5 عند $2 لكل مليون token إدخال و$10 لكل مليون token إخراج في [صفحة الأسعار](https://platform.claude.com/docs/en/about-claude/pricing). حجم عمل قدره 10 ملايين token يوميًا على مدى 250 يومًا يساوي 2,500 مليون token سنويًا، أي $5,000 إذا كانت كل الـ token إدخالًا و$25,000 إذا كانت كلها إخراجًا. تجمع أحمال العمل الفعلية بين النوعين، لذا تقع فاتورتك بين هذين الحدين. الأسعار تتغير؛ راجع الصفحة قبل أن تقرر.',
          'نقطة التعادل بالأشهر = سعر العتاد / (تكلفة API الشهرية - الكهرباء الشهرية). استخدم أسعار التجزئة الحالية في سوقك لسعر العتاد، وحجم الـ token لديك لتكلفة API.',
        ],
        rows: [
          { 'الخيار': 'محطة عمل بـ GPU', 'الطاقة المفترضة': '450 W', 'الكهرباء/سنة': '315 EUR', 'تكلفة API/سنة': '$0 (محلي)' },
          { 'الخيار': 'Mac (Apple Silicon)', 'الطاقة المفترضة': '50 W', 'الكهرباء/سنة': '35 EUR', 'تكلفة API/سنة': '$0 (محلي)' },
          { 'الخيار': 'Claude Sonnet 5 API', 'الطاقة المفترضة': 'غير متاح', 'الكهرباء/سنة': 'غير متاح', 'تكلفة API/سنة': '$5,000-25,000' },
        ],
        columns: ['الخيار', 'الطاقة المفترضة', 'الكهرباء/سنة', 'تكلفة API/سنة'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'هذه تقديرات توضيحية لـ 10 ملايين token يوميًا. تختلف النماذج المحلية والمستضافة في الجودة والقدرات، لذا قارن التكلفة مع النتائج التي تحتاجها، لا بالسعر وحده.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[دليل النشر المحلي لـ Qwen: مستويات العتاد لنماذج Qwen](/ar/local-llms/qwen-local-deployment-guide-2026)',
          '[تشغيل Qwen-VL محليًا لإدخال الصور](/ar/local-llms/run-qwen-vl-locally-2026)',
          '[Qwen مقابل Llama مقابل Mistral للاستخدام المحلي](/ar/local-llms/qwen-vs-llama-vs-mistral)',
          '[أفضل نماذج LLM المحلية للبرمجة](/ar/local-llms/best-local-llms-for-coding)',
          '[كم تحتاج من VRAM لتشغيل LLM محلي؟](/ar/local-llms/how-much-vram-local-llm)',
          '[لماذا تتحول الشركات الأوروبية إلى Qwen المحلي](/ar/blog/eu-companies-local-qwen-gdpr-shift)',
          '[تصفح جميع أدلة LLM المحلية](/ar/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما الحد الأدنى من العتاد لتشغيل Qwen 3.6 أو 3.8 محليًا؟', a: 'لنماذج 27B، خطط لـ GPU بسعة 24 GB أو Mac بمعالج Apple Silicon بذاكرة موحدة 32 GB فأكثر، لأن تنزيلات Ollama تبلغ 17-19 GB وتُضاف إليها ذاكرة السياق. وللعتاد الأصغر استخدم Qwen3.5: إصدار 9B حجمه 6.6-7.6 GB وإصدار 4B حجمه 3.3-4.0 GB. دليل الذاكرة تقدير وليس قياسًا.' },
          { q: 'هل يمكنني تشغيل Qwen 3.6 27B على 16 GB من VRAM؟', a: 'ليس بالكامل. تنزيل qwen3.6:27b يبلغ 18-19 GB (ووسم q4_K_M يبلغ 17 GB)، وهو أكبر من 16 GB قبل احتساب ذاكرة السياق. يستطيع Ollama توزيع الطبقات بين GPU وCPU، لكن التوليد يصبح أبطأ بكثير. على GPU بسعة 16 GB شغّل qwen3.5:9b (6.6-7.6 GB) بدلًا من ذلك.' },
          { q: 'لماذا يقتطع Ollama طلباتي؟', a: 'يعتمد طول السياق الافتراضي في Ollama على VRAM: 4k token تحت 24 GiB، و32k من 24 إلى 48 GiB، و256k من 48 GiB. وأي شيء يتجاوز السياق المخصص يُقتطع. اضبط `PARAMETER num_ctx 32768` في Modelfile أو شغّل الخادم مع `OLLAMA_CONTEXT_LENGTH`، ثم تأكد من القيمة عبر `ollama ps`. توصي Ollama بما لا يقل عن 64,000 token للوكلاء وأدوات البرمجة.' },
          { q: 'أي نموذج Qwen أشغّل: 3.8 أم 3.6 أم 3.5؟', a: 'اختر Qwen3.8-27B إذا كانت لديك ذاكرة GPU بنحو 24 GB أو Mac بذاكرة 32 GB فأكثر؛ فبطاقة نموذجه تُظهر درجات أعلى من Qwen3.6-27B في الاختبارات المشتركة (أرقام أعلنتها الجهة المطورة). واختر Qwen3.6-27B أو إصدار 35B-A3B من خليط الخبراء إذا أردت الجيل السابق. واختر Qwen3.5 (من 0.8B إلى 9B) للعتاد الأضعف.' },
          { q: 'هل تشغيل Qwen محليًا متوافق مع GDPR؟', a: 'الاستدلال المحلي يُبقي الطلبات على جهازك، فلا تنطوي خطوة الاستدلال على نقل إلى مزوّد نموذج تابع لطرف ثالث. لا يجعل ذلك معالجتك كلها متوافقة بحد ذاته: فالأساس القانوني والأمان والاحتفاظ بالبيانات وعقود بقية منظومتك لا تزال سارية. هذه معلومات عامة وليست استشارة قانونية؛ اسأل مسؤول حماية البيانات لديك.' },
          { q: 'هل يعمل Qwen على CPU فقط؟', a: 'نعم، عبر llama.cpp أو Ollama على نظام دون GPU، لكنه أبطأ بكثير من الاستدلال على GPU، وتعتمد السرعة على CPU وعرض نطاق الذاكرة. استخدم حجمًا صغيرًا مثل Qwen3.5 4B أو 9B للاستخدام على CPU فقط، وتوقع أن يكون نموذج 27B غير عملي للمحادثة الفورية.' },
          { q: 'كيف أحدّث Qwen إلى إصدار أحدث؟', a: 'نفّذ `ollama pull qwen3.8:27b` مرة أخرى. ينزّل Ollama الطبقات التي تغيرت فقط إذا حُدّث الوسم. يشير الوسم دائمًا إلى الإصدار المنشور له، لذا يحتاج جيل أحدث (مثل إصدار Qwen مستقبلي) إلى وسم جديد. وفي LM Studio، راجع كتالوج النماذج بحثًا عن إصدار أحدث.' },
          { q: 'هل يمكنني استخدام Claude Code مع Qwen المحلي؟', a: 'نعم. يوفّر Ollama وLM Studio كلاهما نقطة نهاية متوافقة مع Anthropic. مع Ollama، نفّذ `ollama launch claude` أو اضبط ANTHROPIC_BASE_URL على http://localhost:11434؛ ومع LM Studio اضبطه على http://localhost:1234. لا حاجة إلى مفتاح Anthropic API للاتصال المحلي. استخدم سياقًا بحجم 64k token أو أكثر، وجرّب استدعاء الأدوات أولًا على مهمة صغيرة.' },
          { q: 'هل Qwen مجاني للاستخدام التجاري؟', a: 'تذكر بطاقات نماذج Qwen3.8-27B وQwen3.6-27B وQwen3.5-9B ترخيص Apache 2.0، الذي يسمح بالاستخدام التجاري وفق شروطه. أما نماذج Qwen3.8 الأخرى فتستخدم تراخيص مختلفة (Qwen3.8-Flash-Next: qwen-community-1.0، وQwen3.8-2.4T-A95B: qwen3.8-max)، لذا اقرأ الترخيص في بطاقة النموذج المحدد الذي تنزّله.' },
          { q: 'هل أستخدم Ollama أم LM Studio؟', a: 'استخدم Ollama لخادم دون واجهة، وللسكربتات، وإضافات بيئات التطوير، وPromptQuorum. واستخدم LM Studio لمتصفح نماذج مرئي ونافذة محادثة. يستطيع كلاهما تقديم API متوافقة مع OpenAI، ويستطيع كلاهما خدمة Claude Code عبر نقطة نهاية متوافقة مع Anthropic، لذا يمكنك تشغيل أيٍّ منهما والتبديل لاحقًا.' },
        ],
      },
    },
  },
  pt: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Como rodar o Qwen 3.6 e o Qwen 3.8 localmente em 2026: guia de instalação com Ollama e LM Studio',
    seoTitle: 'Rodar Qwen 3.6 e 3.8 localmente 2026: Ollama + LM Studio',
    intro: 'Qwen3.8-27B e Qwen3.6-27B são modelos densos de 27B que rodam localmente pelo Ollama ou pelo LM Studio. O download no Ollama tem cerca de 18 GB, então o ponto de partida prático é uma placa de vídeo de 24 GB ou um Mac com 32 GB ou mais de memória unificada; placas de vídeo de 16 GB devem usar um tamanho menor do Qwen3.5. Este guia cobre a escolha do modelo, os tamanhos reais de download, a configuração do tamanho de contexto, a instalação no Ollama e no LM Studio, o Claude Code, a solução de problemas e os custos de uso.',
    metaDescription: 'Rode o Qwen 3.6 ou 3.8 27B localmente: tamanhos reais de download no Ollama e LM Studio, GPU de 24 GB ou Mac de 32 GB, contexto e Claude Code.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-pt.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10 min de leitura',
    educationalLevel: 'Beginner',
    audience: 'Desenvolvedores que configuram um LLM local pela primeira vez, equipes na UE que buscam IA em conformidade com o GDPR',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**Sim, você pode rodar o Qwen 3.6 e o Qwen 3.8 localmente: instale o Ollama e execute `ollama run qwen3.8:27b` (download de cerca de 18 GB) em uma placa de vídeo de 24 GB ou em um Mac com 32 GB ou mais de memória unificada. Use `qwen3.6:27b` para a geração anterior, ou `qwen3.5:9b` (cerca de 7 GB) em uma placa de vídeo de 16 GB. O Ollama define o tamanho de contexto padrão pela VRAM (4k tokens abaixo de 24 GiB), então aumente para 32768 ou mais.**',
    nextStep: {
      text: 'O Qwen está rodando localmente. Agora conheça as melhores interfaces para usá-lo no dia a dia.',
      label: 'Melhores interfaces para LLM local em 2026 →',
      href: '/pt/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      pt: {
        question: 'Como rodar o Qwen 3.6 ou 3.8 localmente?',
        answer: 'Instale o Ollama, execute `ollama pull qwen3.8:27b` (cerca de 18 GB) e depois `ollama run qwen3.8:27b`. Para a geração anterior, use `qwen3.6:27b`. Para uma interface gráfica, instale o LM Studio e baixe o Qwen3.8-27B (16.10 GB no catálogo do LM Studio). Aumente o tamanho de contexto para 32768 ou mais, porque o padrão do Ollama é de apenas 4k tokens em placas de vídeo com menos de 24 GiB de VRAM.',
        bullets: [
          'Hardware: placa de vídeo de 24 GB, ou Apple Silicon com 32 GB ou mais de memória unificada, para os modelos 27B',
          'Em uma placa de vídeo de 16 GB: rode o qwen3.5:9b (download de 6.6-7.6 GB), pois o download do 27B tem 17-19 GB',
          'Baixar: ollama pull qwen3.8:27b (cerca de 18 GB) ou qwen3.6:27b (cerca de 17-19 GB)',
          'Contexto: o Ollama usa 4k tokens por padrão abaixo de 24 GiB de VRAM; defina 32768 ou mais',
          'Alternativa com o LM Studio: interface gráfica, sem linha de comando, servidor local em localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Por que rodar o Qwen localmente em 2026', anchor: '#why-local' },
      { label: 'Qual modelo Qwen rodar', anchor: '#choose-model' },
      { label: 'Dá para rodar o Qwen 3.6 localmente? Hardware', anchor: '#hardware' },
      { label: 'Instalação com o Ollama', anchor: '#ollama-setup' },
      { label: 'Instalação com o LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Usar o Qwen local com o Claude Code', anchor: '#claude-code' },
      { label: 'Conectar ao PromptQuorum', anchor: '#promptquorum' },
      { label: 'Solução de problemas', anchor: '#troubleshooting' },
      { label: 'Consumo de energia e custos de uso', anchor: '#power-tco' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Dois caminhos**: Ollama (linha de comando, sem interface, pronto para API) ou LM Studio (interface gráfica, sem linha de comando). Ambos rodam o Qwen3.8-27B e o Qwen3.6-27B localmente.',
          '**Escolha do modelo**: o Qwen3.8-27B é a versão 27B mais recente no Hugging Face (Apache 2.0, segundo o model card); o Qwen3.6-27B é a geração anterior; o Qwen3.5 tem tamanhos pequenos (0.8B a 9B) para hardware mais fraco.',
          '**Hardware**: os downloads do 27B têm 17-19 GB, então uma placa de vídeo de 24 GB ou um Mac com 32 GB ou mais de memória unificada é o mínimo prático. Uma placa de vídeo de 16 GB não comporta o modelo 27B inteiro; use `qwen3.5:9b` nela.',
          '**Ajuste de contexto**: o contexto padrão do Ollama depende da VRAM (4k tokens abaixo de 24 GiB). Defina `num_ctx` ou `OLLAMA_CONTEXT_LENGTH` como 32768 ou mais, e 64k ou mais para agentes de programação.',
          '**Privacidade**: a inferência local mantém os prompts na sua máquina. Isso elimina a transferência a terceiros na etapa de inferência, mas não torna, por si só, todo o seu tratamento de dados compatível com o GDPR.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Por que rodar o Qwen localmente em 2026',
        content: [
          'Rodar o Qwen localmente significa nenhuma tarifa por token depois que você tem o hardware, nenhum prompt saindo da sua máquina e um modelo que continua funcionando offline. A equipe do Qwen publica os modelos 27B com licença Apache 2.0 no Hugging Face ([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)), então o uso comercial é permitido sob essa licença; releia sempre a licença no model card da variante exata que você baixar.',
          'A privacidade é o segundo motivo. Quando o Qwen roda no seu próprio hardware, seus prompts, seu código e os dados dos seus clientes não são enviados a um provedor de modelos, então a etapa de inferência não envolve transferência internacional de dados nos termos do [Capítulo V do GDPR](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679). Suas demais obrigações de tratamento (base legal, segurança, retenção, contratos com fornecedores do resto da sua stack) continuam valendo. Esta é uma informação geral, não é aconselhamento jurídico. O download de modelos e a verificação de atualizações ainda usam a rede; apenas a inferência roda localmente.',
          'O terceiro motivo é disponibilidade e controle: você fixa a tag exata do modelo, escolhe o tamanho de contexto e decide quando atualizar. A velocidade depende da sua placa de vídeo ou do seu Mac, da quantização e do tamanho de contexto, então meça na sua própria máquina em vez de confiar em um número publicado.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Rodar o Qwen3.8-27B ou o Qwen3.6-27B localmente não custa tarifa por token depois do hardware, mantém os prompts na sua própria máquina e exige cerca de 18 GB de memória só para o modelo.' },
          { type: 'plain-terms', text: 'LLM local significa que o modelo de IA roda no seu próprio computador. Você baixa o arquivo do modelo (cerca de 17-19 GB para um modelo Qwen 27B) e cada prompt que você digita é processado na sua máquina, em vez de ser enviado a um provedor.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qual modelo Qwen rodar localmente: 3.8, 3.6 ou 3.5',
        content: [
          'Escolha a geração mais recente que a sua memória comportar. O Qwen3.8-27B (lançado em agosto de 2026) e o Qwen3.6-27B (abril de 2026) são modelos densos com encoder de visão e contexto nativo de 262.144 tokens; o Qwen3.5 (fevereiro de 2026) oferece os tamanhos pequenos. Os model cards informam pontuações maiores para o Qwen3.8-27B do que para o Qwen3.6-27B nos benchmarks que ambos compartilham: SWE-bench Pro 61.7 contra 53.5, LiveCodeBench v6 90.3 contra 83.9, GPQA Diamond 89.2 contra 87.8 (informado pelo fornecedor nos model cards do [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) e do [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B), executado com os próprios harnesses da equipe do Qwen; trate como indicativo apenas).',
          'A tabela lista os tamanhos de download no Ollama, conforme as páginas da biblioteca do [Qwen3.8](https://ollama.com/library/qwen3.8), do [Qwen3.6](https://ollama.com/library/qwen3.6) e do [Qwen3.5](https://ollama.com/library/qwen3.5). O guia de memória é uma estimativa do PromptQuorum: tamanho do download mais 2-6 GB para o cache de contexto e o runtime, não uma medição.',
        ],
        rows: [
          { 'Modelo': 'Qwen3.8 27B', 'Tag do Ollama': 'qwen3.8:27b', 'Download': '18 GB', 'Memória (estimativa)': 'GPU de 24 GB / Mac 32 GB+' },
          { 'Modelo': 'Qwen3.8 27B Q8_0', 'Tag do Ollama': 'qwen3.8:27b-q8_0', 'Download': '30 GB', 'Memória (estimativa)': 'GPU de 40 GB+ / Mac 48 GB+' },
          { 'Modelo': 'Qwen3.6 27B', 'Tag do Ollama': 'qwen3.6:27b', 'Download': '18-19 GB', 'Memória (estimativa)': 'GPU de 24 GB / Mac 32 GB+' },
          { 'Modelo': 'Qwen3.6 35B-A3B (MoE)', 'Tag do Ollama': 'qwen3.6:35b-a3b', 'Download': '23 GB', 'Memória (estimativa)': 'GPU de 32 GB / Mac 48 GB+' },
          { 'Modelo': 'Qwen3.5 9B', 'Tag do Ollama': 'qwen3.5:9b', 'Download': '6.6-7.6 GB', 'Memória (estimativa)': 'GPU de 12-16 GB' },
          { 'Modelo': 'Qwen3.5 4B', 'Tag do Ollama': 'qwen3.5:4b', 'Download': '3.3-4.0 GB', 'Memória (estimativa)': 'GPU de 8 GB / 16 GB de RAM' },
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Download', 'Memória (estimativa)'],
        tableFormat: true,
        note: 'Use sempre a tag explícita com o tamanho, por exemplo qwen3.8:27b, porque um nome simples como qwen3.5 aponta para a versão 9B. A família Qwen3.8 também inclui modelos maiores (Qwen3.8-Flash-Next, com 125B de parâmetros no total e 6B ativos, sob a licença qwen-community-1.0, e Qwen3.8-2.4T-A95B, sob a licença qwen3.8-max). Essas licenças diferem da Apache 2.0, então leia o model card antes de qualquer uso comercial.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-pt.webp',
        imageAlt: 'Tamanhos do Qwen local: 27B ocupa cerca de 18 GB, 9B cerca de 7 GB',
        imageCaption: 'Tamanhos dos modelos Qwen para uso local, com o tamanho de download de cada versão no Ollama.',
      },
      hardware: {
        id: 'hardware',
        title: 'Dá para rodar o Qwen 3.6 localmente? Requisitos de hardware',
        content: [
          'Sim. O fator limitante é a memória: os arquivos dos modelos 27B têm 17-19 GB, e o cache de contexto e o runtime vêm por cima disso. Por isso, uma placa de vídeo com 16 GB de VRAM não comporta por inteiro um modelo 27B Q4_K_M; o Ollama dividiria as camadas entre GPU e CPU, o que é mais lento. Escolha o Qwen3.5 9B em placas de 16 GB.',
        ],
        items: [
          '**GPU de 24 GB (RTX 3090, RTX 4090)**: comporta o download do 27B Q4_K_M (17-19 GB) com alguns GB sobrando para o contexto',
          '**GPU de 32 GB (RTX 5090)**: mais espaço para contexto longo ou para a versão Qwen3.6 35B-A3B de 23 GB',
          '**GPU de 16 GB (RTX 4080, RTX 4070 Ti Super)**: use `qwen3.5:9b` (6.6-7.6 GB); um modelo 27B só roda com offload parcial para a CPU e fica bem mais lento',
          '**Apple Silicon, 32 GB de memória unificada**: o mínimo prático para um modelo 27B; o Ollama oferece versões MLX, como `qwen3.8:27b-mlx` (18 GB)',
          '**Apple Silicon, 64 GB ou mais**: folga confortável para os modelos 27B, contexto mais longo e outros aplicativos abertos ao mesmo tempo',
          '**Macs atuais**: o Mac mini com M6 oferece até 32 GB, o Mac mini com M5 Pro até 64 GB (segundo a [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/)), o Mac Studio com M5 Max até 128 GB e com M5 Ultra até 512 GB (a opção de 512 GB começa a ser enviada no fim de outubro de 2026), segundo o [anúncio do Mac Studio pela Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) e o [anúncio do M6 pela Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/). O PromptQuorum não fez benchmarks desses chips.',
          '**RAM do sistema**: 32 GB no mínimo junto com inferência na GPU; 64 GB se você também rodar um ambiente de desenvolvimento completo',
          '**Armazenamento**: pelo menos 25 GB livres para um modelo 27B (o arquivo tem 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'O Apple Silicon compartilha a memória unificada entre CPU e GPU, e o macOS reserva uma parte dela. Um Mac de 32 GB comporta um modelo de 18 GB, mas um Mac de 64 GB deixa bem mais espaço para o contexto e para outros aplicativos.' },
          { type: 'tip', text: 'Veja o que realmente está na memória com `ollama ps`: a coluna PROCESSOR mostra se o modelo roda 100% na GPU, e a coluna CONTEXT mostra o tamanho de contexto alocado.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Instalação com o Ollama',
        content: [
          'O Ollama é a forma mais rápida de rodar o Qwen localmente. Ele gerencia os downloads dos modelos, oferece uma API compatível com a da OpenAI em localhost:11434 e cuida dos arquivos GGUF para você. Instale-o em [ollama.com](https://ollama.com/download). Os passos abaixo usam `qwen3.8:27b`; troque a tag por `qwen3.6:27b` ou `qwen3.5:9b` para usar outro tamanho.',
        ],
        numberedItems: [
          { title: 'Instale o Ollama', whyItMatters: 'O Ollama cuida dos downloads dos modelos e oferece uma API local compatível com a da OpenAI.' },
          { title: 'Baixe o modelo Qwen3.8 27B com uma tag explícita', whyItMatters: 'Use qwen3.8:27b de forma explícita. O download tem cerca de 18 GB; em uma placa de vídeo de 16 GB, baixe qwen3.5:9b.' },
          { title: 'Crie um Modelfile com um tamanho de contexto maior', whyItMatters: 'O contexto padrão do Ollama é de 4k tokens em placas de vídeo com menos de 24 GiB de VRAM e de 32k entre 24 e 48 GiB. Definir num_ctx deixa o tamanho explícito em qualquer máquina.' },
          { title: 'Crie o modelo personalizado e verifique com ollama ps', whyItMatters: 'As colunas CONTEXT e PROCESSOR confirmam que o tamanho de contexto foi aplicado e que o modelo roda na GPU.' },
          { title: 'Teste o endpoint da API', whyItMatters: 'O Ollama expõe uma API compatível com a da OpenAI em localhost:11434/v1. Use esse endpoint para conectar clientes de LLM, IDEs e o PromptQuorum.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Não pule a configuração de contexto. Abaixo de 24 GiB de VRAM, o padrão do Ollama é de 4k tokens, cerca de 3.000 palavras contando a resposta, e um arquivo ou uma conversa longa é cortado. O Ollama recomenda pelo menos 64.000 tokens para agentes e ferramentas de programação; contextos maiores exigem mais memória.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-pt.webp',
        imageAlt: 'Cinco etapas do Ollama para rodar o Qwen localmente',
        imageCaption: 'Instalação do Qwen no Ollama em cinco passos: instalar, baixar, definir o tamanho de contexto, criar e verificar, testar a API.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Instalação com o LM Studio',
        content: [
          'O LM Studio oferece uma interface gráfica para rodar LLMs locais sem nenhum comando de terminal. É o caminho mais fácil para usuários não técnicos e para configurações no Windows. Baixe-o em [lmstudio.ai](https://lmstudio.ai); ele está disponível para macOS, Windows e Linux.',
        ],
        numberedItems: [
          { title: 'Baixe e instale o LM Studio', whyItMatters: 'Interface gráfica gratuita e multiplataforma para inferência de LLMs locais. Não exige linha de comando.' },
          { title: 'Procure e baixe o Qwen3.8 27B', whyItMatters: 'O catálogo do LM Studio lista o [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) com 16.10 GB nos formatos GGUF e MLX. Escolha a versão que corresponde à sua plataforma.' },
          { title: 'Defina o tamanho de contexto antes de carregar', whyItMatters: 'Aumente o Context Length nas configurações de carregamento do modelo para 32768 ou mais. Um contexto maior exige mais memória, então reduza-o se o carregamento falhar.' },
          { title: 'Inicie o servidor local', whyItMatters: 'O servidor do LM Studio oferece uma API compatível com a da OpenAI, com exemplos na documentação usando localhost:1234. Use essa URL em clientes e no PromptQuorum.' },
          { title: 'Verifique se o servidor responde', whyItMatters: 'Uma requisição ao endpoint de modelos lista o modelo carregado e confirma a porta.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'Se o modelo não carregar, reduza o tamanho de contexto ou o número de camadas na GPU, ou mude para um tamanho menor do Qwen3.5. Um modelo que não cabe na VRAM transborda para a RAM do sistema e fica bem mais lento.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'Usar o Qwen local com o Claude Code',
        content: [
          'O Ollama e o LM Studio expõem um endpoint compatível com a Anthropic, então o Claude Code pode conversar com um modelo Qwen local sem um proxy separado. O comportamento com um modelo que não é o Claude depende do modelo, principalmente da chamada de ferramentas, então teste primeiro em uma tarefa pequena.',
          'Com o Ollama, execute `ollama launch claude` ou defina você mesmo as variáveis: `ANTHROPIC_AUTH_TOKEN=ollama`, `ANTHROPIC_API_KEY=""` e `ANTHROPIC_BASE_URL=http://localhost:11434`, e depois inicie `claude --model <your-model>`. O [guia do Ollama para o Claude Code](https://docs.ollama.com/integrations/claude-code) recomenda uma janela de contexto de 64k tokens ou mais para modelos locais.',
          'Com o LM Studio, o servidor aceita `/v1/messages`: defina `ANTHROPIC_BASE_URL=http://localhost:1234` e `ANTHROPIC_AUTH_TOKEN=lmstudio`, e depois inicie `claude --model <model-id>`. Consulte a [página de compatibilidade com a Anthropic do LM Studio](https://lmstudio.ai/docs/developer/anthropic-compat) para os detalhes atuais.',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'As configurações do Claude Code podem sobrescrever as variáveis do shell. Se a conexão falhar, execute /status dentro do Claude Code para ver qual endpoint ele está usando.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Conectar ao PromptQuorum',
        content: [
          'O PromptQuorum envia um mesmo prompt a vários modelos. Para adicionar sua instância local do Qwen como destino, aponte o endpoint de modelo local do PromptQuorum para a URL do Ollama compatível com a da OpenAI e informe a tag do modelo que você criou. Confira nas configurações do aplicativo os nomes atuais dos campos.',
          'Use `http://localhost:11434/v1` para o Ollama ou `http://localhost:1234/v1` para o LM Studio. Se um formulário exigir uma chave de API, informe qualquer texto não vazio, porque nenhum dos dois servidores exige autenticação por chave por padrão. Os provedores em nuvem mantêm sua própria configuração, separada.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Conecte o PromptQuorum ao Qwen local informando http://localhost:11434/v1 como endpoint e a tag do modelo que você criou, por exemplo qwen3.8-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Solução de problemas',
        items: [
          '**A resposta do modelo é cortada ou ignora o início de um prompt longo**: o tamanho de contexto está baixo demais. Refaça o Modelfile com um `PARAMETER num_ctx` maior, recrie o modelo com `ollama create` e confirme o valor com `ollama ps`.',
          '**Erro CUDA out of memory ou geração muito lenta**: o modelo mais o contexto não cabem na VRAM. Mude para um tamanho menor (`qwen3.5:9b`), reduza o tamanho de contexto ou escolha uma tag de quantização menor.',
          '**A API do Ollama retorna 404**: o nome do modelo não corresponde. Execute `ollama list` e use o nome exato exibido (por exemplo `qwen3.8-32k`).',
          '**Geração lenta**: execute `ollama ps`. Se PROCESSOR mostrar uma divisão CPU/GPU em vez de 100% GPU, o modelo não cabe na VRAM; reduza o contexto ou o tamanho do modelo e feche outros aplicativos que usam muito a GPU.',
          '**O LM Studio mostra "failed to load model"**: memória insuficiente. Reduza o tamanho de contexto, diminua o offload para a GPU ou escolha um modelo menor.',
          '**O PromptQuorum retorna um erro de autenticação**: se o formulário exigir uma chave, informe qualquer texto não vazio. O Ollama não exige autenticação por chave de API por padrão.',
          '**O Ollama usa a CPU em vez da GPU**: em placas NVIDIA, confirme que o driver está instalado (`nvidia-smi` deve listar a GPU). No Mac, o Ollama usa o Metal automaticamente; reinstale o Ollama a partir de ollama.com se isso não acontecer.',
          '**O download do modelo trava ou falha**: execute `ollama pull qwen3.8:27b` de novo; o Ollama retoma de onde parou. Como alternativa, baixe um GGUF do [Hugging Face](https://huggingface.co/Qwen) e indique seu caminho local na linha FROM do Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'Execute `ollama ps` para ver quais modelos estão carregados, quanta memória usam e o contexto alocado. Use `ollama stop <model>` para descarregar um modelo antes de carregar outro.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Consumo de energia e custos de uso',
        content: [
          'O hardware é o custo único; a eletricidade e, para a comparação, as tarifas de API são os custos de uso. Os valores abaixo são suposições para um exemplo de cálculo, não medições: o PromptQuorum não mediu o consumo desses sistemas, e a potência varia conforme o modelo, o contexto e a placa de vídeo.',
          'Exemplo para uma workstation com GPU: uma potência assumida de 450 W, 8 horas por dia, 250 dias úteis e um preço de eletricidade assumido de 0.35 EUR/kWh resultam em 0.45 kW x 8 h x 250 dias x 0.35 EUR = **315 EUR por ano**. Um Mac com potência assumida de 50 W na mesma rotina resulta em 0.05 kW x 8 h x 250 dias x 0.35 EUR = **35 EUR por ano**.',
          'Comparação com a API: a Anthropic lista o Claude Sonnet 5 a $2 por milhão de tokens de entrada e $10 por milhão de tokens de saída na sua [página de preços](https://platform.claude.com/docs/en/about-claude/pricing). Uma carga de 10 milhões de tokens por dia ao longo de 250 dias dá 2.500 milhões de tokens por ano, o que equivale a $5,000 se todos os tokens forem de entrada e $25,000 se todos forem de saída. Cargas reais misturam os dois, então sua fatura fica entre esses limites. Os preços mudam; confira a página antes de decidir.',
          'Ponto de equilíbrio em meses = preço do hardware / (custo mensal da API - eletricidade mensal). Use os preços de varejo atuais do seu mercado para o preço do hardware e o seu próprio volume de tokens para o custo da API.',
        ],
        rows: [
          { 'Opção': 'Workstation com GPU', 'Potência assumida': '450 W', 'Energia/ano': '315 EUR', 'Custo de API/ano': '$0 (local)' },
          { 'Opção': 'Mac (Apple Silicon)', 'Potência assumida': '50 W', 'Energia/ano': '35 EUR', 'Custo de API/ano': '$0 (local)' },
          { 'Opção': 'API do Claude Sonnet 5', 'Potência assumida': 'n/d', 'Energia/ano': 'n/d', 'Custo de API/ano': '$5,000-25,000' },
        ],
        columns: ['Opção', 'Potência assumida', 'Energia/ano', 'Custo de API/ano'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'São estimativas ilustrativas para 10 milhões de tokens por dia. Modelos locais e modelos hospedados diferem em qualidade e capacidade, então compare o custo junto com os resultados de que você precisa, não apenas pelo preço.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Guia de implantação local do Qwen: faixas de hardware para os modelos Qwen](/pt/local-llms/qwen-local-deployment-guide-2026)',
          '[Rodar o Qwen-VL localmente para entrada de imagens](/pt/local-llms/run-qwen-vl-locally-2026)',
          '[Qwen vs Llama vs Mistral para uso local](/pt/local-llms/qwen-vs-llama-vs-mistral)',
          '[Melhores LLMs locais para programação](/pt/local-llms/best-local-llms-for-coding)',
          '[Quanta VRAM você precisa para um LLM local?](/pt/local-llms/how-much-vram-local-llm)',
          '[Por que empresas da UE estão migrando para o Qwen local](/pt/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Ver todos os guias de LLM local](/pt/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Qual é o hardware mínimo para rodar o Qwen 3.6 ou 3.8 localmente?', a: 'Para os modelos 27B, conte com uma placa de vídeo de 24 GB ou um Mac com Apple Silicon e 32 GB ou mais de memória unificada, porque os downloads do Ollama têm 17-19 GB e o cache de contexto vem por cima. Para hardware menor, use o Qwen3.5: a versão 9B tem download de 6.6-7.6 GB e a versão 4B de 3.3-4.0 GB. O guia de memória é uma estimativa, não uma medição.' },
          { q: 'Posso rodar o Qwen 3.6 27B com 16 GB de VRAM?', a: 'Não por completo. O download do qwen3.6:27b tem 18-19 GB (a tag q4_K_M tem 17 GB), o que é maior que 16 GB antes mesmo de contar o cache de contexto. O Ollama pode dividir as camadas entre GPU e CPU, mas a geração fica bem mais lenta. Em uma placa de vídeo de 16 GB, rode o qwen3.5:9b (6.6-7.6 GB).' },
          { q: 'Por que o Ollama corta os meus prompts?', a: 'O tamanho de contexto padrão do Ollama depende da VRAM: 4k tokens abaixo de 24 GiB, 32k de 24 a 48 GiB e 256k a partir de 48 GiB. Tudo o que passar do contexto alocado é cortado. Defina `PARAMETER num_ctx 32768` em um Modelfile ou inicie o servidor com `OLLAMA_CONTEXT_LENGTH`, e confirme o valor com `ollama ps`. O Ollama recomenda pelo menos 64.000 tokens para agentes e ferramentas de programação.' },
          { q: 'Qual Qwen devo rodar: 3.8, 3.6 ou 3.5?', a: 'Escolha o Qwen3.8-27B se você tem cerca de 24 GB de memória de GPU ou um Mac com 32 GB ou mais; o model card dele informa pontuações maiores que as do Qwen3.6-27B em benchmarks compartilhados (informado pelo fornecedor). Escolha o Qwen3.6-27B ou a versão mixture-of-experts 35B-A3B se quiser a geração anterior. Escolha o Qwen3.5 (0.8B a 9B) para hardware mais fraco.' },
          { q: 'Rodar o Qwen localmente está em conformidade com o GDPR?', a: 'A inferência local mantém os prompts na sua própria máquina, então a etapa de inferência não envolve transferência a um provedor de modelos terceiro. Isso não torna todo o seu tratamento de dados compatível por si só: base legal, segurança, retenção e contratos do resto da sua stack continuam valendo. Esta é uma informação geral, não é aconselhamento jurídico; consulte o seu encarregado de proteção de dados.' },
          { q: 'O Qwen roda só na CPU?', a: 'Sim, pelo llama.cpp ou pelo Ollama em um sistema sem placa de vídeo, mas é bem mais lento que a inferência na GPU, e a velocidade depende da sua CPU e da largura de banda da memória. Use um tamanho pequeno, como o Qwen3.5 4B ou 9B, para uso apenas com CPU, e espere que um modelo 27B seja impraticável para conversa em tempo real.' },
          { q: 'Como atualizo o Qwen para uma versão mais nova?', a: 'Execute `ollama pull qwen3.8:27b` de novo. O Ollama baixa apenas as camadas alteradas se a tag tiver sido atualizada. Uma tag sempre aponta para a versão publicada para ela, então uma geração mais nova (por exemplo, um futuro lançamento do Qwen) exige uma nova tag. No LM Studio, confira o catálogo de modelos para ver se há uma versão mais nova.' },
          { q: 'Posso usar o Claude Code com o Qwen local?', a: 'Sim. O Ollama e o LM Studio expõem um endpoint compatível com a Anthropic. Com o Ollama, execute `ollama launch claude` ou defina ANTHROPIC_BASE_URL como http://localhost:11434; com o LM Studio, defina como http://localhost:1234. Nenhuma chave de API da Anthropic é necessária para a conexão local. Use um contexto de 64k tokens ou mais e teste primeiro a chamada de ferramentas em uma tarefa pequena.' },
          { q: 'O Qwen é gratuito para uso comercial?', a: 'Os model cards do Qwen3.8-27B, do Qwen3.6-27B e do Qwen3.5-9B listam a licença Apache 2.0, que permite uso comercial conforme seus termos. Outros modelos Qwen3.8 usam licenças diferentes (Qwen3.8-Flash-Next: qwen-community-1.0, Qwen3.8-2.4T-A95B: qwen3.8-max), então leia a licença no card do modelo exato que você baixar.' },
          { q: 'Devo usar o Ollama ou o LM Studio?', a: 'Use o Ollama para um servidor sem interface, scripts, plugins de IDE e o PromptQuorum. Use o LM Studio para um navegador de modelos visual e uma janela de chat. Ambos podem servir uma API compatível com a da OpenAI, e ambos podem atender o Claude Code por um endpoint compatível com a Anthropic, então você pode rodar qualquer um e trocar depois.' },
        ],
      },
    },
  },
  de: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Qwen lokal installieren 2026: Qwen 3.6 und Qwen 3.8 mit Ollama und LM Studio',
    seoTitle: 'Qwen lokal installieren 2026: Qwen 3.6 & 3.8 mit Ollama',
    intro: 'Qwen3.8-27B und Qwen3.6-27B sind dichte Modelle mit 27 Milliarden Parametern, die sich lokal mit Ollama oder LM Studio betreiben lassen. Der Ollama-Download umfasst etwa 18 GB. Praktischer Einstieg ist daher eine 24-GB-GPU oder ein Mac mit 32 GB oder mehr Unified Memory; 16-GB-GPUs sollten eine kleinere Qwen3.5-Größe verwenden. Dieser Leitfaden behandelt die Modellwahl, die tatsächlichen Download-Größen, die Einstellung der Kontextlänge, die Einrichtung von Ollama und LM Studio, Claude Code, die Fehlerbehebung und die Betriebskosten.',
    metaDescription: 'Qwen 3.6 oder 3.8 (27B) lokal installieren: reale Download-Größen für Ollama und LM Studio, 24-GB-GPU oder Mac ab 32 GB, Kontext-Fix, Claude Code.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-de.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10 Min. Lesezeit',
    educationalLevel: 'Beginner',
    audience: 'Entwickler, die zum ersten Mal ein lokales LLM einrichten, und EU-Teams, die eine DSGVO-konforme KI suchen',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**Ja, Sie können Qwen 3.6 und Qwen 3.8 lokal installieren: Installieren Sie Ollama und führen Sie `ollama run qwen3.8:27b` aus (etwa 18 GB Download), auf einer 24-GB-GPU oder einem Mac mit 32 GB oder mehr Unified Memory. Für die Vorgängergeneration nutzen Sie `qwen3.6:27b`, auf einer 16-GB-GPU `qwen3.5:9b` (etwa 7 GB). Ollama legt die Standard-Kontextlänge nach dem VRAM fest (4k Tokens unter 24 GiB); erhöhen Sie sie daher auf 32768 oder mehr.**',
    nextStep: {
      text: 'Qwen läuft lokal. Entdecken Sie jetzt die besten Oberflächen, mit denen es sich bequem nutzen lässt.',
      label: 'Beste lokale LLM-Frontends 2026 →',
      href: '/de/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      de: {
        question: 'Wie kann ich Qwen 3.6 oder 3.8 lokal installieren?',
        answer: 'Installieren Sie Ollama, führen Sie `ollama pull qwen3.8:27b` aus (etwa 18 GB) und dann `ollama run qwen3.8:27b`. Für die Vorgängergeneration verwenden Sie `qwen3.6:27b`. Für eine grafische Oberfläche installieren Sie LM Studio und laden Qwen3.8-27B herunter (16,10 GB im LM-Studio-Katalog). Erhöhen Sie die Kontextlänge auf 32768 oder mehr, denn der Ollama-Standard liegt auf GPUs mit weniger als 24 GiB VRAM nur bei 4k Tokens.',
        bullets: [
          'Hardware: 24-GB-GPU oder Apple Silicon mit 32 GB oder mehr Unified Memory für die 27B-Modelle',
          'Auf einer 16-GB-GPU: stattdessen qwen3.5:9b (6,6-7,6 GB Download) verwenden, denn der 27B-Download umfasst 17-19 GB',
          'Download: ollama pull qwen3.8:27b (etwa 18 GB) oder qwen3.6:27b (etwa 17-19 GB)',
          'Kontext: Ollama nutzt unter 24 GiB VRAM standardmäßig 4k Tokens; stellen Sie 32768 oder mehr ein',
          'Alternative LM Studio: grafische Oberfläche, keine Kommandozeile nötig, lokaler Server auf localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Warum Qwen 2026 lokal betreiben', anchor: '#why-local' },
      { label: 'Welches Qwen-Modell Sie wählen sollten', anchor: '#choose-model' },
      { label: 'Qwen 3.6 lokal: Hardware-Anforderungen', anchor: '#hardware' },
      { label: 'Einrichtung mit Ollama', anchor: '#ollama-setup' },
      { label: 'Einrichtung mit LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Lokales Qwen mit Claude Code nutzen', anchor: '#claude-code' },
      { label: 'Anbindung an PromptQuorum', anchor: '#promptquorum' },
      { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
      { label: 'Stromverbrauch und Betriebskosten', anchor: '#power-tco' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Zwei Wege**: Ollama (Kommandozeile, ohne Oberfläche, API-fähig) oder LM Studio (grafische Oberfläche, keine Kommandozeile). Beide führen Qwen3.8-27B und Qwen3.6-27B lokal aus.',
          '**Modellwahl**: Qwen3.8-27B ist die neueste 27B-Version auf Hugging Face (laut Modellkarte Apache-2.0-Lizenz); Qwen3.6-27B ist die Vorgängergeneration; Qwen3.5 bietet kleine Größen (0,8B bis 9B) für schwächere Hardware.',
          '**Hardware**: Die 27B-Downloads umfassen 17-19 GB, daher sind eine 24-GB-GPU oder ein Mac mit 32 GB oder mehr Unified Memory die praktische Untergrenze. Eine 16-GB-GPU kann das komplette 27B-Modell nicht aufnehmen; verwenden Sie dort `qwen3.5:9b`.',
          '**Kontext-Fix**: Der Ollama-Standardkontext hängt vom VRAM ab (4k Tokens unter 24 GiB). Setzen Sie `num_ctx` oder `OLLAMA_CONTEXT_LENGTH` auf 32768 oder mehr, für Coding-Agenten auf 64k oder mehr.',
          '**Datenschutz**: Lokale Inferenz hält Ihre Prompts auf Ihrem Rechner. Das beseitigt die Übermittlung an Dritte für den Inferenzschritt, macht Ihre übrige Verarbeitung aber nicht von selbst DSGVO-konform.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Warum Qwen 2026 lokal betreiben',
        content: [
          'Qwen lokal zu betreiben bedeutet: keine Gebühr pro Token, sobald die Hardware vorhanden ist, kein Prompt verlässt Ihren Rechner, und das Modell funktioniert auch offline. Das Qwen-Team veröffentlicht die 27B-Modelle unter Apache-2.0-Lizenz auf Hugging Face ([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)), die kommerzielle Nutzung ist unter dieser Lizenz also erlaubt; lesen Sie die Lizenz auf der Modellkarte der jeweils heruntergeladenen Variante trotzdem immer erneut.',
          'Der Datenschutz ist der zweite Grund. Läuft Qwen auf Ihrer eigenen Hardware, werden Ihre Prompts, Ihr Code und Kundendaten nicht an einen Modellanbieter gesendet, sodass der Inferenzschritt keine grenzüberschreitende Übermittlung nach [DSGVO Kapitel V](https://eur-lex.europa.eu/legal-content/de/TXT/?uri=celex%3A32016R0679) umfasst. Ihre übrigen Pflichten (Rechtsgrundlage, Sicherheit, Speicherdauer, Auftragsverarbeitungsverträge für den Rest Ihres Stacks) gelten weiterhin. Dies sind allgemeine Informationen und keine Rechtsberatung. Das Herunterladen von Modellen und die Prüfung auf Updates nutzen weiterhin das Netzwerk; nur die Inferenz läuft lokal.',
          'Der dritte Grund sind Verfügbarkeit und Kontrolle: Sie legen den genauen Modell-Tag fest, wählen die Kontextlänge und entscheiden selbst, wann Sie aktualisieren. Die Geschwindigkeit hängt von Ihrer GPU oder Ihrem Mac, der Quantisierung und der Kontextlänge ab; messen Sie sie daher auf Ihrem eigenen Rechner, statt sich auf einen veröffentlichten Wert zu verlassen.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.8-27B oder Qwen3.6-27B lokal zu betreiben kostet nach der Hardware keine Gebühr pro Token, hält Prompts auf Ihrem eigenen Rechner und benötigt allein für das Modell etwa 18 GB Speicher.' },
          { type: 'plain-terms', text: 'Lokales LLM bedeutet, dass das KI-Modell auf Ihrem eigenen Computer läuft. Sie laden die Modelldatei herunter (etwa 17-19 GB für ein 27B-Qwen-Modell), und jeder Prompt, den Sie eingeben, wird auf Ihrem Rechner verarbeitet, statt an einen Anbieter gesendet zu werden.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Welches Qwen-Modell lokal: 3.8, 3.6 oder 3.5',
        content: [
          'Wählen Sie die neueste Generation, die Ihr Speicher zulässt. Qwen3.8-27B (veröffentlicht im August 2026) und Qwen3.6-27B (April 2026) sind dichte Modelle mit Vision-Encoder und nativem Kontext von 262.144 Tokens; Qwen3.5 (Februar 2026) bietet die kleinen Größen. Die Modellkarten nennen für Qwen3.8-27B höhere Werte als für Qwen3.6-27B bei den gemeinsamen Benchmarks: SWE-bench Pro 61,7 gegenüber 53,5, LiveCodeBench v6 90,3 gegenüber 83,9, GPQA Diamond 89,2 gegenüber 87,8 (Herstellerangaben auf den Modellkarten [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) und [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B), ermittelt mit den eigenen Testumgebungen des Qwen-Teams, daher nur als Anhaltspunkt zu verstehen).',
          'Die Tabelle nennt die Ollama-Download-Größen von den Bibliotheksseiten [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.6](https://ollama.com/library/qwen3.6) und [Qwen3.5](https://ollama.com/library/qwen3.5). Der Speicherrichtwert ist eine Schätzung von PromptQuorum: Download-Größe plus 2-6 GB für Kontext-Cache und Laufzeit, keine Messung.',
        ],
        rows: [
          { Modell: 'Qwen3.8 27B', 'Ollama-Tag': 'qwen3.8:27b', Download: '18 GB', 'Speicher (Schätzung)': '24-GB-GPU / Mac ab 32 GB' },
          { Modell: 'Qwen3.8 27B Q8_0', 'Ollama-Tag': 'qwen3.8:27b-q8_0', Download: '30 GB', 'Speicher (Schätzung)': 'GPU ab 40 GB / Mac ab 48 GB' },
          { Modell: 'Qwen3.6 27B', 'Ollama-Tag': 'qwen3.6:27b', Download: '18-19 GB', 'Speicher (Schätzung)': '24-GB-GPU / Mac ab 32 GB' },
          { Modell: 'Qwen3.6 35B-A3B (MoE)', 'Ollama-Tag': 'qwen3.6:35b-a3b', Download: '23 GB', 'Speicher (Schätzung)': '32-GB-GPU / Mac ab 48 GB' },
          { Modell: 'Qwen3.5 9B', 'Ollama-Tag': 'qwen3.5:9b', Download: '6,6-7,6 GB', 'Speicher (Schätzung)': 'GPU mit 12-16 GB' },
          { Modell: 'Qwen3.5 4B', 'Ollama-Tag': 'qwen3.5:4b', Download: '3,3-4,0 GB', 'Speicher (Schätzung)': '8-GB-GPU / 16 GB RAM' },
        ],
        columns: ['Modell', 'Ollama-Tag', 'Download', 'Speicher (Schätzung)'],
        tableFormat: true,
        note: 'Verwenden Sie immer den expliziten Tag mit der Größe, zum Beispiel qwen3.8:27b, denn ein bloßer Name wie qwen3.5 verweist auf die 9B-Variante. Zur Qwen3.8-Familie gehören außerdem größere Modelle (Qwen3.8-Flash-Next mit insgesamt 125B und 6B aktiven Parametern unter der Lizenz qwen-community-1.0 sowie Qwen3.8-2.4T-A95B unter der Lizenz qwen3.8-max). Diese Lizenzen unterscheiden sich von Apache 2.0; lesen Sie daher vor einer kommerziellen Nutzung die Modellkarte.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-de.webp',
        imageAlt: 'Qwen-Modellgrößen lokal: 27B braucht etwa 18 GB, 9B etwa 7 GB',
        imageCaption: 'Qwen-Modellgrößen für die lokale Nutzung, jeweils mit der Ollama-Download-Größe der Variante.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen 3.6 lokal ausführen: Hardware-Anforderungen',
        content: [
          'Ja. Begrenzender Faktor ist der Speicher: Die 27B-Modelldateien umfassen 17-19 GB, hinzu kommen Kontext-Cache und Laufzeit. Eine GPU mit 16 GB VRAM kann daher ein 27B-Modell in Q4_K_M nicht vollständig aufnehmen; Ollama würde Schichten zwischen GPU und CPU aufteilen, was langsamer ist. Wählen Sie auf 16-GB-Karten Qwen3.5 9B.',
        ],
        items: [
          '**24-GB-GPU (RTX 3090, RTX 4090)**: nimmt den 27B-Q4_K_M-Download (17-19 GB) auf und lässt einige GB für den Kontext frei',
          '**32-GB-GPU (RTX 5090)**: mehr Platz für langen Kontext oder für die 23 GB große Variante Qwen3.6 35B-A3B',
          '**16-GB-GPU (RTX 4080, RTX 4070 Ti Super)**: verwenden Sie `qwen3.5:9b` (6,6-7,6 GB); ein 27B-Modell läuft hier nur mit teilweiser CPU-Auslagerung und ist deutlich langsamer',
          '**Apple Silicon, 32 GB Unified Memory**: das praktische Minimum für ein 27B-Modell; Ollama bietet MLX-Builds wie `qwen3.8:27b-mlx` (18 GB)',
          '**Apple Silicon, 64 GB oder mehr**: komfortabler Spielraum für die 27B-Modelle, längeren Kontext und weitere gleichzeitig geöffnete Anwendungen',
          '**Aktuelle Macs**: Der Mac mini mit M6 bietet bis zu 32 GB, der Mac mini mit M5 Pro bis zu 64 GB (laut [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/)), der Mac Studio mit M5 Max bis zu 128 GB und mit M5 Ultra bis zu 512 GB (die Option mit 512 GB wird ab Ende Oktober 2026 ausgeliefert), laut der [Ankündigung des Mac Studio von Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) und der [Ankündigung des M6 von Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/). PromptQuorum hat diese Chips nicht per Benchmark getestet.',
          '**Arbeitsspeicher (RAM)**: mindestens 32 GB bei GPU-Inferenz; 64 GB, wenn Sie zusätzlich eine vollständige Entwicklungsumgebung betreiben',
          '**Speicherplatz**: mindestens 25 GB frei für ein 27B-Modell (die Datei umfasst 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon teilt den Unified Memory zwischen CPU und GPU, und macOS reserviert einen Teil davon. Ein Mac mit 32 GB kann ein Modell mit 18 GB aufnehmen, ein Mac mit 64 GB lässt aber deutlich mehr Platz für Kontext und andere Anwendungen.' },
          { type: 'tip', text: 'Prüfen Sie mit `ollama ps`, was tatsächlich im Speicher liegt: Die Spalte PROCESSOR zeigt, ob das Modell zu 100 % auf der GPU läuft, die Spalte CONTEXT die zugewiesene Kontextlänge.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Einrichtung mit Ollama',
        content: [
          'Ollama ist der schnellste Weg, Qwen lokal auszuführen. Es verwaltet Modell-Downloads, stellt unter localhost:11434 eine OpenAI-kompatible API bereit und kümmert sich um GGUF-Dateien. Installieren Sie es von [ollama.com](https://ollama.com/download). Die folgenden Schritte verwenden `qwen3.8:27b`; ersetzen Sie den Tag durch `qwen3.6:27b` oder `qwen3.5:9b`, um eine andere Größe zu nutzen.',
        ],
        numberedItems: [
          { title: 'Ollama installieren', whyItMatters: 'Ollama übernimmt die Modell-Downloads und stellt eine OpenAI-kompatible lokale API bereit.' },
          { title: 'Das Modell Qwen3.8 27B mit explizitem Tag laden', whyItMatters: 'Verwenden Sie ausdrücklich qwen3.8:27b. Der Download umfasst etwa 18 GB; laden Sie auf einer 16-GB-GPU stattdessen qwen3.5:9b.' },
          { title: 'Eine Modelfile mit größerer Kontextlänge erstellen', whyItMatters: 'Der Ollama-Standardkontext beträgt auf GPUs mit weniger als 24 GiB VRAM 4k Tokens und bei 24-48 GiB 32k. Mit num_ctx legen Sie die Länge auf jedem Rechner ausdrücklich fest.' },
          { title: 'Das eigene Modell bauen und mit ollama ps prüfen', whyItMatters: 'Die Spalten CONTEXT und PROCESSOR bestätigen, dass die Kontextlänge übernommen wurde und das Modell auf der GPU läuft.' },
          { title: 'Den API-Endpunkt testen', whyItMatters: 'Ollama stellt unter localhost:11434/v1 eine OpenAI-kompatible API bereit. Verwenden Sie diesen Endpunkt, um LLM-Clients, IDEs und PromptQuorum zu verbinden.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Überspringen Sie die Kontexteinstellung nicht. Unter 24 GiB VRAM liegt der Ollama-Standard bei 4k Tokens, grob 3.000 Wörtern einschließlich der Antwort, und eine lange Datei oder ein langes Gespräch wird abgeschnitten. Ollama empfiehlt für Agenten und Coding-Werkzeuge mindestens 64.000 Tokens; größere Kontexte benötigen mehr Speicher.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-de.webp',
        imageAlt: 'Fünf Ollama-Schritte zum lokalen Betrieb von Qwen',
        imageCaption: 'Ollama-Einrichtung für Qwen in fünf Schritten: installieren, laden, Kontextlänge festlegen, bauen und prüfen, API testen.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Einrichtung mit LM Studio',
        content: [
          'LM Studio bietet eine grafische Oberfläche, um lokale LLMs ohne Kommandozeilenbefehle auszuführen. Es ist der einfachere Weg für nicht technische Nutzer und für Windows-Setups. Laden Sie es von [lmstudio.ai](https://lmstudio.ai) herunter; es ist für macOS, Windows und Linux verfügbar.',
        ],
        numberedItems: [
          { title: 'LM Studio herunterladen und installieren', whyItMatters: 'Kostenlose, plattformübergreifende grafische Oberfläche für lokale LLM-Inferenz. Keine Kommandozeile erforderlich.' },
          { title: 'Qwen3.8 27B suchen und herunterladen', whyItMatters: 'Der LM-Studio-Katalog führt [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) mit 16,10 GB in den Formaten GGUF und MLX. Wählen Sie die Variante, die zu Ihrer Plattform passt.' },
          { title: 'Die Kontextlänge vor dem Laden festlegen', whyItMatters: 'Erhöhen Sie Context Length in den Ladeeinstellungen des Modells auf 32768 oder mehr. Ein längerer Kontext benötigt mehr Speicher; verringern Sie ihn, wenn das Laden fehlschlägt.' },
          { title: 'Den lokalen Server starten', whyItMatters: 'Der LM-Studio-Server stellt eine OpenAI-kompatible API bereit; die Beispiele in der Dokumentation verwenden localhost:1234. Nutzen Sie diese URL in Clients und in PromptQuorum.' },
          { title: 'Prüfen, ob der Server antwortet', whyItMatters: 'Eine Anfrage an den Models-Endpunkt listet das geladene Modell auf und bestätigt den Port.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'Wenn das Modell nicht lädt, verringern Sie die Kontextlänge oder die Anzahl der GPU-Schichten oder wechseln Sie zu einer kleineren Qwen3.5-Größe. Ein Modell, das nicht in den VRAM passt, läuft in den Arbeitsspeicher über und wird deutlich langsamer.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'Lokales Qwen mit Claude Code nutzen',
        content: [
          'Ollama und LM Studio stellen beide einen Anthropic-kompatiblen Endpunkt bereit, sodass Claude Code ohne separaten Proxy mit einem lokalen Qwen-Modell arbeiten kann. Das Verhalten mit einem Nicht-Claude-Modell hängt vom Modell ab, insbesondere beim Tool-Calling; testen Sie es daher zuerst an einer kleinen Aufgabe.',
          'Mit Ollama führen Sie `ollama launch claude` aus oder setzen die Variablen selbst: `ANTHROPIC_AUTH_TOKEN=ollama`, `ANTHROPIC_API_KEY=""` und `ANTHROPIC_BASE_URL=http://localhost:11434`, und starten dann `claude --model <your-model>`. Die [Ollama-Anleitung zu Claude Code](https://docs.ollama.com/integrations/claude-code) empfiehlt für lokale Modelle ein Kontextfenster von 64k Tokens oder mehr.',
          'Mit LM Studio akzeptiert der Server `/v1/messages`: Setzen Sie `ANTHROPIC_BASE_URL=http://localhost:1234` und `ANTHROPIC_AUTH_TOKEN=lmstudio` und starten Sie dann `claude --model <model-id>`. Aktuelle Details finden Sie auf der [Seite zur Anthropic-Kompatibilität von LM Studio](https://lmstudio.ai/docs/developer/anthropic-compat).',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Einstellungen von Claude Code können Shell-Variablen überschreiben. Schlägt die Verbindung fehl, führen Sie in Claude Code /status aus, um zu sehen, welchen Endpunkt es verwendet.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Anbindung an PromptQuorum',
        content: [
          'PromptQuorum sendet einen Prompt an mehrere Modelle. Um Ihre lokale Qwen-Instanz als Ziel hinzuzufügen, richten Sie den lokalen Modell-Endpunkt in PromptQuorum auf die OpenAI-kompatible Ollama-URL und tragen den Modell-Tag ein, den Sie gebaut haben. Die aktuellen Feldnamen finden Sie in den App-Einstellungen.',
          'Verwenden Sie `http://localhost:11434/v1` für Ollama oder `http://localhost:1234/v1` für LM Studio. Verlangt ein Formular einen API-Schlüssel, geben Sie eine beliebige nicht leere Zeichenfolge ein, denn keiner der beiden Server erfordert standardmäßig eine Schlüssel-Authentifizierung. Cloud-Anbieter behalten ihre eigene, getrennte Konfiguration.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Verbinden Sie PromptQuorum mit lokalem Qwen, indem Sie http://localhost:11434/v1 als Endpunkt und den von Ihnen gebauten Modell-Tag eintragen, zum Beispiel qwen3.8-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Fehlerbehebung',
        items: [
          '**Die Antwort bricht ab oder der Anfang eines langen Prompts wird ignoriert**: Die Kontextlänge ist zu niedrig. Erstellen Sie die Modelfile mit einem größeren `PARAMETER num_ctx` neu, legen Sie das Modell mit `ollama create` erneut an und prüfen Sie den Wert mit `ollama ps`.',
          '**Fehler „CUDA out of memory“ oder sehr langsame Generierung**: Modell und Kontext passen zusammen nicht in den VRAM. Wechseln Sie zu einer kleineren Größe (`qwen3.5:9b`), verringern Sie die Kontextlänge oder wählen Sie einen Tag mit kleinerer Quantisierung.',
          '**Die Ollama-API liefert 404**: Der Modellname stimmt nicht. Führen Sie `ollama list` aus und verwenden Sie genau den angezeigten Namen (zum Beispiel `qwen3.8-32k`).',
          '**Langsame Generierung**: Führen Sie `ollama ps` aus. Zeigt PROCESSOR eine Aufteilung zwischen CPU und GPU statt 100 % GPU, passt das Modell nicht in den VRAM; verringern Sie Kontext oder Modellgröße und schließen Sie andere GPU-intensive Anwendungen.',
          '**LM Studio meldet „failed to load model“**: Es ist nicht genug Speicher vorhanden. Verringern Sie die Kontextlänge, reduzieren Sie das GPU-Offload oder wählen Sie ein kleineres Modell.',
          '**PromptQuorum meldet einen Authentifizierungsfehler**: Verlangt das Formular einen Schlüssel, geben Sie eine beliebige nicht leere Zeichenfolge ein. Ollama erfordert standardmäßig keine API-Schlüssel-Authentifizierung.',
          '**Ollama nutzt die CPU statt der GPU**: Prüfen Sie unter NVIDIA, ob der Treiber installiert ist (`nvidia-smi` sollte die GPU auflisten). Auf einem Mac verwendet Ollama Metal automatisch; installieren Sie Ollama von ollama.com neu, falls das nicht der Fall ist.',
          '**Der Modell-Download stockt oder schlägt fehl**: Führen Sie `ollama pull qwen3.8:27b` erneut aus; Ollama setzt dort fort, wo es aufgehört hat. Alternativ laden Sie eine GGUF-Datei von [Hugging Face](https://huggingface.co/Qwen) herunter und verweisen in der FROM-Zeile der Modelfile auf ihren lokalen Pfad.',
        ],
        callouts: [
          { type: 'tip', text: 'Mit `ollama ps` sehen Sie, welche Modelle geladen sind, wie viel Speicher sie belegen und welcher Kontext zugewiesen ist. Mit `ollama stop <model>` entladen Sie ein Modell, bevor Sie ein anderes laden.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Stromverbrauch und Betriebskosten',
        content: [
          'Die Hardware ist die einmalige Investition; laufende Kosten sind Strom und, für den Vergleich, API-Gebühren. Die folgenden Werte sind Annahmen für ein Rechenbeispiel, keine Messwerte: PromptQuorum hat diese Systeme nicht gemessen, und die Leistungsaufnahme schwankt je nach Modell, Kontext und GPU.',
          'Beispiel für eine GPU-Workstation: Bei angenommenen 450 W Leistungsaufnahme, 8 Stunden pro Tag, 250 Arbeitstagen und einem angenommenen Strompreis von 0,35 €/kWh ergibt sich 0,45 kW x 8 h x 250 Tage x 0,35 € = **315 € pro Jahr**. Ein Mac mit angenommenen 50 W ergibt im gleichen Zeitplan 0,05 kW x 8 h x 250 Tage x 0,35 € = **35 € pro Jahr**.',
          'API-Vergleich: Anthropic listet Claude Sonnet 5 auf seiner [Preisseite](https://platform.claude.com/docs/en/about-claude/pricing) mit $2 pro Million Eingabe-Tokens und $10 pro Million Ausgabe-Tokens. Eine Last von 10 Millionen Tokens pro Tag über 250 Tage sind 2.500 Millionen Tokens pro Jahr, also $5,000, wenn alle Tokens Eingabe sind, und $25,000, wenn alle Ausgabe sind. Reale Lasten mischen beides, Ihre Rechnung liegt also zwischen diesen Grenzen. Preise ändern sich; prüfen Sie die Seite, bevor Sie sich entscheiden.',
          'Amortisation in Monaten = Hardwarepreis / (monatliche API-Kosten - monatlicher Strom). Verwenden Sie für den Hardwarepreis aktuelle Handelspreise Ihres Marktes und für die API-Kosten Ihr eigenes Token-Volumen.',
        ],
        rows: [
          { Option: 'GPU-Workstation', 'Angenommene Leistung': '450 W', 'Strom pro Jahr': '315 €', 'API-Kosten pro Jahr': '$0 (lokal)' },
          { Option: 'Mac (Apple Silicon)', 'Angenommene Leistung': '50 W', 'Strom pro Jahr': '35 €', 'API-Kosten pro Jahr': '$0 (lokal)' },
          { Option: 'Claude Sonnet 5 API', 'Angenommene Leistung': 'k. A.', 'Strom pro Jahr': 'k. A.', 'API-Kosten pro Jahr': '$5,000-25,000' },
        ],
        columns: ['Option', 'Angenommene Leistung', 'Strom pro Jahr', 'API-Kosten pro Jahr'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'Dies sind Beispielschätzungen für 10 Millionen Tokens pro Tag. Lokale und gehostete Modelle unterscheiden sich in Qualität und Fähigkeiten; vergleichen Sie die Kosten daher zusammen mit den Ergebnissen, die Sie benötigen, und nicht allein nach dem Preis.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Qwen Local Deployment Guide: Hardware-Stufen für Qwen-Modelle](/de/local-llms/qwen-local-deployment-guide-2026)',
          '[Qwen-VL lokal ausführen für Bildeingabe](/de/local-llms/run-qwen-vl-locally-2026)',
          '[Qwen vs. Llama vs. Mistral für die lokale Nutzung](/de/local-llms/qwen-vs-llama-vs-mistral)',
          '[Beste lokale LLMs für Coding](/de/local-llms/best-local-llms-for-coding)',
          '[Wie viel VRAM braucht ein lokales LLM?](/de/local-llms/how-much-vram-local-llm)',
          '[Warum EU-Unternehmen auf lokales Qwen umsteigen](/de/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Alle Leitfäden zu lokalen LLMs](/de/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Welche Mindest-Hardware brauche ich, um Qwen 3.6 oder 3.8 lokal zu installieren?', a: 'Für die 27B-Modelle planen Sie eine 24-GB-GPU oder einen Apple-Silicon-Mac mit 32 GB oder mehr Unified Memory ein, denn die Ollama-Downloads umfassen 17-19 GB und der Kontext-Cache kommt hinzu. Für kleinere Hardware nutzen Sie Qwen3.5: Die 9B-Variante hat einen Download von 6,6-7,6 GB, die 4B-Variante 3,3-4,0 GB. Der Speicherrichtwert ist eine Schätzung, keine Messung.' },
          { q: 'Kann ich Qwen 3.6 27B mit 16 GB VRAM ausführen?', a: 'Nicht vollständig. Der Download von qwen3.6:27b umfasst 18-19 GB (der Tag q4_K_M 17 GB) und ist damit schon ohne Kontext-Cache größer als 16 GB. Ollama kann Schichten zwischen GPU und CPU aufteilen, die Generierung wird dadurch aber deutlich langsamer. Verwenden Sie auf einer 16-GB-GPU stattdessen qwen3.5:9b (6,6-7,6 GB).' },
          { q: 'Warum schneidet Ollama meine Prompts ab?', a: 'Die Standard-Kontextlänge von Ollama hängt vom VRAM ab: 4k Tokens unter 24 GiB, 32k von 24 bis 48 GiB und 256k ab 48 GiB. Alles jenseits des zugewiesenen Kontexts wird abgeschnitten. Setzen Sie `PARAMETER num_ctx 32768` in einer Modelfile oder starten Sie den Server mit `OLLAMA_CONTEXT_LENGTH` und prüfen Sie den Wert anschließend mit `ollama ps`. Ollama empfiehlt für Agenten und Coding-Werkzeuge mindestens 64.000 Tokens.' },
          { q: 'Welches Qwen-Modell sollte ich verwenden: 3.8, 3.6 oder 3.5?', a: 'Wählen Sie Qwen3.8-27B, wenn Sie etwa 24 GB GPU-Speicher oder einen Mac mit 32 GB oder mehr haben; laut Modellkarte erreicht es bei gemeinsamen Benchmarks höhere Werte als Qwen3.6-27B (Herstellerangabe). Wählen Sie Qwen3.6-27B oder dessen Mixture-of-Experts-Variante 35B-A3B, wenn Sie die Vorgängergeneration möchten. Wählen Sie Qwen3.5 (0,8B bis 9B) für schwächere Hardware.' },
          { q: 'Ist der lokale Betrieb von Qwen DSGVO-konform?', a: 'Lokale Inferenz hält Prompts auf Ihrem eigenen Rechner, sodass der Inferenzschritt keine Übermittlung an einen externen Modellanbieter umfasst. Das macht Ihre gesamte Verarbeitung nicht von selbst konform: Rechtsgrundlage, Sicherheit, Speicherdauer und Verträge für den Rest Ihres Stacks gelten weiterhin. Dies sind allgemeine Informationen und keine Rechtsberatung; fragen Sie Ihren Datenschutzbeauftragten.' },
          { q: 'Kann Qwen nur mit der CPU laufen?', a: 'Ja, über llama.cpp oder Ollama auf einem System ohne GPU, aber es ist deutlich langsamer als die Inferenz auf der GPU, und die Geschwindigkeit hängt von Ihrer CPU und der Speicherbandbreite ab. Nutzen Sie für den reinen CPU-Betrieb eine kleine Größe wie Qwen3.5 4B oder 9B und rechnen Sie damit, dass ein 27B-Modell für Echtzeit-Gespräche unpraktikabel ist.' },
          { q: 'Wie aktualisiere ich Qwen auf eine neuere Version?', a: 'Führen Sie `ollama pull qwen3.8:27b` erneut aus. Ollama lädt nur geänderte Schichten herunter, wenn der Tag aktualisiert wurde. Ein Tag verweist immer auf den dafür veröffentlichten Build; eine neuere Generation (zum Beispiel eine künftige Qwen-Version) benötigt daher einen neuen Tag. Prüfen Sie in LM Studio den Modellkatalog auf einen neueren Build.' },
          { q: 'Kann ich Claude Code mit lokalem Qwen nutzen?', a: 'Ja. Ollama und LM Studio stellen beide einen Anthropic-kompatiblen Endpunkt bereit. Mit Ollama führen Sie `ollama launch claude` aus oder setzen ANTHROPIC_BASE_URL auf http://localhost:11434; mit LM Studio setzen Sie es auf http://localhost:1234. Für die lokale Verbindung ist kein Anthropic-API-Schlüssel nötig. Verwenden Sie einen Kontext von 64k Tokens oder mehr und testen Sie das Tool-Calling zuerst an einer kleinen Aufgabe.' },
          { q: 'Ist Qwen für die kommerzielle Nutzung kostenlos?', a: 'Die Modellkarten von Qwen3.8-27B, Qwen3.6-27B und Qwen3.5-9B nennen die Apache-2.0-Lizenz, die die kommerzielle Nutzung unter ihren Bedingungen erlaubt. Andere Qwen3.8-Modelle verwenden andere Lizenzen (Qwen3.8-Flash-Next: qwen-community-1.0, Qwen3.8-2.4T-A95B: qwen3.8-max); lesen Sie daher die Lizenz auf der Karte des genauen Modells, das Sie herunterladen.' },
          { q: 'Sollte ich Ollama oder LM Studio verwenden?', a: 'Nutzen Sie Ollama für einen Server ohne Oberfläche, Skripte, IDE-Plugins und PromptQuorum. Nutzen Sie LM Studio für einen visuellen Modell-Browser und ein Chatfenster. Beide können eine OpenAI-kompatible API bereitstellen und über einen Anthropic-kompatiblen Endpunkt Claude Code bedienen, sodass Sie eines davon einsetzen und später wechseln können.' },
        ],
      },
    },
  },
  fr: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Installer Qwen 3.6 et Qwen 3.8 en local en 2026 : guide Ollama et LM Studio',
    seoTitle: 'Installer Qwen 3.6 & 3.8 en local 2026 : Ollama, LM Studio',
    intro: 'Qwen3.8-27B et Qwen3.6-27B sont des modèles denses de 27 milliards de paramètres qui tournent en local avec Ollama ou LM Studio. Le téléchargement Ollama pèse environ 18 Go : un GPU de 24 Go ou un Mac avec 32 Go ou plus de mémoire unifiée est le point de départ réaliste ; sur un GPU de 16 Go, choisissez une taille Qwen3.5 plus petite. Ce guide couvre le choix du modèle, les tailles de téléchargement réelles, le réglage de la longueur de contexte, l’installation avec Ollama et LM Studio, Claude Code, le dépannage et les coûts d’exploitation.',
    metaDescription: 'Installer Qwen 3.6 ou 3.8 27B en local : tailles Ollama et LM Studio, GPU de 24 Go ou Mac 32 Go, correctif du contexte, réglage de Claude Code.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-fr.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10 min de lecture',
    educationalLevel: 'Beginner',
    audience: 'Développeurs qui installent un LLM local pour la première fois, équipes européennes à la recherche d’une IA conforme au RGPD',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**Oui, vous pouvez installer Qwen 3.6 et Qwen 3.8 en local : installez Ollama et lancez `ollama run qwen3.8:27b` (environ 18 Go à télécharger) sur un GPU de 24 Go ou un Mac avec 32 Go ou plus de mémoire unifiée. Utilisez `qwen3.6:27b` pour la génération précédente, ou `qwen3.5:9b` (environ 7 Go) sur un GPU de 16 Go. Ollama fixe la longueur de contexte par défaut selon la VRAM (4k jetons sous 24 GiB) : portez-la à 32768 ou plus.**',
    nextStep: {
      text: 'Qwen tourne en local. Découvrez maintenant les meilleures interfaces pour l’utiliser.',
      label: 'Meilleures interfaces pour LLM locaux 2026 →',
      href: '/fr/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      fr: {
        question: 'Comment installer Qwen 3.6 ou 3.8 en local ?',
        answer: 'Installez Ollama, lancez `ollama pull qwen3.8:27b` (environ 18 Go), puis `ollama run qwen3.8:27b`. Pour la génération précédente, utilisez `qwen3.6:27b`. Pour une interface graphique, installez LM Studio et téléchargez Qwen3.8-27B (16.10 Go dans le catalogue LM Studio). Portez la longueur de contexte à 32768 ou plus, car la valeur par défaut d’Ollama n’est que de 4k jetons sur les GPU de moins de 24 GiB de VRAM.',
        bullets: [
          'Matériel : GPU de 24 Go, ou Apple Silicon avec 32 Go ou plus de mémoire unifiée, pour les modèles 27B',
          'Sur un GPU de 16 Go : lancez plutôt qwen3.5:9b (6.6-7.6 Go à télécharger), car le téléchargement du 27B pèse 17-19 Go',
          'Téléchargement : ollama pull qwen3.8:27b (environ 18 Go) ou qwen3.6:27b (environ 17-19 Go)',
          'Contexte : Ollama utilise 4k jetons par défaut sous 24 GiB de VRAM ; réglez 32768 ou plus',
          'Alternative LM Studio : interface graphique, sans ligne de commande, serveur local sur localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Pourquoi exécuter Qwen en local en 2026', anchor: '#why-local' },
      { label: 'Quel modèle Qwen choisir', anchor: '#choose-model' },
      { label: 'Qwen 3.6 en local : matériel requis', anchor: '#hardware' },
      { label: 'Installation avec Ollama', anchor: '#ollama-setup' },
      { label: 'Installation avec LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Utiliser Qwen local avec Claude Code', anchor: '#claude-code' },
      { label: 'Connexion à PromptQuorum', anchor: '#promptquorum' },
      { label: 'Dépannage', anchor: '#troubleshooting' },
      { label: 'Consommation électrique et coûts d’exploitation', anchor: '#power-tco' },
      { label: 'Pour aller plus loin', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Deux voies** : Ollama (ligne de commande, sans interface, prêt pour l’API) ou LM Studio (interface graphique, sans ligne de commande). Les deux font tourner Qwen3.8-27B et Qwen3.6-27B en local.',
          '**Choix du modèle** : Qwen3.8-27B est la version 27B la plus récente sur Hugging Face (Apache 2.0 selon sa fiche de modèle) ; Qwen3.6-27B est la génération précédente ; Qwen3.5 propose de petites tailles (0.8B à 9B) pour les machines plus modestes.',
          '**Matériel** : les téléchargements 27B pèsent 17-19 Go, donc un GPU de 24 Go ou un Mac avec 32 Go ou plus de mémoire unifiée est le minimum réaliste. Un GPU de 16 Go ne peut pas contenir le modèle 27B en entier ; utilisez-y `qwen3.5:9b`.',
          '**Correctif du contexte** : le contexte par défaut d’Ollama dépend de la VRAM (4k jetons sous 24 GiB). Réglez `num_ctx` ou `OLLAMA_CONTEXT_LENGTH` sur 32768 ou plus, et sur 64k ou plus pour les agents de code.',
          '**Confidentialité** : l’inférence locale garde vos prompts sur votre machine. Cela supprime le transfert à un tiers pour l’étape d’inférence, mais ne rend pas à lui seul l’ensemble de votre traitement conforme au RGPD.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: 'Pourquoi exécuter Qwen en local en 2026',
        content: [
          'Exécuter Qwen en local, c’est aucun frais par jeton une fois le matériel acquis, aucun prompt qui quitte votre machine et un modèle qui continue de fonctionner hors ligne. L’équipe Qwen publie les modèles 27B sous licence Apache 2.0 sur Hugging Face ([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)) : l’usage commercial est donc permis dans le cadre de cette licence ; relisez toujours la licence sur la fiche du modèle pour la variante exacte que vous téléchargez.',
          'La confidentialité est le deuxième moteur. Lorsque Qwen tourne sur votre propre matériel, vos prompts, votre code et les données de vos clients ne sont pas envoyés à un fournisseur de modèle : l’étape d’inférence n’implique donc aucun transfert transfrontalier au sens du [chapitre V du RGPD](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679). Vos autres obligations de traitement (base légale, sécurité, durée de conservation, contrats avec les prestataires du reste de votre pile) continuent de s’appliquer. Ce sont des informations générales, pas un conseil juridique. Le téléchargement des modèles et la recherche de mises à jour utilisent toujours le réseau ; seule l’inférence s’exécute en local.',
          'La troisième raison est la disponibilité et le contrôle : vous fixez le tag exact du modèle, choisissez la longueur de contexte et décidez du moment de la mise à jour. La vitesse dépend de votre GPU ou de votre Mac, de la quantification et de la longueur de contexte : mesurez-la sur votre propre machine plutôt que de vous fier à un chiffre publié.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Exécuter Qwen3.8-27B ou Qwen3.6-27B en local n’entraîne aucun frais par jeton une fois le matériel acquis, garde les prompts sur votre propre machine et demande environ 18 Go de mémoire pour le seul modèle.' },
          { type: 'plain-terms', text: 'LLM local signifie que le modèle d’IA tourne sur votre propre ordinateur. Vous téléchargez le fichier du modèle (environ 17-19 Go pour un modèle Qwen 27B), et chaque prompt que vous saisissez est traité sur votre machine au lieu d’être envoyé à un fournisseur.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Quel modèle Qwen installer en local : 3.8, 3.6 ou 3.5',
        content: [
          'Choisissez la génération la plus récente que votre mémoire permet. Qwen3.8-27B (sorti en août 2026) et Qwen3.6-27B (avril 2026) sont des modèles denses dotés d’un encodeur de vision et d’un contexte natif de 262 144 jetons ; Qwen3.5 (février 2026) propose les petites tailles. Les fiches de modèle indiquent des scores plus élevés pour Qwen3.8-27B que pour Qwen3.6-27B sur les benchmarks communs : SWE-bench Pro 61.7 contre 53.5, LiveCodeBench v6 90.3 contre 83.9, GPQA Diamond 89.2 contre 87.8 (chiffres annoncés par l’éditeur sur les fiches [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) et [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B), obtenus avec les propres protocoles de test de l’équipe Qwen : à considérer comme indicatifs uniquement).',
          'Le tableau indique les tailles de téléchargement Ollama d’après les pages de bibliothèque [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.6](https://ollama.com/library/qwen3.6) et [Qwen3.5](https://ollama.com/library/qwen3.5). Le guide mémoire est une estimation de PromptQuorum : taille du téléchargement plus 2-6 Go pour le cache de contexte et l’environnement d’exécution, et non une mesure.',
        ],
        rows: [
          { 'Modèle': 'Qwen3.8 27B', 'Tag Ollama': 'qwen3.8:27b', 'Téléchargement': '18 Go', 'Mémoire (estimation)': 'GPU 24 Go / Mac 32 Go+' },
          { 'Modèle': 'Qwen3.8 27B Q8_0', 'Tag Ollama': 'qwen3.8:27b-q8_0', 'Téléchargement': '30 Go', 'Mémoire (estimation)': 'GPU 40 Go+ / Mac 48 Go+' },
          { 'Modèle': 'Qwen3.6 27B', 'Tag Ollama': 'qwen3.6:27b', 'Téléchargement': '18-19 Go', 'Mémoire (estimation)': 'GPU 24 Go / Mac 32 Go+' },
          { 'Modèle': 'Qwen3.6 35B-A3B (MoE)', 'Tag Ollama': 'qwen3.6:35b-a3b', 'Téléchargement': '23 Go', 'Mémoire (estimation)': 'GPU 32 Go / Mac 48 Go+' },
          { 'Modèle': 'Qwen3.5 9B', 'Tag Ollama': 'qwen3.5:9b', 'Téléchargement': '6.6-7.6 Go', 'Mémoire (estimation)': 'GPU 12-16 Go' },
          { 'Modèle': 'Qwen3.5 4B', 'Tag Ollama': 'qwen3.5:4b', 'Téléchargement': '3.3-4.0 Go', 'Mémoire (estimation)': 'GPU 8 Go / 16 Go de RAM' },
        ],
        columns: ['Modèle', 'Tag Ollama', 'Téléchargement', 'Mémoire (estimation)'],
        tableFormat: true,
        note: 'Utilisez toujours le tag explicite avec la taille, par exemple qwen3.8:27b, car un nom nu comme qwen3.5 désigne la version 9B. La famille Qwen3.8 comprend aussi des modèles plus grands (Qwen3.8-Flash-Next, 125B de paramètres au total dont 6B actifs, sous licence qwen-community-1.0, et Qwen3.8-2.4T-A95B sous licence qwen3.8-max). Ces licences diffèrent d’Apache 2.0 : lisez la fiche du modèle avant tout usage commercial.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-fr.webp',
        imageAlt: 'Tailles de Qwen en local : 27B env. 18 Go, 9B env. 7 Go',
        imageCaption: 'Tailles des modèles Qwen pour un usage local, avec la taille de téléchargement Ollama de chaque version.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen 3.6 en local : quel matériel faut-il ?',
        content: [
          'Oui. Le facteur limitant est la mémoire : les fichiers des modèles 27B pèsent 17-19 Go, auxquels s’ajoutent le cache de contexte et l’environnement d’exécution. Un GPU de 16 Go de VRAM ne peut donc pas contenir entièrement un modèle 27B en Q4_K_M ; Ollama répartirait alors les couches entre GPU et CPU, ce qui est plus lent. Sur les cartes de 16 Go, choisissez Qwen3.5 9B.',
        ],
        items: [
          '**GPU de 24 Go (RTX 3090, RTX 4090)** : contient le téléchargement 27B Q4_K_M (17-19 Go) avec quelques Go de marge pour le contexte',
          '**GPU de 32 Go (RTX 5090)** : plus de place pour un contexte long ou pour la version Qwen3.6 35B-A3B de 23 Go',
          '**GPU de 16 Go (RTX 4080, RTX 4070 Ti Super)** : utilisez `qwen3.5:9b` (6.6-7.6 Go) ; un modèle 27B ne tourne qu’avec un déchargement partiel vers le CPU et il est bien plus lent',
          '**Apple Silicon, 32 Go de mémoire unifiée** : le minimum réaliste pour un modèle 27B ; Ollama propose des versions MLX comme `qwen3.8:27b-mlx` (18 Go)',
          '**Apple Silicon, 64 Go ou plus** : de la marge pour les modèles 27B, un contexte plus long et d’autres applications ouvertes en même temps',
          '**Macs actuels** : le Mac mini avec M6 propose jusqu’à 32 Go, le Mac mini avec M5 Pro jusqu’à 64 Go (selon [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/)), le Mac Studio avec M5 Max jusqu’à 128 Go et avec M5 Ultra jusqu’à 512 Go (l’option 512 Go est livrée à partir de fin octobre 2026), d’après [l’annonce du Mac Studio par Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) et [l’annonce du M6 par Apple](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/). PromptQuorum n’a pas testé ces puces.',
          '**RAM système** : 32 Go minimum avec une inférence sur GPU ; 64 Go si vous faites aussi tourner un environnement de développement complet',
          '**Stockage** : au moins 25 Go libres pour un modèle 27B (le fichier pèse 17-19 Go)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon partage la mémoire unifiée entre le CPU et le GPU, et macOS en réserve une partie. Un Mac de 32 Go peut contenir un modèle de 18 Go, mais un Mac de 64 Go laisse beaucoup plus de place au contexte et aux autres applications.' },
          { type: 'tip', text: 'Vérifiez ce qui est réellement en mémoire avec `ollama ps` : la colonne PROCESSOR indique si le modèle tourne à 100 % sur le GPU, et la colonne CONTEXT affiche la longueur de contexte allouée.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Installation avec Ollama',
        content: [
          'Ollama est le moyen le plus rapide d’installer Qwen en local. Il gère les téléchargements de modèles, fournit une API compatible OpenAI sur localhost:11434 et s’occupe des fichiers GGUF à votre place. Installez-le depuis [ollama.com](https://ollama.com/download). Les étapes ci-dessous utilisent `qwen3.8:27b` ; remplacez le tag par `qwen3.6:27b` ou `qwen3.5:9b` pour une autre taille.',
        ],
        numberedItems: [
          { title: 'Installer Ollama', whyItMatters: 'Ollama gère les téléchargements de modèles et fournit une API locale compatible OpenAI.' },
          { title: 'Télécharger le modèle Qwen3.8 27B avec un tag explicite', whyItMatters: 'Utilisez explicitement qwen3.8:27b. Le téléchargement pèse environ 18 Go ; sur un GPU de 16 Go, téléchargez plutôt qwen3.5:9b.' },
          { title: 'Créer un Modelfile avec une longueur de contexte plus grande', whyItMatters: 'Le contexte par défaut d’Ollama est de 4k jetons sur les GPU de moins de 24 GiB de VRAM et de 32k entre 24 et 48 GiB. Définir num_ctx rend la longueur explicite sur toutes les machines.' },
          { title: 'Construire le modèle personnalisé et le vérifier avec ollama ps', whyItMatters: 'Les colonnes CONTEXT et PROCESSOR confirment que la longueur de contexte a bien été prise en compte et que le modèle tourne sur le GPU.' },
          { title: 'Tester le point d’accès de l’API', whyItMatters: 'Ollama expose une API compatible OpenAI sur localhost:11434/v1. Utilisez ce point d’accès pour connecter des clients LLM, des IDE et PromptQuorum.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Ne sautez pas le réglage du contexte. Sous 24 GiB de VRAM, la valeur par défaut d’Ollama est de 4k jetons, soit environ 3 000 mots réponse comprise, et un long fichier ou une longue conversation est tronqué. Ollama recommande au moins 64 000 jetons pour les agents et les outils de code ; un contexte plus grand demande plus de mémoire.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-fr.webp',
        imageAlt: 'Cinq étapes Ollama pour exécuter Qwen en local',
        imageCaption: 'Installation d’Ollama pour Qwen en cinq étapes : installer, télécharger, régler la longueur de contexte, construire et vérifier, tester l’API.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Installation avec LM Studio',
        content: [
          'LM Studio offre une interface graphique pour exécuter des LLM locaux sans aucune commande. C’est la voie la plus simple pour les utilisateurs non techniques et pour les installations sous Windows. Téléchargez-le sur [lmstudio.ai](https://lmstudio.ai) ; il est disponible pour macOS, Windows et Linux.',
        ],
        numberedItems: [
          { title: 'Télécharger et installer LM Studio', whyItMatters: 'Interface graphique gratuite et multiplateforme pour l’inférence de LLM locaux. Aucune ligne de commande requise.' },
          { title: 'Rechercher et télécharger Qwen3.8 27B', whyItMatters: 'Le catalogue LM Studio propose [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) à 16.10 Go aux formats GGUF et MLX. Choisissez la version adaptée à votre plateforme.' },
          { title: 'Régler la longueur de contexte avant le chargement', whyItMatters: 'Portez Context Length à 32768 ou plus dans les paramètres de chargement du modèle. Un contexte plus long demande plus de mémoire : réduisez-le si le chargement échoue.' },
          { title: 'Démarrer le serveur local', whyItMatters: 'Le serveur LM Studio fournit une API compatible OpenAI, avec des exemples utilisant localhost:1234 dans sa documentation. Utilisez cette URL dans vos clients et dans PromptQuorum.' },
          { title: 'Vérifier que le serveur répond', whyItMatters: 'Une requête sur le point d’accès des modèles liste le modèle chargé et confirme le port.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'Si le modèle ne se charge pas, réduisez la longueur de contexte ou le nombre de couches GPU, ou passez à une taille Qwen3.5 plus petite. Un modèle qui ne tient pas dans la VRAM déborde sur la RAM système et devient beaucoup plus lent.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'Utiliser Qwen local avec Claude Code',
        content: [
          'Ollama et LM Studio exposent tous deux un point d’accès compatible Anthropic : Claude Code peut donc dialoguer avec un modèle Qwen local sans proxy séparé. Le comportement avec un modèle autre que Claude dépend du modèle, notamment pour l’appel d’outils ; testez-le d’abord sur une petite tâche.',
          'Avec Ollama, lancez `ollama launch claude`, ou définissez vous-même les variables : `ANTHROPIC_AUTH_TOKEN=ollama`, `ANTHROPIC_API_KEY=""` et `ANTHROPIC_BASE_URL=http://localhost:11434`, puis démarrez `claude --model <your-model>`. Le [guide Claude Code d’Ollama](https://docs.ollama.com/integrations/claude-code) recommande une fenêtre de contexte de 64k jetons ou plus pour les modèles locaux.',
          'Avec LM Studio, le serveur accepte `/v1/messages` : définissez `ANTHROPIC_BASE_URL=http://localhost:1234` et `ANTHROPIC_AUTH_TOKEN=lmstudio`, puis démarrez `claude --model <model-id>`. Consultez la [page de compatibilité Anthropic de LM Studio](https://lmstudio.ai/docs/developer/anthropic-compat) pour les détails à jour.',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Les réglages de Claude Code peuvent remplacer les variables du shell. Si la connexion échoue, exécutez /status dans Claude Code pour voir quel point d’accès il utilise.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connexion à PromptQuorum',
        content: [
          'PromptQuorum envoie un même prompt à plusieurs modèles. Pour ajouter votre instance Qwen locale comme cible, faites pointer le point d’accès du modèle local dans PromptQuorum vers l’URL Ollama compatible OpenAI et saisissez le tag du modèle que vous avez construit. Consultez les réglages de l’application pour connaître les noms de champs actuels.',
          'Utilisez `http://localhost:11434/v1` pour Ollama ou `http://localhost:1234/v1` pour LM Studio. Si un formulaire exige une clé d’API, saisissez n’importe quelle chaîne non vide, car aucun des deux serveurs n’exige d’authentification par clé par défaut. Les fournisseurs cloud conservent leur propre configuration, distincte.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connectez PromptQuorum à Qwen en local en saisissant http://localhost:11434/v1 comme point d’accès et le tag du modèle que vous avez construit, par exemple qwen3.8-32k.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Dépannage',
        items: [
          '**La réponse du modèle est tronquée ou ignore le début d’un long prompt** : la longueur de contexte est trop faible. Reconstruisez le Modelfile avec un `PARAMETER num_ctx` plus grand, recréez le modèle avec `ollama create` et confirmez la valeur avec `ollama ps`.',
          '**Erreur CUDA out of memory ou génération très lente** : le modèle et son contexte ne tiennent pas dans la VRAM. Passez à une taille plus petite (`qwen3.5:9b`), réduisez la longueur de contexte ou choisissez un tag de quantification plus léger.',
          '**L’API Ollama renvoie une erreur 404** : le nom du modèle ne correspond pas. Exécutez `ollama list` et utilisez le nom exact affiché (par exemple `qwen3.8-32k`).',
          '**Génération lente** : exécutez `ollama ps`. Si PROCESSOR affiche une répartition CPU/GPU au lieu de 100 % GPU, le modèle ne tient pas dans la VRAM ; réduisez le contexte ou la taille du modèle, et fermez les autres applications gourmandes en GPU.',
          '**LM Studio affiche « failed to load model »** : mémoire insuffisante. Réduisez la longueur de contexte, diminuez le déchargement GPU ou choisissez un modèle plus petit.',
          '**PromptQuorum renvoie une erreur d’authentification** : si le formulaire exige une clé, saisissez n’importe quelle chaîne non vide. Ollama n’exige pas d’authentification par clé d’API par défaut.',
          '**Ollama utilise le CPU au lieu du GPU** : sous NVIDIA, vérifiez que le pilote est installé (`nvidia-smi` doit lister le GPU). Sur Mac, Ollama utilise Metal automatiquement ; réinstallez Ollama depuis ollama.com si ce n’est pas le cas.',
          '**Le téléchargement du modèle se bloque ou échoue** : relancez `ollama pull qwen3.8:27b` ; Ollama reprend là où il s’était arrêté. Sinon, téléchargez un GGUF depuis [Hugging Face](https://huggingface.co/Qwen) et indiquez son chemin local dans la ligne FROM du Modelfile.',
        ],
        callouts: [
          { type: 'tip', text: 'Exécutez `ollama ps` pour voir quels modèles sont chargés, la mémoire qu’ils utilisent et le contexte alloué. Utilisez `ollama stop <model>` pour décharger un modèle avant d’en charger un autre.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: 'Consommation électrique et coûts d’exploitation',
        content: [
          'Le matériel est un coût unique ; l’électricité et, pour la comparaison, les frais d’API sont les coûts récurrents. Les chiffres ci-dessous sont des hypothèses pour un exemple chiffré, pas des mesures : PromptQuorum n’a pas mesuré la consommation de ces systèmes, et la puissance absorbée varie selon le modèle, le contexte et le GPU.',
          'Exemple pour une station de travail GPU : une puissance supposée de 450 W, 8 heures par jour, 250 jours ouvrés et un prix de l’électricité supposé de 0.35 €/kWh donnent 0.45 kW x 8 h x 250 jours x 0.35 € = **315 € par an**. Un Mac avec une puissance supposée de 50 W selon le même calendrier donne 0.05 kW x 8 h x 250 jours x 0.35 € = **35 € par an**.',
          'Comparaison avec l’API : Anthropic indique le tarif de Claude Sonnet 5 à $2 par million de jetons en entrée et $10 par million de jetons en sortie sur sa [page de tarifs](https://platform.claude.com/docs/en/about-claude/pricing). Une charge de 10 millions de jetons par jour sur 250 jours représente 2 500 millions de jetons par an, soit $5,000 si tous les jetons sont en entrée et $25,000 s’ils sont tous en sortie. Les charges réelles mélangent les deux : votre facture se situe donc entre ces bornes. Les prix changent ; consultez la page avant de décider.',
          'Seuil de rentabilité en mois = prix du matériel / (coût mensuel de l’API - électricité mensuelle). Utilisez les prix de détail actuels de votre marché pour le matériel, et votre propre volume de jetons pour le coût de l’API.',
        ],
        rows: [
          { 'Option': 'Station GPU', 'Puissance supposée': '450 W', 'Électricité/an': '315 €', 'Coût API/an': '$0 (local)' },
          { 'Option': 'Mac (Apple Silicon)', 'Puissance supposée': '50 W', 'Électricité/an': '35 €', 'Coût API/an': '$0 (local)' },
          { 'Option': 'API Claude Sonnet 5', 'Puissance supposée': 'n/a', 'Électricité/an': 'n/a', 'Coût API/an': '$5,000-25,000' },
        ],
        columns: ['Option', 'Puissance supposée', 'Électricité/an', 'Coût API/an'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'Ce sont des estimations illustratives pour 10 millions de jetons par jour. Les modèles locaux et les modèles hébergés diffèrent en qualité et en capacités : comparez le coût en tenant compte des résultats dont vous avez besoin, pas sur le seul prix.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Pour aller plus loin',
        items: [
          '[Guide de déploiement local de Qwen : niveaux de matériel pour les modèles Qwen](/fr/local-llms/qwen-local-deployment-guide-2026)',
          '[Exécuter Qwen-VL en local pour l’entrée d’images](/fr/local-llms/run-qwen-vl-locally-2026)',
          '[Qwen, Llama ou Mistral : lequel choisir en local](/fr/local-llms/qwen-vs-llama-vs-mistral)',
          '[Meilleurs LLM locaux pour le code](/fr/local-llms/best-local-llms-for-coding)',
          '[De combien de VRAM avez-vous besoin pour un LLM local ?](/fr/local-llms/how-much-vram-local-llm)',
          '[Pourquoi les entreprises européennes passent à Qwen en local](/fr/blog/eu-companies-local-qwen-gdpr-shift)',
          '[Parcourir tous les guides sur les LLM locaux](/fr/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Quel est le matériel minimum pour installer Qwen 3.6 ou 3.8 en local ?', a: 'Pour les modèles 27B, prévoyez un GPU de 24 Go ou un Mac Apple Silicon avec 32 Go ou plus de mémoire unifiée, car les téléchargements Ollama pèsent 17-19 Go et le cache de contexte s’y ajoute. Pour un matériel plus modeste, utilisez Qwen3.5 : la version 9B se télécharge en 6.6-7.6 Go et la 4B en 3.3-4.0 Go. Le guide mémoire est une estimation, pas une mesure.' },
          { q: 'Puis-je faire tourner Qwen 3.6 27B avec 16 Go de VRAM ?', a: 'Pas entièrement. Le téléchargement qwen3.6:27b pèse 18-19 Go (le tag q4_K_M pèse 17 Go), soit plus que 16 Go avant même de compter le cache de contexte. Ollama peut répartir les couches entre GPU et CPU, mais la génération devient beaucoup plus lente. Sur un GPU de 16 Go, lancez plutôt qwen3.5:9b (6.6-7.6 Go).' },
          { q: 'Pourquoi Ollama tronque-t-il mes prompts ?', a: 'La longueur de contexte par défaut d’Ollama dépend de la VRAM : 4k jetons sous 24 GiB, 32k de 24 à 48 GiB et 256k à partir de 48 GiB. Tout ce qui dépasse le contexte alloué est coupé. Définissez `PARAMETER num_ctx 32768` dans un Modelfile ou démarrez le serveur avec `OLLAMA_CONTEXT_LENGTH`, puis confirmez la valeur avec `ollama ps`. Ollama recommande au moins 64 000 jetons pour les agents et les outils de code.' },
          { q: 'Quel modèle Qwen choisir : 3.8, 3.6 ou 3.5 ?', a: 'Choisissez Qwen3.8-27B si vous disposez d’environ 24 Go de mémoire GPU ou d’un Mac avec 32 Go ou plus ; sa fiche de modèle indique des scores plus élevés que Qwen3.6-27B sur les benchmarks communs (chiffres annoncés par l’éditeur). Choisissez Qwen3.6-27B ou sa version à mélange d’experts 35B-A3B si vous préférez la génération précédente. Choisissez Qwen3.5 (0.8B à 9B) pour un matériel plus modeste.' },
          { q: 'Exécuter Qwen en local est-il conforme au RGPD ?', a: 'L’inférence locale garde les prompts sur votre propre machine : l’étape d’inférence n’implique donc aucun transfert vers un fournisseur de modèle tiers. Cela ne rend pas à lui seul l’ensemble de votre traitement conforme : la base légale, la sécurité, la durée de conservation et les contrats du reste de votre pile continuent de s’appliquer. Ce sont des informations générales, pas un conseil juridique ; interrogez votre délégué à la protection des données.' },
          { q: 'Qwen peut-il tourner uniquement sur CPU ?', a: 'Oui, via llama.cpp ou Ollama sur un système sans GPU, mais c’est bien plus lent qu’une inférence sur GPU, et la vitesse dépend de votre CPU et de la bande passante mémoire. Utilisez une petite taille comme Qwen3.5 4B ou 9B pour un usage sur CPU seul, et attendez-vous à ce qu’un modèle 27B soit impraticable pour une conversation en temps réel.' },
          { q: 'Comment mettre à jour Qwen vers une version plus récente ?', a: 'Relancez `ollama pull qwen3.8:27b`. Ollama ne télécharge que les couches modifiées si le tag a été mis à jour. Un tag pointe toujours vers la version publiée pour lui : une génération plus récente (par exemple une future version de Qwen) nécessite donc un nouveau tag. Dans LM Studio, consultez le catalogue des modèles pour trouver une version plus récente.' },
          { q: 'Puis-je utiliser Claude Code avec Qwen en local ?', a: 'Oui. Ollama et LM Studio exposent tous deux un point d’accès compatible Anthropic. Avec Ollama, lancez `ollama launch claude` ou définissez ANTHROPIC_BASE_URL sur http://localhost:11434 ; avec LM Studio, définissez-la sur http://localhost:1234. Aucune clé d’API Anthropic n’est nécessaire pour la connexion locale. Utilisez un contexte de 64k jetons ou plus, et testez d’abord l’appel d’outils sur une petite tâche.' },
          { q: 'Qwen est-il gratuit pour un usage commercial ?', a: 'Les fiches de modèle de Qwen3.8-27B, Qwen3.6-27B et Qwen3.5-9B indiquent la licence Apache 2.0, qui permet l’usage commercial selon ses conditions. Les autres modèles Qwen3.8 utilisent d’autres licences (Qwen3.8-Flash-Next : qwen-community-1.0, Qwen3.8-2.4T-A95B : qwen3.8-max) : lisez donc la licence sur la fiche du modèle exact que vous téléchargez.' },
          { q: 'Faut-il choisir Ollama ou LM Studio ?', a: 'Utilisez Ollama pour un serveur sans interface, des scripts, des extensions d’IDE et PromptQuorum. Utilisez LM Studio pour un navigateur de modèles visuel et une fenêtre de discussion. Les deux peuvent servir une API compatible OpenAI, et les deux peuvent servir Claude Code via un point d’accès compatible Anthropic : vous pouvez donc utiliser l’un ou l’autre et changer plus tard.' },
        ],
      },
    },
  },
  ja: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Qwen 3.6・Qwen 3.8 をローカルで動かす方法 2026：16GB VRAMの可否と必要スペック、Ollama・LM Studio導入ガイド',
    seoTitle: 'Qwen 3.6/3.8 ローカル導入2026｜必要スペック',
    intro: 'Qwen3.8-27B と Qwen3.6-27B は、Ollama または LM Studio でローカル実行できる 27B の dense モデルです。Ollama のダウンロードサイズは約 18 GB のため、現実的な出発点は 24 GB の GPU、または 32 GB 以上のユニファイドメモリを搭載した Mac です。16GB VRAM の GPU では、より小さい Qwen3.5 のサイズを使ってください。このガイドでは、モデル選び、実際のダウンロードサイズ、コンテキスト長の設定、Ollama と LM Studio の導入手順、Claude Code との連携、トラブルシューティング、運用コストを説明します。',
    metaDescription: 'Qwen 3.6・3.8 の27Bをローカル実行する必要スペックを解説。16GB VRAMでは27Bは全部載らず9Bを推奨。Ollama・LM Studioの導入手順とメモリ目安も紹介。',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ja.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10分で読める',
    educationalLevel: 'Beginner',
    audience: 'ローカル LLM を初めて導入する開発者、GDPR に準拠した AI を求める EU のチーム',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**はい、Qwen 3.6 と Qwen 3.8 はローカルで動かせます。Ollama をインストールして `ollama run qwen3.8:27b`（ダウンロード約 18 GB）を実行します。必要スペックの目安は、24 GB の GPU、または 32 GB 以上のユニファイドメモリを搭載した Mac です。1世代前なら `qwen3.6:27b`、16GB VRAM の GPU なら `qwen3.5:9b`（約 7 GB）を使ってください。Ollama はデフォルトのコンテキスト長を VRAM に応じて決める（24 GiB 未満では 4k トークン）ため、32768 以上に引き上げてください。**',
    nextStep: {
      text: 'Qwen がローカルで動きました。次は、使いやすくするおすすめの UI を確認しましょう。',
      label: 'ローカル LLM フロントエンド おすすめ 2026 →',
      href: '/ja/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ja: {
        question: 'Qwen 3.6・3.8 をローカルで動かすには？16GB VRAM で足りますか？',
        answer: 'Ollama をインストールし、`ollama pull qwen3.8:27b`（約 18 GB）の後に `ollama run qwen3.8:27b` を実行します。1世代前なら `qwen3.6:27b` を使います。GUI を使う場合は LM Studio をインストールし、Qwen3.8-27B（LM Studio カタログで 16.10 GB）をダウンロードしてください。16GB VRAM の GPU では 27B のダウンロード（17-19 GB）が全部載らないため、`qwen3.5:9b` を使います。Ollama のデフォルトは VRAM 24 GiB 未満の GPU で 4k トークンしかないため、コンテキスト長は 32768 以上に引き上げてください。',
        bullets: [
          'ハードウェア：27B モデルには 24 GB の GPU、または 32 GB 以上のユニファイドメモリを搭載した Apple Silicon',
          '16GB VRAM の GPU：27B のダウンロードは 17-19 GB なので、代わりに qwen3.5:9b（ダウンロード 6.6-7.6 GB）を実行',
          'Pull：ollama pull qwen3.8:27b（約 18 GB）または qwen3.6:27b（約 17-19 GB）',
          'コンテキスト：Ollama は VRAM 24 GiB 未満で 4k トークンがデフォルト。32768 以上に設定',
          'LM Studio という選択肢：GUI で CLI 不要、ローカルサーバーは localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '2026年にQwenをローカルで動かす理由', anchor: '#why-local' },
      { label: 'ローカルで動かすQwenモデルの選び方', anchor: '#choose-model' },
      { label: 'Qwen 3.6は16GB VRAMで動く？メモリと必要スペック', anchor: '#hardware' },
      { label: 'Ollamaでの導入手順', anchor: '#ollama-setup' },
      { label: 'LM Studioでの導入手順', anchor: '#lm-studio-setup' },
      { label: 'ローカルQwenをClaude Codeで使う', anchor: '#claude-code' },
      { label: 'PromptQuorumとの接続', anchor: '#promptquorum' },
      { label: 'トラブルシューティング', anchor: '#troubleshooting' },
      { label: '消費電力と運用コスト', anchor: '#power-tco' },
      { label: '関連記事', anchor: '#related-reading' },
      { label: 'よくある質問', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**2つの方法**：Ollama（CLI、ヘッドレス、API 対応）または LM Studio（GUI、CLI 不要）。どちらも Qwen3.8-27B と Qwen3.6-27B をローカルで実行できます。',
          '**モデルの選択**：Qwen3.8-27B は Hugging Face で公開されている最新の 27B リリースです（モデルカードによれば Apache 2.0）。Qwen3.6-27B は1世代前で、Qwen3.5 には性能の低いハードウェア向けの小さいサイズ（0.8B から 9B）があります。',
          '**ハードウェア**：27B のダウンロードは 17-19 GB なので、24 GB の GPU、または 32 GB 以上のユニファイドメモリを搭載した Mac が現実的な下限です。16GB VRAM の GPU では 27B モデルを丸ごと載せられないため、`qwen3.5:9b` を使ってください。',
          '**コンテキストの修正**：Ollama のデフォルトのコンテキスト長は VRAM に依存します（24 GiB 未満では 4k トークン）。`num_ctx` または `OLLAMA_CONTEXT_LENGTH` を 32768 以上に設定し、コーディングエージェントでは 64k 以上にしてください。',
          '**プライバシー**：ローカル推論ではプロンプトが自分のマシンの外に出ません。推論ステップでの第三者への送信はなくなりますが、それだけで処理全体が GDPR に準拠するわけではありません。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026年にQwenをローカルで動かす理由',
        content: [
          'Qwen をローカルで動かすと、ハードウェアを用意した後はトークン単位の料金がかからず、プロンプトがマシンの外に出ず、オフラインでもモデルが動き続けます。Qwen チームは 27B モデルを Apache 2.0 ライセンスで Hugging Face に公開しており（[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)、[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)）、そのライセンスの下で商用利用が認められています。ただし、ダウンロードする個別のバリアントについては、必ずモデルカードのライセンスを読み直してください。',
          '2つ目の理由はプライバシーです。Qwen を自分のハードウェアで動かせば、プロンプト、コード、顧客データはモデル提供者に送信されないため、推論ステップでは [GDPR 第5章](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679) に基づく越境移転が生じません。それ以外の処理上の義務（法的根拠、セキュリティ、保存期間、スタックの他の部分に関するベンダー契約）は引き続き適用されます。これは一般的な情報であり、法的助言ではありません。 モデルのダウンロードやアップデートの確認では引き続きネットワークが使われ、ローカルで動作するのは推論のみです。',
          '3つ目の理由は可用性とコントロールです。正確なモデルタグを固定し、コンテキスト長を選び、更新のタイミングを自分で決められます。速度は GPU や Mac、量子化、コンテキスト長に依存するため、公表されている数値に頼らず、自分のマシンで測定してください。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.8-27B または Qwen3.6-27B をローカルで動かせば、ハードウェア購入後はトークン単位の料金がかからず、プロンプトは自分のマシン内にとどまり、モデルだけで約 18 GB のメモリが必要です。' },
          { type: 'plain-terms', text: 'ローカル LLM とは、AI モデルを自分のコンピューター上で動かすことです。モデルファイル（27B の Qwen モデルで約 17-19 GB）をダウンロードすれば、入力したプロンプトはすべて提供者に送信されず、自分のマシンで処理されます。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'ローカルで動かすQwenモデルの選び方：3.8、3.6、3.5',
        content: [
          'メモリが許す範囲で最新の世代を選んでください。Qwen3.8-27B（2026年8月リリース）と Qwen3.6-27B（2026年4月リリース）は、ビジョンエンコーダーとネイティブ 262,144 トークンのコンテキストを備えた dense モデルです。小さいサイズは Qwen3.5（2026年2月リリース）が提供しています。モデルカードでは、共通のベンチマークで Qwen3.8-27B が Qwen3.6-27B より高いスコアと報告されています：SWE-bench Pro 61.7 対 53.5、LiveCodeBench v6 90.3 対 83.9、GPQA Diamond 89.2 対 87.8（[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) と [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) のモデルカードにあるベンダー報告値で、Qwen チーム独自のハーネスによる実行結果のため、参考程度に扱ってください）。',
          '表には、[Qwen3.8](https://ollama.com/library/qwen3.8)、[Qwen3.6](https://ollama.com/library/qwen3.6)、[Qwen3.5](https://ollama.com/library/qwen3.5) の Ollama ライブラリページに記載されたダウンロードサイズを掲載しています。メモリの目安は PromptQuorum の推定値で、ダウンロードサイズにコンテキストキャッシュとランタイム分の 2-6 GB を加えたものです。実測値ではありません。',
        ],
        rows: [
          { 'モデル': 'Qwen3.8 27B', 'Ollama タグ': 'qwen3.8:27b', 'ダウンロード': '18 GB', 'メモリ目安（推定）': '24 GB GPU / Mac 32 GB+' },
          { 'モデル': 'Qwen3.8 27B Q8_0', 'Ollama タグ': 'qwen3.8:27b-q8_0', 'ダウンロード': '30 GB', 'メモリ目安（推定）': '40 GB+ GPU / Mac 48 GB+' },
          { 'モデル': 'Qwen3.6 27B', 'Ollama タグ': 'qwen3.6:27b', 'ダウンロード': '18-19 GB', 'メモリ目安（推定）': '24 GB GPU / Mac 32 GB+' },
          { 'モデル': 'Qwen3.6 35B-A3B (MoE)', 'Ollama タグ': 'qwen3.6:35b-a3b', 'ダウンロード': '23 GB', 'メモリ目安（推定）': '32 GB GPU / Mac 48 GB+' },
          { 'モデル': 'Qwen3.5 9B', 'Ollama タグ': 'qwen3.5:9b', 'ダウンロード': '6.6-7.6 GB', 'メモリ目安（推定）': '12-16 GB GPU' },
          { 'モデル': 'Qwen3.5 4B', 'Ollama タグ': 'qwen3.5:4b', 'ダウンロード': '3.3-4.0 GB', 'メモリ目安（推定）': '8 GB GPU / 16 GB RAM' },
        ],
        columns: ['モデル', 'Ollama タグ', 'ダウンロード', 'メモリ目安（推定）'],
        tableFormat: true,
        note: 'qwen3.8:27b のように、必ずサイズ付きの明示的なタグを使ってください。qwen3.5 のようにサイズを省いた名前は 9B ビルドを指すためです。Qwen3.8 ファミリーには、さらに大きなモデルもあります（Qwen3.8-Flash-Next：総パラメーター 125B・アクティブ 6B で qwen-community-1.0 ライセンス、Qwen3.8-2.4T-A95B：qwen3.8-max ライセンス）。これらのライセンスは Apache 2.0 とは異なるため、商用利用の前にモデルカードを読んでください。',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ja.webp',
        imageAlt: 'Qwenのローカル用モデルサイズ：27Bは約18GB、9Bは約7GB',
        imageCaption: 'ローカル利用向け Qwen のモデルサイズと、各ビルドの Ollama ダウンロードサイズ。',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen 3.6は16GB VRAMで動く？ローカル実行のメモリと必要スペック',
        content: [
          '16GB VRAM では 27B モデルは丸ごと載りません。ローカル実行自体は可能ですが、制約になるのはメモリです。27B のモデルファイルは 17-19 GB あり、その上にコンテキストキャッシュとランタイムが加わります。そのため 16GB VRAM の GPU では 27B の Q4_K_M を完全には保持できず、Ollama はレイヤーを GPU と CPU に分割するため低速になります。16 GB のカードでは Qwen3.5 9B を選んでください。',
        ],
        items: [
          '**24 GB GPU（RTX 3090、RTX 4090）**：27B Q4_K_M のダウンロード（17-19 GB）を保持でき、コンテキスト用に数 GB の余裕が残ります',
          '**32 GB GPU（RTX 5090）**：長いコンテキストや、23 GB の Qwen3.6 35B-A3B ビルドにも余裕があります',
          '**16 GB GPU（RTX 4080、RTX 4070 Ti Super）**：`qwen3.5:9b`（6.6-7.6 GB）を使ってください。27B モデルは一部を CPU にオフロードしてしか動かず、はるかに低速です',
          '**Apple Silicon、ユニファイドメモリ 32 GB**：27B モデルの現実的な最小構成です。Ollama には `qwen3.8:27b-mlx`（18 GB）などの MLX ビルドがあります',
          '**Apple Silicon、64 GB 以上**：27B モデル、より長いコンテキスト、他のアプリの同時起動に十分な余裕があります',
          '**現行の Mac**：M6 搭載の Mac mini は最大 32 GB、M5 Pro 搭載の Mac mini は最大 64 GB（[MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/) による）、M5 Max 搭載の Mac Studio は最大 128 GB、M5 Ultra 搭載は最大 512 GB です（512 GB オプションは 2026年10月下旬から出荷）。出典は [Apple の Mac Studio 発表](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/) と [Apple の M6 発表](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/) です。PromptQuorum はこれらのチップのベンチマークを行っていません。',
          '**システム RAM**：GPU 推論と併用する場合は最低 32 GB。開発環境一式も動かすなら 64 GB',
          '**ストレージ**：27B モデル1つにつき最低 25 GB の空き容量（ファイルは 17-19 GB）',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon では CPU と GPU がユニファイドメモリを共有し、macOS がその一部を予約します。32 GB の Mac でも 18 GB のモデルは保持できますが、64 GB の Mac ならコンテキストや他のアプリケーション用の余裕がはるかに大きくなります。' },
          { type: 'tip', text: '実際にメモリ上にあるものは `ollama ps` で確認できます。PROCESSOR 列はモデルが 100% GPU で動いているかを示し、CONTEXT 列は割り当てられたコンテキスト長を示します。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollamaでの導入手順',
        content: [
          'Ollama は Qwen をローカルで動かす最も手早い方法です。モデルのダウンロードを管理し、localhost:11434 で OpenAI 互換 API を提供し、GGUF ファイルも自動で扱います。[ollama.com](https://ollama.com/download) からインストールしてください。以下の手順では `qwen3.8:27b` を使います。別のサイズを使う場合は、タグを `qwen3.6:27b` または `qwen3.5:9b` に置き換えてください。',
        ],
        numberedItems: [
          { title: 'Ollama をインストールする', whyItMatters: 'Ollama はモデルのダウンロードを扱い、OpenAI 互換のローカル API を提供します。' },
          { title: '明示的なタグを付けて Qwen3.8 27B モデルを pull する', whyItMatters: 'qwen3.8:27b を明示的に指定します。ダウンロードは約 18 GB です。16GB VRAM の GPU では、代わりに qwen3.5:9b を pull してください。' },
          { title: 'より大きなコンテキスト長を指定した Modelfile を作成する', whyItMatters: 'Ollama のデフォルトのコンテキストは、VRAM 24 GiB 未満の GPU で 4k トークン、24-48 GiB で 32k です。num_ctx を設定すれば、どのマシンでも長さを明示できます。' },
          { title: 'カスタムモデルをビルドし、ollama ps で確認する', whyItMatters: 'CONTEXT 列と PROCESSOR 列で、コンテキスト長が反映されたことと、モデルが GPU で動いていることを確認できます。' },
          { title: 'API エンドポイントをテストする', whyItMatters: 'Ollama は localhost:11434/v1 で OpenAI 互換 API を公開します。このエンドポイントを LLM クライアント、IDE、PromptQuorum の接続に使います。' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'コンテキストの設定は省略しないでください。VRAM 24 GiB 未満では Ollama のデフォルトは 4k トークン（返答を含めて日本語でおよそ数千字相当）で、長いファイルや会話は途中で切り捨てられます。Ollama はエージェントやコーディングツールに最低 64,000 トークンを推奨しています。コンテキストを大きくするほど、より多くのメモリが必要です。' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-ja.webp',
        imageAlt: 'OllamaでQwenをローカル実行する5つの手順',
        imageCaption: 'Qwen の Ollama 導入5ステップ：インストール、pull、コンテキスト長の設定、ビルドと確認、API テスト。',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studioでの導入手順',
        content: [
          'LM Studio は、CLI コマンドを使わずにローカル LLM を動かせる GUI を提供します。技術に詳しくないユーザーや Windows 環境では、こちらのほうが簡単です。[lmstudio.ai](https://lmstudio.ai) からダウンロードしてください。macOS、Windows、Linux に対応しています。',
        ],
        numberedItems: [
          { title: 'LM Studio をダウンロードしてインストールする', whyItMatters: 'ローカル LLM 推論用の無料のクロスプラットフォーム GUI です。CLI は不要です。' },
          { title: 'Qwen3.8 27B を検索してダウンロードする', whyItMatters: 'LM Studio のカタログには、[Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) が GGUF 形式と MLX 形式で 16.10 GB として掲載されています。お使いのプラットフォームに合うビルドを選んでください。' },
          { title: 'ロードする前にコンテキスト長を設定する', whyItMatters: 'モデルのロード設定で Context Length を 32768 以上に引き上げます。コンテキストが長いほどメモリが必要になるため、ロードに失敗する場合は小さくしてください。' },
          { title: 'ローカルサーバーを起動する', whyItMatters: 'LM Studio のサーバーは OpenAI 互換 API を提供し、ドキュメントの例では localhost:1234 が使われています。この URL をクライアントと PromptQuorum で使います。' },
          { title: 'サーバーが応答することを確認する', whyItMatters: 'models エンドポイントにリクエストを送ると、ロード済みのモデルが一覧表示され、ポートも確認できます。' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: 'モデルのロードに失敗する場合は、コンテキスト長または GPU レイヤー数を減らすか、より小さい Qwen3.5 のサイズに切り替えてください。VRAM に収まらないモデルはシステム RAM にあふれ、はるかに低速になります。',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'ローカルQwenをClaude Codeで使う',
        content: [
          'Ollama と LM Studio はどちらも Anthropic 互換のエンドポイントを公開しているため、別途プロキシを用意しなくても Claude Code からローカルの Qwen モデルを利用できます。Claude 以外のモデルでの動作、特にツール呼び出しはモデルに依存するため、まず小さなタスクで試してください。',
          'Ollama では `ollama launch claude` を実行するか、変数を自分で設定します：`ANTHROPIC_AUTH_TOKEN=ollama`、`ANTHROPIC_API_KEY=""`、`ANTHROPIC_BASE_URL=http://localhost:11434` を設定し、`claude --model <your-model>` を起動します。[Ollama の Claude Code ガイド](https://docs.ollama.com/integrations/claude-code)は、ローカルモデルには 64k トークン以上のコンテキストウィンドウを推奨しています。',
          'LM Studio ではサーバーが `/v1/messages` を受け付けます。`ANTHROPIC_BASE_URL=http://localhost:1234` と `ANTHROPIC_AUTH_TOKEN=lmstudio` を設定し、`claude --model <model-id>` を起動します。最新の詳細は [LM Studio の Anthropic 互換ページ](https://lmstudio.ai/docs/developer/anthropic-compat)を参照してください。',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Claude Code の設定がシェル変数を上書きすることがあります。接続に失敗する場合は、Claude Code 内で /status を実行して、どのエンドポイントを使っているか確認してください。' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorumとの接続',
        content: [
          'PromptQuorum は1つのプロンプトを複数のモデルに送信します。ローカルの Qwen インスタンスをターゲットに追加するには、PromptQuorum のローカルモデルエンドポイントを OpenAI 互換の Ollama URL に向け、作成したモデルタグを入力します。現在のフィールド名はアプリの設定画面で確認してください。',
          'Ollama には `http://localhost:11434/v1`、LM Studio には `http://localhost:1234/v1` を使います。フォームで API キーが必須の場合は、どちらのサーバーもデフォルトではキー認証を必要としないため、空でない任意の文字列を入力してください。クラウドプロバイダーの設定は別個に管理されます。',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum をローカルの Qwen に接続するには、エンドポイントとして http://localhost:11434/v1 を、モデル名として作成したモデルタグ（例：qwen3.8-32k）を入力します。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'トラブルシューティング',
        items: [
          '**応答が途中で切れる、または長いプロンプトの冒頭が無視される**：コンテキスト長が低すぎます。Modelfile の `PARAMETER num_ctx` を大きくして再ビルドし、`ollama create` でモデルを作り直して、`ollama ps` で値を確認してください。',
          '**CUDA out of memory エラー、または生成が非常に遅い**：モデルとコンテキストが VRAM に収まっていません。より小さいサイズ（`qwen3.5:9b`）に切り替えるか、コンテキスト長を下げるか、より小さい量子化タグを選んでください。',
          '**Ollama API が 404 を返す**：モデル名が一致していません。`ollama list` を実行し、表示された正確な名前（例：`qwen3.8-32k`）を使ってください。',
          '**生成が遅い**：`ollama ps` を実行してください。PROCESSOR が 100% GPU ではなく CPU/GPU の分割になっている場合、モデルが VRAM に収まっていません。コンテキストまたはモデルサイズを減らし、GPU を多く使う他のアプリケーションを閉じてください。',
          '**LM Studio に「failed to load model」と表示される**：メモリが不足しています。コンテキスト長を減らすか、GPU オフロードを下げるか、より小さいモデルを選んでください。',
          '**PromptQuorum が認証エラーを返す**：フォームでキーが必須の場合は、空でない任意の文字列を入力してください。Ollama はデフォルトでは API キー認証を必要としません。',
          '**Ollama が GPU ではなく CPU を使う**：NVIDIA ではドライバーがインストールされていることを確認してください（`nvidia-smi` に GPU が表示されるはずです）。Mac では Ollama が自動的に Metal を使います。使われない場合は ollama.com から Ollama を再インストールしてください。',
          '**モデルのダウンロードが止まる、または失敗する**：`ollama pull qwen3.8:27b` をもう一度実行してください。Ollama は中断した位置から再開します。別の方法として、[Hugging Face](https://huggingface.co/Qwen) から GGUF をダウンロードし、Modelfile の FROM 行でそのローカルパスを指定することもできます。',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps` を実行すると、どのモデルがロードされ、どれだけメモリを使い、どのコンテキストが割り当てられているかを確認できます。別のモデルをロードする前に、`ollama stop <model>` で1つをアンロードしてください。' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: '消費電力と運用コスト',
        content: [
          'ハードウェアは一度きりのコストで、電気代と、比較対象としての API 料金が運用コストです。以下の数値は計算例のための仮定であり、測定値ではありません。PromptQuorum はこれらのシステムの消費電力を計測しておらず、消費電力量はモデル、コンテキスト、GPU によって異なります。',
          'GPU ワークステーションの例：消費電力 450 W、1日 8 時間、稼働 250 日、電気料金 0.35 EUR/kWh と仮定すると、0.45 kW x 8 h x 250 日 x 0.35 EUR = **年間 315 EUR** になります。同じスケジュールで消費電力 50 W と仮定した Mac では、0.05 kW x 8 h x 250 日 x 0.35 EUR = **年間 35 EUR** です。',
          'API との比較：Anthropic は[料金ページ](https://platform.claude.com/docs/en/about-claude/pricing)で、Claude Sonnet 5 を入力 100 万トークンあたり $2、出力 100 万トークンあたり $10 と掲載しています。1日 1,000 万トークンのワークロードを 250 日続けると年間 25 億トークンで、すべて入力なら $5,000、すべて出力なら $25,000 です。実際のワークロードは両方が混在するため、請求額はこの上下限の間に収まります。価格は変更されるため、判断する前にページを確認してください。',
          '損益分岐点（月数）= ハードウェア価格 /（月間 API コスト - 月間電気代）。ハードウェア価格にはお住まいの市場の現在の小売価格を、API コストにはご自身のトークン量を使ってください。',
        ],
        rows: [
          { 'オプション': 'GPU ワークステーション', '想定消費電力': '450 W', '年間電気代': '315 EUR', '年間 API コスト': '$0（ローカル）' },
          { 'オプション': 'Mac（Apple Silicon）', '想定消費電力': '50 W', '年間電気代': '35 EUR', '年間 API コスト': '$0（ローカル）' },
          { 'オプション': 'Claude Sonnet 5 API', '想定消費電力': 'n/a', '年間電気代': 'n/a', '年間 API コスト': '$5,000-25,000' },
        ],
        columns: ['オプション', '想定消費電力', '年間電気代', '年間 API コスト'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: 'これらは 1日 1,000 万トークンを前提にした例示的な推定値です。ローカルモデルとホスト型モデルでは品質と能力が異なるため、価格だけでなく、必要な成果と合わせてコストを比較してください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Qwen ローカル導入ガイド：Qwen モデルのハードウェア別目安](/ja/local-llms/qwen-local-deployment-guide-2026)',
          '[画像入力のために Qwen-VL をローカルで動かす](/ja/local-llms/run-qwen-vl-locally-2026)',
          '[ローカル利用での Qwen、Llama、Mistral の比較](/ja/local-llms/qwen-vs-llama-vs-mistral)',
          '[コーディング向けのおすすめローカル LLM](/ja/local-llms/best-local-llms-for-coding)',
          '[ローカル LLM にはどれくらいの VRAM が必要？](/ja/local-llms/how-much-vram-local-llm)',
          '[EU 企業がローカルの Qwen に切り替える理由](/ja/blog/eu-companies-local-qwen-gdpr-shift)',
          '[ローカル LLM ガイド一覧](/ja/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'Qwen 3.6・3.8 をローカルで動かす最小限の必要スペックは？', a: '27B モデルの場合は、24 GB の GPU、または 32 GB 以上のユニファイドメモリを搭載した Apple Silicon Mac を目安にしてください。Ollama のダウンロードが 17-19 GB で、その上にコンテキストキャッシュが加わるためです。より小さいハードウェアでは Qwen3.5 を使います。9B ビルドのダウンロードは 6.6-7.6 GB、4B ビルドは 3.3-4.0 GB です。メモリの目安は推定値であり、実測値ではありません。' },
          { q: 'Qwen 3.6 27B は 16GB VRAM で動きますか？メモリは足りますか？', a: '完全には動きません。qwen3.6:27b のダウンロードは 18-19 GB（q4_K_M タグは 17 GB）で、コンテキストキャッシュを数える前の時点で 16 GB を超えています。Ollama はレイヤーを GPU と CPU に分割できますが、生成ははるかに遅くなります。16GB VRAM の GPU では、代わりに qwen3.5:9b（6.6-7.6 GB）を使ってください。' },
          { q: 'Ollama でプロンプトが途中で切れるのはなぜですか？', a: 'Ollama のデフォルトのコンテキスト長は VRAM に依存します。24 GiB 未満では 4k トークン、24 から 48 GiB では 32k、48 GiB 以上では 256k です。割り当てられたコンテキストを超えた部分は切り捨てられます。Modelfile に `PARAMETER num_ctx 32768` を設定するか、`OLLAMA_CONTEXT_LENGTH` を付けてサーバーを起動し、`ollama ps` で値を確認してください。Ollama はエージェントやコーディングツールに最低 64,000 トークンを推奨しています。' },
          { q: 'Qwen は 3.8、3.6、3.5 のどれを使うべきですか？', a: 'GPU メモリが約 24 GB ある場合、または 32 GB 以上の Mac なら Qwen3.8-27B を選んでください。モデルカードでは、共通のベンチマークで Qwen3.6-27B より高いスコアと報告されています（ベンダー報告値）。1世代前を使いたい場合は、Qwen3.6-27B またはその 35B-A3B の mixture-of-experts ビルドを選びます。性能の低いハードウェアでは Qwen3.5（0.8B から 9B）を選んでください。' },
          { q: 'Qwen をローカルで動かせば GDPR に準拠できますか？', a: 'ローカル推論ではプロンプトが自分のマシン内にとどまるため、推論ステップで第三者のモデル提供者への送信は生じません。ただし、それだけで処理全体が準拠するわけではなく、法的根拠、セキュリティ、保存期間、スタックの他の部分に関する契約は引き続き適用されます。これは一般的な情報であり、法的助言ではありません。データ保護責任者にご相談ください。' },
          { q: 'Qwen は CPU のみで動きますか？', a: '動きます。GPU のないシステムでも llama.cpp や Ollama で実行できますが、GPU 推論よりはるかに遅く、速度は CPU とメモリ帯域幅に依存します。CPU のみで使う場合は Qwen3.5 の 4B や 9B などの小さいサイズを選んでください。27B モデルはリアルタイムの会話には非現実的と考えてください。' },
          { q: 'Qwen を新しいバージョンに更新するには？', a: '`ollama pull qwen3.8:27b` をもう一度実行してください。タグが更新されていれば、Ollama は変更されたレイヤーだけをダウンロードします。タグは常にそのタグ用に公開されたビルドを指すため、新しい世代（たとえば将来の Qwen リリース）には新しいタグが必要です。LM Studio では、モデルカタログで新しいビルドを確認してください。' },
          { q: 'ローカルの Qwen で Claude Code を使えますか？', a: '使えます。Ollama と LM Studio はどちらも Anthropic 互換のエンドポイントを公開しています。Ollama では `ollama launch claude` を実行するか ANTHROPIC_BASE_URL を http://localhost:11434 に設定し、LM Studio では http://localhost:1234 に設定します。ローカル接続に Anthropic の API キーは不要です。コンテキストは 64k トークン以上にし、まず小さなタスクでツール呼び出しを試してください。' },
          { q: 'Qwen は商用利用が無料ですか？', a: 'Qwen3.8-27B、Qwen3.6-27B、Qwen3.5-9B のモデルカードには Apache 2.0 ライセンスが記載されており、その条件の下で商用利用が認められています。Qwen3.8 の他のモデルは異なるライセンスを使っています（Qwen3.8-Flash-Next：qwen-community-1.0、Qwen3.8-2.4T-A95B：qwen3.8-max）。ダウンロードする個別のモデルのカードで、ライセンスを必ず確認してください。' },
          { q: 'Ollama と LM Studio のどちらを使うべきですか？', a: 'ヘッドレスサーバー、スクリプト、IDE プラグイン、PromptQuorum には Ollama を使ってください。視覚的なモデルブラウザとチャットウィンドウが欲しい場合は LM Studio を使います。どちらも OpenAI 互換 API を提供でき、Anthropic 互換エンドポイント経由で Claude Code にも対応できるため、どちらか一方を使って、後から切り替えることもできます。' },
        ],
      },
    },
  },
  zh: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: '2026 年如何在本地运行 Qwen 3.6 与 Qwen 3.8:Ollama 与 LM Studio 部署指南',
    seoTitle: '本地运行 Qwen 3.6/Qwen 3.8(2026)指南',
    intro: 'Qwen3.8-27B 和 Qwen3.6-27B 是 270 亿参数的稠密模型,可通过 Ollama 或 LM Studio 在本地部署。Ollama 的下载体积约为 18 GB,因此实际可行的起点是 24 GB 显存的 GPU,或统一内存 32 GB 及以上的 Mac;16 GB 显存的 GPU 应选择更小的 Qwen3.5 尺寸。本指南涵盖模型选择、真实下载体积、上下文长度设置、Ollama 与 LM Studio 部署、Claude Code 接入、故障排查和运行成本。',
    metaDescription: '本地运行 Qwen 3.6 或 3.8 27B:Ollama 与 LM Studio 的真实下载体积、24 GB 显存 GPU 或 32 GB 内存 Mac 的要求、上下文长度修复与 Claude Code 配置。',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-zh.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '阅读约10分钟',
    educationalLevel: 'Beginner',
    audience: '首次部署本地 LLM 的开发者,以及需要符合 GDPR 的 AI 方案的欧盟团队',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**可以,Qwen 3.6 和 Qwen 3.8 都能在本地运行:安装 Ollama,执行 `ollama run qwen3.8:27b`(下载约 18 GB),硬件为 24 GB 显存的 GPU,或统一内存 32 GB 及以上的 Mac。上一代请用 `qwen3.6:27b`;16 GB 显存的 GPU 请用 `qwen3.5:9b`(约 7 GB)。Ollama 按显存决定默认上下文长度(低于 24 GiB 时为 4k tokens),请将其调到 32768 或更高。**',
    nextStep: {
      text: 'Qwen 已在本地运行。接下来看看哪些界面能让它更好用。',
      label: '2026 最佳本地 LLM 前端 →',
      href: '/zh/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      zh: {
        question: '如何在本地运行 Qwen 3.6 或 3.8?',
        answer: '安装 Ollama,执行 `ollama pull qwen3.8:27b`(约 18 GB),再执行 `ollama run qwen3.8:27b`。上一代请用 `qwen3.6:27b`。想用图形界面,可安装 LM Studio 并下载 Qwen3.8-27B(LM Studio 目录中为 16.10 GB)。请把上下文长度调到 32768 或更高,因为显存低于 24 GiB 的 GPU 上,Ollama 默认只有 4k tokens。',
        bullets: [
          '硬件:27B 模型需要 24 GB 显存的 GPU,或统一内存 32 GB 及以上的 Apple Silicon',
          '16 GB 显存的 GPU:改用 qwen3.5:9b(下载 6.6-7.6 GB),因为 27B 的下载体积为 17-19 GB',
          '拉取:ollama pull qwen3.8:27b(约 18 GB)或 qwen3.6:27b(约 17-19 GB)',
          '上下文:显存低于 24 GiB 时,Ollama 默认 4k tokens;请设为 32768 或更高',
          'LM Studio 方案:图形界面,无需命令行,本地服务器地址为 localhost:1234',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '2026 年为什么要在本地运行 Qwen', anchor: '#why-local' },
      { label: '该选哪个 Qwen 模型', anchor: '#choose-model' },
      { label: '能在本地运行 Qwen 3.6 吗?硬件要求', anchor: '#hardware' },
      { label: '用 Ollama 部署', anchor: '#ollama-setup' },
      { label: '用 LM Studio 部署', anchor: '#lm-studio-setup' },
      { label: '用本地 Qwen 驱动 Claude Code', anchor: '#claude-code' },
      { label: '接入 PromptQuorum', anchor: '#promptquorum' },
      { label: '故障排查', anchor: '#troubleshooting' },
      { label: '耗电与运行成本', anchor: '#power-tco' },
      { label: '相关阅读', anchor: '#related-reading' },
      { label: '常见问题', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**两条路径**:Ollama(命令行、无界面、可直接提供 API)或 LM Studio(图形界面、无需命令行)。两者都能在本地运行 Qwen3.8-27B 和 Qwen3.6-27B。',
          '**模型选择**:Qwen3.8-27B 是 Hugging Face 上最新的 27B 版本(据其模型卡为 Apache 2.0 许可);Qwen3.6-27B 是上一代;Qwen3.5 提供 0.8B 到 9B 的小尺寸,适合配置较低的硬件。',
          '**硬件**:27B 的下载体积为 17-19 GB,因此 24 GB 显存的 GPU,或统一内存 32 GB 及以上的 Mac,是实际可行的下限。16 GB 显存的 GPU 装不下完整的 27B 模型,请改用 `qwen3.5:9b`。',
          '**上下文修复**:Ollama 的默认上下文取决于显存(低于 24 GiB 时为 4k tokens)。请把 `num_ctx` 或 `OLLAMA_CONTEXT_LENGTH` 设为 32768 或更高;编程智能体建议 64k 或更高。',
          '**隐私**:本地推理让提示词留在你的设备上。这样推理环节不再涉及向第三方传输数据,但这本身并不能让你更广泛的数据处理自动符合 GDPR。',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026 年为什么要在本地运行 Qwen',
        content: [
          '在本地运行 Qwen 意味着:购置硬件后没有按 token 计费的费用,提示词不会离开你的设备,模型离线也能继续工作。Qwen 团队在 Hugging Face 上以 Apache 2.0 许可发布 27B 模型([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)、[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)),因此在该许可下允许商用;下载具体型号时,请务必重新阅读其模型卡上的许可条款。',
          '隐私是第二个原因。Qwen 在你自己的硬件上运行时,提示词、代码和客户数据不会发送给模型提供方,因此推理环节不涉及 [GDPR 第五章](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679)意义上的跨境传输。你的其他数据处理义务(法律依据、安全措施、保存期限、技术栈其余部分的供应商合同)依然适用。以上为一般性信息,不构成法律意见。 下载模型和检查更新仍会使用网络，只有推理在本地运行。',
          '第三个原因是可用性和可控性:你可以固定具体的模型标签,自行选择上下文长度,并决定何时更新。速度取决于你的 GPU 或 Mac、量化方式和上下文长度,请在自己的机器上实测,不要依赖公开数字。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '在本地运行 Qwen3.8-27B 或 Qwen3.6-27B,购置硬件后没有按 token 计费的费用,提示词留在你自己的设备上,仅模型本身就需要约 18 GB 内存。' },
          { type: 'plain-terms', text: '本地 LLM 指 AI 模型运行在你自己的电脑上。你下载模型文件(27B 的 Qwen 模型约 17-19 GB),输入的每条提示词都在你的设备上处理,而不是发送给服务提供方。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '本地该运行哪个 Qwen 模型:3.8、3.6 还是 3.5',
        content: [
          '在内存允许的范围内,选择最新一代。Qwen3.8-27B(2026 年 8 月发布)和 Qwen3.6-27B(2026 年 4 月发布)是带视觉编码器、原生支持 262,144 tokens 上下文的稠密模型;Qwen3.5(2026 年 2 月发布)提供小尺寸版本。模型卡报告称,在两者共有的基准测试上,Qwen3.8-27B 的得分高于 Qwen3.6-27B:SWE-bench Pro 61.7 对 53.5,LiveCodeBench v6 90.3 对 83.9,GPQA Diamond 89.2 对 87.8(厂商自报,见 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 与 [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) 模型卡,使用 Qwen 团队自己的测试框架运行,仅供参考)。',
          '下表列出的是 [Qwen3.8](https://ollama.com/library/qwen3.8)、[Qwen3.6](https://ollama.com/library/qwen3.6) 和 [Qwen3.5](https://ollama.com/library/qwen3.5) 在 Ollama 库页面上的下载体积。内存建议是 PromptQuorum 的估算:下载体积再加 2-6 GB 的上下文缓存和运行时开销,并非实测值。',
        ],
        rows: [
          { '模型': 'Qwen3.8 27B', 'Ollama 标签': 'qwen3.8:27b', '下载大小': '18 GB', '内存建议(估算)': '24 GB GPU / Mac 32 GB+' },
          { '模型': 'Qwen3.8 27B Q8_0', 'Ollama 标签': 'qwen3.8:27b-q8_0', '下载大小': '30 GB', '内存建议(估算)': '40 GB+ GPU / Mac 48 GB+' },
          { '模型': 'Qwen3.6 27B', 'Ollama 标签': 'qwen3.6:27b', '下载大小': '18-19 GB', '内存建议(估算)': '24 GB GPU / Mac 32 GB+' },
          { '模型': 'Qwen3.6 35B-A3B (MoE)', 'Ollama 标签': 'qwen3.6:35b-a3b', '下载大小': '23 GB', '内存建议(估算)': '32 GB GPU / Mac 48 GB+' },
          { '模型': 'Qwen3.5 9B', 'Ollama 标签': 'qwen3.5:9b', '下载大小': '6.6-7.6 GB', '内存建议(估算)': '12-16 GB GPU' },
          { '模型': 'Qwen3.5 4B', 'Ollama 标签': 'qwen3.5:4b', '下载大小': '3.3-4.0 GB', '内存建议(估算)': '8 GB GPU / 16 GB RAM' },
        ],
        columns: ['模型', 'Ollama 标签', '下载大小', '内存建议(估算)'],
        tableFormat: true,
        note: '请始终使用带尺寸的明确标签,例如 qwen3.8:27b,因为 qwen3.5 这样的裸名称指向的是 9B 版本。Qwen3.8 系列还包括更大的模型(Qwen3.8-Flash-Next,总参数 125B、激活参数 6B,采用 qwen-community-1.0 许可;以及 Qwen3.8-2.4T-A95B,采用 qwen3.8-max 许可)。这些许可与 Apache 2.0 不同,商用前请先阅读模型卡。',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-zh.webp',
        imageAlt: 'Qwen 本地模型大小：27B 约 18 GB，9B 约 7 GB',
        imageCaption: '本地运行的 Qwen 模型尺寸,以及各版本在 Ollama 上的下载体积。',
      },
      hardware: {
        id: 'hardware',
        title: '能在本地运行 Qwen 3.6 吗?硬件要求',
        content: [
          '可以。限制因素是内存:27B 模型文件为 17-19 GB,上下文缓存和运行时开销还要另算。因此 16 GB 显存的 GPU 无法完整装下 27B 的 Q4_K_M 模型;Ollama 会把部分层拆分到 GPU 和 CPU 之间,速度会慢很多。16 GB 显卡请选 Qwen3.5 9B。',
        ],
        items: [
          '**24 GB 显存 GPU(RTX 3090、RTX 4090)**:可容纳 27B Q4_K_M 的下载(17-19 GB),并留出几 GB 给上下文',
          '**32 GB 显存 GPU(RTX 5090)**:为长上下文或 23 GB 的 Qwen3.6 35B-A3B 版本留出更多空间',
          '**16 GB 显存 GPU(RTX 4080、RTX 4070 Ti Super)**:请用 `qwen3.5:9b`(6.6-7.6 GB);27B 模型只能在部分 CPU 卸载下运行,速度慢得多',
          '**Apple Silicon,32 GB 统一内存**:运行 27B 模型的实际最低配置;Ollama 提供 MLX 版本,例如 `qwen3.8:27b-mlx`(18 GB)',
          '**Apple Silicon,64 GB 或更多**:为 27B 模型、更长上下文以及同时打开的其他应用留出充裕空间',
          '**当前款 Mac**:搭载 M6 的 Mac mini 最高 32 GB,搭载 M5 Pro 的 Mac mini 最高 64 GB(据 [MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/)),搭载 M5 Max 的 Mac Studio 最高 128 GB,搭载 M5 Ultra 的最高 512 GB(512 GB 选项自 2026 年 10 月下旬起发货),据 [Apple 的 Mac Studio 发布公告](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/)和 [Apple 的 M6 发布公告](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/)。PromptQuorum 尚未对这些芯片做过基准测试。',
          '**系统内存**:搭配 GPU 推理至少 32 GB;如果还要运行完整的开发环境,建议 64 GB',
          '**存储**:运行一个 27B 模型至少需要 25 GB 可用空间(文件本身为 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon 的统一内存由 CPU 和 GPU 共享,macOS 还会保留一部分。32 GB 的 Mac 可以容纳 18 GB 的模型,但 64 GB 的 Mac 能为上下文和其他应用留出多得多的空间。' },
          { type: 'tip', text: '用 `ollama ps` 查看实际加载到内存中的内容:PROCESSOR 列显示模型是否 100% 运行在 GPU 上,CONTEXT 列显示已分配的上下文长度。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: '用 Ollama 部署',
        content: [
          'Ollama 是在本地运行 Qwen 最快的方式。它负责管理模型下载,在 localhost:11434 提供兼容 OpenAI 的 API,并替你处理 GGUF 文件。请从 [ollama.com](https://ollama.com/download) 安装。以下步骤使用 `qwen3.8:27b`;如需其他尺寸,把标签换成 `qwen3.6:27b` 或 `qwen3.5:9b` 即可。',
        ],
        numberedItems: [
          { title: '安装 Ollama', whyItMatters: 'Ollama 负责模型下载,并提供兼容 OpenAI 的本地 API。' },
          { title: '用明确的标签拉取 Qwen3.8 27B 模型', whyItMatters: '请明确使用 qwen3.8:27b。下载约 18 GB;16 GB 显存的 GPU 请改为拉取 qwen3.5:9b。' },
          { title: '创建 Modelfile,设置更大的上下文长度', whyItMatters: '在显存低于 24 GiB 的 GPU 上,Ollama 默认上下文为 4k tokens,24-48 GiB 时为 32k。设置 num_ctx 可以让每台机器上的长度都是明确的。' },
          { title: '构建自定义模型,并用 ollama ps 检查', whyItMatters: 'CONTEXT 和 PROCESSOR 两列可确认上下文长度已生效,以及模型是否运行在 GPU 上。' },
          { title: '测试 API 端点', whyItMatters: 'Ollama 在 localhost:11434/v1 提供兼容 OpenAI 的 API。可用这个端点连接 LLM 客户端、IDE 和 PromptQuorum。' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '不要跳过上下文设置。显存低于 24 GiB 时,Ollama 默认只有 4k tokens,约 3,000 个英文单词(含回复),较长的文件或对话会被截断。Ollama 建议智能体和编程工具至少使用 64,000 tokens;更大的上下文需要更多内存。' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-zh.webp',
        imageAlt: '用 Ollama 在本地运行 Qwen 的五个步骤',
        imageCaption: 'Qwen 的 Ollama 五步部署:安装、拉取、设置上下文长度、构建并检查、测试 API。',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: '用 LM Studio 部署',
        content: [
          'LM Studio 提供图形界面,无需任何命令行即可运行本地 LLM。对非技术用户和 Windows 环境来说,这是更简单的路径。请从 [lmstudio.ai](https://lmstudio.ai) 下载;它支持 macOS、Windows 和 Linux。',
        ],
        numberedItems: [
          { title: '下载并安装 LM Studio', whyItMatters: '免费、跨平台的本地 LLM 推理图形界面,无需命令行。' },
          { title: '搜索并下载 Qwen3.8 27B', whyItMatters: 'LM Studio 目录中的 [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8) 为 16.10 GB,提供 GGUF 和 MLX 格式。请选择与你的平台匹配的版本。' },
          { title: '加载前先设置上下文长度', whyItMatters: '在模型加载设置中,把 Context Length 提高到 32768 或更高。上下文越长需要的内存越多,如果加载失败,请把它调低。' },
          { title: '启动本地服务器', whyItMatters: 'LM Studio 服务器提供兼容 OpenAI 的 API,其文档示例使用 localhost:1234。请在客户端和 PromptQuorum 中使用这个地址。' },
          { title: '确认服务器有响应', whyItMatters: '向 models 端点发送请求,会列出已加载的模型并确认端口。' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: '如果模型加载失败,请降低上下文长度或 GPU 层数,或改用更小的 Qwen3.5 尺寸。装不进显存的模型会溢出到系统内存,速度会慢很多。',
      },
      claudeCode: {
        id: 'claude-code',
        title: '用本地 Qwen 驱动 Claude Code',
        content: [
          'Ollama 和 LM Studio 都提供兼容 Anthropic 的端点,因此 Claude Code 无需额外代理即可连接本地 Qwen 模型。使用非 Claude 模型时的表现取决于模型本身,尤其是工具调用,所以请先在小任务上测试。',
          '使用 Ollama 时,运行 `ollama launch claude`,或自行设置变量:`ANTHROPIC_AUTH_TOKEN=ollama`、`ANTHROPIC_API_KEY=""` 和 `ANTHROPIC_BASE_URL=http://localhost:11434`,然后启动 `claude --model <your-model>`。[Ollama 的 Claude Code 指南](https://docs.ollama.com/integrations/claude-code)建议本地模型使用 64k tokens 或更大的上下文窗口。',
          '使用 LM Studio 时,服务器接受 `/v1/messages`:设置 `ANTHROPIC_BASE_URL=http://localhost:1234` 和 `ANTHROPIC_AUTH_TOKEN=lmstudio`,然后启动 `claude --model <model-id>`。最新细节请参阅 [LM Studio 的 Anthropic 兼容性页面](https://lmstudio.ai/docs/developer/anthropic-compat)。',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Claude Code 的设置可能覆盖 shell 变量。如果连接失败,请在 Claude Code 内运行 /status,查看它实际使用的端点。' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: '接入 PromptQuorum',
        content: [
          'PromptQuorum 可以把一条提示词同时分发给多个模型。要把本地 Qwen 实例添加为目标,请在 PromptQuorum 中将本地模型端点指向兼容 OpenAI 的 Ollama 地址,并填入你构建的模型标签。当前的字段名称请查看应用设置。',
          'Ollama 使用 `http://localhost:11434/v1`,LM Studio 使用 `http://localhost:1234/v1`。如果表单要求填写 API 密钥,请输入任意非空字符串,因为这两种服务器默认都不要求密钥认证。云服务商有各自独立的配置。',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '要把 PromptQuorum 连接到本地 Qwen,请将 http://localhost:11434/v1 填为端点,并填入你构建的模型标签,例如 qwen3.8-32k。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '故障排查',
        items: [
          '**回复被截断,或忽略了长提示词的开头**:上下文长度太低。请在 Modelfile 中调大 `PARAMETER num_ctx`,用 `ollama create` 重新创建模型,并用 `ollama ps` 确认数值。',
          '**CUDA 显存不足错误,或生成速度极慢**:模型加上下文装不进显存。请换用更小的尺寸(`qwen3.5:9b`),降低上下文长度,或选择更小的量化标签。',
          '**Ollama API 返回 404**:模型名称不匹配。运行 `ollama list`,使用其中显示的准确名称(例如 `qwen3.8-32k`)。',
          '**生成速度慢**:运行 `ollama ps`。如果 PROCESSOR 显示 CPU/GPU 拆分而不是 100% GPU,说明模型装不进显存;请降低上下文或模型尺寸,并关闭其他占用 GPU 的应用。',
          '**LM Studio 显示“failed to load model”**:内存不足。请降低上下文长度,减少 GPU 卸载层数,或选择更小的模型。',
          '**PromptQuorum 返回认证错误**:如果表单要求填写密钥,请输入任意非空字符串。Ollama 默认不要求 API 密钥认证。',
          '**Ollama 使用 CPU 而不是 GPU**:在 NVIDIA 上,请确认已安装驱动(`nvidia-smi` 应能列出 GPU)。在 Mac 上,Ollama 会自动使用 Metal;如果没有,请从 ollama.com 重新安装 Ollama。',
          '**模型下载卡住或失败**:再次运行 `ollama pull qwen3.8:27b`;Ollama 会从中断处继续。也可以从 [Hugging Face](https://huggingface.co/Qwen) 下载 GGUF 文件,并在 Modelfile 的 FROM 行中引用其本地路径。',
        ],
        callouts: [
          { type: 'tip', text: '运行 `ollama ps` 可查看已加载的模型、它们占用的内存和已分配的上下文。加载另一个模型前,用 `ollama stop <model>` 卸载当前模型。' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: '耗电与运行成本',
        content: [
          '硬件是一次性成本;电费以及用于对比的 API 费用才是持续成本。下面的数字是示例计算中的假设,不是实测值:PromptQuorum 没有对这些系统做过电量计量,功耗会随模型、上下文和 GPU 而变化。',
          'GPU 工作站示例:假设功耗 450 W,每天 8 小时,每年 250 个工作日,假设电价 0.35 EUR/kWh,则 0.45 kW x 8 h x 250 天 x 0.35 EUR = **每年 315 EUR**。同样的作息下,假设功耗 50 W 的 Mac 为 0.05 kW x 8 h x 250 天 x 0.35 EUR = **每年 35 EUR**。',
          'API 对比:Anthropic 在其[价格页面](https://platform.claude.com/docs/en/about-claude/pricing)上标注 Claude Sonnet 5 的价格为每百万输入 tokens $2、每百万输出 tokens $10。每天 1000 万 tokens、共 250 天的工作量,每年合计 25 亿 tokens,若全部为输入,费用为 $5,000,若全部为输出,费用为 $25,000。实际工作负载两者兼有,所以你的账单会落在这两个边界之间。价格会变动,决定前请查看该页面。',
          '回本月数 = 硬件价格 /(每月 API 费用 - 每月电费)。硬件价格请使用你所在市场的当前零售价,API 费用请按你自己的 token 用量计算。',
        ],
        rows: [
          { '方案': 'GPU 工作站', '假设功耗': '450 W', '年电费': '315 EUR', '年 API 费用': '$0(本地)' },
          { '方案': 'Mac(Apple Silicon)', '假设功耗': '50 W', '年电费': '35 EUR', '年 API 费用': '$0(本地)' },
          { '方案': 'Claude Sonnet 5 API', '假设功耗': '不适用', '年电费': '不适用', '年 API 费用': '$5,000-25,000' },
        ],
        columns: ['方案', '假设功耗', '年电费', '年 API 费用'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: '以上是按每天 1000 万 tokens 计算的示意性估算。本地模型与托管模型在质量和能力上有差异,因此比较成本时请结合你需要的效果,不要只看价格。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[Qwen 本地部署指南:各 Qwen 模型的硬件档位](/zh/local-llms/qwen-local-deployment-guide-2026)',
          '[在本地运行 Qwen-VL 处理图像输入](/zh/local-llms/run-qwen-vl-locally-2026)',
          '[本地使用:Qwen、Llama 与 Mistral 对比](/zh/local-llms/qwen-vs-llama-vs-mistral)',
          '[适合编程的最佳本地 LLM](/zh/local-llms/best-local-llms-for-coding)',
          '[本地 LLM 需要多少显存?](/zh/local-llms/how-much-vram-local-llm)',
          '[欧盟企业为何转向本地 Qwen](/zh/blog/eu-companies-local-qwen-gdpr-shift)',
          '[浏览全部本地 LLM 指南](/zh/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '在本地运行 Qwen 3.6 或 3.8 的最低硬件要求是什么?', a: '对于 27B 模型,请准备 24 GB 显存的 GPU,或统一内存 32 GB 及以上的 Apple Silicon Mac,因为 Ollama 的下载体积为 17-19 GB,上下文缓存还要另算。配置较低时请选 Qwen3.5:其 9B 版本下载 6.6-7.6 GB,4B 版本下载 3.3-4.0 GB。内存建议是估算值,不是实测值。' },
          { q: '16 GB 显存能运行 Qwen 3.6 27B 吗?', a: '无法完整运行。qwen3.6:27b 的下载体积为 18-19 GB(q4_K_M 标签为 17 GB),在计入上下文缓存之前就已超过 16 GB。Ollama 可以把层拆分到 GPU 和 CPU 之间,但生成速度会慢很多。16 GB 显存的 GPU 请改用 qwen3.5:9b(6.6-7.6 GB)。' },
          { q: '为什么 Ollama 会截断我的提示词?', a: 'Ollama 的默认上下文长度取决于显存:低于 24 GiB 为 4k tokens,24 到 48 GiB 为 32k,48 GiB 及以上为 256k。超出已分配上下文的内容会被截断。请在 Modelfile 中设置 `PARAMETER num_ctx 32768`,或用 `OLLAMA_CONTEXT_LENGTH` 启动服务器,再用 `ollama ps` 确认数值。Ollama 建议智能体和编程工具至少使用 64,000 tokens。' },
          { q: '该选哪个 Qwen 模型:3.8、3.6 还是 3.5?', a: '如果你有约 24 GB 的 GPU 显存,或 32 GB 及以上的 Mac,请选 Qwen3.8-27B;其模型卡在共有的基准测试上报告的得分高于 Qwen3.6-27B(厂商自报)。如果想用上一代,请选 Qwen3.6-27B 或其 35B-A3B 混合专家版本。配置较低的硬件请选 Qwen3.5(0.8B 到 9B)。' },
          { q: '在本地运行 Qwen 符合 GDPR 吗?', a: '本地推理让提示词留在你自己的设备上,因此推理环节不涉及向第三方模型提供方传输数据。但这本身并不能让你的整体数据处理自动合规:法律依据、安全措施、保存期限以及技术栈其余部分的合同依然适用。以上为一般性信息,不构成法律意见;请咨询你的数据保护官。' },
          { q: 'Qwen 可以只用 CPU 运行吗?', a: '可以,在没有 GPU 的系统上通过 llama.cpp 或 Ollama 运行,但速度远慢于 GPU 推理,具体速度取决于你的 CPU 和内存带宽。仅用 CPU 时请选择 Qwen3.5 4B 或 9B 这样的小尺寸,并预期 27B 模型难以胜任实时对话。' },
          { q: '如何把 Qwen 更新到新版本?', a: '再次运行 `ollama pull qwen3.8:27b`。如果该标签已更新,Ollama 只会下载有变化的层。标签始终指向为它发布的版本,因此更新一代(例如未来的 Qwen 版本)需要新的标签。在 LM Studio 中,请在模型目录里查看是否有更新的版本。' },
          { q: '可以用本地 Qwen 驱动 Claude Code 吗?', a: '可以。Ollama 和 LM Studio 都提供兼容 Anthropic 的端点。使用 Ollama 时,运行 `ollama launch claude`,或把 ANTHROPIC_BASE_URL 设为 http://localhost:11434;使用 LM Studio 时,设为 http://localhost:1234。本地连接不需要 Anthropic API 密钥。请使用 64k tokens 或更大的上下文,并先在小任务上测试工具调用。' },
          { q: 'Qwen 可以免费商用吗?', a: 'Qwen3.8-27B、Qwen3.6-27B 和 Qwen3.5-9B 的模型卡列出的是 Apache 2.0 许可,在其条款下允许商用。Qwen3.8 的其他模型使用不同的许可(Qwen3.8-Flash-Next:qwen-community-1.0,Qwen3.8-2.4T-A95B:qwen3.8-max),因此请阅读你所下载的具体模型卡上的许可。' },
          { q: '该用 Ollama 还是 LM Studio?', a: '需要无界面服务器、脚本、IDE 插件和 PromptQuorum 时,请用 Ollama。需要可视化的模型浏览器和聊天窗口时,请用 LM Studio。两者都能提供兼容 OpenAI 的 API,也都能通过兼容 Anthropic 的端点为 Claude Code 提供服务,所以你可以任选其一,之后随时切换。' },
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'monthly',
    next_refresh_due: '2026-12-15',
    designSkin: 'hub',
    theme: 'Getting Started',
    title: 'Qwen 3.6, Qwen 3.8 로컬 설치 2026: Ollama와 LM Studio로 실행하는 방법과 사양',
    seoTitle: 'Qwen 3.6·3.8 로컬 설치 2026: Ollama 사양',
    intro: 'Qwen3.8-27B와 Qwen3.6-27B는 Ollama 또는 LM Studio로 로컬에서 실행할 수 있는 27B dense 모델입니다. Ollama 다운로드 크기는 약 18 GB이므로 24 GB GPU 또는 통합 메모리 32 GB 이상의 Mac이 현실적인 출발점이며, 16 GB GPU에서는 더 작은 Qwen3.5 크기를 사용해야 합니다. 이 가이드는 모델 선택, 실제 다운로드 크기, 컨텍스트 길이 설정, Ollama와 LM Studio 설치, Claude Code, 문제 해결, 운영 비용을 다룹니다.',
    metaDescription: 'Qwen 3.6·3.8 27B 로컬 설치: Ollama·LM Studio 다운로드 크기, 24 GB GPU·Mac 32 GB 사양, 컨텍스트 설정, Claude Code 연결을 정리했습니다.',
    heroImage: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ko.webp',
    publishDate: '2026-05-16',
    dateModified: '2026-11-15',
    last_full_refresh: '2026-11-15',
    next_seo_review_due: '2027-01-01',
    last_seo_review: '2026-11-15',
    current_models_mentioned: ['Qwen3.8-27B', 'Qwen3.6-27B', 'Qwen3.6-35B-A3B', 'Qwen3.5-9B', 'Qwen3.5-4B'],
    readTime: '10분 읽기',
    educationalLevel: 'Beginner',
    audience: '로컬 LLM을 처음 설정하는 개발자, GDPR을 준수하는 AI를 찾는 EU 팀',
    primaryTerm: 'run Qwen 3.6 locally',
    leadAnswerBlock: '**네, Qwen 3.6과 Qwen 3.8은 로컬에서 실행할 수 있습니다. Ollama를 설치한 뒤 24 GB GPU 또는 통합 메모리 32 GB 이상의 Mac에서 `ollama run qwen3.8:27b`(약 18 GB 다운로드)를 실행하면 됩니다. 이전 세대는 `qwen3.6:27b`, 16 GB GPU에서는 `qwen3.5:9b`(약 7 GB)를 사용하십시오. Ollama는 VRAM에 따라 기본 컨텍스트 길이를 정하므로(24 GiB 미만에서는 4k 토큰) 32768 이상으로 높이십시오.**',
    nextStep: {
      text: 'Qwen이 로컬에서 실행되고 있습니다. 이제 더 편하게 쓸 수 있는 UI를 살펴보십시오.',
      label: '최고의 로컬 LLM 프런트엔드 2026 →',
      href: '/ko/local-llms/best-local-llm-frontends',
    },
    quickAnswerTop: {
      ko: {
        question: 'Qwen 3.6 또는 3.8은 어떻게 로컬에서 실행합니까?',
        answer: 'Ollama를 설치하고 `ollama pull qwen3.8:27b`(약 18 GB)를 실행한 뒤 `ollama run qwen3.8:27b`를 실행합니다. 이전 세대는 `qwen3.6:27b`를 사용합니다. GUI가 필요하면 LM Studio를 설치하고 Qwen3.8-27B(LM Studio 카탈로그 기준 16.10 GB)를 내려받으십시오. Ollama의 기본 컨텍스트는 VRAM 24 GiB 미만 GPU에서 4k 토큰에 불과하므로 컨텍스트 길이를 32768 이상으로 높이십시오.',
        bullets: [
          '사양: 27B 모델에는 24 GB GPU 또는 통합 메모리 32 GB 이상의 Apple Silicon이 필요합니다',
          '16 GB GPU: 27B 다운로드가 17-19 GB이므로 qwen3.5:9b(6.6-7.6 GB 다운로드)를 대신 실행하십시오',
          '다운로드: ollama pull qwen3.8:27b(약 18 GB) 또는 qwen3.6:27b(약 17-19 GB)',
          '컨텍스트: Ollama는 VRAM 24 GiB 미만에서 기본 4k 토큰이므로 32768 이상으로 설정하십시오',
          'LM Studio 대안: GUI 제공, CLI 불필요, localhost:1234의 로컬 서버',
        ],
        updatedDate: '2026-11-15',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '2026년에 Qwen을 로컬에서 실행하는 이유', anchor: '#why-local' },
      { label: '실행할 Qwen 모델 선택', anchor: '#choose-model' },
      { label: 'Qwen 3.6 로컬 실행 사양', anchor: '#hardware' },
      { label: 'Ollama로 Qwen 설치', anchor: '#ollama-setup' },
      { label: 'LM Studio로 설치', anchor: '#lm-studio-setup' },
      { label: 'Claude Code에서 로컬 Qwen 사용', anchor: '#claude-code' },
      { label: 'PromptQuorum 연결', anchor: '#promptquorum' },
      { label: '문제 해결', anchor: '#troubleshooting' },
      { label: '전력 소비와 운영 비용', anchor: '#power-tco' },
      { label: '관련 글', anchor: '#related-reading' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**두 가지 방법**: Ollama(CLI, 헤드리스, API 사용 가능) 또는 LM Studio(GUI, CLI 불필요). 두 방법 모두 Qwen3.8-27B와 Qwen3.6-27B를 로컬에서 실행합니다.',
          '**모델 선택**: Qwen3.8-27B는 Hugging Face의 최신 27B 릴리스입니다(모델 카드 기준 Apache 2.0). Qwen3.6-27B는 이전 세대이고, Qwen3.5에는 낮은 사양용 소형 크기(0.8B~9B)가 있습니다.',
          '**사양**: 27B 다운로드는 17-19 GB이므로 24 GB GPU 또는 통합 메모리 32 GB 이상의 Mac이 현실적인 최소 사양입니다. 16 GB GPU에는 27B 모델 전체가 올라가지 않으므로 `qwen3.5:9b`를 사용하십시오.',
          '**컨텍스트 설정**: Ollama의 기본 컨텍스트는 VRAM에 따라 달라집니다(24 GiB 미만에서는 4k 토큰). `num_ctx` 또는 `OLLAMA_CONTEXT_LENGTH`를 32768 이상으로, 코딩 에이전트에는 64k 이상으로 설정하십시오.',
          '**개인정보**: 로컬 추론은 프롬프트를 내 컴퓨터에 둡니다. 추론 단계에서 제3자로의 전송은 없어지지만, 그것만으로 전체 처리가 GDPR을 준수하게 되는 것은 아닙니다.',
        ],
      },
      whyLocal: {
        id: 'why-local',
        title: '2026년에 Qwen을 로컬에서 실행하는 이유',
        content: [
          'Qwen을 로컬에서 실행하면 하드웨어를 갖춘 뒤에는 토큰당 요금이 없고, 프롬프트가 내 컴퓨터를 떠나지 않으며, 오프라인에서도 모델이 계속 동작합니다. Qwen 팀은 27B 모델을 Hugging Face에 Apache 2.0 라이선스로 공개하고 있으므로([Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B), [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B)) 해당 라이선스에 따라 상업적 사용이 허용됩니다. 다만 내려받는 정확한 변형의 모델 카드에서 라이선스를 항상 다시 확인하십시오.',
          '두 번째 이유는 개인정보입니다. Qwen을 자체 하드웨어에서 실행하면 프롬프트, 코드, 고객 데이터가 모델 제공업체로 전송되지 않으므로, 추론 단계에는 [GDPR 제5장](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=celex%3A32016R0679)에 따른 국외 이전이 발생하지 않습니다. 그 밖의 처리 의무(법적 근거, 보안, 보관, 나머지 스택의 공급업체 계약)는 그대로 적용됩니다. 이는 일반 정보이며 법률 자문이 아닙니다. 모델 다운로드와 업데이트 확인에는 여전히 네트워크가 사용되며, 로컬에서 실행되는 것은 추론뿐입니다.',
          '세 번째 이유는 가용성과 통제입니다. 정확한 모델 태그를 고정하고, 컨텍스트 길이를 정하고, 업데이트 시점을 직접 결정할 수 있습니다. 속도는 GPU 또는 Mac, quantization, 컨텍스트 길이에 따라 달라지므로 공개된 수치에 의존하지 말고 직접 측정하십시오.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen3.8-27B 또는 Qwen3.6-27B를 로컬에서 실행하면 하드웨어 구입 후 토큰당 요금이 없고, 프롬프트가 내 컴퓨터에 남으며, 모델만으로 약 18 GB의 메모리가 필요합니다.' },
          { type: 'plain-terms', text: '로컬 LLM이란 AI 모델이 내 컴퓨터에서 실행된다는 뜻입니다. 모델 파일(27B Qwen 모델은 약 17-19 GB)을 내려받으면, 입력하는 모든 프롬프트가 제공업체로 전송되지 않고 내 컴퓨터에서 처리됩니다.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '실행할 Qwen 모델 선택: 3.8, 3.6, 3.5',
        content: [
          '메모리가 허용하는 가장 최신 세대를 선택하십시오. Qwen3.8-27B(2026년 8월 출시)와 Qwen3.6-27B(2026년 4월 출시)는 vision encoder와 기본 262,144 토큰 컨텍스트를 갖춘 dense 모델이며, Qwen3.5(2026년 2월 출시)는 소형 크기를 제공합니다. 모델 카드에 따르면 공통 벤치마크에서 Qwen3.8-27B가 Qwen3.6-27B보다 높은 점수를 기록했습니다. SWE-bench Pro 61.7 대 53.5, LiveCodeBench v6 90.3 대 83.9, GPQA Diamond 89.2 대 87.8입니다(벤더 보고 수치로, [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)와 [Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B) 모델 카드에 있으며 Qwen 팀 자체 하네스로 실행한 결과이므로 참고용으로만 보십시오).',
          '표는 [Qwen3.8](https://ollama.com/library/qwen3.8), [Qwen3.6](https://ollama.com/library/qwen3.6), [Qwen3.5](https://ollama.com/library/qwen3.5) 라이브러리 페이지의 Ollama 다운로드 크기를 나타냅니다. 메모리 가이드는 PromptQuorum의 추정치로, 다운로드 크기에 컨텍스트 캐시와 런타임용 2-6 GB를 더한 값이며 실측값이 아닙니다.',
        ],
        rows: [
          { '모델': 'Qwen3.8 27B', 'Ollama 태그': 'qwen3.8:27b', '다운로드': '18 GB', '메모리 가이드(추정)': '24 GB GPU / Mac 32 GB+' },
          { '모델': 'Qwen3.8 27B Q8_0', 'Ollama 태그': 'qwen3.8:27b-q8_0', '다운로드': '30 GB', '메모리 가이드(추정)': '40 GB+ GPU / Mac 48 GB+' },
          { '모델': 'Qwen3.6 27B', 'Ollama 태그': 'qwen3.6:27b', '다운로드': '18-19 GB', '메모리 가이드(추정)': '24 GB GPU / Mac 32 GB+' },
          { '모델': 'Qwen3.6 35B-A3B (MoE)', 'Ollama 태그': 'qwen3.6:35b-a3b', '다운로드': '23 GB', '메모리 가이드(추정)': '32 GB GPU / Mac 48 GB+' },
          { '모델': 'Qwen3.5 9B', 'Ollama 태그': 'qwen3.5:9b', '다운로드': '6.6-7.6 GB', '메모리 가이드(추정)': '12-16 GB GPU' },
          { '모델': 'Qwen3.5 4B', 'Ollama 태그': 'qwen3.5:4b', '다운로드': '3.3-4.0 GB', '메모리 가이드(추정)': '8 GB GPU / 16 GB RAM' },
        ],
        columns: ['모델', 'Ollama 태그', '다운로드', '메모리 가이드(추정)'],
        tableFormat: true,
        note: '예를 들어 qwen3.8:27b처럼 항상 크기가 포함된 명시적 태그를 사용하십시오. qwen3.5처럼 이름만 쓰면 9B 빌드를 가리키기 때문입니다. Qwen3.8 계열에는 더 큰 모델도 있습니다(Qwen3.8-Flash-Next는 총 125B, 활성 6B 파라미터로 qwen-community-1.0 라이선스이고, Qwen3.8-2.4T-A95B는 qwen3.8-max 라이선스입니다). 이 라이선스들은 Apache 2.0과 다르므로 상업적 사용 전에 모델 카드를 읽으십시오.',
        image: '/images/run-qwen-locally-guide-2026-model-sizes-hero-ko.webp',
        imageAlt: 'Qwen 로컬 모델 크기: 27B 약 18 GB, 9B 약 7 GB',
        imageCaption: '로컬 사용을 위한 Qwen 모델 크기와 각 빌드의 Ollama 다운로드 크기입니다.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen 3.6 로컬 실행 사양: 하드웨어 요구 사항',
        content: [
          '네, 가능합니다. 제한 요소는 메모리입니다. 27B 모델 파일은 17-19 GB이며 컨텍스트 캐시와 런타임이 추가로 필요합니다. 따라서 VRAM 16 GB GPU에는 27B Q4_K_M 모델 전체가 올라가지 않으며, Ollama는 레이어를 GPU와 CPU로 나누어 처리하므로 속도가 느려집니다. 16 GB 카드에서는 Qwen3.5 9B를 선택하십시오.',
        ],
        items: [
          '**24 GB GPU(RTX 3090, RTX 4090)**: 27B Q4_K_M 다운로드(17-19 GB)를 담을 수 있고 컨텍스트용으로 몇 GB가 남습니다',
          '**32 GB GPU(RTX 5090)**: 긴 컨텍스트나 23 GB의 Qwen3.6 35B-A3B 빌드를 위한 여유가 더 있습니다',
          '**16 GB GPU(RTX 4080, RTX 4070 Ti Super)**: `qwen3.5:9b`(6.6-7.6 GB)를 사용하십시오. 27B 모델은 일부를 CPU로 오프로드해야만 실행되며 훨씬 느립니다',
          '**Apple Silicon, 통합 메모리 32 GB**: 27B 모델의 현실적인 최소 사양입니다. Ollama는 `qwen3.8:27b-mlx`(18 GB) 같은 MLX 빌드를 제공합니다',
          '**Apple Silicon, 64 GB 이상**: 27B 모델, 더 긴 컨텍스트, 다른 앱을 동시에 실행하기에 넉넉한 여유가 있습니다',
          '**최신 Mac**: M6 탑재 Mac mini는 최대 32 GB, M5 Pro 탑재 Mac mini는 최대 64 GB를 제공하며([MacStories](https://macstories.net/news/apple-announces-new-m6-and-m5-pro-mac-minis-along-with-m5-max-and-m5-ultra-mac-studios/) 기준), M5 Max 탑재 Mac Studio는 최대 128 GB, M5 Ultra 탑재 모델은 최대 512 GB입니다(512 GB 옵션은 2026년 10월 말부터 출하). [Apple의 Mac Studio 발표](https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/)와 [Apple의 M6 발표](https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/)를 참고하십시오. PromptQuorum은 이 칩들을 벤치마크하지 않았습니다.',
          '**시스템 RAM**: GPU 추론과 함께 쓸 때 최소 32 GB, 전체 개발 환경도 함께 실행한다면 64 GB',
          '**저장 공간**: 27B 모델 하나에 최소 25 GB의 여유 공간(파일은 17-19 GB)',
        ],
        callouts: [
          { type: 'note', text: 'Apple Silicon은 CPU와 GPU가 통합 메모리를 공유하며 macOS가 그 일부를 예약합니다. 32 GB Mac은 18 GB 모델을 담을 수 있지만, 64 GB Mac은 컨텍스트와 다른 애플리케이션을 위한 공간이 훨씬 더 많이 남습니다.' },
          { type: 'tip', text: '`ollama ps`로 실제로 메모리에 올라간 내용을 확인하십시오. PROCESSOR 열은 모델이 100% GPU에서 실행되는지 보여 주고, CONTEXT 열은 할당된 컨텍스트 길이를 보여 줍니다.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama로 Qwen 설치',
        content: [
          'Ollama는 Qwen을 로컬에서 실행하는 가장 빠른 방법입니다. 모델 다운로드를 관리하고, localhost:11434에서 OpenAI 호환 API를 제공하며, GGUF 파일을 대신 처리합니다. [ollama.com](https://ollama.com/download)에서 설치하십시오. 아래 단계는 `qwen3.8:27b`를 사용하며, 다른 크기를 쓰려면 태그를 `qwen3.6:27b` 또는 `qwen3.5:9b`로 바꾸십시오.',
        ],
        numberedItems: [
          { title: 'Ollama 설치', whyItMatters: 'Ollama는 모델 다운로드를 처리하고 OpenAI 호환 로컬 API를 제공합니다.' },
          { title: '명시적 태그로 Qwen3.8 27B 모델 내려받기', whyItMatters: 'qwen3.8:27b를 명시적으로 사용하십시오. 다운로드는 약 18 GB이며, 16 GB GPU에서는 qwen3.5:9b를 대신 내려받으십시오.' },
          { title: '더 큰 컨텍스트 길이로 Modelfile 만들기', whyItMatters: 'Ollama의 기본 컨텍스트는 VRAM 24 GiB 미만 GPU에서 4k 토큰, 24-48 GiB에서 32k입니다. num_ctx를 설정하면 모든 컴퓨터에서 길이가 명시적으로 고정됩니다.' },
          { title: '사용자 지정 모델을 빌드하고 ollama ps로 확인', whyItMatters: 'CONTEXT와 PROCESSOR 열에서 컨텍스트 길이가 적용되었는지, 모델이 GPU에서 실행되는지 확인할 수 있습니다.' },
          { title: 'API 엔드포인트 테스트', whyItMatters: 'Ollama는 localhost:11434/v1에서 OpenAI 호환 API를 제공합니다. 이 엔드포인트로 LLM 클라이언트, IDE, PromptQuorum을 연결하십시오.' },
        ],
        codeBlock: `# Step 1 - Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows - download from https://ollama.com/download

# Step 2 - Pull Qwen3.8 27B (explicit tag, about 18 GB)
ollama pull qwen3.8:27b
# Previous generation: ollama pull qwen3.6:27b
# 16 GB GPU: ollama pull qwen3.5:9b

# Step 3 - Create a Modelfile with an explicit context length
# Sampling values follow the thinking-mode settings on the Qwen model cards
cat > Modelfile <<'EOF'
FROM qwen3.8:27b
PARAMETER num_ctx 32768
PARAMETER temperature 1.0
PARAMETER top_p 0.95
PARAMETER top_k 20
EOF

# Step 4 - Build, run and check
ollama create qwen3.8-32k -f Modelfile
ollama run qwen3.8-32k
# In a second terminal: ollama ps   (check CONTEXT and PROCESSOR)

# Alternative to the Modelfile: set the server default
# OLLAMA_CONTEXT_LENGTH=32768 ollama serve

# Step 5 - Test the API
curl http://localhost:11434/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "qwen3.8-32k",
    "messages": [{"role": "user", "content": "Write a Python function to reverse a string."}]
  }'`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '컨텍스트 설정을 건너뛰지 마십시오. VRAM 24 GiB 미만에서 Ollama의 기본값은 4k 토큰으로, 응답을 포함해 약 3,000단어에 해당하며 긴 파일이나 대화는 잘립니다. Ollama는 에이전트와 코딩 도구에 최소 64,000 토큰을 권장하며, 더 큰 컨텍스트에는 더 많은 메모리가 필요합니다.' },
        ],
        image: '/images/run-qwen-locally-guide-2026-setup-steps-hero-ko.webp',
        imageAlt: 'Ollama로 Qwen을 로컬 실행하는 5단계',
        imageCaption: 'Qwen용 Ollama 5단계 설치: 설치, 내려받기, 컨텍스트 길이 설정, 빌드 및 확인, API 테스트.',
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studio로 설치',
        content: [
          'LM Studio는 CLI 명령 없이 로컬 LLM을 실행할 수 있는 GUI를 제공합니다. 비전문가와 Windows 환경에 더 쉬운 방법입니다. [lmstudio.ai](https://lmstudio.ai)에서 내려받으십시오. macOS, Windows, Linux용이 있습니다.',
        ],
        numberedItems: [
          { title: 'LM Studio 다운로드 및 설치', whyItMatters: '로컬 LLM 추론을 위한 무료 크로스 플랫폼 GUI입니다. CLI가 필요 없습니다.' },
          { title: 'Qwen3.8 27B 검색 및 다운로드', whyItMatters: 'LM Studio 카탈로그는 [Qwen3.8-27B](https://lmstudio.ai/models/qwen3.8)를 GGUF와 MLX 형식으로 16.10 GB에 제공합니다. 사용 중인 플랫폼에 맞는 빌드를 선택하십시오.' },
          { title: '로드 전에 컨텍스트 길이 설정', whyItMatters: '모델 로드 설정에서 Context Length를 32768 이상으로 높이십시오. 컨텍스트가 길수록 메모리가 더 필요하므로 로드에 실패하면 줄이십시오.' },
          { title: '로컬 서버 시작', whyItMatters: 'LM Studio 서버는 OpenAI 호환 API를 제공하며, 문서의 예시는 localhost:1234를 사용합니다. 이 URL을 클라이언트와 PromptQuorum에서 사용하십시오.' },
          { title: '서버 응답 확인', whyItMatters: 'models 엔드포인트에 요청하면 로드된 모델이 표시되고 포트를 확인할 수 있습니다.' },
        ],
        codeBlock: `# List the models served by LM Studio (default example port 1234)
curl http://localhost:1234/v1/models`,
        codeLanguage: 'bash',
        note: '모델 로드에 실패하면 컨텍스트 길이 또는 GPU 레이어 수를 낮추거나 더 작은 Qwen3.5 크기로 바꾸십시오. VRAM에 맞지 않는 모델은 시스템 RAM으로 넘어가 훨씬 느려집니다.',
      },
      claudeCode: {
        id: 'claude-code',
        title: 'Claude Code에서 로컬 Qwen 사용',
        content: [
          'Ollama와 LM Studio는 모두 Anthropic 호환 엔드포인트를 제공하므로 Claude Code가 별도 프록시 없이 로컬 Qwen 모델과 통신할 수 있습니다. Claude가 아닌 모델의 동작은 모델에 따라, 특히 tool calling에 따라 달라지므로 먼저 작은 작업으로 테스트하십시오.',
          'Ollama에서는 `ollama launch claude`를 실행하거나, `ANTHROPIC_AUTH_TOKEN=ollama`, `ANTHROPIC_API_KEY=""`, `ANTHROPIC_BASE_URL=http://localhost:11434` 변수를 직접 설정한 뒤 `claude --model <your-model>`을 시작하십시오. [Ollama Claude Code 가이드](https://docs.ollama.com/integrations/claude-code)는 로컬 모델에 64k 토큰 이상의 컨텍스트 창을 권장합니다.',
          'LM Studio에서는 서버가 `/v1/messages`를 받으므로 `ANTHROPIC_BASE_URL=http://localhost:1234`와 `ANTHROPIC_AUTH_TOKEN=lmstudio`를 설정한 뒤 `claude --model <model-id>`를 시작하십시오. 최신 내용은 [LM Studio의 Anthropic 호환 페이지](https://lmstudio.ai/docs/developer/anthropic-compat)를 참고하십시오.',
        ],
        codeBlock: `# Ollama: launch Claude Code against a local model
ollama launch claude

# Or set the variables manually (Ollama)
export ANTHROPIC_AUTH_TOKEN=ollama
export ANTHROPIC_API_KEY=""
export ANTHROPIC_BASE_URL=http://localhost:11434
claude --model qwen3.8-32k

# LM Studio equivalent
export ANTHROPIC_BASE_URL=http://localhost:1234
export ANTHROPIC_AUTH_TOKEN=lmstudio
claude --model <model-id-shown-in-LM-Studio>`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'tip', text: 'Claude Code 설정이 셸 변수를 덮어쓸 수 있습니다. 연결에 실패하면 Claude Code 안에서 /status를 실행해 어떤 엔드포인트를 사용하는지 확인하십시오.' },
        ],
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum 연결',
        content: [
          'PromptQuorum은 하나의 프롬프트를 여러 모델로 보냅니다. 로컬 Qwen 인스턴스를 대상으로 추가하려면 PromptQuorum의 로컬 모델 엔드포인트를 OpenAI 호환 Ollama URL로 지정하고 빌드한 모델 태그를 입력하십시오. 현재 필드 이름은 앱 설정에서 확인하십시오.',
          'Ollama에는 `http://localhost:11434/v1`, LM Studio에는 `http://localhost:1234/v1`을 사용하십시오. 양식에서 API 키를 요구하면 비어 있지 않은 아무 문자열이나 입력하십시오. 두 서버 모두 기본적으로 키 인증을 요구하지 않기 때문입니다. 클라우드 제공업체는 별도의 자체 설정을 유지합니다.',
        ],
        codeBlock: `# Endpoint values for a local Qwen target
Ollama base URL:     http://localhost:11434/v1
Ollama model name:   qwen3.8-32k      (the tag you built in the Modelfile step)

LM Studio base URL:  http://localhost:1234/v1
LM Studio model:     the identifier shown in LM Studio`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '로컬 Qwen에 PromptQuorum을 연결하려면 엔드포인트로 http://localhost:11434/v1을, 모델 이름으로 빌드한 모델 태그(예: qwen3.8-32k)를 입력하십시오.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: '문제 해결',
        items: [
          '**응답이 잘리거나 긴 프롬프트의 앞부분이 무시됨**: 컨텍스트 길이가 너무 낮습니다. 더 큰 `PARAMETER num_ctx`로 Modelfile을 다시 작성하고 `ollama create`로 모델을 다시 만든 뒤 `ollama ps`로 값을 확인하십시오.',
          '**CUDA out of memory 오류 또는 매우 느린 생성**: 모델과 컨텍스트가 VRAM에 맞지 않습니다. 더 작은 크기(`qwen3.5:9b`)로 바꾸거나, 컨텍스트 길이를 낮추거나, 더 작은 quantization 태그를 선택하십시오.',
          '**Ollama API가 404를 반환함**: 모델 이름이 일치하지 않습니다. `ollama list`를 실행해 표시된 정확한 이름(예: `qwen3.8-32k`)을 사용하십시오.',
          '**느린 생성**: `ollama ps`를 실행하십시오. PROCESSOR가 100% GPU가 아니라 CPU/GPU 분할로 표시되면 모델이 VRAM에 맞지 않는 것입니다. 컨텍스트나 모델 크기를 줄이고 GPU를 많이 쓰는 다른 애플리케이션을 종료하십시오.',
          '**LM Studio에 "failed to load model"이 표시됨**: 메모리가 부족합니다. 컨텍스트 길이를 줄이거나, GPU 오프로드를 낮추거나, 더 작은 모델을 선택하십시오.',
          '**PromptQuorum이 인증 오류를 반환함**: 양식에서 키를 요구하면 비어 있지 않은 아무 문자열이나 입력하십시오. Ollama는 기본적으로 API 키 인증을 요구하지 않습니다.',
          '**Ollama가 GPU 대신 CPU를 사용함**: NVIDIA에서는 드라이버가 설치되어 있는지 확인하십시오(`nvidia-smi`에 GPU가 표시되어야 합니다). Mac에서는 Ollama가 Metal을 자동으로 사용하며, 그렇지 않으면 ollama.com에서 Ollama를 다시 설치하십시오.',
          '**모델 다운로드가 멈추거나 실패함**: `ollama pull qwen3.8:27b`를 다시 실행하십시오. Ollama는 중단된 지점부터 이어서 받습니다. 대안으로 [Hugging Face](https://huggingface.co/Qwen)에서 GGUF를 내려받아 Modelfile의 FROM 줄에 로컬 경로를 지정하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps`를 실행하면 어떤 모델이 로드되어 있는지, 메모리를 얼마나 쓰는지, 할당된 컨텍스트가 얼마인지 볼 수 있습니다. 다른 모델을 로드하기 전에 `ollama stop <model>`로 하나를 언로드하십시오.' },
        ],
      },
      powerTco: {
        id: 'power-tco',
        title: '전력 소비와 운영 비용',
        content: [
          '하드웨어는 일회성 비용이며, 전기 요금과 비교 대상인 API 요금이 운영 비용입니다. 아래 수치는 계산 예시를 위한 가정이며 측정값이 아닙니다. PromptQuorum은 이 시스템들의 전력을 측정하지 않았고, 소비 전력은 모델, 컨텍스트, GPU에 따라 달라집니다.',
          'GPU 워크스테이션 예시: 소비 전력 450 W, 하루 8시간, 근무일 250일, 전기 요금 0.35 EUR/kWh를 가정하면 0.45 kW x 8 h x 250일 x 0.35 EUR = **연 315 EUR**입니다. 같은 일정에서 소비 전력 50 W를 가정한 Mac은 0.05 kW x 8 h x 250일 x 0.35 EUR = **연 35 EUR**입니다.',
          'API 비교: Anthropic은 [가격 페이지](https://platform.claude.com/docs/en/about-claude/pricing)에서 Claude Sonnet 5를 입력 토큰 100만 개당 $2, 출력 토큰 100만 개당 $10으로 게시하고 있습니다. 하루 1,000만 토큰을 250일 동안 처리하면 연 25억 토큰(2,500 million)이며, 모두 입력이면 $5,000, 모두 출력이면 $25,000입니다. 실제 워크로드는 둘이 섞이므로 청구액은 이 두 한계 사이에 놓입니다. 가격은 변하므로 결정하기 전에 해당 페이지를 확인하십시오.',
          '손익분기점(개월) = 하드웨어 가격 / (월 API 비용 - 월 전기 요금). 하드웨어 가격은 해당 시장의 현재 소매가를, API 비용은 직접 사용하는 토큰량을 기준으로 하십시오.',
        ],
        rows: [
          { '옵션': 'GPU 워크스테이션', '가정 전력': '450 W', '연간 전기 요금': '315 EUR', '연간 API 비용': '$0 (로컬)' },
          { '옵션': 'Mac (Apple Silicon)', '가정 전력': '50 W', '연간 전기 요금': '35 EUR', '연간 API 비용': '$0 (로컬)' },
          { '옵션': 'Claude Sonnet 5 API', '가정 전력': '해당 없음', '연간 전기 요금': '해당 없음', '연간 API 비용': '$5,000-25,000' },
        ],
        columns: ['옵션', '가정 전력', '연간 전기 요금', '연간 API 비용'],
        tableFormat: true,
        callouts: [
          { type: 'important', text: '이 수치는 하루 1,000만 토큰을 기준으로 한 예시 추정치입니다. 로컬 모델과 호스팅 모델은 품질과 기능이 다르므로 가격만 보지 말고 필요한 결과와 함께 비용을 비교하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 글',
        items: [
          '[Qwen 로컬 배포 가이드: Qwen 모델별 하드웨어 사양](/ko/local-llms/qwen-local-deployment-guide-2026)',
          '[이미지 입력을 위한 Qwen-VL 로컬 실행](/ko/local-llms/run-qwen-vl-locally-2026)',
          '[로컬 사용을 위한 Qwen vs Llama vs Mistral](/ko/local-llms/qwen-vs-llama-vs-mistral)',
          '[코딩용 최고의 로컬 LLM](/ko/local-llms/best-local-llms-for-coding)',
          '[로컬 LLM에는 VRAM이 얼마나 필요합니까?](/ko/local-llms/how-much-vram-local-llm)',
          '[EU 기업이 로컬 Qwen으로 전환하는 이유](/ko/blog/eu-companies-local-qwen-gdpr-shift)',
          '[모든 로컬 LLM 가이드 보기](/ko/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'Qwen 3.6 또는 3.8을 로컬에서 실행하기 위한 최소 사양은 무엇입니까?', a: '27B 모델에는 24 GB GPU 또는 통합 메모리 32 GB 이상의 Apple Silicon Mac을 권장합니다. Ollama 다운로드가 17-19 GB이고 컨텍스트 캐시가 추가로 필요하기 때문입니다. 더 낮은 사양에는 Qwen3.5를 사용하십시오. 9B 빌드는 6.6-7.6 GB, 4B 빌드는 3.3-4.0 GB를 내려받습니다. 메모리 가이드는 추정치이며 실측값이 아닙니다.' },
          { q: 'VRAM 16 GB에서 Qwen 3.6 27B를 실행할 수 있습니까?', a: '완전하게는 실행할 수 없습니다. qwen3.6:27b 다운로드는 18-19 GB(q4_K_M 태그는 17 GB)로, 컨텍스트 캐시를 계산하기 전에도 16 GB보다 큽니다. Ollama는 레이어를 GPU와 CPU로 나눌 수 있지만 생성 속도가 크게 느려집니다. 16 GB GPU에서는 qwen3.5:9b(6.6-7.6 GB)를 대신 실행하십시오.' },
          { q: 'Ollama가 프롬프트를 잘라내는 이유는 무엇입니까?', a: 'Ollama의 기본 컨텍스트 길이는 VRAM에 따라 달라집니다. 24 GiB 미만에서는 4k 토큰, 24-48 GiB에서는 32k, 48 GiB부터는 256k입니다. 할당된 컨텍스트를 넘는 내용은 잘립니다. Modelfile에 `PARAMETER num_ctx 32768`을 설정하거나 `OLLAMA_CONTEXT_LENGTH`로 서버를 시작한 뒤 `ollama ps`로 값을 확인하십시오. Ollama는 에이전트와 코딩 도구에 최소 64,000 토큰을 권장합니다.' },
          { q: '어떤 Qwen 모델을 실행해야 합니까: 3.8, 3.6, 3.5?', a: 'GPU 메모리가 약 24 GB이거나 32 GB 이상의 Mac이라면 Qwen3.8-27B를 선택하십시오. 모델 카드에 따르면 공통 벤치마크에서 Qwen3.6-27B보다 높은 점수를 기록했습니다(벤더 보고). 이전 세대를 원하면 Qwen3.6-27B 또는 35B-A3B mixture-of-experts 빌드를 선택하십시오. 낮은 사양에는 Qwen3.5(0.8B~9B)를 선택하십시오.' },
          { q: 'Qwen을 로컬에서 실행하면 GDPR을 준수합니까?', a: '로컬 추론은 프롬프트를 내 컴퓨터에 두므로 추론 단계에서 제3자 모델 제공업체로의 전송이 없습니다. 그렇다고 전체 처리가 그것만으로 준수되는 것은 아닙니다. 법적 근거, 보안, 보관, 나머지 스택의 계약은 여전히 적용됩니다. 이는 일반 정보이며 법률 자문이 아니므로 개인정보 보호 담당자에게 문의하십시오.' },
          { q: 'Qwen을 CPU만으로 실행할 수 있습니까?', a: '네, GPU가 없는 시스템에서 llama.cpp 또는 Ollama로 가능하지만 GPU 추론보다 훨씬 느리며 속도는 CPU와 메모리 대역폭에 따라 달라집니다. CPU 전용에는 Qwen3.5 4B나 9B 같은 소형 크기를 사용하고, 27B 모델은 실시간 대화에 비현실적이라고 생각하십시오.' },
          { q: 'Qwen을 새 버전으로 업데이트하려면 어떻게 합니까?', a: '`ollama pull qwen3.8:27b`를 다시 실행하십시오. 태그가 업데이트되었다면 Ollama는 변경된 레이어만 내려받습니다. 태그는 항상 해당 태그로 게시된 빌드를 가리키므로, 새로운 세대(예: 향후 Qwen 릴리스)에는 새 태그가 필요합니다. LM Studio에서는 모델 카탈로그에서 새 빌드가 있는지 확인하십시오.' },
          { q: '로컬 Qwen과 Claude Code를 함께 사용할 수 있습니까?', a: '네. Ollama와 LM Studio는 모두 Anthropic 호환 엔드포인트를 제공합니다. Ollama에서는 `ollama launch claude`를 실행하거나 ANTHROPIC_BASE_URL을 http://localhost:11434로 설정하고, LM Studio에서는 http://localhost:1234로 설정하십시오. 로컬 연결에는 Anthropic API 키가 필요하지 않습니다. 64k 토큰 이상의 컨텍스트를 사용하고, 먼저 작은 작업으로 tool calling을 테스트하십시오.' },
          { q: 'Qwen은 상업적 사용이 무료입니까?', a: 'Qwen3.8-27B, Qwen3.6-27B, Qwen3.5-9B 모델 카드에는 Apache 2.0 라이선스가 표시되어 있으며, 이 라이선스는 그 조건에 따라 상업적 사용을 허용합니다. 다른 Qwen3.8 모델은 다른 라이선스를 사용하므로(Qwen3.8-Flash-Next: qwen-community-1.0, Qwen3.8-2.4T-A95B: qwen3.8-max) 내려받는 정확한 모델의 카드에서 라이선스를 읽으십시오.' },
          { q: 'Ollama와 LM Studio 중 무엇을 사용해야 합니까?', a: '헤드리스 서버, 스크립트, IDE 플러그인, PromptQuorum에는 Ollama를 사용하십시오. 시각적인 모델 탐색기와 채팅 창이 필요하면 LM Studio를 사용하십시오. 둘 다 OpenAI 호환 API를 제공할 수 있고 Anthropic 호환 엔드포인트로 Claude Code도 지원하므로, 어느 쪽이든 실행해 보고 나중에 바꿔도 됩니다.' },
        ],
      },
    },
  },
};
