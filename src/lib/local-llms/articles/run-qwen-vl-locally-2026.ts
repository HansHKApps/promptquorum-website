// Slug: run-qwen-vl-locally-2026

import type { Language } from "@/lib/blog/blogContent";
import type { LLMArticle } from "@/lib/local-llms/types";

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-en.webp',
    title: 'How to Run Qwen2.5-VL and Qwen3-VL Locally in 2026: Document OCR & Vision Guide',
    seoTitle: 'Run Qwen2.5-VL & Qwen3-VL Locally 2026: Ollama Setup Guide',
    intro: 'Qwen2.5-VL and Qwen3-VL are Alibaba\'s open vision-language models for reading documents, screenshots, charts and photos, and both run locally through Ollama. Qwen3-VL 8B is a 6.1 GB download (`ollama pull qwen3-vl:8b`) and Qwen2.5-VL 7B is a 6.0 GB download (`ollama pull qwen2.5vl:7b`). Qwen2-VL, the model this page originally covered, is the older generation and has no official Ollama library entry, so `ollama pull qwen2-vl:7b` fails. This guide gives the verified tags, sizes and licences, setup with Ollama and LM Studio, and practical prompts for Chinese, Japanese and Korean document extraction.',
    metaDescription: 'Run Qwen2.5-VL and Qwen3-VL locally via Ollama: verified tags, download sizes, licences, setup steps and document OCR. Qwen2-VL is superseded.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    audience: 'Developers and analysts who need offline document OCR and image understanding — especially for Chinese, Japanese, and mixed-language files — without sending data to cloud APIs',
    primaryTerm: 'run Qwen2.5-VL and Qwen3-VL locally',
    targetKeywords: [
      'run Qwen3-VL locally 2026',
      'Qwen2.5-VL Ollama setup',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'Qwen2-VL Ollama alternative',
      'Chinese Japanese OCR local LLM',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**Run `ollama pull qwen3-vl:8b` (6.1 GB, needs Ollama 0.12.7 or newer) or `ollama pull qwen2.5vl:7b` (6.0 GB, needs Ollama 0.7.0 or newer) to read documents and images locally.** The older tag `qwen2-vl:7b` is not in the official Ollama library, so use Qwen2.5-VL or Qwen3-VL instead; the images you send are processed by your local Ollama server rather than uploaded to a cloud API.',
    quickAnswerTop: {
      en: {
        question: 'How do I run Qwen vision models locally in 2026?',
        answer: 'Update Ollama, run `ollama pull qwen3-vl:8b` (or `qwen2.5vl:7b` on an older Ollama), then `ollama run qwen3-vl:8b` and type an image file path inside your prompt. For a GUI, search for Qwen3-VL or Qwen2.5-VL in LM Studio and pick a build whose model card lists vision support. Both models are downloads of about 6 GB; leave extra memory for the context and the image encoder.',
        bullets: [
          'Ollama version: 0.12.7+ for Qwen3-VL, 0.7.0+ for Qwen2.5-VL (per the Ollama library pages)',
          'Pull a model: ollama pull qwen3-vl:8b (6.1 GB) or ollama pull qwen2.5vl:7b (6.0 GB)',
          'Attach images: type the file path in the prompt (CLI) or send a base64 images array (API)',
          'Dead tag: qwen2-vl:7b is not in the official Ollama library — use qwen2.5vl or qwen3-vl',
          'Licences: Qwen3-VL and Qwen2.5-VL 7B/32B are Apache 2.0 on their Hugging Face cards; Qwen2.5-VL 3B and 72B use Qwen licences',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Which Qwen Vision Model Should You Run?', anchor: '#why-qwen-vl' },
      { label: 'Tags, Sizes and Licences', anchor: '#choose-model' },
      { label: 'Hardware Requirements', anchor: '#hardware' },
      { label: 'Setting Up with Ollama', anchor: '#ollama-setup' },
      { label: 'Setting Up with LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Document OCR for CJK Files', anchor: '#ocr-use-case' },
      { label: 'Image Q&A, Screenshots, and Charts', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL, Qwen2.5-VL and Qwen3-VL Compared', anchor: '#vs-other-models' },
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
          '**Use Qwen3-VL or Qwen2.5-VL, not Qwen2-VL**: both have official Ollama library entries (`qwen3-vl`, `qwen2.5vl`), while `ollama.com/library/qwen2-vl` returns a 404 and `ollama pull qwen2-vl:7b` fails.',
          '**Qwen3-VL 8B is a 6.1 GB download** (`ollama pull qwen3-vl:8b`, needs Ollama 0.12.7+); **Qwen2.5-VL 7B is 6.0 GB** (`ollama pull qwen2.5vl:7b`, needs Ollama 0.7.0+).',
          '**Sizes**: Qwen3-VL 2B, 4B, 8B, 30B-A3B, 32B and 235B-A22B (1.9 GB to 143 GB); Qwen2.5-VL 3B, 7B, 32B and 72B (3.2 GB to 49 GB). These are download sizes from the Ollama library pages.',
          '**Context**: the Ollama pages list a 256K context window for Qwen3-VL and 125K for Qwen2.5-VL; the context you can actually use depends on your memory.',
          '**Licences differ by size**: Qwen3-VL and Qwen2.5-VL 7B/32B are Apache 2.0 on their Hugging Face cards; Qwen2.5-VL 3B and 72B use Qwen licences. Read the card before commercial use.',
          '**No direct PDF input**: convert PDF pages to PNG or JPEG first, then send each page as a separate image.',
          '**Local processing is not a compliance guarantee**: images are handled by your own Ollama server instead of a cloud API, but GDPR and other obligations for the surrounding workflow still apply.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Which Qwen Vision Model Should You Run?',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-en.svg',
        imageCaption: 'Vision pipeline: an image passes through the vision encoder into the language model and returns OCR or Q&A text, processed by your local Ollama server.',
        content: [
          '**Start with Qwen3-VL 8B if your Ollama is 0.12.7 or newer, and with Qwen2.5-VL 7B if it is older.** Qwen describes Qwen3-VL as the most powerful vision-language model in the Qwen series to date; its Hugging Face card lists OCR for 32 languages, a native 256K context, and both Instruct and Thinking editions.',
          'Qwen2.5-VL is the earlier generation. Its card highlights document, chart and layout understanding, structured output for scans of invoices, forms and tables, and visual localization with bounding boxes. In Ollama both generations accept text and images as input.',
          'Qwen2-VL, the generation this page originally described, is history: it was released in 2024 and has been superseded by Qwen2.5-VL and Qwen3-VL. Nothing in this guide relies on it.',
          'These are Qwen\'s own descriptions, not PromptQuorum measurements. Accuracy on your documents — especially small fonts, handwriting or low-quality scans — varies, so test a few representative pages before you build on it.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Run Qwen vision models locally with `ollama pull qwen3-vl:8b` (6.1 GB) or `ollama pull qwen2.5vl:7b` (6.0 GB); the old `qwen2-vl` tag is no longer in the official Ollama library.' },
          { type: 'plain-terms', text: 'A vision-language model reads images instead of generating them. You give it a photo or a scanned page and it returns text — a description, an answer, or the extracted contents.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen3-VL and Qwen2.5-VL Ollama Tags, Sizes and Licences',
        content: [
          'Sizes below are the download sizes shown on the Ollama library pages ([qwen3-vl](https://ollama.com/library/qwen3-vl) and [qwen2.5vl](https://ollama.com/library/qwen2.5vl)); licences come from the Hugging Face model cards of the Instruct releases ([Qwen on Hugging Face](https://huggingface.co/Qwen)). Check both again before you rely on them, because libraries and licences change.',
        ],
        rows: [
          { 'Model': 'Qwen3-VL 2B', 'Ollama tag': 'qwen3-vl:2b', 'Download': '1.9 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen3-VL 4B', 'Ollama tag': 'qwen3-vl:4b', 'Download': '3.3 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen3-VL 8B', 'Ollama tag': 'qwen3-vl:8b', 'Download': '6.1 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen3-VL 30B-A3B (MoE)', 'Ollama tag': 'qwen3-vl:30b', 'Download': '20 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen3-VL 32B', 'Ollama tag': 'qwen3-vl:32b', 'Download': '21 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen3-VL 235B-A22B (MoE)', 'Ollama tag': 'qwen3-vl:235b', 'Download': '143 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen2.5-VL 3B', 'Ollama tag': 'qwen2.5vl:3b', 'Download': '3.2 GB', 'Licence (HF card)': 'Qwen Research licence' },
          { 'Model': 'Qwen2.5-VL 7B', 'Ollama tag': 'qwen2.5vl:7b', 'Download': '6.0 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen2.5-VL 32B', 'Ollama tag': 'qwen2.5vl:32b', 'Download': '21 GB', 'Licence (HF card)': 'Apache 2.0' },
          { 'Model': 'Qwen2.5-VL 72B', 'Ollama tag': 'qwen2.5vl:72b', 'Download': '49 GB', 'Licence (HF card)': 'Qwen licence' },
        ],
        columns: ['Model', 'Ollama tag', 'Download', 'Licence (HF card)'],
        tableFormat: true,
        note: 'Pick the size that fits your memory: Qwen3-VL 8B or Qwen2.5-VL 7B for most single-GPU machines, the 2B–4B or 3B tags for small GPUs, and the 30B+ tags only with a large GPU or a lot of unified memory. Ollama also publishes `-instruct` and `-thinking` Qwen3-VL tags (for example `qwen3-vl:8b-instruct`, 6.2 GB); use an Instruct tag when you want direct extraction output without reasoning text. The default tags have the same size as their `q4_K_M` variants — see [LLM quantization explained](/local-llms/llm-quantization-explained).',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware Requirements for Qwen Vision Models',
        items: [
          '**Download sizes are weights only**: Qwen3-VL 8B is 6.1 GB and Qwen2.5-VL 7B is 6.0 GB. The context cache and the image encoder need extra memory that grows with context length and image size, so leave headroom above the download size.',
          '**Smaller options**: Qwen3-VL 2B (1.9 GB) and 4B (3.3 GB) or Qwen2.5-VL 3B (3.2 GB) suit small GPUs and laptops; expect lower accuracy than the 7B–8B models.',
          '**Larger options**: Qwen3-VL 30B-A3B (20 GB), Qwen3-VL 32B and Qwen2.5-VL 32B (21 GB) and Qwen2.5-VL 72B (49 GB) need a large GPU, several GPUs, or Apple Silicon with large unified memory.',
          '**Partial offload**: when a model does not fit in VRAM, Ollama can place part of it in system RAM; this works but is noticeably slower.',
          '**Software**: Ollama 0.12.7+ for Qwen3-VL and 0.7.0+ for Qwen2.5-VL, as stated on the Ollama library pages.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum has not benchmarked these models on specific GPUs for this guide, so no speed or exact VRAM figures are given. Run `ollama ps` after loading a model to see the memory it actually uses on your machine.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setting Up Qwen2.5-VL and Qwen3-VL with Ollama',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-en.svg',
        imageCaption: 'Ollama setup in 5 steps: install or update Ollama, pull a Qwen vision tag, run and attach an image, send it via the API, then verify CJK OCR.',
        content: [
          'Ollama is the fastest way to run Qwen vision models locally. It downloads the model, manages quantization, and exposes an API at localhost:11434. Install it from [ollama.com](https://ollama.com/download) — or, if you are new to it, start with [how to install Ollama](/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Install or update Ollama', whyItMatters: 'Qwen2.5-VL needs Ollama 0.7.0 or newer and Qwen3-VL needs 0.12.7 or newer. Check with `ollama --version` and update if needed. Ollama is available for macOS, Linux, and Windows.' },
          { title: 'Pull a model with an explicit tag', whyItMatters: 'Use `qwen3-vl:8b` or `qwen2.5vl:7b`. Do not use `qwen2-vl:7b` — it is not in the official Ollama library, so the pull fails.' },
          { title: 'Run the model and attach an image', whyItMatters: 'In interactive mode, type the image file path inside your prompt. Ollama detects the path and loads the image.' },
          { title: 'Send images through the API', whyItMatters: 'The /api/generate endpoint accepts a base64-encoded images array without a data: prefix. This is how applications — and PromptQuorum — send images programmatically.' },
          { title: 'Verify multilingual OCR', whyItMatters: 'Send a Chinese or Japanese document scan and compare the extracted text with the source before you build on it.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Send document images at 150 DPI or higher. Image quality is the biggest factor in OCR results — a blurry scan produces wrong characters no matter which model reads it.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Setting Up Qwen Vision Models with LM Studio',
        content: [
          'LM Studio runs vision models through a graphical interface with no CLI commands. Download it from [lmstudio.ai](https://lmstudio.ai), or see [how to install LM Studio](/local-llms/how-to-install-lm-studio). Its model catalog changes over time, so check what it currently offers for Qwen.',
        ],
        numberedItems: [
          { title: 'Download and install LM Studio', whyItMatters: 'A cross-platform GUI for local model inference. No terminal required.' },
          { title: 'Search for Qwen vision models', whyItMatters: 'Search "Qwen3-VL" or "Qwen2.5-VL" in the model browser and choose a build whose model card lists vision support. Match the quantization to your memory.' },
          { title: 'Load the model and attach an image', whyItMatters: 'Use the image button in the chat input to upload a photo or scan. LM Studio passes it to the vision encoder.' },
          { title: 'Start the local server', whyItMatters: 'The "Start Server" option exposes an OpenAI-compatible API at localhost:1234. Vision requests use the standard image_url content format.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
          '**Qwen vision models can extract text from Chinese, Japanese, Korean and mixed-language documents, but accuracy depends on scan quality and layout — test on your own documents.** The Qwen3-VL model card lists OCR support for 32 languages, and the Qwen2.5-VL card describes structured output for scans of invoices, forms and tables.',
          'The most reliable pattern is a specific extraction prompt. Ask for structure — "preserve the table layout", "return each field as key: value" — instead of a vague "read this".',
        ],
        items: [
          '**Plain text extraction**: "Extract every line of text from this image. Preserve line breaks and reading order."',
          '**Structured fields**: "This is a Japanese invoice. Return vendor, date, subtotal, tax, and total as key: value pairs."',
          '**Table extraction**: "Extract this table as CSV. Treat the first row as the header."',
          '**Extract and translate in one pass**: "Extract the Chinese text from this image, then translate it to English. Show both."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Always verify extracted numbers against the source document. Local vision models can misread a digit on a low-quality scan. Treat OCR output as a draft to confirm, not a final value, especially for invoices and financial documents.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'To extract text from a CJK document, send the image at 150+ DPI to qwen3-vl:8b or qwen2.5vl:7b with a specific prompt that asks for structure, such as "return each field as key: value".' },
          { type: 'plain-terms', text: 'OCR means turning a picture of text into editable text. The model looks at a scanned page and types out what it sees.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Image Q&A, Screenshot Analysis, and Chart Reading',
        content: [
          'Beyond OCR, Qwen vision models describe photos, answer questions about screenshots and read charts. Results are best on clear input and weaker on cluttered or ambiguous scenes.',
        ],
        items: [
          '**Image Q&A**: ask open questions about a photo — "What is in this image?" — and check the answers against the image.',
          '**Screenshot and UI analysis**: start with reading UI screenshots, error dialogs, and app states. Both model cards also describe GUI-agent abilities, which this guide does not cover.',
          '**Chart and graph reading**: describing chart structure and trends works better than extracting exact numbers; confirm exact figures against the underlying data.',
          '**Multi-image comparison**: send several images in one request to compare versions or batch-describe a set; how many fit depends on your memory and context size.',
        ],
        callouts: [
          { type: 'tip', text: 'For a survey of other local vision models, see the [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026).' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL, Qwen2.5-VL and Qwen3-VL Compared',
        content: [
          '**Qwen2-VL is the oldest of the three and the only one without an official Ollama library entry; Qwen2.5-VL and Qwen3-VL are the current options.** The table summarizes what can be checked in the Ollama library and on the Hugging Face cards.',
        ],
        rows: [
          { 'Generation': 'Qwen2-VL', 'Released': '2024', 'Official Ollama tag': 'None (library page returns 404)', 'Licence (HF card)': 'Apache 2.0 (2B/7B); Qwen licence (72B)', 'Notes': 'History only' },
          { 'Generation': 'Qwen2.5-VL', 'Released': '2025', 'Official Ollama tag': 'qwen2.5vl (3b, 7b, 32b, 72b)', 'Licence (HF card)': 'Apache 2.0 (7B/32B); Qwen licences (3B/72B)', 'Notes': '125K context on Ollama' },
          { 'Generation': 'Qwen3-VL', 'Released': '2025', 'Official Ollama tag': 'qwen3-vl (2b to 235b)', 'Licence (HF card)': 'Apache 2.0 (all sizes checked)', 'Notes': '256K context; Instruct and Thinking' },
        ],
        columns: ['Generation', 'Released', 'Official Ollama tag', 'Licence (HF card)', 'Notes'],
        tableFormat: true,
        note: 'The Qwen2-VL row reflects a check of [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl), which returned HTTP 404, at the time this page was last updated. Other local vision models exist; this page does not rank them — see the [local vision models comparison](/power-local-llm/local-vision-models-llava-ollama-2026).',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connecting a Local Qwen Vision Model to PromptQuorum',
        content: [
          'PromptQuorum can use a local Ollama server as one of its model endpoints. Ollama exposes an OpenAI-compatible API at `http://localhost:11434/v1`; point the local-model setting at that address and select the vision tag you pulled, for example `qwen3-vl:8b`. Check the in-app settings for the exact field names.',
          'Image requests sent to a local endpoint are processed by your Ollama server instead of a cloud vision API, while cloud models stay available for other tasks. Which models you route to remains your choice, and any cloud model you add receives whatever you send to it.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connect PromptQuorum to a local Qwen vision model by pointing its local endpoint at http://localhost:11434/v1 and selecting the pulled tag, such as qwen3-vl:8b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Troubleshooting Qwen Vision Models',
        items: [
          '**"pull model manifest: file does not exist" or an unknown model**: the tag is not in the official library. `qwen2-vl:7b` is not available — use `ollama pull qwen3-vl:8b` or `ollama pull qwen2.5vl:7b`.',
          '**The pull succeeds but the model fails to load**: update Ollama. Qwen2.5-VL needs 0.7.0+ and Qwen3-VL needs 0.12.7+.',
          '**The image is ignored and the model answers as if no image was sent**: confirm the file path is correct and readable. In the Ollama API, the `images` array must contain raw base64 *without* the `data:` prefix — the `data:` prefix is LM Studio and OpenAI format only.',
          '**Garbled or missing CJK characters**: the scan is probably too low-resolution. Re-scan at 150–300 DPI and compare the result.',
          '**Out of memory**: choose a smaller tag (for example `qwen3-vl:4b` or `qwen2.5vl:3b`), reduce the context size or the image resolution, or run on Apple Silicon, which shares unified memory between CPU and GPU.',
          '**Wrong numbers extracted from an invoice or chart**: local vision models can misread digits on noisy input. Increase scan quality and always verify numeric output against the source.',
          '**A PDF will not load**: Ollama\'s API takes images, not PDF files. Convert pages to PNG or JPEG first (with pdf2image or pypdfium2), then send each page as a separate image.',
          '**LM Studio shows "failed to load model"**: either insufficient memory, or you downloaded a non-vision build. Confirm the model card lists vision support and try a smaller quantization.',
        ],
        callouts: [
          { type: 'tip', text: 'Run `ollama ps` to see which models are loaded and how much memory each uses. Use `ollama stop qwen3-vl:8b` to unload a model before loading a larger one.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[How to Run Qwen 3 Locally](/local-llms/run-qwen-locally-guide-2026) — the text-model companion: Ollama and LM Studio setup for the Qwen language models.',
          '[Local Vision Models Compared: LLaVA, Llama 3.2 Vision, MiniCPM-V](/power-local-llm/local-vision-models-llava-ollama-2026) — the full survey of other local vision models.',
          '[Multimodal Local LLMs: Vision, Audio, and Text](/local-llms/multimodal-local-llms) — broader overview of running multimodal models locally.',
          '[Qwen vs Llama vs Mistral](/local-llms/qwen-vs-llama-vs-mistral) — how the Qwen text models compare to the alternatives.',
          '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide) — VRAM and GPU requirements for local inference.',
          '[Browse All Local LLM Guides](/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          { q: 'Why does ollama pull qwen2-vl:7b fail?', a: 'Because Qwen2-VL has no entry in the official Ollama library — the library page returns HTTP 404. Use `ollama pull qwen2.5vl:7b` (Ollama 0.7.0+) or `ollama pull qwen3-vl:8b` (Ollama 0.12.7+) instead. Check [ollama.com/library](https://ollama.com/library) for the current list.' },
          { q: 'Should I use Qwen2.5-VL or Qwen3-VL?', a: 'Qwen3-VL is the newer generation (Qwen calls it the most powerful vision-language model in its series to date), but it needs Ollama 0.12.7 or newer. Qwen2.5-VL runs on Ollama 0.7.0+ and has a 3B to 72B range. Try both on a few of your own documents; accuracy depends on your material.' },
          { q: 'What is the minimum hardware to run these models?', a: 'There is no single figure. The Ollama download sizes are 1.9 GB (Qwen3-VL 2B), 3.3 GB (4B), 6.1 GB (8B) and 3.2 GB (Qwen2.5-VL 3B), 6.0 GB (7B). The context cache and image encoder need additional memory, so leave headroom, and use `ollama ps` to check actual usage on your machine.' },
          { q: 'Can these models read PDFs directly?', a: 'Not through Ollama: its API takes images. Convert each PDF page to a PNG or JPEG image first (using pdf2image or pypdfium2), then send each page as a separate image request and combine the results.' },
          { q: 'How do I send an image through Ollama?', a: 'Two ways. In interactive mode (`ollama run qwen3-vl:8b`), type the image file path inside your prompt — Ollama detects it and loads the image. Through the API, POST to /api/generate with a base64-encoded `images` array. The base64 string must not include the `data:` prefix.' },
          { q: 'Do the models run fully offline?', a: 'After the one-time model download, inference runs on your own machine without a cloud account, so the images you send are not uploaded to a cloud API by Ollama. Other software on the machine can still send data elsewhere, and data-protection obligations for your workflow still apply — this is not legal advice. See the [Qwen local GDPR setup guide](/local-llms/qwen-local-gdpr-setup-guide-2026) for more.' },
          { q: 'Can I use them commercially?', a: 'It depends on the size and the licence on the model card. The Hugging Face cards list Apache 2.0 for Qwen3-VL and for Qwen2.5-VL 7B and 32B, and Qwen licences for Qwen2.5-VL 3B and 72B. Read the current licence text before commercial use.' },
          { q: 'Why are the characters garbled in my OCR output?', a: 'Most often a low-resolution or blurry scan. Re-scan the document at 150–300 DPI and compare. Low-quality input is the single biggest cause of OCR errors on every local vision model.' },
        ],
      },
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-es.webp',
    title: 'Cómo ejecutar Qwen2.5-VL y Qwen3-VL en local en 2026: guía de OCR de documentos y visión',
    seoTitle: 'Ejecutar Qwen2.5-VL y Qwen3-VL en local 2026: guía de Ollama',
    intro: 'Qwen2.5-VL y Qwen3-VL son los modelos abiertos de visión-lenguaje de Alibaba para leer documentos, capturas de pantalla, gráficos y fotos, y ambos se ejecutan en local con Ollama. Qwen3-VL 8B es una descarga de 6.1 GB (`ollama pull qwen3-vl:8b`) y Qwen2.5-VL 7B es una descarga de 6.0 GB (`ollama pull qwen2.5vl:7b`). Qwen2-VL, el modelo que esta página trataba originalmente, es la generación anterior y no tiene entrada oficial en la biblioteca de Ollama, por lo que `ollama pull qwen2-vl:7b` falla. Esta guía ofrece las etiquetas, tamaños y licencias verificados, la configuración con Ollama y LM Studio y prompts prácticos para extraer documentos en chino, japonés y coreano.',
    metaDescription: 'Ejecuta Qwen2.5-VL y Qwen3-VL en local con Ollama: etiquetas, tamaños y licencias verificados, instalación y OCR de documentos. Qwen2-VL está superado.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    audience: 'Desarrolladores y analistas que necesitan OCR de documentos sin conexión y comprensión de imágenes — especialmente para archivos en chino, japonés y de idiomas mixtos — sin enviar datos a APIs en la nube',
    primaryTerm: 'ejecutar Qwen2.5-VL y Qwen3-VL en local',
    targetKeywords: [
      'ejecutar Qwen3-VL en local 2026',
      'configuración Qwen2.5-VL Ollama',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'alternativa a Qwen2-VL en Ollama',
      'OCR chino japonés LLM local',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**Ejecuta `ollama pull qwen3-vl:8b` (6.1 GB, requiere Ollama 0.12.7 o posterior) o `ollama pull qwen2.5vl:7b` (6.0 GB, requiere Ollama 0.7.0 o posterior) para leer documentos e imágenes en local.** La etiqueta antigua `qwen2-vl:7b` no está en la biblioteca oficial de Ollama, así que usa Qwen2.5-VL o Qwen3-VL; las imágenes que envías las procesa tu servidor Ollama local en lugar de subirse a una API en la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Cómo ejecuto modelos de visión de Qwen en local en 2026?',
        answer: 'Actualiza Ollama, ejecuta `ollama pull qwen3-vl:8b` (o `qwen2.5vl:7b` con una versión anterior de Ollama), luego `ollama run qwen3-vl:8b` y escribe la ruta de una imagen dentro de tu prompt. Para una interfaz gráfica, busca Qwen3-VL o Qwen2.5-VL en LM Studio y elige una variante cuya ficha indique compatibilidad con visión. Ambos modelos son descargas de unos 6 GB; deja memoria extra para el contexto y el codificador de imágenes.',
        bullets: [
          'Versión de Ollama: 0.12.7+ para Qwen3-VL, 0.7.0+ para Qwen2.5-VL (según las páginas de la biblioteca de Ollama)',
          'Descargar un modelo: ollama pull qwen3-vl:8b (6.1 GB) o ollama pull qwen2.5vl:7b (6.0 GB)',
          'Adjuntar imágenes: escribe la ruta del archivo en el prompt (CLI) o envía un array base64 de images (API)',
          'Etiqueta obsoleta: qwen2-vl:7b no está en la biblioteca oficial de Ollama — usa qwen2.5vl o qwen3-vl',
          'Licencias: Qwen3-VL y Qwen2.5-VL 7B/32B son Apache 2.0 en sus fichas de Hugging Face; Qwen2.5-VL 3B y 72B usan licencias de Qwen',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: '¿Qué modelo de visión de Qwen deberías ejecutar?', anchor: '#why-qwen-vl' },
      { label: 'Etiquetas, tamaños y licencias', anchor: '#choose-model' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Configuración con Ollama', anchor: '#ollama-setup' },
      { label: 'Configuración con LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR de documentos CJK', anchor: '#ocr-use-case' },
      { label: 'Preguntas sobre imágenes, capturas y gráficos', anchor: '#other-use-cases' },
      { label: 'Comparativa Qwen2-VL, Qwen2.5-VL y Qwen3-VL', anchor: '#vs-other-models' },
      { label: 'Conexión con PromptQuorum', anchor: '#promptquorum' },
      { label: 'Solución de problemas', anchor: '#troubleshooting' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Usa Qwen3-VL o Qwen2.5-VL, no Qwen2-VL**: ambos tienen entrada oficial en la biblioteca de Ollama (`qwen3-vl`, `qwen2.5vl`), mientras que `ollama.com/library/qwen2-vl` devuelve un 404 y `ollama pull qwen2-vl:7b` falla.',
          '**Qwen3-VL 8B es una descarga de 6.1 GB** (`ollama pull qwen3-vl:8b`, requiere Ollama 0.12.7+); **Qwen2.5-VL 7B ocupa 6.0 GB** (`ollama pull qwen2.5vl:7b`, requiere Ollama 0.7.0+).',
          '**Tamaños**: Qwen3-VL 2B, 4B, 8B, 30B-A3B, 32B y 235B-A22B (de 1.9 GB a 143 GB); Qwen2.5-VL 3B, 7B, 32B y 72B (de 3.2 GB a 49 GB). Son tamaños de descarga de las páginas de la biblioteca de Ollama.',
          '**Contexto**: las páginas de Ollama indican una ventana de contexto de 256K para Qwen3-VL y de 125K para Qwen2.5-VL; el contexto que puedes usar en la práctica depende de tu memoria.',
          '**Las licencias varían según el tamaño**: Qwen3-VL y Qwen2.5-VL 7B/32B son Apache 2.0 en sus fichas de Hugging Face; Qwen2.5-VL 3B y 72B usan licencias de Qwen. Lee la ficha antes de un uso comercial.',
          '**Sin entrada directa de PDF**: convierte primero las páginas del PDF a PNG o JPEG y envía cada página como una imagen independiente.',
          '**Procesar en local no garantiza el cumplimiento normativo**: las imágenes las gestiona tu propio servidor Ollama en lugar de una API en la nube, pero el RGPD y otras obligaciones del flujo de trabajo siguen aplicándose.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: '¿Qué modelo de visión de Qwen deberías ejecutar?',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-es.svg',
        imageCaption: 'Pipeline de visión: una imagen pasa por el codificador de visión al modelo de lenguaje y devuelve texto de OCR o de preguntas y respuestas, procesado por tu servidor Ollama local.',
        content: [
          '**Empieza con Qwen3-VL 8B si tu Ollama es 0.12.7 o posterior, y con Qwen2.5-VL 7B si es anterior.** Qwen describe Qwen3-VL como el modelo de visión-lenguaje más potente de la serie Qwen hasta la fecha; su ficha de Hugging Face menciona OCR en 32 idiomas, un contexto nativo de 256K y ediciones Instruct y Thinking.',
          'Qwen2.5-VL es la generación anterior. Su ficha destaca la comprensión de documentos, gráficos y diseños, la salida estructurada para escaneos de facturas, formularios y tablas, y la localización visual con cuadros delimitadores. En Ollama ambas generaciones aceptan texto e imágenes como entrada.',
          'Qwen2-VL, la generación que esta página describía originalmente, es historia: se lanzó en 2024 y ha sido superado por Qwen2.5-VL y Qwen3-VL. Nada de esta guía depende de él.',
          'Son descripciones del propio equipo de Qwen, no mediciones de PromptQuorum. La precisión con tus documentos — sobre todo con fuentes pequeñas, escritura a mano o escaneos de baja calidad — varía, así que prueba unas cuantas páginas representativas antes de apoyarte en ella.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Ejecuta modelos de visión de Qwen en local con `ollama pull qwen3-vl:8b` (6.1 GB) o `ollama pull qwen2.5vl:7b` (6.0 GB); la antigua etiqueta `qwen2-vl` ya no está en la biblioteca oficial de Ollama.' },
          { type: 'plain-terms', text: 'Un modelo de visión-lenguaje lee imágenes en lugar de generarlas. Le das una foto o una página escaneada y devuelve texto: una descripción, una respuesta o el contenido extraído.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Etiquetas de Ollama, tamaños y licencias de Qwen3-VL y Qwen2.5-VL',
        content: [
          'Los tamaños siguientes son los de descarga que muestran las páginas de la biblioteca de Ollama ([qwen3-vl](https://ollama.com/library/qwen3-vl) y [qwen2.5vl](https://ollama.com/library/qwen2.5vl)); las licencias proceden de las fichas de Hugging Face de las versiones Instruct ([Qwen en Hugging Face](https://huggingface.co/Qwen)). Vuelve a comprobar ambos antes de basarte en ellos, porque las bibliotecas y las licencias cambian.',
        ],
        rows: [
          { 'Modelo': 'Qwen3-VL 2B', 'Etiqueta de Ollama': 'qwen3-vl:2b', 'Descarga': '1.9 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 4B', 'Etiqueta de Ollama': 'qwen3-vl:4b', 'Descarga': '3.3 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 8B', 'Etiqueta de Ollama': 'qwen3-vl:8b', 'Descarga': '6.1 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 30B-A3B (MoE)', 'Etiqueta de Ollama': 'qwen3-vl:30b', 'Descarga': '20 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 32B', 'Etiqueta de Ollama': 'qwen3-vl:32b', 'Descarga': '21 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 235B-A22B (MoE)', 'Etiqueta de Ollama': 'qwen3-vl:235b', 'Descarga': '143 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen2.5-VL 3B', 'Etiqueta de Ollama': 'qwen2.5vl:3b', 'Descarga': '3.2 GB', 'Licencia (ficha HF)': 'Licencia Qwen Research' },
          { 'Modelo': 'Qwen2.5-VL 7B', 'Etiqueta de Ollama': 'qwen2.5vl:7b', 'Descarga': '6.0 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen2.5-VL 32B', 'Etiqueta de Ollama': 'qwen2.5vl:32b', 'Descarga': '21 GB', 'Licencia (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen2.5-VL 72B', 'Etiqueta de Ollama': 'qwen2.5vl:72b', 'Descarga': '49 GB', 'Licencia (ficha HF)': 'Licencia Qwen' },
        ],
        columns: ['Modelo', 'Etiqueta de Ollama', 'Descarga', 'Licencia (ficha HF)'],
        tableFormat: true,
        note: 'Elige el tamaño que quepa en tu memoria: Qwen3-VL 8B o Qwen2.5-VL 7B para la mayoría de equipos con una sola GPU, las etiquetas de 2B–4B o 3B para GPUs pequeñas y las de 30B+ solo con una GPU grande o mucha memoria unificada. Ollama también publica etiquetas `-instruct` y `-thinking` de Qwen3-VL (por ejemplo `qwen3-vl:8b-instruct`, 6.2 GB); usa una etiqueta Instruct si quieres una salida de extracción directa, sin texto de razonamiento. Las etiquetas por defecto tienen el mismo tamaño que sus variantes `q4_K_M` — consulta [cuantización de LLM explicada](/es/local-llms/llm-quantization-explained).',
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware para los modelos de visión de Qwen',
        items: [
          '**Los tamaños de descarga son solo los pesos**: Qwen3-VL 8B ocupa 6.1 GB y Qwen2.5-VL 7B ocupa 6.0 GB. La caché de contexto y el codificador de imágenes necesitan memoria adicional que crece con la longitud del contexto y el tamaño de la imagen, así que deja margen sobre el tamaño de descarga.',
          '**Opciones más pequeñas**: Qwen3-VL 2B (1.9 GB) y 4B (3.3 GB) o Qwen2.5-VL 3B (3.2 GB) sirven para GPUs pequeñas y portátiles; espera menos precisión que con los modelos de 7B–8B.',
          '**Opciones más grandes**: Qwen3-VL 30B-A3B (20 GB), Qwen3-VL 32B y Qwen2.5-VL 32B (21 GB) y Qwen2.5-VL 72B (49 GB) requieren una GPU grande, varias GPUs o Apple Silicon con mucha memoria unificada.',
          '**Descarga parcial**: cuando un modelo no cabe en la VRAM, Ollama puede colocar parte en la RAM del sistema; funciona, pero es notablemente más lento.',
          '**Software**: Ollama 0.12.7+ para Qwen3-VL y 0.7.0+ para Qwen2.5-VL, según indican las páginas de la biblioteca de Ollama.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum no ha medido estos modelos en GPUs concretas para esta guía, por lo que no se dan cifras de velocidad ni de VRAM exacta. Ejecuta `ollama ps` tras cargar un modelo para ver la memoria que usa realmente en tu equipo.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuración de Qwen2.5-VL y Qwen3-VL con Ollama',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-es.svg',
        imageCaption: 'Configuración de Ollama en 5 pasos: instalar o actualizar Ollama, descargar una etiqueta de visión de Qwen, ejecutar y adjuntar una imagen, enviarla por la API y verificar el OCR CJK.',
        content: [
          'Ollama es la forma más rápida de ejecutar modelos de visión de Qwen en local. Descarga el modelo, gestiona la cuantización y expone una API en localhost:11434. Instálalo desde [ollama.com](https://ollama.com/download) — o, si es la primera vez, empieza por [cómo instalar Ollama](/es/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Instalar o actualizar Ollama', whyItMatters: 'Qwen2.5-VL necesita Ollama 0.7.0 o posterior y Qwen3-VL necesita 0.12.7 o posterior. Comprueba con `ollama --version` y actualiza si hace falta. Ollama está disponible para macOS, Linux y Windows.' },
          { title: 'Descargar un modelo con una etiqueta explícita', whyItMatters: 'Usa `qwen3-vl:8b` o `qwen2.5vl:7b`. No uses `qwen2-vl:7b`: no está en la biblioteca oficial de Ollama, así que la descarga falla.' },
          { title: 'Ejecutar el modelo y adjuntar una imagen', whyItMatters: 'En modo interactivo, escribe la ruta del archivo de imagen dentro de tu prompt. Ollama detecta la ruta y carga la imagen.' },
          { title: 'Enviar imágenes por la API', whyItMatters: 'El endpoint /api/generate acepta un array `images` en base64 sin el prefijo data:. Así envían imágenes las aplicaciones — y PromptQuorum — de forma programática.' },
          { title: 'Verificar el OCR multilingüe', whyItMatters: 'Envía el escaneo de un documento en chino o japonés y compara el texto extraído con el original antes de construir sobre ello.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Envía las imágenes de documentos a 150 DPI o más. La calidad de la imagen es el factor más importante en los resultados de OCR: un escaneo borroso produce caracteres erróneos con cualquier modelo.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configuración de los modelos de visión de Qwen con LM Studio',
        content: [
          'LM Studio ejecuta modelos de visión mediante una interfaz gráfica, sin comandos de terminal. Descárgalo desde [lmstudio.ai](https://lmstudio.ai) o consulta [cómo instalar LM Studio](/es/local-llms/how-to-install-lm-studio). Su catálogo de modelos cambia con el tiempo, así que comprueba qué ofrece ahora para Qwen.',
        ],
        numberedItems: [
          { title: 'Descargar e instalar LM Studio', whyItMatters: 'Una interfaz gráfica multiplataforma para la inferencia local de modelos. No hace falta terminal.' },
          { title: 'Buscar modelos de visión de Qwen', whyItMatters: 'Busca "Qwen3-VL" o "Qwen2.5-VL" en el explorador de modelos y elige una variante cuya ficha indique compatibilidad con visión. Ajusta la cuantización a tu memoria.' },
          { title: 'Cargar el modelo y adjuntar una imagen', whyItMatters: 'Usa el botón de imagen del cuadro de chat para subir una foto o un escaneo. LM Studio la pasa al codificador de visión.' },
          { title: 'Iniciar el servidor local', whyItMatters: 'La opción "Start Server" expone una API compatible con OpenAI en localhost:1234. Las solicitudes de visión usan el formato de contenido estándar image_url.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'LM Studio y Ollama usan formatos de imagen distintos: LM Studio sigue el esquema de contenido image_url de OpenAI (con prefijo data:); Ollama usa un array `images` de nivel superior con base64 sin procesar (sin prefijo). Elige un runtime y respeta su formato.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'OCR de documentos en chino, japonés e idiomas mixtos',
        content: [
          '**Los modelos de visión de Qwen pueden extraer texto de documentos en chino, japonés, coreano e idiomas mixtos, pero la precisión depende de la calidad del escaneo y del diseño: prueba con tus propios documentos.** La ficha de Qwen3-VL menciona OCR en 32 idiomas, y la de Qwen2.5-VL describe la salida estructurada para escaneos de facturas, formularios y tablas.',
          'El patrón más fiable es un prompt de extracción concreto. Pide estructura — "conserva el diseño de la tabla", "devuelve cada campo como clave: valor" — en lugar de un vago "lee esto".',
        ],
        items: [
          '**Extracción de texto simple**: "Extrae cada línea de texto de esta imagen. Conserva los saltos de línea y el orden de lectura."',
          '**Campos estructurados**: "Esta es una factura japonesa. Devuelve proveedor, fecha, subtotal, impuesto y total como pares clave: valor."',
          '**Extracción de tablas**: "Extrae esta tabla como CSV. Trata la primera fila como encabezado."',
          '**Extraer y traducir de una vez**: "Extrae el texto en chino de esta imagen y tradúcelo al inglés. Muestra ambos."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Verifica siempre los números extraídos con el documento original. Los modelos de visión locales pueden leer mal un dígito en un escaneo de baja calidad. Trata el resultado del OCR como un borrador que hay que confirmar, no como un valor final, sobre todo en facturas y documentos financieros.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Para extraer texto de un documento CJK, envía la imagen a 150+ DPI a qwen3-vl:8b o qwen2.5vl:7b con un prompt concreto que pida estructura, como "devuelve cada campo como clave: valor".' },
          { type: 'plain-terms', text: 'OCR significa convertir la imagen de un texto en texto editable. El modelo mira una página escaneada y escribe lo que ve.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Preguntas sobre imágenes, análisis de capturas de pantalla y lectura de gráficos',
        content: [
          'Además del OCR, los modelos de visión de Qwen describen fotos, responden preguntas sobre capturas de pantalla y leen gráficos. Los resultados son mejores con entradas claras y peores con escenas confusas o ambiguas.',
        ],
        items: [
          '**Preguntas sobre imágenes**: haz preguntas abiertas sobre una foto — "¿Qué hay en esta imagen?" — y comprueba las respuestas con la imagen.',
          '**Análisis de capturas y de interfaces**: empieza leyendo capturas de interfaz, cuadros de error y estados de aplicaciones. Las fichas de ambos modelos también describen capacidades de agente para interfaces gráficas, que esta guía no cubre.',
          '**Lectura de gráficos**: describir la estructura y las tendencias de un gráfico funciona mejor que extraer cifras exactas; confirma los valores exactos con los datos de origen.',
          '**Comparación de varias imágenes**: envía varias imágenes en una misma solicitud para comparar versiones o describir un conjunto; cuántas caben depende de tu memoria y del tamaño del contexto.',
        ],
        callouts: [
          { type: 'tip', text: 'Para un repaso de otros modelos de visión locales, consulta la [comparativa de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026).' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Comparativa Qwen2-VL, Qwen2.5-VL y Qwen3-VL',
        content: [
          '**Qwen2-VL es el más antiguo de los tres y el único sin entrada oficial en la biblioteca de Ollama; Qwen2.5-VL y Qwen3-VL son las opciones actuales.** La tabla resume lo que se puede comprobar en la biblioteca de Ollama y en las fichas de Hugging Face.',
        ],
        rows: [
          { 'Generación': 'Qwen2-VL', 'Lanzamiento': '2024', 'Etiqueta oficial Ollama': 'Ninguna (la página da 404)', 'Licencia (ficha HF)': 'Apache 2.0 (2B/7B); licencia Qwen (72B)', 'Notas': 'Solo histórico' },
          { 'Generación': 'Qwen2.5-VL', 'Lanzamiento': '2025', 'Etiqueta oficial Ollama': 'qwen2.5vl (3b, 7b, 32b, 72b)', 'Licencia (ficha HF)': 'Apache 2.0 (7B/32B); licencias Qwen (3B/72B)', 'Notas': 'Contexto de 125K en Ollama' },
          { 'Generación': 'Qwen3-VL', 'Lanzamiento': '2025', 'Etiqueta oficial Ollama': 'qwen3-vl (de 2b a 235b)', 'Licencia (ficha HF)': 'Apache 2.0 (todos los tamaños revisados)', 'Notas': 'Contexto 256K; Instruct y Thinking' },
        ],
        columns: ['Generación', 'Lanzamiento', 'Etiqueta oficial Ollama', 'Licencia (ficha HF)', 'Notas'],
        tableFormat: true,
        note: 'La fila de Qwen2-VL refleja una comprobación de [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl), que devolvió HTTP 404, en el momento de la última actualización de esta página. Existen otros modelos de visión locales; esta página no los clasifica — consulta la [comparativa de modelos de visión locales](/es/power-local-llm/local-vision-models-llava-ollama-2026).',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Conectar un modelo de visión local de Qwen con PromptQuorum',
        content: [
          'PromptQuorum puede usar un servidor Ollama local como uno de sus endpoints de modelo. Ollama expone una API compatible con OpenAI en `http://localhost:11434/v1`; apunta el ajuste de modelo local a esa dirección y selecciona la etiqueta de visión que descargaste, por ejemplo `qwen3-vl:8b`. Consulta los ajustes de la aplicación para ver los nombres exactos de los campos.',
          'Las solicitudes con imágenes enviadas a un endpoint local las procesa tu servidor Ollama en lugar de una API de visión en la nube, mientras que los modelos en la nube siguen disponibles para otras tareas. Tú decides a qué modelos enrutas, y cualquier modelo en la nube que añadas recibe lo que le envíes.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Conecta PromptQuorum con un modelo de visión local de Qwen apuntando su endpoint local a http://localhost:11434/v1 y seleccionando la etiqueta descargada, como qwen3-vl:8b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Solución de problemas de los modelos de visión de Qwen',
        items: [
          '**"pull model manifest: file does not exist" o modelo desconocido**: la etiqueta no está en la biblioteca oficial. `qwen2-vl:7b` no está disponible — usa `ollama pull qwen3-vl:8b` o `ollama pull qwen2.5vl:7b`.',
          '**La descarga termina pero el modelo no carga**: actualiza Ollama. Qwen2.5-VL necesita 0.7.0+ y Qwen3-VL necesita 0.12.7+.',
          '**Se ignora la imagen y el modelo responde como si no hubieras enviado ninguna**: confirma que la ruta del archivo es correcta y legible. En la API de Ollama, el array `images` debe contener base64 sin procesar *sin* el prefijo `data:`; el prefijo `data:` es solo del formato de LM Studio y OpenAI.',
          '**Caracteres CJK ilegibles o ausentes**: probablemente el escaneo tiene muy poca resolución. Vuelve a escanear a 150–300 DPI y compara el resultado.',
          '**Sin memoria**: elige una etiqueta más pequeña (por ejemplo `qwen3-vl:4b` o `qwen2.5vl:3b`), reduce el tamaño del contexto o la resolución de la imagen, o usa Apple Silicon, que comparte memoria unificada entre CPU y GPU.',
          '**Números incorrectos extraídos de una factura o un gráfico**: los modelos de visión locales pueden leer mal los dígitos con entradas ruidosas. Mejora la calidad del escaneo y verifica siempre la salida numérica con el original.',
          '**Un PDF no se carga**: la API de Ollama acepta imágenes, no archivos PDF. Convierte primero las páginas a PNG o JPEG (con pdf2image o pypdfium2) y envía cada página como una imagen independiente.',
          '**LM Studio muestra "failed to load model"**: o no hay memoria suficiente, o descargaste una variante sin visión. Confirma que la ficha del modelo indica compatibilidad con visión y prueba una cuantización menor.',
        ],
        callouts: [
          { type: 'tip', text: 'Ejecuta `ollama ps` para ver qué modelos están cargados y cuánta memoria usa cada uno. Usa `ollama stop qwen3-vl:8b` para descargar un modelo antes de cargar uno mayor.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Cómo ejecutar Qwen 3 en local](/es/local-llms/run-qwen-locally-guide-2026) — el complemento de modelos de texto: configuración de Ollama y LM Studio para los modelos de lenguaje de Qwen.',
          '[Modelos de visión locales comparados: LLaVA, Llama 3.2 Vision, MiniCPM-V](/es/power-local-llm/local-vision-models-llava-ollama-2026) — el repaso completo de otros modelos de visión locales.',
          '[LLM locales multimodales: visión, audio y texto](/es/local-llms/multimodal-local-llms) — panorama más amplio de la ejecución local de modelos multimodales.',
          '[Qwen vs Llama vs Mistral](/es/local-llms/qwen-vs-llama-vs-mistral) — cómo se comparan los modelos de texto de Qwen con las alternativas.',
          '[Guía de hardware para LLM locales](/es/local-llms/local-llm-hardware-guide) — requisitos de VRAM y GPU para la inferencia local.',
          '[Ver todas las guías de LLM locales](/es/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          { q: '¿Por qué falla ollama pull qwen2-vl:7b?', a: 'Porque Qwen2-VL no tiene entrada en la biblioteca oficial de Ollama: la página de la biblioteca devuelve HTTP 404. Usa en su lugar `ollama pull qwen2.5vl:7b` (Ollama 0.7.0+) o `ollama pull qwen3-vl:8b` (Ollama 0.12.7+). Consulta [ollama.com/library](https://ollama.com/library) para ver la lista actual.' },
          { q: '¿Debería usar Qwen2.5-VL o Qwen3-VL?', a: 'Qwen3-VL es la generación más nueva (Qwen lo describe como el modelo de visión-lenguaje más potente de su serie hasta la fecha), pero requiere Ollama 0.12.7 o posterior. Qwen2.5-VL funciona con Ollama 0.7.0+ y abarca de 3B a 72B. Prueba ambos con algunos de tus documentos; la precisión depende de tu material.' },
          { q: '¿Cuál es el hardware mínimo para ejecutar estos modelos?', a: 'No hay una cifra única. Los tamaños de descarga en Ollama son 1.9 GB (Qwen3-VL 2B), 3.3 GB (4B), 6.1 GB (8B) y 3.2 GB (Qwen2.5-VL 3B), 6.0 GB (7B). La caché de contexto y el codificador de imágenes necesitan memoria adicional, así que deja margen y usa `ollama ps` para comprobar el uso real en tu equipo.' },
          { q: '¿Pueden estos modelos leer PDF directamente?', a: 'No a través de Ollama: su API acepta imágenes. Convierte primero cada página del PDF a PNG o JPEG (con pdf2image o pypdfium2), envía cada página como una solicitud de imagen independiente y combina los resultados.' },
          { q: '¿Cómo envío una imagen a través de Ollama?', a: 'De dos formas. En modo interactivo (`ollama run qwen3-vl:8b`), escribe la ruta del archivo de imagen dentro de tu prompt: Ollama la detecta y carga la imagen. Por la API, haz un POST a /api/generate con un array `images` en base64. La cadena base64 no debe incluir el prefijo `data:`.' },
          { q: '¿Los modelos funcionan totalmente sin conexión?', a: 'Tras la descarga única del modelo, la inferencia se ejecuta en tu propio equipo sin cuenta en la nube, por lo que Ollama no sube a una API en la nube las imágenes que envías. Otro software del equipo aún puede enviar datos a otro sitio, y las obligaciones de protección de datos de tu flujo de trabajo siguen aplicándose; esto no es asesoramiento legal. Consulta la [guía de configuración RGPD de Qwen en local](/es/local-llms/qwen-local-gdpr-setup-guide-2026) para más información.' },
          { q: '¿Puedo usarlos con fines comerciales?', a: 'Depende del tamaño y de la licencia de la ficha del modelo. Las fichas de Hugging Face indican Apache 2.0 para Qwen3-VL y para Qwen2.5-VL 7B y 32B, y licencias de Qwen para Qwen2.5-VL 3B y 72B. Lee el texto vigente de la licencia antes de un uso comercial.' },
          { q: '¿Por qué salen caracteres ilegibles en mi resultado de OCR?', a: 'Casi siempre por un escaneo borroso o de poca resolución. Vuelve a escanear el documento a 150–300 DPI y compara. La entrada de baja calidad es la mayor causa de errores de OCR en cualquier modelo de visión local.' },
        ],
      },
    },
  },

  ar: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-ar.webp',
    title: 'كيفية تشغيل ⁨Qwen2.5-VL⁩ و⁨Qwen3-VL⁩ محليًا في ⁨2026⁩: دليل ⁨OCR⁩ للمستندات والرؤية',
    seoTitle: 'تشغيل ⁨Qwen2.5-VL⁩ و⁨Qwen3-VL⁩ محليًا ⁨2026⁩: دليل ⁨Ollama⁩',
    intro: 'Qwen2.5-VL وQwen3-VL نموذجان مفتوحان للرؤية واللغة من Alibaba لقراءة المستندات ولقطات الشاشة والرسوم البيانية والصور، ويعملان محليًا عبر Ollama. حجم تنزيل Qwen3-VL 8B هو 6.1 GB (`ollama pull qwen3-vl:8b`)، وحجم تنزيل Qwen2.5-VL 7B هو 6.0 GB (`ollama pull qwen2.5vl:7b`). أما Qwen2-VL، النموذج الذي كانت هذه الصفحة تتناوله في الأصل، فهو الجيل الأقدم وليس له مدخل رسمي في مكتبة Ollama، ولذلك يفشل الأمر `ollama pull qwen2-vl:7b`. يقدّم هذا الدليل الوسوم والأحجام والتراخيص التي جرى التحقق منها، وإعداد Ollama وLM Studio، وأوامر عملية لاستخراج المستندات الصينية واليابانية والكورية.',
    metaDescription: 'شغّل ⁨Qwen2.5-VL⁩ و⁨Qwen3-VL⁩ محليًا عبر ⁨Ollama⁩: وسوم وأحجام وتراخيص تم التحقق منها، وخطوات الإعداد، و⁨OCR⁩ للمستندات. ⁨Qwen2-VL⁩ تجاوزه الزمن.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    audience: 'المطورون والمحللون الذين يحتاجون إلى OCR للمستندات دون اتصال وفهم الصور — خصوصًا للملفات بالصينية واليابانية واللغات المختلطة — دون إرسال البيانات إلى واجهات API سحابية',
    primaryTerm: 'تشغيل Qwen2.5-VL وQwen3-VL محليًا',
    targetKeywords: [
      'تشغيل Qwen3-VL محليًا 2026',
      'إعداد Qwen2.5-VL Ollama',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'بديل Qwen2-VL في Ollama',
      'OCR صيني ياباني LLM محلي',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**نفّذ `ollama pull qwen3-vl:8b` (6.1 GB، يتطلب Ollama 0.12.7 أو أحدث) أو `ollama pull qwen2.5vl:7b` (6.0 GB، يتطلب Ollama 0.7.0 أو أحدث) لقراءة المستندات والصور محليًا.** الوسم القديم `qwen2-vl:7b` غير موجود في مكتبة Ollama الرسمية، لذا استخدم Qwen2.5-VL أو Qwen3-VL؛ والصور التي ترسلها يعالجها خادم Ollama المحلي لديك بدل رفعها إلى API سحابية.',
    quickAnswerTop: {
      ar: {
        question: 'كيف أشغّل نماذج الرؤية من Qwen محليًا في 2026؟',
        answer: 'حدّث Ollama ثم نفّذ `ollama pull qwen3-vl:8b` (أو `qwen2.5vl:7b` مع إصدار أقدم من Ollama)، ثم `ollama run qwen3-vl:8b` واكتب مسار ملف الصورة داخل الأمر. وللحصول على واجهة رسومية، ابحث عن Qwen3-VL أو Qwen2.5-VL في LM Studio واختر نسخة تذكر بطاقة نموذجها دعم الرؤية. حجم تنزيل كلا النموذجين نحو 6 GB؛ فاترك ذاكرة إضافية للسياق ومرمّز الصور.',
        bullets: [
          'إصدار Ollama: 0.12.7+ لـ Qwen3-VL و0.7.0+ لـ Qwen2.5-VL (بحسب صفحات مكتبة Ollama)',
          'تنزيل نموذج: ollama pull qwen3-vl:8b (6.1 GB) أو ollama pull qwen2.5vl:7b (6.0 GB)',
          'إرفاق الصور: اكتب مسار الملف في الأمر (CLI) أو أرسل مصفوفة images بصيغة base64 (API)',
          'وسم متوقف: qwen2-vl:7b غير موجود في مكتبة Ollama الرسمية — استخدم qwen2.5vl أو qwen3-vl',
          'التراخيص: Qwen3-VL وQwen2.5-VL بحجمي 7B/32B بترخيص Apache 2.0 في بطاقات Hugging Face؛ أما Qwen2.5-VL بحجمي 3B و72B فتستخدم تراخيص Qwen',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'أي نموذج رؤية من Qwen تشغّل؟', anchor: '#why-qwen-vl' },
      { label: 'الوسوم والأحجام والتراخيص', anchor: '#choose-model' },
      { label: 'متطلبات الأجهزة', anchor: '#hardware' },
      { label: 'الإعداد مع Ollama', anchor: '#ollama-setup' },
      { label: 'الإعداد مع LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR لمستندات CJK', anchor: '#ocr-use-case' },
      { label: 'الأسئلة عن الصور ولقطات الشاشة والرسوم البيانية', anchor: '#other-use-cases' },
      { label: 'مقارنة Qwen2-VL وQwen2.5-VL وQwen3-VL', anchor: '#vs-other-models' },
      { label: 'الربط مع PromptQuorum', anchor: '#promptquorum' },
      { label: 'استكشاف الأخطاء', anchor: '#troubleshooting' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**استخدم Qwen3-VL أو Qwen2.5-VL لا Qwen2-VL**: لكليهما مدخل رسمي في مكتبة Ollama (`qwen3-vl` و`qwen2.5vl`)، بينما تُرجع الصفحة `ollama.com/library/qwen2-vl` الخطأ 404 ويفشل `ollama pull qwen2-vl:7b`.',
          '**حجم تنزيل Qwen3-VL 8B هو 6.1 GB** (`ollama pull qwen3-vl:8b`، يتطلب Ollama 0.12.7+)؛ و**Qwen2.5-VL 7B بحجم 6.0 GB** (`ollama pull qwen2.5vl:7b`، يتطلب Ollama 0.7.0+).',
          '**الأحجام**: Qwen3-VL بأحجام 2B و4B و8B و30B-A3B و32B و235B-A22B (من 1.9 GB إلى 143 GB)؛ وQwen2.5-VL بأحجام 3B و7B و32B و72B (من 3.2 GB إلى 49 GB). وهي أحجام التنزيل المذكورة في صفحات مكتبة Ollama.',
          '**السياق**: تذكر صفحات Ollama نافذة سياق بحجم 256K لـ Qwen3-VL و125K لـ Qwen2.5-VL؛ أما السياق الذي يمكنك استخدامه فعليًا فيعتمد على ذاكرتك.',
          '**التراخيص تختلف بحسب الحجم**: Qwen3-VL وQwen2.5-VL بحجمي 7B/32B بترخيص Apache 2.0 في بطاقات Hugging Face؛ وQwen2.5-VL بحجمي 3B و72B بتراخيص Qwen. اقرأ البطاقة قبل أي استخدام تجاري.',
          '**لا إدخال مباشر لملفات PDF**: حوّل صفحات PDF أولًا إلى PNG أو JPEG ثم أرسل كل صفحة كصورة منفصلة.',
          '**المعالجة المحلية ليست ضمانًا للامتثال**: تعالج الصور خادم Ollama الخاص بك بدل API سحابية، لكن اللائحة العامة لحماية البيانات (GDPR) وغيرها من الالتزامات الخاصة بسير عملك تظل سارية.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'أي نموذج رؤية من Qwen تشغّل؟',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-ar.svg',
        imageCaption: 'مسار الرؤية: تمر الصورة عبر مرمّز الرؤية إلى نموذج اللغة وتعيد نص OCR أو نص أسئلة وأجوبة، وتعالجها جميعًا خادم Ollama المحلي لديك.',
        content: [
          '**ابدأ بـ Qwen3-VL 8B إذا كان إصدار Ollama لديك 0.12.7 أو أحدث، وبـ Qwen2.5-VL 7B إذا كان أقدم.** تصف Qwen نموذج Qwen3-VL بأنه أقوى نموذج رؤية ولغة في سلسلة Qwen حتى الآن؛ وتذكر بطاقته على Hugging Face دعم OCR لـ 32 لغة وسياقًا أصليًا بحجم 256K ونسختي Instruct وThinking.',
          'Qwen2.5-VL هو الجيل الأسبق. وتبرز بطاقته فهم المستندات والرسوم البيانية والتخطيطات، والمخرجات المنظمة لمسوحات الفواتير والنماذج والجداول، وتحديد المواقع البصرية بمربعات الإحاطة. وفي Ollama يقبل الجيلان النص والصور كمدخلات.',
          'أما Qwen2-VL، الجيل الذي كانت هذه الصفحة تصفه في الأصل، فقد صار من التاريخ: صدر في 2024 وحلّ محله Qwen2.5-VL وQwen3-VL. ولا يعتمد أي شيء في هذا الدليل عليه.',
          'هذه أوصاف من فريق Qwen نفسه وليست قياسات أجرتها PromptQuorum. تتفاوت الدقة على مستنداتك — خصوصًا مع الخطوط الصغيرة أو الكتابة اليدوية أو المسوحات منخفضة الجودة — فاختبر بضع صفحات ممثِّلة قبل أن تبني عليها.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'شغّل نماذج الرؤية من Qwen محليًا بالأمر `ollama pull qwen3-vl:8b` (6.1 GB) أو `ollama pull qwen2.5vl:7b` (6.0 GB)؛ أما الوسم القديم `qwen2-vl` فلم يعد في مكتبة Ollama الرسمية.' },
          { type: 'plain-terms', text: 'نموذج الرؤية واللغة يقرأ الصور ولا يولّدها. تعطيه صورة أو صفحة ممسوحة ضوئيًا فيعيد لك نصًا — وصفًا أو إجابة أو المحتوى المستخرج.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'وسوم Ollama وأحجام وتراخيص Qwen3-VL وQwen2.5-VL',
        content: [
          'الأحجام أدناه هي أحجام التنزيل الظاهرة في صفحات مكتبة Ollama ([qwen3-vl](https://ollama.com/library/qwen3-vl) و[qwen2.5vl](https://ollama.com/library/qwen2.5vl))؛ أما التراخيص فمن بطاقات Hugging Face لنسخ Instruct ([Qwen على Hugging Face](https://huggingface.co/Qwen)). أعد التحقق من الأمرين قبل الاعتماد عليهما، فالمكتبات والتراخيص تتغير.',
        ],
        rows: [
          { 'النموذج': 'Qwen3-VL 2B', 'وسم Ollama': 'qwen3-vl:2b', 'التنزيل': '1.9 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen3-VL 4B', 'وسم Ollama': 'qwen3-vl:4b', 'التنزيل': '3.3 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen3-VL 8B', 'وسم Ollama': 'qwen3-vl:8b', 'التنزيل': '6.1 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen3-VL 30B-A3B (MoE)', 'وسم Ollama': 'qwen3-vl:30b', 'التنزيل': '20 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen3-VL 32B', 'وسم Ollama': 'qwen3-vl:32b', 'التنزيل': '21 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen3-VL 235B-A22B (MoE)', 'وسم Ollama': 'qwen3-vl:235b', 'التنزيل': '143 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen2.5-VL 3B', 'وسم Ollama': 'qwen2.5vl:3b', 'التنزيل': '3.2 GB', 'الترخيص (بطاقة HF)': 'ترخيص Qwen Research' },
          { 'النموذج': 'Qwen2.5-VL 7B', 'وسم Ollama': 'qwen2.5vl:7b', 'التنزيل': '6.0 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen2.5-VL 32B', 'وسم Ollama': 'qwen2.5vl:32b', 'التنزيل': '21 GB', 'الترخيص (بطاقة HF)': 'Apache 2.0' },
          { 'النموذج': 'Qwen2.5-VL 72B', 'وسم Ollama': 'qwen2.5vl:72b', 'التنزيل': '49 GB', 'الترخيص (بطاقة HF)': 'ترخيص Qwen' },
        ],
        columns: ['النموذج', 'وسم Ollama', 'التنزيل', 'الترخيص (بطاقة HF)'],
        tableFormat: true,
        note: 'اختر الحجم الذي يناسب ذاكرتك: Qwen3-VL 8B أو Qwen2.5-VL 7B لمعظم الأجهزة ذات وحدة GPU واحدة، ووسوم 2B–4B أو 3B لوحدات GPU الصغيرة، ووسوم 30B فما فوق فقط مع GPU كبيرة أو ذاكرة موحدة كبيرة. ينشر Ollama أيضًا وسوم `-instruct` و`-thinking` لـ Qwen3-VL (مثل `qwen3-vl:8b-instruct` بحجم 6.2 GB)؛ استخدم وسم Instruct إذا أردت مخرجات استخراج مباشرة دون نص استدلال. الوسوم الافتراضية بنفس حجم متغيراتها `q4_K_M` — راجع [شرح تكميم LLM](/ar/local-llms/llm-quantization-explained).',
      },
      hardware: {
        id: 'hardware',
        title: 'متطلبات الأجهزة لنماذج الرؤية من Qwen',
        items: [
          '**أحجام التنزيل تشمل الأوزان فقط**: حجم Qwen3-VL 8B هو 6.1 GB وQwen2.5-VL 7B هو 6.0 GB. يحتاج ذاكرة السياق ومرمّز الصور إلى ذاكرة إضافية تزداد مع طول السياق وحجم الصورة، لذا اترك هامشًا فوق حجم التنزيل.',
          '**خيارات أصغر**: Qwen3-VL 2B (1.9 GB) و4B (3.3 GB) أو Qwen2.5-VL 3B (3.2 GB) تناسب وحدات GPU الصغيرة والحواسيب المحمولة؛ وتوقّع دقة أقل من نماذج 7B–8B.',
          '**خيارات أكبر**: Qwen3-VL 30B-A3B (20 GB) وQwen3-VL 32B وQwen2.5-VL 32B (21 GB) وQwen2.5-VL 72B (49 GB) تتطلب GPU كبيرة أو عدة وحدات GPU أو Apple Silicon بذاكرة موحدة كبيرة.',
          '**التفريغ الجزئي**: عندما لا يتسع النموذج في VRAM يمكن لـ Ollama وضع جزء منه في ذاكرة النظام؛ يعمل ذلك لكنه أبطأ بوضوح.',
          '**البرمجيات**: Ollama 0.12.7+ لـ Qwen3-VL و0.7.0+ لـ Qwen2.5-VL كما ورد في صفحات مكتبة Ollama.',
        ],
        callouts: [
          { type: 'note', text: 'لم تُجرِ PromptQuorum اختبارات أداء لهذه النماذج على وحدات GPU محددة من أجل هذا الدليل، ولذلك لا تُذكر أرقام للسرعة ولا VRAM بدقة. نفّذ `ollama ps` بعد تحميل نموذج لترى الذاكرة التي يستخدمها فعليًا على جهازك.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'إعداد Qwen2.5-VL وQwen3-VL مع Ollama',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-ar.svg',
        imageCaption: 'إعداد Ollama في 5 خطوات: تثبيت Ollama أو تحديثه، وتنزيل وسم رؤية من Qwen، والتشغيل مع إرفاق صورة، والإرسال عبر API، ثم التحقق من OCR لـ CJK.',
        content: [
          'Ollama هو أسرع طريقة لتشغيل نماذج الرؤية من Qwen محليًا. ينزّل النموذج ويدير التكميم ويعرض API على localhost:11434. ثبّته من [ollama.com](https://ollama.com/download) — أو ابدأ بـ [كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) إذا كنت جديدًا عليه.',
        ],
        numberedItems: [
          { title: 'تثبيت Ollama أو تحديثه', whyItMatters: 'يتطلب Qwen2.5-VL إصدار Ollama 0.7.0 أو أحدث، ويتطلب Qwen3-VL الإصدار 0.12.7 أو أحدث. تحقق بالأمر `ollama --version` وحدّث عند الحاجة. يتوفر Ollama لأنظمة macOS وLinux وWindows.' },
          { title: 'تنزيل نموذج بوسم صريح', whyItMatters: 'استخدم `qwen3-vl:8b` أو `qwen2.5vl:7b`. لا تستخدم `qwen2-vl:7b` — فهو غير موجود في مكتبة Ollama الرسمية ولذلك يفشل التنزيل.' },
          { title: 'تشغيل النموذج وإرفاق صورة', whyItMatters: 'في الوضع التفاعلي اكتب مسار ملف الصورة داخل الأمر. يكتشف Ollama المسار ويحمّل الصورة.' },
          { title: 'إرسال الصور عبر API', whyItMatters: 'تقبل نقطة النهاية /api/generate مصفوفة `images` مشفّرة بـ base64 دون البادئة data:. وهكذا ترسل التطبيقات — ومنها PromptQuorum — الصور برمجيًا.' },
          { title: 'التحقق من OCR متعدد اللغات', whyItMatters: 'أرسل مسحًا ضوئيًا لمستند صيني أو ياباني وقارن النص المستخرج بالأصل قبل أن تبني عليه.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'أرسل صور المستندات بدقة 150 DPI أو أعلى. جودة الصورة هي العامل الأكبر في نتائج OCR — فالمسح الضوئي الضبابي ينتج أحرفًا خاطئة مهما كان النموذج.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'إعداد نماذج الرؤية من Qwen مع LM Studio',
        content: [
          'يشغّل LM Studio نماذج الرؤية عبر واجهة رسومية دون أوامر طرفية. نزّله من [lmstudio.ai](https://lmstudio.ai) أو راجع [كيفية تثبيت LM Studio](/ar/local-llms/how-to-install-lm-studio). يتغير كتالوج النماذج بمرور الوقت، فتحقق مما يتيحه حاليًا لـ Qwen.',
        ],
        numberedItems: [
          { title: 'تنزيل LM Studio وتثبيته', whyItMatters: 'واجهة رسومية متعددة المنصات للاستدلال المحلي للنماذج. لا حاجة إلى طرفية.' },
          { title: 'البحث عن نماذج الرؤية من Qwen', whyItMatters: 'ابحث عن "Qwen3-VL" أو "Qwen2.5-VL" في متصفح النماذج واختر نسخة تذكر بطاقة نموذجها دعم الرؤية. وطابق التكميم مع ذاكرتك.' },
          { title: 'تحميل النموذج وإرفاق صورة', whyItMatters: 'استخدم زر الصورة في حقل الدردشة لرفع صورة أو مسح ضوئي. يمرره LM Studio إلى مرمّز الرؤية.' },
          { title: 'تشغيل الخادم المحلي', whyItMatters: 'يعرض خيار "Start Server" واجهة API متوافقة مع OpenAI على localhost:1234. وتستخدم طلبات الرؤية صيغة المحتوى القياسية image_url.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'يستخدم LM Studio وOllama صيغتي صور مختلفتين: يتبع LM Studio مخطط محتوى image_url من OpenAI (مع البادئة data:)؛ بينما يستخدم Ollama مصفوفة `images` في المستوى الأعلى بصيغة base64 خام (دون بادئة). اختر بيئة تشغيل واحدة والتزم بصيغتها.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'OCR للمستندات الصينية واليابانية والمختلطة اللغات',
        content: [
          '**يمكن لنماذج الرؤية من Qwen استخراج النص من المستندات الصينية واليابانية والكورية والمختلطة اللغات، لكن الدقة تعتمد على جودة المسح الضوئي والتخطيط — اختبرها على مستنداتك أنت.** تذكر بطاقة Qwen3-VL دعم OCR لـ 32 لغة، وتصف بطاقة Qwen2.5-VL المخرجات المنظمة لمسوحات الفواتير والنماذج والجداول.',
          'النمط الأكثر موثوقية هو أمر استخراج محدد. اطلب بنية — "احتفظ بتخطيط الجدول"، "أعد كل حقل بصيغة مفتاح: قيمة" — بدل "اقرأ هذا" الغامضة.',
        ],
        items: [
          '**استخراج النص العادي**: "استخرج كل سطر نصي من هذه الصورة. احتفظ بفواصل الأسطر وترتيب القراءة."',
          '**الحقول المنظمة**: "هذه فاتورة يابانية. أعد المورّد والتاريخ والمجموع الفرعي والضريبة والإجمالي كأزواج مفتاح: قيمة."',
          '**استخراج الجداول**: "استخرج هذا الجدول بصيغة CSV. اعتبر الصف الأول رأس الجدول."',
          '**الاستخراج والترجمة في خطوة واحدة**: "استخرج النص الصيني من هذه الصورة ثم ترجمه إلى الإنجليزية. اعرض الاثنين."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'تحقق دائمًا من الأرقام المستخرجة بمقارنتها بالمستند الأصلي. قد تخطئ نماذج الرؤية المحلية في قراءة رقم عند المسح الضوئي منخفض الجودة. تعامل مع مخرجات OCR كمسودة تحتاج إلى تأكيد لا كقيمة نهائية، خصوصًا في الفواتير والمستندات المالية.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'لاستخراج النص من مستند CJK أرسل الصورة بدقة 150+ DPI إلى qwen3-vl:8b أو qwen2.5vl:7b مع أمر محدد يطلب بنية، مثل "أعد كل حقل بصيغة مفتاح: قيمة".' },
          { type: 'plain-terms', text: 'OCR تعني تحويل صورة نص إلى نص قابل للتحرير. ينظر النموذج إلى صفحة ممسوحة ضوئيًا ويكتب ما يراه.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'الأسئلة عن الصور وتحليل لقطات الشاشة وقراءة الرسوم البيانية',
        content: [
          'إلى جانب OCR، تصف نماذج الرؤية من Qwen الصور وتجيب عن الأسئلة المتعلقة بلقطات الشاشة وتقرأ الرسوم البيانية. تكون النتائج أفضل مع المدخلات الواضحة وأضعف مع المشاهد المزدحمة أو الملتبسة.',
        ],
        items: [
          '**الأسئلة عن الصور**: اطرح أسئلة مفتوحة عن صورة — "ما الموجود في هذه الصورة؟" — وتحقق من الإجابات بمقارنتها بالصورة.',
          '**تحليل لقطات الشاشة والواجهات**: ابدأ بقراءة لقطات الواجهات ونوافذ الأخطاء وحالات التطبيقات. تصف بطاقتا النموذجين أيضًا قدرات وكيل الواجهات الرسومية، وهي خارج نطاق هذا الدليل.',
          '**قراءة الرسوم البيانية**: وصف بنية الرسم واتجاهاته أفضل من استخراج أرقام دقيقة؛ فتأكد من القيم الدقيقة من البيانات الأصلية.',
          '**مقارنة عدة صور**: أرسل عدة صور في طلب واحد لمقارنة نسخ أو وصف مجموعة؛ ويعتمد عدد الصور الممكن على ذاكرتك وحجم السياق.',
        ],
        callouts: [
          { type: 'tip', text: 'للاطلاع على نماذج رؤية محلية أخرى راجع [مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026).' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'مقارنة Qwen2-VL وQwen2.5-VL وQwen3-VL',
        content: [
          '**Qwen2-VL هو الأقدم بين الثلاثة والوحيد الذي ليس له مدخل رسمي في مكتبة Ollama؛ أما Qwen2.5-VL وQwen3-VL فهما الخياران الحاليان.** يلخص الجدول ما يمكن التحقق منه في مكتبة Ollama وبطاقات Hugging Face.',
        ],
        rows: [
          { 'الجيل': 'Qwen2-VL', 'سنة الإصدار': '2024', 'وسم Ollama الرسمي': 'لا يوجد (الصفحة تعيد 404)', 'الترخيص (بطاقة HF)': 'Apache 2.0 (2B/7B)؛ ترخيص Qwen (72B)', 'ملاحظات': 'للتاريخ فقط' },
          { 'الجيل': 'Qwen2.5-VL', 'سنة الإصدار': '2025', 'وسم Ollama الرسمي': 'qwen2.5vl (3b و7b و32b و72b)', 'الترخيص (بطاقة HF)': 'Apache 2.0 (7B/32B)؛ تراخيص Qwen (3B/72B)', 'ملاحظات': 'سياق 125K في Ollama' },
          { 'الجيل': 'Qwen3-VL', 'سنة الإصدار': '2025', 'وسم Ollama الرسمي': 'qwen3-vl (من 2b إلى 235b)', 'الترخيص (بطاقة HF)': 'Apache 2.0 (كل الأحجام التي فُحصت)', 'ملاحظات': 'سياق 256K؛ Instruct وThinking' },
        ],
        columns: ['الجيل', 'سنة الإصدار', 'وسم Ollama الرسمي', 'الترخيص (بطاقة HF)', 'ملاحظات'],
        tableFormat: true,
        note: 'يعكس صف Qwen2-VL فحصًا للصفحة [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl) أعادت فيه HTTP 404 وقت آخر تحديث لهذه الصفحة. توجد نماذج رؤية محلية أخرى؛ ولا تصنّفها هذه الصفحة — راجع [مقارنة نماذج الرؤية المحلية](/ar/power-local-llm/local-vision-models-llava-ollama-2026).',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'ربط نموذج رؤية محلي من Qwen مع PromptQuorum',
        content: [
          'يمكن لـ PromptQuorum استخدام خادم Ollama محلي كإحدى نقاط النهاية للنماذج. يعرض Ollama واجهة API متوافقة مع OpenAI على `http://localhost:11434/v1`؛ وجّه إعداد النموذج المحلي إلى هذا العنوان واختر وسم الرؤية الذي نزّلته، مثل `qwen3-vl:8b`. راجع إعدادات التطبيق لمعرفة أسماء الحقول بدقة.',
          'طلبات الصور المرسلة إلى نقطة نهاية محلية يعالجها خادم Ollama لديك بدل API رؤية سحابية، وتبقى النماذج السحابية متاحة للمهام الأخرى. أنت من يقرر النماذج التي تُوجَّه إليها الطلبات، وأي نموذج سحابي تضيفه يتلقى ما ترسله إليه.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'اربط PromptQuorum بنموذج رؤية محلي من Qwen بتوجيه نقطة النهاية المحلية إلى http://localhost:11434/v1 واختيار الوسم الذي نزّلته، مثل qwen3-vl:8b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'استكشاف أخطاء نماذج الرؤية من Qwen',
        items: [
          '**"pull model manifest: file does not exist" أو نموذج غير معروف**: الوسم غير موجود في المكتبة الرسمية. `qwen2-vl:7b` غير متاح — استخدم `ollama pull qwen3-vl:8b` أو `ollama pull qwen2.5vl:7b`.',
          '**ينجح التنزيل لكن النموذج لا يُحمَّل**: حدّث Ollama. يتطلب Qwen2.5-VL الإصدار 0.7.0+ ويتطلب Qwen3-VL الإصدار 0.12.7+.',
          '**تُتجاهل الصورة ويجيب النموذج كأنه لم يستلم صورة**: تأكد من أن مسار الملف صحيح وقابل للقراءة. في API الخاصة بـ Ollama يجب أن تحتوي المصفوفة `images` على base64 خام *دون* البادئة `data:` — فالبادئة `data:` خاصة بصيغتي LM Studio وOpenAI.',
          '**أحرف CJK مشوهة أو مفقودة**: دقة المسح الضوئي منخفضة غالبًا. أعد المسح بدقة 150–300 DPI وقارن النتيجة.',
          '**نفاد الذاكرة**: اختر وسمًا أصغر (مثل `qwen3-vl:4b` أو `qwen2.5vl:3b`)، أو قلّل حجم السياق أو دقة الصورة، أو استخدم Apple Silicon الذي يتشارك فيه المعالج وGPU ذاكرة موحدة.',
          '**أرقام خاطئة مستخرجة من فاتورة أو رسم بياني**: قد تخطئ نماذج الرؤية المحلية في قراءة الأرقام عند المدخلات المشوشة. حسّن جودة المسح وتحقق دائمًا من المخرجات الرقمية بمقارنتها بالأصل.',
          '**ملف PDF لا يُحمَّل**: تقبل API الخاصة بـ Ollama الصور لا ملفات PDF. حوّل الصفحات أولًا إلى PNG أو JPEG (باستخدام pdf2image أو pypdfium2) ثم أرسل كل صفحة كصورة منفصلة.',
          '**يعرض LM Studio الرسالة "failed to load model"**: إما أن الذاكرة غير كافية أو أنك نزّلت نسخة لا تدعم الرؤية. تأكد من أن بطاقة النموذج تذكر دعم الرؤية وجرّب تكميمًا أصغر.',
        ],
        callouts: [
          { type: 'tip', text: 'نفّذ `ollama ps` لترى النماذج المحمّلة والذاكرة التي يستخدمها كل منها. واستخدم `ollama stop qwen3-vl:8b` لإلغاء تحميل نموذج قبل تحميل نموذج أكبر.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[كيفية تشغيل Qwen 3 محليًا](/ar/local-llms/run-qwen-locally-guide-2026) — دليل نماذج النص المرافق: إعداد Ollama وLM Studio لنماذج Qwen اللغوية.',
          '[مقارنة نماذج الرؤية المحلية: LLaVA وLlama 3.2 Vision وMiniCPM-V](/ar/power-local-llm/local-vision-models-llava-ollama-2026) — الاستعراض الكامل لنماذج الرؤية المحلية الأخرى.',
          '[نماذج LLM محلية متعددة الوسائط: الرؤية والصوت والنص](/ar/local-llms/multimodal-local-llms) — نظرة أوسع على تشغيل النماذج متعددة الوسائط محليًا.',
          '[Qwen مقابل Llama مقابل Mistral](/ar/local-llms/qwen-vs-llama-vs-mistral) — كيف تقارن نماذج Qwen النصية بالبدائل.',
          '[دليل أجهزة LLM المحلية](/ar/local-llms/local-llm-hardware-guide) — متطلبات VRAM وGPU للاستدلال المحلي.',
          '[تصفح جميع أدلة LLM المحلية](/ar/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          { q: 'لماذا يفشل الأمر ollama pull qwen2-vl:7b؟', a: 'لأن Qwen2-VL ليس له مدخل في مكتبة Ollama الرسمية — فصفحة المكتبة تعيد HTTP 404. استخدم بدلًا منه `ollama pull qwen2.5vl:7b` (Ollama 0.7.0+) أو `ollama pull qwen3-vl:8b` (Ollama 0.12.7+). راجع [ollama.com/library](https://ollama.com/library) للاطلاع على القائمة الحالية.' },
          { q: 'هل أستخدم Qwen2.5-VL أم Qwen3-VL؟', a: 'Qwen3-VL هو الجيل الأحدث (تصفه Qwen بأنه أقوى نموذج رؤية ولغة في سلسلتها حتى الآن) لكنه يتطلب Ollama 0.12.7 أو أحدث. ويعمل Qwen2.5-VL على Ollama 0.7.0+ ويمتد من 3B إلى 72B. جرّب الاثنين على بعض مستنداتك؛ فالدقة تعتمد على مادتك.' },
          { q: 'ما الحد الأدنى من الأجهزة لتشغيل هذه النماذج؟', a: 'لا يوجد رقم واحد. أحجام التنزيل في Ollama هي 1.9 GB (Qwen3-VL 2B) و3.3 GB (4B) و6.1 GB (8B)، و3.2 GB (Qwen2.5-VL 3B) و6.0 GB (7B). يحتاج ذاكرة السياق ومرمّز الصور إلى ذاكرة إضافية، فاترك هامشًا واستخدم `ollama ps` لمعرفة الاستخدام الفعلي على جهازك.' },
          { q: 'هل تقرأ هذه النماذج ملفات PDF مباشرة؟', a: 'ليس عبر Ollama: فواجهته تقبل الصور. حوّل كل صفحة PDF أولًا إلى PNG أو JPEG (باستخدام pdf2image أو pypdfium2) ثم أرسل كل صفحة كطلب صورة منفصل وادمج النتائج.' },
          { q: 'كيف أرسل صورة عبر Ollama؟', a: 'بطريقتين. في الوضع التفاعلي (`ollama run qwen3-vl:8b`) اكتب مسار ملف الصورة داخل الأمر فيكتشفه Ollama ويحمّل الصورة. وعبر API أرسل طلب POST إلى /api/generate مع مصفوفة `images` مشفّرة بـ base64. ويجب ألا تتضمن سلسلة base64 البادئة `data:`.' },
          { q: 'هل تعمل النماذج دون اتصال بالكامل؟', a: 'بعد التنزيل لمرة واحدة يجري الاستدلال على جهازك دون حساب سحابي، ولذلك لا يرفع Ollama الصور التي ترسلها إلى API سحابية. لكن برمجيات أخرى على الجهاز قد ترسل بيانات إلى الخارج، وتظل التزامات حماية البيانات الخاصة بسير عملك سارية؛ وهذا ليس استشارة قانونية. راجع [دليل إعداد Qwen المحلي وفق GDPR](/ar/local-llms/qwen-local-gdpr-setup-guide-2026) لمزيد من التفاصيل.' },
          { q: 'هل يمكنني استخدامها تجاريًا؟', a: 'يعتمد ذلك على الحجم والترخيص المذكور في بطاقة النموذج. تذكر بطاقات Hugging Face ترخيص Apache 2.0 لـ Qwen3-VL ولـ Qwen2.5-VL بحجمي 7B و32B، وتراخيص Qwen لـ Qwen2.5-VL بحجمي 3B و72B. اقرأ نص الترخيص الحالي قبل أي استخدام تجاري.' },
          { q: 'لماذا تظهر الأحرف مشوهة في مخرجات OCR؟', a: 'غالبًا بسبب مسح ضوئي ضبابي أو منخفض الدقة. أعد مسح المستند بدقة 150–300 DPI وقارن. المدخلات منخفضة الجودة هي أكبر سبب لأخطاء OCR في أي نموذج رؤية محلي.' },
        ],
      },
    },
  },

  pt: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-pt.webp',
    title: 'Como executar o Qwen2.5-VL e o Qwen3-VL localmente em 2026: guia de OCR de documentos e visão',
    seoTitle: 'Executar Qwen2.5-VL e Qwen3-VL localmente 2026: guia do Ollama',
    intro: 'O Qwen2.5-VL e o Qwen3-VL são os modelos abertos de visão e linguagem da Alibaba para ler documentos, capturas de tela, gráficos e fotos, e ambos rodam localmente pelo Ollama. O Qwen3-VL 8B é um download de 6.1 GB (`ollama pull qwen3-vl:8b`) e o Qwen2.5-VL 7B é um download de 6.0 GB (`ollama pull qwen2.5vl:7b`). O Qwen2-VL, o modelo que esta página abordava originalmente, é a geração anterior e não tem entrada oficial na biblioteca do Ollama, então `ollama pull qwen2-vl:7b` falha. Este guia traz as tags, os tamanhos e as licenças verificados, a configuração com Ollama e LM Studio e prompts práticos para extrair documentos em chinês, japonês e coreano.',
    metaDescription: 'Execute o Qwen2.5-VL e o Qwen3-VL localmente com Ollama: tags, tamanhos e licenças verificados, instalação e OCR de documentos. O Qwen2-VL foi superado.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    audience: 'Desenvolvedores e analistas que precisam de OCR de documentos offline e compreensão de imagens — especialmente para arquivos em chinês, japonês e idiomas mistos — sem enviar dados para APIs na nuvem',
    primaryTerm: 'executar Qwen2.5-VL e Qwen3-VL localmente',
    targetKeywords: [
      'executar Qwen3-VL localmente 2026',
      'configuração Qwen2.5-VL Ollama',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'alternativa ao Qwen2-VL no Ollama',
      'OCR chinês japonês LLM local',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**Execute `ollama pull qwen3-vl:8b` (6.1 GB, exige Ollama 0.12.7 ou mais recente) ou `ollama pull qwen2.5vl:7b` (6.0 GB, exige Ollama 0.7.0 ou mais recente) para ler documentos e imagens localmente.** A tag antiga `qwen2-vl:7b` não está na biblioteca oficial do Ollama, então use o Qwen2.5-VL ou o Qwen3-VL; as imagens que você envia são processadas pelo seu servidor Ollama local, e não enviadas a uma API na nuvem.',
    quickAnswerTop: {
      pt: {
        question: 'Como executo os modelos de visão do Qwen localmente em 2026?',
        answer: 'Atualize o Ollama, execute `ollama pull qwen3-vl:8b` (ou `qwen2.5vl:7b` em um Ollama mais antigo), depois `ollama run qwen3-vl:8b` e digite o caminho de um arquivo de imagem dentro do prompt. Para uma interface gráfica, procure Qwen3-VL ou Qwen2.5-VL no LM Studio e escolha uma versão cuja ficha informe suporte a visão. Os dois modelos são downloads de cerca de 6 GB; deixe memória extra para o contexto e o codificador de imagens.',
        bullets: [
          'Versão do Ollama: 0.12.7+ para o Qwen3-VL, 0.7.0+ para o Qwen2.5-VL (conforme as páginas da biblioteca do Ollama)',
          'Baixar um modelo: ollama pull qwen3-vl:8b (6.1 GB) ou ollama pull qwen2.5vl:7b (6.0 GB)',
          'Anexar imagens: digite o caminho do arquivo no prompt (CLI) ou envie um array base64 de images (API)',
          'Tag obsoleta: qwen2-vl:7b não está na biblioteca oficial do Ollama — use qwen2.5vl ou qwen3-vl',
          'Licenças: Qwen3-VL e Qwen2.5-VL 7B/32B são Apache 2.0 nas fichas do Hugging Face; Qwen2.5-VL 3B e 72B usam licenças da Qwen',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Pontos principais', anchor: '#key-takeaways' },
      { label: 'Qual modelo de visão do Qwen você deve executar?', anchor: '#why-qwen-vl' },
      { label: 'Tags, tamanhos e licenças', anchor: '#choose-model' },
      { label: 'Requisitos de hardware', anchor: '#hardware' },
      { label: 'Configuração com Ollama', anchor: '#ollama-setup' },
      { label: 'Configuração com LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR de documentos CJK', anchor: '#ocr-use-case' },
      { label: 'Perguntas sobre imagens, capturas de tela e gráficos', anchor: '#other-use-cases' },
      { label: 'Comparação entre Qwen2-VL, Qwen2.5-VL e Qwen3-VL', anchor: '#vs-other-models' },
      { label: 'Conexão com o PromptQuorum', anchor: '#promptquorum' },
      { label: 'Solução de problemas', anchor: '#troubleshooting' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Use o Qwen3-VL ou o Qwen2.5-VL, não o Qwen2-VL**: ambos têm entrada oficial na biblioteca do Ollama (`qwen3-vl`, `qwen2.5vl`), enquanto `ollama.com/library/qwen2-vl` retorna 404 e `ollama pull qwen2-vl:7b` falha.',
          '**O Qwen3-VL 8B é um download de 6.1 GB** (`ollama pull qwen3-vl:8b`, exige Ollama 0.12.7+); **o Qwen2.5-VL 7B tem 6.0 GB** (`ollama pull qwen2.5vl:7b`, exige Ollama 0.7.0+).',
          '**Tamanhos**: Qwen3-VL 2B, 4B, 8B, 30B-A3B, 32B e 235B-A22B (de 1.9 GB a 143 GB); Qwen2.5-VL 3B, 7B, 32B e 72B (de 3.2 GB a 49 GB). São tamanhos de download das páginas da biblioteca do Ollama.',
          '**Contexto**: as páginas do Ollama indicam uma janela de contexto de 256K para o Qwen3-VL e de 125K para o Qwen2.5-VL; o contexto que você realmente consegue usar depende da sua memória.',
          '**As licenças variam conforme o tamanho**: Qwen3-VL e Qwen2.5-VL 7B/32B são Apache 2.0 nas fichas do Hugging Face; Qwen2.5-VL 3B e 72B usam licenças da Qwen. Leia a ficha antes de usar comercialmente.',
          '**Sem entrada direta de PDF**: converta primeiro as páginas do PDF em PNG ou JPEG e envie cada página como uma imagem separada.',
          '**Processar localmente não garante conformidade**: as imagens são tratadas pelo seu próprio servidor Ollama em vez de uma API na nuvem, mas a LGPD e outras obrigações do fluxo de trabalho continuam valendo.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Qual modelo de visão do Qwen você deve executar?',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-pt.svg',
        imageCaption: 'Pipeline de visão: uma imagem passa pelo codificador de visão até o modelo de linguagem e retorna texto de OCR ou de perguntas e respostas, processado pelo seu servidor Ollama local.',
        content: [
          '**Comece com o Qwen3-VL 8B se o seu Ollama for 0.12.7 ou mais recente, e com o Qwen2.5-VL 7B se for mais antigo.** A Qwen descreve o Qwen3-VL como o modelo de visão e linguagem mais poderoso da série Qwen até agora; a ficha dele no Hugging Face menciona OCR em 32 idiomas, contexto nativo de 256K e edições Instruct e Thinking.',
          'O Qwen2.5-VL é a geração anterior. A ficha dele destaca a compreensão de documentos, gráficos e layouts, a saída estruturada para digitalizações de notas fiscais, formulários e tabelas e a localização visual com caixas delimitadoras. No Ollama, as duas gerações aceitam texto e imagens como entrada.',
          'O Qwen2-VL, a geração que esta página descrevia originalmente, é história: foi lançado em 2024 e foi superado pelo Qwen2.5-VL e pelo Qwen3-VL. Nada neste guia depende dele.',
          'Essas são descrições da própria Qwen, não medições do PromptQuorum. A precisão nos seus documentos — principalmente com fontes pequenas, escrita à mão ou digitalizações de baixa qualidade — varia, então teste algumas páginas representativas antes de se basear nela.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Execute os modelos de visão do Qwen localmente com `ollama pull qwen3-vl:8b` (6.1 GB) ou `ollama pull qwen2.5vl:7b` (6.0 GB); a antiga tag `qwen2-vl` não está mais na biblioteca oficial do Ollama.' },
          { type: 'plain-terms', text: 'Um modelo de visão e linguagem lê imagens em vez de gerá-las. Você dá a ele uma foto ou uma página digitalizada e ele devolve texto: uma descrição, uma resposta ou o conteúdo extraído.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Tags do Ollama, tamanhos e licenças do Qwen3-VL e do Qwen2.5-VL',
        content: [
          'Os tamanhos abaixo são os de download exibidos nas páginas da biblioteca do Ollama ([qwen3-vl](https://ollama.com/library/qwen3-vl) e [qwen2.5vl](https://ollama.com/library/qwen2.5vl)); as licenças vêm das fichas das versões Instruct no Hugging Face ([Qwen no Hugging Face](https://huggingface.co/Qwen)). Confira os dois de novo antes de depender deles, porque bibliotecas e licenças mudam.',
        ],
        rows: [
          { 'Modelo': 'Qwen3-VL 2B', 'Tag do Ollama': 'qwen3-vl:2b', 'Download': '1.9 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 4B', 'Tag do Ollama': 'qwen3-vl:4b', 'Download': '3.3 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 8B', 'Tag do Ollama': 'qwen3-vl:8b', 'Download': '6.1 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 30B-A3B (MoE)', 'Tag do Ollama': 'qwen3-vl:30b', 'Download': '20 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 32B', 'Tag do Ollama': 'qwen3-vl:32b', 'Download': '21 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen3-VL 235B-A22B (MoE)', 'Tag do Ollama': 'qwen3-vl:235b', 'Download': '143 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen2.5-VL 3B', 'Tag do Ollama': 'qwen2.5vl:3b', 'Download': '3.2 GB', 'Licença (ficha HF)': 'Licença Qwen Research' },
          { 'Modelo': 'Qwen2.5-VL 7B', 'Tag do Ollama': 'qwen2.5vl:7b', 'Download': '6.0 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen2.5-VL 32B', 'Tag do Ollama': 'qwen2.5vl:32b', 'Download': '21 GB', 'Licença (ficha HF)': 'Apache 2.0' },
          { 'Modelo': 'Qwen2.5-VL 72B', 'Tag do Ollama': 'qwen2.5vl:72b', 'Download': '49 GB', 'Licença (ficha HF)': 'Licença Qwen' },
        ],
        columns: ['Modelo', 'Tag do Ollama', 'Download', 'Licença (ficha HF)'],
        tableFormat: true,
        note: 'Escolha o tamanho que cabe na sua memória: Qwen3-VL 8B ou Qwen2.5-VL 7B para a maioria das máquinas com uma GPU, as tags de 2B–4B ou 3B para GPUs pequenas e as de 30B+ somente com uma GPU grande ou muita memória unificada. O Ollama também publica tags `-instruct` e `-thinking` do Qwen3-VL (por exemplo `qwen3-vl:8b-instruct`, 6.2 GB); use uma tag Instruct quando quiser uma saída de extração direta, sem texto de raciocínio. As tags padrão têm o mesmo tamanho que suas variantes `q4_K_M` — veja [quantização de LLM explicada](/pt/local-llms/llm-quantization-explained).',
      },
      hardware: {
        id: 'hardware',
        title: 'Requisitos de hardware para os modelos de visão do Qwen',
        items: [
          '**Os tamanhos de download são apenas os pesos**: o Qwen3-VL 8B tem 6.1 GB e o Qwen2.5-VL 7B tem 6.0 GB. O cache de contexto e o codificador de imagens precisam de memória extra, que cresce com o tamanho do contexto e da imagem, então deixe folga acima do tamanho do download.',
          '**Opções menores**: Qwen3-VL 2B (1.9 GB) e 4B (3.3 GB) ou Qwen2.5-VL 3B (3.2 GB) servem para GPUs pequenas e notebooks; espere menos precisão do que nos modelos de 7B–8B.',
          '**Opções maiores**: Qwen3-VL 30B-A3B (20 GB), Qwen3-VL 32B e Qwen2.5-VL 32B (21 GB) e Qwen2.5-VL 72B (49 GB) exigem uma GPU grande, várias GPUs ou Apple Silicon com muita memória unificada.',
          '**Offload parcial**: quando um modelo não cabe na VRAM, o Ollama pode colocar parte dele na RAM do sistema; funciona, mas é bem mais lento.',
          '**Software**: Ollama 0.12.7+ para o Qwen3-VL e 0.7.0+ para o Qwen2.5-VL, conforme as páginas da biblioteca do Ollama.',
        ],
        callouts: [
          { type: 'note', text: 'O PromptQuorum não fez benchmarks desses modelos em GPUs específicas para este guia, por isso não há números de velocidade nem de VRAM exata. Execute `ollama ps` depois de carregar um modelo para ver a memória que ele realmente usa na sua máquina.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configurando o Qwen2.5-VL e o Qwen3-VL com o Ollama',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-pt.svg',
        imageCaption: 'Configuração do Ollama em 5 passos: instalar ou atualizar o Ollama, baixar uma tag de visão do Qwen, executar e anexar uma imagem, enviar pela API e verificar o OCR CJK.',
        content: [
          'O Ollama é a forma mais rápida de executar os modelos de visão do Qwen localmente. Ele baixa o modelo, gerencia a quantização e expõe uma API em localhost:11434. Instale-o em [ollama.com](https://ollama.com/download) — ou, se for novo no assunto, comece por [como instalar o Ollama](/pt/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Instalar ou atualizar o Ollama', whyItMatters: 'O Qwen2.5-VL exige Ollama 0.7.0 ou mais recente e o Qwen3-VL exige 0.12.7 ou mais recente. Verifique com `ollama --version` e atualize se necessário. O Ollama está disponível para macOS, Linux e Windows.' },
          { title: 'Baixar um modelo com uma tag explícita', whyItMatters: 'Use `qwen3-vl:8b` ou `qwen2.5vl:7b`. Não use `qwen2-vl:7b` — ele não está na biblioteca oficial do Ollama, então o download falha.' },
          { title: 'Executar o modelo e anexar uma imagem', whyItMatters: 'No modo interativo, digite o caminho do arquivo de imagem dentro do prompt. O Ollama detecta o caminho e carrega a imagem.' },
          { title: 'Enviar imagens pela API', whyItMatters: 'O endpoint /api/generate aceita um array `images` em base64 sem o prefixo data:. É assim que aplicações — e o PromptQuorum — enviam imagens de forma programática.' },
          { title: 'Verificar o OCR multilíngue', whyItMatters: 'Envie a digitalização de um documento em chinês ou japonês e compare o texto extraído com o original antes de construir em cima disso.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Envie as imagens de documentos com 150 DPI ou mais. A qualidade da imagem é o fator mais importante nos resultados de OCR — uma digitalização borrada gera caracteres errados com qualquer modelo.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configurando os modelos de visão do Qwen com o LM Studio',
        content: [
          'O LM Studio executa modelos de visão por uma interface gráfica, sem comandos de terminal. Baixe-o em [lmstudio.ai](https://lmstudio.ai) ou veja [como instalar o LM Studio](/pt/local-llms/how-to-install-lm-studio). O catálogo de modelos muda com o tempo, então confira o que ele oferece hoje para o Qwen.',
        ],
        numberedItems: [
          { title: 'Baixar e instalar o LM Studio', whyItMatters: 'Uma interface gráfica multiplataforma para inferência local de modelos. Não precisa de terminal.' },
          { title: 'Procurar os modelos de visão do Qwen', whyItMatters: 'Pesquise "Qwen3-VL" ou "Qwen2.5-VL" no navegador de modelos e escolha uma versão cuja ficha informe suporte a visão. Ajuste a quantização à sua memória.' },
          { title: 'Carregar o modelo e anexar uma imagem', whyItMatters: 'Use o botão de imagem na caixa de chat para enviar uma foto ou digitalização. O LM Studio a repassa ao codificador de visão.' },
          { title: 'Iniciar o servidor local', whyItMatters: 'A opção "Start Server" expõe uma API compatível com a OpenAI em localhost:1234. As requisições de visão usam o formato de conteúdo padrão image_url.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'O LM Studio e o Ollama usam formatos de imagem diferentes: o LM Studio segue o esquema de conteúdo image_url da OpenAI (com prefixo data:); o Ollama usa um array `images` de nível superior com base64 puro (sem prefixo). Escolha um runtime e siga o formato dele.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'OCR de documentos em chinês, japonês e idiomas mistos',
        content: [
          '**Os modelos de visão do Qwen conseguem extrair texto de documentos em chinês, japonês, coreano e idiomas mistos, mas a precisão depende da qualidade da digitalização e do layout — teste nos seus próprios documentos.** A ficha do Qwen3-VL menciona OCR em 32 idiomas, e a do Qwen2.5-VL descreve a saída estruturada para digitalizações de notas fiscais, formulários e tabelas.',
          'O padrão mais confiável é um prompt de extração específico. Peça estrutura — "preserve o layout da tabela", "devolva cada campo como chave: valor" — em vez de um vago "leia isto".',
        ],
        items: [
          '**Extração de texto simples**: "Extraia cada linha de texto desta imagem. Preserve as quebras de linha e a ordem de leitura."',
          '**Campos estruturados**: "Esta é uma nota fiscal japonesa. Devolva fornecedor, data, subtotal, imposto e total como pares chave: valor."',
          '**Extração de tabelas**: "Extraia esta tabela como CSV. Trate a primeira linha como cabeçalho."',
          '**Extrair e traduzir de uma vez**: "Extraia o texto em chinês desta imagem e traduza para o inglês. Mostre os dois."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Sempre confira os números extraídos com o documento original. Modelos de visão locais podem ler um dígito errado em uma digitalização de baixa qualidade. Trate o resultado do OCR como um rascunho a confirmar, não como um valor final, principalmente em notas fiscais e documentos financeiros.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Para extrair texto de um documento CJK, envie a imagem com 150+ DPI para qwen3-vl:8b ou qwen2.5vl:7b com um prompt específico que peça estrutura, como "devolva cada campo como chave: valor".' },
          { type: 'plain-terms', text: 'OCR significa transformar a imagem de um texto em texto editável. O modelo olha uma página digitalizada e escreve o que vê.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Perguntas sobre imagens, análise de capturas de tela e leitura de gráficos',
        content: [
          'Além do OCR, os modelos de visão do Qwen descrevem fotos, respondem perguntas sobre capturas de tela e leem gráficos. Os resultados são melhores com entradas nítidas e piores com cenas confusas ou ambíguas.',
        ],
        items: [
          '**Perguntas sobre imagens**: faça perguntas abertas sobre uma foto — "O que há nesta imagem?" — e confira as respostas com a imagem.',
          '**Análise de capturas de tela e de interfaces**: comece lendo capturas de interface, caixas de erro e estados de aplicativos. As fichas dos dois modelos também descrevem habilidades de agente para interfaces gráficas, que este guia não cobre.',
          '**Leitura de gráficos**: descrever a estrutura e as tendências de um gráfico funciona melhor do que extrair números exatos; confirme os valores exatos nos dados de origem.',
          '**Comparação de várias imagens**: envie várias imagens em uma única requisição para comparar versões ou descrever um conjunto; quantas cabem depende da sua memória e do tamanho do contexto.',
        ],
        callouts: [
          { type: 'tip', text: 'Para um panorama de outros modelos de visão locais, veja a [comparação de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026).' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Comparação entre Qwen2-VL, Qwen2.5-VL e Qwen3-VL',
        content: [
          '**O Qwen2-VL é o mais antigo dos três e o único sem entrada oficial na biblioteca do Ollama; o Qwen2.5-VL e o Qwen3-VL são as opções atuais.** A tabela resume o que dá para conferir na biblioteca do Ollama e nas fichas do Hugging Face.',
        ],
        rows: [
          { 'Geração': 'Qwen2-VL', 'Lançamento': '2024', 'Tag oficial do Ollama': 'Nenhuma (a página retorna 404)', 'Licença (ficha HF)': 'Apache 2.0 (2B/7B); licença Qwen (72B)', 'Observações': 'Apenas histórico' },
          { 'Geração': 'Qwen2.5-VL', 'Lançamento': '2025', 'Tag oficial do Ollama': 'qwen2.5vl (3b, 7b, 32b, 72b)', 'Licença (ficha HF)': 'Apache 2.0 (7B/32B); licenças Qwen (3B/72B)', 'Observações': 'Contexto de 125K no Ollama' },
          { 'Geração': 'Qwen3-VL', 'Lançamento': '2025', 'Tag oficial do Ollama': 'qwen3-vl (de 2b a 235b)', 'Licença (ficha HF)': 'Apache 2.0 (todos os tamanhos conferidos)', 'Observações': 'Contexto de 256K; Instruct e Thinking' },
        ],
        columns: ['Geração', 'Lançamento', 'Tag oficial do Ollama', 'Licença (ficha HF)', 'Observações'],
        tableFormat: true,
        note: 'A linha do Qwen2-VL reflete uma verificação de [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl), que retornou HTTP 404, na data da última atualização desta página. Existem outros modelos de visão locais; esta página não os classifica — veja a [comparação de modelos de visão locais](/pt/power-local-llm/local-vision-models-llava-ollama-2026).',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Conectando um modelo de visão local do Qwen ao PromptQuorum',
        content: [
          'O PromptQuorum pode usar um servidor Ollama local como um de seus endpoints de modelo. O Ollama expõe uma API compatível com a OpenAI em `http://localhost:11434/v1`; aponte a configuração de modelo local para esse endereço e selecione a tag de visão que você baixou, por exemplo `qwen3-vl:8b`. Consulte as configurações do aplicativo para ver os nomes exatos dos campos.',
          'As requisições com imagens enviadas a um endpoint local são processadas pelo seu servidor Ollama em vez de uma API de visão na nuvem, enquanto os modelos na nuvem continuam disponíveis para outras tarefas. Para quais modelos rotear é decisão sua, e qualquer modelo na nuvem que você adicionar recebe o que você enviar a ele.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Conecte o PromptQuorum a um modelo de visão local do Qwen apontando o endpoint local para http://localhost:11434/v1 e selecionando a tag baixada, como qwen3-vl:8b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Solução de problemas dos modelos de visão do Qwen',
        items: [
          '**"pull model manifest: file does not exist" ou modelo desconhecido**: a tag não está na biblioteca oficial. `qwen2-vl:7b` não está disponível — use `ollama pull qwen3-vl:8b` ou `ollama pull qwen2.5vl:7b`.',
          '**O download termina, mas o modelo não carrega**: atualize o Ollama. O Qwen2.5-VL exige 0.7.0+ e o Qwen3-VL exige 0.12.7+.',
          '**A imagem é ignorada e o modelo responde como se nenhuma imagem tivesse sido enviada**: confirme que o caminho do arquivo está correto e legível. Na API do Ollama, o array `images` deve conter base64 puro *sem* o prefixo `data:`; o prefixo `data:` é só do formato do LM Studio e da OpenAI.',
          '**Caracteres CJK ilegíveis ou ausentes**: a digitalização provavelmente tem resolução baixa demais. Digitalize de novo a 150–300 DPI e compare o resultado.',
          '**Falta de memória**: escolha uma tag menor (por exemplo `qwen3-vl:4b` ou `qwen2.5vl:3b`), reduza o tamanho do contexto ou a resolução da imagem, ou use Apple Silicon, que compartilha memória unificada entre CPU e GPU.',
          '**Números errados extraídos de uma nota fiscal ou gráfico**: modelos de visão locais podem ler dígitos errados em entradas com ruído. Melhore a qualidade da digitalização e sempre confira a saída numérica com o original.',
          '**Um PDF não carrega**: a API do Ollama aceita imagens, não arquivos PDF. Converta primeiro as páginas em PNG ou JPEG (com pdf2image ou pypdfium2) e envie cada página como uma imagem separada.',
          '**O LM Studio mostra "failed to load model"**: ou a memória é insuficiente, ou você baixou uma versão sem visão. Confirme que a ficha do modelo informa suporte a visão e tente uma quantização menor.',
        ],
        callouts: [
          { type: 'tip', text: 'Execute `ollama ps` para ver quais modelos estão carregados e quanta memória cada um usa. Use `ollama stop qwen3-vl:8b` para descarregar um modelo antes de carregar um maior.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Como executar o Qwen 3 localmente](/pt/local-llms/run-qwen-locally-guide-2026) — o complemento de modelos de texto: configuração do Ollama e do LM Studio para os modelos de linguagem do Qwen.',
          '[Modelos de visão locais comparados: LLaVA, Llama 3.2 Vision, MiniCPM-V](/pt/power-local-llm/local-vision-models-llava-ollama-2026) — o panorama completo de outros modelos de visão locais.',
          '[LLMs locais multimodais: visão, áudio e texto](/pt/local-llms/multimodal-local-llms) — visão geral mais ampla sobre executar modelos multimodais localmente.',
          '[Qwen vs Llama vs Mistral](/pt/local-llms/qwen-vs-llama-vs-mistral) — como os modelos de texto do Qwen se comparam às alternativas.',
          '[Guia de hardware para LLMs locais](/pt/local-llms/local-llm-hardware-guide) — requisitos de VRAM e GPU para inferência local.',
          '[Ver todos os guias de LLMs locais](/pt/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          { q: 'Por que o ollama pull qwen2-vl:7b falha?', a: 'Porque o Qwen2-VL não tem entrada na biblioteca oficial do Ollama — a página da biblioteca retorna HTTP 404. Use `ollama pull qwen2.5vl:7b` (Ollama 0.7.0+) ou `ollama pull qwen3-vl:8b` (Ollama 0.12.7+). Consulte [ollama.com/library](https://ollama.com/library) para ver a lista atual.' },
          { q: 'Devo usar o Qwen2.5-VL ou o Qwen3-VL?', a: 'O Qwen3-VL é a geração mais nova (a Qwen o descreve como o modelo de visão e linguagem mais poderoso da série até agora), mas exige Ollama 0.12.7 ou mais recente. O Qwen2.5-VL roda no Ollama 0.7.0+ e vai de 3B a 72B. Teste os dois em alguns dos seus documentos; a precisão depende do seu material.' },
          { q: 'Qual é o hardware mínimo para executar esses modelos?', a: 'Não há um número único. Os tamanhos de download no Ollama são 1.9 GB (Qwen3-VL 2B), 3.3 GB (4B), 6.1 GB (8B) e 3.2 GB (Qwen2.5-VL 3B), 6.0 GB (7B). O cache de contexto e o codificador de imagens precisam de memória extra, então deixe folga e use `ollama ps` para ver o uso real na sua máquina.' },
          { q: 'Esses modelos leem PDFs diretamente?', a: 'Não pelo Ollama: a API dele aceita imagens. Converta primeiro cada página do PDF em PNG ou JPEG (com pdf2image ou pypdfium2), envie cada página como uma requisição de imagem separada e combine os resultados.' },
          { q: 'Como envio uma imagem pelo Ollama?', a: 'De duas formas. No modo interativo (`ollama run qwen3-vl:8b`), digite o caminho do arquivo de imagem dentro do prompt — o Ollama o detecta e carrega a imagem. Pela API, faça um POST em /api/generate com um array `images` em base64. A string base64 não deve incluir o prefixo `data:`.' },
          { q: 'Os modelos funcionam totalmente offline?', a: 'Depois do download único do modelo, a inferência roda na sua própria máquina sem conta na nuvem, então o Ollama não envia as imagens que você manda a uma API na nuvem. Outros programas da máquina ainda podem enviar dados para fora, e as obrigações de proteção de dados do seu fluxo de trabalho continuam valendo; isto não é aconselhamento jurídico. Veja o [guia de configuração LGPD/GDPR do Qwen local](/pt/local-llms/qwen-local-gdpr-setup-guide-2026) para mais detalhes.' },
          { q: 'Posso usá-los comercialmente?', a: 'Depende do tamanho e da licença da ficha do modelo. As fichas do Hugging Face indicam Apache 2.0 para o Qwen3-VL e para o Qwen2.5-VL 7B e 32B, e licenças da Qwen para o Qwen2.5-VL 3B e 72B. Leia o texto atual da licença antes de usar comercialmente.' },
          { q: 'Por que os caracteres saem ilegíveis no resultado do OCR?', a: 'Quase sempre por causa de uma digitalização borrada ou de baixa resolução. Digitalize o documento de novo a 150–300 DPI e compare. Entrada de baixa qualidade é a maior causa de erros de OCR em qualquer modelo de visão local.' },
        ],
      },
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-de.webp',
    title: 'Qwen2.5-VL und Qwen3-VL lokal betreiben 2026: Leitfaden für Dokumenten-OCR und Bildverständnis',
    seoTitle: 'Qwen2.5-VL & Qwen3-VL lokal betreiben 2026: Ollama-Anleitung',
    intro: 'Qwen2.5-VL und Qwen3-VL sind die offenen Vision-Language-Modelle von Alibaba zum Lesen von Dokumenten, Screenshots, Diagrammen und Fotos, und beide laufen lokal über Ollama. Qwen3-VL 8B ist ein Download von 6,1 GB (`ollama pull qwen3-vl:8b`), Qwen2.5-VL 7B ein Download von 6,0 GB (`ollama pull qwen2.5vl:7b`). Qwen2-VL, das Modell, das diese Seite ursprünglich behandelte, ist die ältere Generation und hat keinen offiziellen Eintrag in der Ollama-Bibliothek – `ollama pull qwen2-vl:7b` schlägt daher fehl. Dieser Leitfaden nennt geprüfte Tags, Größen und Lizenzen, die Einrichtung mit Ollama und LM Studio sowie praxistaugliche Prompts für die Extraktion chinesischer, japanischer und koreanischer Dokumente.',
    metaDescription: 'Qwen2.5-VL und Qwen3-VL lokal mit Ollama betreiben: geprüfte Tags, Download-Größen, Lizenzen, Einrichtung und Dokumenten-OCR. Qwen2-VL ist überholt.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11 Min. Lesezeit',
    educationalLevel: 'Intermediate',
    audience: 'Entwickler und Analysten, die Offline-Dokumenten-OCR und Bildverständnis benötigen – besonders für chinesische, japanische und gemischtsprachige Dateien – ohne Daten an Cloud-APIs zu senden',
    primaryTerm: 'Qwen2.5-VL und Qwen3-VL lokal betreiben',
    targetKeywords: [
      'Qwen3-VL lokal betreiben 2026',
      'Qwen2.5-VL Ollama Einrichtung',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'Qwen2-VL Ollama Alternative',
      'chinesisch japanisch OCR lokales LLM',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**Führen Sie `ollama pull qwen3-vl:8b` (6,1 GB, erfordert Ollama 0.12.7 oder neuer) oder `ollama pull qwen2.5vl:7b` (6,0 GB, erfordert Ollama 0.7.0 oder neuer) aus, um Dokumente und Bilder lokal zu lesen.** Der ältere Tag `qwen2-vl:7b` ist nicht in der offiziellen Ollama-Bibliothek enthalten – nutzen Sie stattdessen Qwen2.5-VL oder Qwen3-VL; die gesendeten Bilder verarbeitet Ihr lokaler Ollama-Server, statt sie in eine Cloud-API hochzuladen.',
    quickAnswerTop: {
      de: {
        question: 'Wie betreibe ich Qwen-Vision-Modelle 2026 lokal?',
        answer: 'Aktualisieren Sie Ollama, führen Sie `ollama pull qwen3-vl:8b` aus (oder `qwen2.5vl:7b` bei einer älteren Ollama-Version), dann `ollama run qwen3-vl:8b`, und geben Sie den Pfad einer Bilddatei in Ihrem Prompt an. Für eine grafische Oberfläche suchen Sie in LM Studio nach Qwen3-VL oder Qwen2.5-VL und wählen einen Build, dessen Modellkarte Vision-Unterstützung nennt. Beide Modelle sind Downloads von rund 6 GB; planen Sie zusätzlichen Speicher für Kontext und Bild-Encoder ein.',
        bullets: [
          'Ollama-Version: 0.12.7+ für Qwen3-VL, 0.7.0+ für Qwen2.5-VL (laut den Seiten der Ollama-Bibliothek)',
          'Modell laden: ollama pull qwen3-vl:8b (6,1 GB) oder ollama pull qwen2.5vl:7b (6,0 GB)',
          'Bilder anhängen: Dateipfad im Prompt angeben (CLI) oder ein Base64-Array images senden (API)',
          'Veralteter Tag: qwen2-vl:7b ist nicht in der offiziellen Ollama-Bibliothek – nutzen Sie qwen2.5vl oder qwen3-vl',
          'Lizenzen: Qwen3-VL und Qwen2.5-VL 7B/32B sind laut Hugging-Face-Karten Apache 2.0; Qwen2.5-VL 3B und 72B verwenden Qwen-Lizenzen',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Welches Qwen-Vision-Modell sollten Sie betreiben?', anchor: '#why-qwen-vl' },
      { label: 'Tags, Größen und Lizenzen', anchor: '#choose-model' },
      { label: 'Hardware-Anforderungen', anchor: '#hardware' },
      { label: 'Einrichtung mit Ollama', anchor: '#ollama-setup' },
      { label: 'Einrichtung mit LM Studio', anchor: '#lm-studio-setup' },
      { label: 'Dokumenten-OCR für CJK-Dateien', anchor: '#ocr-use-case' },
      { label: 'Bildfragen, Screenshots und Diagramme', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL, Qwen2.5-VL und Qwen3-VL im Vergleich', anchor: '#vs-other-models' },
      { label: 'Anbindung an PromptQuorum', anchor: '#promptquorum' },
      { label: 'Fehlerbehebung', anchor: '#troubleshooting' },
      { label: 'Weiterführende Lektüre', anchor: '#related-reading' },
      { label: 'Häufig gestellte Fragen', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Nutzen Sie Qwen3-VL oder Qwen2.5-VL, nicht Qwen2-VL**: Beide haben offizielle Einträge in der Ollama-Bibliothek (`qwen3-vl`, `qwen2.5vl`), während `ollama.com/library/qwen2-vl` einen 404 liefert und `ollama pull qwen2-vl:7b` fehlschlägt.',
          '**Qwen3-VL 8B ist ein Download von 6,1 GB** (`ollama pull qwen3-vl:8b`, erfordert Ollama 0.12.7+); **Qwen2.5-VL 7B hat 6,0 GB** (`ollama pull qwen2.5vl:7b`, erfordert Ollama 0.7.0+).',
          '**Größen**: Qwen3-VL 2B, 4B, 8B, 30B-A3B, 32B und 235B-A22B (1,9 GB bis 143 GB); Qwen2.5-VL 3B, 7B, 32B und 72B (3,2 GB bis 49 GB). Es sind Download-Größen laut den Seiten der Ollama-Bibliothek.',
          '**Kontext**: Die Ollama-Seiten nennen ein Kontextfenster von 256K für Qwen3-VL und 125K für Qwen2.5-VL; der tatsächlich nutzbare Kontext hängt von Ihrem Speicher ab.',
          '**Lizenzen unterscheiden sich je nach Größe**: Qwen3-VL und Qwen2.5-VL 7B/32B sind laut Hugging-Face-Karten Apache 2.0; Qwen2.5-VL 3B und 72B verwenden Qwen-Lizenzen. Lesen Sie die Karte vor kommerzieller Nutzung.',
          '**Keine direkte PDF-Eingabe**: Wandeln Sie PDF-Seiten zuerst in PNG oder JPEG um und senden Sie jede Seite als eigenes Bild.',
          '**Lokale Verarbeitung ist keine Compliance-Garantie**: Die Bilder verarbeitet Ihr eigener Ollama-Server statt einer Cloud-API, aber DSGVO und weitere Pflichten für den umgebenden Arbeitsablauf gelten weiterhin.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Welches Qwen-Vision-Modell sollten Sie betreiben?',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-de.svg',
        imageCaption: 'Vision-Pipeline: Ein Bild läuft über den Vision-Encoder in das Sprachmodell und liefert OCR- oder Frage-Antwort-Text, verarbeitet von Ihrem lokalen Ollama-Server.',
        content: [
          '**Beginnen Sie mit Qwen3-VL 8B, wenn Ihr Ollama 0.12.7 oder neuer ist, und mit Qwen2.5-VL 7B, wenn es älter ist.** Qwen beschreibt Qwen3-VL als das bislang leistungsstärkste Vision-Language-Modell der Qwen-Reihe; die Hugging-Face-Karte nennt OCR für 32 Sprachen, einen nativen 256K-Kontext sowie Instruct- und Thinking-Editionen.',
          'Qwen2.5-VL ist die frühere Generation. Seine Karte hebt das Verständnis von Dokumenten, Diagrammen und Layouts, strukturierte Ausgaben für Scans von Rechnungen, Formularen und Tabellen sowie visuelle Lokalisierung mit Bounding Boxes hervor. In Ollama akzeptieren beide Generationen Text und Bilder als Eingabe.',
          'Qwen2-VL, die Generation, die diese Seite ursprünglich beschrieb, ist Geschichte: Es erschien 2024 und wurde durch Qwen2.5-VL und Qwen3-VL abgelöst. Nichts in diesem Leitfaden hängt davon ab.',
          'Das sind Beschreibungen des Qwen-Teams, keine Messungen von PromptQuorum. Die Genauigkeit bei Ihren Dokumenten – besonders bei kleiner Schrift, Handschrift oder Scans schlechter Qualität – schwankt; testen Sie daher einige repräsentative Seiten, bevor Sie darauf aufbauen.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen-Vision-Modelle laufen lokal mit `ollama pull qwen3-vl:8b` (6,1 GB) oder `ollama pull qwen2.5vl:7b` (6,0 GB); der alte Tag `qwen2-vl` ist nicht mehr in der offiziellen Ollama-Bibliothek.' },
          { type: 'plain-terms', text: 'Ein Vision-Language-Modell liest Bilder, statt sie zu erzeugen. Sie geben ihm ein Foto oder eine gescannte Seite, und es liefert Text zurück – eine Beschreibung, eine Antwort oder den extrahierten Inhalt.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Ollama-Tags, Größen und Lizenzen von Qwen3-VL und Qwen2.5-VL',
        content: [
          'Die Größen unten sind die Download-Größen der Ollama-Bibliotheksseiten ([qwen3-vl](https://ollama.com/library/qwen3-vl) und [qwen2.5vl](https://ollama.com/library/qwen2.5vl)); die Lizenzen stammen von den Hugging-Face-Karten der Instruct-Versionen ([Qwen auf Hugging Face](https://huggingface.co/Qwen)). Prüfen Sie beides erneut, bevor Sie sich darauf verlassen, denn Bibliotheken und Lizenzen ändern sich.',
        ],
        rows: [
          { 'Modell': 'Qwen3-VL 2B', 'Ollama-Tag': 'qwen3-vl:2b', 'Download': '1,9 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen3-VL 4B', 'Ollama-Tag': 'qwen3-vl:4b', 'Download': '3,3 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen3-VL 8B', 'Ollama-Tag': 'qwen3-vl:8b', 'Download': '6,1 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen3-VL 30B-A3B (MoE)', 'Ollama-Tag': 'qwen3-vl:30b', 'Download': '20 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen3-VL 32B', 'Ollama-Tag': 'qwen3-vl:32b', 'Download': '21 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen3-VL 235B-A22B (MoE)', 'Ollama-Tag': 'qwen3-vl:235b', 'Download': '143 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen2.5-VL 3B', 'Ollama-Tag': 'qwen2.5vl:3b', 'Download': '3,2 GB', 'Lizenz (HF-Karte)': 'Qwen-Research-Lizenz' },
          { 'Modell': 'Qwen2.5-VL 7B', 'Ollama-Tag': 'qwen2.5vl:7b', 'Download': '6,0 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen2.5-VL 32B', 'Ollama-Tag': 'qwen2.5vl:32b', 'Download': '21 GB', 'Lizenz (HF-Karte)': 'Apache 2.0' },
          { 'Modell': 'Qwen2.5-VL 72B', 'Ollama-Tag': 'qwen2.5vl:72b', 'Download': '49 GB', 'Lizenz (HF-Karte)': 'Qwen-Lizenz' },
        ],
        columns: ['Modell', 'Ollama-Tag', 'Download', 'Lizenz (HF-Karte)'],
        tableFormat: true,
        note: 'Wählen Sie die Größe, die in Ihren Speicher passt: Qwen3-VL 8B oder Qwen2.5-VL 7B für die meisten Rechner mit einer GPU, die Tags 2B–4B bzw. 3B für kleine GPUs und die Tags ab 30B nur mit großer GPU oder viel Unified Memory. Ollama veröffentlicht außerdem `-instruct`- und `-thinking`-Tags für Qwen3-VL (zum Beispiel `qwen3-vl:8b-instruct`, 6,2 GB); verwenden Sie einen Instruct-Tag, wenn Sie direkte Extraktionsausgaben ohne Denktext möchten. Die Standard-Tags haben dieselbe Größe wie ihre `q4_K_M`-Varianten – siehe [LLM-Quantisierung erklärt](/de/local-llms/llm-quantization-explained).',
      },
      hardware: {
        id: 'hardware',
        title: 'Hardware-Anforderungen für Qwen-Vision-Modelle',
        items: [
          '**Download-Größen sind nur die Gewichte**: Qwen3-VL 8B hat 6,1 GB, Qwen2.5-VL 7B hat 6,0 GB. Kontext-Cache und Bild-Encoder benötigen zusätzlichen Speicher, der mit Kontextlänge und Bildgröße wächst – planen Sie also Reserve über der Download-Größe ein.',
          '**Kleinere Optionen**: Qwen3-VL 2B (1,9 GB) und 4B (3,3 GB) oder Qwen2.5-VL 3B (3,2 GB) eignen sich für kleine GPUs und Notebooks; rechnen Sie mit geringerer Genauigkeit als bei den 7B–8B-Modellen.',
          '**Größere Optionen**: Qwen3-VL 30B-A3B (20 GB), Qwen3-VL 32B und Qwen2.5-VL 32B (21 GB) sowie Qwen2.5-VL 72B (49 GB) benötigen eine große GPU, mehrere GPUs oder Apple Silicon mit viel Unified Memory.',
          '**Teilweises Auslagern**: Passt ein Modell nicht ins VRAM, kann Ollama einen Teil in den System-RAM legen; das funktioniert, ist aber deutlich langsamer.',
          '**Software**: Ollama 0.12.7+ für Qwen3-VL und 0.7.0+ für Qwen2.5-VL, wie auf den Seiten der Ollama-Bibliothek angegeben.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum hat diese Modelle für diesen Leitfaden nicht auf bestimmten GPUs gemessen, daher werden keine Geschwindigkeits- oder exakten VRAM-Werte genannt. Führen Sie nach dem Laden eines Modells `ollama ps` aus, um den tatsächlichen Speicherbedarf auf Ihrem Rechner zu sehen.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Qwen2.5-VL und Qwen3-VL mit Ollama einrichten',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-de.svg',
        imageCaption: 'Ollama-Einrichtung in 5 Schritten: Ollama installieren oder aktualisieren, einen Qwen-Vision-Tag laden, ausführen und ein Bild anhängen, per API senden und CJK-OCR prüfen.',
        content: [
          'Ollama ist der schnellste Weg, Qwen-Vision-Modelle lokal zu betreiben. Es lädt das Modell herunter, verwaltet die Quantisierung und stellt eine API unter localhost:11434 bereit. Installieren Sie es von [ollama.com](https://ollama.com/download) – oder beginnen Sie als Neuling mit [Ollama installieren](/de/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Ollama installieren oder aktualisieren', whyItMatters: 'Qwen2.5-VL benötigt Ollama 0.7.0 oder neuer, Qwen3-VL benötigt 0.12.7 oder neuer. Prüfen Sie mit `ollama --version` und aktualisieren Sie bei Bedarf. Ollama ist für macOS, Linux und Windows verfügbar.' },
          { title: 'Modell mit explizitem Tag laden', whyItMatters: 'Verwenden Sie `qwen3-vl:8b` oder `qwen2.5vl:7b`. Nutzen Sie nicht `qwen2-vl:7b` – der Tag ist nicht in der offiziellen Ollama-Bibliothek, der Download schlägt fehl.' },
          { title: 'Modell ausführen und Bild anhängen', whyItMatters: 'Geben Sie im interaktiven Modus den Pfad der Bilddatei im Prompt an. Ollama erkennt den Pfad und lädt das Bild.' },
          { title: 'Bilder über die API senden', whyItMatters: 'Der Endpunkt /api/generate akzeptiert ein Base64-codiertes Array `images` ohne das Präfix data:. So senden Anwendungen – und PromptQuorum – Bilder programmatisch.' },
          { title: 'Mehrsprachige OCR prüfen', whyItMatters: 'Senden Sie den Scan eines chinesischen oder japanischen Dokuments und vergleichen Sie den extrahierten Text mit der Vorlage, bevor Sie darauf aufbauen.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Senden Sie Dokumentbilder mit mindestens 150 DPI. Die Bildqualität ist der wichtigste Faktor für OCR-Ergebnisse – ein unscharfer Scan führt bei jedem Modell zu falschen Zeichen.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Qwen-Vision-Modelle mit LM Studio einrichten',
        content: [
          'LM Studio führt Vision-Modelle über eine grafische Oberfläche ohne Terminal-Befehle aus. Laden Sie es von [lmstudio.ai](https://lmstudio.ai) herunter oder lesen Sie [LM Studio installieren](/de/local-llms/how-to-install-lm-studio). Der Modellkatalog ändert sich im Lauf der Zeit; prüfen Sie daher, was er aktuell für Qwen anbietet.',
        ],
        numberedItems: [
          { title: 'LM Studio herunterladen und installieren', whyItMatters: 'Eine plattformübergreifende Oberfläche für lokale Modellinferenz. Kein Terminal erforderlich.' },
          { title: 'Nach Qwen-Vision-Modellen suchen', whyItMatters: 'Suchen Sie im Modellbrowser nach „Qwen3-VL“ oder „Qwen2.5-VL“ und wählen Sie einen Build, dessen Modellkarte Vision-Unterstützung nennt. Passen Sie die Quantisierung an Ihren Speicher an.' },
          { title: 'Modell laden und Bild anhängen', whyItMatters: 'Nutzen Sie die Bild-Schaltfläche im Chatfeld, um ein Foto oder einen Scan hochzuladen. LM Studio reicht es an den Vision-Encoder weiter.' },
          { title: 'Lokalen Server starten', whyItMatters: 'Die Option „Start Server“ stellt eine OpenAI-kompatible API unter localhost:1234 bereit. Vision-Anfragen verwenden das Standardformat image_url.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'LM Studio und Ollama verwenden unterschiedliche Bildformate: LM Studio folgt dem OpenAI-Schema image_url (mit Präfix data:); Ollama nutzt ein übergeordnetes Array `images` mit rohem Base64 (ohne Präfix). Wählen Sie eine Runtime und halten Sie sich an deren Format.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'Dokumenten-OCR für chinesische, japanische und gemischtsprachige Dateien',
        content: [
          '**Qwen-Vision-Modelle können Text aus chinesischen, japanischen, koreanischen und gemischtsprachigen Dokumenten extrahieren, doch die Genauigkeit hängt von Scanqualität und Layout ab – testen Sie mit Ihren eigenen Dokumenten.** Die Karte von Qwen3-VL nennt OCR für 32 Sprachen, die von Qwen2.5-VL beschreibt strukturierte Ausgaben für Scans von Rechnungen, Formularen und Tabellen.',
          'Das zuverlässigste Muster ist ein konkreter Extraktions-Prompt. Fordern Sie Struktur an – „Tabellenlayout beibehalten“, „jedes Feld als Schlüssel: Wert ausgeben“ – statt eines vagen „lies das“.',
        ],
        items: [
          '**Reine Textextraktion**: „Extrahiere jede Textzeile aus diesem Bild. Behalte Zeilenumbrüche und Leserichtung bei.“',
          '**Strukturierte Felder**: „Dies ist eine japanische Rechnung. Gib Lieferant, Datum, Zwischensumme, Steuer und Gesamtbetrag als Schlüssel: Wert aus.“',
          '**Tabellenextraktion**: „Extrahiere diese Tabelle als CSV. Behandle die erste Zeile als Kopfzeile.“',
          '**Extrahieren und übersetzen in einem Durchgang**: „Extrahiere den chinesischen Text aus diesem Bild und übersetze ihn ins Englische. Zeige beides.“',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Prüfen Sie extrahierte Zahlen immer anhand des Originaldokuments. Lokale Vision-Modelle können bei Scans schlechter Qualität eine Ziffer falsch lesen. Behandeln Sie die OCR-Ausgabe als Entwurf, der zu bestätigen ist, nicht als Endwert – besonders bei Rechnungen und Finanzdokumenten.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Um Text aus einem CJK-Dokument zu extrahieren, senden Sie das Bild mit 150+ DPI an qwen3-vl:8b oder qwen2.5vl:7b mit einem konkreten Prompt, der Struktur verlangt, etwa „jedes Feld als Schlüssel: Wert ausgeben“.' },
          { type: 'plain-terms', text: 'OCR bedeutet, das Bild eines Textes in bearbeitbaren Text umzuwandeln. Das Modell betrachtet eine gescannte Seite und schreibt auf, was es sieht.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Bildfragen, Screenshot-Analyse und Diagramme lesen',
        content: [
          'Über OCR hinaus beschreiben Qwen-Vision-Modelle Fotos, beantworten Fragen zu Screenshots und lesen Diagramme. Die Ergebnisse sind bei klarer Eingabe am besten und bei unübersichtlichen oder mehrdeutigen Szenen schwächer.',
        ],
        items: [
          '**Bildfragen**: Stellen Sie offene Fragen zu einem Foto – „Was ist auf diesem Bild zu sehen?“ – und prüfen Sie die Antworten am Bild.',
          '**Screenshot- und UI-Analyse**: Beginnen Sie mit dem Lesen von UI-Screenshots, Fehlerdialogen und App-Zuständen. Die Karten beider Modelle beschreiben auch GUI-Agent-Fähigkeiten, die dieser Leitfaden nicht behandelt.',
          '**Diagramme lesen**: Struktur und Trends eines Diagramms zu beschreiben funktioniert besser als exakte Zahlen zu extrahieren; bestätigen Sie genaue Werte anhand der zugrunde liegenden Daten.',
          '**Vergleich mehrerer Bilder**: Senden Sie mehrere Bilder in einer Anfrage, um Versionen zu vergleichen oder eine Reihe zu beschreiben; wie viele passen, hängt von Speicher und Kontextgröße ab.',
        ],
        callouts: [
          { type: 'tip', text: 'Einen Überblick über weitere lokale Vision-Modelle bietet der [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026).' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL, Qwen2.5-VL und Qwen3-VL im Vergleich',
        content: [
          '**Qwen2-VL ist das älteste der drei Modelle und das einzige ohne offiziellen Eintrag in der Ollama-Bibliothek; Qwen2.5-VL und Qwen3-VL sind die aktuellen Optionen.** Die Tabelle fasst zusammen, was sich in der Ollama-Bibliothek und auf den Hugging-Face-Karten prüfen lässt.',
        ],
        rows: [
          { 'Generation': 'Qwen2-VL', 'Erschienen': '2024', 'Offizieller Ollama-Tag': 'Keiner (Seite liefert 404)', 'Lizenz (HF-Karte)': 'Apache 2.0 (2B/7B); Qwen-Lizenz (72B)', 'Hinweise': 'Nur historisch' },
          { 'Generation': 'Qwen2.5-VL', 'Erschienen': '2025', 'Offizieller Ollama-Tag': 'qwen2.5vl (3b, 7b, 32b, 72b)', 'Lizenz (HF-Karte)': 'Apache 2.0 (7B/32B); Qwen-Lizenzen (3B/72B)', 'Hinweise': '125K Kontext bei Ollama' },
          { 'Generation': 'Qwen3-VL', 'Erschienen': '2025', 'Offizieller Ollama-Tag': 'qwen3-vl (2b bis 235b)', 'Lizenz (HF-Karte)': 'Apache 2.0 (alle geprüften Größen)', 'Hinweise': '256K Kontext; Instruct und Thinking' },
        ],
        columns: ['Generation', 'Erschienen', 'Offizieller Ollama-Tag', 'Lizenz (HF-Karte)', 'Hinweise'],
        tableFormat: true,
        note: 'Die Zeile zu Qwen2-VL beruht auf einer Prüfung von [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl), die zum Zeitpunkt der letzten Aktualisierung dieser Seite HTTP 404 lieferte. Es gibt weitere lokale Vision-Modelle; diese Seite reiht sie nicht ein – siehe den [Vergleich lokaler Vision-Modelle](/de/power-local-llm/local-vision-models-llava-ollama-2026).',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Ein lokales Qwen-Vision-Modell mit PromptQuorum verbinden',
        content: [
          'PromptQuorum kann einen lokalen Ollama-Server als einen seiner Modell-Endpunkte nutzen. Ollama stellt eine OpenAI-kompatible API unter `http://localhost:11434/v1` bereit; richten Sie die Einstellung für lokale Modelle auf diese Adresse und wählen Sie den geladenen Vision-Tag, zum Beispiel `qwen3-vl:8b`. Die genauen Feldnamen finden Sie in den App-Einstellungen.',
          'Bildanfragen an einen lokalen Endpunkt verarbeitet Ihr Ollama-Server statt einer Cloud-Vision-API, während Cloud-Modelle für andere Aufgaben verfügbar bleiben. Welche Modelle Sie ansprechen, entscheiden Sie selbst, und jedes hinzugefügte Cloud-Modell erhält, was Sie ihm senden.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Verbinden Sie PromptQuorum mit einem lokalen Qwen-Vision-Modell, indem Sie den lokalen Endpunkt auf http://localhost:11434/v1 richten und den geladenen Tag wählen, etwa qwen3-vl:8b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Fehlerbehebung bei Qwen-Vision-Modellen',
        items: [
          '**„pull model manifest: file does not exist“ oder unbekanntes Modell**: Der Tag ist nicht in der offiziellen Bibliothek. `qwen2-vl:7b` ist nicht verfügbar – nutzen Sie `ollama pull qwen3-vl:8b` oder `ollama pull qwen2.5vl:7b`.',
          '**Der Download klappt, aber das Modell lädt nicht**: Aktualisieren Sie Ollama. Qwen2.5-VL benötigt 0.7.0+, Qwen3-VL benötigt 0.12.7+.',
          '**Das Bild wird ignoriert und das Modell antwortet, als gäbe es keins**: Prüfen Sie, ob der Dateipfad korrekt und lesbar ist. In der Ollama-API muss das Array `images` rohes Base64 *ohne* das Präfix `data:` enthalten – das Präfix `data:` gilt nur für das Format von LM Studio und OpenAI.',
          '**Unleserliche oder fehlende CJK-Zeichen**: Der Scan hat vermutlich zu geringe Auflösung. Scannen Sie erneut mit 150–300 DPI und vergleichen Sie das Ergebnis.',
          '**Nicht genug Speicher**: Wählen Sie einen kleineren Tag (zum Beispiel `qwen3-vl:4b` oder `qwen2.5vl:3b`), verringern Sie Kontextgröße oder Bildauflösung oder nutzen Sie Apple Silicon, das Unified Memory zwischen CPU und GPU teilt.',
          '**Falsche Zahlen aus einer Rechnung oder einem Diagramm**: Lokale Vision-Modelle können bei verrauschter Eingabe Ziffern falsch lesen. Verbessern Sie die Scanqualität und prüfen Sie numerische Ausgaben immer am Original.',
          '**Ein PDF lässt sich nicht laden**: Die Ollama-API nimmt Bilder, keine PDF-Dateien. Wandeln Sie die Seiten zuerst in PNG oder JPEG um (mit pdf2image oder pypdfium2) und senden Sie jede Seite als eigenes Bild.',
          '**LM Studio meldet „failed to load model“**: Entweder reicht der Speicher nicht, oder Sie haben einen Build ohne Vision geladen. Prüfen Sie, ob die Modellkarte Vision-Unterstützung nennt, und probieren Sie eine kleinere Quantisierung.',
        ],
        callouts: [
          { type: 'tip', text: 'Führen Sie `ollama ps` aus, um zu sehen, welche Modelle geladen sind und wie viel Speicher jedes belegt. Mit `ollama stop qwen3-vl:8b` entladen Sie ein Modell, bevor Sie ein größeres laden.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Lektüre',
        items: [
          '[Qwen 3 lokal ausführen](/de/local-llms/run-qwen-locally-guide-2026) – das Textmodell-Pendant: Ollama- und LM-Studio-Einrichtung für die Qwen-Sprachmodelle.',
          '[Lokale Vision-Modelle im Vergleich: LLaVA, Llama 3.2 Vision, MiniCPM-V](/de/power-local-llm/local-vision-models-llava-ollama-2026) – der vollständige Überblick über weitere lokale Vision-Modelle.',
          '[Multimodale lokale LLMs: Bild, Audio und Text](/de/local-llms/multimodal-local-llms) – breiterer Überblick über den lokalen Betrieb multimodaler Modelle.',
          '[Qwen vs Llama vs Mistral](/de/local-llms/qwen-vs-llama-vs-mistral) – wie die Qwen-Textmodelle im Vergleich zu den Alternativen dastehen.',
          '[Hardware-Leitfaden für lokale LLMs](/de/local-llms/local-llm-hardware-guide) – VRAM- und GPU-Anforderungen für lokale Inferenz.',
          '[Alle Leitfäden zu lokalen LLMs](/de/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          { q: 'Warum schlägt ollama pull qwen2-vl:7b fehl?', a: 'Weil Qwen2-VL keinen Eintrag in der offiziellen Ollama-Bibliothek hat – die Bibliotheksseite liefert HTTP 404. Nutzen Sie stattdessen `ollama pull qwen2.5vl:7b` (Ollama 0.7.0+) oder `ollama pull qwen3-vl:8b` (Ollama 0.12.7+). Die aktuelle Liste finden Sie unter [ollama.com/library](https://ollama.com/library).' },
          { q: 'Sollte ich Qwen2.5-VL oder Qwen3-VL verwenden?', a: 'Qwen3-VL ist die neuere Generation (Qwen nennt es das bislang leistungsstärkste Vision-Language-Modell seiner Reihe), erfordert aber Ollama 0.12.7 oder neuer. Qwen2.5-VL läuft ab Ollama 0.7.0 und reicht von 3B bis 72B. Probieren Sie beide an einigen Ihrer Dokumente aus; die Genauigkeit hängt von Ihrem Material ab.' },
          { q: 'Welche Mindest-Hardware brauche ich für diese Modelle?', a: 'Es gibt keinen einheitlichen Wert. Die Download-Größen bei Ollama betragen 1,9 GB (Qwen3-VL 2B), 3,3 GB (4B), 6,1 GB (8B) sowie 3,2 GB (Qwen2.5-VL 3B), 6,0 GB (7B). Kontext-Cache und Bild-Encoder brauchen zusätzlichen Speicher, planen Sie also Reserve ein und prüfen Sie den tatsächlichen Bedarf mit `ollama ps`.' },
          { q: 'Können diese Modelle PDFs direkt lesen?', a: 'Nicht über Ollama: Dessen API nimmt Bilder entgegen. Wandeln Sie jede PDF-Seite zuerst in PNG oder JPEG um (mit pdf2image oder pypdfium2), senden Sie jede Seite als eigene Bildanfrage und führen Sie die Ergebnisse zusammen.' },
          { q: 'Wie sende ich ein Bild über Ollama?', a: 'Auf zwei Wegen. Im interaktiven Modus (`ollama run qwen3-vl:8b`) geben Sie den Pfad der Bilddatei im Prompt an – Ollama erkennt ihn und lädt das Bild. Über die API senden Sie einen POST an /api/generate mit einem Base64-codierten Array `images`. Der Base64-String darf das Präfix `data:` nicht enthalten.' },
          { q: 'Laufen die Modelle vollständig offline?', a: 'Nach dem einmaligen Download läuft die Inferenz auf Ihrem eigenen Rechner ohne Cloud-Konto, sodass Ollama die gesendeten Bilder nicht an eine Cloud-API hochlädt. Andere Software auf dem Rechner kann weiterhin Daten versenden, und die datenschutzrechtlichen Pflichten Ihres Arbeitsablaufs gelten weiter – dies ist keine Rechtsberatung. Mehr dazu im [Qwen-DSGVO-Einrichtungsleitfaden für lokalen Betrieb](/de/local-llms/qwen-local-gdpr-setup-guide-2026).' },
          { q: 'Darf ich sie kommerziell nutzen?', a: 'Das hängt von Größe und Lizenz auf der Modellkarte ab. Die Hugging-Face-Karten nennen Apache 2.0 für Qwen3-VL sowie für Qwen2.5-VL 7B und 32B und Qwen-Lizenzen für Qwen2.5-VL 3B und 72B. Lesen Sie vor kommerzieller Nutzung den aktuellen Lizenztext.' },
          { q: 'Warum sind die Zeichen in meiner OCR-Ausgabe unleserlich?', a: 'Meist liegt es an einem unscharfen oder niedrig aufgelösten Scan. Scannen Sie das Dokument erneut mit 150–300 DPI und vergleichen Sie. Schlechte Eingabequalität ist bei jedem lokalen Vision-Modell die größte Ursache für OCR-Fehler.' },
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-fr.webp',
    title: 'Exécuter Qwen2.5-VL et Qwen3-VL en local en 2026 : guide de l\'OCR de documents et de la vision',
    seoTitle: 'Qwen2.5-VL et Qwen3-VL en local 2026 : guide Ollama',
    intro: 'Qwen2.5-VL et Qwen3-VL sont les modèles vision-langage ouverts d\'Alibaba pour lire des documents, des captures d\'écran, des graphiques et des photos, et tous deux s\'exécutent en local via Ollama. Qwen3-VL 8B se télécharge en 6.1 Go (`ollama pull qwen3-vl:8b`) et Qwen2.5-VL 7B en 6.0 Go (`ollama pull qwen2.5vl:7b`). Qwen2-VL, le modèle que cette page traitait à l\'origine, est la génération précédente et n\'a pas d\'entrée officielle dans la bibliothèque Ollama : `ollama pull qwen2-vl:7b` échoue donc. Ce guide donne les tags, tailles et licences vérifiés, la configuration avec Ollama et LM Studio, et des prompts pratiques pour extraire des documents en chinois, japonais et coréen.',
    metaDescription: 'Exécutez Qwen2.5-VL et Qwen3-VL en local avec Ollama : tags, tailles et licences vérifiés, installation et OCR de documents. Qwen2-VL est dépassé.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    audience: 'Développeurs et analystes qui ont besoin d\'OCR de documents hors ligne et de compréhension d\'images — notamment pour des fichiers en chinois, japonais et multilingues — sans envoyer de données à des API cloud',
    primaryTerm: 'exécuter Qwen2.5-VL et Qwen3-VL en local',
    targetKeywords: [
      'exécuter Qwen3-VL en local 2026',
      'configuration Qwen2.5-VL Ollama',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'alternative à Qwen2-VL sur Ollama',
      'OCR chinois japonais LLM local',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**Exécutez `ollama pull qwen3-vl:8b` (6.1 Go, nécessite Ollama 0.12.7 ou plus récent) ou `ollama pull qwen2.5vl:7b` (6.0 Go, nécessite Ollama 0.7.0 ou plus récent) pour lire documents et images en local.** L\'ancien tag `qwen2-vl:7b` n\'est pas dans la bibliothèque officielle d\'Ollama ; utilisez donc Qwen2.5-VL ou Qwen3-VL. Les images que vous envoyez sont traitées par votre serveur Ollama local au lieu d\'être téléversées vers une API cloud.',
    quickAnswerTop: {
      fr: {
        question: 'Comment exécuter les modèles de vision Qwen en local en 2026 ?',
        answer: 'Mettez Ollama à jour, lancez `ollama pull qwen3-vl:8b` (ou `qwen2.5vl:7b` avec une version plus ancienne d\'Ollama), puis `ollama run qwen3-vl:8b` et saisissez le chemin d\'une image dans votre prompt. Pour une interface graphique, cherchez Qwen3-VL ou Qwen2.5-VL dans LM Studio et choisissez une version dont la fiche indique la prise en charge de la vision. Les deux modèles se téléchargent en 6 Go environ ; prévoyez de la mémoire supplémentaire pour le contexte et l\'encodeur d\'images.',
        bullets: [
          'Version d\'Ollama : 0.12.7+ pour Qwen3-VL, 0.7.0+ pour Qwen2.5-VL (selon les pages de la bibliothèque Ollama)',
          'Télécharger un modèle : ollama pull qwen3-vl:8b (6.1 Go) ou ollama pull qwen2.5vl:7b (6.0 Go)',
          'Joindre des images : saisissez le chemin du fichier dans le prompt (CLI) ou envoyez un tableau images en base64 (API)',
          'Tag obsolète : qwen2-vl:7b n\'est pas dans la bibliothèque officielle d\'Ollama — utilisez qwen2.5vl ou qwen3-vl',
          'Licences : Qwen3-VL et Qwen2.5-VL 7B/32B sont sous Apache 2.0 sur leurs fiches Hugging Face ; Qwen2.5-VL 3B et 72B utilisent des licences Qwen',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Quel modèle de vision Qwen exécuter ?', anchor: '#why-qwen-vl' },
      { label: 'Tags, tailles et licences', anchor: '#choose-model' },
      { label: 'Configuration matérielle requise', anchor: '#hardware' },
      { label: 'Configuration avec Ollama', anchor: '#ollama-setup' },
      { label: 'Configuration avec LM Studio', anchor: '#lm-studio-setup' },
      { label: 'OCR de documents CJK', anchor: '#ocr-use-case' },
      { label: 'Questions sur images, captures d\'écran et graphiques', anchor: '#other-use-cases' },
      { label: 'Comparaison Qwen2-VL, Qwen2.5-VL et Qwen3-VL', anchor: '#vs-other-models' },
      { label: 'Connexion à PromptQuorum', anchor: '#promptquorum' },
      { label: 'Dépannage', anchor: '#troubleshooting' },
      { label: 'Lecture associée', anchor: '#related-reading' },
      { label: 'Questions fréquentes', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Utilisez Qwen3-VL ou Qwen2.5-VL, pas Qwen2-VL** : les deux ont une entrée officielle dans la bibliothèque Ollama (`qwen3-vl`, `qwen2.5vl`), alors que `ollama.com/library/qwen2-vl` renvoie une 404 et que `ollama pull qwen2-vl:7b` échoue.',
          '**Qwen3-VL 8B se télécharge en 6.1 Go** (`ollama pull qwen3-vl:8b`, nécessite Ollama 0.12.7+) ; **Qwen2.5-VL 7B fait 6.0 Go** (`ollama pull qwen2.5vl:7b`, nécessite Ollama 0.7.0+).',
          '**Tailles** : Qwen3-VL 2B, 4B, 8B, 30B-A3B, 32B et 235B-A22B (de 1.9 Go à 143 Go) ; Qwen2.5-VL 3B, 7B, 32B et 72B (de 3.2 Go à 49 Go). Ce sont les tailles de téléchargement indiquées par les pages de la bibliothèque Ollama.',
          '**Contexte** : les pages Ollama indiquent une fenêtre de contexte de 256K pour Qwen3-VL et de 125K pour Qwen2.5-VL ; le contexte réellement utilisable dépend de votre mémoire.',
          '**Les licences varient selon la taille** : Qwen3-VL et Qwen2.5-VL 7B/32B sont sous Apache 2.0 sur leurs fiches Hugging Face ; Qwen2.5-VL 3B et 72B utilisent des licences Qwen. Lisez la fiche avant tout usage commercial.',
          '**Pas d\'entrée PDF directe** : convertissez d\'abord les pages du PDF en PNG ou JPEG, puis envoyez chaque page comme image distincte.',
          '**Un traitement local ne garantit pas la conformité** : les images sont gérées par votre propre serveur Ollama plutôt que par une API cloud, mais le RGPD et les autres obligations liées à votre flux de travail continuent de s\'appliquer.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'Quel modèle de vision Qwen exécuter ?',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-fr.svg',
        imageCaption: 'Pipeline de vision : une image passe par l\'encodeur de vision jusqu\'au modèle de langage et renvoie du texte d\'OCR ou de questions-réponses, traité par votre serveur Ollama local.',
        content: [
          '**Commencez par Qwen3-VL 8B si votre Ollama est en 0.12.7 ou plus récent, et par Qwen2.5-VL 7B s\'il est plus ancien.** Qwen décrit Qwen3-VL comme le modèle vision-langage le plus puissant de la série Qwen à ce jour ; sa fiche Hugging Face mentionne l\'OCR pour 32 langues, un contexte natif de 256K et des éditions Instruct et Thinking.',
          'Qwen2.5-VL est la génération précédente. Sa fiche met en avant la compréhension des documents, graphiques et mises en page, la sortie structurée pour des scans de factures, formulaires et tableaux, et la localisation visuelle par boîtes englobantes. Dans Ollama, les deux générations acceptent du texte et des images en entrée.',
          'Qwen2-VL, la génération que cette page décrivait à l\'origine, appartient au passé : sorti en 2024, il a été remplacé par Qwen2.5-VL et Qwen3-VL. Rien dans ce guide n\'en dépend.',
          'Il s\'agit de descriptions de l\'équipe Qwen, pas de mesures de PromptQuorum. La précision sur vos documents — surtout avec de petites polices, de l\'écriture manuscrite ou des scans de mauvaise qualité — varie ; testez donc quelques pages représentatives avant de vous appuyer dessus.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Exécutez les modèles de vision Qwen en local avec `ollama pull qwen3-vl:8b` (6.1 Go) ou `ollama pull qwen2.5vl:7b` (6.0 Go) ; l\'ancien tag `qwen2-vl` n\'est plus dans la bibliothèque officielle d\'Ollama.' },
          { type: 'plain-terms', text: 'Un modèle vision-langage lit des images au lieu d\'en générer. Vous lui donnez une photo ou une page numérisée, et il renvoie du texte : une description, une réponse ou le contenu extrait.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Tags Ollama, tailles et licences de Qwen3-VL et Qwen2.5-VL',
        content: [
          'Les tailles ci-dessous sont les tailles de téléchargement affichées sur les pages de la bibliothèque Ollama ([qwen3-vl](https://ollama.com/library/qwen3-vl) et [qwen2.5vl](https://ollama.com/library/qwen2.5vl)) ; les licences proviennent des fiches Hugging Face des versions Instruct ([Qwen sur Hugging Face](https://huggingface.co/Qwen)). Revérifiez les deux avant de vous y fier, car bibliothèques et licences évoluent.',
        ],
        rows: [
          { 'Modèle': 'Qwen3-VL 2B', 'Tag Ollama': 'qwen3-vl:2b', 'Téléchargement': '1.9 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen3-VL 4B', 'Tag Ollama': 'qwen3-vl:4b', 'Téléchargement': '3.3 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen3-VL 8B', 'Tag Ollama': 'qwen3-vl:8b', 'Téléchargement': '6.1 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen3-VL 30B-A3B (MoE)', 'Tag Ollama': 'qwen3-vl:30b', 'Téléchargement': '20 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen3-VL 32B', 'Tag Ollama': 'qwen3-vl:32b', 'Téléchargement': '21 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen3-VL 235B-A22B (MoE)', 'Tag Ollama': 'qwen3-vl:235b', 'Téléchargement': '143 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen2.5-VL 3B', 'Tag Ollama': 'qwen2.5vl:3b', 'Téléchargement': '3.2 Go', 'Licence (fiche HF)': 'Licence Qwen Research' },
          { 'Modèle': 'Qwen2.5-VL 7B', 'Tag Ollama': 'qwen2.5vl:7b', 'Téléchargement': '6.0 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen2.5-VL 32B', 'Tag Ollama': 'qwen2.5vl:32b', 'Téléchargement': '21 Go', 'Licence (fiche HF)': 'Apache 2.0' },
          { 'Modèle': 'Qwen2.5-VL 72B', 'Tag Ollama': 'qwen2.5vl:72b', 'Téléchargement': '49 Go', 'Licence (fiche HF)': 'Licence Qwen' },
        ],
        columns: ['Modèle', 'Tag Ollama', 'Téléchargement', 'Licence (fiche HF)'],
        tableFormat: true,
        note: 'Choisissez la taille adaptée à votre mémoire : Qwen3-VL 8B ou Qwen2.5-VL 7B pour la plupart des machines à un seul GPU, les tags 2B–4B ou 3B pour les petits GPU, et les tags 30B+ uniquement avec un gros GPU ou beaucoup de mémoire unifiée. Ollama publie aussi des tags `-instruct` et `-thinking` pour Qwen3-VL (par exemple `qwen3-vl:8b-instruct`, 6.2 Go) ; utilisez un tag Instruct si vous voulez une sortie d\'extraction directe, sans texte de raisonnement. Les tags par défaut ont la même taille que leurs variantes `q4_K_M` — voir [la quantification des LLM expliquée](/fr/local-llms/llm-quantization-explained).',
      },
      hardware: {
        id: 'hardware',
        title: 'Configuration matérielle requise pour les modèles de vision Qwen',
        items: [
          '**Les tailles de téléchargement ne comptent que les poids** : Qwen3-VL 8B fait 6.1 Go et Qwen2.5-VL 7B fait 6.0 Go. Le cache de contexte et l\'encodeur d\'images demandent de la mémoire supplémentaire, qui croît avec la longueur du contexte et la taille de l\'image ; gardez donc de la marge au-dessus de la taille de téléchargement.',
          '**Options plus petites** : Qwen3-VL 2B (1.9 Go) et 4B (3.3 Go) ou Qwen2.5-VL 3B (3.2 Go) conviennent aux petits GPU et aux portables ; attendez-vous à une précision inférieure à celle des modèles 7B–8B.',
          '**Options plus grandes** : Qwen3-VL 30B-A3B (20 Go), Qwen3-VL 32B et Qwen2.5-VL 32B (21 Go) et Qwen2.5-VL 72B (49 Go) exigent un gros GPU, plusieurs GPU ou un Apple Silicon avec beaucoup de mémoire unifiée.',
          '**Déport partiel** : quand un modèle ne tient pas dans la VRAM, Ollama peut en placer une partie dans la RAM système ; cela fonctionne, mais c\'est nettement plus lent.',
          '**Logiciel** : Ollama 0.12.7+ pour Qwen3-VL et 0.7.0+ pour Qwen2.5-VL, comme l\'indiquent les pages de la bibliothèque Ollama.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum n\'a pas testé ces modèles sur des GPU précis pour ce guide ; aucun chiffre de vitesse ni de VRAM exacte n\'est donc donné. Exécutez `ollama ps` après avoir chargé un modèle pour voir la mémoire qu\'il utilise réellement sur votre machine.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configurer Qwen2.5-VL et Qwen3-VL avec Ollama',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-fr.svg',
        imageCaption: 'Configuration d\'Ollama en 5 étapes : installer ou mettre à jour Ollama, récupérer un tag de vision Qwen, exécuter et joindre une image, l\'envoyer via l\'API, puis vérifier l\'OCR CJK.',
        content: [
          'Ollama est le moyen le plus rapide d\'exécuter les modèles de vision Qwen en local. Il télécharge le modèle, gère la quantification et expose une API sur localhost:11434. Installez-le depuis [ollama.com](https://ollama.com/download) — ou, si vous débutez, commencez par [comment installer Ollama](/fr/local-llms/how-to-install-ollama).',
        ],
        numberedItems: [
          { title: 'Installer ou mettre à jour Ollama', whyItMatters: 'Qwen2.5-VL nécessite Ollama 0.7.0 ou plus récent et Qwen3-VL nécessite 0.12.7 ou plus récent. Vérifiez avec `ollama --version` et mettez à jour si besoin. Ollama est disponible pour macOS, Linux et Windows.' },
          { title: 'Récupérer un modèle avec un tag explicite', whyItMatters: 'Utilisez `qwen3-vl:8b` ou `qwen2.5vl:7b`. N\'utilisez pas `qwen2-vl:7b` : il n\'est pas dans la bibliothèque officielle d\'Ollama, donc le téléchargement échoue.' },
          { title: 'Exécuter le modèle et joindre une image', whyItMatters: 'En mode interactif, saisissez le chemin du fichier image dans votre prompt. Ollama détecte le chemin et charge l\'image.' },
          { title: 'Envoyer des images via l\'API', whyItMatters: 'Le point d\'accès /api/generate accepte un tableau `images` encodé en base64, sans le préfixe data:. C\'est ainsi que les applications — et PromptQuorum — envoient des images par programme.' },
          { title: 'Vérifier l\'OCR multilingue', whyItMatters: 'Envoyez le scan d\'un document en chinois ou en japonais et comparez le texte extrait avec la source avant de construire dessus.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'Envoyez les images de documents à 150 DPI ou plus. La qualité de l\'image est le facteur le plus important pour l\'OCR : un scan flou produit des caractères erronés quel que soit le modèle.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'Configurer les modèles de vision Qwen avec LM Studio',
        content: [
          'LM Studio exécute les modèles de vision via une interface graphique, sans commande de terminal. Téléchargez-le sur [lmstudio.ai](https://lmstudio.ai) ou consultez [comment installer LM Studio](/fr/local-llms/how-to-install-lm-studio). Son catalogue de modèles évolue ; vérifiez donc ce qu\'il propose actuellement pour Qwen.',
        ],
        numberedItems: [
          { title: 'Télécharger et installer LM Studio', whyItMatters: 'Une interface graphique multiplateforme pour l\'inférence locale de modèles. Aucun terminal requis.' },
          { title: 'Rechercher les modèles de vision Qwen', whyItMatters: 'Cherchez « Qwen3-VL » ou « Qwen2.5-VL » dans le navigateur de modèles et choisissez une version dont la fiche indique la prise en charge de la vision. Adaptez la quantification à votre mémoire.' },
          { title: 'Charger le modèle et joindre une image', whyItMatters: 'Utilisez le bouton d\'image de la zone de chat pour importer une photo ou un scan. LM Studio la transmet à l\'encodeur de vision.' },
          { title: 'Démarrer le serveur local', whyItMatters: 'L\'option « Start Server » expose une API compatible OpenAI sur localhost:1234. Les requêtes de vision utilisent le format de contenu standard image_url.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'LM Studio et Ollama utilisent des formats d\'image différents : LM Studio suit le schéma de contenu image_url d\'OpenAI (avec préfixe data:) ; Ollama utilise un tableau `images` de premier niveau en base64 brut (sans préfixe). Choisissez un runtime et respectez son format.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: 'OCR de documents en chinois, japonais et multilingues',
        content: [
          '**Les modèles de vision Qwen peuvent extraire le texte de documents en chinois, japonais, coréen et multilingues, mais la précision dépend de la qualité du scan et de la mise en page — testez sur vos propres documents.** La fiche de Qwen3-VL mentionne l\'OCR pour 32 langues, et celle de Qwen2.5-VL décrit la sortie structurée pour des scans de factures, formulaires et tableaux.',
          'Le schéma le plus fiable est un prompt d\'extraction précis. Demandez de la structure — « conserve la mise en page du tableau », « renvoie chaque champ sous la forme clé : valeur » — plutôt qu\'un vague « lis ceci ».',
        ],
        items: [
          '**Extraction de texte brut** : « Extrais chaque ligne de texte de cette image. Conserve les sauts de ligne et l\'ordre de lecture. »',
          '**Champs structurés** : « Ceci est une facture japonaise. Renvoie fournisseur, date, sous-total, taxe et total sous forme de paires clé : valeur. »',
          '**Extraction de tableaux** : « Extrais ce tableau en CSV. Considère la première ligne comme l\'en-tête. »',
          '**Extraire et traduire en une passe** : « Extrais le texte chinois de cette image, puis traduis-le en anglais. Montre les deux. »',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: 'Vérifiez toujours les nombres extraits par rapport au document source. Les modèles de vision locaux peuvent mal lire un chiffre sur un scan de mauvaise qualité. Considérez la sortie d\'OCR comme un brouillon à confirmer, pas comme une valeur définitive, surtout pour les factures et les documents financiers.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Pour extraire le texte d\'un document CJK, envoyez l\'image en 150+ DPI à qwen3-vl:8b ou qwen2.5vl:7b avec un prompt précis qui demande de la structure, par exemple « renvoie chaque champ sous la forme clé : valeur ».' },
          { type: 'plain-terms', text: 'L\'OCR consiste à transformer l\'image d\'un texte en texte modifiable. Le modèle regarde une page numérisée et écrit ce qu\'il voit.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: 'Questions sur images, analyse de captures d\'écran et lecture de graphiques',
        content: [
          'Au-delà de l\'OCR, les modèles de vision Qwen décrivent des photos, répondent à des questions sur des captures d\'écran et lisent des graphiques. Les résultats sont meilleurs sur des entrées nettes et plus faibles sur des scènes encombrées ou ambiguës.',
        ],
        items: [
          '**Questions sur images** : posez des questions ouvertes sur une photo — « Que voit-on sur cette image ? » — et vérifiez les réponses avec l\'image.',
          '**Analyse de captures et d\'interfaces** : commencez par lire des captures d\'interface, des boîtes d\'erreur et des états d\'application. Les fiches des deux modèles décrivent aussi des capacités d\'agent pour interfaces graphiques, que ce guide ne couvre pas.',
          '**Lecture de graphiques** : décrire la structure et les tendances d\'un graphique fonctionne mieux qu\'extraire des chiffres exacts ; confirmez les valeurs exactes avec les données sous-jacentes.',
          '**Comparaison de plusieurs images** : envoyez plusieurs images dans une même requête pour comparer des versions ou décrire un lot ; le nombre possible dépend de votre mémoire et de la taille du contexte.',
        ],
        callouts: [
          { type: 'tip', text: 'Pour un tour d\'horizon d\'autres modèles de vision locaux, consultez la [comparaison des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026).' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Comparaison Qwen2-VL, Qwen2.5-VL et Qwen3-VL',
        content: [
          '**Qwen2-VL est le plus ancien des trois et le seul sans entrée officielle dans la bibliothèque Ollama ; Qwen2.5-VL et Qwen3-VL sont les options actuelles.** Le tableau résume ce qui peut être vérifié dans la bibliothèque Ollama et sur les fiches Hugging Face.',
        ],
        rows: [
          { 'Génération': 'Qwen2-VL', 'Sortie': '2024', 'Tag Ollama officiel': 'Aucun (la page renvoie 404)', 'Licence (fiche HF)': 'Apache 2.0 (2B/7B) ; licence Qwen (72B)', 'Remarques': 'Historique uniquement' },
          { 'Génération': 'Qwen2.5-VL', 'Sortie': '2025', 'Tag Ollama officiel': 'qwen2.5vl (3b, 7b, 32b, 72b)', 'Licence (fiche HF)': 'Apache 2.0 (7B/32B) ; licences Qwen (3B/72B)', 'Remarques': 'Contexte 125K sur Ollama' },
          { 'Génération': 'Qwen3-VL', 'Sortie': '2025', 'Tag Ollama officiel': 'qwen3-vl (de 2b à 235b)', 'Licence (fiche HF)': 'Apache 2.0 (toutes tailles vérifiées)', 'Remarques': 'Contexte 256K ; Instruct et Thinking' },
        ],
        columns: ['Génération', 'Sortie', 'Tag Ollama officiel', 'Licence (fiche HF)', 'Remarques'],
        tableFormat: true,
        note: 'La ligne Qwen2-VL reflète une vérification de [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl), qui a renvoyé HTTP 404, à la date de la dernière mise à jour de cette page. D\'autres modèles de vision locaux existent ; cette page ne les classe pas — voir la [comparaison des modèles de vision locaux](/fr/power-local-llm/local-vision-models-llava-ollama-2026).',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'Connecter un modèle de vision Qwen local à PromptQuorum',
        content: [
          'PromptQuorum peut utiliser un serveur Ollama local comme l\'un de ses points d\'accès de modèle. Ollama expose une API compatible OpenAI sur `http://localhost:11434/v1` ; pointez le réglage de modèle local vers cette adresse et sélectionnez le tag de vision que vous avez récupéré, par exemple `qwen3-vl:8b`. Consultez les paramètres de l\'application pour les noms exacts des champs.',
          'Les requêtes avec images envoyées à un point d\'accès local sont traitées par votre serveur Ollama plutôt que par une API de vision cloud, tandis que les modèles cloud restent disponibles pour les autres tâches. Les modèles vers lesquels vous routez restent votre choix, et tout modèle cloud que vous ajoutez reçoit ce que vous lui envoyez.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Connectez PromptQuorum à un modèle de vision Qwen local en pointant son point d\'accès local vers http://localhost:11434/v1 et en sélectionnant le tag récupéré, comme qwen3-vl:8b.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Dépannage des modèles de vision Qwen',
        items: [
          '**« pull model manifest: file does not exist » ou modèle inconnu** : le tag n\'est pas dans la bibliothèque officielle. `qwen2-vl:7b` n\'est pas disponible — utilisez `ollama pull qwen3-vl:8b` ou `ollama pull qwen2.5vl:7b`.',
          '**Le téléchargement réussit mais le modèle ne se charge pas** : mettez Ollama à jour. Qwen2.5-VL nécessite 0.7.0+ et Qwen3-VL nécessite 0.12.7+.',
          '**L\'image est ignorée et le modèle répond comme si aucune image n\'avait été envoyée** : vérifiez que le chemin du fichier est correct et lisible. Dans l\'API Ollama, le tableau `images` doit contenir du base64 brut *sans* le préfixe `data:` — ce préfixe est propre au format LM Studio et OpenAI.',
          '**Caractères CJK illisibles ou manquants** : le scan est probablement de trop faible résolution. Numérisez à nouveau en 150–300 DPI et comparez le résultat.',
          '**Mémoire insuffisante** : choisissez un tag plus petit (par exemple `qwen3-vl:4b` ou `qwen2.5vl:3b`), réduisez la taille du contexte ou la résolution de l\'image, ou utilisez un Apple Silicon, qui partage la mémoire unifiée entre CPU et GPU.',
          '**Nombres erronés extraits d\'une facture ou d\'un graphique** : les modèles de vision locaux peuvent mal lire des chiffres sur une entrée bruitée. Améliorez la qualité du scan et vérifiez toujours les valeurs numériques avec la source.',
          '**Un PDF ne se charge pas** : l\'API d\'Ollama accepte des images, pas des fichiers PDF. Convertissez d\'abord les pages en PNG ou JPEG (avec pdf2image ou pypdfium2), puis envoyez chaque page comme image distincte.',
          '**LM Studio affiche « failed to load model »** : soit la mémoire est insuffisante, soit vous avez téléchargé une version sans vision. Vérifiez que la fiche du modèle indique la prise en charge de la vision et essayez une quantification plus légère.',
        ],
        callouts: [
          { type: 'tip', text: 'Exécutez `ollama ps` pour voir quels modèles sont chargés et combien de mémoire chacun utilise. Utilisez `ollama stop qwen3-vl:8b` pour décharger un modèle avant d\'en charger un plus grand.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lecture associée',
        items: [
          '[Comment exécuter Qwen 3 en local](/fr/local-llms/run-qwen-locally-guide-2026) — le pendant modèles de texte : configuration d\'Ollama et de LM Studio pour les modèles de langage Qwen.',
          '[Modèles de vision locaux comparés : LLaVA, Llama 3.2 Vision, MiniCPM-V](/fr/power-local-llm/local-vision-models-llava-ollama-2026) — le panorama complet d\'autres modèles de vision locaux.',
          '[LLM locaux multimodaux : vision, audio et texte](/fr/local-llms/multimodal-local-llms) — vue d\'ensemble plus large de l\'exécution locale de modèles multimodaux.',
          '[Qwen vs Llama vs Mistral](/fr/local-llms/qwen-vs-llama-vs-mistral) — comment les modèles de texte Qwen se situent face aux alternatives.',
          '[Guide matériel pour LLM locaux](/fr/local-llms/local-llm-hardware-guide) — exigences en VRAM et en GPU pour l\'inférence locale.',
          '[Tous les guides sur les LLM locaux](/fr/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquentes',
        faqs: [
          { q: 'Pourquoi ollama pull qwen2-vl:7b échoue-t-il ?', a: 'Parce que Qwen2-VL n\'a pas d\'entrée dans la bibliothèque officielle d\'Ollama : la page de la bibliothèque renvoie HTTP 404. Utilisez plutôt `ollama pull qwen2.5vl:7b` (Ollama 0.7.0+) ou `ollama pull qwen3-vl:8b` (Ollama 0.12.7+). Consultez [ollama.com/library](https://ollama.com/library) pour la liste actuelle.' },
          { q: 'Faut-il choisir Qwen2.5-VL ou Qwen3-VL ?', a: 'Qwen3-VL est la génération la plus récente (Qwen le décrit comme le modèle vision-langage le plus puissant de sa série à ce jour), mais il nécessite Ollama 0.12.7 ou plus récent. Qwen2.5-VL fonctionne avec Ollama 0.7.0+ et va de 3B à 72B. Essayez les deux sur quelques-uns de vos documents ; la précision dépend de votre matériel documentaire.' },
          { q: 'Quelle est la configuration minimale pour ces modèles ?', a: 'Il n\'y a pas de chiffre unique. Les tailles de téléchargement sur Ollama sont de 1.9 Go (Qwen3-VL 2B), 3.3 Go (4B), 6.1 Go (8B) et de 3.2 Go (Qwen2.5-VL 3B), 6.0 Go (7B). Le cache de contexte et l\'encodeur d\'images demandent de la mémoire supplémentaire ; gardez donc de la marge et vérifiez l\'usage réel avec `ollama ps`.' },
          { q: 'Ces modèles peuvent-ils lire les PDF directement ?', a: 'Pas via Ollama : son API accepte des images. Convertissez d\'abord chaque page du PDF en PNG ou JPEG (avec pdf2image ou pypdfium2), envoyez chaque page comme requête d\'image distincte, puis combinez les résultats.' },
          { q: 'Comment envoyer une image via Ollama ?', a: 'De deux façons. En mode interactif (`ollama run qwen3-vl:8b`), saisissez le chemin du fichier image dans votre prompt : Ollama le détecte et charge l\'image. Via l\'API, faites un POST sur /api/generate avec un tableau `images` encodé en base64. La chaîne base64 ne doit pas inclure le préfixe `data:`.' },
          { q: 'Les modèles fonctionnent-ils entièrement hors ligne ?', a: 'Après le téléchargement unique du modèle, l\'inférence s\'exécute sur votre propre machine sans compte cloud ; Ollama ne téléverse donc pas vos images vers une API cloud. D\'autres logiciels de la machine peuvent encore envoyer des données ailleurs, et les obligations de protection des données de votre flux de travail continuent de s\'appliquer ; ceci ne constitue pas un conseil juridique. Voir le [guide de configuration RGPD de Qwen en local](/fr/local-llms/qwen-local-gdpr-setup-guide-2026) pour en savoir plus.' },
          { q: 'Puis-je les utiliser à des fins commerciales ?', a: 'Cela dépend de la taille et de la licence indiquée sur la fiche du modèle. Les fiches Hugging Face indiquent Apache 2.0 pour Qwen3-VL ainsi que pour Qwen2.5-VL 7B et 32B, et des licences Qwen pour Qwen2.5-VL 3B et 72B. Lisez le texte de licence en vigueur avant tout usage commercial.' },
          { q: 'Pourquoi les caractères sont-ils illisibles dans ma sortie d\'OCR ?', a: 'Le plus souvent à cause d\'un scan flou ou de faible résolution. Numérisez à nouveau le document en 150–300 DPI et comparez. Une entrée de mauvaise qualité est la première cause d\'erreurs d\'OCR sur tous les modèles de vision locaux.' },
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-ja.webp',
    title: 'Qwen2.5-VLとQwen3-VLをローカルで動かす方法【2026年版】：ドキュメントOCRとビジョンガイド',
    seoTitle: 'Qwen2.5-VL・Qwen3-VLをローカルで動かす2026：Ollamaガイド',
    intro: 'Qwen2.5-VLとQwen3-VLは、ドキュメント、スクリーンショット、グラフ、写真を読み取るAlibabaのオープンなビジョン言語モデルで、どちらもOllamaでローカル実行できます。Qwen3-VL 8Bは6.1GBのダウンロード（`ollama pull qwen3-vl:8b`）、Qwen2.5-VL 7Bは6.0GBのダウンロード（`ollama pull qwen2.5vl:7b`）です。このページがもともと扱っていたQwen2-VLは旧世代で、Ollamaの公式ライブラリにエントリがないため、`ollama pull qwen2-vl:7b`は失敗します。本ガイドでは、確認済みのタグ・サイズ・ライセンス、OllamaとLM Studioでのセットアップ、中国語・日本語・韓国語ドキュメントを抽出するための実用的なプロンプトを紹介します。',
    metaDescription: 'Qwen2.5-VLとQwen3-VLをOllamaでローカル実行：確認済みのタグ・サイズ・ライセンス、手順、ドキュメントOCR。Qwen2-VLは旧世代です。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    audience: 'クラウドAPIにデータを送らずに、オフラインのドキュメントOCRと画像理解（特に中国語・日本語・多言語混在ファイル）を必要とする開発者とアナリスト',
    primaryTerm: 'Qwen2.5-VLとQwen3-VLをローカルで動かす',
    targetKeywords: [
      'Qwen3-VL ローカル 2026',
      'Qwen2.5-VL Ollama セットアップ',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'Qwen2-VL Ollama 代替',
      '中国語 日本語 OCR ローカルLLM',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**ドキュメントや画像をローカルで読み取るには、`ollama pull qwen3-vl:8b`（6.1GB、Ollama 0.12.7以降が必要）または`ollama pull qwen2.5vl:7b`（6.0GB、Ollama 0.7.0以降が必要）を実行します。** 旧タグの`qwen2-vl:7b`はOllamaの公式ライブラリにないため、Qwen2.5-VLまたはQwen3-VLを使ってください。送信した画像はクラウドAPIにアップロードされず、ローカルのOllamaサーバーで処理されます。',
    quickAnswerTop: {
      ja: {
        question: '2026年にQwenのビジョンモデルをローカルで動かすには？',
        answer: 'Ollamaを更新し、`ollama pull qwen3-vl:8b`（古いOllamaでは`qwen2.5vl:7b`）を実行してから`ollama run qwen3-vl:8b`を起動し、プロンプト内に画像ファイルのパスを入力します。GUIで使う場合は、LM StudioでQwen3-VLまたはQwen2.5-VLを検索し、モデルカードでビジョン対応と記載されたビルドを選びます。どちらも約6GBのダウンロードで、コンテキストと画像エンコーダー用に余裕のあるメモリが必要です。',
        bullets: [
          'Ollamaのバージョン：Qwen3-VLは0.12.7以降、Qwen2.5-VLは0.7.0以降（Ollamaライブラリページによる）',
          'モデルの取得：ollama pull qwen3-vl:8b（6.1GB）または ollama pull qwen2.5vl:7b（6.0GB）',
          '画像の添付：プロンプトにファイルパスを入力（CLI）、またはbase64のimages配列を送信（API）',
          '使えないタグ：qwen2-vl:7bはOllama公式ライブラリにありません — qwen2.5vlかqwen3-vlを使用',
          'ライセンス：Qwen3-VLとQwen2.5-VL 7B/32BはHugging FaceのカードでApache 2.0、Qwen2.5-VL 3Bと72BはQwenのライセンス',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: 'どのQwenビジョンモデルを動かすべきか', anchor: '#why-qwen-vl' },
      { label: 'タグ・サイズ・ライセンス', anchor: '#choose-model' },
      { label: 'ハードウェア要件', anchor: '#hardware' },
      { label: 'Ollamaでのセットアップ', anchor: '#ollama-setup' },
      { label: 'LM Studioでのセットアップ', anchor: '#lm-studio-setup' },
      { label: 'CJKドキュメントのOCR', anchor: '#ocr-use-case' },
      { label: '画像Q&A・スクリーンショット・グラフ', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL・Qwen2.5-VL・Qwen3-VLの比較', anchor: '#vs-other-models' },
      { label: 'PromptQuorumとの接続', anchor: '#promptquorum' },
      { label: 'トラブルシューティング', anchor: '#troubleshooting' },
      { label: '関連記事', anchor: '#related-reading' },
      { label: 'よくある質問', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VLではなくQwen3-VLかQwen2.5-VLを使う**：どちらもOllamaライブラリに公式エントリ（`qwen3-vl`、`qwen2.5vl`）がありますが、`ollama.com/library/qwen2-vl`は404を返し、`ollama pull qwen2-vl:7b`は失敗します。',
          '**Qwen3-VL 8Bは6.1GBのダウンロード**（`ollama pull qwen3-vl:8b`、Ollama 0.12.7以降が必要）、**Qwen2.5-VL 7Bは6.0GB**（`ollama pull qwen2.5vl:7b`、Ollama 0.7.0以降が必要）。',
          '**サイズ**：Qwen3-VLは2B、4B、8B、30B-A3B、32B、235B-A22B（1.9GB〜143GB）、Qwen2.5-VLは3B、7B、32B、72B（3.2GB〜49GB）。いずれもOllamaライブラリページのダウンロードサイズです。',
          '**コンテキスト**：Ollamaのページでは、Qwen3-VLは256K、Qwen2.5-VLは125Kのコンテキストウィンドウと記載されています。実際に使える長さはメモリ次第です。',
          '**ライセンスはサイズで異なる**：Qwen3-VLとQwen2.5-VL 7B/32BはHugging FaceカードでApache 2.0、Qwen2.5-VL 3Bと72BはQwenのライセンスです。商用利用の前にカードを確認してください。',
          '**PDFは直接入力できません**：PDFのページをまずPNGまたはJPEGに変換し、各ページを別々の画像として送信します。',
          '**ローカル処理はコンプライアンスの保証ではありません**：画像はクラウドAPIではなく自分のOllamaサーバーで処理されますが、周辺のワークフローには個人情報保護法やGDPRなどの義務が引き続き適用されます。',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: 'どのQwenビジョンモデルを動かすべきか',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-ja.svg',
        imageCaption: 'ビジョンパイプライン：画像がビジョンエンコーダーを通って言語モデルに渡り、OCRまたはQ&Aのテキストを返します。処理はローカルのOllamaサーバーで行われます。',
        content: [
          '**Ollamaが0.12.7以降ならQwen3-VL 8B、それより古ければQwen2.5-VL 7Bから始めてください。** QwenはQwen3-VLを「Qwenシリーズでこれまでで最も強力なビジョン言語モデル」と説明しており、Hugging FaceのカードにはOCRの32言語対応、ネイティブ256Kコンテキスト、InstructとThinkingの両エディションが記載されています。',
          'Qwen2.5-VLは前の世代です。カードでは、ドキュメント・グラフ・レイアウトの理解、請求書・フォーム・表のスキャンに対する構造化出力、バウンディングボックスによる視覚的な位置特定が挙げられています。Ollamaでは、どちらの世代もテキストと画像を入力として受け付けます。',
          'このページがもともと説明していたQwen2-VLは過去のモデルです。2024年に公開され、その後Qwen2.5-VLとQwen3-VLに置き換えられました。本ガイドの内容はQwen2-VLに依存していません。',
          'これらはQwenによる説明であり、PromptQuorumの測定値ではありません。お手元のドキュメント（特に小さい文字、手書き、低品質のスキャン）での精度は異なるため、代表的なページを数枚試してから採用してください。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwenのビジョンモデルは`ollama pull qwen3-vl:8b`（6.1GB）または`ollama pull qwen2.5vl:7b`（6.0GB）でローカル実行できます。旧タグの`qwen2-vl`はOllama公式ライブラリにありません。' },
          { type: 'plain-terms', text: 'ビジョン言語モデルは画像を生成するのではなく読み取るモデルです。写真やスキャンしたページを渡すと、説明、回答、抽出した内容などのテキストが返ってきます。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen3-VLとQwen2.5-VLのOllamaタグ・サイズ・ライセンス',
        content: [
          '以下のサイズはOllamaライブラリページ（[qwen3-vl](https://ollama.com/library/qwen3-vl)、[qwen2.5vl](https://ollama.com/library/qwen2.5vl)）に表示されるダウンロードサイズで、ライセンスはInstruct版のHugging Faceモデルカード（[Hugging FaceのQwen](https://huggingface.co/Qwen)）によるものです。ライブラリやライセンスは変更されるため、利用前に再度ご確認ください。',
        ],
        rows: [
          { 'モデル': 'Qwen3-VL 2B', 'Ollamaタグ': 'qwen3-vl:2b', 'ダウンロード': '1.9 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen3-VL 4B', 'Ollamaタグ': 'qwen3-vl:4b', 'ダウンロード': '3.3 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen3-VL 8B', 'Ollamaタグ': 'qwen3-vl:8b', 'ダウンロード': '6.1 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen3-VL 30B-A3B (MoE)', 'Ollamaタグ': 'qwen3-vl:30b', 'ダウンロード': '20 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen3-VL 32B', 'Ollamaタグ': 'qwen3-vl:32b', 'ダウンロード': '21 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen3-VL 235B-A22B (MoE)', 'Ollamaタグ': 'qwen3-vl:235b', 'ダウンロード': '143 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen2.5-VL 3B', 'Ollamaタグ': 'qwen2.5vl:3b', 'ダウンロード': '3.2 GB', 'ライセンス（HFカード）': 'Qwen Researchライセンス' },
          { 'モデル': 'Qwen2.5-VL 7B', 'Ollamaタグ': 'qwen2.5vl:7b', 'ダウンロード': '6.0 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen2.5-VL 32B', 'Ollamaタグ': 'qwen2.5vl:32b', 'ダウンロード': '21 GB', 'ライセンス（HFカード）': 'Apache 2.0' },
          { 'モデル': 'Qwen2.5-VL 72B', 'Ollamaタグ': 'qwen2.5vl:72b', 'ダウンロード': '49 GB', 'ライセンス（HFカード）': 'Qwenライセンス' },
        ],
        columns: ['モデル', 'Ollamaタグ', 'ダウンロード', 'ライセンス（HFカード）'],
        tableFormat: true,
        note: 'メモリに収まるサイズを選んでください。単一GPUのマシンならQwen3-VL 8BかQwen2.5-VL 7B、小型GPUなら2B〜4Bまたは3Bのタグ、30B以上のタグは大型GPUか大容量のユニファイドメモリがある場合のみです。OllamaにはQwen3-VLの`-instruct`と`-thinking`タグ（例：`qwen3-vl:8b-instruct`、6.2GB）もあり、推論テキストなしで直接抽出結果が欲しい場合はInstructタグを使います。デフォルトタグは`q4_K_M`バリアントと同じサイズです。詳しくは[LLM量子化の解説](/ja/local-llms/llm-quantization-explained)を参照してください。',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwenビジョンモデルのハードウェア要件',
        items: [
          '**ダウンロードサイズは重みのみ**：Qwen3-VL 8Bは6.1GB、Qwen2.5-VL 7Bは6.0GBです。コンテキストキャッシュと画像エンコーダーには追加メモリが必要で、コンテキスト長や画像サイズに応じて増えるため、ダウンロードサイズより余裕を持たせてください。',
          '**小さめの選択肢**：Qwen3-VL 2B（1.9GB）・4B（3.3GB）、Qwen2.5-VL 3B（3.2GB）は小型GPUやノートPC向けです。7B〜8Bモデルより精度は下がると考えてください。',
          '**大きめの選択肢**：Qwen3-VL 30B-A3B（20GB）、Qwen3-VL 32BとQwen2.5-VL 32B（21GB）、Qwen2.5-VL 72B（49GB）は、大型GPU、複数GPU、または大容量のユニファイドメモリを持つApple Siliconが必要です。',
          '**部分オフロード**：モデルがVRAMに収まらない場合、Ollamaは一部をシステムRAMに置けます。動作しますが、かなり遅くなります。',
          '**ソフトウェア**：Ollamaライブラリページの記載どおり、Qwen3-VLはOllama 0.12.7以降、Qwen2.5-VLは0.7.0以降が必要です。',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorumは本ガイドのために特定のGPUでこれらのモデルをベンチマークしていないため、速度や正確なVRAMの数値は記載していません。モデルをロードしたら`ollama ps`を実行し、お使いのマシンでの実際のメモリ使用量を確認してください。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollamaを使ったQwen2.5-VL・Qwen3-VLのセットアップ',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-ja.svg',
        imageCaption: 'Ollamaのセットアップ5ステップ：Ollamaをインストール／更新し、Qwenビジョンタグを取得して、画像を添付して実行し、API経由で送信して、CJKのOCRを確認します。',
        content: [
          'OllamaはQwenのビジョンモデルをローカルで動かす最も手早い方法です。モデルのダウンロードと量子化を管理し、localhost:11434でAPIを公開します。[ollama.com](https://ollama.com/download)からインストールしてください。初めての場合は[Ollamaのインストール方法](/ja/local-llms/how-to-install-ollama)から始めましょう。',
        ],
        numberedItems: [
          { title: 'Ollamaをインストールまたは更新する', whyItMatters: 'Qwen2.5-VLにはOllama 0.7.0以降、Qwen3-VLには0.12.7以降が必要です。`ollama --version`で確認し、必要なら更新します。OllamaはmacOS、Linux、Windowsで利用できます。' },
          { title: '明示的なタグでモデルを取得する', whyItMatters: '`qwen3-vl:8b`または`qwen2.5vl:7b`を使います。`qwen2-vl:7b`はOllama公式ライブラリにないため、取得に失敗します。' },
          { title: 'モデルを実行して画像を添付する', whyItMatters: '対話モードでは、プロンプト内に画像ファイルのパスを入力します。Ollamaがパスを検出して画像を読み込みます。' },
          { title: 'API経由で画像を送信する', whyItMatters: '/api/generateエンドポイントは、data:プレフィックスなしのbase64エンコード済み`images`配列を受け付けます。アプリケーション（PromptQuorumを含む）はこの方法で画像をプログラムから送信します。' },
          { title: '多言語OCRを確認する', whyItMatters: '中国語または日本語のドキュメントのスキャンを送り、抽出されたテキストを原本と照合してから本格的に使い始めます。' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: 'ドキュメント画像は150DPI以上で送信してください。OCRの結果を最も左右するのは画像の品質で、ぼやけたスキャンではどのモデルでも誤った文字が出ます。' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM StudioでのQwenビジョンモデルのセットアップ',
        content: [
          'LM Studioはコマンド操作なしで、グラフィカルなインターフェースからビジョンモデルを実行できます。[lmstudio.ai](https://lmstudio.ai)からダウンロードするか、[LM Studioのインストール方法](/ja/local-llms/how-to-install-lm-studio)を参照してください。モデルカタログは随時変わるため、現在Qwenとして何が提供されているか確認してください。',
        ],
        numberedItems: [
          { title: 'LM Studioをダウンロードしてインストールする', whyItMatters: 'ローカルモデル推論用のクロスプラットフォームGUIです。ターミナルは不要です。' },
          { title: 'Qwenのビジョンモデルを検索する', whyItMatters: 'モデルブラウザで「Qwen3-VL」または「Qwen2.5-VL」を検索し、モデルカードでビジョン対応と記載されたビルドを選びます。量子化はメモリに合わせます。' },
          { title: 'モデルをロードして画像を添付する', whyItMatters: 'チャット入力欄の画像ボタンから写真やスキャンをアップロードします。LM Studioが画像をビジョンエンコーダーに渡します。' },
          { title: 'ローカルサーバーを起動する', whyItMatters: '「Start Server」でlocalhost:1234にOpenAI互換APIが公開されます。ビジョンのリクエストには標準のimage_urlコンテンツ形式を使います。' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'LM StudioとOllamaでは画像の形式が異なります。LM StudioはOpenAIのimage_urlコンテンツスキーマ（data:プレフィックス付き）に従い、Ollamaはトップレベルの`images`配列にプレフィックスなしの生のbase64を入れます。ランタイムを1つ選び、その形式に合わせてください。',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: '中国語・日本語・多言語混在ドキュメントのOCR',
        content: [
          '**Qwenのビジョンモデルは、中国語・日本語・韓国語・多言語混在のドキュメントからテキストを抽出できますが、精度はスキャン品質とレイアウトに左右されます。ご自身のドキュメントで検証してください。** Qwen3-VLのモデルカードにはOCRの32言語対応が、Qwen2.5-VLのカードには請求書・フォーム・表のスキャンに対する構造化出力が記載されています。',
          '最も確実なのは、具体的な抽出プロンプトを使うことです。「これを読んで」のような曖昧な指示ではなく、「表のレイアウトを保持する」「各項目をkey: value形式で返す」のように構造を指定します。',
        ],
        items: [
          '**プレーンテキストの抽出**：「この画像のすべての行のテキストを抽出してください。改行と読み順を保持してください。」',
          '**構造化フィールド**：「これは日本の請求書です。取引先、日付、小計、税額、合計をkey: value形式で返してください。」',
          '**表の抽出**：「この表をCSVで抽出してください。1行目をヘッダーとして扱ってください。」',
          '**抽出と翻訳を一度に**：「この画像から中国語のテキストを抽出し、英語に翻訳してください。両方を表示してください。」',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: '抽出した数値は必ず原本と照合してください。ローカルのビジョンモデルは、低品質なスキャンで数字を読み違えることがあります。特に請求書や財務書類では、OCR結果を最終値ではなく確認が必要な下書きとして扱ってください。' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'CJKドキュメントからテキストを抽出するには、150DPI以上の画像をqwen3-vl:8bまたはqwen2.5vl:7bに送り、「各項目をkey: value形式で返す」のように構造を指定した具体的なプロンプトを使います。' },
          { type: 'plain-terms', text: 'OCRとは、文字が写った画像を編集可能なテキストに変換することです。モデルがスキャンしたページを見て、見えた内容を文字として書き出します。' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: '画像Q&A・スクリーンショット分析・グラフの読み取り',
        content: [
          'OCR以外にも、Qwenのビジョンモデルは写真の説明、スクリーンショットに関する質問への回答、グラフの読み取りができます。鮮明な入力では良好ですが、雑然とした場面やあいまいな場面では精度が下がります。',
        ],
        items: [
          '**画像Q&A**：写真について「この画像には何が写っていますか？」のように自由に質問し、回答を画像と照らして確認します。',
          '**スクリーンショットとUIの分析**：まずUIのスクリーンショット、エラーダイアログ、アプリの状態の読み取りから始めます。両モデルのカードにはGUIエージェント機能の記載もありますが、本ガイドでは扱いません。',
          '**グラフの読み取り**：グラフの構造や傾向の説明は得意ですが、正確な数値の抽出は不得意です。正確な値は元データで確認してください。',
          '**複数画像の比較**：1回のリクエストで複数の画像を送り、バージョンの比較やまとめての説明ができます。送れる枚数はメモリとコンテキストサイズに依存します。',
        ],
        callouts: [
          { type: 'tip', text: '他のローカルビジョンモデルの一覧は、[ローカルビジョンモデルの比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026)をご覧ください。' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL・Qwen2.5-VL・Qwen3-VLの比較',
        content: [
          '**Qwen2-VLは3つの中で最も古く、Ollama公式ライブラリにエントリがない唯一のモデルです。現行の選択肢はQwen2.5-VLとQwen3-VLです。** 表はOllamaライブラリとHugging Faceカードで確認できる内容をまとめたものです。',
        ],
        rows: [
          { '世代': 'Qwen2-VL', '公開年': '2024', 'Ollama公式タグ': 'なし（ライブラリページは404）', 'ライセンス（HFカード）': 'Apache 2.0（2B/7B）、Qwenライセンス（72B）', '備考': '過去のモデルとして' },
          { '世代': 'Qwen2.5-VL', '公開年': '2025', 'Ollama公式タグ': 'qwen2.5vl（3b、7b、32b、72b）', 'ライセンス（HFカード）': 'Apache 2.0（7B/32B）、Qwenライセンス（3B/72B）', '備考': 'Ollamaで125Kコンテキスト' },
          { '世代': 'Qwen3-VL', '公開年': '2025', 'Ollama公式タグ': 'qwen3-vl（2b〜235b）', 'ライセンス（HFカード）': 'Apache 2.0（確認した全サイズ）', '備考': '256K、InstructとThinking' },
        ],
        columns: ['世代', '公開年', 'Ollama公式タグ', 'ライセンス（HFカード）', '備考'],
        tableFormat: true,
        note: 'Qwen2-VLの行は、このページの最終更新時点で[ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl)がHTTP 404を返したことの確認に基づきます。他のローカルビジョンモデルもありますが、このページでは順位付けしません。[ローカルビジョンモデルの比較](/ja/power-local-llm/local-vision-models-llava-ollama-2026)をご覧ください。',
      },
      promptquorum: {
        id: 'promptquorum',
        title: 'ローカルのQwenビジョンモデルをPromptQuorumに接続する',
        content: [
          'PromptQuorumは、ローカルのOllamaサーバーをモデルのエンドポイントの1つとして利用できます。Ollamaは`http://localhost:11434/v1`でOpenAI互換APIを公開しているので、ローカルモデルの設定をそのアドレスに向け、取得したビジョンタグ（例：`qwen3-vl:8b`）を選択します。正確な項目名はアプリ内の設定で確認してください。',
          'ローカルのエンドポイントに送った画像リクエストは、クラウドのビジョンAPIではなくOllamaサーバーで処理され、他のタスクにはクラウドモデルを引き続き使えます。どのモデルにルーティングするかはユーザーが決めるもので、追加したクラウドモデルには、送信した内容がそのまま渡されます。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorumをローカルのQwenビジョンモデルに接続するには、ローカルエンドポイントをhttp://localhost:11434/v1に向け、qwen3-vl:8bなど取得済みのタグを選択します。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Qwenビジョンモデルのトラブルシューティング',
        items: [
          '**「pull model manifest: file does not exist」や不明なモデル**：そのタグは公式ライブラリにありません。`qwen2-vl:7b`は利用できないため、`ollama pull qwen3-vl:8b`または`ollama pull qwen2.5vl:7b`を使ってください。',
          '**取得は成功したがモデルが読み込めない**：Ollamaを更新してください。Qwen2.5-VLは0.7.0以降、Qwen3-VLは0.12.7以降が必要です。',
          '**画像が無視され、画像がないかのように回答される**：ファイルパスが正しく読み取り可能か確認してください。OllamaのAPIでは、`images`配列にdata:プレフィックスなしの生のbase64を入れます。`data:`プレフィックスはLM StudioとOpenAIの形式専用です。',
          '**CJK文字が文字化け・欠落する**：スキャンの解像度が低すぎる可能性があります。150〜300DPIで再スキャンして結果を比較してください。',
          '**メモリ不足**：より小さいタグ（例：`qwen3-vl:4b`や`qwen2.5vl:3b`）にする、コンテキストサイズや画像解像度を下げる、またはCPUとGPUでユニファイドメモリを共有するApple Siliconを使います。',
          '**請求書やグラフから誤った数値が抽出される**：ノイズの多い入力では数字を読み違えることがあります。スキャン品質を上げ、数値の出力は必ず原本と照合してください。',
          '**PDFが読み込めない**：OllamaのAPIは画像を受け付け、PDFファイルは受け付けません。ページをまずPNGまたはJPEGに変換し（pdf2imageやpypdfium2を使用）、各ページを別々の画像として送信します。',
          '**LM Studioに「failed to load model」と表示される**：メモリ不足か、ビジョン非対応のビルドをダウンロードした可能性があります。モデルカードでビジョン対応を確認し、小さい量子化を試してください。',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps`を実行すると、ロード中のモデルと各モデルのメモリ使用量が確認できます。より大きいモデルを読み込む前には、`ollama stop qwen3-vl:8b`でモデルをアンロードします。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Qwen 3をローカルで動かす方法](/ja/local-llms/run-qwen-locally-guide-2026) — テキストモデル版：Qwen言語モデルのOllamaとLM Studioでのセットアップ。',
          '[ローカルビジョンモデルの比較：LLaVA、Llama 3.2 Vision、MiniCPM-V](/ja/power-local-llm/local-vision-models-llava-ollama-2026) — 他のローカルビジョンモデルの全体像。',
          '[マルチモーダルなローカルLLM：画像・音声・テキスト](/ja/local-llms/multimodal-local-llms) — マルチモーダルモデルをローカルで動かすための幅広い概要。',
          '[Qwen vs Llama vs Mistral](/ja/local-llms/qwen-vs-llama-vs-mistral) — Qwenのテキストモデルと他の選択肢の比較。',
          '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) — ローカル推論に必要なVRAMとGPU。',
          '[ローカルLLMガイド一覧](/ja/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          { q: 'ollama pull qwen2-vl:7bが失敗するのはなぜですか？', a: 'Qwen2-VLがOllama公式ライブラリにエントリを持たず、ライブラリのページがHTTP 404を返すためです。代わりに`ollama pull qwen2.5vl:7b`（Ollama 0.7.0以降）または`ollama pull qwen3-vl:8b`（Ollama 0.12.7以降）を使ってください。最新の一覧は[ollama.com/library](https://ollama.com/library)で確認できます。' },
          { q: 'Qwen2.5-VLとQwen3-VLのどちらを使うべきですか？', a: 'Qwen3-VLのほうが新しい世代で（Qwenはシリーズで最も強力なビジョン言語モデルと説明しています）、Ollama 0.12.7以降が必要です。Qwen2.5-VLはOllama 0.7.0以降で動作し、3Bから72Bまであります。ご自身のドキュメントを数枚使って両方を試してください。精度は素材によって異なります。' },
          { q: 'これらのモデルを動かす最低限のハードウェアは？', a: '単一の数値はありません。Ollamaのダウンロードサイズは、Qwen3-VLが2Bで1.9GB、4Bで3.3GB、8Bで6.1GB、Qwen2.5-VLが3Bで3.2GB、7Bで6.0GBです。コンテキストキャッシュと画像エンコーダーに追加メモリが必要なので余裕を持たせ、`ollama ps`で実際の使用量を確認してください。' },
          { q: 'これらのモデルはPDFを直接読めますか？', a: 'Ollama経由では読めません。APIが受け付けるのは画像です。PDFの各ページをまずPNGまたはJPEGに変換し（pdf2imageやpypdfium2を使用）、各ページを別々の画像リクエストとして送って結果をまとめます。' },
          { q: 'Ollamaで画像を送るには？', a: '2つの方法があります。対話モード（`ollama run qwen3-vl:8b`）では、プロンプト内に画像ファイルのパスを入力すると、Ollamaが検出して画像を読み込みます。APIでは、base64エンコードした`images`配列を付けて/api/generateにPOSTします。base64文字列に`data:`プレフィックスを含めてはいけません。' },
          { q: 'モデルは完全にオフラインで動作しますか？', a: 'モデルを一度ダウンロードすれば、推論はクラウドアカウントなしで自分のマシン上で実行されるため、Ollamaが送信した画像をクラウドAPIにアップロードすることはありません。ただしマシン上の他のソフトウェアが外部にデータを送ることはあり得ますし、ワークフローに関する個人情報保護の義務も引き続き適用されます（法的助言ではありません）。詳しくは[Qwenローカル運用のGDPRセットアップガイド](/ja/local-llms/qwen-local-gdpr-setup-guide-2026)をご覧ください。' },
          { q: '商用利用はできますか？', a: 'サイズとモデルカードのライセンスによります。Hugging Faceのカードでは、Qwen3-VLとQwen2.5-VL 7B・32BがApache 2.0、Qwen2.5-VL 3Bと72BがQwenのライセンスと記載されています。商用利用の前に最新のライセンス本文をお読みください。' },
          { q: 'OCR結果の文字が文字化けするのはなぜですか？', a: 'ほとんどの場合、スキャンがぼやけているか解像度が低いことが原因です。文書を150〜300DPIで再スキャンして比較してください。入力品質の低さは、どのローカルビジョンモデルでもOCRエラーの最大の原因です。' },
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-zh.webp',
    title: '2026年如何在本地运行Qwen2.5-VL和Qwen3-VL：文档OCR与视觉指南',
    seoTitle: '本地运行Qwen2.5-VL与Qwen3-VL 2026：Ollama指南',
    intro: 'Qwen2.5-VL和Qwen3-VL是阿里巴巴用于读取文档、截图、图表和照片的开源视觉语言模型，二者都可以通过Ollama在本地运行。Qwen3-VL 8B的下载大小为6.1 GB（`ollama pull qwen3-vl:8b`），Qwen2.5-VL 7B为6.0 GB（`ollama pull qwen2.5vl:7b`）。本页最初介绍的Qwen2-VL是上一代模型，Ollama官方库中没有它的条目，因此`ollama pull qwen2-vl:7b`会失败。本指南提供经过核实的标签、大小和许可证，介绍Ollama与LM Studio的配置方法，以及提取中文、日文和韩文文档的实用提示词。',
    metaDescription: '通过Ollama在本地运行Qwen2.5-VL和Qwen3-VL：核实过的标签、下载大小、许可证、配置步骤与文档OCR。Qwen2-VL已被取代。',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '阅读约11分钟',
    educationalLevel: 'Intermediate',
    audience: '需要离线文档OCR和图像理解（尤其是中文、日文及多语言混合文件）、且不愿把数据发送到云端API的开发者和分析师',
    primaryTerm: '本地运行Qwen2.5-VL和Qwen3-VL',
    targetKeywords: [
      '本地运行Qwen3-VL 2026',
      'Qwen2.5-VL Ollama配置',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'Qwen2-VL Ollama替代方案',
      '中文日文OCR本地大模型',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**运行`ollama pull qwen3-vl:8b`（6.1 GB，需要Ollama 0.12.7或更高版本）或`ollama pull qwen2.5vl:7b`（6.0 GB，需要Ollama 0.7.0或更高版本），即可在本地读取文档和图像。** 旧标签`qwen2-vl:7b`不在Ollama官方库中，请改用Qwen2.5-VL或Qwen3-VL；你发送的图像由本地Ollama服务器处理，而不是上传到云端API。',
    quickAnswerTop: {
      zh: {
        question: '2026年如何在本地运行Qwen视觉模型？',
        answer: '先更新Ollama，运行`ollama pull qwen3-vl:8b`（Ollama版本较旧时用`qwen2.5vl:7b`），再运行`ollama run qwen3-vl:8b`，并在提示词中输入图像文件路径。需要图形界面时，在LM Studio中搜索Qwen3-VL或Qwen2.5-VL，选择模型卡标明支持视觉的版本。两个模型的下载大小都约为6 GB，请为上下文和图像编码器预留额外内存。',
        bullets: [
          'Ollama版本：Qwen3-VL需要0.12.7+，Qwen2.5-VL需要0.7.0+（依据Ollama库页面）',
          '拉取模型：ollama pull qwen3-vl:8b（6.1 GB）或 ollama pull qwen2.5vl:7b（6.0 GB）',
          '添加图像：在提示词中输入文件路径（CLI），或发送base64格式的images数组（API）',
          '失效标签：qwen2-vl:7b不在Ollama官方库中——请使用qwen2.5vl或qwen3-vl',
          '许可证：Qwen3-VL和Qwen2.5-VL 7B/32B在Hugging Face模型卡上为Apache 2.0；Qwen2.5-VL 3B和72B使用Qwen许可证',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '应该运行哪个Qwen视觉模型？', anchor: '#why-qwen-vl' },
      { label: '标签、大小与许可证', anchor: '#choose-model' },
      { label: '硬件要求', anchor: '#hardware' },
      { label: '使用Ollama配置', anchor: '#ollama-setup' },
      { label: '使用LM Studio配置', anchor: '#lm-studio-setup' },
      { label: 'CJK文档OCR', anchor: '#ocr-use-case' },
      { label: '图像问答、截图与图表', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL、Qwen2.5-VL与Qwen3-VL对比', anchor: '#vs-other-models' },
      { label: '连接PromptQuorum', anchor: '#promptquorum' },
      { label: '故障排查', anchor: '#troubleshooting' },
      { label: '相关阅读', anchor: '#related-reading' },
      { label: '常见问题', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**使用Qwen3-VL或Qwen2.5-VL，而不是Qwen2-VL**：二者在Ollama库中都有官方条目（`qwen3-vl`、`qwen2.5vl`），而`ollama.com/library/qwen2-vl`返回404，`ollama pull qwen2-vl:7b`会失败。',
          '**Qwen3-VL 8B下载大小为6.1 GB**（`ollama pull qwen3-vl:8b`，需要Ollama 0.12.7+）；**Qwen2.5-VL 7B为6.0 GB**（`ollama pull qwen2.5vl:7b`，需要Ollama 0.7.0+）。',
          '**尺寸**：Qwen3-VL有2B、4B、8B、30B-A3B、32B和235B-A22B（1.9 GB至143 GB）；Qwen2.5-VL有3B、7B、32B和72B（3.2 GB至49 GB）。均为Ollama库页面给出的下载大小。',
          '**上下文**：Ollama页面标注Qwen3-VL的上下文窗口为256K，Qwen2.5-VL为125K；实际可用的上下文取决于你的内存。',
          '**许可证因尺寸而异**：Qwen3-VL以及Qwen2.5-VL 7B/32B在Hugging Face模型卡上为Apache 2.0；Qwen2.5-VL 3B和72B使用Qwen许可证。商用前请阅读模型卡。',
          '**不支持直接输入PDF**：先把PDF页面转换为PNG或JPEG，再把每一页作为单独的图像发送。',
          '**本地处理不等于合规保证**：图像由你自己的Ollama服务器而非云端API处理，但周边工作流程仍须遵守GDPR、《个人信息保护法》等义务。',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: '应该运行哪个Qwen视觉模型？',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-zh.svg',
        imageCaption: '视觉流程：图像经视觉编码器进入语言模型，返回OCR或问答文本，全程由你本地的Ollama服务器处理。',
        content: [
          '**如果你的Ollama是0.12.7或更高版本，从Qwen3-VL 8B开始；版本较旧则从Qwen2.5-VL 7B开始。** Qwen称Qwen3-VL是迄今Qwen系列中最强大的视觉语言模型；其Hugging Face模型卡列出了32种语言的OCR、原生256K上下文，以及Instruct和Thinking两种版本。',
          'Qwen2.5-VL是上一代。其模型卡强调对文档、图表和版面的理解、对发票、表单和表格扫描件的结构化输出，以及基于边界框的视觉定位。在Ollama中，两代模型都接受文本和图像输入。',
          '本页最初介绍的Qwen2-VL已成为历史：它发布于2024年，后来被Qwen2.5-VL和Qwen3-VL取代。本指南的内容不依赖它。',
          '以上是Qwen团队自己的描述，不是PromptQuorum的测量结果。模型在你的文档上的准确率（尤其是小字号、手写体或低质量扫描件）会有差异，因此请先用几页有代表性的文档测试，再决定是否采用。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '用`ollama pull qwen3-vl:8b`（6.1 GB）或`ollama pull qwen2.5vl:7b`（6.0 GB）即可在本地运行Qwen视觉模型；旧标签`qwen2-vl`已不在Ollama官方库中。' },
          { type: 'plain-terms', text: '视觉语言模型的作用是读取图像，而不是生成图像。你给它一张照片或一页扫描件，它会返回文本——描述、答案或提取出的内容。' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen3-VL与Qwen2.5-VL的Ollama标签、大小与许可证',
        content: [
          '下表中的大小是Ollama库页面（[qwen3-vl](https://ollama.com/library/qwen3-vl)和[qwen2.5vl](https://ollama.com/library/qwen2.5vl)）显示的下载大小；许可证来自Instruct版本的Hugging Face模型卡（[Hugging Face上的Qwen](https://huggingface.co/Qwen)）。库和许可证会变化，使用前请再次核对。',
        ],
        rows: [
          { '模型': 'Qwen3-VL 2B', 'Ollama标签': 'qwen3-vl:2b', '下载大小': '1.9 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen3-VL 4B', 'Ollama标签': 'qwen3-vl:4b', '下载大小': '3.3 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen3-VL 8B', 'Ollama标签': 'qwen3-vl:8b', '下载大小': '6.1 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen3-VL 30B-A3B (MoE)', 'Ollama标签': 'qwen3-vl:30b', '下载大小': '20 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen3-VL 32B', 'Ollama标签': 'qwen3-vl:32b', '下载大小': '21 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen3-VL 235B-A22B (MoE)', 'Ollama标签': 'qwen3-vl:235b', '下载大小': '143 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen2.5-VL 3B', 'Ollama标签': 'qwen2.5vl:3b', '下载大小': '3.2 GB', '许可证（HF模型卡）': 'Qwen Research许可证' },
          { '模型': 'Qwen2.5-VL 7B', 'Ollama标签': 'qwen2.5vl:7b', '下载大小': '6.0 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen2.5-VL 32B', 'Ollama标签': 'qwen2.5vl:32b', '下载大小': '21 GB', '许可证（HF模型卡）': 'Apache 2.0' },
          { '模型': 'Qwen2.5-VL 72B', 'Ollama标签': 'qwen2.5vl:72b', '下载大小': '49 GB', '许可证（HF模型卡）': 'Qwen许可证' },
        ],
        columns: ['模型', 'Ollama标签', '下载大小', '许可证（HF模型卡）'],
        tableFormat: true,
        note: '请选择内存能装下的尺寸：多数单GPU机器用Qwen3-VL 8B或Qwen2.5-VL 7B，小显存GPU用2B–4B或3B标签，30B以上标签仅适合大显存GPU或大容量统一内存。Ollama还提供Qwen3-VL的`-instruct`和`-thinking`标签（例如`qwen3-vl:8b-instruct`，6.2 GB）；如果希望直接得到提取结果而不带推理文本，请使用Instruct标签。默认标签与其`q4_K_M`变体大小相同——参见[LLM量化详解](/zh/local-llms/llm-quantization-explained)。',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen视觉模型的硬件要求',
        items: [
          '**下载大小只含权重**：Qwen3-VL 8B为6.1 GB，Qwen2.5-VL 7B为6.0 GB。上下文缓存和图像编码器需要额外内存，且随上下文长度和图像大小增长，因此请在下载大小之上留出余量。',
          '**较小的选项**：Qwen3-VL 2B（1.9 GB）和4B（3.3 GB），或Qwen2.5-VL 3B（3.2 GB），适合小显存GPU和笔记本；准确率预计低于7B–8B模型。',
          '**较大的选项**：Qwen3-VL 30B-A3B（20 GB）、Qwen3-VL 32B和Qwen2.5-VL 32B（21 GB）以及Qwen2.5-VL 72B（49 GB）需要大显存GPU、多张GPU，或统一内存很大的Apple Silicon。',
          '**部分卸载**：模型装不进显存时，Ollama可以把一部分放到系统内存中；能运行，但速度会明显变慢。',
          '**软件**：如Ollama库页面所述，Qwen3-VL需要Ollama 0.12.7+，Qwen2.5-VL需要0.7.0+。',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum没有为本指南在具体GPU上对这些模型做基准测试，因此不提供速度或精确显存数据。加载模型后运行`ollama ps`，即可查看它在你的机器上实际占用的内存。' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: '使用Ollama配置Qwen2.5-VL与Qwen3-VL',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-zh.svg',
        imageCaption: 'Ollama配置5步：安装或更新Ollama，拉取Qwen视觉标签，运行并附加图像，通过API发送，最后验证CJK OCR。',
        content: [
          'Ollama是在本地运行Qwen视觉模型最快的方式。它负责下载模型、管理量化，并在localhost:11434提供API。请从[ollama.com](https://ollama.com/download)安装；如果你是新手，可先阅读[如何安装Ollama](/zh/local-llms/how-to-install-ollama)。',
        ],
        numberedItems: [
          { title: '安装或更新Ollama', whyItMatters: 'Qwen2.5-VL需要Ollama 0.7.0或更高版本，Qwen3-VL需要0.12.7或更高版本。用`ollama --version`检查，必要时更新。Ollama支持macOS、Linux和Windows。' },
          { title: '使用明确的标签拉取模型', whyItMatters: '使用`qwen3-vl:8b`或`qwen2.5vl:7b`。不要使用`qwen2-vl:7b`——它不在Ollama官方库中，拉取会失败。' },
          { title: '运行模型并附加图像', whyItMatters: '在交互模式下，在提示词中输入图像文件路径。Ollama会识别路径并加载图像。' },
          { title: '通过API发送图像', whyItMatters: '/api/generate端点接受不带data:前缀的base64编码`images`数组。应用程序（包括PromptQuorum）就是这样以编程方式发送图像的。' },
          { title: '验证多语言OCR', whyItMatters: '发送一份中文或日文文档的扫描件，把提取出的文本与原件核对后，再基于它继续构建。' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '发送文档图像时请使用150 DPI或更高分辨率。图像质量是影响OCR结果的最大因素——无论使用哪个模型，模糊的扫描件都会产生错误的字符。' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: '使用LM Studio配置Qwen视觉模型',
        content: [
          'LM Studio通过图形界面运行视觉模型，无需命令行。请从[lmstudio.ai](https://lmstudio.ai)下载，或参阅[如何安装LM Studio](/zh/local-llms/how-to-install-lm-studio)。它的模型目录会随时间变化，请先确认目前提供哪些Qwen模型。',
        ],
        numberedItems: [
          { title: '下载并安装LM Studio', whyItMatters: '用于本地模型推理的跨平台图形界面，无需终端。' },
          { title: '搜索Qwen视觉模型', whyItMatters: '在模型浏览器中搜索“Qwen3-VL”或“Qwen2.5-VL”，选择模型卡标明支持视觉的版本，并根据内存选择量化。' },
          { title: '加载模型并附加图像', whyItMatters: '使用聊天输入框中的图像按钮上传照片或扫描件，LM Studio会把它传给视觉编码器。' },
          { title: '启动本地服务器', whyItMatters: '“Start Server”选项会在localhost:1234提供OpenAI兼容API，视觉请求使用标准的image_url内容格式。' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'LM Studio和Ollama使用不同的图像格式：LM Studio遵循OpenAI的image_url内容结构（带data:前缀）；Ollama使用顶层`images`数组，内容为不带前缀的原始base64。请选定一个运行时，并匹配其格式。',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: '中文、日文及多语言混合文档的OCR',
        content: [
          '**Qwen视觉模型可以从中文、日文、韩文和多语言混合文档中提取文本，但准确率取决于扫描质量和版面——请用你自己的文档测试。** Qwen3-VL模型卡列出了32种语言的OCR支持，Qwen2.5-VL模型卡则描述了对发票、表单和表格扫描件的结构化输出。',
          '最可靠的做法是使用具体的提取提示词。要求给出结构——“保留表格版式”“以 key: value 形式返回每个字段”——而不是含糊的“读一下这个”。',
        ],
        items: [
          '**纯文本提取**：“提取这张图像中的每一行文字，保留换行和阅读顺序。”',
          '**结构化字段**：“这是一张日本发票。以 key: value 形式返回供应商、日期、小计、税额和总计。”',
          '**表格提取**：“把这个表格提取为CSV，将第一行视为表头。”',
          '**一次完成提取与翻译**：“提取这张图像中的中文文字，然后翻译成英文，两者都显示。”',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: '务必将提取出的数字与原始文档核对。本地视觉模型在低质量扫描件上可能读错数字。请把OCR输出当作需要确认的草稿，而不是最终值，发票和财务文档尤其如此。' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '要从CJK文档中提取文字，请将150+ DPI的图像发送给qwen3-vl:8b或qwen2.5vl:7b，并使用要求给出结构的具体提示词，例如“以 key: value 形式返回每个字段”。' },
          { type: 'plain-terms', text: 'OCR是指把文字的图片转换为可编辑的文本。模型查看扫描页面，并把看到的内容写出来。' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: '图像问答、截图分析与图表读取',
        content: [
          '除OCR外，Qwen视觉模型还能描述照片、回答有关截图的问题并读取图表。输入清晰时效果最好，面对杂乱或含糊的场景则较弱。',
        ],
        items: [
          '**图像问答**：对照片提出开放式问题，例如“这张图里有什么？”，并对照图像核实答案。',
          '**截图与界面分析**：先从读取界面截图、错误对话框和应用状态开始。两个模型的模型卡还描述了GUI智能体能力，本指南不涉及。',
          '**图表读取**：描述图表结构和趋势的效果好于提取精确数值；精确数字请对照原始数据确认。',
          '**多图对比**：在一次请求中发送多张图像，用于比较不同版本或批量描述一组图像；能放入多少张取决于你的内存和上下文大小。',
        ],
        callouts: [
          { type: 'tip', text: '如需了解其他本地视觉模型，请参阅[本地视觉模型对比](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL、Qwen2.5-VL与Qwen3-VL对比',
        content: [
          '**Qwen2-VL是三者中最早的，也是唯一没有Ollama官方库条目的；Qwen2.5-VL和Qwen3-VL是目前的可选项。** 下表汇总了可在Ollama库和Hugging Face模型卡上核实的信息。',
        ],
        rows: [
          { '世代': 'Qwen2-VL', '发布年份': '2024', 'Ollama官方标签': '无（库页面返回404）', '许可证（HF模型卡）': 'Apache 2.0（2B/7B）；Qwen许可证（72B）', '备注': '仅作历史参考' },
          { '世代': 'Qwen2.5-VL', '发布年份': '2025', 'Ollama官方标签': 'qwen2.5vl（3b、7b、32b、72b）', '许可证（HF模型卡）': 'Apache 2.0（7B/32B）；Qwen许可证（3B/72B）', '备注': 'Ollama上为125K上下文' },
          { '世代': 'Qwen3-VL', '发布年份': '2025', 'Ollama官方标签': 'qwen3-vl（2b至235b）', '许可证（HF模型卡）': 'Apache 2.0（已核对的全部尺寸）', '备注': '256K上下文；Instruct与Thinking' },
        ],
        columns: ['世代', '发布年份', 'Ollama官方标签', '许可证（HF模型卡）', '备注'],
        tableFormat: true,
        note: 'Qwen2-VL一行反映的是在本页最近一次更新时对[ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl)的核查，该页面返回HTTP 404。还有其他本地视觉模型；本页不对它们排名——请参阅[本地视觉模型对比](/zh/power-local-llm/local-vision-models-llava-ollama-2026)。',
      },
      promptquorum: {
        id: 'promptquorum',
        title: '将本地Qwen视觉模型连接到PromptQuorum',
        content: [
          'PromptQuorum可以把本地Ollama服务器用作其模型端点之一。Ollama在`http://localhost:11434/v1`提供OpenAI兼容API；将本地模型设置指向该地址，并选择你已拉取的视觉标签，例如`qwen3-vl:8b`。具体字段名称请以应用内设置为准。',
          '发送到本地端点的图像请求由你的Ollama服务器处理，而不是云端视觉API，同时云端模型仍可用于其他任务。把请求路由到哪些模型由你决定，你添加的任何云端模型都会收到你发送给它的内容。',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: '要将PromptQuorum连接到本地Qwen视觉模型，请把本地端点指向http://localhost:11434/v1，并选择已拉取的标签，例如qwen3-vl:8b。' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Qwen视觉模型故障排查',
        items: [
          '**“pull model manifest: file does not exist”或未知模型**：该标签不在官方库中。`qwen2-vl:7b`不可用——请使用`ollama pull qwen3-vl:8b`或`ollama pull qwen2.5vl:7b`。',
          '**拉取成功但模型无法加载**：请更新Ollama。Qwen2.5-VL需要0.7.0+，Qwen3-VL需要0.12.7+。',
          '**图像被忽略，模型像没收到图像一样回答**：确认文件路径正确且可读。在Ollama API中，`images`数组必须包含不带`data:`前缀的原始base64——`data:`前缀仅适用于LM Studio和OpenAI格式。',
          '**CJK字符乱码或缺失**：扫描分辨率可能过低。请以150–300 DPI重新扫描并对比结果。',
          '**内存不足**：改用更小的标签（例如`qwen3-vl:4b`或`qwen2.5vl:3b`），降低上下文大小或图像分辨率，或使用在CPU与GPU之间共享统一内存的Apple Silicon。',
          '**从发票或图表中提取出错误数字**：在有噪点的输入上，本地视觉模型可能读错数字。请提高扫描质量，并始终对照原件核对数值输出。',
          '**PDF无法加载**：Ollama的API接受图像，不接受PDF文件。先把页面转换为PNG或JPEG（使用pdf2image或pypdfium2），再把每一页作为单独的图像发送。',
          '**LM Studio显示“failed to load model”**：要么内存不足，要么下载了不支持视觉的版本。请确认模型卡标明支持视觉，并尝试更小的量化。',
        ],
        callouts: [
          { type: 'tip', text: '运行`ollama ps`可查看已加载的模型及各自占用的内存。在加载更大的模型之前，用`ollama stop qwen3-vl:8b`卸载当前模型。' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '相关阅读',
        items: [
          '[如何在本地运行Qwen 3](/zh/local-llms/run-qwen-locally-guide-2026) — 文本模型配套指南：Qwen语言模型的Ollama与LM Studio配置。',
          '[本地视觉模型对比：LLaVA、Llama 3.2 Vision、MiniCPM-V](/zh/power-local-llm/local-vision-models-llava-ollama-2026) — 其他本地视觉模型的完整概览。',
          '[多模态本地大模型：视觉、音频与文本](/zh/local-llms/multimodal-local-llms) — 在本地运行多模态模型的更广泛概述。',
          '[Qwen vs Llama vs Mistral](/zh/local-llms/qwen-vs-llama-vs-mistral) — Qwen文本模型与其他方案的对比。',
          '[本地大模型硬件指南](/zh/local-llms/local-llm-hardware-guide) — 本地推理所需的显存和GPU。',
          '[浏览全部本地大模型指南](/zh/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          { q: '为什么ollama pull qwen2-vl:7b会失败？', a: '因为Qwen2-VL在Ollama官方库中没有条目——库页面返回HTTP 404。请改用`ollama pull qwen2.5vl:7b`（Ollama 0.7.0+）或`ollama pull qwen3-vl:8b`（Ollama 0.12.7+）。最新列表请见[ollama.com/library](https://ollama.com/library)。' },
          { q: '应该用Qwen2.5-VL还是Qwen3-VL？', a: 'Qwen3-VL是更新的一代（Qwen称其为该系列迄今最强大的视觉语言模型），但需要Ollama 0.12.7或更高版本。Qwen2.5-VL可在Ollama 0.7.0+上运行，涵盖3B到72B。请用你自己的几份文档测试两者；准确率取决于你的材料。' },
          { q: '运行这些模型的最低硬件要求是什么？', a: '没有统一的数值。Ollama上的下载大小为：Qwen3-VL 2B为1.9 GB，4B为3.3 GB，8B为6.1 GB；Qwen2.5-VL 3B为3.2 GB，7B为6.0 GB。上下文缓存和图像编码器需要额外内存，请留出余量，并用`ollama ps`查看机器上的实际占用。' },
          { q: '这些模型能直接读取PDF吗？', a: '通过Ollama不行：其API接受的是图像。请先把每一页PDF转换为PNG或JPEG（使用pdf2image或pypdfium2），把每一页作为单独的图像请求发送，再合并结果。' },
          { q: '如何通过Ollama发送图像？', a: '有两种方式。在交互模式（`ollama run qwen3-vl:8b`）下，在提示词中输入图像文件路径，Ollama会识别并加载图像。通过API时，向/api/generate发送POST请求，附带base64编码的`images`数组；base64字符串不能包含`data:`前缀。' },
          { q: '这些模型能完全离线运行吗？', a: '模型一次性下载完成后，推理在你自己的机器上进行，无需云账号，因此Ollama不会把你发送的图像上传到云端API。机器上的其他软件仍可能向外发送数据，你的工作流程中的数据保护义务也依然适用；这不构成法律建议。更多信息见[Qwen本地部署GDPR配置指南](/zh/local-llms/qwen-local-gdpr-setup-guide-2026)。' },
          { q: '可以商用吗？', a: '取决于尺寸和模型卡上的许可证。Hugging Face模型卡显示Qwen3-VL以及Qwen2.5-VL 7B和32B为Apache 2.0，Qwen2.5-VL 3B和72B使用Qwen许可证。商用前请阅读现行的许可证全文。' },
          { q: '为什么OCR输出的字符是乱码？', a: '多数情况下是扫描件模糊或分辨率过低。请以150–300 DPI重新扫描文档并对比。对任何本地视觉模型而言，低质量输入都是OCR错误的最大来源。' },
        ],
      },
    },
  },

  ko: {
    freshness_tier: 'semi_annual',
    next_refresh_due: '2027-04-19',
    theme: 'Advanced Techniques',
    heroImage: '/images/run-qwen-vl-locally-2026-overview-hero-ko.webp',
    title: '2026년 Qwen2.5-VL과 Qwen3-VL 로컬 실행 방법: 문서 OCR 및 비전 가이드',
    seoTitle: 'Qwen2.5-VL·Qwen3-VL 로컬 실행 2026: Ollama 가이드',
    intro: 'Qwen2.5-VL과 Qwen3-VL은 문서, 스크린샷, 차트, 사진을 읽는 Alibaba의 오픈 비전-언어 모델이며, 둘 다 Ollama로 로컬에서 실행할 수 있습니다. Qwen3-VL 8B는 6.1 GB 다운로드(`ollama pull qwen3-vl:8b`), Qwen2.5-VL 7B는 6.0 GB 다운로드(`ollama pull qwen2.5vl:7b`)입니다. 이 페이지가 원래 다루던 Qwen2-VL은 이전 세대로 Ollama 공식 라이브러리에 항목이 없으므로 `ollama pull qwen2-vl:7b`는 실패합니다. 이 가이드는 확인된 태그·크기·라이선스, Ollama와 LM Studio 설정, 중국어·일본어·한국어 문서 추출을 위한 실용적인 프롬프트를 제공합니다.',
    metaDescription: 'Ollama로 Qwen2.5-VL과 Qwen3-VL을 로컬 실행: 확인된 태그·다운로드 크기·라이선스, 설정 단계, 문서 OCR. Qwen2-VL은 구세대입니다.',
    publishDate: '2026-05-22',
    dateModified: '2026-10-19',
    readTime: '11분 읽기',
    educationalLevel: 'Intermediate',
    audience: '클라우드 API로 데이터를 보내지 않고 오프라인 문서 OCR과 이미지 이해(특히 중국어·일본어·다국어 혼합 파일)가 필요한 개발자와 분석가',
    primaryTerm: 'Qwen2.5-VL과 Qwen3-VL 로컬 실행',
    targetKeywords: [
      'Qwen3-VL 로컬 실행 2026',
      'Qwen2.5-VL Ollama 설정',
      'ollama pull qwen2.5vl',
      'ollama pull qwen3-vl',
      'Qwen2-VL Ollama 대안',
      '중국어 일본어 OCR 로컬 LLM',
    ],
    current_models_mentioned: [
      'Qwen3-VL 2B',
      'Qwen3-VL 4B',
      'Qwen3-VL 8B',
      'Qwen3-VL 30B-A3B',
      'Qwen3-VL 32B',
      'Qwen3-VL 235B-A22B',
      'Qwen2.5-VL 3B',
      'Qwen2.5-VL 7B',
      'Qwen2.5-VL 32B',
      'Qwen2.5-VL 72B',
      'Qwen2-VL',
    ],
    current_hardware_mentioned: [
      'Ollama 0.12.7+',
      'Ollama 0.7.0+',
      'NVIDIA GPU',
      'Apple Silicon (unified memory)',
    ],
    leadAnswerBlock: '**문서와 이미지를 로컬에서 읽으려면 `ollama pull qwen3-vl:8b`(6.1 GB, Ollama 0.12.7 이상 필요) 또는 `ollama pull qwen2.5vl:7b`(6.0 GB, Ollama 0.7.0 이상 필요)를 실행하십시오.** 이전 태그인 `qwen2-vl:7b`는 Ollama 공식 라이브러리에 없으므로 Qwen2.5-VL 또는 Qwen3-VL을 사용하십시오. 전송한 이미지는 클라우드 API로 업로드되지 않고 로컬 Ollama 서버에서 처리됩니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년에 Qwen 비전 모델을 로컬에서 실행하려면 어떻게 합니까?',
        answer: 'Ollama를 업데이트한 뒤 `ollama pull qwen3-vl:8b`(구버전 Ollama에서는 `qwen2.5vl:7b`)를 실행하고, `ollama run qwen3-vl:8b`로 시작해 프롬프트 안에 이미지 파일 경로를 입력하십시오. GUI를 쓰려면 LM Studio에서 Qwen3-VL 또는 Qwen2.5-VL을 검색해 모델 카드에 비전 지원이 표시된 빌드를 선택하십시오. 두 모델 모두 다운로드 크기가 약 6 GB이므로 컨텍스트와 이미지 인코더를 위한 여유 메모리를 확보하십시오.',
        bullets: [
          'Ollama 버전: Qwen3-VL은 0.12.7 이상, Qwen2.5-VL은 0.7.0 이상(Ollama 라이브러리 페이지 기준)',
          '모델 받기: ollama pull qwen3-vl:8b(6.1 GB) 또는 ollama pull qwen2.5vl:7b(6.0 GB)',
          '이미지 첨부: 프롬프트에 파일 경로 입력(CLI) 또는 base64 images 배열 전송(API)',
          '사용할 수 없는 태그: qwen2-vl:7b는 Ollama 공식 라이브러리에 없습니다 — qwen2.5vl 또는 qwen3-vl 사용',
          '라이선스: Qwen3-VL과 Qwen2.5-VL 7B/32B는 Hugging Face 카드에서 Apache 2.0, Qwen2.5-VL 3B와 72B는 Qwen 라이선스',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '핵심 내용', anchor: '#key-takeaways' },
      { label: '어떤 Qwen 비전 모델을 실행해야 합니까?', anchor: '#why-qwen-vl' },
      { label: '태그, 크기 및 라이선스', anchor: '#choose-model' },
      { label: '하드웨어 요구사항', anchor: '#hardware' },
      { label: 'Ollama로 설정하기', anchor: '#ollama-setup' },
      { label: 'LM Studio로 설정하기', anchor: '#lm-studio-setup' },
      { label: 'CJK 문서 OCR', anchor: '#ocr-use-case' },
      { label: '이미지 Q&A, 스크린샷, 차트', anchor: '#other-use-cases' },
      { label: 'Qwen2-VL, Qwen2.5-VL, Qwen3-VL 비교', anchor: '#vs-other-models' },
      { label: 'PromptQuorum과 연결하기', anchor: '#promptquorum' },
      { label: '문제 해결', anchor: '#troubleshooting' },
      { label: '관련 자료', anchor: '#related-reading' },
      { label: '자주 묻는 질문', anchor: '#faq' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Qwen2-VL이 아니라 Qwen3-VL 또는 Qwen2.5-VL을 사용하십시오**: 둘 다 Ollama 라이브러리에 공식 항목(`qwen3-vl`, `qwen2.5vl`)이 있지만, `ollama.com/library/qwen2-vl`은 404를 반환하고 `ollama pull qwen2-vl:7b`는 실패합니다.',
          '**Qwen3-VL 8B는 6.1 GB 다운로드**(`ollama pull qwen3-vl:8b`, Ollama 0.12.7 이상 필요)이고, **Qwen2.5-VL 7B는 6.0 GB**(`ollama pull qwen2.5vl:7b`, Ollama 0.7.0 이상 필요)입니다.',
          '**크기**: Qwen3-VL은 2B, 4B, 8B, 30B-A3B, 32B, 235B-A22B(1.9 GB~143 GB), Qwen2.5-VL은 3B, 7B, 32B, 72B(3.2 GB~49 GB)입니다. Ollama 라이브러리 페이지의 다운로드 크기입니다.',
          '**컨텍스트**: Ollama 페이지에는 Qwen3-VL이 256K, Qwen2.5-VL이 125K 컨텍스트 창으로 표시됩니다. 실제로 쓸 수 있는 컨텍스트는 메모리에 달려 있습니다.',
          '**라이선스는 크기별로 다릅니다**: Qwen3-VL과 Qwen2.5-VL 7B/32B는 Hugging Face 카드에서 Apache 2.0, Qwen2.5-VL 3B와 72B는 Qwen 라이선스입니다. 상업적으로 사용하기 전에 카드를 확인하십시오.',
          '**PDF는 직접 입력할 수 없습니다**: PDF 페이지를 먼저 PNG 또는 JPEG로 변환한 뒤 각 페이지를 별도 이미지로 전송하십시오.',
          '**로컬 처리가 규정 준수를 보장하지는 않습니다**: 이미지는 클라우드 API가 아닌 자신의 Ollama 서버에서 처리되지만, 주변 워크플로에는 개인정보 보호법과 GDPR 등의 의무가 계속 적용됩니다.',
        ],
      },
      whyQwenVl: {
        id: 'why-qwen-vl',
        title: '어떤 Qwen 비전 모델을 실행해야 합니까?',
        image: '/images/run-qwen-vl-locally-2026-vision-pipeline-ko.svg',
        imageCaption: '비전 파이프라인: 이미지가 비전 인코더를 거쳐 언어 모델로 전달되고 OCR 또는 Q&A 텍스트를 반환하며, 모든 처리는 로컬 Ollama 서버에서 이루어집니다.',
        content: [
          '**Ollama가 0.12.7 이상이면 Qwen3-VL 8B로, 더 오래된 버전이면 Qwen2.5-VL 7B로 시작하십시오.** Qwen은 Qwen3-VL을 지금까지의 Qwen 시리즈에서 가장 강력한 비전-언어 모델이라고 설명하며, Hugging Face 카드에는 32개 언어 OCR, 네이티브 256K 컨텍스트, Instruct 및 Thinking 에디션이 명시되어 있습니다.',
          'Qwen2.5-VL은 이전 세대입니다. 카드에는 문서·차트·레이아웃 이해, 송장·양식·표 스캔에 대한 구조화 출력, 바운딩 박스를 이용한 시각적 위치 지정이 강조되어 있습니다. Ollama에서는 두 세대 모두 텍스트와 이미지를 입력으로 받습니다.',
          '이 페이지가 원래 설명하던 Qwen2-VL은 과거의 모델입니다. 2024년에 공개되었고 이후 Qwen2.5-VL과 Qwen3-VL로 대체되었습니다. 이 가이드의 내용은 Qwen2-VL에 의존하지 않습니다.',
          '이는 Qwen 팀의 설명이며 PromptQuorum의 측정 결과가 아닙니다. 사용자의 문서(특히 작은 글꼴, 손글씨, 저품질 스캔)에서의 정확도는 다를 수 있으므로, 대표적인 페이지 몇 장으로 테스트한 뒤 도입하십시오.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'Qwen 비전 모델은 `ollama pull qwen3-vl:8b`(6.1 GB) 또는 `ollama pull qwen2.5vl:7b`(6.0 GB)로 로컬 실행할 수 있으며, 이전 `qwen2-vl` 태그는 Ollama 공식 라이브러리에 없습니다.' },
          { type: 'plain-terms', text: '비전-언어 모델은 이미지를 생성하는 것이 아니라 읽는 모델입니다. 사진이나 스캔한 페이지를 주면 설명, 답변, 추출된 내용 같은 텍스트를 돌려줍니다.' },
        ],
      },
      chooseModel: {
        id: 'choose-model',
        title: 'Qwen3-VL과 Qwen2.5-VL의 Ollama 태그, 크기, 라이선스',
        content: [
          '아래 크기는 Ollama 라이브러리 페이지([qwen3-vl](https://ollama.com/library/qwen3-vl), [qwen2.5vl](https://ollama.com/library/qwen2.5vl))에 표시된 다운로드 크기이며, 라이선스는 Instruct 버전의 Hugging Face 모델 카드([Hugging Face의 Qwen](https://huggingface.co/Qwen))에서 가져왔습니다. 라이브러리와 라이선스는 바뀔 수 있으므로 의존하기 전에 다시 확인하십시오.',
        ],
        rows: [
          { '모델': 'Qwen3-VL 2B', 'Ollama 태그': 'qwen3-vl:2b', '다운로드': '1.9 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen3-VL 4B', 'Ollama 태그': 'qwen3-vl:4b', '다운로드': '3.3 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen3-VL 8B', 'Ollama 태그': 'qwen3-vl:8b', '다운로드': '6.1 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen3-VL 30B-A3B (MoE)', 'Ollama 태그': 'qwen3-vl:30b', '다운로드': '20 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen3-VL 32B', 'Ollama 태그': 'qwen3-vl:32b', '다운로드': '21 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen3-VL 235B-A22B (MoE)', 'Ollama 태그': 'qwen3-vl:235b', '다운로드': '143 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen2.5-VL 3B', 'Ollama 태그': 'qwen2.5vl:3b', '다운로드': '3.2 GB', '라이선스(HF 카드)': 'Qwen Research 라이선스' },
          { '모델': 'Qwen2.5-VL 7B', 'Ollama 태그': 'qwen2.5vl:7b', '다운로드': '6.0 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen2.5-VL 32B', 'Ollama 태그': 'qwen2.5vl:32b', '다운로드': '21 GB', '라이선스(HF 카드)': 'Apache 2.0' },
          { '모델': 'Qwen2.5-VL 72B', 'Ollama 태그': 'qwen2.5vl:72b', '다운로드': '49 GB', '라이선스(HF 카드)': 'Qwen 라이선스' },
        ],
        columns: ['모델', 'Ollama 태그', '다운로드', '라이선스(HF 카드)'],
        tableFormat: true,
        note: '메모리에 들어가는 크기를 고르십시오. 단일 GPU 장비 대부분은 Qwen3-VL 8B 또는 Qwen2.5-VL 7B, 작은 GPU는 2B–4B 또는 3B 태그, 30B 이상 태그는 대형 GPU나 대용량 통합 메모리가 있을 때만 사용하십시오. Ollama는 Qwen3-VL의 `-instruct` 및 `-thinking` 태그(예: `qwen3-vl:8b-instruct`, 6.2 GB)도 제공합니다. 추론 텍스트 없이 바로 추출 결과를 원하면 Instruct 태그를 사용하십시오. 기본 태그는 `q4_K_M` 변형과 크기가 같습니다 — [LLM 양자화 설명](/ko/local-llms/llm-quantization-explained)을 참조하십시오.',
      },
      hardware: {
        id: 'hardware',
        title: 'Qwen 비전 모델의 하드웨어 요구사항',
        items: [
          '**다운로드 크기는 가중치만 포함합니다**: Qwen3-VL 8B는 6.1 GB, Qwen2.5-VL 7B는 6.0 GB입니다. 컨텍스트 캐시와 이미지 인코더에는 컨텍스트 길이와 이미지 크기에 따라 늘어나는 추가 메모리가 필요하므로 다운로드 크기보다 여유를 두십시오.',
          '**더 작은 선택지**: Qwen3-VL 2B(1.9 GB)와 4B(3.3 GB), Qwen2.5-VL 3B(3.2 GB)는 작은 GPU와 노트북에 적합하며, 7B–8B 모델보다 정확도가 낮을 것으로 예상하십시오.',
          '**더 큰 선택지**: Qwen3-VL 30B-A3B(20 GB), Qwen3-VL 32B와 Qwen2.5-VL 32B(21 GB), Qwen2.5-VL 72B(49 GB)는 대형 GPU, 다중 GPU 또는 통합 메모리가 큰 Apple Silicon이 필요합니다.',
          '**부분 오프로드**: 모델이 VRAM에 들어가지 않으면 Ollama가 일부를 시스템 RAM에 둘 수 있습니다. 동작은 하지만 눈에 띄게 느려집니다.',
          '**소프트웨어**: Ollama 라이브러리 페이지에 따라 Qwen3-VL은 Ollama 0.12.7 이상, Qwen2.5-VL은 0.7.0 이상이 필요합니다.',
        ],
        callouts: [
          { type: 'note', text: 'PromptQuorum은 이 가이드를 위해 특정 GPU에서 이 모델들을 벤치마크하지 않았으므로 속도나 정확한 VRAM 수치는 제공하지 않습니다. 모델을 로드한 뒤 `ollama ps`를 실행하면 사용자의 장비에서 실제로 쓰는 메모리를 확인할 수 있습니다.' },
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama로 Qwen2.5-VL과 Qwen3-VL 설정하기',
        image: '/images/run-qwen-vl-locally-2026-ollama-setup-steps-ko.svg',
        imageCaption: 'Ollama 설정 5단계: Ollama 설치 또는 업데이트, Qwen 비전 태그 받기, 이미지를 첨부해 실행, API로 전송, CJK OCR 확인.',
        content: [
          'Ollama는 Qwen 비전 모델을 로컬에서 실행하는 가장 빠른 방법입니다. 모델 다운로드와 양자화를 관리하고 localhost:11434에서 API를 제공합니다. [ollama.com](https://ollama.com/download)에서 설치하십시오. 처음이라면 [Ollama 설치 방법](/ko/local-llms/how-to-install-ollama)부터 시작하십시오.',
        ],
        numberedItems: [
          { title: 'Ollama 설치 또는 업데이트', whyItMatters: 'Qwen2.5-VL은 Ollama 0.7.0 이상, Qwen3-VL은 0.12.7 이상이 필요합니다. `ollama --version`으로 확인하고 필요하면 업데이트하십시오. Ollama는 macOS, Linux, Windows에서 사용할 수 있습니다.' },
          { title: '명시적인 태그로 모델 받기', whyItMatters: '`qwen3-vl:8b` 또는 `qwen2.5vl:7b`를 사용하십시오. `qwen2-vl:7b`는 Ollama 공식 라이브러리에 없으므로 받기에 실패합니다.' },
          { title: '모델을 실행하고 이미지 첨부', whyItMatters: '대화형 모드에서 프롬프트 안에 이미지 파일 경로를 입력하십시오. Ollama가 경로를 감지해 이미지를 불러옵니다.' },
          { title: 'API로 이미지 전송', whyItMatters: '/api/generate 엔드포인트는 data: 접두사가 없는 base64 인코딩 `images` 배열을 받습니다. 애플리케이션(PromptQuorum 포함)은 이렇게 프로그래밍 방식으로 이미지를 전송합니다.' },
          { title: '다국어 OCR 확인', whyItMatters: '중국어 또는 일본어 문서 스캔을 전송하고, 추출된 텍스트를 원본과 대조한 뒤에 본격적으로 사용하십시오.' },
        ],
        codeBlock: `# Step 1 — Install or update Ollama (Qwen3-VL needs 0.12.7+, Qwen2.5-VL needs 0.7.0+)
# macOS
brew install ollama

# Linux
curl -fsSL https://ollama.com/install.sh | sh

# Windows — download from https://ollama.com/download
ollama --version

# Step 2 — Pull a Qwen vision model (explicit tag)
ollama pull qwen3-vl:8b          # 6.1 GB
# or: ollama pull qwen2.5vl:7b   # 6.0 GB

# Step 3 — Run and attach an image (interactive)
ollama run qwen3-vl:8b
>>> Extract every line of text from ./invoice-jp.png

# Step 4 — Send an image through the API
# Encode the image first:  base64 -i scan.png   (macOS)
curl http://localhost:11434/api/generate -d '{
  "model": "qwen3-vl:8b",
  "prompt": "Extract every line of text from this document. Preserve line breaks.",
  "images": ["<base64-encoded-image>"],
  "stream": false
}'

# Step 5 — Verify multilingual OCR
ollama run qwen3-vl:8b
>>> Extract all text from this image: ./contract-zh.png`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'warning', text: '문서 이미지는 150 DPI 이상으로 전송하십시오. OCR 결과에서 가장 큰 요인은 이미지 품질이며, 흐릿한 스캔은 어떤 모델로 읽어도 잘못된 문자를 만듭니다.' },
        ],
      },
      lmStudioSetup: {
        id: 'lm-studio-setup',
        title: 'LM Studio로 Qwen 비전 모델 설정하기',
        content: [
          'LM Studio는 명령어 없이 그래픽 인터페이스로 비전 모델을 실행합니다. [lmstudio.ai](https://lmstudio.ai)에서 다운로드하거나 [LM Studio 설치 방법](/ko/local-llms/how-to-install-lm-studio)을 참조하십시오. 모델 카탈로그는 시간이 지나며 바뀌므로 현재 Qwen에 대해 무엇을 제공하는지 확인하십시오.',
        ],
        numberedItems: [
          { title: 'LM Studio 다운로드 및 설치', whyItMatters: '로컬 모델 추론을 위한 크로스 플랫폼 GUI입니다. 터미널이 필요 없습니다.' },
          { title: 'Qwen 비전 모델 검색', whyItMatters: '모델 브라우저에서 "Qwen3-VL" 또는 "Qwen2.5-VL"을 검색하고, 모델 카드에 비전 지원이 표시된 빌드를 선택하십시오. 양자화는 메모리에 맞추십시오.' },
          { title: '모델 로드 및 이미지 첨부', whyItMatters: '채팅 입력창의 이미지 버튼으로 사진이나 스캔을 업로드하십시오. LM Studio가 이를 비전 인코더에 전달합니다.' },
          { title: '로컬 서버 시작', whyItMatters: '"Start Server" 옵션은 localhost:1234에 OpenAI 호환 API를 제공합니다. 비전 요청은 표준 image_url 콘텐츠 형식을 사용합니다.' },
        ],
        codeBlock: `// LM Studio — OpenAI-compatible vision request (localhost:1234)
{
  "model": "<model-id-shown-in-LM-Studio>",
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
        note: 'LM Studio와 Ollama는 이미지 형식이 다릅니다. LM Studio는 OpenAI의 image_url 콘텐츠 스키마(data: 접두사 포함)를 따르고, Ollama는 접두사 없는 원시 base64를 담은 최상위 `images` 배열을 사용합니다. 런타임 하나를 정해 그 형식에 맞추십시오.',
      },
      ocrUseCase: {
        id: 'ocr-use-case',
        title: '중국어, 일본어 및 다국어 혼합 문서 OCR',
        content: [
          '**Qwen 비전 모델은 중국어, 일본어, 한국어, 다국어 혼합 문서에서 텍스트를 추출할 수 있지만 정확도는 스캔 품질과 레이아웃에 좌우됩니다 — 직접 보유한 문서로 테스트하십시오.** Qwen3-VL 모델 카드에는 32개 언어 OCR 지원이, Qwen2.5-VL 카드에는 송장·양식·표 스캔에 대한 구조화 출력이 명시되어 있습니다.',
          '가장 안정적인 방법은 구체적인 추출 프롬프트입니다. 막연한 "이걸 읽어 줘" 대신 "표 레이아웃 유지", "각 필드를 key: value로 반환"처럼 구조를 요구하십시오.',
        ],
        items: [
          '**일반 텍스트 추출**: "이 이미지의 모든 텍스트 줄을 추출하십시오. 줄 바꿈과 읽는 순서를 유지하십시오."',
          '**구조화된 필드**: "이것은 일본 송장입니다. 공급업체, 날짜, 소계, 세금, 합계를 key: value 쌍으로 반환하십시오."',
          '**표 추출**: "이 표를 CSV로 추출하십시오. 첫 행을 헤더로 처리하십시오."',
          '**추출과 번역을 한 번에**: "이 이미지에서 중국어 텍스트를 추출한 뒤 영어로 번역하십시오. 둘 다 보여 주십시오."',
        ],
        codeBlock: `# Japanese invoice -> structured fields
ollama run qwen3-vl:8b
>>> This is a Japanese invoice. Extract vendor name, invoice date,
    subtotal, consumption tax, and total. Return as key: value pairs.
    ./invoice-jp.png

# Illustrative output format (not a measured result):
# vendor: <vendor name>
# date: <invoice date>
# subtotal: <amount> JPY
# tax: <amount> JPY
# total: <amount> JPY`,
        codeLanguage: 'bash',
        callouts: [
          { type: 'important', text: '추출된 숫자는 반드시 원본 문서와 대조하십시오. 로컬 비전 모델은 저품질 스캔에서 숫자를 잘못 읽을 수 있습니다. 특히 송장과 재무 문서에서는 OCR 결과를 최종 값이 아니라 확인이 필요한 초안으로 취급하십시오.' },
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'CJK 문서에서 텍스트를 추출하려면 150+ DPI 이미지를 qwen3-vl:8b 또는 qwen2.5vl:7b에 보내고, "각 필드를 key: value로 반환"처럼 구조를 요구하는 구체적인 프롬프트를 사용하십시오.' },
          { type: 'plain-terms', text: 'OCR은 글자가 담긴 이미지를 편집 가능한 텍스트로 바꾸는 것입니다. 모델이 스캔한 페이지를 보고 보이는 내용을 글자로 적어 줍니다.' },
        ],
      },
      otherUseCases: {
        id: 'other-use-cases',
        title: '이미지 Q&A, 스크린샷 분석, 차트 읽기',
        content: [
          'OCR 외에도 Qwen 비전 모델은 사진을 설명하고, 스크린샷에 관한 질문에 답하고, 차트를 읽을 수 있습니다. 선명한 입력에서 결과가 가장 좋고, 복잡하거나 모호한 장면에서는 약합니다.',
        ],
        items: [
          '**이미지 Q&A**: 사진에 대해 "이 이미지에 무엇이 있습니까?"처럼 자유롭게 질문하고, 답변을 이미지와 대조해 확인하십시오.',
          '**스크린샷 및 UI 분석**: UI 스크린샷, 오류 대화상자, 앱 상태를 읽는 것부터 시작하십시오. 두 모델의 카드에는 GUI 에이전트 기능도 설명되어 있지만 이 가이드에서는 다루지 않습니다.',
          '**차트 및 그래프 읽기**: 차트의 구조와 추세를 설명하는 것이 정확한 수치를 추출하는 것보다 잘 작동합니다. 정확한 값은 원본 데이터로 확인하십시오.',
          '**여러 이미지 비교**: 한 번의 요청에 여러 이미지를 보내 버전을 비교하거나 묶음을 설명할 수 있습니다. 몇 장까지 가능한지는 메모리와 컨텍스트 크기에 달려 있습니다.',
        ],
        callouts: [
          { type: 'tip', text: '다른 로컬 비전 모델의 개요는 [로컬 비전 모델 비교](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 참조하십시오.' },
        ],
      },
      vsOtherModels: {
        id: 'vs-other-models',
        title: 'Qwen2-VL, Qwen2.5-VL, Qwen3-VL 비교',
        content: [
          '**Qwen2-VL은 셋 중 가장 오래되었고 Ollama 공식 라이브러리에 항목이 없는 유일한 모델입니다. 현재의 선택지는 Qwen2.5-VL과 Qwen3-VL입니다.** 표는 Ollama 라이브러리와 Hugging Face 카드에서 확인할 수 있는 내용을 정리한 것입니다.',
        ],
        rows: [
          { '세대': 'Qwen2-VL', '공개 연도': '2024', 'Ollama 공식 태그': '없음(라이브러리 페이지 404)', '라이선스(HF 카드)': 'Apache 2.0(2B/7B), Qwen 라이선스(72B)', '비고': '과거 기록용' },
          { '세대': 'Qwen2.5-VL', '공개 연도': '2025', 'Ollama 공식 태그': 'qwen2.5vl(3b, 7b, 32b, 72b)', '라이선스(HF 카드)': 'Apache 2.0(7B/32B), Qwen 라이선스(3B/72B)', '비고': 'Ollama에서 125K 컨텍스트' },
          { '세대': 'Qwen3-VL', '공개 연도': '2025', 'Ollama 공식 태그': 'qwen3-vl(2b~235b)', '라이선스(HF 카드)': 'Apache 2.0(확인한 모든 크기)', '비고': '256K 컨텍스트, Instruct·Thinking' },
        ],
        columns: ['세대', '공개 연도', 'Ollama 공식 태그', '라이선스(HF 카드)', '비고'],
        tableFormat: true,
        note: 'Qwen2-VL 행은 이 페이지가 마지막으로 업데이트된 시점에 [ollama.com/library/qwen2-vl](https://ollama.com/library/qwen2-vl)이 HTTP 404를 반환한 것을 확인한 결과입니다. 다른 로컬 비전 모델도 있지만 이 페이지에서는 순위를 매기지 않습니다 — [로컬 비전 모델 비교](/ko/power-local-llm/local-vision-models-llava-ollama-2026)를 참조하십시오.',
      },
      promptquorum: {
        id: 'promptquorum',
        title: '로컬 Qwen 비전 모델을 PromptQuorum에 연결하기',
        content: [
          'PromptQuorum은 로컬 Ollama 서버를 모델 엔드포인트 중 하나로 사용할 수 있습니다. Ollama는 `http://localhost:11434/v1`에서 OpenAI 호환 API를 제공하므로, 로컬 모델 설정을 이 주소로 지정하고 받아 둔 비전 태그(예: `qwen3-vl:8b`)를 선택하십시오. 정확한 필드 이름은 앱 내 설정에서 확인하십시오.',
          '로컬 엔드포인트로 보낸 이미지 요청은 클라우드 비전 API가 아닌 Ollama 서버에서 처리되며, 다른 작업에는 클라우드 모델을 계속 사용할 수 있습니다. 어떤 모델로 요청을 보낼지는 사용자가 정하며, 추가한 클라우드 모델은 사용자가 보낸 내용을 그대로 받습니다.',
        ],
        snippetBlocks: [
          { type: 'one-sentence', text: 'PromptQuorum을 로컬 Qwen 비전 모델에 연결하려면 로컬 엔드포인트를 http://localhost:11434/v1로 지정하고 qwen3-vl:8b 같은 받아 둔 태그를 선택하십시오.' },
        ],
      },
      troubleshooting: {
        id: 'troubleshooting',
        title: 'Qwen 비전 모델 문제 해결',
        items: [
          '**"pull model manifest: file does not exist" 또는 알 수 없는 모델**: 해당 태그가 공식 라이브러리에 없습니다. `qwen2-vl:7b`는 사용할 수 없으므로 `ollama pull qwen3-vl:8b` 또는 `ollama pull qwen2.5vl:7b`를 사용하십시오.',
          '**받기는 성공했지만 모델이 로드되지 않음**: Ollama를 업데이트하십시오. Qwen2.5-VL은 0.7.0 이상, Qwen3-VL은 0.12.7 이상이 필요합니다.',
          '**이미지가 무시되고 모델이 이미지가 없는 것처럼 답함**: 파일 경로가 올바르고 읽을 수 있는지 확인하십시오. Ollama API에서는 `images` 배열에 `data:` 접두사가 *없는* 원시 base64를 넣어야 합니다. `data:` 접두사는 LM Studio와 OpenAI 형식 전용입니다.',
          '**CJK 문자가 깨지거나 누락됨**: 스캔 해상도가 너무 낮을 수 있습니다. 150–300 DPI로 다시 스캔하고 결과를 비교하십시오.',
          '**메모리 부족**: 더 작은 태그(예: `qwen3-vl:4b` 또는 `qwen2.5vl:3b`)를 선택하거나, 컨텍스트 크기나 이미지 해상도를 줄이거나, CPU와 GPU가 통합 메모리를 공유하는 Apple Silicon을 사용하십시오.',
          '**송장이나 차트에서 잘못된 숫자가 추출됨**: 잡음이 많은 입력에서는 로컬 비전 모델이 숫자를 잘못 읽을 수 있습니다. 스캔 품질을 높이고 숫자 결과는 항상 원본과 대조하십시오.',
          '**PDF가 로드되지 않음**: Ollama API는 이미지를 받으며 PDF 파일은 받지 않습니다. 페이지를 먼저 PNG 또는 JPEG로 변환(pdf2image 또는 pypdfium2 사용)한 뒤 각 페이지를 별도 이미지로 전송하십시오.',
          '**LM Studio에 "failed to load model"이 표시됨**: 메모리가 부족하거나 비전을 지원하지 않는 빌드를 받았을 수 있습니다. 모델 카드에 비전 지원이 표시되어 있는지 확인하고 더 작은 양자화를 시도하십시오.',
        ],
        callouts: [
          { type: 'tip', text: '`ollama ps`를 실행하면 로드된 모델과 각 모델이 사용하는 메모리를 볼 수 있습니다. 더 큰 모델을 로드하기 전에는 `ollama stop qwen3-vl:8b`로 모델을 언로드하십시오.' },
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Qwen 3 로컬 실행 방법](/ko/local-llms/run-qwen-locally-guide-2026) — 텍스트 모델 편: Qwen 언어 모델의 Ollama 및 LM Studio 설정.',
          '[로컬 비전 모델 비교: LLaVA, Llama 3.2 Vision, MiniCPM-V](/ko/power-local-llm/local-vision-models-llava-ollama-2026) — 다른 로컬 비전 모델의 전체 개요.',
          '[멀티모달 로컬 LLM: 비전, 오디오, 텍스트](/ko/local-llms/multimodal-local-llms) — 멀티모달 모델을 로컬에서 실행하는 방법에 대한 폭넓은 개요.',
          '[Qwen vs Llama vs Mistral](/ko/local-llms/qwen-vs-llama-vs-mistral) — Qwen 텍스트 모델과 대안의 비교.',
          '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide) — 로컬 추론에 필요한 VRAM과 GPU.',
          '[로컬 LLM 가이드 전체 보기](/ko/local-llms)',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          { q: 'ollama pull qwen2-vl:7b가 실패하는 이유는 무엇입니까?', a: 'Qwen2-VL이 Ollama 공식 라이브러리에 항목이 없고 라이브러리 페이지가 HTTP 404를 반환하기 때문입니다. 대신 `ollama pull qwen2.5vl:7b`(Ollama 0.7.0 이상) 또는 `ollama pull qwen3-vl:8b`(Ollama 0.12.7 이상)를 사용하십시오. 최신 목록은 [ollama.com/library](https://ollama.com/library)에서 확인하십시오.' },
          { q: 'Qwen2.5-VL과 Qwen3-VL 중 무엇을 사용해야 합니까?', a: 'Qwen3-VL이 더 새로운 세대이며(Qwen은 시리즈에서 가장 강력한 비전-언어 모델이라고 설명합니다) Ollama 0.12.7 이상이 필요합니다. Qwen2.5-VL은 Ollama 0.7.0 이상에서 동작하며 3B에서 72B까지 있습니다. 보유한 문서 몇 건으로 둘 다 시험해 보십시오. 정확도는 자료에 따라 달라집니다.' },
          { q: '이 모델들을 실행하는 데 필요한 최소 하드웨어는 무엇입니까?', a: '하나의 수치는 없습니다. Ollama 다운로드 크기는 Qwen3-VL 2B가 1.9 GB, 4B가 3.3 GB, 8B가 6.1 GB이고 Qwen2.5-VL 3B가 3.2 GB, 7B가 6.0 GB입니다. 컨텍스트 캐시와 이미지 인코더에 추가 메모리가 필요하므로 여유를 두고, `ollama ps`로 장비에서의 실제 사용량을 확인하십시오.' },
          { q: '이 모델들이 PDF를 직접 읽을 수 있습니까?', a: 'Ollama를 통해서는 불가능합니다. Ollama API는 이미지를 받습니다. 먼저 PDF의 각 페이지를 PNG 또는 JPEG로 변환(pdf2image 또는 pypdfium2 사용)하고, 각 페이지를 별도의 이미지 요청으로 보낸 뒤 결과를 합치십시오.' },
          { q: 'Ollama로 이미지를 어떻게 보냅니까?', a: '두 가지 방법이 있습니다. 대화형 모드(`ollama run qwen3-vl:8b`)에서는 프롬프트 안에 이미지 파일 경로를 입력하면 Ollama가 이를 감지해 이미지를 불러옵니다. API에서는 base64로 인코딩한 `images` 배열과 함께 /api/generate에 POST하십시오. base64 문자열에는 `data:` 접두사가 포함되면 안 됩니다.' },
          { q: '모델이 완전히 오프라인으로 실행됩니까?', a: '모델을 한 번 다운로드한 뒤에는 클라우드 계정 없이 추론이 사용자의 장비에서 실행되므로 Ollama가 전송한 이미지를 클라우드 API로 업로드하지 않습니다. 다만 장비의 다른 소프트웨어가 데이터를 외부로 보낼 수 있고, 워크플로에 대한 개인정보 보호 의무도 계속 적용됩니다(법률 자문이 아닙니다). 자세한 내용은 [Qwen 로컬 GDPR 설정 가이드](/ko/local-llms/qwen-local-gdpr-setup-guide-2026)를 참조하십시오.' },
          { q: '상업적으로 사용할 수 있습니까?', a: '크기와 모델 카드의 라이선스에 따라 다릅니다. Hugging Face 카드에는 Qwen3-VL과 Qwen2.5-VL 7B·32B가 Apache 2.0, Qwen2.5-VL 3B·72B가 Qwen 라이선스로 표시되어 있습니다. 상업적으로 사용하기 전에 현재 라이선스 전문을 읽으십시오.' },
          { q: 'OCR 결과에서 문자가 깨지는 이유는 무엇입니까?', a: '대부분 스캔이 흐릿하거나 해상도가 낮기 때문입니다. 문서를 150–300 DPI로 다시 스캔해 비교하십시오. 저품질 입력은 모든 로컬 비전 모델에서 OCR 오류의 가장 큰 원인입니다.' },
        ],
      },
    },
  },
};
