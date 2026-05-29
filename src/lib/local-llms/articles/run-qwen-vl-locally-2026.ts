// Slug: run-qwen-vl-locally-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: 'How to Run Qwen2-VL Locally in 2026: Document OCR & Vision Guide',
    seoTitle: 'Run Qwen2-VL Locally 2026: OCR & Vision Setup Guide',
    intro: 'Qwen2-VL is Alibaba\'s open vision-language model, and its 7B variant runs locally in about 6 GB of VRAM via Ollama or LM Studio. It reads documents, screenshots, charts, and photos — and leads every other local vision model on Chinese, Japanese, and Korean OCR. This guide covers model selection, hardware, Ollama and LM Studio setup, multilingual document extraction, and how Qwen2-VL compares to LLaVA and Llama 3.2 Vision.',
    metaDescription: 'Run Qwen2-VL locally in ~6 GB VRAM via Ollama: setup steps, Chinese and Japanese document OCR, image Q&A, and how it beats LLaVA and Llama 3.2 Vision.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and analysts who need offline document OCR and image understanding — especially for Chinese, Japanese, and mixed-language files — without sending data to cloud APIs',
    primaryTerm: 'run Qwen2-VL locally',
    targetKeywords: [
      'run Qwen2-VL locally 2026',
      'Qwen2-VL Ollama setup',
      'Qwen2-VL document OCR',
      'local multilingual vision model',
      'Qwen2-VL vs Llama 3.2 Vision',
      'Chinese Japanese OCR local LLM',
    ],
    current_models_mentioned: [
      'Qwen2-VL 2B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'LLaVA 1.6 7B',
      'Llama 3.2 Vision 11B',
      'MiniCPM-V 2.6',
      'InternVL 2.5 8B',
      'Moondream 2',
    ],
    current_hardware_mentioned: [
      '4 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '48 GB VRAM',
      'RTX 4060',
      'RTX 3060 12 GB',
      'Apple Silicon (unified memory)',
    ],
    ctaText: 'Join the PromptQuorum Waitlist →',
    leadAnswerBlock: '**Run `ollama pull qwen2-vl:7b` on any machine with 8 GB of VRAM to read Chinese, Japanese, and mixed-language documents locally.** Qwen2-VL is the strongest open vision model for multilingual OCR — every image is processed on your machine, with no cloud upload.',
    quickAnswerTop: {
      en: {
        question: 'How do I run Qwen2-VL locally in 2026?',
        answer: 'Install Ollama, run `ollama pull qwen2-vl:7b`, then `ollama run qwen2-vl:7b` and type an image file path inside your prompt. For a GUI, use LM Studio: search "Qwen2-VL 7B", download the Q4_K_M GGUF build, and attach images with the image icon. Qwen2-VL 7B needs ~6 GB of VRAM and reads documents, screenshots, and charts fully offline.',
        bullets: [
          'Minimum hardware: 8 GB VRAM (RTX 4060, RTX 3060 12 GB) or Apple Silicon with 16 GB unified memory',
          'Pull model: ollama pull qwen2-vl:7b (downloads Qwen2-VL 7B Q4_K_M ~6 GB)',
          'Attach images: type the file path in the prompt (CLI) or send a base64 images array (API)',
          'Best at: Chinese, Japanese, and Korean document OCR — beats LLaVA and Llama 3.2 Vision',
          'Sizes: 2B (~3 GB VRAM), 7B (~6 GB, recommended), 72B (~48 GB)',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Why Qwen2-VL Leads for Multilingual OCR', anchor: '#why-qwen-vl' },
      { label: 'Choosing Your Qwen2-VL Model Size', anchor: '#choose-model' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Setting Up with Ollama', anchor: '#ollama-setup' },
      { label: 'Setting Up with LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Document OCR for CJK Files', anchor: '#ocr-use-case' },
      { label: 'Image Q&A, Screenshots, and Charts', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL vs LLaVA vs Llama 3.2 Vision', anchor: '#vs-other-models' },
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
          '**Qwen2-VL 7B runs locally in ~6 GB of VRAM (Q4)** via Ollama — a single `ollama pull qwen2-vl:7b` command, no model conversion required.',
          '**Best local model for multilingual OCR**: Qwen2-VL ties MiniCPM-V 2.6 and beats LLaVA 1.6 and Llama 3.2 Vision 11B on Chinese, Japanese, and Korean text.',
          '**Native resolution up to 4096×4096** — reads high-DPI scans without downsampling, unlike LLaVA 1.6 (672×672) or Llama 3.2 Vision (1120×1120).',
          '**Three sizes**: 2B (~3 GB VRAM, fast and basic), 7B (~6 GB, recommended for most users), 72B (~48 GB, tops open-source benchmarks).',
          '**Accepts up to 8 images per request** — the highest multi-image capacity among local vision models.',
          '**No direct PDF input**: convert PDF pages to PNG or JPEG first, then send each page as a separate image.',
          '**100% offline once downloaded**: no API key, no cloud upload — every document stays on your machine, which removes the AI layer from GDPR data-transfer scope.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Why Qwen2-VL Leads Local Vision Models for Multilingual OCR',
        content: [
          '**Qwen2-VL is the strongest local vision model for multilingual document OCR — it matches or beats every other model that runs on consumer hardware at reading Chinese, Japanese, Korean, and English text.** Alibaba trained it on large-scale multilingual document corpora, which is why it outperforms LLaVA 1.6 and Llama 3.2 Vision 11B on non-English text extraction.',
          'Qwen2-VL supports dynamic input resolution up to 4096×4096 pixels. LLaVA 1.6 caps at 672×672 and Llama 3.2 Vision at 1120×1120, so both downsample high-DPI scans before reading them. Qwen2-VL reads a 300-DPI A4 scan at native resolution — the main reason its OCR accuracy is higher on dense documents and small CJK characters.',
          'Running Qwen2-VL locally costs €0 per image after hardware. A cloud vision API bills roughly $0.01–0.03 per image; at 10,000 images per month that is $100–300 saved — and no document ever leaves your machine.',
          'Use Qwen2-VL if your documents contain CJK text, small fonts, or high-DPI scans. If your work is English-only photo Q&A, Llama 3.2 Vision 11B is an equally good choice.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL is the most accurate local vision model for Chinese, Japanese, and Korean document OCR, running in ~6 GB of VRAM via Ollama.' },
          { type: 'plain-terms', text: 'A vision-language model reads images instead of generating them. You give Qwen2-VL a photo or a scanned page, and it returns text — a description, an answer, or the extracted contents.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Choosing Your Qwen2-VL Model Size',
        content: [
          'Qwen2-VL comes in three sizes. Choose based on your VRAM and the accuracy you need. All sizes are on [Hugging Face (Qwen)](https://huggingface.co/Qwen) and in the Ollama model library with explicit tags.',
        ],
        rows: [
          { Model: 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Ollama tag': 'qwen2-vl:2b', 'Best For': 'Fast captions, simple OCR, low-VRAM laptops' },
          { Model: 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Ollama tag': 'qwen2-vl:7b', 'Best For': 'Recommended — document OCR, image Q&A, charts' },
          { Model: 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Ollama tag': 'qwen2-vl:72b', 'Best For': 'Maximum quality, Apple Silicon 64 GB+ or multi-GPU' },
        ],
        columns: ['Model', 'VRAM (Q4)', 'Ollama tag', 'Best For'],
        tableFormat: true,
        note: 'Q4_K_M is the recommended quantization — the best quality-to-size ratio. Most users should start with Qwen2-VL 7B: it fits an 8 GB GPU and handles every use case in this guide. Drop to the 2B model only when VRAM is below 6 GB. See [LLM quantization explained](/local-llms/llm-quantization-explained) for how Q4 affects quality.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements for Qwen2-VL',
        items: [
          '**Minimum (Qwen2-VL 7B Q4)**: GPU with 8 GB VRAM — NVIDIA RTX 4060, RTX 3060 12 GB, or RTX 2080.',
          '**Low-VRAM option (Qwen2-VL 2B Q4)**: 4 GB VRAM — runs on most laptop GPUs and integrated Apple Silicon.',
          '**Maximum quality (Qwen2-VL 72B Q4)**: ~48 GB — Apple Silicon with 64 GB+ unified memory, or two 24 GB GPUs.',
          '**Apple Silicon**: an M-series chip with 16 GB+ unified memory runs the 7B model comfortably; 64 GB+ is needed for the 72B.',
          '**System RAM**: 16 GB minimum alongside GPU inference; 32 GB recommended with a full dev environment open.',
          '**Storage**: ~6 GB free disk space for Qwen2-VL 7B Q4 (GGUF), ~30 GB for the 72B.',
        ],
        callouts: [
          { type: 'note', text: 'Vision models run roughly 30–60% slower than a text-only model of the same parameter count. The vision encoder processes the entire image on the first token; text then generates at near-normal speed. Budget VRAM for the encoder as well as the language model.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setting Up Qwen2-VL with Ollama',
        content: [
          'Ollama is the fastest way to run Qwen2-VL locally. It downloads the model, manages quantization, and exposes an API at localhost:11434. Install it from [ollama.com](https://ollama.com/download) — or, if you are new to it, start with [how to install Ollama](/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Install Ollama', whyItMatters: 'Ollama handles model download, GGUF format, and the local API. It is available for macOS, Linux, and Windows.' },
          { title: 'Pull Qwen2-VL with an explicit size tag', whyItMatters: 'Use qwen2-vl:7b. The bare qwen2-vl tag can resolve to a different size — always specify 2b, 7b, or 72b so you get the model this guide targets.' },
          { title: 'Run the model and attach an image', whyItMatters: 'In interactive mode, type the image file path inside your prompt. Ollama detects the path and loads the image into the vision encoder.' },
          { title: 'Send images through the API', whyItMatters: 'The /api/generate endpoint accepts a base64-encoded images array. This is how applications — and PromptQuorum — send images programmatically.' },
          { title: 'Verify multilingual OCR', whyItMatters: 'Send a Chinese or Japanese document scan and confirm the extracted text matches. This proves the vision encoder and tokenizer handle CJK script correctly before you build on it.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen2-VL 7B (explicit size tag)
ollama pull qwen2-vl:7b
# Downloads Qwen2-VL 7B Q4_K_M (~6 GB)

# Step 3 — Run and attach an image (interactive)
ollama run qwen2-vl:7b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen2-vl:7b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen2-vl:7b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Send document images at 150 DPI or higher. Qwen2-VL reads up to 4096×4096 natively, so high-resolution scans directly improve accuracy. Unlike a text prompt, image quality is the single biggest factor in OCR results — a blurry scan produces wrong characters no matter how good the model is.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Setting Up Qwen2-VL with LM Studio',
        content: [
          'LM Studio runs Qwen2-VL through a graphical interface with no CLI commands. It is the recommended path for Windows users and anyone who prefers a GUI. Download it from [lmstudio.ai](https://lmstudio.ai), or see [how to install LM Studio](/local-llms/how-to-install-lm-studio).',
        ],
        numberedItems: [
          { title: 'Download and install LM Studio', whyItMatters: 'A free, cross-platform GUI for local model inference. No terminal required.' },
          { title: 'Search for Qwen2-VL in the model browser', whyItMatters: 'Search "Qwen2-VL 7B" and select a Q4_K_M GGUF build. LM Studio marks vision-capable models with an image icon.' },
          { title: 'Load the model and attach an image', whyItMatters: 'Click the image icon in the chat input to upload a photo or scan. LM Studio passes it to the vision encoder.' },
          { title: 'Start the local server', whyItMatters: 'The "Start Server" button exposes an OpenAI-compatible API at localhost:1234. Vision requests use the standard image_url content format.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "qwen2-vl-7b",
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Extract all text from this document." },
        {
          "type": "image_url",
          "image_url": { "url": "data:image/png;base64,<base64-encoded-image>" }
        }
      ]
    }
  ]
}`,
        codeLanguage: 'json',
        note: 'LM Studio and Ollama use different image formats: LM Studio follows the OpenAI image_url content schema (with a data: prefix); Ollama uses a top-level images array of raw base64 (no prefix). Pick one runtime and match its format.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'Document OCR for Chinese, Japanese, and Mixed-Language Files',
        content: [
          '**Qwen2-VL extracts text from Chinese, Japanese, Korean, and mixed-language documents more accurately than any other local vision model.** Its training data included large multilingual document corpora, and its 4096×4096 native resolution reads small CJK characters that LLaVA 1.6 and Llama 3.2 Vision downsample and miss.',
          'The most reliable pattern is a specific extraction prompt. Ask for structure — "preserve the table layout", "return each field as key: value" — instead of a vague "read this". Qwen2-VL follows formatting instructions closely, which keeps the output usable without post-processing.',
        ],
        items: [
          '**Plain text extraction**: "Extract every line of text from this image. Preserve line breaks and reading order."',
          '**Structured fields**: "This is a Japanese invoice. Return vendor, date, subtotal, tax, and total as key: value pairs."',
          '**Table extraction**: "Extract this table as CSV. Treat the first row as the header."',
          '**Extract and translate in one pass**: "Extract the Chinese text from this image, then translate it to English. Show both."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen2-vl:7b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Example output:
# vendor: Sample Trading Co., Ltd.
# date: 2026-04-30
# subtotal: 84,000 JPY
# tax: 8,400 JPY
# total: 92,400 JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Always verify extracted numbers against the source document. Local vision models — Qwen2-VL included — can misread a digit on a low-quality scan. Treat OCR output as a draft to confirm, not a final value, especially for invoices and financial documents.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'To extract text from a CJK document with Qwen2-VL, send the image at 150+ DPI with a specific prompt that asks for structure, such as "return each field as key: value".' },
          { type: 'plain-terms', text: 'OCR means turning a picture of text into editable text. Qwen2-VL looks at a scanned page and types out what it sees — and it handles Chinese and Japanese characters as well as it handles English.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Image Q&A, Screenshot Analysis, and Chart Reading',
        content: [
          'Beyond OCR, Qwen2-VL handles general image understanding — describing photos, answering questions about screenshots, and reading charts. It is accurate on clear input and weaker on cluttered or ambiguous scenes.',
        ],
        items: [
          '**Image Q&A**: ask open questions about a photo — "What is in this image?", "How many people are wearing red?". Qwen2-VL 7B is accurate on clear photos, weaker on cluttered or ambiguous scenes.',
          '**Screenshot and UI analysis**: Qwen2-VL reads UI screenshots, error dialogs, and app states. For dense code screenshots specifically, InternVL 2.5 is trained harder on that data — use it if UI and code is your main workload.',
          '**Chart and graph reading**: Qwen2-VL describes chart structure and trends well, but precise numeric values pulled from charts are unreliable on every local vision model. Confirm exact figures against the underlying data.',
          '**Video frames**: Qwen2-VL accepts multiple frames as a sequence — sample roughly one frame per second and send up to 8 to summarize a short clip.',
          '**Multi-image comparison**: send up to 8 images in one request to compare versions, spot differences, or batch-describe a set.',
        ],
        callouts: [
          { type: 'tip', text: 'Use Qwen2-VL for OCR, multilingual documents, and general image Q&A. Switch to InternVL 2.5 when your main workload is code or UI screenshots, or to Moondream 2 when you have under 4 GB of VRAM.' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL vs LLaVA vs Llama 3.2 Vision',
        content: [
          '**For multilingual OCR, Qwen2-VL beats LLaVA 1.6 and matches or beats Llama 3.2 Vision 11B at lower VRAM.** For English-only photo Q&A, Llama 3.2 Vision 11B is an equally strong pick. LLaVA 1.6 remains the most documented model if you need community troubleshooting resources.',
        ],
        rows: [
          { Model: 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Excellent', 'Max Resolution': '4096×4096', 'Best For': 'Multilingual OCR, high-DPI scans' },
          { Model: 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Good', 'Max Resolution': '1120×1120', 'Best For': 'English photo Q&A, general docs' },
          { Model: 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Fair', 'Max Resolution': '672×672', 'Best For': 'General Q&A, community support' },
          { Model: 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Excellent', 'Max Resolution': '1792×1792', 'Best For': 'Document OCR (English-leaning)' },
          { Model: 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Good', 'Max Resolution': 'High', 'Best For': 'Code and UI screenshots' },
        ],
        columns: ['Model', 'VRAM (Q4)', 'OCR / CJK', 'Max Resolution', 'Best For'],
        tableFormat: true,
        note: 'All five run via Ollama (InternVL 2.5 through community builds). For the full local vision model survey — including Moondream 2 and an invoice-extraction benchmark — see the [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026). If unsure, start with Qwen2-VL 7B: it covers OCR, documents, and general Q&A in 6 GB of VRAM.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connecting Local Qwen2-VL to PromptQuorum',
        content: [
          'PromptQuorum routes prompts across multiple models. To use local Qwen2-VL as a vision dispatch target, point PromptQuorum\'s local LLM endpoint at your Ollama server. Image processing then stays on your hardware, while cloud models remain available for text tasks.',
          'This is the Ollama (OpenAI-compatible) endpoint, separate from the Anthropic API configuration used for Claude. Both can be active at once, with PromptQuorum routing by task type and data sensitivity.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen2-VL via Ollama
# Set in your .env or the PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_VISION_MODEL=qwen2-vl:7b

# Example routing rules:
# - task_type: ocr / image  -> qwen2-vl:7b        (local Ollama, no cloud upload)
# - task_type: text         -> claude-sonnet-4-6  (Anthropic API, separate config)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect PromptQuorum to local Qwen2-VL by setting OLLAMA_BASE_URL to http://localhost:11434/v1 and pointing the local vision model to qwen2-vl:7b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting Qwen2-VL',
        items: [
          '**"unknown model" or the pull fails**: use an explicit size tag — `ollama pull qwen2-vl:7b`, not `qwen2-vl`. Run `ollama list` to confirm the installed name.',
          '**The image is ignored and the model answers as if no image was sent**: confirm the file path is correct and readable. In the Ollama API, the `images` array must contain raw base64 *without* the `data:` prefix — the `data:` prefix is LM Studio and OpenAI format only.',
          '**Garbled or missing CJK characters**: the scan is too low-resolution. Re-scan at 150–300 DPI. Qwen2-VL reads up to 4096×4096, so higher input resolution directly improves Chinese and Japanese accuracy.',
          '**CUDA out of memory**: the model does not fit your VRAM. Drop to Qwen2-VL 2B (~3 GB) or run on Apple Silicon, which shares unified memory between CPU and GPU.',
          '**Slow first response, then fast**: this is normal. The vision encoder processes the whole image on the first token; text then generates at near-normal speed.',
          '**Wrong numbers extracted from an invoice or chart**: local vision models misread digits on noisy input. Increase scan quality and always verify numeric output against the source.',
          '**A PDF will not load**: no local vision model accepts PDF directly. Convert pages to PNG or JPEG first (with pdf2image or pypdfium2), then send each page as a separate image.',
          '**LM Studio shows "failed to load model"**: either insufficient VRAM, or you downloaded a non-vision GGUF. Confirm the model card lists vision support and pick the Q4_K_M build.',
        ],
        callouts: [
          { type: 'tip', text: 'Run `ollama ps` to see which models are loaded in VRAM and how much memory each uses. Use `ollama stop qwen2-vl:7b` to unload the model before switching to the 72B.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[How to Run Qwen 3 Locally](/local-llms/run-qwen-locally-guide-2026) — the text-model companion: Ollama and LM Studio setup for the Qwen 3 language model.',
          '[Local Vision Models Compared: LLaVA, Llama 3.2 Vision, MiniCPM-V](/power-local-llm/local-vision-models-llava-ollama-2026) — the full survey of every local vision model, with benchmarks.',
          '[Multimodal Local LLMs: Vision, Audio, and Text](/local-llms/multimodal-local-llms) — broader overview of running multimodal models locally.',
          '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) — how the Qwen text models compare to the alternatives.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — VRAM and GPU requirements for local inference.',
          '[Browse All Local LLM Guides](/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'What is the minimum hardware to run Qwen2-VL locally?', a: 'Qwen2-VL 7B at Q4_K_M quantization needs 8 GB of VRAM (RTX 4060, RTX 3060 12 GB, or RTX 2080). The smaller Qwen2-VL 2B runs in 4 GB. The 72B model needs ~48 GB — Apple Silicon with 64 GB+ unified memory or two 24 GB GPUs. Apple Silicon with 16 GB+ unified memory runs the 7B model comfortably.' },
          { q: 'Is Qwen2-VL better than LLaVA for OCR?', a: 'Yes, especially for non-English text. Qwen2-VL ties MiniCPM-V 2.6 and beats LLaVA 1.6 and Llama 3.2 Vision 11B on Chinese, Japanese, and Korean OCR. Its native 4096×4096 resolution reads high-DPI scans without downsampling, while LLaVA 1.6 caps at 672×672. LLaVA still has the largest community and the most tutorials.' },
          { q: 'Can Qwen2-VL read PDFs directly?', a: 'No. No local vision model accepts PDF input directly. Convert each PDF page to a PNG or JPEG image first (using pdf2image or pypdfium2), then send each page as a separate image request. For a 10-page PDF you send 10 image queries and combine the results.' },
          { q: 'How do I send an image to Qwen2-VL through Ollama?', a: 'Two ways. In interactive mode (`ollama run qwen2-vl:7b`), type the image file path inside your prompt — Ollama detects it and loads the image. Through the API, POST to /api/generate with a base64-encoded `images` array. The base64 string must not include the `data:` prefix.' },
          { q: 'Does Qwen2-VL run fully offline?', a: 'Yes. After the one-time model download, Qwen2-VL runs entirely on your machine — no API key and no cloud account. No image is uploaded anywhere, which keeps document processing inside your infrastructure. See the [Qwen local GDPR setup guide](/local-llms/qwen-local-gdpr-setup-guide-2026) for the compliance implications.' },
          { q: 'How many images can Qwen2-VL process at once?', a: 'Up to 8 images per request — the highest multi-image capacity among local vision models. This makes it well suited to comparing document versions, spotting differences, or summarizing a short video sampled at one frame per second.' },
          { q: 'Qwen2-VL or Llama 3.2 Vision — which should I choose?', a: 'Choose Qwen2-VL for Chinese, Japanese, or Korean documents, high-DPI scans, or small fonts — and because the 7B fits in 6 GB of VRAM versus 8 GB for Llama 3.2 Vision 11B. Choose Llama 3.2 Vision 11B for English-only general photo Q&A, where the two are comparable.' },
          { q: 'Why are the characters garbled in my OCR output?', a: 'Almost always a low-resolution scan. Qwen2-VL reads up to 4096×4096 natively, so re-scanning the document at 150–300 DPI usually fixes garbled or missing characters. Low-quality input is the single biggest cause of OCR errors on every local vision model.' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: 'Qwen2-VL lokal ausführen 2026: Dokumenten-OCR & Vision-Setup-Anleitung',
    seoTitle: 'Qwen2-VL lokal ausführen 2026: OCR- & Vision-Setup',
    intro: 'Qwen2-VL ist das offene Vision-Language-Modell von Alibaba, und die 7B-Variante läuft lokal mit etwa 6 GB VRAM über Ollama oder LM Studio. Es liest Dokumente, Screenshots, Diagramme und Fotos — und führt bei der OCR für Chinesisch, Japanisch und Koreanisch vor jedem anderen lokalen Vision-Modell. Diese Anleitung behandelt Modellauswahl, Hardware, die Einrichtung mit Ollama und LM Studio, die Extraktion mehrsprachiger Dokumente und den Vergleich von Qwen2-VL mit LLaVA und Llama 3.2 Vision.',
    metaDescription: 'Qwen2-VL lokal mit ~6 GB VRAM über Ollama ausführen: Einrichtungsschritte, OCR für chinesische und japanische Dokumente, Bild-Q&A und der Vergleich mit LLaVA.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler und Analysten, die Dokumenten-OCR und Bildverständnis offline benötigen — besonders für chinesische, japanische und gemischtsprachige Dateien — ohne Daten an Cloud-APIs zu senden',
    primaryTerm: 'run Qwen2-VL locally',
    targetKeywords: [
      'Qwen2-VL lokal ausführen 2026',
      'Qwen2-VL Ollama Einrichtung',
      'Qwen2-VL Dokumenten-OCR',
      'lokales mehrsprachiges Vision-Modell',
      'Qwen2-VL vs Llama 3.2 Vision',
      'chinesische japanische OCR lokales LLM',
    ],
    current_models_mentioned: [
      'Qwen2-VL 2B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'LLaVA 1.6 7B',
      'Llama 3.2 Vision 11B',
      'MiniCPM-V 2.6',
      'InternVL 2.5 8B',
      'Moondream 2',
    ],
    current_hardware_mentioned: [
      '4 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '48 GB VRAM',
      'RTX 4060',
      'RTX 3060 12 GB',
      'Apple Silicon (unified memory)',
    ],
    ctaText: 'Auf die PromptQuorum-Warteliste →',
    leadAnswerBlock: '**Führen Sie `ollama pull qwen2-vl:7b` auf jedem Rechner mit 8 GB VRAM aus, um chinesische, japanische und gemischtsprachige Dokumente lokal zu lesen.** Qwen2-VL ist das stärkste offene Vision-Modell für mehrsprachige OCR — jedes Bild wird auf Ihrem Rechner verarbeitet, ohne Cloud-Upload.',
    quickAnswerTop: {
      de: {
        question: 'Wie führe ich Qwen2-VL 2026 lokal aus?',
        answer: 'Installieren Sie Ollama, führen Sie `ollama pull qwen2-vl:7b` aus, dann `ollama run qwen2-vl:7b`, und geben Sie einen Bildpfad in Ihrer Eingabe an. Für eine GUI verwenden Sie LM Studio: Suchen Sie nach "Qwen2-VL 7B", laden Sie die Q4_K_M-GGUF-Variante herunter und hängen Sie Bilder über das Bildsymbol an. Qwen2-VL 7B benötigt ~6 GB VRAM und liest Dokumente, Screenshots und Diagramme vollständig offline.',
        bullets: [
          'Mindest-Hardware: 8 GB VRAM (RTX 4060, RTX 3060 12 GB) oder Apple Silicon mit 16 GB Unified Memory',
          'Modell laden: ollama pull qwen2-vl:7b (lädt Qwen2-VL 7B Q4_K_M ~6 GB)',
          'Bilder anhängen: Dateipfad in die Eingabe schreiben (CLI) oder Base64-images-Array senden (API)',
          'Stärke: OCR für chinesische, japanische und koreanische Dokumente — schlägt LLaVA und Llama 3.2 Vision',
          'Größen: 2B (~3 GB VRAM), 7B (~6 GB, empfohlen), 72B (~48 GB)',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Warum Qwen2-VL bei mehrsprachiger OCR führt', anchor: '#why-qwen-vl' },
      { label: 'Die passende Qwen2-VL-Modellgröße wählen', anchor: '#choose-model' },
      { label: 'Hardware-Anforderungen', anchor: '#hardware' },
      { label: 'Einrichtung mit Ollama', anchor: '#ollama-setup' },
      { label: 'Einrichtung mit LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Dokumenten-OCR für CJK-Dateien', anchor: '#ocr-use-case' },
      { label: 'Bild-Q&A, Screenshots und Diagramme', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL vs. LLaVA vs. Llama 3.2 Vision', anchor: '#vs-other-models' },
      { label: 'Verbindung mit PromptQuorum', anchor: '#promptquorum' },
      { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL 7B läuft lokal mit ~6 GB VRAM (Q4)** über Ollama — ein einziger Befehl `ollama pull qwen2-vl:7b`, keine Modellkonvertierung nötig.',
          '**Bestes lokales Modell für mehrsprachige OCR**: Qwen2-VL liegt gleichauf mit MiniCPM-V 2.6 und schlägt LLaVA 1.6 und Llama 3.2 Vision 11B bei chinesischem, japanischem und koreanischem Text.',
          '**Native Auflösung bis zu 4096×4096** — liest hochauflösende Scans ohne Verkleinerung, anders als LLaVA 1.6 (672×672) oder Llama 3.2 Vision (1120×1120).',
          '**Drei Größen**: 2B (~3 GB VRAM, schnell und einfach), 7B (~6 GB, für die meisten Nutzer empfohlen), 72B (~48 GB, führt Open-Source-Benchmarks an).',
          '**Verarbeitet bis zu 8 Bilder pro Anfrage** — die höchste Mehrbild-Kapazität unter den lokalen Vision-Modellen.',
          '**Keine direkte PDF-Eingabe**: PDF-Seiten zuerst in PNG oder JPEG umwandeln, dann jede Seite als einzelnes Bild senden.',
          '**Nach dem Download zu 100 % offline**: kein API-Schlüssel, kein Cloud-Upload — jedes Dokument bleibt auf Ihrem Rechner, was die KI-Ebene aus dem DSGVO-Datenübermittlungsumfang herausnimmt.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Warum Qwen2-VL unter den lokalen Vision-Modellen bei mehrsprachiger OCR führt',
        content: [
          '**Qwen2-VL ist das stärkste lokale Vision-Modell für mehrsprachige Dokumenten-OCR — es liegt beim Lesen von chinesischem, japanischem, koreanischem und englischem Text gleichauf mit jedem anderen Modell auf Consumer-Hardware oder darüber.** Alibaba hat es mit umfangreichen mehrsprachigen Dokumentkorpora trainiert, weshalb es LLaVA 1.6 und Llama 3.2 Vision 11B bei der Textextraktion außerhalb des Englischen übertrifft.',
          'Qwen2-VL unterstützt eine dynamische Eingabeauflösung von bis zu 4096×4096 Pixeln. LLaVA 1.6 ist auf 672×672 begrenzt und Llama 3.2 Vision auf 1120×1120, sodass beide hochauflösende Scans vor dem Lesen verkleinern. Qwen2-VL liest einen A4-Scan mit 300 DPI in nativer Auflösung — der Hauptgrund für die höhere OCR-Genauigkeit bei dichten Dokumenten und kleinen CJK-Schriftzeichen.',
          'Der lokale Betrieb von Qwen2-VL kostet nach der Hardware 0 € pro Bild. Eine Cloud-Vision-API berechnet etwa 0,01–0,03 € pro Bild; bei 10.000 Bildern pro Monat sind das 100–300 € Ersparnis — und kein Dokument verlässt jemals Ihren Rechner.',
          'Verwenden Sie Qwen2-VL, wenn Ihre Dokumente CJK-Text, kleine Schriften oder hochauflösende Scans enthalten. Wenn Sie ausschließlich auf Englisch mit Foto-Q&A arbeiten, ist Llama 3.2 Vision 11B eine ebenso gute Wahl.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL ist das genaueste lokale Vision-Modell für die Dokumenten-OCR von Chinesisch, Japanisch und Koreanisch und läuft mit ~6 GB VRAM über Ollama.' },
          { type: 'plain-terms', text: 'Ein Vision-Language-Modell liest Bilder, anstatt sie zu erzeugen. Sie geben Qwen2-VL ein Foto oder eine gescannte Seite, und es liefert Text zurück — eine Beschreibung, eine Antwort oder den extrahierten Inhalt.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Die passende Qwen2-VL-Modellgröße wählen',
        content: [
          'Qwen2-VL ist in drei Größen verfügbar. Wählen Sie je nach VRAM und benötigter Genauigkeit. Alle Größen finden Sie auf [Hugging Face (Qwen)](https://huggingface.co/Qwen) und in der Ollama-Modellbibliothek mit expliziten Tags.',
        ],
        rows: [
          { Modell: 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Ollama-Tag': 'qwen2-vl:2b', 'Geeignet für': 'Schnelle Bildunterschriften, einfache OCR, VRAM-arme Laptops' },
          { Modell: 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Ollama-Tag': 'qwen2-vl:7b', 'Geeignet für': 'Empfohlen — Dokumenten-OCR, Bild-Q&A, Diagramme' },
          { Modell: 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Ollama-Tag': 'qwen2-vl:72b', 'Geeignet für': 'Maximale Qualität, Apple Silicon ab 64 GB oder Multi-GPU' },
        ],
        columns: ['Modell', 'VRAM (Q4)', 'Ollama-Tag', 'Geeignet für'],
        tableFormat: true,
        note: 'Q4_K_M ist die empfohlene Quantisierung — das beste Verhältnis von Qualität zu Größe. Die meisten Nutzer sollten mit Qwen2-VL 7B beginnen: Es passt auf eine 8-GB-GPU und bewältigt jeden Anwendungsfall in dieser Anleitung. Wechseln Sie nur dann zum 2B-Modell, wenn der VRAM unter 6 GB liegt. Siehe [LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained), wie sich Q4 auf die Qualität auswirkt.',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Anforderungen für Qwen2-VL',
        items: [
          '**Minimum (Qwen2-VL 7B Q4)**: GPU mit 8 GB VRAM — NVIDIA RTX 4060, RTX 3060 12 GB oder RTX 2080.',
          '**VRAM-arme Option (Qwen2-VL 2B Q4)**: 4 GB VRAM — läuft auf den meisten Laptop-GPUs und integriertem Apple Silicon.',
          '**Maximale Qualität (Qwen2-VL 72B Q4)**: ~48 GB — Apple Silicon mit 64 GB+ Unified Memory oder zwei 24-GB-GPUs.',
          '**Apple Silicon**: Ein M-Series-Chip mit 16 GB+ Unified Memory führt das 7B-Modell problemlos aus; für das 72B-Modell sind 64 GB+ erforderlich.',
          '**Arbeitsspeicher**: 16 GB Minimum neben der GPU-Inferenz; 32 GB empfohlen, wenn eine vollständige Entwicklungsumgebung geöffnet ist.',
          '**Speicherplatz**: ~6 GB freier Speicher für Qwen2-VL 7B Q4 (GGUF), ~30 GB für das 72B-Modell.',
        ],
        callouts: [
          { type: 'note', text: 'Vision-Modelle laufen rund 30–60 % langsamer als ein reines Textmodell mit gleicher Parameterzahl. Der Vision-Encoder verarbeitet das gesamte Bild beim ersten Token; Text wird danach nahezu mit normaler Geschwindigkeit erzeugt. Planen Sie VRAM sowohl für den Encoder als auch für das Sprachmodell ein.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Einrichtung von Qwen2-VL mit Ollama',
        content: [
          'Ollama ist der schnellste Weg, Qwen2-VL lokal auszuführen. Es lädt das Modell herunter, verwaltet die Quantisierung und stellt eine API unter localhost:11434 bereit. Installieren Sie es von [ollama.com](https://ollama.com/download) — oder beginnen Sie, falls Sie neu damit sind, mit [So installieren Sie Ollama](/de/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Ollama installieren', whyItMatters: 'Ollama übernimmt den Modell-Download, das GGUF-Format und die lokale API. Es ist für macOS, Linux und Windows verfügbar.' },
          { title: 'Qwen2-VL mit explizitem Größen-Tag laden', whyItMatters: 'Verwenden Sie qwen2-vl:7b. Der bloße Tag qwen2-vl kann eine andere Größe auflösen — geben Sie immer 2b, 7b oder 72b an, damit Sie das in dieser Anleitung behandelte Modell erhalten.' },
          { title: 'Modell ausführen und ein Bild anhängen', whyItMatters: 'Geben Sie im interaktiven Modus den Bildpfad innerhalb Ihrer Eingabe an. Ollama erkennt den Pfad und lädt das Bild in den Vision-Encoder.' },
          { title: 'Bilder über die API senden', whyItMatters: 'Der Endpunkt /api/generate akzeptiert ein Base64-codiertes images-Array. So senden Anwendungen — und PromptQuorum — Bilder programmatisch.' },
          { title: 'Mehrsprachige OCR überprüfen', whyItMatters: 'Senden Sie einen chinesischen oder japanischen Dokumentscan und prüfen Sie, ob der extrahierte Text übereinstimmt. Das beweist, dass Vision-Encoder und Tokenizer CJK-Schrift korrekt verarbeiten, bevor Sie darauf aufbauen.' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen2-VL 7B (explicit size tag)
ollama pull qwen2-vl:7b
# Downloads Qwen2-VL 7B Q4_K_M (~6 GB)

# Step 3 — Run and attach an image (interactive)
ollama run qwen2-vl:7b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen2-vl:7b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen2-vl:7b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Senden Sie Dokumentbilder mit 150 DPI oder höher. Qwen2-VL liest nativ bis zu 4096×4096, sodass hochauflösende Scans die Genauigkeit direkt verbessern. Anders als bei einer Texteingabe ist die Bildqualität der wichtigste Faktor für OCR-Ergebnisse — ein unscharfer Scan liefert falsche Zeichen, egal wie gut das Modell ist.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Einrichtung von Qwen2-VL mit LM Studio',
        content: [
          'LM Studio führt Qwen2-VL über eine grafische Oberfläche ohne CLI-Befehle aus. Es ist der empfohlene Weg für Windows-Nutzer und alle, die eine GUI bevorzugen. Laden Sie es von [lmstudio.ai](https://lmstudio.ai) herunter oder lesen Sie [So installieren Sie LM Studio](/de/local-llms/how-to-install-lm-studio).',
        ],
        numberedItems: [
          { title: 'LM Studio herunterladen und installieren', whyItMatters: 'Eine kostenlose, plattformübergreifende GUI für lokale Modell-Inferenz. Kein Terminal erforderlich.' },
          { title: 'Im Modellbrowser nach Qwen2-VL suchen', whyItMatters: 'Suchen Sie nach "Qwen2-VL 7B" und wählen Sie eine Q4_K_M-GGUF-Variante. LM Studio kennzeichnet vision-fähige Modelle mit einem Bildsymbol.' },
          { title: 'Modell laden und ein Bild anhängen', whyItMatters: 'Klicken Sie auf das Bildsymbol im Eingabefeld, um ein Foto oder einen Scan hochzuladen. LM Studio übergibt es an den Vision-Encoder.' },
          { title: 'Lokalen Server starten', whyItMatters: 'Die Schaltfläche "Start Server" stellt eine OpenAI-kompatible API unter localhost:1234 bereit. Vision-Anfragen verwenden das Standard-image_url-Inhaltsformat.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "qwen2-vl-7b",
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Extract all text from this document." },
        {
          "type": "image_url",
          "image_url": { "url": "data:image/png;base64,<base64-encoded-image>" }
        }
      ]
    }
  ]
}`,
        codeLanguage: 'json',
        note: 'LM Studio und Ollama verwenden unterschiedliche Bildformate: LM Studio folgt dem OpenAI-image_url-Inhaltsschema (mit data:-Präfix); Ollama verwendet ein images-Array auf oberster Ebene mit rohem Base64 (ohne Präfix). Wählen Sie eine Laufzeitumgebung und richten Sie sich nach deren Format.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'Dokumenten-OCR für chinesische, japanische und gemischtsprachige Dateien',
        content: [
          '**Qwen2-VL extrahiert Text aus chinesischen, japanischen, koreanischen und gemischtsprachigen Dokumenten genauer als jedes andere lokale Vision-Modell.** Seine Trainingsdaten umfassten große mehrsprachige Dokumentkorpora, und seine native Auflösung von 4096×4096 liest kleine CJK-Schriftzeichen, die LLaVA 1.6 und Llama 3.2 Vision verkleinern und übersehen.',
          'Das zuverlässigste Muster ist eine spezifische Extraktionsanweisung. Fordern Sie Struktur an — "behalte das Tabellenlayout bei", "gib jedes Feld als key: value zurück" — statt eines vagen "lies das". Qwen2-VL folgt Formatierungsanweisungen genau, was die Ausgabe ohne Nachbearbeitung nutzbar hält.',
        ],
        items: [
          '**Reine Textextraktion**: "Extrahiere jede Textzeile aus diesem Bild. Behalte Zeilenumbrüche und Lesereihenfolge bei."',
          '**Strukturierte Felder**: "Dies ist eine japanische Rechnung. Gib Lieferant, Datum, Zwischensumme, Steuer und Gesamtbetrag als key: value-Paare zurück."',
          '**Tabellenextraktion**: "Extrahiere diese Tabelle als CSV. Behandle die erste Zeile als Kopfzeile."',
          '**Extrahieren und übersetzen in einem Durchgang**: "Extrahiere den chinesischen Text aus diesem Bild und übersetze ihn dann ins Englische. Zeige beides."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen2-vl:7b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Example output:
# vendor: Sample Trading Co., Ltd.
# date: 2026-04-30
# subtotal: 84,000 JPY
# tax: 8,400 JPY
# total: 92,400 JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Überprüfen Sie extrahierte Zahlen immer anhand des Originaldokuments. Lokale Vision-Modelle — auch Qwen2-VL — können auf einem Scan geringer Qualität eine Ziffer falsch lesen. Behandeln Sie die OCR-Ausgabe als zu prüfenden Entwurf, nicht als endgültigen Wert, besonders bei Rechnungen und Finanzdokumenten.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Um mit Qwen2-VL Text aus einem CJK-Dokument zu extrahieren, senden Sie das Bild mit mindestens 150 DPI und einer spezifischen Anweisung, die Struktur verlangt, etwa "gib jedes Feld als key: value zurück".' },
          { type: 'plain-terms', text: 'OCR bedeutet, ein Bild von Text in bearbeitbaren Text umzuwandeln. Qwen2-VL betrachtet eine gescannte Seite und tippt ab, was es sieht — und es bewältigt chinesische und japanische Schriftzeichen ebenso gut wie englische.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Bild-Q&A, Screenshot-Analyse und Diagrammlesen',
        content: [
          'Über OCR hinaus bewältigt Qwen2-VL allgemeines Bildverständnis — das Beschreiben von Fotos, das Beantworten von Fragen zu Screenshots und das Lesen von Diagrammen. Es ist bei klaren Eingaben genau und bei unübersichtlichen oder mehrdeutigen Szenen schwächer.',
        ],
        items: [
          '**Bild-Q&A**: Stellen Sie offene Fragen zu einem Foto — "Was ist auf diesem Bild?", "Wie viele Personen tragen Rot?". Qwen2-VL 7B ist bei klaren Fotos genau, bei unübersichtlichen oder mehrdeutigen Szenen schwächer.',
          '**Screenshot- und UI-Analyse**: Qwen2-VL liest UI-Screenshots, Fehlerdialoge und App-Zustände. Speziell für dichte Code-Screenshots ist InternVL 2.5 stärker auf diese Daten trainiert — verwenden Sie es, wenn UI und Code Ihr Hauptarbeitsbereich sind.',
          '**Diagramm- und Grafiklesen**: Qwen2-VL beschreibt Diagrammstruktur und Trends gut, aber präzise Zahlenwerte aus Diagrammen sind bei jedem lokalen Vision-Modell unzuverlässig. Prüfen Sie exakte Werte anhand der zugrunde liegenden Daten.',
          '**Videoframes**: Qwen2-VL akzeptiert mehrere Frames als Sequenz — entnehmen Sie etwa einen Frame pro Sekunde und senden Sie bis zu 8, um einen kurzen Clip zusammenzufassen.',
          '**Mehrbildvergleich**: Senden Sie bis zu 8 Bilder in einer Anfrage, um Versionen zu vergleichen, Unterschiede zu erkennen oder einen Satz im Stapel zu beschreiben.',
        ],
        callouts: [
          { type: 'tip', text: 'Verwenden Sie Qwen2-VL für OCR, mehrsprachige Dokumente und allgemeines Bild-Q&A. Wechseln Sie zu InternVL 2.5, wenn Ihr Hauptarbeitsbereich Code- oder UI-Screenshots sind, oder zu Moondream 2, wenn Sie unter 4 GB VRAM haben.' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL vs. LLaVA vs. Llama 3.2 Vision',
        content: [
          '**Bei mehrsprachiger OCR schlägt Qwen2-VL LLaVA 1.6 und erreicht oder übertrifft Llama 3.2 Vision 11B bei geringerem VRAM.** Für reines englisches Foto-Q&A ist Llama 3.2 Vision 11B eine ebenso starke Wahl. LLaVA 1.6 bleibt das am besten dokumentierte Modell, wenn Sie Community-Ressourcen zur Fehlerbehebung benötigen.',
        ],
        rows: [
          { Modell: 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Exzellent', 'Max. Auflösung': '4096×4096', 'Geeignet für': 'Mehrsprachige OCR, hochauflösende Scans' },
          { Modell: 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Gut', 'Max. Auflösung': '1120×1120', 'Geeignet für': 'Englisches Foto-Q&A, allgemeine Dokumente' },
          { Modell: 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Befriedigend', 'Max. Auflösung': '672×672', 'Geeignet für': 'Allgemeines Q&A, Community-Unterstützung' },
          { Modell: 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Exzellent', 'Max. Auflösung': '1792×1792', 'Geeignet für': 'Dokumenten-OCR (englischlastig)' },
          { Modell: 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Gut', 'Max. Auflösung': 'Hoch', 'Geeignet für': 'Code- und UI-Screenshots' },
        ],
        columns: ['Modell', 'VRAM (Q4)', 'OCR / CJK', 'Max. Auflösung', 'Geeignet für'],
        tableFormat: true,
        note: 'Alle fünf laufen über Ollama (InternVL 2.5 über Community-Builds). Den vollständigen Überblick über lokale Vision-Modelle — einschließlich Moondream 2 und einem Rechnungsextraktions-Benchmark — finden Sie im [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026). Im Zweifelsfall beginnen Sie mit Qwen2-VL 7B: Es deckt OCR, Dokumente und allgemeines Q&A mit 6 GB VRAM ab.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Lokales Qwen2-VL mit PromptQuorum verbinden',
        content: [
          'PromptQuorum leitet Eingaben über mehrere Modelle. Um lokales Qwen2-VL als Vision-Dispatch-Ziel zu verwenden, richten Sie den lokalen LLM-Endpunkt von PromptQuorum auf Ihren Ollama-Server aus. Die Bildverarbeitung bleibt dann auf Ihrer Hardware, während Cloud-Modelle für Textaufgaben verfügbar bleiben.',
          'Dies ist der Ollama-Endpunkt (OpenAI-kompatibel), getrennt von der Anthropic-API-Konfiguration für Claude. Beide können gleichzeitig aktiv sein, wobei PromptQuorum nach Aufgabentyp und Datensensibilität weiterleitet.',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen2-VL via Ollama
# Set in your .env or the PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_VISION_MODEL=qwen2-vl:7b

# Example routing rules:
# - task_type: ocr / image  -> qwen2-vl:7b        (local Ollama, no cloud upload)
# - task_type: text         -> claude-sonnet-4-6  (Anthropic API, separate config)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'Verbinden Sie PromptQuorum mit lokalem Qwen2-VL, indem Sie OLLAMA_BASE_URL auf http://localhost:11434/v1 setzen und das lokale Vision-Modell auf qwen2-vl:7b zeigen lassen.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Fehlerbehebung bei Qwen2-VL',
        items: [
          '**"unknown model" oder der Pull schlägt fehl**: Verwenden Sie einen expliziten Größen-Tag — `ollama pull qwen2-vl:7b`, nicht `qwen2-vl`. Führen Sie `ollama list` aus, um den installierten Namen zu bestätigen.',
          '**Das Bild wird ignoriert und das Modell antwortet, als wäre kein Bild gesendet worden**: Prüfen Sie, ob der Dateipfad korrekt und lesbar ist. In der Ollama-API muss das `images`-Array rohes Base64 *ohne* das `data:`-Präfix enthalten — das `data:`-Präfix gehört nur zum LM-Studio- und OpenAI-Format.',
          '**Verstümmelte oder fehlende CJK-Zeichen**: Der Scan hat eine zu geringe Auflösung. Scannen Sie mit 150–300 DPI neu. Qwen2-VL liest bis zu 4096×4096, sodass eine höhere Eingabeauflösung die Genauigkeit für Chinesisch und Japanisch direkt verbessert.',
          '**CUDA-Speicherüberlauf (out of memory)**: Das Modell passt nicht in Ihren VRAM. Wechseln Sie zu Qwen2-VL 2B (~3 GB) oder führen Sie es auf Apple Silicon aus, das Unified Memory zwischen CPU und GPU teilt.',
          '**Langsame erste Antwort, dann schnell**: Das ist normal. Der Vision-Encoder verarbeitet das gesamte Bild beim ersten Token; Text wird danach nahezu mit normaler Geschwindigkeit erzeugt.',
          '**Falsche Zahlen aus einer Rechnung oder einem Diagramm extrahiert**: Lokale Vision-Modelle lesen Ziffern bei verrauschten Eingaben falsch. Erhöhen Sie die Scan-Qualität und prüfen Sie die Zahlenausgabe immer anhand der Quelle.',
          '**Eine PDF lässt sich nicht laden**: Kein lokales Vision-Modell akzeptiert PDF direkt. Wandeln Sie Seiten zuerst in PNG oder JPEG um (mit pdf2image oder pypdfium2) und senden Sie dann jede Seite als einzelnes Bild.',
          '**LM Studio zeigt "failed to load model"**: Entweder zu wenig VRAM oder Sie haben eine GGUF-Datei ohne Vision-Unterstützung heruntergeladen. Prüfen Sie, ob die Modellkarte Vision-Unterstützung angibt, und wählen Sie die Q4_K_M-Variante.',
        ],
        callouts: [
          { type: 'tip', text: 'Führen Sie `ollama ps` aus, um zu sehen, welche Modelle in den VRAM geladen sind und wie viel Speicher jedes belegt. Verwenden Sie `ollama stop qwen2-vl:7b`, um das Modell zu entladen, bevor Sie zum 72B-Modell wechseln.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[So führen Sie Qwen 3 lokal aus](/de/local-llms/run-qwen-locally-guide-2026) — das Gegenstück für Textmodelle: Einrichtung von Qwen 3 mit Ollama und LM Studio.',
          '[Lokale Vision-Modelle im Vergleich: LLaVA, Llama 3.2 Vision, MiniCPM-V](/de/power-local-llm/local-vision-models-llava-ollama-2026) — der vollständige Überblick über jedes lokale Vision-Modell, mit Benchmarks.',
          '[Multimodale lokale LLMs: Vision, Audio und Text](/de/local-llms/multimodal-local-llms) — breiterer Überblick über den lokalen Betrieb multimodaler Modelle.',
          '[Qwen vs. Llama vs. Mistral](/de/local-llms/qwen-vs-llama-vs-mistral) — wie die Qwen-Textmodelle im Vergleich zu den Alternativen abschneiden.',
          '[Hardware-Leitfaden für lokale LLMs 2026](/de/local-llms/local-llm-hardware-guide-2026) — VRAM- und GPU-Anforderungen für lokale Inferenz.',
          '[Alle Anleitungen zu lokalen LLMs durchsuchen](/de/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Was ist die Mindest-Hardware, um Qwen2-VL lokal auszuführen?', a: 'Qwen2-VL 7B mit Q4_K_M-Quantisierung benötigt 8 GB VRAM (RTX 4060, RTX 3060 12 GB oder RTX 2080). Das kleinere Qwen2-VL 2B läuft mit 4 GB. Das 72B-Modell benötigt ~48 GB — Apple Silicon mit 64 GB+ Unified Memory oder zwei 24-GB-GPUs. Apple Silicon mit 16 GB+ Unified Memory führt das 7B-Modell problemlos aus.' },
          { q: 'Ist Qwen2-VL besser als LLaVA für OCR?', a: 'Ja, besonders für nicht-englischen Text. Qwen2-VL liegt gleichauf mit MiniCPM-V 2.6 und schlägt LLaVA 1.6 und Llama 3.2 Vision 11B bei chinesischer, japanischer und koreanischer OCR. Seine native Auflösung von 4096×4096 liest hochauflösende Scans ohne Verkleinerung, während LLaVA 1.6 auf 672×672 begrenzt ist. LLaVA hat weiterhin die größte Community und die meisten Tutorials.' },
          { q: 'Kann Qwen2-VL PDFs direkt lesen?', a: 'Nein. Kein lokales Vision-Modell akzeptiert PDF-Eingaben direkt. Wandeln Sie jede PDF-Seite zuerst in ein PNG- oder JPEG-Bild um (mit pdf2image oder pypdfium2) und senden Sie dann jede Seite als einzelne Bildanfrage. Bei einer 10-seitigen PDF senden Sie 10 Bildanfragen und fügen die Ergebnisse zusammen.' },
          { q: 'Wie sende ich ein Bild über Ollama an Qwen2-VL?', a: 'Auf zwei Wegen. Im interaktiven Modus (`ollama run qwen2-vl:7b`) geben Sie den Bildpfad innerhalb Ihrer Eingabe an — Ollama erkennt ihn und lädt das Bild. Über die API senden Sie ein POST an /api/generate mit einem Base64-codierten `images`-Array. Der Base64-String darf das `data:`-Präfix nicht enthalten.' },
          { q: 'Läuft Qwen2-VL vollständig offline?', a: 'Ja. Nach dem einmaligen Modell-Download läuft Qwen2-VL vollständig auf Ihrem Rechner — kein API-Schlüssel und kein Cloud-Konto. Es wird kein Bild irgendwohin hochgeladen, wodurch die Dokumentverarbeitung innerhalb Ihrer Infrastruktur bleibt. Die Compliance-Auswirkungen erläutert der [Qwen-Leitfaden zur lokalen DSGVO-Einrichtung](/de/local-llms/qwen-local-gdpr-setup-guide-2026).' },
          { q: 'Wie viele Bilder kann Qwen2-VL gleichzeitig verarbeiten?', a: 'Bis zu 8 Bilder pro Anfrage — die höchste Mehrbild-Kapazität unter den lokalen Vision-Modellen. Das macht es gut geeignet, um Dokumentversionen zu vergleichen, Unterschiede zu erkennen oder ein kurzes Video zusammenzufassen, das mit einem Frame pro Sekunde abgetastet wurde.' },
          { q: 'Qwen2-VL oder Llama 3.2 Vision — welches sollte ich wählen?', a: 'Wählen Sie Qwen2-VL für chinesische, japanische oder koreanische Dokumente, hochauflösende Scans oder kleine Schriften — und weil das 7B-Modell in 6 GB VRAM passt gegenüber 8 GB bei Llama 3.2 Vision 11B. Wählen Sie Llama 3.2 Vision 11B für reines englisches Foto-Q&A, wo beide vergleichbar sind.' },
          { q: 'Warum sind die Zeichen in meiner OCR-Ausgabe verstümmelt?', a: 'Fast immer ist es ein Scan mit geringer Auflösung. Qwen2-VL liest nativ bis zu 4096×4096, sodass ein erneuter Scan des Dokuments mit 150–300 DPI verstümmelte oder fehlende Zeichen meist behebt. Eingaben geringer Qualität sind die häufigste Ursache für OCR-Fehler bei jedem lokalen Vision-Modell.' },
          { q: 'Muss ich bei der Verwendung von Qwen2-VL die DSGVO beachten?', a: 'Wenn Sie Qwen2-VL lokal ausführen, wird kein Bild und kein Dokument an Dritte übermittelt, sodass DSGVO-Artikel 44 zur Drittlandübermittlung für die KI-Ebene nicht greift. Sie bleiben weiterhin Verantwortlicher nach Artikel 28 für Ihre eigene Verarbeitung und sollten die Verarbeitung in Ihrem Verzeichnis von Verarbeitungstätigkeiten dokumentieren. Lokale Inferenz erleichtert zudem die Einhaltung der BSI-Grundschutz-Kataloge, da die Bildverarbeitung Ihre kontrollierte Infrastruktur nicht verlässt.' },
          { q: 'Ist Qwen2-VL für den deutschen Mittelstand geeignet?', a: 'Ja. Für mittelständische Unternehmen, die Rechnungen, Verträge oder Formulare verarbeiten, läuft Qwen2-VL 7B auf einer einzelnen 8-GB-GPU oder einem Apple-Silicon-Rechner und hält dabei sensible Dokumente im Haus. Das passt zu den IT-Sicherheitsstandards des BSI und vermeidet Auftragsverarbeitungsverträge mit Cloud-Anbietern. Für DACH-Unternehmen, die mit chinesischen oder japanischen Geschäftsdokumenten arbeiten, ist die mehrsprachige OCR-Stärke ein konkreter praktischer Vorteil.' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: "Exécuter Qwen2-VL en local en 2026 : guide OCR et vision",
    seoTitle: "Exécuter Qwen2-VL en local 2026 : guide OCR & vision",
    intro: "Qwen2-VL est le modèle vision-langage ouvert d'Alibaba, et sa variante 7B s'exécute en local avec environ 6 GB de VRAM via Ollama ou LM Studio. Il lit des documents, des captures d'écran, des graphiques et des photos — et devance tous les autres modèles de vision locaux pour l'OCR du chinois, du japonais et du coréen. Ce guide couvre le choix du modèle, le matériel, l'installation avec Ollama et LM Studio, l'extraction de documents multilingues et la comparaison de Qwen2-VL avec LLaVA et Llama 3.2 Vision.",
    metaDescription: "Exécuter Qwen2-VL en local avec ~6 GB de VRAM via Ollama : installation, OCR de documents chinois et japonais, questions-réponses sur image et comparatifs.",
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    audience: "Développeurs et analystes ayant besoin d'OCR de documents et de compréhension d'images hors ligne — en particulier pour des fichiers en chinois, japonais et multilingues — sans envoyer de données à des API cloud",
    primaryTerm: 'run Qwen2-VL locally',
    targetKeywords: [
      "exécuter Qwen2-VL en local 2026",
      "installation Qwen2-VL Ollama",
      "OCR de documents Qwen2-VL",
      "modèle de vision local multilingue",
      "Qwen2-VL vs Llama 3.2 Vision",
      "OCR chinois japonais LLM local",
    ],
    current_models_mentioned: [
      'Qwen2-VL 2B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'LLaVA 1.6 7B',
      'Llama 3.2 Vision 11B',
      'MiniCPM-V 2.6',
      'InternVL 2.5 8B',
      'Moondream 2',
    ],
    current_hardware_mentioned: [
      '4 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '48 GB VRAM',
      'RTX 4060',
      'RTX 3060 12 GB',
      'Apple Silicon (unified memory)',
    ],
    ctaText: "Rejoindre la liste d'attente PromptQuorum →",
    leadAnswerBlock: "**Exécutez `ollama pull qwen2-vl:7b` sur toute machine disposant de 8 GB de VRAM pour lire localement des documents en chinois, en japonais et multilingues.** Qwen2-VL est le modèle de vision ouvert le plus performant pour l'OCR multilingue — chaque image est traitée sur votre machine, sans envoi vers le cloud.",
    quickAnswerTop: {
      fr: {
        question: "Comment exécuter Qwen2-VL en local en 2026 ?",
        answer: "Installez Ollama, exécutez `ollama pull qwen2-vl:7b`, puis `ollama run qwen2-vl:7b` et indiquez un chemin d'image dans votre requête. Pour une interface graphique, utilisez LM Studio : recherchez « Qwen2-VL 7B », téléchargez la variante GGUF Q4_K_M et joignez des images via l'icône d'image. Qwen2-VL 7B nécessite ~6 GB de VRAM et lit documents, captures d'écran et graphiques entièrement hors ligne.",
        bullets: [
          "Matériel minimum : 8 GB de VRAM (RTX 4060, RTX 3060 12 GB) ou Apple Silicon avec 16 GB de mémoire unifiée",
          "Télécharger le modèle : ollama pull qwen2-vl:7b (télécharge Qwen2-VL 7B Q4_K_M ~6 GB)",
          "Joindre des images : indiquer le chemin du fichier dans la requête (CLI) ou envoyer un tableau images en base64 (API)",
          "Point fort : OCR de documents en chinois, japonais et coréen — surpasse LLaVA et Llama 3.2 Vision",
          "Tailles : 2B (~3 GB de VRAM), 7B (~6 GB, recommandé), 72B (~48 GB)",
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: "Points clés", anchor: '#key-takeaways' },
      { label: "Pourquoi Qwen2-VL domine pour l'OCR multilingue", anchor: '#why-qwen-vl' },
      { label: "Choisir la taille de votre modèle Qwen2-VL", anchor: '#choose-model' },
      { label: "Configuration matérielle requise", anchor: '#hardware' },
      { label: "Installation avec Ollama", anchor: '#ollama-setup' },
      { label: "Installation avec LM Studio", anchor: '#lm-studio-setup' },
      { label: "OCR de documents pour les fichiers CJK", anchor: '#ocr-use-case' },
      { label: "Questions-réponses sur image, captures d'écran et graphiques", anchor: '#other-use-cases' },
      { label: "Qwen2-VL vs LLaVA vs Llama 3.2 Vision", anchor: '#vs-other-models' },
      { label: "Connexion à PromptQuorum", anchor: '#promptquorum' },
      { label: "Dépannage", anchor: '#troubleshooting' },
      { label: "Pour aller plus loin", anchor: '#related-reading' },
      { label: "FAQ", anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          "**Qwen2-VL 7B s'exécute en local avec ~6 GB de VRAM (Q4)** via Ollama — une seule commande `ollama pull qwen2-vl:7b`, sans conversion de modèle.",
          "**Meilleur modèle local pour l'OCR multilingue** : Qwen2-VL égale MiniCPM-V 2.6 et surpasse LLaVA 1.6 et Llama 3.2 Vision 11B sur les textes chinois, japonais et coréen.",
          "**Résolution native jusqu'à 4096×4096** — lit les scans haute résolution sans réduction, contrairement à LLaVA 1.6 (672×672) ou Llama 3.2 Vision (1120×1120).",
          "**Trois tailles** : 2B (~3 GB de VRAM, rapide et basique), 7B (~6 GB, recommandé pour la plupart des usages), 72B (~48 GB, en tête des benchmarks open source).",
          "**Accepte jusqu'à 8 images par requête** — la plus grande capacité multi-images parmi les modèles de vision locaux.",
          "**Pas d'entrée PDF directe** : convertissez d'abord les pages PDF en PNG ou JPEG, puis envoyez chaque page comme image distincte.",
          "**100 % hors ligne après le téléchargement** : aucune clé API, aucun envoi vers le cloud — chaque document reste sur votre machine, ce qui sort la couche IA du périmètre de transfert de données du RGPD.",
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: "Pourquoi Qwen2-VL domine les modèles de vision locaux pour l'OCR multilingue",
        content: [
          "**Qwen2-VL est le modèle de vision local le plus performant pour l'OCR de documents multilingues — il égale ou dépasse tout autre modèle fonctionnant sur du matériel grand public pour lire le chinois, le japonais, le coréen et l'anglais.** Alibaba l'a entraîné sur de vastes corpus de documents multilingues, ce qui explique qu'il surpasse LLaVA 1.6 et Llama 3.2 Vision 11B pour l'extraction de texte non anglophone.",
          "Qwen2-VL prend en charge une résolution d'entrée dynamique jusqu'à 4096×4096 pixels. LLaVA 1.6 plafonne à 672×672 et Llama 3.2 Vision à 1120×1120 : tous deux réduisent les scans haute résolution avant lecture. Qwen2-VL lit un scan A4 à 300 DPI en résolution native — la principale raison de sa meilleure précision d'OCR sur les documents denses et les petits caractères CJK.",
          "Exécuter Qwen2-VL en local coûte 0 € par image après le matériel. Une API de vision cloud facture environ 0,01–0,03 € par image ; à 10 000 images par mois, cela représente 100–300 € d'économies — et aucun document ne quitte jamais votre machine.",
          "Utilisez Qwen2-VL si vos documents contiennent du texte CJK, de petites polices ou des scans haute résolution. Si votre travail concerne uniquement des questions-réponses sur photos en anglais, Llama 3.2 Vision 11B est un choix tout aussi pertinent.",
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Qwen2-VL est le modèle de vision local le plus précis pour l'OCR de documents en chinois, japonais et coréen, et fonctionne avec ~6 GB de VRAM via Ollama." },
          { type: 'plain-terms', text: "Un modèle vision-langage lit des images au lieu d'en générer. Vous fournissez à Qwen2-VL une photo ou une page scannée, et il renvoie du texte — une description, une réponse ou le contenu extrait." },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: "Choisir la taille de votre modèle Qwen2-VL",
        content: [
          "Qwen2-VL existe en trois tailles. Choisissez selon votre VRAM et la précision requise. Toutes les tailles sont disponibles sur [Hugging Face (Qwen)](https://huggingface.co/Qwen) et dans la bibliothèque de modèles Ollama avec des tags explicites.",
        ],
        rows: [
          { 'Modèle': 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Tag Ollama': 'qwen2-vl:2b', 'Recommandé pour': "Légendes rapides, OCR simple, ordinateurs portables à faible VRAM" },
          { 'Modèle': 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Tag Ollama': 'qwen2-vl:7b', 'Recommandé pour': "Recommandé — OCR de documents, Q&R sur image, graphiques" },
          { 'Modèle': 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Tag Ollama': 'qwen2-vl:72b', 'Recommandé pour': "Qualité maximale, Apple Silicon 64 GB+ ou multi-GPU" },
        ],
        columns: ['Modèle', 'VRAM (Q4)', 'Tag Ollama', 'Recommandé pour'],
        tableFormat: true,
        note: "Q4_K_M est la quantification recommandée — le meilleur rapport qualité/taille. La plupart des utilisateurs devraient commencer par Qwen2-VL 7B : il tient sur un GPU de 8 GB et couvre tous les cas d'usage de ce guide. Ne passez au modèle 2B que si la VRAM est inférieure à 6 GB. Voir [la quantification des LLM expliquée](/fr/local-llms/llm-quantization-explained) pour l'effet de Q4 sur la qualité.",
      },
      hardware: {
        id: 'hardware',
        title: "Configuration matérielle requise pour Qwen2-VL",
        items: [
          "**Minimum (Qwen2-VL 7B Q4)** : GPU avec 8 GB de VRAM — NVIDIA RTX 4060, RTX 3060 12 GB ou RTX 2080.",
          "**Option à faible VRAM (Qwen2-VL 2B Q4)** : 4 GB de VRAM — fonctionne sur la plupart des GPU d'ordinateurs portables et sur Apple Silicon intégré.",
          "**Qualité maximale (Qwen2-VL 72B Q4)** : ~48 GB — Apple Silicon avec 64 GB+ de mémoire unifiée, ou deux GPU de 24 GB.",
          "**Apple Silicon** : une puce M-series avec 16 GB+ de mémoire unifiée exécute le modèle 7B sans difficulté ; 64 GB+ sont nécessaires pour le 72B.",
          "**Mémoire système** : 16 GB minimum en parallèle de l'inférence GPU ; 32 GB recommandés avec un environnement de développement complet ouvert.",
          "**Stockage** : ~6 GB d'espace disque libre pour Qwen2-VL 7B Q4 (GGUF), ~30 GB pour le 72B.",
        ],
        callouts: [
          { type: 'note', text: "Les modèles de vision sont environ 30–60 % plus lents qu'un modèle uniquement textuel de même nombre de paramètres. L'encodeur de vision traite l'image entière au premier token ; le texte se génère ensuite à une vitesse quasi normale. Prévoyez de la VRAM pour l'encodeur comme pour le modèle de langage." },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: "Installer Qwen2-VL avec Ollama",
        content: [
          "Ollama est le moyen le plus rapide d'exécuter Qwen2-VL en local. Il télécharge le modèle, gère la quantification et expose une API sur localhost:11434. Installez-le depuis [ollama.com](https://ollama.com/download) — ou, si vous débutez, commencez par [installer Ollama](/fr/local-llms/how-to-install-ollama).",
        ],
        numberedItems: [
          { title: "Installer Ollama", whyItMatters: "Ollama gère le téléchargement du modèle, le format GGUF et l'API locale. Il est disponible pour macOS, Linux et Windows." },
          { title: "Télécharger Qwen2-VL avec un tag de taille explicite", whyItMatters: "Utilisez qwen2-vl:7b. Le tag qwen2-vl seul peut renvoyer une autre taille — indiquez toujours 2b, 7b ou 72b pour obtenir le modèle visé par ce guide." },
          { title: "Exécuter le modèle et joindre une image", whyItMatters: "En mode interactif, indiquez le chemin du fichier image dans votre requête. Ollama détecte le chemin et charge l'image dans l'encodeur de vision." },
          { title: "Envoyer des images via l'API", whyItMatters: "Le point de terminaison /api/generate accepte un tableau images encodé en base64. C'est ainsi que les applications — et PromptQuorum — envoient des images par programmation." },
          { title: "Vérifier l'OCR multilingue", whyItMatters: "Envoyez un scan de document chinois ou japonais et vérifiez que le texte extrait correspond. Cela confirme que l'encodeur de vision et le tokeniseur traitent correctement l'écriture CJK avant d'aller plus loin." },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen2-VL 7B (explicit size tag)
ollama pull qwen2-vl:7b
# Downloads Qwen2-VL 7B Q4_K_M (~6 GB)

# Step 3 — Run and attach an image (interactive)
ollama run qwen2-vl:7b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen2-vl:7b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen2-vl:7b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: "Envoyez les images de documents à 150 DPI ou plus. Qwen2-VL lit nativement jusqu'à 4096×4096, donc les scans haute résolution améliorent directement la précision. Contrairement à une requête textuelle, la qualité de l'image est le facteur déterminant des résultats d'OCR — un scan flou produit des caractères erronés, quelle que soit la qualité du modèle." },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: "Installer Qwen2-VL avec LM Studio",
        content: [
          "LM Studio exécute Qwen2-VL via une interface graphique, sans commande CLI. C'est la voie recommandée pour les utilisateurs Windows et tous ceux qui préfèrent une interface graphique. Téléchargez-le depuis [lmstudio.ai](https://lmstudio.ai), ou consultez [comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio).",
        ],
        numberedItems: [
          { title: "Télécharger et installer LM Studio", whyItMatters: "Une interface graphique gratuite et multiplateforme pour l'inférence de modèles en local. Aucun terminal requis." },
          { title: "Rechercher Qwen2-VL dans le navigateur de modèles", whyItMatters: "Recherchez « Qwen2-VL 7B » et sélectionnez une variante GGUF Q4_K_M. LM Studio signale les modèles compatibles vision par une icône d'image." },
          { title: "Charger le modèle et joindre une image", whyItMatters: "Cliquez sur l'icône d'image dans le champ de saisie pour téléverser une photo ou un scan. LM Studio le transmet à l'encodeur de vision." },
          { title: "Démarrer le serveur local", whyItMatters: "Le bouton « Start Server » expose une API compatible OpenAI sur localhost:1234. Les requêtes de vision utilisent le format de contenu image_url standard." },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "qwen2-vl-7b",
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Extract all text from this document." },
        {
          "type": "image_url",
          "image_url": { "url": "data:image/png;base64,<base64-encoded-image>" }
        }
      ]
    }
  ]
}`,
        codeLanguage: 'json',
        note: "LM Studio et Ollama utilisent des formats d'image différents : LM Studio suit le schéma de contenu image_url d'OpenAI (avec un préfixe data:) ; Ollama utilise un tableau images de premier niveau en base64 brut (sans préfixe). Choisissez un environnement d'exécution et respectez son format.",
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: "OCR de documents pour les fichiers en chinois, japonais et multilingues",
        content: [
          "**Qwen2-VL extrait le texte des documents en chinois, japonais, coréen et multilingues avec plus de précision que tout autre modèle de vision local.** Ses données d'entraînement comprenaient de vastes corpus de documents multilingues, et sa résolution native de 4096×4096 lit les petits caractères CJK que LLaVA 1.6 et Llama 3.2 Vision réduisent et manquent.",
          "Le schéma le plus fiable est une instruction d'extraction précise. Demandez de la structure — « conserve la mise en page du tableau », « renvoie chaque champ sous la forme key: value » — plutôt qu'un vague « lis ceci ». Qwen2-VL suit fidèlement les instructions de mise en forme, ce qui rend la sortie exploitable sans post-traitement.",
        ],
        items: [
          "**Extraction de texte brut** : « Extrais chaque ligne de texte de cette image. Conserve les sauts de ligne et l'ordre de lecture. »",
          "**Champs structurés** : « Ceci est une facture japonaise. Renvoie le fournisseur, la date, le sous-total, la taxe et le total sous forme de paires key: value. »",
          "**Extraction de tableau** : « Extrais ce tableau au format CSV. Considère la première ligne comme l'en-tête. »",
          "**Extraire et traduire en une passe** : « Extrais le texte chinois de cette image, puis traduis-le en anglais. Affiche les deux. »",
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen2-vl:7b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Example output:
# vendor: Sample Trading Co., Ltd.
# date: 2026-04-30
# subtotal: 84,000 JPY
# tax: 8,400 JPY
# total: 92,400 JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: "Vérifiez toujours les nombres extraits par rapport au document source. Les modèles de vision locaux — Qwen2-VL compris — peuvent mal lire un chiffre sur un scan de mauvaise qualité. Traitez la sortie d'OCR comme un brouillon à confirmer, pas comme une valeur définitive, en particulier pour les factures et les documents financiers." },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: "Pour extraire du texte d'un document CJK avec Qwen2-VL, envoyez l'image à 150 DPI ou plus avec une instruction précise qui demande de la structure, par exemple « renvoie chaque champ sous la forme key: value »." },
          { type: 'plain-terms', text: "L'OCR consiste à transformer une image de texte en texte modifiable. Qwen2-VL regarde une page scannée et retranscrit ce qu'il voit — et il gère les caractères chinois et japonais aussi bien que l'anglais." },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: "Questions-réponses sur image, analyse de captures d'écran et lecture de graphiques",
        content: [
          "Au-delà de l'OCR, Qwen2-VL assure la compréhension générale d'images — description de photos, réponse à des questions sur des captures d'écran et lecture de graphiques. Il est précis sur des entrées nettes et plus faible sur les scènes encombrées ou ambiguës.",
        ],
        items: [
          "**Q&R sur image** : posez des questions ouvertes sur une photo — « Qu'y a-t-il sur cette image ? », « Combien de personnes portent du rouge ? ». Qwen2-VL 7B est précis sur les photos nettes, plus faible sur les scènes encombrées ou ambiguës.",
          "**Analyse de captures d'écran et d'interfaces** : Qwen2-VL lit les captures d'interface, les boîtes de dialogue d'erreur et les états d'application. Pour les captures de code denses en particulier, InternVL 2.5 est davantage entraîné sur ces données — utilisez-le si votre charge de travail principale concerne les interfaces et le code.",
          "**Lecture de graphiques** : Qwen2-VL décrit bien la structure et les tendances d'un graphique, mais les valeurs numériques précises tirées de graphiques sont peu fiables sur tous les modèles de vision locaux. Vérifiez les chiffres exacts par rapport aux données sous-jacentes.",
          "**Images de vidéo** : Qwen2-VL accepte plusieurs images comme séquence — échantillonnez environ une image par seconde et envoyez-en jusqu'à 8 pour résumer un court extrait.",
          "**Comparaison multi-images** : envoyez jusqu'à 8 images en une requête pour comparer des versions, repérer des différences ou décrire un lot.",
        ],
        callouts: [
          { type: 'tip', text: "Utilisez Qwen2-VL pour l'OCR, les documents multilingues et les questions-réponses générales sur image. Passez à InternVL 2.5 lorsque votre charge de travail principale concerne les captures de code ou d'interface, ou à Moondream 2 si vous disposez de moins de 4 GB de VRAM." },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: "Qwen2-VL vs LLaVA vs Llama 3.2 Vision",
        content: [
          "**Pour l'OCR multilingue, Qwen2-VL surpasse LLaVA 1.6 et égale ou dépasse Llama 3.2 Vision 11B avec moins de VRAM.** Pour des questions-réponses sur photos en anglais uniquement, Llama 3.2 Vision 11B est un choix tout aussi solide. LLaVA 1.6 reste le modèle le mieux documenté si vous avez besoin de ressources communautaires pour le dépannage.",
        ],
        rows: [
          { 'Modèle': 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Excellent', 'Résolution max.': '4096×4096', 'Recommandé pour': "OCR multilingue, scans haute résolution" },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Bon', 'Résolution max.': '1120×1120', 'Recommandé pour': "Q&R sur photos en anglais, documents généraux" },
          { 'Modèle': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Correct', 'Résolution max.': '672×672', 'Recommandé pour': "Q&R générales, support communautaire" },
          { 'Modèle': 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Excellent', 'Résolution max.': '1792×1792', 'Recommandé pour': "OCR de documents (axé anglais)" },
          { 'Modèle': 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Bon', 'Résolution max.': 'Élevée', 'Recommandé pour': "Captures de code et d'interface" },
        ],
        columns: ['Modèle', 'VRAM (Q4)', 'OCR / CJK', 'Résolution max.', 'Recommandé pour'],
        tableFormat: true,
        note: "Les cinq fonctionnent via Ollama (InternVL 2.5 via des builds communautaires). Pour le panorama complet des modèles de vision locaux — y compris Moondream 2 et un benchmark d'extraction de factures — consultez le [comparatif des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026). En cas de doute, commencez par Qwen2-VL 7B : il couvre l'OCR, les documents et les questions-réponses générales avec 6 GB de VRAM.",
      },
      promptquorum: {
        id: 'promptquorum',
        title: "Connecter Qwen2-VL en local à PromptQuorum",
        content: [
          "PromptQuorum répartit les requêtes entre plusieurs modèles. Pour utiliser Qwen2-VL en local comme cible de répartition pour la vision, pointez le point de terminaison LLM local de PromptQuorum vers votre serveur Ollama. Le traitement des images reste alors sur votre matériel, tandis que les modèles cloud restent disponibles pour les tâches textuelles.",
          "Il s'agit du point de terminaison Ollama (compatible OpenAI), distinct de la configuration de l'API Anthropic utilisée pour Claude. Les deux peuvent être actifs simultanément, PromptQuorum répartissant selon le type de tâche et la sensibilité des données.",
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen2-VL via Ollama
# Set in your .env or the PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_VISION_MODEL=qwen2-vl:7b

# Example routing rules:
# - task_type: ocr / image  -> qwen2-vl:7b        (local Ollama, no cloud upload)
# - task_type: text         -> claude-sonnet-4-6  (Anthropic API, separate config)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: "Connectez PromptQuorum à Qwen2-VL en local en réglant OLLAMA_BASE_URL sur http://localhost:11434/v1 et en pointant le modèle de vision local vers qwen2-vl:7b." },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: "Dépannage de Qwen2-VL",
        items: [
          "**« unknown model » ou le téléchargement échoue** : utilisez un tag de taille explicite — `ollama pull qwen2-vl:7b`, pas `qwen2-vl`. Exécutez `ollama list` pour confirmer le nom installé.",
          "**L'image est ignorée et le modèle répond comme si aucune image n'avait été envoyée** : vérifiez que le chemin du fichier est correct et lisible. Dans l'API Ollama, le tableau `images` doit contenir du base64 brut *sans* le préfixe `data:` — le préfixe `data:` appartient uniquement au format LM Studio et OpenAI.",
          "**Caractères CJK déformés ou manquants** : le scan est de trop faible résolution. Re-scannez à 150–300 DPI. Qwen2-VL lit jusqu'à 4096×4096, donc une résolution d'entrée plus élevée améliore directement la précision du chinois et du japonais.",
          "**Mémoire CUDA insuffisante (out of memory)** : le modèle ne tient pas dans votre VRAM. Passez à Qwen2-VL 2B (~3 GB) ou exécutez-le sur Apple Silicon, qui partage la mémoire unifiée entre le CPU et le GPU.",
          "**Première réponse lente, puis rapide** : c'est normal. L'encodeur de vision traite l'image entière au premier token ; le texte se génère ensuite à une vitesse quasi normale.",
          "**Nombres erronés extraits d'une facture ou d'un graphique** : les modèles de vision locaux lisent mal les chiffres sur des entrées bruitées. Améliorez la qualité du scan et vérifiez toujours la sortie numérique par rapport à la source.",
          "**Un PDF ne se charge pas** : aucun modèle de vision local n'accepte le PDF directement. Convertissez d'abord les pages en PNG ou JPEG (avec pdf2image ou pypdfium2), puis envoyez chaque page comme image distincte.",
          "**LM Studio affiche « failed to load model »** : soit une VRAM insuffisante, soit vous avez téléchargé un GGUF sans prise en charge de la vision. Vérifiez que la fiche du modèle indique la prise en charge de la vision et choisissez la variante Q4_K_M.",
        ],
        callouts: [
          { type: 'tip', text: "Exécutez `ollama ps` pour voir quels modèles sont chargés en VRAM et la mémoire utilisée par chacun. Utilisez `ollama stop qwen2-vl:7b` pour décharger le modèle avant de passer au 72B." },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: "Pour aller plus loin",
        items: [
          "[Comment exécuter Qwen 3 en local](/fr/local-llms/run-qwen-locally-guide-2026) — le pendant pour les modèles de texte : installation de Qwen 3 avec Ollama et LM Studio.",
          "[Comparatif des modèles de vision locaux : LLaVA, Llama 3.2 Vision, MiniCPM-V](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — le panorama complet de chaque modèle de vision local, avec benchmarks.",
          "[LLM multimodaux locaux : vision, audio et texte](/fr/local-llms/multimodal-local-llms) — vue d'ensemble plus large de l'exécution locale de modèles multimodaux.",
          "[Qwen vs Llama vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) — comment les modèles de texte Qwen se comparent aux alternatives.",
          "[Guide du matériel pour LLM locaux 2026](/fr/local-llms/local-llm-hardware-guide-2026) — besoins en VRAM et en GPU pour l'inférence locale.",
          "[Parcourir tous les guides sur les LLM locaux](/fr/local-llms)",
        ],
      },
      faq: {
        id: 'faq',
        title: "FAQ",
        faqs: [
          { q: "Quelle est la configuration matérielle minimale pour exécuter Qwen2-VL en local ?", a: "Qwen2-VL 7B en quantification Q4_K_M nécessite 8 GB de VRAM (RTX 4060, RTX 3060 12 GB ou RTX 2080). Le modèle Qwen2-VL 2B, plus petit, fonctionne avec 4 GB. Le modèle 72B nécessite ~48 GB — Apple Silicon avec 64 GB+ de mémoire unifiée ou deux GPU de 24 GB. Apple Silicon avec 16 GB+ de mémoire unifiée exécute le modèle 7B sans difficulté." },
          { q: "Qwen2-VL est-il meilleur que LLaVA pour l'OCR ?", a: "Oui, surtout pour le texte non anglophone. Qwen2-VL égale MiniCPM-V 2.6 et surpasse LLaVA 1.6 et Llama 3.2 Vision 11B pour l'OCR du chinois, du japonais et du coréen. Sa résolution native de 4096×4096 lit les scans haute résolution sans réduction, alors que LLaVA 1.6 plafonne à 672×672. LLaVA conserve toutefois la plus grande communauté et le plus de tutoriels." },
          { q: "Qwen2-VL peut-il lire directement des PDF ?", a: "Non. Aucun modèle de vision local n'accepte d'entrée PDF directe. Convertissez d'abord chaque page PDF en image PNG ou JPEG (avec pdf2image ou pypdfium2), puis envoyez chaque page comme requête d'image distincte. Pour un PDF de 10 pages, vous envoyez 10 requêtes d'image et combinez les résultats." },
          { q: "Comment envoyer une image à Qwen2-VL via Ollama ?", a: "De deux façons. En mode interactif (`ollama run qwen2-vl:7b`), indiquez le chemin du fichier image dans votre requête — Ollama le détecte et charge l'image. Via l'API, envoyez une requête POST à /api/generate avec un tableau `images` encodé en base64. La chaîne base64 ne doit pas inclure le préfixe `data:`." },
          { q: "Qwen2-VL fonctionne-t-il entièrement hors ligne ?", a: "Oui. Après le téléchargement unique du modèle, Qwen2-VL fonctionne entièrement sur votre machine — sans clé API ni compte cloud. Aucune image n'est envoyée où que ce soit, ce qui maintient le traitement des documents au sein de votre infrastructure. Voir le [guide d'installation locale de Qwen pour le RGPD](/fr/local-llms/qwen-local-gdpr-setup-guide-2026) pour les implications en matière de conformité." },
          { q: "Combien d'images Qwen2-VL peut-il traiter à la fois ?", a: "Jusqu'à 8 images par requête — la plus grande capacité multi-images parmi les modèles de vision locaux. Cela le rend bien adapté à la comparaison de versions de documents, au repérage de différences ou au résumé d'une courte vidéo échantillonnée à une image par seconde." },
          { q: "Qwen2-VL ou Llama 3.2 Vision — lequel choisir ?", a: "Choisissez Qwen2-VL pour les documents en chinois, japonais ou coréen, les scans haute résolution ou les petites polices — et parce que le modèle 7B tient dans 6 GB de VRAM contre 8 GB pour Llama 3.2 Vision 11B. Choisissez Llama 3.2 Vision 11B pour des questions-réponses sur photos en anglais uniquement, où les deux sont comparables." },
          { q: "Pourquoi les caractères sont-ils déformés dans ma sortie d'OCR ?", a: "Presque toujours à cause d'un scan de faible résolution. Qwen2-VL lit nativement jusqu'à 4096×4096, donc re-scanner le document à 150–300 DPI corrige généralement les caractères déformés ou manquants. Une entrée de mauvaise qualité est la première cause d'erreurs d'OCR sur tous les modèles de vision locaux." },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: 'Qwen2-VLをローカル実行 2026：ドキュメントOCRと画像認識ガイド',
    seoTitle: 'Qwen2-VLローカル実行2026：OCR・画像認識セットアップ',
    intro: 'Qwen2-VLはAlibabaのオープンなvision-languageモデルで、7Bバリアントは約6 GBのVRAMでOllamaまたはLM Studioを使ってローカルで動作します。ドキュメント、スクリーンショット、グラフ、写真を読み取り、中国語・日本語・韓国語のOCRでは他のどのローカルvisionモデルよりも優れています。このガイドでは、モデル選択、ハードウェア、OllamaとLM Studioのセットアップ、多言語ドキュメントの抽出、そしてQwen2-VLとLLaVA・Llama 3.2 Visionの比較を解説します。',
    metaDescription: '約6 GBのVRAMでOllamaを使いQwen2-VLをローカル実行：セットアップ手順、中国語・日本語ドキュメントのOCR、画像Q&A、LLaVAとの比較を解説します。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    audience: 'クラウドAPIにデータを送らずに、ドキュメントOCRと画像理解をオフラインで行いたい開発者やアナリスト — 特に中国語・日本語・多言語混在のファイルを扱う方',
    primaryTerm: 'run Qwen2-VL locally',
    targetKeywords: [
      'Qwen2-VL ローカル実行 2026',
      'Qwen2-VL Ollama セットアップ',
      'Qwen2-VL ドキュメントOCR',
      'ローカル 多言語 visionモデル',
      'Qwen2-VL Llama 3.2 Vision 比較',
      '中国語 日本語 OCR ローカルLLM',
    ],
    current_models_mentioned: [
      'Qwen2-VL 2B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'LLaVA 1.6 7B',
      'Llama 3.2 Vision 11B',
      'MiniCPM-V 2.6',
      'InternVL 2.5 8B',
      'Moondream 2',
    ],
    current_hardware_mentioned: [
      '4 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '48 GB VRAM',
      'RTX 4060',
      'RTX 3060 12 GB',
      'Apple Silicon (unified memory)',
    ],
    ctaText: 'PromptQuorumの順番待ちリストに登録 →',
    leadAnswerBlock: '**8 GBのVRAMを搭載したマシンで `ollama pull qwen2-vl:7b` を実行すれば、中国語・日本語・多言語混在のドキュメントをローカルで読み取れます。** Qwen2-VLは多言語OCRで最も優れたオープンなvisionモデルで、すべての画像がご自身のマシンで処理され、クラウドへのアップロードはありません。',
    quickAnswerTop: {
      ja: {
        question: '2026年にQwen2-VLをローカルで実行するには？',
        answer: 'Ollamaをインストールし、`ollama pull qwen2-vl:7b` を実行してから `ollama run qwen2-vl:7b` を実行し、プロンプト内に画像ファイルのパスを入力します。GUIの場合はLM Studioを使用します：「Qwen2-VL 7B」を検索し、Q4_K_M GGUFビルドをダウンロードして、画像アイコンから画像を添付します。Qwen2-VL 7Bは約6 GBのVRAMが必要で、ドキュメント・スクリーンショット・グラフを完全オフラインで読み取ります。',
        bullets: [
          '最小ハードウェア：8 GB VRAM（RTX 4060、RTX 3060 12 GB）または16 GBユニファイドメモリのApple Silicon',
          'モデル取得：ollama pull qwen2-vl:7b（Qwen2-VL 7B Q4_K_M 約6 GBをダウンロード）',
          '画像の添付：プロンプトにファイルパスを入力（CLI）、またはbase64のimages配列を送信（API）',
          '得意分野：中国語・日本語・韓国語ドキュメントのOCR — LLaVAやLlama 3.2 Visionを上回る',
          'サイズ：2B（約3 GB VRAM）、7B（約6 GB、推奨）、72B（約48 GB）',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'なぜQwen2-VLが多言語OCRで優れているのか', anchor: '#why-qwen-vl' },
      { label: 'Qwen2-VLのモデルサイズを選ぶ', anchor: '#choose-model' },
      { label: 'ハードウェア要件', anchor: '#hardware' },
      { label: 'Ollamaでのセットアップ', anchor: '#ollama-setup' },
      { label: 'LM Studioでのセットアップ', anchor: '#lm-studio-setup' },
      { label: 'CJKファイルのドキュメントOCR', anchor: '#ocr-use-case' },
      { label: '画像Q&A、スクリーンショット、グラフ', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL対LLaVA対Llama 3.2 Vision', anchor: '#vs-other-models' },
      { label: 'PromptQuorumとの連携', anchor: '#promptquorum' },
      { label: 'トラブルシューティング', anchor: '#troubleshooting' },
      { label: '関連記事', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL 7Bは約6 GBのVRAM（Q4）でローカル動作**します。Ollama経由で `ollama pull qwen2-vl:7b` というコマンド1つで済み、モデル変換は不要です。',
          '**多言語OCRに最適なローカルモデル**：Qwen2-VLはMiniCPM-V 2.6と並び、中国語・日本語・韓国語のテキストでLLaVA 1.6とLlama 3.2 Vision 11Bを上回ります。',
          '**ネイティブ解像度は最大4096×4096**。LLaVA 1.6（672×672）やLlama 3.2 Vision（1120×1120）と異なり、高解像度スキャンを縮小せずに読み取ります。',
          '**3つのサイズ**：2B（約3 GB VRAM、高速・基本的）、7B（約6 GB、ほとんどのユーザーに推奨）、72B（約48 GB、オープンソースのベンチマークで首位）。',
          '**1リクエストあたり最大8枚の画像**に対応 — ローカルvisionモデルの中で最も高い複数画像対応数です。',
          '**PDFの直接入力は不可**：PDFのページをまずPNGまたはJPEGに変換し、各ページを別々の画像として送信します。',
          '**ダウンロード後は100%オフライン**：APIキー不要、クラウドへのアップロードなし — すべてのドキュメントがご自身のマシンに留まります。',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'なぜQwen2-VLは多言語OCRでローカルvisionモデルの中で優れているのか',
        content: [
          '**Qwen2-VLは多言語ドキュメントOCRに最も優れたローカルvisionモデルです。中国語・日本語・韓国語・英語のテキスト読み取りにおいて、コンシューマー向けハードウェアで動作する他のどのモデルと同等か、それ以上です。** Alibabaはこれを大規模な多言語ドキュメントコーパスで学習させており、そのため英語以外のテキスト抽出でLLaVA 1.6やLlama 3.2 Vision 11Bを上回ります。',
          'Qwen2-VLは最大4096×4096ピクセルの動的な入力解像度に対応します。LLaVA 1.6は672×672、Llama 3.2 Visionは1120×1120が上限のため、どちらも高解像度スキャンを読み取り前に縮小します。Qwen2-VLは300 DPIのA4スキャンをネイティブ解像度で読み取ります — これが、密度の高いドキュメントや小さなCJK文字でOCR精度が高い主な理由です。',
          'Qwen2-VLをローカルで動かす場合、ハードウェア費用を除けば1画像あたりのコストは0円です。クラウドのVision APIは1画像あたり約2～5円ほど課金されます。月10,000画像であれば約15,000～45,000円の節約になり、しかもドキュメントがマシンの外に出ることは一切ありません。',
          'ドキュメントにCJKテキスト、小さなフォント、または高解像度スキャンが含まれる場合はQwen2-VLを使用してください。作業が英語のみの写真Q&Aであれば、Llama 3.2 Vision 11Bも同等に良い選択肢です。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VLは中国語・日本語・韓国語のドキュメントOCRに最も精度の高いローカルvisionモデルで、約6 GBのVRAMでOllama経由で動作します。' },
          { type: 'plain-terms', text: 'vision-languageモデルは画像を生成するのではなく読み取ります。Qwen2-VLに写真やスキャンしたページを渡すと、テキストが返ってきます — 説明、回答、または抽出された内容です。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen2-VLのモデルサイズを選ぶ',
        content: [
          'Qwen2-VLには3つのサイズがあります。VRAMと必要な精度に応じて選んでください。すべてのサイズは [Hugging Face (Qwen)](https://huggingface.co/Qwen) およびOllamaのモデルライブラリで明示的なタグ付きで利用できます。',
        ],
        rows: [
          { 'モデル': 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Ollamaタグ': 'qwen2-vl:2b', '適した用途': '高速なキャプション、簡単なOCR、VRAMの少ないノートPC' },
          { 'モデル': 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Ollamaタグ': 'qwen2-vl:7b', '適した用途': '推奨 — ドキュメントOCR、画像Q&A、グラフ' },
          { 'モデル': 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Ollamaタグ': 'qwen2-vl:72b', '適した用途': '最高品質、64 GB以上のApple SiliconまたはマルチGPU' },
        ],
        columns: ['モデル', 'VRAM (Q4)', 'Ollamaタグ', '適した用途'],
        tableFormat: true,
        note: 'Q4_K_Mが推奨される量子化です — 品質とサイズのバランスが最も優れています。ほとんどのユーザーはQwen2-VL 7Bから始めるべきです：8 GBのGPUに収まり、このガイドのすべてのユースケースに対応します。VRAMが6 GB未満の場合のみ2Bモデルに切り替えてください。Q4が品質に与える影響については [LLMの量子化を解説](/ja/local-llms/llm-quantization-explained) を参照してください。',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen2-VLのハードウェア要件',
        items: [
          '**最小（Qwen2-VL 7B Q4）**：8 GB VRAMのGPU — NVIDIA RTX 4060、RTX 3060 12 GB、またはRTX 2080。',
          '**VRAMが少ない場合の選択肢（Qwen2-VL 2B Q4）**：4 GB VRAM — ほとんどのノートPCのGPUや内蔵Apple Siliconで動作します。',
          '**最高品質（Qwen2-VL 72B Q4）**：約48 GB — 64 GB以上のユニファイドメモリを備えたApple Silicon、または24 GBのGPU 2基。',
          '**Apple Silicon**：16 GB以上のユニファイドメモリを備えたM-seriesチップは7Bモデルを問題なく実行します。72Bモデルには64 GB以上が必要です。',
          '**システムRAM**：GPU推論と並行して最低16 GB。完全な開発環境を開いた状態では32 GBを推奨します。',
          '**ストレージ**：Qwen2-VL 7B Q4（GGUF）に約6 GB、72Bに約30 GBの空き容量。',
        ],
        callouts: [
          { type: 'note', text: 'visionモデルは、同じパラメータ数のテキスト専用モデルより約30～60%遅く動作します。visionエンコーダは最初のトークンで画像全体を処理し、その後テキストはほぼ通常の速度で生成されます。VRAMはエンコーダと言語モデルの両方のために確保してください。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Qwen2-VLをOllamaでセットアップする',
        content: [
          'Ollamaは、Qwen2-VLをローカルで実行する最も速い方法です。モデルのダウンロード、量子化の管理を行い、localhost:11434でAPIを公開します。[ollama.com](https://ollama.com/download) からインストールしてください。初めての方は [Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama) から始めてください。',
        ],
        numberedItems: [
          { title: 'Ollamaをインストールする', whyItMatters: 'Ollamaはモデルのダウンロード、GGUF形式、ローカルAPIを処理します。macOS、Linux、Windowsで利用できます。' },
          { title: '明示的なサイズタグでQwen2-VLを取得する', whyItMatters: 'qwen2-vl:7bを使用してください。タグなしのqwen2-vlは別のサイズに解決されることがあります — このガイドが対象とするモデルを取得するため、必ず2b、7b、72bを指定してください。' },
          { title: 'モデルを実行して画像を添付する', whyItMatters: 'インタラクティブモードでは、プロンプト内に画像ファイルのパスを入力します。Ollamaがパスを検出し、画像をvisionエンコーダに読み込みます。' },
          { title: 'API経由で画像を送信する', whyItMatters: '/api/generateエンドポイントはbase64エンコードされたimages配列を受け付けます。アプリケーション — そしてPromptQuorum — はこの方法でプログラムから画像を送信します。' },
          { title: '多言語OCRを検証する', whyItMatters: '中国語または日本語のドキュメントスキャンを送信し、抽出されたテキストが一致するか確認します。これにより、その上に構築する前に、visionエンコーダとトークナイザがCJK文字を正しく処理することを確認できます。' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen2-VL 7B (explicit size tag)
ollama pull qwen2-vl:7b
# Downloads Qwen2-VL 7B Q4_K_M (~6 GB)

# Step 3 — Run and attach an image (interactive)
ollama run qwen2-vl:7b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen2-vl:7b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen2-vl:7b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'ドキュメント画像は150 DPI以上で送信してください。Qwen2-VLはネイティブで最大4096×4096を読み取るため、高解像度スキャンは精度を直接向上させます。テキストプロンプトとは異なり、画像品質はOCR結果を左右する最大の要因です — ぼやけたスキャンは、モデルがどれだけ優れていても誤った文字を生成します。' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Qwen2-VLをLM Studioでセットアップする',
        content: [
          'LM Studioは、CLIコマンドなしでGUIからQwen2-VLを実行します。Windowsユーザーや、GUIを好む方に推奨される方法です。[lmstudio.ai](https://lmstudio.ai) からダウンロードするか、[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio) を参照してください。',
        ],
        numberedItems: [
          { title: 'LM Studioをダウンロードしてインストールする', whyItMatters: 'ローカルモデル推論のための無料・クロスプラットフォームのGUIです。ターミナルは不要です。' },
          { title: 'モデルブラウザでQwen2-VLを検索する', whyItMatters: '「Qwen2-VL 7B」を検索し、Q4_K_M GGUFビルドを選択します。LM Studioはvision対応モデルを画像アイコンで示します。' },
          { title: 'モデルを読み込んで画像を添付する', whyItMatters: '入力欄の画像アイコンをクリックして写真やスキャンをアップロードします。LM Studioがそれをvisionエンコーダに渡します。' },
          { title: 'ローカルサーバーを起動する', whyItMatters: '「Start Server」ボタンはlocalhost:1234でOpenAI互換APIを公開します。visionリクエストは標準のimage_urlコンテンツ形式を使用します。' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "qwen2-vl-7b",
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Extract all text from this document." },
        {
          "type": "image_url",
          "image_url": { "url": "data:image/png;base64,<base64-encoded-image>" }
        }
      ]
    }
  ]
}`,
        codeLanguage: 'json',
        note: 'LM StudioとOllamaは異なる画像形式を使用します：LM StudioはOpenAIのimage_urlコンテンツスキーマ（data:プレフィックス付き）に従い、Ollamaはトップレベルのimages配列で生のbase64（プレフィックスなし）を使用します。1つのランタイムを選び、その形式に合わせてください。',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: '中国語・日本語・多言語混在ファイルのドキュメントOCR',
        content: [
          '**Qwen2-VLは、中国語・日本語・韓国語・多言語混在のドキュメントから、他のどのローカルvisionモデルよりも正確にテキストを抽出します。** 学習データには大規模な多言語ドキュメントコーパスが含まれ、ネイティブ解像度の4096×4096により、LLaVA 1.6やLlama 3.2 Visionが縮小して見落とす小さなCJK文字も読み取ります。',
          '最も信頼できるパターンは、具体的な抽出指示です。曖昧な「これを読んで」ではなく、構造を求めてください — 「表のレイアウトを保持して」「各フィールドをkey: valueとして返して」など。Qwen2-VLは書式の指示に忠実に従うため、後処理なしで使える出力が得られます。',
        ],
        items: [
          '**プレーンテキストの抽出**：「この画像からすべてのテキスト行を抽出してください。改行と読み順を保持してください。」',
          '**構造化フィールド**：「これは日本語の請求書です。取引先、日付、小計、税額、合計をkey: valueのペアで返してください。」',
          '**表の抽出**：「この表をCSVとして抽出してください。1行目をヘッダーとして扱ってください。」',
          '**抽出と翻訳を1回で**：「この画像から中国語のテキストを抽出し、それを英語に翻訳してください。両方を表示してください。」',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen2-vl:7b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Example output:
# vendor: Sample Trading Co., Ltd.
# date: 2026-04-30
# subtotal: 84,000 JPY
# tax: 8,400 JPY
# total: 92,400 JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: '抽出された数値は必ず元のドキュメントと照合してください。ローカルvisionモデル — Qwen2-VLを含む — は、品質の低いスキャンで数字を読み間違えることがあります。特に請求書や財務ドキュメントでは、OCRの出力を確定値ではなく、確認すべき下書きとして扱ってください。' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VLでCJKドキュメントからテキストを抽出するには、画像を150 DPI以上で送信し、「各フィールドをkey: valueとして返して」のように構造を求める具体的なプロンプトを使用します。' },
          { type: 'plain-terms', text: 'OCRとは、テキストの画像を編集可能なテキストに変換することです。Qwen2-VLはスキャンしたページを見て、見たものを書き出します — そして中国語や日本語の文字も英語と同じように扱えます。' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: '画像Q&A、スクリーンショット分析、グラフの読み取り',
        content: [
          'OCR以外にも、Qwen2-VLは一般的な画像理解を扱います — 写真の説明、スクリーンショットに関する質問への回答、グラフの読み取りです。鮮明な入力には正確で、雑然とした、または曖昧なシーンには弱くなります。',
        ],
        items: [
          '**画像Q&A**：写真について自由な質問ができます — 「この画像には何が写っていますか？」「赤い服を着ている人は何人ですか？」。Qwen2-VL 7Bは鮮明な写真には正確で、雑然とした、または曖昧なシーンには弱くなります。',
          '**スクリーンショット・UI分析**：Qwen2-VLはUIのスクリーンショット、エラーダイアログ、アプリの状態を読み取ります。特に密度の高いコードのスクリーンショットについては、InternVL 2.5がそのデータでより重点的に学習されています — UIやコードが主な用途であればそちらを使用してください。',
          '**グラフ・図の読み取り**：Qwen2-VLはグラフの構造や傾向をうまく説明しますが、グラフから取り出した正確な数値はどのローカルvisionモデルでも信頼できません。正確な数値は元データと照合してください。',
          '**動画フレーム**：Qwen2-VLは複数のフレームをシーケンスとして受け付けます — 1秒あたり約1フレームを抽出し、最大8枚を送信して短いクリップを要約できます。',
          '**複数画像の比較**：1リクエストで最大8枚の画像を送信し、バージョンの比較、相違点の発見、セットの一括説明ができます。',
        ],
        callouts: [
          { type: 'tip', text: 'OCR、多言語ドキュメント、一般的な画像Q&AにはQwen2-VLを使用してください。コードやUIのスクリーンショットが主な用途であればInternVL 2.5に、VRAMが4 GB未満であればMoondream 2に切り替えてください。' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL対LLaVA対Llama 3.2 Vision',
        content: [
          '**多言語OCRでは、Qwen2-VLはLLaVA 1.6を上回り、より少ないVRAMでLlama 3.2 Vision 11Bと同等か、それ以上です。** 英語のみの写真Q&Aであれば、Llama 3.2 Vision 11Bも同等に強力な選択肢です。トラブルシューティングのためのコミュニティリソースが必要な場合、LLaVA 1.6は依然として最も文書化された選択肢です。',
        ],
        rows: [
          { 'モデル': 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '非常に優秀', '最大解像度': '4096×4096', '適した用途': '多言語OCR、高解像度スキャン' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': '良好', '最大解像度': '1120×1120', '適した用途': '英語の写真Q&A、一般的なドキュメント' },
          { 'モデル': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'まずまず', '最大解像度': '672×672', '適した用途': '一般的なQ&A、コミュニティサポート' },
          { 'モデル': 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '非常に優秀', '最大解像度': '1792×1792', '適した用途': 'ドキュメントOCR（英語寄り）' },
          { 'モデル': 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': '良好', '最大解像度': '高い', '適した用途': 'コード・UIのスクリーンショット' },
        ],
        columns: ['モデル', 'VRAM (Q4)', 'OCR / CJK', '最大解像度', '適した用途'],
        tableFormat: true,
        note: '5つすべてがOllama経由で動作します（InternVL 2.5はコミュニティビルド経由）。Moondream 2や請求書抽出のベンチマークを含む、ローカルvisionモデルの完全な総まとめは [ローカルvisionモデルの比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026) を参照してください。迷ったらQwen2-VL 7Bから始めてください：6 GBのVRAMでOCR、ドキュメント、一般的なQ&Aをカバーします。',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'ローカルのQwen2-VLをPromptQuorumに接続する',
        content: [
          'PromptQuorumは複数のモデルにプロンプトを振り分けます。ローカルのQwen2-VLをvisionのディスパッチ先として使用するには、PromptQuorumのローカルLLMエンドポイントをOllamaサーバーに向けます。これにより、画像処理はご自身のハードウェアに留まり、クラウドモデルはテキストタスク用に引き続き利用できます。',
          'これはOllamaエンドポイント（OpenAI互換）で、Claudeに使用するAnthropic APIの設定とは別です。両方を同時に有効にでき、PromptQuorumはタスクの種類とデータの機密性に応じて振り分けます。',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen2-VL via Ollama
# Set in your .env or the PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_VISION_MODEL=qwen2-vl:7b

# Example routing rules:
# - task_type: ocr / image  -> qwen2-vl:7b        (local Ollama, no cloud upload)
# - task_type: text         -> claude-sonnet-4-6  (Anthropic API, separate config)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorumをローカルのQwen2-VLに接続するには、OLLAMA_BASE_URLをhttp://localhost:11434/v1に設定し、ローカルvisionモデルをqwen2-vl:7bに向けます。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Qwen2-VLのトラブルシューティング',
        items: [
          '**「unknown model」またはpullが失敗する**：明示的なサイズタグを使用してください — `qwen2-vl`ではなく `ollama pull qwen2-vl:7b`。`ollama list` を実行してインストール済みの名前を確認してください。',
          '**画像が無視され、画像が送信されていないかのようにモデルが応答する**：ファイルパスが正しく、読み取り可能か確認してください。Ollama APIでは、`images`配列に `data:` プレフィックス *なし* の生のbase64を入れる必要があります — `data:` プレフィックスはLM StudioとOpenAIの形式のみです。',
          '**CJK文字が文字化けする、または欠落する**：スキャンの解像度が低すぎます。150～300 DPIで再スキャンしてください。Qwen2-VLは最大4096×4096を読み取るため、入力解像度を上げると中国語と日本語の精度が直接向上します。',
          '**CUDAのメモリ不足（out of memory）**：モデルがVRAMに収まりません。Qwen2-VL 2B（約3 GB）に切り替えるか、CPUとGPUでユニファイドメモリを共有するApple Siliconで実行してください。',
          '**最初の応答が遅く、その後速くなる**：これは正常です。visionエンコーダは最初のトークンで画像全体を処理し、その後テキストはほぼ通常の速度で生成されます。',
          '**請求書やグラフから誤った数値が抽出される**：ローカルvisionモデルは、ノイズの多い入力で数字を読み間違えます。スキャン品質を上げ、数値の出力は必ず元データと照合してください。',
          '**PDFが読み込めない**：PDFを直接受け付けるローカルvisionモデルはありません。まずページをPNGまたはJPEGに変換し（pdf2imageやpypdfium2など）、各ページを別々の画像として送信してください。',
          '**LM Studioが「failed to load model」と表示する**：VRAM不足か、vision非対応のGGUFをダウンロードしたかのいずれかです。モデルカードにvision対応の記載があるか確認し、Q4_K_Mビルドを選択してください。',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps` を実行すると、どのモデルがVRAMに読み込まれ、それぞれがどれだけメモリを使用しているか確認できます。72Bモデルに切り替える前に `ollama stop qwen2-vl:7b` でモデルをアンロードしてください。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Qwen 3をローカルで実行する方法](/ja/local-llms/run-qwen-locally-guide-2026) — テキストモデル版の対応記事：Qwen 3をOllamaとLM Studioでセットアップする方法。',
          '[ローカルvisionモデルの比較：LLaVA、Llama 3.2 Vision、MiniCPM-V](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — 各ローカルvisionモデルの完全な総まとめ、ベンチマーク付き。',
          '[マルチモーダルなローカルLLM：vision、音声、テキスト](/ja/local-llms/multimodal-local-llms) — マルチモーダルモデルをローカルで実行する全体像。',
          '[Qwen対Llama対Mistral](/ja/local-llms/qwen-vs-llama-vs-mistral) — Qwenのテキストモデルが代替モデルとどう比較されるか。',
          '[ローカルLLMハードウェアガイド 2026](/ja/local-llms/local-llm-hardware-guide-2026) — ローカル推論のためのVRAMとGPUの要件。',
          '[すべてのローカルLLMガイドを見る](/ja/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Qwen2-VLをローカルで実行するための最小ハードウェアは？', a: 'Q4_K_M量子化のQwen2-VL 7Bには8 GBのVRAMが必要です（RTX 4060、RTX 3060 12 GB、またはRTX 2080）。より小さいQwen2-VL 2Bは4 GBで動作します。72Bモデルには約48 GBが必要です — 64 GB以上のユニファイドメモリを備えたApple Silicon、または24 GBのGPU 2基。16 GB以上のユニファイドメモリを備えたApple Siliconは7Bモデルを問題なく実行します。' },
          { q: 'Qwen2-VLはOCRでLLaVAより優れていますか？', a: 'はい、特に英語以外のテキストで優れています。Qwen2-VLはMiniCPM-V 2.6と並び、中国語・日本語・韓国語のOCRでLLaVA 1.6とLlama 3.2 Vision 11Bを上回ります。ネイティブ解像度の4096×4096により高解像度スキャンを縮小せずに読み取りますが、LLaVA 1.6は672×672が上限です。ただしLLaVAは依然として最大のコミュニティと最も多くのチュートリアルを持っています。' },
          { q: 'Qwen2-VLはPDFを直接読み取れますか？', a: 'いいえ。PDF入力を直接受け付けるローカルvisionモデルはありません。まず各PDFページをPNGまたはJPEG画像に変換し（pdf2imageやpypdfium2を使用）、各ページを別々の画像リクエストとして送信してください。10ページのPDFであれば、10回の画像リクエストを送信して結果を結合します。' },
          { q: 'Ollama経由でQwen2-VLに画像を送信するには？', a: '2つの方法があります。インタラクティブモード（`ollama run qwen2-vl:7b`）では、プロンプト内に画像ファイルのパスを入力すると — Ollamaがそれを検出して画像を読み込みます。API経由では、base64エンコードした `images` 配列を付けて /api/generate にPOSTします。base64文字列に `data:` プレフィックスを含めてはいけません。' },
          { q: 'Qwen2-VLは完全にオフラインで動作しますか？', a: 'はい。一度モデルをダウンロードすれば、Qwen2-VLは完全にご自身のマシンで動作します — APIキーもクラウドアカウントも不要です。画像はどこにもアップロードされず、ドキュメント処理がご自身のインフラ内に留まります。コンプライアンスへの影響については [Qwenのローカルでのデータ保護（GDPR）設定ガイド](/ja/local-llms/qwen-local-gdpr-setup-guide-2026) を参照してください。' },
          { q: 'Qwen2-VLは一度に何枚の画像を処理できますか？', a: '1リクエストあたり最大8枚です — ローカルvisionモデルの中で最も高い複数画像対応数です。そのため、ドキュメントのバージョン比較、相違点の発見、または1秒あたり1フレームでサンプリングした短い動画の要約に適しています。' },
          { q: 'Qwen2-VLとLlama 3.2 Vision — どちらを選ぶべきですか？', a: '中国語・日本語・韓国語のドキュメント、高解像度スキャン、小さなフォントにはQwen2-VLを選んでください — また、7BモデルはLlama 3.2 Vision 11Bの8 GBに対して6 GBのVRAMに収まります。英語のみの一般的な写真Q&Aには、両者が同等であるLlama 3.2 Vision 11Bを選んでください。' },
          { q: 'OCRの出力で文字が文字化けするのはなぜですか？', a: 'ほとんどの場合、解像度の低いスキャンが原因です。Qwen2-VLはネイティブで最大4096×4096を読み取るため、ドキュメントを150～300 DPIで再スキャンすれば、文字化けや欠落した文字はたいてい解消されます。品質の低い入力は、どのローカルvisionモデルでもOCRエラーの最大の原因です。' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: '本地运行 Qwen2-VL 2026：文档 OCR 与图像识别指南',
    seoTitle: '本地运行 Qwen2-VL 2026：OCR 与视觉设置指南',
    intro: 'Qwen2-VL 是阿里巴巴的开源视觉语言模型，其 7B 版本可通过 Ollama 或 LM Studio 在约 6 GB VRAM 下本地运行。它能读取文档、屏幕截图、图表和照片——在中文、日文和韩文 OCR 上领先于所有其他本地视觉模型。本指南涵盖模型选择、硬件、Ollama 与 LM Studio 的设置、多语言文档提取，以及 Qwen2-VL 与 LLaVA、Llama 3.2 Vision 的对比。',
    metaDescription: '通过 Ollama 在约 6 GB VRAM 下本地运行 Qwen2-VL：设置步骤、中文与日文文档 OCR、图像问答，以及与 LLaVA 的对比。',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '阅读约 11 分钟',
    educationalLevel: 'Intermediate',
    audience: '需要离线进行文档 OCR 和图像理解的开发者与分析师——尤其是处理中文、日文和多语言混合文件、且不希望将数据发送到云 API 的用户',
    primaryTerm: 'run Qwen2-VL locally',
    targetKeywords: [
      '本地运行 Qwen2-VL 2026',
      'Qwen2-VL Ollama 设置',
      'Qwen2-VL 文档 OCR',
      '本地多语言视觉模型',
      'Qwen2-VL 对比 Llama 3.2 Vision',
      '中文 日文 OCR 本地 LLM',
    ],
    current_models_mentioned: [
      'Qwen2-VL 2B',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'LLaVA 1.6 7B',
      'Llama 3.2 Vision 11B',
      'MiniCPM-V 2.6',
      'InternVL 2.5 8B',
      'Moondream 2',
    ],
    current_hardware_mentioned: [
      '4 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '48 GB VRAM',
      'RTX 4060',
      'RTX 3060 12 GB',
      'Apple Silicon (unified memory)',
    ],
    ctaText: '加入 PromptQuorum 等候名单 →',
    leadAnswerBlock: '**在任何配备 8 GB VRAM 的机器上运行 `ollama pull qwen2-vl:7b`，即可本地读取中文、日文和多语言混合文档。** Qwen2-VL 是多语言 OCR 最强的开源视觉模型——每张图像都在你的机器上处理，不会上传到云端。',
    quickAnswerTop: {
      zh: {
        question: '2026 年如何在本地运行 Qwen2-VL？',
        answer: '安装 Ollama，运行 `ollama pull qwen2-vl:7b`，然后运行 `ollama run qwen2-vl:7b` 并在提示中输入图像文件路径。如需图形界面，使用 LM Studio：搜索“Qwen2-VL 7B”，下载 Q4_K_M GGUF 版本，通过图像图标附加图像。Qwen2-VL 7B 需要约 6 GB VRAM，可完全离线读取文档、屏幕截图和图表。',
        bullets: [
          '最低硬件：8 GB VRAM（RTX 4060、RTX 3060 12 GB）或配备 16 GB 统一内存的 Apple Silicon',
          '拉取模型：ollama pull qwen2-vl:7b（下载 Qwen2-VL 7B Q4_K_M 约 6 GB）',
          '附加图像：在提示中输入文件路径（CLI），或发送 base64 的 images 数组（API）',
          '强项：中文、日文和韩文文档 OCR——优于 LLaVA 和 Llama 3.2 Vision',
          '尺寸：2B（约 3 GB VRAM）、7B（约 6 GB，推荐）、72B（约 48 GB）',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '为什么 Qwen2-VL 在多语言 OCR 上领先', anchor: '#why-qwen-vl' },
      { label: '选择 Qwen2-VL 的模型尺寸', anchor: '#choose-model' },
      { label: '硬件要求', anchor: '#hardware' },
      { label: '使用 Ollama 设置', anchor: '#ollama-setup' },
      { label: '使用 LM Studio 设置', anchor: '#lm-studio-setup' },
      { label: 'CJK 文件的文档 OCR', anchor: '#ocr-use-case' },
      { label: '图像问答、屏幕截图与图表', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL 对比 LLaVA 与 Llama 3.2 Vision', anchor: '#vs-other-models' },
      { label: '连接到 PromptQuorum', anchor: '#promptquorum' },
      { label: '故障排除', anchor: '#troubleshooting' },
      { label: '延伸阅读', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL 7B 可在约 6 GB VRAM（Q4）下本地运行**——通过 Ollama 只需一条 `ollama pull qwen2-vl:7b` 命令，无需模型转换。',
          '**多语言 OCR 的最佳本地模型**：Qwen2-VL 与 MiniCPM-V 2.6 持平，在中文、日文和韩文文本上优于 LLaVA 1.6 和 Llama 3.2 Vision 11B。',
          '**原生分辨率最高 4096×4096**——可直接读取高分辨率扫描件而不缩小，不同于 LLaVA 1.6（672×672）或 Llama 3.2 Vision（1120×1120）。',
          '**三种尺寸**：2B（约 3 GB VRAM，快速、基础）、7B（约 6 GB，推荐给大多数用户）、72B（约 48 GB，在开源基准测试中领先）。',
          '**每次请求最多接受 8 张图像**——在本地视觉模型中多图能力最高。',
          '**不支持直接输入 PDF**：先将 PDF 页面转换为 PNG 或 JPEG，再将每页作为单独的图像发送。',
          '**下载后 100% 离线**：无需 API 密钥，不上传云端——每份文档都留在你的机器上。',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: '为什么 Qwen2-VL 在本地视觉模型中领先于多语言 OCR',
        content: [
          '**Qwen2-VL 是多语言文档 OCR 最强的本地视觉模型——在读取中文、日文、韩文和英文文本方面，它与任何可在消费级硬件上运行的模型持平或更优。** 阿里巴巴使用大规模多语言文档语料库对其进行训练，因此它在非英文文本提取上优于 LLaVA 1.6 和 Llama 3.2 Vision 11B。',
          'Qwen2-VL 支持高达 4096×4096 像素的动态输入分辨率。LLaVA 1.6 上限为 672×672，Llama 3.2 Vision 为 1120×1120，因此两者在读取前都会缩小高分辨率扫描件。Qwen2-VL 以原生分辨率读取 300 DPI 的 A4 扫描件——这是它在密集文档和小号 CJK 字符上 OCR 精度更高的主要原因。',
          '在本地运行 Qwen2-VL，硬件成本之外每张图像的成本为 $0。云视觉 API 每张图像收费约 $0.01–0.03；按每月 10,000 张图像计算，可节省 $100–300——而且没有任何文档会离开你的机器。',
          '如果你的文档包含 CJK 文本、小号字体或高分辨率扫描件，请使用 Qwen2-VL。如果你的工作仅涉及英文照片问答，Llama 3.2 Vision 11B 是同样不错的选择。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL 是中文、日文和韩文文档 OCR 最精确的本地视觉模型，通过 Ollama 在约 6 GB VRAM 下运行。' },
          { type: 'plain-terms', text: '视觉语言模型读取图像而不是生成图像。你给 Qwen2-VL 一张照片或一页扫描件，它会返回文本——一段描述、一个答案，或提取出的内容。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: '选择 Qwen2-VL 的模型尺寸',
        content: [
          'Qwen2-VL 提供三种尺寸。根据你的 VRAM 和所需精度进行选择。所有尺寸都可在 [Hugging Face (Qwen)](https://huggingface.co/Qwen) 和 Ollama 模型库中通过明确的标签获取。',
        ],
        rows: [
          { '模型': 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Ollama 标签': 'qwen2-vl:2b', '适用场景': '快速图像描述、简单 OCR、低 VRAM 笔记本' },
          { '模型': 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Ollama 标签': 'qwen2-vl:7b', '适用场景': '推荐——文档 OCR、图像问答、图表' },
          { '模型': 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Ollama 标签': 'qwen2-vl:72b', '适用场景': '最高质量、64 GB 以上 Apple Silicon 或多 GPU' },
        ],
        columns: ['模型', 'VRAM (Q4)', 'Ollama 标签', '适用场景'],
        tableFormat: true,
        note: 'Q4_K_M 是推荐的量化方式——质量与体积的平衡最佳。大多数用户应从 Qwen2-VL 7B 开始：它可装入 8 GB 的 GPU，并覆盖本指南中的所有用例。仅当 VRAM 低于 6 GB 时才切换到 2B 模型。关于 Q4 如何影响质量，请参阅 [LLM 量化详解](/zh/local-llms/llm-quantization-explained)。',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen2-VL 的硬件要求',
        items: [
          '**最低（Qwen2-VL 7B Q4）**：配备 8 GB VRAM 的 GPU——NVIDIA RTX 4060、RTX 3060 12 GB 或 RTX 2080。',
          '**低 VRAM 选项（Qwen2-VL 2B Q4）**：4 GB VRAM——可在大多数笔记本 GPU 和集成的 Apple Silicon 上运行。',
          '**最高质量（Qwen2-VL 72B Q4）**：约 48 GB——配备 64 GB 以上统一内存的 Apple Silicon，或两块 24 GB 的 GPU。',
          '**Apple Silicon**：配备 16 GB 以上统一内存的 M 系列芯片可轻松运行 7B 模型；72B 模型需要 64 GB 以上。',
          '**系统内存**：在 GPU 推理之外至少需要 16 GB；若同时打开完整的开发环境，建议 32 GB。',
          '**存储空间**：Qwen2-VL 7B Q4（GGUF）需要约 6 GB 可用磁盘空间，72B 需要约 30 GB。',
        ],
        callouts: [
          { type: 'note', text: '视觉模型的运行速度比相同参数量的纯文本模型慢约 30–60%。视觉编码器在第一个 token 时处理整张图像，之后文本以接近正常的速度生成。请为编码器和语言模型都预留 VRAM。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: '使用 Ollama 设置 Qwen2-VL',
        content: [
          'Ollama 是本地运行 Qwen2-VL 最快的方式。它会下载模型、管理量化，并在 localhost:11434 上提供 API。请从 [ollama.com](https://ollama.com/download) 安装——如果你是新手，可先从 [如何安装 Ollama](/zh/local-llms/how-to-install-ollama) 开始。',
        ],
        numberedItems: [
          { title: '安装 Ollama', whyItMatters: 'Ollama 负责模型下载、GGUF 格式和本地 API。支持 macOS、Linux 和 Windows。' },
          { title: '使用明确的尺寸标签拉取 Qwen2-VL', whyItMatters: '使用 qwen2-vl:7b。单独的 qwen2-vl 标签可能解析为其他尺寸——请始终指定 2b、7b 或 72b，以获取本指南所针对的模型。' },
          { title: '运行模型并附加图像', whyItMatters: '在交互模式下，在提示中输入图像文件路径。Ollama 会检测该路径并将图像加载到视觉编码器中。' },
          { title: '通过 API 发送图像', whyItMatters: '/api/generate 端点接受 base64 编码的 images 数组。应用程序——以及 PromptQuorum——通过这种方式以编程方式发送图像。' },
          { title: '验证多语言 OCR', whyItMatters: '发送一份中文或日文文档扫描件，确认提取的文本是否匹配。这能在你进一步构建之前，证明视觉编码器和分词器能正确处理 CJK 文字。' },
        ],
        codeBlock: `# Step 1 — Install Ollama
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download

# Step 2 — Pull Qwen2-VL 7B (explicit size tag)
ollama pull qwen2-vl:7b
# Downloads Qwen2-VL 7B Q4_K_M (~6 GB)

# Step 3 — Run and attach an image (interactive)
ollama run qwen2-vl:7b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen2-vl:7b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen2-vl:7b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '请以 150 DPI 或更高分辨率发送文档图像。Qwen2-VL 原生可读取最高 4096×4096，因此高分辨率扫描件可直接提升精度。与文本提示不同，图像质量是 OCR 结果的最大决定因素——模糊的扫描件无论模型多好都会产生错误字符。' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: '使用 LM Studio 设置 Qwen2-VL',
        content: [
          'LM Studio 通过图形界面运行 Qwen2-VL，无需 CLI 命令。它是 Windows 用户以及偏好图形界面者的推荐方式。请从 [lmstudio.ai](https://lmstudio.ai) 下载，或参阅 [如何安装 LM Studio](/zh/local-llms/how-to-install-lm-studio)。',
        ],
        numberedItems: [
          { title: '下载并安装 LM Studio', whyItMatters: '一款免费、跨平台的本地模型推理图形界面。无需终端。' },
          { title: '在模型浏览器中搜索 Qwen2-VL', whyItMatters: '搜索“Qwen2-VL 7B”并选择 Q4_K_M GGUF 版本。LM Studio 会用图像图标标记支持视觉的模型。' },
          { title: '加载模型并附加图像', whyItMatters: '点击输入框中的图像图标以上传照片或扫描件。LM Studio 会将其传递给视觉编码器。' },
          { title: '启动本地服务器', whyItMatters: '“Start Server”按钮会在 localhost:1234 上提供 OpenAI 兼容 API。视觉请求使用标准的 image_url 内容格式。' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "qwen2-vl-7b",
  "messages": [
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Extract all text from this document." },
        {
          "type": "image_url",
          "image_url": { "url": "data:image/png;base64,<base64-encoded-image>" }
        }
      ]
    }
  ]
}`,
        codeLanguage: 'json',
        note: 'LM Studio 和 Ollama 使用不同的图像格式：LM Studio 遵循 OpenAI 的 image_url 内容架构（带 data: 前缀）；Ollama 使用顶层的 images 数组，内容为原始 base64（无前缀）。请选择一种运行时并匹配其格式。',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: '中文、日文和多语言混合文件的文档 OCR',
        content: [
          '**Qwen2-VL 从中文、日文、韩文和多语言混合文档中提取文本的精度高于任何其他本地视觉模型。** 它的训练数据包含大规模多语言文档语料库，其 4096×4096 的原生分辨率能读取 LLaVA 1.6 和 Llama 3.2 Vision 会缩小并遗漏的小号 CJK 字符。',
          '最可靠的方式是给出具体的提取指令。请要求结构——“保留表格布局”“将每个字段以 key: value 形式返回”——而不是含糊的“读取此内容”。Qwen2-VL 会严格遵循格式指令，使输出无需后处理即可使用。',
        ],
        items: [
          '**纯文本提取**：“从这张图像中提取每一行文本。保留换行和阅读顺序。”',
          '**结构化字段**：“这是一张日文发票。请以 key: value 对的形式返回供应商、日期、小计、税额和总额。”',
          '**表格提取**：“将此表格提取为 CSV。将第一行视为表头。”',
          '**一次完成提取与翻译**：“从这张图像中提取中文文本，然后翻译成英文。两者都显示。”',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen2-vl:7b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Example output:
# vendor: Sample Trading Co., Ltd.
# date: 2026-04-30
# subtotal: 84,000 JPY
# tax: 8,400 JPY
# total: 92,400 JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: '请始终将提取的数字与源文档核对。本地视觉模型——包括 Qwen2-VL——可能会在低质量扫描件上读错某个数字。请将 OCR 输出视为需要确认的草稿，而非最终值，尤其是发票和财务文档。' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '要使用 Qwen2-VL 从 CJK 文档中提取文本，请以 150 DPI 或更高分辨率发送图像，并使用要求结构的具体提示，例如“将每个字段以 key: value 形式返回”。' },
          { type: 'plain-terms', text: 'OCR 是指把文字的图片转换为可编辑的文本。Qwen2-VL 查看一页扫描件并打出它所看到的内容——而且它处理中文和日文字符的能力与英文一样好。' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: '图像问答、屏幕截图分析与图表读取',
        content: [
          '除 OCR 之外，Qwen2-VL 还能处理一般的图像理解——描述照片、回答有关屏幕截图的问题以及读取图表。它在清晰的输入上很准确，在杂乱或含糊的场景上较弱。',
        ],
        items: [
          '**图像问答**：就一张照片提出开放性问题——“这张图里有什么？”“有多少人穿着红色？”。Qwen2-VL 7B 在清晰照片上很准确，在杂乱或含糊的场景上较弱。',
          '**屏幕截图与 UI 分析**：Qwen2-VL 能读取 UI 截图、错误对话框和应用状态。对于密集的代码截图，InternVL 2.5 在这类数据上训练得更充分——如果 UI 和代码是你的主要用途，请使用它。',
          '**图表与图形读取**：Qwen2-VL 能很好地描述图表结构和趋势，但从图表中读出的精确数值在所有本地视觉模型上都不可靠。请将精确数字与底层数据核对。',
          '**视频帧**：Qwen2-VL 接受将多帧作为序列——以约每秒一帧采样，最多发送 8 帧来总结一段短视频。',
          '**多图对比**：在一次请求中发送最多 8 张图像，以对比版本、找出差异或批量描述一组图像。',
        ],
        callouts: [
          { type: 'tip', text: '将 Qwen2-VL 用于 OCR、多语言文档和一般图像问答。当你的主要用途是代码或 UI 截图时，切换到 InternVL 2.5；当你的 VRAM 低于 4 GB 时，切换到 Moondream 2。' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL 对比 LLaVA 与 Llama 3.2 Vision',
        content: [
          '**在多语言 OCR 上，Qwen2-VL 优于 LLaVA 1.6，并以更低的 VRAM 与 Llama 3.2 Vision 11B 持平或更优。** 对于仅英文的照片问答，Llama 3.2 Vision 11B 是同样强劲的选择。如果你需要社区故障排除资源，LLaVA 1.6 仍是文档最完善的模型。',
        ],
        rows: [
          { '模型': 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '优秀', '最大分辨率': '4096×4096', '适用场景': '多语言 OCR、高分辨率扫描件' },
          { '模型': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': '良好', '最大分辨率': '1120×1120', '适用场景': '英文照片问答、一般文档' },
          { '模型': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '一般', '最大分辨率': '672×672', '适用场景': '一般问答、社区支持' },
          { '模型': 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '优秀', '最大分辨率': '1792×1792', '适用场景': '文档 OCR（偏英文）' },
          { '模型': 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': '良好', '最大分辨率': '高', '适用场景': '代码与 UI 截图' },
        ],
        columns: ['模型', 'VRAM (Q4)', 'OCR / CJK', '最大分辨率', '适用场景'],
        tableFormat: true,
        note: '五者都可通过 Ollama 运行（InternVL 2.5 通过社区构建）。如需本地视觉模型的完整综述——包括 Moondream 2 和发票提取基准测试——请参阅 [本地视觉模型对比](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。如果拿不定主意，请从 Qwen2-VL 7B 开始：它以 6 GB VRAM 覆盖 OCR、文档和一般问答。',
      },
      promptquorum: {
        id: 'promptquorum',
        title: '将本地 Qwen2-VL 连接到 PromptQuorum',
        content: [
          'PromptQuorum 会在多个模型之间分发提示。要将本地 Qwen2-VL 用作视觉分发目标，请将 PromptQuorum 的本地 LLM 端点指向你的 Ollama 服务器。这样图像处理就留在你的硬件上，同时云模型仍可用于文本任务。',
          '这是 Ollama 端点（OpenAI 兼容），与用于 Claude 的 Anthropic API 配置相互独立。两者可同时启用，PromptQuorum 会根据任务类型和数据敏感度进行分发。',
        ],
        codeBlock: `# PromptQuorum dispatch config — local Qwen2-VL via Ollama
# Set in your .env or the PromptQuorum settings panel

OLLAMA_BASE_URL=http://localhost:11434/v1
LOCAL_VISION_MODEL=qwen2-vl:7b

# Example routing rules:
# - task_type: ocr / image  -> qwen2-vl:7b        (local Ollama, no cloud upload)
# - task_type: text         -> claude-sonnet-4-6  (Anthropic API, separate config)`,
        codeLanguage: 'bash',
        snippetBlocks: [
          { type: 'one-sentence', text: '要将 PromptQuorum 连接到本地 Qwen2-VL，请将 OLLAMA_BASE_URL 设置为 http://localhost:11434/v1，并将本地视觉模型指向 qwen2-vl:7b。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Qwen2-VL 故障排除',
        items: [
          '**出现“unknown model”或拉取失败**：请使用明确的尺寸标签——`ollama pull qwen2-vl:7b`，而不是 `qwen2-vl`。运行 `ollama list` 确认已安装的名称。',
          '**图像被忽略，模型回应得好像没有发送图像**：确认文件路径正确且可读。在 Ollama API 中，`images` 数组必须包含*不带* `data:` 前缀的原始 base64——`data:` 前缀仅用于 LM Studio 和 OpenAI 格式。',
          '**CJK 字符乱码或缺失**：扫描件分辨率过低。请以 150–300 DPI 重新扫描。Qwen2-VL 可读取最高 4096×4096，因此更高的输入分辨率会直接提升中文和日文的精度。',
          '**CUDA 显存不足（out of memory）**：模型无法装入你的 VRAM。请切换到 Qwen2-VL 2B（约 3 GB），或在 CPU 与 GPU 共享统一内存的 Apple Silicon 上运行。',
          '**首次响应慢，之后变快**：这是正常的。视觉编码器在第一个 token 时处理整张图像，之后文本以接近正常的速度生成。',
          '**从发票或图表中提取出错误数字**：本地视觉模型在嘈杂输入上会读错数字。请提高扫描质量，并始终将数字输出与源数据核对。',
          '**PDF 无法加载**：没有任何本地视觉模型直接接受 PDF。请先将页面转换为 PNG 或 JPEG（使用 pdf2image 或 pypdfium2），再将每页作为单独的图像发送。',
          '**LM Studio 显示“failed to load model”**：要么 VRAM 不足，要么你下载了不支持视觉的 GGUF。请确认模型卡标明支持视觉，并选择 Q4_K_M 版本。',
        ],
        callouts: [
          { type: 'tip', text: '运行 `ollama ps` 可查看哪些模型已加载到 VRAM 以及各自占用多少内存。在切换到 72B 模型之前，使用 `ollama stop qwen2-vl:7b` 卸载模型。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[如何在本地运行 Qwen 3](/zh/local-llms/run-qwen-locally-guide-2026) — 文本模型的对应文章：使用 Ollama 和 LM Studio 设置 Qwen 3。',
          '[本地视觉模型对比：LLaVA、Llama 3.2 Vision、MiniCPM-V](/zh/power-local-llm/local-vision-models-llava-ollama-2026) — 每个本地视觉模型的完整综述，附基准测试。',
          '[多模态本地 LLM：视觉、音频与文本](/zh/local-llms/multimodal-local-llms) — 在本地运行多模态模型的更广泛概览。',
          '[Qwen 对比 Llama 对比 Mistral](/zh/local-llms/qwen-vs-llama-vs-mistral) — Qwen 文本模型与替代方案的对比。',
          '[本地 LLM 硬件指南 2026](/zh/local-llms/local-llm-hardware-guide-2026) — 本地推理的 VRAM 和 GPU 要求。',
          '[浏览所有本地 LLM 指南](/zh/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: '在本地运行 Qwen2-VL 的最低硬件要求是什么？', a: 'Q4_K_M 量化的 Qwen2-VL 7B 需要 8 GB VRAM（RTX 4060、RTX 3060 12 GB 或 RTX 2080）。更小的 Qwen2-VL 2B 在 4 GB 下运行。72B 模型需要约 48 GB——配备 64 GB 以上统一内存的 Apple Silicon 或两块 24 GB 的 GPU。配备 16 GB 以上统一内存的 Apple Silicon 可轻松运行 7B 模型。' },
          { q: 'Qwen2-VL 在 OCR 上比 LLaVA 更好吗？', a: '是的，尤其是非英文文本。Qwen2-VL 与 MiniCPM-V 2.6 持平，在中文、日文和韩文 OCR 上优于 LLaVA 1.6 和 Llama 3.2 Vision 11B。它 4096×4096 的原生分辨率可直接读取高分辨率扫描件而不缩小，而 LLaVA 1.6 上限为 672×672。不过 LLaVA 仍拥有最大的社区和最多的教程。' },
          { q: 'Qwen2-VL 能直接读取 PDF 吗？', a: '不能。没有任何本地视觉模型直接接受 PDF 输入。请先将每个 PDF 页面转换为 PNG 或 JPEG 图像（使用 pdf2image 或 pypdfium2），再将每页作为单独的图像请求发送。对于 10 页的 PDF，你需要发送 10 个图像请求并合并结果。' },
          { q: '如何通过 Ollama 向 Qwen2-VL 发送图像？', a: '有两种方式。在交互模式下（`ollama run qwen2-vl:7b`），在提示中输入图像文件路径——Ollama 会检测到它并加载图像。通过 API，向 /api/generate 发送 POST 请求，附带 base64 编码的 `images` 数组。base64 字符串不能包含 `data:` 前缀。' },
          { q: 'Qwen2-VL 能完全离线运行吗？', a: '能。一次性下载模型后，Qwen2-VL 完全在你的机器上运行——无需 API 密钥，也无需云账户。没有任何图像被上传到任何地方，文档处理始终保留在你的基础设施内。有关合规影响，请参阅 [Qwen 本地 GDPR 设置指南](/zh/local-llms/qwen-local-gdpr-setup-guide-2026)。' },
          { q: 'Qwen2-VL 一次能处理多少张图像？', a: '每次请求最多 8 张图像——在本地视觉模型中多图能力最高。这使它非常适合对比文档版本、找出差异，或总结以每秒一帧采样的短视频。' },
          { q: 'Qwen2-VL 还是 Llama 3.2 Vision——我该选哪个？', a: '对于中文、日文或韩文文档、高分辨率扫描件或小号字体，请选择 Qwen2-VL——而且 7B 模型可装入 6 GB VRAM，而 Llama 3.2 Vision 11B 需要 8 GB。对于仅英文的一般照片问答，两者相当，可选择 Llama 3.2 Vision 11B。' },
          { q: '为什么我的 OCR 输出中字符是乱码？', a: '几乎总是因为扫描件分辨率低。Qwen2-VL 原生可读取最高 4096×4096，因此以 150–300 DPI 重新扫描文档通常能修复乱码或缺失的字符。低质量输入是所有本地视觉模型出现 OCR 错误的最大原因。' },
        ],
      },
    },
  },
}
