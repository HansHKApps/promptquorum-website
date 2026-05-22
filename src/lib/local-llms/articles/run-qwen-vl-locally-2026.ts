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
        note: 'Q4_K_M ist die empfohlene Quantisierung — das beste Verhältnis von Qualität zu Größe. Die meisten Nutzer sollten mit Qwen2-VL 7B beginnen: Es passt auf eine 8-GB-GPU und bewältigt jeden Anwendungsfall in dieser Anleitung. Wechseln Sie nur dann zum 2B-Modell, wenn der VRAM unter 6 GB liegt. Siehe [LLM-Quantisierung erklärt](/local-llms/llm-quantization-explained?lang=de), wie sich Q4 auf die Qualität auswirkt.',
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
          'Ollama ist der schnellste Weg, Qwen2-VL lokal auszuführen. Es lädt das Modell herunter, verwaltet die Quantisierung und stellt eine API unter localhost:11434 bereit. Installieren Sie es von [ollama.com](https://ollama.com/download) — oder beginnen Sie, falls Sie neu damit sind, mit [So installieren Sie Ollama](/local-llms/how-to-install-ollama?lang=de).',
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
          'LM Studio führt Qwen2-VL über eine grafische Oberfläche ohne CLI-Befehle aus. Es ist der empfohlene Weg für Windows-Nutzer und alle, die eine GUI bevorzugen. Laden Sie es von [lmstudio.ai](https://lmstudio.ai) herunter oder lesen Sie [So installieren Sie LM Studio](/local-llms/how-to-install-lm-studio?lang=de).',
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
        note: 'Alle fünf laufen über Ollama (InternVL 2.5 über Community-Builds). Den vollständigen Überblick über lokale Vision-Modelle — einschließlich Moondream 2 und einem Rechnungsextraktions-Benchmark — finden Sie im [Vergleich lokaler Vision-Modelle](/power-local-llm/local-vision-models-llava-ollama-2026?lang=de). Im Zweifelsfall beginnen Sie mit Qwen2-VL 7B: Es deckt OCR, Dokumente und allgemeines Q&A mit 6 GB VRAM ab.',
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
          '[So führen Sie Qwen 3 lokal aus](/local-llms/run-qwen-locally-guide-2026?lang=de) — das Gegenstück für Textmodelle: Einrichtung von Qwen 3 mit Ollama und LM Studio.',
          '[Lokale Vision-Modelle im Vergleich: LLaVA, Llama 3.2 Vision, MiniCPM-V](/power-local-llm/local-vision-models-llava-ollama-2026?lang=de) — der vollständige Überblick über jedes lokale Vision-Modell, mit Benchmarks.',
          '[Multimodale lokale LLMs: Vision, Audio und Text](/local-llms/multimodal-local-llms?lang=de) — breiterer Überblick über den lokalen Betrieb multimodaler Modelle.',
          '[Qwen vs. Llama vs. Mistral](/local-llms/qwen-vs-llama-vs-mistral?lang=de) — wie die Qwen-Textmodelle im Vergleich zu den Alternativen abschneiden.',
          '[Hardware-Leitfaden für lokale LLMs 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — VRAM- und GPU-Anforderungen für lokale Inferenz.',
          '[Alle Anleitungen zu lokalen LLMs durchsuchen](/local-llms?lang=de)',
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
          { q: 'Läuft Qwen2-VL vollständig offline?', a: 'Ja. Nach dem einmaligen Modell-Download läuft Qwen2-VL vollständig auf Ihrem Rechner — kein API-Schlüssel und kein Cloud-Konto. Es wird kein Bild irgendwohin hochgeladen, wodurch die Dokumentverarbeitung innerhalb Ihrer Infrastruktur bleibt. Die Compliance-Auswirkungen erläutert der [Qwen-Leitfaden zur lokalen DSGVO-Einrichtung](/local-llms/qwen-local-gdpr-setup-guide-2026?lang=de).' },
          { q: 'Wie viele Bilder kann Qwen2-VL gleichzeitig verarbeiten?', a: 'Bis zu 8 Bilder pro Anfrage — die höchste Mehrbild-Kapazität unter den lokalen Vision-Modellen. Das macht es gut geeignet, um Dokumentversionen zu vergleichen, Unterschiede zu erkennen oder ein kurzes Video zusammenzufassen, das mit einem Frame pro Sekunde abgetastet wurde.' },
          { q: 'Qwen2-VL oder Llama 3.2 Vision — welches sollte ich wählen?', a: 'Wählen Sie Qwen2-VL für chinesische, japanische oder koreanische Dokumente, hochauflösende Scans oder kleine Schriften — und weil das 7B-Modell in 6 GB VRAM passt gegenüber 8 GB bei Llama 3.2 Vision 11B. Wählen Sie Llama 3.2 Vision 11B für reines englisches Foto-Q&A, wo beide vergleichbar sind.' },
          { q: 'Warum sind die Zeichen in meiner OCR-Ausgabe verstümmelt?', a: 'Fast immer ist es ein Scan mit geringer Auflösung. Qwen2-VL liest nativ bis zu 4096×4096, sodass ein erneuter Scan des Dokuments mit 150–300 DPI verstümmelte oder fehlende Zeichen meist behebt. Eingaben geringer Qualität sind die häufigste Ursache für OCR-Fehler bei jedem lokalen Vision-Modell.' },
          { q: 'Muss ich bei der Verwendung von Qwen2-VL die DSGVO beachten?', a: 'Wenn Sie Qwen2-VL lokal ausführen, wird kein Bild und kein Dokument an Dritte übermittelt, sodass DSGVO-Artikel 44 zur Drittlandübermittlung für die KI-Ebene nicht greift. Sie bleiben weiterhin Verantwortlicher nach Artikel 28 für Ihre eigene Verarbeitung und sollten die Verarbeitung in Ihrem Verzeichnis von Verarbeitungstätigkeiten dokumentieren. Lokale Inferenz erleichtert zudem die Einhaltung der BSI-Grundschutz-Kataloge, da die Bildverarbeitung Ihre kontrollierte Infrastruktur nicht verlässt.' },
          { q: 'Ist Qwen2-VL für den deutschen Mittelstand geeignet?', a: 'Ja. Für mittelständische Unternehmen, die Rechnungen, Verträge oder Formulare verarbeiten, läuft Qwen2-VL 7B auf einer einzelnen 8-GB-GPU oder einem Apple-Silicon-Rechner und hält dabei sensible Dokumente im Haus. Das passt zu den IT-Sicherheitsstandards des BSI und vermeidet Auftragsverarbeitungsverträge mit Cloud-Anbietern. Für DACH-Unternehmen, die mit chinesischen oder japanischen Geschäftsdokumenten arbeiten, ist die mehrsprachige OCR-Stärke ein konkreter praktischer Vorteil.' },
        ],
      },
    },
  },
}
