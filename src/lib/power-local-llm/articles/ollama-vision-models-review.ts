// Ollama Vision Models Review: A Practical Guide to Running Vision-Capable Models via Ollama
// Slug: ollama-vision-models-review
// Companion to: local-vision-models-llava-ollama-2026.ts (multi-model vision comparison hub),
// llava-review.ts (LLaVA-specific deep dive), and top-open-source-models-ollama.ts (Ollama's broader model catalog)

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-en.webp',
    title: 'Ollama Vision Models (2026): How to Actually Run Image Models Locally',
    seoTitle: 'Ollama Vision Models 2026: A Practical Running Guide',
    intro:
      'Ollama, the local model runner built on top of [llama.cpp](https://github.com/ggml-org/llama.cpp), added multimodal (image-input) support in version 0.1.15 back in December 2023, and rebuilt it into a dedicated multimodal engine in May 2026. This guide is a focused, practical reference for actually running vision-capable models through Ollama today: which models are currently listed in its [library](https://ollama.com/library), the real CLI and HTTP API syntax for passing an image, and honest guidance on what Ollama is not good for. If you want a deep dive on one specific model, see PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review); for a broader comparison across all local vision models regardless of runner, see the [local vision models guide](/power-local-llm/local-vision-models-llava-ollama-2026).',
    metaDescription:
      'Ollama vision models 2026: the practical how-to for running image-capable models through Ollama. Real pull/run commands, the /api/generate JSON shape with base64 images, and which models are actually listed.',
    twitterDescription:
      'Ollama vision models 2026: a focused, practical guide to running image-capable models through Ollama — real CLI commands, the actual /api/generate and /api/chat JSON shape for images, and which vision models are currently in Ollama\'s library, verified.',
    audience:
      'Developers who already use or are considering Ollama and want a practical, verified reference for running vision-capable models through it specifically, rather than a comparison of vision models in the abstract.',
    readTime: '12 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Ollama vision models',
    targetKeywords: [
      'ollama vision models',
      'ollama image input',
      'ollama run llava',
      'ollama vision api',
      'ollama multimodal',
      'ollama pull vision model',
      'ollama vision models list',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollama supports running vision-capable (multimodal) models locally, and has since version 0.1.15 in December 2023.** As of this review, Ollama\'s own [model library](https://ollama.com/library) lists LLaVA (and its `llava-llama3`/`llava-phi3`/`bakllava` variants), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, and Mistral Small 3.1 as vision-capable. Pull one with `ollama pull llava`, run it with `ollama run llava "describe this image: ./photo.jpg"`, or call it programmatically via `/api/generate` or `/api/chat` with a base64-encoded image in an `images` array. This guide covers the real commands, the documented API shape, and where Ollama is and is not the right tool — for a dedicated review of LLaVA specifically, see PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review).',
    quickAnswerTop: {
      en: {
        question: 'Which vision models does Ollama support and how do I run one?',
        answer:
          'As of this review, Ollama\'s library lists LLaVA (plus llava-llama3, llava-phi3, and bakllava variants), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B and up), Llama 4, and Mistral Small 3.1 as vision-capable models you can pull directly. Run `ollama pull <model>` then `ollama run <model> "describe this image: ./photo.jpg"` — referencing the image\'s file path directly in the prompt text is enough; there is no separate `--image` flag. For programmatic use, POST to `http://localhost:11434/api/generate` or `/api/chat` with the image as a base64-encoded string in an `images` array, documented in Ollama\'s own `docs/api.md`. Ollama added this multimodal support in version 0.1.15 (December 2023) and rebuilt it into a dedicated multimodal engine in May 2026 for newer models like Llama 4, Gemma 3, Qwen2.5-VL, and Mistral Small 3.1. Ollama is inference-only — it cannot fine-tune or train a model — and, being built primarily around open-weight models, will generally lag the newest proprietary cloud multimodal capability.',
        bullets: [
          'Verified vision-capable models currently in Ollama\'s library: LLaVA, llava-llama3, llava-phi3, bakllava, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: `ollama pull <model>` then `ollama run <model> "describe this image: ./photo.jpg"` — reference the file path directly in the prompt.',
          'HTTP API: POST to `/api/generate` or `/api/chat` with a base64-encoded image in an `images` array, per Ollama\'s own `docs/api.md`.',
          'Multimodal support added in Ollama v0.1.15 (December 2023); rebuilt into a dedicated multimodal engine in May 2026.',
          'Ollama is inference-only: no fine-tuning or training support.',
          'Built on llama.cpp since Ollama\'s mid-2023 origin; now also supports Apple\'s MLX as an alternative backend on Apple Silicon.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Quick Answer', anchor: 'quick-answer' },
      { label: 'History: Ollama, llama.cpp, and Multimodal Support', anchor: 'history' },
      { label: 'Which Vision Models Are Actually in Ollama\'s Library', anchor: 'available-models' },
      { label: 'Pulling and Running a Vision Model: Step by Step', anchor: 'install-walkthrough' },
      { label: 'Real Usage Examples: CLI and HTTP API', anchor: 'usage-examples' },
      { label: 'VRAM and Hardware Guidance', anchor: 'vram-guidance' },
      { label: 'What Ollama Is Not Good For', anchor: 'limitations' },
      { label: 'Alternatives to Ollama for Vision Models', anchor: 'alternatives' },
      { label: 'Frequently Asked Questions', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Related Reading', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'TL;DR',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama has supported running vision-capable (multimodal) models locally since version 0.1.15 in December 2023, currently lists LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, and Mistral Small 3.1 in its library, and supports both a simple CLI (reference an image file path in the prompt) and an HTTP API (base64-encoded images in a JSON `images` array).',
          },
          {
            type: 'plain-terms',
            text: 'Ollama is the tool that lets you download and run AI models on your own computer with a single command, and several of those models can also look at pictures and answer questions about them — this guide shows the actual commands and API calls to do that.',
          },
        ],
        items: [
          'Multimodal support added in Ollama v0.1.15 (December 12, 2023); rebuilt into a dedicated multimodal engine in May 2026.',
          'Verified vision-capable models currently listed: LLaVA (plus llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: reference an image file path directly in the `ollama run` prompt text — no separate flag.',
          'HTTP API: `/api/generate` and `/api/chat` accept a base64-encoded image in an `images` array, documented in Ollama\'s own `docs/api.md`.',
          'Ollama is inference-only: it runs models, it does not fine-tune or train them.',
          'Built on llama.cpp since Ollama\'s mid-2023 origin (GitHub repository created June 26, 2023, MIT-licensed); now also supports Apple\'s MLX as an alternative backend on Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'The model list above reflects what PromptQuorum confirmed live on ollama.com/library at the time of this review. Ollama\'s library changes; verify a model\'s current listing before depending on it — see the Sources section for the exact library URLs checked.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'History: Ollama, llama.cpp, and Multimodal Support',
        content: [
          '**Ollama\'s [GitHub repository](https://github.com/ollama/ollama) was created on June 26, 2023**, and is licensed under MIT. It wraps [llama.cpp](https://github.com/ggml-org/llama.cpp), the C/C++ inference engine for GGUF-format models, behind a Docker-like command-line interface and local HTTP API — the core value proposition being that `ollama run llama3` downloads and runs a model without the user managing dependencies, GPU drivers, or the underlying inference engine directly.',
          '**Multimodal (image-input) support was added in [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15), released December 12, 2023**, alongside LLaVA as the first supported vision model. The release notes describe running `ollama run llava` and then typing an image file path directly into the interactive prompt, plus a new `images` parameter added to the `/api/generate` HTTP endpoint accepting base64-encoded PNG or JPEG images up to 100MB.',
          '**Ollama rebuilt multimodal support into a dedicated multimodal engine around May 2026**, according to Ollama\'s own blog, adding first-class vision support for newer model families including Llama 4, Gemma 3, Qwen2.5-VL, and Mistral Small 3.1 — with per-model handling of image resolution, positional metadata, and attention mechanisms rather than the more generic approach used for the original LLaVA integration. The same update brought Metal GPU offload for multimodal models on Apple Silicon via the llama.cpp backend.',
          '**Ollama primarily runs on the llama.cpp backend, and separately supports Apple\'s MLX framework** as an alternative backend on Apple Silicon hardware, which some newer multimodal models can use for improved performance on Mac.',
        ],
        faqs: [
          {
            q: 'When did Ollama add support for vision models?',
            a: 'Ollama added multimodal (image-input) support in version 0.1.15, released December 12, 2023, with LLaVA as the first supported vision model. It rebuilt this into a dedicated multimodal engine around May 2026 for newer model families like Llama 4, Gemma 3, Qwen2.5-VL, and Mistral Small 3.1.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Which Vision Models Are Actually in Ollama\'s Library',
        content: [
          'PromptQuorum verified each of the following models live on [ollama.com/library](https://ollama.com/library) at the time of this review — this list reflects what is actually pullable today, not a general survey of vision-language models that may or may not be packaged for Ollama.',
        ],
        itemHeadings: true,
        columns: ['Model', 'Maker', 'Notes'],
        rows: [
          {
            'Model': '[llava](https://ollama.com/library/llava)',
            'Maker': 'UW-Madison / Microsoft Research / Columbia (research)',
            'Notes': '7B/13B/34B; see PromptQuorum\'s [dedicated LLaVA review](/power-local-llm/llava-review)',
          },
          {
            'Model': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            'Maker': 'Community variants',
            'Notes': 'LLaVA-architecture models fine-tuned on different base LLMs',
          },
          {
            'Model': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            'Maker': 'Meta',
            'Notes': '11B and 90B sizes; strong general image Q&A',
          },
          {
            'Model': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            'Maker': 'Alibaba (Qwen team)',
            'Notes': '3B/7B/32B/72B; strong OCR and document understanding',
          },
          {
            'Model': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            'Maker': 'Alibaba (Qwen team)',
            'Notes': '2B-235B; newer than qwen2.5vl, up to 256K context, strongest OCR/visual-agent option here',
          },
          {
            'Model': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            'Maker': 'OpenBMB',
            'Notes': '~8B, ~5.5 GB; strong document OCR at low VRAM, multi-image support',
          },
          {
            'Model': '[moondream](https://ollama.com/library/moondream)',
            'Maker': 'Independent (Vikhyat K.)',
            'Notes': '1.8B, ~1.7 GB; the smallest option here, for lightweight/edge use',
          },
          {
            'Model': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            'Maker': 'IBM',
            'Notes': '~2.4 GB; tuned for visual document analysis — tables, charts, infographics',
          },
          {
            'Model': '[gemma3](https://ollama.com/library/gemma3)',
            'Maker': 'Google',
            'Notes': '4B/12B/27B sizes are multimodal (270M and 1B are text-only)',
          },
          {
            'Model': '[llama4](https://ollama.com/library/llama4)',
            'Maker': 'Meta',
            'Notes': 'Mixture-of-experts, natively multimodal; large (67 GB+) download',
          },
          {
            'Model': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            'Maker': 'Mistral AI',
            'Notes': '24B, ~15 GB; Apache-2.0 licensed, vision plus text',
          },
        ],
        note: 'Ollama\'s library moves fast: `qwen3-vl` has already joined `qwen2.5vl` as a newer, more capable Qwen vision option (up to 256K context) since the rest of this article was drafted. Models not confirmed to have their own Ollama library page as of this review, despite being discussed elsewhere as vision models: `qwen2-vl` (superseded by `qwen2.5vl`) and a standalone `llava-next` entry (LLaVA-NeXT/1.6 improvements are folded into the `llava` listing itself). Always check `ollama.com/library/<name>` directly before depending on a specific model name — this table is a snapshot, not a live feed.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Pulling and Running a Vision Model: Step by Step',
        content: 'This walkthrough uses LLaVA as the example, but the same steps apply to any model from the table above.',
        numberedItems: [
          {
            title: 'Install Ollama.',
            whyItMatters: 'Download [Ollama](https://ollama.com) for macOS, Linux, or Windows. Installation is a standard installer/package and takes under two minutes.',
          },
          {
            title: 'Pull a vision model.',
            whyItMatters: 'Run `ollama pull llava` (or `ollama pull qwen2.5vl`, `ollama pull minicpm-v`, etc.) — this downloads the model weights, sized from under 2 GB (Moondream) to tens of gigabytes (Llama 4).',
          },
          {
            title: 'Run it with an image referenced in the prompt.',
            whyItMatters: 'Run `ollama run llava "describe this image: ./photo.jpg"`. Ollama detects the `.jpg`/`.png` file path in the prompt text and attaches the image automatically — this pattern has worked since v0.1.15 in December 2023.',
          },
          {
            title: 'Or call the HTTP API directly.',
            whyItMatters: 'POST to `http://localhost:11434/api/generate` or `/api/chat` with the image base64-encoded in an `images` array — the exact JSON shape is documented in Ollama\'s own [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md), and shown in the Usage Examples section below.',
          },
          {
            title: '(Optional) Use the official client libraries.',
            whyItMatters: 'The official `ollama` Python and JavaScript libraries accept an image file path directly and handle base64 encoding for you, avoiding manual encoding in scripts.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Real Usage Examples: CLI and HTTP API',
        content: [
          'These examples are drawn directly from Ollama\'s own documentation and verified request/response shapes — not invented syntax.',
        ],
        codeBlock: `# Pull and run via CLI — reference the image path directly in the prompt
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API: /api/generate (documented in Ollama's docs/api.md) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# --- HTTP API: /api/chat (multi-turn, also documented in docs/api.md) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python: official ollama library (handles base64 encoding for you) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: raw HTTP API with manual base64 encoding ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: 'The exact JSON field names (`images` as a list of base64 strings, `stream`, `prompt` vs `messages`) are documented in [Ollama\'s docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) — verify against the current version of that file before scripting a production integration, since the API can evolve between releases.',
        items: [
          '**No separate image flag exists in the CLI.** Ollama detects a `.jpg`/`.png`/similar file path inside the prompt text itself and attaches it automatically.',
          '**`/api/generate` uses `prompt`; `/api/chat` uses `messages`.** Both accept an `images` array of base64-encoded strings; `/api/chat` supports multi-turn conversations with images attached to individual messages.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM and Hardware Guidance',
        content: [
          'Ollama\'s own model library pages list each model\'s download size, which is a reasonable proxy for the VRAM or RAM a quantized model needs to run — PromptQuorum did not find a separately published, authoritative VRAM table from Ollama beyond these per-model download sizes.',
        ],
        columns: ['Model', 'Approx. size', 'Practical minimum'],
        rows: [
          { 'Model': 'Moondream', 'Approx. size': '~1.7 GB', 'Practical minimum': '4 GB VRAM / runs on modest hardware' },
          { 'Model': 'Granite 3.2 Vision', 'Approx. size': '~2.4 GB', 'Practical minimum': '4-6 GB VRAM' },
          { 'Model': 'LLaVA 7B / MiniCPM-V', 'Approx. size': '~4.7-5.5 GB', 'Practical minimum': '6-8 GB VRAM' },
          { 'Model': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', 'Approx. size': '~6-8 GB', 'Practical minimum': '8-10 GB VRAM' },
          { 'Model': 'Mistral Small 3.1', 'Approx. size': '~15 GB', 'Practical minimum': '16-24 GB VRAM' },
          { 'Model': 'LLaVA 34B / Qwen2.5-VL 32B', 'Approx. size': '~20-21 GB', 'Practical minimum': '24 GB+ VRAM' },
          { 'Model': 'Llama 3.2 Vision 90B / Llama 4', 'Approx. size': '~55-67 GB+', 'Practical minimum': 'Multi-GPU or high-memory Apple Silicon' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'These are approximate download sizes, not measured VRAM benchmarks — PromptQuorum did not run its own hardware tests for this article. A model can run on CPU alone at much slower speed if it does not fit in available VRAM; actual usable VRAM headroom also depends on context length and batch size.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'What Ollama Is Not Good For',
        content: [
          'Ollama is a strong, actively developed way to run vision-capable models locally, but it is the wrong tool for the following situations:',
        ],
        items: [
          '**Fine-tuning or training a model.** Ollama is inference-only — it runs pre-trained model weights, it does not provide a training or fine-tuning pipeline. If you need to fine-tune a vision-language model on your own data, you need a different toolchain (such as the original LLaVA repository\'s own training scripts, or a framework like Hugging Face Transformers).',
          '**Bleeding-edge proprietary multimodal capability.** Ollama\'s library is built around open-weight models. As of this review, GPT-4o, Claude, and Gemini\'s cloud vision APIs generally lead open local models on complex scene understanding, handwriting recognition, and ambiguous imagery — Ollama is the right tool for private, self-hosted use at zero marginal cost per image, not for matching the absolute state of the art.',
          '**Precise numeric extraction from charts and graphs.** This is a limitation of the underlying vision-language models themselves, not specific to Ollama as a runner — verify any extracted numbers against source data regardless of which model or runner you use.',
          '**A single unified answer to "which model is best."** The right vision model via Ollama depends on the task: Qwen2.5-VL for OCR-heavy document work, MiniCPM-V for OCR at lower VRAM, Llama 3.2 Vision for general image Q&A, Moondream for the lightest footprint. See PromptQuorum\'s [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026) for task-by-task guidance.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives to Ollama for Vision Models',
        itemHeadings: true,
        columns: ['Tool', 'Best fit', 'License'],
        rows: [
          {
            'Tool': '[LM Studio](https://lmstudio.ai)',
            'Best fit': 'GUI-first local model runner; confirmed to support vision-capable models with image attachment in its chat interface',
            'License': 'Free, proprietary application',
          },
          {
            'Tool': '[llama.cpp](https://github.com/ggml-org/llama.cpp) directly',
            'Best fit': 'Maximum low-level control over inference, including multimodal (llava.cpp-style) support, without Ollama\'s wrapper layer',
            'License': 'MIT',
          },
          {
            'Tool': '[LLaVA\'s own repository](https://github.com/haotian-liu/LLaVA)',
            'Best fit': 'Research-grade control, training/fine-tuning scripts — see PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review)',
            'License': 'Apache-2.0 (code); base-model-dependent for checkpoints',
          },
          {
            'Tool': 'MLC-LLM / MLC Chat',
            'Best fit': 'On-device LLM deployment across platforms; PromptQuorum found no confirmed, officially documented vision-language model (VLM) support as of this review — verify current status before relying on it for vision tasks',
            'License': 'Apache-2.0',
          },
          {
            'Tool': 'Cloud VLM APIs (GPT-4o, Claude, Gemini vision)',
            'Best fit': 'Highest available multimodal capability, no local hardware or setup needed',
            'License': 'Proprietary (paid API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Does Ollama support vision models?',
            a: 'Yes. Ollama added multimodal (image-input) support in version 0.1.15, released December 12, 2023, and rebuilt it into a dedicated multimodal engine around May 2026. As of this review, its library lists LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, and Mistral Small 3.1 as vision-capable models.',
          },
          {
            q: 'How do I pass an image to a model in Ollama?',
            a: 'From the CLI, reference the image\'s file path directly in the prompt text: `ollama run llava "describe this image: ./photo.jpg"`. There is no separate `--image` flag. Programmatically, POST to `/api/generate` or `/api/chat` with the image base64-encoded in an `images` array, per Ollama\'s own docs/api.md.',
          },
          {
            q: 'What is the exact JSON format for sending an image to Ollama\'s API?',
            a: 'For `/api/generate`: `{"model": "llava", "prompt": "...", "images": ["<base64 string>"]}`. For `/api/chat`: `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<base64 string>"]}]}`. Both are documented in Ollama\'s GitHub repository under `docs/api.md`.',
          },
          {
            q: 'Which vision models are currently available in Ollama\'s library?',
            a: 'As verified for this review: LLaVA (plus llava-llama3, llava-phi3, bakllava variants), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B and larger), Llama 4, and Mistral Small 3.1. Check ollama.com/library directly, since this list can change.',
          },
          {
            q: 'Can Ollama fine-tune a vision model?',
            a: 'No. Ollama is inference-only — it runs pre-trained model weights but does not provide a training or fine-tuning pipeline. Fine-tuning requires a different toolchain, such as the original model\'s own training scripts or a framework like Hugging Face Transformers.',
          },
          {
            q: 'Is Ollama built on llama.cpp?',
            a: 'Yes. Ollama wraps llama.cpp, the C/C++ inference engine for GGUF-format models, behind a simpler command-line interface and HTTP API. Ollama\'s GitHub repository was created June 26, 2023. It also supports Apple\'s MLX framework as an alternative backend on Apple Silicon.',
          },
          {
            q: 'How does Ollama compare to cloud vision APIs like GPT-4o or Gemini?',
            a: 'Ollama runs models locally at zero marginal cost per request and keeps images on-device, but its library is built around open-weight models, which generally trail proprietary cloud vision APIs on complex scene understanding, handwriting, and ambiguous imagery. Choose Ollama for privacy, cost control at volume, and offline use; choose a cloud API for the highest available capability.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Ollama has offered a genuinely simple path to running vision-capable models locally since December 2023, and its May 2026 multimodal engine rebuild kept that experience current for newer model families like Llama 4, Gemma 3, Qwen2.5-VL, and Mistral Small 3.1 alongside long-standing options like LLaVA. The core workflow — `ollama pull`, then `ollama run` with an image path in the prompt, or the documented `/api/generate`/`/api/chat` HTTP endpoints — has been stable since the original v0.1.15 release, which is itself a point in Ollama\'s favor for anyone building on top of it. It is not a training tool, and it will not match the newest proprietary cloud multimodal capability, but for private, self-hosted, zero-marginal-cost image understanding, it remains one of the most practical entry points available. Pair this guide with PromptQuorum\'s [LLaVA review](/power-local-llm/llava-review) for depth on one specific model, or the [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026) for task-by-task model selection across the full local vision-model landscape.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama on GitHub](https://github.com/ollama/ollama) — repository creation date, license, and release history.',
          '[Ollama v0.1.15 release notes](https://github.com/ollama/ollama/releases/tag/v0.1.15) — the original multimodal/LLaVA support announcement, December 12, 2023.',
          '[Ollama\'s new engine for multimodal models](https://ollama.com/blog/multimodal-models) — the May 2026 multimodal engine rebuild, covering Llama 4, Gemma 3, Qwen2.5-VL, and Mistral Small 3.1.',
          '[Ollama API documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — the documented `/api/generate` and `/api/chat` request/response shape for images.',
          '[Ollama model library](https://ollama.com/library) — the live library used to verify every model listed in this article, including individual pages for [llava](https://ollama.com/library/llava), [llama3.2-vision](https://ollama.com/library/llama3.2-vision), [qwen2.5vl](https://ollama.com/library/qwen2.5vl), [minicpm-v](https://ollama.com/library/minicpm-v), [moondream](https://ollama.com/library/moondream), [granite3.2-vision](https://ollama.com/library/granite3.2-vision), [gemma3](https://ollama.com/library/gemma3), [llama4](https://ollama.com/library/llama4), and [mistral-small3.1](https://ollama.com/library/mistral-small3.1).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[LLaVA Review (2026)](/power-local-llm/llava-review) — a dedicated deep dive on LLaVA specifically, including its history and license nuance.',
          '[Local Vision Models 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama Multimodal Setup](/power-local-llm/local-vision-models-llava-ollama-2026) — a broader, task-by-task comparison across current local vision models.',
          '[Ollama Latest Version 2026: v0.33.1 + Best Models by Use Case](/local-llms/top-open-source-models-ollama) — Ollama\'s wider model catalog beyond vision, including which text models are most popular.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama Vision Models (2026): How to Actually Run Image Models Locally',
      description:
        'Ollama vision models 2026: the practical how-to for running image-capable models through Ollama. Real pull/run commands, the /api/generate JSON shape with base64 images, and which models are actually listed.',
      url: 'https://promptquorum.com/power-local-llm/ollama-vision-models-review',
      inLanguage: 'en',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Developers running or considering vision-capable models through Ollama' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Multimodal AI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ollama Vision Models (2026)', item: 'https://promptquorum.com/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-de.webp',
    title: 'Ollama-Vision-Modelle (2026): So führen Sie Bildmodelle wirklich lokal aus',
    seoTitle: 'Ollama-Vision-Modelle 2026: Ein praktischer Leitfaden',
    intro:
      'Ollama, der lokale Modell-Runner auf Basis von [llama.cpp](https://github.com/ggml-org/llama.cpp), fügte die Unterstützung für Multimodalität (Bildeingabe) bereits in Version 0.1.15 im Dezember 2023 hinzu und baute sie im Mai 2026 zu einer dedizierten Multimodal-Engine um. Dieser Leitfaden ist eine fokussierte, praktische Referenz zum tatsächlichen Ausführen von Vision-fähigen Modellen über Ollama: welche Modelle derzeit in seiner [Bibliothek](https://ollama.com/library) gelistet sind, die echte CLI- und HTTP-API-Syntax zum Übergeben eines Bildes, sowie ehrliche Hinweise darauf, wofür Ollama nicht geeignet ist. Für einen Tiefgang zu einem bestimmten Modell siehe PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review); für einen breiteren Vergleich über alle lokalen Vision-Modelle hinweg, unabhängig vom Runner, siehe den [Leitfaden zu lokalen Vision-Modellen](/de/power-local-llm/local-vision-models-llava-ollama-2026).',
    metaDescription:
      'Ollama-Vision-Modelle 2026: die praktische Anleitung zum Ausführen bildfähiger Modelle über Ollama. Echte pull/run-Befehle, die /api/generate-JSON-Form mit Base64-Bildern, und welche Modelle tatsächlich gelistet sind.',
    twitterDescription:
      'Ollama-Vision-Modelle 2026: ein fokussierter, praktischer Leitfaden zum Ausführen bildfähiger Modelle über Ollama — echte CLI-Befehle, die tatsächliche /api/generate- und /api/chat-JSON-Form für Bilder, und welche Vision-Modelle derzeit in Ollamas Bibliothek verfügbar sind, verifiziert.',
    audience:
      'Entwickler, die Ollama bereits nutzen oder in Betracht ziehen und eine praktische, verifizierte Referenz zum Ausführen von Vision-fähigen Modellen speziell darüber suchen, statt eines abstrakten Vergleichs von Vision-Modellen.',
    readTime: '12 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Ollama-Vision-Modelle',
    targetKeywords: [
      'ollama vision modelle',
      'ollama bildeingabe',
      'ollama run llava',
      'ollama vision api',
      'ollama multimodal',
      'ollama pull vision modell',
      'ollama vision modelle liste',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollama unterstützt das lokale Ausführen von Vision-fähigen (multimodalen) Modellen, und zwar seit Version 0.1.15 im Dezember 2023.** Zum Zeitpunkt dieses Tests listet Ollamas eigene [Modellbibliothek](https://ollama.com/library) LLaVA (und seine Varianten `llava-llama3`/`llava-phi3`/`bakllava`), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 und Mistral Small 3.1 als Vision-fähig auf. Laden Sie eines mit `ollama pull llava` herunter, führen Sie es mit `ollama run llava "describe this image: ./photo.jpg"` aus, oder rufen Sie es programmatisch über `/api/generate` oder `/api/chat` mit einem Base64-kodierten Bild in einem `images`-Array auf. Dieser Leitfaden behandelt die echten Befehle, die dokumentierte API-Form und wo Ollama das richtige Werkzeug ist und wo nicht — für einen dedizierten Test zu LLaVA speziell siehe PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review).',
    quickAnswerTop: {
      en: {
        question: 'Welche Vision-Modelle unterstützt Ollama und wie führe ich eines aus?',
        answer:
          'Zum Zeitpunkt dieses Tests listet Ollamas Bibliothek LLaVA (plus llava-llama3-, llava-phi3- und bakllava-Varianten), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B und größer), Llama 4 und Mistral Small 3.1 als Vision-fähige Modelle, die Sie direkt herunterladen können. Führen Sie `ollama pull <modell>` aus, dann `ollama run <modell> "describe this image: ./photo.jpg"` — es genügt, den Dateipfad des Bildes direkt im Prompttext zu referenzieren; es gibt kein separates `--image`-Flag. Für die programmatische Nutzung senden Sie eine POST-Anfrage an `http://localhost:11434/api/generate` oder `/api/chat` mit dem Bild als Base64-kodiertem String in einem `images`-Array, dokumentiert in Ollamas eigenem `docs/api.md`. Ollama fügte diese Multimodal-Unterstützung in Version 0.1.15 (Dezember 2023) hinzu und baute sie im Mai 2026 zu einer dedizierten Multimodal-Engine für neuere Modelle wie Llama 4, Gemma 3, Qwen2.5-VL und Mistral Small 3.1 um. Ollama dient ausschließlich der Inferenz — es kann kein Modell feinabstimmen oder trainieren — und wird, da es hauptsächlich um Open-Weight-Modelle herum aufgebaut ist, im Allgemeinen der neuesten proprietären Cloud-Multimodal-Fähigkeit hinterherhinken.',
        bullets: [
          'Verifizierte Vision-fähige Modelle derzeit in Ollamas Bibliothek: LLaVA, llava-llama3, llava-phi3, bakllava, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: `ollama pull <modell>` dann `ollama run <modell> "describe this image: ./photo.jpg"` — Dateipfad direkt im Prompt referenzieren.',
          'HTTP-API: POST an `/api/generate` oder `/api/chat` mit einem Base64-kodierten Bild in einem `images`-Array, gemäß Ollamas eigenem `docs/api.md`.',
          'Multimodal-Unterstützung hinzugefügt in Ollama v0.1.15 (Dezember 2023); im Mai 2026 zu einer dedizierten Multimodal-Engine umgebaut.',
          'Ollama dient ausschließlich der Inferenz: keine Unterstützung für Feinabstimmung oder Training.',
          'Baut seit Ollamas Ursprung Mitte 2023 auf llama.cpp auf; unterstützt inzwischen auch Apples MLX als alternatives Backend auf Apple Silicon.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Kurzantwort', anchor: 'quick-answer' },
      { label: 'Geschichte: Ollama, llama.cpp und Multimodal-Unterstützung', anchor: 'history' },
      { label: 'Welche Vision-Modelle sich tatsächlich in Ollamas Bibliothek befinden', anchor: 'available-models' },
      { label: 'Ein Vision-Modell herunterladen und ausführen: Schritt für Schritt', anchor: 'install-walkthrough' },
      { label: 'Echte Nutzungsbeispiele: CLI und HTTP-API', anchor: 'usage-examples' },
      { label: 'VRAM- und Hardware-Hinweise', anchor: 'vram-guidance' },
      { label: 'Wofür Ollama nicht geeignet ist', anchor: 'limitations' },
      { label: 'Alternativen zu Ollama für Vision-Modelle', anchor: 'alternatives' },
      { label: 'Häufig gestellte Fragen', anchor: 'faq' },
      { label: 'Fazit', anchor: 'verdict' },
      { label: 'Quellen', anchor: 'sources' },
      { label: 'Weiterführende Artikel', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Zusammenfassung',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama unterstützt das lokale Ausführen von Vision-fähigen (multimodalen) Modellen seit Version 0.1.15 im Dezember 2023, listet derzeit LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 und Mistral Small 3.1 in seiner Bibliothek und unterstützt sowohl eine einfache CLI (Bilddateipfad im Prompt referenzieren) als auch eine HTTP-API (Base64-kodierte Bilder in einem JSON-`images`-Array).',
          },
          {
            type: 'plain-terms',
            text: 'Ollama ist das Tool, mit dem Sie KI-Modelle mit einem einzigen Befehl auf Ihrem eigenen Computer herunterladen und ausführen können, und mehrere dieser Modelle können auch Bilder betrachten und Fragen dazu beantworten — dieser Leitfaden zeigt die tatsächlichen Befehle und API-Aufrufe dafür.',
          },
        ],
        items: [
          'Multimodal-Unterstützung hinzugefügt in Ollama v0.1.15 (12. Dezember 2023); im Mai 2026 zu einer dedizierten Multimodal-Engine umgebaut.',
          'Verifizierte Vision-fähige Modelle, derzeit gelistet: LLaVA (plus llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: Bilddateipfad direkt im `ollama run`-Prompttext referenzieren — kein separates Flag.',
          'HTTP-API: `/api/generate` und `/api/chat` akzeptieren ein Base64-kodiertes Bild in einem `images`-Array, dokumentiert in Ollamas eigenem `docs/api.md`.',
          'Ollama dient ausschließlich der Inferenz: Es führt Modelle aus, feinabstimmen oder trainieren tut es sie nicht.',
          'Baut seit Ollamas Ursprung Mitte 2023 auf llama.cpp auf (GitHub-Repository erstellt am 26. Juni 2023, MIT-lizenziert); unterstützt inzwischen auch Apples MLX als alternatives Backend auf Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Die obige Modellliste spiegelt wider, was PromptQuorum zum Zeitpunkt dieses Tests live auf ollama.com/library bestätigt hat. Ollamas Bibliothek ändert sich; überprüfen Sie den aktuellen Eintrag eines Modells, bevor Sie sich darauf verlassen — siehe den Abschnitt Quellen für die genauen geprüften Bibliotheks-URLs.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Geschichte: Ollama, llama.cpp und Multimodal-Unterstützung',
        content: [
          '**Ollamas [GitHub-Repository](https://github.com/ollama/ollama) wurde am 26. Juni 2023 erstellt** und steht unter der MIT-Lizenz. Es umhüllt [llama.cpp](https://github.com/ggml-org/llama.cpp), die C/C++-Inferenz-Engine für Modelle im GGUF-Format, mit einer Docker-ähnlichen Kommandozeilenschnittstelle und lokalen HTTP-API — der Kernnutzen besteht darin, dass `ollama run llama3` ein Modell herunterlädt und ausführt, ohne dass der Nutzer Abhängigkeiten, GPU-Treiber oder die zugrunde liegende Inferenz-Engine direkt verwalten muss.',
          '**Die Unterstützung für Multimodalität (Bildeingabe) wurde in [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15) hinzugefügt, veröffentlicht am 12. Dezember 2023**, zusammen mit LLaVA als erstem unterstütztem Vision-Modell. Die Release-Notes beschreiben, `ollama run llava` auszuführen und dann einen Bilddateipfad direkt in die interaktive Eingabeaufforderung einzutippen, plus einen neuen `images`-Parameter, der zum `/api/generate`-HTTP-Endpunkt hinzugefügt wurde und Base64-kodierte PNG- oder JPEG-Bilder bis zu 100 MB akzeptiert.',
          '**Ollama baute die Multimodal-Unterstützung um Mai 2026 zu einer dedizierten Multimodal-Engine um**, laut Ollamas eigenem Blog, und fügte erstklassige Vision-Unterstützung für neuere Modellfamilien hinzu, darunter Llama 4, Gemma 3, Qwen2.5-VL und Mistral Small 3.1 — mit modellspezifischer Behandlung von Bildauflösung, Positionsmetadaten und Attention-Mechanismen statt des generischeren Ansatzes, der für die ursprüngliche LLaVA-Integration verwendet wurde. Dasselbe Update brachte Metal-GPU-Offload für multimodale Modelle auf Apple Silicon über das llama.cpp-Backend.',
          '**Ollama läuft primär auf dem llama.cpp-Backend und unterstützt separat Apples MLX-Framework** als alternatives Backend auf Apple-Silicon-Hardware, das einige neuere multimodale Modelle für verbesserte Leistung auf dem Mac nutzen können.',
        ],
        faqs: [
          {
            q: 'Wann fügte Ollama die Unterstützung für Vision-Modelle hinzu?',
            a: 'Ollama fügte die Unterstützung für Multimodalität (Bildeingabe) in Version 0.1.15 hinzu, veröffentlicht am 12. Dezember 2023, mit LLaVA als erstem unterstütztem Vision-Modell. Es baute dies um Mai 2026 zu einer dedizierten Multimodal-Engine für neuere Modellfamilien wie Llama 4, Gemma 3, Qwen2.5-VL und Mistral Small 3.1 um.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Welche Vision-Modelle sich tatsächlich in Ollamas Bibliothek befinden',
        content: [
          'PromptQuorum hat jedes der folgenden Modelle live auf [ollama.com/library](https://ollama.com/library) zum Zeitpunkt dieses Tests überprüft — diese Liste spiegelt wider, was heute tatsächlich herunterladbar ist, nicht eine allgemeine Übersicht über Vision-Language-Modelle, die möglicherweise für Ollama verpackt sind oder nicht.',
        ],
        itemHeadings: true,
        columns: ['Modell', 'Hersteller', 'Hinweise'],
        rows: [
          {
            'Modell': '[llava](https://ollama.com/library/llava)',
            'Hersteller': 'UW-Madison / Microsoft Research / Columbia (Forschung)',
            'Hinweise': '7B/13B/34B; siehe PromptQuorums [dedizierten LLaVA-Test](/de/power-local-llm/llava-review)',
          },
          {
            'Modell': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            'Hersteller': 'Community-Varianten',
            'Hinweise': 'LLaVA-Architektur-Modelle, feinabgestimmt auf unterschiedlichen Basis-LLMs',
          },
          {
            'Modell': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            'Hersteller': 'Meta',
            'Hinweise': 'Größen 11B und 90B; starke allgemeine Bild-Q&A',
          },
          {
            'Modell': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            'Hersteller': 'Alibaba (Qwen-Team)',
            'Hinweise': '3B/7B/32B/72B; starke OCR und Dokumentenverständnis',
          },
          {
            'Modell': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            'Hersteller': 'Alibaba (Qwen-Team)',
            'Hinweise': '2B-235B; neuer als qwen2.5vl, bis zu 256K Kontext, stärkste OCR-/Agenten-Option hier',
          },
          {
            'Modell': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            'Hersteller': 'OpenBMB',
            'Hinweise': '~8B, ~5,5 GB; starke Dokument-OCR bei geringem VRAM, Multi-Bild-Unterstützung',
          },
          {
            'Modell': '[moondream](https://ollama.com/library/moondream)',
            'Hersteller': 'Unabhängig (Vikhyat K.)',
            'Hinweise': '1,8B, ~1,7 GB; die kleinste Option hier, für leichtgewichtige/Edge-Nutzung',
          },
          {
            'Modell': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            'Hersteller': 'IBM',
            'Hinweise': '~2,4 GB; für visuelle Dokumentenanalyse abgestimmt — Tabellen, Diagramme, Infografiken',
          },
          {
            'Modell': '[gemma3](https://ollama.com/library/gemma3)',
            'Hersteller': 'Google',
            'Hinweise': 'Größen 4B/12B/27B sind multimodal (270M und 1B sind reine Textmodelle)',
          },
          {
            'Modell': '[llama4](https://ollama.com/library/llama4)',
            'Hersteller': 'Meta',
            'Hinweise': 'Mixture-of-Experts, nativ multimodal; großer (67 GB+) Download',
          },
          {
            'Modell': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            'Hersteller': 'Mistral AI',
            'Hinweise': '24B, ~15 GB; Apache-2.0-lizenziert, Vision plus Text',
          },
        ],
        note: 'Ollamas Bibliothek entwickelt sich schnell: `qwen3-vl` ist bereits als neuere, leistungsfähigere Qwen-Vision-Option (bis zu 256K Kontext) neben `qwen2.5vl` hinzugekommen, seit der Rest dieses Artikels verfasst wurde. Modelle, für die zum Zeitpunkt dieses Tests keine eigene Ollama-Bibliotheksseite bestätigt werden konnte, obwohl sie andernorts als Vision-Modelle besprochen werden: `qwen2-vl` (durch `qwen2.5vl` abgelöst) und ein eigenständiger `llava-next`-Eintrag (die LLaVA-NeXT/1.6-Verbesserungen sind in den `llava`-Eintrag selbst integriert). Prüfen Sie immer `ollama.com/library/<name>` direkt, bevor Sie sich auf einen bestimmten Modellnamen verlassen — diese Tabelle ist eine Momentaufnahme, kein Live-Feed.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Ein Vision-Modell herunterladen und ausführen: Schritt für Schritt',
        content: 'Diese Anleitung verwendet LLaVA als Beispiel, doch dieselben Schritte gelten für jedes Modell aus der obigen Tabelle.',
        numberedItems: [
          {
            title: 'Ollama installieren.',
            whyItMatters: 'Laden Sie [Ollama](https://ollama.com) für macOS, Linux oder Windows herunter. Die Installation ist ein Standard-Installer/Paket und dauert unter zwei Minuten.',
          },
          {
            title: 'Ein Vision-Modell herunterladen.',
            whyItMatters: 'Führen Sie `ollama pull llava` aus (oder `ollama pull qwen2.5vl`, `ollama pull minicpm-v` usw.) — dies lädt die Modellgewichte herunter, deren Größe von unter 2 GB (Moondream) bis zu mehreren zehn Gigabyte (Llama 4) reicht.',
          },
          {
            title: 'Mit einem im Prompt referenzierten Bild ausführen.',
            whyItMatters: 'Führen Sie `ollama run llava "describe this image: ./photo.jpg"` aus. Ollama erkennt den `.jpg`/`.png`-Dateipfad im Prompttext und hängt das Bild automatisch an — dieses Muster funktioniert seit v0.1.15 im Dezember 2023.',
          },
          {
            title: 'Oder die HTTP-API direkt aufrufen.',
            whyItMatters: 'Senden Sie eine POST-Anfrage an `http://localhost:11434/api/generate` oder `/api/chat` mit dem Base64-kodierten Bild in einem `images`-Array — die genaue JSON-Form ist in Ollamas eigenem [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) dokumentiert und wird im Abschnitt Nutzungsbeispiele unten gezeigt.',
          },
          {
            title: '(Optional) Die offiziellen Client-Bibliotheken verwenden.',
            whyItMatters: 'Die offiziellen `ollama`-Python- und JavaScript-Bibliotheken akzeptieren direkt einen Bilddateipfad und übernehmen die Base64-Kodierung für Sie, sodass manuelle Kodierung in Skripten entfällt.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Echte Nutzungsbeispiele: CLI und HTTP-API',
        content: [
          'Diese Beispiele stammen direkt aus Ollamas eigener Dokumentation und verifizierten Anfrage-/Antwortformen — keine erfundene Syntax.',
        ],
        codeBlock: `# Herunterladen und über CLI ausführen — Bildpfad direkt im Prompt referenzieren
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP-API: /api/generate (dokumentiert in Ollamas docs/api.md) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<Base64-kodierte Bilddaten>"]
}'

# --- HTTP-API: /api/chat (mehrstufig, ebenfalls in docs/api.md dokumentiert) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<Base64-kodierte Bilddaten>"] }
  ]
}'

# --- Python: offizielle ollama-Bibliothek (übernimmt Base64-Kodierung für Sie) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: rohe HTTP-API mit manueller Base64-Kodierung ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: 'Die genauen JSON-Feldnamen (`images` als Liste von Base64-Strings, `stream`, `prompt` versus `messages`) sind in [Ollamas docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) dokumentiert — überprüfen Sie die aktuelle Version dieser Datei, bevor Sie eine Produktionsintegration skripten, da sich die API zwischen Releases weiterentwickeln kann.',
        items: [
          '**Es gibt kein separates Bild-Flag in der CLI.** Ollama erkennt einen `.jpg`/`.png`/ähnlichen Dateipfad innerhalb des Prompttextes selbst und hängt ihn automatisch an.',
          '**`/api/generate` verwendet `prompt`; `/api/chat` verwendet `messages`.** Beide akzeptieren ein `images`-Array aus Base64-kodierten Strings; `/api/chat` unterstützt mehrstufige Konversationen mit Bildern, die einzelnen Nachrichten zugeordnet sind.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM- und Hardware-Hinweise',
        content: [
          'Ollamas eigene Modellbibliotheksseiten listen die Downloadgröße jedes Modells auf, was ein vernünftiger Näherungswert für den VRAM- oder RAM-Bedarf eines quantisierten Modells ist — PromptQuorum fand keine separat veröffentlichte, autoritative VRAM-Tabelle von Ollama über diese modellspezifischen Downloadgrößen hinaus.',
        ],
        columns: ['Modell', 'Ungefähre Größe', 'Praktisches Minimum'],
        rows: [
          { 'Modell': 'Moondream', 'Ungefähre Größe': '~1,7 GB', 'Praktisches Minimum': '4 GB VRAM / läuft auf bescheidener Hardware' },
          { 'Modell': 'Granite 3.2 Vision', 'Ungefähre Größe': '~2,4 GB', 'Praktisches Minimum': '4-6 GB VRAM' },
          { 'Modell': 'LLaVA 7B / MiniCPM-V', 'Ungefähre Größe': '~4,7-5,5 GB', 'Praktisches Minimum': '6-8 GB VRAM' },
          { 'Modell': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', 'Ungefähre Größe': '~6-8 GB', 'Praktisches Minimum': '8-10 GB VRAM' },
          { 'Modell': 'Mistral Small 3.1', 'Ungefähre Größe': '~15 GB', 'Praktisches Minimum': '16-24 GB VRAM' },
          { 'Modell': 'LLaVA 34B / Qwen2.5-VL 32B', 'Ungefähre Größe': '~20-21 GB', 'Praktisches Minimum': '24 GB+ VRAM' },
          { 'Modell': 'Llama 3.2 Vision 90B / Llama 4', 'Ungefähre Größe': '~55-67 GB+', 'Praktisches Minimum': 'Multi-GPU oder Apple Silicon mit viel Speicher' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Dies sind ungefähre Downloadgrößen, keine gemessenen VRAM-Benchmarks — PromptQuorum hat für diesen Artikel keine eigenen Hardware-Tests durchgeführt. Ein Modell kann bei viel geringerer Geschwindigkeit allein auf der CPU laufen, wenn es nicht in den verfügbaren VRAM passt; der tatsächlich nutzbare VRAM-Spielraum hängt zudem von Kontextlänge und Batchgröße ab.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Wofür Ollama nicht geeignet ist',
        content: [
          'Ollama ist ein starker, aktiv weiterentwickelter Weg, um Vision-fähige Modelle lokal auszuführen, ist aber das falsche Werkzeug für die folgenden Situationen:',
        ],
        items: [
          '**Feinabstimmung oder Training eines Modells.** Ollama dient ausschließlich der Inferenz — es führt vortrainierte Modellgewichte aus, bietet aber keine Trainings- oder Feinabstimmungs-Pipeline. Wenn Sie ein Vision-Language-Modell mit Ihren eigenen Daten feinabstimmen müssen, benötigen Sie eine andere Toolchain (etwa die eigenen Trainingsskripte des originalen LLaVA-Repositorys oder ein Framework wie Hugging Face Transformers).',
          '**Neueste proprietäre Multimodal-Fähigkeit.** Ollamas Bibliothek ist um Open-Weight-Modelle herum aufgebaut. Zum Zeitpunkt dieses Tests führen die Cloud-Vision-APIs von GPT-4o, Claude und Gemini im Allgemeinen bei komplexem Szenenverständnis, Handschrifterkennung und mehrdeutigen Bildern gegenüber offenen lokalen Modellen — Ollama ist das richtige Werkzeug für private, selbst gehostete Nutzung ohne Grenzkosten pro Bild, nicht für das Erreichen des absoluten Stands der Technik.',
          '**Präzise numerische Extraktion aus Diagrammen und Grafiken.** Dies ist eine Einschränkung der zugrunde liegenden Vision-Language-Modelle selbst, nicht spezifisch für Ollama als Runner — überprüfen Sie extrahierte Zahlen stets gegen die Quelldaten, unabhängig davon, welches Modell oder welchen Runner Sie verwenden.',
          '**Eine einzige einheitliche Antwort auf „welches Modell ist am besten".** Das richtige Vision-Modell über Ollama hängt von der Aufgabe ab: Qwen2.5-VL für OCR-lastige Dokumentenarbeit, MiniCPM-V für OCR bei niedrigerem VRAM, Llama 3.2 Vision für allgemeine Bild-Q&A, Moondream für den geringsten Fußabdruck. Siehe PromptQuorums [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026) für aufgabenspezifische Hinweise.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativen zu Ollama für Vision-Modelle',
        itemHeadings: true,
        columns: ['Tool', 'Am besten für', 'Lizenz'],
        rows: [
          {
            'Tool': '[LM Studio](https://lmstudio.ai)',
            'Am besten für': 'GUI-orientierter lokaler Modell-Runner; bestätigt, Vision-fähige Modelle mit Bildanhang in seiner Chat-Oberfläche zu unterstützen',
            'Lizenz': 'Kostenlos, proprietäre Anwendung',
          },
          {
            'Tool': '[llama.cpp](https://github.com/ggml-org/llama.cpp) direkt',
            'Am besten für': 'Maximale Low-Level-Kontrolle über die Inferenz, einschließlich Multimodal-Unterstützung (im Stil von llava.cpp), ohne Ollamas Wrapper-Schicht',
            'Lizenz': 'MIT',
          },
          {
            'Tool': '[LLaVAs eigenes Repository](https://github.com/haotian-liu/LLaVA)',
            'Am besten für': 'Forschungsgerechte Kontrolle, Trainings-/Feinabstimmungsskripte — siehe PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review)',
            'Lizenz': 'Apache-2.0 (Code); basismodellabhängig für Checkpoints',
          },
          {
            'Tool': 'MLC-LLM / MLC Chat',
            'Am besten für': 'On-Device-LLM-Deployment über Plattformen hinweg; PromptQuorum fand zum Zeitpunkt dieses Tests keine bestätigte, offiziell dokumentierte Unterstützung für Vision-Language-Modelle (VLM) — prüfen Sie den aktuellen Status, bevor Sie sich für Vision-Aufgaben darauf verlassen',
            'Lizenz': 'Apache-2.0',
          },
          {
            'Tool': 'Cloud-VLM-APIs (GPT-4o, Claude, Gemini Vision)',
            'Am besten für': 'Höchste verfügbare multimodale Fähigkeit, keine lokale Hardware oder Einrichtung nötig',
            'Lizenz': 'Proprietär (kostenpflichtige API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Unterstützt Ollama Vision-Modelle?',
            a: 'Ja. Ollama fügte die Unterstützung für Multimodalität (Bildeingabe) in Version 0.1.15 hinzu, veröffentlicht am 12. Dezember 2023, und baute sie um Mai 2026 zu einer dedizierten Multimodal-Engine um. Zum Zeitpunkt dieses Tests listet seine Bibliothek LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 und Mistral Small 3.1 als Vision-fähige Modelle.',
          },
          {
            q: 'Wie übergebe ich ein Bild an ein Modell in Ollama?',
            a: 'Referenzieren Sie über die CLI den Dateipfad des Bildes direkt im Prompttext: `ollama run llava "describe this image: ./photo.jpg"`. Es gibt kein separates `--image`-Flag. Programmatisch senden Sie eine POST-Anfrage an `/api/generate` oder `/api/chat` mit dem Base64-kodierten Bild in einem `images`-Array, gemäß Ollamas eigenem docs/api.md.',
          },
          {
            q: 'Was ist das genaue JSON-Format zum Senden eines Bildes an Ollamas API?',
            a: 'Für `/api/generate`: `{"model": "llava", "prompt": "...", "images": ["<Base64-String>"]}`. Für `/api/chat`: `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<Base64-String>"]}]}`. Beide sind in Ollamas GitHub-Repository unter `docs/api.md` dokumentiert.',
          },
          {
            q: 'Welche Vision-Modelle sind derzeit in Ollamas Bibliothek verfügbar?',
            a: 'Für diesen Test verifiziert: LLaVA (plus llava-llama3-, llava-phi3-, bakllava-Varianten), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B und größer), Llama 4 und Mistral Small 3.1. Prüfen Sie ollama.com/library direkt, da sich diese Liste ändern kann.',
          },
          {
            q: 'Kann Ollama ein Vision-Modell feinabstimmen?',
            a: 'Nein. Ollama dient ausschließlich der Inferenz — es führt vortrainierte Modellgewichte aus, bietet aber keine Trainings- oder Feinabstimmungs-Pipeline. Feinabstimmung erfordert eine andere Toolchain, etwa die eigenen Trainingsskripte des Originalmodells oder ein Framework wie Hugging Face Transformers.',
          },
          {
            q: 'Baut Ollama auf llama.cpp auf?',
            a: 'Ja. Ollama umhüllt llama.cpp, die C/C++-Inferenz-Engine für Modelle im GGUF-Format, mit einer einfacheren Kommandozeilenschnittstelle und HTTP-API. Ollamas GitHub-Repository wurde am 26. Juni 2023 erstellt. Es unterstützt außerdem Apples MLX-Framework als alternatives Backend auf Apple Silicon.',
          },
          {
            q: 'Wie schneidet Ollama im Vergleich zu Cloud-Vision-APIs wie GPT-4o oder Gemini ab?',
            a: 'Ollama führt Modelle lokal ohne Grenzkosten pro Anfrage aus und behält Bilder auf dem Gerät, doch seine Bibliothek ist um Open-Weight-Modelle herum aufgebaut, die im Allgemeinen proprietären Cloud-Vision-APIs bei komplexem Szenenverständnis, Handschrift und mehrdeutigen Bildern hinterherhinken. Wählen Sie Ollama für Datenschutz, Kostenkontrolle bei hohem Volumen und Offline-Nutzung; wählen Sie eine Cloud-API für die höchste verfügbare Fähigkeit.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Fazit',
        content:
          'Ollama bietet seit Dezember 2023 einen wirklich einfachen Weg, Vision-fähige Modelle lokal auszuführen, und der Umbau der Multimodal-Engine im Mai 2026 hielt dieses Erlebnis für neuere Modellfamilien wie Llama 4, Gemma 3, Qwen2.5-VL und Mistral Small 3.1 neben langjährigen Optionen wie LLaVA aktuell. Der Kern-Workflow — `ollama pull`, dann `ollama run` mit einem Bildpfad im Prompt, oder die dokumentierten `/api/generate`/`/api/chat`-HTTP-Endpunkte — ist seit der ursprünglichen v0.1.15-Veröffentlichung stabil geblieben, was selbst ein Pluspunkt für Ollama für jeden ist, der darauf aufbaut. Es ist kein Trainingswerkzeug, und es wird nicht mit der neuesten proprietären Cloud-Multimodal-Fähigkeit mithalten können, doch für privates, selbst gehostetes Bildverständnis ohne Grenzkosten bleibt es einer der praktischsten verfügbaren Einstiegspunkte. Kombinieren Sie diesen Leitfaden mit PromptQuorums [LLaVA-Test](/de/power-local-llm/llava-review) für Tiefgang zu einem bestimmten Modell oder dem [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026) für aufgabenspezifische Modellauswahl über die gesamte lokale Vision-Modell-Landschaft hinweg.',
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Ollama auf GitHub](https://github.com/ollama/ollama) — Erstellungsdatum des Repositorys, Lizenz und Release-Historie.',
          '[Ollama v0.1.15 Release-Notes](https://github.com/ollama/ollama/releases/tag/v0.1.15) — die ursprüngliche Ankündigung der Multimodal-/LLaVA-Unterstützung, 12. Dezember 2023.',
          '[Ollamas neue Engine für multimodale Modelle](https://ollama.com/blog/multimodal-models) — der Umbau der Multimodal-Engine im Mai 2026, mit Llama 4, Gemma 3, Qwen2.5-VL und Mistral Small 3.1.',
          '[Ollama-API-Dokumentation](https://github.com/ollama/ollama/blob/main/docs/api.md) — die dokumentierte Form der `/api/generate`- und `/api/chat`-Anfragen/Antworten für Bilder.',
          '[Ollama-Modellbibliothek](https://ollama.com/library) — die Live-Bibliothek, mit der jedes in diesem Artikel gelistete Modell verifiziert wurde, einschließlich einzelner Seiten für [llava](https://ollama.com/library/llava), [llama3.2-vision](https://ollama.com/library/llama3.2-vision), [qwen2.5vl](https://ollama.com/library/qwen2.5vl), [minicpm-v](https://ollama.com/library/minicpm-v), [moondream](https://ollama.com/library/moondream), [granite3.2-vision](https://ollama.com/library/granite3.2-vision), [gemma3](https://ollama.com/library/gemma3), [llama4](https://ollama.com/library/llama4) und [mistral-small3.1](https://ollama.com/library/mistral-small3.1).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[LLaVA im Test (2026)](/de/power-local-llm/llava-review) — ein dedizierter Tiefgang zu LLaVA speziell, einschließlich seiner Geschichte und Lizenznuance.',
          '[Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama-Multimodal-Setup](/de/power-local-llm/local-vision-models-llava-ollama-2026) — ein breiterer, aufgabenspezifischer Vergleich über aktuelle lokale Vision-Modelle hinweg.',
          '[Ollama Neueste Version 2026: v0.33.1 + Beste Modelle nach Anwendungsfall](/local-llms/top-open-source-models-ollama) — Ollamas breiterer Modellkatalog jenseits von Vision, einschließlich welcher Textmodelle am beliebtesten sind.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama-Vision-Modelle (2026): So führen Sie Bildmodelle wirklich lokal aus',
      description:
        'Ollama-Vision-Modelle 2026: die praktische Anleitung zum Ausführen bildfähiger Modelle über Ollama. Echte pull/run-Befehle, die /api/generate-JSON-Form mit Base64-Bildern, und welche Modelle tatsächlich gelistet sind.',
      url: 'https://promptquorum.com/de/power-local-llm/ollama-vision-models-review',
      inLanguage: 'de',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Entwickler, die Vision-fähige Modelle über Ollama ausführen oder in Betracht ziehen' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-Language-Modell' },
        { '@type': 'Thing', name: 'Multimodale KI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/de/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/de/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ollama-Vision-Modelle (2026)', item: 'https://promptquorum.com/de/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-fr.webp',
    title: 'Modèles de vision Ollama (2026) : comment exécuter réellement des modèles d\'image en local',
    seoTitle: 'Modèles de vision Ollama 2026 : un guide pratique',
    intro:
      'Ollama, l\'exécuteur de modèles locaux construit sur [llama.cpp](https://github.com/ggml-org/llama.cpp), a ajouté la prise en charge multimodale (entrée d\'image) dès la version 0.1.15 en décembre 2023, et l\'a reconstruite en un moteur multimodal dédié en mai 2026. Ce guide est une référence pratique et ciblée pour exécuter réellement des modèles capables de vision via Ollama aujourd\'hui : quels modèles sont actuellement listés dans sa [bibliothèque](https://ollama.com/library), la vraie syntaxe CLI et API HTTP pour transmettre une image, et des conseils honnêtes sur ce pour quoi Ollama n\'est pas adapté. Pour un approfondissement sur un modèle spécifique, voir l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum ; pour une comparaison plus large de tous les modèles de vision locaux quel que soit l\'exécuteur, voir le [guide des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026).',
    metaDescription:
      'Modèles de vision Ollama 2026 : le guide pratique pour exécuter des modèles capables d\'image via Ollama. Vraies commandes pull/run, la forme JSON de /api/generate avec des images en base64, et quels modèles sont réellement listés.',
    twitterDescription:
      'Modèles de vision Ollama 2026 : un guide pratique et ciblé pour exécuter des modèles capables d\'image via Ollama — vraies commandes CLI, la forme JSON réelle de /api/generate et /api/chat pour les images, et quels modèles de vision figurent actuellement dans la bibliothèque d\'Ollama, vérifiés.',
    audience:
      'Développeurs qui utilisent déjà Ollama ou l\'envisagent et veulent une référence pratique et vérifiée pour exécuter spécifiquement des modèles capables de vision via cet outil, plutôt qu\'une comparaison abstraite des modèles de vision.',
    readTime: '12 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modèles de vision Ollama',
    targetKeywords: [
      'modèles de vision ollama',
      'ollama entrée image',
      'ollama run llava',
      'ollama vision api',
      'ollama multimodal',
      'ollama pull modèle vision',
      'liste modèles vision ollama',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollama prend en charge l\'exécution locale de modèles capables de vision (multimodaux), et ce depuis la version 0.1.15 en décembre 2023.** Au moment de cet avis, la [bibliothèque de modèles](https://ollama.com/library) propre à Ollama liste LLaVA (et ses variantes `llava-llama3`/`llava-phi3`/`bakllava`), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 et Mistral Small 3.1 comme capables de vision. Téléchargez-en un avec `ollama pull llava`, exécutez-le avec `ollama run llava "describe this image: ./photo.jpg"`, ou appelez-le par programmation via `/api/generate` ou `/api/chat` avec une image encodée en base64 dans un tableau `images`. Ce guide couvre les vraies commandes, la forme d\'API documentée, et où Ollama est ou n\'est pas le bon outil — pour un avis dédié à LLaVA spécifiquement, voir l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Quels modèles de vision Ollama prend-il en charge et comment en exécuter un ?',
        answer:
          'Au moment de cet avis, la bibliothèque d\'Ollama liste LLaVA (plus les variantes llava-llama3, llava-phi3 et bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B et plus), Llama 4 et Mistral Small 3.1 comme modèles capables de vision que vous pouvez télécharger directement. Exécutez `ollama pull <modèle>` puis `ollama run <modèle> "describe this image: ./photo.jpg"` — référencer le chemin de fichier de l\'image directement dans le texte du prompt suffit ; il n\'existe pas d\'indicateur `--image` séparé. Pour un usage programmatique, envoyez une requête POST à `http://localhost:11434/api/generate` ou `/api/chat` avec l\'image encodée en base64 dans un tableau `images`, documenté dans le `docs/api.md` propre à Ollama. Ollama a ajouté cette prise en charge multimodale dans la version 0.1.15 (décembre 2023) et l\'a reconstruite en un moteur multimodal dédié en mai 2026 pour des modèles plus récents comme Llama 4, Gemma 3, Qwen2.5-VL et Mistral Small 3.1. Ollama est réservé à l\'inférence — il ne peut pas affiner ni entraîner un modèle — et, étant construit principalement autour de modèles à poids ouverts, sera généralement en retard sur la toute dernière capacité multimodale propriétaire cloud.',
        bullets: [
          'Modèles capables de vision vérifiés actuellement dans la bibliothèque d\'Ollama : LLaVA, llava-llama3, llava-phi3, bakllava, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI : `ollama pull <modèle>` puis `ollama run <modèle> "describe this image: ./photo.jpg"` — référencer le chemin de fichier directement dans le prompt.',
          'API HTTP : requête POST vers `/api/generate` ou `/api/chat` avec une image encodée en base64 dans un tableau `images`, selon le `docs/api.md` propre à Ollama.',
          'Prise en charge multimodale ajoutée dans Ollama v0.1.15 (décembre 2023) ; reconstruite en un moteur multimodal dédié en mai 2026.',
          'Ollama est réservé à l\'inférence : aucune prise en charge de l\'affinage ou de l\'entraînement.',
          'Construit sur llama.cpp depuis les origines d\'Ollama mi-2023 ; prend désormais aussi en charge MLX d\'Apple comme backend alternatif sur Apple Silicon.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Réponse rapide', anchor: 'quick-answer' },
      { label: 'Histoire : Ollama, llama.cpp et la prise en charge multimodale', anchor: 'history' },
      { label: 'Quels modèles de vision figurent réellement dans la bibliothèque d\'Ollama', anchor: 'available-models' },
      { label: 'Télécharger et exécuter un modèle de vision : étape par étape', anchor: 'install-walkthrough' },
      { label: 'Exemples d\'utilisation réels : CLI et API HTTP', anchor: 'usage-examples' },
      { label: 'Conseils VRAM et matériel', anchor: 'vram-guidance' },
      { label: 'Pour quoi Ollama n\'est pas adapté', anchor: 'limitations' },
      { label: 'Alternatives à Ollama pour les modèles de vision', anchor: 'alternatives' },
      { label: 'Questions fréquemment posées', anchor: 'faq' },
      { label: 'Verdict', anchor: 'verdict' },
      { label: 'Sources', anchor: 'sources' },
      { label: 'Lectures complémentaires', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Résumé',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama prend en charge l\'exécution locale de modèles capables de vision (multimodaux) depuis la version 0.1.15 en décembre 2023, liste actuellement LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 et Mistral Small 3.1 dans sa bibliothèque, et prend en charge à la fois une CLI simple (référencer un chemin de fichier image dans le prompt) et une API HTTP (images encodées en base64 dans un tableau JSON `images`).',
          },
          {
            type: 'plain-terms',
            text: 'Ollama est l\'outil qui vous permet de télécharger et d\'exécuter des modèles d\'IA sur votre propre ordinateur avec une seule commande, et plusieurs de ces modèles peuvent aussi regarder des images et répondre à des questions à leur sujet — ce guide montre les vraies commandes et appels d\'API pour y parvenir.',
          },
        ],
        items: [
          'Prise en charge multimodale ajoutée dans Ollama v0.1.15 (12 décembre 2023) ; reconstruite en un moteur multimodal dédié en mai 2026.',
          'Modèles capables de vision vérifiés actuellement listés : LLaVA (plus llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI : référencer un chemin de fichier image directement dans le texte du prompt `ollama run` — aucun indicateur séparé.',
          'API HTTP : `/api/generate` et `/api/chat` acceptent une image encodée en base64 dans un tableau `images`, documenté dans le `docs/api.md` propre à Ollama.',
          'Ollama est réservé à l\'inférence : il exécute des modèles, il ne les affine ni ne les entraîne.',
          'Construit sur llama.cpp depuis les origines d\'Ollama mi-2023 (dépôt GitHub créé le 26 juin 2023, sous licence MIT) ; prend désormais aussi en charge MLX d\'Apple comme backend alternatif sur Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La liste de modèles ci-dessus reflète ce que PromptQuorum a confirmé en direct sur ollama.com/library au moment de cet avis. La bibliothèque d\'Ollama évolue ; vérifiez la fiche actuelle d\'un modèle avant d\'en dépendre — voir la section Sources pour les URL exactes de bibliothèque vérifiées.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Histoire : Ollama, llama.cpp et la prise en charge multimodale',
        content: [
          '**Le [dépôt GitHub](https://github.com/ollama/ollama) d\'Ollama a été créé le 26 juin 2023**, et est sous licence MIT. Il enveloppe [llama.cpp](https://github.com/ggml-org/llama.cpp), le moteur d\'inférence C/C++ pour les modèles au format GGUF, derrière une interface en ligne de commande de type Docker et une API HTTP locale — la proposition de valeur centrale étant que `ollama run llama3` télécharge et exécute un modèle sans que l\'utilisateur ait à gérer directement les dépendances, les pilotes GPU ou le moteur d\'inférence sous-jacent.',
          '**La prise en charge multimodale (entrée d\'image) a été ajoutée dans [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15), sortie le 12 décembre 2023**, avec LLaVA comme premier modèle de vision pris en charge. Les notes de version décrivent l\'exécution de `ollama run llava` puis la saisie directe d\'un chemin de fichier image dans l\'invite interactive, ainsi qu\'un nouveau paramètre `images` ajouté au point de terminaison HTTP `/api/generate` acceptant des images PNG ou JPEG encodées en base64 jusqu\'à 100 Mo.',
          '**Ollama a reconstruit la prise en charge multimodale en un moteur multimodal dédié vers mai 2026**, selon le propre blog d\'Ollama, ajoutant une prise en charge de vision de premier ordre pour des familles de modèles plus récentes, notamment Llama 4, Gemma 3, Qwen2.5-VL et Mistral Small 3.1 — avec une gestion propre à chaque modèle de la résolution d\'image, des métadonnées de position et des mécanismes d\'attention, plutôt que l\'approche plus générique utilisée pour l\'intégration originale de LLaVA. La même mise à jour a apporté le déchargement GPU Metal pour les modèles multimodaux sur Apple Silicon via le backend llama.cpp.',
          '**Ollama fonctionne principalement sur le backend llama.cpp, et prend séparément en charge le framework MLX d\'Apple** comme backend alternatif sur le matériel Apple Silicon, que certains modèles multimodaux plus récents peuvent utiliser pour de meilleures performances sur Mac.',
        ],
        faqs: [
          {
            q: 'Quand Ollama a-t-il ajouté la prise en charge des modèles de vision ?',
            a: 'Ollama a ajouté la prise en charge multimodale (entrée d\'image) dans la version 0.1.15, sortie le 12 décembre 2023, avec LLaVA comme premier modèle de vision pris en charge. Il a reconstruit cela en un moteur multimodal dédié vers mai 2026 pour des familles de modèles plus récentes comme Llama 4, Gemma 3, Qwen2.5-VL et Mistral Small 3.1.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Quels modèles de vision figurent réellement dans la bibliothèque d\'Ollama',
        content: [
          'PromptQuorum a vérifié chacun des modèles suivants en direct sur [ollama.com/library](https://ollama.com/library) au moment de cet avis — cette liste reflète ce qui est réellement téléchargeable aujourd\'hui, pas un panorama général des modèles vision-langage qui pourraient ou non être empaquetés pour Ollama.',
        ],
        itemHeadings: true,
        columns: ['Modèle', 'Créateur', 'Remarques'],
        rows: [
          {
            'Modèle': '[llava](https://ollama.com/library/llava)',
            'Créateur': 'UW-Madison / Microsoft Research / Columbia (recherche)',
            'Remarques': '7B/13B/34B ; voir l\'[avis LLaVA dédié](/fr/power-local-llm/llava-review) de PromptQuorum',
          },
          {
            'Modèle': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            'Créateur': 'Variantes communautaires',
            'Remarques': 'Modèles d\'architecture LLaVA affinés sur différents LLM de base',
          },
          {
            'Modèle': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            'Créateur': 'Meta',
            'Remarques': 'Tailles 11B et 90B ; solide Q&R d\'image générale',
          },
          {
            'Modèle': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            'Créateur': 'Alibaba (équipe Qwen)',
            'Remarques': '3B/7B/32B/72B ; forte OCR et compréhension documentaire',
          },
          {
            'Modèle': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            'Créateur': 'Alibaba (équipe Qwen)',
            'Remarques': '2B-235B ; plus récent que qwen2.5vl, jusqu\'à 256K de contexte, option OCR/agent la plus puissante ici',
          },
          {
            'Modèle': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            'Créateur': 'OpenBMB',
            'Remarques': '~8B, ~5,5 Go ; forte OCR documentaire à faible VRAM, prise en charge multi-image',
          },
          {
            'Modèle': '[moondream](https://ollama.com/library/moondream)',
            'Créateur': 'Indépendant (Vikhyat K.)',
            'Remarques': '1,8B, ~1,7 Go ; l\'option la plus légère ici, pour un usage léger/embarqué',
          },
          {
            'Modèle': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            'Créateur': 'IBM',
            'Remarques': '~2,4 Go ; réglé pour l\'analyse de documents visuels — tableaux, graphiques, infographies',
          },
          {
            'Modèle': '[gemma3](https://ollama.com/library/gemma3)',
            'Créateur': 'Google',
            'Remarques': 'Les tailles 4B/12B/27B sont multimodales (270M et 1B sont uniquement textuelles)',
          },
          {
            'Modèle': '[llama4](https://ollama.com/library/llama4)',
            'Créateur': 'Meta',
            'Remarques': 'Mixture-of-experts, nativement multimodal ; téléchargement volumineux (67 Go+)',
          },
          {
            'Modèle': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            'Créateur': 'Mistral AI',
            'Remarques': '24B, ~15 Go ; sous licence Apache-2.0, vision plus texte',
          },
        ],
        note: 'La bibliothèque d\'Ollama évolue vite : `qwen3-vl` a déjà rejoint `qwen2.5vl` comme option Qwen vision plus récente et plus performante (jusqu\'à 256K de contexte) depuis la rédaction du reste de cet article. Modèles sans page de bibliothèque Ollama propre confirmée au moment de cet avis, bien que discutés ailleurs comme modèles de vision : `qwen2-vl` (remplacé par `qwen2.5vl`) et une entrée autonome `llava-next` (les améliorations de LLaVA-NeXT/1.6 sont intégrées dans la fiche `llava` elle-même). Vérifiez toujours directement `ollama.com/library/<nom>` avant de dépendre d\'un nom de modèle spécifique — ce tableau est un instantané, pas un flux en direct.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Télécharger et exécuter un modèle de vision : étape par étape',
        content: 'Ce guide utilise LLaVA comme exemple, mais les mêmes étapes s\'appliquent à n\'importe quel modèle du tableau ci-dessus.',
        numberedItems: [
          {
            title: 'Installer Ollama.',
            whyItMatters: 'Téléchargez [Ollama](https://ollama.com) pour macOS, Linux ou Windows. L\'installation est un installateur/paquet standard et prend moins de deux minutes.',
          },
          {
            title: 'Télécharger un modèle de vision.',
            whyItMatters: 'Exécutez `ollama pull llava` (ou `ollama pull qwen2.5vl`, `ollama pull minicpm-v`, etc.) — cela télécharge les poids du modèle, dont la taille varie de moins de 2 Go (Moondream) à plusieurs dizaines de gigaoctets (Llama 4).',
          },
          {
            title: 'L\'exécuter avec une image référencée dans le prompt.',
            whyItMatters: 'Exécutez `ollama run llava "describe this image: ./photo.jpg"`. Ollama détecte le chemin de fichier `.jpg`/`.png` dans le texte du prompt et attache l\'image automatiquement — ce schéma fonctionne depuis la v0.1.15 en décembre 2023.',
          },
          {
            title: 'Ou appeler directement l\'API HTTP.',
            whyItMatters: 'Envoyez une requête POST à `http://localhost:11434/api/generate` ou `/api/chat` avec l\'image encodée en base64 dans un tableau `images` — la forme JSON exacte est documentée dans le [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) propre à Ollama, et présentée dans la section Exemples d\'utilisation ci-dessous.',
          },
          {
            title: '(Optionnel) Utiliser les bibliothèques clientes officielles.',
            whyItMatters: 'Les bibliothèques officielles Python et JavaScript `ollama` acceptent directement un chemin de fichier image et gèrent l\'encodage base64 pour vous, évitant un encodage manuel dans les scripts.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemples d\'utilisation réels : CLI et API HTTP',
        content: [
          'Ces exemples proviennent directement de la documentation propre à Ollama et de formes de requête/réponse vérifiées — pas d\'une syntaxe inventée.',
        ],
        codeBlock: `# Télécharger et exécuter via la CLI — référencer le chemin de l'image directement dans le prompt
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- API HTTP : /api/generate (documentée dans le docs/api.md d'Ollama) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<données image encodées en base64>"]
}'

# --- API HTTP : /api/chat (multi-tours, également documentée dans docs/api.md) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<données image encodées en base64>"] }
  ]
}'

# --- Python : bibliothèque officielle ollama (gère l'encodage base64 pour vous) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python : API HTTP brute avec encodage base64 manuel ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: 'Les noms de champs JSON exacts (`images` en tant que liste de chaînes base64, `stream`, `prompt` contre `messages`) sont documentés dans le [docs/api.md d\'Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — vérifiez la version actuelle de ce fichier avant de scripter une intégration en production, car l\'API peut évoluer entre les versions.',
        items: [
          '**Aucun indicateur image séparé n\'existe dans la CLI.** Ollama détecte un chemin de fichier `.jpg`/`.png`/similaire à l\'intérieur du texte du prompt lui-même et l\'attache automatiquement.',
          '**`/api/generate` utilise `prompt` ; `/api/chat` utilise `messages`.** Les deux acceptent un tableau `images` de chaînes encodées en base64 ; `/api/chat` prend en charge les conversations multi-tours avec des images attachées à des messages individuels.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'Conseils VRAM et matériel',
        content: [
          'Les propres pages de bibliothèque de modèles d\'Ollama listent la taille de téléchargement de chaque modèle, ce qui constitue une approximation raisonnable de la VRAM ou de la RAM nécessaire pour exécuter un modèle quantifié — PromptQuorum n\'a trouvé aucun tableau VRAM faisant autorité publié séparément par Ollama au-delà de ces tailles de téléchargement par modèle.',
        ],
        columns: ['Modèle', 'Taille approx.', 'Minimum pratique'],
        rows: [
          { 'Modèle': 'Moondream', 'Taille approx.': '~1,7 Go', 'Minimum pratique': '4 Go de VRAM / fonctionne sur du matériel modeste' },
          { 'Modèle': 'Granite 3.2 Vision', 'Taille approx.': '~2,4 Go', 'Minimum pratique': '4-6 Go de VRAM' },
          { 'Modèle': 'LLaVA 7B / MiniCPM-V', 'Taille approx.': '~4,7-5,5 Go', 'Minimum pratique': '6-8 Go de VRAM' },
          { 'Modèle': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', 'Taille approx.': '~6-8 Go', 'Minimum pratique': '8-10 Go de VRAM' },
          { 'Modèle': 'Mistral Small 3.1', 'Taille approx.': '~15 Go', 'Minimum pratique': '16-24 Go de VRAM' },
          { 'Modèle': 'LLaVA 34B / Qwen2.5-VL 32B', 'Taille approx.': '~20-21 Go', 'Minimum pratique': '24 Go+ de VRAM' },
          { 'Modèle': 'Llama 3.2 Vision 90B / Llama 4', 'Taille approx.': '~55-67 Go+', 'Minimum pratique': 'Multi-GPU ou Apple Silicon à forte mémoire' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Il s\'agit de tailles de téléchargement approximatives, pas de benchmarks VRAM mesurés — PromptQuorum n\'a pas réalisé ses propres tests matériels pour cet article. Un modèle peut fonctionner uniquement sur CPU à une vitesse bien plus lente s\'il ne tient pas dans la VRAM disponible ; la marge de VRAM réellement utilisable dépend aussi de la longueur de contexte et de la taille de lot.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Pour quoi Ollama n\'est pas adapté',
        content: [
          'Ollama est un moyen solide et activement développé d\'exécuter des modèles capables de vision en local, mais c\'est le mauvais outil pour les situations suivantes :',
        ],
        items: [
          '**Affiner ou entraîner un modèle.** Ollama est réservé à l\'inférence — il exécute des poids de modèle pré-entraînés, il ne fournit pas de pipeline d\'entraînement ou d\'affinage. Si vous devez affiner un modèle vision-langage sur vos propres données, il vous faut une autre chaîne d\'outils (comme les propres scripts d\'entraînement du dépôt LLaVA original, ou un framework comme Hugging Face Transformers).',
          '**La toute dernière capacité multimodale propriétaire.** La bibliothèque d\'Ollama est construite autour de modèles à poids ouverts. Au moment de cet avis, les API cloud de vision de GPT-4o, Claude et Gemini devancent généralement les modèles locaux ouverts sur la compréhension de scènes complexes, la reconnaissance d\'écriture manuscrite et les images ambiguës — Ollama est le bon outil pour un usage privé et auto-hébergé à coût marginal nul par image, pas pour égaler l\'état de l\'art absolu.',
          '**L\'extraction numérique précise de graphiques et diagrammes.** C\'est une limite des modèles vision-langage sous-jacents eux-mêmes, pas spécifique à Ollama en tant qu\'exécuteur — vérifiez tout chiffre extrait par rapport aux données source, quel que soit le modèle ou l\'exécuteur utilisé.',
          '**Une réponse unique et unifiée à « quel est le meilleur modèle ».** Le bon modèle de vision via Ollama dépend de la tâche : Qwen2.5-VL pour un travail documentaire à forte composante OCR, MiniCPM-V pour l\'OCR à VRAM plus faible, Llama 3.2 Vision pour la Q&R d\'image générale, Moondream pour l\'empreinte la plus légère. Voir la [comparaison des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026) de PromptQuorum pour des conseils tâche par tâche.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternatives à Ollama pour les modèles de vision',
        itemHeadings: true,
        columns: ['Outil', 'Idéal pour', 'Licence'],
        rows: [
          {
            'Outil': '[LM Studio](https://lmstudio.ai)',
            'Idéal pour': 'Exécuteur de modèles locaux orienté interface graphique ; confirmé pour prendre en charge des modèles capables de vision avec pièce jointe image dans son interface de chat',
            'Licence': 'Gratuit, application propriétaire',
          },
          {
            'Outil': '[llama.cpp](https://github.com/ggml-org/llama.cpp) directement',
            'Idéal pour': 'Contrôle bas niveau maximal sur l\'inférence, y compris la prise en charge multimodale (style llava.cpp), sans la couche d\'encapsulation d\'Ollama',
            'Licence': 'MIT',
          },
          {
            'Outil': '[Le propre dépôt de LLaVA](https://github.com/haotian-liu/LLaVA)',
            'Idéal pour': 'Contrôle de niveau recherche, scripts d\'entraînement/affinage — voir l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum',
            'Licence': 'Apache-2.0 (code) ; dépendant du modèle de base pour les checkpoints',
          },
          {
            'Outil': 'MLC-LLM / MLC Chat',
            'Idéal pour': 'Déploiement de LLM sur l\'appareil sur plusieurs plateformes ; PromptQuorum n\'a trouvé aucune prise en charge confirmée et officiellement documentée de modèles vision-langage (VLM) au moment de cet avis — vérifiez l\'état actuel avant de vous y fier pour des tâches de vision',
            'Licence': 'Apache-2.0',
          },
          {
            'Outil': 'API VLM cloud (GPT-4o, Claude, Gemini Vision)',
            'Idéal pour': 'Capacité multimodale la plus élevée disponible, aucun matériel local ni configuration nécessaire',
            'Licence': 'Propriétaire (API payante)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Ollama prend-il en charge les modèles de vision ?',
            a: 'Oui. Ollama a ajouté la prise en charge multimodale (entrée d\'image) dans la version 0.1.15, sortie le 12 décembre 2023, et l\'a reconstruite en un moteur multimodal dédié vers mai 2026. Au moment de cet avis, sa bibliothèque liste LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 et Mistral Small 3.1 comme modèles capables de vision.',
          },
          {
            q: 'Comment transmettre une image à un modèle dans Ollama ?',
            a: 'Depuis la CLI, référencez le chemin de fichier de l\'image directement dans le texte du prompt : `ollama run llava "describe this image: ./photo.jpg"`. Il n\'existe pas d\'indicateur `--image` séparé. Par programmation, envoyez une requête POST à `/api/generate` ou `/api/chat` avec l\'image encodée en base64 dans un tableau `images`, selon le propre docs/api.md d\'Ollama.',
          },
          {
            q: 'Quel est le format JSON exact pour envoyer une image à l\'API d\'Ollama ?',
            a: 'Pour `/api/generate` : `{"model": "llava", "prompt": "...", "images": ["<chaîne base64>"]}`. Pour `/api/chat` : `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<chaîne base64>"]}]}`. Les deux sont documentés dans le dépôt GitHub d\'Ollama sous `docs/api.md`.',
          },
          {
            q: 'Quels modèles de vision sont actuellement disponibles dans la bibliothèque d\'Ollama ?',
            a: 'Vérifiés pour cet avis : LLaVA (plus les variantes llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B et plus), Llama 4 et Mistral Small 3.1. Vérifiez directement ollama.com/library, car cette liste peut changer.',
          },
          {
            q: 'Ollama peut-il affiner un modèle de vision ?',
            a: 'Non. Ollama est réservé à l\'inférence — il exécute des poids de modèle pré-entraînés mais ne fournit pas de pipeline d\'entraînement ou d\'affinage. L\'affinage nécessite une autre chaîne d\'outils, comme les propres scripts d\'entraînement du modèle original ou un framework comme Hugging Face Transformers.',
          },
          {
            q: 'Ollama est-il construit sur llama.cpp ?',
            a: 'Oui. Ollama enveloppe llama.cpp, le moteur d\'inférence C/C++ pour les modèles au format GGUF, derrière une interface en ligne de commande et une API HTTP plus simples. Le dépôt GitHub d\'Ollama a été créé le 26 juin 2023. Il prend également en charge le framework MLX d\'Apple comme backend alternatif sur Apple Silicon.',
          },
          {
            q: 'Comment Ollama se compare-t-il aux API de vision cloud comme GPT-4o ou Gemini ?',
            a: 'Ollama exécute des modèles en local à coût marginal nul par requête et garde les images sur l\'appareil, mais sa bibliothèque est construite autour de modèles à poids ouverts, qui accusent généralement un retard sur les API de vision cloud propriétaires en matière de compréhension de scènes complexes, d\'écriture manuscrite et d\'images ambiguës. Choisissez Ollama pour la confidentialité, le contrôle des coûts à volume et l\'usage hors ligne ; choisissez une API cloud pour la capacité la plus élevée disponible.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Verdict',
        content:
          'Ollama offre un chemin réellement simple vers l\'exécution locale de modèles capables de vision depuis décembre 2023, et la reconstruction de son moteur multimodal en mai 2026 a maintenu cette expérience à jour pour des familles de modèles plus récentes comme Llama 4, Gemma 3, Qwen2.5-VL et Mistral Small 3.1, aux côtés d\'options bien établies comme LLaVA. Le flux de travail central — `ollama pull`, puis `ollama run` avec un chemin d\'image dans le prompt, ou les points de terminaison HTTP documentés `/api/generate`/`/api/chat` — est resté stable depuis la version originale v0.1.15, ce qui est en soi un point en faveur d\'Ollama pour quiconque construit dessus. Ce n\'est pas un outil d\'entraînement, et il n\'égalera pas la toute dernière capacité multimodale propriétaire cloud, mais pour une compréhension d\'image privée, auto-hébergée et à coût marginal nul, il reste l\'un des points d\'entrée les plus pratiques disponibles. Combinez ce guide avec l\'[avis LLaVA](/fr/power-local-llm/llava-review) de PromptQuorum pour approfondir un modèle spécifique, ou la [comparaison des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026) pour une sélection de modèle tâche par tâche sur l\'ensemble du paysage des modèles de vision locaux.',
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Ollama sur GitHub](https://github.com/ollama/ollama) — date de création du dépôt, licence et historique des versions.',
          '[Notes de version d\'Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15) — l\'annonce originale de la prise en charge multimodale/LLaVA, le 12 décembre 2023.',
          '[Le nouveau moteur d\'Ollama pour les modèles multimodaux](https://ollama.com/blog/multimodal-models) — la reconstruction du moteur multimodal de mai 2026, couvrant Llama 4, Gemma 3, Qwen2.5-VL et Mistral Small 3.1.',
          '[Documentation de l\'API Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — la forme documentée des requêtes/réponses `/api/generate` et `/api/chat` pour les images.',
          '[Bibliothèque de modèles Ollama](https://ollama.com/library) — la bibliothèque en direct utilisée pour vérifier chaque modèle listé dans cet article, y compris les pages individuelles pour [llava](https://ollama.com/library/llava), [llama3.2-vision](https://ollama.com/library/llama3.2-vision), [qwen2.5vl](https://ollama.com/library/qwen2.5vl), [minicpm-v](https://ollama.com/library/minicpm-v), [moondream](https://ollama.com/library/moondream), [granite3.2-vision](https://ollama.com/library/granite3.2-vision), [gemma3](https://ollama.com/library/gemma3), [llama4](https://ollama.com/library/llama4) et [mistral-small3.1](https://ollama.com/library/mistral-small3.1).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Avis LLaVA (2026)](/fr/power-local-llm/llava-review) — un approfondissement dédié à LLaVA spécifiquement, incluant son histoire et la nuance de sa licence.',
          '[Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, Qwen3-VL & configuration multimodale Ollama](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — une comparaison plus large et tâche par tâche des modèles de vision locaux actuels.',
          '[Dernière version d\'Ollama 2026 : v0.33.1 + Meilleurs modèles par cas d\'usage](/local-llms/top-open-source-models-ollama) — le catalogue de modèles plus large d\'Ollama au-delà de la vision, y compris les modèles textuels les plus populaires.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modèles de vision Ollama (2026) : comment exécuter réellement des modèles d\'image en local',
      description:
        'Modèles de vision Ollama 2026 : le guide pratique pour exécuter des modèles capables d\'image via Ollama. Vraies commandes pull/run, la forme JSON de /api/generate avec des images en base64, et quels modèles sont réellement listés.',
      url: 'https://promptquorum.com/fr/power-local-llm/ollama-vision-models-review',
      inLanguage: 'fr',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Développeurs exécutant ou envisageant des modèles capables de vision via Ollama' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Modèle vision-langage' },
        { '@type': 'Thing', name: 'IA multimodale' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/fr/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/fr/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Modèles de vision Ollama (2026)', item: 'https://promptquorum.com/fr/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-es.webp',
    title: 'Modelos de visión de Ollama (2026): cómo ejecutar realmente modelos de imagen en local',
    seoTitle: 'Modelos de visión de Ollama 2026: una guía práctica',
    intro:
      'Ollama, el ejecutor de modelos locales construido sobre [llama.cpp](https://github.com/ggml-org/llama.cpp), añadió soporte multimodal (entrada de imagen) ya en la versión 0.1.15 en diciembre de 2023, y lo reconstruyó en un motor multimodal dedicado en mayo de 2026. Esta guía es una referencia práctica y enfocada para ejecutar realmente modelos capaces de visión a través de Ollama hoy: qué modelos figuran actualmente en su [biblioteca](https://ollama.com/library), la sintaxis real de CLI y API HTTP para pasar una imagen, y orientación honesta sobre para qué no es bueno Ollama. Para un análisis profundo de un modelo específico, consulta el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum; para una comparación más amplia entre todos los modelos de visión locales sin importar el ejecutor, consulta la [guía de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026).',
    metaDescription:
      'Modelos de visión de Ollama 2026: la guía práctica para ejecutar modelos capaces de imagen a través de Ollama. Comandos reales pull/run, la forma JSON de /api/generate con imágenes en base64, y qué modelos están realmente listados.',
    twitterDescription:
      'Modelos de visión de Ollama 2026: una guía práctica y enfocada para ejecutar modelos capaces de imagen a través de Ollama — comandos CLI reales, la forma JSON real de /api/generate y /api/chat para imágenes, y qué modelos de visión hay actualmente en la biblioteca de Ollama, verificados.',
    audience:
      'Desarrolladores que ya usan Ollama o lo están considerando y quieren una referencia práctica y verificada para ejecutar específicamente modelos capaces de visión a través de él, en lugar de una comparación abstracta de modelos de visión.',
    readTime: '12 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modelos de visión de Ollama',
    targetKeywords: [
      'modelos de visión ollama',
      'ollama entrada de imagen',
      'ollama run llava',
      'ollama vision api',
      'ollama multimodal',
      'ollama pull modelo de visión',
      'lista modelos de visión ollama',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollama admite la ejecución local de modelos capaces de visión (multimodales), y lo hace desde la versión 0.1.15 en diciembre de 2023.** Al momento de este análisis, la propia [biblioteca de modelos](https://ollama.com/library) de Ollama lista LLaVA (y sus variantes `llava-llama3`/`llava-phi3`/`bakllava`), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 y Mistral Small 3.1 como capaces de visión. Descarga uno con `ollama pull llava`, ejecútalo con `ollama run llava "describe this image: ./photo.jpg"`, o llámalo mediante programación vía `/api/generate` o `/api/chat` con una imagen codificada en base64 en un arreglo `images`. Esta guía cubre los comandos reales, la forma de API documentada, y dónde Ollama es y no es la herramienta adecuada — para un análisis dedicado a LLaVA específicamente, consulta el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: '¿Qué modelos de visión admite Ollama y cómo ejecuto uno?',
        answer:
          'Al momento de este análisis, la biblioteca de Ollama lista LLaVA (más las variantes llava-llama3, llava-phi3 y bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B y superiores), Llama 4 y Mistral Small 3.1 como modelos capaces de visión que puedes descargar directamente. Ejecuta `ollama pull <modelo>` y luego `ollama run <modelo> "describe this image: ./photo.jpg"` — basta con referenciar la ruta del archivo de imagen directamente en el texto del prompt; no existe una bandera `--image` separada. Para uso programático, envía una solicitud POST a `http://localhost:11434/api/generate` o `/api/chat` con la imagen codificada en base64 en un arreglo `images`, documentado en el propio `docs/api.md` de Ollama. Ollama añadió este soporte multimodal en la versión 0.1.15 (diciembre de 2023) y lo reconstruyó en un motor multimodal dedicado en mayo de 2026 para modelos más recientes como Llama 4, Gemma 3, Qwen2.5-VL y Mistral Small 3.1. Ollama es solo de inferencia — no puede ajustar ni entrenar un modelo — y, al estar construido principalmente en torno a modelos de pesos abiertos, generalmente irá por detrás de la más reciente capacidad multimodal propietaria en la nube.',
        bullets: [
          'Modelos capaces de visión verificados actualmente en la biblioteca de Ollama: LLaVA, llava-llama3, llava-phi3, bakllava, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: `ollama pull <modelo>` y luego `ollama run <modelo> "describe this image: ./photo.jpg"` — referenciar la ruta del archivo directamente en el prompt.',
          'API HTTP: solicitud POST a `/api/generate` o `/api/chat` con una imagen codificada en base64 en un arreglo `images`, según el propio `docs/api.md` de Ollama.',
          'Soporte multimodal añadido en Ollama v0.1.15 (diciembre de 2023); reconstruido en un motor multimodal dedicado en mayo de 2026.',
          'Ollama es solo de inferencia: sin soporte para ajuste fino o entrenamiento.',
          'Construido sobre llama.cpp desde los orígenes de Ollama a mediados de 2023; ahora también admite MLX de Apple como backend alternativo en Apple Silicon.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Respuesta rápida', anchor: 'quick-answer' },
      { label: 'Historia: Ollama, llama.cpp y el soporte multimodal', anchor: 'history' },
      { label: 'Qué modelos de visión hay realmente en la biblioteca de Ollama', anchor: 'available-models' },
      { label: 'Descargar y ejecutar un modelo de visión: paso a paso', anchor: 'install-walkthrough' },
      { label: 'Ejemplos de uso reales: CLI y API HTTP', anchor: 'usage-examples' },
      { label: 'Orientación sobre VRAM y hardware', anchor: 'vram-guidance' },
      { label: 'Para qué no es bueno Ollama', anchor: 'limitations' },
      { label: 'Alternativas a Ollama para modelos de visión', anchor: 'alternatives' },
      { label: 'Preguntas frecuentes', anchor: 'faq' },
      { label: 'Veredicto', anchor: 'verdict' },
      { label: 'Fuentes', anchor: 'sources' },
      { label: 'Lecturas relacionadas', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumen',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama admite la ejecución local de modelos capaces de visión (multimodales) desde la versión 0.1.15 en diciembre de 2023, actualmente lista LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 y Mistral Small 3.1 en su biblioteca, y admite tanto una CLI simple (referenciar la ruta de un archivo de imagen en el prompt) como una API HTTP (imágenes codificadas en base64 en un arreglo JSON `images`).',
          },
          {
            type: 'plain-terms',
            text: 'Ollama es la herramienta que te permite descargar y ejecutar modelos de IA en tu propio ordenador con un solo comando, y varios de esos modelos también pueden mirar imágenes y responder preguntas sobre ellas — esta guía muestra los comandos reales y las llamadas de API para lograrlo.',
          },
        ],
        items: [
          'Soporte multimodal añadido en Ollama v0.1.15 (12 de diciembre de 2023); reconstruido en un motor multimodal dedicado en mayo de 2026.',
          'Modelos capaces de visión verificados actualmente listados: LLaVA (más llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: referenciar la ruta de un archivo de imagen directamente en el texto del prompt de `ollama run` — sin bandera separada.',
          'API HTTP: `/api/generate` y `/api/chat` aceptan una imagen codificada en base64 en un arreglo `images`, documentado en el propio `docs/api.md` de Ollama.',
          'Ollama es solo de inferencia: ejecuta modelos, no los ajusta ni entrena.',
          'Construido sobre llama.cpp desde los orígenes de Ollama a mediados de 2023 (repositorio de GitHub creado el 26 de junio de 2023, con licencia MIT); ahora también admite MLX de Apple como backend alternativo en Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'La lista de modelos anterior refleja lo que PromptQuorum confirmó en vivo en ollama.com/library al momento de este análisis. La biblioteca de Ollama cambia; verifica la ficha actual de un modelo antes de depender de ella — consulta la sección Fuentes para las URL exactas de biblioteca verificadas.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'Historia: Ollama, llama.cpp y el soporte multimodal',
        content: [
          '**El [repositorio de GitHub](https://github.com/ollama/ollama) de Ollama se creó el 26 de junio de 2023**, y tiene licencia MIT. Envuelve [llama.cpp](https://github.com/ggml-org/llama.cpp), el motor de inferencia en C/C++ para modelos en formato GGUF, detrás de una interfaz de línea de comandos al estilo Docker y una API HTTP local — la propuesta de valor central es que `ollama run llama3` descarga y ejecuta un modelo sin que el usuario tenga que gestionar directamente dependencias, controladores de GPU o el motor de inferencia subyacente.',
          '**El soporte multimodal (entrada de imagen) se añadió en [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15), lanzada el 12 de diciembre de 2023**, junto con LLaVA como primer modelo de visión compatible. Las notas de la versión describen ejecutar `ollama run llava` y luego escribir directamente la ruta de un archivo de imagen en el prompt interactivo, además de un nuevo parámetro `images` añadido al endpoint HTTP `/api/generate` que acepta imágenes PNG o JPEG codificadas en base64 de hasta 100 MB.',
          '**Ollama reconstruyó el soporte multimodal en un motor multimodal dedicado alrededor de mayo de 2026**, según el propio blog de Ollama, añadiendo soporte de visión de primera clase para familias de modelos más recientes, incluyendo Llama 4, Gemma 3, Qwen2.5-VL y Mistral Small 3.1 — con manejo específico por modelo de la resolución de imagen, metadatos posicionales y mecanismos de atención, en lugar del enfoque más genérico usado para la integración original de LLaVA. La misma actualización trajo descarga a GPU Metal para modelos multimodales en Apple Silicon vía el backend llama.cpp.',
          '**Ollama funciona principalmente sobre el backend llama.cpp, y por separado admite el framework MLX de Apple** como backend alternativo en hardware Apple Silicon, que algunos modelos multimodales más recientes pueden usar para mejor rendimiento en Mac.',
        ],
        faqs: [
          {
            q: '¿Cuándo añadió Ollama soporte para modelos de visión?',
            a: 'Ollama añadió soporte multimodal (entrada de imagen) en la versión 0.1.15, lanzada el 12 de diciembre de 2023, con LLaVA como primer modelo de visión compatible. Lo reconstruyó en un motor multimodal dedicado alrededor de mayo de 2026 para familias de modelos más recientes como Llama 4, Gemma 3, Qwen2.5-VL y Mistral Small 3.1.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Qué modelos de visión hay realmente en la biblioteca de Ollama',
        content: [
          'PromptQuorum verificó cada uno de los siguientes modelos en vivo en [ollama.com/library](https://ollama.com/library) al momento de este análisis — esta lista refleja lo que realmente se puede descargar hoy, no un panorama general de modelos visión-lenguaje que puedan o no estar empaquetados para Ollama.',
        ],
        itemHeadings: true,
        columns: ['Modelo', 'Creador', 'Notas'],
        rows: [
          {
            'Modelo': '[llava](https://ollama.com/library/llava)',
            'Creador': 'UW-Madison / Microsoft Research / Columbia (investigación)',
            'Notas': '7B/13B/34B; consulta el [análisis dedicado de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum',
          },
          {
            'Modelo': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            'Creador': 'Variantes comunitarias',
            'Notas': 'Modelos de arquitectura LLaVA ajustados sobre distintos LLM base',
          },
          {
            'Modelo': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            'Creador': 'Meta',
            'Notas': 'Tamaños 11B y 90B; sólida Q&A de imagen general',
          },
          {
            'Modelo': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            'Creador': 'Alibaba (equipo Qwen)',
            'Notas': '3B/7B/32B/72B; fuerte OCR y comprensión documental',
          },
          {
            'Modelo': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            'Creador': 'Alibaba (equipo Qwen)',
            'Notas': '2B-235B; más reciente que qwen2.5vl, hasta 256K de contexto, la opción OCR/agente más potente aquí',
          },
          {
            'Modelo': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            'Creador': 'OpenBMB',
            'Notas': '~8B, ~5,5 GB; fuerte OCR documental con bajo VRAM, soporte multi-imagen',
          },
          {
            'Modelo': '[moondream](https://ollama.com/library/moondream)',
            'Creador': 'Independiente (Vikhyat K.)',
            'Notas': '1,8B, ~1,7 GB; la opción más liviana aquí, para uso ligero/en el borde',
          },
          {
            'Modelo': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            'Creador': 'IBM',
            'Notas': '~2,4 GB; ajustado para análisis de documentos visuales — tablas, gráficos, infografías',
          },
          {
            'Modelo': '[gemma3](https://ollama.com/library/gemma3)',
            'Creador': 'Google',
            'Notas': 'Los tamaños 4B/12B/27B son multimodales (270M y 1B son solo texto)',
          },
          {
            'Modelo': '[llama4](https://ollama.com/library/llama4)',
            'Creador': 'Meta',
            'Notas': 'Mixture-of-experts, nativamente multimodal; descarga voluminosa (67 GB+)',
          },
          {
            'Modelo': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            'Creador': 'Mistral AI',
            'Notas': '24B, ~15 GB; con licencia Apache-2.0, visión más texto',
          },
        ],
        note: 'La biblioteca de Ollama avanza rápido: `qwen3-vl` ya se ha sumado a `qwen2.5vl` como una opción Qwen de visión más nueva y potente (hasta 256K de contexto) desde que se redactó el resto de este artículo. Modelos sin página propia confirmada en la biblioteca de Ollama al momento de este análisis, aunque se discuten en otros lugares como modelos de visión: `qwen2-vl` (reemplazado por `qwen2.5vl`) y una entrada independiente `llava-next` (las mejoras de LLaVA-NeXT/1.6 están integradas en la propia ficha `llava`). Verifica siempre directamente `ollama.com/library/<nombre>` antes de depender de un nombre de modelo específico — esta tabla es una instantánea, no un feed en vivo.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Descargar y ejecutar un modelo de visión: paso a paso',
        content: 'Esta guía usa LLaVA como ejemplo, pero los mismos pasos aplican a cualquier modelo de la tabla anterior.',
        numberedItems: [
          {
            title: 'Instalar Ollama.',
            whyItMatters: 'Descarga [Ollama](https://ollama.com) para macOS, Linux o Windows. La instalación es un instalador/paquete estándar y toma menos de dos minutos.',
          },
          {
            title: 'Descargar un modelo de visión.',
            whyItMatters: 'Ejecuta `ollama pull llava` (o `ollama pull qwen2.5vl`, `ollama pull minicpm-v`, etc.) — esto descarga los pesos del modelo, cuyo tamaño va desde menos de 2 GB (Moondream) hasta decenas de gigabytes (Llama 4).',
          },
          {
            title: 'Ejecutarlo con una imagen referenciada en el prompt.',
            whyItMatters: 'Ejecuta `ollama run llava "describe this image: ./photo.jpg"`. Ollama detecta la ruta de archivo `.jpg`/`.png` en el texto del prompt y adjunta la imagen automáticamente — este patrón funciona desde la v0.1.15 en diciembre de 2023.',
          },
          {
            title: 'O llamar directamente a la API HTTP.',
            whyItMatters: 'Envía una solicitud POST a `http://localhost:11434/api/generate` o `/api/chat` con la imagen codificada en base64 en un arreglo `images` — la forma JSON exacta está documentada en el propio [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) de Ollama, y se muestra en la sección Ejemplos de uso a continuación.',
          },
          {
            title: '(Opcional) Usar las bibliotecas cliente oficiales.',
            whyItMatters: 'Las bibliotecas oficiales de Python y JavaScript de `ollama` aceptan directamente una ruta de archivo de imagen y manejan la codificación base64 por ti, evitando la codificación manual en scripts.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Ejemplos de uso reales: CLI y API HTTP',
        content: [
          'Estos ejemplos provienen directamente de la propia documentación de Ollama y de formas de solicitud/respuesta verificadas — no de una sintaxis inventada.',
        ],
        codeBlock: `# Descargar y ejecutar vía CLI — referenciar la ruta de la imagen directamente en el prompt
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- API HTTP: /api/generate (documentada en el docs/api.md de Ollama) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<datos de imagen codificados en base64>"]
}'

# --- API HTTP: /api/chat (multi-turno, también documentada en docs/api.md) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<datos de imagen codificados en base64>"] }
  ]
}'

# --- Python: biblioteca oficial ollama (maneja la codificación base64 por ti) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: API HTTP en bruto con codificación base64 manual ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: 'Los nombres exactos de los campos JSON (`images` como lista de cadenas base64, `stream`, `prompt` frente a `messages`) están documentados en el [docs/api.md de Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — verifica la versión actual de ese archivo antes de programar una integración en producción, ya que la API puede evolucionar entre versiones.',
        items: [
          '**No existe una bandera de imagen separada en la CLI.** Ollama detecta una ruta de archivo `.jpg`/`.png`/similar dentro del propio texto del prompt y la adjunta automáticamente.',
          '**`/api/generate` usa `prompt`; `/api/chat` usa `messages`.** Ambos aceptan un arreglo `images` de cadenas codificadas en base64; `/api/chat` admite conversaciones multi-turno con imágenes adjuntas a mensajes individuales.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'Orientación sobre VRAM y hardware',
        content: [
          'Las propias páginas de biblioteca de modelos de Ollama listan el tamaño de descarga de cada modelo, lo cual es una aproximación razonable de la VRAM o RAM que necesita ejecutar un modelo cuantizado — PromptQuorum no encontró una tabla de VRAM autoritativa publicada por separado por Ollama más allá de estos tamaños de descarga por modelo.',
        ],
        columns: ['Modelo', 'Tamaño aprox.', 'Mínimo práctico'],
        rows: [
          { 'Modelo': 'Moondream', 'Tamaño aprox.': '~1,7 GB', 'Mínimo práctico': '4 GB de VRAM / funciona en hardware modesto' },
          { 'Modelo': 'Granite 3.2 Vision', 'Tamaño aprox.': '~2,4 GB', 'Mínimo práctico': '4-6 GB de VRAM' },
          { 'Modelo': 'LLaVA 7B / MiniCPM-V', 'Tamaño aprox.': '~4,7-5,5 GB', 'Mínimo práctico': '6-8 GB de VRAM' },
          { 'Modelo': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', 'Tamaño aprox.': '~6-8 GB', 'Mínimo práctico': '8-10 GB de VRAM' },
          { 'Modelo': 'Mistral Small 3.1', 'Tamaño aprox.': '~15 GB', 'Mínimo práctico': '16-24 GB de VRAM' },
          { 'Modelo': 'LLaVA 34B / Qwen2.5-VL 32B', 'Tamaño aprox.': '~20-21 GB', 'Mínimo práctico': '24 GB+ de VRAM' },
          { 'Modelo': 'Llama 3.2 Vision 90B / Llama 4', 'Tamaño aprox.': '~55-67 GB+', 'Mínimo práctico': 'Multi-GPU o Apple Silicon con mucha memoria' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estos son tamaños de descarga aproximados, no benchmarks de VRAM medidos — PromptQuorum no realizó sus propias pruebas de hardware para este artículo. Un modelo puede ejecutarse solo en CPU a una velocidad mucho más lenta si no cabe en la VRAM disponible; el margen de VRAM realmente utilizable también depende de la longitud de contexto y el tamaño del lote.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para qué no es bueno Ollama',
        content: [
          'Ollama es una forma sólida y activamente desarrollada de ejecutar modelos capaces de visión en local, pero es la herramienta equivocada para las siguientes situaciones:',
        ],
        items: [
          '**Ajustar o entrenar un modelo.** Ollama es solo de inferencia — ejecuta pesos de modelo preentrenados, no proporciona un pipeline de entrenamiento o ajuste fino. Si necesitas ajustar un modelo visión-lenguaje con tus propios datos, necesitas otra cadena de herramientas (como los propios scripts de entrenamiento del repositorio original de LLaVA, o un framework como Hugging Face Transformers).',
          '**La más reciente capacidad multimodal propietaria.** La biblioteca de Ollama está construida en torno a modelos de pesos abiertos. Al momento de este análisis, las API de visión en la nube de GPT-4o, Claude y Gemini generalmente superan a los modelos locales abiertos en comprensión de escenas complejas, reconocimiento de escritura manuscrita e imágenes ambiguas — Ollama es la herramienta adecuada para uso privado y autoalojado a costo marginal cero por imagen, no para igualar el estado del arte absoluto.',
          '**Extracción numérica precisa de gráficos y diagramas.** Esta es una limitación de los propios modelos visión-lenguaje subyacentes, no específica de Ollama como ejecutor — verifica cualquier número extraído contra los datos de origen, sin importar qué modelo o ejecutor uses.',
          '**Una única respuesta unificada a "qué modelo es el mejor".** El modelo de visión adecuado vía Ollama depende de la tarea: Qwen2.5-VL para trabajo documental con mucho OCR, MiniCPM-V para OCR con menor VRAM, Llama 3.2 Vision para Q&A de imagen general, Moondream para la huella más ligera. Consulta la [comparación de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026) de PromptQuorum para orientación tarea por tarea.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas a Ollama para modelos de visión',
        itemHeadings: true,
        columns: ['Herramienta', 'Mejor para', 'Licencia'],
        rows: [
          {
            'Herramienta': '[LM Studio](https://lmstudio.ai)',
            'Mejor para': 'Ejecutor de modelos locales centrado en GUI; confirmado que admite modelos capaces de visión con adjunto de imagen en su interfaz de chat',
            'Licencia': 'Gratuito, aplicación propietaria',
          },
          {
            'Herramienta': '[llama.cpp](https://github.com/ggml-org/llama.cpp) directamente',
            'Mejor para': 'Máximo control de bajo nivel sobre la inferencia, incluido soporte multimodal (estilo llava.cpp), sin la capa envolvente de Ollama',
            'Licencia': 'MIT',
          },
          {
            'Herramienta': '[El propio repositorio de LLaVA](https://github.com/haotian-liu/LLaVA)',
            'Mejor para': 'Control de nivel de investigación, scripts de entrenamiento/ajuste fino — consulta el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum',
            'Licencia': 'Apache-2.0 (código); dependiente del modelo base para los checkpoints',
          },
          {
            'Herramienta': 'MLC-LLM / MLC Chat',
            'Mejor para': 'Despliegue de LLM en el dispositivo en varias plataformas; PromptQuorum no encontró soporte confirmado y oficialmente documentado de modelos visión-lenguaje (VLM) al momento de este análisis — verifica el estado actual antes de depender de él para tareas de visión',
            'Licencia': 'Apache-2.0',
          },
          {
            'Herramienta': 'APIs VLM en la nube (GPT-4o, Claude, Gemini Vision)',
            'Mejor para': 'La mayor capacidad multimodal disponible, sin necesidad de hardware local ni configuración',
            'Licencia': 'Propietaria (API de pago)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Ollama admite modelos de visión?',
            a: 'Sí. Ollama añadió soporte multimodal (entrada de imagen) en la versión 0.1.15, lanzada el 12 de diciembre de 2023, y lo reconstruyó en un motor multimodal dedicado alrededor de mayo de 2026. Al momento de este análisis, su biblioteca lista LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 y Mistral Small 3.1 como modelos capaces de visión.',
          },
          {
            q: '¿Cómo paso una imagen a un modelo en Ollama?',
            a: 'Desde la CLI, referencia la ruta del archivo de imagen directamente en el texto del prompt: `ollama run llava "describe this image: ./photo.jpg"`. No existe una bandera `--image` separada. Mediante programación, envía una solicitud POST a `/api/generate` o `/api/chat` con la imagen codificada en base64 en un arreglo `images`, según el propio docs/api.md de Ollama.',
          },
          {
            q: '¿Cuál es el formato JSON exacto para enviar una imagen a la API de Ollama?',
            a: 'Para `/api/generate`: `{"model": "llava", "prompt": "...", "images": ["<cadena base64>"]}`. Para `/api/chat`: `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<cadena base64>"]}]}`. Ambos están documentados en el repositorio de GitHub de Ollama bajo `docs/api.md`.',
          },
          {
            q: '¿Qué modelos de visión están actualmente disponibles en la biblioteca de Ollama?',
            a: 'Verificados para este análisis: LLaVA (más las variantes llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B y superiores), Llama 4 y Mistral Small 3.1. Verifica directamente ollama.com/library, ya que esta lista puede cambiar.',
          },
          {
            q: '¿Puede Ollama ajustar un modelo de visión?',
            a: 'No. Ollama es solo de inferencia — ejecuta pesos de modelo preentrenados pero no proporciona un pipeline de entrenamiento o ajuste fino. El ajuste fino requiere otra cadena de herramientas, como los propios scripts de entrenamiento del modelo original o un framework como Hugging Face Transformers.',
          },
          {
            q: '¿Está Ollama construido sobre llama.cpp?',
            a: 'Sí. Ollama envuelve llama.cpp, el motor de inferencia en C/C++ para modelos en formato GGUF, detrás de una interfaz de línea de comandos y API HTTP más simples. El repositorio de GitHub de Ollama se creó el 26 de junio de 2023. También admite el framework MLX de Apple como backend alternativo en Apple Silicon.',
          },
          {
            q: '¿Cómo se compara Ollama con las API de visión en la nube como GPT-4o o Gemini?',
            a: 'Ollama ejecuta modelos localmente a costo marginal cero por solicitud y mantiene las imágenes en el dispositivo, pero su biblioteca está construida en torno a modelos de pesos abiertos, que generalmente van por detrás de las API de visión en la nube propietarias en comprensión de escenas complejas, escritura manuscrita e imágenes ambiguas. Elige Ollama para privacidad, control de costos a volumen y uso sin conexión; elige una API en la nube para la mayor capacidad disponible.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredicto',
        content:
          'Ollama ha ofrecido un camino genuinamente simple para ejecutar modelos capaces de visión en local desde diciembre de 2023, y la reconstrucción de su motor multimodal en mayo de 2026 mantuvo esa experiencia actualizada para familias de modelos más recientes como Llama 4, Gemma 3, Qwen2.5-VL y Mistral Small 3.1, junto a opciones consolidadas como LLaVA. El flujo de trabajo central —`ollama pull`, luego `ollama run` con una ruta de imagen en el prompt, o los endpoints HTTP documentados `/api/generate`/`/api/chat`— se ha mantenido estable desde el lanzamiento original v0.1.15, lo cual es en sí mismo un punto a favor de Ollama para quien construya sobre él. No es una herramienta de entrenamiento, y no igualará la más reciente capacidad multimodal propietaria en la nube, pero para la comprensión de imágenes privada, autoalojada y de costo marginal cero, sigue siendo uno de los puntos de entrada más prácticos disponibles. Combina esta guía con el [análisis de LLaVA](/es/power-local-llm/llava-review) de PromptQuorum para profundizar en un modelo específico, o la [comparación de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026) para una selección de modelo tarea por tarea en todo el panorama de modelos de visión locales.',
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Ollama en GitHub](https://github.com/ollama/ollama) — fecha de creación del repositorio, licencia e historial de versiones.',
          '[Notas de la versión v0.1.15 de Ollama](https://github.com/ollama/ollama/releases/tag/v0.1.15) — el anuncio original del soporte multimodal/LLaVA, 12 de diciembre de 2023.',
          '[El nuevo motor de Ollama para modelos multimodales](https://ollama.com/blog/multimodal-models) — la reconstrucción del motor multimodal de mayo de 2026, que cubre Llama 4, Gemma 3, Qwen2.5-VL y Mistral Small 3.1.',
          '[Documentación de la API de Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — la forma documentada de solicitudes/respuestas de `/api/generate` y `/api/chat` para imágenes.',
          '[Biblioteca de modelos de Ollama](https://ollama.com/library) — la biblioteca en vivo usada para verificar cada modelo listado en este artículo, incluidas páginas individuales para [llava](https://ollama.com/library/llava), [llama3.2-vision](https://ollama.com/library/llama3.2-vision), [qwen2.5vl](https://ollama.com/library/qwen2.5vl), [minicpm-v](https://ollama.com/library/minicpm-v), [moondream](https://ollama.com/library/moondream), [granite3.2-vision](https://ollama.com/library/granite3.2-vision), [gemma3](https://ollama.com/library/gemma3), [llama4](https://ollama.com/library/llama4) y [mistral-small3.1](https://ollama.com/library/mistral-small3.1).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecturas relacionadas',
        items: [
          '[Análisis de LLaVA (2026)](/es/power-local-llm/llava-review) — un análisis dedicado a LLaVA específicamente, incluyendo su historia y el matiz de su licencia.',
          '[Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL y configuración multimodal de Ollama](/es/power-local-llm/local-vision-models-llava-ollama-2026) — una comparación más amplia, tarea por tarea, de los modelos de visión locales actuales.',
          '[Última versión de Ollama 2026: v0.33.1 + Mejores modelos por caso de uso](/local-llms/top-open-source-models-ollama) — el catálogo de modelos más amplio de Ollama más allá de la visión, incluyendo qué modelos de texto son más populares.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modelos de visión de Ollama (2026): cómo ejecutar realmente modelos de imagen en local',
      description:
        'Modelos de visión de Ollama 2026: la guía práctica para ejecutar modelos capaces de imagen a través de Ollama. Comandos reales pull/run, la forma JSON de /api/generate con imágenes en base64, y qué modelos están realmente listados.',
      url: 'https://promptquorum.com/es/power-local-llm/ollama-vision-models-review',
      inLanguage: 'es',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desarrolladores que ejecutan o consideran modelos capaces de visión a través de Ollama' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Modelo visión-lenguaje' },
        { '@type': 'Thing', name: 'IA multimodal' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/es/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/es/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Modelos de visión de Ollama (2026)', item: 'https://promptquorum.com/es/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-ja.webp',
    title: 'Ollamaのビジョンモデル(2026):画像モデルをローカルで実際に動かす方法',
    seoTitle: 'Ollamaビジョンモデル2026:実践ガイド',
    intro:
      '[llama.cpp](https://github.com/ggml-org/llama.cpp)上に構築されたローカルモデルランナーOllamaは、2023年12月のバージョン0.1.15でマルチモーダル(画像入力)対応を追加し、2026年5月には専用のマルチモーダルエンジンへと作り直された。本ガイドは、Ollamaで実際にビジョン対応モデルを動かすための実践的なリファレンスである。現在[ライブラリ](https://ollama.com/library)に掲載されているモデル、画像を渡す実際のCLIおよびHTTP APIの構文、そしてOllamaが不向きな用途についても正直に解説する。特定のモデルを深く知りたい場合はPromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を、ランナーを問わずローカルビジョンモデル全体を比較したい場合は[ローカルビジョンモデルガイド](/ja/power-local-llm/local-vision-models-llava-ollama-2026)を参照してほしい。',
    metaDescription:
      'Ollamaビジョンモデル2026:Ollamaで画像対応モデルを動かす実践ガイド。実際のpull/runコマンド、base64画像を使う/api/generateのJSON形式、実際に掲載されているモデル一覧。',
    twitterDescription:
      'Ollamaビジョンモデル2026:Ollamaで画像対応モデルを動かすための実践ガイド。実際のCLIコマンド、/api/generateと/api/chatの実際のJSON形式、現在Ollamaのライブラリにあるビジョンモデルを検証済みで解説。',
    audience:
      'Ollamaをすでに使っている、または導入を検討している開発者で、抽象的なビジョンモデル比較ではなく、Ollamaで実際にビジョン対応モデルを動かすための実践的で検証済みのリファレンスを求める人。',
    readTime: '12分で読めます',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Ollama ビジョンモデル',
    targetKeywords: [
      'ollama ビジョンモデル',
      'ollama 画像入力',
      'ollama run llava',
      'ollama vision api',
      'ollama マルチモーダル',
      'ollama pull vision model',
      'ollama ビジョンモデル 一覧',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollamaはビジョン対応(マルチモーダル)モデルをローカルで動かせる。2023年12月のバージョン0.1.15以降、それは可能だ。** 本レビュー時点で、Ollama自身の[モデルライブラリ](https://ollama.com/library)にはLLaVA(および`llava-llama3`/`llava-phi3`/`bakllava`の各バリアント)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1がビジョン対応モデルとして掲載されている。`ollama pull llava`でダウンロードし、`ollama run llava "describe this image: ./photo.jpg"`で実行するか、`/api/generate`または`/api/chat`にbase64エンコードした画像を`images`配列で渡してプログラムから呼び出せる。本ガイドでは実際のコマンド、ドキュメント化されたAPI形式、そしてOllamaが向いている場面と向いていない場面を正直に扱う——LLaVA単体の詳細レビューはPromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を参照。',
    quickAnswerTop: {
      en: {
        question: 'Ollamaはどのビジョンモデルに対応しており、どうやって実行すればよいか?',
        answer:
          '本レビュー時点で、Ollamaのライブラリには直接pullできるビジョン対応モデルとしてLLaVA(llava-llama3、llava-phi3、bakllavaの各バリアントを含む)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3(4B以上)、Llama 4、Mistral Small 3.1が掲載されている。`ollama pull <モデル名>`を実行し、続けて`ollama run <モデル名> "describe this image: ./photo.jpg"`を実行する——プロンプトのテキスト中に画像のファイルパスを直接書けばよく、専用の`--image`フラグは存在しない。プログラムから使う場合は、`http://localhost:11434/api/generate`または`/api/chat`に対して、base64エンコードした文字列を`images`配列に入れてPOSTする。これはOllama自身の`docs/api.md`に記載されている。Ollamaはこのマルチモーダル対応をバージョン0.1.15(2023年12月)で追加し、2026年5月にはLlama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1といった新しいモデル向けに専用のマルチモーダルエンジンへと作り直した。Ollamaは推論専用であり——モデルのファインチューニングや学習はできない——オープンウェイトモデルを中心に構築されているため、最新のプロプライエタリなクラウドのマルチモーダル性能には一般に及ばない。',
        bullets: [
          '現在Ollamaのライブラリで確認済みのビジョン対応モデル:LLaVA、llava-llama3、llava-phi3、bakllava、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1。',
          'CLI:`ollama pull <モデル名>`の後に`ollama run <モデル名> "describe this image: ./photo.jpg"`——プロンプト中にファイルパスを直接書く。',
          'HTTP API:Ollama自身の`docs/api.md`に従い、`/api/generate`または`/api/chat`にbase64エンコードした画像を`images`配列に入れてPOSTする。',
          'マルチモーダル対応はOllama v0.1.15(2023年12月)で追加され、2026年5月に専用のマルチモーダルエンジンへ作り直された。',
          'Ollamaは推論専用:ファインチューニングや学習には対応していない。',
          'Ollamaが2023年半ばに誕生して以来llama.cppを基盤としており、現在はApple Siliconの代替バックエンドとしてAppleのMLXにも対応している。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'クイックアンサー', anchor: 'quick-answer' },
      { label: '歴史:Ollama、llama.cpp、マルチモーダル対応', anchor: 'history' },
      { label: 'Ollamaのライブラリに実際にあるビジョンモデル', anchor: 'available-models' },
      { label: 'ビジョンモデルのpullと実行:手順', anchor: 'install-walkthrough' },
      { label: '実際の使用例:CLIとHTTP API', anchor: 'usage-examples' },
      { label: 'VRAMとハードウェアの目安', anchor: 'vram-guidance' },
      { label: 'Ollamaが向いていない用途', anchor: 'limitations' },
      { label: 'Ollamaの代替となるビジョンモデルツール', anchor: 'alternatives' },
      { label: 'よくある質問', anchor: 'faq' },
      { label: '結論', anchor: 'verdict' },
      { label: '出典', anchor: 'sources' },
      { label: '関連記事', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '要約',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollamaは2023年12月のバージョン0.1.15以降ビジョン対応(マルチモーダル)モデルのローカル実行に対応しており、現在ライブラリにはLLaVA、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1が掲載され、シンプルなCLI(プロンプト中に画像ファイルパスを記載)とHTTP API(JSONの`images`配列にbase64エンコード画像)の両方に対応している。',
          },
          {
            type: 'plain-terms',
            text: 'Ollamaは、コマンド一つでAIモデルを自分のパソコンにダウンロードして動かせるツールで、その中のいくつかのモデルは画像を見て質問に答えることもできる——本ガイドはそのための実際のコマンドとAPI呼び出しを示す。',
          },
        ],
        items: [
          'マルチモーダル対応はOllama v0.1.15(2023年12月12日)で追加され、2026年5月に専用のマルチモーダルエンジンへ作り直された。',
          '現在掲載が確認されているビジョン対応モデル:LLaVA(llava-llama3、llava-phi3、bakllavaを含む)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1。',
          'CLI:`ollama run`のプロンプトテキスト中に画像ファイルパスを直接記載する——専用フラグはない。',
          'HTTP API:`/api/generate`と`/api/chat`はOllama自身の`docs/api.md`に記載の通り、`images`配列にbase64エンコード画像を受け付ける。',
          'Ollamaは推論専用:モデルを実行するだけで、ファインチューニングや学習はしない。',
          'Ollamaが2023年半ばに誕生して以来llama.cppを基盤とする(GitHubリポジトリは2023年6月26日作成、MITライセンス)。現在はApple Siliconの代替バックエンドとしてAppleのMLXにも対応。',
        ],
        callouts: [
          {
            type: 'note',
            text: '上記のモデル一覧は、本レビュー作成時にPromptQuorumがollama.com/libraryで実際に確認した内容を反映している。Ollamaのライブラリは変化するため、依存する前に最新の掲載状況を確認してほしい——確認した正確なライブラリURLは出典セクションを参照。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '歴史:Ollama、llama.cpp、マルチモーダル対応',
        content: [
          '**Ollamaの[GitHubリポジトリ](https://github.com/ollama/ollama)は2023年6月26日に作成され**、MITライセンスの下で公開されている。GGUF形式のモデル用C/C++推論エンジンである[llama.cpp](https://github.com/ggml-org/llama.cpp)を、Docker風のコマンドラインインターフェースとローカルHTTP APIでラップしている——`ollama run llama3`だけで、依存関係やGPUドライバー、推論エンジン自体をユーザーが直接管理せずにモデルをダウンロードして実行できることが核心的な価値だ。',
          '**マルチモーダル(画像入力)対応は2023年12月12日リリースの[Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15)で追加され**、最初の対応ビジョンモデルとしてLLaVAが加わった。リリースノートでは、`ollama run llava`を実行し、対話プロンプトに画像ファイルパスを直接入力する方法と、`/api/generate`のHTTPエンドポイントに追加された、最大100MBのbase64エンコードPNGまたはJPEG画像を受け付ける新しい`images`パラメータが説明されている。',
          '**Ollamaは2026年5月頃、マルチモーダル対応を専用のマルチモーダルエンジンへと作り直した**——Ollama自身のブログによれば、Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1といった新しいモデルファミリー向けの本格的なビジョン対応を追加し、元のLLaVA統合で使われていたより汎用的な手法ではなく、画像解像度・位置メタデータ・アテンション機構をモデルごとに扱うようにした。同じアップデートで、llama.cppバックエンド経由でApple SiliconのMetal GPUオフロードもマルチモーダルモデルに対応した。',
          '**Ollamaは主にllama.cppバックエンド上で動作し、別途Apple Siliconハードウェア向けの代替バックエンドとしてAppleのMLXフレームワークにも対応している**。一部の新しいマルチモーダルモデルはMac上での性能向上のためにこれを利用できる。',
        ],
        faqs: [
          {
            q: 'Ollamaはいつビジョンモデルに対応したのか?',
            a: 'Ollamaは2023年12月12日リリースのバージョン0.1.15でマルチモーダル(画像入力)対応を追加し、最初の対応ビジョンモデルはLLaVAだった。2026年5月頃には、Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1といった新しいモデルファミリー向けに専用のマルチモーダルエンジンへ作り直した。',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Ollamaのライブラリに実際にあるビジョンモデル',
        content: [
          'PromptQuorumは本レビュー作成時、以下の各モデルを[ollama.com/library](https://ollama.com/library)上で実際に確認した——この一覧は、Ollama用にパッケージ化されているかどうか不明なビジョン言語モデル全般の調査ではなく、今日実際にpullできるものを反映している。',
        ],
        itemHeadings: true,
        columns: ['モデル', '開発元', '備考'],
        rows: [
          {
            'モデル': '[llava](https://ollama.com/library/llava)',
            '開発元': 'UW-Madison / Microsoft Research / Columbia(研究)',
            '備考': '7B/13B/34B;PromptQuorumの[LLaVA専門レビュー](/ja/power-local-llm/llava-review)を参照',
          },
          {
            'モデル': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            '開発元': 'コミュニティ製バリアント',
            '備考': 'LLaVAアーキテクチャを異なるベースLLMでファインチューニングしたモデル群',
          },
          {
            'モデル': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            '開発元': 'Meta',
            '備考': '11Bと90Bサイズ;汎用的な画像Q&Aに強い',
          },
          {
            'モデル': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            '開発元': 'Alibaba(Qwenチーム)',
            '備考': '3B/7B/32B/72B;強力なOCRと文書理解',
          },
          {
            'モデル': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            '開発元': 'Alibaba(Qwenチーム)',
            '備考': '2B〜235B;qwen2.5vlより新しく、最大256Kコンテキスト、ここでは最も強力なOCR/ビジュアルエージェント向けの選択肢',
          },
          {
            'モデル': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            '開発元': 'OpenBMB',
            '備考': '約8B、約5.5GB;低VRAMで強力な文書OCR、複数画像対応',
          },
          {
            'モデル': '[moondream](https://ollama.com/library/moondream)',
            '開発元': '個人開発(Vikhyat K.)',
            '備考': '1.8B、約1.7GB;ここでは最小サイズで、軽量/エッジ用途向け',
          },
          {
            'モデル': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            '開発元': 'IBM',
            '備考': '約2.4GB;表・グラフ・インフォグラフィックなど視覚的な文書解析に特化',
          },
          {
            'モデル': '[gemma3](https://ollama.com/library/gemma3)',
            '開発元': 'Google',
            '備考': '4B/12B/27Bサイズがマルチモーダル(270Mと1Bはテキスト専用)',
          },
          {
            'モデル': '[llama4](https://ollama.com/library/llama4)',
            '開発元': 'Meta',
            '備考': 'Mixture-of-Experts構成でネイティブにマルチモーダル;大容量(67GB以上)のダウンロード',
          },
          {
            'モデル': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            '開発元': 'Mistral AI',
            '備考': '24B、約15GB;Apache-2.0ライセンス、ビジョンとテキストの両対応',
          },
        ],
        note: 'Ollamaのライブラリの動きは速い。本記事の他の部分を執筆した後、より新しく高性能なQwenのビジョンモデルとして`qwen3-vl`(最大256Kコンテキスト)が`qwen2.5vl`に加わった。本レビュー時点でOllamaライブラリ上に専用ページがあるとは確認できなかったが、他所でビジョンモデルとして言及されるモデル:`qwen2-vl`(`qwen2.5vl`に置き換えられた)、および独立した`llava-next`エントリ(LLaVA-NeXT/1.6の改良点は`llava`のリスト自体に統合されている)。特定のモデル名に依存する前には必ず`ollama.com/library/<name>`を直接確認してほしい——この表はスナップショットであり、ライブフィードではない。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'ビジョンモデルのpullと実行:手順',
        content: 'この手順ではLLaVAを例に使うが、上記の表にあるどのモデルにも同じ手順が当てはまる。',
        numberedItems: [
          {
            title: 'Ollamaをインストールする。',
            whyItMatters: 'macOS、Linux、Windows用に[Ollama](https://ollama.com)をダウンロードする。インストールは標準的なインストーラー/パッケージで、2分もかからない。',
          },
          {
            title: 'ビジョンモデルをpullする。',
            whyItMatters: '`ollama pull llava`(または`ollama pull qwen2.5vl`、`ollama pull minicpm-v`など)を実行する——これによりモデルの重みがダウンロードされる。サイズは2GB未満(Moondream)から数十GB(Llama 4)まで幅がある。',
          },
          {
            title: 'プロンプトに画像を記載して実行する。',
            whyItMatters: '`ollama run llava "describe this image: ./photo.jpg"`を実行する。Ollamaはプロンプトのテキスト中の`.jpg`/`.png`ファイルパスを検出し、自動的に画像を添付する——このパターンは2023年12月のv0.1.15以降ずっと機能している。',
          },
          {
            title: 'または直接HTTP APIを呼び出す。',
            whyItMatters: '`http://localhost:11434/api/generate`または`/api/chat`に対して、base64エンコードした画像を`images`配列に入れてPOSTする——正確なJSON形式はOllama自身の[docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)に記載されており、下の使用例セクションでも示す。',
          },
          {
            title: '(任意)公式クライアントライブラリを使う。',
            whyItMatters: '公式の`ollama` PythonおよびJavaScriptライブラリは画像ファイルパスを直接受け付け、base64エンコードを自動で処理してくれるため、スクリプト内で手動エンコードする必要がない。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '実際の使用例:CLIとHTTP API',
        content: [
          'これらの例はOllama自身のドキュメントおよび検証済みのリクエスト/レスポンス形式から直接引用したものであり、創作した構文ではない。',
        ],
        codeBlock: `# CLI経由でpullして実行——プロンプト内に画像パスを直接記載
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API: /api/generate (Ollamaのdocs/api.mdに記載) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# --- HTTP API: /api/chat (マルチターン、こちらもdocs/api.mdに記載) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python: 公式ollamaライブラリ(base64エンコードを自動処理) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: 手動base64エンコードによる生のHTTP API呼び出し ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: '正確なJSONフィールド名(base64文字列のリストとしての`images`、`stream`、`prompt`と`messages`の使い分け)は[Ollamaのdocs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)に記載されている——APIはリリース間で変わり得るため、本番連携をスクリプト化する前に最新版のファイルと照らし合わせて確認してほしい。',
        items: [
          '**CLIに専用の画像フラグは存在しない。** Ollamaはプロンプトテキスト自体に含まれる`.jpg`/`.png`などのファイルパスを検出し、自動的に添付する。',
          '**`/api/generate`は`prompt`を使い、`/api/chat`は`messages`を使う。** どちらもbase64エンコードされた文字列の`images`配列を受け付け、`/api/chat`は個々のメッセージに画像を添付したマルチターン会話に対応する。',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAMとハードウェアの目安',
        content: [
          'Ollama自身のモデルライブラリページには各モデルのダウンロードサイズが記載されており、量子化モデルの実行に必要なVRAMやRAMの目安として妥当な指標になる——PromptQuorumは、このモデルごとのダウンロードサイズ以外にOllamaが独自に公開している権威あるVRAM表は見つけられなかった。',
        ],
        columns: ['モデル', '概算サイズ', '実用的な最小要件'],
        rows: [
          { 'モデル': 'Moondream', '概算サイズ': '約1.7GB', '実用的な最小要件': '4GB VRAM/控えめなハードウェアでも動作' },
          { 'モデル': 'Granite 3.2 Vision', '概算サイズ': '約2.4GB', '実用的な最小要件': '4〜6GB VRAM' },
          { 'モデル': 'LLaVA 7B / MiniCPM-V', '概算サイズ': '約4.7〜5.5GB', '実用的な最小要件': '6〜8GB VRAM' },
          { 'モデル': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', '概算サイズ': '約6〜8GB', '実用的な最小要件': '8〜10GB VRAM' },
          { 'モデル': 'Mistral Small 3.1', '概算サイズ': '約15GB', '実用的な最小要件': '16〜24GB VRAM' },
          { 'モデル': 'LLaVA 34B / Qwen2.5-VL 32B', '概算サイズ': '約20〜21GB', '実用的な最小要件': '24GB以上のVRAM' },
          { 'モデル': 'Llama 3.2 Vision 90B / Llama 4', '概算サイズ': '約55〜67GB以上', '実用的な最小要件': 'マルチGPUまたは大容量メモリのApple Silicon' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'これらは概算のダウンロードサイズであり、実測のVRAMベンチマークではない——PromptQuorumは本記事のために独自のハードウェアテストを行っていない。VRAMに収まらない場合でも、モデルはCPUのみでずっと低速に動作できる。実際に使えるVRAMの余裕は、コンテキスト長やバッチサイズにも左右される。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ollamaが向いていない用途',
        content: [
          'Ollamaはビジョン対応モデルをローカルで動かすための、活発に開発が続く優れた手段だが、以下の状況には向いていない。',
        ],
        items: [
          '**モデルのファインチューニングや学習。** Ollamaは推論専用であり——学習済みの重みを実行するだけで、学習やファインチューニングのパイプラインは提供しない。自前のデータでビジョン言語モデルをファインチューニングしたい場合は、別のツールチェーン(元のLLaVAリポジトリ自体の学習スクリプトや、Hugging Face Transformersのようなフレームワークなど)が必要になる。',
          '**最先端のプロプライエタリなマルチモーダル性能。** Ollamaのライブラリはオープンウェイトモデルを中心に構築されている。本レビュー時点では、GPT-4o、Claude、Geminiのクラウドビジョンaiは、複雑なシーン理解、手書き文字認識、曖昧な画像において一般にオープンなローカルモデルをリードしている——Ollamaは1画像あたりの限界費用ゼロでプライベートに自己ホストする用途に向いており、絶対的な最先端に張り合うためのものではない。',
          '**グラフや図表からの正確な数値抽出。** これはOllamaというランナー固有の制約ではなく、基盤となるビジョン言語モデル自体の限界である——どのモデルやランナーを使う場合でも、抽出した数値は元データと必ず照合してほしい。',
          '**「どのモデルが最良か」への単一の答え。** Ollamaでどのビジョンモデルが適しているかはタスク次第だ:OCR中心の文書処理にはQwen2.5-VL、低VRAMでのOCRにはMiniCPM-V、汎用的な画像Q&AにはLlama 3.2 Vision、最軽量にはMoondream。タスク別の詳しい指針はPromptQuorumの[ローカルビジョンモデル比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026)を参照。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Ollamaの代替となるビジョンモデルツール',
        itemHeadings: true,
        columns: ['ツール', '最適な用途', 'ライセンス'],
        rows: [
          {
            'ツール': '[LM Studio](https://lmstudio.ai)',
            '最適な用途': 'GUI中心のローカルモデルランナー;チャットインターフェースでの画像添付によるビジョン対応モデルのサポートを確認済み',
            'ライセンス': '無料、プロプライエタリなアプリケーション',
          },
          {
            'ツール': '[llama.cpp](https://github.com/ggml-org/llama.cpp)を直接使用',
            '最適な用途': 'Ollamaのラッパー層なしで、マルチモーダル(llava.cpp形式)対応を含む推論への最大限の低レベル制御',
            'ライセンス': 'MIT',
          },
          {
            'ツール': '[LLaVA自身のリポジトリ](https://github.com/haotian-liu/LLaVA)',
            '最適な用途': '研究レベルの制御、学習/ファインチューニングスクリプト——PromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を参照',
            'ライセンス': 'Apache-2.0(コード);チェックポイントはベースモデル依存',
          },
          {
            'ツール': 'MLC-LLM / MLC Chat',
            '最適な用途': 'プラットフォーム横断のオンデバイスLLM展開;本レビュー時点でビジョン言語モデル(VLM)対応が公式に文書化されていることは確認できなかった——ビジョンタスクで頼る前に最新状況を確認してほしい',
            'ライセンス': 'Apache-2.0',
          },
          {
            'ツール': 'クラウドVLM API(GPT-4o、Claude、Geminiビジョン)',
            '最適な用途': '入手可能な中で最高のマルチモーダル性能、ローカルのハードウェアやセットアップが不要',
            'ライセンス': 'プロプライエタリ(有料API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'Ollamaはビジョンモデルに対応しているか?',
            a: 'はい。Ollamaは2023年12月12日リリースのバージョン0.1.15でマルチモーダル(画像入力)対応を追加し、2026年5月頃に専用のマルチモーダルエンジンへ作り直した。本レビュー時点で、ライブラリにはLLaVA、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1がビジョン対応モデルとして掲載されている。',
          },
          {
            q: 'Ollamaでモデルに画像を渡すにはどうすればよいか?',
            a: 'CLIからは、プロンプトのテキスト中に画像のファイルパスを直接記載する:`ollama run llava "describe this image: ./photo.jpg"`。専用の`--image`フラグはない。プログラムからは、Ollama自身のdocs/api.mdに従い、`/api/generate`または`/api/chat`にbase64エンコードした画像を`images`配列に入れてPOSTする。',
          },
          {
            q: 'Ollamaのapiに画像を送る際の正確なJSON形式は?',
            a: '`/api/generate`の場合:`{"model": "llava", "prompt": "...", "images": ["<base64 string>"]}`。`/api/chat`の場合:`{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<base64 string>"]}]}`。どちらもOllamaのGitHubリポジトリの`docs/api.md`に記載されている。',
          },
          {
            q: '現在Ollamaのライブラリで利用できるビジョンモデルは?',
            a: '本レビューで確認したもの:LLaVA(llava-llama3、llava-phi3、bakllavaの各バリアントを含む)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3(4B以上)、Llama 4、Mistral Small 3.1。この一覧は変わり得るため、ollama.com/libraryを直接確認してほしい。',
          },
          {
            q: 'Ollamaはビジョンモデルをファインチューニングできるか?',
            a: 'いいえ。Ollamaは推論専用であり——学習済みの重みを実行するだけで、学習やファインチューニングのパイプラインは提供しない。ファインチューニングには、元のモデル自体の学習スクリプトやHugging Face Transformersのようなフレームワークなど、別のツールチェーンが必要になる。',
          },
          {
            q: 'Ollamaはllama.cppを基盤にしているのか?',
            a: 'はい。OllamaはGGUF形式のモデル用C/C++推論エンジンであるllama.cppを、よりシンプルなコマンドラインインターフェースとHTTP APIでラップしている。OllamaのGitHubリポジトリは2023年6月26日に作成された。Apple Siliconの代替バックエンドとしてAppleのMLXフレームワークにも対応している。',
          },
          {
            q: 'OllamaはGPT-4oやGeminiのようなクラウドビジョンAPIとどう比較されるか?',
            a: 'Ollamaはリクエストごとの限界費用ゼロでローカルにモデルを実行し、画像をデバイス上に留めておけるが、そのライブラリはオープンウェイトモデルを中心に構築されており、複雑なシーン理解、手書き文字、曖昧な画像においては一般にプロプライエタリなクラウドビジョンAPIに劣る。プライバシー、大量利用時のコスト管理、オフライン利用にはOllamaを、入手可能な最高性能を求めるならクラウドAPIを選ぶとよい。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '結論',
        content:
          'Ollamaは2023年12月以降、ビジョン対応モデルをローカルで動かすための本当にシンプルな手段を提供し続けており、2026年5月のマルチモーダルエンジン刷新によって、LLaVAのような従来からの選択肢と並んで、Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1といった新しいモデルファミリー向けにもその体験を最新に保っている。中核となるワークフロー——`ollama pull`の後、プロンプトに画像パスを入れて`ollama run`するか、ドキュメント化された`/api/generate`/`/api/chat`のHTTPエンドポイントを使う——は最初のv0.1.15リリース以来安定しており、これはこの上に何かを構築する人にとってOllamaの強みの一つだ。学習ツールではなく、最新のプロプライエタリなクラウドのマルチモーダル性能には及ばないが、プライベートに自己ホストし、画像処理の限界費用をゼロに抑えたい用途には、依然として最も実用的な入り口の一つであり続けている。特定のモデルを深く知りたい場合はPromptQuorumの[LLaVAレビュー](/ja/power-local-llm/llava-review)を、ローカルビジョンモデル全体からタスク別に選びたい場合は[ローカルビジョンモデル比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026)を併せて参照してほしい。',
      },
      sources: {
        id: 'sources',
        title: '出典',
        items: [
          '[Ollama on GitHub](https://github.com/ollama/ollama) — リポジトリの作成日、ライセンス、リリース履歴。',
          '[Ollama v0.1.15リリースノート](https://github.com/ollama/ollama/releases/tag/v0.1.15) — 2023年12月12日、マルチモーダル/LLaVA対応の最初の発表。',
          '[Ollamaのマルチモーダルモデル向け新エンジン](https://ollama.com/blog/multimodal-models) — 2026年5月のマルチモーダルエンジン刷新。Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1を対象。',
          '[Ollama APIドキュメント](https://github.com/ollama/ollama/blob/main/docs/api.md) — 画像に関する`/api/generate`と`/api/chat`のドキュメント化されたリクエスト/レスポンス形式。',
          '[Ollamaモデルライブラリ](https://ollama.com/library) — 本記事に掲載した全モデルの確認に使用したライブラリ本体。個別ページとして[llava](https://ollama.com/library/llava)、[llama3.2-vision](https://ollama.com/library/llama3.2-vision)、[qwen2.5vl](https://ollama.com/library/qwen2.5vl)、[minicpm-v](https://ollama.com/library/minicpm-v)、[moondream](https://ollama.com/library/moondream)、[granite3.2-vision](https://ollama.com/library/granite3.2-vision)、[gemma3](https://ollama.com/library/gemma3)、[llama4](https://ollama.com/library/llama4)、[mistral-small3.1](https://ollama.com/library/mistral-small3.1)を含む。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[LLaVAレビュー(2026)](/ja/power-local-llm/llava-review) — LLaVA単体を深く掘り下げたレビュー。歴史やライセンスの注意点を含む。',
          '[ローカルビジョンモデル2026:LLaVA、Llama 3.2 Vision、Qwen3-VL & Ollamaマルチモーダルセットアップ](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — 現在のローカルビジョンモデルをタスク別に幅広く比較。',
          '[Ollama最新バージョン2026:v0.33.1 + 用途別おすすめモデル](/ja/local-llms/top-open-source-models-ollama) — ビジョン以外を含むOllamaの幅広いモデルカタログと、人気のテキストモデル。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollamaのビジョンモデル(2026):画像モデルをローカルで実際に動かす方法',
      description:
        'Ollamaビジョンモデル2026:Ollamaで画像対応モデルを動かす実践ガイド。実際のpull/runコマンド、base64画像を使う/api/generateのJSON形式、実際に掲載されているモデル一覧。',
      url: 'https://promptquorum.com/ja/power-local-llm/ollama-vision-models-review',
      inLanguage: 'ja',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Ollama経由でビジョン対応モデルを動かす、または検討している開発者' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Multimodal AI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ja/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ja/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ollamaのビジョンモデル(2026)', item: 'https://promptquorum.com/ja/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-pt.webp',
    title: 'Modelos de Visão do Ollama (2026): Como Realmente Rodar Modelos de Imagem Localmente',
    seoTitle: 'Modelos de Visão do Ollama 2026: Guia Prático',
    intro:
      'O Ollama, o executor de modelos locais construído sobre o [llama.cpp](https://github.com/ggml-org/llama.cpp), adicionou suporte multimodal (entrada de imagem) na versão 0.1.15 em dezembro de 2023, e o reconstruiu como um mecanismo multimodal dedicado em maio de 2026. Este guia é uma referência prática e focada em realmente rodar modelos com capacidade de visão pelo Ollama hoje: quais modelos estão listados atualmente em sua [biblioteca](https://ollama.com/library), a sintaxe real de CLI e API HTTP para passar uma imagem, e orientações honestas sobre para que o Ollama não serve. Para um aprofundamento em um modelo específico, veja a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum; para uma comparação mais ampla entre todos os modelos de visão locais, independentemente do executor, veja o [guia de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026).',
    metaDescription:
      'Modelos de visão do Ollama 2026: o guia prático para rodar modelos com capacidade de imagem pelo Ollama. Comandos reais de pull/run, o formato JSON do /api/generate com imagens em base64, e quais modelos estão realmente listados.',
    twitterDescription:
      'Modelos de visão do Ollama 2026: um guia prático e focado para rodar modelos com capacidade de imagem pelo Ollama — comandos CLI reais, o formato JSON real de /api/generate e /api/chat para imagens, e quais modelos de visão estão atualmente na biblioteca do Ollama, verificados.',
    audience:
      'Desenvolvedores que já usam ou estão considerando o Ollama e querem uma referência prática e verificada especificamente para rodar modelos com capacidade de visão por ele, em vez de uma comparação abstrata de modelos de visão.',
    readTime: '12 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Modelos de visão do Ollama',
    targetKeywords: [
      'modelos de visão ollama',
      'ollama entrada de imagem',
      'ollama run llava',
      'ollama vision api',
      'ollama multimodal',
      'ollama pull modelo de visão',
      'lista de modelos de visão ollama',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**O Ollama oferece suporte para rodar modelos com capacidade de visão (multimodais) localmente, desde a versão 0.1.15 em dezembro de 2023.** No momento desta análise, a própria [biblioteca de modelos](https://ollama.com/library) do Ollama lista LLaVA (e suas variantes `llava-llama3`/`llava-phi3`/`bakllava`), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 e Mistral Small 3.1 como modelos com capacidade de visão. Baixe um com `ollama pull llava`, execute-o com `ollama run llava "describe this image: ./photo.jpg"`, ou chame-o programaticamente via `/api/generate` ou `/api/chat` com uma imagem codificada em base64 em um array `images`. Este guia cobre os comandos reais, o formato de API documentado e onde o Ollama é — e não é — a ferramenta certa. Para uma análise dedicada ao LLaVA especificamente, veja a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'Quais modelos de visão o Ollama suporta e como executo um?',
        answer:
          'No momento desta análise, a biblioteca do Ollama lista LLaVA (mais as variantes llava-llama3, llava-phi3 e bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B em diante), Llama 4 e Mistral Small 3.1 como modelos com capacidade de visão que podem ser baixados diretamente. Execute `ollama pull <modelo>` e depois `ollama run <modelo> "describe this image: ./photo.jpg"` — basta referenciar o caminho do arquivo de imagem diretamente no texto do prompt; não existe uma flag `--image` separada. Para uso programático, envie um POST para `http://localhost:11434/api/generate` ou `/api/chat` com a imagem como string codificada em base64 em um array `images`, documentado no próprio `docs/api.md` do Ollama. O Ollama adicionou esse suporte multimodal na versão 0.1.15 (dezembro de 2023) e o reconstruiu como um mecanismo multimodal dedicado em maio de 2026 para modelos mais novos como Llama 4, Gemma 3, Qwen2.5-VL e Mistral Small 3.1. O Ollama é apenas para inferência — não consegue fazer fine-tuning ou treinar um modelo — e, por ser construído principalmente em torno de modelos de peso aberto, geralmente fica atrás da capacidade multimodal proprietária mais recente na nuvem.',
        bullets: [
          'Modelos com capacidade de visão verificados atualmente na biblioteca do Ollama: LLaVA, llava-llama3, llava-phi3, bakllava, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: `ollama pull <modelo>` e depois `ollama run <modelo> "describe this image: ./photo.jpg"` — referencie o caminho do arquivo diretamente no prompt.',
          'API HTTP: POST para `/api/generate` ou `/api/chat` com uma imagem codificada em base64 em um array `images`, conforme o próprio `docs/api.md` do Ollama.',
          'Suporte multimodal adicionado no Ollama v0.1.15 (dezembro de 2023); reconstruído como um mecanismo multimodal dedicado em maio de 2026.',
          'O Ollama é apenas para inferência: sem suporte a fine-tuning ou treinamento.',
          'Construído sobre o llama.cpp desde a origem do Ollama em meados de 2023; agora também suporta o MLX da Apple como backend alternativo em Apple Silicon.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'Resposta Rápida', anchor: 'quick-answer' },
      { label: 'História: Ollama, llama.cpp e Suporte Multimodal', anchor: 'history' },
      { label: 'Quais Modelos de Visão Estão Realmente na Biblioteca do Ollama', anchor: 'available-models' },
      { label: 'Baixando e Executando um Modelo de Visão: Passo a Passo', anchor: 'install-walkthrough' },
      { label: 'Exemplos Reais de Uso: CLI e API HTTP', anchor: 'usage-examples' },
      { label: 'Orientação de VRAM e Hardware', anchor: 'vram-guidance' },
      { label: 'Para que o Ollama Não Serve', anchor: 'limitations' },
      { label: 'Alternativas ao Ollama para Modelos de Visão', anchor: 'alternatives' },
      { label: 'Perguntas Frequentes', anchor: 'faq' },
      { label: 'Veredito', anchor: 'verdict' },
      { label: 'Fontes', anchor: 'sources' },
      { label: 'Leitura Relacionada', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'Resumo',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'O Ollama suporta rodar modelos com capacidade de visão (multimodais) localmente desde a versão 0.1.15 em dezembro de 2023, atualmente lista LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 e Mistral Small 3.1 em sua biblioteca, e suporta tanto uma CLI simples (referenciando o caminho de um arquivo de imagem no prompt) quanto uma API HTTP (imagens codificadas em base64 em um array JSON `images`).',
          },
          {
            type: 'plain-terms',
            text: 'O Ollama é a ferramenta que permite baixar e rodar modelos de IA no seu próprio computador com um único comando, e vários desses modelos também conseguem olhar para imagens e responder perguntas sobre elas — este guia mostra os comandos e chamadas de API reais para fazer isso.',
          },
        ],
        items: [
          'Suporte multimodal adicionado no Ollama v0.1.15 (12 de dezembro de 2023); reconstruído como um mecanismo multimodal dedicado em maio de 2026.',
          'Modelos com capacidade de visão verificados atualmente listados: LLaVA (mais llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: referencie o caminho do arquivo de imagem diretamente no texto do prompt de `ollama run` — sem flag separada.',
          'API HTTP: `/api/generate` e `/api/chat` aceitam uma imagem codificada em base64 em um array `images`, documentado no próprio `docs/api.md` do Ollama.',
          'O Ollama é apenas para inferência: ele executa modelos, não faz fine-tuning nem os treina.',
          'Construído sobre o llama.cpp desde a origem do Ollama em meados de 2023 (repositório GitHub criado em 26 de junho de 2023, licenciado sob MIT); agora também suporta o MLX da Apple como backend alternativo em Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'A lista de modelos acima reflete o que o PromptQuorum confirmou ao vivo em ollama.com/library no momento desta análise. A biblioteca do Ollama muda; verifique a listagem atual de um modelo antes de depender dela — veja a seção Fontes para as URLs exatas da biblioteca verificadas.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'História: Ollama, llama.cpp e Suporte Multimodal',
        content: [
          '**O [repositório GitHub](https://github.com/ollama/ollama) do Ollama foi criado em 26 de junho de 2023** e é licenciado sob MIT. Ele envolve o [llama.cpp](https://github.com/ggml-org/llama.cpp), o mecanismo de inferência em C/C++ para modelos no formato GGUF, com uma interface de linha de comando ao estilo Docker e uma API HTTP local — a proposta de valor central é que `ollama run llama3` baixa e executa um modelo sem que o usuário precise gerenciar dependências, drivers de GPU ou o próprio mecanismo de inferência diretamente.',
          '**O suporte multimodal (entrada de imagem) foi adicionado no [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15), lançado em 12 de dezembro de 2023**, junto com o LLaVA como primeiro modelo de visão suportado. As notas de lançamento descrevem executar `ollama run llava` e depois digitar o caminho de um arquivo de imagem diretamente no prompt interativo, além de um novo parâmetro `images` adicionado ao endpoint HTTP `/api/generate`, aceitando imagens PNG ou JPEG codificadas em base64 de até 100MB.',
          '**O Ollama reconstruiu o suporte multimodal como um mecanismo multimodal dedicado por volta de maio de 2026**, segundo o próprio blog do Ollama, adicionando suporte de visão de primeira classe para famílias de modelos mais novas, incluindo Llama 4, Gemma 3, Qwen2.5-VL e Mistral Small 3.1 — com tratamento por modelo de resolução de imagem, metadados posicionais e mecanismos de atenção, em vez da abordagem mais genérica usada na integração original do LLaVA. A mesma atualização trouxe offload de GPU Metal para modelos multimodais em Apple Silicon via o backend llama.cpp.',
          '**O Ollama roda principalmente no backend llama.cpp e, separadamente, suporta o framework MLX da Apple** como backend alternativo em hardware Apple Silicon, que alguns modelos multimodais mais novos podem usar para melhor desempenho no Mac.',
        ],
        faqs: [
          {
            q: 'Quando o Ollama adicionou suporte a modelos de visão?',
            a: 'O Ollama adicionou suporte multimodal (entrada de imagem) na versão 0.1.15, lançada em 12 de dezembro de 2023, com o LLaVA como primeiro modelo de visão suportado. Ele reconstruiu isso como um mecanismo multimodal dedicado por volta de maio de 2026 para famílias de modelos mais novas, como Llama 4, Gemma 3, Qwen2.5-VL e Mistral Small 3.1.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Quais Modelos de Visão Estão Realmente na Biblioteca do Ollama',
        content: [
          'O PromptQuorum verificou cada um dos modelos a seguir ao vivo em [ollama.com/library](https://ollama.com/library) no momento desta análise — esta lista reflete o que é realmente possível baixar hoje, não um levantamento geral de modelos de visão-linguagem que podem ou não estar empacotados para o Ollama.',
        ],
        itemHeadings: true,
        columns: ['Modelo', 'Criador', 'Notas'],
        rows: [
          {
            'Modelo': '[llava](https://ollama.com/library/llava)',
            'Criador': 'UW-Madison / Microsoft Research / Columbia (pesquisa)',
            'Notas': '7B/13B/34B; veja a [análise dedicada ao LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum',
          },
          {
            'Modelo': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            'Criador': 'Variantes da comunidade',
            'Notas': 'Modelos de arquitetura LLaVA ajustados sobre diferentes LLMs base',
          },
          {
            'Modelo': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            'Criador': 'Meta',
            'Notas': 'Tamanhos 11B e 90B; forte em Q&A de imagem geral',
          },
          {
            'Modelo': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            'Criador': 'Alibaba (equipe Qwen)',
            'Notas': '3B/7B/32B/72B; forte OCR e compreensão de documentos',
          },
          {
            'Modelo': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            'Criador': 'Alibaba (equipe Qwen)',
            'Notas': '2B-235B; mais recente que o qwen2.5vl, até 256K de contexto, a opção de OCR/agente visual mais forte aqui',
          },
          {
            'Modelo': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            'Criador': 'OpenBMB',
            'Notas': '~8B, ~5,5 GB; forte OCR de documentos com baixo VRAM, suporte a múltiplas imagens',
          },
          {
            'Modelo': '[moondream](https://ollama.com/library/moondream)',
            'Criador': 'Independente (Vikhyat K.)',
            'Notas': '1,8B, ~1,7 GB; a menor opção desta lista, para uso leve/em edge',
          },
          {
            'Modelo': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            'Criador': 'IBM',
            'Notas': '~2,4 GB; ajustado para análise visual de documentos — tabelas, gráficos, infográficos',
          },
          {
            'Modelo': '[gemma3](https://ollama.com/library/gemma3)',
            'Criador': 'Google',
            'Notas': 'Tamanhos 4B/12B/27B são multimodais (270M e 1B são apenas texto)',
          },
          {
            'Modelo': '[llama4](https://ollama.com/library/llama4)',
            'Criador': 'Meta',
            'Notas': 'Mixture-of-experts, nativamente multimodal; download grande (67 GB+)',
          },
          {
            'Modelo': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            'Criador': 'Mistral AI',
            'Notas': '24B, ~15 GB; licenciado sob Apache-2.0, visão mais texto',
          },
        ],
        note: 'A biblioteca do Ollama muda rápido: o `qwen3-vl` já se juntou ao `qwen2.5vl` como uma opção de visão Qwen mais nova e capaz (até 256K de contexto) desde que o restante deste artigo foi redigido. Modelos sem página própria confirmada na biblioteca do Ollama no momento desta análise, embora discutidos em outros lugares como modelos de visão: `qwen2-vl` (substituído por `qwen2.5vl`) e uma entrada independente `llava-next` (as melhorias do LLaVA-NeXT/1.6 estão incorporadas à própria listagem `llava`). Sempre verifique `ollama.com/library/<nome>` diretamente antes de depender de um nome de modelo específico — esta tabela é um retrato do momento, não um feed ao vivo.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'Baixando e Executando um Modelo de Visão: Passo a Passo',
        content: 'Este passo a passo usa o LLaVA como exemplo, mas os mesmos passos se aplicam a qualquer modelo da tabela acima.',
        numberedItems: [
          {
            title: 'Instale o Ollama.',
            whyItMatters: 'Baixe o [Ollama](https://ollama.com) para macOS, Linux ou Windows. A instalação é um instalador/pacote padrão e leva menos de dois minutos.',
          },
          {
            title: 'Baixe um modelo de visão.',
            whyItMatters: 'Execute `ollama pull llava` (ou `ollama pull qwen2.5vl`, `ollama pull minicpm-v`, etc.) — isso baixa os pesos do modelo, com tamanhos que vão de menos de 2 GB (Moondream) a dezenas de gigabytes (Llama 4).',
          },
          {
            title: 'Execute-o com uma imagem referenciada no prompt.',
            whyItMatters: 'Execute `ollama run llava "describe this image: ./photo.jpg"`. O Ollama detecta o caminho de arquivo `.jpg`/`.png` no texto do prompt e anexa a imagem automaticamente — esse padrão funciona desde a v0.1.15 em dezembro de 2023.',
          },
          {
            title: 'Ou chame a API HTTP diretamente.',
            whyItMatters: 'Envie um POST para `http://localhost:11434/api/generate` ou `/api/chat` com a imagem codificada em base64 em um array `images` — o formato JSON exato está documentado no [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) do próprio Ollama, e mostrado na seção de Exemplos de Uso abaixo.',
          },
          {
            title: '(Opcional) Use as bibliotecas de cliente oficiais.',
            whyItMatters: 'As bibliotecas oficiais `ollama` para Python e JavaScript aceitam um caminho de arquivo de imagem diretamente e cuidam da codificação base64 para você, evitando codificação manual em scripts.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'Exemplos Reais de Uso: CLI e API HTTP',
        content: [
          'Estes exemplos vêm diretamente da própria documentação do Ollama e de formatos de requisição/resposta verificados — não é sintaxe inventada.',
        ],
        codeBlock: `# Baixar e executar via CLI — referencie o caminho da imagem diretamente no prompt
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- API HTTP: /api/generate (documentado no docs/api.md do Ollama) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# --- API HTTP: /api/chat (múltiplos turnos, também documentado no docs/api.md) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python: biblioteca oficial ollama (trata a codificação base64 para você) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: API HTTP bruta com codificação base64 manual ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: 'Os nomes exatos dos campos JSON (`images` como uma lista de strings em base64, `stream`, `prompt` versus `messages`) estão documentados no [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) do Ollama — verifique a versão atual desse arquivo antes de programar uma integração de produção, já que a API pode evoluir entre versões.',
        items: [
          '**Não existe uma flag de imagem separada na CLI.** O Ollama detecta um caminho de arquivo `.jpg`/`.png`/similar dentro do próprio texto do prompt e o anexa automaticamente.',
          '**`/api/generate` usa `prompt`; `/api/chat` usa `messages`.** Ambos aceitam um array `images` de strings codificadas em base64; `/api/chat` suporta conversas de múltiplos turnos com imagens anexadas a mensagens individuais.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'Orientação de VRAM e Hardware',
        content: [
          'As próprias páginas da biblioteca de modelos do Ollama listam o tamanho de download de cada modelo, o que é uma boa aproximação da VRAM ou RAM que um modelo quantizado precisa para rodar — o PromptQuorum não encontrou uma tabela de VRAM autoritativa publicada separadamente pelo Ollama além desses tamanhos de download por modelo.',
        ],
        columns: ['Modelo', 'Tamanho aprox.', 'Mínimo prático'],
        rows: [
          { 'Modelo': 'Moondream', 'Tamanho aprox.': '~1,7 GB', 'Mínimo prático': '4 GB de VRAM / roda em hardware modesto' },
          { 'Modelo': 'Granite 3.2 Vision', 'Tamanho aprox.': '~2,4 GB', 'Mínimo prático': '4-6 GB de VRAM' },
          { 'Modelo': 'LLaVA 7B / MiniCPM-V', 'Tamanho aprox.': '~4,7-5,5 GB', 'Mínimo prático': '6-8 GB de VRAM' },
          { 'Modelo': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', 'Tamanho aprox.': '~6-8 GB', 'Mínimo prático': '8-10 GB de VRAM' },
          { 'Modelo': 'Mistral Small 3.1', 'Tamanho aprox.': '~15 GB', 'Mínimo prático': '16-24 GB de VRAM' },
          { 'Modelo': 'LLaVA 34B / Qwen2.5-VL 32B', 'Tamanho aprox.': '~20-21 GB', 'Mínimo prático': '24 GB+ de VRAM' },
          { 'Modelo': 'Llama 3.2 Vision 90B / Llama 4', 'Tamanho aprox.': '~55-67 GB+', 'Mínimo prático': 'Múltiplas GPUs ou Apple Silicon com muita memória' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Estes são tamanhos de download aproximados, não benchmarks de VRAM medidos — o PromptQuorum não realizou seus próprios testes de hardware para este artigo. Um modelo pode rodar apenas na CPU, muito mais lentamente, se não couber na VRAM disponível; a margem de VRAM realmente utilizável também depende do tamanho do contexto e do batch.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Para que o Ollama Não Serve',
        content: [
          'O Ollama é uma forma sólida e ativamente desenvolvida de rodar modelos com capacidade de visão localmente, mas é a ferramenta errada para as seguintes situações:',
        ],
        items: [
          '**Fazer fine-tuning ou treinar um modelo.** O Ollama é apenas para inferência — ele executa pesos de modelos já treinados, não oferece um pipeline de treinamento ou fine-tuning. Se você precisa fazer fine-tuning de um modelo de visão-linguagem com seus próprios dados, precisa de outro conjunto de ferramentas (como os próprios scripts de treinamento do repositório original do LLaVA, ou um framework como o Hugging Face Transformers).',
          '**Capacidade multimodal proprietária de última geração.** A biblioteca do Ollama é construída em torno de modelos de peso aberto. No momento desta análise, as APIs de visão em nuvem do GPT-4o, Claude e Gemini geralmente lideram em relação aos modelos locais abertos em compreensão de cenas complexas, reconhecimento de caligrafia e imagens ambíguas — o Ollama é a ferramenta certa para uso privado e autogerenciado a custo marginal zero por imagem, não para igualar o estado da arte absoluto.',
          '**Extração numérica precisa de gráficos e tabelas.** Isso é uma limitação dos próprios modelos de visão-linguagem subjacentes, não específica do Ollama como executor — sempre verifique quaisquer números extraídos em relação aos dados de origem, independentemente do modelo ou executor usado.',
          '**Uma resposta unificada única para "qual modelo é o melhor".** O modelo de visão certo via Ollama depende da tarefa: Qwen2.5-VL para trabalho intenso em OCR de documentos, MiniCPM-V para OCR com menos VRAM, Llama 3.2 Vision para Q&A geral de imagens, Moondream para o menor consumo. Veja a [comparação de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026) do PromptQuorum para orientação tarefa por tarefa.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Alternativas ao Ollama para Modelos de Visão',
        itemHeadings: true,
        columns: ['Ferramenta', 'Melhor uso', 'Licença'],
        rows: [
          {
            'Ferramenta': '[LM Studio](https://lmstudio.ai)',
            'Melhor uso': 'Executor de modelos locais focado em GUI; confirmado suporte a modelos com capacidade de visão com anexo de imagem em sua interface de chat',
            'Licença': 'Gratuito, aplicação proprietária',
          },
          {
            'Ferramenta': '[llama.cpp](https://github.com/ggml-org/llama.cpp) diretamente',
            'Melhor uso': 'Controle de baixo nível máximo sobre a inferência, incluindo suporte multimodal (estilo llava.cpp), sem a camada de wrapper do Ollama',
            'Licença': 'MIT',
          },
          {
            'Ferramenta': '[Repositório próprio do LLaVA](https://github.com/haotian-liu/LLaVA)',
            'Melhor uso': 'Controle de nível de pesquisa, scripts de treinamento/fine-tuning — veja a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum',
            'Licença': 'Apache-2.0 (código); depende do modelo base para os checkpoints',
          },
          {
            'Ferramenta': 'MLC-LLM / MLC Chat',
            'Melhor uso': 'Implantação de LLM no dispositivo em múltiplas plataformas; o PromptQuorum não encontrou suporte confirmado e oficialmente documentado a modelos de visão-linguagem (VLM) no momento desta análise — verifique o status atual antes de depender dele para tarefas de visão',
            'Licença': 'Apache-2.0',
          },
          {
            'Ferramenta': 'APIs de VLM em nuvem (GPT-4o, Claude, visão do Gemini)',
            'Melhor uso': 'A maior capacidade multimodal disponível, sem necessidade de hardware ou configuração local',
            'Licença': 'Proprietária (API paga)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas Frequentes',
        faqs: [
          {
            q: 'O Ollama suporta modelos de visão?',
            a: 'Sim. O Ollama adicionou suporte multimodal (entrada de imagem) na versão 0.1.15, lançada em 12 de dezembro de 2023, e o reconstruiu como um mecanismo multimodal dedicado por volta de maio de 2026. No momento desta análise, sua biblioteca lista LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4 e Mistral Small 3.1 como modelos com capacidade de visão.',
          },
          {
            q: 'Como passo uma imagem para um modelo no Ollama?',
            a: 'Pela CLI, referencie o caminho do arquivo da imagem diretamente no texto do prompt: `ollama run llava "describe this image: ./photo.jpg"`. Não existe uma flag `--image` separada. Programaticamente, envie um POST para `/api/generate` ou `/api/chat` com a imagem codificada em base64 em um array `images`, conforme o docs/api.md do próprio Ollama.',
          },
          {
            q: 'Qual é o formato JSON exato para enviar uma imagem para a API do Ollama?',
            a: 'Para `/api/generate`: `{"model": "llava", "prompt": "...", "images": ["<base64 string>"]}`. Para `/api/chat`: `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<base64 string>"]}]}`. Ambos estão documentados no repositório GitHub do Ollama, em `docs/api.md`.',
          },
          {
            q: 'Quais modelos de visão estão atualmente disponíveis na biblioteca do Ollama?',
            a: 'Conforme verificado para esta análise: LLaVA (mais as variantes llava-llama3, llava-phi3, bakllava), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3 (4B em diante), Llama 4 e Mistral Small 3.1. Verifique diretamente em ollama.com/library, já que esta lista pode mudar.',
          },
          {
            q: 'O Ollama consegue fazer fine-tuning de um modelo de visão?',
            a: 'Não. O Ollama é apenas para inferência — ele executa pesos de modelos já treinados, mas não oferece um pipeline de treinamento ou fine-tuning. Fazer fine-tuning exige outro conjunto de ferramentas, como os próprios scripts de treinamento do modelo original ou um framework como o Hugging Face Transformers.',
          },
          {
            q: 'O Ollama é construído sobre o llama.cpp?',
            a: 'Sim. O Ollama envolve o llama.cpp, o mecanismo de inferência em C/C++ para modelos no formato GGUF, com uma interface de linha de comando mais simples e uma API HTTP. O repositório GitHub do Ollama foi criado em 26 de junho de 2023. Ele também suporta o framework MLX da Apple como backend alternativo em Apple Silicon.',
          },
          {
            q: 'Como o Ollama se compara a APIs de visão em nuvem como GPT-4o ou Gemini?',
            a: 'O Ollama executa modelos localmente a custo marginal zero por requisição e mantém as imagens no dispositivo, mas sua biblioteca é construída em torno de modelos de peso aberto, que geralmente ficam atrás das APIs de visão em nuvem proprietárias em compreensão de cenas complexas, caligrafia e imagens ambíguas. Escolha o Ollama para privacidade, controle de custo em volume e uso offline; escolha uma API em nuvem para a maior capacidade disponível.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'Veredito',
        content:
          'O Ollama oferece um caminho genuinamente simples para rodar modelos com capacidade de visão localmente desde dezembro de 2023, e sua reconstrução do mecanismo multimodal em maio de 2026 manteve essa experiência atualizada para famílias de modelos mais novas, como Llama 4, Gemma 3, Qwen2.5-VL e Mistral Small 3.1, ao lado de opções consolidadas como o LLaVA. O fluxo de trabalho principal — `ollama pull`, depois `ollama run` com um caminho de imagem no prompt, ou os endpoints HTTP documentados `/api/generate`/`/api/chat` — permanece estável desde o lançamento original da v0.1.15, o que já é, em si, um ponto a favor do Ollama para quem constrói sobre ele. Não é uma ferramenta de treinamento, e não vai igualar a capacidade multimodal proprietária em nuvem mais recente, mas para compreensão de imagens privada, autogerenciada e a custo marginal zero, continua sendo uma das portas de entrada mais práticas disponíveis. Combine este guia com a [análise do LLaVA](/pt/power-local-llm/llava-review) do PromptQuorum para aprofundamento em um modelo específico, ou a [comparação de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026) para escolha de modelo tarefa por tarefa em todo o cenário de modelos de visão locais.',
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Ollama no GitHub](https://github.com/ollama/ollama) — data de criação do repositório, licença e histórico de versões.',
          '[Notas de lançamento do Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15) — o anúncio original de suporte multimodal/LLaVA, 12 de dezembro de 2023.',
          '[Novo mecanismo do Ollama para modelos multimodais](https://ollama.com/blog/multimodal-models) — a reconstrução do mecanismo multimodal de maio de 2026, cobrindo Llama 4, Gemma 3, Qwen2.5-VL e Mistral Small 3.1.',
          '[Documentação da API do Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — o formato documentado de requisição/resposta de `/api/generate` e `/api/chat` para imagens.',
          '[Biblioteca de modelos do Ollama](https://ollama.com/library) — a biblioteca ao vivo usada para verificar cada modelo listado neste artigo, incluindo páginas individuais para [llava](https://ollama.com/library/llava), [llama3.2-vision](https://ollama.com/library/llama3.2-vision), [qwen2.5vl](https://ollama.com/library/qwen2.5vl), [minicpm-v](https://ollama.com/library/minicpm-v), [moondream](https://ollama.com/library/moondream), [granite3.2-vision](https://ollama.com/library/granite3.2-vision), [gemma3](https://ollama.com/library/gemma3), [llama4](https://ollama.com/library/llama4) e [mistral-small3.1](https://ollama.com/library/mistral-small3.1).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura Relacionada',
        items: [
          '[Análise do LLaVA (2026)](/pt/power-local-llm/llava-review) — um aprofundamento dedicado ao LLaVA especificamente, incluindo sua história e nuances de licenciamento.',
          '[Modelos de Visão Locais 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Configuração Multimodal do Ollama](/pt/power-local-llm/local-vision-models-llava-ollama-2026) — uma comparação mais ampla, tarefa por tarefa, entre os modelos de visão locais atuais.',
          '[Versão Mais Recente do Ollama 2026: v0.33.1 + Melhores Modelos por Caso de Uso](/pt/local-llms/top-open-source-models-ollama) — o catálogo mais amplo de modelos do Ollama além da visão, incluindo quais modelos de texto são mais populares.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Modelos de Visão do Ollama (2026): Como Realmente Rodar Modelos de Imagem Localmente',
      description:
        'Modelos de visão do Ollama 2026: o guia prático para rodar modelos com capacidade de imagem pelo Ollama. Comandos reais de pull/run, o formato JSON do /api/generate com imagens em base64, e quais modelos estão realmente listados.',
      url: 'https://promptquorum.com/pt/power-local-llm/ollama-vision-models-review',
      inLanguage: 'pt-BR',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Desenvolvedores que rodam ou consideram modelos com capacidade de visão pelo Ollama' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Multimodal AI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/pt/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/pt/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Modelos de Visão do Ollama (2026)', item: 'https://promptquorum.com/pt/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-ar.webp',
    title: 'نماذج الرؤية في Ollama (2026): كيف تُشغّل نماذج الصور محليًا فعليًا',
    seoTitle: 'نماذج رؤية Ollama 2026: دليل عملي للتشغيل',
    intro:
      'أضاف Ollama، مُشغّل النماذج المحلي المبني فوق [llama.cpp](https://github.com/ggml-org/llama.cpp)، دعم الوسائط المتعددة (إدخال الصور) في الإصدار 0.1.15 في ديسمبر 2023، وأعاد بناءه ليصبح محرك وسائط متعددة مخصصًا في مايو 2026. هذا الدليل مرجع عملي ومركّز لتشغيل النماذج القادرة على الرؤية عبر Ollama اليوم فعليًا: ما هي النماذج المدرجة حاليًا في [مكتبته](https://ollama.com/library)، وصيغة سطر الأوامر وواجهة HTTP API الفعلية لتمرير صورة، وإرشادات صريحة حول ما لا يصلح له Ollama. للاطلاع بعمق على نموذج محدد، راجع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum؛ ولمقارنة أوسع بين جميع نماذج الرؤية المحلية بغض النظر عن المُشغّل، راجع [دليل نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026).',
    metaDescription:
      'نماذج رؤية Ollama 2026: الدليل العملي لتشغيل النماذج القادرة على معالجة الصور عبر Ollama. أوامر pull/run فعلية، وصيغة JSON الخاصة بـ /api/generate باستخدام صور base64، والنماذج المدرجة فعليًا.',
    twitterDescription:
      'نماذج رؤية Ollama 2026: دليل عملي ومركّز لتشغيل النماذج القادرة على معالجة الصور عبر Ollama — أوامر سطر أوامر فعلية، وصيغة JSON الفعلية لـ /api/generate و/api/chat للصور، ونماذج الرؤية المدرجة حاليًا في مكتبة Ollama، تم التحقق منها.',
    audience:
      'المطورون الذين يستخدمون Ollama بالفعل أو يفكرون في استخدامه ويريدون مرجعًا عمليًا موثقًا لتشغيل النماذج القادرة على الرؤية عبره تحديدًا، بدلًا من مقارنة مجردة لنماذج الرؤية.',
    readTime: '12 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'نماذج رؤية Ollama',
    targetKeywords: [
      'نماذج رؤية ollama',
      'ollama إدخال الصور',
      'ollama run llava',
      'ollama vision api',
      'ollama متعدد الوسائط',
      'ollama pull نموذج رؤية',
      'قائمة نماذج رؤية ollama',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**يدعم Ollama تشغيل النماذج القادرة على الرؤية (متعددة الوسائط) محليًا، وذلك منذ الإصدار 0.1.15 في ديسمبر 2023.** حتى وقت هذه المراجعة، تُدرج [مكتبة نماذج](https://ollama.com/library) Ollama نفسها LLaVA (وأشكاله `llava-llama3`/`llava-phi3`/`bakllava`)، وLlama 3.2 Vision، وQwen2.5-VL، وMiniCPM-V، وMoondream، وGranite 3.2 Vision، وGemma 3، وLlama 4، وMistral Small 3.1 بوصفها نماذج قادرة على الرؤية. نزّل أحدها عبر `ollama pull llava`، وشغّله عبر `ollama run llava "describe this image: ./photo.jpg"`، أو استدعه برمجيًا عبر `/api/generate` أو `/api/chat` مع صورة مُرمّزة بـ base64 ضمن مصفوفة `images`. يغطي هذا الدليل الأوامر الفعلية، وصيغة API الموثقة، وأين يكون Ollama الأداة الصحيحة وأين لا يكون — للاطلاع على مراجعة مخصصة لـ LLaVA تحديدًا، راجع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum.',
    quickAnswerTop: {
      en: {
        question: 'ما نماذج الرؤية التي يدعمها Ollama وكيف أُشغّل واحدًا منها؟',
        answer:
          'حتى وقت هذه المراجعة، تُدرج مكتبة Ollama LLaVA (بالإضافة إلى أشكال llava-llama3 وllava-phi3 وbakllava)، وLlama 3.2 Vision، وQwen2.5-VL، وMiniCPM-V، وMoondream، وGranite 3.2 Vision، وGemma 3 (4B فأكبر)، وLlama 4، وMistral Small 3.1 بوصفها نماذج قادرة على الرؤية يمكن تنزيلها مباشرة. شغّل `ollama pull <النموذج>` ثم `ollama run <النموذج> "describe this image: ./photo.jpg"` — تكفي الإشارة إلى مسار ملف الصورة مباشرة داخل نص الطلب؛ لا توجد راية `--image` منفصلة. للاستخدام البرمجي، أرسل طلب POST إلى `http://localhost:11434/api/generate` أو `/api/chat` مع الصورة كسلسلة مُرمّزة بـ base64 ضمن مصفوفة `images`، كما هو موثق في `docs/api.md` الخاص بـ Ollama نفسه. أضاف Ollama هذا الدعم متعدد الوسائط في الإصدار 0.1.15 (ديسمبر 2023) وأعاد بناءه ليصبح محرك وسائط متعددة مخصصًا في مايو 2026 لنماذج أحدث مثل Llama 4 وGemma 3 وQwen2.5-VL وMistral Small 3.1. وOllama مخصص للاستدلال فقط — لا يمكنه ضبط نموذج دقيقًا (fine-tuning) أو تدريبه — ولأنه مبني بشكل أساسي حول نماذج مفتوحة الأوزان، فسيتخلف عمومًا عن أحدث القدرات السحابية الاحتكارية متعددة الوسائط.',
        bullets: [
          'نماذج قادرة على الرؤية تم التحقق منها حاليًا في مكتبة Ollama: LLaVA، وllava-llama3، وllava-phi3، وbakllava، وLlama 3.2 Vision، وQwen2.5-VL، وMiniCPM-V، وMoondream، وGranite 3.2 Vision، وGemma 3، وLlama 4، وMistral Small 3.1.',
          'سطر الأوامر: `ollama pull <النموذج>` ثم `ollama run <النموذج> "describe this image: ./photo.jpg"` — أشِر إلى مسار الملف مباشرة داخل الطلب.',
          'واجهة HTTP: أرسل POST إلى `/api/generate` أو `/api/chat` مع صورة مُرمّزة بـ base64 ضمن مصفوفة `images`، وفق `docs/api.md` الخاص بـ Ollama نفسه.',
          'أُضيف دعم الوسائط المتعددة في Ollama v0.1.15 (ديسمبر 2023)؛ وأُعيد بناؤه ليصبح محرك وسائط متعددة مخصصًا في مايو 2026.',
          'Ollama مخصص للاستدلال فقط: لا يدعم الضبط الدقيق أو التدريب.',
          'مبني على llama.cpp منذ نشأة Ollama في منتصف 2023؛ ويدعم الآن أيضًا إطار MLX من Apple كخلفية بديلة على شرائح Apple Silicon.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: 'الإجابة السريعة', anchor: 'quick-answer' },
      { label: 'التاريخ: Ollama وllama.cpp ودعم الوسائط المتعددة', anchor: 'history' },
      { label: 'نماذج الرؤية الموجودة فعليًا في مكتبة Ollama', anchor: 'available-models' },
      { label: 'تنزيل نموذج رؤية وتشغيله: خطوة بخطوة', anchor: 'install-walkthrough' },
      { label: 'أمثلة استخدام حقيقية: سطر الأوامر وHTTP API', anchor: 'usage-examples' },
      { label: 'إرشادات VRAM والعتاد', anchor: 'vram-guidance' },
      { label: 'ما لا يصلح له Ollama', anchor: 'limitations' },
      { label: 'بدائل Ollama لنماذج الرؤية', anchor: 'alternatives' },
      { label: 'الأسئلة الشائعة', anchor: 'faq' },
      { label: 'الخلاصة', anchor: 'verdict' },
      { label: 'المصادر', anchor: 'sources' },
      { label: 'قراءات ذات صلة', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: 'ملخص سريع',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'يدعم Ollama تشغيل النماذج القادرة على الرؤية (متعددة الوسائط) محليًا منذ الإصدار 0.1.15 في ديسمبر 2023، ويُدرج حاليًا LLaVA وLlama 3.2 Vision وQwen2.5-VL وMiniCPM-V وMoondream وGranite 3.2 Vision وGemma 3 وLlama 4 وMistral Small 3.1 في مكتبته، ويدعم كلًا من سطر أوامر بسيط (الإشارة إلى مسار ملف صورة في الطلب) وواجهة HTTP API (صور مُرمّزة بـ base64 ضمن مصفوفة `images` بصيغة JSON).',
          },
          {
            type: 'plain-terms',
            text: 'Ollama هو الأداة التي تتيح لك تنزيل نماذج الذكاء الاصطناعي وتشغيلها على جهازك الخاص بأمر واحد، وبإمكان عدد من هذه النماذج أيضًا النظر إلى الصور والإجابة عن أسئلة بشأنها — يوضح هذا الدليل الأوامر واستدعاءات API الفعلية للقيام بذلك.',
          },
        ],
        items: [
          'أُضيف دعم الوسائط المتعددة في Ollama v0.1.15 (12 ديسمبر 2023)؛ وأُعيد بناؤه ليصبح محرك وسائط متعددة مخصصًا في مايو 2026.',
          'نماذج قادرة على الرؤية تم التحقق منها ومدرجة حاليًا: LLaVA (بالإضافة إلى llava-llama3 وllava-phi3 وbakllava)، وLlama 3.2 Vision، وQwen2.5-VL، وMiniCPM-V، وMoondream، وGranite 3.2 Vision، وGemma 3، وLlama 4، وMistral Small 3.1.',
          'سطر الأوامر: أشِر إلى مسار ملف الصورة مباشرة داخل نص طلب `ollama run` — لا توجد راية منفصلة.',
          'واجهة HTTP: تقبل `/api/generate` و`/api/chat` صورة مُرمّزة بـ base64 ضمن مصفوفة `images`، موثقة في `docs/api.md` الخاص بـ Ollama نفسه.',
          'Ollama مخصص للاستدلال فقط: يُشغّل النماذج، ولا يضبطها دقيقًا ولا يدربها.',
          'مبني على llama.cpp منذ نشأة Ollama في منتصف 2023 (أُنشئ مستودع GitHub في 26 يونيو 2023، برخصة MIT)؛ ويدعم الآن أيضًا إطار MLX من Apple كخلفية بديلة على شرائح Apple Silicon.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'تعكس قائمة النماذج أعلاه ما أكّده PromptQuorum مباشرة على ollama.com/library وقت إعداد هذه المراجعة. تتغير مكتبة Ollama؛ تحقق من الإدراج الحالي لأي نموذج قبل الاعتماد عليه — راجع قسم المصادر للاطلاع على روابط المكتبة الدقيقة التي تم فحصها.',
          },
        ],
      },
      history: {
        id: 'history',
        title: 'التاريخ: Ollama وllama.cpp ودعم الوسائط المتعددة',
        content: [
          '**أُنشئ [مستودع GitHub](https://github.com/ollama/ollama) الخاص بـ Ollama في 26 يونيو 2023**، وهو مرخّص بموجب MIT. وهو يُغلّف [llama.cpp](https://github.com/ggml-org/llama.cpp)، محرك الاستدلال بلغة C/C++ الخاص بالنماذج بصيغة GGUF، بواجهة سطر أوامر شبيهة بـ Docker وواجهة HTTP محلية — والقيمة الأساسية هي أن `ollama run llama3` يُنزّل النموذج ويُشغّله دون أن يُضطر المستخدم لإدارة الاعتماديات أو تعريفات GPU أو محرك الاستدلال نفسه مباشرة.',
          '**أُضيف دعم الوسائط المتعددة (إدخال الصور) في [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15)، الصادر في 12 ديسمبر 2023**، إلى جانب LLaVA كأول نموذج رؤية مدعوم. تصف ملاحظات الإصدار تشغيل `ollama run llava` ثم كتابة مسار ملف صورة مباشرة في الطلب التفاعلي، إضافة إلى معلمة `images` جديدة أُضيفت إلى نقطة نهاية HTTP الخاصة بـ `/api/generate` تقبل صور PNG أو JPEG مُرمّزة بـ base64 حتى 100 ميغابايت.',
          '**أعاد Ollama بناء دعم الوسائط المتعددة ليصبح محرك وسائط متعددة مخصصًا في حدود مايو 2026**، وفقًا لمدونة Ollama نفسها، مضيفًا دعم رؤية من الدرجة الأولى لعائلات نماذج أحدث تشمل Llama 4 وGemma 3 وQwen2.5-VL وMistral Small 3.1 — مع معالجة خاصة بكل نموذج لدقة الصورة والبيانات الوصفية الموضعية وآليات الانتباه، بدلًا من النهج الأكثر عمومية المُستخدم في تكامل LLaVA الأصلي. جلب التحديث نفسه أيضًا تفريغ معالجة الرسوميات عبر Metal للنماذج متعددة الوسائط على شرائح Apple Silicon عبر خلفية llama.cpp.',
          '**يعمل Ollama بشكل أساسي على خلفية llama.cpp، ويدعم بشكل منفصل إطار MLX من Apple** كخلفية بديلة على عتاد Apple Silicon، والذي يمكن لبعض النماذج متعددة الوسائط الأحدث استخدامه لتحسين الأداء على Mac.',
        ],
        faqs: [
          {
            q: 'متى أضاف Ollama دعم نماذج الرؤية؟',
            a: 'أضاف Ollama دعم الوسائط المتعددة (إدخال الصور) في الإصدار 0.1.15، الصادر في 12 ديسمبر 2023، وكان LLaVA أول نموذج رؤية مدعوم. وأعاد بناء ذلك ليصبح محرك وسائط متعددة مخصصًا في حدود مايو 2026 لعائلات نماذج أحدث مثل Llama 4 وGemma 3 وQwen2.5-VL وMistral Small 3.1.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'نماذج الرؤية الموجودة فعليًا في مكتبة Ollama',
        content: [
          'تحقق PromptQuorum من كل نموذج من النماذج التالية مباشرة على [ollama.com/library](https://ollama.com/library) وقت إعداد هذه المراجعة — تعكس هذه القائمة ما يمكن تنزيله فعليًا اليوم، وليست مسحًا عامًا لنماذج الرؤية واللغة التي قد تكون أو لا تكون مُجهّزة لـ Ollama.',
        ],
        itemHeadings: true,
        columns: ['النموذج', 'الجهة المطوّرة', 'ملاحظات'],
        rows: [
          {
            'النموذج': '[llava](https://ollama.com/library/llava)',
            'الجهة المطوّرة': 'جامعة ويسكونسن-ماديسون / مايكروسوفت للأبحاث / كولومبيا (بحثي)',
            'ملاحظات': '7B/13B/34B؛ راجع [مراجعة LLaVA المخصصة](/ar/power-local-llm/llava-review) من PromptQuorum',
          },
          {
            'النموذج': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            'الجهة المطوّرة': 'أشكال مطورة من المجتمع',
            'ملاحظات': 'نماذج بمعمارية LLaVA مضبوطة دقيقًا على نماذج لغوية أساسية مختلفة',
          },
          {
            'النموذج': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            'الجهة المطوّرة': 'Meta',
            'ملاحظات': 'حجما 11B و90B؛ أداء قوي في الإجابة عن أسئلة الصور العامة',
          },
          {
            'النموذج': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            'الجهة المطوّرة': 'Alibaba (فريق Qwen)',
            'ملاحظات': '3B/7B/32B/72B؛ تعرف ضوئي على الحروف وفهم مستندات قويان',
          },
          {
            'النموذج': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            'الجهة المطوّرة': 'Alibaba (فريق Qwen)',
            'ملاحظات': '2B إلى 235B؛ أحدث من qwen2.5vl، بسياق يصل إلى 256K، وهو أقوى خيار هنا للتعرف الضوئي/الوكيل البصري',
          },
          {
            'النموذج': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            'الجهة المطوّرة': 'OpenBMB',
            'ملاحظات': '~8B، ~5.5 غيغابايت؛ تعرف ضوئي قوي على المستندات بذاكرة VRAM منخفضة، ودعم صور متعددة',
          },
          {
            'النموذج': '[moondream](https://ollama.com/library/moondream)',
            'الجهة المطوّرة': 'مستقل (Vikhyat K.)',
            'ملاحظات': '1.8B، ~1.7 غيغابايت؛ أصغر خيار في هذه القائمة، للاستخدام الخفيف/على الحافة',
          },
          {
            'النموذج': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            'الجهة المطوّرة': 'IBM',
            'ملاحظات': '~2.4 غيغابايت؛ مضبوط لتحليل المستندات البصرية — الجداول والرسوم البيانية والإنفوغرافيك',
          },
          {
            'النموذج': '[gemma3](https://ollama.com/library/gemma3)',
            'الجهة المطوّرة': 'Google',
            'ملاحظات': 'الأحجام 4B/12B/27B متعددة الوسائط (270M و1B نصية فقط)',
          },
          {
            'النموذج': '[llama4](https://ollama.com/library/llama4)',
            'الجهة المطوّرة': 'Meta',
            'ملاحظات': 'بنية خليط خبراء، متعددة الوسائط أصليًا؛ تنزيل كبير (67 غيغابايت فأكثر)',
          },
          {
            'النموذج': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            'الجهة المطوّرة': 'Mistral AI',
            'ملاحظات': '24B، ~15 غيغابايت؛ برخصة Apache-2.0، رؤية ونص معًا',
          },
        ],
        note: 'تتحرك مكتبة Ollama بسرعة: انضم `qwen3-vl` بالفعل إلى `qwen2.5vl` بوصفه خيار رؤية أحدث وأقوى من Qwen (بسياق يصل إلى 256K) منذ كتابة بقية هذا المقال. نماذج لم يُتحقق من وجود صفحة مكتبة خاصة بها في Ollama وقت هذه المراجعة، رغم مناقشتها في أماكن أخرى بوصفها نماذج رؤية: `qwen2-vl` (استُبدل بـ `qwen2.5vl`) ومدخل مستقل باسم `llava-next` (تحسينات LLaVA-NeXT/1.6 مدمجة في قائمة `llava` نفسها). تحقق دائمًا من `ollama.com/library/<الاسم>` مباشرة قبل الاعتماد على اسم نموذج محدد — هذا الجدول لقطة زمنية، وليس تغذية مباشرة.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: 'تنزيل نموذج رؤية وتشغيله: خطوة بخطوة',
        content: 'يستخدم هذا الشرح LLaVA كمثال، لكن الخطوات نفسها تنطبق على أي نموذج من الجدول أعلاه.',
        numberedItems: [
          {
            title: 'ثبّت Ollama.',
            whyItMatters: 'نزّل [Ollama](https://ollama.com) لـ macOS أو Linux أو Windows. التثبيت عبارة عن مثبّت/حزمة قياسية ويستغرق أقل من دقيقتين.',
          },
          {
            title: 'نزّل نموذج رؤية.',
            whyItMatters: 'شغّل `ollama pull llava` (أو `ollama pull qwen2.5vl` أو `ollama pull minicpm-v` وغيرها) — يُنزّل هذا أوزان النموذج، بحجم يتراوح من أقل من 2 غيغابايت (Moondream) إلى عشرات الغيغابايتات (Llama 4).',
          },
          {
            title: 'شغّله مع الإشارة إلى صورة في الطلب.',
            whyItMatters: 'شغّل `ollama run llava "describe this image: ./photo.jpg"`. يكتشف Ollama مسار الملف `.jpg`/`.png` داخل نص الطلب ويُرفق الصورة تلقائيًا — يعمل هذا النمط منذ الإصدار v0.1.15 في ديسمبر 2023.',
          },
          {
            title: 'أو استدعِ واجهة HTTP مباشرة.',
            whyItMatters: 'أرسل POST إلى `http://localhost:11434/api/generate` أو `/api/chat` مع الصورة مُرمّزة بـ base64 ضمن مصفوفة `images` — صيغة JSON الدقيقة موثقة في [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) الخاص بـ Ollama نفسه، وموضحة في قسم أمثلة الاستخدام أدناه.',
          },
          {
            title: '(اختياري) استخدم مكتبات العميل الرسمية.',
            whyItMatters: 'تقبل مكتبتا `ollama` الرسميتان لـ Python وJavaScript مسار ملف صورة مباشرة وتتوليان ترميز base64 نيابة عنك، فتتجنب الترميز اليدوي في النصوص البرمجية.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: 'أمثلة استخدام حقيقية: سطر الأوامر وHTTP API',
        content: [
          'هذه الأمثلة مأخوذة مباشرة من وثائق Ollama نفسها ومن صيغ طلب/استجابة تم التحقق منها — وليست صيغة مُختلقة.',
        ],
        codeBlock: `# التنزيل والتشغيل عبر سطر الأوامر — أشِر إلى مسار الصورة مباشرة في الطلب
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API: /api/generate (موثق في docs/api.md الخاص بـ Ollama) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# --- HTTP API: /api/chat (متعدد الأدوار، موثق أيضًا في docs/api.md) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python: مكتبة ollama الرسمية (تتولى ترميز base64 نيابة عنك) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: استدعاء HTTP API مباشرة مع ترميز base64 يدوي ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: 'أسماء حقول JSON الدقيقة (`images` كقائمة سلاسل base64، و`stream`، و`prompt` مقابل `messages`) موثقة في [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md) الخاص بـ Ollama — تحقق من الإصدار الحالي لهذا الملف قبل برمجة تكامل إنتاجي، لأن الواجهة قد تتطور بين الإصدارات.',
        items: [
          '**لا توجد راية صورة منفصلة في سطر الأوامر.** يكتشف Ollama مسار ملف `.jpg`/`.png` أو ما شابه داخل نص الطلب نفسه ويُرفقه تلقائيًا.',
          '**تستخدم `/api/generate` الحقل `prompt`؛ وتستخدم `/api/chat` الحقل `messages`.** يقبل كلاهما مصفوفة `images` من سلاسل مُرمّزة بـ base64؛ وتدعم `/api/chat` محادثات متعددة الأدوار مع إرفاق صور برسائل فردية.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'إرشادات VRAM والعتاد',
        content: [
          'تُدرج صفحات مكتبة نماذج Ollama نفسها حجم تنزيل كل نموذج، وهو مؤشر معقول لذاكرة VRAM أو RAM التي يحتاجها نموذج مُكمّم للعمل — لم يجد PromptQuorum جدول VRAM موثوقًا منشورًا بشكل منفصل من Ollama يتجاوز أحجام التنزيل هذه لكل نموذج.',
        ],
        columns: ['النموذج', 'الحجم التقريبي', 'الحد الأدنى العملي'],
        rows: [
          { 'النموذج': 'Moondream', 'الحجم التقريبي': '~1.7 غيغابايت', 'الحد الأدنى العملي': '4 غيغابايت VRAM / يعمل على عتاد متواضع' },
          { 'النموذج': 'Granite 3.2 Vision', 'الحجم التقريبي': '~2.4 غيغابايت', 'الحد الأدنى العملي': '4-6 غيغابايت VRAM' },
          { 'النموذج': 'LLaVA 7B / MiniCPM-V', 'الحجم التقريبي': '~4.7-5.5 غيغابايت', 'الحد الأدنى العملي': '6-8 غيغابايت VRAM' },
          { 'النموذج': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', 'الحجم التقريبي': '~6-8 غيغابايت', 'الحد الأدنى العملي': '8-10 غيغابايت VRAM' },
          { 'النموذج': 'Mistral Small 3.1', 'الحجم التقريبي': '~15 غيغابايت', 'الحد الأدنى العملي': '16-24 غيغابايت VRAM' },
          { 'النموذج': 'LLaVA 34B / Qwen2.5-VL 32B', 'الحجم التقريبي': '~20-21 غيغابايت', 'الحد الأدنى العملي': '24 غيغابايت VRAM فأكثر' },
          { 'النموذج': 'Llama 3.2 Vision 90B / Llama 4', 'الحجم التقريبي': '~55-67 غيغابايت فأكثر', 'الحد الأدنى العملي': 'وحدات GPU متعددة أو Apple Silicon بذاكرة كبيرة' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'هذه أحجام تنزيل تقريبية، وليست قياسات VRAM فعلية — لم يُجرِ PromptQuorum اختبارات عتاد خاصة به لهذا المقال. يمكن لنموذج أن يعمل على المعالج وحده بسرعة أبطأ بكثير إذا لم يتّسع في VRAM المتاحة؛ كما تعتمد هوامش VRAM القابلة للاستخدام فعليًا على طول السياق وحجم الدفعة.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'ما لا يصلح له Ollama',
        content: [
          'يُعد Ollama وسيلة قوية ومُطوَّرة باستمرار لتشغيل النماذج القادرة على الرؤية محليًا، لكنه الأداة الخطأ في الحالات التالية:',
        ],
        items: [
          '**ضبط نموذج دقيقًا أو تدريبه.** Ollama مخصص للاستدلال فقط — يُشغّل أوزان نماذج مُدرَّبة مسبقًا، ولا يوفر خط أنابيب للتدريب أو الضبط الدقيق. إذا احتجت إلى ضبط نموذج رؤية-لغة دقيقًا على بياناتك الخاصة، فستحتاج إلى مجموعة أدوات مختلفة (مثل نصوص التدريب الخاصة بمستودع LLaVA الأصلي، أو إطار مثل Hugging Face Transformers).',
          '**القدرة الاحتكارية الأحدث متعددة الوسائط.** مكتبة Ollama مبنية حول نماذج مفتوحة الأوزان. حتى وقت هذه المراجعة، تتفوق عمومًا واجهات الرؤية السحابية لـ GPT-4o وClaude وGemini على النماذج المحلية المفتوحة في فهم المشاهد المعقدة والتعرف على الخط اليدوي والصور الغامضة — Ollama هو الأداة الصحيحة للاستخدام الخاص والمُستضاف ذاتيًا بتكلفة هامشية صفرية لكل صورة، وليس لمضاهاة أحدث ما توصلت إليه التقنية.',
          '**استخراج أرقام دقيقة من الرسوم البيانية والمخططات.** هذا قيد على نماذج الرؤية-اللغة الأساسية نفسها، وليس خاصًا بـ Ollama كمُشغّل — تحقق دائمًا من أي أرقام مستخرجة مقابل البيانات المصدرية بغض النظر عن النموذج أو المُشغّل المستخدم.',
          '**إجابة موحّدة واحدة عن "أي نموذج هو الأفضل".** يعتمد اختيار نموذج الرؤية المناسب عبر Ollama على المهمة: Qwen2.5-VL لعمل مستندات كثيف التعرف الضوئي، وMiniCPM-V للتعرف الضوئي بذاكرة VRAM أقل، وLlama 3.2 Vision للإجابة العامة عن أسئلة الصور، وMoondream لأخف بصمة. راجع [مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026) من PromptQuorum لإرشادات مفصّلة حسب المهمة.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'بدائل Ollama لنماذج الرؤية',
        itemHeadings: true,
        columns: ['الأداة', 'الأنسب لـ', 'الرخصة'],
        rows: [
          {
            'الأداة': '[LM Studio](https://lmstudio.ai)',
            'الأنسب لـ': 'مُشغّل نماذج محلي يعتمد على الواجهة الرسومية أولًا؛ مُؤكَّد دعمه للنماذج القادرة على الرؤية مع إرفاق الصور في واجهة الدردشة',
            'الرخصة': 'مجاني، تطبيق احتكاري',
          },
          {
            'الأداة': '[llama.cpp](https://github.com/ggml-org/llama.cpp) مباشرة',
            'الأنسب لـ': 'أقصى تحكم منخفض المستوى في الاستدلال، بما في ذلك دعم الوسائط المتعددة (بأسلوب llava.cpp)، دون طبقة تغليف Ollama',
            'الرخصة': 'MIT',
          },
          {
            'الأداة': '[مستودع LLaVA نفسه](https://github.com/haotian-liu/LLaVA)',
            'الأنسب لـ': 'تحكم على مستوى بحثي، ونصوص تدريب/ضبط دقيق — راجع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum',
            'الرخصة': 'Apache-2.0 (الكود)؛ ويعتمد على النموذج الأساسي بالنسبة لنقاط التفتيش',
          },
          {
            'الأداة': 'MLC-LLM / MLC Chat',
            'الأنسب لـ': 'نشر نماذج لغوية على الجهاز عبر منصات متعددة؛ لم يجد PromptQuorum دعمًا موثقًا رسميًا ومؤكدًا لنماذج الرؤية-اللغة حتى وقت هذه المراجعة — تحقق من الوضع الحالي قبل الاعتماد عليه لمهام الرؤية',
            'الرخصة': 'Apache-2.0',
          },
          {
            'الأداة': 'واجهات VLM السحابية (GPT-4o، Claude، رؤية Gemini)',
            'الأنسب لـ': 'أعلى قدرة متعددة الوسائط متاحة، دون الحاجة إلى عتاد أو إعداد محلي',
            'الرخصة': 'احتكارية (API مدفوعة)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'هل يدعم Ollama نماذج الرؤية؟',
            a: 'نعم. أضاف Ollama دعم الوسائط المتعددة (إدخال الصور) في الإصدار 0.1.15، الصادر في 12 ديسمبر 2023، وأعاد بناءه ليصبح محرك وسائط متعددة مخصصًا في حدود مايو 2026. حتى وقت هذه المراجعة، تُدرج مكتبته LLaVA وLlama 3.2 Vision وQwen2.5-VL وMiniCPM-V وMoondream وGranite 3.2 Vision وGemma 3 وLlama 4 وMistral Small 3.1 بوصفها نماذج قادرة على الرؤية.',
          },
          {
            q: 'كيف أُمرر صورة إلى نموذج في Ollama؟',
            a: 'من سطر الأوامر، أشِر إلى مسار ملف الصورة مباشرة داخل نص الطلب: `ollama run llava "describe this image: ./photo.jpg"`. لا توجد راية `--image` منفصلة. برمجيًا، أرسل POST إلى `/api/generate` أو `/api/chat` مع الصورة مُرمّزة بـ base64 ضمن مصفوفة `images`، وفق docs/api.md الخاص بـ Ollama نفسه.',
          },
          {
            q: 'ما صيغة JSON الدقيقة لإرسال صورة إلى واجهة Ollama؟',
            a: 'لـ `/api/generate`: `{"model": "llava", "prompt": "...", "images": ["<base64 string>"]}`. لـ `/api/chat`: `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<base64 string>"]}]}`. كلاهما موثق في مستودع Ollama على GitHub تحت `docs/api.md`.',
          },
          {
            q: 'ما نماذج الرؤية المتاحة حاليًا في مكتبة Ollama؟',
            a: 'كما تم التحقق منه لهذه المراجعة: LLaVA (بالإضافة إلى أشكال llava-llama3 وllava-phi3 وbakllava)، وLlama 3.2 Vision، وQwen2.5-VL، وMiniCPM-V، وMoondream، وGranite 3.2 Vision، وGemma 3 (4B فأكبر)، وLlama 4، وMistral Small 3.1. تحقق مباشرة من ollama.com/library لأن هذه القائمة قد تتغير.',
          },
          {
            q: 'هل يمكن لـ Ollama ضبط نموذج رؤية دقيقًا؟',
            a: 'لا. Ollama مخصص للاستدلال فقط — يُشغّل أوزان نماذج مُدرَّبة مسبقًا لكنه لا يوفر خط أنابيب للتدريب أو الضبط الدقيق. يتطلب الضبط الدقيق مجموعة أدوات مختلفة، مثل نصوص التدريب الخاصة بالنموذج الأصلي نفسه أو إطار مثل Hugging Face Transformers.',
          },
          {
            q: 'هل Ollama مبني على llama.cpp؟',
            a: 'نعم. يُغلّف Ollama برنامج llama.cpp، محرك الاستدلال بلغة C/C++ الخاص بالنماذج بصيغة GGUF، بواجهة سطر أوامر أبسط وواجهة HTTP. أُنشئ مستودع Ollama على GitHub في 26 يونيو 2023. كما يدعم إطار MLX من Apple كخلفية بديلة على شرائح Apple Silicon.',
          },
          {
            q: 'كيف يقارن Ollama بواجهات الرؤية السحابية مثل GPT-4o أو Gemini؟',
            a: 'يُشغّل Ollama النماذج محليًا بتكلفة هامشية صفرية لكل طلب ويُبقي الصور على الجهاز، لكن مكتبته مبنية حول نماذج مفتوحة الأوزان، والتي عادةً ما تتخلف عن واجهات الرؤية السحابية الاحتكارية في فهم المشاهد المعقدة والخط اليدوي والصور الغامضة. اختر Ollama من أجل الخصوصية والتحكم بالتكلفة عند الحجم الكبير والاستخدام دون اتصال؛ واختر واجهة سحابية للحصول على أعلى قدرة متاحة.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: 'الخلاصة',
        content:
          'يوفر Ollama منذ ديسمبر 2023 مسارًا بسيطًا فعليًا لتشغيل النماذج القادرة على الرؤية محليًا، وأبقت إعادة بناء محرك الوسائط المتعددة في مايو 2026 تلك التجربة محدّثة لعائلات نماذج أحدث مثل Llama 4 وGemma 3 وQwen2.5-VL وMistral Small 3.1 إلى جانب خيارات راسخة مثل LLaVA. ظل سير العمل الأساسي — `ollama pull` ثم `ollama run` مع مسار صورة في الطلب، أو نقطتا نهاية HTTP الموثقتان `/api/generate`/`/api/chat` — مستقرًا منذ إصدار v0.1.15 الأصلي، وهذا بحد ذاته نقطة لصالح Ollama لمن يبني فوقه. إنه ليس أداة تدريب، ولن يضاهي أحدث قدرة سحابية احتكارية متعددة الوسائط، لكن لفهم الصور بشكل خاص ومُستضاف ذاتيًا وبتكلفة هامشية صفرية، يظل واحدًا من أكثر نقاط الدخول العملية المتاحة. اقرن هذا الدليل مع [مراجعة LLaVA](/ar/power-local-llm/llava-review) من PromptQuorum للتعمق في نموذج محدد، أو [مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026) لاختيار النموذج حسب المهمة عبر مشهد نماذج الرؤية المحلية بأكمله.',
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[Ollama على GitHub](https://github.com/ollama/ollama) — تاريخ إنشاء المستودع، والرخصة، وسجل الإصدارات.',
          '[ملاحظات إصدار Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15) — الإعلان الأصلي لدعم الوسائط المتعددة/LLaVA، 12 ديسمبر 2023.',
          '[محرك Ollama الجديد للنماذج متعددة الوسائط](https://ollama.com/blog/multimodal-models) — إعادة بناء محرك الوسائط المتعددة في مايو 2026، ويغطي Llama 4 وGemma 3 وQwen2.5-VL وMistral Small 3.1.',
          '[وثائق واجهة Ollama](https://github.com/ollama/ollama/blob/main/docs/api.md) — صيغة الطلب/الاستجابة الموثقة لـ `/api/generate` و`/api/chat` الخاصة بالصور.',
          '[مكتبة نماذج Ollama](https://ollama.com/library) — المكتبة الحية المستخدمة للتحقق من كل نموذج مذكور في هذا المقال، بما في ذلك صفحات مستقلة لـ [llava](https://ollama.com/library/llava) و[llama3.2-vision](https://ollama.com/library/llama3.2-vision) و[qwen2.5vl](https://ollama.com/library/qwen2.5vl) و[minicpm-v](https://ollama.com/library/minicpm-v) و[moondream](https://ollama.com/library/moondream) و[granite3.2-vision](https://ollama.com/library/granite3.2-vision) و[gemma3](https://ollama.com/library/gemma3) و[llama4](https://ollama.com/library/llama4) و[mistral-small3.1](https://ollama.com/library/mistral-small3.1).',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[مراجعة LLaVA (2026)](/ar/power-local-llm/llava-review) — تعمّق مخصص في LLaVA تحديدًا، بما في ذلك تاريخه وتفاصيل الترخيص.',
          '[نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وQwen3-VL وإعداد Ollama متعدد الوسائط](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — مقارنة أوسع حسب المهمة بين نماذج الرؤية المحلية الحالية.',
          '[أحدث إصدار من Ollama 2026: v0.33.1 + أفضل النماذج حسب حالة الاستخدام](/ar/local-llms/top-open-source-models-ollama) — كتالوج Ollama الأوسع من النماذج بما يتجاوز الرؤية، بما في ذلك النماذج النصية الأكثر شيوعًا.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'نماذج الرؤية في Ollama (2026): كيف تُشغّل نماذج الصور محليًا فعليًا',
      description:
        'نماذج رؤية Ollama 2026: الدليل العملي لتشغيل النماذج القادرة على معالجة الصور عبر Ollama. أوامر pull/run فعلية، وصيغة JSON الخاصة بـ /api/generate باستخدام صور base64، والنماذج المدرجة فعليًا.',
      url: 'https://promptquorum.com/ar/power-local-llm/ollama-vision-models-review',
      inLanguage: 'ar',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'مطورون يشغّلون أو يفكرون في تشغيل نماذج قادرة على الرؤية عبر Ollama' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Multimodal AI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ar/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ar/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'نماذج الرؤية في Ollama (2026)', item: 'https://promptquorum.com/ar/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-zh.webp',
    title: 'Ollama视觉模型(2026):如何真正在本地运行图像模型',
    seoTitle: 'Ollama视觉模型2026:实用运行指南',
    intro:
      '基于[llama.cpp](https://github.com/ggml-org/llama.cpp)构建的本地模型运行工具Ollama,早在2023年12月的0.1.15版本中就加入了多模态(图像输入)支持,并在2026年5月将其重构为专门的多模态引擎。本指南是一份聚焦实践的参考资料,介绍如何真正通过Ollama运行具备视觉能力的模型:目前其[模型库](https://ollama.com/library)中列出了哪些模型、传递图像的真实CLI与HTTP API语法,以及Ollama不适合做什么的坦诚说明。如果想深入了解某个具体模型,请参阅PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review);若想不分运行工具、更广泛地比较所有本地视觉模型,请参阅[本地视觉模型指南](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。',
    metaDescription:
      'Ollama视觉模型2026:通过Ollama运行具备图像能力模型的实用指南。真实的pull/run命令、使用base64图像的/api/generate JSON格式,以及实际列出的模型。',
    twitterDescription:
      'Ollama视觉模型2026:聚焦实践的Ollama图像模型运行指南——真实CLI命令、/api/generate与/api/chat处理图像的真实JSON格式,以及目前Ollama模型库中经核实的视觉模型。',
    audience:
      '已经在使用或正考虑使用Ollama、希望获得关于如何通过它运行视觉模型的实用、经核实参考资料的开发者,而非抽象层面的视觉模型比较。',
    readTime: '12分钟阅读',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Ollama视觉模型',
    targetKeywords: [
      'ollama视觉模型',
      'ollama图像输入',
      'ollama run llava',
      'ollama vision api',
      'ollama多模态',
      'ollama pull视觉模型',
      'ollama视觉模型列表',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollama支持在本地运行具备视觉能力(多模态)的模型,自2023年12月的0.1.15版本起便是如此。** 截至本次评测,Ollama自己的[模型库](https://ollama.com/library)列出了LLaVA(及其`llava-llama3`/`llava-phi3`/`bakllava`变体)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4以及Mistral Small 3.1作为具备视觉能力的模型。使用`ollama pull llava`下载,通过`ollama run llava "describe this image: ./photo.jpg"`运行,或通过`/api/generate`或`/api/chat`以`images`数组中的base64编码图像方式进行程序化调用。本指南涵盖真实命令、有文档记录的API格式,以及Ollama适合与不适合的场景——若想深入了解LLaVA本身,请参阅PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review)。',
    quickAnswerTop: {
      en: {
        question: 'Ollama支持哪些视觉模型?如何运行它们?',
        answer:
          '截至本次评测,Ollama的模型库列出了可直接下载的视觉模型:LLaVA(及llava-llama3、llava-phi3、bakllava变体)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3(4B及以上)、Llama 4以及Mistral Small 3.1。先运行`ollama pull <模型>`,再运行`ollama run <模型> "describe this image: ./photo.jpg"`——只需在提示词文本中直接引用图像的文件路径即可,不存在单独的`--image`参数。若要程序化调用,可向`http://localhost:11434/api/generate`或`/api/chat`发送POST请求,将图像以base64编码字符串的形式放入`images`数组中,这在Ollama自己的`docs/api.md`中有文档说明。Ollama在0.1.15版本(2023年12月)加入了这一多模态支持,并于2026年5月为Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1等较新模型将其重构为专门的多模态引擎。Ollama仅用于推理——无法对模型进行微调或训练——而且由于主要围绕开放权重模型构建,通常会落后于最新的专有云端多模态能力。',
        bullets: [
          '目前Ollama模型库中已核实的视觉模型:LLaVA、llava-llama3、llava-phi3、bakllava、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1。',
          'CLI:先`ollama pull <模型>`,再`ollama run <模型> "describe this image: ./photo.jpg"`——直接在提示词中引用文件路径。',
          'HTTP API:按照Ollama自己的`docs/api.md`,向`/api/generate`或`/api/chat`发送POST请求,在`images`数组中放入base64编码图像。',
          '多模态支持于Ollama v0.1.15(2023年12月)加入;2026年5月重构为专门的多模态引擎。',
          'Ollama仅用于推理:不支持微调或训练。',
          '自Ollama于2023年年中诞生以来一直基于llama.cpp构建;现在还支持在Apple Silicon上以Apple的MLX作为替代后端。',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '快速答案', anchor: 'quick-answer' },
      { label: '历史:Ollama、llama.cpp与多模态支持', anchor: 'history' },
      { label: 'Ollama模型库中实际有哪些视觉模型', anchor: 'available-models' },
      { label: '下载并运行视觉模型:分步说明', anchor: 'install-walkthrough' },
      { label: '真实使用示例:CLI与HTTP API', anchor: 'usage-examples' },
      { label: 'VRAM与硬件指南', anchor: 'vram-guidance' },
      { label: 'Ollama不适合做什么', anchor: 'limitations' },
      { label: 'Ollama视觉模型的替代方案', anchor: 'alternatives' },
      { label: '常见问题', anchor: 'faq' },
      { label: '结论', anchor: 'verdict' },
      { label: '资料来源', anchor: 'sources' },
      { label: '相关阅读', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '摘要',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama自2023年12月的0.1.15版本起支持在本地运行具备视觉能力(多模态)的模型,目前其模型库中列出了LLaVA、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4和Mistral Small 3.1,并同时支持简单的CLI(在提示词中引用图像文件路径)和HTTP API(在JSON的`images`数组中放入base64编码图像)。',
          },
          {
            type: 'plain-terms',
            text: 'Ollama是一款让你只用一条命令就能在自己电脑上下载并运行AI模型的工具,其中一些模型还能识别图片并回答关于图片的问题——本指南展示了实现这一点的实际命令和API调用方式。',
          },
        ],
        items: [
          '多模态支持于Ollama v0.1.15(2023年12月12日)加入;2026年5月重构为专门的多模态引擎。',
          '目前已核实列出的视觉模型:LLaVA(含llava-llama3、llava-phi3、bakllava)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4、Mistral Small 3.1。',
          'CLI:直接在`ollama run`的提示词文本中引用图像文件路径——无需单独参数。',
          'HTTP API:`/api/generate`和`/api/chat`都接受在`images`数组中放入base64编码图像,这在Ollama自己的`docs/api.md`中有文档说明。',
          'Ollama仅用于推理:它运行模型,但不对其进行微调或训练。',
          '自Ollama于2023年年中诞生以来一直基于llama.cpp构建(GitHub仓库创建于2023年6月26日,采用MIT许可);现在还支持在Apple Silicon上以Apple的MLX作为替代后端。',
        ],
        callouts: [
          {
            type: 'note',
            text: '以上模型列表反映了PromptQuorum在撰写本评测时于ollama.com/library上实时核实的内容。Ollama的模型库会发生变化;在依赖某个模型之前请核实其当前上架状态——具体核实过的模型库网址见资料来源部分。',
          },
        ],
      },
      history: {
        id: 'history',
        title: '历史:Ollama、llama.cpp与多模态支持',
        content: [
          '**Ollama的[GitHub仓库](https://github.com/ollama/ollama)创建于2023年6月26日**,采用MIT许可证。它将面向GGUF格式模型的C/C++推理引擎[llama.cpp](https://github.com/ggml-org/llama.cpp)封装在类似Docker的命令行界面和本地HTTP API之后——其核心价值在于,`ollama run llama3`就能下载并运行一个模型,而无需用户直接管理依赖项、GPU驱动或底层推理引擎。',
          '**多模态(图像输入)支持于2023年12月12日发布的[Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15)中加入**,LLaVA是第一个受支持的视觉模型。发布说明中描述了运行`ollama run llava`后直接在交互式提示符中输入图像文件路径的方法,以及在`/api/generate` HTTP端点新增的`images`参数,该参数接受最大100MB的base64编码PNG或JPEG图像。',
          '**Ollama大约在2026年5月将多模态支持重构为专门的多模态引擎**,据Ollama自己的博客介绍,该更新为Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1等较新模型系列加入了一流的视觉支持——针对图像分辨率、位置元数据和注意力机制采用了逐模型处理方式,而不是原本LLaVA集成所用的更通用方式。同一次更新还为Apple Silicon上的多模态模型带来了通过llama.cpp后端实现的Metal GPU卸载。',
          '**Ollama主要运行在llama.cpp后端上,并另外支持Apple的MLX框架**作为Apple Silicon硬件上的替代后端,部分较新的多模态模型可借此在Mac上获得更好的性能。',
        ],
        faqs: [
          {
            q: 'Ollama是何时加入视觉模型支持的?',
            a: 'Ollama在2023年12月12日发布的0.1.15版本中加入了多模态(图像输入)支持,LLaVA是第一个受支持的视觉模型。大约在2026年5月,它将其重构为专门的多模态引擎,以支持Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1等较新的模型系列。',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Ollama模型库中实际有哪些视觉模型',
        content: [
          'PromptQuorum在撰写本评测时,在[ollama.com/library](https://ollama.com/library)上逐一核实了以下模型——该列表反映的是今天实际可以下载的模型,而不是对可能已打包、也可能未打包进Ollama的视觉语言模型的泛泛调查。',
        ],
        itemHeadings: true,
        columns: ['模型', '开发者', '备注'],
        rows: [
          {
            '模型': '[llava](https://ollama.com/library/llava)',
            '开发者': '威斯康星大学麦迪逊分校 / 微软研究院 / 哥伦比亚大学(研究项目)',
            '备注': '7B/13B/34B;参见PromptQuorum的[LLaVA专项评测](/zh/power-local-llm/llava-review)',
          },
          {
            '模型': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            '开发者': '社区变体',
            '备注': '基于不同基座LLM微调的LLaVA架构模型',
          },
          {
            '模型': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            '开发者': 'Meta',
            '备注': '11B和90B两种规格;通用图像问答能力较强',
          },
          {
            '模型': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            '开发者': '阿里巴巴(Qwen团队)',
            '备注': '3B/7B/32B/72B;OCR与文档理解能力较强',
          },
          {
            '模型': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            '开发者': '阿里巴巴(Qwen团队)',
            '备注': '2B至235B;比qwen2.5vl更新,上下文最高达256K,是本表中OCR/视觉智能体能力最强的选择',
          },
          {
            '模型': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            '开发者': 'OpenBMB',
            '备注': '约8B、约5.5GB;在低VRAM下OCR能力较强,支持多图输入',
          },
          {
            '模型': '[moondream](https://ollama.com/library/moondream)',
            '开发者': '独立开发者(Vikhyat K.)',
            '备注': '1.8B、约1.7GB;本表中体积最小的选项,适合轻量/边缘场景',
          },
          {
            '模型': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            '开发者': 'IBM',
            '备注': '约2.4GB;针对表格、图表、信息图等视觉文档分析进行了调优',
          },
          {
            '模型': '[gemma3](https://ollama.com/library/gemma3)',
            '开发者': 'Google',
            '备注': '4B/12B/27B规格具备多模态能力(270M和1B仅支持文本)',
          },
          {
            '模型': '[llama4](https://ollama.com/library/llama4)',
            '开发者': 'Meta',
            '备注': '混合专家架构,原生多模态;下载体积较大(67GB以上)',
          },
          {
            '模型': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            '开发者': 'Mistral AI',
            '备注': '24B、约15GB;Apache-2.0许可,视觉与文本兼具',
          },
        ],
        note: 'Ollama的模型库更新很快:自本文其余部分撰写以来,`qwen3-vl`已作为比`qwen2.5vl`更新、更强的Qwen视觉模型选项(上下文最高达256K)加入。以下模型截至本次评测尚未确认在Ollama模型库中拥有独立页面,尽管在其他地方被提及为视觉模型:`qwen2-vl`(已被`qwen2.5vl`取代),以及独立的`llava-next`条目(LLaVA-NeXT/1.6的改进已并入`llava`本身的条目)。在依赖某个具体模型名称之前,请始终直接核查`ollama.com/library/<名称>`——本表只是某一时刻的快照,而非实时数据源。',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '下载并运行视觉模型:分步说明',
        content: '本流程以LLaVA为例,但同样的步骤适用于上表中的任何模型。',
        numberedItems: [
          {
            title: '安装Ollama。',
            whyItMatters: '为macOS、Linux或Windows下载[Ollama](https://ollama.com)。安装过程是标准的安装程序/软件包形式,耗时不到两分钟。',
          },
          {
            title: '下载一个视觉模型。',
            whyItMatters: '运行`ollama pull llava`(或`ollama pull qwen2.5vl`、`ollama pull minicpm-v`等)——这会下载模型权重,大小从不到2GB(Moondream)到数十GB(Llama 4)不等。',
          },
          {
            title: '在提示词中引用图像并运行。',
            whyItMatters: '运行`ollama run llava "describe this image: ./photo.jpg"`。Ollama会检测提示词文本中的`.jpg`/`.png`文件路径,并自动附加该图像——这一模式自2023年12月的v0.1.15版本以来一直有效。',
          },
          {
            title: '或者直接调用HTTP API。',
            whyItMatters: '向`http://localhost:11434/api/generate`或`/api/chat`发送POST请求,在`images`数组中放入base64编码的图像——确切的JSON格式记录在Ollama自己的[docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)中,下方的使用示例部分也有展示。',
          },
          {
            title: '(可选)使用官方客户端库。',
            whyItMatters: '官方的`ollama` Python和JavaScript库可以直接接受图像文件路径,并替你处理base64编码,避免在脚本中手动编码。',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '真实使用示例:CLI与HTTP API',
        content: [
          '以下示例直接取自Ollama自己的文档以及经过核实的请求/响应格式——并非凭空编造的语法。',
        ],
        codeBlock: `# 通过CLI下载并运行——在提示词中直接引用图像路径
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API: /api/generate (记录于Ollama的docs/api.md) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# --- HTTP API: /api/chat (多轮对话,同样记录于docs/api.md) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python: 官方ollama库(自动处理base64编码) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: 手动base64编码调用原始HTTP API ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: '确切的JSON字段名称(作为base64字符串列表的`images`、`stream`、`prompt`与`messages`的用法区别)记录在[Ollama的docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)中——由于API可能会在版本之间演进,在将其编写进生产集成脚本之前,请对照该文件的当前版本进行核实。',
        items: [
          '**CLI中不存在单独的图像参数。** Ollama会检测提示词文本本身中包含的`.jpg`/`.png`等文件路径,并自动附加该图像。',
          '**`/api/generate`使用`prompt`;`/api/chat`使用`messages`。** 两者都接受一个由base64编码字符串组成的`images`数组;`/api/chat`支持多轮对话,可为单条消息附加图像。',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM与硬件指南',
        content: [
          'Ollama自己的模型库页面列出了每个模型的下载体积,这可以合理地作为量化模型运行所需VRAM或RAM的参考——PromptQuorum没有找到除这些逐模型下载体积之外、由Ollama单独发布的权威VRAM表。',
        ],
        columns: ['模型', '大致体积', '实用最低要求'],
        rows: [
          { '模型': 'Moondream', '大致体积': '约1.7GB', '实用最低要求': '4GB VRAM/在配置较低的硬件上也能运行' },
          { '模型': 'Granite 3.2 Vision', '大致体积': '约2.4GB', '实用最低要求': '4-6GB VRAM' },
          { '模型': 'LLaVA 7B / MiniCPM-V', '大致体积': '约4.7-5.5GB', '实用最低要求': '6-8GB VRAM' },
          { '模型': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', '大致体积': '约6-8GB', '实用最低要求': '8-10GB VRAM' },
          { '模型': 'Mistral Small 3.1', '大致体积': '约15GB', '实用最低要求': '16-24GB VRAM' },
          { '模型': 'LLaVA 34B / Qwen2.5-VL 32B', '大致体积': '约20-21GB', '实用最低要求': '24GB以上VRAM' },
          { '模型': 'Llama 3.2 Vision 90B / Llama 4', '大致体积': '约55-67GB以上', '实用最低要求': '多GPU或大内存Apple Silicon' },
        ],
        callouts: [
          {
            type: 'note',
            text: '这些是大致的下载体积,而非实测的VRAM基准数据——PromptQuorum并未为本文进行自己的硬件测试。如果模型无法容纳进可用VRAM,仍可仅用CPU运行,但速度会慢得多;实际可用的VRAM余量还取决于上下文长度和批处理大小。',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ollama不适合做什么',
        content: [
          'Ollama是一种在本地运行具备视觉能力模型的可靠且持续更新的方式,但在以下场景中并非合适的工具:',
        ],
        items: [
          '**对模型进行微调或训练。** Ollama仅用于推理——它运行已训练好的模型权重,不提供训练或微调流程。如果你需要在自己的数据上微调一个视觉语言模型,需要使用另一套工具链(例如LLaVA原始仓库自带的训练脚本,或Hugging Face Transformers之类的框架)。',
          '**最前沿的专有多模态能力。** Ollama的模型库围绕开放权重模型构建。截至本次评测,GPT-4o、Claude和Gemini的云端视觉API在复杂场景理解、手写识别和模糊图像方面通常领先于开放的本地模型——Ollama适合以零边际成本进行私有、自托管的图像处理,而不是用来匹配绝对最前沿的技术水平。',
          '**从图表和曲线图中精确提取数字。** 这是底层视觉语言模型本身的局限性,并非Ollama这一运行工具所特有——无论使用哪种模型或运行工具,都应始终将提取出的数字与原始数据进行核对。',
          '**"哪个模型最好"这类问题没有统一答案。** 通过Ollama选择哪个视觉模型取决于具体任务:OCR密集型的文档处理适合Qwen2.5-VL,低VRAM下的OCR适合MiniCPM-V,通用图像问答适合Llama 3.2 Vision,而追求最轻量则适合Moondream。按任务给出的详细建议请参见PromptQuorum的[本地视觉模型比较](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Ollama视觉模型的替代方案',
        itemHeadings: true,
        columns: ['工具', '最适合场景', '许可'],
        rows: [
          {
            '工具': '[LM Studio](https://lmstudio.ai)',
            '最适合场景': '以图形界面为主的本地模型运行工具;已确认在其聊天界面中支持带图像附件的视觉模型',
            '许可': '免费的专有应用程序',
          },
          {
            '工具': '直接使用[llama.cpp](https://github.com/ggml-org/llama.cpp)',
            '最适合场景': '在不经过Ollama封装层的情况下,对推理(包括llava.cpp风格的多模态支持)拥有最大限度的底层控制',
            '许可': 'MIT',
          },
          {
            '工具': '[LLaVA自身的仓库](https://github.com/haotian-liu/LLaVA)',
            '最适合场景': '研究级别的控制、训练/微调脚本——参见PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review)',
            '许可': 'Apache-2.0(代码);权重文件的许可取决于基座模型',
          },
          {
            '工具': 'MLC-LLM / MLC Chat',
            '最适合场景': '跨平台的端侧LLM部署;截至本次评测,PromptQuorum未发现官方文档中有明确认定的视觉语言模型(VLM)支持——在依赖其完成视觉任务前请核实最新状态',
            '许可': 'Apache-2.0',
          },
          {
            '工具': '云端VLM API(GPT-4o、Claude、Gemini视觉)',
            '最适合场景': '可获得的最高多模态能力,无需本地硬件或配置',
            '许可': '专有(付费API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: 'Ollama支持视觉模型吗?',
            a: '支持。Ollama在2023年12月12日发布的0.1.15版本中加入了多模态(图像输入)支持,并在大约2026年5月将其重构为专门的多模态引擎。截至本次评测,其模型库中列出了LLaVA、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3、Llama 4和Mistral Small 3.1作为具备视觉能力的模型。',
          },
          {
            q: '如何在Ollama中向模型传递图像?',
            a: '在CLI中,直接在提示词文本中引用图像的文件路径:`ollama run llava "describe this image: ./photo.jpg"`。不存在单独的`--image`参数。程序化调用时,按照Ollama自己的docs/api.md,向`/api/generate`或`/api/chat`发送POST请求,并在`images`数组中放入base64编码的图像。',
          },
          {
            q: '向Ollama的API发送图像的确切JSON格式是什么?',
            a: '对于`/api/generate`:`{"model": "llava", "prompt": "...", "images": ["<base64 string>"]}`。对于`/api/chat`:`{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<base64 string>"]}]}`。两者都记录在Ollama的GitHub仓库中的`docs/api.md`里。',
          },
          {
            q: 'Ollama模型库目前提供哪些视觉模型?',
            a: '本次评测核实的结果为:LLaVA(含llava-llama3、llava-phi3、bakllava变体)、Llama 3.2 Vision、Qwen2.5-VL、MiniCPM-V、Moondream、Granite 3.2 Vision、Gemma 3(4B及以上)、Llama 4以及Mistral Small 3.1。由于该列表可能发生变化,请直接查看ollama.com/library确认。',
          },
          {
            q: 'Ollama能否对视觉模型进行微调?',
            a: '不能。Ollama仅用于推理——它运行已训练好的模型权重,但不提供训练或微调流程。微调需要另一套工具链,例如原始模型自带的训练脚本,或Hugging Face Transformers之类的框架。',
          },
          {
            q: 'Ollama是基于llama.cpp构建的吗?',
            a: '是的。Ollama将面向GGUF格式模型的C/C++推理引擎llama.cpp,封装在更简单的命令行界面和HTTP API之后。Ollama的GitHub仓库创建于2023年6月26日。它还支持在Apple Silicon上以Apple的MLX框架作为替代后端。',
          },
          {
            q: 'Ollama与GPT-4o或Gemini等云端视觉API相比如何?',
            a: 'Ollama以每次请求零边际成本在本地运行模型,并将图像保留在设备端,但其模型库围绕开放权重模型构建,在复杂场景理解、手写识别和模糊图像方面通常不及专有的云端视觉API。若看重隐私、大规模使用时的成本控制以及离线可用性,选择Ollama;若追求可获得的最高能力,选择云端API。',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '结论',
        content:
          '自2023年12月以来,Ollama一直提供着一种真正简单的方式来本地运行具备视觉能力的模型,而其2026年5月的多模态引擎重构,让这种体验在LLaVA等成熟选项之外,对Llama 4、Gemma 3、Qwen2.5-VL、Mistral Small 3.1等较新模型系列同样保持最新。核心工作流程——先`ollama pull`,再在提示词中带上图像路径运行`ollama run`,或使用有文档记录的`/api/generate`/`/api/chat` HTTP端点——自最初的v0.1.15版本以来一直保持稳定,这对于在其之上进行构建的开发者而言本身就是一个优势。它不是训练工具,也无法匹敌最新的专有云端多模态能力,但对于私有、自托管且边际成本为零的图像理解需求而言,它仍是目前最实用的入门方式之一。若想深入了解某个具体模型,可搭配阅读PromptQuorum的[LLaVA评测](/zh/power-local-llm/llava-review);若想在整个本地视觉模型格局中按任务选型,可参阅[本地视觉模型比较](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。',
      },
      sources: {
        id: 'sources',
        title: '资料来源',
        items: [
          '[Ollama的GitHub仓库](https://github.com/ollama/ollama) —— 仓库创建日期、许可证及发布历史。',
          '[Ollama v0.1.15发布说明](https://github.com/ollama/ollama/releases/tag/v0.1.15) —— 2023年12月12日,多模态/LLaVA支持的最初公告。',
          '[Ollama面向多模态模型的新引擎](https://ollama.com/blog/multimodal-models) —— 2026年5月的多模态引擎重构,涵盖Llama 4、Gemma 3、Qwen2.5-VL和Mistral Small 3.1。',
          '[Ollama API文档](https://github.com/ollama/ollama/blob/main/docs/api.md) —— 关于图像处理的`/api/generate`和`/api/chat`有文档记录的请求/响应格式。',
          '[Ollama模型库](https://ollama.com/library) —— 用于核实本文所列每个模型的实时模型库,包含[llava](https://ollama.com/library/llava)、[llama3.2-vision](https://ollama.com/library/llama3.2-vision)、[qwen2.5vl](https://ollama.com/library/qwen2.5vl)、[minicpm-v](https://ollama.com/library/minicpm-v)、[moondream](https://ollama.com/library/moondream)、[granite3.2-vision](https://ollama.com/library/granite3.2-vision)、[gemma3](https://ollama.com/library/gemma3)、[llama4](https://ollama.com/library/llama4)以及[mistral-small3.1](https://ollama.com/library/mistral-small3.1)的独立页面。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[LLaVA评测(2026)](/zh/power-local-llm/llava-review) —— 专门深入探讨LLaVA本身,包括其历史与许可细节。',
          '[本地视觉模型2026:LLaVA、Llama 3.2 Vision、Qwen3-VL与Ollama多模态配置](/zh/power-local-llm/local-vision-models-llava-ollama-2026) —— 对当前本地视觉模型更广泛的按任务比较。',
          '[Ollama最新版本2026:v0.33.1及按用例划分的最佳模型](/zh/local-llms/top-open-source-models-ollama) —— Ollama在视觉之外更广泛的模型目录,包括哪些文本模型最受欢迎。',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama视觉模型(2026):如何真正在本地运行图像模型',
      description:
        'Ollama视觉模型2026:通过Ollama运行具备图像能力模型的实用指南。真实的pull/run命令、使用base64图像的/api/generate JSON格式,以及实际列出的模型。',
      url: 'https://promptquorum.com/zh/power-local-llm/ollama-vision-models-review',
      inLanguage: 'zh',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: '正在或考虑通过Ollama运行视觉模型的开发者' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Multimodal AI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/zh/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '首页', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/zh/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ollama视觉模型(2026)', item: 'https://promptquorum.com/zh/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-09-06',
    dateModified: '2026-09-06',
    next_refresh_due: '2027-03-05',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/ollama-vision-models-review-hero-ko.webp',
    title: 'Ollama 비전 모델(2026): 이미지 모델을 로컬에서 실제로 실행하는 방법',
    seoTitle: 'Ollama 비전 모델 2026: 실전 실행 가이드',
    intro:
      '[llama.cpp](https://github.com/ggml-org/llama.cpp) 위에 구축된 로컬 모델 실행 도구인 Ollama는 2023년 12월 출시된 버전 0.1.15에서 멀티모달(이미지 입력) 지원을 추가했고, 2026년 5월에는 전용 멀티모달 엔진으로 재구축했다. 이 가이드는 Ollama로 비전 지원 모델을 실제로 실행하기 위한 실용적인 참고 자료다: 현재 [라이브러리](https://ollama.com/library)에 등록된 모델은 무엇인지, 이미지를 전달하는 실제 CLI 및 HTTP API 문법은 어떻게 되는지, 그리고 Ollama가 적합하지 않은 부분에 대한 솔직한 안내까지 다룬다. 특정 모델을 더 깊이 알고 싶다면 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review)를, 실행 도구와 무관하게 로컬 비전 모델 전반을 비교하고 싶다면 [로컬 비전 모델 가이드](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 참고하라.',
    metaDescription:
      'Ollama 비전 모델 2026: Ollama로 이미지 지원 모델을 실행하는 실전 가이드. 실제 pull/run 명령어, base64 이미지를 사용하는 /api/generate JSON 형식, 실제로 등록된 모델 목록.',
    twitterDescription:
      'Ollama 비전 모델 2026: Ollama로 이미지 지원 모델을 실행하는 실용적이고 집중적인 가이드 — 실제 CLI 명령어, /api/generate 및 /api/chat의 실제 이미지 JSON 형식, 그리고 현재 Ollama 라이브러리에 있는 비전 모델을 검증하여 정리했다.',
    audience:
      '이미 Ollama를 사용 중이거나 도입을 고려 중이며, 추상적인 비전 모델 비교가 아니라 Ollama로 비전 지원 모델을 실제로 실행하는 실용적이고 검증된 참고 자료를 원하는 개발자.',
    readTime: '12분 소요',
    educationalLevel: 'Intermediate',
    primaryTerm: 'Ollama 비전 모델',
    targetKeywords: [
      'ollama 비전 모델',
      'ollama 이미지 입력',
      'ollama run llava',
      'ollama vision api',
      'ollama 멀티모달',
      'ollama pull 비전 모델',
      'ollama 비전 모델 목록',
      'ollama api generate images',
    ],
    current_models_mentioned: ['LLaVA', 'Llama 3.2 Vision', 'Qwen2.5-VL', 'MiniCPM-V', 'Moondream', 'Gemma 3', 'Llama 4', 'Mistral Small 3.1', 'Granite 3.2 Vision'],
    current_hardware_mentioned: ['NVIDIA GPU', 'CPU', 'Apple Silicon'],
    leadAnswerBlock:
      '**Ollama는 비전 지원(멀티모달) 모델을 로컬에서 실행할 수 있으며, 2023년 12월 버전 0.1.15부터 이를 지원해왔다.** 이 리뷰 작성 시점 기준, Ollama 자체 [모델 라이브러리](https://ollama.com/library)에는 LLaVA(및 `llava-llama3`/`llava-phi3`/`bakllava` 변형), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1이 비전 지원 모델로 등록되어 있다. `ollama pull llava`로 다운로드하고, `ollama run llava "describe this image: ./photo.jpg"`로 실행하거나, `/api/generate` 또는 `/api/chat`에 base64로 인코딩된 이미지를 `images` 배열에 담아 프로그래밍 방식으로 호출할 수 있다. 이 가이드는 실제 명령어, 문서화된 API 형식, 그리고 Ollama가 적합한 곳과 그렇지 않은 곳을 솔직하게 다룬다 — LLaVA 자체에 대한 심층 리뷰는 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review)를 참고하라.',
    quickAnswerTop: {
      en: {
        question: 'Ollama는 어떤 비전 모델을 지원하며 어떻게 실행하는가?',
        answer:
          '이 리뷰 작성 시점 기준, Ollama 라이브러리에는 직접 pull할 수 있는 비전 지원 모델로 LLaVA(llava-llama3, llava-phi3, bakllava 변형 포함), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3(4B 이상), Llama 4, Mistral Small 3.1이 등록되어 있다. `ollama pull <모델>`을 실행한 뒤 `ollama run <모델> "describe this image: ./photo.jpg"`를 실행하면 된다 — 프롬프트 텍스트 안에 이미지 파일 경로를 직접 적기만 하면 되며, 별도의 `--image` 플래그는 존재하지 않는다. 프로그래밍 방식으로 사용하려면 `http://localhost:11434/api/generate` 또는 `/api/chat`에 base64로 인코딩된 문자열을 `images` 배열에 담아 POST 요청을 보내면 되며, 이는 Ollama 자체의 `docs/api.md`에 문서화되어 있다. Ollama는 버전 0.1.15(2023년 12월)에서 이 멀티모달 지원을 추가했고, 2026년 5월에는 Llama 4, Gemma 3, Qwen2.5-VL, Mistral Small 3.1 같은 최신 모델을 위해 전용 멀티모달 엔진으로 재구축했다. Ollama는 추론 전용이므로 — 모델을 파인튜닝하거나 학습시킬 수 없으며 — 주로 오픈 웨이트 모델을 중심으로 구축되어 있어 최신 독점 클라우드 멀티모달 성능에는 일반적으로 뒤처진다.',
        bullets: [
          '현재 Ollama 라이브러리에서 확인된 비전 지원 모델: LLaVA, llava-llama3, llava-phi3, bakllava, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: `ollama pull <모델>` 실행 후 `ollama run <모델> "describe this image: ./photo.jpg"` — 프롬프트에 파일 경로를 직접 적는다.',
          'HTTP API: Ollama 자체의 `docs/api.md`에 따라 `/api/generate` 또는 `/api/chat`에 base64로 인코딩된 이미지를 `images` 배열에 담아 POST한다.',
          '멀티모달 지원은 Ollama v0.1.15(2023년 12월)에서 추가되었으며, 2026년 5월 전용 멀티모달 엔진으로 재구축되었다.',
          'Ollama는 추론 전용: 파인튜닝이나 학습은 지원하지 않는다.',
          'Ollama가 2023년 중반에 등장한 이후 줄곧 llama.cpp를 기반으로 하며, 현재는 Apple Silicon에서 대체 백엔드로 Apple의 MLX도 지원한다.',
        ],
        updatedDate: '2026-09-06',
      },
    },
    toc: [
      { label: '빠른 답변', anchor: 'quick-answer' },
      { label: '역사: Ollama, llama.cpp, 그리고 멀티모달 지원', anchor: 'history' },
      { label: 'Ollama 라이브러리에 실제로 있는 비전 모델', anchor: 'available-models' },
      { label: '비전 모델 다운로드 및 실행: 단계별 가이드', anchor: 'install-walkthrough' },
      { label: '실제 사용 예시: CLI와 HTTP API', anchor: 'usage-examples' },
      { label: 'VRAM 및 하드웨어 가이드', anchor: 'vram-guidance' },
      { label: 'Ollama가 적합하지 않은 경우', anchor: 'limitations' },
      { label: 'Ollama 비전 모델의 대안', anchor: 'alternatives' },
      { label: '자주 묻는 질문', anchor: 'faq' },
      { label: '결론', anchor: 'verdict' },
      { label: '출처', anchor: 'sources' },
      { label: '관련 읽을거리', anchor: 'related-reading' },
    ],
    sections: {
      tldr: {
        id: 'tldr',
        title: '요약',
        isTldr: true,
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Ollama는 2023년 12월 버전 0.1.15부터 비전 지원(멀티모달) 모델의 로컬 실행을 지원하며, 현재 라이브러리에는 LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1이 등록되어 있고, 간단한 CLI(프롬프트에 이미지 파일 경로 지정)와 HTTP API(JSON `images` 배열에 base64로 인코딩된 이미지) 방식을 모두 지원한다.',
          },
          {
            type: 'plain-terms',
            text: 'Ollama는 명령어 하나로 자신의 컴퓨터에 AI 모델을 내려받아 실행할 수 있게 해주는 도구이며, 그중 일부 모델은 이미지를 보고 그에 관한 질문에 답할 수도 있다 — 이 가이드는 그렇게 하기 위한 실제 명령어와 API 호출 방법을 보여준다.',
          },
        ],
        items: [
          '멀티모달 지원은 Ollama v0.1.15(2023년 12월 12일)에서 추가되었으며, 2026년 5월 전용 멀티모달 엔진으로 재구축되었다.',
          '현재 등록이 확인된 비전 지원 모델: LLaVA(llava-llama3, llava-phi3, bakllava 포함), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1.',
          'CLI: `ollama run` 프롬프트 텍스트 안에 이미지 파일 경로를 직접 적는다 — 별도 플래그 없음.',
          'HTTP API: `/api/generate`와 `/api/chat`은 Ollama 자체의 `docs/api.md`에 문서화된 대로 `images` 배열에 base64로 인코딩된 이미지를 받는다.',
          'Ollama는 추론 전용: 모델을 실행할 뿐, 파인튜닝하거나 학습시키지 않는다.',
          'Ollama가 2023년 중반에 등장한 이후 줄곧 llama.cpp를 기반으로 함(GitHub 저장소는 2023년 6월 26일 생성, MIT 라이선스); 현재는 Apple Silicon에서 대체 백엔드로 Apple의 MLX도 지원한다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '위 모델 목록은 본 리뷰 작성 시점에 PromptQuorum이 ollama.com/library에서 실시간으로 확인한 내용을 반영한 것이다. Ollama의 라이브러리는 변경되므로, 특정 모델에 의존하기 전에 현재 등록 상태를 확인하라 — 정확히 확인한 라이브러리 URL은 출처 섹션을 참고하라.',
          },
        ],
      },
      history: {
        id: 'history',
        title: '역사: Ollama, llama.cpp, 그리고 멀티모달 지원',
        content: [
          '**Ollama의 [GitHub 저장소](https://github.com/ollama/ollama)는 2023년 6월 26일에 생성되었으며**, MIT 라이선스로 배포된다. GGUF 형식 모델용 C/C++ 추론 엔진인 [llama.cpp](https://github.com/ggml-org/llama.cpp)를 Docker와 유사한 명령줄 인터페이스와 로컬 HTTP API로 감싸고 있다 — 핵심 가치는 `ollama run llama3` 한 번으로 사용자가 의존성, GPU 드라이버, 추론 엔진 자체를 직접 관리할 필요 없이 모델을 다운로드하고 실행할 수 있다는 점이다.',
          '**멀티모달(이미지 입력) 지원은 2023년 12월 12일 출시된 [Ollama v0.1.15](https://github.com/ollama/ollama/releases/tag/v0.1.15)에서 추가되었으며**, 첫 지원 비전 모델로 LLaVA가 함께 도입되었다. 릴리스 노트에는 `ollama run llava`를 실행한 뒤 대화형 프롬프트에 이미지 파일 경로를 직접 입력하는 방법과, `/api/generate` HTTP 엔드포인트에 추가된 새로운 `images` 매개변수(최대 100MB의 base64 인코딩 PNG 또는 JPEG 이미지 지원)가 설명되어 있다.',
          '**Ollama는 2026년 5월경 멀티모달 지원을 전용 멀티모달 엔진으로 재구축했다**. Ollama 자체 블로그에 따르면, 이 업데이트는 Llama 4, Gemma 3, Qwen2.5-VL, Mistral Small 3.1 등 최신 모델 계열을 위한 정식 비전 지원을 추가했으며, 기존 LLaVA 통합에 사용되던 보다 범용적인 방식 대신 이미지 해상도, 위치 메타데이터, 어텐션 메커니즘을 모델별로 처리한다. 같은 업데이트에서 llama.cpp 백엔드를 통해 Apple Silicon에서 멀티모달 모델에 대한 Metal GPU 오프로드도 도입되었다.',
          '**Ollama는 주로 llama.cpp 백엔드에서 동작하며, 별도로 Apple Silicon 하드웨어에서 대체 백엔드로 Apple의 MLX 프레임워크도 지원한다**. 일부 최신 멀티모달 모델은 Mac에서 더 나은 성능을 위해 이를 활용할 수 있다.',
        ],
        faqs: [
          {
            q: 'Ollama는 언제 비전 모델 지원을 추가했는가?',
            a: 'Ollama는 2023년 12월 12일 출시된 버전 0.1.15에서 멀티모달(이미지 입력) 지원을 추가했으며, 첫 지원 비전 모델은 LLaVA였다. 2026년 5월경에는 Llama 4, Gemma 3, Qwen2.5-VL, Mistral Small 3.1 같은 최신 모델 계열을 위해 전용 멀티모달 엔진으로 재구축했다.',
          },
        ],
      },
      availableModels: {
        id: 'available-models',
        title: 'Ollama 라이브러리에 실제로 있는 비전 모델',
        content: [
          'PromptQuorum은 본 리뷰 작성 시점에 다음 모델들을 [ollama.com/library](https://ollama.com/library)에서 직접 확인했다 — 이 목록은 Ollama용으로 패키징되었는지 여부가 불확실한 비전 언어 모델 전반에 대한 일반적인 조사가 아니라, 오늘 실제로 pull 가능한 모델을 반영한다.',
        ],
        itemHeadings: true,
        columns: ['모델', '개발사', '비고'],
        rows: [
          {
            '모델': '[llava](https://ollama.com/library/llava)',
            '개발사': 'UW-Madison / Microsoft Research / Columbia(연구 프로젝트)',
            '비고': '7B/13B/34B; PromptQuorum의 [LLaVA 전문 리뷰](/ko/power-local-llm/llava-review) 참고',
          },
          {
            '모델': '[llava-llama3](https://ollama.com/library/llava-llama3) / [llava-phi3](https://ollama.com/library/llava-phi3) / [bakllava](https://ollama.com/library/bakllava)',
            '개발사': '커뮤니티 변형',
            '비고': '서로 다른 베이스 LLM에 파인튜닝된 LLaVA 아키텍처 모델',
          },
          {
            '모델': '[llama3.2-vision](https://ollama.com/library/llama3.2-vision)',
            '개발사': 'Meta',
            '비고': '11B 및 90B 크기; 범용 이미지 질의응답에 강함',
          },
          {
            '모델': '[qwen2.5vl](https://ollama.com/library/qwen2.5vl)',
            '개발사': '알리바바(Qwen 팀)',
            '비고': '3B/7B/32B/72B; 강력한 OCR 및 문서 이해 능력',
          },
          {
            '모델': '[qwen3-vl](https://ollama.com/library/qwen3-vl)',
            '개발사': '알리바바(Qwen 팀)',
            '비고': '2B~235B; qwen2.5vl보다 최신이며 최대 256K 컨텍스트, 이 표에서 가장 강력한 OCR/비주얼 에이전트 옵션',
          },
          {
            '모델': '[minicpm-v](https://ollama.com/library/minicpm-v)',
            '개발사': 'OpenBMB',
            '비고': '약 8B, 약 5.5GB; 낮은 VRAM에서도 강력한 문서 OCR, 다중 이미지 지원',
          },
          {
            '모델': '[moondream](https://ollama.com/library/moondream)',
            '개발사': '개인 개발자(Vikhyat K.)',
            '비고': '1.8B, 약 1.7GB; 이 목록에서 가장 작은 옵션으로 경량/엣지 용도에 적합',
          },
          {
            '모델': '[granite3.2-vision](https://ollama.com/library/granite3.2-vision)',
            '개발사': 'IBM',
            '비고': '약 2.4GB; 표, 차트, 인포그래픽 등 시각적 문서 분석에 특화',
          },
          {
            '모델': '[gemma3](https://ollama.com/library/gemma3)',
            '개발사': 'Google',
            '비고': '4B/12B/27B 크기가 멀티모달(270M과 1B는 텍스트 전용)',
          },
          {
            '모델': '[llama4](https://ollama.com/library/llama4)',
            '개발사': 'Meta',
            '비고': '전문가 혼합(Mixture-of-Experts) 구조로 네이티브 멀티모달; 다운로드 용량이 큼(67GB 이상)',
          },
          {
            '모델': '[mistral-small3.1](https://ollama.com/library/mistral-small3.1)',
            '개발사': 'Mistral AI',
            '비고': '24B, 약 15GB; Apache-2.0 라이선스, 비전과 텍스트 모두 지원',
          },
        ],
        note: 'Ollama 라이브러리는 빠르게 변화한다: 본문의 나머지 부분을 작성한 이후, 더 새롭고 강력한 Qwen 비전 모델 옵션으로 `qwen3-vl`(최대 256K 컨텍스트)이 `qwen2.5vl`과 함께 추가되었다. 본 리뷰 작성 시점 기준 Ollama 라이브러리에 자체 페이지가 있는지 확인되지 않았지만 다른 곳에서 비전 모델로 언급되는 모델: `qwen2-vl`(`qwen2.5vl`로 대체됨), 그리고 독립된 `llava-next` 항목(LLaVA-NeXT/1.6 개선 사항은 `llava` 목록 자체에 통합됨). 특정 모델 이름에 의존하기 전에는 항상 `ollama.com/library/<이름>`을 직접 확인하라 — 이 표는 특정 시점의 스냅샷이지 실시간 피드가 아니다.',
      },
      installWalkthrough: {
        id: 'install-walkthrough',
        title: '비전 모델 다운로드 및 실행: 단계별 가이드',
        content: '이 가이드는 LLaVA를 예시로 사용하지만, 동일한 절차가 위 표의 모든 모델에 적용된다.',
        numberedItems: [
          {
            title: 'Ollama를 설치한다.',
            whyItMatters: 'macOS, Linux, Windows용 [Ollama](https://ollama.com)를 다운로드한다. 설치는 표준 설치 프로그램/패키지 형태이며 2분이 채 걸리지 않는다.',
          },
          {
            title: '비전 모델을 다운로드한다.',
            whyItMatters: '`ollama pull llava`(또는 `ollama pull qwen2.5vl`, `ollama pull minicpm-v` 등)를 실행한다 — 이렇게 하면 모델 가중치가 다운로드되며, 크기는 2GB 미만(Moondream)에서 수십 GB(Llama 4)까지 다양하다.',
          },
          {
            title: '프롬프트에 이미지를 지정하여 실행한다.',
            whyItMatters: '`ollama run llava "describe this image: ./photo.jpg"`를 실행한다. Ollama는 프롬프트 텍스트 안의 `.jpg`/`.png` 파일 경로를 감지하여 자동으로 이미지를 첨부한다 — 이 방식은 2023년 12월 v0.1.15 이후 계속 작동해왔다.',
          },
          {
            title: '또는 HTTP API를 직접 호출한다.',
            whyItMatters: '`http://localhost:11434/api/generate` 또는 `/api/chat`에 base64로 인코딩된 이미지를 `images` 배열에 담아 POST 요청을 보낸다 — 정확한 JSON 형식은 Ollama 자체의 [docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)에 문서화되어 있으며, 아래 사용 예시 섹션에서도 보여준다.',
          },
          {
            title: '(선택 사항) 공식 클라이언트 라이브러리를 사용한다.',
            whyItMatters: '공식 `ollama` Python 및 JavaScript 라이브러리는 이미지 파일 경로를 직접 받아들이고 base64 인코딩을 대신 처리해주므로, 스크립트에서 수동으로 인코딩할 필요가 없다.',
          },
        ],
      },
      usageExamples: {
        id: 'usage-examples',
        title: '실제 사용 예시: CLI와 HTTP API',
        content: [
          '아래 예시들은 Ollama 자체 문서와 검증된 요청/응답 형식에서 직접 가져온 것으로, 임의로 지어낸 문법이 아니다.',
        ],
        codeBlock: `# CLI로 다운로드하고 실행 — 프롬프트에 이미지 경로를 직접 지정
ollama pull llava
ollama run llava "describe this image: ./photo.jpg"

# --- HTTP API: /api/generate (Ollama의 docs/api.md에 문서화됨) ---
curl http://localhost:11434/api/generate -d '{
  "model": "llava",
  "prompt": "What is in this picture?",
  "stream": false,
  "images": ["<base64-encoded image data>"]
}'

# --- HTTP API: /api/chat (멀티턴, 마찬가지로 docs/api.md에 문서화됨) ---
curl http://localhost:11434/api/chat -d '{
  "model": "llava",
  "messages": [
    { "role": "user", "content": "What is in this image?", "images": ["<base64-encoded image data>"] }
  ]
}'

# --- Python: 공식 ollama 라이브러리 (base64 인코딩을 대신 처리) ---
import ollama

response = ollama.chat(
    model="llava",
    messages=[{
        "role": "user",
        "content": "What is in this image?",
        "images": ["photo.jpg"],
    }],
)
print(response["message"]["content"])

# --- Python: 수동 base64 인코딩을 사용한 원시 HTTP API 호출 ---
import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llava") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": model, "prompt": prompt, "images": [image_b64], "stream": False},
    )
    return response.json()["response"]`,
        codeLanguage: 'bash',
        note: '정확한 JSON 필드명(base64 문자열 목록으로서의 `images`, `stream`, `prompt`와 `messages`의 구분)은 [Ollama의 docs/api.md](https://github.com/ollama/ollama/blob/main/docs/api.md)에 문서화되어 있다 — API는 릴리스마다 변경될 수 있으므로, 프로덕션 연동을 스크립트화하기 전에 해당 파일의 최신 버전과 대조해 확인하라.',
        items: [
          '**CLI에는 별도의 이미지 플래그가 없다.** Ollama는 프롬프트 텍스트 자체에 포함된 `.jpg`/`.png` 등의 파일 경로를 감지하여 자동으로 첨부한다.',
          '**`/api/generate`는 `prompt`를 사용하고, `/api/chat`은 `messages`를 사용한다.** 둘 다 base64로 인코딩된 문자열의 `images` 배열을 받으며, `/api/chat`은 개별 메시지에 이미지를 첨부한 멀티턴 대화를 지원한다.',
        ],
      },
      vramGuidance: {
        id: 'vram-guidance',
        title: 'VRAM 및 하드웨어 가이드',
        content: [
          'Ollama 자체 모델 라이브러리 페이지에는 각 모델의 다운로드 크기가 나와 있으며, 이는 양자화된 모델을 실행하는 데 필요한 VRAM이나 RAM의 합리적인 대략치로 볼 수 있다 — PromptQuorum은 모델별 다운로드 크기 외에 Ollama가 별도로 공개한 권위 있는 VRAM 표는 찾지 못했다.',
        ],
        columns: ['모델', '대략적인 크기', '실용적인 최소 사양'],
        rows: [
          { '모델': 'Moondream', '대략적인 크기': '약 1.7GB', '실용적인 최소 사양': 'VRAM 4GB / 사양이 낮은 하드웨어에서도 동작' },
          { '모델': 'Granite 3.2 Vision', '대략적인 크기': '약 2.4GB', '실용적인 최소 사양': 'VRAM 4-6GB' },
          { '모델': 'LLaVA 7B / MiniCPM-V', '대략적인 크기': '약 4.7-5.5GB', '실용적인 최소 사양': 'VRAM 6-8GB' },
          { '모델': 'Llama 3.2 Vision 11B / Qwen2.5-VL 7B', '대략적인 크기': '약 6-8GB', '실용적인 최소 사양': 'VRAM 8-10GB' },
          { '모델': 'Mistral Small 3.1', '대략적인 크기': '약 15GB', '실용적인 최소 사양': 'VRAM 16-24GB' },
          { '모델': 'LLaVA 34B / Qwen2.5-VL 32B', '대략적인 크기': '약 20-21GB', '실용적인 최소 사양': 'VRAM 24GB 이상' },
          { '모델': 'Llama 3.2 Vision 90B / Llama 4', '대략적인 크기': '약 55-67GB 이상', '실용적인 최소 사양': '멀티 GPU 또는 대용량 메모리의 Apple Silicon' },
        ],
        callouts: [
          {
            type: 'note',
            text: '이는 대략적인 다운로드 크기이지 실측된 VRAM 벤치마크가 아니다 — PromptQuorum은 이 글을 위해 자체 하드웨어 테스트를 진행하지 않았다. 사용 가능한 VRAM에 맞지 않으면 모델은 CPU만으로도 훨씬 느리게 실행될 수 있다. 실제로 사용 가능한 VRAM 여유분은 컨텍스트 길이와 배치 크기에도 좌우된다.',
          },
        ],
      },
      limitations: {
        id: 'limitations',
        title: 'Ollama가 적합하지 않은 경우',
        content: [
          'Ollama는 비전 지원 모델을 로컬에서 실행하는 견고하고 활발히 개발되고 있는 방법이지만, 다음과 같은 상황에는 적합하지 않다.',
        ],
        items: [
          '**모델 파인튜닝이나 학습.** Ollama는 추론 전용이다 — 학습된 모델 가중치를 실행할 뿐, 학습이나 파인튜닝 파이프라인을 제공하지 않는다. 자체 데이터로 비전 언어 모델을 파인튜닝해야 한다면, 원본 LLaVA 저장소 자체의 학습 스크립트나 Hugging Face Transformers 같은 프레임워크 등 별도의 도구 체인이 필요하다.',
          '**최첨단 독점 멀티모달 성능.** Ollama의 라이브러리는 오픈 웨이트 모델을 중심으로 구축되어 있다. 본 리뷰 작성 시점 기준, GPT-4o, Claude, Gemini의 클라우드 비전 API는 복잡한 장면 이해, 손글씨 인식, 모호한 이미지 처리에서 일반적으로 오픈된 로컬 모델을 앞선다 — Ollama는 이미지당 한계 비용 제로로 프라이빗하게 자체 호스팅하는 용도에 적합하며, 절대적인 최첨단 성능을 따라잡기 위한 도구는 아니다.',
          '**차트와 그래프에서의 정확한 수치 추출.** 이는 Ollama라는 실행 도구 자체의 한계가 아니라 기반이 되는 비전 언어 모델 자체의 한계다 — 어떤 모델이나 실행 도구를 사용하든 추출한 수치는 항상 원본 데이터와 대조 확인해야 한다.',
          '**"어떤 모델이 최고인가"에 대한 단일한 답.** Ollama에서 어떤 비전 모델이 적합한지는 작업에 따라 다르다: OCR 비중이 높은 문서 작업에는 Qwen2.5-VL, 낮은 VRAM에서의 OCR에는 MiniCPM-V, 범용 이미지 질의응답에는 Llama 3.2 Vision, 가장 가벼운 용도에는 Moondream이 적합하다. 작업별 세부 지침은 PromptQuorum의 [로컬 비전 모델 비교](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 참고하라.',
        ],
      },
      alternatives: {
        id: 'alternatives',
        title: 'Ollama 비전 모델의 대안',
        itemHeadings: true,
        columns: ['도구', '가장 적합한 용도', '라이선스'],
        rows: [
          {
            '도구': '[LM Studio](https://lmstudio.ai)',
            '가장 적합한 용도': 'GUI 중심의 로컬 모델 실행 도구; 채팅 인터페이스에서 이미지 첨부를 통한 비전 지원 모델 사용을 확인함',
            '라이선스': '무료, 독점 애플리케이션',
          },
          {
            '도구': '[llama.cpp](https://github.com/ggml-org/llama.cpp) 직접 사용',
            '가장 적합한 용도': 'Ollama의 래퍼 계층 없이, 멀티모달(llava.cpp 방식) 지원을 포함한 추론에 대한 최대한의 저수준 제어',
            '라이선스': 'MIT',
          },
          {
            '도구': '[LLaVA 자체 저장소](https://github.com/haotian-liu/LLaVA)',
            '가장 적합한 용도': '연구 수준의 제어, 학습/파인튜닝 스크립트 — PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review) 참고',
            '라이선스': 'Apache-2.0(코드); 체크포인트는 베이스 모델에 따라 다름',
          },
          {
            '도구': 'MLC-LLM / MLC Chat',
            '가장 적합한 용도': '여러 플랫폼에 걸친 온디바이스 LLM 배포; 본 리뷰 작성 시점 기준 공식적으로 문서화된 비전 언어 모델(VLM) 지원은 확인되지 않았다 — 비전 작업에 의존하기 전에 최신 상태를 확인하라',
            '라이선스': 'Apache-2.0',
          },
          {
            '도구': '클라우드 VLM API(GPT-4o, Claude, Gemini 비전)',
            '가장 적합한 용도': '현재 이용 가능한 최고의 멀티모달 성능, 로컬 하드웨어나 설정 불필요',
            '라이선스': '독점(유료 API)',
          },
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'Ollama는 비전 모델을 지원하는가?',
            a: '그렇다. Ollama는 2023년 12월 12일 출시된 버전 0.1.15에서 멀티모달(이미지 입력) 지원을 추가했고, 2026년 5월경 전용 멀티모달 엔진으로 재구축했다. 본 리뷰 작성 시점 기준, 라이브러리에는 LLaVA, Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3, Llama 4, Mistral Small 3.1이 비전 지원 모델로 등록되어 있다.',
          },
          {
            q: 'Ollama에서 모델에 이미지를 전달하려면 어떻게 해야 하는가?',
            a: 'CLI에서는 프롬프트 텍스트 안에 이미지의 파일 경로를 직접 적으면 된다: `ollama run llava "describe this image: ./photo.jpg"`. 별도의 `--image` 플래그는 없다. 프로그래밍 방식으로는 Ollama 자체의 docs/api.md에 따라 `/api/generate` 또는 `/api/chat`에 base64로 인코딩된 이미지를 `images` 배열에 담아 POST하면 된다.',
          },
          {
            q: 'Ollama의 API에 이미지를 보낼 때 정확한 JSON 형식은 무엇인가?',
            a: '`/api/generate`의 경우: `{"model": "llava", "prompt": "...", "images": ["<base64 string>"]}`. `/api/chat`의 경우: `{"model": "llava", "messages": [{"role": "user", "content": "...", "images": ["<base64 string>"]}]}`. 둘 다 Ollama의 GitHub 저장소 내 `docs/api.md`에 문서화되어 있다.',
          },
          {
            q: '현재 Ollama 라이브러리에서 이용 가능한 비전 모델은 무엇인가?',
            a: '본 리뷰에서 확인한 바로는: LLaVA(llava-llama3, llava-phi3, bakllava 변형 포함), Llama 3.2 Vision, Qwen2.5-VL, MiniCPM-V, Moondream, Granite 3.2 Vision, Gemma 3(4B 이상), Llama 4, Mistral Small 3.1이다. 이 목록은 바뀔 수 있으므로 ollama.com/library를 직접 확인하라.',
          },
          {
            q: 'Ollama로 비전 모델을 파인튜닝할 수 있는가?',
            a: '아니다. Ollama는 추론 전용이다 — 학습된 모델 가중치를 실행할 뿐, 학습이나 파인튜닝 파이프라인은 제공하지 않는다. 파인튜닝을 하려면 원본 모델 자체의 학습 스크립트나 Hugging Face Transformers 같은 프레임워크 등 별도의 도구 체인이 필요하다.',
          },
          {
            q: 'Ollama는 llama.cpp를 기반으로 하는가?',
            a: '그렇다. Ollama는 GGUF 형식 모델용 C/C++ 추론 엔진인 llama.cpp를 더 단순한 명령줄 인터페이스와 HTTP API로 감싼 것이다. Ollama의 GitHub 저장소는 2023년 6월 26일에 생성되었다. Apple Silicon에서 대체 백엔드로 Apple의 MLX 프레임워크도 지원한다.',
          },
          {
            q: 'Ollama는 GPT-4o나 Gemini 같은 클라우드 비전 API와 비교하면 어떤가?',
            a: 'Ollama는 요청당 한계 비용 제로로 모델을 로컬에서 실행하며 이미지를 기기 안에 유지할 수 있지만, 그 라이브러리는 오픈 웨이트 모델을 중심으로 구축되어 있어 복잡한 장면 이해, 손글씨, 모호한 이미지 처리에서 대체로 독점 클라우드 비전 API에 뒤처진다. 프라이버시, 대량 사용 시 비용 관리, 오프라인 사용을 원한다면 Ollama를, 이용 가능한 최고 성능을 원한다면 클라우드 API를 선택하라.',
          },
        ],
      },
      verdict: {
        id: 'verdict',
        title: '결론',
        content:
          'Ollama는 2023년 12월 이후 비전 지원 모델을 로컬에서 실행하는 진정으로 간단한 방법을 제공해왔으며, 2026년 5월의 멀티모달 엔진 재구축은 LLaVA 같은 기존 옵션과 나란히 Llama 4, Gemma 3, Qwen2.5-VL, Mistral Small 3.1 같은 최신 모델 계열에 대해서도 그 경험을 최신 상태로 유지했다. 핵심 워크플로우 — `ollama pull` 후 프롬프트에 이미지 경로를 넣어 `ollama run`을 실행하거나, 문서화된 `/api/generate`/`/api/chat` HTTP 엔드포인트를 사용하는 방식 — 는 최초의 v0.1.15 릴리스 이후 안정적으로 유지되어 왔으며, 이는 그 위에 무언가를 구축하려는 사람들에게 그 자체로 Ollama의 장점이다. 학습 도구는 아니며 최신 독점 클라우드 멀티모달 성능에는 미치지 못하지만, 프라이빗하고 자체 호스팅되며 한계 비용이 제로인 이미지 이해 용도로는 여전히 가장 실용적인 진입점 중 하나로 남아 있다. 특정 모델을 더 깊이 알고 싶다면 PromptQuorum의 [LLaVA 리뷰](/ko/power-local-llm/llava-review)를, 전체 로컬 비전 모델 환경에서 작업별로 모델을 선택하고 싶다면 [로컬 비전 모델 비교](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 함께 참고하라.',
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[GitHub의 Ollama](https://github.com/ollama/ollama) — 저장소 생성일, 라이선스, 릴리스 이력.',
          '[Ollama v0.1.15 릴리스 노트](https://github.com/ollama/ollama/releases/tag/v0.1.15) — 2023년 12월 12일, 멀티모달/LLaVA 지원에 대한 최초 발표.',
          '[멀티모달 모델을 위한 Ollama의 새 엔진](https://ollama.com/blog/multimodal-models) — 2026년 5월의 멀티모달 엔진 재구축, Llama 4, Gemma 3, Qwen2.5-VL, Mistral Small 3.1을 다룸.',
          '[Ollama API 문서](https://github.com/ollama/ollama/blob/main/docs/api.md) — 이미지에 대한 `/api/generate` 및 `/api/chat`의 문서화된 요청/응답 형식.',
          '[Ollama 모델 라이브러리](https://ollama.com/library) — 본 글에 나열된 모든 모델을 확인하는 데 사용한 실시간 라이브러리이며, [llava](https://ollama.com/library/llava), [llama3.2-vision](https://ollama.com/library/llama3.2-vision), [qwen2.5vl](https://ollama.com/library/qwen2.5vl), [minicpm-v](https://ollama.com/library/minicpm-v), [moondream](https://ollama.com/library/moondream), [granite3.2-vision](https://ollama.com/library/granite3.2-vision), [gemma3](https://ollama.com/library/gemma3), [llama4](https://ollama.com/library/llama4), [mistral-small3.1](https://ollama.com/library/mistral-small3.1)의 개별 페이지를 포함한다.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 읽을거리',
        items: [
          '[LLaVA 리뷰(2026)](/ko/power-local-llm/llava-review) — LLaVA 자체를 심층적으로 다룬 리뷰로, 역사와 라이선스 관련 세부 사항을 포함한다.',
          '[로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL & Ollama 멀티모달 설정](/ko/power-local-llm/local-vision-models-llava-ollama-2026) — 현재의 로컬 비전 모델 전반을 작업별로 폭넓게 비교한다.',
          '[Ollama 최신 버전 2026: v0.33.1 + 용도별 추천 모델](/ko/local-llms/top-open-source-models-ollama) — 비전 이외 영역까지 포함한 Ollama의 더 넓은 모델 카탈로그와 인기 텍스트 모델.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Ollama 비전 모델(2026): 이미지 모델을 로컬에서 실제로 실행하는 방법',
      description:
        'Ollama 비전 모델 2026: Ollama로 이미지 지원 모델을 실행하는 실전 가이드. 실제 pull/run 명령어, base64 이미지를 사용하는 /api/generate JSON 형식, 실제로 등록된 모델 목록.',
      url: 'https://promptquorum.com/ko/power-local-llm/ollama-vision-models-review',
      inLanguage: 'ko',
      datePublished: '2026-09-06',
      dateModified: '2026-09-06',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      educationalLevel: 'Intermediate',
      proficiencyLevel: 'Intermediate',
      audience: { '@type': 'Audience', audienceType: 'Ollama로 비전 지원 모델을 실행 중이거나 고려 중인 개발자' },
      about: [
        { '@type': 'Thing', name: 'Ollama' },
        { '@type': 'Thing', name: 'Vision-language model' },
        { '@type': 'Thing', name: 'Multimodal AI' },
        { '@type': 'Thing', name: 'llama.cpp' },
      ],
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://promptquorum.com/ko/power-local-llm/ollama-vision-models-review' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://promptquorum.com' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: 'Ollama 비전 모델(2026)', item: 'https://promptquorum.com/ko/power-local-llm/ollama-vision-models-review' },
      ],
    },
  },
}
