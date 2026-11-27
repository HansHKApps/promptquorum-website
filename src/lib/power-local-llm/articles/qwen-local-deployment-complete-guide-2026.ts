// Power Local LLM — Qwen Local Deployment: Complete Production Guide 2026
// Slug: qwen-local-deployment-complete-guide-2026
// Covers: Advanced Qwen deployment — multi-GPU, Docker API server, production config.
// DOES NOT OVERLAP WITH: run-qwen-locally-guide-2026 (basic Ollama setup only)
// Affiliate: Minisforum mini PCs, AOOSTAR OCuLink mini PCs, RunPod/Vast.ai

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Qwen3 Local Deployment: Complete Production Guide (2026)',
    seoTitle: 'Self-Host Qwen3 2026: 8B, 14B, 32B + Docker API',
    metaDescription:
      'Self-host Qwen3 locally: 8B, 14B and 32B via Ollama/vLLM, hardware requirements, Docker API, and multi-GPU setup. Qwen3 has no 7B — use the 8B (qwen3:8b).',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-en.webp',
    twitterDescription:
      'Qwen3 8B fits an RTX 3060 12 GB. Qwen2.5-72B is a tight fit even on 48 GB. Docker, API server and multi-GPU setup guide for 2026.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Developers and self-hosters deploying Qwen models in production — running persistent API servers, multi-GPU builds, or always-on mini PC servers.',
    readTime: '16 min read',
    primaryTerm: 'Qwen production deployment',
    targetKeywords: [
      'qwen production deployment',
      'qwen docker ollama api server',
      'qwen multi-gpu setup',
      'qwen local deployment guide',
      'self-hosted qwen api',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen 3.6 27B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 32B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Minisforum UM890 Pro',
      'AOOSTAR GEM12 Pro OCuLink',
    ],
    leadAnswerBlock:
      '**Qwen3 (the previous Qwen generation, still widely deployed) dense sizes are 0.6B, 1.7B, 4B, 8B, 14B, and 32B — there is no 7B model. The closest is Qwen3-8B (pull `qwen3:8b`); if you searched "Qwen3 7B", you want the 8B. Qwen3\'s largest dense model is 32B; for a 72B-class model use Qwen2.5-72B. Qwen3 8B and 14B fit consumer GPUs via Ollama or vLLM with a Docker Compose API server. Qwen3 32B (20 GB download) needs a 24 GB card such as the RTX 4090 — RTX 4090 used sold listings were $2,575–3,010 (median $2,860) against a $1,599 MSRP, per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market: eBay US sold listings, October 2026, 216 sales; checked 2026-11-27). Qwen 3.6 is a newer release than Qwen3, published as a 27B dense model (pull `qwen3.6:27b`) and a 35B-A3B mixture-of-experts model (`qwen3.6:35b`); the 27B fits the same 24 GB VRAM tier as Qwen3 32B and is worth evaluating alongside it; [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (`qwen3.8:27b`) is newer still and is not covered by the hardware table here. Qwen2.5-72B in Ollama\'s default Q4_K_M build is a 47 GB download, which leaves little room for context on two 24 GB cards; plan for a short context, partial CPU offload, a larger card, or cloud rental — two RTX 4090s cost about $5.22 per day in GPU amortization alone (2 × $2,860 median used listing ÷ 1,095 days over 3 years, excluding electricity and other parts), versus $0.35–0.59/hr for a 48 GB A40 on [RunPod](https://www.runpod.io/pricing) (checked 2026-11-27).**',
    quickAnswerTop: {
      en: {
        question: 'How do I deploy Qwen models in production locally?',
        answer:
          'Run Qwen via a Docker Compose stack exposing an OpenAI-compatible API: Ollama handles GPU inference and Open WebUI provides the front-end; for remote access, add Nginx as a reverse proxy with TLS and authentication. Qwen3 8B needs about 6 GB of VRAM; Qwen2.5-72B (47 GB download) is a tight fit even on two 24 GB cards.',
        bullets: [
          'Qwen3 8B: RTX 3060 12 GB (about 6 GB VRAM needed); used price not tracked here',
          'Qwen3 14B: RTX 4060 Ti 16 GB; price not tracked here',
          'Qwen3 32B: RTX 4090 24 GB, used sold listings $2,575–3,010 (US sold listings, October 2026, InsiderLLM)',
          'Qwen 3.6 27B: newer generation, same 24 GB tier as Qwen3 32B (`qwen3.6:27b`)',
          'Qwen2.5-72B: 2× RTX 4090 is tight; RunPod A100 80 GB $1.19–2.19/hr (2026-11-27)',
          'Mini PC option: Minisforum UM890 Pro (CPU), listed at $439.90, sold out on 2026-11-27',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Hardware Table', anchor: '#benchmark-table' },
      { label: 'Docker API Server Setup', anchor: '#docker-setup' },
      { label: 'Multi-GPU Configuration', anchor: '#multi-gpu' },
      { label: 'Production API Configuration', anchor: '#api-config' },
      { label: 'Cost Comparison: Self-hosted vs Cloud', anchor: '#cost-comparison' },
      { label: 'Always-On Server Hardware', anchor: '#always-on-server' },
      { label: 'Verdict: Hardware by Model Size', anchor: '#verdict' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Key Takeaways',
        items: [
          'Qwen3 (previous generation, still widely deployed) 8B and 14B are consumer GPU targets — typically a 12 GB and a 16 GB card, running via Ollama in Docker',
          'Qwen3 32B needs a 24 GB card such as the RTX 4090 — used sold listings were $2,575–3,010 (median $2,860) per the InsiderLLM tracker (US eBay sold listings, October 2026)',
          'Qwen 3.6 is a newer release than Qwen3 (27B dense as `qwen3.6:27b`, plus a 35B-A3B mixture-of-experts model); the 27B fits the same 24 GB VRAM tier as Qwen3 32B — evaluate it, and the newer Qwen3.8-27B, alongside Qwen3 32B before buying hardware',
          'Qwen2.5-72B (47 GB default download) is tight on two RTX 4090s; alternatives are a high-RAM CPU build or cloud rental — two RTX 4090s cost about $5.22/day in GPU amortization alone (2 × $2,860 ÷ 1,095 days)',
          'A Docker Compose stack with Ollama + Open WebUI exposes an OpenAI-compatible API; add Nginx with TLS and authentication for remote access',
          'Always-on Qwen servers: Minisforum UM890 Pro (Qwen3 8B on CPU; listed at $439.90, sold out on 2026-11-27) or AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 GB (GPU price not tracked here)',
          'Cloud fallback: a RunPod A40 48 GB ($0.35–0.59/hr, 2026-11-27) is as tight for the 47 GB build as two 4090s; the A100 80 GB ($1.19–2.19/hr) leaves headroom',
          'This guide covers production deployment; for basic Ollama setup see the Qwen beginner guide',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Deploy Qwen models in production using a Docker Compose stack that runs Ollama as the inference backend and exposes an OpenAI-compatible API endpoint.',
          },
          {
            type: 'plain-terms',
            text: 'Instead of running Qwen manually each time, Docker lets you set up a permanent server that stays on and accepts requests — just like using the ChatGPT API, but on your own hardware at no per-token cost.',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'Qwen Model VRAM by Hardware',
        content:
          '**Choose your hardware based on model size, not GPU brand.** VRAM is the main constraint: if the model does not fit, part of it runs on the CPU and speed drops. The table below shows VRAM fit at Q4_K_M quantization (a common default for Ollama); per-model speeds are not tracked here. For reference, the [llama.cpp CUDA scoreboard](https://github.com/ggml-org/llama.cpp/discussions/15013) lists developer-reported Llama 2 7B Q4_0 generation speeds of 158.2 tok/s (RTX 3090), 186.2 tok/s (RTX 4090) and 290.0 tok/s (RTX 5090). RTX 4090 used sold listings were $2,575–3,010 (median $2,860) against a $1,599 MSRP, per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market: eBay US sold listings, October 2026, 216 sales; checked 2026-11-27).',
        columns: ['Model', 'VRAM (Q4_K_M)', 'Min GPU', 'Speed (tok/s)', 'CPU fallback', 'Production-ready?'],
        rows: [
          {
            '0': 'Qwen3 8B',
            '1': '5.2 GB',
            '2': 'RTX 3060 12 GB',
            '3': 'Not tracked',
            '4': 'Yes (32 GB RAM)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen3 14B',
            '1': '9.3 GB',
            '2': 'RTX 4060 Ti 16 GB',
            '3': 'Not tracked',
            '4': 'Yes (64 GB RAM)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen3 32B (previous generation)',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'Not tracked',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen 3.6 27B',
            '1': '~17 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'Not tracked',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen2.5-Coder 32B',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'Not tracked',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen2.5-72B',
            '1': '47 GB',
            '2': '2× RTX 4090 (48 GB, tight)',
            '3': 'Not tracked',
            '4': 'Slow (128 GB RAM)',
            '5': 'Multi-GPU or cloud only',
          },
        ],
        note: 'GB figures in the VRAM column are model download sizes from the Ollama library (checked 2026-11-27; the Qwen 3.6 figure is its q4_K_M tag); memory use while running is higher. GPU and CPU speeds are not tracked here. The RTX 4090 has no NVLink connector, so two RTX 4090s communicate over PCIe only; NVLink exists on some cards such as the RTX 3090. Qwen 3.6 27B (`ollama pull qwen3.6:27b`) is a newer release from Alibaba that also ships a coding variant (`qwen3.6:27b-coding`).',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'Qwen model VRAM requirements at Q4_K_M quantization: Qwen3 8B needs 5.2 GB (RTX 3060 12 GB), Qwen3 32B needs 20 GB (RTX 4090 24 GB), and Qwen2.5-72B is 47 GB (tight on two RTX 4090s). Figures are download sizes.',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Docker API Server Setup — Ollama + Open WebUI + Nginx',
        content:
          '**A compact Qwen server uses two containers, Ollama (inference) and Open WebUI (UI), both in the compose file below; for remote access, add an Nginx reverse proxy with TLS and authentication separately.** GPU passthrough needs the NVIDIA Container Toolkit on the host. On the server itself, the OpenAI-compatible API is at `http://localhost:11434/v1`.',
        numberedItems: [
          {
            title: 'Install Docker and Docker Compose',
            whyItMatters: 'Containers keep Qwen isolated from your OS — no Python environment conflicts, easy updates.',
          },
          {
            title: 'Create docker-compose.yml with Ollama + Open WebUI services',
            whyItMatters: 'The compose file manages GPU passthrough, port mapping, and restart policies in one place.',
          },
          {
            title: 'Set OLLAMA_HOST=0.0.0.0 in the Ollama container environment',
            whyItMatters: 'Ollama must listen on the container network interface so other containers can reach it. The official image already does this; the line makes it explicit.',
          },
          {
            title: 'Pull your Qwen model: docker exec ollama ollama pull qwen3:8b',
            whyItMatters: 'Models are stored in a Docker volume so they persist across container restarts.',
          },
          {
            title: 'Add Nginx as API gateway with basic auth for public-facing deployments',
            whyItMatters: 'Exposing Ollama directly to the internet without auth allows anyone to run inference on your GPU.',
          },
          {
            title: 'Set container restart policy to unless-stopped',
            whyItMatters: 'This ensures your Qwen server survives system reboots — critical for always-on mini PC deployments.',
          },
        ],
        codeBlock: `version: "3.8"
services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: unless-stopped
    ports:
      - "127.0.0.1:11434:11434"
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=-1
    volumes:
      - ollama_data:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    volumes:
      - open_webui_data:/app/backend/data
    depends_on:
      - ollama

volumes:
  ollama_data:
  open_webui_data:`,
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'The compose file binds both published ports to localhost. If you remove `127.0.0.1:`, they are published on every network interface. Ollama has no built-in authentication, and [Docker-published ports bypass ufw rules](https://docs.docker.com/engine/network/packet-filtering-firewalls/). For remote access, expose only an Nginx gateway with TLS and authentication. Use at your own risk.',
          },
        ],
      },
      multiGpu: {
        id: 'multi-gpu',
        title: 'Multi-GPU Configuration for Qwen2.5-72B',
        content:
          '**Qwen2.5-72B at Q4_K_M is a 47 GB download in Ollama, so one RTX 4090 (24 GB) is not enough. Two RTX 4090s (48 GB combined) leave little room for context; a single 80 GB card (A100, H100) gives headroom.** RTX 4090 used sold listings were $2,575–3,010 (median $2,860) per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US eBay sold listings, October 2026), so two cards cost about $5,720 at the median. According to the [Ollama FAQ](https://docs.ollama.com/faq), a model that does not fit on one GPU is spread across all available GPUs.',
        items: [
          'If a model does not fit on one GPU, Ollama spreads it across the available GPUs — set CUDA_VISIBLE_DEVICES=0,1 in the compose environment to target specific cards',
          'Check your motherboard manual for how two GPUs share PCIe lanes; many consumer boards give the second long slot fewer lanes',
          'The RTX 4090 has no NVLink connector, so two RTX 4090s communicate over PCIe only; NVLink bridges exist for some earlier cards such as the RTX 3090',
          'vLLM is an alternative inference engine that uses tensor parallelism; consider it for many concurrent requests. The command below uses the [AWQ build](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct-AWQ), which is under the Qwen license (not Apache-2.0). The command publishes port 8000 on localhost only; do not expose it without authentication. This guide has not tested its memory fit on two 24 GB cards; lower `--max-model-len` if you run out of memory',
          'For occasional Qwen2.5-72B use, renting costs less upfront: RunPod lists an A100 80 GB at $1.19–2.19/hr (2026-11-27), while two used RTX 4090 cards alone are about $5,720 at the median (InsiderLLM, US sold listings, October 2026)',
        ],
        codeBlock: `# vLLM multi-GPU alternative (better for high-traffic 72B)
docker run --gpus all \\
  -p 127.0.0.1:8000:8000 \\
  -e VLLM_WORKER_MULTIPROC_METHOD=spawn \\
  vllm/vllm-openai:latest \\
  --model Qwen/Qwen2.5-72B-Instruct-AWQ \\
  --tensor-parallel-size 2 \\
  --max-model-len 32768 \\
  --quantization awq`,
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '[NVIDIA rates one RTX 4090](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/) at 450 W graphics power. Two need a power supply sized for both cards plus the rest of the system, correct and fully seated 16-pin power cables, enough space and airflow, and a wall circuit that can carry the load. Faulty power cabling can damage hardware or start a fire. If unsure, ask a qualified technician. At your own risk.',
          },
        ],
      },
      apiConfig: {
        id: 'api-config',
        title: 'Production API Configuration',
        content:
          '**Ollama offers an OpenAI-compatible API at /v1 — many applications built for the OpenAI API work with your local Qwen deployment after you change the base URL and model name; not every API feature is covered.** Key environment variables that affect production behavior:',
        items: [
          'OLLAMA_KEEP_ALIVE=-1 — prevents the model from unloading after inactivity (default is 5 minutes, usually unwanted on a server)',
          'OLLAMA_NUM_PARALLEL=4 — allows up to 4 parallel requests per model; more parallel slots need more memory',
          'OLLAMA_MAX_LOADED_MODELS=1 — keep only one model in VRAM at a time on small GPU builds to prevent thrashing',
          'OLLAMA_FLASH_ATTENTION=1 — enables flash attention, which can improve speed on NVIDIA Ampere/Ada GPUs (RTX 3060 and newer); gains vary by model and context length',
          'OLLAMA_GPU_OVERHEAD=536870912 — reserves VRAM on each GPU; the value is in bytes (this is 512 MiB), per the [Ollama source](https://github.com/ollama/ollama/blob/main/envconfig/config.go). It can help against out-of-memory errors',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'OLLAMA_KEEP_ALIVE=0 unloads the model right after each request. If the variable is unset, the model stays loaded for 5 minutes by default. After an unload, the next request waits while the model loads again. Set OLLAMA_KEEP_ALIVE=-1 to keep it loaded on an API server.',
          },
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Cost Comparison: Self-Hosted vs Alibaba Cloud vs RunPod',
        content:
          '**Self-hosting tends to pay off only under sustained load; for occasional use, renting a cloud GPU usually costs less than buying.** The table below amortizes the GPU price alone over 3 years (illustrative; electricity and other parts are not tracked). At the median used RTX 4090 sale price of $2,860 that is $2.61 per day ($2,860 ÷ 1,095 days), equal to about 4.4 to 7.5 hours per day of a RunPod A40 rental at $0.59 or $0.35/hr ([RunPod pricing](https://www.runpod.io/pricing), secure and community cloud, checked 2026-11-27).',
        columns: ['Option', 'Qwen3 8B cost/day', 'Qwen2.5-72B cost/day', 'Upfront cost', 'Best for'],
        rows: [
          {
            '0': 'Self-hosted: RTX 3060 12 GB mini PC',
            '1': 'Not tracked',
            '2': 'N/A (does not fit)',
            '3': 'Not tracked (used GPU price not tracked)',
            '4': 'Always-on 8B inference, home/office server',
          },
          {
            '0': 'Self-hosted: RTX 4090 workstation',
            '1': '$2.61 (GPU amortization alone, 3 years)',
            '2': 'N/A (single GPU)',
            '3': 'GPU alone: $2,575–3,010 used sold listings (median $2,860); other parts not tracked',
            '4': 'Up to 32B inference, full workstation use',
          },
          {
            '0': 'Self-hosted: Dual RTX 4090',
            '1': '$5.22 (GPU amortization alone: 2 × $2,860 ÷ 1,095 days)',
            '2': '$5.22 (same GPU amortization alone)',
            '3': 'GPUs alone: 2 × $2,860 = $5,720 at the median; other parts not tracked',
            '4': '72B always-on with other workstation use',
          },
          {
            '0': 'RunPod A40 48 GB ($0.35–0.59/hr)',
            '1': '$0.35–0.59 (1 hr)',
            '2': '$0.35–0.59 (1 hr)',
            '3': '$0 upfront, pay per hour',
            '4': 'Burst use, testing; tight for 72B Q4_K_M',
          },
          {
            '0': 'Alibaba Cloud PAI (A10 GPU)',
            '1': 'Not tracked',
            '2': 'Not tracked',
            '3': 'Check the vendor price page',
            '4': 'Users of the Alibaba Cloud ecosystem',
          },
          {
            '0': 'Vast.ai RTX 4090 spot',
            '1': 'Not tracked',
            '2': 'N/A',
            '3': '$0 upfront',
            '4': 'Budget burst, acceptable downtime risk',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io',
            productName: 'RunPod GPU Cloud',
            productCategory: 'cloud-gpu',
            priceRange: 'A40 from $0.35/hr (2026-11-27)',
            label: 'Start on RunPod →',
          },
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai Spot GPUs',
            productCategory: 'cloud-gpu',
            priceRange: 'See vendor page',
            label: 'Browse Vast.ai spot GPU pricing →',
          },
        ],
      },
      alwaysOnServer: {
        id: 'always-on-server',
        title: 'Always-On Qwen Server Hardware Recommendations',
        content:
          '**An always-on mini PC costs little in electricity: at an assumed average draw of 12–45 W and $0.16/kWh, running 24/7 (730 hours) comes to about $1.40–5.30 per month.** This guide has not measured power. Two mini PC options cover common always-on setups:',
        items: [
          'Budget (Qwen3 8B CPU inference): Minisforum UM890 Pro — AMD Ryzen 9 8945HS; the vendor page offers barebone, 32 GB RAM + 1 TB SSD, and 64 GB + 1 TB variants. It showed a price of $439.90 and listed the variants as sold out (checked 2026-11-27). CPU speed for Qwen3 8B is not tracked here.',
          'eGPU option (Qwen3 14B): AOOSTAR GEM12+ Pro (Ryzen 7 PRO 8845HS) has an OCuLink port; the vendor listed it at $359 barebone (no RAM or SSD) and sold out (checked 2026-11-27). The vendor says to power the PC off before plugging or unplugging OCuLink. Pair it with an RTX 4060 Ti 16 GB in an eGPU dock (GPU and dock prices are not tracked here, so no total is given). Qwen3 14B fits the 16 GB card in VRAM.',
          'Power user (Qwen3 32B): Compact ATX desktop with a used RTX 4090 (used sold listings $2,575–3,010, median $2,860, per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), US eBay sold listings, October 2026). Case, CPU and RAM prices are not tracked here, so no build total is given. Qwen3 32B at Q4_K_M (20 GB) fits the 24 GB card, with limited room for long contexts. Qwen 3.6 27B (`qwen3.6:27b`) fits the same card and is worth benchmarking against Qwen3 32B before committing to a model.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.minisforum.com/products/minisforum-um890-pro',
            productName: 'Minisforum UM890 Pro',
            productCategory: 'mini-pc',
            priceRange: '$439.90 (sold out, 2026-11-27)',
            label: 'View Minisforum UM890 Pro (Qwen3 8B CPU server) →',
          },
          {
            url: 'https://aoostar.com/products/aoostar-gem12-pro-amd-r7-pro-8845hs-mini-pc',
            productName: 'AOOSTAR GEM12 Pro OCuLink',
            productCategory: 'mini-pc',
            priceRange: '$359 barebone (sold out, 2026-11-27)',
            label: 'View AOOSTAR GEM12+ Pro (OCuLink) →',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict: Which Deployment for Which Model Size',
        content:
          '**Choose your Qwen deployment path based on model size and daily usage hours — not on what hardware looks impressive.**',
        decisionBlock: {
          title: 'Qwen Deployment Decision',
          localIf: [
            'Qwen3 8B or 14B and you use it 4+ hours/day → buying a mini PC or GPU can pay off; compare with current cloud prices',
            'You want to avoid network round-trips in interactive coding or document workflows',
            'You are processing private data that must not leave your network',
            'You already have a desktop GPU with 12+ GB VRAM sitting idle',
          ],
          cloudIf: [
            'Qwen2.5-72B for occasional use (< 4 hours/day) — renting (RunPod A100 80 GB, $1.19–2.19/hr) avoids a large hardware purchase',
            'You need to test Qwen2.5-72B before committing to a hardware purchase',
            'Your usage is bursty — with hourly rental you stop paying for the GPU when you stop the instance (storage can still be billed)',
            'You are outside the US/EU and shipping costs or import duties make hardware expensive',
          ],
          quick: [
            'Qwen3 8B daily: Minisforum UM890 Pro',
            'Qwen3 14B daily: AOOSTAR + RTX 4060 Ti (GPU price not tracked here)',
            'Qwen3 32B daily: compact ATX + used RTX 4090 (used sold listings $2,575–3,010; build total not tracked)',
            'Qwen2.5-72B occasional: RunPod A100 80 GB ($1.19–2.19/hr)',
          ],
        },
        imageCaption:
          'Self-hosted vs cloud decision tree for Qwen: self-host when usage is sustained (a Minisforum UM890 Pro for Qwen3 8B; a used RTX 4090 for Qwen3 32B, GPU alone $2,575–3,010 in used sold listings per the InsiderLLM, US sold listings, October 2026); use cloud like a RunPod A100 80 GB ($1.19–2.19/hr, 2026-11-27) for occasional Qwen2.5-72B runs.',
      },
      internalLinks: {
        id: 'see-also',
        title: 'Related Guides',
        items: [
          'Basic Qwen Ollama setup (beginner): /local-llms/run-qwen-locally-guide-2026',
          'GPU buying guide for local LLMs: /power-local-llm/best-gpu-buying-guide-local-llm-2026',
          'NAS storage for model files: /power-local-llm/best-nas-storage-local-ai-models-2026',
          'Cloud GPU comparison (Western providers): /power-local-llm/best-cloud-gpu-providers',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Is there a Qwen3 7B model?',
            a: 'No. The Qwen3 dense lineup is 0.6B, 1.7B, 4B, 8B, 14B, and 32B — there is no 7B. If you searched "Qwen3 7B", the closest model is Qwen3-8B (`ollama pull qwen3:8b`), which fits ~5–6 GB of VRAM at Q4_K_M and fits an RTX 3060 12 GB with headroom. For a 72B-class model, use Qwen2.5-72B.',
          },
          {
            q: 'Is there a Qwen 3.8 model?',
            a: 'Yes. Alibaba\'s [Qwen3.8 repository](https://github.com/QwenLM/Qwen3.8) lists Qwen3.8-27B (2026-08-14) and the much larger Qwen3.8-2.4T-A95B (2026-08-12). Qwen3.8-27B is a dense model; its [model card](https://huggingface.co/Qwen/Qwen3.8-27B) states Apache-2.0, and the [Ollama library](https://ollama.com/library/qwen3.8) lists `qwen3.8:27b` as an 18 GB download (checked 2026-11-27). This guide\'s hardware table does not cover Qwen3.8. If you meant Qwen3 8B, pull `qwen3:8b` instead.',
          },
          {
            q: 'Can I run Qwen2.5-72B on a single RTX 4090?',
            a: 'Not fully. The Ollama Q4_K_M build of Qwen2.5-72B is a 47 GB download and a single RTX 4090 has 24 GB, so part of the model would run on the CPU and speed drops. Two RTX 4090s (48 GB combined) are still tight; an 80 GB card or cloud GPU gives headroom. RTX 4090 used sold listings were $2,575–3,010 (median $2,860) per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market: eBay US sold listings, October 2026, 216 sales; checked 2026-11-27). A single RTX 4090 can hold Qwen3 32B at Q4_K_M (20 GB download), with limited room for long contexts.',
          },
          {
            q: 'What is the difference between Ollama and vLLM for production Qwen deployment?',
            a: 'Ollama is simpler to set up and spreads models across GPUs automatically — a good fit for personal servers and small teams. vLLM uses tensor parallelism and continuous batching, which typically makes it more efficient under concurrent load — consider it for production APIs with many simultaneous users.',
          },
          {
            q: 'Does Ollama support multi-GPU inference for Qwen natively?',
            a: 'Yes. According to the [Ollama FAQ](https://docs.ollama.com/faq), a model that does not fit on one GPU is spread across all available GPUs. You can limit which NVIDIA GPUs are used with CUDA_VISIBLE_DEVICES=0,1. Two RTX 4090s communicate over PCIe; this guide has no sourced tok/s figure for Qwen2.5-72B on them, so none is given.',
          },
          {
            q: 'Is Alibaba Cloud cheaper than RunPod for Qwen inference?',
            a: 'This guide has no verified Alibaba Cloud PAI price, so it makes no price comparison; check the current vendor pages. [RunPod](https://www.runpod.io/pricing) listed an A40 48 GB at $0.35/hr (community cloud) and $0.59/hr (secure cloud) when checked on 2026-11-27.',
          },
          {
            q: 'How much power does an always-on Qwen server use?',
            a: 'This guide has not measured power. As an illustration with assumed average draws: 12–45 W at $0.16/kWh, running 24/7 (730 hours), is about $1.40–5.30 per month. A constant 190 W (for example an RTX 4060 Ti 16 GB at its 165 W rating plus an assumed 25 W for the mini PC) is about $22 per month.',
          },
          {
            q: 'Can I use the self-hosted Qwen API with ChatGPT-compatible applications?',
            a: 'Yes, for many of them. Ollama offers an OpenAI-compatible API at http://localhost:11434/v1 on the server (use your authenticated gateway address from other machines). In tools that let you set a custom base URL, such as LangChain or Continue.dev, point it to that address, enter any non-empty API key for Ollama, and select your Qwen model name. Not every OpenAI API feature is supported.',
          },
        ],
      },
      updateLog: {
        id: 'update-log',
        title: 'Update Log',
        items: [
          '2026-05-26: Initial publication. Prices and speeds are indicative ranges, not PromptQuorum measurements; check current listings.',
          '2026-08-27: Added Qwen 3.6 27B as a newer same-tier alternative to Qwen3 32B.',
          '2026-10-19: Qwen3 is now labelled as the previous Qwen generation (still widely deployed) and Qwen 3.6 (27B dense, 35B-A3B mixture-of-experts) as the newer generation; the Qwen 3.6 27B memory figure in the table now matches the companion deployment guide.',
          '2026-11-22: GPU prices, per-day cost and build totals cite dated listing sources (InsiderLLM tracker, 2026-10-15); per-model GPU speeds are listed as not tracked.',
          '2026-11-27: Corrected: Qwen3.8 exists; the Qwen2.5-72B default build is 47 GB; RunPod, mini PC and electricity figures re-checked or marked as assumptions; unsourced CPU speeds and Alibaba Cloud prices removed; compose ports bound to localhost; Ollama settings and the vLLM model name fixed.',
          'Next review scheduled: 2027-05-22',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is there a Qwen3 7B model?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The Qwen3 dense lineup is 0.6B, 1.7B, 4B, 8B, 14B, and 32B — there is no 7B. If you searched "Qwen3 7B", the closest model is Qwen3-8B (`ollama pull qwen3:8b`), which fits ~5–6 GB of VRAM at Q4_K_M and fits an RTX 3060 12 GB with headroom. For a 72B-class model, use Qwen2.5-72B.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I run Qwen2.5-72B on a single RTX 4090?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Not fully. The Ollama Q4_K_M build of Qwen2.5-72B is a 47 GB download and a single RTX 4090 has 24 GB, so part of the model would run on the CPU and speed drops. Two RTX 4090s (48 GB combined) are still tight; an 80 GB card or cloud GPU gives headroom. RTX 4090 used sold listings were $2,575–3,010 (median $2,860) per the [InsiderLLM tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US market: eBay US sold listings, October 2026, 216 sales; checked 2026-11-27). A single RTX 4090 can hold Qwen3 32B at Q4_K_M (20 GB download), with limited room for long contexts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Ollama and vLLM for production Qwen deployment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ollama is simpler to set up and spreads models across GPUs automatically — a good fit for personal servers and small teams. vLLM uses tensor parallelism and continuous batching, which typically makes it more efficient under concurrent load — consider it for production APIs with many simultaneous users.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Ollama support multi-GPU inference for Qwen natively?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. According to the [Ollama FAQ](https://docs.ollama.com/faq), a model that does not fit on one GPU is spread across all available GPUs. You can limit which NVIDIA GPUs are used with CUDA_VISIBLE_DEVICES=0,1. This guide has no sourced tok/s figure for Qwen2.5-72B on two RTX 4090s, so none is given.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alibaba Cloud cheaper than RunPod for Qwen inference?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This guide has no verified Alibaba Cloud PAI price, so it makes no price comparison; check the current vendor pages. [RunPod](https://www.runpod.io/pricing) listed an A40 48 GB at $0.35/hr (community cloud) and $0.59/hr (secure cloud) when checked on 2026-11-27.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much power does an always-on Qwen server use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'This guide has not measured power. As an illustration with assumed average draws: 12–45 W at $0.16/kWh, running 24/7 (730 hours), is about $1.40–5.30 per month. A constant 190 W (for example an RTX 4060 Ti 16 GB at its 165 W rating plus an assumed 25 W for the mini PC) is about $22 per month.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use the self-hosted Qwen API with ChatGPT-compatible applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, for many of them. Ollama offers an OpenAI-compatible API at http://localhost:11434/v1 on the server (use your authenticated gateway address from other machines). In tools that let you set a custom base URL, such as LangChain or Continue.dev, point it to that address, enter any non-empty API key for Ollama, and select your Qwen model name. Not every OpenAI API feature is supported.',
          },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Local Deployment: Complete Production Guide 2026',
      description:
        'Deploy Qwen3 8B to 72B in production: Docker Compose API server, multi-GPU setup, hardware requirements, and self-hosted vs cloud cost notes.',
      url: 'https://www.promptquorum.com/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'en',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Qwen language models' },
        { '@type': 'Thing', name: 'Local LLM deployment' },
        { '@type': 'Thing', name: 'Docker GPU inference' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'vLLM' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'Thing', name: 'Qwen2.5-72B' },
        { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'How to Deploy Qwen as a Production API Server with Docker',
      step: [
        { '@type': 'HowToStep', name: 'Install Docker and Docker Compose', position: 1 },
        { '@type': 'HowToStep', name: 'Create docker-compose.yml with Ollama + Open WebUI', position: 2 },
        { '@type': 'HowToStep', name: 'Set OLLAMA_HOST=0.0.0.0 in container environment', position: 3 },
        { '@type': 'HowToStep', name: 'Pull your Qwen model via docker exec', position: 4 },
        { '@type': 'HowToStep', name: 'Add Nginx as API gateway with basic auth', position: 5 },
        { '@type': 'HowToStep', name: 'Set restart policy to unless-stopped', position: 6 },
      ],
    },
    relatedReading: {
      items: [
        '[Qwen Local Deployment Guide — Beginner Setup with Ollama & LM Studio](/local-llms/qwen-local-deployment-guide-2026) — hardware-tier guide for Qwen3 8B through 72B on consumer hardware',
        '[Best GPU Buying Guide for Local LLMs 2026](/power-local-llm/best-gpu-buying-guide-local-llm-2026) — GPU recommendations for Qwen2.5-72B and multi-GPU production setups',
        '[Run Qwen Locally — Quick Start Guide](/local-llms/run-qwen-locally-guide-2026) — single-model beginner install',
      ],
    },
  },
  de: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Qwen3 Lokales Deployment: Vollständiger Produktionsleitfaden (2026)',
    seoTitle: 'Qwen3 Lokales Deployment 2026: 8B, 14B, 32B + Docker-API',
    metaDescription:
      'Qwen3 lokal betreiben: 8B, 14B und 32B via Ollama/vLLM mit Docker-API-Server, Hardware-Empfehlungen und Multi-GPU. Hinweis — Qwen3 hat kein 7B; nutze das 8B (qwen3:8b). Leitfaden 2026.',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-de.webp',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Entwickler und Self-Hoster, die Qwen-Modelle produktiv betreiben möchten — mit persistentem API-Server, Multi-GPU-Build oder Always-On-Miniserver.',
    leadAnswerBlock:
      '**Die Dense-Größen von Qwen3 (Vorgängergeneration, weiterhin stark verbreitet) sind 0,6B, 1,7B, 4B, 8B, 14B und 32B — es gibt kein 7B-Modell. Am nächsten kommt Qwen3-8B (Pull `qwen3:8b`); wer nach "Qwen3 7B" gesucht hat, meint das 8B. Das größte Qwen3-Dense-Modell ist 32B; für ein Modell der 72B-Klasse nutzen Sie Qwen2.5-72B. Qwen3 8B und 14B passen auf Consumer-GPUs und lassen sich via Ollama oder vLLM in einem Docker-Compose-API-Server betreiben. Qwen3 32B (20 GB Download) braucht eine 24-GB-Karte wie die RTX 4090. Gebrauchte RTX 4090 wurden laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt: verkaufte eBay-US-Angebote, Oktober 2026, 216 Verkäufe; geprüft am 2026-11-27) für 2.575–3.010 US-Dollar verkauft (Median 2.860 US-Dollar), bei einer UVP von 1.599 US-Dollar (US-Preise in USD). Qwen 3.6 ist neuer als Qwen3 und erhältlich als dichtes 27B-Modell (`qwen3.6:27b`) und als Mixture-of-Experts-Modell 35B-A3B (`qwen3.6:35b`); das 27B passt in dieselbe 24-GB-VRAM-Stufe wie Qwen3 32B und ist einen Vergleich wert; noch neuer ist [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (`qwen3.8:27b`), das die Hardware-Tabelle hier nicht abdeckt. Qwen2.5-72B ist im Ollama-Standard-Build (Q4_K_M) 47 GB groß und lässt auf zwei 24-GB-Karten wenig Platz für Kontext; planen Sie kurzen Kontext, teilweises CPU-Offloading, eine größere Karte oder Cloud-Miete ein — zwei RTX 4090 kosten allein an GPU-Abschreibung rund 5,22 US-Dollar pro Tag (2 × 2.860 US-Dollar Median-Gebrauchtpreis ÷ 1.095 Tage bei 3 Jahren, ohne Strom und übrige Teile), bei [RunPod](https://www.runpod.io/pricing) kostet eine A40 mit 48 GB 0,35–0,59 US-Dollar/Stunde (geprüft am 2026-11-27).**',
    quickAnswerTop: {
      de: {
        question: 'Wie setze ich Qwen-Modelle lokal produktiv ein?',
        answer:
          'Docker-Compose-Stack mit Ollama (GPU-Inferenz) und Open WebUI (Frontend), für den Fernzugriff zusätzlich Nginx als Reverse-Proxy mit TLS und Authentifizierung. Qwen3 8B braucht rund 6 GB VRAM; Qwen2.5-72B (47 GB Download) ist selbst auf zwei 24-GB-Karten knapp.',
        bullets: [
          'Qwen3 8B: RTX 3060 12 GB (rund 6 GB VRAM nötig); Gebrauchtpreis hier nicht erfasst',
          'Qwen3 14B: RTX 4060 Ti 16 GB; Preis hier nicht erfasst',
          'Qwen3 32B: RTX 4090 24 GB, gebraucht verkauft 2.575–3.010 US-Dollar (InsiderLLM, in den USA verkauft, Oktober 2026) (Vorgängergeneration; neuer: Qwen 3.6 27B, `qwen3.6:27b`, gleiche 24-GB-Stufe)',
          'Qwen2.5-72B: 2× RTX 4090 knapp; RunPod A100 80 GB 1,19–2,19 US-Dollar/h (2026-11-27)',
          'Mini-PC-Option: Minisforum UM890 Pro (CPU), 439,90 US-Dollar, am 2026-11-27 ausverkauft',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Qwen3 8B und 14B zielen auf Consumer-GPUs — typischerweise eine 12-GB- bzw. 16-GB-Karte, via Ollama in Docker',
          'Qwen3 32B braucht eine 24-GB-Karte wie die RTX 4090 (Qwen3 ist die Vorgängergeneration; das neuere Qwen 3.6 27B, `qwen3.6:27b`, passt in dieselbe 24-GB-Stufe)',
          'Qwen2.5-72B (47 GB Standard-Download) ist auf zwei RTX 4090 knapp; Alternativen sind ein CPU-Build mit viel RAM oder Cloud-Miete',
          'Docker-Compose-Stack mit Ollama + Open WebUI; für den Fernzugriff Nginx mit TLS und Authentifizierung ergänzen',
          'Always-On-Server: Minisforum UM890 Pro (Qwen3 8B auf CPU; 439,90 US-Dollar, am 2026-11-27 ausverkauft) oder AOOSTAR GEM12+ Pro mit OCuLink + RTX 4060 Ti 16 GB (GPU-Preis hier nicht erfasst)',
          'Cloud-Fallback: Eine RunPod A40 48 GB (0,35–0,59 US-Dollar/h, 2026-11-27) ist für den 47-GB-Build so knapp wie zwei 4090; die A100 80 GB (1,19–2,19 US-Dollar/h) bietet Reserve',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Qwen-Modelle lassen sich produktiv als Docker-Compose-Stack mit Ollama und Open WebUI betreiben, der eine OpenAI-kompatible API exponiert.',
          },
          {
            type: 'plain-terms',
            text: 'Statt Qwen jedes Mal manuell zu starten, richtet Docker einen dauerhaften Server ein, der immer läuft und Anfragen entgegennimmt — wie die ChatGPT-API, aber auf der eigenen Hardware ohne Kosten pro Token.',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'Qwen-Modelle: VRAM und Hardware',
        content:
          '**Hardware nach Modellgröße wählen, nicht nach GPU-Marke.** VRAM ist die harte Grenze: Passt das Modell nicht, läuft ein Teil auf der CPU und die Geschwindigkeit sinkt. Die Tabelle zeigt den VRAM-Bedarf bei Q4_K_M-Quantisierung; Geschwindigkeiten je Modell werden hier nicht erfasst. Zum Vergleich nennt das [llama.cpp-CUDA-Scoreboard](https://github.com/ggml-org/llama.cpp/discussions/15013) von Entwicklern gemeldete Generierungsgeschwindigkeiten für Llama 2 7B Q4_0: 158,2 tok/s (RTX 3090), 186,2 tok/s (RTX 4090) und 290,0 tok/s (RTX 5090). Gebrauchte RTX 4090 wurden laut [InsiderLLM-Tracker](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (US-Markt: verkaufte eBay-US-Angebote, Oktober 2026, 216 Verkäufe; geprüft am 2026-11-27) für 2.575–3.010 US-Dollar verkauft (Median 2.860 US-Dollar), bei einer UVP von 1.599 US-Dollar (US-Preise in USD).',
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Min. GPU', 'Geschwindigkeit (tok/s)', 'CPU-Fallback', 'Produktionstauglich?'],
        rows: [
          { '0': 'Qwen3 8B', '1': '5,2 GB', '2': 'RTX 3060 12 GB', '3': 'Nicht erfasst', '4': 'Ja (32 GB RAM)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen3 14B', '1': '9,3 GB', '2': 'RTX 4060 Ti 16 GB', '3': 'Nicht erfasst', '4': 'Ja (64 GB RAM)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen3 32B (Vorgängergeneration)', '1': '20 GB', '2': 'RTX 4090 24 GB', '3': 'Nicht erfasst', '4': 'Grenzwertig (128 GB RAM)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen 3.6 27B', '1': '~17 GB', '2': 'RTX 4090 24 GB', '3': 'Nicht erfasst', '4': 'Grenzwertig (128 GB RAM)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen2.5-72B', '1': '47 GB', '2': '2× RTX 4090 (48 GB, knapp)', '3': 'Nicht erfasst', '4': 'Langsam (128 GB RAM)', '5': 'Nur Multi-GPU oder Cloud' },
        ],
        note: 'Die GB-Angaben in der VRAM-Spalte sind Download-Größen aus der Ollama-Bibliothek (geprüft am 2026-11-27; bei Qwen 3.6 der q4_K_M-Tag); im Betrieb ist der Speicherbedarf höher. GPU- und CPU-Geschwindigkeiten werden hier nicht erfasst.',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'Qwen-VRAM-Anforderungen bei Q4_K_M-Quantisierung: Qwen3 8B benötigt 5,2 GB (RTX 3060 12 GB), Qwen3 32B benötigt 20 GB (RTX 4090 24 GB), Qwen2.5-72B ist 47 GB groß (auf zwei RTX 4090 knapp). Angaben sind Download-Größen.',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Docker-API-Server-Setup — Ollama + Open WebUI + Nginx',
        content:
          '**Ein kompakter Qwen-Server besteht aus zwei Containern, Ollama (Inferenz) und Open WebUI (UI); für den Fernzugriff ergänzen Sie separat einen Nginx-Reverse-Proxy mit TLS und Authentifizierung.** Für GPU-Passthrough braucht der Host das NVIDIA Container Toolkit.',
        numberedItems: [
          { title: 'Docker und Docker Compose installieren', whyItMatters: 'Container halten Qwen vom Betriebssystem isoliert — keine Python-Konflikte, einfache Updates.' },
          { title: 'docker-compose.yml mit Ollama + Open WebUI erstellen', whyItMatters: 'Die Compose-Datei verwaltet GPU-Passthrough, Port-Mapping und Neustart-Richtlinien an einem Ort.' },
          { title: 'OLLAMA_HOST=0.0.0.0 in der Container-Umgebung setzen', whyItMatters: 'Ollama muss auf der Netzwerkschnittstelle des Containers lauschen, damit andere Container es erreichen. Das offizielle Image tut das bereits; die Zeile macht es sichtbar.' },
          { title: 'Qwen-Modell laden: docker exec ollama ollama pull qwen3:8b', whyItMatters: 'Modelle werden in einem Docker-Volume gespeichert und überleben Container-Neustarts.' },
          { title: 'Nginx als API-Gateway mit Basic-Auth für öffentliche Deployments hinzufügen', whyItMatters: 'Ollama ohne Auth öffentlich exponieren erlaubt jedem, Inferenz auf Ihrer GPU auszuführen.' },
          { title: 'Container-Restart-Policy auf unless-stopped setzen', whyItMatters: 'Stellt sicher, dass der Qwen-Server System-Neustarts überlebt — kritisch für Always-On-Miniserver.' },
        ],
        callouts: [
          {
            type: 'warning',
            text: 'Wenn Sie Ports veröffentlichen, binden Sie sie an localhost (`127.0.0.1:11434:11434`). Ohne diese Angabe sind sie an allen Netzwerkschnittstellen offen. Ollama bringt keine eigene Authentifizierung mit, und [von Docker veröffentlichte Ports umgehen ufw-Regeln](https://docs.docker.com/engine/network/packet-filtering-firewalls/). Machen Sie für den Fernzugriff nur ein Nginx-Gateway mit TLS und Authentifizierung erreichbar. Nutzung auf eigene Verantwortung.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Gibt es ein Qwen 3.8 Modell?',
            a: 'Ja. Alibabas [Qwen3.8-Repository](https://github.com/QwenLM/Qwen3.8) führt Qwen3.8-27B (2026-08-14) und das deutlich größere Qwen3.8-2.4T-A95B (2026-08-12) auf. Qwen3.8-27B ist ein Dense-Modell; die [Modellkarte](https://huggingface.co/Qwen/Qwen3.8-27B) nennt Apache-2.0, und die [Ollama-Bibliothek](https://ollama.com/library/qwen3.8) listet `qwen3.8:27b` mit 18 GB Download (geprüft am 2026-11-27). Die Hardware-Tabelle dieses Leitfadens deckt Qwen3.8 nicht ab. Wenn Sie Qwen3 8B meinten, laden Sie `qwen3:8b`.',
          },
          {
            q: 'Gibt es ein Qwen3 7B Modell?',
            a: 'Nein. Die Qwen3-Dense-Reihe umfasst 0,6B, 1,7B, 4B, 8B, 14B und 32B — es gibt kein 7B. Wer nach "Qwen3 7B" gesucht hat, findet als nächstliegendes Modell Qwen3-8B (`ollama pull qwen3:8b`), das bei Q4_K_M ~5–6 GB VRAM belegt und auf eine RTX 3060 12 GB mit Spielraum passt. Für ein 72B-Klasse-Modell nutzen Sie Qwen2.5-72B.',
          },
          {
            q: 'Kann ich Qwen2.5-72B auf einer einzelnen RTX 4090 betreiben?',
            a: 'Nicht vollständig. Der Q4_K_M-Build von Qwen2.5-72B in Ollama ist 47 GB groß, eine RTX 4090 hat 24 GB; ein Teil des Modells liefe auf der CPU und die Geschwindigkeit sinkt. Zwei RTX 4090 (48 GB) sind weiterhin knapp; eine 80-GB-Karte oder Cloud-GPU bietet Reserve. Eine einzelne RTX 4090 fasst Qwen3 32B bei Q4_K_M (20 GB Download), mit wenig Platz für lange Kontexte.',
          },
          {
            q: 'Was ist der Unterschied zwischen Ollama und vLLM für Qwen?',
            a: 'Ollama ist einfacher einzurichten und verteilt Modelle automatisch auf mehrere GPUs — passend für persönliche Server und kleine Teams. vLLM nutzt Tensor-Parallelismus und kontinuierliches Batching und ist bei gleichzeitiger Last in der Regel effizienter — eine Option für Produktions-APIs mit vielen gleichzeitigen Nutzern.',
          },
          {
            q: 'Ist Alibaba Cloud günstiger als RunPod für Qwen-Inferenz?',
            a: 'Für Alibaba Cloud PAI liegt diesem Leitfaden kein verifizierter Preis vor, daher gibt es keinen Preisvergleich; prüfen Sie die aktuellen Anbieterseiten. [RunPod](https://www.runpod.io/pricing) listete bei der Prüfung am 2026-11-27 eine A40 mit 48 GB zu 0,35 US-Dollar/h (Community Cloud) und 0,59 US-Dollar/h (Secure Cloud).',
          },
          {
            q: 'Wie viel Strom verbraucht ein Always-On-Qwen-Server?',
            a: 'Dieser Leitfaden hat den Stromverbrauch nicht gemessen. Rechenbeispiel mit angenommener Durchschnittsleistung und angenommenem Tarif von 0,31 €/kWh: 12–45 W kosten bei 24/7-Betrieb (730 Stunden) etwa 2,70–10,20 € pro Monat. Konstant 190 W (z. B. eine RTX 4060 Ti 16 GB mit 165 W laut Spezifikation plus angenommene 25 W für den Mini-PC) sind etwa 43 € pro Monat.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kann ich Qwen2.5-72B auf einer einzelnen RTX 4090 betreiben?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nicht vollständig. Der Q4_K_M-Build ist 47 GB groß, eine RTX 4090 hat 24 GB. Zwei RTX 4090 sind weiterhin knapp; eine 80-GB-Karte oder Cloud-GPU bietet Reserve.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen Ollama und vLLM für Qwen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama ist einfacher einzurichten — passend für kleine Teams. vLLM ist bei gleichzeitiger Last in der Regel effizienter.' },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Lokales Deployment: Vollständiger Produktionsleitfaden 2026',
      description: 'Qwen3 8B bis 72B produktiv betreiben: Docker-Compose-API-Server, Multi-GPU-Setup, Hardware-Anforderungen und Kostenhinweise.',
      url: 'https://www.promptquorum.com/de/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'de',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    relatedReading: {
      items: [
        '[Qwen Lokales Deployment Guide — Beginner-Setup mit Ollama & LM Studio](/de/local-llms/qwen-local-deployment-guide-2026) — Hardware-Tier-Leitfaden für Qwen3 8B bis 72B auf Consumer-Hardware',
        '[Bester GPU-Kaufratgeber für lokale LLMs 2026](/de/power-local-llm/best-gpu-buying-guide-local-llm-2026) — GPU-Empfehlungen für Qwen2.5-72B und Multi-GPU-Produktionssetups',
        '[Qwen lokal ausführen — Schnellstart-Leitfaden](/de/local-llms/run-qwen-locally-guide-2026) — Einzelmodell-Installation für Einsteiger',
      ],
    },
  },
  fr: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Déploiement Local de Qwen3 : Guide Complet de Production (2026)',
    seoTitle: 'Qwen3 Déploiement Local 2026 : 8B, 14B, 32B + API Docker',
    metaDescription:
      'Déployez Qwen3 en local : 8B, 14B et 32B via Ollama/vLLM avec un serveur API Docker, choix matériel et multi-GPU. Note — Qwen3 n\'a pas de 7B ; utilisez le 8B (qwen3:8b). Guide 2026.',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-fr.webp',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Développeurs et auto-hébergeurs déployant des modèles Qwen en production — serveurs API persistants, builds multi-GPU ou mini-serveurs toujours actifs.',
    leadAnswerBlock:
      '**Les tailles denses de Qwen3 (génération précédente, encore très déployée) sont 0,6B, 1,7B, 4B, 8B, 14B et 32B — il n\'existe pas de modèle 7B. Le plus proche est Qwen3-8B (pull `qwen3:8b`) ; si vous avez cherché « Qwen3 7B », c\'est le 8B qu\'il vous faut. Le plus grand modèle dense de Qwen3 est le 32B ; pour un modèle de classe 72B, utilisez Qwen2.5-72B. Qwen3 8B et 14B tiennent sur des GPU grand public et peuvent être servis via Ollama ou vLLM avec un serveur API Docker Compose. Qwen3 32B (téléchargement de 20 Go) demande une carte de 24 Go comme la RTX 4090. Les RTX 4090 d\'occasion se sont vendues entre 2 575 et 3 010 $ (médiane 2 860 $) pour un prix public de 1 599 $, selon le [suivi InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (marché américain : annonces eBay US vendues, octobre 2026, 216 ventes ; vérifié le 2026-11-27 ; prix en USD). Qwen 3.6 est plus récent que Qwen3 ; il est disponible en modèle dense 27B (`qwen3.6:27b`) et en modèle à mélange d\'experts 35B-A3B (`qwen3.6:35b`) ; le 27B tient dans le même palier de 24 Go de VRAM que Qwen3 32B et mérite d\'être comparé ; [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (`qwen3.8:27b`), plus récent encore, n\'est pas couvert par le tableau matériel. Le build par défaut (Q4_K_M) de Qwen2.5-72B dans Ollama pèse 47 Go et laisse peu de place au contexte sur deux cartes de 24 Go ; prévoyez un contexte court, un déport partiel sur CPU, une carte plus grande ou la location cloud — deux RTX 4090 coûtent environ 5,22 $ par jour en amortissement du seul GPU (2 × 2 860 $ de médiane d\'occasion ÷ 1 095 jours sur 3 ans, hors électricité et autres composants), contre 0,35–0,59 $/heure pour une A40 48 Go chez [RunPod](https://www.runpod.io/pricing) (vérifié le 2026-11-27).**',
    quickAnswerTop: {
      fr: {
        question: 'Comment déployer des modèles Qwen en production localement ?',
        answer:
          'Utilisez un stack Docker Compose avec Ollama (inférence GPU) et Open WebUI (interface) ; pour l\'accès distant, ajoutez Nginx en reverse-proxy avec TLS et authentification. Qwen3 8B demande environ 6 Go de VRAM ; Qwen2.5-72B (téléchargement de 47 Go) est à l\'étroit même sur deux cartes de 24 Go.',
        bullets: [
          'Qwen3 8B : RTX 3060 12 Go (environ 6 Go de VRAM requis) ; prix d\'occasion non suivi ici',
          'Qwen3 14B : RTX 4060 Ti 16 Go ; prix non suivi ici',
          'Qwen3 32B : RTX 4090 24 Go, occasion vendue 2 575–3 010 $ (InsiderLLM, ventes aux États-Unis, octobre 2026) (génération précédente ; plus récent : Qwen 3.6 27B, `qwen3.6:27b`, même palier de 24 Go)',
          'Qwen2.5-72B : 2× RTX 4090 juste ; RunPod A100 80 Go 1,19–2,19 $/h (2026-11-27)',
          'Mini PC : Minisforum UM890 Pro (CPU), affiché 439,90 $, épuisé le 2026-11-27',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Points clés',
        items: [
          'Qwen3 8B et 14B ciblent les GPU grand public — en général une carte de 12 Go et de 16 Go, via Ollama dans Docker',
          'Qwen3 32B nécessite une carte de 24 Go comme la RTX 4090 (Qwen3 est la génération précédente ; le plus récent Qwen 3.6 27B, `qwen3.6:27b`, tient dans le même palier de 24 Go)',
          'Qwen2.5-72B (47 Go par défaut) est à l\'étroit sur deux RTX 4090 ; sinon, build CPU avec beaucoup de RAM ou location cloud',
          'Un stack Docker Compose avec Ollama + Open WebUI ; ajoutez Nginx avec TLS et authentification pour l\'accès distant',
          'Serveur toujours actif : Minisforum UM890 Pro (439,90 $, épuisé le 2026-11-27) ou AOOSTAR GEM12+ Pro OCuLink + RTX 4060 Ti (prix du GPU non suivi ici)',
          'Cloud de secours : une A40 48 Go RunPod (0,35–0,59 $/h, 2026-11-27) est aussi juste que deux 4090 pour le build de 47 Go ; l\'A100 80 Go (1,19–2,19 $/h) offre de la marge',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Déployez les modèles Qwen en production avec un stack Docker Compose qui utilise Ollama comme backend d\'inférence et expose un point d\'accès API compatible OpenAI.',
          },
          {
            type: 'plain-terms',
            text: 'Au lieu de lancer Qwen manuellement à chaque fois, Docker configure un serveur permanent qui reste actif — comme l\'API ChatGPT, mais sur votre propre matériel sans coût par token.',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          {
            q: 'Existe-t-il un modèle Qwen 3.8 ?',
            a: 'Oui. Le [dépôt Qwen3.8](https://github.com/QwenLM/Qwen3.8) d\'Alibaba mentionne Qwen3.8-27B (2026-08-14) et le modèle bien plus grand Qwen3.8-2.4T-A95B (2026-08-12). Qwen3.8-27B est un modèle dense ; sa [fiche modèle](https://huggingface.co/Qwen/Qwen3.8-27B) indique la licence Apache-2.0, et la [bibliothèque Ollama](https://ollama.com/library/qwen3.8) référence `qwen3.8:27b` avec un téléchargement de 18 Go (vérifié le 2026-11-27). Le tableau matériel de ce guide ne couvre pas Qwen3.8. Si vous pensiez à Qwen3 8B, récupérez `qwen3:8b`.',
          },
          {
            q: 'Existe-t-il un modèle Qwen3 7B ?',
            a: 'Non. La gamme dense de Qwen3 comprend 0,6B, 1,7B, 4B, 8B, 14B et 32B — il n\'y a pas de 7B. Si vous avez cherché « Qwen3 7B », le modèle le plus proche est Qwen3-8B (`ollama pull qwen3:8b`), qui occupe ~5–6 Go de VRAM en Q4_K_M et tient dans une RTX 3060 12 Go avec de la marge. Pour un modèle de classe 72B, utilisez Qwen2.5-72B.',
          },
          {
            q: 'Puis-je faire tourner Qwen2.5-72B sur un seul RTX 4090 ?',
            a: 'Pas entièrement. Le build Q4_K_M de Qwen2.5-72B dans Ollama pèse 47 Go et une RTX 4090 dispose de 24 Go : une partie du modèle tournerait sur le CPU, plus lentement. Deux RTX 4090 (48 Go) restent justes ; une carte de 80 Go ou un GPU cloud offre de la marge.',
          },
          {
            q: 'Quelle est la différence entre Ollama et vLLM pour le déploiement de Qwen ?',
            a: 'Ollama est plus simple à configurer et répartit automatiquement les modèles sur plusieurs GPU — adapté aux serveurs personnels et aux petites équipes. vLLM utilise le parallélisme tensoriel et le batching continu, en général plus efficace sous charge simultanée — à envisager pour des API de production avec de nombreux utilisateurs.',
          },
          {
            q: 'Alibaba Cloud est-il moins cher que RunPod pour l\'inférence Qwen ?',
            a: 'Ce guide ne dispose d\'aucun prix vérifié pour Alibaba Cloud PAI et ne fait donc pas de comparaison ; consultez les pages tarifaires actuelles. Lors de la vérification du 2026-11-27, [RunPod](https://www.runpod.io/pricing) affichait une A40 48 Go à 0,35 $/h (Community Cloud) et 0,59 $/h (Secure Cloud).',
          },
          {
            q: 'Quelle consommation électrique pour un serveur Qwen toujours actif ?',
            a: 'Ce guide n\'a pas mesuré la consommation. Exemple de calcul avec une puissance moyenne supposée et un tarif supposé de 0,25 €/kWh : 12–45 W en continu (730 heures) coûtent environ 2,20 à 8,20 €/mois. 190 W constants (par exemple une RTX 4060 Ti 16 Go à 165 W selon sa fiche, plus 25 W supposés pour le mini PC) représentent environ 35 €/mois.',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Puis-je faire tourner Qwen2.5-72B sur un seul RTX 4090 ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Pas entièrement. Le build Q4_K_M pèse 47 Go et une RTX 4090 dispose de 24 Go. Deux RTX 4090 restent justes ; une carte de 80 Go ou un GPU cloud offre de la marge.' },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Déployer Qwen comme serveur API de production avec Docker',
      step: [
        { '@type': 'HowToStep', name: 'Installer Docker et Docker Compose', position: 1 },
        { '@type': 'HowToStep', name: 'Créer docker-compose.yml avec Ollama + Open WebUI', position: 2 },
        { '@type': 'HowToStep', name: 'Définir OLLAMA_HOST=0.0.0.0 dans l\'environnement du conteneur', position: 3 },
        { '@type': 'HowToStep', name: 'Récupérer le modèle Qwen via docker exec ollama ollama pull qwen3:8b', position: 4 },
        { '@type': 'HowToStep', name: 'Ajouter Nginx comme passerelle API avec authentification de base', position: 5 },
        { '@type': 'HowToStep', name: 'Définir la politique de redémarrage sur unless-stopped', position: 6 },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Déploiement Local de Qwen : Guide Complet de Production 2026',
      description: 'Déployer Qwen3 8B à 72B en production : Docker Compose, multi-GPU, besoins matériels et repères de coûts.',
      url: 'https://www.promptquorum.com/fr/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'fr',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    relatedReading: {
      items: [
        "[Guide de déploiement Qwen en local — Configuration débutant avec Ollama & LM Studio](/fr/local-llms/qwen-local-deployment-guide-2026) — guide par niveau matériel pour Qwen3 8B à 72B sur hardware grand public",
        "[Guide d'achat GPU 2026 pour LLM locaux](/fr/power-local-llm/best-gpu-buying-guide-local-llm-2026) — recommandations GPU pour Qwen2.5-72B et configurations multi-GPU en production",
        '[Exécuter Qwen en local — Guide de démarrage rapide](/fr/local-llms/run-qwen-locally-guide-2026) — installation pour débutants',
      ],
    },
  },
  ja: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Qwen3ローカルデプロイ完全ガイド（2026）：本番運用',
    seoTitle: 'Qwen3ローカルデプロイ2026：8B・14B・32B＋Docker API',
    metaDescription:
      'Qwen3をローカルにデプロイ：8B・14B・32BをOllama/vLLMとDocker APIサーバーで、ハードウェア選定とマルチGPUも解説。注記 — Qwen3に7Bはありません。8B（qwen3:8b）を使用。2026年版ガイド。',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-ja.webp',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Qwenモデルを本番環境でデプロイする開発者・セルフホスター。永続的なAPIサーバー、マルチGPUビルド、常時稼働ミニPCサーバーを構築する方。',
    leadAnswerBlock:
      '**Qwen3（前世代で今も広く使われている）のdenseモデルは0.6B・1.7B・4B・8B・14B・32Bで、7Bモデルは存在しません。最も近いのはQwen3-8B（`qwen3:8b`をpull）で、「Qwen3 7B」を探していた場合はこの8Bが該当します。Qwen3の最大denseモデルは32Bで、72Bクラスが必要な場合はQwen2.5-72Bを使用します。Qwen3 8Bと14BはコンシューマーGPUに収まり、OllamaまたはvLLMを使ったDocker Compose APIサーバーで利用できます。Qwen3 32B（ダウンロード20GB）にはRTX 4090のような24GBカードが必要です。中古のRTX 4090の販売実績は、[InsiderLLMトラッカー](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（米国市場：eBay USの成約データ、2026年10月、216件、2026-11-27確認）によると$2,575〜3,010（中央値$2,860）で、メーカー希望価格は$1,599でした（米国価格・USD表記で、日本の価格は異なる場合があります）。Qwen 3.6はQwen3より新しいリリースで、27Bのdenseモデル（`qwen3.6:27b`）と35B-A3BのMoEモデル（`qwen3.6:35b`）として提供されています。27BはQwen3 32Bと同じ24GB VRAM階層に収まり、比較する価値があります。さらに新しい[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)（`qwen3.8:27b`）は、本ガイドのハードウェア表の対象外です。Qwen2.5-72BはOllama標準のQ4_K_M版が47GBあり、24GBカード2枚ではコンテキスト用の余裕がほとんどありません。短いコンテキスト、一部のCPUオフロード、より大きいカード、またはクラウド利用を想定してください。RTX 4090を2枚使う場合、GPUの償却だけで1日あたり約$5.22です（中古中央値$2,860 × 2 ÷ 1,095日、3年換算、電気代とその他の部品は除く）。[RunPod](https://www.runpod.io/pricing)の48GB A40は1時間あたり$0.35〜0.59です（2026-11-27確認、米ドル表記）。**',
    quickAnswerTop: {
      ja: {
        question: 'Qwenモデルをローカルで本番運用するには？',
        answer:
          'Docker ComposeスタックでOllama（GPU推論）とOpen WebUI（フロントエンド）を動かし、リモートアクセスにはTLSと認証を設定したNginx（リバースプロキシ）を追加します。Qwen3 8BはVRAM約6GBが必要です。Qwen2.5-72B（ダウンロード47GB）は24GBカード2枚でも余裕がありません。',
        bullets: [
          'Qwen3 8B：RTX 3060 12GB（VRAM約6GB必要）、中古価格はここでは未追跡',
          'Qwen3 14B：RTX 4060 Ti 16GB、価格はここでは未追跡',
          'Qwen3 32B：RTX 4090 24GB、中古販売実績$2,575〜3,010（InsiderLLM、米国の成約価格、2026年10月）（前世代。より新しいQwen 3.6 27B（`qwen3.6:27b`）も同じ24GB階層）',
          'Qwen2.5-72B：RTX 4090×2は余裕なし。RunPod A100 80GBは$1.19〜2.19/時（2026-11-27）',
          'ミニPC案：Minisforum UM890 Pro（CPU）、表示価格$439.90、2026-11-27時点で在庫切れ',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'まとめ',
        items: [
          'Qwen3 8Bと14BはコンシューマーGPU向け — 目安はそれぞれ12GBと16GBのカード、Docker上のOllamaで動作',
          'Qwen3 32BはRTX 4090のような24GBカードが必要（Qwen3は前世代で、より新しいQwen 3.6 27B（`qwen3.6:27b`）が同じ24GB階層に収まります）',
          'Qwen2.5-72B（標準版47GB）はRTX 4090×2でも余裕がありません。代替は大容量RAMのCPUビルドかクラウド',
          'Docker ComposeスタックはOllama + Open WebUI。リモートアクセスにはTLSと認証付きのNginxを追加',
          '常時稼働サーバー：Minisforum UM890 Pro（$439.90、2026-11-27時点で在庫切れ）またはAOOSTAR GEM12+ Pro OCuLink + RTX 4060 Ti（GPU価格はここでは未追跡）',
          'クラウド代替：RunPod A40 48GB（$0.35〜0.59/時、2026-11-27）は47GB版には4090×2と同じく余裕なし。A100 80GB（$1.19〜2.19/時）なら余裕あり',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'QwenモデルをOllamaバックエンドとDocker Composeスタックで本番デプロイし、OpenAI互換APIエンドポイントを公開します。',
          },
          {
            type: 'plain-terms',
            text: 'Dockerを使えば、毎回手動でQwenを起動する代わりに、常時稼働するサーバーを設置できます。ChatGPT APIと同じように使えますが、自分のハードウェア上でトークン費用ゼロで動きます。',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Qwen 3.8というモデルは存在しますか？',
            a: 'はい、存在します。Alibabaの[Qwen3.8リポジトリ](https://github.com/QwenLM/Qwen3.8)には、Qwen3.8-27B（2026-08-14）と、はるかに大きいQwen3.8-2.4T-A95B（2026-08-12）が掲載されています。Qwen3.8-27Bはdenseモデルで、[モデルカード](https://huggingface.co/Qwen/Qwen3.8-27B)のライセンス表記はApache-2.0です。[Ollamaライブラリ](https://ollama.com/library/qwen3.8)では`qwen3.8:27b`のダウンロードサイズは18GBです（2026-11-27確認）。本ガイドのハードウェア表はQwen3.8を対象にしていません。Qwen3 8Bをお探しの場合は`qwen3:8b`を取得してください。',
          },
          {
            q: 'Qwen3 7Bモデルは存在しますか？',
            a: 'いいえ。Qwen3のdenseラインナップは0.6B・1.7B・4B・8B・14B・32Bで、7Bはありません。「Qwen3 7B」を探していた場合、最も近いモデルはQwen3-8B（`ollama pull qwen3:8b`）で、Q4_K_Mで約5〜6GBのVRAMに収まり、RTX 3060 12GBに余裕を持って収まります。72Bクラスが必要な場合はQwen2.5-72Bを使用してください。',
          },
          {
            q: 'Qwen2.5-72BをRTX 4090 1枚で動かせますか？',
            a: '完全には動かせません。OllamaのQwen2.5-72B Q4_K_M版は47GBで、RTX 4090は24GBのため、モデルの一部がCPUで動作し速度が下がります。RTX 4090×2（48GB）でも余裕はなく、80GBカードかクラウドGPUなら余裕があります。RTX 4090 1枚にはQwen3 32B（Q4_K_M、ダウンロード20GB）が収まりますが、長いコンテキストの余裕は限られます。',
          },
          {
            q: 'OllamaとvLLMの違いは？',
            a: 'Ollamaはセットアップが簡単で、複数GPUへの分割を自動で行います。個人サーバーや小規模チームに向いています。vLLMはテンソル並列処理と連続バッチ処理を使い、同時負荷では一般に効率的です。同時利用者の多い本番APIで検討してください。',
          },
          {
            q: 'Alibaba CloudとRunPodはどちらが安い？',
            a: '本ガイドにはAlibaba Cloud PAIの確認済み価格がないため、価格比較はしません。各社の最新の料金ページを確認してください。2026-11-27の確認時点で、[RunPod](https://www.runpod.io/pricing)の48GB A40はコミュニティクラウドが$0.35/時、セキュアクラウドが$0.59/時でした。',
          },
          {
            q: '常時稼働Qwenサーバーの消費電力は？',
            a: '本ガイドでは消費電力を測定していません。平均消費電力と電気料金（約30円/kWh）を仮定した計算例です。12〜45Wで24時間稼働（730時間）すると月約260〜990円です。190W一定（例：仕様上165WのRTX 4060 Ti 16GBに、ミニPC分として25Wを仮定して加算）では月約4,160円です。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qwen2.5-72BをRTX 4090 1枚で動かせますか？',
          acceptedAnswer: { '@type': 'Answer', text: '完全には動かせません。Q4_K_M版は47GBで、RTX 4090は24GBです。RTX 4090×2でも余裕はなく、80GBカードかクラウドGPUなら余裕があります。' },
        },
        {
          '@type': 'Question',
          name: 'OllamaとvLLMの違いは？',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollamaはセットアップが簡単で小規模チームに向いています。vLLMは同時負荷では一般に効率的です。' },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Qwenを本番用APIサーバーとしてDockerでデプロイする',
      step: [
        { '@type': 'HowToStep', name: 'DockerとDocker Composeをインストールする', position: 1 },
        { '@type': 'HowToStep', name: 'Ollama + Open WebUIでdocker-compose.ymlを作成する', position: 2 },
        { '@type': 'HowToStep', name: 'コンテナ環境でOLLAMA_HOST=0.0.0.0を設定する', position: 3 },
        { '@type': 'HowToStep', name: 'docker exec ollama ollama pull qwen3:8bでQwenモデルを取得する', position: 4 },
        { '@type': 'HowToStep', name: 'Basic認証付きのAPIゲートウェイとしてNginxを追加する', position: 5 },
        { '@type': 'HowToStep', name: '再起動ポリシーをunless-stoppedに設定する', position: 6 },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwenローカルデプロイ完全ガイド2026：Docker・APIサーバー・マルチGPU',
      description: 'Qwen3 8B〜72Bの本番環境デプロイ：Docker Compose APIサーバー、マルチGPU設定、ハードウェア要件、コストの目安。',
      url: 'https://www.promptquorum.com/ja/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'ja',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    relatedReading: {
      items: [
        '[Qwenローカルデプロイガイド — OllamaとLM Studioによる入門セットアップ](/ja/local-llms/qwen-local-deployment-guide-2026) — 消費者向けハードウェアのQwen3 8Bから72Bのハードウェア階層ガイド',
        '[ローカルLLM向けGPU購入ガイド2026](/ja/power-local-llm/best-gpu-buying-guide-local-llm-2026) — Qwen2.5-72BおよびマルチGPU本番セットアップのGPU推奨',
        '[Qwenをローカルで実行 — クイックスタートガイド](/ja/local-llms/run-qwen-locally-guide-2026) — 単一モデルの入門インストール',
      ],
    },
  },
  zh: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Qwen3本地部署完整指南（2026）：生产环境',
    seoTitle: 'Qwen3本地部署2026：8B、14B、32B + Docker API',
    metaDescription:
      'Qwen3本地部署：通过Ollama/vLLM运行8B、14B和32B，搭配Docker API服务器、硬件选型与多GPU方案。注意——Qwen3没有7B，请使用8B（qwen3:8b）。2026年指南。',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-zh.webp',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      '在生产环境中部署Qwen模型的开发者和自托管用户——包括持久API服务器、多GPU构建或全天候运行的迷你PC服务器。',
    leadAnswerBlock:
      '**Qwen3（上一代，仍被广泛部署）的dense系列为0.6B、1.7B、4B、8B、14B和32B——没有7B型号。最接近的是Qwen3-8B（拉取`qwen3:8b`）；如果你搜索的是"Qwen3 7B"，你要的其实是8B。Qwen3最大的dense型号是32B；如需72B级别的模型，请使用Qwen2.5-72B。Qwen3 8B和14B能放进消费级GPU，可通过Ollama或vLLM搭配Docker Compose API服务器使用。Qwen3 32B（下载 20 GB）需要 RTX 4090 这类 24GB 显卡。据 [InsiderLLM 追踪器](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场：eBay US 已成交数据，2026年10月，216笔，核对于 2026-11-27），二手 RTX 4090 的成交价为 $2,575–3,010（中位数 $2,860），官方建议零售价为 $1,599（美国价格，USD 计价）。Qwen 3.6是比Qwen3更新的版本，提供27B dense模型（`qwen3.6:27b`）和35B-A3B混合专家模型（`qwen3.6:35b`）；27B与Qwen3 32B处于同一24GB显存档位，值得一并评估；更新的 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)（`qwen3.8:27b`）不在本指南硬件表范围内。Qwen2.5-72B 在 Ollama 中的默认 Q4_K_M 版本为 47 GB，在两张 24GB 显卡上几乎没有上下文余量，需要缩短上下文、部分卸载到 CPU、换更大显卡或租用云端——两张 RTX 4090 仅 GPU 摊销每天约 $5.22（二手中位数 $2,860 × 2 ÷ 1,095 天，按 3 年计，不含电费和其他部件），[RunPod](https://www.runpod.io/pricing) 的 A40 48GB 为每小时 $0.35–0.59（核对于 2026-11-27）。**',
    quickAnswerTop: {
      zh: {
        question: '如何在本地生产环境中部署Qwen模型？',
        answer:
          '使用Docker Compose堆栈：Ollama（GPU推理）+ Open WebUI（前端）；远程访问时另加启用 TLS 和身份认证的 Nginx（反向代理）。Qwen3 8B需要约6GB显存；Qwen2.5-72B（下载 47 GB）即使用两张 24GB 显卡也很紧张。',
        bullets: [
          'Qwen3 8B：RTX 3060 12GB（约需6GB显存），二手价格此处未跟踪',
          'Qwen3 14B：RTX 4060 Ti 16GB，价格此处未跟踪',
          'Qwen3 32B：RTX 4090 24GB，二手成交价 $2,575–3,010（InsiderLLM，美国成交价，2026年10月）（上一代；更新的Qwen 3.6 27B（`qwen3.6:27b`）同属24GB档位）',
          'Qwen2.5-72B：双RTX 4090很紧张；RunPod A100 80GB 每小时 $1.19–2.19（2026-11-27）',
          '迷你PC方案：Minisforum UM890 Pro（CPU），标价 $439.90，2026-11-27 时缺货',
        ],
        updatedDate: '2026-11',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: '核心要点',
        items: [
          'Qwen3 8B和14B面向消费级GPU——通常分别使用12GB和16GB显卡，通过Docker中的Ollama运行',
          'Qwen3 32B需要RTX 4090这类24GB显卡（Qwen3是上一代；更新的Qwen 3.6 27B（`qwen3.6:27b`）处于同一24GB档位）',
          'Qwen2.5-72B（默认下载 47 GB）在双RTX 4090上很紧张；替代方案是大内存 CPU 主机或云端租用',
          'Docker Compose堆栈运行 Ollama + Open WebUI；远程访问请加启用 TLS 和认证的 Nginx',
          '全天候服务器：Minisforum UM890 Pro（CPU运行Qwen3 8B；$439.90，2026-11-27 时缺货）或AOOSTAR GEM12+ Pro OCuLink + RTX 4060 Ti（GPU 价格此处未跟踪）',
          '云端备选：RunPod A40 48GB（每小时 $0.35–0.59，2026-11-27）运行 47 GB 版本同双4090一样紧张；A100 80GB（每小时 $1.19–2.19）有余量',
          '本指南涵盖生产环境部署；基础Ollama配置请参见Qwen入门指南',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '使用以Ollama为推理后端的Docker Compose堆栈在生产环境中部署Qwen模型，并暴露OpenAI兼容的API端点。',
          },
          {
            type: 'plain-terms',
            text: '与其每次手动启动Qwen，不如用Docker搭建一个持续运行的服务器——就像使用ChatGPT API一样，但在自己的硬件上，无需按token付费。',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'Qwen模型显存需求（按硬件分类）',
        content:
          '**根据模型大小选择硬件，而非GPU品牌。** 显存是硬性约束：模型放不下时，部分内容会在 CPU 上运行，速度下降。下表展示Q4_K_M量化（Ollama 常用的默认量化）下的显存需求，各模型的速度此处未跟踪。作为参考，[llama.cpp CUDA 排行榜](https://github.com/ggml-org/llama.cpp/discussions/15013)列出开发者上报的 Llama 2 7B Q4_0 生成速度：RTX 3090 为 158.2 tok/s，RTX 4090 为 186.2 tok/s，RTX 5090 为 290.0 tok/s。据 [InsiderLLM 追踪器](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)（美国市场：eBay US 已成交数据，2026年10月，216笔，核对于 2026-11-27），二手 RTX 4090 的成交价为 $2,575–3,010（中位数 $2,860），官方建议零售价为 $1,599（美国价格，USD 计价）。',
        columns: ['模型', '显存（Q4_K_M）', '最低GPU', '速度（tok/s）', 'CPU备选', '是否适合生产？'],
        rows: [
          { '0': 'Qwen3 8B', '1': '5.2 GB', '2': 'RTX 3060 12GB', '3': '未跟踪', '4': '是（32GB RAM）', '5': '是——单GPU' },
          { '0': 'Qwen3 14B', '1': '9.3 GB', '2': 'RTX 4060 Ti 16GB', '3': '未跟踪', '4': '是（64GB RAM）', '5': '是——单GPU' },
          { '0': 'Qwen3 32B（上一代）', '1': '20 GB', '2': 'RTX 4090 24GB', '3': '未跟踪', '4': '勉强（128GB RAM）', '5': '是——单GPU' },
          { '0': 'Qwen 3.6 27B', '1': '~17 GB', '2': 'RTX 4090 24GB', '3': '未跟踪', '4': '勉强（128GB RAM）', '5': '是——单GPU' },
          { '0': 'Qwen2.5-72B', '1': '47 GB', '2': '双RTX 4090（48GB，紧张）', '3': '未跟踪', '4': '慢（128GB RAM）', '5': '仅多GPU或云端' },
        ],
        note: '显存列中的 GB 数值是 Ollama 库中的模型下载大小（核对于 2026-11-27；Qwen 3.6 为 q4_K_M 标签）；实际运行占用更高。此处不跟踪 GPU 和 CPU 速度。',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'Qwen模型在Q4_K_M量化下的显存需求：Qwen3 8B需要5.2 GB（RTX 3060 12GB），Qwen3 32B需要20 GB（RTX 4090 24GB），Qwen2.5-72B为47 GB（双RTX 4090很紧张）。数值为下载大小。',
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '有Qwen 3.8这个型号吗？',
            a: '有。阿里巴巴的 [Qwen3.8 仓库](https://github.com/QwenLM/Qwen3.8) 列出了 Qwen3.8-27B（2026-08-14）以及体量大得多的 Qwen3.8-2.4T-A95B（2026-08-12）。Qwen3.8-27B 是 dense 模型，[模型卡](https://huggingface.co/Qwen/Qwen3.8-27B) 标注的许可证为 Apache-2.0；[Ollama 库](https://ollama.com/library/qwen3.8) 中 `qwen3.8:27b` 的下载大小为 18 GB（核对于 2026-11-27）。本指南的硬件表不包含 Qwen3.8。如果你指的是 Qwen3 8B，请拉取 `qwen3:8b`。',
          },
          {
            q: '有Qwen3 7B型号吗？',
            a: '没有。Qwen3的dense系列为0.6B、1.7B、4B、8B、14B和32B——没有7B。如果你搜索的是"Qwen3 7B"，最接近的型号是Qwen3-8B（`ollama pull qwen3:8b`），在Q4_K_M下约占用5–6GB显存，可轻松放入RTX 3060 12GB。如需72B级别的模型，请使用Qwen2.5-72B。',
          },
          {
            q: '能用单张RTX 4090运行Qwen2.5-72B吗？',
            a: '无法完全在显卡上运行。Ollama 中 Qwen2.5-72B 的 Q4_K_M 版本为 47 GB，RTX 4090 只有 24GB，部分模型会在 CPU 上运行，速度下降。双 RTX 4090（48GB）仍然紧张；80GB 显卡或云端 GPU 才有余量。单张 RTX 4090 能放下 Q4_K_M 的 Qwen3 32B（下载 20 GB），但长上下文余量有限。',
          },
          {
            q: '生产环境中Ollama和vLLM有什么区别？',
            a: 'Ollama配置更简单，自动在多张GPU间分配模型——适合个人服务器和小团队。vLLM使用张量并行和连续批处理，并发负载下通常效率更高——适合并发用户多的生产API。',
          },
          {
            q: '阿里云和RunPod哪个更便宜？',
            a: '本指南没有经过核实的阿里云 PAI 价格，因此不做价格比较；请查看各厂商当前价格页。2026-11-27 核对时，[RunPod](https://www.runpod.io/pricing) 的 A40 48GB 在社区云为每小时 $0.35，安全云为每小时 $0.59。',
          },
          {
            q: '全天候Qwen服务器消耗多少电力？',
            a: '本指南未实测功耗。以下为按假设平均功率和假设电价（约0.6元/度）的算例：12–45W 全天候运行（730小时）每月约5–20元。恒定 190W（例如规格功耗 165W 的 RTX 4060 Ti 16GB，加上假设 25W 的迷你PC）每月约83元。',
          },
          {
            q: '自托管的Qwen API能与ChatGPT兼容应用程序配合使用吗？',
            a: '很多应用可以。Ollama 在服务器本机的 http://localhost:11434/v1 提供 OpenAI 兼容 API（其他设备请使用带认证的网关地址）。在允许自定义 base URL 的工具（如 LangChain、Continue.dev）中填入该地址，API key 填任意非空字符串，并选择你的 Qwen 模型名。并非所有 OpenAI API 功能都受支持。',
          },
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '能用单张RTX 4090运行Qwen2.5-72B吗？',
          acceptedAnswer: { '@type': 'Answer', text: '无法完全在显卡上运行。Q4_K_M 版本为 47 GB，RTX 4090 只有 24GB。双 RTX 4090 仍然紧张；80GB 显卡或云端 GPU 才有余量。' },
        },
        {
          '@type': 'Question',
          name: '生产环境中Ollama和vLLM有什么区别？',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama配置简单，适合小团队。vLLM在并发负载下通常效率更高。' },
        },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: '将Qwen部署为生产环境API服务器（使用Docker）',
      step: [
        { '@type': 'HowToStep', name: '安装Docker和Docker Compose', position: 1 },
        { '@type': 'HowToStep', name: '创建包含Ollama + Open WebUI的docker-compose.yml', position: 2 },
        { '@type': 'HowToStep', name: '在容器环境中设置OLLAMA_HOST=0.0.0.0', position: 3 },
        { '@type': 'HowToStep', name: '通过docker exec ollama ollama pull qwen3:8b拉取Qwen模型', position: 4 },
        { '@type': 'HowToStep', name: '添加带基础认证的Nginx作为API网关', position: 5 },
        { '@type': 'HowToStep', name: '将重启策略设置为unless-stopped', position: 6 },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen本地部署完整指南2026：Docker、API服务器、多GPU配置',
      description: '在生产环境中部署Qwen3 8B至72B：Docker Compose API服务器、多GPU配置、硬件需求和成本参考。',
      url: 'https://www.promptquorum.com/zh/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'zh',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
    },
    relatedReading: {
      items: [
        '[Qwen 本地部署指南——使用 Ollama 和 LM Studio 的入门配置](/zh/local-llms/qwen-local-deployment-guide-2026) — 覆盖 Qwen3 8B 至 72B 的消费级硬件分层指南',
        '[本地 LLM 显卡购买指南 2026](/zh/power-local-llm/best-gpu-buying-guide-local-llm-2026) — 运行 Qwen2.5-72B 或多卡生产配置的 GPU 选购建议',
        '[本地运行 Qwen——快速入门指南](/zh/local-llms/run-qwen-locally-guide-2026) — 单模型初学者安装',
      ],
    },
  },
  es: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Despliegue Local de Qwen3: Guía Completa de Producción (2026)',
    seoTitle: 'Qwen3 Despliegue Local 2026: 8B, 14B, 32B + API Docker',
    metaDescription:
      'Despliega Qwen3 en local: 8B, 14B y 32B con Ollama/vLLM y un servidor API Docker, elección de hardware y multi-GPU. Nota — Qwen3 no tiene 7B; usa el 8B (qwen3:8b). Guía 2026.',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-es.webp',
    twitterDescription:
      'Qwen3 8B cabe en una RTX 3060 de 12 GB. Qwen2.5-72B necesita dos RTX 4090 o una GPU en la nube. Guía de Docker, servidor API y multi-GPU para 2026.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Desarrolladores y usuarios de self-hosting que despliegan modelos Qwen en producción — servidores API persistentes, builds multi-GPU o servidores mini PC siempre activos.',
    readTime: '16 min de lectura',
    primaryTerm: 'despliegue de Qwen en producción',
    targetKeywords: [
      'despliegue qwen producción',
      'qwen docker ollama servidor api',
      'qwen configuración multi-gpu',
      'guía despliegue local qwen',
      'api qwen self-hosted',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen 3.6 27B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 32B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Minisforum UM890 Pro',
      'AOOSTAR GEM12 Pro OCuLink',
    ],
    leadAnswerBlock:
      '**Los tamaños densos de Qwen3 (generación anterior, aún muy desplegada) son 0,6B, 1,7B, 4B, 8B, 14B y 32B — no existe un modelo 7B. El más cercano es Qwen3-8B (haz pull de `qwen3:8b`); si buscabas "Qwen3 7B", lo que quieres es el 8B. El mayor modelo denso de Qwen3 es el 32B; para un modelo de clase 72B usa Qwen2.5-72B. Qwen3 8B y 14B caben en GPUs de consumo y se pueden servir con Ollama o vLLM y un servidor API Docker Compose. Qwen3 32B (descarga de 20 GB) necesita una tarjeta de 24 GB como la RTX 4090. Las RTX 4090 de segunda mano se vendieron entre $2.575 y $3.010 (mediana $2.860) frente a un PVP de $1.599, según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU.: ventas completadas en eBay US, octubre de 2026, 216 ventas; consultado el 2026-11-27; precios en USD; los precios en tu país pueden variar según impuestos locales). Qwen 3.6 es posterior a Qwen3 y está disponible como modelo denso de 27B (`qwen3.6:27b`) y como modelo de mezcla de expertos 35B-A3B (`qwen3.6:35b`); el 27B cabe en el mismo nivel de 24 GB de VRAM que Qwen3 32B y merece una comparación; [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (`qwen3.8:27b`) es aún más reciente y no figura en la tabla de hardware. La versión por defecto (Q4_K_M) de Qwen2.5-72B en Ollama es una descarga de 47 GB y deja poco margen para el contexto en dos tarjetas de 24 GB; prevé un contexto corto, descarga parcial a la CPU, una tarjeta mayor o alquiler en la nube — dos RTX 4090 cuestan unos $5,22 por día solo en amortización de las GPU (2 × $2.860 de mediana de segunda mano ÷ 1.095 días en 3 años, sin electricidad ni otras piezas), frente a $0,35–0,59/hr por una A40 de 48 GB en [RunPod](https://www.runpod.io/pricing) (consultado el 2026-11-27).**',
    quickAnswerTop: {
      es: {
        question: '¿Cómo despliego modelos Qwen en producción localmente?',
        answer:
          'Ejecuta Qwen mediante un stack Docker Compose que expone una API compatible con OpenAI: Ollama gestiona la inferencia GPU y Open WebUI proporciona el frontend; para acceso remoto, añade Nginx como reverse proxy con TLS y autenticación. Qwen3 8B necesita unos 6 GB de VRAM; Qwen2.5-72B (descarga de 47 GB) va muy justo incluso en dos tarjetas de 24 GB.',
        bullets: [
          'Qwen3 8B: RTX 3060 12 GB (unos 6 GB de VRAM); precio de segunda mano no registrado aquí',
          'Qwen3 14B: RTX 4060 Ti 16 GB; precio no registrado aquí',
          'Qwen3 32B: RTX 4090 24 GB, segunda mano vendida $2.575–3.010 (InsiderLLM, ventas en EE. UU., octubre de 2026) (generación anterior; más reciente: Qwen 3.6 27B, `qwen3.6:27b`, mismo nivel de 24 GB)',
          'Qwen2.5-72B: 2× RTX 4090 va justo; RunPod A100 80 GB $1,19–2,19/hr (2026-11-27)',
          'Opción mini PC: Minisforum UM890 Pro (CPU), a $439,90, agotado el 2026-11-27',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Tabla de hardware', anchor: '#benchmark-table' },
      { label: 'Configuración del servidor API con Docker', anchor: '#docker-setup' },
      { label: 'Configuración multi-GPU', anchor: '#multi-gpu' },
      { label: 'Configuración de la API en producción', anchor: '#api-config' },
      { label: 'Comparación de costes: self-hosted vs nube', anchor: '#cost-comparison' },
      { label: 'Hardware para servidor siempre activo', anchor: '#always-on-server' },
      { label: 'Veredicto: hardware por tamaño de modelo', anchor: '#verdict' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Puntos clave',
        items: [
          'Qwen3 8B y 14B son objetivos para GPUs de consumo — normalmente una tarjeta de 12 GB y una de 16 GB, con Ollama en Docker',
          'Qwen3 32B necesita una tarjeta de 24 GB como la RTX 4090 (Qwen3 es la generación anterior; el más reciente Qwen 3.6 27B, `qwen3.6:27b`, cabe en el mismo nivel de 24 GB)',
          'Qwen2.5-72B (descarga por defecto de 47 GB) va justo en dos RTX 4090; las alternativas son un build CPU con mucha RAM o la nube — dos RTX 4090 cuestan unos $5,22/día solo en amortización de las GPU (2 × $2.860 ÷ 1.095 días)',
          'Un stack Docker Compose con Ollama + Open WebUI expone una API compatible con OpenAI; para acceso remoto añade Nginx con TLS y autenticación',
          'Servidores Qwen siempre activos: Minisforum UM890 Pro (Qwen3 8B en CPU; a $439,90, agotado el 2026-11-27) o AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 GB (precio de la GPU no registrado aquí)',
          'Alternativa en la nube: una RunPod A40 48 GB ($0,35–0,59/hr, 2026-11-27) va tan justa para la versión de 47 GB como dos 4090; la A100 80 GB ($1,19–2,19/hr) deja margen',
          'Esta guía cubre el despliegue en producción; para la configuración básica con Ollama consulta la guía para principiantes de Qwen',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Despliega modelos Qwen en producción usando un stack Docker Compose que ejecuta Ollama como backend de inferencia y expone un endpoint de API compatible con OpenAI.',
          },
          {
            type: 'plain-terms',
            text: 'En lugar de ejecutar Qwen manualmente cada vez, Docker te permite configurar un servidor permanente que permanece activo y acepta solicitudes — igual que usar la API de ChatGPT, pero en tu propio hardware sin coste por token.',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'VRAM de los modelos Qwen por hardware',
        content:
          '**Elige el hardware según el tamaño del modelo, no por la marca de GPU.** La VRAM es la restricción principal: si el modelo no cabe, una parte se ejecuta en la CPU y la velocidad baja. La tabla muestra la VRAM necesaria con cuantización Q4_K_M (un valor habitual en Ollama); las velocidades por modelo no se registran aquí. Como referencia, el [marcador CUDA de llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) recoge velocidades de generación de Llama 2 7B Q4_0 reportadas por desarrolladores: 158,2 tok/s (RTX 3090), 186,2 tok/s (RTX 4090) y 290,0 tok/s (RTX 5090). Las RTX 4090 de segunda mano se vendieron entre $2.575 y $3.010 (mediana $2.860) frente a un PVP de $1.599, según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado de EE. UU.: ventas completadas en eBay US, octubre de 2026, 216 ventas; consultado el 2026-11-27; precios en USD; los precios en tu país pueden variar según impuestos locales).',
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'GPU mínima', 'Velocidad (tok/s)', 'Fallback CPU', '¿Listo para producción?'],
        rows: [
          {
            '0': 'Qwen3 8B',
            '1': '5,2 GB',
            '2': 'RTX 3060 12 GB',
            '3': 'No registrado',
            '4': 'Sí (32 GB RAM)',
            '5': 'Sí — GPU única',
          },
          {
            '0': 'Qwen3 14B',
            '1': '9,3 GB',
            '2': 'RTX 4060 Ti 16 GB',
            '3': 'No registrado',
            '4': 'Sí (64 GB RAM)',
            '5': 'Sí — GPU única',
          },
          {
            '0': 'Qwen3 32B (generación anterior)',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'No registrado',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Sí — GPU única',
          },
          {
            '0': 'Qwen 3.6 27B',
            '1': '~17 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'No registrado',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Sí — GPU única',
          },
          {
            '0': 'Qwen2.5-Coder 32B',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'No registrado',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Sí — GPU única',
          },
          {
            '0': 'Qwen2.5-72B',
            '1': '47 GB',
            '2': '2× RTX 4090 (48 GB, justo)',
            '3': 'No registrado',
            '4': 'Lento (128 GB RAM)',
            '5': 'Solo multi-GPU o nube',
          },
        ],
        note: 'Los GB de la columna VRAM son tamaños de descarga de la biblioteca de Ollama (consultado el 2026-11-27; en Qwen 3.6, la etiqueta q4_K_M); el uso de memoria en ejecución es mayor. Las velocidades de GPU y CPU no se registran aquí. La RTX 4090 no tiene conector NVLink, por lo que dos RTX 4090 se comunican solo por PCIe; NVLink existe en algunas tarjetas como la RTX 3090.',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'Requisitos de VRAM de los modelos Qwen con cuantización Q4_K_M: Qwen3 8B necesita 5,2 GB (RTX 3060 12 GB), Qwen3 32B necesita 20 GB (RTX 4090 24 GB) y Qwen2.5-72B ocupa 47 GB (justo en dos RTX 4090). Son tamaños de descarga.',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Configuración del servidor API con Docker — Ollama + Open WebUI + Nginx',
        content:
          '**Un servidor Qwen compacto usa dos contenedores, Ollama (inferencia) y Open WebUI (UI), ambos en el archivo compose de abajo; para acceso remoto añade aparte un reverse proxy Nginx con TLS y autenticación.** El passthrough de GPU requiere NVIDIA Container Toolkit en el host. En el propio servidor, la API compatible con OpenAI está en `http://localhost:11434/v1`.',
        numberedItems: [
          {
            title: 'Instala Docker y Docker Compose',
            whyItMatters: 'Los contenedores mantienen Qwen aislado de tu sistema operativo — sin conflictos de entornos Python, actualizaciones sencillas.',
          },
          {
            title: 'Crea docker-compose.yml con los servicios Ollama + Open WebUI',
            whyItMatters: 'El archivo compose gestiona el passthrough de GPU, el mapeo de puertos y las políticas de reinicio en un solo lugar.',
          },
          {
            title: 'Establece OLLAMA_HOST=0.0.0.0 en el entorno del contenedor Ollama',
            whyItMatters: 'Ollama debe escuchar en la interfaz de red del contenedor para que otros contenedores lleguen a él. La imagen oficial ya lo hace; la línea lo deja explícito.',
          },
          {
            title: 'Descarga tu modelo Qwen: docker exec ollama ollama pull qwen3:8b',
            whyItMatters: 'Los modelos se almacenan en un volumen Docker para que persistan entre reinicios del contenedor.',
          },
          {
            title: 'Añade Nginx como API gateway con autenticación básica para despliegues públicos',
            whyItMatters: 'Exponer Ollama directamente a internet sin autenticación permite que cualquiera ejecute inferencia en tu GPU.',
          },
          {
            title: 'Establece la política de reinicio del contenedor en unless-stopped',
            whyItMatters: 'Esto garantiza que tu servidor Qwen sobreviva a los reinicios del sistema — fundamental para despliegues en mini PC siempre activos.',
          },
        ],
        codeBlock: `version: "3.8"
services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: unless-stopped
    ports:
      - "127.0.0.1:11434:11434"
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=-1
    volumes:
      - ollama_data:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    volumes:
      - open_webui_data:/app/backend/data
    depends_on:
      - ollama

volumes:
  ollama_data:
  open_webui_data:`,
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'El archivo compose limita ambos puertos publicados a localhost. Si quitas `127.0.0.1:`, quedan publicados en todas las interfaces de red. Ollama no incluye autenticación y [los puertos publicados por Docker esquivan las reglas de ufw](https://docs.docker.com/engine/network/packet-filtering-firewalls/). Para acceso remoto, expón solo una pasarela Nginx con TLS y autenticación. Úsalo bajo tu propia responsabilidad.',
          },
        ],
      },
      multiGpu: {
        id: 'multi-gpu',
        title: 'Configuración multi-GPU para Qwen2.5-72B',
        content:
          '**Qwen2.5-72B Q4_K_M es una descarga de 47 GB en Ollama, así que una RTX 4090 (24 GB) no basta. Dos RTX 4090 (48 GB combinados) dejan poco margen para el contexto; una sola tarjeta de 80 GB (A100, H100) da holgura.** Según la [FAQ de Ollama](https://docs.ollama.com/faq), un modelo que no cabe en una GPU se reparte entre todas las disponibles.',
        items: [
          'Si un modelo no cabe en una GPU, Ollama lo reparte entre las GPUs disponibles — establece CUDA_VISIBLE_DEVICES=0,1 en el entorno del compose para apuntar a tarjetas específicas',
          'Revisa el manual de tu placa base para ver cómo comparten líneas PCIe dos GPUs; muchas placas de consumo dan menos líneas a la segunda ranura larga',
          'La RTX 4090 no tiene conector NVLink, así que dos RTX 4090 se comunican solo por PCIe; los puentes NVLink existen para algunas tarjetas anteriores, como la RTX 3090',
          'vLLM es un motor de inferencia alternativo con paralelismo tensorial; considéralo para muchas solicitudes concurrentes. El comando de abajo usa la [versión AWQ](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct-AWQ), bajo la licencia Qwen (no Apache-2.0). El comando publica el puerto 8000 solo en localhost; no lo expongas sin autenticación. Esta guía no ha probado si cabe en dos tarjetas de 24 GB; reduce `--max-model-len` si te quedas sin memoria',
          'Para uso ocasional de Qwen2.5-72B, alquilar cuesta menos de entrada: RunPod lista una A100 80 GB a $1,19–2,19/hr (2026-11-27), mientras que solo dos RTX 4090 de segunda mano cuestan unos $5.720 con la mediana (InsiderLLM, ventas en EE. UU., octubre de 2026)',
        ],
        codeBlock: `# vLLM multi-GPU alternative (better for high-traffic 72B)
docker run --gpus all \\
  -p 127.0.0.1:8000:8000 \\
  -e VLLM_WORKER_MULTIPROC_METHOD=spawn \\
  vllm/vllm-openai:latest \\
  --model Qwen/Qwen2.5-72B-Instruct-AWQ \\
  --tensor-parallel-size 2 \\
  --max-model-len 32768 \\
  --quantization awq`,
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '[NVIDIA indica 450 W de potencia gráfica](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/) para una RTX 4090. Dos requieren una fuente dimensionada para ambas y el resto del equipo, cables de alimentación de 16 pines correctos y bien insertados, espacio y ventilación suficientes y un circuito eléctrico que soporte la carga. Un cableado defectuoso puede dañar el hardware o provocar un incendio. Si tienes dudas, consulta a un técnico cualificado. Bajo tu propia responsabilidad.',
          },
        ],
      },
      apiConfig: {
        id: 'api-config',
        title: 'Configuración de la API en producción',
        content:
          '**Ollama ofrece una API compatible con OpenAI en /v1 — muchas aplicaciones creadas para la API de OpenAI funcionan con tu Qwen local al cambiar la URL base y el nombre del modelo; no se cubren todas las funciones.** Variables de entorno clave que afectan al comportamiento en producción:',
        items: [
          'OLLAMA_KEEP_ALIVE=-1 — evita que el modelo se descargue tras inactividad (el valor por defecto es 5 minutos, normalmente no deseado en un servidor)',
          'OLLAMA_NUM_PARALLEL=4 — permite hasta 4 solicitudes en paralelo por modelo; más ranuras paralelas requieren más memoria',
          'OLLAMA_MAX_LOADED_MODELS=1 — mantén solo un modelo en VRAM a la vez en builds de GPU pequeñas para evitar thrashing',
          'OLLAMA_FLASH_ATTENTION=1 — habilita flash attention, que puede mejorar la velocidad en GPUs NVIDIA Ampere/Ada (RTX 3060 y más nuevas); la mejora varía según el modelo y el contexto',
          'OLLAMA_GPU_OVERHEAD=536870912 — reserva VRAM en cada GPU; el valor va en bytes (esto son 512 MiB), según el [código de Ollama](https://github.com/ollama/ollama/blob/main/envconfig/config.go). Puede ayudar contra errores de falta de memoria',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'OLLAMA_KEEP_ALIVE=0 descarga el modelo justo después de cada solicitud. Si la variable no está definida, el modelo permanece cargado 5 minutos por defecto. Tras una descarga, la siguiente solicitud espera a que el modelo vuelva a cargarse. Define OLLAMA_KEEP_ALIVE=-1 para mantenerlo cargado en un servidor API.',
          },
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Comparación de costes: self-hosted vs Alibaba Cloud vs RunPod',
        content:
          '**El self-hosting suele compensar solo con carga sostenida; para uso ocasional, alquilar una GPU en la nube normalmente cuesta menos que comprarla.** La tabla amortiza solo el precio de la GPU en 3 años (ilustrativo; la electricidad y las demás piezas no se registran). Con la mediana de venta de la RTX 4090 de segunda mano ($2.860) son $2,61 por día ($2.860 ÷ 1.095 días), equivalentes a entre 4,4 y 7,5 horas diarias de alquiler de una RunPod A40 a $0,59 o $0,35/hr ([precios de RunPod](https://www.runpod.io/pricing), nube segura y comunitaria, consultado el 2026-11-27).',
        columns: ['Opción', 'Coste Qwen3 8B/día', 'Coste Qwen2.5-72B/día', 'Coste inicial', 'Mejor para'],
        rows: [
          {
            '0': 'Self-hosted: mini PC RTX 3060 12 GB',
            '1': 'No registrado',
            '2': 'N/A (no cabe)',
            '3': 'No registrado (precio de la GPU de segunda mano no registrado)',
            '4': 'Inferencia 8B siempre activa, servidor doméstico/oficina',
          },
          {
            '0': 'Self-hosted: workstation RTX 4090',
            '1': '$2,61 (solo amortización de la GPU, 3 años)',
            '2': 'N/A (GPU única)',
            '3': 'Solo la GPU: $2.575–3.010 vendida de segunda mano (mediana $2.860); otras piezas no registradas',
            '4': 'Inferencia hasta 32B, uso completo de workstation',
          },
          {
            '0': 'Self-hosted: dos RTX 4090',
            '1': '$5,22 (solo amortización de las GPU: 2 × $2.860 ÷ 1.095 días)',
            '2': '$5,22 (misma amortización de las GPU)',
            '3': 'Solo las GPU: 2 × $2.860 = $5.720 con la mediana; otras piezas no registradas',
            '4': '72B siempre activo con otro uso de workstation',
          },
          {
            '0': 'RunPod A40 48 GB ($0,35–0,59/hr)',
            '1': '$0,35–0,59 (1 hr)',
            '2': '$0,35–0,59 (1 hr)',
            '3': '$0 inicial, pago por hora',
            '4': 'Uso puntual, pruebas; justo para 72B Q4_K_M',
          },
          {
            '0': 'Alibaba Cloud PAI (GPU A10)',
            '1': 'No registrado',
            '2': 'No registrado',
            '3': 'Consulta la página de precios',
            '4': 'Usuarios del ecosistema Alibaba Cloud',
          },
          {
            '0': 'Vast.ai RTX 4090 spot',
            '1': 'No registrado',
            '2': 'N/A',
            '3': '$0 inicial',
            '4': 'Uso puntual económico, riesgo de cortes aceptable',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io',
            productName: 'RunPod GPU Cloud',
            productCategory: 'cloud-gpu',
            priceRange: 'A40 desde $0,35/hr (2026-11-27)',
            label: 'Empieza en RunPod →',
          },
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai Spot GPUs',
            productCategory: 'cloud-gpu',
            priceRange: 'Ver página del proveedor',
            label: 'Ver precios de GPU spot en Vast.ai →',
          },
        ],
      },
      alwaysOnServer: {
        id: 'always-on-server',
        title: 'Recomendaciones de hardware para servidor Qwen siempre activo',
        content:
          '**Un mini PC siempre encendido gasta poca electricidad: con un consumo medio supuesto de 12–45 W y $0,16/kWh, funcionar 24/7 (730 horas) cuesta unos $1,40–5,30 al mes.** Esta guía no ha medido el consumo. Dos opciones de mini PC cubren los montajes habituales:',
        items: [
          'Económico (inferencia CPU con Qwen3 8B): Minisforum UM890 Pro — AMD Ryzen 9 8945HS; la página del fabricante ofrece variantes barebone, 32 GB de RAM + SSD de 1 TB y 64 GB + 1 TB. Mostraba un precio de $439,90 y las variantes como agotadas (consultado el 2026-11-27). La velocidad en CPU con Qwen3 8B no se registra aquí.',
          'Opción eGPU (Qwen3 14B): AOOSTAR GEM12+ Pro (Ryzen 7 PRO 8845HS) tiene un puerto OCuLink; el fabricante lo listaba a $359 en barebone (sin RAM ni SSD) y agotado (consultado el 2026-11-27). El fabricante indica apagar el PC antes de conectar o desconectar OCuLink. Combínalo con una RTX 4060 Ti 16 GB en un dock eGPU (los precios de la GPU y el dock no se registran aquí, así que no se da un total). Qwen3 14B cabe en la VRAM de la tarjeta de 16 GB.',
          'Usuario avanzado (Qwen3 32B): PC de sobremesa compacto ATX con RTX 4090 de segunda mano (vendida a $2.575–3.010, mediana $2.860, según el [rastreador de InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), ventas en eBay US, octubre de 2026). Los precios de caja, CPU y RAM no se registran aquí, por lo que no se indica un total. Qwen3 32B con Q4_K_M (20 GB) cabe en la tarjeta de 24 GB, con margen limitado para contextos largos.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.minisforum.com/products/minisforum-um890-pro',
            productName: 'Minisforum UM890 Pro',
            productCategory: 'mini-pc',
            priceRange: '$439,90 (agotado, 2026-11-27)',
            label: 'Ver Minisforum UM890 Pro (servidor CPU Qwen3 8B) →',
          },
          {
            url: 'https://aoostar.com/products/aoostar-gem12-pro',
            productName: 'AOOSTAR GEM12 Pro OCuLink',
            productCategory: 'mini-pc',
            priceRange: '$359 barebone (agotado, 2026-11-27)',
            label: 'Ver AOOSTAR GEM12+ Pro (OCuLink) →',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto: qué despliegue usar según el tamaño del modelo',
        content:
          '**Elige tu ruta de despliegue de Qwen según el tamaño del modelo y las horas de uso diario — no por lo impresionante que parezca el hardware.**',
        decisionBlock: {
          title: 'Decisión de despliegue de Qwen',
          localIf: [
            'Qwen3 8B o 14B y lo usas 4+ horas al día → comprar un mini PC o GPU puede compensar; compara con los precios actuales de la nube',
            'Quieres evitar viajes de red en flujos interactivos de código o documentos',
            'Procesas datos privados que no deben salir de tu red',
            'Ya tienes una GPU de escritorio con 12+ GB de VRAM sin usar',
          ],
          cloudIf: [
            'Qwen2.5-72B para uso ocasional (< 4 horas/día) — alquilar (RunPod A100 80 GB, $1,19–2,19/hr) evita una gran compra de hardware',
            'Necesitas probar Qwen2.5-72B antes de comprometerte con una compra de hardware',
            'Tu uso es irregular: con alquiler por hora dejas de pagar la GPU al detener la instancia (el almacenamiento puede seguir cobrándose)',
            'Estás fuera de EE.UU./UE y los costes de envío o aranceles de importación encarecen el hardware',
          ],
          quick: [
            'Qwen3 8B a diario: Minisforum UM890 Pro',
            'Qwen3 14B a diario: AOOSTAR + RTX 4060 Ti (precio de la GPU no registrado aquí)',
            'Qwen3 32B a diario: ATX compacto + RTX 4090 (segunda mano vendida $2.575–3.010; total del build no registrado)',
            'Qwen2.5-72B ocasional: RunPod A100 80 GB ($1,19–2,19/hr)',
          ],
        },
        imageCaption:
          'Árbol de decisión autoalojado vs nube para Qwen: autoaloja si el uso es sostenido (un Minisforum UM890 Pro para Qwen3 8B; una RTX 4090 de segunda mano para Qwen3 32B, solo la GPU a $2.575–3.010 vendida según el InsiderLLM, ventas en EE. UU., octubre de 2026); usa la nube, como una RunPod A100 80 GB ($1,19–2,19/hr, 2026-11-27), para Qwen2.5-72B ocasional.',
      },
      internalLinks: {
        id: 'see-also',
        title: 'Guías relacionadas',
        items: [
          'Configuración básica de Qwen con Ollama (principiantes): /es/local-llms/run-qwen-locally-guide-2026',
          'Guía de compra de GPU para LLMs locales: /es/power-local-llm/best-gpu-buying-guide-local-llm-2026',
          'Almacenamiento NAS para archivos de modelos: /es/power-local-llm/best-nas-storage-local-ai-models-2026',
          'Comparación de GPU en la nube (proveedores occidentales): /es/power-local-llm/best-cloud-gpu-providers',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Existe un modelo Qwen 3.8?',
            a: 'Sí. El [repositorio de Qwen3.8](https://github.com/QwenLM/Qwen3.8) de Alibaba incluye Qwen3.8-27B (2026-08-14) y el mucho mayor Qwen3.8-2.4T-A95B (2026-08-12). Qwen3.8-27B es un modelo denso; su [ficha del modelo](https://huggingface.co/Qwen/Qwen3.8-27B) indica Apache-2.0, y la [biblioteca de Ollama](https://ollama.com/library/qwen3.8) muestra `qwen3.8:27b` con una descarga de 18 GB (consultado el 2026-11-27). La tabla de hardware de esta guía no cubre Qwen3.8. Si te referías a Qwen3 8B, descarga `qwen3:8b`.',
          },
          {
            q: '¿Existe un modelo Qwen3 7B?',
            a: 'No. La gama densa de Qwen3 es 0,6B, 1,7B, 4B, 8B, 14B y 32B — no hay 7B. Si buscabas "Qwen3 7B", el modelo más cercano es Qwen3-8B (`ollama pull qwen3:8b`), que ocupa ~5–6 GB de VRAM en Q4_K_M y cabe en una RTX 3060 12 GB con margen. Para un modelo de clase 72B, usa Qwen2.5-72B.',
          },
          {
            q: '¿Puedo ejecutar Qwen2.5-72B en una sola RTX 4090?',
            a: 'No del todo. La versión Q4_K_M de Qwen2.5-72B en Ollama es una descarga de 47 GB y una RTX 4090 tiene 24 GB, así que parte del modelo se ejecutaría en la CPU y la velocidad bajaría. Dos RTX 4090 (48 GB) siguen yendo justas; una tarjeta de 80 GB o una GPU en la nube dan margen. Una sola RTX 4090 puede alojar Qwen3 32B en Q4_K_M (descarga de 20 GB), con margen limitado para contextos largos.',
          },
          {
            q: '¿Cuál es la diferencia entre Ollama y vLLM para el despliegue de Qwen en producción?',
            a: 'Ollama es más fácil de configurar y reparte los modelos entre varias GPUs automáticamente — encaja en servidores personales y equipos pequeños. vLLM usa paralelismo tensorial y batching continuo, que normalmente lo hace más eficiente bajo carga concurrente — considéralo para APIs de producción con muchos usuarios simultáneos.',
          },
          {
            q: '¿Ollama admite inferencia multi-GPU para Qwen de forma nativa?',
            a: 'Sí. Según la [FAQ de Ollama](https://docs.ollama.com/faq), un modelo que no cabe en una GPU se reparte entre todas las disponibles. Con CUDA_VISIBLE_DEVICES=0,1 puedes limitar qué GPUs NVIDIA se usan. Dos RTX 4090 se comunican por PCIe; esta guía no tiene una cifra de tok/s con fuente para Qwen2.5-72B en ellas, así que no se indica ninguna.',
          },
          {
            q: '¿Es Alibaba Cloud más barato que RunPod para la inferencia de Qwen?',
            a: 'Esta guía no tiene un precio verificado de Alibaba Cloud PAI, así que no hace comparación de precios; consulta las páginas actuales de cada proveedor. Al consultarlo el 2026-11-27, [RunPod](https://www.runpod.io/pricing) listaba una A40 48 GB a $0,35/hr (nube comunitaria) y $0,59/hr (nube segura).',
          },
          {
            q: '¿Cuánta electricidad consume un servidor Qwen siempre activo?',
            a: 'Esta guía no ha medido el consumo. Como ejemplo con consumos medios supuestos: 12–45 W a $0,16/kWh, funcionando 24/7 (730 horas), son unos $1,40–5,30 al mes. 190 W constantes (por ejemplo, una RTX 4060 Ti 16 GB con sus 165 W de especificación más 25 W supuestos para el mini PC) son unos $22 al mes.',
          },
          {
            q: '¿Puedo usar la API de Qwen self-hosted con aplicaciones compatibles con ChatGPT?',
            a: 'Sí, en muchos casos. Ollama ofrece una API compatible con OpenAI en http://localhost:11434/v1 en el propio servidor (desde otros equipos usa la dirección de tu pasarela con autenticación). En herramientas que permiten definir una URL base, como LangChain o Continue.dev, introduce esa dirección, cualquier clave de API no vacía y el nombre de tu modelo Qwen. No se admiten todas las funciones de la API de OpenAI.',
          },
        ],
      },
      updateLog: {
        id: 'update-log',
        title: 'Registro de actualizaciones',
        items: [
          '2026-05-26: Publicación inicial. Precios y velocidades orientativos, no mediciones de PromptQuorum; consulta los anuncios actuales.',
          '2026-10-19: Qwen3 se presenta ahora como la generación anterior de Qwen (aún muy desplegada) y Qwen 3.6 (27B denso, 35B-A3B mezcla de expertos) como la generación más reciente.',
          '2026-11-22: Los precios de GPU, el coste por día y los totales de los builds citan fuentes de anuncios con fecha (rastreador de InsiderLLM, 2026-10-15); las velocidades por modelo figuran como no registradas.',
          '2026-11-27: Correcciones: Qwen3.8 existe; la versión por defecto de Qwen2.5-72B ocupa 47 GB; cifras de RunPod, mini PC y electricidad revisadas o marcadas como supuestos; eliminadas velocidades de CPU y precios de Alibaba Cloud sin fuente; puertos del compose limitados a localhost; corregidos ajustes de Ollama y el nombre del modelo en vLLM.',
          'Próxima revisión programada: 2027-05-22',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puedo ejecutar Qwen2.5-72B en una sola RTX 4090?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No del todo. La versión Q4_K_M de Qwen2.5-72B en Ollama es una descarga de 47 GB y una RTX 4090 tiene 24 GB, así que parte del modelo se ejecutaría en la CPU y la velocidad bajaría. Dos RTX 4090 (48 GB) siguen yendo justas; una tarjeta de 80 GB o una GPU en la nube dan margen. Una sola RTX 4090 puede alojar Qwen3 32B en Q4_K_M (descarga de 20 GB), con margen limitado para contextos largos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuál es la diferencia entre Ollama y vLLM para el despliegue de Qwen en producción?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ollama es más fácil de configurar y reparte los modelos entre varias GPUs automáticamente — encaja en servidores personales y equipos pequeños. vLLM usa paralelismo tensorial y batching continuo, que normalmente lo hace más eficiente bajo carga concurrente — considéralo para APIs de producción con muchos usuarios simultáneos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Ollama admite inferencia multi-GPU para Qwen de forma nativa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Según la [FAQ de Ollama](https://docs.ollama.com/faq), un modelo que no cabe en una GPU se reparte entre todas las disponibles. Con CUDA_VISIBLE_DEVICES=0,1 puedes limitar qué GPUs NVIDIA se usan. Dos RTX 4090 se comunican por PCIe; esta guía no tiene una cifra de tok/s con fuente para Qwen2.5-72B en ellas, así que no se indica ninguna.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es Alibaba Cloud más barato que RunPod para la inferencia de Qwen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Esta guía no tiene un precio verificado de Alibaba Cloud PAI, así que no hace comparación de precios; consulta las páginas actuales de cada proveedor. Al consultarlo el 2026-11-27, [RunPod](https://www.runpod.io/pricing) listaba una A40 48 GB a $0,35/hr (nube comunitaria) y $0,59/hr (nube segura).',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánta electricidad consume un servidor Qwen siempre activo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Esta guía no ha medido el consumo. Como ejemplo con consumos medios supuestos: 12–45 W a $0,16/kWh, funcionando 24/7 (730 horas), son unos $1,40–5,30 al mes. 190 W constantes (por ejemplo, una RTX 4060 Ti 16 GB con sus 165 W de especificación más 25 W supuestos para el mini PC) son unos $22 al mes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo usar la API de Qwen self-hosted con aplicaciones compatibles con ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, en muchos casos. Ollama ofrece una API compatible con OpenAI en http://localhost:11434/v1 en el propio servidor (desde otros equipos usa la dirección de tu pasarela con autenticación). En herramientas que permiten definir una URL base, como LangChain o Continue.dev, introduce esa dirección, cualquier clave de API no vacía y el nombre de tu modelo Qwen. No se admiten todas las funciones de la API de OpenAI.',
          },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Despliegue Local de Qwen: Guía Completa de Producción 2026',
      description:
        'Despliega Qwen3 8B a 72B en producción: servidor API Docker Compose, configuración multi-GPU, requisitos de hardware y notas de coste.',
      url: 'https://www.promptquorum.com/es/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'es',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Modelos de lenguaje Qwen' },
        { '@type': 'Thing', name: 'Despliegue de LLM local' },
        { '@type': 'Thing', name: 'Inferencia GPU con Docker' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'vLLM' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'Thing', name: 'Qwen2.5-72B' },
        { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'es',
      name: 'Cómo desplegar Qwen como servidor API de producción con Docker',
      step: [
        { '@type': 'HowToStep', name: 'Instala Docker y Docker Compose', position: 1 },
        { '@type': 'HowToStep', name: 'Crea docker-compose.yml con Ollama + Open WebUI', position: 2 },
        { '@type': 'HowToStep', name: 'Establece OLLAMA_HOST=0.0.0.0 en el entorno del contenedor', position: 3 },
        { '@type': 'HowToStep', name: 'Descarga tu modelo Qwen mediante docker exec', position: 4 },
        { '@type': 'HowToStep', name: 'Añade Nginx como API gateway con autenticación básica', position: 5 },
        { '@type': 'HowToStep', name: 'Establece la política de reinicio en unless-stopped', position: 6 },
      ],
    },
    relatedReading: {
      items: [
        '[Guía de despliegue local de Qwen — Configuración para principiantes con Ollama y LM Studio](/es/local-llms/qwen-local-deployment-guide-2026) — guía por nivel de hardware para Qwen3 8B a 72B en hardware de consumo',
        '[Guía de compra de GPU para LLMs locales 2026](/es/power-local-llm/best-gpu-buying-guide-local-llm-2026) — recomendaciones de GPU para Qwen2.5-72B y configuraciones multi-GPU en producción',
        '[Ejecutar Qwen localmente — Guía de inicio rápido](/es/local-llms/run-qwen-locally-guide-2026) — instalación para principiantes',
      ],
    },
  },
  pt: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Implantação Local do Qwen3: Guia Completo de Produção (2026)',
    seoTitle: 'Qwen3 Implantação Local 2026: 8B, 14B, 32B + API Docker',
    metaDescription:
      'Implante o Qwen3 localmente: 8B, 14B e 32B via Ollama/vLLM com servidor API Docker, escolha de hardware e multi-GPU. Nota — o Qwen3 não tem 7B; use o 8B (qwen3:8b). Guia 2026.',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-pt.webp',
    twitterDescription:
      'Qwen3 8B cabe em uma RTX 3060 de 12 GB. Qwen2.5-72B precisa de duas RTX 4090 ou uma GPU na nuvem. Guia de Docker, servidor API e multi-GPU para 2026.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Desenvolvedores e usuários de self-hosting que implantam modelos Qwen em produção — servidores API persistentes, builds multi-GPU ou servidores mini PC sempre ativos.',
    readTime: '16 min de leitura',
    primaryTerm: 'implantação do Qwen em produção',
    targetKeywords: [
      'implantação qwen produção',
      'qwen docker ollama servidor api',
      'qwen configuração multi-gpu',
      'guia implantação local qwen',
      'api qwen self-hosted',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen 3.6 27B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 32B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Minisforum UM890 Pro',
      'AOOSTAR GEM12 Pro OCuLink',
    ],
    leadAnswerBlock:
      '**Os tamanhos densos do Qwen3 (geração anterior, ainda muito usada) são 0,6B, 1,7B, 4B, 8B, 14B e 32B — não existe um modelo 7B. O mais próximo é o Qwen3-8B (faça pull de `qwen3:8b`); se você buscou "Qwen3 7B", é o 8B que você quer. O maior modelo denso do Qwen3 é o 32B; para um modelo da classe 72B use o Qwen2.5-72B. Qwen3 8B e 14B cabem em GPUs de consumo e podem ser servidos via Ollama ou vLLM com um servidor API Docker Compose. O Qwen3 32B (download de 20 GB) precisa de uma placa de 24 GB como a RTX 4090. As RTX 4090 usadas foram vendidas entre US$ 2.575 e US$ 3.010 (mediana US$ 2.860) contra um preço sugerido de US$ 1.599, segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA: vendas concluídas no eBay US, outubro de 2026, 216 vendas; verificado em 2026-11-27; os preços no Brasil podem variar bastante devido a impostos de importação). O Qwen 3.6 é posterior ao Qwen3 e está disponível como modelo denso de 27B (`qwen3.6:27b`) e como modelo de mistura de especialistas 35B-A3B (`qwen3.6:35b`); o 27B cabe na mesma faixa de 24 GB de VRAM do Qwen3 32B e vale a comparação; o [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (`qwen3.8:27b`) é ainda mais novo e não está na tabela de hardware. A versão padrão (Q4_K_M) do Qwen2.5-72B no Ollama é um download de 47 GB e deixa pouco espaço para contexto em duas placas de 24 GB; planeje contexto curto, offload parcial para a CPU, uma placa maior ou aluguel na nuvem — duas RTX 4090 custam cerca de US$ 5,22 por dia só em amortização das GPUs (2 × US$ 2.860 de mediana de usadas ÷ 1.095 dias em 3 anos, sem eletricidade e outras peças), contra US$ 0,35–0,59/h por uma A40 de 48 GB na [RunPod](https://www.runpod.io/pricing) (verificado em 2026-11-27).**',
    quickAnswerTop: {
      pt: {
        question: 'Como implanto modelos Qwen em produção localmente?',
        answer:
          'Execute o Qwen por meio de um stack Docker Compose que expõe uma API compatível com OpenAI: o Ollama cuida da inferência na GPU e o Open WebUI fornece o front-end; para acesso remoto, adicione o Nginx como reverse proxy com TLS e autenticação. O Qwen3 8B precisa de cerca de 6 GB de VRAM; o Qwen2.5-72B (download de 47 GB) fica apertado até em duas placas de 24 GB.',
        bullets: [
          'Qwen3 8B: RTX 3060 12 GB (cerca de 6 GB de VRAM); preço de usada não rastreado aqui',
          'Qwen3 14B: RTX 4060 Ti 16 GB; preço não rastreado aqui',
          'Qwen3 32B: RTX 4090 24 GB, usada vendida US$ 2.575–3.010 (InsiderLLM, vendas nos EUA, outubro de 2026) (geração anterior; mais recente: Qwen 3.6 27B, `qwen3.6:27b`, mesma faixa de 24 GB)',
          'Qwen2.5-72B: 2× RTX 4090 fica apertado; RunPod A100 80 GB US$ 1,19–2,19/h (2026-11-27)',
          'Opção mini PC: Minisforum UM890 Pro (CPU), a US$ 439,90, esgotado em 2026-11-27',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Tabela de hardware', anchor: '#benchmark-table' },
      { label: 'Configuração do servidor API com Docker', anchor: '#docker-setup' },
      { label: 'Configuração multi-GPU', anchor: '#multi-gpu' },
      { label: 'Configuração da API em produção', anchor: '#api-config' },
      { label: 'Comparação de custos: self-hosted vs nuvem', anchor: '#cost-comparison' },
      { label: 'Hardware para servidor sempre ativo', anchor: '#always-on-server' },
      { label: 'Veredicto: hardware por tamanho de modelo', anchor: '#verdict' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Pontos principais',
        items: [
          'Qwen3 8B e 14B são alvos para GPUs de consumo — normalmente uma placa de 12 GB e uma de 16 GB, com Ollama no Docker',
          'Qwen3 32B precisa de uma placa de 24 GB como a RTX 4090 (o Qwen3 é a geração anterior; o Qwen 3.6 27B, mais recente, `qwen3.6:27b`, cabe na mesma faixa de 24 GB)',
          'Qwen2.5-72B (download padrão de 47 GB) fica apertado em duas RTX 4090; as alternativas são um build de CPU com muita RAM ou a nuvem — duas RTX 4090 custam cerca de US$ 5,22/dia só em amortização das GPUs (2 × US$ 2.860 ÷ 1.095 dias)',
          'Um stack Docker Compose com Ollama + Open WebUI expõe uma API compatível com OpenAI; para acesso remoto, adicione o Nginx com TLS e autenticação',
          'Servidores Qwen sempre ativos: Minisforum UM890 Pro (Qwen3 8B em CPU; a US$ 439,90, esgotado em 2026-11-27) ou AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 GB (preço da GPU não rastreado aqui)',
          'Alternativa na nuvem: uma RunPod A40 48 GB (US$ 0,35–0,59/h, 2026-11-27) fica tão apertada para a versão de 47 GB quanto duas 4090; a A100 80 GB (US$ 1,19–2,19/h) dá folga',
          'Este guia cobre a implantação em produção; para a configuração básica com Ollama consulte o guia para iniciantes do Qwen',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Implante modelos Qwen em produção usando um stack Docker Compose que roda o Ollama como backend de inferência e expõe um endpoint de API compatível com OpenAI.',
          },
          {
            type: 'plain-terms',
            text: 'Em vez de executar o Qwen manualmente a cada vez, o Docker permite que você configure um servidor permanente que fica ativo e aceita requisições — igual a usar a API do ChatGPT, mas no seu próprio hardware e sem custo por token.',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'VRAM dos modelos Qwen por hardware',
        content:
          '**Escolha o hardware pelo tamanho do modelo, não pela marca da GPU.** A VRAM é a restrição principal: se o modelo não couber, parte dele roda na CPU e a velocidade cai. A tabela abaixo mostra a VRAM necessária com quantização Q4_K_M (um padrão comum no Ollama); as velocidades por modelo não são rastreadas aqui. Como referência, o [placar CUDA do llama.cpp](https://github.com/ggml-org/llama.cpp/discussions/15013) lista velocidades de geração do Llama 2 7B Q4_0 relatadas por desenvolvedores: 158,2 tok/s (RTX 3090), 186,2 tok/s (RTX 4090) e 290,0 tok/s (RTX 5090). As RTX 4090 usadas foram vendidas entre US$ 2.575 e US$ 3.010 (mediana US$ 2.860) contra um preço sugerido de US$ 1.599, segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (mercado dos EUA: vendas concluídas no eBay US, outubro de 2026, 216 vendas; verificado em 2026-11-27; os preços no Brasil podem variar bastante devido a impostos de importação).',
        columns: ['Modelo', 'VRAM (Q4_K_M)', 'GPU mínima', 'Velocidade (tok/s)', 'Fallback de CPU', 'Pronto para produção?'],
        rows: [
          {
            '0': 'Qwen3 8B',
            '1': '5,2 GB',
            '2': 'RTX 3060 12 GB',
            '3': 'Não rastreado',
            '4': 'Sim (32 GB RAM)',
            '5': 'Sim — GPU única',
          },
          {
            '0': 'Qwen3 14B',
            '1': '9,3 GB',
            '2': 'RTX 4060 Ti 16 GB',
            '3': 'Não rastreado',
            '4': 'Sim (64 GB RAM)',
            '5': 'Sim — GPU única',
          },
          {
            '0': 'Qwen3 32B (geração anterior)',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'Não rastreado',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Sim — GPU única',
          },
          {
            '0': 'Qwen 3.6 27B',
            '1': '~17 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'Não rastreado',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Sim — GPU única',
          },
          {
            '0': 'Qwen2.5-Coder 32B',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': 'Não rastreado',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Sim — GPU única',
          },
          {
            '0': 'Qwen2.5-72B',
            '1': '47 GB',
            '2': '2× RTX 4090 (48 GB, apertado)',
            '3': 'Não rastreado',
            '4': 'Lento (128 GB RAM)',
            '5': 'Apenas multi-GPU ou nuvem',
          },
        ],
        note: 'Os GB da coluna VRAM são tamanhos de download da biblioteca do Ollama (verificado em 2026-11-27; no Qwen 3.6, a tag q4_K_M); o uso de memória em execução é maior. As velocidades de GPU e CPU não são rastreadas aqui. A RTX 4090 não tem conector NVLink, então duas RTX 4090 se comunicam apenas por PCIe; o NVLink existe em algumas placas, como a RTX 3090.',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'Requisitos de VRAM dos modelos Qwen com quantização Q4_K_M: Qwen3 8B precisa de 5,2 GB (RTX 3060 12 GB), Qwen3 32B precisa de 20 GB (RTX 4090 24 GB) e Qwen2.5-72B ocupa 47 GB (apertado em duas RTX 4090). São tamanhos de download.',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Configuração do servidor API com Docker — Ollama + Open WebUI + Nginx',
        content:
          '**Um servidor Qwen compacto usa dois contêineres, Ollama (inferência) e Open WebUI (UI), ambos no arquivo compose abaixo; para acesso remoto, adicione separadamente um reverse proxy Nginx com TLS e autenticação.** O passthrough de GPU exige o NVIDIA Container Toolkit no host. No próprio servidor, a API compatível com OpenAI fica em `http://localhost:11434/v1`.',
        numberedItems: [
          {
            title: 'Instale o Docker e o Docker Compose',
            whyItMatters: 'Os contêineres mantêm o Qwen isolado do seu sistema operacional — sem conflitos de ambientes Python, atualizações simples.',
          },
          {
            title: 'Crie o docker-compose.yml com os serviços Ollama + Open WebUI',
            whyItMatters: 'O arquivo compose gerencia o passthrough de GPU, o mapeamento de portas e as políticas de reinício em um único lugar.',
          },
          {
            title: 'Defina OLLAMA_HOST=0.0.0.0 no ambiente do contêiner do Ollama',
            whyItMatters: 'O Ollama precisa escutar na interface de rede do contêiner para que outros contêineres o alcancem. A imagem oficial já faz isso; a linha deixa isso explícito.',
          },
          {
            title: 'Baixe o seu modelo Qwen: docker exec ollama ollama pull qwen3:8b',
            whyItMatters: 'Os modelos são armazenados em um volume Docker para que persistam entre reinícios do contêiner.',
          },
          {
            title: 'Adicione o Nginx como API gateway com autenticação básica para implantações públicas',
            whyItMatters: 'Expor o Ollama diretamente à internet sem autenticação permite que qualquer pessoa execute inferência na sua GPU.',
          },
          {
            title: 'Defina a política de reinício do contêiner como unless-stopped',
            whyItMatters: 'Isso garante que o seu servidor Qwen sobreviva aos reinícios do sistema — fundamental para implantações em mini PC sempre ativos.',
          },
        ],
        codeBlock: `version: "3.8"
services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: unless-stopped
    ports:
      - "127.0.0.1:11434:11434"
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=-1
    volumes:
      - ollama_data:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    volumes:
      - open_webui_data:/app/backend/data
    depends_on:
      - ollama

volumes:
  ollama_data:
  open_webui_data:`,
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'O arquivo compose limita as duas portas publicadas ao localhost. Se você remover `127.0.0.1:`, elas ficam publicadas em todas as interfaces de rede. O Ollama não tem autenticação integrada e [portas publicadas pelo Docker contornam as regras do ufw](https://docs.docker.com/engine/network/packet-filtering-firewalls/). Para acesso remoto, exponha apenas um gateway Nginx com TLS e autenticação. Use por sua conta e risco.',
          },
        ],
      },
      multiGpu: {
        id: 'multi-gpu',
        title: 'Configuração multi-GPU para o Qwen2.5-72B',
        content:
          '**O Qwen2.5-72B Q4_K_M é um download de 47 GB no Ollama, então uma RTX 4090 (24 GB) não basta. Duas RTX 4090 (48 GB combinados) deixam pouco espaço para contexto; uma única placa de 80 GB (A100, H100) dá folga.** Segundo o [FAQ do Ollama](https://docs.ollama.com/faq), um modelo que não cabe em uma GPU é distribuído por todas as disponíveis.',
        items: [
          'Se um modelo não couber em uma GPU, o Ollama o distribui entre as GPUs disponíveis — defina CUDA_VISIBLE_DEVICES=0,1 no ambiente do compose para mirar placas específicas',
          'Consulte o manual da placa-mãe para ver como duas GPUs dividem as linhas PCIe; muitas placas de consumo dão menos linhas ao segundo slot longo',
          'A RTX 4090 não tem conector NVLink, então duas RTX 4090 se comunicam apenas por PCIe; as pontes NVLink existem para algumas placas anteriores, como a RTX 3090',
          'O vLLM é um motor de inferência alternativo com paralelismo tensorial; considere-o para muitas requisições simultâneas. O comando abaixo usa a [versão AWQ](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct-AWQ), sob a licença Qwen (não Apache-2.0). O comando publica a porta 8000 apenas no localhost; não a exponha sem autenticação. Este guia não testou se ela cabe em duas placas de 24 GB; reduza `--max-model-len` se faltar memória',
          'Para uso ocasional do Qwen2.5-72B, alugar custa menos de entrada: a RunPod lista uma A100 80 GB a US$ 1,19–2,19/h (2026-11-27), enquanto só duas RTX 4090 usadas custam cerca de US$ 5.720 pela mediana (InsiderLLM, vendas nos EUA, outubro de 2026)',
        ],
        codeBlock: `# vLLM multi-GPU alternative (better for high-traffic 72B)
docker run --gpus all \\
  -p 127.0.0.1:8000:8000 \\
  -e VLLM_WORKER_MULTIPROC_METHOD=spawn \\
  vllm/vllm-openai:latest \\
  --model Qwen/Qwen2.5-72B-Instruct-AWQ \\
  --tensor-parallel-size 2 \\
  --max-model-len 32768 \\
  --quantization awq`,
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '[A NVIDIA informa 450 W de potência gráfica](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/) para uma RTX 4090. Duas exigem uma fonte dimensionada para ambas e o restante do computador, cabos de energia de 16 pinos corretos e totalmente encaixados, espaço e ventilação suficientes e um circuito elétrico que suporte a carga. Cabeamento defeituoso pode danificar o hardware ou causar incêndio. Em caso de dúvida, consulte um técnico qualificado. Por sua conta e risco.',
          },
        ],
      },
      apiConfig: {
        id: 'api-config',
        title: 'Configuração da API em produção',
        content:
          '**O Ollama oferece uma API compatível com OpenAI em /v1 — muitas aplicações feitas para a API da OpenAI funcionam com o seu Qwen local ao mudar a URL base e o nome do modelo; nem todos os recursos são cobertos.** Variáveis de ambiente importantes que afetam o comportamento em produção:',
        items: [
          'OLLAMA_KEEP_ALIVE=-1 — evita que o modelo seja descarregado após inatividade (o padrão é 5 minutos, geralmente indesejado em um servidor)',
          'OLLAMA_NUM_PARALLEL=4 — permite até 4 requisições paralelas por modelo; mais slots paralelos exigem mais memória',
          'OLLAMA_MAX_LOADED_MODELS=1 — mantenha apenas um modelo na VRAM por vez em builds de GPU pequenas para evitar thrashing',
          'OLLAMA_FLASH_ATTENTION=1 — habilita o flash attention, que pode melhorar a velocidade em GPUs NVIDIA Ampere/Ada (RTX 3060 e mais novas); o ganho varia conforme o modelo e o contexto',
          'OLLAMA_GPU_OVERHEAD=536870912 — reserva VRAM em cada GPU; o valor é em bytes (isto são 512 MiB), conforme o [código do Ollama](https://github.com/ollama/ollama/blob/main/envconfig/config.go). Pode ajudar contra erros de falta de memória',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'OLLAMA_KEEP_ALIVE=0 descarrega o modelo logo após cada requisição. Se a variável não for definida, o modelo fica carregado por 5 minutos por padrão. Depois de descarregado, a próxima requisição espera o modelo carregar de novo. Defina OLLAMA_KEEP_ALIVE=-1 para mantê-lo carregado em um servidor de API.',
          },
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Comparação de custos: self-hosted vs Alibaba Cloud vs RunPod',
        content:
          '**O self-hosting costuma compensar só com carga sustentada; para uso ocasional, alugar uma GPU na nuvem geralmente custa menos do que comprar.** A tabela amortiza apenas o preço da GPU em 3 anos (ilustrativo; eletricidade e demais peças não são rastreadas). Com a mediana de venda da RTX 4090 usada (US$ 2.860) são US$ 2,61 por dia (US$ 2.860 ÷ 1.095 dias), equivalentes a entre 4,4 e 7,5 horas por dia de aluguel de uma RunPod A40 a US$ 0,59 ou US$ 0,35/h ([preços da RunPod](https://www.runpod.io/pricing), nuvem segura e comunitária, verificado em 2026-11-27).',
        columns: ['Opção', 'Custo Qwen3 8B/dia', 'Custo Qwen2.5-72B/dia', 'Custo inicial', 'Melhor para'],
        rows: [
          {
            '0': 'Self-hosted: mini PC RTX 3060 12 GB',
            '1': 'Não rastreado',
            '2': 'N/A (não cabe)',
            '3': 'Não rastreado (preço da GPU usada não rastreado)',
            '4': 'Inferência 8B sempre ativa, servidor doméstico/escritório',
          },
          {
            '0': 'Self-hosted: workstation RTX 4090',
            '1': 'US$ 2,61 (só amortização da GPU, 3 anos)',
            '2': 'N/A (GPU única)',
            '3': 'Só a GPU: US$ 2.575–3.010 usada vendida (mediana US$ 2.860); demais peças não rastreadas',
            '4': 'Inferência até 32B, uso completo de workstation',
          },
          {
            '0': 'Self-hosted: duas RTX 4090',
            '1': 'US$ 5,22 (só amortização das GPUs: 2 × US$ 2.860 ÷ 1.095 dias)',
            '2': 'US$ 5,22 (mesma amortização das GPUs)',
            '3': 'Só as GPUs: 2 × US$ 2.860 = US$ 5.720 pela mediana; demais peças não rastreadas',
            '4': '72B sempre ativo com outro uso de workstation',
          },
          {
            '0': 'RunPod A40 48 GB (US$ 0,35–0,59/h)',
            '1': 'US$ 0,35–0,59 (1 h)',
            '2': 'US$ 0,35–0,59 (1 h)',
            '3': 'US$ 0 inicial, pagamento por hora',
            '4': 'Uso pontual, testes; apertado para 72B Q4_K_M',
          },
          {
            '0': 'Alibaba Cloud PAI (GPU A10)',
            '1': 'Não rastreado',
            '2': 'Não rastreado',
            '3': 'Veja a página de preços',
            '4': 'Usuários do ecossistema Alibaba Cloud',
          },
          {
            '0': 'Vast.ai RTX 4090 spot',
            '1': 'Não rastreado',
            '2': 'N/A',
            '3': 'US$ 0 inicial',
            '4': 'Uso pontual econômico, risco de quedas aceitável',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io',
            productName: 'RunPod GPU Cloud',
            productCategory: 'cloud-gpu',
            priceRange: 'A40 a partir de US$ 0,35/h (2026-11-27)',
            label: 'Comece na RunPod →',
          },
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai Spot GPUs',
            productCategory: 'cloud-gpu',
            priceRange: 'Veja a página do provedor',
            label: 'Ver preços de GPU spot na Vast.ai →',
          },
        ],
      },
      alwaysOnServer: {
        id: 'always-on-server',
        title: 'Recomendações de hardware para servidor Qwen sempre ativo',
        content:
          '**Um mini PC sempre ligado gasta pouca eletricidade: com consumo médio presumido de 12–45 W e US$ 0,16/kWh, funcionar 24/7 (730 horas) custa cerca de US$ 1,40–5,30 por mês.** Este guia não mediu o consumo. Duas opções de mini PC cobrem as montagens comuns:',
        items: [
          'Econômico (inferência em CPU com Qwen3 8B): Minisforum UM890 Pro — AMD Ryzen 9 8945HS; a página do fabricante oferece versões barebone, 32 GB de RAM + SSD de 1 TB e 64 GB + 1 TB. Mostrava o preço de US$ 439,90 e as versões como esgotadas (verificado em 2026-11-27). A velocidade em CPU com o Qwen3 8B não é rastreada aqui.',
          'Opção eGPU (Qwen3 14B): o AOOSTAR GEM12+ Pro (Ryzen 7 PRO 8845HS) tem uma porta OCuLink; o fabricante o listava por US$ 359 em barebone (sem RAM nem SSD) e esgotado (verificado em 2026-11-27). O fabricante orienta desligar o PC antes de conectar ou desconectar o OCuLink. Combine com uma RTX 4060 Ti 16 GB em um dock eGPU (preços da GPU e do dock não são rastreados aqui, então não há total). O Qwen3 14B cabe na VRAM da placa de 16 GB.',
          'Usuário avançado (Qwen3 32B): desktop compacto ATX com RTX 4090 usada (vendida a US$ 2.575–3.010, mediana US$ 2.860, segundo o [rastreador da InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), vendas no eBay US, outubro de 2026). Os preços de gabinete, CPU e RAM não são rastreados aqui, então nenhum total é informado. O Qwen3 32B com Q4_K_M (20 GB) cabe na placa de 24 GB, com folga limitada para contextos longos.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.minisforum.com/products/minisforum-um890-pro',
            productName: 'Minisforum UM890 Pro',
            productCategory: 'mini-pc',
            priceRange: 'US$ 439,90 (esgotado, 2026-11-27)',
            label: 'Ver Minisforum UM890 Pro (servidor CPU Qwen3 8B) →',
          },
          {
            url: 'https://aoostar.com/products/aoostar-gem12-pro',
            productName: 'AOOSTAR GEM12 Pro OCuLink',
            productCategory: 'mini-pc',
            priceRange: 'US$ 359 barebone (esgotado, 2026-11-27)',
            label: 'Ver AOOSTAR GEM12+ Pro (OCuLink) →',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto: qual implantação usar conforme o tamanho do modelo',
        content:
          '**Escolha o seu caminho de implantação do Qwen pelo tamanho do modelo e pelas horas de uso diário — não pelo quão impressionante o hardware parece.**',
        decisionBlock: {
          title: 'Decisão de implantação do Qwen',
          localIf: [
            'Qwen3 8B ou 14B e você o usa 4+ horas por dia → comprar um mini PC ou GPU pode compensar; compare com os preços atuais da nuvem',
            'Você quer evitar idas e voltas pela rede em fluxos interativos de código ou documentos',
            'Você processa dados privados que não devem sair da sua rede',
            'Você já tem uma GPU de desktop com 12+ GB de VRAM parada',
          ],
          cloudIf: [
            'Qwen2.5-72B para uso ocasional (< 4 horas/dia) — alugar (RunPod A100 80 GB, US$ 1,19–2,19/h) evita uma grande compra de hardware',
            'Você precisa testar o Qwen2.5-72B antes de se comprometer com uma compra de hardware',
            'Seu uso é irregular: no aluguel por hora, você para de pagar pela GPU ao parar a instância (o armazenamento ainda pode ser cobrado)',
            'Você está fora dos EUA/UE e os custos de frete ou impostos de importação encarecem o hardware',
          ],
          quick: [
            'Qwen3 8B diariamente: Minisforum UM890 Pro',
            'Qwen3 14B diariamente: AOOSTAR + RTX 4060 Ti (preço da GPU não rastreado aqui)',
            'Qwen3 32B diariamente: ATX compacto + RTX 4090 (usada vendida US$ 2.575–3.010; total do build não rastreado)',
            'Qwen2.5-72B ocasional: RunPod A100 80 GB (US$ 1,19–2,19/h)',
          ],
        },
        imageCaption:
          'Árvore de decisão auto-hospedado vs nuvem para o Qwen: auto-hospede se o uso for sustentado (um Minisforum UM890 Pro para o Qwen3 8B; uma RTX 4090 usada para o Qwen3 32B, só a GPU a US$ 2.575–3.010 vendida segundo o InsiderLLM, vendas nos EUA, outubro de 2026); use a nuvem, como uma RunPod A100 80 GB (US$ 1,19–2,19/h, 2026-11-27), para o Qwen2.5-72B ocasional.',
      },
      internalLinks: {
        id: 'see-also',
        title: 'Guias relacionados',
        items: [
          'Configuração básica do Qwen com Ollama (iniciantes): /pt/local-llms/run-qwen-locally-guide-2026',
          'Guia de compra de GPU para LLMs locais: /pt/power-local-llm/best-gpu-buying-guide-local-llm-2026',
          'Armazenamento NAS para arquivos de modelos: /pt/power-local-llm/best-nas-storage-local-ai-models-2026',
          'Comparação de GPU na nuvem (provedores ocidentais): /pt/power-local-llm/best-cloud-gpu-providers',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Existe um modelo Qwen 3.8?',
            a: 'Sim. O [repositório do Qwen3.8](https://github.com/QwenLM/Qwen3.8) da Alibaba lista o Qwen3.8-27B (2026-08-14) e o bem maior Qwen3.8-2.4T-A95B (2026-08-12). O Qwen3.8-27B é um modelo denso; o [card do modelo](https://huggingface.co/Qwen/Qwen3.8-27B) informa Apache-2.0, e a [biblioteca do Ollama](https://ollama.com/library/qwen3.8) lista `qwen3.8:27b` com download de 18 GB (verificado em 2026-11-27). A tabela de hardware deste guia não cobre o Qwen3.8. Se você quis dizer Qwen3 8B, baixe `qwen3:8b`.',
          },
          {
            q: 'Existe um modelo Qwen3 7B?',
            a: 'Não. A linha densa do Qwen3 é 0,6B, 1,7B, 4B, 8B, 14B e 32B — não há 7B. Se você buscou "Qwen3 7B", o modelo mais próximo é o Qwen3-8B (`ollama pull qwen3:8b`), que ocupa ~5–6 GB de VRAM em Q4_K_M e cabe em uma RTX 3060 12 GB com folga. Para um modelo da classe 72B, use o Qwen2.5-72B.',
          },
          {
            q: 'Posso rodar o Qwen2.5-72B em uma única RTX 4090?',
            a: 'Não totalmente. A versão Q4_K_M do Qwen2.5-72B no Ollama é um download de 47 GB e uma RTX 4090 tem 24 GB, então parte do modelo rodaria na CPU, mais devagar. Duas RTX 4090 (48 GB) continuam apertadas; uma placa de 80 GB ou uma GPU na nuvem dá folga. Uma única RTX 4090 comporta o Qwen3 32B em Q4_K_M (download de 20 GB), com folga limitada para contextos longos.',
          },
          {
            q: 'Qual é a diferença entre Ollama e vLLM para a implantação do Qwen em produção?',
            a: 'O Ollama é mais fácil de configurar e distribui modelos entre várias GPUs automaticamente — serve bem a servidores pessoais e times pequenos. O vLLM usa paralelismo tensorial e batching contínuo, o que normalmente o torna mais eficiente sob carga simultânea — considere-o para APIs de produção com muitos usuários ao mesmo tempo.',
          },
          {
            q: 'O Ollama suporta inferência multi-GPU para o Qwen de forma nativa?',
            a: 'Sim. Segundo o [FAQ do Ollama](https://docs.ollama.com/faq), um modelo que não cabe em uma GPU é distribuído por todas as disponíveis. Com CUDA_VISIBLE_DEVICES=0,1 você limita quais GPUs NVIDIA são usadas. Duas RTX 4090 se comunicam por PCIe; este guia não tem um valor de tok/s com fonte para o Qwen2.5-72B nelas, então nenhum é informado.',
          },
          {
            q: 'A Alibaba Cloud é mais barata do que a RunPod para a inferência do Qwen?',
            a: 'Este guia não tem um preço verificado da Alibaba Cloud PAI, por isso não faz comparação de preços; consulte as páginas atuais dos provedores. Na verificação de 2026-11-27, a [RunPod](https://www.runpod.io/pricing) listava uma A40 48 GB a US$ 0,35/h (nuvem comunitária) e US$ 0,59/h (nuvem segura).',
          },
          {
            q: 'Quanta eletricidade consome um servidor Qwen sempre ativo?',
            a: 'Este guia não mediu o consumo. Como exemplo com consumos médios presumidos: 12–45 W a US$ 0,16/kWh, 24/7 (730 horas), dão cerca de US$ 1,40–5,30 por mês. 190 W constantes (por exemplo, uma RTX 4060 Ti 16 GB com seus 165 W de especificação mais 25 W presumidos para o mini PC) dão cerca de US$ 22 por mês.',
          },
          {
            q: 'Posso usar a API do Qwen self-hosted com aplicações compatíveis com ChatGPT?',
            a: 'Sim, em muitos casos. O Ollama oferece uma API compatível com OpenAI em http://localhost:11434/v1 no próprio servidor (de outras máquinas, use o endereço do seu gateway autenticado). Em ferramentas que permitem definir a URL base, como LangChain ou Continue.dev, informe esse endereço, qualquer chave de API não vazia e o nome do seu modelo Qwen. Nem todos os recursos da API da OpenAI são suportados.',
          },
        ],
      },
      updateLog: {
        id: 'update-log',
        title: 'Registro de atualizações',
        items: [
          '2026-05-26: Publicação inicial. Preços e velocidades indicativos, não medições do PromptQuorum; confira os anúncios atuais.',
          '2026-10-19: O Qwen3 agora é apresentado como a geração anterior do Qwen (ainda muito usada) e o Qwen 3.6 (27B denso, 35B-A3B mistura de especialistas) como a geração mais recente.',
          '2026-11-22: Os preços de GPU, o custo por dia e os totais dos builds citam fontes de anúncios com data (rastreador da InsiderLLM, 2026-10-15); as velocidades por modelo constam como não rastreadas.',
          '2026-11-27: Correções: o Qwen3.8 existe; a versão padrão do Qwen2.5-72B ocupa 47 GB; dados da RunPod, do mini PC e de eletricidade revistos ou marcados como premissas; removidas velocidades de CPU e preços da Alibaba Cloud sem fonte; portas do compose limitadas ao localhost; corrigidas configurações do Ollama e o nome do modelo no vLLM.',
          'Próxima revisão programada: 2027-05-22',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'pt-BR',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Posso rodar o Qwen2.5-72B em uma única RTX 4090?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não totalmente. A versão Q4_K_M do Qwen2.5-72B no Ollama é um download de 47 GB e uma RTX 4090 tem 24 GB, então parte do modelo rodaria na CPU, mais devagar. Duas RTX 4090 (48 GB) continuam apertadas; uma placa de 80 GB ou uma GPU na nuvem dá folga. Uma única RTX 4090 comporta o Qwen3 32B em Q4_K_M (download de 20 GB), com folga limitada para contextos longos.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qual é a diferença entre Ollama e vLLM para a implantação do Qwen em produção?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O Ollama é mais fácil de configurar e distribui modelos entre várias GPUs automaticamente — serve bem a servidores pessoais e times pequenos. O vLLM usa paralelismo tensorial e batching contínuo, o que normalmente o torna mais eficiente sob carga simultânea — considere-o para APIs de produção com muitos usuários ao mesmo tempo.',
          },
        },
        {
          '@type': 'Question',
          name: 'O Ollama suporta inferência multi-GPU para o Qwen de forma nativa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. Segundo o [FAQ do Ollama](https://docs.ollama.com/faq), um modelo que não cabe em uma GPU é distribuído por todas as disponíveis. Com CUDA_VISIBLE_DEVICES=0,1 você limita quais GPUs NVIDIA são usadas. Duas RTX 4090 se comunicam por PCIe; este guia não tem um valor de tok/s com fonte para o Qwen2.5-72B nelas, então nenhum é informado.',
          },
        },
        {
          '@type': 'Question',
          name: 'A Alibaba Cloud é mais barata do que a RunPod para a inferência do Qwen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Este guia não tem um preço verificado da Alibaba Cloud PAI, por isso não faz comparação de preços; consulte as páginas atuais dos provedores. Na verificação de 2026-11-27, a [RunPod](https://www.runpod.io/pricing) listava uma A40 48 GB a US$ 0,35/h (nuvem comunitária) e US$ 0,59/h (nuvem segura).',
          },
        },
        {
          '@type': 'Question',
          name: 'Quanta eletricidade consome um servidor Qwen sempre ativo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Este guia não mediu o consumo. Como exemplo com consumos médios presumidos: 12–45 W a US$ 0,16/kWh, 24/7 (730 horas), dão cerca de US$ 1,40–5,30 por mês. 190 W constantes (por exemplo, uma RTX 4060 Ti 16 GB com seus 165 W de especificação mais 25 W presumidos para o mini PC) dão cerca de US$ 22 por mês.',
          },
        },
        {
          '@type': 'Question',
          name: 'Posso usar a API do Qwen self-hosted com aplicações compatíveis com ChatGPT?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim, em muitos casos. O Ollama oferece uma API compatível com OpenAI em http://localhost:11434/v1 no próprio servidor (de outras máquinas, use o endereço do seu gateway autenticado). Em ferramentas que permitem definir a URL base, como LangChain ou Continue.dev, informe esse endereço, qualquer chave de API não vazia e o nome do seu modelo Qwen. Nem todos os recursos da API da OpenAI são suportados.',
          },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Implantação Local do Qwen: Guia Completo de Produção 2026',
      description:
        'Implante Qwen3 8B a 72B em produção: servidor API Docker Compose, configuração multi-GPU, requisitos de hardware e notas de custo.',
      url: 'https://www.promptquorum.com/pt/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Modelos de linguagem Qwen' },
        { '@type': 'Thing', name: 'Implantação de LLM local' },
        { '@type': 'Thing', name: 'Inferência de GPU com Docker' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'vLLM' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'Thing', name: 'Qwen2.5-72B' },
        { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'pt-BR',
      name: 'Como implantar o Qwen como servidor API de produção com Docker',
      step: [
        { '@type': 'HowToStep', name: 'Instale o Docker e o Docker Compose', position: 1 },
        { '@type': 'HowToStep', name: 'Crie o docker-compose.yml com Ollama + Open WebUI', position: 2 },
        { '@type': 'HowToStep', name: 'Defina OLLAMA_HOST=0.0.0.0 no ambiente do contêiner', position: 3 },
        { '@type': 'HowToStep', name: 'Baixe o seu modelo Qwen por docker exec', position: 4 },
        { '@type': 'HowToStep', name: 'Adicione o Nginx como API gateway com autenticação básica', position: 5 },
        { '@type': 'HowToStep', name: 'Defina a política de reinício como unless-stopped', position: 6 },
      ],
    },
    relatedReading: {
      items: [
        '[Guia de implantação local do Qwen — Configuração para iniciantes com Ollama e LM Studio](/pt/local-llms/qwen-local-deployment-guide-2026) — guia por nível de hardware para Qwen3 8B a 72B em hardware de consumo',
        '[Guia de compra de GPU para LLMs locais 2026](/pt/power-local-llm/best-gpu-buying-guide-local-llm-2026) — recomendações de GPU para Qwen2.5-72B e configurações multi-GPU em produção',
        '[Executar o Qwen localmente — Guia de início rápido](/pt/local-llms/run-qwen-locally-guide-2026) — instalação para iniciantes',
      ],
    },
  },

  ar: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'نشر ⁨Qwen3⁩ محليًا: الدليل الكامل للإنتاج ⁨2026⁩',
    seoTitle: 'نشر ⁨Qwen3⁩ محليًا ⁨2026⁩: ⁨8B⁩ و⁨14B⁩ و⁨32B⁩ + واجهة ⁨Docker⁩ API',
    metaDescription:
      'انشر Qwen3 محليًا: نماذج 8B و14B و32B عبر Ollama/vLLM مع خادم Docker API، واختيار الأجهزة، وتعدد GPU. ملاحظة — لا يوجد Qwen3 بحجم 7B؛ استخدم 8B (qwen3:8b). دليل 2026.',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-ar.webp',
    twitterDescription:
      'Qwen3 8B يتسع في RTX 3060 بسعة 12 جيجابايت. Qwen2.5-72B ضيق المتسع حتى على 48 جيجابايت. دليل Docker وخادم API وتعدد GPU لعام 2026.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'المطورون ومستخدمو self-hosting الذين ينشرون نماذج Qwen في الإنتاج — خوادم API دائمة التشغيل، وإعدادات تعدد GPU، وخوادم mini PC.',
    readTime: '16 دقيقة قراءة',
    primaryTerm: 'نشر Qwen في الإنتاج',
    targetKeywords: [
      'نشر qwen في الإنتاج',
      'qwen docker ollama خادم api',
      'qwen إعداد تعدد gpu',
      'دليل نشر qwen محلي',
      'api qwen self-hosted',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen 3.6 27B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 32B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Minisforum UM890 Pro',
      'AOOSTAR GEM12 Pro OCuLink',
    ],
    leadAnswerBlock:
      '**أحجام Qwen3 الكثيفة (الجيل السابق، ولا يزال منتشرًا على نطاق واسع) هي 0.6B و1.7B و4B و8B و14B و32B — لا يوجد نموذج 7B. الأقرب هو Qwen3-8B (نفّذ `qwen3:8b` عبر pull)؛ إذا بحثت عن "Qwen3 7B" فأنت تريد نموذج 8B. أكبر نموذج كثيف في Qwen3 هو 32B؛ ولنموذج من فئة 72B استخدم Qwen2.5-72B. يتسع Qwen3 8B و14B في وحدات GPU الاستهلاكية ويمكن تقديمهما عبر Ollama أو vLLM مع خادم API بـ Docker Compose. أما Qwen3 32B (تنزيل 20 جيجابايت) فيحتاج بطاقة بسعة 24 جيجابايت مثل RTX 4090. بيعت بطاقات RTX 4090 المستعملة بين $2,575 و$3,010 (الوسيط $2,860) مقابل السعر الرسمي المقترح $1,599، وفق [متتبع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكي: مبيعات مكتملة على eBay US، أكتوبر 2026، 216 عملية بيع؛ تم التحقق في 2026-11-27؛ الأسعار بالدولار الأمريكي وقد تختلف حسب السوق والرسوم الجمركية). Qwen 3.6 أحدث من Qwen3، ويصدر كنموذج كثيف بحجم 27B (`qwen3.6:27b`) وكنموذج مزيج خبراء 35B-A3B (`qwen3.6:35b`)؛ ويتسع نموذج 27B في فئة 24 جيجابايت من VRAM نفسها مثل Qwen3 32B ويستحق المقارنة؛ أما [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) (`qwen3.8:27b`) فأحدث منه ولا يشمله جدول الأجهزة. النسخة الافتراضية (Q4_K_M) من Qwen2.5-72B في Ollama تنزيلها 47 جيجابايت، وهي تترك هامشًا ضئيلًا للسياق على بطاقتين بسعة 24 جيجابايت؛ توقّع سياقًا قصيرًا أو تحميلًا جزئيًا على المعالج أو بطاقة أكبر أو استئجارًا سحابيًا — بطاقتا RTX 4090 تكلفان نحو $5.22 يوميًا كإهلاك للبطاقات وحدها (2 × $2,860 وسيط سعر المستعمل ÷ 1,095 يومًا على 3 سنوات، دون الكهرباء والقطع الأخرى)، مقارنةً بـ $0.35–0.59 للساعة لبطاقة A40 بسعة 48 جيجابايت على [RunPod](https://www.runpod.io/pricing) (تم التحقق في 2026-11-27).**',
    quickAnswerTop: {
      ar: {
        question: 'كيف أنشر نماذج Qwen في الإنتاج محليًا؟',
        answer:
          'شغّل Qwen عبر حزمة Docker Compose التي تعرض API متوافقة مع OpenAI: Ollama يدير الاستدلال على GPU، وOpen WebUI يوفر الواجهة الأمامية؛ وللوصول عن بُعد أضف Nginx كبروكسي عكسي مع TLS ومصادقة. Qwen3 8B يعمل بـحوالي 6 جيجابايت VRAM؛ أما Qwen2.5-72B (تنزيل 47 جيجابايت) فمتسعه ضيق حتى على بطاقتين بسعة 24 جيجابايت.',
        bullets: [
          'Qwen3 8B: RTX 3060 12 جيجابايت (يحتاج نحو 6 جيجابايت VRAM)؛ سعر المستعمل غير متتبَّع هنا',
          'Qwen3 14B: RTX 4060 Ti 16 جيجابايت؛ السعر غير متتبَّع هنا',
          'Qwen3 32B: RTX 4090 24 جيجابايت، مستعملة مباعة $2,575–3,010 (InsiderLLM، مبيعات أمريكية، أكتوبر 2026) (الجيل السابق؛ الأحدث: Qwen 3.6 27B، `qwen3.6:27b`، فئة 24 جيجابايت نفسها)',
          'Qwen2.5-72B: بطاقتا RTX 4090 بهامش ضيق؛ RunPod A100 80 جيجابايت $1.19–2.19/ساعة (2026-11-27)',
          'خيار mini PC: Minisforum UM890 Pro (معالج)، بسعر معروض $439.90 ونافد في 2026-11-27',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'جدول الأجهزة', anchor: '#benchmark-table' },
      { label: 'إعداد خادم API بـ Docker', anchor: '#docker-setup' },
      { label: 'إعداد تعدد GPU', anchor: '#multi-gpu' },
      { label: 'تهيئة API في الإنتاج', anchor: '#api-config' },
      { label: 'مقارنة التكاليف: self-hosted مقابل السحابة', anchor: '#cost-comparison' },
      { label: 'أجهزة الخادم الدائم التشغيل', anchor: '#always-on-server' },
      { label: 'الحكم: الأجهزة حسب حجم النموذج', anchor: '#verdict' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'النقاط الرئيسية',
        items: [
          'Qwen3 8B و14B مناسبان لوحدات GPU الاستهلاكية — عادةً بطاقة بسعة 12 جيجابايت وأخرى بسعة 16 جيجابايت على التوالي، عبر Ollama في Docker',
          'Qwen3 32B يتطلب بطاقة بسعة 24 جيجابايت مثل RTX 4090 (Qwen3 هو الجيل السابق، أما Qwen 3.6 27B الأحدث `qwen3.6:27b` فيناسب فئة 24 جيجابايت نفسها)',
          'Qwen2.5-72B (التنزيل الافتراضي 47 جيجابايت) هامشه ضيق على بطاقتي RTX 4090؛ والبدائل بناء على المعالج بذاكرة RAM كبيرة أو السحابة — بطاقتا RTX 4090 تكلفان نحو $5.22/يوم كإهلاك للبطاقات وحدها (2 × $2,860 ÷ 1,095 يومًا)',
          'حزمة Docker Compose مع Ollama + Open WebUI تعرض API متوافقة مع OpenAI؛ وللوصول عن بُعد أضف Nginx مع TLS ومصادقة',
          'خوادم Qwen الدائمة التشغيل: Minisforum UM890 Pro (Qwen3 8B على المعالج؛ بسعر $439.90 ونافد في 2026-11-27) أو AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 جيجابايت (سعر GPU غير متتبَّع هنا)',
          'البديل السحابي: بطاقة RunPod A40 48 جيجابايت ($0.35–0.59/ساعة، 2026-11-27) ضيقة على نسخة 47 جيجابايت مثل بطاقتي 4090؛ أما A100 80 جيجابايت ($1.19–2.19/ساعة) فتترك هامشًا',
          'هذا الدليل يغطي النشر في الإنتاج؛ للإعداد الأساسي مع Ollama راجع دليل Qwen للمبتدئين',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'انشر نماذج Qwen في الإنتاج باستخدام حزمة Docker Compose التي تشغّل Ollama كواجهة خلفية للاستدلال وتعرض نقطة نهاية API متوافقة مع OpenAI.',
          },
          {
            type: 'plain-terms',
            text: 'بدلًا من تشغيل Qwen يدويًا في كل مرة، يتيح لك Docker إعداد خادم دائم يبقى متاحًا ويقبل الطلبات — مثل استخدام API لـ ChatGPT لكن على جهازك الخاص بدون تكلفة لكل رمز.',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'متطلبات VRAM لنماذج Qwen حسب الجهاز',
        content:
          '**اختر الجهاز بحسب حجم النموذج لا بحسب ماركة GPU.** VRAM هو القيد الرئيسي: إذا لم يتسع النموذج، يعمل جزء منه على المعالج وتنخفض السرعة. يُظهر الجدول حجم VRAM المطلوب مع تكميم Q4_K_M (إعداد شائع في Ollama)؛ سرعات كل نموذج غير متتبَّعة هنا. وللمرجعية، يسرد [لوحة نتائج llama.cpp CUDA](https://github.com/ggml-org/llama.cpp/discussions/15013) سرعات توليد Llama 2 7B Q4_0 أبلغ عنها المطورون: 158.2 رمز/ثانية (RTX 3090) و186.2 رمز/ثانية (RTX 4090) و290.0 رمز/ثانية (RTX 5090). بيعت بطاقات RTX 4090 المستعملة بين $2,575 و$3,010 (الوسيط $2,860) مقابل السعر الرسمي المقترح $1,599، وفق [متتبع InsiderLLM](https://insiderllm.com/guides/nvidia-gpu-prices-rising/) (السوق الأمريكي: مبيعات مكتملة على eBay US، أكتوبر 2026، 216 عملية بيع؛ تم التحقق في 2026-11-27؛ الأسعار بالدولار الأمريكي وقد تختلف حسب السوق والرسوم الجمركية).',
        columns: ['النموذج', 'VRAM المطلوبة', 'الجهاز الموصى به', 'السرعة (Q4_K_M)', 'تكلفة GPU (USD)'],
        rows: [
          { 'النموذج': 'Qwen3 8B', 'VRAM المطلوبة': '5.2 جيجابايت', 'الجهاز الموصى به': 'RTX 3060 12 جيجابايت', 'السرعة (Q4_K_M)': 'غير متتبَّعة', 'تكلفة GPU (USD)': 'السعر غير متتبَّع هنا' },
          { 'النموذج': 'Qwen3 14B', 'VRAM المطلوبة': '9.3 جيجابايت', 'الجهاز الموصى به': 'RTX 4060 Ti 16 جيجابايت', 'السرعة (Q4_K_M)': 'غير متتبَّعة', 'تكلفة GPU (USD)': 'السعر غير متتبَّع هنا' },
          { 'النموذج': 'Qwen3 32B (الجيل السابق)', 'VRAM المطلوبة': '20 جيجابايت', 'الجهاز الموصى به': 'RTX 4090 24 جيجابايت', 'السرعة (Q4_K_M)': 'غير متتبَّعة', 'تكلفة GPU (USD)': '$2,575–3,010 مستعملة مباعة (InsiderLLM، مبيعات أمريكية، أكتوبر 2026)' },
          { 'النموذج': 'Qwen 3.6 27B', 'VRAM المطلوبة': '~17 جيجابايت', 'الجهاز الموصى به': 'RTX 4090 24 جيجابايت', 'السرعة (Q4_K_M)': 'غير متتبَّعة', 'تكلفة GPU (USD)': '$2,575–3,010 مستعملة مباعة (InsiderLLM، مبيعات أمريكية، أكتوبر 2026)' },
          { 'النموذج': 'Qwen2.5-72B', 'VRAM المطلوبة': '47 جيجابايت', 'الجهاز الموصى به': 'RTX 4090 × 2 (ضيق) أو سحابة', 'السرعة (Q4_K_M)': 'غير متتبَّعة', 'تكلفة GPU (USD)': '2 × $2,860 = $5,720 (الوسيط) أو سحابة' },
        ],
        note: 'قيم VRAM في الجدول هي أحجام تنزيل النماذج من مكتبة Ollama (تم التحقق في 2026-11-27؛ ولنموذج Qwen 3.6 وسم q4_K_M)، واستهلاك الذاكرة أثناء التشغيل أكبر. سرعات GPU والمعالج غير متتبَّعة هنا.',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'متطلبات VRAM لنماذج Qwen بتكميم Q4_K_M: يحتاج Qwen3 8B إلى 5.2 جيجابايت (RTX 3060 12 جيجابايت)، ويحتاج Qwen3 32B إلى 20 جيجابايت (RTX 4090 24 جيجابايت)، ويحتاج Qwen2.5-72B إلى 47 جيجابايت (RTX 4090 × 2).',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'إعداد خادم API بـ Docker',
        numberedItems: [
          'ثبّت Docker و Docker Compose على نظام Linux (Ubuntu 22.04 موصى به للإنتاج)',
          'أنشئ ملف `docker-compose.yml` مع حاويتي Ollama و Open WebUI',
          'اضبط `OLLAMA_HOST=0.0.0.0` في بيئة الحاوية لتصل إليها الحاويات الأخرى (الصورة الرسمية تفعل ذلك أصلًا)',
          'نزّل نموذج Qwen المطلوب عبر `docker exec`: `docker exec ollama ollama pull qwen3:8b`',
          'أضف Nginx كبوابة API مع مصادقة أساسية وحد للمعدل',
          'اضبط سياسة إعادة التشغيل كـ `unless-stopped` للاستمرارية بعد انقطاع الكهرباء',
        ],
        codeBlock: `services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: unless-stopped
    ports:
      - "127.0.0.1:11434:11434"
    environment:
      - OLLAMA_HOST=0.0.0.0
    volumes:
      - ollama_data:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    restart: unless-stopped
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    ports:
      - "127.0.0.1:3000:8080"
    depends_on:
      - ollama

volumes:
  ollama_data:`,
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'يربط ملف compose المنفذين المنشورين بـ localhost. إذا أزلت `127.0.0.1:` فسيُنشران على كل واجهات الشبكة. لا يتضمن Ollama مصادقة مدمجة، و[المنافذ التي ينشرها Docker تتجاوز قواعد ufw](https://docs.docker.com/engine/network/packet-filtering-firewalls/). للوصول عن بُعد اعرض فقط بوابة Nginx مع TLS ومصادقة. يتطلب تمرير GPU تثبيت NVIDIA Container Toolkit على المضيف. الاستخدام على مسؤوليتك.',
          },
        ],
      },
      multiGpu: {
        id: 'multi-gpu',
        title: 'إعداد تعدد GPU لـ Qwen2.5-72B',
        content: [
          'نسخة Q4_K_M من Qwen2.5-72B في Ollama تنزيلها 47 جيجابايت، فلا تكفي بطاقة بسعة 24 جيجابايت. ووفق [أسئلة Ollama الشائعة](https://docs.ollama.com/faq)، يوزَّع النموذج الذي لا يتسع في GPU واحدة على كل وحدات GPU المتاحة.',
          'تحقق من رؤية Ollama لجميع GPUs: `docker exec ollama nvidia-smi`. يجب ظهور جميع GPUs.',
          'لتحديد وحدات GPU المستخدمة، اضبط `CUDA_VISIBLE_DEVICES=0,1` في بيئة حاوية Ollama.',
          'على بطاقتين بسعة 24 جيجابايت يكون الهامش المتاح للسياق ضئيلًا، وقد يُحمَّل جزء من الطبقات على المعالج فتنخفض السرعة.',
        ],
        items: [
          'RTX 4090 × 2: مجموع 48 جيجابايت VRAM — هامش ضيق لنسخة Q4_K_M من Qwen2.5-72B (تنزيل 47 جيجابايت)',
          'RTX 4090 + RTX 3090: مجموع 48 جيجابايت أيضًا بالهامش الضيق نفسه؛ لم يختبر هذا الدليل هذا المزيج',
          'RTX 4090 واحدة: الحد الأقصى Qwen3 32B؛ Qwen2.5-72B سيلجأ جزئيًا للمعالج',
        ],
        codeBlock: `# تحقق من نقاط نهاية GPU في Docker
docker run --gpus all nvidia/cuda:12.0-base nvidia-smi

# نموذج يمتد عبر GPU — تلقائي في Ollama
docker exec -it ollama ollama run qwen2.5:72b`,
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '[تذكر NVIDIA](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/) أن قدرة الرسوميات لبطاقة RTX 4090 واحدة 450 واط. تحتاج البطاقتان إلى مزود طاقة بقدرة تكفيهما مع بقية الجهاز، وكابلات 16 سنًا صحيحة ومثبتة بالكامل، ومساحة وتهوية كافيتين، ودائرة كهربائية تتحمل الحمل. قد يؤدي توصيل الطاقة الخاطئ إلى تلف العتاد أو اندلاع حريق. إذا لم تكن متأكدًا فاستشر فنيًا مؤهلًا. على مسؤوليتك الخاصة.',
          },
        ],
      },
      apiConfig: {
        id: 'api-config',
        title: 'تهيئة API في الإنتاج',
        content: [
          'يقدّم Ollama واجهة API متوافقة مع OpenAI على `http://localhost:11434/v1` على الخادم نفسه (ومن الأجهزة الأخرى استخدم عنوان البوابة المحمية بالمصادقة). لا تُدعم كل ميزات واجهة OpenAI.',
          'في الأدوات التي تسمح بتحديد عنوان أساسي، مثل LangChain وContinue.dev، أدخل هذا العنوان وأي مفتاح API غير فارغ واسم نموذج Qwen لديك.',
          'للوصول عن بُعد: استخدم نفق Nginx مع TLS وSSL بدلًا من تعريض منفذ Ollama مباشرةً عبر الإنترنت.',
          'لإدارة المفاتيح: استخدم Nginx مع `auth_basic` للمصادقة البسيطة، أو أضف LiteLLM Proxy لإدارة مفاتيح API ومحاسبة الاستخدام.',
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'مقارنة التكاليف: self-hosted مقابل السحابة',
        content: [
          'تُهلَك أسعار الأجهزة على 3 سنوات (افتراض)، وتكلفة الكهرباء تقديرية بافتراض استهلاك 12–45 واط وسعر $0.16 لكل كيلوواط·ساعة. أسعار RunPod من [صفحة الأسعار](https://www.runpod.io/pricing) بتاريخ 2026-11-27.',
        ],
        columns: ['الخيار', 'تكلفة الجهاز', 'تكلفة الكهرباء', 'التكلفة اليومية المُهلَكة', 'أفضل لـ'],
        rows: [
          { 'الخيار': 'UM890 Pro (Qwen3 8B، معالج)', 'تكلفة الجهاز': '$439.90', 'تكلفة الكهرباء': '~$0.05–0.17/يوم', 'التكلفة اليومية المُهلَكة': '~$0.45–0.57', 'أفضل لـ': 'الاستخدام المنخفض، دائم التشغيل' },
          { 'الخيار': 'RTX 3060 (Qwen3 8B، GPU)', 'تكلفة الجهاز': 'غير متتبَّعة', 'تكلفة الكهرباء': 'غير متتبَّعة', 'التكلفة اليومية المُهلَكة': 'غير متتبَّعة', 'أفضل لـ': 'الاستخدام المتوسط، استجابة أسرع' },
          { 'الخيار': 'RTX 4090 (Qwen3 32B)', 'تكلفة الجهاز': '$2,575–3,010 (البطاقة وحدها)', 'تكلفة الكهرباء': 'غير متتبَّعة', 'التكلفة اليومية المُهلَكة': '~$2.61 (البطاقة وحدها: $2,860 ÷ 1,095 يومًا)', 'أفضل لـ': 'الاستخدام الكثيف، نماذج كبيرة' },
          { 'الخيار': 'RunPod A40 48 جيجابايت', 'تكلفة الجهاز': '$0 (مستأجر)', 'تكلفة الكهرباء': 'مدرجة', 'التكلفة اليومية المُهلَكة': '$0.35–0.59/ساعة', 'أفضل لـ': 'الاستخدام العرضي؛ ضيق لنموذج 72B' },
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.com/s?k=minisforum+um890+pro', productName: 'Minisforum UM890 Pro', productCategory: 'mini-pc', priceRange: 'غير متتبَّع', label: 'Minisforum UM890 Pro على Amazon' },
          { url: 'https://www.amazon.com/s?k=rtx+4060+ti+16gb', productName: 'RTX 4060 Ti 16GB', productCategory: 'gpu', priceRange: 'غير متتبَّع', label: 'RTX 4060 Ti 16 جيجابايت على Amazon' },
        ],
      },
      alwaysOnServer: {
        id: 'always-on-server',
        title: 'أجهزة الخادم الدائم التشغيل',
        content: [
          '**Minisforum UM890 Pro:** معالج AMD Ryzen 9 8945HS؛ تعرض صفحة الشركة نسخة بلا ذاكرة وتخزين، ونسخة 32 جيجابايت RAM مع SSD بسعة 1 تيرابايت، ونسخة 64 جيجابايت مع 1 تيرابايت. أظهرت الصفحة سعر $439.90 وأن النسخ نافدة (تم التحقق في 2026-11-27). سرعة Qwen3 8B على المعالج غير متتبَّعة هنا، ولم يقس هذا الدليل استهلاك الطاقة.',
          '**AOOSTAR GEM12+ Pro (Ryzen 7 PRO 8845HS) مع RTX 4060 Ti 16 جيجابايت:** للجهاز منفذ OCuLink، وقد عرضته الشركة بسعر $359 بلا ذاكرة وتخزين وبحالة نافد (تم التحقق في 2026-11-27). وتنصح الشركة بإطفاء الجهاز قبل توصيل OCuLink أو فصله. Qwen3 14B يتسع في بطاقة 16 جيجابايت. لا يُذكر إجمالي لأن سعري GPU وقاعدة eGPU غير متتبَّعين.',
        ],
        items: [
          'كلا الخيارين: فعّل `systemd` أو مجدول مهام Windows لبدء Ollama تلقائيًا عند التشغيل',
          'استخدم Nginx كبوابة بـ TLS إذا كنت تعرض API للشبكة المحلية أو الإنترنت',
          'مثال تقديري غير مقاس: بافتراض استهلاك 12–45 واط وسعر $0.16/كيلوواط·ساعة، تبلغ الكهرباء نحو $0.05–0.17 يوميًا عند التشغيل المتواصل',
        ],
        affiliateLinks: [
          { url: 'https://www.amazon.com/s?k=minisforum+um890+pro', productName: 'Minisforum UM890 Pro', productCategory: 'mini-pc', priceRange: 'غير متتبَّع', label: 'Minisforum UM890 Pro على Amazon' },
          { url: 'https://www.amazon.com/s?k=aoostar+gem12+pro+oculink', productName: 'AOOSTAR GEM12 Pro OCuLink', productCategory: 'mini-pc', priceRange: 'غير متتبَّع', label: 'AOOSTAR GEM12 Pro OCuLink على Amazon' },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الحكم: الأجهزة حسب حجم النموذج',
        content: [
          'اختر الجهاز بحسب نموذج Qwen الذي تحتاجه، وليس بالعكس.',
        ],
        decisionBlock: {
          title: 'أي جهاز لأي نموذج Qwen؟',
          localIf: [
            'Qwen3 8B → RTX 3060 12 جيجابايت أو UM890 Pro (معالج)',
            'Qwen3 14B → RTX 4060 Ti 16 جيجابايت',
            'Qwen3 32B → RTX 4090 24 جيجابايت',
            'Qwen2.5-72B مع استخدام كثيف → بطاقة 80 جيجابايت، أو RTX 4090 × 2 بهامش ضيق',
            'Qwen2.5-72B مع استخدام عرضي → RunPod A100 80 جيجابايت ($1.19–2.19/ساعة)',
          ],
          cloudIf: [
            'Qwen2.5-72B للتجريب السريع → RunPod لتجنب الاستثمار في الجهاز',
            'الميزانية < $500 ولكن تحتاج Qwen2.5-72B → السحابة هي الخيار الأرجح',
          ],
          quick: [
            'نقطة بداية بسيطة: Qwen3 8B على RTX 3060',
            'نسبة قيمة/أداء جيدة في تقديرنا: RTX 4060 Ti 16 جيجابايت + Qwen3 14B',
          ],
        },
        imageCaption:
          'شجرة قرار الاستضافة الذاتية مقابل السحابة لـQwen: استضف محليًا إذا كان الاستخدام متواصلًا (Minisforum UM890 Pro لـQwen3 8B، أو RTX 4090 مستعملة لـQwen3 32B بسعر البطاقة وحدها 2,575–3,010 دولارًا للمستعملة المباعة وفق InsiderLLM، مبيعات أمريكية، أكتوبر 2026)؛ استخدم السحابة مثل RunPod A100 80 جيجابايت بسعر 1.19–2.19 دولار/ساعة (2026-11-27) لاستخدام Qwen2.5-72B العرضي.',
      },
      internalLinks: {
        id: 'internal-links',
        title: 'موارد ذات صلة',
        items: [
          '[دليل نشر Qwen محليًا للمبتدئين](/ar/local-llms/qwen-local-deployment-guide-2026)',
          '[دليل شراء GPU لنماذج LLM المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026)',
          '[تشغيل Qwen محليًا — دليل البدء السريع](/ar/local-llms/run-qwen-locally-guide-2026)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
            { q: 'هل يوجد نموذج Qwen 3.8؟', a: 'نعم. يدرج [مستودع Qwen3.8](https://github.com/QwenLM/Qwen3.8) من Alibaba النموذج Qwen3.8-27B (2026-08-14) والنموذج الأكبر بكثير Qwen3.8-2.4T-A95B (2026-08-12). ‏Qwen3.8-27B نموذج كثيف، وتذكر [بطاقة النموذج](https://huggingface.co/Qwen/Qwen3.8-27B) ترخيص Apache-2.0، وتعرض [مكتبة Ollama](https://ollama.com/library/qwen3.8) الوسم `qwen3.8:27b` بحجم تنزيل 18 جيجابايت (تم التحقق في 2026-11-27). لا يشمل جدول الأجهزة في هذا الدليل Qwen3.8. وإذا كنت تقصد Qwen3 8B فنزّل `qwen3:8b`.' },
            { q: 'هل يوجد نموذج Qwen3 7B؟', a: 'لا. تشكيلة Qwen3 الكثيفة هي 0.6B و1.7B و4B و8B و14B و32B — لا يوجد 7B. إذا بحثت عن "Qwen3 7B"، فإن أقرب نموذج هو Qwen3-8B (`ollama pull qwen3:8b`)، الذي يتسع ضمن ~5–6 جيجابايت من VRAM بتكميم Q4_K_M ويتسع في RTX 3060 بـ 12 جيجابايت بهامش جيد. ولنموذج من فئة 72B، استخدم Qwen2.5-72B.' },
            { q: 'ما VRAM الأدنى لتشغيل Qwen3 8B على GPU؟', a: 'حوالي 6 جيجابايت من VRAM بتكميم Q4_K_M. وتوفر RTX 3060 بـ 12 جيجابايت هامشًا إضافيًا.' },
            { q: 'هل يمكن تشغيل Qwen2.5-72B على GPU واحدة؟', a: 'ليس بالكامل على GPU. نسخة Q4_K_M من Qwen2.5-72B في Ollama تنزيلها 47 جيجابايت وسعة RTX 4090 الواحدة 24 جيجابايت، فيعمل جزء من النموذج على المعالج وتنخفض السرعة. وتبقى بطاقتان (48 جيجابايت) بهامش ضيق؛ أما بطاقة 80 جيجابايت أو GPU سحابي فتترك هامشًا.' },
            { q: 'هل Qwen self-hosted متوافق مع أدوات OpenAI؟', a: 'في كثير من الأدوات، نعم. يقدّم Ollama واجهة API متوافقة مع OpenAI على http://localhost:11434/v1 على الخادم نفسه. اضبط `OPENAI_API_BASE` و`OPENAI_API_KEY` في الأدوات التي تدعم عنوانًا أساسيًا مخصصًا مثل LangChain وContinue.dev. لا تُدعم كل ميزات واجهة OpenAI.' },
            { q: 'كم تكلفة تشغيل خادم Qwen دائم التشغيل؟', a: 'لم يقس هذا الدليل استهلاك الطاقة. مثال تقديري بافتراض متوسط استهلاك 12–45 واط وسعر $0.16/كيلوواط·ساعة: التشغيل 24/7 (730 ساعة) يكلف نحو $1.40–5.30 شهريًا.' },
            { q: 'ما الفرق بين استخدام Ollama وvLLM لنشر Qwen؟', a: 'Ollama: أسهل في الإعداد، ويناسب الاستخدام الفردي وبيئات التطوير. vLLM: يكون عادةً أكثر كفاءة مع الطلبات المتزامنة، ويستحق النظر للإنتاج مع عدة مستخدمين.' },
            { q: 'هل يمكنني استخدام Qwen self-hosted مع التطبيقات المتوافقة مع ChatGPT؟', a: 'في كثير من الأدوات، نعم. يقدّم Ollama واجهة API متوافقة مع OpenAI على http://localhost:11434/v1 على الخادم نفسه. اضبط OPENAI_API_BASE وOPENAI_API_KEY في الأدوات التي تدعم عنوانًا أساسيًا مخصصًا مثل LangChain وContinue.dev. لا تُدعم كل ميزات واجهة OpenAI.' },
          ],
      },
      updateLog: {
        id: 'update-log',
        title: 'سجل التحديثات',
        items: [
          '**2026-05-26:** إصدار مبدئي — تغطي Qwen3 8B/14B/32B/72B وDockerfile الكامل وأسعار السحابة التقريبية.',
          '**2026-10-19:** أصبح Qwen3 يُعرض بوصفه الجيل السابق من Qwen (ولا يزال منتشرًا على نطاق واسع)، وQwen 3.6 (27B كثيف، 35B-A3B مزيج خبراء) بوصفه الجيل الأحدث.',
          '**2026-11-22:** أسعار GPU والتكلفة اليومية وإجماليات البناء تستند إلى مصادر إعلانات مؤرخة (متتبع InsiderLLM، 2026-10-15)، وسرعات كل نموذج مدرجة كغير متتبَّعة.',
          '**2026-11-27:** تصحيحات: Qwen3.8 موجود؛ والنسخة الافتراضية من Qwen2.5-72B حجمها 47 جيجابايت؛ وأعيد التحقق من أرقام RunPod وأجهزة mini PC أو وُسمت أرقام الكهرباء بأنها افتراضات؛ وحُذفت سرعات المعالج غير الموثقة؛ ورُبطت منافذ compose بـ localhost؛ وأُصلح اسم النموذج في أوامر Docker.',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ar',
      mainEntity: [
          {
            '@type': 'Question',
            'name': 'هل يوجد نموذج Qwen 3.8؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'نعم. يدرج [مستودع Qwen3.8](https://github.com/QwenLM/Qwen3.8) من Alibaba النموذج Qwen3.8-27B (2026-08-14) والنموذج الأكبر بكثير Qwen3.8-2.4T-A95B (2026-08-12). ‏Qwen3.8-27B نموذج كثيف، وتذكر [بطاقة النموذج](https://huggingface.co/Qwen/Qwen3.8-27B) ترخيص Apache-2.0، وتعرض [مكتبة Ollama](https://ollama.com/library/qwen3.8) الوسم `qwen3.8:27b` بحجم تنزيل 18 جيجابايت (تم التحقق في 2026-11-27). لا يشمل جدول الأجهزة في هذا الدليل Qwen3.8. وإذا كنت تقصد Qwen3 8B فنزّل `qwen3:8b`.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يوجد نموذج Qwen3 7B؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لا. تشكيلة Qwen3 الكثيفة هي 0.6B و1.7B و4B و8B و14B و32B — لا يوجد 7B. إذا بحثت عن "Qwen3 7B"، فإن أقرب نموذج هو Qwen3-8B (`ollama pull qwen3:8b`)، الذي يتسع ضمن ~5–6 جيجابايت من VRAM بتكميم Q4_K_M ويتسع في RTX 3060 بـ 12 جيجابايت بهامش جيد. ولنموذج من فئة 72B، استخدم Qwen2.5-72B.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما VRAM الأدنى لتشغيل Qwen3 8B على GPU؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'حوالي 6 جيجابايت من VRAM بتكميم Q4_K_M. وتوفر RTX 3060 بـ 12 جيجابايت هامشًا إضافيًا.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكن تشغيل Qwen2.5-72B على GPU واحدة؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ليس بالكامل على GPU. نسخة Q4_K_M من Qwen2.5-72B في Ollama تنزيلها 47 جيجابايت وسعة RTX 4090 الواحدة 24 جيجابايت، فيعمل جزء من النموذج على المعالج وتنخفض السرعة. وتبقى بطاقتان (48 جيجابايت) بهامش ضيق؛ أما بطاقة 80 جيجابايت أو GPU سحابي فتترك هامشًا.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل Qwen self-hosted متوافق مع أدوات OpenAI؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'في كثير من الأدوات، نعم. يقدّم Ollama واجهة API متوافقة مع OpenAI على http://localhost:11434/v1 على الخادم نفسه. اضبط `OPENAI_API_BASE` و`OPENAI_API_KEY` في الأدوات التي تدعم عنوانًا أساسيًا مخصصًا مثل LangChain وContinue.dev. لا تُدعم كل ميزات واجهة OpenAI.',
            },
          },
          {
            '@type': 'Question',
            'name': 'كم تكلفة تشغيل خادم Qwen دائم التشغيل؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'لم يقس هذا الدليل استهلاك الطاقة. مثال تقديري بافتراض متوسط استهلاك 12–45 واط وسعر $0.16/كيلوواط·ساعة: التشغيل 24/7 (730 ساعة) يكلف نحو $1.40–5.30 شهريًا.',
            },
          },
          {
            '@type': 'Question',
            'name': 'ما الفرق بين استخدام Ollama وvLLM لنشر Qwen؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ollama: أسهل في الإعداد، ويناسب الاستخدام الفردي وبيئات التطوير. vLLM: يكون عادةً أكثر كفاءة مع الطلبات المتزامنة، ويستحق النظر للإنتاج مع عدة مستخدمين.',
            },
          },
          {
            '@type': 'Question',
            'name': 'هل يمكنني استخدام Qwen self-hosted مع التطبيقات المتوافقة مع ChatGPT؟',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'في كثير من الأدوات، نعم. يقدّم Ollama واجهة API متوافقة مع OpenAI على http://localhost:11434/v1 على الخادم نفسه. اضبط OPENAI_API_BASE وOPENAI_API_KEY في الأدوات التي تدعم عنوانًا أساسيًا مخصصًا مثل LangChain وContinue.dev. لا تُدعم كل ميزات واجهة OpenAI.',
            },
          },
        ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'نشر Qwen محليًا: الدليل الكامل للإنتاج 2026',
      description: 'انشر Qwen3 8B إلى 72B في الإنتاج: خادم API بـ Docker Compose وتعدد GPU ومتطلبات الأجهزة وملاحظات التكلفة.',
      url: 'https://www.promptquorum.com/ar/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'ar',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
      about: [
        { '@type': 'Thing', name: 'نماذج لغة Qwen' },
        { '@type': 'Thing', name: 'نشر نموذج LLM محلي' },
        { '@type': 'Thing', name: 'استدلال GPU مع Docker' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'vLLM' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'Thing', name: 'Qwen2.5-72B' },
        { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'ar',
      name: 'كيف تنشر Qwen كخادم API للإنتاج مع Docker',
      step: [
        { '@type': 'HowToStep', name: 'ثبّت Docker و Docker Compose', position: 1 },
        { '@type': 'HowToStep', name: 'أنشئ docker-compose.yml مع Ollama + Open WebUI', position: 2 },
        { '@type': 'HowToStep', name: 'اضبط OLLAMA_HOST=0.0.0.0 في بيئة الحاوية', position: 3 },
        { '@type': 'HowToStep', name: 'نزّل نموذج Qwen عبر docker exec', position: 4 },
        { '@type': 'HowToStep', name: 'أضف Nginx كبوابة API مع مصادقة أساسية', position: 5 },
        { '@type': 'HowToStep', name: 'اضبط سياسة إعادة التشغيل كـ unless-stopped', position: 6 },
      ],
    },
    relatedReading: {
      items: [
        '[دليل نشر Qwen محليًا — إعداد للمبتدئين مع Ollama و LM Studio](/ar/local-llms/qwen-local-deployment-guide-2026) — دليل حسب مستوى الجهاز لـ Qwen3 8B إلى 72B على أجهزة استهلاكية',
        '[دليل شراء GPU لنماذج LLM المحلية 2026](/ar/power-local-llm/best-gpu-buying-guide-local-llm-2026) — توصيات GPU لـ Qwen2.5-72B وإعدادات تعدد GPU في الإنتاج',
        '[تشغيل Qwen محليًا — دليل البدء السريع](/ar/local-llms/run-qwen-locally-guide-2026) — التثبيت للمبتدئين',
      ],
    },
  },
  ko: {
    designSkin: 'hub',
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-11-27',
    next_refresh_due: '2027-05-22',
    theme: 'Overview & Reference',
    title: 'Qwen3 로컬 배포 완전 가이드 (2026): 프로덕션',
    seoTitle: 'Qwen3 로컬 배포 2026: 8B, 14B, 32B + Docker API',
    metaDescription:
      'Qwen3 로컬 배포: 8B, 14B, 32B를 Ollama/vLLM과 Docker API 서버로 실행, 하드웨어 선택과 Multi-GPU 포함. 참고 — Qwen3에는 7B가 없으니 8B(qwen3:8b)를 사용하세요. 2026년 가이드.',
    heroImage: '/images/qwen-local-deployment-complete-guide-2026-hardware-performance-hero-ko.webp',
    twitterDescription:
      'Qwen3 8B는 RTX 3060 12 GB에 들어갑니다. Qwen2.5-72B는 48 GB에서도 빠듯합니다. Docker, API 서버, Multi-GPU 가이드 2026.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      '프로덕션 환경에서 Qwen 모델을 배포하는 개발자 및 self-hosting 사용자 — 영구 API 서버, Multi-GPU 빌드, 상시 가동 mini PC 서버를 운영하는 분들.',
    readTime: '16분 분량',
    primaryTerm: 'Qwen 프로덕션 배포',
    targetKeywords: [
      'qwen 로컬 배포 방법',
      'qwen docker ollama api 서버',
      'qwen multi gpu 설정',
      '로컬 llm 프로덕션 배포',
      'qwen self-hosted api',
    ],
    current_models_mentioned: [
      'Qwen3 8B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen 3.6 27B',
      'Qwen2.5-72B',
      'Qwen2.5-Coder 32B',
    ],
    current_hardware_mentioned: [
      'NVIDIA RTX 3060 12 GB',
      'NVIDIA RTX 4060 Ti 16 GB',
      'NVIDIA RTX 4090 24 GB',
      'Minisforum UM890 Pro',
      'AOOSTAR GEM12 Pro OCuLink',
    ],
    leadAnswerBlock:
      '**Qwen3(이전 세대, 여전히 널리 배포됨) dense 모델은 0.6B, 1.7B, 4B, 8B, 14B, 32B이며 — 7B 모델은 없습니다. 가장 가까운 것은 Qwen3-8B(`qwen3:8b` pull)이며, "Qwen3 7B"를 검색했다면 8B를 원하는 것입니다. Qwen3의 최대 dense 모델은 32B이고, 72B급 모델이 필요하면 Qwen2.5-72B를 사용하세요. Qwen3 8B 및 14B는 소비자용 GPU에 들어가며 Ollama 또는 vLLM과 Docker Compose API 서버로 제공할 수 있습니다. Qwen3 32B(다운로드 20 GB)에는 RTX 4090 같은 24 GB 카드가 필요합니다. 중고 RTX 4090은 [InsiderLLM 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장: eBay US 판매 완료 데이터, 2026년 10월, 216건, 2026-11-27 확인)에 따르면 $2,575~$3,010(중앙값 $2,860)에 판매되었으며 권장 소비자가는 $1,599입니다(미국 가격이며 USD 기준이고 지역별로 다를 수 있습니다). Qwen 3.6은 Qwen3보다 새로운 릴리스로, 27B dense 모델(`qwen3.6:27b`)과 35B-A3B 전문가 혼합 모델(`qwen3.6:35b`)로 제공됩니다. 27B는 Qwen3 32B와 같은 24 GB VRAM 티어에 들어가므로 함께 비교해 볼 만합니다. 더 새로운 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)(`qwen3.8:27b`)는 이 하드웨어 표에 포함되지 않습니다. Ollama 기본 Q4_K_M 빌드의 Qwen2.5-72B는 47 GB 다운로드라서 24 GB 카드 두 장에서는 컨텍스트 여유가 거의 없습니다. 짧은 컨텍스트, 일부 CPU 오프로딩, 더 큰 카드 또는 클라우드 대여를 고려해야 합니다 — RTX 4090 두 장은 GPU 감가상각만으로 하루 약 $5.22이며(중고 중앙값 $2,860 × 2 ÷ 1,095일, 3년 기준, 전기료와 다른 부품 제외), [RunPod](https://www.runpod.io/pricing)의 48 GB A40은 시간당 $0.35~$0.59입니다(2026-11-27 확인).**',
    quickAnswerTop: {
      ko: {
        question: 'Qwen 모델을 로컬 프로덕션 환경에 어떻게 배포합니까?',
        answer:
          'Docker Compose 스택으로 Qwen을 실행하면 OpenAI 호환 API가 노출됩니다. Ollama가 GPU 추론을 담당하고 Open WebUI가 프런트엔드를 제공합니다. 원격 접속에는 TLS와 인증이 적용된 Nginx 리버스 프록시를 추가합니다. Qwen3 8B는 VRAM 약 6 GB가 필요하고, Qwen2.5-72B(다운로드 47 GB)는 24 GB 카드 두 장에서도 빠듯합니다.',
        bullets: [
          'Qwen3 8B: RTX 3060 12 GB (VRAM 약 6 GB 필요), 중고 가격은 여기서 추적하지 않음',
          'Qwen3 14B: RTX 4060 Ti 16 GB, 가격은 여기서 추적하지 않음',
          'Qwen3 32B: RTX 4090 24 GB, 중고 판매가 $2,575~$3,010 (InsiderLLM, 미국 판매가, 2026년 10월) (이전 세대. 더 새로운 Qwen 3.6 27B, `qwen3.6:27b`, 같은 24 GB 티어)',
          'Qwen2.5-72B: RTX 4090 두 장은 빠듯함. RunPod A100 80 GB $1.19~2.19/시간 (2026-11-27)',
          'mini PC 옵션: Minisforum UM890 Pro (CPU), 표시가 $439.90, 2026-11-27 품절',
        ],
        updatedDate: '2026-11',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '하드웨어 표', anchor: '#benchmark-table' },
      { label: 'Docker API 서버 설정', anchor: '#docker-setup' },
      { label: 'Multi-GPU 구성', anchor: '#multi-gpu' },
      { label: '프로덕션 API 설정', anchor: '#api-config' },
      { label: '비용 비교: self-hosted vs 클라우드', anchor: '#cost-comparison' },
      { label: '상시 가동 서버 하드웨어', anchor: '#always-on-server' },
      { label: '판정: 모델 크기별 하드웨어 선택', anchor: '#verdict' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: '핵심 요약',
        items: [
          'Qwen3 8B와 14B는 소비자용 GPU 목표 — 보통 각각 12 GB, 16 GB 카드, Docker에서 Ollama로 실행',
          'Qwen3 32B는 RTX 4090 같은 24 GB 카드가 필요합니다 (Qwen3는 이전 세대이며, 더 새로운 Qwen 3.6 27B(`qwen3.6:27b`)가 같은 24 GB 티어에 들어갑니다)',
          'Qwen2.5-72B(기본 다운로드 47 GB)는 RTX 4090 두 장에서도 빠듯합니다. 대안은 대용량 RAM CPU 빌드나 클라우드입니다 — RTX 4090 두 장은 GPU 감가상각만으로 하루 약 $5.22(2 × $2,860 ÷ 1,095일)',
          'Ollama + Open WebUI로 구성된 Docker Compose 스택은 OpenAI 호환 API를 노출하며, 원격 접속에는 TLS와 인증이 적용된 Nginx를 추가합니다',
          'Qwen 상시 가동 서버: Minisforum UM890 Pro (Qwen3 8B CPU 실행, $439.90, 2026-11-27 품절) 또는 AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 GB (GPU 가격은 여기서 추적하지 않음)',
          '클라우드 대안: RunPod A40 48 GB($0.35~0.59/시간, 2026-11-27)는 47 GB 빌드에는 4090 두 장만큼 빠듯하며, A100 80 GB($1.19~2.19/시간)는 여유가 있습니다',
          '이 가이드는 프로덕션 배포를 다루며, Ollama 기초 설정은 Qwen 입문 가이드를 참조하십시오',
        ],
      },
      snippets: {
        id: 'snippets',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Docker Compose 스택으로 Qwen을 프로덕션에 배포하면 Ollama가 추론 백엔드로 동작하며 OpenAI 호환 API 엔드포인트가 노출됩니다.',
          },
          {
            type: 'plain-terms',
            text: '매번 수동으로 Qwen을 실행하는 대신, Docker를 사용하면 항상 켜져 있고 요청을 받을 수 있는 영구 서버를 구성할 수 있습니다 — ChatGPT API를 사용하는 것과 동일하지만 자신의 하드웨어에서 토큰 비용 없이 운영됩니다.',
          },
        ],
      },
      benchmarks: {
        id: 'benchmark-table',
        title: 'Qwen 모델별 VRAM과 하드웨어',
        content:
          '**GPU 브랜드가 아니라 모델 크기에 맞는 하드웨어를 선택하십시오.** VRAM이 주요 제약입니다. 모델이 들어가지 않으면 일부가 CPU에서 실행되어 속도가 떨어집니다. 아래 표는 Ollama에서 흔히 쓰는 Q4_K_M 양자화 기준의 필요 VRAM을 나타내며, 모델별 속도는 여기서 추적하지 않습니다. 참고로 [llama.cpp CUDA 스코어보드](https://github.com/ggml-org/llama.cpp/discussions/15013)에는 개발자가 보고한 Llama 2 7B Q4_0 생성 속도가 RTX 3090 158.2 tok/s, RTX 4090 186.2 tok/s, RTX 5090 290.0 tok/s로 올라와 있습니다. 중고 RTX 4090은 [InsiderLLM 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/)(미국 시장: eBay US 판매 완료 데이터, 2026년 10월, 216건, 2026-11-27 확인)에 따르면 $2,575~$3,010(중앙값 $2,860)에 판매되었으며 권장 소비자가는 $1,599입니다(미국 가격이며 USD 기준이고 지역별로 다를 수 있습니다).',
        columns: ['모델', 'VRAM (Q4_K_M)', '최소 GPU', '속도 (tok/s)', 'CPU 대체', '프로덕션 준비'],
        rows: [
          {
            '0': 'Qwen3 8B',
            '1': '5.2 GB',
            '2': 'RTX 3060 12 GB',
            '3': '추적하지 않음',
            '4': '가능 (RAM 32 GB)',
            '5': '가능 — 단일 GPU',
          },
          {
            '0': 'Qwen3 14B',
            '1': '9.3 GB',
            '2': 'RTX 4060 Ti 16 GB',
            '3': '추적하지 않음',
            '4': '가능 (RAM 64 GB)',
            '5': '가능 — 단일 GPU',
          },
          {
            '0': 'Qwen3 32B (이전 세대)',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': '추적하지 않음',
            '4': '제한적 (RAM 128 GB)',
            '5': '가능 — 단일 GPU',
          },
          {
            '0': 'Qwen 3.6 27B',
            '1': '~17 GB',
            '2': 'RTX 4090 24 GB',
            '3': '추적하지 않음',
            '4': '제한적 (RAM 128 GB)',
            '5': '가능 — 단일 GPU',
          },
          {
            '0': 'Qwen2.5-Coder 32B',
            '1': '20 GB',
            '2': 'RTX 4090 24 GB',
            '3': '추적하지 않음',
            '4': '제한적 (RAM 128 GB)',
            '5': '가능 — 단일 GPU',
          },
          {
            '0': 'Qwen2.5-72B',
            '1': '47 GB',
            '2': 'RTX 4090 두 장 (48 GB, 빠듯함)',
            '3': '추적하지 않음',
            '4': '느림 (RAM 128 GB)',
            '5': 'Multi-GPU 또는 클라우드만 가능',
          },
        ],
        note: 'VRAM 열의 GB 값은 Ollama 라이브러리의 모델 다운로드 크기입니다(2026-11-27 확인, Qwen 3.6은 q4_K_M 태그). 실행 중 메모리 사용량은 더 큽니다. GPU 및 CPU 속도는 여기서 추적하지 않습니다. RTX 4090에는 NVLink 커넥터가 없어 RTX 4090 두 장은 PCIe로만 통신하며, NVLink는 RTX 3090 같은 일부 카드에 있습니다.',
        image: '/images/qwen-local-deployment-complete-guide-2026-vram-by-model-en.svg',
        imageCaption:
          'Q4_K_M 양자화 기준 Qwen 모델 VRAM 요구량: Qwen3 8B는 5.2GB(RTX 3060 12GB), Qwen3 32B는 20GB(RTX 4090 24GB), Qwen2.5-72B는 47GB입니다(RTX 4090 두 장에서도 빠듯함). 수치는 다운로드 크기입니다.',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Docker API 서버 설정 — Ollama + Open WebUI + Nginx',
        content:
          '**간결한 Qwen 서버는 아래 compose 파일의 두 컨테이너인 Ollama(추론)와 Open WebUI(UI)로 구성되며, 원격 접속에는 TLS와 인증이 적용된 Nginx 리버스 프록시를 별도로 추가합니다.** GPU 패스스루에는 호스트에 NVIDIA Container Toolkit이 필요합니다. 서버 자체에서는 OpenAI 호환 API가 `http://localhost:11434/v1`에 있습니다.',
        numberedItems: [
          {
            title: 'Docker 및 Docker Compose를 설치합니다',
            whyItMatters: '컨테이너는 Qwen을 운영 체제와 격리합니다 — Python 환경 충돌 없음, 업데이트 용이.',
          },
          {
            title: 'Ollama + Open WebUI 서비스가 포함된 docker-compose.yml을 생성합니다',
            whyItMatters: 'Compose 파일은 GPU 패스스루, 포트 매핑, 재시작 정책을 한 곳에서 관리합니다.',
          },
          {
            title: 'Ollama 컨테이너 환경에서 OLLAMA_HOST=0.0.0.0을 설정합니다',
            whyItMatters: '다른 컨테이너가 접근하려면 Ollama가 컨테이너 네트워크 인터페이스에서 수신해야 합니다. 공식 이미지는 이미 그렇게 설정되어 있으며, 이 줄은 이를 명시합니다.',
          },
          {
            title: 'Qwen 모델을 다운로드합니다: docker exec ollama ollama pull qwen3:8b',
            whyItMatters: '모델은 Docker 볼륨에 저장되어 컨테이너 재시작 시에도 유지됩니다.',
          },
          {
            title: '공개 배포를 위해 기본 인증이 포함된 Nginx를 API 게이트웨이로 추가합니다',
            whyItMatters: '인증 없이 Ollama를 인터넷에 직접 노출하면 누구나 귀하의 GPU에서 추론을 실행할 수 있습니다.',
          },
          {
            title: '컨테이너 재시작 정책을 unless-stopped로 설정합니다',
            whyItMatters: '이를 통해 Qwen 서버가 시스템 재시작 후에도 유지됩니다 — 상시 가동 mini PC 배포에 필수적입니다.',
          },
        ],
        codeBlock: `version: "3.8"
services:
  ollama:
    image: ollama/ollama:latest
    container_name: ollama
    restart: unless-stopped
    ports:
      - "127.0.0.1:11434:11434"
    environment:
      - OLLAMA_HOST=0.0.0.0
      - OLLAMA_KEEP_ALIVE=-1
    volumes:
      - ollama_data:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]

  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "127.0.0.1:3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://ollama:11434
    volumes:
      - open_webui_data:/app/backend/data
    depends_on:
      - ollama

volumes:
  ollama_data:
  open_webui_data:`,
        codeLanguage: 'yaml',
        callouts: [
          {
            type: 'warning',
            text: 'compose 파일은 게시되는 두 포트를 모두 localhost에 바인딩합니다. `127.0.0.1:`을 제거하면 모든 네트워크 인터페이스에 게시됩니다. Ollama에는 자체 인증이 없으며, [Docker가 게시한 포트는 ufw 규칙을 우회합니다](https://docs.docker.com/engine/network/packet-filtering-firewalls/). 원격 접속에는 TLS와 인증이 적용된 Nginx 게이트웨이만 노출하십시오. 사용에 따른 책임은 사용자에게 있습니다.',
          },
        ],
      },
      multiGpu: {
        id: 'multi-gpu',
        title: 'Qwen2.5-72B를 위한 Multi-GPU 구성',
        content:
          '**Qwen2.5-72B Q4_K_M은 Ollama에서 47 GB 다운로드이므로 RTX 4090(24 GB) 한 장으로는 부족합니다. RTX 4090 두 장(합계 48 GB)은 컨텍스트 여유가 거의 없으며, 80 GB 카드 한 장(A100, H100)은 여유가 있습니다.** [Ollama FAQ](https://docs.ollama.com/faq)에 따르면 GPU 한 장에 들어가지 않는 모델은 사용 가능한 모든 GPU에 분산됩니다.',
        items: [
          '모델이 GPU 한 장에 들어가지 않으면 Ollama가 사용 가능한 GPU에 분산합니다 — compose 환경에서 CUDA_VISIBLE_DEVICES=0,1로 특정 카드를 지정하십시오',
          '두 GPU가 PCIe 레인을 어떻게 나누는지 메인보드 설명서를 확인하십시오. 많은 소비자용 보드는 두 번째 긴 슬롯에 더 적은 레인을 할당합니다',
          'RTX 4090에는 NVLink 커넥터가 없어 RTX 4090 두 장은 PCIe로만 통신하며, NVLink 브리지는 RTX 3090 같은 일부 이전 카드에 있습니다',
          'vLLM은 텐서 병렬성을 사용하는 대체 추론 엔진으로, 동시 요청이 많을 때 고려할 수 있습니다. 아래 명령은 [AWQ 빌드](https://huggingface.co/Qwen/Qwen2.5-72B-Instruct-AWQ)를 사용하며, 라이선스는 Apache-2.0이 아닌 Qwen 라이선스입니다. 이 명령은 8000 포트를 localhost에만 게시하므로, 인증 없이 외부에 노출하지 마십시오. 24 GB 카드 두 장에 들어가는지는 이 가이드에서 테스트하지 않았으므로, 메모리가 부족하면 `--max-model-len`을 낮추십시오',
          'Qwen2.5-72B를 가끔 쓴다면 대여가 초기 비용이 적습니다. RunPod는 A100 80 GB를 $1.19~2.19/시간(2026-11-27)으로 안내하며, 중고 RTX 4090 두 장은 카드만 중앙값 기준 약 $5,720입니다(InsiderLLM, 미국 판매가, 2026년 10월)',
        ],
        codeBlock: `# vLLM multi-GPU alternative (better for high-traffic 72B)
docker run --gpus all \\
  -p 127.0.0.1:8000:8000 \\
  -e VLLM_WORKER_MULTIPROC_METHOD=spawn \\
  vllm/vllm-openai:latest \\
  --model Qwen/Qwen2.5-72B-Instruct-AWQ \\
  --tensor-parallel-size 2 \\
  --max-model-len 32768 \\
  --quantization awq`,
        codeLanguage: 'bash',
        callouts: [
          {
            type: 'warning',
            text: '[NVIDIA가 밝힌 RTX 4090 한 장의 그래픽 전력](https://www.nvidia.com/en-us/geforce/graphics-cards/40-series/rtx-4090/)은 450 W입니다. 두 장을 사용하려면 두 카드와 나머지 시스템에 맞는 용량의 파워, 올바르고 끝까지 꽂은 16핀 전원 케이블, 충분한 공간과 통풍, 부하를 감당할 수 있는 전기 회로가 필요합니다. 잘못된 전원 배선은 하드웨어 손상이나 화재를 일으킬 수 있습니다. 확실하지 않으면 자격 있는 기술자에게 문의하십시오. 사용에 따른 책임은 사용자에게 있습니다.',
          },
        ],
      },
      apiConfig: {
        id: 'api-config',
        title: '프로덕션 API 설정',
        content:
          '**Ollama는 /v1에서 OpenAI 호환 API를 제공합니다 — OpenAI API용으로 만든 많은 애플리케이션은 기본 URL과 모델명을 바꾸면 로컬 Qwen에서 동작합니다. 모든 API 기능이 지원되지는 않습니다.** 프로덕션 동작에 영향을 미치는 주요 환경 변수:',
        items: [
          'OLLAMA_KEEP_ALIVE=-1 — 비활성 후 모델이 언로드되지 않도록 합니다 (기본값은 5분이며, 서버에서는 보통 원하지 않는 동작)',
          'OLLAMA_NUM_PARALLEL=4 — 모델당 최대 4개의 병렬 요청을 허용합니다. 병렬 슬롯이 늘면 메모리가 더 필요합니다',
          'OLLAMA_MAX_LOADED_MODELS=1 — 소형 GPU 빌드에서 스래싱 방지를 위해 VRAM에 모델 하나만 유지합니다',
          'OLLAMA_FLASH_ATTENTION=1 — NVIDIA Ampere/Ada GPU(RTX 3060 이상)에서 flash attention을 활성화하며 속도가 향상될 수 있습니다(향상 폭은 모델과 컨텍스트에 따라 다릅니다)',
          'OLLAMA_GPU_OVERHEAD=536870912 — 각 GPU의 VRAM을 예약합니다. 값의 단위는 바이트이며(512 MiB), [Ollama 소스](https://github.com/ollama/ollama/blob/main/envconfig/config.go)를 따릅니다. 메모리 부족 오류를 줄이는 데 도움이 될 수 있습니다',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'OLLAMA_KEEP_ALIVE=0은 각 요청 직후 모델을 언로드합니다. 변수를 설정하지 않으면 기본적으로 5분간 로드 상태가 유지됩니다. 언로드된 뒤의 다음 요청은 모델이 다시 로드될 때까지 기다립니다. API 서버에서 계속 로드하려면 OLLAMA_KEEP_ALIVE=-1로 설정하십시오.',
          },
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: '비용 비교: self-hosted vs Alibaba Cloud vs RunPod',
        content:
          '**self-hosting은 대체로 지속적인 부하에서 이득이며, 비정기 사용에는 클라우드 GPU 대여가 구매보다 보통 저렴합니다.** 아래 표는 GPU 가격만 3년으로 감가상각합니다(예시이며 전기료와 다른 부품은 추적하지 않음). 중고 RTX 4090 판매가 중앙값 $2,860 기준으로 하루 $2.61($2,860 ÷ 1,095일)이며, 이는 시간당 $0.59 또는 $0.35의 RunPod A40을 하루 약 4.4~7.5시간 대여하는 비용에 해당합니다([RunPod 요금](https://www.runpod.io/pricing), 시큐어·커뮤니티 클라우드, 2026-11-27 확인).',
        columns: ['옵션', 'Qwen3 8B 하루 비용', 'Qwen2.5-72B 하루 비용', '초기 비용', '최적 용도'],
        rows: [
          {
            '0': 'Self-hosted: mini PC RTX 3060 12 GB',
            '1': '추적하지 않음',
            '2': '해당 없음 (용량 부족)',
            '3': '추적하지 않음 (중고 GPU 가격 미추적)',
            '4': '상시 8B 추론, 가정/사무실 서버',
          },
          {
            '0': 'Self-hosted: 워크스테이션 RTX 4090',
            '1': '$2.61 (GPU 감가상각만, 3년)',
            '2': '해당 없음 (단일 GPU)',
            '3': 'GPU만: 중고 판매가 $2,575~$3,010 (중앙값 $2,860), 다른 부품은 추적하지 않음',
            '4': '최대 32B 추론, 워크스테이션 전용 사용',
          },
          {
            '0': 'Self-hosted: RTX 4090 두 장',
            '1': '$5.22 (GPU 감가상각만: 2 × $2,860 ÷ 1,095일)',
            '2': '$5.22 (동일한 GPU 감가상각만)',
            '3': 'GPU만: 2 × $2,860 = $5,720 (중앙값), 다른 부품은 추적하지 않음',
            '4': '72B 상시 가동, 워크스테이션 병행 사용',
          },
          {
            '0': 'RunPod A40 48 GB ($0.35~0.59/시간)',
            '1': '$0.35~0.59 (1시간)',
            '2': '$0.35~0.59 (1시간)',
            '3': '초기 비용 $0, 시간제 지불',
            '4': '비정기 사용·테스트. 72B Q4_K_M에는 빠듯함',
          },
          {
            '0': 'Alibaba Cloud PAI (GPU A10)',
            '1': '추적하지 않음',
            '2': '추적하지 않음',
            '3': '업체 요금 페이지 확인',
            '4': 'Alibaba Cloud 생태계 사용자',
          },
          {
            '0': 'Vast.ai RTX 4090 스팟',
            '1': '추적하지 않음',
            '2': '해당 없음',
            '3': '초기 비용 $0',
            '4': '저렴한 비정기 사용, 중단 위험 허용 가능',
          },
        ],
        affiliateLinks: [
          {
            url: 'https://www.runpod.io',
            productName: 'RunPod GPU Cloud',
            productCategory: 'cloud-gpu',
            priceRange: 'A40 $0.35/시간부터 (2026-11-27)',
            label: 'RunPod 시작하기 →',
          },
          {
            url: 'https://vast.ai',
            productName: 'Vast.ai Spot GPUs',
            productCategory: 'cloud-gpu',
            priceRange: '업체 페이지 확인',
            label: 'Vast.ai GPU 스팟 가격 보기 →',
          },
        ],
      },
      alwaysOnServer: {
        id: 'always-on-server',
        title: 'Qwen 상시 가동 서버 하드웨어 추천',
        content:
          '**상시 가동 mini PC의 전기료는 적은 편입니다. 평균 소비 전력 12~45W와 $0.16/kWh를 가정하면 24/7(730시간) 운영 시 월 약 $1.40~5.30입니다.** 이 가이드는 소비 전력을 측정하지 않았습니다. 일반적인 상시 가동 구성은 다음 두 가지 mini PC 옵션입니다:',
        items: [
          '저렴한 옵션 (Qwen3 8B CPU 추론): Minisforum UM890 Pro — AMD Ryzen 9 8945HS. 제조사 페이지에는 베어본, RAM 32 GB + SSD 1 TB, 64 GB + 1 TB 구성이 있으며, 표시 가격은 $439.90이고 구성들이 품절로 표시되었습니다(2026-11-27 확인). Qwen3 8B의 CPU 속도는 여기서 추적하지 않습니다.',
          'eGPU 옵션 (Qwen3 14B): AOOSTAR GEM12+ Pro(Ryzen 7 PRO 8845HS)에는 OCuLink 포트가 있으며, 제조사는 베어본(RAM·SSD 제외)을 $359, 품절로 표시했습니다(2026-11-27 확인). 제조사는 OCuLink를 연결하거나 분리하기 전에 PC를 끄도록 안내합니다. eGPU 독의 RTX 4060 Ti 16 GB와 결합합니다(GPU와 독 가격은 추적하지 않아 총액은 제시하지 않습니다). Qwen3 14B는 16 GB 카드의 VRAM에 들어갑니다.',
          '고급 사용자 (Qwen3 32B): 중고 RTX 4090이 장착된 컴팩트 ATX 데스크톱 PC (중고 판매가 $2,575~$3,010, 중앙값 $2,860, [InsiderLLM 트래커](https://insiderllm.com/guides/nvidia-gpu-prices-rising/), 미국 eBay 판매 완료, 2026년 10월). 케이스, CPU, RAM 가격은 여기서 추적하지 않아 빌드 총액은 제시하지 않습니다. Q4_K_M의 Qwen3 32B(20 GB)는 24 GB 카드에 들어가지만 긴 컨텍스트용 여유는 제한적입니다.',
        ],
        affiliateLinks: [
          {
            url: 'https://www.minisforum.com/products/minisforum-um890-pro',
            productName: 'Minisforum UM890 Pro',
            productCategory: 'mini-pc',
            priceRange: '$439.90 (품절, 2026-11-27)',
            label: 'Minisforum UM890 Pro 보기 (Qwen3 8B CPU 서버) →',
          },
          {
            url: 'https://aoostar.com/products/aoostar-gem12-pro',
            productName: 'AOOSTAR GEM12 Pro OCuLink',
            productCategory: 'mini-pc',
            priceRange: '$359 베어본 (품절, 2026-11-27)',
            label: 'AOOSTAR GEM12+ Pro (OCuLink) 보기 →',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '판정: 모델 크기별 배포 방법 선택',
        content:
          '**하드웨어의 인상적인 사양이 아니라 모델 크기와 하루 사용 시간에 따라 Qwen 배포 방식을 선택하십시오.**',
        decisionBlock: {
          title: 'Qwen 배포 결정',
          localIf: [
            'Qwen3 8B 또는 14B를 하루 4시간 이상 사용 → mini PC나 GPU 구매가 유리할 수 있음. 현재 클라우드 요금과 비교하십시오',
            '인터랙티브 코드 또는 문서 작업에서 네트워크 왕복을 피하고 싶은 경우',
            '네트워크 외부로 나가서는 안 되는 개인 데이터 처리',
            '이미 12 GB 이상 VRAM의 데스크톱 GPU를 유휴 상태로 보유',
          ],
          cloudIf: [
            'Qwen2.5-72B 비정기 사용 (하루 4시간 미만) — 대여(RunPod A100 80 GB, $1.19~2.19/시간)로 큰 하드웨어 구매를 피할 수 있음',
            '하드웨어 구매 전 Qwen2.5-72B를 테스트해야 하는 경우',
            '사용이 불규칙한 경우 — 시간제 대여는 인스턴스를 중지하면 GPU 요금이 멈춤(스토리지는 계속 과금될 수 있음)',
            '미국/EU 외 지역에 있고 배송비 또는 수입 관세로 하드웨어 비용이 증가하는 경우',
          ],
          quick: [
            '매일 Qwen3 8B: Minisforum UM890 Pro',
            '매일 Qwen3 14B: AOOSTAR + RTX 4060 Ti (GPU 가격은 여기서 추적하지 않음)',
            '매일 Qwen3 32B: 컴팩트 ATX + RTX 4090 (중고 판매가 $2,575~$3,010, 빌드 총액은 추적하지 않음)',
            '비정기 Qwen2.5-72B: RunPod A100 80 GB ($1.19~2.19/시간)',
          ],
        },
        imageCaption:
          'Qwen 자체 호스팅 vs 클라우드 결정 트리: 지속적으로 사용한다면 자체 호스팅(Qwen3 8B는 Minisforum UM890 Pro, Qwen3 32B는 중고 RTX 4090, GPU만 중고 판매가 $2,575~$3,010, InsiderLLM, 미국 판매가, 2026년 10월); 간헐적인 Qwen2.5-72B 사용은 RunPod A100 80GB($1.19~2.19/시간, 2026-11-27) 같은 클라우드를 사용하세요.',
      },
      internalLinks: {
        id: 'see-also',
        title: '관련 가이드',
        items: [
          'Ollama 기초 Qwen 설정 (입문): /ko/local-llms/run-qwen-locally-guide-2026',
          '로컬 LLM용 GPU 구매 가이드: /ko/power-local-llm/best-gpu-buying-guide-local-llm-2026',
          '모델 파일용 NAS 스토리지: /ko/power-local-llm/best-nas-storage-local-ai-models-2026',
          '클라우드 GPU 비교 (서구 공급업체): /ko/power-local-llm/best-cloud-gpu-providers',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Qwen 3.8 모델이 있습니까?',
            a: '있습니다. 알리바바의 [Qwen3.8 저장소](https://github.com/QwenLM/Qwen3.8)에는 Qwen3.8-27B(2026-08-14)와 훨씬 큰 Qwen3.8-2.4T-A95B(2026-08-12)가 올라와 있습니다. Qwen3.8-27B는 dense 모델이며, [모델 카드](https://huggingface.co/Qwen/Qwen3.8-27B)의 라이선스는 Apache-2.0이고 [Ollama 라이브러리](https://ollama.com/library/qwen3.8)의 `qwen3.8:27b` 다운로드 크기는 18 GB입니다(2026-11-27 확인). 이 가이드의 하드웨어 표는 Qwen3.8을 다루지 않습니다. Qwen3 8B를 의미했다면 `qwen3:8b`를 받으십시오.',
          },
          {
            q: 'Qwen3 7B 모델이 있습니까?',
            a: '없습니다. Qwen3 dense 라인업은 0.6B, 1.7B, 4B, 8B, 14B, 32B이며 7B는 없습니다. "Qwen3 7B"를 검색했다면 가장 가까운 모델은 Qwen3-8B(`ollama pull qwen3:8b`)이며, Q4_K_M에서 VRAM 약 5~6 GB에 맞고 RTX 3060 12 GB에 여유 있게 들어갑니다. 72B급 모델이 필요하면 Qwen2.5-72B를 사용하세요.',
          },
          {
            q: 'RTX 4090 한 장으로 Qwen2.5-72B를 실행할 수 있습니까?',
            a: '완전히는 불가능합니다. Ollama의 Qwen2.5-72B Q4_K_M 빌드는 47 GB 다운로드인데 RTX 4090은 24 GB이므로 모델 일부가 CPU에서 실행되어 속도가 떨어집니다. RTX 4090 두 장(48 GB)도 빠듯하며, 80 GB 카드나 클라우드 GPU는 여유가 있습니다. RTX 4090 한 장에는 Q4_K_M의 Qwen3 32B(다운로드 20 GB)가 들어가지만 긴 컨텍스트용 여유는 제한적입니다.',
          },
          {
            q: '프로덕션 Qwen 배포에서 Ollama와 vLLM의 차이점은 무엇입니까?',
            a: 'Ollama는 설정이 쉽고 여러 GPU에 모델을 자동으로 분산합니다 — 개인 서버와 소규모 팀에 적합합니다. vLLM은 텐서 병렬성과 연속 배칭을 사용해 동시 부하에서 일반적으로 더 효율적이므로, 동시 사용자가 많은 프로덕션 API에서 고려할 수 있습니다.',
          },
          {
            q: 'Ollama는 Qwen의 Multi-GPU 추론을 네이티브로 지원합니까?',
            a: '예. [Ollama FAQ](https://docs.ollama.com/faq)에 따르면 GPU 한 장에 들어가지 않는 모델은 사용 가능한 모든 GPU에 분산됩니다. CUDA_VISIBLE_DEVICES=0,1로 사용할 NVIDIA GPU를 제한할 수 있습니다. RTX 4090 두 장은 PCIe로 통신하며, 이 구성의 Qwen2.5-72B에 대해 출처가 있는 tok/s 수치가 없어 제시하지 않습니다.',
          },
          {
            q: 'Qwen 추론에서 Alibaba Cloud가 RunPod보다 저렴합니까?',
            a: '이 가이드에는 확인된 Alibaba Cloud PAI 가격이 없어 가격을 비교하지 않습니다. 각 업체의 최신 요금 페이지를 확인하십시오. 2026-11-27 확인 시 [RunPod](https://www.runpod.io/pricing)의 A40 48 GB는 커뮤니티 클라우드 $0.35/시간, 시큐어 클라우드 $0.59/시간이었습니다.',
          },
          {
            q: '상시 가동 Qwen 서버는 전기를 얼마나 사용합니까?',
            a: '이 가이드는 소비 전력을 측정하지 않았습니다. 평균 소비 전력을 가정한 계산 예: $0.16/kWh에서 12~45W를 24/7(730시간) 사용하면 월 약 $1.40~5.30입니다. 190W 고정(예: 사양상 165W인 RTX 4060 Ti 16 GB에 mini PC 몫 25W를 가정해 더한 값)은 월 약 $22입니다.',
          },
          {
            q: 'Self-hosted Qwen API를 ChatGPT 호환 애플리케이션과 함께 사용할 수 있습니까?',
            a: '대부분의 경우 가능합니다. Ollama는 서버 자체의 http://localhost:11434/v1에서 OpenAI 호환 API를 제공합니다(다른 기기에서는 인증이 적용된 게이트웨이 주소를 사용). LangChain, Continue.dev처럼 기본 URL을 지정할 수 있는 도구에 이 주소, 비어 있지 않은 임의의 API 키, Qwen 모델명을 입력하십시오. OpenAI API의 모든 기능이 지원되지는 않습니다.',
          },
        ],
      },
      updateLog: {
        id: 'update-log',
        title: '업데이트 기록',
        items: [
          '2026-05-26: 최초 게시. 가격과 속도는 참고용 범위이며 PromptQuorum의 실측 결과가 아닙니다. 현재 판매 정보를 확인하십시오.',
          '2026-10-19: Qwen3를 Qwen의 이전 세대(여전히 널리 배포됨)로, Qwen 3.6(27B dense, 35B-A3B 전문가 혼합)을 더 새로운 세대로 표기하도록 변경.',
          '2026-11-22: GPU 가격, 일일 비용, 빌드 총액은 날짜가 명시된 목록 출처(InsiderLLM 트래커, 2026-10-15)를 인용하며, 모델별 속도는 추적하지 않음으로 표기합니다.',
          '2026-11-27: 정정: Qwen3.8은 존재합니다. Qwen2.5-72B 기본 빌드는 47 GB입니다. RunPod, mini PC, 전기요금 수치를 다시 확인하거나 가정으로 표시했고, 출처 없는 CPU 속도와 Alibaba Cloud 가격을 삭제했으며, compose 포트를 localhost에 바인딩하고 Ollama 설정과 vLLM 모델명을 수정했습니다.',
          '다음 검토 예정: 2027-05-22',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'ko',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'RTX 4090 한 장으로 Qwen2.5-72B를 실행할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '완전히는 불가능합니다. Ollama의 Qwen2.5-72B Q4_K_M 빌드는 47 GB 다운로드인데 RTX 4090은 24 GB이므로 모델 일부가 CPU에서 실행되어 속도가 떨어집니다. RTX 4090 두 장(48 GB)도 빠듯하며, 80 GB 카드나 클라우드 GPU는 여유가 있습니다. RTX 4090 한 장에는 Q4_K_M의 Qwen3 32B(다운로드 20 GB)가 들어가지만 긴 컨텍스트용 여유는 제한적입니다.',
          },
        },
        {
          '@type': 'Question',
          name: '프로덕션 Qwen 배포에서 Ollama와 vLLM의 차이점은 무엇입니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ollama는 설정이 쉽고 여러 GPU에 모델을 자동으로 분산합니다 — 개인 서버와 소규모 팀에 적합합니다. vLLM은 텐서 병렬성과 연속 배칭을 사용해 동시 부하에서 일반적으로 더 효율적이므로, 동시 사용자가 많은 프로덕션 API에서 고려할 수 있습니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Ollama는 Qwen의 Multi-GPU 추론을 네이티브로 지원합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '예. [Ollama FAQ](https://docs.ollama.com/faq)에 따르면 GPU 한 장에 들어가지 않는 모델은 사용 가능한 모든 GPU에 분산됩니다. CUDA_VISIBLE_DEVICES=0,1로 사용할 NVIDIA GPU를 제한할 수 있습니다. RTX 4090 두 장은 PCIe로 통신하며, 이 구성의 Qwen2.5-72B에 대해 출처가 있는 tok/s 수치가 없어 제시하지 않습니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qwen 추론에서 Alibaba Cloud가 RunPod보다 저렴합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '이 가이드에는 확인된 Alibaba Cloud PAI 가격이 없어 가격을 비교하지 않습니다. 각 업체의 최신 요금 페이지를 확인하십시오. 2026-11-27 확인 시 [RunPod](https://www.runpod.io/pricing)의 A40 48 GB는 커뮤니티 클라우드 $0.35/시간, 시큐어 클라우드 $0.59/시간이었습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '상시 가동 Qwen 서버는 전기를 얼마나 사용합니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '이 가이드는 소비 전력을 측정하지 않았습니다. 평균 소비 전력을 가정한 계산 예: $0.16/kWh에서 12~45W를 24/7(730시간) 사용하면 월 약 $1.40~5.30입니다. 190W 고정(예: 사양상 165W인 RTX 4060 Ti 16 GB에 mini PC 몫 25W를 가정해 더한 값)은 월 약 $22입니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'Self-hosted Qwen API를 ChatGPT 호환 애플리케이션과 함께 사용할 수 있습니까?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '대부분의 경우 가능합니다. Ollama는 서버 자체의 http://localhost:11434/v1에서 OpenAI 호환 API를 제공합니다(다른 기기에서는 인증이 적용된 게이트웨이 주소를 사용). LangChain, Continue.dev처럼 기본 URL을 지정할 수 있는 도구에 이 주소, 비어 있지 않은 임의의 API 키, Qwen 모델명을 입력하십시오. OpenAI API의 모든 기능이 지원되지는 않습니다.',
          },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen 로컬 배포 완전 가이드 2026: 프로덕션 서버 구축',
      description:
        'Qwen3 8B~72B 프로덕션 배포: Docker Compose API 서버, Multi-GPU 구성, 하드웨어 요구사항, 비용 참고.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/qwen-local-deployment-complete-guide-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-26',
      dateModified: '2026-11-27',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Advanced',
      about: [
        { '@type': 'Thing', name: 'Qwen 언어 모델' },
        { '@type': 'Thing', name: '로컬 LLM 배포' },
        { '@type': 'Thing', name: 'Docker GPU 추론' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'vLLM' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'Thing', name: 'Qwen2.5-72B' },
        { '@type': 'Thing', name: 'NVIDIA RTX 4090' },
      ],
    },
    howToSchema: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      inLanguage: 'ko',
      name: 'Docker로 Qwen을 프로덕션 API 서버로 배포하는 방법',
      step: [
        { '@type': 'HowToStep', name: 'Docker 및 Docker Compose 설치', position: 1 },
        { '@type': 'HowToStep', name: 'Ollama + Open WebUI가 포함된 docker-compose.yml 생성', position: 2 },
        { '@type': 'HowToStep', name: '컨테이너 환경에서 OLLAMA_HOST=0.0.0.0 설정', position: 3 },
        { '@type': 'HowToStep', name: 'docker exec를 통한 Qwen 모델 다운로드', position: 4 },
        { '@type': 'HowToStep', name: '기본 인증이 포함된 Nginx를 API 게이트웨이로 추가', position: 5 },
        { '@type': 'HowToStep', name: '재시작 정책을 unless-stopped로 설정', position: 6 },
      ],
    },
    relatedReading: {
      items: [
        '[Qwen 로컬 배포 가이드 — Ollama와 LM Studio로 시작하기](/ko/local-llms/qwen-local-deployment-guide-2026) — Qwen3 8B~72B 소비자 하드웨어별 단계별 가이드',
        '[로컬 LLM용 GPU 구매 가이드 2026](/ko/power-local-llm/best-gpu-buying-guide-local-llm-2026) — Qwen2.5-72B 및 프로덕션 Multi-GPU 구성을 위한 GPU 추천',
        '[Qwen 로컬 실행 — 빠른 시작 가이드](/ko/local-llms/run-qwen-locally-guide-2026) — 입문자용 설치',
      ],
    },
  },
}
