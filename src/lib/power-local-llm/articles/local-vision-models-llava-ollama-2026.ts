// Power Local LLM — Best Local Vision Models 2026: Gemma 4, Qwen3-VL, LLaVA, and Ollama Multimodal Setup
// Slug: local-vision-models-llava-ollama-2026
// Category: Voice, Speech & Multimodal

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-en.webp',
    title: 'Best Local Vision Models 2026: Gemma 4, Qwen3-VL, LLaVA & Ollama Multimodal Setup',
    seoTitle: 'Best Local Vision Models 2026: Gemma 4, Qwen3-VL & Ollama',
    intro:
      'Vision-language models (VLMs) accept image input alongside text and return text output — enabling document OCR, image Q&A, screenshot analysis, and chart reading locally. In 2026, the easiest path to running VLMs is through Ollama: pull a model, send an image, get a description or answer. This guide compares the leading local vision models (Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, MiniCPM-V, LLaVA 1.6, Llama 3.2 Vision, Moondream 2, InternVL 2.5), covers Ollama setup step-by-step, and maps each model to its best use case by VRAM requirement. Download sizes come from the Ollama model library and quality figures from the vendors\' model cards, checked 19 October 2026.',
    metaDescription:
      'Best local VLMs for Ollama in 2026: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. VRAM per model, OCR picks and setup steps.',
    twitterDescription:
      'Best local vision models 2026: Gemma 4, Qwen3-VL, MiniCPM-V, LLaVA via Ollama. Image Q&A, OCR, screenshot analysis offline. VRAM guide and setup.',
    audience:
      'Developers needing local image understanding without cloud APIs — for document processing, screenshot analysis, accessibility tools, inventory systems, or privacy-sensitive image workflows.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local vision model',
    targetKeywords: [
      'local vision model 2026',
      'best local vlm',
      'gemma 4 vision ollama',
      'small vision language model under 3b',
      'LLaVA Ollama setup',
      'run vision model locally',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen3-vl local',
      'qwen3-vl ollama',
      'best local vision model',
      'offline image understanding',
      'local multimodal model',
      'ollama vision model',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**For most people, Gemma 4 (Apache 2.0) via Ollama is the best local vision model in 2026: gemma4:e4b fits 8 GB cards, gemma4:26b or 31b suit 24 GB.** Google\'s model card reports MMMU Pro scores of 52.6% (E4B), 69.1% (12B), 73.8% (26B A4B) and 76.9% (31B), against 49.7% for the previous Gemma 3 27B. For document OCR and multilingual text, Qwen3-VL 8B (6.1 GB download), Qwen3.5 9B and the newer Qwen3.8 27B (18 GB) are the strongest picks. Llama 3.2 Vision, formerly the default recommendation, has been reported failing to load on recent Ollama versions ("unknown model architecture: mllama"), so it is no longer the first choice. Under 3 GB, use Qwen3.5 2B, Qwen3-VL 2B or Moondream 2. Once downloaded, all models can run without an internet connection.',
    quickAnswerTop: {
      en: {
        question: 'What are the best local vision models to run with Ollama in 2026?',
        answer:
          'The best local vision model for Ollama in 2026 is **Gemma 4** (`ollama pull gemma4`) for general image understanding. Use **Qwen3-VL**, **Qwen3.5** or **Qwen3.8** for document OCR and multilingual text, and **Moondream 2** or **Qwen3.5 2B** on hardware under 4 GB.',
        bullets: [
          'Under 4 GB VRAM → Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) or Moondream 2 (1.7 GB): fast, limited on complex images and dense text.',
          '6–8 GB VRAM → Gemma 4 E4B (6.6–9.5 GB download), Qwen3-VL 8B (6.1 GB) or Qwen3.5 9B (6.6–7.6 GB): the best balance of quality and hardware fit.',
          '16–24 GB VRAM → Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) or Qwen3-VL 32B (21 GB): near-cloud quality on documents and photos.',
          'Apple M-series or 64+ GB → Qwen3.5 122B (81 GB) or Llama 3.2 Vision 90B (55 GB); Qwen3-VL 235B needs 143 GB.',
          'Setup: `ollama pull gemma4:e4b`, then `ollama run gemma4:e4b "Describe this image: ./photo.jpg"` (put the image path in the prompt).',
          'Best for OCR: Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — strongest on text extraction from documents.',
          'Best for UI / screenshots: InternVL 2.5 (community GGUF), or Gemma 4 when you also need tool calling.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Key Takeaways', anchor: '#key-takeaways' },
      { label: 'Quick Facts', anchor: '#quick-facts' },
      { label: 'What Are Vision-Language Models?', anchor: '#what-are-vlms' },
      { label: 'Model Comparison Table', anchor: '#model-comparison' },
      { label: 'Real-World Accuracy Test: Invoice Extraction', anchor: '#invoice-accuracy-test' },
      { label: 'Multi-Image Support', anchor: '#multi-image-support' },
      { label: 'Setup via Ollama (Step-by-Step)', anchor: '#ollama-setup' },
      { label: 'Use Case 1: Document OCR and Extraction', anchor: '#use-case-ocr' },
      { label: 'Use Case 2: Image Q&A and Description', anchor: '#use-case-qa' },
      { label: 'Use Case 3: Screenshot and UI Analysis', anchor: '#use-case-screenshot' },
      { label: 'Use Case 4: Chart and Graph Reading', anchor: '#use-case-chart' },
      { label: 'Use Case 5: Video Frame Analysis', anchor: '#use-case-video' },
      { label: 'VRAM and Performance Reality Check', anchor: '#vram-reality' },
      { label: 'How Local Vision Models Compare to GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA Deep Dive', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL — Best Multilingual and OCR Performance', anchor: '#qwen-vl-deep-dive' },
      { label: 'How to Choose Your Vision Model', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Related Reading', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 is the best local vision model for most developers in 2026.** It is Apache 2.0, available from Ollama in five sizes (E2B, E4B, 12B, 26B A4B, 31B), and its model card reports MMMU Pro of 52.6% (E4B) to 76.9% (31B) versus 49.7% for Gemma 3 27B.',
          '**Qwen3-VL 8B, Qwen3.5 9B and Qwen3.8 27B lead document OCR and multilingual text.** Qwen3-VL 8B needs a 6.1 GB download; Qwen3.8 27B (Apache 2.0, 18 GB) reports 91.1 on OmniDocBench 1.5.',
          '**Llama 3.2 Vision is no longer the safe default.** Users report "unknown model architecture: mllama" on recent Ollama versions (GitHub issues #16490 and #16547, no confirmed fix), and its Ollama listing has not been updated in about a year.',
          '**Under 4 GB, pick Qwen3.5 2B, Qwen3-VL 2B or Moondream 2.** All three are small and fast, but they struggle with complex scenes, dense text and precise chart reading.',
          '**LLaVA 1.6 is among the most documented and community-tested local VLMs.** It is a practical choice when you need tutorials and troubleshooting help, but newer models beat it on OCR and quality.',
          '**Use Ollama\'s `format` parameter for structured output.** Passing a JSON schema constrains the reply to your fields so it parses cleanly; still validate every value against the source.',
          '**No local model matches GPT-5.5 Vision on everything.** Local VLMs in 2026 are a strong tier-2 option — excellent for structured documents and clear photos, weaker on ambiguous scenes, handwriting, and complex infographics.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**What VLMs do:** Accept image + text input → produce text output. Not image generators — these are image *understanders*.',
          '**Ollama support:** Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, Llama 3.2 Vision, MiniCPM-V, LLaVA and Moondream are in the official Ollama library; InternVL, PaliGemma 2 and SmolVLM need community builds.',
          '**Smallest usable models:** Moondream 2 (1.8B, 1.7 GB download), Qwen3-VL 2B (1.9 GB) and Qwen3.5 0.8B (1.2–1.3 GB).',
          '**Largest practical local models:** Qwen3.5 122B (81 GB) and Llama 3.2 Vision 90B (55 GB) on 64 GB+ unified memory (Apple M-series or multi-GPU); Qwen3-VL 235B needs 143 GB.',
          '**Image input format:** JPEG, PNG, WebP accepted. Max resolution varies by model (typically 1024×1024 to 4096×4096).',
          '**Audio and video:** Gemma 4 E2B, E4B and 12B also accept audio; all Gemma 4 sizes and Qwen3.8 process video as frames.',
          '**OCR strength:** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**Multimodal ≠ fast:** Vision models add a vision encoder on top of the LLM — expect ~30–60% slower token generation than a text-only model of the same parameter count.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: 'What Are Vision-Language Models (VLMs)?',
        content:
          'A vision-language model (VLM) is a neural network that processes image and text inputs simultaneously and produces text output. The standard architecture pairs a vision encoder (typically CLIP or SigLIP) with a language decoder (an LLM), connected by a projection layer that maps image features into the token space the LLM understands.',
        items: [
          '**How they differ from image generators:** Stable Diffusion, FLUX, and DALL-E 3 are text-to-image generators — they produce images from text prompts. VLMs are image-to-text models — they describe, analyze, and answer questions about images.',
          '**How they differ from OCR-only tools:** Traditional OCR (Tesseract, PaddleOCR) extracts text from structured documents using pattern recognition. VLMs understand context — they can describe what a table means, answer questions about a chart, or identify objects in a photograph.',
          '**Why run them locally:** Private documents (medical records, legal scans, financial statements), proprietary screenshots (internal dashboards, source code), or any workflow where sending images to cloud APIs raises compliance or confidentiality concerns.',
          '**What they cannot do:** Generate images, execute code shown in screenshots, or access the internet. VLMs only produce text output based on what\'s visible in the image.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Available Local Vision Models — Comparison Table',
        content:
          'Comparison of the most capable local vision models available via Ollama or direct inference, checked on 19 October 2026. The VRAM column is the Ollama download size (4-bit quantized unless noted) — add 1–2 GB for context. *Llama 3.2 Vision is reported failing to load on recent Ollama versions (see the Llama 3.2 Vision note below).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For 8 GB VRAM: Gemma 4 E4B or Qwen3-VL 8B; for 24 GB: Gemma 4 26B/31B or Qwen3.8 27B — all run locally via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4 is the best overall; Qwen3-VL, Qwen3.5 and Qwen3.8 lead document OCR and multilingual text; Moondream and Qwen3.5 2B are the light options under 4 GB VRAM.',
          },
        ],
        columns: ['Model', 'Parameters', 'VRAM (Q4)', 'Image Types', 'Quality', 'Via Ollama?'],
        rows: [
          {
            'Model': 'Moondream 2',
            'Parameters': '1.8B',
            'VRAM (Q4)': '~2 GB',
            'Image Types': 'Simple photos',
            'Quality': 'Basic',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'SmolVLM 2.2B',
            'Parameters': '2.2B',
            'VRAM (Q4)': '~2 GB',
            'Image Types': 'Simple photos, captions',
            'Quality': 'Basic+',
            'Via Ollama?': 'Community',
          },
          {
            'Model': 'Qwen3.5 2B',
            'Parameters': '2B',
            'VRAM (Q4)': '2.7–3.1 GB',
            'Image Types': 'Photos, docs, OCR',
            'Quality': 'Good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'PaliGemma 2 3B',
            'Parameters': '3B',
            'VRAM (Q4)': '~3 GB',
            'Image Types': 'Photos, docs',
            'Quality': 'Good',
            'Via Ollama?': 'Community',
          },
          {
            'Model': 'Gemma 4 E2B',
            'Parameters': '2.3B eff.',
            'VRAM (Q4)': '4.6–7.5 GB',
            'Image Types': 'Photos, docs, audio',
            'Quality': 'Good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'LLaVA 1.6 7B',
            'Parameters': '7B',
            'VRAM (Q4)': '~6 GB',
            'Image Types': 'Photos, docs, charts',
            'Quality': 'Good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'MiniCPM-V',
            'Parameters': '8B',
            'VRAM (Q4)': '~6 GB (5.5 GB pull)',
            'Image Types': 'Photos, docs, OCR',
            'Quality': 'Very good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Qwen3-VL 8B',
            'Parameters': '8B',
            'VRAM (Q4)': '~6.1 GB',
            'Image Types': 'Photos, docs, OCR, multilingual',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Qwen3.5 9B',
            'Parameters': '9B',
            'VRAM (Q4)': '6.6–7.6 GB',
            'Image Types': 'Photos, docs, OCR, multilingual',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Gemma 4 E4B',
            'Parameters': '4.5B eff.',
            'VRAM (Q4)': '6.6–9.5 GB',
            'Image Types': 'Photos, docs, audio',
            'Quality': 'Very good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Gemma 4 12B',
            'Parameters': '12B',
            'VRAM (Q4)': '7.7–8.0 GB',
            'Image Types': 'Photos, docs, audio',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'InternVL 2.5 8B',
            'Parameters': '8B',
            'VRAM (Q4)': '~8 GB',
            'Image Types': 'Docs, charts, UI, code',
            'Quality': 'Excellent (UI/charts)',
            'Via Ollama?': 'Community',
          },
          {
            'Model': 'Llama 3.2 Vision 11B',
            'Parameters': '11B',
            'VRAM (Q4)': '~8 GB (7.8 GB pull)',
            'Image Types': 'Photos, docs',
            'Quality': 'Excellent*',
            'Via Ollama?': 'Yes*',
          },
          {
            'Model': 'LLaVA 1.6 13B',
            'Parameters': '13B',
            'VRAM (Q4)': '~10 GB',
            'Image Types': 'Photos, docs, charts',
            'Quality': 'Very good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Gemma 4 26B A4B',
            'Parameters': '26B (4B active)',
            'VRAM (Q4)': '16–19 GB',
            'Image Types': 'Photos, docs, complex',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Qwen3.8 27B',
            'Parameters': '27B',
            'VRAM (Q4)': '18 GB',
            'Image Types': 'Photos, docs, video, OCR',
            'Quality': 'Best (open-source)',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Gemma 4 31B',
            'Parameters': '31B',
            'VRAM (Q4)': '19–20 GB',
            'Image Types': 'Photos, docs, complex',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Qwen3-VL 32B',
            'Parameters': '32B',
            'VRAM (Q4)': '21 GB',
            'Image Types': 'Photos, docs, OCR, complex',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Llama 3.2 Vision 90B',
            'Parameters': '90B',
            'VRAM (Q4)': '55 GB',
            'Image Types': 'Photos, docs, complex',
            'Quality': 'Very good*',
            'Via Ollama?': 'Yes*',
          },
          {
            'Model': 'Qwen3.5 122B',
            'Parameters': '122B',
            'VRAM (Q4)': '81 GB',
            'Image Types': 'Photos, docs, complex',
            'Quality': 'Best local',
            'Via Ollama?': 'Yes',
          },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-en.svg',
        imageCaption:
          'Local vision model comparison by VRAM and OCR quality: Moondream 2 runs in 2 GB, Qwen3-VL 8B leads document OCR at 6 GB, and Gemma 4 delivers the best general quality from 8 GB (E4B) to 24 GB (26B and 31B) via Ollama.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: 'Real-World Accuracy Test: Invoice Extraction',
        content:
          'Comparison of local vision model accuracy on a structured document extraction task. Test: extract 5 fields (vendor name, date, total, tax amount, line item count) from the same sample invoice.',
        columns: ['Model', 'Vendor', 'Date', 'Total', 'Tax', 'Line Items', 'Score'],
        rows: [
          { 'Model': 'Moondream 2', 'Vendor': '✓', 'Date': '✓', 'Total': '✗', 'Tax': '✗', 'Line Items': '✗', 'Score': '2/5' },
          { 'Model': 'LLaVA 1.6 7B', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✗', 'Line Items': '✓', 'Score': '4/5' },
          { 'Model': 'MiniCPM-V 4.5', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
          { 'Model': 'Qwen3-VL 8B', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
          { 'Model': 'Llama 3.2 11B', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
          { 'Model': 'GPT-5.5 Vision', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Results from a single test invoice. Your accuracy will vary with document quality, font, and layout complexity. Always verify extracted numbers against source documents.',
          },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'Multi-Image Support',
        content:
          'Not all local vision models accept multiple images in a single request. Multi-image support matters for document processing (send all pages of a multi-page PDF) and visual comparison tasks (compare two product photos).',
        columns: ['Feature', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Feature': 'Multi-image input',
            'Moondream': 'No',
            'LLaVA 7B': 'No',
            'MiniCPM-V': 'Yes (up to 4)',
            'Qwen3-VL': 'Yes (up to 8)',
            'LLaVA 13B': 'No',
            'Llama 3.2 Vision': 'Yes (multi-page)',
            'InternVL': 'Yes',
          },
        ],
        items: [
          'MiniCPM-V accepts up to 4 images per prompt; Qwen3-VL handles up to 8. LLaVA and Moondream accept only single images per request.',
          '**When multi-image matters:** Send all pages of a multi-page PDF for full-document extraction. Compare two product photos side by side. Analyze before/after screenshots in a single prompt.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup via Ollama — Step by Step',
        content:
          'Ollama is the easiest way to run local vision models. Once Ollama is installed, vision models work with a single pull command and accept images via CLI flag or HTTP API.',
        items: [
          '**Step 1 — Install Ollama:** Download from ollama.com for macOS, Linux, or Windows. Installation takes under 2 minutes.',
          '**Step 2 — Pull a vision model:** `ollama pull gemma4:e4b` (6.6–9.5 GB download) for 8 GB cards, `ollama pull qwen3-vl:8b` (6.1 GB) for OCR, or `ollama pull moondream` (1.8B, 1.7 GB) for low-VRAM setups.',
          '**Step 3 — Transcribe from CLI:** `ollama run gemma4:e4b "What is in this image? /path/to/photo.jpg"` — put the image path inside the prompt; `ollama run` has no `--image` flag.',
          '**Step 4 — Use the HTTP API:** POST to `http://localhost:11434/api/generate` with the image as a base64-encoded string in the `images` array. Add a JSON schema in the `format` field to get structured output.',
          '**Step 5 — Python example:** Use the `requests` library with base64 encoding — see code block below.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# Example usage
result = ask_vision_model("invoice.png", "Extract all line items and totals from this invoice.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-en.svg',
        imageCaption:
          'Ollama vision model setup pipeline: install Ollama, pull a vision model such as gemma4:e4b, run it via the CLI with the image path in the prompt or POST to the HTTP API at localhost:11434, and receive text output for OCR, Q&A, or image description.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Use Case 1: Document OCR and Extraction',
        content:
          '**VLMs outperform traditional OCR for semi-structured documents** — invoices, receipts, contracts, and tables where layout matters as much as the text itself. Traditional OCR (Tesseract) extracts characters; VLMs understand what those characters mean in context.',
        items: [
          '**What works well:** Scanned invoices, PDF screenshots, handwritten notes (printed, not cursive), tables with clear borders, business cards.',
          '**What works less well:** Handwritten cursive text, low-DPI scans (< 150 DPI), heavily compressed JPEGs, overlapping text.',
          '**Best models for OCR:** Qwen3-VL 8B and Qwen3.5 9B (6–8 GB class), Qwen3.8 27B (18 GB, 91.1 on OmniDocBench 1.5 per its model card), Gemma 4 for mixed document types.',
          '**Prompt engineering for OCR:** "Extract all text from this document exactly as written, preserving line breaks." Or: "Return the contents of this invoice as JSON with fields: vendor, date, line_items[], total."',
          '**Vs. traditional OCR:** VLMs are slower but more semantic. Tesseract is faster for pure text extraction from clean documents. Use VLMs when you need structured data extraction, not just raw text.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Use Case 2: Image Q&A and Description',
        content:
          '**For general scene understanding, product descriptions, and visual Q&A, Gemma 4 (E4B at 8 GB, 26B or 31B at 24 GB) is the recommended local model.** It produces natural, detailed descriptions and handles nuanced questions about photo content.',
        items: [
          '**Scene description:** "What is in this photo?" — objects, people, activities, setting, mood.',
          '**Product cataloguing:** Feed product photos with a prompt template like "Describe this product: color, shape, material, condition." Useful for e-commerce inventory without cloud APIs.',
          '**Accessibility:** Generate alt text for images at scale. Accurate enough for accessibility compliance on standard product photos.',
          '**Best models:** Gemma 4 12B or 26B A4B for general photo Q&A. Qwen3.5 4B or LLaVA 1.6 7B for volume processing where speed matters more than accuracy.',
          '**Speed consideration:** Speed depends on model, GPU and description length — benchmark a 20-image sample on your own hardware before committing to a batch of thousands.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'Use Case 3: Screenshot and UI Analysis',
        content:
          '**For analyzing application screenshots, error messages, and dashboards, InternVL 2.5 is the strongest local model** — its training data emphasized software UI, GitHub screenshots, and code execution outputs.',
        items: [
          '**Developer workflows:** Pipe screenshots of error messages to the model: "What is wrong in this screenshot and how would you fix it?"',
          '**Bug report generation:** Automatically generate bug report descriptions from screenshots with a structured prompt.',
          '**Dashboard monitoring:** Analyze screenshots of monitoring dashboards for anomalies — "Are there any warning-level metrics in this Grafana screenshot?"',
          '**Accessibility testing:** Compare screenshots before and after UI changes to verify visual accessibility properties.',
          '**Best models:** InternVL 2.5 8B (community build, strong on UI), Gemma 4 and Qwen3-VL (official Ollama support, tool calling for agent workflows).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'Use Case 4: Chart and Graph Reading',
        content:
          '**Extracting data from bar charts, line graphs, and tables is achievable but requires careful prompting.** All local VLMs are weaker on chart reading than on photo description — always verify numbers extracted from charts against the source data.',
        items: [
          '**What works:** Reading axis labels, identifying trends, comparing relative bar heights, reading table values in clear fonts.',
          '**What is unreliable:** Precise numeric extraction from continuous charts (e.g., "the Q3 bar is 43.7 units"), pie chart percentages without explicit labels.',
          '**Prompt strategy:** "Describe the trend shown in this line chart" works better than "What is the exact value at March 2026?"',
          '**Best models for charts:** InternVL 2.5 (strong chart understanding), Gemma 4 and Qwen3-VL (good on clearly labeled charts).',
          '**Limitation note:** No local VLM in 2026 reliably extracts precise numbers from visually complex charts. For structured chart data, extract via the underlying data source if possible.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'Use Case 5: Video Frame Analysis',
        content:
          '**Local vision models can analyze video by processing individual frames** — extract frames using ffmpeg, feed each to the vision model, then chain with a text LLM to summarize across frames. Not real-time: expect 1 frame per 0.5–3 seconds depending on model and hardware.',
        items: [
          '**Frame extraction:** Use ffmpeg to extract at 1fps: `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**Per-frame analysis:** Run each frame through the vision model with a consistent prompt (e.g., "Describe what is happening in this frame in one sentence").',
          '**Cross-frame summarization:** Collect all frame descriptions and pass them to a text LLM with a summarization prompt.',
          '**Use cases:** Security camera review (flag frames with unusual activity), lecture recording analysis (generate slide-by-slide notes), manufacturing quality inspection (flag frames where defects appear).',
          '**Best models for video frames:** Gemma 4 or Qwen3.8 for quality (both accept video as frames natively), Qwen3.5 4B or LLaVA 1.6 7B for speed (higher frame throughput).',
          '**Speed reality:** At 1 frame/second extraction and ~1–3 seconds per frame, a 10-minute video (600 frames) takes roughly 10–30 minutes to process, depending on model and GPU.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("lecture.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM and Performance Reality Check',
        content:
          'Local vision models add a vision encoder on top of the base LLM, which increases both VRAM requirements and inference time compared to text-only models.',
        columns: ['Model', 'VRAM (Q4)', 'Tokens/sec (RTX 4070)', 'Tokens/sec (M5 Pro 36GB)', 'Practical for production?'],
        rows: [
          {
            'Model': 'Moondream 2 (1.8B)',
            'VRAM (Q4)': '~2 GB',
            'Tokens/sec (RTX 4070)': '~25–35',
            'Tokens/sec (M5 Pro 36GB)': '~30–40',
            'Practical for production?': 'Yes — for simple tasks',
          },
          {
            'Model': 'LLaVA 1.6 7B',
            'VRAM (Q4)': '~6 GB',
            'Tokens/sec (RTX 4070)': '~15–20',
            'Tokens/sec (M5 Pro 36GB)': '~18–25',
            'Practical for production?': 'Yes — general purpose',
          },
          {
            'Model': 'MiniCPM-V (8B)',
            'VRAM (Q4)': '~6 GB',
            'Tokens/sec (RTX 4070)': '~12–18',
            'Tokens/sec (M5 Pro 36GB)': '~15–20',
            'Practical for production?': 'Yes — OCR and docs',
          },
          {
            'Model': 'Llama 3.2 Vision 11B',
            'VRAM (Q4)': '~8 GB',
            'Tokens/sec (RTX 4070)': '~10–14',
            'Tokens/sec (M5 Pro 36GB)': '~12–16',
            'Practical for production?': 'Check Ollama load issue first',
          },
          {
            'Model': 'LLaVA 1.6 13B',
            'VRAM (Q4)': '~10 GB',
            'Tokens/sec (RTX 4070)': '~8–12',
            'Tokens/sec (M5 Pro 36GB)': '~10–14',
            'Practical for production?': 'Yes — with 12 GB GPU',
          },
          {
            'Model': 'Llama 3.2 Vision 90B',
            'VRAM (Q4)': '~64 GB',
            'Tokens/sec (RTX 4070)': 'N/A (needs multi-GPU or M-Max)',
            'Tokens/sec (M5 Pro 36GB)': 'N/A (needs M5 Max 128GB+)',
            'Practical for production?': 'High-end Apple Silicon only',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'The tokens-per-second ranges are indicative estimates, not new measurements; they were not re-run for Gemma 4, Qwen3.5 or Qwen3.8. Benchmark on your own hardware with `ollama run <model> --verbose`, which prints the eval rate.',
          },
          {
            type: 'note',
            text: 'Token generation speed for vision models is slower than for text-only models of the same size because the vision encoder adds significant computational overhead on the first image token. Subsequent text tokens generate at near-normal speed.',
          },
          {
            type: 'note',
            text: 'Apple Silicon unified memory enables running larger models (Llama 3.2 Vision 90B at 55 GB or Qwen3.5 122B at 81 GB on a 128 GB Mac) that won\'t fit in discrete GPU VRAM. Speed is slightly slower than equivalent NVIDIA GPU but no VRAM limitation.',
          },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'How Local Vision Models Compare to GPT-5.5 Vision',
        content:
          'Local VLMs have closed the gap significantly on structured documents but remain behind GPT-5.5 Vision on complex and ambiguous tasks.',
        items: [
          '**Structured documents (invoices, forms):** Local models at 80–90% of GPT-5.5 quality — good enough for production use on clean, well-formatted documents.',
          '**Complex scenes, ambiguous imagery:** Local models at 50–70% of GPT-5.5 — noticeable quality gap on images with unusual context, lighting, or ambiguous content.',
          '**Handwriting recognition:** Local models significantly weaker, especially on cursive. GPT-5.5 Vision handles handwriting substantially better.',
          '**Chart data extraction:** Unreliable on both local models and GPT-5.5, but GPT-5.5 is more accurate on precise numeric values.',
          '**Cost:** GPT-5.5 Vision at $0.01–0.03 per image vs $0 for local. 10,000 images/month = $100–300 saved with local models.',
          '**Privacy:** Local models process images on-device by default, so images are not sent to a cloud API unless you enable cloud features or connected tools. GPT-5.5 sends images to OpenAI servers.',
          '**Speed:** Local models at 10–20 tok/sec vs GPT-5.5 at 30–80 tok/sec, but local has no network latency for batch processing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'For production invoice and form processing with clean input, local VLMs (Gemma 4, Qwen3-VL 8B, Qwen3.8 27B) can replace GPT-5.5 Vision at zero cost. For anything involving handwriting, complex scene analysis, or ambiguous content, GPT-5.5 still leads.',
          },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'LLaVA Deep Dive',
        content:
          '**LLaVA (Large Language and Vision Assistant) is the foundational open-source VLM architecture.** Released by the University of Wisconsin-Madison and Microsoft Research in 2023, it established the CLIP encoder + LLM decoder pattern that most modern local VLMs follow.',
        items: [
          '**Architecture:** CLIP ViT-L/14 vision encoder + Llama-2 or Mistral text decoder, connected by a simple linear projection layer.',
          '**LLaVA 1.5 vs 1.6:** Version 1.6 (released early 2024) added support for higher-resolution input via dynamic patching, significantly improving OCR and chart reading accuracy.',
          '**Training:** Instruction-tuned on LLaVA-Instruct-150K — a dataset of visual conversations generated from image captions and object detection annotations.',
          '**Strengths:** Broad general knowledge, well-documented, large community, extensive Ollama integration.',
          '**Weaknesses:** Weaker OCR than Qwen3-VL and MiniCPM-V, weaker UI analysis than InternVL 2.5, outperformed overall by Gemma 4 and the Qwen3 family.',
          '**Why still recommended:** LLaVA 1.6 has the largest community, the most tutorials, and the most example prompts of any local VLM. If you run into problems, help is easier to find.',
          '**Full review:** [LLaVA Review (2026)](/power-local-llm/llava-review) — PromptQuorum\'s dedicated review, including its Apache-2.0-plus-base-model license nuance and real Ollama commands.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL, Qwen3.5 and Qwen3.8 — Best Multilingual and OCR Performance',
        content:
          '**The Qwen family is the strongest open option for document OCR and multilingual text in 2026.** Qwen3-VL (sizes 2B to 235B) is the dedicated vision line, Qwen3.5 (0.8B to 122B) folds vision into the base model, and Qwen3.8 27B (August 2026, Apache 2.0) is the newest, with a reported 91.1 on OmniDocBench 1.5.',
        items: [
          '**Architecture:** Dynamic resolution support up to 4096×4096 — significantly higher than LLaVA 1.6 (672×672) or Llama 3.2 Vision (1120×1120). This enables reading high-DPI scans without downsampling.',
          '**Multilingual OCR:** Best-in-class for Chinese, Japanese, Korean, and English OCR. Training data included large-scale multilingual document corpora — a significant advantage over LLaVA and Llama 3.2 Vision for non-English documents.',
          '**Which size:** Qwen3-VL 8B is a 6.1 GB download and suits 8 GB cards; Qwen3.5 9B is 6.6–7.6 GB; Qwen3.8 27B is 18 GB and needs a 24 GB card; Qwen3-VL 32B is 21 GB. Qwen3-VL has no 72B variant on Ollama.',
          '**Ollama install:** `ollama pull qwen3-vl:8b`, `ollama pull qwen3.5:9b` or `ollama pull qwen3.8` — all in the Ollama model library.',
          '**Multi-image support:** Accepts up to 8 images per request — highest multi-image capacity of any model in this comparison.',
          '**Model pages:** [Qwen3-VL on Ollama](https://ollama.com/library/qwen3-vl), [Qwen3.8-27B on Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'How to Choose Your Vision Model',
        content:
          'A VRAM-first decision tree for selecting the right local vision model:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pick your model by VRAM first (2→4→8→24 GB), then refine by use case (OCR, UI, general Q&A, or maximum quality).',
          },
          {
            type: 'plain-terms',
            text: 'Under 4 GB: Qwen3.5 2B or Moondream. 8 GB: Gemma 4 E4B for photos, Qwen3-VL 8B for documents. 24 GB: Gemma 4 26B/31B or Qwen3.8 27B. 64+ GB: Qwen3.5 122B.',
          },
        ],
        items: [
          '**Under 4 GB VRAM:** Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) or Moondream 2 (1.7 GB) are the practical options. PaliGemma 2 (3B) and SmolVLM (2.2B) are community-build alternatives. None are suitable for dense text OCR.',
          '**6–8 GB VRAM:** Gemma 4 E4B for general photo Q&A, Qwen3-VL 8B or Qwen3.5 9B for document OCR and multilingual text, LLaVA 1.6 7B where community support matters.',
          '**12–16 GB VRAM:** Gemma 4 12B (7.7–8.0 GB download) is the clear recommendation — strong vision scores for its size, with audio input and a 256K context window. LLaVA 1.6 13B and InternVL 2.5 8B (UI and code screenshots) also fit.',
          '**24 GB VRAM:** Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) or Qwen3-VL 32B (21 GB) — the closest local option to cloud-tier vision quality.',
          '**64+ GB unified memory (Apple M-Max/Ultra, multi-GPU):** Qwen3.5 122B (81 GB) or Llama 3.2 Vision 90B (55 GB) for the largest local models; both need high-memory hardware and are slower per token than the 24 GB-class models.',
          '**Always verify numbers:** Regardless of model, cross-check any numeric values extracted from charts or tables against the source data. Local VLMs hallucinate precise numbers from visual charts.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Frequently Asked Questions',
        faqs: [
          {
            q: 'Why does llama3.2-vision fail with "unknown model architecture: mllama"?',
            a: 'Users report this error with llama3.2-vision on recent Ollama versions (GitHub issues #16490 and #16547, opened mid-2026; the second was closed as a duplicate with no confirmed fix). Updating Ollama or re-pulling the model did not help in those reports. Switch to Gemma 4 or Qwen3-VL, which are actively maintained in the Ollama library, unless you must stay on Llama 3.2 Vision — in that case pin an Ollama version where it still loads.',
          },
          {
            q: 'What is the best small vision-language model under 3B parameters?',
            a: 'Qwen3.5 2B (2.7–3.1 GB download) and Qwen3-VL 2B (1.9 GB) are the strongest small options on Ollama; Moondream 2 (1.8B, 1.7 GB) is the lightest. Gemma 4 E2B (2.3B effective parameters, 4.6–7.5 GB download) adds audio input. Expect weaker OCR and complex-scene understanding than the 8B class.',
          },
          {
            q: 'Which local models can handle live camera and microphone input?',
            a: 'Gemma 4 E2B, E4B and 12B accept both images and audio, which makes them the natural base for a local assistant that sees and hears. The model alone is not a live system: you still need a capture loop (grab frames, chunk audio), a speech-to-text or audio-input path, and a text-to-speech step for spoken replies. Confirm that your runtime version actually passes audio to the model before building on it.',
          },
          {
            q: 'How do I get reliable structured output from screenshots and documents?',
            a: 'Pass a JSON schema in Ollama\'s `format` field, set temperature to 0, and ask only for fields visible in the image. This constrains the reply to valid JSON with your keys; it does not make the values correct, so validate numbers and dates against the source and log failures. Larger models (8B and up) follow schemas more consistently than 2B models.',
          },
          {
            q: 'What are the best GPT-4V alternatives that run fully on-device?',
            a: 'Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) and Qwen3-VL 32B (21 GB) are the closest on a 24 GB GPU; Gemma 4 E4B and Qwen3-VL 8B cover 8 GB machines. All can run without an internet connection through Ollama. They match cloud models on clean documents and photos but trail on handwriting, ambiguous scenes and complex infographics.',
          },
          {
            q: 'Can I use LLaVA or Llama 3.2 Vision without Ollama?',
            a: 'Yes. You can run LLaVA and Llama 3.2 Vision directly using llama.cpp (with vision support), the transformers library (with the appropriate model card), or LM Studio (which has a GUI for vision models). Ollama is recommended for simplicity — it handles model download, quantization selection, and API hosting automatically.',
          },
          {
            q: 'Does Llama 3.2 Vision support PDF input directly?',
            a: 'No local VLM accepts PDF input directly. You must first convert PDF pages to images (using pdf2image, pypdfium2, or similar) and then send each page as a separate image request. For a 10-page PDF, you send 10 separate image queries and concatenate or summarize the results.',
          },
          {
            q: 'How do local vision models compare to GPT-5.5 Vision?',
            a: 'GPT-5.5 Vision is still meaningfully better on ambiguous scenes, handwriting, complex infographics, and tasks requiring world knowledge. Gemma 4 and Qwen3-VL approach GPT-5.5 on structured documents (invoices, forms, clear photos) but fall behind on nuanced or ambiguous imagery. See the full comparison above for cost, privacy, and speed breakdown.',
          },
          {
            q: 'What image resolution do local VLMs support?',
            a: 'LLaVA 1.6 supports up to 672×672 effective resolution (with dynamic patching). MiniCPM-V supports up to 1792×1792 — one reason it outperforms LLaVA on high-DPI document scans. Llama 3.2 Vision supports up to 1120×1120. Gemma 4 and Qwen3-VL accept variable aspect ratios and resolutions. For best OCR results, send document images at 150+ DPI.',
          },
          {
            q: 'Can I fine-tune a local vision model on my own images?',
            a: 'Yes, but fine-tuning VLMs is more resource-intensive than fine-tuning text-only LLMs — you need to process both image and text training pairs through the full forward pass. LLaVA fine-tuning is well-documented using the original training codebase. MiniCPM-V supports fine-tuning via its official training scripts on Hugging Face. For most use cases, prompt engineering alone is sufficient without fine-tuning.',
          },
          {
            q: 'What is the best local vision model for 8 GB VRAM?',
            a: 'Gemma 4 E4B (6.6–9.5 GB download) for general use, or Qwen3-VL 8B (6.1 GB) if document OCR or multilingual text is the primary need. Both are available via Ollama with a single pull command. Qwen3.5 9B (6.6–7.6 GB) is a third option.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — which is better for OCR?',
            a: 'MiniCPM-V is more accurate on document OCR than LLaVA, especially on dense tables and high-DPI scans, but Qwen3-VL 8B is a stronger OCR choice than either. LLaVA 1.6 is better documented and has more community support. Note that Ollama\'s minicpm-v page still describes MiniCPM-V 2.6 (5.5 GB); newer MiniCPM-V releases need a Hugging Face or llama.cpp build.',
          },
          {
            q: 'Can local vision models read handwriting?',
            a: 'Printed handwriting (block letters): yes, with moderate accuracy on Gemma 4, Qwen3-VL and MiniCPM-V. Cursive handwriting: unreliable on all local models. GPT-5.5 Vision is significantly better at cursive. For production handwriting OCR on cursive documents, cloud APIs are still recommended.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Gemma 4 model card on Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — Google\'s Apache 2.0 license, supported modalities per size, and MMMU Pro results.',
          '[Gemma 4 on Ollama](https://ollama.com/library/gemma4) — tags, download sizes and context windows.',
          '[Qwen3.8-27B on Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0 license, 262K context, OmniDocBench 1.5 result.',
          '[Qwen3.5 on Ollama](https://ollama.com/library/qwen3.5) and [Qwen3-VL on Ollama](https://ollama.com/library/qwen3-vl) — sizes and download sizes.',
          '[Llama 3.2 Vision on Ollama](https://ollama.com/library/llama3.2-vision) and [Ollama issue #16547](https://github.com/ollama/ollama/issues/16547) — listing and the reported mllama load error.',
          '[LLaVA project page](https://llava-vl.github.io) — LLaVA 1.5 and 1.6 model cards, architecture details, and training dataset description.',
          '[MiniCPM-V on Ollama](https://ollama.com/library/minicpm-v) and [OpenBMB on Hugging Face](https://huggingface.co/openbmb) — model cards and OCR benchmarks.',
          '[Moondream on Ollama](https://ollama.com/library/moondream) and [Moondream on GitHub](https://github.com/vikhyat/moondream) — model download and inference scripts.',
          '[InternVL 2.5 on Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab model card, benchmark scores on document and UI tasks.',
          '[Ollama documentation](https://ollama.com) — Vision model support, structured outputs, API reference, and model library.',
          '[PaliGemma 2 on Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Google\'s PaliGemma 2 3B model card.',
          '[SmolVLM on Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace\'s SmolVLM model card and inference instructions.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Which Ollama Models Support Vision?](/prompt-bites/which-ollama-models-support-vision) — quick answer on which Ollama library models accept images, with VRAM specs.',
          '[Ollama Vision Models (2026)](/power-local-llm/ollama-vision-models-review) — a focused, practical guide to running vision models specifically through Ollama: real CLI/API syntax and which models are actually in its library.',
          '[VLMs in Cameras and on Drones 2026](/power-local-llm/vlm-video-analytics-drones-edge) -- Desktop VLM basics are covered here; for embedded camera and drone deployment, see this edge-focused guide.',
          '[Local Multimodal AI Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combine vision models with STT and TTS into a full local multimodal stack.',
          '[Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison) — Add voice input to complement vision output.',
          '[Local TTS and Voice Cloning 2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Add voice output to read VLM responses aloud.',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — Prerequisite: Ollama setup and configuration.',
          '[Local LLM Hardware Guide](/local-llms/local-llm-hardware-guide) — VRAM and RAM requirements for vision model inference.',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-de.webp',
    title: 'Beste lokale Vision-Modelle 2026: Gemma 4, Qwen3-VL, LLaVA & Ollama Multimodal-Setup',
    seoTitle: 'Beste lokale Vision-Modelle 2026: Gemma 4, Qwen3-VL & Ollama',
    intro:
      'Vision-Language-Modelle (VLMs) verarbeiten Bild- und Texteingaben gemeinsam und erzeugen Textausgaben – für Dokument-OCR, Bild-Q&A, Screenshot-Analyse und Diagramminterpretation, vollständig lokal. Im Jahr 2026 ist Ollama der einfachste Weg, VLMs auszuführen: Modell herunterladen, Bild senden, Beschreibung oder Antwort erhalten. Dieser Leitfaden vergleicht die führenden lokalen Vision-Modelle (Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, MiniCPM-V, LLaVA 1.6, Llama 3.2 Vision, Moondream 2, InternVL 2.5), erläutert das Ollama-Setup Schritt für Schritt und ordnet jedes Modell nach VRAM-Bedarf seinem besten Anwendungsfall zu. Die Download-Größen stammen aus der Ollama-Modellbibliothek, die Qualitätswerte aus den Modell-Cards der Hersteller (geprüft am 19. Oktober 2026).',
    metaDescription:
      'Beste lokale VLMs für Ollama 2026: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. VRAM je Modell, OCR-Empfehlungen und Setup-Schritte.',
    twitterDescription:
      'Beste lokale Vision-Modelle 2026: Gemma 4, Qwen3-VL, MiniCPM-V, LLaVA via Ollama. Bild-Q&A, OCR, Screenshot-Analyse offline. VRAM-Leitfaden und Setup.',
    readTime: '11 Min. Lesezeit',
    leadAnswerBlock:
      '**Für die meisten Nutzer ist Gemma 4 (Apache 2.0) über Ollama 2026 das beste lokale Vision-Modell: gemma4:e4b passt auf 8-GB-Karten, gemma4:26b oder 31b eignen sich für 24 GB.** Googles Modell-Card nennt MMMU-Pro-Werte von 52,6 % (E4B), 69,1 % (12B), 73,8 % (26B A4B) und 76,9 % (31B), gegenüber 49,7 % beim Vorgänger Gemma 3 27B. Für Dokument-OCR und mehrsprachigen Text sind Qwen3-VL 8B (6,1 GB Download), Qwen3.5 9B und das neuere Qwen3.8 27B (18 GB) die stärksten Optionen. Llama 3.2 Vision, früher die Standardempfehlung, lädt laut Nutzerberichten unter aktuellen Ollama-Versionen nicht („unknown model architecture: mllama"), ist daher nicht mehr die erste Wahl. Unter 3 GB eignen sich Qwen3.5 2B, Qwen3-VL 2B oder Moondream 2. Nach dem Download können alle Modelle ohne Internetverbindung laufen.',
    quickAnswerTop: {
      de: {
        question: 'Welche lokalen Vision-Modelle laufen am besten mit Ollama im Jahr 2026?',
        answer:
          'Das beste lokale Vision-Modell für Ollama ist 2026 **Gemma 4** (`ollama pull gemma4`) für allgemeines Bildverständnis. Für Dokument-OCR und mehrsprachigen Text eignen sich **Qwen3-VL**, **Qwen3.5** oder **Qwen3.8**, auf Hardware unter 4 GB **Moondream 2** oder **Qwen3.5 2B**.',
        bullets: [
          'Unter 4 GB VRAM → Qwen3.5 2B (2,7–3,1 GB), Qwen3-VL 2B (1,9 GB) oder Moondream 2 (1,7 GB): schnell, aber begrenzt bei komplexen Bildern und dichtem Text.',
          '6–8 GB VRAM → Gemma 4 E4B (6,6–9,5 GB Download), Qwen3-VL 8B (6,1 GB) oder Qwen3.5 9B (6,6–7,6 GB): beste Balance aus Qualität und Hardware-Bedarf.',
          '16–24 GB VRAM → Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) oder Qwen3-VL 32B (21 GB): Qualität nahe an Cloud-Modellen bei Dokumenten und Fotos.',
          'Apple M-Series oder 64+ GB → Qwen3.5 122B (81 GB) oder Llama 3.2 Vision 90B (55 GB); Qwen3-VL 235B braucht 143 GB.',
          'Setup: `ollama pull gemma4:e4b`, dann `ollama run gemma4:e4b "Beschreibe dieses Bild: ./foto.jpg"` (Bildpfad im Prompt angeben).',
          'Beste OCR-Leistung: Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — am stärksten bei der Textextraktion aus Dokumenten.',
          'Beste UI/Screenshot-Analyse: InternVL 2.5 (Community-GGUF) oder Gemma 4, wenn zusätzlich Tool Calling gebraucht wird.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Zusammenfassung', anchor: '#key-takeaways' },
      { label: 'Schnellübersicht', anchor: '#quick-facts' },
      { label: 'Was sind Vision-Language-Modelle?', anchor: '#what-are-vlms' },
      { label: 'Modellvergleichstabelle', anchor: '#model-comparison' },
      { label: 'Praxistest: Rechnungsextraktion', anchor: '#invoice-accuracy-test' },
      { label: 'Multi-Bild-Unterstützung', anchor: '#multi-image-support' },
      { label: 'Setup mit Ollama (Schritt für Schritt)', anchor: '#ollama-setup' },
      { label: 'Anwendungsfall 1: Dokument-OCR und -Extraktion', anchor: '#use-case-ocr' },
      { label: 'Anwendungsfall 2: Bild-Q&A und -Beschreibung', anchor: '#use-case-qa' },
      { label: 'Anwendungsfall 3: Screenshot- und UI-Analyse', anchor: '#use-case-screenshot' },
      { label: 'Anwendungsfall 4: Diagramm- und Grafikanalyse', anchor: '#use-case-chart' },
      { label: 'Anwendungsfall 5: Video-Frame-Analyse', anchor: '#use-case-video' },
      { label: 'VRAM und Leistungs-Realitätscheck', anchor: '#vram-reality' },
      { label: 'Lokale Vision-Modelle vs. GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA im Detail', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL — Beste multilinguale OCR-Leistung', anchor: '#qwen-vl-deep-dive' },
      { label: 'Auswahl des richtigen Vision-Modells', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Quellen', anchor: '#sources' },
      { label: 'Weiterführende Artikel', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 ist 2026 das beste lokale Vision-Modell für die meisten Entwickler.** Es steht unter Apache 2.0, ist über Ollama in fünf Größen verfügbar (E2B, E4B, 12B, 26B A4B, 31B), und laut Modell-Card erreicht es MMMU Pro von 52,6 % (E4B) bis 76,9 % (31B) gegenüber 49,7 % bei Gemma 3 27B.',
          '**Qwen3-VL 8B, Qwen3.5 9B und Qwen3.8 27B führen bei Dokument-OCR und mehrsprachigem Text.** Qwen3-VL 8B benötigt einen Download von 6,1 GB; Qwen3.8 27B (Apache 2.0, 18 GB) erreicht laut Angabe 91,1 bei OmniDocBench 1.5.',
          '**Llama 3.2 Vision ist nicht mehr die sichere Standardwahl.** Nutzer melden „unknown model architecture: mllama" unter aktuellen Ollama-Versionen (GitHub-Issues #16490 und #16547, keine bestätigte Lösung), und der Ollama-Eintrag wurde seit etwa einem Jahr nicht aktualisiert.',
          '**Unter 4 GB: Qwen3.5 2B, Qwen3-VL 2B oder Moondream 2.** Alle drei sind klein und schnell, überfordert aber von komplexen Szenen, dichtem Text und präzisen Diagrammwerten.',
          '**LLaVA 1.6 gehört zu den am besten dokumentierten und gemeinschaftsgetesteten lokalen VLMs.** Eine praktische Wahl, wenn Tutorials und Hilfe bei der Fehlersuche wichtig sind – neuere Modelle schlagen es aber bei OCR und Qualität.',
          '**Den `format`-Parameter von Ollama für strukturierte Ausgaben nutzen.** Ein JSON-Schema beschränkt die Antwort auf Ihre Felder, sodass sie sauber geparst werden kann; jeden Wert dennoch gegen die Quelle prüfen.',
          '**Kein lokales Modell erreicht GPT-5.5 Vision in allen Bereichen.** Lokale VLMs 2026 sind eine starke Tier-2-Option – ausgezeichnet für strukturierte Dokumente und klare Fotos, schwächer bei mehrdeutigen Szenen, Handschrift und komplexen Infografiken.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellübersicht',
        items: [
          '**Was VLMs leisten:** Bild- + Texteingabe → Textausgabe. Keine Bildgeneratoren – diese Modelle *verstehen* Bilder.',
          '**Ollama-Unterstützung:** Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, Llama 3.2 Vision, MiniCPM-V, LLaVA und Moondream sind in der offiziellen Ollama-Bibliothek; InternVL, PaliGemma 2 und SmolVLM benötigen Community-Builds.',
          '**Kleinste nutzbare Modelle:** Moondream 2 (1,8B, 1,7 GB Download), Qwen3-VL 2B (1,9 GB) und Qwen3.5 0.8B (1,2–1,3 GB).',
          '**Größte praktische lokale Modelle:** Qwen3.5 122B (81 GB) und Llama 3.2 Vision 90B (55 GB) mit 64 GB+ Unified Memory (Apple M-Series oder Multi-GPU); Qwen3-VL 235B braucht 143 GB.',
          '**Bild-Eingabeformat:** JPEG, PNG, WebP. Maximale Auflösung variiert je Modell (typisch 1024×1024 bis 4096×4096).',
          '**Audio und Video:** Gemma 4 E2B, E4B und 12B akzeptieren auch Audio; alle Gemma-4-Größen und Qwen3.8 verarbeiten Video als Einzelbilder.',
          '**OCR-Stärke:** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**Multimodal ist langsamer:** Vision-Modelle fügen einen Vision-Encoder zum LLM hinzu – ~30–60 % langsamere Token-Generierung als ein reines Textmodell gleicher Parameterzahl.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: 'Was sind Vision-Language-Modelle (VLMs)?',
        content:
          'Ein Vision-Language-Modell (VLM) ist ein neuronales Netz, das Bild- und Texteingaben gleichzeitig verarbeitet und Textausgaben erzeugt. Die Standardarchitektur verbindet einen Vision-Encoder (typischerweise CLIP oder SigLIP) mit einem Language-Decoder (einem LLM) über eine Projektionsschicht, die Bildmerkmale in den Token-Raum des LLMs überführt.',
        items: [
          '**Unterschied zu Bildgeneratoren:** Stable Diffusion, FLUX und DALL-E 3 sind Text-zu-Bild-Generatoren. VLMs sind Bild-zu-Text-Modelle – sie beschreiben, analysieren und beantworten Fragen zu Bildern.',
          '**Unterschied zu reinen OCR-Tools:** Klassische OCR (Tesseract, PaddleOCR) extrahiert Text per Mustererkennung. VLMs verstehen Kontext – sie können den Inhalt einer Tabelle erklären, Fragen zu einem Diagramm beantworten oder Objekte identifizieren.',
          '**Warum lokal betreiben:** Private Dokumente (Krankenakten, juristische Scans, Finanzberichte), proprietäre Screenshots oder Workflows, bei denen das Senden von Bildern an Cloud-APIs Compliance- oder Vertraulichkeitsbedenken aufwirft.',
          '**Was sie nicht können:** Bilder generieren, Code aus Screenshots ausführen oder auf das Internet zugreifen. VLMs erzeugen ausschließlich Textausgaben basierend auf dem, was im Bild sichtbar ist.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Verfügbare lokale Vision-Modelle — Vergleichstabelle',
        content:
          'Vergleich der leistungsfähigsten lokalen Vision-Modelle, verfügbar über Ollama oder direkte Inferenz, geprüft am 19. Oktober 2026. Die VRAM-Spalte nennt die Ollama-Download-Größe (4-Bit-quantisiert, sofern nicht anders angegeben) – für den Kontext 1–2 GB hinzurechnen. *Llama 3.2 Vision lädt laut Nutzerberichten unter aktuellen Ollama-Versionen nicht (siehe Hinweis zu Llama 3.2 Vision unten).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Für 8 GB VRAM: Gemma 4 E4B oder Qwen3-VL 8B; für 24 GB: Gemma 4 26B/31B oder Qwen3.8 27B – alle lokal via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4 ist das beste Gesamtmodell; Qwen3-VL, Qwen3.5 und Qwen3.8 führen bei Dokument-OCR und mehrsprachigem Text; Moondream und Qwen3.5 2B sind die leichten Optionen unter 4 GB VRAM.',
          },
        ],
        columns: ['Modell', 'Parameter', 'VRAM (Q4)', 'Bildtypen', 'Qualität', 'Via Ollama?'],
        rows: [
          { 'Modell': 'Moondream 2', 'Parameter': '1,8B', 'VRAM (Q4)': '~2 GB', 'Bildtypen': 'Einfache Fotos', 'Qualität': 'Grundlegend', 'Via Ollama?': 'Ja' },
          { 'Modell': 'SmolVLM 2,2B', 'Parameter': '2,2B', 'VRAM (Q4)': '~2 GB', 'Bildtypen': 'Einfache Fotos, Beschriftungen', 'Qualität': 'Grundlegend+', 'Via Ollama?': 'Community' },
          { 'Modell': 'Qwen3.5 2B', 'Parameter': '2B', 'VRAM (Q4)': '2,7–3,1 GB', 'Bildtypen': 'Fotos, Dokumente, OCR', 'Qualität': 'Gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'PaliGemma 2 3B', 'Parameter': '3B', 'VRAM (Q4)': '~3 GB', 'Bildtypen': 'Fotos, Dokumente', 'Qualität': 'Gut', 'Via Ollama?': 'Community' },
          { 'Modell': 'Gemma 4 E2B', 'Parameter': '2,3B eff.', 'VRAM (Q4)': '4,6–7,5 GB', 'Bildtypen': 'Fotos, Dokumente, Audio', 'Qualität': 'Gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'LLaVA 1.6 7B', 'Parameter': '7B', 'VRAM (Q4)': '~6 GB', 'Bildtypen': 'Fotos, Dokumente, Diagramme', 'Qualität': 'Gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'MiniCPM-V', 'Parameter': '8B', 'VRAM (Q4)': '~6 GB (5,5 GB Pull)', 'Bildtypen': 'Fotos, Dokumente, OCR', 'Qualität': 'Sehr gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Qwen3-VL 8B', 'Parameter': '8B', 'VRAM (Q4)': '~6,1 GB', 'Bildtypen': 'Fotos, Dokumente, OCR, Mehrsprachig', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Qwen3.5 9B', 'Parameter': '9B', 'VRAM (Q4)': '6,6–7,6 GB', 'Bildtypen': 'Fotos, Dokumente, OCR, Mehrsprachig', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Gemma 4 E4B', 'Parameter': '4,5B eff.', 'VRAM (Q4)': '6,6–9,5 GB', 'Bildtypen': 'Fotos, Dokumente, Audio', 'Qualität': 'Sehr gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Gemma 4 12B', 'Parameter': '12B', 'VRAM (Q4)': '7,7–8,0 GB', 'Bildtypen': 'Fotos, Dokumente, Audio', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'InternVL 2.5 8B', 'Parameter': '8B', 'VRAM (Q4)': '~8 GB', 'Bildtypen': 'Dokumente, Diagramme, UI, Code', 'Qualität': 'Ausgezeichnet (UI/Diagramme)', 'Via Ollama?': 'Community' },
          { 'Modell': 'Llama 3.2 Vision 11B', 'Parameter': '11B', 'VRAM (Q4)': '~8 GB (7,8 GB Pull)', 'Bildtypen': 'Fotos, Dokumente', 'Qualität': 'Ausgezeichnet*', 'Via Ollama?': 'Ja*' },
          { 'Modell': 'LLaVA 1.6 13B', 'Parameter': '13B', 'VRAM (Q4)': '~10 GB', 'Bildtypen': 'Fotos, Dokumente, Diagramme', 'Qualität': 'Sehr gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Gemma 4 26B A4B', 'Parameter': '26B (4B aktiv)', 'VRAM (Q4)': '16–19 GB', 'Bildtypen': 'Fotos, Dokumente, Komplex', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Qwen3.8 27B', 'Parameter': '27B', 'VRAM (Q4)': '18 GB', 'Bildtypen': 'Fotos, Dokumente, Video, OCR', 'Qualität': 'Bestes Open-Source', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Gemma 4 31B', 'Parameter': '31B', 'VRAM (Q4)': '19–20 GB', 'Bildtypen': 'Fotos, Dokumente, Komplex', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Qwen3-VL 32B', 'Parameter': '32B', 'VRAM (Q4)': '21 GB', 'Bildtypen': 'Fotos, Dokumente, OCR, Komplex', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Llama 3.2 Vision 90B', 'Parameter': '90B', 'VRAM (Q4)': '55 GB', 'Bildtypen': 'Fotos, Dokumente, Komplex', 'Qualität': 'Sehr gut*', 'Via Ollama?': 'Ja*' },
          { 'Modell': 'Qwen3.5 122B', 'Parameter': '122B', 'VRAM (Q4)': '81 GB', 'Bildtypen': 'Fotos, Dokumente, Komplex', 'Qualität': 'Bestes lokales Modell', 'Via Ollama?': 'Ja' },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-de.svg',
        imageCaption:
          'Vergleich lokaler Vision-Modelle nach VRAM und OCR-Qualität: Moondream 2 läuft mit 2 GB, Qwen3-VL 8B führt bei Dokument-OCR mit 6 GB, und Gemma 4 liefert von 8 GB (E4B) bis 24 GB (26B und 31B) via Ollama die beste Gesamtqualität.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: 'Praxistest: Rechnungsextraktion',
        content:
          'Vergleich der Genauigkeit lokaler Vision-Modelle bei strukturierter Dokumentenextraktion. Test: 5 Felder aus derselben Musterrechnung extrahieren (Lieferant, Datum, Gesamt, Steuer, Positionen).',
        columns: ['Modell', 'Anbieter', 'Datum', 'Gesamt', 'Steuer', 'Positionen', 'Bewertung'],
        rows: [
          { 'Modell': 'Moondream 2', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✗', 'Steuer': '✗', 'Positionen': '✗', 'Bewertung': '2/5' },
          { 'Modell': 'LLaVA 1.6 7B', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✗', 'Positionen': '✓', 'Bewertung': '4/5' },
          { 'Modell': 'MiniCPM-V 4.5', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
          { 'Modell': 'Qwen3-VL 8B', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
          { 'Modell': 'Llama 3.2 11B', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
          { 'Modell': 'GPT-5.5 Vision', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
        ],
        callouts: [
          { type: 'note', text: 'Ergebnisse aus einem einzelnen Testdokument. Die Genauigkeit variiert je nach Dokumentqualität, Schriftart und Layoutkomplexität. Extrahierte Zahlen immer gegen das Quelldokument prüfen.' },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'Multi-Bild-Unterstützung',
        content:
          'Nicht alle lokalen Vision-Modelle akzeptieren mehrere Bilder in einer Anfrage. Multi-Bild-Unterstützung ist wichtig für Dokumentenverarbeitung und visuelle Vergleichsaufgaben.',
        columns: ['Funktion', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Funktion': 'Multi-Bild-Eingabe',
            'Moondream': 'Nein',
            'LLaVA 7B': 'Nein',
            'MiniCPM-V': 'Ja (bis zu 4)',
            'Qwen3-VL': 'Ja (bis zu 8)',
            'LLaVA 13B': 'Nein',
            'Llama 3.2 Vision': 'Ja (mehrere Seiten)',
            'InternVL': 'Ja',
          },
        ],
        items: [
          'MiniCPM-V akzeptiert bis zu 4 Bilder pro Prompt; Qwen3-VL verarbeitet bis zu 8. LLaVA und Moondream akzeptieren nur einzelne Bilder pro Anfrage.',
          '**Wann Multi-Bild wichtig ist:** Alle Seiten eines mehrseitigen PDFs für vollständige Extraktion senden. Zwei Produktfotos nebeneinander vergleichen. Vorher/Nachher-Screenshots in einem Prompt analysieren.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Setup mit Ollama — Schritt für Schritt',
        content:
          'Ollama ist der einfachste Weg, lokale Vision-Modelle auszuführen. Nach der Installation funktionieren Vision-Modelle mit einem einzigen Pull-Befehl.',
        items: [
          '**Schritt 1 — Ollama installieren:** Download von ollama.com für macOS, Linux oder Windows. Installation unter 2 Minuten.',
          '**Schritt 2 — Modell herunterladen:** `ollama pull gemma4:e4b` (6,6–9,5 GB Download) für 8-GB-Karten, `ollama pull qwen3-vl:8b` (6,1 GB) für OCR oder `ollama pull moondream` (1,8B, 1,7 GB) für VRAM-beschränkte Systeme.',
          '**Schritt 3 — Über CLI nutzen:** `ollama run gemma4:e4b "Was ist auf diesem Bild? /pfad/zum/foto.jpg"` — den Bildpfad im Prompt angeben; `ollama run` hat kein `--image`-Flag.',
          '**Schritt 4 — HTTP-API nutzen:** POST an `http://localhost:11434/api/generate` mit dem Bild als Base64-String im `images`-Array. Mit einem JSON-Schema im Feld `format` erhalten Sie strukturierte Ausgaben.',
          '**Schritt 5 — Python-Beispiel:** `requests`-Bibliothek mit Base64-Kodierung verwenden – siehe Code-Block unten.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# Beispielaufruf
result = ask_vision_model("rechnung.png", "Extrahiere alle Positionen und Gesamtbeträge aus dieser Rechnung.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-de.svg',
        imageCaption:
          'Ollama-Setup-Pipeline für Vision-Modelle: Ollama installieren, ein Vision-Modell wie gemma4:e4b laden, per CLI mit dem Bildpfad im Prompt oder per HTTP-API unter localhost:11434 ausführen und Textausgabe für OCR, Q&A oder Bildbeschreibung erhalten.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Anwendungsfall 1: Dokument-OCR und -Extraktion',
        content:
          '**VLMs übertreffen klassische OCR bei halbstrukturierten Dokumenten** – Rechnungen, Quittungen, Verträge und Tabellen, bei denen Layout und Text gleich wichtig sind.',
        items: [
          '**Was gut funktioniert:** Gescannte Rechnungen, PDF-Screenshots, handgeschriebene Druckschrift, Tabellen mit klaren Linien, Visitenkarten.',
          '**Was weniger gut funktioniert:** Kursivhandschrift, Scans unter 150 DPI, stark komprimierte JPEGs, überlappender Text.',
          '**Beste Modelle für OCR:** Qwen3-VL 8B und Qwen3.5 9B (6–8-GB-Klasse), Qwen3.8 27B (18 GB, laut Modell-Card 91,1 bei OmniDocBench 1.5), Gemma 4 für gemischte Dokumenttypen.',
          '**Prompt-Engineering für OCR:** „Extrahiere den gesamten Text aus diesem Dokument genau wie geschrieben." Oder: „Gib den Inhalt dieser Rechnung als JSON zurück mit Feldern: Anbieter, Datum, Positionen[], Gesamt."',
          '**Vs. klassische OCR:** VLMs sind langsamer, aber semantisch mächtiger. Tesseract für reine Textextraktion aus sauberen Dokumenten; VLMs für strukturierte Datenextraktion.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Anwendungsfall 2: Bild-Q&A und -Beschreibung',
        content:
          '**Für allgemeines Szenenverständnis, Produktbeschreibungen und visuelle Q&A ist Gemma 4 (E4B bei 8 GB, 26B oder 31B bei 24 GB) das empfohlene lokale Modell.** Es erzeugt natürliche, detaillierte Beschreibungen und beantwortet nuancierte Fragen zum Bildinhalt.',
        items: [
          '**Szenenbeschreibung:** „Was ist auf diesem Foto?" – Objekte, Personen, Aktivitäten, Umgebung, Stimmung.',
          '**Produktkatalogisierung:** Produktfotos mit einem Template verarbeiten: „Beschreibe Farbe, Form, Material, Zustand." Nützlich für E-Commerce-Inventar ohne Cloud-APIs.',
          '**Barrierefreiheit:** Alt-Texte für Bilder im großen Maßstab generieren.',
          '**Beste Modelle:** Gemma 4 12B oder 26B A4B für allgemeine Foto-Q&A. Qwen3.5 4B oder LLaVA 1.6 7B für Massenverarbeitung, wenn Geschwindigkeit wichtiger ist als Genauigkeit.',
          '**Geschwindigkeitshinweis:** Die Geschwindigkeit hängt von Modell, GPU und Länge der Beschreibung ab – vor einem Batch mit Tausenden Bildern eine Stichprobe von 20 Bildern auf der eigenen Hardware testen.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'Anwendungsfall 3: Screenshot- und UI-Analyse',
        content:
          '**Für die Analyse von Anwendungs-Screenshots, Fehlermeldungen und Dashboards ist InternVL 2.5 das stärkste lokale Modell.**',
        items: [
          '**Entwickler-Workflows:** Screenshots von Fehlermeldungen an das Modell weiterleiten: „Was ist falsch und wie würde man es beheben?"',
          '**Bug-Report-Generierung:** Automatische Erstellung von Bug-Beschreibungen aus Screenshots.',
          '**Dashboard-Monitoring:** Screenshots auf Anomalien analysieren – „Gibt es Metriken auf Warnstufe in diesem Grafana-Screenshot?"',
          '**Accessibility-Testing:** Screenshots vor und nach UI-Änderungen vergleichen.',
          '**Beste Modelle:** InternVL 2.5 8B (Community-Build, stark bei UI), Gemma 4 und Qwen3-VL (offizielle Ollama-Unterstützung, Tool Calling für Agenten-Workflows).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'Anwendungsfall 4: Diagramm- und Grafikanalyse',
        content:
          '**Daten aus Diagrammen und Tabellen zu extrahieren ist möglich, erfordert aber sorgfältiges Prompting.** Alle lokalen VLMs sind bei Diagrammen schwächer als bei Fotos – extrahierte Zahlen immer gegen Quelldaten prüfen.',
        items: [
          '**Was gut funktioniert:** Achsenbeschriftungen lesen, Trends erkennen, relative Balkenhöhen vergleichen, Tabellenwerte auslesen.',
          '**Was unzuverlässig ist:** Präzise numerische Extraktion aus kontinuierlichen Diagrammen, Kreisdiagramm-Prozentsätze ohne Beschriftungen.',
          '**Prompt-Strategie:** „Beschreibe den Trend" funktioniert besser als „Was ist der exakte Wert?"',
          '**Beste Modelle:** InternVL 2.5 (starkes Diagrammverständnis), Gemma 4 und Qwen3-VL (gut bei klar beschrifteten Diagrammen).',
          '**Einschränkungshinweis:** Kein lokales VLM extrahiert 2026 zuverlässig präzise Zahlen aus komplexen Diagrammen.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'Anwendungsfall 5: Video-Frame-Analyse',
        content:
          '**Lokale Vision-Modelle können Videos analysieren, indem sie einzelne Frames verarbeiten** – Frames per ffmpeg extrahieren, durch das Vision-Modell schicken, dann mit einem Text-LLM zusammenfassen. Nicht in Echtzeit: 1 Frame pro 0,5–3 Sekunden.',
        items: [
          '**Frame-Extraktion:** `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**Frame-für-Frame-Analyse:** Jeden Frame mit konsistentem Prompt durch das Vision-Modell schicken.',
          '**Übergreifende Zusammenfassung:** Alle Frame-Beschreibungen an ein Text-LLM übergeben.',
          '**Anwendungsfälle:** Sicherheitskamera-Review, Vorlesungsaufzeichnungsanalyse, Qualitätskontrolle in der Fertigung.',
          '**Beste Modelle:** Gemma 4 oder Qwen3.8 für Qualität (beide akzeptieren Video nativ als Einzelbilder), Qwen3.5 4B oder LLaVA 1.6 7B für Geschwindigkeit (höherer Frame-Durchsatz).',
          '**Geschwindigkeitsrealität:** Bei 1 Frame/Sekunde Extraktion und ~1–3 Sekunden pro Frame dauert die Verarbeitung eines 10-minütigen Videos (600 Frames) je nach Modell und GPU etwa 10–30 Minuten.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("vorlesung.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM und Leistungs-Realitätscheck',
        content:
          'Lokale Vision-Modelle fügen einen Vision-Encoder zum Basis-LLM hinzu, was sowohl VRAM-Bedarf als auch Inferenzzeit erhöht.',
        columns: ['Modell', 'VRAM (Q4)', 'Token/Sek. (RTX 4070)', 'Token/Sek. (M5 Pro 36 GB)', 'Produktionstauglich?'],
        rows: [
          { 'Modell': 'Moondream 2 (1,8B)', 'VRAM (Q4)': '~2 GB', 'Token/Sek. (RTX 4070)': '~25–35', 'Token/Sek. (M5 Pro 36 GB)': '~30–40', 'Produktionstauglich?': 'Ja — für einfache Aufgaben' },
          { 'Modell': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'Token/Sek. (RTX 4070)': '~15–20', 'Token/Sek. (M5 Pro 36 GB)': '~18–25', 'Produktionstauglich?': 'Ja — Allzweck' },
          { 'Modell': 'MiniCPM-V (8B)', 'VRAM (Q4)': '~6 GB', 'Token/Sek. (RTX 4070)': '~12–18', 'Token/Sek. (M5 Pro 36 GB)': '~15–20', 'Produktionstauglich?': 'Ja — OCR und Dokumente' },
          { 'Modell': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'Token/Sek. (RTX 4070)': '~10–14', 'Token/Sek. (M5 Pro 36 GB)': '~12–16', 'Produktionstauglich?': 'Erst Ollama-Ladeproblem prüfen' },
          { 'Modell': 'LLaVA 1.6 13B', 'VRAM (Q4)': '~10 GB', 'Token/Sek. (RTX 4070)': '~8–12', 'Token/Sek. (M5 Pro 36 GB)': '~10–14', 'Produktionstauglich?': 'Ja — mit 12-GB-GPU' },
          { 'Modell': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '~64 GB', 'Token/Sek. (RTX 4070)': 'N/A (Multi-GPU oder M-Max)', 'Token/Sek. (M5 Pro 36 GB)': 'N/A (M5 Max 128 GB+)', 'Produktionstauglich?': 'Nur High-End Apple Silicon' },
        ],
        callouts: [
          { type: 'note', text: 'Die Token-pro-Sekunde-Bereiche sind Richtwerte, keine neuen Messungen; sie wurden für Gemma 4, Qwen3.5 oder Qwen3.8 nicht erneut ermittelt. Auf der eigenen Hardware mit `ollama run <model> --verbose` testen, das die Eval-Rate ausgibt.' },
          { type: 'note', text: 'Die Token-Generierungsgeschwindigkeit ist langsamer als bei reinen Textmodellen, da der Vision-Encoder beim ersten Bild-Token erheblichen Mehraufwand verursacht. Nachfolgende Text-Tokens werden nahezu normal generiert.' },
          { type: 'note', text: 'Apple Silicon Unified Memory ermöglicht größere Modelle (Llama 3.2 Vision 90B mit 55 GB oder Qwen3.5 122B mit 81 GB auf einem Mac mit 128 GB), die nicht in diskreten GPU-VRAM passen. Etwas langsamer als NVIDIA, aber ohne VRAM-Beschränkung.' },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'Lokale Vision-Modelle vs. GPT-5.5 Vision',
        content:
          'Lokale VLMs haben den Rückstand bei strukturierten Dokumenten deutlich verringert, liegen aber bei komplexen Aufgaben noch hinter GPT-5.5 Vision.',
        items: [
          '**Strukturierte Dokumente (Rechnungen, Formulare):** Lokale Modelle bei 80–90 % der GPT-5.5-Qualität – ausreichend für den Produktionseinsatz.',
          '**Komplexe Szenen, mehrdeutige Bilder:** Lokale Modelle bei 50–70 % von GPT-5.5 – spürbare Qualitätslücke.',
          '**Handschrifterkennung:** Lokale Modelle deutlich schwächer, besonders bei Kursivschrift.',
          '**Diagrammdatenextraktion:** Auf beiden unzuverlässig, aber GPT-5.5 bei präzisen Zahlenwerten genauer.',
          '**Kosten:** GPT-5.5 Vision bei 0,01–0,03 $ pro Bild vs. 0 $ lokal. 10.000 Bilder/Monat = 100–300 $ gespart.',
          '**Datenschutz:** Lokale Modelle verarbeiten Bilder standardmäßig auf dem Gerät – Bilder werden nicht an eine Cloud-API gesendet, solange Sie keine Cloud-Funktionen oder vernetzten Tools aktivieren.',
          '**Geschwindigkeit:** Lokale Modelle 10–20 Token/Sek. vs. GPT-5.5 30–80 Token/Sek., aber lokal ohne Netzwerklatenz.',
        ],
        callouts: [
          { type: 'note', text: 'Für Rechnungs- und Formularverarbeitung mit sauberem Input können lokale VLMs (Gemma 4, Qwen3-VL 8B, Qwen3.8 27B) GPT-5.5 Vision bei null Kosten ersetzen. Bei Handschrift, komplexer Szenenanalyse oder mehrdeutigen Inhalten liegt GPT-5.5 weiterhin vorn.' },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'LLaVA im Detail',
        content:
          '**LLaVA (Large Language and Vision Assistant) ist die grundlegende Open-Source-VLM-Architektur.** Veröffentlicht von der University of Wisconsin-Madison und Microsoft Research 2023.',
        items: [
          '**Architektur:** CLIP ViT-L/14 Vision-Encoder + Llama-2 oder Mistral Text-Decoder, verbunden durch eine lineare Projektionsschicht.',
          '**LLaVA 1.5 vs. 1.6:** Version 1.6 (Anfang 2024) fügte dynamisches Patching für höhere Auflösungen hinzu und verbesserte OCR und Diagrammauswertung deutlich.',
          '**Training:** Instruction-tuning auf LLaVA-Instruct-150K – visuellen Konversationen aus Bildbeschriftungen und Objekterkennungsannotationen.',
          '**Stärken:** Breites Allgemeinwissen, gut dokumentiert, große Community, umfangreiche Ollama-Integration.',
          '**Schwächen:** Schwächere OCR als Qwen3-VL und MiniCPM-V, schwächere UI-Analyse als InternVL 2.5, insgesamt von Gemma 4 und der Qwen3-Familie übertroffen.',
          '**Warum weiterhin empfohlen:** Größte Community, meiste Tutorials, meiste Beispiel-Prompts aller lokalen VLMs.',
          '**Vollständiger Test:** [LLaVA im Test (2026)](/de/power-local-llm/llava-review) — PromptQuorums dedizierter Test, einschließlich der Apache-2.0-plus-Basismodell-Lizenznuance und echter Ollama-Befehle.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL, Qwen3.5 und Qwen3.8 — Beste multilinguale OCR-Leistung',
        content:
          '**Die Qwen-Familie ist 2026 die stärkste offene Option für Dokument-OCR und mehrsprachigen Text.** Qwen3-VL (Größen 2B bis 235B) ist die dedizierte Vision-Linie, Qwen3.5 (0.8B bis 122B) integriert Vision in das Basismodell, und Qwen3.8 27B (August 2026, Apache 2.0) ist das neueste Modell mit gemeldeten 91,1 bei OmniDocBench 1.5.',
        items: [
          '**Architektur:** Dynamische Auflösung bis 4096×4096 – deutlich höher als LLaVA 1.6 (672×672) oder Llama 3.2 Vision (1120×1120).',
          '**Mehrsprachige OCR:** Beste Klasse für Chinesisch, Japanisch, Koreanisch und Englisch. Umfangreiche mehrsprachige Dokumentkorpora im Training.',
          '**Welche Größe:** Qwen3-VL 8B ist ein Download von 6,1 GB und passt auf 8-GB-Karten; Qwen3.5 9B hat 6,6–7,6 GB; Qwen3.8 27B hat 18 GB und braucht eine 24-GB-Karte; Qwen3-VL 32B hat 21 GB. Qwen3-VL hat auf Ollama keine 72B-Variante.',
          '**Ollama-Installation:** `ollama pull qwen3-vl:8b`, `ollama pull qwen3.5:9b` oder `ollama pull qwen3.8` — alle in der Ollama-Modellbibliothek.',
          '**Multi-Bild:** Bis zu 8 Bilder pro Anfrage – höchste Kapazität im Vergleich.',
          '**Modellseiten:** [Qwen3-VL auf Ollama](https://ollama.com/library/qwen3-vl), [Qwen3.8-27B auf Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Auswahl des richtigen Vision-Modells',
        content: 'Entscheidungsbaum für die Modellauswahl – VRAM zuerst:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Modell nach VRAM wählen (2→4→8→24 GB), dann nach Anwendungsfall verfeinern (OCR, UI, allgemeine Q&A oder maximale Qualität).',
          },
          {
            type: 'plain-terms',
            text: 'Unter 4 GB: Qwen3.5 2B oder Moondream. 8 GB: Gemma 4 E4B für Fotos, Qwen3-VL 8B für Dokumente. 24 GB: Gemma 4 26B/31B oder Qwen3.8 27B. 64+ GB: Qwen3.5 122B.',
          },
        ],
        items: [
          '**Unter 4 GB VRAM:** Qwen3.5 2B (2,7–3,1 GB), Qwen3-VL 2B (1,9 GB) oder Moondream 2 (1,7 GB) sind die praktischen Optionen. PaliGemma 2 (3B) und SmolVLM (2,2B) sind Alternativen als Community-Builds. Keines ist für dichten Text-OCR geeignet.',
          '**6–8 GB VRAM:** Gemma 4 E4B für allgemeine Foto-Q&A, Qwen3-VL 8B oder Qwen3.5 9B für Dokument-OCR und mehrsprachigen Text, LLaVA 1.6 7B, wenn Community-Unterstützung wichtig ist.',
          '**12–16 GB VRAM:** Gemma 4 12B (7,7–8,0 GB Download) ist die klare Empfehlung – starke Vision-Werte für seine Größe, mit Audio-Eingabe und 256K-Kontextfenster. LLaVA 1.6 13B und InternVL 2.5 8B (UI- und Code-Screenshots) passen ebenfalls.',
          '**24 GB VRAM:** Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) oder Qwen3-VL 32B (21 GB) – die lokale Option, die der Vision-Qualität von Cloud-Modellen am nächsten kommt.',
          '**64+ GB Unified Memory (Apple M-Max/Ultra, Multi-GPU):** Qwen3.5 122B (81 GB) oder Llama 3.2 Vision 90B (55 GB) für die größten lokalen Modelle; beide erfordern Hardware mit viel Speicher und sind pro Token langsamer als die Modelle der 24-GB-Klasse.',
          '**Zahlen immer prüfen:** Aus Diagrammen extrahierte Zahlenwerte immer gegen Quelldaten gegenchecken.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Häufig gestellte Fragen',
        faqs: [
          {
            q: 'Warum schlägt llama3.2-vision mit „unknown model architecture: mllama" fehl?',
            a: 'Nutzer melden diesen Fehler bei llama3.2-vision unter aktuellen Ollama-Versionen (GitHub-Issues #16490 und #16547, Mitte 2026 eröffnet; das zweite wurde als Duplikat geschlossen, ohne bestätigte Lösung). Ein Update von Ollama oder erneutes Herunterladen des Modells half in diesen Berichten nicht. Wechseln Sie zu Gemma 4 oder Qwen3-VL, die in der Ollama-Bibliothek aktiv gepflegt werden – es sei denn, Sie müssen bei Llama 3.2 Vision bleiben; dann sollten Sie eine Ollama-Version festlegen, unter der es noch lädt.',
          },
          {
            q: 'Was ist das beste kleine Vision-Language-Modell unter 3B Parametern?',
            a: 'Qwen3.5 2B (2,7–3,1 GB Download) und Qwen3-VL 2B (1,9 GB) sind die stärksten kleinen Optionen auf Ollama; Moondream 2 (1,8B, 1,7 GB) ist das leichteste. Gemma 4 E2B (2,3B effektive Parameter, 4,6–7,5 GB Download) bietet zusätzlich Audio-Eingabe. Rechnen Sie mit schwächerer OCR und geringerem Verständnis komplexer Szenen als in der 8B-Klasse.',
          },
          {
            q: 'Welche lokalen Modelle verarbeiten Live-Kamera- und Mikrofoneingaben?',
            a: 'Gemma 4 E2B, E4B und 12B akzeptieren Bilder und Audio und sind damit die naheliegende Basis für einen lokalen Assistenten, der sieht und hört. Das Modell allein ist kein Live-System: Sie benötigen weiterhin eine Erfassungsschleife (Frames abgreifen, Audio in Blöcke teilen), einen Speech-to-Text- oder Audio-Eingabepfad und einen Text-to-Speech-Schritt für gesprochene Antworten. Prüfen Sie vorab, ob Ihre Runtime-Version Audio tatsächlich an das Modell weiterreicht.',
          },
          {
            q: 'Wie erhalte ich zuverlässige strukturierte Ausgaben aus Screenshots und Dokumenten?',
            a: 'Übergeben Sie ein JSON-Schema im Feld `format` von Ollama, setzen Sie die Temperatur auf 0 und fragen Sie nur Felder ab, die im Bild sichtbar sind. Das beschränkt die Antwort auf gültiges JSON mit Ihren Schlüsseln; es macht die Werte aber nicht richtig. Prüfen Sie Zahlen und Datumsangaben daher gegen die Quelle und protokollieren Sie Fehler. Größere Modelle (ab 8B) halten Schemas konsistenter ein als 2B-Modelle.',
          },
          {
            q: 'Was sind die besten GPT-4V-Alternativen, die vollständig auf dem Gerät laufen?',
            a: 'Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) und Qwen3-VL 32B (21 GB) kommen auf einer 24-GB-GPU am nächsten; Gemma 4 E4B und Qwen3-VL 8B decken 8-GB-Rechner ab. Alle können über Ollama ohne Internetverbindung laufen. Bei sauberen Dokumenten und Fotos halten sie mit Cloud-Modellen mit, bei Handschrift, mehrdeutigen Szenen und komplexen Infografiken liegen sie zurück.',
          },
          {
            q: 'Kann ich LLaVA oder Llama 3.2 Vision ohne Ollama verwenden?',
            a: 'Ja. Beide können direkt über llama.cpp (mit Vision-Unterstützung), die transformers-Bibliothek oder LM Studio ausgeführt werden. Ollama wird der Einfachheit halber empfohlen.',
          },
          {
            q: 'Unterstützt Llama 3.2 Vision direkte PDF-Eingabe?',
            a: 'Kein lokales VLM akzeptiert PDFs direkt. PDF-Seiten zuerst in Bilder umwandeln (pdf2image, pypdfium2) und jede Seite als separate Anfrage senden.',
          },
          {
            q: 'Wie vergleichen sich lokale Vision-Modelle mit GPT-5.5 Vision?',
            a: 'GPT-5.5 ist bei mehrdeutigen Szenen, Handschrift und komplexen Infografiken noch deutlich besser. Gemma 4 und Qwen3-VL nähern sich GPT-5.5 bei strukturierten Dokumenten (Rechnungen, Formulare, klare Fotos), fallen bei nuancierten oder mehrdeutigen Bildern aber zurück. Den vollständigen Vergleich mit Kosten, Datenschutz und Geschwindigkeit siehe oben.',
          },
          {
            q: 'Welche Bildauflösung unterstützen lokale VLMs?',
            a: 'LLaVA 1.6 bis 672×672 (dynamisches Patching). MiniCPM-V bis 1792×1792. Llama 3.2 Vision bis 1120×1120. Gemma 4 und Qwen3-VL akzeptieren variable Seitenverhältnisse und Auflösungen. Für beste OCR-Ergebnisse Dokumente mit 150+ DPI senden.',
          },
          {
            q: 'Kann ich ein lokales Vision-Modell auf eigenen Bildern fine-tunen?',
            a: 'Ja, aber ressourcenintensiver als reines Text-LLM-Fine-Tuning. LLaVA-Fine-Tuning mit dem Original-Trainings-Code gut dokumentiert. MiniCPM-V über Hugging Face-Skripte. Für die meisten Fälle reicht Prompt-Engineering.',
          },
          {
            q: 'Was ist das beste lokale Vision-Modell für 8 GB VRAM?',
            a: 'Gemma 4 E4B (6,6–9,5 GB Download) für den allgemeinen Einsatz oder Qwen3-VL 8B (6,1 GB), wenn Dokument-OCR oder mehrsprachiger Text im Vordergrund steht. Beide sind über Ollama mit einem einzigen Pull-Befehl verfügbar. Qwen3.5 9B (6,6–7,6 GB) ist eine dritte Option.',
          },
          {
            q: 'LLaVA vs. MiniCPM-V – welches ist besser für OCR?',
            a: 'MiniCPM-V ist bei Dokument-OCR genauer als LLaVA, besonders bei dichten Tabellen und hochauflösenden Scans, doch Qwen3-VL 8B ist die stärkere OCR-Wahl als beide. LLaVA 1.6 ist besser dokumentiert und hat mehr Community-Unterstützung. Beachten Sie, dass die minicpm-v-Seite von Ollama weiterhin MiniCPM-V 2.6 (5,5 GB) beschreibt; neuere MiniCPM-V-Versionen erfordern einen Build über Hugging Face oder llama.cpp.',
          },
          {
            q: 'Können lokale Vision-Modelle Handschrift erkennen?',
            a: 'Druckschrift: Ja, mit moderater Genauigkeit bei Gemma 4, Qwen3-VL und MiniCPM-V. Kursivschrift: Unzuverlässig bei allen lokalen Modellen. GPT-5.5 Vision ist bei Kursivschrift deutlich besser.',
          },
          {
            q: 'Muss ich beim Einsatz lokaler Vision-Modelle die DSGVO beachten?',
            a: 'Verarbeiten lokale VLMs Bilder auf dem eigenen Gerät und erhält kein Drittanbieter Zugriff, entfällt für diese Verarbeitungsstufe in der Regel eine Auftragsverarbeitung nach DSGVO Art. 28; die DSGVO gilt für Ihre Verarbeitung aber weiterhin. Für Unternehmen mit Personendaten in Dokumenten kann eine Dokumentation nach BSI-Grundschutz hilfreich sein. Lokale Verarbeitung kann Datenschutz durch Technikgestaltung (DSGVO Art. 25) unterstützen. Dies ist keine Rechtsberatung.',
          },
          {
            q: 'Ist der Einsatz lokaler Vision-Modelle für den deutschen Mittelstand geeignet?',
            a: 'Ja. Für KMU, die sensible Geschäftsdokumente verarbeiten, bieten lokale VLMs klare Vorteile: keine Datenweitergabe an Cloud-Anbieter, solange Sie keine Cloud-Funktionen aktivieren, Betrieb auf vorhandener Hardware (ab 8 GB VRAM), keine laufenden API-Kosten. Lokale Verarbeitung kann bei vertraulichen Geschäftsdaten die Anforderungen des BSI-Grundschutzes unterstützen (Einzelfallprüfung erforderlich). Gemma 4 E4B und Qwen3-VL 8B laufen ab 8 GB VRAM.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[Gemma 4 Modell-Card auf Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — Googles Apache-2.0-Lizenz, unterstützte Modalitäten je Größe und MMMU-Pro-Ergebnisse.',
          '[Gemma 4 auf Ollama](https://ollama.com/library/gemma4) — Tags, Download-Größen und Kontextfenster.',
          '[Qwen3.8-27B auf Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache-2.0-Lizenz, 262K Kontext, OmniDocBench-1.5-Ergebnis.',
          '[Qwen3.5 auf Ollama](https://ollama.com/library/qwen3.5) und [Qwen3-VL auf Ollama](https://ollama.com/library/qwen3-vl) — Größen und Download-Größen.',
          '[Llama 3.2 Vision auf Ollama](https://ollama.com/library/llama3.2-vision) und [Ollama-Issue #16547](https://github.com/ollama/ollama/issues/16547) — Eintrag und der gemeldete mllama-Ladefehler.',
          '[LLaVA-Projektseite](https://llava-vl.github.io) — LLaVA 1.5 und 1.6 Modell-Cards, Architekturdetails und Trainingsdatensatz.',
          '[MiniCPM-V auf Ollama](https://ollama.com/library/minicpm-v) und [OpenBMB auf Hugging Face](https://huggingface.co/openbmb) — Modell-Cards und OCR-Benchmarks.',
          '[Moondream auf Ollama](https://ollama.com/library/moondream) und [Moondream auf GitHub](https://github.com/vikhyat/moondream) — Modell-Download und Inferenzskripte.',
          '[InternVL 2.5 auf Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab Modell-Card und Benchmark-Werte.',
          '[Ollama-Dokumentation](https://ollama.com) — Vision-Modell-Unterstützung, strukturierte Ausgaben, API-Referenz und Modellbibliothek.',
          '[PaliGemma 2 auf Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Googles PaliGemma 2 3B Modell-Card.',
          '[SmolVLM auf Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace SmolVLM Modell-Card und Inferenzanleitung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Welche Ollama-Modelle unterstützen Vision?](/de/prompt-bites/which-ollama-models-support-vision) — Kurzantwort, welche Modelle der Ollama-Bibliothek Bilder akzeptieren, mit VRAM-Angaben.',
          '[Ollama-Vision-Modelle (2026)](/de/power-local-llm/ollama-vision-models-review) — ein fokussierter, praktischer Leitfaden zum Ausführen von Vision-Modellen speziell über Ollama: echte CLI-/API-Syntax und welche Modelle tatsächlich in seiner Bibliothek sind.',
          '[VLMs in Kameras und auf Drohnen 2026](/de/power-local-llm/vlm-video-analytics-drones-edge) -- Desktop-VLM-Grundlagen stehen hier; fuer eingebettete Kameras und Drohnen siehe diesen Edge-fokussierten Guide.',
          '[Lokale multimodale KI-Pipeline 2026](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Vision-Modelle mit STT und TTS zu einem vollständigen lokalen Stack kombinieren.',
          '[Lokale Sprache-zu-Text 2026: Whisper.cpp vs. faster-whisper](/de/power-local-llm/local-whisper-stt-comparison) — Spracheingabe als Ergänzung zur Vision-Ausgabe.',
          '[Lokale TTS und Stimmklonierung 2026](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Sprachausgabe für VLM-Antworten.',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) — Voraussetzung: Ollama-Setup und -Konfiguration.',
          '[Lokaler LLM Hardware-Leitfaden](/de/local-llms/local-llm-hardware-guide) — VRAM- und RAM-Anforderungen für Vision-Modell-Inferenz.',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-fr.webp',
    title: 'Meilleurs modèles de vision locaux 2026 : Gemma 4, Qwen3-VL, LLaVA & configuration Ollama',
    seoTitle: 'Meilleurs modèles de vision locaux 2026 : Gemma 4, Qwen3-VL & Ollama',
    intro:
      'Les modèles vision-langage (VLM) acceptent des entrées image et texte simultanément et produisent du texte — pour l\'OCR de documents, les questions-réponses sur images, l\'analyse de captures d\'écran et la lecture de graphiques, entièrement en local. En 2026, Ollama est la voie la plus simple : téléchargez un modèle, envoyez une image, obtenez une réponse. Ce guide compare les principaux modèles de vision locaux (Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, MiniCPM-V, LLaVA 1.6, Llama 3.2 Vision, Moondream 2, InternVL 2.5), explique la configuration d\'Ollama étape par étape et associe chaque modèle à son meilleur cas d\'usage selon la VRAM requise. Les tailles de téléchargement proviennent de la bibliothèque de modèles Ollama et les chiffres de qualité des fiches modèles des éditeurs, vérifiés le 19 octobre 2026.',
    metaDescription:
      'Meilleurs VLM locaux pour Ollama en 2026 : Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. VRAM par modèle, choix OCR et étapes de configuration.',
    twitterDescription:
      'Meilleurs modèles de vision locaux 2026 : Gemma 4, Qwen3-VL, MiniCPM-V, LLaVA via Ollama. Q&R sur images, OCR, captures d\'écran hors ligne. Guide VRAM et configuration.',
    audience:
      'Développeurs ayant besoin de comprendre des images en local sans API cloud — pour le traitement de documents, l\'analyse de captures d\'écran, les outils d\'accessibilité, les systèmes d\'inventaire ou les workflows d\'images sensibles.',
    readTime: '11 min de lecture',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modèle de vision local',
    targetKeywords: [
      'modèle de vision local 2026',
      'meilleur vlm local',
      'gemma 4 vision ollama',
      'petit modèle vision-langage moins de 3b',
      'LLaVA Ollama configuration',
      'exécuter un modèle de vision en local',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen3-vl local',
      'qwen3-vl ollama',
      'meilleur modèle de vision local',
      'compréhension d\'images hors ligne',
      'modèle multimodal local',
      'ollama modèle de vision',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**Pour la plupart des utilisateurs, Gemma 4 (Apache 2.0) via Ollama est le meilleur modèle de vision local en 2026 : gemma4:e4b tient sur une carte de 8 Go, gemma4:26b ou 31b conviennent à 24 Go.** La fiche modèle de Google indique des scores MMMU Pro de 52,6 % (E4B), 69,1 % (12B), 73,8 % (26B A4B) et 76,9 % (31B), contre 49,7 % pour Gemma 3 27B, la génération précédente. Pour l\'OCR de documents et le texte multilingue, Qwen3-VL 8B (6,1 Go à télécharger), Qwen3.5 9B et le plus récent Qwen3.8 27B (18 Go) sont les choix les plus solides. Llama 3.2 Vision, longtemps la recommandation par défaut, est signalé comme ne se chargeant plus sur les versions récentes d\'Ollama (« unknown model architecture: mllama ») et n\'est donc plus le premier choix. Sous 3 Go, utilisez Qwen3.5 2B, Qwen3-VL 2B ou Moondream 2. Une fois téléchargés, tous les modèles peuvent fonctionner sans connexion internet.',
    quickAnswerTop: {
      fr: {
        question: 'Quels sont les meilleurs modèles de vision locaux à utiliser avec Ollama en 2026 ?',
        answer:
          'Le meilleur modèle de vision local pour Ollama en 2026 est **Gemma 4** (`ollama pull gemma4`) pour la compréhension générale d\'images. Utilisez **Qwen3-VL**, **Qwen3.5** ou **Qwen3.8** pour l\'OCR de documents et le texte multilingue, et **Moondream 2** ou **Qwen3.5 2B** sur du matériel sous 4 Go.',
        bullets: [
          'Moins de 4 Go de VRAM → Qwen3.5 2B (2,7–3,1 Go), Qwen3-VL 2B (1,9 Go) ou Moondream 2 (1,7 Go) : rapides, limités sur les images complexes et le texte dense.',
          '6–8 Go de VRAM → Gemma 4 E4B (6,6–9,5 Go à télécharger), Qwen3-VL 8B (6,1 Go) ou Qwen3.5 9B (6,6–7,6 Go) : le meilleur équilibre entre qualité et matériel.',
          '16–24 Go de VRAM → Gemma 4 26B A4B (16–19 Go), Gemma 4 31B (19–20 Go), Qwen3.8 27B (18 Go) ou Qwen3-VL 32B (21 Go) : qualité proche du cloud sur documents et photos.',
          'Apple M-Series ou 64+ Go → Qwen3.5 122B (81 Go) ou Llama 3.2 Vision 90B (55 Go) ; Qwen3-VL 235B exige 143 Go.',
          'Configuration : `ollama pull gemma4:e4b`, puis `ollama run gemma4:e4b "Décris cette image : ./photo.jpg"` (placez le chemin de l\'image dans le prompt).',
          'Meilleur OCR : Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — les plus solides pour extraire le texte de documents.',
          'Meilleur pour UI/captures d\'écran : InternVL 2.5 (GGUF communautaire), ou Gemma 4 si vous avez aussi besoin de l\'appel d\'outils.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Points clés', anchor: '#key-takeaways' },
      { label: 'Faits rapides', anchor: '#quick-facts' },
      { label: 'Qu\'est-ce qu\'un modèle vision-langage ?', anchor: '#what-are-vlms' },
      { label: 'Tableau comparatif des modèles', anchor: '#model-comparison' },
      { label: 'Test de précision : extraction de facture', anchor: '#invoice-accuracy-test' },
      { label: 'Support multi-images', anchor: '#multi-image-support' },
      { label: 'Configuration via Ollama (étape par étape)', anchor: '#ollama-setup' },
      { label: 'Cas d\'usage 1 : OCR et extraction de documents', anchor: '#use-case-ocr' },
      { label: 'Cas d\'usage 2 : Questions-réponses sur images', anchor: '#use-case-qa' },
      { label: 'Cas d\'usage 3 : Analyse de captures d\'écran', anchor: '#use-case-screenshot' },
      { label: 'Cas d\'usage 4 : Lecture de graphiques', anchor: '#use-case-chart' },
      { label: 'Cas d\'usage 5 : Analyse d\'images vidéo', anchor: '#use-case-video' },
      { label: 'VRAM et réalité des performances', anchor: '#vram-reality' },
      { label: 'Modèles locaux vs GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA en détail', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL, Qwen3.5 et Qwen3.8 — Meilleur OCR et multilingue', anchor: '#qwen-vl-deep-dive' },
      { label: 'Choisir son modèle de vision', anchor: '#how-to-choose' },
      { label: 'FAQ', anchor: '#faq' },
      { label: 'Sources', anchor: '#sources' },
      { label: 'Lectures complémentaires', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 est le meilleur modèle de vision local pour la plupart des développeurs en 2026.** Sous licence Apache 2.0, disponible dans Ollama en cinq tailles (E2B, E4B, 12B, 26B A4B, 31B), sa fiche modèle indique un MMMU Pro de 52,6 % (E4B) à 76,9 % (31B), contre 49,7 % pour Gemma 3 27B.',
          '**Qwen3-VL 8B, Qwen3.5 9B et Qwen3.8 27B dominent l\'OCR de documents et le texte multilingue.** Qwen3-VL 8B demande 6,1 Go de téléchargement ; Qwen3.8 27B (Apache 2.0, 18 Go) affiche 91,1 sur OmniDocBench 1.5.',
          '**Llama 3.2 Vision n\'est plus le choix par défaut sûr.** Des utilisateurs signalent « unknown model architecture: mllama » sur les versions récentes d\'Ollama (issues GitHub #16490 et #16547, aucun correctif confirmé), et sa fiche Ollama n\'a pas été mise à jour depuis environ un an.',
          '**Sous 4 Go, choisissez Qwen3.5 2B, Qwen3-VL 2B ou Moondream 2.** Tous trois sont petits et rapides, mais limités sur les scènes complexes, le texte dense et la lecture précise de graphiques.',
          '**LLaVA 1.6 fait partie des VLM locaux les mieux documentés et les plus testés par la communauté.** C\'est un choix pratique si vous avez besoin de tutoriels et d\'aide au dépannage, mais les modèles plus récents le dépassent en OCR et en qualité.',
          '**Utilisez le paramètre `format` d\'Ollama pour une sortie structurée.** Un schéma JSON contraint la réponse à vos champs pour qu\'elle s\'analyse proprement ; vérifiez malgré tout chaque valeur par rapport à la source.',
          '**Aucun modèle local n\'égale GPT-5.5 Vision sur tous les points.** Les VLM locaux en 2026 sont une solide option de niveau 2 — excellents pour les documents structurés et les photos nettes, plus faibles sur les scènes ambiguës, l\'écriture manuscrite et les infographies complexes.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Ce que font les VLM :** Entrée image + texte → sortie texte. Pas des générateurs d\'images — ces modèles *comprennent* les images.',
          '**Support Ollama :** Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, Llama 3.2 Vision, MiniCPM-V, LLaVA et Moondream sont dans la bibliothèque officielle d\'Ollama ; InternVL, PaliGemma 2 et SmolVLM nécessitent des builds communautaires.',
          '**Plus petits modèles utilisables :** Moondream 2 (1,8B, 1,7 Go à télécharger), Qwen3-VL 2B (1,9 Go) et Qwen3.5 0.8B (1,2–1,3 Go).',
          '**Plus grands modèles locaux pratiques :** Qwen3.5 122B (81 Go) et Llama 3.2 Vision 90B (55 Go) avec 64+ Go de mémoire unifiée (Apple M-Series ou multi-GPU) ; Qwen3-VL 235B exige 143 Go.',
          '**Format d\'entrée image :** JPEG, PNG, WebP. Résolution maximale variable selon le modèle (1024×1024 à 4096×4096).',
          '**Audio et vidéo :** Gemma 4 E2B, E4B et 12B acceptent aussi l\'audio ; toutes les tailles de Gemma 4 et Qwen3.8 traitent la vidéo image par image.',
          '**Précision OCR :** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**Multimodal = plus lent :** Les VLM ajoutent un encodeur visuel au LLM — ~30–60 % plus lent qu\'un modèle texte seul de même taille.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: 'Qu\'est-ce qu\'un modèle vision-langage (VLM) ?',
        content:
          'Un modèle vision-langage (VLM) est un réseau de neurones qui traite simultanément des images et du texte pour produire du texte en sortie. L\'architecture standard associe un encodeur visuel (CLIP ou SigLIP) à un décodeur de langage (un LLM), reliés par une couche de projection.',
        items: [
          '**Différence avec les générateurs d\'images :** Stable Diffusion, FLUX et DALL-E 3 génèrent des images à partir de texte. Les VLM sont des modèles image-vers-texte — ils décrivent, analysent et répondent à des questions sur les images.',
          '**Différence avec l\'OCR classique :** L\'OCR traditionnel (Tesseract) extrait du texte par reconnaissance de motifs. Les VLM comprennent le contexte — ils peuvent expliquer une table, répondre à des questions sur un graphique.',
          '**Pourquoi les exécuter localement :** Documents privés (dossiers médicaux, scans juridiques, relevés financiers), captures d\'écran propriétaires, ou workflows où l\'envoi d\'images à des API cloud soulève des problèmes de conformité.',
          '**Ce qu\'ils ne peuvent pas faire :** Générer des images, exécuter du code visible dans les captures d\'écran, ou accéder à internet.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Modèles de vision locaux disponibles — Tableau comparatif',
        content:
          'Comparaison des modèles de vision locaux les plus performants disponibles via Ollama ou en inférence directe, vérifiée le 19 octobre 2026. La colonne VRAM correspond à la taille de téléchargement Ollama (quantifiée en 4 bits sauf indication contraire) — ajoutez 1–2 Go pour le contexte. *Llama 3.2 Vision est signalé comme ne se chargeant plus sur les versions récentes d\'Ollama (voir la note sur Llama 3.2 Vision plus bas).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour 8 Go de VRAM : Gemma 4 E4B ou Qwen3-VL 8B ; pour 24 Go : Gemma 4 26B/31B ou Qwen3.8 27B — tous en local via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4 est le meilleur global ; Qwen3-VL, Qwen3.5 et Qwen3.8 dominent l\'OCR de documents et le texte multilingue ; Moondream et Qwen3.5 2B sont les options légères sous 4 Go de VRAM.',
          },
        ],
        columns: ['Modèle', 'Paramètres', 'VRAM (Q4)', 'Types d\'images', 'Qualité', 'Via Ollama ?'],
        rows: [
          { 'Modèle': 'Moondream 2', 'Paramètres': '1,8B', 'VRAM (Q4)': '~2 Go', 'Types d\'images': 'Photos simples', 'Qualité': 'Basique', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'SmolVLM 2,2B', 'Paramètres': '2,2B', 'VRAM (Q4)': '~2 Go', 'Types d\'images': 'Photos simples, légendes', 'Qualité': 'Basique+', 'Via Ollama ?': 'Communauté' },
          { 'Modèle': 'Qwen3.5 2B', 'Paramètres': '2B', 'VRAM (Q4)': '2,7–3,1 Go', 'Types d\'images': 'Photos, documents, OCR', 'Qualité': 'Bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'PaliGemma 2 3B', 'Paramètres': '3B', 'VRAM (Q4)': '~3 Go', 'Types d\'images': 'Photos, documents', 'Qualité': 'Bon', 'Via Ollama ?': 'Communauté' },
          { 'Modèle': 'Gemma 4 E2B', 'Paramètres': '2,3B eff.', 'VRAM (Q4)': '4,6–7,5 Go', 'Types d\'images': 'Photos, documents, audio', 'Qualité': 'Bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'LLaVA 1.6 7B', 'Paramètres': '7B', 'VRAM (Q4)': '~6 Go', 'Types d\'images': 'Photos, documents, graphiques', 'Qualité': 'Bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'MiniCPM-V', 'Paramètres': '8B', 'VRAM (Q4)': '~6 Go (5,5 Go à télécharger)', 'Types d\'images': 'Photos, documents, OCR', 'Qualité': 'Très bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Qwen3-VL 8B', 'Paramètres': '8B', 'VRAM (Q4)': '~6,1 Go', 'Types d\'images': 'Photos, documents, OCR, multilingue', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Qwen3.5 9B', 'Paramètres': '9B', 'VRAM (Q4)': '6,6–7,6 Go', 'Types d\'images': 'Photos, documents, OCR, multilingue', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Gemma 4 E4B', 'Paramètres': '4,5B eff.', 'VRAM (Q4)': '6,6–9,5 Go', 'Types d\'images': 'Photos, documents, audio', 'Qualité': 'Très bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Gemma 4 12B', 'Paramètres': '12B', 'VRAM (Q4)': '7,7–8,0 Go', 'Types d\'images': 'Photos, documents, audio', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'InternVL 2.5 8B', 'Paramètres': '8B', 'VRAM (Q4)': '~8 Go', 'Types d\'images': 'Documents, graphiques, UI, code', 'Qualité': 'Excellent (UI/graphiques)', 'Via Ollama ?': 'Communauté' },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'Paramètres': '11B', 'VRAM (Q4)': '~8 Go (7,8 Go à télécharger)', 'Types d\'images': 'Photos, documents', 'Qualité': 'Excellent*', 'Via Ollama ?': 'Oui*' },
          { 'Modèle': 'LLaVA 1.6 13B', 'Paramètres': '13B', 'VRAM (Q4)': '~10 Go', 'Types d\'images': 'Photos, documents, graphiques', 'Qualité': 'Très bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Gemma 4 26B A4B', 'Paramètres': '26B (4B actifs)', 'VRAM (Q4)': '16–19 Go', 'Types d\'images': 'Photos, documents, complexe', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Qwen3.8 27B', 'Paramètres': '27B', 'VRAM (Q4)': '18 Go', 'Types d\'images': 'Photos, docs, vidéo, OCR', 'Qualité': 'Meilleur (open source)', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Gemma 4 31B', 'Paramètres': '31B', 'VRAM (Q4)': '19–20 Go', 'Types d\'images': 'Photos, documents, complexe', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Qwen3-VL 32B', 'Paramètres': '32B', 'VRAM (Q4)': '21 Go', 'Types d\'images': 'Photos, documents, OCR, complexe', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Llama 3.2 Vision 90B', 'Paramètres': '90B', 'VRAM (Q4)': '55 Go', 'Types d\'images': 'Photos, documents, complexe', 'Qualité': 'Très bon*', 'Via Ollama ?': 'Oui*' },
          { 'Modèle': 'Qwen3.5 122B', 'Paramètres': '122B', 'VRAM (Q4)': '81 Go', 'Types d\'images': 'Photos, documents, complexe', 'Qualité': 'Meilleur local', 'Via Ollama ?': 'Oui' },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-fr.svg',
        imageCaption:
          'Comparaison des modèles de vision locaux par VRAM et qualité OCR : Moondream 2 fonctionne avec 2 Go, Qwen3-VL 8B domine l\'OCR documentaire à 6 Go, et Gemma 4 offre la meilleure qualité générale de 8 Go (E4B) à 24 Go (26B et 31B) via Ollama.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: 'Test de précision : extraction de facture',
        content:
          'Comparaison de la précision des VLM locaux sur une tâche d\'extraction structurée. Test : extraire 5 champs d\'une facture type (fournisseur, date, total, TVA, nombre de lignes).',
        columns: ['Modèle', 'Fournisseur', 'Date', 'Total', 'TVA', 'Lignes', 'Score'],
        rows: [
          { 'Modèle': 'Moondream 2', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✗', 'TVA': '✗', 'Lignes': '✗', 'Score': '2/5' },
          { 'Modèle': 'LLaVA 1.6 7B', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✗', 'Lignes': '✓', 'Score': '4/5' },
          { 'Modèle': 'MiniCPM-V 4.5', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
          { 'Modèle': 'Qwen3-VL 8B', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
          { 'Modèle': 'Llama 3.2 11B', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
          { 'Modèle': 'GPT-5.5 Vision', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
        ],
        callouts: [
          { type: 'note', text: 'Résultats issus d\'une seule facture test. La précision varie selon la qualité du document, la police et la complexité de la mise en page. Toujours vérifier les chiffres extraits contre le document source.' },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'Support multi-images',
        content:
          'Tous les VLM locaux n\'acceptent pas plusieurs images dans une seule requête. Ce support est utile pour le traitement de documents multi-pages et les comparaisons visuelles.',
        columns: ['Fonctionnalité', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Fonctionnalité': 'Entrée multi-images',
            'Moondream': 'Non',
            'LLaVA 7B': 'Non',
            'MiniCPM-V': 'Oui (jusqu\'à 4)',
            'Qwen3-VL': 'Oui (jusqu\'à 8)',
            'LLaVA 13B': 'Non',
            'Llama 3.2 Vision': 'Oui (multi-pages)',
            'InternVL': 'Oui',
          },
        ],
        items: [
          'MiniCPM-V accepte jusqu\'à 4 images par prompt ; Qwen3-VL jusqu\'à 8. LLaVA et Moondream n\'acceptent qu\'une image à la fois.',
          '**Quand le multi-images est utile :** Envoyer toutes les pages d\'un PDF multi-pages, comparer deux photos de produit, analyser des captures avant/après dans un seul prompt.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuration via Ollama — étape par étape',
        content:
          'Ollama est la façon la plus simple d\'exécuter des modèles de vision locaux. Après installation, les modèles de vision fonctionnent avec une seule commande pull.',
        items: [
          '**Étape 1 — Installer Ollama :** Téléchargez depuis ollama.com pour macOS, Linux ou Windows. Installation en moins de 2 minutes.',
          '**Étape 2 — Télécharger un modèle :** `ollama pull gemma4:e4b` (6,6–9,5 Go à télécharger) pour les cartes de 8 Go, `ollama pull qwen3-vl:8b` (6,1 Go) pour l\'OCR, ou `ollama pull moondream` (1,8B, 1,7 Go) pour les configs limitées en VRAM.',
          '**Étape 3 — Utiliser via CLI :** `ollama run gemma4:e4b "Qu\'y a-t-il dans cette image ? /chemin/photo.jpg"` — placez le chemin de l\'image dans le prompt ; `ollama run` n\'a pas d\'option `--image`.',
          '**Étape 4 — Utiliser l\'API HTTP :** POST vers `http://localhost:11434/api/generate` avec l\'image encodée en base64 dans le tableau `images`. Ajoutez un schéma JSON dans le champ `format` pour obtenir une sortie structurée.',
          '**Étape 5 — Exemple Python :** Utiliser la bibliothèque `requests` avec l\'encodage base64 — voir le bloc de code ci-dessous.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# Exemple d'utilisation
result = ask_vision_model("facture.png", "Extraire toutes les lignes et les montants totaux de cette facture.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-fr.svg',
        imageCaption:
          'Pipeline de configuration Ollama Vision : installer Ollama, télécharger un modèle de vision comme gemma4:e4b, l\'exécuter via la CLI avec le chemin de l\'image dans le prompt ou via l\'API HTTP sur localhost:11434, et obtenir du texte pour l\'OCR, les questions-réponses ou la description d\'image.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Cas d\'usage 1 : OCR et extraction de documents',
        content:
          '**Les VLM surpassent l\'OCR classique sur les documents semi-structurés** — factures, reçus, contrats et tableaux où la mise en page compte autant que le texte.',
        items: [
          '**Ce qui fonctionne bien :** Factures scannées, captures de PDF, notes manuscrites en lettres d\'imprimerie, tableaux avec bordures claires.',
          '**Ce qui fonctionne moins bien :** Écriture cursive, scans sous 150 DPI, JPEG très compressés, textes superposés.',
          '**Meilleurs modèles pour l\'OCR :** Qwen3-VL 8B et Qwen3.5 9B (classe 6–8 Go), Qwen3.8 27B (18 Go, 91,1 sur OmniDocBench 1.5 selon sa fiche modèle), Gemma 4 pour les types de documents mixtes.',
          '**Prompt engineering pour l\'OCR :** « Extraire tout le texte de ce document tel qu\'il est écrit. » Ou : « Retourner le contenu de cette facture en JSON avec les champs : fournisseur, date, lignes[], total. »',
          '**Vs OCR classique :** Les VLM sont plus lents mais plus sémantiques. Tesseract est plus rapide pour l\'extraction de texte brut. Utiliser les VLM pour l\'extraction de données structurées.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Cas d\'usage 2 : Questions-réponses sur images',
        content:
          '**Pour la compréhension générale de scènes, les descriptions de produits et les questions-réponses visuelles, Gemma 4 (E4B à 8 Go, 26B ou 31B à 24 Go) est le modèle local recommandé.** Il produit des descriptions naturelles et détaillées et traite les questions nuancées sur le contenu des photos.',
        items: [
          '**Description de scènes :** « Qu\'y a-t-il sur cette photo ? » — objets, personnes, activités, décor.',
          '**Catalogage de produits :** Traiter des photos avec un template : « Décrire couleur, forme, matière, état. » Utile pour l\'inventaire e-commerce sans API cloud.',
          '**Accessibilité :** Générer des textes alternatifs pour les images à grande échelle.',
          '**Meilleurs modèles :** Gemma 4 12B ou 26B A4B pour les Q&A sur photos. Qwen3.5 4B ou LLaVA 1.6 7B pour le traitement en volume, quand la vitesse prime sur la précision.',
          '**Vitesse :** La vitesse dépend du modèle, du GPU et de la longueur des descriptions — testez un échantillon de 20 images sur votre propre matériel avant de lancer un lot de milliers.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'Cas d\'usage 3 : Analyse de captures d\'écran et UI',
        content:
          '**Pour l\'analyse de captures d\'écran d\'applications et de tableaux de bord, InternVL 2.5 est le modèle local le plus performant.**',
        items: [
          '**Workflows développeur :** Envoyer des captures de messages d\'erreur : « Qu\'est-ce qui ne va pas dans cette capture et comment le corriger ? »',
          '**Génération de rapports de bugs :** Créer automatiquement des descriptions de bugs à partir de captures d\'écran.',
          '**Monitoring de tableaux de bord :** Analyser des captures pour détecter des anomalies.',
          '**Tests d\'accessibilité :** Comparer des captures avant et après des modifications UI.',
          '**Meilleurs modèles :** InternVL 2.5 8B (build communautaire, solide sur l\'UI), Gemma 4 et Qwen3-VL (support Ollama officiel, appel d\'outils pour les workflows d\'agents).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'Cas d\'usage 4 : Lecture de graphiques',
        content:
          '**Extraire des données de graphiques est possible mais nécessite un prompting soigneux.** Toujours vérifier les valeurs numériques extraites contre les données source.',
        items: [
          '**Ce qui fonctionne :** Lire les étiquettes d\'axes, identifier les tendances, comparer des hauteurs de barres.',
          '**Ce qui est peu fiable :** Extraction numérique précise sur des graphiques continus, pourcentages de diagrammes circulaires sans étiquettes.',
          '**Stratégie de prompt :** « Décris la tendance » fonctionne mieux que « Quelle est la valeur exacte en mars 2026 ? »',
          '**Meilleurs modèles :** InternVL 2.5 (compréhension solide des graphiques), Gemma 4 et Qwen3-VL (bons sur les graphiques bien étiquetés).',
          '**Limite :** Aucun VLM local n\'extrait de façon fiable des valeurs précises de graphiques complexes en 2026.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'Cas d\'usage 5 : Analyse d\'images vidéo',
        content:
          '**Les VLM locaux peuvent analyser des vidéos en traitant des images individuelles** — extraire des images avec ffmpeg, les traiter avec le modèle, puis résumer avec un LLM texte. Non temps réel : 1 image par 0,5–3 secondes.',
        items: [
          '**Extraction d\'images :** `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**Analyse image par image :** Envoyer chaque image au modèle avec un prompt cohérent.',
          '**Résumé global :** Collecter toutes les descriptions et les envoyer à un LLM texte.',
          '**Cas d\'usage :** Revue de caméras de sécurité, analyse d\'enregistrements de cours, inspection qualité en fabrication.',
          '**Meilleurs modèles :** Gemma 4 ou Qwen3.8 pour la qualité (tous deux acceptent nativement la vidéo image par image), Qwen3.5 4B ou LLaVA 1.6 7B pour la vitesse (débit d\'images plus élevé).',
          '**Réalité des performances :** À ~1–3 secondes par image, une vidéo de 10 minutes (600 images) prend environ 10–30 minutes à traiter, selon le modèle et le GPU.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("cours.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM et réalité des performances',
        content:
          'Les VLM locaux ajoutent un encodeur visuel au LLM de base, augmentant à la fois les besoins en VRAM et le temps d\'inférence.',
        columns: ['Modèle', 'VRAM (Q4)', 'Tokens/sec (RTX 4070)', 'Tokens/sec (M5 Pro 36 Go)', 'Utilisable en production ?'],
        rows: [
          { 'Modèle': 'Moondream 2 (1,8B)', 'VRAM (Q4)': '~2 Go', 'Tokens/sec (RTX 4070)': '~25–35', 'Tokens/sec (M5 Pro 36 Go)': '~30–40', 'Utilisable en production ?': 'Oui — tâches simples' },
          { 'Modèle': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 Go', 'Tokens/sec (RTX 4070)': '~15–20', 'Tokens/sec (M5 Pro 36 Go)': '~18–25', 'Utilisable en production ?': 'Oui — usage général' },
          { 'Modèle': 'MiniCPM-V (8B)', 'VRAM (Q4)': '~6 Go', 'Tokens/sec (RTX 4070)': '~12–18', 'Tokens/sec (M5 Pro 36 Go)': '~15–20', 'Utilisable en production ?': 'Oui — OCR et documents' },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 Go', 'Tokens/sec (RTX 4070)': '~10–14', 'Tokens/sec (M5 Pro 36 Go)': '~12–16', 'Utilisable en production ?': 'À vérifier : problème de chargement Ollama' },
          { 'Modèle': 'LLaVA 1.6 13B', 'VRAM (Q4)': '~10 Go', 'Tokens/sec (RTX 4070)': '~8–12', 'Tokens/sec (M5 Pro 36 Go)': '~10–14', 'Utilisable en production ?': 'Oui — avec GPU 12 Go' },
          { 'Modèle': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '~64 Go', 'Tokens/sec (RTX 4070)': 'N/A (multi-GPU ou M-Max)', 'Tokens/sec (M5 Pro 36 Go)': 'N/A (M5 Max 128 Go+)', 'Utilisable en production ?': 'Apple Silicon haut de gamme uniquement' },
        ],
        callouts: [
          { type: 'note', text: 'Les plages de tokens par seconde sont des estimations indicatives, pas de nouvelles mesures ; elles n\'ont pas été refaites pour Gemma 4, Qwen3.5 ni Qwen3.8. Testez sur votre propre matériel avec `ollama run <model> --verbose`, qui affiche le débit d\'évaluation.' },
          { type: 'note', text: 'La vitesse de génération de tokens est plus lente que pour les modèles texte seul de même taille, car l\'encodeur visuel ajoute une surcharge sur le premier token image.' },
          { type: 'note', text: 'La mémoire unifiée Apple Silicon permet d\'exécuter des modèles plus grands (Llama 3.2 Vision 90B à 55 Go ou Qwen3.5 122B à 81 Go sur un Mac de 128 Go) qui ne tiendraient pas en VRAM GPU discret. Légèrement plus lent qu\'un GPU NVIDIA équivalent, mais sans limitation de VRAM.' },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'Modèles de vision locaux vs GPT-5.5 Vision',
        content:
          'Les VLM locaux ont considérablement réduit l\'écart sur les documents structurés, mais restent en retrait sur les tâches complexes.',
        items: [
          '**Documents structurés (factures, formulaires) :** Modèles locaux à 80–90 % de la qualité GPT-5.5 — suffisant pour la production.',
          '**Scènes complexes, images ambiguës :** Modèles locaux à 50–70 % de GPT-5.5 — écart de qualité notable.',
          '**Reconnaissance de l\'écriture manuscrite :** Modèles locaux nettement plus faibles, surtout pour le cursif.',
          '**Extraction de données de graphiques :** Peu fiable sur les deux, mais GPT-5.5 plus précis sur les valeurs numériques.',
          '**Coût :** GPT-5.5 Vision à 0,01–0,03 $ par image vs 0 $ en local. 10 000 images/mois = 100–300 $ économisés.',
          '**Confidentialité :** Traitement local — aucune image n\'est envoyée aux serveurs OpenAI. La CNIL recommande le traitement local pour les données professionnelles sensibles.',
          '**Vitesse :** Modèles locaux à 10–20 tokens/sec vs GPT-5.5 à 30–80 tokens/sec, mais sans latence réseau pour le traitement par lots.',
        ],
        callouts: [
          { type: 'note', text: 'Pour le traitement de factures avec une entrée propre, les VLM locaux (Gemma 4, Qwen3-VL 8B, Qwen3.8 27B) peuvent remplacer GPT-5.5 Vision à coût zéro.' },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'LLaVA en détail',
        content:
          '**LLaVA (Large Language and Vision Assistant) est l\'architecture VLM open-source fondatrice.** Publiée par l\'Université du Wisconsin-Madison et Microsoft Research en 2023.',
        items: [
          '**Architecture :** Encodeur visuel CLIP ViT-L/14 + décodeur texte Llama-2 ou Mistral, reliés par une couche de projection linéaire.',
          '**LLaVA 1.5 vs 1.6 :** La version 1.6 (début 2024) a ajouté le support haute résolution via le découpage dynamique, améliorant significativement l\'OCR et la lecture de graphiques.',
          '**Entraînement :** Instruction-tuning sur LLaVA-Instruct-150K — conversations visuelles générées à partir de légendes d\'images.',
          '**Points forts :** Large base de connaissances, bien documenté, grande communauté, intégration Ollama étendue.',
          '**Points faibles :** OCR moins précis que Qwen3-VL et MiniCPM-V, analyse UI moins bonne qu\'InternVL 2.5, dépassé globalement par Gemma 4 et la famille Qwen3.',
          '**Pourquoi toujours recommandé :** La plus grande communauté, le plus de tutoriels et d\'exemples de prompts de tous les VLM locaux.',
          '**Avis complet :** [LLaVA : avis (2026)](/fr/power-local-llm/llava-review) — l\'avis dédié de PromptQuorum, avec la nuance de licence Apache-2.0 plus modèle de base et de vraies commandes Ollama.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL, Qwen3.5 et Qwen3.8 — Meilleur OCR et multilingue',
        content:
          '**La famille Qwen est la meilleure option ouverte pour l\'OCR de documents et le texte multilingue en 2026.** Qwen3-VL (tailles de 2B à 235B) est la gamme vision dédiée, Qwen3.5 (0.8B à 122B) intègre la vision dans le modèle de base, et Qwen3.8 27B (août 2026, Apache 2.0) est le plus récent, avec un score rapporté de 91,1 sur OmniDocBench 1.5.',
        items: [
          '**Architecture :** Résolution dynamique jusqu\'à 4096×4096 — bien supérieure à LLaVA 1.6 (672×672) ou Llama 3.2 Vision (1120×1120).',
          '**OCR multilingue :** Meilleure classe pour le chinois, japonais, coréen et anglais. Données d\'entraînement multilingues étendues.',
          '**Quelle taille :** Qwen3-VL 8B est un téléchargement de 6,1 Go et convient aux cartes de 8 Go ; Qwen3.5 9B fait 6,6–7,6 Go ; Qwen3.8 27B fait 18 Go et demande une carte de 24 Go ; Qwen3-VL 32B fait 21 Go. Qwen3-VL n\'a pas de variante 72B sur Ollama.',
          '**Installation Ollama :** `ollama pull qwen3-vl:8b`, `ollama pull qwen3.5:9b` ou `ollama pull qwen3.8` — tous dans la bibliothèque de modèles Ollama.',
          '**Multi-images :** Jusqu\'à 8 images par requête — capacité maximale de cette comparaison.',
          '**Pages des modèles :** [Qwen3-VL sur Ollama](https://ollama.com/library/qwen3-vl), [Qwen3.8-27B sur Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Choisir son modèle de vision',
        content: 'Arbre de décision basé sur le VRAM disponible :',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisir d\'abord par VRAM (2→4→8→24 Go), puis affiner par cas d\'usage (OCR, UI, Q&A général, qualité maximale).',
          },
          {
            type: 'plain-terms',
            text: 'Moins de 4 Go : Qwen3.5 2B ou Moondream. 8 Go : Gemma 4 E4B pour les photos, Qwen3-VL 8B pour les documents. 24 Go : Gemma 4 26B/31B ou Qwen3.8 27B. 64+ Go : Qwen3.5 122B.',
          },
        ],
        items: [
          '**Moins de 4 Go de VRAM :** Qwen3.5 2B (2,7–3,1 Go), Qwen3-VL 2B (1,9 Go) ou Moondream 2 (1,7 Go) sont les options pratiques. PaliGemma 2 (3B) et SmolVLM (2,2B) sont des alternatives en build communautaire. Aucun n\'est adapté à l\'OCR de texte dense.',
          '**6–8 Go de VRAM :** Gemma 4 E4B pour les Q&R générales sur photos, Qwen3-VL 8B ou Qwen3.5 9B pour l\'OCR de documents et le texte multilingue, LLaVA 1.6 7B quand le soutien de la communauté compte.',
          '**12–16 Go de VRAM :** Gemma 4 12B (7,7–8,0 Go à télécharger) est la recommandation claire — de solides scores de vision pour sa taille, avec entrée audio et fenêtre de contexte de 256K. LLaVA 1.6 13B et InternVL 2.5 8B (captures d\'écran UI et code) y tiennent aussi.',
          '**24 Go de VRAM :** Gemma 4 26B A4B (16–19 Go), Gemma 4 31B (19–20 Go), Qwen3.8 27B (18 Go) ou Qwen3-VL 32B (21 Go) — l\'option locale la plus proche de la qualité de vision du cloud.',
          '**64+ Go de mémoire unifiée (Apple M-Max/Ultra, multi-GPU) :** Qwen3.5 122B (81 Go) ou Llama 3.2 Vision 90B (55 Go) pour les plus grands modèles locaux ; tous deux exigent un matériel à forte mémoire et sont plus lents par token que les modèles de la classe 24 Go.',
          '**Toujours vérifier les chiffres :** Croiser toute valeur numérique extraite de graphiques avec les données source.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Questions fréquemment posées',
        faqs: [
          {
            q: 'Pourquoi llama3.2-vision échoue-t-il avec « unknown model architecture: mllama » ?',
            a: 'Des utilisateurs signalent cette erreur avec llama3.2-vision sur les versions récentes d\'Ollama (issues GitHub #16490 et #16547, ouvertes à la mi-2026 ; la seconde a été fermée comme doublon sans correctif confirmé). Mettre à jour Ollama ou re-télécharger le modèle n\'a pas aidé dans ces signalements. Passez à Gemma 4 ou Qwen3-VL, activement maintenus dans la bibliothèque Ollama, sauf si vous devez rester sur Llama 3.2 Vision — dans ce cas, figez une version d\'Ollama où il se charge encore.',
          },
          {
            q: 'Quel est le meilleur petit modèle vision-langage de moins de 3B paramètres ?',
            a: 'Qwen3.5 2B (2,7–3,1 Go à télécharger) et Qwen3-VL 2B (1,9 Go) sont les meilleures petites options sur Ollama ; Moondream 2 (1,8B, 1,7 Go) est le plus léger. Gemma 4 E2B (2,3B de paramètres effectifs, 4,6–7,5 Go à télécharger) ajoute l\'entrée audio. Attendez-vous à un OCR et une compréhension des scènes complexes plus faibles qu\'avec la classe 8B.',
          },
          {
            q: 'Quels modèles locaux gèrent l\'entrée caméra et microphone en direct ?',
            a: 'Gemma 4 E2B, E4B et 12B acceptent à la fois les images et l\'audio, ce qui en fait la base naturelle d\'un assistant local qui voit et entend. Le modèle seul n\'est pas un système en direct : il vous faut encore une boucle de capture (saisir des images, découper l\'audio), un chemin de reconnaissance vocale ou d\'entrée audio, et une étape de synthèse vocale pour les réponses parlées. Vérifiez que votre version du runtime transmet réellement l\'audio au modèle avant de bâtir dessus.',
          },
          {
            q: 'Comment obtenir une sortie structurée fiable à partir de captures d\'écran et de documents ?',
            a: 'Passez un schéma JSON dans le champ `format` d\'Ollama, réglez la température à 0 et ne demandez que les champs visibles dans l\'image. Cela contraint la réponse à un JSON valide avec vos clés ; cela ne rend pas les valeurs correctes, donc vérifiez chiffres et dates par rapport à la source et consignez les échecs. Les modèles plus grands (8B et plus) respectent les schémas plus régulièrement que les modèles 2B.',
          },
          {
            q: 'Quelles sont les meilleures alternatives à GPT-4V qui tournent entièrement sur l\'appareil ?',
            a: 'Gemma 4 31B (19–20 Go), Qwen3.8 27B (18 Go) et Qwen3-VL 32B (21 Go) sont les plus proches sur un GPU de 24 Go ; Gemma 4 E4B et Qwen3-VL 8B couvrent les machines de 8 Go. Tous peuvent fonctionner sans connexion internet via Ollama. Ils égalent les modèles cloud sur les documents nets et les photos, mais restent en retrait sur l\'écriture manuscrite, les scènes ambiguës et les infographies complexes.',
          },
          {
            q: 'Puis-je utiliser LLaVA ou Llama 3.2 Vision sans Ollama ?',
            a: 'Oui. Les deux peuvent être exécutés directement via llama.cpp (avec support vision), la bibliothèque transformers, ou LM Studio. Ollama est recommandé pour sa simplicité.',
          },
          {
            q: 'Llama 3.2 Vision supporte-t-il l\'entrée PDF directe ?',
            a: 'Aucun VLM local n\'accepte les PDF directement. Il faut d\'abord convertir les pages PDF en images (pdf2image, pypdfium2) et envoyer chaque page comme requête séparée.',
          },
          {
            q: 'Comment les VLM locaux se comparent-ils à GPT-5.5 Vision ?',
            a: 'GPT-5.5 Vision reste nettement meilleur sur les scènes ambiguës, l\'écriture manuscrite et les infographies complexes. Gemma 4 et Qwen3-VL s\'approchent de GPT-5.5 sur les documents structurés. Voir la comparaison complète (coût, confidentialité, vitesse) ci-dessus.',
          },
          {
            q: 'Quelle résolution d\'image supportent les VLM locaux ?',
            a: 'LLaVA 1.6 jusqu\'à 672×672 (découpage dynamique). MiniCPM-V jusqu\'à 1792×1792. Llama 3.2 Vision jusqu\'à 1120×1120. Gemma 4 et Qwen3-VL acceptent des formats et résolutions variables. Pour un meilleur OCR, envoyer des documents à 150+ DPI.',
          },
          {
            q: 'Puis-je affiner un VLM local sur mes propres images ?',
            a: 'Oui, mais plus exigeant en ressources que le fine-tuning de LLM texte. LLaVA est bien documenté pour le fine-tuning. MiniCPM-V via les scripts officiels sur Hugging Face. Pour la plupart des cas, le prompt engineering suffit.',
          },
          {
            q: 'Quel est le meilleur modèle de vision local pour 8 Go de VRAM ?',
            a: 'Gemma 4 E4B (6,6–9,5 Go à télécharger) pour l\'usage général, ou Qwen3-VL 8B (6,1 Go) si l\'OCR de documents ou le texte multilingue est le besoin principal. Les deux sont disponibles via Ollama avec une seule commande pull. Qwen3.5 9B (6,6–7,6 Go) est une troisième option.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — lequel est meilleur pour l\'OCR ?',
            a: 'MiniCPM-V est plus précis que LLaVA sur l\'OCR de documents, notamment les tableaux denses et les scans haute résolution, mais Qwen3-VL 8B est un meilleur choix OCR que les deux. LLaVA 1.6 est mieux documenté et bénéficie d\'un plus grand soutien communautaire. Notez que la page minicpm-v d\'Ollama décrit toujours MiniCPM-V 2.6 (5,5 Go) ; les versions plus récentes de MiniCPM-V nécessitent un build Hugging Face ou llama.cpp.',
          },
          {
            q: 'Les VLM locaux peuvent-ils lire l\'écriture manuscrite ?',
            a: 'Écriture en lettres d\'imprimerie : oui, avec une précision modérée sur Gemma 4, Qwen3-VL et MiniCPM-V. Écriture cursive : peu fiable sur tous les modèles locaux. GPT-5.5 Vision est nettement meilleur pour le cursif. Pour l\'OCR manuscrit cursif en production, les API cloud restent recommandées.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Fiche modèle Gemma 4 sur Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — licence Apache 2.0 de Google, modalités prises en charge par taille et résultats MMMU Pro.',
          '[Gemma 4 sur Ollama](https://ollama.com/library/gemma4) — tags, tailles de téléchargement et fenêtres de contexte.',
          '[Qwen3.8-27B sur Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — licence Apache 2.0, contexte de 262K, résultat OmniDocBench 1.5.',
          '[Qwen3.5 sur Ollama](https://ollama.com/library/qwen3.5) et [Qwen3-VL sur Ollama](https://ollama.com/library/qwen3-vl) — tailles et tailles de téléchargement.',
          '[Llama 3.2 Vision sur Ollama](https://ollama.com/library/llama3.2-vision) et [issue Ollama #16547](https://github.com/ollama/ollama/issues/16547) — fiche du modèle et erreur de chargement mllama signalée.',
          '[Page du projet LLaVA](https://llava-vl.github.io) — Fiches modèles LLaVA 1.5 et 1.6, détails d\'architecture et description du jeu de données.',
          '[MiniCPM-V sur Ollama](https://ollama.com/library/minicpm-v) et [OpenBMB sur Hugging Face](https://huggingface.co/openbmb) — fiches modèles et benchmarks OCR.',
          '[Moondream sur Ollama](https://ollama.com/library/moondream) et [Moondream sur GitHub](https://github.com/vikhyat/moondream) — téléchargement du modèle et scripts d\'inférence.',
          '[InternVL 2.5 sur Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — Fiche modèle OpenGVLab et benchmarks documents et UI.',
          '[Documentation Ollama](https://ollama.com) — Support des modèles vision, sorties structurées, référence API et bibliothèque de modèles.',
          '[PaliGemma 2 sur Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Fiche modèle PaliGemma 2 3B de Google.',
          '[SmolVLM sur Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — Fiche modèle SmolVLM de HuggingFace.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Quels modèles Ollama prennent en charge la vision ?](/fr/prompt-bites/which-ollama-models-support-vision) — réponse rapide sur les modèles de la bibliothèque Ollama qui acceptent des images, avec les besoins en VRAM.',
          '[Modèles de vision Ollama (2026)](/fr/power-local-llm/ollama-vision-models-review) — un guide pratique et concentré pour exécuter des modèles de vision spécifiquement via Ollama : syntaxe CLI/API réelle et modèles réellement présents dans sa bibliothèque.',
          '[VLM dans les cameras et sur les drones 2026](/fr/power-local-llm/vlm-video-analytics-drones-edge) -- Les bases du VLM de bureau sont ici ; pour un deploiement embarque camera/drone, voir ce guide dedie au edge computing.',
          '[Pipeline IA multimodale locale 2026](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combiner modèles de vision, STT et TTS en une stack locale complète.',
          '[Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison) — Ajouter la saisie vocale en complément de la vision.',
          '[TTS local et clonage vocal 2026](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Ajouter la synthèse vocale pour lire les réponses VLM.',
          '[Installer Ollama](/fr/local-llms/how-to-install-ollama) — Prérequis : configuration et paramétrage d\'Ollama.',
          '[Guide matériel LLM local](/fr/local-llms/local-llm-hardware-guide) — Exigences VRAM et RAM pour l\'inférence de modèles vision.',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-ja.webp',
    title: 'ベストローカルビジョンモデル2026：Gemma 4・Qwen3-VL・LLaVA & Ollamaマルチモーダルセットアップ',
    seoTitle: 'ベストローカルビジョンモデル2026：Gemma 4・Qwen3-VL & Ollama',
    intro:
      'ビジョン言語モデル（VLM）は画像とテキストを同時に処理し、テキスト出力を生成します。ドキュメントOCR、画像Q&A、スクリーンショット分析、グラフ解読をすべてローカルで実現できます。2026年、OllamaはVLMを最も簡単に実行する方法です：モデルをプル、画像を送信、説明または回答を取得。このガイドでは主要なローカルビジョンモデル（Gemma 4、Qwen3.8、Qwen3.5、Qwen3-VL、MiniCPM-V、LLaVA 1.6、Llama 3.2 Vision、Moondream 2、InternVL 2.5）を比較し、Ollamaのセットアップ手順を解説し、VRAM要件ごとに最適なユースケースを整理します。ダウンロードサイズはOllamaモデルライブラリ、品質の数値は各ベンダーのモデルカードに基づき、2026年10月19日に確認しました。',
    metaDescription:
      '2026年のOllama向けベストローカルVLM：Gemma 4、Qwen3.5、Qwen3-VL、MiniCPM-V、Moondream。モデル別VRAM、OCRおすすめ、セットアップ手順。',
    twitterDescription:
      'ベストローカルビジョンモデル2026：Gemma 4・Qwen3-VL・MiniCPM-V・LLaVA via Ollama。画像Q&A、OCR、スクリーンショット分析をオフラインで。VRAMガイドとセットアップ。',
    audience:
      'クラウドAPIなしでローカルの画像理解が必要な開発者 — ドキュメント処理、スクリーンショット分析、アクセシビリティツール、在庫システム、プライバシーに配慮した画像ワークフロー向け。',
    readTime: '11分で読める',
    educationalLevel: 'Intermediate',
    primaryTerm: 'ローカルビジョンモデル',
    targetKeywords: [
      'ローカルビジョンモデル 2026',
      'ローカル VLM おすすめ',
      'gemma 4 vision ollama',
      '3B未満 小型ビジョン言語モデル',
      'LLaVA Ollama セットアップ',
      'ビジョンモデル ローカル実行',
      'llama 3.2 vision ローカル',
      'MiniCPM-V ローカル',
      'qwen3-vl ローカル',
      'qwen3-vl ollama',
      '最高のローカルビジョンモデル',
      'オフライン画像理解',
      'ローカルマルチモーダルモデル',
      'ollama ビジョンモデル',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**ほとんどの方にとって、2026年のベストなローカルビジョンモデルはOllama経由のGemma 4（Apache 2.0）です：gemma4:e4bは8GBカードに収まり、gemma4:26bまたは31bは24GB向けです。** Googleのモデルカードによると、MMMU ProスコアはE4Bが52.6%、12Bが69.1%、26B A4Bが73.8%、31Bが76.9%で、前世代のGemma 3 27Bは49.7%です。ドキュメントOCRと多言語テキストには、Qwen3-VL 8B（6.1GBダウンロード）、Qwen3.5 9B、新しいQwen3.8 27B（18GB）が最有力です。かつての標準推奨だったLlama 3.2 Visionは、最近のOllamaバージョンでロードに失敗する（「unknown model architecture: mllama」）との報告があるため、第一候補ではなくなりました。3GB未満ならQwen3.5 2B、Qwen3-VL 2B、Moondream 2を使います。すべてのモデルはダウンロード後、インターネット接続なしで動作させることができます。',
    quickAnswerTop: {
      ja: {
        question: '2026年にOllamaで使えるベストなローカルビジョンモデルは？',
        answer:
          '2026年にOllamaで使うベストなローカルビジョンモデルは、一般的な画像理解なら**Gemma 4**（`ollama pull gemma4`）です。ドキュメントOCRと多言語テキストには**Qwen3-VL**、**Qwen3.5**、**Qwen3.8**、4GB未満のハードウェアでは**Moondream 2**または**Qwen3.5 2B**を使います。',
        bullets: [
          '4GB未満のVRAM → Qwen3.5 2B（2.7〜3.1GB）、Qwen3-VL 2B（1.9GB）、Moondream 2（1.7GB）：高速だが、複雑な画像や密なテキストは苦手。',
          '6〜8GBのVRAM → Gemma 4 E4B（6.6〜9.5GBダウンロード）、Qwen3-VL 8B（6.1GB）、Qwen3.5 9B（6.6〜7.6GB）：品質とハードウェア適合のバランスが最良。',
          '16〜24GBのVRAM → Gemma 4 26B A4B（16〜19GB）、Gemma 4 31B（19〜20GB）、Qwen3.8 27B（18GB）、Qwen3-VL 32B（21GB）：ドキュメントと写真でクラウドに近い品質。',
          'Apple M-Seriesまたは64GB以上 → Qwen3.5 122B（81GB）またはLlama 3.2 Vision 90B（55GB）。Qwen3-VL 235Bは143GBが必要。',
          'セットアップ：`ollama pull gemma4:e4b` → `ollama run gemma4:e4b "Describe this image: ./photo.jpg"`（画像パスはプロンプト内に記述）。',
          'OCR精度：Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — ドキュメントからのテキスト抽出に最強。',
          'UI/スクリーンショット：InternVL 2.5（コミュニティGGUF）、またはツール呼び出しも必要ならGemma 4。',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '重要ポイント', anchor: '#key-takeaways' },
      { label: '基本情報', anchor: '#quick-facts' },
      { label: 'ビジョン言語モデルとは？', anchor: '#what-are-vlms' },
      { label: 'モデル比較表', anchor: '#model-comparison' },
      { label: '実用精度テスト：請求書抽出', anchor: '#invoice-accuracy-test' },
      { label: 'マルチ画像サポート', anchor: '#multi-image-support' },
      { label: 'Ollamaセットアップ（ステップバイステップ）', anchor: '#ollama-setup' },
      { label: 'ユースケース1：ドキュメントOCRと抽出', anchor: '#use-case-ocr' },
      { label: 'ユースケース2：画像Q&Aと説明', anchor: '#use-case-qa' },
      { label: 'ユースケース3：スクリーンショットとUI分析', anchor: '#use-case-screenshot' },
      { label: 'ユースケース4：グラフとチャートの読み取り', anchor: '#use-case-chart' },
      { label: 'ユースケース5：動画フレーム分析', anchor: '#use-case-video' },
      { label: 'VRAMとパフォーマンスの現実', anchor: '#vram-reality' },
      { label: 'ローカルVLM vs GPT-5.5 Vision比較', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA詳細解説', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL — 最高の多言語OCR性能', anchor: '#qwen-vl-deep-dive' },
      { label: 'ビジョンモデルの選び方', anchor: '#how-to-choose' },
      { label: 'よくある質問', anchor: '#faq' },
      { label: '参考資料', anchor: '#sources' },
      { label: '関連記事', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4は2026年、ほとんどの開発者にとって最良のローカルビジョンモデルです。** Apache 2.0で、Ollamaから5サイズ（E2B、E4B、12B、26B A4B、31B）で入手でき、モデルカードのMMMU ProはE4Bの52.6%から31Bの76.9%、Gemma 3 27Bは49.7%です。',
          '**Qwen3-VL 8B、Qwen3.5 9B、Qwen3.8 27BがドキュメントOCRと多言語テキストをリードします。** Qwen3-VL 8Bは6.1GBのダウンロードで済み、Qwen3.8 27B（Apache 2.0、18GB）はOmniDocBench 1.5で91.1と報告されています。',
          '**Llama 3.2 Visionはもはや安全な標準ではありません。** 最近のOllamaバージョンで「unknown model architecture: mllama」が出るとの報告があり（GitHub issue #16490と#16547、修正は未確認）、Ollamaのリストも約1年更新されていません。',
          '**4GB未満ならQwen3.5 2B、Qwen3-VL 2B、Moondream 2を選びます。** いずれも小型で高速ですが、複雑なシーン・密なテキスト・精密なグラフ読み取りは苦手です。',
          '**LLaVA 1.6は文書化・コミュニティテストが特に充実したローカルVLMの一つです。** チュートリアルやトラブルシューティングが必要な場合は実用的な選択肢ですが、OCRと品質では新しいモデルが上回ります。',
          '**構造化出力にはOllamaの`format`パラメータを使います。** JSONスキーマを渡すと返答が指定フィールドに制約され、きれいにパースできます。それでも各値は必ず元データと照合してください。',
          '**すべてでGPT-5.5 Visionに並ぶローカルモデルはありません。** 2026年のローカルVLMは強力なTier-2の選択肢 — 構造化ドキュメントと明確な写真には優れていますが、曖昧なシーン・手書き・複雑なインフォグラフィックスには弱点があります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '基本情報',
        items: [
          '**VLMの機能：** 画像＋テキスト入力 → テキスト出力。画像生成器ではなく、画像を*理解する*モデルです。',
          '**Ollamaサポート：** Gemma 4、Qwen3.8、Qwen3.5、Qwen3-VL、Llama 3.2 Vision、MiniCPM-V、LLaVA、Moondreamは公式Ollamaライブラリにあります。InternVL、PaliGemma 2、SmolVLMはコミュニティビルドが必要です。',
          '**最小の実用モデル：** Moondream 2（1.8B、1.7GBダウンロード）、Qwen3-VL 2B（1.9GB）、Qwen3.5 0.8B（1.2〜1.3GB）。',
          '**最大の実用ローカルモデル：** Qwen3.5 122B（81GB）とLlama 3.2 Vision 90B（55GB）— 64GB以上のユニファイドメモリ（Apple M-SeriesまたはマルチGPU）向け。Qwen3-VL 235Bは143GBが必要。',
          '**画像入力形式：** JPEG、PNG、WebP。最大解像度はモデルによって異なります（通常1024×1024〜4096×4096）。',
          '**音声と動画：** Gemma 4 E2B、E4B、12Bは音声入力にも対応。すべてのGemma 4サイズとQwen3.8は動画をフレームとして処理します。',
          '**OCR精度：** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2。',
          '**マルチモーダル = 低速：** ビジョンモデルはLLMにビジョンエンコーダーを追加するため、同サイズのテキストのみモデルより〜30〜60%遅くなります。',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: 'ビジョン言語モデル（VLM）とは？',
        content:
          'ビジョン言語モデル（VLM）は画像とテキスト入力を同時に処理してテキスト出力を生成するニューラルネットワークです。標準的なアーキテクチャは、ビジョンエンコーダー（通常CLIPまたはSigLIP）と言語デコーダー（LLM）を投影層で接続し、画像特徴をLLMが理解するトークン空間にマッピングします。',
        items: [
          '**画像生成器との違い：** Stable Diffusion、FLUX、DALL-E 3はテキストから画像を生成します。VLMは画像からテキストへのモデルで、画像を説明・分析・回答します。',
          '**OCRツールとの違い：** 従来のOCR（Tesseract）はパターン認識でテキストを抽出します。VLMはコンテキストを理解し、テーブルの意味を説明したり、グラフに関する質問に答えたりできます。',
          '**ローカル実行の理由：** プライベートドキュメント（医療記録・法的スキャン・財務諸表）、独自スクリーンショット、または画像をクラウドAPIに送信することにコンプライアンス上の懸念があるワークフロー。',
          '**できないこと：** 画像生成、スクリーンショット内のコード実行、インターネットアクセス。VLMは画像に見えるものに基づいてテキスト出力のみを生成します。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: '利用可能なローカルビジョンモデル — 比較表',
        content:
          'Ollamaまたは直接推論で利用可能な主要ローカルビジョンモデルの比較（2026年10月19日確認）。VRAM列はOllamaのダウンロードサイズ（特に記載がなければ4ビット量子化）で、コンテキスト用に1〜2GBを追加してください。*Llama 3.2 Visionは最近のOllamaバージョンでロードに失敗するとの報告があります（下記のLlama 3.2 Visionに関する注記を参照）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '8GB VRAMならGemma 4 E4BまたはQwen3-VL 8B、24GBならGemma 4 26B/31BまたはQwen3.8 27B — すべてOllama経由でローカル実行可能。',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4が総合最良。Qwen3-VL・Qwen3.5・Qwen3.8がドキュメントOCRと多言語テキストをリード。MoondreamとQwen3.5 2Bは4GB未満の軽量オプション。',
          },
        ],
        columns: ['モデル', 'パラメータ', 'VRAM (Q4)', '画像タイプ', '品質', 'Ollama対応？'],
        rows: [
          { 'モデル': 'Moondream 2', 'パラメータ': '1.8B', 'VRAM (Q4)': '〜2GB', '画像タイプ': 'シンプルな写真', '品質': '基本的', 'Ollama対応？': '対応' },
          { 'モデル': 'SmolVLM 2.2B', 'パラメータ': '2.2B', 'VRAM (Q4)': '〜2GB', '画像タイプ': 'シンプルな写真・キャプション', '品質': '基本的＋', 'Ollama対応？': 'コミュニティ' },
          { 'モデル': 'Qwen3.5 2B', 'パラメータ': '2B', 'VRAM (Q4)': '2.7〜3.1GB', '画像タイプ': '写真・ドキュメント・OCR', '品質': '良好', 'Ollama対応？': '対応' },
          { 'モデル': 'PaliGemma 2 3B', 'パラメータ': '3B', 'VRAM (Q4)': '〜3GB', '画像タイプ': '写真・ドキュメント', '品質': '良好', 'Ollama対応？': 'コミュニティ' },
          { 'モデル': 'Gemma 4 E2B', 'パラメータ': '実効2.3B', 'VRAM (Q4)': '4.6〜7.5GB', '画像タイプ': '写真・ドキュメント・音声', '品質': '良好', 'Ollama対応？': '対応' },
          { 'モデル': 'LLaVA 1.6 7B', 'パラメータ': '7B', 'VRAM (Q4)': '〜6GB', '画像タイプ': '写真・ドキュメント・グラフ', '品質': '良好', 'Ollama対応？': '対応' },
          { 'モデル': 'MiniCPM-V', 'パラメータ': '8B', 'VRAM (Q4)': '〜6GB（5.5GBプル）', '画像タイプ': '写真・ドキュメント・OCR', '品質': '非常に良好', 'Ollama対応？': '対応' },
          { 'モデル': 'Qwen3-VL 8B', 'パラメータ': '8B', 'VRAM (Q4)': '〜6.1GB', '画像タイプ': '写真・ドキュメント・OCR・多言語', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Qwen3.5 9B', 'パラメータ': '9B', 'VRAM (Q4)': '6.6〜7.6GB', '画像タイプ': '写真・ドキュメント・OCR・多言語', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Gemma 4 E4B', 'パラメータ': '実効4.5B', 'VRAM (Q4)': '6.6〜9.5GB', '画像タイプ': '写真・ドキュメント・音声', '品質': '非常に良好', 'Ollama対応？': '対応' },
          { 'モデル': 'Gemma 4 12B', 'パラメータ': '12B', 'VRAM (Q4)': '7.7〜8.0GB', '画像タイプ': '写真・ドキュメント・音声', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'InternVL 2.5 8B', 'パラメータ': '8B', 'VRAM (Q4)': '〜8GB', '画像タイプ': 'ドキュメント・グラフ・UI・コード', '品質': '優秀（UI/グラフ）', 'Ollama対応？': 'コミュニティ' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'パラメータ': '11B', 'VRAM (Q4)': '〜8GB（7.8GBプル）', '画像タイプ': '写真・ドキュメント', '品質': '優秀*', 'Ollama対応？': '対応*' },
          { 'モデル': 'LLaVA 1.6 13B', 'パラメータ': '13B', 'VRAM (Q4)': '〜10GB', '画像タイプ': '写真・ドキュメント・グラフ', '品質': '非常に良好', 'Ollama対応？': '対応' },
          { 'モデル': 'Gemma 4 26B A4B', 'パラメータ': '26B（4Bアクティブ）', 'VRAM (Q4)': '16〜19GB', '画像タイプ': '写真・ドキュメント・複雑', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Qwen3.8 27B', 'パラメータ': '27B', 'VRAM (Q4)': '18GB', '画像タイプ': '写真・ドキュメント・動画・OCR', '品質': 'オープンソース最高', 'Ollama対応？': '対応' },
          { 'モデル': 'Gemma 4 31B', 'パラメータ': '31B', 'VRAM (Q4)': '19〜20GB', '画像タイプ': '写真・ドキュメント・複雑', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Qwen3-VL 32B', 'パラメータ': '32B', 'VRAM (Q4)': '21GB', '画像タイプ': '写真・ドキュメント・OCR・複雑', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Llama 3.2 Vision 90B', 'パラメータ': '90B', 'VRAM (Q4)': '55GB', '画像タイプ': '写真・ドキュメント・複雑', '品質': '非常に良好*', 'Ollama対応？': '対応*' },
          { 'モデル': 'Qwen3.5 122B', 'パラメータ': '122B', 'VRAM (Q4)': '81GB', '画像タイプ': '写真・ドキュメント・複雑', '品質': 'ローカル最高', 'Ollama対応？': '対応' },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-ja.svg',
        imageCaption:
          'VRAMとOCR品質によるローカルビジョンモデル比較: Moondream 2は2GBで動作し、Qwen3-VL 8Bは6GBで文書OCRをリードし、Gemma 4はOllama経由で8GB（E4B）から24GB（26Bと31B）まで最良の総合品質を発揮する。',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: '実用精度テスト：請求書抽出',
        content:
          '構造化ドキュメント抽出タスクにおけるローカルビジョンモデルの精度比較。テスト：同一のサンプル請求書から5フィールド（ベンダー名、日付、合計、税額、行項目数）を抽出。',
        columns: ['モデル', 'ベンダー', '日付', '合計', '税額', '行項目', 'スコア'],
        rows: [
          { 'モデル': 'Moondream 2', 'ベンダー': '✓', '日付': '✓', '合計': '✗', '税額': '✗', '行項目': '✗', 'スコア': '2/5' },
          { 'モデル': 'LLaVA 1.6 7B', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✗', '行項目': '✓', 'スコア': '4/5' },
          { 'モデル': 'MiniCPM-V 4.5', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
          { 'モデル': 'Qwen3-VL 8B', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
          { 'モデル': 'Llama 3.2 11B', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
          { 'モデル': 'GPT-5.5 Vision', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
        ],
        callouts: [
          { type: 'note', text: '単一のテスト請求書による結果です。精度はドキュメント品質・フォント・レイアウトの複雑さによって異なります。抽出した数値は必ず元のドキュメントと照合してください。' },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'マルチ画像サポート',
        content:
          '1回のリクエストで複数の画像を受け付けないローカルVLMもあります。マルチ画像サポートは複数ページのPDF処理や視覚的な比較タスクに重要です。',
        columns: ['機能', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            '機能': 'マルチ画像入力',
            'Moondream': '非対応',
            'LLaVA 7B': '非対応',
            'MiniCPM-V': '対応（最大4枚）',
            'Qwen3-VL': '対応（最大8枚）',
            'LLaVA 13B': '非対応',
            'Llama 3.2 Vision': '対応（複数ページ）',
            'InternVL': '対応',
          },
        ],
        items: [
          'MiniCPM-Vは1プロンプトで最大4枚の画像を受け付け、Qwen3-VLは最大8枚に対応。LLaVAとMoondreamは1リクエストにつき1枚のみです。',
          '**マルチ画像が重要な場面：** 複数ページのPDFの全ページを送信して完全なドキュメント抽出、2つの商品写真を並べて比較、1つのプロンプトでビフォー・アフターのスクリーンショットを分析。',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollamaセットアップ — ステップバイステップ',
        content:
          'Ollamaはローカルビジョンモデルを実行する最も簡単な方法です。インストール後、単一のpullコマンドでビジョンモデルが利用可能になります。',
        items: [
          '**ステップ1 — Ollamaをインストール：** macOS・Linux・Windows用をollama.comからダウンロード。インストールは2分以内。',
          '**ステップ2 — ビジョンモデルをダウンロード：** 8GBカードには`ollama pull gemma4:e4b`（6.6〜9.5GBダウンロード）、OCRには`ollama pull qwen3-vl:8b`（6.1GB）、VRAMが少ない場合は`ollama pull moondream`（1.8B、1.7GB）。',
          '**ステップ3 — CLIで使用：** `ollama run gemma4:e4b "What is in this image? /path/to/photo.jpg"` — 画像パスはプロンプト内に記述します。`ollama run`に`--image`フラグはありません。',
          '**ステップ4 — HTTP APIで使用：** `http://localhost:11434/api/generate`にPOSTし、`images`配列にBase64エンコードされた画像を含める。`format`フィールドにJSONスキーマを追加すると構造化出力を得られます。',
          '**ステップ5 — Pythonの例：** Base64エンコーディングで`requests`ライブラリを使用 — 以下のコードブロックを参照。',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# 使用例
result = ask_vision_model("invoice.png", "この請求書からすべての行項目と合計金額を抽出してください。")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-ja.svg',
        imageCaption:
          'Ollamaビジョンモデルのセットアップパイプライン: Ollamaをインストールし、gemma4:e4bなどのビジョンモデルを取得し、プロンプト内に画像パスを指定したCLIまたはlocalhost:11434のHTTP API経由で実行し、OCR・Q&A・画像説明用のテキスト出力を得る。',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'ユースケース1：ドキュメントOCRと抽出',
        content:
          '**VLMは半構造化ドキュメントで従来のOCRを上回ります** — レイアウトとテキストが同様に重要な請求書・レシート・契約書・テーブルなど。',
        items: [
          '**うまく機能するもの：** スキャンした請求書・PDFスクリーンショット・手書きのブロック体メモ・明確な境界線のあるテーブル・名刺。',
          '**うまく機能しないもの：** 手書きの草書体・150DPI未満のスキャン・高圧縮JPEG・重なり合うテキスト。',
          '**OCRに最適なモデル：** Qwen3-VL 8BとQwen3.5 9B（6〜8GBクラス）、Qwen3.8 27B（18GB、モデルカードによるとOmniDocBench 1.5で91.1）、混合ドキュメントタイプにはGemma 4。',
          '**OCR向けプロンプトエンジニアリング：** 「このドキュメントのすべてのテキストを改行を保持して正確に抽出してください。」または「この請求書の内容をJSONで返してください（フィールド：ベンダー、日付、行項目[]、合計）。」',
          '**従来のOCRとの比較：** VLMは低速ですが意味的に強力です。クリーンなドキュメントの純粋なテキスト抽出にはTesseractが高速です。構造化データ抽出が必要な場合はVLMを使用。',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'ユースケース2：画像Q&Aと説明',
        content:
          '**一般的なシーン理解・商品説明・視覚的Q&Aには、Gemma 4（8GBならE4B、24GBなら26Bまたは31B）が推奨されるローカルモデルです。** 自然で詳細な説明を生成し、写真の内容に関する微妙な質問にも対応します。',
        items: [
          '**シーン説明：** 「この写真には何がありますか？」— オブジェクト・人物・活動・設定・雰囲気。',
          '**商品カタログ化：** プロンプトテンプレートで商品写真を処理：「この商品を説明してください：色・形・素材・状態。」クラウドAPIなしでECインベントリに有用。',
          '**アクセシビリティ：** 大規模に画像のaltテキストを生成。',
          '**最適なモデル：** Gemma 4 12BまたはGemma 4 26B A4B（一般的な写真Q&A）。Qwen3.5 4BまたはLLaVA 1.6 7B（速度が精度より重要な大量処理）。',
          '**速度の考慮：** 速度はモデル・GPU・説明の長さによって異なります — 数千枚のバッチを始める前に、自分のハードウェアで20枚程度のサンプルをベンチマークしてください。',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'ユースケース3：スクリーンショットとUI分析',
        content:
          '**アプリケーションのスクリーンショット・エラーメッセージ・ダッシュボードの分析には、InternVL 2.5が最強のローカルモデルです。**',
        items: [
          '**開発者ワークフロー：** エラーメッセージのスクリーンショットをモデルに送る：「このスクリーンショットの何が問題で、どう修正しますか？」',
          '**バグレポート生成：** 構造化プロンプトを使ってスクリーンショットから自動的にバグレポートの説明を生成。',
          '**ダッシュボードモニタリング：** モニタリングダッシュボードのスクリーンショットを分析して異常を検出。',
          '**アクセシビリティテスト：** UI変更前後のスクリーンショットを比較して視覚的アクセシビリティを確認。',
          '**最適なモデル：** InternVL 2.5 8B（コミュニティビルド、UIに強い）、Gemma 4とQwen3-VL（公式Ollamaサポート、エージェントワークフロー向けのツール呼び出し対応）。',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'ユースケース4：グラフとチャートの読み取り',
        content:
          '**棒グラフ・折れ線グラフ・テーブルからデータを抽出することは可能ですが、慎重なプロンプティングが必要です。** すべてのローカルVLMはグラフ読み取りで写真説明より弱く、抽出した数値は必ずソースデータと照合してください。',
        items: [
          '**機能するもの：** 軸ラベルの読み取り・傾向の特定・相対的なバーの高さの比較・明確なフォントのテーブル値の読み取り。',
          '**信頼性が低いもの：** 連続グラフからの精密な数値抽出・ラベルなしの円グラフのパーセンテージ。',
          '**プロンプト戦略：** 「この折れ線グラフに示されている傾向を説明してください」は「2026年3月の正確な値は？」より効果的。',
          '**グラフに最適なモデル：** InternVL 2.5（強力なグラフ理解）、Gemma 4とQwen3-VL（明確にラベルされたグラフに良好）。',
          '**制限の注意：** 2026年時点で、視覚的に複雑なグラフから精密な数値を確実に抽出できるローカルVLMはありません。',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'ユースケース5：動画フレーム分析',
        content:
          '**ローカルビジョンモデルは個別フレームを処理することで動画を分析できます** — ffmpegでフレームを抽出し、ビジョンモデルで処理し、テキストLLMでフレーム全体をサマリー。リアルタイムではなく、モデルとハードウェアに応じて1フレームあたり0.5〜3秒かかります。',
        items: [
          '**フレーム抽出：** `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`（1fpsで抽出）',
          '**フレームごとの分析：** 一貫したプロンプトで各フレームをビジョンモデルに送信（例：「このフレームで起きていることを1文で説明してください」）。',
          '**クロスフレームのサマリー：** すべてのフレーム説明を収集してテキストLLMにサマリープロンプトと共に渡す。',
          '**ユースケース：** セキュリティカメラレビュー（異常なアクティビティのフレームにフラグ）、講義録画分析（スライドごとのノート生成）、製造品質検査（欠陥のあるフレームにフラグ）。',
          '**動画フレームに最適なモデル：** Gemma 4またはQwen3.8（品質 — どちらも動画をフレームとしてネイティブに受け付けます）、Qwen3.5 4BまたはLLaVA 1.6 7B（速度・高フレームスループット）。',
          '**速度の現実：** 1フレーム/秒の抽出と1フレームあたり〜1〜3秒の推論では、10分の動画（600フレーム）の処理にモデルとGPUに応じて約10〜30分かかります。',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("lecture.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAMとパフォーマンスの現実',
        content:
          'ローカルビジョンモデルはベースLLMにビジョンエンコーダーを追加するため、テキストのみのモデルと比べてVRAM要件と推論時間の両方が増加します。',
        columns: ['モデル', 'VRAM (Q4)', 'トークン/秒 (RTX 4070)', 'トークン/秒 (M5 Pro 36GB)', '本番対応？'],
        rows: [
          { 'モデル': 'Moondream 2 (1.8B)', 'VRAM (Q4)': '〜2GB', 'トークン/秒 (RTX 4070)': '〜25〜35', 'トークン/秒 (M5 Pro 36GB)': '〜30〜40', '本番対応？': 'はい — 単純なタスクに' },
          { 'モデル': 'LLaVA 1.6 7B', 'VRAM (Q4)': '〜6GB', 'トークン/秒 (RTX 4070)': '〜15〜20', 'トークン/秒 (M5 Pro 36GB)': '〜18〜25', '本番対応？': 'はい — 汎用' },
          { 'モデル': 'MiniCPM-V (8B)', 'VRAM (Q4)': '〜6GB', 'トークン/秒 (RTX 4070)': '〜12〜18', 'トークン/秒 (M5 Pro 36GB)': '〜15〜20', '本番対応？': 'はい — OCRとドキュメント' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '〜8GB', 'トークン/秒 (RTX 4070)': '〜10〜14', 'トークン/秒 (M5 Pro 36GB)': '〜12〜16', '本番対応？': 'まずOllamaのロード問題を確認' },
          { 'モデル': 'LLaVA 1.6 13B', 'VRAM (Q4)': '〜10GB', 'トークン/秒 (RTX 4070)': '〜8〜12', 'トークン/秒 (M5 Pro 36GB)': '〜10〜14', '本番対応？': 'はい — 12GB GPUで' },
          { 'モデル': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '〜64GB', 'トークン/秒 (RTX 4070)': 'N/A（マルチGPUまたはM-Max）', 'トークン/秒 (M5 Pro 36GB)': 'N/A（M5 Max 128GB+が必要）', '本番対応？': 'ハイエンドApple Siliconのみ' },
        ],
        callouts: [
          { type: 'note', text: 'トークン/秒の範囲は目安の推定値であり、新たな測定ではありません。Gemma 4、Qwen3.5、Qwen3.8では再計測していません。評価速度を表示する`ollama run <model> --verbose`で、ご自身のハードウェアでベンチマークしてください。' },
          { type: 'note', text: 'ビジョンモデルのトークン生成速度は、ビジョンエンコーダーが最初の画像トークンで大きな計算オーバーヘッドを追加するため、同サイズのテキストのみモデルより遅くなります。' },
          { type: 'note', text: 'Apple Siliconのユニファイドメモリにより、ディスクリートGPU VRAMに収まらない大きなモデル（128GBのMacでLlama 3.2 Vision 90Bは55GB、Qwen3.5 122Bは81GB）を実行できます。NVIDIA GPUと比べて若干遅いですが、VRAM制限がありません。' },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'ローカルVLM vs GPT-5.5 Vision比較',
        content:
          'ローカルVLMは構造化ドキュメントでのギャップを大幅に縮めましたが、複雑で曖昧なタスクではGPT-5.5 Visionに後れを取っています。',
        items: [
          '**構造化ドキュメント（請求書・フォーム）：** ローカルモデルはGPT-5.5品質の80〜90% — クリーンでフォーマットが整ったドキュメントなら本番使用に十分。',
          '**複雑なシーン・曖昧な画像：** ローカルモデルはGPT-5.5の50〜70% — 珍しいコンテキスト・照明・曖昧なコンテンツで明確な品質差。',
          '**手書き認識：** ローカルモデルは特に草書体で著しく弱い。GPT-5.5 Visionは手書きを大幅に良く処理。',
          '**グラフデータ抽出：** 両方で信頼性が低いが、GPT-5.5は正確な数値でより精確。',
          '**コスト：** GPT-5.5 Vision：1枚あたり$0.01〜$0.03 vs ローカルは$0。月10,000枚 = $100〜$300の節約。',
          '**プライバシー：** ローカルモデルは既定でデバイス上で画像を処理する — クラウド機能や接続型ツールを有効にしない限り、画像はクラウドAPIに送信されない。GPT-5.5は画像をOpenAIサーバーに送信。',
          '**速度：** ローカルモデル10〜20トークン/秒 vs GPT-5.5 30〜80トークン/秒、ただしローカルはバッチ処理でネットワーク遅延なし。',
        ],
        callouts: [
          { type: 'note', text: 'クリーンな入力での請求書・フォーム処理なら、ローカルVLM（Gemma 4、Qwen3-VL 8B、Qwen3.8 27B）がGPT-5.5 Visionをゼロコストで代替できます。手書きや複雑なシーン分析にはGPT-5.5が依然として優位です。' },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'LLaVA詳細解説',
        content:
          '**LLaVA（Large Language and Vision Assistant）は基盤となるオープンソースVLMアーキテクチャです。** 2023年にウィスコンシン大学マディソン校とMicrosoft Researchによって公開されました。',
        items: [
          '**アーキテクチャ：** CLIP ViT-L/14ビジョンエンコーダー + Llama-2またはMistralテキストデコーダー、シンプルな線形投影層で接続。',
          '**LLaVA 1.5 vs 1.6：** バージョン1.6（2024年初頭）は動的パッチングによる高解像度入力サポートを追加し、OCRとグラフ読み取り精度を大幅に向上。',
          '**トレーニング：** LLaVA-Instruct-150Kでインストラクションチューニング — 画像キャプションと物体検出アノテーションから生成された視覚的会話データセット。',
          '**強み：** 幅広い一般知識・充実したドキュメント・大きなコミュニティ・豊富なOllama統合。',
          '**弱み：** Qwen3-VLやMiniCPM-VよりOCRが弱く、InternVL 2.5よりUI分析が劣り、Gemma 4とQwen3ファミリーに全体的に上回られている。',
          '**それでも推奨される理由：** すべてのローカルVLMの中で最大のコミュニティ・最多のチュートリアル・最多のプロンプト例を持つ。問題が発生した時にサポートが見つけやすい。',
          '**詳細レビュー：** [LLaVAレビュー(2026)](/ja/power-local-llm/llava-review) — Apache-2.0とベースモデルライセンスの微妙な違い、実際のOllamaコマンドを含むPromptQuorumの専用レビュー。',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL・Qwen3.5・Qwen3.8 — 最高の多言語OCR性能',
        content:
          '**Qwenファミリーは、2026年のドキュメントOCRと多言語テキストで最強のオープン選択肢です。** Qwen3-VL（2Bから235Bのサイズ）は専用のビジョンライン、Qwen3.5（0.8Bから122B）はベースモデルにビジョンを統合、Qwen3.8 27B（2026年8月、Apache 2.0）は最新で、OmniDocBench 1.5で91.1と報告されています。',
        items: [
          '**アーキテクチャ：** 4096×4096までの動的解像度サポート — LLaVA 1.6（672×672）やLlama 3.2 Vision（1120×1120）より大幅に高い。高DPIスキャンをダウンサンプリングなしで読み取り可能。',
          '**多言語OCR：** 中国語・日本語・韓国語・英語のOCRでクラス最高。大規模な多言語ドキュメントコーパスを含むトレーニングデータが、非英語ドキュメントでLLaVAやLlama 3.2 Visionに対して大きな優位性をもたらす。',
          '**どのサイズを選ぶか：** Qwen3-VL 8Bは6.1GBのダウンロードで8GBカード向け。Qwen3.5 9Bは6.6〜7.6GB。Qwen3.8 27Bは18GBで24GBカードが必要。Qwen3-VL 32Bは21GB。OllamaにQwen3-VLの72Bバリアントはありません。',
          '**Ollamaインストール：** `ollama pull qwen3-vl:8b`、`ollama pull qwen3.5:9b`、または`ollama pull qwen3.8` — いずれもOllamaモデルライブラリにあります。',
          '**マルチ画像サポート：** 1リクエストで最大8枚 — この比較で最高のマルチ画像容量。',
          '**モデルページ：** [OllamaのQwen3-VL](https://ollama.com/library/qwen3-vl)、[Hugging FaceのQwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'ビジョンモデルの選び方',
        content: 'VRAMを最初の基準にしたローカルビジョンモデル選択のデシジョンツリー：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'まずVRAMで選択（2→4→8→24GB）、次にユースケースで絞り込む（OCR・UI・一般Q&A・最高品質）。',
          },
          {
            type: 'plain-terms',
            text: '4GB未満：Qwen3.5 2BまたはMoondream。8GB：写真にはGemma 4 E4B、ドキュメントにはQwen3-VL 8B。24GB：Gemma 4 26B/31BまたはQwen3.8 27B。64GB以上：Qwen3.5 122B。',
          },
        ],
        items: [
          '**4GB未満のVRAM：** Qwen3.5 2B（2.7〜3.1GB）、Qwen3-VL 2B（1.9GB）、Moondream 2（1.7GB）が実用的な選択肢。PaliGemma 2（3B）とSmolVLM（2.2B）はコミュニティビルドの代替です。密なテキストOCRにはいずれも不向き。',
          '**6〜8GBのVRAM：** 一般的な写真Q&AにはGemma 4 E4B、ドキュメントOCRと多言語テキストにはQwen3-VL 8BまたはQwen3.5 9B、コミュニティサポートが重要ならLLaVA 1.6 7B。',
          '**12〜16GBのVRAM：** Gemma 4 12B（7.7〜8.0GBダウンロード）が明確な推奨 — サイズの割に高いビジョンスコア、音声入力、256Kコンテキストウィンドウを備えます。LLaVA 1.6 13BとInternVL 2.5 8B（UIとコードのスクリーンショット）も収まります。',
          '**24GBのVRAM：** Gemma 4 26B A4B（16〜19GB）、Gemma 4 31B（19〜20GB）、Qwen3.8 27B（18GB）、Qwen3-VL 32B（21GB） — クラウド級のビジョン品質に最も近いローカルオプション。',
          '**64GB以上のユニファイドメモリ（Apple M-Max/Ultra、マルチGPU）：** 最大級のローカルモデルとしてQwen3.5 122B（81GB）またはLlama 3.2 Vision 90B（55GB）。どちらも高メモリのハードウェアが必要で、24GBクラスのモデルよりトークンあたりが低速です。',
          '**数値は必ず検証：** モデルに関わらず、グラフやテーブルから抽出した数値は必ずソースデータと照合。ローカルVLMは視覚的グラフから精密な数値を幻覚することがあります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
          {
            q: 'llama3.2-visionが「unknown model architecture: mllama」で失敗するのはなぜですか？',
            a: '最近のOllamaバージョンのllama3.2-visionでこのエラーが出るとの報告があります（GitHub issue #16490と#16547、2026年半ばに起票。後者は重複として閉じられ、修正は未確認）。報告ではOllamaの更新やモデルの再プルでは解決しませんでした。Llama 3.2 Visionに留まる必要がなければ、Ollamaライブラリで積極的にメンテナンスされているGemma 4またはQwen3-VLに切り替えてください。どうしても必要な場合は、まだロードできるOllamaバージョンに固定します。',
          },
          {
            q: '3Bパラメータ未満で最良の小型ビジョン言語モデルは？',
            a: 'Ollamaで最強の小型オプションはQwen3.5 2B（2.7〜3.1GBダウンロード）とQwen3-VL 2B（1.9GB）で、最軽量はMoondream 2（1.8B、1.7GB）です。Gemma 4 E2B（実効パラメータ2.3B、4.6〜7.5GBダウンロード）は音声入力を追加します。8Bクラスと比べると、OCRと複雑なシーンの理解は弱くなります。',
          },
          {
            q: 'ライブのカメラ・マイク入力を扱えるローカルモデルは？',
            a: 'Gemma 4 E2B、E4B、12Bは画像と音声の両方を受け付けるため、見て聞けるローカルアシスタントの基盤に向いています。ただしモデル単体はライブシステムではありません。キャプチャループ（フレーム取得、音声のチャンク化）、音声認識または音声入力の経路、音声で返答するための音声合成が別途必要です。構築前に、お使いのランタイムのバージョンが実際にモデルへ音声を渡すか確認してください。',
          },
          {
            q: 'スクリーンショットやドキュメントから信頼できる構造化出力を得るには？',
            a: 'Ollamaの`format`フィールドにJSONスキーマを渡し、temperatureを0に設定し、画像に見えるフィールドだけを求めます。これにより返答は指定キーを持つ有効なJSONに制約されますが、値が正しくなるわけではありません。数値や日付は元データと照合し、失敗はログに残してください。スキーマへの追従は、2Bモデルより8B以上の大きなモデルの方が安定しています。',
          },
          {
            q: '完全にデバイス上で動くGPT-4Vの代替は？',
            a: '24GB GPUではGemma 4 31B（19〜20GB）、Qwen3.8 27B（18GB）、Qwen3-VL 32B（21GB）が最も近く、8GBのマシンはGemma 4 E4BとQwen3-VL 8Bがカバーします。いずれもOllama経由でオフライン動作します。クリーンなドキュメントと写真ではクラウドモデルに匹敵しますが、手書き・曖昧なシーン・複雑なインフォグラフィックスでは劣ります。',
          },
          {
            q: 'LLaVAやLlama 3.2 VisionはOllamaなしで使えますか？',
            a: 'はい。llama.cpp（ビジョンサポート付き）、transformersライブラリ（適切なモデルカード使用）、またはLM Studio（ビジョンモデルのGUI付き）を使って直接実行できます。Ollamaはシンプルさのために推奨されます。',
          },
          {
            q: 'Llama 3.2 VisionはPDF入力を直接サポートしていますか？',
            a: 'PDFを直接受け付けるローカルVLMはありません。まずPDFページを画像に変換（pdf2image、pypdfium2等）し、各ページを別個の画像リクエストとして送信する必要があります。',
          },
          {
            q: 'ローカルビジョンモデルはGPT-5.5 Visionとどう比較されますか？',
            a: 'GPT-5.5 Visionは曖昧なシーン・手書き・複雑なインフォグラフィックスで依然として大幅に優れています。Gemma 4とQwen3-VLは構造化ドキュメントでGPT-5.5に近づきますが、曖昧な画像での推論には後れを取ります。コスト・プライバシー・速度の詳細な比較は上記を参照してください。',
          },
          {
            q: 'ローカルVLMはどの画像解像度をサポートしていますか？',
            a: 'LLaVA 1.6は動的パッチングで最大672×672。MiniCPM-Vは最大1792×1792 — 高DPIドキュメントスキャンでLLaVAを上回る理由の一つ。Llama 3.2 Visionは最大1120×1120。Gemma 4とQwen3-VLは可変のアスペクト比と解像度を受け付けます。最良のOCR結果のためにドキュメント画像は150+ DPIで送信してください。',
          },
          {
            q: 'ローカルビジョンモデルを独自の画像でファインチューニングできますか？',
            a: 'はい、ただしVLMのファインチューニングはテキストのみのLLMより資源集約的です。LLaVAのファインチューニングはオリジナルのトレーニングコードベースを使って文書化されています。MiniCPM-VはHugging Faceの公式スクリプトでファインチューニングをサポート。ほとんどのユースケースにはプロンプトエンジニアリングだけで十分です。',
          },
          {
            q: '8GB VRAMに最適なローカルビジョンモデルは？',
            a: '一般使用にはGemma 4 E4B（6.6〜9.5GBダウンロード）、ドキュメントOCRや多言語テキストが主な用途ならQwen3-VL 8B（6.1GB）。両方ともOllamaで単一コマンドで利用可能です。Qwen3.5 9B（6.6〜7.6GB）が3つ目の選択肢です。',
          },
          {
            q: 'LLaVA vs MiniCPM-V — OCRにはどちらが優れていますか？',
            a: 'MiniCPM-VはドキュメントOCR、特に密なテーブルと高DPIスキャンでLLaVAより精確ですが、OCRではQwen3-VL 8Bの方がどちらよりも強力な選択です。LLaVA 1.6はより文書化されていてコミュニティサポートが充実しています。なお、Ollamaのminicpm-vページは今もMiniCPM-V 2.6（5.5GB）を説明しており、新しいMiniCPM-VのリリースにはHugging Faceまたはllama.cppのビルドが必要です。',
          },
          {
            q: 'ローカルビジョンモデルは手書きを読めますか？',
            a: '活字体の手書き（ブロック体）：Gemma 4、Qwen3-VL、MiniCPM-Vで中程度の精度で認識可能。草書体：すべてのローカルモデルで信頼性が低い。GPT-5.5 Visionは草書体で大幅に優れています。草書体ドキュメントの本番手書きOCRにはクラウドAPIが依然として推奨されます。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          '[Hugging FaceのGemma 4モデルカード](https://huggingface.co/google/gemma-4-31B-it) — GoogleのApache 2.0ライセンス、サイズ別の対応モダリティ、MMMU Proの結果。',
          '[OllamaのGemma 4](https://ollama.com/library/gemma4) — タグ、ダウンロードサイズ、コンテキストウィンドウ。',
          '[Hugging FaceのQwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0ライセンス、262Kコンテキスト、OmniDocBench 1.5の結果。',
          '[OllamaのQwen3.5](https://ollama.com/library/qwen3.5)と[OllamaのQwen3-VL](https://ollama.com/library/qwen3-vl) — サイズとダウンロードサイズ。',
          '[OllamaのLlama 3.2 Vision](https://ollama.com/library/llama3.2-vision)と[Ollama issue #16547](https://github.com/ollama/ollama/issues/16547) — リストと、報告されているmllamaロードエラー。',
          '[LLaVAプロジェクトページ](https://llava-vl.github.io) — LLaVA 1.5・1.6モデルカード、アーキテクチャの詳細、トレーニングデータセットの説明。',
          '[OllamaのMiniCPM-V](https://ollama.com/library/minicpm-v)と[Hugging FaceのOpenBMB](https://huggingface.co/openbmb) — モデルカードとOCRベンチマーク。',
          '[OllamaのMoondream](https://ollama.com/library/moondream)と[GitHubのMoondream](https://github.com/vikhyat/moondream) — モデルダウンロードと推論スクリプト。',
          '[Hugging FaceのInternVL 2.5](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLabモデルカード、ドキュメントとUIタスクのベンチマーク。',
          '[Ollamaドキュメント](https://ollama.com) — ビジョンモデルサポート、構造化出力、APIリファレンス、モデルライブラリ。',
          '[Hugging FaceのPaliGemma 2](https://huggingface.co/google/paligemma2-3b-pt-448) — GoogleのPaliGemma 2 3Bモデルカード。',
          '[Hugging FaceのSmolVLM](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFaceのSmolVLMモデルカードと推論手順。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[Ollamaでビジョンをサポートするモデルは？](/ja/prompt-bites/which-ollama-models-support-vision) — 画像を受け付けるOllamaライブラリのモデルをVRAM仕様付きで簡潔に回答。',
          '[Ollamaビジョンモデル(2026)](/ja/power-local-llm/ollama-vision-models-review) — Ollama経由でビジョンモデルを実行するための実践ガイド。実際のCLI/API構文と、ライブラリに実際にあるモデルを解説。',
          '[カメラとドローンにおけるVLM 2026](/ja/power-local-llm/vlm-video-analytics-drones-edge) -- デスクトップVLMの基礎はこちら。組み込みカメラ・ドローン展開についてはこのエッジ向けガイドを参照。',
          '[ローカルマルチモーダルAIパイプライン2026](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — ビジョンモデルとSTT・TTSを組み合わせた完全なローカルマルチモーダルスタック。',
          '[ローカル音声認識2026：Whisper.cpp vs faster-whisper](/ja/power-local-llm/local-whisper-stt-comparison) — ビジョン出力を補完する音声入力の追加。',
          '[ローカルTTSと音声クローニング2026](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — VLMの応答を読み上げる音声出力の追加。',
          '[Ollamaのインストール](/ja/local-llms/how-to-install-ollama) — 前提条件：OllamaのセットアップとConfiguration。',
          '[ローカルLLMハードウェアガイド](/ja/local-llms/local-llm-hardware-guide) — ビジョンモデル推論のVRAMとRAM要件。',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-zh.webp',
    title: '2026年最佳本地视觉模型：Gemma 4、Qwen3-VL、LLaVA与Ollama多模态配置',
    seoTitle: '2026年最佳本地视觉模型：Gemma 4、Qwen3-VL与Ollama',
    intro:
      '视觉语言模型（VLM）同时接受图像和文本输入，输出文本内容——支持文档OCR、图像问答、截图分析和图表解读，全部在本地完成。2026年，通过Ollama运行VLM是最简便的方式：拉取模型、发送图像、获取描述或答案。本指南对比主要本地视觉模型（Gemma 4、Qwen3.8、Qwen3.5、Qwen3-VL、MiniCPM-V、LLaVA 1.6、Llama 3.2 Vision、Moondream 2、InternVL 2.5），提供Ollama逐步配置说明，并按VRAM要求为每个模型匹配最佳用例。下载大小来自Ollama模型库，质量数据来自各厂商的模型卡，核查日期为2026年10月19日。',
    metaDescription:
      '2026年Ollama最佳本地VLM：Gemma 4、Qwen3.5、Qwen3-VL、MiniCPM-V、Moondream。各模型VRAM需求、OCR推荐与配置步骤。',
    twitterDescription:
      '2026年最佳本地视觉模型：通过Ollama运行Gemma 4、Qwen3-VL、MiniCPM-V、LLaVA。图像问答、OCR、截图分析，离线运行。VRAM指南与配置。',
    readTime: '阅读约11分钟',
    targetKeywords: [
      '本地视觉模型 2026',
      '最佳本地VLM',
      'gemma 4 vision ollama',
      '3B以下小型视觉语言模型',
      'LLaVA Ollama 配置',
      '本地运行视觉模型',
      'qwen3-vl ollama',
      '最佳本地视觉模型',
      'ollama 视觉模型',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '4 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**对大多数人来说，通过Ollama运行Gemma 4（Apache 2.0）是2026年最佳本地视觉模型：gemma4:e4b适合8 GB显卡，gemma4:26b或31b适合24 GB。** 谷歌模型卡给出的MMMU Pro得分为：E4B 52.6%、12B 69.1%、26B A4B 73.8%、31B 76.9%，上一代Gemma 3 27B为49.7%。文档OCR和多语言文本方面，Qwen3-VL 8B（下载6.1 GB）、Qwen3.5 9B以及较新的Qwen3.8 27B（18 GB）是最强选择。Llama 3.2 Vision曾是默认推荐，但有用户报告其在较新版本的Ollama上无法加载（“unknown model architecture: mllama”），因此不再是首选。3 GB以下可用Qwen3.5 2B、Qwen3-VL 2B或Moondream 2。所有模型下载后均可在无互联网连接的情况下运行。',
    quickAnswerTop: {
      zh: {
        question: '2026年哪些本地视觉模型最适合与Ollama配合使用？',
        answer:
          '2026年Ollama上最佳本地视觉模型是**Gemma 4**（`ollama pull gemma4`），适合通用图像理解。文档OCR和多语言文本请用**Qwen3-VL**、**Qwen3.5**或**Qwen3.8**；4 GB以下的硬件请用**Moondream 2**或**Qwen3.5 2B**。',
        bullets: [
          '4 GB VRAM以下 → Qwen3.5 2B（2.7–3.1 GB）、Qwen3-VL 2B（1.9 GB）或Moondream 2（1.7 GB）：速度快，但复杂图像和密集文本能力有限。',
          '6–8 GB VRAM → Gemma 4 E4B（下载6.6–9.5 GB）、Qwen3-VL 8B（6.1 GB）或Qwen3.5 9B（6.6–7.6 GB）：质量与硬件的最佳平衡。',
          '16–24 GB VRAM → Gemma 4 26B A4B（16–19 GB）、Gemma 4 31B（19–20 GB）、Qwen3.8 27B（18 GB）或Qwen3-VL 32B（21 GB）：文档和照片质量接近云端。',
          'Apple M系列或64 GB以上 → Qwen3.5 122B（81 GB）或Llama 3.2 Vision 90B（55 GB）；Qwen3-VL 235B需要143 GB。',
          '配置：`ollama pull gemma4:e4b`，然后 `ollama run gemma4:e4b "Describe this image: ./photo.jpg"`（图像路径写在提示中）。',
          'OCR最强：Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6——文档文本提取最强。',
          'UI/截图最佳：InternVL 2.5（社区GGUF），需要工具调用时选Gemma 4。',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '核心要点', anchor: '#key-takeaways' },
      { label: '快速概览', anchor: '#quick-facts' },
      { label: '什么是视觉语言模型？', anchor: '#what-are-vlms' },
      { label: '模型对比表', anchor: '#model-comparison' },
      { label: '实际精度测试：发票提取', anchor: '#invoice-accuracy-test' },
      { label: '多图像支持', anchor: '#multi-image-support' },
      { label: 'Ollama配置（逐步说明）', anchor: '#ollama-setup' },
      { label: '用例1：文档OCR与提取', anchor: '#use-case-ocr' },
      { label: '用例2：图像问答与描述', anchor: '#use-case-qa' },
      { label: '用例3：截图与UI分析', anchor: '#use-case-screenshot' },
      { label: '用例4：图表与图形读取', anchor: '#use-case-chart' },
      { label: '用例5：视频帧分析', anchor: '#use-case-video' },
      { label: 'VRAM与性能实测', anchor: '#vram-reality' },
      { label: '本地VLM与GPT-5.5 Vision对比', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA深度解析', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL——最强多语言OCR', anchor: '#qwen-vl-deep-dive' },
      { label: '如何选择视觉模型', anchor: '#how-to-choose' },
      { label: '常见问题', anchor: '#faq' },
      { label: '参考来源', anchor: '#sources' },
      { label: '延伸阅读', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4是2026年大多数开发者的最佳本地视觉模型。** 采用Apache 2.0许可，Ollama提供五种规格（E2B、E4B、12B、26B A4B、31B），其模型卡给出的MMMU Pro得分从52.6%（E4B）到76.9%（31B），而Gemma 3 27B为49.7%。',
          '**Qwen3-VL 8B、Qwen3.5 9B和Qwen3.8 27B在文档OCR和多语言文本上领先。** Qwen3-VL 8B需下载6.1 GB；Qwen3.8 27B（Apache 2.0，18 GB）在OmniDocBench 1.5上报告得分91.1。',
          '**Llama 3.2 Vision不再是稳妥的默认选择。** 用户报告在较新版本的Ollama上出现“unknown model architecture: mllama”（GitHub issue #16490和#16547，尚无确认的修复），且其Ollama页面已约一年未更新。',
          '**4 GB以下请选Qwen3.5 2B、Qwen3-VL 2B或Moondream 2。** 三者体积小、速度快，但复杂场景、密集文本和精确图表读取能力有限。',
          '**LLaVA 1.6是文档较完善、社区测试较充分的本地VLM之一。** 需要教程和排错帮助时是务实的选择，但在OCR和质量上已被新模型超越。',
          '**使用Ollama的`format`参数获取结构化输出。** 传入JSON schema可将回复限制为您定义的字段，便于解析；仍需对照源数据校验每个值。',
          '**没有任何本地模型在所有方面都能匹敌GPT-5.5 Vision。** 2026年的本地VLM是强有力的二线选择——对结构化文档和清晰照片表现出色，但对手写、模糊场景和复杂信息图表存在明显短板。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**VLM的功能：** 图像+文本输入 → 文本输出。不是图像生成器——这些是图像*理解*模型。',
          '**Ollama支持：** Gemma 4、Qwen3.8、Qwen3.5、Qwen3-VL、Llama 3.2 Vision、MiniCPM-V、LLaVA和Moondream均在Ollama官方模型库中；InternVL、PaliGemma 2和SmolVLM需使用社区构建版本。',
          '**最小可用模型：** Moondream 2（1.8B，下载1.7 GB）、Qwen3-VL 2B（1.9 GB）和Qwen3.5 0.8B（1.2–1.3 GB）。',
          '**最大实用本地模型：** Qwen3.5 122B（81 GB）和Llama 3.2 Vision 90B（55 GB），需64 GB以上统一内存（Apple M系列或多GPU）；Qwen3-VL 235B需要143 GB。',
          '**图像输入格式：** JPEG、PNG、WebP。最大分辨率因模型而异（通常1024×1024至4096×4096）。',
          '**音频与视频：** Gemma 4 E2B、E4B和12B还支持音频输入；所有Gemma 4规格和Qwen3.8均可将视频按帧处理。',
          '**OCR强度：** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2。',
          '**多模态≠高速：** 视觉模型在LLM基础上增加视觉编码器——token生成速度比同参数量纯文本模型慢约30–60%。',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: '什么是视觉语言模型（VLM）？',
        content:
          '视觉语言模型（VLM）是同时处理图像和文本输入并生成文本输出的神经网络。标准架构将视觉编码器（通常为CLIP或SigLIP）与语言解码器（LLM）通过投影层连接，将图像特征映射到LLM理解的token空间。',
        items: [
          '**与图像生成器的区别：** Stable Diffusion、FLUX和DALL-E 3是文本生成图像的生成器。VLM是图像到文本的模型——它们描述、分析并回答关于图像的问题。',
          '**与纯OCR工具的区别：** 传统OCR（Tesseract）通过模式识别提取文本。VLM理解上下文——可解释表格含义、回答图表问题或识别照片中的对象。',
          '**为何在本地运行：** 私密文档（医疗记录、法律扫描件、财务报表）、专有截图，或因合规要求不能将图像发送到云端API的工作流。',
          '**不能做的事：** 生成图像、执行截图中的代码或访问互联网。VLM仅根据图像中可见内容生成文本输出。',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: '可用本地视觉模型——对比表',
        content:
          '主要本地视觉模型（可通过Ollama或直接推理使用）的比较，核查日期为2026年10月19日。VRAM列为Ollama下载大小（除非另有说明为4位量化）——请为上下文额外预留1–2 GB。*据报告，Llama 3.2 Vision在较新版本的Ollama上无法加载（见上文Llama 3.2 Vision说明）。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '8 GB VRAM选Gemma 4 E4B或Qwen3-VL 8B；24 GB选Gemma 4 26B/31B或Qwen3.8 27B——均可通过Ollama本地运行。',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4整体最优；Qwen3-VL、Qwen3.5和Qwen3.8在文档OCR和多语言文本上领先；Moondream和Qwen3.5 2B是4 GB VRAM以下的轻量选项。',
          },
        ],
        columns: ['模型', '参数量', 'VRAM (Q4)', '图像类型', '质量', '支持Ollama？'],
        rows: [
          { '模型': 'Moondream 2', '参数量': '1.8B', 'VRAM (Q4)': '约2 GB', '图像类型': '简单照片', '质量': '基础', '支持Ollama？': '是' },
          { '模型': 'SmolVLM 2.2B', '参数量': '2.2B', 'VRAM (Q4)': '约2 GB', '图像类型': '简单照片、图注', '质量': '基础+', '支持Ollama？': '社区支持' },
          { '模型': 'Qwen3.5 2B', '参数量': '2B', 'VRAM (Q4)': '2.7–3.1 GB', '图像类型': '照片、文档、OCR', '质量': '良好', '支持Ollama？': '是' },
          { '模型': 'PaliGemma 2 3B', '参数量': '3B', 'VRAM (Q4)': '约3 GB', '图像类型': '照片、文档', '质量': '良好', '支持Ollama？': '社区支持' },
          { '模型': 'Gemma 4 E2B', '参数量': '2.3B有效', 'VRAM (Q4)': '4.6–7.5 GB', '图像类型': '照片、文档、音频', '质量': '良好', '支持Ollama？': '是' },
          { '模型': 'LLaVA 1.6 7B', '参数量': '7B', 'VRAM (Q4)': '约6 GB', '图像类型': '照片、文档、图表', '质量': '良好', '支持Ollama？': '是' },
          { '模型': 'MiniCPM-V', '参数量': '8B', 'VRAM (Q4)': '约6 GB（拉取5.5 GB）', '图像类型': '照片、文档、OCR', '质量': '非常好', '支持Ollama？': '是' },
          { '模型': 'Qwen3-VL 8B', '参数量': '8B', 'VRAM (Q4)': '约6.1 GB', '图像类型': '照片、文档、OCR、多语言', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Qwen3.5 9B', '参数量': '9B', 'VRAM (Q4)': '6.6–7.6 GB', '图像类型': '照片、文档、OCR、多语言', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Gemma 4 E4B', '参数量': '4.5B有效', 'VRAM (Q4)': '6.6–9.5 GB', '图像类型': '照片、文档、音频', '质量': '非常好', '支持Ollama？': '是' },
          { '模型': 'Gemma 4 12B', '参数量': '12B', 'VRAM (Q4)': '7.7–8.0 GB', '图像类型': '照片、文档、音频', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'InternVL 2.5 8B', '参数量': '8B', 'VRAM (Q4)': '约8 GB', '图像类型': '文档、图表、UI、代码', '质量': '优秀（UI/图表）', '支持Ollama？': '社区支持' },
          { '模型': 'Llama 3.2 Vision 11B', '参数量': '11B', 'VRAM (Q4)': '约8 GB（拉取7.8 GB）', '图像类型': '照片、文档', '质量': '优秀*', '支持Ollama？': '是*' },
          { '模型': 'LLaVA 1.6 13B', '参数量': '13B', 'VRAM (Q4)': '约10 GB', '图像类型': '照片、文档、图表', '质量': '非常好', '支持Ollama？': '是' },
          { '模型': 'Gemma 4 26B A4B', '参数量': '26B（4B活跃）', 'VRAM (Q4)': '16–19 GB', '图像类型': '照片、文档、复杂', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Qwen3.8 27B', '参数量': '27B', 'VRAM (Q4)': '18 GB', '图像类型': '照片、文档、视频、OCR', '质量': '开源最强', '支持Ollama？': '是' },
          { '模型': 'Gemma 4 31B', '参数量': '31B', 'VRAM (Q4)': '19–20 GB', '图像类型': '照片、文档、复杂', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Qwen3-VL 32B', '参数量': '32B', 'VRAM (Q4)': '21 GB', '图像类型': '照片、文档、OCR、复杂', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Llama 3.2 Vision 90B', '参数量': '90B', 'VRAM (Q4)': '55 GB', '图像类型': '照片、文档、复杂', '质量': '非常好*', '支持Ollama？': '是*' },
          { '模型': 'Qwen3.5 122B', '参数量': '122B', 'VRAM (Q4)': '81 GB', '图像类型': '照片、文档、复杂', '质量': '本地最强', '支持Ollama？': '是' },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-zh.svg',
        imageCaption:
          '按VRAM和OCR质量对比本地视觉模型：Moondream 2在2GB下运行，Qwen3-VL 8B在6GB下引领文档OCR，Gemma 4通过Ollama从8GB（E4B）到24GB（26B和31B）提供最佳综合质量。',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: '实际精度测试：发票提取',
        content:
          '本地视觉模型在结构化文档提取任务上的精度对比。测试：从同一样本发票中提取5个字段（供应商名称、日期、总金额、税额、行项目数量）。',
        columns: ['模型', '供应商', '日期', '总金额', '税额', '行项目', '得分'],
        rows: [
          { '模型': 'Moondream 2', '供应商': '✓', '日期': '✓', '总金额': '✗', '税额': '✗', '行项目': '✗', '得分': '2/5' },
          { '模型': 'LLaVA 1.6 7B', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✗', '行项目': '✓', '得分': '4/5' },
          { '模型': 'MiniCPM-V 4.5', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
          { '模型': 'Qwen3-VL 8B', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
          { '模型': 'Llama 3.2 11B', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
          { '模型': 'GPT-5.5 Vision', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
        ],
        callouts: [
          { type: 'note', text: '结果来自单份测试发票。实际精度因文档质量、字体和布局复杂度而异。始终将提取的数字与原始文档核对。' },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: '多图像支持',
        content:
          '并非所有本地视觉模型都支持单次请求中的多张图像。多图像支持对多页PDF文档处理和视觉对比任务至关重要。',
        columns: ['功能', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            '功能': '多图像输入',
            'Moondream': '不支持',
            'LLaVA 7B': '不支持',
            'MiniCPM-V': '支持（最多4张）',
            'Qwen3-VL': '支持（最多8张）',
            'LLaVA 13B': '不支持',
            'Llama 3.2 Vision': '支持（多页）',
            'InternVL': '支持',
          },
        ],
        items: [
          'MiniCPM-V每次提示最多接受4张图像；Qwen3-VL最多支持8张。LLaVA和Moondream每次请求只接受单张图像。',
          '**多图像的重要场景：** 发送多页PDF的所有页面进行完整文档提取；并排比较两张产品照片；在单个提示中分析前后截图对比。',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama配置——逐步说明',
        content:
          'Ollama是运行本地视觉模型最简单的方式。安装后，视觉模型通过单条pull命令即可使用，支持CLI和HTTP API。',
        items: [
          '**步骤1——安装Ollama：** 从ollama.com下载macOS、Linux或Windows版本。安装时间不超过2分钟。',
          '**步骤2——拉取视觉模型：** 8 GB显卡用 `ollama pull gemma4:e4b`（下载6.6–9.5 GB），OCR用 `ollama pull qwen3-vl:8b`（6.1 GB），低VRAM时用 `ollama pull moondream`（1.8B，1.7 GB）。',
          '**步骤3——通过CLI使用：** `ollama run gemma4:e4b "What is in this image? /path/to/photo.jpg"`——图像路径写在提示内；`ollama run` 没有 `--image` 参数。',
          '**步骤4——使用HTTP API：** POST到`http://localhost:11434/api/generate`，在`images`数组中包含Base64编码的图像。在`format`字段中加入JSON schema可获得结构化输出。',
          '**步骤5——Python示例：** 使用`requests`库进行Base64编码——见下方代码块。',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# 示例用法
result = ask_vision_model("invoice.png", "从这张发票中提取所有行项目和总金额。")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-zh.svg',
        imageCaption:
          'Ollama视觉模型设置流程：安装Ollama，拉取gemma4:e4b等视觉模型，通过CLI（图像路径写在提示中）或localhost:11434的HTTP API运行，获得用于OCR、问答或图像描述的文本输出。',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: '用例1：文档OCR与提取',
        content:
          '**VLM在半结构化文档上优于传统OCR** ——发票、收据、合同和表格中，布局与文本同样重要。传统OCR（Tesseract）提取字符；VLM理解这些字符在上下文中的含义。',
        items: [
          '**效果好的场景：** 扫描发票、PDF截图、印刷体手写（非草书）、边框清晰的表格、名片。',
          '**效果较差的场景：** 草书手写、低于150 DPI的扫描件、高压缩JPEG、重叠文本。',
          '**OCR最佳模型：** Qwen3-VL 8B和Qwen3.5 9B（6–8 GB级别），Qwen3.8 27B（18 GB，据其模型卡在OmniDocBench 1.5上得分91.1），混合文档类型选Gemma 4。',
          '**OCR提示工程：** "请完整提取此文档中的所有文本，保留换行符。"或"请以JSON格式返回此发票内容，字段包括：供应商、日期、行项目[]、总金额。"',
          '**与传统OCR对比：** VLM速度较慢但语义理解更强。干净文档的纯文本提取用Tesseract更快。需要结构化数据提取时使用VLM。',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: '用例2：图像问答与描述',
        content:
          '**通用场景理解、产品描述和视觉问答推荐使用Gemma 4（8 GB选E4B，24 GB选26B或31B）。** 该模型可生成自然、详细的描述，并处理关于照片内容的细微问题。',
        items: [
          '**场景描述：** "这张照片里有什么？"——物体、人物、活动、环境、氛围。',
          '**产品目录化：** 用提示模板处理产品照片："描述此产品：颜色、形状、材质、状态。"适用于无需云端API的电商库存管理。',
          '**无障碍访问：** 大规模为图像生成alt文本。对标准产品照片，准确度足以满足无障碍合规要求。',
          '**最佳模型：** Gemma 4 12B或26B A4B（通用照片问答）；Qwen3.5 4B或LLaVA 1.6 7B（速度比精度更重要的大批量处理）。',
          '**速度参考：** 速度取决于模型、GPU和描述长度——在处理数千张之前，请先在自己的硬件上用20张图像样本做基准测试。',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: '用例3：截图与UI分析',
        content:
          '**分析应用截图、错误消息和仪表板，InternVL 2.5是最强的本地模型**——其训练数据着重强调软件UI、GitHub截图和代码执行输出。',
        items: [
          '**开发者工作流：** 将错误消息截图发给模型："这个截图中哪里有问题，如何修复？"',
          '**Bug报告生成：** 用结构化提示从截图自动生成Bug描述。',
          '**仪表板监控：** 分析监控仪表板截图以检测异常——"这个Grafana截图中是否有警告级别的指标？"',
          '**无障碍测试：** 对比UI改动前后的截图以验证视觉无障碍属性。',
          '**最佳模型：** InternVL 2.5 8B（社区构建版，UI能力强），Gemma 4和Qwen3-VL（官方Ollama支持，具备面向智能体工作流的工具调用）。',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: '用例4：图表与图形读取',
        content:
          '**从条形图、折线图和表格中提取数据是可行的，但需要精心设计提示。** 所有本地VLM在图表读取上都弱于照片描述——始终将从图表提取的数字与原始数据核对。',
        items: [
          '**效果好的场景：** 读取坐标轴标签、识别趋势、比较相对柱高、读取字体清晰的表格值。',
          '**不可靠的场景：** 从连续图表精确提取数值（如"Q3柱子是43.7单位"）、无显式标签的饼图百分比。',
          '**提示策略：** "描述折线图中显示的趋势"比"2026年3月的精确值是多少"效果更好。',
          '**图表最佳模型：** InternVL 2.5（图表理解强），Gemma 4和Qwen3-VL（标注清晰的图表表现良好）。',
          '**限制说明：** 2026年任何本地VLM都无法可靠地从视觉复杂的图表中提取精确数字。',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: '用例5：视频帧分析',
        content:
          '**本地视觉模型可通过处理单帧来分析视频**——用ffmpeg提取帧，逐帧发给视觉模型，再用文本LLM跨帧汇总。非实时：根据模型和硬件，每帧需0.5–3秒。',
        items: [
          '**帧提取：** 使用ffmpeg以1fps提取：`ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**逐帧分析：** 用统一提示将每帧发给视觉模型（例如："用一句话描述这帧中发生的事情"）。',
          '**跨帧汇总：** 收集所有帧描述，配合汇总提示发给文本LLM。',
          '**应用场景：** 安防摄像头审查（标记异常活动帧）、讲座录制分析（生成逐幻灯片笔记）、制造业质量检验（标记出现缺陷的帧）。',
          '**视频帧最佳模型：** Gemma 4或Qwen3.8（质量，两者均原生支持按帧输入视频），Qwen3.5 4B或LLaVA 1.6 7B（速度，帧处理吞吐量更高）。',
          '**速度现实：** 以每秒1帧提取、每帧约1–3秒推理计算，10分钟视频（600帧）完整处理大约需要10–30分钟，取决于模型和GPU。',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("lecture.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM与性能实测',
        content:
          '本地视觉模型在基础LLM上增加视觉编码器，与纯文本模型相比，VRAM需求和推理时间均会增加。',
        columns: ['模型', 'VRAM (Q4)', 'token/秒 (RTX 4070)', 'token/秒 (M5 Pro 36GB)', '适合生产？'],
        rows: [
          { '模型': 'Moondream 2 (1.8B)', 'VRAM (Q4)': '约2 GB', 'token/秒 (RTX 4070)': '约25–35', 'token/秒 (M5 Pro 36GB)': '约30–40', '适合生产？': '是——适合简单任务' },
          { '模型': 'LLaVA 1.6 7B', 'VRAM (Q4)': '约6 GB', 'token/秒 (RTX 4070)': '约15–20', 'token/秒 (M5 Pro 36GB)': '约18–25', '适合生产？': '是——通用' },
          { '模型': 'MiniCPM-V (8B)', 'VRAM (Q4)': '约6 GB', 'token/秒 (RTX 4070)': '约12–18', 'token/秒 (M5 Pro 36GB)': '约15–20', '适合生产？': '是——OCR和文档' },
          { '模型': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '约8 GB', 'token/秒 (RTX 4070)': '约10–14', 'token/秒 (M5 Pro 36GB)': '约12–16', '适合生产？': '先查Ollama加载问题' },
          { '模型': 'LLaVA 1.6 13B', 'VRAM (Q4)': '约10 GB', 'token/秒 (RTX 4070)': '约8–12', 'token/秒 (M5 Pro 36GB)': '约10–14', '适合生产？': '是——需12 GB GPU' },
          { '模型': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '约64 GB', 'token/秒 (RTX 4070)': 'N/A（需多GPU或M-Max）', 'token/秒 (M5 Pro 36GB)': 'N/A（需M5 Max 128GB+）', '适合生产？': '仅高端Apple Silicon' },
        ],
        callouts: [
          { type: 'note', text: 'token/秒范围为参考估计值，并非新的实测数据；未针对Gemma 4、Qwen3.5或Qwen3.8重新测试。请在自己的硬件上用 `ollama run <model> --verbose` 做基准测试，该命令会输出评估速率。' },
          { type: 'note', text: '视觉模型的token生成速度比同尺寸纯文本模型慢，因为视觉编码器在处理第一个图像token时会产生大量计算开销。后续文本token的生成速度接近正常水平。' },
          { type: 'note', text: 'Apple Silicon统一内存可运行更大的模型（128 GB Mac上可运行55 GB的Llama 3.2 Vision 90B或81 GB的Qwen3.5 122B），这些模型无法放入独立GPU的VRAM中。速度略慢于同等NVIDIA GPU，但无VRAM限制。' },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: '本地VLM与GPT-5.5 Vision对比',
        content:
          '本地VLM在结构化文档上已大幅缩小差距，但在复杂和模糊任务上仍落后于GPT-5.5 Vision。',
        items: [
          '**结构化文档（发票、表单）：** 本地模型达到GPT-5.5质量的80–90%——对格式规范的文档已足够用于生产。',
          '**复杂场景、模糊图像：** 本地模型达到GPT-5.5的50–70%——在异常上下文、光线或模糊内容方面存在明显质量差距。',
          '**手写识别：** 本地模型明显较弱，尤其是草书体。GPT-5.5 Vision在手写处理上大幅领先。',
          '**图表数据提取：** 本地模型和GPT-5.5均不可靠，但GPT-5.5在精确数值方面更准确。',
          '**成本：** GPT-5.5 Vision每张图像$0.01–$0.03，本地为$0。每月10,000张图像节省$100–$300。',
          '**隐私：** 本地模型默认在设备上处理图像——除非启用云功能或联网工具，图像不会发送到云端API。GPT-5.5将图像发送至OpenAI服务器。',
          '**速度：** 本地模型10–20 token/秒，GPT-5.5 30–80 token/秒，但本地批处理无网络延迟。',
        ],
        callouts: [
          { type: 'note', text: '对于输入规范的发票和表单处理，本地VLM（Gemma 4、Qwen3-VL 8B、Qwen3.8 27B）可以零成本替代GPT-5.5 Vision。涉及手写、复杂场景分析或模糊内容时，GPT-5.5仍占优势。' },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'LLaVA深度解析',
        content:
          '**LLaVA（Large Language and Vision Assistant）是基础性的开源VLM架构。** 由威斯康星大学麦迪逊分校和微软研究院于2023年发布，确立了大多数现代本地VLM所遵循的CLIP编码器+LLM解码器模式。',
        items: [
          '**架构：** CLIP ViT-L/14视觉编码器 + Llama-2或Mistral文本解码器，通过简单线性投影层连接。',
          '**LLaVA 1.5 vs 1.6：** 1.6版本（2024年初发布）通过动态分块增加了高分辨率输入支持，显著提升了OCR和图表读取精度。',
          '**训练：** 在LLaVA-Instruct-150K上进行指令微调——从图像描述和目标检测标注生成的视觉对话数据集。',
          '**优势：** 广泛的通用知识、文档完善、社区庞大、Ollama集成丰富。',
          '**劣势：** OCR弱于Qwen3-VL和MiniCPM-V，UI分析弱于InternVL 2.5，整体被Gemma 4和Qwen3系列超越。',
          '**仍被推荐的原因：** 在所有本地VLM中拥有最大社区、最多教程和最多提示示例。遇到问题时更容易找到帮助。',
          '**完整评测：** [LLaVA评测(2026)](/zh/power-local-llm/llava-review) — PromptQuorum的专门评测,包括Apache-2.0与基础模型许可证的细微差别及真实的Ollama命令。',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL、Qwen3.5与Qwen3.8——最强多语言OCR',
        content:
          '**Qwen系列是2026年文档OCR和多语言文本方面最强的开源选择。** Qwen3-VL（2B至235B）是专门的视觉系列，Qwen3.5（0.8B至122B）将视觉能力并入基础模型，Qwen3.8 27B（2026年8月，Apache 2.0）是最新版本，据报告在OmniDocBench 1.5上得分91.1。',
        items: [
          '**架构：** 支持高达4096×4096的动态分辨率——远高于LLaVA 1.6（672×672）或Llama 3.2 Vision（1120×1120）。可读取高DPI扫描件而无需下采样。',
          '**多语言OCR：** 中文、日文、韩文和英文OCR达到同类最佳。训练数据包含大规模多语言文档语料库——在非英文文档处理上相对LLaVA和Llama 3.2 Vision具有显著优势。',
          '**如何选择规格：** Qwen3-VL 8B下载6.1 GB，适合8 GB显卡；Qwen3.5 9B为6.6–7.6 GB；Qwen3.8 27B为18 GB，需要24 GB显卡；Qwen3-VL 32B为21 GB。Ollama上的Qwen3-VL没有72B版本。',
          '**Ollama安装：** `ollama pull qwen3-vl:8b`、`ollama pull qwen3.5:9b`或`ollama pull qwen3.8`——均在Ollama模型库中。',
          '**多图像支持：** 每次请求最多接受8张图像——本比较中多图像容量最高。',
          '**模型页面：** [Ollama上的Qwen3-VL](https://ollama.com/library/qwen3-vl)、[Hugging Face上的Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '如何选择视觉模型',
        content: '以VRAM为首要标准的本地视觉模型选择决策树：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '首先按VRAM选择（2→4→8→24 GB），再按用例细化（OCR、UI、通用问答或最高质量）。',
          },
          {
            type: 'plain-terms',
            text: '4 GB以下：Qwen3.5 2B或Moondream。8 GB：照片选Gemma 4 E4B，文档选Qwen3-VL 8B。24 GB：Gemma 4 26B/31B或Qwen3.8 27B。64 GB以上：Qwen3.5 122B。',
          },
        ],
        items: [
          '**4 GB以下VRAM：** Qwen3.5 2B（2.7–3.1 GB）、Qwen3-VL 2B（1.9 GB）或Moondream 2（1.7 GB）是实用选项。PaliGemma 2（3B）和SmolVLM（2.2B）是社区构建版本的备选方案。均不适合密集文本OCR。',
          '**6–8 GB VRAM：** 通用照片问答选Gemma 4 E4B，文档OCR和多语言文本选Qwen3-VL 8B或Qwen3.5 9B，注重社区支持时选LLaVA 1.6 7B。',
          '**12–16 GB VRAM：** Gemma 4 12B（下载7.7–8.0 GB）是明确推荐——同尺寸下视觉得分出色，支持音频输入和256K上下文窗口。LLaVA 1.6 13B和InternVL 2.5 8B（UI和代码截图）也能放下。',
          '**24 GB VRAM：** Gemma 4 26B A4B（16–19 GB）、Gemma 4 31B（19–20 GB）、Qwen3.8 27B（18 GB）或Qwen3-VL 32B（21 GB）——最接近云端视觉质量的本地选择。',
          '**64 GB以上统一内存（Apple M-Max/Ultra、多GPU）：** Qwen3.5 122B（81 GB）或Llama 3.2 Vision 90B（55 GB）是最大的本地模型；两者都需要大内存硬件，且每token速度比24 GB级模型更慢。',
          '**始终验证数字：** 无论使用何种模型，从图表或表格提取的任何数值都应与源数据交叉核对。本地VLM会对视觉图表中的精确数字产生幻觉。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
          {
            q: '为什么llama3.2-vision会报“unknown model architecture: mllama”？',
            a: '用户报告在较新版本的Ollama上，llama3.2-vision出现此错误（GitHub issue #16490和#16547，2026年年中提出；后者作为重复项关闭，尚无确认的修复）。在这些报告中，更新Ollama或重新拉取模型均无效。除非必须使用Llama 3.2 Vision，否则请改用Ollama模型库中持续维护的Gemma 4或Qwen3-VL；如必须使用，请固定到仍能加载它的Ollama版本。',
          },
          {
            q: '3B参数以下最好的小型视觉语言模型是什么？',
            a: 'Qwen3.5 2B（下载2.7–3.1 GB）和Qwen3-VL 2B（1.9 GB）是Ollama上最强的小型选择；Moondream 2（1.8B，1.7 GB）最轻量。Gemma 4 E2B（2.3B有效参数，下载4.6–7.5 GB）增加了音频输入。与8B级别相比，OCR和复杂场景理解能力会较弱。',
          },
          {
            q: '哪些本地模型可以处理实时摄像头和麦克风输入？',
            a: 'Gemma 4 E2B、E4B和12B同时支持图像和音频，是构建能“看”能“听”的本地助手的天然基础。但仅有模型并不构成实时系统：您还需要采集循环（抓取帧、切分音频）、语音转文字或音频输入通道，以及用于语音回复的文字转语音环节。在此基础上开发之前，请确认您的运行时版本确实会把音频传给模型。',
          },
          {
            q: '如何从截图和文档中获得可靠的结构化输出？',
            a: '在Ollama的`format`字段中传入JSON schema，将temperature设为0，并且只要求提取图像中可见的字段。这会将回复限制为带有您所定义键的有效JSON；但这不能保证值正确，因此请对照源数据校验数字和日期，并记录失败情况。8B及以上的较大模型比2B模型更稳定地遵循schema。',
          },
          {
            q: '哪些GPT-4V替代方案可以完全在设备本地运行？',
            a: '在24 GB GPU上，最接近的是Gemma 4 31B（19–20 GB）、Qwen3.8 27B（18 GB）和Qwen3-VL 32B（21 GB）；Gemma 4 E4B和Qwen3-VL 8B可覆盖8 GB设备。全部可通过Ollama离线运行。它们在清晰文档和照片上可与云端模型相当，但在手写、模糊场景和复杂信息图表上仍有差距。',
          },
          {
            q: '可以不使用Ollama直接运行LLaVA或Llama 3.2 Vision吗？',
            a: '可以。两者都可以通过llama.cpp（支持视觉）、transformers库（使用相应模型卡）或LM Studio（提供视觉模型GUI）直接运行。Ollama推荐是因为其简便性——自动处理模型下载、量化选择和API托管。',
          },
          {
            q: 'Llama 3.2 Vision支持直接输入PDF吗？',
            a: '没有任何本地VLM直接接受PDF输入。需要先将PDF页面转换为图像（使用pdf2image、pypdfium2等），然后将每页作为独立图像请求发送。10页PDF需发送10个独立图像请求并合并汇总结果。',
          },
          {
            q: '本地视觉模型与GPT-5.5 Vision相比如何？',
            a: 'GPT-5.5 Vision在模糊场景、手写、复杂信息图表以及需要结合世界知识的视觉理解任务上仍明显更强。Gemma 4和Qwen3-VL在结构化文档（发票、表单、清晰照片）上接近GPT-5.5，但在模糊图像推理上有差距。成本、隐私和速度的详细对比见上文。',
          },
          {
            q: '本地VLM支持什么图像分辨率？',
            a: 'LLaVA 1.6支持最高672×672有效分辨率（动态分块）。MiniCPM-V支持最高1792×1792——这也是其在高DPI文档扫描上优于LLaVA的原因之一。Llama 3.2 Vision支持最高1120×1120。Gemma 4和Qwen3-VL接受可变的宽高比和分辨率。最佳OCR效果请以150+ DPI发送文档图像。',
          },
          {
            q: '可以用自己的图像对本地视觉模型进行微调吗？',
            a: '可以，但VLM微调比纯文本LLM微调更消耗资源——图像和文本训练对都需要完整前向传播处理。LLaVA微调使用原始训练代码库，文档完善。MiniCPM-V通过Hugging Face官方训练脚本支持微调。大多数用例仅靠提示工程即可，无需微调。',
          },
          {
            q: '8 GB VRAM的最佳本地视觉模型是什么？',
            a: '通用使用选Gemma 4 E4B（下载6.6–9.5 GB）；若主要需求是文档OCR或多语言文本，则选Qwen3-VL 8B（6.1 GB）。两者均可通过Ollama单条命令获取。Qwen3.5 9B（6.6–7.6 GB）是第三种选择。',
          },
          {
            q: 'LLaVA与MiniCPM-V——哪个OCR效果更好？',
            a: 'MiniCPM-V在文档OCR上比LLaVA更精准，尤其是密集表格和高DPI扫描件，但Qwen3-VL 8B的OCR表现强于二者。LLaVA 1.6文档更完善，社区支持更好。请注意，Ollama的minicpm-v页面仍描述的是MiniCPM-V 2.6（5.5 GB）；更新的MiniCPM-V版本需要Hugging Face或llama.cpp构建版本。',
          },
          {
            q: '本地视觉模型能识别手写吗？',
            a: '印刷体手写（块状字母）：Gemma 4、Qwen3-VL和MiniCPM-V可以中等精度识别。草书手写：所有本地模型均不可靠。GPT-5.5 Vision在草书方面大幅领先。生产环境中的草书文档手写OCR仍建议使用云端API。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[Hugging Face上的Gemma 4模型卡](https://huggingface.co/google/gemma-4-31B-it) — 谷歌的Apache 2.0许可、各规格支持的模态以及MMMU Pro结果。',
          '[Ollama上的Gemma 4](https://ollama.com/library/gemma4) — 标签、下载大小和上下文窗口。',
          '[Hugging Face上的Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0许可、262K上下文、OmniDocBench 1.5结果。',
          '[Ollama上的Qwen3.5](https://ollama.com/library/qwen3.5)和[Ollama上的Qwen3-VL](https://ollama.com/library/qwen3-vl) — 规格和下载大小。',
          '[Ollama上的Llama 3.2 Vision](https://ollama.com/library/llama3.2-vision)和[Ollama issue #16547](https://github.com/ollama/ollama/issues/16547) — 模型页面及所报告的mllama加载错误。',
          '[LLaVA项目页面](https://llava-vl.github.io) — LLaVA 1.5和1.6模型卡、架构详情及训练数据集描述。',
          '[Ollama上的MiniCPM-V](https://ollama.com/library/minicpm-v)和[Hugging Face上的OpenBMB](https://huggingface.co/openbmb) — 模型卡和OCR基准。',
          '[Ollama上的Moondream](https://ollama.com/library/moondream)和[GitHub上的Moondream](https://github.com/vikhyat/moondream) — 模型下载和推理脚本。',
          '[Hugging Face上的InternVL 2.5](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab模型卡及文档和UI任务基准得分。',
          '[Ollama文档](https://ollama.com) — 视觉模型支持、结构化输出、API参考和模型库。',
          '[Hugging Face上的PaliGemma 2](https://huggingface.co/google/paligemma2-3b-pt-448) — Google PaliGemma 2 3B模型卡。',
          '[Hugging Face上的SmolVLM](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace SmolVLM模型卡及推理说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[哪些Ollama模型支持视觉？](/zh/prompt-bites/which-ollama-models-support-vision) — 快速解答Ollama模型库中哪些模型接受图像输入，并附VRAM规格。',
          '[Ollama视觉模型(2026)](/zh/power-local-llm/ollama-vision-models-review) —— 通过Ollama运行视觉模型的实用指南:真实的CLI/API语法,以及模型库中实际列出的模型。',
          '[摄像头与无人机中的 VLM 2026](/zh/power-local-llm/vlm-video-analytics-drones-edge) -- 桌面端 VLM 基础见本文；嵌入式摄像头与无人机部署请参阅这份边缘专属指南。',
          '[本地多模态AI流水线2026](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 将视觉模型与STT和TTS结合构建完整本地多模态栈。',
          '[本地语音识别2026：Whisper.cpp vs faster-whisper](/zh/power-local-llm/local-whisper-stt-comparison) — 为视觉输出添加语音输入。',
          '[本地TTS与声音克隆2026](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 添加语音输出以朗读VLM回答。',
          '[安装Ollama](/zh/local-llms/how-to-install-ollama) — 前置条件：Ollama配置与设置。',
          '[本地LLM硬件指南](/zh/local-llms/local-llm-hardware-guide) — 视觉模型推理的VRAM和RAM要求。',
        ],
      },
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-es.webp',
    title: 'Mejores modelos de visión locales 2026: Gemma 4, Qwen3-VL, LLaVA y configuración multimodal con Ollama',
    seoTitle: 'Mejores modelos de visión locales 2026: Gemma 4 y Qwen3-VL',
    intro:
      'Los modelos visión-lenguaje (VLM) aceptan imágenes y texto como entrada y devuelven texto — para OCR de documentos, preguntas y respuestas sobre imágenes, análisis de capturas de pantalla y lectura de gráficos, todo en local. En 2026, la forma más sencilla de ejecutar VLMs es a través de Ollama: descarga un modelo, envía una imagen y obtén una descripción o respuesta. Esta guía compara los principales modelos de visión locales (Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, MiniCPM-V, LLaVA 1.6, Llama 3.2 Vision, Moondream 2, InternVL 2.5), explica la configuración de Ollama paso a paso y asocia cada modelo con su mejor caso de uso según los requisitos de VRAM. Los tamaños de descarga proceden de la biblioteca de modelos de Ollama y las cifras de calidad de las tarjetas de modelo de los fabricantes, consultadas el 19 de octubre de 2026.',
    metaDescription:
      'Mejores VLM locales con Ollama en 2026: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. VRAM por modelo, OCR y pasos de configuración.',
    twitterDescription:
      'Mejores modelos de visión locales 2026: Gemma 4, Qwen3-VL, MiniCPM-V, LLaVA con Ollama. Preguntas sobre imágenes, OCR y capturas sin conexión. Guía de VRAM.',
    audience:
      'Desarrolladores que necesitan comprensión de imágenes en local sin APIs en la nube — para procesamiento de documentos, análisis de capturas, herramientas de accesibilidad, sistemas de inventario o flujos de trabajo con imágenes sensibles.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modelo de visión local',
    targetKeywords: [
      'modelo de visión local 2026',
      'mejor vlm local',
      'gemma 4 visión ollama',
      'modelo visión-lenguaje pequeño menos de 3b',
      'LLaVA Ollama configuración',
      'ejecutar modelo de visión localmente',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen3-vl local',
      'qwen3-vl ollama',
      'mejor modelo de visión local',
      'comprensión de imágenes sin conexión',
      'modelo multimodal local',
      'ollama modelo de visión',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**Para la mayoría de las personas, Gemma 4 (Apache 2.0) con Ollama es el mejor modelo de visión local en 2026: gemma4:e4b cabe en tarjetas de 8 GB; gemma4:26b o 31b encajan en 24 GB.** La tarjeta de modelo de Google indica puntuaciones MMMU Pro de 52.6% (E4B), 69.1% (12B), 73.8% (26B A4B) y 76.9% (31B), frente al 49.7% del anterior Gemma 3 27B. Para OCR de documentos y texto multilingüe, Qwen3-VL 8B (6.1 GB de descarga), Qwen3.5 9B y el más reciente Qwen3.8 27B (18 GB) son las opciones más sólidas. Llama 3.2 Vision, antes la recomendación por defecto, ha sido reportado como incapaz de cargar en versiones recientes de Ollama ("unknown model architecture: mllama"), por lo que ya no es la primera opción. Con menos de 3 GB, usa Qwen3.5 2B, Qwen3-VL 2B o Moondream 2. Todos los modelos funcionan 100% sin conexión una vez descargados.',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son los mejores modelos de visión locales para usar con Ollama en 2026?',
        answer:
          'El mejor modelo de visión local para Ollama en 2026 es **Gemma 4** (`ollama pull gemma4`) para la comprensión general de imágenes. Usa **Qwen3-VL**, **Qwen3.5** o **Qwen3.8** para OCR de documentos y texto multilingüe, y **Moondream 2** o **Qwen3.5 2B** con hardware de menos de 4 GB.',
        bullets: [
          'Menos de 4 GB de VRAM → Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) o Moondream 2 (1.7 GB): rápidos, pero limitados con imágenes complejas y texto denso.',
          '6–8 GB de VRAM → Gemma 4 E4B (6.6–9.5 GB de descarga), Qwen3-VL 8B (6.1 GB) o Qwen3.5 9B (6.6–7.6 GB): el mejor equilibrio entre calidad y hardware.',
          '16–24 GB de VRAM → Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) o Qwen3-VL 32B (21 GB): calidad cercana a la nube en documentos y fotografías.',
          'Apple M-series o 64+ GB → Qwen3.5 122B (81 GB) o Llama 3.2 Vision 90B (55 GB); Qwen3-VL 235B necesita 143 GB.',
          'Configuración: `ollama pull gemma4:e4b`, luego `ollama run gemma4:e4b "Describe esta imagen: ./foto.jpg"` (incluye la ruta de la imagen en el prompt).',
          'Mejor para OCR: Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — lo más fuerte en extracción de texto de documentos.',
          'Mejor para UI / capturas de pantalla: InternVL 2.5 (GGUF de la comunidad), o Gemma 4 si además necesitas tool calling.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Puntos clave', anchor: '#key-takeaways' },
      { label: 'Datos rápidos', anchor: '#quick-facts' },
      { label: '¿Qué son los modelos visión-lenguaje?', anchor: '#what-are-vlms' },
      { label: 'Tabla comparativa de modelos', anchor: '#model-comparison' },
      { label: 'Test de precisión real: extracción de facturas', anchor: '#invoice-accuracy-test' },
      { label: 'Soporte multi-imagen', anchor: '#multi-image-support' },
      { label: 'Configuración con Ollama (paso a paso)', anchor: '#ollama-setup' },
      { label: 'Caso de uso 1: OCR y extracción de documentos', anchor: '#use-case-ocr' },
      { label: 'Caso de uso 2: Preguntas y respuestas sobre imágenes', anchor: '#use-case-qa' },
      { label: 'Caso de uso 3: Capturas de pantalla y análisis de UI', anchor: '#use-case-screenshot' },
      { label: 'Caso de uso 4: Lectura de gráficos y diagramas', anchor: '#use-case-chart' },
      { label: 'Caso de uso 5: Análisis de fotogramas de video', anchor: '#use-case-video' },
      { label: 'VRAM y comprobación de rendimiento real', anchor: '#vram-reality' },
      { label: 'Modelos de visión locales vs GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'Análisis detallado de LLaVA', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL — Mejor OCR multilingüe', anchor: '#qwen-vl-deep-dive' },
      { label: 'Cómo elegir tu modelo de visión', anchor: '#how-to-choose' },
      { label: 'Preguntas frecuentes', anchor: '#faq' },
      { label: 'Fuentes', anchor: '#sources' },
      { label: 'Lectura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 es el mejor modelo de visión local para la mayoría de los desarrolladores en 2026.** Es Apache 2.0, está disponible en Ollama en cinco tamaños (E2B, E4B, 12B, 26B A4B, 31B) y su tarjeta de modelo indica un MMMU Pro de 52.6% (E4B) a 76.9% (31B), frente al 49.7% de Gemma 3 27B.',
          '**Qwen3-VL 8B, Qwen3.5 9B y Qwen3.8 27B lideran el OCR de documentos y el texto multilingüe.** Qwen3-VL 8B requiere una descarga de 6.1 GB; Qwen3.8 27B (Apache 2.0, 18 GB) indica 91.1 en OmniDocBench 1.5.',
          '**Llama 3.2 Vision ya no es la opción segura por defecto.** Hay usuarios que reportan "unknown model architecture: mllama" en versiones recientes de Ollama (issues de GitHub #16490 y #16547, sin solución confirmada), y su ficha en Ollama no se actualiza desde hace aproximadamente un año.',
          '**Con menos de 4 GB, elige Qwen3.5 2B, Qwen3-VL 2B o Moondream 2.** Los tres son pequeños y rápidos, pero tienen dificultades con escenas complejas, texto denso y lectura precisa de gráficos.',
          '**LLaVA 1.6 es uno de los VLM locales más documentados y probados por la comunidad.** Es una opción práctica cuando necesitas tutoriales y ayuda para resolver problemas, aunque los modelos más nuevos lo superan en OCR y calidad.',
          '**Usa el parámetro `format` de Ollama para obtener salida estructurada.** Pasar un esquema JSON restringe la respuesta a tus campos para que se analice sin errores; aun así, valida cada valor contra la fuente.',
          '**Ningún modelo local iguala a GPT-5.5 Vision en todo.** Los VLMs locales en 2026 son una sólida opción de nivel 2 — excelentes para documentos estructurados y fotografías claras, más débiles con escenas ambiguas, escritura manuscrita e infografías complejas.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Qué hacen los VLMs:** Aceptan imagen + texto como entrada → producen texto. No son generadores de imágenes — estos modelos *comprenden* imágenes.',
          '**Soporte en Ollama:** Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, Llama 3.2 Vision, MiniCPM-V, LLaVA y Moondream están en la biblioteca oficial de Ollama; InternVL, PaliGemma 2 y SmolVLM requieren builds de la comunidad.',
          '**Modelos utilizables más pequeños:** Moondream 2 (1.8B, 1.7 GB de descarga), Qwen3-VL 2B (1.9 GB) y Qwen3.5 0.8B (1.2–1.3 GB).',
          '**Modelos locales prácticos más grandes:** Qwen3.5 122B (81 GB) y Llama 3.2 Vision 90B (55 GB) con 64 GB+ de memoria unificada (Apple M-series o multi-GPU); Qwen3-VL 235B necesita 143 GB.',
          '**Formato de entrada de imagen:** JPEG, PNG, WebP aceptados. La resolución máxima varía por modelo (típicamente 1024×1024 a 4096×4096).',
          '**Audio y video:** Gemma 4 E2B, E4B y 12B también aceptan audio; todos los tamaños de Gemma 4 y Qwen3.8 procesan video como fotogramas.',
          '**Precisión OCR:** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**Multimodal ≠ rápido:** Los modelos de visión añaden un encoder visual al LLM — espera una generación de tokens ~30–60% más lenta que un modelo solo de texto del mismo número de parámetros.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: '¿Qué son los modelos visión-lenguaje (VLMs)?',
        content:
          'Un modelo visión-lenguaje (VLM) es una red neuronal que procesa simultáneamente entradas de imagen y texto y produce texto como salida. La arquitectura estándar combina un encoder visual (típicamente CLIP o SigLIP) con un decodificador de lenguaje (un LLM), conectados por una capa de proyección que mapea las características de la imagen al espacio de tokens que el LLM comprende.',
        items: [
          '**Cómo se diferencian de los generadores de imágenes:** Stable Diffusion, FLUX y DALL-E 3 son generadores de texto a imagen — producen imágenes a partir de prompts de texto. Los VLMs son modelos de imagen a texto — describen, analizan y responden preguntas sobre imágenes.',
          '**Cómo se diferencian de las herramientas OCR tradicionales:** El OCR tradicional (Tesseract, PaddleOCR) extrae texto de documentos estructurados mediante reconocimiento de patrones. Los VLMs comprenden el contexto — pueden describir el significado de una tabla, responder preguntas sobre un gráfico o identificar objetos en una fotografía.',
          '**Por qué ejecutarlos en local:** Documentos privados (registros médicos, escaneos legales, estados financieros), capturas de pantalla propietarias (paneles internos, código fuente), o cualquier flujo de trabajo donde enviar imágenes a APIs en la nube plantee problemas de cumplimiento o confidencialidad.',
          '**Qué no pueden hacer:** Generar imágenes, ejecutar código mostrado en capturas de pantalla ni acceder a internet. Los VLMs solo producen texto basado en lo que es visible en la imagen.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Modelos de visión locales disponibles — Tabla comparativa',
        content:
          'Comparación de los modelos de visión locales más capaces disponibles vía Ollama o inferencia directa, consultada el 19 de octubre de 2026. La columna de VRAM es el tamaño de descarga de Ollama (cuantizado a 4 bits salvo indicación contraria) — añade 1–2 GB para el contexto. *Llama 3.2 Vision ha sido reportado como incapaz de cargar en versiones recientes de Ollama (ver la nota sobre Llama 3.2 Vision más abajo).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para 8 GB de VRAM: Gemma 4 E4B o Qwen3-VL 8B; para 24 GB: Gemma 4 26B/31B o Qwen3.8 27B — todos se ejecutan en local vía Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4 es el mejor en general; Qwen3-VL, Qwen3.5 y Qwen3.8 lideran el OCR de documentos y el texto multilingüe; Moondream y Qwen3.5 2B son las opciones ligeras con menos de 4 GB de VRAM.',
          },
        ],
        columns: ['Modelo', 'Parámetros', 'VRAM (Q4)', 'Tipos de imagen', 'Calidad', '¿Vía Ollama?'],
        rows: [
          {
            'Modelo': 'Moondream 2',
            'Parámetros': '1.8B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagen': 'Fotos simples',
            'Calidad': 'Básica',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'SmolVLM 2.2B',
            'Parámetros': '2.2B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagen': 'Fotos simples, descripciones',
            'Calidad': 'Básica+',
            '¿Vía Ollama?': 'Comunidad',
          },
          {
            'Modelo': 'Qwen3.5 2B',
            'Parámetros': '2B',
            'VRAM (Q4)': '2.7–3.1 GB',
            'Tipos de imagen': 'Fotos, docs, OCR',
            'Calidad': 'Buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'PaliGemma 2 3B',
            'Parámetros': '3B',
            'VRAM (Q4)': '~3 GB',
            'Tipos de imagen': 'Fotos, docs',
            'Calidad': 'Buena',
            '¿Vía Ollama?': 'Comunidad',
          },
          {
            'Modelo': 'Gemma 4 E2B',
            'Parámetros': '2.3B efect.',
            'VRAM (Q4)': '4.6–7.5 GB',
            'Tipos de imagen': 'Fotos, docs, audio',
            'Calidad': 'Buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'LLaVA 1.6 7B',
            'Parámetros': '7B',
            'VRAM (Q4)': '~6 GB',
            'Tipos de imagen': 'Fotos, docs, gráficos',
            'Calidad': 'Buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'MiniCPM-V',
            'Parámetros': '8B',
            'VRAM (Q4)': '~6 GB (5.5 GB de descarga)',
            'Tipos de imagen': 'Fotos, docs, OCR',
            'Calidad': 'Muy buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Qwen3-VL 8B',
            'Parámetros': '8B',
            'VRAM (Q4)': '~6.1 GB',
            'Tipos de imagen': 'Fotos, docs, OCR, multilingüe',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Qwen3.5 9B',
            'Parámetros': '9B',
            'VRAM (Q4)': '6.6–7.6 GB',
            'Tipos de imagen': 'Fotos, docs, OCR, multilingüe',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Gemma 4 E4B',
            'Parámetros': '4.5B efect.',
            'VRAM (Q4)': '6.6–9.5 GB',
            'Tipos de imagen': 'Fotos, docs, audio',
            'Calidad': 'Muy buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Gemma 4 12B',
            'Parámetros': '12B',
            'VRAM (Q4)': '7.7–8.0 GB',
            'Tipos de imagen': 'Fotos, docs, audio',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'InternVL 2.5 8B',
            'Parámetros': '8B',
            'VRAM (Q4)': '~8 GB',
            'Tipos de imagen': 'Docs, gráficos, UI, código',
            'Calidad': 'Excelente (UI/gráficos)',
            '¿Vía Ollama?': 'Comunidad',
          },
          {
            'Modelo': 'Llama 3.2 Vision 11B',
            'Parámetros': '11B',
            'VRAM (Q4)': '~8 GB (7.8 GB de descarga)',
            'Tipos de imagen': 'Fotos, docs',
            'Calidad': 'Excelente*',
            '¿Vía Ollama?': 'Sí*',
          },
          {
            'Modelo': 'LLaVA 1.6 13B',
            'Parámetros': '13B',
            'VRAM (Q4)': '~10 GB',
            'Tipos de imagen': 'Fotos, docs, gráficos',
            'Calidad': 'Muy buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Gemma 4 26B A4B',
            'Parámetros': '26B (4B activos)',
            'VRAM (Q4)': '16–19 GB',
            'Tipos de imagen': 'Fotos, docs, complejo',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Qwen3.8 27B',
            'Parámetros': '27B',
            'VRAM (Q4)': '18 GB',
            'Tipos de imagen': 'Fotos, docs, video, OCR',
            'Calidad': 'Mejor (open-source)',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Gemma 4 31B',
            'Parámetros': '31B',
            'VRAM (Q4)': '19–20 GB',
            'Tipos de imagen': 'Fotos, docs, complejo',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Qwen3-VL 32B',
            'Parámetros': '32B',
            'VRAM (Q4)': '21 GB',
            'Tipos de imagen': 'Fotos, docs, OCR, complejo',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Llama 3.2 Vision 90B',
            'Parámetros': '90B',
            'VRAM (Q4)': '55 GB',
            'Tipos de imagen': 'Fotos, docs, complejo',
            'Calidad': 'Muy buena*',
            '¿Vía Ollama?': 'Sí*',
          },
          {
            'Modelo': 'Qwen3.5 122B',
            'Parámetros': '122B',
            'VRAM (Q4)': '81 GB',
            'Tipos de imagen': 'Fotos, docs, complejo',
            'Calidad': 'Mejor local',
            '¿Vía Ollama?': 'Sí',
          },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-es.svg',
        imageCaption:
          'Comparación de modelos de visión locales por VRAM y calidad OCR: Moondream 2 funciona con 2 GB, Qwen3-VL 8B lidera el OCR de documentos con 6 GB, y Gemma 4 ofrece la mejor calidad general desde 8 GB (E4B) hasta 24 GB (26B y 31B) vía Ollama.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: 'Test de precisión real: extracción de facturas',
        content:
          'Comparación de la precisión de los modelos de visión locales en una tarea de extracción de documentos estructurados. Test: extraer 5 campos (nombre del proveedor, fecha, total, importe de impuesto, número de líneas) de la misma factura de muestra.',
        columns: ['Modelo', 'Proveedor', 'Fecha', 'Total', 'Impuesto', 'Líneas', 'Puntuación'],
        rows: [
          { 'Modelo': 'Moondream 2', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✗', 'Impuesto': '✗', 'Líneas': '✗', 'Puntuación': '2/5' },
          { 'Modelo': 'LLaVA 1.6 7B', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✗', 'Líneas': '✓', 'Puntuación': '4/5' },
          { 'Modelo': 'MiniCPM-V 4.5', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✓', 'Líneas': '✓', 'Puntuación': '5/5' },
          { 'Modelo': 'Qwen3-VL 8B', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✓', 'Líneas': '✓', 'Puntuación': '5/5' },
          { 'Modelo': 'Llama 3.2 11B', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✓', 'Líneas': '✓', 'Puntuación': '5/5' },
          { 'Modelo': 'GPT-5.5 Vision', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✓', 'Líneas': '✓', 'Puntuación': '5/5' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Resultados obtenidos con una única factura de prueba. Tu precisión variará según la calidad del documento, la tipografía y la complejidad del diseño. Verifica siempre los números extraídos contra los documentos originales.',
          },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'Soporte multi-imagen',
        content:
          'No todos los modelos de visión locales aceptan múltiples imágenes en una sola solicitud. El soporte multi-imagen es importante para el procesamiento de documentos (enviar todas las páginas de un PDF de varias páginas) y tareas de comparación visual (comparar dos fotos de un producto).',
        columns: ['Función', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Función': 'Entrada multi-imagen',
            'Moondream': 'No',
            'LLaVA 7B': 'No',
            'MiniCPM-V': 'Sí (hasta 4)',
            'Qwen3-VL': 'Sí (hasta 8)',
            'LLaVA 13B': 'No',
            'Llama 3.2 Vision': 'Sí (multi-página)',
            'InternVL': 'Sí',
          },
        ],
        items: [
          'MiniCPM-V acepta hasta 4 imágenes por prompt; Qwen3-VL admite hasta 8. LLaVA y Moondream solo aceptan una imagen por solicitud.',
          '**Cuándo importa el multi-imagen:** Enviar todas las páginas de un PDF de varias páginas para extracción completa del documento. Comparar dos fotos de producto lado a lado. Analizar capturas de pantalla antes/después en un único prompt.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuración con Ollama — paso a paso',
        content:
          'Ollama es la forma más sencilla de ejecutar modelos de visión locales. Una vez instalado Ollama, los modelos de visión funcionan con un único comando pull y aceptan imágenes mediante la CLI o la API HTTP.',
        items: [
          '**Paso 1 — Instalar Ollama:** Descarga desde ollama.com para macOS, Linux o Windows. La instalación tarda menos de 2 minutos.',
          '**Paso 2 — Descargar un modelo de visión:** `ollama pull gemma4:e4b` (6.6–9.5 GB de descarga) para tarjetas de 8 GB, `ollama pull qwen3-vl:8b` (6.1 GB) para OCR, o `ollama pull moondream` (1.8B, 1.7 GB) para configuraciones con poca VRAM.',
          '**Paso 3 — Usar desde la CLI:** `ollama run gemma4:e4b "¿Qué hay en esta imagen? /ruta/a/foto.jpg"` — incluye la ruta de la imagen dentro del prompt; `ollama run` no tiene un flag `--image`.',
          '**Paso 4 — Usar la API HTTP:** Haz un POST a `http://localhost:11434/api/generate` con la imagen como cadena en Base64 en el array `images`. Añade un esquema JSON en el campo `format` para obtener salida estructurada.',
          '**Paso 5 — Ejemplo en Python:** Usa la biblioteca `requests` con codificación Base64 — ver el bloque de código a continuación.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# Ejemplo de uso
result = ask_vision_model("factura.png", "Extrae todas las líneas de artículos y totales de esta factura.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-es.svg',
        imageCaption:
          'Pipeline de configuración de Ollama Vision: instalar Ollama, descargar un modelo de visión como gemma4:e4b, ejecutarlo vía CLI con la ruta de la imagen en el prompt o mediante la API HTTP en localhost:11434, y obtener texto para OCR, preguntas y respuestas o descripción de imágenes.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Caso de uso 1: OCR y extracción de documentos',
        content:
          '**Los VLMs superan al OCR tradicional en documentos semiestructurados** — facturas, recibos, contratos y tablas donde el diseño importa tanto como el texto en sí. El OCR tradicional (Tesseract) extrae caracteres; los VLMs comprenden qué significan esos caracteres en contexto.',
        items: [
          '**Qué funciona bien:** Facturas escaneadas, capturas de PDF, notas manuscritas en letra de molde, tablas con bordes claros, tarjetas de visita.',
          '**Qué funciona peor:** Texto manuscrito en cursiva, escaneos a menos de 150 DPI, JPEG con mucha compresión, texto superpuesto.',
          '**Mejores modelos para OCR:** Qwen3-VL 8B y Qwen3.5 9B (categoría de 6–8 GB), Qwen3.8 27B (18 GB, 91.1 en OmniDocBench 1.5 según su tarjeta de modelo), Gemma 4 para tipos de documentos mixtos.',
          '**Prompt engineering para OCR:** "Extrae todo el texto de este documento exactamente como está escrito, conservando los saltos de línea." O: "Devuelve el contenido de esta factura como JSON con los campos: proveedor, fecha, líneas[], total."',
          '**Vs. OCR tradicional:** Los VLMs son más lentos pero más semánticos. Tesseract es más rápido para la extracción de texto puro de documentos limpios. Usa VLMs cuando necesites extracción de datos estructurados, no solo texto plano.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Caso de uso 2: Preguntas y respuestas sobre imágenes',
        content:
          '**Para la comprensión general de escenas, descripciones de productos y Q&A visual, Gemma 4 (E4B con 8 GB, 26B o 31B con 24 GB) es el modelo local recomendado.** Produce descripciones naturales y detalladas, y maneja preguntas matizadas sobre el contenido de fotografías.',
        items: [
          '**Descripción de escenas:** "¿Qué hay en esta foto?" — objetos, personas, actividades, entorno, ambiente.',
          '**Catalogación de productos:** Procesa fotos de productos con una plantilla de prompt como "Describe este producto: color, forma, material, estado." Útil para inventario de comercio electrónico sin APIs en la nube.',
          '**Accesibilidad:** Genera texto alternativo para imágenes a escala. Con precisión suficiente para el cumplimiento de accesibilidad en fotos de productos estándar.',
          '**Mejores modelos:** Gemma 4 12B o 26B A4B para Q&A general sobre fotos. Qwen3.5 4B o LLaVA 1.6 7B para procesamiento en volumen donde la velocidad importa más que la precisión.',
          '**Consideración de velocidad:** La velocidad depende del modelo, la GPU y la longitud de la descripción — prueba una muestra de 20 imágenes en tu propio hardware antes de comprometerte con un lote de miles.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'Caso de uso 3: Capturas de pantalla y análisis de UI',
        content:
          '**Para analizar capturas de pantalla de aplicaciones, mensajes de error y paneles, InternVL 2.5 es el modelo local más potente** — sus datos de entrenamiento enfatizaron la UI de software, capturas de GitHub y salidas de ejecución de código.',
        items: [
          '**Flujos de trabajo para desarrolladores:** Envía capturas de mensajes de error al modelo: "¿Qué está mal en esta captura de pantalla y cómo lo solucionarías?"',
          '**Generación de informes de bugs:** Genera automáticamente descripciones de bugs a partir de capturas de pantalla con un prompt estructurado.',
          '**Monitoreo de paneles:** Analiza capturas de pantalla de paneles de monitoreo en busca de anomalías — "¿Hay métricas en nivel de advertencia en esta captura de Grafana?"',
          '**Pruebas de accesibilidad:** Compara capturas antes y después de cambios en la UI para verificar las propiedades de accesibilidad visual.',
          '**Mejores modelos:** InternVL 2.5 8B (build de la comunidad, fuerte en UI), Gemma 4 y Qwen3-VL (soporte oficial en Ollama, tool calling para flujos de agentes).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'Caso de uso 4: Lectura de gráficos y diagramas',
        content:
          '**Extraer datos de gráficos de barras, líneas y tablas es posible pero requiere un prompting cuidadoso.** Todos los VLMs locales son más débiles en la lectura de gráficos que en la descripción de fotos — verifica siempre los números extraídos de gráficos contra los datos originales.',
        items: [
          '**Qué funciona:** Leer etiquetas de ejes, identificar tendencias, comparar alturas relativas de barras, leer valores de tablas con fuentes claras.',
          '**Qué no es fiable:** Extracción numérica precisa de gráficos continuos (p. ej., "la barra del T3 es 43.7 unidades"), porcentajes de gráficos circulares sin etiquetas explícitas.',
          '**Estrategia de prompt:** "Describe la tendencia mostrada en este gráfico de líneas" funciona mejor que "¿Cuál es el valor exacto en marzo de 2026?"',
          '**Mejores modelos para gráficos:** InternVL 2.5 (fuerte comprensión de gráficos), Gemma 4 y Qwen3-VL (buenos en gráficos con etiquetas claras).',
          '**Nota sobre limitaciones:** Ningún VLM local en 2026 extrae de forma fiable números precisos de gráficos visualmente complejos. Para datos de gráficos estructurados, extráelos de la fuente de datos subyacente si es posible.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'Caso de uso 5: Análisis de fotogramas de video',
        content:
          '**Los modelos de visión locales pueden analizar video procesando fotogramas individuales** — extrae fotogramas con ffmpeg, envíalos al modelo de visión y luego encadénalos con un LLM de texto para resumir entre fotogramas. No es en tiempo real: espera 1 fotograma cada 0.5–3 segundos según el modelo y el hardware.',
        items: [
          '**Extracción de fotogramas:** Usa ffmpeg para extraer a 1fps: `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**Análisis por fotograma:** Ejecuta cada fotograma a través del modelo de visión con un prompt consistente (p. ej., "Describe lo que ocurre en este fotograma en una frase").',
          '**Resumen entre fotogramas:** Recopila todas las descripciones de fotogramas y pásalas a un LLM de texto con un prompt de resumen.',
          '**Casos de uso:** Revisión de cámaras de seguridad (marcar fotogramas con actividad inusual), análisis de grabaciones de clases (generar notas diapositiva por diapositiva), inspección de calidad en fabricación (marcar fotogramas donde aparecen defectos).',
          '**Mejores modelos para fotogramas de video:** Gemma 4 o Qwen3.8 para calidad (ambos aceptan video como fotogramas de forma nativa), Qwen3.5 4B o LLaVA 1.6 7B para velocidad (mayor rendimiento de fotogramas).',
          '**Realidad de velocidad:** A 1 fotograma/segundo de extracción y ~1–3 segundos por fotograma, un video de 10 minutos (600 fotogramas) tarda aproximadamente 10–30 minutos en procesarse, según el modelo y la GPU.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("clase.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM y comprobación de rendimiento real',
        content:
          'Los modelos de visión locales añaden un encoder visual al LLM base, lo que aumenta tanto los requisitos de VRAM como el tiempo de inferencia en comparación con los modelos solo de texto.',
        columns: ['Modelo', 'VRAM (Q4)', 'Tokens/seg (RTX 4070)', 'Tokens/seg (M5 Pro 36GB)', '¿Apto para producción?'],
        rows: [
          {
            'Modelo': 'Moondream 2 (1.8B)',
            'VRAM (Q4)': '~2 GB',
            'Tokens/seg (RTX 4070)': '~25–35',
            'Tokens/seg (M5 Pro 36GB)': '~30–40',
            '¿Apto para producción?': 'Sí — para tareas simples',
          },
          {
            'Modelo': 'LLaVA 1.6 7B',
            'VRAM (Q4)': '~6 GB',
            'Tokens/seg (RTX 4070)': '~15–20',
            'Tokens/seg (M5 Pro 36GB)': '~18–25',
            '¿Apto para producción?': 'Sí — propósito general',
          },
          {
            'Modelo': 'MiniCPM-V (8B)',
            'VRAM (Q4)': '~6 GB',
            'Tokens/seg (RTX 4070)': '~12–18',
            'Tokens/seg (M5 Pro 36GB)': '~15–20',
            '¿Apto para producción?': 'Sí — OCR y documentos',
          },
          {
            'Modelo': 'Llama 3.2 Vision 11B',
            'VRAM (Q4)': '~8 GB',
            'Tokens/seg (RTX 4070)': '~10–14',
            'Tokens/seg (M5 Pro 36GB)': '~12–16',
            '¿Apto para producción?': 'Revisa antes el fallo de carga en Ollama',
          },
          {
            'Modelo': 'LLaVA 1.6 13B',
            'VRAM (Q4)': '~10 GB',
            'Tokens/seg (RTX 4070)': '~8–12',
            'Tokens/seg (M5 Pro 36GB)': '~10–14',
            '¿Apto para producción?': 'Sí — con GPU de 12 GB',
          },
          {
            'Modelo': 'Llama 3.2 Vision 90B',
            'VRAM (Q4)': '~64 GB',
            'Tokens/seg (RTX 4070)': 'N/A (requiere multi-GPU o M-Max)',
            'Tokens/seg (M5 Pro 36GB)': 'N/A (requiere M5 Max 128GB+)',
            '¿Apto para producción?': 'Solo Apple Silicon de gama alta',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Los rangos de tokens por segundo son estimaciones orientativas, no mediciones nuevas; no se repitieron para Gemma 4, Qwen3.5 ni Qwen3.8. Haz tu propia prueba en tu hardware con `ollama run <model> --verbose`, que muestra la tasa de evaluación.',
          },
          {
            type: 'note',
            text: 'La velocidad de generación de tokens para los modelos de visión es más lenta que para los modelos solo de texto del mismo tamaño, porque el encoder visual añade una sobrecarga computacional significativa en el primer token de imagen. Los tokens de texto posteriores se generan a velocidad casi normal.',
          },
          {
            type: 'note',
            text: 'La memoria unificada de Apple Silicon permite ejecutar modelos más grandes (Llama 3.2 Vision 90B con 55 GB o Qwen3.5 122B con 81 GB en un Mac de 128 GB) que no caben en la VRAM de una GPU dedicada. La velocidad es ligeramente inferior a la de una GPU NVIDIA equivalente, pero sin limitación de VRAM.',
          },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'Cómo se comparan los modelos de visión locales con GPT-5.5 Vision',
        content:
          'Los VLMs locales han cerrado significativamente la brecha en documentos estructurados, pero siguen por detrás de GPT-5.5 Vision en tareas complejas y ambiguas.',
        items: [
          '**Documentos estructurados (facturas, formularios):** Los modelos locales al 80–90% de la calidad de GPT-5.5 — suficiente para uso en producción con documentos limpios y bien formateados.',
          '**Escenas complejas, imágenes ambiguas:** Los modelos locales al 50–70% de GPT-5.5 — brecha de calidad notable en imágenes con contexto inusual, iluminación o contenido ambiguo.',
          '**Reconocimiento de escritura a mano:** Los modelos locales son significativamente más débiles, especialmente con cursiva. GPT-5.5 Vision maneja la escritura a mano de forma sustancialmente mejor.',
          '**Extracción de datos de gráficos:** Poco fiable tanto en modelos locales como en GPT-5.5, pero GPT-5.5 es más preciso en valores numéricos exactos.',
          '**Costo:** GPT-5.5 Vision a $0.01–0.03 por imagen vs $0 en local. 10,000 imágenes/mes = $100–300 ahorrados con modelos locales.',
          '**Privacidad:** Los modelos locales procesan imágenes en el dispositivo por defecto: las imágenes no se envían a una API en la nube salvo que actives funciones en la nube o herramientas conectadas. GPT-5.5 envía imágenes a los servidores de OpenAI.',
          '**Velocidad:** Los modelos locales a 10–20 tok/seg vs GPT-5.5 a 30–80 tok/seg, pero el local no tiene latencia de red para el procesamiento por lotes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Para el procesamiento en producción de facturas y formularios con entrada limpia, los VLMs locales (Gemma 4, Qwen3-VL 8B, Qwen3.8 27B) pueden reemplazar a GPT-5.5 Vision a cero costo. Para todo lo que involucre escritura a mano, análisis de escenas complejas o contenido ambiguo, GPT-5.5 sigue siendo superior.',
          },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'Análisis detallado de LLaVA',
        content:
          '**LLaVA (Large Language and Vision Assistant) es la arquitectura VLM de código abierto fundamental.** Lanzada por la Universidad de Wisconsin-Madison y Microsoft Research en 2023, estableció el patrón de encoder CLIP + decodificador LLM que siguen la mayoría de los VLMs locales modernos.',
        items: [
          '**Arquitectura:** Encoder visual CLIP ViT-L/14 + decodificador de texto Llama-2 o Mistral, conectados por una capa de proyección lineal simple.',
          '**LLaVA 1.5 vs 1.6:** La versión 1.6 (lanzada a principios de 2024) añadió soporte para entrada en alta resolución mediante parches dinámicos, mejorando significativamente la precisión de OCR y la lectura de gráficos.',
          '**Entrenamiento:** Ajuste por instrucciones en LLaVA-Instruct-150K — un dataset de conversaciones visuales generadas a partir de descripciones de imágenes y anotaciones de detección de objetos.',
          '**Fortalezas:** Amplio conocimiento general, bien documentado, comunidad amplia, extensa integración con Ollama.',
          '**Debilidades:** OCR más débil que Qwen3-VL y MiniCPM-V, análisis de UI más débil que InternVL 2.5, superado en general por Gemma 4 y la familia Qwen3.',
          '**Por qué sigue siendo recomendado:** LLaVA 1.6 tiene la comunidad más grande, la mayor cantidad de tutoriales y los más ejemplos de prompts de todos los VLMs locales. Si tienes problemas, es más fácil encontrar ayuda.',
          '**Análisis completo:** [LLaVA: análisis (2026)](/es/power-local-llm/llava-review) — el análisis dedicado de PromptQuorum, con el matiz de licencia Apache-2.0 más modelo base y comandos reales de Ollama.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL, Qwen3.5 y Qwen3.8 — Mejor OCR multilingüe y rendimiento en documentos',
        content:
          '**La familia Qwen es la opción abierta más sólida para OCR de documentos y texto multilingüe en 2026.** Qwen3-VL (tamaños de 2B a 235B) es la línea de visión dedicada, Qwen3.5 (0.8B a 122B) integra la visión en el modelo base, y Qwen3.8 27B (agosto de 2026, Apache 2.0) es el más reciente, con 91.1 reportado en OmniDocBench 1.5.',
        items: [
          '**Arquitectura:** Soporte de resolución dinámica hasta 4096×4096 — significativamente mayor que LLaVA 1.6 (672×672) o Llama 3.2 Vision (1120×1120). Esto permite leer escaneos de alto DPI sin necesidad de submuestreo.',
          '**OCR multilingüe:** Lo mejor de su clase para chino, japonés, coreano e inglés. Los datos de entrenamiento incluyeron corpus de documentos multilingües a gran escala — una ventaja significativa sobre LLaVA y Llama 3.2 Vision para documentos en idiomas distintos al inglés.',
          '**Qué tamaño elegir:** Qwen3-VL 8B es una descarga de 6.1 GB y encaja en tarjetas de 8 GB; Qwen3.5 9B ocupa 6.6–7.6 GB; Qwen3.8 27B ocupa 18 GB y necesita una tarjeta de 24 GB; Qwen3-VL 32B ocupa 21 GB. Qwen3-VL no tiene variante de 72B en Ollama.',
          '**Instalación en Ollama:** `ollama pull qwen3-vl:8b`, `ollama pull qwen3.5:9b` o `ollama pull qwen3.8` — todos en la biblioteca de modelos de Ollama.',
          '**Soporte multi-imagen:** Acepta hasta 8 imágenes por solicitud — la mayor capacidad multi-imagen de todos los modelos de esta comparación.',
          '**Páginas del modelo:** [Qwen3-VL en Ollama](https://ollama.com/library/qwen3-vl), [Qwen3.8-27B en Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Cómo elegir tu modelo de visión',
        content:
          'Un árbol de decisión basado en VRAM para seleccionar el modelo de visión local adecuado:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Elige tu modelo primero por VRAM (2→4→8→24 GB), luego refina por caso de uso (OCR, UI, Q&A general o máxima calidad).',
          },
          {
            type: 'plain-terms',
            text: 'Menos de 4 GB: Qwen3.5 2B o Moondream. 8 GB: Gemma 4 E4B para fotos, Qwen3-VL 8B para documentos. 24 GB: Gemma 4 26B/31B o Qwen3.8 27B. 64+ GB: Qwen3.5 122B.',
          },
        ],
        items: [
          '**Menos de 4 GB de VRAM:** Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) o Moondream 2 (1.7 GB) son las opciones prácticas. PaliGemma 2 (3B) y SmolVLM (2.2B) son alternativas con builds de la comunidad. Ninguno es adecuado para OCR de texto denso.',
          '**6–8 GB de VRAM:** Gemma 4 E4B para Q&A general sobre fotos, Qwen3-VL 8B o Qwen3.5 9B para OCR de documentos y texto multilingüe, LLaVA 1.6 7B donde el soporte comunitario importa.',
          '**12–16 GB de VRAM:** Gemma 4 12B (7.7–8.0 GB de descarga) es la recomendación clara — buenas puntuaciones de visión para su tamaño, con entrada de audio y una ventana de contexto de 256K. LLaVA 1.6 13B e InternVL 2.5 8B (capturas de UI y código) también caben.',
          '**24 GB de VRAM:** Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) o Qwen3-VL 32B (21 GB) — la opción local más cercana a la calidad de visión de nivel nube.',
          '**64+ GB de memoria unificada (Apple M-Max/Ultra, multi-GPU):** Qwen3.5 122B (81 GB) o Llama 3.2 Vision 90B (55 GB) para los modelos locales más grandes; ambos necesitan hardware con mucha memoria y son más lentos por token que los modelos de la categoría de 24 GB.',
          '**Verifica siempre los números:** Independientemente del modelo, contrasta cualquier valor numérico extraído de gráficos o tablas con los datos originales. Los VLMs locales alucinan números precisos a partir de gráficos visuales.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
          {
            q: '¿Por qué llama3.2-vision falla con "unknown model architecture: mllama"?',
            a: 'Hay usuarios que reportan este error con llama3.2-vision en versiones recientes de Ollama (issues de GitHub #16490 y #16547, abiertos a mediados de 2026; el segundo se cerró como duplicado sin solución confirmada). Actualizar Ollama o volver a descargar el modelo no ayudó en esos reportes. Cambia a Gemma 4 o Qwen3-VL, que se mantienen activamente en la biblioteca de Ollama, salvo que debas seguir con Llama 3.2 Vision — en ese caso, fija una versión de Ollama en la que todavía cargue.',
          },
          {
            q: '¿Cuál es el mejor modelo visión-lenguaje pequeño con menos de 3B de parámetros?',
            a: 'Qwen3.5 2B (2.7–3.1 GB de descarga) y Qwen3-VL 2B (1.9 GB) son las opciones pequeñas más sólidas en Ollama; Moondream 2 (1.8B, 1.7 GB) es la más ligera. Gemma 4 E2B (2.3B de parámetros efectivos, 4.6–7.5 GB de descarga) añade entrada de audio. Espera un OCR y una comprensión de escenas complejas más débiles que en la categoría de 8B.',
          },
          {
            q: '¿Qué modelos locales pueden manejar entrada de cámara y micrófono en vivo?',
            a: 'Gemma 4 E2B, E4B y 12B aceptan tanto imágenes como audio, lo que los convierte en la base natural de un asistente local que ve y oye. El modelo por sí solo no es un sistema en vivo: sigues necesitando un bucle de captura (obtener fotogramas, fragmentar el audio), una vía de voz a texto o de entrada de audio, y un paso de texto a voz para las respuestas habladas. Confirma que la versión de tu runtime realmente pasa el audio al modelo antes de construir sobre ello.',
          },
          {
            q: '¿Cómo obtengo una salida estructurada fiable a partir de capturas y documentos?',
            a: 'Pasa un esquema JSON en el campo `format` de Ollama, fija la temperatura en 0 y pide solo los campos visibles en la imagen. Esto restringe la respuesta a JSON válido con tus claves; no hace que los valores sean correctos, así que valida números y fechas contra la fuente y registra los fallos. Los modelos más grandes (8B en adelante) siguen los esquemas con más consistencia que los de 2B.',
          },
          {
            q: '¿Cuáles son las mejores alternativas a GPT-4V que se ejecutan totalmente en el dispositivo?',
            a: 'Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) y Qwen3-VL 32B (21 GB) son las más cercanas en una GPU de 24 GB; Gemma 4 E4B y Qwen3-VL 8B cubren equipos de 8 GB. Todos pueden funcionar sin conexión a internet a través de Ollama. Igualan a los modelos en la nube en documentos limpios y fotografías, pero se quedan atrás en escritura a mano, escenas ambiguas e infografías complejas.',
          },
          {
            q: '¿Puedo usar LLaVA o Llama 3.2 Vision sin Ollama?',
            a: 'Sí. Puedes ejecutar LLaVA y Llama 3.2 Vision directamente usando llama.cpp (con soporte de visión), la biblioteca transformers (con la tarjeta de modelo apropiada) o LM Studio (que tiene una GUI para modelos de visión). Ollama se recomienda por su simplicidad — gestiona automáticamente la descarga del modelo, la selección de cuantización y el hosting de la API.',
          },
          {
            q: '¿Llama 3.2 Vision admite entrada PDF directa?',
            a: 'Ningún VLM local acepta PDF directamente. Primero debes convertir las páginas del PDF a imágenes (usando pdf2image, pypdfium2 o similar) y luego enviar cada página como una solicitud de imagen separada. Para un PDF de 10 páginas, envías 10 consultas de imagen separadas y concatenas o resumes los resultados.',
          },
          {
            q: '¿Cómo se comparan los modelos de visión locales con GPT-5.5 Vision?',
            a: 'GPT-5.5 Vision sigue siendo significativamente mejor en escenas ambiguas, escritura a mano, infografías complejas y tareas que requieren conocimiento del mundo. Gemma 4 y Qwen3-VL se acercan a GPT-5.5 en documentos estructurados (facturas, formularios, fotos claras) pero se quedan atrás en imágenes matizadas o ambiguas. Consulta la comparación completa de arriba para ver el desglose de costo, privacidad y velocidad.',
          },
          {
            q: '¿Qué resolución de imagen admiten los VLMs locales?',
            a: 'LLaVA 1.6 admite hasta 672×672 de resolución efectiva (con parches dinámicos). MiniCPM-V admite hasta 1792×1792 — una razón por la que supera a LLaVA en escaneos de documentos a alto DPI. Llama 3.2 Vision admite hasta 1120×1120. Gemma 4 y Qwen3-VL aceptan relaciones de aspecto y resoluciones variables. Para los mejores resultados de OCR, envía imágenes de documentos a 150+ DPI.',
          },
          {
            q: '¿Puedo hacer fine-tuning de un modelo de visión local con mis propias imágenes?',
            a: 'Sí, pero el fine-tuning de VLMs requiere más recursos que el fine-tuning de LLMs solo de texto — necesitas procesar tanto imágenes como texto de entrenamiento a través del forward pass completo. El fine-tuning de LLaVA está bien documentado usando la base de código de entrenamiento original. MiniCPM-V admite fine-tuning a través de sus scripts de entrenamiento oficiales en Hugging Face. Para la mayoría de los casos de uso, el prompt engineering solo es suficiente sin necesidad de fine-tuning.',
          },
          {
            q: '¿Cuál es el mejor modelo de visión local para 8 GB de VRAM?',
            a: 'Gemma 4 E4B (6.6–9.5 GB de descarga) para uso general, o Qwen3-VL 8B (6.1 GB) si el OCR de documentos o el texto multilingüe es la necesidad principal. Ambos están disponibles vía Ollama con un único comando pull. Qwen3.5 9B (6.6–7.6 GB) es una tercera opción.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — ¿cuál es mejor para OCR?',
            a: 'MiniCPM-V es más preciso que LLaVA en OCR de documentos, especialmente en tablas densas y escaneos a alto DPI, pero Qwen3-VL 8B es una opción de OCR más sólida que ambos. LLaVA 1.6 está mejor documentado y tiene más soporte comunitario. Ten en cuenta que la página de minicpm-v en Ollama todavía describe MiniCPM-V 2.6 (5.5 GB); las versiones más nuevas de MiniCPM-V requieren un build de Hugging Face o llama.cpp.',
          },
          {
            q: '¿Pueden los modelos de visión locales leer escritura a mano?',
            a: 'Escritura a mano en letra de molde (letras de bloque): sí, con precisión moderada en Gemma 4, Qwen3-VL y MiniCPM-V. Escritura en cursiva: poco fiable en todos los modelos locales. GPT-5.5 Vision es significativamente mejor con cursiva. Para OCR de escritura a mano en cursiva en producción, se siguen recomendando las APIs en la nube.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Tarjeta de modelo de Gemma 4 en Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — Licencia Apache 2.0 de Google, modalidades admitidas por tamaño y resultados de MMMU Pro.',
          '[Gemma 4 en Ollama](https://ollama.com/library/gemma4) — etiquetas, tamaños de descarga y ventanas de contexto.',
          '[Qwen3.8-27B en Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — licencia Apache 2.0, contexto de 262K, resultado en OmniDocBench 1.5.',
          '[Qwen3.5 en Ollama](https://ollama.com/library/qwen3.5) y [Qwen3-VL en Ollama](https://ollama.com/library/qwen3-vl) — tamaños y tamaños de descarga.',
          '[Llama 3.2 Vision en Ollama](https://ollama.com/library/llama3.2-vision) y [issue #16547 de Ollama](https://github.com/ollama/ollama/issues/16547) — ficha del modelo y el error de carga de mllama reportado.',
          '[Página del proyecto LLaVA](https://llava-vl.github.io) — Tarjetas de modelo LLaVA 1.5 y 1.6, detalles de arquitectura y descripción del dataset de entrenamiento.',
          '[MiniCPM-V en Ollama](https://ollama.com/library/minicpm-v) y [OpenBMB en Hugging Face](https://huggingface.co/openbmb) — tarjetas de modelo y benchmarks de OCR.',
          '[Moondream en Ollama](https://ollama.com/library/moondream) y [Moondream en GitHub](https://github.com/vikhyat/moondream) — descarga del modelo y scripts de inferencia.',
          '[InternVL 2.5 en Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — Tarjeta de modelo de OpenGVLab, puntuaciones de benchmark en documentos y tareas de UI.',
          '[Documentación de Ollama](https://ollama.com) — Soporte de modelos de visión, salidas estructuradas, referencia de API y biblioteca de modelos.',
          '[PaliGemma 2 en Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Tarjeta de modelo PaliGemma 2 3B de Google.',
          '[SmolVLM en Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — Tarjeta de modelo SmolVLM de HuggingFace e instrucciones de inferencia.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[¿Qué modelos de Ollama admiten visión?](/es/prompt-bites/which-ollama-models-support-vision) — respuesta rápida sobre qué modelos de la biblioteca de Ollama aceptan imágenes, con requisitos de VRAM.',
          '[Modelos de visión de Ollama (2026)](/es/power-local-llm/ollama-vision-models-review) — una guía práctica y enfocada para ejecutar modelos de visión específicamente mediante Ollama: sintaxis real de CLI/API y qué modelos hay realmente en su biblioteca.',
          '[VLM en Camaras y Drones 2026](/es/power-local-llm/vlm-video-analytics-drones-edge) -- Los fundamentos de VLM de escritorio estan aqui; para despliegue embebido en camaras y drones, consulta esta guia centrada en el borde.',
          '[Pipeline de IA multimodal local 2026](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combina modelos de visión con STT y TTS en un stack multimodal local completo.',
          '[Reconocimiento de voz local 2026: Whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison) — Añade entrada de voz para complementar la salida de visión.',
          '[TTS local y clonación de voz 2026](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Añade salida de voz para leer en voz alta las respuestas del VLM.',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — Requisito previo: configuración e instalación de Ollama.',
          '[Guía de hardware para LLMs locales](/es/local-llms/local-llm-hardware-guide) — Requisitos de VRAM y RAM para la inferencia de modelos de visión.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen3-VL y configuración multimodal con Ollama',
       description: 'Preguntas sobre imágenes, OCR y análisis de capturas de pantalla sin conexión en 2026. Benchmark: LLaVA 1.6, Llama 3.2 Vision, Qwen3-VL, MiniCPM-V. Guía de VRAM y pasos de configuración con Ollama.',
       url: 'https://www.promptquorum.com/es/power-local-llm/local-vision-models-llava-ollama-2026',
       inLanguage: 'es',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Intermediate',
     },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-pt.webp',
    title: 'Melhores modelos de visão locais 2026: Gemma 4, Qwen3-VL, LLaVA e configuração multimodal com Ollama',
    seoTitle: 'Melhores modelos de visão locais 2026: Gemma 4, Qwen3-VL e Ollama',
    intro:
      'Os modelos visão-linguagem (VLM) aceitam imagens e texto como entrada e retornam texto — para OCR de documentos, perguntas e respostas sobre imagens, análise de capturas de tela e leitura de gráficos, tudo localmente. Em 2026, a forma mais simples de executar VLMs é via Ollama: baixe um modelo, envie uma imagem e obtenha uma descrição ou resposta. Este guia compara os principais modelos de visão locais (Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, MiniCPM-V, LLaVA 1.6, Llama 3.2 Vision, Moondream 2, InternVL 2.5), explica a configuração do Ollama passo a passo e associa cada modelo ao seu melhor caso de uso conforme o requisito de VRAM. Os tamanhos de download vêm da biblioteca de modelos do Ollama e os números de qualidade vêm das fichas de modelo dos fabricantes, verificados em 19 de outubro de 2026.',
    metaDescription:
      'Melhores VLMs locais para Ollama em 2026: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. VRAM por modelo, opções de OCR e passos de configuração.',
    twitterDescription:
      'Melhores modelos de visão locais 2026: Gemma 4, Qwen3-VL, MiniCPM-V, LLaVA via Ollama. Perguntas sobre imagens, OCR, análise de capturas offline. Guia de VRAM e configuração.',
    audience:
      'Desenvolvedores que precisam de compreensão de imagens localmente sem APIs na nuvem — para processamento de documentos, análise de capturas, ferramentas de acessibilidade, sistemas de inventário ou fluxos de trabalho com imagens sensíveis.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modelo de visão local',
    targetKeywords: [
      'modelo de visão local 2026',
      'melhor vlm local',
      'gemma 4 visão ollama',
      'modelo visão-linguagem pequeno abaixo de 3b',
      'LLaVA Ollama configuração',
      'executar modelo de visão localmente',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen3-vl local',
      'qwen3-vl ollama',
      'melhor modelo de visão local',
      'compreensão de imagens offline',
      'modelo multimodal local',
      'ollama modelo de visão',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**Para a maioria das pessoas, Gemma 4 (Apache 2.0) via Ollama é o melhor modelo de visão local em 2026: gemma4:e4b cabe em placas de 8 GB, gemma4:26b ou 31b servem para 24 GB.** A ficha de modelo do Google reporta pontuações MMMU Pro de 52.6% (E4B), 69.1% (12B), 73.8% (26B A4B) e 76.9% (31B), contra 49.7% do Gemma 3 27B anterior. Para OCR de documentos e texto multilíngue, Qwen3-VL 8B (download de 6.1 GB), Qwen3.5 9B e o mais novo Qwen3.8 27B (18 GB) são as melhores opções. O Llama 3.2 Vision, antes a recomendação padrão, tem relatos de falha ao carregar em versões recentes do Ollama ("unknown model architecture: mllama"), por isso deixou de ser a primeira escolha. Abaixo de 3 GB, use Qwen3.5 2B, Qwen3-VL 2B ou Moondream 2. Depois de baixados, todos os modelos podem funcionar sem conexão à internet.',
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores modelos de visão locais para usar com Ollama em 2026?',
        answer:
          'O melhor modelo de visão local para Ollama em 2026 é o **Gemma 4** (`ollama pull gemma4`) para compreensão geral de imagens. Use **Qwen3-VL**, **Qwen3.5** ou **Qwen3.8** para OCR de documentos e texto multilíngue, e **Moondream 2** ou **Qwen3.5 2B** em hardware com menos de 4 GB.',
        bullets: [
          'Menos de 4 GB de VRAM → Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) ou Moondream 2 (1.7 GB): rápidos, mas limitados com imagens complexas e texto denso.',
          '6–8 GB de VRAM → Gemma 4 E4B (download de 6.6–9.5 GB), Qwen3-VL 8B (6.1 GB) ou Qwen3.5 9B (6.6–7.6 GB): melhor equilíbrio entre qualidade e hardware.',
          '16–24 GB de VRAM → Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) ou Qwen3-VL 32B (21 GB): qualidade próxima à da nuvem em documentos e fotografias.',
          'Apple M-series ou 64+ GB → Qwen3.5 122B (81 GB) ou Llama 3.2 Vision 90B (55 GB); o Qwen3-VL 235B exige 143 GB.',
          'Configuração: `ollama pull gemma4:e4b`, depois `ollama run gemma4:e4b "Descreva esta imagem: ./foto.jpg"` (coloque o caminho da imagem no prompt).',
          'Melhor para OCR: Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — forte na extração de texto de documentos.',
          'Melhor para UI / capturas de tela: InternVL 2.5 (GGUF da comunidade) ou Gemma 4 quando você também precisa de chamada de ferramentas (tool calling).',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'Principais destaques', anchor: '#key-takeaways' },
      { label: 'Fatos rápidos', anchor: '#quick-facts' },
      { label: 'O que são os modelos visão-linguagem?', anchor: '#what-are-vlms' },
      { label: 'Tabela comparativa de modelos', anchor: '#model-comparison' },
      { label: 'Teste de precisão real: extração de faturas', anchor: '#invoice-accuracy-test' },
      { label: 'Suporte multi-imagem', anchor: '#multi-image-support' },
      { label: 'Configuração com Ollama (passo a passo)', anchor: '#ollama-setup' },
      { label: 'Caso de uso 1: OCR e extração de documentos', anchor: '#use-case-ocr' },
      { label: 'Caso de uso 2: Perguntas e respostas sobre imagens', anchor: '#use-case-qa' },
      { label: 'Caso de uso 3: Capturas de tela e análise de UI', anchor: '#use-case-screenshot' },
      { label: 'Caso de uso 4: Leitura de gráficos e diagramas', anchor: '#use-case-chart' },
      { label: 'Caso de uso 5: Análise de quadros de vídeo', anchor: '#use-case-video' },
      { label: 'VRAM e verificação de desempenho real', anchor: '#vram-reality' },
      { label: 'Modelos de visão locais vs GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'Análise detalhada do LLaVA', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL, Qwen3.5 e Qwen3.8 — Melhor OCR multilíngue', anchor: '#qwen-vl-deep-dive' },
      { label: 'Como escolher seu modelo de visão', anchor: '#how-to-choose' },
      { label: 'Perguntas frequentes', anchor: '#faq' },
      { label: 'Fontes', anchor: '#sources' },
      { label: 'Leitura relacionada', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 é o melhor modelo de visão local para a maioria dos desenvolvedores em 2026.** É Apache 2.0, está disponível no Ollama em cinco tamanhos (E2B, E4B, 12B, 26B A4B, 31B), e sua ficha de modelo reporta MMMU Pro de 52.6% (E4B) a 76.9% (31B), contra 49.7% do Gemma 3 27B.',
          '**Qwen3-VL 8B, Qwen3.5 9B e Qwen3.8 27B lideram em OCR de documentos e texto multilíngue.** O Qwen3-VL 8B exige um download de 6.1 GB; o Qwen3.8 27B (Apache 2.0, 18 GB) reporta 91.1 no OmniDocBench 1.5.',
          '**O Llama 3.2 Vision deixou de ser o padrão seguro.** Usuários relatam "unknown model architecture: mllama" em versões recentes do Ollama (issues #16490 e #16547 no GitHub, sem correção confirmada), e sua listagem no Ollama não é atualizada há cerca de um ano.',
          '**Abaixo de 4 GB, escolha Qwen3.5 2B, Qwen3-VL 2B ou Moondream 2.** Os três são pequenos e rápidos, mas têm dificuldades com cenas complexas, texto denso e leitura precisa de gráficos.',
          '**LLaVA 1.6 é um dos VLMs locais mais documentados e testados pela comunidade.** É uma opção prática quando você precisa de tutoriais e ajuda para resolver problemas, mas os modelos mais novos o superam em OCR e qualidade.',
          '**Use o parâmetro `format` do Ollama para obter saída estruturada.** Passar um esquema JSON restringe a resposta aos seus campos para que seja interpretada sem erros; ainda assim, valide cada valor contra a fonte.',
          '**Nenhum modelo local iguala o GPT-5.5 Vision em tudo.** Os VLMs locais em 2026 são uma sólida opção de nível 2 — excelentes para documentos estruturados e fotografias claras, mais fracos com cenas ambíguas, escrita à mão e infográficos complexos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**O que os VLMs fazem:** Aceitam imagem + texto como entrada → produzem texto. Não são geradores de imagens — esses modelos *compreendem* imagens.',
          '**Suporte no Ollama:** Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, Llama 3.2 Vision, MiniCPM-V, LLaVA e Moondream estão na biblioteca oficial do Ollama; InternVL, PaliGemma 2 e SmolVLM exigem builds da comunidade.',
          '**Menores modelos utilizáveis:** Moondream 2 (1.8B, download de 1.7 GB), Qwen3-VL 2B (1.9 GB) e Qwen3.5 0.8B (1.2–1.3 GB).',
          '**Maiores modelos locais práticos:** Qwen3.5 122B (81 GB) e Llama 3.2 Vision 90B (55 GB) com 64 GB+ de memória unificada (Apple M-series ou multi-GPU); o Qwen3-VL 235B exige 143 GB.',
          '**Formato de entrada de imagem:** JPEG, PNG, WebP aceitos. A resolução máxima varia por modelo (tipicamente 1024×1024 a 4096×4096).',
          '**Áudio e vídeo:** Gemma 4 E2B, E4B e 12B também aceitam áudio; todos os tamanhos do Gemma 4 e o Qwen3.8 processam vídeo como quadros.',
          '**Precisão OCR:** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**Multimodal ≠ rápido:** Os modelos de visão adicionam um encoder visual ao LLM — espere uma geração de tokens ~30–60% mais lenta do que um modelo apenas de texto do mesmo número de parâmetros.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: 'O que são os modelos visão-linguagem (VLMs)?',
        content:
          'Um modelo visão-linguagem (VLM) é uma rede neural que processa simultaneamente entradas de imagem e texto e produz texto como saída. A arquitetura padrão combina um encoder visual (tipicamente CLIP ou SigLIP) com um decodificador de linguagem (um LLM), conectados por uma camada de projeção que mapeia as características da imagem para o espaço de tokens que o LLM compreende.',
        items: [
          '**Como se diferenciam dos geradores de imagens:** Stable Diffusion, FLUX e DALL-E 3 são geradores de texto para imagem — produzem imagens a partir de prompts de texto. Os VLMs são modelos de imagem para texto — descrevem, analisam e respondem perguntas sobre imagens.',
          '**Como se diferenciam das ferramentas OCR tradicionais:** O OCR tradicional (Tesseract, PaddleOCR) extrai texto de documentos estruturados via reconhecimento de padrões. Os VLMs compreendem o contexto — podem descrever o significado de uma tabela, responder perguntas sobre um gráfico ou identificar objetos em uma fotografia.',
          '**Por que executá-los localmente:** Documentos privados (prontuários médicos, escaneamentos jurídicos, extratos financeiros), capturas de tela proprietárias (painéis internos, código-fonte), ou qualquer fluxo de trabalho onde enviar imagens para APIs na nuvem apresenta problemas de conformidade ou confidencialidade.',
          '**O que não conseguem fazer:** Gerar imagens, executar código mostrado em capturas de tela nem acessar a internet. Os VLMs apenas produzem texto baseado no que é visível na imagem.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'Modelos de visão locais disponíveis — Tabela comparativa',
        content:
          'Comparação dos modelos de visão locais mais capazes disponíveis via Ollama ou inferência direta, verificada em 19 de outubro de 2026. A coluna de VRAM é o tamanho de download do Ollama (quantizado em 4 bits, salvo indicação contrária) — some 1–2 GB para o contexto. *O Llama 3.2 Vision tem relatos de falha ao carregar em versões recentes do Ollama (veja a nota sobre o Llama 3.2 Vision abaixo).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para 8 GB de VRAM: Gemma 4 E4B ou Qwen3-VL 8B; para 24 GB: Gemma 4 26B/31B ou Qwen3.8 27B — todos executam localmente via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'O Gemma 4 é o melhor em geral; Qwen3-VL, Qwen3.5 e Qwen3.8 lideram em OCR de documentos e texto multilíngue; Moondream e Qwen3.5 2B são as opções leves abaixo de 4 GB de VRAM.',
          },
        ],
        columns: ['Modelo', 'Parâmetros', 'VRAM (Q4)', 'Tipos de imagem', 'Qualidade', 'Via Ollama?'],
        rows: [
          {
            'Modelo': 'Moondream 2',
            'Parâmetros': '1.8B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagem': 'Fotos simples',
            'Qualidade': 'Básica',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'SmolVLM 2.2B',
            'Parâmetros': '2.2B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagem': 'Fotos simples, descrições',
            'Qualidade': 'Básica+',
            'Via Ollama?': 'Comunidade',
          },
          {
            'Modelo': 'Qwen3.5 2B',
            'Parâmetros': '2B',
            'VRAM (Q4)': '2.7–3.1 GB',
            'Tipos de imagem': 'Fotos, docs, OCR',
            'Qualidade': 'Boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'PaliGemma 2 3B',
            'Parâmetros': '3B',
            'VRAM (Q4)': '~3 GB',
            'Tipos de imagem': 'Fotos, docs',
            'Qualidade': 'Boa',
            'Via Ollama?': 'Comunidade',
          },
          {
            'Modelo': 'Gemma 4 E2B',
            'Parâmetros': '2.3B efet.',
            'VRAM (Q4)': '4.6–7.5 GB',
            'Tipos de imagem': 'Fotos, docs, áudio',
            'Qualidade': 'Boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'LLaVA 1.6 7B',
            'Parâmetros': '7B',
            'VRAM (Q4)': '~6 GB',
            'Tipos de imagem': 'Fotos, docs, gráficos',
            'Qualidade': 'Boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'MiniCPM-V',
            'Parâmetros': '8B',
            'VRAM (Q4)': '~6 GB (5.5 GB download)',
            'Tipos de imagem': 'Fotos, docs, OCR',
            'Qualidade': 'Muito boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Qwen3-VL 8B',
            'Parâmetros': '8B',
            'VRAM (Q4)': '~6.1 GB',
            'Tipos de imagem': 'Fotos, docs, OCR, multilíngue',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Qwen3.5 9B',
            'Parâmetros': '9B',
            'VRAM (Q4)': '6.6–7.6 GB',
            'Tipos de imagem': 'Fotos, docs, OCR, multilíngue',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Gemma 4 E4B',
            'Parâmetros': '4.5B efet.',
            'VRAM (Q4)': '6.6–9.5 GB',
            'Tipos de imagem': 'Fotos, docs, áudio',
            'Qualidade': 'Muito boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Gemma 4 12B',
            'Parâmetros': '12B',
            'VRAM (Q4)': '7.7–8.0 GB',
            'Tipos de imagem': 'Fotos, docs, áudio',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'InternVL 2.5 8B',
            'Parâmetros': '8B',
            'VRAM (Q4)': '~8 GB',
            'Tipos de imagem': 'Docs, gráficos, UI, código',
            'Qualidade': 'Excelente (UI/gráficos)',
            'Via Ollama?': 'Comunidade',
          },
          {
            'Modelo': 'Llama 3.2 Vision 11B',
            'Parâmetros': '11B',
            'VRAM (Q4)': '~8 GB (7.8 GB download)',
            'Tipos de imagem': 'Fotos, docs',
            'Qualidade': 'Excelente*',
            'Via Ollama?': 'Sim*',
          },
          {
            'Modelo': 'LLaVA 1.6 13B',
            'Parâmetros': '13B',
            'VRAM (Q4)': '~10 GB',
            'Tipos de imagem': 'Fotos, docs, gráficos',
            'Qualidade': 'Muito boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Gemma 4 26B A4B',
            'Parâmetros': '26B (4B ativos)',
            'VRAM (Q4)': '16–19 GB',
            'Tipos de imagem': 'Fotos, docs, complexo',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Qwen3.8 27B',
            'Parâmetros': '27B',
            'VRAM (Q4)': '18 GB',
            'Tipos de imagem': 'Fotos, docs, vídeo, OCR',
            'Qualidade': 'Melhor (open-source)',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Gemma 4 31B',
            'Parâmetros': '31B',
            'VRAM (Q4)': '19–20 GB',
            'Tipos de imagem': 'Fotos, docs, complexo',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Qwen3-VL 32B',
            'Parâmetros': '32B',
            'VRAM (Q4)': '21 GB',
            'Tipos de imagem': 'Fotos, docs, OCR, complexo',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Llama 3.2 Vision 90B',
            'Parâmetros': '90B',
            'VRAM (Q4)': '55 GB',
            'Tipos de imagem': 'Fotos, docs, complexo',
            'Qualidade': 'Muito boa*',
            'Via Ollama?': 'Sim*',
          },
          {
            'Modelo': 'Qwen3.5 122B',
            'Parâmetros': '122B',
            'VRAM (Q4)': '81 GB',
            'Tipos de imagem': 'Fotos, docs, complexo',
            'Qualidade': 'Melhor local',
            'Via Ollama?': 'Sim',
          },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-pt.svg',
        imageCaption:
          'Comparação de modelos de visão locais por VRAM e qualidade de OCR: o Moondream 2 funciona com 2 GB, o Qwen3-VL 8B lidera o OCR de documentos com 6 GB, e o Gemma 4 oferece a melhor qualidade geral de 8 GB (E4B) a 24 GB (26B e 31B) via Ollama.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: 'Teste de precisão real: extração de faturas',
        content:
          'Comparação da precisão dos modelos de visão locais em uma tarefa de extração de documentos estruturados. Teste: extrair 5 campos (nome do fornecedor, data, total, valor de imposto, número de linhas) da mesma fatura de amostra.',
        columns: ['Modelo', 'Fornecedor', 'Data', 'Total', 'Imposto', 'Linhas', 'Pontuação'],
        rows: [
          { 'Modelo': 'Moondream 2', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✗', 'Imposto': '✗', 'Linhas': '✗', 'Pontuação': '2/5' },
          { 'Modelo': 'LLaVA 1.6 7B', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✗', 'Linhas': '✓', 'Pontuação': '4/5' },
          { 'Modelo': 'MiniCPM-V 4.5', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✓', 'Linhas': '✓', 'Pontuação': '5/5' },
          { 'Modelo': 'Qwen3-VL 8B', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✓', 'Linhas': '✓', 'Pontuação': '5/5' },
          { 'Modelo': 'Llama 3.2 11B', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✓', 'Linhas': '✓', 'Pontuação': '5/5' },
          { 'Modelo': 'GPT-5.5 Vision', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✓', 'Linhas': '✓', 'Pontuação': '5/5' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Resultados obtidos com uma única fatura de teste. Sua precisão variará conforme a qualidade do documento, a tipografia e a complexidade do layout. Sempre verifique os números extraídos contra os documentos originais.',
          },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'Suporte multi-imagem',
        content:
          'Nem todos os modelos de visão locais aceitam múltiplas imagens em uma única solicitação. O suporte multi-imagem é importante para o processamento de documentos (enviar todas as páginas de um PDF de várias páginas) e tarefas de comparação visual.',
        columns: ['Função', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Função': 'Entrada multi-imagem',
            'Moondream': 'Não',
            'LLaVA 7B': 'Não',
            'MiniCPM-V': 'Sim (até 4)',
            'Qwen3-VL': 'Sim (até 8)',
            'LLaVA 13B': 'Não',
            'Llama 3.2 Vision': 'Sim (multi-página)',
            'InternVL': 'Sim',
          },
        ],
        items: [
          'MiniCPM-V aceita até 4 imagens por prompt; Qwen3-VL suporta até 8. LLaVA e Moondream aceitam apenas uma imagem por solicitação.',
          '**Quando o multi-imagem importa:** Enviar todas as páginas de um PDF de várias páginas para extração completa do documento. Comparar duas fotos de produto lado a lado. Analisar capturas de tela antes/depois em um único prompt.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuração com Ollama — passo a passo',
        content:
          'Ollama é a forma mais simples de executar modelos de visão locais. Uma vez instalado, os modelos de visão funcionam com um único comando pull e aceitam imagens via CLI ou a API HTTP.',
        items: [
          '**Passo 1 — Instalar o Ollama:** Baixe em ollama.com para macOS, Linux ou Windows. A instalação leva menos de 2 minutos.',
          '**Passo 2 — Baixar um modelo de visão:** `ollama pull gemma4:e4b` (download de 6.6–9.5 GB) para placas de 8 GB, `ollama pull qwen3-vl:8b` (6.1 GB) para OCR, ou `ollama pull moondream` (1.8B, 1.7 GB) para configurações com pouca VRAM.',
          '**Passo 3 — Usar via CLI:** `ollama run gemma4:e4b "O que há nesta imagem? /caminho/para/foto.jpg"` — coloque o caminho da imagem dentro do prompt; o `ollama run` não tem a flag `--image`.',
          '**Passo 4 — Usar a API HTTP:** Faça um POST para `http://localhost:11434/api/generate` com a imagem como string em Base64 no array `images`. Adicione um esquema JSON no campo `format` para obter saída estruturada.',
          '**Passo 5 — Exemplo em Python:** Use a biblioteca `requests` com codificação Base64 — veja o bloco de código abaixo.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# Exemplo de uso
result = ask_vision_model("fatura.png", "Extraia todas as linhas de itens e totais desta fatura.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-pt.svg',
        imageCaption:
          'Pipeline de configuração do Ollama Vision: instalar o Ollama, baixar um modelo de visão como o gemma4:e4b, executá-lo via CLI com o caminho da imagem no prompt ou via POST na API HTTP em localhost:11434, e obter texto para OCR, perguntas e respostas ou descrição de imagem.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Caso de uso 1: OCR e extração de documentos',
        content:
          '**Os VLMs superam o OCR tradicional em documentos semiestruturados** — faturas, recibos, contratos e tabelas onde o layout importa tanto quanto o texto em si. O OCR tradicional (Tesseract) extrai caracteres; os VLMs entendem o que esses caracteres significam no contexto.',
        items: [
          '**O que funciona bem:** Faturas escaneadas, capturas de PDF, notas manuscritas em letra de forma, tabelas com bordas claras, cartões de visita.',
          '**O que funciona pior:** Texto manuscrito em cursiva, escaneamentos abaixo de 150 DPI, JPEG com muita compressão, texto sobreposto.',
          '**Melhores modelos para OCR:** Qwen3-VL 8B e Qwen3.5 9B (categoria de 6–8 GB), Qwen3.8 27B (18 GB, 91.1 no OmniDocBench 1.5 segundo sua ficha de modelo), Gemma 4 para tipos de documentos mistos.',
          '**Prompt engineering para OCR:** "Extraia todo o texto deste documento exatamente como está escrito, preservando as quebras de linha." Ou: "Retorne o conteúdo desta fatura como JSON com os campos: fornecedor, data, linhas[], total."',
          '**Vs. OCR tradicional:** Os VLMs são mais lentos, mas mais semânticos. Tesseract é mais rápido para a extração de texto puro de documentos limpos. Use VLMs quando precisar de extração de dados estruturados, não apenas texto simples.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Caso de uso 2: Perguntas e respostas sobre imagens',
        content:
          '**Para a compreensão geral de cenas, descrições de produtos e Q&A visual, Gemma 4 (E4B com 8 GB, 26B ou 31B com 24 GB) é o modelo local recomendado.** Ele produz descrições naturais e detalhadas e lida com perguntas sutis sobre o conteúdo das fotos.',
        items: [
          '**Descrição de cenas:** "O que há nesta foto?" — objetos, pessoas, atividades, ambiente, atmosfera.',
          '**Catalogação de produtos:** Processe fotos de produtos com um template de prompt como "Descreva este produto: cor, forma, material, estado." Útil para inventário de e-commerce sem APIs na nuvem.',
          '**Acessibilidade:** Gere texto alternativo para imagens em escala. Com precisão suficiente para conformidade de acessibilidade em fotos de produtos padrão.',
          '**Melhores modelos:** Gemma 4 12B ou 26B A4B para Q&A geral sobre fotos. Qwen3.5 4B ou LLaVA 1.6 7B para processamento em volume, quando a velocidade importa mais do que a precisão.',
          '**Consideração de velocidade:** A velocidade depende do modelo, da GPU e do tamanho da descrição — teste uma amostra de 20 imagens no seu próprio hardware antes de se comprometer com um lote de milhares.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'Caso de uso 3: Capturas de tela e análise de UI',
        content:
          '**Para analisar capturas de tela de aplicações, mensagens de erro e painéis, InternVL 2.5 é o modelo local mais forte** — seus dados de treinamento enfatizaram UI de software, capturas do GitHub e saídas de execução de código.',
        items: [
          '**Fluxos de trabalho para desenvolvedores:** Envie capturas de mensagens de erro ao modelo: "O que está errado nesta captura de tela e como você corrigiria?"',
          '**Geração de relatórios de bugs:** Gere automaticamente descrições de bugs a partir de capturas de tela com um prompt estruturado.',
          '**Monitoramento de painéis:** Analise capturas de tela de painéis de monitoramento em busca de anomalias — "Há alguma métrica em nível de alerta nesta captura do Grafana?"',
          '**Testes de acessibilidade:** Compare capturas antes e depois de mudanças na UI para verificar as propriedades de acessibilidade visual.',
          '**Melhores modelos:** InternVL 2.5 8B (build da comunidade, forte em UI), Gemma 4 e Qwen3-VL (suporte oficial do Ollama, tool calling para fluxos de agentes).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'Caso de uso 4: Leitura de gráficos e diagramas',
        content:
          '**Extrair dados de gráficos de barras, linhas e tabelas é possível, mas requer um prompting cuidadoso.** Todos os VLMs locais são mais fracos na leitura de gráficos do que na descrição de fotos — verifique sempre os números extraídos de gráficos contra os dados originais.',
        items: [
          '**O que funciona:** Ler rótulos de eixos, identificar tendências, comparar alturas relativas de barras, ler valores de tabelas com fontes claras.',
          '**O que não é confiável:** Extração numérica precisa de gráficos contínuos (por exemplo, "a barra do T3 vale 43.7 unidades"), porcentagens de gráficos de pizza sem rótulos explícitos.',
          '**Estratégia de prompt:** "Descreva a tendência mostrada neste gráfico de linhas" funciona melhor do que "Qual é o valor exato em março de 2026?"',
          '**Melhores modelos para gráficos:** InternVL 2.5 (forte compreensão de gráficos), Gemma 4 e Qwen3-VL (bons em gráficos com rótulos claros).',
          '**Nota sobre limitações:** Nenhum VLM local em 2026 extrai de forma confiável números precisos de gráficos visualmente complexos. Para dados estruturados de gráficos, extraia da fonte de dados subjacente sempre que possível.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'Caso de uso 5: Análise de quadros de vídeo',
        content:
          '**Os modelos de visão locais podem analisar vídeo processando quadros individuais** — extraia quadros com ffmpeg, envie-os ao modelo de visão e encadeie com um LLM de texto para resumir entre quadros. Não é em tempo real: espere 1 quadro a cada 0.5–3 segundos, dependendo do modelo e do hardware.',
        items: [
          '**Extração de quadros:** Use ffmpeg para extrair a 1fps: `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**Análise por quadro:** Execute cada quadro pelo modelo de visão com um prompt consistente (por exemplo, "Descreva o que está acontecendo neste quadro em uma frase").',
          '**Resumo entre quadros:** Colete todas as descrições de quadros e passe-as a um LLM de texto com um prompt de resumo.',
          '**Casos de uso:** Revisão de câmeras de segurança (sinalizar quadros com atividade incomum), análise de gravações de aulas (gerar notas slide a slide), inspeção de qualidade na fabricação (sinalizar quadros em que aparecem defeitos).',
          '**Melhores modelos para quadros de vídeo:** Gemma 4 ou Qwen3.8 para qualidade (ambos aceitam vídeo como quadros nativamente), Qwen3.5 4B ou LLaVA 1.6 7B para velocidade (maior vazão de quadros).',
          '**Realidade de velocidade:** Com extração de 1 quadro/segundo e ~1–3 segundos por quadro, um vídeo de 10 minutos (600 quadros) leva cerca de 10–30 minutos para ser processado, dependendo do modelo e da GPU.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Descreva o que está acontecendo neste quadro em uma frase.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("aula.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM e verificação de desempenho real',
        content:
          'Os modelos de visão locais adicionam um encoder visual ao LLM base, o que aumenta tanto os requisitos de VRAM quanto o tempo de inferência em comparação com os modelos apenas de texto.',
        columns: ['Modelo', 'VRAM (Q4)', 'Tokens/s (RTX 4070)', 'Tokens/s (M5 Pro 36GB)', 'Apto para produção?'],
        rows: [
          {
            'Modelo': 'Moondream 2 (1.8B)',
            'VRAM (Q4)': '~2 GB',
            'Tokens/s (RTX 4070)': '~25–35',
            'Tokens/s (M5 Pro 36GB)': '~30–40',
            'Apto para produção?': 'Sim — para tarefas simples',
          },
          {
            'Modelo': 'LLaVA 1.6 7B',
            'VRAM (Q4)': '~6 GB',
            'Tokens/s (RTX 4070)': '~15–20',
            'Tokens/s (M5 Pro 36GB)': '~18–25',
            'Apto para produção?': 'Sim — propósito geral',
          },
          {
            'Modelo': 'MiniCPM-V (8B)',
            'VRAM (Q4)': '~6 GB',
            'Tokens/s (RTX 4070)': '~12–18',
            'Tokens/s (M5 Pro 36GB)': '~15–20',
            'Apto para produção?': 'Sim — OCR e documentos',
          },
          {
            'Modelo': 'Llama 3.2 Vision 11B',
            'VRAM (Q4)': '~8 GB',
            'Tokens/s (RTX 4070)': '~10–14',
            'Tokens/s (M5 Pro 36GB)': '~12–16',
            'Apto para produção?': 'Verifique antes o erro de carga',
          },
          {
            'Modelo': 'LLaVA 1.6 13B',
            'VRAM (Q4)': '~10 GB',
            'Tokens/s (RTX 4070)': '~8–12',
            'Tokens/s (M5 Pro 36GB)': '~10–14',
            'Apto para produção?': 'Sim — com GPU de 12 GB',
          },
          {
            'Modelo': 'Llama 3.2 Vision 90B',
            'VRAM (Q4)': '~64 GB',
            'Tokens/s (RTX 4070)': 'N/A (requer multi-GPU ou M-Max)',
            'Tokens/s (M5 Pro 36GB)': 'N/A (requer M5 Max 128GB+)',
            'Apto para produção?': 'Apenas Apple Silicon de alta gama',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'As faixas de tokens por segundo são estimativas indicativas, não medições novas; elas não foram refeitas para Gemma 4, Qwen3.5 ou Qwen3.8. Meça no seu próprio hardware com `ollama run <model> --verbose`, que exibe a taxa de avaliação (eval rate).',
          },
          {
            type: 'note',
            text: 'A velocidade de geração de tokens para os modelos de visão é mais lenta do que para os modelos apenas de texto do mesmo tamanho, porque o encoder visual adiciona uma sobrecarga computacional significativa no primeiro token de imagem. Os tokens de texto seguintes são gerados em velocidade quase normal.',
          },
          {
            type: 'note',
            text: 'A memória unificada do Apple Silicon permite executar modelos maiores (Llama 3.2 Vision 90B com 55 GB ou Qwen3.5 122B com 81 GB em um Mac de 128 GB) que não cabem na VRAM de uma GPU dedicada. A velocidade é ligeiramente inferior à de uma GPU NVIDIA equivalente, mas sem limitação de VRAM.',
          },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'Como os modelos de visão locais se comparam ao GPT-5.5 Vision',
        content:
          'Os VLMs locais fecharam significativamente a lacuna em documentos estruturados, mas ainda ficam atrás do GPT-5.5 Vision em tarefas complexas e ambíguas.',
        items: [
          '**Documentos estruturados (faturas, formulários):** Os modelos locais a 80–90% da qualidade do GPT-5.5 — suficiente para uso em produção com documentos limpos e bem formatados.',
          '**Cenas complexas, imagens ambíguas:** Os modelos locais a 50–70% do GPT-5.5 — lacuna de qualidade notável em imagens com contexto incomum, iluminação difícil ou conteúdo ambíguo.',
          '**Reconhecimento de escrita à mão:** Os modelos locais são significativamente mais fracos, especialmente com cursiva. O GPT-5.5 Vision lida muito melhor com escrita à mão.',
          '**Extração de dados de gráficos:** Pouco confiável tanto em modelos locais quanto no GPT-5.5, mas o GPT-5.5 é mais preciso em valores numéricos exatos.',
          '**Custo:** GPT-5.5 Vision a $0,01–0,03 por imagem vs $0 localmente. 10.000 imagens/mês = $100–300 economizados com modelos locais.',
          '**Privacidade:** Os modelos locais processam imagens no dispositivo por padrão: as imagens não são enviadas a uma API na nuvem, a menos que você ative recursos de nuvem ou ferramentas conectadas. O GPT-5.5 envia as imagens aos servidores da OpenAI.',
          '**Velocidade:** Os modelos locais a 10–20 tok/s vs GPT-5.5 a 30–80 tok/s, mas o local não tem latência de rede para processamento em lote.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Para o processamento em produção de faturas e formulários com entrada limpa, os VLMs locais (Gemma 4, Qwen3-VL 8B, Qwen3.8 27B) podem substituir o GPT-5.5 Vision a custo zero. Para tudo que envolva escrita à mão, análise de cenas complexas ou conteúdo ambíguo, o GPT-5.5 ainda é superior.',
          },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'Análise detalhada do LLaVA',
        content:
          '**LLaVA (Large Language and Vision Assistant) é a arquitetura VLM de código aberto fundamental.** Lançada pela Universidade de Wisconsin-Madison e Microsoft Research em 2023, estabeleceu o padrão de encoder CLIP + decodificador LLM que a maioria dos VLMs locais modernos segue.',
        items: [
          '**Arquitetura:** Encoder visual CLIP ViT-L/14 + decodificador de texto Llama-2 ou Mistral, conectados por uma camada de projeção linear simples.',
          '**LLaVA 1.5 vs 1.6:** A versão 1.6 (lançada no início de 2024) adicionou suporte para entrada em alta resolução via patches dinâmicos, melhorando significativamente a precisão de OCR e a leitura de gráficos.',
          '**Treinamento:** Ajustado por instruções (instruction-tuned) no LLaVA-Instruct-150K — um dataset de conversas visuais gerado a partir de legendas de imagens e anotações de detecção de objetos.',
          '**Forças:** Amplo conhecimento geral, bem documentado, comunidade ampla, extensa integração com Ollama.',
          '**Fraquezas:** OCR mais fraco do que Qwen3-VL e MiniCPM-V, análise de UI mais fraca do que InternVL 2.5, superado em geral pelo Gemma 4 e pela família Qwen3.',
          '**Por que ainda é recomendado:** LLaVA 1.6 tem a maior comunidade, a maior quantidade de tutoriais e o maior número de exemplos de prompts de todos os VLMs locais. Se você tiver problemas, é mais fácil encontrar ajuda.',
          '**Análise completa:** [LLaVA: análise (2026)](/pt/power-local-llm/llava-review) — a análise dedicada da PromptQuorum, com a nuance de licença Apache-2.0 mais modelo base e comandos reais do Ollama.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL, Qwen3.5 e Qwen3.8 — Melhor OCR multilíngue e desempenho em documentos',
        content:
          '**A família Qwen é a opção aberta mais forte para OCR de documentos e texto multilíngue em 2026.** O Qwen3-VL (tamanhos de 2B a 235B) é a linha dedicada à visão, o Qwen3.5 (0.8B a 122B) incorpora a visão ao modelo base, e o Qwen3.8 27B (agosto de 2026, Apache 2.0) é o mais novo, com 91.1 reportado no OmniDocBench 1.5.',
        items: [
          '**Arquitetura:** Suporte de resolução dinâmica até 4096×4096 — significativamente maior do que LLaVA 1.6 (672×672) ou Llama 3.2 Vision (1120×1120). Isso permite ler escaneamentos de alto DPI sem redução de resolução.',
          '**OCR multilíngue:** O melhor da categoria para chinês, japonês, coreano e inglês. Os dados de treinamento incluíram corpora de documentos multilíngues em grande escala — uma vantagem significativa sobre LLaVA e Llama 3.2 Vision em documentos que não estão em inglês.',
          '**Qual tamanho:** O Qwen3-VL 8B tem download de 6.1 GB e serve para placas de 8 GB; o Qwen3.5 9B tem 6.6–7.6 GB; o Qwen3.8 27B tem 18 GB e exige uma placa de 24 GB; o Qwen3-VL 32B tem 21 GB. O Qwen3-VL não tem variante de 72B no Ollama.',
          '**Instalação no Ollama:** `ollama pull qwen3-vl:8b`, `ollama pull qwen3.5:9b` ou `ollama pull qwen3.8` — todos na biblioteca de modelos do Ollama.',
          '**Suporte multi-imagem:** Aceita até 8 imagens por solicitação — a maior capacidade multi-imagem de todos os modelos desta comparação.',
          '**Páginas dos modelos:** [Qwen3-VL no Ollama](https://ollama.com/library/qwen3-vl), [Qwen3.8-27B no Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Como escolher seu modelo de visão',
        content:
          'Uma árvore de decisão baseada em VRAM para selecionar o modelo de visão local adequado:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Escolha seu modelo primeiro pela VRAM (2→4→8→24 GB), depois refine pelo caso de uso (OCR, UI, Q&A geral ou máxima qualidade).',
          },
          {
            type: 'plain-terms',
            text: 'Menos de 4 GB: Qwen3.5 2B ou Moondream. 8 GB: Gemma 4 E4B para fotos, Qwen3-VL 8B para documentos. 24 GB: Gemma 4 26B/31B ou Qwen3.8 27B. 64+ GB: Qwen3.5 122B.',
          },
        ],
        items: [
          '**Menos de 4 GB de VRAM:** Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) ou Moondream 2 (1.7 GB) são as opções práticas. PaliGemma 2 (3B) e SmolVLM (2.2B) são alternativas em builds da comunidade. Nenhum serve para OCR de texto denso.',
          '**6–8 GB de VRAM:** Gemma 4 E4B para Q&A geral sobre fotos, Qwen3-VL 8B ou Qwen3.5 9B para OCR de documentos e texto multilíngue, LLaVA 1.6 7B onde o suporte da comunidade importa.',
          '**12–16 GB de VRAM:** Gemma 4 12B (download de 7.7–8.0 GB) é a recomendação clara — fortes pontuações de visão para o seu tamanho, com entrada de áudio e janela de contexto de 256K. LLaVA 1.6 13B e InternVL 2.5 8B (capturas de UI e código) também cabem.',
          '**24 GB de VRAM:** Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) ou Qwen3-VL 32B (21 GB) — a opção local mais próxima da qualidade de visão da nuvem.',
          '**64+ GB de memória unificada (Apple M-Max/Ultra, multi-GPU):** Qwen3.5 122B (81 GB) ou Llama 3.2 Vision 90B (55 GB) para os maiores modelos locais; ambos exigem hardware com muita memória e são mais lentos por token do que os modelos da categoria de 24 GB.',
          '**Sempre verifique os números:** Independentemente do modelo, contraste qualquer valor numérico extraído de gráficos ou tabelas com os dados originais. Os VLMs locais alucinam números precisos a partir de gráficos visuais.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Por que o llama3.2-vision falha com "unknown model architecture: mllama"?',
            a: 'Usuários relatam esse erro com o llama3.2-vision em versões recentes do Ollama (issues #16490 e #16547 no GitHub, abertas em meados de 2026; a segunda foi fechada como duplicata, sem correção confirmada). Atualizar o Ollama ou baixar o modelo de novo não resolveu nesses relatos. Mude para o Gemma 4 ou o Qwen3-VL, que são mantidos ativamente na biblioteca do Ollama, a menos que você precise continuar com o Llama 3.2 Vision — nesse caso, fixe uma versão do Ollama em que ele ainda carregue.',
          },
          {
            q: 'Qual é o melhor modelo visão-linguagem pequeno, com menos de 3B de parâmetros?',
            a: 'Qwen3.5 2B (download de 2.7–3.1 GB) e Qwen3-VL 2B (1.9 GB) são as melhores opções pequenas no Ollama; o Moondream 2 (1.8B, 1.7 GB) é o mais leve. O Gemma 4 E2B (2.3B de parâmetros efetivos, download de 4.6–7.5 GB) acrescenta entrada de áudio. Espere um OCR e uma compreensão de cenas complexas mais fracos do que na categoria de 8B.',
          },
          {
            q: 'Quais modelos locais conseguem lidar com entrada de câmera e microfone ao vivo?',
            a: 'Gemma 4 E2B, E4B e 12B aceitam imagens e áudio, o que os torna a base natural para um assistente local que vê e ouve. O modelo sozinho não é um sistema ao vivo: você ainda precisa de um laço de captura (capturar quadros, dividir o áudio em blocos), um caminho de fala para texto ou de entrada de áudio, e uma etapa de texto para fala para as respostas faladas. Confirme se a versão do seu runtime realmente repassa o áudio ao modelo antes de construir sobre isso.',
          },
          {
            q: 'Como obter saída estruturada confiável a partir de capturas de tela e documentos?',
            a: 'Passe um esquema JSON no campo `format` do Ollama, defina a temperatura como 0 e peça apenas os campos visíveis na imagem. Isso restringe a resposta a um JSON válido com as suas chaves; não torna os valores corretos, então valide números e datas contra a fonte e registre as falhas. Modelos maiores (8B ou mais) seguem esquemas com mais consistência do que modelos de 2B.',
          },
          {
            q: 'Quais são as melhores alternativas ao GPT-4V que rodam totalmente no dispositivo?',
            a: 'Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) e Qwen3-VL 32B (21 GB) são os mais próximos em uma GPU de 24 GB; Gemma 4 E4B e Qwen3-VL 8B atendem máquinas de 8 GB. Todos podem rodar sem conexão à internet pelo Ollama. Igualam os modelos da nuvem em documentos limpos e fotografias, mas ficam atrás em escrita à mão, cenas ambíguas e infográficos complexos.',
          },
          {
            q: 'Posso usar LLaVA ou Llama 3.2 Vision sem Ollama?',
            a: 'Sim. Você pode executar LLaVA e Llama 3.2 Vision diretamente usando llama.cpp (com suporte de visão), a biblioteca transformers (com o cartão de modelo apropriado) ou LM Studio (que tem uma interface gráfica para modelos de visão). Ollama é recomendado pela simplicidade — ele cuida do download do modelo, da escolha da quantização e da hospedagem da API automaticamente.',
          },
          {
            q: 'O Llama 3.2 Vision suporta entrada PDF direta?',
            a: 'Nenhum VLM local aceita PDF diretamente. Primeiro você deve converter as páginas do PDF em imagens (usando pdf2image, pypdfium2 ou similar) e então enviar cada página como uma solicitação de imagem separada. Para um PDF de 10 páginas, você envia 10 consultas de imagem separadas e concatena ou resume os resultados.',
          },
          {
            q: 'Como os modelos de visão locais se comparam ao GPT-5.5 Vision?',
            a: 'GPT-5.5 Vision ainda é significativamente melhor em cenas ambíguas, escrita à mão, infográficos complexos e tarefas que requerem conhecimento do mundo. Gemma 4 e Qwen3-VL se aproximam do GPT-5.5 em documentos estruturados (faturas, formulários, fotos claras), mas ficam para trás em imagens sutis ou ambíguas. Veja a comparação completa acima para o detalhamento de custo, privacidade e velocidade.',
          },
          {
            q: 'Qual resolução de imagem os VLMs locais suportam?',
            a: 'LLaVA 1.6 suporta até 672×672 de resolução efetiva (com patches dinâmicos). MiniCPM-V suporta até 1792×1792 — um dos motivos pelos quais supera o LLaVA em escaneamentos de documentos de alto DPI. Llama 3.2 Vision suporta até 1120×1120. Gemma 4 e Qwen3-VL aceitam proporções e resoluções variáveis. Para os melhores resultados de OCR, envie imagens de documentos a 150+ DPI.',
          },
          {
            q: 'Posso fazer fine-tuning de um modelo de visão local com minhas próprias imagens?',
            a: 'Sim, mas o fine-tuning de VLMs exige mais recursos do que o de LLMs apenas de texto — é preciso processar pares de treinamento de imagem e texto em todo o passe forward. O fine-tuning do LLaVA está bem documentado usando a base de código de treinamento original. O MiniCPM-V suporta fine-tuning por meio de seus scripts oficiais de treinamento no Hugging Face. Para a maioria dos casos de uso, o prompt engineering sozinho é suficiente, sem necessidade de fine-tuning.',
          },
          {
            q: 'Qual é o melhor modelo de visão local para 8 GB de VRAM?',
            a: 'Gemma 4 E4B (download de 6.6–9.5 GB) para uso geral, ou Qwen3-VL 8B (6.1 GB) se OCR de documentos ou texto multilíngue for a necessidade principal. Ambos estão disponíveis via Ollama com um único comando pull. O Qwen3.5 9B (6.6–7.6 GB) é uma terceira opção.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — qual é melhor para OCR?',
            a: 'MiniCPM-V é mais preciso em OCR de documentos do que o LLaVA, especialmente em tabelas densas e escaneamentos de alto DPI, mas o Qwen3-VL 8B é uma escolha de OCR mais forte do que ambos. LLaVA 1.6 está melhor documentado e tem mais suporte da comunidade. Observe que a página do minicpm-v no Ollama ainda descreve o MiniCPM-V 2.6 (5.5 GB); versões mais novas do MiniCPM-V exigem um build do Hugging Face ou do llama.cpp.',
          },
          {
            q: 'Os modelos de visão locais conseguem ler escrita à mão?',
            a: 'Escrita à mão em letra de forma (letras em bloco): sim, com precisão moderada em Gemma 4, Qwen3-VL e MiniCPM-V. Escrita em cursiva: pouco confiável em todos os modelos locais. GPT-5.5 Vision é significativamente melhor com cursiva. Para OCR de escrita à mão em produção com documentos em cursiva, as APIs na nuvem ainda são recomendadas.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Ficha do modelo Gemma 4 no Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — licença Apache 2.0 do Google, modalidades suportadas por tamanho e resultados do MMMU Pro.',
          '[Gemma 4 no Ollama](https://ollama.com/library/gemma4) — tags, tamanhos de download e janelas de contexto.',
          '[Qwen3.8-27B no Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — licença Apache 2.0, contexto de 262K, resultado no OmniDocBench 1.5.',
          '[Qwen3.5 no Ollama](https://ollama.com/library/qwen3.5) e [Qwen3-VL no Ollama](https://ollama.com/library/qwen3-vl) — tamanhos e tamanhos de download.',
          '[Llama 3.2 Vision no Ollama](https://ollama.com/library/llama3.2-vision) e [issue #16547 do Ollama](https://github.com/ollama/ollama/issues/16547) — listagem e o erro de carga do mllama reportado.',
          '[Página do projeto LLaVA](https://llava-vl.github.io) — Fichas de modelo LLaVA 1.5 e 1.6, detalhes de arquitetura e descrição do dataset de treinamento.',
          '[MiniCPM-V no Ollama](https://ollama.com/library/minicpm-v) e [OpenBMB no Hugging Face](https://huggingface.co/openbmb) — fichas de modelo e benchmarks de OCR.',
          '[Moondream no Ollama](https://ollama.com/library/moondream) e [Moondream no GitHub](https://github.com/vikhyat/moondream) — download do modelo e scripts de inferência.',
          '[InternVL 2.5 no Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — Ficha de modelo da OpenGVLab, pontuações de benchmark em documentos e tarefas de UI.',
          '[Documentação do Ollama](https://ollama.com) — Suporte de modelos de visão, saídas estruturadas, referência de API e biblioteca de modelos.',
          '[PaliGemma 2 no Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Ficha de modelo PaliGemma 2 3B do Google.',
          '[SmolVLM no Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — Ficha de modelo SmolVLM da HuggingFace e instruções de inferência.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Quais modelos do Ollama suportam visão?](/pt/prompt-bites/which-ollama-models-support-vision) — resposta rápida sobre quais modelos da biblioteca do Ollama aceitam imagens, com especificações de VRAM.',
          '[Modelos de Visão do Ollama (2026)](/pt/power-local-llm/ollama-vision-models-review) — um guia prático e focado para rodar modelos de visão especificamente pelo Ollama: sintaxe real de CLI/API e quais modelos estão de fato em sua biblioteca.',
          '[VLMs em Cameras e Drones 2026](/pt/power-local-llm/vlm-video-analytics-drones-edge) -- Os fundamentos de VLM de desktop estao aqui; para implantacao embarcada em cameras e drones, veja este guia focado em edge.',
          '[Pipeline de IA multimodal local 2026](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combine modelos de visão com STT e TTS em um stack multimodal local completo.',
          '[Reconhecimento de voz local 2026: Whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison) — Adicione entrada de voz para complementar a saída de visão.',
          '[TTS local e clonagem de voz 2026](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Adicione saída de voz para ler em voz alta as respostas do VLM.',
          '[Como instalar Ollama](/pt/local-llms/how-to-install-ollama) — Pré-requisito: configuração e instalação do Ollama.',
          '[Guia de hardware para LLMs locais](/pt/local-llms/local-llm-hardware-guide) — Requisitos de VRAM e RAM para a inferência de modelos de visão.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Melhores modelos de visão locais 2026: Gemma 4, Qwen3-VL, LLaVA e configuração multimodal com Ollama',
       description: 'Melhores VLMs locais para Ollama em 2026: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. VRAM por modelo, opções de OCR e passos de configuração.',
       url: 'https://www.promptquorum.com/pt/power-local-llm/local-vision-models-llava-ollama-2026',
       inLanguage: 'pt-BR',
       datePublished: '2026-05-24',
       dateModified: '2026-10-20',
       author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
       'proficiencyLevel': 'Intermediate',
     },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-ar.webp',
    title: 'أفضل نماذج الرؤية المحلية 2026: Gemma 4 وQwen3-VL وLLaVA وإعداد Ollama متعدد الوسائط',
    seoTitle: 'أفضل نماذج الرؤية المحلية 2026: Gemma 4 وQwen3-VL وOllama',
    intro:
      'تقبل نماذج الرؤية واللغة (VLMs) مدخلات الصور والنصوص معاً وتُنتج نصاً — لاستخراج النصوص من المستندات (OCR)، والإجابة على أسئلة حول الصور، وتحليل لقطات الشاشة، وقراءة الرسوم البيانية، وكل ذلك بصورة محلية تامة. في عام 2026، يُعدّ برنامج Ollama أيسر طريق لتشغيل نماذج VLM: سحب النموذج، وإرسال الصورة، والحصول على وصف أو إجابة. يقارن هذا الدليل أبرز نماذج الرؤية المحلية (Gemma 4 وQwen3.8 وQwen3.5 وQwen3-VL وMiniCPM-V وLLaVA 1.6 وLlama 3.2 Vision وMoondream 2 وInternVL 2.5)، ويشرح خطوات إعداد Ollama تفصيلياً، ويربط كل نموذج بأفضل حالات استخدامه حسب متطلبات VRAM. أحجام التنزيل مأخوذة من مكتبة نماذج Ollama، وأرقام الجودة من بطاقات النماذج لدى الجهات المطوِّرة، وقد روجعت بتاريخ 19 أكتوبر 2026.',
    metaDescription:
      'أفضل نماذج VLM المحلية مع Ollama في 2026: Gemma 4 وQwen3.5 وQwen3-VL وMiniCPM-V وMoondream. VRAM لكل نموذج وأفضل خيارات OCR وخطوات الإعداد.',
    twitterDescription:
      'أفضل نماذج الرؤية المحلية 2026: Gemma 4 وQwen3-VL وMiniCPM-V وLLaVA عبر Ollama. أسئلة الصور وOCR وتحليل لقطات الشاشة دون اتصال. دليل VRAM والإعداد.',
    audience:
      'المطورون الذين يحتاجون إلى فهم الصور محلياً دون واجهات برمجية سحابية — لمعالجة المستندات، وتحليل لقطات الشاشة، وأدوات إمكانية الوصول، وأنظمة المخزون، وأي سير عمل يتضمن صوراً ذات طابع خاص.',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'نموذج الرؤية المحلي',
    targetKeywords: [
      'نموذج رؤية محلي 2026',
      'أفضل VLM محلي',
      'gemma 4 vision ollama',
      'نموذج رؤية ولغة صغير أقل من 3B',
      'إعداد LLaVA مع Ollama',
      'تشغيل نموذج رؤية محلياً',
      'llama 3.2 vision محلي',
      'MiniCPM-V محلي',
      'qwen3-vl محلي',
      'qwen3-vl ollama',
      'أفضل نموذج رؤية محلي',
      'فهم الصور دون اتصال',
      'نموذج متعدد الوسائط محلي',
      'ollama نموذج رؤية',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**لدى أغلب المستخدمين، يُعدّ Gemma 4 (برخصة Apache 2.0) عبر Ollama أفضل نموذج رؤية محلي في 2026: يناسب gemma4:e4b بطاقات 8 غيغابايت، ويناسب gemma4:26b أو 31b بطاقات 24 غيغابايت.** تُسجّل بطاقة نموذج Google درجات MMMU Pro قدرها 52.6% (E4B) و69.1% (12B) و73.8% (26B A4B) و76.9% (31B)، مقابل 49.7% لنموذج Gemma 3 27B السابق. لاستخراج النصوص من المستندات والنصوص متعددة اللغات، تُعدّ Qwen3-VL 8B (تنزيل 6.1 غيغابايت) وQwen3.5 9B وQwen3.8 27B الأحدث (18 غيغابايت) أقوى الخيارات. أما Llama 3.2 Vision، التي كانت التوصية الافتراضية سابقاً، فقد أُبلغ عن فشل تحميلها في إصدارات Ollama الحديثة ("unknown model architecture: mllama")، لذا لم تعد الخيار الأول. وتحت 3 غيغابايت، استخدم Qwen3.5 2B أو Qwen3-VL 2B أو Moondream 2. بعد تنزيلها، يمكن تشغيل جميع النماذج دون اتصال بالإنترنت.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نماذج الرؤية المحلية للتشغيل مع Ollama في 2026؟',
        answer:
          'أفضل نموذج رؤية محلي لـ Ollama في 2026 هو **Gemma 4** (`ollama pull gemma4`) لفهم الصور عموماً. استخدم **Qwen3-VL** أو **Qwen3.5** أو **Qwen3.8** لاستخراج النصوص من المستندات والنصوص متعددة اللغات، واستخدم **Moondream 2** أو **Qwen3.5 2B** على العتاد الأقل من 4 غيغابايت.',
        bullets: [
          'أقل من 4 غيغابايت VRAM → Qwen3.5 2B (2.7–3.1 غيغابايت) أو Qwen3-VL 2B (1.9 غيغابايت) أو Moondream 2 (1.7 غيغابايت): سريعة، لكنها محدودة مع الصور المعقدة والنصوص الكثيفة.',
          '6–8 غيغابايت VRAM → Gemma 4 E4B (تنزيل 6.6–9.5 غيغابايت) أو Qwen3-VL 8B (6.1 غيغابايت) أو Qwen3.5 9B (6.6–7.6 غيغابايت): أفضل توازن بين الجودة والمتطلبات.',
          '16–24 غيغابايت VRAM → Gemma 4 26B A4B (16–19 غيغابايت) أو Gemma 4 31B (19–20 غيغابايت) أو Qwen3.8 27B (18 غيغابايت) أو Qwen3-VL 32B (21 غيغابايت): جودة قريبة من السحابة في المستندات والصور.',
          'Apple M-series أو 64 غيغابايت فأكثر → Qwen3.5 122B (81 غيغابايت) أو Llama 3.2 Vision 90B (55 غيغابايت)؛ أما Qwen3-VL 235B فيحتاج إلى 143 غيغابايت.',
          'الإعداد: `ollama pull gemma4:e4b` ثم `ollama run gemma4:e4b "Describe this image: ./photo.jpg"` (ضع مسار الصورة داخل الموجّه).',
          'الأفضل لاستخراج النصوص: Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — الأقوى في استخراج النصوص من المستندات.',
          'الأفضل لواجهة المستخدم ولقطات الشاشة: InternVL 2.5 (بناء مجتمعي بصيغة GGUF)، أو Gemma 4 عند الحاجة أيضاً إلى استدعاء الأدوات.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: 'النقاط الرئيسية', anchor: '#key-takeaways' },
      { label: 'حقائق سريعة', anchor: '#quick-facts' },
      { label: 'ما هي نماذج الرؤية واللغة؟', anchor: '#what-are-vlms' },
      { label: 'جدول مقارنة النماذج', anchor: '#model-comparison' },
      { label: 'اختبار دقة واقعي: استخراج بيانات الفواتير', anchor: '#invoice-accuracy-test' },
      { label: 'دعم الصور المتعددة', anchor: '#multi-image-support' },
      { label: 'الإعداد عبر Ollama (خطوة بخطوة)', anchor: '#ollama-setup' },
      { label: 'حالة الاستخدام 1: استخراج النصوص من المستندات', anchor: '#use-case-ocr' },
      { label: 'حالة الاستخدام 2: الأسئلة والأجوبة حول الصور', anchor: '#use-case-qa' },
      { label: 'حالة الاستخدام 3: تحليل لقطات الشاشة وواجهة المستخدم', anchor: '#use-case-screenshot' },
      { label: 'حالة الاستخدام 4: قراءة الرسوم البيانية والمخططات', anchor: '#use-case-chart' },
      { label: 'حالة الاستخدام 5: تحليل إطارات الفيديو', anchor: '#use-case-video' },
      { label: 'متطلبات VRAM والأداء الفعلي', anchor: '#vram-reality' },
      { label: 'مقارنة النماذج المحلية مع GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'تعمق في نموذج LLaVA', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL وQwen3.5 وQwen3.8 — أفضل أداء لاستخراج النصوص متعددة اللغات', anchor: '#qwen-vl-deep-dive' },
      { label: 'كيفية اختيار نموذج الرؤية المناسب', anchor: '#how-to-choose' },
      { label: 'الأسئلة الشائعة', anchor: '#faq' },
      { label: 'المصادر', anchor: '#sources' },
      { label: 'قراءات ذات صلة', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4 هو أفضل نموذج رؤية محلي لأغلب المطورين في 2026.** برخصة Apache 2.0، ومتاح عبر Ollama بخمسة أحجام (E2B وE4B و12B و26B A4B و31B)، وتُسجّل بطاقة نموذجه MMMU Pro بين 52.6% (E4B) و76.9% (31B) مقابل 49.7% لنموذج Gemma 3 27B.',
          '**تتصدر Qwen3-VL 8B وQwen3.5 9B وQwen3.8 27B استخراج النصوص من المستندات والنصوص متعددة اللغات.** تحتاج Qwen3-VL 8B إلى تنزيل 6.1 غيغابايت؛ وتُسجّل Qwen3.8 27B (برخصة Apache 2.0، 18 غيغابايت) 91.1 في OmniDocBench 1.5.',
          '**لم تعد Llama 3.2 Vision الخيار الافتراضي الآمن.** يُبلغ مستخدمون عن الخطأ "unknown model architecture: mllama" في إصدارات Ollama الحديثة (مسألتا GitHub رقم 16490 و16547، دون إصلاح مؤكد)، ولم تُحدَّث قائمتها في Ollama منذ نحو عام.',
          '**تحت 4 غيغابايت، اختر Qwen3.5 2B أو Qwen3-VL 2B أو Moondream 2.** الثلاثة صغيرة وسريعة، لكنها تعاني مع المشاهد المعقدة والنصوص الكثيفة وقراءة الرسوم البيانية الدقيقة.',
          '**LLaVA 1.6 من نماذج VLM المحلية الأكثر توثيقاً واختباراً من قِبل المجتمع.** إنه خيار عملي عند الحاجة إلى دروس تعليمية ودعم لاستكشاف الأخطاء، لكن النماذج الأحدث تتفوق عليه في استخراج النصوص والجودة.',
          '**استخدم معامل `format` في Ollama للحصول على مخرجات منظمة.** تمرير مخطط JSON يقيّد الرد بحقولك فيسهل تحليله؛ ومع ذلك تحقق من كل قيمة مقابل المصدر.',
          '**لا يضاهي أي نموذج محلي GPT-5.5 Vision في كل شيء.** نماذج VLM المحلية في 2026 هي خيار قوي من المستوى الثاني — ممتازة للمستندات المنظمة والصور الواضحة، وأضعف في الخطوط اليدوية والمشاهد الغامضة والرسوم المعلوماتية المعقدة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**ما الذي تفعله نماذج VLM:** تقبل مدخلات الصور والنصوص → وتُنتج نصاً. ليست نماذج توليد صور — بل هي نماذج *فهم* الصور.',
          '**دعم Ollama:** نماذج Gemma 4 وQwen3.8 وQwen3.5 وQwen3-VL وLlama 3.2 Vision وMiniCPM-V وLLaVA وMoondream موجودة في مكتبة Ollama الرسمية؛ أما InternVL وPaliGemma 2 وSmolVLM فتحتاج إلى بناءات مجتمعية.',
          '**أصغر النماذج القابلة للاستخدام:** Moondream 2 (1.8B، تنزيل 1.7 غيغابايت) وQwen3-VL 2B (1.9 غيغابايت) وQwen3.5 0.8B (1.2–1.3 غيغابايت).',
          '**أكبر النماذج المحلية العملية:** Qwen3.5 122B (81 غيغابايت) وLlama 3.2 Vision 90B (55 غيغابايت) على ذاكرة موحدة بسعة 64 غيغابايت فأكثر (Apple M-series أو معالجات رسومات متعددة)؛ أما Qwen3-VL 235B فيحتاج إلى 143 غيغابايت.',
          '**صيغ الصور المقبولة:** JPEG وPNG وWebP. يتفاوت الحد الأقصى للدقة حسب النموذج (عادةً من 1024×1024 إلى 4096×4096).',
          '**الصوت والفيديو:** تقبل Gemma 4 E2B وE4B و12B الصوت أيضاً؛ وتعالج جميع أحجام Gemma 4 وQwen3.8 الفيديو على شكل إطارات.',
          '**قوة استخراج النصوص:** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**تعدد الوسائط يعني بطء أكبر:** تضيف نماذج الرؤية مشفِّر بصري فوق النموذج اللغوي — توقع تباطؤاً بنسبة 30–60٪ في توليد الرموز مقارنةً بنموذج نصي بحت من نفس عدد المعاملات.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: 'ما هي نماذج الرؤية واللغة (VLMs)؟',
        content:
          'نموذج الرؤية واللغة (VLM) هو شبكة عصبية تُعالج مدخلات الصور والنصوص في آن واحد وتُنتج نصاً. تقرن البنية المعتادة مشفِّراً بصرياً (CLIP أو SigLIP في الغالب) بمفكك ترميز لغوي (نموذج لغوي كبير)، تصلهما طبقة إسقاط تُعيد تمثيل الميزات البصرية في فضاء الرموز الذي يفهمه النموذج اللغوي.',
        items: [
          '**الفرق عن نماذج توليد الصور:** برامج مثل Stable Diffusion وFLUX وDALL-E 3 هي نماذج نص إلى صورة — تُنتج صوراً من نصوص. نماذج VLM هي نماذج صورة إلى نص — تصف الصور وتحللها وتجيب على الأسئلة حولها.',
          '**الفرق عن أدوات استخراج النص التقليدية:** يستخرج نظام OCR التقليدي (مثل Tesseract وPaddleOCR) النصوص من المستندات المنظمة عبر التعرف على الأنماط. نماذج VLM تفهم السياق — يمكنها وصف معنى جدول، والإجابة على أسئلة حول مخطط، وتحديد الأشياء في صورة.',
          '**سبب تشغيلها محلياً:** المستندات الخاصة (السجلات الطبية، المستندات القانونية، البيانات المالية)، ولقطات الشاشة السرية (لوحات التحكم الداخلية، الكود المصدري)، أو أي سير عمل ترفع فيه إرسال الصور إلى واجهات برمجية سحابية مخاوف بشأن الامتثال أو السرية.',
          '**ما لا تستطيع فعله:** توليد الصور، أو تنفيذ الكود الظاهر في لقطات الشاشة، أو الوصول إلى الإنترنت. نماذج VLM تُنتج نصاً فقط بناءً على ما هو مرئي في الصورة.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: 'نماذج الرؤية المحلية المتاحة — جدول مقارنة',
        content:
          'مقارنة لأبرز نماذج الرؤية المحلية المتاحة عبر Ollama أو الاستدلال المباشر، روجعت بتاريخ 19 أكتوبر 2026. عمود VRAM هو حجم تنزيل Ollama (مضغوط بـ 4 بت ما لم يُشر إلى غير ذلك) — أضف 1–2 غيغابايت للسياق. *أُبلغ عن فشل تحميل Llama 3.2 Vision في إصدارات Ollama الحديثة (انظر ملاحظة Llama 3.2 Vision أعلاه).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لذاكرة VRAM بسعة 8 غيغابايت: Gemma 4 E4B أو Qwen3-VL 8B؛ ولسعة 24 غيغابايت: Gemma 4 26B/31B أو Qwen3.8 27B — كلها تعمل محلياً عبر Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4 هو الأفضل شاملاً؛ وتتصدر Qwen3-VL وQwen3.5 وQwen3.8 استخراج النصوص من المستندات والنصوص متعددة اللغات؛ وMoondream وQwen3.5 2B هما الخياران الخفيفان تحت 4 غيغابايت من VRAM.',
          },
        ],
        columns: ['النموذج', 'المعاملات', 'VRAM (Q4)', 'أنواع الصور', 'الجودة', 'عبر Ollama؟'],
        rows: [
          {
            'النموذج': 'Moondream 2',
            'المعاملات': '1.8B',
            'VRAM (Q4)': '~2 غيغابايت',
            'أنواع الصور': 'صور بسيطة',
            'الجودة': 'أساسية',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'SmolVLM 2.2B',
            'المعاملات': '2.2B',
            'VRAM (Q4)': '~2 غيغابايت',
            'أنواع الصور': 'صور بسيطة، تسميات توضيحية',
            'الجودة': 'أساسية+',
            'عبر Ollama؟': 'مجتمعي',
          },
          {
            'النموذج': 'Qwen3.5 2B',
            'المعاملات': '2B',
            'VRAM (Q4)': '2.7–3.1 غيغابايت',
            'أنواع الصور': 'صور، مستندات، استخراج نصوص',
            'الجودة': 'جيدة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'PaliGemma 2 3B',
            'المعاملات': '3B',
            'VRAM (Q4)': '~3 غيغابايت',
            'أنواع الصور': 'صور، مستندات',
            'الجودة': 'جيدة',
            'عبر Ollama؟': 'مجتمعي',
          },
          {
            'النموذج': 'Gemma 4 E2B',
            'المعاملات': '2.3B فعّالة',
            'VRAM (Q4)': '4.6–7.5 غيغابايت',
            'أنواع الصور': 'صور، مستندات، صوت',
            'الجودة': 'جيدة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'LLaVA 1.6 7B',
            'المعاملات': '7B',
            'VRAM (Q4)': '~6 غيغابايت',
            'أنواع الصور': 'صور، مستندات، رسوم بيانية',
            'الجودة': 'جيدة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'MiniCPM-V',
            'المعاملات': '8B',
            'VRAM (Q4)': '~6 غيغابايت (تنزيل 5.5)',
            'أنواع الصور': 'صور، مستندات، استخراج نصوص',
            'الجودة': 'جيدة جداً',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Qwen3-VL 8B',
            'المعاملات': '8B',
            'VRAM (Q4)': '~6.1 غيغابايت',
            'أنواع الصور': 'صور، مستندات، OCR، متعدد اللغات',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Qwen3.5 9B',
            'المعاملات': '9B',
            'VRAM (Q4)': '6.6–7.6 غيغابايت',
            'أنواع الصور': 'صور، مستندات، OCR، متعدد اللغات',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Gemma 4 E4B',
            'المعاملات': '4.5B فعّالة',
            'VRAM (Q4)': '6.6–9.5 غيغابايت',
            'أنواع الصور': 'صور، مستندات، صوت',
            'الجودة': 'جيدة جداً',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Gemma 4 12B',
            'المعاملات': '12B',
            'VRAM (Q4)': '7.7–8.0 غيغابايت',
            'أنواع الصور': 'صور، مستندات، صوت',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'InternVL 2.5 8B',
            'المعاملات': '8B',
            'VRAM (Q4)': '~8 غيغابايت',
            'أنواع الصور': 'مستندات، رسوم، واجهات مستخدم، كود',
            'الجودة': 'ممتازة (واجهات/رسوم)',
            'عبر Ollama؟': 'مجتمعي',
          },
          {
            'النموذج': 'Llama 3.2 Vision 11B',
            'المعاملات': '11B',
            'VRAM (Q4)': '~8 غيغابايت (تنزيل 7.8)',
            'أنواع الصور': 'صور، مستندات',
            'الجودة': 'ممتازة*',
            'عبر Ollama؟': 'نعم*',
          },
          {
            'النموذج': 'LLaVA 1.6 13B',
            'المعاملات': '13B',
            'VRAM (Q4)': '~10 غيغابايت',
            'أنواع الصور': 'صور، مستندات، رسوم بيانية',
            'الجودة': 'جيدة جداً',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Gemma 4 26B A4B',
            'المعاملات': '26B (4B نشطة)',
            'VRAM (Q4)': '16–19 غيغابايت',
            'أنواع الصور': 'صور، مستندات، معقدة',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Qwen3.8 27B',
            'المعاملات': '27B',
            'VRAM (Q4)': '18 غيغابايت',
            'أنواع الصور': 'صور، مستندات، فيديو، OCR',
            'الجودة': 'الأفضل (مفتوح المصدر)',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Gemma 4 31B',
            'المعاملات': '31B',
            'VRAM (Q4)': '19–20 غيغابايت',
            'أنواع الصور': 'صور، مستندات، معقدة',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Qwen3-VL 32B',
            'المعاملات': '32B',
            'VRAM (Q4)': '21 غيغابايت',
            'أنواع الصور': 'صور، مستندات، OCR، معقدة',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Llama 3.2 Vision 90B',
            'المعاملات': '90B',
            'VRAM (Q4)': '55 غيغابايت',
            'أنواع الصور': 'صور، مستندات، معقدة',
            'الجودة': 'جيدة جداً*',
            'عبر Ollama؟': 'نعم*',
          },
          {
            'النموذج': 'Qwen3.5 122B',
            'المعاملات': '122B',
            'VRAM (Q4)': '81 غيغابايت',
            'أنواع الصور': 'صور، مستندات، معقدة',
            'الجودة': 'الأفضل محلياً',
            'عبر Ollama؟': 'نعم',
          },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-ar.svg',
        imageCaption:
          'مقارنة نماذج الرؤية المحلية حسب VRAM وجودة OCR: يعمل Moondream 2 بذاكرة 2 غيغابايت، ويتصدر Qwen3-VL 8B استخراج النصوص من المستندات بذاكرة 6 غيغابايت، بينما يقدم Gemma 4 أفضل جودة عامة من 8 غيغابايت (E4B) إلى 24 غيغابايت (26B و31B) عبر Ollama.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: 'اختبار دقة واقعي: استخراج بيانات الفواتير',
        content:
          'مقارنة لدقة نماذج الرؤية المحلية في مهمة استخراج مستند منظم. الاختبار: استخراج 5 حقول (اسم المورد، التاريخ، المجموع، مبلغ الضريبة، عدد البنود) من نفس نموذج الفاتورة.',
        columns: ['النموذج', 'المورد', 'التاريخ', 'المجموع', 'الضريبة', 'البنود', 'النتيجة'],
        rows: [
          { 'النموذج': 'Moondream 2', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✗', 'الضريبة': '✗', 'البنود': '✗', 'النتيجة': '2/5' },
          { 'النموذج': 'LLaVA 1.6 7B', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✗', 'البنود': '✓', 'النتيجة': '4/5' },
          { 'النموذج': 'MiniCPM-V 4.5', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✓', 'البنود': '✓', 'النتيجة': '5/5' },
          { 'النموذج': 'Qwen3-VL 8B', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✓', 'البنود': '✓', 'النتيجة': '5/5' },
          { 'النموذج': 'Llama 3.2 11B', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✓', 'البنود': '✓', 'النتيجة': '5/5' },
          { 'النموذج': 'GPT-5.5 Vision', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✓', 'البنود': '✓', 'النتيجة': '5/5' },
        ],
        callouts: [
          {
            type: 'note',
            text: 'النتائج مستخلصة من فاتورة اختبار واحدة. ستتفاوت دقتك بحسب جودة المستند والخط وتعقيد التخطيط. تحقق دائماً من الأرقام المستخرجة مقابل المستندات الأصلية.',
          },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: 'دعم الصور المتعددة',
        content:
          'لا تقبل جميع نماذج الرؤية المحلية صوراً متعددة في طلب واحد. يُعدّ دعم الصور المتعددة أمراً بالغ الأهمية لمعالجة المستندات (إرسال جميع صفحات ملف PDF متعدد الصفحات) ومهام المقارنة البصرية (مقارنة صورتين لمنتج).',
        columns: ['الميزة', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'الميزة': 'إدخال صور متعددة',
            'Moondream': 'لا',
            'LLaVA 7B': 'لا',
            'MiniCPM-V': 'نعم (حتى 4)',
            'Qwen3-VL': 'نعم (حتى 8)',
            'LLaVA 13B': 'لا',
            'Llama 3.2 Vision': 'نعم (متعدد الصفحات)',
            'InternVL': 'نعم',
          },
        ],
        items: [
          'يقبل MiniCPM-V حتى 4 صور لكل موجّه؛ ويعالج Qwen3-VL حتى 8 صور. لا يقبل LLaVA وMoondream سوى صورة واحدة لكل طلب.',
          '**متى يكون دعم الصور المتعددة مهماً:** إرسال جميع صفحات ملف PDF متعدد الصفحات للاستخراج الكامل للمستند. مقارنة صورتين لمنتج جنباً إلى جنب. تحليل لقطات الشاشة قبل وبعد في موجّه واحد.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'الإعداد عبر Ollama — خطوة بخطوة',
        content:
          'برنامج Ollama هو أيسر طريقة لتشغيل نماذج الرؤية المحلية. بمجرد تثبيت Ollama، تعمل نماذج الرؤية بأمر سحب واحد وتقبل الصور عبر خيار سطر الأوامر أو واجهة HTTP API.',
        items: [
          '**الخطوة 1 — تثبيت Ollama:** قم بالتنزيل من ollama.com لنظام macOS أو Linux أو Windows. يستغرق التثبيت أقل من دقيقتين.',
          '**الخطوة 2 — سحب نموذج رؤية:** `ollama pull gemma4:e4b` (تنزيل 6.6–9.5 غيغابايت) لبطاقات 8 غيغابايت، أو `ollama pull qwen3-vl:8b` (6.1 غيغابايت) لاستخراج النصوص، أو `ollama pull moondream` (1.8B، 1.7 غيغابايت) للأجهزة ذات VRAM المحدود.',
          '**الخطوة 3 — الاستخدام من سطر الأوامر:** `ollama run gemma4:e4b "What is in this image? /path/to/photo.jpg"` — ضع مسار الصورة داخل الموجّه؛ فالأمر `ollama run` لا يحتوي على خيار `--image`.',
          '**الخطوة 4 — استخدام HTTP API:** أرسل طلب POST إلى `http://localhost:11434/api/generate` مع الصورة كسلسلة مُرمَّزة بـ Base64 في مصفوفة `images`. أضف مخطط JSON في الحقل `format` للحصول على مخرجات منظمة.',
          '**الخطوة 5 — مثال Python:** استخدم مكتبة `requests` مع ترميز Base64 — انظر مقطع الكود أدناه.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# مثال على الاستخدام
result = ask_vision_model("invoice.png", "استخرج جميع بنود الفاتورة والمجاميع.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-ar.svg',
        imageCaption:
          'خط سير إعداد Ollama للرؤية: تثبيت Ollama، سحب نموذج رؤية مثل gemma4:e4b، تشغيله عبر CLI مع وضع مسار الصورة داخل الموجّه أو عبر واجهة HTTP على localhost:11434، والحصول على نص لـ OCR أو الأسئلة والأجوبة أو وصف الصورة.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'حالة الاستخدام 1: استخراج النصوص من المستندات',
        content:
          '**تتفوق نماذج VLM على نظام OCR التقليدي في المستندات شبه المنظمة** — الفواتير والإيصالات والعقود والجداول حيث يكون التخطيط بالغ الأهمية إلى جانب النص ذاته. يستخرج نظام OCR التقليدي (Tesseract) الأحرف، بينما تفهم نماذج VLM معنى تلك الأحرف في سياقها.',
        items: [
          '**ما يعمل بشكل جيد:** الفواتير الممسوحة ضوئياً، ولقطات شاشة ملفات PDF، والملاحظات المكتوبة بخط الطباعة، والجداول ذات الحدود الواضحة، وبطاقات الأعمال.',
          '**ما يعمل بشكل أقل جودة:** خط الكتابة اليدوية المتصلة، والمسوحات الضوئية منخفضة الدقة (أقل من 150 DPI)، وملفات JPEG المضغوطة بشدة، والنصوص المتداخلة.',
          '**أفضل النماذج لاستخراج النصوص:** Qwen3-VL 8B وQwen3.5 9B (فئة 6–8 غيغابايت)، وQwen3.8 27B (18 غيغابايت، و91.1 في OmniDocBench 1.5 بحسب بطاقة نموذجه)، وGemma 4 لأنواع المستندات المتنوعة.',
          '**هندسة الموجّهات لاستخراج النصوص:** "استخرج جميع النصوص من هذا المستند بالضبط كما هي مكتوبة، مع الحفاظ على فواصل الأسطر." أو: "أعِد محتوى هذه الفاتورة بتنسيق JSON بالحقول: المورد، التاريخ، البنود[]، المجموع."',
          '**مقارنةً بنظام OCR التقليدي:** نماذج VLM أبطأ لكنها أكثر فهماً للسياق. برنامج Tesseract أسرع لاستخراج النص الخالص من المستندات النظيفة. استخدم نماذج VLM عندما تحتاج استخراج بيانات منظمة لا مجرد نص خام.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'حالة الاستخدام 2: الأسئلة والأجوبة حول الصور ووصفها',
        content:
          '**لفهم المشاهد العام ووصف المنتجات والأسئلة والأجوبة البصرية، يُعدّ Gemma 4 (E4B بسعة 8 غيغابايت، أو 26B أو 31B بسعة 24 غيغابايت) النموذج المحلي الموصى به.** يُنتج أوصافاً طبيعية تفصيلية ويتعامل مع الأسئلة الدقيقة حول محتوى الصور بكفاءة.',
        items: [
          '**وصف المشاهد:** "ما الذي في هذه الصورة؟" — الأشياء والأشخاص والأنشطة والبيئة والمزاج.',
          '**فهرسة المنتجات:** معالجة صور المنتجات بقالب موجّه مثل "صِف هذا المنتج: اللون، الشكل، المادة، الحالة." مفيد للمخزون في التجارة الإلكترونية دون واجهات برمجية سحابية.',
          '**إمكانية الوصول:** توليد النص البديل (alt text) للصور على نطاق واسع. دقة كافية لمتطلبات إمكانية الوصول في صور المنتجات القياسية.',
          '**أفضل النماذج:** Gemma 4 12B أو 26B A4B للأسئلة العامة على الصور. Qwen3.5 4B أو LLaVA 1.6 7B لمعالجة الصور بحجم كبير حيث تكون السرعة أهم من الدقة.',
          '**اعتبارات السرعة:** تعتمد السرعة على النموذج ومعالج الرسومات وطول الوصف — اختبر عينة من 20 صورة على عتادك الخاص قبل الالتزام بدفعة من آلاف الصور.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'حالة الاستخدام 3: تحليل لقطات الشاشة وواجهة المستخدم',
        content:
          '**لتحليل لقطات شاشة التطبيقات ورسائل الخطأ ولوحات المعلومات، يُعدّ InternVL 2.5 أقوى نموذج محلي** — إذ ركزت بيانات تدريبه على واجهات المستخدم البرمجية ولقطات GitHub ومخرجات تنفيذ الكود.',
        items: [
          '**سير عمل المطورين:** أرسل لقطات شاشة لرسائل الخطأ إلى النموذج: "ما المشكلة في هذه اللقطة وكيف تُعالجها؟"',
          '**توليد تقارير الأخطاء:** إنشاء تلقائي لأوصاف الأخطاء من لقطات الشاشة باستخدام موجّه منظم.',
          '**مراقبة لوحات المعلومات:** تحليل لقطات شاشة لوحات المراقبة للكشف عن الشذوذات — "هل توجد مقاييس على مستوى التحذير في لقطة Grafana هذه؟"',
          '**اختبار إمكانية الوصول:** مقارنة لقطات الشاشة قبل وبعد تغييرات واجهة المستخدم للتحقق من خصائص إمكانية الوصول البصري.',
          '**أفضل النماذج:** InternVL 2.5 8B (بناء مجتمعي، قوي في واجهات المستخدم)، وGemma 4 وQwen3-VL (دعم رسمي في Ollama واستدعاء للأدوات في سير عمل الوكلاء).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'حالة الاستخدام 4: قراءة الرسوم البيانية والمخططات',
        content:
          '**استخراج البيانات من المخططات الشريطية والخطية والجداول ممكن لكنه يتطلب صياغة موجّهات دقيقة.** جميع نماذج VLM المحلية أضعف في قراءة الرسوم البيانية مقارنةً بوصف الصور — تحقق دائماً من الأرقام المستخرجة من الرسوم مقابل البيانات الأصلية.',
        items: [
          '**ما يعمل:** قراءة تسميات المحاور، تحديد الاتجاهات، مقارنة ارتفاعات الأعمدة النسبية، قراءة قيم الجداول بخطوط واضحة.',
          '**ما ليس موثوقاً:** الاستخراج الرقمي الدقيق من الرسوم البيانية المستمرة (مثل "الشريط في الربع الثالث = 43.7 وحدة")، ونسب مخططات الدائرة دون تسميات صريحة.',
          '**استراتيجية الموجّه:** "صِف الاتجاه الظاهر في هذا المخطط الخطي" أجدى من "ما القيمة الدقيقة في مارس 2026؟"',
          '**أفضل النماذج للرسوم البيانية:** InternVL 2.5 (فهم قوي للمخططات)، وGemma 4 وQwen3-VL (جيدان مع المخططات ذات التسميات الواضحة).',
          '**ملاحظة حول القيود:** لا يستطيع أي نموذج VLM محلي في 2026 استخراج أرقام دقيقة بشكل موثوق من الرسوم البيانية البصرية المعقدة. استخرج البيانات المنظمة من المصدر الأصلي متى أمكن.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'حالة الاستخدام 5: تحليل إطارات الفيديو',
        content:
          '**تستطيع نماذج الرؤية المحلية تحليل الفيديو بمعالجة الإطارات الفردية** — استخرج الإطارات باستخدام ffmpeg، وأرسل كل إطار إلى نموذج الرؤية، ثم اجمعها عبر نموذج لغوي نصي للحصول على ملخص. العملية ليست فورية: توقع إطاراً واحداً كل 0.5–3 ثوانٍ بحسب النموذج والعتاد.',
        items: [
          '**استخراج الإطارات:** استخدم ffmpeg للاستخراج بمعدل إطار في الثانية: `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**تحليل إطار بإطار:** شغّل كل إطار عبر نموذج الرؤية باستخدام موجّه ثابت (مثل "صِف ما يجري في هذا الإطار في جملة واحدة").',
          '**تلخيص عبر الإطارات:** اجمع جميع أوصاف الإطارات ومررها إلى نموذج لغوي نصي مع موجّه تلخيص.',
          '**حالات الاستخدام:** مراجعة كاميرات المراقبة (تحديد الإطارات ذات النشاط غير المعتاد)، تحليل تسجيلات المحاضرات (إنشاء ملاحظات لكل شريحة)، فحص الجودة في التصنيع (تحديد الإطارات التي تظهر فيها عيوب).',
          '**أفضل النماذج لإطارات الفيديو:** Gemma 4 أو Qwen3.8 للجودة (كلاهما يقبل الفيديو على شكل إطارات بصورة أصلية)، وQwen3.5 4B أو LLaVA 1.6 7B للسرعة (معدلات إطارات أعلى).',
          '**الواقع العملي للسرعة:** عند استخراج إطار في الثانية واستدلال نحو 1–3 ثوانٍ لكل إطار، يستغرق فيديو مدته 10 دقائق (600 إطار) نحو 10–30 دقيقة للمعالجة، بحسب النموذج ومعالج الرسومات.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "Describe what is happening in this frame in one sentence.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("lecture.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\\n".join(f"[{i+1}s] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'متطلبات VRAM والأداء الفعلي',
        content:
          'تضيف نماذج الرؤية المحلية مشفِّراً بصرياً فوق النموذج اللغوي الأساسي، مما يزيد من متطلبات VRAM ووقت الاستدلال مقارنةً بالنماذج النصية البحتة.',
        columns: ['النموذج', 'VRAM (Q4)', 'رمز/ثانية (RTX 4070)', 'رمز/ثانية (M5 Pro 36GB)', 'مناسب للإنتاج؟'],
        rows: [
          {
            'النموذج': 'Moondream 2 (1.8B)',
            'VRAM (Q4)': '~2 غيغابايت',
            'رمز/ثانية (RTX 4070)': '~25–35',
            'رمز/ثانية (M5 Pro 36GB)': '~30–40',
            'مناسب للإنتاج؟': 'نعم — للمهام البسيطة',
          },
          {
            'النموذج': 'LLaVA 1.6 7B',
            'VRAM (Q4)': '~6 غيغابايت',
            'رمز/ثانية (RTX 4070)': '~15–20',
            'رمز/ثانية (M5 Pro 36GB)': '~18–25',
            'مناسب للإنتاج؟': 'نعم — أغراض عامة',
          },
          {
            'النموذج': 'MiniCPM-V (8B)',
            'VRAM (Q4)': '~6 غيغابايت',
            'رمز/ثانية (RTX 4070)': '~12–18',
            'رمز/ثانية (M5 Pro 36GB)': '~15–20',
            'مناسب للإنتاج؟': 'نعم — استخراج النصوص والمستندات',
          },
          {
            'النموذج': 'Llama 3.2 Vision 11B',
            'VRAM (Q4)': '~8 غيغابايت',
            'رمز/ثانية (RTX 4070)': '~10–14',
            'رمز/ثانية (M5 Pro 36GB)': '~12–16',
            'مناسب للإنتاج؟': 'تحقق من مشكلة تحميل Ollama أولاً',
          },
          {
            'النموذج': 'LLaVA 1.6 13B',
            'VRAM (Q4)': '~10 غيغابايت',
            'رمز/ثانية (RTX 4070)': '~8–12',
            'رمز/ثانية (M5 Pro 36GB)': '~10–14',
            'مناسب للإنتاج؟': 'نعم — مع معالج رسومات 12 غيغابايت',
          },
          {
            'النموذج': 'Llama 3.2 Vision 90B',
            'VRAM (Q4)': '~64 غيغابايت',
            'رمز/ثانية (RTX 4070)': 'غير متاح (يحتاج معالجات متعددة أو M-Max)',
            'رمز/ثانية (M5 Pro 36GB)': 'غير متاح (يحتاج M5 Max 128GB+)',
            'مناسب للإنتاج؟': 'Apple Silicon المتقدم فقط',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'نطاقات الرموز في الثانية هي تقديرات استرشادية وليست قياسات جديدة؛ ولم يُعَد تشغيلها لنماذج Gemma 4 وQwen3.5 وQwen3.8. اختبر على عتادك الخاص بالأمر `ollama run <model> --verbose` الذي يطبع معدل التقييم.',
          },
          {
            type: 'note',
            text: 'سرعة توليد الرموز في نماذج الرؤية أبطأ من نماذج النص البحت بنفس الحجم، لأن المشفِّر البصري يضيف حملاً حسابياً كبيراً عند الرمز الأول للصورة. تُولَّد الرموز النصية اللاحقة بسرعة قريبة من الطبيعية.',
          },
          {
            type: 'note',
            text: 'تتيح الذاكرة الموحدة لـ Apple Silicon تشغيل نماذج أكبر (Llama 3.2 Vision 90B بحجم 55 غيغابايت أو Qwen3.5 122B بحجم 81 غيغابايت على جهاز Mac بسعة 128 غيغابايت) لا تتسع في ذاكرة VRAM المنفصلة. السرعة أبطأ قليلاً من معالج رسومات NVIDIA المكافئ لكن دون قيد VRAM.',
          },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'مقارنة نماذج الرؤية المحلية مع GPT-5.5 Vision',
        content:
          'قلّصت نماذج VLM المحلية الفجوة كثيراً في المستندات المنظمة، لكنها لا تزال تتأخر عن GPT-5.5 Vision في المهام المعقدة والغامضة.',
        items: [
          '**المستندات المنظمة (الفواتير، النماذج):** النماذج المحلية تصل إلى 80–90٪ من جودة GPT-5.5 — كافية للاستخدام الإنتاجي مع المستندات النظيفة المنسقة بشكل جيد.',
          '**المشاهد المعقدة والصور الغامضة:** النماذج المحلية تصل إلى 50–70٪ من GPT-5.5 — فجوة جودة ملحوظة في الصور ذات السياق غير المعتاد أو الإضاءة الخاصة أو المحتوى الغامض.',
          '**التعرف على الخط اليدوي:** النماذج المحلية أضعف بشكل ملحوظ، خاصةً مع الخط المتصل (الكرسيف). يتفوق GPT-5.5 Vision في معالجة الخط اليدوي بصورة ملموسة.',
          '**استخراج بيانات المخططات:** غير موثوق في كلا النموذجين المحلي وGPT-5.5، لكن GPT-5.5 أكثر دقة في الأرقام الدقيقة.',
          '**التكلفة:** GPT-5.5 Vision بتكلفة $0.01–0.03 لكل صورة مقابل $0 محلياً. 10,000 صورة شهرياً = توفير $100–300 باستخدام النماذج المحلية.',
          '**الخصوصية:** النماذج المحلية تعالج الصور على الجهاز افتراضيًا — فلا تُرسل الصور إلى واجهة سحابية ما لم تفعّل ميزات سحابية أو أدوات متصلة. GPT-5.5 يرسل الصور إلى خوادم OpenAI.',
          '**السرعة:** النماذج المحلية بين 10–20 رمزاً/ثانية مقابل GPT-5.5 بين 30–80 رمزاً/ثانية، لكن المعالجة المحلية لا تعاني من زمن الاستجابة الشبكي في المعالجة الدُّفعية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لمعالجة الفواتير والنماذج في بيئة الإنتاج مع مدخلات نظيفة، يمكن لنماذج VLM المحلية (Gemma 4 وQwen3-VL 8B وQwen3.8 27B) أن تحل محل GPT-5.5 Vision بتكلفة صفرية. لكل ما يتضمن خطاً يدوياً أو تحليل مشاهد معقدة أو محتوى غامض، لا يزال GPT-5.5 هو الأفضل.',
          },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'تعمق في نموذج LLaVA',
        content:
          '**LLaVA (Large Language and Vision Assistant) هو البنية التأسيسية لنماذج VLM مفتوحة المصدر.** أُصدر من قِبل جامعة ويسكونسن-ماديسون ومايكروسوفت ريسيرش عام 2023، وأرسى نمط مشفِّر CLIP + مفكك ترميز النموذج اللغوي الذي تتبعه معظم نماذج VLM المحلية الحديثة.',
        items: [
          '**البنية:** مشفِّر بصري CLIP ViT-L/14 + مفكك ترميز نصي Llama-2 أو Mistral، تصلهما طبقة إسقاط خطية بسيطة.',
          '**LLaVA 1.5 مقابل 1.6:** أضافت النسخة 1.6 (أُصدرت مطلع 2024) دعماً للمدخلات عالية الدقة عبر التصحيح الديناميكي، مما حسّن دقة استخراج النصوص وقراءة المخططات بشكل ملحوظ.',
          '**التدريب:** ضبط دقيق بالتعليمات على مجموعة بيانات LLaVA-Instruct-150K — محادثات بصرية مُولَّدة من تعليقات الصور وتوصيفات الكشف عن الأشياء.',
          '**نقاط القوة:** معرفة عامة واسعة، توثيق جيد، مجتمع كبير، تكامل واسع مع Ollama.',
          '**نقاط الضعف:** استخراج نصوص أضعف من Qwen3-VL وMiniCPM-V، وتحليل واجهة مستخدم أضعف من InternVL 2.5، وتفوّق Gemma 4 وعائلة Qwen3 عليه إجمالاً.',
          '**سبب الاستمرار في التوصية به:** لدى LLaVA 1.6 أكبر مجتمع، وأكثر الدروس التعليمية، وأكثر أمثلة الموجّهات من بين جميع نماذج VLM المحلية. عند وجود مشكلة، تجد المساعدة أسرع.',
          '**مراجعة كاملة:** [مراجعة LLaVA (2026)](/ar/power-local-llm/llava-review) — مراجعة PromptQuorum المخصصة، بما في ذلك الفارق الدقيق بين رخصة Apache-2.0 والنموذج الأساسي وأوامر Ollama الحقيقية.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL وQwen3.5 وQwen3.8 — أفضل أداء لاستخراج النصوص متعددة اللغات',
        content:
          '**عائلة Qwen هي الخيار المفتوح الأقوى لاستخراج النصوص من المستندات والنصوص متعددة اللغات في 2026.** Qwen3-VL (بأحجام من 2B إلى 235B) هي خط الرؤية المخصص، وQwen3.5 (من 0.8B إلى 122B) تدمج الرؤية في النموذج الأساسي، وQwen3.8 27B (أغسطس 2026، برخصة Apache 2.0) هي الأحدث، بدرجة مسجَّلة قدرها 91.1 في OmniDocBench 1.5.',
        items: [
          '**البنية:** دعم دقة ديناميكية حتى 4096×4096 — أعلى بكثير من LLaVA 1.6 (672×672) أو Llama 3.2 Vision (1120×1120). يتيح قراءة المسوحات الضوئية عالية الدقة دون تقليل العينة.',
          '**استخراج النصوص متعددة اللغات:** الأفضل في فئته للصينية واليابانية والكورية والإنجليزية. شملت بيانات التدريب مجموعات مستندات متعددة اللغات على نطاق واسع — ميزة كبيرة على LLaVA وLlama 3.2 Vision للمستندات غير الإنجليزية.',
          '**أي حجم تختار:** Qwen3-VL 8B تنزيل بحجم 6.1 غيغابايت وتناسب بطاقات 8 غيغابايت؛ وQwen3.5 9B بحجم 6.6–7.6 غيغابايت؛ وQwen3.8 27B بحجم 18 غيغابايت وتحتاج إلى بطاقة 24 غيغابايت؛ وQwen3-VL 32B بحجم 21 غيغابايت. لا توجد نسخة Qwen3-VL 72B على Ollama.',
          '**التثبيت على Ollama:** `ollama pull qwen3-vl:8b` أو `ollama pull qwen3.5:9b` أو `ollama pull qwen3.8` — جميعها في مكتبة نماذج Ollama.',
          '**دعم الصور المتعددة:** يقبل حتى 8 صور لكل طلب — أعلى قدرة متعددة الصور من بين جميع النماذج في هذه المقارنة.',
          '**صفحات النماذج:** [Qwen3-VL على Ollama](https://ollama.com/library/qwen3-vl)، [Qwen3.8-27B على Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'كيفية اختيار نموذج الرؤية المناسب',
        content:
          'شجرة قرار تعتمد على VRAM أولاً لاختيار نموذج الرؤية المحلي الملائم:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'اختر نموذجك بحسب VRAM أولاً (2→4→8→24 غيغابايت)، ثم دقّق بحسب حالة الاستخدام (استخراج النصوص، أو واجهة المستخدم، أو الأسئلة العامة، أو أقصى جودة).',
          },
          {
            type: 'plain-terms',
            text: 'أقل من 4 غيغابايت: Qwen3.5 2B أو Moondream. 8 غيغابايت: Gemma 4 E4B للصور، وQwen3-VL 8B للمستندات. 24 غيغابايت: Gemma 4 26B/31B أو Qwen3.8 27B. 64 غيغابايت فأكثر: Qwen3.5 122B.',
          },
        ],
        items: [
          '**أقل من 4 غيغابايت VRAM:** Qwen3.5 2B (2.7–3.1 غيغابايت) أو Qwen3-VL 2B (1.9 غيغابايت) أو Moondream 2 (1.7 غيغابايت) هي الخيارات العملية. وPaliGemma 2 (3B) وSmolVLM (2.2B) بديلان ببناءات مجتمعية. لا يصلح أي منها لاستخراج النصوص الكثيفة.',
          '**6–8 غيغابايت VRAM:** Gemma 4 E4B للأسئلة العامة على الصور، وQwen3-VL 8B أو Qwen3.5 9B لاستخراج نصوص المستندات والنصوص متعددة اللغات، وLLaVA 1.6 7B حيث يهم دعم المجتمع.',
          '**12–16 غيغابايت VRAM:** Gemma 4 12B (تنزيل 7.7–8.0 غيغابايت) هو التوصية الواضحة — درجات رؤية قوية بالنسبة لحجمه، مع إدخال صوتي ونافذة سياق بحجم 256K. كما يتسع LLaVA 1.6 13B وInternVL 2.5 8B (للقطات واجهة المستخدم والكود).',
          '**24 غيغابايت VRAM:** Gemma 4 26B A4B (16–19 غيغابايت) أو Gemma 4 31B (19–20 غيغابايت) أو Qwen3.8 27B (18 غيغابايت) أو Qwen3-VL 32B (21 غيغابايت) — أقرب خيار محلي إلى جودة الرؤية على مستوى السحابة.',
          '**64 غيغابايت فأكثر من الذاكرة الموحدة (Apple M-Max/Ultra، معالجات رسومات متعددة):** Qwen3.5 122B (81 غيغابايت) أو Llama 3.2 Vision 90B (55 غيغابايت) لأكبر النماذج المحلية؛ كلاهما يحتاج إلى عتاد عالي الذاكرة وأبطأ لكل رمز من نماذج فئة 24 غيغابايت.',
          '**تحقق دائماً من الأرقام:** بصرف النظر عن النموذج، قابل أي قيمة رقمية مستخرجة من الرسوم البيانية أو الجداول مع البيانات الأصلية. نماذج VLM المحلية تُهلوس أرقاماً دقيقة من الرسوم البصرية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
          {
            q: 'لماذا يفشل llama3.2-vision مع الخطأ "unknown model architecture: mllama"؟',
            a: 'يُبلغ مستخدمون عن هذا الخطأ مع llama3.2-vision في إصدارات Ollama الحديثة (مسألتا GitHub رقم 16490 و16547، فُتحتا في منتصف 2026؛ وأُغلقت الثانية بوصفها مكررة دون إصلاح مؤكد). ولم يُجدِ تحديث Ollama أو إعادة سحب النموذج في تلك البلاغات. انتقل إلى Gemma 4 أو Qwen3-VL اللذين يُصانان بنشاط في مكتبة Ollama، ما لم يكن لا بد من البقاء على Llama 3.2 Vision — وفي هذه الحالة ثبّت إصدار Ollama الذي لا يزال يحمّلها.',
          },
          {
            q: 'ما أفضل نموذج رؤية ولغة صغير بأقل من 3B معامل؟',
            a: 'تُعدّ Qwen3.5 2B (تنزيل 2.7–3.1 غيغابايت) وQwen3-VL 2B (1.9 غيغابايت) أقوى الخيارات الصغيرة على Ollama؛ وMoondream 2 (1.8B، 1.7 غيغابايت) هو الأخف. ويضيف Gemma 4 E2B (2.3B معاملات فعّالة، تنزيل 4.6–7.5 غيغابايت) إدخال الصوت. توقع استخراج نصوص وفهماً للمشاهد المعقدة أضعف من فئة 8B.',
          },
          {
            q: 'أي النماذج المحلية تستطيع التعامل مع مدخلات الكاميرا والميكروفون المباشرة؟',
            a: 'تقبل Gemma 4 E2B وE4B و12B الصور والصوت معاً، مما يجعلها الأساس الطبيعي لمساعد محلي يرى ويسمع. لكن النموذج وحده ليس نظاماً مباشراً: ما زلت بحاجة إلى حلقة التقاط (التقاط الإطارات وتقطيع الصوت)، ومسار لتحويل الكلام إلى نص أو إدخال الصوت، وخطوة لتحويل النص إلى كلام للردود المنطوقة. تأكد من أن إصدار بيئة التشغيل لديك يمرر الصوت فعلاً إلى النموذج قبل البناء عليه.',
          },
          {
            q: 'كيف أحصل على مخرجات منظمة موثوقة من لقطات الشاشة والمستندات؟',
            a: 'مرّر مخطط JSON في الحقل `format` في Ollama، واضبط درجة الحرارة على 0، واطلب فقط الحقول الظاهرة في الصورة. يقيّد ذلك الرد بصيغة JSON صالحة بمفاتيحك؛ لكنه لا يجعل القيم صحيحة، لذا تحقق من الأرقام والتواريخ مقابل المصدر وسجّل حالات الفشل. تتبع النماذج الأكبر (8B فأكثر) المخططات بثبات أكبر من نماذج 2B.',
          },
          {
            q: 'ما أفضل بدائل GPT-4V التي تعمل بالكامل على الجهاز؟',
            a: 'Gemma 4 31B (19–20 غيغابايت) وQwen3.8 27B (18 غيغابايت) وQwen3-VL 32B (21 غيغابايت) هي الأقرب على معالج رسومات بسعة 24 غيغابايت؛ وتغطي Gemma 4 E4B وQwen3-VL 8B أجهزة 8 غيغابايت. ويمكن تشغيلها جميعًا دون اتصال بالإنترنت عبر Ollama. تضاهي النماذج السحابية في المستندات النظيفة والصور الواضحة، لكنها تتأخر في الخط اليدوي والمشاهد الغامضة والرسوم المعلوماتية المعقدة.',
          },
          {
            q: 'هل يمكنني استخدام LLaVA أو Llama 3.2 Vision دون Ollama؟',
            a: 'نعم. يمكنك تشغيل LLaVA وLlama 3.2 Vision مباشرةً باستخدام llama.cpp (مع دعم الرؤية)، أو مكتبة transformers (مع بطاقة النموذج المناسبة)، أو LM Studio (الذي يوفر واجهة رسومية لنماذج الرؤية). يُوصى بـ Ollama لبساطته — يتولى تنزيل النموذج واختيار الضغط الكمي واستضافة الواجهة البرمجية تلقائياً.',
          },
          {
            q: 'هل يدعم Llama 3.2 Vision إدخال ملفات PDF مباشرةً؟',
            a: 'لا يقبل أي نموذج VLM محلي ملفات PDF مباشرةً. يجب أولاً تحويل صفحات PDF إلى صور (باستخدام pdf2image أو pypdfium2 أو ما شابه)، ثم إرسال كل صفحة كطلب صورة منفصل. لملف PDF من 10 صفحات، ترسل 10 استعلامات صور منفصلة وتجمع النتائج أو تلخصها.',
          },
          {
            q: 'كيف تُقارن نماذج الرؤية المحلية مع GPT-5.5 Vision؟',
            a: 'لا يزال GPT-5.5 Vision أفضل بشكل ملحوظ في المشاهد الغامضة والخط اليدوي والرسوم المعلوماتية المعقدة والمهام التي تتطلب معرفة عالمية. يقترب Gemma 4 وQwen3-VL من GPT-5.5 في المستندات المنظمة (الفواتير والنماذج والصور الواضحة) لكنهما يتأخران في الصور الدقيقة والغامضة. انظر المقارنة الكاملة أعلاه للاطلاع على تفاصيل التكلفة والخصوصية والسرعة.',
          },
          {
            q: 'ما دقة الصور التي تدعمها نماذج VLM المحلية؟',
            a: 'يدعم LLaVA 1.6 حتى 672×672 دقة فعّالة (مع التصحيح الديناميكي). يدعم MiniCPM-V حتى 1792×1792 — وهذا أحد أسباب تفوقه على LLaVA في المسوحات الضوئية عالية الدقة. يدعم Llama 3.2 Vision حتى 1120×1120. يقبل Gemma 4 وQwen3-VL نسب أبعاد ودقات متغيرة. لأفضل نتائج استخراج النصوص، أرسل صور المستندات بدقة 150 نقطة لكل بوصة أو أعلى.',
          },
          {
            q: 'هل يمكنني ضبط نموذج رؤية محلي دقيقاً على صوري الخاصة؟',
            a: 'نعم، لكن الضبط الدقيق لنماذج VLM يستهلك موارد أكثر من الضبط الدقيق للنماذج اللغوية النصية البحتة — إذ يجب معالجة أزواج تدريب الصور والنصوص عبر المرور الأمامي الكامل. الضبط الدقيق لـ LLaVA موثق بشكل جيد باستخدام قاعدة كود التدريب الأصلية. يدعم MiniCPM-V الضبط الدقيق عبر سكريبتات التدريب الرسمية على Hugging Face. في معظم حالات الاستخدام، يكفي هندسة الموجّهات دون الضبط الدقيق.',
          },
          {
            q: 'ما أفضل نموذج رؤية محلي لـ 8 غيغابايت VRAM؟',
            a: 'Gemma 4 E4B (تنزيل 6.6–9.5 غيغابايت) للاستخدام العام، أو Qwen3-VL 8B (6.1 غيغابايت) إذا كان استخراج نصوص المستندات أو النصوص متعددة اللغات هو الحاجة الرئيسية. كلاهما متاح عبر Ollama بأمر pull واحد. وQwen3.5 9B (6.6–7.6 غيغابايت) خيار ثالث.',
          },
          {
            q: 'LLaVA مقابل MiniCPM-V — أيهما أفضل لاستخراج النصوص؟',
            a: 'MiniCPM-V أكثر دقة من LLaVA في استخراج نصوص المستندات، خاصةً الجداول الكثيفة والمسوحات الضوئية عالية الدقة، لكن Qwen3-VL 8B خيار أقوى لاستخراج النصوص من كليهما. LLaVA 1.6 أفضل توثيقاً ولديه دعم مجتمعي أوسع. لاحظ أن صفحة minicpm-v في Ollama ما زالت تصف MiniCPM-V 2.6 (5.5 غيغابايت)؛ أما إصدارات MiniCPM-V الأحدث فتحتاج إلى بناء من Hugging Face أو llama.cpp.',
          },
          {
            q: 'هل تستطيع نماذج الرؤية المحلية قراءة الخط اليدوي؟',
            a: 'الخط اليدوي المطبوع (الحروف المنفصلة): نعم، بدقة معتدلة على Gemma 4 وQwen3-VL وMiniCPM-V. الخط المتصل (الكرسيف): غير موثوق على جميع النماذج المحلية. GPT-5.5 Vision أفضل بكثير في الخط المتصل. لاستخراج النصوص اليدوية المتصلة في بيئة الإنتاج، لا تزال الواجهات البرمجية السحابية هي الأنسب.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[بطاقة نموذج Gemma 4 على Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — رخصة Apache 2.0 من Google، والوسائط المدعومة لكل حجم، ونتائج MMMU Pro.',
          '[Gemma 4 على Ollama](https://ollama.com/library/gemma4) — الوسوم وأحجام التنزيل ونوافذ السياق.',
          '[Qwen3.8-27B على Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — رخصة Apache 2.0، وسياق 262K، ونتيجة OmniDocBench 1.5.',
          '[Qwen3.5 على Ollama](https://ollama.com/library/qwen3.5) و[Qwen3-VL على Ollama](https://ollama.com/library/qwen3-vl) — الأحجام وأحجام التنزيل.',
          '[Llama 3.2 Vision على Ollama](https://ollama.com/library/llama3.2-vision) و[مسألة Ollama رقم 16547](https://github.com/ollama/ollama/issues/16547) — القائمة وخطأ تحميل mllama المُبلَّغ عنه.',
          '[صفحة مشروع LLaVA](https://llava-vl.github.io) — بطاقات نموذج LLaVA 1.5 و1.6، وتفاصيل البنية، ووصف مجموعة بيانات التدريب.',
          '[MiniCPM-V على Ollama](https://ollama.com/library/minicpm-v) و[OpenBMB على Hugging Face](https://huggingface.co/openbmb) — بطاقات النماذج ومعايير استخراج النصوص.',
          '[Moondream على Ollama](https://ollama.com/library/moondream) و[Moondream على GitHub](https://github.com/vikhyat/moondream) — تنزيل النموذج وسكريبتات الاستدلال.',
          '[InternVL 2.5 على Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — بطاقة نموذج OpenGVLab، ودرجات المعايير في مهام المستندات وواجهة المستخدم.',
          '[توثيق Ollama](https://ollama.com) — دعم نماذج الرؤية، والمخرجات المنظمة، ومرجع الواجهة البرمجية، ومكتبة النماذج.',
          '[PaliGemma 2 على Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — بطاقة نموذج PaliGemma 2 3B من Google.',
          '[SmolVLM على Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — بطاقة نموذج SmolVLM من HuggingFace وتعليمات الاستدلال.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[أي نماذج Ollama تدعم الرؤية؟](/ar/prompt-bites/which-ollama-models-support-vision) — إجابة سريعة عن نماذج مكتبة Ollama التي تقبل الصور، مع مواصفات VRAM.',
          '[نماذج رؤية Ollama (2026)](/ar/power-local-llm/ollama-vision-models-review) — دليل عملي ومركّز لتشغيل نماذج الرؤية تحديدًا عبر Ollama: صيغة CLI/API فعلية والنماذج الموجودة فعليًا في مكتبته.',
          '[نماذج الرؤية اللغوية في الكاميرات والطائرات المسيرة 2026](/ar/power-local-llm/vlm-video-analytics-drones-edge) -- أساسيات VLM لسطح المكتب موجودة هنا؛ للنشر المدمج في الكاميرات والطائرات المسيرة، راجع هذا الدليل المخصص للحوسبة الطرفية.',
          '[خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي 2026](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) — دمج نماذج الرؤية مع تحويل الكلام إلى نص وتحويل النص إلى كلام في حزمة محلية متكاملة.',
          '[تحويل الكلام إلى نص محلياً 2026: Whisper.cpp مقابل faster-whisper](/ar/power-local-llm/local-whisper-stt-comparison) — أضف إدخال الصوت لتكملة مخرجات الرؤية.',
          '[تحويل النص إلى كلام ونسخ الصوت محلياً 2026](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — أضف مخرجات صوتية لقراءة ردود نماذج VLM بصوت مسموع.',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — المتطلب الأساسي: إعداد وتكوين Ollama.',
          '[دليل عتاد النماذج اللغوية المحلية](/ar/local-llms/local-llm-hardware-guide) — متطلبات VRAM وذاكرة الوصول العشوائي لاستدلال نماذج الرؤية.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-10-20',
    next_refresh_due: '2027-04-19',
    theme: 'Voice, Speech & Multimodal',
    heroImage: '/images/local-vision-models-llava-ollama-2026-overview-hero-ko.webp',
    title: '최고의 로컬 비전 모델 2026: Gemma 4, Qwen3-VL, LLaVA 및 Ollama 멀티모달 설정 가이드',
    seoTitle: '최고의 로컬 비전 모델 2026: Gemma 4, Qwen3-VL, Ollama',
    intro:
      '비전-언어 모델(VLM)은 이미지와 텍스트를 입력으로 받아 텍스트를 출력합니다. 문서 OCR, 이미지 질의응답, 스크린샷 분석, 차트 읽기 등 모든 작업을 로컬에서 처리할 수 있습니다. 2026년 현재 VLM을 실행하는 가장 간편한 방법은 Ollama를 사용하는 것입니다. 모델을 다운로드하고 이미지를 전송하면 설명이나 답변을 받을 수 있습니다. 이 가이드는 주요 로컬 비전 모델(Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, MiniCPM-V, LLaVA 1.6, Llama 3.2 Vision, Moondream 2, InternVL 2.5)을 비교하고, Ollama 설정 단계를 설명하며, VRAM 요구 사항에 따라 각 모델의 최적 활용 사례를 안내합니다. 다운로드 크기는 Ollama 모델 라이브러리에서, 품질 수치는 각 제공사의 모델 카드에서 가져왔으며 2026년 10월 19일에 확인했습니다.',
    metaDescription:
      '2026년 Ollama용 최고의 로컬 VLM: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. 모델별 VRAM, OCR 추천, 설정 방법.',
    twitterDescription:
      '최고의 로컬 비전 모델 2026: Gemma 4, Qwen3-VL, MiniCPM-V, LLaVA via Ollama. 이미지 질의응답, OCR, 스크린샷 분석을 오프라인으로. VRAM 가이드 및 설정.',
    audience:
      '클라우드 API 없이 로컬에서 이미지 이해 기능이 필요한 개발자 — 문서 처리, 스크린샷 분석, 접근성 도구, 재고 시스템 또는 민감한 이미지를 다루는 워크플로우에 적합합니다.',
    readTime: '11분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 비전 모델',
    targetKeywords: [
      '로컬 비전 모델 2026',
      '최고의 로컬 VLM',
      'gemma 4 vision ollama',
      '3B 미만 소형 비전 언어 모델',
      'LLaVA Ollama 설정',
      '로컬 비전 모델 실행 방법',
      'llama 3.2 vision 로컬',
      'MiniCPM-V 로컬',
      'qwen3-vl 로컬',
      'qwen3-vl ollama',
      '최고의 로컬 비전 모델',
      '오프라인 이미지 이해',
      '로컬 멀티모달 모델',
      'ollama 비전 모델',
    ],
    current_models_mentioned: [
      'Gemma 4 (E2B, E4B, 12B, 26B A4B, 31B)',
      'Qwen3.8 27B',
      'Qwen3.5 (0.8B to 35B)',
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V (8B)',
      'Moondream 2 (1.8B)',
      'Qwen3-VL (2B to 32B)',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '24 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**대부분의 사용자에게 2026년 최고의 로컬 비전 모델은 Ollama로 실행하는 Gemma 4(Apache 2.0)입니다. gemma4:e4b는 8 GB 그래픽카드에, gemma4:26b 또는 31b는 24 GB에 적합합니다.** Google 모델 카드에 따르면 MMMU Pro 점수는 52.6%(E4B), 69.1%(12B), 73.8%(26B A4B), 76.9%(31B)이며, 이전 세대 Gemma 3 27B는 49.7%입니다. 문서 OCR과 다국어 텍스트에는 Qwen3-VL 8B(다운로드 6.1 GB), Qwen3.5 9B, 그리고 더 새로운 Qwen3.8 27B(18 GB)가 가장 강력한 선택입니다. 기존 기본 추천이던 Llama 3.2 Vision은 최근 Ollama 버전에서 로드에 실패한다는 보고("unknown model architecture: mllama")가 있어 더 이상 첫 번째 선택이 아닙니다. 3 GB 미만에서는 Qwen3.5 2B, Qwen3-VL 2B 또는 Moondream 2를 사용하십시오. 모든 모델은 다운로드 후 인터넷 연결 없이 실행할 수 있습니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 Ollama에서 사용하기에 가장 좋은 로컬 비전 모델은 무엇입니까?',
        answer:
          '2026년 Ollama에서 일반적인 이미지 이해에 가장 좋은 로컬 비전 모델은 **Gemma 4**(`ollama pull gemma4`)입니다. 문서 OCR과 다국어 텍스트에는 **Qwen3-VL**, **Qwen3.5** 또는 **Qwen3.8**을, 4 GB 미만의 하드웨어에서는 **Moondream 2** 또는 **Qwen3.5 2B**를 사용하십시오.',
        bullets: [
          'VRAM 4 GB 미만 → Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) 또는 Moondream 2 (1.7 GB): 빠르지만 복잡한 이미지와 빽빽한 텍스트에는 한계.',
          'VRAM 6~8 GB → Gemma 4 E4B (다운로드 6.6–9.5 GB), Qwen3-VL 8B (6.1 GB) 또는 Qwen3.5 9B (6.6–7.6 GB): 품질과 하드웨어 균형이 최고.',
          'VRAM 16~24 GB → Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) 또는 Qwen3-VL 32B (21 GB): 문서와 사진에서 클라우드에 근접한 품질.',
          'Apple M-series 또는 64+ GB → Qwen3.5 122B (81 GB) 또는 Llama 3.2 Vision 90B (55 GB). Qwen3-VL 235B는 143 GB가 필요합니다.',
          '설정: `ollama pull gemma4:e4b` 후 `ollama run gemma4:e4b "Describe this image: ./photo.jpg"` (이미지 경로를 프롬프트에 포함).',
          'OCR 최고: Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 — 문서 텍스트 추출에 가장 강함.',
          'UI/스크린샷 최고: InternVL 2.5 (커뮤니티 GGUF), 또는 도구 호출(tool calling)도 필요하다면 Gemma 4.',
        ],
        updatedDate: '2026-10-19',
      },
    },
    toc: [
      { label: '핵심 요약', anchor: '#key-takeaways' },
      { label: '빠른 사실', anchor: '#quick-facts' },
      { label: '비전-언어 모델이란?', anchor: '#what-are-vlms' },
      { label: '모델 비교표', anchor: '#model-comparison' },
      { label: '실제 정확도 테스트: 청구서 추출', anchor: '#invoice-accuracy-test' },
      { label: '다중 이미지 지원', anchor: '#multi-image-support' },
      { label: 'Ollama 설정 (단계별)', anchor: '#ollama-setup' },
      { label: '활용 사례 1: OCR 및 문서 추출', anchor: '#use-case-ocr' },
      { label: '활용 사례 2: 이미지 질의응답', anchor: '#use-case-qa' },
      { label: '활용 사례 3: 스크린샷 및 UI 분석', anchor: '#use-case-screenshot' },
      { label: '활용 사례 4: 차트 및 다이어그램 읽기', anchor: '#use-case-chart' },
      { label: '활용 사례 5: 동영상 프레임 분석', anchor: '#use-case-video' },
      { label: 'VRAM 및 실제 성능 확인', anchor: '#vram-reality' },
      { label: '로컬 비전 모델 vs GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA 심층 분석', anchor: '#llava-deep-dive' },
      { label: 'Qwen3-VL — 최고의 다국어 OCR', anchor: '#qwen-vl-deep-dive' },
      { label: '비전 모델 선택 방법', anchor: '#how-to-choose' },
      { label: '자주 묻는 질문', anchor: '#faq' },
      { label: '출처', anchor: '#sources' },
      { label: '관련 자료', anchor: '#related-reading' },
    ],
    sections: {
      tldr: {
        id: 'key-takeaways',
        isTldr: true,
        items: [
          '**Gemma 4는 2026년 대부분의 개발자에게 최고의 로컬 비전 모델입니다.** Apache 2.0 라이선스이며 Ollama에서 다섯 가지 크기(E2B, E4B, 12B, 26B A4B, 31B)로 제공되고, 모델 카드의 MMMU Pro는 52.6%(E4B)에서 76.9%(31B)로 Gemma 3 27B의 49.7%보다 높습니다.',
          '**Qwen3-VL 8B, Qwen3.5 9B, Qwen3.8 27B가 문서 OCR과 다국어 텍스트에서 앞서 있습니다.** Qwen3-VL 8B는 6.1 GB 다운로드가 필요하며, Qwen3.8 27B(Apache 2.0, 18 GB)는 OmniDocBench 1.5에서 91.1을 기록했다고 보고되었습니다.',
          '**Llama 3.2 Vision은 더 이상 안전한 기본 선택이 아닙니다.** 최근 Ollama 버전에서 "unknown model architecture: mllama" 오류가 보고되고 있으며(GitHub 이슈 #16490, #16547, 확인된 해결책 없음), Ollama 목록도 약 1년간 갱신되지 않았습니다.',
          '**4 GB 미만에서는 Qwen3.5 2B, Qwen3-VL 2B 또는 Moondream 2를 선택하십시오.** 세 모델 모두 작고 빠르지만 복잡한 장면, 빽빽한 텍스트, 정확한 차트 읽기에는 어려움이 있습니다.',
          '**LLaVA 1.6은 커뮤니티에서 문서화와 검증이 특히 잘 되어 있는 로컬 VLM 중 하나입니다.** 튜토리얼과 문제 해결 자료가 필요할 때 실용적인 선택이지만, OCR과 품질에서는 더 새로운 모델이 앞섭니다.',
          '**구조화된 출력에는 Ollama의 `format` 파라미터를 사용하십시오.** JSON 스키마를 전달하면 응답이 지정한 필드로 제한되어 깔끔하게 파싱됩니다. 그래도 모든 값은 원본과 대조하여 확인하십시오.',
          '**어떤 로컬 모델도 모든 면에서 GPT-5.5 Vision에 필적하지는 않습니다.** 2026년의 로컬 VLM은 구조화된 문서와 선명한 사진에는 우수한 2순위 옵션이지만, 모호한 장면, 손글씨, 복잡한 인포그래픽에는 여전히 약합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**VLM의 역할:** 이미지 + 텍스트를 입력으로 받아 텍스트를 출력합니다. 이미지 생성 모델이 아니라, 이미지를 *이해*하는 모델입니다.',
          '**Ollama 지원:** Gemma 4, Qwen3.8, Qwen3.5, Qwen3-VL, Llama 3.2 Vision, MiniCPM-V, LLaVA, Moondream은 Ollama 공식 라이브러리에 있으며, InternVL, PaliGemma 2, SmolVLM은 커뮤니티 빌드가 필요합니다.',
          '**가장 작은 사용 가능 모델:** Moondream 2 (1.8B, 다운로드 1.7 GB), Qwen3-VL 2B (1.9 GB), Qwen3.5 0.8B (1.2–1.3 GB).',
          '**가장 큰 실용적 로컬 모델:** 64 GB 이상 통합 메모리(Apple M-series 또는 멀티 GPU)에서 Qwen3.5 122B (81 GB)와 Llama 3.2 Vision 90B (55 GB). Qwen3-VL 235B는 143 GB가 필요합니다.',
          '**이미지 입력 형식:** JPEG, PNG, WebP 지원. 최대 해상도는 모델별로 다름 (일반적으로 1024×1024~4096×4096).',
          '**오디오 및 동영상:** Gemma 4 E2B, E4B, 12B는 오디오도 입력받으며, 모든 Gemma 4 크기와 Qwen3.8은 동영상을 프레임으로 처리합니다.',
          '**OCR 정확도:** Qwen3.8 27B ≈ Qwen3-VL 8B ≈ Qwen3.5 9B > Gemma 4 > MiniCPM-V > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
          '**멀티모달 ≠ 빠름:** 비전 모델은 LLM에 시각 인코더를 추가하므로, 같은 파라미터 수의 텍스트 전용 모델보다 토큰 생성이 약 30~60% 느립니다.',
        ],
      },
      whatAreVLMs: {
        id: 'what-are-vlms',
        title: '비전-언어 모델(VLM)이란 무엇입니까?',
        content:
          '비전-언어 모델(VLM)은 이미지와 텍스트 입력을 동시에 처리하고 텍스트를 출력하는 신경망입니다. 표준 아키텍처는 시각 인코더(주로 CLIP 또는 SigLIP)와 언어 디코더(LLM)를 결합하며, 이미지 특징을 LLM이 이해하는 토큰 공간에 매핑하는 프로젝션 레이어로 연결됩니다.',
        items: [
          '**이미지 생성 모델과의 차이:** Stable Diffusion, FLUX, DALL-E 3는 텍스트에서 이미지를 생성하는 모델입니다. VLM은 이미지에서 텍스트를 생성하는 모델로, 이미지를 묘사하고 분석하며 질문에 답변합니다.',
          '**전통적인 OCR 도구와의 차이:** 전통적인 OCR(Tesseract, PaddleOCR)은 패턴 인식으로 구조화된 문서에서 텍스트를 추출합니다. VLM은 문맥을 이해합니다 — 표의 의미를 설명하고, 차트에 대한 질문에 답하며, 사진의 객체를 식별할 수 있습니다.',
          '**로컬 실행의 이유:** 개인 문서(의료 기록, 법적 문서, 재무제표), 독점적 스크린샷(내부 대시보드, 소스 코드), 또는 클라우드 API에 이미지를 전송하는 것이 컴플라이언스나 기밀 문제를 야기하는 모든 워크플로우.',
          '**할 수 없는 것:** 이미지 생성, 스크린샷에 표시된 코드 실행, 인터넷 접속. VLM은 이미지에서 보이는 것을 기반으로 텍스트만 출력합니다.',
        ],
      },
      modelComparison: {
        id: 'model-comparison',
        title: '로컬 비전 모델 비교표',
        content:
          'Ollama 또는 직접 추론을 통해 사용 가능한 가장 뛰어난 로컬 비전 모델 비교(2026년 10월 19일 확인). VRAM 열은 Ollama 다운로드 크기(별도 표시가 없는 한 4비트 양자화)이며, 컨텍스트용으로 1–2 GB를 더하십시오. *Llama 3.2 Vision은 최근 Ollama 버전에서 로드에 실패한다고 보고되었습니다(아래 Llama 3.2 Vision 참고 사항 참조).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM 8 GB: Gemma 4 E4B 또는 Qwen3-VL 8B, 24 GB: Gemma 4 26B/31B 또는 Qwen3.8 27B — 모두 Ollama를 통해 로컬에서 실행 가능합니다.',
          },
          {
            type: 'plain-terms',
            text: 'Gemma 4는 전반적 최고 모델이고, Qwen3-VL, Qwen3.5, Qwen3.8은 문서 OCR과 다국어 텍스트를 선도하며, Moondream과 Qwen3.5 2B는 VRAM 4 GB 미만의 경량 옵션입니다.',
          },
        ],
        columns: ['모델', '파라미터', 'VRAM (Q4)', '이미지 유형', '품질', 'Ollama 지원?'],
        rows: [
          {
            '모델': 'Moondream 2',
            '파라미터': '1.8B',
            'VRAM (Q4)': '~2 GB',
            '이미지 유형': '단순 사진',
            '품질': '기본',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'SmolVLM 2.2B',
            '파라미터': '2.2B',
            'VRAM (Q4)': '~2 GB',
            '이미지 유형': '단순 사진, 설명',
            '품질': '기본+',
            'Ollama 지원?': '커뮤니티',
          },
          {
            '모델': 'Qwen3.5 2B',
            '파라미터': '2B',
            'VRAM (Q4)': '2.7–3.1 GB',
            '이미지 유형': '사진, 문서, OCR',
            '품질': '좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'PaliGemma 2 3B',
            '파라미터': '3B',
            'VRAM (Q4)': '~3 GB',
            '이미지 유형': '사진, 문서',
            '품질': '좋음',
            'Ollama 지원?': '커뮤니티',
          },
          {
            '모델': 'Gemma 4 E2B',
            '파라미터': '2.3B 유효',
            'VRAM (Q4)': '4.6–7.5 GB',
            '이미지 유형': '사진, 문서, 오디오',
            '품질': '좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'LLaVA 1.6 7B',
            '파라미터': '7B',
            'VRAM (Q4)': '~6 GB',
            '이미지 유형': '사진, 문서, 차트',
            '품질': '좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'MiniCPM-V',
            '파라미터': '8B',
            'VRAM (Q4)': '~6 GB (5.5 GB pull)',
            '이미지 유형': '사진, 문서, OCR',
            '품질': '매우 좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Qwen3-VL 8B',
            '파라미터': '8B',
            'VRAM (Q4)': '~6.1 GB',
            '이미지 유형': '사진, 문서, OCR, 다국어',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Qwen3.5 9B',
            '파라미터': '9B',
            'VRAM (Q4)': '6.6–7.6 GB',
            '이미지 유형': '사진, 문서, OCR, 다국어',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Gemma 4 E4B',
            '파라미터': '4.5B 유효',
            'VRAM (Q4)': '6.6–9.5 GB',
            '이미지 유형': '사진, 문서, 오디오',
            '품질': '매우 좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Gemma 4 12B',
            '파라미터': '12B',
            'VRAM (Q4)': '7.7–8.0 GB',
            '이미지 유형': '사진, 문서, 오디오',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'InternVL 2.5 8B',
            '파라미터': '8B',
            'VRAM (Q4)': '~8 GB',
            '이미지 유형': '문서, 차트, UI, 코드',
            '품질': '우수 (UI/차트)',
            'Ollama 지원?': '커뮤니티',
          },
          {
            '모델': 'Llama 3.2 Vision 11B',
            '파라미터': '11B',
            'VRAM (Q4)': '~8 GB (7.8 GB pull)',
            '이미지 유형': '사진, 문서',
            '품질': '우수*',
            'Ollama 지원?': '예*',
          },
          {
            '모델': 'LLaVA 1.6 13B',
            '파라미터': '13B',
            'VRAM (Q4)': '~10 GB',
            '이미지 유형': '사진, 문서, 차트',
            '품질': '매우 좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Gemma 4 26B A4B',
            '파라미터': '26B (4B 활성)',
            'VRAM (Q4)': '16–19 GB',
            '이미지 유형': '사진, 문서, 복잡한 콘텐츠',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Qwen3.8 27B',
            '파라미터': '27B',
            'VRAM (Q4)': '18 GB',
            '이미지 유형': '사진, 문서, 동영상, OCR',
            '품질': '최고 (오픈소스)',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Gemma 4 31B',
            '파라미터': '31B',
            'VRAM (Q4)': '19–20 GB',
            '이미지 유형': '사진, 문서, 복잡한 콘텐츠',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Qwen3-VL 32B',
            '파라미터': '32B',
            'VRAM (Q4)': '21 GB',
            '이미지 유형': '사진, 문서, OCR, 복잡한 콘텐츠',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Llama 3.2 Vision 90B',
            '파라미터': '90B',
            'VRAM (Q4)': '55 GB',
            '이미지 유형': '사진, 문서, 복잡한 콘텐츠',
            '품질': '매우 좋음*',
            'Ollama 지원?': '예*',
          },
          {
            '모델': 'Qwen3.5 122B',
            '파라미터': '122B',
            'VRAM (Q4)': '81 GB',
            '이미지 유형': '사진, 문서, 복잡한 콘텐츠',
            '품질': '로컬 최고',
            'Ollama 지원?': '예',
          },
        ],
        image: '/images/local-vision-models-llava-ollama-2026-vram-comparison-ko.svg',
        imageCaption:
          'VRAM 및 OCR 품질 기준 로컬 비전 모델 비교: Moondream 2는 2GB에서 실행되고, Qwen3-VL 8B는 6GB에서 문서 OCR을 선도하며, Gemma 4는 Ollama를 통해 8GB(E4B)부터 24GB(26B 및 31B)까지 최고의 전반적 품질을 제공한다.',
      },
      invoiceAccuracyTest: {
        id: 'invoice-accuracy-test',
        title: '실제 정확도 테스트: 청구서 추출',
        content:
          '구조화된 문서 추출 작업에서 로컬 비전 모델의 정확도 비교. 테스트: 동일한 샘플 청구서에서 5개 필드(공급업체명, 날짜, 합계, 세금 금액, 항목 수) 추출.',
        columns: ['모델', '공급업체', '날짜', '합계', '세금', '항목 수', '점수'],
        rows: [
          { '모델': 'Moondream 2', '공급업체': '✓', '날짜': '✓', '합계': '✗', '세금': '✗', '항목 수': '✗', '점수': '2/5' },
          { '모델': 'LLaVA 1.6 7B', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✗', '항목 수': '✓', '점수': '4/5' },
          { '모델': 'MiniCPM-V 4.5', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✓', '항목 수': '✓', '점수': '5/5' },
          { '모델': 'Qwen3-VL 8B', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✓', '항목 수': '✓', '점수': '5/5' },
          { '모델': 'Llama 3.2 11B', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✓', '항목 수': '✓', '점수': '5/5' },
          { '모델': 'GPT-5.5 Vision', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✓', '항목 수': '✓', '점수': '5/5' },
        ],
        callouts: [
          {
            type: 'note',
            text: '단일 샘플 청구서로 얻은 결과입니다. 실제 정확도는 문서 품질, 서체, 디자인 복잡도에 따라 달라집니다. 추출된 숫자는 항상 원본 문서와 대조하여 확인하십시오.',
          },
        ],
      },
      multiImageSupport: {
        id: 'multi-image-support',
        title: '다중 이미지 지원',
        content:
          '모든 로컬 비전 모델이 단일 요청에서 여러 이미지를 허용하는 것은 아닙니다. 다중 이미지 지원은 문서 처리(여러 페이지 PDF의 모든 페이지 전송)와 시각적 비교 작업(두 제품 사진 비교)에 중요합니다.',
        columns: ['기능', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen3-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            '기능': '다중 이미지 입력',
            'Moondream': '아니오',
            'LLaVA 7B': '아니오',
            'MiniCPM-V': '예 (최대 4)',
            'Qwen3-VL': '예 (최대 8)',
            'LLaVA 13B': '아니오',
            'Llama 3.2 Vision': '예 (다중 페이지)',
            'InternVL': '예',
          },
        ],
        items: [
          'MiniCPM-V는 프롬프트당 최대 4개 이미지를, Qwen3-VL은 최대 8개 이미지를 허용합니다. LLaVA와 Moondream은 요청당 이미지 1개만 허용합니다.',
          '**다중 이미지가 중요한 경우:** 완전한 문서 추출을 위해 여러 페이지 PDF의 모든 페이지 전송. 두 제품 사진을 나란히 비교. 단일 프롬프트에서 변경 전/후 스크린샷 분석.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Ollama 설정 — 단계별 가이드',
        content:
          'Ollama는 로컬 비전 모델을 실행하는 가장 간편한 방법입니다. Ollama를 설치하면 비전 모델이 단일 pull 명령어로 동작하며 CLI 플래그나 HTTP API를 통해 이미지를 받을 수 있습니다.',
        items: [
          '**1단계 — Ollama 설치:** macOS, Linux 또는 Windows용 파일을 ollama.com에서 다운로드하십시오. 설치에 2분 미만이 소요됩니다.',
          '**2단계 — 비전 모델 다운로드:** 8 GB 그래픽카드에는 `ollama pull gemma4:e4b` (다운로드 6.6–9.5 GB), OCR에는 `ollama pull qwen3-vl:8b` (6.1 GB), VRAM이 적은 환경에는 `ollama pull moondream` (1.8B, 1.7 GB).',
          '**3단계 — CLI에서 사용:** `ollama run gemma4:e4b "What is in this image? /path/to/photo.jpg"` — 이미지 경로를 프롬프트 안에 넣으십시오. `ollama run`에는 `--image` 플래그가 없습니다.',
          '**4단계 — HTTP API 사용:** `http://localhost:11434/api/generate`에 POST 요청을 보내고 `images` 배열에 Base64 인코딩된 이미지 문자열을 포함시키십시오. `format` 필드에 JSON 스키마를 추가하면 구조화된 출력을 받을 수 있습니다.',
          '**5단계 — Python 예제:** Base64 인코딩과 함께 `requests` 라이브러리 사용 — 아래 코드 블록을 참조하십시오.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": prompt,
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

# 사용 예시
result = ask_vision_model("청구서.png", "이 청구서에서 모든 항목과 합계를 추출하십시오.")
print(result)`,
        codeLanguage: 'python',
        image: '/images/local-vision-models-llava-ollama-2026-ollama-setup-flow-ko.svg',
        imageCaption:
          'Ollama 비전 모델 설정 파이프라인: Ollama 설치, gemma4:e4b 같은 비전 모델 다운로드, 프롬프트에 이미지 경로를 넣어 CLI로 실행하거나 localhost:11434의 HTTP API 호출, OCR·Q&A·이미지 설명을 위한 텍스트 출력 획득.',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: '활용 사례 1: OCR 및 문서 추출',
        content:
          '**VLM은 반구조화된 문서에서 전통적인 OCR보다 우수한 성능을 발휘합니다** — 청구서, 영수증, 계약서, 텍스트 자체만큼 레이아웃이 중요한 표. 전통적인 OCR(Tesseract)은 문자를 추출하지만, VLM은 문맥에서 그 문자들이 의미하는 바를 이해합니다.',
        items: [
          '**잘 작동하는 경우:** 스캔된 청구서, PDF 스크린샷, 인쇄체 손글씨 메모, 명확한 테두리가 있는 표, 명함.',
          '**잘 작동하지 않는 경우:** 필기체 손글씨, 150 DPI 미만의 스캔, 과도한 압축 JPEG, 겹친 텍스트.',
          '**OCR 최적 모델:** Qwen3-VL 8B와 Qwen3.5 9B (6~8 GB 급), Qwen3.8 27B (18 GB, 모델 카드 기준 OmniDocBench 1.5에서 91.1), 혼합 문서 유형에는 Gemma 4.',
          '**OCR 프롬프트 엔지니어링:** "줄바꿈을 유지하면서 이 문서의 모든 텍스트를 정확히 추출하십시오." 또는 "이 청구서의 내용을 다음 필드가 있는 JSON으로 반환하십시오: 공급업체, 날짜, 항목[], 합계."',
          '**전통적인 OCR 대비:** VLM은 더 느리지만 더 의미론적입니다. Tesseract는 깨끗한 문서의 순수한 텍스트 추출에 더 빠릅니다. 단순 일반 텍스트가 아닌 구조화된 데이터 추출이 필요할 때 VLM을 사용하십시오.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: '활용 사례 2: 이미지 질의응답',
        content:
          '**일반적인 장면 이해, 제품 설명, 시각적 질의응답에는 Gemma 4(8 GB에서는 E4B, 24 GB에서는 26B 또는 31B)가 권장 로컬 모델입니다.** 자연스럽고 상세한 설명을 생성하며 사진 내용에 대한 미묘한 질문도 처리합니다.',
        items: [
          '**장면 설명:** "이 사진에 무엇이 있습니까?" — 객체, 사람, 활동, 환경, 분위기.',
          '**제품 카탈로그 작성:** 프롬프트 템플릿으로 제품 사진 처리: "이 제품을 설명하십시오: 색상, 형태, 소재, 상태." 클라우드 API 없이 전자상거래 재고 관리에 유용.',
          '**접근성:** 이미지에 대한 대체 텍스트를 대규모로 생성합니다. 표준 제품 사진의 접근성 컴플라이언스에 충분한 정확도를 제공합니다.',
          '**최적 모델:** 일반 사진 질의응답에는 Gemma 4 12B 또는 26B A4B. 정확도보다 속도가 중요한 대량 처리에는 Qwen3.5 4B 또는 LLaVA 1.6 7B.',
          '**속도 고려사항:** 속도는 모델, GPU, 설명 길이에 따라 달라집니다 — 수천 건을 일괄 처리하기 전에 사용 중인 하드웨어에서 이미지 20장 샘플로 먼저 벤치마크하십시오.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: '활용 사례 3: 스크린샷 및 UI 분석',
        content:
          '**애플리케이션 스크린샷, 오류 메시지, 대시보드 분석에는 InternVL 2.5가 가장 강력한 로컬 모델입니다** — 훈련 데이터에 소프트웨어 UI, GitHub 스크린샷, 코드 실행 결과가 강조되어 있습니다.',
        items: [
          '**개발자 워크플로우:** 오류 메시지 스크린샷을 모델에 전송: "이 스크린샷에서 무엇이 잘못되었으며 어떻게 수정하겠습니까?"',
          '**버그 리포트 생성:** 구조화된 프롬프트로 스크린샷에서 버그 설명을 자동 생성합니다.',
          '**대시보드 모니터링:** 모니터링 대시보드 스크린샷에서 이상 징후 분석 — "이 Grafana 스크린샷에서 경고 수준에 있는 지표가 있습니까?"',
          '**접근성 테스트:** UI 변경 전/후 스크린샷을 비교하여 시각적 접근성 속성을 확인합니다.',
          '**최적 모델:** InternVL 2.5 8B (커뮤니티 빌드, UI에 강함), Gemma 4와 Qwen3-VL (Ollama 공식 지원, 에이전트 워크플로우용 도구 호출).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: '활용 사례 4: 차트 및 다이어그램 읽기',
        content:
          '**막대형, 선형 차트, 표에서 데이터를 추출하는 것은 가능하지만 신중한 프롬프팅이 필요합니다.** 모든 로컬 VLM은 사진 설명보다 차트 읽기에서 약합니다 — 항상 차트에서 추출한 숫자를 원본 데이터와 대조하여 확인하십시오.',
        items: [
          '**잘 작동하는 경우:** 축 레이블 읽기, 추세 파악, 막대의 상대적 높이 비교, 명확한 폰트가 있는 표 값 읽기.',
          '**신뢰할 수 없는 경우:** 연속형 차트에서의 정밀한 수치 추출 (예: "3분기 막대는 43.7 단위"), 명시적 레이블이 없는 파이 차트 백분율.',
          '**프롬프트 전략:** "이 선형 차트에 표시된 추세를 설명하십시오"가 "2026년 3월의 정확한 값은 무엇입니까?"보다 효과적입니다.',
          '**차트 최적 모델:** InternVL 2.5 (강력한 차트 이해), Gemma 4와 Qwen3-VL (명확한 레이블이 있는 차트에 우수).',
          '**제한 사항 참고:** 2026년의 어떤 로컬 VLM도 시각적으로 복잡한 차트에서 정밀한 숫자를 신뢰할 수 있게 추출하지 못합니다. 구조화된 차트 데이터가 필요하다면 가능한 경우 기본 데이터 소스에서 추출하십시오.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: '활용 사례 5: 동영상 프레임 분석',
        content:
          '**로컬 비전 모델은 개별 프레임을 처리하여 동영상을 분석할 수 있습니다** — ffmpeg으로 프레임을 추출하고, 비전 모델에 전송하여 분석한 다음, 텍스트 LLM으로 프레임 간 요약을 생성합니다. 실시간이 아님: 모델과 하드웨어에 따라 프레임당 0.5~3초를 예상하십시오.',
        items: [
          '**프레임 추출:** ffmpeg으로 1fps 추출: `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**프레임별 분석:** 일관된 프롬프트로 각 프레임을 비전 모델에 실행 (예: "이 프레임에서 무슨 일이 일어나고 있는지 한 문장으로 설명하십시오").',
          '**프레임 간 요약:** 모든 프레임 설명을 수집하여 요약 프롬프트와 함께 텍스트 LLM에 전달합니다.',
          '**활용 사례:** 보안 카메라 검토 (비정상적인 활동이 있는 프레임 표시), 강의 녹화 분석 (슬라이드별 노트 생성), 제조 품질 검사 (결함이 나타나는 프레임 표시).',
          '**동영상 프레임 최적 모델:** 품질에는 Gemma 4 또는 Qwen3.8 (둘 다 동영상을 프레임으로 기본 처리), 속도에는 Qwen3.5 4B 또는 LLaVA 1.6 7B (더 높은 프레임 처리량).',
          '**속도 현실:** 1fps 추출과 프레임당 약 1~3초 추론 기준으로, 10분 동영상(600프레임)의 처리에는 모델과 GPU에 따라 대략 10~30분이 소요됩니다.',
        ],
        codeBlock: `import base64
import subprocess
import os
import requests

def extract_frames(video_path: str, output_dir: str, fps: int = 1) -> list[str]:
    os.makedirs(output_dir, exist_ok=True)
    subprocess.run([
        "ffmpeg", "-i", video_path,
        "-vf", f"fps={fps}",
        f"{output_dir}/frame_%04d.jpg",
        "-y"
    ], check=True)
    return sorted([
        os.path.join(output_dir, f)
        for f in os.listdir(output_dir)
        if f.endswith(".jpg")
    ])

def analyze_frame(image_path: str, model: str = "gemma4:e4b") -> str:
    with open(image_path, "rb") as f:
        image_b64 = base64.b64encode(f.read()).decode("utf-8")
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": model,
            "prompt": "이 프레임에서 무슨 일이 일어나고 있는지 한 문장으로 설명하십시오.",
            "images": [image_b64],
            "stream": False,
        },
    )
    return response.json()["response"]

frames = extract_frames("강의.mp4", "frames/", fps=1)
descriptions = [analyze_frame(f) for f in frames]
print("\n".join(f"[{i+1}초] {d}" for i, d in enumerate(descriptions)))`,
        codeLanguage: 'python',
      },
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM 및 실제 성능 확인',
        content:
          '로컬 비전 모델은 기본 LLM에 시각 인코더를 추가하여 텍스트 전용 모델에 비해 VRAM 요구 사항과 추론 시간이 모두 증가합니다.',
        columns: ['모델', 'VRAM (Q4)', '토큰/초 (RTX 4070)', '토큰/초 (M5 Pro 36GB)', '프로덕션 적합?'],
        rows: [
          {
            '모델': 'Moondream 2 (1.8B)',
            'VRAM (Q4)': '~2 GB',
            '토큰/초 (RTX 4070)': '~25–35',
            '토큰/초 (M5 Pro 36GB)': '~30–40',
            '프로덕션 적합?': '예 — 단순 작업에',
          },
          {
            '모델': 'LLaVA 1.6 7B',
            'VRAM (Q4)': '~6 GB',
            '토큰/초 (RTX 4070)': '~15–20',
            '토큰/초 (M5 Pro 36GB)': '~18–25',
            '프로덕션 적합?': '예 — 범용',
          },
          {
            '모델': 'MiniCPM-V (8B)',
            'VRAM (Q4)': '~6 GB',
            '토큰/초 (RTX 4070)': '~12–18',
            '토큰/초 (M5 Pro 36GB)': '~15–20',
            '프로덕션 적합?': '예 — OCR 및 문서',
          },
          {
            '모델': 'Llama 3.2 Vision 11B',
            'VRAM (Q4)': '~8 GB',
            '토큰/초 (RTX 4070)': '~10–14',
            '토큰/초 (M5 Pro 36GB)': '~12–16',
            '프로덕션 적합?': 'Ollama 로드 문제 먼저 확인',
          },
          {
            '모델': 'LLaVA 1.6 13B',
            'VRAM (Q4)': '~10 GB',
            '토큰/초 (RTX 4070)': '~8–12',
            '토큰/초 (M5 Pro 36GB)': '~10–14',
            '프로덕션 적합?': '예 — 12 GB GPU에서',
          },
          {
            '모델': 'Llama 3.2 Vision 90B',
            'VRAM (Q4)': '~64 GB',
            '토큰/초 (RTX 4070)': 'N/A (멀티 GPU 또는 M-Max 필요)',
            '토큰/초 (M5 Pro 36GB)': 'N/A (M5 Max 128GB+ 필요)',
            '프로덕션 적합?': '고급 Apple Silicon에서만',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: '초당 토큰 범위는 대략적인 추정치이며 새로 측정한 값이 아닙니다. Gemma 4, Qwen3.5, Qwen3.8에 대해서는 다시 측정하지 않았습니다. `ollama run <model> --verbose`로 사용 중인 하드웨어에서 직접 벤치마크하면 평가 속도(eval rate)가 출력됩니다.',
          },
          {
            type: 'note',
            text: '비전 모델의 토큰 생성 속도는 같은 크기의 텍스트 전용 모델보다 느립니다. 시각 인코더가 첫 번째 이미지 토큰에서 상당한 계산 오버헤드를 추가하기 때문입니다. 이후 텍스트 토큰은 거의 정상 속도로 생성됩니다.',
          },
          {
            type: 'note',
            text: 'Apple Silicon의 통합 메모리는 전용 GPU VRAM에 맞지 않는 더 큰 모델(128 GB Mac에서 Llama 3.2 Vision 90B는 55 GB, Qwen3.5 122B는 81 GB)을 실행할 수 있게 합니다. 속도는 동급 NVIDIA GPU보다 약간 낮지만 VRAM 제한이 없습니다.',
          },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: '로컬 비전 모델 vs GPT-5.5 Vision 비교',
        content:
          '로컬 VLM은 구조화된 문서에서 격차를 크게 좁혔지만, 복잡하고 모호한 작업에서는 여전히 GPT-5.5 Vision에 뒤처집니다.',
        items: [
          '**구조화된 문서 (청구서, 양식):** 로컬 모델이 GPT-5.5 품질의 80~90% — 깨끗하고 형식이 잘 된 문서에서 프로덕션 사용에 충분합니다.',
          '**복잡한 장면, 모호한 이미지:** 로컬 모델이 GPT-5.5의 50~70% — 비정상적인 맥락, 조명 또는 모호한 내용이 있는 이미지에서 눈에 띄는 품질 격차.',
          '**손글씨 인식:** 로컬 모델은 특히 필기체에서 크게 약합니다. GPT-5.5 Vision은 손글씨 처리가 실질적으로 더 우수합니다.',
          '**차트 데이터 추출:** 로컬 모델과 GPT-5.5 모두에서 신뢰할 수 없지만, GPT-5.5는 정확한 수치에서 더 정확합니다.',
          '**비용:** GPT-5.5 Vision이 이미지당 $0.01~0.03 vs 로컬에서 $0. 월 10,000개 이미지 = 로컬 모델로 $100~300 절약.',
          '**개인정보 보호:** 로컬 모델은 기본적으로 기기 내에서 이미지를 처리하므로, 클라우드 기능이나 연결형 도구를 켜지 않는 한 이미지가 클라우드 API로 전송되지 않습니다. GPT-5.5는 이미지를 OpenAI 서버로 전송합니다.',
          '**속도:** 로컬 모델은 10~20 토큰/초 vs GPT-5.5의 30~80 토큰/초이지만, 배치 처리 시 로컬은 네트워크 지연이 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '깨끗한 입력으로 청구서와 양식을 프로덕션에서 처리하는 경우, 로컬 VLM(Gemma 4, Qwen3-VL 8B, Qwen3.8 27B)은 비용 없이 GPT-5.5 Vision을 대체할 수 있습니다. 손글씨, 복잡한 장면 분석, 모호한 내용이 포함된 모든 것에는 GPT-5.5가 여전히 우수합니다.',
          },
        ],
      },
      llavaDeepDive: {
        id: 'llava-deep-dive',
        title: 'LLaVA 심층 분석',
        content:
          '**LLaVA(Large Language and Vision Assistant)는 기본적인 오픈소스 VLM 아키텍처입니다.** 2023년 위스콘신-매디슨 대학교와 Microsoft Research가 출시하여 대부분의 현대 로컬 VLM이 따르는 CLIP 인코더 + LLM 디코더 패턴을 확립했습니다.',
        items: [
          '**아키텍처:** CLIP ViT-L/14 시각 인코더 + Llama-2 또는 Mistral 텍스트 디코더, 단순한 선형 프로젝션 레이어로 연결.',
          '**LLaVA 1.5 vs 1.6:** 버전 1.6(2024년 초 출시)은 동적 패치를 통해 고해상도 입력 지원을 추가하여 OCR 정확도와 차트 읽기가 크게 향상되었습니다.',
          '**훈련:** LLaVA-Instruct-150K에서 지시 튜닝 — 이미지 설명과 객체 감지 주석에서 생성된 시각적 대화 데이터셋.',
          '**강점:** 광범위한 일반 지식, 잘 문서화됨, 대규모 커뮤니티, 광범위한 Ollama 통합.',
          '**약점:** Qwen3-VL 및 MiniCPM-V보다 약한 OCR, InternVL 2.5보다 약한 UI 분석, 전반적으로 Gemma 4와 Qwen3 계열에 뒤처짐.',
          '**여전히 권장되는 이유:** LLaVA 1.6은 모든 로컬 VLM 중에서 가장 큰 커뮤니티, 가장 많은 튜토리얼, 가장 많은 프롬프트 예제를 보유하고 있습니다. 문제가 있을 경우 도움을 찾기가 더 쉽습니다.',
          '**전체 리뷰:** [LLaVA 리뷰(2026)](/ko/power-local-llm/llava-review) — Apache-2.0과 기본 모델 라이선스의 미묘한 차이, 실제 Ollama 명령어를 다루는 PromptQuorum의 전용 리뷰.',
        ],
      },
      qwenVlDeepDive: {
        id: 'qwen-vl-deep-dive',
        title: 'Qwen3-VL, Qwen3.5, Qwen3.8 — 최고의 다국어 OCR 및 문서 성능',
        content:
          '**Qwen 계열은 2026년 문서 OCR과 다국어 텍스트에서 가장 강력한 오픈 옵션입니다.** Qwen3-VL(2B~235B)은 전용 비전 라인이고, Qwen3.5(0.8B~122B)는 비전을 기본 모델에 통합했으며, Qwen3.8 27B(2026년 8월, Apache 2.0)는 가장 최신으로 OmniDocBench 1.5에서 91.1을 기록했다고 보고되었습니다.',
        items: [
          '**아키텍처:** 최대 4096×4096의 동적 해상도 지원 — LLaVA 1.6(672×672)이나 Llama 3.2 Vision(1120×1120)보다 크게 높습니다. 이를 통해 다운샘플링 없이 고DPI 스캔을 읽을 수 있습니다.',
          '**다국어 OCR:** 중국어, 일본어, 한국어, 영어에서 동급 최고 성능. 훈련 데이터에 대규모 다국어 문서 코퍼스가 포함되어 영어 이외의 문서에서 LLaVA 및 Llama 3.2 Vision 대비 상당한 이점을 제공합니다.',
          '**크기 선택:** Qwen3-VL 8B는 6.1 GB 다운로드로 8 GB 그래픽카드에 적합하고, Qwen3.5 9B는 6.6–7.6 GB, Qwen3.8 27B는 18 GB로 24 GB 카드가 필요하며, Qwen3-VL 32B는 21 GB입니다. Ollama에는 Qwen3-VL 72B 변형이 없습니다.',
          '**Ollama 설치:** `ollama pull qwen3-vl:8b`, `ollama pull qwen3.5:9b` 또는 `ollama pull qwen3.8` — 모두 Ollama 모델 라이브러리에서 사용 가능.',
          '**다중 이미지 지원:** 요청당 최대 8개 이미지 허용 — 이 비교의 모든 모델 중 가장 높은 다중 이미지 용량.',
          '**모델 페이지:** [Qwen3-VL on Ollama](https://ollama.com/library/qwen3-vl), [Qwen3.8-27B on Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '비전 모델 선택 방법',
        content:
          '적절한 로컬 비전 모델을 선택하기 위한 VRAM 기반 의사결정 트리:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '먼저 VRAM(2→4→8→24 GB)을 기준으로 모델을 선택한 다음 활용 사례(OCR, UI, 일반 질의응답 또는 최고 품질)에 따라 세분화하십시오.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM 4 GB 미만: Qwen3.5 2B 또는 Moondream. 8 GB: 사진에는 Gemma 4 E4B, 문서에는 Qwen3-VL 8B. 24 GB: Gemma 4 26B/31B 또는 Qwen3.8 27B. 64+ GB: Qwen3.5 122B.',
          },
        ],
        items: [
          '**VRAM 4 GB 미만:** Qwen3.5 2B (2.7–3.1 GB), Qwen3-VL 2B (1.9 GB) 또는 Moondream 2 (1.7 GB)가 실용적인 옵션입니다. PaliGemma 2 (3B)와 SmolVLM (2.2B)은 커뮤니티 빌드 대안입니다. 빽빽한 텍스트 OCR에는 적합하지 않습니다.',
          '**VRAM 6~8 GB:** 일반 사진 질의응답에는 Gemma 4 E4B, 문서 OCR과 다국어 텍스트에는 Qwen3-VL 8B 또는 Qwen3.5 9B, 커뮤니티 지원이 중요하다면 LLaVA 1.6 7B.',
          '**VRAM 12~16 GB:** Gemma 4 12B(다운로드 7.7–8.0 GB)가 명확한 권장 사항 — 크기 대비 강력한 비전 점수에 오디오 입력과 256K 컨텍스트 윈도우를 갖췄습니다. LLaVA 1.6 13B와 InternVL 2.5 8B(UI 및 코드 스크린샷)도 사용할 수 있습니다.',
          '**VRAM 24 GB:** Gemma 4 26B A4B (16–19 GB), Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB) 또는 Qwen3-VL 32B (21 GB) — 클라우드 수준 비전 품질에 가장 가까운 로컬 옵션.',
          '**통합 메모리 64+ GB (Apple M-Max/Ultra, 멀티 GPU):** 가장 큰 로컬 모델인 Qwen3.5 122B (81 GB) 또는 Llama 3.2 Vision 90B (55 GB). 둘 다 대용량 메모리 하드웨어가 필요하며 24 GB 급 모델보다 토큰당 속도가 느립니다.',
          '**항상 숫자를 확인하십시오:** 모델에 관계없이 차트나 표에서 추출한 수치는 원본 데이터와 대조하여 확인하십시오. 로컬 VLM은 시각적 차트에서 정확한 수치를 환각합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
          {
            q: 'llama3.2-vision이 "unknown model architecture: mllama" 오류로 실패하는 이유는 무엇입니까?',
            a: '최근 Ollama 버전에서 llama3.2-vision 사용 시 이 오류가 보고되고 있습니다(GitHub 이슈 #16490, #16547, 2026년 중반에 등록되었으며 두 번째 이슈는 중복으로 닫혔고 확인된 해결책은 없습니다). 해당 보고에서는 Ollama를 업데이트하거나 모델을 다시 받아도 해결되지 않았습니다. Llama 3.2 Vision을 꼭 써야 하는 경우가 아니라면 Ollama 라이브러리에서 활발히 관리되는 Gemma 4 또는 Qwen3-VL로 전환하십시오. 꼭 써야 한다면 여전히 로드되는 Ollama 버전으로 고정하십시오.',
          },
          {
            q: '3B 파라미터 미만에서 가장 좋은 소형 비전-언어 모델은 무엇입니까?',
            a: 'Qwen3.5 2B(다운로드 2.7–3.1 GB)와 Qwen3-VL 2B(1.9 GB)가 Ollama에서 가장 강력한 소형 옵션이며, Moondream 2(1.8B, 1.7 GB)가 가장 가볍습니다. Gemma 4 E2B(유효 파라미터 2.3B, 다운로드 4.6–7.5 GB)는 오디오 입력을 추가로 지원합니다. 8B 급보다는 OCR과 복잡한 장면 이해가 약할 것으로 예상하십시오.',
          },
          {
            q: '실시간 카메라와 마이크 입력을 처리할 수 있는 로컬 모델은 무엇입니까?',
            a: 'Gemma 4 E2B, E4B, 12B는 이미지와 오디오를 모두 입력받으므로 보고 듣는 로컬 어시스턴트의 자연스러운 기반이 됩니다. 다만 모델 자체가 실시간 시스템은 아닙니다. 캡처 루프(프레임 수집, 오디오 분할), 음성 인식 또는 오디오 입력 경로, 음성 응답을 위한 음성 합성(TTS) 단계가 여전히 필요합니다. 구축하기 전에 사용 중인 런타임 버전이 실제로 모델에 오디오를 전달하는지 확인하십시오.',
          },
          {
            q: '스크린샷과 문서에서 신뢰할 수 있는 구조화된 출력을 얻으려면 어떻게 해야 합니까?',
            a: 'Ollama의 `format` 필드에 JSON 스키마를 전달하고, temperature를 0으로 설정하며, 이미지에 보이는 필드만 요청하십시오. 이렇게 하면 응답이 지정한 키를 가진 유효한 JSON으로 제한되지만 값이 정확해지는 것은 아니므로, 숫자와 날짜를 원본과 대조하여 확인하고 실패를 기록하십시오. 8B 이상의 큰 모델이 2B 모델보다 스키마를 더 일관되게 따릅니다.',
          },
          {
            q: '완전히 기기 내에서 실행되는 최고의 GPT-4V 대안은 무엇입니까?',
            a: '24 GB GPU에서는 Gemma 4 31B (19–20 GB), Qwen3.8 27B (18 GB), Qwen3-VL 32B (21 GB)가 가장 근접하며, 8 GB 환경에서는 Gemma 4 E4B와 Qwen3-VL 8B가 적합합니다. 모두 Ollama를 통해 오프라인으로 실행됩니다. 깨끗한 문서와 사진에서는 클라우드 모델에 필적하지만 손글씨, 모호한 장면, 복잡한 인포그래픽에서는 뒤처집니다.',
          },
          {
            q: 'Ollama 없이 LLaVA 또는 Llama 3.2 Vision을 사용할 수 있습니까?',
            a: '예. llama.cpp(비전 지원 포함), transformers 라이브러리(적절한 모델 카드 포함), 또는 LM Studio(비전 모델용 GUI 포함)를 사용하여 LLaVA 및 Llama 3.2 Vision을 직접 실행할 수 있습니다. Ollama는 단순성 때문에 권장됩니다 — 모델 다운로드, 양자화 선택, API 호스팅을 자동으로 관리합니다.',
          },
          {
            q: 'Llama 3.2 Vision은 PDF 직접 입력을 지원합니까?',
            a: '어떤 로컬 VLM도 PDF를 직접 받지 않습니다. 먼저 PDF 페이지를 이미지로 변환(pdf2image, pypdfium2 등 사용)한 다음 각 페이지를 별도의 이미지 요청으로 전송해야 합니다. 10페이지 PDF의 경우 10개의 별도 이미지 쿼리를 전송하고 결과를 연결하거나 요약합니다.',
          },
          {
            q: '로컬 비전 모델은 GPT-5.5 Vision과 어떻게 비교됩니까?',
            a: 'GPT-5.5 Vision은 모호한 장면, 손글씨, 복잡한 인포그래픽, 세계 지식이 필요한 작업에서 여전히 크게 우수합니다. Gemma 4와 Qwen3-VL은 구조화된 문서(청구서, 양식, 선명한 사진)에서 GPT-5.5에 근접하지만 미묘하거나 모호한 이미지에서는 뒤처집니다. 비용, 개인정보 보호, 속도 분석은 위의 전체 비교를 참조하십시오.',
          },
          {
            q: '로컬 VLM은 어떤 이미지 해상도를 지원합니까?',
            a: 'LLaVA 1.6은 최대 672×672의 실효 해상도를 지원합니다(동적 패치 포함). MiniCPM-V는 최대 1792×1792를 지원합니다 — 고DPI 문서 스캔에서 LLaVA를 능가하는 이유 중 하나입니다. Llama 3.2 Vision은 최대 1120×1120을 지원합니다. Gemma 4와 Qwen3-VL은 가변 종횡비와 해상도를 허용합니다. 최상의 OCR 결과를 위해 문서 이미지를 150+ DPI로 전송하십시오.',
          },
          {
            q: '자체 이미지로 로컬 비전 모델을 파인튜닝할 수 있습니까?',
            a: '예, 하지만 VLM 파인튜닝은 텍스트 전용 LLM 파인튜닝보다 더 많은 리소스가 필요합니다 — 이미지와 훈련 텍스트 모두 전체 포워드 패스를 통해 처리해야 합니다. LLaVA 파인튜닝은 원본 훈련 코드베이스를 사용하여 잘 문서화되어 있습니다. MiniCPM-V는 Hugging Face의 공식 훈련 스크립트를 통해 파인튜닝을 지원합니다. 대부분의 활용 사례에서는 파인튜닝 없이 프롬프트 엔지니어링만으로 충분합니다.',
          },
          {
            q: 'VRAM 8 GB에 최적인 로컬 비전 모델은 무엇입니까?',
            a: '범용 사용에는 Gemma 4 E4B(다운로드 6.6–9.5 GB), 문서 OCR이나 다국어 텍스트가 주요 요구 사항이라면 Qwen3-VL 8B(6.1 GB). 두 모델 모두 단일 pull 명령어로 Ollama에서 사용 가능합니다. Qwen3.5 9B(6.6–7.6 GB)가 세 번째 옵션입니다.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — OCR에는 어느 것이 더 낫습니까?',
            a: 'MiniCPM-V는 특히 빽빽한 표와 고DPI 스캔에서 LLaVA보다 문서 OCR이 더 정확하지만, Qwen3-VL 8B는 둘 중 어느 쪽보다 강력한 OCR 선택입니다. LLaVA 1.6은 더 잘 문서화되어 있고 더 많은 커뮤니티 지원이 있습니다. 참고로 Ollama의 minicpm-v 페이지는 여전히 MiniCPM-V 2.6(5.5 GB)을 설명하며, 더 최신 MiniCPM-V 릴리스는 Hugging Face 또는 llama.cpp 빌드가 필요합니다.',
          },
          {
            q: '로컬 비전 모델이 손글씨를 읽을 수 있습니까?',
            a: '인쇄체 손글씨(블록 문자): 예, Gemma 4, Qwen3-VL, MiniCPM-V에서 중간 수준의 정확도로 읽을 수 있습니다. 필기체: 모든 로컬 모델에서 신뢰할 수 없습니다. GPT-5.5 Vision은 필기체 처리가 크게 우수합니다. 프로덕션에서 필기체 OCR은 클라우드 API를 여전히 권장합니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[Gemma 4 model card on Hugging Face](https://huggingface.co/google/gemma-4-31B-it) — Google의 Apache 2.0 라이선스, 크기별 지원 모달리티, MMMU Pro 결과.',
          '[Gemma 4 on Ollama](https://ollama.com/library/gemma4) — 태그, 다운로드 크기, 컨텍스트 윈도우.',
          '[Qwen3.8-27B on Hugging Face](https://huggingface.co/Qwen/Qwen3.8-27B) — Apache 2.0 라이선스, 262K 컨텍스트, OmniDocBench 1.5 결과.',
          '[Qwen3.5 on Ollama](https://ollama.com/library/qwen3.5) 및 [Qwen3-VL on Ollama](https://ollama.com/library/qwen3-vl) — 크기와 다운로드 크기.',
          '[Llama 3.2 Vision on Ollama](https://ollama.com/library/llama3.2-vision) 및 [Ollama issue #16547](https://github.com/ollama/ollama/issues/16547) — 라이브러리 목록과 보고된 mllama 로드 오류.',
          '[LLaVA 프로젝트 페이지](https://llava-vl.github.io) — LLaVA 1.5 및 1.6 모델 카드, 아키텍처 세부 사항, 훈련 데이터셋 설명.',
          '[MiniCPM-V on Ollama](https://ollama.com/library/minicpm-v) 및 [OpenBMB on Hugging Face](https://huggingface.co/openbmb) — 모델 카드와 OCR 벤치마크.',
          '[Moondream on Ollama](https://ollama.com/library/moondream) 및 [Moondream on GitHub](https://github.com/vikhyat/moondream) — 모델 다운로드와 추론 스크립트.',
          '[InternVL 2.5 on Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab 모델 카드, 문서 및 UI 작업 벤치마크 점수.',
          '[Ollama 문서](https://ollama.com) — 비전 모델 지원, 구조화된 출력, API 참조, 모델 라이브러리.',
          '[PaliGemma 2 on Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Google PaliGemma 2 3B 모델 카드.',
          '[SmolVLM on Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace SmolVLM 모델 카드 및 추론 지침.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[Ollama 모델 중 비전을 지원하는 것은?](/ko/prompt-bites/which-ollama-models-support-vision) — 이미지를 입력받는 Ollama 라이브러리 모델과 VRAM 사양에 대한 빠른 답변.',
          '[Ollama 비전 모델(2026)](/ko/power-local-llm/ollama-vision-models-review) — Ollama로 비전 모델을 실행하는 실용적이고 집중적인 가이드: 실제 CLI/API 문법과 라이브러리에 실제로 있는 모델.',
          '[카메라와 드론의 VLM 2026](/ko/power-local-llm/vlm-video-analytics-drones-edge) -- 데스크톱 VLM 기초는 여기에서 다룹니다. 임베디드 카메라·드론 배포는 이 엣지 전용 가이드를 참고하세요.',
          '[로컬 멀티모달 AI 파이프라인 2026](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 비전 모델을 STT 및 TTS와 결합하여 완전한 로컬 멀티모달 스택 구성.',
          '[로컬 음성 인식 2026: Whisper.cpp vs faster-whisper](/ko/power-local-llm/local-whisper-stt-comparison) — 비전 출력을 보완하기 위해 음성 입력 추가.',
          '[로컬 TTS 및 음성 복제 2026](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — VLM 응답을 소리내어 읽기 위한 음성 출력 추가.',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 필수 조건: Ollama 설정 및 설치.',
          '[로컬 LLM 하드웨어 가이드](/ko/local-llms/local-llm-hardware-guide) — 비전 모델 추론을 위한 VRAM 및 RAM 요구 사항.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '최고의 로컬 비전 모델 2026: Gemma 4, Qwen3-VL, LLaVA 및 Ollama 멀티모달 설정 가이드',
      description: '2026년 Ollama용 최고의 로컬 VLM: Gemma 4, Qwen3.5, Qwen3-VL, MiniCPM-V, Moondream. 모델별 VRAM, OCR 추천, 설정 방법.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-vision-models-llava-ollama-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-14',
      dateModified: '2026-10-20',
      author: { '@type': 'Person', name: 'Hans Kuepper', sameAs: 'https://www.linkedin.com/in/hanskuepper/' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
      'proficiencyLevel': 'Intermediate',
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: '[www.promptquorum.com/ko](https://www.promptquorum.com/ko)' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: '[www.promptquorum.com/ko/power-local-llm](https://www.promptquorum.com/ko/power-local-llm)' },
        { '@type': 'ListItem', position: 3, name: '로컬 비전 모델 2026', item: '[www.promptquorum.com/ko/power-local-llm/local-vision-models-llava-ollama-2026](https://www.promptquorum.com/ko/power-local-llm/local-vision-models-llava-ollama-2026)' },
      ],
    },
  },
}
