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
      { label: 'Modèles locaux vs GPT-4o Vision', anchor: '#local-vs-gpt4o' },
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
          '**Aucun de ces modèles n\'atteint la qualité de GPT-4o Vision.** Les VLM locaux en 2026 sont une solide option de niveau 2 — excellents pour les documents structurés, plus faibles sur l\'écriture manuscrite et les infographies complexes.',
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
          { 'Modèle': 'GPT-4o Vision', 'Fournisseur': '✓', 'Date': '✓', 'Total': '✓', 'TVA': '✓', 'Lignes': '✓', 'Score': '5/5' },
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
        title: 'Modèles de vision locaux vs GPT-4o Vision',
        content:
          'Les VLM locaux ont considérablement réduit l\'écart sur les documents structurés, mais restent en retrait sur les tâches complexes.',
        items: [
          '**Documents structurés (factures, formulaires) :** Modèles locaux à 80–90 % de la qualité GPT-4o — suffisant pour la production.',
          '**Scènes complexes, images ambiguës :** Modèles locaux à 50–70 % de GPT-4o — écart de qualité notable.',
          '**Reconnaissance de l\'écriture manuscrite :** Modèles locaux nettement plus faibles, surtout pour le cursif.',
          '**Extraction de données de graphiques :** Peu fiable sur les deux, mais GPT-4o plus précis sur les valeurs numériques.',
          '**Coût :** GPT-4o Vision à 0,01–0,03 $ par image vs 0 $ en local. 10 000 images/mois = 100–300 $ économisés.',
          '**Confidentialité :** Traitement local — aucune image n\'est envoyée aux serveurs OpenAI. La CNIL recommande le traitement local pour les données professionnelles sensibles.',
          '**Vitesse :** Modèles locaux à 10–20 tokens/sec vs GPT-4o à 30–80 tokens/sec, mais sans latence réseau pour le traitement par lots.',
        ],
        callouts: [
          { type: 'note', text: 'Pour le traitement de factures avec une entrée propre, les VLM locaux (Llama 3.2 Vision 11B, Qwen2-VL 7B) peuvent remplacer GPT-4o Vision à coût zéro.' },
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
            q: 'Comment les VLM locaux se comparent-ils à GPT-4o Vision ?',
            a: 'GPT-4o Vision reste nettement meilleur sur les scènes ambiguës, l\'écriture manuscrite et les infographies complexes. Llama 3.2 Vision 11B s\'approche de GPT-4o sur les documents structurés. Voir la comparaison complète (coût, confidentialité, vitesse) ci-dessus.',
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
            a: 'Écriture en lettres d\'imprimerie : oui, avec une précision modérée. Écriture cursive : peu fiable sur tous les modèles locaux. GPT-4o Vision est nettement meilleur pour le cursif.',
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
          '[Pipeline IA multimodale locale 2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=fr) — Combiner modèles de vision, STT et TTS en une stack locale complète.',
          '[Reconnaissance vocale locale 2026 : Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026?lang=fr) — Ajouter la saisie vocale en complément de la vision.',
          '[TTS local et clonage vocal 2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts?lang=fr) — Ajouter la synthèse vocale pour lire les réponses VLM.',
          '[Installer Ollama](/local-llms/how-to-install-ollama?lang=fr) — Prérequis : configuration et paramétrage d\'Ollama.',
          '[Guide matériel LLM local 2026](/local-llms/local-llm-hardware-guide-2026?lang=fr) — Exigences VRAM et RAM pour l\'inférence de modèles vision.',
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
      { label: 'ローカルVLM vs GPT-4o Vision比較', anchor: '#local-vs-gpt4o' },
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
          '**これらのモデルはいずれもGPT-4o Visionの品質には達しません。** 2026年のローカルVLMは強力なTier-2の選択肢 — 構造化ドキュメントと明確な写真には優れていますが、手書きや複雑なインフォグラフィックスには弱点があります。',
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
          { 'モデル': 'GPT-4o Vision', 'ベンダー': '✓', '日付': '✓', '合計': '✓', '税額': '✓', '行項目': '✓', 'スコア': '5/5' },
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
        title: 'ローカルVLM vs GPT-4o Vision比較',
        content:
          'ローカルVLMは構造化ドキュメントでのギャップを大幅に縮めましたが、複雑で曖昧なタスクではGPT-4o Visionに後れを取っています。',
        items: [
          '**構造化ドキュメント（請求書・フォーム）：** ローカルモデルはGPT-4o品質の80〜90% — クリーンでフォーマットが整ったドキュメントなら本番使用に十分。',
          '**複雑なシーン・曖昧な画像：** ローカルモデルはGPT-4oの50〜70% — 珍しいコンテキスト・照明・曖昧なコンテンツで明確な品質差。',
          '**手書き認識：** ローカルモデルは特に草書体で著しく弱い。GPT-4o Visionは手書きを大幅に良く処理。',
          '**グラフデータ抽出：** 両方で信頼性が低いが、GPT-4oは正確な数値でより精確。',
          '**コスト：** GPT-4o Vision：1枚あたり$0.01〜$0.03 vs ローカルは$0。月10,000枚 = $100〜$300の節約。',
          '**プライバシー：** ローカルモデルはデバイス上で画像を処理 — データが外部に送信されない。GPT-4oは画像をOpenAIサーバーに送信。',
          '**速度：** ローカルモデル10〜20トークン/秒 vs GPT-4o 30〜80トークン/秒、ただしローカルはバッチ処理でネットワーク遅延なし。',
        ],
        callouts: [
          { type: 'note', text: 'クリーンな入力での請求書・フォーム処理なら、ローカルVLM（Llama 3.2 Vision 11B、Qwen2-VL 7B）がGPT-4o Visionをゼロコストで代替できます。手書きや複雑なシーン分析にはGPT-4oが依然として優位です。' },
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
            q: 'ローカルビジョンモデルはGPT-4o Visionとどう比較されますか？',
            a: 'GPT-4o Visionは曖昧なシーン・手書き・複雑なインフォグラフィックスで依然として大幅に優れています。Llama 3.2 Vision 11Bは構造化ドキュメントでGPT-4oに近づきますが、曖昧な画像での推論には後れを取ります。コスト・プライバシー・速度の詳細な比較は上記を参照してください。',
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
            a: '活字体の手書き（ブロック体）：Llama 3.2 Vision 11BとMiniCPM-V 2.6で中程度の精度で認識可能。草書体：すべてのローカルモデルで信頼性が低い。GPT-4o Visionは草書体で大幅に優れています。草書体ドキュメントの本番手書きOCRにはクラウドAPIが依然として推奨されます。',
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
          '[ローカルマルチモーダルAIパイプライン2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=ja) — ビジョンモデルとSTT・TTSを組み合わせた完全なローカルマルチモーダルスタック。',
          '[ローカル音声認識2026：Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026?lang=ja) — ビジョン出力を補完する音声入力の追加。',
          '[ローカルTTSと音声クローニング2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts?lang=ja) — VLMの応答を読み上げる音声出力の追加。',
          '[Ollamaのインストール](/local-llms/how-to-install-ollama?lang=ja) — 前提条件：OllamaのセットアップとConfiguration。',
          '[ローカルLLMハードウェアガイド2026](/local-llms/local-llm-hardware-guide-2026?lang=ja) — ビジョンモデル推論のVRAMとRAM要件。',
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
      { label: '本地VLM与GPT-4o Vision对比', anchor: '#local-vs-gpt4o' },
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
          '**这些模型均未达到GPT-4o Vision的质量水平。** 2026年的本地VLM是强有力的二线选择——对结构化文档和清晰照片表现出色，但对手写、模糊场景和复杂信息图表存在明显短板。',
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
          { '模型': 'GPT-4o Vision', '供应商': '✓', '日期': '✓', '总金额': '✓', '税额': '✓', '行项目': '✓', '得分': '5/5' },
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
        title: '本地VLM与GPT-4o Vision对比',
        content:
          '本地VLM在结构化文档上已大幅缩小差距，但在复杂和模糊任务上仍落后于GPT-4o Vision。',
        items: [
          '**结构化文档（发票、表单）：** 本地模型达到GPT-4o质量的80–90%——对格式规范的文档已足够用于生产。',
          '**复杂场景、模糊图像：** 本地模型达到GPT-4o的50–70%——在异常上下文、光线或模糊内容方面存在明显质量差距。',
          '**手写识别：** 本地模型明显较弱，尤其是草书体。GPT-4o Vision在手写处理上大幅领先。',
          '**图表数据提取：** 本地模型和GPT-4o均不可靠，但GPT-4o在精确数值方面更准确。',
          '**成本：** GPT-4o Vision每张图像$0.01–$0.03，本地为$0。每月10,000张图像节省$100–$300。',
          '**隐私：** 本地模型在设备上处理图像——数据不会离开本机。GPT-4o将图像发送至OpenAI服务器。',
          '**速度：** 本地模型10–20 token/秒，GPT-4o 30–80 token/秒，但本地批处理无网络延迟。',
        ],
        callouts: [
          { type: 'note', text: '对于输入规范的发票和表单处理，本地VLM（Llama 3.2 Vision 11B、Qwen2-VL 7B）可以零成本替代GPT-4o Vision。涉及手写、复杂场景分析或模糊内容时，GPT-4o仍占优势。' },
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
            q: '本地视觉模型与GPT-4o Vision相比如何？',
            a: 'GPT-4o Vision在模糊场景、手写、复杂信息图表以及需要结合世界知识的视觉理解任务上仍明显更强。Llama 3.2 Vision 11B在结构化文档（发票、表单、清晰照片）上接近GPT-4o，但在模糊图像推理上有差距。成本、隐私和速度的详细对比见上文。',
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
            a: '印刷体手写（块状字母）：Llama 3.2 Vision 11B和MiniCPM-V 2.6可以中等精度识别。草书手写：所有本地模型均不可靠。GPT-4o Vision在草书方面大幅领先。生产环境中的草书文档手写OCR仍建议使用云端API。',
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
          '[本地多模态AI流水线2026](/power-local-llm/local-multimodal-pipeline-voice-vision-text?lang=zh) — 将视觉模型与STT和TTS结合构建完整本地多模态栈。',
          '[本地语音识别2026：Whisper.cpp vs faster-whisper](/power-local-llm/local-whisper-stt-comparison-2026?lang=zh) — 为视觉输出添加语音输入。',
          '[本地TTS与声音克隆2026](/power-local-llm/local-tts-voice-cloning-piper-coqui-xtts?lang=zh) — 添加语音输出以朗读VLM回答。',
          '[安装Ollama](/local-llms/how-to-install-ollama?lang=zh) — 前置条件：Ollama配置与设置。',
          '[本地LLM硬件指南2026](/local-llms/local-llm-hardware-guide-2026?lang=zh) — 视觉模型推理的VRAM和RAM要求。',
        ],
      },
    },
  },
}
