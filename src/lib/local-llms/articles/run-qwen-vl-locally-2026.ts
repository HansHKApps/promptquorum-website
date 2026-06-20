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

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: 'Cómo ejecutar Qwen2-VL en local en 2026: guía de OCR de documentos y visión',
    seoTitle: 'Ejecutar Qwen2-VL en local 2026: guía de OCR y visión',
    intro: 'Qwen2-VL es el modelo de visión-lenguaje abierto de Alibaba, y su variante de 7B se ejecuta en local con aproximadamente 6 GB de VRAM mediante Ollama o LM Studio. Lee documentos, capturas de pantalla, gráficos y fotos, y supera a todos los demás modelos de visión locales en OCR de chino, japonés y coreano. Esta guía cubre la selección del modelo, el hardware, la configuración con Ollama y LM Studio, la extracción de documentos multilingüe y la comparación de Qwen2-VL con LLaVA y Llama 3.2 Vision.',
    metaDescription: 'Ejecuta Qwen2-VL en local con ~6 GB de VRAM vía Ollama: instalación, OCR en chino y japonés, preguntas sobre imágenes y comparación con LLaVA.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores y analistas que necesitan OCR de documentos offline y comprensión de imágenes — especialmente para archivos en chino, japonés y de idiomas mixtos — sin enviar datos a APIs en la nube',
    primaryTerm: 'run Qwen2-VL locally',
    targetKeywords: [
      'ejecutar Qwen2-VL en local 2026',
      'configuración Qwen2-VL Ollama',
      'OCR de documentos Qwen2-VL',
      'modelo de visión local multilingüe',
      'Qwen2-VL vs Llama 3.2 Vision',
      'OCR chino japonés LLM local',
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
    ctaText: 'Únete a la lista de espera de PromptQuorum →',
    leadAnswerBlock: '**Ejecuta `ollama pull qwen2-vl:7b` en cualquier máquina con 8 GB de VRAM para leer documentos en chino, japonés e idiomas mixtos en local.** Qwen2-VL es el modelo de visión abierto más potente para OCR multilingüe — cada imagen se procesa en tu máquina, sin subida a la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo ejecuto Qwen2-VL en local en 2026?',
        answer: 'Instala Ollama, ejecuta `ollama pull qwen2-vl:7b`, luego `ollama run qwen2-vl:7b` y escribe una ruta de archivo de imagen en tu prompt. Para una interfaz gráfica, usa LM Studio: busca "Qwen2-VL 7B", descarga la variante GGUF Q4_K_M y adjunta imágenes con el icono de imagen. Qwen2-VL 7B necesita ~6 GB de VRAM y lee documentos, capturas de pantalla y gráficos completamente sin conexión.',
        bullets: [
          'Hardware mínimo: 8 GB de VRAM (RTX 4060, RTX 3060 12 GB) o Apple Silicon con 16 GB de memoria unificada',
          'Descargar modelo: ollama pull qwen2-vl:7b (descarga Qwen2-VL 7B Q4_K_M ~6 GB)',
          'Adjuntar imágenes: escribe la ruta del archivo en el prompt (CLI) o envía un array base64 de images (API)',
          'Puntos fuertes: OCR de documentos en chino, japonés y coreano — supera a LLaVA y Llama 3.2 Vision',
          'Tamaños: 2B (~3 GB VRAM), 7B (~6 GB, recomendado), 72B (~48 GB)',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Por qué Qwen2-VL lidera en OCR multilingüe', anchor: '#why-qwen-vl' },
      { label: 'Elegir el tamaño del modelo Qwen2-VL', anchor: '#choose-model' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Configuración con Ollama', anchor: '#ollama-setup' },
      { label: 'Configuración con LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR de documentos para archivos CJK', anchor: '#ocr-use-case' },
      { label: 'Preguntas sobre imágenes, capturas de pantalla y gráficos', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL vs LLaVA vs Llama 3.2 Vision', anchor: '#vs-other-models' },
      { label: 'Conexión con PromptQuorum', anchor: '#promptquorum' },
      { label: 'Resolución de problemas', anchor: '#troubleshooting' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL 7B se ejecuta en local con ~6 GB de VRAM (Q4)** mediante Ollama — un único comando `ollama pull qwen2-vl:7b`, sin conversión de modelo.',
          '**Mejor modelo local para OCR multilingüe**: Qwen2-VL iguala a MiniCPM-V 2.6 y supera a LLaVA 1.6 y Llama 3.2 Vision 11B en texto chino, japonés y coreano.',
          '**Resolución nativa de hasta 4096×4096** — lee escaneos de alta resolución sin reducción, a diferencia de LLaVA 1.6 (672×672) o Llama 3.2 Vision (1120×1120).',
          '**Tres tamaños**: 2B (~3 GB VRAM, rápido y básico), 7B (~6 GB, recomendado para la mayoría), 72B (~48 GB, lidera los benchmarks de código abierto).',
          '**Acepta hasta 8 imágenes por solicitud** — la mayor capacidad de múltiples imágenes entre los modelos de visión locales.',
          '**Sin entrada directa de PDF**: convierte las páginas PDF a PNG o JPEG primero y luego envía cada página como una imagen separada.',
          '**100% sin conexión una vez descargado**: sin clave API, sin subida a la nube — cada documento permanece en tu máquina.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Por qué Qwen2-VL lidera los modelos de visión locales en OCR multilingüe',
        content: [
          '**Qwen2-VL es el modelo de visión local más potente para OCR de documentos multilingüe — iguala o supera a cualquier otro modelo que se ejecuta en hardware de consumo al leer texto en chino, japonés, coreano e inglés.** Alibaba lo entrenó con corpus de documentos multilingüe a gran escala, lo que explica que supere a LLaVA 1.6 y Llama 3.2 Vision 11B en extracción de texto no inglés.',
          'Qwen2-VL admite una resolución de entrada dinámica de hasta 4096×4096 píxeles. LLaVA 1.6 tiene un límite de 672×672 y Llama 3.2 Vision de 1120×1120, por lo que ambos reducen los escaneos de alta resolución antes de leerlos. Qwen2-VL lee un escaneo A4 a 300 DPI en resolución nativa — la principal razón por la que su precisión de OCR es mayor en documentos densos y caracteres CJK pequeños.',
          'Ejecutar Qwen2-VL en local cuesta 0 € por imagen después del hardware. Una API de visión en la nube cobra aproximadamente $0,01–0,03 por imagen; a 10 000 imágenes al mes eso son $100–300 ahorrados — y ningún documento sale jamás de tu máquina.',
          'Usa Qwen2-VL si tus documentos contienen texto CJK, fuentes pequeñas o escaneos de alta resolución. Si tu trabajo es solo preguntas sobre fotos en inglés, Llama 3.2 Vision 11B es una opción igualmente buena.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL es el modelo de visión local más preciso para OCR de documentos en chino, japonés y coreano, y se ejecuta con ~6 GB de VRAM mediante Ollama.' },
          { type: 'plain-terms', text: 'Un modelo de visión-lenguaje lee imágenes en lugar de generarlas. Le das a Qwen2-VL una foto o una página escaneada, y devuelve texto — una descripción, una respuesta o el contenido extraído.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Elegir el tamaño del modelo Qwen2-VL',
        content: [
          'Qwen2-VL viene en tres tamaños. Elige según tu VRAM y la precisión que necesitas. Todos los tamaños están en [Hugging Face (Qwen)](https://huggingface.co/Qwen) y en la biblioteca de modelos de Ollama con etiquetas explícitas.',
        ],
        rows: [
          { 'Modelo': 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Etiqueta Ollama': 'qwen2-vl:2b', 'Ideal para': 'Descripciones rápidas, OCR simple, portátiles con poca VRAM' },
          { 'Modelo': 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Etiqueta Ollama': 'qwen2-vl:7b', 'Ideal para': 'Recomendado — OCR de documentos, preguntas sobre imágenes, gráficos' },
          { 'Modelo': 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Etiqueta Ollama': 'qwen2-vl:72b', 'Ideal para': 'Máxima calidad, Apple Silicon 64 GB+ o multi-GPU' },
        ],
        columns: ['Modelo', 'VRAM (Q4)', 'Etiqueta Ollama', 'Ideal para'],
        tableFormat: true,
        note: 'Q4_K_M es la cuantización recomendada — la mejor relación calidad-tamaño. La mayoría de los usuarios debería empezar con Qwen2-VL 7B: cabe en una GPU de 8 GB y cubre todos los casos de uso de esta guía. Cambia al modelo 2B solo cuando la VRAM sea inferior a 6 GB. Consulta [cuantización de LLM explicada](/es/local-llms/llm-quantization-explained) para saber cómo Q4 afecta la calidad.',
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware para Qwen2-VL',
        items: [
          '**Mínimo (Qwen2-VL 7B Q4)**: GPU con 8 GB de VRAM — NVIDIA RTX 4060, RTX 3060 12 GB o RTX 2080.',
          '**Opción de poca VRAM (Qwen2-VL 2B Q4)**: 4 GB de VRAM — funciona en la mayoría de las GPU de portátiles y en Apple Silicon integrado.',
          '**Máxima calidad (Qwen2-VL 72B Q4)**: ~48 GB — Apple Silicon con 64 GB+ de memoria unificada, o dos GPU de 24 GB.',
          '**Apple Silicon**: un chip M-series con 16 GB+ de memoria unificada ejecuta el modelo de 7B sin problemas; el de 72B necesita 64 GB+.',
          '**RAM del sistema**: 16 GB mínimo junto con la inferencia GPU; 32 GB recomendados con un entorno de desarrollo completo abierto.',
          '**Almacenamiento**: ~6 GB de espacio libre en disco para Qwen2-VL 7B Q4 (GGUF), ~30 GB para el 72B.',
        ],
        callouts: [
          { type: 'note', text: 'Los modelos de visión se ejecutan aproximadamente un 30–60% más lentos que un modelo de solo texto con el mismo número de parámetros. El encoder de visión procesa la imagen completa en el primer token; luego el texto se genera a velocidad casi normal. Reserva VRAM tanto para el encoder como para el modelo de lenguaje.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configurar Qwen2-VL con Ollama',
        content: [
          'Ollama es la forma más rápida de ejecutar Qwen2-VL en local. Descarga el modelo, gestiona la cuantización y expone una API en localhost:11434. Instálalo desde [ollama.com](https://ollama.com/download) — o, si eres nuevo en esto, empieza con [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Instalar Ollama', whyItMatters: 'Ollama gestiona la descarga del modelo, el formato GGUF y la API local. Está disponible para macOS, Linux y Windows.' },
          { title: 'Descargar Qwen2-VL con una etiqueta de tamaño explícita', whyItMatters: 'Usa qwen2-vl:7b. La etiqueta qwen2-vl sin más puede resolver a un tamaño diferente — especifica siempre 2b, 7b o 72b para obtener el modelo al que se dirige esta guía.' },
          { title: 'Ejecutar el modelo y adjuntar una imagen', whyItMatters: 'En modo interactivo, escribe la ruta del archivo de imagen dentro del prompt. Ollama detecta la ruta y carga la imagen en el encoder de visión.' },
          { title: 'Enviar imágenes mediante la API', whyItMatters: 'El endpoint /api/generate acepta un array de images codificado en base64. Así es como las aplicaciones — y PromptQuorum — envían imágenes de forma programática.' },
          { title: 'Verificar el OCR multilingüe', whyItMatters: 'Envía un escaneo de documento chino o japonés y confirma que el texto extraído coincide. Esto demuestra que el encoder de visión y el tokenizador manejan correctamente el texto CJK antes de construir sobre ello.' },
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
          { type: 'warning', text: 'Envía las imágenes de documentos a 150 DPI o más. Qwen2-VL lee nativamente hasta 4096×4096, por lo que los escaneos de alta resolución mejoran directamente la precisión. A diferencia de un prompt de texto, la calidad de la imagen es el factor más importante en los resultados de OCR — un escaneo borroso produce caracteres incorrectos sin importar lo bueno que sea el modelo.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configurar Qwen2-VL con LM Studio',
        content: [
          'LM Studio ejecuta Qwen2-VL mediante una interfaz gráfica sin comandos de CLI. Es el método recomendado para usuarios de Windows y cualquiera que prefiera una GUI. Descárgalo desde [lmstudio.ai](https://lmstudio.ai), o consulta [cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio).',
        ],
        numberedItems: [
          { title: 'Descargar e instalar LM Studio', whyItMatters: 'Una GUI gratuita y multiplataforma para inferencia de modelos locales. No requiere terminal.' },
          { title: 'Buscar Qwen2-VL en el navegador de modelos', whyItMatters: 'Busca "Qwen2-VL 7B" y selecciona una variante GGUF Q4_K_M. LM Studio marca los modelos compatibles con visión con un icono de imagen.' },
          { title: 'Cargar el modelo y adjuntar una imagen', whyItMatters: 'Haz clic en el icono de imagen en el campo de entrada para subir una foto o escaneo. LM Studio lo pasa al encoder de visión.' },
          { title: 'Iniciar el servidor local', whyItMatters: 'El botón "Start Server" expone una API compatible con OpenAI en localhost:1234. Las solicitudes de visión usan el formato de contenido image_url estándar.' },
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
        note: 'LM Studio y Ollama usan formatos de imagen distintos: LM Studio sigue el esquema de contenido image_url de OpenAI (con prefijo data:); Ollama usa un array images de nivel superior con base64 puro (sin prefijo). Elige un entorno de ejecución y usa su formato.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'OCR de documentos para archivos en chino, japonés y de idiomas mixtos',
        content: [
          '**Qwen2-VL extrae texto de documentos en chino, japonés, coreano y de idiomas mixtos con más precisión que cualquier otro modelo de visión local.** Sus datos de entrenamiento incluyeron grandes corpus de documentos multilingüe, y su resolución nativa de 4096×4096 lee caracteres CJK pequeños que LLaVA 1.6 y Llama 3.2 Vision reducen y pierden.',
          'El patrón más fiable es un prompt de extracción específico. Pide estructura — "preserva el diseño de la tabla", "devuelve cada campo como key: value" — en lugar de un vago "lee esto". Qwen2-VL sigue las instrucciones de formato con precisión, lo que hace que la salida sea utilizable sin postprocesamiento.',
        ],
        items: [
          '**Extracción de texto simple**: "Extrae cada línea de texto de esta imagen. Preserva los saltos de línea y el orden de lectura."',
          '**Campos estructurados**: "Esta es una factura japonesa. Devuelve proveedor, fecha, subtotal, impuesto y total como pares key: value."',
          '**Extracción de tablas**: "Extrae esta tabla como CSV. Trata la primera fila como encabezado."',
          '**Extraer y traducir en un solo paso**: "Extrae el texto chino de esta imagen y luego tradúcelo al español. Muestra ambos."',
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
          { type: 'important', text: 'Verifica siempre los números extraídos contra el documento fuente. Los modelos de visión locales — incluido Qwen2-VL — pueden malinterpretar un dígito en un escaneo de baja calidad. Trata la salida de OCR como un borrador a confirmar, no como un valor definitivo, especialmente en facturas y documentos financieros.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Para extraer texto de un documento CJK con Qwen2-VL, envía la imagen a 150+ DPI con un prompt específico que solicite estructura, como "devuelve cada campo como key: value".' },
          { type: 'plain-terms', text: 'OCR significa convertir una imagen de texto en texto editable. Qwen2-VL mira una página escaneada y escribe lo que ve — y maneja los caracteres chinos y japoneses igual de bien que el inglés.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Preguntas sobre imágenes, análisis de capturas de pantalla y lectura de gráficos',
        content: [
          'Más allá del OCR, Qwen2-VL maneja la comprensión general de imágenes — describir fotos, responder preguntas sobre capturas de pantalla y leer gráficos. Es preciso con entradas claras y más débil con escenas desordenadas o ambiguas.',
        ],
        items: [
          '**Preguntas sobre imágenes**: haz preguntas abiertas sobre una foto — "¿Qué hay en esta imagen?", "¿Cuántas personas llevan ropa roja?". Qwen2-VL 7B es preciso con fotos claras y más débil con escenas desordenadas o ambiguas.',
          '**Análisis de capturas de pantalla e interfaces**: Qwen2-VL lee capturas de pantalla de interfaces, diálogos de error y estados de aplicaciones. Para capturas de código densas concretamente, InternVL 2.5 está entrenado con más énfasis en esos datos — úsalo si la interfaz y el código son tu carga de trabajo principal.',
          '**Lectura de gráficos y diagramas**: Qwen2-VL describe bien la estructura y las tendencias de los gráficos, pero los valores numéricos precisos extraídos de gráficos no son fiables en ningún modelo de visión local. Confirma las cifras exactas con los datos subyacentes.',
          '**Fotogramas de vídeo**: Qwen2-VL acepta múltiples fotogramas como secuencia — toma aproximadamente un fotograma por segundo y envía hasta 8 para resumir un clip corto.',
          '**Comparación de múltiples imágenes**: envía hasta 8 imágenes en una solicitud para comparar versiones, detectar diferencias o describir un conjunto en lote.',
        ],
        callouts: [
          { type: 'tip', text: 'Usa Qwen2-VL para OCR, documentos multilingüe y preguntas generales sobre imágenes. Cambia a InternVL 2.5 cuando tu carga de trabajo principal sean capturas de código o de interfaz, o a Moondream 2 cuando tengas menos de 4 GB de VRAM.' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL vs LLaVA vs Llama 3.2 Vision',
        content: [
          '**En OCR multilingüe, Qwen2-VL supera a LLaVA 1.6 e iguala o supera a Llama 3.2 Vision 11B con menos VRAM.** Para preguntas sobre fotos solo en inglés, Llama 3.2 Vision 11B es una opción igualmente sólida. LLaVA 1.6 sigue siendo el modelo mejor documentado si necesitas recursos de resolución de problemas de la comunidad.',
        ],
        rows: [
          { 'Modelo': 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Excelente', 'Resolución máx.': '4096×4096', 'Ideal para': 'OCR multilingüe, escaneos de alta resolución' },
          { 'Modelo': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Bueno', 'Resolución máx.': '1120×1120', 'Ideal para': 'Preguntas sobre fotos en inglés, documentos generales' },
          { 'Modelo': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Regular', 'Resolución máx.': '672×672', 'Ideal para': 'Preguntas generales, soporte comunitario' },
          { 'Modelo': 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'Excelente', 'Resolución máx.': '1792×1792', 'Ideal para': 'OCR de documentos (orientado al inglés)' },
          { 'Modelo': 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'Bueno', 'Resolución máx.': 'Alta', 'Ideal para': 'Capturas de código e interfaz' },
        ],
        columns: ['Modelo', 'VRAM (Q4)', 'OCR / CJK', 'Resolución máx.', 'Ideal para'],
        tableFormat: true,
        note: 'Los cinco se ejecutan mediante Ollama (InternVL 2.5 a través de builds comunitarios). Para el análisis completo de modelos de visión locales — incluyendo Moondream 2 y un benchmark de extracción de facturas — consulta la [comparación de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026). Si no estás seguro, empieza con Qwen2-VL 7B: cubre OCR, documentos y preguntas generales con 6 GB de VRAM.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Conectar Qwen2-VL local a PromptQuorum',
        content: [
          'PromptQuorum enruta los prompts entre múltiples modelos. Para usar Qwen2-VL local como destino de despacho de visión, apunta el endpoint LLM local de PromptQuorum a tu servidor Ollama. El procesamiento de imágenes se queda entonces en tu hardware, mientras que los modelos en la nube siguen disponibles para tareas de texto.',
          'Este es el endpoint de Ollama (compatible con OpenAI), separado de la configuración de la API de Anthropic usada para Claude. Ambos pueden estar activos a la vez, con PromptQuorum enrutando por tipo de tarea y sensibilidad de datos.',
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
          { type: 'one-sentence', text: 'Conecta PromptQuorum a Qwen2-VL local estableciendo OLLAMA_BASE_URL en http://localhost:11434/v1 y apuntando el modelo de visión local a qwen2-vl:7b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Resolución de problemas de Qwen2-VL',
        items: [
          '**"unknown model" o la descarga falla**: usa una etiqueta de tamaño explícita — `ollama pull qwen2-vl:7b`, no `qwen2-vl`. Ejecuta `ollama list` para confirmar el nombre instalado.',
          '**La imagen se ignora y el modelo responde como si no se hubiera enviado ninguna imagen**: confirma que la ruta del archivo es correcta y legible. En la API de Ollama, el array `images` debe contener base64 puro *sin* el prefijo `data:` — el prefijo `data:` es solo para el formato de LM Studio y OpenAI.',
          '**Caracteres CJK ilegibles o ausentes**: el escaneo tiene demasiada baja resolución. Vuelve a escanear a 150–300 DPI. Qwen2-VL lee hasta 4096×4096, por lo que una resolución de entrada más alta mejora directamente la precisión del chino y el japonés.',
          '**CUDA sin memoria (out of memory)**: el modelo no cabe en tu VRAM. Cambia a Qwen2-VL 2B (~3 GB) o ejecútalo en Apple Silicon, que comparte memoria unificada entre CPU y GPU.',
          '**Primera respuesta lenta, luego rápida**: esto es normal. El encoder de visión procesa la imagen completa en el primer token; el texto se genera luego a velocidad casi normal.',
          '**Números incorrectos extraídos de una factura o gráfico**: los modelos de visión locales leen mal los dígitos en entradas ruidosas. Aumenta la calidad del escaneo y verifica siempre la salida numérica contra la fuente.',
          '**Un PDF no carga**: ningún modelo de visión local acepta PDF directamente. Convierte las páginas a PNG o JPEG primero (con pdf2image o pypdfium2), luego envía cada página como imagen separada.',
          '**LM Studio muestra "failed to load model"**: o bien VRAM insuficiente, o descargaste un GGUF sin soporte de visión. Confirma que la ficha del modelo indica soporte de visión y elige la variante Q4_K_M.',
        ],
        callouts: [
          { type: 'tip', text: 'Ejecuta `ollama ps` para ver qué modelos están cargados en la VRAM y cuánta memoria usa cada uno. Usa `ollama stop qwen2-vl:7b` para descargar el modelo antes de cambiar al de 72B.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Cómo ejecutar Qwen 3 en local](/es/local-llms/run-qwen-locally-guide-2026) — el artículo complementario para el modelo de texto: configuración de Qwen 3 con Ollama y LM Studio.',
          '[Comparativa de modelos de visión locales: LLaVA, Llama 3.2 Vision, MiniCPM-V](/es/power-local-llm/local-vision-models-llava-ollama-2026) — el análisis completo de cada modelo de visión local, con benchmarks.',
          '[LLM locales multimodales: visión, audio y texto](/es/local-llms/multimodal-local-llms) — visión general más amplia sobre la ejecución de modelos multimodales en local.',
          '[Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral) — cómo se comparan los modelos de texto Qwen con las alternativas.',
          '[Guía de hardware para LLM locales 2026](/es/local-llms/local-llm-hardware-guide-2026) — requisitos de VRAM y GPU para inferencia local.',
          '[Ver todas las guías de LLM locales](/es/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: '¿Cuál es el hardware mínimo para ejecutar Qwen2-VL en local?', a: 'Qwen2-VL 7B con cuantización Q4_K_M necesita 8 GB de VRAM (RTX 4060, RTX 3060 12 GB o RTX 2080). El Qwen2-VL 2B más pequeño funciona con 4 GB. El modelo de 72B necesita ~48 GB — Apple Silicon con 64 GB+ de memoria unificada o dos GPU de 24 GB. Apple Silicon con 16 GB+ de memoria unificada ejecuta el modelo de 7B sin problemas.' },
          { q: '¿Qwen2-VL es mejor que LLaVA para OCR?', a: 'Sí, especialmente para texto que no sea inglés. Qwen2-VL iguala a MiniCPM-V 2.6 y supera a LLaVA 1.6 y Llama 3.2 Vision 11B en OCR de chino, japonés y coreano. Su resolución nativa de 4096×4096 lee escaneos de alta resolución sin reducción, mientras que LLaVA 1.6 tiene un límite de 672×672. LLaVA sigue teniendo la mayor comunidad y más tutoriales.' },
          { q: '¿Puede Qwen2-VL leer PDFs directamente?', a: 'No. Ningún modelo de visión local acepta entrada de PDF directamente. Convierte cada página del PDF a una imagen PNG o JPEG primero (usando pdf2image o pypdfium2), luego envía cada página como una solicitud de imagen separada. Para un PDF de 10 páginas envías 10 consultas de imagen y combinas los resultados.' },
          { q: '¿Cómo envío una imagen a Qwen2-VL mediante Ollama?', a: 'De dos formas. En modo interactivo (`ollama run qwen2-vl:7b`), escribe la ruta del archivo de imagen dentro del prompt — Ollama lo detecta y carga la imagen. A través de la API, haz un POST a /api/generate con un array `images` codificado en base64. La cadena base64 no debe incluir el prefijo `data:`.' },
          { q: '¿Qwen2-VL funciona completamente sin conexión?', a: 'Sí. Tras la descarga única del modelo, Qwen2-VL se ejecuta completamente en tu máquina — sin clave API ni cuenta en la nube. Ninguna imagen se sube a ningún lugar, lo que mantiene el procesamiento de documentos dentro de tu infraestructura. Consulta la [guía de configuración local de Qwen para el RGPD](/es/local-llms/qwen-local-gdpr-setup-guide-2026) para las implicaciones de cumplimiento.' },
          { q: '¿Cuántas imágenes puede procesar Qwen2-VL a la vez?', a: 'Hasta 8 imágenes por solicitud — la mayor capacidad de múltiples imágenes entre los modelos de visión locales. Esto lo hace ideal para comparar versiones de documentos, detectar diferencias o resumir un vídeo corto muestreado a un fotograma por segundo.' },
          { q: 'Qwen2-VL o Llama 3.2 Vision — ¿cuál debería elegir?', a: 'Elige Qwen2-VL para documentos en chino, japonés o coreano, escaneos de alta resolución o fuentes pequeñas — y porque el modelo de 7B cabe en 6 GB de VRAM frente a los 8 GB de Llama 3.2 Vision 11B. Elige Llama 3.2 Vision 11B para preguntas generales sobre fotos solo en inglés, donde los dos son comparables.' },
          { q: '¿Por qué los caracteres en mi salida de OCR son ilegibles?', a: 'Casi siempre es un escaneo de baja resolución. Qwen2-VL lee nativamente hasta 4096×4096, por lo que volver a escanear el documento a 150–300 DPI generalmente soluciona los caracteres ilegibles o ausentes. La entrada de baja calidad es la mayor causa de errores de OCR en cualquier modelo de visión local.' },
        ],
      },
    },
     schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Cómo ejecutar Qwen2-VL en local en 2026: OCR de documentos y visión',
       description: 'Ejecuta Qwen2-VL en local con ~6 GB de VRAM mediante Ollama: OCR, visión, pasos de instalación.',
       url: 'https://www.promptquorum.com/es/local-llms/run-qwen-vl-locally-2026',
       inLanguage: 'es',
       datePublished: '2026-05-22',
       dateModified: '2026-05-22',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
  },

  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: 'كيفية تشغيل Qwen2-VL محليًا في 2026: دليل OCR للمستندات والرؤية',
    seoTitle: 'تشغيل Qwen2-VL محليًا 2026: دليل OCR والرؤية',
    intro: 'Qwen2-VL هو نموذج الرؤية-اللغة المفتوح من Alibaba، ويعمل متغيره بحجم 7B محليًا بنحو 6 GB من VRAM عبر Ollama أو LM Studio. يقرأ المستندات ولقطات الشاشة والرسوم البيانية والصور، ويتفوق على جميع نماذج الرؤية المحلية الأخرى في OCR للصينية واليابانية والكورية. يغطي هذا الدليل اختيار النموذج والأجهزة والإعداد عبر Ollama وLM Studio واستخراج المستندات متعدد اللغات ومقارنة Qwen2-VL بـ LLaVA وLlama 3.2 Vision.',
    metaDescription: 'شغّل Qwen2-VL محليًا بـ ~6 GB من VRAM عبر Ollama: التثبيت، OCR بالصينية واليابانية، الأسئلة عن الصور، والمقارنة بـ LLaVA.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون والمحللون الذين يحتاجون إلى OCR للمستندات دون اتصال وفهم الصور — خصوصًا للملفات بالصينية واليابانية واللغات المختلطة — دون إرسال البيانات إلى واجهات API سحابية',
    primaryTerm: 'تشغيل Qwen2-VL محليًا',
    targetKeywords: [
      'تشغيل Qwen2-VL محليًا 2026',
      'إعداد Qwen2-VL Ollama',
      'OCR المستندات Qwen2-VL',
      'نموذج رؤية محلي متعدد اللغات',
      'Qwen2-VL مقابل Llama 3.2 Vision',
      'OCR صيني ياباني LLM محلي',
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
    ctaText: 'انضم إلى قائمة انتظار PromptQuorum ←',
    leadAnswerBlock: '**نفّذ `ollama pull qwen2-vl:7b` على أي جهاز بسعة 8 GB من VRAM لقراءة المستندات بالصينية واليابانية واللغات المختلطة محليًا.** Qwen2-VL هو أقوى نموذج رؤية مفتوح لـ OCR متعدد اللغات — تُعالَج كل صورة على جهازك، دون رفع إلى السحابة.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أشغّل Qwen2-VL محليًا في 2026؟',
        answer: 'ثبّت Ollama، ونفّذ `ollama pull qwen2-vl:7b`، ثم `ollama run qwen2-vl:7b` واكتب مسار ملف صورة في أمرك. للواجهة الرسومية، استخدم LM Studio: ابحث عن "Qwen2-VL 7B"، ونزّل متغير GGUF Q4_K_M، وأرفق الصور بأيقونة الصورة. يحتاج Qwen2-VL 7B إلى ~6 GB من VRAM ويقرأ المستندات ولقطات الشاشة والرسوم البيانية دون اتصال بالكامل.',
        bullets: [
          'الحد الأدنى من الأجهزة: 8 GB من VRAM (RTX 4060، RTX 3060 12 GB) أو Apple Silicon بذاكرة موحدة 16 GB',
          'تنزيل النموذج: ollama pull qwen2-vl:7b (يُنزّل Qwen2-VL 7B Q4_K_M ~6 GB)',
          'إرفاق الصور: اكتب مسار الملف في الأمر (CLI) أو أرسل مصفوفة images بصيغة base64 (API)',
          'نقاط القوة: OCR المستندات بالصينية واليابانية والكورية — يتفوق على LLaVA وLlama 3.2 Vision',
          'الأحجام: 2B (~3 GB VRAM)، 7B (~6 GB، موصى به)، 72B (~48 GB)',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'لماذا يتصدر Qwen2-VL في OCR متعدد اللغات', anchor: '#why-qwen-vl' },
      { label: 'اختيار حجم نموذج Qwen2-VL', anchor: '#choose-model' },
      { label: 'متطلبات الأجهزة', anchor: '#hardware' },
      { label: 'الإعداد عبر Ollama', anchor: '#ollama-setup' },
      { label: 'الإعداد عبر LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR المستندات للملفات CJK', anchor: '#ocr-use-case' },
      { label: 'الأسئلة عن الصور ولقطات الشاشة والرسوم البيانية', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL مقابل LLaVA مقابل Llama 3.2 Vision', anchor: '#vs-other-models' },
      { label: 'الاتصال بـ PromptQuorum', anchor: '#promptquorum' },
      { label: 'حل المشكلات', anchor: '#troubleshooting' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**يعمل Qwen2-VL 7B محليًا بـ ~6 GB من VRAM (Q4)** عبر Ollama — أمر واحد `ollama pull qwen2-vl:7b`، بلا تحويل نموذج.',
          '**أفضل نموذج محلي لـ OCR متعدد اللغات**: يساوي Qwen2-VL نموذج MiniCPM-V 2.6 ويتفوق على LLaVA 1.6 وLlama 3.2 Vision 11B في النص الصيني والياباني والكوري.',
          '**دقة أصلية تصل إلى 4096×4096** — يقرأ المسوحات عالية الدقة دون تصغير، بخلاف LLaVA 1.6 (672×672) أو Llama 3.2 Vision (1120×1120).',
          '**ثلاثة أحجام**: 2B (~3 GB VRAM، سريع وأساسي)، 7B (~6 GB، موصى به لمعظم المستخدمين)، 72B (~48 GB، يتصدر معايير المصدر المفتوح).',
          '**يقبل حتى 8 صور لكل طلب** — أعلى سعة لصور متعددة بين نماذج الرؤية المحلية.',
          '**لا إدخال مباشر لـ PDF**: حوّل صفحات PDF إلى PNG أو JPEG أولًا ثم أرسل كل صفحة كصورة منفصلة.',
          '**100% دون اتصال بعد التنزيل**: بلا مفتاح API، بلا رفع إلى السحابة — يبقى كل مستند على جهازك.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'لماذا يتصدر Qwen2-VL نماذج الرؤية المحلية في OCR متعدد اللغات',
        content: [
          '**Qwen2-VL هو أقوى نموذج رؤية محلي لـ OCR المستندات متعدد اللغات — يساوي أو يتفوق على أي نموذج آخر يعمل على أجهزة استهلاكية عند قراءة النص بالصينية واليابانية والكورية والإنجليزية.** درّبته Alibaba على مجموعات نصية ضخمة من المستندات متعددة اللغات، مما يفسّر تفوّقه على LLaVA 1.6 وLlama 3.2 Vision 11B في استخراج النص غير الإنجليزي.',
          'يدعم Qwen2-VL دقة إدخال ديناميكية تصل إلى 4096×4096 بكسل. لدى LLaVA 1.6 حد 672×672 وLlama 3.2 Vision حد 1120×1120، لذا يصغّر كلاهما المسوحات عالية الدقة قبل قراءتها. يقرأ Qwen2-VL مسحًا A4 بدقة 300 DPI بالدقة الأصلية — السبب الرئيسي لأن دقة OCR لديه أعلى في المستندات الكثيفة والأحرف CJK الصغيرة.',
          'تشغيل Qwen2-VL محليًا يكلّف 0 € لكل صورة بعد الأجهزة. تتقاضى واجهة رؤية سحابية نحو $0.01–0.03 لكل صورة؛ بـ 10,000 صورة شهريًا يعني ذلك $100–300 مُوفَّرة — ولا يغادر أي مستند جهازك أبدًا.',
          'استخدم Qwen2-VL إذا كانت مستنداتك تحتوي على نص CJK أو خطوط صغيرة أو مسوحات عالية الدقة. إذا كان عملك مجرد أسئلة عن صور بالإنجليزية، فإن Llama 3.2 Vision 11B خيار جيد بالمثل.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL هو أكثر نماذج الرؤية المحلية دقةً لـ OCR المستندات بالصينية واليابانية والكورية، ويعمل بـ ~6 GB من VRAM عبر Ollama.' },
          { type: 'plain-terms', text: 'نموذج الرؤية-اللغة يقرأ الصور بدلًا من توليدها. تعطي Qwen2-VL صورة أو صفحة ممسوحة، فيعيد نصًا — وصفًا أو إجابة أو المحتوى المستخرَج.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'اختيار حجم نموذج Qwen2-VL',
        content: [
          'يأتي Qwen2-VL بثلاثة أحجام. اختر حسب VRAM لديك والدقة التي تحتاجها. جميع الأحجام متوفرة على [Hugging Face (Qwen)](https://huggingface.co/Qwen) وفي مكتبة نماذج Ollama بوسوم صريحة.',
        ],
        rows: [
          { 'Modelo': 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Etiqueta Ollama': 'qwen2-vl:2b', 'Ideal para': 'أوصاف سريعة، OCR بسيط، حواسيب محمولة بـ VRAM قليل' },
          { 'Modelo': 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Etiqueta Ollama': 'qwen2-vl:7b', 'Ideal para': 'موصى به — OCR المستندات، الأسئلة عن الصور، الرسوم البيانية' },
          { 'Modelo': 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Etiqueta Ollama': 'qwen2-vl:72b', 'Ideal para': 'أقصى جودة، Apple Silicon 64 GB+ أو بطاقات رسوم متعددة' },
        ],
        columns: ['Modelo', 'VRAM (Q4)', 'Etiqueta Ollama', 'Ideal para'],
        tableFormat: true,
        note: 'Q4_K_M هو التكميم الموصى به — أفضل نسبة جودة-حجم. ينبغي لمعظم المستخدمين البدء بـ Qwen2-VL 7B: يتسع في بطاقة رسوم بسعة 8 GB ويغطي جميع حالات الاستخدام في هذا الدليل. انتقل إلى نموذج 2B فقط عندما يكون VRAM أقل من 6 GB. راجع [تكميم نماذج LLM موضّحًا](/ar/local-llms/llm-quantization-explained) لمعرفة كيف يؤثر Q4 في الجودة.',
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة لـ Qwen2-VL',
        items: [
          '**الحد الأدنى (Qwen2-VL 7B Q4)**: بطاقة رسوم بسعة 8 GB من VRAM — NVIDIA RTX 4060 أو RTX 3060 12 GB أو RTX 2080.',
          '**خيار VRAM القليل (Qwen2-VL 2B Q4)**: 4 GB من VRAM — يعمل على معظم بطاقات رسوم الحواسيب المحمولة وعلى Apple Silicon المدمج.',
          '**أقصى جودة (Qwen2-VL 72B Q4)**: ~48 GB — Apple Silicon بذاكرة موحدة 64 GB+، أو بطاقتا رسوم بسعة 24 GB.',
          '**Apple Silicon**: شريحة M-series بذاكرة موحدة 16 GB+ تشغّل نموذج 7B دون مشكلات؛ يحتاج 72B إلى 64 GB+.',
          '**RAM النظام**: 16 GB كحد أدنى إلى جانب استدلال بطاقة الرسوم؛ 32 GB موصى بها مع بيئة تطوير كاملة مفتوحة.',
          '**التخزين**: ~6 GB مساحة قرص حرة لـ Qwen2-VL 7B Q4 (GGUF)، ~30 GB لـ 72B.',
        ],
        callouts: [
          { type: 'note', text: 'تعمل نماذج الرؤية أبطأ بنحو 30–60% من نموذج نصي فقط بالعدد نفسه من المعاملات. يعالج مشفّر الرؤية الصورة كاملةً عند أول token؛ ثم يُولَّد النص بسرعة شبه طبيعية. احجز VRAM لكل من المشفّر ونموذج اللغة.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'إعداد Qwen2-VL مع Ollama',
        content: [
          'Ollama هو أسرع طريقة لتشغيل Qwen2-VL محليًا. ينزّل النموذج، ويدير التكميم، ويكشف واجهة API على localhost:11434. ثبّته من [ollama.com](https://ollama.com/download) — أو، إن كنت جديدًا على هذا، ابدأ بـ [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'ثبّت Ollama', whyItMatters: 'يدير Ollama تنزيل النموذج وتنسيق GGUF وواجهة API المحلية. متاح لـ macOS وLinux وWindows.' },
          { title: 'نزّل Qwen2-VL بوسم حجم صريح', whyItMatters: 'استخدم qwen2-vl:7b. الوسم qwen2-vl دون تحديد قد يُحل إلى حجم مختلف — حدّد دائمًا 2b أو 7b أو 72b للحصول على النموذج الذي يستهدفه هذا الدليل.' },
          { title: 'شغّل النموذج وأرفق صورة', whyItMatters: 'في الوضع التفاعلي، اكتب مسار ملف الصورة داخل الأمر. يكتشف Ollama المسار ويحمّل الصورة في مشفّر الرؤية.' },
          { title: 'أرسل الصور عبر API', whyItMatters: 'تقبل نقطة النهاية /api/generate مصفوفة images مرمّزة بـ base64. هكذا ترسل التطبيقات — وPromptQuorum — الصور برمجيًا.' },
          { title: 'تحقق من OCR متعدد اللغات', whyItMatters: 'أرسل مسح مستند صيني أو ياباني وتأكد من تطابق النص المستخرَج. يثبت هذا أن مشفّر الرؤية والمُرمِّز يتعاملان مع نص CJK بشكل صحيح قبل البناء عليه.' },
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
          { type: 'warning', text: 'أرسل صور المستندات بدقة 150 DPI أو أعلى. يقرأ Qwen2-VL أصليًا حتى 4096×4096، لذا تحسّن المسوحات عالية الدقة الدقة مباشرة. بخلاف أمر نصي، جودة الصورة هي العامل الأهم في نتائج OCR — مسح ضبابي ينتج أحرفًا خاطئة مهما كان النموذج جيدًا.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'إعداد Qwen2-VL مع LM Studio',
        content: [
          'يشغّل LM Studio نموذج Qwen2-VL عبر واجهة رسومية دون أوامر CLI. وهو الطريقة الموصى بها لمستخدمي Windows وأي شخص يفضّل واجهة رسومية. نزّله من [lmstudio.ai](https://lmstudio.ai)، أو راجع [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio).',
        ],
        numberedItems: [
          { title: 'نزّل وثبّت LM Studio', whyItMatters: 'واجهة رسومية مجانية متعددة المنصات لاستدلال النماذج المحلية. لا تتطلب طرفية.' },
          { title: 'ابحث عن Qwen2-VL في متصفح النماذج', whyItMatters: 'ابحث عن "Qwen2-VL 7B" واختر متغير GGUF Q4_K_M. يعلّم LM Studio النماذج الداعمة للرؤية بأيقونة صورة.' },
          { title: 'حمّل النموذج وأرفق صورة', whyItMatters: 'انقر على أيقونة الصورة في حقل الإدخال لرفع صورة أو مسح. يمرّرها LM Studio إلى مشفّر الرؤية.' },
          { title: 'ابدأ الخادم المحلي', whyItMatters: 'زر "Start Server" يكشف واجهة API متوافقة مع OpenAI على localhost:1234. تستخدم طلبات الرؤية تنسيق محتوى image_url القياسي.' },
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
        note: 'يستخدم LM Studio وOllama تنسيقي صور مختلفين: يتبع LM Studio مخطط محتوى image_url الخاص بـ OpenAI (ببادئة data:)؛ ويستخدم Ollama مصفوفة images عُلوية بـ base64 خالص (بلا بادئة). اختر بيئة تشغيل واحدة واستخدم تنسيقها.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'OCR المستندات للملفات بالصينية واليابانية واللغات المختلطة',
        content: [
          '**يستخرج Qwen2-VL النص من المستندات بالصينية واليابانية والكورية واللغات المختلطة بدقة أعلى من أي نموذج رؤية محلي آخر.** تضمّنت بيانات تدريبه مجموعات نصية ضخمة من المستندات متعددة اللغات، ودقته الأصلية 4096×4096 تقرأ أحرف CJK الصغيرة التي يصغّرها LLaVA 1.6 وLlama 3.2 Vision ويفقدانها.',
          'النمط الأكثر موثوقية هو أمر استخراج محدد. اطلب بنية — "احفظ تخطيط الجدول"، "أعِد كل حقل بصيغة key: value" — بدلًا من "اقرأ هذا" الغامض. يتّبع Qwen2-VL تعليمات التنسيق بدقة، مما يجعل المخرجات قابلة للاستخدام دون معالجة لاحقة.',
        ],
        items: [
          '**استخراج نص بسيط**: "استخرج كل سطر نص من هذه الصورة. احفظ فواصل الأسطر وترتيب القراءة."',
          '**حقول منظمة**: "هذه فاتورة يابانية. أعِد المورّد والتاريخ والمجموع الفرعي والضريبة والإجمالي بصيغة أزواج key: value."',
          '**استخراج جداول**: "استخرج هذا الجدول بصيغة CSV. عامل الصف الأول كترويسة."',
          '**استخراج وترجمة في خطوة واحدة**: "استخرج النص الصيني من هذه الصورة ثم ترجمه إلى العربية. أظهر كليهما."',
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
          { type: 'important', text: 'تحقق دائمًا من الأرقام المستخرَجة مقابل المستند المصدر. قد تخطئ نماذج الرؤية المحلية — بما فيها Qwen2-VL — في قراءة رقم في مسح منخفض الجودة. عامل مخرجات OCR كمسودة للتأكيد، لا كقيمة نهائية، خصوصًا في الفواتير والمستندات المالية.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'لاستخراج نص من مستند CJK بـ Qwen2-VL، أرسل الصورة بدقة 150+ DPI بأمر محدد يطلب بنية، مثل "أعِد كل حقل بصيغة key: value".' },
          { type: 'plain-terms', text: 'OCR يعني تحويل صورة نص إلى نص قابل للتحرير. ينظر Qwen2-VL إلى صفحة ممسوحة ويكتب ما يراه — ويتعامل مع الأحرف الصينية واليابانية بنفس جودة الإنجليزية.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'الأسئلة عن الصور وتحليل لقطات الشاشة وقراءة الرسوم البيانية',
        content: [
          'إلى جانب OCR، يتعامل Qwen2-VL مع فهم الصور العام — وصف الصور والإجابة عن أسئلة حول لقطات الشاشة وقراءة الرسوم البيانية. وهو دقيق مع المدخلات الواضحة وأضعف مع المشاهد المزدحمة أو الغامضة.',
        ],
        items: [
          '**الأسئلة عن الصور**: اطرح أسئلة مفتوحة عن صورة — "ما الموجود في هذه الصورة؟"، "كم شخصًا يرتدي ملابس حمراء؟". Qwen2-VL 7B دقيق مع الصور الواضحة وأضعف مع المشاهد المزدحمة أو الغامضة.',
          '**تحليل لقطات الشاشة والواجهات**: يقرأ Qwen2-VL لقطات شاشة الواجهات وحوارات الأخطاء وحالات التطبيقات. للقطات الكود الكثيفة تحديدًا، دُرّب InternVL 2.5 بتركيز أكبر على تلك البيانات — استخدمه إذا كانت الواجهة والكود عبء عملك الرئيسي.',
          '**قراءة الرسوم البيانية والمخططات**: يصف Qwen2-VL بنية الرسوم البيانية واتجاهاتها جيدًا، لكن القيم العددية الدقيقة المستخرَجة من الرسوم غير موثوقة في أي نموذج رؤية محلي. تأكد من الأرقام الدقيقة مقابل البيانات الأساسية.',
          '**إطارات الفيديو**: يقبل Qwen2-VL إطارات متعددة كتسلسل — خذ نحو إطار واحد في الثانية وأرسل حتى 8 لتلخيص مقطع قصير.',
          '**مقارنة صور متعددة**: أرسل حتى 8 صور في طلب واحد لمقارنة الإصدارات أو رصد الفروق أو وصف مجموعة بالدُفعات.',
        ],
        callouts: [
          { type: 'tip', text: 'استخدم Qwen2-VL لـ OCR والمستندات متعددة اللغات والأسئلة العامة عن الصور. انتقل إلى InternVL 2.5 عندما يكون عبء عملك الرئيسي لقطات الكود أو الواجهة، أو إلى Moondream 2 عندما يكون لديك أقل من 4 GB من VRAM.' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL مقابل LLaVA مقابل Llama 3.2 Vision',
        content: [
          '**في OCR متعدد اللغات، يتفوق Qwen2-VL على LLaVA 1.6 ويساوي أو يتفوق على Llama 3.2 Vision 11B بـ VRAM أقل.** للأسئلة عن صور بالإنجليزية فقط، Llama 3.2 Vision 11B خيار قوي بالمثل. يبقى LLaVA 1.6 النموذج الأفضل توثيقًا إذا كنت تحتاج إلى موارد حل مشكلات من المجتمع.',
        ],
        rows: [
          { 'Modelo': 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'ممتاز', 'Resolución máx.': '4096×4096', 'Ideal para': 'OCR متعدد اللغات، مسوحات عالية الدقة' },
          { 'Modelo': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'جيد', 'Resolución máx.': '1120×1120', 'Ideal para': 'أسئلة عن صور بالإنجليزية، مستندات عامة' },
          { 'Modelo': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'متوسط', 'Resolución máx.': '672×672', 'Ideal para': 'أسئلة عامة، دعم مجتمعي' },
          { 'Modelo': 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': 'ممتاز', 'Resolución máx.': '1792×1792', 'Ideal para': 'OCR المستندات (موجّه للإنجليزية)' },
          { 'Modelo': 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': 'جيد', 'Resolución máx.': 'عالية', 'Ideal para': 'لقطات الكود والواجهة' },
        ],
        columns: ['Modelo', 'VRAM (Q4)', 'OCR / CJK', 'Resolución máx.', 'Ideal para'],
        tableFormat: true,
        note: 'تعمل الخمسة جميعًا عبر Ollama (InternVL 2.5 عبر بناءات مجتمعية). للتحليل الكامل لنماذج الرؤية المحلية — بما فيها Moondream 2 ومعيار استخراج الفواتير — راجع [مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026). إذا لم تكن متأكدًا، ابدأ بـ Qwen2-VL 7B: يغطي OCR والمستندات والأسئلة العامة بـ 6 GB من VRAM.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'ربط Qwen2-VL المحلي بـ PromptQuorum',
        content: [
          'يُوجّه PromptQuorum الأوامر بين نماذج متعددة. لاستخدام Qwen2-VL المحلي كوجهة توزيع للرؤية، وجّه نقطة نهاية LLM المحلي في PromptQuorum إلى خادم Ollama لديك. تبقى معالجة الصور حينها على أجهزتك، بينما تظل النماذج السحابية متاحة لمهام النص.',
          'هذه نقطة نهاية Ollama (متوافقة مع OpenAI)، منفصلة عن إعداد API الخاص بـ Anthropic المستخدم لـ Claude. يمكن أن يكون كلاهما نشطًا في آن واحد، مع توجيه PromptQuorum حسب نوع المهمة وحساسية البيانات.',
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
          { type: 'one-sentence', text: 'اربط PromptQuorum بـ Qwen2-VL المحلي بضبط OLLAMA_BASE_URL على http://localhost:11434/v1 وتوجيه نموذج الرؤية المحلي إلى qwen2-vl:7b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'حل مشكلات Qwen2-VL',
        items: [
          '**"unknown model" أو فشل التنزيل**: استخدم وسم حجم صريحًا — `ollama pull qwen2-vl:7b`، لا `qwen2-vl`. نفّذ `ollama list` لتأكيد الاسم المثبَّت.',
          '**الصورة تُتجاهَل ويستجيب النموذج كأنه لم تُرسَل أي صورة**: تأكد من أن مسار الملف صحيح وقابل للقراءة. في واجهة API الخاصة بـ Ollama، يجب أن تحتوي مصفوفة `images` على base64 خالص *دون* بادئة `data:` — بادئة `data:` لتنسيق LM Studio وOpenAI فقط.',
          '**أحرف CJK غير مقروءة أو غائبة**: المسح بدقة منخفضة جدًا. أعد المسح بدقة 150–300 DPI. يقرأ Qwen2-VL حتى 4096×4096، لذا تحسّن دقة الإدخال الأعلى دقة الصينية واليابانية مباشرة.',
          '**CUDA نفاد الذاكرة (out of memory)**: النموذج لا يتسع في VRAM لديك. انتقل إلى Qwen2-VL 2B (~3 GB) أو شغّله على Apple Silicon، الذي يشارك الذاكرة الموحدة بين CPU وبطاقة الرسوم.',
          '**أول استجابة بطيئة، ثم سريعة**: هذا طبيعي. يعالج مشفّر الرؤية الصورة كاملةً عند أول token؛ ثم يُولَّد النص بسرعة شبه طبيعية.',
          '**أرقام خاطئة مستخرَجة من فاتورة أو رسم بياني**: تخطئ نماذج الرؤية المحلية في قراءة الأرقام في المدخلات المشوّشة. ارفع جودة المسح وتحقق دائمًا من المخرجات العددية مقابل المصدر.',
          '**ملف PDF لا يُحمَّل**: لا يقبل أي نموذج رؤية محلي PDF مباشرة. حوّل الصفحات إلى PNG أو JPEG أولًا (بـ pdf2image أو pypdfium2)، ثم أرسل كل صفحة كصورة منفصلة.',
          '**LM Studio يعرض "failed to load model"**: إمّا VRAM غير كافٍ، أو نزّلت GGUF بلا دعم رؤية. تأكد من أن بطاقة النموذج تشير إلى دعم الرؤية واختر متغير Q4_K_M.',
        ],
        callouts: [
          { type: 'tip', text: 'نفّذ `ollama ps` لرؤية النماذج المحمّلة في VRAM وكم تستهلك كل واحدة من الذاكرة. استخدم `ollama stop qwen2-vl:7b` لتفريغ النموذج قبل الانتقال إلى 72B.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[كيفية تشغيل Qwen 3 محليًا](/ar/local-llms/run-qwen-locally-guide-2026) — المقال المكمّل لنموذج النص: إعداد Qwen 3 مع Ollama وLM Studio.',
          '[مقارنة نماذج الرؤية المحلية: LLaVA، Llama 3.2 Vision، MiniCPM-V](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — التحليل الكامل لكل نموذج رؤية محلي، مع معايير.',
          '[نماذج LLM المحلية متعددة الوسائط: الرؤية والصوت والنص](/ar/local-llms/multimodal-local-llms) — نظرة عامة أوسع على تشغيل النماذج متعددة الوسائط محليًا.',
          '[Qwen مقابل Llama مقابل Mistral](/ar/local-llms/qwen-vs-llama-vs-mistral) — كيف تقارن نماذج Qwen النصية بالبدائل.',
          '[دليل أجهزة نماذج LLM المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) — متطلبات VRAM وبطاقة الرسوم للاستدلال المحلي.',
          '[عرض جميع أدلة نماذج LLM المحلية](/ar/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'ما الحد الأدنى من الأجهزة لتشغيل Qwen2-VL محليًا؟', a: 'يحتاج Qwen2-VL 7B بتكميم Q4_K_M إلى 8 GB من VRAM (RTX 4060 أو RTX 3060 12 GB أو RTX 2080). يعمل Qwen2-VL 2B الأصغر بـ 4 GB. يحتاج نموذج 72B إلى ~48 GB — Apple Silicon بذاكرة موحدة 64 GB+ أو بطاقتي رسوم بسعة 24 GB. يشغّل Apple Silicon بذاكرة موحدة 16 GB+ نموذج 7B دون مشكلات.' },
          { q: 'هل Qwen2-VL أفضل من LLaVA لـ OCR؟', a: 'نعم، خصوصًا للنص غير الإنجليزي. يساوي Qwen2-VL نموذج MiniCPM-V 2.6 ويتفوق على LLaVA 1.6 وLlama 3.2 Vision 11B في OCR الصينية واليابانية والكورية. دقته الأصلية 4096×4096 تقرأ المسوحات عالية الدقة دون تصغير، بينما لدى LLaVA 1.6 حد 672×672. لا يزال لـ LLaVA أكبر مجتمع وأكثر دروس.' },
          { q: 'هل يمكن لـ Qwen2-VL قراءة ملفات PDF مباشرة؟', a: 'لا. لا يقبل أي نموذج رؤية محلي إدخال PDF مباشرة. حوّل كل صفحة من PDF إلى صورة PNG أو JPEG أولًا (باستخدام pdf2image أو pypdfium2)، ثم أرسل كل صفحة كطلب صورة منفصل. لـ PDF من 10 صفحات ترسل 10 استعلامات صور وتدمج النتائج.' },
          { q: 'كيف أرسل صورة إلى Qwen2-VL عبر Ollama؟', a: 'بطريقتين. في الوضع التفاعلي (`ollama run qwen2-vl:7b`)، اكتب مسار ملف الصورة داخل الأمر — يكتشفه Ollama ويحمّل الصورة. عبر API، أرسل طلب POST إلى /api/generate بمصفوفة `images` مرمّزة بـ base64. يجب ألا تتضمن سلسلة base64 بادئة `data:`.' },
          { q: 'هل يعمل Qwen2-VL دون اتصال بالكامل؟', a: 'نعم. بعد التنزيل الواحد للنموذج، يعمل Qwen2-VL بالكامل على جهازك — بلا مفتاح API ولا حساب سحابي. لا تُرفع أي صورة إلى أي مكان، مما يُبقي معالجة المستندات داخل بنيتك التحتية. راجع [دليل إعداد Qwen المحلي لـ GDPR](/ar/local-llms/qwen-local-gdpr-setup-guide-2026) لتداعيات الامتثال.' },
          { q: 'كم صورة يمكن لـ Qwen2-VL معالجتها في آن واحد؟', a: 'حتى 8 صور لكل طلب — أعلى سعة لصور متعددة بين نماذج الرؤية المحلية. هذا يجعله مثاليًا لمقارنة إصدارات المستندات أو رصد الفروق أو تلخيص فيديو قصير مُعاين بإطار واحد في الثانية.' },
          { q: 'Qwen2-VL أم Llama 3.2 Vision — أيهما أختار؟', a: 'اختر Qwen2-VL للمستندات بالصينية أو اليابانية أو الكورية، أو المسوحات عالية الدقة، أو الخطوط الصغيرة — ولأن نموذج 7B يتسع في 6 GB من VRAM مقابل 8 GB لـ Llama 3.2 Vision 11B. اختر Llama 3.2 Vision 11B للأسئلة العامة عن صور بالإنجليزية فقط، حيث يكون الاثنان متقاربين.' },
          { q: 'لماذا تكون الأحرف في مخرجات OCR لدي غير مقروءة؟', a: 'يكون السبب دائمًا تقريبًا مسحًا بدقة منخفضة. يقرأ Qwen2-VL أصليًا حتى 4096×4096، لذا فإن إعادة مسح المستند بدقة 150–300 DPI تحل عادةً الأحرف غير المقروءة أو الغائبة. الإدخال منخفض الجودة هو أكبر سبب لأخطاء OCR في أي نموذج رؤية محلي.' },
        ],
      },
    },
     schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'كيفية تشغيل Qwen2-VL محليًا في 2026: OCR المستندات والرؤية',
       description: 'شغّل Qwen2-VL محليًا بـ ~6 GB من VRAM عبر Ollama: OCR، الرؤية، خطوات التثبيت.',
       url: 'https://www.promptquorum.com/ar/local-llms/run-qwen-vl-locally-2026',
       inLanguage: 'ar',
       datePublished: '2026-05-22',
       dateModified: '2026-05-22',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
  },

  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: 'Como executar o Qwen2-VL localmente em 2026: guia de OCR de documentos e visão',
    seoTitle: 'Executar o Qwen2-VL local 2026: guia de OCR e visão',
    intro: 'O Qwen2-VL é o modelo visão-linguagem aberto da Alibaba, e sua variante de 7B executa localmente com aproximadamente 6 GB de VRAM via Ollama ou LM Studio. Lê documentos, capturas de tela, gráficos e fotos, e supera todos os outros modelos de visão locais em OCR de chinês, japonês e coreano. Este guia cobre a seleção do modelo, hardware, configuração com Ollama e LM Studio, extração de documentos multilíngue e a comparação do Qwen2-VL com LLaVA e Llama 3.2 Vision.',
    metaDescription: 'Execute o Qwen2-VL localmente com ~6 GB de VRAM via Ollama: instalação, OCR em chinês e japonês, perguntas sobre imagens e comparação com LLaVA.',
    publishDate: '2026-05-22',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e analistas que precisam de OCR de documentos offline e compreensão de imagens — especialmente para arquivos em chinês, japonês e idiomas mistos — sem enviar dados para APIs na nuvem',
    primaryTerm: 'executar Qwen2-VL localmente',
    ctaText: 'Entrar na lista de espera do PromptQuorum →',
    leadAnswerBlock: '**Execute `ollama pull qwen2-vl:7b` em qualquer máquina com 8 GB de VRAM para ler documentos em chinês, japonês e idiomas mistos localmente.** O Qwen2-VL é o modelo de visão aberto mais poderoso para OCR multilíngue — cada imagem é processada na sua máquina, sem upload para a nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Como executo o Qwen2-VL localmente em 2026?', // VERIFY
        answer: 'Instale o Ollama, execute `ollama pull qwen2-vl:7b`, depois `ollama run qwen2-vl:7b` e digite o caminho de um arquivo de imagem no seu prompt. Para uma interface gráfica, use o LM Studio: busque "Qwen2-VL 7B", baixe a variante GGUF Q4_K_M e anexe imagens pelo ícone de imagem. O Qwen2-VL 7B precisa de ~6 GB de VRAM e lê documentos, capturas de tela e gráficos totalmente offline.', // VERIFY
        bullets: [
          'Hardware mínimo: 8 GB de VRAM (RTX 4060, RTX 3060 12 GB) ou Apple Silicon com 16 GB de memória unificada', // VERIFY
          'Baixar modelo: ollama pull qwen2-vl:7b (baixa o Qwen2-VL 7B Q4_K_M ~6 GB)', // VERIFY
          'Anexar imagens: digite o caminho do arquivo no prompt (CLI) ou envie um array base64 de images (API)', // VERIFY
          'Pontos fortes: OCR de documentos em chinês, japonês e coreano — supera o LLaVA e o Llama 3.2 Vision', // VERIFY
          'Tamanhos: 2B (~3 GB de VRAM), 7B (~6 GB, recomendado), 72B (~48 GB)', // VERIFY
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: 'Principais conclusões', anchor: '#key-takeaways' },
      { label: 'Por que Qwen2-VL para visão local', anchor: '#why-qwen2-vl' },
      { label: 'Tamanhos de modelo e hardware', anchor: '#model-sizes' },
      { label: 'Configuração com Ollama', anchor: '#ollama-setup' },
      { label: 'Configuração com LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR de documentos multilíngue', anchor: '#multilingual-ocr' },
      { label: 'Qwen2-VL vs LLaVA vs Llama 3.2 Vision', anchor: '#comparison' },
      { label: 'Uso com API', anchor: '#api-usage' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL 7B requer ~6 GB de VRAM** — executa em uma RTX 3060 8 GB ou qualquer chip Apple M com 16 GB de memória unificada.',
          '**Melhor OCR CJK local**: o Qwen2-VL supera o LLaVA e o Llama 3.2 Vision em extração de texto em chinês, japonês e coreano.',
          '**Suporta até 8 imagens por solicitação** — ideal para comparar versões de documentos ou resumir vídeos curtos.',
          '**Resolução nativa de 4096×4096** — lê fontes pequenas e documentos densos que outros modelos erram.',
          '**Dois caminhos de acesso**: Ollama (CLI, API) ou LM Studio (GUI, sem CLI).',
        ],
      },
      faqSection: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Como executo o Qwen2-VL localmente em 2026?', a: 'Instale o Ollama, execute `ollama pull qwen2-vl:7b`, depois `ollama run qwen2-vl:7b` e escreva um caminho de arquivo de imagem no seu prompt. Para interface gráfica, use o LM Studio: pesquise "Qwen2-VL 7B", baixe a variante GGUF Q4_K_M e anexe imagens com o ícone de imagem.' },
          { q: 'Qual hardware preciso para o Qwen2-VL 7B?', a: 'Mínimo: 8 GB de VRAM (RTX 4060, RTX 3060 12 GB) ou Apple Silicon com 16 GB de memória unificada. O modelo Q4_K_M usa ~6,2 GB de VRAM.' },
          { q: 'O Qwen2-VL é melhor que o LLaVA para OCR em chinês?', a: 'Sim. O Qwen2-VL foi pré-treinado em grandes corpora CJK e processa texto em chinês, japonês e coreano com muito mais precisão do que o LLaVA. Para documentos apenas em inglês, os dois são comparáveis.' },
          { q: 'Quantas imagens o Qwen2-VL pode processar de uma vez?', a: 'Até 8 imagens por solicitação — a maior capacidade de múltiplas imagens entre os modelos de visão locais. Ideal para comparar versões de documentos, detectar diferenças ou resumir um vídeo curto amostrado a um quadro por segundo.' },
          { q: 'Qwen2-VL ou Llama 3.2 Vision — qual devo escolher?', a: 'Escolha o Qwen2-VL para documentos em chinês, japonês ou coreano, digitalizações de alta resolução ou fontes pequenas — e porque o modelo de 7B cabe em 6 GB de VRAM vs 8 GB do Llama 3.2 Vision 11B. Escolha o Llama 3.2 Vision 11B para perguntas gerais sobre fotos apenas em inglês.' },
          { q: 'Por que os caracteres na minha saída de OCR são ilegíveis?', a: 'Quase sempre é uma digitalização de baixa resolução. O Qwen2-VL lê nativamente até 4096×4096, então redigitalizar o documento a 150–300 DPI geralmente resolve caracteres ilegíveis ou ausentes.' },
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Como executar o Qwen2-VL localmente em 2026: OCR de documentos e visão',
      description: 'Execute o Qwen2-VL localmente com ~6 GB de VRAM via Ollama: OCR, visão, etapas de instalação.',
      url: 'https://www.promptquorum.com/pt/local-llms/run-qwen-vl-locally-2026',
      inLanguage: 'pt-BR',
      datePublished: '2026-05-22',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
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
  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2026-11-22',
    theme: 'Advanced Techniques',
    title: '2026년 Qwen2-VL 로컬 실행 방법: 문서 OCR 및 비전 가이드',
    seoTitle: 'Qwen2-VL 로컬 실행 2026: OCR 및 비전 설정 가이드',
    intro: 'Qwen2-VL은 Alibaba의 오픈 비전-언어 모델로, 7B 변형은 Ollama 또는 LM Studio를 통해 약 6 GB의 VRAM으로 로컬에서 실행됩니다. 문서, 스크린샷, 차트, 사진을 읽을 수 있으며, 중국어·일본어·한국어 OCR에서 다른 모든 로컬 비전 모델을 앞섭니다. 이 가이드는 모델 선택, 하드웨어, Ollama 및 LM Studio 설정, 다국어 문서 추출, 그리고 Qwen2-VL과 LLaVA 및 Llama 3.2 Vision의 비교를 다룹니다.',
    metaDescription: 'Ollama를 통해 약 6 GB VRAM으로 Qwen2-VL을 로컬 실행: 설정 단계, 중국어·일본어 문서 OCR, 이미지 Q&A, LLaVA 및 Llama 3.2 Vision 대비 성능 비교.',
    publishDate: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    audience: '클라우드 API에 데이터를 전송하지 않고 오프라인으로 문서 OCR 및 이미지 이해가 필요한 개발자 및 분석가 — 특히 중국어, 일본어, 혼합 언어 파일을 다루는 분들',
    primaryTerm: 'Qwen2-VL 로컬 실행',
    targetKeywords: [
      'Qwen2-VL 로컬 실행 2026',
      'Qwen2-VL Ollama 설정',
      'Qwen2-VL 문서 OCR',
      '로컬 다국어 비전 모델',
      'Qwen2-VL vs Llama 3.2 Vision',
      '중국어 일본어 OCR 로컬 LLM',
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
      'Apple Silicon (통합 메모리)',
    ],
    ctaText: 'PromptQuorum 대기자 명단 등록 →',
    leadAnswerBlock: '**VRAM이 8 GB인 모든 기기에서 `ollama pull qwen2-vl:7b`를 실행하면 중국어, 일본어, 혼합 언어 문서를 로컬에서 읽을 수 있습니다.** Qwen2-VL은 다국어 OCR에 가장 강력한 오픈 비전 모델로, 모든 이미지가 클라우드에 업로드되지 않고 사용자 기기에서 처리됩니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년에 Qwen2-VL을 로컬에서 실행하려면 어떻게 해야 합니까?',
        answer: 'Ollama를 설치한 후 `ollama pull qwen2-vl:7b`를 실행하고, 이어서 `ollama run qwen2-vl:7b`를 실행한 뒤 프롬프트에 이미지 파일 경로를 입력하십시오. GUI를 선호하시면 LM Studio를 사용하여 "Qwen2-VL 7B"를 검색하고 Q4_K_M GGUF 빌드를 다운로드한 후 이미지 아이콘으로 이미지를 첨부하십시오. Qwen2-VL 7B는 약 6 GB의 VRAM이 필요하며 문서, 스크린샷, 차트를 완전 오프라인으로 읽습니다.',
        bullets: [
          '최소 하드웨어: 8 GB VRAM (RTX 4060, RTX 3060 12 GB) 또는 16 GB 통합 메모리의 Apple Silicon',
          '모델 다운로드: ollama pull qwen2-vl:7b (Qwen2-VL 7B Q4_K_M ~6 GB 다운로드)',
          '이미지 첨부: 프롬프트에 파일 경로 입력 (CLI) 또는 base64 images 배열 전송 (API)',
          '최적 용도: 중국어, 일본어, 한국어 문서 OCR — LLaVA 및 Llama 3.2 Vision 대비 우수',
          '크기: 2B (~3 GB VRAM), 7B (~6 GB, 권장), 72B (~48 GB)',
        ],
        updatedDate: '2026-05-22',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: 'Qwen2-VL이 다국어 OCR에서 앞서는 이유', anchor: '#why-qwen-vl' },
      { label: 'Qwen2-VL 모델 크기 선택', anchor: '#choose-model' },
      { label: '하드웨어 요구 사항', anchor: '#hardware' },
      { label: 'Ollama 설정', anchor: '#ollama-setup' },
      { label: 'LM Studio 설정', anchor: '#lm-studio-setup' },
      { label: 'CJK 파일 문서 OCR', anchor: '#ocr-use-case' },
      { label: '이미지 Q&A, 스크린샷, 차트', anchor: '#other-use-cases' },
      { label: '모델 비교: Qwen2-VL vs LLaVA vs Llama 3.2 Vision', anchor: '#vs-other-models' },
      { label: 'PromptQuorum 연결', anchor: '#promptquorum' },
      { label: '문제 해결', anchor: '#troubleshooting' },
      { label: '관련 자료', anchor: '#related-reading' },
      { label: 'FAQ', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL 7B는 Ollama를 통해 약 6 GB의 VRAM (Q4)으로 로컬 실행 가능** — `ollama pull qwen2-vl:7b` 명령 하나로 실행되며 모델 변환이 필요 없습니다.',
          '**다국어 OCR에 최적인 로컬 모델**: Qwen2-VL은 MiniCPM-V 2.6과 동등하며, 중국어·일본어·한국어 텍스트에서 LLaVA 1.6 및 Llama 3.2 Vision 11B를 능가합니다.',
          '**4096×4096까지 네이티브 해상도 지원** — LLaVA 1.6 (672×672) 또는 Llama 3.2 Vision (1120×1120)과 달리 다운샘플링 없이 고해상도 스캔을 읽습니다.',
          '**세 가지 크기**: 2B (~3 GB VRAM, 빠르고 기본적), 7B (~6 GB, 대부분의 사용자에게 권장), 72B (~48 GB, 오픈 소스 벤치마크 최상위).',
          '**요청당 최대 8개의 이미지 처리** — 로컬 비전 모델 중 가장 높은 다중 이미지 처리 용량.',
          '**직접 PDF 입력 불가**: PDF 페이지를 PNG 또는 JPEG로 먼저 변환한 후 각 페이지를 별도 이미지로 전송해야 합니다.',
          '**다운로드 후 100% 오프라인**: API 키 불필요, 클라우드 업로드 없음 — 모든 문서가 사용자 기기에 보관되어 GDPR 데이터 전송 범위에서 AI 레이어가 제외됩니다.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Qwen2-VL이 다국어 OCR에서 로컬 비전 모델을 선도하는 이유',
        content: [
          '**Qwen2-VL은 다국어 문서 OCR을 위한 가장 강력한 로컬 비전 모델로, 소비자 하드웨어에서 실행되는 다른 모든 모델과 동등하거나 능가하여 중국어, 일본어, 한국어, 영어 텍스트를 읽습니다.** Alibaba는 대규모 다국어 문서 코퍼스로 이 모델을 훈련했기 때문에 비영어 텍스트 추출에서 LLaVA 1.6 및 Llama 3.2 Vision 11B를 능가합니다.',
          'Qwen2-VL은 최대 4096×4096 픽셀의 동적 입력 해상도를 지원합니다. LLaVA 1.6은 672×672, Llama 3.2 Vision은 1120×1120으로 제한되어 고해상도 스캔을 읽기 전에 다운샘플링합니다. Qwen2-VL은 300 DPI A4 스캔을 네이티브 해상도로 읽어냅니다 — 이것이 고밀도 문서와 작은 CJK 문자에서 OCR 정확도가 더 높은 주된 이유입니다.',
          'Qwen2-VL을 로컬로 실행하는 비용은 하드웨어 이후 이미지당 €0입니다. 클라우드 비전 API는 이미지당 약 $0.01–0.03을 청구하며, 월 10,000개의 이미지 처리 시 $100–300을 절약할 수 있고, 어떤 문서도 기기를 벗어나지 않습니다.',
          'CJK 텍스트, 작은 폰트, 또는 고해상도 스캔이 포함된 문서가 있다면 Qwen2-VL을 사용하십시오. 영어 전용 사진 Q&A라면 Llama 3.2 Vision 11B도 동등하게 좋은 선택입니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL은 Ollama를 통해 약 6 GB의 VRAM으로 실행되는 중국어, 일본어, 한국어 문서 OCR에 가장 정확한 로컬 비전 모델입니다.' },
          { type: 'plain-terms', text: '비전-언어 모델은 이미지를 생성하는 대신 이미지를 읽습니다. Qwen2-VL에 사진이나 스캔된 페이지를 제공하면 텍스트를 반환합니다 — 설명, 답변, 또는 추출된 내용을.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen2-VL 모델 크기 선택',
        content: [
          'Qwen2-VL은 세 가지 크기로 제공됩니다. VRAM과 필요한 정확도에 따라 선택하십시오. 모든 크기는 [Hugging Face (Qwen)](https://huggingface.co/Qwen)과 명시적 태그가 있는 Ollama 모델 라이브러리에서 사용할 수 있습니다.',
        ],
        rows: [
          { Model: 'Qwen2-VL 2B Q4', 'VRAM (Q4)': '~3 GB', 'Ollama tag': 'qwen2-vl:2b', 'Best For': '빠른 캡션, 간단한 OCR, 저 VRAM 노트북' },
          { Model: 'Qwen2-VL 7B Q4', 'VRAM (Q4)': '~6 GB', 'Ollama tag': 'qwen2-vl:7b', 'Best For': '권장 — 문서 OCR, 이미지 Q&A, 차트' },
          { Model: 'Qwen2-VL 72B Q4', 'VRAM (Q4)': '~48 GB', 'Ollama tag': 'qwen2-vl:72b', 'Best For': '최고 품질, Apple Silicon 64 GB 이상 또는 멀티 GPU' },
        ],
        columns: ['Model', 'VRAM (Q4)', 'Ollama tag', 'Best For'],
        tableFormat: true,
        note: 'Q4_K_M은 권장 양자화로 최고의 품질 대 크기 비율을 제공합니다. 대부분의 사용자는 Qwen2-VL 7B로 시작해야 합니다: 8 GB GPU에 맞으며 이 가이드의 모든 사용 사례를 처리합니다. VRAM이 6 GB 미만인 경우에만 2B 모델로 내려가십시오. Q4가 품질에 미치는 영향에 대해서는 [LLM 양자화 설명](/local-llms/llm-quantization-explained)을 참조하십시오.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen2-VL 하드웨어 요구 사항',
        items: [
          '**최소 사양 (Qwen2-VL 7B Q4)**: 8 GB VRAM GPU — NVIDIA RTX 4060, RTX 3060 12 GB, 또는 RTX 2080.',
          '**저 VRAM 옵션 (Qwen2-VL 2B Q4)**: 4 GB VRAM — 대부분의 노트북 GPU 및 통합 Apple Silicon에서 실행 가능.',
          '**최고 품질 (Qwen2-VL 72B Q4)**: ~48 GB — 64 GB 이상 통합 메모리의 Apple Silicon, 또는 24 GB GPU 두 개.',
          '**Apple Silicon**: 16 GB 이상 통합 메모리의 M 시리즈 칩은 7B 모델을 원활히 실행; 72B에는 64 GB 이상 필요.',
          '**시스템 RAM**: GPU 추론과 함께 최소 16 GB; 전체 개발 환경이 열려 있을 때 32 GB 권장.',
          '**저장 공간**: Qwen2-VL 7B Q4 (GGUF)용 약 6 GB, 72B용 약 30 GB의 여유 디스크 공간.',
        ],
        callouts: [
          { type: 'note', text: '비전 모델은 동일한 파라미터 수의 텍스트 전용 모델보다 약 30–60% 느리게 실행됩니다. 비전 인코더는 첫 번째 토큰에서 전체 이미지를 처리하며, 이후 텍스트는 거의 정상 속도로 생성됩니다. 인코더와 언어 모델 모두를 위한 VRAM을 확보하십시오.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama로 Qwen2-VL 설정',
        content: [
          'Ollama는 Qwen2-VL을 로컬로 실행하는 가장 빠른 방법입니다. 모델을 다운로드하고, 양자화를 관리하며, localhost:11434에 API를 노출합니다. [ollama.com](https://ollama.com/download)에서 설치하거나, 처음 사용하시는 경우 [Ollama 설치 방법](/local-llms/how-to-install-ollama)에서 시작하십시오.',
        ],
        numberedItems: [
          { title: 'Ollama 설치', whyItMatters: 'Ollama는 모델 다운로드, GGUF 형식, 로컬 API를 처리합니다. macOS, Linux, Windows에서 사용 가능합니다.' },
          { title: '명시적 크기 태그로 Qwen2-VL 다운로드', whyItMatters: 'qwen2-vl:7b를 사용하십시오. 태그 없는 qwen2-vl은 다른 크기로 해석될 수 있습니다 — 항상 2b, 7b, 또는 72b를 지정하여 이 가이드에서 대상으로 하는 모델을 받으십시오.' },
          { title: '모델 실행 및 이미지 첨부', whyItMatters: '대화형 모드에서 프롬프트에 이미지 파일 경로를 입력하십시오. Ollama가 경로를 감지하여 이미지를 비전 인코더에 로드합니다.' },
          { title: 'API를 통한 이미지 전송', whyItMatters: '/api/generate 엔드포인트는 base64로 인코딩된 images 배열을 수신합니다. 이것이 애플리케이션 — 및 PromptQuorum — 이 이미지를 프로그래밍 방식으로 전송하는 방법입니다.' },
          { title: '다국어 OCR 확인', whyItMatters: '중국어 또는 일본어 문서 스캔을 전송하고 추출된 텍스트가 일치하는지 확인하십시오. 이를 통해 비전 인코더와 토크나이저가 CJK 스크립트를 올바르게 처리하는지 확인한 후 구축을 진행할 수 있습니다.' },
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
          { type: 'warning', text: '문서 이미지를 150 DPI 이상으로 전송하십시오. Qwen2-VL은 4096×4096까지 네이티브로 읽으므로 고해상도 스캔은 직접적으로 정확도를 향상시킵니다. 텍스트 프롬프트와 달리 이미지 품질이 OCR 결과에서 가장 중요한 단일 요소입니다 — 흐릿한 스캔은 모델이 아무리 좋아도 잘못된 문자를 출력합니다.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studio로 Qwen2-VL 설정',
        content: [
          'LM Studio는 CLI 명령 없이 그래픽 인터페이스를 통해 Qwen2-VL을 실행합니다. Windows 사용자 및 GUI를 선호하는 분들에게 권장되는 경로입니다. [lmstudio.ai](https://lmstudio.ai)에서 다운로드하거나, [LM Studio 설치 방법](/local-llms/how-to-install-lm-studio)을 참조하십시오.',
        ],
        numberedItems: [
          { title: 'LM Studio 다운로드 및 설치', whyItMatters: '로컬 모델 추론을 위한 무료 크로스 플랫폼 GUI. 터미널이 필요 없습니다.' },
          { title: '모델 브라우저에서 Qwen2-VL 검색', whyItMatters: '"Qwen2-VL 7B"를 검색하고 Q4_K_M GGUF 빌드를 선택하십시오. LM Studio는 비전 지원 모델에 이미지 아이콘을 표시합니다.' },
          { title: '모델 로드 및 이미지 첨부', whyItMatters: '채팅 입력의 이미지 아이콘을 클릭하여 사진이나 스캔을 업로드하십시오. LM Studio가 이를 비전 인코더에 전달합니다.' },
          { title: '로컬 서버 시작', whyItMatters: '"Start Server" 버튼을 누르면 localhost:1234에 OpenAI 호환 API가 노출됩니다. 비전 요청은 표준 image_url 콘텐츠 형식을 사용합니다.' },
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
        note: 'LM Studio와 Ollama는 서로 다른 이미지 형식을 사용합니다: LM Studio는 OpenAI의 image_url 콘텐츠 스키마 (data: 접두사 포함)를 따르고, Ollama는 원시 base64의 최상위 images 배열 (접두사 없음)을 사용합니다. 하나의 런타임을 선택하고 해당 형식을 맞추십시오.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: '중국어, 일본어, 혼합 언어 파일 문서 OCR',
        content: [
          '**Qwen2-VL은 다른 어떤 로컬 비전 모델보다 정확하게 중국어, 일본어, 한국어, 혼합 언어 문서에서 텍스트를 추출합니다.** 훈련 데이터에 대규모 다국어 문서 코퍼스가 포함되었으며, 4096×4096 네이티브 해상도는 LLaVA 1.6과 Llama 3.2 Vision이 다운샘플링으로 놓치는 작은 CJK 문자를 읽어냅니다.',
          '가장 신뢰할 수 있는 패턴은 구체적인 추출 프롬프트입니다. "이것을 읽어라"와 같은 모호한 요청 대신 구조를 요청하십시오 — "테이블 레이아웃 유지", "각 필드를 key: value로 반환". Qwen2-VL은 서식 지시를 면밀히 따르므로 후처리 없이도 출력을 사용할 수 있습니다.',
        ],
        items: [
          '**일반 텍스트 추출**: "이 이미지의 모든 텍스트 줄을 추출하십시오. 줄 바꿈과 읽기 순서를 유지하십시오."',
          '**구조화된 필드**: "이것은 일본어 청구서입니다. 공급업체, 날짜, 소계, 세금, 합계를 key: value 쌍으로 반환하십시오."',
          '**테이블 추출**: "이 테이블을 CSV로 추출하십시오. 첫 번째 행을 헤더로 처리하십시오."',
          '**한 번에 추출 및 번역**: "이 이미지에서 중국어 텍스트를 추출한 후 영어로 번역하십시오. 둘 다 표시하십시오."',
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
          { type: 'important', text: '항상 추출된 숫자를 원본 문서와 대조하여 확인하십시오. Qwen2-VL을 포함한 로컬 비전 모델은 저품질 스캔에서 숫자를 잘못 읽을 수 있습니다. OCR 출력을 최종 값이 아닌 확인이 필요한 초안으로 취급하십시오 — 특히 청구서 및 재무 문서의 경우.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen2-VL로 CJK 문서에서 텍스트를 추출하려면 150 DPI 이상의 이미지를 "각 필드를 key: value로 반환"과 같은 구조를 요청하는 구체적인 프롬프트와 함께 전송하십시오.' },
          { type: 'plain-terms', text: 'OCR은 텍스트 사진을 편집 가능한 텍스트로 변환하는 것을 의미합니다. Qwen2-VL은 스캔된 페이지를 보고 보이는 것을 타이핑하며, 영어만큼 중국어와 일본어 문자도 잘 처리합니다.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: '이미지 Q&A, 스크린샷 분석, 차트 읽기',
        content: [
          'OCR 외에도 Qwen2-VL은 사진 설명, 스크린샷 질문 응답, 차트 읽기 등 일반적인 이미지 이해를 처리합니다. 명확한 입력에서는 정확하며, 복잡하거나 모호한 장면에서는 다소 약합니다.',
        ],
        items: [
          '**이미지 Q&A**: 사진에 대한 개방형 질문 — "이 이미지에 무엇이 있습니까?", "빨간색을 입은 사람은 몇 명입니까?". Qwen2-VL 7B는 명확한 사진에서 정확하며, 복잡하거나 모호한 장면에서는 다소 약합니다.',
          '**스크린샷 및 UI 분석**: Qwen2-VL은 UI 스크린샷, 오류 대화 상자, 앱 상태를 읽습니다. 고밀도 코드 스크린샷의 경우 InternVL 2.5가 해당 데이터에 더 집중적으로 훈련되었으므로, UI 및 코드가 주요 작업인 경우 이를 사용하십시오.',
          '**차트 및 그래프 읽기**: Qwen2-VL은 차트 구조와 추세를 잘 설명하지만, 차트에서 정확한 수치를 추출하는 것은 모든 로컬 비전 모델에서 신뢰할 수 없습니다. 정확한 수치는 기저 데이터와 대조하여 확인하십시오.',
          '**비디오 프레임**: Qwen2-VL은 여러 프레임을 시퀀스로 수신합니다 — 초당 약 1 프레임을 샘플링하여 짧은 클립을 요약하기 위해 최대 8개를 전송하십시오.',
          '**다중 이미지 비교**: 한 번의 요청에 최대 8개의 이미지를 전송하여 버전을 비교하거나, 차이를 찾거나, 세트를 일괄 설명하십시오.',
        ],
        callouts: [
          { type: 'tip', text: 'OCR, 다국어 문서, 일반 이미지 Q&A에는 Qwen2-VL을 사용하십시오. 코드나 UI 스크린샷이 주요 작업인 경우 InternVL 2.5로 전환하거나, VRAM이 4 GB 미만인 경우 Moondream 2로 전환하십시오.' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: '모델 비교: Qwen2-VL vs LLaVA vs Llama 3.2 Vision',
        content: [
          '**다국어 OCR의 경우 Qwen2-VL은 더 낮은 VRAM에서 LLaVA 1.6을 능가하고 Llama 3.2 Vision 11B와 동등하거나 능가합니다.** 영어 전용 사진 Q&A의 경우 Llama 3.2 Vision 11B가 동등하게 강력한 선택입니다. LLaVA 1.6은 커뮤니티 문제 해결 리소스가 가장 많이 문서화된 모델입니다.',
        ],
        rows: [
          { Model: 'Qwen2-VL 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '우수', 'Max Resolution': '4096×4096', 'Best For': '다국어 OCR, 고해상도 스캔' },
          { Model: 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': '양호', 'Max Resolution': '1120×1120', 'Best For': '영어 사진 Q&A, 일반 문서' },
          { Model: 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '보통', 'Max Resolution': '672×672', 'Best For': '일반 Q&A, 커뮤니티 지원' },
          { Model: 'MiniCPM-V 2.6 8B', 'VRAM (Q4)': '~6 GB', 'OCR / CJK': '우수', 'Max Resolution': '1792×1792', 'Best For': '문서 OCR (영어 중심)' },
          { Model: 'InternVL 2.5 8B', 'VRAM (Q4)': '~8 GB', 'OCR / CJK': '양호', 'Max Resolution': 'High', 'Best For': '코드 및 UI 스크린샷' },
        ],
        columns: ['Model', 'VRAM (Q4)', 'OCR / CJK', 'Max Resolution', 'Best For'],
        tableFormat: true,
        note: '다섯 모델 모두 Ollama를 통해 실행됩니다 (InternVL 2.5는 커뮤니티 빌드를 통해). Moondream 2 및 청구서 추출 벤치마크를 포함한 전체 로컬 비전 모델 조사는 [로컬 비전 모델 비교](/power-local-llm/local-vision-models-llava-ollama-2026)를 참조하십시오. 확신이 없다면 Qwen2-VL 7B부터 시작하십시오: 6 GB의 VRAM으로 OCR, 문서, 일반 Q&A를 모두 처리합니다.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'PromptQuorum에 로컬 Qwen2-VL 연결',
        content: [
          'PromptQuorum은 여러 모델에 걸쳐 프롬프트를 라우팅합니다. 로컬 Qwen2-VL을 비전 디스패치 대상으로 사용하려면 PromptQuorum의 로컬 LLM 엔드포인트를 Ollama 서버로 지정하십시오. 이렇게 하면 이미지 처리가 사용자 하드웨어에 유지되며, 텍스트 작업에는 클라우드 모델을 계속 사용할 수 있습니다.',
          '이것은 Claude에 사용되는 Anthropic API 구성과는 별개인 Ollama (OpenAI 호환) 엔드포인트입니다. 두 가지를 동시에 활성화하여 PromptQuorum이 작업 유형 및 데이터 민감도에 따라 라우팅하도록 할 수 있습니다.',
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
          { type: 'one-sentence', text: 'OLLAMA_BASE_URL을 http://localhost:11434/v1로 설정하고 로컬 비전 모델을 qwen2-vl:7b로 지정하여 PromptQuorum을 로컬 Qwen2-VL에 연결하십시오.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Qwen2-VL 문제 해결',
        items: [
          '**"unknown model" 오류 또는 다운로드 실패**: 명시적 크기 태그를 사용하십시오 — `qwen2-vl`이 아닌 `ollama pull qwen2-vl:7b`. 설치된 이름을 확인하려면 `ollama list`를 실행하십시오.',
          '**이미지가 무시되고 이미지 없이 답변하는 경우**: 파일 경로가 올바르고 읽기 가능한지 확인하십시오. Ollama API에서 `images` 배열은 `data:` 접두사 없이 원시 base64를 포함해야 합니다 — `data:` 접두사는 LM Studio 및 OpenAI 형식에만 해당합니다.',
          '**깨지거나 누락된 CJK 문자**: 스캔 해상도가 너무 낮습니다. 150–300 DPI로 재스캔하십시오. Qwen2-VL은 4096×4096까지 읽으므로 높은 입력 해상도가 중국어 및 일본어 정확도를 직접적으로 향상시킵니다.',
          '**CUDA out of memory**: 모델이 VRAM에 맞지 않습니다. Qwen2-VL 2B (~3 GB)로 내려가거나, CPU와 GPU 간에 통합 메모리를 공유하는 Apple Silicon에서 실행하십시오.',
          '**첫 번째 응답은 느리고 이후는 빠른 경우**: 정상입니다. 비전 인코더가 첫 번째 토큰에서 전체 이미지를 처리하며, 이후 텍스트는 거의 정상 속도로 생성됩니다.',
          '**청구서나 차트에서 잘못된 숫자 추출**: 로컬 비전 모델은 노이즈가 많은 입력에서 숫자를 잘못 읽습니다. 스캔 품질을 높이고 항상 수치 출력을 원본과 대조하여 확인하십시오.',
          '**PDF가 로드되지 않는 경우**: 어떤 로컬 비전 모델도 PDF를 직접 수신하지 않습니다. pdf2image 또는 pypdfium2를 사용하여 페이지를 PNG 또는 JPEG로 변환한 후 각 페이지를 별도의 이미지로 전송하십시오.',
          '**LM Studio에서 "failed to load model" 표시**: VRAM 부족이거나 비전이 아닌 GGUF를 다운로드했습니다. 모델 카드에 비전 지원이 명시되어 있는지 확인하고 Q4_K_M 빌드를 선택하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps`를 실행하면 VRAM에 로드된 모델과 각 모델이 사용하는 메모리를 확인할 수 있습니다. 72B로 전환하기 전에 `ollama stop qwen2-vl:7b`를 사용하여 모델을 언로드하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Qwen 3 로컬 실행 방법](/local-llms/run-qwen-locally-guide-2026) — 텍스트 모델 동반 가이드: Qwen 3 언어 모델을 위한 Ollama 및 LM Studio 설정.',
          '[로컬 비전 모델 비교: LLaVA, Llama 3.2 Vision, MiniCPM-V](/power-local-llm/local-vision-models-llava-ollama-2026) — 벤치마크와 함께 모든 로컬 비전 모델의 전체 조사.',
          '[다중 모달 로컬 LLM: 비전, 오디오, 텍스트](/local-llms/multimodal-local-llms) — 멀티모달 모델을 로컬로 실행하는 것에 대한 광범위한 개요.',
          '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) — Qwen 텍스트 모델과 대안 모델 비교.',
          '[로컬 LLM 하드웨어 가이드 2026](/local-llms/local-llm-hardware-guide-2026) — 로컬 추론을 위한 VRAM 및 GPU 요구 사항.',
          '[모든 로컬 LLM 가이드 보기](/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          { q: 'Qwen2-VL을 로컬로 실행하기 위한 최소 하드웨어는 무엇입니까?', a: 'Q4_K_M 양자화의 Qwen2-VL 7B는 8 GB VRAM (RTX 4060, RTX 3060 12 GB, 또는 RTX 2080)이 필요합니다. 더 작은 Qwen2-VL 2B는 4 GB에서 실행됩니다. 72B 모델은 약 48 GB가 필요합니다 — 64 GB 이상 통합 메모리의 Apple Silicon 또는 24 GB GPU 두 개. 16 GB 이상 통합 메모리의 Apple Silicon은 7B 모델을 원활히 실행합니다.' },
          { q: 'Qwen2-VL이 OCR에서 LLaVA보다 낫습니까?', a: '예, 특히 비영어 텍스트에서 그렇습니다. Qwen2-VL은 MiniCPM-V 2.6과 동등하며, 중국어·일본어·한국어 OCR에서 LLaVA 1.6 및 Llama 3.2 Vision 11B를 능가합니다. 네이티브 4096×4096 해상도는 LLaVA 1.6이 672×672로 제한되는 동안 다운샘플링 없이 고해상도 스캔을 읽습니다. LLaVA는 여전히 가장 큰 커뮤니티와 가장 많은 튜토리얼을 보유하고 있습니다.' },
          { q: 'Qwen2-VL이 PDF를 직접 읽을 수 있습니까?', a: '아니요. 어떤 로컬 비전 모델도 PDF 입력을 직접 수신하지 않습니다. pdf2image 또는 pypdfium2를 사용하여 각 PDF 페이지를 PNG 또는 JPEG 이미지로 먼저 변환한 후, 각 페이지를 별도의 이미지 요청으로 전송하십시오. 10페이지 PDF의 경우 10개의 이미지 쿼리를 전송하고 결과를 합칩니다.' },
          { q: 'Ollama를 통해 Qwen2-VL에 이미지를 어떻게 전송합니까?', a: '두 가지 방법이 있습니다. 대화형 모드 (`ollama run qwen2-vl:7b`)에서는 프롬프트에 이미지 파일 경로를 입력하면 Ollama가 이를 감지하여 이미지를 로드합니다. API를 통해서는 base64로 인코딩된 `images` 배열과 함께 /api/generate에 POST 요청을 보내십시오. base64 문자열에는 `data:` 접두사가 포함되지 않아야 합니다.' },
          { q: 'Qwen2-VL이 완전히 오프라인으로 실행됩니까?', a: '예. 일회성 모델 다운로드 후 Qwen2-VL은 사용자 기기에서 완전히 실행됩니다 — API 키와 클라우드 계정이 필요 없습니다. 어떤 이미지도 어디에도 업로드되지 않아 문서 처리가 사용자 인프라 내에 유지됩니다. 규정 준수 의미에 대해서는 [Qwen 로컬 GDPR 설정 가이드](/local-llms/qwen-local-gdpr-setup-guide-2026)를 참조하십시오.' },
          { q: 'Qwen2-VL이 한 번에 처리할 수 있는 이미지는 몇 개입니까?', a: '요청당 최대 8개의 이미지 — 로컬 비전 모델 중 가장 높은 다중 이미지 처리 용량입니다. 이로 인해 문서 버전 비교, 차이 발견, 또는 초당 1 프레임으로 샘플링된 짧은 비디오 요약에 적합합니다.' },
          { q: 'Qwen2-VL 또는 Llama 3.2 Vision — 어느 것을 선택해야 합니까?', a: '중국어, 일본어, 한국어 문서, 고해상도 스캔, 또는 작은 글꼴의 경우 Qwen2-VL을 선택하십시오 — Llama 3.2 Vision 11B의 8 GB 대비 7B가 6 GB의 VRAM에 맞기 때문이기도 합니다. 두 모델이 비슷한 영어 전용 일반 사진 Q&A에는 Llama 3.2 Vision 11B를 선택하십시오.' },
          { q: 'OCR 출력에서 문자가 깨지는 이유는 무엇입니까?', a: '거의 항상 저해상도 스캔 때문입니다. Qwen2-VL은 4096×4096까지 네이티브로 읽으므로, 150–300 DPI로 문서를 재스캔하면 보통 깨지거나 누락된 문자가 수정됩니다. 저품질 입력은 모든 로컬 비전 모델에서 OCR 오류의 가장 큰 단일 원인입니다.' },
        ],
      },
    },
  },
}
