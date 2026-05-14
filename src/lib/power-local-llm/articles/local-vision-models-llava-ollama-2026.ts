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
    title: 'Local Vision Models 2026: LLaVA, Llama 3.2 Vision, and Ollama Multimodal Setup',
    seoTitle: 'Local Vision Models 2026: LLaVA, Llama 3.2 Vision & Ollama Setup',
    intro:
      'Vision-language models (VLMs) accept image input alongside text and return text output — enabling document OCR, image Q&A, screenshot analysis, and chart reading locally. In 2026, the easiest path to running VLMs is through Ollama: pull a model, send an image, get a description or answer. This guide compares the leading local vision models (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, InternVL 2.5), covers Ollama setup step-by-step, and maps each model to its best use case based on VRAM requirements and quality benchmarks.',
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
      'InternVL 2.5 (8B)',
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
      '**For most developers with 6–8 GB of VRAM, MiniCPM-V 2.6 (8B) or LLaVA 1.6 7B via Ollama is the recommended starting point in 2026.** Both run in ~6 GB VRAM, support document OCR, image Q&A, and screenshot analysis, and are available as single Ollama pull commands. For the best overall quality with 8–16 GB VRAM, Llama 3.2 Vision 11B is the strongest local VLM — especially for document and photo understanding. With only 2 GB VRAM available, Moondream 2 (1.9B) is the only practical choice but has limited understanding of complex scenes. All models run 100% offline once downloaded; no API key or cloud account required.',
    quickAnswerTop: {
      en: {
        question: 'What are the best local vision models to run with Ollama in 2026?',
        answer:
          'The best local vision model depends on your VRAM and use case. With 6–8 GB VRAM, MiniCPM-V 2.6 gives the best balance of OCR accuracy and general image understanding. With 8–16 GB VRAM, Llama 3.2 Vision 11B is the top choice for general visual Q&A and document analysis. With 2 GB VRAM, Moondream 2 is the only option — fast but limited in capability. InternVL 2.5 is the best for UI screenshots and charts but has less Ollama integration than the others.',
        bullets: [
          'Under 4 GB VRAM → Moondream 2 (1.9B): fast, limited understanding of complex images.',
          '6 GB VRAM → MiniCPM-V 2.6 or LLaVA 1.6 7B: best balance of quality and hardware fit.',
          '8–16 GB VRAM → Llama 3.2 Vision 11B: top local VLM for general photos and documents.',
          '64+ GB (or Apple M-series) → Llama 3.2 Vision 90B: best local quality, near-cloud performance.',
          'Setup: `ollama pull llama3.2-vision` then `ollama run llama3.2-vision "Describe this" --image photo.jpg`.',
          'Best for OCR: MiniCPM-V 2.6, Llama 3.2 Vision — strong on text extraction from documents.',
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
      { label: 'Setup via Ollama (Step-by-Step)', anchor: '#ollama-setup' },
      { label: 'Use Case 1: Document OCR and Extraction', anchor: '#use-case-ocr' },
      { label: 'Use Case 2: Image Q&A and Description', anchor: '#use-case-qa' },
      { label: 'Use Case 3: Screenshot and UI Analysis', anchor: '#use-case-screenshot' },
      { label: 'Use Case 4: Chart and Graph Reading', anchor: '#use-case-chart' },
      { label: 'VRAM and Performance Reality Check', anchor: '#vram-reality' },
      { label: 'LLaVA Deep Dive', anchor: '#llava-deep-dive' },
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
          '**OCR strength:** MiniCPM-V 2.6 > Llama 3.2 Vision 11B > LLaVA 1.6 13B > LLaVA 1.6 7B > Moondream 2.',
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
      vramReality: {
        id: 'vram-reality',
        title: 'VRAM and Performance Reality Check',
        content:
          'Local vision models add a vision encoder on top of the base LLM, which increases both VRAM requirements and inference time compared to text-only models.',
        columns: ['Model', 'VRAM (Q4)', 'Tokens/sec (RTX 4070)', 'Practical for production?'],
        rows: [
          {
            'Model': 'Moondream 2 (1.9B)',
            'VRAM (Q4)': '~2 GB',
            'Tokens/sec (RTX 4070)': '~25–35',
            'Practical for production?': 'Yes — for simple tasks',
          },
          {
            'Model': 'LLaVA 1.6 7B',
            'VRAM (Q4)': '~6 GB',
            'Tokens/sec (RTX 4070)': '~15–20',
            'Practical for production?': 'Yes — general purpose',
          },
          {
            'Model': 'MiniCPM-V 2.6 (8B)',
            'VRAM (Q4)': '~6 GB',
            'Tokens/sec (RTX 4070)': '~12–18',
            'Practical for production?': 'Yes — OCR and docs',
          },
          {
            'Model': 'Llama 3.2 Vision 11B',
            'VRAM (Q4)': '~8 GB',
            'Tokens/sec (RTX 4070)': '~10–14',
            'Practical for production?': 'Yes — best general quality',
          },
          {
            'Model': 'LLaVA 1.6 13B',
            'VRAM (Q4)': '~10 GB',
            'Tokens/sec (RTX 4070)': '~8–12',
            'Practical for production?': 'Yes — with 12 GB GPU',
          },
          {
            'Model': 'Llama 3.2 Vision 90B',
            'VRAM (Q4)': '~64 GB',
            'Tokens/sec (RTX 4070)': 'N/A (needs multi-GPU or M-Max)',
            'Practical for production?': 'High-end Apple Silicon only',
          },
        ],
        callouts: [
          {
            type: 'note',
            text: 'Token generation speed for vision models is slower than for text-only models of the same size because the vision encoder adds significant computational overhead on the first image token. Subsequent text tokens generate at near-normal speed.',
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
          '**Under 4 GB VRAM:** Moondream 2 (1.9B) — only viable option. Expect basic image descriptions; not suitable for dense text OCR.',
          '**6 GB VRAM:** MiniCPM-V 2.6 for document OCR and invoice processing. LLaVA 1.6 7B for general photo Q&A where community support matters.',
          '**8–16 GB VRAM:** Llama 3.2 Vision 11B is the clear recommendation — best overall quality at this VRAM tier, wide Ollama support.',
          '**16+ GB VRAM:** LLaVA 1.6 13B adds more capacity for complex scene understanding vs. the 7B variant. InternVL 2.5 8B if your primary use case is UI or code screenshots.',
          '**64+ GB unified memory (Apple M-Max/Ultra, multi-GPU):** Llama 3.2 Vision 90B for the best local VLM quality available, approaching cloud-tier performance for document tasks.',
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
            a: 'GPT-4o Vision is still meaningfully better than any local VLM on ambiguous scenes, handwriting, complex infographics, and tasks requiring world knowledge combined with visual understanding. Llama 3.2 Vision 11B approaches GPT-4o on structured documents (invoices, forms, clear photos) but falls behind on anything requiring nuanced reasoning about complex or ambiguous imagery. The gap narrows as model sizes increase — Llama 3.2 Vision 90B is closest to cloud quality.',
          },
          {
            q: 'What image resolution do local VLMs support?',
            a: 'LLaVA 1.6 supports up to 672×672 effective resolution (with dynamic patching). MiniCPM-V 2.6 supports up to 1792×1792 — one reason it outperforms LLaVA on high-DPI document scans. Llama 3.2 Vision supports variable resolution up to 1120×1120. For best OCR results, send document images at 150+ DPI.',
          },
          {
            q: 'Can I fine-tune a local vision model on my own images?',
            a: 'Yes, but fine-tuning VLMs is more resource-intensive than fine-tuning text-only LLMs — you need to process both image and text training pairs through the full forward pass. LLaVA fine-tuning is well-documented using the original training codebase. MiniCPM-V supports fine-tuning via its official training scripts on Hugging Face. For most use cases, prompt engineering alone is sufficient without fine-tuning.',
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
    title: 'Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision und Ollama Multimodal-Setup',
    seoTitle: 'Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision & Ollama Setup',
    intro:
      'Vision-Language-Modelle (VLMs) verarbeiten Bild- und Texteingaben gemeinsam und erzeugen Textausgaben – für Dokument-OCR, Bild-Q&A, Screenshot-Analyse und Diagramminterpretation, vollständig lokal. Im Jahr 2026 ist Ollama der einfachste Weg, VLMs auszuführen: Modell herunterladen, Bild senden, Beschreibung oder Antwort erhalten. Dieser Leitfaden vergleicht die führenden lokalen Vision-Modelle (LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6, Moondream 2, InternVL 2.5) und führt Schritt für Schritt durch das Ollama-Setup.',
    metaDescription:
      'Lokale Vision-Language-Modelle mit Ollama 2026 ausführen: LLaVA 1.6, Llama 3.2 Vision, MiniCPM-V 2.6. Dokument-OCR, Bild-Q&A, Screenshot-Analyse – vollständig offline mit VRAM-Anforderungen und Qualitätsbenchmarks.',
    twitterDescription:
      'Lokale Vision-Modelle 2026: LLaVA, Llama 3.2 Vision, MiniCPM-V via Ollama. Bild-Q&A, OCR, Screenshot-Analyse – 100 % offline. VRAM-Leitfaden und Setup-Schritte.',
    sections: {},
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
