// Power Local LLM — Local Vision Models 2026: LLaVA, Llama 3.2 Vision, and Ollama Multimodal Setup
// Slug: local-vision-models-llava-ollama-2026
// Category: Voice, Speech & Multimodal

import type { Language } from '@/lib/blog/blogContent'
import type { LLMArticle } from '@/lib/local-llms/types'

export const article: Partial<Record<Language, LLMArticle>> = {
  en: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Local Vision Models 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL & Ollama Multimodal Setup',
    seoTitle: 'Local Vision Models 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL & Ollama Setup',
    intro:
      'Vision-language models (VLMs) accept image input alongside text and return text output — enabling document OCR, image Q&A, screenshot analysis, and chart reading locally. In 2026, the easiest path to running VLMs is through Ollama: pull a model, send an image, get a description or answer. This guide compares the leading local vision models (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5), covers Ollama setup step-by-step, and maps each model to its best use case based on VRAM requirements and quality benchmarks.',
    metaDescription:
      'Run vision-language models locally with Ollama in 2026: LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6. Document OCR, image Q&A, screenshot analysis — all offline with VRAM requirements and quality benchmarks.',
    twitterDescription:
      'Local vision models 2026: LLaVA, Llama 3.2 Vision, MiniCPM-V via Ollama. Image Q&A, OCR, screenshot analysis — 100% offline. VRAM guide and setup steps.',
    audience:
      'Developers needing local image understanding without cloud APIs — for document processing, screenshot analysis, accessibility tools, inventory systems, or privacy-sensitive image workflows.',
    readTime: '11 min read',
    educationalLevel: 'Intermediate',
    primaryTerm: 'local vision model',
    targetKeywords: [
      'local vision model 2026',
      'LLaVA Ollama setup',
      'run vision model locally',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen2-vl local',
      'qwen2-vl ollama',
      'best local vision model',
      'offline image understanding',
      'local multimodal model',
      'ollama vision model',
    ],
    current_models_mentioned: [
      'LLaVA 1.6 (7B and 13B)',
      'Llama 3.2 Vision 11B',
      'Llama 3.2 Vision 90B',
      'MiniCPM-V 2.6 (8B)',
      'Moondream 2 (1.9B)',
      'Qwen2-VL 7B',
      'Qwen2-VL 72B',
      'InternVL 2.5 (8B)',
      'PaliGemma 2 3B',
      'SmolVLM 2.2B',
    ],
    current_hardware_mentioned: [
      '2 GB VRAM',
      '6 GB VRAM',
      '8 GB VRAM',
      '16 GB VRAM',
      '64 GB VRAM',
      'Apple M-series (unified memory)',
    ],
    leadAnswerBlock:
      '**For most developers with 6–8 GB of VRAM, MiniCPM-V 2.6 (8B) or LLaVA 1.6 7B via Ollama is the recommended starting point in 2026.** Both run in ~6 GB VRAM, support document OCR, image Q&A, and screenshot analysis, and are available as single Ollama pull commands. For the best overall quality with 8–16 GB VRAM, Llama 3.2 Vision 11B is the best local vision model and strongest local VLM — especially for document and photo understanding. With only 2 GB VRAM available, Moondream 2 (1.9B) is the only practical choice but has limited understanding of complex scenes. All models run 100% offline once downloaded; no API key or cloud account required.',
    quickAnswerTop: {
      en: {
        question: 'What are the best local vision models to run with Ollama in 2026?',
        answer:
          'The best local vision model depends on your VRAM and use case. With 6–8 GB VRAM, MiniCPM-V 2.6 gives the best balance of OCR accuracy and general image understanding. With 8–16 GB VRAM, Llama 3.2 Vision 11B is the top choice for general visual Q&A and document analysis. With 2 GB VRAM, Moondream 2 is the only option — fast but limited in capability. InternVL 2.5 is the best for UI screenshots and charts but has less Ollama integration than the others.',
        bullets: [
          'Under 4 GB VRAM → Moondream 2 (1.9B): fast, limited understanding of complex images. Also: PaliGemma 2 3B (~3 GB) and SmolVLM 2.2B (~2 GB).',
          '6 GB VRAM → MiniCPM-V 2.6, LLaVA 1.6 7B, or Qwen2-VL 7B (best for multilingual OCR): best balance of quality and hardware fit.',
          '8–16 GB VRAM → Llama 3.2 Vision 11B: top local VLM for general photos and documents.',
          '64+ GB (or Apple M-series) → Llama 3.2 Vision 90B or Qwen2-VL 72B: best local quality, near-cloud performance.',
          'Setup: `ollama pull llama3.2-vision` then `ollama run llama3.2-vision "Describe this" --image photo.jpg`.',
          'Best for OCR: Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 — strong on text extraction from documents.',
          'Best for UI / screenshots: InternVL 2.5 — trained specifically on code and UI screenshots.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'How Local Vision Models Compare to GPT-4o Vision', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA Deep Dive', anchor: '#llava-deep-dive' },
      { label: 'Qwen2-VL — Best Multilingual and OCR Performance', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B is the best local vision model for most developers with 8–16 GB VRAM.** It handles photos, documents, and mixed content with the best accuracy in its class and is available directly from Ollama.',
          '**MiniCPM-V 2.6 (8B) is the top choice for document OCR at 6 GB VRAM.** Its training data includes high-resolution document scans, making it more accurate than LLaVA on tables, invoices, and dense text.',
          '**LLaVA 1.6 7B is the most documented and community-tested local VLM.** It is the safest general-purpose choice if you need extensive examples, tutorials, and troubleshooting resources.',
          '**Moondream 2 (1.9B) is the only practical option under 4 GB VRAM.** Fast and small, but it struggles with complex scenes, dense text, and precise chart reading.',
          '**InternVL 2.5 (8B) is the strongest for code screenshots and UI analysis.** Its training included GitHub screenshots, UI mockups, and code execution outputs — the others have weaker performance here.',
          '**All models are available via Ollama with a single `pull` command.** No model conversion, quantization, or Python setup required. CLI and HTTP API work out of the box.',
          '**None of these models approach GPT-4o Vision quality.** Local VLMs in 2026 are a strong tier-2 option — excellent for structured documents and clear photos, weaker on ambiguous scenes, handwriting, and complex infographics.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Quick Facts',
        items: [
          '**What VLMs do:** Accept image + text input → produce text output. Not image generators — these are image *understanders*.',
          '**Ollama support:** All models in this comparison have official or community Ollama integration as of May 2026.',
          '**Smallest usable model:** Moondream 2 at 1.9B parameters, ~2 GB VRAM.',
          '**Largest practical local model:** Llama 3.2 Vision 90B at ~64 GB unified memory (Apple M-series or multi-GPU).',
          '**Image input format:** JPEG, PNG, WebP accepted. Max resolution varies by model (typically 1024×1024 to 4096×4096).',
          '**OCR strength:** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          'Comparison of the five most capable local vision models available via Ollama or direct inference in May 2026. VRAM figures for 4-bit quantized (Q4) variants unless noted.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'For 6–8 GB VRAM: MiniCPM-V 2.6 for document OCR, Llama 3.2 Vision 11B for general image Q&A — both run locally via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Think of Moondream as the lightweight option that fits anywhere but understands less; LLaVA as the safe general choice; MiniCPM-V as the OCR specialist; Llama 3.2 Vision as the best overall; InternVL as the UI/code screenshot expert.',
          },
        ],
        columns: ['Model', 'Parameters', 'VRAM (Q4)', 'Image Types', 'Quality', 'Via Ollama?'],
        rows: [
          {
            'Model': 'Moondream 2',
            'Parameters': '1.9B',
            'VRAM (Q4)': '~2 GB',
            'Image Types': 'Simple photos',
            'Quality': 'Basic',
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
            'Model': 'LLaVA 1.6 13B',
            'Parameters': '13B',
            'VRAM (Q4)': '~10 GB',
            'Image Types': 'Photos, docs, charts',
            'Quality': 'Very good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'MiniCPM-V 2.6',
            'Parameters': '8B',
            'VRAM (Q4)': '~6 GB',
            'Image Types': 'Photos, docs, OCR',
            'Quality': 'Very good',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Llama 3.2 Vision 11B',
            'Parameters': '11B',
            'VRAM (Q4)': '~8 GB',
            'Image Types': 'Photos, docs',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Llama 3.2 Vision 90B',
            'Parameters': '90B',
            'VRAM (Q4)': '~64 GB',
            'Image Types': 'Photos, docs, complex',
            'Quality': 'Best local',
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
            'Model': 'Qwen2-VL 7B',
            'Parameters': '7B',
            'VRAM (Q4)': '~6 GB',
            'Image Types': 'Photos, docs, OCR, multilingual',
            'Quality': 'Excellent',
            'Via Ollama?': 'Yes',
          },
          {
            'Model': 'Qwen2-VL 72B',
            'Parameters': '72B',
            'VRAM (Q4)': '~48 GB',
            'Image Types': 'Photos, docs, complex',
            'Quality': 'Best (open-source)',
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
            'Model': 'SmolVLM 2.2B',
            'Parameters': '2.2B',
            'VRAM (Q4)': '~2 GB',
            'Image Types': 'Simple photos, captions',
            'Quality': 'Basic+',
            'Via Ollama?': 'Community',
          },
        ],
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
          { 'Model': 'MiniCPM-V 2.6', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
          { 'Model': 'Qwen2-VL 7B', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
          { 'Model': 'Llama 3.2 11B', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
          { 'Model': 'GPT-4o Vision', 'Vendor': '✓', 'Date': '✓', 'Total': '✓', 'Tax': '✓', 'Line Items': '✓', 'Score': '5/5' },
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
        columns: ['Feature', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Feature': 'Multi-image input',
            'Moondream': 'No',
            'LLaVA 7B': 'No',
            'MiniCPM-V': 'Yes (up to 4)',
            'Qwen2-VL': 'Yes (up to 8)',
            'LLaVA 13B': 'No',
            'Llama 3.2 Vision': 'Yes (multi-page)',
            'InternVL': 'Yes',
          },
        ],
        items: [
          'MiniCPM-V 2.6 accepts up to 4 images per prompt; Qwen2-VL handles up to 8. LLaVA and Moondream accept only single images per request.',
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
          '**Step 2 — Pull a vision model:** `ollama pull llama3.2-vision` (11B, ~8 GB download) or `ollama pull moondream` (1.9B, ~2 GB) for low-VRAM setups.',
          '**Step 3 — Transcribe from CLI:** `ollama run llama3.2-vision "What is in this image?" --image /path/to/photo.jpg`',
          '**Step 4 — Use the HTTP API:** POST to `http://localhost:11434/api/generate` with the image as a base64-encoded string in the `images` array.',
          '**Step 5 — Python example:** Use the `requests` library with base64 encoding — see code block below.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llama3.2-vision") -> str:
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
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Use Case 1: Document OCR and Extraction',
        content:
          '**VLMs outperform traditional OCR for semi-structured documents** — invoices, receipts, contracts, and tables where layout matters as much as the text itself. Traditional OCR (Tesseract) extracts characters; VLMs understand what those characters mean in context.',
        items: [
          '**What works well:** Scanned invoices, PDF screenshots, handwritten notes (printed, not cursive), tables with clear borders, business cards.',
          '**What works less well:** Handwritten cursive text, low-DPI scans (< 150 DPI), heavily compressed JPEGs, overlapping text.',
          '**Best models for OCR:** MiniCPM-V 2.6 (highest OCR accuracy in 6 GB class), Llama 3.2 Vision 11B (best for mixed document types).',
          '**Prompt engineering for OCR:** "Extract all text from this document exactly as written, preserving line breaks." Or: "Return the contents of this invoice as JSON with fields: vendor, date, line_items[], total."',
          '**Vs. traditional OCR:** VLMs are slower but more semantic. Tesseract is faster for pure text extraction from clean documents. Use VLMs when you need structured data extraction, not just raw text.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Use Case 2: Image Q&A and Description',
        content:
          '**For general scene understanding, product descriptions, and visual Q&A, Llama 3.2 Vision 11B is the recommended local model.** It produces natural, detailed descriptions and handles nuanced questions about photo content.',
        items: [
          '**Scene description:** "What is in this photo?" — objects, people, activities, setting, mood.',
          '**Product cataloguing:** Feed product photos with a prompt template like "Describe this product: color, shape, material, condition." Useful for e-commerce inventory without cloud APIs.',
          '**Accessibility:** Generate alt text for images at scale. Accurate enough for accessibility compliance on standard product photos.',
          '**Best models:** LLaVA 1.6 13B or Llama 3.2 Vision 11B for general photo Q&A. LLaVA 1.6 7B for volume processing where speed matters more than accuracy.',
          '**Speed consideration:** On a 6 GB GPU, Llama 3.2 Vision 11B Q4 generates ~8–12 tokens/second for image responses — processing 100 images takes ~2–5 minutes depending on description length.',
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
          '**Best models:** InternVL 2.5 8B (best UI understanding), MiniCPM-V 2.6 (second best, with Ollama support).',
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
          '**Best models for charts:** InternVL 2.5 (best chart understanding), Llama 3.2 Vision 11B (good on clearly labeled charts).',
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
          '**Best models for video frames:** Llama 3.2 Vision 11B for quality, LLaVA 1.6 7B for speed (higher frame throughput).',
          '**Speed reality:** At 1 frame/second extraction and ~1 second per frame inference on an RTX 4070, a 10-minute video takes ~20–30 minutes to process fully.',
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

def analyze_frame(image_path: str, model: str = "llama3.2-vision") -> str:
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
            'Model': 'Moondream 2 (1.9B)',
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
            'Model': 'MiniCPM-V 2.6 (8B)',
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
            'Practical for production?': 'Yes — best general quality',
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
            text: 'Token generation speed for vision models is slower than for text-only models of the same size because the vision encoder adds significant computational overhead on the first image token. Subsequent text tokens generate at near-normal speed.',
          },
          {
            type: 'note',
            text: 'Apple Silicon unified memory enables running larger models (up to 90B on M5 Max 128GB) that won\'t fit in discrete GPU VRAM. Speed is slightly slower than equivalent NVIDIA GPU but no VRAM limitation.',
          },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'How Local Vision Models Compare to GPT-4o Vision',
        content:
          'Local VLMs have closed the gap significantly on structured documents but remain behind GPT-4o Vision on complex and ambiguous tasks.',
        items: [
          '**Structured documents (invoices, forms):** Local models at 80–90% of GPT-4o quality — good enough for production use on clean, well-formatted documents.',
          '**Complex scenes, ambiguous imagery:** Local models at 50–70% of GPT-4o — noticeable quality gap on images with unusual context, lighting, or ambiguous content.',
          '**Handwriting recognition:** Local models significantly weaker, especially on cursive. GPT-4o Vision handles handwriting substantially better.',
          '**Chart data extraction:** Unreliable on both local models and GPT-4o, but GPT-4o is more accurate on precise numeric values.',
          '**Cost:** GPT-4o Vision at $0.01–0.03 per image vs $0 for local. 10,000 images/month = $100–300 saved with local models.',
          '**Privacy:** Local models process images on-device — no data leaves the machine. GPT-4o sends images to OpenAI servers.',
          '**Speed:** Local models at 10–20 tok/sec vs GPT-4o at 30–80 tok/sec, but local has no network latency for batch processing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'For production invoice and form processing with clean input, local VLMs (Llama 3.2 Vision 11B, Qwen2-VL 7B) can replace GPT-4o Vision at zero cost. For anything involving handwriting, complex scene analysis, or ambiguous content, GPT-4o still leads.',
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
          '**Weaknesses:** Weaker OCR than MiniCPM-V 2.6, weaker UI analysis than InternVL 2.5, outperformed overall by Llama 3.2 Vision 11B on quality benchmarks.',
          '**Why still recommended:** LLaVA 1.6 has the largest community, the most tutorials, and the most example prompts of any local VLM. If you run into problems, help is easier to find.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — Best Multilingual and OCR Performance',
        content:
          '**Qwen2-VL is Alibaba\'s vision-language model and the strongest open-source option on document benchmarks in 2026.** The 7B variant is competitive with Llama 3.2 Vision 11B at lower VRAM, and the 72B variant tops most open-source VLM leaderboards.',
        items: [
          '**Architecture:** Dynamic resolution support up to 4096×4096 — significantly higher than LLaVA 1.6 (672×672) or Llama 3.2 Vision (1120×1120). This enables reading high-DPI scans without downsampling.',
          '**Multilingual OCR:** Best-in-class for Chinese, Japanese, Korean, and English OCR. Training data included large-scale multilingual document corpora — a significant advantage over LLaVA and Llama 3.2 Vision for non-English documents.',
          '**7B vs 72B:** The 7B fits in ~6 GB VRAM (Q4) and is competitive with Llama 3.2 Vision 11B on most document tasks. The 72B uses ~48 GB and leads most open-source benchmarks.',
          '**Ollama install:** `ollama pull qwen2-vl:7b` — available directly from the Ollama model library.',
          '**Multi-image support:** Accepts up to 8 images per request — highest multi-image capacity of any model in this comparison.',
          '**Model page:** [Qwen2-VL 7B on Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
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
            text: 'Pick your model by VRAM first (2→4→6→8→16 GB), then refine by use case (OCR, UI, general Q&A, or maximum quality).',
          },
          {
            type: 'plain-terms',
            text: 'Under 4 GB: Moondream only. 6 GB: MiniCPM-V for documents, LLaVA 7B for photos. 8–16 GB: Llama 3.2 Vision 11B for almost everything. 64+ GB: Llama 3.2 Vision 90B for the best local quality.',
          },
        ],
        items: [
          '**Under 4 GB VRAM:** Moondream 2 (1.9B) — only viable option at 2 GB. Beyond Moondream 2, PaliGemma 2 (3B) and SmolVLM (2.2B) are viable alternatives. PaliGemma 2 has stronger document understanding than Moondream at a slight VRAM cost (~3 GB). SmolVLM trades quality for extreme efficiency. None are suitable for dense text OCR.',
          '**6 GB VRAM:** MiniCPM-V 2.6 for document OCR and invoice processing. LLaVA 1.6 7B for general photo Q&A where community support matters. Qwen2-VL 7B for multilingual OCR or when the highest OCR accuracy matters.',
          '**8–16 GB VRAM:** Llama 3.2 Vision 11B is the clear recommendation — best overall quality at this VRAM tier, wide Ollama support.',
          '**16+ GB VRAM:** LLaVA 1.6 13B adds more capacity for complex scene understanding vs. the 7B variant. InternVL 2.5 8B if your primary use case is UI or code screenshots.',
          '**64+ GB unified memory (Apple M-Max/Ultra, multi-GPU):** Llama 3.2 Vision 90B for the best local VLM quality available, approaching cloud-tier performance for document tasks. Qwen2-VL 72B is an alternative with top open-source benchmark scores.',
          '**Always verify numbers:** Regardless of model, cross-check any numeric values extracted from charts or tables against the source data. Local VLMs hallucinate precise numbers from visual charts.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Can I use LLaVA or Llama 3.2 Vision without Ollama?',
            a: 'Yes. You can run LLaVA and Llama 3.2 Vision directly using llama.cpp (with vision support), the transformers library (with the appropriate model card), or LM Studio (which has a GUI for vision models). Ollama is recommended for simplicity — it handles model download, quantization selection, and API hosting automatically.',
          },
          {
            q: 'Does Llama 3.2 Vision support PDF input directly?',
            a: 'No local VLM accepts PDF input directly. You must first convert PDF pages to images (using pdf2image, pypdfium2, or similar) and then send each page as a separate image request. For a 10-page PDF, you send 10 separate image queries and concatenate or summarize the results.',
          },
          {
            q: 'How do local vision models compare to GPT-4o Vision?',
            a: 'GPT-4o Vision is still meaningfully better on ambiguous scenes, handwriting, complex infographics, and tasks requiring world knowledge. Llama 3.2 Vision 11B approaches GPT-4o on structured documents (invoices, forms, clear photos) but falls behind on nuanced or ambiguous imagery. See the full comparison above for cost, privacy, and speed breakdown.',
          },
          {
            q: 'What image resolution do local VLMs support?',
            a: 'LLaVA 1.6 supports up to 672×672 effective resolution (with dynamic patching). MiniCPM-V 2.6 supports up to 1792×1792 — one reason it outperforms LLaVA on high-DPI document scans. Llama 3.2 Vision supports variable resolution up to 1120×1120. For best OCR results, send document images at 150+ DPI.',
          },
          {
            q: 'Can I fine-tune a local vision model on my own images?',
            a: 'Yes, but fine-tuning VLMs is more resource-intensive than fine-tuning text-only LLMs — you need to process both image and text training pairs through the full forward pass. LLaVA fine-tuning is well-documented using the original training codebase. MiniCPM-V supports fine-tuning via its official training scripts on Hugging Face. For most use cases, prompt engineering alone is sufficient without fine-tuning.',
          },
          {
            q: 'What is the best local vision model for 8 GB VRAM?',
            a: 'Llama 3.2 Vision 11B (Q4 quantized fits in ~8 GB) for general use. Qwen2-VL 7B if multilingual OCR is the primary need. Both are available via Ollama with a single pull command.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — which is better for OCR?',
            a: 'MiniCPM-V 2.6 is more accurate on document OCR, especially dense tables and high-DPI scans. LLaVA 1.6 is better documented and has more community support. For pure OCR accuracy, pick MiniCPM-V. For community resources and troubleshooting, pick LLaVA.',
          },
          {
            q: 'Can local vision models read handwriting?',
            a: 'Printed handwriting (block letters): yes, with moderate accuracy on Llama 3.2 Vision 11B and MiniCPM-V 2.6. Cursive handwriting: unreliable on all local models. GPT-4o Vision is significantly better at cursive. For production handwriting OCR on cursive documents, cloud APIs are still recommended.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[LLaVA project page](https://llava-vl.github.io) — LLaVA 1.5 and 1.6 model cards, architecture details, and training dataset description.',
          '[Llama 3.2 Vision on Hugging Face](https://huggingface.co/meta-llama) — Meta\'s official model release, model card, and benchmark figures.',
          '[MiniCPM-V 2.6 on Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — OpenBMB model card, OCR benchmarks, and fine-tuning instructions.',
          '[Moondream on GitHub](https://github.com/vikhyat/moondream) — Architecture description, inference scripts, and model download.',
          '[InternVL 2.5 on Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab model card, benchmark scores on document and UI tasks.',
          '[Ollama documentation](https://ollama.com) — Vision model support, API reference, and model library.',
          '[Qwen2-VL on Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — Alibaba\'s Qwen2-VL model card, architecture details, and multilingual OCR benchmarks.',
          '[PaliGemma 2 on Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Google\'s PaliGemma 2 3B model card.',
          '[SmolVLM on Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace\'s SmolVLM model card and inference instructions.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Related Reading',
        items: [
          '[Local Multimodal AI Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combine vision models with STT and TTS into a full local multimodal stack.',
          '[Local Speech-to-Text 2026: Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026) — Add voice input to complement vision output.',
          '[Local TTS and Voice Cloning 2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Add voice output to read VLM responses aloud.',
          '[How to Install Ollama](/local-llms/how-to-install-ollama) — Prerequisite: Ollama setup and configuration.',
          '[Local LLM Hardware Guide 2026](/local-llms/local-llm-hardware-guide-2026) — VRAM and RAM requirements for vision model inference.',
        ],
      },
    },
  },

  de: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL & Ollama Multimodal-Setup',
    seoTitle: 'Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL & Ollama Setup',
    intro:
      'Vision-Language-Modelle (VLMs) verarbeiten Bild- und Texteingaben gemeinsam und erzeugen Textausgaben – für Dokument-OCR, Bild-Q&A, Screenshot-Analyse und Diagramminterpretation, vollständig lokal. Im Jahr 2026 ist Ollama der einfachste Weg, VLMs auszuführen: Modell herunterladen, Bild senden, Beschreibung oder Antwort erhalten. Dieser Leitfaden vergleicht die führenden lokalen Vision-Modelle (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5), erläutert das Ollama-Setup Schritt für Schritt und ordnet jedes Modell seinem besten Anwendungsfall zu.',
    metaDescription:
      'Lokale Vision-Language-Modelle mit Ollama 2026: LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Qwen2-VL. Dokument-OCR, Bild-Q&A, Screenshot-Analyse – vollständig offline mit VRAM-Anforderungen und Qualitätsbenchmarks.',
    twitterDescription:
      'Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, MiniCPM-V, Qwen2-VL via Ollama. Bild-Q&A, OCR, Screenshot-Analyse – 100 % offline. VRAM-Leitfaden und Setup-Schritte.',
    readTime: '11 Min. Lesezeit',
    leadAnswerBlock:
      '**Für die meisten Entwickler mit 6–8 GB VRAM sind MiniCPM-V 2.6 (8B) oder LLaVA 1.6 7B via Ollama der empfohlene Einstiegspunkt 2026.** Beide laufen in ~6 GB VRAM, unterstützen Dokument-OCR, Bild-Q&A und Screenshot-Analyse und sind mit einem einzigen Ollama-Pull-Befehl verfügbar. Für die beste Gesamtqualität mit 8–16 GB VRAM ist Llama 3.2 Vision 11B das beste lokale Vision-Modell und stärkste lokale VLM – besonders für Dokumente und Fotoanalyse. Mit nur 2 GB VRAM ist Moondream 2 (1,9B) die einzige praktische Wahl, bietet jedoch begrenztes Verständnis komplexer Szenen. Alle Modelle laufen nach dem Download vollständig offline – kein API-Schlüssel oder Cloud-Konto erforderlich.',
    quickAnswerTop: {
      de: {
        question: 'Welche lokalen Vision-Modelle laufen am besten mit Ollama im Jahr 2026?',
        answer:
          'Das beste lokale Vision-Modell hängt von VRAM und Anwendungsfall ab. Mit 6–8 GB VRAM bietet MiniCPM-V 2.6 die beste Balance aus OCR-Genauigkeit und allgemeinem Bildverständnis. Mit 8–16 GB VRAM ist Llama 3.2 Vision 11B die erste Wahl für allgemeine visuelle Q&A und Dokumentenanalyse. Mit 2 GB VRAM ist Moondream 2 die einzige Option – schnell, aber in der Leistungsfähigkeit begrenzt. InternVL 2.5 ist am besten für UI-Screenshots und Diagramme geeignet.',
        bullets: [
          'Unter 4 GB VRAM → Moondream 2 (1,9B): schnell, begrenztes Verständnis komplexer Bilder. Auch: PaliGemma 2 3B (~3 GB) und SmolVLM 2,2B (~2 GB).',
          '6 GB VRAM → MiniCPM-V 2.6, LLaVA 1.6 7B oder Qwen2-VL 7B (beste multilinguale OCR): beste Balance aus Qualität und VRAM-Bedarf.',
          '8–16 GB VRAM → Llama 3.2 Vision 11B: bestes lokales VLM für allgemeine Fotos und Dokumente.',
          '64+ GB (oder Apple M-Series) → Llama 3.2 Vision 90B oder Qwen2-VL 72B: beste lokale Qualität, nahe Cloud-Niveau.',
          'Setup: `ollama pull llama3.2-vision` dann `ollama run llama3.2-vision "Beschreibe das Bild" --image foto.jpg`.',
          'Beste OCR-Leistung: Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6.',
          'Beste UI/Screenshot-Analyse: InternVL 2.5 – speziell auf Code- und UI-Screenshots trainiert.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Lokale Vision-Modelle vs. GPT-4o Vision', anchor: '#local-vs-gpt4o' },
      { label: 'LLaVA im Detail', anchor: '#llava-deep-dive' },
      { label: 'Qwen2-VL — Beste multilinguale OCR-Leistung', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B ist das beste lokale Vision-Modell für die meisten Entwickler mit 8–16 GB VRAM.** Es verarbeitet Fotos, Dokumente und gemischte Inhalte mit der höchsten Genauigkeit seiner Klasse und ist direkt über Ollama verfügbar.',
          '**MiniCPM-V 2.6 (8B) ist die erste Wahl für Dokument-OCR bei 6 GB VRAM.** Die Trainingsdaten umfassen hochauflösende Dokumentscans – damit genauer als LLaVA bei Tabellen, Rechnungen und dichtem Text.',
          '**LLaVA 1.6 7B ist das am besten dokumentierte und gemeinschaftsgetestete lokale VLM.** Beste Allzweck-Wahl, wenn umfangreiche Beispiele, Tutorials und Fehlerbehebungsressourcen wichtig sind.',
          '**Moondream 2 (1,9B) ist die einzige praktische Option unter 4 GB VRAM.** Schnell und kompakt, aber überfordert von komplexen Szenen, dichtem Text und präzisen Diagrammwerten.',
          '**InternVL 2.5 (8B) ist am stärksten für Code-Screenshots und UI-Analyse.** Das Training umfasste GitHub-Screenshots, UI-Mockups und Code-Ausgaben.',
          '**Alle Modelle sind über Ollama mit einem einzigen `pull`-Befehl verfügbar.** Keine Modellkonvertierung, Quantisierung oder Python-Setup erforderlich.',
          '**Keines dieser Modelle erreicht die Qualität von GPT-4o Vision.** Lokale VLMs 2026 sind eine starke Tier-2-Option – ausgezeichnet für strukturierte Dokumente und klare Fotos, schwächer bei Handschrift und komplexen Infografiken.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Schnellübersicht',
        items: [
          '**Was VLMs leisten:** Bild- + Texteingabe → Textausgabe. Keine Bildgeneratoren – diese Modelle *verstehen* Bilder.',
          '**Ollama-Unterstützung:** Alle Modelle in diesem Vergleich haben offizielle oder Community-Ollama-Integration (Stand Mai 2026).',
          '**Kleinstes nutzbares Modell:** Moondream 2 mit 1,9B Parametern, ~2 GB VRAM.',
          '**Größtes praktisches lokales Modell:** Llama 3.2 Vision 90B mit ~64 GB Unified Memory (Apple M-Series oder Multi-GPU).',
          '**Bild-Eingabeformat:** JPEG, PNG, WebP. Maximale Auflösung variiert je Modell (typisch 1024×1024 bis 4096×4096).',
          '**OCR-Stärke:** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          'Vergleich der leistungsfähigsten lokalen Vision-Modelle, verfügbar über Ollama oder direkte Inferenz (Stand Mai 2026). VRAM-Angaben für 4-Bit-quantisierte (Q4) Varianten.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Für 6–8 GB VRAM: MiniCPM-V 2.6 für Dokument-OCR, Llama 3.2 Vision 11B für allgemeine Bild-Q&A – beide lokal via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Moondream als leichtgewichtige Option; LLaVA als sichere Allzweck-Wahl; MiniCPM-V als OCR-Spezialist; Llama 3.2 Vision als bestes Gesamtmodell; InternVL als UI/Code-Experte.',
          },
        ],
        columns: ['Modell', 'Parameter', 'VRAM (Q4)', 'Bildtypen', 'Qualität', 'Via Ollama?'],
        rows: [
          { 'Modell': 'Moondream 2', 'Parameter': '1,9B', 'VRAM (Q4)': '~2 GB', 'Bildtypen': 'Einfache Fotos', 'Qualität': 'Grundlegend', 'Via Ollama?': 'Ja' },
          { 'Modell': 'LLaVA 1.6 7B', 'Parameter': '7B', 'VRAM (Q4)': '~6 GB', 'Bildtypen': 'Fotos, Dokumente, Diagramme', 'Qualität': 'Gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'LLaVA 1.6 13B', 'Parameter': '13B', 'VRAM (Q4)': '~10 GB', 'Bildtypen': 'Fotos, Dokumente, Diagramme', 'Qualität': 'Sehr gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'MiniCPM-V 2.6', 'Parameter': '8B', 'VRAM (Q4)': '~6 GB', 'Bildtypen': 'Fotos, Dokumente, OCR', 'Qualität': 'Sehr gut', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Llama 3.2 Vision 11B', 'Parameter': '11B', 'VRAM (Q4)': '~8 GB', 'Bildtypen': 'Fotos, Dokumente', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Llama 3.2 Vision 90B', 'Parameter': '90B', 'VRAM (Q4)': '~64 GB', 'Bildtypen': 'Fotos, Dokumente, Komplex', 'Qualität': 'Bestes lokales Modell', 'Via Ollama?': 'Ja' },
          { 'Modell': 'InternVL 2.5 8B', 'Parameter': '8B', 'VRAM (Q4)': '~8 GB', 'Bildtypen': 'Dokumente, Diagramme, UI, Code', 'Qualität': 'Ausgezeichnet (UI/Diagramme)', 'Via Ollama?': 'Community' },
          { 'Modell': 'Qwen2-VL 7B', 'Parameter': '7B', 'VRAM (Q4)': '~6 GB', 'Bildtypen': 'Fotos, Dokumente, OCR, Mehrsprachig', 'Qualität': 'Ausgezeichnet', 'Via Ollama?': 'Ja' },
          { 'Modell': 'Qwen2-VL 72B', 'Parameter': '72B', 'VRAM (Q4)': '~48 GB', 'Bildtypen': 'Fotos, Dokumente, Komplex', 'Qualität': 'Bestes Open-Source', 'Via Ollama?': 'Ja' },
          { 'Modell': 'PaliGemma 2 3B', 'Parameter': '3B', 'VRAM (Q4)': '~3 GB', 'Bildtypen': 'Fotos, Dokumente', 'Qualität': 'Gut', 'Via Ollama?': 'Community' },
          { 'Modell': 'SmolVLM 2,2B', 'Parameter': '2,2B', 'VRAM (Q4)': '~2 GB', 'Bildtypen': 'Einfache Fotos, Beschriftungen', 'Qualität': 'Grundlegend+', 'Via Ollama?': 'Community' },
        ],
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
          { 'Modell': 'MiniCPM-V 2.6', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
          { 'Modell': 'Qwen2-VL 7B', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
          { 'Modell': 'Llama 3.2 11B', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
          { 'Modell': 'GPT-4o Vision', 'Anbieter': '✓', 'Datum': '✓', 'Gesamt': '✓', 'Steuer': '✓', 'Positionen': '✓', 'Bewertung': '5/5' },
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
        columns: ['Funktion', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Funktion': 'Multi-Bild-Eingabe',
            'Moondream': 'Nein',
            'LLaVA 7B': 'Nein',
            'MiniCPM-V': 'Ja (bis zu 4)',
            'Qwen2-VL': 'Ja (bis zu 8)',
            'LLaVA 13B': 'Nein',
            'Llama 3.2 Vision': 'Ja (mehrere Seiten)',
            'InternVL': 'Ja',
          },
        ],
        items: [
          'MiniCPM-V 2.6 akzeptiert bis zu 4 Bilder pro Prompt; Qwen2-VL verarbeitet bis zu 8. LLaVA und Moondream akzeptieren nur einzelne Bilder pro Anfrage.',
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
          '**Schritt 2 — Modell herunterladen:** `ollama pull llama3.2-vision` (11B, ~8 GB) oder `ollama pull moondream` (1,9B, ~2 GB) für VRAM-beschränkte Systeme.',
          '**Schritt 3 — Über CLI nutzen:** `ollama run llama3.2-vision "Was ist auf diesem Bild?" --image /pfad/zum/foto.jpg`',
          '**Schritt 4 — HTTP-API nutzen:** POST an `http://localhost:11434/api/generate` mit dem Bild als Base64-String im `images`-Array.',
          '**Schritt 5 — Python-Beispiel:** `requests`-Bibliothek mit Base64-Kodierung verwenden – siehe Code-Block unten.',
        ],
        codeBlock: `import base64
import requests

def ask_vision_model(image_path: str, prompt: str, model: str = "llama3.2-vision") -> str:
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
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Anwendungsfall 1: Dokument-OCR und -Extraktion',
        content:
          '**VLMs übertreffen klassische OCR bei halbstrukturierten Dokumenten** – Rechnungen, Quittungen, Verträge und Tabellen, bei denen Layout und Text gleich wichtig sind.',
        items: [
          '**Was gut funktioniert:** Gescannte Rechnungen, PDF-Screenshots, handgeschriebene Druckschrift, Tabellen mit klaren Linien, Visitenkarten.',
          '**Was weniger gut funktioniert:** Kursivhandschrift, Scans unter 150 DPI, stark komprimierte JPEGs, überlappender Text.',
          '**Beste Modelle für OCR:** MiniCPM-V 2.6 (höchste Genauigkeit in der 6-GB-Klasse), Llama 3.2 Vision 11B (beste Leistung bei gemischten Dokumenttypen).',
          '**Prompt-Engineering für OCR:** „Extrahiere den gesamten Text aus diesem Dokument genau wie geschrieben." Oder: „Gib den Inhalt dieser Rechnung als JSON zurück mit Feldern: Anbieter, Datum, Positionen[], Gesamt."',
          '**Vs. klassische OCR:** VLMs sind langsamer, aber semantisch mächtiger. Tesseract für reine Textextraktion aus sauberen Dokumenten; VLMs für strukturierte Datenextraktion.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Anwendungsfall 2: Bild-Q&A und -Beschreibung',
        content:
          '**Für allgemeines Szenenverständnis, Produktbeschreibungen und visuelle Q&A ist Llama 3.2 Vision 11B das empfohlene lokale Modell.**',
        items: [
          '**Szenenbeschreibung:** „Was ist auf diesem Foto?" – Objekte, Personen, Aktivitäten, Umgebung, Stimmung.',
          '**Produktkatalogisierung:** Produktfotos mit einem Template verarbeiten: „Beschreibe Farbe, Form, Material, Zustand." Nützlich für E-Commerce-Inventar ohne Cloud-APIs.',
          '**Barrierefreiheit:** Alt-Texte für Bilder im großen Maßstab generieren.',
          '**Beste Modelle:** LLaVA 1.6 13B oder Llama 3.2 Vision 11B für allgemeine Foto-Q&A. LLaVA 1.6 7B für Massenverarbeitung.',
          '**Geschwindigkeitshinweis:** Auf einer 6-GB-GPU generiert Llama 3.2 Vision 11B Q4 ~8–12 Token/Sek. – 100 Bilder dauern ~2–5 Minuten.',
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
          '**Beste Modelle:** InternVL 2.5 8B (bestes UI-Verständnis), MiniCPM-V 2.6 (zweitbeste mit Ollama-Unterstützung).',
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
          '**Beste Modelle:** InternVL 2.5 (bestes Diagrammverständnis), Llama 3.2 Vision 11B (gut bei klar beschrifteten Diagrammen).',
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
          '**Beste Modelle:** Llama 3.2 Vision 11B für Qualität, LLaVA 1.6 7B für Geschwindigkeit.',
          '**Geschwindigkeitsrealität:** Ein 10-minütiges Video dauert ~20–30 Minuten vollständig zu verarbeiten.',
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

def analyze_frame(image_path: str, model: str = "llama3.2-vision") -> str:
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
          { 'Modell': 'Moondream 2 (1,9B)', 'VRAM (Q4)': '~2 GB', 'Token/Sek. (RTX 4070)': '~25–35', 'Token/Sek. (M5 Pro 36 GB)': '~30–40', 'Produktionstauglich?': 'Ja — für einfache Aufgaben' },
          { 'Modell': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 GB', 'Token/Sek. (RTX 4070)': '~15–20', 'Token/Sek. (M5 Pro 36 GB)': '~18–25', 'Produktionstauglich?': 'Ja — Allzweck' },
          { 'Modell': 'MiniCPM-V 2.6 (8B)', 'VRAM (Q4)': '~6 GB', 'Token/Sek. (RTX 4070)': '~12–18', 'Token/Sek. (M5 Pro 36 GB)': '~15–20', 'Produktionstauglich?': 'Ja — OCR und Dokumente' },
          { 'Modell': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 GB', 'Token/Sek. (RTX 4070)': '~10–14', 'Token/Sek. (M5 Pro 36 GB)': '~12–16', 'Produktionstauglich?': 'Ja — beste Gesamtqualität' },
          { 'Modell': 'LLaVA 1.6 13B', 'VRAM (Q4)': '~10 GB', 'Token/Sek. (RTX 4070)': '~8–12', 'Token/Sek. (M5 Pro 36 GB)': '~10–14', 'Produktionstauglich?': 'Ja — mit 12-GB-GPU' },
          { 'Modell': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '~64 GB', 'Token/Sek. (RTX 4070)': 'N/A (Multi-GPU oder M-Max)', 'Token/Sek. (M5 Pro 36 GB)': 'N/A (M5 Max 128 GB+)', 'Produktionstauglich?': 'Nur High-End Apple Silicon' },
        ],
        callouts: [
          { type: 'note', text: 'Die Token-Generierungsgeschwindigkeit ist langsamer als bei reinen Textmodellen, da der Vision-Encoder beim ersten Bild-Token erheblichen Mehraufwand verursacht. Nachfolgende Text-Tokens werden nahezu normal generiert.' },
          { type: 'note', text: 'Apple Silicon Unified Memory ermöglicht größere Modelle (bis 90B auf M5 Max 128 GB), die nicht in diskreten GPU-VRAM passen. Etwas langsamer als NVIDIA, aber ohne VRAM-Beschränkung.' },
        ],
      },
      localVsGpt4o: {
        id: 'local-vs-gpt4o',
        title: 'Lokale Vision-Modelle vs. GPT-4o Vision',
        content:
          'Lokale VLMs haben den Rückstand bei strukturierten Dokumenten deutlich verringert, liegen aber bei komplexen Aufgaben noch hinter GPT-4o Vision.',
        items: [
          '**Strukturierte Dokumente (Rechnungen, Formulare):** Lokale Modelle bei 80–90 % der GPT-4o-Qualität – ausreichend für den Produktionseinsatz.',
          '**Komplexe Szenen, mehrdeutige Bilder:** Lokale Modelle bei 50–70 % von GPT-4o – spürbare Qualitätslücke.',
          '**Handschrifterkennung:** Lokale Modelle deutlich schwächer, besonders bei Kursivschrift.',
          '**Diagrammdatenextraktion:** Auf beiden unzuverlässig, aber GPT-4o bei präzisen Zahlenwerten genauer.',
          '**Kosten:** GPT-4o Vision bei 0,01–0,03 $ pro Bild vs. 0 $ lokal. 10.000 Bilder/Monat = 100–300 $ gespart.',
          '**Datenschutz:** Lokale Modelle verarbeiten Bilder auf dem Gerät – keine Daten verlassen die Maschine.',
          '**Geschwindigkeit:** Lokale Modelle 10–20 Token/Sek. vs. GPT-4o 30–80 Token/Sek., aber lokal ohne Netzwerklatenz.',
        ],
        callouts: [
          { type: 'note', text: 'Für Rechnungs- und Formularverarbeitung mit sauberem Input können lokale VLMs (Llama 3.2 Vision 11B, Qwen2-VL 7B) GPT-4o Vision bei null Kosten ersetzen.' },
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
          '**Schwächen:** Schwächere OCR als MiniCPM-V 2.6, schwächere UI-Analyse als InternVL 2.5.',
          '**Warum weiterhin empfohlen:** Größte Community, meiste Tutorials, meiste Beispiel-Prompts aller lokalen VLMs.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — Beste multilinguale OCR-Leistung',
        content:
          '**Qwen2-VL ist Alibabas Vision-Language-Modell und 2026 die stärkste Open-Source-Option bei Dokument-Benchmarks.**',
        items: [
          '**Architektur:** Dynamische Auflösung bis 4096×4096 – deutlich höher als LLaVA 1.6 (672×672) oder Llama 3.2 Vision (1120×1120).',
          '**Mehrsprachige OCR:** Beste Klasse für Chinesisch, Japanisch, Koreanisch und Englisch. Umfangreiche mehrsprachige Dokumentkorpora im Training.',
          '**7B vs. 72B:** 7B in ~6 GB VRAM (Q4), konkurrenzfähig mit Llama 3.2 Vision 11B. 72B mit ~48 GB führt Open-Source-Benchmarks an.',
          '**Ollama-Installation:** `ollama pull qwen2-vl:7b`',
          '**Multi-Bild:** Bis zu 8 Bilder pro Anfrage – höchste Kapazität im Vergleich.',
          '**Modellseite:** [Qwen2-VL 7B auf Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Auswahl des richtigen Vision-Modells',
        content: 'Entscheidungsbaum für die Modellauswahl – VRAM zuerst:',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Modell nach VRAM wählen (2→4→6→8→16 GB), dann nach Anwendungsfall verfeinern.',
          },
          {
            type: 'plain-terms',
            text: 'Unter 4 GB: nur Moondream. 6 GB: MiniCPM-V für Dokumente, LLaVA 7B für Fotos. 8–16 GB: Llama 3.2 Vision 11B für fast alles. 64+ GB: Llama 3.2 Vision 90B für beste Qualität.',
          },
        ],
        items: [
          '**Unter 4 GB VRAM:** Moondream 2 (1,9B) bei 2 GB. PaliGemma 2 (3B) und SmolVLM (2,2B) als Alternativen – PaliGemma 2 mit besserem Dokumentenverständnis (~3 GB). Keines für dichten Text-OCR geeignet.',
          '**6 GB VRAM:** MiniCPM-V 2.6 für Dokument-OCR. LLaVA 1.6 7B für allgemeine Foto-Q&A. Qwen2-VL 7B für mehrsprachige OCR.',
          '**8–16 GB VRAM:** Llama 3.2 Vision 11B – beste Gesamtqualität, breite Ollama-Unterstützung.',
          '**16+ GB VRAM:** LLaVA 1.6 13B für komplexes Szenenverständnis. InternVL 2.5 8B für UI/Code-Screenshots.',
          '**64+ GB Unified Memory:** Llama 3.2 Vision 90B für beste lokale Qualität. Qwen2-VL 72B als Alternative mit führenden Benchmark-Werten.',
          '**Zahlen immer prüfen:** Aus Diagrammen extrahierte Zahlenwerte immer gegen Quelldaten gegenchecken.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
          {
            q: 'Kann ich LLaVA oder Llama 3.2 Vision ohne Ollama verwenden?',
            a: 'Ja. Beide können direkt über llama.cpp (mit Vision-Unterstützung), die transformers-Bibliothek oder LM Studio ausgeführt werden. Ollama wird der Einfachheit halber empfohlen.',
          },
          {
            q: 'Unterstützt Llama 3.2 Vision direkte PDF-Eingabe?',
            a: 'Kein lokales VLM akzeptiert PDFs direkt. PDF-Seiten zuerst in Bilder umwandeln (pdf2image, pypdfium2) und jede Seite als separate Anfrage senden.',
          },
          {
            q: 'Wie vergleichen sich lokale Vision-Modelle mit GPT-4o Vision?',
            a: 'GPT-4o ist bei mehrdeutigen Szenen, Handschrift und komplexen Infografiken noch deutlich besser. Llama 3.2 Vision 11B nähert sich GPT-4o bei strukturierten Dokumenten. Den vollständigen Vergleich mit Kosten, Datenschutz und Geschwindigkeit siehe oben.',
          },
          {
            q: 'Welche Bildauflösung unterstützen lokale VLMs?',
            a: 'LLaVA 1.6 bis 672×672 (dynamisches Patching). MiniCPM-V 2.6 bis 1792×1792. Llama 3.2 Vision bis 1120×1120. Für beste OCR-Ergebnisse Dokumente mit 150+ DPI senden.',
          },
          {
            q: 'Kann ich ein lokales Vision-Modell auf eigenen Bildern fine-tunen?',
            a: 'Ja, aber ressourcenintensiver als reines Text-LLM-Fine-Tuning. LLaVA-Fine-Tuning mit dem Original-Trainings-Code gut dokumentiert. MiniCPM-V über Hugging Face-Skripte. Für die meisten Fälle reicht Prompt-Engineering.',
          },
          {
            q: 'Was ist das beste lokale Vision-Modell für 8 GB VRAM?',
            a: 'Llama 3.2 Vision 11B (Q4 passt in ~8 GB) für den allgemeinen Einsatz. Qwen2-VL 7B für mehrsprachige OCR. Beide über Ollama verfügbar.',
          },
          {
            q: 'LLaVA vs. MiniCPM-V – welches ist besser für OCR?',
            a: 'MiniCPM-V 2.6 ist bei Dokument-OCR genauer, besonders bei dichten Tabellen und hochauflösenden Scans. LLaVA ist besser dokumentiert. Für OCR-Genauigkeit: MiniCPM-V. Für Community-Ressourcen: LLaVA.',
          },
          {
            q: 'Können lokale Vision-Modelle Handschrift erkennen?',
            a: 'Druckschrift: Ja, mit moderater Genauigkeit. Kursivschrift: Unzuverlässig bei allen lokalen Modellen. GPT-4o Vision ist bei Kursivschrift deutlich besser.',
          },
          {
            q: 'Muss ich beim Einsatz lokaler Vision-Modelle die DSGVO beachten?',
            a: 'Da lokale VLMs Bilder ausschließlich auf dem eigenen Gerät verarbeiten, sind die Anforderungen nach DSGVO Art. 28 (Auftragsverarbeitung) in der Regel nicht anwendbar. Für Unternehmen mit Personendaten in Dokumenten empfiehlt sich eine Dokumentation nach BSI-Grundschutz. Die vollständige Offline-Verarbeitung gilt als datenschutzfreundliche Technik gemäß DSGVO Art. 25.',
          },
          {
            q: 'Ist der Einsatz lokaler Vision-Modelle für den deutschen Mittelstand geeignet?',
            a: 'Ja. Für KMU, die sensible Geschäftsdokumente verarbeiten, bieten lokale VLMs klare Vorteile: keine Datenweitergabe an Cloud-Anbieter, Betrieb auf vorhandener Hardware (ab 8 GB VRAM), keine laufenden API-Kosten. Die BSI-Grundschutz-Kataloge empfehlen lokale Verarbeitung für vertrauliche Geschäftsdaten. Llama 3.2 Vision 11B ist ab 8 GB VRAM produktionstauglich.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Quellen',
        items: [
          '[LLaVA-Projektseite](https://llava-vl.github.io) — LLaVA 1.5 und 1.6 Modell-Cards, Architekturdetails und Trainingsdatensatz.',
          '[Llama 3.2 Vision auf Hugging Face](https://huggingface.co/meta-llama) — Metas offizielle Modell-Card und Benchmark-Werte.',
          '[MiniCPM-V 2.6 auf Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — OpenBMB Modell-Card, OCR-Benchmarks und Fine-Tuning-Anleitung.',
          '[Moondream auf GitHub](https://github.com/vikhyat/moondream) — Architekturbeschreibung und Inferenzskripte.',
          '[InternVL 2.5 auf Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab Modell-Card und Benchmark-Werte.',
          '[Ollama-Dokumentation](https://ollama.com) — Vision-Modell-Unterstützung, API-Referenz und Modellbibliothek.',
          '[Qwen2-VL auf Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — Alibabas Qwen2-VL Modell-Card und multilinguale OCR-Benchmarks.',
          '[PaliGemma 2 auf Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Googles PaliGemma 2 3B Modell-Card.',
          '[SmolVLM auf Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace SmolVLM Modell-Card und Inferenzanleitung.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Weiterführende Artikel',
        items: [
          '[Lokale multimodale KI-Pipeline 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=de) — Vision-Modelle mit STT und TTS zu einem vollständigen lokalen Stack kombinieren.',
          '[Lokale Sprache-zu-Text 2026: Whisper.cpp vs. faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026?lang=de) — Spracheingabe als Ergänzung zur Vision-Ausgabe.',
          '[Lokale TTS und Stimmklonierung 2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts?lang=de) — Sprachausgabe für VLM-Antworten.',
          '[Ollama installieren](/local-llms/how-to-install-ollama?lang=de) — Voraussetzung: Ollama-Setup und -Konfiguration.',
          '[Lokaler LLM Hardware-Leitfaden 2026](/local-llms/local-llm-hardware-guide-2026?lang=de) — VRAM- und RAM-Anforderungen für Vision-Modell-Inferenz.',
        ],
      },
    },
  },

  fr: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision et configuration Ollama multimodal',
    seoTitle: 'Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision & configuration Ollama',
    intro:
      'Les modèles vision-langage (VLM) acceptent des entrées image et texte simultanément et produisent du texte en sortie — pour l\'OCR de documents, les questions-réponses sur des images, l\'analyse de captures d\'écran et la lecture de graphiques, entièrement en local. En 2026, Ollama est la voie la plus simple pour exécuter des VLM : téléchargez un modèle, envoyez une image, obtenez une description ou une réponse. Ce guide compare les principaux modèles de vision locaux (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, InternVL 2.5) et explique le configuration d\'Ollama étape par étape.',
    metaDescription:
      'Exécuter des modèles vision-langage localement avec Ollama en 2026 : LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6. OCR de documents, questions-réponses sur images, analyse de captures d\'écran — entièrement hors ligne avec les exigences VRAM et les benchmarks de qualité.',
    twitterDescription:
      'Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, MiniCPM-V via Ollama. Questions-réponses sur images, OCR, analyse de captures d\'écran — 100 % hors ligne. Guide VRAM et étapes de configuration.',
    sections: {},
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'ローカルビジョンモデル2026：LLaVA・Llama 3.2 Vision・Ollamaマルチモーダルセットアップ',
    seoTitle: 'ローカルビジョンモデル2026：LLaVA・Llama 3.2 Vision & Ollamaセットアップ',
    intro:
      'ビジョン言語モデル（VLM）は画像とテキストを同時に処理し、テキスト出力を生成します。ドキュメントOCR、画像Q&A、スクリーンショット分析、グラフ解読をすべてローカルで実現できます。2026年、VLMを最も簡単に実行する方法はOllamaを使用することです：モデルをプル、画像を送信、説明または回答を取得。このガイドでは、主要なローカルビジョンモデル（LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6、Moondream 2、InternVL 2.5）を比較し、Ollamaのセットアップ手順を詳しく解説します。',
    metaDescription:
      '2026年にOllamaでビジョン言語モデルをローカル実行：LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6。ドキュメントOCR、画像Q&A、スクリーンショット分析 — VRAM要件と品質ベンチマーク付きで完全オフライン対応。',
    twitterDescription:
      'ローカルビジョンモデル2026：OllamaでLLaVA・Llama 3.2 Vision・MiniCPM-Vを実行。画像Q&A、OCR、スクリーンショット分析 — 100%オフライン。VRAMガイドとセットアップ手順。',
    sections: {},
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: '本地视觉模型2026：LLaVA、Llama 3.2 Vision与Ollama多模态配置',
    seoTitle: '本地视觉模型2026：LLaVA、Llama 3.2 Vision与Ollama配置指南',
    intro:
      '视觉语言模型（VLM）同时接受图像和文本输入，输出文本内容——支持文档OCR、图像问答、截图分析和图表解读，全部在本地完成。2026年，通过Ollama运行VLM是最简便的方式：拉取模型、发送图像、获取描述或答案。本指南对比主要本地视觉模型（LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6、Moondream 2、InternVL 2.5），并提供Ollama逐步配置说明及VRAM要求和质量基准。',
    metaDescription:
      '2026年使用Ollama在本地运行视觉语言模型：LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6。文档OCR、图像问答、截图分析——含VRAM要求和质量基准，完全离线使用。',
    twitterDescription:
      '本地视觉模型2026：通过Ollama运行LLaVA、Llama 3.2 Vision、MiniCPM-V。图像问答、OCR、截图分析——100%离线。VRAM指南与配置步骤。',
    sections: {},
  },
}
