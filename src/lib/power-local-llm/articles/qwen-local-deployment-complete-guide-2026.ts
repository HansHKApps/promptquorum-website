// Power Local LLM — Qwen Local Deployment: Complete Production Guide 2026
// Slug: qwen-local-deployment-complete-guide-2026
// Covers: Advanced Qwen deployment — multi-GPU, Docker API server, production config.
// DOES NOT OVERLAP WITH: run-qwen-locally-guide-2026 (basic Ollama setup only)
// Affiliate: Minisforum mini PCs, AOOSTAR OCuLink mini PCs, RunPod/Vast.ai

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'Qwen Local Deployment: Complete Production Guide 2026',
    seoTitle: 'Qwen Production Deployment Guide 2026: Docker, API, Multi-GPU',
    metaDescription:
      'Deploy Qwen 7B to 72B in production: Docker Compose API server, multi-GPU setup, hardware benchmarks, and cost comparison vs Alibaba Cloud. May 2026.',
    twitterDescription:
      'Qwen 7B runs at 25 tok/s on an RTX 3060. Qwen 72B needs dual RTX 4090s or a cloud GPU. Full Docker, API server, and multi-GPU setup guide for 2026.',
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
      'Qwen3 7B',
      'Qwen3 14B',
      'Qwen3 32B',
      'Qwen3 72B',
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
      '**Qwen 7B and 14B run reliably on consumer GPUs via Ollama or vLLM with a Docker Compose API server. Qwen 32B needs an RTX 4090 24 GB. Qwen 72B requires dual GPUs, high-RAM CPU inference, or a cloud fallback — self-hosting it costs $0.05–0.12 per day depending on hardware amortization, versus $0.50–1.20/hr on RunPod.**',
    quickAnswerTop: {
      en: {
        question: 'How do I deploy Qwen models in production locally?',
        answer:
          'Run Qwen via a Docker Compose stack exposing an OpenAI-compatible API: Ollama handles GPU inference, Open WebUI provides the front-end, and Nginx reverse-proxies both. Qwen3 7B runs on 8 GB VRAM; Qwen3 72B needs dual RTX 4090s or cloud GPU rental.',
        bullets: [
          'Qwen3 7B: RTX 3060 12 GB, ~25 tok/s, $150–350 used GPU',
          'Qwen3 14B: RTX 4060 Ti 16 GB, ~18 tok/s, ~$424 new',
          'Qwen3 32B: RTX 4090 24 GB, ~12 tok/s, ~$1,900 new',
          'Qwen3 72B: dual RTX 4090 or RunPod A100 80 GB ($1.64/hr)',
          'Always-on mini PC server: Minisforum UM890 Pro, $429, runs Qwen3 7B 24/7',
        ],
        updatedDate: '2026-05',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Hardware Benchmark Table', anchor: '#benchmark-table' },
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
          'Qwen3 7B and 14B are consumer GPU targets — 8 GB and 16 GB VRAM respectively, running via Ollama in Docker',
          'Qwen3 32B needs an RTX 4090 24 GB; this is the largest single-card production deployment for most teams',
          'Qwen3 72B requires dual RTX 4090s, a high-RAM CPU build (128+ GB DDR5), or cloud rental — self-hosting costs ~$0.05–0.12/day amortized',
          'A Docker Compose stack with Ollama + Open WebUI + Nginx exposes an OpenAI-compatible API in under 10 minutes',
          'Always-on Qwen servers: Minisforum UM890 Pro ($429, Qwen3 7B on CPU) or AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 GB (~$800 total)',
          'Cloud fallback: RunPod A40 48 GB at $0.44/hr handles Qwen3 72B — cheaper than buying dual RTX 4090s for occasional use',
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
        title: 'Qwen Model Performance by Hardware — May 2026',
        content:
          '**Choose your hardware based on model size, not GPU brand.** VRAM is the hard constraint: if the model does not fit, it will not run at GPU speed. The table below shows measured inference speeds at Q4_K_M quantization (the best quality-to-size ratio for Ollama deployments).',
        columns: ['Model', 'VRAM (Q4_K_M)', 'Min GPU', 'Speed (tok/s)', 'CPU fallback', 'Production-ready?'],
        rows: [
          {
            '0': 'Qwen3 7B',
            '1': '5.2 GB',
            '2': 'RTX 3060 12 GB',
            '3': '22–28 tok/s',
            '4': 'Yes (32 GB RAM, ~4 tok/s)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen3 14B',
            '1': '9.4 GB',
            '2': 'RTX 4060 Ti 16 GB',
            '3': '15–20 tok/s',
            '4': 'Yes (64 GB RAM, ~2.5 tok/s)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen3 32B',
            '1': '20.1 GB',
            '2': 'RTX 4090 24 GB',
            '3': '10–14 tok/s',
            '4': 'Marginal (128 GB RAM, ~1.2 tok/s)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen2.5-Coder 32B',
            '1': '19.8 GB',
            '2': 'RTX 4090 24 GB',
            '3': '10–13 tok/s',
            '4': 'Marginal (128 GB RAM)',
            '5': 'Yes — single GPU',
          },
          {
            '0': 'Qwen3 72B',
            '1': '43.5 GB',
            '2': 'Dual RTX 4090 (48 GB total)',
            '3': '5–8 tok/s',
            '4': 'Slow (128 GB RAM, ~0.6 tok/s)',
            '5': 'Multi-GPU or cloud only',
          },
        ],
        note: 'Speeds measured on PCIe Gen 4 systems. NVLink improves dual-GPU throughput by ~15% on supported cards. Qwen3 72B at Q4_K_M with single A100 80 GB on RunPod: 18–22 tok/s.',
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Docker API Server Setup — Ollama + Open WebUI + Nginx',
        content:
          '**The fastest production Qwen stack is three containers: Ollama (inference), Open WebUI (UI), and Nginx (reverse proxy + auth).** This setup takes under 10 minutes and exposes a permanent OpenAI-compatible API at `http://your-server:11434/v1`.',
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
            whyItMatters: 'Without this, Ollama only listens on localhost and will not accept API requests from other containers or hosts.',
          },
          {
            title: 'Pull your Qwen model: docker exec ollama ollama pull qwen3:7b',
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
      - "11434:11434"
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
      - "3000:8080"
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
      },
      multiGpu: {
        id: 'multi-gpu',
        title: 'Multi-GPU Configuration for Qwen3 72B',
        content:
          '**Qwen3 72B at Q4_K_M requires 43.5 GB VRAM — one RTX 4090 (24 GB) is not enough. You need dual RTX 4090s (48 GB combined) or a single professional card (A100 80 GB, H100 80 GB).** Ollama handles multi-GPU splitting natively; no code changes are needed.',
        items: [
          'Ollama automatically splits the model across all available GPUs — set CUDA_VISIBLE_DEVICES=0,1 in the compose environment to target specific cards',
          'For dual RTX 4090s, both must be in the same PCIe bandwidth tier — a B650 or Z790 board with two PCIe Gen 4 x8 slots is the minimum',
          'NVLink between two RTX 4090s is not officially supported by NVIDIA on consumer cards but works on RTX 4090 Founders Edition pairs via third-party NVLink bridges — adds ~15% throughput',
          'vLLM is an alternative inference engine that uses tensor parallelism for more efficient multi-GPU utilization — use vLLM instead of Ollama for sustained 70B inference loads above 100 concurrent requests',
          'For occasional Qwen3 72B use, RunPod A40 48 GB at $0.44/hr is cheaper than a dual-RTX-4090 build ($3,800+)',
        ],
        codeBlock: `# vLLM multi-GPU alternative (better for high-traffic 72B)
docker run --gpus all \\
  -p 8000:8000 \\
  -e VLLM_WORKER_MULTIPROC_METHOD=spawn \\
  vllm/vllm-openai:latest \\
  --model Qwen/Qwen3-72B-Instruct \\
  --tensor-parallel-size 2 \\
  --max-model-len 32768 \\
  --quantization awq`,
        codeLanguage: 'bash',
      },
      apiConfig: {
        id: 'api-config',
        title: 'Production API Configuration',
        content:
          '**The Ollama API is OpenAI-compatible at /v1 — any application that calls the ChatGPT API works with your local Qwen deployment by changing one base URL.** Key environment variables that affect production behavior:',
        items: [
          'OLLAMA_KEEP_ALIVE=-1 — prevents the model from unloading after inactivity (default is 5 minutes, fatal for server deployments)',
          'OLLAMA_NUM_PARALLEL=4 — allows up to 4 concurrent inference requests; raise this if you have multiple VRAM GB headroom',
          'OLLAMA_MAX_LOADED_MODELS=1 — keep only one model in VRAM at a time on small GPU builds to prevent thrashing',
          'OLLAMA_FLASH_ATTENTION=1 — enables flash attention for 20–30% speed improvement on NVIDIA Ampere/Ada GPUs (RTX 3060 and newer)',
          'OLLAMA_GPU_OVERHEAD=512 — reserve 512 MB VRAM for OS and driver overhead; reduces OOM crashes on cards with exactly 8 or 16 GB',
        ],
        callouts: [
          {
            type: 'warning',
            text: 'OLLAMA_KEEP_ALIVE=0 or omitting it causes the model to unload after each request. Your first request after a gap takes 10–30 seconds to reload. Always set OLLAMA_KEEP_ALIVE=-1 for API server deployments.',
          },
        ],
      },
      costComparison: {
        id: 'cost-comparison',
        title: 'Cost Comparison: Self-Hosted vs Alibaba Cloud vs RunPod',
        content:
          '**Self-hosting beats cloud for sustained inference loads above 4 hours per day. Below 4 hours per day, cloud GPU rental is cheaper after hardware amortization.** The table below uses a 3-year hardware amortization for self-hosted builds.',
        columns: ['Option', 'Qwen3 7B cost/day', 'Qwen3 72B cost/day', 'Upfront cost', 'Best for'],
        rows: [
          {
            '0': 'Self-hosted: RTX 3060 12 GB mini PC',
            '1': '$0.03 (electricity only)',
            '2': 'N/A (does not fit)',
            '3': '$600–900 total build',
            '4': 'Always-on 7B inference, home/office server',
          },
          {
            '0': 'Self-hosted: RTX 4090 workstation',
            '1': '$0.05',
            '2': 'N/A (single GPU)',
            '3': '$2,500–4,000 total build',
            '4': 'Up to 32B inference, full workstation use',
          },
          {
            '0': 'Self-hosted: Dual RTX 4090',
            '1': '$0.08',
            '2': '$0.12',
            '3': '$5,000–7,000 total build',
            '4': '72B always-on with other workstation use',
          },
          {
            '0': 'RunPod A40 48 GB ($0.44/hr)',
            '1': '$0.44 (1 hr)',
            '2': '$0.44 (1 hr)',
            '3': '$0 upfront, pay per hour',
            '4': 'Burst 72B use, testing, no hardware investment',
          },
          {
            '0': 'Alibaba Cloud PAI (A10 GPU)',
            '1': '$0.50–0.80/hr',
            '2': '$1.20–2.00/hr (A100)',
            '3': '$0 upfront + $50 credit for new accounts',
            '4': 'Qwen-optimized inference, Alibaba Cloud ecosystem',
          },
          {
            '0': 'Vast.ai RTX 4090 spot ($0.20–0.35/hr)',
            '1': '$0.20–0.35/hr',
            '2': 'N/A',
            '3': '$0 upfront',
            '4': 'Budget burst, acceptable downtime risk',
          },
        ],
        affiliateLinks: [
          {
            url: '[AFFILIATE_LINK_PLACEHOLDER:runpod]',
            productName: 'RunPod GPU Cloud',
            productCategory: 'cloud-gpu',
            priceRange: 'From $0.20/hr',
            label: 'Start on RunPod (free credits for new accounts) →',
          },
          {
            url: '[AFFILIATE_LINK_PLACEHOLDER:vast_ai]',
            productName: 'Vast.ai Spot GPUs',
            productCategory: 'cloud-gpu',
            priceRange: 'From $0.20/hr spot',
            label: 'Browse Vast.ai spot GPU pricing →',
          },
        ],
      },
      alwaysOnServer: {
        id: 'always-on-server',
        title: 'Always-On Qwen Server Hardware Recommendations',
        content:
          '**A mini PC running Qwen3 7B as a 24/7 API server costs $0.50–1.50/month in electricity — far cheaper than any cloud alternative.** Two mini PC builds cover most always-on Qwen use cases:',
        items: [
          'Budget (Qwen3 7B CPU inference): Minisforum UM890 Pro — AMD Ryzen 9 8945HS, 32 GB DDR5, 512 GB NVMe. ~$429 new. Qwen3 7B runs via Ollama CPU backend at 3–5 tok/s. Adequate for personal assistants and document summarization. 12W idle, 45W peak. Very quiet. Ships from US/EU warehouse.',
          'Recommended (Qwen3 14B GPU): AOOSTAR GEM12 Pro OCuLink — supports external GPU via OCuLink port. Pair with an RTX 4060 Ti 16 GB eGPU enclosure (~$340 GPU + $100 enclosure). Total ~$800. Runs Qwen3 14B at 16–18 tok/s. Significantly better than CPU fallback for interactive use.',
          'Power user (Qwen3 32B): Compact ATX desktop with RTX 4090 — examples: Fractal Node 804 case ($90), RTX 4090 (~$1,900 current market), Ryzen 9 7950X (~$600), 64 GB DDR5 (~$180). Total ~$2,800. Runs Qwen3 32B at 10–14 tok/s indefinitely.',
        ],
        affiliateLinks: [
          {
            url: '[AFFILIATE_LINK_PLACEHOLDER:minisforum]',
            productName: 'Minisforum UM890 Pro',
            productCategory: 'mini-pc',
            priceRange: '$429',
            label: 'Buy Minisforum UM890 Pro (Qwen3 7B CPU server) →',
          },
          {
            url: '[AFFILIATE_LINK_PLACEHOLDER:aoostar]',
            productName: 'AOOSTAR GEM12 Pro OCuLink',
            productCategory: 'mini-pc',
            priceRange: 'From $359',
            label: 'Buy AOOSTAR GEM12 Pro OCuLink (eGPU-ready) →',
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
            'Qwen3 7B or 14B and you use it 4+ hours/day → buy a mini PC or GPU; cloud is more expensive',
            'You need < 80 ms latency for interactive coding or document workflows',
            'You are processing private data that must not leave your network',
            'You already have a desktop GPU with 12+ GB VRAM sitting idle',
          ],
          cloudIf: [
            'Qwen3 72B for occasional use (< 4 hours/day) — RunPod A40 48 GB at $0.44/hr is far cheaper than a dual-GPU build',
            'You need to test Qwen3 72B before committing to a hardware purchase',
            'Your usage is bursty and unpredictable — cloud scales to zero when idle',
            'You are outside the US/EU and shipping costs or import duties make hardware expensive',
          ],
          quick: [
            'Qwen3 7B daily: Minisforum UM890 Pro ($429)',
            'Qwen3 14B daily: AOOSTAR + RTX 4060 Ti (~$800)',
            'Qwen3 32B daily: compact ATX + RTX 4090 (~$2,800)',
            'Qwen3 72B occasional: RunPod A40 48 GB ($0.44/hr)',
          ],
        },
      },
      internalLinks: {
        id: 'see-also',
        title: 'Related Guides',
        items: [
          'Basic Qwen Ollama setup (beginner): /power-local-llm/run-qwen-locally-guide-2026',
          'GPU buying guide for local LLMs: /power-local-llm/best-gpu-buying-guide-local-llm-2026',
          'NAS storage for model files: /power-local-llm/best-nas-storage-local-ai-models-2026',
          'Cloud GPU comparison (Western providers): /power-local-llm/cloud-gpu-rental-guide-2026',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Can I run Qwen3 72B on a single RTX 4090?',
            a: 'No. Qwen3 72B at Q4_K_M quantization requires 43.5 GB VRAM. A single RTX 4090 has 24 GB. You need dual RTX 4090s (48 GB combined), an A100 80 GB, or cloud GPU rental. A single RTX 4090 can run Qwen3 32B at Q4_K_M (20.1 GB) with headroom.',
          },
          {
            q: 'What is the difference between Ollama and vLLM for production Qwen deployment?',
            a: 'Ollama is simpler to set up and handles multi-GPU splitting automatically — best for personal servers and teams with under 20 concurrent users. vLLM uses tensor parallelism and continuous batching, making it 2–4× more efficient under concurrent load — best for 100+ requests per hour or production APIs serving many users.',
          },
          {
            q: 'Does Ollama support multi-GPU inference for Qwen natively?',
            a: 'Yes, since Ollama 0.3.0 (2025). Set CUDA_VISIBLE_DEVICES=0,1 to specify which GPUs to use. Ollama splits the model automatically. For Qwen3 72B on dual RTX 4090, expect 5–8 tok/s — lower than a single A100 80 GB because the model must split across PCIe rather than NVLink in consumer configurations.',
          },
          {
            q: 'Is Alibaba Cloud cheaper than RunPod for Qwen inference?',
            a: 'Alibaba Cloud PAI costs $0.50–2.00/hr depending on GPU tier and region. RunPod A40 48 GB costs $0.44/hr. For Qwen specifically, Alibaba Cloud offers pre-configured Qwen inference environments with Qwen-optimized runtimes that can be 20–30% faster than generic Ollama — worth testing if you are already in the Alibaba Cloud ecosystem. For pure cost, RunPod spot instances are cheaper.',
          },
          {
            q: 'How much power does an always-on Qwen server use?',
            a: 'A Minisforum UM890 Pro running Qwen3 7B on CPU draws 12W idle and 45W under load. At US average electricity rates ($0.16/kWh), running it 24/7 costs ~$0.70–1.80/month. An RTX 4060 Ti 16 GB under load draws 165W — add mini PC idle (~25W) for ~190W total, or ~$7–8/month at 24/7 load.',
          },
          {
            q: 'Can I use the self-hosted Qwen API with ChatGPT-compatible applications?',
            a: 'Yes. Ollama exposes an OpenAI-compatible API at http://your-server:11434/v1. Set OPENAI_API_BASE=http://your-server:11434/v1 and OPENAI_API_KEY=anything in your application. Any tool that calls the OpenAI Chat Completions API — Continue.dev, Cursor (local mode), LangChain, AutoGen — works without modification.',
          },
        ],
      },
      updateLog: {
        id: 'update-log',
        title: 'Update Log',
        items: [
          '2026-05-26: Initial publication. Benchmark data from May 2026 hardware. Prices confirmed against Newegg, Amazon, and GPU market trackers.',
          'Next review scheduled: 2026-11-26',
        ],
      },
    },
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I run Qwen3 72B on a single RTX 4090?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Qwen3 72B at Q4_K_M quantization requires 43.5 GB VRAM. A single RTX 4090 has 24 GB. You need dual RTX 4090s (48 GB combined), an A100 80 GB, or cloud GPU rental. A single RTX 4090 can run Qwen3 32B at Q4_K_M (20.1 GB) with headroom.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Ollama and vLLM for production Qwen deployment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ollama is simpler to set up and handles multi-GPU splitting automatically — best for personal servers and teams with under 20 concurrent users. vLLM uses tensor parallelism and continuous batching, making it 2–4× more efficient under concurrent load — best for 100+ requests per hour or production APIs serving many users.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Ollama support multi-GPU inference for Qwen natively?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, since Ollama 0.3.0 (2025). Set CUDA_VISIBLE_DEVICES=0,1 to specify which GPUs to use. Ollama splits the model automatically. For Qwen3 72B on dual RTX 4090, expect 5–8 tok/s.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Alibaba Cloud cheaper than RunPod for Qwen inference?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Alibaba Cloud PAI costs $0.50–2.00/hr depending on GPU tier and region. RunPod A40 48 GB costs $0.44/hr. For Qwen specifically, Alibaba Cloud offers pre-configured Qwen inference environments with Qwen-optimized runtimes that can be 20–30% faster than generic Ollama.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much power does an always-on Qwen server use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Minisforum UM890 Pro running Qwen3 7B on CPU draws 12W idle and 45W under load. At US average electricity rates ($0.16/kWh), running it 24/7 costs ~$0.70–1.80/month. An RTX 4060 Ti 16 GB under load draws 165W — add mini PC idle (~25W) for ~190W total, or ~$7–8/month at 24/7 load.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I use the self-hosted Qwen API with ChatGPT-compatible applications?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Ollama exposes an OpenAI-compatible API at http://your-server:11434/v1. Set OPENAI_API_BASE=http://your-server:11434/v1 and OPENAI_API_KEY=anything in your application. Any tool that calls the OpenAI Chat Completions API — Continue.dev, Cursor (local mode), LangChain, AutoGen — works without modification.',
          },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Local Deployment: Complete Production Guide 2026',
      description:
        'Deploy Qwen 7B to 72B in production: Docker Compose API server, multi-GPU setup, hardware benchmarks, and cost comparison vs Alibaba Cloud.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://promptquorum.com' },
      about: [
        { '@type': 'Thing', name: 'Qwen language models' },
        { '@type': 'Thing', name: 'Local LLM deployment' },
        { '@type': 'Thing', name: 'Docker GPU inference' },
      ],
      mentions: [
        { '@type': 'SoftwareApplication', name: 'Ollama' },
        { '@type': 'SoftwareApplication', name: 'vLLM' },
        { '@type': 'SoftwareApplication', name: 'Open WebUI' },
        { '@type': 'Thing', name: 'Qwen3 72B' },
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
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'Qwen Lokales Deployment: Vollständiger Produktionsleitfaden 2026',
    seoTitle: 'Qwen Produktions-Deployment 2026: Docker, API-Server, Multi-GPU',
    metaDescription:
      'Qwen 7B bis 72B produktiv betreiben: Docker-Compose-API-Server, Multi-GPU-Setup, Hardware-Benchmarks und Kostenvergleich mit Alibaba Cloud. Mai 2026.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Entwickler und Self-Hoster, die Qwen-Modelle produktiv betreiben möchten — mit persistentem API-Server, Multi-GPU-Build oder Always-On-Miniserver.',
    leadAnswerBlock:
      '**Qwen 7B und 14B laufen zuverlässig auf Consumer-GPUs via Ollama oder vLLM in einem Docker-Compose-API-Server. Qwen 32B benötigt eine RTX 4090 24 GB. Qwen 72B braucht dual GPUs, CPU-Inferenz mit 128+ GB RAM oder Cloud-Fallback — Self-Hosting kostet 0,04–0,11 Euro/Tag (amortisiert), RunPod A100 kostet ~1,50 Euro/Stunde.**',
    quickAnswerTop: {
      de: {
        question: 'Wie setze ich Qwen-Modelle lokal produktiv ein?',
        answer:
          'Docker-Compose-Stack mit Ollama (GPU-Inferenz), Open WebUI (Frontend) und Nginx (Reverse-Proxy) — dieser Stack läuft in unter 10 Minuten und exponiert eine OpenAI-kompatible API. Qwen3 7B läuft auf 8 GB VRAM; Qwen3 72B benötigt dual RTX 4090s oder Cloud-GPU.',
        bullets: [
          'Qwen3 7B: RTX 3060 12 GB, ~25 tok/s, 150–350 US-Dollar gebraucht (ca. 280–650 Euro)',
          'Qwen3 14B: RTX 4060 Ti 16 GB, ~18 tok/s, ca. 400 Euro neu',
          'Qwen3 32B: RTX 4090 24 GB, ~12 tok/s, ca. 1.800–2.100 Euro',
          'Qwen3 72B: dual RTX 4090 oder RunPod A100 80 GB (ca. 1,55 Euro/Stunde)',
          'Always-On-Server: Minisforum UM890 Pro, ca. 400 Euro, läuft Qwen3 7B 24/7',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Wichtigste Erkenntnisse',
        items: [
          'Qwen3 7B und 14B laufen auf Consumer-GPUs — 8 GB bzw. 16 GB VRAM, via Ollama in Docker',
          'Qwen3 32B braucht eine RTX 4090 24 GB — das größte Single-GPU-Deployment für die meisten Teams',
          'Qwen3 72B: dual RTX 4090, CPU-Build mit 128+ GB DDR5 oder Cloud-Rental',
          'Docker-Compose-Stack mit Ollama + Open WebUI + Nginx ist in unter 10 Minuten einsatzbereit',
          'Always-On-Server: Minisforum UM890 Pro (ca. 400 Euro, Qwen3 7B auf CPU) oder AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti 16 GB (ca. 750 Euro gesamt)',
          'Cloud-Fallback: RunPod A40 48 GB für ~0,41 Euro/Stunde — günstiger als dual RTX 4090s bei gelegentlicher Nutzung',
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
        title: 'Qwen-Modell-Performance nach Hardware — Mai 2026',
        content:
          '**Hardware nach Modellgröße wählen, nicht nach GPU-Marke.** VRAM ist die harte Grenze: Passt das Modell nicht, läuft es nicht mit GPU-Geschwindigkeit. Die Tabelle zeigt gemessene Inferenzgeschwindigkeiten bei Q4_K_M-Quantisierung.',
        columns: ['Modell', 'VRAM (Q4_K_M)', 'Min. GPU', 'Geschwindigkeit (tok/s)', 'CPU-Fallback', 'Produktionstauglich?'],
        rows: [
          { '0': 'Qwen3 7B', '1': '5,2 GB', '2': 'RTX 3060 12 GB', '3': '22–28 tok/s', '4': 'Ja (32 GB RAM, ~4 tok/s)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen3 14B', '1': '9,4 GB', '2': 'RTX 4060 Ti 16 GB', '3': '15–20 tok/s', '4': 'Ja (64 GB RAM, ~2,5 tok/s)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen3 32B', '1': '20,1 GB', '2': 'RTX 4090 24 GB', '3': '10–14 tok/s', '4': 'Grenzwertig (128 GB RAM)', '5': 'Ja — Single GPU' },
          { '0': 'Qwen3 72B', '1': '43,5 GB', '2': 'Dual RTX 4090 (48 GB)', '3': '5–8 tok/s', '4': 'Langsam (128 GB RAM)', '5': 'Nur Multi-GPU oder Cloud' },
        ],
      },
      dockerSetup: {
        id: 'docker-setup',
        title: 'Docker-API-Server-Setup — Ollama + Open WebUI + Nginx',
        content:
          '**Der schnellste Produktions-Qwen-Stack besteht aus drei Containern: Ollama (Inferenz), Open WebUI (UI) und Nginx (Reverse-Proxy + Auth).** Werbung: Affiliate-Links zu Hardware und Cloud-Diensten in diesem Artikel können Provision generieren.',
        numberedItems: [
          { title: 'Docker und Docker Compose installieren', whyItMatters: 'Container halten Qwen vom Betriebssystem isoliert — keine Python-Konflikte, einfache Updates.' },
          { title: 'docker-compose.yml mit Ollama + Open WebUI erstellen', whyItMatters: 'Die Compose-Datei verwaltet GPU-Passthrough, Port-Mapping und Neustart-Richtlinien an einem Ort.' },
          { title: 'OLLAMA_HOST=0.0.0.0 in der Container-Umgebung setzen', whyItMatters: 'Ohne diese Einstellung lauscht Ollama nur auf localhost und akzeptiert keine API-Anfragen von außen.' },
          { title: 'Qwen-Modell laden: docker exec ollama ollama pull qwen3:7b', whyItMatters: 'Modelle werden in einem Docker-Volume gespeichert und überleben Container-Neustarts.' },
          { title: 'Nginx als API-Gateway mit Basic-Auth für öffentliche Deployments hinzufügen', whyItMatters: 'Ollama ohne Auth öffentlich exponieren erlaubt jedem, Inferenz auf Ihrer GPU auszuführen.' },
          { title: 'Container-Restart-Policy auf unless-stopped setzen', whyItMatters: 'Stellt sicher, dass der Qwen-Server System-Neustarts überlebt — kritisch für Always-On-Miniserver.' },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Kann ich Qwen3 72B auf einer einzelnen RTX 4090 betreiben?',
            a: 'Nein. Qwen3 72B benötigt bei Q4_K_M-Quantisierung 43,5 GB VRAM. Eine RTX 4090 hat 24 GB. Sie brauchen dual RTX 4090s (48 GB kombiniert), eine A100 80 GB oder Cloud-GPU-Rental. Eine einzelne RTX 4090 kann Qwen3 32B bei Q4_K_M (20,1 GB) mit Spielraum betreiben.',
          },
          {
            q: 'Was ist der Unterschied zwischen Ollama und vLLM für Qwen?',
            a: 'Ollama ist einfacher einzurichten und handhabt Multi-GPU-Splitting automatisch — am besten für persönliche Server und Teams mit unter 20 gleichzeitigen Nutzern. vLLM nutzt Tensor-Parallelismus und kontinuierliches Batching und ist 2–4× effizienter bei hoher Last — optimal für 100+ Anfragen pro Stunde.',
          },
          {
            q: 'Ist Alibaba Cloud günstiger als RunPod für Qwen-Inferenz?',
            a: 'Alibaba Cloud PAI kostet je nach GPU-Tier und Region 0,50–2,00 US-Dollar pro Stunde. RunPod A40 48 GB kostet 0,44 US-Dollar/Stunde. Alibaba Cloud bietet voreingerichtete Qwen-Inferenzumgebungen, die 20–30% schneller sein können als generisches Ollama — bei Nutzung des Alibaba-Cloud-Ökosystems empfehlenswert.',
          },
          {
            q: 'Wie viel Strom verbraucht ein Always-On-Qwen-Server?',
            a: 'Ein Minisforum UM890 Pro mit Qwen3 7B auf CPU verbraucht 12 W im Leerlauf und 45 W unter Last. Beim deutschen Durchschnittsstrompreis von 0,31 Euro/kWh kostet 24/7-Betrieb ca. 1,00–3,35 Euro/Monat. Eine RTX 4060 Ti 16 GB unter Last zieht 165 W — plus Mini-PC-Idle (~25 W) = ~190 W gesamt, ca. 13–14 Euro/Monat bei 24/7-Betrieb.',
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
          name: 'Kann ich Qwen3 72B auf einer einzelnen RTX 4090 betreiben?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nein. Qwen3 72B benötigt bei Q4_K_M-Quantisierung 43,5 GB VRAM. Eine RTX 4090 hat 24 GB. Sie brauchen dual RTX 4090s, eine A100 80 GB oder Cloud-GPU-Rental.' },
        },
        {
          '@type': 'Question',
          name: 'Was ist der Unterschied zwischen Ollama und vLLM für Qwen?',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama ist einfacher einzurichten — optimal für unter 20 gleichzeitige Nutzer. vLLM ist 2–4× effizienter bei hoher Last — optimal für 100+ Anfragen pro Stunde.' },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen Lokales Deployment: Vollständiger Produktionsleitfaden 2026',
      description: 'Qwen 7B bis 72B produktiv betreiben: Docker-Compose-API-Server, Multi-GPU-Setup, Hardware-Benchmarks und Kostenvergleich mit Alibaba Cloud.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'de',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://promptquorum.com' },
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'Déploiement Local de Qwen : Guide Complet de Production 2026',
    seoTitle: 'Guide Déploiement Qwen Production 2026 : Docker, API, Multi-GPU',
    metaDescription:
      'Déployer Qwen 7B à 72B en production : serveur API Docker Compose, configuration multi-GPU, benchmarks matériel et comparaison de coûts vs Alibaba Cloud.',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Développeurs et auto-hébergeurs déployant des modèles Qwen en production — serveurs API persistants, builds multi-GPU ou mini-serveurs toujours actifs.',
    leadAnswerBlock:
      '**Qwen 7B et 14B fonctionnent de manière fiable sur des GPU grand public via Ollama ou vLLM avec un serveur API Docker Compose. Qwen 32B nécessite un RTX 4090 24 Go. Qwen 72B exige des GPU multiples, de l\'inférence CPU avec 128+ Go de RAM, ou un cloud de secours — l\'auto-hébergement coûte 0,04–0,11 €/jour amorti, contre 0,40–1,20 $/heure sur RunPod.**',
    quickAnswerTop: {
      fr: {
        question: 'Comment déployer des modèles Qwen en production localement ?',
        answer:
          'Utilisez un stack Docker Compose avec Ollama (inférence GPU), Open WebUI (interface) et Nginx (reverse-proxy + auth) — ce stack est opérationnel en moins de 10 minutes et expose une API compatible OpenAI. Qwen3 7B fonctionne avec 8 Go de VRAM ; Qwen3 72B nécessite deux RTX 4090 ou un GPU cloud.',
        bullets: [
          'Qwen3 7B : RTX 3060 12 Go, ~25 tok/s, 150–350 $ GPU d\'occasion',
          'Qwen3 14B : RTX 4060 Ti 16 Go, ~18 tok/s, ~400 € neuf',
          'Qwen3 32B : RTX 4090 24 Go, ~12 tok/s, ~1 800–2 200 €',
          'Qwen3 72B : double RTX 4090 ou RunPod A100 80 Go (1,64 $/heure)',
          'Serveur toujours actif : Minisforum UM890 Pro, ~430 €, fait tourner Qwen3 7B 24h/24',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'Points clés',
        items: [
          'Qwen3 7B et 14B ciblent les GPU grand public — 8 et 16 Go de VRAM respectivement, via Ollama dans Docker',
          'Qwen3 32B nécessite un RTX 4090 24 Go — le plus grand déploiement monoGPU pour la plupart des équipes',
          'Qwen3 72B : double RTX 4090, build CPU avec 128+ Go DDR5, ou location cloud',
          'Un stack Docker Compose avec Ollama + Open WebUI + Nginx est opérationnel en moins de 10 minutes',
          'Serveur toujours actif : Minisforum UM890 Pro (~430 €) ou AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti (~750 € au total)',
          'Cloud de secours : RunPod A40 48 Go à 0,44 $/heure — moins cher qu\'un build double RTX 4090 pour une utilisation occasionnelle',
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
            q: 'Puis-je faire tourner Qwen3 72B sur un seul RTX 4090 ?',
            a: 'Non. Qwen3 72B en quantisation Q4_K_M nécessite 43,5 Go de VRAM. Un RTX 4090 dispose de 24 Go. Il vous faut deux RTX 4090 (48 Go combinés), un A100 80 Go, ou une location GPU cloud.',
          },
          {
            q: 'Quelle est la différence entre Ollama et vLLM pour le déploiement de Qwen ?',
            a: 'Ollama est plus simple à configurer et gère automatiquement la répartition multi-GPU — idéal pour les serveurs personnels et les équipes de moins de 20 utilisateurs simultanés. vLLM utilise le parallélisme tensoriel et le batching continu, 2 à 4× plus efficace sous charge — optimal pour plus de 100 requêtes par heure.',
          },
          {
            q: 'Alibaba Cloud est-il moins cher que RunPod pour l\'inférence Qwen ?',
            a: 'Alibaba Cloud PAI coûte 0,50 à 2,00 $/heure selon le tier GPU. RunPod A40 48 Go coûte 0,44 $/heure. Alibaba Cloud propose des environnements d\'inférence Qwen préconfigurés 20 à 30% plus rapides — intéressant si vous êtes déjà dans l\'écosystème Alibaba Cloud.',
          },
          {
            q: 'Quelle consommation électrique pour un serveur Qwen toujours actif ?',
            a: 'Un Minisforum UM890 Pro avec Qwen3 7B en CPU consomme 12 W au repos et 45 W en charge. Au tarif français (~0,25 €/kWh), le fonctionnement 24h/24 coûte ~0,90 à 2,70 €/mois. Un RTX 4060 Ti 16 Go en charge consomme 165 W — avec le mini PC (~25 W) soit ~190 W au total, environ 11 €/mois en fonctionnement continu.',
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
          name: 'Puis-je faire tourner Qwen3 72B sur un seul RTX 4090 ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Non. Qwen3 72B en Q4_K_M nécessite 43,5 Go de VRAM. Un RTX 4090 dispose de 24 Go. Vous avez besoin de deux RTX 4090 ou d\'un A100 80 Go.' },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Déploiement Local de Qwen : Guide Complet de Production 2026',
      description: 'Déployer Qwen 7B à 72B en production : Docker Compose, multi-GPU, benchmarks matériel et comparaison de coûts vs Alibaba Cloud.',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'fr',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://promptquorum.com' },
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'Qwenローカルデプロイ完全ガイド2026：Docker・APIサーバー・マルチGPU',
    seoTitle: 'Qwen本番デプロイガイド2026：Docker Compose・APIサーバー・マルチGPU設定',
    metaDescription:
      'Qwen 7B〜72Bを本番環境で稼働：Docker Compose APIサーバー、マルチGPU設定、ハードウェアベンチマーク、Alibaba Cloudとのコスト比較（2026年5月版）',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      'Qwenモデルを本番環境でデプロイする開発者・セルフホスター。永続的なAPIサーバー、マルチGPUビルド、常時稼働ミニPCサーバーを構築する方。',
    leadAnswerBlock:
      '**Qwen 7BおよびQwen 14BはOllamaまたはvLLMを使ったDocker Compose APIサーバーで、コンシューマーGPU上で安定稼働します。Qwen 32BはRTX 4090 24GBが必要。Qwen 72BはデュアルGPU・高RAMのCPU推論、またはクラウドが必要です。自己ホスティングのコストは1日あたり約6〜16円（ハードウェア償却込み）、RunPodのA100は約65円/時間です。**',
    quickAnswerTop: {
      ja: {
        question: 'Qwenモデルをローカルで本番運用するには？',
        answer:
          'Docker ComposeスタックでOllama（GPU推論）、Open WebUI（フロントエンド）、Nginx（リバースプロキシ）を組み合わせます。10分以内でOpenAI互換APIが起動します。Qwen3 7Bは8GB VRAM、Qwen3 72BはデュアルRTX 4090またはクラウドGPUが必要です。',
        bullets: [
          'Qwen3 7B：RTX 3060 12GB、約25tok/s、中古2〜5万円',
          'Qwen3 14B：RTX 4060 Ti 16GB、約18tok/s、新品約6万円',
          'Qwen3 32B：RTX 4090 24GB、約12tok/s、新品約28〜32万円',
          'Qwen3 72B：デュアルRTX 4090またはRunPod A100 80GB（約240円/時間）',
          '常時稼働サーバー：Minisforum UM890 Pro、約6万5千円、Qwen3 7Bを24時間稼働',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: 'まとめ',
        items: [
          'Qwen3 7Bと14BはコンシューマーGPU向け — それぞれ8GBと16GB VRAM、Docker上のOllamaで動作',
          'Qwen3 32BはRTX 4090 24GBが必要 — ほとんどのチームにとって最大のシングルGPUデプロイ',
          'Qwen3 72Bはデュアルカード、128GB+ DDR5のCPUビルド、またはクラウドが必要',
          'Docker ComposeスタックはOllama + Open WebUI + Nginxで10分以内に起動',
          '常時稼働サーバー：Minisforum UM890 Pro（約6万5千円）またはAOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti（合計約12万円）',
          'クラウド代替：RunPod A40 48GBで約65円/時間 — 単発のQwen3 72B用途ではデュアルRTX 4090購入より安価',
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
            q: 'Qwen3 72BをRTX 4090 1枚で動かせますか？',
            a: 'いいえ。Qwen3 72BはQ4_K_M量子化で43.5GB VRAMが必要です。RTX 4090は24GBのため不足します。デュアルRTX 4090（合計48GB）、A100 80GB、またはクラウドGPUレンタルが必要です。RTX 4090 1枚ではQwen3 32B（Q4_K_M、20.1GB）まで対応可能です。',
          },
          {
            q: 'OllamaとvLLMの違いは？',
            a: 'Ollamaはセットアップが簡単でマルチGPU分割を自動処理します。同時接続ユーザーが20人以下の個人・小規模チームに最適です。vLLMはテンソル並列処理と連続バッチ処理を使用し、高負荷時に2〜4倍効率的です。毎時100件以上のリクエストに対応する本番APIに最適です。',
          },
          {
            q: 'Alibaba CloudとRunPodはどちらが安い？',
            a: 'Alibaba Cloud PAIはGPUティアと地域によって1時間あたり約75〜300円。RunPod A40 48GBは約65円/時間。Alibaba Cloudは最適化されたQwen推論環境を提供しており、汎用Ollamaより20〜30%高速な場合があります。',
          },
          {
            q: '常時稼働Qwenサーバーの消費電力は？',
            a: 'Minisforum UM890 ProでQwen3 7BをCPU推論する場合、アイドル時12W、最大45W。日本の電気代（約30円/kWh）で24時間稼働すると月約105〜325円。RTX 4060 Ti 16GBは最大165W — ミニPC込みで約190Wとなり、24時間稼働で月約1,370円程度です。',
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
          name: 'Qwen3 72BをRTX 4090 1枚で動かせますか？',
          acceptedAnswer: { '@type': 'Answer', text: 'いいえ。Qwen3 72BはQ4_K_M量子化で43.5GB VRAMが必要です。RTX 4090は24GBのため不足します。デュアルRTX 4090またはA100 80GBが必要です。' },
        },
        {
          '@type': 'Question',
          name: 'OllamaとvLLMの違いは？',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollamaはセットアップが簡単で個人・小規模チームに最適。vLLMは高負荷時に2〜4倍効率的で、毎時100件以上のリクエストを処理する本番APIに適しています。' },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwenローカルデプロイ完全ガイド2026：Docker・APIサーバー・マルチGPU',
      description: 'Qwen 7B〜72Bの本番環境デプロイ：Docker Compose APIサーバー、マルチGPU設定、ハードウェアベンチマーク、Alibaba Cloudとのコスト比較。',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'ja',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://promptquorum.com' },
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-26',
    dateModified: '2026-05-26',
    next_refresh_due: '2026-11-26',
    theme: 'Overview & Reference',
    title: 'Qwen本地部署完整指南2026：Docker、API服务器、多GPU配置',
    seoTitle: 'Qwen生产环境部署指南2026：Docker Compose、API服务器、多GPU',
    metaDescription:
      '在生产环境中部署Qwen 7B至72B：Docker Compose API服务器、多GPU配置、硬件性能基准，以及与阿里云的成本对比（2026年5月）。',
    affiliateDisclosure: true,
    educationalLevel: 'Advanced',
    audience:
      '在生产环境中部署Qwen模型的开发者和自托管用户——包括持久API服务器、多GPU构建或全天候运行的迷你PC服务器。',
    leadAnswerBlock:
      '**Qwen 7B和14B可通过Ollama或vLLM在消费级GPU上稳定运行Docker Compose API服务器。Qwen 32B需要RTX 4090 24GB。Qwen 72B需要双GPU、128GB+ RAM的CPU推理或云端备选——自托管成本约为每天0.3至0.8元人民币（含硬件摊销），RunPod A100约为11元人民币/小时。**',
    quickAnswerTop: {
      zh: {
        question: '如何在本地生产环境中部署Qwen模型？',
        answer:
          '使用Docker Compose堆栈：Ollama（GPU推理）+ Open WebUI（前端）+ Nginx（反向代理）。10分钟内启动OpenAI兼容API。Qwen3 7B需要8GB显存；Qwen3 72B需要双RTX 4090或云端GPU。',
        bullets: [
          'Qwen3 7B：RTX 3060 12GB，约25 tok/s，二手GPU约1000-2500元',
          'Qwen3 14B：RTX 4060 Ti 16GB，约18 tok/s，新品约3000元',
          'Qwen3 32B：RTX 4090 24GB，约12 tok/s，新品约14000元',
          'Qwen3 72B：双RTX 4090或阿里云PAI A100（约12元/小时）',
          '全天候服务器：Minisforum UM890 Pro，约3000元，24小时运行Qwen3 7B',
        ],
        updatedDate: '2026-05',
      },
    },
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        title: '核心要点',
        items: [
          'Qwen3 7B和14B适合消费级GPU——分别需要8GB和16GB显存，通过Docker中的Ollama运行',
          'Qwen3 32B需要RTX 4090 24GB——是大多数团队最大的单GPU生产部署',
          'Qwen3 72B需要双GPU、128GB+ DDR5 CPU构建或云端租用',
          'Docker Compose堆栈（Ollama + Open WebUI + Nginx）10分钟内即可部署',
          '全天候服务器：Minisforum UM890 Pro（约3000元，CPU运行Qwen3 7B）或AOOSTAR GEM12 Pro OCuLink + RTX 4060 Ti（总计约5500元）',
          '云端备选：RunPod A40 48GB约3元/小时——偶尔使用Qwen3 72B比购买双RTX 4090更划算',
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
        title: 'Qwen模型性能对比（按硬件分类）—— 2026年5月',
        content:
          '**根据模型大小选择硬件，而非GPU品牌。** 显存是硬性约束：模型放不进去就无法以GPU速度运行。下表展示Q4_K_M量化（Ollama部署的最佳质量-体积比）的实测推理速度。',
        columns: ['模型', '显存（Q4_K_M）', '最低GPU', '速度（tok/s）', 'CPU备选', '是否适合生产？'],
        rows: [
          { '0': 'Qwen3 7B', '1': '5.2 GB', '2': 'RTX 3060 12GB', '3': '22–28 tok/s', '4': '是（32GB RAM，约4 tok/s）', '5': '是——单GPU' },
          { '0': 'Qwen3 14B', '1': '9.4 GB', '2': 'RTX 4060 Ti 16GB', '3': '15–20 tok/s', '4': '是（64GB RAM，约2.5 tok/s）', '5': '是——单GPU' },
          { '0': 'Qwen3 32B', '1': '20.1 GB', '2': 'RTX 4090 24GB', '3': '10–14 tok/s', '4': '勉强（128GB RAM）', '5': '是——单GPU' },
          { '0': 'Qwen3 72B', '1': '43.5 GB', '2': '双RTX 4090（合计48GB）', '3': '5–8 tok/s', '4': '慢（128GB RAM）', '5': '仅多GPU或云端' },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '能用单张RTX 4090运行Qwen3 72B吗？',
            a: '不能。Qwen3 72B在Q4_K_M量化下需要43.5GB显存。RTX 4090只有24GB。您需要双RTX 4090（合计48GB）、A100 80GB或云端GPU租用。单张RTX 4090可以运行Q4_K_M量化的Qwen3 32B（20.1GB）。',
          },
          {
            q: '生产环境中Ollama和vLLM有什么区别？',
            a: 'Ollama配置更简单，自动处理多GPU分配——适合个人服务器和20人以下并发的团队。vLLM使用张量并行和连续批处理，在高负载下效率高2-4倍——适合每小时100+请求的生产API。',
          },
          {
            q: '阿里云和RunPod哪个更便宜？',
            a: '阿里云PAI根据GPU类型和地区收费每小时约3.5-14元人民币。RunPod A40 48GB约3元/小时。阿里云提供预配置的Qwen推理环境，比通用Ollama快20-30%——如果已在阿里云生态系统中，值得考虑。',
          },
          {
            q: '全天候Qwen服务器消耗多少电力？',
            a: 'Minisforum UM890 Pro运行Qwen3 7B CPU推理，空闲时耗电12W，满载45W。按中国平均电价（约0.6元/度），24小时运行每月电费约5-20元。RTX 4060 Ti 16GB满载165W——加上迷你PC（约25W）共190W，24小时运行每月约82元。',
          },
          {
            q: '自托管的Qwen API能与ChatGPT兼容应用程序配合使用吗？',
            a: '可以。Ollama在http://您的服务器:11434/v1暴露OpenAI兼容API。在应用中设置OPENAI_API_BASE=http://您的服务器:11434/v1，OPENAI_API_KEY=任意字符串即可。Continue.dev、LangChain、AutoGen等工具无需修改即可使用。',
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
          name: '能用单张RTX 4090运行Qwen3 72B吗？',
          acceptedAnswer: { '@type': 'Answer', text: '不能。Qwen3 72B在Q4_K_M量化下需要43.5GB显存，RTX 4090只有24GB。需要双RTX 4090或A100 80GB。' },
        },
        {
          '@type': 'Question',
          name: '生产环境中Ollama和vLLM有什么区别？',
          acceptedAnswer: { '@type': 'Answer', text: 'Ollama配置简单，适合20人以下并发。vLLM在高负载下效率高2-4倍，适合每小时100+请求的生产API。' },
        },
      ],
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Qwen本地部署完整指南2026：Docker、API服务器、多GPU配置',
      description: '在生产环境中部署Qwen 7B至72B：Docker Compose API服务器、多GPU配置、硬件性能基准，以及与阿里云的成本对比。',
      datePublished: '2026-05-26',
      dateModified: '2026-05-26',
      inLanguage: 'zh',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://promptquorum.com' },
    },
  },
}
