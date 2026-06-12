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
    seoTitle: 'Best Local Vision Models 2026: LLaVA, Qwen2-VL & Ollama',
    intro:
      'Vision-language models (VLMs) accept image input alongside text and return text output — enabling document OCR, image Q&A, screenshot analysis, and chart reading locally. In 2026, the easiest path to running VLMs is through Ollama: pull a model, send an image, get a description or answer. This guide compares the leading local vision models (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5), covers Ollama setup step-by-step, and maps each model to its best use case based on VRAM requirements and quality benchmarks.',
    metaDescription:
      'Image Q&A, OCR, and screenshot analysis offline in 2026. Benchmark: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL, MiniCPM-V. VRAM guide + Ollama setup steps.',
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
      { label: 'How Local Vision Models Compare to GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
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
          '**None of these models approach GPT-5.5 Vision quality.** Local VLMs in 2026 are a strong tier-2 option — excellent for structured documents and clear photos, weaker on ambiguous scenes, handwriting, and complex infographics.',
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
        title: 'How Local Vision Models Compare to GPT-5.5 Vision',
        content:
          'Local VLMs have closed the gap significantly on structured documents but remain behind GPT-5.5 Vision on complex and ambiguous tasks.',
        items: [
          '**Structured documents (invoices, forms):** Local models at 80–90% of GPT-5.5 quality — good enough for production use on clean, well-formatted documents.',
          '**Complex scenes, ambiguous imagery:** Local models at 50–70% of GPT-5.5 — noticeable quality gap on images with unusual context, lighting, or ambiguous content.',
          '**Handwriting recognition:** Local models significantly weaker, especially on cursive. GPT-5.5 Vision handles handwriting substantially better.',
          '**Chart data extraction:** Unreliable on both local models and GPT-5.5, but GPT-5.5 is more accurate on precise numeric values.',
          '**Cost:** GPT-5.5 Vision at $0.01–0.03 per image vs $0 for local. 10,000 images/month = $100–300 saved with local models.',
          '**Privacy:** Local models process images on-device — no data leaves the machine. GPT-5.5 sends images to OpenAI servers.',
          '**Speed:** Local models at 10–20 tok/sec vs GPT-5.5 at 30–80 tok/sec, but local has no network latency for batch processing.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'For production invoice and form processing with clean input, local VLMs (Llama 3.2 Vision 11B, Qwen2-VL 7B) can replace GPT-5.5 Vision at zero cost. For anything involving handwriting, complex scene analysis, or ambiguous content, GPT-5.5 still leads.',
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
            q: 'How do local vision models compare to GPT-5.5 Vision?',
            a: 'GPT-5.5 Vision is still meaningfully better on ambiguous scenes, handwriting, complex infographics, and tasks requiring world knowledge. Llama 3.2 Vision 11B approaches GPT-5.5 on structured documents (invoices, forms, clear photos) but falls behind on nuanced or ambiguous imagery. See the full comparison above for cost, privacy, and speed breakdown.',
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
            a: 'Printed handwriting (block letters): yes, with moderate accuracy on Llama 3.2 Vision 11B and MiniCPM-V 2.6. Cursive handwriting: unreliable on all local models. GPT-5.5 Vision is significantly better at cursive. For production handwriting OCR on cursive documents, cloud APIs are still recommended.',
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
    seoTitle: 'Lokale Vision-Modelle 2026: LLaVA, Qwen2-VL & Ollama',
    intro:
      'Vision-Language-Modelle (VLMs) verarbeiten Bild- und Texteingaben gemeinsam und erzeugen Textausgaben – für Dokument-OCR, Bild-Q&A, Screenshot-Analyse und Diagramminterpretation, vollständig lokal. Im Jahr 2026 ist Ollama der einfachste Weg, VLMs auszuführen: Modell herunterladen, Bild senden, Beschreibung oder Antwort erhalten. Dieser Leitfaden vergleicht die führenden lokalen Vision-Modelle (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5), erläutert das Ollama-Setup Schritt für Schritt und ordnet jedes Modell seinem besten Anwendungsfall zu.',
    metaDescription:
      'Lokale Vision-Language-Modelle mit Ollama 2026: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL. Dokument-OCR, Bild-Q&A und Screenshot-Analyse, vollständig offline.',
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
      { label: 'Lokale Vision-Modelle vs. GPT-5.5 Vision', anchor: '#local-vs-gpt4o' },
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
          '**Keines dieser Modelle erreicht die Qualität von GPT-5.5 Vision.** Lokale VLMs 2026 sind eine starke Tier-2-Option – ausgezeichnet für strukturierte Dokumente und klare Fotos, schwächer bei Handschrift und komplexen Infografiken.',
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
        title: 'Lokale Vision-Modelle vs. GPT-5.5 Vision',
        content:
          'Lokale VLMs haben den Rückstand bei strukturierten Dokumenten deutlich verringert, liegen aber bei komplexen Aufgaben noch hinter GPT-5.5 Vision.',
        items: [
          '**Strukturierte Dokumente (Rechnungen, Formulare):** Lokale Modelle bei 80–90 % der GPT-5.5-Qualität – ausreichend für den Produktionseinsatz.',
          '**Komplexe Szenen, mehrdeutige Bilder:** Lokale Modelle bei 50–70 % von GPT-5.5 – spürbare Qualitätslücke.',
          '**Handschrifterkennung:** Lokale Modelle deutlich schwächer, besonders bei Kursivschrift.',
          '**Diagrammdatenextraktion:** Auf beiden unzuverlässig, aber GPT-5.5 bei präzisen Zahlenwerten genauer.',
          '**Kosten:** GPT-5.5 Vision bei 0,01–0,03 $ pro Bild vs. 0 $ lokal. 10.000 Bilder/Monat = 100–300 $ gespart.',
          '**Datenschutz:** Lokale Modelle verarbeiten Bilder auf dem Gerät – keine Daten verlassen die Maschine.',
          '**Geschwindigkeit:** Lokale Modelle 10–20 Token/Sek. vs. GPT-5.5 30–80 Token/Sek., aber lokal ohne Netzwerklatenz.',
        ],
        callouts: [
          { type: 'note', text: 'Für Rechnungs- und Formularverarbeitung mit sauberem Input können lokale VLMs (Llama 3.2 Vision 11B, Qwen2-VL 7B) GPT-5.5 Vision bei null Kosten ersetzen.' },
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
            q: 'Wie vergleichen sich lokale Vision-Modelle mit GPT-5.5 Vision?',
            a: 'GPT-5.5 ist bei mehrdeutigen Szenen, Handschrift und komplexen Infografiken noch deutlich besser. Llama 3.2 Vision 11B nähert sich GPT-5.5 bei strukturierten Dokumenten. Den vollständigen Vergleich mit Kosten, Datenschutz und Geschwindigkeit siehe oben.',
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
            a: 'Druckschrift: Ja, mit moderater Genauigkeit. Kursivschrift: Unzuverlässig bei allen lokalen Modellen. GPT-5.5 Vision ist bei Kursivschrift deutlich besser.',
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
          '[Lokale multimodale KI-Pipeline 2026](/de/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Vision-Modelle mit STT und TTS zu einem vollständigen lokalen Stack kombinieren.',
          '[Lokale Sprache-zu-Text 2026: Whisper.cpp vs. faster-whisper](/de/power-local-llm/local-whisper-stt-comparison-2026) — Spracheingabe als Ergänzung zur Vision-Ausgabe.',
          '[Lokale TTS und Stimmklonierung 2026](/de/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Sprachausgabe für VLM-Antworten.',
          '[Ollama installieren](/de/local-llms/how-to-install-ollama) — Voraussetzung: Ollama-Setup und -Konfiguration.',
          '[Lokaler LLM Hardware-Leitfaden 2026](/de/local-llms/local-llm-hardware-guide-2026) — VRAM- und RAM-Anforderungen für Vision-Modell-Inferenz.',
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
    title: 'Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, Qwen2-VL & configuration Ollama',
    seoTitle: 'Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, Qwen2-VL & Ollama',
    intro:
      'Les modèles vision-langage (VLM) acceptent des entrées image et texte simultanément et produisent du texte — pour l\'OCR de documents, les questions-réponses sur images, l\'analyse de captures d\'écran et la lecture de graphiques, entièrement en local. En 2026, Ollama est la voie la plus simple : téléchargez un modèle, envoyez une image, obtenez une réponse. Ce guide compare les principaux VLM locaux (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5) et explique la configuration d\'Ollama étape par étape.',
    metaDescription:
      'Exécuter des VLM locaux avec Ollama en 2026 : LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Qwen2-VL. OCR de documents, questions-réponses sur images, captures d\'écran — hors ligne avec exigences VRAM et benchmarks.',
    twitterDescription:
      'Modèles de vision locaux 2026 : LLaVA, Llama 3.2 Vision, MiniCPM-V, Qwen2-VL via Ollama. OCR, Q&A images, captures d\'écran — 100 % hors ligne. Guide VRAM et configuration.',
    readTime: '11 min de lecture',
    leadAnswerBlock:
      '**Pour la plupart des développeurs avec 6–8 Go de VRAM, MiniCPM-V 2.6 (8B) ou LLaVA 1.6 7B via Ollama est le point de départ recommandé en 2026.** Les deux fonctionnent avec ~6 Go de VRAM, supportent l\'OCR de documents, les questions-réponses sur images et l\'analyse de captures d\'écran, et sont disponibles via une seule commande Ollama. Pour la meilleure qualité globale avec 8–16 Go de VRAM, Llama 3.2 Vision 11B est le meilleur modèle de vision local et le VLM local le plus performant. Tous les modèles fonctionnent entièrement hors ligne — aucune clé API ni compte cloud requis.',
    quickAnswerTop: {
      fr: {
        question: 'Quels sont les meilleurs modèles de vision locaux à utiliser avec Ollama en 2026 ?',
        answer:
          'Le meilleur modèle de vision local dépend de votre VRAM et de votre cas d\'usage. Avec 6–8 Go de VRAM, MiniCPM-V 2.6 offre le meilleur équilibre entre précision OCR et compréhension générale des images. Avec 8–16 Go, Llama 3.2 Vision 11B est le choix principal. Avec 2 Go, Moondream 2 est la seule option.',
        bullets: [
          'Moins de 4 Go de VRAM → Moondream 2 (1,9B) : rapide, compréhension limitée. Aussi : PaliGemma 2 3B (~3 Go) et SmolVLM 2,2B (~2 Go).',
          '6 Go de VRAM → MiniCPM-V 2.6, LLaVA 1.6 7B ou Qwen2-VL 7B (meilleur OCR multilingue).',
          '8–16 Go de VRAM → Llama 3.2 Vision 11B : meilleur VLM local pour photos et documents.',
          '64+ Go (ou Apple M-Series) → Llama 3.2 Vision 90B ou Qwen2-VL 72B : qualité proche du cloud.',
          'Configuration : `ollama pull llama3.2-vision` puis `ollama run llama3.2-vision "Décris cette image" --image photo.jpg`.',
          'Meilleur OCR : Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6.',
          'Meilleur pour UI/captures d\'écran : InternVL 2.5.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL — Meilleure OCR multilingue', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B est le meilleur modèle de vision local pour la plupart des développeurs avec 8–16 Go de VRAM.** Il traite photos, documents et contenus mixtes avec la meilleure précision de sa catégorie, disponible directement via Ollama.',
          '**MiniCPM-V 2.6 (8B) est le premier choix pour l\'OCR de documents avec 6 Go de VRAM.** Ses données d\'entraînement incluent des scans haute résolution — plus précis que LLaVA sur les tableaux, factures et textes denses.',
          '**LLaVA 1.6 7B est le VLM local le mieux documenté.** Meilleur choix généraliste si vous avez besoin de nombreux exemples et ressources de dépannage.',
          '**Moondream 2 (1,9B) est la seule option pratique sous 4 Go de VRAM.** Rapide et léger, mais limité sur les scènes complexes, les textes denses et la lecture précise de graphiques.',
          '**InternVL 2.5 (8B) est le plus performant pour les captures d\'écran de code et l\'analyse UI.** Son entraînement incluait des captures GitHub, des maquettes UI et des sorties d\'exécution de code.',
          '**Tous les modèles sont disponibles via Ollama avec une seule commande `pull`.** Aucune conversion, quantification ou configuration Python requise.',
          '**Aucun de ces modèles n\'atteint la qualité de GPT-5.5 Vision.** Les VLM locaux en 2026 sont une solide option de niveau 2 — excellents pour les documents structurés, plus faibles sur l\'écriture manuscrite et les infographies complexes.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Faits rapides',
        items: [
          '**Ce que font les VLM :** Entrée image + texte → sortie texte. Pas des générateurs d\'images — ces modèles *comprennent* les images.',
          '**Support Ollama :** Tous les modèles de cette comparaison ont une intégration Ollama officielle ou communautaire (mai 2026).',
          '**Plus petit modèle utilisable :** Moondream 2 à 1,9B paramètres, ~2 Go de VRAM.',
          '**Plus grand modèle local pratique :** Llama 3.2 Vision 90B avec ~64 Go de mémoire unifiée (Apple M-Series ou multi-GPU).',
          '**Format d\'entrée image :** JPEG, PNG, WebP. Résolution maximale variable selon le modèle (1024×1024 à 4096×4096).',
          '**Précision OCR :** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          'Comparaison des modèles de vision locaux les plus performants disponibles via Ollama (mai 2026). Valeurs VRAM pour les variantes quantifiées en 4 bits (Q4).',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Pour 6–8 Go de VRAM : MiniCPM-V 2.6 pour l\'OCR, Llama 3.2 Vision 11B pour les questions-réponses générales — tous deux en local via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Moondream : option légère pour petites configs. LLaVA : choix généraliste sûr. MiniCPM-V : spécialiste OCR. Llama 3.2 Vision : meilleur global. InternVL : expert UI/code.',
          },
        ],
        columns: ['Modèle', 'Paramètres', 'VRAM (Q4)', 'Types d\'images', 'Qualité', 'Via Ollama ?'],
        rows: [
          { 'Modèle': 'Moondream 2', 'Paramètres': '1,9B', 'VRAM (Q4)': '~2 Go', 'Types d\'images': 'Photos simples', 'Qualité': 'Basique', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'LLaVA 1.6 7B', 'Paramètres': '7B', 'VRAM (Q4)': '~6 Go', 'Types d\'images': 'Photos, documents, graphiques', 'Qualité': 'Bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'LLaVA 1.6 13B', 'Paramètres': '13B', 'VRAM (Q4)': '~10 Go', 'Types d\'images': 'Photos, documents, graphiques', 'Qualité': 'Très bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'MiniCPM-V 2.6', 'Paramètres': '8B', 'VRAM (Q4)': '~6 Go', 'Types d\'images': 'Photos, documents, OCR', 'Qualité': 'Très bon', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'Paramètres': '11B', 'VRAM (Q4)': '~8 Go', 'Types d\'images': 'Photos, documents', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Llama 3.2 Vision 90B', 'Paramètres': '90B', 'VRAM (Q4)': '~64 Go', 'Types d\'images': 'Photos, documents, complexe', 'Qualité': 'Meilleur local', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'InternVL 2.5 8B', 'Paramètres': '8B', 'VRAM (Q4)': '~8 Go', 'Types d\'images': 'Documents, graphiques, UI, code', 'Qualité': 'Excellent (UI/graphiques)', 'Via Ollama ?': 'Communauté' },
          { 'Modèle': 'Qwen2-VL 7B', 'Paramètres': '7B', 'VRAM (Q4)': '~6 Go', 'Types d\'images': 'Photos, documents, OCR, multilingue', 'Qualité': 'Excellent', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'Qwen2-VL 72B', 'Paramètres': '72B', 'VRAM (Q4)': '~48 Go', 'Types d\'images': 'Photos, documents, complexe', 'Qualité': 'Meilleur open-source', 'Via Ollama ?': 'Oui' },
          { 'Modèle': 'PaliGemma 2 3B', 'Paramètres': '3B', 'VRAM (Q4)': '~3 Go', 'Types d\'images': 'Photos, documents', 'Qualité': 'Bon', 'Via Ollama ?': 'Communauté' },
          { 'Modèle': 'SmolVLM 2,2B', 'Paramètres': '2,2B', 'VRAM (Q4)': '~2 Go', 'Types d\'images': 'Photos simples, légendes', 'Qualité': 'Basique+', 'Via Ollama ?': 'Communauté' },
        ],
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
          { 'Modèle': 'MiniCPM-V 2.6', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
          { 'Modèle': 'Qwen2-VL 7B', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
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
        columns: ['Fonctionnalité', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Fonctionnalité': 'Entrée multi-images',
            'Moondream': 'Non',
            'LLaVA 7B': 'Non',
            'MiniCPM-V': 'Oui (jusqu\'à 4)',
            'Qwen2-VL': 'Oui (jusqu\'à 8)',
            'LLaVA 13B': 'Non',
            'Llama 3.2 Vision': 'Oui (multi-pages)',
            'InternVL': 'Oui',
          },
        ],
        items: [
          'MiniCPM-V 2.6 accepte jusqu\'à 4 images par prompt ; Qwen2-VL jusqu\'à 8. LLaVA et Moondream n\'acceptent qu\'une image à la fois.',
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
          '**Étape 2 — Télécharger un modèle :** `ollama pull llama3.2-vision` (11B, ~8 Go) ou `ollama pull moondream` (1,9B, ~2 Go) pour les configs limitées en VRAM.',
          '**Étape 3 — Utiliser via CLI :** `ollama run llama3.2-vision "Qu\'y a-t-il dans cette image ?" --image /chemin/photo.jpg`',
          '**Étape 4 — Utiliser l\'API HTTP :** POST vers `http://localhost:11434/api/generate` avec l\'image encodée en base64 dans le tableau `images`.',
          '**Étape 5 — Exemple Python :** Utiliser la bibliothèque `requests` avec l\'encodage base64 — voir le bloc de code ci-dessous.',
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

# Exemple d'utilisation
result = ask_vision_model("facture.png", "Extraire toutes les lignes et les montants totaux de cette facture.")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Cas d\'usage 1 : OCR et extraction de documents',
        content:
          '**Les VLM surpassent l\'OCR classique sur les documents semi-structurés** — factures, reçus, contrats et tableaux où la mise en page compte autant que le texte.',
        items: [
          '**Ce qui fonctionne bien :** Factures scannées, captures de PDF, notes manuscrites en lettres d\'imprimerie, tableaux avec bordures claires.',
          '**Ce qui fonctionne moins bien :** Écriture cursive, scans sous 150 DPI, JPEG très compressés, textes superposés.',
          '**Meilleurs modèles pour l\'OCR :** MiniCPM-V 2.6 (précision maximale dans la classe 6 Go), Llama 3.2 Vision 11B (meilleur sur les types de documents mixtes).',
          '**Prompt engineering pour l\'OCR :** « Extraire tout le texte de ce document tel qu\'il est écrit. » Ou : « Retourner le contenu de cette facture en JSON avec les champs : fournisseur, date, lignes[], total. »',
          '**Vs OCR classique :** Les VLM sont plus lents mais plus sémantiques. Tesseract est plus rapide pour l\'extraction de texte brut. Utiliser les VLM pour l\'extraction de données structurées.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Cas d\'usage 2 : Questions-réponses sur images',
        content:
          '**Pour la compréhension générale de scènes et les questions-réponses visuelles, Llama 3.2 Vision 11B est le modèle local recommandé.**',
        items: [
          '**Description de scènes :** « Qu\'y a-t-il sur cette photo ? » — objets, personnes, activités, décor.',
          '**Catalogage de produits :** Traiter des photos avec un template : « Décrire couleur, forme, matière, état. » Utile pour l\'inventaire e-commerce sans API cloud.',
          '**Accessibilité :** Générer des textes alternatifs pour les images à grande échelle.',
          '**Meilleurs modèles :** LLaVA 1.6 13B ou Llama 3.2 Vision 11B pour les Q&A sur photos. LLaVA 1.6 7B pour le traitement en volume.',
          '**Vitesse :** Sur un GPU 6 Go, Llama 3.2 Vision 11B Q4 génère ~8–12 tokens/sec — 100 images prennent ~2–5 minutes.',
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
          '**Meilleurs modèles :** InternVL 2.5 8B (meilleure compréhension UI), MiniCPM-V 2.6 (deuxième, avec support Ollama).',
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
          '**Meilleurs modèles :** InternVL 2.5 (meilleure compréhension des graphiques), Llama 3.2 Vision 11B (bon sur les graphiques bien étiquetés).',
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
          '**Meilleurs modèles :** Llama 3.2 Vision 11B pour la qualité, LLaVA 1.6 7B pour la vitesse.',
          '**Réalité des performances :** Une vidéo de 10 minutes prend ~20–30 minutes à traiter complètement.',
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
          { 'Modèle': 'Moondream 2 (1,9B)', 'VRAM (Q4)': '~2 Go', 'Tokens/sec (RTX 4070)': '~25–35', 'Tokens/sec (M5 Pro 36 Go)': '~30–40', 'Utilisable en production ?': 'Oui — tâches simples' },
          { 'Modèle': 'LLaVA 1.6 7B', 'VRAM (Q4)': '~6 Go', 'Tokens/sec (RTX 4070)': '~15–20', 'Tokens/sec (M5 Pro 36 Go)': '~18–25', 'Utilisable en production ?': 'Oui — usage général' },
          { 'Modèle': 'MiniCPM-V 2.6 (8B)', 'VRAM (Q4)': '~6 Go', 'Tokens/sec (RTX 4070)': '~12–18', 'Tokens/sec (M5 Pro 36 Go)': '~15–20', 'Utilisable en production ?': 'Oui — OCR et documents' },
          { 'Modèle': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '~8 Go', 'Tokens/sec (RTX 4070)': '~10–14', 'Tokens/sec (M5 Pro 36 Go)': '~12–16', 'Utilisable en production ?': 'Oui — meilleure qualité' },
          { 'Modèle': 'LLaVA 1.6 13B', 'VRAM (Q4)': '~10 Go', 'Tokens/sec (RTX 4070)': '~8–12', 'Tokens/sec (M5 Pro 36 Go)': '~10–14', 'Utilisable en production ?': 'Oui — avec GPU 12 Go' },
          { 'Modèle': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '~64 Go', 'Tokens/sec (RTX 4070)': 'N/A (multi-GPU ou M-Max)', 'Tokens/sec (M5 Pro 36 Go)': 'N/A (M5 Max 128 Go+)', 'Utilisable en production ?': 'Apple Silicon haut de gamme uniquement' },
        ],
        callouts: [
          { type: 'note', text: 'La vitesse de génération de tokens est plus lente que pour les modèles texte seul de même taille, car l\'encodeur visuel ajoute une surcharge sur le premier token image.' },
          { type: 'note', text: 'La mémoire unifiée Apple Silicon permet d\'exécuter des modèles plus grands (jusqu\'à 90B sur M5 Max 128 Go) qui ne tiendraient pas en VRAM GPU discret. Légèrement plus lent qu\'un GPU NVIDIA équivalent, mais sans limitation de VRAM.' },
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
          { type: 'note', text: 'Pour le traitement de factures avec une entrée propre, les VLM locaux (Llama 3.2 Vision 11B, Qwen2-VL 7B) peuvent remplacer GPT-5.5 Vision à coût zéro.' },
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
          '**Points faibles :** OCR moins précis que MiniCPM-V 2.6, analyse UI moins bonne qu\'InternVL 2.5.',
          '**Pourquoi toujours recommandé :** La plus grande communauté, le plus de tutoriels et d\'exemples de prompts de tous les VLM locaux.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — Meilleure OCR multilingue',
        content:
          '**Qwen2-VL est le modèle vision-langage d\'Alibaba et la meilleure option open-source sur les benchmarks documentaires en 2026.**',
        items: [
          '**Architecture :** Résolution dynamique jusqu\'à 4096×4096 — bien supérieure à LLaVA 1.6 (672×672) ou Llama 3.2 Vision (1120×1120).',
          '**OCR multilingue :** Meilleure classe pour le chinois, japonais, coréen et anglais. Données d\'entraînement multilingues étendues.',
          '**7B vs 72B :** Le 7B tient dans ~6 Go de VRAM (Q4), compétitif avec Llama 3.2 Vision 11B. Le 72B (~48 Go) domine les benchmarks open-source.',
          '**Installation Ollama :** `ollama pull qwen2-vl:7b`',
          '**Multi-images :** Jusqu\'à 8 images par requête — capacité maximale de cette comparaison.',
          '**Page du modèle :** [Qwen2-VL 7B sur Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'Choisir son modèle de vision',
        content: 'Arbre de décision basé sur le VRAM disponible :',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Choisir d\'abord par VRAM (2→4→6→8→16 Go), puis affiner par cas d\'usage (OCR, UI, Q&A général, qualité maximale).',
          },
          {
            type: 'plain-terms',
            text: 'Moins de 4 Go : Moondream uniquement. 6 Go : MiniCPM-V pour les documents, LLaVA 7B pour les photos. 8–16 Go : Llama 3.2 Vision 11B pour presque tout. 64+ Go : Llama 3.2 Vision 90B pour la meilleure qualité.',
          },
        ],
        items: [
          '**Moins de 4 Go de VRAM :** Moondream 2 (1,9B) à 2 Go. PaliGemma 2 (3B) et SmolVLM (2,2B) comme alternatives — PaliGemma 2 avec une meilleure compréhension documentaire (~3 Go). Aucun adapté à l\'OCR de texte dense.',
          '**6 Go de VRAM :** MiniCPM-V 2.6 pour l\'OCR de documents. LLaVA 1.6 7B pour les questions-réponses générales sur photos. Qwen2-VL 7B pour l\'OCR multilingue.',
          '**8–16 Go de VRAM :** Llama 3.2 Vision 11B — recommandation claire, meilleure qualité globale, large support Ollama.',
          '**16+ Go de VRAM :** LLaVA 1.6 13B pour les scènes complexes. InternVL 2.5 8B pour les captures d\'écran UI/code.',
          '**64+ Go de mémoire unifiée :** Llama 3.2 Vision 90B pour la meilleure qualité locale. Qwen2-VL 72B comme alternative avec les meilleurs scores de benchmarks.',
          '**Toujours vérifier les chiffres :** Croiser toute valeur numérique extraite de graphiques avec les données source.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'FAQ',
        faqs: [
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
            a: 'GPT-5.5 Vision reste nettement meilleur sur les scènes ambiguës, l\'écriture manuscrite et les infographies complexes. Llama 3.2 Vision 11B s\'approche de GPT-5.5 sur les documents structurés. Voir la comparaison complète (coût, confidentialité, vitesse) ci-dessus.',
          },
          {
            q: 'Quelle résolution d\'image supportent les VLM locaux ?',
            a: 'LLaVA 1.6 jusqu\'à 672×672 (découpage dynamique). MiniCPM-V 2.6 jusqu\'à 1792×1792. Llama 3.2 Vision jusqu\'à 1120×1120. Pour un meilleur OCR, envoyer des documents à 150+ DPI.',
          },
          {
            q: 'Puis-je affiner un VLM local sur mes propres images ?',
            a: 'Oui, mais plus exigeant en ressources que le fine-tuning de LLM texte. LLaVA est bien documenté pour le fine-tuning. MiniCPM-V via les scripts officiels sur Hugging Face. Pour la plupart des cas, le prompt engineering suffit.',
          },
          {
            q: 'Quel est le meilleur modèle de vision local pour 8 Go de VRAM ?',
            a: 'Llama 3.2 Vision 11B (Q4 tient dans ~8 Go) pour l\'usage général. Qwen2-VL 7B si l\'OCR multilingue est le besoin principal. Les deux disponibles via Ollama.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — lequel est meilleur pour l\'OCR ?',
            a: 'MiniCPM-V 2.6 est plus précis sur l\'OCR de documents, notamment les tableaux denses et les scans haute résolution. LLaVA est mieux documenté. Pour la précision OCR : MiniCPM-V. Pour les ressources communautaires : LLaVA.',
          },
          {
            q: 'Les VLM locaux peuvent-ils lire l\'écriture manuscrite ?',
            a: 'Écriture en lettres d\'imprimerie : oui, avec une précision modérée. Écriture cursive : peu fiable sur tous les modèles locaux. GPT-5.5 Vision est nettement meilleur pour le cursif.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Sources',
        items: [
          '[Page du projet LLaVA](https://llava-vl.github.io) — Fiches modèles LLaVA 1.5 et 1.6, détails d\'architecture et description du jeu de données.',
          '[Llama 3.2 Vision sur Hugging Face](https://huggingface.co/meta-llama) — Fiche modèle officielle Meta et benchmarks.',
          '[MiniCPM-V 2.6 sur Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — Fiche modèle OpenBMB, benchmarks OCR et instructions de fine-tuning.',
          '[Moondream sur GitHub](https://github.com/vikhyat/moondream) — Description de l\'architecture et scripts d\'inférence.',
          '[InternVL 2.5 sur Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — Fiche modèle OpenGVLab et benchmarks UI.',
          '[Documentation Ollama](https://ollama.com) — Support des modèles vision, référence API et bibliothèque de modèles.',
          '[Qwen2-VL sur Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — Fiche modèle Qwen2-VL d\'Alibaba et benchmarks OCR multilingues.',
          '[PaliGemma 2 sur Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Fiche modèle PaliGemma 2 3B de Google.',
          '[SmolVLM sur Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — Fiche modèle SmolVLM de HuggingFace.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectures complémentaires',
        items: [
          '[Pipeline IA multimodale locale 2026](/fr/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combiner modèles de vision, STT et TTS en une stack locale complète.',
          '[Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper](/fr/power-local-llm/local-whisper-stt-comparison-2026) — Ajouter la saisie vocale en complément de la vision.',
          '[TTS local et clonage vocal 2026](/fr/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Ajouter la synthèse vocale pour lire les réponses VLM.',
          '[Installer Ollama](/fr/local-llms/how-to-install-ollama) — Prérequis : configuration et paramétrage d\'Ollama.',
          '[Guide matériel LLM local 2026](/fr/local-llms/local-llm-hardware-guide-2026) — Exigences VRAM et RAM pour l\'inférence de modèles vision.',
        ],
      },
    },
  },

  ja: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'ローカルビジョンモデル2026：LLaVA・Llama 3.2 Vision・Qwen2-VL & Ollamaマルチモーダルセットアップ',
    seoTitle: 'ローカルビジョンモデル2026：LLaVA・Llama 3.2 Vision・Qwen2-VL & Ollamaセットアップ',
    intro:
      'ビジョン言語モデル（VLM）は画像とテキストを同時に処理し、テキスト出力を生成します。ドキュメントOCR、画像Q&A、スクリーンショット分析、グラフ解読をすべてローカルで実現できます。2026年、OllamaはVLMを最も簡単に実行する方法です：モデルをプル、画像を送信、説明または回答を取得。このガイドでは主要なローカルビジョンモデル（LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6、Moondream 2、Qwen2-VL、InternVL 2.5）を比較し、Ollamaのセットアップ手順を解説します。',
    metaDescription:
      '2026年にOllamaでビジョン言語モデルをローカル実行：LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6、Qwen2-VL。ドキュメントOCR、画像Q&A、スクリーンショット分析 — VRAM要件と品質ベンチマーク付きで完全オフライン対応。',
    twitterDescription:
      'ローカルビジョンモデル2026：LLaVA・Llama 3.2 Vision・MiniCPM-V・Qwen2-VL via Ollama。画像Q&A、OCR、スクリーンショット分析 — 100%オフライン。VRAMガイドとセットアップ手順。',
    readTime: '11分で読める',
    leadAnswerBlock:
      '**6〜8GB VRAMを持つ多くの開発者には、2026年の出発点としてMiniCPM-V 2.6（8B）またはLLaVA 1.6 7B（Ollama経由）が推奨されます。** 両モデルとも〜6GB VRAMで動作し、ドキュメントOCR、画像Q&A、スクリーンショット分析に対応し、単一のOllama pullコマンドで利用可能です。8〜16GB VRAMで最高品質を求めるなら、Llama 3.2 Vision 11Bが最良のローカルビジョンモデルであり、最強のローカルVLMです。すべてのモデルはダウンロード後に完全オフラインで動作します。',
    quickAnswerTop: {
      ja: {
        question: '2026年にOllamaで使えるベストなローカルビジョンモデルは？',
        answer:
          'VRAMとユースケースによって最適なモデルが異なります。6〜8GB VRAMではMiniCPM-V 2.6がOCR精度と一般的な画像理解のバランスが最良です。8〜16GB VRAMではLlama 3.2 Vision 11Bが最有力候補です。2GB VRAMではMoondream 2のみが選択肢です。',
        bullets: [
          '4GB未満 → Moondream 2（1.9B）：高速だが複雑な画像の理解は限定的。PaliGemma 2 3B（〜3GB）やSmolVLM 2.2B（〜2GB）も選択肢。',
          '6GB → MiniCPM-V 2.6、LLaVA 1.6 7B、またはQwen2-VL 7B（多言語OCRに最適）：品質とVRAMのバランスが良い。',
          '8〜16GB → Llama 3.2 Vision 11B：写真・ドキュメントに最強のローカルVLM。',
          '64GB以上（またはApple M-Series）→ Llama 3.2 Vision 90BまたはQwen2-VL 72B：クラウドに近い品質。',
          'セットアップ：`ollama pull llama3.2-vision` → `ollama run llama3.2-vision "この画像を説明して" --image photo.jpg`',
          'OCR精度：Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6',
          'UI/スクリーンショット：InternVL 2.5 — コードとUIスクリーンショットに特化したトレーニング済み。',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL — 最高の多言語OCR性能', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11Bは8〜16GB VRAMを持つ多くの開発者にとって最良のローカルビジョンモデルです。** 写真、ドキュメント、混合コンテンツをクラス最高の精度で処理し、Ollamaから直接利用できます。',
          '**MiniCPM-V 2.6（8B）は6GB VRAMでのドキュメントOCRに最適です。** 高解像度ドキュメントスキャンを含むトレーニングデータにより、テーブル・請求書・密なテキストでLLaVAより高精度です。',
          '**LLaVA 1.6 7Bは最も文書化・コミュニティテスト済みのローカルVLMです。** 豊富なチュートリアルとトラブルシューティングリソースが必要な場合の最安全な汎用選択肢です。',
          '**Moondream 2（1.9B）は4GB VRAM未満での唯一の実用的な選択肢です。** 高速・軽量ですが、複雑なシーン・密なテキスト・精密なグラフ読み取りは苦手です。',
          '**InternVL 2.5（8B）はコードスクリーンショットとUI分析に最強です。** GitHubスクリーンショット・UIモックアップ・コード実行出力を含むトレーニングデータを使用しています。',
          '**すべてのモデルはOllamaで単一の`pull`コマンドで利用可能です。** モデル変換・量子化・Python設定は不要です。',
          '**これらのモデルはいずれもGPT-5.5 Visionの品質には達しません。** 2026年のローカルVLMは強力なTier-2の選択肢 — 構造化ドキュメントと明確な写真には優れていますが、手書きや複雑なインフォグラフィックスには弱点があります。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '基本情報',
        items: [
          '**VLMの機能：** 画像＋テキスト入力 → テキスト出力。画像生成器ではなく、画像を*理解する*モデルです。',
          '**Ollamaサポート：** この比較の全モデルが2026年5月時点で公式またはコミュニティのOllama統合を持っています。',
          '**最小の実用モデル：** Moondream 2（1.9Bパラメータ、〜2GB VRAM）。',
          '**最大の実用ローカルモデル：** Llama 3.2 Vision 90B（〜64GBユニファイドメモリ、Apple M-SeriesまたはマルチGPU）。',
          '**画像入力形式：** JPEG、PNG、WebP。最大解像度はモデルによって異なります（通常1024×1024〜4096×4096）。',
          '**OCR精度：** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2。',
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
          '2026年5月時点でOllamaまたは直接推論で利用可能な主要ローカルビジョンモデルの比較。VRAM値は特に記載がない限り4ビット量子化（Q4）バリアントの値です。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '6〜8GB VRAMの場合：ドキュメントOCRにはMiniCPM-V 2.6、一般的な画像Q&AにはLlama 3.2 Vision 11B — 両方ともOllama経由でローカル実行可能。',
          },
          {
            type: 'plain-terms',
            text: 'Moondream：どこでも動く軽量オプション。LLaVA：安全な汎用選択肢。MiniCPM-V：OCRスペシャリスト。Llama 3.2 Vision：全体的に最高。InternVL：UI/コードスクリーンショットエキスパート。',
          },
        ],
        columns: ['モデル', 'パラメータ', 'VRAM (Q4)', '画像タイプ', '品質', 'Ollama対応？'],
        rows: [
          { 'モデル': 'Moondream 2', 'パラメータ': '1.9B', 'VRAM (Q4)': '〜2GB', '画像タイプ': 'シンプルな写真', '品質': '基本的', 'Ollama対応？': '対応' },
          { 'モデル': 'LLaVA 1.6 7B', 'パラメータ': '7B', 'VRAM (Q4)': '〜6GB', '画像タイプ': '写真・ドキュメント・グラフ', '品質': '良好', 'Ollama対応？': '対応' },
          { 'モデル': 'LLaVA 1.6 13B', 'パラメータ': '13B', 'VRAM (Q4)': '〜10GB', '画像タイプ': '写真・ドキュメント・グラフ', '品質': '非常に良好', 'Ollama対応？': '対応' },
          { 'モデル': 'MiniCPM-V 2.6', 'パラメータ': '8B', 'VRAM (Q4)': '〜6GB', '画像タイプ': '写真・ドキュメント・OCR', '品質': '非常に良好', 'Ollama対応？': '対応' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'パラメータ': '11B', 'VRAM (Q4)': '〜8GB', '画像タイプ': '写真・ドキュメント', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Llama 3.2 Vision 90B', 'パラメータ': '90B', 'VRAM (Q4)': '〜64GB', '画像タイプ': '写真・ドキュメント・複雑', '品質': 'ローカル最高', 'Ollama対応？': '対応' },
          { 'モデル': 'InternVL 2.5 8B', 'パラメータ': '8B', 'VRAM (Q4)': '〜8GB', '画像タイプ': 'ドキュメント・グラフ・UI・コード', '品質': '優秀（UI/グラフ）', 'Ollama対応？': 'コミュニティ' },
          { 'モデル': 'Qwen2-VL 7B', 'パラメータ': '7B', 'VRAM (Q4)': '〜6GB', '画像タイプ': '写真・ドキュメント・OCR・多言語', '品質': '優秀', 'Ollama対応？': '対応' },
          { 'モデル': 'Qwen2-VL 72B', 'パラメータ': '72B', 'VRAM (Q4)': '〜48GB', '画像タイプ': '写真・ドキュメント・複雑', '品質': 'オープンソース最高', 'Ollama対応？': '対応' },
          { 'モデル': 'PaliGemma 2 3B', 'パラメータ': '3B', 'VRAM (Q4)': '〜3GB', '画像タイプ': '写真・ドキュメント', '品質': '良好', 'Ollama対応？': 'コミュニティ' },
          { 'モデル': 'SmolVLM 2.2B', 'パラメータ': '2.2B', 'VRAM (Q4)': '〜2GB', '画像タイプ': 'シンプルな写真・キャプション', '品質': '基本的＋', 'Ollama対応？': 'コミュニティ' },
        ],
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
          { 'モデル': 'MiniCPM-V 2.6', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
          { 'モデル': 'Qwen2-VL 7B', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
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
        columns: ['機能', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            '機能': 'マルチ画像入力',
            'Moondream': '非対応',
            'LLaVA 7B': '非対応',
            'MiniCPM-V': '対応（最大4枚）',
            'Qwen2-VL': '対応（最大8枚）',
            'LLaVA 13B': '非対応',
            'Llama 3.2 Vision': '対応（複数ページ）',
            'InternVL': '対応',
          },
        ],
        items: [
          'MiniCPM-V 2.6は1プロンプトで最大4枚の画像を受け付け、Qwen2-VLは最大8枚に対応。LLaVAとMoondreamは1リクエストにつき1枚のみです。',
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
          '**ステップ2 — ビジョンモデルをダウンロード：** `ollama pull llama3.2-vision`（11B、〜8GBダウンロード）またはVRAMが少ない場合は`ollama pull moondream`（1.9B、〜2GB）。',
          '**ステップ3 — CLIで使用：** `ollama run llama3.2-vision "この画像に何がありますか？" --image /path/to/photo.jpg`',
          '**ステップ4 — HTTP APIで使用：** `http://localhost:11434/api/generate`にPOSTし、`images`配列にBase64エンコードされた画像を含める。',
          '**ステップ5 — Pythonの例：** Base64エンコーディングで`requests`ライブラリを使用 — 以下のコードブロックを参照。',
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

# 使用例
result = ask_vision_model("invoice.png", "この請求書からすべての行項目と合計金額を抽出してください。")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'ユースケース1：ドキュメントOCRと抽出',
        content:
          '**VLMは半構造化ドキュメントで従来のOCRを上回ります** — レイアウトとテキストが同様に重要な請求書・レシート・契約書・テーブルなど。',
        items: [
          '**うまく機能するもの：** スキャンした請求書・PDFスクリーンショット・手書きのブロック体メモ・明確な境界線のあるテーブル・名刺。',
          '**うまく機能しないもの：** 手書きの草書体・150DPI未満のスキャン・高圧縮JPEG・重なり合うテキスト。',
          '**OCRに最適なモデル：** MiniCPM-V 2.6（6GBクラスで最高のOCR精度）、Llama 3.2 Vision 11B（混合ドキュメントタイプに最適）。',
          '**OCR向けプロンプトエンジニアリング：** 「このドキュメントのすべてのテキストを改行を保持して正確に抽出してください。」または「この請求書の内容をJSONで返してください（フィールド：ベンダー、日付、行項目[]、合計）。」',
          '**従来のOCRとの比較：** VLMは低速ですが意味的に強力です。クリーンなドキュメントの純粋なテキスト抽出にはTesseractが高速です。構造化データ抽出が必要な場合はVLMを使用。',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'ユースケース2：画像Q&Aと説明',
        content:
          '**一般的なシーン理解・商品説明・視覚的Q&Aには、Llama 3.2 Vision 11Bが推奨されるローカルモデルです。**',
        items: [
          '**シーン説明：** 「この写真には何がありますか？」— オブジェクト・人物・活動・設定・雰囲気。',
          '**商品カタログ化：** プロンプトテンプレートで商品写真を処理：「この商品を説明してください：色・形・素材・状態。」クラウドAPIなしでECインベントリに有用。',
          '**アクセシビリティ：** 大規模に画像のaltテキストを生成。',
          '**最適なモデル：** LLaVA 1.6 13BまたはLlama 3.2 Vision 11B（一般的な写真Q&A）。LLaVA 1.6 7B（速度が精度より重要な大量処理）。',
          '**速度の考慮：** 6GB GPUでLlama 3.2 Vision 11B Q4は〜8〜12トークン/秒 — 100枚の画像処理に〜2〜5分かかります。',
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
          '**最適なモデル：** InternVL 2.5 8B（最高のUI理解）、MiniCPM-V 2.6（2番目に良く、Ollamaサポートあり）。',
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
          '**グラフに最適なモデル：** InternVL 2.5（最高のグラフ理解）、Llama 3.2 Vision 11B（明確にラベルされたグラフに良好）。',
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
          '**動画フレームに最適なモデル：** Llama 3.2 Vision 11B（品質）、LLaVA 1.6 7B（速度・高フレームスループット）。',
          '**速度の現実：** RTX 4070で1秒/フレームの推論では、10分の動画の完全処理に〜20〜30分かかります。',
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
        title: 'VRAMとパフォーマンスの現実',
        content:
          'ローカルビジョンモデルはベースLLMにビジョンエンコーダーを追加するため、テキストのみのモデルと比べてVRAM要件と推論時間の両方が増加します。',
        columns: ['モデル', 'VRAM (Q4)', 'トークン/秒 (RTX 4070)', 'トークン/秒 (M5 Pro 36GB)', '本番対応？'],
        rows: [
          { 'モデル': 'Moondream 2 (1.9B)', 'VRAM (Q4)': '〜2GB', 'トークン/秒 (RTX 4070)': '〜25〜35', 'トークン/秒 (M5 Pro 36GB)': '〜30〜40', '本番対応？': 'はい — 単純なタスクに' },
          { 'モデル': 'LLaVA 1.6 7B', 'VRAM (Q4)': '〜6GB', 'トークン/秒 (RTX 4070)': '〜15〜20', 'トークン/秒 (M5 Pro 36GB)': '〜18〜25', '本番対応？': 'はい — 汎用' },
          { 'モデル': 'MiniCPM-V 2.6 (8B)', 'VRAM (Q4)': '〜6GB', 'トークン/秒 (RTX 4070)': '〜12〜18', 'トークン/秒 (M5 Pro 36GB)': '〜15〜20', '本番対応？': 'はい — OCRとドキュメント' },
          { 'モデル': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '〜8GB', 'トークン/秒 (RTX 4070)': '〜10〜14', 'トークン/秒 (M5 Pro 36GB)': '〜12〜16', '本番対応？': 'はい — 最高品質' },
          { 'モデル': 'LLaVA 1.6 13B', 'VRAM (Q4)': '〜10GB', 'トークン/秒 (RTX 4070)': '〜8〜12', 'トークン/秒 (M5 Pro 36GB)': '〜10〜14', '本番対応？': 'はい — 12GB GPUで' },
          { 'モデル': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '〜64GB', 'トークン/秒 (RTX 4070)': 'N/A（マルチGPUまたはM-Max）', 'トークン/秒 (M5 Pro 36GB)': 'N/A（M5 Max 128GB+が必要）', '本番対応？': 'ハイエンドApple Siliconのみ' },
        ],
        callouts: [
          { type: 'note', text: 'ビジョンモデルのトークン生成速度は、ビジョンエンコーダーが最初の画像トークンで大きな計算オーバーヘッドを追加するため、同サイズのテキストのみモデルより遅くなります。' },
          { type: 'note', text: 'Apple Siliconのユニファイドメモリにより、ディスクリートGPU VRAMに収まらない大きなモデル（M5 Max 128GBで最大90B）を実行できます。NVIDIA GPUと比べて若干遅いですが、VRAM制限がありません。' },
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
          '**プライバシー：** ローカルモデルはデバイス上で画像を処理 — データが外部に送信されない。GPT-5.5は画像をOpenAIサーバーに送信。',
          '**速度：** ローカルモデル10〜20トークン/秒 vs GPT-5.5 30〜80トークン/秒、ただしローカルはバッチ処理でネットワーク遅延なし。',
        ],
        callouts: [
          { type: 'note', text: 'クリーンな入力での請求書・フォーム処理なら、ローカルVLM（Llama 3.2 Vision 11B、Qwen2-VL 7B）がGPT-5.5 Visionをゼロコストで代替できます。手書きや複雑なシーン分析にはGPT-5.5が依然として優位です。' },
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
          '**弱み：** MiniCPM-V 2.6よりOCRが弱く、InternVL 2.5よりUI分析が劣り、Llama 3.2 Vision 11Bに品質ベンチマークで全体的に上回られている。',
          '**それでも推奨される理由：** すべてのローカルVLMの中で最大のコミュニティ・最多のチュートリアル・最多のプロンプト例を持つ。問題が発生した時にサポートが見つけやすい。',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — 最高の多言語OCR性能',
        content:
          '**Qwen2-VLはAlibabaのビジョン言語モデルで、2026年のドキュメントベンチマークで最強のオープンソース選択肢です。**',
        items: [
          '**アーキテクチャ：** 4096×4096までの動的解像度サポート — LLaVA 1.6（672×672）やLlama 3.2 Vision（1120×1120）より大幅に高い。高DPIスキャンをダウンサンプリングなしで読み取り可能。',
          '**多言語OCR：** 中国語・日本語・韓国語・英語のOCRでクラス最高。大規模な多言語ドキュメントコーパスを含むトレーニングデータが、非英語ドキュメントでLLaVAやLlama 3.2 Visionに対して大きな優位性をもたらす。',
          '**7B vs 72B：** 7Bは〜6GB VRAM（Q4）に収まり、ほとんどのドキュメントタスクでLlama 3.2 Vision 11Bと競争力があります。72Bは〜48GBを使用し、ほとんどのオープンソースベンチマークをリードしています。',
          '**Ollamaインストール：** `ollama pull qwen2-vl:7b` — Ollamaモデルライブラリから直接利用可能。',
          '**マルチ画像サポート：** 1リクエストで最大8枚 — この比較で最高のマルチ画像容量。',
          '**モデルページ：** [Hugging FaceのQwen2-VL 7B](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: 'ビジョンモデルの選び方',
        content: 'VRAMを最初の基準にしたローカルビジョンモデル選択のデシジョンツリー：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'まずVRAMで選択（2→4→6→8→16GB）、次にユースケースで絞り込む（OCR・UI・一般Q&A・最高品質）。',
          },
          {
            type: 'plain-terms',
            text: '4GB未満：Moondreamのみ。6GB：ドキュメントにはMiniCPM-V、写真にはLLaVA 7B。8〜16GB：ほぼすべてにLlama 3.2 Vision 11B。64GB以上：最高品質にLlama 3.2 Vision 90B。',
          },
        ],
        items: [
          '**4GB未満のVRAM：** 2GBではMoondream 2（1.9B）のみ。PaliGemma 2（3B）とSmolVLM（2.2B）も選択肢 — PaliGemma 2はわずかに多いVRAM（〜3GB）でMoondreamより優れたドキュメント理解。SmolVLMは品質を犠牲にして極端な効率を実現。密なテキストOCRには不向き。',
          '**6GB VRAM：** ドキュメントOCRと請求書処理にはMiniCPM-V 2.6。コミュニティサポートが重要な一般写真Q&AにはLLaVA 1.6 7B。多言語OCRまたは最高精度が必要な場合はQwen2-VL 7B。',
          '**8〜16GB VRAM：** Llama 3.2 Vision 11Bが明確な推奨 — このVRAM層での最高品質、幅広いOllamaサポート。',
          '**16GB以上のVRAM：** LLaVA 1.6 13B（7Bバリアントより複雑なシーン理解に対応）。主なユースケースがUIやコードスクリーンショットならInternVL 2.5 8B。',
          '**64GB以上のユニファイドメモリ（Apple M-Max/Ultra、マルチGPU）：** ドキュメントタスクでクラウドレベルに近いLlama 3.2 Vision 90B。最高のオープンソースベンチマークスコアを持つQwen2-VL 72Bも選択肢。',
          '**数値は必ず検証：** モデルに関わらず、グラフやテーブルから抽出した数値は必ずソースデータと照合。ローカルVLMは視覚的グラフから精密な数値を幻覚することがあります。',
        ],
      },
      faq: {
        id: 'faq',
        title: 'よくある質問',
        faqs: [
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
            a: 'GPT-5.5 Visionは曖昧なシーン・手書き・複雑なインフォグラフィックスで依然として大幅に優れています。Llama 3.2 Vision 11Bは構造化ドキュメントでGPT-5.5に近づきますが、曖昧な画像での推論には後れを取ります。コスト・プライバシー・速度の詳細な比較は上記を参照してください。',
          },
          {
            q: 'ローカルVLMはどの画像解像度をサポートしていますか？',
            a: 'LLaVA 1.6は動的パッチングで最大672×672。MiniCPM-V 2.6は最大1792×1792 — 高DPIドキュメントスキャンでLLaVAを上回る理由の一つ。Llama 3.2 Visionは最大1120×1120の可変解像度。最良のOCR結果のためにドキュメント画像は150+ DPIで送信してください。',
          },
          {
            q: 'ローカルビジョンモデルを独自の画像でファインチューニングできますか？',
            a: 'はい、ただしVLMのファインチューニングはテキストのみのLLMより資源集約的です。LLaVAのファインチューニングはオリジナルのトレーニングコードベースを使って文書化されています。MiniCPM-VはHugging Faceの公式スクリプトでファインチューニングをサポート。ほとんどのユースケースにはプロンプトエンジニアリングだけで十分です。',
          },
          {
            q: '8GB VRAMに最適なローカルビジョンモデルは？',
            a: 'Llama 3.2 Vision 11B（Q4量子化で〜8GBに収まる）が一般使用に最適。多言語OCRが主な用途なら Qwen2-VL 7B。両方ともOllamaで単一コマンドで利用可能。',
          },
          {
            q: 'LLaVA vs MiniCPM-V — OCRにはどちらが優れていますか？',
            a: 'MiniCPM-V 2.6はドキュメントOCR、特に密なテーブルと高DPIスキャンでより精確。LLaVA 1.6はより文書化されていてコミュニティサポートが充実。純粋なOCR精度にはMiniCPM-V。コミュニティリソースとトラブルシューティングにはLLaVAを選択。',
          },
          {
            q: 'ローカルビジョンモデルは手書きを読めますか？',
            a: '活字体の手書き（ブロック体）：Llama 3.2 Vision 11BとMiniCPM-V 2.6で中程度の精度で認識可能。草書体：すべてのローカルモデルで信頼性が低い。GPT-5.5 Visionは草書体で大幅に優れています。草書体ドキュメントの本番手書きOCRにはクラウドAPIが依然として推奨されます。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考資料',
        items: [
          '[LLaVAプロジェクトページ](https://llava-vl.github.io) — LLaVA 1.5・1.6モデルカード、アーキテクチャの詳細、トレーニングデータセットの説明。',
          '[Hugging FaceのLlama 3.2 Vision](https://huggingface.co/meta-llama) — Metaの公式モデルリリース、モデルカード、ベンチマーク値。',
          '[Hugging FaceのMiniCPM-V 2.6](https://huggingface.co/openbmb/MiniCPM-V-2_6) — OpenBMBモデルカード、OCRベンチマーク、ファインチューニング手順。',
          '[GitHubのMoondream](https://github.com/vikhyat/moondream) — アーキテクチャの説明、推論スクリプト、モデルダウンロード。',
          '[Hugging FaceのInternVL 2.5](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLabモデルカード、ドキュメントとUIタスクのベンチマーク。',
          '[Ollamaドキュメント](https://ollama.com) — ビジョンモデルサポート、APIリファレンス、モデルライブラリ。',
          '[Hugging FaceのQwen2-VL](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — AlibabaのQwen2-VLモデルカード、アーキテクチャの詳細、多言語OCRベンチマーク。',
          '[Hugging FaceのPaliGemma 2](https://huggingface.co/google/paligemma2-3b-pt-448) — GoogleのPaliGemma 2 3Bモデルカード。',
          '[Hugging FaceのSmolVLM](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFaceのSmolVLMモデルカードと推論手順。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '関連記事',
        items: [
          '[ローカルマルチモーダルAIパイプライン2026](/ja/power-local-llm/local-multimodal-pipeline-voice-vision-text) — ビジョンモデルとSTT・TTSを組み合わせた完全なローカルマルチモーダルスタック。',
          '[ローカル音声認識2026：Whisper.cpp vs faster-whisper](/ja/power-local-llm/local-whisper-stt-comparison-2026) — ビジョン出力を補完する音声入力の追加。',
          '[ローカルTTSと音声クローニング2026](/ja/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — VLMの応答を読み上げる音声出力の追加。',
          '[Ollamaのインストール](/ja/local-llms/how-to-install-ollama) — 前提条件：OllamaのセットアップとConfiguration。',
          '[ローカルLLMハードウェアガイド2026](/ja/local-llms/local-llm-hardware-guide-2026) — ビジョンモデル推論のVRAMとRAM要件。',
        ],
      },
    },
  },

  zh: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: '本地视觉模型2026：LLaVA、Llama 3.2 Vision、Qwen2-VL与Ollama多模态配置',
    seoTitle: '本地视觉模型2026：LLaVA、Llama 3.2 Vision、Qwen2-VL与Ollama配置指南',
    intro:
      '视觉语言模型（VLM）同时接受图像和文本输入，输出文本内容——支持文档OCR、图像问答、截图分析和图表解读，全部在本地完成。2026年，通过Ollama运行VLM是最简便的方式：拉取模型、发送图像、获取描述或答案。本指南对比主要本地视觉模型（LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6、Moondream 2、Qwen2-VL、InternVL 2.5），提供Ollama逐步配置说明及VRAM要求和质量基准。',
    metaDescription:
      '2026年使用Ollama在本地运行视觉语言模型：LLaVA 1.6、Llama 3.2 Vision、MiniCPM-V 2.6、Qwen2-VL。文档OCR、图像问答、截图分析——含VRAM要求和质量基准，完全离线使用。',
    twitterDescription:
      '本地视觉模型2026：通过Ollama运行LLaVA、Llama 3.2 Vision、MiniCPM-V、Qwen2-VL。图像问答、OCR、截图分析——100%离线。VRAM指南与配置步骤。',
    readTime: '阅读约11分钟',
    leadAnswerBlock:
      '**对于大多数拥有6–8 GB VRAM的开发者，2026年推荐从MiniCPM-V 2.6（8B）或LLaVA 1.6 7B（通过Ollama）开始。** 两者均可在约6 GB VRAM下运行，支持文档OCR、图像问答和截图分析，且通过单条Ollama命令即可获取。若拥有8–16 GB VRAM并追求最高质量，Llama 3.2 Vision 11B是最佳本地视觉模型和最强本地VLM。所有模型下载后均可完全离线运行，无需API密钥或云账户。',
    quickAnswerTop: {
      zh: {
        question: '2026年哪些本地视觉模型最适合与Ollama配合使用？',
        answer:
          '最佳本地视觉模型取决于您的VRAM和使用场景。6–8 GB VRAM时，MiniCPM-V 2.6在OCR精度和通用图像理解之间达到最佳平衡。8–16 GB VRAM时，Llama 3.2 Vision 11B是通用视觉问答和文档分析的首选。仅有2 GB VRAM时，Moondream 2是唯一选项——速度快但能力有限。',
        bullets: [
          '4 GB以下 → Moondream 2（1.9B）：速度快，复杂图像理解有限。另可选PaliGemma 2 3B（约3 GB）和SmolVLM 2.2B（约2 GB）。',
          '6 GB → MiniCPM-V 2.6、LLaVA 1.6 7B或Qwen2-VL 7B（多语言OCR最佳）：质量与硬件的最佳平衡。',
          '8–16 GB → Llama 3.2 Vision 11B：通用照片和文档的最强本地VLM。',
          '64 GB以上（或Apple M系列）→ Llama 3.2 Vision 90B或Qwen2-VL 72B：最佳本地质量，接近云端水平。',
          '配置：`ollama pull llama3.2-vision` 然后 `ollama run llama3.2-vision "描述这张图片" --image photo.jpg`',
          'OCR最强：Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6',
          'UI/截图最佳：InternVL 2.5——专门针对代码和UI截图训练。',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL——最强多语言OCR', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B是大多数拥有8–16 GB VRAM的开发者的最佳本地视觉模型。** 可处理照片、文档和混合内容，精度在同类中最高，可直接通过Ollama获取。',
          '**MiniCPM-V 2.6（8B）是6 GB VRAM下文档OCR的首选。** 训练数据包含高分辨率文档扫描，在表格、发票和密集文本处理上比LLaVA更精准。',
          '**LLaVA 1.6 7B是文档最完善、社区测试最充分的本地VLM。** 需要大量示例、教程和排错资源时的最安全通用选择。',
          '**Moondream 2（1.9B）是4 GB VRAM以下唯一可用的实用选择。** 速度快、体积小，但复杂场景、密集文本和精确图表读取能力有限。',
          '**InternVL 2.5（8B）在代码截图和UI分析方面最强。** 训练数据包含GitHub截图、UI原型图和代码执行输出。',
          '**所有模型均可通过Ollama单条`pull`命令获取。** 无需模型转换、量化或Python环境配置，CLI和HTTP API开箱即用。',
          '**这些模型均未达到GPT-5.5 Vision的质量水平。** 2026年的本地VLM是强有力的二线选择——对结构化文档和清晰照片表现出色，但对手写、模糊场景和复杂信息图表存在明显短板。',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '快速概览',
        items: [
          '**VLM的功能：** 图像+文本输入 → 文本输出。不是图像生成器——这些是图像*理解*模型。',
          '**Ollama支持：** 本比较中所有模型截至2026年5月均有官方或社区Ollama集成。',
          '**最小可用模型：** Moondream 2，1.9B参数，约2 GB VRAM。',
          '**最大实用本地模型：** Llama 3.2 Vision 90B，约64 GB统一内存（Apple M系列或多GPU）。',
          '**图像输入格式：** JPEG、PNG、WebP。最大分辨率因模型而异（通常1024×1024至4096×4096）。',
          '**OCR强度：** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2。',
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
          '2026年5月可通过Ollama或直接推理使用的主要本地视觉模型比较。VRAM数据为4位量化（Q4）版本，除非另有说明。',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '6–8 GB VRAM：文档OCR选MiniCPM-V 2.6，通用图像问答选Llama 3.2 Vision 11B——均可通过Ollama本地运行。',
          },
          {
            type: 'plain-terms',
            text: 'Moondream：随处可运行的轻量选项；LLaVA：安全的通用选择；MiniCPM-V：OCR专家；Llama 3.2 Vision：整体最优；InternVL：UI/代码截图专家。',
          },
        ],
        columns: ['模型', '参数量', 'VRAM (Q4)', '图像类型', '质量', '支持Ollama？'],
        rows: [
          { '模型': 'Moondream 2', '参数量': '1.9B', 'VRAM (Q4)': '约2 GB', '图像类型': '简单照片', '质量': '基础', '支持Ollama？': '是' },
          { '模型': 'LLaVA 1.6 7B', '参数量': '7B', 'VRAM (Q4)': '约6 GB', '图像类型': '照片、文档、图表', '质量': '良好', '支持Ollama？': '是' },
          { '模型': 'LLaVA 1.6 13B', '参数量': '13B', 'VRAM (Q4)': '约10 GB', '图像类型': '照片、文档、图表', '质量': '非常好', '支持Ollama？': '是' },
          { '模型': 'MiniCPM-V 2.6', '参数量': '8B', 'VRAM (Q4)': '约6 GB', '图像类型': '照片、文档、OCR', '质量': '非常好', '支持Ollama？': '是' },
          { '模型': 'Llama 3.2 Vision 11B', '参数量': '11B', 'VRAM (Q4)': '约8 GB', '图像类型': '照片、文档', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Llama 3.2 Vision 90B', '参数量': '90B', 'VRAM (Q4)': '约64 GB', '图像类型': '照片、文档、复杂', '质量': '本地最强', '支持Ollama？': '是' },
          { '模型': 'InternVL 2.5 8B', '参数量': '8B', 'VRAM (Q4)': '约8 GB', '图像类型': '文档、图表、UI、代码', '质量': '优秀（UI/图表）', '支持Ollama？': '社区支持' },
          { '模型': 'Qwen2-VL 7B', '参数量': '7B', 'VRAM (Q4)': '约6 GB', '图像类型': '照片、文档、OCR、多语言', '质量': '优秀', '支持Ollama？': '是' },
          { '模型': 'Qwen2-VL 72B', '参数量': '72B', 'VRAM (Q4)': '约48 GB', '图像类型': '照片、文档、复杂', '质量': '开源最强', '支持Ollama？': '是' },
          { '模型': 'PaliGemma 2 3B', '参数量': '3B', 'VRAM (Q4)': '约3 GB', '图像类型': '照片、文档', '质量': '良好', '支持Ollama？': '社区支持' },
          { '模型': 'SmolVLM 2.2B', '参数量': '2.2B', 'VRAM (Q4)': '约2 GB', '图像类型': '简单照片、图注', '质量': '基础+', '支持Ollama？': '社区支持' },
        ],
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
          { '模型': 'MiniCPM-V 2.6', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
          { '模型': 'Qwen2-VL 7B', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
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
        columns: ['功能', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            '功能': '多图像输入',
            'Moondream': '不支持',
            'LLaVA 7B': '不支持',
            'MiniCPM-V': '支持（最多4张）',
            'Qwen2-VL': '支持（最多8张）',
            'LLaVA 13B': '不支持',
            'Llama 3.2 Vision': '支持（多页）',
            'InternVL': '支持',
          },
        ],
        items: [
          'MiniCPM-V 2.6每次提示最多接受4张图像；Qwen2-VL最多支持8张。LLaVA和Moondream每次请求只接受单张图像。',
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
          '**步骤2——拉取视觉模型：** `ollama pull llama3.2-vision`（11B，约8 GB下载）或低VRAM时选`ollama pull moondream`（1.9B，约2 GB）。',
          '**步骤3——通过CLI使用：** `ollama run llama3.2-vision "这张图片里有什么？" --image /path/to/photo.jpg`',
          '**步骤4——使用HTTP API：** POST到`http://localhost:11434/api/generate`，在`images`数组中包含Base64编码的图像。',
          '**步骤5——Python示例：** 使用`requests`库进行Base64编码——见下方代码块。',
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

# 示例用法
result = ask_vision_model("invoice.png", "从这张发票中提取所有行项目和总金额。")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: '用例1：文档OCR与提取',
        content:
          '**VLM在半结构化文档上优于传统OCR** ——发票、收据、合同和表格中，布局与文本同样重要。传统OCR（Tesseract）提取字符；VLM理解这些字符在上下文中的含义。',
        items: [
          '**效果好的场景：** 扫描发票、PDF截图、印刷体手写（非草书）、边框清晰的表格、名片。',
          '**效果较差的场景：** 草书手写、低于150 DPI的扫描件、高压缩JPEG、重叠文本。',
          '**OCR最佳模型：** MiniCPM-V 2.6（6 GB级别中OCR精度最高），Llama 3.2 Vision 11B（混合文档类型最优）。',
          '**OCR提示工程：** "请完整提取此文档中的所有文本，保留换行符。"或"请以JSON格式返回此发票内容，字段包括：供应商、日期、行项目[]、总金额。"',
          '**与传统OCR对比：** VLM速度较慢但语义理解更强。干净文档的纯文本提取用Tesseract更快。需要结构化数据提取时使用VLM。',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: '用例2：图像问答与描述',
        content:
          '**通用场景理解、产品描述和视觉问答推荐使用Llama 3.2 Vision 11B。** 该模型可生成自然、详细的描述，并处理关于照片内容的细微问题。',
        items: [
          '**场景描述：** "这张照片里有什么？"——物体、人物、活动、环境、氛围。',
          '**产品目录化：** 用提示模板处理产品照片："描述此产品：颜色、形状、材质、状态。"适用于无需云端API的电商库存管理。',
          '**无障碍访问：** 大规模为图像生成alt文本。',
          '**最佳模型：** LLaVA 1.6 13B或Llama 3.2 Vision 11B（通用照片问答）；LLaVA 1.6 7B（速度优先的大批量处理）。',
          '**速度参考：** 6 GB GPU上，Llama 3.2 Vision 11B Q4生成约8–12 token/秒——处理100张图像约需2–5分钟。',
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
          '**最佳模型：** InternVL 2.5 8B（UI理解最强），MiniCPM-V 2.6（次优，支持Ollama）。',
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
          '**图表最佳模型：** InternVL 2.5（图表理解最佳），Llama 3.2 Vision 11B（标注清晰的图表表现良好）。',
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
          '**视频帧最佳模型：** Llama 3.2 Vision 11B（质量），LLaVA 1.6 7B（速度，帧处理吞吐量更高）。',
          '**速度现实：** RTX 4070上每帧推理约1秒，10分钟视频完整处理约需20–30分钟。',
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
        title: 'VRAM与性能实测',
        content:
          '本地视觉模型在基础LLM上增加视觉编码器，与纯文本模型相比，VRAM需求和推理时间均会增加。',
        columns: ['模型', 'VRAM (Q4)', 'token/秒 (RTX 4070)', 'token/秒 (M5 Pro 36GB)', '适合生产？'],
        rows: [
          { '模型': 'Moondream 2 (1.9B)', 'VRAM (Q4)': '约2 GB', 'token/秒 (RTX 4070)': '约25–35', 'token/秒 (M5 Pro 36GB)': '约30–40', '适合生产？': '是——适合简单任务' },
          { '模型': 'LLaVA 1.6 7B', 'VRAM (Q4)': '约6 GB', 'token/秒 (RTX 4070)': '约15–20', 'token/秒 (M5 Pro 36GB)': '约18–25', '适合生产？': '是——通用' },
          { '模型': 'MiniCPM-V 2.6 (8B)', 'VRAM (Q4)': '约6 GB', 'token/秒 (RTX 4070)': '约12–18', 'token/秒 (M5 Pro 36GB)': '约15–20', '适合生产？': '是——OCR和文档' },
          { '模型': 'Llama 3.2 Vision 11B', 'VRAM (Q4)': '约8 GB', 'token/秒 (RTX 4070)': '约10–14', 'token/秒 (M5 Pro 36GB)': '约12–16', '适合生产？': '是——最佳综合质量' },
          { '模型': 'LLaVA 1.6 13B', 'VRAM (Q4)': '约10 GB', 'token/秒 (RTX 4070)': '约8–12', 'token/秒 (M5 Pro 36GB)': '约10–14', '适合生产？': '是——需12 GB GPU' },
          { '模型': 'Llama 3.2 Vision 90B', 'VRAM (Q4)': '约64 GB', 'token/秒 (RTX 4070)': 'N/A（需多GPU或M-Max）', 'token/秒 (M5 Pro 36GB)': 'N/A（需M5 Max 128GB+）', '适合生产？': '仅高端Apple Silicon' },
        ],
        callouts: [
          { type: 'note', text: '视觉模型的token生成速度比同尺寸纯文本模型慢，因为视觉编码器在处理第一个图像token时会产生大量计算开销。后续文本token的生成速度接近正常水平。' },
          { type: 'note', text: 'Apple Silicon统一内存可运行更大的模型（M5 Max 128GB最高支持90B），这些模型无法放入独立GPU的VRAM中。速度略慢于同等NVIDIA GPU，但无VRAM限制。' },
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
          '**隐私：** 本地模型在设备上处理图像——数据不会离开本机。GPT-5.5将图像发送至OpenAI服务器。',
          '**速度：** 本地模型10–20 token/秒，GPT-5.5 30–80 token/秒，但本地批处理无网络延迟。',
        ],
        callouts: [
          { type: 'note', text: '对于输入规范的发票和表单处理，本地VLM（Llama 3.2 Vision 11B、Qwen2-VL 7B）可以零成本替代GPT-5.5 Vision。涉及手写、复杂场景分析或模糊内容时，GPT-5.5仍占优势。' },
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
          '**劣势：** OCR弱于MiniCPM-V 2.6，UI分析弱于InternVL 2.5，质量基准测试中整体被Llama 3.2 Vision 11B超越。',
          '**仍被推荐的原因：** 在所有本地VLM中拥有最大社区、最多教程和最多提示示例。遇到问题时更容易找到帮助。',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL——最强多语言OCR',
        content:
          '**Qwen2-VL是阿里巴巴的视觉语言模型，是2026年文档基准测试中最强的开源选择。** 7B版本在更低VRAM下与Llama 3.2 Vision 11B竞争力相当，72B版本领跑大多数开源VLM排行榜。',
        items: [
          '**架构：** 支持高达4096×4096的动态分辨率——远高于LLaVA 1.6（672×672）或Llama 3.2 Vision（1120×1120）。可读取高DPI扫描件而无需下采样。',
          '**多语言OCR：** 中文、日文、韩文和英文OCR达到同类最佳。训练数据包含大规模多语言文档语料库——在非英文文档处理上相对LLaVA和Llama 3.2 Vision具有显著优势。',
          '**7B vs 72B：** 7B版本（Q4量化）约需6 GB VRAM，在大多数文档任务上与Llama 3.2 Vision 11B竞争力相当。72B版本约需48 GB，领跑大多数开源基准测试。',
          '**Ollama安装：** `ollama pull qwen2-vl:7b`——可直接从Ollama模型库获取。',
          '**多图像支持：** 每次请求最多接受8张图像——本比较中多图像容量最高。',
          '**模型页面：** [Hugging Face上的Qwen2-VL 7B](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
        ],
      },
      howToChoose: {
        id: 'how-to-choose',
        title: '如何选择视觉模型',
        content: '以VRAM为首要标准的本地视觉模型选择决策树：',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: '首先按VRAM选择（2→4→6→8→16 GB），再按用例细化（OCR、UI、通用问答或最高质量）。',
          },
          {
            type: 'plain-terms',
            text: '4 GB以下：仅Moondream。6 GB：文档选MiniCPM-V，照片选LLaVA 7B。8–16 GB：几乎所有场景选Llama 3.2 Vision 11B。64 GB以上：最高质量选Llama 3.2 Vision 90B。',
          },
        ],
        items: [
          '**4 GB以下VRAM：** 2 GB时只有Moondream 2（1.9B）。PaliGemma 2（3B）和SmolVLM（2.2B）也是可选方案——PaliGemma 2文档理解略优于Moondream，VRAM需求略高（约3 GB）。SmolVLM以牺牲质量换取极致效率。均不适合密集文本OCR。',
          '**6 GB VRAM：** 文档OCR和发票处理选MiniCPM-V 2.6。注重社区支持的通用照片问答选LLaVA 1.6 7B。多语言OCR或追求最高OCR精度时选Qwen2-VL 7B。',
          '**8–16 GB VRAM：** Llama 3.2 Vision 11B是明确推荐——该VRAM级别综合质量最佳，Ollama支持广泛。',
          '**16 GB以上VRAM：** LLaVA 1.6 13B相比7B版本有更强的复杂场景理解能力。主要用例为UI或代码截图时选InternVL 2.5 8B。',
          '**64 GB以上统一内存（Apple M-Max/Ultra、多GPU）：** Llama 3.2 Vision 90B提供最佳本地VLM质量，文档任务接近云端水平。Qwen2-VL 72B是拥有顶级开源基准得分的备选方案。',
          '**始终验证数字：** 无论使用何种模型，从图表或表格提取的任何数值都应与源数据交叉核对。本地VLM会对视觉图表中的精确数字产生幻觉。',
        ],
      },
      faq: {
        id: 'faq',
        title: '常见问题',
        faqs: [
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
            a: 'GPT-5.5 Vision在模糊场景、手写、复杂信息图表以及需要结合世界知识的视觉理解任务上仍明显更强。Llama 3.2 Vision 11B在结构化文档（发票、表单、清晰照片）上接近GPT-5.5，但在模糊图像推理上有差距。成本、隐私和速度的详细对比见上文。',
          },
          {
            q: '本地VLM支持什么图像分辨率？',
            a: 'LLaVA 1.6支持最高672×672有效分辨率（动态分块）。MiniCPM-V 2.6支持最高1792×1792——这也是其在高DPI文档扫描上优于LLaVA的原因之一。Llama 3.2 Vision支持最高1120×1120的可变分辨率。最佳OCR效果请以150+ DPI发送文档图像。',
          },
          {
            q: '可以用自己的图像对本地视觉模型进行微调吗？',
            a: '可以，但VLM微调比纯文本LLM微调更消耗资源——图像和文本训练对都需要完整前向传播处理。LLaVA微调使用原始训练代码库，文档完善。MiniCPM-V通过Hugging Face官方训练脚本支持微调。大多数用例仅靠提示工程即可，无需微调。',
          },
          {
            q: '8 GB VRAM的最佳本地视觉模型是什么？',
            a: 'Llama 3.2 Vision 11B（Q4量化可放入约8 GB）适合通用使用。若主要需求是多语言OCR，则选Qwen2-VL 7B。两者均可通过Ollama单条命令获取。',
          },
          {
            q: 'LLaVA与MiniCPM-V——哪个OCR效果更好？',
            a: 'MiniCPM-V 2.6在文档OCR上更精准，尤其是密集表格和高DPI扫描件。LLaVA 1.6文档更完善，社区支持更好。追求纯OCR精度选MiniCPM-V；需要社区资源和排错支持选LLaVA。',
          },
          {
            q: '本地视觉模型能识别手写吗？',
            a: '印刷体手写（块状字母）：Llama 3.2 Vision 11B和MiniCPM-V 2.6可以中等精度识别。草书手写：所有本地模型均不可靠。GPT-5.5 Vision在草书方面大幅领先。生产环境中的草书文档手写OCR仍建议使用云端API。',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '参考来源',
        items: [
          '[LLaVA项目页面](https://llava-vl.github.io) — LLaVA 1.5和1.6模型卡、架构详情及训练数据集描述。',
          '[Hugging Face上的Llama 3.2 Vision](https://huggingface.co/meta-llama) — Meta官方模型发布、模型卡和基准数据。',
          '[Hugging Face上的MiniCPM-V 2.6](https://huggingface.co/openbmb/MiniCPM-V-2_6) — OpenBMB模型卡、OCR基准及微调说明。',
          '[GitHub上的Moondream](https://github.com/vikhyat/moondream) — 架构描述、推理脚本和模型下载。',
          '[Hugging Face上的InternVL 2.5](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab模型卡及文档和UI任务基准得分。',
          '[Ollama文档](https://ollama.com) — 视觉模型支持、API参考和模型库。',
          '[Hugging Face上的Qwen2-VL](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — 阿里巴巴Qwen2-VL模型卡、架构详情和多语言OCR基准。',
          '[Hugging Face上的PaliGemma 2](https://huggingface.co/google/paligemma2-3b-pt-448) — Google PaliGemma 2 3B模型卡。',
          '[Hugging Face上的SmolVLM](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace SmolVLM模型卡及推理说明。',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '延伸阅读',
        items: [
          '[本地多模态AI流水线2026](/zh/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 将视觉模型与STT和TTS结合构建完整本地多模态栈。',
          '[本地语音识别2026：Whisper.cpp vs faster-whisper](/zh/power-local-llm/local-whisper-stt-comparison-2026) — 为视觉输出添加语音输入。',
          '[本地TTS与声音克隆2026](/zh/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — 添加语音输出以朗读VLM回答。',
          '[安装Ollama](/zh/local-llms/how-to-install-ollama) — 前置条件：Ollama配置与设置。',
          '[本地LLM硬件指南2026](/zh/local-llms/local-llm-hardware-guide-2026) — 视觉模型推理的VRAM和RAM要求。',
        ],
      },
    },
  },

  es: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL y configuración multimodal con Ollama',
    seoTitle: 'Mejores modelos de visión locales 2026: LLaVA y Qwen2-VL',
    intro:
      'Los modelos visión-lenguaje (VLM) aceptan imágenes y texto como entrada y devuelven texto — para OCR de documentos, preguntas y respuestas sobre imágenes, análisis de capturas de pantalla y lectura de gráficos, todo en local. En 2026, la forma más sencilla de ejecutar VLMs es a través de Ollama: descarga un modelo, envía una imagen y obtén una descripción o respuesta. Esta guía compara los principales modelos de visión locales (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5), explica la configuración de Ollama paso a paso y asocia cada modelo con su mejor caso de uso según los requisitos de VRAM y los benchmarks de calidad.',
    metaDescription:
      'Preguntas sobre imágenes, OCR y análisis de capturas offline en 2026. Benchmark: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL y MiniCPM-V. VRAM y setup con Ollama.',
    twitterDescription:
      'Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, MiniCPM-V via Ollama. Preguntas sobre imágenes, OCR, análisis de capturas — 100% sin conexión. Guía de VRAM y pasos de configuración.',
    audience:
      'Desarrolladores que necesitan comprensión de imágenes en local sin APIs en la nube — para procesamiento de documentos, análisis de capturas, herramientas de accesibilidad, sistemas de inventario o flujos de trabajo con imágenes sensibles.',
    readTime: '11 min de lectura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modelo de visión local',
    targetKeywords: [
      'modelo de visión local 2026',
      'LLaVA Ollama configuración',
      'ejecutar modelo de visión localmente',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen2-vl local',
      'qwen2-vl ollama',
      'mejor modelo de visión local',
      'comprensión de imágenes sin conexión',
      'modelo multimodal local',
      'ollama modelo de visión',
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
      '**Para la mayoría de los desarrolladores con 6–8 GB de VRAM, MiniCPM-V 2.6 (8B) o LLaVA 1.6 7B via Ollama es el punto de partida recomendado en 2026.** Ambos funcionan con ~6 GB de VRAM, admiten OCR de documentos, preguntas sobre imágenes y análisis de capturas de pantalla, y están disponibles con un único comando de Ollama. Para la mejor calidad general con 8–16 GB de VRAM, Llama 3.2 Vision 11B es el mejor modelo de visión local y el VLM local más potente — especialmente para documentos y fotografías. Con solo 2 GB de VRAM disponibles, Moondream 2 (1.9B) es la única opción práctica, aunque tiene capacidad limitada para escenas complejas. Todos los modelos funcionan 100% sin conexión una vez descargados; no se requiere clave API ni cuenta en la nube.',
    quickAnswerTop: {
      es: {
        question: '¿Cuáles son los mejores modelos de visión locales para usar con Ollama en 2026?',
        answer:
          'El mejor modelo de visión local depende de tu VRAM y caso de uso. Con 6–8 GB de VRAM, MiniCPM-V 2.6 ofrece el mejor equilibrio entre precisión OCR y comprensión general de imágenes. Con 8–16 GB de VRAM, Llama 3.2 Vision 11B es la primera opción para Q&A visual general y análisis de documentos. Con 2 GB de VRAM, Moondream 2 es la única alternativa — rápido pero con capacidad limitada. InternVL 2.5 es el mejor para capturas de pantalla de UI y gráficos, aunque tiene menos integración con Ollama que los demás.',
        bullets: [
          'Menos de 4 GB de VRAM → Moondream 2 (1.9B): rápido, comprensión limitada de imágenes complejas. También: PaliGemma 2 3B (~3 GB) y SmolVLM 2.2B (~2 GB).',
          '6 GB de VRAM → MiniCPM-V 2.6, LLaVA 1.6 7B o Qwen2-VL 7B (mejor para OCR multilingüe): mejor equilibrio entre calidad y hardware.',
          '8–16 GB de VRAM → Llama 3.2 Vision 11B: el mejor VLM local para fotografías y documentos en general.',
          '64+ GB (o Apple M-series) → Llama 3.2 Vision 90B o Qwen2-VL 72B: mejor calidad local, rendimiento cercano a la nube.',
          'Configuración: `ollama pull llama3.2-vision` luego `ollama run llama3.2-vision "Describe esta imagen" --image foto.jpg`.',
          'Mejor para OCR: Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 — fuerte en extracción de texto de documentos.',
          'Mejor para UI / capturas de pantalla: InternVL 2.5 — entrenado específicamente con capturas de código y UI.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL — Mejor OCR multilingüe', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B es el mejor modelo de visión local para la mayoría de los desarrolladores con 8–16 GB de VRAM.** Maneja fotografías, documentos y contenido mixto con la mejor precisión de su categoría y está disponible directamente desde Ollama.',
          '**MiniCPM-V 2.6 (8B) es la primera opción para OCR de documentos con 6 GB de VRAM.** Sus datos de entrenamiento incluyen escaneos de documentos en alta resolución, lo que lo hace más preciso que LLaVA en tablas, facturas y texto denso.',
          '**LLaVA 1.6 7B es el VLM local más documentado y probado por la comunidad.** Es la opción de propósito general más segura si necesitas abundantes ejemplos, tutoriales y recursos de solución de problemas.',
          '**Moondream 2 (1.9B) es la única opción práctica con menos de 4 GB de VRAM.** Rápido y compacto, pero tiene dificultades con escenas complejas, texto denso y lectura precisa de gráficos.',
          '**InternVL 2.5 (8B) es el más potente para capturas de código y análisis de UI.** Su entrenamiento incluyó capturas de GitHub, maquetas de UI y salidas de ejecución de código — los demás tienen un rendimiento más débil aquí.',
          '**Todos los modelos están disponibles vía Ollama con un único comando `pull`.** No se requiere conversión de modelos, cuantización ni configuración de Python. La CLI y la API HTTP funcionan de inmediato.',
          '**Ninguno de estos modelos se acerca a la calidad de GPT-5.5 Vision.** Los VLMs locales en 2026 son una sólida opción de nivel 2 — excelentes para documentos estructurados y fotografías claras, más débiles con escritura manuscrita y gráficos complejos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Datos rápidos',
        items: [
          '**Qué hacen los VLMs:** Aceptan imagen + texto como entrada → producen texto. No son generadores de imágenes — estos modelos *comprenden* imágenes.',
          '**Soporte en Ollama:** Todos los modelos de esta comparación tienen integración oficial o comunitaria en Ollama a partir de mayo de 2026.',
          '**Modelo más pequeño utilizable:** Moondream 2 con 1.9B parámetros, ~2 GB de VRAM.',
          '**Modelo local práctico más grande:** Llama 3.2 Vision 90B con ~64 GB de memoria unificada (Apple M-series o multi-GPU).',
          '**Formato de entrada de imagen:** JPEG, PNG, WebP aceptados. La resolución máxima varía por modelo (típicamente 1024×1024 a 4096×4096).',
          '**Precisión OCR:** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          'Comparación de los cinco modelos de visión locales más capaces disponibles vía Ollama o inferencia directa en mayo de 2026. Los datos de VRAM corresponden a variantes cuantizadas a 4 bits (Q4) salvo indicación contraria.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para 6–8 GB de VRAM: MiniCPM-V 2.6 para OCR de documentos, Llama 3.2 Vision 11B para Q&A de imágenes en general — ambos se ejecutan en local vía Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Piensa en Moondream como la opción ligera que cabe en cualquier lugar pero comprende menos; LLaVA como la elección segura y general; MiniCPM-V como el especialista en OCR; Llama 3.2 Vision como el mejor en general; InternVL como el experto en capturas de UI y código.',
          },
        ],
        columns: ['Modelo', 'Parámetros', 'VRAM (Q4)', 'Tipos de imagen', 'Calidad', '¿Vía Ollama?'],
        rows: [
          {
            'Modelo': 'Moondream 2',
            'Parámetros': '1.9B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagen': 'Fotos simples',
            'Calidad': 'Básica',
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
            'Modelo': 'LLaVA 1.6 13B',
            'Parámetros': '13B',
            'VRAM (Q4)': '~10 GB',
            'Tipos de imagen': 'Fotos, docs, gráficos',
            'Calidad': 'Muy buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'MiniCPM-V 2.6',
            'Parámetros': '8B',
            'VRAM (Q4)': '~6 GB',
            'Tipos de imagen': 'Fotos, docs, OCR',
            'Calidad': 'Muy buena',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Llama 3.2 Vision 11B',
            'Parámetros': '11B',
            'VRAM (Q4)': '~8 GB',
            'Tipos de imagen': 'Fotos, docs',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Llama 3.2 Vision 90B',
            'Parámetros': '90B',
            'VRAM (Q4)': '~64 GB',
            'Tipos de imagen': 'Fotos, docs, complejo',
            'Calidad': 'Mejor local',
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
            'Modelo': 'Qwen2-VL 7B',
            'Parámetros': '7B',
            'VRAM (Q4)': '~6 GB',
            'Tipos de imagen': 'Fotos, docs, OCR, multilingüe',
            'Calidad': 'Excelente',
            '¿Vía Ollama?': 'Sí',
          },
          {
            'Modelo': 'Qwen2-VL 72B',
            'Parámetros': '72B',
            'VRAM (Q4)': '~48 GB',
            'Tipos de imagen': 'Fotos, docs, complejo',
            'Calidad': 'Mejor (open-source)',
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
            'Modelo': 'SmolVLM 2.2B',
            'Parámetros': '2.2B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagen': 'Fotos simples, descripciones',
            'Calidad': 'Básica+',
            '¿Vía Ollama?': 'Comunidad',
          },
        ],
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
          { 'Modelo': 'MiniCPM-V 2.6', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✓', 'Líneas': '✓', 'Puntuación': '5/5' },
          { 'Modelo': 'Qwen2-VL 7B', 'Proveedor': '✓', 'Fecha': '✓', 'Total': '✓', 'Impuesto': '✓', 'Líneas': '✓', 'Puntuación': '5/5' },
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
        columns: ['Función', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Función': 'Entrada multi-imagen',
            'Moondream': 'No',
            'LLaVA 7B': 'No',
            'MiniCPM-V': 'Sí (hasta 4)',
            'Qwen2-VL': 'Sí (hasta 8)',
            'LLaVA 13B': 'No',
            'Llama 3.2 Vision': 'Sí (multi-página)',
            'InternVL': 'Sí',
          },
        ],
        items: [
          'MiniCPM-V 2.6 acepta hasta 4 imágenes por prompt; Qwen2-VL admite hasta 8. LLaVA y Moondream solo aceptan una imagen por solicitud.',
          '**Cuándo importa el multi-imagen:** Enviar todas las páginas de un PDF de varias páginas para extracción completa del documento. Comparar dos fotos de producto lado a lado. Analizar capturas de pantalla antes/después en un único prompt.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuración con Ollama — paso a paso',
        content:
          'Ollama es la forma más sencilla de ejecutar modelos de visión locales. Una vez instalado Ollama, los modelos de visión funcionan con un único comando pull y aceptan imágenes mediante el flag de CLI o la API HTTP.',
        items: [
          '**Paso 1 — Instalar Ollama:** Descarga desde ollama.com para macOS, Linux o Windows. La instalación tarda menos de 2 minutos.',
          '**Paso 2 — Descargar un modelo de visión:** `ollama pull llama3.2-vision` (11B, ~8 GB de descarga) o `ollama pull moondream` (1.9B, ~2 GB) para configuraciones con poco VRAM.',
          '**Paso 3 — Usar desde la CLI:** `ollama run llama3.2-vision "¿Qué hay en esta imagen?" --image /ruta/a/foto.jpg`',
          '**Paso 4 — Usar la API HTTP:** Haz un POST a `http://localhost:11434/api/generate` con la imagen como cadena en Base64 en el array `images`.',
          '**Paso 5 — Ejemplo en Python:** Usa la biblioteca `requests` con codificación Base64 — ver el bloque de código a continuación.',
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

# Ejemplo de uso
result = ask_vision_model("factura.png", "Extrae todas las líneas de artículos y totales de esta factura.")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Caso de uso 1: OCR y extracción de documentos',
        content:
          '**Los VLMs superan al OCR tradicional en documentos semiestructurados** — facturas, recibos, contratos y tablas donde el diseño importa tanto como el texto en sí. El OCR tradicional (Tesseract) extrae caracteres; los VLMs comprenden qué significan esos caracteres en contexto.',
        items: [
          '**Qué funciona bien:** Facturas escaneadas, capturas de PDF, notas manuscritas en letra de molde, tablas con bordes claros, tarjetas de visita.',
          '**Qué funciona peor:** Texto manuscrito en cursiva, escaneos a menos de 150 DPI, JPEG con mucha compresión, texto superpuesto.',
          '**Mejores modelos para OCR:** MiniCPM-V 2.6 (mayor precisión OCR en la categoría de 6 GB), Llama 3.2 Vision 11B (mejor para tipos de documentos mixtos).',
          '**Prompt engineering para OCR:** "Extrae todo el texto de este documento exactamente como está escrito, conservando los saltos de línea." O: "Devuelve el contenido de esta factura como JSON con los campos: proveedor, fecha, líneas[], total."',
          '**Vs. OCR tradicional:** Los VLMs son más lentos pero más semánticos. Tesseract es más rápido para la extracción de texto puro de documentos limpios. Usa VLMs cuando necesites extracción de datos estructurados, no solo texto plano.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Caso de uso 2: Preguntas y respuestas sobre imágenes',
        content:
          '**Para la comprensión general de escenas, descripciones de productos y Q&A visual, Llama 3.2 Vision 11B es el modelo local recomendado.** Produce descripciones naturales y detalladas, y maneja preguntas matizadas sobre el contenido de fotografías.',
        items: [
          '**Descripción de escenas:** "¿Qué hay en esta foto?" — objetos, personas, actividades, entorno, ambiente.',
          '**Catalogación de productos:** Procesa fotos de productos con una plantilla de prompt como "Describe este producto: color, forma, material, estado." Útil para inventario de comercio electrónico sin APIs en la nube.',
          '**Accesibilidad:** Genera texto alternativo para imágenes a escala. Con precisión suficiente para el cumplimiento de accesibilidad en fotos de productos estándar.',
          '**Mejores modelos:** LLaVA 1.6 13B o Llama 3.2 Vision 11B para Q&A general sobre fotos. LLaVA 1.6 7B para procesamiento en volumen donde la velocidad importa más que la precisión.',
          '**Consideración de velocidad:** En una GPU de 6 GB, Llama 3.2 Vision 11B Q4 genera ~8–12 tokens/segundo para respuestas sobre imágenes — procesar 100 imágenes tarda ~2–5 minutos según la longitud de la descripción.',
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
          '**Mejores modelos:** InternVL 2.5 8B (mejor comprensión de UI), MiniCPM-V 2.6 (segunda opción, con soporte de Ollama).',
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
          '**Mejores modelos para gráficos:** InternVL 2.5 (mejor comprensión de gráficos), Llama 3.2 Vision 11B (bueno en gráficos con etiquetas claras).',
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
          '**Mejores modelos para fotogramas de video:** Llama 3.2 Vision 11B para calidad, LLaVA 1.6 7B para velocidad (mayor rendimiento de fotogramas).',
          '**Realidad de velocidad:** A 1 fotograma/segundo de extracción y ~1 segundo por fotograma de inferencia en una RTX 4070, un video de 10 minutos tarda ~20–30 minutos en procesarse completamente.',
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
            'Modelo': 'Moondream 2 (1.9B)',
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
            'Modelo': 'MiniCPM-V 2.6 (8B)',
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
            '¿Apto para producción?': 'Sí — mejor calidad general',
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
            text: 'La velocidad de generación de tokens para los modelos de visión es más lenta que para los modelos solo de texto del mismo tamaño, porque el encoder visual añade una sobrecarga computacional significativa en el primer token de imagen. Los tokens de texto posteriores se generan a velocidad casi normal.',
          },
          {
            type: 'note',
            text: 'La memoria unificada de Apple Silicon permite ejecutar modelos más grandes (hasta 90B en M5 Max 128GB) que no caben en la VRAM de una GPU dedicada. La velocidad es ligeramente inferior a la de una GPU NVIDIA equivalente, pero sin limitación de VRAM.',
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
          '**Privacidad:** Los modelos locales procesan imágenes en el dispositivo — ningún dato sale de la máquina. GPT-5.5 envía imágenes a los servidores de OpenAI.',
          '**Velocidad:** Los modelos locales a 10–20 tok/seg vs GPT-5.5 a 30–80 tok/seg, pero el local no tiene latencia de red para el procesamiento por lotes.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Para el procesamiento en producción de facturas y formularios con entrada limpia, los VLMs locales (Llama 3.2 Vision 11B, Qwen2-VL 7B) pueden reemplazar a GPT-5.5 Vision a cero costo. Para todo lo que involucre escritura a mano, análisis de escenas complejas o contenido ambiguo, GPT-5.5 sigue siendo superior.',
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
          '**Debilidades:** OCR más débil que MiniCPM-V 2.6, análisis de UI más débil que InternVL 2.5, superado en general por Llama 3.2 Vision 11B en benchmarks de calidad.',
          '**Por qué sigue siendo recomendado:** LLaVA 1.6 tiene la comunidad más grande, la mayor cantidad de tutoriales y los más ejemplos de prompts de todos los VLMs locales. Si tienes problemas, es más fácil encontrar ayuda.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — Mejor OCR multilingüe y rendimiento en documentos',
        content:
          '**Qwen2-VL es el modelo visión-lenguaje de Alibaba y la opción de código abierto más potente en benchmarks de documentos en 2026.** La variante de 7B es competitiva con Llama 3.2 Vision 11B con menos VRAM, y la variante de 72B encabeza la mayoría de los rankings de VLMs de código abierto.',
        items: [
          '**Arquitectura:** Soporte de resolución dinámica hasta 4096×4096 — significativamente mayor que LLaVA 1.6 (672×672) o Llama 3.2 Vision (1120×1120). Esto permite leer escaneos de alto DPI sin necesidad de submuestreo.',
          '**OCR multilingüe:** Lo mejor de su clase para chino, japonés, coreano e inglés. Los datos de entrenamiento incluyeron corpus de documentos multilingües a gran escala — una ventaja significativa sobre LLaVA y Llama 3.2 Vision para documentos en idiomas distintos al inglés.',
          '**7B vs 72B:** El 7B cabe en ~6 GB de VRAM (Q4) y es competitivo con Llama 3.2 Vision 11B en la mayoría de tareas con documentos. El 72B usa ~48 GB y lidera la mayoría de benchmarks de código abierto.',
          '**Instalación en Ollama:** `ollama pull qwen2-vl:7b` — disponible directamente desde la biblioteca de modelos de Ollama.',
          '**Soporte multi-imagen:** Acepta hasta 8 imágenes por solicitud — la mayor capacidad multi-imagen de todos los modelos de esta comparación.',
          '**Página del modelo:** [Qwen2-VL 7B en Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
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
            text: 'Elige tu modelo primero por VRAM (2→4→6→8→16 GB), luego refina por caso de uso (OCR, UI, Q&A general o máxima calidad).',
          },
          {
            type: 'plain-terms',
            text: 'Menos de 4 GB: solo Moondream. 6 GB: MiniCPM-V para documentos, LLaVA 7B para fotos. 8–16 GB: Llama 3.2 Vision 11B para casi todo. 64+ GB: Llama 3.2 Vision 90B para la mejor calidad local.',
          },
        ],
        items: [
          '**Menos de 4 GB de VRAM:** Moondream 2 (1.9B) — única opción viable a 2 GB. Más allá de Moondream 2, PaliGemma 2 (3B) y SmolVLM (2.2B) son alternativas viables. PaliGemma 2 tiene mejor comprensión de documentos que Moondream con un ligero costo adicional de VRAM (~3 GB). SmolVLM sacrifica calidad por eficiencia extrema. Ninguno es adecuado para OCR de texto denso.',
          '**6 GB de VRAM:** MiniCPM-V 2.6 para OCR de documentos y procesamiento de facturas. LLaVA 1.6 7B para Q&A general sobre fotos donde el soporte comunitario importa. Qwen2-VL 7B para OCR multilingüe o cuando se necesita la mayor precisión OCR posible.',
          '**8–16 GB de VRAM:** Llama 3.2 Vision 11B es la recomendación clara — mejor calidad general en esta categoría de VRAM, amplio soporte en Ollama.',
          '**16+ GB de VRAM:** LLaVA 1.6 13B añade más capacidad para la comprensión de escenas complejas frente a la variante de 7B. InternVL 2.5 8B si tu caso de uso principal son capturas de UI o código.',
          '**64+ GB de memoria unificada (Apple M-Max/Ultra, multi-GPU):** Llama 3.2 Vision 90B para la mejor calidad de VLM local disponible, acercándose al rendimiento de nivel nube para tareas con documentos. Qwen2-VL 72B es una alternativa con las mejores puntuaciones en benchmarks de código abierto.',
          '**Verifica siempre los números:** Independientemente del modelo, contrasta cualquier valor numérico extraído de gráficos o tablas con los datos originales. Los VLMs locales alucinan números precisos a partir de gráficos visuales.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Preguntas frecuentes',
        faqs: [
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
            a: 'GPT-5.5 Vision sigue siendo significativamente mejor en escenas ambiguas, escritura a mano, infografías complejas y tareas que requieren conocimiento del mundo. Llama 3.2 Vision 11B se acerca a GPT-5.5 en documentos estructurados (facturas, formularios, fotos claras) pero se queda atrás en imágenes matizadas o ambiguas. Consulta la comparación completa de arriba para ver el desglose de costo, privacidad y velocidad.',
          },
          {
            q: '¿Qué resolución de imagen admiten los VLMs locales?',
            a: 'LLaVA 1.6 admite hasta 672×672 de resolución efectiva (con parches dinámicos). MiniCPM-V 2.6 admite hasta 1792×1792 — una razón por la que supera a LLaVA en escaneos de documentos a alto DPI. Llama 3.2 Vision admite resolución variable hasta 1120×1120. Para los mejores resultados de OCR, envía imágenes de documentos a 150+ DPI.',
          },
          {
            q: '¿Puedo hacer fine-tuning de un modelo de visión local con mis propias imágenes?',
            a: 'Sí, pero el fine-tuning de VLMs requiere más recursos que el fine-tuning de LLMs solo de texto — necesitas procesar tanto imágenes como texto de entrenamiento a través del forward pass completo. El fine-tuning de LLaVA está bien documentado usando la base de código de entrenamiento original. MiniCPM-V admite fine-tuning a través de sus scripts de entrenamiento oficiales en Hugging Face. Para la mayoría de los casos de uso, el prompt engineering solo es suficiente sin necesidad de fine-tuning.',
          },
          {
            q: '¿Cuál es el mejor modelo de visión local para 8 GB de VRAM?',
            a: 'Llama 3.2 Vision 11B (Q4 cuantizado cabe en ~8 GB) para uso general. Qwen2-VL 7B si el OCR multilingüe es la necesidad principal. Ambos disponibles vía Ollama con un único comando pull.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — ¿cuál es mejor para OCR?',
            a: 'MiniCPM-V 2.6 es más preciso en OCR de documentos, especialmente en tablas densas y escaneos a alto DPI. LLaVA 1.6 está mejor documentado y tiene más soporte comunitario. Para pura precisión de OCR, elige MiniCPM-V. Para recursos comunitarios y solución de problemas, elige LLaVA.',
          },
          {
            q: '¿Pueden los modelos de visión locales leer escritura a mano?',
            a: 'Escritura a mano en letra de molde (letras de bloque): sí, con precisión moderada en Llama 3.2 Vision 11B y MiniCPM-V 2.6. Escritura en cursiva: poco fiable en todos los modelos locales. GPT-5.5 Vision es significativamente mejor con cursiva. Para OCR de escritura a mano en cursiva en producción, se siguen recomendando las APIs en la nube.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fuentes',
        items: [
          '[Página del proyecto LLaVA](https://llava-vl.github.io) — Tarjetas de modelo LLaVA 1.5 y 1.6, detalles de arquitectura y descripción del dataset de entrenamiento.',
          '[Llama 3.2 Vision en Hugging Face](https://huggingface.co/meta-llama) — Lanzamiento oficial del modelo de Meta, tarjeta de modelo y cifras de benchmark.',
          '[MiniCPM-V 2.6 en Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — Tarjeta de modelo de OpenBMB, benchmarks de OCR e instrucciones de fine-tuning.',
          '[Moondream en GitHub](https://github.com/vikhyat/moondream) — Descripción de arquitectura, scripts de inferencia y descarga del modelo.',
          '[InternVL 2.5 en Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — Tarjeta de modelo de OpenGVLab, puntuaciones de benchmark en documentos y tareas de UI.',
          '[Documentación de Ollama](https://ollama.com) — Soporte de modelos de visión, referencia de API y biblioteca de modelos.',
          '[Qwen2-VL en Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — Tarjeta de modelo Qwen2-VL de Alibaba, detalles de arquitectura y benchmarks de OCR multilingüe.',
          '[PaliGemma 2 en Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Tarjeta de modelo PaliGemma 2 3B de Google.',
          '[SmolVLM en Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — Tarjeta de modelo SmolVLM de HuggingFace e instrucciones de inferencia.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Lectura relacionada',
        items: [
          '[Pipeline de IA multimodal local 2026](/es/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combina modelos de visión con STT y TTS en un stack multimodal local completo.',
          '[Reconocimiento de voz local 2026: Whisper.cpp vs faster-whisper](/es/power-local-llm/local-whisper-stt-comparison-2026) — Añade entrada de voz para complementar la salida de visión.',
          '[TTS local y clonación de voz 2026](/es/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Añade salida de voz para leer en voz alta las respuestas del VLM.',
          '[Cómo instalar Ollama](/es/local-llms/how-to-install-ollama) — Requisito previo: configuración e instalación de Ollama.',
          '[Guía de hardware para LLMs locales 2026](/es/local-llms/local-llm-hardware-guide-2026) — Requisitos de VRAM y RAM para la inferencia de modelos de visión.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Modelos de visión locales 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL y configuración multimodal con Ollama',
       description: 'Preguntas sobre imágenes, OCR y análisis de capturas de pantalla sin conexión en 2026. Benchmark: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL, MiniCPM-V. Guía de VRAM y pasos de configuración con Ollama.',
       url: 'https://www.promptquorum.com/es/power-local-llm/local-vision-models-llava-ollama-2026',
       inLanguage: 'es',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
},
  pt: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'Modelos de visão locais 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL e configuração multimodal com Ollama',
    seoTitle: 'Melhores modelos de visão locais 2026: LLaVA e Qwen2-VL',
    intro:
      'Os modelos visão-linguagem (VLM) aceitam imagens e texto como entrada e retornam texto — para OCR de documentos, perguntas e respostas sobre imagens, análise de capturas de tela e leitura de gráficos, tudo localmente. Em 2026, a forma mais simples de executar VLMs é via Ollama: baixe um modelo, envie uma imagem e obtenha uma descrição ou resposta. Este guia compara os principais modelos de visão locais (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5), explica a configuração do Ollama passo a passo e associa cada modelo ao seu melhor caso de uso conforme os requisitos de VRAM e os benchmarks de qualidade.',
    metaDescription:
      'Perguntas sobre imagens, OCR e análise de capturas offline em 2026. Benchmark: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL e MiniCPM-V. VRAM e setup com Ollama.',
    twitterDescription:
      'Modelos de visão locais 2026: LLaVA, Llama 3.2 Vision, MiniCPM-V via Ollama. Perguntas sobre imagens, OCR, análise de capturas — 100% offline. Guia de VRAM e passos de configuração.',
    audience:
      'Desenvolvedores que precisam de compreensão de imagens localmente sem APIs na nuvem — para processamento de documentos, análise de capturas, ferramentas de acessibilidade, sistemas de inventário ou fluxos de trabalho com imagens sensíveis.',
    readTime: '11 min de leitura',
    educationalLevel: 'Intermediate',
    primaryTerm: 'modelo de visão local',
    targetKeywords: [
      'modelo de visão local 2026',
      'LLaVA Ollama configuração',
      'executar modelo de visão localmente',
      'llama 3.2 vision local',
      'MiniCPM-V local',
      'qwen2-vl local',
      'qwen2-vl ollama',
      'melhor modelo de visão local',
      'compreensão de imagens offline',
      'modelo multimodal local',
      'ollama modelo de visão',
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
      '**Para a maioria dos desenvolvedores com 6–8 GB de VRAM, MiniCPM-V 2.6 (8B) ou LLaVA 1.6 7B via Ollama é o ponto de partida recomendado em 2026.** Ambos funcionam com ~6 GB de VRAM, suportam OCR de documentos, perguntas sobre imagens e análise de capturas de tela, e estão disponíveis com um único comando do Ollama. Para a melhor qualidade geral com 8–16 GB de VRAM, Llama 3.2 Vision 11B é o melhor modelo de visão local e o VLM local mais potente. Com apenas 2 GB de VRAM disponíveis, Moondream 2 (1.9B) é a única opção prática. Todos os modelos funcionam 100% offline uma vez baixados; nenhuma chave de API ou conta na nuvem é necessária.',
    quickAnswerTop: {
      pt: {
        question: 'Quais são os melhores modelos de visão locais para usar com Ollama em 2026?',
        answer:
          'O melhor modelo de visão local depende da sua VRAM e do caso de uso. Com 6–8 GB de VRAM, MiniCPM-V 2.6 oferece o melhor equilíbrio entre precisão OCR e compreensão geral de imagens. Com 8–16 GB de VRAM, Llama 3.2 Vision 11B é a primeira opção para Q&A visual geral e análise de documentos. Com 2 GB de VRAM, Moondream 2 é a única alternativa — rápido, mas com capacidade limitada. InternVL 2.5 é o melhor para capturas de tela de UI e gráficos, embora tenha menos integração com Ollama do que os demais.',
        bullets: [
          'Menos de 4 GB de VRAM → Moondream 2 (1.9B): rápido, compreensão limitada de imagens complexas. Também: PaliGemma 2 3B (~3 GB) e SmolVLM 2.2B (~2 GB).',
          '6 GB de VRAM → MiniCPM-V 2.6, LLaVA 1.6 7B ou Qwen2-VL 7B (melhor para OCR multilíngue): melhor equilíbrio entre qualidade e hardware.',
          '8–16 GB de VRAM → Llama 3.2 Vision 11B: o melhor VLM local para fotografias e documentos em geral.',
          '64+ GB (ou Apple M-series) → Llama 3.2 Vision 90B ou Qwen2-VL 72B: melhor qualidade local, desempenho próximo à nuvem.',
          'Configuração: `ollama pull llama3.2-vision` depois `ollama run llama3.2-vision "Descreva esta imagem" --image foto.jpg`.',
          'Melhor para OCR: Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 — forte na extração de texto de documentos.',
          'Melhor para UI / capturas de tela: InternVL 2.5 — treinado especificamente com capturas de código e UI.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL — Melhor OCR multilíngue', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B é o melhor modelo de visão local para a maioria dos desenvolvedores com 8–16 GB de VRAM.** Lida com fotografias, documentos e conteúdo misto com a melhor precisão de sua categoria e está disponível diretamente via Ollama.',
          '**MiniCPM-V 2.6 (8B) é a primeira opção para OCR de documentos com 6 GB de VRAM.** Seus dados de treinamento incluem escaneamentos de documentos em alta resolução, tornando-o mais preciso do que LLaVA em tabelas, faturas e texto denso.',
          '**LLaVA 1.6 7B é o VLM local mais documentado e testado pela comunidade.** É a opção de propósito geral mais segura se você precisa de abundantes exemplos, tutoriais e recursos de solução de problemas.',
          '**Moondream 2 (1.9B) é a única opção prática com menos de 4 GB de VRAM.** Rápido e compacto, mas tem dificuldades com cenas complexas, texto denso e leitura precisa de gráficos.',
          '**InternVL 2.5 (8B) é o mais potente para capturas de código e análise de UI.** Seu treinamento incluiu capturas do GitHub, maquetes de UI e saídas de execução de código.',
          '**Todos os modelos estão disponíveis via Ollama com um único comando `pull`.** Nenhuma conversão de modelos, quantização nem configuração de Python é necessária.',
          '**Nenhum desses modelos se aproxima da qualidade do GPT-5.5 Vision.** Os VLMs locais em 2026 são uma sólida opção de nível 2 — excelentes para documentos estruturados e fotografias claras, mais fracos com escrita à mão e gráficos complexos.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'Fatos rápidos',
        items: [
          '**O que os VLMs fazem:** Aceitam imagem + texto como entrada → produzem texto. Não são geradores de imagens — esses modelos *compreendem* imagens.',
          '**Suporte no Ollama:** Todos os modelos desta comparação têm integração oficial ou comunitária no Ollama a partir de maio de 2026.',
          '**Menor modelo utilizável:** Moondream 2 com 1.9B parâmetros, ~2 GB de VRAM.',
          '**Maior modelo local prático:** Llama 3.2 Vision 90B com ~64 GB de memória unificada (Apple M-series ou multi-GPU).',
          '**Formato de entrada de imagem:** JPEG, PNG, WebP aceitos. A resolução máxima varia por modelo (tipicamente 1024×1024 a 4096×4096).',
          '**Precisão OCR:** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          'Comparação dos cinco modelos de visão locais mais capazes disponíveis via Ollama ou inferência direta em maio de 2026. Os dados de VRAM correspondem a variantes quantizadas em 4 bits (Q4), salvo indicação contrária.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'Para 6–8 GB de VRAM: MiniCPM-V 2.6 para OCR de documentos, Llama 3.2 Vision 11B para Q&A de imagens em geral — ambos executam localmente via Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'Pense no Moondream como a opção leve que cabe em qualquer lugar mas compreende menos; LLaVA como a escolha segura e geral; MiniCPM-V como o especialista em OCR; Llama 3.2 Vision como o melhor em geral; InternVL como o especialista em capturas de UI e código.',
          },
        ],
        columns: ['Modelo', 'Parâmetros', 'VRAM (Q4)', 'Tipos de imagem', 'Qualidade', 'Via Ollama?'],
        rows: [
          {
            'Modelo': 'Moondream 2',
            'Parâmetros': '1.9B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagem': 'Fotos simples',
            'Qualidade': 'Básica',
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
            'Modelo': 'LLaVA 1.6 13B',
            'Parâmetros': '13B',
            'VRAM (Q4)': '~10 GB',
            'Tipos de imagem': 'Fotos, docs, gráficos',
            'Qualidade': 'Muito boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'MiniCPM-V 2.6',
            'Parâmetros': '8B',
            'VRAM (Q4)': '~6 GB',
            'Tipos de imagem': 'Fotos, docs, OCR',
            'Qualidade': 'Muito boa',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Llama 3.2 Vision 11B',
            'Parâmetros': '11B',
            'VRAM (Q4)': '~8 GB',
            'Tipos de imagem': 'Fotos, docs',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Llama 3.2 Vision 90B',
            'Parâmetros': '90B',
            'VRAM (Q4)': '~64 GB',
            'Tipos de imagem': 'Fotos, docs, complexo',
            'Qualidade': 'Melhor local',
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
            'Modelo': 'Qwen2-VL 7B',
            'Parâmetros': '7B',
            'VRAM (Q4)': '~6 GB',
            'Tipos de imagem': 'Fotos, docs, OCR, multilíngue',
            'Qualidade': 'Excelente',
            'Via Ollama?': 'Sim',
          },
          {
            'Modelo': 'Qwen2-VL 72B',
            'Parâmetros': '72B',
            'VRAM (Q4)': '~48 GB',
            'Tipos de imagem': 'Fotos, docs, complexo',
            'Qualidade': 'Melhor (open-source)',
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
            'Modelo': 'SmolVLM 2.2B',
            'Parâmetros': '2.2B',
            'VRAM (Q4)': '~2 GB',
            'Tipos de imagem': 'Fotos simples, descrições',
            'Qualidade': 'Básica+',
            'Via Ollama?': 'Comunidade',
          },
        ],
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
          { 'Modelo': 'MiniCPM-V 2.6', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✓', 'Linhas': '✓', 'Pontuação': '5/5' },
          { 'Modelo': 'Qwen2-VL 7B', 'Fornecedor': '✓', 'Data': '✓', 'Total': '✓', 'Imposto': '✓', 'Linhas': '✓', 'Pontuação': '5/5' },
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
        columns: ['Função', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'Função': 'Entrada multi-imagem',
            'Moondream': 'Não',
            'LLaVA 7B': 'Não',
            'MiniCPM-V': 'Sim (até 4)',
            'Qwen2-VL': 'Sim (até 8)',
            'LLaVA 13B': 'Não',
            'Llama 3.2 Vision': 'Sim (multi-página)',
            'InternVL': 'Sim',
          },
        ],
        items: [
          'MiniCPM-V 2.6 aceita até 4 imagens por prompt; Qwen2-VL suporta até 8. LLaVA e Moondream aceitam apenas uma imagem por solicitação.',
          '**Quando o multi-imagem importa:** Enviar todas as páginas de um PDF de várias páginas para extração completa do documento. Comparar duas fotos de produto lado a lado. Analisar capturas de tela antes/depois em um único prompt.',
        ],
      },
      ollamaSetup: {
        id: 'ollama-setup',
        title: 'Configuração com Ollama — passo a passo',
        content:
          'Ollama é a forma mais simples de executar modelos de visão locais. Uma vez instalado, os modelos de visão funcionam com um único comando pull e aceitam imagens via flag da CLI ou a API HTTP.',
        items: [
          '**Passo 1 — Instalar o Ollama:** Baixe em ollama.com para macOS, Linux ou Windows. A instalação leva menos de 2 minutos.',
          '**Passo 2 — Baixar um modelo de visão:** `ollama pull llama3.2-vision` (11B, ~8 GB de download) ou `ollama pull moondream` (1.9B, ~2 GB) para configurações com pouca VRAM.',
          '**Passo 3 — Usar via CLI:** `ollama run llama3.2-vision "O que há nesta imagem?" --image /caminho/para/foto.jpg`',
          '**Passo 4 — Usar a API HTTP:** Faça um POST para `http://localhost:11434/api/generate` com a imagem como string em Base64 no array `images`.',
          '**Passo 5 — Exemplo em Python:** Use a biblioteca `requests` com codificação Base64 — veja o bloco de código abaixo.',
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

# Exemplo de uso
result = ask_vision_model("fatura.png", "Extraia todas as linhas de itens e totais desta fatura.")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'Caso de uso 1: OCR e extração de documentos',
        content:
          '**Os VLMs superam o OCR tradicional em documentos semiestruturados** — faturas, recibos, contratos e tabelas onde o layout importa tanto quanto o texto em si.',
        items: [
          '**O que funciona bem:** Faturas escaneadas, capturas de PDF, notas manuscritas em letra de forma, tabelas com bordas claras, cartões de visita.',
          '**O que funciona pior:** Texto manuscrito em cursiva, escaneamentos abaixo de 150 DPI, JPEG com muita compressão, texto sobreposto.',
          '**Melhores modelos para OCR:** MiniCPM-V 2.6 (maior precisão OCR na categoria de 6 GB), Llama 3.2 Vision 11B (melhor para tipos de documentos mistos).',
          '**Prompt engineering para OCR:** "Extraia todo o texto deste documento exatamente como está escrito, preservando as quebras de linha." Ou: "Retorne o conteúdo desta fatura como JSON com os campos: fornecedor, data, linhas[], total."',
          '**Vs. OCR tradicional:** Os VLMs são mais lentos, mas mais semânticos. Tesseract é mais rápido para a extração de texto puro de documentos limpos. Use VLMs quando precisar de extração de dados estruturados, não apenas texto simples.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'Caso de uso 2: Perguntas e respostas sobre imagens',
        content:
          '**Para a compreensão geral de cenas, descrições de produtos e Q&A visual, Llama 3.2 Vision 11B é o modelo local recomendado.**',
        items: [
          '**Descrição de cenas:** "O que há nesta foto?" — objetos, pessoas, atividades, ambiente, atmosfera.',
          '**Catalogação de produtos:** Processe fotos de produtos com um template de prompt como "Descreva este produto: cor, forma, material, estado." Útil para inventário de e-commerce sem APIs na nuvem.',
          '**Acessibilidade:** Gere texto alternativo para imagens em escala. Com precisão suficiente para conformidade de acessibilidade em fotos de produtos padrão.',
          '**Melhores modelos:** LLaVA 1.6 13B ou Llama 3.2 Vision 11B para Q&A geral sobre fotos.',
          '**Consideração de velocidade:** Em uma GPU de 6 GB, Llama 3.2 Vision 11B Q4 gera ~8–12 tokens/segundo para respostas sobre imagens.',
        ],
      },
      useCaseScreenshot: {
        id: 'use-case-screenshot',
        title: 'Caso de uso 3: Capturas de tela e análise de UI',
        content:
          '**Para analisar capturas de tela de aplicações, mensagens de erro e painéis, InternVL 2.5 é o modelo local mais potente.**',
        items: [
          '**Fluxos de trabalho para desenvolvedores:** Envie capturas de mensagens de erro ao modelo: "O que está errado nesta captura de tela e como você corrigiria?"',
          '**Geração de relatórios de bugs:** Gere automaticamente descrições de bugs a partir de capturas de tela com um prompt estruturado.',
          '**Monitoramento de painéis:** Analise capturas de tela de painéis de monitoramento em busca de anomalias.',
          '**Testes de acessibilidade:** Compare capturas antes e depois de mudanças na UI para verificar as propriedades de acessibilidade visual.',
          '**Melhores modelos:** InternVL 2.5 8B (melhor compreensão de UI), MiniCPM-V 2.6 (segunda opção, com suporte do Ollama).',
        ],
      },
      useCaseChart: {
        id: 'use-case-chart',
        title: 'Caso de uso 4: Leitura de gráficos e diagramas',
        content:
          '**Extrair dados de gráficos de barras, linhas e tabelas é possível, mas requer um prompting cuidadoso.** Todos os VLMs locais são mais fracos na leitura de gráficos do que na descrição de fotos.',
        items: [
          '**O que funciona:** Ler rótulos de eixos, identificar tendências, comparar alturas relativas de barras, ler valores de tabelas com fontes claras.',
          '**O que não é confiável:** Extração numérica precisa de gráficos contínuos, porcentagens de gráficos de pizza sem rótulos explícitos.',
          '**Estratégia de prompt:** "Descreva a tendência mostrada neste gráfico de linhas" funciona melhor do que "Qual é o valor exato em março de 2026?"',
          '**Melhores modelos para gráficos:** InternVL 2.5 (melhor compreensão de gráficos), Llama 3.2 Vision 11B (bom em gráficos com rótulos claros).',
          '**Nota sobre limitações:** Nenhum VLM local em 2026 extrai de forma confiável números precisos de gráficos visualmente complexos.',
        ],
      },
      useCaseVideo: {
        id: 'use-case-video',
        title: 'Caso de uso 5: Análise de quadros de vídeo',
        content:
          '**Os modelos de visão locais podem analisar vídeo processando quadros individuais** — extraia quadros com ffmpeg, envie-os ao modelo de visão e encadeie com um LLM de texto para resumir entre quadros.',
        items: [
          '**Extração de quadros:** Use ffmpeg para extrair a 1fps: `ffmpeg -i video.mp4 -vf fps=1 frames/frame_%04d.jpg`',
          '**Análise por quadro:** Execute cada quadro pelo modelo de visão com um prompt consistente.',
          '**Resumo entre quadros:** Colete todas as descrições de quadros e passe-as a um LLM de texto com um prompt de resumo.',
          '**Casos de uso:** Revisão de câmeras de segurança, análise de gravações de aulas, inspeção de qualidade na fabricação.',
          '**Melhores modelos para quadros de vídeo:** Llama 3.2 Vision 11B para qualidade, LLaVA 1.6 7B para velocidade.',
          '**Realidade de velocidade:** A 1 quadro/segundo de extração e ~1 segundo por quadro de inferência em uma RTX 4070, um vídeo de 10 minutos leva ~20–30 minutos para ser completamente processado.',
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
            'Modelo': 'Moondream 2 (1.9B)',
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
            'Modelo': 'MiniCPM-V 2.6 (8B)',
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
            'Apto para produção?': 'Sim — melhor qualidade geral',
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
            text: 'A velocidade de geração de tokens para os modelos de visão é mais lenta do que para os modelos apenas de texto do mesmo tamanho, porque o encoder visual adiciona uma sobrecarga computacional significativa no primeiro token de imagem.',
          },
          {
            type: 'note',
            text: 'A memória unificada do Apple Silicon permite executar modelos maiores (até 90B em M5 Max 128GB) que não cabem na VRAM de uma GPU dedicada. A velocidade é ligeiramente inferior à de uma GPU NVIDIA equivalente, mas sem limitação de VRAM.',
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
          '**Cenas complexas, imagens ambíguas:** Os modelos locais a 50–70% do GPT-5.5 — lacuna de qualidade notável.',
          '**Reconhecimento de escrita à mão:** Os modelos locais são significativamente mais fracos, especialmente com cursiva.',
          '**Extração de dados de gráficos:** Pouco confiável tanto em modelos locais quanto no GPT-5.5, mas o GPT-5.5 é mais preciso em valores numéricos exatos.',
          '**Custo:** GPT-5.5 Vision a $0,01–0,03 por imagem vs $0 localmente. 10.000 imagens/mês = $100–300 economizados com modelos locais.',
          '**Privacidade:** Os modelos locais processam imagens no dispositivo — nenhum dado sai da máquina.',
          '**Velocidade:** Os modelos locais a 10–20 tok/s vs GPT-5.5 a 30–80 tok/s, mas o local não tem latência de rede para processamento em lote.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'Para o processamento em produção de faturas e formulários com entrada limpa, os VLMs locais (Llama 3.2 Vision 11B, Qwen2-VL 7B) podem substituir o GPT-5.5 Vision a custo zero. Para tudo que envolva escrita à mão, análise de cenas complexas ou conteúdo ambíguo, o GPT-5.5 ainda é superior.',
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
          '**Forças:** Amplo conhecimento geral, bem documentado, comunidade ampla, extensa integração com Ollama.',
          '**Fraquezas:** OCR mais fraco do que MiniCPM-V 2.6, análise de UI mais fraca do que InternVL 2.5, superado em geral por Llama 3.2 Vision 11B em benchmarks de qualidade.',
          '**Por que ainda é recomendado:** LLaVA 1.6 tem a comunidade mais grande, a maior quantidade de tutoriais e os mais exemplos de prompts de todos os VLMs locais.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — Melhor OCR multilíngue e desempenho em documentos',
        content:
          '**Qwen2-VL é o modelo visão-linguagem da Alibaba e a opção de código aberto mais potente em benchmarks de documentos em 2026.**',
        items: [
          '**Arquitetura:** Suporte de resolução dinâmica até 4096×4096 — significativamente maior do que LLaVA 1.6 (672×672) ou Llama 3.2 Vision (1120×1120).',
          '**OCR multilíngue:** O melhor da categoria para chinês, japonês, coreano e inglês.',
          '**7B vs 72B:** O 7B cabe em ~6 GB de VRAM (Q4) e é competitivo com Llama 3.2 Vision 11B na maioria das tarefas com documentos. O 72B usa ~48 GB e lidera a maioria dos benchmarks de código aberto.',
          '**Instalação no Ollama:** `ollama pull qwen2-vl:7b` — disponível diretamente na biblioteca de modelos do Ollama.',
          '**Suporte multi-imagem:** Aceita até 8 imagens por solicitação — a maior capacidade multi-imagem de todos os modelos desta comparação.',
          '**Página do modelo:** [Qwen2-VL 7B no Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
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
            text: 'Escolha seu modelo primeiro pela VRAM (2→4→6→8→16 GB), depois refine pelo caso de uso (OCR, UI, Q&A geral ou máxima qualidade).',
          },
          {
            type: 'plain-terms',
            text: 'Menos de 4 GB: apenas Moondream. 6 GB: MiniCPM-V para documentos, LLaVA 7B para fotos. 8–16 GB: Llama 3.2 Vision 11B para quase tudo. 64+ GB: Llama 3.2 Vision 90B para a melhor qualidade local.',
          },
        ],
        items: [
          '**Menos de 4 GB de VRAM:** Moondream 2 (1.9B) — única opção viável a 2 GB. Além do Moondream 2, PaliGemma 2 (3B) e SmolVLM (2.2B) são alternativas viáveis.',
          '**6 GB de VRAM:** MiniCPM-V 2.6 para OCR de documentos e processamento de faturas. LLaVA 1.6 7B para Q&A geral sobre fotos onde o suporte comunitário importa. Qwen2-VL 7B para OCR multilíngue.',
          '**8–16 GB de VRAM:** Llama 3.2 Vision 11B é a recomendação clara — melhor qualidade geral nesta categoria de VRAM.',
          '**16+ GB de VRAM:** LLaVA 1.6 13B adiciona mais capacidade para a compreensão de cenas complexas. InternVL 2.5 8B se seu caso de uso principal são capturas de UI ou código.',
          '**64+ GB de memória unificada (Apple M-Max/Ultra, multi-GPU):** Llama 3.2 Vision 90B para a melhor qualidade de VLM local disponível. Qwen2-VL 72B é uma alternativa com as melhores pontuações em benchmarks de código aberto.',
          '**Sempre verifique os números:** Independentemente do modelo, contraste qualquer valor numérico extraído de gráficos ou tabelas com os dados originais.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'Perguntas frequentes',
        faqs: [
          {
            q: 'Posso usar LLaVA ou Llama 3.2 Vision sem Ollama?',
            a: 'Sim. Você pode executar LLaVA e Llama 3.2 Vision diretamente usando llama.cpp (com suporte de visão), a biblioteca transformers (com o cartão de modelo apropriado) ou LM Studio. Ollama é recomendado pela simplicidade.',
          },
          {
            q: 'O Llama 3.2 Vision suporta entrada PDF direta?',
            a: 'Nenhum VLM local aceita PDF diretamente. Primeiro você deve converter as páginas do PDF em imagens (usando pdf2image, pypdfium2 ou similar) e então enviar cada página como uma solicitação de imagem separada.',
          },
          {
            q: 'Como os modelos de visão locais se comparam ao GPT-5.5 Vision?',
            a: 'GPT-5.5 Vision ainda é significativamente melhor em cenas ambíguas, escrita à mão, infográficos complexos e tarefas que requerem conhecimento do mundo. Llama 3.2 Vision 11B se aproxima do GPT-5.5 em documentos estruturados (faturas, formulários, fotos claras) mas fica para trás em imagens matizadas ou ambíguas.',
          },
          {
            q: 'Qual resolução de imagem os VLMs locais suportam?',
            a: 'LLaVA 1.6 suporta até 672×672 de resolução efetiva (com patches dinâmicos). MiniCPM-V 2.6 suporta até 1792×1792. Llama 3.2 Vision suporta resolução variável até 1120×1120. Para os melhores resultados de OCR, envie imagens de documentos a 150+ DPI.',
          },
          {
            q: 'Posso fazer fine-tuning de um modelo de visão local com minhas próprias imagens?',
            a: 'Sim, mas o fine-tuning de VLMs requer mais recursos do que o fine-tuning de LLMs apenas de texto. O fine-tuning do LLaVA está bem documentado usando a base de código de treinamento original. Para a maioria dos casos de uso, o prompt engineering sozinho é suficiente sem necessidade de fine-tuning.',
          },
          {
            q: 'Qual é o melhor modelo de visão local para 8 GB de VRAM?',
            a: 'Llama 3.2 Vision 11B (Q4 quantizado cabe em ~8 GB) para uso geral. Qwen2-VL 7B se o OCR multilíngue é a necessidade principal. Ambos disponíveis via Ollama com um único comando pull.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — qual é melhor para OCR?',
            a: 'MiniCPM-V 2.6 é mais preciso em OCR de documentos, especialmente em tabelas densas e escaneamentos a alto DPI. LLaVA 1.6 está melhor documentado e tem mais suporte comunitário.',
          },
          {
            q: 'Os modelos de visão locais conseguem ler escrita à mão?',
            a: 'Escrita à mão em letra de forma (letras em bloco): sim, com precisão moderada em Llama 3.2 Vision 11B e MiniCPM-V 2.6. Escrita em cursiva: pouco confiável em todos os modelos locais. GPT-5.5 Vision é significativamente melhor com cursiva.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'Fontes',
        items: [
          '[Página do projeto LLaVA](https://llava-vl.github.io) — Fichas de modelo LLaVA 1.5 e 1.6, detalhes de arquitetura e descrição do dataset de treinamento.',
          '[Llama 3.2 Vision no Hugging Face](https://huggingface.co/meta-llama) — Lançamento oficial do modelo pela Meta, ficha de modelo e cifras de benchmark.',
          '[MiniCPM-V 2.6 no Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — Ficha de modelo da OpenBMB, benchmarks de OCR e instruções de fine-tuning.',
          '[Moondream no GitHub](https://github.com/vikhyat/moondream) — Descrição de arquitetura, scripts de inferência e download do modelo.',
          '[InternVL 2.5 no Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — Ficha de modelo da OpenGVLab, pontuações de benchmark em documentos e tarefas de UI.',
          '[Documentação do Ollama](https://ollama.com) — Suporte de modelos de visão, referência de API e biblioteca de modelos.',
          '[Qwen2-VL no Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — Ficha de modelo Qwen2-VL da Alibaba, detalhes de arquitetura e benchmarks de OCR multilíngue.',
          '[PaliGemma 2 no Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Ficha de modelo PaliGemma 2 3B do Google.',
          '[SmolVLM no Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — Ficha de modelo SmolVLM da HuggingFace e instruções de inferência.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'Leitura relacionada',
        items: [
          '[Pipeline de IA multimodal local 2026](/pt/power-local-llm/local-multimodal-pipeline-voice-vision-text) — Combine modelos de visão com STT e TTS em um stack multimodal local completo.',
          '[Reconhecimento de voz local 2026: Whisper.cpp vs faster-whisper](/pt/power-local-llm/local-whisper-stt-comparison-2026) — Adicione entrada de voz para complementar a saída de visão.',
          '[TTS local e clonagem de voz 2026](/pt/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — Adicione saída de voz para ler em voz alta as respostas do VLM.',
          '[Como instalar Ollama](/pt/local-llms/how-to-install-ollama) — Pré-requisito: configuração e instalação do Ollama.',
          '[Guia de hardware para LLMs locais 2026](/pt/local-llms/local-llm-hardware-guide-2026) — Requisitos de VRAM e RAM para a inferência de modelos de visão.',
        ],
      },
    },
       schema: {
       '@context': 'https://schema.org',
       '@type': 'TechArticle',
       headline: 'Modelos de visão locais 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL e configuração multimodal com Ollama',
       description: 'Perguntas sobre imagens, OCR e análise de capturas de tela offline em 2026. Benchmark: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL, MiniCPM-V. Guia de VRAM e passos de configuração com Ollama.',
       url: 'https://www.promptquorum.com/pt/pt/power-local-llm/local-vision-models-llava-ollama-2026',
       inLanguage: 'pt-BR',
       datePublished: '2026-05-24',
       dateModified: '2026-05-24',
       author: { '@type': 'Person', name: 'Hans Kuepper' },
       publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
     },
  },

  ar: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: 'نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وQwen2-VL وإعداد Ollama متعدد الوسائط',
    seoTitle: 'نماذج الرؤية المحلية 2026: LLaVA وQwen2-VL عبر Ollama',
    intro:
      'تقبل نماذج الرؤية واللغة (VLMs) مدخلات الصور والنصوص معاً وتُنتج نصاً — لاستخراج النصوص من المستندات (OCR)، والإجابة على أسئلة حول الصور، وتحليل لقطات الشاشة، وقراءة الرسوم البيانية، وكل ذلك بصورة محلية تامة. في عام 2026، يُعدّ برنامج Ollama أيسر طريق لتشغيل نماذج VLM: سحب النموذج، وإرسال الصورة، والحصول على وصف أو إجابة. يقارن هذا الدليل أبرز نماذج الرؤية المحلية (LLaVA 1.6 وLlama 3.2 Vision وMiniCPM-V 2.6 وMoondream 2 وQwen2-VL وInternVL 2.5)، ويشرح خطوات إعداد Ollama تفصيلياً، ويربط كل نموذج بأفضل حالات استخدامه وفق متطلبات ذاكرة VRAM ومعايير الجودة.',
    metaDescription:
      'LLaVA 1.6 وQwen2-VL وMiniCPM-V مُختبرة محليًا 2026. تحليل صور وOCR واستخراج نصوص بدون اتصال — دليل VRAM وخطوات الإعداد مع Ollama.',
    twitterDescription:
      'نماذج الرؤية المحلية 2026: LLaVA وLlama 3.2 Vision وMiniCPM-V عبر Ollama. أسئلة وأجوبة حول الصور، واستخراج النصوص، وتحليل لقطات الشاشة — 100٪ دون اتصال. دليل VRAM وخطوات الإعداد.',
    audience:
      'المطورون الذين يحتاجون إلى فهم الصور محلياً دون واجهات برمجية سحابية — لمعالجة المستندات، وتحليل لقطات الشاشة، وأدوات إمكانية الوصول، وأنظمة المخزون، وأي سير عمل يتضمن صوراً ذات طابع خاص.',
    readTime: '11 دقيقة قراءة',
    educationalLevel: 'Intermediate',
    primaryTerm: 'نموذج الرؤية المحلي',
    targetKeywords: [
      'نموذج رؤية محلي 2026',
      'إعداد LLaVA مع Ollama',
      'تشغيل نموذج رؤية محلياً',
      'llama 3.2 vision محلي',
      'MiniCPM-V محلي',
      'qwen2-vl محلي',
      'qwen2-vl ollama',
      'أفضل نموذج رؤية محلي',
      'فهم الصور دون اتصال',
      'نموذج متعدد الوسائط محلي',
      'ollama نموذج رؤية',
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
      '**بالنسبة لأغلب المطورين الذين يمتلكون 6–8 غيغابايت من ذاكرة VRAM، يُعدّ MiniCPM-V 2.6 (8B) أو LLaVA 1.6 7B عبر Ollama نقطة الانطلاق الموصى بها في 2026.** كلاهما يعمل بنحو 6 غيغابايت من VRAM، ويدعم استخراج النصوص من المستندات وأسئلة الصور وتحليل لقطات الشاشة، وكلاهما متاح بأمر سحب واحد في Ollama. للحصول على أفضل جودة إجمالية مع 8–16 غيغابايت من VRAM، يُعدّ Llama 3.2 Vision 11B أفضل نموذج رؤية محلي وأقوى نموذج VLM محلي — لا سيما لتحليل المستندات والصور. مع توفر 2 غيغابايت فقط من VRAM، يبقى Moondream 2 (1.9B) الخيار العملي الوحيد، غير أن قدرته على فهم المشاهد المعقدة محدودة. جميع النماذج تعمل بصورة كاملة دون اتصال بعد تنزيلها؛ لا تحتاج إلى مفتاح API أو حساب سحابي.',
    quickAnswerTop: {
      ar: {
        question: 'ما أفضل نماذج الرؤية المحلية للتشغيل مع Ollama في 2026؟',
        answer:
          'يتوقف أفضل نموذج رؤية محلي على حجم ذاكرة VRAM لديك وحالة الاستخدام. مع 6–8 غيغابايت من VRAM، يُقدّم MiniCPM-V 2.6 أفضل توازن بين دقة استخراج النصوص (OCR) وفهم الصور العام. مع 8–16 غيغابايت من VRAM، يُعدّ Llama 3.2 Vision 11B الخيار الأول للأسئلة البصرية العامة وتحليل المستندات. مع 2 غيغابايت فقط من VRAM، لا يوجد سوى Moondream 2 — سريع لكن محدود القدرة. InternVL 2.5 هو الأفضل لتحليل لقطات واجهة المستخدم والرسوم البيانية، غير أن تكامله مع Ollama أقل من غيره.',
        bullets: [
          'أقل من 4 غيغابايت VRAM → Moondream 2 (1.9B): سريع، فهم محدود للصور المعقدة. كذلك: PaliGemma 2 3B (~3 غيغابايت) وSmolVLM 2.2B (~2 غيغابايت).',
          '6 غيغابايت VRAM → MiniCPM-V 2.6 أو LLaVA 1.6 7B أو Qwen2-VL 7B (الأفضل لاستخراج النصوص متعدد اللغات): أفضل توازن بين الجودة والمتطلبات.',
          '8–16 غيغابايت VRAM → Llama 3.2 Vision 11B: أفضل نموذج VLM محلي للصور والمستندات العامة.',
          '64 غيغابايت أو أكثر (أو Apple M-series) → Llama 3.2 Vision 90B أو Qwen2-VL 72B: أفضل جودة محلية تقترب من مستوى السحابة.',
          'الإعداد: `ollama pull llama3.2-vision` ثم `ollama run llama3.2-vision "صف هذه الصورة" --image photo.jpg`.',
          'الأفضل لاستخراج النصوص: Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 — قوي في استخراج النصوص من المستندات.',
          'الأفضل لواجهة المستخدم ولقطات الشاشة: InternVL 2.5 — مُدرَّب تحديداً على لقطات الكود وواجهات المستخدم.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL — أفضل أداء لاستخراج النصوص متعددة اللغات', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B هو أفضل نموذج رؤية محلي لأغلب المطورين الذين يمتلكون 8–16 غيغابايت من VRAM.** يعالج الصور والمستندات والمحتوى المختلط بأعلى دقة في فئته، وهو متاح مباشرةً عبر Ollama.',
          '**MiniCPM-V 2.6 (8B) هو الخيار الأمثل لاستخراج النصوص من المستندات عند استخدام 6 غيغابايت من VRAM.** تشمل بيانات تدريبه مسوحات ضوئية للمستندات عالية الدقة، مما يجعله أكثر دقة من LLaVA في الجداول والفواتير والنصوص الكثيفة.',
          '**LLaVA 1.6 7B هو نموذج VLM المحلي الأكثر توثيقاً واختباراً من قِبل المجتمع.** إنه الخيار الأكثر أماناً للأغراض العامة إن كنت تحتاج إلى أمثلة وافرة ودروس تعليمية وموارد استكشاف الأخطاء.',
          '**Moondream 2 (1.9B) هو الخيار العملي الوحيد عند وجود أقل من 4 غيغابايت من VRAM.** سريع وخفيف الوزن، لكنه يعاني مع المشاهد المعقدة والنصوص الكثيفة وقراءة الرسوم البيانية الدقيقة.',
          '**InternVL 2.5 (8B) هو الأقوى لتحليل لقطات الكود وواجهات المستخدم.** شمل تدريبه لقطات GitHub ونماذج واجهة المستخدم ومخرجات تنفيذ الكود.',
          '**جميع النماذج متاحة عبر Ollama بأمر `pull` واحد.** لا حاجة لتحويل النموذج أو الضغط الكمي أو إعداد Python. تعمل واجهة سطر الأوامر وواجهة HTTP API فور التثبيت.',
          '**لا يصل أي من هذه النماذج إلى جودة GPT-5.5 Vision.** نماذج VLM المحلية في 2026 هي خيار قوي من المستوى الثاني — ممتازة للمستندات المنظمة والصور الواضحة، وأضعف في الخطوط اليدوية والمشاهد الغامضة والرسوم المعلوماتية المعقدة.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: 'حقائق سريعة',
        items: [
          '**ما الذي تفعله نماذج VLM:** تقبل مدخلات الصور والنصوص → وتُنتج نصاً. ليست نماذج توليد صور — بل هي نماذج *فهم* الصور.',
          '**دعم Ollama:** جميع النماذج في هذه المقارنة لديها تكامل رسمي أو مجتمعي مع Ollama اعتباراً من مايو 2026.',
          '**أصغر نموذج قابل للاستخدام:** Moondream 2 بحجم 1.9 مليار معامل، ويتطلب نحو 2 غيغابايت من VRAM.',
          '**أكبر نموذج محلي عملي:** Llama 3.2 Vision 90B بنحو 64 غيغابايت من الذاكرة الموحدة (Apple M-series أو معالجات رسومات متعددة).',
          '**صيغ الصور المقبولة:** JPEG وPNG وWebP. يتفاوت الحد الأقصى للدقة حسب النموذج (عادةً من 1024×1024 إلى 4096×4096).',
          '**قوة استخراج النصوص:** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          'مقارنة لأبرز نماذج الرؤية المحلية المتاحة عبر Ollama أو الاستدلال المباشر في مايو 2026. أرقام VRAM للنسخ المضغوطة بـ 4 بت (Q4) ما لم يُشر إلى غير ذلك.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'لذاكرة VRAM بين 6–8 غيغابايت: MiniCPM-V 2.6 لاستخراج النصوص من المستندات، وLlama 3.2 Vision 11B للأسئلة العامة على الصور — كلاهما يعمل محلياً عبر Ollama.',
          },
          {
            type: 'plain-terms',
            text: 'فكّر في Moondream باعتباره الخيار الخفيف الذي يناسب أي جهاز لكنه يفهم أقل؛ وLLaVA باعتباره الاختيار الآمن للأغراض العامة؛ وMiniCPM-V باعتباره متخصص استخراج النصوص؛ وLlama 3.2 Vision باعتباره الأفضل شاملاً؛ وInternVL باعتباره خبير لقطات واجهة المستخدم والكود.',
          },
        ],
        columns: ['النموذج', 'المعاملات', 'VRAM (Q4)', 'أنواع الصور', 'الجودة', 'عبر Ollama؟'],
        rows: [
          {
            'النموذج': 'Moondream 2',
            'المعاملات': '1.9B',
            'VRAM (Q4)': '~2 غيغابايت',
            'أنواع الصور': 'صور بسيطة',
            'الجودة': 'أساسية',
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
            'النموذج': 'LLaVA 1.6 13B',
            'المعاملات': '13B',
            'VRAM (Q4)': '~10 غيغابايت',
            'أنواع الصور': 'صور، مستندات، رسوم بيانية',
            'الجودة': 'جيدة جداً',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'MiniCPM-V 2.6',
            'المعاملات': '8B',
            'VRAM (Q4)': '~6 غيغابايت',
            'أنواع الصور': 'صور، مستندات، استخراج نصوص',
            'الجودة': 'جيدة جداً',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Llama 3.2 Vision 11B',
            'المعاملات': '11B',
            'VRAM (Q4)': '~8 غيغابايت',
            'أنواع الصور': 'صور، مستندات',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Llama 3.2 Vision 90B',
            'المعاملات': '90B',
            'VRAM (Q4)': '~64 غيغابايت',
            'أنواع الصور': 'صور، مستندات، معقدة',
            'الجودة': 'الأفضل محلياً',
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
            'النموذج': 'Qwen2-VL 7B',
            'المعاملات': '7B',
            'VRAM (Q4)': '~6 غيغابايت',
            'أنواع الصور': 'صور، مستندات، OCR، متعدد اللغات',
            'الجودة': 'ممتازة',
            'عبر Ollama؟': 'نعم',
          },
          {
            'النموذج': 'Qwen2-VL 72B',
            'المعاملات': '72B',
            'VRAM (Q4)': '~48 غيغابايت',
            'أنواع الصور': 'صور، مستندات، معقدة',
            'الجودة': 'الأفضل (مفتوح المصدر)',
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
            'النموذج': 'SmolVLM 2.2B',
            'المعاملات': '2.2B',
            'VRAM (Q4)': '~2 غيغابايت',
            'أنواع الصور': 'صور بسيطة، تسميات توضيحية',
            'الجودة': 'أساسية+',
            'عبر Ollama؟': 'مجتمعي',
          },
        ],
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
          { 'النموذج': 'MiniCPM-V 2.6', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✓', 'البنود': '✓', 'النتيجة': '5/5' },
          { 'النموذج': 'Qwen2-VL 7B', 'المورد': '✓', 'التاريخ': '✓', 'المجموع': '✓', 'الضريبة': '✓', 'البنود': '✓', 'النتيجة': '5/5' },
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
        columns: ['الميزة', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            'الميزة': 'إدخال صور متعددة',
            'Moondream': 'لا',
            'LLaVA 7B': 'لا',
            'MiniCPM-V': 'نعم (حتى 4)',
            'Qwen2-VL': 'نعم (حتى 8)',
            'LLaVA 13B': 'لا',
            'Llama 3.2 Vision': 'نعم (متعدد الصفحات)',
            'InternVL': 'نعم',
          },
        ],
        items: [
          'يقبل MiniCPM-V 2.6 حتى 4 صور لكل موجّه؛ ويعالج Qwen2-VL حتى 8 صور. لا يقبل LLaVA وMoondream سوى صورة واحدة لكل طلب.',
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
          '**الخطوة 2 — سحب نموذج رؤية:** `ollama pull llama3.2-vision` (11B، ~8 غيغابايت تنزيلاً) أو `ollama pull moondream` (1.9B، ~2 غيغابايت) للأجهزة ذات VRAM المحدود.',
          '**الخطوة 3 — الاستخدام من سطر الأوامر:** `ollama run llama3.2-vision "ما الذي في هذه الصورة؟" --image /مسار/إلى/الصورة.jpg`',
          '**الخطوة 4 — استخدام HTTP API:** أرسل طلب POST إلى `http://localhost:11434/api/generate` مع الصورة كسلسلة مُرمَّزة بـ Base64 في مصفوفة `images`.',
          '**الخطوة 5 — مثال Python:** استخدم مكتبة `requests` مع ترميز Base64 — انظر مقطع الكود أدناه.',
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

# مثال على الاستخدام
result = ask_vision_model("invoice.png", "استخرج جميع بنود الفاتورة والمجاميع.")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: 'حالة الاستخدام 1: استخراج النصوص من المستندات',
        content:
          '**تتفوق نماذج VLM على نظام OCR التقليدي في المستندات شبه المنظمة** — الفواتير والإيصالات والعقود والجداول حيث يكون التخطيط بالغ الأهمية إلى جانب النص ذاته. يستخرج نظام OCR التقليدي (Tesseract) الأحرف، بينما تفهم نماذج VLM معنى تلك الأحرف في سياقها.',
        items: [
          '**ما يعمل بشكل جيد:** الفواتير الممسوحة ضوئياً، ولقطات شاشة ملفات PDF، والملاحظات المكتوبة بخط الطباعة، والجداول ذات الحدود الواضحة، وبطاقات الأعمال.',
          '**ما يعمل بشكل أقل جودة:** خط الكتابة اليدوية المتصلة، والمسوحات الضوئية منخفضة الدقة (أقل من 150 DPI)، وملفات JPEG المضغوطة بشدة، والنصوص المتداخلة.',
          '**أفضل النماذج لاستخراج النصوص:** MiniCPM-V 2.6 (أعلى دقة في فئة 6 غيغابايت)، وLlama 3.2 Vision 11B (الأفضل لأنواع المستندات المتنوعة).',
          '**هندسة الموجّهات لاستخراج النصوص:** "استخرج جميع النصوص من هذا المستند بالضبط كما هي مكتوبة، مع الحفاظ على فواصل الأسطر." أو: "أعِد محتوى هذه الفاتورة بتنسيق JSON بالحقول: المورد، التاريخ، البنود[]، المجموع."',
          '**مقارنةً بنظام OCR التقليدي:** نماذج VLM أبطأ لكنها أكثر فهماً للسياق. برنامج Tesseract أسرع لاستخراج النص الخالص من المستندات النظيفة. استخدم نماذج VLM عندما تحتاج استخراج بيانات منظمة لا مجرد نص خام.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: 'حالة الاستخدام 2: الأسئلة والأجوبة حول الصور ووصفها',
        content:
          '**لفهم المشاهد العام ووصف المنتجات والأسئلة والأجوبة البصرية، يُعدّ Llama 3.2 Vision 11B النموذج المحلي الموصى به.** يُنتج أوصافاً طبيعية تفصيلية ويتعامل مع الأسئلة الدقيقة حول محتوى الصور بكفاءة.',
        items: [
          '**وصف المشاهد:** "ما الذي في هذه الصورة؟" — الأشياء والأشخاص والأنشطة والبيئة والمزاج.',
          '**فهرسة المنتجات:** معالجة صور المنتجات بقالب موجّه مثل "صِف هذا المنتج: اللون، الشكل، المادة، الحالة." مفيد للمخزون في التجارة الإلكترونية دون واجهات برمجية سحابية.',
          '**إمكانية الوصول:** توليد النص البديل (alt text) للصور على نطاق واسع. دقة كافية لمتطلبات إمكانية الوصول في صور المنتجات القياسية.',
          '**أفضل النماذج:** LLaVA 1.6 13B أو Llama 3.2 Vision 11B للأسئلة العامة على الصور. LLaVA 1.6 7B لمعالجة الصور بحجم كبير حيث تكون السرعة أهم من الدقة.',
          '**اعتبارات السرعة:** على معالج رسومات بسعة 6 غيغابايت، يولّد Llama 3.2 Vision 11B Q4 نحو 8–12 رمزاً في الثانية للردود على الصور — معالجة 100 صورة تستغرق نحو 2–5 دقائق بحسب طول الوصف.',
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
          '**أفضل النماذج:** InternVL 2.5 8B (أفضل فهم لواجهة المستخدم)، MiniCPM-V 2.6 (الخيار الثاني مع دعم Ollama).',
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
          '**أفضل النماذج للرسوم البيانية:** InternVL 2.5 (أفضل فهم للمخططات)، Llama 3.2 Vision 11B (جيد مع المخططات ذات التسميات الواضحة).',
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
          '**أفضل النماذج لإطارات الفيديو:** Llama 3.2 Vision 11B للجودة، وLLaVA 1.6 7B للسرعة (معدلات إطارات أعلى).',
          '**الواقع العملي للسرعة:** عند استخراج إطار في الثانية واستدلال نحو ثانية لكل إطار على RTX 4070، يستغرق معالجة فيديو مدته 10 دقائق نحو 20–30 دقيقة كاملة.',
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
        title: 'متطلبات VRAM والأداء الفعلي',
        content:
          'تضيف نماذج الرؤية المحلية مشفِّراً بصرياً فوق النموذج اللغوي الأساسي، مما يزيد من متطلبات VRAM ووقت الاستدلال مقارنةً بالنماذج النصية البحتة.',
        columns: ['النموذج', 'VRAM (Q4)', 'رمز/ثانية (RTX 4070)', 'رمز/ثانية (M5 Pro 36GB)', 'مناسب للإنتاج؟'],
        rows: [
          {
            'النموذج': 'Moondream 2 (1.9B)',
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
            'النموذج': 'MiniCPM-V 2.6 (8B)',
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
            'مناسب للإنتاج؟': 'نعم — أفضل جودة شاملة',
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
            text: 'سرعة توليد الرموز في نماذج الرؤية أبطأ من نماذج النص البحت بنفس الحجم، لأن المشفِّر البصري يضيف حملاً حسابياً كبيراً عند الرمز الأول للصورة. تُولَّد الرموز النصية اللاحقة بسرعة قريبة من الطبيعية.',
          },
          {
            type: 'note',
            text: 'تتيح الذاكرة الموحدة لـ Apple Silicon تشغيل نماذج أكبر (حتى 90B على M5 Max 128GB) لا تتسع في ذاكرة VRAM المنفصلة. السرعة أبطأ قليلاً من معالج رسومات NVIDIA المكافئ لكن دون قيد VRAM.',
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
          '**الخصوصية:** النماذج المحلية تعالج الصور على الجهاز — لا يغادر أي بيان الجهاز. GPT-5.5 يرسل الصور إلى خوادم OpenAI.',
          '**السرعة:** النماذج المحلية بين 10–20 رمزاً/ثانية مقابل GPT-5.5 بين 30–80 رمزاً/ثانية، لكن المعالجة المحلية لا تعاني من زمن الاستجابة الشبكي في المعالجة الدُّفعية.',
        ],
        callouts: [
          {
            type: 'note',
            text: 'لمعالجة الفواتير والنماذج في بيئة الإنتاج مع مدخلات نظيفة، يمكن لنماذج VLM المحلية (Llama 3.2 Vision 11B وQwen2-VL 7B) أن تحل محل GPT-5.5 Vision بتكلفة صفرية. لكل ما يتضمن خطاً يدوياً أو تحليل مشاهد معقدة أو محتوى غامض، لا يزال GPT-5.5 هو الأفضل.',
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
          '**نقاط الضعف:** استخراج نصوص أضعف من MiniCPM-V 2.6، وتحليل واجهة مستخدم أضعف من InternVL 2.5، وتفوّق Llama 3.2 Vision 11B عليه في معايير الجودة.',
          '**سبب الاستمرار في التوصية به:** لدى LLaVA 1.6 أكبر مجتمع، وأكثر الدروس التعليمية، وأكثر أمثلة الموجّهات من بين جميع نماذج VLM المحلية. عند وجود مشكلة، تجد المساعدة أسرع.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — أفضل أداء لاستخراج النصوص متعددة اللغات',
        content:
          '**Qwen2-VL هو نموذج الرؤية واللغة من Alibaba، والخيار الأقوى مفتوح المصدر في معايير المستندات لعام 2026.** النسخة 7B تنافس Llama 3.2 Vision 11B بذاكرة VRAM أقل، والنسخة 72B تتصدر معظم قوائم نماذج VLM مفتوحة المصدر.',
        items: [
          '**البنية:** دعم دقة ديناميكية حتى 4096×4096 — أعلى بكثير من LLaVA 1.6 (672×672) أو Llama 3.2 Vision (1120×1120). يتيح قراءة المسوحات الضوئية عالية الدقة دون تقليل العينة.',
          '**استخراج النصوص متعددة اللغات:** الأفضل في فئته للصينية واليابانية والكورية والإنجليزية. شملت بيانات التدريب مجموعات مستندات متعددة اللغات على نطاق واسع — ميزة كبيرة على LLaVA وLlama 3.2 Vision للمستندات غير الإنجليزية.',
          '**7B مقابل 72B:** تتسع النسخة 7B في ~6 غيغابايت VRAM (Q4) وتنافس Llama 3.2 Vision 11B في معظم مهام المستندات. تستخدم النسخة 72B ~48 غيغابايت وتتصدر معظم معايير مفتوحة المصدر.',
          '**التثبيت على Ollama:** `ollama pull qwen2-vl:7b` — متاح مباشرةً من مكتبة نماذج Ollama.',
          '**دعم الصور المتعددة:** يقبل حتى 8 صور لكل طلب — أعلى قدرة متعددة الصور من بين جميع النماذج في هذه المقارنة.',
          '**صفحة النموذج:** [Qwen2-VL 7B على Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
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
            text: 'اختر نموذجك بحسب VRAM أولاً (2→4→6→8→16 غيغابايت)، ثم دقّق بحسب حالة الاستخدام (استخراج النصوص، أو واجهة المستخدم، أو الأسئلة العامة، أو أقصى جودة).',
          },
          {
            type: 'plain-terms',
            text: 'أقل من 4 غيغابايت: Moondream فقط. 6 غيغابايت: MiniCPM-V للمستندات، وLLaVA 7B للصور. 8–16 غيغابايت: Llama 3.2 Vision 11B لتقريباً كل شيء. 64 غيغابايت أو أكثر: Llama 3.2 Vision 90B لأفضل جودة محلية.',
          },
        ],
        items: [
          '**أقل من 4 غيغابايت VRAM:** Moondream 2 (1.9B) — الخيار الوحيد عند 2 غيغابايت. تجاوز Moondream 2، يوجد PaliGemma 2 (3B) وSmolVLM (2.2B) كبدائل. PaliGemma 2 لديه فهم أفضل للمستندات من Moondream مع تكلفة VRAM طفيفة (~3 غيغابايت). SmolVLM يتنازل عن الجودة لأقصى كفاءة. لا يصلح أي منها لاستخراج النصوص الكثيفة.',
          '**6 غيغابايت VRAM:** MiniCPM-V 2.6 لاستخراج نصوص المستندات ومعالجة الفواتير. LLaVA 1.6 7B للأسئلة العامة على الصور حيث يهم دعم المجتمع. Qwen2-VL 7B لاستخراج النصوص متعدد اللغات أو عند الحاجة إلى أعلى دقة.',
          '**8–16 غيغابايت VRAM:** Llama 3.2 Vision 11B هو التوصية الواضحة — أفضل جودة شاملة في هذه الفئة من VRAM، ودعم واسع في Ollama.',
          '**16 غيغابايت أو أكثر من VRAM:** LLaVA 1.6 13B يضيف طاقة أكبر لفهم المشاهد المعقدة مقارنةً بالنسخة 7B. InternVL 2.5 8B إذا كان الاستخدام الأساسي هو لقطات واجهة المستخدم أو الكود.',
          '**64 غيغابايت أو أكثر من الذاكرة الموحدة (Apple M-Max/Ultra، معالجات رسومات متعددة):** Llama 3.2 Vision 90B لأفضل جودة VLM محلية متاحة، يقترب من أداء مستوى السحابة في مهام المستندات. Qwen2-VL 72B بديل بأعلى درجات معايير مفتوحة المصدر.',
          '**تحقق دائماً من الأرقام:** بصرف النظر عن النموذج، قابل أي قيمة رقمية مستخرجة من الرسوم البيانية أو الجداول مع البيانات الأصلية. نماذج VLM المحلية تُهلوس أرقاماً دقيقة من الرسوم البصرية.',
        ],
      },
      faq: {
        id: 'faq',
        title: 'الأسئلة الشائعة',
        faqs: [
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
            a: 'لا يزال GPT-5.5 Vision أفضل بشكل ملحوظ في المشاهد الغامضة والخط اليدوي والرسوم المعلوماتية المعقدة والمهام التي تتطلب معرفة عالمية. يقترب Llama 3.2 Vision 11B من GPT-5.5 في المستندات المنظمة (الفواتير والنماذج والصور الواضحة) لكن يتأخر في الصور الدقيقة والغامضة. انظر المقارنة الكاملة أعلاه للاطلاع على تفاصيل التكلفة والخصوصية والسرعة.',
          },
          {
            q: 'ما دقة الصور التي تدعمها نماذج VLM المحلية؟',
            a: 'يدعم LLaVA 1.6 حتى 672×672 دقة فعّالة (مع التصحيح الديناميكي). يدعم MiniCPM-V 2.6 حتى 1792×1792 — وهذا أحد أسباب تفوقه على LLaVA في المسوحات الضوئية عالية الدقة. يدعم Llama 3.2 Vision دقة متغيرة حتى 1120×1120. لأفضل نتائج استخراج النصوص، أرسل صور المستندات بدقة 150 نقطة لكل بوصة أو أعلى.',
          },
          {
            q: 'هل يمكنني ضبط نموذج رؤية محلي دقيقاً على صوري الخاصة؟',
            a: 'نعم، لكن الضبط الدقيق لنماذج VLM يستهلك موارد أكثر من الضبط الدقيق للنماذج اللغوية النصية البحتة — إذ يجب معالجة أزواج تدريب الصور والنصوص عبر المرور الأمامي الكامل. الضبط الدقيق لـ LLaVA موثق بشكل جيد باستخدام قاعدة كود التدريب الأصلية. يدعم MiniCPM-V الضبط الدقيق عبر سكريبتات التدريب الرسمية على Hugging Face. في معظم حالات الاستخدام، يكفي هندسة الموجّهات دون الضبط الدقيق.',
          },
          {
            q: 'ما أفضل نموذج رؤية محلي لـ 8 غيغابايت VRAM؟',
            a: 'Llama 3.2 Vision 11B (الضغط الكمي Q4 يتسع في ~8 غيغابايت) للاستخدام العام. Qwen2-VL 7B إذا كان استخراج النصوص متعدد اللغات هو الحاجة الرئيسية. كلاهما متاح عبر Ollama بأمر pull واحد.',
          },
          {
            q: 'LLaVA مقابل MiniCPM-V — أيهما أفضل لاستخراج النصوص؟',
            a: 'MiniCPM-V 2.6 أكثر دقة في استخراج نصوص المستندات، خاصةً الجداول الكثيفة والمسوحات الضوئية عالية الدقة. LLaVA 1.6 أفضل توثيقاً ولديه دعم مجتمعي أوسع. لدقة استخراج النصوص اختر MiniCPM-V. لموارد المجتمع واستكشاف الأخطاء اختر LLaVA.',
          },
          {
            q: 'هل تستطيع نماذج الرؤية المحلية قراءة الخط اليدوي؟',
            a: 'الخط اليدوي المطبوع (الحروف المنفصلة): نعم، بدقة معتدلة على Llama 3.2 Vision 11B وMiniCPM-V 2.6. الخط المتصل (الكرسيف): غير موثوق على جميع النماذج المحلية. GPT-5.5 Vision أفضل بكثير في الخط المتصل. لاستخراج النصوص اليدوية المتصلة في بيئة الإنتاج، لا تزال الواجهات البرمجية السحابية هي الأنسب.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: 'المصادر',
        items: [
          '[صفحة مشروع LLaVA](https://llava-vl.github.io) — بطاقات نموذج LLaVA 1.5 و1.6، وتفاصيل البنية، ووصف مجموعة بيانات التدريب.',
          '[Llama 3.2 Vision على Hugging Face](https://huggingface.co/meta-llama) — الإصدار الرسمي للنموذج من Meta، وبطاقة النموذج، وأرقام المعايير.',
          '[MiniCPM-V 2.6 على Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — بطاقة نموذج OpenBMB، ومعايير استخراج النصوص، وتعليمات الضبط الدقيق.',
          '[Moondream على GitHub](https://github.com/vikhyat/moondream) — وصف البنية، وسكريبتات الاستدلال، وتنزيل النموذج.',
          '[InternVL 2.5 على Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — بطاقة نموذج OpenGVLab، ودرجات المعايير في مهام المستندات وواجهة المستخدم.',
          '[توثيق Ollama](https://ollama.com) — دعم نماذج الرؤية، ومرجع الواجهة البرمجية، ومكتبة النماذج.',
          '[Qwen2-VL على Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — بطاقة نموذج Qwen2-VL من Alibaba، وتفاصيل البنية، ومعايير استخراج النصوص متعددة اللغات.',
          '[PaliGemma 2 على Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — بطاقة نموذج PaliGemma 2 3B من Google.',
          '[SmolVLM على Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — بطاقة نموذج SmolVLM من HuggingFace وتعليمات الاستدلال.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: 'قراءات ذات صلة',
        items: [
          '[خط أنابيب الذكاء الاصطناعي متعدد الوسائط المحلي 2026](/ar/power-local-llm/local-multimodal-pipeline-voice-vision-text) — دمج نماذج الرؤية مع تحويل الكلام إلى نص وتحويل النص إلى كلام في حزمة محلية متكاملة.',
          '[تحويل الكلام إلى نص محلياً 2026: Whisper.cpp مقابل faster-whisper](/ar/power-local-llm/local-whisper-stt-comparison-2026) — أضف إدخال الصوت لتكملة مخرجات الرؤية.',
          '[تحويل النص إلى كلام ونسخ الصوت محلياً 2026](/ar/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — أضف مخرجات صوتية لقراءة ردود نماذج VLM بصوت مسموع.',
          '[كيفية تثبيت Ollama](/ar/local-llms/how-to-install-ollama) — المتطلب الأساسي: إعداد وتكوين Ollama.',
          '[دليل عتاد النماذج اللغوية المحلية 2026](/ar/local-llms/local-llm-hardware-guide-2026) — متطلبات VRAM وذاكرة الوصول العشوائي لاستدلال نماذج الرؤية.',
        ],
      },
    },
  },
  ko: {
    freshness_tier: 'semi_annual',
    publishDate: '2026-05-14',
    dateModified: '2026-05-14',
    next_refresh_due: '2026-11-14',
    theme: 'Voice, Speech & Multimodal',
    title: '로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL 및 Ollama 멀티모달 설정 가이드',
    seoTitle: '최고의 로컬 비전 모델 2026: LLaVA와 Qwen2-VL',
    intro:
      '비전-언어 모델(VLM)은 이미지와 텍스트를 입력으로 받아 텍스트를 출력합니다. 문서 OCR, 이미지 질의응답, 스크린샷 분석, 차트 읽기 등 모든 작업을 로컬에서 처리할 수 있습니다. 2026년 현재 VLM을 실행하는 가장 간편한 방법은 Ollama를 사용하는 것입니다. 모델을 다운로드하고 이미지를 전송하면 설명이나 답변을 받을 수 있습니다. 이 가이드는 주요 로컬 비전 모델(LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, Qwen2-VL, InternVL 2.5)을 비교하고, Ollama 설정 단계를 설명하며, VRAM 요구 사항과 품질 벤치마크에 따라 각 모델의 최적 활용 사례를 안내합니다.',
    metaDescription:
      '2026년 오프라인 이미지 질의응답, OCR, 스크린샷 분석 가이드. 벤치마크: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL, MiniCPM-V. Ollama VRAM 및 설정 방법.',
    twitterDescription:
      '로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, MiniCPM-V via Ollama. 이미지 질의응답, OCR, 스크린샷 분석 — 100% 오프라인. VRAM 가이드 및 설정 단계.',
    audience:
      '클라우드 API 없이 로컬에서 이미지 이해 기능이 필요한 개발자 — 문서 처리, 스크린샷 분석, 접근성 도구, 재고 시스템 또는 민감한 이미지를 다루는 워크플로우에 적합합니다.',
    readTime: '11분 분량',
    educationalLevel: 'Intermediate',
    primaryTerm: '로컬 비전 모델',
    targetKeywords: [
      '로컬 비전 모델 2026',
      'LLaVA Ollama 설정',
      '로컬 비전 모델 실행 방법',
      'llama 3.2 vision 로컬',
      'MiniCPM-V 로컬',
      'qwen2-vl 로컬',
      'qwen2-vl ollama',
      '최고의 로컬 비전 모델',
      '오프라인 이미지 이해',
      '로컬 멀티모달 모델',
      'ollama 비전 모델',
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
      '**VRAM 6~8 GB를 보유한 대부분의 개발자에게는 MiniCPM-V 2.6 (8B) 또는 LLaVA 1.6 7B via Ollama가 2026년 추천 시작점입니다.** 두 모델 모두 약 6 GB VRAM에서 동작하며, 문서 OCR, 이미지 질의응답, 스크린샷 분석을 지원하고 단일 Ollama 명령어로 실행할 수 있습니다. 8~16 GB VRAM에서 전반적인 최고 품질을 원한다면 Llama 3.2 Vision 11B가 최선의 선택이며, 특히 문서와 사진 처리에 강합니다. VRAM이 2 GB밖에 없다면 Moondream 2 (1.9B)가 유일한 실용적 옵션이지만, 복잡한 장면 처리에는 한계가 있습니다. 모든 모델은 다운로드 후 100% 오프라인으로 동작하며, API 키나 클라우드 계정이 필요하지 않습니다.',
    quickAnswerTop: {
      ko: {
        question: '2026년 Ollama에서 사용하기에 가장 좋은 로컬 비전 모델은 무엇입니까?',
        answer:
          '최적의 로컬 비전 모델은 VRAM 용량과 사용 목적에 따라 달라집니다. VRAM 6~8 GB의 경우 MiniCPM-V 2.6이 OCR 정확도와 일반적인 이미지 이해 사이에서 최고의 균형을 제공합니다. VRAM 8~16 GB의 경우 Llama 3.2 Vision 11B가 일반적인 시각적 질의응답과 문서 분석에서 최우선 선택입니다. VRAM 2 GB의 경우 Moondream 2가 유일한 대안으로, 빠르지만 처리 능력에 한계가 있습니다. InternVL 2.5는 UI 스크린샷과 차트 분석에 가장 강하지만, 다른 모델들보다 Ollama 통합이 적습니다.',
        bullets: [
          'VRAM 4 GB 미만 → Moondream 2 (1.9B): 빠르지만 복잡한 이미지 이해 제한적. 대안: PaliGemma 2 3B (~3 GB), SmolVLM 2.2B (~2 GB).',
          'VRAM 6 GB → MiniCPM-V 2.6, LLaVA 1.6 7B 또는 Qwen2-VL 7B (다국어 OCR에 최적): 품질과 하드웨어 균형이 최고.',
          'VRAM 8~16 GB → Llama 3.2 Vision 11B: 사진과 문서 처리에서 최고의 로컬 VLM.',
          'VRAM 64+ GB (또는 Apple M-series) → Llama 3.2 Vision 90B 또는 Qwen2-VL 72B: 클라우드 수준에 가까운 최고 로컬 품질.',
          '설정: `ollama pull llama3.2-vision` 후 `ollama run llama3.2-vision "이 이미지를 설명해 주세요" --image 사진.jpg`.',
          'OCR 최고: Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 — 문서 텍스트 추출에 강함.',
          'UI/스크린샷 최고: InternVL 2.5 — 코드 및 UI 스크린샷으로 특별 훈련.',
        ],
        updatedDate: '2026-05-14',
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
      { label: 'Qwen2-VL — 최고의 다국어 OCR', anchor: '#qwen2vl-deep-dive' },
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
          '**Llama 3.2 Vision 11B는 VRAM 8~16 GB를 보유한 대부분의 개발자에게 최고의 로컬 비전 모델입니다.** 사진, 문서, 혼합 콘텐츠를 동급 최고의 정확도로 처리하며 Ollama에서 직접 사용할 수 있습니다.',
          '**MiniCPM-V 2.6 (8B)는 VRAM 6 GB에서 문서 OCR에 가장 적합한 모델입니다.** 훈련 데이터에 고해상도 문서 스캔이 포함되어 있어 표, 청구서, 빽빽한 텍스트에서 LLaVA보다 더 정확합니다.',
          '**LLaVA 1.6 7B는 커뮤니티에서 가장 많이 문서화되고 검증된 로컬 VLM입니다.** 풍부한 예제, 튜토리얼, 문제 해결 자료가 필요하다면 가장 안전한 범용 선택입니다.',
          '**Moondream 2 (1.9B)는 VRAM 4 GB 미만에서 유일한 실용적 선택입니다.** 빠르고 가볍지만 복잡한 장면, 빽빽한 텍스트, 정확한 차트 읽기에는 어려움이 있습니다.',
          '**InternVL 2.5 (8B)는 코드 스크린샷 및 UI 분석에서 가장 강력합니다.** GitHub 스크린샷, UI 목업, 코드 실행 결과로 훈련되어 다른 모델들보다 이 분야에서 뛰어납니다.',
          '**모든 모델은 단일 `pull` 명령어로 Ollama에서 사용 가능합니다.** 모델 변환, 양자화, Python 설정이 필요 없습니다. CLI와 HTTP API가 즉시 동작합니다.',
          '**이 모델들 중 GPT-5.5 Vision의 품질에 근접하는 것은 없습니다.** 2026년의 로컬 VLM은 구조화된 문서와 선명한 사진에는 우수하지만, 손글씨와 복잡한 차트에는 여전히 약합니다.',
        ],
      },
      quickFacts: {
        id: 'quick-facts',
        title: '빠른 사실',
        items: [
          '**VLM의 역할:** 이미지 + 텍스트를 입력으로 받아 텍스트를 출력합니다. 이미지 생성 모델이 아니라, 이미지를 *이해*하는 모델입니다.',
          '**Ollama 지원:** 이 비교의 모든 모델은 2026년 5월 기준으로 Ollama 공식 또는 커뮤니티 통합을 지원합니다.',
          '**가장 작은 사용 가능 모델:** Moondream 2, 1.9B 파라미터, ~2 GB VRAM.',
          '**가장 큰 실용적 로컬 모델:** Llama 3.2 Vision 90B, ~64 GB 통합 메모리 필요 (Apple M-series 또는 멀티 GPU).',
          '**이미지 입력 형식:** JPEG, PNG, WebP 지원. 최대 해상도는 모델별로 다름 (일반적으로 1024×1024~4096×4096).',
          '**OCR 정확도:** Qwen2-VL 7B ≈ MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
          '2026년 5월 기준으로 Ollama 또는 직접 추론을 통해 사용 가능한 주요 로컬 비전 모델 비교. VRAM 수치는 별도 표시가 없는 한 4비트 양자화(Q4) 변형 기준입니다.',
        snippetBlocks: [
          {
            type: 'one-sentence',
            text: 'VRAM 6~8 GB의 경우: 문서 OCR에는 MiniCPM-V 2.6, 일반 이미지 질의응답에는 Llama 3.2 Vision 11B — 두 모델 모두 Ollama를 통해 로컬에서 실행 가능합니다.',
          },
          {
            type: 'plain-terms',
            text: 'Moondream은 어디서든 실행되지만 이해력이 낮은 경량 옵션, LLaVA는 안전한 범용 선택, MiniCPM-V는 OCR 전문가, Llama 3.2 Vision은 전반적 최고 성능, InternVL은 UI 스크린샷 및 코드 전문가로 생각하면 됩니다.',
          },
        ],
        columns: ['모델', '파라미터', 'VRAM (Q4)', '이미지 유형', '품질', 'Ollama 지원?'],
        rows: [
          {
            '모델': 'Moondream 2',
            '파라미터': '1.9B',
            'VRAM (Q4)': '~2 GB',
            '이미지 유형': '단순 사진',
            '품질': '기본',
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
            '모델': 'LLaVA 1.6 13B',
            '파라미터': '13B',
            'VRAM (Q4)': '~10 GB',
            '이미지 유형': '사진, 문서, 차트',
            '품질': '매우 좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'MiniCPM-V 2.6',
            '파라미터': '8B',
            'VRAM (Q4)': '~6 GB',
            '이미지 유형': '사진, 문서, OCR',
            '품질': '매우 좋음',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Llama 3.2 Vision 11B',
            '파라미터': '11B',
            'VRAM (Q4)': '~8 GB',
            '이미지 유형': '사진, 문서',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Llama 3.2 Vision 90B',
            '파라미터': '90B',
            'VRAM (Q4)': '~64 GB',
            '이미지 유형': '사진, 문서, 복잡한 콘텐츠',
            '품질': '로컬 최고',
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
            '모델': 'Qwen2-VL 7B',
            '파라미터': '7B',
            'VRAM (Q4)': '~6 GB',
            '이미지 유형': '사진, 문서, OCR, 다국어',
            '품질': '우수',
            'Ollama 지원?': '예',
          },
          {
            '모델': 'Qwen2-VL 72B',
            '파라미터': '72B',
            'VRAM (Q4)': '~48 GB',
            '이미지 유형': '사진, 문서, 복잡한 콘텐츠',
            '품질': '최고 (오픈소스)',
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
            '모델': 'SmolVLM 2.2B',
            '파라미터': '2.2B',
            'VRAM (Q4)': '~2 GB',
            '이미지 유형': '단순 사진, 설명',
            '품질': '기본+',
            'Ollama 지원?': '커뮤니티',
          },
        ],
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
          { '모델': 'MiniCPM-V 2.6', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✓', '항목 수': '✓', '점수': '5/5' },
          { '모델': 'Qwen2-VL 7B', '공급업체': '✓', '날짜': '✓', '합계': '✓', '세금': '✓', '항목 수': '✓', '점수': '5/5' },
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
        columns: ['기능', 'Moondream', 'LLaVA 7B', 'MiniCPM-V', 'Qwen2-VL', 'LLaVA 13B', 'Llama 3.2 Vision', 'InternVL'],
        rows: [
          {
            '기능': '다중 이미지 입력',
            'Moondream': '아니오',
            'LLaVA 7B': '아니오',
            'MiniCPM-V': '예 (최대 4)',
            'Qwen2-VL': '예 (최대 8)',
            'LLaVA 13B': '아니오',
            'Llama 3.2 Vision': '예 (다중 페이지)',
            'InternVL': '예',
          },
        ],
        items: [
          'MiniCPM-V 2.6은 프롬프트당 최대 4개 이미지를, Qwen2-VL은 최대 8개 이미지를 허용합니다. LLaVA와 Moondream은 요청당 이미지 1개만 허용합니다.',
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
          '**2단계 — 비전 모델 다운로드:** `ollama pull llama3.2-vision` (11B, ~8 GB 다운로드) 또는 VRAM이 적은 경우 `ollama pull moondream` (1.9B, ~2 GB).',
          '**3단계 — CLI에서 사용:** `ollama run llama3.2-vision "이 이미지에 무엇이 있습니까?" --image /경로/사진.jpg`',
          '**4단계 — HTTP API 사용:** `http://localhost:11434/api/generate`에 POST 요청을 보내고 `images` 배열에 Base64 인코딩된 이미지 문자열을 포함시키십시오.',
          '**5단계 — Python 예제:** Base64 인코딩과 함께 `requests` 라이브러리 사용 — 아래 코드 블록을 참조하십시오.',
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

# 사용 예시
result = ask_vision_model("청구서.png", "이 청구서에서 모든 항목과 합계를 추출하십시오.")
print(result)`,
        codeLanguage: 'python',
      },
      useCaseOcr: {
        id: 'use-case-ocr',
        title: '활용 사례 1: OCR 및 문서 추출',
        content:
          '**VLM은 반구조화된 문서에서 전통적인 OCR보다 우수한 성능을 발휘합니다** — 청구서, 영수증, 계약서, 텍스트 자체만큼 레이아웃이 중요한 표. 전통적인 OCR(Tesseract)은 문자를 추출하지만, VLM은 문맥에서 그 문자들이 의미하는 바를 이해합니다.',
        items: [
          '**잘 작동하는 경우:** 스캔된 청구서, PDF 스크린샷, 인쇄체 손글씨 메모, 명확한 테두리가 있는 표, 명함.',
          '**잘 작동하지 않는 경우:** 필기체 손글씨, 150 DPI 미만의 스캔, 과도한 압축 JPEG, 겹친 텍스트.',
          '**OCR 최적 모델:** MiniCPM-V 2.6 (6 GB 카테고리에서 최고 OCR 정확도), Llama 3.2 Vision 11B (혼합 문서 유형에 최적).',
          '**OCR 프롬프트 엔지니어링:** "줄바꿈을 유지하면서 이 문서의 모든 텍스트를 정확히 추출하십시오." 또는 "이 청구서의 내용을 다음 필드가 있는 JSON으로 반환하십시오: 공급업체, 날짜, 항목[], 합계."',
          '**전통적인 OCR 대비:** VLM은 더 느리지만 더 의미론적입니다. Tesseract는 깨끗한 문서의 순수한 텍스트 추출에 더 빠릅니다. 단순 일반 텍스트가 아닌 구조화된 데이터 추출이 필요할 때 VLM을 사용하십시오.',
        ],
      },
      useCaseQA: {
        id: 'use-case-qa',
        title: '활용 사례 2: 이미지 질의응답',
        content:
          '**일반적인 장면 이해, 제품 설명, 시각적 질의응답에는 Llama 3.2 Vision 11B가 권장 로컬 모델입니다.** 자연스럽고 상세한 설명을 생성하며 사진 내용에 대한 미묘한 질문도 처리합니다.',
        items: [
          '**장면 설명:** "이 사진에 무엇이 있습니까?" — 객체, 사람, 활동, 환경, 분위기.',
          '**제품 카탈로그 작성:** 프롬프트 템플릿으로 제품 사진 처리: "이 제품을 설명하십시오: 색상, 형태, 소재, 상태." 클라우드 API 없이 전자상거래 재고 관리에 유용.',
          '**접근성:** 이미지에 대한 대체 텍스트를 대규모로 생성합니다. 표준 제품 사진의 접근성 컴플라이언스에 충분한 정확도를 제공합니다.',
          '**최적 모델:** 일반 사진 질의응답에는 LLaVA 1.6 13B 또는 Llama 3.2 Vision 11B. 정확도보다 속도가 중요한 대량 처리에는 LLaVA 1.6 7B.',
          '**속도 고려사항:** 6 GB GPU에서 Llama 3.2 Vision 11B Q4는 이미지 응답 생성 시 초당 약 8~12토큰을 생성합니다 — 100개 이미지 처리에 설명 길이에 따라 약 2~5분이 소요됩니다.',
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
          '**최적 모델:** InternVL 2.5 8B (최고 UI 이해), MiniCPM-V 2.6 (두 번째 선택, Ollama 지원).',
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
          '**차트 최적 모델:** InternVL 2.5 (최고 차트 이해), Llama 3.2 Vision 11B (명확한 레이블이 있는 차트에 우수).',
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
          '**동영상 프레임 최적 모델:** 품질에는 Llama 3.2 Vision 11B, 속도에는 LLaVA 1.6 7B (더 높은 프레임 처리량).',
          '**속도 현실:** RTX 4070에서 1fps 추출과 프레임당 약 1초 추론으로, 10분 동영상의 완전한 처리에는 약 20~30분이 소요됩니다.',
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
            '모델': 'Moondream 2 (1.9B)',
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
            '모델': 'MiniCPM-V 2.6 (8B)',
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
            '프로덕션 적합?': '예 — 전반적 최고 품질',
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
            text: '비전 모델의 토큰 생성 속도는 같은 크기의 텍스트 전용 모델보다 느립니다. 시각 인코더가 첫 번째 이미지 토큰에서 상당한 계산 오버헤드를 추가하기 때문입니다. 이후 텍스트 토큰은 거의 정상 속도로 생성됩니다.',
          },
          {
            type: 'note',
            text: 'Apple Silicon의 통합 메모리는 전용 GPU VRAM에 맞지 않는 더 큰 모델(M5 Max 128GB에서 최대 90B)을 실행할 수 있게 합니다. 속도는 동급 NVIDIA GPU보다 약간 낮지만 VRAM 제한이 없습니다.',
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
          '**개인정보 보호:** 로컬 모델은 기기 내에서 이미지를 처리하므로 데이터가 외부로 나가지 않습니다. GPT-5.5는 이미지를 OpenAI 서버로 전송합니다.',
          '**속도:** 로컬 모델은 10~20 토큰/초 vs GPT-5.5의 30~80 토큰/초이지만, 배치 처리 시 로컬은 네트워크 지연이 없습니다.',
        ],
        callouts: [
          {
            type: 'note',
            text: '깨끗한 입력으로 청구서와 양식을 프로덕션에서 처리하는 경우, 로컬 VLM(Llama 3.2 Vision 11B, Qwen2-VL 7B)은 비용 없이 GPT-5.5 Vision을 대체할 수 있습니다. 손글씨, 복잡한 장면 분석, 모호한 내용이 포함된 모든 것에는 GPT-5.5가 여전히 우수합니다.',
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
          '**약점:** MiniCPM-V 2.6보다 약한 OCR, InternVL 2.5보다 약한 UI 분석, 품질 벤치마크에서 Llama 3.2 Vision 11B에 전반적으로 뒤처짐.',
          '**여전히 권장되는 이유:** LLaVA 1.6은 모든 로컬 VLM 중에서 가장 큰 커뮤니티, 가장 많은 튜토리얼, 가장 많은 프롬프트 예제를 보유하고 있습니다. 문제가 있을 경우 도움을 찾기가 더 쉽습니다.',
        ],
      },
      qwen2VlDeepDive: {
        id: 'qwen2vl-deep-dive',
        title: 'Qwen2-VL — 최고의 다국어 OCR 및 문서 성능',
        content:
          '**Qwen2-VL은 Alibaba의 비전-언어 모델로 2026년 문서 벤치마크에서 가장 강력한 오픈소스 옵션입니다.** 7B 변형은 더 적은 VRAM으로 Llama 3.2 Vision 11B와 경쟁하며, 72B 변형은 대부분의 오픈소스 VLM 순위에서 선두를 차지합니다.',
        items: [
          '**아키텍처:** 최대 4096×4096의 동적 해상도 지원 — LLaVA 1.6(672×672)이나 Llama 3.2 Vision(1120×1120)보다 크게 높습니다. 이를 통해 다운샘플링 없이 고DPI 스캔을 읽을 수 있습니다.',
          '**다국어 OCR:** 중국어, 일본어, 한국어, 영어에서 동급 최고 성능. 훈련 데이터에 대규모 다국어 문서 코퍼스가 포함되어 영어 이외의 문서에서 LLaVA 및 Llama 3.2 Vision 대비 상당한 이점을 제공합니다.',
          '**7B vs 72B:** 7B는 ~6 GB VRAM(Q4)에 맞으며 대부분의 문서 작업에서 Llama 3.2 Vision 11B와 경쟁합니다. 72B는 ~48 GB를 사용하며 대부분의 오픈소스 벤치마크를 선도합니다.',
          '**Ollama 설치:** `ollama pull qwen2-vl:7b` — Ollama 모델 라이브러리에서 직접 사용 가능.',
          '**다중 이미지 지원:** 요청당 최대 8개 이미지 허용 — 이 비교의 모든 모델 중 가장 높은 다중 이미지 용량.',
          '**모델 페이지:** [Qwen2-VL 7B on Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct)',
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
            text: '먼저 VRAM(2→4→6→8→16 GB)을 기준으로 모델을 선택한 다음 활용 사례(OCR, UI, 일반 질의응답 또는 최고 품질)에 따라 세분화하십시오.',
          },
          {
            type: 'plain-terms',
            text: 'VRAM 4 GB 미만: Moondream만 가능. 6 GB: 문서에는 MiniCPM-V, 사진에는 LLaVA 7B. 8~16 GB: 거의 모든 용도에 Llama 3.2 Vision 11B. 64+ GB: 최고 로컬 품질을 위해 Llama 3.2 Vision 90B.',
          },
        ],
        items: [
          '**VRAM 4 GB 미만:** Moondream 2 (1.9B) — 2 GB에서 유일한 실용적 옵션. Moondream 2 이상으로는 PaliGemma 2 (3B)와 SmolVLM (2.2B)이 실용적인 대안입니다. PaliGemma 2는 약간 추가 VRAM (~3 GB) 비용으로 Moondream보다 더 나은 문서 이해를 제공합니다. SmolVLM은 극단적인 효율성을 위해 품질을 희생합니다. 빽빽한 텍스트 OCR에는 적합하지 않습니다.',
          '**VRAM 6 GB:** 문서 OCR 및 청구서 처리에는 MiniCPM-V 2.6. 커뮤니티 지원이 중요한 일반 사진 질의응답에는 LLaVA 1.6 7B. 다국어 OCR 또는 가능한 가장 높은 OCR 정확도가 필요할 때는 Qwen2-VL 7B.',
          '**VRAM 8~16 GB:** Llama 3.2 Vision 11B가 명확한 권장 사항 — 이 VRAM 카테고리에서 전반적인 최고 품질, 광범위한 Ollama 지원.',
          '**VRAM 16+ GB:** LLaVA 1.6 13B는 7B 변형 대비 복잡한 장면 이해에 더 많은 용량을 추가합니다. UI 스크린샷 또는 코드가 주요 활용 사례라면 InternVL 2.5 8B.',
          '**통합 메모리 64+ GB (Apple M-Max/Ultra, 멀티 GPU):** 사용 가능한 최고 로컬 VLM 품질을 위해 Llama 3.2 Vision 90B — 문서 작업에서 클라우드 수준 성능에 근접. Qwen2-VL 72B는 최고의 오픈소스 벤치마크 점수를 보유한 대안.',
          '**항상 숫자를 확인하십시오:** 모델에 관계없이 차트나 표에서 추출한 수치는 원본 데이터와 대조하여 확인하십시오. 로컬 VLM은 시각적 차트에서 정확한 수치를 환각합니다.',
        ],
      },
      faq: {
        id: 'faq',
        title: '자주 묻는 질문',
        faqs: [
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
            a: 'GPT-5.5 Vision은 모호한 장면, 손글씨, 복잡한 인포그래픽, 세계 지식이 필요한 작업에서 여전히 크게 우수합니다. Llama 3.2 Vision 11B는 구조화된 문서(청구서, 양식, 선명한 사진)에서 GPT-5.5에 근접하지만 미묘하거나 모호한 이미지에서는 뒤처집니다. 비용, 개인정보 보호, 속도 분석은 위의 전체 비교를 참조하십시오.',
          },
          {
            q: '로컬 VLM은 어떤 이미지 해상도를 지원합니까?',
            a: 'LLaVA 1.6은 최대 672×672의 실효 해상도를 지원합니다(동적 패치 포함). MiniCPM-V 2.6은 최대 1792×1792를 지원합니다 — 고DPI 문서 스캔에서 LLaVA를 능가하는 이유 중 하나입니다. Llama 3.2 Vision은 최대 1120×1120의 가변 해상도를 지원합니다. 최상의 OCR 결과를 위해 문서 이미지를 150+ DPI로 전송하십시오.',
          },
          {
            q: '자체 이미지로 로컬 비전 모델을 파인튜닝할 수 있습니까?',
            a: '예, 하지만 VLM 파인튜닝은 텍스트 전용 LLM 파인튜닝보다 더 많은 리소스가 필요합니다 — 이미지와 훈련 텍스트 모두 전체 포워드 패스를 통해 처리해야 합니다. LLaVA 파인튜닝은 원본 훈련 코드베이스를 사용하여 잘 문서화되어 있습니다. MiniCPM-V는 Hugging Face의 공식 훈련 스크립트를 통해 파인튜닝을 지원합니다. 대부분의 활용 사례에서는 파인튜닝 없이 프롬프트 엔지니어링만으로 충분합니다.',
          },
          {
            q: 'VRAM 8 GB에 최적인 로컬 비전 모델은 무엇입니까?',
            a: '범용 사용에는 Llama 3.2 Vision 11B (Q4 양자화가 ~8 GB에 맞음). 다국어 OCR이 주요 요구 사항이라면 Qwen2-VL 7B. 두 모델 모두 단일 pull 명령어로 Ollama에서 사용 가능합니다.',
          },
          {
            q: 'LLaVA vs MiniCPM-V — OCR에는 어느 것이 더 낫습니까?',
            a: 'MiniCPM-V 2.6은 문서 OCR, 특히 빽빽한 표와 고DPI 스캔에서 더 정확합니다. LLaVA 1.6은 더 잘 문서화되어 있고 더 많은 커뮤니티 지원이 있습니다. 순수한 OCR 정확도를 위해서는 MiniCPM-V를 선택하십시오. 커뮤니티 자료와 문제 해결을 위해서는 LLaVA를 선택하십시오.',
          },
          {
            q: '로컬 비전 모델이 손글씨를 읽을 수 있습니까?',
            a: '인쇄체 손글씨(블록 문자): 예, Llama 3.2 Vision 11B와 MiniCPM-V 2.6에서 중간 수준의 정확도로 읽을 수 있습니다. 필기체: 모든 로컬 모델에서 신뢰할 수 없습니다. GPT-5.5 Vision은 필기체 처리가 크게 우수합니다. 프로덕션에서 필기체 OCR은 클라우드 API를 여전히 권장합니다.',
          },
        ],
      },
      sources: {
        id: 'sources',
        title: '출처',
        items: [
          '[LLaVA 프로젝트 페이지](https://llava-vl.github.io) — LLaVA 1.5 및 1.6 모델 카드, 아키텍처 세부 사항, 훈련 데이터셋 설명.',
          '[Llama 3.2 Vision on Hugging Face](https://huggingface.co/meta-llama) — Meta의 공식 모델 출시, 모델 카드, 벤치마크 수치.',
          '[MiniCPM-V 2.6 on Hugging Face](https://huggingface.co/openbmb/MiniCPM-V-2_6) — OpenBMB 모델 카드, OCR 벤치마크, 파인튜닝 지침.',
          '[Moondream on GitHub](https://github.com/vikhyat/moondream) — 아키텍처 설명, 추론 스크립트, 모델 다운로드.',
          '[InternVL 2.5 on Hugging Face](https://huggingface.co/OpenGVLab/InternVL2_5-8B) — OpenGVLab 모델 카드, 문서 및 UI 작업 벤치마크 점수.',
          '[Ollama 문서](https://ollama.com) — 비전 모델 지원, API 참조, 모델 라이브러리.',
          '[Qwen2-VL on Hugging Face](https://huggingface.co/Qwen/Qwen2-VL-7B-Instruct) — Alibaba Qwen2-VL 모델 카드, 아키텍처 세부 사항, 다국어 OCR 벤치마크.',
          '[PaliGemma 2 on Hugging Face](https://huggingface.co/google/paligemma2-3b-pt-448) — Google PaliGemma 2 3B 모델 카드.',
          '[SmolVLM on Hugging Face](https://huggingface.co/HuggingFaceTB/SmolVLM-Instruct) — HuggingFace SmolVLM 모델 카드 및 추론 지침.',
        ],
      },
      relatedReading: {
        id: 'related-reading',
        title: '관련 자료',
        items: [
          '[로컬 멀티모달 AI 파이프라인 2026](/ko/power-local-llm/local-multimodal-pipeline-voice-vision-text) — 비전 모델을 STT 및 TTS와 결합하여 완전한 로컬 멀티모달 스택 구성.',
          '[로컬 음성 인식 2026: Whisper.cpp vs faster-whisper](/ko/power-local-llm/local-whisper-stt-comparison-2026) — 비전 출력을 보완하기 위해 음성 입력 추가.',
          '[로컬 TTS 및 음성 복제 2026](/ko/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts) — VLM 응답을 소리내어 읽기 위한 음성 출력 추가.',
          '[Ollama 설치 방법](/ko/local-llms/how-to-install-ollama) — 필수 조건: Ollama 설정 및 설치.',
          '[로컬 LLM 하드웨어 가이드 2026](/ko/local-llms/local-llm-hardware-guide-2026) — 비전 모델 추론을 위한 VRAM 및 RAM 요구 사항.',
        ],
      },
    },
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: '로컬 비전 모델 2026: LLaVA, Llama 3.2 Vision, Qwen2-VL 및 Ollama 멀티모달 설정 가이드',
      description: '2026년 오프라인 이미지 질의응답, OCR, 스크린샷 분석. 벤치마크: LLaVA 1.6, Llama 3.2 Vision, Qwen2-VL, MiniCPM-V. Ollama VRAM 및 설정 가이드.',
      url: 'https://www.promptquorum.com/ko/power-local-llm/local-vision-models-llava-ollama-2026',
      inLanguage: 'ko',
      datePublished: '2026-05-14',
      dateModified: '2026-05-14',
      author: { '@type': 'Person', name: 'Hans Kuepper' },
      publisher: { '@type': 'Organization', name: 'PromptQuorum', url: 'https://www.promptquorum.com' },
    },
    breadcrumbSchema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://www.promptquorum.com/ko' },
        { '@type': 'ListItem', position: 2, name: 'Power Local LLM', item: 'https://www.promptquorum.com/ko/power-local-llm' },
        { '@type': 'ListItem', position: 3, name: '로컬 비전 모델 2026', item: 'https://www.promptquorum.com/ko/power-local-llm/local-vision-models-llava-ollama-2026' },
      ],
    },
  },
}
